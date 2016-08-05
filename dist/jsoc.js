(function (global) {
    global.jsoc = {};
})(window);
(function (jsoc) {

    var get = 'get';
    var set = 'set';
    var toggle = 'toggle';
    var is = 'is';

    jsoc.bindGetterSetter = function (obj) {
        for (var attr in obj) {

            (function (attr) {
                var attrValue = obj[attr];

                if (jsoc.notStartWith(attr, get) && jsoc.notStartWith(attr, set) && jsoc.notStartWith(attr, toggle) && jsoc.notStartWith(attr, is)) {
                    obj[setter(attr)] = function (value) {
                        if (jsoc.isObject(value)) {
                            value = jsoc.extend(obj[attr], value);
                            jsoc.bindGetterSetter(value);
                        }
                        obj[attr] = value;
                    };

                    if (jsoc.isBoolean(attrValue)) {
                        obj[booleanGetter(attr)] = function () {
                            return jsoc.isTrue(obj[attr]);
                        };

                        obj[toggle(attr)] = function () {
                            return obj[attr] = !obj[attr];
                        };
                    } else {
                        obj[getter(attr)] = function () {
                            return obj[attr];
                        };
                    }

                    if (jsoc.isObject(attrValue)) {
                        jsoc.bindGetterSetter(attrValue);
                    }
                }

            })(attr);
        }

        return obj;
    }

    function getter(name) {
        return get + jsoc.capitalize(name);
    }

    function booleanGetter(name) {
        return is + jsoc.capitalize(name);
    }

    function toggle(name) {
        return toggle + jsoc.capitalize(name);
    }

    function setter(name) {
        return set + jsoc.capitalize(name);
    }

})(jsoc);
(function (jsoc) {

    jsoc.extend = function (dest, origin) {
        return Object.assign(dest, origin);
    }

})(jsoc);
(function (jsoc) {

    jsoc.capitalize = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

})(jsoc);
(function (jsoc) {

    jsoc.contains = function (value, term) {
        var contains = false;

        if (jsoc.isString(value)) {
            contains = value.indexOf(term) != -1;
        }

        return contains;
    }

})(jsoc);
(function(jsoc) {

    jsoc.isBoolean = function(value) {
        return typeof value == "boolean";
    }

    jsoc.isObject = function(value) {
        return typeof attrValue == "object";
    }

    jsoc.isString = function(value) {
        return typeof attrValue == "string";
    }

    jsoc.isTrue = function(value) {
        return value == true;
    }

})(jsoc);
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