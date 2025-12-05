

  // calculator code 
function calculateEnergy() {

  const name = document.getElementById("applianceName").value.trim();
  const watts = parseFloat(document.getElementById("watts").value);
  const hours = parseFloat(document.getElementById("hours").value);
  const quantity = parseInt(document.getElementById("quantity").value, 10);

  // user enters emission factor
  const rawFactor = document.getElementById("cost").value.replace(",", ".");
  const emissionFactor = parseFloat(rawFactor);

  if (!name || isNaN(watts) || isNaN(hours) || isNaN(quantity)) {
    alert("Please fill all required fields.");
    return;
  }

  // kWh calculations
  const kwhDay = (watts * hours * quantity) / 1000;
  const kwhMonth = kwhDay * 30;

  // carbon emission calculations
  let co2Day = 0;
  let co2Month = 0;

  if (!isNaN(emissionFactor)) {
    co2Day = kwhDay * emissionFactor;
    co2Month = kwhMonth * emissionFactor;
  }

  // build output text
  let resultText =
    `<strong>${name}</strong><br>` +
    `Daily Energy: ${kwhDay.toFixed(2)} kWh<br>` +
    `Monthly Energy: ${kwhMonth.toFixed(2)} kWh<br>` +
    `<hr>`;

  if (!isNaN(emissionFactor)) {
    resultText +=
      `Daily CO₂ emissions: ${co2Day.toFixed(2)} kg<br>` +
      `Monthly CO₂ emissions: ${co2Month.toFixed(2)} kg<br>`;
  } else {
    resultText += `No emission factor added — cannot compute CO₂.`;
  }

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = resultText;
  resultBox.classList.remove("d-none");
}