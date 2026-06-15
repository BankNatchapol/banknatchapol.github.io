import{j as e}from"./index-X1fnS43_.js";function r(t){const n={a:"a",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Deep Thai WordSeg"})," is a Thai word segmentation model designed specifically for extreme out-of-vocabulary (OOV) text. It uses LLM distillation — a large language model acts as a teacher to generate high-quality labels for hard OOV cases, and a compact CNN+Transformer student model is trained on this data. The result is a model that handles OOV words far better than dictionary-based approaches, while remaining fast enough for production use."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"The Problem"}),`
`,e.jsx(n.h3,{children:"Thai Word Segmentation"}),`
`,e.jsx(n.p,{children:"Thai is written without spaces. Identifying word boundaries requires understanding morphology and context — a problem that scales well when words are in the dictionary, but breaks down on:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Loanwords and transliterations"}),`
`,e.jsx(n.li,{children:"Proper nouns (people, brands, places)"}),`
`,e.jsx(n.li,{children:"Technical and domain-specific terms"}),`
`,e.jsx(n.li,{children:"Newly coined words and internet slang"}),`
`]}),`
`,e.jsx(n.h3,{children:"Why Dictionary Methods Fail on OOV"}),`
`,e.jsx(n.p,{children:"Standard Thai word segmenters (MaxMatching, Longest Match) rely on a fixed vocabulary. An out-of-vocabulary token either gets split character-by-character or triggers a fallback heuristic — both produce wrong boundaries. Statistical models trained on fixed corpora inherit the same blind spots."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"The Approach: LLM Distillation"}),`
`,e.jsx(n.p,{children:"LLMs understand Thai context well enough to segment OOV text correctly — but they are too slow and expensive for high-throughput production use. The solution is a teacher-student setup:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Teacher (LLM via VertexAI):"})," Given Thai text with heavy OOV content, the LLM produces correct word boundary labels. This generates a training dataset that no human annotation effort could feasibly cover at scale."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Student (CNN + Transformer):"})," A compact model trained on the LLM-generated labels. The CNN captures local character patterns; the Transformer captures long-range contextual dependencies across the sequence. Together they approximate the teacher's segmentation quality at a fraction of the inference cost."]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["This approach — using LLM output as ground truth to train a smaller model — is sometimes called ",e.jsx(n.strong,{children:"knowledge distillation from LLM"}),", or simply ",e.jsx(n.strong,{children:"LLM-distilled training"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Architecture"}),`
`,e.jsx(n.p,{children:"The student model combines two components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CNN layers:"})," Extract character-level n-gram features and local boundary signals — fast and parameter-efficient for the low-level pattern recognition"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Transformer encoder:"})," Attends over the full character sequence to resolve ambiguous boundaries using broader context"]}),`
`]}),`
`,e.jsx(n.p,{children:"The model outputs a boundary probability score for each character position, which is thresholded to produce the final segmentation."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Results"}),`
`,e.jsx(n.p,{children:"The model segments Thai text into pipe-delimited words with per-boundary confidence scores. On OOV-heavy text where dictionary-based segmenters produce systematic errors, the LLM-distilled model correctly identifies boundaries — inheriting the teacher LLM's contextual understanding without the inference overhead."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/BankNatchapol/Deep-WordSeg",children:"GitHub →"})}),`
`]})]})}function i(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{i as default};
