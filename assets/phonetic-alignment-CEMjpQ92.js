import{j as e}from"./index-DPW73IpJ.js";function s(i){const n={a:"a",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Phonetic Alignment"})," is a Thai forced-alignment pipeline built on top of MFA (Montreal Forced Aligner). The standard MFA pipeline for Thai relies on Phonetisaurus for grapheme-to-phoneme conversion and was trained on limited Thai data — producing alignment boundaries only accurate to ~100ms. This project replaces both the phonemizer and the acoustic model to achieve sub-millisecond precision."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"What Was Improved"}),`
`,e.jsx(n.h3,{children:"Phonemizer: Phonetisaurus → Transformers"}),`
`,e.jsx(n.p,{children:"Phonetisaurus uses a weighted finite-state transducer approach to G2P conversion. For Thai — a tonal, scriptio continua language with complex syllable structure — this produces frequent misreadings of edge cases."}),`
`,e.jsx(n.p,{children:"We replaced it with a fine-tuned Transformer-based G2P model trained on curated Thai lexicon data, yielding more accurate phoneme sequences as input to the aligner."}),`
`,e.jsx(n.h3,{children:"Acoustic Model: Fine-Tuned on Refined Thai Data"}),`
`,e.jsx(n.p,{children:"The MFA acoustic model was retrained from scratch on a curated Thai speech corpus with cleaned transcriptions and verified alignments. This substantially improves the model's ability to locate phoneme boundaries precisely within the audio signal."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Results"}),`
`,e.jsx(n.p,{children:"Boundary precision improved from the MFA baseline of ~100ms to ~1ms — a 100× gain — enabling reliable phoneme-level supervision for downstream TTS and ASR training."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Applications"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Phoneme-level forced alignment for Thai TTS training data"}),`
`,e.jsx(n.li,{children:"Boundary supervision for Thai ASR fine-tuning"}),`
`,e.jsx(n.li,{children:"Phonetic analysis and linguistic research on Thai speech"}),`
`]}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20Phonetic%20Alignment",children:"Request a demo →"})}),`
`]})]})}function a(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{a as default};
