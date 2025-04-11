function chooseProject(type) {
  document.getElementById("projectInput").style.display = "block";
  document.getElementById("userInput").value = type === "eget" ? "" : `Jeg vil bygge en ${type}`;
}

function sendProject() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const navn = document.getElementById("navn").value;
  const adresse = document.getElementById("adresse").value;
  const epost = document.getElementById("epost").value;
  const telefon = document.getElementById("telefon").value;
  const result = document.getElementById("result");
  const tips = document.getElementById("tips");
  const imageResult = document.getElementById("imageResult");

  let materialer = "";
  let pris = "";
  let bilde = "";
  let ekstraTips = "";

  if (input.includes("veranda")) {
    materialer = `
      <ul>
        <li>25 stk terrassebord 28x120mm impregnert – kr 79/stk</li>
        <li>12 stk bjelker 48x148mm – kr 95/stk</li>
        <li>6 stk stolpesko – kr 45/stk</li>
        <li>6 stk søylesko + betong – kr 110/stk</li>
        <li>1 pakke treskruer – kr 229</li>
      </ul>
    `;
    pris = "Ca. 7 800 kr (Montér, Obs Bygg, april 2025)";
    bilde = "https://images.unsplash.com/photo-1598228723793-527b26a1c0df";
    ekstraTips = `
      <ul>
        <li>Husk avstand på 4 meter til nabogrense ved veranda over 50cm høyde.</li>
        <li>Sjekk om du må søke byggesøknad.</li>
      </ul>
    `;
  } else if (input.includes("garasje")) {
    materialer = `
      <ul>
        <li>Reisverk 48x148mm – ca 50 stk (kr 85/stk)</li>
        <li>Panel kledning furu dobbelfals – 70 m² (kr 32/m²)</li>
        <li>Takstoler (til 6x7m) – 6 stk (kr 1800/stk)</li>
        <li>Takstein Zanda – 80 m² (kr 115/m²)</li>
        <li>Dør, dobbel port, vinduer</li>
        <li>Skruer, beslag og isolasjon hvis ønsket</li>
      </ul>
    `;
    pris = "Ca. 59 000 kr (avhengig av kledning og taktype)";
    bilde = "https://images.unsplash.com/photo-1609700207654-8b06ad7e90d3";
    ekstraTips = `
      <ul>
        <li>Skal du isolere, må du bruke dampsperre og vindtetting.</li>
        <li>Takvinkel over 22 grader anbefales for snølast.</li>
        <li>Avstand til vei og nabotomt må være 1 meter eller mer.</li>
      </ul>
    `;
  } else {
    materialer = "Vi trenger mer informasjon. Hva slags prosjekt vil du bygge? Husk å spesifisere størrelse, materialvalg og om det skal isoleres.";
    pris = "-";
    bilde = "";
    ekstraTips = "";
  }

  result.innerHTML = `
    <h3>Prosjekt for ${navn}</h3>
    <p><strong>Adresse:</strong> ${adresse}</p>
    <p><strong>Materialliste:</strong></p>${materialer}
    <p><strong>Estimert pris:</strong> ${pris}</p>
  `;

  imageResult.innerHTML = bilde
    ? `<img src="${bilde}" alt="Byggeprosjekt bilde"/>`
    : "";

  tips.innerHTML = `
    <h3>Tips:</h3>
    ${ekstraTips}
  `;
}
