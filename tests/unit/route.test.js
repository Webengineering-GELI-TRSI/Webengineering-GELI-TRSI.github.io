import { describe, it, expect } from "vitest";
import { saveSearch } from "../../frontend/main.js";

describe("saveSearch", () => {
  it("saves searches to localStorage", () => {
    localStorage.clear();
    saveSearch("A", "B");
    const saved = JSON.parse(localStorage.getItem("routes"));
    expect(saved[0]).toEqual({ from: "A", to: "B" });
  });
});

