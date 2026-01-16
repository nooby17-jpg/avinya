export default function ServicesPage() {
  return (
    <main className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-semibold tracking-tight">
            Services
          </h1>
          <p className="mt-4 text-white/70">
            Avinya delivers end-to-end digital solutions across technology,
            security, intelligence, and design.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-12">
          <Service
            title="Web Solutions"
            desc="Frontend, backend, and full-stack web systems engineered for performance, scalability, and SEO."
          />
          <Service
            title="IT Solutions"
            desc="Infrastructure, monitoring, and system optimization designed for reliability and uptime."
          />
          <Service
            title="Cyber Security"
            desc="Secure architectures, vulnerability protection, and compliance-ready systems."
          />
          <Service
            title="AI & Machine Learning"
            desc="Custom AI models, automation, and intelligent workflows built with transparency and trust."
          />
          <Service
            title="Analytics"
            desc="Data pipelines, dashboards, and insights that enable faster, better decisions."
          />
          <Service
            title="Design"
            desc="Logos, branding, UI/UX, and social media creatives aligned with business identity."
          />
        </div>
      </div>
    </main>
  );
}

function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-b border-white/10 pb-8">
      <h2 className="text-2xl font-medium mb-2">{title}</h2>
      <p className="text-white/70 max-w-3xl">{desc}</p>
    </div>
  );
}
