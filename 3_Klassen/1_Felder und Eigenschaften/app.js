var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(Person.prototype, "Age", {
        get: function () {
            return this.age;
        },
        set: function (value) {
            this.age = value;
        },
        enumerable: true,
        configurable: true
    });

    return Person;
})();

var p = new Person();

p.Name = "James";
p.Age = 50;
