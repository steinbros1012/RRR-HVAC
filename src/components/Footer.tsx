const PHONE = "(605) 881-5622";

export default function Footer() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Why RRR", href: "#why" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "AC Repair",
    "AC Installation",
    "Furnace Repair",
    "Furnace Installation",
    "Emergency HVAC",
    "Maintenance",
  ];

  return (
    <footer style={{ background: "#111111", borderTop: "1px solid #1e1e1e" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10"
          style={{ borderBottom: "1px solid #1e1e1e" }}
        >
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="RRR HVAC Rescue LLC"
                width={36}
                height={36}
                style={{ objectFit: "contain" }}
              />
              <div>
                <div className="font-clash font-bold text-base leading-none text-white">
                  RRR HVAC
                </div>
                <div
                  className="font-satoshi text-[9px] tracking-[0.18em] uppercase mt-0.5"
                  style={{ color: "#f97316" }}
                >
                  Rescue LLC
                </div>
              </div>
            </div>
            <p
              className="font-satoshi text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "#838282" }}
            >
              Watertown&apos;s trusted heating and cooling experts. Fast, honest, local HVAC
              service you can count on.
            </p>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center font-satoshi text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-150 text-white hover:bg-white hover:text-[#111111]"
              style={{ border: "1px solid #2a2a2a" }}
            >
              {PHONE}
            </a>
          </div>

          {/* Nav */}
          <div>
            <div
              className="font-satoshi text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{ color: "#838282" }}
            >
              Navigation
            </div>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-satoshi text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "#838282" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div
              className="font-satoshi text-[10px] tracking-[0.2em] uppercase mb-5"
              style={{ color: "#838282" }}
            >
              Services
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-satoshi text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "#838282" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="font-satoshi text-[11px]" style={{ color: "#838282" }}>
            © {new Date().getFullYear()} RRR HVAC Rescue LLC · Watertown, South Dakota
          </div>
          <div className="font-satoshi text-[11px]" style={{ color: "#838282" }}>
            Licensed &amp; Insured · All Makes &amp; Models
          </div>
        </div>
      </div>
    </footer>
  );
}
