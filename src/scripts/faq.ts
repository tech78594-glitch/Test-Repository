/**
 * Accessible single-open FAQ accordion. Expects each `.faq-item` to contain
 * a `.faq-q` button (aria-controls -> the answer panel id) and a `.faq-a`
 * panel with a `.faq-a-inner` content wrapper.
 */
export function initFaq(): void {
  document.querySelectorAll<HTMLButtonElement>('.faq-q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest<HTMLElement>('.faq-item');
      const controlsId = btn.getAttribute('aria-controls');
      const panel = controlsId ? document.getElementById(controlsId) : null;
      if (!item || !panel) return;

      const isOpen = item.classList.contains('open');

      document.querySelectorAll<HTMLElement>('.faq-item').forEach((i) => {
        i.classList.remove('open');
        i.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
        const answer = i.querySelector<HTMLElement>('.faq-a');
        if (answer) answer.style.maxHeight = '';
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
}
