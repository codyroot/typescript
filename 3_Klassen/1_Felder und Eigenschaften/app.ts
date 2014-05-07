class Person {
    // Standardmäßig ist public wenn nichts angegeben wird
    private name: string;
    private age: number;

    // Zugriff über Getter und Setter
    // Konvention beginnend mit einem Großbuchstaben
    get Name(): string {
        return this.name;
    }

    set Name(value: string) {
        this.name = value;
    }

    get Age(): number {
        return this.age;
    }

    set Age(value: number) {
        this.age = value;
    }
}

var p = new Person();

// kein Zugriff, da private
//p.name = "James";
//p.age = 50;

// Zugriff über die Getter und Setter
p.Name = "James";
p.Age = 50;