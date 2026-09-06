import { decode, obfuscatedContact } from '../data/contact';

/**
 * Renders the contact card values with the same three DOM-protection layers
 * used on the previous static site:
 *   1. XOR-obfuscated source data (see src/data/contact.ts) — no plaintext
 *      string exists in source or in the compiled bundle.
 *   2. Email painted onto a <canvas> — absent from the DOM text tree,
 *      `textContent`, and any text-pattern scraper.
 *   3. Phone assembled via CSS `content: attr()` from two data-* attributes
 *      — also not a DOM text node; `element.textContent` is `''`.
 *
 * For stronger protection, swap this for a fetch to a rate-limited
 * serverless endpoint (see the data-contract note in contact.ts).
 */
export function initContactProtect(): void {
  const { key, email, phone, location, hours } = obfuscatedContact;
  const emailText = decode(email, key);
  const phoneText = decode(phone, key);
  const locationText = decode(location, key);
  const hoursText = decode(hours, key);

  // Layer 2 — email painted to <canvas>
  const canvas = document.getElementById('ci-email') as HTMLCanvasElement | null;
  if (canvas?.getContext) {
    const draw = (): void => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const font = '500 15px "Space Grotesk", sans-serif';
      ctx.font = font;
      const width = Math.ceil(ctx.measureText(emailText).width) + 4;
      canvas.width = width; // resizing resets ctx state
      ctx.font = font;
      ctx.fillStyle = '#0d1426'; // --ink
      ctx.textBaseline = 'middle';
      ctx.fillText(emailText, 0, canvas.height / 2);
      canvas.setAttribute('aria-label', emailText); // screen-reader accessible
    };
    void (document.fonts?.ready ?? Promise.resolve()).then(draw);
  }

  // Layer 3 — phone assembled by CSS content:attr()
  const phoneEl = document.getElementById('ci-phone') as HTMLElement | null;
  if (phoneEl) {
    phoneEl.dataset.p1 = phoneText.slice(0, 8); // '+44 (0) '
    phoneEl.dataset.p2 = phoneText.slice(8); // '75 2185 9459'
    phoneEl.setAttribute('aria-label', phoneText);
  }

  // Location & hours — less scraped; plain textContent is fine
  const locationEl = document.getElementById('ci-location');
  if (locationEl) locationEl.textContent = locationText;
  const hoursEl = document.getElementById('ci-hours');
  if (hoursEl) hoursEl.textContent = hoursText;

  // Disable right-click within the contact section
  document.getElementById('contact')?.addEventListener('contextmenu', (e) => e.preventDefault());
}
