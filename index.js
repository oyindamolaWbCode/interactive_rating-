// let theContain = document.querySelector(".the-contain").style.display = "none";

let thankYou = document.querySelector(".thankyou").style.display = "none";

// get the DOM
let ratingOne = document.querySelectorAll(".rating-1");
let rate = document.getElementById("rate");
let rateOne = document.getElementById("rate1");
let rateTwo = document.getElementById("rate2");
let rateThree = document.getElementById("rate3");
let rateFour = document.getElementById("rate4");
let span = document.getElementById('rating');
console.log( rate);

//check rate when clicked
for(let i = 0; i < ratingOne.length; i++){
    // getting the clicked number value property from 1 to 5//
    let rating = ratingOne[i].innerHTML;

    // looping through the numbers to check for a previously selected rating and removing if such. //
    // Necessary in order to have only one rating selected at a time //
    for (let i = 0; i < ratingOne.length; i++) {
              ratingOne[i].classList.contains('selected')
              ratingOne[i].classList.remove('selected');
}
}

// add the selected class which highlights the selected rating //
