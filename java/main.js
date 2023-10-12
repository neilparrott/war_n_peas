function main() {

const countries = [
    "Afghanistan","Algeria","Argentina","Australia","Bangladesh",
    "Barbados","Bolivia","Brazil","Canada","Chile",
    "China","Colombia","Cuba","Denmark","Ecuador","Estonia",
    "Ethiopia","Fiji","Finland","France","Germany","Greece","India","Indonesia",
    "Iran","Iraq","Ireland","Italy","Japan","Kenya","Mexico","Monaco","Myanmar",
    "Nigeria","Norway","Pakistan","Papua-New-Guinea","Paraguay","Peru",
    "Philippines","Poland","Russia","Singapore","South-Africa","South-Korea",
    "Spain","Sudan","Sweden","Tanzania","Thailand","Torres-Strait-Islanders",
    "Uganda","UK","Vietnam" 
]; 
var score = 0;
function getUniqueRandomNumbers(min, max, count) {
  if (max - min + 1 < count) {
      throw new Error("Range is too small to generate the desired count of unique numbers.");
  }
  var uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
      var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (randomNum >= 0) { 
       uniqueNumbers.add(randomNum);
      };
  };
 
  return Array.from(uniqueNumbers);
}
var flags_to_show = getUniqueRandomNumbers(0,countries.length-1,4);
// Get the canvas elements and their contexts
var canvas1 = document.getElementById("myCanvas");
var ctx = canvas1.getContext("2d");
canvas1.addEventListener("click", function() { 
  score=check_answer(img.src,chosen_country,score);
  score_element=document.getElementById("score").textContent=score;
  reload_images();
});

var canvas2 = document.getElementById("myCanvas2");
var ctx2 = canvas2.getContext("2d");
canvas2.addEventListener("click", function() { 
  score=check_answer(img2.src,chosen_country,score);
  score_element=document.getElementById("score").textContent=score;
  reload_images();
});

var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas3.getContext("2d");
canvas3.addEventListener("click", function() { 
  score=check_answer(img3.src,chosen_country,score);
  score_element=document.getElementById("score").textContent=score;
  reload_images();
});


// get the p element for the choose country
var choose_country = document.getElementById("selectedCountry");
choose_country.textContent=countries[flags_to_show[Math.floor(Math.random() * 3)]];
var chosen_country=choose_country.textContent;

// Create the image objects for each canvas
var img = new Image();
img.src = "images/" + countries[flags_to_show[0]] + "@3x.png"; // Replace with the URL of your image
var img2 = new Image();
img2.src = "images/" + countries[flags_to_show[1]] + "@3x.png"; // Replace with the URL of your image
var img3= new Image();
img3.src = "images/" + countries[flags_to_show[2]] + "@3x.png"; // Replace with the URL of your image
// Set the position where you want to place the image
const x = 1;
const y = 1;

// Draw the images on the canvas's
img.onload = function() {
  ctx.drawImage(img, x, y);   
};
img2.onload = function() {
  ctx2.drawImage(img2, x, y);
};
img3.onload = function() {
  ctx3.drawImage(img3, x, y);
};
function check_answer(image_source,chosen_country,score) {
  if (image_source.includes(chosen_country)) {
    return score += 1;
  };
    return  0 ; 
  }
  function reload_images() {
    ctx.clearRect(x, y, canvas1.width, canvas1.height);
    ctx2.clearRect(x, y, canvas2.width, canvas2.height);
    ctx3.clearRect(x, y, canvas3.width, canvas3.height);
    flags_to_show = getUniqueRandomNumbers(0,countries.length-1,4);
   
    choose_country.textContent=countries[flags_to_show[Math.floor(Math.random() * 3)]];
    chosen_country=choose_country.textContent;
    img.src = "images/" + countries[flags_to_show[0]] + "@3x.png"; 
    img2.src = "images/" + countries[flags_to_show[1]] + "@3x.png"; 
    img3.src = "images/" + countries[flags_to_show[2]] + "@3x.png"; 
    ctx.drawImage(img, x, y);
    ctx2.drawImage(img2, x, y);
    ctx3.drawImage(img3, x, y);
  };
};
