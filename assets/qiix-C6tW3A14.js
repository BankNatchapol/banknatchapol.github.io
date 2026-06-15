import{j as e}from"./index-DPW73IpJ.js";const l=["0","10","20","30","40","50","60","70","80","90","100","110","120","130","140"],t={labels:l,series:[{label:"Without mixer",data:[.7502,.6564,.6058,.5765,.5543,.5367,.5229,.513,.5065,.502,.4987,.4959,.4924,.4881,.4826]},{label:"With QFT mixer",data:[.695,.6101,.5707,.5456,.5255,.5116,.5033,.4975,.4918,.4862,.4813,.4765,.4716,.467,.4637]}]};function a(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i.components},{Diagram:s,HandwrittenLineChart:r}=n;return s||o("Diagram"),r||o("HandwrittenLineChart"),e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Qiix"})," stands for improved ",e.jsx(n.strong,{children:"Q"}),"uantum ",e.jsx(n.strong,{children:"i"}),"mage encoding for quantum machine learning with ",e.jsx(n.strong,{children:"i"}),"nformation mi",e.jsx(n.strong,{children:"x"}),"er. The project proposes adding an information mixer layer — built from QFT and QSVT — after FRQI image encoding, enabling the quantum state to carry globally-mixed pixel information rather than per-pixel local amplitude values."]}),`
`,e.jsxs(n.p,{children:["Built at ",e.jsx(n.strong,{children:"Qiskit Quantum Hackathon 2024 Taiwan"})," (Group 12) and awarded the ",e.jsx(n.strong,{children:"Industry Prize"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Team:"}),` Natchapol Patamawisut, Chih-Hao, Zih-Chao Hong, Aninda Astuti, Xiang-Yu Wen
`,e.jsx(n.strong,{children:"Mentor:"})," Yen Jui Chang"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Background"}),`
`,e.jsx(n.h3,{children:"FRQI — Flexible Representation of Quantum Images"}),`
`,e.jsx(n.p,{children:"FRQI encodes a 2ⁿ × 2ⁿ grayscale image into a single quantum state by mapping each pixel's intensity to a rotation angle. The position is stored in the computational basis and the pixel value in the amplitude:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`|I(θ)⟩ = (1/2ⁿ) Σᵢ (sin θᵢ |0⟩ + cos θᵢ |1⟩) ⊗ |i⟩
`})}),`
`,e.jsxs(n.p,{children:["The result is a superposition of the form ",e.jsx(n.code,{children:"PixelValue₀|00⟩ + PixelValue₁|01⟩ + …"})," — compact but local: each basis state encodes exactly one pixel."]}),`
`,e.jsx(n.h3,{children:"NEQR — Novel Enhanced Quantum Representation"}),`
`,e.jsx(n.p,{children:"NEQR uses the basis state of a qubit sequence to store grayscale values directly:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`|I⟩ = (1/2ⁿ) Σᵧ Σₓ |f(y,x)⟩ |yx⟩
`})}),`
`,e.jsx(n.p,{children:"Both FRQI and NEQR were implemented and verified by reconstructing images from quantum state measurements."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"The Mixer Concept"}),`
`,e.jsxs(n.p,{children:["Classical convolution only aggregates ",e.jsx(n.strong,{children:"neighboring"})," pixels. Attention mechanisms (transformers) aggregate ",e.jsx(n.strong,{children:"all"})," positions — but at quadratic cost. ",e.jsx(n.strong,{children:"FNet"}),' showed that replacing attention with a fixed Fourier transform (a "mixer") achieves comparable performance while being much more efficient.']}),`
`,e.jsxs(n.p,{children:["Inspired by FNet and the quantum transformer model ",e.jsx(n.strong,{children:"Quixer"})," (QUantum mIXER — using LCU + QSVT as building blocks), we apply the same principle to quantum image encoding: after FRQI, apply a quantum mixer so that each component of the resulting state contains information from all pixels, not just one."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Proposed Method"}),`
`,e.jsx(s,{src:"/diagrams/QIIX.excalidraw",caption:"FRQI → Mixer (QFT + QSVT) pipeline",maxWidth:"700px"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FRQI"}),": encodes image pixels into quantum amplitudes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"QFT"}),": mixes pixel values across all positions (analogous to Fourier mixing in FNet)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"QSVT"}),": applies a non-linear transformation on the singular values, further enriching the representation"]}),`
`]}),`
`,e.jsx(n.p,{children:"The mixer is a drop-in module that sits between encoding and the downstream quantum ML circuit."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Full Workflow"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Input image → FRQI → Mixer (QFT + QSVT) → Feed Forward → Measurement → Cost function → Update
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Optimizer:"})," Adam"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gradient method:"})," Finite difference gradient"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cost function:"})," Binary cross entropy"]}),`
`]}),`
`,e.jsx(n.p,{children:"We compared two settings:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FRQI → Feed Forward"})," (baseline)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"FRQI + Mixer → Feed Forward"})," (Qiix)"]}),`
`]}),`
`,e.jsx(n.p,{children:"Both on an ideal simulator and on a noisy simulator (IBM Nazca noise model)."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Results"}),`
`,e.jsx(n.p,{children:"Test loss on NEQR-encoded images, measured every 10 training iterations (140 total)."}),`
`,e.jsx(r,{title:"NEQR — Test Loss",xLabels:t.labels,yLabel:"test loss",series:t.series}),`
`,e.jsx(n.p,{children:"Adding the QFT information mixer consistently reduces test loss throughout training. Both models converge, but the QFT mixer reaches a lower final loss (~0.464 vs ~0.483 at iteration 140)."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Discussion & Future Work"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Mixer consistently improves convergence in the noise-free regime"}),`
`,e.jsx(n.li,{children:"Noise sensitivity is the main barrier on current hardware — addressable via parameter-shift gradients or noise-aware compilation"}),`
`,e.jsx(n.li,{children:"Potential extensions: incorporating the mixer into NEQR, QPIE, or other encoding schemes; exploring linear or LCU-based mixer implementations; reducing circuit depth"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/BankNatchapol/QIMX",children:"GitHub →"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.keio.ac.jp/ja/sfc-pem/news/20241017-1/",children:"Hackathon Award (Keio news) ↗"})}),`
`]})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}function o(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
