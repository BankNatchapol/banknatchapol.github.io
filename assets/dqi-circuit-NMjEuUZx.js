import{j as e}from"./index-DtunIu6H.js";function r(t){const i={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h2,{children:"Overview"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"DQI-Circuit"})," is a full quantum circuit implementation of the Decoded Quantum Interferometry (DQI) algorithm, accompanying the paper ",e.jsx(i.a,{href:"https://arxiv.org/abs/2504.18334",children:e.jsx(i.em,{children:"Quantum Circuit Design for Decoded Quantum Interferometry"})})," (arXiv:2504.18334)."]}),`
`,e.jsxs(i.p,{children:["DQI, originally introduced in ",e.jsx(i.a,{href:"https://arxiv.org/abs/2408.08292",children:"arXiv:2408.08292"}),", is a quantum algorithm that exploits interferometry combined with classical decoding to solve structured search problems. This repository provides circuits for three decoding methods across two quantum computing frameworks, with comprehensive benchmarking tools."]}),`
`,e.jsx(i.h2,{children:"Decoding Methods"}),`
`,e.jsx(i.p,{children:"Three decoding strategies are implemented with full circuit support:"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Belief Propagation Quantum Matching (BPQM)"})," — Probabilistic message-passing over the factor graph of the parity check matrix. Configurable rotation angle θ and unrolling depth allow tuning the trade-off between circuit depth and decoding quality."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Gauss-Jordan Elimination (GJE)"})," — Deterministic algebraic decoder that row-reduces the parity check matrix to find the correction. Produces shallower circuits than BP at the cost of adaptivity."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Lookup Table"})," — Classical decoder that maps each syndrome to the most likely error pattern via a precomputed table. Optimal for small codes and used as the accuracy baseline against which BPQM and GJE are compared."]}),`
`,e.jsx(i.h2,{children:"Framework Support"}),`
`,e.jsxs(i.p,{children:["The codebase provides feature-complete implementations in both ",e.jsx(i.strong,{children:"Qiskit"})," (IBM) and ",e.jsx(i.strong,{children:"Cirq"})," (Google), with identical circuit generation interfaces:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Qiskit targets IBM hardware gate sets ",e.jsx(i.code,{children:"{ECR, ID, RZ, SX, X}"})," with optimization level 3"]}),`
`,e.jsxs(i.li,{children:["Cirq supports universal, IBM-like, and Google-like ",e.jsx(i.code,{children:"{PhasedXPowGate, CZ}"})," gate sets"]}),`
`,e.jsx(i.li,{children:"Generated circuits are serialised to QPY (Qiskit) and QASM (Cirq) for downstream use"}),`
`]}),`
`,e.jsx(i.p,{children:"Both frameworks support the same BP and GJE methods, enabling fair cross-framework benchmarking of circuit depth, qubit count, and two-qubit gate overhead."}),`
`,e.jsx(i.h2,{children:"Circuit Generation"}),`
`,e.jsx(i.p,{children:"Circuits are generated from a parity check matrix H (random or user-supplied). The pipeline handles:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Matrix generation with guaranteed density constraints and no all-zero rows/columns"}),`
`,e.jsx(i.li,{children:"Optimal weight calculation for state preparation"}),`
`,e.jsx(i.li,{children:"Dicke state preparation circuits"}),`
`,e.jsx(i.li,{children:"Decoder circuit construction (BP or GJE)"}),`
`,e.jsx(i.li,{children:"Transpilation and optimisation to the target gate set"}),`
`,e.jsx(i.li,{children:"Structured output with full metadata (depth, gate counts, two-qubit gates, timestamps)"}),`
`]}),`
`,e.jsx(i.p,{children:"Matrix sizes from 4×4 up to 25×25 are covered in the batch generation scripts."}),`
`,e.jsx(i.h2,{children:"Results"}),`
`,e.jsx(i.p,{children:"Benchmarking across frameworks and decoding methods reveals:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"GJE consistently produces shallower circuits; BP achieves better decoding fidelity under structured noise"}),`
`,e.jsx(i.li,{children:"Cirq circuits run deeper than equivalent Qiskit circuits due to gate set differences"}),`
`,e.jsx(i.li,{children:"Two-qubit gate count scales approximately linearly with matrix density at fixed size"}),`
`]}),`
`,e.jsx(i.h2,{children:"Links"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/BankNatchapol/DQI-Circuit",children:"GitHub →"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://arxiv.org/abs/2504.18334",children:"arXiv paper →"})}),`
`]})]})}function s(t={}){const{wrapper:i}=t.components||{};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{s as default};
