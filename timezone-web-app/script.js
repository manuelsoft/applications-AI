const zones = [
  { name: 'New York (USA)', timeZone: 'America/New_York' },
  { name: 'London (UK)', timeZone: 'Europe/London' },
  { name: 'Tokyo (Japan)', timeZone: 'Asia/Tokyo' },
  { name: 'Sydney (Australia)', timeZone: 'Australia/Sydney' },
  { name: 'UTC', timeZone: 'UTC' }
];

function updateClocks() {
  const container = document.getElementById('clocks');
  container.innerHTML = '';
  const now = new Date();
  zones.forEach(zone => {
    const timeString = now.toLocaleString('en-US', {
      timeZone: zone.timeZone,
      hour12: false
    });
    const div = document.createElement('div');
    div.className = 'clock';
    div.textContent = `${zone.name}: ${timeString}`;
    container.appendChild(div);
  });
}

setInterval(updateClocks, 1000);
updateClocks();
