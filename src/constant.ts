import {
  HeadphonesIcon,
  CheckCircle2,
  Lock,
  Server,
  Activity,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import {
  Plan,
  Feature,
  NavLink,
  Stat,
  ProcessStep,
  FAQ,
  UseCase,
} from "./types";

export const navLinks: NavLink[] = [
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#solutions" },
  { label: "Planes", href: "#plans" },
  { label: "Casos de Uso", href: "#usecases" },
];

export const stats: Stat[] = [
  { value: "+50", label: "Empresas activas protegidas" },
  { value: "+2,000", label: "Incidencias resueltas sin interrupciones clínicas" },
  { value: "99.9%", label: "Disponibilidad operativa garantizada" },
];

export const features: Feature[] = [
  {
    icon: HeadphonesIcon,
    title: "Soporte Continuo Híbrido",
    description:
      "Resolvemos incidencias antes de que afecten tu operación, combinando monitoreo 24/7 y asistencia técnica experta.",
  },
  {
    icon: Activity,
    title: "Mantenimiento Preventivo",
    description:
      "Reducimos fallas y alargamos la vida de tus equipos, evitando los altos costos de detener la productividad.",
  },
  {
    icon: Lock,
    title: "Sistema de Respaldo",
    description:
      "Información invulnerable. Protegemos todos tus activos críticos contra ransomware y pérdida de datos.",
  },
  {
    icon: Server,
    title: "Infraestructura IT",
    description:
      "Redes que no se caen. Optimización absoluta de servidores y WiFi corporativo veloz y seguro.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Evaluamos el estado actual de tu infraestructura y detectamos puntos de mejora.",
  },
  {
    number: "02",
    title: "Implementación",
    description:
      "Configuramos redes, accesos y sistemas iniciales para asegurar la estabilidad.",
  },
  {
    number: "03",
    title: "Monitoreo",
    description:
      "Vigilamos tus sistemas continuamente para prevenir caídas o lentitud.",
  },
  {
    number: "04",
    title: "Soporte",
    description:
      "Brindamos asistencia y optimizamos constantemente la tecnología de tu empresa.",
  },
];

export const plans: Plan[] = [
  {
    name: "Plan Básico",
    price: "60",
    target: "Para empresas que necesitan soporte esencial",
    description: "Soporte esencial para mantener tu operación en marcha.",
    features: [
      "Soporte remoto",
      "Diagnóstico básico",
      "Tiempo de respuesta estándar",
    ],
  },
  {
    name: "Plan Empresarial",
    price: "80",
    popular: true,
    target: "Para empresas que buscan estabilidad operativa",
    description: "Cobertura completa y mantenimiento proactivo.",
    features: [
      "Soporte prioritario",
      "Mantenimiento preventivo",
      "Optimización continua",
      "Backups gestionados",
    ],
  },
  {
    name: "Plan Corporativo",
    price: "120",
    target: "Para operaciones críticas",
    description: "Máxima prioridad y asesoría continua para tu negocio.",
    features: [
      "Soporte total",
      "Asesoría continua",
      "Respaldo avanzado",
      "Atención prioritaria inmediata",
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: "¿Qué pasa si tengo una emergencia?",
    answer:
      "Nuestro equipo responde a incidencias críticas en minutos, priorizando de manera inmediata cualquier afectación a la continuidad de tu negocio.",
  },
  {
    question: "¿Incluye visitas presenciales?",
    answer:
      "Sí, dependiendo del plan elegido y la naturaleza del problema. Ciertas incidencias de hardware o red requieren nuestra asistencia in situ.",
  },
  {
    question: "¿Cómo funcionan los backups?",
    answer:
      "Configuramos sistemas automáticos que respaldan tu información tanto localmente como en la nube, asegurando que tus datos siempre estén protegidos y disponibles.",
  },
  {
    question: "¿Qué tiempo de respuesta manejan?",
    answer:
      "Manejamos diferentes ANS (Acuerdos de Nivel de Servicio). Para planes empresariales y corporativos el tiempo puede variar desde unos pocos minutos hasta un par de horas dependiendo de la urgencia.",
  },
];

export const useCases: UseCase[] = [
  {
    icon: ShieldCheck,
    title: "Clínicas y Consultorios",
    description: "Cumplimiento y protección de datos|Garantizamos la protección de datos sensibles de pacientes y la disponibilidad de sistemas médicos críticos.",
  },
  {
    icon: Briefcase,
    title: "Suites de Abogados",
    description: "Seguridad documental total|Máxima seguridad y respaldo inquebrantable para documentos legales y confidenciales.",
  },
  {
    icon: Activity,
    title: "PYMES",
    description: "Operación continua sin interrupciones|Mantenemos tu operación sin interrupciones, permitiendo a tu equipo enfocarse en vender y crecer.",
  },
];
