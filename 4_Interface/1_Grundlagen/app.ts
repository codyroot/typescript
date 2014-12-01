interface INameable {
    firstName: string;
    lastName: string;
    sayName(): string;
}

// Klasse mit interface ausstatten
class Person implements INameable {
    firstName: string;
    lastName: string;
    sayName(): string {
        return 'My Name is ' + this.firstName + ' ' +
            this.lastName;
    }
}

var x: INameable;

x = new Person();
x.firstName = "Bud";
x.lastName = "Spencer";
console.log(x.sayName());


x = {
    firstName: 'Willy', lastName: 'Wuff',
    sayName: function () { return 'Ich bin ' + this.firstName + this.lastName}
};

alert(x.sayName());
