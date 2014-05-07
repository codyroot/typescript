// Der Basistype Element verfügt über keine Eigenschaft text --> Cast als HTMLPElement
var title = <HTMLTitleElement>document.querySelector("title");

title.text = "Ich werde 'gecastet'";