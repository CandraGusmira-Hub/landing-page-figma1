import { FaCss3Alt, FaHtml5, FaJs, FaLaravel, FaPhp } from "react-icons/fa6";
import {
  SiDocker,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

// colorClass = warna brand tiap teknologi (class Tailwind arbitrary value)
export const FRONTEND_STACK = [
  { id: "react", name: "React", icon: SiReact, colorClass: "text-[#61DAFB]" },
  { id: "tailwind", name: "Tailwind", icon: SiTailwindcss, colorClass: "text-[#38BDF8]" },
  { id: "html", name: "HTML", icon: FaHtml5, colorClass: "text-[#E34F26]" },
  { id: "css", name: "CSS", icon: FaCss3Alt, colorClass: "text-[#1572B6]" },
  { id: "js", name: "JavaScript", icon: FaJs, colorClass: "text-[#F7DF1E]" },
  { id: "ts", name: "TypeScript", icon: SiTypescript, colorClass: "text-[#3178C6]" },
  { id: "next", name: "Next.js", icon: SiNextdotjs, colorClass: "text-slate-900" },
  { id: "vue", name: "Vue", icon: SiVuedotjs, colorClass: "text-[#42B883]" },
];

export const BACKEND_STACK = [
  { id: "laravel", name: "Laravel", icon: FaLaravel, colorClass: "text-[#FF2D20]" },
  { id: "docker", name: "Docker", icon: SiDocker, colorClass: "text-[#2496ED]" },
  { id: "node", name: "Node.js", icon: SiNodedotjs, colorClass: "text-[#339933]" },
  { id: "postgres", name: "PostgreSQL", icon: SiPostgresql, colorClass: "text-[#336791]" },
  { id: "mysql", name: "MySQL", icon: SiMysql, colorClass: "text-[#4479A1]" },
  { id: "mongodb", name: "MongoDB", icon: SiMongodb, colorClass: "text-[#47A248]" },
  { id: "php", name: "PHP", icon: FaPhp, colorClass: "text-[#777BB4]" },
];