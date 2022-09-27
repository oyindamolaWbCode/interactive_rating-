

let thanYoun = document.querySelector(".thankyoun").style.display = "none";

// get the DOM

let ratingOne = document.querySelectorAll(".rating-1");
let rate = document.getElementById("rate");
let rateOne = document.getElementById("rate1");
let rateTwo = document.getElementById("rate2");
let rateThree = document.getElementById("rate3");
let rateFour = document.getElementById("rate4");
let span = document.getElementById('rating');
let submit = document.getElementById("submit");
let thankYoun = document.querySelector(".thankyoun");
let theContain = document.querySelector(".the-contain")
console.log( rate);

//check rate when clicked

for(let i = 0; i < ratingOne.length; i++){
  // Listening for click on each event
  ratingOne[i].addEventListener('click', () =>{
    // get the clicks from start to end
    rating = ratingOne[i].innerHTML;
    //removing previously clicked rate if another is clicked.
    for(let i = 0; i < ratingOne.length; i++){
      ratingOne[i].classList.contains('selected') 
      ratingOne[i].classList.remove('selected');
    }
    //add selected rating
    ratingOne[i].classList.add('selected');
    //once btn is clicked it is redirected to thank you
    submit.addEventListener('click', ()=>{
      theContain.style.display = 'none';
      thankYoun.style.display = 'block';
      span.innerHTML = rating;
    });
  });
}