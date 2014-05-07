/*
Ambient Declaration --> Deklaration von Variablen außerhalb des Skriptes 
Notwendig bei der Verwendung voon externen Bibliotheken
In der HTML Datei muss das Skript auch eingebunden sein
*/
// Deklaration
declare var util;

// Bsp jQuery
declare var $;

// Verwendung
util.hello("James");
$("a").hide();