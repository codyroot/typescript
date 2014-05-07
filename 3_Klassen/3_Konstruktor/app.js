var Person = (function () {
    function Person(name, age) {
        if (typeof name === "undefined") { name = "Sam"; }
        this.name = name;
        this.age = age || "10";
    }
    Person.prototype.sayHello = function (to) {
        if (typeof to === "undefined") { to = "du"; }
        return "Hallo " + to + ", mein Name ist " + this.name;
    };
    return Person;
})();

var p = new Person();
alert(p.sayHello());
alert(p.sayHello("Bud"));
