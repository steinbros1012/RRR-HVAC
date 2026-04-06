export default function ProofBar() {
  const stats = [
    { value: "5.0★", label: "Average Customer Rating" },
    { value: "Same Day", label: "Emergency Response" },
    { value: "Watertown", label: "SD — Locally Owned" },
    { value: "All Systems", label: "Makes & Models Serviced" },
  ];

  return (
    <section style={{ background: "#ffffff", borderTop: "1px solid #e2e2e2", borderBottom: "1px solid #e2e2e2" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "#e2e2e2" }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-0.5 px-6 py-4"
              style={{ background: "#ffffff" }}
            >
              <div
                className="font-clash font-bold text-xl leading-none"
                style={{ color: "#111111", letterSpacing: "-0.02em" }}
              >
                {s.value}
              </div>
              <div
                className="font-satoshi text-[11px] tracking-wide"
                style={{ color: "#b6b5b5" }}
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
