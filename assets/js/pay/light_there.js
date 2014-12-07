/* 
 * Code written by Nguyen Van Hung at @imrhung
 * Feel free to re-use or share it.
 * Happy code!!!
 */


!function (a, b, c) {
    b[a] = c
}("onDomReady", this, function (a) {
    "use strict";
    function b(a) {
        if (!v) {
            if (!g.body)
                return e(b);
            for (v = !0; a = w.shift(); )
                e(a)
        }
    }
    function c(a) {
        (t || a.type === i || g[m] === l) && (d(), b())
    }
    function d() {
        t ? (g[s](q, c, j), a[s](i, c, j)) : (g[o](r, c), a[o](k, c))
    }
    function e(a, b) {
        setTimeout(a, +b >= 0 ? b : 1)
    }
    function f(a) {
        v ? e(a) : w.push(a)
    }
    null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", function y() {
        document.removeEventListener("DOMContentLoaded", y, !1), document.readyState = "complete"
    }, !1), document.readyState = "loading");
    var g = a.document, h = g.documentElement, i = "load", j = !1, k = "on" + i, l = "complete", m = "readyState", n = "attachEvent", o = "detachEvent", p = "addEventListener", q = "DOMContentLoaded", r = "onreadystatechange", s = "removeEventListener", t = p in g, u = j, v = j, w = [];
    if (g[m] === l)
        e(b);
    else if (t)
        g[p](q, c, j), a[p](i, c, j);
    else {
        g[n](r, c), a[n](k, c);
        try {
            u = null == a.frameElement && h
        } catch (x) {
        }
        u && u.doScroll && !function z() {
            if (!v) {
                try {
                    u.doScroll("left")
                } catch (a) {
                    return e(z, 50)
                }
                d(), b()
            }
        }()
    }
    return f.version = "1.4.0", f.isReady = function () {
        return v
    }, f
}(this)), document.querySelectorAll || (document.querySelectorAll = function (a) {
    var b, c = document.createElement("style"), d = [];
    for (document.documentElement.firstChild.appendChild(c), document._qsa = [], c.styleSheet.cssText = a + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), c.parentNode.removeChild(c); document._qsa.length; )
        b = document._qsa.shift(), b.style.removeAttribute("x-qsa"), d.push(b);
    return document._qsa = null, d
}), document.querySelector || (document.querySelector = function (a) {
    var b = document.querySelectorAll(a);
    return b.length ? b[0] : null
}), document.getElementsByClassName || (document.getElementsByClassName = function (a) {
    return a = String(a).replace(/^|\s+/g, "."), document.querySelectorAll(a)
}), Object.keys || (Object.keys = function (a) {
    if (a !== Object(a))
        throw TypeError("Object.keys called on non-object");
    var b, c = [];
    for (b in a)
        Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
    return c
}), function (a) {
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    a.atob = a.atob || function (a) {
        a = String(a);
        var c, d = 0, e = [], f = 0, g = 0;
        if (a = a.replace(/\s/g, ""), a.length % 4 === 0 && (a = a.replace(/=+$/, "")), a.length % 4 === 1)
            throw Error("InvalidCharacterError");
        if (/[^+/0-9A-Za-z]/.test(a))
            throw Error("InvalidCharacterError");
        for (; d < a.length; )
            c = b.indexOf(a.charAt(d)), f = f << 6 | c, g += 6, 24 === g && (e.push(String.fromCharCode(f >> 16 & 255)), e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f)), g = 0, f = 0), d += 1;
        return 12 === g ? (f >>= 4, e.push(String.fromCharCode(255 & f))) : 18 === g && (f >>= 2, e.push(String.fromCharCode(f >> 8 & 255)), e.push(String.fromCharCode(255 & f))), e.join("")
    }, a.btoa = a.btoa || function (a) {
        a = String(a);
        var c, d, e, f, g, h, i, j = 0, k = [];
        if (/[^\x00-\xFF]/.test(a))
            throw Error("InvalidCharacterError");
        for (; j < a.length; )
            c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = a.charCodeAt(j++), f = c >> 2, g = (3 & c) << 4 | d >> 4, h = (15 & d) << 2 | e >> 6, i = 63 & e, j === a.length + 2 ? (h = 64, i = 64) : j === a.length + 1 && (i = 64), k.push(b.charAt(f), b.charAt(g), b.charAt(h), b.charAt(i));
        return k.join("")
    }
}(this), function () {
    function a(b, c, d) {
        b.document;
        var e, f = b.currentStyle[c].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/) || [0, 0, ""], g = f[1], h = f[2];
        return d = d ? /%|em/.test(h) && b.parentElement ? a(b.parentElement, "fontSize", null) : 16 : d, e = "fontSize" == c ? d : /width/i.test(c) ? b.clientWidth : b.clientHeight, "%" == h ? g / 100 * e : "cm" == h ? .3937 * g * 96 : "em" == h ? g * d : "in" == h ? 96 * g : "mm" == h ? .3937 * g * 96 / 10 : "pc" == h ? 12 * g * 96 / 72 : "pt" == h ? 96 * g / 72 : g
    }
    function b(a, b) {
        var c = "border" == b ? "Width" : "", d = b + "Top" + c, e = b + "Right" + c, f = b + "Bottom" + c, g = b + "Left" + c;
        a[b] = (a[d] == a[e] && a[d] == a[f] && a[d] == a[g] ? [a[d]] : a[d] == a[f] && a[g] == a[e] ? [a[d], a[e]] : a[g] == a[e] ? [a[d], a[e], a[f]] : [a[d], a[e], a[f], a[g]]).join(" ")
    }
    function c(c) {
        var d, e = this, f = c.currentStyle, g = a(c, "fontSize"), h = function (a) {
            return"-" + a.toLowerCase()
        };
        for (d in f)
            if (Array.prototype.push.call(e, "styleFloat" == d ? "float" : d.replace(/[A-Z]/, h)), "width" == d)
                e[d] = c.offsetWidth + "px";
            else if ("height" == d)
                e[d] = c.offsetHeight + "px";
            else if ("styleFloat" == d)
                e.float = f[d];
            else if (/margin.|padding.|border.+W/.test(d) && "auto" != e[d])
                e[d] = Math.round(a(c, d, g)) + "px";
            else if (/^outline/.test(d))
                try {
                    e[d] = f[d]
                } catch (i) {
                    e.outlineColor = f.color, e.outlineStyle = e.outlineStyle || "none", e.outlineWidth = e.outlineWidth || "0px", e.outline = [e.outlineColor, e.outlineWidth, e.outlineStyle].join(" ")
                }
            else
                e[d] = f[d];
        b(e, "margin"), b(e, "padding"), b(e, "border"), e.fontSize = Math.round(g) + "px"
    }
    window.getComputedStyle || (c.prototype = {constructor: c, getPropertyPriority: function () {
            throw new Error("NotSupportedError: DOM Exception 9")
        }, getPropertyValue: function (a) {
            var b = a.replace(/-([a-z])/g, function (a) {
                return a = a.charAt ? a.split("") : a, a[1].toUpperCase()
            }), c = this[b];
            return c
        }, item: function (a) {
            return this[a]
        }, removeProperty: function () {
            throw new Error("NoModificationAllowedError: DOM Exception 7")
        }, setProperty: function () {
            throw new Error("NoModificationAllowedError: DOM Exception 7")
        }, getPropertyCSSValue: function () {
            throw new Error("NotSupportedError: DOM Exception 9")
        }}, window.getComputedStyle = function (a) {
        return new c(a)
    })
}(), Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function (a) {
    var b = this.__proto__ || this.constructor.prototype;
    return a in this && (!(a in b) || b[a] !== this[a])
}), function (a, b) {
    a.augment = b()
}(this, function () {
    "use strict";
    var a = function () {
    }, b = Array.prototype.slice, c = function (c, d) {
        var e = a.prototype = "function" == typeof c ? c.prototype : c, f = new a, g = d.apply(f, b.call(arguments, 2).concat(e));
        if ("object" == typeof g)
            for (var h in g)
                f[h] = g[h];
        if (!f.hasOwnProperty("constructor"))
            return f;
        var i = f.constructor;
        return i.prototype = f, i
    };
    return c.defclass = function (a) {
        var b = a.constructor;
        return b.prototype = a, b
    }, c.extend = function (a, b) {
        return c(a, function (a) {
            return this.uber = a, b
        })
    }, c
}), function (a, b) {
    function c(a, b, c, f) {
        var g = d(c.substr(c.lastIndexOf(a.domain)), a);
        g && e(null, f, g, b)
    }
    function d(a, b) {
        for (var c = {theme: p(A.settings.themes.gray, null), stylesheets: b.stylesheets, holderURL: []}, d = !1, e = String.fromCharCode(11), f = a.replace(/([^\\])\//g, "$1" + e).split(e), g = /%[0-9a-f]{2}/gi, h = f.length, i = 0; h > i; i++) {
            var j = f[i];
            if (j.match(g))
                try {
                    j = decodeURIComponent(j)
                } catch (k) {
                    j = f[i]
                }
            var l = !1;
            if (A.flags.dimensions.match(j))
                d = !0, c.dimensions = A.flags.dimensions.output(j), l = !0;
            else if (A.flags.fluid.match(j))
                d = !0, c.dimensions = A.flags.fluid.output(j), c.fluid = !0, l = !0;
            else if (A.flags.textmode.match(j))
                c.textmode = A.flags.textmode.output(j), l = !0;
            else if (A.flags.colors.match(j)) {
                var m = A.flags.colors.output(j);
                c.theme = p(c.theme, m), l = !0
            } else if (b.themes[j])
                b.themes.hasOwnProperty(j) && (c.theme = p(b.themes[j], null)), l = !0;
            else if (A.flags.font.match(j))
                c.font = A.flags.font.output(j), l = !0;
            else if (A.flags.auto.match(j))
                c.auto = !0, l = !0;
            else if (A.flags.text.match(j))
                c.text = A.flags.text.output(j), l = !0;
            else if (A.flags.random.match(j)) {
                null == A.vars.cache.themeKeys && (A.vars.cache.themeKeys = Object.keys(b.themes));
                var n = A.vars.cache.themeKeys[0 | Math.random() * A.vars.cache.themeKeys.length];
                c.theme = p(b.themes[n], null), l = !0
            }
            l && c.holderURL.push(j)
        }
        return c.holderURL.unshift(b.domain), c.holderURL = c.holderURL.join("/"), d ? c : !1
    }
    function e(a, b, c, d) {
        var e = c.dimensions, g = c.theme, h = e.width + "x" + e.height;
        if (a = null == a ? c.fluid ? "fluid" : "image" : a, null != c.text && (g.text = c.text, "object" === b.nodeName.toLowerCase())) {
            for (var j = g.text.split("\\n"), l = 0; l < j.length; l++)
                j[l] = v(j[l]);
            g.text = j.join("\\n")
        }
        var n = c.holderURL, o = p(d, null);
        c.font && (g.font = c.font, !o.noFontFallback && "img" === b.nodeName.toLowerCase() && A.setup.supportsCanvas && "svg" === o.renderer && (o = p(o, {renderer: "canvas"}))), c.font && "canvas" == o.renderer && (o.reRender = !0), "background" == a ? null == b.getAttribute("data-background-src") && m(b, {"data-background-src": n}) : m(b, {"data-src": n}), c.theme = g, b.holderData = {flags: c, renderSettings: o}, ("image" == a || "fluid" == a) && m(b, {alt: g.text ? (g.text.length > 16 ? g.text.substring(0, 16) + "…" : g.text) + " [" + h + "]" : h}), "image" == a ? ("html" != o.renderer && c.auto || (b.style.width = e.width + "px", b.style.height = e.height + "px"), "html" == o.renderer ? b.style.backgroundColor = g.background : (f(a, {dimensions: e, theme: g, flags: c}, b, o), c.textmode && "exact" == c.textmode && (A.vars.resizableImages.push(b), i(b)))) : "background" == a && "html" != o.renderer ? f(a, {dimensions: e, theme: g, flags: c}, b, o) : "fluid" == a && ("%" == e.height.slice(-1) ? b.style.height = e.height : null != c.auto && c.auto || (b.style.height = e.height + "px"), "%" == e.width.slice(-1) ? b.style.width = e.width : null != c.auto && c.auto || (b.style.width = e.width + "px"), ("inline" == b.style.display || "" === b.style.display || "none" == b.style.display) && (b.style.display = "block"), k(b), "html" == o.renderer ? b.style.backgroundColor = g.background : (A.vars.resizableImages.push(b), i(b)))
    }
    function f(a, b, c, d) {
        function e() {
            var a = null;
            switch (d.renderer) {
                case"canvas":
                    a = C(i);
                    break;
                case"svg":
                    a = D(i, d);
                    break;
                default:
                    throw"Holder: invalid renderer: " + d.renderer
            }
            return a
        }
        var f = null;
        switch (d.renderer) {
            case"svg":
                if (!A.setup.supportsSVG)
                    return;
                break;
            case"canvas":
                if (!A.setup.supportsCanvas)
                    return;
                break;
            default:
                return
        }
        var h = {width: b.dimensions.width, height: b.dimensions.height, theme: b.theme, flags: b.flags}, i = g(h);
        if ({text: h.text, width: h.width, height: h.height, textHeight: h.font.size, font: h.font.family, fontWeight: h.font.weight, template: h.theme}, f = e(), null == f)
            throw"Holder: couldn't render placeholder";
        "background" == a ? (c.style.backgroundImage = "url(" + f + ")", c.style.backgroundSize = h.width + "px " + h.height + "px") : ("img" === c.nodeName.toLowerCase() ? m(c, {src: f}) : "object" === c.nodeName.toLowerCase() && (m(c, {data: f}), m(c, {type: "image/svg+xml"})), d.reRender && setTimeout(function () {
            var a = e();
            if (null == a)
                throw"Holder: couldn't render placeholder";
            "img" === c.nodeName.toLowerCase() ? m(c, {src: a}) : "object" === c.nodeName.toLowerCase() && (m(c, {data: a}), m(c, {type: "image/svg+xml"}))
        }, 100)), m(c, {"data-holder-rendered": !0})
    }
    function g(a) {
        function b(a, b, c, d) {
            b.width = c, b.height = d, a.width = Math.max(a.width, b.width), a.height += b.height, a.add(b)
        }
        switch (a.font = {
                family: a.theme.font ? a.theme.font : "Arial, Helvetica, Open Sans, sans-serif", size: h(a.width, a.height, a.theme.size ? a.theme.size : A.defaults.size), units: a.theme.units ? a.theme.units : A.defaults.units, weight: a.theme.fontweight ? a.theme.fontweight : "bold"}, a.text = a.theme.text ? a.theme.text : Math.floor(a.width) + "x" + Math.floor(a.height), a.flags.textmode){case"literal":
                a.text = a.flags.dimensions.width + "x" + a.flags.dimensions.height;
                break;
            case"exact":
                if (!a.flags.exactDimensions)
                    break;
                a.text = Math.floor(a.flags.exactDimensions.width) + "x" + Math.floor(a.flags.exactDimensions.height)
        }
        var c = new E({width: a.width, height: a.height}), d = c.Shape, e = new d.Rect("holderBg", {fill: a.theme.background});
        e.resize(a.width, a.height), c.root.add(e);
        var f = new d.Group("holderTextGroup", {text: a.text, align: "center", font: a.font, fill: a.theme.foreground});
        f.moveTo(null, null, 1), c.root.add(f);
        var g = f.textPositionData = B(c);
        if (!g)
            throw"Holder: staging fallback not supported yet.";
        f.properties.leading = g.boundingBox.height;
        var i = null, j = null;
        if (g.lineCount > 1) {
            var k = 0, l = 0, m = a.width * A.setup.lineWrapRatio, n = 0;
            j = new d.Group("line" + n);
            for (var o = 0; o < g.words.length; o++) {
                var p = g.words[o];
                i = new d.Text(p.text);
                var q = "\\n" == p.text;
                (k + p.width >= m || q === !0) && (b(f, j, k, f.properties.leading), k = 0, l += f.properties.leading, n += 1, j = new d.Group("line" + n), j.y = l), q !== !0 && (i.moveTo(k, 0), k += g.spaceWidth + p.width, j.add(i))
            }
            b(f, j, k, f.properties.leading);
            for (var r in f.children)
                j = f.children[r], j.moveTo((f.width - j.width) / 2, null, null);
            f.moveTo((a.width - f.width) / 2, (a.height - f.height) / 2, null), (a.height - f.height) / 2 < 0 && f.moveTo(null, 0, null)
        } else
            i = new d.Text(a.text), j = new d.Group("line0"), j.add(i), f.add(j), f.moveTo((a.width - g.boundingBox.width) / 2, (a.height - g.boundingBox.height) / 2, null);
        return c
    }
    function h(a, b, c) {
        b = parseInt(b, 10), a = parseInt(a, 10);
        var d = Math.max(b, a), e = Math.min(b, a), f = A.defaults.scale, g = Math.min(.75 * e, .75 * d * f);
        return Math.round(Math.max(c, g))
    }
    function i(a) {
        var b;
        b = null == a || null == a.nodeType ? A.vars.resizableImages : [a];
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                var d = b[c];
                if (d.holderData) {
                    var e = d.holderData.flags, g = j(d, z.invisibleErrorFn(i));
                    if (g) {
                        if (e.fluid && e.auto) {
                            var h = d.holderData.fluidConfig;
                            switch (h.mode) {
                                case"width":
                                    g.height = g.width / h.ratio;
                                    break;
                                case"height":
                                    g.width = g.height * h.ratio
                                }
                        }
                        var k = {dimensions: g, theme: e.theme, flags: e};
                        e.textmode && "exact" == e.textmode && (e.exactDimensions = g, k.dimensions = e.dimensions), f("image", k, d, d.holderData.renderSettings)
                    }
                }
            }
    }
    function j(a, b) {
        var c = {height: a.clientHeight, width: a.clientWidth};
        return c.height || c.width ? (a.removeAttribute("data-holder-invisible"), c) : (m(a, {"data-holder-invisible": !0}), void b.call(this, a))
    }
    function k(a) {
        if (a.holderData) {
            var b = j(a, z.invisibleErrorFn(k));
            if (b) {
                var c = a.holderData.flags, d = {fluidHeight: "%" == c.dimensions.height.slice(-1), fluidWidth: "%" == c.dimensions.width.slice(-1), mode: null, initialDimensions: b};
                d.fluidWidth && !d.fluidHeight ? (d.mode = "width", d.ratio = d.initialDimensions.width / parseFloat(c.dimensions.height)) : !d.fluidWidth && d.fluidHeight && (d.mode = "height", d.ratio = parseFloat(c.dimensions.width) / d.initialDimensions.height), a.holderData.fluidConfig = d
            }
        }
    }
    function l(a, b) {
        return null == b ? y.createElement(a) : y.createElementNS(b, a)
    }
    function m(a, b) {
        for (var c in b)
            a.setAttribute(c, b[c])
    }
    function n(a, b, c) {
        if (null == a) {
            a = l("svg", x);
            var d = l("defs", x);
            a.appendChild(d)
        }
        return a.webkitMatchesSelector && a.setAttribute("xmlns", x), m(a, {width: b, height: c, viewBox: "0 0 " + b + " " + c, preserveAspectRatio: "none"}), a
    }
    function o(a, c) {
        if (b.XMLSerializer) {
            var d = new XMLSerializer, e = "", f = c.stylesheets;
            if (a.querySelector("defs"), c.svgXMLStylesheet) {
                for (var g = (new DOMParser).parseFromString("<xml />", "application/xml"), h = f.length - 1; h >= 0; h--) {
                    var i = g.createProcessingInstruction("xml-stylesheet", 'href="' + f[h] + '" rel="stylesheet"');
                    g.insertBefore(i, g.firstChild)
                }
                var j = g.createProcessingInstruction("xml", 'version="1.0" encoding="UTF-8" standalone="yes"');
                g.insertBefore(j, g.firstChild), g.removeChild(g.documentElement), e = d.serializeToString(g)
            }
            var k = d.serializeToString(a);
            return k = k.replace(/\&amp;(\#[0-9]{2,}\;)/g, "&$1"), e + k
        }
    }
    function p(a, b) {
        var c = {};
        for (var d in a)
            a.hasOwnProperty(d) && (c[d] = a[d]);
        if (null != b)
            for (var e in b)
                b.hasOwnProperty(e) && (c[e] = b[e]);
        return c
    }
    function q(a) {
        var b = [];
        for (var c in a)
            a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
        return b.join(";")
    }
    function r(a) {
        A.vars.debounceTimer || a.call(this), A.vars.debounceTimer && clearTimeout(A.vars.debounceTimer), A.vars.debounceTimer = setTimeout(function () {
            A.vars.debounceTimer = null, a.call(this)
        }, A.setup.debounce)
    }
    function s() {
        r(function () {
            i(null)
        })
    }
    function t(a) {
        var c = null;
        return"string" == typeof a ? c = y.querySelectorAll(a) : b.NodeList && a instanceof b.NodeList ? c = a : b.Node && a instanceof b.Node ? c = [a] : b.HTMLCollection && a instanceof b.HTMLCollection ? c = a : null === a && (c = []), c
    }
    function u(a, b) {
        var c = new Image;
        c.onerror = function () {
            b.call(this, !1)
        }, c.onload = function () {
            b.call(this, !0)
        }, c.src = a
    }
    function v(a) {
        for (var b = [], c = 0, d = a.length - 1; d >= 0; d--)
            c = a.charCodeAt(d), b.unshift(c > 128 ? ["&#", c, ";"].join("") : a[d]);
        return b.join("")
    }
    function w(a) {
        return a.replace(/&#(\d+);/g, function (a, b) {
            return String.fromCharCode(b)
        })
    }
    var x = "http://www.w3.org/2000/svg", y = b.document, z = {addTheme: function (a, b) {
            return null != a && null != b && (A.settings.themes[a] = b), delete A.vars.cache.themeKeys, this
        }, addImage: function (a, b) {
            var c = y.querySelectorAll(b);
            if (c.length)
                for (var d = 0, e = c.length; e > d; d++) {
                    var f = l("img");
                    m(f, {"data-src": a}), c[d].appendChild(f)
                }
            return this
        }, run: function (a) {
            a = a || {};
            var f = {};
            A.vars.preempted = !0;
            var g = p(A.settings, a);
            f.renderer = g.renderer ? g.renderer : A.setup.renderer, -1 === A.setup.renderers.join(",").indexOf(f.renderer) && (f.renderer = A.setup.supportsSVG ? "svg" : A.setup.supportsCanvas ? "canvas" : "html"), g.use_canvas ? f.renderer = "canvas" : g.use_svg && (f.renderer = "svg");
            var h = t(g.images), i = t(g.bgnodes), j = t(g.stylenodes), k = t(g.objects);
            f.stylesheets = [], f.svgXMLStylesheet = !0, f.noFontFallback = g.noFontFallback ? g.noFontFallback : !1;
            for (var m = 0; m < j.length; m++) {
                var n = j[m];
                if (n.attributes.rel && n.attributes.href && "stylesheet" == n.attributes.rel.value) {
                    var o = n.attributes.href.value, q = l("a");
                    q.href = o;
                    var r = q.protocol + "//" + q.host + q.pathname + q.search;
                    f.stylesheets.push(r)
                }
            }
            for (m = 0; m < i.length; m++) {
                var s = b.getComputedStyle(i[m], null).getPropertyValue("background-image"), v = i[m].getAttribute("data-background-src"), w = null;
                w = null == v ? s : v;
                var x = null, y = "?" + g.domain + "/";
                if (0 === w.indexOf(y))
                    x = w.slice(1);
                else if (-1 != w.indexOf(y)) {
                    var z = w.substr(w.indexOf(y)).slice(1), B = z.match(/([^\"]*)"?\)/);
                    null != B && (x = B[1])
                }
                if (null != x) {
                    var C = d(x, g);
                    C && e("background", i[m], C, f)
                }
            }
            for (m = 0; m < k.length; m++) {
                var D = k[m], E = {};
                try {
                    E.data = D.getAttribute("data"), E.dataSrc = D.getAttribute("data-src")
                } catch (F) {
                }
                var G = null != E.data && 0 === E.data.indexOf(g.domain), H = null != E.dataSrc && 0 === E.dataSrc.indexOf(g.domain);
                G ? c(g, f, E.data, D) : H && c(g, f, E.dataSrc, D)
            }
            for (m = 0; m < h.length; m++) {
                var I = h[m], J = {};
                try {
                    J.src = I.getAttribute("src"), J.dataSrc = I.getAttribute("data-src"), J.rendered = I.getAttribute("data-holder-rendered")
                } catch (F) {
                }
                var K = null != J.src, L = null != J.dataSrc && 0 === J.dataSrc.indexOf(g.domain), M = null != J.rendered && "true" == J.rendered;
                K ? 0 === J.src.indexOf(g.domain) ? c(g, f, J.src, I) : L && (M ? c(g, f, J.dataSrc, I) : !function (a, b, d, e, f) {
                    u(a, function (a) {
                        a || c(b, d, e, f)
                    })
                }(J.src, g, f, J.dataSrc, I)) : L && c(g, f, J.dataSrc, I)
            }
            return this
        }, invisibleErrorFn: function () {
            return function (a) {
                if (a.hasAttribute("data-holder-invisible"))
                    throw"Holder: invisible placeholder"
            }
        }};
    z.add_theme = z.addTheme, z.add_image = z.addImage, z.invisible_error_fn = z.invisibleErrorFn;
    var A = {settings: {domain: "holder.js", images: "img", objects: "object", bgnodes: "body .holderjs", stylenodes: "head link.holderjs", stylesheets: [], themes: {gray: {background: "#EEEEEE", foreground: "#AAAAAA"}, social: {background: "#3a5a97", foreground: "#FFFFFF"}, industrial: {background: "#434A52", foreground: "#C2F200"}, sky: {background: "#0D8FDB", foreground: "#FFFFFF"}, vine: {background: "#39DBAC", foreground: "#1E292C"}, lava: {background: "#F8591A", foreground: "#1C2846"}}}, defaults: {size: 10, units: "pt", scale: 1 / 16}, flags: {dimensions: {regex: /^(\d+)x(\d+)$/, output: function (a) {
                    var b = this.regex.exec(a);
                    return{width: +b[1], height: +b[2]}
                }}, fluid: {regex: /^([0-9]+%?)x([0-9]+%?)$/, output: function (a) {
                    var b = this.regex.exec(a);
                    return{width: b[1], height: b[2]}
                }}, colors: {regex: /(?:#|\^)([0-9a-f]{3,})\:(?:#|\^)([0-9a-f]{3,})/i, output: function (a) {
                    var b = this.regex.exec(a);
                    return{foreground: "#" + b[2], background: "#" + b[1]}
                }}, text: {regex: /text\:(.*)/, output: function (a) {
                    return this.regex.exec(a)[1].replace("\\/", "/")
                }}, font: {regex: /font\:(.*)/, output: function (a) {
                    return this.regex.exec(a)[1]
                }}, auto: {regex: /^auto$/}, textmode: {regex: /textmode\:(.*)/, output: function (a) {
                    return this.regex.exec(a)[1]
                }}, random: {regex: /^random$/}}}, B = function () {
        var a = null, b = null, c = null;
        return function (d) {
            var e = d.root;
            if (A.setup.supportsSVG) {
                var f = !1, g = function (a) {
                    return y.createTextNode(a)
                };
                null == a && (f = !0), a = n(a, e.properties.width, e.properties.height), f && (b = l("text", x), c = g(null), m(b, {x: 0}), b.appendChild(c), a.appendChild(b), y.body.appendChild(a), a.style.visibility = "hidden", a.style.position = "absolute", a.style.top = "-100%", a.style.left = "-100%");
                var h = e.children.holderTextGroup, i = h.properties;
                m(b, {y: i.font.size, style: q({"font-weight": i.font.weight, "font-size": i.font.size + i.font.units, "font-family": i.font.family, "dominant-baseline": "middle"})}), c.nodeValue = i.text;
                var j = b.getBBox(), k = Math.ceil(j.width / (e.properties.width * A.setup.lineWrapRatio)), o = i.text.split(" "), p = i.text.match(/\\n/g);
                k += null == p ? 0 : p.length, c.nodeValue = i.text.replace(/[ ]+/g, "");
                var r = b.getComputedTextLength(), s = j.width - r, t = Math.round(s / Math.max(1, o.length - 1)), u = [];
                if (k > 1) {
                    c.nodeValue = "";
                    for (var v = 0; v < o.length; v++)
                        if (0 !== o[v].length) {
                            c.nodeValue = w(o[v]);
                            var z = b.getBBox();
                            u.push({text: o[v], width: z.width})
                        }
                }
                return{spaceWidth: t, lineCount: k, boundingBox: j, words: u}
            }
            return!1
        }
    }(), C = function () {
        var a = l("canvas"), b = null;
        return function (c) {
            null == b && (b = a.getContext("2d"));
            var d = c.root;
            a.width = A.dpr(d.properties.width), a.height = A.dpr(d.properties.height), b.textBaseline = "middle", b.fillStyle = d.children.holderBg.properties.fill, b.fillRect(0, 0, A.dpr(d.children.holderBg.width), A.dpr(d.children.holderBg.height));
            var e = d.children.holderTextGroup;
            e.properties, b.font = e.properties.font.weight + " " + A.dpr(e.properties.font.size) + e.properties.font.units + " " + e.properties.font.family + ", monospace", b.fillStyle = e.properties.fill;
            for (var f in e.children) {
                var g = e.children[f];
                for (var h in g.children) {
                    var i = g.children[h], j = A.dpr(e.x + g.x + i.x), k = A.dpr(e.y + g.y + i.y + e.properties.leading / 2);
                    b.fillText(i.properties.text, j, k)
                }
            }
            return a.toDataURL("image/png")
        }
    }(), D = function () {
        if (b.XMLSerializer) {
            var a = n(null, 0, 0), c = l("rect", x);
            return a.appendChild(c), function (b, d) {
                var e = b.root;
                n(a, e.properties.width, e.properties.height);
                for (var f = a.querySelectorAll("g"), g = 0; g < f.length; g++)
                    f[g].parentNode.removeChild(f[g]);
                m(c, {width: e.children.holderBg.width, height: e.children.holderBg.height, fill: e.children.holderBg.properties.fill});
                var h = e.children.holderTextGroup, i = h.properties, j = l("g", x);
                a.appendChild(j);
                for (var k in h.children) {
                    var p = h.children[k];
                    for (var r in p.children) {
                        var s = p.children[r], t = h.x + p.x + s.x, u = h.y + p.y + s.y + h.properties.leading / 2, v = l("text", x), w = y.createTextNode(null);
                        m(v, {x: t, y: u, style: q({fill: i.fill, "font-weight": i.font.weight, "font-family": i.font.family + ", monospace", "font-size": i.font.size + i.font.units, "dominant-baseline": "central"})}), w.nodeValue = s.properties.text, v.appendChild(w), j.appendChild(v)
                    }
                }
                var z = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(o(a, d))));
                return z
            }
        }
    }(), E = function (a) {
        function b(a, b) {
            for (var c in b)
                a[c] = b[c];
            return a
        }
        var c = 1, d = augment.defclass({constructor: function (a) {
                c++, this.parent = null, this.children = {}, this.id = c, this.name = "n" + c, null != a && (this.name = a), this.x = 0, this.y = 0, this.z = 0, this.width = 0, this.height = 0
            }, resize: function (a, b) {
                null != a && (this.width = a), null != b && (this.height = b)
            }, moveTo: function (a, b, c) {
                this.x = null != a ? a : this.x, this.y = null != b ? b : this.y, this.z = null != c ? c : this.z
            }, add: function (a) {
                var b = a.name;
                if (null != this.children[b])
                    throw"SceneGraph: child with that name already exists: " + b;
                this.children[b] = a, a.parent = this
            }}), e = augment(d, function (b) {
            this.constructor = function () {
                b.constructor.call(this, "root"), this.properties = a
            }
        }), f = augment(d, function (a) {
            function c(c, d) {
                if (a.constructor.call(this, c), this.properties = {fill: "#000"}, null != d)
                    b(this.properties, d);
                else if (null != c && "string" != typeof c)
                    throw"SceneGraph: invalid node name"
            }
            this.Group = augment.extend(this, {constructor: c, type: "group"}), this.Rect = augment.extend(this, {constructor: c, type: "rect"}), this.Text = augment.extend(this, {constructor: function (a) {
                    c.call(this), this.properties.text = a
                }, type: "text"})
        }), g = new e;
        return this.Shape = f, this.root = g, this
    };
    for (var F in A.flags)
        A.flags.hasOwnProperty(F) && (A.flags[F].match = function (a) {
            return a.match(this.regex)
        });
    A.setup = {renderer: "html", debounce: 100, ratio: 1, supportsCanvas: !1, supportsSVG: !1, lineWrapRatio: .9, renderers: ["html", "canvas", "svg"]}, A.dpr = function (a) {
        return a * A.setup.ratio
    }, A.vars = {preempted: !1, resizableImages: [], debounceTimer: null, cache: {}}, function () {
        var a = 1, c = 1, d = l("canvas"), e = null;
        d.getContext && -1 != d.toDataURL("image/png").indexOf("data:image/png") && (A.setup.renderer = "canvas", e = d.getContext("2d"), A.setup.supportsCanvas = !0), A.setup.supportsCanvas && (a = b.devicePixelRatio || 1, c = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1), A.setup.ratio = a / c, y.createElementNS && y.createElementNS(x, "svg").createSVGRect && (A.setup.renderer = "svg", A.setup.supportsSVG = !0)
    }(), a(z, "Holder", b), b.onDomReady && b.onDomReady(function () {
        A.vars.preempted || z.run(), b.addEventListener ? (b.addEventListener("resize", s, !1), b.addEventListener("orientationchange", s, !1)) : b.attachEvent("onresize", s), "object" == typeof b.Turbolinks && b.document.addEventListener("page:change", function () {
            z.run()
        })
    })
}(function (a, b, c) {
    var d = "function" == typeof define && define.amd;
    d ? define(a) : c[b] = a
}, this),
        !function (a) {
            "use strict";
            function b(a) {
                return a.replace(/,/g, ".").replace(/[^0-9\.]/g, "")
            }
            function c(a) {
                return parseFloat(b(a)) >= 10
            }
            var d, e = {bridge: null, version: "0.0.0", disabled: null, outdated: null, ready: null}, f = {}, g = 0, h = {}, i = 0, j = {}, k = null, l = null, m = function () {
                var a, b, c, d, e = "ZeroClipboard.swf";
                if (document.currentScript && (d = document.currentScript.src))
                    ;
                else {
                    var f = document.getElementsByTagName("script");
                    if ("readyState"in f[0])
                        for (a = f.length; a-- && ("interactive" !== f[a].readyState || !(d = f[a].src)); )
                            ;
                    else if ("loading" === document.readyState)
                        d = f[f.length - 1].src;
                    else {
                        for (a = f.length; a--; ) {
                            if (c = f[a].src, !c) {
                                b = null;
                                break
                            }
                            if (c = c.split("#")[0].split("?")[0], c = c.slice(0, c.lastIndexOf("/") + 1), null == b)
                                b = c;
                            else if (b !== c) {
                                b = null;
                                break
                            }
                        }
                        null !== b && (d = b)
                    }
                }
                return d && (d = d.split("#")[0].split("?")[0], e = d.slice(0, d.lastIndexOf("/") + 1) + e), e
            }(), n = function () {
                var a = /\-([a-z])/g, b = function (a, b) {
                    return b.toUpperCase()
                };
                return function (c) {
                    return c.replace(a, b)
                }
            }(), o = function (b, c) {
                var d, e, f;
                return a.getComputedStyle ? d = a.getComputedStyle(b, null).getPropertyValue(c) : (e = n(c), d = b.currentStyle ? b.currentStyle[e] : b.style[e]), "cursor" !== c || d && "auto" !== d || (f = b.tagName.toLowerCase(), "a" !== f) ? d : "pointer"
            }, p = function (b) {
                b || (b = a.event);
                var c;
                this !== a ? c = this : b.target ? c = b.target : b.srcElement && (c = b.srcElement), K.activate(c)
            }, q = function (a, b, c) {
                a && 1 === a.nodeType && (a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c))
            }, r = function (a, b, c) {
                a && 1 === a.nodeType && (a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c))
            }, s = function (a, b) {
                if (!a || 1 !== a.nodeType)
                    return a;
                if (a.classList)
                    return a.classList.contains(b) || a.classList.add(b), a;
                if (b && "string" == typeof b) {
                    var c = (b || "").split(/\s+/);
                    if (1 === a.nodeType)
                        if (a.className) {
                            for (var d = " " + a.className + " ", e = a.className, f = 0, g = c.length; g > f; f++)
                                d.indexOf(" " + c[f] + " ") < 0 && (e += " " + c[f]);
                            a.className = e.replace(/^\s+|\s+$/g, "")
                        } else
                            a.className = b
                }
                return a
            }, t = function (a, b) {
                if (!a || 1 !== a.nodeType)
                    return a;
                if (a.classList)
                    return a.classList.contains(b) && a.classList.remove(b), a;
                if (b && "string" == typeof b || void 0 === b) {
                    var c = (b || "").split(/\s+/);
                    if (1 === a.nodeType && a.className)
                        if (b) {
                            for (var d = (" " + a.className + " ").replace(/[\n\t]/g, " "), e = 0, f = c.length; f > e; e++)
                                d = d.replace(" " + c[e] + " ", " ");
                            a.className = d.replace(/^\s+|\s+$/g, "")
                        } else
                            a.className = ""
                }
                return a
            }, u = function () {
                var a, b, c, d = 1;
                return"function" == typeof document.body.getBoundingClientRect && (a = document.body.getBoundingClientRect(), b = a.right - a.left, c = document.body.offsetWidth, d = Math.round(b / c * 100) / 100), d
            }, v = function (b, c) {
                var d = {left: 0, top: 0, width: 0, height: 0, zIndex: B(c) - 1};
                if (b.getBoundingClientRect) {
                    var e, f, g, h = b.getBoundingClientRect();
                    "pageXOffset"in a && "pageYOffset"in a ? (e = a.pageXOffset, f = a.pageYOffset) : (g = u(), e = Math.round(document.documentElement.scrollLeft / g), f = Math.round(document.documentElement.scrollTop / g));
                    var i = document.documentElement.clientLeft || 0, j = document.documentElement.clientTop || 0;
                    d.left = h.left + e - i, d.top = h.top + f - j, d.width = "width"in h ? h.width : h.right - h.left, d.height = "height"in h ? h.height : h.bottom - h.top
                }
                return d
            }, w = function (a, b) {
                var c = null == b || b && b.cacheBust === !0 && b.useNoCache === !0;
                return c ? (-1 === a.indexOf("?") ? "?" : "&") + "noCache=" + (new Date).getTime() : ""
            }, x = function (b) {
                var c, d, e, f = [], g = [], h = [];
                if (b.trustedOrigins && ("string" == typeof b.trustedOrigins ? g.push(b.trustedOrigins) : "object" == typeof b.trustedOrigins && "length"in b.trustedOrigins && (g = g.concat(b.trustedOrigins))), b.trustedDomains && ("string" == typeof b.trustedDomains ? g.push(b.trustedDomains) : "object" == typeof b.trustedDomains && "length"in b.trustedDomains && (g = g.concat(b.trustedDomains))), g.length)
                    for (c = 0, d = g.length; d > c; c++)
                        if (g.hasOwnProperty(c) && g[c] && "string" == typeof g[c]) {
                            if (e = E(g[c]), !e)
                                continue;
                            if ("*" === e) {
                                h = [e];
                                break
                            }
                            h.push.apply(h, [e, "//" + e, a.location.protocol + "//" + e])
                        }
                return h.length && f.push("trustedOrigins=" + encodeURIComponent(h.join(","))), "string" == typeof b.jsModuleId && b.jsModuleId && f.push("jsModuleId=" + encodeURIComponent(b.jsModuleId)), f.join("&")
            }, y = function (a, b, c) {
                if ("function" == typeof b.indexOf)
                    return b.indexOf(a, c);
                var d, e = b.length;
                for ("undefined" == typeof c?c = 0:0 > c && (c = e + c), d = c; e > d; d++)
                    if (b.hasOwnProperty(d) && b[d] === a)
                        return d;
                return-1
            }, z = function (a) {
                if ("string" == typeof a)
                    throw new TypeError("ZeroClipboard doesn't accept query strings.");
                return a.length ? a : [a]
            }, A = function (b, c, d, e) {
                e ? a.setTimeout(function () {
                    b.apply(c, d)
                }, 0) : b.apply(c, d)
            }, B = function (a) {
                var b, c;
                return a && ("number" == typeof a && a > 0 ? b = a : "string" == typeof a && (c = parseInt(a, 10)) && !isNaN(c) && c > 0 && (b = c)), b || ("number" == typeof N.zIndex && N.zIndex > 0 ? b = N.zIndex : "string" == typeof N.zIndex && (c = parseInt(N.zIndex, 10)) && !isNaN(c) && c > 0 && (b = c)), b || 0
            }, C = function (a, b) {
                if (a && b !== !1 && "undefined" != typeof console && console && (console.warn || console.log)) {
                    var c = "`" + a + "` is deprecated. See docs for more info:\n    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";
                    console.warn ? console.warn(c) : console.log(c)
                }
            }, D = function () {
                var a, b, c, d, e, f, g = arguments[0] || {};
                for (a = 1, b = arguments.length; b > a; a++)
                    if (null != (c = arguments[a]))
                        for (d in c)
                            if (c.hasOwnProperty(d)) {
                                if (e = g[d], f = c[d], g === f)
                                    continue;
                                void 0 !== f && (g[d] = f)
                            }
                return g
            }, E = function (a) {
                if (null == a || "" === a)
                    return null;
                if (a = a.replace(/^\s+|\s+$/g, ""), "" === a)
                    return null;
                var b = a.indexOf("//");
                a = -1 === b ? a : a.slice(b + 2);
                var c = a.indexOf("/");
                return a = -1 === c ? a : -1 === b || 0 === c ? null : a.slice(0, c), a && ".swf" === a.slice(-4).toLowerCase() ? null : a || null
            }, F = function () {
                var a = function (a, b) {
                    var c, d, e;
                    if (null != a && "*" !== b[0] && ("string" == typeof a && (a = [a]), "object" == typeof a && "length"in a))
                        for (c = 0, d = a.length; d > c; c++)
                            if (a.hasOwnProperty(c) && (e = E(a[c]))) {
                                if ("*" === e) {
                                    b.length = 0, b.push("*");
                                    break
                                }
                                -1 === y(e, b) && b.push(e)
                            }
                }, b = {always: "always", samedomain: "sameDomain", never: "never"};
                return function (c, d) {
                    var e, f = d.allowScriptAccess;
                    if ("string" == typeof f && (e = f.toLowerCase()) && /^always|samedomain|never$/.test(e))
                        return b[e];
                    var g = E(d.moviePath);
                    null === g && (g = c);
                    var h = [];
                    a(d.trustedOrigins, h), a(d.trustedDomains, h);
                    var i = h.length;
                    if (i > 0) {
                        if (1 === i && "*" === h[0])
                            return"always";
                        if (-1 !== y(c, h))
                            return 1 === i && c === g ? "sameDomain" : "always"
                    }
                    return"never"
                }
            }(), G = function (a) {
                if (null == a)
                    return[];
                if (Object.keys)
                    return Object.keys(a);
                var b = [];
                for (var c in a)
                    a.hasOwnProperty(c) && b.push(c);
                return b
            }, H = function (a) {
                if (a)
                    for (var b in a)
                        a.hasOwnProperty(b) && delete a[b];
                return a
            }, I = function () {
                try {
                    return document.activeElement
                } catch (a) {
                }
                return null
            }, J = function () {
                var a = !1;
                if ("boolean" == typeof e.disabled)
                    a = e.disabled === !1;
                else {
                    if ("function" == typeof ActiveXObject)
                        try {
                            new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (a = !0)
                        } catch (b) {
                        }
                    !a && navigator.mimeTypes["application/x-shockwave-flash"] && (a = !0)
                }
                return a
            }, K = function (a, b) {
                return this instanceof K ? (this.id = "" + g++, h[this.id] = {instance: this, elements: [], handlers: {}}, a && this.clip(a), "undefined" != typeof b && (C("new ZeroClipboard(elements, options)", N.debug), K.config(b)), this.options = K.config(), "boolean" != typeof e.disabled && (e.disabled = !J()), void(e.disabled === !1 && e.outdated !== !0 && null === e.bridge && (e.outdated = !1, e.ready = !1, O()))) : new K(a, b)
            };
            K.prototype.setText = function (a) {
                return a && "" !== a && (f["text/plain"] = a, e.ready === !0 && e.bridge && "function" == typeof e.bridge.setText ? e.bridge.setText(a) : e.ready = !1), this
            }, K.prototype.setSize = function (a, b) {
                return e.ready === !0 && e.bridge && "function" == typeof e.bridge.setSize ? e.bridge.setSize(a, b) : e.ready = !1, this
            };
            var L = function (a) {
                e.ready === !0 && e.bridge && "function" == typeof e.bridge.setHandCursor ? e.bridge.setHandCursor(a) : e.ready = !1
            };
            K.prototype.destroy = function () {
                this.unclip(), this.off(), delete h[this.id]
            };
            var M = function () {
                var a, b, c, d = [], e = G(h);
                for (a = 0, b = e.length; b > a; a++)
                    c = h[e[a]].instance, c && c instanceof K && d.push(c);
                return d
            };
            K.version = "1.3.5";
            var N = {swfPath: m, trustedDomains: a.location.host ? [a.location.host] : [], cacheBust: !0, forceHandCursor: !1, zIndex: 999999999, debug: !0, title: null, autoActivate: !0};
            K.config = function (a) {
                if ("object" == typeof a && null !== a && D(N, a), "string" != typeof a || !a) {
                    var b = {};
                    for (var c in N)
                        N.hasOwnProperty(c) && (b[c] = "object" == typeof N[c] && null !== N[c] ? "length"in N[c] ? N[c].slice(0) : D({}, N[c]) : N[c]);
                    return b
                }
                return N.hasOwnProperty(a) ? N[a] : void 0
            }, K.destroy = function () {
                K.deactivate();
                for (var a in h)
                    if (h.hasOwnProperty(a) && h[a]) {
                        var b = h[a].instance;
                        b && "function" == typeof b.destroy && b.destroy()
                    }
                var c = P(e.bridge);
                c && c.parentNode && (c.parentNode.removeChild(c), e.ready = null, e.bridge = null)
            }, K.activate = function (a) {
                d && (t(d, N.hoverClass), t(d, N.activeClass)), d = a, s(a, N.hoverClass), Q();
                var b = N.title || a.getAttribute("title");
                if (b) {
                    var c = P(e.bridge);
                    c && c.setAttribute("title", b)
                }
                var f = N.forceHandCursor === !0 || "pointer" === o(a, "cursor");
                L(f)
            }, K.deactivate = function () {
                var a = P(e.bridge);
                a && (a.style.left = "0px", a.style.top = "-9999px", a.removeAttribute("title")), d && (t(d, N.hoverClass), t(d, N.activeClass), d = null)
            };
            var O = function () {
                var b, c, d = document.getElementById("global-zeroclipboard-html-bridge");
                if (!d) {
                    var f = K.config();
                    f.jsModuleId = "string" == typeof k && k || "string" == typeof l && l || null;
                    var g = F(a.location.host, N), h = x(f), i = N.moviePath + w(N.moviePath, N), j = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + i + '"/>         <param name="allowScriptAccess" value="' + g + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + h + '"/>         <embed src="' + i + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="' + g + '"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + h + '"           scale="exactfit">         </embed>       </object>';
                    d = document.createElement("div"), d.id = "global-zeroclipboard-html-bridge", d.setAttribute("class", "global-zeroclipboard-container"), d.style.position = "absolute", d.style.left = "0px", d.style.top = "-9999px", d.style.width = "15px", d.style.height = "15px", d.style.zIndex = "" + B(N.zIndex), document.body.appendChild(d), d.innerHTML = j
                }
                b = document["global-zeroclipboard-flash-bridge"], b && (c = b.length) && (b = b[c - 1]), e.bridge = b || d.children[0].lastElementChild
            }, P = function (a) {
                for (var b = /^OBJECT|EMBED$/, c = a && a.parentNode; c && b.test(c.nodeName) && c.parentNode; )
                    c = c.parentNode;
                return c || null
            }, Q = function () {
                if (d) {
                    var a = v(d, N.zIndex), b = P(e.bridge);
                    b && (b.style.top = a.top + "px", b.style.left = a.left + "px", b.style.width = a.width + "px", b.style.height = a.height + "px", b.style.zIndex = a.zIndex + 1), e.ready === !0 && e.bridge && "function" == typeof e.bridge.setSize ? e.bridge.setSize(a.width, a.height) : e.ready = !1
                }
                return this
            };
            K.prototype.on = function (a, b) {
                var c, d, f, g = {}, i = h[this.id] && h[this.id].handlers;
                if ("string" == typeof a && a)
                    f = a.toLowerCase().split(/\s+/);
                else if ("object" == typeof a && a && "undefined" == typeof b)
                    for (c in a)
                        a.hasOwnProperty(c) && "string" == typeof c && c && "function" == typeof a[c] && this.on(c, a[c]);
                if (f && f.length) {
                    for (c = 0, d = f.length; d > c; c++)
                        a = f[c].replace(/^on/, ""), g[a] = !0, i[a] || (i[a] = []), i[a].push(b);
                    g.noflash && e.disabled && T.call(this, "noflash", {}), g.wrongflash && e.outdated && T.call(this, "wrongflash", {flashVersion: e.version}), g.load && e.ready && T.call(this, "load", {flashVersion: e.version})
                }
                return this
            }, K.prototype.off = function (a, b) {
                var c, d, e, f, g, i = h[this.id] && h[this.id].handlers;
                if (0 === arguments.length)
                    f = G(i);
                else if ("string" == typeof a && a)
                    f = a.split(/\s+/);
                else if ("object" == typeof a && a && "undefined" == typeof b)
                    for (c in a)
                        a.hasOwnProperty(c) && "string" == typeof c && c && "function" == typeof a[c] && this.off(c, a[c]);
                if (f && f.length)
                    for (c = 0, d = f.length; d > c; c++)
                        if (a = f[c].toLowerCase().replace(/^on/, ""), g = i[a], g && g.length)
                            if (b)
                                for (e = y(b, g); - 1 !== e; )
                                    g.splice(e, 1), e = y(b, g, e);
                            else
                                i[a].length = 0;
                return this
            }, K.prototype.handlers = function (a) {
                var b, c = null, d = h[this.id] && h[this.id].handlers;
                if (d) {
                    if ("string" == typeof a && a)
                        return d[a] ? d[a].slice(0) : null;
                    c = {};
                    for (b in d)
                        d.hasOwnProperty(b) && d[b] && (c[b] = d[b].slice(0))
                }
                return c
            };
            var R = function (b, c, d, e) {
                var f = h[this.id] && h[this.id].handlers[b];
                if (f && f.length) {
                    var g, i, j, k = c || this;
                    for (g = 0, i = f.length; i > g; g++)
                        j = f[g], c = k, "string" == typeof j && "function" == typeof a[j] && (j = a[j]), "object" == typeof j && j && "function" == typeof j.handleEvent && (c = j, j = j.handleEvent), "function" == typeof j && A(j, c, d, e)
                }
                return this
            };
            K.prototype.clip = function (a) {
                a = z(a);
                for (var b = 0; b < a.length; b++)
                    if (a.hasOwnProperty(b) && a[b] && 1 === a[b].nodeType) {
                        a[b].zcClippingId ? -1 === y(this.id, j[a[b].zcClippingId]) && j[a[b].zcClippingId].push(this.id) : (a[b].zcClippingId = "zcClippingId_" + i++, j[a[b].zcClippingId] = [this.id], N.autoActivate === !0 && q(a[b], "mouseover", p));
                        var c = h[this.id].elements;
                        -1 === y(a[b], c) && c.push(a[b])
                    }
                return this
            }, K.prototype.unclip = function (a) {
                var b = h[this.id];
                if (b) {
                    var c, d = b.elements;
                    a = "undefined" == typeof a ? d.slice(0) : z(a);
                    for (var e = a.length; e--; )
                        if (a.hasOwnProperty(e) && a[e] && 1 === a[e].nodeType) {
                            for (c = 0; - 1 !== (c = y(a[e], d, c)); )
                                d.splice(c, 1);
                            var f = j[a[e].zcClippingId];
                            if (f) {
                                for (c = 0; - 1 !== (c = y(this.id, f, c)); )
                                    f.splice(c, 1);
                                0 === f.length && (N.autoActivate === !0 && r(a[e], "mouseover", p), delete a[e].zcClippingId)
                            }
                        }
                }
                return this
            }, K.prototype.elements = function () {
                var a = h[this.id];
                return a && a.elements ? a.elements.slice(0) : []
            };
            var S = function (a) {
                var b, c, d, e, f, g = [];
                if (a && 1 === a.nodeType && (b = a.zcClippingId) && j.hasOwnProperty(b) && (c = j[b], c && c.length))
                    for (d = 0, e = c.length; e > d; d++)
                        f = h[c[d]].instance, f && f instanceof K && g.push(f);
                return g
            };
            N.hoverClass = "zeroclipboard-is-hover", N.activeClass = "zeroclipboard-is-active", N.trustedOrigins = null, N.allowScriptAccess = null, N.useNoCache = !0, N.moviePath = "ZeroClipboard.swf", K.detectFlashSupport = function () {
                return C("ZeroClipboard.detectFlashSupport", N.debug), J()
            }, K.dispatch = function (a, b) {
                if ("string" == typeof a && a) {
                    var c = a.toLowerCase().replace(/^on/, "");
                    if (c)
                        for (var e = d && N.autoActivate === !0 ? S(d) : M(), f = 0, g = e.length; g > f; f++)
                            T.call(e[f], c, b)
                }
            }, K.prototype.setHandCursor = function (a) {
                return C("ZeroClipboard.prototype.setHandCursor", N.debug), a = "boolean" == typeof a ? a : !!a, L(a), N.forceHandCursor = a, this
            }, K.prototype.reposition = function () {
                return C("ZeroClipboard.prototype.reposition", N.debug), Q()
            }, K.prototype.receiveEvent = function (a, b) {
                if (C("ZeroClipboard.prototype.receiveEvent", N.debug), "string" == typeof a && a) {
                    var c = a.toLowerCase().replace(/^on/, "");
                    c && T.call(this, c, b)
                }
            }, K.prototype.setCurrent = function (a) {
                return C("ZeroClipboard.prototype.setCurrent", N.debug), K.activate(a), this
            }, K.prototype.resetBridge = function () {
                return C("ZeroClipboard.prototype.resetBridge", N.debug), K.deactivate(), this
            }, K.prototype.setTitle = function (a) {
                if (C("ZeroClipboard.prototype.setTitle", N.debug), a = a || N.title || d && d.getAttribute("title")) {
                    var b = P(e.bridge);
                    b && b.setAttribute("title", a)
                }
                return this
            }, K.setDefaults = function (a) {
                C("ZeroClipboard.setDefaults", N.debug), K.config(a)
            }, K.prototype.addEventListener = function (a, b) {
                return C("ZeroClipboard.prototype.addEventListener", N.debug), this.on(a, b)
            }, K.prototype.removeEventListener = function (a, b) {
                return C("ZeroClipboard.prototype.removeEventListener", N.debug), this.off(a, b)
            }, K.prototype.ready = function () {
                return C("ZeroClipboard.prototype.ready", N.debug), e.ready === !0
            };
            var T = function (a, g) {
                a = a.toLowerCase().replace(/^on/, "");
                var h = g && g.flashVersion && b(g.flashVersion) || null, i = d, j = !0;
                switch (a) {
                    case"load":
                        if (h) {
                            if (!c(h))
                                return void T.call(this, "onWrongFlash", {flashVersion: h});
                            e.outdated = !1, e.ready = !0, e.version = h
                        }
                        break;
                    case"wrongflash":
                        h && !c(h) && (e.outdated = !0, e.ready = !1, e.version = h);
                        break;
                    case"mouseover":
                        s(i, N.hoverClass);
                        break;
                    case"mouseout":
                        N.autoActivate === !0 && K.deactivate();
                        break;
                    case"mousedown":
                        s(i, N.activeClass);
                        break;
                    case"mouseup":
                        t(i, N.activeClass);
                        break;
                    case"datarequested":
                        if (i) {
                            var k = i.getAttribute("data-clipboard-target"), l = k ? document.getElementById(k) : null;
                            if (l) {
                                var m = l.value || l.textContent || l.innerText;
                                m && this.setText(m)
                            } else {
                                var n = i.getAttribute("data-clipboard-text");
                                n && this.setText(n)
                            }
                        }
                        j = !1;
                        break;
                    case"complete":
                        H(f), i && i !== I() && i.focus && i.focus()
                }
                var o = i, p = [this, g];
                return R.call(this, a, o, p, j)
            };
            "function" == typeof define && define.amd ? define(["require", "exports", "module"], function (a, b, c) {
                return k = c && c.id || null, K
            }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports && "function" == typeof a.require ? (l = module.id || null, module.exports = K) : a.ZeroClipboard = K
        }(function () {
    return this
}()),
        !function (a) {
            "use strict";
            a(function () {
                var b = a(window), c = a(document.body);
                c.scrollspy({target: ".bs-docs-sidebar"}), b.on("load", function () {
                    c.scrollspy("refresh")
                }), a(".bs-docs-container [href=#]").click(function (a) {
                    a.preventDefault()
                }), setTimeout(function () {
                    var b = a(".bs-docs-sidebar");
                    b.affix({offset: {top: function () {
                                var c = b.offset().top, d = parseInt(b.children(0).css("margin-top"), 10), e = a(".bs-docs-nav").height();
                                return this.top = c - e - d
                            }, bottom: function () {
                                return this.bottom = a(".bs-docs-footer").outerHeight(!0)
                            }}})
                }, 100), setTimeout(function () {
                    a(".bs-top").affix()
                }, 100), function () {
                    var b = a("#bs-theme-stylesheet"), c = a(".bs-docs-theme-toggle"), d = function () {
                        b.attr("href", b.attr("data-href")), c.text("Disable theme preview"), localStorage.setItem("previewTheme", !0)
                    };
                    localStorage.getItem("previewTheme") && d(), c.click(function () {
                        var a = b.attr("href");
                        a && 0 !== a.indexOf("data") ? (b.attr("href", ""), c.text("Preview theme"), localStorage.removeItem("previewTheme")) : d()
                    })
                }(), a(".tooltip-demo").tooltip({selector: '[data-toggle="tooltip"]', container: "body"}), a(".popover-demo").popover({selector: '[data-toggle="popover"]', container: "body"}), a(".tooltip-test").tooltip(), a(".popover-test").popover(), a(".bs-docs-popover").popover(), a("#loading-example-btn").on("click", function () {
                    var b = a(this);
                    b.button("loading"), setTimeout(function () {
                        b.button("reset")
                    }, 3e3)
                }), a("#exampleModal").on("show.bs.modal", function (b) {
                    var c = a(b.relatedTarget), d = c.data("whatever"), e = a(this);
                    e.find(".modal-title").text("New message to " + d), e.find(".modal-body input").val(d)
                }), a(".bs-docs-activate-animated-progressbar").on("click", function () {
                    a(this).siblings(".progress").find(".progress-bar-striped").toggleClass("active")
                }), ZeroClipboard.config({moviePath: "/assets/flash/ZeroClipboard.swf", hoverClass: "btn-clipboard-hover"}), a(".highlight").each(function () {
                    var b = '<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>';
                    a(this).before(b)
                });
                var d = new ZeroClipboard(a(".btn-clipboard")), e = a("#global-zeroclipboard-html-bridge");
                d.on("load", function () {
                    e.data("placement", "top").attr("title", "Copy to clipboard").tooltip()
                }), d.on("dataRequested", function (b) {
                    var c = a(this).parent().nextAll(".highlight").first();
                    b.setText(c.text())
                }), d.on("complete", function () {
                    e.attr("title", "Copied!").tooltip("fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("fixTitle")
                }), d.on("noflash wrongflash", function () {
                    e.attr("title", "Flash required").tooltip("fixTitle").tooltip("show")
                })
            })
        }(jQuery);

$(function () {
    var teamId = 123, tokenStr = "token", passcodeStr = "passcode", passcode = "2014";
    function md5(signature) {
        return CryptoJS.MD5(signature).toString()
    }
    function signature(token, passcode) {
        return passcodeStr + "=" + encodeURIComponent(passcode) + "&" + tokenStr + "=" + encodeURIComponent(token)
    }
    $(".btn-light").click(function (e) {
        e.preventDefault();
        if ($(this).parents("li").hasClass("on")) {
            $(this).parents("li").removeClass("on").addClass("off");
            return
        }
        var light = parseInt(this.id.replace("light", "")), self = this;
        if (light ==
                3)
            return;
        var params = {callback: window.location.origin + "/callback"};
        $.post("/v1/api/lights/" + light + "/token", params, function (resp) {
            var token = resp.token, params = {token: token, passcode: passcode, signature: md5(signature(token, passcode))};
            $.post("/v1/api/lights/" + light + "/on", params, function (resp) {
                $(self).parents("li").removeClass("off").addClass("on")
            }).fail(function (xhr) {
                alert(xhr.responseJSON.errors)
            })
        }).fail(function (xhr) {
            alert(xhr.responseJSON.errors)
        })
    })
});

var CryptoJS = CryptoJS || function (h, r) {
    var k = {}, l = k.lib = {}, n = function () {
    }, f = l.Base = {extend: function (a) {
            n.prototype = this;
            var b = new n;
            a && b.mixIn(a);
            b.hasOwnProperty("init") || (b.init = function () {
                b.$super.init.apply(this, arguments)
            });
            b.init.prototype = b;
            b.$super = this;
            return b
        }, create: function () {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        }, init: function () {
        }, mixIn: function (a) {
            for (var b in a)
                a.hasOwnProperty(b) && (this[b] = a[b]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        }, clone: function () {
            return this.init.prototype.extend(this)
        }},
    j = l.WordArray = f.extend({init: function (a, b) {
            a = this.words = a || [];
            this.sigBytes = b != r ? b : 4 * a.length
        }, toString: function (a) {
            return(a || s).stringify(this)
        }, concat: function (a) {
            var b = this.words, d = a.words, c = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (c % 4)
                for (var e = 0; e < a; e++)
                    b[c + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((c + e) % 4);
            else if (65535 < d.length)
                for (e = 0; e < a; e += 4)
                    b[c + e >>> 2] = d[e >>> 2];
            else
                b.push.apply(b, d);
            this.sigBytes += a;
            return this
        }, clamp: function () {
            var a = this.words, b = this.sigBytes;
            a[b >>> 2] &= 4294967295 <<
                    32 - 8 * (b % 4);
            a.length = h.ceil(b / 4)
        }, clone: function () {
            var a = f.clone.call(this);
            a.words = this.words.slice(0);
            return a
        }, random: function (a) {
            for (var b = [], d = 0; d < a; d += 4)
                b.push(4294967296 * h.random() | 0);
            return new j.init(b, a)
        }}), m = k.enc = {}, s = m.Hex = {stringify: function (a) {
            var b = a.words;
            a = a.sigBytes;
            for (var d = [], c = 0; c < a; c++) {
                var e = b[c >>> 2] >>> 24 - 8 * (c % 4) & 255;
                d.push((e >>> 4).toString(16));
                d.push((e & 15).toString(16))
            }
            return d.join("")
        }, parse: function (a) {
            for (var b = a.length, d = [], c = 0; c < b; c += 2)
                d[c >>> 3] |= parseInt(a.substr(c,
                        2), 16) << 24 - 4 * (c % 8);
            return new j.init(d, b / 2)
        }}, p = m.Latin1 = {stringify: function (a) {
            var b = a.words;
            a = a.sigBytes;
            for (var d = [], c = 0; c < a; c++)
                d.push(String.fromCharCode(b[c >>> 2] >>> 24 - 8 * (c % 4) & 255));
            return d.join("")
        }, parse: function (a) {
            for (var b = a.length, d = [], c = 0; c < b; c++)
                d[c >>> 2] |= (a.charCodeAt(c) & 255) << 24 - 8 * (c % 4);
            return new j.init(d, b)
        }}, t = m.Utf8 = {stringify: function (a) {
            try {
                return decodeURIComponent(escape(p.stringify(a)))
            } catch (b) {
                throw Error("Malformed UTF-8 data");
            }
        }, parse: function (a) {
            return p.parse(unescape(encodeURIComponent(a)))
        }},
    q = l.BufferedBlockAlgorithm = f.extend({reset: function () {
            this._data = new j.init;
            this._nDataBytes = 0
        }, _append: function (a) {
            "string" == typeof a && (a = t.parse(a));
            this._data.concat(a);
            this._nDataBytes += a.sigBytes
        }, _process: function (a) {
            var b = this._data, d = b.words, c = b.sigBytes, e = this.blockSize, f = c / (4 * e), f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
            a = f * e;
            c = h.min(4 * a, c);
            if (a) {
                for (var g = 0; g < a; g += e)
                    this._doProcessBlock(d, g);
                g = d.splice(0, a);
                b.sigBytes -= c
            }
            return new j.init(g, c)
        }, clone: function () {
            var a = f.clone.call(this);
            a._data = this._data.clone();
            return a
        }, _minBufferSize: 0});
    l.Hasher = q.extend({cfg: f.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this._doReset()
        }, update: function (a) {
            this._append(a);
            this._process();
            return this
        }, finalize: function (a) {
            a && this._append(a);
            return this._doFinalize()
        }, blockSize: 16, _createHelper: function (a) {
            return function (b, d) {
                return(new a.init(d)).finalize(b)
            }
        }, _createHmacHelper: function (a) {
            return function (b, d) {
                return(new u.HMAC.init(a,
                        d)).finalize(b)
            }
        }});
    var u = k.algo = {};
    return k
}(Math);


(function (E) {
    function h(a, f, g, j, p, h, k) {
        a = a + (f & g | ~f & j) + p + k;
        return(a << h | a >>> 32 - h) + f
    }
    function k(a, f, g, j, p, h, k) {
        a = a + (f & j | g & ~j) + p + k;
        return(a << h | a >>> 32 - h) + f
    }
    function l(a, f, g, j, h, k, l) {
        a = a + (f ^ g ^ j) + h + l;
        return(a << k | a >>> 32 - k) + f
    }
    function n(a, f, g, j, h, k, l) {
        a = a + (g ^ (f | ~j)) + h + l;
        return(a << k | a >>> 32 - k) + f
    }
    for (var r = CryptoJS, q = r.lib, F = q.WordArray, s = q.Hasher, q = r.algo, a = [], t = 0; 64 > t; t++)
        a[t] = 4294967296 * E.abs(E.sin(t + 1)) | 0;
    q = q.MD5 = s.extend({_doReset: function () {
            this._hash = new F.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function (m, f) {
            for (var g = 0; 16 > g; g++) {
                var j = f + g, p = m[j];
                m[j] = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360
            }
            var g = this._hash.words, j = m[f + 0], p = m[f + 1], q = m[f + 2], r = m[f + 3], s = m[f + 4], t = m[f + 5], u = m[f + 6], v = m[f + 7], w = m[f + 8], x = m[f + 9], y = m[f + 10], z = m[f + 11], A = m[f + 12], B = m[f + 13], C = m[f + 14], D = m[f + 15], b = g[0], c = g[1], d = g[2], e = g[3], b = h(b, c, d, e, j, 7, a[0]), e = h(e, b, c, d, p, 12, a[1]), d = h(d, e, b, c, q, 17, a[2]), c = h(c, d, e, b, r, 22, a[3]), b = h(b, c, d, e, s, 7, a[4]), e = h(e, b, c, d, t, 12, a[5]), d = h(d, e, b, c, u, 17, a[6]), c = h(c, d, e, b, v, 22, a[7]),
                    b = h(b, c, d, e, w, 7, a[8]), e = h(e, b, c, d, x, 12, a[9]), d = h(d, e, b, c, y, 17, a[10]), c = h(c, d, e, b, z, 22, a[11]), b = h(b, c, d, e, A, 7, a[12]), e = h(e, b, c, d, B, 12, a[13]), d = h(d, e, b, c, C, 17, a[14]), c = h(c, d, e, b, D, 22, a[15]), b = k(b, c, d, e, p, 5, a[16]), e = k(e, b, c, d, u, 9, a[17]), d = k(d, e, b, c, z, 14, a[18]), c = k(c, d, e, b, j, 20, a[19]), b = k(b, c, d, e, t, 5, a[20]), e = k(e, b, c, d, y, 9, a[21]), d = k(d, e, b, c, D, 14, a[22]), c = k(c, d, e, b, s, 20, a[23]), b = k(b, c, d, e, x, 5, a[24]), e = k(e, b, c, d, C, 9, a[25]), d = k(d, e, b, c, r, 14, a[26]), c = k(c, d, e, b, w, 20, a[27]), b = k(b, c, d, e, B, 5, a[28]), e = k(e, b,
                    c, d, q, 9, a[29]), d = k(d, e, b, c, v, 14, a[30]), c = k(c, d, e, b, A, 20, a[31]), b = l(b, c, d, e, t, 4, a[32]), e = l(e, b, c, d, w, 11, a[33]), d = l(d, e, b, c, z, 16, a[34]), c = l(c, d, e, b, C, 23, a[35]), b = l(b, c, d, e, p, 4, a[36]), e = l(e, b, c, d, s, 11, a[37]), d = l(d, e, b, c, v, 16, a[38]), c = l(c, d, e, b, y, 23, a[39]), b = l(b, c, d, e, B, 4, a[40]), e = l(e, b, c, d, j, 11, a[41]), d = l(d, e, b, c, r, 16, a[42]), c = l(c, d, e, b, u, 23, a[43]), b = l(b, c, d, e, x, 4, a[44]), e = l(e, b, c, d, A, 11, a[45]), d = l(d, e, b, c, D, 16, a[46]), c = l(c, d, e, b, q, 23, a[47]), b = n(b, c, d, e, j, 6, a[48]), e = n(e, b, c, d, v, 10, a[49]), d = n(d, e, b, c,
                    C, 15, a[50]), c = n(c, d, e, b, t, 21, a[51]), b = n(b, c, d, e, A, 6, a[52]), e = n(e, b, c, d, r, 10, a[53]), d = n(d, e, b, c, y, 15, a[54]), c = n(c, d, e, b, p, 21, a[55]), b = n(b, c, d, e, w, 6, a[56]), e = n(e, b, c, d, D, 10, a[57]), d = n(d, e, b, c, u, 15, a[58]), c = n(c, d, e, b, B, 21, a[59]), b = n(b, c, d, e, s, 6, a[60]), e = n(e, b, c, d, z, 10, a[61]), d = n(d, e, b, c, q, 15, a[62]), c = n(c, d, e, b, x, 21, a[63]);
            g[0] = g[0] + b | 0;
            g[1] = g[1] + c | 0;
            g[2] = g[2] + d | 0;
            g[3] = g[3] + e | 0
        }, _doFinalize: function () {
            var a = this._data, f = a.words, g = 8 * this._nDataBytes, j = 8 * a.sigBytes;
            f[j >>> 5] |= 128 << 24 - j % 32;
            var h = E.floor(g /
                    4294967296);
            f[(j + 64 >>> 9 << 4) + 15] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
            f[(j + 64 >>> 9 << 4) + 14] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            a.sigBytes = 4 * (f.length + 1);
            this._process();
            a = this._hash;
            f = a.words;
            for (g = 0; 4 > g; g++)
                j = f[g], f[g] = (j << 8 | j >>> 24) & 16711935 | (j << 24 | j >>> 8) & 4278255360;
            return a
        }, clone: function () {
            var a = s.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }});
    r.MD5 = s._createHelper(q);
    r.HmacMD5 = s._createHmacHelper(q)
})(Math);