console.log("%c HI", "color: firebrick");
var breeds = [];

document.addEventListener("DOMContentLoaded", function() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
      return response.json();
    })
    .then(function(jso) {
      for (const newIm of jso.message) {
        // create new a tag to show the image
        let newTag = document.createElement("img");
        // insert the current url into the tag src
        newTag.src = newIm;
        // add to page
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
        // create new a tag to show the image
        let newTag = document.createElement("li");
        // insert the current url into the tag src
        newTag.innerText = key;
        // add to page
        document.querySelector("#dog-breeds").appendChild(newTag);
        //   add event listener to change colour to pink
        newTag.addEventListener("click", function(e) {
          e.target.style.color = "pink";
        });
      }
    });

  // add an event listener for each child of "#breed-dropdown" use 'e'
  // set search value as value of option clicked (e.target)
  // create upArray to return values at end
  // iterate through all breeds and push to upArray if breed[0] === search value
  // update "#dog-breeds" ul with new upArray (each as li)

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
      let newTag = document.createElement("li");
      newTag.innerText = breed;
      document.querySelector("#dog-breeds").appendChild(newTag);
      newTag.addEventListener("click", function(e) {
        e.target.style.color = "pink";
      });
    }
  });
});
