// src/components/AdvantagesSection.tsx

import Image from "next/image";

const advantages = [
  {
    icon: "/images/icon-efisien-waktu.svg",
    title: "Efisien Waktu",
    description: "Tidak lagi terjebak di tugas kecil sehari-hari yang memakan waktu.",
  },
  {
    icon: "/images/icon-productivitas.svg",
    title: "Meningkatkan Produktivitas",
    description: "Lebih fokus ke strategi, klien, dan pengembangan bisnis.",
  },
  {
    icon: "/images/icon-pekerjaan-tertata.svg",
    title: "Pekerjaan Tertata",
    description: "Semua rapi, jelas, dan terkendali.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="w-full bg-white py-12 md:py-24 lg:py-32 dark:bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Kolom Teks Kiri */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <div className="font-suwargi inline-flex items-center justify-center w-[130px] h-[30px] rounded-xl bg-transparent border border-[#A11692] px-3 py-1 text-[16px] text-[#A11692] transition-colors ">
                Keuntungan
              </div>
              <h2 className="text-[26px]  sm:text-3xl xl:text-4xl">
                Temukan <span className="font-suwargi text-[#F45866]">Asisten Virtual</span> yang Memenuhi <span className="font-suwargi text-[#F45866]">Kebutuhanmu</span>
              </h2>
              <p className="max-w-[600px] font-light  text-base ">
                Asisten virtual bukan hanya untuk mengerjakan sedikit tugas kecil, tapi asisten virtual bisa juga membantu mengerjakan pekerjaan yang memakan waktu banyak hingga mengatur pekerjaan agar lebih mengehemat waktu.
              </p>
            </div>
          </div>

          {/* Kolom Daftar Keuntungan Kanan */}
          <div className="flex flex-col gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="flex items-start gap-4">
                {/* Ikon yang ukurannya responsif */}
                <Image
                  src={advantage.icon}
                  alt={`${advantage.title} icon`}
                  width={48} // Ukuran default untuk mobile
                  height={48}
                  className="sm:w-16 sm:h-16" 
                />
                <div className="grid gap-1">
                  {/* Judul yang ukurannya responsif */}
                  <h3 className="  sm:text-xl">
                    {advantage.title}
                  </h3>
                  <p className="text-sm  font-light">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}