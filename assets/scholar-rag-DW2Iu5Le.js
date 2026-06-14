import{j as e}from"./index-BOBS1tiG.js";function t(r){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"scholar-rag"})," is a retrieval-augmented generation (RAG) assistant for querying the full quant-ph arXiv corpus in natural language. With over 60,000 papers in the quantum information literature, keeping up with results on any specific topic requires exhaustive manual search. ",e.jsx(n.code,{children:"scholar-rag"})," combines dense semantic retrieval with a generative model that synthesises answers grounded in actual paper text."]}),`
`,e.jsx(n.h2,{children:"How It Works"}),`
`,e.jsx(n.p,{children:'Papers are ingested from the arXiv bulk S3 export. PDFs are converted to structured text preserving equation blocks as LaTeX (rather than lossy OCR-to-Unicode). Each paper is split into overlapping ~400-token chunks with a 50-token stride; equation-heavy paragraphs are kept intact. Metadata is stored in SQLite for filtered queries (e.g., "papers from 2024 on cat qubits").'}),`
`,e.jsx(n.p,{children:"Chunks are embedded with a sentence-transformer fine-tuned on quant-ph vocabulary (continued pre-training on 20k abstract/conclusion pairs) and stored in a FAISS flat inner-product index. At query time, top-20 chunks are retrieved then re-ranked by a cross-encoder; the top-5 are passed as context to a Claude API call that generates a cited answer."}),`
`,e.jsx(n.h2,{children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`scholar-rag query "What are the latest decoder thresholds under circuit-level noise?"
`})}),`
`,e.jsx(n.p,{children:"Returns an answer with inline citations linking to arXiv abstract pages. A web interface is also available."}),`
`,e.jsx(n.h2,{children:"Stack"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Python"})," · ",e.jsx(n.code,{children:"FAISS"})," · ",e.jsx(n.code,{children:"sentence-transformers"})," · ",e.jsx(n.code,{children:"Claude API"})," · ",e.jsx(n.code,{children:"SQLite"})]}),`
`]}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/BankNatchapol/scholar-rag",children:"GitHub →"})}),`
`]})]})}function s(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{s as default};
