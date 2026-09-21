import {
  ArrowRight,
  BadgeCheck,
  Gauge,
  MessageSquare,
  Server,
  ShieldCheck,
  Star,
} from "lucide-react";
import Badge from "../ui/Badge";
import heroImage from "../assets/images/hero.png";
import TechStackCard from "../ui/TechStackCard";
import TechMarquee from "../ui/TechMarquee";
import { BACKEND_STACK, FRONTEND_STACK } from "../data/TechStack";

// Gambar kartu utama
const HERO_IMAGE = heroImage;

// Gabungan semua teknologi untuk marquee (tampil di bawah layar lg)
const ALL_STACK = [...FRONTEND_STACK, ...BACKEND_STACK];

// Ganti dengan nomor WhatsApp (format internasional tanpa +, mis. 62812xxxxxxx)
const WHATSAPP_URL =
  "https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20pembuatan%20website";

const TRUST_ITEMS = [
  {
    id: "project",
    label: "50+ Project Selesai",
    icon: BadgeCheck,
    iconClass: "text-emerald-500",
  },
  {
    id: "rating",
    label: "Rating 5.0 (40+ Klien)",
    icon: Star,
    iconClass: "fill-amber-400 text-amber-400",
  },
  {
    id: "maintenance",
    label: "Garansi 100% Maintenance",
    icon: ShieldCheck,
    iconClass: "fill-sky-800 text-sky-800",
  },
];

// Fade bagian bawah kartu latar
const FADE_MASK = "mask-[linear-gradient(to_bottom,black_55%,transparent)]";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-12 font-sans sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-24">
      {/* Pola titik halus */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.07)_1px,transparent_0)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_at_top,black_25%,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Glow oranye di latar belakang */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-orange-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-orange-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <h1 className="mx-auto text-balance text-center text-[clamp(1.875rem,5.2vw,3.5rem)] font-extrabold leading-[1.12] tracking-tight text-slate-900">
          Jasa Pembuatan Website &amp;
          <br className="hidden sm:block" /> Aplikasi Custom untuk{" "}
          <span className="bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Bisnis Anda
          </span>
        </h1>

        {/* Mockup */}
        <div className="relative mx-auto mt-10 w-full max-w-4xl animate-rise sm:mt-14 lg:mt-16 motion-reduce:animate-none">
          {/* Kartu kiri - Frontend (hanya di layar lg ke atas) */}
          <TechStackCard
            title="Frontend"
            items={FRONTEND_STACK}
            className={`absolute bottom-8 top-10 hidden w-1/2 lg:-left-15 lg:block ${FADE_MASK}`}
          />

          {/* Kartu kanan - Backend & Database (hanya di layar lg ke atas) */}
          <TechStackCard
            title="Backend & Database"
            items={BACKEND_STACK}
            className={`absolute bottom-0 top-20 hidden w-2/3 lg:-right-15 lg:block ${FADE_MASK}`}
          />

          {/* Kartu utama */}
          <div className="relative z-10 mx-auto w-full max-w-2xl rounded-3xl bg-white p-2.5 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.3)] ring-1 ring-slate-900/5 sm:rounded-[28px] sm:p-3.5">
            <img
              src={HERO_IMAGE}
              alt="Dashboard aplikasi custom yang ditampilkan di laptop"
              className="aspect-16/10 w-full rounded-2xl object-cover"
            />
          </div>

          {/* Badge kanan atas */}
          <Badge
            icon={Gauge}
            label="Lighthouse Score"
            value="99 / 100"
            tag="A+"
            subtext="Under 0.8s Initial Load"
            className="absolute -top-4 right-0 z-20 origin-top-right scale-[0.6] [animation-delay:0s] min-[480px]:scale-75 sm:-top-8 sm:scale-90 lg:-right-4 lg:scale-100"
          />

          {/* Badge kiri bawah */}
          <Badge
            icon={Server}
            label="Production Reliability"
            value="99.98% Uptime"
            subtext="Cloud Enterprise SLA"
            showDot
            className="absolute -bottom-4 left-0 z-20 origin-bottom-left scale-[0.6] [animation-delay:-2s] min-[480px]:scale-75 sm:-bottom-6 sm:scale-90 lg:-left-4 lg:scale-100"
          />
        </div>

        <div className="mt-8 py-2 gap-1">
        {/* Marquee teknologi: pengganti kartu latar di bawah lg */}
        <h1 className="text-center font-extrabold uppercase">Tech yang kami gunakan</h1>
        <TechMarquee items={ALL_STACK} className="mt-10" />
        </div>

        {/* Trust items */}
        <ul className="mt-10 flex flex-col items-stretch gap-3 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:mt-16">
          {TRUST_ITEMS.map(({ id, label, icon: Icon, iconClass }) => (
            <li
              key={id}
              className="flex items-center justify-center gap-2 rounded-xl bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-sm"
            >
              <Icon className={`h-4 w-4 ${iconClass}`} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:translate-y-0 sm:w-auto"
          >
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            Konsultasi Gratis via WhatsApp
            <span className="rounded-full bg-orange-600/50 px-2.5 py-1 text-[11px] font-medium leading-none">
              Respon &lt; 15 Mnt
            </span>
          </a>

          <a
            href="#portfolio"
            className="group inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 ring-1 ring-slate-900/10 backdrop-blur-sm transition duration-200 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:w-auto"
          >
            Lihat Portfolio Project
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;