// ============================================================
//  SITE CONFIG — edit everything about yourself here
//  After saving, the whole site updates automatically.
// ============================================================

// ------------------------------------------------------------
// PERSONAL
// ------------------------------------------------------------
export const PERSONAL = {
  name: 'Natchapol Patamawisut',
  nickname: 'Bank',
  title: 'AI Engineer & Quantum Researcher',

  // One-paragraph bio shown in the hero section
  bio: 'Deep technology enthusiast — AI by day, quantum by night. Passionate about bridging the gap between theory and real-world implementation.',

  // Profile photo — put your image in public/ and set the path below.
  // Leave as '' to show initials instead.
  photo: '/profile.jpg',
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
    title: 'Quantum Software Systems',
    body: 'Full-stack quantum software from programming frameworks and simulators through compiler passes, error correction, and classical control — validated end-to-end via benchmarking on real hardware.',
  },
  {
    title: 'Quantum Algorithms',
    body: 'Algorithm design and circuit implementation for quantum algorithms, combinatorial optimization, and quantum machine learning — from theoretical construction to execution on hardware devices.',
  },
  {
    title: 'Machine Learning',
    body: 'Applied ML for speech systems — TTS, ASR, and production pipeline — and language model applications built with retrieval, agentic loops, and context engineering.',
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
    stack: ['Qiskit', 'Cirq', 'Operation Research', 'DQI', 'Syndrome Decoding'],
    award: 'Best Paper · 2nd Place — IEEE Quantum Week 2025 (QALG)',
  },
  {
    name: 'Qiix',
    slug: 'qiix',
    year: 2024,
    types: ['research', 'open source'],
    body: 'Improved quantum image encoding for QML using a quantum information mixer (QFT + QSVT) — faster convergence than standard FRQI on ideal simulators.',
    stack: ['PennyLane', 'QFT', 'QSVT', 'Quantum ML', 'Transformers', 'Quantum Image Encoding'],
    award: 'Industry Prize — Qiskit Quantum Hackathon 2024 Taiwan',
  },
]

export const PROJECTS_AI = [
  {
    name: 'ID Checker',
    slug: 'check-id',
    year: 2026,
    types: ['professional', 'live demo'],
    body: 'Thai/English name verification system for a government registration authority — rule filtering, cross-lingual phonetic analysis, and LLM decision with natural-language reasoning.',
    stack: ['Phonetics', 'RAG', 'Context Engineering', 'Agentic AI'],
    demoLink: 'mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20ID%20Checker',
  },
  {
    name: 'Deep Speech Data Pipeline',
    slug: 'deep-asr-pipeline',
    year: 2025,
    types: ['professional', 'live demo'],
    body: 'Fully automated pipeline from YouTube video URLs to labeled speech segments — yt-dlp download, loudness normalization, NISQA quality pre-filtering, Bandit denoising, speaker diarization and verification, inaSpeechSegmentor silence-aware chunking, Gemini/Whisper ASR, and forced alignment — outputting clean wav files with paired transcripts.',
    stack: ['Web Scraping', 'Data Validation', 'Whisper', 'ASR', 'Phonetics', 'Data Engineering', 'Multiprocessing'],
    demoLink: 'mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20Deep%20Speech%20Data%20Pipeline',
  },
  {
    name: 'Phonetic Alignment',
    slug: 'phonetic-alignment',
    year: 2025,
    types: ['professional', 'research', 'live demo'],
    body: 'Thai forced-alignment pipeline built on MFA — replacing Phonetisaurus with a fine-tuned Transformers phonemizer and retraining the acoustic model on curated Thai data. Improved boundary precision from ~100ms to sub-millisecond, a 100× gain over the vanilla MFA baseline.',
    stack: ['MFA', 'Transformers', 'Phonetics', 'Forced Alignment', 'TextGrid'],
    demoLink: 'mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20Phonetic%20Alignment',
  },
  {
    name: 'Thai High-Naturalness TTS',
    slug: 'thai-tts',
    year: 2025,
    types: ['professional', 'research', 'live demo'],
    body: 'Pioneered high-naturalness Thai TTS when the technology was brand new — implemented from paper, led proprietary data collection and labeller standardization, and customized the architecture with a Thai phonemizer and tone-aware embeddings for production deployment with voice cloning.',
    stack: ['VITS2', 'BERT', 'TTS', 'Voice Cloning', 'Data Labeling'],
    demoLink: 'mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20Thai%20TTS',
  },
  {
    name: 'Deep Thai Word Segmentation',
    slug: 'deep-wordseg',
    year: 2024,
    types: ['professional', 'research', 'live demo'],
    body: 'Thai word segmentation for extreme out-of-vocabulary text — uses LLM distillation (VertexAI as teacher) to generate training data for OOV-heavy cases, then trains a compact CNN+Transformer student model. More robust on OOV than dictionary methods, faster than LLM inference at production scale.',
    stack: ['CNN', 'Knowledge Distillation'],
    demoLink: 'mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20Deep%20Thai%20Word%20Segmentation',
  },
  {
    name: 'Deep Thai Phonemizer',
    slug: 'thai-g2p',
    year: 2024,
    types: ['professional', 'research', 'live demo'],
    body: 'Thai grapheme-to-phoneme model built on MarianMT — solving two core failures of existing phonemizers: Thai tokenization errors and poor out-of-vocabulary handling. Custom OOV phoneme data labeling enabled the seq2seq model to generalize to unseen words beyond what rule-based approaches could handle.',
    stack: ['Phonetics', 'Transformers', 'G2P', 'Data Labeling'],
    demoLink: 'mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20Thai%20G2P',
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
  'Python', 'PyTorch', 'Tensorflow',
  'Qiskit', 'Cirq', 'PennyLane',
  'HuggingFace', 'FastAPI',
  'LangChain', 'RAG', 'Vector Databases',
  'TTS', 'ASR', 'G2P',
  'Docker', 'Git', 'LaTeX', 'Linux', 'CI/CD',
  'AWS', 'GCP', 'Azure'
]

export const SKILLS_CONCEPTS: string[] = [
  'Quantum Algorithms',
  'Quantum Machine Learning',
  'Quantum Error Correction',
  'Quantum Information Theory',
  'Benchmarking Quantum Systems',
  
  'Compiler',

  'Natural Language Processing',
  'Probabilistic ML',
  'Operation Research',

  'Speech Processing',
  'Phonetics',

  'Data Engineering',
  'MLOps',

  'Loop Engineering',
  'Context Engineering',
  'Prompt Engineering',
  'Agentic AI',
]


export const SKILLS_OTHER: string[] = [
  'Research Leadership',
  'Technical Writing',
  'Academic Writing',
  'Public Speaking',
  'Project Management',
  'Community Organizing',
  'Cross-cultural Collaboration',
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
    description: '',
  },
  {
    year: '2023',
    venue: 'AQIS 2023',
    tone: 'amber' as const,
    poster: true,
    title: "Optimization of Grover's Search Algorithm using ZX-calculus",
    authors: 'N. Patamawisut, W. Pijitrojana, R. Bavontaweepanya',
    description: "",
  },
]

// ------------------------------------------------------------
// AWARDS  (Section 04)
// ------------------------------------------------------------
export const AWARDS = [
  {
    title: 'Best Paper Award · 2nd Place',
    event: 'IEEE Quantum Week 2025',
    note: 'QALG track — "Quantum Circuit Design for Decoded Quantum Interferometry." Co-authors: Naphan Benchasattabuse, Michal Hajdušek, Rodney Van Meter.',
    year: '2025',
    tone: 'blue' as const,
    link: 'https://www.keio.ac.jp/en/sfc-pem/news/20251024/',
  },
  {
    title: 'Industry Prize',
    event: 'Qiskit Quantum Hackathon 2024 Taiwan',
    note: 'For Qiix — improved quantum image encoding for QML with a QFT + QSVT information mixer, demonstrating faster convergence than standard FRQI on ideal simulators.',
    year: '2024',
    tone: 'amber' as const,
    link: 'https://www.keio.ac.jp/ja/sfc-pem/news/20241017-1/',
  },
]

// ------------------------------------------------------------
// EXPERIENCE / CV  (Section 05)
// Three separate lists — rendered as labelled groups in the timeline.
// ------------------------------------------------------------
export const EXPERIENCE_PROFESSIONAL = [
  {
    period: '2026 — now',
    role: 'AI Engineer',
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
    period: '2020 — 2023, 2026 — now',
    role: 'Research Assistant',
    org: 'Quantum Computing & Information Research Centre, KMUTT',
  },
]
