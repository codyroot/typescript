var multi = function (x, y, z) {
    return x + y + z;
};

var multi2 = function (x, y, z) {
    if (typeof z === "undefined") { z = 0; }
    return x + y + z;
};
