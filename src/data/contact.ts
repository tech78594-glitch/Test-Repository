/**
 * Contact details for THE DISTINCT 5 Ltd.
 *
 * These values are stored XOR-obfuscated (key 0x2A) as plain numeric arrays —
 * never as string literals — so no plaintext email/phone ever appears in this
 * source file *or* in the compiled JavaScript bundle shipped to the browser.
 * `src/scripts/contactProtect.ts` decodes them client-side and mirrors the
 * three protection layers used previously:
 *   1. XOR obfuscation — no plaintext string anywhere in source or bundle.
 *   2. The email is painted onto a <canvas> — never a DOM text node.
 *   3. The phone number is assembled by a CSS `content: attr()` pseudo-element
 *      — also never a DOM text node, and non-selectable.
 *
 * For stronger protection, replace this module with a fetch to a rate-limited
 * serverless endpoint. `public/contact.json` documents the plain data contract
 * for that future endpoint and is intentionally public.
 *
 * IMPORTANT: if these values ever need to change, decode the new plaintext
 * with `decode()` in a local scratch script, then paste the *encoded* array
 * below — never inline the plaintext string in this file.
 */

export interface ObfuscatedContact {
  /** XOR key used to encode every byte array below. */
  key: number;
  email: number[];
  phone: number[];
  location: number[];
  hours: number[];
}

export const XOR_KEY = 0x2a;

/** XOR-decode a byte array back into a string using the given key. */
export function decode(bytes: number[], key: number = XOR_KEY): string {
  return bytes.map((byte) => String.fromCharCode(byte ^ key)).join('');
}

// Encodes (key 0x2A) of:
//   email:    support@thedistinct5ltd.com
//   phone:    +44 (0) 75 2185 9459
//   location: United Kingdom
//   hours:    Mon – Fri, 9:00 – 17:00
export const obfuscatedContact: ObfuscatedContact = {
  key: XOR_KEY,
  email: [89, 95, 90, 90, 69, 88, 94, 106, 94, 66, 79, 78, 67, 89, 94, 67, 68, 73, 94, 31, 70, 94, 78, 4, 73, 69, 71],
  phone: [1, 30, 30, 10, 2, 26, 3, 10, 29, 31, 10, 24, 27, 18, 31, 10, 19, 30, 31, 19],
  location: [127, 68, 67, 94, 79, 78, 10, 97, 67, 68, 77, 78, 69, 71],
  hours: [103, 69, 68, 10, 8249, 10, 108, 88, 67, 6, 10, 19, 16, 26, 26, 10, 8249, 10, 27, 29, 16, 26, 26],
};
