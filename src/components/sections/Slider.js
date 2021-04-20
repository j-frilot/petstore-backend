const Slider = () => {
    //SLIDE SHOW

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

    return (
        <>
            <section className="slide-show">
                <div className="first-slide">
                    <h2 className="banner-text white">
                        New Arrivals Ready For A Home
                    </h2>
                </div>
                <div className="second-slide"></div>
                <div className="third-slide"></div>
            </section>
        </>
    );
};

export default Slider;
