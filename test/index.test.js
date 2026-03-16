import { validate, calculateChecksum } from '../index';
import fc from 'fast-check';
import { describe, expect, it, test } from 'vitest';

describe('GTIN Validation', () => {
  it.each([
    ['96385074', true],
    ['75395124', true],
    ['701197200005', true],
    ['012345678905', true],
    ['036000291452', true],
    ['123456789012', true],
    ['0701197200005', true],
    ['4006381333931', true],
    ['10701197200002', true],
    ['1234567', false],
    ['abcdefgh', false],
    ['87654321', false],
    ['01234567890', false],
    ['03600029145', false],
    ['4006381333932', false],
    ['999999999999', false],
    ['ABC', false],
    ['', false],
  ])('validate(%s) -> %s', (gtin, expected) => {
    expect(validate(gtin)).toBe(expected);
  });

  it('rejects strings containing non-numeric characters', () => {
    fc.assert(
      fc.property(fc.string(), (str) => {
        if (!/^\d+$/.test(str)) {
          expect(validate(str)).toBe(false);
        }
      })
    );
  });

  it('rejects numbers with invalid length', () => {
    fc.assert(
      fc.property(
        fc
          .array(fc.integer({ min: 0, max: 9 }), {
            minLength: 1,
            maxLength: 20
          })
          .map((arr) => arr.join('')),
        (digits) => {
          if (![8, 12, 13, 14].includes(digits.length)) {
            expect(validate(digits)).toBe(false);
          }
        }
      )
    );
  });
});

describe('calculateChecksum', () => {
  it.each([
    ['96385074', 4],
    ['75395124', 4],
    ['701197200005', 5],
    ['012345678905', 5],
    ['036000291452', 2],
    ['123456789012', 2],
    ['0701197200005', 5],
    ['4006381333931', 1],
    ['10701197200002', 2],
    ['ABC123', null],
  ])('calculateChecksum(%s) -> %s', (gtin, expected) => {
    expect(calculateChecksum(gtin)).toBe(expected);
  });

  it('returns null if string contains non-numeric characters', () => {
    expect(calculateChecksum('1234abcd')).toBeNull();
    expect(calculateChecksum('abc')).toBeNull();
    expect(calculateChecksum('12 34')).toBeNull();
  });

  it('returns a digit between 0 and 9', () => {
    expect(calculateChecksum('12345670')).toBeGreaterThanOrEqual(0);
    expect(calculateChecksum('12345670')).toBeLessThanOrEqual(9);
  });

  it('returns null forinvalid structure', () => {
    fc.assert(
      fc.property(fc.string(), (str) => {
        if (/^\d{8}$|^\d{12,14}$/.test(str)) return true;

        return calculateChecksum(str) === null;
      })
    );
  });
});

test('checksum is always a digit', () => {
  fc.assert(
    fc.property(fc.stringMatching(/^\d{8}$|^\d{12,14}$/), (gtin) => {
      const checksum = calculateChecksum(gtin);
      if (checksum === null) return true;

      return checksum >= 0 && checksum <= 9;
    })
  );
});

test('wrong checksum should fail validation', () => {
  fc.assert(
    fc.property(fc.stringMatching(/^\d{7}$|^\d{11,13}$/), (body) => {
      const checksum = calculateChecksum(body + '0');
      if (checksum === null) return true;

      const wrong = (checksum + 1) % 10;

      return !validate(body + wrong);
    })
  );
});

test('generated GTIN with calculated checksum should validate', () => {
  fc.assert(
    fc.property(fc.stringMatching(/^\d{7}$|^\d{11,13}$/), (body) => {
      const checksum = calculateChecksum(body + '0');

      if (checksum === null) return true;

      const gtin = body + checksum;

      return validate(gtin);
    })
  );
});
