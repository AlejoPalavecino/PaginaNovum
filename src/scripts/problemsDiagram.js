/**
 * ==========================================================================
 * Nóvum Industrial — Section 2 Problems Interactive Technical Diagram
 * Handles SVG connector lines and hover synchronicity between cards & 3D part pins.
 * ==========================================================================
 */

export function initProblemsDiagram() {
  const stage = document.getElementById('problems-stage');
  const svg = document.getElementById('problems-lines-svg');
  if (!stage || !svg) return;

  const pieceImg = document.getElementById('problems-piece-img');
  let animationFrameId = null;

  function updateLines() {
    if (window.innerWidth < 1080) {
      for (let i = 1; i <= 6; i++) {
        const line = document.getElementById(`line-${i}`);
        if (line) line.setAttribute('d', '');
      }
      return;
    }

    const stageRect = stage.getBoundingClientRect();
    if (!stageRect.width || !stageRect.height) return;

    for (let i = 1; i <= 6; i++) {
      const node = document.getElementById(`node-${i}`);
      const pin = document.getElementById(`pin-${i}`);
      const line = document.getElementById(`line-${i}`);
      if (!node || !pin || !line) continue;

      const nodeRect = node.getBoundingClientRect();
      const pinRect = pin.getBoundingClientRect();

      // Coordinates relative to stage container
      const x1 = nodeRect.left + nodeRect.width / 2 - stageRect.left;
      const y1 = nodeRect.top + nodeRect.height / 2 - stageRect.top;
      const x2 = pinRect.left + pinRect.width / 2 - stageRect.left;
      const y2 = pinRect.top + pinRect.height / 2 - stageRect.top;

      // Technical polyline with clean horizontal inflection
      const midX = i <= 3
        ? x1 + (x2 - x1) * 0.45
        : x1 - (x1 - x2) * 0.45;

      const pathData = `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${midX.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
      line.setAttribute('d', pathData);
    }
  }

  function scheduleUpdate() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(updateLines);
  }

  // Interactivity: hover / focus bindings
  for (let i = 1; i <= 6; i++) {
    const card = document.getElementById(`card-${i}`);
    const pin = document.getElementById(`pin-${i}`);
    const line = document.getElementById(`line-${i}`);
    if (!card || !pin || !line) continue;

    const setActive = (active) => {
      card.classList.toggle('is-active', active);
      pin.classList.toggle('is-active', active);
      line.classList.toggle('is-active', active);
    };

    card.addEventListener('mouseenter', () => setActive(true));
    card.addEventListener('mouseleave', () => setActive(false));

    pin.addEventListener('mouseenter', () => setActive(true));
    pin.addEventListener('mouseleave', () => setActive(false));
    pin.addEventListener('focus', () => setActive(true));
    pin.addEventListener('blur', () => setActive(false));
  }

  // Window resize observer
  window.addEventListener('resize', scheduleUpdate, { passive: true });

  // Initial and image load calls
  if (pieceImg) {
    if (pieceImg.complete) {
      scheduleUpdate();
    } else {
      pieceImg.addEventListener('load', scheduleUpdate, { once: true });
    }
  }

  // Initial render
  scheduleUpdate();
  // Safe follow-up after styles and fonts stabilize
  setTimeout(scheduleUpdate, 250);
}
