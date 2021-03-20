const tabs = {

    "tabShow": function(el) {
        el.classList.remove('opacity-0')
        el.classList.add('opacity-100')
    },

    "tabHide": function(el) {
        el.classList.add('opacity-0')
        el.classList.remove('opacity-100')
    },

    "activeLink": function(el) {
        el.setAttribute('aria-selected', 'true');
        let line = el.querySelector('.js-tabs-trigger-line');
        line.classList.add('scale-x-100');
        line.classList.add('origin-top-left');
    },

    "inactiveLink": function(el) {
        el.setAttribute('aria-selected', 'false');
        let line = el.querySelector('.js-tabs-trigger-line');
        line.classList.remove('scale-x-100');
        line.classList.remove('origin-top-left');
    },

    "init": function() {
        const self = this;
        const tabsSections = document.querySelectorAll('.js-tabs')
        if (tabsSections.length) {
            for (let i=0; i < tabsSections.length; i++) {
                const tabsSection = tabsSections[i];
                const tabsElts = tabsSection.querySelectorAll('.js-tabs-panel');
                const tabsTogglers = tabsSection.querySelectorAll('.js-tabs-trigger');

                for (let j=0; j < tabsTogglers.length; j++) {
                    tabsTogglers[j].addEventListener('click', function(e) {
                        e.preventDefault();

                        //hide all tabs
                        for (let k=0; k < tabsElts.length; k++) {
                            self.tabHide(tabsElts[k])
                        }

                        //inactive all links
                        for (let l=0; l < tabsTogglers.length; l++) {
                            self.inactiveLink(tabsTogglers[l]);
                        }

                        //active clicked link
                        self.activeLink(e.target);

                        //show tab
                        let clickedTogglerId = tabsTogglers[j].getAttribute('id');
                        let selectedTab = tabsSection.querySelector('.js-tabs-panel[data-tabs=' + clickedTogglerId + ']');
                        self.tabShow(selectedTab);
        
                    })
                }
            }
        }
    }

};

export default tabs;