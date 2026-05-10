---
layout: default
title: Home
---

<style>
.hero {
  text-align: center;
  margin-bottom: 40px;
}

.section {
  margin-bottom: 40px;
}

.card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 15px;
}

a.button {
  display: inline-block;
  padding: 8px 14px;
  background: #007acc;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 8px;
}
</style>

<div class="hero">
  <h1>Mohanakannan M</h1>
  <p><strong>AI Security | Cloud & AI Security | Cyber Forensics</strong></p>
  <p>Building secure AI systems — detect, defend, and adapt against prompt injection and data leakage.</p>
</div>

---

<div class="section">
  <h2>🔐 Featured Project</h2>

  <div class="card">
    <h3>AI Security Lab</h3>
    <p>
      A hands-on lab for building, attacking, and defending real-world AI systems.
    </p>

    <ul>
      <li>Prompt Injection Detection</li>
      <li>Intent-Aware Defense</li>
      <li>Sequential Attack Detection</li>
      <li>Adaptive Learning Engine</li>
      <li>Output Sanitization</li>
      <li>Guardrail Layer</li>
    </ul>

    <a class="button" href="https://github.com/mohanakannan92/ai-security-lab">View on GitHub</a>
  </div>
</div>

---

<div class="section">
  <h2>🧪 Free AI Security Tools</h2>

  <div class="card">
    <h3>Prompt Injection Detector</h3>
    <p>Analyze prompts for injection risks, system prompt leakage, and unsafe intent.</p>

    <a class="button" href="/ai-prompt-detector/">Open Tool</a>
  </div>
</div>

---

<div class="section">
  <h2>✍️ Latest Posts</h2>

  <ul>
    {% for post in site.posts limit:5 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a> — {{ post.date | date_to_string }}
      </li>
    {% endfor %}
  </ul>
</div>

---

<div class="section">
  <h2>📫 Connect</h2>

  <ul>
    <li><a href="https://github.com/mohanakannan92">GitHub</a></li>
    <li><a href="#">LinkedIn (add your link)</a></li>
  </ul>
</div>
