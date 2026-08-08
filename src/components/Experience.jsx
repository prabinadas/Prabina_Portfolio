'use client';

import { experienceData } from '@/data';
import { motion } from 'framer-motion';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="relative min-h-screen bg-white dark:bg-[#0a0a0a] px-4 py-20 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4"
          >
            Professional Journey
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-black dark:text-white mb-6 transition-colors duration-300"
          >
            A trajectory built on <br className="hidden sm:block" />
            shipping & learning.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg font-light text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto transition-colors duration-300"
          >
            From learning fundamentals to shipping production applications, every step focused on mastering the craft.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6 relative"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="group relative rounded-2xl border border-gray-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 p-6 sm:p-8 hover:border-black dark:hover:border-white hover:shadow-lg transition-all duration-300"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gray-50 dark:bg-neutral-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <div className="relative space-y-4">
                {/* Year and Title Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500">
                      {exp.year}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-neutral-200 transition-colors duration-300">
                      {exp.title}
                    </h3>
                  </div>

                  {/* Status Badge */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="self-start sm:self-auto px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 text-xs font-semibold text-green-700 dark:text-green-400 whitespace-nowrap transition-colors duration-300"
                  >
                    {exp.status}
                  </motion.div>
                </div>

                {/* Company */}
                <p className="text-sm font-light text-gray-600 dark:text-neutral-400 group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-base font-light text-gray-700 dark:text-neutral-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-neutral-200 transition-colors duration-300">
                  {exp.description}
                </p>

                {/* Achievements - Compact */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="pt-4 space-y-2 border-t border-gray-200 dark:border-neutral-900 group-hover:border-gray-300 dark:group-hover:border-neutral-800 transition-colors duration-300"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Key Achievements
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm font-light text-gray-700 dark:text-neutral-300 flex gap-2 transition-colors duration-300"
                        >
                          <span className="text-black dark:text-white font-bold flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Timeline Dot */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="absolute -left-4 top-8 w-3 h-3 rounded-full bg-black dark:bg-white border-4 border-white dark:border-[#0a0a0a] hidden lg:block transition-colors duration-300"
              ></motion.div>
            </motion.div>
          ))}

          {/* Timeline Line */}
          <div className="absolute -left-px top-0 bottom-0 w-px bg-gradient-to-b from-black via-gray-300 to-gray-200 dark:from-white dark:via-neutral-800 dark:to-neutral-900 hidden lg:block transition-colors duration-300"></div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-base sm:text-lg font-light text-gray-600 dark:text-neutral-400 transition-colors duration-300">
            Each role has been a step towards mastering <span className="font-semibold text-black dark:text-white transition-colors duration-300">full stack development</span> and <span className="font-semibold text-black dark:text-white transition-colors duration-300">real-time systems</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}