'use client';

import { useState } from 'react';
import { profileData } from '@/data';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { IconSun, IconMoon } from '@tabler/icons-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      className="fixed top-0 w-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-900 z-50 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg font-bold tracking-tight text-black dark:text-white"
          >
            {profileData.name.split(' ')[0]}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ color: theme === 'dark' ? '#fff' : '#000' }}
                className="text-sm font-light text-gray-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Hire Me Button & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center p-2 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-900 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-2 border border-black dark:border-white text-black dark:text-white rounded-lg font-light text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Theme Toggle & Menu Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-900 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 text-black dark:text-white transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <span className="text-2xl text-black dark:text-white">✕</span>
              ) : (
                <span className="text-2xl text-black dark:text-white">☰</span>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - SIMPLE AND WORKING */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 dark:border-neutral-900 bg-white dark:bg-[#0a0a0a]"
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
                  className="px-4 py-3 text-base font-light text-gray-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-900 rounded-lg transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-neutral-900 my-2"></div>

              {/* Mobile Hire Me Button */}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-light text-sm text-center hover:bg-gray-900 dark:hover:bg-neutral-100 transition-all duration-300 mt-2"
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