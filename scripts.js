// document.querySelector("#heading").style.fontSize = "4em";

function myFirstFunction() {
  var h1 = document.createElement("h1");
  // h1.innerHTML = "project 14";
  h1.textContent = "project 14";
  h1.style.fontSize = "5em";
  document.body.appendChild(h1);
}

// arrow function
// var myFirstFunction = () => {
//   var h1 = document.createElement("h1");
//   h1.innerHTML = "project 14";
//   h1.textContent = "project 14";
//   h1.style.fontSize = "5em";
//   document.body.appendChild(h1);
// };

// lots of events i.e click mouseover mouseout dblclick resize
document.querySelector("#btn").addEventListener("click",myFirstFunction);


function changeBodyBgColor() {
    document.body.style.backgroundColor = "black"
}

document.querySelector("[data-btn]").addEventListener('click', changeBodyBgColor);

function rotateImage() {
    var image = document.querySelector("img");
    image.style.rotate = "45deg"
}

function printFormInput() {
    var input = document.querySelector("#input")
    var ul = document.querySelector("#list")
    var li = document.createElement("li")
    li.innerHTML = input.value
    ul.appendChild(li)
}

var colors = ['red', 'green', 'blue', 'orange', 'yellow'];

function printColorName(color) {
    var p = document.createElement('p');
    p.textContent = color;
    p.style.backgroundColor = color
    document.body.appendChild(p)
}

colors.forEach(printColorName)

var numbers = [1050, 1066, 1052, 1053, 1064]

function showImage(id) {
    console.log(id)
    var image = document.createElement('img');
    image.src = "https://picsum.photos/id/" + id + "/100";
    document.body.appendChild(image)
}

numbers.forEach(showImage)