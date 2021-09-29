(() => {
    var o = {
        359: o => {
            o.exports = {
                add: function (o, r) {
                    return o + r
                }, mul: function (o, r) {
                    return o * r
                }
            }
        }
    }, r = {};

    function n(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var l = r[e] = {exports: {}};
        return o[e](l, l.exports, n), l.exports
    }

    (() => {
        "use strict";
        const {add: o, mul: r} = n(359);
        console.log(o(20, 30)), console.log(r(20, 30)), console.log("lyx"), console.log(18), console.log(1.88)
    })()
})();