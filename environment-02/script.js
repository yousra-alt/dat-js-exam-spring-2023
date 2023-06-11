"use strict";

window.addEventListener("load", initApp);
let athletes = [];

function initApp() {
  document.querySelector("#create-athlete-form").addEventListener("submit", createAthelete);

}

function createAthelete(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const topSpeed = Number(form.topSpeed.value);

  const athlete = { name, topSpeed };
  athletes.push(athlete);
  console.log(athletes);
  filterList(athletes)
}

function showTop3Atheletes(athletes) {
  document.querySelector("#athletes-list").innerHTML = "";

  for (const athlete of athletes) { 
    
  
    document.querySelector("#athletes-list").insertAdjacentHTML(
      "beforeend",
      /*html*/ `

<li>${athlete.name}</li>
<li>${athlete.topSpeed}</li>

  `
    );


  }
}

function filterList(athletes) {

  for (const athlete of athletes) {
    
  
  if (athlete.topSpeed <50) {
    athletes.pop(athlete)
    
  } else if (athlete.topSpeed > 60) {
    athletes.pop(athlete);
  }}
  console.log(athletes)
  createTop3List();
}

function createTop3List() {
  athletes.sort(sortByTime);
  const top3 = athletes.slice(0, 3);

  showTop3Atheletes(top3)
  }



function sortByTime(a, b) {
  return b.topSpeed - a.topSpeed;
}

