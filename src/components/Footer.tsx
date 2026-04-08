"use client";

const PHONE = "(605) 881-5622";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
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
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="RRR HVAC Rescue LLC"
                width={36}
                height={36}
                style={{ objectFit: "contain" }}
              />
              <div>
                <div
                  className="font-serif leading-none"
                  style={{ fontSize: "15px", color: "#FFFFFF", letterSpacing: "-0.01em" }}
                >
                  RRR HVAC
                </div>
                <div
                  className="font-mono uppercase mt-0.5"
                  style={{ fontSize: "8px", letterSpacing: "0.18em", color: "#F97316" }}
                >
                  Rescue LLC
                </div>
              </div>
            </div>
            <p
              className="font-body text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "#94A3B8" }}
            >
              Watertown&apos;s trusted heating and cooling experts. Fast, honest, local HVAC
              service you can count on.
            </p>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="font-mono uppercase inline-flex items-center"
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                padding: "10px 20px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#FFFFFF",
                textDecoration: "none",
                transition: "border-color 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F97316";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F97316";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
              }}
            >
              {PHONE}
            </a>
          </div>

          {/* Nav */}
          <div>
            <div
              className="font-mono uppercase mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#94A3B8" }}
            >
              Navigation
            </div>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm transition-colors duration-150"
                    style={{ color: "#94A3B8", textDecoration: "none" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8")}
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
              className="font-mono uppercase mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#94A3B8" }}
            >
              Services
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="/services"
                    className="font-body text-sm transition-colors duration-150"
                    style={{ color: "#94A3B8", textDecoration: "none" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="font-body" style={{ fontSize: "11px", color: "#94A3B8" }}>
            © {new Date().getFullYear()} RRR HVAC Rescue LLC · Watertown, South Dakota
          </div>
          <div className="font-body" style={{ fontSize: "11px", color: "#94A3B8" }}>
            Licensed &amp; Insured · All Makes &amp; Models
          </div>
        </div>
      </div>
    </footer>
  );
}
