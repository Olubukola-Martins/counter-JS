'use strict';
// const increase = document.querySelector(".Increase");
// const decrease = document.querySelector(".Decrease");
// const reset = document.querySelector(".Reset");

// increase.addEventListener("click", function(){
//  count ++;
//  counter.textContent = count;
// });
// decrease.addEventListener("click", function(){
//     count --;
//     counter.textContent = count;
//    });
// reset.addEventListener("click", function(){
//     counter.textContent = 0;
//    });
   
const counter = document.querySelector(".count");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let styles = e.currentTarget.id;
        if (styles == 'increase') {
            count ++;
           }
         else if (styles == 'decrease') {
            count --;
           }
         else {
            count = 0
            };
        counter.textContent = count;
        if (count > 0) {
            counter.style.color = "green"}
        else if (count < 0) {
            counter.style.color = "red"}
        else {
            counter.style.color = "black"}
    })
})



