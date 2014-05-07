// Array per Zuweisung (Inferenz) typisieren
var arrayAny = [true, 1, "Opa"]; // Any Array
var arrayNumber = [10, 30, 20]; // Nummern Array

// Array Annotation
var array1: number[] = new Array();
var array2: number[] = [];

// Generic
var array3 = new Array<number>();
// Fehler --> var array4 = []<number>;