import React from 'react';
import { Github, Mail } from 'lucide-react';
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
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
          <a href="mailto:steven.chengvaie@gmail.com" aria-label="Email" className="p-2 rounded-xl hover:bg-black/5">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://github.com/StevenChengCCC/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-xl hover:bg-black/5">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  )
}
