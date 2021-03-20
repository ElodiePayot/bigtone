import AOS from 'aos';
import general from './main';

const pageAnimations = {

    "srText": function(elt, str) {
        let strElt = document.createElement('span');
        strElt.innerHTML = str;
        strElt.classList.add('invisible');
        strElt.classList.add('absolute');
        elt.appendChild(strElt);
    },

    "eachLetterSpan": function(elt) {
        const self = this;
        let string = elt.textContent;
        string.split("");
            elt.innerHTML = "";
        let i = 0, length = string.length;
        for (i; i < length; i++) {
            if (string[i] != " ") {
                let delay = 400 + i*50
            elt.innerHTML += "<span class='letter-container inline-block overflow-hidden' aria-hidden='true'><span class='inline-block letter' data-aos='fade-left' data-aos-duration='1400' data-aos-offset='0' data-aos-delay="+ delay +">" + string[i] + "</span></span>";
            } 
        } 
        self.srText(elt,string)
    },

    "lbyLApparition": function() {
        const self = this;
        let texts = document.querySelectorAll(".js-lblapparition");
        if (texts.length) {
            for (let i = 0; i < texts.length; i++) {
                let text = texts[i];
                self.eachLetterSpan(text);
                AOS.refresh();
            }
        }
    },


    "scrollAnimation": function() {
        const offsetBase = 200;
        AOS.init({
            disable: false,
            once: true,
            offset: offsetBase,
            duration: 1500,
        });  
        let aosMobileEts = document.querySelectorAll('[data-aos-offset-mobile]');
        for (let i = 0; i < aosMobileEts.length; i++) {
            if (window.innerWidth < general.mqBreakpoints.md) {
                let newOffset = aosMobileEts[i].getAttribute('data-aos-offset-mobile')
                aosMobileEts[i].setAttribute('data-aos-offset', newOffset);
            } else {
                aosMobileEts[i].setAttribute('data-aos-offset', offsetBase)
            }
        }
        AOS.refreshHard();
    },

};

export default pageAnimations;