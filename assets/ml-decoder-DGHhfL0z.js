import{j as e}from"./index-hQ-jPhDR.js";function s(n){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h2,{children:"Overview"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"ml-decoder"})," is a graph neural network (GNN) decoder for the surface code that learns to correct Pauli errors directly from syndrome measurements. Standard MWPM performs optimally only under i.i.d. depolarising noise — under correlated noise from real hardware (leakage, crosstalk, structured two-qubit errors) it degrades significantly. A learned decoder can capture these correlations without explicit noise-model engineering."]}),`
`,e.jsx(r.h2,{children:"How It Works"}),`
`,e.jsx(r.p,{children:"Each syndrome round is a graph: nodes are stabiliser detectors that fired, edges connect adjacent detectors weighted by local error probability. A stack of GraphSAGE-style message-passing layers with layer normalisation and residual connections computes node embeddings encoding global syndrome context. The final layer predicts per-edge error probability; a greedy pass selects the correction."}),`
`,e.jsxs(r.p,{children:["Training data is generated on-device by ",e.jsx(r.code,{children:"surfsim"})," at ~10⁷ labelled samples/second on an A100, using binary cross-entropy loss with AdamW (lr=3×10⁻⁴, cosine decay, 200k steps)."]}),`
`,e.jsx(r.h2,{children:"Results"}),`
`,e.jsx(r.p,{children:`| Error rate | GNN logical error rate | MWPM logical error rate |
|---|---|---|
| p = 0.5% | 8×10⁻⁴ per round | 1.1×10⁻³ per round |
| p = 1.0% | 6.2×10⁻³ per round | 9.8×10⁻³ per round |`}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["GPU inference under ",e.jsx(r.strong,{children:"10 µs per sample"})," at batch size 1024"]}),`
`]}),`
`,e.jsx(r.h2,{children:"Next Steps"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Meta-learning for rapid adaptation to new device noise after a short calibration run"}),`
`,e.jsx(r.li,{children:"Equivariant GNN architectures that respect surface-code lattice symmetries to reduce sample complexity"}),`
`]}),`
`,e.jsx(r.h2,{children:"Links"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/BankNatchapol/ml-decoder",children:"GitHub →"})}),`
`]})]})}function i(n={}){const{wrapper:r}=n.components||{};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{i as default};
