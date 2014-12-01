///<reference path="models.ts" />
module thePlayer {
    export module Business {
        export class VideoPlayer {
            play(video: models.Video) {
                console.log('Spiele video ' + video.title);
            }

            pause(video: models.Video) {
                console.log('Pausiere video ' + video.title);
            }
        }
    }
}   
