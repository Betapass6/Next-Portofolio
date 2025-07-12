'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Next.js', level: 75 },
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Chakra UI', level: 90 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'Material UI', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 90 },
      { name: 'Django', level: 70 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400"
          >
            A comprehensive set of skills and technologies I use to build modern web applications.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 