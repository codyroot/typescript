// Paramter und die Funktion selber können typisiert werden
// Soll die Funktion keinen Wert zurückgeben (kein return! bspw nur alert() Aufruf), ist :void die Lösung
var addiere = function (x: number, y: number): number {
    // alert(x + y);
    return x + y;
};

addiere(1, 2);
