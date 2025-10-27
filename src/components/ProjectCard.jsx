import React from 'react'; import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'; import { Button } from './ui/button'; import { ExternalLink } from 'lucide-react';
export function ProjectCard({ title, description, bullets, ctaLabel, ctaHref, external, icon }){
  return (<motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
    <Card className="h-full shadow-card"><CardHeader><CardTitle className="flex items-center gap-2">{icon}{title}</CardTitle></CardHeader>
    <CardContent><p className="text-black/60 dark:text-white/80 text-sm">{description}</p>
      <ul className="mt-4 grid gap-2 text-sm">{bullets.map((b,i)=>(<li key={i} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-black/70 dark:bg-white/70"/> {b}</li>))}</ul>
      <div className="mt-5"><a href={ctaHref} target={external? "_blank": undefined} rel={external? "noreferrer": undefined}><Button className="rounded-xl">{ctaLabel} {external && <ExternalLink className="ml-1 h-4 w-4"/>}</Button></a></div>
    </CardContent></Card>
  </motion.div>);
}
