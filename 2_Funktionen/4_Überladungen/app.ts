// Überladungen, die allgemeine Funktion(immer mit any Signatur) bekommt den Funktionskörper
function addValues(value1: string, value2: string);
function addValues(value1: number, value2: number);
function addValues(); // --> Standardwert oder optionaler Paremeter für diese Signatur
// Any Signatur damit Strings und Numbers möglich sind
function addValues(value1: any = 0, value2: any = 0) {
    // Typkonvertierung
    //if (typeof value1 === "string") {
    //    value1 = parseFloat(value1);
    //}
    //if (typeof value2 === "string") {
    //    value2 = parseFloat(value1);
    //}

    // 'Alternative Typkonvertierung
    value1 = +value1;
    value2 = +value2;
    var result = value1 + value2;
    console.log(result);
}

addValues();
addValues(1, 5);
addValues("1", "3");
