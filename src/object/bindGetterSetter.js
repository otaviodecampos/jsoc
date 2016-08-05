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