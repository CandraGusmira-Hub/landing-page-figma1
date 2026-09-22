import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Truck,
  ShoppingCart,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    id: "medicare",
    icon: HeartPulse,
    category: "Healthcare ERP",
    title: "MediCare Health ERP",
    client: "Klinik Sehat Sentosa",
    description:
      "Portal manajemen rekam medis terpadu & reservasi poli klinik dengan dashboard dokter realtime, integrasi resep farmasi digital, dan sinkronisasi BPJS.",
    image: "/images/projects/healthcare.png",
    alt: "Dokter memantau dashboard analitik MediCare Health ERP di monitor",
    href: "#",
  },
  {
    id: "logitrack",
    icon: Truck,
    category: "Logistics & Fleet",
    title: "LogiTrack Supply Chain",
    client: "PT Logistik Nusantara",
    description:
      "Platform pelacakan armada muatan dan pemantauan logistik real-time terintegrasi GPS & IoT tracker, estimasi bahan bakar, dan otomatisasi manifest surat jalan.",
    image: "/images/projects/kontraktor.png",
    alt: "Peta pelacakan armada LogiTrack di layar laptop",
    href: "#",
  },
  {
    id: "artisan-luxe",
    icon: ShoppingCart,
    category: "E-Commerce Marketplace",
    title: "Artisan Luxe Marketplace",
    client: "Artisan Luxe Group",
    description:
      "E-commerce multi-vendor kustom dengan payment gateway otomatis, split pembayaran instan untuk merchant, voucher flash-sale, dan notifikasi WhatsApp pembeli.",
    image: "/images/projects/ecommerce.png",
    alt: "Katalog produk Artisan Luxe Marketplace di tablet",
    href: "#",
  },
];

const AUTOPLAY_INTERVAL = 5000;

function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // "next" atau "prev"

  const goToNext = useCallback(() => {
    setDirection("next");
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection("prev");
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [activeIndex, goToNext]);

  const active = projects[activeIndex];
  const Icon = active.icon;
  const animationClass =
    direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left";

  return (
    <section
      id="project"
      aria-labelledby="studi-kasus-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="studi-kasus-title"
          eyebrow="Portofolio"
          title="Pengalaman Nyata di Berbagai Industri"
          description="Setiap solusi dirancang sesuai kebutuhan bisnis. Beberapa implementasi berikut mewakili ratusan pengalaman kami di berbagai sektor industri."
        />

        <div className="mt-14 overflow-hidden rounded-3xl border border-ink/10 bg-white">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-12">
            {/* Kolom kiri: konten teks yang di-animasikan + tombol yang diam */}
            <div>
              {/* Bagian ini yang bergeser tiap ganti project */}
              <div
                key={`text-${active.id}`}
                className={`overflow-hidden ${animationClass}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-peach">
                    <Icon className="size-5 text-peach-ink" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-peach-ink">
                    {active.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-body/70">
                  {active.client}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
                  {active.description}
                </p>
              </div>

              {/* Tombol TIDAK punya key/animation class, jadi posisinya diam */}
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={goToPrev}
                  className="flex size-11 items-center justify-center rounded-full border border-peach-ink/40 text-peach-ink transition-colors duration-300 hover:bg-peach-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  aria-label="Studi kasus sebelumnya"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="flex size-11 items-center justify-center rounded-full border border-peach-ink/40 text-peach-ink transition-colors duration-300 hover:bg-peach-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  aria-label="Studi kasus berikutnya"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              key={`img-${active.id}`}
              className={`relative aspect-4/3 overflow-hidden rounded-2xl ${animationClass}`}
            >
              <img
                src={active.image}
                alt={active.alt}
                loading="lazy"
                className="size-full object-contain p-6 sm:p-10"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
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