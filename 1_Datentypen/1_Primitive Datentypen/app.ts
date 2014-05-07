// JS Deklaration
var num = 2;

// TS  Basisdatentyp für bool, number, string
var any1; // automatische jeder Typ --> Inferenz
var any2: any;
any1 = "";
any1 = 1;

// Annotations and Inferences
// TS Deklaration am Beispiel String
var agent: string; // Typ Annotation --> Typanmerkung
var agent2: string = "James"; // Typ Annotation mit Wertzuweisung
var agent3 = "James"; // Type Inferenz --> Typannahme (automatische Typsetzung)
// Fehler --> agent3 = 2;

// TS Deklaration am Beispiel Nummer
var num1: number; 
var num2: number = 2;
var num3 = 3;

// Funktionen
function add(n1: number, n2: number) {
    return n1 + n2;
}
add(num2, num3);