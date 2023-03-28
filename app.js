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
            counter.textContent = count;
        } else if (styles == 'decrease') {
            count --;
            counter.textContent = count;
        } else if (styles == 'reset') {
             counter.textContent = 0;
        } else {
            counter.textContent = 0;
        }
      
    })
})



