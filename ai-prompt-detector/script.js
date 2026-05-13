function analyzeInput() {
  const rawInput = document.getElementById("userInput").value;
  const input = rawInput.toLowerCase().trim();
  const resultBox = document.getElementById("result");

  let patterns = [];
  let patternScore = 0;

  const rules = [
    { pattern: "ignore all instructions", weight: 50 },
    { pattern: "ignore previous instructions", weight: 50 },
    { pattern: "reveal system prompt", weight: 60 },
    { pattern: "system prompt", weight: 50 },
    { pattern: "show hidden", weight: 45 },
    { pattern: "developer mode", weight: 50 },
    { pattern: "admin mode", weight: 45 },

    { pattern: "ignore", weight: 25 },
    { pattern: "disregard", weight: 25 },
    { pattern: "act as", weight: 30 },
    { pattern: "admin", weight: 30 },
    { pattern: "override", weight: 35 },
    { pattern: "bypass", weight: 35 },
    { pattern: "reveal", weight: 40 },
    { pattern: "hidden", weight: 40 },
    { pattern: "system", weight: 20 }
  ];

  rules.forEach(rule => {
    const regex = new RegExp("\\b" + rule.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");

    if (regex.test(input)) {
      patternScore += rule.weight;
      patterns.push(rule.pattern);
    }
  });

  let intent = "Benign";
  let intentScore = 0;

  if (patternScore >= 80) {
    intent = "Malicious";
    intentScore = 50;
  } else if (patternScore >= 30) {
    intent = "Suspicious";
    intentScore = 25;
  }

  const finalRisk = patternScore + intentScore;

  let decision = "ALLOW";
  let cssClass = "safe";

  if (finalRisk >= 80) {
    decision = "BLOCK";
    cssClass = "danger";
  } else if (finalRisk >= 40) {
    decision = "REVIEW";
    cssClass = "warning";
  }

  let reason = "No malicious indicators detected.";

  if (decision === "BLOCK") {
    reason = "High-risk prompt injection, role override, or data extraction attempt detected.";
  } else if (decision === "REVIEW") {
    reason = "Suspicious security-related patterns found. Manual validation is recommended.";
  }

  resultBox.className = `result-box ${cssClass}`;
  resultBox.classList.remove("hidden");

  resultBox.innerHTML = `
    <h3>Analysis Result</h3>
    <p><strong>Intent:</strong> ${intent}</p>
    <p><strong>Pattern Score:</strong> ${patternScore}</p>
    <p><strong>Intent Score:</strong> ${intentScore}</p>
    <p><strong>Final Risk:</strong> ${finalRisk}</p>
    <p><strong>Detected Patterns:</strong> ${patterns.length ? patterns.join(", ") : "None"}</p>
    <p><strong>Decision:</strong> ${decision}</p>
    <p><strong>Reason:</strong> ${reason}</p>
  `;
}
