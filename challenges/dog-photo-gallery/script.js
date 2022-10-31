const main = document.querySelector("main"); 
const btnContainer = document.querySelector("div"); 
const addImage = document.createElement("button"); 
const deleteImg = document.createElement("button"); 
const imageWrapper = document.createElement("ul");
btnContainer.append(addImage, deleteImg) 
main.appendChild(imageWrapper);
addImage.className = "add"; 
deleteImg.className = "remove";
addImage.innerText = "Add dog image..."; 
deleteImg.innerText = "Delete dog image";

addImage.addEventListener("click", () => {
let img = document.createElement("img"); 
imageWrapper.appendChild(img); 

fetch("https://dog.ceo/api/breeds/image/random") 
.then((response) => response.json())
.then((data) => {
 if (data.status == "success") {
        img.setAttribute("src", data.message);
      } else throw Error;
    });
}) 

deleteImg.addEventListener("click", () => {
let removeImg = document.querySelector("img"); 
removeImg.remove(); 
}); 