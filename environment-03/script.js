"use strict";

import { events } from "./data.js";

window.addEventListener("load", start);

function start() {
  console.log(events);
  showeEvents(events);
}

function showeEvents(listOfEvents) {
    listOfEvents.sort(compareDates);
  // funktionen her viser list of events, den løber igennem.
  for (const event of listOfEvents) {
    // tester her om det virker. Bruger for-of loop
    console.log(event);
    const html = /*html*/ `<li>${event.date}: ${event.description}</li>`;
    document.querySelector("#students-list").insertAdjacentHTML("beforeend", html);
  }
}

function compareDates(event1, event2) {
  const date1 = new Date(event1.date);
  const date2 = new Date(event2.date);
  console.log(date1.getTime());
  console.log(date2.getTime());
  return date1.getTime() - date2.getTime();
}

// få events/array importeret. consol log i start for at vise array.

// loop det igennem og vise i html. tjek html og se listen

// sorter efter data.
