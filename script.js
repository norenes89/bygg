document.getElementById("projectForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const navn = document.getElementById("navn").value;
  const adresse = document.getElementById("adresse").value;
  const epost = document.getElementById("epost").value;
  const telefon = document.getElementById("telefon").value;
  const beskrivelse = document.getElementById("beskrivelse").value.toLowerCase();

  const aiResponse = document.getElementById("aiResponse");
  const materialliste = document.getElementById("materialliste");
  const oppfolgingsSporsmal = document.getElementById("oppfolgingsSporsmal");
  const generertBilde = document.getElementById("generertBilde");
  const prisOversikt = document.getElementById("prisOversikt");
  const tips = document.getElementById("tips");

  aiResponse.classList.remove("hidden");

  if (beskrivelse.includes("garasje")) {
    materialliste.innerHTML = `
      <h3>Materialforslag</h3>
      <ul>
        <li>48x148mm konstruksjonsvirke (reisverk)</li>
        <li>GU gipsplater eller vindtettplate</li>
        <li>Liggende dobbelfals kledning</li>
        <li>Takstoler – 30 graders vinkel</li>
        <li>Takstein (f.eks. BMI Zanda Protector)</li>
        <li>1 stk dobbel port (5m bredde)</li>
        <li>1 stk ytterdør</li>
        <li>2 stk vinduer (40x120 cm, åpningsbare)</li>
        <li>Skruer, beslag, vindsperre, maling, osv.</li>
      </ul>
    `;

    oppfolgingsSporsmal.innerHTML = `
      <h3>Vi trenger mer info:</h3>
      <p>Hvilken type kledning ønsker du?<br>
      Skal garasjen isoleres?<br>
      Hvilken farge på ytterpanel?<br>
      Skal det være takstein eller platetak?</p>
    `;

    generertBilde.innerHTML = `<p>[Bilde genereres her – AI-tegning]</p>`;

    prisOversikt.innerHTML = `
      <h3>Priseksempel</h3>
      <ul>
        <li>48x148mm konstruksjonsvirke: 45 kr/m (Montér)</li>
        <li>Kledning dobbelfals: 27 kr/lm (Maxbo)</li>
        <li>Takstein: ca 165 kr/m² (Byggmakker)</li>
        <li>Dør og vinduer: ca 6 000 kr</li>
        <li>Dobbel port: 15 000 kr</li>
      </ul>
      <p><strong>Totalpris estimat:</strong> 85 000–120 000 kr</p>
    `;

    tips.innerHTML = `
      <h3>Tips til bygging</h3>
      <ul>
        <li>Hold minst 4 meter til nabogrensen hvis ikke annet er avtalt.</li>
        <li>Sjekk med kommunen om garasjen må meldes eller søkes.</li>
        <li>Bruk vindsperre og vannbrett over vinduene.</li>
        <li>Bruk trykkimpregnert svill mot grunnmur.</li>
      </ul>
    `;
  } else {
    materialliste.innerHTML = "<p>Vi støtter foreløpig bare garasje. Flere prosjekter kommer!</p>";
  }
});
