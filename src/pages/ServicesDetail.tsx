import React from "react";
import { motion } from "motion/react";
import { Server, Shield, Search, Zap } from "lucide-react";

const ServicesDetail = () => {
  const steps = [
    {
      title: "Auditoría Inicial",
      description: "Realizamos un diagnóstico exhaustivo de su infraestructura actual.",
      icon: Search
    },
    {
      title: "Optimización de Redes",
      description: "Configuramos switches, routers y antenas Wifi para máximo rendimiento.",
      icon: Zap
    },
    {
      title: "Seguridad y Backups",
      description: "Implementamos sistemas de respaldo en la nube y firewalls avanzados.",
      icon: Shield
    },
    {
      title: "Mantenimiento 24/7",
      description: "Monitoreo continuo de servidores y estaciones de trabajo.",
      icon: Server
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
          Servicio de Excelencia
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors text-center"
            >
              <div className="flex justify-center mb-6">
                <step.icon className="w-12 h-12 text-[#2F5D8C]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
