

import Link from "next/link";
import Image from "next/image";

export function NavbarForm() {
  return (
    <header className="w-full bg-[#EDF2F7] px-4 py-4 lg:px-40">
      <div className="mx-auto flex h-full items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center" href="/">
          <Image className="h-auto w-[180px] sm:w-[250px]" src="/images/logoNav.svg" alt="Srikandi VA" width={250} height={40} priority />
        </Link>

        
        
      </div>
    </header>
  );
}
