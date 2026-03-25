import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";
import { buttonLargeClasses } from "./styles";

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-20 overflow-hidden bg-[#05070A]">
      <div className="absolute inset-0 bg-linear-to-br from-[#0B1622] via-[#1F3A5F]/20 to-[#05070A] animate-gradient -z-10"></div>

      {/* Glow secundario para darle un toque más metálico/profundo al header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#1F3A5F]/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Emblema gigante de fondo (Watermark) transparente tipo Falcon IT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none flex items-center justify-center">
        <Logo className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif tracking-tight"
        >
          Reduce fallas, tiempos muertos y riesgos tecnológicos en menos de{" "}
          <span className="text-[#C0C6CF] drop-shadow-[0_0_15px_rgba(192,198,207,0.5)]">
            24h
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#8A9199] max-w-4xl mx-auto mb-8 leading-relaxed font-light"
        >
          Nos encargamos del soporte, mantenimiento y respaldo de tu empresa
          para que operes sin interrupciones, sin necesidad de contratar
          personal interno.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-12 text-[#C0C6CF] text-sm md:text-base font-medium"
        >
          <li className="flex justify-center items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#2F5D8C]" /> Soporte remoto y
            presencial
          </li>
          <li className="flex justify-center items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#2F5D8C]" /> Respuesta rápida
            garantizada
          </li>
          <li className="flex justify-center items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#2F5D8C]" /> Backups seguros
            en la nube
          </li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <button className={buttonLargeClasses}>
            Agenda diagnóstico gratuito{" "}
            <ArrowRight className="w-5 h-5 opacity-80" />
          </button>
          <a
            href="#plans"
            className="px-8 py-4 bg-transparent border border-[#8A9199]/30 text-[#C0C6CF] font-semibold rounded-full hover:bg-[#8A9199]/10 hover:border-[#C0C6CF]/60 transition-colors flex items-center justify-center"
          >
            Ver planes
          </a>
        </motion.div>
      </div>
    </section>
  );
};
