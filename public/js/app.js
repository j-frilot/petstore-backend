// //SLIDE SHOW

// window.addEventListener("DOMContentLoaded", function () {
//     let firstSlide = document.querySelector(".first-slide");
//     firstSlide.style.display = "flex";
// });

// let slides = [
//     "url('images/home/slide-1.jpg')",
//     "url('images/home/slide-2.jpg')",
//     "url('images/home/slide-3.jpg')"
// ];

// let picOne = slides[0];
// let picTwo = slides[1];
// let picThree = slides[2];

// slideCount = 0;
// function autoSlide() {
//     // left.style.display = "none";
//     // right.style.display = "none";
//     let slideShow = document.querySelector(".slide-show");
//     slideImage = slideShow.style.backgroundImage = slides[slideCount];
//     slideCount++;

//     if (slideCount >= slides.length) {
//         slideCount = 0;
//     }
// }
// setInterval(autoSlide, 3000);

// END SLIDE SHOW CONTENT

/////number incrementer

// let rescueNum = document.querySelector(".rescue-num");
// let adoptNum = document.querySelector(".adopt-num");
// let volunteerNum = document.querySelector(".volunteer-num");

// let rescueCount = 1;
// setInterval(() => {
//     if (rescueCount < 342) {
//         rescueCount++;
//         let rescueNum = (document.querySelector(
//             ".rescue-num"
//         ).innerText = rescueCount);
//     }
// }, 3);

// let adoptCount = 1;
// setInterval(() => {
//     if (adoptCount < 155) {
//         adoptCount++;
//         let adoptNum = (document.querySelector(
//             ".adopt-num"
//         ).innerText = adoptCount);
//     }
// }, 10);

// let volunteerCount = 1;
// setInterval(() => {
//     if (volunteerCount < 50) {
//         volunteerCount++;
//         let volunteerNum = (document.querySelector(
//             ".volunteer-num"
//         ).innerText = volunteerCount);
//     }
// }, 50);
