// Referenz einfügen

/// <reference path="jQuery.d.ts" />

var team = '{"name": "Arsenal", "location": "England", "colors" : "Red , White" }';

var result = $.parseJSON(team);

console.dir(result);






