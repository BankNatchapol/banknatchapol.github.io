import{j as n}from"./index-DPW73IpJ.js";function a(i){const e={a:"a",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i.components},{Diagram:t}=e;return t||r("Diagram"),n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Overview"}),`
`,n.jsx(e.p,{children:"At the time this project started, VITS2-class high-naturalness TTS was a very new technology with no Thai support. Everything had to be built from scratch — implementing the architecture from paper, collecting and standardizing training data, and customizing the model for Thai linguistic features. The result is a production-deployed Thai TTS system with voice cloning capability."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"The Problems"}),`
`,n.jsx(e.h3,{children:"1. Cutting-Edge Technology, No Reference Implementation"}),`
`,n.jsx(e.p,{children:"High-naturalness neural TTS (VITS2 and its derivatives) had only just been published. There was no mature open-source Thai support — the architecture had to be studied from the paper and implemented directly, including adapting the training pipeline, loss functions, and inference stack."}),`
`,n.jsx(e.h3,{children:"2. Thai Has No Open High-Quality Speech Data"}),`
`,n.jsx(e.p,{children:"Unlike English or Mandarin, Thai lacks the large, clean, annotated speech corpora that modern TTS requires. This meant the data had to be created:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Designed the labelling schema and transcription standards"}),`
`,n.jsx(e.li,{children:"Led and coordinated a team of labellers"}),`
`,n.jsx(e.li,{children:"Built quality-control pipelines to catch transcription errors and inconsistencies"}),`
`,n.jsx(e.li,{children:"Curated the final training corpus from proprietary recordings"}),`
`]}),`
`,n.jsx(e.h3,{children:"3. Thai Linguistic Complexity"}),`
`,n.jsx(e.p,{children:"Thai is a tonal language written without spaces between words. Standard phonemizers cannot handle it — tone, syllable segmentation, and word boundary detection all require language-specific logic. The entire front-end had to be custom-built."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Architecture"}),`
`,n.jsx(t,{src:"/diagrams/MeloTTS.excalidraw",caption:"Thai High-Naturalness TTS — model architecture",maxWidth:"700px"}),`
`,n.jsx(e.p,{children:"The synthesis pipeline has two stages:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Front-end (Phonemizer):"})," Custom Thai phonemizer converts raw text into three parallel streams — phoneme sequences, tone labels, and word-to-phoneme alignment (word2ph). Each stream is embedded separately: a phoneme embedding, a tone embedding, and a language embedding. These three are summed element-wise. In parallel, word2ph drives a BERT model that produces contextual representations; both streams are fed into the synthesis backend."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Back-end (VITS2):"})," A variational inference model with adversarial training generates the waveform end-to-end from the combined embeddings. A reference wav input enables speaker conditioning, which powers the voice cloning capability."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Results"}),`
`,n.jsx(e.p,{children:"Deployed to production at DeepCapital Thailand with voice cloning enabled. The system produces natural-sounding Thai speech with correct tone rendering across all five Thai tones, and can clone a target speaker from a short reference recording."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"My Role"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Implemented the VITS2 architecture and training pipeline from the paper"}),`
`,n.jsx(e.li,{children:"Designed and led the data labelling operation — standardization, QC, and corpus curation"}),`
`,n.jsx(e.li,{children:"Built the custom Thai phonemizer and tone-aware embedding front-end"}),`
`,n.jsx(e.li,{children:"Fine-tuned the model on proprietary Thai speech data"}),`
`,n.jsx(e.li,{children:"Deployed and maintained the system in production"}),`
`]}),`
`,n.jsx(e.h2,{children:"Links"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20Thai%20TTS",children:"Request a demo →"})}),`
`]})]})}function o(i={}){const{wrapper:e}=i.components||{};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}function r(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{o as default};
