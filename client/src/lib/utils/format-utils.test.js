import { formatMoneyValue, formatNumberValue } from "./format-utils";

describe("Format Utils", () => {
  describe("formatMoneyValue", () => {
    it("formats valid values", () => {
      expect(formatMoneyValue("9")).toBe("9");
      expect(formatMoneyValue("9a")).toBe("9");
      expect(formatMoneyValue("9.")).toBe("9");
      expect(formatMoneyValue("99")).toBe("99");
      expect(formatMoneyValue("999")).toBe("999");
      expect(formatMoneyValue("9999")).toBe("9,999");
      expect(formatMoneyValue("99999")).toBe("99,999");
      expect(formatMoneyValue("999999")).toBe("999,999");
      expect(formatMoneyValue("9999999")).toBe("9,999,999");
      expect(formatMoneyValue("9,999,999")).toBe("9,999,999");
    });

    it("formats invalid values", () => {
      expect(formatMoneyValue("")).toBe("");
      expect(formatMoneyValue("a")).toBe("");
    });
  });

  describe("formatNumberValue", () => {
    it("formats valid values", () => {
      expect(formatNumberValue("9")).toBe(9);
      expect(formatNumberValue("9a")).toBe(9);
      expect(formatNumberValue("9.")).toBe(9);
      expect(formatNumberValue("99")).toBe(99);
      expect(formatNumberValue("999")).toBe(999);
      expect(formatNumberValue("9,999")).toBe(9999);
      expect(formatNumberValue("99,999")).toBe(99999);
      expect(formatNumberValue("999,999")).toBe(999999);
      expect(formatNumberValue("9,999,999")).toBe(9999999);
    });

    it("formats invalid values", () => {
      expect(formatNumberValue("")).toBe(0);
      expect(formatNumberValue("a")).toBe(0);
    });
  });
});
