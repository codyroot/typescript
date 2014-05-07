function doIt(callback) {
    console.log(callback(15, 10));
}

doIt(function (l, b) {
    return l * b;
});

var myObj = {
    init: function () {
        var _this = this;
        window.addEventListener("click", function () {
            alert(this.msg);
        }, false);

        window.addEventListener("click", function () {
            alert(_this.msg);
        }, false);
    },
    msg: "Klick auf das Fenster"
};

myObj.init();
