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
    <section id="projects" className="relative min-h-screen bg-white px-4 py-20 sm:px-8 md:px-12 lg:px-16">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto"
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
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Image/Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center cursor-pointer"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-20 h-20 rounded-full border-3 border-gray-300 flex items-center justify-center mx-auto mb-4"
                    >
                      <span className="text-3xl font-bold text-gray-400">{project.id}</span>
                    </motion.div>
                    <p className="text-sm font-light text-gray-500">{project.title}</p>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-bold text-black">
                        {project.title}
                      </h3>
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${
                          project.status === 'Deployed'
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {project.status}
                      </motion.span>
                    </div>

                    <p className="text-base font-light text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3 pt-6 border-t border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          className="text-xs font-light px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-700 hover:bg-white hover:border-black transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-6 border-t border-gray-200">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-light text-sm hover:bg-gray-900 transition-all duration-300"
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
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-black rounded-lg font-light text-sm hover:border-black hover:bg-gray-50 transition-all duration-300"
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
          <p className="text-base sm:text-lg font-light text-gray-600">
            Want to see more?{' '}
            <motion.a
              href="https://github.com/prabinadas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="font-semibold text-black hover:text-gray-700 transition-colors underline"
            >
              Visit my GitHub
            </motion.a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}