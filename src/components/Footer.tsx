const PHONE = "(605) 555-0100";

export default function Footer() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Why RRR", href: "#why" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#050810] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-black text-lg leading-none">RRR HVAC</div>
                <div className="text-orange-400 text-[10px] tracking-widest uppercase">Rescue LLC</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Watertown&apos;s trusted heating and cooling experts. Fast, honest, local HVAC service you can count on.
            </p>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 mt-5 bg-orange-500/10 border border-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-500/20 transition-colors"
            >
              {PHONE}
            </a>
          </div>

          {/* Nav */}
          <div>
            <div className="text-white font-semibold text-sm mb-4 tracking-wide">Navigation</div>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-white font-semibold text-sm mb-4 tracking-wide">Services</div>
            <ul className="space-y-2.5">
              {["AC Repair", "AC Installation", "Furnace Repair", "Furnace Installation", "Emergency HVAC", "Maintenance"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <div>© {new Date().getFullYear()} RRR HVAC Rescue LLC · Watertown, South Dakota</div>
          <div>Licensed &amp; Insured · All Makes &amp; Models</div>
        </div>
      </div>
    </footer>
  );
}
