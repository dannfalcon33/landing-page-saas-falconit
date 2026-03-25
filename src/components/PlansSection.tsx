import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { plans } from "../constant";

export const PlansSection = () => {
  return (
    <section id="plans" className="py-24 bg-[#05070A] relative">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#0B1622] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Planes de Servicio
          </h2>
          <p className="text-[#C0C6CF] text-xl mb-8 font-medium">
            Elige el nivel de soporte según la criticidad de tu operación
          </p>
          <div className="inline-flex items-center gap-2 px-8 py-3 bg-[#0B1622] border border-[#C0C6CF]/10 rounded-full mb-8 text-[#8A9199] shadow-inner">
            Desde <span className="text-[#C0C6CF] font-bold">$60/mes</span> vs
            +$800 de un técnico interno
          </div>
          <p className="text-[#C0C6CF] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C0C6CF] animate-pulse"></span>{" "}
            Cupos limitados por zona
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-8 rounded-[2rem] border ${plan.popular ? "bg-[#05070A] border-[#C0C6CF]/40 shadow-[0_0_30px_rgba(31,58,95,0.4)] scale-100 lg:scale-[1.02]" : "bg-[#0B1622] border-[#C0C6CF]/5"} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-[#C0C6CF] text-[#05070A] text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Recomendado
                </div>
              )}
              <h3 className="text-2xl font-serif font-bold text-[#E2E8F0] mb-2">
                {plan.name}
              </h3>
              <p className="text-[#8A9199] text-sm font-medium mb-4">
                {plan.target}
              </p>
              <p className="text-[#8A9199] text-sm mb-6 h-10 italic">
                {plan.description}
              </p>

              <div className="mb-8 border-b border-[#C0C6CF]/10 pb-8">
                <span className="text-5xl font-bold text-white font-serif">
                  ${plan.price}
                </span>
                <span className="text-[#8A9199]"> /mes</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-3 text-[#C0C6CF]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2F5D8C] shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${plan.popular ? "bg-linear-to-r from-[#1F3A5F] to-[#2F5D8C] text-white border border-[#C0C6CF]/30 shadow-[0_0_15px_rgba(47,93,140,0.5)] hover:shadow-[0_0_25px_rgba(192,198,207,0.3)]" : "bg-[#0B1622] border border-[#8A9199]/20 text-[#C0C6CF] hover:bg-[#1F3A5F]/20"}`}
              >
                Seleccionar Plan
              </button>

              <div className="mt-4 space-y-2 text-center text-xs text-[#8A9199]/70 font-medium">
                <p>⚡ Implementación en 48h</p>
                <p>🔓 Sin contratos largos</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
