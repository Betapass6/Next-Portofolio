'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/img/avatar.png"
              alt="Betapass6 avatar"
              width={128}
              height={128}
              className="mx-auto mb-6 rounded-full border-4 border-primary-500 shadow-lg"
              priority
            />
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
              Hi, I&apos;m <span className="gradient-text">Betapass6</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400"
          >
            I’m a passionate full-stack developer with a focus on building scalable, modern web applications using Next.js, TypeScript, and the latest technologies. Welcome to my portfolio!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="https://github.com/Betapass6"
              className="btn-primary inline-flex items-center gap-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              Visit my GitHub
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-purple-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
} 