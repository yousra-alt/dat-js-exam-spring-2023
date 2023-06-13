// Envo-5:
// 1. Fetch "runners.json" i script og gem det i en variabel.
// 2. Vis de 3 hurtigste runners på podiet på hjemmesiden og deres resultater med 2 decimaltal.
// 3. Vis de næste 7 hurtigste runners efter 3. pladsen i runner-ups listen på hjemmesiden med deres resultater (2 decimaltal igen)

"use strict";

window.addEventListener("load", initApp);

let runners = [];

async function initApp() {
  runners = await getRunners();
  console.log(runners);
  runners.sort(sortByTime);
  console.log(runners);
  showTop3runners(runners);
  showTop7runners(runners)
}

async function getRunners() {
  const response = await fetch("runners.json");
  const data = await response.json();
  return data;
}

function showTop3runners(runners) {
  document.querySelector("#silver-name").textContent = `${runners[1].name}`;
  document.querySelector("#silver-time").textContent = `${runners[1].time}`.slice(0, 5);

  document.querySelector("#gold-name").textContent = `${runners[0].name}`;
  document.querySelector("#gold-time").textContent = `${runners[0].time}`.slice(0, 5);

  document.querySelector("#bronze-name").textContent = `${runners[2].name}`;
  document.querySelector("#bronze-time").textContent = `${runners[2].time}`.slice(0, 5);
}

function sortByTime(a, b) {
  return a.time - b.time;
}

function showTop7runners(runners) {
const top7runners = runners.slice(3,10)
console.log(top7runners)
  for (const runner of top7runners) {
   let runnerTime = runner.time.toString().slice(0,5)
    document.querySelector("#runnerups-list").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
<li>${runner.name} - ${runnerTime}</li>
<br>

`
    );
  }
}


