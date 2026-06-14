import{j as e}from"./index-BO6FGgN7.js";function i(r){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"surfsim"})," is a GPU-accelerated simulator for the surface code, a leading candidate for fault-tolerant quantum error correction. The goal was to simulate a distance-21 patch — 441 data qubits and 440 ancilla qubits — at syndrome-extraction rates matching real hardware. Existing CPU simulators are too slow at this scale."]}),`
`,e.jsx(n.h2,{children:"How It Works"}),`
`,e.jsx(n.p,{children:"Syndrome extraction on a planar patch is embarrassingly parallel: each stabilizer measurement is independent, so every ancilla qubit is processed by its own CUDA thread per round. Error propagation is encoded as a sparse binary matrix-vector product over GF(2), mapped onto warp-level ballot instructions."}),`
`,e.jsx(n.p,{children:"Pauli channel noise is applied via a lookup-table kernel using cuRAND in-place. The full syndrome history for one Monte Carlo trial lives in a contiguous ring buffer in device memory, so the decoder receives syndrome diffs with no host round-trip."}),`
`,e.jsx(n.h2,{children:"Results"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"~10⁷ Monte Carlo trials/second at d=7 on an NVIDIA A100"}),`
`,e.jsx(n.li,{children:"~3 × 10⁵ trials/second at d=21"}),`
`,e.jsx(n.li,{children:"4× reduction in shared-memory bank conflicts vs. row-major layout via Z-order (Morton) curve indexing"}),`
`]}),`
`,e.jsx(n.h2,{children:"Stack"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CUDA"})," · ",e.jsx(n.code,{children:"C++"})," · ",e.jsx(n.code,{children:"pybind11"})," · ",e.jsx(n.code,{children:"Python"})]}),`
`]}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/BankNatchapol/surfsim",children:"GitHub →"})}),`
`]})]})}function a(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{a as default};
