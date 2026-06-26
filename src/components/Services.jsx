'use client';

import { servicesData } from '@/data';
import { motion } from 'framer-motion';
import {
  IconCode,
  IconStack3,
  IconApi,
  IconPalette,
} from '@tabler/icons-react';

const iconMap = {
  code: IconCode,
  stack: IconStack3,
  api: IconApi,
  design: IconPalette,
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="relative min-h-screen bg-white px-4 py-20 sm:px-8 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black"
          >
            Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto"
          >
            I help businesses build scalable, production-grade web applications.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 hover:border-black hover:shadow-lg transition-all duration-300 space-y-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300"
                >
                  {IconComponent && <IconComponent size={24} />}
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base font-light text-gray-600">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <p className="text-md font-bold uppercase tracking-widest text-gray-500">
                    Deliverables
                  </p>
                  <ul className="space-y-2 ">
                    {[
                      'Architecture & Design',
                      'Clean, Maintainable Code',
                      'Full Documentation',
                      'Post-Launch Support',
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="text-sm font-light text-gray-600 flex gap-2"
                      >
                        <span className="text-black">✓</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-12 text-center space-y-6"
        >
          <h3 className="text-4xl font-bold text-black">Ready to work together?</h3>
          <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
            Let's discuss your project requirements, timeline, and goals. I'll provide a detailed proposal and timeline.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-lg font-light text-sm hover:bg-gray-900 transition-colors duration-300"
          >
            Schedule a Free Consultation
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}