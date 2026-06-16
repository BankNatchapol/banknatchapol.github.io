import{j as n}from"./index-CaUCt6u8.js";function t(i){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i.components},{Diagram:s}=e;return s||a("Diagram"),n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Overview"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Deep Speech Data Pipeline"})," is a fully automated data collection system that turns a list of YouTube video URLs into a clean, labeled speech dataset. Given a spreadsheet of video links and target speaker names, the pipeline downloads, standardizes, denoises, diarizes, transcribes, aligns, and segments each video — producing ready-to-train wav files paired with transcripts in a metadata CSV."]}),`
`,n.jsx(e.p,{children:"The pipeline was built to generate high-quality training data for Thai TTS and ASR systems, where no usable public dataset existed."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Pipeline"}),`
`,n.jsx(s,{src:"/diagrams/Youtube2SplittedAudio-Pipeline.excalidraw",caption:"Full pipeline: YouTube video URL → labeled speech segments",scrollable:!0,scrollHeight:"640px"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Stages"}),`
`,n.jsx(e.h3,{children:"1. Input & Deduplication"}),`
`,n.jsxs(e.p,{children:["An Excel file defines the job queue: each row is a ",n.jsx(e.code,{children:"yt_vdo_url"})," + ",n.jsx(e.code,{children:"speaker_name"}),". The pipeline extracts the video ID and skips rows already processed, making re-runs safe."]}),`
`,n.jsx(e.h3,{children:"2. Download & Standardization"}),`
`,n.jsx(e.p,{children:"yt-dlp fetches the best available audio and converts to WAV at 16 kHz. The file then goes through loudness normalization, peak normalization, and format standardization to ensure consistent input for all downstream models."}),`
`,n.jsx(e.h3,{children:"3. Whole-Video Quality Pre-filter (NISQA)"}),`
`,n.jsx(e.p,{children:"Before spending compute on a bad recording, the pipeline splits the full audio into equal chunks and scores each with NISQA (Non-Intrusive Speech Quality Assessment). If the average score falls below 2, the entire video is rejected early — avoiding wasted processing on recordings that won't produce usable segments."}),`
`,n.jsx(e.h3,{children:"4. Denoising (Bandit)"}),`
`,n.jsxs(e.p,{children:["The standardized audio is split into chunks, each passed through the Bandit denoiser, and reassembled into ",n.jsx(e.code,{children:"denoised_youtube_video.wav"}),". Bandit separates speech from background noise without access to a clean reference."]}),`
`,n.jsx(e.h3,{children:"5. Speaker Diarization"}),`
`,n.jsxs(e.p,{children:["A ModelScope CAM++ diarization model segments the denoised audio by speaker, producing timestamped regions: ",n.jsx(e.code,{children:"speaker_0"}),", ",n.jsx(e.code,{children:"speaker_1"}),", ..., ",n.jsx(e.code,{children:"speaker_N"}),"."]}),`
`,n.jsx(e.h3,{children:"6. Speaker Verification & Isolation"}),`
`,n.jsxs(e.p,{children:["A CAM++ speaker verification model scores each diarized segment against the target speaker reference. The segment with the highest similarity is identified as the target; all other speakers are silenced → ",n.jsx(e.code,{children:"video_with_best_speaker.wav"}),"."]}),`
`,n.jsx(e.h3,{children:"7. Middle-Size Segmentation (inaSpeechSegmentor)"}),`
`,n.jsx(e.p,{children:"inaSpeechSegmentor labels the audio as speech or non-speech. A loop then cuts at silence boundaries — targeting chunks that are long enough to be useful but short enough to fit in memory. The silence threshold starts at 0.5 s and decreases by 0.1 s per iteration if no valid cut point is found, guaranteeing a result even on dense speech."}),`
`,n.jsx(e.h3,{children:"8. ASR"}),`
`,n.jsxs(e.p,{children:["Each middle-size segment is transcribed with the Gemini API. If the API call fails, Whisper is used as a fallback. Each segment produces a paired ",n.jsx(e.code,{children:"transcript.txt"}),"."]}),`
`,n.jsx(e.h3,{children:"9. Forced Alignment"}),`
`,n.jsx(e.p,{children:"The transcript and audio for each middle-size segment are aligned with the forced aligner (MFA + Deep Thai Phonemizer), producing a TextGrid with word- and phoneme-level timestamps."}),`
`,n.jsx(e.h3,{children:"10. Small Segment Extraction & Final Quality Filter"}),`
`,n.jsxs(e.p,{children:["TextGrid boundaries are used to cut the audio into the final small segments, with an algorithm that ensures each clip stays within a valid duration range. Each clip is scored by NISQA — clips below 2 are rejected. Surviving clips are saved as ",n.jsx(e.code,{children:"final_small_file_segment_n.wav"})," alongside a ",n.jsx(e.code,{children:"metadata.csv"})," mapping each filename to its transcript."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Output"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"File"}),n.jsx(e.th,{children:"Contents"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"final_small_file_segment_n.wav"})}),n.jsx(e.td,{children:"Clean, aligned speech clip"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"metadata.csv"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"filepath, transcript"})," pairs ready for training"]})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Design Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Multiprocessing throughout"})," — download, denoise, ASR, and alignment stages all run in parallel workers, not serially"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Fail-fast quality gates"})," — NISQA at whole-video level rejects bad recordings before any expensive processing runs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dual ASR strategy"})," — Gemini primary, Whisper fallback, so the pipeline never stalls on a single API"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Adaptive silence threshold"})," — guarantees valid segment boundaries even on continuous speech"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{children:"Links"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"mailto:natchapol.pat@gmail.com?subject=Demo%20request%20%E2%80%94%20Deep%20Speech%20Data%20Pipeline",children:"Request a demo →"})}),`
`]})]})}function d(i={}){const{wrapper:e}=i.components||{};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}function a(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{d as default};
