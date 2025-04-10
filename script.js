function showProject(project) {
  const content = document.getElementById('content');
  content.classList.remove('hidden');

  if (project === 'veranda') {
    content.innerHTML = `
      <h3>Veiledning for veranda (5x5 meter – 25 m²)</h3>
      <ul>
        <li>25 stk impregnert terrassebord (28x120 mm x 5m)</li>
        <li>12 stk bjelker (48x148 mm)</li>
        <li>6 stk stolpesko + 6 stk søylesko + betong</li>
        <li>Skruer og beslag</li>
      </ul>
      <p><strong>Estimert pris:</strong> ca 17 500 kr</p>
      <p><strong>Leverandører:</strong></p>
      <ul>
        <li>Montér: ca 17 500 kr</li>
        <li>Maxbo: ca 18 200 kr</li>
        <li>Obs Bygg: ca 16 950 kr</li>
      </ul>
      <p><strong>Tid:</strong> 2 personer, 20–30 timer</p>
      <p><strong>Regler:</strong> Husk avstand til nabo (minst 4 meter), brannvern og TEK17 krav</p>
    `;
  } else if (project === 'garasje') {
    content.innerHTML = `
      <h3>Veiledning for enkel garasje (6x6 meter)</h3>
      <ul>
        <li>48 stk reisverk/stendere (48x98 mm)</li>
        <li>25 stk ytterkledning</li>
        <li>Takstoler, takplater, porter og isolasjon</li>
      </ul>
      <p><strong>Estimert pris:</strong> ca 85 000 – 120 000 kr</p>
      <p><strong>Regler:</strong> Må meldes til kommunen. Min. 1 meter fra nabogrense. Sjekk reguleringsplan</p>
    `;
  } else if (project === 'eget') {
    content.innerHTML = `
      <h3>Send inn ditt prosjekt</h3>
      <p>Har du et eget prosjekt? Fyll inn skjemaet under:</p>
      <form>
        <label>Beskrivelse:</label><br />
        <textarea rows="5" cols="40" placeholder="Fortell hva du vil bygge..."></textarea><br /><br />
        <label>Last opp bilde eller tegning:</label><br />
        <input type="file" /><br /><br />
        <button type="submit">Send inn</button>
      </form>
    `;
  }
}
