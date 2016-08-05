(function(jsoc) {

    jsoc.isBoolean = function(value) {
        return typeof value == "boolean";
    }

    jsoc.isObject = function(value) {
        return typeof value == "object";
    }

    jsoc.isString = function(value) {
        return typeof value == "string";
    }

    jsoc.isTrue = function(value) {
        return value == true;
    }

})(jsoc);