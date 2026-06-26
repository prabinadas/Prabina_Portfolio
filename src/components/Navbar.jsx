'use client';

import { useState } from 'react';
import { profileData } from '@/data';
import { motion } from 'framer-motion';
import { openContactModal } from '@/components/Contact';

// Your Hire Me button:
<button onClick={openContactModal}>Hire Me</button>
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
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 font-semibold "
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
           {profileData.name.split(' ').slice(0, 2).join(' ')}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-3xl">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ color: '#000' }}
                className=" text-lg font-semibold font-light text-gray-500 hover:text-black transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Hire Me Button */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" text-base hidden sm:inline-flex items-center justify-center px-6 py-2 border  text-gray-500 rounded-lg font-semibold  hover:bg-black hover:text-white transition-all duration-300"
            >
              Hire Me
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, translateY: 8 } : { rotate: 0, translateY: 0 }}
                className="h-0.5 w-6 bg-black transition-all duration-300"
              ></motion.span>
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-6 bg-black transition-all duration-300"
              ></motion.span>
              <motion.span
                animate={isOpen ? { rotate: -45, translateY: -8 } : { rotate: 0, translateY: 0 }}
                className="h-0.5 w-6 bg-black transition-all duration-300"
              ></motion.span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden pb-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 block py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="text-md font-light text-black border-t border-gray-400 pt-4 mt-2 font-bold hover:text-gray-700 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </motion.a>
        </motion.div>
      </div>
    </motion.nav>
  );
}