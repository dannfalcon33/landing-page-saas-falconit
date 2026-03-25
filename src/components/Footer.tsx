import React from "react";
import { Copy, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-[#8A9199] py-12 border-t border-[#1F3A5F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-8 h-8 opacity-80" />
              <span className="font-serif text-xl font-bold text-[#E2E8F0] tracking-wider">
                FALCON IT
              </span>
            </div>
            <p className="text-sm max-w-sm">
              Protegemos y optimizamos la infraestructura tecnológica de tu
              empresa para que puedas enfocarte en tu negocio.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#C0C6CF] transition-colors">
                  Soporte Remoto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C0C6CF] transition-colors">
                  Ciberseguridad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C0C6CF] transition-colors">
                  Backups Cloud
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>soporte@falconit.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="hover:text-[#C0C6CF] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-[#C0C6CF] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-[#1F3A5F]/10 text-sm flex flex-col md:flex-row justify-between items-center opacity-70">
          <p>© 2024 Falcon IT. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
