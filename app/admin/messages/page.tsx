import { prisma } from "@/lib/prisma";

export default async function AdminMessages() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-heading font-semibold">
          Contact Messages
        </h1>

        <div className="mt-8 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className="border rounded-lg p-4">
              <p className="font-semibold">{m.name}</p>
              <p className="text-sm text-subtext">{m.email}</p>
              <p className="text-sm">{m.phone}</p>
              <p className="mt-2">{m.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
