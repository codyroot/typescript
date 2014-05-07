var multi = function (x, y) {
    var z = [];
    for (var _i = 0; _i < (arguments.length - 2); _i++) {
        z[_i] = arguments[_i + 2];
    }
    var result = x * y;

    for (var i = 0; i < z.length; i++) {
        result *= z[i];
    }

    return result;
};

multi(1, 2, 3, 4, 5);
