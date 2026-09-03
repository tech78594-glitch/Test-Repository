<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Readback</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap">
<script src="https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js"></script>
<style>
  :root {
    --bg: #F1F3F5;
    --surface: #FFFFFF;
    --surface-2: #F5F7F9;
    --ink: #171A1F;
    --muted: #565E6A;
    --border: #DBDFE4;
    --accent: #1C6E68;
    --accent-ink: #FFFFFF;
    --conf-med: #B4761A;
    --conf-low: #B23B2E;
    --scan: rgba(28, 110, 104, 0.16);
    --shadow: 0 1px 2px rgba(20, 24, 31, .06), 0 12px 32px rgba(20, 24, 31, .10);

    --step--1: 0.8125rem;
    --step-0: 0.9375rem;
    --step-1: 1.0625rem;
    --step-2: 1.375rem;

    --sans: "IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    --mono: "IBM Plex Mono", ui-monospace, "SFMono-Regular", "Cascadia Mono", Menlo, monospace;
    --display: "Bricolage Grotesque", var(--sans);
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg: #101317;
      --surface: #181C22;
      --surface-2: #1E242B;
      --ink: #E7E9EC;
      --muted: #98A1AC;
      --border: #2B313A;
      --accent: #3DA69D;
      --accent-ink: #0A1211;
      --conf-med: #D69A44;
      --conf-low: #E0695C;
      --scan: rgba(61, 166, 157, 0.20);
      --shadow: 0 1px 2px rgba(0, 0, 0, .3), 0 14px 36px rgba(0, 0, 0, .45);
    }
  }

  :root[data-theme="dark"] {
    --bg: #101317;
    --surface: #181C22;
    --surface-2: #1E242B;
    --ink: #E7E9EC;
    --muted: #98A1AC;
    --border: #2B313A;
    --accent: #3DA69D;
    --accent-ink: #0A1211;
    --conf-med: #D69A44;
    --conf-low: #E0695C;
    --scan: rgba(61, 166, 157, 0.20);
    --shadow: 0 1px 2px rgba(0, 0, 0, .3), 0 14px 36px rgba(0, 0, 0, .45);
  }

  * { box-sizing: border-box; }

  html, body { height: 100%; }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--ink);
    font-family: var(--sans);
    font-size: var(--step-0);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ---------- Titlebar ---------- */
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 20px;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    flex-wrap: wrap;
  }

  .brand { display: flex; align-items: baseline; gap: 10px; }

  .brand svg { width: 20px; height: 20px; align-self: center; color: var(--accent); }

  .brand h1 {
    margin: 0;
    font-family: var(--display);
    font-weight: 700;
    font-size: var(--step-2);
    letter-spacing: -0.025em;
  }

  .brand .tag {
    color: var(--muted);
    font-size: var(--step--1);
    letter-spacing: 0.01em;
  }

  .controls { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }

  label.field {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: var(--step--1);
    color: var(--muted);
  }

  select {
    font-family: var(--sans);
    font-size: var(--step--1);
    color: var(--ink);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 7px 10px;
    cursor: pointer;
  }

  .btn {
    font-family: var(--sans);
    font-size: var(--step--1);
    font-weight: 500;
    color: var(--ink);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px 13px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    white-space: nowrap;
    transition: background .15s, border-color .15s, opacity .15s;
  }

  .btn:hover:not(:disabled) { background: var(--surface-2); }

  .btn.primary {
    background: var(--accent);
    color: var(--accent-ink);
    border-color: var(--accent);
  }

  .btn.primary:hover:not(:disabled) { filter: brightness(1.06); background: var(--accent); }

  .btn:disabled { opacity: .45; cursor: default; }

  .btn.icon { padding: 8px; }

  .btn svg { width: 15px; height: 15px; }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* ---------- Workspace ---------- */
  main {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
    min-height: 0;
  }

  .bed {
    background: var(--bg);
    padding: 24px;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .bed.drag::after {
    content: "";
    position: absolute;
    inset: 12px;
    border: 2px dashed var(--accent);
    border-radius: 12px;
    background: var(--scan);
    pointer-events: none;
  }

  .empty {
    text-align: center;
    max-width: 340px;
    color: var(--muted);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .empty .plate { width: 84px; height: 84px; color: var(--ink); opacity: .28; }

  .empty h2 {
    margin: 0;
    font-family: var(--display);
    font-weight: 600;
    font-size: var(--step-1);
    color: var(--ink);
    letter-spacing: -0.01em;
  }

  .empty p { margin: 0; font-size: var(--step--1); }

  .empty kbd {
    font-family: var(--mono);
    font-size: 0.75rem;
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 5px;
    padding: 1px 6px;
  }

  .frame {
    position: relative;
    display: inline-block;
    line-height: 0;
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    max-width: 100%;
  }

  .frame img {
    display: block;
    max-width: 100%;
    max-height: 64vh;
    width: auto;
    height: auto;
  }

  .frame .overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .overlay rect { vector-effect: non-scaling-stroke; stroke-width: 1.4; }
  .overlay .w-hi { stroke: var(--accent); fill: var(--accent); fill-opacity: .07; stroke-opacity: .55; }
  .overlay .w-med { stroke: var(--conf-med); fill: var(--conf-med); fill-opacity: .09; stroke-opacity: .7; }
  .overlay .w-low { stroke: var(--conf-low); fill: var(--conf-low); fill-opacity: .11; stroke-opacity: .8; }

  .frame.scanning::before {
    content: "";
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    top: 0;
    background: var(--accent);
    box-shadow: 0 0 14px 3px var(--accent);
    animation: sweep 1.5s ease-in-out infinite alternate;
    z-index: 2;
  }

  @keyframes sweep { from { top: 2%; } to { top: 98%; } }

  @media (prefers-reduced-motion: reduce) {
    .frame.scanning::before { animation: none; opacity: .6; }
    .frame.scanning { animation: pulse 1.4s ease-in-out infinite; }
    @keyframes pulse { 50% { opacity: .72; } }
  }

  /* ---------- Readout ---------- */
  .readout {
    background: var(--surface);
    display: flex;
    flex-direction: column;
    min-height: 0;
  }

  .toolbar {
    display: flex;
    align-items: center;
    gap: 10px 14px;
    padding: 11px 16px;
    border-bottom: 1px solid var(--border);
    flex-wrap: wrap;
    font-size: var(--step--1);
    color: var(--muted);
  }

  .toolbar .spacer { flex: 1; }

  .stat { font-variant-numeric: tabular-nums; white-space: nowrap; }
  .stat b { color: var(--ink); font-weight: 600; }

  .conf {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
  .conf .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--muted); }
  .conf.hi .dot { background: var(--accent); }
  .conf.med .dot { background: var(--conf-med); }
  .conf.low .dot { background: var(--conf-low); }

  .toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    user-select: none;
  }
  .toggle input { accent-color: var(--accent); width: 14px; height: 14px; }

  #output {
    flex: 1;
    width: 100%;
    border: 0;
    resize: none;
    background: var(--surface);
    color: var(--ink);
    font-family: var(--mono);
    font-size: 0.875rem;
    line-height: 1.65;
    padding: 18px;
    min-height: 0;
  }
  #output:focus { outline: none; box-shadow: inset 0 0 0 2px var(--accent); }
  #output::placeholder { color: var(--muted); }

  /* ---------- Status bar ---------- */
  footer {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 9px 20px;
    background: var(--surface);
    border-top: 1px solid var(--border);
    font-size: var(--step--1);
    color: var(--muted);
  }

  .track {
    flex: 1;
    max-width: 300px;
    height: 4px;
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 3px;
    overflow: hidden;
  }
  .track .bar {
    height: 100%;
    width: 0%;
    background: var(--accent);
    transition: width .3s ease;
  }

  #statusText { font-variant-numeric: tabular-nums; }

  .legend { display: inline-flex; gap: 12px; white-space: nowrap; }
  .legend span { display: inline-flex; align-items: center; gap: 5px; }
  .legend i { width: 9px; height: 9px; border-radius: 2px; display: inline-block; }
  .legend .hi { background: var(--accent); }
  .legend .med { background: var(--conf-med); }
  .legend .low { background: var(--conf-low); }

  @media (max-width: 880px) {
    body { overflow: auto; }
    main {
      grid-template-columns: 1fr;
      grid-auto-rows: minmax(280px, auto);
    }
    .frame img { max-height: 48vh; }
    #output { min-height: 260px; }
    footer { flex-wrap: wrap; }
    .legend { order: 3; width: 100%; }
  }
</style>
</head>
<body>
  <header>
    <div class="brand">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" stroke-width="1.6"/>
        <path d="M7 8.5h10M7 12h10M7 15.5h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
      <h1>Readback</h1>
      <span class="tag">optical character recognition, in the browser</span>
    </div>
    <div class="controls">
      <label class="field" for="lang">Language
        <select id="lang">
          <option value="eng" selected>English</option>
          <option value="spa">Spanish</option>
          <option value="fra">French</option>
          <option value="deu">German</option>
          <option value="ita">Italian</option>
          <option value="por">Portuguese</option>
          <option value="nld">Dutch</option>
          <option value="rus">Russian</option>
          <option value="ara">Arabic</option>
          <option value="hin">Hindi</option>
          <option value="jpn">Japanese</option>
          <option value="kor">Korean</option>
          <option value="chi_sim">Chinese — Simplified</option>
          <option value="chi_tra">Chinese — Traditional</option>
        </select>
      </label>
      <button class="btn icon" id="themeBtn" title="Toggle theme" aria-label="Toggle theme">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6 6 4.5 4.5M19.5 19.5 18 18M18 6l1.5-1.5M4.5 19.5 6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="3.6" stroke="currentColor" stroke-width="1.6"/></svg>
      </button>
      <button class="btn primary" id="runBtn" disabled>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h4l2 5 4-13 2 8h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Recognize
      </button>
    </div>
  </header>

  <main>
    <section class="bed" id="bed" aria-label="Image">
      <div class="empty" id="empty">
        <svg class="plate" viewBox="0 0 96 96" fill="none" aria-hidden="true">
          <rect x="18" y="10" width="52" height="66" rx="4" stroke="currentColor" stroke-width="3"/>
          <path d="M28 26h32M28 38h32M28 50h22" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          <path d="M40 66 62 66 62 88 71 79 80 88 80 60 62 60" fill="var(--bg)" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
        </svg>
        <h2>Drop an image here</h2>
        <p>A photo, screenshot, or scan. Or press <kbd>⌘/Ctrl</kbd> + <kbd>V</kbd> to paste, or <button class="btn" id="browseBtn" style="padding:4px 10px">browse files</button></p>
      </div>
    </section>

    <section class="readout" aria-label="Recognized text">
      <div class="toolbar">
        <span class="stat"><b id="sWords">0</b> words</span>
        <span class="stat"><b id="sChars">0</b> chars</span>
        <span class="stat"><b id="sLines">0</b> lines</span>
        <span class="conf" id="confBadge"><span class="dot"></span><span id="confText">—</span></span>
        <span class="spacer"></span>
        <label class="toggle"><input type="checkbox" id="boxesToggle" checked> Word boxes</label>
        <button class="btn" id="copyBtn" disabled>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M15 5H6a2 2 0 0 0-2 2v9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
          Copy
        </button>
        <button class="btn" id="dlBtn" disabled>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          .txt
        </button>
      </div>
      <textarea id="output" placeholder="Recognized text appears here — and stays editable." spellcheck="false"></textarea>
    </section>
  </main>

  <footer>
    <span id="statusText">Ready — drop an image to begin</span>
    <div class="track"><div class="bar" id="bar"></div></div>
    <span class="legend" aria-hidden="true">
      <span><i class="hi"></i>high</span>
      <span><i class="med"></i>medium</span>
      <span><i class="low"></i>low confidence</span>
    </span>
  </footer>

  <input type="file" id="fileInput" accept="image/*" hidden>

<script>
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var bed = $("bed"), empty = $("empty"), fileInput = $("fileInput");
  var runBtn = $("runBtn"), copyBtn = $("copyBtn"), dlBtn = $("dlBtn");
  var langSel = $("lang"), boxesToggle = $("boxesToggle");
  var output = $("output"), statusText = $("statusText"), bar = $("bar");
  var sWords = $("sWords"), sChars = $("sChars"), sLines = $("sLines");
  var confBadge = $("confBadge"), confText = $("confText");

  var objectURL = null;
  var fileName = "image";
  var worker = null, workerLang = null;
  var words = [];
  var natural = { w: 0, h: 0 };
  var busy = false;

  /* ---------- theme ---------- */
  var themeBtn = $("themeBtn");
  try {
    var saved = localStorage.getItem("readback-theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
  } catch (e) {}
  themeBtn.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var next = cur === "dark" ? "light"
      : cur === "light" ? "dark"
      : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("readback-theme", next); } catch (e) {}
  });

  /* ---------- status ---------- */
  function setStatus(text, progress) {
    statusText.textContent = text;
    if (typeof progress === "number") bar.style.width = Math.max(0, Math.min(1, progress)) * 100 + "%";
  }

  var PHASES = {
    "loading tesseract core": "Loading OCR engine…",
    "initializing tesseract": "Initializing engine…",
    "loading language traineddata": "Downloading language model…",
    "initializing api": "Starting recognizer…",
    "recognizing text": "Reading image…"
  };

  function onLog(m) {
    if (!busy || !m || !m.status) return;
    setStatus(PHASES[m.status] || m.status, typeof m.progress === "number" ? m.progress : undefined);
  }

  /* ---------- image loading ---------- */
  function acceptFile(file) {
    if (!file || file.type.indexOf("image/") !== 0) {
      setStatus("That file isn't an image — try a PNG, JPG, or WebP.");
      return;
    }
    if (objectURL) URL.revokeObjectURL(objectURL);
    objectURL = URL.createObjectURL(file);
    fileName = (file.name || "image").replace(/\.[^.]+$/, "") || "image";
    words = [];

    var frame = document.createElement("div");
    frame.className = "frame";
    frame.id = "frame";
    var img = document.createElement("img");
    img.id = "img";
    img.alt = "Source image for recognition";
    img.onload = function () {
      natural.w = img.naturalWidth;
      natural.h = img.naturalHeight;
      runBtn.disabled = false;
      setStatus("Image loaded — press Recognize (" + natural.w + "×" + natural.h + ")");
    };
    img.onerror = function () { setStatus("Couldn't decode that image."); };
    img.src = objectURL;
    frame.appendChild(img);

    bed.innerHTML = "";
    bed.appendChild(frame);

    output.value = "";
    refreshStats();
    confText.textContent = "—";
    confBadge.className = "conf";
    copyBtn.disabled = dlBtn.disabled = true;
    bar.style.width = "0%";
  }

  /* ---------- recognize ---------- */
  function collectWords(data) {
    if (data.words && data.words.length) return data.words;
    var out = [], b, p, l, i, j, k, n;
    var blocks = data.blocks || [];
    for (i = 0; i < blocks.length; i++) {
      b = blocks[i];
      for (j = 0; j < (b.paragraphs || []).length; j++) {
        p = b.paragraphs[j];
        for (k = 0; k < (p.lines || []).length; k++) {
          l = p.lines[k];
          for (n = 0; n < (l.words || []).length; n++) out.push(l.words[n]);
        }
      }
    }
    return out;
  }

  function classFor(conf) {
    return conf >= 85 ? "w-hi" : conf >= 60 ? "w-med" : "w-low";
  }

  function renderOverlay() {
    var frame = $("frame");
    if (!frame) return;
    var old = frame.querySelector(".overlay");
    if (old) old.remove();
    if (!boxesToggle.checked || !words.length || !natural.w) return;

    var svgns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("class", "overlay");
    svg.setAttribute("viewBox", "0 0 " + natural.w + " " + natural.h);
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (!w.bbox) continue;
      var r = document.createElementNS(svgns, "rect");
      r.setAttribute("x", w.bbox.x0);
      r.setAttribute("y", w.bbox.y0);
      r.setAttribute("width", Math.max(1, w.bbox.x1 - w.bbox.x0));
      r.setAttribute("height", Math.max(1, w.bbox.y1 - w.bbox.y0));
      r.setAttribute("class", classFor(w.confidence));
      var t = document.createElementNS(svgns, "title");
      t.textContent = w.text + "  —  " + Math.round(w.confidence) + "%";
      r.appendChild(t);
      svg.appendChild(r);
    }
    frame.appendChild(svg);
  }

  function refreshStats(meanConf) {
    var v = output.value;
    var wc = (v.match(/\S+/g) || []).length;
    sWords.textContent = wc;
    sChars.textContent = v.length;
    sLines.textContent = v ? v.split(/\n/).length : 0;
    copyBtn.disabled = dlBtn.disabled = !v;
    if (typeof meanConf === "number") {
      var m = Math.round(meanConf);
      confText.textContent = m + "% mean";
      confBadge.className = "conf " + (m >= 85 ? "hi" : m >= 60 ? "med" : "low");
    }
  }

  async function run() {
    if (busy || !objectURL) return;
    if (typeof Tesseract === "undefined") {
      setStatus("OCR engine failed to load — check your internet connection and reload.");
      return;
    }
    var lang = langSel.value;
    busy = true;
    runBtn.disabled = true;
    langSel.disabled = true;
    var frame = $("frame");
    if (frame) frame.classList.add("scanning");
    setStatus("Preparing…", 0.03);

    try {
      if (!worker || workerLang !== lang) {
        if (worker) { try { await worker.terminate(); } catch (e) {} }
        worker = await Tesseract.createWorker(lang, 1, { logger: onLog });
        workerLang = lang;
      }
      var res = await worker.recognize(objectURL, {}, { blocks: true, text: true });
      var data = res.data;
      output.value = (data.text || "").replace(/\n{3,}/g, "\n\n").trim();
      words = collectWords(data);
      renderOverlay();
      refreshStats(data.confidence);
      setStatus("Done — " + words.length + " words recognized", 1);
    } catch (err) {
      console.error(err);
      setStatus("Recognition failed: " + (err && err.message ? err.message : err), 0);
    } finally {
      busy = false;
      runBtn.disabled = false;
      langSel.disabled = false;
      if (frame) frame.classList.remove("scanning");
    }
  }

  /* ---------- events ---------- */
  runBtn.addEventListener("click", run);
  $("browseBtn").addEventListener("click", function () { fileInput.click(); });
  empty.addEventListener("click", function (e) {
    if (e.target.closest("button")) return;
    fileInput.click();
  });
  fileInput.addEventListener("change", function () {
    if (fileInput.files[0]) acceptFile(fileInput.files[0]);
    fileInput.value = "";
  });

  ["dragenter", "dragover"].forEach(function (ev) {
    bed.addEventListener(ev, function (e) { e.preventDefault(); bed.classList.add("drag"); });
  });
  ["dragleave", "dragend", "drop"].forEach(function (ev) {
    bed.addEventListener(ev, function (e) {
      e.preventDefault();
      if (ev !== "dragleave" || e.target === bed) bed.classList.remove("drag");
    });
  });
  bed.addEventListener("drop", function (e) {
    var dt = e.dataTransfer;
    if (!dt) return;
    var file = null;
    if (dt.files && dt.files.length) file = dt.files[0];
    else if (dt.items) {
      for (var i = 0; i < dt.items.length; i++) {
        if (dt.items[i].kind === "file") { file = dt.items[i].getAsFile(); break; }
      }
    }
    if (file) acceptFile(file);
  });

  window.addEventListener("paste", function (e) {
    var items = (e.clipboardData || {}).items || [];
    for (var i = 0; i < items.length; i++) {
      if (items[i].type && items[i].type.indexOf("image/") === 0) {
        acceptFile(items[i].getAsFile());
        e.preventDefault();
        return;
      }
    }
  });

  boxesToggle.addEventListener("change", renderOverlay);
  output.addEventListener("input", function () { refreshStats(); });

  langSel.addEventListener("change", function () {
    if (output.value) setStatus("Language changed — press Recognize to re-read with " + langSel.options[langSel.selectedIndex].text + ".");
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value).then(function () {
      var t = copyBtn.lastChild;
      var prev = t.textContent;
      t.textContent = " Copied";
      setTimeout(function () { t.textContent = prev; }, 1400);
    }).catch(function () { setStatus("Clipboard blocked — select the text and copy manually."); });
  });

  dlBtn.addEventListener("click", function () {
    var blob = new Blob([output.value], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName + ".txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  });

  window.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") { e.preventDefault(); run(); }
  });
})();
</script>
</body>
</html>
