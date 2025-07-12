'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'WorkCore-All-in-One-Business-Toolkit',
    description:
      'Fullstack business toolkit with client (React, Chakra UI) and server (Node.js, Express). Includes Docker support.',
    technologies: ['React', 'Chakra UI', 'Node.js', 'Express', 'TypeScript', 'Docker'],
    github: 'https://github.com/Betapass6/WorkCore-All-in-One-Business-Toolkit',
  },
  {
    title: 'E-Commers',
    description:
      'E-commerce platform built with TypeScript. Features product management and modern UI.',
    technologies: ['TypeScript'],
    github: 'https://github.com/Betapass6/E-Commers',
  },
  {
    title: 'Sentiment-Analysis-Chat-Review-dengan-DistilBERT',
    description:
      'Sentiment analysis for chat reviews using DistilBERT. NLP and machine learning project.',
    technologies: ['Python', 'NLP', 'DistilBERT'],
    github: 'https://github.com/Betapass6/Sentiment-Analysis-Chat-Review-dengan-DistilBERT',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400"
          >
            My top open-source projects. Explore more on my GitHub!
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900">
                <span className="text-slate-500 dark:text-slate-400 text-sm">{project.title}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/20 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
} 