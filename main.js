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
  

  function incomeOverTime(sellingPrice, time) {
    // Study Array methods in JavaScript.
    // Alternatively, you can replace this with a regular for loop. The results will be the same.
    const totalVolume = TOTAL_PRODUCTION.reduce(
      (total, prod) => total + prod.volume,
      0
    );
  
    const volumePerWeek = totalVolume / time;
    return sellingPrice * volumePerWeek;
  }
  
  // 1. Weekly
  
  function calculateWeeklyIncome() {
    const price = priceInput.value;
  
    // Please improve to be more accurate i.e. account for various # of days in
    // a month such as (31,30,29)
    const totalNumberOfWeeks = TOTAL_PRODUCTION.length * 4;
  
    return incomeOverTime(price, totalNumberOfWeeks);
  }
  
  function showWeeklyIncome() {
    const income = calculateWeeklyIncome();
    // Study Template String
    resultsEl.textContent = `Your weekly icome will be ksh ${income}`;
  }
  
  function handleWeeklyIncome() {
    //  adding events 
    document
      .querySelector("#show-weekly-income")
      .addEventListener("click", showWeeklyIncome);
  }
  
  // 2. Monthly
  
  // 3. Yearly
  
  // 4. Generate Report
  
  // 5. Comparison,
  
  function init() {
    displayTotalProduction();
    handleWeeklyIncome();
  }
  
  init();
  