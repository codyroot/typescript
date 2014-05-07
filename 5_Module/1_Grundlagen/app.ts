module event {
    // Exportieren dieser Variable --> wird von außen sichtbar
    export var listener = {
        init: function () {
            window.addEventListener(this.event, () => alert(this.msg));
        },
        event: "click",
        msg: "Das ist meine Nachricht!"
    }
}

event.listener.init();