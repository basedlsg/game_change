/**
 * GameChangers Labs - Constants
 */

export const SITE_CONFIG = {
  name: 'GameChangers Labs',
  tagline: 'See The Whole Board',
  description:
    'Technology implementation studio that turns research into shipped products across AI, spatial computing, neurotech, and product development.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://gamechangerslabs.com',
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Team', href: '#team' },
  { label: 'Process', href: '#process' },
] as const

export const LOCATIONS = [
  { city: 'Saudi Arabia', lead: 'Omar Isaac', role: 'CEO' },
  { city: 'Beijing', lead: 'Carlos', role: 'COO' },
  { city: 'Detroit', lead: 'Norvell', role: 'CTO' },
  { city: 'London', lead: 'Yixian', role: 'Design' },
] as const

export const SERVICES = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description:
      'RAG architectures, custom model fine-tuning, LLM integrations with business workflows. Systems that ship to production.',
    icon: 'brain',
  },
  {
    id: 'spatial',
    title: 'Spatial Computing',
    description:
      'VR experiences, AR applications, real-time 3D environments, Fortnite/UEFN builds, training simulations.',
    icon: 'cube',
  },
  {
    id: 'neurotech',
    title: 'Neurotech',
    description:
      'Software that makes hardware useful. Brain-computer interface integrations, data visualization, practitioner dashboards.',
    icon: 'zap',
  },
  {
    id: 'product',
    title: 'Product Development',
    description:
      'Market research and analysis, technical architecture, working prototypes, go-to-market frameworks.',
    icon: 'rocket',
  },
] as const

export const CASE_STUDIES = [
  {
    id: 'brainv',
    title: 'BrainV Technology',
    category: 'Neurotech',
    problem: 'EEG hardware generating unusable data for spa practitioners',
    solution: 'Software layer translating raw EEG to actionable wellness metrics',
    outcome: 'Platform operational in premium spas, international expansion underway',
  },
  {
    id: 'energy',
    title: 'Chinese Energy Company',
    category: 'Enterprise AI',
    problem: 'BD teams drowning in research across scattered documents',
    solution: 'RAG system with natural language queries, source attribution',
    outcome: '60% reduction in research-to-discovery time',
  },
  {
    id: 'beauty',
    title: 'Beauty Product Company',
    category: 'Product Development',
    problem: 'Physical product company exploring SAAS pivot',
    solution: 'Market analysis + working prototype (not wireframes)',
    outcome: 'Testing SAAS model with real customers, data-driven pivot decision',
  },
  {
    id: 'gaming',
    title: 'Grammy-Winning Artists',
    category: 'Gaming/Spatial',
    problem: 'Commoditized music releases, need differentiated fan experiences',
    solution: 'Custom Fortnite experiences built around artist identities',
    outcome: 'Multiple projects shipped, millions of players reached',
  },
] as const

export const TEAM = [
  {
    name: 'Omar Isaac',
    role: 'CEO',
    location: 'Saudi Arabia',
    bio: 'Former WPP, managed accounts exceeding $1B total value. Kellogg MBA.',
  },
  {
    name: 'Carlos',
    role: 'COO',
    location: 'Beijing',
    bio: 'Founded Sidekicks AI (raised $1M+, acquired). Former Cisco. Award-winning VR artist.',
  },
  {
    name: 'Norvell',
    role: 'CTO',
    location: 'Detroit',
    bio: 'Engineering at General Dynamics and Cisco. Defense-grade systems thinking.',
  },
  {
    name: 'Yixian',
    role: 'Head of Design',
    location: 'London',
    bio: 'University of the Arts London. Visual design, UX, brand systems.',
  },
] as const

export const STATS = [
  { value: '70-88%', label: 'Digital transformations fail', source: 'BCG, Bain' },
  { value: '80%', label: 'AI projects fail', source: 'RAND' },
  { value: '6%', label: 'Report meaningful AI impact', source: 'McKinsey 2025' },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Conversation',
    description:
      "Real conversation, not sales call. Understand what you're trying to do and what's in the way.",
  },
  {
    step: 2,
    title: 'Research',
    description:
      "Study before building. Market dynamics, technical constraints. What's been tried, where pitfalls are.",
  },
  {
    step: 3,
    title: 'Delivery',
    description:
      'Ship working products, not decks. Functional technology in real world. Measure outcomes against defined goals.',
  },
] as const
