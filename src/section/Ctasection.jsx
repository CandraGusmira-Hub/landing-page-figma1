import { Check, MessageSquareText, Video } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/6281234567890";
const MEET_URL = "#";

const assurances = [
  "100% Hak Milik Source Code",
  "Non-Disclosure Agreement (NDA)",
  "Tanpa Biaya Tersembunyi",
];

function CtaSection() {
  return (
    <section
      id="kontak"
      aria-labelledby="kontak-title"
      className="relative isolate overflow-hidden bg-ink py-20 sm:py-24"
    >
      {/* Cahaya latar: biru di kiri atas, hangat di kanan bawah */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 -z-10 size-130 rounded-full bg-blue-700/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -right-32 -z-10 size-110 rounded-full bg-orange-800/25 blur-3xl"
      />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-200 ring-1 ring-white/10">
          <span className="size-1.5 rounded-full bg-cta" aria-hidden="true" />
          Jadwal Konsultasi Terbuka Minggu Ini
        </p>

        <h2
          id="kontak-title"
          className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance text-white sm:text-5xl"
        >
          Siap Wujudkan Aplikasi & Website Impian Bisnis Anda?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty text-slate-300">
          Diskusikan ide Anda sekarang tanpa komitmen apapun. Tim tech engineer
          kami siap memberikan estimasi teknis, analisis alur data, & arsitektur
          terbaik secara cuma-cuma.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-cta px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cta/30 transition hover:-translate-y-0.5 hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cta sm:w-auto"
          >
            <MessageSquareText className="size-4.5" aria-hidden="true" />
            Hubungi Kami via WhatsApp Sekarang
          </a>

          <a
            href={MEET_URL}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
          >
            <Video className="size-4.5" aria-hidden="true" />
            Jadwalkan Google Meet
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400">
          {assurances.map((item) => (
            <li key={item} className="inline-flex items-center gap-1.5">
              <Check className="size-3.5 text-emerald-400" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CtaSection;