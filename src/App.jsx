import React from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, GraduationCap, Gamepad2, BookOpenText, ShieldHalf, Sparkles, ExternalLink, Link as LinkIcon, Cpu, Braces, GraduationCapIcon } from 'lucide-react'
import { Section } from './components/Section'
import { Navbar } from './components/Navbar'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { ProjectCard } from './components/ProjectCard'

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-black/[.03] dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 text-foreground relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/15 via-sky-400/10 to-fuchsia-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-400/10 to-cyan-400/10 blur-3xl" />
      </div>

      <Navbar />

      <Section id="home">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-black/60 dark:text-white/70 mb-4">
              <Sparkles className="h-3.5 w-3.5" /> Autism x Social Media · Safe Board
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Interfaces that feel <span className="bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">calm</span>,<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text text-transparent">safe</span>, and joyful.
            </h1>
            <p className="mt-4 text-lg text-black/70 dark:text-white/80">
              I research <span className="font-medium text-foreground">autism & social media</span> and design sensory-aware interfaces (the <span className="font-medium">Safe Board</span> project) to reduce overload and anxiety. I also build friendly tools like the
              <a className="inline-flex items-center gap-1 ml-1 underline" href="https://socialmediaacademy.click/" target="_blank" rel="noreferrer">Social Media Academy <ExternalLink className="h-4 w-4" /></a>
              and a playful <a className="inline-flex items-center gap-1 underline" href="https://socialmediaacademy.click/play" target="_blank" rel="noreferrer">Rock-Paper-Scissors simulation <Gamepad2 className="h-4 w-4" /></a>.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-black/60 dark:text-white/70"><GraduationCap className="h-4 w-4 mr-1" />BYU CS</span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-black/60 dark:text-white/70">GPA 3.54</span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-black/60 dark:text-white/70"><Cpu className="h-4 w-4 mr-1" />Full-stack / HCI</span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-black/60 dark:text-white/70"><Sparkles className="h-4 w-4 mr-1" />Research + Build</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#previews"><Button size="lg" className="rounded-2xl"><Gamepad2 className="mr-2 h-5 w-5" /> See Live Previews</Button></a>
              <a href="#research"><Button variant="outline" size="lg" className="rounded-2xl"><BookOpenText className="mr-2 h-5 w-5" /> Read Research</Button></a>
            </div>
          </motion.div>

          
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-2xl shadow-card overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-black/70 dark:text-white/80">
                <p>• BYU — B.S. Computer Science (May 2026), GPA 3.54</p>
                <p>• Research Assistant @ STaPL Lab (Autism × Social Media)</p>
                <p>• Projects: Social Media Academy · RPS Simulation · CS240 Chess · CS260 Anti‑Scam</p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href="/resume.pdf" download><Button className="rounded-xl">Download Resume</Button></a>
                  <a href="mailto:steven.chengvaie@gmail.com"><Button variant="outline" className="rounded-xl">Email</Button></a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section id="research" title="Research: Autism x Social Media" subtitle="Insights from experiments, prototypes, and literature on reducing sensory and social stressors online.">
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="h-full rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Key Findings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-black/70 dark:text-white/80">
                <p>• Sudden motion, autoplay, and flashing elements increase anxiety and reduce comprehension.</p>
                <p>• Predictable layouts and adjustable density improve task performance and perceived control.</p>
                <p>• Plain-language labels and examples improve understanding of features and slang.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="h-full rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">为什么我做 Social Media Academy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-black/70 dark:text-white/80">
                <p>
                  我制作 Social Media Academy 的初衷是：很多自闭症群体并不会“正确”地使用社交媒体，
                  容易因为界面复杂、信息过载、术语门槛而产生焦虑与误解。后来我意识到，不只是他们，
                  还有很多人同样需要帮助——来自不同文化背景的朋友、涉及孩子上网的家长、年龄稍大的
                  青中年，以及并不是很会使用社交媒体的年轻人。
                </p>
                <p>
                  我希望通过简单、清晰、易懂的内容，帮助大家理解社交媒体，学会更安全、更健康地使用：
                  从基础功能与设置，到常见网络俚语的解释，再到隐私与情绪管理的小技巧。这个网站不是
                  一次性教程，而是一套可以反复查阅的“友好指南”。
                </p>
</CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="h-full rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Public Resources</CardTitle>
                <a href="https://socialmediaacademy.click/" target="_blank" rel="noreferrer"><Button variant="outline" size="sm" className="rounded-xl">Open <ExternalLink className="ml-1 h-4 w-4" /></Button></a>
              </CardHeader>
            <CardContent className="space-y-3 text-sm">
                <a className="group inline-flex items-center gap-2 text-foreground underline" href="https://socialmediaacademy.click/" target="_blank" rel="noreferrer">
                  <BookOpenText className="h-4 w-4" /> Social Media Academy
                </a>
                <p className="text-black/70 dark:text-white/80">Guides for safer, kinder social media; plain-language explanations of features & internet slang.</p>
                <a className="group inline-flex items-center gap-2 text-foreground underline" href="https://socialmediaacademy.click/play" target="_blank" rel="noreferrer">
                  <Gamepad2 className="h-4 w-4" /> RPS Particle Simulation
                </a>
                <p className="text-black/70 dark:text-white/80">A tiny physics-style canvas toy to decompress—watch emojis collide and evolve.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section id="previews" title="Live Previews" subtitle="Interactive previews of your sites. If the site disallows embedding, use the Open button.">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="rounded-2xl overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2"><BookOpenText className="h-5 w-5" /> Social Media Academy</CardTitle>
                <a href="https://socialmediaacademy.click/" target="_blank" rel="noreferrer"><Button variant="outline" size="sm" className="rounded-xl">Open <ExternalLink className="ml-1 h-4 w-4" /></Button></a>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] border-t">
                  <iframe title="Social Media Academy" src="https://socialmediaacademy.click/" className="absolute inset-0 h-full w-full" loading="lazy" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="rounded-2xl overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2"><Gamepad2 className="h-5 w-5" /> RPS Particle Simulation</CardTitle>
                <a href="https://socialmediaacademy.click/play" target="_blank" rel="noreferrer"><Button variant="outline" size="sm" className="rounded-xl">Open <ExternalLink className="ml-1 h-4 w-4" /></Button></a>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] border-t bg-black/5 dark:bg-white/10">
                  <iframe title="RPS Simulation" src="https://socialmediaacademy.click/play" className="absolute inset-0 h-full w-full" loading="lazy" sandbox="allow-same-origin allow-scripts allow-forms allow-pointer-lock" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Selected builds that combine HCI research with full-stack engineering.">
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Safe Board - Sensory-aware Social UI"
            description="A design system to reduce cognitive load using motion scaling, contrast presets, and density controls."
            bullets={["Motion/contrast/density toggles", "Predictable navigation & content grouping", "Plain-language labels and examples"]}
            ctaLabel="Read notes"
            ctaHref="#research"
            icon={<ShieldHalf className="h-5 w-5" />}
          />
          <ProjectCard
            title="Social Media Academy"
            description="Public website that teaches healthy social-media use and explains internet slang in simple language."
            bullets={["Step-by-step guides", "Plain-language glossary", "Accessibility-first content"]}
            ctaLabel="Visit site"
            ctaHref="https://socialmediaacademy.click/"
            external
            icon={<BookOpenText className="h-5 w-5" />}
          />
          <ProjectCard
            title="RPS Particle Simulation"
            description="A relaxing canvas toy: rock-paper-scissors emojis bounce and convert each other on collision."
            bullets={["Elastic collisions", "Grid hashing for performance", "Pause/reset/clear UI"]}
            ctaLabel="Play"
            ctaHref="https://socialmediaacademy.click/play"
            external
            icon={<Gamepad2 className="h-5 w-5" />}
          />
          <ProjectCard
            title="CS240 - Chess Game"
            description="A browser-based chess game: legal move validation, turn logic, check/checkmate detection, and clean UI."
            bullets={["Board state & move generator","Check / checkmate / stalemate detection","Undo/redo and quick restart"]}
            ctaLabel="View notes"
            ctaHref="#about"
            icon={<Braces className="h-5 w-5" />}
          />
          <ProjectCard
            title="CS260 - Anti-Scam Website (MVP)"
            description="An educational site to help users spot common online scams. It's a bit rough visually, but effective: checklists, examples, and quick 'is this legit?' helpers."
            bullets={["Red-flag heuristics check (links, domains, urgency)","Before-you-click checklist & examples","MVP design - prioritizes clarity over looks"]}
            ctaLabel="View notes"
            ctaHref="#about"
            icon={<ShieldHalf className="h-5 w-5" />}
          />
        </div>
      </Section>

      
      
      <Section id="about" title="About" subtitle="Brigham Young University · B.S. Computer Science (May 2026). I research autism × social media and build human‑centered interfaces.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">Education</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-black/70 dark:text-white/80 space-y-2">
              <p><strong>Brigham Young University</strong> — B.S. in Computer Science</p>
              <p>College of Physical & Mathematical Sciences · <strong>May 2026</strong></p>
              <p>GPA: <strong>3.54</strong></p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">Experience</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-black/70 dark:text-white/80 space-y-3">
              <div>
                <p className="font-medium">Research Assistant — STaPL Lab</p>
                <p>May 2025 – Present · Provo, UT</p>
                <ul className="list-disc ml-5">
                  <li>Analyzed data on social media use among individuals with autism.</li>
                  <li>Co‑built a testing simulator for data collection and experiments.</li>
                  <li>Practiced rigorous research methods and documentation.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">Skills</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-black/70 dark:text-white/80">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 list-disc ml-5">
                <li>Python</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>HTML/CSS</li>
                <li>JavaScript / React.js</li>
                <li>MySQL</li>
                <li>Flutter/Dart</li>
                <li>Git</li>
                <li>VBA</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>



      <Section id="contact" title="Contact" subtitle="Let's build helpful, human-centered tools together.">
        <div className="flex flex-wrap items-center gap-3">
          <a href="/resume.pdf" download><Button size="lg" className="rounded-2xl">Download Resume</Button></a>
          <a href="mailto:steven.chengvaie@gmail.com"><Button size="lg" className="rounded-2xl"><Mail className="mr-2 h-5 w-5" /> Email me</Button></a>
          <a href="https://github.com/StevenChengCCC/" target="_blank" rel="noreferrer"><Button size="lg" variant="outline" className="rounded-2xl"><Github className="mr-2 h-5 w-5" /> GitHub</Button></a>
          <a href="#home"><Button size="lg" variant="ghost" className="rounded-2xl"><LinkIcon className="mr-2 h-5 w-5" /> Back to top</Button></a>
        </div>
      </Section>

      <footer className="border-t py-10 text-center text-sm text-black/60 dark:text-white/60">
        <p>© {new Date().getFullYear()} Steven Cheng · Built with React, Tailwind.</p>
      </footer>
    </main>
  )
}
