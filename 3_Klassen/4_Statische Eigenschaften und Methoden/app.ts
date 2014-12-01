class Person {
    private name: string;
    private age: number;

    static count = 0;

    // Konstruktor - 2 Wege Standardwerte zu setzen
    constructor(name: string = "Sam", age?: number) {
        this.name = name;
        this.age = age || "10";

        // Statisch zählt für die Klasse und nicht für die einzelnen erstellten Objekte
        Person.count++;
    }

    // private Statische Methode
    private static getGreeting(to?: string): string {
        var greeting = 'Hello, my name is ';
        if (to) {
            greeting = 'Hello ' + to + ', my name is ';
        }
        return greeting;
    }

    sayHello();
    sayHello(to: string);
    sayHello(to?: string) {
        var greeting = Person.getGreeting(to);
        return greeting + this.name;
    }
}


var p = new Person();
var p2 = new Person();
alert(p.sayHello("Terence"));
alert(p2.sayHello("Bud"));

alert('Es gibt schon ' + Person.count + ' Personen'); 