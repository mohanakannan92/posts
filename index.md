---
layout: default
title: Home
---

<style>
:root {
  --bg: #0f172a;
  --card: #111827;
  --text: #e5e7eb;
  --muted: #94a3b8;
  --accent: #38bdf8;
  --border: #334155;
}

body {
  background: var(--bg);
  color: var(--text);
}

.hero {
  text-align: center;
  padding: 60px 20px 40px;
}

.hero h1 {
  font-size: 46px;
  margin-bottom: 10px;
}

.hero p {
  color: var(--muted);
  font-size: 18px;
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  margin: 6px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--accent);
  font-size: 14px;
}

.section {
  margin: 45px 0;
}

.card {
  background: var(--card);
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
  margin-top: 10px;
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

<div class="hero">
  <h1>Mohanakannan MSc (Cyber Forensics and Information Security)., CISSP</h1>
  <p><strong> Cloud & AI Security </strong></p>
  <p>Building secure AI systems that detect, defend, learn, and adapt against prompt injection and data leakage attacks.</p>

  <div>
    <span class="badge">Prompt Injection Defense</span>
    <span class="badge">RAG Security</span>
    <span class="badge">AI Guardrails</span>
    <span class="badge">Security Automation</span>
  </div>

  <p>
    <a class="button" href="https://github.com/mohanakannan92">View GitHub</a>
    <a class="button secondary" href="#projects">Explore Projects</a>
  </p>
</div>

<div class="section" id="about">
  <h2>👋 About</h2>
  <div class="card">
    <p>
      I am building a hands-on AI Security portfolio focused on attacking and defending real-world AI systems.
      My work covers prompt injection, intent-aware defense, sequential attack detection, adaptive learning,
      output sanitization, and secure prompt design.
    </p>
  </div>
</div>

<div class="section" id="projects">
  <h2>🔐 Featured Project</h2>

  <div class="card">
    <h3>AI Security Lab</h3>
    <p>
      A practical lab for building, attacking, and securing AI applications using layered defenses.
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

<div class="section">
  <h2>🧠 System Focus Areas</h2>

  <div class="grid">
    <div class="card">
      <h3>Input Defense</h3>
      <p>Detect malicious prompts, sensitive intent, and attack patterns before they reach the model.</p>
    </div>

    <div class="card">
      <h3>Decision Intelligence</h3>
      <p>Use risk scoring, confidence, thresholds, and feedback loops for smarter decisions.</p>
    </div>

    <div class="card">
      <h3>Output Protection</h3>
      <p>Sanitize model responses to prevent system prompt, policy, or internal instruction leakage.</p>
    </div>
  </div>
</div>

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

<div class="section">
  <h2>📫 Connect</h2>

  <div class="card">
    <ul>
      <li><a href="https://github.com/mohanakannan92">GitHub</a></li>
      <li><a href="#">LinkedIn — www.linkedin.com/in/mohanakannancissp</a></li>
    </ul>
  </div>
</div>
