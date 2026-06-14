import{j as n}from"./index-Ba36zmeE.js";import{u as c}from"./index-CJVBcA1t.js";function s(i){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...i.components},{Diagram:t}=e;return t||r("Diagram"),n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Overview"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"check-id"})," is an ID verification system that uses generative phonetic AI to match a spoken name against the name printed on an identity document. Rather than relying on exact string matching (which fails on transliterations, nicknames, and accent variation), the system generates phonetic embeddings for both the spoken input and the document text, then compares them in embedding space."]}),`
`,n.jsx(e.h2,{children:"System Diagram"}),`
`,n.jsx(t,{src:"/diagrams/check-id.excalidraw",caption:"ID verification pipeline"}),`
`,n.jsx(e.h2,{children:"How It Works"}),`
`,n.jsx(e.p,{children:"The pipeline has three stages:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Speech-to-text"})," — the spoken name is transcribed using a fine-tuned ASR model"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Phonetic encoding"})," — both the transcribed name and the OCR-extracted document name are passed through a generative phonetic encoder that produces a language-agnostic embedding"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Match scoring"})," — cosine similarity between embeddings determines a match/no-match decision with a calibrated confidence threshold"]}),`
`]}),`
`,n.jsx(e.p,{children:"The phonetic encoder is trained on multilingual name pairs with known equivalences, allowing it to handle transliterations across scripts (e.g., Thai → Latin) without a hand-crafted rules engine."}),`
`,n.jsx(e.h2,{children:"Stack"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Python"})," · ",n.jsx(e.code,{children:"generative AI"})," · ",n.jsx(e.code,{children:"phonetic encoding"})," · ",n.jsx(e.code,{children:"OCR"})]}),`
`]}),`
`,n.jsx(e.h2,{children:"Links"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/BankNatchapol/check-id",children:"GitHub →"})}),`
`]})]})}function h(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}function r(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
