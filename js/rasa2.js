// Penyusun halaman opsi Q sampai T
function bangun(c) {
  const CROP = ['crop-no2.jpg', 'crop-karhutla-indonesia.jpg', 'crop-karhutla-kalimantan.jpg'];
  const ANGKA = [['−7.84%', 'average NO₂ during Lebaran'], ['72%', 'of hotspots fall in August to October'], ['5.3×', 'the 2012 to 2025 median']];
  const alamiHTML = PENGALAMAN.map(p => `<article class="alami" tabindex="0"><div class="kepala"><time>${p.waktu}</time><h3>${p.judul}<span>${p.tempat}</span></h3></div><div class="sibak"><div><p>${p.teks}</p></div></div></article>`).join('');
  const proyekHTML = c.proyek === 'baris'
    ? `<section class="ubin daftar">${PROYEK.map((p, i) => `<article class="alami" tabindex="0"><div class="kepala"><time>${p.no}</time><h3>${p.judul}<span>${p.jenis}</span></h3></div><div class="sibak"><div><div class="dalam"><div><p>${p.teks}</p><a href="${p.href}">Open dashboard</a></div><div class="g" style="background-image:url(assets/${CROP[i]})"></div></div></div></div></article>`).join('')}</section>`
    : PROYEK.map((p, i) => `<a class="ubin pk" href="${p.href}">${c.proyek === 'angka' ? `<b>${ANGKA[i][0]}</b><i>${ANGKA[i][1]}</i>` : `<div class="lapis" style="background-image:url(assets/${CROP[i]})"></div>`}<div class="teks"><small>${p.jenis}</small><h2>${p.judul}</h2><div class="sibak"><div><p>${p.teks}</p></div></div></div></a>`).join('');
  document.body.innerHTML = `<div id="lampu"></div><div class="kisi ${c.proyek} ${c.sisi || ''}">
    <header class="ubin nama"><canvas id="angin" aria-hidden="true"></canvas><div><span class="peran">Data Analyst</span><h1>Arya Perdana Putra Nasution</h1><p>${SIAPA}</p></div></header>
    <div class="ubin potret"><img src="assets/arya-wisuda.jpg" alt="Arya in graduation robe, adjusting the medal"></div>
    <p class="sub">Projects</p>${proyekHTML}
    <p class="sub">Experience</p><section class="ubin daftar">${alamiHTML}</section>
    <section class="ubin kontak"><b>Say hello</b><div><a href="mailto:aryaanstt@gmail.com">aryaanstt@gmail.com</a><a href="https://www.linkedin.com/in/aryaanstt">LinkedIn</a><a href="https://github.com/aryaanstt">GitHub</a></div></section>
  </div>`;
  hidupkan(c.angin);
}
