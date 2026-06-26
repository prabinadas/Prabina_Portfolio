'use client';

import { profileData } from '@/data';
import { motion } from 'framer-motion';
import { IconMapPin, IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export default function About() {
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
    <section id="about" className="relative min-h-screen bg-white px-4 py-20 sm:px-8 md:px-12 lg:px-16">
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
              className="text-5xl sm:text-6xl md:text-6xl font-bold text-black leading-tight"
            >
              Full Stack Developer with Real-time Expertise
            </motion.h2>

            {/* Bio */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-base sm:text-lg font-light text-gray-700 leading-relaxed">
                {profileData.bio}
              </p>
              <p className="text-base sm:text-lg font-light text-gray-700 leading-relaxed">
                {profileData.longBio}
              </p>
            </motion.div>

            {/* Expertise Grid */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 pt-8 border-t border-gray-200"
            >
              <h3 className="text-lg font-semibold text-black">
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
                    <p className="font-semibold text-black text-sm">
                      ✓ {item.title}
                    </p>
                    <p className="text-xs text-gray-600">
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
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-black hover:bg-gray-50 transition-all"
              >
                <IconMail size={16} />
                Email
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center  gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-black hover:bg-gray-50 transition-all"
              >
                <IconBrandGithub size={16} />
                GitHub
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:border-black hover:bg-gray-50 transition-all"
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
              className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl h-[450px] sm:h-[550px]"
            >
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-full  object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-gray-200 shadow-lg"
            >
              <IconMapPin size={20} className="text-black flex-shrink-0" />
              <div>
                <p className="font-semibold text-black text-sm">Based in</p>
                <p className="text-xs text-gray-600">
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
                  className="p-3 rounded-lg border border-gray-200 text-center cursor-default hover:border-black hover:bg-gray-50 transition-all"
                >
                  <p className="text-2xl font-bold text-black">
                    {stat.num}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
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