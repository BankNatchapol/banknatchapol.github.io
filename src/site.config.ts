// ============================================================
//  SITE CONFIG — edit everything about yourself here
//  After saving, the whole site updates automatically.
// ============================================================

// ------------------------------------------------------------
// PERSONAL
// ------------------------------------------------------------
export const PERSONAL = {
  name: 'Natchapol Patamawisut',
  title: 'AI Engineer & Quantum Researcher',

  // One-paragraph bio shown in the hero section
  bio: 'Quantum algorithms at Keio, speech AI at DeepCapital, now ML Engineering at Finema. I like problems at the edge of theory and production — from phonetic models and TTS systems to quantum circuit implementations.',

  // Profile photo — put your image in public/ and set the path below.
  // Leave as '' to show initials instead.
  photo: '/profile.JPG',
  photoAlt: 'Natchapol Patamawisut',

  // Initials shown when no photo is set
  initials: 'NP',

  // Footer credit line
  footerCredit: 'drawn & written by Natchapol',

  // Contact email — used by the "Get in touch" form
  email: 'natchapol.pat@gmail.com',

  // Social / profile links shown in the hero
  github: 'https://github.com/BankNatchapol',
  linkedin: 'https://www.linkedin.com/in/natchapol-patamawisut/',
  scholar: 'https://scholar.google.com/citations?user=2oKwxZ0AAAAJ&hl=en',
}

// ------------------------------------------------------------
// RESEARCH AREAS  (Section 01)
// ------------------------------------------------------------
export const RESEARCH_AREAS = [
  {
    title: 'Quantum Algorithms',
    body: 'Circuit design and benchmarking for quantum interferometry, optimization, and variational algorithms on real devices.',
    tags: ['DQI', 'optimization', 'benchmarking'],
  },
  {
    title: 'Quantum Machine Learning',
    body: 'Probabilistic ML for quantum systems, continuous-variable quantum neural networks for photonic architectures.',
    tags: ['CV-QNN', 'probabilistic ML', 'photonics'],
  },
  {
    title: 'Circuit Optimization',
    body: 'Reducing gate counts and depth via ZX-calculus rewrites and noise-adaptive transpilation across hardware targets.',
    tags: ['ZX-calculus', 'transpilation', 'noise'],
  },
]

// ------------------------------------------------------------
// PROJECTS  (Section 02)
// Each project needs a matching MDX file in src/content/projects/<slug>.mdx
// ------------------------------------------------------------
// types — project category labels, multiple allowed (see badge colors below)
// stack — tools/tech used, shown on card + detail page
//
// Supported types → badge color:
//   'research'     → blue
//   'open source'  → sage   (source code is public)
//   'live demo'    → sage   (demo available even if source is private)
//   'side project' → amber
//   'professional' → ink    (built for an employer or client)
//   'freelance'    → terra  (independent contract work)

export const PROJECTS_QUANTUM = [
  {
    name: 'DQI-Circuit',
    slug: 'dqi-circuit',
    year: 2025,
    types: ['research', 'open source'],
    body: 'Quantum circuit implementation of Decoded Quantum Interferometry with BPQM, Gauss-Jordan, and lookup-table decoders — benchmarked across Qiskit and Cirq.',
    stack: ['Python', 'Qiskit', 'Cirq', 'NumPy'],
  },
  {
    name: 'QIMX',
    slug: 'qimx',
    year: 2024,
    types: ['research', 'open source'],
    body: 'Enhanced quantum image encoding using a quantum information mixer, improving ML model convergence on quantum-encoded image data.',
    stack: ['Python', 'Qiskit', 'Quantum ML'],
    award: 'Industry Prize — Qiskit Quantum Hackathon 2024 Taiwan',
  },
  {
    name: 'ZX-Grover',
    slug: 'zx-grover',
    year: 2023,
    types: ['research', 'open source'],
    body: "Circuit optimization of Grover's search algorithm via ZX-calculus rewrites, achieving gate count and depth reductions without changing algorithm semantics.",
    stack: ['Python', 'Qiskit', 'ZX-Calculus'],
  },
]

export const PROJECTS_AI = [
  {
    name: 'ID Checker',
    slug: 'check-id',
    year: 2026,
    types: ['professional', 'live demo'],
    body: 'Thai/English name verification system for a government registration authority — rule filtering, cross-lingual phonetic analysis, and LLM decision with natural-language reasoning.',
    stack: ['Phonetic', 'RAG', 'Context Engineering', 'Agentic AI'],
  },
  {
    name: 'Thai G2P',
    slug: 'thai-g2p',
    year: 2024,
    types: ['professional'],
    body: 'End-to-end Thai grapheme-to-phoneme model and phonetic data pipeline — covering tokenization, IPA conversion, and alignment for downstream TTS and ASR.',
    stack: ['Python', 'PyTorch', 'Thai NLP', 'Phonetics'],
  },
  {
    name: 'Thai TTS',
    slug: 'thai-tts',
    year: 2024,
    types: ['professional'],
    body: 'High-quality Thai text-to-speech system with voice cloning — trained from proprietary data, deployed in production.',
    stack: ['Python', 'PyTorch', 'TTS', 'Voice Cloning'],
  },
  {
    name: 'Agentic Chatbot',
    slug: 'agentic-chatbot',
    year: 2023,
    types: ['freelance'],
    body: 'Real-time character speech chatbot integrated with live streaming platforms — agentic conversation loop with sub-second latency TTS, down from minutes.',
    stack: ['Python', 'LLM', 'TTS', 'Agentic AI'],
  },
  {
    name: 'Resume LLM',
    slug: 'resume-llm',
    year: 2022,
    types: ['freelance'],
    body: 'LLM pipeline that extracts structured data from unstructured resume documents for automated candidate screening and analysis.',
    stack: ['Python', 'LLM'],
  },
]

// ------------------------------------------------------------
// SKILLS  (hero section — edit these directly)
// ------------------------------------------------------------

export const SKILLS_TECH: string[] = [
  'Python', 'PyTorch', 'Qiskit', 'Cirq', 'TensorFlow',
  'Docker', 'Kubernetes', 'Git', 'LaTeX', 'Linux',
]

export const SKILLS_CONCEPTS: string[] = [
  'Quantum Algorithms',
  'Quantum Optimization',
  'Quantum Machine Learning',
  'Probabilistic ML',
  'Speech Synthesis',
  'Phonetic AI',
  'Agentic AI',
  'ZX-Calculus',
]

export const SKILLS_OTHER: string[] = [
  'Research Leadership',
  'Technical Writing',
  'Community Organizing',
  'Mentoring',
]

// ------------------------------------------------------------
// PUBLICATIONS  (Section 03)
// ------------------------------------------------------------
export const PUBLICATIONS = [
  {
    year: '2025',
    venue: 'QCE 2025',
    tone: 'blue' as const,
    title: 'Quantum Circuit Design for Decoded Quantum Interferometry',
    authors: 'N. Patamawisut, N. Benchasattabuse, M. Hajdušek, R. Van Meter',
    description: 'Full circuit implementation of the DQI algorithm with BPQM, Gauss-Jordan, and lookup-table decoders, benchmarked across Qiskit and Cirq on IBM and Google gate sets.',
    link: 'https://ieeexplore.ieee.org/document/11250226',
  },
  {
    year: '2025',
    venue: 'IEEE QCNC',
    tone: 'sage' as const,
    title: 'Understanding Noise-Adaptive Transpilation Techniques Using the SupermarQ Benchmark',
    authors: 'S. Vorathammathorn, M. Binhar, R. Sarochawikasit, S. Chanchuphol, N. Patamawisut',
    description: 'Analyzes noise-adaptive transpilation strategies on IBM hardware using the SupermarQ feature-based benchmark, revealing how device characteristics interact with optimization passes.',
    link: 'https://ieeexplore.ieee.org/document/11000169',
  },
  {
    year: '2023',
    venue: 'ANSCSE 26',
    tone: 'terra' as const,
    title: 'A Comparison of Quantum Gradient Methods for Quantum Optimization',
    authors: 'N. Patamawisut, R. Sarochawikasit, U. Taetragool',
    description: 'Benchmarks parameter-shift, finite-difference, and SPSA gradient estimators for variational quantum algorithms on NISQ devices, comparing convergence and noise sensitivity.',
  },
  {
    year: '2023',
    venue: 'AQIS 2023',
    tone: 'amber' as const,
    poster: true,
    title: "Optimization of Grover's Search Algorithm using ZX-calculus",
    authors: 'N. Patamawisut, W. Pijitrojana, R. Bavontaweepanya',
    description: "Applies ZX-calculus graph rewrites to Grover's oracle and diffusion circuits, achieving reductions in gate count and depth without altering algorithm semantics.",
  },
]

// ------------------------------------------------------------
// EXPERIENCE / CV  (Section 04)
// Three separate lists — rendered as labelled groups in the timeline.
// ------------------------------------------------------------
export const EXPERIENCE_PROFESSIONAL = [
  {
    period: '2026 — now',
    role: 'ML Engineer',
    org: 'Finema Co., Ltd',
  },
  {
    period: '2024 — 2025',
    role: 'AI Engineer',
    org: 'DeepCapital Thailand',
  },
  {
    period: '2022 — 2024',
    role: 'AI Engineer',
    org: 'Freelance',
  },
]

export const EXPERIENCE_EDUCATION = [
  {
    period: '2024 — 2026',
    role: 'MS, Quantum Computing',
    org: 'Keio University, Japan',
  },
  {
    period: '2018 — 2022',
    role: 'BS, Computer Engineering',
    org: 'KMUTT, Thailand',
  },
]

export const EXPERIENCE_RESEARCH = [
  {
    period: '2024 — 2026',
    role: 'Research Assistant',
    org: 'Advancing Quantum Architecture Group, Keio University',
  },
  {
    period: '2021 — 2024',
    role: 'Research Assistant',
    org: 'Quantum Optics Lab, Thammasat University',
  },
  {
    period: '2020 — 2023',
    role: 'Research Assistant',
    org: 'Quantum Computing & Information Research Centre, KMUTT',
  },
]
