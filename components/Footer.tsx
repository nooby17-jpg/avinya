"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");
  // Theme logic
  const bgClass = isServices ? "bg-accent text-white" : "bg-bglight text-text";
  const logoClass = isServices ? "/3.svg" : "./4.svg"
  return (
    <footer className={`${bgClass} w-full overflow-hidden`}>
      <div className="w-full">

        {/* TOP GRID AREA */}
        <div className=" ">
          <div className="flex flex-col md:flex-row  lg:flex-row justify-between max-h-[100%] md:max-h-[320px]">

            {/* LEFT LOGO BLOCK */}
            <div className="border-b border-t mr-0 md:mr-5 border-subtext flex items-center justify-center ">
              <div className="relative w-[240px]  md:w-[200px] lg:w-[250px] xl:w-[520px] aspect-square py-1 md:py-10">
                <Link href={"/about" }>
                  <Image
                  src={logoClass}
                  alt="avinya"
                  fill
                  className="object-contain py-0 md:py-20"
                />
                </Link>
              </div>
              
            </div>
            <div className="hidden md:flex border-r border-subtext w-1 "/>
           

            {/* RIGHT CONTENT BLOCK */}
            <div className="ml-0 md:ml-5 border-t border-b border-subtext py-6 px-5 md:p-10 flex flex-col w-[100%] justify-between gap-0">

              {/* TOP ROW */}
              <div className="flex flex-row md:justify-between gap-8">
                <div>
                  <p className="text-xs tracking-widest mb-0">SEND US A MAIL</p>
                  <Link
                    href="mailto:nikhil7679@gmail.com"
                    className="text-md sm:text-xl font-black tracking-tight"
                  >
                    NIKHIL7679@GMAIL.COM
                  </Link>
                </div>

                <div className="flex flex-col justify-between h-[100%]">
                    <p className="text-sm uppercase opacity-70">
                      WE&apos;RE OPEN FOR WORK
                    </p>
                     <Link
                        href="/contact"
                        className="w-[100%] mt-0 md:mt-5 text-right md:text-center font-extrabold rounded-0 md:rounded-sm border-bg md:border-b  md:border-subtext px-0 md:px-6 py-2 text-sm hover:border-b hover:border-subtext md:hover:border md:hover:bg-white md:hover:text-black transition uppercase"
                      >
                        Book Now
                      </Link>
                </div>
              </div>

              {/* BOTTOM ROW */}
              <div className="flex flex-col md:flex-row md:justify-between gap-1">

                {/* SOCIALS */}
                <div className="mb-5 md:mb-0 flex flex-row md:flex-col uppercase tracking-tight text-sm font-bold justify-between mt-10 md:mt-0 -gap-2 ">
                  <Link href="https://linkedin.com" target="_blank">LINKEDIN</Link>
                  <Link href="https://facebook.com" target="_blank">FACEBOOK</Link>
                  <Link href="https://instagram.com" target="_blank">INSTAGRAM</Link>
                </div>

                {/* ADDRESSES */}
                <div className="flex flex-col gap-4 max-w-xl border-t border-subtext md:border-none">
                  <div className="flex flex-row justify-between gap-2 md:gap-10 mt-5">
                    <span className="font-extrabold uppercase">SILIGURI</span>
                    <span className="opacity-80">
                      BANIAKHARI, MATIGARA, 734010
                    </span>
                  </div>

                  <div className="flex flex-row justify-between gap-2 md:gap-10 mb-5">
                    <span className="font-extrabold uppercase">SIKKIM</span>
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
        <div className="mt-3 md:-mt-8 ">
          <h2 className="text-center font-extrabold tracking-[0.05em] leading-none py-0
            text-[6rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] xl:text-[18rem] 2xl:text-[21rem]">
            AVINYA
          </h2>
        </div>

        {/* BOTTOM META ROW */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4 pb-2 md:pr-12 md:pl-8 pt-0 md:pb-4 text-xs mt-2 md:mt-0 uppercase font-medium">
          <p>© {new Date().getFullYear()} Avinya | Legal & Cookies</p>
          <p>#WebDevelopment</p>
          <p>#Cloud&CyberSecurity</p>
          <p>#AI&ML</p>
          <p>#PremiumServices</p>
          <p>#DigitalMarketing</p>
          <p>#SolvingTheFuture</p>
        </div>

      </div>
    </footer>
  );
}
