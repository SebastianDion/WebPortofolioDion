"use client";

import LogEntry from "@/components/LogEntry";
import { engineeringLog } from "@/data/engineeringLog";
import { useState } from "react";

export const logs = {
  adira: {
    title: "Engineering Log — Adira Finance",
    description:
      "Notes from my 12-month internship working on real production systems in Digital Engineering & Architecture.",
    techStack:
      "JavaScript · TypeScript · React · Node.js · Fastify · PostgreSQL · Kafka · BigQuery · Docker · Metabase · Mage AI",
    entries: engineeringLog
  }
};
export default function EngineeringLogPage() {

  const [activeLog, setActiveLog] = useState("adira");
  const currentLog = logs[activeLog];
  
  return (
    <main className="min-h-screen bg-primary px-6 py-24">
      <section className="container mx-auto flex gap-60">
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-24 max-w-3xl">
          <header>
            <h1 className="text-4xl font-bold text-white mb-4">
              {currentLog.title}
            </h1>
            <p className="text-white/60">
             {currentLog.description}
            </p>
          </header>

          {currentLog.entries.map((entry, index) => (
            <LogEntry key={index} {...entry} />
          ))}

          <footer className="pt-12 border-t border-white/10 text-white/50 text-sm">
            {currentLog.techStack}
          </footer>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col w-full max-w-[200px] mx-auto xl:mx-0 gap-6 border-l border-white/10 pl-6">
          <h2 className="text-white/80 font-semibold mb-6">
            Logs
          </h2>

          <nav className="hover:text-white cursor-pointer flex flex-col gap-3 text-white/60 text-sm  bg-emerald-500/10 border border-emerald-400/20 rounded-[10px] p-4">
            <button
              onClick={() => setActiveLog("adira")}
              className="text-left hover:text-white"
            >Engineering Log — Adira Finance</button>
          </nav>
        </aside>

      </section>
    </main>
  );
}