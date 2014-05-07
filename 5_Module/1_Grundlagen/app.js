var event;
(function (event) {
    event.listener = {
        init: function () {
            var _this = this;
            window.addEventListener(this.event, function () {
                return alert(_this.msg);
            });
        },
        event: "click",
        msg: "Das ist meine Nachricht!"
    };
})(event || (event = {}));

event.listener.init();
