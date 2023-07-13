import {states} from './data.js'
const Container = document.querySelector(".container") 
const output = document.querySelector(".output") 

       let html = ""
    for(let state of states ){
        html += `
                  <div class="projuct">
                  <h3>${state.name}</h2>
                  <h4>$${state.price}</h3>
                  <img src="${state.image}">
                  <button id="${state.id}">Buy Me</button>
                  <p class= "output"></p>
                  </div>
                `
   }
       Container.innerHTML = html

Container.addEventListener("click",(e)=>{
    document.getElementById(e.target.id).parentElement.style.backgroundColor = "tomato"
    console.log(e.target.id ) 
})


