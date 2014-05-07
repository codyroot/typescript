var Person = (function () {
    function Person() {
    }
    Person.prototype.sayHello = function (to) {
        if (typeof to === "undefined") { to = "du"; }
        return "Hallo " + to + ", mein Name ist " + this.name;
    };
    return Person;
})();

var p = new Person();

p.name = "James";
alert(p.sayHello());
alert(p.sayHello("Bud"));
