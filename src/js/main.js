import '../scss/styles.scss';
import slider from './slider';
import tabs from './tabs';
import video from './video';
import pageAnimations from './pageAnimations';
import customCursor from './customCursor';
import cookies from './cookie';
import './menu';

const general = {
    "mqBreakpoints": {
        "md": 768,
        "lg": 1024,
        "xl": 1280
    },

    "isTouchScreendevice": function(e) {
        return 'ontouchstart' in window || navigator.maxTouchPoints;      
    },
}

export default general;

document.addEventListener("DOMContentLoaded", function() {
    slider.initSlider();
    tabs.init();
    video.init();
    pageAnimations.lbyLApparition();
    pageAnimations.scrollAnimation();
    cookies.initCookie();

    let screenW = window.innerWidth;
    window.addEventListener('resize', function() {
        if (screenW != window.innerWidth) {
            pageAnimations.scrollAnimation();
        }
    })

    if (!general.isTouchScreendevice()) {
        document.addEventListener('mousemove', function(e) {
            customCursor.init(e);
        }) 
    }

});