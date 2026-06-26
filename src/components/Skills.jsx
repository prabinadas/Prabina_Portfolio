'use client';

import { skillsData } from '@/data';
import { motion } from 'framer-motion';

export default function Skills() {
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative min-h-screen bg-white px-4 py-20 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4"
          >
            Tech Stack
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black mb-6"
          >
            The full stack,<br className="hidden sm:block" />
            top to bottom.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Every technology chosen for a reason — not for the resume, but because it solves the problem best.
          </motion.p>
        </motion.div>

        {/* Skills Grid - 2 Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20"
        >
          {Object.values(skillsData).map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={categoryVariants}
              className="space-y-6"
            >
              {/* Category Title */}
              <motion.h3
                variants={categoryVariants}
                className="text-sm font-bold uppercase tracking-widest text-gray-700 border-b-2 border-black pb-3"
              >
                {skillGroup.category}
              </motion.h3>

              {/* Skills Container */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="flex flex-wrap gap-3"
              >
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.button
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
                      borderColor: '#000',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 rounded-xl border-2 border-gray-300 bg-white text-sm font-light text-gray-800 hover:border-black hover:text-black transition-all duration-300 cursor-default relative group"
                  >
                    {/* Hover Background */}
                    <motion.div
                      className="absolute inset-0 bg-gray-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    ></motion.div>

                    {/* Skill Text */}
                    <span className="relative flex items-center gap-2">
                      <motion.span
                        className="font-semibold group-hover:hidden"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        +
                      </motion.span>
                      <span className="group-hover:font-semibold transition-all duration-300">
                        {skill}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gray-200 my-20"
        ></motion.div>

        {/* Summary Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h3
            variants={categoryVariants}
            className="text-center text-xl font-semibold text-black"
          >
            Complete Coverage Across All Categories
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
          >
            {[
              { num: '6', label: 'Categories' },
              { num: '25+', label: 'Technologies' },
              { num: '2+', label: 'Years' },
              { num: '5+', label: 'Apps Shipped' },
              { num: '3', label: 'Live Platforms' },
              { num: '100%', label: 'Production' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={categoryVariants}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  borderColor: '#000',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                }}
                className="p-4 rounded-2xl border-2 border-gray-200 bg-white text-center group hover:border-black transition-all duration-300"
              >
                <p className="text-3xl sm:text-4xl font-bold text-black group-hover:scale-110 transition-transform duration-300">
                  {item.num}
                </p>
                <p className="text-xs text-gray-600 mt-2 group-hover:text-black transition-colors duration-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-base sm:text-lg font-light text-gray-600">
            Every tool has been used in <span className="font-semibold text-black">production applications</span> with real users and clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}