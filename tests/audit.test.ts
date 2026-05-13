import { describe, it, expect } from "vitest";
import { generateAudit } from "../lib/audit";

describe("generateAudit", () => {

  it("should return savings greater than 0 for high spend", () => {

    const result = generateAudit({
      tool: "Claude",
      plan: "Team",
      spend: "60000",
      seats: "20",
      teamSize: "200",
      useCase: "Research",
    });

    expect(result.savings).toBeGreaterThan(0);
  });

  it("should include recommendation text", () => {

    const result = generateAudit({
      tool: "ChatGPT",
      plan: "Pro",
      spend: "500",
      seats: "5",
      teamSize: "20",
      useCase: "Writing",
    });

    expect(result.recommendation.length).toBeGreaterThan(10);
  });

  it("should return a summary", () => {

    const result = generateAudit({
      tool: "Cursor",
      plan: "Business",
      spend: "2000",
      seats: "15",
      teamSize: "50",
      useCase: "Coding",
    });

    expect(result.summary).toBeDefined();
  });

});