import React from "react";

class Slider extends React.Component {
    render() {
        const slides = [
            "url('images/home/slide-1.jpg')",
            "url('images/home/slide-2.jpg')",
            "url('images/home/slide-3.jpg')"
        ];

        let slideCount = 0;
        function autoSlide() {
            slideCount++;

            document.querySelector(".slide-show").style.backgroundImage =
                slides[slideCount];

            if (slideCount >= slides.length) {
                slideCount = 0;
            }
        }
        setInterval(autoSlide, 3000);

        return (
            <section className="slide-show">
                <div className="first-slide">
                    <h2 className="banner-text white">
                        New Arrivals Ready For A Home
                    </h2>
                </div>
                <div className="second-slide"></div>
                <div className="third-slide"></div>
            </section>
        );
    }
}

export default Slider;
