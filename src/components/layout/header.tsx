'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Betapass6', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rafi-ali-27005a364/', icon: Linkedin },
  { name: 'Email', href: 'mailto:rafimaulaali508@gmail.com', icon: Mail },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Portfolio</span>
            <div className="text-2xl font-bold gradient-text">Portfolio</div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Sun className="h-5 w-5 text-slate-600 dark:text-slate-400 block dark:hidden" />
            <Moon className="h-5 w-5 text-slate-600 dark:text-slate-400 hidden dark:block" />
          </button>
          
          {socialLinks.map((item) =>
            item.href.startsWith('mailto:') ? (
              <a
                key={item.name}
                href={item.href}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <item.icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </Link>
            )
          )}
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn('lg:hidden', mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden')}>
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Portfolio</span>
              <div className="text-2xl font-bold gradient-text">Portfolio</div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className="flex gap-x-4">
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Sun className="h-5 w-5 text-slate-600 dark:text-slate-400 block dark:hidden" />
                    <Moon className="h-5 w-5 text-slate-600 dark:text-slate-400 hidden dark:block" />
                  </button>
                  
                  {socialLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 