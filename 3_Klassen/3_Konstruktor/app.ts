class Person {
// Variante 1
    // Standardmäßig ist public wenn nichts angegeben wird
    private name: string;
    private age: number;

    // Konstruktor - 2 Wege Standardwerte zu setzen
    constructor(name: string = "Sam", age?: number) {
        this.name = name;
        this.age = age || "10";
    }

// Variante 2
    //constructor(public name: string, public age: number) { }

    // Methode
    // Jede Überladung muss explizit mittgeteilt werden
    sayHello();
    sayHello(to: string);
    // Allgemeine Variante mit Standardwert oder optionalen Parameter
    sayHello(to: string = "du") {
        return "Hallo " + to + ", mein Name ist " + this.name;
    }
}

var p = new Person();
alert(p.sayHello());
alert(p.sayHello("Bud"));