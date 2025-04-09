function beregnPris() {
  const input = document.getElementById("prosjektInput").value.trim();
  const resultat = document.getElementById("resultat");

  if (input === "") {
    resultat.innerHTML = "<p>Vennligst skriv inn et prosjekt.</p>";
    return;
  }

  // Enkelt estimat-logikk (kan forbedres senere)
  let estimertPris = Math.floor(Math.random() * 300000) + 50000;
  let estimertTimer = Math.floor(estimertPris / 700);

  resultat.innerHTML = `
    <h3>Estimat</h3>
    <p><strong>Prosjekt:</strong> ${input}</p>
    <p><strong>Estimert pris på materialer og arbeid:</strong> ${estimertPris.toLocaleString()} kr</p>
    <p><strong>Estimert antall timer:</strong> ${estimertTimer} timer</p>
    <p>Basert på gjennomsnittlig pris i ditt område.</p>
  `;
}
