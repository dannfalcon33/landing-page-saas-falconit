import React, { useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { FloatingSpheres } from "../components/FloatingSpheres";
import { ArrowLeft, Lock, Mail, User, ShieldCheck } from "lucide-react";
import { buttonLargeClasses } from "../components/styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in...", { email, password });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <FloatingSpheres />

      {/* Botón de volver */}
      <Link
        to="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-[#8A9199] hover:text-white transition-colors z-50 group font-bold"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="">Volver al inicio</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#0B1622]/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Brillo decorativo */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/30 to-transparent"></div>

          <div className="flex flex-col items-center mb-10">
            <div className="p-4 bg-black rounded-2xl border border-white/5 mb-6 shadow-inner">
              <Logo className="w-12 h-16" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">
              Iniciar Sesión
            </h1>
            <p className="text-[#8A9199] text-center font-medium">
              Accede a tu panel de control de Falcon IT
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#C0C6CF] ml-1">
                Correo electrónico
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8A9199] group-focus-within:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-[#3A3F47] focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all"
                  placeholder="usuario@falconit.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-[#C0C6CF]">
                  Contraseña
                </label>
                <button
                  type="button"
                  className="text-xs text-[#8A9199] hover:text-white transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8A9199] group-focus-within:text-white transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-[#3A3F47] focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`${buttonLargeClasses} w-full py-4 mt-4 flex items-center justify-center gap-3 group`}
            >
              <span>Iniciar Sesión</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#8A9199]">
              ¿No tienes cuenta?{" "}
              <span className="text-white font-bold cursor-pointer hover:underline">
                Suscribete
              </span>
            </p>
          </div>
        </div>

        {/* Footer simple */}
        <p className="text-center mt-12 text-[#3A3F47] text-xs font-medium tracking-widest uppercase">
          Falcon IT © 2026 • Excelencia en Tecnología
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
