/**
 * AnyChart is lightweight robust charting library with great API and Docs, that works with your stack and has tons of chart types and features.
 *
 * Modules: color-scales, theme-color-scales, map-part, theme-map
 * Version: 8.7.1.1930 (2019-12-17)
 * License: https://www.anychart.com/buy/
 * Contact: sales@anychart.com
 * Copyright: AnyChart.com 2019. All rights reserved.
 */
(function(global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var wrapper = function(w) {
            if (!w.document) {
                throw Error('AnyChart requires a window with a document');
            }
            factory.call(w, w, w.document);
            try {
                w.acgraph.isNodeJS = Object.prototype.toString.call(global.process) == "[object process]";
            } catch (e) {}
            ;return w.anychart;
        };
        module.exports = global.document ? wrapper(global) : wrapper;
    } else {
        factory.call(global, window, document)
    }
}
)(typeof window !== 'undefined' ? window : this, function(window, document, opt_noGlobal) {
    var $, _, $_ = this.anychart;
    if ($_ && (_ = $_._)) {
        $ = $_.$
    } else {
        throw Error('anychart-base.min.js module should be included first. See modules explanation at https://docs.anychart.com/Quick_Start/Modules for details');
        $ = {};
        _ = {}
    }
    if (!_.color_scales) {
        _.color_scales = 1;
        (function($) {
            var xM, AM, BM, CM, FM;
            $.uM = function(a, b) {
                var c = a.i("fontSize") != b;
                null === b ? delete a.yd.fontSize : a.yd.fontSize = b;
                c && a.u(4)
            }
            ;
            $.vM = function(a) {
                var b = {};
                $.Bc(a.La, function(a, d) {
                    if ($.n(a)) {
                        if ("adjustByHeight" == d || "adjustByWidth" == d)
                            d = "adjustFontSize";
                        b[d] = this.ed(d)
                    }
                }, a);
                return b
            }
            ;
            $.wM = function(a, b) {
                return $.pk(Bea, a, b || "clip")
            }
            ;
            xM = function() {
                $.cy.call(this)
            }
            ;
            $.yM = function() {
                $.ey.call(this);
                this.Fa("defaultColorRange");
                $.Ft(this, this, this.ng, this.Cg, null, this.ng);
                this.tc.sa(this, "mousedown", this.Bv);
                this.ze |= 1024;
                $.T(this.ua, [["length", this.ze, 9], ["align", this.ze, 9], ["colorLineSize", this.ze, 9]])
            }
            ;
            $.zM = function(a) {
                a.line && (a.line.gl(),
                a.line.remove(),
                a.line = null);
                a.lines && (a.lines.length = 0)
            }
            ;
            AM = function(a) {
                if (a.b) {
                    var b = a.scale();
                    if (b && $.K(b, $.uy)) {
                        a.N = {};
                        for (var c = a.b, d = c.xc(); d.advance(); ) {
                            var e = ($.n(c.ga) ? d.o(c.ga) : null) || d.get(c.Qe ? c.Qe.kl : c.ir[1]);
                            !(e = b.kn(e)) || (0,
                            window.isNaN)(e.start) || (0,
                            window.isNaN)(e.end) || (a.N[e.sourceIndex] || (a.N[e.sourceIndex] = []),
                            a.N[e.sourceIndex].push(d.la()))
                        }
                    }
                }
            }
            ;
            BM = function(a, b, c) {
                var d = 0;
                b.enabled() && (d = b.i("length"),
                b = b.i("position"),
                d = "center" == b ? Math.max((d - a.i("colorLineSize")) / 2, 0) : $.n(c) ? 0 < c ? "outside" == b ? 0 : d : 0 > c ? "inside" == b ? 0 : d : d : d);
                return d
            }
            ;
            CM = function(a) {
                var b = 0
                  , c = $.Yq(a, "marker");
                if (c && c.enabled()) {
                    a = a.i("orientation");
                    b = 2 * c.i("size");
                    var d = c.i("offsetX");
                    c = c.i("offsetY");
                    d = $.n(d) ? d : 0;
                    c = $.n(c) ? c : 0;
                    switch (a) {
                    case "top":
                        b += c;
                        break;
                    case "right":
                        b -= d;
                        break;
                    case "bottom":
                        b -= c;
                        break;
                    case "left":
                        b += d
                    }
                }
                return b
            }
            ;
            $.DM = function(a, b) {
                if (a.b) {
                    var c = a.scale()
                      , d = $.Yq(a, "marker")
                      , e = a.b
                      , f = e.td() || (e.hn ? e.hn() : void 0)
                      , h = d && d.enabled();
                    e = e.enabled() && f == c;
                    if (a.enabled() && h && c && e && (c = a.line.lb(),
                    h = $.Za(a.scale().transform(b, .5), 0, 1),
                    !(0,
                    window.isNaN)(h))) {
                        e = a.i("orientation");
                        f = d.i("size");
                        switch (e) {
                        case "top":
                            var k = c.left + c.width * h;
                            var l = c.top + c.height + f;
                            var m = 180;
                            break;
                        case "bottom":
                            k = c.left + c.width * h;
                            l = c.top - f;
                            m = 0;
                            break;
                        case "left":
                            k = c.left + c.width + f;
                            l = c.top + c.height - c.height * h;
                            m = 90;
                            break;
                        case "right":
                            k = c.left - f,
                            l = c.top + c.height - c.height * h,
                            m = -90
                        }
                        $.V(d);
                        d.pa("rotation", m);
                        d.Ec({
                            value: {
                                x: k,
                                y: l
                            }
                        });
                        d.da(!1);
                        d.Y();
                        d.Hd().visible(!0)
                    }
                }
            }
            ;
            $.EM = function(a) {
                var b = $.Yq(a, "marker");
                a.scale() && b && b.Hd().visible(!1)
            }
            ;
            FM = function() {
                $.yM.call(this)
            }
            ;
            $.Nw.prototype.hn = $.ca(22, function() {
                return this.Lb
            });
            var Bea = {
                Wja: "always-show",
                Qka: "clip",
                wla: "drop"
            };
            $.H(xM, $.cy);
            xM.prototype.TZ = function(a, b, c, d, e) {
                b = Math.round(b.left + a * b.width);
                b = 1 == a ? b + e : b - e;
                a = this.i("length");
                e = this.i("position");
                if ("outside" == e) {
                    var f = c.top - d / 2;
                    var h = -a
                } else
                    "center" == e ? (f = c.top + (c.height - a) / 2,
                    h = a) : "inside" == e && (f = c.Ta() + d / 2,
                    h = a);
                this.path.moveTo(b, f);
                this.path.lineTo(b, f + h)
            }
            ;
            xM.prototype.hR = function(a, b, c, d, e) {
                b = Math.round(b.top + b.height - a * b.height);
                b = 1 == a ? b - e : b + e;
                a = this.i("length");
                e = this.i("position");
                "outside" == e ? (c = c.Za() + d / 2,
                d = a) : "center" == e ? (c = c.left + (c.width - a) / 2,
                d = a) : (c = c.left - d / 2,
                d = -a);
                this.path.moveTo(c, b);
                this.path.lineTo(c + d, b)
            }
            ;
            xM.prototype.cR = function(a, b, c, d, e) {
                b = Math.round(b.left + a * b.width);
                b = 1 == a ? b + e : b - e;
                a = this.i("length");
                e = this.i("position");
                if ("outside" == e) {
                    var f = c.Ta() + d / 2;
                    var h = a
                } else
                    "center" == e ? (f = c.top + (c.height - a) / 2,
                    h = a) : "inside" == e && (f = c.top - d / 2,
                    h = -a);
                this.path.moveTo(b, f);
                this.path.lineTo(b, f + h)
            }
            ;
            xM.prototype.fR = function(a, b, c, d, e) {
                b = Math.round(b.top + b.height - a * b.height);
                b = 1 == a ? b - e : b + e;
                a = this.i("length");
                e = this.i("position");
                if ("outside" == e) {
                    var f = c.left - d / 2;
                    var h = -a
                } else
                    "center" == e ? (f = c.left + (c.width - a) / 2,
                    h = a) : "inside" == e && (f = c.Za() + d / 2,
                    h = a);
                this.path.moveTo(f, b);
                this.path.lineTo(f + h, b)
            }
            ;
            $.H($.yM, $.ey);
            var GM = {};
            $.Yp(GM, [[0, "colorLineSize", $.fq], $.Z.AI, $.Z.CI]);
            $.U($.yM, GM);
            $.g = $.yM.prototype;
            $.g.ra = $.ey.prototype.ra | 1024;
            $.g.Rk = function() {
                return new xM
            }
            ;
            $.g.zE = function() {
                this.line || ($.K(this.scale(), $.ry) ? this.line = $.ek() : $.K(this.scale(), $.uy) && (this.line = $.ck(),
                this.lines = []),
                this.line.zIndex(this.zIndex()),
                this.line.parent(this.P()),
                this.line.cursor("pointer"),
                $.Et(this, this.line));
                return this.line
            }
            ;
            $.g.ar = function(a) {
                this.Il || (this.Il = new $.rx,
                $.W(this, "marker", this.Il),
                this.Il.Ec({
                    value: {
                        x: 0,
                        y: 0
                    }
                }),
                $.L(this.Il, this.H8, this));
                return $.n(a) ? (this.Il.K(a),
                this.u(1024, 1),
                this) : this.Il
            }
            ;
            $.g.H8 = function(a) {
                $.X(a, 1) && this.u(1024, 1)
            }
            ;
            $.g.target = function(a) {
                return $.n(a) ? (this.b != a && (this.b = a,
                AM(this),
                $.L(this.b, this.$ia, this)),
                this) : this.b
            }
            ;
            $.g.$ia = function(a) {
                $.X(a, 132) && AM(this)
            }
            ;
            $.g.Op = function(a, b) {
                var c = this.scale()
                  , d = {};
                if ($.K(c, $.ry)) {
                    var e = (0,
                    window.parseFloat)(b);
                    var f = c.DD(e);
                    var h = "number"
                } else if ($.K(c, $.uy)) {
                    e = b;
                    f = c.Sa().names()[a];
                    h = "string";
                    var k = c.kn(b);
                    k && (d.colorRange = {
                        value: {
                            color: k.color,
                            end: k.end,
                            name: k.name,
                            start: k.start,
                            index: k.sourceIndex
                        },
                        type: ""
                    })
                }
                d.index = {
                    value: a,
                    type: "number"
                };
                d.value = {
                    value: f,
                    type: h
                };
                d.tickValue = {
                    value: e,
                    type: "number"
                };
                d.max = {
                    value: $.n(c.max) ? c.max : null,
                    type: "number"
                };
                d.min = {
                    value: $.n(c.min) ? c.min : null,
                    type: "number"
                };
                d.scale = {
                    value: c,
                    type: ""
                };
                return $.Bu(new $.Rv(d))
            }
            ;
            $.g.fP = function(a, b, c, d, e) {
                c = a.top + a.height + c / 2 - d;
                var f = this.scale();
                if ($.K(f, $.ry))
                    this.line.moveTo(a.left + b, c).lineTo(a.left - b + a.width, c).lineTo(a.left - b + a.width, c - e).lineTo(a.left + b, c - e).close();
                else if ($.K(f, $.uy)) {
                    d = f.Rq();
                    f = f.Oj();
                    for (var h = a.width / (d.length - 1), k = 0, l = d.length - 1; k < l; k++) {
                        var m = d[k];
                        m = m.color || f[m.sourceIndex] || f[f.length - 1];
                        var p = this.lines[k] ? this.lines[k].clear() : this.lines[k] = this.line.path()
                          , q = a.left + b + h * k;
                        p.moveTo(q, c).lineTo(q + h, c).lineTo(q + h, c - e).lineTo(q, c - e).close();
                        p.stroke(this.i("stroke"));
                        p.fill(m)
                    }
                }
            }
            ;
            $.g.yE = function(a, b, c, d, e) {
                c = a.left - c / 2 + d;
                var f = this.scale();
                if ($.K(f, $.ry))
                    this.line.moveTo(c, a.top + b).lineTo(c, a.top - b + a.height).lineTo(c + e, a.top - b + a.height).lineTo(c + e, a.top + b).close();
                else if ($.K(f, $.uy)) {
                    d = f.Rq();
                    f = f.Oj();
                    for (var h = a.height / (d.length - 1), k = 0, l = d.length - 1; k < l; k++) {
                        var m = d[k];
                        m = m.color || f[m.sourceIndex] || f[f.length - 1];
                        var p = this.lines[k] ? this.lines[k].clear() : this.lines[k] = this.line.path()
                          , q = a.top + b + h * (d.length - 1 - k - 1);
                        p.moveTo(c, q).lineTo(c, q + h).lineTo(c + e, q + h).lineTo(c + e, q).close();
                        p.stroke(this.i("stroke"));
                        p.fill(m)
                    }
                }
            }
            ;
            $.g.wE = function(a, b, c, d, e) {
                c = a.top - c / 2 + d;
                var f = this.scale();
                if ($.K(f, $.ry))
                    this.line.moveTo(a.left + b, c).lineTo(a.left - b + a.width, c).lineTo(a.left - b + a.width, c + e).lineTo(a.left + b, c + e).close();
                else if ($.K(f, $.uy)) {
                    d = f.Rq();
                    f = f.Oj();
                    for (var h = a.width / (d.length - 1), k = 0, l = d.length - 1; k < l; k++) {
                        var m = d[k];
                        m = m.color || f[m.sourceIndex] || f[f.length - 1];
                        var p = this.lines[k] ? this.lines[k].clear() : this.lines[k] = this.line.path()
                          , q = a.left + b + h * k;
                        p.moveTo(q, c).lineTo(q + h, c).lineTo(q + h, c + e).lineTo(q, c + e).close();
                        p.stroke(this.i("stroke"));
                        p.fill(m)
                    }
                }
            }
            ;
            $.g.xE = function(a, b, c, d, e) {
                c = a.left + a.width + c / 2 - d;
                var f = this.scale();
                if ($.K(f, $.ry))
                    this.line.moveTo(c, a.top + b).lineTo(c, a.top - b + a.height).lineTo(c - e, a.top - b + a.height).lineTo(c - e, a.top + b).close();
                else if ($.K(f, $.uy)) {
                    d = f.Rq();
                    f = f.Oj();
                    for (var h = a.height / (d.length - 1), k = 0, l = d.length - 1; k < l; k++) {
                        var m = d[k];
                        m = m.color || f[m.sourceIndex] || f[f.length - 1];
                        var p = this.lines[k] ? this.lines[k].clear() : this.lines[k] = this.line.path()
                          , q = a.top + b + h * (d.length - 1 - k - 1);
                        p.moveTo(c, q).lineTo(c, q + h).lineTo(c - e, q + h).lineTo(c - e, q).close();
                        p.stroke(this.i("stroke"));
                        p.fill(m)
                    }
                }
            }
            ;
            $.g.Gp = function() {
                var a = this.zE()
                  , b = this.scale();
                b || this.scale($.sy());
                if ($.K(b, $.ry))
                    a.clear(),
                    a.stroke(this.i("stroke")),
                    b = $.Vb(b.Oj()),
                    this.Hb() ? b.angle = 0 : b.angle = 90,
                    a.fill(b);
                else if ($.K(b, $.uy))
                    for (a = 0,
                    b = this.lines.length; a < b; a++)
                        this.lines[a].clear();
                switch (this.i("orientation")) {
                case "top":
                    var c = this.fP;
                    break;
                case "right":
                    c = this.yE;
                    break;
                case "bottom":
                    c = this.wE;
                    break;
                case "left":
                    c = this.xE
                }
                a = this.i("stroke");
                a = $.Yb(a);
                a = !a || $.No(a) ? 0 : a.thickness ? (0,
                window.parseFloat)(a.thickness) : 1;
                b = 0 == a % 2 ? 0 : .5;
                var d = this.mb()
                  , e = CM(this)
                  , f = Math.round(this.i("colorLineSize"))
                  , h = BM(this, this.Sa(), 1)
                  , k = BM(this, this.pb(), 1);
                c.call(this, d, b, a, Math.max(h, k, e), f)
            }
            ;
            $.g.mb = function() {
                if (!this.gq || this.J(4)) {
                    var a = this.ja();
                    if (a) {
                        a.top = Math.round(a.top);
                        a.left = Math.round(a.left);
                        a.width = Math.round(a.width);
                        a.height = Math.round(a.height);
                        if (this.Hb()) {
                            var b = a.width;
                            var c = a.height
                        } else
                            b = a.height,
                            c = a.width;
                        var d = this.lg(b);
                        c = this.width() ? $.M(this.width(), c) : $.iy(this, a, d);
                        var e = this.padding()
                          , f = $.M(e.i("top"), a.height)
                          , h = $.M(e.i("right"), a.width)
                          , k = $.M(e.i("bottom"), a.height);
                        e = $.M(e.i("left"), a.width);
                        var l = this.i("align"), m;
                        this.Hb() ? (d + h + e > b && (d = b - (h + e)),
                        "left" == l || "top" == l ? m = e : "right" == l || "bottom" == l ? m = b - d - h : "center" == l && (m = (b - d - h - e) / 2)) : (d + k + f > b && (d = b - (k + f)),
                        "left" == l || "top" == l ? m = f : "right" == l || "bottom" == l ? m = b - d - k : "center" == l && (m = (b - d - k - f) / 2));
                        switch (this.i("orientation")) {
                        case "top":
                            var p = a.top + f;
                            var q = a.left + m;
                            var r = c;
                            var t = d;
                            break;
                        case "right":
                            p = a.top + m;
                            q = a.left + a.width - c - h;
                            r = d;
                            t = c;
                            break;
                        case "bottom":
                            p = a.top + a.height - c - k;
                            q = a.left + m;
                            r = c;
                            t = d;
                            break;
                        case "left":
                            p = a.top + m,
                            q = a.left + e,
                            r = d,
                            t = c
                        }
                        this.gq = new $.J(Math.round(q),Math.round(p),Math.round(t),Math.round(r))
                    } else
                        this.gq = new $.J(0,0,0,0);
                    this.I(4)
                }
                return this.gq
            }
            ;
            $.g.lg = function(a) {
                return $.M(this.i("length"), a)
            }
            ;
            $.g.$Y = function(a, b) {
                var c = this.Sa()
                  , d = this.pb()
                  , e = c.i("position")
                  , f = d.i("position");
                c = BM(this, c);
                var h = BM(this, d);
                d = CM(this);
                "outside" == e ? "outside" == f ? e = Math.max(a + c, b + h) : (e = "inside" == f ? Math.max(a + c, b) : Math.max(a + c, b + h),
                d = Math.max(h, d)) : "inside" == e ? "outside" == f ? (e = Math.max(a, b + h),
                d = Math.max(c, d)) : (e = "inside" == f ? Math.max(a, b) : Math.max(a, b + h),
                d = Math.max(c, h, d)) : "outside" == e ? (e = Math.max(a + c, b + h),
                d = Math.max(c, d)) : (e = "inside" == f ? Math.max(a + c, b) : Math.max(a + c, b + h),
                d = Math.max(c, h, d));
                f = this.i("stroke");
                f = !f || $.No(f) ? 0 : f.thickness ? (0,
                window.parseFloat)(f.thickness) : 1;
                f = Math.round(this.i("colorLineSize")) + f;
                return e + d + f
            }
            ;
            $.g.scale = function(a) {
                (a = $.yM.B.scale.call(this, a)) || (this.g || (this.g = $.sy(),
                this.g.Oj("#fff", "#000")),
                a = this.g);
                return a
            }
            ;
            $.g.PR = function() {
                return 48
            }
            ;
            $.g.eg = function(a) {
                $.X(a, 2) && $.zM(this);
                $.yM.B.eg.call(this, a)
            }
            ;
            $.g.Y = function() {
                if (!this.Bc())
                    return this;
                var a = $.Yq(this, "marker");
                this.J(1024) && (a && (a.P(this.P()),
                a.zIndex(this.zIndex() + 1),
                a.Y(),
                a.Hd().visible(!1)),
                this.I(1024));
                if (a && (this.J(2) && a.P(this.P()),
                this.J(8))) {
                    var b = this.zIndex();
                    a.zIndex(b + 1)
                }
                return $.yM.B.Y.call(this)
            }
            ;
            $.g.Bv = function(a) {
                if (this.b) {
                    var b = this.scale()
                      , c = this.b
                      , d = c && (c.td() || (c.hn ? c.hn() : void 0));
                    if (this.enabled() && b && c.enabled() && d == b) {
                        d = this.line.lb();
                        if (this.Hb()) {
                            var e = a.clientX;
                            var f = d.left + $.Nj(this.P().Ha()).x;
                            d = (e - f) / d.width
                        } else
                            e = a.clientY,
                            f = d.top + $.Nj(this.P().Ha()).y,
                            d = (d.height - (e - f)) / d.height;
                        d = b.Pc(d);
                        a.metaKey || a.shiftKey || !c.map || c.map.Yd();
                        if ($.K(b, $.uy))
                            d = b.kn(d),
                            b && c && (e = this.N[d.sourceIndex],
                            b = c.mc(),
                            b = b.Wc(),
                            "single" == b.i("hoverMode") ? this.Hf = {
                                W: c,
                                pd: e
                            } : this.Hf = [{
                                W: c,
                                pd: e,
                                tn: e[e.length - 1],
                                ue: {
                                    index: e[e.length - 1],
                                    $f: 0
                                }
                            }]);
                        else if ($.K(b, $.ry)) {
                            a = c.xc();
                            e = window.Infinity;
                            for (var h = window.NaN, k = b.th(), l = b.Mh(); a.advance(); ) {
                                f = a.get(c.Qe ? c.Qe.kl : c.ir[1]);
                                f = $.Za(f, k, l);
                                var m = Math.abs(d - f);
                                e > m && (e = m,
                                h = f)
                            }
                            e = [];
                            a = c.xc();
                            for (d = h; a.advance(); )
                                f = a.get(c.Qe ? c.Qe.kl : c.ir[1]),
                                f = $.Za(f, k, l),
                                f == d && e.push(a.la());
                            b && c && (b = c.mc(),
                            b = b.Wc(),
                            "single" == b.i("hoverMode") ? this.Hf = {
                                W: c,
                                pd: e
                            } : this.Hf = [{
                                W: c,
                                pd: e,
                                tn: e[e.length - 1],
                                ue: {
                                    index: e[e.length - 1],
                                    $f: 0
                                }
                            }])
                        }
                    }
                }
            }
            ;
            $.g.ng = function(a) {
                if (this.b) {
                    var b = this.scale()
                      , c = this.b
                      , d = c.td() || (c.hn ? c.hn() : void 0);
                    if (this.enabled() && b && c.enabled() && d == b) {
                        d = this.line.lb();
                        if (this.Hb()) {
                            var e = a.clientX;
                            var f = d.left + $.Nj(this.P().Ha()).x;
                            d = (e - f) / d.width
                        } else
                            e = a.clientY,
                            f = d.top + $.Nj(this.P().Ha()).y,
                            d = (d.height - (e - f)) / d.height;
                        d = b.Pc(d);
                        if ($.K(b, $.uy)) {
                            a = b.kn(d);
                            var h = this.N[a.sourceIndex];
                            b = c.mc();
                            f = b.Wc();
                            "single" == f.i("hoverMode") ? this.Hf = {
                                W: c,
                                pd: h
                            } : this.Hf = [{
                                W: c,
                                pd: h,
                                tn: h[h.length - 1],
                                ue: {
                                    index: h[h.length - 1],
                                    $f: 0
                                }
                            }]
                        } else if ($.K(b, $.ry) && c) {
                            f = c.xc();
                            h = window.Infinity;
                            for (var k = window.NaN, l = b.th(), m = b.Mh(); f.advance(); ) {
                                e = f.get(c.Qe ? c.Qe.kl : c.ir[1]);
                                e = $.Za(e, l, m);
                                var p = Math.abs(d - e);
                                h > p && (h = p,
                                k = e)
                            }
                            h = [];
                            f = c.xc();
                            for (d = k; f.advance(); )
                                e = f.get(c.Qe ? c.Qe.kl : c.ir[1]),
                                e = $.Za(e, l, m),
                                e == d && h.push(f.la());
                            b && c && (b = c.mc(),
                            f = b.Wc(),
                            "single" == f.i("hoverMode") ? (this.Hf && !(0,
                            $.rC)(h, function(a) {
                                return $.Aa(this.Hf.pd, a)
                            }, this) && b.dispatchEvent(b.Bk("hovered", a, [{
                                W: c,
                                pd: [],
                                ue: {
                                    index: this.Hf.pd[this.Hf.pd.length - 1],
                                    $f: 0
                                }
                            }], !1)),
                            this.Hf = {
                                W: c,
                                pd: h
                            }) : this.Hf = [{
                                W: c,
                                pd: h,
                                tn: h[h.length - 1],
                                ue: {
                                    index: h[h.length - 1],
                                    $f: 0
                                }
                            }])
                        }
                        $.DM(this, d)
                    }
                }
            }
            ;
            $.g.Cg = function() {
                $.EM(this);
                var a = this.b;
                a && (this.Pa = a)
            }
            ;
            $.g.remove = function() {
                var a = $.Yq(this, "marker");
                a && a.remove();
                $.yM.B.remove.call(this)
            }
            ;
            $.g.F = function() {
                var a = $.yM.B.F.call(this);
                $.uq(this, GM, a);
                a.marker = this.ar().F();
                return a
            }
            ;
            $.g.X = function(a, b) {
                $.yM.B.X.call(this, a, b);
                $.mq(this, GM, a, b);
                this.ar(a.marker)
            }
            ;
            $.g.R = function() {
                $.od(this.Il, this.g);
                this.g = this.Il = null;
                $.yM.B.R.call(this)
            }
            ;
            $.H(FM, $.yM);
            $.Kt(FM, $.yM);
            var HM = $.yM.prototype;
            HM.marker = HM.ar;
            HM = FM.prototype;
            $.F("anychart.standalones.colorRange", function() {
                var a = new FM;
                a.Fa("standalones.colorRange");
                return a
            });
            HM.padding = HM.padding;
            HM.draw = HM.Y;
            HM.parentBounds = HM.ja;
            HM.container = HM.P;
        }
        ).call(this, $)
    }
    if (!_.theme_color_scales) {
        _.theme_color_scales = 1;
        (function($) {
            $.ra($.fa.anychart.themes.defaultTheme, {
                defaultColorRange: {
                    enabled: !1,
                    stroke: "#B9B9B9",
                    orientation: "bottom",
                    title: {
                        enabled: !1
                    },
                    colorLineSize: 10,
                    padding: {
                        top: 10,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    margin: 0,
                    align: "center",
                    length: "50%",
                    marker: {
                        padding: 3,
                        positionFormatter: $.ZL,
                        enabled: !0,
                        disablePointerEvents: !1,
                        position: "center",
                        rotation: 0,
                        anchor: "center",
                        offsetX: 0,
                        offsetY: 0,
                        type: "triangle-down",
                        fill: "#333 0.85",
                        stroke: "none",
                        size: 7
                    },
                    labels: {
                        offsetX: 0,
                        offsetY: 0,
                        fontSize: 11,
                        padding: 0
                    },
                    ticks: {
                        stroke: "#B9B9B9",
                        position: "outside",
                        length: 5,
                        enabled: !0
                    },
                    minorTicks: {
                        stroke: "#B9B9B9",
                        position: "outside",
                        length: 3,
                        enabled: !1
                    }
                },
                defaultOrdinalColorScale: {
                    inverted: !1,
                    ticks: {
                        maxCount: 100
                    },
                    autoColors: function(a) {
                        return $.Bl("#90caf9", "#01579b", a)
                    }
                },
                defaultLinearColorScale: {
                    maxTicksCount: 1E3,
                    colors: ["#90caf9", "#01579b"],
                    minimumGap: 0,
                    maximumGap: 0
                }
            });
            $.ra($.fa.anychart.themes.defaultTheme.standalones, {
                colorRange: {
                    enabled: !0,
                    zIndex: 50
                }
            });
        }
        ).call(this, $)
    }
    if (!_.map_part) {
        _.map_part = 1;
        (function($) {
            var EO = function(a, b, c) {
                return a + c * (b - a)
            }
              , Jea = function(a, b) {
                return a == b ? !0 : b ? a.fd == b.fd && a.We == b.We && a.Ad == b.Ad && a.Le == b.Le && a.Ce == b.Ce && a.wd == b.wd : !1
            }
              , Kea = function(a) {
                var b = a.hj - a.gj;
                a = a.Xe - a.pe;
                return b * b + a * a
            }
              , FO = function(a, b) {
                var c = $.Gc(a, b, void 0);
                return c && a[c]
            }
              , GO = function(a) {
                switch (String(a).toLowerCase()) {
                case "hammeraitoff":
                case "hammer-aitoff":
                case "hammer":
                    return "hammer";
                case "wagner":
                case "wagner6":
                    return "wagner6";
                case "undefined":
                case "null":
                case "none":
                case "wsg84":
                case "base":
                case "+proj=longlat +datum=WGS84 +no_defs":
                    return "wsg84"
                }
                return a
            }
              , HO = function(a, b, c) {
                $.Tw.call(this, a, b);
                this.b = c || function() {
                    return !0
                }
            }
              , IO = function() {}
              , JO = function(a) {
                return 0 < a ? Math.sqrt(a) : 0
            }
              , KO = function() {}
              , LO = function() {}
              , MO = function() {
                this.f = 45 * Math.PI / 180;
                this.b = 1 / Math.tan(this.f)
            }
              , NO = function() {}
              , OO = function() {}
              , PO = function() {}
              , QO = function() {}
              , RO = function(a, b) {
                this.scale = a;
                this.angle = b
            }
              , SO = function() {
                this.b = 2;
                this.f = new RO(function(a) {
                    return Math.sqrt(2 / (1 + a))
                }
                ,function(a) {
                    return 2 * Math.asin(a / 2)
                }
                )
            }
              , TO = function() {}
              , UO = function() {
                this.b = new RO(function() {
                    return 1
                }
                ,Math.asin)
            }
              , VO = function(a) {
                this.f = a;
                this.b = $.Yk.proj4
            }
              , WO = function() {}
              , XO = function() {}
              , YO = function(a) {
                var b = a(0, 0);
                return $.A(b) ? (a = b[0],
                b = b[1],
                !$.ea(a) || (0,
                window.isNaN)(a) || !$.ea(b) || (0,
                window.isNaN)(b) ? !1 : !0) : !1
            }
              , $O = function(a) {
                if ($.D(a)) {
                    var b = new IO;
                    var c = ($.E(a.forward) ? a.forward : null) || ($.E(a) ? a : null)
                      , d = $.E(a.invert) ? a.invert : null;
                    c && YO(c) && (b.forward = function(a, b) {
                        a = $.cb(a);
                        b = $.cb(b);
                        return c(a, b)
                    }
                    ,
                    d && YO(d) && (b.bj = function(a, b) {
                        var c = d(a, -b);
                        c[0] = $.db(c[0]);
                        c[1] = $.db(c[1]);
                        return c
                    }
                    ));
                    return b
                }
                switch (a) {
                case "bonne":
                    b = new MO;
                    break;
                case "eckert1":
                    b = new NO;
                    break;
                case "eckert3":
                    b = new OO;
                    break;
                case "fahey":
                    b = new QO;
                    break;
                case "hammer":
                    b = new SO;
                    break;
                case "aitoff":
                    b = new KO;
                    break;
                case "mercator":
                    b = new TO;
                    break;
                case "orthographic":
                    b = new UO;
                    break;
                case "robinson":
                    b = new WO;
                    break;
                case "wagner6":
                    b = new XO;
                    break;
                case "wsg84":
                    b = new IO;
                    break;
                case "equirectangular":
                    b = new PO;
                    break;
                case "august":
                    b = new LO;
                    break;
                default:
                    try {
                        $.Yk.proj4 ? b = new VO(a) : (b = new IO,
                        ZO || ($.Xk(19, null, null, !0),
                        ZO = !0))
                    } catch (e) {
                        b = new IO
                    }
                }
                return b
            }
              , aP = function(a) {
                a = String(a).toLowerCase();
                switch (a) {
                case "undefined":
                case "null":
                case "none":
                case "wsg84":
                    return !0;
                case "bonne":
                case "eckert1":
                case "eckert3":
                case "fahey":
                case "hammer":
                case "aitoff":
                case "mercator":
                case "orthographic":
                case "robinson":
                case "wagner6":
                case "equirectangular":
                case "august":
                    return !1;
                default:
                    return !$.Yk.proj4
                }
            }
              , bP = function(a) {
                $.tw.call(this, a);
                $.T(this.ua, [["zoomOnDoubleClick", 0, 0], ["keyboardZoomAndMove", 0, 0], ["drag", 0, 0], ["copyFormat", 0, 0]])
            }
              , cP = function(a, b, c, d) {
                $.Tz.call(this, a, window.NaN);
                this.id = d;
                this.f = c;
                this.b = b
            }
              , dP = function(a, b) {
                $.Uz.call(this, a, b)
            }
              , eP = function(a, b, c, d, e) {
                $.FA.call(this, a, b, c, d, e);
                this.Pr = [];
                this.yV = [];
                $.T(this.ua, [["startSize", 1024, 1, 4294967295], ["endSize", 1024, 1, 4294967295], ["curvature", 1024, 1025, 4294967295]]);
                this.Ep = !0;
                this.gN = {};
                this.yG = {};
                this.ED = {};
                this.Xz = {}
            }
              , fP = function(a, b) {
                a.g != b && (a.g = b,
                a.b || a.u(512, 1))
            }
              , gP = function(a) {
                return a.b || a.g
            }
              , hP = function(a, b) {
                var c = !!(b & $.go)
                  , d = !c && !!(b & $.fo)
                  , e = a.aa()
                  , f = e.get("normal");
                f = $.n(f) ? f.label : void 0;
                var h = e.get("hovered");
                h = $.n(h) ? h.label : void 0;
                var k = e.get("selected");
                k = $.n(k) ? k.label : void 0;
                f = $.Jo(f, e.get("label"));
                h = d ? $.Jo(h, e.get("hoverLabel")) : null;
                k = c ? $.Jo(k, e.get("selectLabel")) : null;
                e = f && $.n(f.position) ? f.position : void 0;
                h = h && $.n(h.position) ? h.position : void 0;
                k = k && $.n(k.position) ? k.position : void 0;
                f = a.Ra().labels();
                var l = a.kb().labels()
                  , m = a.selected().labels();
                return d || c ? d ? $.n(h) ? h : $.n(l.i("position")) ? l.i("position") : $.n(e) ? e : f.i("position") : $.n(k) ? k : $.n(m.i("position")) ? m.i("position") : $.n(e) ? e : f.i("position") : $.n(e) ? e : f.i("position")
            }
              , iP = function(a) {
                a = $.ab(a);
                var b = "center";
                a ? 90 > a ? b = "left-bottom" : 90 == a ? b = "left-center" : 180 > a ? b = "left-top" : 180 == a ? b = "center-top" : 270 > a ? b = "right-top" : 270 == a ? b = "right-center" : 270 < a && (b = "right-bottom") : b = "center-bottom";
                return b
            }
              , Lea = function(a, b) {
                $.n(b) && !$.Ta(a.f, b) && (a.f = b,
                a.u(256, 1))
            }
              , jP = function(a) {
                return 24 == a.Qe.type
            }
              , Mea = function(a, b, c) {
                var d = b.Hd();
                var e = a.aa();
                c = hP(a, c);
                var f = a.Ri(c);
                c = b.wc("rotation");
                var h = b.wc("anchor");
                $.n(h) && null !== h || (h = e.o("labelAnchor"));
                $.n(c) && d.du(-c, h);
                var k = b.Ec().value;
                f = f.value;
                var l = d.Dd;
                d.translate(-l.Ad + f.x - k.x, -l.wd + f.y - k.y);
                (k = b.Wg) && "offset" != e.o("positionMode") && (b = b.iA || a.iA,
                e = a.Aa.ef.kg().clone(),
                b && $.yb(e, $.Jb(b)),
                a = e.fd,
                b = e.Ad,
                e = e.wd,
                e = new $.Eb(a,0,0,a,b,e),
                $.Ib(e, $.Jb(d.Dd)),
                a = e.fd,
                $.Jm(a, 1, 1E-6) ? e = b = 0 : (b = e.Ad,
                e = e.wd),
                k.ic(a, 0, 0, a, b, e));
                $.n(c) && d.du(c, h)
            }
              , Nea = function(a, b, c) {
                var d = b.Hd();
                var e = a.aa();
                var f = a.aa()
                  , h = !!(c & $.go);
                c = !h && !!(c & $.fo);
                var k = f.get("normal");
                k = $.n(k) ? k.marker : void 0;
                var l = f.get("hovered");
                l = $.n(l) ? l.marker : void 0;
                var m = f.get("selected");
                m = $.n(m) ? m.marker : void 0;
                k = $.Jo(k, f.get("marker"));
                l = $.Jo(l, f.get("hoverMarker"));
                m = $.Jo(m, f.get("selectMarker"));
                f = k && $.n(k.position) ? k.position : a.Ra().Ib().i("position");
                k = a.kb().Ib().i("position");
                l = l && $.n(l.position) ? l.position : $.n(k) ? k : f;
                k = a.selected().Ib().i("position");
                m = m && $.n(m.position) ? m.position : $.n(k) ? k : f;
                c = a.Ri(c ? l : h ? m : f);
                a = b.wc("rotation");
                if (!$.n(a) || null === a || (0,
                window.isNaN)(a))
                    a = e.o("markerRotation");
                h = b.wc("anchor");
                $.n(h) && null !== h || (h = e.o("markerAnchor"));
                $.n(a) && d.du(-a, h);
                b = b.Ec().value;
                e = c.value;
                c = d.Dd;
                d.translate((c ? -c.Ad : 0) + e.x - b.x, (c ? -c.wd : 0) + e.y - b.y);
                $.n(a) && d.du(a, h)
            }
              , Oea = function(a) {
                var b = a.aa()
                  , c = b.la()
                  , d = $.zw(a.state, c);
                var e = !!(d & $.go);
                var f = !e && !!(d & $.fo);
                var h = a.Qe.type;
                var k = b.o("shapes");
                if (k)
                    if (a.Yj() || 22 == h) {
                        h = b.o("x");
                        var l = b.o("value");
                        var m = kP(a, b);
                        if (!m)
                            return;
                        var p = m.x;
                        m = m.y;
                        var q = k.path || k.circle || k.negative;
                        q = q.Dd;
                        var r = (q ? -q.Ad : 0) + p - h;
                        var t = (q ? -q.wd : 0) + m - l;
                        $.Bc(k, function(a) {
                            a.translate(r, t)
                        })
                    } else if (21 == h) {
                        l = a.iA;
                        h = a.Aa.ef.kg().clone();
                        l && $.yb(h, $.Jb(l));
                        var u = h.fd;
                        var v = h.Ad;
                        var w = h.wd;
                        $.Bc(k, function(a) {
                            a.ic(u, 0, 0, u, v, w)
                        })
                    } else
                        24 == h && (h = a.Aa.ef.kg(),
                        (k = k.hatchFill) && k.ic(h.fd, h.We, h.Le, h.Ce, h.Ad, h.wd));
                a.check(4194304) && (q = b.get("normal"),
                q = $.n(q) ? q.marker : void 0,
                m = b.get("hovered"),
                m = $.n(m) ? m.marker : void 0,
                k = b.get("selected"),
                k = $.n(k) ? k.marker : void 0,
                q = $.Jo(q, b.get("marker")),
                m = $.Jo(m, b.get("hoverMarker")),
                k = $.Jo(k, b.get("selectMarker")),
                h = a.Ra().Ib(),
                l = a.kb().Ib(),
                p = a.selected().Ib(),
                b = h.Pq(c),
                q = q && $.n(q.enabled) ? q.enabled : null,
                m = m && $.n(m.enabled) ? m.enabled : null,
                k = k && $.n(k.enabled) ? k.enabled : null,
                (e = f || e ? f ? null === m ? l && null === l.enabled() ? null === q ? h.enabled() : q : l.enabled() : m : null === k ? p && null === p.enabled() ? null === q ? h.enabled() : q : p.enabled() : k : null === q ? h.enabled() : q) && b && b.Hd() && b.Ec() && Nea(a, b, d));
                (e = (c = a.Ra().labels().de(c)) && c.Hd() && c.Ec() && c.wc("enabled")) && Mea(a, c, d)
            }
              , mP = function(a) {
                var b = a.aa();
                var c = (c = b.o("features")) && c.length ? c[0] : null;
                if (!c || !jP(a))
                    return {
                        x: 0,
                        y: 0
                    };
                var d = (c = c.properties) && c.middleXYMode;
                var e = b.get("middleXYMode");
                d = $.n(e) ? e : d ? d : "relative";
                "relative" == d ? a = lP(a) : "absolute" == d ? (d = b.get("middle-x"),
                e = b.get("middle-y"),
                b = $.n(d) ? d : c ? c["middle-x"] : 0,
                c = $.n(e) ? e : c ? c["middle-y"] : 0,
                b = $.N(b),
                c = $.N(c),
                a = a.Aa.scale().transform(b, c),
                a = {
                    x: a[0],
                    y: a[1]
                }) : a = {
                    x: 0,
                    y: 0
                };
                return a
            }
              , kP = function(a, b) {
                var c = a.Aa.scale()
                  , d = !1
                  , e = a.se()
                  , f = b.get(e[0])
                  , h = b.get(e[1]);
                e = b.get(e[2]);
                var k = $.mo(h) && h == f;
                h = (0,
                window.parseFloat)(h);
                e = (0,
                window.parseFloat)(e);
                c = c.transform(h, e);
                (0,
                window.isNaN)(h) || (h = c[0]);
                (0,
                window.isNaN)(e) || k || (e = c[1]);
                if ((0,
                window.isNaN)(h) || (0,
                window.isNaN)(e))
                    if ((c = b.o("features")) && c.length && c[0].properties) {
                        if (b.o("regionId", f),
                        f = lP(a),
                        (0,
                        window.isNaN)(h) && (h = f.x),
                        (0,
                        window.isNaN)(e) || k)
                            e = f.y
                    } else
                        d = !0;
                b.o("missing", d);
                return d ? null : {
                    x: h,
                    y: e
                }
            }
              , lP = function(a) {
                var b = a.aa()
                  , c = (a = (a = b.o("features")) && a.length ? a[0] : null) ? a.properties : null
                  , d = b.get("middle-x")
                  , e = b.get("middle-y");
                b = $.n(d) ? d : c && $.n(c["middle-x"]) ? c["middle-x"] : .5;
                c = $.n(e) ? e : c && $.n(c["middle-y"]) ? c["middle-y"] : .5;
                (a = a ? a.ea : null) ? (a = a.Kq(),
                a = {
                    x: a.left + a.width * b,
                    y: a.top + a.height * c
                }) : a = null;
                return a
            }
              , Pea = function(a) {
                this.map = a;
                this.status = 0;
                this.timeout = null;
                this.Ox = (0,
                $.pa)(function(a) {
                    this.status = a;
                    this.map.dispatchEvent("animationend");
                    this.timeout = null
                }, this)
            }
              , oP = function(a, b) {
                if (a.status ^ b)
                    if (a.timeout && b)
                        (0,
                        window.clearTimeout)(a.timeout),
                        a.timeout = null;
                    else if (b) {
                        a.status = b;
                        var c = nP(a.map);
                        a.map != c && a.map.ob(c);
                        a.map.dispatchEvent("animationstart")
                    } else
                        a.timeout && (0,
                        window.clearTimeout)(a.timeout),
                        a.timeout = (0,
                        window.setTimeout)(a.Ox, Qea, b);
                else
                    a.status && b && a.timeout && ((0,
                    window.clearTimeout)(a.timeout),
                    a.timeout = null)
            }
              , pP = function(a, b, c, d, e, f) {
                this.map = a;
                this.g = !!e;
                $.Jy.call(this, b, c, d, f)
            }
              , qP = function(a, b, c, d, e, f, h) {
                pP.call(this, a, [], [], e, f, h);
                this.Pr = b;
                this.YH = c;
                this.Od = d;
                this.G = h
            }
              , sP = function(a, b) {
                $.E(a.G) && (b = a.G(b));
                var c = (0,
                $.pa)(a.aQ, {
                    t: b,
                    Od: a.Od,
                    YH: a.YH,
                    MR: a.map.scale()
                });
                a.Od.Co.ratio(b);
                $.V(a.map.scale());
                a.map.scale().qg(!1);
                rP(a.map, a.Pr, c, !1, !0);
                a.map.scale().zg();
                a.map.scale().da(!0)
            }
              , tP = function(a, b, c, d, e, f) {
                pP.call(this, a, b, c, d, e, f);
                this.G = !1
            }
              , xP = function(a, b) {
                if (a.map.Pr()) {
                    var c = a.map.ef
                      , d = c.zj().round()
                      , e = c.lb().round()
                      , f = a.map.Dc
                      , h = a.map.Ac
                      , k = a.map.oO / a.map.eB;
                    a.map.nr || (1 > k && !$.rb(e, d) && (h = uP(a.map, d, e),
                    f = h[1],
                    h = h[2]),
                    f < e.left ? f = e.left : f > e.Za() && (f = e.Za()),
                    h < e.top ? h = e.top : h > e.Ta() && (h = e.Ta()));
                    e = b / a.map.Bg();
                    c.scale(e, e, f, h);
                    a.map.Mp = b;
                    c = c.Dd;
                    a.map.scale().zoom = c.fd;
                    vP(a.map.scale(), c.Ad, c.wd);
                    wP(a.map)
                }
            }
              , yP = function(a, b, c) {
                var d = a.map.ef.Dd;
                a.map.ef.ic(d.fd, 0, 0, d.Ce, b, c);
                a.map.scale().zoom = d.fd;
                vP(a.map.scale(), d.Ad, d.wd);
                wP(a.map)
            }
              , zP = function() {
                $.Y.call(this);
                delete this.ma.enabled;
                this.Vb = this.$ = null;
                this.path = $.ek();
                this.path.Ep(!0);
                $.Et(this, this.path);
                $.T(this.ua, [["stroke", 0, 1], ["length", 0, 9], ["position", 0, 9]])
            }
              , AP = function(a) {
                switch (a.orientation()) {
                case "top":
                    a.b = a.oa.Yp();
                    break;
                case "right":
                    a.b = a.oa.Xp();
                    break;
                case "bottom":
                    a.b = a.oa.aq();
                    break;
                case "left":
                    a.b = a.oa.$p()
                }
                return a.b
            }
              , BP = function(a, b, c, d, e) {
                switch (b) {
                case "inside":
                    b = $.$a(c, 2 * Math.PI) + 1.5 * Math.PI;
                    "top" == a.orientation() || "left" == a.orientation() ? d[0] < e[0] && (d[1] <= e[1] || d[1] >= e[1]) && (b = c + .5 * Math.PI) : d[0] > e[0] && (d[1] <= e[1] || d[1] >= e[1]) && (b = c + .5 * Math.PI);
                    break;
                case "center":
                    b = BP(a, "outside", c, d, e);
                    d[0] += Math.cos(b) * a.length() / 2;
                    d[1] += Math.sin(b) * a.length() / 2;
                    b += Math.PI;
                    break;
                default:
                    b = $.$a(c - Math.PI / 2, 2 * Math.PI),
                    "top" == a.orientation() || "left" == a.orientation() ? d[0] > e[0] && (d[1] <= e[1] || d[1] >= e[1]) && (b = c - 1.5 * Math.PI) : d[0] <= e[0] && (d[1] <= e[1] || d[1] >= e[1]) && (b = c - 1.5 * Math.PI)
                }
                return b
            }
              , CP = function(a, b) {
                a.oa.nb();
                b = (0,
                window.parseFloat)(b);
                var c = AP(a);
                var d = a.i("position")
                  , e = a.i("length");
                if (a.Hb()) {
                    var f = a.oa.transform(b, c, null);
                    c = a.oa.transform(b + 1, c, null)
                } else
                    f = a.oa.transform(c, b, null),
                    c = a.oa.transform(c, b + 1, null);
                var h = Math.atan(-(f[1] - c[1]) / (c[0] - f[0]));
                (0,
                window.isNaN)(h) && (h = 0);
                d = BP(a, d, h, f, c);
                return [f[0], f[1], f[0] + Math.cos(d) * e, f[1] + Math.sin(d) * e, d]
            }
              , DP = function(a, b) {
                var c = CP(a, b);
                return new $.J(Math.min(c[0], c[2]),Math.min(c[1], c[3]),Math.abs(c[0] - c[2]),Math.abs(c[1] - c[3]))
            }
              , EP = function() {
                $.Y.call(this);
                this.Lh = [];
                this.bk = [];
                this.Vb = this.$ = null;
                this.ze = 980;
                $.T(this.ua, [["stroke", 16, 1], ["overlapMode", 980, 9], ["drawFirstLabel", 980, 9], ["drawLastLabel", 980, 9]])
            }
              , FP = function(a, b) {
                var c = (b ? a.labels() : a.jb()).i("position");
                if ("center" == c)
                    var d = "center";
                else
                    switch (a.fh) {
                    case "top":
                        d = "center-bottom";
                        break;
                    case "right":
                        d = "left-center";
                        break;
                    case "bottom":
                        d = "center-top";
                        break;
                    case "left":
                        d = "inside" == c ? "left-center" : "right-center"
                    }
                return d
            }
              , GP = function(a, b) {
                if (!a.gq || a.J(4)) {
                    var c = a.ja()
                      , d = a.scale();
                    $.n(b) && d.sf(b);
                    d.nb();
                    if (a.Hb()) {
                        var e = a.scale().Ow();
                        var f = a.scale().Ky()
                    } else
                        e = a.scale().Pw(),
                        f = a.scale().Ly();
                    e = e.get();
                    var h = f.get();
                    f = a.title();
                    var k = a.labels();
                    var l = a.parent().labels()
                      , m = k.ed("enabled");
                    var p = void 0 == m ? l.enabled() : m;
                    l = a.jb();
                    m = a.parent().jb();
                    var q = l.ed("enabled");
                    m = void 0 == q ? m.enabled() : q;
                    var r = a.Sa();
                    r.oa = d;
                    q = a.pb();
                    q.oa = d;
                    d = r.i("position");
                    var t = $.qo(d);
                    d = q.i("position");
                    d = $.qo(d);
                    var u;
                    a.Qd();
                    if (p)
                        for ($.mu(k),
                        k = 0,
                        p = e.length; k < p; k++)
                            r = $.Zm(a.jd(k, !0, e)),
                            u ? $.pb(u, r) : u = r;
                    else if (r.enabled() && 0 <= t)
                        for (k = 0,
                        p = e.length; k < p; k++)
                            t = DP(r, (0,
                            window.parseFloat)(e[k])),
                            u ? $.pb(u, t) : u = t;
                    if (m)
                        for ($.mu(l),
                        k = 0,
                        p = h.length; k < p; k++)
                            r = $.Zm(a.jd(k, !1, h)),
                            u ? $.pb(u, r) : u = r;
                    else if (q.enabled() && 0 <= d)
                        for (k = 0,
                        p = h.length; k < p; k++)
                            t = DP(q, h[k]),
                            u ? $.pb(u, t) : u = t;
                    if (f.enabled()) {
                        f.P() || f.P(a.P());
                        $.V(f);
                        $.pv(f, a.fh);
                        f.ja(c);
                        c = f.bi();
                        switch (a.fh) {
                        case "top":
                            u.top -= c.height;
                            u.height += c.height;
                            break;
                        case "right":
                            u.width += c.width;
                            break;
                        case "bottom":
                            u.height += c.height;
                            break;
                        case "left":
                            u.left -= c.width,
                            u.width += c.width
                        }
                        f.da(!1)
                    }
                    u || (u = new $.J(0,0,0,0));
                    a.gq = u;
                    a.I(4)
                }
                return a.gq.clone()
            }
              , HP = function(a) {
                return a.line ? a.line : a.line = $.ek().zd(!0).Ep(!0)
            }
              , IP = function(a) {
                $.Mq.call(this);
                this.D = a;
                this.G = [];
                this.Vb = this.$ = null;
                this.I(4294967295);
                $.T(this.ua, [["stroke", 0, 1], ["overlapMode", 0, 9], ["drawFirstLabel", 0, 9], ["drawLastLabel", 0, 9], ["enabled", 0, 32768]])
            }
              , JP = function() {
                function a(a) {
                    a.enabled(null)
                }
                $.Y.call(this);
                this.Fa("defaultCallout");
                this.f = this.b = null;
                $.Ft(this, this);
                var b = {};
                $.T(b, [["labels", 0, 0]]);
                this.ba = new $.zx(this,b,$.Vl);
                this.ba.pa("labelsFactoryConstructor", $.Bx);
                this.ba.pa("labelsAfterInitCallback", $.Fx);
                this.wa = new $.zx(this,b,$.fo);
                this.wa.pa("labelsFactoryConstructor", $.Bx);
                this.wa.pa("labelsAfterInitCallback", a);
                this.Ca = new $.zx(this,b,$.go);
                this.Ca.pa("labelsFactoryConstructor", $.Bx);
                this.Ca.pa("labelsAfterInitCallback", a);
                this.ze = 448;
                $.T(this.ua, [["orientation", this.ze, 9], ["align", this.ze, 9], ["length", this.ze, 9], ["width", this.ze, 9]])
            }
              , KP = function(a, b, c, d) {
                var e = b.la()
                  , f = b.Te()
                  , h = f.xc();
                h.select(e);
                d = $.n(d) ? d : $.zw(f.state, e);
                b.state = d;
                var k = f.aa()
                  , l = !!(d & $.go)
                  , m = !l && !!(d & $.fo)
                  , p = f.Ra().labels();
                b = (b = k.get("normal")) ? b.label : void 0;
                b = $.Jo(b, k.get("label"));
                l ? (l = (l = k.get("selected")) ? l.label : void 0,
                l = $.Jo(l, k.get("selectLabel")),
                k = f.selected().labels()) : m ? (l = (l = k.get("hovered")) ? l.label : void 0,
                l = $.Jo(l, k.get("hoverLabel")),
                k = f.kb().labels()) : k = l = null;
                m = f.Gc(!0);
                m.b = f.Id(e);
                c.Uf(m);
                $.nu(c, p);
                $.ou(c, k);
                c.md(b, l);
                $.mu(p);
                b = !!(d & $.go);
                d = !b && !!(d & $.fo);
                e = a.Ra().labels();
                d = b ? a.selected().labels() : d ? a.kb().labels() : e;
                b = $.vM(e);
                b.enabled = e.enabled();
                e = $.vM(d);
                e.enabled = null === d.enabled() ? b.enabled : d.enabled();
                c.md(b, c.state("pointState") ? $.Oc(c.state("pointState"), e) : e);
                e = a.Ri(c.la());
                e.connectorPoint = {
                    value: mP(f)
                };
                c.Ec(e);
                a.Hb() ? (c.width(a.b),
                c.height(a.f)) : (c.width(a.f),
                c.height(a.b));
                switch (a.i("orientation")) {
                case "top":
                    c.anchor("center-bottom");
                    break;
                case "right":
                    c.anchor("left-center");
                    break;
                case "bottom":
                    c.anchor("center-top");
                    break;
                case "left":
                    c.anchor("right-center")
                }
                h.o("shapes") && (a = h.o("fill"),
                h = h.o("stroke"),
                c.background().enabled(!0).fill(a).stroke(h));
                return c
            }
              , Rea = function(a) {
                var b = a.Ra().labels();
                b.P() || b.P(a.P());
                b.ja(a.ja());
                b.clear();
                for (var c = 0, d = a.g.length; c < d; c++) {
                    var e = a.g[c]
                      , f = b.add(null, null);
                    KP(a, e, f);
                    if (f.wc("enabled")) {
                        f = f.Ec();
                        e = f.value.x;
                        f = f.value.y;
                        switch (a.i("orientation")) {
                        case "top":
                            e -= a.b / 2;
                            f -= a.f;
                            var h = a.b;
                            var k = a.f;
                            break;
                        case "right":
                            f -= a.b / 2;
                            h = a.f;
                            k = a.b;
                            break;
                        case "bottom":
                            e -= a.f / 2;
                            h = a.b;
                            k = a.f;
                            break;
                        case "left":
                            e -= a.f,
                            f -= a.b / 2,
                            h = a.f,
                            k = a.b
                        }
                        if (a.j) {
                            var l = $.kB(a.j);
                            l.moveTo(e, f).lineTo(e + h, f).lineTo(e + h, f + k).lineTo(e, f + k).close();
                            l.$ea = c;
                            l.stroke(null).fill($.Ql)
                        }
                    }
                }
            }
              , LP = function() {
                $.Az.call(this)
            }
              , MP = function() {
                $.wy.call(this);
                this.oa = this.g = null;
                $.T(this.ua, [["minorStroke", 16]])
            }
              , NP = function(a) {
                $.Mq.call(this);
                this.Fa("defaultGridSettings");
                this.$ = null;
                this.g = a;
                this.j = [];
                this.Da = this.Vb = null;
                this.I(4294967295);
                $.T(this.ua, [["stroke", 0, 1], ["minorStroke", 0, 1], ["fill", 0, 1], ["drawFirstLine", 0, 9], ["drawLastLine", 0, 9], ["enabled", 0, 32768], ["zIndex", 0, 65536]])
            }
              , OP = function(a, b) {
                $.K(b, $.ls) || $.D(b) && "range" == b.type ? a.Ic($.ls) : ($.K(b, $.is) || $.D(b) || null == a.Da) && a.Ic($.is)
            }
              , PP = function(a, b, c) {
                this.b = c || 0;
                this.f = a;
                this.YQ = b
            }
              , QP = function(a) {
                $.Mq.call(this);
                this.oa = a
            }
              , RP = function() {
                $.Mq.call(this);
                this.Fa("map.geoScale");
                this.Ck = window.NaN;
                this.Ja = Number.MAX_VALUE;
                this.ta = -Number.MAX_VALUE;
                this.Na = Number.MAX_VALUE;
                this.Ga = -Number.MAX_VALUE;
                this.ei = Number.MAX_VALUE;
                this.nh = -Number.MAX_VALUE;
                this.og = Number.MAX_VALUE;
                this.Ne = -Number.MAX_VALUE;
                this.$a = this.fb = this.sb = this.Rb = !0;
                this.O = 0;
                this.ga = this.U = this.ka = this.ca = this.Hm = this.Zp = this.Wp = this.Im = window.NaN;
                this.Cc = this.jc = 1;
                this.Rc = !1;
                this.Ar = 0;
                this.au = this.eq = !1;
                this.yb = null
            }
              , Sea = function(a, b) {
                a.Od = b;
                a.Rc = !1
            }
              , SP = function(a, b, c, d, e) {
                a.ka = b;
                a.ca = c;
                a.ga = d;
                a.U = e
            }
              , vP = function(a, b, c) {
                a.km = b;
                a.xn = c
            }
              , TP = function(a) {
                a.b || a.nb();
                return a.b
            }
              , UP = function(a, b) {
                a.eq = !1;
                a.au = b
            }
              , VP = function(a) {
                return $.n(a.Dj) ? a.Dj : a.eq
            }
              , WP = function(a) {
                return $.n(a.fi) ? a.fi : a.au
            }
              , YP = function(a, b, c) {
                var d = Number.MAX_VALUE
                  , e = Number.MAX_VALUE
                  , f = -Number.MAX_VALUE
                  , h = -Number.MAX_VALUE;
                var k = a.precision();
                var l = k[0];
                var m = k[1];
                if (c) {
                    c = a.f;
                    l = a.j;
                    if (a.Od && aP(a.Od["default"].wg))
                        c = XP(a, b, c),
                        c[0] < d && (d = c[0]),
                        c[0] > f && (f = c[0]),
                        c[1] < e && (e = c[1]),
                        c[1] > h && (h = c[1]);
                    else
                        for (k = c; k < l; )
                            c = XP(a, b, k),
                            c[0] < d && (d = c[0]),
                            c[0] > f && (f = c[0]),
                            c[1] < e && (e = c[1]),
                            c[1] > h && (h = c[1]),
                            k += m;
                    c = XP(a, b, l)
                } else {
                    m = a.g;
                    var p = a.D;
                    if (a.Od && aP(a.Od["default"].wg))
                        c = XP(a, m, b),
                        c[0] < d && (d = c[0]),
                        c[0] > f && (f = c[0]),
                        c[1] < e && (e = c[1]),
                        c[1] > h && (h = c[1]);
                    else if (m > p) {
                        for (k = m; 180 > k; )
                            c = XP(a, k, b),
                            c[0] < d && (d = c[0]),
                            c[0] > f && (f = c[0]),
                            c[1] < e && (e = c[1]),
                            c[1] > h && (h = c[1]),
                            k += l;
                        for (k = -180; k < m; )
                            c = XP(a, k, b),
                            c[0] < d && (d = c[0]),
                            c[0] > f && (f = c[0]),
                            c[1] < e && (e = c[1]),
                            c[1] > h && (h = c[1]),
                            k += l
                    } else
                        for (k = m; k < p; )
                            c = XP(a, k, b),
                            c[0] < d && (d = c[0]),
                            c[0] > f && (f = c[0]),
                            c[1] < e && (e = c[1]),
                            c[1] > h && (h = c[1]),
                            k += l;
                    c = XP(a, p, b)
                }
                c[0] < d && (d = c[0]);
                c[0] > f && (f = c[0]);
                c[1] < e && (e = c[1]);
                c[1] > h && (h = c[1]);
                return {
                    Im: d,
                    Zp: e,
                    Wp: f,
                    Hm: h
                }
            }
              , ZP = function(a, b, c) {
                a.nb();
                if (!a.yb)
                    return [window.NaN, window.NaN];
                b = $.N(b);
                c = $.N(c);
                b = (b - a.Im) * a.ratio;
                c = (-c + a.Hm) * a.ratio;
                return [VP(a) ? a.yb.Za() - a.G - b : a.yb.left + a.G + b, WP(a) ? a.yb.Ta() - a.N - c : a.yb.top + a.N + c]
            }
              , $P = function(a, b, c) {
                a.nb();
                if (!a.yb)
                    return [window.NaN, window.NaN];
                b = $.N(b);
                c = $.N(c);
                return [+(VP(a) ? a.yb.Za() - a.G - b : b - a.yb.left - a.G) / a.ratio + a.Im, -(WP(a) ? a.yb.Ta() - a.N - c : c - a.yb.top - a.N) / a.ratio + a.Hm]
            }
              , aQ = function(a, b, c, d) {
                a = a.Od["default"];
                b = (d.Co || a.Co).forward(b, c);
                b[0] *= d.scale || a.scale;
                b[1] *= d.scale || a.scale;
                b[0] += d.Wh || 0;
                b[1] += d.Ni || 0;
                return [b[0], b[1]]
            }
              , bQ = function(a, b, c) {
                var d, e = !1;
                var f = 0;
                for (d = c.length - 1; f < c.length; d = f++) {
                    var h = c[f][1] > b;
                    var k = c[d][1] > b;
                    h !== k && a < (c[d][0] - c[f][0]) * (b - c[f][1]) / (c[d][1] - c[f][1]) + c[f][0] && (e = !e)
                }
                return e
            }
              , cQ = function(a, b, c) {
                if (!a.Od)
                    return null;
                var d = window.NaN
                  , e = window.NaN
                  , f = $.Gc(a.Od, function(a, f) {
                    if ("default" != f && a.Ft) {
                        var h = aQ(this, b, c, a)
                          , k = h[0];
                        h = h[1];
                        var p = a.Ft;
                        if (p = $.A(p) ? bQ(k, h, p) : k >= p.left && k <= p.left + p.width && h <= p.top && h >= p.top - p.height)
                            d = k,
                            e = h;
                        return p
                    }
                    return !1
                }, a) || "default";
                return [a.Od[f], d, e]
            }
              , dQ = function(a, b, c, d) {
                if (!a.Od)
                    return [];
                a.nb();
                if ($.n(d))
                    d = null !== d && d in a.Od ? a.Od[d] : a.Od["default"];
                else {
                    var e = cQ(a, b, c);
                    d = e[0];
                    var f = e[1];
                    e = e[2]
                }
                (0,
                window.isNaN)(f) && (b = aQ(a, b, c, d),
                f = b[0],
                e = b[1]);
                if (!a.yb || (0,
                window.isNaN)(f) || (0,
                window.isNaN)(e))
                    return [window.NaN, window.NaN];
                f = (+f - a.Im) * a.ratio;
                b = (-e + a.Hm) * a.ratio;
                return [VP(a) ? a.yb.Za() - a.G - f : a.yb.left + a.G + f, WP(a) ? a.yb.Ta() - a.N - b : a.yb.top + a.N + b]
            }
              , eQ = function(a, b, c, d) {
                if (!a.Od)
                    return [];
                var e = a.Od["default"], f;
                $.n(d) ? f = d in a.Od ? d : "default" : f = $.Gc(a.Od, function(a, d) {
                    if ("default" != d && a.Ft) {
                        var e = a.Ft;
                        return $.A(e) ? bQ(b, c, e) : b >= e.left && b <= e.left + e.width && c <= e.top && c >= e.top - e.height
                    }
                    return !1
                }, a) || "default";
                a = a.Od[f];
                d = a.Co || e.Co;
                b -= a.Wh || e.Wh || 0;
                c -= a.Ni || e.Ni || 0;
                f = a.scale || e.scale;
                return a.wg || e.wg ? d.bj(b / f, c / f) : [b / f, c / f]
            }
              , XP = function(a, b, c) {
                if ((0,
                window.isNaN)(b) || (0,
                window.isNaN)(c))
                    return [window.NaN, window.NaN];
                var d = window.NaN
                  , e = window.NaN;
                if ($.n(null))
                    var f = a.Od["default"];
                else
                    e = cQ(a, b, c),
                    f = e[0],
                    d = e[1],
                    e = e[2];
                (0,
                window.isNaN)(d) ? (a = a.Od["default"],
                b = (f.Co || a.Co).forward(b, c),
                b[0] *= f.scale || a.scale,
                b[1] *= f.scale || a.scale,
                -620.8680523857 != f.Wh && (b[0] += f.Wh || 0,
                b[1] += f.Ni || 0),
                f = [b[0], b[1]]) : f = [d, e];
                return f
            }
              , gQ = function(a, b) {
                this.f = b || $.Ma;
                this.b = a;
                for (var c = Math.floor(a.length / 2); c--; )
                    fQ(this, c)
            }
              , fQ = function(a, b) {
                var c = 2 * b + 1
                  , d = 2 * b + 2
                  , e = b;
                c <= a.b.length && 0 < a.f(a.b[c], a.b[e]) && (e = c);
                d <= a.b.length && 0 < a.f(a.b[d], a.b[e]) && (e = d);
                e != b && (hQ(a, b, e),
                fQ(a, e))
            }
              , hQ = function(a, b, c) {
                var d = a.b[b];
                a.b[b] = a.b[c];
                a.b[c] = d
            }
              , iQ = function() {}
              , jQ = function(a, b, c) {
                var d;
                if (c && !c["middle-x"] && !c["middle-y"]) {
                    var e = FO(c, function(a, b) {
                        return /middle-x/.test(b)
                    });
                    var f = FO(c, function(a, b) {
                        return /middle-y/.test(b)
                    }) || .5;
                    c["middle-x"] = e || .5;
                    c["middle-y"] = f
                }
                switch (b.type) {
                case "Point":
                    return {
                        coordinates: [b.coordinates[0], b.coordinates[1]],
                        properties: c
                    };
                case "MultiPoint":
                    var h = [];
                    a = b.coordinates;
                    b = 0;
                    for (e = a.length; b < e; b++)
                        h.push(a[0], a[1]);
                    return {
                        coordinates: h,
                        properties: c
                    };
                case "LineString":
                    h = [];
                    a = b.coordinates;
                    b = 0;
                    for (e = a.length; b < e; b++)
                        f = a[b],
                        h.push(f[0], f[1]);
                    return {
                        paths: [h],
                        properties: c
                    };
                case "MultiLineString":
                    var k = [];
                    var l = b.coordinates;
                    b = 0;
                    for (e = l.length; b < e; b++) {
                        h = [];
                        a = l[b];
                        var m = 0;
                        for (d = a.length; m < d; m++)
                            f = a[m],
                            h.push(f[0], f[1]);
                        k.push(h)
                    }
                    return {
                        paths: k,
                        properties: c
                    };
                case "Polygon":
                    l = [];
                    var p = [];
                    var q = b.coordinates;
                    b = 0;
                    for (e = q.length; b < e; b++) {
                        0 != b && (h = []);
                        a = q[b];
                        m = 0;
                        for (d = a.length; m < d; m++)
                            f = a[m],
                            b ? h.push(f[0], f[1]) : l.push(f[0], f[1]);
                        h && p.push(h)
                    }
                    return {
                        polygones: [{
                            outerPath: l,
                            holes: p
                        }],
                        properties: c
                    };
                case "MultiPolygon":
                    k = [];
                    var r = b.coordinates;
                    b = 0;
                    for (e = r.length; b < e; b++) {
                        l = [];
                        p = [];
                        q = r[b];
                        m = 0;
                        for (d = q.length; m < d; m++) {
                            0 != m && (h = []);
                            a = q[m];
                            for (var t = 0, u = a.length; t < u; t++)
                                f = a[t],
                                m ? h.push(f[0], f[1]) : l.push(f[0], f[1]);
                            h && p.push(h)
                        }
                        q = {
                            outerPath: l,
                            holes: p
                        };
                        k.push(q)
                    }
                    return {
                        polygones: k,
                        properties: c
                    };
                case "GeometryCollection":
                    if (b.geometries) {
                        h = [];
                        m = b.geometries;
                        b = 0;
                        for (e = m.length; b < e; b++)
                            if (f = jQ(a, m[b], m[b].properties),
                            $.n(f))
                                h.push(f);
                            else
                                break;
                        return {
                            geometries: h,
                            properties: c || null
                        }
                    }
                    $.Vk(10, "GeometryCollection object missing 'geometries' member.");
                    break;
                default:
                    $.Vk(10, "Geometry object must be one of 'Point', 'LineString', 'Polygon' or 'MultiPolygon'.")
                }
                return null
            }
              , Tea = function(a, b, c) {
                var d = {
                    type: "FeatureCollection",
                    crs: b.crs || {
                        type: "name",
                        properties: {
                            name: c["default"]["src-code"]
                        }
                    },
                    features: [],
                    "ac-tx": {}
                };
                $.Bc(c, function(a, b) {
                    var c = {};
                    $.n(a.wg) && (c.crs = a.wg);
                    $.n(a.scale) && (c.scale = a.scale);
                    $.n(a.Wh) && (c.xoffset = a.Wh);
                    $.n(a.Ni) && (c.yoffset = a.Ni);
                    $.n(a.Ft) && (c.heatZone = a.Ft.F());
                    d["ac-tx"][b] = c
                });
                a = d.features;
                for (c = 0; c < b.length; c++) {
                    for (var e = b[c], f = {
                        type: "Feature",
                        properties: e.properties,
                        geometry: {
                            type: "MultiPolygon",
                            coordinates: []
                        }
                    }, h = 0; h < e.polygones.length; h++) {
                        for (var k = [], l = e.polygones[h], m = 0; m < l.outerPath.length - 1; m += 2)
                            k.push([l.outerPath[m], l.outerPath[m + 1]]);
                        f.geometry.coordinates.push([k])
                    }
                    a.push(f)
                }
                return d
            }
              , Uea = function(a) {
                this.f = a;
                this.b = 0;
                this.g = this.f.length;
                this.j = null;
                kQ(this)
            }
              , lQ = function(a) {
                a = a.f[a.b];
                return " " >= a && (" " === a || "\n" === a || "\t" === a || "\r" === a || "\f" === a)
            }
              , kQ = function(a) {
                for (; a.b < a.g && lQ(a); )
                    a.b += 1;
                return a.b < a.g
            }
              , mQ = function(a) {
                a.b < a.g && !lQ(a) && "," !== a.f[a.b] || !(kQ(a) && a.b < a.g) || "," !== a.f[a.b] || (a.b += 1,
                kQ(a))
            }
              , nQ = function(a) {
                var b = 0
                  , c = 0
                  , d = []
                  , e = 1
                  , f = 1
                  , h = a.b;
                kQ(a);
                a.b < a.g && "+" === a.f[a.b] ? a.b += 1 : a.b < a.g && "-" === a.f[a.b] && (a.b += 1,
                e = -1);
                if (a.b === a.g || ("0" > a.f[a.b] || "9" < a.f[a.b]) && "." !== a.f[a.b])
                    return null;
                for (var k = a.b; a.b < a.g && "0" <= a.f[a.b] && "9" >= a.f[a.b]; )
                    a.b += 1;
                if (a.b !== k)
                    for (var l = a.b - 1, m = 1; l >= k; )
                        c += m * (a.f[l] - 0),
                        --l,
                        m *= 10;
                if (a.b < a.g && "." === a.f[a.b]) {
                    a.b += 1;
                    if (a.b >= a.g || "0" > a.f[a.b] || "9" < a.f[a.b])
                        return null;
                    for (; a.b < a.g && "0" <= a.f[a.b] && "9" >= a.f[a.b]; )
                        d.push(a.f[a.b] - 0),
                        a.b += 1
                }
                if (a.b !== h && a.b + 1 < a.g && ("e" === a.f[a.b] || "E" === a.f[a.b]) && "x" !== a.f[a.b + 1] && "m" !== a.f[a.b + 1]) {
                    a.b += 1;
                    "+" === a.f[a.b] ? a.b += 1 : "-" === a.f[a.b] && (a.b += 1,
                    f = -1);
                    if (a.b >= a.g || "0" > a.f[a.b] || "9" < a.f[a.b])
                        return null;
                    for (; a.b < a.g && "0" <= a.f[a.b] && "9" >= a.f[a.b]; )
                        b *= 10,
                        b += a.f[a.b] - 0,
                        a.b += 1
                }
                c += (0,
                window.parseFloat)("0." + d.join(""));
                c *= e;
                b && (c *= Math.pow(10, f * b));
                if (h === a.b)
                    return null;
                mQ(a);
                return c
            }
              , oQ = function(a) {
                if (a.b >= a.g)
                    return null;
                var b = a.f[a.b];
                a.b += 1;
                if ("0" === b)
                    b = 0;
                else if ("1" === b)
                    b = 1;
                else
                    return null;
                mQ(a);
                return b
            }
              , pQ = function() {}
              , uQ = function(a, b, c, d) {
                var e, f = $.Te(b), h = [];
                var k = 0;
                for (e = f.length; k < e; k++) {
                    var l = f[k];
                    if ($.We(l)) {
                        var m = l.tagName.toLowerCase();
                        var p = !c || "g" == m || "svg" == m && c ? {} : null;
                        b = qQ(a, l, p, d);
                        if (p) {
                            if ("g" == m || "svg" == m) {
                                var q = rQ(l, d)
                                  , r = sQ(a, l, "group");
                                l = tQ(l);
                                "g" == m ? (m = r.id,
                                $.n(m) ? l.id = m : $.n(l.id) && (m = l.id),
                                p.tx = q,
                                p.properties = l,
                                p.attrs = r,
                                p.id = m) : (p.properties = {},
                                p.attrs = {});
                                p.type = "group";
                                p.features = b
                            } else
                                p = b;
                            p && h.push(p)
                        } else
                            c ? b && ($.A(b) ? h.push.apply(h, b) : h.push(b)) : ("g" == m || "svg" == m) && b && h.push.apply(h, b)
                    }
                }
                return h
            }
              , qQ = function(a, b, c, d) {
                var e = b.getAttribute("id");
                if (e && a.b[e])
                    var f = $.Gl(a.b[e]);
                else {
                    var h = vQ(a, b);
                    switch (b.tagName.toLowerCase()) {
                    case "rect":
                        var k = +b.getAttribute("x");
                        var l = +b.getAttribute("y");
                        var m = +b.getAttribute("width");
                        var p = +b.getAttribute("height");
                        f = wQ(a, b, [{
                            type: "M",
                            values: [k, l]
                        }, {
                            type: "L",
                            values: [k + m, l]
                        }, {
                            type: "L",
                            values: [k + m, l + p]
                        }, {
                            type: "L",
                            values: [k, l + p]
                        }, {
                            type: "Z"
                        }], d);
                        break;
                    case "circle":
                        var q = +b.getAttribute("cx");
                        var r = +b.getAttribute("cy");
                        var t = +b.getAttribute("r");
                        var u = q - t
                          , v = xQ(a, [{
                            type: "M",
                            values: [u, r]
                        }, {
                            type: "A",
                            values: [t, t, 0, 1, 0, u + 2 * t, r]
                        }, {
                            type: "A",
                            values: [t, t, 0, 1, 0, u, r]
                        }, {
                            type: "Z"
                        }]);
                        f = wQ(a, b, v, d);
                        break;
                    case "ellipse":
                        var w = +b.getAttribute("cx");
                        var x = +b.getAttribute("cy");
                        var y = +b.getAttribute("rx");
                        var B = +b.getAttribute("ry");
                        var G = w - y
                          , C = xQ(a, [{
                            type: "M",
                            values: [G, x]
                        }, {
                            type: "A",
                            values: [y, B, 0, 1, 0, G + 2 * y, x]
                        }, {
                            type: "A",
                            values: [y, B, 0, 1, 0, G, x]
                        }, {
                            type: "Z"
                        }]);
                        f = wQ(a, b, C, d);
                        break;
                    case "polygon":
                        for (var I = b.getAttribute("points").trim().split(/\s+|,/), P = [], Q = 0, S = I.length - 1; Q < S; Q += 2)
                            Q ? P.push({
                                type: "L",
                                values: [+I[Q], +I[Q + 1]]
                            }) : P.push({
                                type: "M",
                                values: [+I[Q], +I[Q + 1]]
                            });
                        P.push({
                            type: "Z"
                        });
                        f = wQ(a, b, P, d);
                        break;
                    case "polyline":
                        for (var va = b.getAttribute("points").trim().split(/\s+|,/), xa = [], Qa = 0, ub = va.length - 1; Qa < ub; Qa += 2)
                            Qa ? xa.push({
                                type: "L",
                                values: [+va[Qa], +va[Qa + 1]]
                            }) : xa.push({
                                type: "M",
                                values: [+va[Qa], +va[Qa + 1]]
                            });
                        f = wQ(a, b, xa, d);
                        break;
                    case "path":
                        var nc = b.getAttribute("d") || "";
                        if (nc && 0 !== nc.length) {
                            var bb = new Uea(nc)
                              , Wb = [];
                            if (bb.b < bb.g) {
                                var wb = bb.f[bb.b];
                                var Fc = yQ[wb] ? yQ[wb] : null;
                                var fe = "M" === Fc || "m" === Fc
                            } else
                                fe = !0;
                            if (fe)
                                for (; bb.b < bb.g; ) {
                                    b: {
                                        var xb = bb
                                          , dd = xb.f[xb.b]
                                          , jc = yQ[dd] ? yQ[dd] : null;
                                        if (null === jc) {
                                            if (null === xb.j) {
                                                var Yc = null;
                                                break b
                                            }
                                            ("+" === dd || "-" === dd || "." === dd || "0" <= dd && "9" >= dd) && "Z" !== xb.j ? "M" === xb.j ? jc = "L" : "m" === xb.j ? jc = "l" : jc = xb.j : jc = null;
                                            if (null === jc) {
                                                Yc = null;
                                                break b
                                            }
                                        } else
                                            xb.b += 1;
                                        xb.j = jc;
                                        var Dd = null
                                          , Ub = jc.toUpperCase();
                                        "H" === Ub || "V" === Ub ? Dd = [nQ(xb)] : "M" === Ub || "L" === Ub || "T" === Ub ? Dd = [nQ(xb), nQ(xb)] : "S" === Ub || "Q" === Ub ? Dd = [nQ(xb), nQ(xb), nQ(xb), nQ(xb)] : "C" === Ub ? Dd = [nQ(xb), nQ(xb), nQ(xb), nQ(xb), nQ(xb), nQ(xb)] : "A" === Ub ? Dd = [nQ(xb), nQ(xb), nQ(xb), oQ(xb), oQ(xb), nQ(xb), nQ(xb)] : "Z" === Ub && (kQ(xb),
                                        Dd = []);
                                        Yc = null === Dd || 0 <= Dd.indexOf(null) ? null : {
                                            type: jc,
                                            values: Dd
                                        }
                                    }
                                    if (null === Yc)
                                        break;
                                    else
                                        Wb.push(Yc)
                                }
                            var qb = Wb
                        } else
                            qb = [];
                        var rg = xQ(a, Vea(qb));
                        f = wQ(a, b, rg, d);
                        break;
                    case "line":
                        var Ae = +b.getAttribute("x1")
                          , ff = +b.getAttribute("x2")
                          , Lg = +b.getAttribute("y1")
                          , sg = +b.getAttribute("y2");
                        f = wQ(a, b, [{
                            type: "M",
                            values: [Ae, Lg]
                        }, {
                            type: "L",
                            values: [ff, sg]
                        }], d);
                        break;
                    case "text":
                        var Be = rQ(b, d)
                          , ge = tQ(b)
                          , Ce = sQ(a, b, "element");
                        ge.id = Ce.id;
                        var Ue = b.cloneNode(!0);
                        Be.ov && Ue.setAttribute("transform", Be.ov.toString());
                        Ue.removeAttribute("data-ac-wrapper-id");
                        var Vd = Ce.id;
                        $.n(Vd) ? ge.id = Vd : $.n(ge.id) && (Vd = ge.id);
                        f = {
                            type: "text",
                            text: b,
                            cloneNode: Ue,
                            tx: Be,
                            id: Vd,
                            properties: ge,
                            attrs: Ce
                        };
                        break;
                    case "image":
                        var si = rQ(b, d)
                          , id = tQ(b)
                          , dh = sQ(a, b, "element")
                          , Bf = +b.getAttribute("x")
                          , yj = +b.getAttribute("y")
                          , Kd = +b.getAttribute("width")
                          , Wd = +b.getAttribute("height");
                        id.id = dh.id;
                        var De = b.cloneNode(!0);
                        si.ov && De.setAttribute("transform", si.ov.toString());
                        De.removeAttribute("data-ac-wrapper-id");
                        var xg = dh.id;
                        $.n(xg) ? id.id = xg : $.n(id.id) && (xg = id.id);
                        f = {
                            type: "image",
                            sourceNode: b,
                            cloneNode: De,
                            bounds: $.Xm(Bf, yj, Kd, Wd),
                            tx: si,
                            id: xg,
                            properties: id,
                            attrs: dh
                        };
                        break;
                    case "use":
                        f = vQ(a, b);
                        break;
                    case "clippath":
                        for (var mk = rQ(b, d), nk = uQ(a, b, !0, mk.ov), ad = [], Vi = 0, th = nk.length; Vi < th; Vi++)
                            ad.push.apply(ad, nk[Vi].commands);
                        f = {
                            clippath: wQ(a, b, ad, d)
                        };
                        break;
                    case "lineargradient":
                        var uh = {};
                        if (h) {
                            var hl = h.gradientUnits;
                            var he = h.transform;
                            var Cf = +h.x1;
                            var vh = +h.y1;
                            var ok = +h.x2;
                            var wi = +h.y2;
                            var ie = (0,
                            window.parseFloat)(h.opacity)
                        }
                        var am = b.getAttribute("gradientUnits") || hl
                          , il = rQ(b).self || he
                          , $f = +b.getAttribute("x1")
                          , wh = +b.getAttribute("y1")
                          , Yh = +b.getAttribute("x2")
                          , Zh = +b.getAttribute("y2")
                          , $h = (0,
                        window.parseFloat)(b.getAttribute("opacity"))
                          , ai = $.n($f) ? $f : $.n(Cf) ? Cf : 0
                          , Qg = $.n(wh) ? wh : $.n(vh) ? vh : 0
                          , eh = $.n(Yh) ? Yh : $.n(ok) ? ok : 0
                          , je = $.n(Zh) ? Zh : $.n(wi) ? wi : 0
                          , ag = (0,
                        window.isNaN)($h) ? $.n(ie) ? ie : 1 : $h;
                        ai = $.Gm(ai, 7);
                        Qg = $.Gm(Qg, 7);
                        eh = $.Gm(eh, 7);
                        je = $.Gm(je, 7);
                        var yg = eh - ai
                          , Df = je - Qg;
                        uh.mode = am && "userspaceonuse" == am.toLowerCase() ? $.Xm(Math.min(ai, eh), Math.min(Qg, je), Math.abs(yg), Math.abs(Df)) : !1;
                        var Xd = Math.round($.db(Math.atan(Df / yg)));
                        0 < yg && 0 > Df ? Xd = Math.abs(Xd) : 0 >= yg && 0 >= Df ? Xd = 180 - Math.abs(Xd) : 0 >= yg && 0 < Df ? Xd = 180 + Math.abs(Xd) : 0 < yg && 0 < Df && (Xd = 360 - Math.abs(Xd));
                        uh.opacity = ag;
                        var fh = $.Te(b);
                        uh.keys = fh.length ? zQ(b) : h ? h.keys : [];
                        uh.angle = Xd;
                        uh.transform = il;
                        f = uh;
                        break;
                    case "radialgradient":
                        var ud = {};
                        if (h) {
                            var gh = h.gradientUnits;
                            var xi = h.gradientTransform;
                            var hh = +h.r;
                            var jl = +h.cx;
                            var Wi = +h.cy;
                            var Kb = +h.fx;
                            var ke = +h.fy;
                            var yd = (0,
                            window.parseFloat)(h.opacity)
                        }
                        var Ef = b.getAttribute("gradientUnits") || gh
                          , ih = rQ(b).self || xi
                          , bg = +b.getAttribute("r")
                          , Xi = +b.getAttribute("cx")
                          , cg = +b.getAttribute("cy")
                          , zg = +b.getAttribute("fx")
                          , kl = +b.getAttribute("fy")
                          , Ag = (0,
                        window.parseFloat)(b.getAttribute("opacity"))
                          , Co = $.n(bg) ? bg : $.n(hh) ? hh : 0
                          , Ow = $.n(Xi) ? Xi : $.n(jl) ? jl : 0
                          , cu = $.n(cg) ? cg : $.n(Wi) ? Wi : 0
                          , du = $.n(zg) ? zg : $.n(Kb) ? Kb : 0
                          , tK = $.n(kl) ? kl : $.n(ke) ? ke : 0
                          , uK = (0,
                        window.isNaN)(Ag) ? $.n(yd) ? yd : 1 : Ag;
                        if (Ef && "userspaceonuse" == Ef.toLowerCase()) {
                            var Pw = 2 * Co
                              , eu = $.Xm(Ow - Co, cu - Co, Pw, Pw);
                            ud.cx = .5;
                            ud.cy = .5;
                            ud.fx = (du - eu.left) / Pw;
                            ud.fy = (tK - eu.top) / Pw;
                            ud.mode = eu
                        } else
                            ud.cx = Ow,
                            ud.cy = cu,
                            ud.fx = du,
                            ud.fy = tK;
                        ud.opacity = uK;
                        ud.transform = ih;
                        var vK = $.Te(b);
                        ud.keys = vK.length ? zQ(b) : h ? h.keys : [];
                        f = ud;
                        break;
                    case "pattern":
                        var bm = {}
                          , Do = +b.getAttribute("x")
                          , CE = +b.getAttribute("y")
                          , TT = +b.getAttribute("width")
                          , Qw = +b.getAttribute("height");
                        bm.type = "pattern";
                        bm.bounds = $.Xm(Do, CE, TT, Qw);
                        bm.properties = tQ(b);
                        bm.attrs = sQ(a, b, "group");
                        bm.features = uQ(a, b, bm);
                        bm.properties.id = bm.id = bm.attrs.id;
                        f = bm;
                        break;
                    case "defs":
                    case "desc":
                        break;
                    default:
                        var UT = rQ(b, d);
                        f = uQ(a, b, c, UT.ov)
                    }
                    f && e && (a.b[e] = f)
                }
                return f
            }
              , vQ = function(a, b) {
                var c = b.getAttributeNS("http://www.w3.org/1999/xlink", "href")
                  , d = null;
                c && (c = c.substring(1, c.length),
                d = $.Gl(a.b[c]),
                d || (c = a.g.getElementById(c)) && (d = qQ(a, c)));
                return d
            }
              , zQ = function(a) {
                if (!a)
                    return null;
                if ((a = $.Te(a)) && a.length) {
                    var b = [];
                    for (var c = 0, d = a.length; c < d; c++) {
                        var e = a[c]
                          , f = $.rf(e, "stop-color")
                          , h = (0,
                        window.parseFloat)($.rf(e, "stop-opacity"));
                        f = f ? f : e.getAttribute("stop-color");
                        h = (0,
                        window.isNaN)(h) ? (0,
                        window.parseFloat)(e.getAttribute("stop-opacity")) : h;
                        e = (0,
                        window.parseFloat)(e.getAttribute("offset"));
                        b.push({
                            offset: e,
                            color: f,
                            opacity: (0,
                            window.isNaN)(h) ? 1 : h
                        })
                    }
                }
                return b
            }
              , AQ = function(a, b) {
                for (var c = b ? b.clear() : $.ek(), d = 0, e = a.length; d < e; d++) {
                    var f = a[d]
                      , h = f.values;
                    switch (f.type) {
                    case "M":
                        c.moveTo(+h[0], +h[1]);
                        break;
                    case "L":
                        c.lineTo(+h[0], +h[1]);
                        break;
                    case "C":
                        c.pk(+h[0], +h[1], +h[2], +h[3], +h[4], +h[5]);
                        break;
                    case "Z":
                        c.close()
                    }
                }
                return c
            }
              , rQ = function(a, b) {
                var c = a.tagName.toLowerCase();
                c = "lineargradient" == c || "radialgradient" == c ? a.getAttribute("gradientTransform") : a.getAttribute("transform");
                if (!c)
                    return {
                        self: null,
                        ov: $.n(b) ? b : null
                    };
                c = $.Nb(c);
                var d = c.clone();
                b && $.Ib(d, b);
                return {
                    self: c,
                    ov: d
                }
            }
              , sQ = function(a, b, c) {
                var d = {}
                  , e = b.attributes;
                d.fill = {};
                d.stroke = {};
                for (var f = 0, h = e.length; f < h; f++) {
                    var k = e[f];
                    k.name = k.name.toLowerCase();
                    switch (k.name) {
                    case "clip-path":
                        var l = k.value.replace(/^url\s*\("*#(.+)"*\)/g, "$1");
                        (l = a.b[l]) && (d[k.name] = l.clippath);
                        break;
                    case "opacity":
                        $.n(d.fill.opacity) || (d.fill.opacity = k.value);
                        $.n(d.stroke.opacity) || (d.stroke.opacity = k.value);
                        break;
                    case "fill":
                        d.fill.color = k.value;
                        break;
                    case "fill-opacity":
                        d.fill.opacity = k.value;
                        break;
                    case "stroke":
                        d.stroke.color = k.value;
                        break;
                    case "stroke-opacity":
                        d.stroke.opacity = k.value;
                        break;
                    case "stroke-linejoin":
                        d.stroke.lineJoin = k.value;
                        break;
                    case "stroke-linecap":
                        d.stroke.lineCap = k.value;
                        break;
                    case "stroke-width":
                        d.stroke.thickness = k.value;
                        break;
                    case "stroke-dasharray":
                        d.stroke.dash = k.value;
                        break;
                    default:
                        "style" != k.name && "d" != k.name && "transform" != k.name && "data-ac-wrapper-id" != k.name && (d[k.name] = k.value)
                    }
                }
                "element" == c && ($.n(d.fill.color) || (b.style ? (d.fill.color = $.rf(b, "fill"),
                $.of(b, "fill", "")) : d.fill.color = "black"),
                c = d.fill.color.trim(),
                $.ec(c, "url") && (e = c.replace(/"/g, "").replace(/^url\s*\(#(.+)\)/g, "$1"),
                d.fill = a.b[e]),
                d.stroke.color || (b.style ? (d.stroke.color = $.rf(b, "stroke"),
                $.of(b, "stroke", "")) : d.stroke.color = "none"),
                $.ec(d.stroke.color.trim(), "url") && (c = c.replace(/"/g, "").replace(/^url\s*\(#(.+)\)/g, "$1"),
                d.stroke = a.b[c]));
                (a = b.getAttribute("style")) && (d.style = a);
                return d
            }
              , tQ = function(a) {
                var b = {};
                a = $.Te(a);
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    if ("desc" == e.tagName) {
                        a = $.Te(e);
                        c = 0;
                        for (d = a.length; c < d; c++)
                            e = a[c],
                            b[e.tagName] = e.textContent;
                        break
                    }
                }
                return b
            }
              , wQ = function(a, b, c, d) {
                d = rQ(b, d);
                if (d.ov) {
                    var e = $.cd(c);
                    for (var f = 0, h = e.length; f < h; f++) {
                        var k = e[f].values;
                        k && d.ov.transform(k, 0, k, 0, k.length / 2)
                    }
                }
                f = tQ(b);
                a = sQ(a, b, "element");
                b = a.id;
                $.n(b) ? f.id = b : $.n(f.id) && (b = f.id);
                return {
                    type: "path",
                    properties: f,
                    id: b,
                    commands: c,
                    commands_tx: e,
                    attrs: a,
                    tx: d
                }
            }
              , BQ = function(a, b, c, d, e, f, h, k, l, m, p) {
                function q(a, b, c) {
                    return {
                        x: a * Math.cos(c) - b * Math.sin(c),
                        y: a * Math.sin(c) + b * Math.cos(c)
                    }
                }
                var r = Math.PI * k / 180
                  , t = [];
                if (p) {
                    var u = p[0];
                    l = p[1];
                    var v = p[2];
                    var w = p[3]
                } else {
                    c = q(b, c, -r);
                    b = c.x;
                    c = c.y;
                    e = q(d, e, -r);
                    d = e.x;
                    e = e.y;
                    u = (b - d) / 2;
                    v = (c - e) / 2;
                    w = u * u / (f * f) + v * v / (h * h);
                    1 < w && (w = Math.sqrt(w),
                    f *= w,
                    h *= w);
                    w = f * f;
                    var x = h * h;
                    l = (l === m ? -1 : 1) * Math.sqrt(Math.abs((w * x - w * v * v - x * u * u) / (w * v * v + x * u * u)));
                    v = l * f * v / h + (b + d) / 2;
                    w = l * -h * u / f + (c + e) / 2;
                    u = Math.asin(((c - w) / h).toFixed(9));
                    l = Math.asin(((e - w) / h).toFixed(9));
                    b < v && (u = Math.PI - u);
                    d < v && (l = Math.PI - l);
                    0 > u && (u = 2 * Math.PI + u);
                    0 > l && (l = 2 * Math.PI + l);
                    m && u > l && (u -= 2 * Math.PI);
                    !m && l > u && (l -= 2 * Math.PI)
                }
                if (Math.abs(l - u) > 120 * Math.PI / 180) {
                    x = l;
                    var y = d
                      , B = e;
                    l = m && l > u ? u + 120 * Math.PI / 180 : u + 120 * Math.PI / 180 * -1;
                    d = v + f * Math.cos(l);
                    e = w + h * Math.sin(l);
                    t = BQ(a, d, e, y, B, f, h, k, 0, m, [l, x, v, w])
                }
                a = Math.tan((l - u) / 4);
                f = 4 / 3 * f * a;
                a *= 4 / 3 * h;
                h = [b, c];
                b = [b + f * Math.sin(u), c - a * Math.cos(u)];
                c = [d + f * Math.sin(l), e - a * Math.cos(l)];
                d = [d, e];
                b[0] = 2 * h[0] - b[0];
                b[1] = 2 * h[1] - b[1];
                if (p)
                    return [b, c, d].concat(t);
                t = [b, c, d].concat(t).join().split(",");
                var G = []
                  , C = [];
                t.forEach(function(a, b) {
                    b % 2 ? C.push(q(t[b - 1], t[b], r).y) : C.push(q(t[b], t[b + 1], r).x);
                    6 === C.length && (G.push(C),
                    C = [])
                });
                return G
            }
              , Vea = function(a) {
                var b = []
                  , c = null
                  , d = null
                  , e = null
                  , f = null;
                a.forEach(function(a) {
                    switch (a.type) {
                    case "M":
                        var h = a.values[0]
                          , l = a.values[1];
                        b.push({
                            type: "M",
                            values: [h, l]
                        });
                        e = h;
                        f = l;
                        c = h;
                        d = l;
                        break;
                    case "m":
                        h = c + a.values[0];
                        l = d + a.values[1];
                        b.push({
                            type: "M",
                            values: [h, l]
                        });
                        e = h;
                        f = l;
                        c = h;
                        d = l;
                        break;
                    case "L":
                        h = a.values[0];
                        l = a.values[1];
                        b.push({
                            type: "L",
                            values: [h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "l":
                        h = c + a.values[0];
                        l = d + a.values[1];
                        b.push({
                            type: "L",
                            values: [h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "C":
                        var m = a.values[0]
                          , p = a.values[1]
                          , q = a.values[2]
                          , r = a.values[3];
                        h = a.values[4];
                        l = a.values[5];
                        b.push({
                            type: "C",
                            values: [m, p, q, r, h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "c":
                        m = c + a.values[0];
                        p = d + a.values[1];
                        q = c + a.values[2];
                        r = d + a.values[3];
                        h = c + a.values[4];
                        l = d + a.values[5];
                        b.push({
                            type: "C",
                            values: [m, p, q, r, h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "Q":
                        m = a.values[0];
                        p = a.values[1];
                        h = a.values[2];
                        l = a.values[3];
                        b.push({
                            type: "Q",
                            values: [m, p, h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "q":
                        m = c + a.values[0];
                        p = d + a.values[1];
                        h = c + a.values[2];
                        l = d + a.values[3];
                        b.push({
                            type: "Q",
                            values: [m, p, h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "A":
                        h = a.values[5];
                        l = a.values[6];
                        b.push({
                            type: "A",
                            values: [a.values[0], a.values[1], a.values[2], a.values[3], a.values[4], h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "a":
                        h = c + a.values[5];
                        l = d + a.values[6];
                        b.push({
                            type: "A",
                            values: [a.values[0], a.values[1], a.values[2], a.values[3], a.values[4], h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "H":
                        h = a.values[0];
                        b.push({
                            type: "H",
                            values: [h]
                        });
                        c = h;
                        break;
                    case "h":
                        h = c + a.values[0];
                        b.push({
                            type: "H",
                            values: [h]
                        });
                        c = h;
                        break;
                    case "V":
                        l = a.values[0];
                        b.push({
                            type: "V",
                            values: [l]
                        });
                        d = l;
                        break;
                    case "v":
                        l = d + a.values[0];
                        b.push({
                            type: "V",
                            values: [l]
                        });
                        d = l;
                        break;
                    case "S":
                        q = a.values[0];
                        r = a.values[1];
                        h = a.values[2];
                        l = a.values[3];
                        b.push({
                            type: "S",
                            values: [q, r, h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "s":
                        q = c + a.values[0];
                        r = d + a.values[1];
                        h = c + a.values[2];
                        l = d + a.values[3];
                        b.push({
                            type: "S",
                            values: [q, r, h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "T":
                        h = a.values[0];
                        l = a.values[1];
                        b.push({
                            type: "T",
                            values: [h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "t":
                        h = c + a.values[0];
                        l = d + a.values[1];
                        b.push({
                            type: "T",
                            values: [h, l]
                        });
                        c = h;
                        d = l;
                        break;
                    case "Z":
                    case "z":
                        b.push({
                            type: "Z",
                            values: []
                        }),
                        c = e,
                        d = f
                    }
                });
                return b
            }
              , xQ = function(a, b) {
                var c = []
                  , d = null
                  , e = null
                  , f = null
                  , h = null
                  , k = null
                  , l = null
                  , m = null;
                (0,
                $.Ke)(b, function(a) {
                    switch (a.type) {
                    case "M":
                        var b = a.values[0]
                          , p = a.values[1];
                        c.push({
                            type: "M",
                            values: [b, p]
                        });
                        l = b;
                        m = p;
                        h = b;
                        k = p;
                        break;
                    case "C":
                        var t = a.values[0]
                          , u = a.values[1]
                          , v = a.values[2]
                          , w = a.values[3];
                        b = a.values[4];
                        p = a.values[5];
                        c.push({
                            type: "C",
                            values: [t, u, v, w, b, p]
                        });
                        e = v;
                        f = w;
                        h = b;
                        k = p;
                        break;
                    case "L":
                        b = a.values[0];
                        p = a.values[1];
                        c.push({
                            type: "L",
                            values: [b, p]
                        });
                        h = b;
                        k = p;
                        break;
                    case "H":
                        b = a.values[0];
                        c.push({
                            type: "L",
                            values: [b, k]
                        });
                        h = b;
                        break;
                    case "V":
                        p = a.values[0];
                        c.push({
                            type: "L",
                            values: [h, p]
                        });
                        k = p;
                        break;
                    case "S":
                        v = a.values[0];
                        w = a.values[1];
                        b = a.values[2];
                        p = a.values[3];
                        if ("C" === d || "S" === d) {
                            var x = h + (h - e);
                            var y = k + (k - f)
                        } else
                            x = h,
                            y = k;
                        c.push({
                            type: "C",
                            values: [x, y, v, w, b, p]
                        });
                        e = v;
                        f = w;
                        h = b;
                        k = p;
                        break;
                    case "T":
                        b = a.values[0];
                        p = a.values[1];
                        "Q" === d || "T" === d ? (t = h + (h - e),
                        u = k + (k - f)) : (t = h,
                        u = k);
                        x = h + 2 * (t - h) / 3;
                        y = k + 2 * (u - k) / 3;
                        c.push({
                            type: "C",
                            values: [x, y, b + 2 * (t - b) / 3, p + 2 * (u - p) / 3, b, p]
                        });
                        e = t;
                        f = u;
                        h = b;
                        k = p;
                        break;
                    case "Q":
                        t = a.values[0];
                        u = a.values[1];
                        b = a.values[2];
                        p = a.values[3];
                        x = h + 2 * (t - h) / 3;
                        y = k + 2 * (u - k) / 3;
                        c.push({
                            type: "C",
                            values: [x, y, b + 2 * (t - b) / 3, p + 2 * (u - p) / 3, b, p]
                        });
                        e = t;
                        f = u;
                        h = b;
                        k = p;
                        break;
                    case "A":
                        t = a.values[0];
                        u = a.values[1];
                        v = a.values[2];
                        w = a.values[3];
                        x = a.values[4];
                        b = a.values[5];
                        p = a.values[6];
                        0 === t || 0 === u ? (c.push({
                            type: "C",
                            values: [h, k, b, p, b, p]
                        }),
                        h = b,
                        k = p) : h === b && k === p || BQ(this, h, k, b, p, t, u, v, w, x).forEach(function(a) {
                            c.push({
                                type: "C",
                                values: a
                            });
                            h = b;
                            k = p
                        });
                        break;
                    case "Z":
                        c.push(a),
                        h = l,
                        k = m
                    }
                    d = a.type
                }, a);
                return c
            }
              , CQ = function() {}
              , Wea = function(a) {
                if (!a)
                    return $.ia;
                var b, c, d = a.scale[0], e = a.scale[1], f = a.translate[0], h = a.translate[1];
                return function(a, l) {
                    l || (b = c = 0);
                    b += a[0];
                    c += a[1];
                    a[0] = b * d + f;
                    a[1] = c * e + h
                }
            }
              , Xea = function(a, b, c) {
                return "GeometryCollection" === c.type ? {
                    type: "FeatureCollection",
                    features: (0,
                    $.Wa)(c.geometries, function(a) {
                        return DQ(b, a)
                    }, a)
                } : DQ(b, c)
            }
              , DQ = function(a, b) {
                var c = {
                    type: "Feature",
                    id: b.id,
                    properties: b.properties || {},
                    geometry: Yea(a, b)
                };
                null == b.id && delete c.id;
                return c
            }
              , Yea = function(a, b) {
                function c(a) {
                    a = $.Ja(a, 0);
                    k(a, 0);
                    return a
                }
                function d(a) {
                    for (var b = [], c = 0, d = a.length; c < d; ++c) {
                        var e, f = a[c], h = b;
                        h.length && h.pop();
                        for (var m = l[0 > f ? ~f : f], p = 0, B = m.length; p < B; ++p)
                            h.push(e = $.Ja(m[p], 0)),
                            k(e, p);
                        0 > f && CQ.ud().reverse(h, B)
                    }
                    2 > b.length && b.push($.Ja(b[0], 0));
                    return b
                }
                function e(a) {
                    for (a = d(a); 4 > a.length; )
                        a.push($.Ja(a[0], 0));
                    return a
                }
                function f(a) {
                    return (0,
                    $.Wa)(a, e)
                }
                function h(a) {
                    var b = a.type;
                    return "GeometryCollection" === b ? {
                        type: b,
                        geometries: (0,
                        $.Wa)(a.geometries, h)
                    } : b in m ? {
                        type: b,
                        coordinates: m[b](a)
                    } : null
                }
                var k = Wea(a.transform)
                  , l = a.arcs
                  , m = {
                    Point: function(a) {
                        return c(a.coordinates)
                    },
                    MultiPoint: function(a) {
                        return (0,
                        $.Wa)(a.coordinates, c)
                    },
                    LineString: function(a) {
                        return d(a.arcs)
                    },
                    MultiLineString: function(a) {
                        return (0,
                        $.Wa)(a.arcs, d)
                    },
                    Polygon: function(a) {
                        return f(a.arcs)
                    },
                    MultiPolygon: function(a) {
                        return (0,
                        $.Wa)(a.arcs, f)
                    }
                };
                return h(b)
            }
              , EQ = function(a) {
                this.$ = a;
                this.b = !0;
                this.g = this.f = null
            }
              , GQ = function() {
                $.Yy.call(this);
                this.Fa("map");
                this.vz = this.it = null;
                this.kT = [];
                this.al = null;
                this.Wv = [];
                this.MK = this.gn = null;
                this.cr = 0;
                this.Yx = !0;
                this.pa("zoomFactor", 1.3);
                this.ll = window.NaN;
                this.r1 = new Pea(this);
                $.Ed(this, "animationstart", function() {
                    this.y4 = !0
                }, !1, this);
                $.Ed(this, "animationend", function() {
                    this.y4 = !1;
                    for (var a, b = this.gb.length; b--; )
                        a = this.gb[b],
                        21 == a.Qe.type && (a.iA = this.ef.kg().clone(),
                        a.u(1024),
                        a.Y());
                    this.zB = !0;
                    this.yU || FQ(this)
                }, !1, this);
                this.nr = !1;
                this.F0 = (0,
                $.pa)(this.Eba, this);
                this.Xia = (0,
                $.pa)(function() {
                    this.iI && this.cq(this.LU);
                    this.tc.ec(this, ["pointerdown", "touchstart"], this.U3, !1, this);
                    this.U3 = null;
                    this.tc.ec(this, ["pointermove", "touchmove"], this.T3, !1, this);
                    this.T3 = null;
                    this.P3 = !1
                }, this);
                this.Xba = (0,
                $.pa)(function() {
                    this.QL || this.cq(this.LU);
                    this.tc.ec(this, ["pointermove", "mousemove"], this.R3, !1, this);
                    this.R3 = null;
                    this.C1 = !1
                }, this);
                this.c8 = (0,
                $.pa)(this.cq, this);
                this.nV = this.QJ = null;
                this.jt = [];
                this.mD = null;
                this.Mn = [];
                this.Lw(this.ma.unboundRegions || "as-is");
                this.pa("defaultSeriesType", "choropleth");
                this.tc.sa(this, ["pointerdown", "touchstart"], this.Wia);
                $.T(this.ua, [["geoIdField", 4194320, 1], ["overlapMode", 8388608, 1], ["minZoomLevel", 0, 0], ["maxZoomLevel", 0, 0], ["selectPolygonMarqueeFill", 0, 0, 0, function() {
                    this.xL() && this.hm && this.hm.fill(this.i("selectPolygonMarqueeFill"))
                }
                ], ["selectPolygonMarqueeStroke", 0, 0, 0, function() {
                    this.xL() && this.hm && this.hm.stroke(this.i("selectPolygonMarqueeStroke"))
                }
                ], ["selectPolygonMarqueeMarker", 0, 0, 0, function() {
                    if (this.xL() && this.To) {
                        var a = this.i("selectPolygonMarqueeMarker") || {}
                          , b = $.Vb(a.fill)
                          , c = $.Yb(a.stroke);
                        a = a.radius || 15;
                        this.To.stroke(c);
                        this.To.fill(b);
                        this.BL = a
                    }
                }
                ]])
            }
              , wP = function(a) {
                a.$e.ic(1, 0, 0, 1, 0, 0);
                var b = a.ef.kg(), c;
                a.Af && a.Af.update();
                for (c = a.gb.length; c--; ) {
                    var d = a.gb[c];
                    d.enabled() && d.Dy()
                }
                for (c = a.Mn.length; c--; )
                    d = a.Mn[c],
                    d.enabled() && d.Dy();
                if ($.Yq(a, "axesSettings"))
                    for (d = a.rp.cm(),
                    c = 0; c < d.length; c++) {
                        var e = d[c];
                        e.enabled() && e.Dy(b)
                    }
                if ($.Yq(a, "gridsSettings"))
                    for (a = a.Nx.cm(),
                    c = a.length; c--; )
                        d = a[c],
                        d.enabled() && d.Dy(b)
            }
              , IQ = function(a) {
                a.D0 = !1;
                HQ(a);
                a.hm.parent(null);
                a.Lt.parent(null);
                a.To.parent(null);
                a.Ma.ec("mousemove", a.j2, !0, a);
                a.Ma.ec("dblclick", a.i2, !0, a);
                a.Ma.ec("click", a.h2, !0, a);
                a.Wj.length = 0;
                a.pT = a.oT = a.JG = null;
                a.vA = !1
            }
              , HQ = function(a) {
                a.hm && (a.hm.clear(),
                a.Lt.clear(),
                a.To.Xb(0))
            }
              , JQ = function(a, b, c, d) {
                return {
                    type: a,
                    offsetX: d.offsetX,
                    offsetY: d.offsetY,
                    clientX: d.clientX,
                    clientY: d.clientY,
                    screenX: d.screenX,
                    screenY: d.screenY,
                    button: d.button,
                    actionButton: d.actionButton,
                    keyCode: d.keyCode,
                    charCode: d.charCode,
                    ctrlKey: d.ctrlKey,
                    altKey: d.altKey,
                    shiftKey: d.shiftKey,
                    metaKey: d.metaKey,
                    platformModifierKey: d.platformModifierKey,
                    originalEvent: d,
                    polygon: b,
                    polygonBounds: c
                }
            }
              , LQ = function(a, b) {
                var c;
                KQ(a) ? c = $.ck() : c = new $.jB(a.rz,a.jZ);
                c.parent(b);
                c.ic(1, 0, 0, 1, 0, 0);
                return c
            }
              , MQ = function(a, b) {
                for (var c = b.Ei(), d = 0, e = c.length; d < e; d++) {
                    var f = c[d];
                    $.K(f, $.Bg) ? a.jZ(f) : $.K(f, $.Gg) && MQ(a, f)
                }
            }
              , KQ = function(a) {
                return a.mD ? "svg" == a.mD.Oa() : a.gn ? $.z(a.gn) && $.ec(a.gn, "<") || $.Je(a.gn) : !1
            }
              , FQ = function(a) {
                var b, c, d, e, f, h, k;
                var l = {};
                var m = {};
                var p = "allow-overlap" != a.i("overlapMode");
                a.yU = !0;
                for (b = a.gb.length; b--; ) {
                    var q = a.gb[b];
                    var r = q.Oa();
                    if ($.da(a.zB) ? a.zB : a.zB[r]) {
                        var t = q.aa();
                        var u = t.Gb();
                        var v = null === q.yM() && p || "no-overlap" == q.yM();
                        r = l[r] ? l[r] : l[r] = [];
                        var w = 0;
                        for (c = u; w < c; w++) {
                            u = {};
                            u.W = q;
                            u.ab = q.Vk(w, $.Vl);
                            a.yU = a.yU && !u.ab;
                            u.index = w;
                            u.So = [];
                            u.state = !0;
                            t.select(u.index);
                            var x = t.o("currentPointElement"), y;
                            x && (y = x.properties);
                            x = t.get("overlapMode");
                            x = null != x ? x : y && null != y.overlapMode ? y.overlapMode : null;
                            u.yT = null == x && v || null != x && "no-overlap" == $.Gk(x);
                            x = t.get("labelrank");
                            u.PM = (0,
                            window.parseFloat)($.n(x) ? x : y && $.n(y.labelrank) ? y.labelrank : 0);
                            r.push(u)
                        }
                        m[q.la()] = []
                    }
                }
                $.Bc(l, function(a) {
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        h = a[b];
                        e = h.ab;
                        w = 0;
                        for (d = a.length; w < d; w++)
                            k = a[w],
                            f = k.ab,
                            b != w && $.Pm(e, f) && h.So.push(k);
                        h.RS = h.So.length
                    }
                    for (var l = new gQ(a,function(a, b) {
                        a = a ? a.RS : window.NaN;
                        b = b ? b.RS : window.NaN;
                        return a > b ? 1 : 0
                    }
                    ); a.length; ) {
                        var p = l.pop();
                        if (p.state && p.yT) {
                            b = 0;
                            for (c = p.So.length; b < c; b++) {
                                var q = p.So[b];
                                q.state && p.state && (p.yT && !q.yT ? p.state = !1 : p.PM == q.PM ? p.W.la() <= q.W.la() && (p.state = !1) : p.PM < q.PM && (p.state = !1))
                            }
                            if (!p.state)
                                for (b = 0,
                                c = p.So.length; b < c; b++)
                                    q = p.So[b],
                                    q.RS--,
                                    q = (0,
                                    $.za)(a, q),
                                    -1 != q && fQ(l, q)
                        }
                        m[p.W.la()][p.index] = p.state
                    }
                });
                for (b = a.gb.length; b--; )
                    q = a.gb[b],
                    $.V(q),
                    Lea(q, m[q.la()]),
                    q.Y(),
                    q.da(!1)
            }
              , rP = function(a, b, c, d, e) {
                var f, h, k;
                var l = 0;
                for (h = b.length; l < h; l++)
                    if (f = b[l]) {
                        if (d) {
                            var m = {};
                            $.Ec(f, "properties") && (m.properties = $.Mc(f.properties))
                        } else
                            e && (m = a.al[l]);
                        if ($.Ec(f, "geometries")) {
                            var p = f.geometries;
                            d ? k = [] : e && (k = m.geometries);
                            var q = p.length;
                            for (f = 0; f < q; f++) {
                                var r = d ? k[f] = {} : e ? k[f] : null;
                                NQ(a, p[f], c, r, d)
                            }
                        } else
                            NQ(a, f, c, m, d);
                        d && (a.al[l] = m)
                    }
            }
              , OQ = function(a, b, c, d) {
                if (b) {
                    var e;
                    if (KQ(a)) {
                        if ($.Ec(b, "type"))
                            if ("group" == b.type) {
                                b.ea || (b.ea = LQ(a, c));
                                var f = b.features;
                                var h = f.length;
                                for (e = 0; e < h; e++)
                                    OQ(a, f[e], b.ea, d);
                                $.Bc(b.attrs, function(a, c) {
                                    "id" == c ? b.ea.id(a) : "clip-path" == c ? (a.ea = AQ(a.commands, a.ea),
                                    b.ea.clip(a.ea)) : b.ea.be(c, a)
                                }, a)
                            } else
                                "image" == b.type ? (b.ea || (b.ea = c.Uj()),
                                d = b.bounds,
                                b.ea.x(d.left),
                                b.ea.y(d.top),
                                b.ea.width(d.width),
                                b.ea.height(d.height),
                                b.ea.src(b.attrs["xlink:href"])) : "path" == b.type ? (b.ea || (b.ea = a.rz(c)),
                                AQ(b.commands, b.ea),
                                $.Bc(b.attrs, function(a, d) {
                                    if ("id" == d)
                                        b.ea.id(a);
                                    else if ("clip-path" == d)
                                        a.ea = AQ(a.commands, a.ea),
                                        b.ea.clip(a.ea);
                                    else if ("fill" == d) {
                                        if ($.D(a))
                                            if (a.type && "pattern" == a.type) {
                                                var k = a.bounds;
                                                if (!a.ea)
                                                    for (a.ea = $.Sb(k),
                                                    a.ea.parent(c),
                                                    a.ea.ic(1, 0, 0, 1, 0, 0),
                                                    f = a.features,
                                                    h = f.length,
                                                    e = 0; e < h; e++)
                                                        OQ(this, f[e], a.ea, null);
                                                k = a.ea
                                            } else
                                                k = a;
                                        else
                                            k = a;
                                        b.ea.fill(k)
                                    } else if ("stroke" == d) {
                                        if ($.D(a))
                                            if (a.type && "pattern" == a.type) {
                                                k = a.bounds;
                                                if (!a.ea)
                                                    for (a.ea = $.Sb(k),
                                                    a.ea.parent(c),
                                                    a.ea.ic(1, 0, 0, 1, 0, 0),
                                                    f = a.features,
                                                    h = f.length,
                                                    e = 0; e < h; e++)
                                                        OQ(this, f[e], a.ea, null);
                                                k = a.ea
                                            } else
                                                k = a;
                                        else
                                            k = a;
                                        b.ea.stroke(k)
                                    } else
                                        b.ea.be(d, a)
                                }, a)) : "text" == b.type && (b.ea || (b.ea = new $.Vh),
                                d = b.cloneNode.cloneNode(!0),
                                d.removeAttribute("transform"),
                                b.ea.content(d));
                        b.ea && ((d = b.tx ? b.tx.self : null) && b.ea.ic(d.fd, d.Le, d.We, d.Ce, d.Ad, d.wd),
                        b.ea.parent(c),
                        "group" != b.type && a.Wv.push(b.ea))
                    } else if (d = $.kB(c),
                    b.ea = d,
                    a.Wv.push(d),
                    $.Ec(b, "geometries"))
                        for (d = b.geometries,
                        h = d.length,
                        e = 0; e < h; e++)
                            NQ(a, d[e], a.QZ);
                    else
                        NQ(a, b, a.QZ);
                    if (a.J(262144)) {
                        for (d = a.gb.length; d--; )
                            a.gb[d].Pr = a.al;
                        a.I(262144)
                    }
                }
            }
              , NQ = function(a, b, c, d, e) {
                var f, h;
                if (b)
                    if ($.Ec(b, "polygones")) {
                        var k = b.polygones;
                        var l = k.length;
                        e ? h = [] : d && (h = d.polygones);
                        for (f = 0; f < l; f++) {
                            var m = k[f];
                            var p = m.outerPath;
                            var q = m.holes;
                            if (e) {
                                p = $.Ha(p);
                                var r = {
                                    outerPath: p,
                                    holes: []
                                }
                            } else if (d) {
                                r = h[f];
                                p = r.outerPath = $.Ha(p);
                                var t = r.holes
                            }
                            var u = p.length;
                            for (m = 0; m < u - 1; m += 2)
                                c.call(a, p, m, b);
                            u = q.length;
                            for (m = 0; m < u; m++) {
                                var v = q[m];
                                e ? (v = $.Ha(v),
                                r.holes.push(v)) : d && (v = t[m] = $.Ha(v));
                                for (p = 0; p < v.length - 1; p += 2)
                                    c.call(a, v, p, b)
                            }
                            e && h.push(r)
                        }
                        e && (d.polygones = h)
                    } else if ($.Ec(b, "paths")) {
                        r = b.paths;
                        l = r.length;
                        e ? k = [] : d && (k = d.paths);
                        for (f = 0; f < l; f++)
                            for (h = r[f],
                            e ? (h = $.Ha(h),
                            k.push(h)) : d && (h = k[f] = $.Ha(h)),
                            u = h.length,
                            m = 0; m < u - 1; m += 2)
                                c.call(a, h, m, b);
                        e && (d.paths = k)
                    } else if ($.Ec(b, "coordinates"))
                        for (f = b.coordinates,
                        u = f.length,
                        e ? (f = $.Ha(f),
                        d.coordinates = f) : d && (f = d.coordinates = $.Ha(f)),
                        m = 0; m < u - 1; m += 2)
                            c.call(a, f, m, b);
                    else if ($.Ec(b, "type"))
                        if ("path" == b.type) {
                            if (e || d)
                                d.type = b.type,
                                d.commands = b.commands,
                                d.commands_tx = b.commands_tx,
                                d.attrs = b.attrs,
                                d.properties = b.properties,
                                d.tx = b.tx;
                            c.call(a, null, 0, b)
                        } else if ("image" == b.type) {
                            if (e || d)
                                d.type = b.type,
                                d.bounds = b.bounds,
                                d.attrs = b.attrs,
                                d.properties = b.properties,
                                d.sourceNode = b.sourceNode,
                                d.cloneNode = b.cloneNode,
                                d.tx = b.tx;
                            c.call(a, null, 0, b)
                        } else if ("text" == b.type) {
                            if (e || d)
                                d.type = b.type,
                                d.text = b.text,
                                d.cloneNode = b.cloneNode,
                                d.attrs = b.attrs,
                                d.properties = b.properties,
                                d.tx = b.tx;
                            c.call(a, null, 0, b)
                        } else if ("group" == b.type) {
                            u = b.features;
                            h = u.length;
                            e ? f = [] : d && (f = d.features);
                            for (m = 0; m < h; m++)
                                r = u[m],
                                e ? (l = {},
                                $.Ec(r, "properties") && (l.properties = r.properties)) : d && (l = r),
                                NQ(a, r, c, l, e),
                                e && f.push(l);
                            e && (d.features = f);
                            if (e || d)
                                d.type = b.type,
                                d.attrs = b.attrs,
                                d.tx = b.tx
                        }
            }
              , PQ = function(a, b, c, d) {
                if ("group" == b.type)
                    for (var e = 0, f = b.features.length; e < f; e++) {
                        var h = b.features[e];
                        c.call(d, b);
                        PQ(a, h, c, d)
                    }
                else
                    c.call(d, b)
            }
              , QQ = function(a, b) {
                if (!a.al)
                    return null;
                for (var c = 0, d = a.al.length; c < d; c++) {
                    var e = a.al[c];
                    if (e.properties[a.i("geoIdField")] == b)
                        return e
                }
                return null
            }
              , nP = function(a) {
                var b = a.nV;
                b || (a.nia = {},
                b = a.nia.root = a,
                a.rV = "root",
                a.QJ = b,
                a.nV = b);
                return b
            }
              , RQ = function(a) {
                a = a.Kz();
                return {
                    type: "drillchange",
                    path: a,
                    current: a[a.length - 1]
                }
            }
              , SQ = function(a, b, c) {
                if (a.P()) {
                    var d = nP(a)
                      , e = a.ph();
                    d.$u = !0;
                    var f = QQ(e, b);
                    if (f) {
                        var h = f.ea.Kq();
                        f = f.properties
                    } else
                        $.Xk(301, null, [b]),
                        h = (h = d.Lf()) ? new $.J(h.left + h.width / 2 - 1,h.top + h.height / 2 - 1,1,1) : new $.J(0,0,1,1),
                        f = {},
                        f[e.i("geoIdField")] = b;
                    var k = $.nm("map");
                    c.i("maxZoomLevel") == k.maxZoomLevel && c.pa("maxZoomLevel", e.i("maxZoomLevel"));
                    c.i("minZoomLevel") == k.minZoomLevel && c.pa("minZoomLevel", e.i("minZoomLevel"));
                    c.tk() && !c.Te(0).td() && (k = e.Te(0).td(),
                    c.Te(0).td(k));
                    if (c.tk() && "choropleth" == c.Te(0).Ij() && !$.Yq(c, "colorRange") && $.Yq(e, "colorRange")) {
                        k = e.Nj();
                        c.Nj(k.F());
                        var l = c.Nj();
                        l.labels().format(k.labels().format());
                        l.labels().positionFormatter(k.labels().positionFormatter());
                        l.jb().format(k.jb().format());
                        l.jb().positionFormatter(k.jb().positionFormatter())
                    }
                    !$.Yq(c, "legend") && $.Yq(e, "legend") && (k = e.Ef(),
                    c.Ef(k.F()));
                    c.pha = e;
                    c.nV = nP(a);
                    c.enabled(!0).P(a.P()).Y();
                    c.Oc();
                    c.rV = b;
                    c.ob(d);
                    b = uP(c, h, void 0, !0);
                    c.nr = !0;
                    c.ll = 0;
                    c.wj(1 / b[0], b[1], b[2]);
                    a.Zu(c, function(a, b, c, d, e) {
                        c.$u && (b.Va().Oc(null),
                        b.Oc(),
                        b.Jd(),
                        c.QJ = a,
                        c.jt.push(new cP(b,a,e,this.rV)),
                        a.show(),
                        a.Va().Oc(null),
                        b = uP(a, d, void 0, !0),
                        a.ll = 400,
                        a.nr = !0,
                        a.wj(this.i("minZoomLevel"), b[1], b[2]),
                        this.Zu(a, function(a) {
                            this.wj(this.i("minZoomLevel"));
                            a.$u = !1;
                            (0,
                            window.setTimeout)((0,
                            $.pa)(function() {
                                this.dispatchEvent(RQ(this))
                            }, a), 0)
                        }, c))
                    }, c, e, d, h, f)
                }
            }
              , Zea = function(a) {
                a = a.ph();
                var b = a.ef
                  , c = a.i("minZoomLevel")
                  , d = b.lb();
                b = b.No();
                var e = (d.left + d.width / 2) * (1 - c);
                d = (d.top + d.height / 2) * (1 - c);
                return $.Jm(a.Bg(), c) && $.Jm(b[4], e) && $.Jm(b[5], d)
            }
              , TQ = function(a, b, c) {
                var d = nP(a)
                  , e = a.ph();
                if (e != b) {
                    d.$u = !0;
                    e.ll = 700;
                    Zea(e) || e.wj(a.i("minZoomLevel"));
                    var f = c || 1;
                    a.Zu(e, function(a, b) {
                        var c = QQ(a, b.jt[b.jt.length - f].Dx());
                        if (c) {
                            var d = c.ea.Kq();
                            var e = uP(this, d);
                            c = e[0];
                            d = e[1];
                            e = e[2]
                        } else
                            $.Xk(301, null, [this.rV]),
                            c = 10;
                        this.nr = !0;
                        this.ll = 400;
                        this.wj(1 / c, d, e);
                        this.Zu(this, function(a, b) {
                            this.wj(this.i("minZoomLevel"));
                            this.Oc();
                            this.Jd();
                            this.enabled(!1);
                            b.QJ = a;
                            b.$u = !1;
                            $.Ca(b.jt, b.jt.length - f, f);
                            a.Va().Oc(null);
                            this.Va().Oc(null);
                            a.show();
                            (0,
                            window.setTimeout)((0,
                            $.pa)(function() {
                                this.dispatchEvent(RQ(this))
                            }, b), 0)
                        }, a, b)
                    }, b, d)
                }
            }
              , UQ = function(a, b) {
                return {
                    type: b,
                    target: a.ph(),
                    from: a.eB,
                    current: a.Mp,
                    to: a.oO
                }
            }
              , uP = function(a, b, c, d) {
                a = a.ph();
                var e = b.left + b.width / 2
                  , f = b.top + b.height / 2
                  , h = $.n(c) ? c : a.Lf()
                  , k = h.left + h.width / 2;
                c = h.top + h.height / 2;
                b = 1 / Math.max(b.width / h.width, b.height / h.height);
                d || (b = Math.max(Math.min(b * a.Bg(), a.i("maxZoomLevel")), a.i("minZoomLevel")) / a.Bg());
                $.Jm(b, 1, 1E-7) ? (d = k - e,
                f = c - f) : (d = (k - b * e) / (1 - b),
                f = (c - b * f) / (1 - b));
                b *= a.Bg();
                return [b, d, f]
            }
              , VQ = function(a) {
                $.Yz.call(this, a)
            }
              , WQ = function(a) {
                $.Yz.call(this, a)
            }
              , XQ = function(a) {
                $.Yz.call(this, a);
                this.b = $.xA("curvature", $.N, !1, "curvature");
                this.g = $.xA("startSize", $.fq, !1, "startSize");
                this.f = $.xA("endSize", $.fq, !1, "endSize")
            }
              , YQ = function(a, b, c, d, e, f, h, k, l, m, p, q, r, t) {
                var u = Math.abs(d - f);
                var v = Math.abs(e - h);
                v = $.Gm($.db(Math.atan(v / u)), 7);
                var w;
                f < d && h < e ? w = v : f < d && h > e ? w = -v : f > d && h > e ? w = v - 180 : f > d && h < e && (w = 180 - v);
                var x = p / 2;
                v = 0 > q ? -90 : 90;
                var y = d + Math.cos($.cb(w + v)) * x
                  , B = e + Math.sin($.cb(w + v)) * x;
                p = d + Math.cos($.cb(w - v)) * x;
                w = e + Math.sin($.cb(w - v)) * x;
                u = Math.abs(b - k);
                v = Math.abs(c - l);
                v = $.Gm($.db(Math.atan(v / u)), 7);
                var G;
                k < b && l < c ? G = v - 180 : k < b && l > c ? G = 180 - v : k > b && l > c ? G = v : k > b && l < c && (G = -v);
                x = m / 2;
                v = 0 > q ? -90 : 90;
                u = b + Math.cos($.cb(G + v)) * x;
                var C = c + Math.sin($.cb(G + v)) * x;
                m = b + Math.cos($.cb(G - v)) * x;
                G = c + Math.sin($.cb(G - v)) * x;
                var I = $.Um(u, C, y, B);
                v = I / 2 * q;
                var P = (u + y) / 2 + Math.cos($.cb(t)) * v * 1.2
                  , Q = (C + B) / 2 + Math.sin($.cb(t)) * v * 1.2;
                v = I / 2 * q;
                x = 0 < q ? 1 : -1;
                x = Math.abs(v) < I / 4 ? I / 4 * x : Math.abs(v) > I / 2 ? I / 2 * x : v;
                v = (0 > q ? 90 : -90) * r;
                I = P + Math.cos($.cb(t + v)) * x;
                var S = Q + Math.sin($.cb(t + v)) * x;
                v = (0 > q ? -90 : 90) * r;
                P += Math.cos($.cb(t + v)) * x;
                v = Q + Math.sin($.cb(t + v)) * x;
                a.moveTo(y, B);
                a.pk(I, S, P, v, u, C);
                u = $.Um(m, G, p, w);
                B = u / 2 * q;
                y = (m + p) / 2 + Math.cos($.cb(t)) * B * 1.2;
                B = (G + w) / 2 + Math.sin($.cb(t)) * B * 1.2;
                v = u / 2 * q;
                x = 0 < q ? 1 : -1;
                x = Math.abs(v) < u / 4 ? u / 4 * x : Math.abs(v) > u / 2 ? u / 2 * x : v;
                v = (0 > q ? 90 : -90) * r;
                u = y + Math.cos($.cb(t + v)) * x;
                C = B + Math.sin($.cb(t + v)) * x;
                v = (0 > q ? -90 : 90) * r;
                q = y + Math.cos($.cb(t + v)) * x;
                t = B + Math.sin($.cb(t + v)) * x;
                a.lineTo(m, G);
                a.pk(q, t, u, C, p, w);
                a.close();
                return [b, c, k, l, f, h, d, e]
            }
              , ZQ = function(a) {
                $.vB.call(this, a)
            }
              , $Q = function() {
                var a = new GQ;
                a.nd();
                return a
            }
              , aR = function(a) {
                var b = new GQ;
                b.Fa("bubbleMap");
                b.nd();
                b.pa("defaultSeriesType", "bubble");
                for (var c = 0, d = arguments.length; c < d; c++)
                    b.bubble(arguments[c]);
                return b
            }
              , bR = function(a) {
                var b = new GQ;
                b.Fa("choropleth");
                b.nd();
                b.pa("defaultSeriesType", "choropleth");
                for (var c = 0, d = arguments.length; c < d; c++)
                    b.choropleth(arguments[c]);
                return b
            }
              , cR = function(a) {
                var b = new GQ;
                b.Fa("connector");
                b.nd();
                b.pa("defaultSeriesType", "connector");
                for (var c = 0, d = arguments.length; c < d; c++)
                    b.connector(arguments[c]);
                return b
            }
              , dR = function(a) {
                var b = new GQ;
                b.Fa("markerMap");
                b.nd();
                b.pa("defaultSeriesType", "marker");
                for (var c = 0, d = arguments.length; c < d; c++)
                    b.marker(arguments[c]);
                return b
            }
              , eR = function(a) {
                var b = new GQ;
                b.Fa("seatMap");
                b.nd();
                b.pa("defaultSeriesType", "choropleth");
                for (var c = 0, d = arguments.length; c < d; c++)
                    b.choropleth(arguments[c]);
                return b
            };
            $.sd.prototype.t_ = $.ca(0, function() {
                return this.Yk
            });
            var $ea = {
                cka: "as-is",
                Qla: "hide"
            }
              , afa = {
                Oka: "choropleth",
                sO: "bubble",
                uu: "marker",
                Ska: "connector"
            }
              , ZO = !1;
            $.H(HO, $.Tw);
            HO.prototype.handleEvent = function(a) {
                this.b(a) && (a.preventDefault(),
                HO.B.handleEvent.call(this, a))
            }
            ;
            HO.prototype.R = function() {
                HO.B.R.call(this);
                this.b = null
            }
            ;
            $.g = IO.prototype;
            $.g.asin = function(a) {
                return 1 < a ? Math.PI / 2 : -1 > a ? -Math.PI / 2 : Math.asin(a)
            }
            ;
            $.g.acos = function(a) {
                return 1 < a ? 0 : -1 > a ? Math.PI : Math.acos(a)
            }
            ;
            $.g.sinh = function(a) {
                return .5 * (Math.exp(a) - Math.exp(-a))
            }
            ;
            $.g.cosh = function(a) {
                return .5 * (Math.exp(a) + Math.exp(-a))
            }
            ;
            $.g.forward = function(a, b) {
                return [a, b]
            }
            ;
            $.g.bj = function(a, b) {
                return [a, b]
            }
            ;
            $.H(KO, IO);
            KO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                var c = Math.cos(b);
                var d = (d = this.acos(c * Math.cos(a /= 2))) ? d / Math.sin(d) : 1;
                a = 2 * c * Math.sin(a) * d;
                b = Math.sin(b) * d;
                return [a, b]
            }
            ;
            KO.prototype.bj = function(a, b) {
                if (a * a + 4 * b * b > Math.PI * Math.PI + 1E-6)
                    return [window.NaN, window.NaN];
                var c = a
                  , d = b
                  , e = 25
                  , f = 0;
                do {
                    var h = Math.sin(c)
                      , k = Math.sin(c / 2)
                      , l = Math.cos(c / 2)
                      , m = Math.sin(d)
                      , p = Math.cos(d)
                      , q = Math.sin(2 * d)
                      , r = m * m
                      , t = p * p
                      , u = k * k
                      , v = 1 - t * l * l
                      , w = v ? this.acos(p * l) * Math.sqrt(f = 1 / v) : f = 0;
                    v = 2 * w * p * k - a;
                    var x = w * m - b
                      , y = f * (t * u + w * p * l * r)
                      , B = f * (.5 * h * q - 2 * w * m * k);
                    h = .25 * f * (q * k - w * m * t * h);
                    p = f * (r * l + w * u * p);
                    l = B * h - p * y;
                    if (!l)
                        break;
                    B = (x * B - v * p) / l;
                    v = (v * h - x * y) / l;
                    c -= B;
                    d -= v
                } while ((1E-6 < Math.abs(B) || 1E-6 < Math.abs(v)) && 0 < --e);return [$.Za($.db(c), -180, 180), $.Za($.db(d), -180, 180)]
            }
            ;
            $.H(LO, IO);
            LO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                var c = Math.tan(b / 2)
                  , d = JO(1 - c * c)
                  , e = 1 + d * Math.cos(a /= 2);
                d = Math.sin(a) * d / e;
                c /= e;
                e = d * d;
                var f = c * c;
                return [4 / 3 * d * (3 + e - 3 * f), 4 / 3 * c * (3 + 3 * e - f)]
            }
            ;
            LO.prototype.bj = function(a, b) {
                a *= .375;
                b *= .375;
                if (!a && 1 < Math.abs(b))
                    return [window.NaN, window.NaN];
                var c = 1 + a * a + b * b
                  , d = Math.sqrt(.5 * (c - Math.sqrt(c * c - 4 * b * b)));
                c = this.asin(d) / 3;
                d ? (d = Math.abs(b / d),
                d = Math.log(d + JO(d * d - 1)) / 3) : (d = Math.abs(a),
                d = Math.log(d + JO(d * d + 1)) / 3);
                var e = Math.cos(c)
                  , f = this.cosh(d)
                  , h = f * f - e * e;
                a = 2 * (0 < a ? 1 : 0 > a ? -1 : 0) * Math.atan2(this.sinh(d) * e, .25 - h);
                b = 2 * (0 < b ? 1 : 0 > b ? -1 : 0) * Math.atan2(f * Math.sin(c), .25 + h);
                return [$.db(a), $.db(b)]
            }
            ;
            $.H(MO, IO);
            MO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                var c = this.b + this.f - b
                  , d = c ? a * Math.cos(b) / c : c;
                a = c * Math.sin(d);
                b = this.b - c * Math.cos(d);
                return [a, b]
            }
            ;
            MO.prototype.bj = function(a, b) {
                var c = Math.sqrt(a * a + (b = this.b - b) * b)
                  , d = this.b + this.f - c;
                a = c / Math.cos(d) * Math.atan2(a, b);
                return [$.db(a), $.db(d)]
            }
            ;
            $.H(NO, IO);
            NO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                var c = Math.sqrt(8 / (3 * Math.PI));
                a = c * a * (1 - Math.abs(b) / Math.PI);
                return [a, c * b]
            }
            ;
            NO.prototype.bj = function(a, b) {
                var c = Math.sqrt(8 / (3 * Math.PI))
                  , d = b / c;
                a /= c * (1 - Math.abs(d) / Math.PI);
                return [$.db(a), $.db(d)]
            }
            ;
            $.H(OO, IO);
            OO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                var c = Math.sqrt(Math.PI * (4 + Math.PI));
                a = 2 / c * a * (1 + Math.sqrt(1 - 4 * b * b / (Math.PI * Math.PI)));
                return [a, 4 / c * b]
            }
            ;
            OO.prototype.bj = function(a, b) {
                var c = Math.sqrt(Math.PI * (4 + Math.PI)) / 2;
                a = a * c / (1 + JO(1 - b * b * (4 + Math.PI) / (4 * Math.PI)));
                return [$.db(a), $.db(b * c / 2)]
            }
            ;
            $.H(PO, IO);
            PO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                return [a, b]
            }
            ;
            PO.prototype.bj = function(a, b) {
                return [$.db(a), $.db(b)]
            }
            ;
            $.H(QO, IO);
            QO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                var c = Math.cos($.cb(35))
                  , d = Math.tan(b / 2);
                a = a * c * JO(1 - d * d);
                return [a, (1 + c) * d]
            }
            ;
            QO.prototype.bj = function(a, b) {
                var c = Math.cos($.cb(35))
                  , d = b / (1 + c);
                a = a ? a / (c * JO(1 - d * d)) : 0;
                b = 2 * Math.atan(d);
                return [$.db(a), $.db(b)]
            }
            ;
            $.H(RO, IO);
            RO.prototype.forward = function(a, b) {
                var c = Math.cos(b)
                  , d = this.scale(Math.cos(a) * c);
                a = d * c * Math.sin(a);
                b = d * Math.sin(b);
                return [a, b]
            }
            ;
            RO.prototype.bj = function(a, b) {
                var c = $.Um(0, 0, a, b)
                  , d = this.angle(c)
                  , e = Math.sin(d);
                a = Math.atan2(a * e, c * Math.cos(d));
                b = Math.asin(c && b * e / c);
                return [a, b]
            }
            ;
            $.H(SO, IO);
            SO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                var c = this.f.forward(a / 2, b);
                c[0] *= this.b;
                a = c[0];
                b = c[1];
                return [a, b]
            }
            ;
            SO.prototype.bj = function(a, b) {
                var c = this.f.bj(a / this.b, b);
                c[0] *= 2;
                a = c[0];
                b = c[1];
                return [$.db(a), $.db(b)]
            }
            ;
            $.H(TO, IO);
            TO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                b = Math.log(Math.tan(Math.PI / 4 + b / 2));
                return [a, b]
            }
            ;
            TO.prototype.bj = function(a, b) {
                b = 2 * Math.atan(Math.exp(b)) - Math.PI / 2;
                return [$.db(a), $.db(b)]
            }
            ;
            $.H(UO, IO);
            UO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                var c = this.b.forward(a, b);
                a = c[0];
                b = c[1];
                return [a, b]
            }
            ;
            UO.prototype.bj = function(a, b) {
                var c = this.b.bj(a, b);
                a = c[0];
                b = c[1];
                return [$.db(a), $.db(b)]
            }
            ;
            $.H(VO, IO);
            VO.prototype.forward = function(a, b) {
                return this.b(this.f).forward([a, b])
            }
            ;
            VO.prototype.bj = function(a, b) {
                return this.b(this.f).inverse([a, b])
            }
            ;
            $.H(WO, IO);
            var fR = [[.9986, -.062], [1, 0], [.9986, .062], [.9954, .124], [.99, .186], [.9822, .248], [.973, .31], [.96, .372], [.9427, .434], [.9216, .4958], [.8962, .5571], [.8679, .6176], [.835, .6769], [.7986, .7346], [.7597, .7903], [.7186, .8435], [.6732, .8936], [.6213, .9394], [.5722, .9761], [.5322, 1]];
            WO.prototype.forward = function(a, b) {
                if ((0,
                window.isNaN)(a) || (0,
                window.isNaN)(b))
                    return [window.NaN, window.NaN];
                a = $.cb(a);
                b = $.cb(b);
                var c, d = Math.min(18, 36 * Math.abs(b) / Math.PI), e = Math.floor(d);
                d -= e;
                var f = (c = fR[e])[0]
                  , h = c[1]
                  , k = (c = fR[++e])[0]
                  , l = c[1];
                e = (c = fR[Math.min(19, ++e)])[0];
                c = c[1];
                b = (0 < b ? Math.PI / 2 : -Math.PI / 2) * (l + d * (c - h) / 2 + d * d * (c - 2 * l + h) / 2);
                return [a * (k + d * (e - f) / 2 + d * d * (e - 2 * k + f) / 2), b]
            }
            ;
            WO.prototype.bj = function(a, b) {
                if ((0,
                window.isNaN)(a) || (0,
                window.isNaN)(b))
                    return [window.NaN, window.NaN];
                var c = b / Math.PI / 2
                  , d = 90 * c
                  , e = Math.min(18, Math.abs(d / 5))
                  , f = Math.max(0, Math.floor(e));
                do {
                    var h = fR[f][1]
                      , k = fR[f + 1][1]
                      , l = fR[Math.min(19, f + 2)][1]
                      , m = l - h
                      , p = 2 * (Math.abs(c) - k) / m;
                    h = (l - 2 * k + h) / m;
                    p *= 1 - h * p * (1 - 2 * h * p);
                    if (0 <= p || 1 === f) {
                        d = (0 <= b ? 5 : -5) * (p + e);
                        c = 50;
                        do
                            e = Math.min(18, Math.abs(d) / 5),
                            f = Math.floor(e),
                            p = e - f,
                            h = fR[f][1],
                            k = fR[f + 1][1],
                            l = fR[Math.min(19, f + 2)][1],
                            d -= $.db(e = (0 <= b ? Math.PI / 2 : -Math.PI / 2) * (k + p * (l - h) / 2 + p * p * (l - 2 * k + h) / 2) - b);
                        while (1E-12 < Math.abs(e) && 0 < --c);break
                    }
                } while (0 <= --f);e = fR[f][0];
                c = fR[f + 1][0];
                f = fR[Math.min(19, f + 2)][0];
                b = $.cb(d);
                return [$.db(a / (c + p * (f - e) / 2 + p * p * (f - 2 * c + e) / 2)), $.db(b)]
            }
            ;
            $.H(XO, IO);
            XO.prototype.forward = function(a, b) {
                a = $.cb(a);
                b = $.cb(b);
                a *= Math.sqrt(1 - 3 * b * b / (Math.PI * Math.PI));
                return [a, b]
            }
            ;
            XO.prototype.bj = function(a, b) {
                a /= Math.sqrt(1 - 3 * b * b / (Math.PI * Math.PI));
                return [$.db(a), $.db(b)]
            }
            ;
            $.H(bP, $.tw);
            var gR = {};
            $.Yp(gR, [[0, "zoomOnDoubleClick", $.hq], [0, "keyboardZoomAndMove", $.hq], [0, "drag", $.hq], [0, "copyFormat", $.Jq]]);
            $.U(bP, gR);
            bP.prototype.F = function() {
                var a = bP.B.F.call(this);
                $.uq(this, gR, a);
                return a
            }
            ;
            bP.prototype.X = function(a, b) {
                bP.B.X.call(this, a, b);
                $.mq(this, gR, a)
            }
            ;
            $.H(cP, $.Tz);
            $.g = cP.prototype;
            $.g.get = function(a) {
                return $.E(this.Aa.data) ? this.Aa.data().get(this.index, a) : void 0
            }
            ;
            $.g.Dx = function() {
                return this.id
            }
            ;
            $.g.K9 = function() {
                return this.f
            }
            ;
            $.g.A_ = function() {
                return this.b
            }
            ;
            $.g.zda = function() {
                return this.mc()
            }
            ;
            var hR = cP.prototype;
            hR.getId = hR.Dx;
            hR.getProperties = hR.K9;
            hR.getCurrentChart = hR.A_;
            hR.getParentChart = hR.zda;
            hR.get = hR.get;
            $.H(dP, $.Uz);
            $.g = dP.prototype;
            $.g.Cx = function() {
                var a = this.W.aa();
                a.select(this.index);
                return a.o("features")[0].properties
            }
            ;
            $.g.vda = function() {
                var a = this.W.aa();
                a.select(this.index);
                return a.o("features")[0].ea.Kq()
            }
            ;
            $.g.Dfa = function(a) {
                if ($.n(a))
                    return this.set("middle-x", a),
                    this;
                a = this.W.aa();
                a.select(this.index);
                a = (a = a.o("features")) && a.length ? a[0].properties : null;
                var b = this.get("middle-x");
                return $.n(b) ? b : a ? a["middle-x"] : .5
            }
            ;
            $.g.Efa = function(a) {
                if ($.n(a))
                    return this.set("middle-y", a),
                    this;
                a = this.W.aa();
                a.select(this.index);
                a = (a = a.o("features")) && a.length ? a[0].properties : null;
                var b = this.get("middle-y");
                return $.n(b) ? b : a ? a["middle-y"] : .5
            }
            ;
            $.g.rja = function(a, b) {
                var c = this.mc();
                return $.n(a) || $.n(b) ? (c.vR(this.Cx()[gP(this.W)], a, b),
                this) : c.vR(this.Cx()[gP(this.W)])
            }
            ;
            $.g.translate = function(a, b) {
                this.mc().l4(this.Cx()[gP(this.W)], a, b);
                return this
            }
            ;
            $.g.wg = function(a) {
                var b = this.mc();
                return $.n(a) ? (b.tR(this.Cx()[gP(this.W)], a),
                this) : b.tR(this.Cx()[gP(this.W)], a)
            }
            ;
            $.g.mia = function(a) {
                var b = this.mc();
                return $.n(a) ? (b.uR(this.Cx()[gP(this.W)], a),
                this) : b.uR(this.Cx()[gP(this.W)], a)
            }
            ;
            var iR = dP.prototype;
            iR.getFeatureProp = iR.Cx;
            iR.getFeatureBounds = iR.vda;
            iR.middleX = iR.Dfa;
            iR.middleY = iR.Efa;
            iR.translation = iR.rja;
            iR.translate = iR.translate;
            iR.crs = iR.wg;
            iR.scaleFactor = iR.mia;
            $.H(eP, $.FA);
            $.g = eP.prototype;
            $.g.qa = $.FA.prototype.qa | 1152;
            $.g.ra = $.FA.prototype.ra | 4194304;
            $.g.CO = 1.3E-5;
            $.g.lE = {};
            $.g.Qr = function() {
                return 0
            }
            ;
            $.g.FE = null;
            $.g.we = function(a, b, c) {
                a = a || this.i("color") || "blue";
                var d, e = this.aa(), f = {}, h = this.td();
                c = $.n(c) && c;
                h && !c && (c = e.get(this.Qe.kl),
                $.n(c) && (d = h.sq(c)),
                $.Oc(f, {
                    scaledColor: d,
                    colorScale: h
                }));
                jP(this) && (d = e.o("currentPointElement"),
                h = (h = e.o("features")) && h.length ? h[0] : null,
                $.Oc(f, {
                    properties: h ? h.properties : null,
                    attributes: d ? d.attrs : null,
                    element: d ? d.domElement : null
                }));
                f.sourceColor = a;
                this.Ls() && (e = b ? this.Kf() : e,
                $.Oc(f, {
                    index: e.la(),
                    sourceColor: a,
                    iterator: e,
                    referenceValueNames: this.se()
                }));
                return f
            }
            ;
            $.g.yi = function(a) {
                var b = this.oh();
                return this.Ls() ? (a = a ? this.Kf() : this.aa(),
                {
                    index: a.la(),
                    sourceHatchFill: b,
                    iterator: a,
                    referenceValueNames: this.se()
                }) : {
                    sourceHatchFill: b
                }
            }
            ;
            $.g.oC = function(a) {
                return $.n(a) ? (a != this.b && (this.b = a,
                this.u(1536, 5)),
                this) : this.b || this.g
            }
            ;
            $.g.Vk = function(a, b) {
                var c = this.aa();
                c.select(a);
                var d = $.n(b) ? b : $.zw(this.state, a), e = !!(d & $.go), f = !e && !!(d & $.fo), h, k = c.get("normal");
                k = $.n(k) ? k.label : void 0;
                var l = (k = $.Jo(k, c.get("label"))) && $.n(k.enabled) ? k.enabled : null;
                var m = this.Ra().labels()
                  , p = null;
                if (e) {
                    var q = c.get("selected");
                    q = $.n(q) ? q.label : void 0;
                    var r = (q = $.Jo(q, c.get("selectLabel"))) && $.n(q.enabled) ? q.enabled : null;
                    p = this.selected().labels()
                } else
                    f ? (q = c.get("hovered"),
                    q = $.n(q) ? q.label : void 0,
                    r = (q = $.Jo(q, c.get("hoverLabel"))) && $.n(q.enabled) ? q.enabled : null,
                    p = this.kb().labels()) : q = null;
                e || f ? h = null === r ? null === p.enabled() ? null === l ? m.enabled() : l : p.enabled() : r : h = null === l ? m.enabled() : l;
                return h ? (c = hP(this, d),
                c = this.Ri(c),
                d = this.Gc(!0),
                e = {},
                k && $.Oc(e, k),
                p && $.Oc(e, $.vM(p)),
                q && $.Oc(e, q),
                q = e.anchor,
                $.n(q) && null !== q || (e.anchor = this.aa().o("labelAnchor")),
                $.Ym(m.measure(d, c, e, a))) : null
            }
            ;
            $.g.yM = function(a) {
                return $.n(a) ? (a = !1 === a ? "no-overlap" : a,
                a = null === a ? a : "allow-overlap" == $.Gk(a),
                this.FE != a && (this.FE = a,
                this.u(256, 1025)),
                this) : null === this.FE ? this.Aa.i("overlapMode") : this.FE ? "allow-overlap" : "no-overlap"
            }
            ;
            $.g.uf = function(a, b, c) {
                var d = a.la();
                this.f && $.n(this.f[d]) && !this.f[d] || eP.B.uf.call(this, a, b, c)
            }
            ;
            $.g.E_ = function() {
                return this.va
            }
            ;
            $.g.RC = function() {
                return !0
            }
            ;
            $.g.hA = function(a) {
                if (22 == this.Qe.type || this.Yj()) {
                    var b = kP(this, a);
                    a.o("x", b ? b.x : window.NaN);
                    a.o("value", b ? b.y : window.NaN)
                }
                this.Yj() && a.o("size", this.$E(Number(a.get("size"))))
            }
            ;
            $.g.Ln = function() {
                for (var a = -window.Infinity, b = window.Infinity, c = 0, d = 0, e = this.xc(); e.advance(); ) {
                    var f = this.enabled() ? [this.aa().get(this.Qe.kl)] : null;
                    f && (f = $.N(f[0]),
                    (0,
                    window.isNaN)(f) || (a = Math.max(a, f),
                    b = Math.min(b, f),
                    c += f));
                    d++
                }
                e = c / d;
                this.Ia("seriesMax", a);
                this.Ia("seriesMin", b);
                this.Ia("seriesSum", c);
                this.Ia("seriesAverage", e);
                this.Ia("seriesPointsCount", d);
                this.Ia("seriesPointCount", d)
            }
            ;
            $.g.Dy = function() {
                var a = this.xc()
                  , b = this.P() ? this.P().Ha() : null
                  , c = b && !b.df();
                for (c && b.suspend(); a.advance() && this.enabled(); )
                    Oea(this);
                c && b.resume()
            }
            ;
            $.g.Mj = function(a, b) {
                var c = this.aa();
                if (this.Mg())
                    if (jP(this)) {
                        var d = c.o("features");
                        if (!d) {
                            c.o("beforeDrawState", a);
                            return
                        }
                        for (var e = 0, f = d.length; e < f; e++) {
                            var h = d[e];
                            $.n(h.ea) && PQ(this.mc(), h, function(b) {
                                var d = b.ea;
                                if (d && $.K(d, $.lg)) {
                                    var e = c.o("beforeDrawState");
                                    $.ea(e) && (a = e,
                                    c.o("beforeDrawState", null));
                                    e = a;
                                    var f = "s" + $.oa(d)
                                      , h = d.zIndex();
                                    switch (e) {
                                    case $.fo:
                                        f in this.ED && (h = this.ED[f]);
                                        f in this.Xz || (this.Xz[f] = h,
                                        d.zIndex(1E4),
                                        c.o("stateZIndex", 1E4),
                                        this.yG[f] = d);
                                        break;
                                    case $.go:
                                        f in this.Xz && (h = this.Xz[f],
                                        delete this.yG[f],
                                        delete this.Xz[f]);
                                        f in this.ED || (this.ED[f] = h,
                                        d.zIndex(1E3),
                                        c.o("stateZIndex", 1E3),
                                        this.gN[f] = d);
                                        break;
                                    default:
                                        f in this.yG && (this.yG[f].zIndex(this.Xz[f]),
                                        c.o("stateZIndex", null),
                                        delete this.yG[f],
                                        delete this.Xz[f]),
                                        f in this.gN && (this.gN[f].zIndex(this.ED[f]),
                                        c.o("stateZIndex", null),
                                        delete this.gN[f],
                                        delete this.ED[f])
                                    }
                                    c.o("currentPointElement", b);
                                    d = {
                                        foreignFill: d
                                    };
                                    b.x0 && (d.hatchFill = b.x0);
                                    this.tf.om(a, d);
                                    this.tf.$A(a, d)
                                }
                            }, this)
                        }
                    } else
                        d = c.o("shapes"),
                        this.tf.om(a, d),
                        this.tf.$A(a, d);
                this.check(256) && this.pK(c, a, !0);
                this.Qe.$D(c, a);
                this.check(4194304) && this.Hp(c, a, !0);
                this.check($.TF) && this.uf(c, a, !0);
                return b
            }
            ;
            $.g.Pp = $.ia;
            $.g.ZY = function() {
                this.I(65536)
            }
            ;
            $.g.nb = function() {
                jP(this) || this.I(65536);
                if (this.J(4194304) || this.J(65536)) {
                    var a = this.hn()
                      , b = this.se();
                    this.yV.length = 0;
                    var c = this.xc(), d = this.Aa.GG, e;
                    for (d && (e = d[this.oC()]); c.advance(); ) {
                        if (this.J(4194304)) {
                            if (!e)
                                continue;
                            d = c.get(b[0]);
                            if (!d || !($.ea(d) || $.z(d) || $.A(d)))
                                continue;
                            d = $.A(d) ? d : [d];
                            c.o("features", void 0);
                            for (var f = [], h = 0, k = d.length; h < k; h++) {
                                var l = d[h]
                                  , m = e[l];
                                m && (f.push(m),
                                this.yV[c.la()] = l)
                            }
                            c.o("features", f)
                        }
                        a && this.J(65536) && a.Tc(c.get(b[1]))
                    }
                    a && this.J(65536) && a.zg();
                    this.I(65536);
                    this.I(4194304)
                }
            }
            ;
            $.g.sd = function() {
                this.nb();
                this.iA = this.Aa.ef.kg().clone();
                eP.B.sd.call(this)
            }
            ;
            $.g.cn = function(a, b) {
                if (this.J(4) && jP(this)) {
                    var c = a.o("features");
                    if (c) {
                        var d = a.o("beforeDrawState");
                        $.ea(d) && (b = d,
                        this.Mj(b),
                        a.o("beforeDrawState", null));
                        d = 0;
                        for (var e = c.length; d < e; d++) {
                            var f = c[d];
                            $.n(f.ea) && $.Et(this, f.ea)
                        }
                    }
                }
                eP.B.cn.call(this, a, b)
            }
            ;
            $.g.vC = function(a) {
                var b = this.hs();
                b.I(b.ra);
                var c = b.F()
                  , d = {
                    sourceColor: this.i("color")
                };
                $.E(b.cs()) && (c.iconFill = b.cs().call(d, d));
                $.E(b.es()) && (c.iconStroke = b.es().call(d, d));
                $.E(b.ds()) && (d.sourceColor = this.TE,
                c.iconHatchFill = b.ds().call(d, d));
                b = this.UB();
                var e;
                $.E(a) && (e = a.call(b, b));
                $.z(e) || (e = this.name());
                "marker" == c.iconType && this.check(4194304) && (a = this.Ra().Ib(),
                c.iconFill = a.fill(),
                c.iconStroke = a.stroke());
                c.iconType = this.uC(c.iconType, b);
                e = {
                    text: e,
                    iconEnabled: !0,
                    iconStroke: void 0,
                    iconFill: this.i("color"),
                    iconHatchFill: void 0,
                    disabled: !this.enabled()
                };
                $.Oc(e, c);
                return e
            }
            ;
            $.g.CQ = function() {
                return [this, this.mc()]
            }
            ;
            $.g.UR = function() {
                return {}
            }
            ;
            $.g.Bm = function(a, b) {
                var c = this.Xk()
                  , d = {
                    chart: {
                        value: this.mc(),
                        type: ""
                    },
                    series: {
                        value: this,
                        type: ""
                    },
                    scale: {
                        value: c,
                        type: ""
                    },
                    index: {
                        value: b.la(),
                        type: "number"
                    },
                    seriesName: {
                        value: this.name(),
                        type: "string"
                    },
                    id: {
                        value: b.get("id"),
                        type: "string"
                    }
                }
                  , e = b.get("value");
                $.n(e) && (d.value = {
                    value: e,
                    type: "number"
                });
                c && $.E(c.Oa) && (d.xScaleType = {
                    value: c.Oa(),
                    type: "string"
                });
                e = this.se();
                for (c = 0; c < e.length; c++) {
                    var f = e[c];
                    f in d || (d[f] = {
                        value: b.get(f),
                        type: "number"
                    })
                }
                if (21 == this.Qe.type) {
                    var h = b.o("pointsWithoutMissing");
                    if (h && h.length) {
                        d.startPoint = {
                            value: {
                                lat: h[0],
                                "long": h[1]
                            },
                            type: ""
                        };
                        d.endPoint = {
                            value: {
                                lat: h[h.length - 2],
                                "long": h[h.length - 1]
                            },
                            type: ""
                        };
                        f = [];
                        c = 0;
                        for (e = h.length; c < e; c += 2)
                            f.push({
                                lat: h[c],
                                "long": h[c + 1]
                            });
                        d.connectorPoints = {
                            value: f,
                            type: ""
                        }
                    }
                } else if ((c = b.o("regionId")) && (d.id = {
                    value: c,
                    type: "string"
                }),
                c = (c = b.o("features")) && c.length ? c[0].properties : null)
                    for (h in d.regionProperties = {
                        value: c,
                        type: ""
                    },
                    c)
                        !c.hasOwnProperty(h) || h in d || (d[h] = {
                            value: c[h]
                        });
                return d
            }
            ;
            $.g.TR = function() {
                return $.DA(this, new $.Rv)
            }
            ;
            $.g.kF = function() {
                return this.TR()
            }
            ;
            $.g.uU = function() {
                return !1
            }
            ;
            $.g.L9 = function(a, b) {
                var c = this.Aa.scale().transform(a, b);
                return {
                    x: c[0],
                    y: c[1]
                }
            }
            ;
            $.g.Gc = function(a) {
                if (!this.j || a)
                    this.j = new $.Rv;
                return $.DA(this, this.j)
            }
            ;
            $.g.qK = function(a, b, c, d, e, f) {
                var h = a[0]
                  , k = a[1]
                  , l = a[2];
                a = a[3];
                if (!d.value)
                    return null;
                var m = e ? h.de(c) : h.Pq(c);
                m ? (e && m.Uf(e),
                m.Ec(d)) : m = e ? h.add(e, d, c) : h.add(d, c);
                m.Gi();
                if (e)
                    m.Ok(this.aa().o("labelAnchor")),
                    b.unshift(m),
                    this.NV.apply(this, b);
                else {
                    $.tx(m, k || h);
                    l = $.Mc(l || {});
                    a = $.Mc(a || {});
                    b = m.wc("rotation");
                    if (!$.n(b) || null === b || (0,
                    window.isNaN)(b))
                        b = this.aa().o("markerRotation"),
                        "rotation"in l || (l.rotation = b),
                        "rotation"in a || (a.rotation = b);
                    b = m.wc("anchor");
                    $.n(b) && null !== b || (b = this.aa().o("markerAnchor"),
                    "anchor"in l || (l.anchor = b),
                    "anchor"in a || (a.anchor = b));
                    m.md(l, a)
                }
                f && m.Y();
                24 == this.Qe.type && (m.iA = this.Aa.ef.kg().clone());
                return m
            }
            ;
            $.g.Ri = function(a) {
                var b = this.aa()
                  , c = {
                    x: 0,
                    y: 0
                };
                switch (this.Qe.type) {
                case 21:
                    if (b.o("shapes").path) {
                        var d = b.o("sumDist")
                          , e = b.o("connectorsDist")
                          , f = b.o("points")
                          , h = 0;
                        if ($.z(a))
                            switch (a) {
                            case "start":
                                var k = 0;
                                break;
                            case "middle":
                                k = .5;
                                break;
                            case "end":
                                k = 1;
                                break;
                            default:
                                $.eo(a) ? k = (0,
                                window.parseFloat)(a) / 100 : (k = $.N(a),
                                (0,
                                window.isNaN)(k) && (k = .5))
                            }
                        else
                            k = $.N(a),
                            (0,
                            window.isNaN)(k) && (k = .5);
                        d *= k;
                        for (var l = 0, m = f.length; l < m; l += 8) {
                            a = e[l / 8];
                            if (d >= h && d <= h + a) {
                                var p = (d - h) / a
                                  , q = f[l + 2]
                                  , r = f[l + 3]
                                  , t = f[l + 4]
                                  , u = f[l + 5]
                                  , v = f[l + 6]
                                  , w = f[l + 7];
                                c = t + (q - t) * (1 - p);
                                var x = u + (r - u) * (1 - p);
                                t = v + (t - v) * (1 - p);
                                u = w + (u - w) * (1 - p);
                                q = c + (q + (f[l] - q) * (1 - p) - c) * (1 - p);
                                r = x + (r + (f[l + 1] - r) * (1 - p) - x) * (1 - p);
                                c = t + (c - t) * (1 - p);
                                t = u + (x - u) * (1 - p);
                                x = c + (q - c) * (1 - p);
                                p = t + (r - t) * (1 - p);
                                u = $.Gm($.db(Math.atan(Math.abs(t - r) / Math.abs(c - q))), 7);
                                c < q && t < r ? u -= 180 : c < q && t > r ? u = 180 - u : c > q && t > r || c > q && t < r && (u = -u);
                                b.o("labelAnchor", iP($.ab(u + 90)));
                                b.o("markerRotation", u);
                                b.o("markerAnchor", 1 == k ? "right-center" : k ? "center" : "left-center")
                            }
                            h += a
                        }
                        this.Aa.y4 || this.Aa.Yfa || 21 != this.Qe.type ? (e = this.iA,
                        b = this.Aa.ef.kg().clone(),
                        e && $.yb(b, $.Jb(e)),
                        e = b.fd,
                        c = {
                            x: x * e + b.Ad,
                            y: p * e + b.wd
                        }) : c = {
                            x: x,
                            y: p
                        }
                    } else
                        c = {
                            x: 0,
                            y: 0
                        };
                    break;
                case 22:
                case 23:
                    c = kP(this, b);
                    break;
                case 24:
                    if (p = (x = b.o("features")) && x.length ? x[0] : null) {
                        x = mP(this);
                        if (a = b.get("label"))
                            l = a.positionMode,
                            k = a.x,
                            f = a.y;
                        if (c = (c = p.properties) && c.label)
                            m = c && c.positionMode,
                            d = a.x,
                            h = a.y;
                        l = l || m || "relative";
                        k = $.n(k) ? k : d;
                        h = $.n(f) ? f : h;
                        $.n(k) && $.n(h) ? (b.o("positionMode", l),
                        e = x.x,
                        f = x.y,
                        "relative" == l ? (k = $.io(k),
                        h = $.io(h),
                        k = $.eo(k) ? (0,
                        window.parseFloat)(k) / 100 : k,
                        h = $.eo(h) ? (0,
                        window.parseFloat)(h) / 100 : h,
                        (p = p.ea) ? (p = p.Kq(),
                        k = p.left + p.width * k,
                        h = p.top + p.height * h) : h = k = 0) : "absolute" == l ? (h = this.Aa.scale().transform((0,
                        window.parseFloat)(k), (0,
                        window.parseFloat)(h)),
                        k = h[0],
                        h = h[1]) : "offset" == l && (p = $.cb((0,
                        window.parseFloat)(k) - 90),
                        h = (0,
                        window.parseFloat)(h),
                        k = e + h * Math.cos(p),
                        h = f + h * Math.sin(p)),
                        p = $.Gm($.db(Math.atan(Math.abs(f - h) / Math.abs(e - k))), 7),
                        e < k && f < h ? p -= 180 : e < k && f > h ? p = 180 - p : e > k && f > h || e > k && f < h && (p = -p),
                        e = iP($.ab(p - 90)),
                        b.o("labelAnchor", e),
                        b.o("markerAnchor", e),
                        e = {
                            x: k,
                            y: h
                        }) : (b.o("labelAnchor", "center"),
                        b.o("markerAnchor", "center"))
                    } else
                        x = null;
                    e ? (e.connectorPoint = {
                        value: x
                    },
                    c = e) : c = x;
                    if (b = c && c.connectorPoint)
                        return delete c.connectorPoint,
                        {
                            connectorPoint: b,
                            value: c
                        }
                }
                return {
                    value: c
                }
            }
            ;
            $.g.Id = function(a) {
                return jP(this) ? new dP(this,a) : eP.B.Id.call(this, a)
            }
            ;
            var jR = {};
            $.Xp(jR, 0, "startSize", $.fq);
            $.Xp(jR, 0, "endSize", $.fq);
            $.Xp(jR, 0, "curvature", $.fq);
            $.U(eP, jR);
            eP.prototype.F = function() {
                var a = eP.B.F.call(this);
                $.uq(this, jR, a);
                a.seriesType = this.Oa();
                a.overlapMode = this.FE;
                $.n(this.b) && (a.geoIdField = this.b);
                return a
            }
            ;
            eP.prototype.X = function(a, b) {
                eP.B.X.call(this, a, b);
                $.mq(this, jR, a);
                this.yM(a.overlapMode);
                this.oC(a.geoIdField)
            }
            ;
            var kR = eP.prototype;
            kR.overlapMode = kR.yM;
            kR.geoIdField = kR.oC;
            kR.transformXY = kR.L9;
            kR.getPoint = kR.Id;
            $.H(pP, $.Jy);
            pP.prototype.fw = function() {
                this.g || oP(this.map.r1, 1);
                pP.B.fw.call(this)
            }
            ;
            pP.prototype.Jl = function() {
                this.g || oP(this.map.r1, 0);
                pP.B.Jl.call(this)
            }
            ;
            pP.prototype.R = function() {
                pP.B.R.call(this);
                this.map = null
            }
            ;
            $.H(qP, pP);
            qP.prototype.aQ = function(a, b) {
                var c = (a[b] - this.Od.Wh) / this.Od.scale;
                var d = (a[b + 1] - this.Od.Ni) / this.Od.scale;
                this.YH && (d = this.YH.bj(c, d),
                c = d[0],
                d = d[1]);
                c = this.Od.Co.forward(c, d);
                a[b] = c[0] * this.Od.scale + this.Od.Wh;
                a[b + 1] = c[1] * this.Od.scale + this.Od.Ni;
                this.MR.EK(a[b], a[b + 1])
            }
            ;
            qP.prototype.stop = function(a) {
                $.Hy(this);
                this.Yb = $.Dy;
                a && (this.Qc = 1);
                sP(this, this.Qc);
                this.Go("stop");
                this.Jl()
            }
            ;
            qP.prototype.oF = function(a) {
                this.Yb != $.Dy && (this.Qc = (a - this.j) / (this.D - this.j),
                1 <= this.Qc && (this.Qc = 1),
                sP(this, this.Qc),
                1 == this.Qc ? (this.Yb = $.Dy,
                $.Hy(this),
                this.hD(),
                this.Jl()) : 1 == this.Yb && this.Lm())
            }
            ;
            qP.prototype.R = function() {
                qP.B.R.call(this);
                this.Od = this.YH = this.Pr = null
            }
            ;
            $.H(tP, pP);
            tP.prototype.fw = function() {
                this.G = $.Jm(this.b[0], this.f[0], 1E-5) && this.map.II;
                tP.B.fw.call(this)
            }
            ;
            tP.prototype.Lm = function() {
                this.G ? yP(this, this.coords[1], this.coords[2]) : xP(this, this.coords[0]);
                this.g || nP(this.map).dispatchEvent(UQ(this.map, "zoom"));
                tP.B.Lm.call(this)
            }
            ;
            tP.prototype.hD = function() {
                if (this.map.Pr()) {
                    var a = this.coords[0]
                      , b = this.coords[1]
                      , c = this.coords[2];
                    this.G ? yP(this, b, c) : (b = this.map.ef.Dd,
                    c = this.map.i("minZoomLevel"),
                    !this.map.nr && a <= c && !$.Ab(b) || this.map.oO == c ? (this.map.ef.ic(c, 0, 0, c, 0, 0),
                    this.map.Mp = c,
                    this.map.scale().zoom = c,
                    vP(this.map.scale(), 0, 0),
                    wP(this.map)) : xP(this, a))
                }
                this.map.e1 = this.map.nr;
                this.map.nr = !1;
                this.map.ll = window.NaN;
                tP.B.hD.call(this)
            }
            ;
            tP.prototype.Jl = function() {
                this.g || nP(this.map).dispatchEvent(UQ(this.map, "zoomend"));
                tP.B.Jl.call(this);
                this.map = this.map.Xh = null;
                this.dd()
            }
            ;
            $.H(zP, $.Y);
            $.g = zP.prototype;
            $.g.qa = $.Y.prototype.qa;
            $.g.ra = $.Y.prototype.ra;
            $.g.i = $.Lq;
            $.g.Xf = function(a) {
                $.n(a) && (this.Vb = a);
                return this.Vb
            }
            ;
            $.g.Yg = $.Kq;
            $.g.Sd = function() {
                var a = [this.ma];
                this.$ && (a = $.Ga(a, this.$.Sd()));
                return a
            }
            ;
            $.g.Rd = function() {
                var a = [this.La];
                this.$ && (a = $.Ga(a, this.$.Rd()));
                return a
            }
            ;
            $.g.parent = function(a) {
                return $.n(a) ? (this.$ != a && (this.$ && $.Nq(this.$, this.Sc, this),
                (this.$ = a) && $.L(this.$, this.Sc, this)),
                this) : this.$
            }
            ;
            $.g.Sc = function(a) {
                var b = 0;
                $.X(a, 1) && (b |= 1);
                $.X(a, 8) && (b |= 8);
                this.Vb = null;
                this.xa(b)
            }
            ;
            var bfa = zP.prototype
              , lR = {};
            $.Xp(lR, 1, "stroke", $.qq);
            $.Xp(lR, 0, "length", $.N);
            $.Xp(lR, 0, "position", $.Ik);
            bfa.ZI = lR;
            $.U(zP, zP.prototype.ZI);
            $.g = zP.prototype;
            $.g.orientation = function(a) {
                return $.n(a) ? (a = $.xk(a),
                this.fh != a && (this.fh = a,
                this.Ho = null),
                this) : this.fh
            }
            ;
            $.g.Hb = function() {
                var a = this.orientation();
                return "top" == a || "bottom" == a
            }
            ;
            $.g.remove = function() {
                this.path && this.path.parent(null)
            }
            ;
            $.g.Y = function() {
                AP(this);
                this.path.clear();
                this.path.stroke(this.i("stroke"));
                if (!this.Bc())
                    return this;
                this.J(8) && (this.path.zIndex(this.zIndex()),
                this.I(8));
                this.J(2) && (this.path.parent(this.P()),
                this.I(2));
                return this
            }
            ;
            $.g.Ip = function(a) {
                a = CP(this, a);
                this.path.moveTo(a[0], a[1]);
                this.path.lineTo(a[2], a[3])
            }
            ;
            $.g.X = function(a, b) {
                zP.B.X.call(this, a, b);
                b ? $.lq(this.ma, this.ZI, a) : $.mq(this, this.ZI, a)
            }
            ;
            $.g.F = function() {
                var a = zP.B.F.call(this);
                $.uq(this, this.ZI, a, "Map axis ticks props");
                return a
            }
            ;
            $.g.R = function() {
                $.md(this.path);
                this.path = null;
                zP.B.R.call(this)
            }
            ;
            $.H(EP, $.Y);
            $.g = EP.prototype;
            $.g.ra = $.Y.prototype.ra | 976;
            $.g.qa = $.Y.prototype.qa | 32768;
            $.g.line = null;
            $.g.er = "axis";
            $.g.Ea = null;
            $.g.hb = null;
            $.g.oc = null;
            $.g.Mc = null;
            $.g.oa = null;
            $.g.Ub = null;
            $.g.Lh = null;
            $.g.bk = null;
            $.g.i = $.Lq;
            $.g.Xf = function(a) {
                $.n(a) && (this.Vb = a);
                return this.Vb
            }
            ;
            $.g.Yg = $.Kq;
            $.g.Sd = function() {
                var a = [this.ma];
                this.$ && (a = $.Ga(a, this.$.Sd()));
                return a
            }
            ;
            $.g.Rd = function() {
                var a = [this.La];
                this.$ && (a = $.Ga(a, this.$.Rd()));
                return a
            }
            ;
            $.g.parent = function(a) {
                return $.n(a) ? (this.$ != a && (this.$ && $.Nq(this.$, this.Sc, this),
                (this.$ = a) && $.L(this.$, this.Sc, this)),
                this) : this.$
            }
            ;
            $.g.Sc = function(a) {
                var b = 0
                  , c = 0;
                $.X(a, 1) && (b |= 16,
                c |= 1);
                $.X(a, 8) && (b |= this.ze,
                c |= 8);
                $.X(a, 32768) && (b |= 1,
                c |= 9);
                this.Vb = null;
                this.u(b, c)
            }
            ;
            var mR = {};
            $.Xp(mR, 1, "stroke", $.qq);
            $.Xp(mR, 0, "overlapMode", $.Gk);
            $.Xp(mR, 0, "drawFirstLabel", $.hq);
            $.Xp(mR, 0, "drawLastLabel", $.hq);
            $.U(EP, mR);
            $.g = EP.prototype;
            $.g.title = function(a) {
                this.rb || (this.rb = new $.mv,
                this.rb.Re(),
                this.rb.padding().Re(),
                this.rb.margin().Re(),
                $.W(this, "title", this.rb),
                this.rb.ob(this),
                this.rb.parent(this.parent().title()),
                $.L(this.rb, this.oq, this));
                return $.n(a) ? (this.rb.K(a),
                this) : this.rb
            }
            ;
            $.g.oq = function(a) {
                var b = 0
                  , c = 0;
                $.X(a, 8) ? (b = this.ze,
                c = 9) : $.X(a, 1) && (b = 64,
                c = 1);
                this.u(b, c)
            }
            ;
            $.g.labels = function(a) {
                this.Ea || (this.Ea = new $.$t,
                this.Ea.Re(),
                $.W(this, "labels", this.Ea),
                this.Ea.ob(this),
                $.L(this.Ea, this.Wd, this));
                return $.n(a) ? (!$.D(a) || "enabled"in a || (a.enabled = !0),
                this.Ea.K(a),
                this) : this.Ea
            }
            ;
            $.g.Wd = function(a) {
                var b = 0
                  , c = 0;
                $.X(a, 8) ? (b = this.ze,
                c = 9) : $.X(a, 1) && (b = 384,
                c = 1);
                this.Qd();
                this.u(b, c)
            }
            ;
            $.g.jb = function(a) {
                this.oc || (this.oc = new $.$t,
                this.oc.Re(),
                $.W(this, "minorLabels", this.oc),
                this.oc.ob(this),
                $.L(this.oc, this.R9, this));
                return $.n(a) ? (!$.D(a) || "enabled"in a || (a.enabled = !0),
                this.oc.K(a),
                this) : this.oc
            }
            ;
            $.g.R9 = function(a) {
                var b = 0
                  , c = 0;
                $.X(a, 8) ? (b = this.ze,
                c = 9) : $.X(a, 1) && (b = 384,
                c = 1);
                this.Qd();
                this.u(b, c)
            }
            ;
            $.g.Rk = function() {
                var a = new zP;
                a.orientation(this.fh);
                a.ob(this);
                $.L(a, this.S9, this);
                return a
            }
            ;
            $.g.Sa = function(a) {
                this.hb || (this.hb = this.Rk(),
                this.hb.Re(),
                $.W(this, "ticks", this.hb),
                this.hb.parent(this.parent().Sa()));
                return $.n(a) ? (this.hb.K(a),
                this) : this.hb
            }
            ;
            $.g.pb = function(a) {
                this.Mc || (this.Mc = this.Rk(),
                this.Mc.Re(),
                $.W(this, "minorTicks", this.Mc),
                this.Mc.parent(this.parent().pb()));
                return $.n(a) ? (this.Mc.K(a),
                this) : this.Mc
            }
            ;
            $.g.S9 = function(a) {
                var b = 0
                  , c = 0;
                $.X(a, 8) ? (b = this.ze,
                c = 9) : $.X(a, 1) && (b = 384,
                c = 1);
                this.Qd();
                this.u(b, c)
            }
            ;
            $.g.scale = function(a) {
                return $.n(a) ? (this.rn != a && (this.rn && $.Nq(this.rn, this.Rh, this),
                (this.rn = a) && $.L(this.rn, this.Rh, this),
                this.Qd(),
                $.mu(this.labels()),
                $.mu(this.jb()),
                this.Sa().oa = this.rn,
                this.pb().oa = this.rn,
                this.u(this.ze, 9)),
                this) : this.rn
            }
            ;
            $.g.Rh = function(a) {
                $.X(a, 2) && (this.Qd(),
                $.mu(this.labels()),
                $.mu(this.jb()),
                this.u(this.ze, 9))
            }
            ;
            $.g.orientation = function(a) {
                return $.n(a) ? (this.fh = a,
                this) : this.fh
            }
            ;
            $.g.Hb = function() {
                return "top" == this.fh || "bottom" == this.fh
            }
            ;
            $.g.Dy = function(a) {
                this.Wa && this.Wa.ic(a.fd, a.We, a.Le, a.Ce, a.Ad, a.wd)
            }
            ;
            $.g.Gx = function() {
                if (!this.Gj || this.J(512)) {
                    if ("allow-overlap" == this.i("overlapMode"))
                        return !1;
                    var a = this.scale()
                      , b = []
                      , c = [];
                    if (a) {
                        var d = -1, e = -1, f = -1, h = (this.Hb() ? this.scale().Ow() : this.scale().Pw()).get(), k = h.length, l, m, p, q = this.parent().labels(), r = this.labels().ed("enabled");
                        q = void 0 == r ? q.enabled() : r;
                        var t = this.Hb() ? this.scale().Ky() : this.scale().Ly();
                        r = this.i("drawFirstLabel");
                        var u = this.i("drawLastLabel")
                          , v = t.get();
                        var w = t = 0;
                        var x = v.length
                          , y = this.parent().jb();
                        var B = this.jb().ed("enabled");
                        for (y = void 0 == B ? y.enabled() : B; t < k || w < x; ) {
                            var G = (0,
                            window.parseFloat)(h[t]);
                            B = (0,
                            window.parseFloat)(v[w]);
                            if (this.Hb()) {
                                var C = a.lr(G);
                                var I = a.lr(B)
                            } else
                                C = a.lp(G),
                                I = a.lp(B);
                            B = G = l = m = null;
                            if (-1 == e && q)
                                for (p = t; -1 == e && p < k; ) {
                                    !p && r || p == k - 1 && u || 0 != p && p != k - 1 ? B = this.jd(p, !0, h) : B = null;
                                    -1 != d ? G = this.jd(d, !0, h) : G = null;
                                    p != k - 1 && u ? l = this.jd(k - 1, !0, h) : l = null;
                                    if (B && !$.Pm(B, G) && !$.Pm(B, l)) {
                                        var P = this.Hb() ? a.lr(h[p]) : a.lp(h[p]);
                                        0 >= P && r || 1 <= P && u ? e = p : 0 < P && 1 > P && (e = p)
                                    }
                                    p++
                                }
                            C <= I && t < k || w == x ? (q && t == e ? (d = t,
                            e = -1,
                            b.push(!0)) : b.push(!1),
                            t++,
                            C == I && (q || this.Sa().enabled()) && (c.push(!1),
                            w++)) : (y ? (B = this.jd(w, !1, v),
                            -1 != d && (G = this.jd(d, !0, h)),
                            -1 != e && (l = this.jd(e, !0, h)),
                            -1 != f && (m = this.jd(f, !1, v)),
                            C = (C = this.jb().de(w)) ? $.n(C.enabled()) ? C.enabled() : !0 : !0,
                            $.Pm(B, G) || $.Pm(B, l) || $.Pm(B, m) || !C ? c.push(!1) : (P = this.Hb() ? a.lr(v[w]) : P = a.lp(v[w]),
                            0 >= P && r || 1 <= P && u ? (f = w,
                            c.push(!0)) : 0 < P && 1 > P ? (f = w,
                            c.push(!0)) : c.push(!1))) : c.push(!1),
                            w++)
                        }
                        y || (c = !1)
                    }
                    q || (b = !1);
                    this.Gj = {
                        labels: b,
                        jb: c
                    };
                    this.I(512)
                }
                return this.Gj
            }
            ;
            $.g.Op = function(a, b) {
                b = (0,
                window.parseFloat)(b);
                var c = Math.abs(b) % 1;
                var d = Math.floor(Math.abs(b));
                var e = Math.floor(60 * c);
                c = Math.floor(60 * c % 1 * 60);
                d += "°";
                if (c || e)
                    10 > e && (e = "0" + e),
                    d += e + "'";
                e = this.Hb() ? 0 < b ? "E" : "W" : 0 < b ? "N" : "S";
                d += e;
                e = this.scale();
                e = {
                    axis: {
                        value: this,
                        type: ""
                    },
                    scale: {
                        value: e,
                        type: ""
                    },
                    index: {
                        value: a,
                        type: "number"
                    },
                    value: {
                        value: d,
                        type: "string"
                    },
                    tickValue: {
                        value: b,
                        type: "number"
                    },
                    max: {
                        value: $.n(e.max) ? e.max : null,
                        type: "number"
                    },
                    min: {
                        value: $.n(e.min) ? e.min : null,
                        type: "number"
                    }
                };
                d = {};
                d["%AxisName"] = {
                    value: this.title().text(),
                    type: "string"
                };
                e = new $.Rv(e);
                e.nm({
                    "%AxisScaleMax": "max",
                    "%AxisScaleMin": "min"
                }).jl(d);
                return $.Bu(e)
            }
            ;
            $.g.VK = function(a, b) {
                switch (this.fh) {
                case "top":
                    var c = $.db(a) + 90;
                    break;
                case "right":
                    c = $.db(a);
                    break;
                case "bottom":
                    c = $.db(a) - 90;
                    break;
                case "left":
                    c = $.db(a) - 180
                }
                var d = (b ? this.Sa() : this.pb()).i("position");
                if ("inside" == d || "center" == d)
                    c += 180;
                return c
            }
            ;
            $.g.jd = function(a, b, c) {
                var d = b ? this.Lh : this.bk;
                if ($.n(d[a]))
                    return d[a];
                var e = b ? this.Sa() : this.pb()
                  , f = b ? this.labels() : this.jb()
                  , h = b ? this.parent().labels() : this.parent().jb()
                  , k = (0,
                window.parseFloat)(c[a]);
                c = CP(e, k);
                var l = f.i("position") || h.i("position");
                l = $.qo(l);
                var m = e.i("position");
                m = $.qo(m);
                e.enabled() ? 0 < m * l ? (e = c[2],
                l = c[3]) : 0 > m * l || m ? (e = c[0],
                l = c[1]) : (e = c[0] + (c[2] - c[0]) / 2,
                l = c[1] + (c[3] - c[1]) / 2) : (e = c[0],
                l = c[1]);
                k = this.Op(a, k);
                e = {
                    value: {
                        x: e,
                        y: l
                    }
                };
                l = $.vM(h);
                f = $.vM(f);
                c = this.VK(c[4], b);
                b = FP(this, b);
                $.Oc(l, f);
                $.n(l.rotation) || (l.rotation = c);
                $.n(l.anchor) || (l.anchor = b);
                h = h.bl(k, e, l, a);
                return d[a] = h
            }
            ;
            $.g.rd = function() {
                var a = this.ja();
                return a ? this.scale() && this.i("enabled") ? GP(this, a) : a.clone() : new $.J(0,0,0,0)
            }
            ;
            $.g.$n = function() {
                this.Qd();
                this.u(this.ze, 9)
            }
            ;
            $.g.Qd = function() {
                this.Lh.length = 0;
                this.bk.length = 0;
                this.Gj = null
            }
            ;
            $.g.Zd = function(a, b, c) {
                var d = b ? this.Sa() : this.pb()
                  , e = b ? this.labels() : this.jb()
                  , f = b ? this.parent().labels() : this.parent().jb()
                  , h = CP(d, a)
                  , k = e.i("position") || f.i("position");
                k = $.qo(k);
                var l = d.i("position");
                l = $.qo(l);
                if (d.enabled())
                    if (!l && !k) {
                        var m = h[0] + (h[2] - h[0]) / 2;
                        var p = h[1] + (h[3] - h[1]) / 2
                    } else if (0 < l * k || !l && 0 > k)
                        m = h[2],
                        p = h[3];
                    else {
                        if (0 > l * k || !k || !l && 0 < k)
                            m = h[0],
                            p = h[1]
                    }
                else
                    m = h[0],
                    p = h[1];
                a = this.Op(c, a);
                c = e.add(a, {
                    value: {
                        x: m,
                        y: p
                    }
                }, c);
                h = this.VK(h[4], b);
                $.n(h) && (h = $.N(h),
                c.yd.rotation !== h && (c.yd.rotation = h,
                $.n(c.La.rotation) && !(0,
                window.isNaN)(c.La.rotation) || c.u(16, 9)));
                c.Ok(FP(this, b));
                b = $.vM(e);
                $.n(b.enabled) && null == b.enabled && delete b.enabled;
                $.qu(c, [c, b, "auto", f, e.ma, f.ma])
            }
            ;
            $.g.Q9 = function() {
                var a = this.scale()
                  , b = a.precision()[0]
                  , c = a.$p()
                  , d = a.Xp()
                  , e = a.Yp()
                  , f = c;
                if (!(0,
                window.isNaN)(f))
                    if (aP(a.Od["default"].wg)) {
                        var h = a.transform(c, e, null);
                        this.line.moveTo(h[0], h[1]);
                        h = a.transform(d, e, null);
                        this.line.lineTo(h[0], h[1])
                    } else {
                        for (; f < d; ) {
                            h = a.transform(f, e, null);
                            var k = h[0];
                            h = h[1];
                            f == c ? this.line.moveTo(k, h) : this.line.lineTo(k, h);
                            f += b
                        }
                        h = a.transform(d, e, null);
                        k = Math.round(h[0]);
                        h = Math.round(h[1]);
                        this.line.lineTo(k, h)
                    }
            }
            ;
            $.g.P9 = function() {
                var a = this.scale()
                  , b = a.precision()[1]
                  , c = a.Xp()
                  , d = a.aq()
                  , e = a.Yp()
                  , f = d;
                if (!(0,
                window.isNaN)(f))
                    if (aP(a.Od["default"].wg)) {
                        var h = a.transform(c, d, null);
                        this.line.moveTo(h[0], h[1]);
                        h = a.transform(c, e, null);
                        this.line.lineTo(h[0], h[1])
                    } else {
                        for (; f < e; ) {
                            h = a.transform(c, f, null);
                            var k = h[0];
                            h = h[1];
                            f == d ? this.line.moveTo(k, h) : this.line.lineTo(k, h);
                            f += b
                        }
                        h = a.transform(c, e, null);
                        k = Math.round(h[0]);
                        h = Math.round(h[1]);
                        this.line.lineTo(k, h)
                    }
            }
            ;
            $.g.N9 = function() {
                var a = this.scale()
                  , b = a.precision()[0]
                  , c = a.$p()
                  , d = a.Xp()
                  , e = a.aq()
                  , f = c;
                if (!(0,
                window.isNaN)(f))
                    if (aP(a.Od["default"].wg)) {
                        var h = a.transform(c, e, null);
                        this.line.moveTo(h[0], h[1]);
                        h = a.transform(d, e, null);
                        this.line.lineTo(h[0], h[1])
                    } else {
                        for (; f < d; ) {
                            h = a.transform(f, e, null);
                            var k = h[0];
                            h = h[1];
                            f == c ? this.line.moveTo(k, h) : this.line.lineTo(k, h);
                            f += b
                        }
                        h = a.transform(d, e, null);
                        k = Math.round(h[0]);
                        h = Math.round(h[1]);
                        this.line.lineTo(k, h)
                    }
            }
            ;
            $.g.O9 = function() {
                var a = this.scale()
                  , b = a.precision()[1]
                  , c = a.$p()
                  , d = a.aq()
                  , e = a.Yp()
                  , f = d;
                if (!(0,
                window.isNaN)(f))
                    if (aP(a.Od["default"].wg)) {
                        var h = a.transform(c, d, null);
                        this.line.moveTo(h[0], h[1]);
                        h = a.transform(c, e, null);
                        this.line.lineTo(h[0], h[1])
                    } else {
                        for (; f < e; ) {
                            h = a.transform(c, f, null);
                            var k = h[0];
                            h = h[1];
                            f == d ? this.line.moveTo(k, h) : this.line.lineTo(k, h);
                            f += b
                        }
                        h = a.transform(c, e, null);
                        k = Math.round(h[0]);
                        h = Math.round(h[1]);
                        this.line.lineTo(k, h)
                    }
            }
            ;
            $.g.Gp = function() {
                HP(this).clear();
                switch (this.fh) {
                case "top":
                    var a = this.Q9;
                    break;
                case "right":
                    a = this.P9;
                    break;
                case "bottom":
                    a = this.N9;
                    break;
                case "left":
                    a = this.O9
                }
                a.call(this);
                this.line.stroke(this.i("stroke"))
            }
            ;
            $.g.remove = function() {
                this.Wa && this.Wa.parent(null)
            }
            ;
            $.g.Bc = function() {
                if (this.nf())
                    return !1;
                if (!this.i("enabled"))
                    return this.J(1) && (this.remove(),
                    this.I(1),
                    this.title().u(2),
                    this.Sa().u(2),
                    this.pb().u(2),
                    this.labels().u(2),
                    this.jb().u(2),
                    this.u(2 | this.ze)),
                    !1;
                this.I(1);
                return !0
            }
            ;
            $.g.Y = function() {
                var a = this.scale();
                if (!a)
                    return $.Vk(2),
                    this;
                a.nb();
                if (!this.Bc())
                    return this;
                this.Wa || (this.Wa = $.ck(),
                this.title().P(this.Wa),
                HP(this).parent(this.Wa),
                this.Sa().P(this.Wa),
                this.pb().P(this.Wa),
                this.labels().P(this.Wa),
                this.jb().P(this.Wa));
                var b = this.fh;
                $.V(this.title());
                $.V(this.labels());
                $.V(this.jb());
                $.V(this.Sa());
                $.V(this.pb());
                this.J(16) && (this.Gp(),
                this.I(16));
                if (this.J(8)) {
                    var c = this.zIndex();
                    this.Wa.zIndex(c);
                    HP(this).zIndex(1);
                    this.I(8)
                }
                this.J(2) && (c = this.P(),
                this.Wa.parent(c),
                this.I(2));
                this.J(64) && (c = this.title(),
                c.i("enabled") && c.ja(GP(this)),
                $.pv(c, b),
                c.Y(),
                this.I(64));
                if (this.J(256)) {
                    var d = this.Sa();
                    d.Y();
                    if (d.enabled())
                        var e = d.Ip;
                    var f = this.pb();
                    f.Y();
                    if (f.enabled())
                        var h = d.Ip;
                    this.I(256)
                }
                if (this.J(128)) {
                    var k = this.labels();
                    k.P() || k.P(this.P());
                    k.ja(this.ja());
                    k.clear();
                    k = this.labels().ed("enabled");
                    k = void 0 == k ? this.parent().labels().enabled() : k;
                    var l = this.jb();
                    l.P() || l.P(this.P());
                    l.ja(this.ja());
                    l.clear();
                    l = this.jb().ed("enabled");
                    l = void 0 == l ? this.parent().jb().enabled() : l;
                    this.I(128)
                }
                if ($.n(e) || $.n(h) || k || l) {
                    b = (this.Hb() ? this.scale().Ow() : this.scale().Pw()).get();
                    c = b.length;
                    var m = this.Gx();
                    if ($.D(m)) {
                        l = m.labels;
                        var p = m.jb
                    } else
                        l = !m,
                        p = !m;
                    var q = (this.Hb() ? this.scale().Ky() : this.scale().Ly()).get();
                    var r = m = 0;
                    for (var t = q.length, u; m < c || r < t; ) {
                        var v = (0,
                        window.parseFloat)(b[m]);
                        var w = (0,
                        window.parseFloat)(q[r]);
                        if (this.Hb()) {
                            var x = a.lr(v);
                            u = a.lr(w)
                        } else
                            x = a.lp(v),
                            u = a.lp(w);
                        if (x <= u && m < c || r == t) {
                            var y = $.A(l) ? l[m] : l;
                            $.da(l) && (m || (y = y && this.i("drawFirstLabel")),
                            m == c - 1 && (y = y && this.i("drawLastLabel")));
                            (w = $.A(l) && l[m] || $.da(l)) && e && e.call(d, v);
                            y && this.Zd(v, !0, m);
                            y = x;
                            m++
                        } else {
                            if (!e && !k || y != u)
                                x = $.A(p) ? p[r] : p,
                                (v = $.A(p) && p[r] || $.da(p)) && h && h.call(f, w),
                                x && this.Zd(w, !1, r);
                            r++
                        }
                    }
                    p && ($.mu(this.parent().jb()),
                    $.mu(this.jb()),
                    this.jb().Y());
                    $.mu(this.parent().labels());
                    $.mu(this.labels());
                    this.labels().Y()
                }
                this.title().da(!1);
                this.labels().da(!1);
                this.jb().da(!1);
                this.Sa().da(!1);
                this.pb().da(!1);
                this.I(4);
                return this
            }
            ;
            $.g.X = function(a, b) {
                EP.B.X.call(this, a, b);
                $.mq(this, mR, a, b);
                this.title().ia(!!b, a.title);
                this.labels().ia(!!b, a.labels);
                this.jb().ia(!!b, a.minorLabels);
                this.Sa().ia(!!b, a.ticks);
                this.pb().ia(!!b, a.minorTicks)
            }
            ;
            $.g.F = function() {
                var a = EP.B.F.call(this)
                  , b = this.title().F();
                $.Hc(b) || (a.title = b);
                b = this.Sa().F();
                $.Hc(b) || (a.ticks = b);
                b = this.pb().F();
                $.Hc(b) || (a.minorTicks = b);
                b = $.vM(this.labels());
                $.Hc(b) || (a.labels = b);
                b = $.vM(this.jb());
                $.Hc(b) || (a.minorLabels = b);
                $.uq(this, mR, a, "Map " + this.fh + " axis props");
                return a
            }
            ;
            $.g.R = function() {
                $.od(this.rb, this.Ea, this.oc, this.hb, this.Mc);
                this.Mc = this.hb = this.oc = this.Ea = this.rb = null;
                EP.B.R.call(this)
            }
            ;
            var nR = EP.prototype;
            nR.title = nR.title;
            nR.labels = nR.labels;
            nR.minorLabels = nR.jb;
            nR.ticks = nR.Sa;
            nR.minorTicks = nR.pb;
            $.H(IP, $.Mq);
            $.g = IP.prototype;
            $.g.ra = 985;
            $.g.qa = 32777;
            $.g.i = $.Lq;
            $.g.Xf = function(a) {
                $.n(a) && (this.Vb = a);
                return this.Vb
            }
            ;
            $.g.Yg = $.Kq;
            $.g.Sd = function() {
                var a = [this.ma];
                this.$ && (a = $.Ga(a, this.$.Sd()));
                return a
            }
            ;
            $.g.Rd = function() {
                var a = [this.La];
                this.$ && (a = $.Ga(a, this.$.Rd()));
                return a
            }
            ;
            var oR = {};
            $.Yp(oR, [$.Z.vo, $.Z.iB, $.Z.vO, $.Z.wO, $.Z.SW]);
            $.U(IP, oR);
            $.g = IP.prototype;
            $.g.cm = function() {
                return this.G
            }
            ;
            $.g.top = function(a) {
                this.j || (this.j = new EP,
                this.j.Re(),
                $.W(this, "top", this.j),
                this.j.orientation("top"),
                this.j.parent(this),
                $.L(this.j, this.D.nM, this.D),
                this.j.Ih = pR + 0 * qR,
                this.G[0] = this.j);
                return $.n(a) ? (this.j.K(a),
                this) : this.j
            }
            ;
            $.g.right = function(a) {
                this.g || (this.g = new EP,
                this.g.Re(),
                $.W(this, "right", this.g),
                this.g.orientation("right"),
                this.g.parent(this),
                $.L(this.g, this.D.nM, this.D),
                this.g.Ih = pR + qR,
                this.G[1] = this.g);
                return $.n(a) ? (this.g.K(a),
                this) : this.g
            }
            ;
            $.g.bottom = function(a) {
                this.b || (this.b = new EP,
                this.b.Re(),
                $.W(this, "bottom", this.b),
                this.b.orientation("bottom"),
                this.b.parent(this),
                $.L(this.b, this.D.nM, this.D),
                this.b.Ih = pR + 2 * qR,
                this.G[2] = this.b);
                return $.n(a) ? (this.b.K(a),
                this) : this.b
            }
            ;
            $.g.left = function(a) {
                this.f || (this.f = new EP,
                this.f.Re(),
                $.W(this, "left", this.f),
                this.f.orientation("left"),
                this.f.parent(this),
                $.L(this.f, this.D.nM, this.D),
                this.f.Ih = pR + 3 * qR,
                this.G[3] = this.f);
                return $.n(a) ? (this.f.K(a),
                this) : this.f
            }
            ;
            $.g.title = function(a) {
                this.rb || (this.rb = new $.mv,
                $.W(this, "title", this.rb),
                $.L(this.rb, this.oq, this),
                this.rb.I(4294967295));
                return $.n(a) ? (this.rb.K(a),
                this.rb.I(4294967295),
                this) : this.rb
            }
            ;
            $.g.oq = function() {
                this.rb.I(4294967295)
            }
            ;
            $.g.labels = function(a) {
                this.Ea || (this.Ea = new $.$t,
                $.W(this, "labels", this.Ea),
                this.Ea.X(this.Ea.ma, !0),
                $.L(this.Ea, this.Wd, this),
                this.Ea.I(4294967295));
                return $.n(a) ? (!$.D(a) || "enabled"in a || (a.enabled = !0),
                this.Ea.K(a),
                this.Ea.I(4294967295),
                this) : this.Ea
            }
            ;
            $.g.Wd = function(a) {
                this.Ea.I(4294967295);
                var b = 0;
                $.X(a, 8) ? b = 9 : $.X(a, 1) && (b = 1);
                this.xa(b)
            }
            ;
            $.g.jb = function(a) {
                this.oc || (this.oc = new $.$t,
                $.W(this, "minorLabels", this.oc),
                this.oc.X(this.oc.ma, !0),
                $.L(this.oc, this.M9, this),
                this.oc.I(4294967295));
                return $.n(a) ? (!$.D(a) || "enabled"in a || (a.enabled = !0),
                this.oc.K(a),
                this.oc.I(4294967295),
                this) : this.oc
            }
            ;
            $.g.M9 = function(a) {
                this.oc.I(4294967295);
                var b = 0;
                $.X(a, 8) ? b = 9 : $.X(a, 1) && (b = 1);
                this.xa(b)
            }
            ;
            $.g.Sa = function(a) {
                this.hb || (this.hb = new zP,
                $.W(this, "ticks", this.hb),
                $.L(this.hb, this.Uh, this));
                return $.n(a) ? (this.hb.K(a),
                this) : this.hb
            }
            ;
            $.g.pb = function(a) {
                this.Mc || (this.Mc = new zP,
                $.W(this, "minorTicks", this.Mc),
                $.L(this.Mc, this.Uh, this));
                return $.n(a) ? (this.Mc.K(a),
                this) : this.Mc
            }
            ;
            $.g.Uh = function(a) {
                var b = 0;
                $.X(a, 8) ? b = 9 : $.X(a, 1) && (b = 1);
                this.xa(b)
            }
            ;
            $.g.he = function(a) {
                return $.da(a) || null === a ? {
                    enabled: !!a
                } : null
            }
            ;
            $.g.Ge = function(a, b) {
                var c = this.he(b);
                return c ? (a ? this.ma.enabled = c.enabled : this.enabled(c.enabled),
                !0) : !1
            }
            ;
            $.g.pg = function(a, b) {
                var c = $.n(b) ? b : {};
                this.left().ia(!!a, c.left);
                this.top().ia(!!a, c.top);
                this.right().ia(!!a, c.right);
                this.bottom().ia(!!a, c.bottom)
            }
            ;
            $.g.X = function(a, b) {
                $.V(this.D);
                $.mq(this, oR, a, b);
                b || this.enabled("enabled"in a ? a.enabled : !0);
                this.title().ia(!!b, a.title);
                this.Sa().ia(!!b, a.ticks);
                this.pb().ia(!!b, a.minorTicks);
                this.labels().ia(!!b, a.labels);
                this.jb().ia(!!b, a.minorLabels);
                this.pg(!!b, a);
                this.D.da(!0)
            }
            ;
            $.g.F = function() {
                var a = {};
                if (this.f) {
                    var b = this.f.F();
                    $.Hc(b) || (a.left = b)
                }
                this.j && (b = this.j.F(),
                $.Hc(b) || (a.top = b));
                this.g && (b = this.g.F(),
                $.Hc(b) || (a.right = b));
                this.b && (b = this.b.F(),
                $.Hc(b) || (a.bottom = b));
                a.title = this.title().F();
                a.ticks = this.Sa().F();
                a.minorTicks = this.pb().F();
                a.labels = this.labels().F();
                a.minorLabels = this.jb().F();
                $.uq(this, oR, a, "Map axes props");
                return a
            }
            ;
            $.g.R = function() {
                $.od(this.j, this.g, this.b, this.f, this.rb, this.Ea, this.oc, this.hb, this.Mc);
                this.f = this.b = this.g = this.j = null;
                this.G.length = 0;
                this.Mc = this.hb = this.oc = this.Ea = this.rb = null;
                IP.B.R.call(this)
            }
            ;
            var rR = IP.prototype;
            rR.left = rR.left;
            rR.top = rR.top;
            rR.right = rR.right;
            rR.bottom = rR.bottom;
            rR.title = rR.title;
            rR.ticks = rR.Sa;
            rR.minorTicks = rR.pb;
            rR.labels = rR.labels;
            rR.minorLabels = rR.jb;
            $.H(JP, $.Y);
            $.kq(JP, ["labels"], "normal");
            var sR = function() {
                var a = {};
                $.Yp(a, [[0, "orientation", function(a) {
                    return $.xk(a, "right")
                }
                ], $.Z.AI, $.Z.CI, $.Z.DI]);
                return a
            }();
            $.U(JP, sR);
            $.g = JP.prototype;
            $.g.ra = $.Y.prototype.ra | 448;
            $.g.qa = $.Y.prototype.qa;
            $.g.Ra = function(a) {
                return $.n(a) ? (this.ba.K(a),
                this) : this.ba
            }
            ;
            $.g.kb = function(a) {
                return $.n(a) ? (this.wa.K(a),
                this) : this.wa
            }
            ;
            $.g.selected = function(a) {
                return $.n(a) ? (this.Ca.K(a),
                this) : this.Ca
            }
            ;
            $.g.Wd = function(a) {
                var b = 0
                  , c = 0;
                $.X(a, 8) ? (b = this.ze,
                c = 9) : $.X(a, 1) && (b = 128,
                c = 1);
                this.u(b, c)
            }
            ;
            $.g.padding = function(a, b, c, d) {
                this.Qa || (this.Qa = new $.Tt,
                $.W(this, "padding", this.Qa),
                $.L(this.Qa, this.lk, this));
                return $.n(a) ? (this.Qa.K.apply(this.Qa, arguments),
                this) : this.Qa
            }
            ;
            $.g.margin = function(a, b, c, d) {
                this.Lc || (this.Lc = new $.Zu,
                $.W(this, "margin", this.Lc),
                $.L(this.Lc, this.lk, this));
                return $.n(a) ? (this.Lc.K.apply(this.Lc, arguments),
                this) : this.Lc
            }
            ;
            $.g.lk = function(a) {
                $.X(a, 2) && this.u(4, 9)
            }
            ;
            $.g.items = function(a) {
                return $.n(a) ? (this.Qb != a && (this.Qb = a,
                this.u(16, 1)),
                this) : this.Qb || []
            }
            ;
            $.g.background = function(a) {
                this.Ka || (this.Ka = new $.Lt,
                $.W(this, "background", this.Ka),
                $.L(this.Ka, this.Zf, this));
                return $.n(a) ? (this.Ka.K(a),
                this) : this.Ka
            }
            ;
            $.g.Zf = function(a) {
                $.X(a, 1) && this.u(256, 1)
            }
            ;
            $.g.title = function(a) {
                this.rb || (this.rb = new $.mv,
                $.W(this, "title", this.rb),
                $.L(this.rb, this.oq, this));
                return $.n(a) ? (this.rb.K(a),
                this) : this.rb
            }
            ;
            $.g.oq = function(a) {
                var b = 0
                  , c = 0;
                $.X(a, 8) ? (b = this.ze,
                c = 9) : $.X(a, 1) && (b = 64,
                c = 1);
                this.u(b, c)
            }
            ;
            $.g.Dy = function() {
                for (var a = 0, b = this.Ra().labels().VL(); a < b; a++) {
                    var c = this.Ra().labels().de(a)
                      , d = c.Wg
                      , e = this.g[a]
                      , f = e.Te();
                    f.xc().select(e.la());
                    c = this.Ri(c.la()).value;
                    f = mP(f);
                    d.clear().moveTo(c.x, c.y).lineTo(f.x, f.y)
                }
            }
            ;
            $.g.rh = function(a) {
                var b = this.g[$.n(a.labelIndex) ? a.labelIndex : a.domTarget.$ea];
                a.domTarget.tag = {
                    W: b.Te(),
                    index: b.la()
                };
                a.pointIndex = b.la()
            }
            ;
            $.g.Hb = function() {
                var a = this.i("orientation");
                return "top" == a || "bottom" == a
            }
            ;
            $.g.em = function() {
                this.Md || (this.Md = $.ck());
                return this.Md
            }
            ;
            $.g.rd = function() {
                var a = this.ja();
                if (a) {
                    a = a.clone();
                    if (this.enabled()) {
                        var b = this.mb()
                          , c = b.height;
                        b = b.width;
                        switch (this.i("orientation")) {
                        case "top":
                            a.height -= c;
                            a.top += c;
                            break;
                        case "right":
                            a.width -= b;
                            break;
                        case "bottom":
                            a.height -= c;
                            break;
                        case "left":
                            a.width -= b,
                            a.left += b
                        }
                    }
                    return a
                }
                return new $.J(0,0,0,0)
            }
            ;
            $.g.mb = function() {
                if (!this.N || this.J(4)) {
                    var a = this.ja();
                    if (a) {
                        a.top = Math.round(a.top);
                        a.left = Math.round(a.left);
                        a.width = Math.round(a.width);
                        a.height = Math.round(a.height);
                        if (this.Hb()) {
                            var b = a.width;
                            var c = a.height
                        } else
                            b = a.height,
                            c = a.width;
                        var d = 0
                          , e = 0;
                        this.f = this.b = null;
                        for (var f = 0, h = this.g.length; f < h; f++) {
                            var k = this.g[f]
                              , l = new $.hu;
                            KP(this, k, l);
                            $.mu($.nu(l));
                            k = l.wc("enabled") ? $.nu(l).measure(l) : $.Xm(0, 0, 0, 0);
                            $.mu($.nu(l));
                            k.height > e && (e = k.height);
                            k.width > d && (d = k.width)
                        }
                        this.Hb() || (f = d,
                        d = e,
                        e = f);
                        f = this.g.length;
                        var m = null == this.i("length")
                          , p = null == this.i("width")
                          , q = null != this.i("length") ? $.M(this.i("length"), b) : d * f
                          , r = null != this.i("width") ? $.M(this.i("width"), c) : e;
                        d = e = 0;
                        var t = !1
                          , u = !1;
                        h = this.title();
                        h.enabled() && (h.P() || h.P(this.P()),
                        $.V(h),
                        h.ja(a),
                        $.pv(h, this.i("orientation")),
                        this.Hb() ? (e = h.bi().height,
                        d = h.bi().width) : (e = h.bi().width,
                        d = h.bi().height),
                        t = h.i("orientation") || $.pv(h),
                        "top" == t || "bottom" == t ? (t = this.Hb(),
                        u = !this.Hb()) : (t = !this.Hb(),
                        u = this.Hb()),
                        h.da(!1));
                        var v = this.padding();
                        l = $.M(v.i("top"), a.height);
                        k = $.M(v.i("right"), a.width);
                        var w = $.M(v.i("bottom"), a.height);
                        v = $.M(v.i("left"), a.width);
                        var x = this.margin()
                          , y = $.M(x.i("top"), a.height)
                          , B = $.M(x.i("right"), a.width)
                          , G = $.M(x.i("bottom"), a.height);
                        x = $.M(x.i("left"), a.width);
                        m && !p ? (m = r - (t ? e : 0),
                        q = Math.min(u ? m * f + d : Math.max(m * f, d), b),
                        this.b = (q - (u ? d : 0)) / f,
                        this.f = m) : !m && p ? (m = (q - (u ? d : 0)) / f,
                        r = Math.min(t ? m + e : Math.max(m, e), c),
                        this.b = m,
                        this.f = r - (t ? e : 0)) : m && p ? (c = Math.min(q, b - (u ? d : 0)) / f,
                        q = Math.max(r, u ? e : 0),
                        m = Math.max(c, q) * f + w + l + G + y > b ? (b - (w + l + G + y) - (u ? d : 0)) / f : Math.max(c, q),
                        q = u ? m * f + d : Math.max(m * f, d),
                        r = t ? m + e : Math.max(m, e),
                        this.f = this.b = m) : (this.b = (q - (u ? d : 0)) / f,
                        this.f = r - (t ? e : 0));
                        c = this.i("align");
                        var C;
                        this.Hb() ? (q + k + v + B + x > b && (q = b - (k + v + B + x)),
                        "left" == c || "top" == c ? C = v + x : "right" == c || "bottom" == c ? C = b - q - k - B : "center" == c && (C = (b - q) / 2)) : (q + w + l + G + y > b && (q = b - (w + l + G + y)),
                        "left" == c || "top" == c ? C = l + y : "right" == c || "bottom" == c ? C = b - q - w - G : "center" == c && (C = (b - q) / 2));
                        switch (this.i("orientation")) {
                        case "top":
                            var I = a.top + l + y;
                            var P = a.left + C;
                            var Q = r;
                            var S = q;
                            this.D = new $.J(P,I,this.b,this.f);
                            break;
                        case "right":
                            I = a.top + C;
                            P = a.left + a.width - r - k - B;
                            Q = q;
                            S = r;
                            this.D = new $.J(P,I,this.f,this.b);
                            break;
                        case "bottom":
                            I = a.top + a.height - r - w - G;
                            P = a.left + C;
                            Q = r;
                            S = q;
                            this.D = new $.J(P,I,this.b,this.f);
                            break;
                        case "left":
                            I = a.top + C,
                            P = a.left + v + x,
                            Q = q,
                            S = r,
                            this.D = new $.J(P,I,this.f,this.b)
                        }
                        if (h.enabled())
                            switch (t = h.i("orientation") || $.pv(h),
                            t) {
                            case "top":
                                this.D.left = P;
                                this.D.top = I + (this.Hb() ? e : d);
                                break;
                            case "left":
                                this.D.left = P + (this.Hb() ? d : e),
                                this.D.top = I
                            }
                        this.Sf = new $.J(Math.round(P),Math.round(I),Math.round(S),Math.round(Q));
                        this.G = new $.J(this.Sf.left - v,this.Sf.top - l,this.Sf.width + v + k,this.Sf.height + l + w);
                        this.N = new $.J(this.G.left - x,this.G.top - y,this.G.width + x + B,this.G.height + y + G)
                    } else
                        this.N = new $.J(0,0,0,0);
                    this.u(this.ze);
                    this.I(4)
                }
                return this.N
            }
            ;
            $.g.Ri = function(a) {
                if (null === this.b || null === this.f)
                    return {
                        value: {
                            x: 0,
                            y: 0
                        }
                    };
                var b = this.D;
                switch (this.i("orientation")) {
                case "top":
                    var c = b.left + this.b * a + this.b / 2;
                    var d = b.top + this.f;
                    break;
                case "right":
                    c = b.left;
                    d = b.top + this.b * a + this.b / 2;
                    break;
                case "bottom":
                    c = b.left + this.b * a + this.b / 2;
                    d = b.top;
                    break;
                case "left":
                    c = b.left + this.f,
                    d = b.top + this.b * a + this.b / 2
                }
                return {
                    value: {
                        x: c,
                        y: d
                    }
                }
            }
            ;
            $.g.Y = function() {
                if (!this.Bc())
                    return this;
                var a = this.Ra().labels();
                !this.Aa && this.g && this.g.length && (this.Aa = this.g[0].mc(),
                $.Ed(this.Aa, "pointshover", function(b) {
                    b = b.seriesStatus;
                    for (var c = 0, d = this.g.length; c < d; c++)
                        for (var h = this.g[c], k = h.la(), l = 0, m = b.length; l < m; l++) {
                            var p = b[l];
                            var q = p.series;
                            if (q == h.Te()) {
                                var r = !1;
                                p = p.points;
                                for (var t = 0, u = p.length; t < u; t++) {
                                    var v = p[t];
                                    if (h.la() == v.index) {
                                        q = KP(this, h, a.de(c), $.zw(q.state, k));
                                        q.Y();
                                        $.mu($.nu(q));
                                        r = !0;
                                        break
                                    }
                                }
                                r || h.state != $.fo || (q = KP(this, h, a.de(c), $.Vl),
                                q.Y(),
                                $.mu($.nu(q)))
                            }
                        }
                }, !1, this),
                $.Ed(this.Aa, "pointsselect", function(b) {
                    b = b.seriesStatus;
                    for (var c = 0, d = this.g.length; c < d; c++)
                        for (var h = this.g[c], k = h.la(), l = 0, m = b.length; l < m; l++) {
                            var p = b[l]
                              , q = p.series;
                            if (q == h.Te()) {
                                var r = !1;
                                p = p.points;
                                for (var t = 0, u = p.length; t < u; t++) {
                                    var v = p[t];
                                    if (h.la() == v.index) {
                                        r = KP(this, h, a.de(c), $.zw(q.state, k));
                                        r.Y();
                                        $.mu($.nu(r));
                                        r = !0;
                                        break
                                    }
                                }
                                !r && h.state & $.go && (r = KP(this, h, a.de(c), $.zw(q.state, k)),
                                r.Y(),
                                $.mu($.nu(r)))
                            }
                        }
                }, !1, this));
                this.em();
                this.j || (this.j = new $.jB(function() {
                    return $.ek()
                }
                ,function(a) {
                    a.clear()
                }
                ,void 0,this),
                $.Et(this, this.j),
                this.j.ob(this));
                $.V(this.title());
                $.V(a);
                if (this.J(8)) {
                    var b = this.zIndex();
                    this.Md.zIndex(b);
                    this.title().zIndex(2);
                    a.zIndex(1);
                    this.background().zIndex(0);
                    this.j.zIndex(1.1);
                    this.I(8)
                }
                this.J(2) && (b = this.P(),
                this.Md.parent(b),
                this.title().P(this.Md),
                a.P(this.Md),
                this.background().P(this.Md),
                this.j.parent(this.Md),
                this.I(2));
                this.J(256) && (b = this.background(),
                $.V(b),
                b.ja(this.G),
                b.P(this.Md),
                b.Y(),
                b.da(!1),
                this.I(256));
                this.J(64) && (b = this.title(),
                b.ja(this.Sf),
                b.Y(),
                this.I(64));
                if (this.J(128)) {
                    this.j.clear();
                    Rea(this);
                    a.u(8);
                    a.Y();
                    b = 0;
                    for (var c = a.VL(); b < c; b++)
                        $.mu($.nu(a.de(b)));
                    this.I(128)
                }
                this.title().da(!1);
                a.da(!1);
                return this
            }
            ;
            $.g.remove = function() {
                this.rb && this.rb.remove();
                this.Ea && this.Ea.remove()
            }
            ;
            $.g.nd = function() {
                this.ba.Fa(this.ma);
                $.W(this, "normal", this.ba);
                this.ba.K(this.ba.ma);
                $.W(this, "hovered", this.wa);
                this.wa.K(this.wa.ma);
                $.W(this, "selected", this.Ca);
                this.Ca.K(this.Ca.ma)
            }
            ;
            $.g.F = function() {
                var a = JP.B.F.call(this);
                $.uq(this, sR, a);
                a.title = this.title().F();
                a.background = this.background().F();
                a.padding = this.padding().F();
                a.margin = this.margin().F();
                a.items = this.items();
                a.normal = this.ba.F();
                a.hovered = this.wa.F();
                a.selected = this.Ca.F();
                return a
            }
            ;
            $.g.X = function(a, b) {
                $.V(this);
                JP.B.X.call(this, a, b);
                $.mq(this, sR, a);
                "title"in a && this.title(a.title);
                "background"in a && this.background(a.background);
                "padding"in a && this.padding(a.padding);
                "margin"in a && this.margin(a.margin);
                this.ba.ia(!!b, a);
                this.ba.ia(!!b, a.normal);
                this.wa.ia(!!b, a.hovered);
                this.Ca.ia(!!b, a.selected);
                this.items(a.items);
                this.da(!0)
            }
            ;
            $.g.R = function() {
                $.od(this.Qa, this.Lc, this.Ka, this.rb);
                this.G = this.rb = this.Ka = this.Lc = this.Qa = null;
                JP.B.R.call(this)
            }
            ;
            var tR = JP.prototype;
            tR.title = tR.title;
            tR.normal = tR.Ra;
            tR.hovered = tR.kb;
            tR.selected = tR.selected;
            tR.background = tR.background;
            tR.padding = tR.padding;
            tR.margin = tR.margin;
            tR.items = tR.items;
            $.H(LP, $.Az);
            $.g = LP.prototype;
            $.g.show = function(a) {
                var b = []
                  , c = $.Iz(this);
                if (a = c.Ur(a))
                    if ((0,
                    $.Ke)(a, function(a) {
                        a.series.enabled() && 0 != a.points.length && b.push(a)
                    }, this),
                    0 == b.length)
                        this.Oc();
                    else {
                        var d = b[0];
                        (0,
                        $.Ke)(b, function(a) {
                            d.nearestPointToCursor.distance > a.nearestPointToCursor.distance && (d = a)
                        });
                        a = this.i("xStroke");
                        var e = this.i("yStroke")
                          , f = d.series
                          , h = f.aa();
                        h.select(d.nearestPointToCursor.point.index);
                        var k = $.N(h.o("x"));
                        h = $.N(h.o("value"));
                        if ((0,
                        window.isNaN)(k) || (0,
                        window.isNaN)(h))
                            h = lP(f).value,
                            k = h.x,
                            h = h.y;
                        c = c.scale();
                        h = c.Pc(k, h);
                        k = h[0];
                        h = h[1];
                        f = c.lr(k);
                        c = c.lp(h);
                        this.Vi($.Bz(this), !0, f, a, k);
                        this.Vi($.Cz(this), !1, c, e, h)
                    }
            }
            ;
            $.g.update = function(a, b) {
                if (this.enabled()) {
                    var c, d;
                    $.n(a) ? c = (0,
                    window.parseFloat)(a) : c = $.n(this.NT) ? this.NT : 0;
                    $.n(b) ? d = (0,
                    window.parseFloat)(b) : d = $.n(this.OT) ? this.OT : 0;
                    c = $.Iz(this).tS(c, d);
                    var e = $.Iz(this).Pc(c.x, c.y);
                    c = e["long"];
                    d = e.lat;
                    var f = $.Iz(this).scale()
                      , h = f.lr(e.x);
                    e = f.lp(e.y);
                    f = this.i("xStroke");
                    var k = this.i("yStroke");
                    0 < h && 1 > h && 0 < e && 1 > e ? (this.Vi($.Bz(this), !0, h, f, c),
                    this.Vi($.Cz(this), !1, h, k, d)) : this.Oc()
                }
            }
            ;
            $.g.ng = function(a) {
                this.NT = a.clientX;
                this.OT = a.clientY;
                "sticky" != this.i("displayMode") && this.update(a.clientX, a.clientY)
            }
            ;
            $.g.Cg = function(a) {
                if (!$.co($.Iz(this), a.relatedTarget)) {
                    this.NT = a.clientX;
                    this.OT = a.clientY;
                    a = $.Iz(this).tS(a.clientX, a.clientY);
                    var b = $.Iz(this).Pc(a.x, a.y)
                      , c = $.Iz(this).scale();
                    a = c.lr(b.x);
                    b = c.lp(b.y);
                    (0 > a || 1 < a || 0 > b || 1 < b) && this.Oc()
                }
            }
            ;
            $.g.Y = function() {
                if (!this.Bc())
                    return this;
                this.Wa || (this.Wa = $.ck(),
                this.qr.parent(this.Wa),
                this.tr.parent(this.Wa));
                this.J(16) && (this.qr.stroke(this.i("xStroke")),
                this.tr.stroke(this.i("yStroke")),
                this.I(16));
                var a = $.Ga($.Bz(this), $.Cz(this));
                if (this.J(2)) {
                    var b = this.P();
                    this.Wa.parent(b);
                    $.Gz(a, this.Wa);
                    this.I(2)
                }
                this.J(8) && (b = this.zIndex(),
                this.Wa.zIndex(b),
                this.I(8));
                this.J(4) && (b = this.ja(),
                $.Hz(a, b),
                this.I(4));
                return this
            }
            ;
            $.g.Gp = function(a, b, c) {
                var d = $.Iz(this).scale()
                  , e = 0 == this.qr.Gk() % 2 ? 0 : -.5
                  , f = 0 == this.tr.Gk() % 2 ? 0 : -.5;
                b.clear();
                if (a.Hb()) {
                    var h = d.precision()[1];
                    for (f = d.aq(); f < d.Yp(); )
                        a = d.transform(c, f, null),
                        f == d.aq() ? b.moveTo(a[0] - e, a[1]) : b.lineTo(a[0] - e, a[1]),
                        f += h;
                    a = d.transform(c, d.Yp(), null);
                    b.lineTo(a[0] - e, a[1])
                } else {
                    h = d.precision()[0];
                    for (e = d.$p(); e < d.Xp(); )
                        a = d.transform(e, c, null),
                        e == d.$p() ? b.moveTo(a[0], a[1] - f) : b.lineTo(a[0], a[1] - f),
                        e += h;
                    a = d.transform(d.Xp(), c, null);
                    b.lineTo(a[0], a[1] - f)
                }
            }
            ;
            $.g.uf = function(a, b, c) {
                var d = this.Op(a, c)
                  , e = b.format() || $.Po;
                b.text(e.call(d, d));
                b.Ok($.Fz(a));
                c = CP(a.Sa(), c);
                b.x(c[0]).y(c[1]);
                b.rotation(this.VK(a, c[4]));
                b.P(this.Wa).Y()
            }
            ;
            $.g.VK = function(a, b) {
                switch (a.orientation()) {
                case "top":
                    var c = $.db(b) + 90;
                    break;
                case "right":
                    c = $.db(b);
                    break;
                case "bottom":
                    c = $.db(b) - 90;
                    break;
                case "left":
                    c = $.db(b) - 180
                }
                return c
            }
            ;
            $.g.Op = function(a, b) {
                b = (0,
                window.parseFloat)(b);
                var c = Math.abs(b) % 1;
                var d = Math.floor(Math.abs(b));
                var e = Math.floor(60 * c);
                c = Math.floor(60 * c % 1 * 60);
                d += "°";
                if (c || e)
                    10 > e && (e = "0" + e),
                    d += e + "'";
                e = a.Hb() ? 0 < b ? "E" : "W" : 0 < b ? "N" : "S";
                d += e;
                e = a.scale();
                e = {
                    axis: {
                        value: a,
                        type: ""
                    },
                    scale: {
                        value: e,
                        type: ""
                    },
                    index: {
                        value: window.NaN,
                        type: "number"
                    },
                    value: {
                        value: d,
                        type: "string"
                    },
                    tickValue: {
                        value: b,
                        type: "number"
                    },
                    max: {
                        value: $.n(e.max) ? e.max : null,
                        type: "number"
                    },
                    min: {
                        value: $.n(e.min) ? e.min : null,
                        type: "number"
                    }
                };
                d = {};
                d["%AxisName"] = {
                    value: a.title().text(),
                    type: "string"
                };
                e = new $.Rv(e);
                e.nm({
                    "%AxisScaleMax": "max",
                    "%AxisScaleMin": "min"
                }).jl(d);
                return $.Bu(e)
            }
            ;
            $.g.Vi = function(a, b, c, d, e) {
                var f = $.Iz(this), h, k = !1, l = b ? f.Jx : f.Lx, m = b ? this.TS : this.US;
                b = b ? this.qr : this.tr;
                var p = d && "none" != d;
                for (d = 0; d < a.length; d++)
                    if (h = a[d]) {
                        var q = h.i("axisIndex");
                        (q = l.call(f, q)) && $.n(q.scale().Pc(0)) && 0 < c && 1 > c ? (!k && p && (this.Gp(q, b, e),
                        k = !0),
                        h.enabled() && this.uf(q, h, e)) : m.call(this, h)
                    }
            }
            ;
            $.H(MP, $.wy);
            var cfa = MP.prototype
              , uR = $.wy.prototype.Uy;
            $.Xp(uR, 1, "minorStroke", $.qq);
            cfa.Uy = uR;
            $.U(MP, MP.prototype.Uy);
            $.g = MP.prototype;
            $.g.scale = function(a) {
                $.n(a) && this.oa != a && (this.oa && $.Nq(this.oa, this.eg, this),
                (this.oa = a) && $.L(this.oa, this.eg, this),
                this.u(68, 9));
                return this.oa || this.b && this.b.scale() || null
            }
            ;
            $.g.eg = function(a) {
                var b = 0;
                $.X(a, 4) && (b |= 4);
                $.X(a, 2) && (b |= 1);
                this.u(20, b)
            }
            ;
            $.g.Dh = function(a) {
                var b = a ? this.j : this.g;
                b || (a ? (b = this.j = $.ek(),
                b.zIndex(1)) : (b = this.g = $.ek(),
                b.zIndex(0)),
                b.zd(!0).Ep(!0),
                b.parent(this.va));
                return b
            }
            ;
            $.g.VX = function() {
                var a = $.ek();
                a.parent(this.va).zIndex(3).stroke("none");
                return a
            }
            ;
            $.g.Dy = function(a) {
                this.va && this.va.ic(a.fd, a.We, a.Le, a.Ce, a.Ad, a.wd)
            }
            ;
            $.g.Ju = function() {
                this.va || (this.va = $.ck())
            }
            ;
            $.g.mJ = function() {
                var a = this.P();
                this.va.parent(a)
            }
            ;
            $.g.BB = function() {
                var a = this.zIndex();
                this.va.zIndex(a)
            }
            ;
            $.g.eca = function(a, b, c, d) {
                c = this.oa;
                var e = c.$p()
                  , f = c.Xp();
                if (aP(c.Od["default"].wg)) {
                    var h = c.transform(e, a, null);
                    b.moveTo(h[0], h[1]);
                    h = c.transform(f, a, null);
                    b.lineTo(h[0], h[1])
                } else {
                    for (var k = e; k < f; )
                        h = c.transform(k, a, null),
                        k == e ? b.moveTo(h[0], h[1]) : b.lineTo(h[0], h[1]),
                        k += d;
                    h = c.transform(f, a, null);
                    b.lineTo(h[0], h[1])
                }
            }
            ;
            $.g.dca = function(a, b, c, d) {
                c = this.oa;
                var e = c.aq()
                  , f = c.Yp();
                if (aP(c.Od["default"].wg)) {
                    var h = c.transform(a, e, null);
                    b.moveTo(h[0], h[1]);
                    h = c.transform(a, f, null);
                    b.lineTo(h[0], h[1])
                } else {
                    for (var k = e; k < f; )
                        h = c.transform(a, k, null),
                        k == e ? b.moveTo(h[0], h[1]) : b.lineTo(h[0], h[1]),
                        k += d;
                    h = c.transform(a, f, null);
                    b.lineTo(h[0], h[1])
                }
            }
            ;
            $.g.cca = function(a, b, c, d, e, f) {
                c = this.oa;
                e = c.$p();
                var h = c.Xp()
                  , k = c.aq();
                (0,
                window.isNaN)(b) && a != k && (b = k);
                if (!(0,
                window.isNaN)(b)) {
                    var l;
                    if (aP(c.Od["default"].wg))
                        k = c.transform(e, a, null),
                        d.moveTo(k[0], k[1]),
                        k = c.transform(h, a, null),
                        d.lineTo(k[0], k[1]),
                        k = c.transform(h, a, null),
                        d.lineTo(k[0], k[1]),
                        k = c.transform(h, b, null),
                        d.lineTo(k[0], k[1]),
                        k = c.transform(h, b, null),
                        d.lineTo(k[0], k[1]),
                        k = c.transform(e, b, null),
                        d.lineTo(k[0], k[1]),
                        k = c.transform(e, b, null),
                        d.lineTo(k[0], k[1]);
                    else {
                        for (l = e; l < h; )
                            k = c.transform(l, a, null),
                            l == e ? d.moveTo(k[0], k[1]) : d.lineTo(k[0], k[1]),
                            l += f;
                        k = c.transform(h, a, null);
                        d.lineTo(k[0], k[1]);
                        for (l = a; l > b; )
                            k = c.transform(h, l, null),
                            d.lineTo(k[0], k[1]),
                            l -= f;
                        k = c.transform(h, b, null);
                        d.lineTo(k[0], k[1]);
                        for (l = h; l > e; )
                            k = c.transform(l, b, null),
                            d.lineTo(k[0], k[1]),
                            l -= f;
                        k = c.transform(e, b, null);
                        d.lineTo(k[0], k[1]);
                        for (l = b; l < a; )
                            k = c.transform(e, l, null),
                            d.lineTo(k[0], k[1]),
                            l += f
                    }
                    k = c.transform(e, a, null);
                    d.lineTo(k[0], k[1]);
                    d.close()
                }
            }
            ;
            $.g.bca = function(a, b, c, d, e, f) {
                c = this.oa;
                var h = c.$p();
                e = c.aq();
                var k = c.Yp();
                (0,
                window.isNaN)(b) && a != h && (b = h);
                if (!(0,
                window.isNaN)(b)) {
                    var l;
                    if (aP(c.Od["default"].wg))
                        h = c.transform(b, e, null),
                        d.moveTo(h[0], h[1]),
                        h = c.transform(a, e, null),
                        d.lineTo(h[0], h[1]),
                        h = c.transform(a, e, null),
                        d.lineTo(h[0], h[1]),
                        h = c.transform(a, k, null),
                        d.lineTo(h[0], h[1]),
                        h = c.transform(a, k, null),
                        d.lineTo(h[0], h[1]),
                        h = c.transform(b, k, null),
                        d.lineTo(h[0], h[1]),
                        h = c.transform(b, k, null),
                        d.lineTo(h[0], h[1]);
                    else {
                        for (l = b; l < a; )
                            h = c.transform(l, e, null),
                            l == b ? d.moveTo(h[0], h[1]) : d.lineTo(h[0], h[1]),
                            l += f;
                        h = c.transform(a, e, null);
                        d.lineTo(h[0], h[1]);
                        for (l = e; l < k; )
                            h = c.transform(a, l, null),
                            d.lineTo(h[0], h[1]),
                            l += f;
                        h = c.transform(a, k, null);
                        d.lineTo(h[0], h[1]);
                        for (l = a; l > b; )
                            h = c.transform(l, k, null),
                            d.lineTo(h[0], h[1]),
                            l -= f;
                        h = c.transform(b, k, null);
                        d.lineTo(h[0], h[1]);
                        for (l = k; l > e; )
                            h = c.transform(b, l),
                            d.lineTo(h[0], h[1]),
                            l -= f
                    }
                    h = c.transform(b, e, null);
                    d.lineTo(h[0], h[1]);
                    d.close()
                }
            }
            ;
            $.g.MI = function() {
                this.Dh(!0).stroke(this.i("stroke"));
                this.Dh(!1).stroke(this.i("minorStroke"))
            }
            ;
            $.g.remove = function() {
                this.va && this.va.parent(null)
            }
            ;
            $.g.jj = function() {
                var a = this.oa
                  , b = this.Dh(!0)
                  , c = this.Dh(!1);
                if (this.J(64) || this.J(4)) {
                    var d = window.NaN, e, f = a.precision();
                    if (this.Hb()) {
                        var h = a.Pw();
                        var k = a.Ly();
                        f = f[0];
                        a = a.Yp();
                        var l = [this.eca, this.cca]
                    } else
                        h = a.Ow(),
                        k = a.Ky(),
                        f = f[1],
                        a = a.Xp(),
                        l = [this.dca, this.bca];
                    h = h.get();
                    k = k.get();
                    this.jz();
                    b.clear();
                    c.clear();
                    var m = l[0]
                      , p = l[1];
                    var q = -b.Gk() % 2 / 2;
                    var r = 0;
                    for (e = h.length; r < e; r++) {
                        var t = h[r];
                        r && (l = $.Ay(this, r - 1)) && p.call(this, t, d, null, l, q, f);
                        (!r && this.i("drawFirstLine") || r == e - 1 && this.i("drawLastLine") || 0 != r && r != e - 1) && m.call(this, t, b, q, f);
                        d = t
                    }
                    t != a && (l = $.Ay(this, r - 1)) && p.call(this, a, d, null, l, q);
                    q = -b.Gk() % 2 / 2;
                    r = 0;
                    for (e = k.length; r < e; r++)
                        t = k[r],
                        m.call(this, t, c, q, f);
                    this.I(64);
                    this.I(4)
                }
            }
            ;
            $.g.R = function() {
                $.od(this.j, this.g);
                this.g = this.j = null;
                MP.B.R.call(this)
            }
            ;
            $.H(NP, $.Mq);
            $.g = NP.prototype;
            $.g.ra = 985;
            $.g.qa = 98313;
            $.g.i = $.Lq;
            $.g.Xf = function(a) {
                $.n(a) && (this.Vb = a);
                return this.Vb
            }
            ;
            $.g.Yg = $.Kq;
            $.g.Sd = function() {
                var a = [this.ma];
                this.$ && (a = $.Ga(a, this.$.Sd()));
                return a
            }
            ;
            $.g.Rd = function() {
                var a = [this.La];
                this.$ && (a = $.Ga(a, this.$.Rd()));
                return a
            }
            ;
            var vR = {};
            $.Yp(vR, [$.Z.SW, $.Z.vo, $.Z.hB, [1, "minorStroke", $.qq], [0, "drawFirstLine", $.hq], [0, "drawLastLine", $.hq], [0, "zIndex", $.N]]);
            $.U(NP, vR);
            $.g = NP.prototype;
            $.g.cc = function(a) {
                this.Da || (OP(this, this.ma.palette),
                $.W(this, "palette", this.Da),
                this.Da.hq(!1));
                return $.n(a) ? (OP(this, a),
                this.Da.K(a),
                this) : this.Da
            }
            ;
            $.g.Ic = function(a) {
                if (!$.K(this.Da, a)) {
                    var b = !!this.Da;
                    $.md(this.Da);
                    this.Da = new a;
                    $.L(this.Da, this.Gf, this);
                    b && this.xa(1)
                }
            }
            ;
            $.g.Gf = function(a) {
                $.X(a, 2) && this.xa(1)
            }
            ;
            $.g.cm = function() {
                return this.j
            }
            ;
            $.g.vertical = function(a) {
                if (!this.f) {
                    this.f = new MP;
                    $.yy(this.f, "vertical");
                    this.f.Re().parent(this);
                    $.W(this, "vertical", this.f);
                    var b = this.i("zIndex") + this.j.length * qR;
                    this.f.Ih = b;
                    $.L(this.f, this.g.Q1, this.g);
                    this.j.push(this.f)
                }
                return $.n(a) ? (this.f.K(a),
                this) : this.f
            }
            ;
            $.g.z0 = function(a) {
                if (!this.b) {
                    this.b = new MP;
                    $.yy(this.b, "horizontal");
                    this.b.Re().parent(this);
                    $.W(this, "horizontal", this.b);
                    var b = this.i("zIndex") + this.j.length * qR;
                    this.b.Ih = b;
                    $.L(this.b, this.g.Q1, this.g);
                    this.j.push(this.b)
                }
                return $.n(a) ? (this.b.K(a),
                this) : this.b
            }
            ;
            $.g.he = function(a) {
                return $.da(a) || null === a ? {
                    enabled: !!a
                } : null
            }
            ;
            $.g.Ge = function(a, b) {
                var c = this.he(b);
                return c ? (a ? this.ma.enabled = c.enabled : this.enabled(c.enabled),
                !0) : !1
            }
            ;
            $.g.pg = function(a, b) {
                var c = $.n(b) ? b : this.ma;
                this.z0().ia(!!a, c.horizontal);
                this.vertical().ia(!!a, c.vertical)
            }
            ;
            $.g.X = function(a, b) {
                $.V(this.g);
                $.mq(this, vR, a);
                b && this.pa("enabled", "enabled"in a ? a.enabled : !0);
                a.palette && this.cc(a.palette);
                this.pg(!!b, a);
                this.g.da(!0)
            }
            ;
            $.g.F = function() {
                var a = {};
                if (this.f) {
                    var b = this.f.F();
                    $.Hc(b) || (a.vertical = b)
                }
                this.b && (b = this.b.F(),
                $.Hc(b) || (a.horizontal = b));
                this.Da && (a.palette = this.Da.F());
                $.uq(this, vR, a, "Map grids props");
                return a
            }
            ;
            $.g.R = function() {
                $.od(this.f, this.b, this.Da);
                this.Da = this.b = this.f = null;
                this.j.length = 0;
                this.g = null;
                NP.B.R.call(this)
            }
            ;
            var wR = NP.prototype;
            wR.horizontal = wR.z0;
            wR.vertical = wR.vertical;
            wR.palette = wR.cc;
            $.H(PP, IO);
            PP.prototype.ratio = function(a) {
                return $.n(a) ? (a = $.N(a) || 0,
                this.b != a && (this.b = a),
                this) : this.b
            }
            ;
            PP.prototype.forward = function(a, b) {
                var c = this.f.forward(a, b)
                  , d = this.YQ.forward(a, b);
                a = (1 - this.b) * c[0] + this.b * d[0];
                b = (1 - this.b) * c[1] + this.b * d[1];
                return [a, b]
            }
            ;
            PP.prototype.bj = function(a, b) {
                var c = this.f.bj(a, b)
                  , d = this.YQ.bj(a, b);
                a = (1 - this.b) * c[0] + this.b * d[0];
                b = (1 - this.b) * c[1] + this.b * d[1];
                return [a, b]
            }
            ;
            $.H(QP, $.Mq);
            $.g = QP.prototype;
            $.g.qa = 2;
            $.g.ml = window.NaN;
            $.g.Ah = 4;
            $.g.Tl = 6;
            $.g.Mk = null;
            $.g.xo = null;
            $.g.Nc = 0;
            $.g.U9 = function(a) {
                return null != a ? (this.ml != a && (a = $.N(a),
                0 >= a ? (this.Ah = 4,
                this.Tl = 6,
                this.ml = window.NaN) : (this.Tl = this.Ah = window.NaN,
                this.ml = +a),
                this.xo = this.Mk = null,
                this.xa(2)),
                this) : this.ml
            }
            ;
            $.g.count = function(a, b) {
                return $.n(a) ? (this.Ah != a && (this.ml = window.NaN,
                this.Ah = Math.ceil($.N(a)),
                this.Tl = Math.ceil($.N(b)),
                2 <= this.Ah || (this.Ah = 4),
                this.Tl >= this.Ah || (this.Tl = this.Ah),
                this.xo = this.Mk = null,
                this.xa(2)),
                this) : [this.Ah, this.Tl]
            }
            ;
            $.g.VE = function(a) {
                return $.n(a) ? (a = +a || 0,
                this.Nc != a && (this.Nc = a,
                this.xo = null,
                this.Mk || this.xa(2)),
                this) : this.Nc
            }
            ;
            $.g.set = function(a) {
                $.Ta(this.Mk, a) || (this.ml = this.Tl = this.Ah = window.NaN,
                this.Mk = $.Ja(a, 0),
                $.Ka(this.Mk),
                $.Pa(this.Mk, $.Zn),
                this.xo = null,
                this.xa(2));
                return this
            }
            ;
            $.g.get = function() {
                var a = this.Rj()
                  , b = "horizontal" == this.fh ? this.oa.lr : this.oa.lp;
                return (0,
                $.Se)(a, function(a) {
                    a = b.call(this, (0,
                    window.parseFloat)(a));
                    return 0 <= a && 1 >= a
                }, this.oa)
            }
            ;
            $.g.Rj = function() {
                if (this.Mk)
                    var a = this.Mk;
                else
                    this.oa.nb(),
                    a = this.xo;
                return a || []
            }
            ;
            $.g.KA = function(a, b, c, d) {
                this.xo = null;
                var e = [a, b];
                if (this.Mk)
                    c && (e[0] = Math.min(a, this.Mk[0] || 0)),
                    d && (e[1] = Math.max(b, this.Mk[this.Mk.length - 1] || 0));
                else {
                    var f = []
                      , h = this.ml
                      , k = this.Ah
                      , l = this.Tl;
                    !(0,
                    window.isNaN)(h) && (b - a) / h > this.oa.Gm() && (this.oa.MW || ($.Xk(20, null, [b - a, h]),
                    this.oa.MW = !0),
                    h = window.NaN,
                    k = 4,
                    l = 6);
                    if ((0,
                    window.isNaN)(h))
                        for (var m = window.NaN, p = k; p <= l; p++) {
                            k = (b - a) / (p - 1);
                            var q = Math.log(k)
                              , r = Math.pow(10, Math.floor(q * Math.LOG10E))
                              , t = Math.pow(10, Math.ceil(q * Math.LOG10E))
                              , u = k < r + r ? r / 2 : Number.POSITIVE_INFINITY;
                            q = $.Km(k / t, 2);
                            (q = Math.min($.yo(k, r) || window.Infinity, $.yo(k, t) || window.Infinity, $.yo(k, u) || window.Infinity, $.yo(k, Math.pow(2, Math.floor(q)) * t) || window.Infinity, $.yo(k, Math.pow(2, Math.ceil(q)) * t) || window.Infinity)) && (0,
                            window.isFinite)(q) && (k = q);
                            q = $.Im($.xo(a, k, this.Nc)) - a;
                            q *= q;
                            r = $.Im($.yo(b, k, this.Nc)) - b;
                            r *= r;
                            q += r;
                            if ((0,
                            window.isNaN)(m) || q < m)
                                m = q,
                                h = k
                        }
                    l = $.Hm(h);
                    m = $.Im($.xo(a, h, this.Nc, l));
                    c ? e[0] = a = m : 1E-7 < a - m && (f.push(a),
                    e[2] = m);
                    c = $.Im($.yo(b, h, this.Nc, l));
                    d ? e[1] = b = c : 1E-7 < c - b && (e[3] = c);
                    for (a = $.Im($.yo(a, h, this.Nc, l)); a <= b; a = $.Im(a + h))
                        f.push(a);
                    3 in e && f.push(b);
                    this.xo = f
                }
                return e
            }
            ;
            $.g.LA = function(a, b, c) {
                if (this.Mk)
                    this.xo = null;
                else if (this.xo ? this.xo.length = 0 : this.xo = [],
                !(2 > a.length)) {
                    var d = this.T9
                      , e = a.length - 1
                      , f = this.ml
                      , h = this.Ah;
                    if (!(0,
                    window.isNaN)(this.ml)) {
                        var k = a[e];
                        var l = a[0];
                        (k - l) / this.ml > this.oa.Gm() && ($.Xk(20, null, [k - l, this.ml]),
                        this.ml = window.NaN,
                        this.Ah = 4)
                    }
                    $.n(b) ? (l = a[0],
                    k = a[1],
                    d.call(this, l, k, b, k),
                    l = 1) : l = 0;
                    $.n(c) && e--;
                    for (b = l; b <= e - 1; b++)
                        l = a[b],
                        k = a[b + 1],
                        d.call(this, l, k, l, k);
                    $.n(c) && (l = a[e],
                    k = a[e + 1],
                    d.call(this, l, k, l, c));
                    this.ml = f;
                    this.Ah = h
                }
            }
            ;
            $.g.T9 = function(a, b, c, d) {
                var e = this.ml;
                (0,
                window.isNaN)(e) && (e = (d - c) / (this.Ah - 1));
                e = Math.max(e, 1E-7);
                c = this.xo[this.xo.length - 1];
                b = $.Gm(b, 7);
                for (a = $.Gm(a, 7); a <= b; a = $.Gm(a + e, 7))
                    c != a && this.xo.push(a),
                    c = a
            }
            ;
            $.g.F = function() {
                var a = QP.B.F.call(this);
                this.Mk ? a.explicit = this.Mk : (this.Ah == this.Tl ? (0,
                window.isNaN)(this.Ah) || (a.count = this.Ah) : ((0,
                window.isNaN)(this.Ah) || (a.minCount = this.Ah),
                (0,
                window.isNaN)(this.Tl) || (a.maxCount = this.Tl)),
                (0,
                window.isNaN)(this.ml) || (a.interval = this.ml));
                return a
            }
            ;
            $.g.Ge = function(a, b) {
                var c = arguments[1];
                return $.A(c) ? (this.set(c),
                !0) : $.Mq.prototype.Ge.apply(this, arguments)
            }
            ;
            $.g.X = function(a, b) {
                QP.B.X.call(this, a, b);
                (this.Mk = a.explicit || null) && (0,
                $.Ke)(this.Mk, function(a, b, e) {
                    e[b] = (0,
                    window.parseFloat)(a)
                });
                this.Ah = a.count || a.minCount || window.NaN;
                this.Tl = a.count || a.maxCount || window.NaN;
                this.ml = a.interval || window.NaN;
                this.Mk ? this.Ah = this.Tl = this.ml = window.NaN : this.ml ? this.Ah = this.Tl = window.NaN : (this.Ah = Math.ceil($.N(this.Ah)),
                this.Tl = Math.ceil($.N(this.Tl)),
                2 <= this.Ah || (this.Ah = 4),
                this.Tl >= this.Ah || (this.Tl = this.Ah))
            }
            ;
            var xR = QP.prototype;
            xR.interval = xR.U9;
            xR.count = xR.count;
            xR.set = xR.set;
            xR.get = xR.get;
            $.H(RP, $.Mq);
            $.g = RP.prototype;
            $.g.qa = 6;
            $.g.Oa = function() {
                return "geo"
            }
            ;
            $.g.KB = function(a) {
                var b = this.HW != this.Ja || this.dO != this.ta || this.IW != this.Na || this.iO != this.Ga;
                b && (this.Rc = !1,
                a || this.xa(2));
                return b
            }
            ;
            $.g.lb = function() {
                return this.yb ? this.yb.clone() : $.Xm(0, 0, 0, 0)
            }
            ;
            $.g.sf = function(a) {
                this.yb = a;
                this.Rc = !1;
                return this
            }
            ;
            $.g.Ow = function(a) {
                this.Ed || (this.Ed = this.Rk(),
                this.Ed.fh = "horizontal");
                return $.n(a) ? (this.Ed.K(a),
                this) : this.Ed
            }
            ;
            $.g.Ky = function(a) {
                this.Yc || (this.Yc = this.Rk(),
                this.Yc.fh = "horizontal");
                return $.n(a) ? (this.Yc.K(a),
                this) : this.Yc
            }
            ;
            $.g.Pw = function(a) {
                this.re || (this.re = this.Rk(),
                this.re.fh = "vertical");
                return $.n(a) ? (this.re.K(a),
                this) : this.re
            }
            ;
            $.g.Ly = function(a) {
                this.je || (this.je = this.Rk(),
                this.je.fh = "vertical");
                return $.n(a) ? (this.je.K(a),
                this) : this.je
            }
            ;
            $.g.Uh = function(a) {
                $.X(a, 2) && (this.Rc = !1,
                this.xa(2))
            }
            ;
            $.g.Rk = function() {
                var a = new QP(this);
                $.L(a, this.Uh, this);
                return a
            }
            ;
            $.g.Gm = function(a) {
                return $.n(a) ? (a = $.O(a, 1E3, !1),
                this.Ck != a && (this.Ck = a,
                this.Rc = !1,
                this.xa(2)),
                this) : this.Ck
            }
            ;
            $.g.precision = function(a, b) {
                if (0 < arguments.length) {
                    var c = 0;
                    a && ($.A(a) ? (1 < a.length && (b = $.N(a[1])),
                    a = $.N(a[0])) : 1 == arguments.length && (b = a = $.N(a)),
                    0 == a || (0,
                    window.isNaN)(a) || this.XD == a || (this.XD = a,
                    c = 2));
                    b && (b = $.N(b)) && this.ZD != b && (this.ZD = b,
                    c = 2);
                    this.xa(c);
                    return this
                }
                return [this.XD, this.ZD]
            }
            ;
            $.g.Np = function(a) {
                return $.n(a) ? (a = +a || 0,
                this.O != a && (this.O = a,
                this.Ff() && (this.Rc = !1,
                this.xa(2))),
                this) : this.O
            }
            ;
            $.g.$p = function(a) {
                if ($.n(a)) {
                    a = $.Za($.N(a), -180, 180);
                    var b = (0,
                    window.isNaN)(a);
                    if (b != this.Rb || !b && a != this.g)
                        a >= this.D ? this.Xp(a) : (this.Rb = b,
                        this.g = a,
                        this.Rc = !1,
                        b ? this.xa(4) : this.xa(2));
                    return this
                }
                this.nb();
                return this.g
            }
            ;
            $.g.Xp = function(a) {
                if ($.n(a)) {
                    a = $.Za($.N(a), -180, 180);
                    var b = (0,
                    window.isNaN)(a);
                    if (b != this.fb || !b && a != this.D)
                        a <= this.g ? this.$p(a) : (this.fb = b,
                        this.D = a,
                        this.Rc = !1,
                        b ? this.xa(4) : this.xa(2));
                    return this
                }
                this.nb();
                return this.D
            }
            ;
            $.g.aq = function(a) {
                if ($.n(a)) {
                    a = $.Za($.N(a), -90, 90);
                    var b = (0,
                    window.isNaN)(a);
                    if (b != this.sb || !b && a != this.f)
                        a >= this.j ? this.Yp(a) : (this.sb = b,
                        this.f = a,
                        this.Rc = !1,
                        b ? this.xa(4) : this.xa(2));
                    return this
                }
                this.nb();
                return this.f
            }
            ;
            $.g.Yp = function(a) {
                if ($.n(a)) {
                    a = $.Za($.N(a), -90, 90);
                    var b = (0,
                    window.isNaN)(a);
                    if (b != this.$a || !b && a != this.j)
                        a <= this.f ? this.aq(a) : (this.$a = b,
                        this.j = a,
                        this.Rc = !1,
                        b ? this.xa(4) : this.xa(2));
                    return this
                }
                this.nb();
                return this.j
            }
            ;
            $.g.Mf = function(a, b) {
                if ($.n(a) || $.n(b)) {
                    var c = 0;
                    $.n(a) && ($.A(a) && (1 < a.length && (b = a[1]),
                    a = a[0]),
                    this.Dj != a && (this.Dj = !!a,
                    c = 2));
                    $.n(b) ? (b = !!b,
                    this.fi != b && (this.fi = b,
                    c = 2)) : 1 == arguments.length && (a = !!a,
                    this.fi != a && (this.fi = a,
                    c = 2));
                    this.xa(c);
                    return this
                }
                return [VP(this), WP(this)]
            }
            ;
            $.g.Tc = function(a) {
                for (var b = 0; b < arguments.length - 1; b += 2) {
                    var c = (0,
                    window.parseFloat)(+arguments[b])
                      , d = (0,
                    window.parseFloat)(+arguments[b + 1]);
                    (0,
                    window.isNaN)(c) || (0,
                    window.isNaN)(d) || (c < this.ei && (this.ei = c,
                    this.Rc = !1),
                    c > this.nh && (this.nh = c,
                    this.Rc = !1),
                    d < this.og && (this.og = d,
                    this.Rc = !1),
                    d > this.Ne && (this.Ne = d,
                    this.Rc = !1))
                }
                this.Rc || this.xa(2);
                return this
            }
            ;
            $.g.EK = function(a) {
                for (var b = arguments, c = 0; c < b.length - 1; c += 2) {
                    var d = +b[c]
                      , e = +b[c + 1];
                    (0,
                    window.isNaN)(d) && (d = (0,
                    window.parseFloat)(b[c]));
                    (0,
                    window.isNaN)(e) && (e = (0,
                    window.parseFloat)(b[c + 1]));
                    if (this.bp) {
                        var f = eQ(this, d, e, null);
                        this.Tc.apply(this, f)
                    }
                    d < this.Ja && (this.Ja = d,
                    this.Rc = !1);
                    d > this.ta && (this.ta = d,
                    this.Rc = !1);
                    e < this.Na && (this.Na = e,
                    this.Rc = !1);
                    e > this.Ga && (this.Ga = e,
                    this.Rc = !1)
                }
            }
            ;
            $.g.hp = function() {
                this.bp && (this.ei = Number.MAX_VALUE,
                this.nh = -Number.MAX_VALUE,
                this.og = Number.MAX_VALUE,
                this.Ne = -Number.MAX_VALUE);
                this.HW = this.Ja;
                this.dO = this.ta;
                this.IW = this.Na;
                this.iO = this.Ga;
                this.Ja = Number.MAX_VALUE;
                this.ta = -Number.MAX_VALUE;
                this.Na = Number.MAX_VALUE;
                this.Ga = -Number.MAX_VALUE;
                this.Rc = !1
            }
            ;
            $.g.Ff = function() {
                return this.Rb && (0,
                window.isNaN)(this.ka) || this.sb && (0,
                window.isNaN)(this.ga) || this.fb && (0,
                window.isNaN)(this.ca) || this.$a && (0,
                window.isNaN)(this.U)
            }
            ;
            $.g.qg = function(a) {
                this.bp = $.n(a) ? a : !0;
                this.Ar || this.hp();
                this.Ar++;
                return this
            }
            ;
            $.g.zg = function(a) {
                return (this.Ar = Math.max(this.Ar - 1, 0)) ? !0 : this.KB(!!a)
            }
            ;
            $.g.nb = function() {
                if (!this.Rc && this.yb) {
                    this.Rc = !0;
                    this.ZQ();
                    var a = [this.g, this.f]
                      , b = [this.D, this.j]
                      , c = this.Ow().KA(a[0], b[0]);
                    a = this.Pw().KA(a[1], b[1]);
                    this.Ky().LA(this.Ow().Rj(), c[2], c[3]);
                    this.Ly().LA(this.Pw().Rj(), a[2], a[3]);
                    this.jc = this.Wp - this.Im;
                    this.Cc = this.Hm - this.Zp;
                    this.uy = this.D - this.g;
                    this.ow = this.j - this.f;
                    this.ratio = Math.min(this.yb.height / this.Cc, this.yb.width / this.jc);
                    this.G = (this.yb.width - this.jc * this.ratio) / 2;
                    this.N = (this.yb.height - this.Cc * this.ratio) / 2;
                    c = YP(this, this.g, !0);
                    a = YP(this, this.D, !0);
                    b = YP(this, this.f, !1);
                    var d = YP(this, this.j, !1);
                    this.Im = Math.min(c.Im, a.Im, b.Im, d.Im, c.Wp, a.Wp, b.Wp, d.Wp);
                    this.Wp = Math.max(c.Im, a.Im, b.Im, d.Im, c.Wp, a.Wp, b.Wp, d.Wp);
                    this.Zp = Math.min(c.Zp, a.Zp, b.Zp, d.Zp, c.Hm, a.Hm, b.Hm, d.Hm);
                    this.Hm = Math.max(c.Zp, a.Zp, b.Zp, d.Zp, c.Hm, a.Hm, b.Hm, d.Hm);
                    this.jc = this.Wp - this.Im;
                    this.Cc = this.Hm - this.Zp;
                    this.uy = this.D - this.g;
                    this.ow = this.j - this.f;
                    this.ratio = Math.min(this.yb.height / this.Cc, this.yb.width / this.jc);
                    this.G = (this.yb.width - this.jc * this.ratio) / 2;
                    this.N = (this.yb.height - this.Cc * this.ratio) / 2;
                    a: {
                        this.b || (this.b = $.ek());
                        a = this.precision();
                        c = a[0];
                        a = a[1];
                        b = this.$p();
                        d = this.Xp();
                        var e = this.aq()
                          , f = this.Yp();
                        this.b.clear();
                        if (this.Od && aP(this.Od["default"].wg)) {
                            var h = dQ(this, b, e, null);
                            this.b.moveTo(h[0], h[1]);
                            h = dQ(this, b, f, null);
                            this.b.lineTo(h[0], h[1]);
                            h = dQ(this, d, f, null);
                            this.b.lineTo(h[0], h[1]);
                            h = dQ(this, d, e, null);
                            this.b.lineTo(h[0], h[1])
                        } else {
                            h = dQ(this, b, e, null);
                            if ((0,
                            window.isNaN)(h[0]) || (0,
                            window.isNaN)(h[1]))
                                break a;
                            this.b.moveTo(h[0], h[1]);
                            for (var k = e; k < f; )
                                h = dQ(this, b, k, null),
                                this.b.lineTo(h[0], h[1]),
                                k += a;
                            h = dQ(this, b, f, null);
                            this.b.lineTo(h[0], h[1]);
                            for (k = b; k < d; )
                                h = dQ(this, k, f, null),
                                this.b.lineTo(h[0], h[1]),
                                k += c;
                            h = dQ(this, d, f, null);
                            this.b.lineTo(h[0], h[1]);
                            for (k = f; k > e; )
                                h = dQ(this, d, k, null),
                                this.b.lineTo(h[0], h[1]),
                                k -= a;
                            h = dQ(this, d, e, null);
                            this.b.lineTo(h[0], h[1]);
                            for (k = d; k > b; )
                                h = dQ(this, k, e, null),
                                this.b.lineTo(h[0], h[1]),
                                k -= c
                        }
                        h = dQ(this, b, e, null);
                        this.b.lineTo(h[0], h[1]);
                        this.b.close()
                    }
                }
            }
            ;
            $.g.ZQ = function() {
                var a = (this.fb ? (0,
                window.isNaN)(this.ca) ? this.nh : this.ca : this.D) - (this.Rb ? (0,
                window.isNaN)(this.ka) ? this.ei : this.ka : this.g)
                  , b = (this.$a ? (0,
                window.isNaN)(this.U) ? this.Ne : this.U : this.j) - (this.sb ? (0,
                window.isNaN)(this.ga) ? this.og : this.ga : this.f);
                this.fb && (this.D = (0,
                window.isNaN)(this.ca) ? this.nh + a * this.O : this.ca);
                this.Rb && (this.g = (0,
                window.isNaN)(this.ka) ? this.ei - a * this.O : this.ka);
                this.$a && (this.j = (0,
                window.isNaN)(this.U) ? this.Ne + b * this.O : this.U);
                this.sb && (this.f = (0,
                window.isNaN)(this.ga) ? this.og - b * this.O : this.ga);
                this.Im = this.Ja;
                this.Zp = this.Na;
                this.Wp = this.ta;
                this.Hm = this.Ga
            }
            ;
            $.g.transform = function(a, b, c) {
                a = dQ(this, a, b, c);
                a[0] = a[0] * this.zoom + this.km;
                a[1] = a[1] * this.zoom + this.xn;
                return a
            }
            ;
            $.g.Pc = function(a, b) {
                this.nb();
                if (!this.yb || (0,
                window.isNaN)(a) || (0,
                window.isNaN)(b))
                    return [window.NaN, window.NaN];
                a = $.N(a);
                b = $.N(b);
                a = (a - this.km) / this.zoom;
                b = (b - this.xn) / this.zoom;
                return eQ(this, +(VP(this) ? this.yb.Za() - this.G - a : a - this.yb.left - this.G) / this.ratio + this.Im, -(WP(this) ? this.yb.Ta() - this.N - b : b - this.yb.top - this.N) / this.ratio + this.Hm)
            }
            ;
            $.g.lr = function(a) {
                this.nb();
                a = $.N(a);
                a = $.Gm((a - this.g) / this.uy, 3);
                return VP(this) ? 1 - a : a
            }
            ;
            $.g.lp = function(a) {
                this.nb();
                a = $.N(a);
                a = $.Gm((a - this.f) / this.ow, 3);
                return WP(this) ? 1 - a : a
            }
            ;
            $.g.F = function() {
                var a = RP.B.F.call(this);
                a.type = this.Oa();
                this.fb || (a.maximumX = this.D);
                this.$a || (a.maximumY = this.j);
                this.Rb || (a.minimumX = this.g);
                this.sb || (a.minimumY = this.f);
                a.precision = this.precision();
                a.gap = this.Np();
                a.xTicks = this.Ow().F();
                a.xMinorTicks = this.Ky().F();
                a.yTicks = this.Pw().F();
                a.yMinorTicks = this.Ly().F();
                (0,
                window.isNaN)(this.Ck) || (a.maxTicksCount = this.Ck);
                return a
            }
            ;
            $.g.X = function(a, b) {
                RP.B.X.call(this, a, b);
                this.$p(a.minimumX);
                this.aq(a.minimumY);
                this.Xp(a.maximumX);
                this.Yp(a.maximumY);
                this.precision(a.precision);
                this.Np(a.gap);
                this.Ow(a.xTicks);
                this.Ky(a.xMinorTicks);
                this.Pw(a.yTicks);
                this.Ly(a.yMinorTicks);
                this.Gm(a.maxTicksCount)
            }
            ;
            $.g.R = function() {
                $.od(this.Ed, this.Yc, this.re, this.je);
                this.je = this.re = this.Yc = this.Ed = null;
                RP.B.R.call(this)
            }
            ;
            var yR = RP.prototype;
            yR.maxTicksCount = yR.Gm;
            yR.getType = yR.Oa;
            yR.gap = yR.Np;
            yR.xTicks = yR.Ow;
            yR.xMinorTicks = yR.Ky;
            yR.yTicks = yR.Pw;
            yR.yMinorTicks = yR.Ly;
            yR.extendDataRange = yR.Tc;
            yR.minimumX = yR.$p;
            yR.maximumX = yR.Xp;
            yR.minimumY = yR.aq;
            yR.maximumY = yR.Yp;
            yR.precision = yR.precision;
            gQ.prototype.pop = function() {
                hQ(this, 0, this.b.length - 1);
                var a = this.b.pop();
                fQ(this, 0);
                return a
            }
            ;
            $.ja(iQ);
            iQ.prototype.Oa = function() {
                return "geo-json"
            }
            ;
            iQ.prototype.f = function(a) {
                var b, c = [];
                switch (a.type) {
                case "FeatureCollection":
                    if (a.features) {
                        var d = a.features;
                        a = 0;
                        for (b = d.length; a < b; a++) {
                            var e = d[a];
                            c.push(jQ(this, e.geometry, e.properties))
                        }
                    } else
                        $.Vk(10, "FeatureCollection object missing 'features' member.");
                    break;
                case "GeometryCollection":
                    if (a.geometries)
                        for (d = a.geometries,
                        a = 0,
                        b = d.length; a < b; a++)
                            c.push(jQ(this, d[a], d[a].properties));
                    else
                        $.Vk(10, "GeometryCollection object missing 'geometries' member.");
                    break;
                case "Feature":
                    a.properties && a.geometry ? c.push(jQ(this, a.geometry, a.properties)) : $.Vk(10, "Feature object missing 'properties' or 'geometry' member.");
                    break;
                case "Point":
                case "MultiPoint":
                case "LineString":
                case "MultiLineString":
                case "Polygon":
                case "MultiPolygon":
                    a.coordinates ? c.push(jQ(this, a, null)) : $.Vk(10, "Geometry object missing 'coordinates' member.");
                    break;
                default:
                    $.Vk(10, "GeoJSON object must be one of 'Point', 'LineString', 'Polygon', 'MultiPolygon', 'Feature', 'FeatureCollection' or 'GeometryCollection'.")
                }
                return c
            }
            ;
            var yQ = {
                Z: "Z",
                M: "M",
                L: "L",
                C: "C",
                Q: "Q",
                A: "A",
                H: "H",
                V: "V",
                S: "S",
                T: "T",
                z: "Z",
                m: "m",
                l: "l",
                c: "c",
                q: "q",
                a: "a",
                h: "h",
                v: "v",
                s: "s",
                t: "t"
            };
            $.ja(pQ);
            pQ.prototype.Oa = function() {
                return "svg"
            }
            ;
            pQ.prototype.f = function(a) {
                this.g = $.z(a) ? (new window.DOMParser).parseFromString(a, "text/xml") : a;
                this.b = {};
                a = this.g.getElementsByTagName("defs");
                var b, c;
                var d = 0;
                for (b = a.length; d < b; d++) {
                    var e = a[d];
                    var f = $.Te(e);
                    e = 0;
                    for (c = f.length; e < c; e++) {
                        var h = f[e];
                        if ($.We(h)) {
                            var k = h.getAttribute("id");
                            this.b[k] || qQ(this, h)
                        }
                    }
                }
                return uQ(this, this.g, null, null)
            }
            ;
            $.ja(CQ);
            CQ.prototype.Oa = function() {
                return "topo-json"
            }
            ;
            CQ.prototype.f = function(a) {
                var b = []
                  , c = iQ.ud();
                $.Bc(a.objects, function(d) {
                    d = Xea(this, a, d);
                    b.push.apply(b, c.f(d))
                }, this);
                return b
            }
            ;
            CQ.prototype.reverse = function(a, b) {
                for (var c, d = a.length, e = d - b; e < --d; )
                    c = a[e],
                    a[e++] = a[d],
                    a[d] = c
            }
            ;
            $.g = EQ.prototype;
            $.g.stroke = function(a, b, c, d, e) {
                if ($.n(a)) {
                    var f = $.Yb.apply(null, arguments);
                    f != this.g && (this.g = f,
                    this.$.u(16, 1));
                    return this
                }
                return this.g
            }
            ;
            $.g.fill = function(a, b, c, d, e, f, h) {
                if ($.n(a)) {
                    var k = $.Vb.apply(null, arguments);
                    k != this.f && (this.f = k,
                    this.$.u(16, 1));
                    return this
                }
                return this.f
            }
            ;
            $.g.enabled = function(a) {
                return $.n(a) ? (a = !!a,
                this.b != a && (this.b = a,
                this.$.u(16, 1)),
                this) : this.b
            }
            ;
            $.g.K = function(a) {
                $.n(a) && ($.V(this.$),
                $.da(a) || null === a ? this.enabled(!!a) : $.D(a) && (this.stroke(a.stroke),
                this.fill(a.fill),
                this.enabled(a.enabled)),
                this.$.da(!0));
                return this
            }
            ;
            $.g.F = function() {
                var a = {};
                a.fill = this.fill();
                a.enabled = this.enabled();
                a.stroke = this.stroke();
                return a
            }
            ;
            var zR = EQ.prototype;
            zR.stroke = zR.stroke;
            zR.fill = zR.fill;
            zR.enabled = zR.enabled;
            $.H(GQ, $.Yy);
            var AR = {}
              , BR = $.TF | 5767168;
            AR.connector = {
                Bb: 21,
                Fb: 2,
                Kb: [$.TG, $.sG, {
                    name: "eventHandler",
                    Nb: "path",
                    Sb: !0,
                    Tb: null,
                    Wb: !1,
                    Cb: !1,
                    zIndex: 0
                }],
                Jb: null,
                Db: null,
                zb: BR
            };
            AR.marker = {
                Bb: 22,
                Fb: 2,
                Kb: [$.TG, $.sG],
                Jb: null,
                Db: null,
                zb: $.TF | 1572864
            };
            AR.bubble = {
                Bb: 23,
                Fb: 2,
                Kb: [$.vG, $.wG, $.zG, $.BG],
                Jb: null,
                Db: null,
                zb: BR,
                xb: "value",
                vb: "value"
            };
            AR.choropleth = {
                Bb: 24,
                Fb: 2,
                Kb: [{
                    name: "foreignFill",
                    Nb: "none",
                    Sb: "fill",
                    Tb: "stroke",
                    Wb: !0,
                    Cb: !1,
                    zIndex: 0
                }, $.sG],
                Jb: null,
                Db: null,
                zb: BR
            };
            GQ.prototype.Ki = AR;
            $.Zy(GQ, GQ.prototype.Ki);
            var CR = {};
            $.Yp(CR, [[0, "geoIdField", $.gq], [0, "overlapMode", $.Gk], [0, "minZoomLevel", $.N], [0, "maxZoomLevel", $.N], [1, "selectPolygonMarqueeStroke", $.qq], [1, "selectPolygonMarqueeFill", $.rq], [0, "selectPolygonMarqueeMarker", $.gq]]);
            $.U(GQ, CR);
            GQ.prototype.ra = $.Yy.prototype.ra | 268238864;
            GQ.prototype.qa = $.Yy.prototype.qa | 1024;
            var Qea = 100
              , DR = {
                "default": {
                    crs: "wsg84",
                    scale: 1
                }
            }
              , pR = 20
              , qR = 1E-5;
            $.g = GQ.prototype;
            $.g.mM = 0;
            $.g.Oy = 1;
            $.g.Mp = 1;
            $.g.ak = null;
            $.g.Oa = function() {
                return "map"
            }
            ;
            $.g.Jx = function(a) {
                return this.axes().cm()[a]
            }
            ;
            $.g.Lx = function(a) {
                return this.axes().cm()[a]
            }
            ;
            $.g.Eba = function() {
                if (!this.od) {
                    var a = this.P();
                    if ((a = a ? a.Ha() : null) && this.Lf()) {
                        a = a.yl();
                        $.fd && (a.style["-ms-touch-action"] = "none");
                        $.ID || ($.ID = $.He("textarea"),
                        $.ID.setAttribute("readonly", "readonly"),
                        $.of($.ID, {
                            border: 0,
                            clip: "rect(0 0 0 0)",
                            height: "1px",
                            margin: "-1px",
                            overflow: "hidden",
                            padding: "0",
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "1px"
                        }),
                        window.document.body.appendChild($.ID),
                        $.Ed($.ID, ["focus", "focusin", "select"], function(a) {
                            a.preventDefault()
                        }));
                        this.sa("pointsselect", function(a) {
                            $.ID.innerHTML = this.Wc().i("copyFormat").call(a, a);
                            $.ID.select()
                        }, !1, this);
                        this.fg = new $.YB($.ID);
                        this.fg.N = !0;
                        this.fg.O = !0;
                        this.fg.G = !0;
                        this.fg.U = !0;
                        this.fg.fl("zoom_in", 187, 8);
                        this.fg.fl("zoom_out", 189, 8);
                        this.fg.fl("zoom_full_out", 48, 8);
                        this.fg.fl("zoom_in", 187, 2);
                        this.fg.fl("zoom_out", 189, 2);
                        this.fg.fl("zoom_full_out", 48, 2);
                        this.fg.fl("zoom_in", 107, 8);
                        this.fg.fl("zoom_out", 109, 8);
                        this.fg.fl("zoom_full_out", 96, 8);
                        this.fg.fl("zoom_in", 107, 2);
                        this.fg.fl("zoom_out", 109, 2);
                        this.fg.fl("zoom_full_out", 96, 2);
                        this.fg.fl("move_left", 37);
                        this.fg.fl("move_right", 39);
                        this.fg.fl("move_up", 38);
                        this.fg.fl("move_down", 40);
                        this.fg.fl("drill_up", 8);
                        this.fg.fl("drill_up", 27);
                        var b = this.i("minZoomLevel")
                          , c = this.i("maxZoomLevel");
                        this.fg.sa("shortcut", function(a) {
                            if (this.Dg.i("keyboardZoomAndMove") && (!$.ID.Aa || $.ID.Aa == this)) {
                                var c = 0;
                                c = 0;
                                this.Yx = !0;
                                this.ll = 100;
                                var d = $.ID.Aa.ph();
                                switch (a.identifier) {
                                case "zoom_in":
                                    d.Ss();
                                    break;
                                case "zoom_out":
                                    d.Ts();
                                    break;
                                case "zoom_full_out":
                                    d.Lo();
                                    break;
                                case "move_up":
                                    c = 10 * d.Bg();
                                    d.move(0, c);
                                    break;
                                case "move_left":
                                    c = 10 * d.Bg();
                                    d.move(c, 0);
                                    break;
                                case "move_down":
                                    c = -10 * d.Bg();
                                    d.move(0, c);
                                    break;
                                case "move_right":
                                    c = -10 * d.Bg();
                                    d.move(c, 0);
                                    break;
                                case "drill_up":
                                    a = d.ef.Dd,
                                    $.Jm(d.Bg(), b) && $.Jm(a.Ad, 0) && $.Jm(a.wd, 0) ? (d.ef.ic(b, 0, 0, b, 0, 0),
                                    this.qx()) : this.$u || (d.Xh && d.Xh.stop(),
                                    this.Zu(d, function() {
                                        this.BC = !0;
                                        this.ll = 300;
                                        this.wj(b);
                                        this.Zu(this, function() {
                                            this.BC = !1
                                        })
                                    }))
                                }
                            }
                        }, !1, this);
                        this.Uea = (0,
                        $.pa)(function(a) {
                            if (!this.P())
                                return !1;
                            var d = $.Nj(this.P().Ha())
                              , e = a.t_ ? a.Yk : a
                              , f = this.ph();
                            e = $.Za(1 - e.deltaY / 120, .7, 2);
                            var m = f.Wc().i("zoomOnMouseWheel")
                              , p = this.Lf();
                            return (p && a.clientX >= p.left + d.x && a.clientX <= p.left + d.x + p.width && a.clientY >= p.top + d.y && a.clientY <= p.top + d.y + p.height || !p) && m && !(1 < e && f.Mp >= c || 1 > e && f.Mp <= b)
                        }, this);
                        this.sU = new HO(a,!1,this.Uea);
                        this.sU.sa("mousewheel", function(a) {
                            var d = this.ph()
                              , e = d.ef;
                            this.Yx = !0;
                            var f = $.Nj(this.P().Ha())
                              , m = this.Lf();
                            m = m && a.clientX >= m.left + f.x && a.clientX <= m.left + f.x + m.width && a.clientY >= m.top + f.y && a.clientY <= m.top + f.y + m.height;
                            if (this.Dg.i("zoomOnMouseWheel") && m && !d.BC) {
                                m = $.Za(1 - a.deltaY / 120, .7, 2);
                                this.FH = this.zI;
                                this.zI = 1 < m ? !0 : 1 == m ? !this.FH : !1;
                                this.FH != this.zI && d.Xh && 1 == d.Xh.Yb && d.Xh.stop();
                                var p = d.Bg();
                                1 > m && $.Jm(p, b) && !$.Ab(e.Dd) ? (e.ic(b, 0, 0, b, 0, 0),
                                d.Mp = b,
                                d.BC = !1,
                                d.Xh && 1 == d.Xh.Yb && d.Xh.stop(),
                                d.scale().zoom = b,
                                vP(d.scale(), 0, 0),
                                wP(d)) : 1 <= m && ($.Jm(p, c) || p > c) || 1 >= m && ($.Jm(p, b) || p < b) || d.zoom(m, a.clientX - f.x, a.clientY - f.y, 20)
                            }
                        }, !1, this);
                        this.$T = function(a) {
                            if (this.P() && this.P().Ha()) {
                                var b = $.Nj(this.P().Ha())
                                  , c = this.mb();
                                if (c && a.clientX >= c.left + b.x && a.clientX <= c.left + b.x + c.width && a.clientY >= c.top + b.y && a.clientY <= c.top + b.y + c.height && this.Yx) {
                                    var d = $.ze($.se($.ID).b)
                                      , e = d.scrollLeft
                                      , f = d.scrollTop;
                                    $.ID.select();
                                    $.ID.Aa = this;
                                    if ($.ed) {
                                        var q = d.scrollLeft
                                          , r = d.scrollTop;
                                        (0,
                                        window.setTimeout)(function() {
                                            d.scrollLeft == q && d.scrollTop == r && $.Yk.scrollTo(e, f)
                                        }, 0)
                                    } else
                                        $.Yk.scrollTo(e, f)
                                }
                            }
                        }
                        ;
                        this.aU = function(a) {
                            if (this.Dg.i("zoomOnDoubleClick")) {
                                var b = this.ph()
                                  , c = $.Nj(this.P().Ha())
                                  , d = b.Lf();
                                d && a.clientX >= d.left + c.x && a.clientX <= d.left + c.x + d.width && a.clientY >= d.top + c.y && a.clientY <= d.top + c.y + d.height && (this.Yx = !0,
                                c = this.i("zoomFactor"),
                                d = a.clientX,
                                a = a.clientY,
                                this.ll = 100,
                                b.zoom(c, d, a))
                            }
                        }
                        ;
                        this.cH = function() {
                            this.lI = 0;
                            this.vx();
                            $.Nd(window.document, ["pointermove", "touchmove"], this.i4, !1, this)
                        }
                        ;
                        this.bU = function() {
                            this.wm || ($.Nd(window.document, "mousemove", this.dD, !1, this),
                            $.Nd(window.document, "mouseup", this.eD, !1, this))
                        }
                        ;
                        $.Ed(this.Ef(), ["drag", "dragstart"], function() {
                            this.$L = !0
                        }, !1, this);
                        $.Ed(this.Ef(), "dragend", function() {
                            this.$L = !1
                        }, !1, this);
                        $.Ed(a, "click", this.$T, !1, this);
                        $.Ed(a, "dblclick", this.aU, !1, this);
                        this.lI = 0;
                        $.Ed(a, ["pointerup", "touchend"], this.cH, !1, this);
                        var d, e;
                        this.sa("mousedown", function(a) {
                            var b = $.Nj(this.P().Ha())
                              , c = this.Lf();
                            c && a.clientX >= c.left + b.x && a.clientX <= c.left + b.x + c.width && a.clientY >= c.top + b.y && a.clientY <= c.top + b.y + c.height && (this.Yx = !0,
                            d = a.clientX,
                            e = a.clientY,
                            $.Ed(window.document, "mousemove", this.dD, !0, this),
                            $.Ed(window.document, "mouseup", this.eD, !0, this))
                        }, !1, this);
                        this.dD = function(a) {
                            var b = this.ph();
                            this.Dg.i("drag") && 1 != b.Bg() && !this.$L && (b.ek(),
                            b.move(a.clientX - d, a.clientY - e),
                            this.dispatchEvent("drag"),
                            d = a.clientX,
                            e = a.clientY)
                        }
                        ;
                        this.eD = function() {
                            if (this.QL) {
                                this.vx();
                                for (var a = this.gb.length; a--; ) {
                                    var b = this.gb[a];
                                    21 == b.Qe.type && (b.iA = this.ef.kg().clone(),
                                    b.u(1024, 1),
                                    b.Dy())
                                }
                            }
                            $.Nd(window.document, "mousemove", this.dD, !0, this);
                            $.Nd(window.document, "mouseup", this.eD, !0, this)
                        }
                        ;
                        $.Ed(a, "mouseleave", this.bU, !1, this)
                    } else
                        (0,
                        window.setTimeout)(this.F0, 100)
                }
            }
            ;
            $.g.ek = function() {
                this.wm || (this.wm = !0,
                this.dispatchEvent("dragstart"))
            }
            ;
            $.g.vx = function() {
                this.wm && (this.wm = !1,
                this.Dg.i("drag") && 1 != this.ph().Bg() && !this.$L && this.dispatchEvent("dragend"))
            }
            ;
            $.g.Wia = function(a) {
                this.ng(a);
                this.Yx = !1;
                var b = $.Nj(this.P().Ha())
                  , c = this.Lf();
                if (c && a.clientX >= c.left + b.x && a.clientX <= c.left + b.x + c.width && a.clientY >= c.top + b.y && a.clientY <= c.top + b.y + c.height) {
                    b = (a.wM || a).Kj.Yk;
                    c = b.touches.length;
                    if (2 == c)
                        a = b.touches[0],
                        b = b.touches[1],
                        this.lI = $.Um(a.pageX, a.pageY, b.pageX, b.pageY),
                        this.iI = !1;
                    else if (1 == c) {
                        this.iI = !0;
                        this.LU = a;
                        if (!this.P3) {
                            this.U3 = this.tc.xe(this, "touchstart", function(a) {
                                1 < a.wM.Kj.Yk.touches.length && (this.iI = !1)
                            });
                            this.T3 = this.tc.xe(this, "touchmove", function() {
                                this.iI = !1
                            });
                            if (this.Dg.i("drag") && 1 != this.Bg()) {
                                c = this.ef;
                                var d = c.zj();
                                $.rb(c.lb(), d) && b.preventDefault()
                            }
                            this.P3 = !0;
                            (0,
                            window.setTimeout)(this.Xia, 10)
                        }
                        this.I3 = a.clientX;
                        this.J3 = a.clientY;
                        this.wm = !0
                    } else
                        this.iI = !1;
                    $.Ed(window.document, ["pointermove", "touchmove"], this.i4, !1, this);
                    $.Ed(window.document.body, ["pointermove", "touchmove"], function() {
                        return !1
                    }, !1, this)
                }
            }
            ;
            $.g.oj = function(a) {
                this.vA || (this.QL = !1,
                this.LU = a,
                this.Bg() == this.i("minZoomLevel") ? (0,
                window.setTimeout)(this.c8, 0, a) : this.C1 || (this.R3 = this.tc.xe(this, "mousemove", function() {
                    this.QL = !this.$L
                }),
                this.C1 = !0,
                (0,
                window.setTimeout)(this.Xba, 70)))
            }
            ;
            $.g.cq = function(a) {
                if ("drill-down" == this.Wc().i("selectionMode")) {
                    var b = this.ph().jR();
                    if (b) {
                        var c = $.bo(a.domTarget), d;
                        if ($.K(a.target, $.$t) || $.K(a.target, $.qx)) {
                            a = a.target.zi();
                            a.Ci && a.Ci() && (d = a);
                            var e = c
                        } else
                            $.K(a.target, $.hw) || this.Pu(a.target) ? c && (c.Hf ? (d = c.Hf.W,
                            e = c.Hf.pd) : (d = c.W,
                            e = c.index)) : (d = c && c.W,
                            e = $.ea(c.index) ? c.index : a.pointIndex);
                        d && (c = d.Id(e).get("id"),
                        b = b[c]) && ($.K(b, GQ) ? this.Iq(c, b) : $.D(b) && (this.IG[c] || (this.IG[c] = $.Dp(b)),
                        this.Iq(c, this.IG[c])))
                    }
                } else
                    GQ.B.cq.call(this, a)
            }
            ;
            $.g.Cg = function(a) {
                var b = this.ph(), c = b.Wc().i("hoverMode"), d = $.bo(a.domTarget), e = !1, f;
                if ($.K(a.target, $.$t) || $.K(a.target, $.qx)) {
                    var h = a.target.zi();
                    h.Ci && h.Ci() && (f = h);
                    h = d
                } else
                    $.K(a.target, $.hw) || b.Pu(a.target) ? (d && (d.Hf ? (f = d.Hf.W,
                    h = d.Hf.pd,
                    $.A(h) && !h.length && (h = window.NaN)) : (f = d.W,
                    h = d.index)),
                    e = !0) : (f = d && d.W,
                    h = $.ea(d.index) ? d.index : a.pointIndex);
                if (f && !f.od && f.enabled() && $.E(f.Eg) && (d = f.Eg(a))) {
                    var k = $.bo(a.relatedDomTarget);
                    k = $.N($.D(k) ? k.index : k);
                    $.co(f, a.relatedTarget) && k == h || !f.dispatchEvent(d) || "single" != c || (0,
                    window.isNaN)(h) && !$.A(h) || (f.Jd(),
                    b.Az(),
                    b.dispatchEvent(b.Bk("hovered", a, [{
                        W: f,
                        pd: [],
                        ue: {
                            index: $.A(h) ? h[0] : h,
                            $f: 0
                        }
                    }], !1, e)))
                }
                "single" == c || $.co(b, a.relatedTarget) || (b.Jd(),
                b.Az(),
                b.dl && b.dispatchEvent(b.Bk("hovered", a, b.dl, !0, e)),
                b.dl = null)
            }
            ;
            $.g.rh = function(a) {
                this.QL || GQ.B.rh.call(this, a)
            }
            ;
            $.g.i4 = function(a) {
                var b = a.Yk
                  , c = b.touches ? b.touches.length : 0;
                this.Yx = !1;
                var d = this.ph()
                  , e = d.ef;
                if (2 == c) {
                    c = b.touches[0];
                    var f = b.touches[1];
                    b = $.Um(c.pageX, c.pageY, f.pageX, f.pageY);
                    a = Math.min(c.pageX, f.pageX) + Math.abs(c.pageX - f.pageX) / 2;
                    c = Math.min(c.pageY, f.pageY) + Math.abs(c.pageY - f.pageY) / 2;
                    var h = 25 < Math.abs(b - this.lI);
                    f = this.i("minZoomLevel");
                    var k = this.i("maxZoomLevel");
                    this.Dg.i("zoomOnMouseWheel") && h && (h = 0 < b - this.lI ? 1.3 : 1 / 1.3,
                    this.lI = b,
                    this.FH = this.zI,
                    this.zI = 1 < h ? !0 : 1 == h ? !this.FH : !1,
                    this.FH != this.zI && d.Xh && 1 == d.Xh.Yb && d.Xh.stop(),
                    1 > h && $.Gm(d.Bg(), 2) == f && !$.Ab(e.Dd) ? (e.ic(f, 0, 0, f, 0, 0),
                    d.Mp = f,
                    d.BC = !1,
                    d.Xh && 1 == d.Xh.Yb && d.Xh.stop(),
                    d.scale().zoom = f,
                    vP(d.scale(), 0, 0),
                    wP(d)) : 1 < h && d.Bg() >= k || 1 > h && d.Bg() <= f || (e = $.If(this.P().ea()),
                    d.zoom(h, a - e.left, c - e.top)))
                } else
                    1 == c && (this.wm && this.Dg.i("drag") && 1 != this.Bg() ? (e = a.clientX - d.I3,
                    b = a.clientY - d.J3,
                    $.of(window.document.body, "cursor", "move"),
                    d.move(e, b),
                    d.I3 = a.clientX,
                    d.J3 = a.clientY) : $.of(window.document.body, "cursor", ""))
            }
            ;
            $.g.Ur = function(a) {
                if ($.K(a.target, $.hw))
                    return $.bo(a.domTarget).pd;
                var b = this.Cf || $.Xm(0, 0, 0, 0)
                  , c = a.clientX;
                a = a.clientY;
                var d = $.Nj(this.P().Ha());
                c -= d.x;
                a -= d.y;
                d = b.left;
                var e = b.top
                  , f = b.width;
                b = b.height;
                if (c < d || c > d + f || a < e || a > e + b)
                    return null;
                b = [];
                d = this.Wc();
                if ("by-spot" == d.i("hoverMode")) {
                    var h = d.i("spotRadius");
                    e = 0;
                    for (f = this.gb.length; e < f; e++) {
                        var k = this.gb[e];
                        if (k.enabled()) {
                            var l = k.aa()
                              , m = [];
                            l.reset();
                            for (var p = window.Infinity, q; l.advance(); )
                                if (l.o("shape")) {
                                    var r = l.o("x")
                                      , t = l.o("value");
                                    d = l.la();
                                    r = $.Um(r, t, c, a);
                                    r <= h && (m.push(d),
                                    r < p && (p = r,
                                    q = d))
                                }
                            m.length && b.push({
                                W: k,
                                pd: m,
                                tn: m[m.length - 1],
                                ue: {
                                    index: q,
                                    $f: p
                                }
                            })
                        }
                    }
                } else
                    this.Wc().i("hoverMode");
                return b
            }
            ;
            $.g.jF = function(a, b) {
                for (var c = [], d, e = 0, f = a.length; e < f; e++) {
                    var h = a[e]
                      , k = h.W
                      , l = {
                        series: k
                    }
                      , m = k.aa()
                      , p = [];
                    if (!b)
                        for (var q = 0; q < h.pd.length; q++) {
                            var r = h.pd[q];
                            m.select(r) && ((d = (d = m.o("features")) && d.length ? d[0].properties : null) ? (r = {
                                id: d[gP(k)],
                                index: m.la(),
                                properties: d
                            },
                            p.push(r)) : p.push(r))
                        }
                    l.points = p;
                    h.ue ? (r = h.ue.index,
                    m.select(r) && (r = {},
                    (d = (d = m.o("features")) && d.length ? d[0].properties : null) ? (r.id = d[gP(k)],
                    r.index = m.la(),
                    r.properties = d) : r.index = m.la()),
                    h = {
                        point: r,
                        distance: h.ue.$f
                    }) : h = {
                        index: window.NaN,
                        distance: window.NaN
                    };
                    l.nearestPointToCursor = h;
                    c.push(l)
                }
                return c
            }
            ;
            $.g.iK = function(a, b) {
                var c = $.Yq(this.ph(), "colorRange");
                a = $.A(a) ? a.length ? a[0] : window.NaN : a;
                if (c && c.target() && !(0,
                window.isNaN)(a)) {
                    var d = c.target();
                    if (d == b) {
                        var e = d.aa();
                        e.select(a);
                        d = e.get(d.Qe.kl);
                        $.DM(c, d)
                    }
                }
            }
            ;
            $.g.Az = function() {
                var a = $.Yq(this.ph(), "colorRange");
                a && a.enabled() && $.EM(a)
            }
            ;
            $.g.sy = function() {
                this.ab().Gq() && this.u(4, 9)
            }
            ;
            $.g.AQ = function() {
                return new bP(this)
            }
            ;
            $.g.fN = function(a) {
                var b = a.shiftKey || a.ctrlKey || a.metaKey;
                var c = a.left;
                var d = a.top;
                var e = a.width;
                a = a.height;
                for (var f = 0; f < this.gb.length; f++) {
                    var h = this.gb[f]
                      , k = h.Ji() || this.Wc().i("selectionMode");
                    if ("none" != k) {
                        var l = $.HA(h, c, d, e, a);
                        "single-select" == k && (b = !1,
                        l = l[0]);
                        $.IA(h, l, b)
                    }
                }
            }
            ;
            $.g.H3 = function(a) {
                var b = this.$ga
                  , c = this.Yga
                  , d = this.Zga
                  , e = this.i("selectPolygonMarqueeStroke")
                  , f = this.i("selectPolygonMarqueeFill");
                if (this.Ma) {
                    e = e || "red 0.5";
                    f = f || "red 0.2";
                    var h = this.i("selectPolygonMarqueeMarker") || {}
                      , k = $.Vb(h.fill || f)
                      , l = $.Yb(h.stroke || e);
                    h = h.radius || 15;
                    this.pT = b;
                    this.oT = c;
                    this.JG = d;
                    this.Wj = [];
                    this.Ux = window.Infinity;
                    this.LC = -window.Infinity;
                    this.Vx = window.Infinity;
                    this.MC = -window.Infinity;
                    this.D0 = !0;
                    this.BL = h;
                    this.J0 = !!a;
                    this.hm || (this.hm = this.Ma.path(),
                    this.Lt = this.Ma.path(),
                    this.To = this.Ma.Xm());
                    this.To.parent(this.Ma);
                    this.To.stroke(l);
                    this.To.fill(k);
                    this.To.zIndex(999);
                    this.Lt.parent(this.Ma);
                    this.Lt.stroke(e, 3, "3 3");
                    this.Lt.zIndex(1E3);
                    this.hm.parent(this.Ma);
                    this.hm.stroke(e);
                    this.hm.fill(f);
                    this.hm.zIndex(1E3);
                    this.Ma.sa("mousemove", this.j2, !0, this);
                    this.Ma.sa("dblclick", this.i2, !0, this);
                    this.Ma.sa("click", this.h2, !0, this);
                    a = !0
                } else
                    a = !1;
                this.vA = a;
                return this
            }
            ;
            $.g.j2 = function(a) {
                if (this.Wj.length) {
                    var b = $.Nj(this.P().Ha())
                      , c = a.clientX - b.x;
                    a = a.clientY - b.y;
                    b = $.jb(new $.hb(this.Wj[0],this.Wj[1]), new $.hb(c,a)) <= this.BL;
                    this.Lt.clear();
                    b && (this.Lt.moveTo(c, a),
                    this.Lt.lineTo(this.Wj[0], this.Wj[1]));
                    this.hm.clear();
                    this.hm.moveTo(this.Wj[0], this.Wj[1]);
                    for (b = 2; b < this.Wj.length; b += 2)
                        this.hm.lineTo(this.Wj[b], this.Wj[b + 1]);
                    this.hm.lineTo(c, a)
                }
            }
            ;
            $.g.h2 = function(a) {
                a.stopPropagation();
                a.preventDefault();
                var b = $.Nj(this.P().Ha());
                var c = a.clientX - b.x;
                b = a.clientY - b.y;
                this.Ux = Math.min(c, this.Ux);
                this.LC = Math.max(c, this.LC);
                this.Vx = Math.min(b, this.Vx);
                this.MC = Math.max(b, this.MC);
                this.Wj.push(c, b);
                var d = !1;
                2 < this.Wj.length && (d = $.jb(new $.hb(this.Wj[0],this.Wj[1]), new $.hb(c,b)) <= this.BL);
                var e = new $.J(this.Ux,this.Vx,this.LC - this.Ux,this.MC - this.Vx);
                d ? ($.n(this.JG) && this.JG.call(this, this.Wj, e, a),
                this.J0 ? (HQ(this),
                this.Wj.length = 0,
                this.LC = this.MC = -window.Infinity,
                this.Ux = this.Vx = window.Infinity) : IQ(this)) : 2 == this.Wj.length ? (this.To.sp(c),
                this.To.tp(b),
                this.To.Xb(this.BL),
                $.n(this.pT) && this.pT.call(this, this.Wj, e, a)) : $.n(this.oT) && this.oT.call(this, this.Wj, e, a)
            }
            ;
            $.g.i2 = function(a) {
                var b = new $.J(this.Ux,this.Vx,this.LC - this.Ux,this.MC - this.Vx);
                this.JG && this.JG.call(this, this.Wj, b, a);
                this.J0 ? (HQ(this),
                this.Wj.length = 0,
                this.LC = this.MC = -window.Infinity,
                this.Ux = this.Vx = window.Infinity) : IQ(this);
                a.stopPropagation();
                a.preventDefault()
            }
            ;
            $.g.hba = function() {
                IQ(this);
                return this
            }
            ;
            $.g.xL = function() {
                return !!this.D0
            }
            ;
            $.g.$ga = function(a, b, c) {
                return this.dispatchEvent(JQ("selectmarqueestart", a, b, c))
            }
            ;
            $.g.Yga = function(a, b, c) {
                return this.dispatchEvent(JQ("selectmarqueechange", a, b, c))
            }
            ;
            $.g.Zga = function(a, b, c) {
                var d = JQ("selectmarqueefinish", a, b, c);
                if (a = this.dispatchEvent(d)) {
                    var e = this.ef.kg();
                    b = d.polygon;
                    for (c = 0; c < b.length; c += 2)
                        b[c] -= e.Ad,
                        b[c] /= e.fd,
                        b[c + 1] -= e.wd,
                        b[c + 1] /= e.Ce;
                    var f = d.polygonBounds;
                    f.left -= e.Ad;
                    f.left /= e.fd;
                    f.top -= e.wd;
                    f.top /= e.Ce;
                    d = d.shiftKey || d.ctrlKey || d.metaKey;
                    for (c = 0; c < this.gb.length; c++) {
                        e = this.gb[c];
                        var h = e.Ji() || this.Wc().i("selectionMode");
                        if ("none" != h) {
                            var k = e;
                            for (var l = b, m = f, p = k.xc(), q = []; p.advance(); ) {
                                var r;
                                var t = void 0;
                                var u = r = void 0;
                                var v = k;
                                var w = p;
                                var x = l;
                                var y = m;
                                var B = [];
                                var G = [];
                                if ($.K(v.tf, $.kA) && (u = w.o(v.tf.O)))
                                    for (t in u)
                                        if (w = u[t],
                                        $.K(w, $.Bg)) {
                                            v = $.wg(w);
                                            if (0 <= v.segments.indexOf(4) || 0 <= v.segments.indexOf(3))
                                                w.UH(),
                                                v = $.wg(w);
                                            if (0 < (0,
                                            $.dda)(v.segments, 1)) {
                                                w = [];
                                                var C = 0;
                                                var I, P;
                                                var Q = I = window.Infinity;
                                                var S = P = -window.Infinity;
                                                for (var va = 0; va < v.segments.length; va++) {
                                                    var xa = v.count[va];
                                                    w = w.concat(v.arguments.slice(C, C + 2 * xa));
                                                    C += 2 * xa;
                                                    if (va + 1 >= v.segments.length || 1 == v.segments[va + 1]) {
                                                        for (xa = 0; xa < w.length; xa += 2)
                                                            Q = Math.min(Q, w[xa]),
                                                            S = Math.max(S, w[xa]),
                                                            I = Math.min(I, w[xa + 1]),
                                                            P = Math.max(P, w[xa + 1]);
                                                        xa = [Q, I, S, I, S, P, Q, P];
                                                        0 < w.length && $.Pm($.Ym(y), xa) && (B.push(w),
                                                        w = [])
                                                    }
                                                }
                                            } else
                                                r = w.lb(),
                                                $.Pm($.Ym(r), $.Ym(y)) && B.push(v.arguments)
                                        } else
                                            $.K(w, $.ng) ? (v = w.zo(),
                                            w = w.Xb(),
                                            B.push([v.x, v.y]),
                                            G.push({
                                                x: v.x,
                                                y: v.y,
                                                r: w
                                            })) : B.push($.Ym(r));
                                else
                                    u = w.o(v.lh.vb + "X"),
                                    r = w.o(v.lh.vb),
                                    v.lh.vb == v.lh.xb ? B.push([u, r]) : (t = w.o(v.lh.xb + "X"),
                                    v = w.o(v.lh.xb),
                                    B.push([u, r, t, v, u, v, t, r]));
                                u = !1;
                                for (r = 0; r < B.length; r++)
                                    for (t = B[r],
                                    v = 0; v < t.length; v += 2) {
                                        a: {
                                            w = t[v];
                                            C = t[v + 1];
                                            Q = window.Infinity;
                                            if ($.n(y)) {
                                                if (w < y.wb() || w > y.Za() || C < y.bc() || C > y.Ta()) {
                                                    w = !1;
                                                    break a
                                                }
                                            } else
                                                for (S = 0; S < x.length; S += 2)
                                                    Q = Math.min(Q, x[S]);
                                            S = $.n(y) ? {
                                                x: y.left - 100,
                                                y: 0
                                            } : {
                                                x: Q,
                                                y: 0
                                            };
                                            I = x.length - 2;
                                            P = !1;
                                            for (Q = 0; Q < x.length; Q += 2)
                                                $.Sm(x[Q], x[Q + 1], x[I], x[I + 1], w, C, S.x, S.y) && (P = !P),
                                                I = Q;
                                            w = P
                                        }
                                        if (w) {
                                            u = !0;
                                            break
                                        }
                                    }
                                if (!(y = u)) {
                                    r = !1;
                                    for (y = 0; y < B.length; y++)
                                        if (t = B[y],
                                        !(4 > t.length)) {
                                            u = t.length - 2;
                                            for (v = 0; v < t.length; v += 2) {
                                                w = x.length - 2;
                                                for (C = 0; C < x.length; C += 2) {
                                                    if ($.Sm(t[v], t[v + 1], t[u], t[u + 1], x[C], x[C + 1], x[w], x[w + 1])) {
                                                        r = !0;
                                                        break
                                                    }
                                                    w = C
                                                }
                                                if (r)
                                                    break;
                                                u = v
                                            }
                                            if (r)
                                                break
                                        }
                                    y = r
                                }
                                if (!y)
                                    for (y = !1,
                                    B = 0; B < G.length; B++) {
                                        t = G[B];
                                        u = x.length - 2;
                                        for (r = 0; r < x.length; r += 2) {
                                            Q = x[r];
                                            C = x[r + 1];
                                            w = x[u];
                                            S = x[u + 1];
                                            u = t.x;
                                            v = t.y;
                                            w = new $.zi(Q,C,w,S);
                                            Q = u;
                                            Q instanceof $.hb ? (C = Q.y,
                                            Q = Q.x) : C = v;
                                            S = w.gj;
                                            I = w.pe;
                                            C = ((Number(Q) - S) * (w.hj - S) + (Number(C) - I) * (w.Xe - I)) / Kea(w);
                                            C = $.Za(C, 0, 1);
                                            w = new $.hb(EO(w.gj, w.hj, C),EO(w.pe, w.Xe, C));
                                            if ($.jb(w, new $.hb(u,v)) <= t.r) {
                                                y = !0;
                                                break
                                            }
                                            u = r
                                        }
                                        if (y)
                                            break
                                    }
                                y && q.push(p.la())
                            }
                            k = q;
                            "single-select" == h && (d = !1,
                            k = k[0]);
                            $.IA(e, k, d)
                        }
                    }
                    this.dispatchEvent({
                        type: "pointsselect",
                        points: this.aL(),
                        seriesStatus: []
                    })
                }
                return a
            }
            ;
            $.g.FQ = function(a, b) {
                this.Vu || (this.Vu = new $.ow,
                $.W(this, "crsAnimation", this.Vu),
                $.L(this.Vu, this.Fga, this));
                return $.n(a) ? (this.Vu.K.apply(this.Vu, arguments),
                this) : this.Vu
            }
            ;
            $.g.Fga = function() {}
            ;
            $.g.Nj = function(a) {
                this.Zb || (this.Zb = new $.yM,
                $.W(this, "colorRange", this.Zb),
                $.L(this.Zb, this.kz, this),
                this.u(524292, 1));
                return $.n(a) ? (this.Zb.K(a),
                this) : this.Zb
            }
            ;
            $.g.kz = function(a) {
                var b = 0
                  , c = 0;
                $.X(a, 1) && (b |= 557072,
                c |= 1,
                this.Lv());
                $.X(a, 8) && (b |= 4,
                c |= 8);
                $.X(a, 2) && (b |= 524288,
                c |= 8);
                this.u(b, c)
            }
            ;
            $.g.Pu = function(a) {
                return $.K(a, $.yM)
            }
            ;
            $.g.aZ = function(a, b) {
                var c = $.N(a);
                if ((0,
                window.isNaN)(c)) {
                    c = 0;
                    var d = a
                } else
                    c = a,
                    d = b;
                var e = this.Mn[c];
                e || (e = new JP,
                e.ob(this),
                e.Fa(this.HZ()),
                e.nd(),
                this.Mn[c] = e,
                $.L(e, this.zga, this),
                this.u(16777220, 1));
                return $.n(d) ? (e.K(d),
                this) : e
            }
            ;
            $.g.zga = function(a) {
                var b = 0
                  , c = 0;
                $.X(a, 1) && (b |= 16777216,
                c |= 1);
                $.X(a, 8) && (b |= 4,
                c |= 8);
                this.u(b, c)
            }
            ;
            $.g.HZ = function(a) {
                this.LQ || (this.LQ = $.nm("map.defaultCalloutSettings"));
                return $.n(a) ? ($.ra(this.LQ, a),
                this) : this.LQ || {}
            }
            ;
            $.g.axes = function(a) {
                if (!this.rp) {
                    this.rp = new IP(this);
                    $.W(this, "axesSettings", this.rp);
                    this.rp.pg(!0);
                    for (var b = this.scale(), c = this.rp.cm(), d = 0; d < c.length; d++) {
                        var e = c[d];
                        e.scale() !== b && e.scale(b)
                    }
                }
                return $.n(a) ? (this.rp.ia(!1, a),
                this) : this.rp
            }
            ;
            $.g.nM = function(a) {
                var b = 0;
                $.X(a, 8) ? b |= 4 : $.X(a, 1) && (b |= 33554432);
                this.u(b, 1)
            }
            ;
            $.g.HS = function(a) {
                this.Nx || (this.Nx = new NP(this),
                $.W(this, "gridsSettings", this.Nx),
                this.Nx.pg(!0));
                return $.n(a) ? (this.Nx.ia(!1, a),
                this) : this.Nx
            }
            ;
            $.g.Q1 = function() {
                this.u(67108864, 1)
            }
            ;
            $.g.Xg = function(a) {
                this.Af || (this.Af = new LP,
                $.W(this, "crosshair", this.Af),
                $.Iz(this.Af, this),
                $.L(this.Af, this.nA, this));
                return $.n(a) ? (this.Af.K(a),
                this) : this.Af
            }
            ;
            $.g.nA = function() {
                this.u(134217728, 1)
            }
            ;
            $.g.OK = function(a) {
                return jP(a) ? 15 : 30
            }
            ;
            $.g.OV = function(a) {
                fP(a, this.i("geoIdField"));
                this.al && (a.Pr = this.al);
                GQ.B.OV.call(this, a)
            }
            ;
            $.g.ht = function(a, b) {
                return new eP(this,this,a,b,!0)
            }
            ;
            $.g.rs = function(a) {
                return $.pk(afa, a, "choropleth")
            }
            ;
            $.g.mN = function(a) {
                var b = 0;
                $.X(a, 32768) && (b |= 256);
                $.X(a, 1) && (b = 32768,
                jP(a.target) && (b |= 16));
                $.X(a, 1024) && (b |= 8388608);
                $.X(a, 4) && (b |= 4194304);
                $.X(a, 2048) && (b = 32);
                if ($.X(a, 16)) {
                    b |= 8422144;
                    jP(a.target) && (b |= 16);
                    for (var c = this.gb.length; c--; )
                        this.gb[c].u(4260356)
                }
                $.X(a, 64) && (b |= 512,
                $.X(a, 8) && (b |= 4));
                $.X(a, 128) && (b |= 524288,
                a = $.Yq(this, "colorRange")) && (a.Qd(),
                a.u(a.ze));
                this.u(b, 1)
            }
            ;
            $.g.Lv = function() {
                for (var a = this.gb.length; a--; )
                    this.gb[a].u(4)
            }
            ;
            $.g.rz = function(a) {
                a = a ? a.path() : $.ek();
                a.Ep(!0);
                return a
            }
            ;
            $.g.jZ = function(a) {
                a.clear();
                a.parent(null);
                a.gl();
                a.ic(1, 0, 0, 1, 0, 0);
                delete a.tag
            }
            ;
            $.g.clear = function() {
                this.ef && (KQ(this) ? MQ(this, this.ef) : this.ef.clear());
                this.Wv.length = 0
            }
            ;
            $.g.Lf = function() {
                return this.Cf
            }
            ;
            $.g.scale = function(a) {
                if ($.n(a))
                    return a && $.K(a, RP) ? this.oa != a && (this.oa && $.Nq(this.oa, this.NK, this),
                    this.oa = a,
                    $.L(this.oa, this.NK, this),
                    this.u(65536, 1)) : (this.oa || (this.oa = new RP,
                    this.oa.X(this.oa.ma, !0),
                    $.L(this.oa, this.NK, this)),
                    this.oa.K(a)),
                    this;
                this.oa || (this.oa = new RP,
                this.oa.X(this.oa.ma, !0),
                $.L(this.oa, this.NK, this));
                return this.oa
            }
            ;
            $.g.NK = function(a) {
                var b = 0;
                $.X(a, 4) && (b |= 65540);
                $.X(a, 2) && (b |= 4);
                this.u(b, 1)
            }
            ;
            $.g.Xa = function() {
                return null
            }
            ;
            $.g.bb = function() {
                return null
            }
            ;
            $.g.Lw = function(a) {
                if ($.n(a)) {
                    if ($.D(a)) {
                        if (!this.mI || $.z(this.mI))
                            this.mI = new EQ(this);
                        this.mI.K(a)
                    } else
                        this.mI = $.pk($ea, a, "hide");
                    this.u(16, 1);
                    return this
                }
                return this.mI
            }
            ;
            $.g.Pr = function(a) {
                if ($.n(a)) {
                    if ($.z(a) && !$.ec(a, "<")) {
                        this.MK = a;
                        var b = a.split(".");
                        a = $.Yk;
                        for (var c = 0, d = b.length; c < d; c++)
                            a = a[b[c]]
                    } else
                        this.MK = null;
                    this.gn != a && (this.gn = a,
                    this.u(5095440, 1));
                    return this
                }
                return this.gn
            }
            ;
            $.g.QZ = function(a, b, c) {
                var d = ZP(this.scale(), a[b], a[b + 1]);
                a = d[0];
                d = d[1];
                $.Ec(c, "coordinates") ? c.ea.moveTo(a, d).lineTo(a, d) : b ? c.ea.lineTo(a, d) : c.ea.moveTo(a, d)
            }
            ;
            $.g.aQ = function(a, b, c) {
                var d = this.MR;
                if (KQ(this.map))
                    "image" == c.type || "text" == c.type ? (a = $.ig().dU(c.cloneNode),
                    d.EK(a.wb(), a.bc(), a.Za(), a.Ta())) : "path" == c.type && (this.map.eU || (this.map.eU = $.ek()),
                    AQ(c.commands_tx ? c.commands_tx : c.commands, this.map.eU),
                    a = this.map.eU.lb(),
                    d.EK(a.wb(), a.bc(), a.Za(), a.Ta()));
                else {
                    if (this.t2) {
                        c = (a[b] - this.Od.Wh) / this.Od.scale;
                        var e = (a[b + 1] - this.Od.Ni) / this.Od.scale;
                        this.s2 && (e = this.s2.bj(c, e),
                        c = e[0],
                        e = e[1]);
                        e = this.t2.forward(c, e);
                        a[b] = e[0] * this.Od.scale + this.Od.Wh;
                        a[b + 1] = e[1] * this.Od.scale + this.Od.Ni
                    }
                    d.EK(a[b], a[b + 1])
                }
            }
            ;
            $.g.dR = function(a) {
                return this == nP(this) ? GQ.B.dR.call(this, a) : a
            }
            ;
            $.g.pC = function(a) {
                var b = a.clone();
                if ($.Yq(this, "axesSettings")) {
                    var c = 0
                      , d = 0
                      , e = 0
                      , f = 0;
                    b = a.clone();
                    for (var h = this.rp.cm(), k, l = 0; l < h.length; l++)
                        if (k = h[l],
                        k.i("enabled")) {
                            k.ja(a);
                            var m = k.rd()
                              , p = a.left - m.left;
                            c < p && m.left && (c = p);
                            p = a.top - m.top;
                            d < p && m.top && (d = p);
                            p = m.Za() - a.Za();
                            e < p && m.Za() && (e = p);
                            p = m.Ta() - a.Ta();
                            f < p && m.Ta() && (f = p);
                            k.u(4)
                        }
                    b.left += c;
                    b.top += d;
                    b.width -= c + e;
                    b.height -= d + f
                }
                return b
            }
            ;
            $.g.nb = function() {
                var a;
                var b = this.scale();
                var c = !1;
                if (this.J(262144)) {
                    var d = this.Pr();
                    if (null != d) {
                        d = $.z(this.gn) && !$.ec(d, "<") ? $.Yk.anychart.maps[this.gn] : this.gn;
                        $.z(d) && $.ec(d, "<") || $.Je(d) ? this.mD = pQ.ud() : "topology" === d.type.toLowerCase() ? this.mD = CQ.ud() : this.mD = iQ.ud();
                        this.kT = this.mD.f(d);
                        $.md(this.al);
                        this.al = null;
                        (c = d["ac-geoFieldId"]) && this.pa("geoIdField", c);
                        this.ak = {};
                        c = d["ac-tx"] || {};
                        var e = c["default"];
                        e || (e = c["default"] = $.Mc(DR["default"]));
                        $.Bc(c || DR, function(a, b) {
                            var c = {};
                            c.wg = $.n(a.crs) ? GO(a.crs) : e.wg;
                            c.XH = c.wg;
                            c.Co = $O(c.wg);
                            c.G3 = $O(c.XH);
                            c.scale = a.scale || e.scale || 1;
                            c.Wh = $.n(a.xoffset) ? (0,
                            window.parseFloat)(a.xoffset) : 0;
                            c.Ni = $.n(a.yoffset) ? (0,
                            window.parseFloat)(a.yoffset) : 0;
                            $.n(a.heatZone) && (c.Ft = $.A(a.heatZone) ? a.heatZone : $.$m(a.heatZone));
                            this.ak[b] = c
                        }, this);
                        (c = d.scale) ? SP(b, "minLon"in c ? c.minLon : window.NaN, "maxLon"in c ? c.maxLon : window.NaN, "minLat"in c ? c.minLat : window.NaN, "maxLat"in c ? c.maxLat : window.NaN) : SP(b, window.NaN, window.NaN, window.NaN, window.NaN)
                    }
                    this.ef ? this.clear() : (this.ef = LQ(this, this.Ma),
                    this.ef.zIndex(10),
                    nP(this) == this && this.F0());
                    KQ(this) && !this.Fw && (this.Fw = LQ(this, this.ef));
                    this.$e || (this.$e = this.Ma.Md(),
                    this.$e.zIndex(30));
                    c = !0;
                    this.u(65540)
                }
                if (this.J(65536)) {
                    if (this.ak) {
                        Sea(b, this.ak);
                        if (this.ef) {
                            var f = this.ef.Dd;
                            b.zoom = f.fd;
                            vP(b, f.Ad, f.wd)
                        }
                        var h = this.ak ? this.ak["default"] : null;
                        var k = !this.vz
                          , l = null === this.it ? h.XH : this.it;
                        f = !this.al;
                        this.mA = null;
                        k && this.it ? this.mA = this.it : this.vz == h.wg && this.vz == l || k || KQ(this) || (this.mA = l);
                        var m = !!this.mA && !KQ(this);
                        if (h.wg != this.mA && h.XH != this.mA || $.Yq(this, "crsAnimation") && this.Vu.i("enabled")) {
                            if (!aP(h.XH))
                                var p = h.G3;
                            m && (a = $O(this.mA))
                        }
                        var q = h.Co;
                        k && (this.vz = l);
                        m && (this.Dq && 1 == this.Dq.Yb && (this.Dq.stop(),
                        this.Dq.dd(),
                        this.Dq = null),
                        this.vz = this.mA,
                        h.wg = this.vz,
                        h.Co = $O(h.wg));
                        f ? (d = this.kT,
                        this.al = []) : m ? d = this.kT : d = this.al;
                        k = $.Yq(this, "crsAnimation");
                        if (this.Dq && this.Dq.Yb == $.Dy || !this.Dq)
                            k && k.i("enabled") && 0 < k.i("duration") && !f && m ? (h.Co = new PP(q,a),
                            this.Dq = new qP(this,d,p,h,k.i("duration"),this != this.ph()),
                            this.Dq.xe("end", function() {
                                this.map.Dq.stop();
                                this.map.Dq.dd();
                                this.Od.Co = this.Od.Co.YQ
                            }, !0, {
                                map: this,
                                Od: h
                            }),
                            this.Dq.play()) : (a = (0,
                            $.pa)(this.aQ, {
                                Od: h,
                                s2: p,
                                t2: a,
                                MR: this.scale(),
                                map: this
                            }),
                            KQ(this),
                            $.V(b),
                            b.qg(c),
                            rP(this, d, a, f, m),
                            b.zg(),
                            b.da(!0),
                            KQ(this) ? (UP(b, !0),
                            this.Fw.parent(this.ef),
                            this.Fw.ic(1, 0, 0, 1, 0, 0)) : UP(b, !1));
                        a = -window.Infinity;
                        p = window.Infinity;
                        f = c = 0;
                        for (b = this.gb.length; b--; )
                            d = this.gb[b],
                            d.u(512, 1),
                            d.Ln(),
                            a = Math.max(a, d.Ia("seriesMax")),
                            p = Math.min(p, d.Ia("seriesMin")),
                            c += d.Ia("seriesSum"),
                            f += d.Ia("seriesPointsCount");
                        m = c / f;
                        for (b = 0; b < this.gb.length; b++)
                            d = this.gb[b],
                            d.Ia("max", a),
                            d.Ia("min", p),
                            d.Ia("sum", c),
                            d.Ia("average", m),
                            d.Ia("pointsCount", f),
                            d = $.ac(d.stroke()),
                            d > this.cr && (this.cr = d)
                    }
                    this.I(65536)
                }
                if (this.J(4194304)) {
                    a = this.i("geoIdField");
                    this.GG = {};
                    this.GG[a] = {};
                    if (this.al) {
                        for (b = this.gb.length; b--; )
                            d = this.gb[b],
                            $.n(d.oC()) && d.oC() != a && (this.GG[d.oC()] = {});
                        b = 0;
                        for (d = this.al.length; b < d; b++)
                            a = this.al[b],
                            PQ(this, a, function(a) {
                                var b = a.properties;
                                if (b)
                                    for (var c in this.GG)
                                        c in b && (this.GG[c][b[c]] = a)
                            }, this)
                    }
                    this.I(4194304)
                }
            }
            ;
            $.g.PD = function() {
                GQ.B.PD.call(this, this.Sf);
                this.Wu().cz(TP(this.scale()))
            }
            ;
            $.g.Ui = function(a) {
                nP(this);
                var b, c, d, e = this.i("maxZoomLevel"), f = this.i("minZoomLevel");
                var h = this.scale();
                this.nb();
                if (this.J(32768)) {
                    for (b = this.gb.length; b--; ) {
                        var k = this.gb[b];
                        $.V(k);
                        k.P(this.$e);
                        jP(k) && k.nb();
                        k.da(!1)
                    }
                    this.zB = {};
                    $.$y(this)
                }
                if (this.J(4)) {
                    b = 0;
                    for (d = this.Mn.length; b < d; b++) {
                        var l = this.Mn[b];
                        l.u(4)
                    }
                    if ($.Yq(this, "axesSettings"))
                        for (k = this.rp.cm(),
                        b = 0,
                        d = k.length; b < d; b++) {
                            var m = k[b];
                            $.mu(m.labels());
                            $.mu(m.jb());
                            m.u(m.ze)
                        }
                    if ($.Yq(this, "gridsSettings"))
                        for (l = this.Nx.cm(),
                        b = 0,
                        d = l.length; b < d; b++)
                            k = l[b],
                            k.u(80);
                    this.u(67108864);
                    this.u(33554432);
                    this.u(16777216)
                }
                if (this.J(524288) && $.Yq(this, "colorRange")) {
                    b = 0;
                    for (d = this.gb.length; b < d; b++)
                        jP(this.gb[b]) && (c = this.gb[b]);
                    c && ($.V(this.Zb),
                    this.Zb.scale(c.td()),
                    this.Zb.target(c),
                    this.Zb.ob(nP(this)),
                    this.Zb.da(!1),
                    this.u(4))
                }
                if (this.J(16777216))
                    for (b = 0,
                    d = this.Mn.length; b < d; b++)
                        if (l = this.Mn[b]) {
                            c = [];
                            m = l.items();
                            for (var p = 0, q = 0, r = m.length; q < r; q++)
                                for (var t = m[q], u = 0, v = this.gb.length; u < v; u++) {
                                    k = this.gb[u];
                                    var w = (0,
                                    $.za)(k.yV, t);
                                    if (k = -1 != w ? k.Id(w) : null)
                                        c[p] = k,
                                        p++
                                }
                            $.V(l);
                            l.g = c;
                            l.ob(nP(this));
                            l.P(this.Ma);
                            l.zIndex(60);
                            l.da(!1)
                        }
                l = this.ef;
                if (this.J(4)) {
                    if (this.Zb) {
                        this.Zb.ja(a.clone().round());
                        var x = this.Zb.rd()
                    } else
                        x = a.clone();
                    this.Ma.clip(this.mb());
                    a = $.D(this.Lw()) ? $.ac(this.Lw().stroke()) : 0;
                    a > this.cr && (this.cr = a);
                    x.left = x.left + this.cr / 2;
                    x.top = x.top + this.cr / 2;
                    x.width = x.width - this.cr;
                    x.height = x.height - this.cr;
                    a = x;
                    d = this.Mn;
                    k = a.clone();
                    q = p = m = c = 0;
                    for (b = d.length; b--; )
                        (r = d[b]) && r.enabled() && (r.ja(a),
                        t = r.orientation(),
                        "top" == t ? (r = r.rd(),
                        c = a.height - r.height) : "bottom" == t ? (r = r.rd(),
                        m = a.height - r.height) : "left" == t ? (r = r.rd(),
                        p = a.width - r.width) : "right" == t && (r = r.rd(),
                        q = a.width - r.width));
                    k.left += p;
                    k.top += c;
                    k.width -= q + p;
                    k.height -= m + c;
                    a = this.pC(k).clone();
                    a.left += this.cr / 2;
                    a.top += this.cr / 2;
                    a.width -= this.cr;
                    a.height -= this.cr;
                    h.sf(a);
                    this.Cf = a;
                    if ($.Yq(this, "axesSettings"))
                        for (k = this.rp.cm(),
                        b = 0,
                        d = k.length; b < d; b++)
                            m = k[b],
                            m.Qd();
                    this.ef && this.ak && !this.ak["default"].Wh && this.ef.clip(TP(h));
                    this.clear();
                    KQ(this) && (h.nb(),
                    this.Fw.parent(this.ef),
                    this.Fw.ic(1, 0, 0, 1, 0, 0),
                    this.Fw.scale(h.ratio, h.ratio, 0, 0),
                    h = ZP(h, 0, 0),
                    c = new $.Eb(1,0,0,1,h[0],h[1]),
                    $.yb(c, this.Fw.Dd),
                    this.Fw.ic(c.fd, c.Le, c.We, c.Ce, c.Ad, c.wd));
                    if (this.al)
                        for (a = KQ(this) ? this.Fw : this.ef,
                        b = 0,
                        d = this.al.length; b < d; b++)
                            h = this.al[b],
                            OQ(this, h, a);
                    for (b = this.gb.length; b--; )
                        k = this.gb[b],
                        k.ja(this.Cf),
                        k.u(4, 1);
                    h = 8388608;
                    KQ(this) && (h |= 16);
                    this.u(h)
                }
                if (this.J(2097152)) {
                    h = this.Bg();
                    b = this.Oy * h;
                    c = this.ef.kg();
                    var y = c.Ad;
                    var B = c.wd;
                    if (!(h == f && b < f || h == e && b > e) && l || this.nr) {
                        k = !($.n(this.Dc) && $.n(this.Ac));
                        if ((0,
                        window.isNaN)(this.Dc) || (0,
                        window.isNaN)(this.Ac))
                            a = TP(this.scale()).zj(),
                            m = a.top + a.height / 2,
                            d = (a.left + a.width / 2 - y) / c.fd,
                            a = (m - B) / c.Ce,
                            (0,
                            window.isNaN)(this.Dc) && (this.Dc = d),
                            (0,
                            window.isNaN)(this.Ac) && (this.Ac = a);
                        a = 1 > this.Oy;
                        this.nr || (b > e ? (this.Oy = e / this.Bg(),
                        b = this.Oy * h) : b < f && a && (this.Oy = f / this.Bg(),
                        b = this.Oy * h));
                        e = this.ll || 200;
                        this.Xh && this.Xh.Yb != $.Dy || k || (this.eB = h,
                        this.oO = b,
                        ((a = $.Jm(this.eB, this.oO, 1E-5)) && this.II || !a) && this != this.ph() || nP(this).dispatchEvent(UQ(this, "zoomstart")) ? ($.Yk.anychart.ui.ContextMenu && (a = this.contextMenu(),
                        a.Ve() && a.Oc()),
                        a = this.ef,
                        k = a.lb(),
                        d = (this.Dc - y) / this.eB,
                        a = (this.Ac - B) / this.eB,
                        this.nr || (d < k.left ? d = k.left : d > k.Za() && (d = k.Za()),
                        a < k.top ? a = k.top : a > k.Ta() && (a = k.Ta())),
                        this.Xh = new tP(this,[h, y, B],[b, d * (1 - this.eB), a * (1 - this.eB)],e,this != this.ph()),
                        this.Xh.play()) : a && (e = this.ph(),
                        a = e.ef.lb(),
                        d = a.left + a.width / 2,
                        a = a.top + a.height / 2,
                        y = d * (1 - e.Mp),
                        B = a * (1 - e.Mp),
                        this.ef.ic(e.Mp, 0, 0, e.Mp, y, B),
                        this.scale().zoom = e.Mp,
                        vP(this.scale(), y, B),
                        wP(this)))
                    }
                    this.II = !1;
                    this.ll = window.NaN;
                    this.Oy = 1;
                    this.I(2097152)
                }
                this.J(1048576) && (this.Bg() != f && l && (f = l.zj(),
                k = l.vt(l.kg()),
                this.e1 ? k.left + this.offsetX >= f.left && 0 < this.offsetX ? y = 0 : k.Za() + this.offsetX <= f.Za() && 0 > this.offsetX ? y = 0 : y = this.offsetX : k.left + this.offsetX >= f.left ? y = f.left - k.left : k.Za() + this.offsetX <= f.Za() ? y = f.Za() - k.Za() : y = this.offsetX,
                this.e1 ? k.top + this.offsetY >= f.top && 0 < this.offsetY ? B = 0 : k.Ta() + this.offsetY <= f.Ta() && 0 > this.offsetY ? B = 0 : B = this.offsetY : k.top + this.offsetY >= f.top ? B = f.top - k.top : k.Ta() + this.offsetY <= f.Ta() ? B = f.Ta() - k.Ta() : B = this.offsetY,
                y /= this.Bg(),
                B /= this.Bg(),
                this.offsetY = this.offsetX = 0,
                y || B) && (this.Yfa = !0,
                l.PE(1, 0, 0, 1, y, B),
                c = l.Dd,
                vP(this.scale(), c.Ad, c.wd),
                wP(this)),
                this.I(1048576));
                if (this.J(33554432)) {
                    if ($.Yq(this, "axesSettings"))
                        for (k = this.rp.cm(),
                        b = 0; b < k.length; b++)
                            m = k[b],
                            $.V(m),
                            m.P(this.Ma),
                            m.Y(),
                            m.da(!1);
                    this.I(33554432)
                }
                if (this.J(67108864)) {
                    if ($.Yq(this, "gridsSettings"))
                        for (l = this.Nx.cm(),
                        b = 0,
                        d = l.length; b < d; b++)
                            k = l[b],
                            $.V(k),
                            k.scale(this.scale()),
                            k.P(this.Ma),
                            k.Y(),
                            k.da(!1);
                    this.I(67108864)
                }
                this.J(134217728) && (y = this.Xg(),
                $.V(y),
                y.ja(x),
                y.P(this.Ma),
                y.Y(),
                y.da(!1),
                this.I(134217728));
                if (this.J(16)) {
                    y = this.Lw();
                    if ("as-is" == y)
                        for (b = 0,
                        d = this.Wv.length; b < d; b++)
                            x = this.Wv[b],
                            x.visible(!0),
                            x.gl(),
                            delete x.tag;
                    else if ($.D(y) && y.enabled())
                        for (b = 0,
                        d = this.Wv.length; b < d; b++)
                            x = this.Wv[b],
                            x.visible(!0),
                            x.gl(),
                            delete x.tag,
                            $.K(x, $.lg) && x.fill(y.fill()).stroke(y.stroke());
                    else
                        for (b = 0,
                        d = this.Wv.length; b < d; b++)
                            x = this.Wv[b],
                            x.visible(!1),
                            x.gl(),
                            delete x.tag;
                    this.Lv();
                    this.u(32768);
                    this.I(16)
                }
                if (this.J(32768)) {
                    for (b = this.gb.length; b--; )
                        k = this.gb[b],
                        x = k.Oa(),
                        this.zB[x] = this.zB[x] || !k.nf(),
                        $.V(k),
                        k.ob(nP(this)),
                        fP(k, this.i("geoIdField")),
                        k.Y(),
                        k.da(!1);
                    this.I(32768)
                }
                this.J(8388608) && (FQ(this),
                this.I(8388608));
                this.J(524288) && ($.Yq(this, "colorRange") && ($.V(this.Zb),
                this.Zb.P(this.Ma),
                this.Zb.zIndex(50),
                this.Zb.Y(),
                this.Zb.da(!1)),
                this.I(524288));
                if (this.J(16777216)) {
                    b = 0;
                    for (d = this.Mn.length; b < d; b++)
                        if (l = this.Mn[b])
                            $.V(l),
                            l.P(this.Ma),
                            l.zIndex(60),
                            l.Y(),
                            l.da(!1);
                    this.I(16777216)
                }
            }
            ;
            $.g.l4 = function(a, b, c) {
                var d = QQ(this, a);
                if (d && !KQ(this)) {
                    var e = d.ea.zj();
                    var f = this.scale().Pc(e.left + e.width / 2, e.top + e.height / 2);
                    f = cQ(this.scale(), f[0], f[1])[0];
                    a = f == this.ak["default"] ? this.ak[a] = {} : f;
                    b /= this.Bg();
                    c /= this.Bg();
                    var h = $P(this.scale(), e.left, e.top)
                      , k = $P(this.scale(), e.left + b, e.top + c);
                    f = k[0] - h[0];
                    h = k[1] - h[1];
                    k = 0;
                    for (var l = d.polygones.length; k < l; k++) {
                        for (var m = d.polygones[k], p = m.outerPath, q = 0; q < p.length - 1; q += 2)
                            p[q] += f,
                            p[q + 1] += h;
                        m = m.holes;
                        for (q = 0; q < m.length - 1; q += 2)
                            m[q] += f,
                            m[q + 1] += h
                    }
                    a.Wh = a.Wh ? a.Wh + f : f;
                    a.Ni = a.Ni ? a.Ni + h : h;
                    e.left += b;
                    e.top += c;
                    b = $P(this.scale(), e.left, e.top);
                    e = $P(this.scale(), e.left + e.width, e.top + e.height);
                    a.Ft = $.Xm(b[0], b[1], Math.abs(e[0] - b[0]), Math.abs(e[1] - b[1]));
                    this.u(65540, 1)
                }
                return this
            }
            ;
            $.g.vR = function(a, b, c) {
                var d = QQ(this, a);
                if (d) {
                    var e = d.ea.zj();
                    var f = this.scale().Pc(e.left + e.width / 2, e.top + e.height / 2);
                    f = cQ(this.scale(), f[0], f[1])[0];
                    f = f == this.ak["default"] ? this.ak[a] = {} : f
                }
                if ($.n(b) || $.n(c)) {
                    if (d && !KQ(this)) {
                        var h = f.Ni || 0;
                        a = (f.Wh || 0) * this.scale().ratio;
                        h *= this.scale().ratio;
                        b = $.n(b) ? b : a;
                        c = $.n(c) ? c : h;
                        b /= this.Bg();
                        c /= this.Bg();
                        for (var k = (b - a) / this.scale().ratio, l = (c - h) / this.scale().ratio, m = 0, p = d.polygones.length; m < p; m++) {
                            for (var q = d.polygones[m], r = q.outerPath, t = 0; t < r.length - 1; t += 2)
                                r[t] += k,
                                r[t + 1] += l;
                            q = q.holes;
                            for (t = 0; t < q.length - 1; t += 2)
                                q[t] += k,
                                q[t + 1] += l
                        }
                        f.Wh = f.Wh ? f.Wh + k : k;
                        f.Ni = f.Ni ? f.Ni + l : l;
                        e.left += b - a;
                        e.top += c - h;
                        b = $P(this.scale(), e.left, e.top);
                        e = $P(this.scale(), e.left + e.width, e.top + e.height);
                        f.Ft = $.Xm(b[0], b[1], Math.abs(e[0] - b[0]), Math.abs(e[1] - b[1]));
                        this.u(65540, 1)
                    }
                    return this
                }
                return d ? [f.Wh * this.scale().ratio || 0, f.Ni * this.scale().ratio || 0] : [window.NaN, window.NaN]
            }
            ;
            $.g.uR = function(a, b) {
                var c = QQ(this, a);
                if (c) {
                    var d = this.scale();
                    var e = c.ea.lb();
                    var f = d.Pc(e.left + e.width / 2, e.top + e.height / 2);
                    f = cQ(d, f[0], f[1])[0];
                    f = f == this.ak["default"] ? this.ak[a] = {} : f
                }
                if ($.n(b)) {
                    if (c && !KQ(this)) {
                        var h = $.N(b) || 1
                          , k = f.Wh || 0
                          , l = f.Ni || 0
                          , m = this.ak["default"].scale || DR["default"].scale;
                        m = f.scale ? f.scale : m;
                        var p = $P(d, e.left, e.top)
                          , q = $P(d, e.left + e.width, e.top + e.height)
                          , r = (q[0] - k) / m * h + k;
                        q = (q[1] - l) / m * h + l;
                        p = ZP(d, (p[0] - k) / m * h + k, (p[1] - l) / m * h + l);
                        q = ZP(d, r, q);
                        q = $.Xm(p[0], p[1], Math.abs(q[0] - p[0]), Math.abs(q[1] - p[1]));
                        p = $P(d, q.left + q.width / 2, q.top + q.height / 2);
                        r = $P(d, e.left + e.width / 2, e.top + e.height / 2);
                        e = r[0] - p[0];
                        r = r[1] - p[1];
                        p = $P(d, q.left, q.top);
                        q = $P(d, q.left + q.width, q.top + q.height);
                        p[0] += e;
                        p[1] += r;
                        q[0] += e;
                        q[1] += r;
                        d = 0;
                        for (var t = c.polygones.length; d < t; d++) {
                            for (var u = c.polygones[d], v = u.outerPath, w = 0; w < v.length - 1; w += 2)
                                v[w] = (v[w] - k) / m * h + k + e,
                                v[w + 1] = (v[w + 1] - l) / m * h + l + r;
                            u = u.holes;
                            for (w = 0; w < u.length - 1; w += 2)
                                u[w] = (u[w] - k) / m * h + k + e,
                                u[w + 1] = (u[w + 1] - l) / m * h + l + r
                        }
                        f.Ft = $.Xm(p[0], p[1], Math.abs(q[0] - p[0]), Math.abs(q[1] - p[1]));
                        f.Wh = f.Wh ? f.Wh + e : e;
                        f.Ni = f.Ni ? f.Ni + r : r;
                        f.scale = h;
                        this.u(65540, 1)
                    }
                    return this
                }
                return c ? f.scale || this.ak["default"].scale || 1 : window.NaN
            }
            ;
            $.g.tR = function(a, b) {
                var c = QQ(this, a);
                if (c) {
                    var d = this.scale();
                    var e = c.ea.lb()
                      , f = d.Pc(e.left + e.width / 2, e.top + e.height / 2);
                    f = cQ(d, f[0], f[1])[0];
                    if ($.n(b)) {
                        if (!KQ(this)) {
                            c.ea.clear();
                            var h = c.properties[this.i("geoIdField")];
                            var k = f == this.ak["default"] ? this.ak[h] = {} : f
                              , l = k.wg || this.ak["default"].wg || DR["default"].crs;
                            f = $O(l);
                            h = $O(b);
                            for (var m = k.Wh || 0, p = k.Ni || 0, q = k.scale || this.ak["default"].scale || DR["default"].scale, r = 0, t = c.polygones.length; r < t; r++) {
                                for (var u = c.polygones[r], v = u.outerPath, w = 0; w < v.length - 1; w += 2) {
                                    var x = (v[w] - m) / q;
                                    var y = (v[w + 1] - p) / q;
                                    x = f.bj(x, y);
                                    x = h.forward(x[0], x[1]);
                                    v[w] = x[0] * q + m;
                                    v[w + 1] = x[1] * q + p;
                                    y = ZP(d, v[w], v[w + 1]);
                                    x = y[0];
                                    y = y[1];
                                    w ? c.ea.lineTo(x, y) : c.ea.moveTo(x, y)
                                }
                                u = u.holes;
                                for (w = 0; w < u.length - 1; w += 2)
                                    x = (u[w] - m) / q,
                                    y = (u[w + 1] - p) / q,
                                    x = f.bj(x, y),
                                    x = h.forward(x[0], x[1]),
                                    u[w] = x[0] * q + m,
                                    u[w + 1] = x[1] * q + p,
                                    y = ZP(d, u[w], u[w + 1]),
                                    x = y[0],
                                    y = y[1],
                                    w ? c.ea.lineTo(x, y) : c.ea.moveTo(x, y)
                            }
                            p = c.ea.zj();
                            r = $P(d, p.left + p.width / 2, p.top + p.height / 2);
                            t = $P(d, e.left + e.width / 2, e.top + e.height / 2);
                            m = t[0] - r[0];
                            q = t[1] - r[1];
                            r = 0;
                            for (t = c.polygones.length; r < t; r++) {
                                u = c.polygones[r];
                                v = u.outerPath;
                                for (w = 0; w < v.length - 1; w += 2)
                                    v[w] += m,
                                    v[w + 1] += q;
                                u = u.holes;
                                for (w = 0; w < u.length - 1; w += 2)
                                    u[w] += m,
                                    u[w + 1] += q
                            }
                            c.ea.setPosition(e.left + e.width / 2 - p.width / 2, e.top + e.height / 2 - p.height / 2);
                            p = c.ea.lb();
                            c = $P(d, p.left, p.top);
                            d = $P(d, p.left + p.width, p.top + p.height);
                            k.Ft = $.Xm(c[0], c[1], Math.abs(d[0] - c[0]), Math.abs(d[1] - c[1]));
                            k.Wh = k.Wh ? k.Wh + m : m;
                            k.Ni = k.Ni ? k.Ni + q : q;
                            k.wg = b;
                            k.Co = h;
                            k.XH = l;
                            k.G3 = f;
                            this.u(65540, 1)
                        }
                        d = this
                    } else
                        d = $.n(f.wg) ? f.wg : this.ak["default"].wg
                } else
                    d = null;
                return d
            }
            ;
            $.g.wg = function(a) {
                return $.n(a) ? (a = GO(a),
                this.it != a && (this.it = a,
                this.u(65540, 1)),
                this) : this.it || this.vz || DR["default"].crs
            }
            ;
            $.g.show = function() {
                this.Ma.visible(!0)
            }
            ;
            $.g.Oc = function() {
                this.Ma.visible(!1);
                var a = nP(this);
                a.dl && (a.dispatchEvent(this.Bk("hovered", {
                    target: this
                }, a.dl, !0, !0)),
                a.dl = null);
                a.ec("mousemove", a.oI);
                (a = $.Yq(this, "colorRange")) && a.enabled() && $.EM(a)
            }
            ;
            $.g.ph = function() {
                return nP(this).QJ
            }
            ;
            $.g.jR = function(a) {
                return $.n(a) ? ($.D(a) && (this.sx = a,
                this.IG && $.Bc(this.IG, function(a) {
                    a.dd()
                }),
                this.IG = {}),
                this) : this.sx
            }
            ;
            $.g.Zu = function(a, b, c) {
                var d = $.Ja(arguments, 2);
                a.Xh ? a.Xh.xe("end", function() {
                    b.apply(this, d)
                }, !1, a) : b.apply(a, d)
            }
            ;
            $.g.Kz = function() {
                var a = nP(this)
                  , b = [new cP(null,this,null,null)];
                b.push.apply(b, $.Ja(a.jt, 0));
                return b
            }
            ;
            $.g.Iq = function(a, b) {
                var c = nP(this)
                  , d = this.ph();
                if (b == d || c.$u)
                    return this;
                if (null === a || "null" == a)
                    return TQ(this, c, c.jt.length),
                    this;
                if ($.n(b))
                    SQ(this, a, b);
                else if (this.sx && this.sx[a])
                    SQ(this, a, this.sx[a]);
                else {
                    for (d = c.jt.length; d--; ) {
                        var e = c.jt[d];
                        if (e.Dx() == a) {
                            var f = e.A_();
                            break
                        }
                    }
                    f ? TQ(this, f, c.jt.length - 1 - d) : $.Xk(301, null, [a])
                }
                return this
            }
            ;
            $.g.qx = function() {
                var a = nP(this)
                  , b = this.ph().pha;
                if (!b || a.$u)
                    return a.$u = !1,
                    this;
                TQ(this, b);
                return this
            }
            ;
            $.g.Bg = function() {
                return this.Mp
            }
            ;
            $.g.wj = function(a, b, c, d) {
                this.nr || (a = $.Za(a, this.i("minZoomLevel"), this.i("maxZoomLevel")));
                return this.zoom(a / this.Bg(), b, c, d)
            }
            ;
            $.g.Oja = function(a, b) {
                var c = this.ph()
                  , d = [];
                $.A(a) || (a = [a]);
                for (var e, f, h = "", k = 0, l = a.length; k < l; k++) {
                    var m = a[k];
                    if (f = QQ(c, m))
                        h += m + ";",
                        d.push(f)
                }
                if (d.length) {
                    m = c.ef.kg();
                    var p = this.HM && h == this.HM && this.GM && Jea(m, this.GM);
                    k = 0;
                    for (l = d.length; k < l; k++)
                        f = d[k],
                        f = f.ea,
                        e ? $.pb(e, p ? f.lb() : f.Kq()) : e = p ? f.lb() : f.Kq();
                    var q = m.fd
                      , r = m.Ad
                      , t = m.wd;
                    d = uP(c, e, void 0, p);
                    var u = d[0]
                      , v = d[1]
                      , w = d[2];
                    this.Zu(c, function() {
                        this.II = !0;
                        this.ll = $.n(b) ? b : (0,
                        window.isNaN)(this.ll) ? 500 : this.ll;
                        p ? ($.Jm(q, u, 1E-5) ? nP(this).dispatchEvent(UQ(this, "zoomstart")) && (this.Xh = new tP(this,[1, r, t],[1, r + v, t + w],this.ll),
                        this.Xh.play()) : this.wj(this.i("minZoomLevel"), v, w, this.ll),
                        this.GM = this.HM = null) : ($.Jm(q, u, 1E-5) ? nP(this).dispatchEvent(UQ(this, "zoomstart")) && (this.Xh = new tP(this,[1, r, t],[1, r + v, t + w],this.ll),
                        this.Xh.play()) : this.wj(u, v, w, this.ll),
                        this.HM = h,
                        this.Xh && this.Xh.xe("end", function() {
                            this.HM ? this.GM = this.ph().ef.kg().clone() : this.GM = null
                        }, !1, this))
                    })
                } else
                    $.Xk(301, null, [a])
            }
            ;
            $.g.Ss = function(a) {
                return this.zoom(this.i("zoomFactor"), void 0, void 0, a)
            }
            ;
            $.g.Ts = function(a) {
                return this.zoom(1 / this.i("zoomFactor"), void 0, void 0, a)
            }
            ;
            $.g.Lo = function() {
                this.$u || (this.Xh && this.Xh.stop(),
                this.Zu(this, function() {
                    this.BC = !0;
                    this.ll = 300;
                    var a = this.ph();
                    a.wj(a.i("minZoomLevel"));
                    this.Zu(this, function() {
                        this.BC = !1
                    })
                }));
                return this
            }
            ;
            $.g.zoom = function(a, b, c, d) {
                if ($.n(a)) {
                    var e = 0
                      , f = 0;
                    $.n(d) && (this.ll = d);
                    a = $.N(a);
                    if ((this.Bg() == this.i("minZoomLevel") && 1 > a || this.Bg() == this.i("maxZoomLevel") && 1 < a) && !this.nr)
                        return this;
                    1 != a && (this.Oy = a,
                    e = 2097152,
                    f = 1);
                    b = $.N(b);
                    c = $.N(c);
                    if (this.Dc != b || this.Ac != c)
                        this.Dc = b,
                        this.Ac = c,
                        e = 2097152,
                        f = 1;
                    this.II = !0;
                    this.u(e, f)
                }
                return this
            }
            ;
            $.g.move = function(a, b) {
                if ($.n(a) || $.n(b)) {
                    var c = 0
                      , d = 0;
                    $.n(a) && (a = $.N(a),
                    (0,
                    window.isNaN)(a) || (this.offsetX = a,
                    c = 1048576,
                    d = 1));
                    $.n(b) && (b = $.N(b),
                    (0,
                    window.isNaN)(b) || (this.offsetY = b,
                    c = 1048576,
                    d = 1));
                    this.u(c, d)
                }
                return this
            }
            ;
            $.g.transform = function(a, b) {
                var c = this.scale().transform(a, b);
                return {
                    x: c[0],
                    y: c[1]
                }
            }
            ;
            $.g.Pc = function(a, b) {
                var c = this.scale().Pc(a, b);
                return {
                    x: c[0],
                    "long": c[0],
                    y: c[1],
                    lat: c[1]
                }
            }
            ;
            $.g.Yl = function(a, b) {
                var c, d = [];
                if ("default" == a) {
                    var e = 0;
                    for (c = this.gb.length; e < c; e++) {
                        var f = this.gb[e];
                        var h = f.td();
                        var k = f.vC(b);
                        k.sourceUid = $.oa(this);
                        k.sourceKey = f.id();
                        k.meta = {
                            scale: h
                        };
                        d.push(k)
                    }
                } else if ("categories" == a) {
                    if (this.Zb && this.Zb.enabled() && this.Zb.target() && $.K(this.Zb.scale(), $.uy))
                        h = this.Zb.scale(),
                        f = this.Zb.target();
                    else
                        for (e = 0,
                        c = this.gb.length; e < c; e++)
                            if (f = this.gb[e],
                            $.K(f.td(), $.uy)) {
                                h = f.td();
                                break
                            }
                    if (h)
                        for (k = h.Rq(),
                        e = 0,
                        c = k.length; e < c; e++) {
                            var l = k[e];
                            "default" !== l.name && d.push({
                                text: l.name,
                                iconEnabled: !0,
                                iconType: "square",
                                iconFill: l.color,
                                disabled: !this.enabled(),
                                sourceUid: $.oa(this),
                                sourceKey: e,
                                meta: {
                                    W: f,
                                    scale: h,
                                    De: l
                                }
                            })
                        }
                }
                return d
            }
            ;
            $.g.js = function(a) {
                return "default" == a || "categories" == a
            }
            ;
            $.g.Zq = function(a, b) {
                var c = a.o();
                var d = this.Ef().i("itemsSourceMode");
                if ("default" == d) {
                    if (d = a.ji(),
                    d = this.Te(d))
                        d.enabled(!d.enabled()),
                        d.enabled() ? d.xk() : d.Jd()
                } else if ("categories" == d) {
                    d = c.W;
                    var e = c.scale;
                    if (e && d) {
                        var f = [];
                        c = c.De;
                        for (var h = d.xc(); h.advance(); ) {
                            var k = h.get(d.Qe.kl);
                            c == e.kn(k) && f.push(h.la())
                        }
                        "single" == this.Wc().i("hoverMode") ? b.Hf = {
                            W: d,
                            pd: f
                        } : b.Hf = [{
                            W: d,
                            pd: f,
                            tn: f[f.length - 1],
                            ue: {
                                index: f[f.length - 1],
                                $f: 0
                            }
                        }]
                    }
                }
            }
            ;
            $.g.Vp = function(a, b) {
                var c = a.o();
                var d = this.Ef().i("itemsSourceMode");
                if ("default" == d)
                    d = a.ji(),
                    (!a || null != d || (0,
                    window.isNaN)(d)) && (d = this.Te(d)) && d.xk();
                else if ("categories" == d) {
                    d = c.W;
                    var e = c.scale;
                    if (e && d) {
                        c = c.De;
                        for (var f = d.xc(), h = []; f.advance(); ) {
                            var k = f.get(d.Qe.kl);
                            c == e.kn(k) && h.push(f.la())
                        }
                        if (e = $.bo(b.domTarget))
                            "single" == this.Wc().i("hoverMode") ? e.Hf = {
                                W: d,
                                pd: h
                            } : e.Hf = [{
                                W: d,
                                pd: h,
                                tn: h[h.length - 1],
                                ue: {
                                    index: h[h.length - 1],
                                    $f: 0
                                }
                            }];
                        this.Zb && this.Zb.enabled() && this.Zb.target() && $.DM(this.Zb, (c.start + c.end) / 2)
                    }
                }
            }
            ;
            $.g.Tp = function(a, b) {
                var c = a.o()
                  , d = this.Ef().i("itemsSourceMode");
                "default" == d ? (c = a.ji(),
                (!a || null != c || (0,
                window.isNaN)(c)) && (c = this.Te(c)) && c.Jd()) : "categories" == d && ("single" == this.Wc().i("hoverMode") && (d = $.bo(b.domTarget)) && (d.W = c.W),
                this.Zb && this.Zb.enabled() && this.Zb.target() && $.EM(this.Zb))
            }
            ;
            $.g.gk = function(a, b) {
                var c = $.Mw(this);
                return $.To(c.headers, c.data, b)
            }
            ;
            var dfa = {
                "select-submenu": {
                    "select-submenu": {
                        index: 9,
                        text: "Select points",
                        iconClass: "ac ac-mouse-pointer",
                        subMenu: {
                            "select-polygon": {
                                index: 9.2,
                                text: "Polygon",
                                iconClass: "ac ac-pentagon",
                                eventType: "anychart.startSelectPolygonMarquee",
                                action: function(a) {
                                    a.menuParent.H3(!1)
                                }
                            },
                            "select-marquee": {
                                index: 9.3,
                                text: "Marquee",
                                iconClass: "ac ac-square",
                                eventType: "anychart.startSelectMarquee",
                                action: function(a) {
                                    a.menuParent.GN(!1)
                                }
                            }
                        }
                    }
                }
            };
            $.g = GQ.prototype;
            $.g.Bw = function(a) {
                var b = {};
                $.Oc(b, $.Gl(dfa["select-submenu"]), a);
                return b
            }
            ;
            $.g.lja = function() {
                return Tea(iQ.ud(), this.al, this.ak)
            }
            ;
            $.g.X = function(a, b) {
                GQ.B.X.call(this, a, b);
                "defaultSeriesSettings"in a && this.Jr(a.defaultSeriesSettings);
                "defaultCalloutSettings"in a && this.HZ(a.defaultCalloutSettings);
                "colorRange"in a && this.Nj().ia(!!b, a.colorRange);
                "unboundRegions"in a && this.Lw(a.unboundRegions);
                $.mq(this, CR, a);
                var c = a.geoData;
                c && this.Pr($.ec(c, "{") ? JSON.parse(c) : c);
                this.FQ(a.crsAnimation);
                this.wg(a.crs);
                var d;
                if (a.geoScale) {
                    var e = new RP;
                    e.K(a.geoScale);
                    this.scale(e)
                }
                if ("callouts"in a) {
                    c = a.callouts;
                    var f = 0;
                    for (var h = c.length; f < h; f++)
                        (e = c[f]) && this.aZ(f, e)
                }
                "axesSettings"in a && this.axes().ia(!!b, a.axesSettings);
                "gridsSettings"in a && this.HS().ia(!!b, a.gridsSettings);
                "crosshair"in a && this.Xg(a.crosshair);
                h = a.colorScales;
                c = {};
                if ($.D(h))
                    for (d in h)
                        if (h.hasOwnProperty(d)) {
                            f = h[d];
                            e = $.z(f) ? f : f.type;
                            e = String(e).toLowerCase();
                            switch (e) {
                            case "ordinal-color":
                                e = $.vy();
                                break;
                            case "linear-color":
                                e = $.sy();
                                break;
                            default:
                                e = $.sy()
                            }
                            $.D(f) && e.K(f);
                            c[d] = e
                        }
                h = a.series;
                if ($.A(h))
                    for (d = 0; d < h.length; d++)
                        if (f = h[d],
                        e = (f.seriesType || this.i("defaultSeriesType")).toLowerCase(),
                        e = this.qe(e, f.data))
                            e.K(f),
                            $.D(f) && "colorScale"in f && (f = f.colorScale,
                            $.ea(f) ? e.td(c[f]) : (e = $.z(f) ? f : f.type,
                            (e = $.Ds(e, null)) && $.D(f) && e.K(f)));
                d = a.drillDownMap;
                $.D(d) && (this.sx = {},
                $.Bc(d, function(a, b) {
                    this.jR()[b] = $.Dp(a)
                }, this))
            }
            ;
            $.g.F = function() {
                var a = GQ.B.F.call(this);
                a.unboundRegions = $.z(this.Lw()) ? this.Lw() : this.Lw().F();
                $.Yq(this, "colorRange") && (a.colorRange = this.Nj().F());
                a.geoScale = this.scale().F();
                $.uq(this, CR, a);
                var b;
                this.MK ? b = this.MK : KQ(this) ? $.z(this.gn) ? b = this.gn : b = "#document" == this.gn.nodeName ? this.gn.documentElement.outerHTML : this.gn.outerHTML : b = JSON.stringify(this.gn);
                $.n(b) && (a.geoData = b);
                a.crsAnimation = this.FQ().F();
                $.D(this.it) ? $.Xk(8, null, ["Map crs"]) : this.it && (a.crs = this.it);
                b = [];
                for (var c = {}, d = [], e = 0; e < this.gb.length; e++) {
                    var f = this.gb[e]
                      , h = f.F();
                    if (f = f.td()) {
                        var k = $.oa(f);
                        c[k] ? h.colorScale = (0,
                        $.za)(d, c[k]) : (c[k] = f.F(),
                        d.push(c[k]),
                        h.colorScale = d.length - 1)
                    }
                    b.push(h)
                }
                c = [];
                e = 0;
                for (h = this.Mn.length; e < h; e++)
                    (f = this.Mn[e]) && (c[e] = f.F());
                c.length && (a.callouts = c);
                b.length && (a.series = b);
                d.length && (a.colorScales = d);
                $.Yq(this, "axesSettings") && (a.axesSettings = this.axes().F());
                $.Yq(this, "gridsSettings") && (a.gridsSettings = this.HS().F());
                $.Yq(this, "crosshair") && (a.crosshair = this.Xg().F());
                this.sx && (a.drillDownMap = {},
                $.Bc(this.sx, function(b, c) {
                    var d = $.K(b, GQ) ? b.F() : b;
                    a.drillDownMap[c] = d
                }, this.sx));
                return {
                    map: a
                }
            }
            ;
            $.g.R = function() {
                $.od(this.fg, this.sU, this.Af, this.Zb, this.Mn, this.rp, this.Tda, this.Vu, this.hm, this.Lt, this.To);
                this.Zb = this.Af = this.sU = this.fg = null;
                this.Mn.length = 0;
                this.To = this.Lt = this.hm = this.Vu = this.Tda = this.rp = null;
                if (this.P() && this.P().Ha()) {
                    var a = this.P().Ha().yl();
                    this.$T && $.Nd(a, "click", this.$T, !1, this);
                    this.aU && $.Nd(a, "dblclick", this.aU, !1, this);
                    this.cH && $.Nd(a, "pointerup", this.cH, !1, this);
                    this.cH && $.Nd(a, "touchend", this.cH, !1, this);
                    this.bU && $.Nd(a, "mouseleave", this.bU, !1, this)
                }
                GQ.B.R.call(this)
            }
            ;
            var ER = GQ.prototype;
            $.F("anychart.mapModule.Chart.DEFAULT_TX", DR);
            ER.getType = ER.Oa;
            ER.geoData = ER.Pr;
            ER.unboundRegions = ER.Lw;
            ER.toGeoJSON = ER.lja;
            ER.toCsv = ER.gk;
            ER.getSeries = ER.Te;
            ER.addSeries = ER.Kk;
            ER.getSeriesAt = ER.di;
            ER.getSeriesCount = ER.tk;
            ER.removeSeries = ER.ho;
            ER.removeSeriesAt = ER.zn;
            ER.removeAllSeries = ER.fp;
            ER.colorRange = ER.Nj;
            ER.callout = ER.aZ;
            ER.axes = ER.axes;
            ER.grids = ER.HS;
            ER.crosshair = ER.Xg;
            ER.palette = ER.cc;
            ER.markerPalette = ER.pf;
            ER.hatchFillPalette = ER.me;
            ER.getPlotBounds = ER.Lf;
            ER.crsAnimation = ER.FQ;
            ER.featureTranslation = ER.vR;
            ER.translateFeature = ER.l4;
            ER.featureScaleFactor = ER.uR;
            ER.featureCrs = ER.tR;
            ER.crs = ER.wg;
            ER.transform = ER.transform;
            ER.inverseTransform = ER.Pc;
            ER.zoom = ER.zoom;
            ER.move = ER.move;
            ER.zoomToFeature = ER.Oja;
            ER.zoomTo = ER.wj;
            ER.getZoomLevel = ER.Bg;
            ER.getCurrentScene = ER.ph;
            ER.fitAll = ER.Lo;
            ER.zoomIn = ER.Ss;
            ER.zoomOut = ER.Ts;
            ER.drillTo = ER.Iq;
            ER.drillUp = ER.qx;
            ER.drillDownMap = ER.jR;
            ER.getDrilldownPath = ER.Kz;
            ER.startSelectPolygonMarquee = ER.H3;
            ER.inPolygon = ER.xL;
            ER.cancelPolygonMarquee = ER.hba;
            $.H(VQ, $.oB);
            $.SF[23] = VQ;
            VQ.prototype.type = 23;
            VQ.prototype.np = ["id", "long", "lat", "size"];
            VQ.prototype.kl = "size";
            $.H(WQ, $.Yz);
            $.SF[24] = WQ;
            $.g = WQ.prototype;
            $.g.type = 24;
            $.g.flags = 532;
            $.g.np = ["id", "value"];
            $.g.uh = {
                foreignFill: "none",
                hatchFill: "path"
            };
            $.g.Yf = function(a, b) {
                var c = a.o("features");
                if (c)
                    for (var d = 0, e = c.length; d < e; d++) {
                        var f = c[d];
                        $.n(f.ea) && PQ(this.W.mc(), f, function(c) {
                            var d = c.ea;
                            if (d && $.K(d, $.lg)) {
                                d.visible(!0);
                                a.o("currentPointElement", c);
                                var e = this.Uc.Vc(b, void 0, void 0, d)
                                  , f = e.foreignFill;
                                f && (a.o("fill", f.fill()),
                                a.o("stroke", f.stroke()));
                                e = e.hatchFill;
                                e.ce($.wg(d));
                                c.x0 = e
                            }
                        }, this)
                    }
            }
            ;
            $.H(XQ, $.Yz);
            $.SF[21] = XQ;
            $.g = XQ.prototype;
            $.g.type = 21;
            $.g.flags = 528;
            $.g.np = ["points"];
            $.g.uh = {
                path: "path",
                hatchFill: "path"
            };
            $.g.Yf = function(a, b) {
                var c = this.g(this.W, a, b)
                  , d = this.f(this.W, a, b)
                  , e = {};
                e.eventHandler = 10 > c || 10 > d;
                e.path = !0;
                e.hatchFill = !0;
                e = this.Uc.Vc(b, e);
                var f = this.b(this.W, a, 0)
                  , h = 0
                  , k = 0
                  , l = []
                  , m = []
                  , p = 0
                  , q = 10 > c || 10 > d;
                var r = this.se();
                var t = this.W.mc().scale();
                if ((r = a.get(r[0])) && $.A(r)) {
                    var u = [];
                    var v = [];
                    for (var w, x, y, B = 0, G = r.length; B < G; B += 2) {
                        var C = $.N(r[B]);
                        w = $.N(r[B + 1]);
                        y = t.transform(w, C);
                        x = y[0];
                        y = y[1];
                        (0,
                        window.isNaN)(x) || (0,
                        window.isNaN)(y) || (u.push(x, y),
                        v.push(C, w))
                    }
                    a.o("pointsWithoutMissing", v);
                    C = u
                } else
                    C = null;
                t = 0;
                for (r = C.length; t < r; t += 2) {
                    w = e.path;
                    x = e.hatchFill;
                    u = C[t];
                    v = C[t + 1];
                    var I;
                    q && (I = e.eventHandler);
                    if (!(0,
                    window.isNaN)(u) && !(0,
                    window.isNaN)(v)) {
                        if (0 != t) {
                            B = $.Um(h, k, u, v);
                            var P = B / 2 * f;
                            y = (h + u) / 2;
                            var Q = (k + v) / 2;
                            var S = $.Gm($.db(Math.atan(Math.abs(k - v) / Math.abs(h - u))), 7);
                            G = 1;
                            if (u <= h && v <= k)
                                var va = S - 90;
                            else
                                u <= h && v >= k ? va = 270 - S : u >= h && v >= k ? (va = S - 90,
                                G = -1) : u >= h && v <= k && (va = 180 - S + 90,
                                G = -1);
                            y += Math.cos($.cb(va)) * P * 1.2;
                            P = Q + Math.sin($.cb(va)) * P * 1.2;
                            Q = B / 2 * f;
                            S = 0 < f ? 1 : -1;
                            var xa = Math.abs(Q) < B / 4 ? B / 4 * S : Math.abs(Q) > B / 2 ? B / 2 * S : Q;
                            var Qa = (0 > f ? 90 : -90) * G;
                            Qa = $.cb(va + Qa);
                            Q = y + Math.cos(Qa) * xa;
                            S = P + Math.sin(Qa) * xa;
                            Qa = (0 > f ? -90 : 90) * G;
                            Qa = $.cb(va + Qa);
                            y += Math.cos(Qa) * xa;
                            P += Math.sin(Qa) * xa;
                            xa = YQ(w, h, k, u, v, Q, S, y, P, c, d, f, G, va);
                            q && YQ(I, h, k, u, v, Q, S, y, P, 20, 20, f, G, va);
                            x.ce($.wg(w));
                            l.push.apply(l, xa);
                            m.push(B);
                            p += B
                        }
                        h = C[t];
                        k = C[t + 1]
                    }
                }
                a.o("points", l).o("sumDist", p).o("connectorsDist", m)
            }
            ;
            $.H(ZQ, $.vB);
            $.SF[22] = ZQ;
            ZQ.prototype.type = 22;
            ZQ.prototype.np = ["id", "long", "lat"];
            ZQ.prototype.aB = function(a, b) {
                ZQ.B.aB.call(this, a, b);
                var c = a.o("shapes");
                this.Uc.$s(b, c)
            }
            ;
            ZQ.prototype.Yf = function(a, b) {
                var c = this.Uc
                  , d = a.get(this.W.se()[0])
                  , e = this.Zg(d, this.prevValue)
                  , f = {};
                f[e.path] = !0;
                f[e.ee] = !0;
                a.o("names", e);
                c = c.Vc(b, f, b);
                $.wB(this, a, b, c, e);
                this.prevValue = d
            }
            ;
            $.Cp.map = $Q;
            $.Cp.bubble = aR;
            $.Cp.choropleth = bR;
            $.Cp.connector = cR;
            $.Cp.marker = dR;
            $.Cp["seat-map"] = eR;
            $.F("anychart.map", $Q);
            $.F("anychart.bubbleMap", aR);
            $.F("anychart.choropleth", bR);
            $.F("anychart.connector", cR);
            $.F("anychart.markerMap", dR);
            $.F("anychart.seatMap", eR);
        }
        ).call(this, $)
    }
    if (!_.theme_map) {
        _.theme_map = 1;
        (function($) {
            $.ra($.fa.anychart.themes.defaultTheme, {
                map: {
                    defaultCalloutSettings: {},
                    defaultSeriesSettings: {
                        base: {
                            normal: {
                                fill: function() {
                                    return this.scaledColor || this.sourceColor
                                },
                                stroke: $.gM,
                                hatchFill: !1,
                                labels: {
                                    anchor: "center-bottom",
                                    enabled: null,
                                    adjustFontSize: {
                                        width: !0,
                                        height: !0
                                    },
                                    format: function() {
                                        return this.getData("name") ? this.getData("name") : this.name ? this.name : this.getData("id") ? this.getData("id") : "lat: " + this.lat + "\nlong: " + this["long"]
                                    }
                                },
                                markers: {
                                    enabled: !1,
                                    disablePointerEvents: !1
                                }
                            },
                            hovered: {
                                fill: "#757575",
                                stroke: {
                                    thickness: .5,
                                    color: "#545f69"
                                },
                                labels: {
                                    enabled: null
                                },
                                markers: {
                                    enabled: null
                                }
                            },
                            selected: {
                                fill: "#333 0.85",
                                stroke: {
                                    thickness: .5,
                                    color: "#545f69"
                                },
                                labels: {
                                    enabled: null
                                },
                                markers: {
                                    enabled: null
                                }
                            },
                            color: null,
                            tooltip: {
                                titleFormat: function() {
                                    return this.name || this.getData("name") || "Tooltip title"
                                },
                                format: function() {
                                    return "Id: " + this.id + "\nValue: " + this.valuePrefix + $.YL(this.value) + this.valuePostfix
                                }
                            },
                            xScale: null,
                            yScale: null,
                            a11y: {
                                titleFormat: "Series named {%SeriesName}"
                            },
                            clip: !1
                        },
                        choropleth: {
                            normal: {
                                labels: {
                                    fontColor: "#212121",
                                    anchor: "center"
                                },
                                markers: {
                                    anchor: null
                                }
                            },
                            colorScale: {}
                        },
                        connector: {
                            startSize: 0,
                            endSize: 0,
                            curvature: .3,
                            normal: {
                                stroke: function() {
                                    return {
                                        thickness: 2,
                                        color: this.sourceColor,
                                        lineJoin: "round"
                                    }
                                },
                                markers: {
                                    position: "middle",
                                    enabled: !0,
                                    size: 15,
                                    stroke: "1.5 #f7f7f7",
                                    rotation: null,
                                    anchor: null,
                                    type: "arrowhead"
                                },
                                labels: {
                                    enabled: !1,
                                    position: "middle",
                                    anchor: null,
                                    format: function() {
                                        return "from: " + this.startPoint.lat + "," + this.startPoint["long"] + "\nto: " + this.endPoint.lat + "," + this.endPoint["long"]
                                    }
                                }
                            },
                            hovered: {
                                stroke: $.hM,
                                markers: {
                                    stroke: "1.5 #f7f7f7",
                                    size: 15
                                }
                            },
                            selected: {
                                stroke: "2 #333 0.85",
                                markers: {
                                    fill: "#333 0.85",
                                    stroke: "1.5 #f7f7f7",
                                    size: 15
                                }
                            },
                            tooltip: {
                                title: {
                                    enabled: !1
                                },
                                separator: {
                                    enabled: !1
                                },
                                format: function() {
                                    return "from: " + this.startPoint.lat + ", " + this.startPoint["long"] + "\nto: " + this.endPoint.lat + ", " + this.endPoint["long"]
                                }
                            }
                        },
                        bubble: {
                            normal: {
                                stroke: function() {
                                    return {
                                        thickness: 2,
                                        color: $.El(this.sourceColor)
                                    }
                                },
                                labels: {
                                    anchor: "center"
                                }
                            },
                            hovered: {
                                fill: "#757575"
                            },
                            selected: {
                                fill: "#333 0.85"
                            },
                            tooltip: {
                                format: function() {
                                    var a = this.id ? "Id: " + this.id : "lat: " + this.lat + "\nlong: " + this["long"];
                                    this.size && (a += "\nValue: " + this.valuePrefix + $.YL(this.size) + this.valuePostfix);
                                    return a
                                }
                            }
                        },
                        marker: {
                            normal: {
                                labels: {
                                    enabled: !0
                                }
                            },
                            hovered: {
                                labels: {
                                    fontWeight: "bold"
                                }
                            },
                            selected: {
                                labels: {
                                    fontWeight: "bold"
                                }
                            },
                            tooltip: {
                                format: function() {
                                    var a = this.id ? "Id: " + this.id : "lat: " + this.lat + "\nlong: " + this["long"];
                                    this.value && (a += "\nValue: " + this.valuePrefix + $.YL(this.value) + this.valuePostfix);
                                    return a
                                }
                            }
                        }
                    },
                    colorRange: {
                        zIndex: 50
                    },
                    geoScale: {
                        maxTicksCount: 1E3,
                        precision: 2
                    },
                    callouts: [],
                    axesSettings: {
                        enabled: !1,
                        title: {
                            padding: 5,
                            fontSize: 13,
                            text: "Axis title",
                            fontColor: "#545f69",
                            zIndex: 10
                        },
                        labels: {
                            enabled: !0,
                            padding: 2,
                            rotation: null,
                            fontSize: 10,
                            anchor: "auto",
                            position: "outside",
                            zIndex: 5
                        },
                        minorLabels: {
                            enabled: null,
                            padding: 2,
                            rotation: null,
                            fontSize: 9,
                            anchor: null,
                            position: "outside",
                            zIndex: 4
                        },
                        overlapMode: "no-overlap",
                        ticks: {
                            enabled: !0,
                            length: 5,
                            position: "outside",
                            stroke: "#CECECE",
                            zIndex: 3
                        },
                        minorTicks: {
                            enabled: !1,
                            length: 2,
                            position: "outside",
                            stroke: "#CECECE",
                            zIndex: 2
                        },
                        drawFirstLabel: !0,
                        drawLastLabel: !0,
                        stroke: "#CECECE"
                    },
                    gridsSettings: {
                        enabled: !1,
                        minorStroke: "none",
                        zIndex: 5
                    },
                    crosshair: {
                        enabled: !1,
                        xStroke: "#969EA5",
                        yStroke: "#969EA5",
                        zIndex: 110,
                        xLabels: [{
                            enabled: null,
                            axisIndex: 2
                        }],
                        yLabels: [{
                            enabled: null,
                            axisIndex: 3
                        }]
                    },
                    unboundRegions: {
                        enabled: !0,
                        fill: "#F7F7F7",
                        stroke: "#e0e0e0"
                    },
                    maxBubbleSize: "10%",
                    minBubbleSize: "1%",
                    geoIdField: "id",
                    interactivity: {
                        copyFormat: function(a) {
                            a = a.seriesStatus;
                            for (var b = "", c = 0, d = a.length; c < d; c++) {
                                var e = a[c];
                                if (e.points.length) {
                                    b += "Series " + e.series.getIndex() + ":\n";
                                    for (var f = 0, h = e.points.length; f < h; f++) {
                                        var k = e.points[f];
                                        b += "id: " + k.id + " index: " + k.index;
                                        f != h - 1 && (b += "\n")
                                    }
                                    c != d - 1 && (b += "\n")
                                }
                            }
                            return b || "no selected points"
                        },
                        drag: !0,
                        zoomOnMouseWheel: !1,
                        keyboardZoomAndMove: !0,
                        zoomOnDoubleClick: !1
                    },
                    minZoomLevel: 1,
                    maxZoomLevel: 10,
                    overlapMode: "no-overlap",
                    crsAnimation: {
                        enabled: !0,
                        duration: 300
                    },
                    legend: {
                        enabled: !1,
                        tooltip: {
                            contentInternal: {
                                background: {
                                    disablePointerEvents: !1
                                }
                            }
                        }
                    },
                    selectPolygonMarqueeFill: "#d3d3d3 0.4",
                    selectPolygonMarqueeStroke: "#d3d3d3",
                    selectPolygonMarqueeMarker: {
                        fill: "#d3d3d3 0.4",
                        stroke: "#d3d3d3",
                        radius: 15
                    }
                },
                choropleth: {},
                bubbleMap: {},
                markerMap: {},
                connector: {},
                seatMap: {}
            });
        }
        ).call(this, $)
    }
    $_ = window.anychart;
    $_.$ = $;
    $_._ = _
});
