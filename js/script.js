const searchInput = document.getElementById("searchInput");

if(searchInput){

const cards = document.querySelectorAll(".blog-card");

searchInput.addEventListener("keyup",function(){

const value = this.value.toLowerCase();

for(let card of cards){

const text = card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}
else{

card.style.display="none";

}

}

});

}

const categoryButtons=document.querySelectorAll(".category-btn");

const cards=document.querySelectorAll(".blog-card");

for(let button of categoryButtons){

button.addEventListener("click",function(){

const category=this.innerText.toLowerCase();

for(let card of cards){

if(category==="all"){

card.style.display="block";

}
else{

const heading=card.querySelector("h2").innerText.toLowerCase();

if(heading.includes(category)){

card.style.display="block";

}
else{

card.style.display="none";

}

}

}

});

}