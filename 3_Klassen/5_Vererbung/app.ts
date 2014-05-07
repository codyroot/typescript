class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(to: string) {
           return "Hallo " + to + " , meine Name ist " + this.name;
    }
}

class Employee extends Person {
    id: number;

    constructor(id: number, name: string, age: number) {
        super(name, age);
        this.id = id;
    }

    sayHelloNew(to) {
        return super.sayHello(to) + " ... vererbter Text... !"
    }

}

var p = new Employee(1, "Johny", 25);
alert(p.sayHelloNew("Jimbo"));
