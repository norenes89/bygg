function visGuide(prosjekt) {
  const res = document.getElementById("resultat");

  if (prosjekt === "veranda") {
    res.innerHTML = `
      <h3>Veiledning for veranda 25m²</h3>
      <p><strong>Materialer:</strong></p>
      <ul>
        <li>25 stk terrassebord (28x120mm x 5m)</li>
        <li>12 stk bjelker (48x148mm)</li>
        <li>6 stolpesko, 6 søylesko + betong</li>
        <li>Skruer og beslag</li>
      </ul>
      <p><strong>Estimert pris:</strong> ca 17 500 kr (Montér, Maxbo, Obs Bygg – april 2025)</p>
      <p><strong>Tid:</strong> 20–30 timer (2 personer)</p>
      <p><strong>Regler:</strong> Følger TEK17 og byggforsk-anbefalinger.</p>
    `;
  } else if (prosjekt === "garasje") {
    res.innerHTML = `
      <h3>Garasje kommer snart!</h3>
      <p>Vi jobber med å lage komplett veiledning for bygging av garasje inkl. materialliste og regler.</p>
    `;
  } else if (prosjekt === "eget") {
    res.innerHTML = `
      <h3>Ditt eget prosjekt</h3>
      <p>Beskriv hva du ønsker å bygge. Last opp bilder eller tegninger, så hjelper vi deg med veiledning.</p>
      <p><strong>Tips:</strong> Husk å sjekke regler for avstand til nabo, maks høyde og brannkrav.</p>
    `;
  }
}
