function analyzeInput() {
  const rawInput = document.getElementById("userInput").value;
  const input = rawInput.toLowerCase().trim();
  const resultBox = document.getElementById("result");

  let patterns = [];
  let patternScore = 0;

  const rules = [
    { pattern: "ignore all instructions", weight: 50, type: "phrase" },
    { pattern: "ignore previous instructions", weight: 50, type: "phrase" },
    { pattern: "reveal system prompt", weight: 60, type: "phrase" },
    { pattern: "system prompt", weight: 50, type: "phrase" },
    { pattern: "developer mode", weight: 50, type: "phrase" },
    { pattern: "admin mode", weight: 45, type: "phrase" },
    { pattern: "act as", weight: 30, type: "phrase" },

    { pattern: "ignore", weight: 25, type: "word" },
    { pattern: "disregard", weight: 25, type: "word" },
    { pattern: "admin", weight: 30, type: "word" },
    { pattern: "override", weight: 35, type: "word" },
    { pattern: "bypass", weight: 35, type: "word" },
    { pattern: "reveal", weight: 40, type: "word" },
    { pattern: "hidden", weight: 40, type: "word" },
    { pattern: "system", weight: 20, type: "word" }
  ];

  const matchedSet = new Set();

  // Higher-risk rules are checked first
  rules.sort((a, b) => b.weight - a.weight);

  rules.forEach(rule => {
    let matched = false;

    if (rule.type === "phrase") {
      matched = input.includes(rule.pattern);
    } else {
      const regex = new RegExp(`\\b${rule.pattern}\\b`, "i");
      matched = regex.test(input);
    }

    if (matched && !matchedSet.has(rule.pattern)) {
      patternScore += rule.weight;
      patterns.push(rule.pattern);
      matchedSet.add(rule.pattern);
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
