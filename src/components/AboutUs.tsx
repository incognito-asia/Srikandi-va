import Image from "next/image";
import Link from "next/link";

export function AboutUs() {
  return (
    <>
      {/* ===== SEKSI PERTAMA: GAMBAR KIRI, TEKS KANAN ===== */}
      <section id="about-us" className="w-full bg-white py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="items-center text-center justify-center font-suwargi w-[140px] h-[30px] rounded-xl border border-[#A11692] bg-transparent px-3 py-1 text-[16px] text-[#A11692] transition-colors  lg:hidden ">
              Tentang kami
            </div>
            
            {/* Kolom Gambar */}
            <div className="flex flex-col items-center">
              <Image alt="Ibu Rumah Tangga Bekerja" className="rounded-xl w-full h-auto sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]" src="/images/fiximagetentangkami.jpg" width={700} height={500} />
            </div>

            {/* Kolom Teks */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                {/* Tag "Tentang kami" untuk desktop, tersembunyi di mobile */}
                 <div className="items-center text-center justify-center font-suwargi w-[140px] h-[30px] rounded-xl border border-[#A11692] bg-transparent px-3 py-1 text-[16px] text-[#A11692] transition-colors  hidden lg:flex ">
              Tentang kami
            </div>
 <h2 className="text-[26px] text-[#404040] sm:text-3xl md:text-4xl">
                  Berawal dari <span className="font-suwargi text-[#F45866]">Perjuangan Ibu Rumah Tangga</span> yang Kesulitan Mencari <span className="font-suwargi text-[#F45866]">Pekerjaan yang Layak</span>
                </h2>
                <p className="max-w-[600px] font-light   ">
                  Banyak ibu rumah tangga kesulitan mendapat pekerjaan layak karena keterbatasan peluang dan waktu. Kami hadir untuk menjembatani, menciptakan lapangan kerja sebagai asisten virtual, sekaligus membantu bisnismu lebih efisien. <br />{" "}
                  <br /> Bersama Srikandi VA, kamu ikut andil dalam mendukung pemberdayaan perempuan.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEKSI KEDUA: TEKS KIRI, GAMBAR KANAN ===== */}
      <section className="w-full bg-white py-12 md:py-24 lg:py-32 dark:bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="lg:order-last flex justify-center">
              <Image alt="Meningkatkan Produktivitas" className="rounded-xl w-full h-auto sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]" src="/images/imageAboutUs2.jpg" width={700} height={500} />
            </div>
            {/* Kolom Teks dengan tombol di kiri */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h2 className="text-[26px] text-[#404040] sm:text-3xl md:text-4xl">
                <span className="font-suwargi text-[#F45866]">Ibu Rumah Tangga </span>Terbantu dan Produktivitasmu <span className="font-suwargi text-[#F45866]">Meningkatkan</span>
                </h2>
                <p className="max-w-[600px] font-light   ">
                  Di Srikandi VA, kami membekali Ibu Rumah Tangga dengan pelatihan digital agar siap bekerja profesional. Dengan begitu, kamu mendapat dukungan efisien untuk pekerjaanmu, sekaligus membuka peluang kerja yang bermakna.
                </p>
                {/* Pembungkus ini memastikan tombol berada di kiri */}
                <div className="flex justify-start">
                  <Link className="inline-flex text-white h-10 items-center justify-center rounded-md bg-[#A11692] px-8 text-sm   shadow transition-colors hover:bg-[#A11692]/90" href="/request">
                    Konsultasi Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
