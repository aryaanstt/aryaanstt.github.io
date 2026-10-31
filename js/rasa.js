// Perilaku bersama opsi N, O, P
function isiBersama() {
  document.getElementById('slot').innerHTML = PROYEK.map(p => `<a class="ubin proyek" href="${p.href}"><figure><img src="${p.img}" alt="" loading="lazy"></figure><div><small>${p.jenis}</small><h2>${p.judul}</h2><p>${p.teks}</p></div></a>`).join('');
}
function hidupkan(warnaAngin) {
  const lampu = document.getElementById('lampu');
  addEventListener('pointermove', e => { lampu.style.setProperty('--x', e.clientX + 'px'); lampu.style.setProperty('--y', e.clientY + 'px'); });
  document.querySelectorAll('.ubin').forEach(u => u.addEventListener('pointermove', e => { const r = u.getBoundingClientRect(); u.style.setProperty('--a', e.clientX - r.left + 'px'); u.style.setProperty('--b', e.clientY - r.top + 'px'); }));
  document.querySelectorAll('.potret').forEach(p => p.addEventListener('pointermove', e => { const r = p.getBoundingClientRect(); const g = p.querySelector('img'); g.style.setProperty('--px', ((e.clientX - r.left) / r.width - .5) * -10 + 'px'); g.style.setProperty('--py', ((e.clientY - r.top) / r.height - .5) * -10 + 'px'); }));
  // Di layar sentuh, pengalaman dibuka dengan ketukan
  if (!matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.alami').forEach(a => a.addEventListener('click', () => a.classList.toggle('buka')));
  }
  const c = document.getElementById('angin');
  if (!c) return;
  const g = c.getContext('2d'), area = c.parentElement;
  let W, H, P = [], t = 0, tampil = true, mx = -999, my = -999;
  const atur = () => { const d = Math.min(devicePixelRatio || 1, 1.5); W = c.clientWidth; H = c.clientHeight; c.width = W * d; c.height = H * d; g.setTransform(d, 0, 0, d, 0, 0); P = Array.from({length: Math.min(W * H / 2400, 380) | 0}, () => ({x: Math.random() * W, y: Math.random() * H, u: Math.random() * 200 | 0})); };
  const langkah = () => {
    g.globalCompositeOperation = 'destination-in'; g.fillStyle = 'rgba(0,0,0,.965)'; g.fillRect(0, 0, W, H);
    g.globalCompositeOperation = 'source-over'; g.strokeStyle = warnaAngin; g.lineWidth = .8; g.beginPath();
    for (const p of P) {
      let u = .6 + Math.sin(p.y * .0042 + t) * .5, v = Math.sin(p.x * .0034 + t * .7) * .36;
      const dx = p.x - mx, dy = p.y - my, d2 = dx * dx + dy * dy;
      if (d2 < 24000) { const k = (1 - d2 / 24000) * 1.9, d = Math.sqrt(d2) + 1; u += -dy / d * k; v += dx / d * k; }
      g.moveTo(p.x, p.y); p.x += u; p.y += v; g.lineTo(p.x, p.y);
      if (++p.u > 260 || p.x > W || p.x < 0 || p.y > H || p.y < 0) { p.x = Math.random() * W; p.y = Math.random() * H; p.u = 0; }
    }
    g.stroke(); t += .0014;
  };
  const putar = () => { if (tampil) langkah(); requestAnimationFrame(putar); };
  area.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
  addEventListener('resize', atur);
  new IntersectionObserver(([e]) => { tampil = e.isIntersecting; }).observe(c);
  atur(); putar();
}
