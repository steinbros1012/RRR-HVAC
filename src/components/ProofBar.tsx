const stats = [
  { value: "5.0★", label: "Average Customer Rating" },
  { value: "Same Day", label: "Emergency Response" },
  { value: "Watertown", label: "SD — Locally Owned" },
  { value: "All Systems", label: "Makes & Models Serviced" },
];

export default function ProofBar() {
  return (
    <section
      style={{
        background: "#0f0f0f",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-0.5 px-6 py-4"
              style={{ background: "#0f0f0f" }}
            >
              <div
                className="font-mono font-semibold text-xl leading-none"
                style={{ color: "#FFFFFF", letterSpacing: "-0.02em" }}
              >
                {s.value}
              </div>
              <div
                className="font-body text-[11px] tracking-wide"
                style={{ color: "#64748B" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
