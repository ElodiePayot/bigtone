import {TweenMax} from 'gsap';
import general from './main';

const mainMenu = {

    "show": function(body, openClass, menuPanel, closeStr, btn, scrollDistance) {
        const self = this;
        if (!general.isTouchScreendevice() && window.innerWidth >= general.mqBreakpoints.xl) {
            self.initAnimation();
        }
        body.classList.add(openClass);
        btn.setAttribute('aria-expanded', 'true');
        menuPanel.classList.remove('opacity-0');
        menuPanel.classList.add('opacity-100');
        menuPanel.classList.remove('-translate-y-full');
        setTimeout(function() {
            body.style.top = scrollDistance * -1 + 'px';
            body.style.position = 'fixed';
            body.style.overflowY = 'scroll';
        }, 300)
        btn.innerHTML = closeStr;
    },

    "hide": function(body, openClass, menuPanel, openStr, btn, scrollDistance) {
        body.classList.remove(openClass);
        body.style.position = '';
        body.style.overflowY = '';
        body.style.top = '';
        window.scroll(0, scrollDistance)
        btn.setAttribute('aria-expanded', 'false');
        menuPanel.classList.add('opacity-0');
        menuPanel.classList.remove('opacity-100');
        menuPanel.classList.add('-translate-y-full');
        btn.innerHTML = openStr;
    },

    "getScrollDistance": function() {
        let scrollDistance = 0;
        scrollDistance = window.scrollY;
        return scrollDistance;
    },

    "init": function(body, openClass, menuPanel, openStr, toggler, closeStr) {
        const self = this;
        let scrollDistance;
        toggler.addEventListener('click', function(e) {
            e.preventDefault();
            if (!body.classList.contains(openClass)) {
                scrollDistance = self.getScrollDistance();
                self.show(body, openClass, menuPanel, closeStr, this, scrollDistance);
            } else {
                self.hide(body, openClass, menuPanel, openStr, this, scrollDistance)
            }
        })
    },

    "initAnimation": function() {
        const displ = document.querySelector('feDisplacementMap');
        const list = document.querySelector('.js-list');
        const listItems = list.querySelectorAll('.js-menu-link');
        const listBackground = list.querySelector('.js-list-bg');
        const listImages = list.querySelectorAll('.js-list-img');
        const halfX = window.innerWidth / 2;
        const halfY = window.innerHeight / 2;
        let mouse = {
            x: halfX,
            y: halfY
        };
        let displX = 0;
        let displY = 0;
        let current = 0;

        const distance = (x1,x2,y1,y2) => {
            let a = x1 - x2;
            let b = y1 - y2;
            return Math.hypot(a,b);
        };

        const lineEq = (y2, y1, x2, x1, currentVal) => {
            // y = mx + b 
            let m = (y2 - y1) / (x2 - x1);
            let b = y1 - m * x1;
            return m * currentVal + b;
        };

        //linear interpolation btw points
        const lerp = (a,b,n) => (1 - n) * a + n * b;

        listItems.forEach(item => item.addEventListener('mouseover', (e) => {
            current = [...listItems].indexOf(e.currentTarget);
            listImages.forEach((el) => {el.classList.remove('opacity-100'); el.classList.add('opacity-0')});
            listImages[current].classList.remove('opacity-0');
            listImages[current].classList.add('opacity-100');
        }));

        listItems.forEach(item => item.addEventListener('mousemove', (e) => {
            TweenMax.to(listBackground, 0.5, {
                y: `${e.clientY - halfY}px`,
                x: `${e.clientX - halfX}px`
            });
        }));

        listItems.forEach(item => item.addEventListener('mouseleave', () => {
            listImages.forEach((el) => {el.classList.remove('opacity-100'); el.classList.add('opacity-0')});
        }));

        document.addEventListener('mousemove', e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        const render = function() {
            displX = lerp(displX, mouse.x, 0.08);
            displY = lerp(displY, mouse.y, 0.08);
            const mouseDist = distance(displX, mouse.x, displY, mouse.y);
            const dmScale = Math.min(lineEq(50, 0, 140, 0, mouseDist), 60);
            displ.scale.baseVal = dmScale;
            requestAnimationFrame(() => render());
        }

        render();
    }
}

export default mainMenu;

document.addEventListener("DOMContentLoaded", function() {

    const openClass = 'menu-open';
    const body = document.querySelector('body');
    const toggler = document.querySelector('.js-toggle-menu');
    const menuPanel = document.querySelector('.js-menu');
    const openStr = "Menu";
    const closeStr = "Close";

    mainMenu.init(body, openClass, menuPanel, openStr, toggler, closeStr);

    let screenW = window.innerWidth;
    window.addEventListener('resize', function() {
        if (screenW != window.innerWidth) {
            mainMenu.hide(body, openClass, menuPanel, openStr, toggler);
        }
    });
})
