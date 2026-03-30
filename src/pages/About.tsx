import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold font-serif mb-8 text-center"
        >
          Nuestro Modelo de Negocio
        </motion.h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-400 mb-6 text-center">
            En Falcon IT, transformamos la gestión tecnológica de las empresas mediante un modelo de soporte proactivo y preventivo.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Filosofía Falcon</h3>
              <p className="text-gray-400">
                No esperamos a que las cosas fallen. Nuestro modelo se basa en el monitoreo constante y la optimización continua de la infraestructura.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Escalabilidad</h3>
              <p className="text-gray-400">
                Ofrecemos soluciones que crecen con tu empresa, desde startups hasta PyMEs consolidadas, sin costos ocultos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
