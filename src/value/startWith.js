(function (jsoc) {

    jsoc.startWith = function (value, term) {
        var startWith = false;

        if (jsoc.isString(value)) {
            startWith = value.indexOf(term) == 0;
        }

        return startWith;
    }

    jsoc.notStartWith = function (value, term) {
        return !jsoc.startWith(value, term);
    }

})(jsoc);