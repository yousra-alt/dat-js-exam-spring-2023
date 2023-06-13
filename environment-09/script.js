"use strict";

window.addEventListener("load", initApp);

let posts = [];

async function initApp() {
  posts = await getPost();
  console.log(posts);
  showPost(posts);
  document.querySelector("#sortorder").addEventListener("change", sortPosts);
}

async function getPost() {
  const response = await fetch("posts.json");
  const data = response.json();
  return data;
}

function showPost(posts) {
  document.querySelector("#posts-list").innerHTML = "";
  for (const post of posts) {
    document.querySelector("#posts-list").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
    
   <article>
                    <img src="${post.image}" alt="${post.caption}" />
                    <h2>${post.caption}</h2>
                    <p>Likes: ${post.likes}</p>
                </article>
    
    
    `
    );
  }
}

function sortPosts() {
  let option = document.querySelector("#sortorder").value;
  console.log(option);
  if (option === "ascending") {
    posts.sort(sortByLikes);
    showPost(posts);
  } else if (option === "descending") {
    posts.sort(sortByLikes).reverse();
    showPost(posts);
  }
}

function sortByLikes(a, b) {
  return a.likes - b.likes;
}
