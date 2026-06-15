import{j as n}from"./index-Bp7juVyn.js";function r(i){const e={a:"a",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i.components},{Diagram:t}=e;return t||s("Diagram"),n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Overview"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"DQI-Circuit"})," is an open-source quantum-circuit implementation of ",n.jsx(e.strong,{children:"Decoded Quantum Interferometry (DQI)"}),", developed alongside the paper ",n.jsx(e.a,{href:"https://arxiv.org/abs/2504.18334",children:n.jsx(e.em,{children:"Quantum Circuit Design for Decoded Quantum Interferometry"})})," (arXiv:2504.18334)."]}),`
`,n.jsx(e.p,{children:"DQI was originally introduced as a quantum algorithm that uses interferometry and decoding to approach structured combinatorial optimization problems. Instead of directly searching over the optimization landscape, DQI reduces the problem to a decoding task, where practical decoders such as belief propagation can be applied."}),`
`,n.jsx(e.p,{children:"Prior DQI work was mainly theoretical and provided only high-level circuit sketches. This repository addresses that gap by giving an explicit, end-to-end circuit implementation of the DQI pipeline, including state preparation, constraint encoding, coherent decoding, postselection, Hadamard transformation, measurement, simulation, and resource estimation."}),`
`,n.jsx(e.h2,{children:"Project Goals"}),`
`,n.jsx(e.p,{children:"The goal of this project is to make DQI executable and analyzable at the quantum-circuit level."}),`
`,n.jsx(e.p,{children:"This includes:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Defining the full DQI circuit pipeline step by step"}),`
`,n.jsx(e.li,{children:"Implementing the main circuit components required for DQI"}),`
`,n.jsx(e.li,{children:"Designing coherent quantum decoder circuits"}),`
`,n.jsx(e.li,{children:"Simulating small DQI instances to validate the construction"}),`
`,n.jsx(e.li,{children:"Estimating circuit resources such as qubit count, gate count, and depth"}),`
`]}),`
`,n.jsx(e.h2,{children:"DQI Circuit Pipeline"}),`
`,n.jsx(t,{src:"/diagrams/dqi-circuit-pipeline.excalidraw",maxHeight:"900px",caption:"End-to-end DQI circuit pipeline"}),`
`,n.jsx(e.p,{children:"The implemented DQI workflow follows the full algorithmic structure:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Error register preparation"}),`
Initializes the error register used to represent candidate error patterns.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Unary amplitude encoding"}),`
Encodes the polynomial or weight-dependent amplitudes into the quantum state.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Dicke state preparation"}),`
Prepares fixed-Hamming-weight superpositions required by the DQI construction.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Phase encoding"}),`
Encodes objective-function information into the phase of the quantum state.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Constraint encoding"}),`
Computes the syndrome information using the parity-check structure.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Coherent decoding and uncomputation"}),`
Applies a reversible decoder to map syndrome information back to an error estimate and uncomputes the error register in superposition.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Postselection and Hadamard transform"}),`
Postselects the required register state, applies the Hadamard transform, and measures the final output distribution.`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"Quantum Decoder Circuits"}),`
`,n.jsx(e.p,{children:"A central contribution of this project is the design and implementation of quantum decoder circuits for DQI."}),`
`,n.jsx(e.p,{children:"The repository includes three decoder approaches:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Lookup-table decoder"}),`
A direct syndrome-to-error decoder based on a precomputed table. This is useful for small instances and serves as a baseline decoder for validating the circuit construction.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Reversible Gauss-Jordan Elimination (GJE) decoder"}),`
A deterministic algebraic decoder that performs reversible row-reduction-style operations to recover an error estimate from the syndrome. This provides a structured circuit implementation of the decoding step.`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"BPQM-based syndrome decoder"}),`
A coherent decoder inspired by Belief Propagation Quantum Matching (BPQM). This implements message-passing-style decoding at the circuit level and connects DQI with quantum message-passing decoder design.`]}),`
`,n.jsx(e.h2,{children:"Implementation"}),`
`,n.jsx(e.p,{children:"The codebase implements the DQI circuit components and decoder circuits in a modular way, allowing each stage of the algorithm to be constructed, inspected, simulated, and benchmarked."}),`
`,n.jsx(e.p,{children:"Implemented components include:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Unary amplitude encoding"}),`
`,n.jsx(e.li,{children:"Dicke state preparation"}),`
`,n.jsx(e.li,{children:"Phase encoding"}),`
`,n.jsx(e.li,{children:"Constraint encoding"}),`
`,n.jsx(e.li,{children:"Lookup-table decoding"}),`
`,n.jsx(e.li,{children:"Reversible GJE decoding"}),`
`,n.jsx(e.li,{children:"BPQM-based syndrome decoding"}),`
`,n.jsx(e.li,{children:"Hadamard transform and measurement"}),`
`,n.jsx(e.li,{children:"Circuit-level resource estimation"}),`
`]}),`
`,n.jsx(e.p,{children:"The repository is intended to serve both as an implementation of the paper and as a reference codebase for future DQI circuit experiments."}),`
`,n.jsx(e.h2,{children:"Resource Estimation"}),`
`,n.jsx(e.p,{children:"The project includes resource-estimation tools for analyzing the cost of DQI circuit components."}),`
`,n.jsx(e.p,{children:"The reported metrics include:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Number of qubits"}),`
`,n.jsx(e.li,{children:"Gate count"}),`
`,n.jsx(e.li,{children:"Circuit depth"}),`
`,n.jsx(e.li,{children:"Decoder-specific circuit cost"}),`
`,n.jsx(e.li,{children:"Scaling with matrix size"}),`
`,n.jsx(e.li,{children:"Scaling with polynomial degree"}),`
`]}),`
`,n.jsx(e.p,{children:"In the thesis setting, the matrix size represents the number of optimization variables and constraints, while the polynomial degree is a chosen parameter of the DQI construction."}),`
`,n.jsx(e.h2,{children:"Simulation Results"}),`
`,n.jsx(e.p,{children:"Small-instance simulations are included to validate the DQI circuit construction."}),`
`,n.jsx(e.p,{children:"The simulations compare the measured DQI output distribution with the objective-value landscape. This helps verify whether the circuit assigns higher probability to solutions with favorable objective values after postselection and measurement."}),`
`,n.jsx(e.h2,{children:"Contributions"}),`
`,n.jsx(e.p,{children:"This repository contributes:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"An explicit end-to-end circuit definition for Decoded Quantum Interferometry"}),`
`,n.jsx(e.li,{children:"Open-source implementation of the DQI circuit pipeline"}),`
`,n.jsx(e.li,{children:"Circuit-level implementations of lookup-table, GJE, and BPQM-based decoders"}),`
`,n.jsx(e.li,{children:"Simulation results on small DQI instances"}),`
`,n.jsx(e.li,{children:"Resource estimation for major DQI circuit components"}),`
`]}),`
`,n.jsx(e.h2,{children:"Links"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/BankNatchapol/DQI-Circuit",children:"GitHub →"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://arxiv.org/abs/2504.18334",children:"arXiv paper →"})}),`
`]})]})}function c(i={}){const{wrapper:e}=i.components||{};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}function s(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{c as default};
