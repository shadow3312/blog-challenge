import {
  cn,
  generateRandomNumber,
  truncateText,
  getInitials,
} from "@/lib/utils";

describe("Utility Functions", () => {
  describe("cn function", () => {
    it("merges CSS classes correctly", () => {
      const result = cn(
        "class1",
        "class2",
        { class3: true },
        { class4: false }
      );
      expect(result).toBe("class1 class2 class3");
    });
  });

  describe("generateRandomNumber function", () => {
    it("generates a random number between 200 and 300", () => {
      const randomNum = generateRandomNumber();
      expect(randomNum).toBeGreaterThanOrEqual(200);
      expect(randomNum).toBeLessThanOrEqual(300);
    });
  });

  describe("truncateText function", () => {
    it("truncates text correctly", () => {
      const truncatedString = truncateText("Lorem ipsum dolor sit amet", 10);
      expect(truncatedString).toBe("Lorem ipsu...");
    });

    it("handles empty text correctly", () => {
      const truncatedString = truncateText("", 10);
      expect(truncatedString).toBe("");
    });
  });

  describe("getInitials function", () => {
    it("returns initials from a full name", () => {
      const initials = getInitials("Joaquim Doe");
      expect(initials).toBe("JD");
    });

    it("handles empty name correctly", () => {
      const initials = getInitials("");
      expect(initials).toBe("");
    });
  });
});
