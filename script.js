function loadProject(type) {
  const main = document.getElementById("mainContent");

  if (type === "eget") {
    main.innerHTML = `
      <h2>Fortell om ditt prosjekt</h2>
      <p>Beskriv hva du ønsker å bygge, last opp tegninger eller bilder. AI hjelper deg med materialer, pris og tips!</p>
      <form onsubmit="handleCustomProject(event)">
        <input type="text" id="navn" placeholder="Navn" required />
        <input type="text" id="adresse" placeholder="Adresse" required />
        <input type="email" id="epost" placeholder="E-post" required />
        <input type="tel" id="telefon" placeholder="Telefonnummer" required />
        <textarea id="beskrivelse" placeholder="Beskriv prosjektet ditt..." required></textarea>
        <input type="file" id="filopplasting" multiple />
        <button type="submit">Send inn</button>
      </form>
      <div id="aiSvar"></div>
    `;
  } else {
    const prosjekter = {
      veranda: {
        tittel: "Bygge veranda",
        bilde: "https://images.unsplash.com/photo-1616627980666-fb3fa1f6bfb2",
        materialer: [
          "25x Terrassebord 28x120mm impregnert",
          "12x Bjelker 48x148mm C24",
          "6x Stolpesko + 6x Søylesko",
          "Betong, Skruer, Beslag"
        ],
        priser: {
          Monter: "18 300 kr",
          Maxbo: "17 950 kr",
          XLBygg: "18 700 kr",
          Byggmakker: "17 990 kr",
          ObsBygg: "17 550 kr",
          DinByggHjelp: "16 200 kr"
        },
        tips: [
          "Minimum 4 meter til nabogrense ved frittstående platting.",
          "Følg TEK17 ved høyde over 0,5m – rekkverk påkrevd.",
          "Bruk rustfrie skruer for lang levetid."
        ]
      },
      garasje: {
        tittel: "Bygge garasje",
        bilde: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        materialer: [
          "48x148mm reisverk (vegger/stendere)",
          "Dobbel port 4x2,2m",
          "Kledning: Liggende dobbelfals grunnet",
          "Tak: Zanda takstein, svart",
          "2x vinduer (40x120cm), 1 dør høyre side"
        ],
        priser: {
          Monter: "92 500 kr",
          Maxbo: "90 000 kr",
          XLBygg: "95 300 kr",
          Byggmakker: "91 800 kr",
          ObsBygg: "89 990 kr",
          DinByggHjelp: "84 500 kr"
        },
        tips: [
          "Sjekk reguleringsplan før bygging.",
          "30 grader takvinkel gir god avrenning.",
          "Skal den isoleres? Husk vindsperre og fuktsperre!"
        ]
      },
      tilbygg: {
        tittel: "Bygge tilbygg",
        bilde: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        materialer: [
          "48x198mm konstruksjonsvirke",
          "Vindsperre, isolasjon, gips, kledning",
          "1x dør + 2x vinduer",
          "Takpapp eller takstein etter ønske"
        ],
        priser: {
          Monter: "125 000 kr",
          Maxbo: "122 000 kr",
          XLBygg: "129 000 kr",
          Byggmakker: "124 900 kr",
          ObsBygg: "120 500 kr",
          DinByggHjelp: "114 000 kr"
        },
        tips: [
          "Meld fra til kommunen – byggesøknad kreves.",
          "Unngå å bygge over tomtegrense.",
          "Bruk fagfolk til bæring/innfesting i eksisterende hus."
        ]
      }
    };

    const prosjekt = prosjekter[type];

    main.innerHTML = `
      <h2>${prosjekt.tittel}</h2>
      <img src="${prosjekt.bilde}" alt="${prosjekt.tittel}" style="max-width:100%;border-radius:10px;margin-bottom:1rem;">
      <h3>Forslag til materialer:</h3>
      <ul>${prosjekt.materialer.map(m => `<li>${m}</li>`).join("")}</ul>
      <h3>Prissammenligning:</h3>
      <ul>${Object.entries(prosjekt.priser).map(([k, v]) => `<li>${k}: ${v}</li>`).join("")}</ul>
      <h3>Tips:</h3>
      <ul>${prosjekt.tips.map(t => `<li>${t}</li>`).join("")}</ul>
    `;
  }
}

function handleCustomProject(e) {
  e.preventDefault();

  const navn = document.getElementById("navn").value;
  const adresse = document.getElementById("adresse").value;
  const epost = document.getElementById("epost").value;
  const telefon = document.getElementById("telefon").value;
  const beskrivelse = document.getElementById("beskrivelse").value;

  const aiDiv = document.getElementById("aiSvar");
  aiDiv.innerHTML = `
    <p>Takk, ${navn}! Her er vår veiledning for ditt prosjekt:</p>
    <p>AI analyserer... 🔍</p>
    <p><strong>Forslag:</strong></p>
    <ul>
      <li>Du bør bruke 48x148mm reisverk</li>
      <li>Kledning: Dobbelfals grunnet, liggende</li>
      <li>Tak: Takstein, Zanda type</li>
    </ul>
    <p><strong>Priser (estimert):</strong></p>
    <ul>
      <li>Montér: 94 000 kr</li>
      <li>XL Bygg: 96 000 kr</li>
      <li>Byggmax: 91 500 kr</li>
      <li>Obs Bygg: 89 990 kr</li>
      <li>DinByggHjelp: 84 500 kr</li>
    </ul>
    <p><strong>Tips:</strong> Sørg for korrekt grunnarbeid. Minst 4 meter fra nabo. Meld til kommunen ved bygg over 50m².</p>
    <p><em>💡 Neste steg: AI genererer bilde og spør deg videre om detaljer...</em></p>
  `;
}
