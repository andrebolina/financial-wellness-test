import { formatMoneyValue } from "./format-utils";

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
});
