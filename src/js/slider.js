import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import general from './main';

const slider = {
    "initSlider": function() {
        let sliders = document.querySelectorAll('.slider-base');
        if (sliders.length) {
            for (let i=0; i < sliders.length; i++) {
                //values from CSS: px-container
                let sliderOffsetLeft = 24;

                if (window.innerWidth >= general.mqBreakpoints.md) {
                    sliderOffsetLeft = 40;
                }
                if (window.innerWidth >= general.mqBreakpoints.lg) {
                    sliderOffsetLeft = 56;
                }

                let sliderElt = new Swiper(sliders[i], {
                    slidesPerView: 1.5,
                    spaceBetween: 16,
                    slideToClickedSlide: true,
                    observeParents:true,
                    observer:true,
                    breakpoints: {
                        768: {
                            slidesPerView: 3,
                        }
                    },
                    on: {
                        resize: function() {
                            this.update();
                            this.setTranslate(0);
                        }
                    }
                })
            }
        }
    },
};

export default slider;