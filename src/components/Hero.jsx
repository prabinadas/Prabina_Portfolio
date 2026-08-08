'use client';

import { profileData, stats } from '@/data';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-[#0a0a0a] pt-40 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 flex items-center overflow-hidden transition-colors duration-300">
      {/* Premium Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900/50 dark:to-transparent rounded-full -z-10 blur-3xl opacity-40 dark:opacity-20 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-100 to-white dark:from-neutral-900/40 dark:to-transparent rounded-full -z-10 blur-3xl opacity-30 dark:opacity-15 transition-all duration-300"></div>

      <div className="mx-auto max-w-5xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 text-center"
        >
          {/* Premium Availability Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border-2 border-green-200 dark:border-green-800/30 bg-white dark:bg-neutral-950/80 transition-colors duration-300"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], boxShadow: ['0 0 0 0px rgba(34,197,94,0.7)', '0 0 0 10px rgba(34,197,94,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-green-500"
              ></motion.div>
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Available for freelance & full-time work
              </span>
            </motion.div>
          </motion.div>

          {/* Premium Hero Name */}
          <motion.div variants={itemVariants} className="space-y-1">
            <div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-black dark:text-white leading-tight transition-colors duration-300" >
                {profileData.name}
              </h1>
            </div>
            <motion.div
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 w-24 bg-gradient-to-r from-black via-gray-400 to-white dark:from-white dark:via-neutral-700 dark:to-neutral-950 mx-auto rounded-full"
            ></motion.div>
          </motion.div>

          {/* Premium Title */}
          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-700 dark:text-neutral-300 tracking-wide transition-colors duration-300"
          >
            {profileData.title}
          </motion.p>

          {/* Premium Bio */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg font-light text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed tracking-wide transition-colors duration-300"
          >
            {profileData.bio}
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center "
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-9 py-3.5 bg-black dark:bg-white text-white dark:text-black rounded-xl font-light text-sm overflow-hidden border border-black dark:border-white transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 dark:from-neutral-100 dark:via-white dark:to-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-base"
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                y: -3,
                backgroundColor: theme === 'dark' ? '#fff' : '#000',
                color: theme === 'dark' ? '#000' : '#fff'
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-9 py-3.5 border-2 border-black dark:border-white text-black dark:text-white rounded-xl font-light text-sm transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-base"
                >
                  ↓
                </motion.span>
              </span>
            </motion.a>
          </motion.div>

          {/* Premium Stats Section */}
          <motion.div
            variants={itemVariants}
            className="pt-20 border-t border-gray-200 dark:border-neutral-900 transition-colors duration-300"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.08 }}
                  className="space-y-3 group cursor-default"
                >
                  <motion.p
                    animate={{ color: theme === 'dark' ? '#fff' : '#000' }}
                    whileHover={{ color: theme === 'dark' ? '#a3a3a3' : '#666' }}
                    className="text-4xl sm:text-5xl font-bold text-black dark:text-white transition-colors duration-300"
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-xs sm:text-sm font-light text-gray-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}