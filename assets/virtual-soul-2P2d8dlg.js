import{j as e}from"./index-CdAuElqe.js";function r(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"VirtualSoul"})," is an autonomous AI VTuber desktop application — a character avatar that streams live on YouTube and Twitch 24 hours a day without a human behind the keyboard. It reads incoming chat messages, generates in-character responses via LLM, speaks them in Thai with sub-second latency TTS, and drives a VTube Studio avatar with synchronized animations. When chat goes silent, it generates its own monologue to keep the stream alive."]}),`
`,e.jsx(n.p,{children:'Built in 2023 — before LangChain, before AutoGen, before the term "agentic AI" was widely used. Everything was engineered from scratch: the agent harness, the context system, the memory architecture, the multi-subprocess coordination.'}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Architecture: Multiple Agents Cooperating"}),`
`,e.jsx(n.p,{children:"The system runs five concurrent agents, each in its own subprocess, coordinated by a central harness:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Agent"}),e.jsx(n.th,{children:"Role"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"LLM agent"})," (GPT-4 via Flask)"]}),e.jsx(n.td,{children:"Generates character responses"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"TTS agent"})," (Azure Neural TTS)"]}),e.jsx(n.td,{children:"Synthesizes Thai speech from text"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"STT agent"})}),e.jsx(n.td,{children:"Converts microphone input to text"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Chat reader"})," (YouTube / Twitch)"]}),e.jsx(n.td,{children:"Ingests live chat messages"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Avatar controller"})," (VTube Studio)"]}),e.jsx(n.td,{children:"Triggers animations and facial parameters"})]})]})]}),`
`,e.jsxs(n.p,{children:["The harness (",e.jsx(n.code,{children:"wAIfu"}),") monitors all subprocess states, respawns crashed agents, and manages the shared command queue — so the stream never goes down even if a single service fails."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"The Main Loop"}),`
`,e.jsx(n.p,{children:"Every cycle:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Get input"})," — poll live chat, or fall back to monologue if chat is silent"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sanitize"})," — filter bad words, deduplicate repeated messages"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Build prompt"})," — inject long-term persona + short-term conversation history"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LLM call"})," — generate in-character response"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TTS"})," — synthesize Thai speech; interrupt if a higher-priority message arrives"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Avatar"})," — fire VTube Studio hotkeys for lip sync and emotion animations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Store"})," — append exchange to short-term memory"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Harness, Context & Memory Engineering"}),`
`,e.jsx(n.p,{children:"This was the core engineering challenge — getting a consistent, believable, low-latency character without any agent framework to lean on."}),`
`,e.jsx(n.h3,{children:"Context Engineering"}),`
`,e.jsx(n.p,{children:"Each LLM prompt is assembled from three layers:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Character persona"})," — name, gender, personality traits, speaking style, characteristic topics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Language rules"})," — explicit Thai politeness particles (ครับ / ค่ะ), tone constraints, what the character does and does not talk about"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example dialogues"})," — few-shot examples that anchor the character voice"]}),`
`]}),`
`,e.jsx(n.h3,{children:"Memory"}),`
`,e.jsx(n.p,{children:"A dual-tier memory system keeps the character coherent across long streams:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Long-term memory"}),": Character definition, personality, and behavioral rules — constant across the session"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Short-term memory"}),": Last 4 exchanges stored as ",e.jsx(n.code,{children:"[Chatter]: message / [Character]: response"})," pairs"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Before every LLM call, ",e.jsx(n.code,{children:"flattenMemory()"})," concatenates them: ",e.jsx(n.code,{children:"long_term + recent_context + short_term_exchanges"}),". This gives the model enough history to maintain conversational continuity without blowing up the context window."]}),`
`,e.jsx(n.h3,{children:"Monologue Fallback"}),`
`,e.jsx(n.p,{children:"When no chat arrives, the harness triggers self-generated monologue: the character picks a topic from its configured interest list and produces unprompted commentary — keeping the stream engaging during dead air."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Character Interaction"}),`
`,e.jsx(n.p,{children:"Responses are shaped by two signals:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Watcher input"})," — direct chat messages, moderator commands, TTS requests"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Response semantics"})," — the character's ",e.jsx(n.code,{children:"craziness"})," and ",e.jsx(n.code,{children:"creativity"})," parameters tune how far the LLM drifts from the literal prompt, producing personality variation per response"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Moderators can send real-time commands (",e.jsx(n.code,{children:"!reload"}),", ",e.jsx(n.code,{children:"!say"}),", ",e.jsx(n.code,{children:"!pause"}),") that the harness interprets directly, without going through the LLM."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Control Panel"}),`
`,e.jsx(n.p,{children:"A desktop UI (Electron + WebSocket) gives the streamer full control without stopping the stream:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Switch between ",e.jsx(n.strong,{children:"text input"}),", ",e.jsx(n.strong,{children:"voice input"}),", and ",e.jsx(n.strong,{children:"live chat"})," modes"]}),`
`,e.jsx(n.li,{children:"Configure character name, persona, language, and speaking style"}),`
`,e.jsx(n.li,{children:"Set TTS pitch, speed, and expressiveness"}),`
`,e.jsx(n.li,{children:"Toggle YouTube and Twitch chat simultaneously"}),`
`,e.jsx(n.li,{children:"Connect / reconnect VTube Studio"}),`
`,e.jsx(n.li,{children:"Pause and resume the agent loop"}),`
`]}),`
`,e.jsx(n.p,{children:"All changes propagate to the running harness in real time via WebSocket messages."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20VirtualSoul",children:"Request a demo →"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/BankNatchapol/NekoDesktopApp",children:"GitHub →"})}),`
`]})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{i as default};
