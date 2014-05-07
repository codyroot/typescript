// für CodeIntelisense interface anlegen
interface jQueryStatic {
    parseJSON(json: string): any;
}

// Umgebungsdeklaration: jQuery $ verfügbar machen
declare var $: jQueryStatic;