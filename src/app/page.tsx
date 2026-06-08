"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { ArrowDown, MusicNotes, PlayCircle, SpeakerHigh } from "@phosphor-icons/react";

const Reveal = ({ children, delay = 0, className = "", y = 24 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a "fluid" feel
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function CaseStudyPage() {
  const { scrollYProgress } = useScroll();
  const arrowY = useTransform(scrollYProgress, [0, 0.1], [0, 20]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <main className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end pt-24 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden">
        <div className="z-10 max-w-4xl">
          <Reveal y={40}>
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-medium tracking-tighter leading-[0.85] mb-10">
              Empowering Artists Through <br className="hidden md:block" />
              Centralized Audio Discovery
            </h1>
          </Reveal>
          <Reveal delay={0.1} y={20}>
            <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-[45ch] mb-20">
              A seamless ecosystem transforming passive listening into active creator engagement on a global platform.
            </p>
          </Reveal>
          
          <Reveal delay={0.2} y={10}>
            <motion.div 
              style={{ y: arrowY, opacity: arrowOpacity }}
              className="flex flex-col items-start gap-4 group cursor-default"
            >
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 group-hover:text-foreground transition-colors duration-500">
                Explore Case Study
              </span>
              <div className="relative w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-foreground">
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown size={18} />
                </motion.div>
                <div className="absolute inset-0 bg-foreground scale-0 group-hover:scale-100 transition-transform duration-500 origin-center -z-10" />
                <ArrowDown size={18} className="absolute text-background scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
            </motion.div>
          </Reveal>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.05, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-full md:w-[65%] h-[50vh] md:h-[85vh] -z-0 opacity-20 md:opacity-100 pointer-events-none"
        >
          <div className="relative w-full h-full">
            <Image
              src="/casestudy1.png"
              alt="Instagram Music Redesign Preview"
              fill
              sizes="(max-width: 768px) 100vw, 65vw"
              className="object-contain object-right"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-32 md:py-56 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-10 lg:col-span-8">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-12">
                Overview
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl md:text-3xl text-foreground font-medium leading-tight mb-8">
                For independent artists, the digital stage has become a place where they can make and share the music they love.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-[65ch]">
                With Instagram, the necessity for “content creation” forces musicians to trade their professional growth in exchange for fan engagement. Without professional resources, the obligation to produce endless short-form content burden artists, putting the music itself. This design transforms this fragmented experience into a sustainable music ecosystem. By centralizing discovery through a dedicated Music Tab and bridging the gap between Reels and creator profiles, we allow the music aspects to be integrated into the Instagram experience.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* User Research Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-zinc-50/50 dark:bg-zinc-900/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <Reveal>
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-8">
                  Phase 01
                </div>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8">
                  User Research
                </h2>
                <p className="text-zinc-500 leading-relaxed">
                  To understand the music ecosystem on Instagram, interviews were conducted with 2 independent artists.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  name: "The PhD Artist",
                  insight: "Instagram acts as a quick showcase for vibe and credibility, but its layout is severely limited as a portfolio. I am dedicated to making music, not to social media creation.",
                  focus: "Portfolio vs. Platform",
                  context: "UC San Diego"
                },
                {
                  name: "The Engineer Musician",
                  insight: "There is a social pressure that comes with Instagram. I prefer platforms with music-friendly features that act as a library where others can easily engage with my songs.",
                  focus: "Pressure vs. Discovery",
                  context: "Aerospace Engineer"
                }
              ].map((user, i) => (
                <Reveal key={i} delay={0.1 * i} y={20}>
                  <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-500 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{user.focus}</div>
                      <div className="text-[9px] font-mono uppercase text-zinc-300 dark:text-zinc-600 tracking-tighter">{user.context}</div>
                    </div>
                    <h3 className="text-xl font-medium mb-4">{user.name}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed italic mt-auto">
                      &quot;{user.insight}&quot;
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Feedback Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-8">
                Validation
              </div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8">
                User Feedback
              </h2>
              <p className="text-lg text-zinc-500 leading-relaxed mb-12">
                After seeing the prototype design, users highlighted how the centralized music hub directly addressed their primary pain points.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {[
                {
                  title: "Meaningful Personalization",
                  text: "The engineer musician highlighted that for emerging artists, direct links to portfolio pages and music galleries are vital for building a legitimate presence and directing user engagement.",
                  tag: "Discovery"
                },
                {
                  title: "Intentionality vs. Consumption",
                  text: "PhD musician noted that features like the 'See more Reels' button shift intent from genuine discovery to mindless consumption, suggesting a need for more artist-focused recommendations.",
                  tag: "Friction"
                },
                {
                  title: "Algorithmic Independence",
                  text: "Users appreciated having a permanent repository for their work that didn't disappear once a Reel's viral cycle ended, allowing their music to be sustained over time.",
                  tag: "Sustainability"
                }
              ].map((feedback, i) => (
                <Reveal key={i} delay={0.2 + (i * 0.1)} y={10}>
                  <div className="group flex flex-col sm:flex-row gap-6 p-8 rounded-3xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-500 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-mono text-xs text-zinc-400 group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                        0{i + 1}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-lg">{feedback.title}</h4>
                        <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono uppercase text-zinc-500">{feedback.tag}</span>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed max-w-[55ch]">
                        {feedback.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Profile Music Tab */}
      <section className="py-32 md:py-64 px-6 md:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-8">
                Feature 01
              </div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-10">
                The Dedicated Music Tab
              </h2>
              <p className="text-lg text-zinc-500 leading-relaxed mb-16 max-w-[50ch]">
                A new home for audio creators. The Music Tab consolidates all original audio, licensed tracks, and saved sounds into a single, intuitive interface directly on the profile page.
              </p>
              <div className="space-y-8">
                {[
                  { icon: MusicNotes, text: "Centralized Audio" },
                  { icon: PlayCircle, text: "Instant Previewing" },
                  { icon: SpeakerHigh, text: "Creator Attribution" }
                ].map((item, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.1} y={10}>
                    <div className="flex items-center gap-6 group cursor-default">
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm border border-zinc-100 dark:border-zinc-700 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:border-zinc-200">
                        <item.icon size={22} weight="duotone" className="text-foreground" />
                      </div>
                      <span className="text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-300 transition-colors group-hover:text-foreground">
                        {item.text}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <Reveal delay={0.3} y={40} className="w-full max-w-[420px]">
              <div className="relative aspect-[9/19.5] rounded-[3.5rem] overflow-hidden bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-zinc-900 dark:border-zinc-800 p-2">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src="/casestudy3.jpg"
                    alt="Profile Music Tab Redesign"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Feature 2: Reels Integration */}
      <section className="py-32 md:py-64 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="flex justify-center lg:justify-start w-full">
            <Reveal y={40} className="w-full max-w-[420px]">
              <div className="relative aspect-[9/19.5] rounded-[3.5rem] overflow-hidden bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-zinc-900 dark:border-zinc-800 p-2">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src="/casestudy2.png"
                    alt="Reels Audio Integration"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.2}>
              <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-8">
                Feature 02
              </div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-10">
                Seamless Reels Integration
              </h2>
              <p className="text-lg text-zinc-500 leading-relaxed max-w-[50ch]">
                Closing the loop between consumption and discovery. Reels now feature direct links that send users straight to the creator&apos;s music profile, maintaining user engagement and simplifying audio sourcing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}
