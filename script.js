function handleProjectSelection() {
  const selectedProject = document.getElementById("projectSelect").value;
  const result = document.getElementById("result");

  switch (selectedProject) {
    case "veranda":
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
        <p><strong>Tidsbruk:</strong> 20–30 timer (2 personer)</p>
        <p><strong>Standard:</strong> Følger TEK17 og Byggforsk anbefalinger.</p>

        <h4>Prissammenligning fra leverandører (april 2025)</h4>
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ccc;">Leverandør</th>
              <th style="text-align:left; border-bottom: 1px solid #ccc;">Estimert pris</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Montér</td><td>kr 17 490,-</td
