// Fill the date block of weekly events with the next date that weekday falls on (Toronto time).
const MON = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export function nextDate(weekday: number, today: number): Date {
  const now = new Date();
  const diff = (weekday - today + 7) % 7;
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + diff);
  return d;
}

export function fillNextDates(today: number) {
  document.querySelectorAll<HTMLElement>('.ev').forEach((el) => {
    const w = el.dataset.weekly;
    const day = el.querySelector<HTMLElement>('[data-next]');
    const mon = el.querySelector<HTMLElement>('[data-next-mon]');
    if (w !== undefined && w !== '') {
      const d = nextDate(+w, today);
      if (day) day.textContent = String(d.getDate());
      if (mon) mon.textContent = MON[d.getMonth()];
      el.dataset.sort = String(d.getTime());
    } else if (el.dataset.date) {
      const [y, m, dd] = el.dataset.date.split('-').map(Number);
      if (mon) mon.textContent = MON[(m || 1) - 1];
      el.dataset.sort = String(new Date(y, (m || 1) - 1, dd || 1).getTime());
      if (day) day.textContent = String(dd);
    } else {
      el.dataset.sort = '0';
    }
  });
}
