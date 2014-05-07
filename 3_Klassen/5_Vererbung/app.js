var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function (to) {
        return "Hallo " + to + " , meine Name ist " + this.name;
    };
    return Person;
})();

var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, age) {
        _super.call(this, name, age);
        this.id = id;
    }
    Employee.prototype.sayHelloNew = function (to) {
        return _super.prototype.sayHello.call(this, to) + " ... vererbter Text... !";
    };
    return Employee;
})(Person);

var p = new Employee(1, "Johny", 25);
alert(p.sayHelloNew("Jimbo"));
