'use client';

import { projectsData } from '@/data';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

export default function Projects() {
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="relative min-h-screen bg-white dark:bg-[#0a0a0a] px-4 py-20 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300">
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
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black dark:text-white transition-colors"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg font-light text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto transition-colors"
          >
            Production-grade applications built with modern technologies and shipped to real users.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-gray-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Image/Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-neutral-900/50 dark:to-neutral-950/50 flex items-center justify-center cursor-pointer transition-colors duration-300 group"
                >
                  {project.id === 1 ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <motion.img
                        src="/rentify.png"
                        alt={project.title}
                        className="absolute left-0 w-full h-[115%] object-cover object-top"
                        style={{ top: '-8%' }}
                        animate={{
                          scale: [1.02, 1.05, 1.02],
                          y: ['0%', '-4%', '0%'],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      {/* Premium hover overlay */}
                      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="w-20 h-20 rounded-full border-3 border-gray-300 dark:border-neutral-800 flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
                      >
                        <span className="text-3xl font-bold text-gray-400 dark:text-neutral-600">{project.id}</span>
                      </motion.div>
                      <p className="text-sm font-light text-gray-500 dark:text-neutral-500">{project.title}</p>
                    </div>
                  )}
                </motion.div>

                {/* Project Details */}
                <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full border transition-all duration-300 ${
                          project.status === 'Deployed'
                            ? 'bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900/30'
                            : 'bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900/30'
                        }`}
                      >
                        {project.status}
                      </motion.span>
                    </div>

                    <p className="text-base font-light text-gray-700 dark:text-neutral-300 leading-relaxed transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-neutral-900 transition-colors duration-300">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-neutral-500">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          className="text-xs font-light px-3 py-1 rounded-full border border-gray-200 dark:border-neutral-850 bg-gray-50 dark:bg-neutral-900 text-gray-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-950 hover:border-black dark:hover:border-white transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-neutral-900 transition-colors duration-300">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-light text-sm hover:bg-gray-900 dark:hover:bg-neutral-100 transition-all duration-300"
                      >
                        <IconExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-neutral-850 text-black dark:text-white rounded-lg font-light text-sm hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all duration-300"
                      >
                        <IconBrandGithub size={16} />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-base sm:text-lg font-light text-gray-600 dark:text-neutral-400 transition-colors">
            Want to see more?{' '}
            <motion.a
              href="https://github.com/prabinadas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-neutral-300 transition-colors underline"
            >
              Visit my GitHub
            </motion.a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}