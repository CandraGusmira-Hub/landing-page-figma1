import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

// Taruh gambar di public/images/projects/ (rasio ±16:10, format .webp disarankan)
const projects = [
  {
    id: "medicare",
    category: "Healthcare ERP",
    title: "MediCare Health ERP",
    description:
      "Portal manajemen rekam medis terpadu & reservasi poli klinik dengan dashboard dokter realtime, integrasi resep farmasi digital, dan sinkronisasi BPJS.",
    image: "/images/projects/medicare-health-erp.webp",
    alt: "Dokter memantau dashboard analitik MediCare Health ERP di monitor",
    tags: ["Laravel", "React", "PostgreSQL"],
    href: "#",
  },
  {
    id: "logitrack",
    category: "Logistics & Fleet",
    title: "LogiTrack Supply Chain",
    description:
      "Platform pelacakan armada muatan dan pemantauan logistik real-time terintegrasi GPS & IoT tracker, estimasi bahan bakar, dan otomatisasi manifest surat jalan.",
    image: "/images/projects/logitrack-supply-chain.webp",
    alt: "Peta pelacakan armada LogiTrack di layar laptop",
    tags: ["React.js", "REST API", "Tailwind"],
    href: "#",
  },
  {
    id: "artisan-luxe",
    category: "E-Commerce Marketplace",
    title: "Artisan Luxe Marketplace",
    description:
      "E-commerce multi-vendor kustom dengan payment gateway otomatis, split pembayaran instan untuk merchant, voucher flash-sale, dan notifikasi WhatsApp pembeli.",
    image: "/images/projects/artisan-luxe-marketplace.webp",
    alt: "Katalog produk Artisan Luxe Marketplace di tablet",
    tags: ["Laravel 11", "Livewire", "Midtrans"],
    href: "#",
  },
];

function Project() {
  return (
    <section
      id="studi-kasus"
      aria-labelledby="studi-kasus-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="studi-kasus-title"
          eyebrow="Karya Nyata"
          title="Studi Kasus & Proyek yang Telah Kami Luncurkan"
          description="Bukti nyata dedikasi teknis kami dalam membantu berbagai lini bisnis beroperasi lebih cerdas."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id} className="flex">
              <article className="group flex w-full flex-col overflow-hidden rounded-2xl bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                <div className="relative aspect-16/10 overflow-hidden bg-linear-to-br from-peach to-sky-soft">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width={640}
                    height={400}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-peach-ink">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Teknologi yang digunakan">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-peach px-2.5 py-1 text-xs font-semibold text-peach-ink"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.href}
                    className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-sm pt-5 text-sm font-semibold text-peach-ink outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    Lihat Detail Kasus
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-peach px-8 py-3.5 text-sm font-semibold text-peach-ink transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Lihat Semua Studi Kasus Lainnya
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;