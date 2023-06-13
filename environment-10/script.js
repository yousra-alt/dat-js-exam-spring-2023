"use strict";

window.addEventListener("load", initApp);

let posts;

async function initApp() {
posts = await getPosts()
console.log(posts);
showPosts(posts)
document.querySelector("#all").addEventListener("click", () =>showPosts(posts))
}

async function getPosts() {
const response = await fetch("posts.json")
const data = await response.json();
return data; 
}


function showPosts(posts) {
let checkbox = document.querySelector("#all").checked;
document.querySelector("#posts-list").innerHTML="";
    for (const post of posts) { {
   if (checkbox === false) {
    if (post.published === true) {
        showPost(post);
    }
   }else if(checkbox === true) {
    showPost(post);
   }
}
    }


function showPost(post) {
console.log(post);
    
    
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
