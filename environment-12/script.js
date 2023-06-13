"use strict";

window.addEventListener("load", initApp);

let postCodes;
let memberList = [];
async function initApp() {
let zipBox= document.querySelector("#postnr");
  postCodes = await getPostCode();
  console.log(postCodes);
  document.querySelector("#address-form").addEventListener("submit", submitForm);
  zipBox.addEventListener("keyup", () => autoPostCode(zipBox.value));
}

async function getPostCode() {
  const response = await fetch("postnumre.json");
  const data = await response.json();
  return data;
}

function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  const navn = form.navn.value;
  const adresse = form.adresse.value;
  const zip = form.postnr.value;
  const by = form.by.value;
  const email = form.email.value;
  const nyhedsbrev = form.nyhedsbrev.checked;
  const membmer = { navn, adresse, zip, by, email, nyhedsbrev };

  memberList.push(membmer);
  console.log(memberList);
}

function autoPostCode(zip) {
const city = postCodes.find(a =>a.postnr == zip)
if (zip.length == 4) {
    document.querySelector("#by").value = city.by;

}
console.log(city);
}