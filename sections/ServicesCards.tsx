import VideoCard from "@/components/VideoCard";

export default function ServicesCards() {
  return (
    <section className="px-0 pb-32 ">
      <div className="max-w-[100%] mx-auto space-y-12 ">
        <VideoCard title="Web Solutions" video="/videos/web.mp4" />
        <VideoCard title="IT & Infrastructure" video="/videos/it.mp4" />
        <VideoCard title="Cyber Security" video="/videos/cyber.mp4" />
        <VideoCard title="AI & Analytics" video="/videos/ai2.mp4" />
        <VideoCard title="Digital Marketing" video="/videos/market.mp4" />
        <VideoCard title="Design & Branding" video="/videos/design.mp4" />
      </div>
    </section>
  );
}
