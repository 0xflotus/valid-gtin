import { validate } from "../index";
import { describe, expect, it } from "vitest";

describe("GTIN Validation", () => {
  it.each([
    ["12345670", true],
    ["96385074", true],
    ["75395124", true],
    ["012345678905", true],
    ["036000291452", true],
    ["123456789012", true],
    ["1234567", false],
    ["abcdefgh", false],
    ["87654321", false],
    ["01234567890", false],
    ["03600029145", false],
    ["999999999999", false],
    ["", false],
])("validate(%s) -> %s", (gtin, expected) => {
    expect(validate(gtin)).toBe(expected);
  });
});
