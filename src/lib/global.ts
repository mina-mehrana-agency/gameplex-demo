// Site-wide behaviour: Toronto "today", XP + achievements, confetti, header, reveals.

/** Toronto business day: before 2 AM still counts as the night before. 0 = Sunday. */
export function torontoToday(): number {
  const parts: Record<string, string> = {};
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: 'America/Toronto', weekday: 'short', hour: 'numeric', hourCycle: 'h23' })
      .formatToParts(new Date())
      .forEach((p) => { parts[p.type] = p.value; });
  } catch { /* fall back to local time */ }
  let wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday ?? '');
  if (wd < 0) wd = new Date().getDay();
  const hr = parseInt(parts.hour ?? String(new Date().getHours()), 10);
  // ?day=0..6 lets us preview any day of the week
  const forced = new URLSearchParams(location.search).get('day');
  if (forced !== null && /^[0-6]$/.test(forced)) return +forced;
  return hr < 2 ? (wd + 6) % 7 : wd;
}

export const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

const XP_KEY = 'gp-xp-v1';
interface XPState { xp: number; got: Record<string, 1> }
function loadXP(): XPState {
  try { const s = JSON.parse(localStorage.getItem(XP_KEY) || ''); if (s && typeof s.xp === 'number') return s; } catch { /* ignore */ }
  return { xp: 0, got: {} };
}
function saveXP(s: XPState) { try { localStorage.setItem(XP_KEY, JSON.stringify(s)); } catch { /* ignore */ } }

let state: XPState = { xp: 0, got: {} };
let loaded = false;
function ensure() { if (!loaded) { state = loadXP(); loaded = true; } }

function paintXP(bump = false) {
  const xpEl = document.getElementById('xp');
  if (!xpEl) return;
  xpEl.textContent = String(state.xp).padStart(4, '0');
  const bar = document.getElementById('xpbar');
  if (bar) bar.style.width = Math.min(100, (state.xp % 250) / 2.5) + '%';
  const lv = document.getElementById('lv');
  if (lv) lv.textContent = String(1 + Math.floor(state.xp / 250));
  if (bump) { const h = document.getElementById('hud')!; h.classList.remove('bump'); void h.offsetWidth; h.classList.add('bump'); }
}

export function toast(title: string, label: string, icon = '★') {
  const box = document.getElementById('toasts');
  if (!box) return;
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="ic">${icon}</span><div><b>${label}</b><span></span></div>`;
  (t.querySelector(':scope > div > span') as HTMLElement).textContent = title;
  box.appendChild(t);
  while (box.children.length > 2) box.firstChild?.remove();
  setTimeout(() => t.remove(), 3800);
}

/** Award XP once per achievement id (per browser). Returns true when new. */
export function award(id: string, title: string, pts: number, icon = '★'): boolean {
  ensure();
  if (state.got[id]) return false;
  state.got[id] = 1;
  state.xp += pts;
  saveXP(state);
  paintXP(true);
  toast(title, `ACHIEVEMENT +${pts} XP`, icon);
  return true;
}

/** Repeatable XP (e.g. each Mafia win), no once-only lock. */
export function addXP(pts: number, title: string, icon = '★') {
  ensure();
  state.xp += pts;
  saveXP(state);
  paintXP(true);
  toast(title, `+${pts} XP`, icon);
}

const colors = ['#FFD447', '#4FF0B4', '#FF6B8B', '#C59BFF', '#fff'];
export function burst(cx: number, cy: number, n = 16) {
  if (reduceMotion()) return;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('i');
    s.className = 'bit';
    const a = Math.random() * Math.PI * 2, dist = 50 + Math.random() * 90;
    s.style.cssText = `left:${cx}px;top:${cy}px;background:${colors[i % 5]};--x:${Math.cos(a) * dist}px;--y:${Math.sin(a) * dist - 30}px;--rot:${Math.random() * 540}deg;border-radius:${i % 3 ? '2px' : '50%'}`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 950);
  }
}

export function initGlobal() {
  const d = document;
  const today = torontoToday();
  d.documentElement.dataset.today = String(today);
  d.querySelectorAll<HTMLElement>('[data-day]').forEach((el) => {
    if (el.dataset.day === String(today)) el.classList.add('today');
  });
  d.querySelectorAll<HTMLElement>('[data-days]').forEach((el) => {
    const days = (el.dataset.days || '').split(',').filter(Boolean);
    if (days.includes(String(today))) el.classList.add('today');
  });

  ensure();
  paintXP();

  d.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest('[data-burst]');
    if (!b) return;
    const r = b.getBoundingClientRect();
    burst((e as MouseEvent).clientX || r.left + r.width / 2, (e as MouseEvent).clientY || r.top + r.height / 2);
  });

  const rv = Array.from(d.querySelectorAll('.rv'));
  if ('IntersectionObserver' in window && !reduceMotion()) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.15 });
    rv.forEach((el) => io.observe(el));
  } else rv.forEach((el) => el.classList.add('in'));

  setTimeout(() => award('start', 'Press start: welcome to Gameplex', 10, '▶'), 3000);
}
