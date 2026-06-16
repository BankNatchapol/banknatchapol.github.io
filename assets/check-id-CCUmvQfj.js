import{j as n}from"./index-CRRJTpJk.js";function s(i){const e={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i.components},{Diagram:t}=e;return t||a("Diagram"),n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Overview"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"ID Checker"})," is a name verification system built for a government business registration authority. It automatically validates whether a Thai/English name pair is linguistically consistent, compliant with naming rules, and not a duplicate of existing records — replacing slow, inconsistent manual officer review."]}),`
`,n.jsx(e.p,{children:"The pipeline combines hard-rule filtering, cross-lingual phonetic analysis, and LLM-based decision-making with natural-language reasoning."}),`
`,n.jsx(e.h2,{children:"System Diagram"}),`
`,n.jsx(t,{src:"/diagrams/check-id.excalidraw",caption:"ID verification pipeline"}),`
`,n.jsx(e.h2,{children:"How it works"}),`
`,n.jsx(e.h3,{children:"Stage 1 — Rule Pre-filter"}),`
`,n.jsx(e.p,{children:"Structurally invalid names are rejected instantly: empty fields, wrong character sets, invalid orthography, forbidden words, and exact duplicates. No AI is invoked for these cases, keeping latency low for the majority of inputs."}),`
`,n.jsx(e.h3,{children:"Stage 2 — Phonetic Analysis"}),`
`,n.jsx(e.p,{children:"Thai IPA phonemes (via epitran + pythainlp) and English IPA phonemes (via gruut) are independently computed and compared using phoneme edit-distance. The scores surface near-duplicate names from the registry as candidates for rejection."}),`
`,n.jsx(e.h3,{children:"Stage 3 — LLM Decision"}),`
`,n.jsx(e.p,{children:"A Gemini LLM receives the name pair, phonetic context, similarity scores, and a domain-aware system instruction. It outputs an accept/reject decision with natural-language reasoning and correction suggestions in the applicant's language."}),`
`,n.jsx(e.h2,{children:"Engineering challenges"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Phonological rules in prompt"})," — The LLM must apply a multi-step rule for silent consonant markers (Thai karan ์) to compare sounds rather than characters. Encoding this as an explicit prompt constraint was more reliable than pre-processing."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Proper noun handling"})," — Personal names and place names can only match via transliteration, never via semantic translation. A prompt rule enforces this distinction to prevent false positives on cross-language equivalents."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Cross-script phonology"})," — Acronym letters written in the target script retain the phonological rules of their source language for final consonants. Separate prompt exceptions handle these cases."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tokenization ambiguity"}),' — Multilingual tokenizers produce multi-token outputs for unknown words. The system distinguishes between "unknown transliteration" (acceptable) and "misspelled native word" (reject) to avoid over-rejection.']}),`
`,n.jsx(e.h2,{children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"150+ test cases with pass/fail tracking and result caching"}),`
`,n.jsx(e.li,{children:"Per-request token and cost logging"}),`
`,n.jsx(e.li,{children:"Model and inference level configurable at runtime without restart"}),`
`,n.jsx(e.li,{children:"Public single-tab UI; admin panel (data management, usage dashboard, test suite) behind a secret token"}),`
`,n.jsx(e.li,{children:"Deployable via Docker Compose or Kubernetes"}),`
`]}),`
`,n.jsx(e.h2,{children:"Links"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20ID%20Checker",children:"Request a demo →"})}),`
`]})]})}function o(i={}){const{wrapper:e}=i.components||{};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}function a(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{o as default};
