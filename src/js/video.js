const video = {

    "isPlaying": function(media) {
        let playing = media.currentTime > 0 && !media.paused && !media.ended 
            && media.readyState > media.HAVE_CURRENT_DATA;
        return playing
    },


    "pauseMedia": function(media) {
        const self = this;
        if (self.isPlaying(media)) {
            media.pause();
        }
    },

    "playMedia": function(media) {
        const self = this;
        if (!self.isPlaying(media)) {
            media.play();
        }
    },

    "stopAnimation": function(animatesElts, imgElt) {
        for (let j=0; j < animatesElts.length; j++) {
            animatesElts[j].classList.remove('opacity-0');
            animatesElts[j].classList.remove('-translate-x-1/2');
            animatesElts[j].classList.add('opacity-100');
            animatesElts[j].classList.add('translate-x-0');
            animatesElts[j].classList.remove('pointer-events-none');
        }
        imgElt.classList.remove('opacity-0');
        imgElt.classList.add('opacity-100');
    },

    "playAnimation": function(animatesElts, imgElt) {
        for (let k=0; k < animatesElts.length; k++) {
            animatesElts[k].classList.remove('translate-x-0');
            animatesElts[k].classList.add('-translate-x-1/2');
            animatesElts[k].classList.add('opacity-0');
            animatesElts[k].classList.remove('opacity-100');
            animatesElts[k].classList.add('pointer-events-none');
        }
        imgElt.classList.remove('opacity-100');
        imgElt.classList.add('opacity-0');
    },

    "init": function() {
        const self = this;
        let videoElts = document.querySelectorAll('.js-video-container');
        if (videoElts.length) {
            for (let i = 0; i < videoElts.length; i++) {
                let videoElt = videoElts[i];
                let videoTrigger = videoElt.querySelector('.js-video-trigger');
                let videoTriggerAnimate = videoElt.querySelectorAll('.js-video-trigger-animate');
                let video = videoElt.querySelector('.js-video');
                let videoImg = videoElt.querySelector('.js-video-cover');

                //on init, pause video
                video.pause();

                videoElt.addEventListener('click', function() {
                    //on click, if video is playing
                    if (self.isPlaying(video)) {
                        //stop
                        self.pauseMedia(video);
                        self.stopAnimation(videoTriggerAnimate, videoImg)
                    } else {
                        //play
                        self.playMedia(video);
                        self.playAnimation(videoTriggerAnimate, videoImg)
                    }
                });
            }
        }
    }
}

export default video;