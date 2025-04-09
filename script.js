function generateGuide() {
  const input = document.getElementById('userInput').value.toLowerCase();
  const result = document.getElementById('result');

  if (input.includes("veranda") && input.includes("25")) {
    result.innerHTML = `
      <h3>Veiledning for veranda 25m² (5x5 meter)</h3>
      <p><strong>Materialer:</strong></p>
      <ul>
        <li>25 stk impregnert terrassebord (28x120mm x 5m)</li>
        <li>12 stk bjelker (48x148mm)</li>
        <li>6 stk stolpesko</li>
        <li>6 stk søylesko + betong</li>
        <li>Skruer og beslag</li>
      </ul>
      <p><strong>Estimert pris:</strong> ca 17 500 kr (Montér, Maxbo, Obs Bygg – april 2025)</p>
      <p><strong>Tidsbruk:</strong> 20–30 timer (2 personer)</p>
      <p><strong>Standard:</strong> Følger TEK17 og byggforsk anbefalinger.</p>
    `;
  } else {
    result.innerHTML = "<p>Beklager, vi har foreløpig bare veiledning for veranda. Flere prosjekter kommer!</p>";
  }
}
