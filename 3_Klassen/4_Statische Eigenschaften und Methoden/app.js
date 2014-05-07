var Person = (function () {
    function Person(name, age) {
        if (typeof name === "undefined") { name = "Sam"; }
        this.name = name;
        this.age = age || "10";

        Person.count++;
    }
    Person.getGreeting = function (to) {
        var greeting = 'Hello, my name is ';
        if (to) {
            greeting = 'Hello ' + to + ', my name is ';
        }
        return greeting;
    };

    Person.prototype.sayHello = function (to) {
        var greeting = Person.getGreeting(to);
        return greeting + this.name;
    };
    Person.count = 0;
    return Person;
})();

var p = new Person();
var p2 = new Person();
alert(p.sayHello("Terence"));
alert(p.sayHello("Bud"));

alert('Es gibt schon ' + Person.count + ' Personen');
