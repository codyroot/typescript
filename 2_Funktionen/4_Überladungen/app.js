function addValues(value1, value2) {
    if (typeof value1 === "undefined") { value1 = 0; }
    if (typeof value2 === "undefined") { value2 = 0; }
    value1 = +value1;
    value2 = +value2;
    var result = value1 + value2;
    console.log(result);
}

addValues();
addValues(1, 5);
addValues("1", "3");
