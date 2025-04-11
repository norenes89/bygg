function showGuide(type) {
  const result = document.getElementById('result');
  document.getElementById("custom-project").style.display = "none";

  if (type === "veranda") {
    result.innerHTML = `
      <h3>Veiledning: Bygge Veranda (25 m²)</h3>
      <ul>
        <li>25 stk impregnert terrassebord (28x120 mm x 5 m)</li>
        <li>12 stk bjelker (48x148 mm)</li>
        <li>6 stk stolpesko</li>
        <li>6 stk søylesko + betong</li>
        <li>Skruer og beslag</li>
      </ul>
      <p><strong>Pris:</strong> ca. 17 500 kr (Montér, Maxbo, Obs Bygg – april 2025)</p>
      <p><strong>Estimert tid:</strong> 20–30 timer (2 personer)</p>
      <p><strong>Tips:</strong> Husk avstand til nabogrense (min. 4 m), brannsikring og værforhold.</p>
    `;
  } else if (type === "bod") {
    result.innerHTML = `
      <h3>Veiledning: Bygge Bod (6 m²)</h3>
      <ul>
        <li>6 stk panelplater (2x1,2 m)</li>
        <li>10 stk 2x4" reisverk</li>
        <li>3 stk takstoler</li>
        <li>Takpapp og beslag</li>
        <li>Skruer og festemateriell</li>
      </ul>
      <p><strong>Pris:</strong> ca. 12 000 kr</p>
      <p><strong>Estimert tid:</strong> 15–20 timer</p>
      <p><strong>Tips:</strong> Husk søknadsplikt ved høyde over 3 meter.</p>
    `;
  } else if (type === "garasje") {
    result.innerHTML = `
      <h3>Veiledning: Enkel Garasje (18 m²)</h3>
      <ul>
        <li>Fundament: Betong + armering</li>
        <li>Bindingsverk: 2x6"</li>
        <li>Takstoler og takplater</li>
        <li>Garasjeport og dør</li>
        <li>Skruer, beslag og isolasjon</li>
      </ul>
      <p><strong>Pris:</strong> ca. 55 000 kr</p>
      <p><strong>Estimert tid:</strong> 40–60 timer</p>
      <p><strong>Tips:</strong> Sjekk reguleringsplan og innkjøring fra vei.</p>
    `;
  }
}

function toggleCustom() {
  const section = document.getElementById("custom-project");
  const result = document.getElementById("result");
  result.innerHTML = "";
  section.style.display = section.style.display === "none" ? "block" : "none";
}

function submitCustom() {
  const input = document.getElementById("userInput").value;
  const result = document.getElementById("result");
  
  result.innerHTML = `
    <h3>AI-veiledning for ditt prosjekt:</h3>
    <p><strong>Materialforslag:</strong> Basert på beskrivelsen antar vi du trenger konstruksjonsvirke, fundamentering, kledning og tak.</p>
    <p><strong>Estimert pris:</strong> ca. 35 000 – 70 000 kr (avhengig av størrelse og valg)</p>
    <p><strong>Verktøy du trenger:</strong> Drill, sag, vater, skrutrekker – anbefalt merke: Makita, Dewalt</p>
    <p><strong>Tips:</strong> Sørg for lufting, avstand til tomtegrense, og værforhold som snø og vind.</p>
  `;
}
