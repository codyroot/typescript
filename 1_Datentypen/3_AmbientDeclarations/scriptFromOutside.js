var visitor = (function (say) {

    say.hello = function (name) {
        alert("Hallo " + name);
    }

    return say;

}(visitor || {}))