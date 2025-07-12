import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Betapass6', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rafi-ali-27005a364/', icon: Linkedin },
  { name: 'Email', href: 'mailto:rafimaulaali508@gmail.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) =>
            item.href.startsWith('mailto:') ? (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            )
          )}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
            &copy; 2025 Rafi Ali. Made with{' '}
            <Heart className="inline h-4 w-4 text-red-500" />{' '}
            using Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
} 