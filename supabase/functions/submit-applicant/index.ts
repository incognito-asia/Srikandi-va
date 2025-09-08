import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";
import { corsHeaders } from "../_shared/cors.ts";

const applicantSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  skills: z.string().min(20),
});

type ApplicantData = z.infer<typeof applicantSchema>;

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

function saveApplicantToDatabase(data: ApplicantData) {
  return supabaseAdmin.from("applicants").insert({
    full_name: data.fullName,
    email: data.email,
    phone_number: data.phoneNumber,
    skills: data.skills,
  });
}

async function sendWhatsAppMessage(data: ApplicantData) {
  const cleanPhoneNumber = data.phoneNumber.replace(/\D/g, '');
  
  // Pesan disesuaikan untuk notifikasi lamaran baru
  const messageBody = `New Applicant Submission:\n\nName: ${data.fullName}\nPhone: ${data.phoneNumber}\nSkills: ${data.skills}`;

  const response = await fetch(
    `https://graph.facebook.com/v20.0/${Deno.env.get("WA_PHONE_NUMBER_ID")}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Deno.env.get("META_WA_TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: cleanPhoneNumber, // Nomor tujuan notifikasi
        type: "text",
        text: {
          body: messageBody,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error("WhatsApp API error:", errorData);
    // Kita tidak melempar error agar lamaran tetap tersimpan walau notifikasi gagal
  }
  return response.json();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const applicantData = applicantSchema.parse(body);

    // Menjalankan penyimpanan ke DB dan pengiriman WA secara paralel
    const [dbResult, whatsappResponseData] = await Promise.all([
      saveApplicantToDatabase(applicantData),
      sendWhatsAppMessage(applicantData),
    ]);

    if (dbResult.error) throw dbResult.error;

    return new Response(
      JSON.stringify({ message: "Lamaran berhasil terkirim!", whatsapp_response: whatsappResponseData }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (e) {
    const error = e instanceof Error ? e : new Error(String(e));
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});