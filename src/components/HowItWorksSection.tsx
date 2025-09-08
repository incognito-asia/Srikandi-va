// src/components/HowItWorksSection.tsx
"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const steps = [
  { icon: "/images/icon_kebutuhan.svg", title: "Tentukan Kebutuhanmu", description: "Jelaskan detail pekerjaan dan keterampilan yang dibutuhkan." },
  { icon: "/images/icon_jam_kerja.svg", title: "Tentukan Jam Kerja", description: "Tentukan kapan saja asisten virtual harus siap bekerja." },
  { icon: "/images/icon_kandidat.svg", title: "Mendapat Kandidat", description: "Perkenalkan kandidat dengan situasi dan kondisi pekerjaan." },
  { icon: "/images/icon_efisien.svg", title: "Kerja Lebih Efisien", description: "Rasakan peningkatan produktivitas dengan pekerjaan yang lebih efisien." },
];

export function HowItWorksSection() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Menghapus centering agar teks berada di kiri */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="inline-block text-center rounded-xl border border-[#A11692] bg-transparent w-[130px] h-[30px] px-3 py-1 text-[16px] font-suwargi text-[#A11692]">Cara Kerja</div>
            <h2 className=" 2xl:text-4xl xl:text-[36px] font-normal sm:text-3xl">
              <span className="font-bold">Langkah Mudah </span>
              <br /> <span className="font-suwargi text-[#F45866]">Mengembangkan Bisnis</span> <span className="font-bold">dengan</span> <span className="font-suwargi text-[#F45866]">Virtual Asisten</span>
            </h2>
            <p className="font-light   ">Mendapat kandidat asisten virtual lebih mudah dengan talenta pilihan kami.</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden mt-12" ref={emblaRef}>
          <div className="flex">
            {steps.map((step) => (
              <div key={step.title} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <div className="flex flex-col items-center text-center p-6 h-full rounded-lg border border-[#A11692]">
                  <Image src={step.icon} alt={`${step.title} icon`} width={80} height={80} />
                  <h3 className="mt-4 ">{step.title}</h3>
                  <p className="mt-2 text-sm font-light  ">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
