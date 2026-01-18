export default function LoadingBlogs() {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto space-y-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="animate-pulse space-y-2">
          <div className="h-6 bg-black/10 w-2/3 rounded" />
          <div className="h-4 bg-black/10 w-full rounded" />
        </div>
      ))}
    </div>
  );
}
