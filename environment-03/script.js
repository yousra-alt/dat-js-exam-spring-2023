"use strict";
import { events } from "./data.js";

window.addEventListener("load", initApp);

let eventsList = events;
console.log(eventsList);

function initApp() {
  eventsList.sort(sortByFirstDate);

filterList()
}

function showEvents(eventsList) {
  console.log(eventsList);
  for (const event of eventsList) {
    document.querySelector("#events-list").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
    <li>${event.title}</li>
    <li>${event.description}</li>
    <li>${event.date}</li>


    `
    );
  }
}

function sortByFirstDate(a, b) {
  return a.date.localeCompare(b.date);
}
function filterList() {

const filteredList = eventsList.filter(event =>event.date.includes("-06-"))
showEvents(filteredList);
}