"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { createClient } from "@/lib/supabaseClient";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const applicantSchema = z.object({
  fullName: z.string().min(3, { message: "Nama lengkap harus diisi." }),
  email: z.string().email({ message: "Format email tidak valid." }),
  phoneNumber: z.string().min(10, { message: "Nomor telepon minimal 10 digit." }),
  skills: z.string().min(20, { message: "Jelaskan keahlian Anda." }),
});

export function ApplicantForm() {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const form = useForm<z.infer<typeof applicantSchema>>({
    resolver: zodResolver(applicantSchema),
    defaultValues: { fullName: "", email: "", phoneNumber: "", skills: "" },
  });

  async function onSubmit(values: z.infer<typeof applicantSchema>) {
    setIsLoading(true);
    try {
      // Panggil Edge Function hanya dengan data teks
      const { error } = await supabase.functions.invoke("submit-applicant", {
        body: values,
      });

      if (error) {
        throw new Error(error.message);
      }

      toast.success("Lamaran Terkirim!", {
        description: "Terima kasih, kami akan meninjau lamaran Anda.",
      });
      form.reset();
    } catch (error) {
      toast.error("Terjadi Kesalahan", {
        description: error instanceof Error ? error.message : "Gagal mengirim lamaran.",
      });
      console.error("Error submitting application:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full bg-white border border-[#A11692]">
      <CardHeader>
        <CardTitle>
          Formulir <span className="font-suwargi text-[#F45866]">Lamaran</span> VA
        </CardTitle>
        <CardDescription>Isi detail di bawah ini untuk menjadi bagian dari tim kami.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Email</FormLabel>
                  <FormControl>
                    <Input placeholder="janedoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Telepon/WhatsApp</FormLabel>
                  <FormControl>
                    <Input placeholder="+62 812 3456 7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jelaskan Keahlian Anda</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Saya ahli dalam manajemen media sosial, riset data..." className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? "Mengirim..." : "Kirim Lamaran"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
