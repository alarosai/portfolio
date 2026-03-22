import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout.'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

import TransitionEffect from '@/components/TransitionEffect'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8 // Wait for page transition to reveal
    }
  }
}

const TESTIMONIALS = [
  {
    quote: "Alberto is a rare find: a product leader who combines deep technical understanding with sharp business acumen.",
    name: "Vidhi Sharma",
    role: "President, Simon Product Management Club"
  },
  {
    quote: "He transformed our messy data into a clear roadmap that actually drove revenue.",
    name: "Michael Chang",
    role: "CTO, StartupX"
  },
  {
    quote: "One of the few PMs who can talk code with engineers and strategy with executives.",
    name: "Elena Rodriguez",
    role: "Director of Product, FinServe"
  }
]

const TRANSFORMATION_PILLARS = [
  {
    title: "Product Strategy",
    desc: "Defining north-star metrics, shaping the roadmap, and aligning cross-functional teams around outcomes that matter.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  },
  {
    title: "Market Insight & Customer Discovery",
    desc: "Uncovering unmet needs through user research, competitive analysis, and continuous discovery to validate every bet.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    )
  },
  {
    title: "Data & Analytics Leadership",
    desc: "Building measurement frameworks, running experiments, and translating complex data into clear, actionable insights.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
        <path d="M3 20h18" />
      </svg>
    )
  },
  {
    title: "Growth & Commercial Strategy",
    desc: "Driving sustainable revenue through pricing models, go-to-market plans, and data-informed growth loops.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  }
]

const PROJECTS = [
  {
    id: 0,
    title: "Peru Festivities Explorer",
    tagline: "Interactive Map • Web App",
    desc: "An interactive, beautifully designed map-based web application to discover the cultural celebrations of Peru.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    gradient: "from-brand-primary-dark to-brand-neutral-900",
    textAccent: "text-brand-primary",
    image: "/images/projects/peru-festivities.png"
  },
  {
    id: 1,
    title: "Quantum Dynamics",
    tagline: "Real-time Analytics • Cloud Infra",
    desc: "Architecting a real-time data processing engine that reduced latency by 40% for high-frequency trading. Built with robust fault tolerance and sub-millisecond precision.",
    tags: ["React", "AWS Kinesis", "Python"],
    // Visual theme for hero image background
    gradient: "from-brand-secondary-dark to-brand-neutral-900",
    textAccent: "text-brand-secondary"
  },
  {
    id: 2,
    title: "Nexus Platform",
    tagline: "API Integration • Scalability",
    desc: "Designing a unified API gateway that streamlined integration for 50+ enterprise partners, boosting ecosystem growth by 200%.",
    tags: ["Node.js", "GraphQL", "PostgreSQL"],
    gradient: "from-brand-success to-brand-neutral-900",
    textAccent: "text-brand-success"
  },
]

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Head>
        <title>Alberto La Rosa</title>
        <meta name="description" content="From Data Insights to Product Impact. Building products that people trust." />
      </Head>
      <TransitionEffect />
      <main className="w-full min-h-screen bg-brand-neutral-50 text-brand-neutral-900 selection:bg-brand-primary-light selection:text-white">
        <Layout className="!p-0">

          {/* 1. HERO SECTION */}
          <section className="relative w-full min-h-screen px-8 py-24 md:py-12 lg:px-12 flex flex-col items-center justify-center text-center bg-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/landing-image.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-white/80" />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="relative z-10 max-w-4xl mx-auto"
            >


              <motion.h1 variants={fadeInUp} className="text-7xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-brand-neutral-900 leading-[1.1]">
                Alberto La Rosa <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                  Product Manager
                </span>
              </motion.h1>



            </motion.div>

            {/* Scroll Down Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-32 z-10"
            >
              <div
                onClick={() => {
                  const element = document.getElementById('problem-agitate')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="flex flex-col items-center justify-center text-brand-neutral-900 hover:text-brand-primary transition-colors duration-300 cursor-pointer"
                role="button"
                aria-label="Scroll down"
              >
                <span className="text-sm font-medium tracking-widest uppercase mb-2">Scroll</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>


          </section>

          {/* 2. PROBLEM-AGITATE SECTION */}
          <section id="problem-agitate" className="w-full px-6 py-24 bg-brand-neutral-50">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT COLUMN: Content */}
                <div className="flex flex-col gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-neutral-900">
                      Great AI products don&apos;t start with models. They start with unmet needs.
                    </h2>

                    <p className="text-lg text-brand-neutral-600 mb-6">
                      We&apos;ve all seen it: roadmaps built on gut feelings, features shipped without metrics, and engineering burning out on &quot;urgent&quot; pivots.
                    </p>
                    <p className="text-lg text-brand-neutral-600 font-medium">
                      Customers wrote the roadmap. Someone just needs to read it.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 rounded-2xl shadow-xl border border-brand-neutral-100"
                  >
                    <h3 className="text-xl font-bold mb-4 text-brand-primary-dark">How I Work</h3>
                    <p className="text-brand-neutral-600 mb-6">
                      By combining technical feasibility with a product-led growth mindset, I ensure every feature delivers measurable value and aligns with the business strategy.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Customer pain obsession",
                        "Deep technical literacy",
                        "Data backed decisions",
                        "Rapid AI prototyping"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-brand-neutral-700">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center text-sm">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* RIGHT COLUMN: Profile Image */}
                <div className="relative min-h-[500px] h-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/profile-blue.png"
                    alt="Alberto La Rosa"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>
            </div>
          </section>

          {/* 4. FEATURED PROJECTS SHOWCASE (INTERACTIVE LIST) */}
          <section id="work" className="w-full px-6 py-24 bg-brand-neutral-900 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
                <p className="text-lg text-brand-neutral-400 max-w-2xl mx-auto">
                  A selection of work demonstrating technical depth and product strategy.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-12 items-center">

                {/* LEFT: HERO IMAGE DISPLAY */}
                <div className="w-full order-2 lg:order-none h-[600px] lg:h-[800px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-brand-neutral-800">
                  <AnimatePresence mode="wait">
                    {PROJECTS[activeProject].image ? (
                      <motion.div
                        key={activeProject + "-img"}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={PROJECTS[activeProject].image}
                          alt={PROJECTS[activeProject].title}
                          fill
                          className="object-cover object-left-top"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key={activeProject}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`absolute inset-0 bg-gradient-to-br ${PROJECTS[activeProject].gradient}`}
                      />
                    )}
                  </AnimatePresence>

                  {/* Content Overlay on Image (Optional, for extra context) */}
                  <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none">
                    <motion.div
                      key={activeProject + "-text"}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-4xl font-bold mb-2">{PROJECTS[activeProject].title}</h3>
                      <p className="text-xl text-white/80">{PROJECTS[activeProject].tagline}</p>
                    </motion.div>
                  </div>
                </div>

                {/* RIGHT: INTERACTIVE LIST */}
                <div className="w-full order-1 lg:order-none flex flex-col justify-center h-full">
                  {PROJECTS.map((project, index) => (
                    <div
                      key={project.id}
                      onMouseEnter={() => setActiveProject(index)}
                      className={`group relative p-3 rounded-2xl cursor-pointer transition-all duration-300 border mb-3
                                ${activeProject === index
                          ? "bg-white border-white scale-105 shadow-xl z-10"
                          : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10"
                        }
                            `}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className={`text-2xl font-bold transition-colors duration-300
                                    ${activeProject === index ? "text-brand-neutral-900" : "text-brand-neutral-300 group-hover:text-white"}
                                `}>
                          {project.title}
                        </h3>
                        {/* Status Dot */}
                        <div className={`w-3 h-3 rounded-full transition-all duration-300
                                    ${activeProject === index ? "bg-brand-primary scale-125" : "bg-brand-neutral-700 group-hover:bg-brand-neutral-500"}
                                `} />
                      </div>

                      <p className={`text-sm tracking-widest uppercase font-bold mb-4 transition-colors duration-300
                                ${activeProject === index ? project.textAccent : "text-brand-neutral-500"}
                            `}>
                        {project.tagline}
                      </p>

                      <p className={`leading-relaxed transition-colors duration-300 line-clamp-2
                                ${activeProject === index ? "text-brand-neutral-600" : "text-brand-neutral-500 group-hover:text-brand-neutral-400"}
                            `}>
                        {project.desc}
                      </p>

                      {/* Tags visible only when active */}
                      <motion.div
                        initial={false}
                        animate={{ height: activeProject === index ? "auto" : 0, opacity: activeProject === index ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-brand-neutral-100 text-brand-neutral-600 text-xs font-bold">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ))}

                  <div className="mt-8 pl-4">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-brand-neutral-400 font-semibold hover:text-white transition-colors group">
                      View All Projects
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </section>
          {/* 4. SOCIAL PROOF */}
          <section className="w-full px-6 py-24 bg-brand-neutral-50 text-brand-neutral-900">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-8">Testimonials</p>
              <div className="relative flex items-center justify-center max-w-4xl mx-auto">

                {/* Left Arrow */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 z-10 p-2 text-brand-neutral-400 hover:text-brand-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="overflow-hidden w-full px-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center text-center will-change-transform"
                    >
                      <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight min-h-[160px] flex items-center justify-center">
                        &quot;{TESTIMONIALS[currentTestimonial].quote}&quot;
                      </h2>

                      <div className="text-center">
                        <div className="font-bold text-xl">{TESTIMONIALS[currentTestimonial].name}</div>
                        <div className="text-brand-neutral-500 text-sm">{TESTIMONIALS[currentTestimonial].role}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 z-10 p-2 text-brand-neutral-400 hover:text-brand-primary transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

              </div>
            </div>
            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative z-10 mt-20 w-full overflow-hidden"
            >
              <p className="text-sm font-medium text-brand-neutral-400 mb-8 uppercase tracking-widest text-center">
                Trusted Experience
              </p>

              <div className="flex w-full">
                <motion.div
                  className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {/* First set of logos */}
                  {[
                    { src: "/images/trusted/auna.png", alt: "Auna" },
                    { src: "/images/trusted/cemex.png", alt: "CEMEX" },
                    { src: "/images/trusted/epiroc.png", alt: "Epiroc" },
                    { src: "/images/trusted/interseguro.png", alt: "Interseguro" },
                    { src: "/images/trusted/thehomedepot.png", alt: "The Home Depot" },
                    { src: "/images/trusted/tottus.png", alt: "Tottus" },
                    { src: "/images/trusted/auna.png", alt: "Auna" },
                    { src: "/images/trusted/cemex.png", alt: "CEMEX" },
                    { src: "/images/trusted/epiroc.png", alt: "Epiroc" },
                    { src: "/images/trusted/interseguro.png", alt: "Interseguro" },
                    { src: "/images/trusted/thehomedepot.png", alt: "The Home Depot" },
                    { src: "/images/trusted/tottus.png", alt: "Tottus" },
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className={`relative shrink-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer flex-shrink-0
                        ${logo.alt === "CEMEX" ? "w-52 h-20 md:w-64 md:h-28" : "w-40 h-16 md:w-48 md:h-20"}`}
                    >
                      <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* 5. TRANSFORMATION (THE PROCESS) */}
          <section className="relative w-full px-6 py-24 bg-brand-neutral-900 text-white overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Strategic Transformation</h2>
                <p className="text-lg text-brand-neutral-400 max-w-2xl mx-auto">
                  Driving sustainable growth through four interconnected pillars of expertise.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-6 lg:gap-8">
                {TRANSFORMATION_PILLARS.map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-brand-primary/50 hover:shadow-2xl hover:shadow-brand-primary/20"
                  >
                    {/* Hover Glow Background - Reveal on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                    <div className="relative z-10 flex flex-col items-start h-full">
                      <motion.div
                        className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-brand-primary group-hover:-translate-y-2 transition-transform duration-300"
                        whileHover={{ scale: 1.1 }} // Subtle icon pop
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {pillar.icon}
                        </motion.div>
                      </motion.div>

                      <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-neutral-200">
                          {pillar.title}
                        </h3>
                        <p className="text-brand-neutral-400 leading-relaxed group-hover:text-brand-neutral-300 transition-colors">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. SECONDARY CTA */}
          <section id="contact" className="w-full px-6 py-24 bg-white border-t border-brand-neutral-200">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl text-brand-neutral-900 mb-6 font-bold">
                Let&apos;s chat!
              </h2>
              <p className="text-brand-neutral-900 mb-10">
                Fill out the form below or <a href="https://www.linkedin.com/in/alarosai/" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-brand-primary transition-colors">connect with me!</a>
              </p>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-brand-success/10 text-brand-success px-8 py-4 rounded-xl border border-brand-success/20 font-bold"
                >
                  Thanks! I&apos;ll be in touch shortly.
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-6">
                  <div>
                    <p className="block text-brand-neutral-900 mb-2">Name</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label className="block text-sm text-brand-neutral-600 mb-1">First Name <span className="text-brand-neutral-400">(required)</span></label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-none border border-brand-neutral-300 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary bg-brand-neutral-50/50"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm text-brand-neutral-600 mb-1">Last Name <span className="text-brand-neutral-400">(required)</span></label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-none border border-brand-neutral-300 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary bg-brand-neutral-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-neutral-900 mb-1">Email <span className="text-brand-neutral-400">(required)</span></label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-none border border-brand-neutral-300 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary bg-brand-neutral-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-brand-neutral-900 mb-1">Message <span className="text-brand-neutral-400">(required)</span></label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-none border border-brand-neutral-300 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary bg-brand-neutral-50/50 resize-y"
                    ></textarea>
                  </div>

                  <div className="mt-2">
                    <button
                      type="submit"
                      className="px-10 py-3 bg-black text-white hover:bg-neutral-800 transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>



        </Layout >
      </main >
    </>
  )
}

