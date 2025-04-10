function velgProsjekt(type) {
  const visning = document.getElementById('prosjektVisning');
  if (type === "veranda") {
    visning.innerHTML = `
      <h2>Veranda 25m² (5x5m)</h2>
      <p><strong>Materialer:</strong></p>
      <ul>
        <li>25 stk terrassebord (28x120 mm x 5m)</li>
        <li>12 bjelker (48x148 mm)</li>
        <li>6 stolper, stolpesko, betong</li>
        <li>Skruer, beslag</li>
      </ul>
      <p><strong>Estimert pris:</strong> ca 17 500 kr</p>
      <p><strong>Leverandører:</strong></p>
      <ul>
        <li>Montér: 18 200 kr</li>
        <li>Obs Bygg: 16 900 kr</li>
        <li>Maxbo: 17 400 kr</li>
      </ul>
      <p><strong>Tid:</strong> ca 25 timer (to personer)</p>
      <p><strong>Standard:</strong> TEK17 + byggforsk</p>
    `;
  } else if (type === "garasje") {
    visning.innerHTML = `
      <h2>Garasje (dobbel 6x6m)</h2>
      <p>Veiledning og materialliste kommer snart.</p>
    `;
  } else if (type === "anneks") {
    visning.innerHTML = `
      <h2>Anneks 15m²</h2>
      <p>Veiledning og materialliste kommer snart.</p>
    `;
  } else if (type === "eget") {
    visning.innerHTML = `
      <h2>Beskriv ditt prosjekt</h2>
      <form onsubmit="return behandleEgetProsjekt(event)">
        <label>Hva skal du bygge?</label>
        <textarea required></textarea>

        <label>Last opp bilde/skisse:</label>
        <input type="file" accept="image/*">

        <label>Eventuelle kommentarer:</label>
        <textarea></textarea>

        <button type="submit">Send inn</button>
      </form>
    `;
  }
}

function behandleEgetProsjekt(e) {
  e.preventDefault();
  alert("Takk for innsending! Du vil få tilbakemelding med materialliste, tips og pris.");
  return false;
}
