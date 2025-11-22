export class WebAudioAPI {
    static audio = null;

    static playMusic(url, timeout = 5000) {
        // if music is already playing, do nothing
        if (WebAudioAPI.audio && !WebAudioAPI.audio.paused) return;

        WebAudioAPI.audio = new Audio(url);
        WebAudioAPI.audio.play();
        
        setTimeout(() => {
            if (WebAudioAPI.audio) {
                WebAudioAPI.audio.pause();
                WebAudioAPI.audio.currentTime = 0;
            }
        }, timeout);
    }
}