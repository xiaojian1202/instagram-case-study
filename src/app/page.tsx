"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { ArrowDown, MusicNotes, PlayCircle, SpeakerHigh } from "@phosphor-icons/react";

/**
 * Reveal Component
 * Elite Vanguard-tier entry animation with blur-interpolation and spring physics.
 */
const Reveal = ({ children, delay = 0, className = "", y = 40, blur = true }: { children: React.ReactNode; delay?: number; className?: string; y?: number; blur?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : "none" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{
      duration: 1.2,
      delay,
      ease: [0.32, 0.72, 0, 1],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * DoubleBezelMockup
 * Nested hardware architecture (Doppelrand) for premium device presentation.
 */
const DoubleBezelMockup = ({ src, alt, delay = 0 }: { src: string; alt: string; delay?: number }) => (
  <Reveal delay={delay} y={60} blur={false} className="w-full max-w-[440px]">
    <div className="relative p-2.5 rounded-[4rem] bg-zinc-100/50 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 shadow-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="relative aspect-[9/19.5] rounded-[3.25rem] bg-black shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] border-[10px] border-zinc-900 dark:border-zinc-800 p-1.5 overflow-hidden transition-transform duration-1000 group-hover:scale-[1.02]">
        <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-zinc-50 dark:bg-zinc-950">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-contain transition-transform duration-1000 group-hover:scale-105"
            unoptimized
          />
        </div>
      </div>
    </div>
  </Reveal>
);

export default function CaseStudyPage() {
  const { scrollYProgress } = useScroll();
  const arrowY = useTransform(scrollYProgress, [0, 0.1], [0, 20]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <main className="bg-background text-foreground font-sans selection:bg-foreground selection:text-background overflow-x-hidden">
      {/* Cinematic Mesh Background Overlay */}
      <div className="mesh-gradient">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mesh-orb w-[600px] h-[600px] top-[-20%] left-[-10%]" 
        />
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, 100, 0] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="mesh-orb w-[500px] h-[500px] bottom-[-10%] right-[-5%]" 
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end pt-24 pb-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="z-10 max-w-5xl">
          <Reveal y={80}>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-medium tracking-tighter leading-[0.85] mb-20">
              Empowering Artists Through <br className="hidden md:block" />
              Centralized Audio Discovery
            </h1>
          </Reveal>
          
          <Reveal delay={0.3} y={20}>
            <motion.div 
              style={{ y: arrowY, opacity: arrowOpacity }}
              className="flex flex-col items-start gap-5 group cursor-default"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-400 group-hover:text-foreground transition-all duration-700">
                Explore Case Study
              </span>
              <div className="relative w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:border-foreground group-hover:scale-110">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown size={20} className="group-hover:opacity-0 transition-opacity" />
                </motion.div>
                <div className="absolute inset-0 bg-foreground scale-0 group-hover:scale-100 transition-transform duration-700 origin-center -z-10" />
                <ArrowDown size={20} className="absolute text-background scale-0 group-hover:scale-100 transition-transform duration-700" />
              </div>
            </motion.div>
          </Reveal>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.1, x: 100, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
          transition={{ duration: 2.5, ease: [0.32, 0.72, 0, 1] }}
          className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-full md:w-[70%] h-[60vh] md:h-[90vh] -z-0 opacity-10 md:opacity-100 pointer-events-none"
        >
          <div className="relative w-full h-full">
            <Image
              src="/casestudy1.png"
              alt="Instagram Music Redesign Preview"
              fill
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-contain object-right"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-48 md:py-80 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-11 lg:col-span-9">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-12">
                Overview
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl md:text-3xl text-foreground font-medium leading-tight mb-8">
                For independent artists, the digital stage has become a treadmill of constant production.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-[65ch]">
                The relentless necessity for “content creation” forces musicians to trade their well-being for fleeting engagement. Without professional resources, the obligation to produce endless short-form content subjects artists to unwelcome mental health pressures, often burying the music itself under the weight of the hustle. My design transforms this fragmented experience into a sustainable music ecosystem. By centralizing discovery through a dedicated Music Tab and bridging the gap between Reels and creator profiles, we allow the music to take center stage—giving artists a permanent home for their sonic brand and a healthier path to professional growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* User Research Section */}
      <section className="py-48 md:py-80 px-6 md:px-12 lg:px-24 bg-zinc-50/50 dark:bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-32">
            <div className="md:col-span-4">
              <Reveal>
                <div className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-400 mb-8">
                  Phase 01
                </div>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-8">
                  User Research
                </h2>
                <p className="text-zinc-500 leading-relaxed">
                  To understand the music ecosystem on Instagram, interviews were conducted with two independent artists.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                {
                  name: "Myles — The PhD Artist",
                  insight: "Instagram acts as a quick showcase for vibe and credibility, but its layout is severely limited as a portfolio. I am dedicated to making music, not to social media creation.",
                  focus: "Portfolio vs. Platform",
                  context: "UC San Diego"
                },
                {
                  name: "Drew — The Engineer Musician",
                  insight: "There is a social pressure that comes with Instagram. I prefer platforms with music-friendly features that act as a library where others can easily engage with my songs.",
                  focus: "Pressure vs. Discovery",
                  context: "Aerospace Engineer"
                }
              ].map((user, i) => (
                <Reveal key={i} delay={0.15 * i} y={40}>
                  <div className="group relative p-10 rounded-[3rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                      <div className="px-3 py-1 rounded-full bg-zinc-50 dark:bg-zinc-800 text-[9px] font-mono uppercase tracking-widest text-zinc-400 border border-zinc-100 dark:border-zinc-700">{user.focus}</div>
                      <div className="text-[9px] font-mono uppercase text-zinc-300 dark:text-zinc-600 tracking-tighter">{user.context}</div>
                    </div>
                    <h3 className="text-2xl font-medium mb-6 group-hover:text-foreground transition-colors">{user.name}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed italic mt-auto border-l-2 border-zinc-100 dark:border-zinc-800 pl-8 group-hover:border-foreground transition-all duration-1000">
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
      <section className="py-48 md:py-80 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
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
            <div className="space-y-10">
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
                <Reveal key={i} delay={0.2 + (i * 0.15)} y={30}>
                  <div className="group flex flex-col sm:flex-row gap-10 p-12 rounded-[3rem] bg-zinc-50/50 dark:bg-white/[0.02] border border-zinc-100 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/[0.04] transition-all duration-700 ease-vanguard shadow-sm hover:shadow-xl">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center font-mono text-xs text-zinc-400 group-hover:bg-foreground group-hover:text-background transition-all duration-1000 ease-vanguard shadow-sm">
                        0{i + 1}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-6 mb-4">
                        <h4 className="font-medium text-xl tracking-tight">{feedback.title}</h4>
                        <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono uppercase text-zinc-500 tracking-widest">{feedback.tag}</span>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed max-w-[50ch]">
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
      <section className="py-48 md:py-80 px-6 md:px-12 lg:px-24 bg-zinc-50/50 dark:bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="text-[11px] font-mono uppercase tracking-[0.4em] text-zinc-400 mb-10">
                Feature 01
              </div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-12">
                The Dedicated Music Tab
              </h2>
              <p className="text-lg text-zinc-500 leading-relaxed mb-20 max-w-[45ch]">
                A new home for audio creators. The Music Tab consolidates all original audio, licensed tracks, and saved sounds into a single, intuitive interface directly on the profile page.
              </p>
              <div className="space-y-10">
                {[
                  { icon: MusicNotes, text: "Centralized Audio Repository" },
                  { icon: PlayCircle, text: "Instant Previewing" },
                  { icon: SpeakerHigh, text: "Direct Creator Attribution" }
                ].map((item, i) => (
                  <Reveal key={i} delay={0.25 + i * 0.15} y={20}>
                    <div className="flex items-center gap-10 group cursor-default">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm border border-zinc-100 dark:border-zinc-700 transition-all duration-700 ease-vanguard group-hover:scale-110 group-hover:bg-foreground group-hover:text-background group-hover:shadow-2xl">
                        <item.icon size={28} weight="duotone" />
                      </div>
                      <span className="text-xl font-medium text-zinc-500 transition-all duration-700 group-hover:text-foreground group-hover:translate-x-2">
                        {item.text}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <DoubleBezelMockup src="/casestudy3.jpg" alt="Profile Music Tab Redesign" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Feature 2: Reels Integration */}
      <section className="py-48 md:py-80 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="flex justify-center lg:justify-start">
            <DoubleBezelMockup src="/casestudy2.png" alt="Reels Audio Integration" />
          </div>
          <div>
            <Reveal delay={0.2}>
              <div className="text-[11px] font-mono uppercase tracking-[0.4em] text-zinc-400 mb-10">
                Feature 02
              </div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-12">
                Seamless Reels Integration
              </h2>
              <p className="text-lg text-zinc-500 leading-relaxed max-w-[45ch]">
                Closing the loop between consumption and discovery. Reels now feature direct links that transport users straight to the creator&apos;s music profile, fostering deeper connections and simplifying audio sourcing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
