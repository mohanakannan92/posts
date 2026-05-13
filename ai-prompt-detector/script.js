function analyzeInput() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const resultBox = document.getElementById("result");

  let riskScore = 0;
  let patterns = [];

  const rules = [
    { pattern: "ignore previous instructions", weight: 40 },
    { pattern: "act as", weight: 30 },
    { pattern: "reveal system", weight: 50 },
    { pattern: "show hidden", weight: 50 },
    { pattern: "bypass", weight: 30 },
    { pattern: "admin mode", weight: 40 },
    { pattern: "override", weight: 35 }
  ];

  rules.forEach(rule => {
    if (input.includes(rule.pattern)) {
      riskScore += rule.weight;
      patterns.push(rule.pattern);
    }
  });

  let intent = "Benign";
  if (riskScore > 60) intent = "Malicious";
  else if (riskScore > 30) intent = "Suspicious";

  let decision = "ALLOW";
  let cssClass = "safe";

  if (riskScore > 60) {
    decision = "BLOCK";
    cssClass = "danger";
  } else if (riskScore > 30) {
    decision = "REVIEW";
    cssClass = "warning";
  }

  resultBox.className = `result-box ${cssClass}`;
  resultBox.classList.remove("hidden");

  resultBox.innerHTML = `
    <h3>Analysis Result</h3>
    <p><strong>Intent:</strong> ${intent}</p>
    <p><strong>Risk Score:</strong> ${riskScore}</p>
    <p><strong>Detected Patterns:</strong> ${patterns.length ? patterns.join(", ") : "None"}</p>
    <p><strong>Decision:</strong> ${decision}</p>
  `;
}