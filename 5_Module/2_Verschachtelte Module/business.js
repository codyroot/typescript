var video2brain;
(function (video2brain) {
    (function (Business) {
        var VideoPlayer = (function () {
            function VideoPlayer() {
            }
            VideoPlayer.prototype.play = function (video) {
                console.log('Spiele video ' + video.title);
            };

            VideoPlayer.prototype.pause = function (video) {
                console.log('Pausiere video ' + video.title);
            };
            return VideoPlayer;
        })();
        Business.VideoPlayer = VideoPlayer;
    })(video2brain.Business || (video2brain.Business = {}));
    var Business = video2brain.Business;
})(video2brain || (video2brain = {}));
