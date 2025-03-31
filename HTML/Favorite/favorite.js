'use strict';

let currentAudio = null;

function playSong(src) {
    if (!currentAudio || currentAudio.src !== location.origin + src) {
        if (currentAudio) {
            currentAudio.pause();
        }
        currentAudio = new Audio(src);
        currentAudio.play();
    } else {
        if (currentAudio.paused) {
            currentAudio.play();
        } else {
            currentAudio.pause();
        }
    }
}

function stopSong() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}