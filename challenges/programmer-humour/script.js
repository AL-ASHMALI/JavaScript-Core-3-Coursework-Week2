const main = document.querySelector("main");
let image = document.createElement("img");
let theTitle = document.querySelector("h1"); 
fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then((data) => beFunny(data))
  .catch((error) => {
    console.log("There is an error " + error);
  });

  function beFunny(data) {
    image.src = data.img;
    theTitle.innerHTML = data.title;
    main.appendChild(image);
  }