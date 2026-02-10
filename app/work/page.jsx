import LogEntry from "@/components/LogEntry";
import { engineeringLog } from "@/data/engineeringLog";

export default function EngineeringLogPage() {
  return (
    <main className="min-h-screen bg-primary px-6 py-24">
      <section className="container mx-auto flex gap-60">
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-24 max-w-3xl">
          <header>
            <h1 className="text-4xl font-bold text-white mb-4">
              Engineering Log — Adira Finance
            </h1>
            <p className="text-white/60">
              Notes from my 12-month internship working on real production systems
              in Digital Engineering & Architecture.
            </p>
          </header>

          {engineeringLog.map((entry, index) => (
            <LogEntry key={index} {...entry} />
          ))}

          <footer className="pt-12 border-t border-white/10 text-white/50 text-sm">
            JavaScript · TypeScript · React · Node.js · Fastify · PostgreSQL · Kafka ·
            BigQuery · Docker · Metabase · Mage AI
          </footer>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col w-full max-w-[200px] mx-auto xl:mx-0 gap-6 border-l border-white/10 pl-6">
          <h2 className="text-white/80 font-semibold mb-6">
            Logs
          </h2>

          <nav className="flex flex-col gap-3 text-white/60 text-sm  bg-emerald-500/10 border border-emerald-400/20 rounded-[10px] p-4">
            <a className="hover:text-white cursor-pointer">
              Engineering Log
            </a>
          </nav>
        </aside>

      </section>
    </main>
  );
}