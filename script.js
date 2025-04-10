function showGuide(project) {
  document.getElementById("customProjectForm").classList.add("hidden");
  let output = document.getElementById("output");
  let content = "";

  if (project === "veranda") {
    content = `
      <h3>Veiledning: Veranda (25 m²)</h3>
      <ul>
        <li>25 terrassebord 28x120mm</li>
        <li>12 bjelker 48x148mm</li>
        <li>6 stolpesko og 6 søylesko med betong</li>
        <li>Skruer og beslag</li>
      </ul>
      <p><strong>Estimert pris:</strong> 17.500 kr (Montér, Maxbo, Obs Bygg)</p>
      <p><strong>Tid:</strong> 20–30 timer</p>
    `;
  } else if (project === "garasje") {
    content = `
      <h3>Veiledning: Garasje (35 m²)</h3>
      <ul>
        <li>Reisverk 48x198mm</li>
        <li>Kledning, takstoler, takplater</li>
        <li>Garasjeport og dør</li>
      </ul>
      <p><strong>Estimert pris:</strong> 110.000 kr (gjennomsnitt fra leverandører)</p>
    `;
  } else if (project === "anneks") {
    content = `
      <h3>Veiledning: Anneks (15 m²)</h3>
      <ul>
        <li>Impregnert bunnsvill</li>
        <li>Panel, isolasjon, vindu, dør</li>
      </ul>
      <p><strong>Estimert pris:</strong> 55.000 kr</p>
    `;
  }

  output.innerHTML = content;
}

function showCustomProject() {
  document.getElementById("customProjectForm").classList.remove("hidden");
  document.getElementById("output").innerHTML = "";
}

function generateCustomResponse() {
  const input = document.getElementById("customDescription").value;
  const output = document.getElementById("output");

  const tips = `
    <h3>Forslag til prosjektet ditt</h3>
    <p><strong>Materialer:</strong> Avhenger av størrelse, men ofte: konstruksjonsvirke, skruer, isolasjon, dører/vinduer.</p>
    <p><strong>Verktøy du kan trenge:</strong> Bordsag, drill, vater, stikksag, spikerpistol</p>
    <p><strong>Lover og regler:</strong> Husk brannavstand (minimum 4m til nabo), ikke bygg nærmere enn 1m fra tomtegrensen. Følg TEK17 og meld bygg til kommunen.</p>
    <p><strong>Estimert pris:</strong> 50.000–200.000 kr avhengig av prosjektets kompleksitet.</p>
  `;

  output.innerHTML = tips;
}

const ads = [
  { name: "Dewalt", url: "https://www.verktøy.no/dewalt", img: "https://upload.wikimedia.org/wikipedia/commons/4/49/DeWalt_Logo.png" },
  { name: "Makita", url: "https://www.verktøy.no/makita", img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Makita-logo.png" },
  { name: "Festool", url: "https://www.verktøy.no/festool", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Festool_logo.svg" }
];

window.onload = () => {
  const adsContainer = document.getElementById("adsContainer");
  ads.forEach(ad => {
    const a = document.createElement("a");
    a.href = ad.url;
    a.target = "_blank";
    const img = document.createElement("img");
    img.src = ad.img;
    img.alt = ad.name;
    a.appendChild(img);
    adsContainer.appendChild(a);
  });
};
