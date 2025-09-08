// src/components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

const features = [
  { text: "Lebih produktif", icon: "/images/logocentang.svg" },
  { text: "Hemat waktu", icon: "/images/logocentang.svg" },
  { text: "Berdampak sosial", icon: "/images/logocentang.svg" },
];

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Kolom Teks Kiri */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-normal text-[#404040] sm:text-5xl xl:text-[55px] leading-[1]">
                <span className="font-suwargi text-[#F45866] tracking-[2px]">Asisten Virtual </span>
                <br />
                Cerdas untuk Semua
                <span className="font-suwargi text-[#F45866] tracking-[2px]"> Kebutuhanmu</span>
              </h1>
              <Image src="/images/garisungu.svg" alt="Garis Bawah" width={429} height={30} />
              <p className="max-w-[600px] mt-[20px] font-light  2xl:mt-[50px]">Membantu pebisnis, profesional, dan UMKM jadi lebih produktif dengan mengurus tugas-tugas kecil yang sering memakan waktu.</p>
            </div>
            <div className="flex">
              <Link
                href="#about-us"
                className="inline-flex h-[51px] w-[234px] mt-[20px] 2xl:mt-[50px] items-center justify-center rounded-md bg-[#A11692] px-8 text-[15px] text-white shadow transition-colors hover:bg-[#A11692]/90 focus-visible:outline-none"
              >
                Pelajari selengkapnya
              </Link>
            </div>
          </div>
    {/* Kolom Gambar Kanan */}
          <div className="relative mt-10 flex items-center justify-center md:mt-10">
            {/* Gambar utama */}
            <Image
              alt="Hero"
              className="rounded-xl object-cover"
              height="550"
              src="/images/imagefixhero.jpg"
              width="550"
            />
            {/* Daftar Fitur Unggulan dengan spacing responsif */}
            <div className="absolute bottom-4 left-5 flex flex-col items-start space-y-2 sm:bottom-6 sm:left-10 md:bottom-8  md:left-25 lg:left-5 xl:left-10 2xl:left-25 lg:space-y-3">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center space-x-2 rounded-lg border border-[#A11692] bg-white p-2 pr-4 shadow-lg backdrop-blur-sm"
                >
                  {/* Ikon dengan ukuran responsif */}
                  <div className="h-5 w-5 md:h-6 md:w-6">
                    <Image
                      src={feature.icon}
                      alt="Checkmark"
                      width={24}
                      height={24}
                    />
                  </div>
                  {/* Teks dengan ukuran responsif */}
                  <span className="font-light   leading-[140%] text-sm md:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
