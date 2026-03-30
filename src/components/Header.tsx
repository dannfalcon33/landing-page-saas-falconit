import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../constant";
import { Logo } from "./Logo";
import { headerButtonClasses, buttonLargeClasses } from "./styles";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const linkVariants = {
    closed: { y: -20, opacity: 0, transition: { duration: 0.3 } },
    open: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      {/* Efecto espejo ultra-brillante cada 4 segundos */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[100px] h-full bg-linear-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] animate-shine"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="flex items-center gap-3 group cursor-pointer relative z-50 px-4 py-2"
          >
            <Logo className="w-10 h-10 lg:w-12 lg:h-12 group-hover:scale-105 transition-transform relative z-10" />
            <span className="font-serif text-2xl font-bold tracking-wider text-white group-hover:text-[#C0C6CF] transition-colors relative z-10">
              FALCON IT
            </span>
          </Link>

          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-sm font-medium text-[#8A9199] hover:text-[#C0C6CF] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C0C6CF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button className={headerButtonClasses}>
              Agenda diagnóstico gratuito
            </button>
          </div>

          {!isOpen && (
            <button
              className="lg:hidden text-[#8A9199] hover:text-[#C0C6CF] relative z-50 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#05070A] z-40 flex flex-col justify-center items-center px-4"
          >
            {/* Botón X de cierre explícito para el menú responsive */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-4 text-[#8A9199] hover:text-white p-2 transition-colors z-50 flex items-center justify-center cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col gap-8 w-full max-w-sm text-center">
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div variants={linkVariants}>
                    <Link
                      to={link.href}
                      className="block text-2xl font-serif font-bold text-[#E2E8F0] hover:text-[#C0C6CF] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
              <div className="overflow-hidden mt-6">
                <motion.button
                  variants={linkVariants}
                  className={`${buttonLargeClasses} w-full text-base py-4 hover:scale-100 flex items-center justify-center`}
                >
                  Agenda diagnóstico gratuito
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
