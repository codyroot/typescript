﻿// Optionale Paramter wird mit einem ? gekennzeichnet
var multi = function (x:number, y:number, z?:number) {
    return x + y + z;
};

multi(1, 2, 3);
multi(1, 2);

// bessere Lösung ist die Zuweisung eines Standardwertes
// z bekommt den Wert 0
var multi2 = function (x:number, y:number, z:number = 0) {
    return x + y + z;
};

multi2(1, 2);