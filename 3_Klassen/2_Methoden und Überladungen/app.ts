class Person {
    name: string;

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


p.name = "James";
alert(p.sayHello());
alert(p.sayHello("Bud"));
