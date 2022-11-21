'use strict';



const btn = document.querySelector('.btn'),
      block = document.querySelector('.block');

let animate;

btn.addEventListener('click', () => {
    if (!animate) {
         animate = block.animate([
            {transform: 'translateY(0)'},
            {transform: 'translateX(100px) rotate(270deg)'},
            {transform: 'translateY(100px)'},
            {transform: 'translateX(-100px) rotate(180deg)'},
            {transform: 'translateY(-100px)'},
            {transform: 'translateY(0)'},
        ], {
            duration: 3000,
            iterations: Infinity,
        });
    }
     else if (animate.playState === 'paused') {
        animate.play();
    } 
    else {
        animate.pause();
    }
});


