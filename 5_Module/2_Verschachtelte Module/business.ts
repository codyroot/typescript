///<reference path="models.ts" />
module video2brain {
    export module Business {
        export class VideoPlayer {
            play(video: video2brain.Models.Video) {
                console.log('Spiele video ' + video.title);
            }

            pause(video: video2brain.Models.Video) {
                console.log('Pausiere video ' + video.title);
            }
        }
    }
}   
