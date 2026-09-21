import SectionHeading from "../ui/SectionHeading";

const rupiah = new Intl.NumberFormat("id-ID");

const plans = [
  {
    id: "basic",
    name: "Paket Basic",
    tag: "Company Profile",
    price: 3500000,
    description:
      "Ideal untuk profil bisnis profesional yang membutuhkan kehadiran online cepat.",
    features: [
      "Desain Kustom hingga 5 Halaman",
      "CMS Admin Simple & User-Friendly",
      "Optimasi SEO Dasar & Mobile Responsive",
      "Setup Sertifikat SSL & Domain Gratis 1 Th",
      "Garansi Bebas Bug 1 Bulan",
    ],
    cta: { label: "Pilih Paket Basic", href: "#kontak" },
    secondary: { label: "Konsultasi Dulu", href: "#kontak" },
    highlighted: false,
  },
  {
    id: "professional",
    name: "Paket Professional",
    tag: "Web App / Portal",
    price: 8500000,
    description:
      "Solusi operasional terlengkap untuk automasi bisnis, manajemen data, dan portal klien.",
    features: [
      "Dashboard Admin & User Multi-Role",
      "Database Custom Relasional & Caching",
      "Integrasi REST API / Payment Gateway",
      "Export Laporan Excel & PDF Otomatis",
      "Garansi Bebas Bug 3 Bulan & Support Prioritas",
    ],
    cta: { label: "Pilih Paket Professional", href: "#kontak" },
    secondary: { label: "Konsultasi Dulu", href: "#kontak" },
    highlighted: true,
    badge: "Paling Populer",
  },
  {
    id: "enterprise",
    name: "Paket Enterprise",
    tag: "Skala Kompleks",
    price: null,
    priceLabel: "Custom Quote",
    description:
      "Untuk perusahaan besar, platform SaaS multi-tenant, atau arsitektur microservices.",
    features: [
      "Arsitektur Skalabilitas Tinggi (Microservices)",
      "Custom Payment, IoT, & Third-Party API",
      "Dedicated Tim Developer & QA Lead",
      "Garansi Bebas Bug 6 Bulan & SLA 99,9%",
      "Kontrak NDA & Serah Terima Source Code Penuh",
    ],
    cta: { label: "Hubungi Tim Enterprise", href: "#kontak" },
    secondary: { label: "Kirim Dokumen RFP", href: "#kontak" },
    highlighted: false,
  },
];

function CheckIcon({ solid = false }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="mt-0.5 size-5 shrink-0"
    >
      {solid ? (
        <circle cx="10" cy="10" r="10" className="fill-brand" />
      ) : (
        <circle
          cx="10"
          cy="10"
          r="9.25"
          className="fill-none stroke-emerald-500"
          strokeWidth="1.5"
        />
      )}
      <path
        d="M5.75 10.25l2.75 2.75 5.75-6.25"
        className={solid ? "stroke-white" : "stroke-emerald-500"}
        fill="none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PriceList() {
  return (
    <section
      id="harga"
      aria-labelledby="harga-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="harga-title"
          eyebrow="Investasi Terukur"
          title="Pilihan Paket Fleksibel Sesuai Kebutuhan Bisnis"
          description="Tanpa biaya tersembunyi. Skema pembayaran transparan berbasis milestone proyek."
        />

        <ul className="mx-auto mt-16 grid max-w-md gap-10 lg:max-w-none lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <li
              key={plan.id}
              className={`flex ${plan.highlighted ? "lg:-my-4" : ""}`}
            >
              <article
                className={`relative flex w-full flex-col rounded-2xl p-7 ${
                  plan.highlighted
                    ? "bg-sky-soft shadow-xl shadow-brand/15 ring-1 ring-brand/10 lg:py-11"
                    : "bg-surface"
                }`}
              >
                {plan.badge && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cta px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap text-white shadow-md shadow-cta/30">
                    {plan.badge}
                  </span>
                )}

                <div className="flex items-center justify-between gap-3">
                  <h3
                    className={`text-sm font-semibold ${
                      plan.highlighted ? "text-brand" : "text-body"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold text-ink ${
                      plan.highlighted ? "bg-white/70" : "bg-sky-chip"
                    }`}
                  >
                    {plan.tag}
                  </span>
                </div>

                {plan.price ? (
                  <p className="mt-5 flex items-baseline gap-1.5 text-ink">
                    <span className="text-sm font-semibold">Rp</span>
                    <span className="font-display text-4xl font-extrabold tracking-tight xl:text-5xl">
                      {rupiah.format(plan.price)}
                    </span>
                  </p>
                ) : (
                  <p className="mt-5 font-display text-4xl font-extrabold tracking-tight text-ink">
                    {plan.priceLabel}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-body">
                  {plan.description}
                </p>

                <ul className="mt-7 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-snug text-ink">
                      <CheckIcon solid={plan.highlighted} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <a
                    href={plan.cta.href}
                    className={`block rounded-xl px-5 py-3.5 text-center text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                      plan.highlighted
                        ? "bg-cta text-white shadow-lg shadow-cta/30 hover:-translate-y-0.5 hover:bg-cta-hover"
                        : "bg-sky-chip text-ink hover:bg-[#d3dffa]"
                    }`}
                  >
                    {plan.cta.label}
                  </a>

                  <a
                    href={plan.secondary.href}
                    className="mt-4 block rounded-sm text-center text-xs font-semibold text-brand outline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-brand"
                  >
                    {plan.secondary.label}
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PriceList;