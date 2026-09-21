import { AppWindow, ArrowRight, Grid2x2Plus, ShoppingBag, Smartphone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const services = [
  {
    id: "company-profile",
    icon: AppWindow,
    title: "Website Company Profile",
    description:
      "Desain eksklusif bercita rasa premium, SEO-ready, loading super cepat, mobile responsive, dan terbukti meningkatkan kredibilitas brand Anda.",
    href: "#",
  },
  {
    id: "web-custom",
    icon: Grid2x2Plus,
    title: "Aplikasi Web Custom (Dashboard)",
    description:
      "Sistem manajemen internal, portal multi-role, otomatisasi alur kerja departemen, dan integrasi RESTful API terukur tanpa batasan plugin.",
    href: "#",
  },
  {
    id: "e-commerce",
    icon: ShoppingBag,
    title: "Toko Online / E-Commerce",
    description:
      "Integrasi payment gateway instan (Midtrans, Xendit), kalkulator ongkos kirim realtime, dan manajemen inventori gudang bebas hambatan.",
    href: "#",
  },
  {
    id: "maintenance",
    icon: Smartphone,
    title: "Maintenance & Support Teknis",
    description:
      "Pembaruan keamanan berkala, pencadangan basis data harian otomatis, pemantauan uptime 99,9%, serta respons prioritas insiden teknis.",
    href: "#",
  },
];

function Service() {
  return (
    <section
      id="layanan"
      aria-labelledby="layanan-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="layanan-title"
          title="Layanan Pengembangan Digital Berstandar Tinggi"
        />

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <li key={service.id} className="flex">
                <article className="group flex w-full flex-col rounded-2xl bg-surface p-6 shadow-stack transition duration-300 hover:-translate-y-1 hover:shadow-stack-hover">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-peach text-peach-ink">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>

                  <h3 className="mt-6 font-display text-lg font-bold leading-snug text-ink">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                    {service.description}
                  </p>

                  <a
                    href={service.href}
                    className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-sm text-sm font-semibold text-accent outline-offset-4 transition-colors hover:text-peach-ink focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    Pelajari Arsitektur
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Service;