var Person = (function () {
    function Person() {
    }
    Person.prototype.sayName = function () {
        return 'My Name is ' + this.firstName + ' ' + this.lastName;
    };
    return Person;
})();

var x;

x = new Person();
x.firstName = "Bud";
x.lastName = "Spencer";
console.log(x.sayName());

x = {
    firstName: 'Willy',
    lastName: 'Wuff',
    sayName: function () {
        return 'Ich bin ' + this.firstName + this.lastName;
    }
};

alert(x.sayName());
