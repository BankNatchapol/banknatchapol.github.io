// ============================================================
//  SITE CONFIG — edit everything about yourself here
//  After saving, the whole site updates automatically.
// ============================================================

// ------------------------------------------------------------
// PERSONAL
// ------------------------------------------------------------
export const PERSONAL = {
  name: 'Natchapol Patamawisut',
  title: 'Researcher & Software Engineer',

  // One-paragraph bio shown in the hero section
  bio: 'I build the error-correction software that keeps fragile qubits honest — real-time decoders, pulse-level calibration, and the unglamorous plumbing between a dilution fridge and a laptop.',

  // Profile photo — put your image in public/ and set the path below.
  // Example: if you add public/photo.jpg, set photo to '/bank-portfolio/photo.jpg'
  // Leave as '' to show initials instead.
  photo: '/profile.JPG',
  photoAlt: 'Natchapol Patamawisut',

  // Initials shown when no photo is set
  initials: 'NP',

  // Footer credit line
  footerCredit: 'drawn & written by Natchapol',
}

// ------------------------------------------------------------
// RESEARCH AREAS  (Section 01)
// ------------------------------------------------------------
export const RESEARCH_AREAS = [
  {
    title: 'Quantum Error Correction',
    body: 'Surface codes and the real-time decoders that have to keep up with them.',
    tags: ['surface codes', 'decoders'],
  },
  {
    title: 'Superconducting Control',
    body: 'Pulse-level calibration for fixed-frequency transmons, and chasing down crosstalk.',
    tags: ['transmons', 'crosstalk'],
  },
  {
    title: 'Noise & Benchmarking',
    body: 'Honest numbers for noisy machines: randomized benchmarking and tomography.',
    tags: ['benchmarking', 'tomography'],
  },
]

// ------------------------------------------------------------
// PROJECTS  (Section 02)
// Each project needs a matching MDX file in src/content/projects/<slug>.mdx
// ------------------------------------------------------------
export const PROJECTS_QUANTUM = [
  {
    name: 'surfsim',
    slug: 'surfsim',
    badge: 'maintained',
    badgeTone: 'sage' as const,
    body: 'A GPU surface-code simulator that runs a distance-21 patch in real time.',
    tags: ['CUDA', 'QEC'],
  },
  {
    name: 'decoderd',
    slug: 'decoderd',
    badge: 'research',
    badgeTone: 'blue' as const,
    body: 'Low-latency decoder daemon that talks to the control stack over shared memory.',
    tags: ['Rust', 'decoding'],
  },
]

export const PROJECTS_AI = [
  {
    name: 'ml-decoder',
    slug: 'ml-decoder',
    badge: 'research',
    badgeTone: 'blue' as const,
    body: 'A neural decoder for the surface code that beats MWPM at high noise.',
    tags: ['PyTorch', 'GNN'],
  },
  {
    name: 'scholar-rag',
    slug: 'scholar-rag',
    badge: 'side project',
    badgeTone: 'terra' as const,
    body: 'A retrieval-augmented assistant over the full quant-ph arXiv corpus.',
    tags: ['LLM', 'RAG'],
  },
]

// ------------------------------------------------------------
// PUBLICATIONS  (Section 03)
// ------------------------------------------------------------
export const PUBLICATIONS = [
  {
    year: '2024',
    venue: 'Nature Physics',
    tone: 'blue' as const,
    title: 'Real-time decoding of the surface code on a 100-qubit processor',
    authors: 'N. Patamawisut, R. Okafor, L. Demir, et al.',
  },
  {
    year: '2023',
    venue: 'Quantum',
    tone: 'terra' as const,
    title: 'Benchmarking logical error rates under realistic noise',
    authors: 'L. Demir, N. Patamawisut, A. Bianchi',
  },
]

// ------------------------------------------------------------
// EXPERIENCE / CV  (Section 04)
// ------------------------------------------------------------
export const EXPERIENCE = [
  {
    period: '2021 — now',
    role: 'PhD Candidate, Quantum Information',
    org: 'Institute for Quantum Computing',
  },
  {
    period: '2021',
    role: 'MSc Physics',
    org: 'ETH Zürich',
  },
]
