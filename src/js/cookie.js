import Cookies from 'js-cookie';

const cookies = {

    "initCookie": function() {
        const self = this;
        let cookieBtn = document.querySelector('.js-cookie-btn');
        let cookieBanner = cookieBtn.closest('.js-cookie-banner');
        if (Cookies.get('bigToneGdprCookie')) {
            cookieBanner.parentNode.removeChild(cookieBanner);
            return;
        }
        cookieBtn.addEventListener('click', function(e) {
            e.preventDefault();
            self.fade(cookieBanner);
            Cookies.set('bigToneGdprCookie', 'cookie-consent', {expires: 30})
        })
    },

    "fade": function(el) {
        el.classList.remove('opacity-100');
        el.classList.add('opacity-0');
        el.classList.remove('-translate-y-full');
    }
}

export default cookies;