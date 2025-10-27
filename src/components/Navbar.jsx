import React from 'react';
import { Github, Mail, FileDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
export function Navbar(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-neutral-900/80 border-b dark:border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        <a href="#home" className="font-semibold tracking-tight">Steven Cheng</a>
        <div className="hidden sm:flex items-center gap-4 text-sm">
          <a className="hover:underline" href="#research">Research</a>
          <a className="hover:underline" href="#previews">Previews</a>
          <a className="hover:underline" href="#projects">Projects</a>
          <a className="hover:underline" href="#about">About</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="/resume.pdf" download className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-xl border hover:bg-black/5 dark:hover:bg-white/10 border-black/10 dark:border-white/15"><FileDown className="h-4 w-4"/> Resume</a>
          <ThemeToggle/>
          <a href="mailto:steven.chengvaie@gmail.com" aria-label="Email" className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"><Mail className="h-5 w-5"/></a>
          <a href="https://github.com/StevenChengCCC/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"><Github className="h-5 w-5"/></a>
        </div>
      </nav>
    </header>
  );
}
