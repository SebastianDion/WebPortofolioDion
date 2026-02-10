import LogEntry from "@/components/LogEntry";
import { engineeringLog } from "@/data/engineeringLog";

export default function EngineeringLogPage() {
  return (
    <main className="min-h-screen bg-primary px-6 py-24">
      <section className="container mx-auto flex flex-col gap-24">
        {/* Header */}
        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Engineering Log — Adira Finance
          </h1>
          <p className="text-white/60">
            Notes from my 12-month internship working on real production systems
            in Digital Engineering & Architecture.
          </p>
        </header>

        {/* Entries */}
        {engineeringLog.map((entry, index) => (
          <LogEntry key={index} {...entry} />
        ))}

        {/* Footer */}
        <footer className="max-w-3xl pt-12 border-t border-white/10 text-white/50 text-sm">
          JavaScript · TypeScript · React · Node.js · Fastify · PostgreSQL · Kafka · BigQuery · Docker · Metabase · Mage AI
        </footer>
      </section>
    </main>
  );
}