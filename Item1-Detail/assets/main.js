fetch("./assets/data.json")
  .then(function(response){
    return response.json();
  })
  .then(function(item){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let i = 0; i < item.length; i++){
      let perfume = item[i];
      let newItem = document.createElement("div");
      newItem.classList.add("perfume");
      out += `
      <div class="perfume">${"Name . " + perfume.perfume}</div>
      <div class="perfume">${"Launched Date . " + perfume.launchedDate}</div>
      <div class="perfume">${"Brand Designer . " + perfume.branddesigner}</div>
      `;
      newItem.innerHTML = out;
      placeholder.appendChild(newItem);
      out = "";
    }
  })

const buttoncricle = document.getElementById("Button"); 
const message = document.getElementById("ToToggle");

message.style.display = "none";

buttoncricle.addEventListener("click", function(){
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});

fetch("./assets/data.json")
  .then(function(response){
    return response.json();
  })
  .then(function(item2){
    let placeholder2 = document.querySelector("#data-output2");
    let out = "";
    for(let i = 0; i < item2.length; i++){
      let perfume2 = item2[i];
      let newItem2 = document.createElement("div");
      newItem2.classList.add("perfume2");
      out += `
      <div class="perfume2">${"Top Notes . " + "<br>" + perfume2.topNotes}</div>
      <br>
      <div class="perfume2">${"Middle Notes . " + "<br>" + perfume2.middleNotes}</div>
      <br>
      <div class="perfume2">${"Base Notes . " + "<br>" + perfume2.baseNotes}</div>
      <br>
      <br>
      <br>
      <br>
      <div class="perfume2">${"Main Accords . " + "<br>" + perfume2.mainAccords}</div>
      `;
      newItem2.innerHTML = out;
      placeholder2.appendChild(newItem2);
      out = "";
    }
  })

const flipContainer = document.querySelector("#flip-container");

flipContainer.addEventListener("click", function() {
  this.classList.toggle("flip"); 
});

const close = document.querySelector(".background");
const detail = document.getElementById("ToToggle");

close.addEventListener("click", function() {
  detail.style.display = "none";
});
