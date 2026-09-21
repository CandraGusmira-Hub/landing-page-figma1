import {
  Clock,
  CodeXml,
  Globe,
  Mail,
  MessageSquareText,
  Network,
  SquareTerminal,
} from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan & Kapabilitas", href: "#layanan" },
  { label: "Studi Kasus & Portfolio", href: "#studi-kasus" },
  { label: "Proses Kerja Agile", href: "#alur-kerja" },
  { label: "Paket & Estimasi Harga", href: "#harga" },
  { label: "Pertanyaan Umum (FAQ)", href: "#faq" },
];

const contacts = [
  {
    id: "whatsapp",
    icon: MessageSquareText,
    label: "WhatsApp Enterprise",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Resmi",
    value: "solutions@nexuscode.dev",
    href: "mailto:solutions@nexuscode.dev",
  },
  {
    id: "jam-kerja",
    icon: Clock,
    label: "Jam Kerja",
    value: "Senin - Jumat: 09:00 - 18:00 WIB",
  },
];

const socials = [
  { id: "website", icon: Globe, label: "Website NexusCode", href: "#" },
  { id: "github", icon: SquareTerminal, label: "Repositori NexusCode", href: "#" },
  { id: "network", icon: Network, label: "Jaringan NexusCode", href: "#" },
];

const legalLinks = [
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Syarat Layanan", href: "#" },
  { label: "SLA Komitmen", href: "#" },
];

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <a
              href="#beranda"
              className="inline-flex items-center gap-2.5 rounded-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-brand"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-ink text-white">
                <CodeXml className="size-4.5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold text-ink">NexusCode</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-body">
              Mitra terpercaya transformasi digital & rekayasa perangkat lunak web
              custom skala enterprise.
            </p>

            <ul className="mt-6 flex gap-3">
              {socials.map(({ id, icon: SocialIcon, label, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-lg bg-sky-chip text-brand transition hover:bg-sky-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    <SocialIcon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigasi */}
          <nav aria-labelledby="footer-nav-title">
            <h2
              id="footer-nav-title"
              className="text-xs font-bold uppercase tracking-[0.12em] text-ink"
            >
              Navigasi Cepat
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-body transition-colors hover:text-brand focus-visible:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
              Hubungi Kami
            </h2>
            <ul className="mt-5 space-y-4">
              {contacts.map((contact) => {
                const ContactIcon = contact.icon;

                return (
                  <li key={contact.id} className="flex gap-2.5">
                    <ContactIcon
                      className="mt-0.5 size-4 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    <div className="text-sm leading-snug">
                      <p className="font-semibold text-ink">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-body transition-colors hover:text-brand"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-body">{contact.value}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bar bawah */}
        <div className="mt-16 flex flex-col gap-4 border-t border-ink/10 pt-8 text-xs text-body sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">
            © {new Date().getFullYear()} NexusCode Architecture & Engineering.
            Seluruh hak cipta dilindungi.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;