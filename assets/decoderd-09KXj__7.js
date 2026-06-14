import{j as e}from"./index-DP9pWlCN.js";function t(r){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"decoderd"})," is a low-latency decoder daemon designed to sit between the classical control stack and the quantum error correction cycle. Syndrome data arrives every ~1 µs per surface-code round, and the decoder must return a correction within 2–5 µs to avoid back-action. Standard socket I/O introduces kernel jitter pushing latency into the tens of microseconds — ",e.jsx(n.code,{children:"decoderd"})," eliminates this with POSIX shared memory as the data transport."]}),`
`,e.jsx(n.h2,{children:"How It Works"}),`
`,e.jsxs(n.p,{children:["At startup the daemon memory-maps a fixed-size ring buffer shared with the control stack process. Syndrome packets are written directly into this buffer by the FPGA driver. ",e.jsx(n.code,{children:"decoderd"})," spins on an atomic lock-free sentinel rather than blocking on ",e.jsx(n.code,{children:"recv()"}),", avoiding syscall overhead entirely."]}),`
`,e.jsx(n.p,{children:"The correction is written back as a 1-byte Pauli frame update. Each frame uses a simple binary protocol: 2-byte magic number, 2-byte syndrome-round counter, variable-length syndrome bitstring. Serialisation overhead is under 50 ns per frame."}),`
`,e.jsx(n.h2,{children:"Results"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Average round-trip latency under ",e.jsx(n.strong,{children:"800 ns"})," (vs. ~12 µs for Unix socket equivalent)"]}),`
`,e.jsx(n.li,{children:"CPU affinity pinned; ring buffer resident in L3 cache"}),`
`,e.jsx(n.li,{children:"Decoder algorithm (union-find) is a pure Rust library crate with zero unsafe code"}),`
`]}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/BankNatchapol/decoderd",children:"GitHub →"})}),`
`]})]})}function s(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{s as default};
