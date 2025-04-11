function generateGuide() {
  const input = document.getElementById('userInput').value.toLowerCase();
  const result = document.getElementById('result');

  if (input.includes("veranda") && input.includes("25")) {
    const materialer = [
      {
        navn: "Terrassebord 28x120 mm impregnert",
        mengde: "50 stk (5m)",
        priser: {
          "Montér": "49,90 kr/stk",
          "Obs Bygg": "45,00 kr/stk",
          "Maxbo": "52,00 kr/stk"
        }
      },
      {
        navn: "Konstruksjonsvirke 48x148 mm C24 (bjelkelag)",
        mengde: "20 stk (4.8m)",
        priser: {
          "Montér": "74,90 kr/m",
          "Obs Bygg": "69,00 kr/m",
          "Maxbo": "78,50 kr/m"
        }
      },
      {
        navn: "Stolpesko 91 mm",
        mengde: "8 stk",
        priser: {
          "Montér": "39,90 kr/stk",
          "Obs Bygg": "35,00 kr/stk",
          "Maxbo": "42,50 kr/stk"
        }
      },
      {
        navn: "Skruer terrasse 4.8x75 mm rustfri A2",
        mengde: "1000 stk (1 boks)",
        priser: {
          "Montér": "329,00 kr",
          "Obs Bygg": "299,00 kr",
          "Maxbo": "349,00 kr"
        }
      }
    ];

    let materialListe = "<ul>";
    materialer.forEach(m => {
      materialListe += `
        <li>
          <strong>${m.navn}</strong> – ${m.mengde}
          <br>Pris: 
          <ul>
            <li>Montér: ${m.priser["Montér"]}</li>
            <li>Obs Bygg: ${m.priser["Obs Bygg"]}</li>
            <li>Maxbo: ${m.priser["Maxbo"]}</li>
          </ul>
        </li>`;
    });
    materialListe += "</ul>";

    result.innerHTML = `
      <h3>Veiledning for veranda 25m² (5x5 meter)</h3>
      <p><strong>Materialer:</strong></p>
      ${materialListe}
      <p><strong>Tidsbruk:</strong> ca 20–30 timer (2 personer)</p>
      <p><strong>Verktøyanbefaling:</strong> Drill, sag, målebånd, vater, jordbor</p>
      <p><strong>Tips:</strong></p>
      <ul>
        <li>Husk 4 meter grense til nabo eller søk dispensasjon.</li>
        <li>Impregnert treverk bør oljes etter 1 år.</li>
        <li>Bruk rustfrie skruer for å unngå misfarging.</li>
      </ul>
    `;
  } else {
    result.innerHTML = "<p>Beklager, vi har foreløpig bare veiledning for veranda 25m². Flere prosjekter kommer!</p>";
  }
}
