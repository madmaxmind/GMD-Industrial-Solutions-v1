// blog.js - carga dinámica desde Google Sheets
const SHEET_ID = 'TU_SHEET_ID';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
fetch(SHEET_URL)
  .then(res => res.text())
  .then(text => {
    const data = JSON.parse(text.substr(47).slice(0, -2));
    const container = document.getElementById('blog-container');
    data.table.rows.forEach(r => {
      const [titulo, fecha, resumen, url] = r.c;
      const card = document.createElement('div');
      card.className = 'bg-white shadow-lg rounded-lg p-4';
      card.innerHTML = `<h3 class='text-xl font-bold text-blue-900 mb-2'>${titulo.v}</h3><p class='text-gray-600 mb-2'>${fecha.v}</p><p>${resumen.v}</p><a href='${url.v}' class='text-orange-500 mt-2 inline-block'>Leer más →</a>`;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error al cargar el blog:', err));