import{j as e}from"./index-DacBBMTh.js";function r(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{children:"Overview"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"AI Novel Writer"})," is a one-shot generation tool that produces a complete, structured novel with character illustrations from a single JSON configuration file. Given a theme, language, characters, and writing style, it generates everything in sequence — title, two-paragraph summary, character profiles, table of contents, chapter introductions, and full section content — with a living character state that updates as the story progresses."]}),`
`,e.jsx(t.p,{children:'Built in 2023 — before LangGraph, before mature agent frameworks, at a time when "context engineering" and "memory management" had to be implemented by hand from raw API calls.'}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"What It Produces"}),`
`,e.jsx(t.p,{children:"From one input file, the tool writes an entire novel:"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Artifact"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Title"}),e.jsx(t.td,{children:"Normalized for the target language"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Summary"}),e.jsx(t.td,{children:"Two-paragraph story overview"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Character profiles"}),e.jsx(t.td,{children:"JSON with traits, relationships, image prompts"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Character illustrations"}),e.jsx(t.td,{children:"AI-generated images per character"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Table of contents"}),e.jsx(t.td,{children:"Structured chapter/section plan"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Chapter content"}),e.jsx(t.td,{children:"Introduced with key topics per chapter"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Section content"}),e.jsx(t.td,{children:"Full prose with dialogue, iteratively extended"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Section illustrations"}),e.jsx(t.td,{children:"Images generated per scene"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Cost report"}),e.jsx(t.td,{children:"Token usage and API cost per generation step"})]})]})]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"Generation Pipeline"}),`
`,e.jsx(t.p,{children:"The tool works through a fixed sequence of 11 specialized prompt functions, each building on the output of the previous:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"summary()"})})," — generates a two-paragraph story overview from user description or free-form AI decision"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"character_contents()"})})," — produces detailed character profiles as structured JSON"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"table_of_contents()"})})," — generates the full chapter/section structure as JSON"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"character_des()"})})," — converts character descriptions into image generation prompts"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"_write_characters_images()"})})," — calls the image model per character"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"chapter_topics()"})})," — lists 3 key topics per chapter; receives previous topics to prevent repetition"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"chapter()"})})," — writes the chapter introduction using recent chapters as context"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"section_topics()"})})," — lists 3–6 topics for each section"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"section()"})})," — writes full section prose with dialogue; iteratively extended with ",e.jsx(t.code,{children:"continue"})," prompts between a configured min/max count"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"_write_img()"})})," — summarizes section text, generates a scene illustration"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"checker()"})})," — post-processes each output to fix language errors and strip repetition"]}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"Context & Memory Engineering"}),`
`,e.jsx(t.p,{children:"The core challenge of generating a coherent novel is that LLMs have no memory across calls. Every piece of narrative continuity had to be engineered explicitly."}),`
`,e.jsx(t.h3,{children:"History-Based Context"}),`
`,e.jsxs(t.p,{children:["Every generation function receives a ",e.jsx(t.code,{children:"history"})," list — a sequence of role/content messages that accumulates the entire book context up to that point:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-python",children:`history = [
  {"role": "system", "content": "<book metadata, summary, characters, TOC>"},
  {"role": "user",   "content": "<previous generation prompt>"},
  {"role": "assistant", "content": "<previous generation output>"},
  ...
]
`})}),`
`,e.jsx(t.p,{children:"Each new prompt is appended to this history before the API call, so the model always writes with full awareness of everything generated before it."}),`
`,e.jsx(t.h3,{children:"Token Budget Management"}),`
`,e.jsxs(t.p,{children:["As the novel grows, the history grows with it. ",e.jsx(t.code,{children:"_check_num_tokens()"})," enforces a hard token limit by removing the oldest messages when the total exceeds the model's context window — a manual sliding window before any framework had this built in. When a prompt itself is too long, ",e.jsx(t.code,{children:"prompt_summarize()"})," compresses it to under 1024 tokens."]}),`
`,e.jsx(t.h3,{children:"Living Character State"}),`
`,e.jsxs(t.p,{children:["Characters are not static descriptions. After each chapter, ",e.jsx(t.code,{children:"update_character_contents()"})," re-reads the prior character JSON and the current chapter content, then writes an updated character state — tracking relationship changes, story developments, and character arc progression. This updated state feeds into all subsequent chapters, so characters behave consistently as the story evolves."]}),`
`,e.jsx(t.h3,{children:"Chapter & Section Continuity"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"chapter()"})})," receives the text of the most recent chapters concatenated as context"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"section()"})})," receives the most recent sections"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"chapter_topics()"})})," and ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"section_topics()"})})," receive previously generated topics to avoid repetitive plot beats"]}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"Multi-Model Orchestration"}),`
`,e.jsx(t.p,{children:"Different tasks are routed to different models based on capability:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Reasoning / structure"})," (summary, TOC, character JSON) → Google Vertex AI (Gemini)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Long-form prose"})," (chapters, sections) → GPT-4 or Claude"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Image generation"})," → DALL·E (OpenAI)"]}),`
`]}),`
`,e.jsxs(t.p,{children:["A unified API layer (",e.jsx(t.code,{children:"callOpenAI()"}),", ",e.jsx(t.code,{children:"callVertexGemini()"}),", ",e.jsx(t.code,{children:"callGemini()"}),", ",e.jsx(t.code,{children:"callClaude()"}),") wraps each platform with consistent retry logic and exponential backoff, so the orchestrator is model-agnostic."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"Resume Capability"}),`
`,e.jsxs(t.p,{children:["All generation state is serialized to ",e.jsx(t.code,{children:"book.json"})," after every step. If the process is interrupted mid-novel, it resumes from the last completed step rather than restarting from scratch — critical for long runs that could take 30+ minutes and cost non-trivial API fees."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"Configuration"}),`
`,e.jsx(t.p,{children:"The input JSON supports anything from minimal to fully specified:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Book metadata: title, theme, language, image style"}),`
`,e.jsx(t.li,{children:"Character definitions with names, traits, and relationship maps"}),`
`,e.jsx(t.li,{children:"Per-chapter and per-section overrides (emotion, section count, image count)"}),`
`,e.jsx(t.li,{children:"Chapter writing templates for consistent prose style"}),`
`,e.jsx(t.li,{children:"Model selection per task"}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"Links"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20AI%20Novel%20Writer",children:"Request a demo →"})}),`
`]})]})}function i(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{i as default};
