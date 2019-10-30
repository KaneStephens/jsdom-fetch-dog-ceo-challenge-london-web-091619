console.log("%c HI", "color: firebrick");
var breeds = [];

document.addEventListener("DOMContentLoaded", function() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
      return response.json();
    })
    .then(function(jso) {
      for (const newIm of jso.message) {
        let newTag = document.createElement("img");
        newTag.src = newIm;
        document.querySelector("#dog-image-container").appendChild(newTag);
      }
    });

  fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
      return response.json();
    })
    .then(function(jso) {
      for (const key in jso.message) {
        breeds.push(key);
        listDogs(key);
      }
    });

  const optionArray = document.querySelector("select");

  optionArray.addEventListener("change", function(e) {
    let searchValue = e.target.value;
    let finalArray = [];
    for (let breed of breeds) {
      if (breed[0] === searchValue) {
        finalArray.push(breed);
      }
    }
    document.querySelector("#dog-breeds").innerHTML = "";
    for (const breed of finalArray) {
      listDogs(breed);
    }
  });

  function listDogs(parameter) {
    let newTag = document.createElement("li");
    newTag.innerText = parameter;
    document.querySelector("#dog-breeds").appendChild(newTag);
    newTag.addEventListener("click", function(e) {
      e.target.style.color = "pink";
    });
  }
});
