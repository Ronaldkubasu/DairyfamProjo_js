const TOTAL_PRODUCTION = [
    {
      month: "January",
      volume: 1000,
    },
    {
      month: "February",
      volume: 1500,
    },

    {
        month: "April",
        volume: 700,
    }
  ];
  
  const tableBodyEl = document.querySelector("#data-table tbody");
  const resultsEl = document.querySelector("#results");
  const priceInput = document.querySelector("#price");
  
  function displayTotalProduction() {
    // Study DOM manipulation in JavaScript
    for (const [index, production] of TOTAL_PRODUCTION.entries()) {
      const row = document.createElement("tr");
      const idCol = document.createElement("td");
      const monthCol = document.createElement("td");
      const volumeCol = document.createElement("td");
  
      idCol.textContent = index;
      monthCol.textContent = production.month;
      volumeCol.textContent = production.volume;
  
      row.appendChild(idCol);
      row.appendChild(monthCol);
      row.appendChild(volumeCol);
      tableBodyEl.appendChild(row);
    }
  }
  