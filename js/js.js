let icon = document.getElementsByClassName("icon")[0];
let ull = document.getElementById("ull");
var isVisible = false;
// icon.addEventListener("click", () => {
//     ull.classList.add("ss");


// })

// icon.addEventListener("click", () => {
//     if (ull.style.display === "none") {
//         ull.style.display = "block";
//     } else {
//         ull.style.display = "none";
//     }
// });

icon.addEventListener("click", function () {
    // Check if the window width is less than 600 pixels
    if (window.innerWidth <= 1029) {
        if (isVisible) {
            ull.style.display = "none";
            isVisible = false;
        }else if (window.innerWidth > 1029){
            ull.style.display = "flex";
        }
         else {
            ull.style.display = "block";
            isVisible = true;
        }
    }
});



// icon.addEventListener("click", function () {
//     // Check if the window width is less than or equal to 600 pixels
//     if (window.innerWidth <= 600) {
//         if (isVisible) {
//             ull.style.display = "none";
//             isVisible = false;
//         } else {
//             ull.style.display = "block";
//             isVisible = true;
//         }
//     } else {
//         // If window width is greater than 600 pixels, toggle visibility normally
//         if (isVisible) {
//             ull.style.display = "none";
//             isVisible = false;
//         } else {
//             ull.style.display = "block";
//             isVisible = true;
//         }
//     }
// });

// let currentSlide = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.slide');
//     if (index >= slides.length) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = slides.length - 1;
//     } else {
//         currentSlide = index;
//     }
//     const offset = -currentSlide * 100;
//     document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
// }

// function changeSlide(direction) {
//     showSlide(currentSlide + direction);
// }

// عرض الشريحة الأولى عند تحميل الصفحة
// showSlide(currentSlide);





// script.js
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides.style.transform = `translateX(${currentSlide * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    changeSlide(0); // عرض الشريحة الأولى عند تحميل الصفحة
});



