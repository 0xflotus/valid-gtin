import validate from "./index";

test("Should be valid GTINs", () => {
  const VALIDS: string[] = ["97350053850012", "012345678905", "9783030148270"];
  VALIDS.forEach((gtin: string) => expect(validate(gtin)).toBe(true));
});

test("Should be invalid GTINs", () => {
  const INVALIDS: string[] = ["0024", "sffsgf", "0123345463"];
  INVALIDS.forEach((gtin: string) => expect(validate(gtin)).toBe(false));
});
