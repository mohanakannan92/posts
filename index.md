---
layout: default
title: Home
---

<style>
:root {
  --bg: #0b1120;
  --card: #111827;
  --card-2: #0f172a;
  --text: #e5e7eb;
  --muted: #94a3b8;
  --accent: #38bdf8;
  --green: #a3e635;
  --border: #334155;
}

body {
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.16), transparent 30%),
    radial-gradient(circle at top right, rgba(163, 230, 53, 0.10), transparent 25%),
    var(--bg);
  color: var(--text);
}

.hero {
  text-align: center;
  padding: 70px 20px 45px;
}

.hero h1 {
  font-size: 52px;
  margin-bottom: 12px;
  color: var(--green);
  text-shadow: 0 0 18px rgba(163, 230, 53, 0.25);
}

.hero p {
  color: var(--muted);
  font-size: 18px;
  max-width: 820px;
  margin: 12px auto;
}

.hero .credential {
  color: var(--text);
  font-size: 20px;
}

.hero .focus {
  color: var(--accent);
  font-size: 20px;
}

.badge {
  display: inline-block;
  padding: 7px 13px;
  margin: 7px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--accent);
  background: rgba(15, 23, 42, 0.7);
  font-size: 14px;
}

.section {
  margin: 45px 0;
}

.section h2 {
  color: var(--green);
}

.card {
  background: linear-gradient(145deg, var(--card), var(--card-2));
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  margin: 18px 0;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.button {
  display: inline-block;
  padding: 10px 16px;
  background: var(--accent);
  color: #020617 !important;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 6px 0 0;
}

.secondary {
  background: transparent;
  color: var(--accent) !important;
  border: 1px solid var(--accent);
}

ul li {
  margin-bottom: 8px;
}

a {
  color: var(--accent);
}
</style>

<!-- 🔥 HERO SECTION -->

<div class="hero">
  <h1>Mohanakannan M</h1>

  <p class="credential">
    <strong>MSc Cyber Forensics & Information Security | CISSP</strong>
  </p>

  <p class="focus">
    <strong>Cloud & AI Security | Defense Engineering</strong>
  </p>

  <p>
    <strong>Double Crown</strong> — securing AI from both sides by building systems
    that can <strong>detect, defend, and withstand adversarial attacks</strong>.
  </p>

  <p style="color:#94a3b8; max-width:700px; margin:auto;">
    I design AI systems with an attacker mindset and engineer defenses that prevent
    prompt injection, data leakage, and unsafe model behavior.
  </p>

  <div>
    <span class="badge">Prompt Injection Defense</span>
    <span class="badge">RAG Security</span>
    <span class="badge">AI Guardrails</span>
    <span class="badge">Adaptive Defense</span>
  </div>

  <p>
    <a class="button" href="https://github.com/mohanakannan92">View GitHub</a>
    <a class="button secondary" href="#projects">Explore Projects</a>
  </p>
</div>

<!-- 👋 ABOUT -->

<div class="section" id="about">
  <h2>👋 About</h2>
  <div class="card">
    <p>
      I am building a hands-on AI Security portfolio focused on attacking and defending
      real-world AI systems. My work covers prompt injection, intent-aware defense,
      sequential attack detection, adaptive learning, output sanitization,
      and secure prompt design.
    </p>
  </div>
</div>

<!-- 👑 BRAND SECTION -->

<div class="section">
  <h2>👑 What is Double Crown?</h2>

  <div class="card">
    <p>
      <strong>Double Crown</strong> represents mastery of both sides of AI security:
    </p>

    <ul>
      <li><strong>Offensive AI Security</strong> — understanding how AI systems are attacked</li>
      <li><strong>Defensive AI Engineering</strong> — building systems that resist those attacks</li>
    </ul>

    <p>
      This approach enables designing AI systems that are not just functional,
      but resilient against real-world adversarial behavior.
    </p>
  </div>
</div>

<!-- 🔐 CORE PLATFORM -->

<div class="section" id="projects">
  <h2>🔐 Core Platform</h2>

  <div class="card">
    <h3>AI Security Lab</h3>

    <p>
      A practical lab for building, attacking, and securing AI applications using layered defenses.
    </p>

    <p style="color:#94a3b8;">
      Built using real-world attack simulations, defense pipelines, and adaptive security models.
    </p>

    <div class="grid">
      <div>
        <h4>Attack Coverage</h4>
        <ul>
          <li>Prompt injection</li>
          <li>Role override</li>
          <li>System prompt extraction</li>
          <li>Multi-step attacks</li>
        </ul>
      </div>

      <div>
        <h4>Defense Layers</h4>
        <ul>
          <li>Intent-aware detection</li>
          <li>Sequential defense</li>
          <li>Adaptive learning</li>
          <li>Output sanitization</li>
        </ul>
      </div>
    </div>

    <a class="button" href="https://github.com/mohanakannan92/ai-security-lab">View Project</a>
  </div>
</div>

<!-- 🧪 TOOLS -->

<div class="section">
  <h2>🧪 Free AI Security Tools</h2>

  <div class="card">
    <h3>Prompt Injection Detector</h3>
    <p>
      A free browser-based tool to analyze prompts for injection risk, unsafe intent,
      and system prompt leakage indicators.
    </p>

    <a class="button" href="/ai-prompt-detector/">Open Tool</a>
  </div>
</div>

<!-- 🧠 FOCUS AREAS -->

<div class="section">
  <h2>🧠 System Focus Areas</h2>

  <div class="grid">
    <div class="card">
      <h3>Input Defense</h3>
      <p>Detect malicious prompts and risky patterns before reaching the model.</p>
    </div>

    <div class="card">
      <h3>Decision Intelligence</h3>
      <p>Use risk scoring, confidence, and feedback loops for adaptive decisions.</p>
    </div>

    <div class="card">
      <h3>Output Protection</h3>
      <p>Prevent leakage of system prompts and internal instructions.</p>
    </div>
  </div>
</div>

<!-- ✍️ BLOG -->

<div class="section">
  <h2>✍️ Latest Posts</h2>

  <div class="card">
    <ul>
      {% for post in site.posts limit:5 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a> — {{ post.date | date_to_string }}
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

<!-- 📫 CONTACT -->

<div class="section">
  <h2>📫 Connect</h2>

  <div class="card">
    <ul>
      <li><a href="https://github.com/mohanakannan92">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/mohanakannancissp">LinkedIn</a></li>
    </ul>
  </div>
</div>
