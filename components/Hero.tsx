import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center px-6 bg-bg">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-text">
          Solving the Future
        </h1>

        <p className="mt-6 max-w-3xl font-body text-subtext text-lg">
          Avinya delivers Web Solutions, IT Services, Cyber Security,
          AI & ML, Analytics, and Design — built for scale, clarity, and trust.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="font-heading px-6 py-3 bg-highlight text-white rounded-md hover:opacity-90 transition"
          >
            Book Solution →
          </Link>

          <Link
            href="/services"
            className="font-heading px-6 py-3 border border-black/20 rounded-md hover:bg-black/5 transition"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
