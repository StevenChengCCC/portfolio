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
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-black/[.03] text-foreground relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/15 via-sky-400/10 to-fuchsia-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-400/10 to-cyan-400/10 blur-3xl" />
      </div>

      <Navbar />

      <Section id="home">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-black/60 mb-4">
              <Sparkles className="h-3.5 w-3.5" /> Autism x Social Media · Safe Board
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Interfaces that feel <span className="bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">calm</span>,<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-fuchsia-500 to-sky-500 bg-clip-text text-transparent">safe</span>, and joyful.
            </h1>
            <p className="mt-4 text-lg text-black/70">
              I research <span className="font-medium text-foreground">autism & social media</span> and design sensory-aware interfaces (the <span className="font-medium">Safe Board</span> project) to reduce overload and anxiety. I also build friendly tools like the
              <a className="inline-flex items-center gap-1 ml-1 underline" href="https://socialmediaacademy.click/" target="_blank" rel="noreferrer">Social Media Academy <ExternalLink className="h-4 w-4" /></a>
              and a playful <a className="inline-flex items-center gap-1 underline" href="https://socialmediaacademy.click/play" target="_blank" rel="noreferrer">Rock-Paper-Scissors simulation <Gamepad2 className="h-4 w-4" /></a>.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-black/60"><GraduationCap className="h-4 w-4 mr-1" />BYU CS</span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-black/60">GPA 3.54</span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-black/60"><Cpu className="h-4 w-4 mr-1" />Full-stack / HCI</span>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-black/60"><Sparkles className="h-4 w-4 mr-1" />Research + Build</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#previews"><Button size="lg" className="rounded-2xl"><Gamepad2 className="mr-2 h-5 w-5" /> See Live Previews</Button></a>
              <a href="#research"><Button variant="outline" size="lg" className="rounded-2xl"><BookOpenText className="mr-2 h-5 w-5" /> Read Research</Button></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-2xl shadow-card overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShieldHalf className="h-5 w-5" /> Safe Board - Sensory-aware Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl border p-3">
                    <div className="text-xs text-black/60 mb-1">Motion</div>
                    <div className="text-sm font-medium">0x · 0.5x · 1x</div>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="text-xs text-black/60 mb-1">Contrast</div>
                    <div className="text-sm font-medium">Gentle · High</div>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="text-xs text-black/60 mb-1">Density</div>
                    <div className="text-sm font-medium">Compact · Cozy</div>
                  </div>
                </div>
                <p className="text-black/70 text-sm">
                  Predictable layouts and adjustable stimuli measurably reduce anxiety and improve task performance for sensitive users.
                </p>
                <div className="flex gap-3 pt-1">
                  <a href="#research"><Button className="rounded-xl">Design Notes</Button></a>
                  <a href="#previews"><Button variant="outline" className="rounded-xl">Live Preview</Button></a>
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
              <CardContent className="space-y-3 text-sm text-black/70">
                <p>• Sudden motion, autoplay, and flashing elements increase anxiety and reduce comprehension.</p>
                <p>• Predictable layouts and adjustable density improve task performance and perceived control.</p>
                <p>• Plain-language labels and examples improve understanding of features and slang.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="h-full rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Safe Board Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-black/70">
                <p>• Motion Scale: 0x / 0.5x / 1x with system <code>prefers-reduced-motion</code>.</p>
                <p>• Contrast Presets: Gentle / Balanced / High.</p>
                <p>• Content Modes: Compact / Comfortable / Spacious.</p>
                <p>• Feedback Controls: Haptics, audio, vibration on/off.</p>
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
                <p className="text-black/70">Guides for safer, kinder social media; plain-language explanations of features & internet slang.</p>
                <a className="group inline-flex items-center gap-2 text-foreground underline" href="https://socialmediaacademy.click/play" target="_blank" rel="noreferrer">
                  <Gamepad2 className="h-4 w-4" /> RPS Particle Simulation
                </a>
                <p className="text-black/70">A tiny physics-style canvas toy to decompress—watch emojis collide and evolve.</p>
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
                <div className="relative aspect-[16/10] border-t bg-black/5">
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
            title="JWT Pizza (Course Project)"
            description="Full-stack app with JWT auth, React/TypeScript frontend, and CI/CD to AWS."
            bullets={["Playwright + Jest tests", "GitHub Actions OIDC -> S3/CloudFront", "Admin dashboards & coverage 80%+"]}
            ctaLabel="View docs"
            ctaHref="#about"
            icon={<Braces className="h-5 w-5" />}
          />
        </div>
      </Section>

      <Section id="about" title="About" subtitle="BYU Computer Science (GPA 3.54). I like building research-backed interfaces that feel calm and kind.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><GraduationCapIcon className="h-5 w-5" /> Highlights</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-black/70 space-y-2">
              <p>• BYU Computer Science — GPA 3.54</p>
              <p>• Research Assistant — autism & social media (sensory-aware design)</p>
              <p>• Full-stack: TypeScript/React, Node/Express, SQL; testing with Playwright/Jest</p>
              <p>• DevOps: GitHub Actions, AWS S3 + CloudFront, OIDC roles</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5" /> Content Spotlight</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-black/70 space-y-2">
              <p>From <span className="text-foreground font-medium">Social Media Academy</span>:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Plain-language explainers for internet slang (e.g., DM, ratio, POV, FR).</li>
                <li>Safety settings walkthroughs (privacy, two-factor auth, comment filters).</li>
                <li>Emotion-friendly usage tips: schedule breaks, hide like counts, curate follows.</li>
              </ul>
              <p className="mt-2">Explore more in the preview above, or visit the full site.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let's build helpful, human-centered tools together.">
        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:steven.chengvaie@gmail.com"><Button size="lg" className="rounded-2xl"><Mail className="mr-2 h-5 w-5" /> Email me</Button></a>
          <a href="https://github.com/StevenChengCCC/" target="_blank" rel="noreferrer"><Button size="lg" variant="outline" className="rounded-2xl"><Github className="mr-2 h-5 w-5" /> GitHub</Button></a>
          <a href="#home"><Button size="lg" variant="ghost" className="rounded-2xl"><LinkIcon className="mr-2 h-5 w-5" /> Back to top</Button></a>
        </div>
      </Section>

      <footer className="border-t py-10 text-center text-sm text-black/60">
        <p>© {new Date().getFullYear()} Steven Cheng · Built with React, Tailwind.</p>
      </footer>
    </main>
  )
}
