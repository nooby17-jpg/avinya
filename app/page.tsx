import Hero from "@/components/Hero";
import Services from "@/components/Services";
export default function Home() {
  return (
    <div className="bg-bglight px-5 md:px-10 overflow-x-hidden">
      <Hero />
      <Services/>
    </div>
  );
}
