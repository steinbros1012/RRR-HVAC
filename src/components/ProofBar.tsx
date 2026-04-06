export default function ProofBar() {
  const stats = [
    { value: "5★", label: "Average Rating" },
    { value: "Fast", label: "Same-Day Response" },
    { value: "Local", label: "Watertown, SD Based" },
    { value: "All", label: "Makes & Models" },
  ];

  return (
    <section className="border-y border-white/5 bg-[#0a1018]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
              <div className="text-2xl font-black text-orange-400">{s.value}</div>
              <div className="text-slate-400 text-sm text-center sm:text-left">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
