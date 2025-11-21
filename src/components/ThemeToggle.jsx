import React from 'react'; import { Moon, Sun } from 'lucide-react';
export function ThemeToggle(){
  const [dark, setDark] = React.useState(typeof document!=='undefined' && document.documentElement.classList.contains('dark'));
  const toggle = ()=>{ const next=!dark; document.documentElement.classList.toggle('dark', next); try{localStorage.setItem('theme', next?'dark':'light');}catch(e){}; setDark(next); };
  return <button onClick={toggle} className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-white transition-colors" aria-label="Toggle theme">{dark? <Sun className="h-5 w-5"/>:<Moon className="h-5 w-5"/>}</button>;
}