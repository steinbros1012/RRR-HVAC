const stats = [
  { value: "5.0★", label: "Average Rating" },
  { value: "Same Day", label: "Emergency Response" },
  { value: "Trane", label: "Certified Equipment" },
  { value: "Licensed", label: "& Fully Insured" },
];

export default function ProofBar() {
  return (
    <div style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                padding: "1.5rem 2rem",
                borderRight: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="font-mono font-semibold" style={{ fontSize: "1.125rem", color: "#FFFFFF", letterSpacing: "-0.01em", marginBottom: "4px" }}>
                {s.value}
              </div>
              <div className="font-body" style={{ fontSize: "12px", color: "#94A3B8" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
