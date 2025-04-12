function startProject(type) {
  document.getElementById("custom-project").style.display = "block";
  document.getElementById("project-input").value = `Jeg vil bygge en ${type}`;
}

function startCustomProject() {
  document.getElementById("custom-project").style.display = "block";
}

async function sendToAI() {
  const input = document.getElementById("project-input").value;
  const navn = document.getElementById("navn").value;
  const adresse = document.getElementById("adresse").value;
  const epost = document.getElementById("epost").value;
  const telefon = document.getElementById("telefon").value;

  const fullPrompt = `Kundeinfo:\nNavn: ${navn}\nAdresse: ${adresse}\nE-post: ${epost}\nTlf: ${telefon}\n\nProsjektbeskrivelse:\n${input}\n\nStill spørsmål for å avklare detaljer om materialvalg. Deretter gi:\n- Materialliste med spesifikke valg\n- Pris per leverandør (Montér, Maxbo, Obs Bygg, XL Bygg, Byggmakker)\n- DinByggHjelp-pris som er lavere\n- Tips for bygging\n- Lag et bilde som viser prosjektet`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer DIN_API_NØKKEL",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: fullPrompt }],
    }),
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;

  document.getElementById("ai-response").style.display = "block";
  document.getElementById("ai-output").innerText = reply;

  // Generer bilde (placeholder nå)
  document.getElementById("project-image").innerHTML = `<img src="https://source.unsplash.com/featured/?garage" alt="Prosjektbilde" width="100%" />`;
}
