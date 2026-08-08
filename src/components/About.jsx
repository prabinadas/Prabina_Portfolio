'use client';

import { profileData } from '@/data';
import { motion } from 'framer-motion';
import { IconMapPin, IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { useTheme } from '@/context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="about" className="relative min-h-screen bg-white dark:bg-[#0a0a0a] px-4 py-20 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Section Label */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-500"
            >
              About Me
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-6xl font-bold text-black dark:text-white leading-tight transition-colors duration-300"
            >
              Full Stack Developer with Real-time Expertise
            </motion.h2>

            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-base sm:text-lg font-light text-gray-700 dark:text-neutral-300 leading-relaxed transition-colors duration-300">
                {profileData.bio}
              </p>
              <p className="text-base sm:text-lg font-light text-gray-700 dark:text-neutral-300 leading-relaxed transition-colors duration-300">
                {profileData.longBio}
              </p>
            </motion.div>

            {/* Expertise Grid */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 pt-8 border-t border-gray-200 dark:border-neutral-900 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-black dark:text-white transition-colors">
                Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Full Stack', desc: 'MERN with scalable architecture' },
                  { title: 'Real-time Systems', desc: 'Socket.io, WebSockets, WebRTC' },
                  { title: 'Database Design', desc: 'MongoDB, MySQL optimization' },
                  { title: 'DevOps', desc: 'Docker, Git, Linux, deployment' },
                  { title: 'Clean Code', desc: 'Production-ready solutions' },
                  { title: 'Problem Solving', desc: 'Complex technical challenges' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 6 }}
                    className="space-y-1 cursor-default"
                  >
                    <p className="font-semibold text-black dark:text-white text-sm transition-colors">
                      ✓ {item.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-neutral-400 transition-colors">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-8"
            >
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-neutral-850 rounded-lg text-sm text-gray-800 dark:text-neutral-300 hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all duration-300"
              >
                <IconMail size={16} />
                Email
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-neutral-850 rounded-lg text-sm text-gray-800 dark:text-neutral-300 hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all duration-300"
              >
                <IconBrandGithub size={16} />
                GitHub
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-neutral-850 rounded-lg text-sm text-gray-800 dark:text-neutral-300 hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all duration-300"
              >
                <IconBrandLinkedin size={16} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative space-y-6"
          >
            {/* Image Container */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-900 shadow-xl h-[450px] sm:h-[550px] transition-colors duration-300"
            >
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-neutral-950 rounded-xl border border-gray-200 dark:border-neutral-900 shadow-lg transition-colors duration-300"
            >
              <IconMapPin size={20} className="text-black dark:text-white flex-shrink-0 transition-colors" />
              <div>
                <p className="font-semibold text-black dark:text-white text-sm transition-colors">Based in</p>
                <p className="text-xs text-gray-600 dark:text-neutral-400 transition-colors">
                  {profileData.location}
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { num: '5+', label: 'Apps' },
                { num: '6', label: 'Certs' },
                { num: '3', label: 'Platforms' },
                { num: '2+', label: 'Years' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="p-3 rounded-lg border border-gray-200 dark:border-neutral-900 text-center cursor-default hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all duration-300"
                >
                  <p className="text-2xl font-bold text-black dark:text-white transition-colors">
                    {stat.num}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-neutral-400 mt-1 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}