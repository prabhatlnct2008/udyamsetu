export interface ValueStat {
  stat: string;
  caption: string;
}

export default function ValueStrip({ stats }: { stats: ValueStat[] }) {
  return (
    <section className="bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((v) => (
            <div key={v.stat + v.caption}>
              <p className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] bg-gradient-to-r from-[#818CF8] to-[#C4B5FD] bg-clip-text text-transparent">
                {v.stat}
              </p>
              <p className="mt-2 text-sm text-slate-300">{v.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
