import{j as e}from"./index-CRRJTpJk.js";function t(s){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs("figure",{style:{margin:"0 0 48px",borderRadius:"8px",overflow:"hidden",border:"1px solid var(--paper-edge)"},children:[e.jsx("img",{src:"/images/nekoai.jpg",alt:"VirtualSoul — Neko-Chan live on YouTube playing Gartic drawing game",style:{width:"100%",display:"block"}}),e.jsx("figcaption",{style:{fontFamily:"var(--font-mono)",fontSize:"13px",color:"var(--ink-500)",textAlign:"center",padding:"10px 12px",fontStyle:"italic",letterSpacing:"0.03em"},children:"Neko-Chan live on YouTube — drawing game stream (Gartic.io)"})]}),`
`,e.jsx(n.h2,{children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"VirtualSoul"})," is an autonomous AI VTuber desktop application — a character avatar that streams live on YouTube and Twitch 24 hours a day without a human behind the keyboard. It reads incoming chat messages, generates in-character responses via LLM, speaks them in Thai with sub-second latency TTS, and drives a VTube Studio avatar with synchronized animations. When chat goes silent, it generates its own monologue to keep the stream alive."]}),`
`,e.jsx(n.p,{children:'Built in 2023 — before LangChain, before AutoGen, before the term "agentic AI" was widely used. Everything was engineered from scratch: the agent harness, the context system, the memory architecture, the multi-subprocess coordination.'}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Architecture: multiple agents cooperating"}),`
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
`,e.jsx(n.h2,{children:"Harness, context and memory engineering"}),`
`,e.jsx(n.p,{children:"This was the core engineering challenge — getting a consistent, believable, low-latency character without any agent framework to lean on. Every tool that exists in modern agentic stacks had to be built by hand."}),`
`,e.jsx(n.h3,{children:"SubProc — Process Manager"}),`
`,e.jsxs(n.p,{children:["Each agent runs as a ",e.jsx(n.code,{children:"SubProc"})," instance tracking its OS process, API URL, and ",e.jsx(n.code,{children:"running"})," state. When a subprocess crashes mid-stream, ",e.jsx(n.code,{children:"reinit()"})," rebuilds the full runtime — reloads config, re-detects devices, respawns all processes with an incremented cycle counter — without touching the ongoing session."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class SubProc {
  process = null;  api_url = '';  running = false;
  constructor(port) { this.api_url = port; }
}
`})}),`
`,e.jsx(n.h3,{children:"Context Engineering"}),`
`,e.jsx(n.p,{children:"Each LLM prompt is assembled from three layers before every call:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Character persona"})," — name, gender, personality traits, speaking style, characteristic topics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Language rules"})," — explicit Thai politeness particles (ครับ / ค่ะ), tone constraints, hard limits on what the character discusses"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Example dialogues"})," — few-shot examples that anchor the character voice and response format"]}),`
`]}),`
`,e.jsx(n.h3,{children:"flattenMemory() — Context Assembler"}),`
`,e.jsx(n.p,{children:"A dual-tier memory system keeps the character coherent across long streams. Before every LLM call, a single function assembles the full context window:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function flattenMemory(additional) {
  while (wAIfu.memory.short_term.length > 4) {
    wAIfu.memory.short_term.shift();
  }
  return wAIfu.memory.long_term + additional
       + wAIfu.memory.short_term.join('');
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Long-term"}),": Character definition and behavioral rules — constant across the session"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Short-term"}),": Last 4 ",e.jsx(n.code,{children:"[Chatter]: msg / [Character]: response"})," exchange pairs — trimmed automatically to keep context within budget"]}),`
`]}),`
`,e.jsx(n.h3,{children:"Chat Sanitizers"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getTwitchChatOrNothing()"})," and ",e.jsx(n.code,{children:"getYoutubeChatOrNothing()"})," are identical in contract but different in transport — Twitch uses a live WebSocket feed while YouTube chat is written to ",e.jsx(n.code,{children:"./youtube/msg.txt"})," and watched with Chokidar. Both apply the same pipeline: blacklist check → deduplication → command-prefix filter → return sanitized ",e.jsx(n.code,{children:"{ text, sender }"})," or nothing."]}),`
`,e.jsx(n.h3,{children:"TTS Interrupt"}),`
`,e.jsxs(n.p,{children:["When a higher-priority message arrives while the character is speaking, ",e.jsx(n.code,{children:"wsINTERRUPT"})," hits the TTS subprocess's ",e.jsx(n.code,{children:"/interrupt"})," endpoint and immediately clears the live caption file — cutting speech mid-sentence and starting the new response. This was essential for keeping latency low when chat moved fast."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`fetch(TTS.api_url + '/interrupt').then(() => {
  fs.writeFileSync('./captions/transcript.txt', '');
});
`})}),`
`,e.jsx(n.h3,{children:"WebSocket Command Router"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"handleSocketMessage"})," routes 8 command types from the control panel UI to the running harness in real time — no restart needed:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"MSG"})," · ",e.jsx(n.code,{children:"CONFIG"})," · ",e.jsx(n.code,{children:"CHARA"})," · ",e.jsx(n.code,{children:"DEVICE"})," · ",e.jsx(n.code,{children:"START_VOICE_INPUT"})," · ",e.jsx(n.code,{children:"STOP_VOICE_INPUT"})," · ",e.jsx(n.code,{children:"START_LIVE"})," · ",e.jsx(n.code,{children:"STOP_LIVE"})," · ",e.jsx(n.code,{children:"VTUBE_CONNECT"})," · ",e.jsx(n.code,{children:"VTUBE_SET_DEFAULT"})]}),`
`,e.jsx(n.h3,{children:"VTube Studio Bridge"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"vtubeTriggerHotkey()"})," looks up hotkey IDs from a pre-cached ",e.jsx(n.code,{children:"hotkey_map"})," and fires them via the VTube Studio WebSocket API. During singing, ",e.jsx(n.code,{children:"vtubeDance1()"})," and ",e.jsx(n.code,{children:"vtubeDance2()"})," drive real-time facial parameters (",e.jsx(n.code,{children:"FaceAngleX/Y/Z"}),") through choreographed step arrays — each loop checks ",e.jsx(n.code,{children:"wAIfu.is_singing"})," and exits cleanly if the singing mode is cancelled."]}),`
`,e.jsx(n.h3,{children:"Monologue Fallback"}),`
`,e.jsx(n.p,{children:"When no chat arrives, the harness picks a topic from the character's interest list and generates unprompted commentary — keeping the stream from going silent without any human input."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Character interaction"}),`
`,e.jsx(n.p,{children:"Responses are shaped by two signals:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Watcher input"})," — direct chat messages, moderator commands, TTS requests"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Response semantics"})," — the character's ",e.jsx(n.code,{children:"craziness"})," and ",e.jsx(n.code,{children:"creativity"})," parameters tune how far the LLM drifts from the literal prompt, producing personality variation per response"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Moderators can send real-time commands (",e.jsx(n.code,{children:"!reload"}),", ",e.jsx(n.code,{children:"!say"}),", ",e.jsx(n.code,{children:"!pause"}),") that the harness interprets directly, without going through the LLM."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Control panel"}),`
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
`,e.jsx(n.h2,{children:"Game integration"}),`
`,e.jsxs(n.p,{children:["Beyond conversation, the character can actively participate in games — giving it something to ",e.jsx(n.em,{children:"do"})," on stream rather than just reacting to chat."]}),`
`,e.jsx(n.h3,{children:"Drawing Game (Gartic.io)"}),`
`,e.jsx(n.p,{children:"A custom drawing engine controls the mouse to draw on the Gartic canvas. The character receives a word prompt, generates a drawing plan, and executes it through programmatic mouse movements — producing recognizable (if imperfect) drawings that the audience can guess. The drawing behavior is part of the character's persona, not a generic bot."}),`
`,e.jsx(n.h3,{children:"GeoGuessr"}),`
`,e.jsx(n.p,{children:"A vision pipeline takes screenshots of the game's street view, passes them to GPT-4V for scene analysis — reading signs, vegetation, road markings, architecture — and generates a location guess with reasoning. The character narrates its thought process live in Thai as it looks for clues, making the reasoning part of the entertainment."}),`
`,e.jsx(n.h3,{children:"Architecture"}),`
`,e.jsx(n.p,{children:"Both integrations share the same harness loop — game state is just another input type, and the character's response (speech + action) flows through the same LLM → TTS → avatar pipeline. Each game has its own module that translates game state into prompts and translates LLM output back into physical actions (mouse draw, map click)."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20VirtualSoul",children:"Request a demo →"})}),`
`]})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{i as default};
