const sites = [
  { name: 'Peru Delights', url: 'https://perudelights.com' },
  { name: 'Eat Peru', url: 'https://eatperu.com' },
  { name: 'A Taste of Peru', url: 'https://www.atasteofperu.com' },
  { name: 'My Latina Table - Peruvian Recipes', url: 'https://www.mylatinatable.com/tag/peruvian/' },
  { name: 'Recetas de Perú', url: 'https://peruvianfood.com' }
];

function populateList() {
  const ul = document.getElementById('site-list');
  sites.forEach(site => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = site.url;
    a.textContent = site.name;
    a.target = '_blank';
    li.appendChild(a);
    ul.appendChild(li);
  });
}

populateList();
