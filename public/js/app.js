// //SLIDE SHOW
window.addEventListener("DOMContentLoaded", function () {
    let firstSlide = document.querySelector(".first-slide");
    firstSlide.style.display = "flex";
});

let slides = [
    "url('images/home/slide-1.jpg')",
    "url('images/home/slide-2.jpg')",
    "url('images/home/slide-3.jpg')"
];

let slideCount = 0;
function autoSlide() {
    let slideShow = document.querySelector(".slide-show");
    let slideImage = (slideShow.style.backgroundImage = slides[slideCount]);
    slideCount++;

    document.querySelector(".slide-show").style.backgroundImage =
        slides[slideCount];

    if (slideCount >= slides.length) {
        slideCount = 0;
    }
}
setInterval(autoSlide, 3000);

// END SLIDE SHOW CONTENT

/////number incrementer

// let rescueCount = 1;
// setInterval(() => {
//     if (rescueCount < 342) {
//         rescueCount++;
//         document.querySelector(".rescue-num").innerHTML = rescueCount;
//     }
// }, 3);

// let adoptCount = 1;
// setInterval(() => {
//     if (adoptCount < 155) {
//         adoptCount++;
//         document.querySelector(".adopt-num").innerHTML = adoptCount;
//     }
// }, 10);

// let volunteerCount = 1;
// setInterval(() => {
//     if (volunteerCount < 50) {
//         volunteerCount++;
//         document.querySelector(".volunteer-num").innerHTML = volunteerCount;
//     }
// }, 50);
