(function (jsoc) {

    jsoc.contains = function (value, term) {
        var contains = false;

        if (jsoc.isString(value)) {
            contains = value.indexOf(term) != -1;
        }

        return contains;
    }

})(jsoc);