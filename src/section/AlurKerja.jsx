import { CodeXml, FileSearch, PencilRuler, Rocket } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    id: "konsultasi",
    icon: FileSearch,
    title: "Konsultasi & Analisis",
    description:
      "Audit menyeluruh ide bisnis, requirement gathering, mapping data flow, serta penetapan estimasi timeline dan anggaran yang terukur.",
  },
  {
    id: "desain",
    icon: PencilRuler,
    title: "Desain UI/UX & Prototype",
    description:
      "Penyusunan wireframe interaktif di Figma, perancangan estetika visual brand, serta review usability bersama tim Anda sebelum penulisan kode.",
  },
  {
    id: "development",
    icon: CodeXml,
    title: "Development & Engineering",
    description:
      "Implementasi kode backend & frontend berstandar industri dengan basis data optimal, proteksi keamanan, dan weekly progress review.",
  },
  {
    id: "launch",
    icon: Rocket,
    title: "QA, Deployment & Launch",
    description:
      "Stress-testing mendalam, audit keamanan celah, setup server VPS/Cloud prima, serta serah terima kredensial disertai sesi training tim.",
  },
];

function AlurKerja() {
  return (
    <section
      id="alur-kerja"
      aria-labelledby="alur-kerja-title"
      className="bg-surface py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="alur-kerja-title"
          eyebrow="Alur Kerja Transparan"
          title="4 Tahapan Terukur Menuju Peluncuran Sukses"
          description="Metodologi Agile terstruktur yang memastikan kualitas kode, transparansi timeline, dan kesesuaian target bisnis."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li key={step.id} className="flex">
                <article className="flex w-full flex-col rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgb(15_29_51/0.04),0_12px_28px_-14px_rgb(15_29_51/0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgb(15_29_51/0.05),0_18px_36px_-14px_rgb(15_29_51/0.2)]">
                  <div className="flex items-start justify-between">
                    <span
                      aria-hidden="true"
                      className="font-display text-6xl font-extrabold leading-none text-sand"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex size-11 items-center justify-center rounded-lg bg-peach text-peach-ink">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-lg font-bold leading-snug text-ink">
                    <span className="sr-only">Tahap {index + 1}: </span>
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {step.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default AlurKerja;