import{j as e}from"./index-B3NabJkc.js";function t(i){const n={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"QIMX"})," (Quantum Information Mixer) is an enhanced quantum image encoding scheme built during the Qiskit Quantum Hackathon 2024 Taiwan, where it won the ",e.jsx(n.strong,{children:"Industry Prize"}),"."]}),`
`,e.jsx(n.p,{children:"The project introduces a quantum information mixer layer into the image encoding pipeline, improving the expressibility of the quantum state representation and achieving faster convergence rates in downstream machine learning tasks compared to standard amplitude encoding."}),`
`,e.jsx(n.h2,{children:"Motivation"}),`
`,e.jsx(n.p,{children:"Classical image data encoded naively into quantum states often suffers from poor feature separation in the Hilbert space — similar pixels map to states that are hard to distinguish under quantum measurement. QIMX addresses this by applying a learned unitary mixing step after initial encoding, analogous to a feature projection layer in classical networks but implemented as a parametrised quantum circuit."}),`
`,e.jsx(n.h2,{children:"Approach"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Encoding"})," — pixel values are mapped to qubit amplitudes via standard amplitude encoding"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mixing"})," — a parametrised QIMX unitary layer redistributes information across qubits, improving the geometry of the encoded state space"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Measurement"})," — expectation values are used as features for a hybrid classical–quantum classifier"]}),`
`]}),`
`,e.jsx(n.p,{children:"The mixing unitary is trained end-to-end alongside the classical head, optimised for classification accuracy on the target dataset."}),`
`,e.jsx(n.h2,{children:"Results"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Faster convergence compared to standard amplitude encoding on benchmark image datasets"}),`
`,e.jsx(n.li,{children:"Competitive accuracy with a shallower overall circuit depth"}),`
`,e.jsxs(n.li,{children:["Awarded ",e.jsx(n.strong,{children:"Industry Prize"})," at Qiskit Quantum Hackathon 2024 Taiwan (Aug 2024)"]}),`
`]}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/BankNatchapol/QIMX",children:"GitHub →"})}),`
`]})]})}function s(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as default};
