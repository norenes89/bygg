function selectProject(type) {
  document.getElementById("user-form").scrollIntoView({ behavior: "smooth" });
  document.getElementById("projectDescription").value = `Prosjekttype: ${type}\nBeskriv mer om hva du ønsker å bygge her...`;
}

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const description = document.getElementById("projectDescription").value.toLowerCase();
  const result = document.getElementById("aiResponse");
  const resultSection = document.getElementById("result");
  const tipsSection = document.getElementById("tips");

  // Simulert AI-svar med veiledning
  let response = `<p><strong>Navn:</strong> ${name}<br><strong>Adresse:</strong> ${address}<br><strong>Telefon:</strong> ${phone}<br><strong>E-post:</strong> ${email}</p>`;
  response += `<p><strong>Prosjektbeskrivelse:</strong><br>${description}</p>`;

  if (description.includes("garasje")) {
    if (!description.includes("kledning")) {
      response += `<p><strong>Oppfølging:</strong> Hvilken type kledning ønsker du? Vi anbefaler stående tømmermann eller liggende dobbelfals kledning.</p>`;
    }
    if (!description.includes("reisverk")) {
      response += `<p><strong>Oppfølging:</strong> Ønsker du standard reisverk? Vi foreslår 48x148mm konstruksjonsvirke.</p>`;
    }
    response += `<p><strong>Forslag materialer:</strong></p><ul>
      <li>30 stk konstruksjonsvirke 48x148mm (7m)</li>
      <li>15 stk asfaltplater</li>
      <li>Takstoler – avhengig av taktype</li>
      <li>Dobbel port + 1 dør + 2 vinduer</li>
      <li>Skruer, beslag, maling, verktøy</li>
    </ul>
    <p><strong>Estimert pris:</strong> Ca 85 000 kr (Montér, Maxbo, Obs Bygg – april 2025)</p>`;
  } else if (description.includes("veranda")) {
    response += `<p><strong>Forslag materialer:</strong></p><ul>
      <li>25 stk terrassebord 28x120mm (5m)</li>
      <li>12 bjelker 48x148mm</li>
      <li>6 søyler + stolpesko + betong</li>
    </ul>
    <p><strong>Pris:</strong> Ca 17 500 kr (Montér, Obs Bygg, Maxbo)</p>`;
  } else {
    response += `<p>Vi jobber med å tolke prosjektet ditt! Kommer straks med veiledning...</p>`;
  }

  // Simulert bilde
  document.getElementById("projectImage").innerHTML = `<img src="https://via.placeholder.com/600x300?text=Ditt+byggeprosjekt" alt="Byggeprosjekt bilde" />`;

  result.innerHTML = response;
  resultSection.classList.remove("hidden");
  tipsSection.classList.remove("hidden");
}

// Reklame
const ads = [
  { name: "DeWalt Drill", link: "https://www.verktøy.no", color: "#facc15" },
  { name: "Makita Sag", link: "https://www.verktøy.no", color: "#60a5fa" },
  { name: "Festool Støvsuger", link: "https://www.verktøy.no", color: "#34d399" },
];

const adContainer = document.getElementById("adCarousel");
ads.forEach(ad => {
  const adLink = document.createElement("a");
  adLink.href = ad.link;
  adLink.target = "_blank";
  adLink.style.background = ad.color;
  adLink.innerText = ad.name;
  adContainer.appendChild(adLink);
});
