"use strict";
window.addEventListener("load", initApp);
let tickets;

async function initApp() {
  tickets = await getTickets();
  AddCounter(tickets);

  showTickets(tickets);
}

async function getTickets() {
  const response = await fetch("tickets.json");
  const data = await response.json();
  return data;
}

function showTickets(tickets) {
  document.querySelector("#tickets-list").innerHTML = "";
  for (const ticket of tickets) {
    document.querySelector("#tickets-list").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `

 <article>
        <h3>${ticket.eventName}</h3>
        <p class="ticketid">id: ${ticket.id}</p>
        <button>Use: ${ticket.counter}</button>
      </article>


`
    );
    document.querySelector("article:last-child button").addEventListener("click", () => upvote(ticket));
  }
}

function AddCounter(tickets) {
  for (const ticket of tickets) {
    ticket.counter = 0;
  }
}
function upvote(ticket) {
  ticket.counter = ticket.counter + 1;
  console.log(ticket.counter);

  tickets.sort(sortByCounter).reverse();
  showTickets(tickets);
}

function sortByCounter(a, b) {
  return a.counter - b.counter;
}
