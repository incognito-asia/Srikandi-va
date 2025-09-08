import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RequestForm } from "@/components/forms/RequestForm";
import { ApplicantForm } from "@/components/forms/ApplicantForm";

import { NavbarForm } from "@/components/NavBarForm";
export default function RequestPage() {
  return (
    <>
      <NavbarForm />

      <div className="w-full min-h-screen bg-[#EDF2F7] flex items-center justify-center p-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Kolom Kiri: Judul dan Form (via Tabs) */}
            <div className="space-y-6">
              <h2 className="text-2xl 2xl:text-5xl xl:text-[36px] font-normal sm:text-5xl">
                <span className="font-suwargi text-[#F45866]">Hubungi Kami</span>
                <span className="font-bold"> dan Mulai Tingkatkan </span>
                <span className="font-suwargi text-[#F45866]">Produktivitas</span> <span className="font-bold">Kerja</span>
              </h2>
              <Tabs defaultValue="request-va" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="request-va">Saya Butuh VA</TabsTrigger>
                  <TabsTrigger value="apply-va">Saya Ingin Menjadi VA</TabsTrigger>
                </TabsList>
                <TabsContent value="request-va" className="mt-6">
                  <RequestForm />
                </TabsContent>
                <TabsContent value="apply-va" className="mt-6">
                  <ApplicantForm />
                </TabsContent>
              </Tabs>
            </div>

            {/* Kolom Kanan: Gambar (disembunyikan di bawah lg) */}
            <div className="hidden lg:flex lg:justify-end">
              <Image src="/images/imagefixformpage.jpg" alt="Virtual Assistant" width={550} height={950} className="rounded-xl object-cover xl:w-[650px] xl:h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
