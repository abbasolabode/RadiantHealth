import { Link } from "react-router-dom";

const quickLinks = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Services", path: "/services" },
  { id: 3, label: "Doctors", path: "/doctors" },
  { id: 4, label: "Appointment", path: "/appointment" },
  { id: 5, label: "Blog", path: "/blog" },
  { id: 6, label: "Testimonials", path: "/testimonials" },
  { id: 7, label: "About", path: "/about" },
  { id: 8, label: "Contact", path: "/contact" },
];

const services = [
  { id: 1, label: "Cardiology", path: "/cardiology" },
  { id: 2, label: "Neurology", path: "/neurology" },
  { id: 3, label: "Orthopedics", path: "/orthopedics" },
  { id: 4, label: "Pediatrics", path: "/pediatrics" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#111c33] text-white min-[800px]:grid min-[800px]:grid-cols-4 min-[800px]:min-h-[300px] w-full px-4 py-12 flex flex-col gap-7">

      {/* subtle glow background */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>

      {/* Logo + Description */}
      <section className="relative z-10 w-full flex flex-col gap-4">
        <Link className="text-[1.25rem] font-bold">
          Aetheris<span className="text-blue-400">Health</span>
        </Link>
        <p className="text-[14px] text-white/60">
          Human-centric medicine powered by precision. Serving our community since 1994.
        </p>
      </section>

      {/* Quick Links */}
      <nav className="relative z-10 flex flex-col gap-4">
        <h3 className="font-semibold text-base text-white">Quick Links</h3>
        <ul className="flex flex-col gap-3">
          {quickLinks.map((link) => (
            <li key={link.id} className="text-[14px] text-white/60 font-medium hover:text-white transition">
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Services */}
      <nav className="relative z-10 flex flex-col gap-4">
        <h3 className="font-semibold text-base text-white">Services</h3>
        <ul className="flex flex-col gap-3">
          {services.map((link) => (
            <li key={link.id} className="text-[14px] text-white/60 hover:text-white transition">
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact */}
      <section className="relative z-10 flex flex-col gap-4 w-full">
        <h3 className="font-semibold text-base text-white">Contact</h3>
        <span className="text-white/60 text-[14px]">1200 Medical Center Drive</span>
        <span className="text-white/60 text-[14px]">Suite 400, Boston MA 02115</span>
        <span className="text-white/60 text-[14px]">+1 (617) 555-0120</span>
        <span className="text-white/60 text-[14px]">info@aetheris.health</span>
      </section>

      {/* Divider */}
      <hr className="border-white/10 w-full min-[800px]:col-span-4" />

      {/* Bottom */}
      <div className="relative z-10 flex flex-col gap-4 justify-center items-center w-full min-[800px]:flex-row min-[800px]:justify-between min-[800px]:col-span-4">
        <div className="text-white/50 text-[14px] w-full">
          © 2026 Aetheris Health. All rights reserved.
        </div>
        <div className="flex gap-6 w-full min-[800px]:justify-end justify-center">
          <p className="text-white/50 text-[14px] hover:text-white transition">
            Privacy Policy
          </p>
          <p className="text-white/50 text-[14px] hover:text-white transition">
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}