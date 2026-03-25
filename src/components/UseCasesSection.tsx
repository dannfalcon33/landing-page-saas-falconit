import React from "react";
import { motion } from "motion/react";
import { useCases } from "../constant";

export const UseCasesSection = () => {
  return (
    <section id="usecases" className="py-24 bg-[#050505] border-y border-[#C0C6CF]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-tight">
            Expertos en tu sector
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => {
            const [miniResult, desc] = useCase.description.split("|");
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0B1622]/50 p-8 rounded-[2rem] border border-[#1F3A5F]/20 hover:border-[#1F3A5F] hover:shadow-[0_0_20px_rgba(31,58,95,0.2)] transition-all flex flex-col"
              >
                <useCase.icon className="w-10 h-10 text-[#C0C6CF] mb-6 drop-shadow-[0_0_5px_rgba(192,198,207,0.5)]" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {useCase.title}
                </h3>
                {miniResult && (
                  <p className="text-[#2F5D8C] font-semibold text-sm uppercase tracking-wide mb-3">
                    {miniResult}
                  </p>
                )}
                <p className="text-[#8A9199] leading-relaxed text-sm">
                  {desc || useCase.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
