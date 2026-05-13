function analyzeInput() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const resultBox = document.getElementById("result");

  let patterns = [];
  let patternScore = 0;

  // 🔥 Pattern rules (your weighted system)
  const rules = [
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
    if (input.includes(rule.pattern)) {
      patternScore += rule.weight;
      patterns.push(rule.pattern);
    }
  });

  // 🧠 Intent Detection (your real logic simplified)
  let intent = "Benign";
  let intentScore = 0;

  if (patterns.length >= 3) {
    intent = "Malicious";
    intentScore = 50;
  } else if (patterns.length > 0) {
    intent = "Suspicious";
    intentScore = 25;
  }

  // 🔥 Final Risk Calculation
  let finalRisk = patternScore + intentScore;

  let decision = "ALLOW";
  let cssClass = "safe";

  if (finalRisk > 80) {
    decision = "BLOCK";
    cssClass = "danger";
  } else if (finalRisk > 40) {
    decision = "REVIEW";
    cssClass = "warning";
  }

  // 💡 Explanation (THIS MAKES YOU DIFFERENT)
  let reason = "No malicious indicators detected.";

  if (decision === "BLOCK") {
    reason = "High-risk prompt injection or data extraction attempt detected.";
  } else if (decision === "REVIEW") {
    reason = "Suspicious patterns found. Requires validation.";
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
