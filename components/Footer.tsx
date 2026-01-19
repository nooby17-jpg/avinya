import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] border-t border-black w-full overflow-hidden">
      <div className="w-full">

        {/* TOP GRID AREA */}
        <div className="border-b border-black">
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">

            {/* LEFT LOGO BLOCK */}
            <div className="border-r border-black flex items-center justify-center p-10">
              <div className="relative w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] aspect-square">
                <Image
                  src="/4.svg"
                  alt="avinya"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* RIGHT CONTENT BLOCK */}
            <div className="p-10 flex flex-col justify-between gap-16">

              {/* TOP ROW */}
              <div className="flex flex-col md:flex-row md:justify-between gap-8">
                <div>
                  <p className="text-xs tracking-widest mb-2">SEND US A MAIL</p>
                  <Link
                    href="mailto:nikhil7679@gmail.com"
                    className="text-lg sm:text-xl font-bold tracking-tight"
                  >
                    NIKHIL7679@GMAIL.COM
                  </Link>
                </div>

                <p className="text-sm uppercase opacity-70">
                  WE&apos;RE OPEN FOR WORK
                </p>
              </div>

              {/* BOTTOM ROW */}
              <div className="flex flex-col md:flex-row md:justify-between gap-12">

                {/* SOCIALS */}
                <div className="flex flex-col uppercase tracking-tight text-sm font-semibold">
                  <Link href="https://linkedin.com" target="_blank">LINKEDIN</Link>
                  <Link href="https://facebook.com" target="_blank">FACEBOOK</Link>
                  <Link href="https://instagram.com" target="_blank">INSTAGRAM</Link>
                </div>

                {/* ADDRESSES */}
                <div className="flex flex-col gap-4 max-w-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <span className="font-bold uppercase">SILIGURI</span>
                    <span className="opacity-80">
                      BANIAKHARI, MATIGARA, WEST BENGAL 734010
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <span className="font-bold uppercase">SIKKIM</span>
                    <span className="opacity-80">
                      CHISOPANI, NAMCHI, SIKKIM 737126
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* BIG BRAND WORD */}
        <div className="border-b border-black">
          <h2 className="text-center font-extrabold tracking-[0.05em] leading-none py-6
            text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[18rem] 2xl:text-[21rem]">
            AVINYA
          </h2>
        </div>

        {/* BOTTOM META ROW */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4 px-8 py-4 text-xs uppercase font-medium">
          <p>© {new Date().getFullYear()} Avinya | Legal & Cookies</p>
          <p>#WebDevelopment</p>
          <p>#CyberSecurity</p>
          <p>#AI&ML</p>
          <p>#PremiumServices</p>
          <p>#Cloud</p>
          <p>#SolvingTheFuture</p>
        </div>

      </div>
    </footer>
  );
}
