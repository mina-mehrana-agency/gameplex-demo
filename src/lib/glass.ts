// Apple-style liquid glass for the header (ported from the Mehrana signature demo, glass.js).
// Chromium bends the picture behind each glass edge with an SVG displacement filter
// (method after React Bits' GlassSurface); Safari and Firefox keep frosted CSS glass.
const SVG_NS = 'http://www.w3.org/2000/svg';

function canRefract() {
  const ua = navigator.userAgent;
  const webkit = /Safari/.test(ua) && !/Chrome|Chromium|Edg/.test(ua);
  if (webkit || /Firefox/.test(ua)) return false;
  const probe = document.createElement('div');
  probe.style.backdropFilter = 'url(#probe)';
  return probe.style.backdropFilter !== '';
}

// Black page, red ramp left to right, blue ramp top to bottom, neutral grey middle: only the rim bends.
function displacementMap(width: number, height: number, radius: number) {
  const short = Math.min(width, height);
  const edge = short * 0.035;
  const soft = Math.min(10, short * 0.12);
  const svg = `<svg xmlns="${SVG_NS}" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="r" x1="100%" y1="0%" x2="0%" y2="0%"><stop offset="0%" stop-color="#0000"/><stop offset="100%" stop-color="red"/></linearGradient>
      <linearGradient id="b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#0000"/><stop offset="100%" stop-color="blue"/></linearGradient>
      <filter id="s" filterUnits="userSpaceOnUse" x="0" y="0" width="${width}" height="${height}"><feGaussianBlur stdDeviation="${soft}"/></filter>
    </defs>
    <rect width="${width}" height="${height}" fill="black"/>
    <rect width="${width}" height="${height}" rx="${radius}" fill="url(#r)"/>
    <rect width="${width}" height="${height}" rx="${radius}" fill="url(#b)" style="mix-blend-mode:difference"/>
    <rect x="${edge}" y="${edge}" width="${width - edge * 2}" height="${height - edge * 2}" rx="${radius}" fill="hsl(0 0% 50% / 0.93)" filter="url(#s)"/>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function el(name: string, attrs: Record<string, string | number> = {}) {
  const node = document.createElementNS(SVG_NS, name);
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, String(v)));
  return node;
}

// Three slightly different bends for red, green and blue give the faint rainbow edge of real glass.
function buildFilter(defs: SVGElement, id: string) {
  const filter = el('filter', { id, x: '0%', y: '0%', width: '100%', height: '100%', 'color-interpolation-filters': 'sRGB' });
  const image = el('feImage', { x: 0, y: 0, width: '100%', height: '100%', preserveAspectRatio: 'none', result: 'map' });
  filter.append(image);
  const channels: [string, string, number][] = [
    ['red', '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0', 1],
    ['green', '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0', 0.94],
    ['blue', '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0', 0.88],
  ];
  const maps = channels.map(([name, matrix]) => {
    const map = el('feDisplacementMap', { in: 'SourceGraphic', in2: 'map', xChannelSelector: 'R', yChannelSelector: 'B', result: `d-${name}` });
    filter.append(map, el('feColorMatrix', { in: `d-${name}`, type: 'matrix', values: matrix, result: name }));
    return map;
  });
  filter.append(
    el('feBlend', { in: 'red', in2: 'green', mode: 'screen', result: 'rg' }),
    el('feBlend', { in: 'rg', in2: 'blue', mode: 'screen', result: 'out' }),
    el('feGaussianBlur', { in: 'out', stdDeviation: 0.6 }),
  );
  defs.append(filter);
  return (url: string, short: number) => {
    image.setAttribute('href', url);
    maps.forEach((map, i) => map.setAttribute('scale', String(-Math.min(90, short * 0.45) * channels[i][2])));
  };
}

export function initGlass() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const fineHover = matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (canRefract()) {
    const host = el('svg', { class: 'lg-defs', 'aria-hidden': 'true', focusable: 'false' });
    const defs = el('defs');
    host.append(defs);
    document.body.append(host);
    document.querySelectorAll<HTMLElement>('[data-lg]').forEach((glass, i) => {
      const id = `lg-${i}`;
      const update = buildFilter(defs as SVGElement, id);
      const frost = glass.classList.contains('nav-panel') ? 12 : 5;
      const refresh = () => {
        const { width, height } = glass.getBoundingClientRect();
        if (!width || !height) return;
        const radius = Math.min(parseFloat(getComputedStyle(glass).borderTopLeftRadius) || 0, height / 2);
        update(displacementMap(Math.round(width), Math.round(height), radius), Math.min(width, height));
        glass.style.backdropFilter = `url(#${id}) blur(${frost}px) saturate(170%)`;
      };
      new ResizeObserver(refresh).observe(glass);
      refresh();
    });
    document.documentElement.classList.add('lg-refract');
  }

  // Rim light follows the pointer
  if (fineHover) {
    const surfaces = Array.from(document.querySelectorAll<HTMLElement>('.glass'));
    let frame = 0; let ev: PointerEvent | null = null;
    addEventListener('pointermove', (e) => {
      ev = e;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        surfaces.forEach((s) => {
          const b = s.getBoundingClientRect();
          if (b.bottom < -200 || b.top > innerHeight + 200 || !ev) return;
          s.style.setProperty('--lx', `${ev.clientX - b.left}px`);
          s.style.setProperty('--ly', `${ev.clientY - b.top}px`);
        });
      });
    }, { passive: true });
  }

  // Glass pill that glides between the links
  const links = nav.querySelector<HTMLElement>('.nav-links');
  const pill = nav.querySelector<HTMLElement>('.nav-pill');
  const current = nav.querySelector<HTMLElement>('.nav-link[aria-current=page]');
  const movePill = (t: HTMLElement | null) => {
    if (!pill) return;
    if (!t) { pill.classList.remove('is-on'); return; }
    pill.style.width = `${t.offsetWidth}px`;
    pill.style.transform = `translateX(${t.offsetLeft}px)`;
    pill.classList.add('is-on');
  };
  links?.querySelectorAll<HTMLElement>('.nav-link').forEach((a) => {
    a.addEventListener('pointerenter', () => movePill(a));
    a.addEventListener('focus', () => movePill(a));
  });
  links?.addEventListener('pointerleave', () => movePill(current));
  requestAnimationFrame(() => movePill(current));
  addEventListener('resize', () => movePill(current));

  // Mobile: glass panel under the bar
  const burger = document.getElementById('menuBtn');
  const panel = document.getElementById('navPanel');
  const setOpen = (o: boolean) => {
    panel?.classList.toggle('is-open', o);
    burger?.setAttribute('aria-expanded', String(o));
  };
  burger?.addEventListener('click', (e) => { e.stopPropagation(); setOpen(!panel?.classList.contains('is-open')); });
  panel?.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) setOpen(false); });
  document.addEventListener('click', (e) => { if (!nav.contains(e.target as Node)) setOpen(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });

  // The bar gets a touch more body once the page scrolls
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
