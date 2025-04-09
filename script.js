function selectProject(project) {
  const result = document.getElementById("result");
  if (!result) {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.id = "result";
    main.appendChild(div);
  }

  const output = document.getElementById("result");

  switch (project) {
    case "veranda":
      output.innerHTML = `
        <h3>Veiledning for veranda 25m² (5x5 meter)</h3>
        <ul>
          <li><strong>Materialer:</strong>
            <ul>
              <li>25 stk terrassebord (28x120 mm x 5m)</li>
              <li>12 stk bjelker (48x148 mm)</li>
              <li>6 stk søylesko + betong</li>
              <li>Skruer og beslag</li>
            </ul>
          </li>
          <li><strong>Estimert pris:</strong> ca 17 500 kr (Montér, Maxbo, Obs Bygg)</li>
          <li><strong>Tidsbruk:</strong> 20–30 timer (2 personer)</li>
          <li><strong>Regelverk:</strong> Bygg uten søknad om under 50m². Følger TEK17.</li>
        </ul>
      `;
      break;

    case "garasje":
      output.innerHTML = `
        <h3>Standard garasje 36m² (6x6 meter)</h3>
        <ul>
          <li><strong>Materialer:</strong> Bindingsverk, takstoler, kledning, port, dør, vindu</li>
          <li><strong>Estimert pris:</strong> 130 000 – 180 000 kr (avhenger av leverandør)</li>
          <li><strong>Tidsbruk:</strong> 80–100 timer (to personer)</li>
          <li><strong>Regelverk:</strong> Krever som regel byggesøknad. Brannsikring og avstand må vurderes.</li>
        </ul>
      `;
      break;
