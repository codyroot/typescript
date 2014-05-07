var video2brain;
(function (video2brain) {
    (function (Models) {
        var Customer = (function () {
            function Customer() {
                this.firstName = '';
                this.lastName = '';
                this.customerId = 0;
            }
            return Customer;
        })();
        Models.Customer = Customer;

        var Trainer = (function () {
            function Trainer() {
                this.firstName = '';
                this.lastName = '';
                this.videos = [];
            }
            return Trainer;
        })();
        Models.Trainer = Trainer;

        var Video = (function () {
            function Video() {
                this.title = '';
                this.duration = 0;
                this.trainer = {};
            }
            return Video;
        })();
        Models.Video = Video;
    })(video2brain.Models || (video2brain.Models = {}));
    var Models = video2brain.Models;
})(video2brain || (video2brain = {}));
