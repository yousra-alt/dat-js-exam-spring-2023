"use strict";
window.addEventListener("load", initApp);

import { events } from "./data.js";

function initApp() {
  console.log(events);
  document.querySelector("#create-event-form").addEventListener("submit", submitEvent);
}

function submitEvent(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value;
  const description = form.description.value;
  const date = form.date.value;

  const newEvent = { title, description, date };
  events.push(newEvent);
  console.log(events);
  filtereList(events);
}

function filtereList(events) {
  const filtermonth = events.filter((event) => event.date.includes("-06"));
  console.log(filtermonth);
}
