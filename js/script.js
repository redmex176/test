"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.button'),
        box = document.querySelector('.box');


    btn.addEventListener('click', () => {
        let pos = 0;
        const timerId = setInterval(myAimation, 10);
        box.classList.add('shadow');

        function myAimation() {
            function frame() {
                if (pos == 350) {
                    clearInterval(timerId);
                    box.classList.remove('shadow');

                } else {
                    pos++;
                    box.style.left = pos + "px";
                }
            }
            frame();
        }

    });


});