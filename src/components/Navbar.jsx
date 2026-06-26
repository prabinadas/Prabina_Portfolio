
'use client';

import { useState } from 'react';
import { profileData } from '@/data';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg font-bold tracking-tight text-black"
          >
            {profileData.name.split(' ')[0]}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ color: '#000' }}
                className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Hire Me Button */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-2 border border-black text-black rounded-lg font-light text-sm hover:bg-black hover:text-white transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <span className="text-2xl text-black">✕</span>
            ) : (
              <span className="text-2xl text-black">☰</span>
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation - SIMPLE AND WORKING */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="flex flex-col gap-0 py-4 px-4">
              {/* Nav Links */}
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-3 text-base font-light text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Divider */}
              <div className="h-px bg-gray-200 my-2"></div>

              {/* Mobile Hire Me Button */}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-black text-white rounded-lg font-light text-sm text-center hover:bg-gray-900 transition-all duration-300 mt-2"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}