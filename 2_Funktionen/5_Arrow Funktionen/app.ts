//function (laenge, breite) {
//    return laenge * breite;
//}

function doIt(callback) {
    // Hier koennte etwas anderes passieren.
    // Vielleicht etwas das lange dauert
    // ...

    // und am ende rufen wir unser callback auf
    console.log(callback(15, 10));
}

doIt((l, b) => l * b);


// Andere Einsatz bei der Verwendung von this
var myObj = {
    init: function () {
        
        // Geht nicht, da this in der scope des Listener liegt
        window.addEventListener("click", function() {
            alert(this.msg);
        }, false);

        // Arrow Funktion löst das Problem
        window.addEventListener("click", () => {
            alert(this.msg);
        }, false);
    },
    msg: "Klick auf das Fenster"
};

myObj.init();