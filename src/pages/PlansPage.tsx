import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const PlansPage = () => {
  const plans = [
    {
      name: "Básico",
      price: "$199",
      features: ["Soporte de 9am a 6pm", "Mantenimiento Preventivo Mensual", "Acceso a Portal de Soporte", "Respaldo en la Nube (100GB)"]
    },
    {
      name: "Corporativo",
      price: "$499",
      features: ["Soporte 24/7", "Monitoreo Proactivo de Red", "Mantenimiento de Servidores", "Respaldo en la Nube (1TB)", "Consultoría Tecnológica"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Soporte Dedicado in situ", "Gestión Integral de IT", "Auditorías de Seguridad", "Respaldo Geo-redundante", "SLA de Respuesta en 1 Hora"]
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold font-serif mb-12 text-center"
        >
          Planes de Servicio Falcon IT
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#1F3A5F]/50 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6 text-[#C0C6CF]">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-400">
                    <Check className="w-5 h-5 text-[#2F5D8C]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors font-bold">
                Solicitar Cotización
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
