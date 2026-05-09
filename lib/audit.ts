export function generateAudit(data: any) {
  let recommendation = "";
  let savings = 0;

  // ChatGPT logic
  if (
    data.tool === "ChatGPT" &&
    data.plan === "Team" &&
    Number(data.seats) <= 2
  ) {
    recommendation =
      "Switch to ChatGPT Plus. Team plan is unnecessary for small teams.";

    savings = 20;
  }

  // Claude logic
  else if (
    data.tool === "Claude" &&
    Number(data.spend) > 200
  ) {
    recommendation =
      "Consider mixing Claude API with Cursor Pro to reduce heavy API costs.";

    savings = 50;
  }

  // Cursor logic
  else if (
    data.tool === "Cursor" &&
    data.plan === "Business" &&
    Number(data.teamSize) < 5
  ) {
    recommendation =
      "Cursor Pro may be sufficient for smaller engineering teams.";

    savings = 40;
  }

  else {
    recommendation =
      "Your current AI stack already looks cost-efficient.";

    savings = 0;
  }

  return {
    recommendation,
    savings,
  };
}