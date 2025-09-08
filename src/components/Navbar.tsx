// src/components/Navbar.tsx

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="w-full bg-[#EDF2F7] px-4 py-4 lg:px-40">
      <div className="mx-auto flex h-full items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center" href="/">
          <Image className="h-auto w-[180px] sm:w-[250px]" src="/images/logoNav.svg" alt="Srikandi VA" width={250} height={40} priority />
        </Link>

        {/* Tombol Navigasi */}
        <nav>
          <Link
            className={` inline-flex items-center justify-center rounded-md bg-[#A11692] px-5 py-2.5 text-center text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#ae45a3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 lg:px-8 lg:py-3 lg:text-base`}
            href="/request"
          >
            Hubungi kami
          </Link>
        </nav>
      </div>
    </header>
  );
}
