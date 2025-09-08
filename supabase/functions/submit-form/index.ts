import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";
import { corsHeaders } from "../_shared/cors.ts";

const formSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  companyName: z.string().optional(),
  description: z.string().min(10),
});

type FormData = z.infer<typeof formSchema>;

const supabaseAdmin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

// fungsi save to database
function saveToDatabase(data: FormData) {
  return supabaseAdmin.from("requests").insert({
    full_name: data.fullName,
    email: data.email,
    phone_number: data.phoneNumber,
    company_name: data.companyName,
    description: data.description,
  });
}

async function sendWhatsAppMessage(data: FormData) {
  const cleanPhoneNumber = data.phoneNumber.replace(/\D/g, "");

  // template message whatsapp
  let messageBody = `Nama: ${data.fullName}`;

  if (data.companyName && data.companyName.trim() !== "") {
    messageBody += `\nCompany: ${data.companyName}`;
  }

  messageBody += `\nEmail: ${data.email}\nDescription: ${data.description}`;

  const response = await fetch(`https://graph.facebook.com/v20.0/${Deno.env.get("WA_PHONE_NUMBER_ID")}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Deno.env.get("META_WA_TOKEN")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: cleanPhoneNumber,
      type: "text",
      text: {
        body: messageBody,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("WhatsApp API error:", errorData);
    throw new Error("Failed to send WhatsApp message.");
  }
  return response.json();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  try {
    const body = await req.json();
    const formData = formSchema.parse(body);

    const [dbResult, whatsappResponseData] = await Promise.all([saveToDatabase(formData), sendWhatsAppMessage(formData)]);

    if (dbResult.error) throw dbResult.error;

    return new Response(
      JSON.stringify({
        message: "Request processed successfully!",
        whatsapp_response: whatsappResponseData,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (e) {
    const error = e instanceof Error ? e : new Error(String(e));
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
