export default function Services() {
  return (
    <section className="bg-[#eaeaea] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            What We Build
          </h2>
          <p className="mt-4 text-white/70">
            Avinya delivers intelligent digital solutions designed for performance,
            security, and long-term scalability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <ServiceCard
            title="Web Solutions"
            description="Frontend, backend, and full-stack systems built for speed, scalability, and SEO."
          />

          <ServiceCard
            title="IT Solutions"
            description="Reliable IT infrastructure and system management engineered for continuous uptime."
          />

          <ServiceCard
            title="Cyber Security"
            description="Security-first architecture, threat protection, and compliance-ready systems."
          />

          <ServiceCard
            title="AI & Machine Learning"
            description="Intelligent models and automation designed with explainability and trust."
          />

          <ServiceCard
            title="Analytics"
            description="Data systems that turn information into accurate, actionable insights."
          />

          <ServiceCard
            title="Design"
            description="Branding, logos, and digital creatives aligned with business identity and clarity."
          />

        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className=" border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <p className="text-sm text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
