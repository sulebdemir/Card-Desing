import { books } from "../data/books.js";

const booksContainer = document.querySelector(".books-container");

document.addEventListener("DOMContentLoaded", () => {
  books.map((book) => {
    const { id, name, description, imageUrl,} = book;

    console.log(imageUrl)

    const card = document.createElement("div");
    card.classList.add("card");
    
    
    const img = document.createElement("div");  
    img.classList.add("box-img");
    img.style.backgroundImage = `url(${imageUrl})`; 
    card.appendChild(img); 
    
    const cardBox = document.createElement("div");
    cardBox.classList.add("card-box");
    card.appendChild(cardBox);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    card.appendChild(cardContent); 
    
    const title = document.createElement("div"); 
    title.classList.add("title");
    title.textContent = name;
    cardContent.appendChild(title);

    const cardDes = document.createElement("div");
    cardDes.classList.add("card-description");
    cardDes.innerText = description;
    cardContent.appendChild(cardDes);

    booksContainer.appendChild(card); 
  });
});
