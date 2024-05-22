Object.defineProperty(exports, '__esModule', { value: true });

var throttle = function (callback, limit) {
    var tick = false;
    return function () {
        if (!tick) {
            callback();
            tick = true;
            setTimeout(function () {
                tick = false;
            }, limit);
        }
    };
};

exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map
