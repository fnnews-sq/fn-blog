/**
 * Created by Thinkpad on 2016/8/12.
 */
(function () {
    var yQuery = (function () {
        var foo = function () {
            return foo.fn.init();
        };

        foo.fn = foo.prototype = {
            init: function () {
                return this;
            }
        };
        return foo;
    })();
    window.yQuery = window.$ = yQuery();
})();

yQuery.extend = yQuery.fn.extend = function () {
    var options, name, src, copy,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length;
    if (length === i) {
        target = this;
        --i;
    }

    for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
            for (name in options) {
                src = target[name];
                copy = options[name];

                if (src === copy) {
                    continue;
                }
                if (copy!==undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
};