import { validate } from "../index";
import { describe, expect, test } from "vitest";

describe("GTIN Validation", () => {
  test("Should be valid GTIN-8", () => {
    const VALIDS = ["12345670", "96385074", "75395124"];
    VALIDS.forEach((gtin) => expect(validate(gtin)).toBe(true));
  });

  test("Should be valid GTIN-12", () => {
    const VALIDS = ["012345678905", "036000291452", "123456789012"];
    VALIDS.forEach((gtin) => expect(validate(gtin)).toBe(true));
  });

  test("Should be invalid GTIN-8", () => {
    const INVALIDS = ["1234567", "abcdefgh", "87654321"];
    INVALIDS.forEach((gtin) => expect(validate(gtin)).toBe(false));
  });

  test("Should be invalid GTIN-12", () => {
    const INVALIDS = ["01234567890", "03600029145", "999999999999"];
    INVALIDS.forEach((gtin) => expect(validate(gtin)).toBe(false));
  });

  test("Should handle empty strings", () => {
    expect(validate("")).toBe(false);
  });
});