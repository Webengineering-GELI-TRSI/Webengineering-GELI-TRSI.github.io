const API_KEY = "DEIN_OPENROUTESERVICE_API_KEY";
const resultsDiv = document.getElementById("results");
const topRoutesDiv = document.getElementById("topRoutes");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (!from || !to) return alert("Bitte beide Felder ausfüllen");

  const fromCoords = await geocode(from);
  const toCoords = await geocode(to);
  const route = await getRoute(fromCoords, toCoords);

  resultsDiv.innerHTML = `<pre>${JSON.stringify(route.features[0].properties.segments[0].steps.map(s => s.name), null, 2)}</pre>`;
  
  saveSearch(from, to);
  showTopRoutes();
});

async function geocode(address) {
  const res = await fetch(`https://api.openrouteservice.org/geocode/search?api_key=${API_KEY}&text=${encodeURIComponent(address)}`);
  const data = await res.json();
  return data.features[0].geometry.coordinates;
}

async function getRoute(fromCoords, toCoords) {
  const res = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ coordinates: [fromCoords, toCoords] })
  });
  return res.json();
}

function saveSearch(from, to) {
  let searches = JSON.parse(localStorage.getItem("routes")) || [];
  searches.push({ from, to });
  localStorage.setItem("routes", JSON.stringify(searches));
}

function showTopRoutes() {
  let searches = JSON.parse(localStorage.getItem("routes")) || [];
  let counts = {};
  searches.forEach(s => {
    const key = `${s.from} -> ${s.to}`;
    counts[key] = (counts[key] || 0) + 1;
  });
  const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]).slice(0,10);
  topRoutesDiv.innerHTML = `<h3>Meistgesuchte Routen</h3><ul>${sorted.map(([route]) => `<li>${route}</li>`).join("")}</ul>`;
}

