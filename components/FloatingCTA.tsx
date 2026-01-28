"use client";

import { usePathname, useRouter } from "next/navigation";

export default function FloatingCTA() {
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex">
      <div className="relative flex rounded-md p-2  w-[320px]  "
      style={{background: isServices ? "#2e3c58" : "#e4eeff",  }}
      
      >

        {/* ACTIVE SLIDER */}
        <span
          className="absolute top-1 bottom-1 w-1/2 rounded-md  transition-all duration-300 mr-2 ease-out "
          style={{ left: isServices ? "48%" : "0%" , margin: isServices ? "0 5px 0 0" : "0 0 0 5px", backgroundColor: isServices ? "#000000" : "#001B50" }}
        />

        <button
          onClick={() => router.push("/")}
          className={`relative z-10 w-1/2 py-2  text-sm font-bold uppercase
            ${isHome ? "text-white" : "text-white"}`}
        >
          Home
        </button>

        <button
          onClick={() => router.push("/services")}
          className={`relative z-10 w-1/2 py-2 text-sm font-bold uppercase
            ${isServices ? "text-white" : "text-text"}`}
        >
          Services
        </button>
      </div>
    </div>
  );
}
