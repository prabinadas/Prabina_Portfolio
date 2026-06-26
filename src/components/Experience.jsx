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
    <section id="experience" className="relative min-h-screen bg-white px-4 py-20 sm:px-8 md:px-12 lg:px-16">
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
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-black mb-6"
          >
            A trajectory built on <br className="hidden sm:block" />
            shipping & learning.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto"
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
          className="space-y-6"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 hover:border-black hover:shadow-lg transition-all duration-300"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <div className="relative space-y-4">
                {/* Year and Title Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500">
                      {exp.year}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-gray-800 transition-colors">
                      {exp.title}
                    </h3>
                  </div>

                  {/* Status Badge */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="self-start sm:self-auto px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-xs font-semibold text-green-700 whitespace-nowrap"
                  >
                    {exp.status}
                  </motion.div>
                </div>

                {/* Company */}
                <p className="text-sm font-light text-gray-600 group-hover:text-gray-700 transition-colors">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-base font-light text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {exp.description}
                </p>

                {/* Achievements - Compact */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="pt-4 space-y-2 border-t border-gray-200 group-hover:border-gray-300 transition-colors"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Key Achievements
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm font-light text-gray-700 flex gap-2"
                        >
                          <span className="text-black font-bold flex-shrink-0">•</span>
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
                className="absolute -left-4 top-8 w-3 h-3 rounded-full bg-black border-4 border-white hidden lg:block"
              ></motion.div>
            </motion.div>
          ))}

          {/* Timeline Line */}
          <div className="absolute -left-px top-0 bottom-0 w-px bg-gradient-to-b from-black via-gray-300 to-gray-200 hidden lg:block"></div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-base sm:text-lg font-light text-gray-600">
            Each role has been a step towards mastering <span className="font-semibold text-black">full stack development</span> and <span className="font-semibold text-black">real-time systems</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}