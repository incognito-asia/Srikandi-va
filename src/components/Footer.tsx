import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Layout utama: grid di desktop, flex kolom di mobile */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Kolom Kiri: Teks (Disembunyikan di mobile) */}
          <div className="hidden md:flex md:flex-col md:justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Temukan <span className="font-suwargi text-[#F45866]">Asisten Virtual</span> yang siap
              <br />
              <span className="font-suwargi text-[#F45866]">bantu bisnismu</span> berkembang
            </h2>
          </div>

          {/* Kolom Kanan (menjadi layout utama di mobile) */}
          <div className="flex flex-col items-center justify-center text-center md:items-end md:justify-between">
            {/* Logo dipindahkan ke atas di mobile dengan order-first */}
            <Image alt="Logo Srikandi VA" className="h-auto w-[180px] sm:w-[250px] order-first md:order-last" src="/images/srikandi-footer.svg" width={300} height={40} />
            {/* Tombol akan memenuhi lebar di mobile dan kembali normal di desktop */}
            <Link href="/request" className="mt-8  md:mt-0 md:mb-5 w-full md:w-auto inline-flex h-12 items-center justify-center rounded-md bg-[#A11692] px-8 text-base font-medium text-white shadow transition-colors hover:bg-[#A11692]/90">
              Hubungi kami
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
