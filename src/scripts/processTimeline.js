/** Measured, frame-coalesced vertical process progression without scroll interception. */
export function initProcessTimeline() {
  const section = document.getElementById('proceso');
  const progressLine = document.getElementById('process-line-progress');
  if (!section || !progressLine) return () => {};

  const axis = section.querySelector('.process-vertical-axis');
  const items = Array.from(section.querySelectorAll('.process-step-item'));
  const nodes = items.map(item => item.querySelector('.process-node-anchor'));
  const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  let observer;
  let resizeObserver;
  let frame = null;
  let geometry;
  let dirty = true;
  let visible = true;
  let enabled = false;
  let disposed = false;

  const cancelFrame = () => {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null;
  };
  const renderStatic = () => {
    section.classList.remove('process-motion-ready');
    progressLine.style.transform = 'scaleY(1)';
    items.forEach(item => item.classList.add('is-active'));
  };
  const stopObservers = () => {
    observer?.disconnect();
    resizeObserver?.disconnect();
    cancelFrame();
  };
  const failStatic = () => {
    enabled = false;
    stopObservers();
    renderStatic();
  };

  // All layout reads occur together, before any line/class write.
  const measure = () => {
    const rect = axis.getBoundingClientRect();
    const scrollY = window.scrollY || 0;
    if (!Number.isFinite(rect.top) || !Number.isFinite(rect.height) || rect.height <= 0) throw new Error('Invalid process axis');
    const centers = nodes.map(node => {
      const bounds = node.getBoundingClientRect();
      const center = bounds.top + bounds.height / 2 + scrollY;
      if (!Number.isFinite(center)) throw new Error('Invalid process node');
      return center;
    });
    geometry = { top: rect.top + scrollY, height: rect.height, centers };
    dirty = false;
  };
  const render = () => {
    frame = null;
    if (disposed || !enabled || !visible) return;
    try {
      if (dirty) measure();
      const readingPoint = (window.scrollY || 0) + window.innerHeight * 0.75;
      const progress = Math.max(0, Math.min(1, (readingPoint - geometry.top) / geometry.height));
      const tip = geometry.top + progress * geometry.height;
      section.classList.add('process-motion-ready');
      progressLine.style.transform = `scaleY(${progress})`;
      items.forEach((item, index) => item.classList.toggle('is-active', progress > 0 && geometry.centers[index] <= tip));
    } catch {
      failStatic();
    }
  };
  const schedule = () => {
    if (!disposed && enabled && visible && frame === null) frame = requestAnimationFrame(render);
  };
  const refresh = () => {
    dirty = true;
    schedule();
  };
  const configure = () => {
    if (disposed) return;
    stopObservers();
    enabled = !media?.matches && Boolean(axis) && nodes.length > 0
      && nodes.every(Boolean) && typeof IntersectionObserver === 'function';
    if (!enabled) {
      renderStatic();
      return;
    }
    dirty = true;
    visible = true;
    try {
      observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) refresh();
        else cancelFrame();
      }, { rootMargin: '100px 0px 100px 0px', threshold: 0 });
      observer.observe(section);
      if (typeof ResizeObserver === 'function') {
        resizeObserver = new ResizeObserver(refresh);
        resizeObserver.observe(section.querySelector('.process-timeline-zone') || section);
      }
      schedule();
    } catch {
      failStatic();
    }
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', refresh, { passive: true });
  window.addEventListener('load', refresh, { once: true });
  if (media?.addEventListener) media.addEventListener('change', configure);
  else media?.addListener?.(configure);
  document.fonts?.ready?.then(() => { if (!disposed) refresh(); });
  configure();

  return () => {
    disposed = true;
    enabled = false;
    stopObservers();
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', refresh);
    window.removeEventListener('load', refresh);
    if (media?.removeEventListener) media.removeEventListener('change', configure);
    else media?.removeListener?.(configure);
    renderStatic();
  };
}
