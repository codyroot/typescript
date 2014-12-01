// Rest Paramter wird mit ...REST gekenzeichnet
// Der Rest Paramter muss der letzte Parameter sein!
var multi = function (x: number, y: number, ...z:number[]) {
    var result = x * y;

    for (var i = 0; i < z.length; i++) {
        result *= z[i];
    }

    return result;
};

multi(1, 2, 3, 4, 5);