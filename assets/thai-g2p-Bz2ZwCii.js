import{j as e}from"./index-DrPOMcPS.js";function t(s){const n={a:"a",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Thai G2P"})," is a Thai grapheme-to-phoneme system built on MarianMT, a state-of-the-art neural sequence-to-sequence model. Existing phonemizers fail on Thai for two structural reasons — this project addresses both with a data-driven approach that generalizes to unseen words far beyond what rule-based or finite-state methods can handle."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"The Two Problems"}),`
`,e.jsx(n.h3,{children:"1. Thai Tokenization"}),`
`,e.jsx(n.p,{children:"Thai is written without spaces between words. Phonemizers that assume whitespace-delimited tokens produce systematic errors on Thai text — a word boundary mistake at the input propagates directly into wrong phoneme output. Handling this correctly requires a tokenizer that understands Thai syllable and word structure before phonemization begins."}),`
`,e.jsx(n.h3,{children:"2. Out-of-Vocabulary (OOV) Handling"}),`
`,e.jsx(n.p,{children:"Rule-based and lookup-table G2P approaches (Phonetisaurus and similar FST-based tools) rely on a fixed lexicon. Any word not in the dictionary — loanwords, proper nouns, technical terms, newly coined words — either gets dropped or falls back to a heuristic that often fails for Thai phonology."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"The Approach"}),`
`,e.jsxs(n.p,{children:["Rather than patch a rule-based system, G2P is framed as a ",e.jsx(n.strong,{children:"sequence-to-sequence translation problem"}),": grapheme sequence → phoneme sequence. MarianMT, originally designed for neural machine translation, is well-suited for this — it learns character-level phonological patterns from data and applies them generatively to sequences it has never seen."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Data labeling for OOV:"})," A custom dataset of out-of-vocabulary Thai words was annotated with correct phoneme transcriptions. This gave the model explicit supervision on the hard cases that break lookup-based approaches — loanwords, rare terms, and edge-case syllable patterns."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Result:"})," The trained model handles OOV words that were entirely outside the reach of contemporary Thai phonemizers, enabling reliable phonemization for downstream TTS and ASR pipelines."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Applications"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Front-end phonemizer for the Thai High-Naturalness TTS system"}),`
`,e.jsx(n.li,{children:"Phoneme input for the Phonetic Alignment pipeline"}),`
`,e.jsx(n.li,{children:"Any Thai NLP pipeline requiring reliable phoneme sequences"}),`
`]}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20Thai%20G2P",children:"Request a demo →"})}),`
`]})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{r as default};
