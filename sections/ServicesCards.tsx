import VideoCard from "@/components/VideoCard";

export default function ServicesCards() {
  return (
    <section className="px-6 pb-32">
      <div className="max-w-[1400px] mx-auto space-y-12">
        <VideoCard title="Web Platforms" video="/videos/web.mp4" />
        <VideoCard title="AI Systems" video="/videos/ai.mp4" />
        <VideoCard title="Cloud & Scale" video="/videos/cloud.mp4" />
      </div>
    </section>
  );
}
