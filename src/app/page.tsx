'use client'

import { motion } from 'framer-motion'
import { SITE_CONFIG, NAV_LINKS, STATS } from '@/lib/constants'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-xl">
        <nav className="container-custom flex h-16 items-center justify-between">
          <a href="/" className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="gradient-text">GCL</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[var(--color-highlight)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-highlight-hover)] hover:shadow-lg"
          >
            Start a Conversation
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--color-accent-primary)] opacity-10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[var(--color-accent-tertiary)] opacity-10 blur-[100px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p
              className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--color-accent-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Technology Implementation Studio
            </p>

            <h1 className="text-display mb-6">
              <span className="gradient-text">{SITE_CONFIG.tagline}</span>
            </h1>

            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-[var(--color-text-secondary)]">
              {SITE_CONFIG.description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-highlight)] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[var(--color-highlight-hover)] hover:shadow-[var(--shadow-glow)]"
              >
                Start a Conversation
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-8 py-4 text-lg font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-secondary)]"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p
                  className="mb-2 text-4xl font-bold text-[var(--color-highlight)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </p>
                <p className="mb-1 text-[var(--color-text-secondary)]">{stat.label}</p>
                <p className="text-xs text-[var(--color-text-muted)]">Source: {stat.source}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="mb-6">Why do transformations fail?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: 'Wrong Problem', desc: 'Technology chosen before constraint understood' },
                { title: 'Wrong Approach', desc: 'AI treated as magic, not engineering' },
                { title: 'Wrong Scope', desc: 'Ambition without path to execution' },
                { title: 'Wrong Finish Line', desc: 'Pilots that never become products' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition-all hover:border-[var(--color-border-hover)]"
                >
                  <h4 className="mb-2 text-[var(--color-highlight)]">{item.title}</h4>
                  <p className="text-[var(--color-text-secondary)]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="mb-6">Our approach</h2>
            <p className="mb-8 text-lg text-[var(--color-text-secondary)]">
              We start with the problem, not the technology.
            </p>
            <div className="space-y-4">
              {[
                'Define the problem precisely',
                'Determine if technology solves it',
                'Build only what\'s needed',
                'Ship working products, not decks',
              ].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-primary)] text-lg font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {index + 1}
                  </span>
                  <p className="text-lg">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="border-t border-[var(--color-border)] py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p
              className="text-xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="gradient-text">GameChangers Labs</span>
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              &copy; {new Date().getFullYear()} GameChangers Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
