'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Shield, Smartphone, Globe, Database } from 'lucide-react';

const features = [
  {
    name: 'Modern Development',
    description: 'Built with Next.js 14, TypeScript, and Tailwind CSS for optimal performance and developer experience.',
    icon: Code,
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized for speed with server-side rendering, static generation, and edge computing capabilities.',
    icon: Zap,
  },
  {
    name: 'Type Safe',
    description: 'Full TypeScript integration ensures type safety across the entire application stack.',
    icon: Shield,
  },
  {
    name: 'Responsive Design',
    description: 'Mobile-first approach with beautiful, responsive layouts that work on all devices.',
    icon: Smartphone,
  },
  {
    name: 'SEO Optimized',
    description: 'Built-in SEO features with metadata, structured data, and performance optimization.',
    icon: Globe,
  },
  {
    name: 'Scalable Architecture',
    description: 'Clean, maintainable code structure that scales with your business needs.',
    icon: Database,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
          >
            Why Choose This Stack?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400"
          >
            A modern tech stack that delivers exceptional user experiences and developer productivity.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-slate-100">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
} 