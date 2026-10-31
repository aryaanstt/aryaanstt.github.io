// Isi bersama untuk semua opsi desain
const PROYEK = [
  {no: '01', jenis: 'Undergraduate thesis', judul: 'NO₂ over Java during Lebaran', teks: 'Seven years of daily Sentinel-5P data for 117 regencies and cities. NO₂ fell 7.84% on average, and it fell in all seven years.', href: 'no2-lebaran/', img: 'assets/no2.png', alat: 'Python, Google Earth Engine'},
  {no: '02', jenis: 'Personal project', judul: "Indonesia's fire hotspots", teks: 'From 2003 to 2025, 72% of hotspots fall between August and October, and 87% are in Sumatra and Kalimantan.', href: 'karhutla-indonesia/', img: 'assets/karhutla-indonesia.png', alat: 'Python, DuckDB SQL'},
  {no: '03', jenis: 'Personal project', judul: "Kalimantan's 2026 fire season", teks: '242,822 hotspots up to 21 October, 5.3 times the 2012 to 2025 median. Where it burned and where the smoke went.', href: 'karhutla-kalimantan-2026/', img: 'assets/karhutla-kalimantan.png', alat: 'Python, DuckDB SQL, Leaflet'},
];
const WAKTU = [
  ['2026', 'B.Sc. Meteorology', 'Institut Teknologi Bandung'],
  ['2024 – 2026', 'Teaching Assistant', 'Seven courses'],
  ['2024 – 2025', 'Head of Division, Student Senate', 'HMME "Atmosphaira"'],
  ['2024', 'Field Surveyor', 'Bandung flood study and Rancaekek tornado research'],
];
const PENGALAMAN = [
  {waktu: '2024 – 2026', judul: 'Teaching Assistant', tempat: 'Meteorology Study Program, ITB', teks: 'Supported practicum sessions and student learning in seven courses. In 2025/2026: Data Literacy and Artificial Intelligence, Agroclimatology, Climate Change, and Introduction to Sustainability Principles. In 2024/2025: Meteorological Information Systems, Physical Meteorology, and Agrometeorology.'},
  {waktu: '2024', judul: 'Field Surveyor, Flood and Inundation Study', tempat: 'Bandung City Government and FITB ITB', teks: "Interviewed residents, measured past flood marks, photographed sites and recorded field data to validate the city's historical flood records. The study results were used by the Bandung City Government for spatial planning and flood management strategy."},
  {waktu: '2024', judul: 'Field Surveyor, Rancaekek Tornado Research', tempat: 'Meteorology Study Program, ITB', teks: 'Interviewed affected residents, documented tornado damage with photographs, and recorded survey data.'},
  {waktu: '2024 – 2025', judul: 'Head of Division, Student Senate', tempat: 'HMME "Atmosphaira", ITB', teks: "Led the Aspirations and Inspirations Division, then the Senate Management Division, and represented Meteorology students' aspirations within the ITB student body."},
  {waktu: '2023 – 2024', judul: 'Dormitory Tutor, Design and Creativity', tempat: 'ITB Dormitory', teks: 'Produced graphic design materials for dormitory programs and communications.'},
];
const SIAPA = 'I work with satellite, weather and air quality data, test what it shows, and turn it into findings people can read.';
const waktuHTML = () => WAKTU.map(w => `<li><time>${w[0]}</time><div>${w[1]}<span>${w[2]}</span></div></li>`).join('');
const FOTO = 'your live photo goes here';
function munculkan(sel) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('t'); io.unobserve(e.target); } }), {threshold: .12});
  document.querySelectorAll(sel).forEach(x => io.observe(x));
}
