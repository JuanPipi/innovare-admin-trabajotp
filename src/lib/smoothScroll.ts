/**
 * Smooth scroll to an anchor with a custom easing curve.
 * @param href  — e.g. "#servicios"
 * @param duration — animation duration in ms (default 900)
 */
export function smoothScrollTo(href: string, duration = 900) {
  const id = href.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;
  let startTime: number | null = null;

  // easeInOutQuart — feels fluid and intentional, not bouncy
  function ease(t: number) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
