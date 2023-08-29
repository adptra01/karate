!function (t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd)
        define([], e);
    else {
        var n = e();
        for (var a in n)
            ("object" == typeof exports ? exports : t)[a] = n[a]
    }
}(self, (function () {
    return function () {
        "use strict";
        var t = {
            7621: function (t, e, n) {
                var a = n(8081)
                    , s = n.n(a)
                    , i = n(3645)
                    , o = n.n(i)
                    , l = n(1667)
                    , r = n.n(l)
                    , c = new URL(n(6468), n.b)
                    , m = o()(s())
                    , u = r()(c);
                m.push([t.id, '#template-customizer{font-family:"Open Sans",BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important;font-size:inherit !important;position:fixed;top:0;right:0;height:100%;z-index:99999999;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:400px;background:#fff;-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.2);box-shadow:0 0 20px 0 rgba(0,0,0,.2);-webkit-transition:all .2s ease-in;-o-transition:all .2s ease-in;transition:all .2s ease-in;-webkit-transform:translateX(420px);-ms-transform:translateX(420px);transform:translateX(420px)}#template-customizer h5{position:relative;font-size:11px}#template-customizer>h5{flex:0 0 auto}#template-customizer .disabled{color:#d1d2d3 !important}#template-customizer .form-label{font-size:.9375rem}#template-customizer .form-check-label{font-size:.8125rem}#template-customizer .template-customizer-t-panel_header{font-size:1.125rem}#template-customizer.template-customizer-open{-webkit-transition-delay:.1s;-o-transition-delay:.1s;transition-delay:.1s;-webkit-transform:none !important;-ms-transform:none !important;transform:none !important}#template-customizer.template-customizer-open .custom-option.checked{color:var(--bs-primary);border-width:2px}#template-customizer.template-customizer-open .custom-option.checked .custom-option-content{border:none}#template-customizer.template-customizer-open .custom-option .custom-option-content{border:1px solid rgba(0,0,0,0)}#template-customizer .template-customizer-header a:hover{color:inherit !important}#template-customizer .template-customizer-open-btn{position:absolute;top:180px;left:0;z-index:-1;display:block;width:42px;height:42px;border-top-left-radius:15%;border-bottom-left-radius:15%;background:var(--bs-primary);color:#fff !important;text-align:center;font-size:18px !important;line-height:42px;opacity:1;-webkit-transition:all .1s linear .2s;-o-transition:all .1s linear .2s;transition:all .1s linear .2s;-webkit-transform:translateX(-62px);-ms-transform:translateX(-62px);transform:translateX(-62px)}@media(max-width: 991.98px){#template-customizer .template-customizer-open-btn{top:145px}}.dark-style #template-customizer .template-customizer-open-btn{background:var(--bs-primary)}#template-customizer .template-customizer-open-btn::before{content:"";width:22px;height:22px;display:block;background-size:100% 100%;position:absolute;background-image:url(' + u + ');margin:10px}.customizer-hide #template-customizer .template-customizer-open-btn{display:none}[dir=rtl] #template-customizer .template-customizer-open-btn{border-radius:0;border-top-right-radius:15%;border-bottom-right-radius:15%}[dir=rtl] #template-customizer .template-customizer-open-btn::before{margin-left:-2px}#template-customizer.template-customizer-open .template-customizer-open-btn{opacity:0;-webkit-transition-delay:0s;-o-transition-delay:0s;transition-delay:0s;-webkit-transform:none !important;-ms-transform:none !important;transform:none !important}#template-customizer .template-customizer-inner{position:relative;overflow:auto;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;opacity:1;-webkit-transition:opacity .2s;-o-transition:opacity .2s;transition:opacity .2s}#template-customizer .template-customizer-inner>div:first-child>hr:first-of-type{display:none !important}#template-customizer .template-customizer-inner>div:first-child>h5:first-of-type{padding-top:0 !important}#template-customizer .template-customizer-themes-inner{position:relative;opacity:1;-webkit-transition:opacity .2s;-o-transition:opacity .2s;transition:opacity .2s}#template-customizer .template-customizer-theme-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;align-items:center;-ms-flex-align:center;-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px;padding:0 24px;width:100%;cursor:pointer}#template-customizer .template-customizer-theme-item input{position:absolute;z-index:-1;opacity:0}#template-customizer .template-customizer-theme-item input~span{opacity:.25;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}#template-customizer .template-customizer-theme-item .template-customizer-theme-checkmark{display:inline-block;width:6px;height:12px;border-right:1px solid;border-bottom:1px solid;opacity:0;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}[dir=rtl] #template-customizer .template-customizer-theme-item .template-customizer-theme-checkmark{border-right:none;border-left:1px solid;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}#template-customizer .template-customizer-theme-item input:checked:not([disabled])~span,#template-customizer .template-customizer-theme-item:hover input:not([disabled])~span{opacity:1}#template-customizer .template-customizer-theme-item input:checked:not([disabled])~span .template-customizer-theme-checkmark{opacity:1}#template-customizer .template-customizer-theme-colors span{display:block;margin:0 1px;width:10px;height:10px;border-radius:50%;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.1) inset;box-shadow:0 0 0 1px rgba(0,0,0,.1) inset}#template-customizer.template-customizer-loading .template-customizer-inner,#template-customizer.template-customizer-loading-theme .template-customizer-themes-inner{opacity:.2}#template-customizer.template-customizer-loading .template-customizer-inner::after,#template-customizer.template-customizer-loading-theme .template-customizer-themes-inner::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:999;display:block}@media(max-width: 1200px){#template-customizer{display:none;visibility:hidden !important}}@media(max-width: 575.98px){#template-customizer{width:300px;-webkit-transform:translateX(320px);-ms-transform:translateX(320px);transform:translateX(320px)}}.layout-menu-100vh #template-customizer{height:100vh}[dir=rtl] #template-customizer{right:auto;left:0;-webkit-transform:translateX(-420px);-ms-transform:translateX(-420px);transform:translateX(-420px)}[dir=rtl] #template-customizer .template-customizer-open-btn{right:0;left:auto;-webkit-transform:translateX(62px);-ms-transform:translateX(62px);transform:translateX(62px)}[dir=rtl] #template-customizer .template-customizer-close-btn{right:auto;left:0}#template-customizer .template-customizer-layouts-options[disabled]{opacity:.5;pointer-events:none}[dir=rtl] .template-customizer-t-style_switch_light{padding-right:0 !important}', ""]),
                    e.Z = m
            },
            3645: function (t) {
                t.exports = function (t) {
                    var e = [];
                    return e.toString = function () {
                        return this.map((function (e) {
                            var n = ""
                                , a = void 0 !== e[5];
                            return e[4] && (n += "@supports (".concat(e[4], ") {")),
                                e[2] && (n += "@media ".concat(e[2], " {")),
                                a && (n += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                                n += t(e),
                                a && (n += "}"),
                                e[2] && (n += "}"),
                                e[4] && (n += "}"),
                                n
                        }
                        )).join("")
                    }
                        ,
                        e.i = function (t, n, a, s, i) {
                            "string" == typeof t && (t = [[null, t, void 0]]);
                            var o = {};
                            if (a)
                                for (var l = 0; l < this.length; l++) {
                                    var r = this[l][0];
                                    null != r && (o[r] = !0)
                                }
                            for (var c = 0; c < t.length; c++) {
                                var m = [].concat(t[c]);
                                a && o[m[0]] || (void 0 !== i && (void 0 === m[5] || (m[1] = "@layer".concat(m[5].length > 0 ? " ".concat(m[5]) : "", " {").concat(m[1], "}")),
                                    m[5] = i),
                                    n && (m[2] ? (m[1] = "@media ".concat(m[2], " {").concat(m[1], "}"),
                                        m[2] = n) : m[2] = n),
                                    s && (m[4] ? (m[1] = "@supports (".concat(m[4], ") {").concat(m[1], "}"),
                                        m[4] = s) : m[4] = "".concat(s)),
                                    e.push(m))
                            }
                        }
                        ,
                        e
                }
            },
            1667: function (t) {
                t.exports = function (t, e) {
                    return e || (e = {}),
                        t ? (t = String(t.__esModule ? t.default : t),
                            /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                            e.hash && (t += e.hash),
                            /["'() \t\n]|(%20)/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t) : t
                }
            },
            8081: function (t) {
                t.exports = function (t) {
                    return t[1]
                }
            },
            3379: function (t) {
                var e = [];
                function n(t) {
                    for (var n = -1, a = 0; a < e.length; a++)
                        if (e[a].identifier === t) {
                            n = a;
                            break
                        }
                    return n
                }
                function a(t, a) {
                    for (var i = {}, o = [], l = 0; l < t.length; l++) {
                        var r = t[l]
                            , c = a.base ? r[0] + a.base : r[0]
                            , m = i[c] || 0
                            , u = "".concat(c, " ").concat(m);
                        i[c] = m + 1;
                        var d = n(u)
                            , h = {
                                css: r[1],
                                media: r[2],
                                sourceMap: r[3],
                                supports: r[4],
                                layer: r[5]
                            };
                        if (-1 !== d)
                            e[d].references++,
                                e[d].updater(h);
                        else {
                            var p = s(h, a);
                            a.byIndex = l,
                                e.splice(l, 0, {
                                    identifier: u,
                                    updater: p,
                                    references: 1
                                })
                        }
                        o.push(u)
                    }
                    return o
                }
                function s(t, e) {
                    var n = e.domAPI(e);
                    return n.update(t),
                        function (e) {
                            if (e) {
                                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer)
                                    return;
                                n.update(t = e)
                            } else
                                n.remove()
                        }
                }
                t.exports = function (t, s) {
                    var i = a(t = t || [], s = s || {});
                    return function (t) {
                        t = t || [];
                        for (var o = 0; o < i.length; o++) {
                            var l = n(i[o]);
                            e[l].references--
                        }
                        for (var r = a(t, s), c = 0; c < i.length; c++) {
                            var m = n(i[c]);
                            0 === e[m].references && (e[m].updater(),
                                e.splice(m, 1))
                        }
                        i = r
                    }
                }
            },
            569: function (t) {
                var e = {};
                t.exports = function (t, n) {
                    var a = function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head
                                } catch (t) {
                                    n = null
                                }
                            e[t] = n
                        }
                        return e[t]
                    }(t);
                    if (!a)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(n)
                }
            },
            9216: function (t) {
                t.exports = function (t) {
                    var e = document.createElement("style");
                    return t.setAttributes(e, t.attributes),
                        t.insert(e, t.options),
                        e
                }
            },
            3565: function (t, e, n) {
                t.exports = function (t) {
                    var e = n.nc;
                    e && t.setAttribute("nonce", e)
                }
            },
            7795: function (t) {
                t.exports = function (t) {
                    if ("undefined" == typeof document)
                        return {
                            update: function () { },
                            remove: function () { }
                        };
                    var e = t.insertStyleElement(t);
                    return {
                        update: function (n) {
                            !function (t, e, n) {
                                var a = "";
                                n.supports && (a += "@supports (".concat(n.supports, ") {")),
                                    n.media && (a += "@media ".concat(n.media, " {"));
                                var s = void 0 !== n.layer;
                                s && (a += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                                    a += n.css,
                                    s && (a += "}"),
                                    n.media && (a += "}"),
                                    n.supports && (a += "}");
                                var i = n.sourceMap;
                                i && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                                    e.styleTagTransform(a, t, e.options)
                            }(e, t, n)
                        },
                        remove: function () {
                            !function (t) {
                                if (null === t.parentNode)
                                    return !1;
                                t.parentNode.removeChild(t)
                            }(e)
                        }
                    }
                }
            },
            4589: function (t) {
                t.exports = function (t, e) {
                    if (e.styleSheet)
                        e.styleSheet.cssText = t;
                    else {
                        for (; e.firstChild;)
                            e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(t))
                    }
                }
            },
            6468: function (t) {
                t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABClJREFUaEPtmY1RFEEQhbsjUCIQIhAiUCNQIxAiECIQIxAiECIAIpAMhAiECIQI2vquZqnZvp6fhb3SK5mqq6Ju92b69bzXf6is+dI1t1+eAfztG5z1BsxsU0S+ici2iPB3vm5E5EpEDlSVv2dZswFIxv8UkZcNy+5EZGcuEHMCOBeR951uvVDVD53vVl+bE8DvDu8Pxtyo6ta/BsByg1R15Bwzqz5/LJgn34CZwfnPInI4BUB6/1hV0cSjVxcAM4PbcBZjL0XklIPN7Is3fLCkdQPpPYw/VNXj5IhPIvJWRIhSl6p60ULWBGBm30Vk123EwRxCuIzWkkjNrCZywith10ewE1Xdq4GoAjCz/RTXW44Ynt+LyBEfT43kYfbj86J3w5Q32DNcRQDpwF+dkQXDMey8xem0L3TEqB4g3PZWad8agBMRgZPeu96D1/C2Zbh3X0p80Op1xxloztN48bMQQNoc7+eLEuAoPSPiIDY4Ooo+E6ixeNXM+D3GERz2U3CIqMstLJUgJQDe+7eq6mub0NYEkLAKwEHkiBQDCZtddZCZ8d6r7JDwFkoARklHRPZUFVDVZWbwGuNrC4EfdOzFrRABh3Wnqhv+d70AEBLGFROPmeHlnM81G69UdSd6IUuM0GgUVn1uqWmg5EmMfBeEyB7Pe3txBkY+rGT8j0J+WXq/BgDkUCaqLgEAnwcRog0veMIqFAAwCy2wnw+bI2GaGboBgF9k5N0o0rUSGUb4eO0BeO9j/GYhkSHMHMTIqwGARX6p6a+nlPBl8kZuXMD9j6pKfF9aZuaFOdJCEL5D4eYb9wCYVCanrBmGyii/tIq+SLj/HQBCaM5bLzwfPqdQ6FpVHyra4IbuVbXaY7dETC2ESPNNWiIOi69CcdgSMXsh4tNSUiklMgwmC0aNd08Y5WAES6HHehM4gu97wyhBgWpgqXsrASglprDy7CwhehMZOSbK6JMSma+Fio1KltCmlBIj7gfZOGx8ppQSXrhzFnOhJ/31BDkjFHRvOd09x0mRBA9SFgxUgHpQg0q0t5ymPMlL+EnldFTfDA0NAmf+OTQ0X0sRouf7NNkYGhrOYNrxtIaGg83MNzVDSe3LXLhP7O/yrCsCz1zlWTpjWkuZAOBpX3yVnLqI1yLCOKU6qMrmP7SSrUEw54XF4WBIK5FxCMOr3lVsfGqNSmPzBXUnJTIX1jyVBq9wO6UObOpgC5GjO98vFKnTdQMZXxEsWZlDiCZMIxAbNxQOqlpVZtobejBaZNoBnRDzMFpkxvTQOD36BlrcySZuI6p1ACB6LU3wWuf5581+oHfD1vi89bz3nFUC8Nm7ZlP3nKkFbM4bWPt/MSFwklprYItwt6cmvpWJ2IVcQBCz6bLysSCv3SaANCiTsnaNRrNRqMXVVT1/BrAqz/buu/Y38Ad3KC5PARej0QAAAABJRU5ErkJggg=="
            }
        }
            , e = {};
        function n(a) {
            var s = e[a];
            if (void 0 !== s)
                return s.exports;
            var i = e[a] = {
                id: a,
                exports: {}
            };
            return t[a](i, i.exports, n),
                i.exports
        }
        n.m = t,
            n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                }
                    : function () {
                        return t
                    }
                    ;
                return n.d(e, {
                    a: e
                }),
                    e
            }
            ,
            n.d = function (t, e) {
                for (var a in e)
                    n.o(e, a) && !n.o(t, a) && Object.defineProperty(t, a, {
                        enumerable: !0,
                        get: e[a]
                    })
            }
            ,
            n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
            }
            ,
            n.b = document.baseURI || self.location.href,
            n.nc = void 0;
        var a = {};
        return function () {
            n.r(a),
                n.d(a, {
                    TemplateCustomizer: function () {
                        return A
                    }
                });
            var t = n(3379)
                , e = n.n(t)
                , s = n(7795)
                , i = n.n(s)
                , o = n(569)
                , l = n.n(o)
                , r = n(3565)
                , c = n.n(r)
                , m = n(9216)
                , u = n.n(m)
                , d = n(4589)
                , h = n.n(d)
                , p = n(7621)
                , f = {};
            function y(t) {
                return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                    : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                    ,
                    y(t)
            }
            function v(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                        "value" in a && (a.writable = !0),
                        Object.defineProperty(t, b(a.key), a)
                }
            }
            function b(t) {
                var e = function (t, e) {
                    if ("object" !== y(t) || null === t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var a = n.call(t, "string");
                        if ("object" !== y(a))
                            return a;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" === y(e) ? e : String(e)
            }
            f.styleTagTransform = h(),
                f.setAttributes = c(),
                f.insert = l().bind(null, "head"),
                f.domAPI = i(),
                f.insertStyleElement = u(),
                e()(p.Z, f),
                p.Z && p.Z.locals && p.Z.locals;
            var g, _ = ["rtl", "style", "headerType", "contentLayout", "layoutCollapsed", "showDropdownOnHover", "layoutNavbarOptions", "layoutFooterFixed", "themes"], S = ["light", "dark", "system"], x = ["sticky", "static", "hidden"], z = document.documentElement.classList;
            g = z.contains("layout-navbar-fixed") ? "sticky" : z.contains("layout-navbar-hidden") ? "hidden" : "static";
            var w = document.getElementsByTagName("HTML")[0].getAttribute("data-theme") || 0
                , k = z.contains("dark-style") ? "dark" : "light"
                , C = "rtl" === document.documentElement.getAttribute("dir")
                , T = !!z.contains("layout-menu-collapsed")
                , N = g
                , L = !!z.contains("layout-footer-fixed")
                , E = z.contains("layout-menu-offcanvas") ? "static-offcanvas" : z.contains("layout-menu-fixed") ? "fixed" : z.contains("layout-menu-fixed-offcanvas") ? "fixed-offcanvas" : "static"
                , A = function () {
                    function t(e) {
                        var n = e.cssPath
                            , a = e.themesPath
                            , s = e.cssFilenamePattern
                            , i = e.displayCustomizer
                            , o = e.controls
                            , l = e.defaultTextDir
                            , r = e.defaultHeaderType
                            , c = e.defaultContentLayout
                            , m = e.defaultMenuCollapsed
                            , u = e.defaultShowDropdownOnHover
                            , d = e.defaultNavbarType
                            , h = e.defaultFooterFixed
                            , p = e.styles
                            , f = e.navbarOptions
                            , y = e.defaultStyle
                            , v = e.availableContentLayouts
                            , b = e.availableDirections
                            , g = e.availableStyles
                            , z = e.availableThemes
                            , A = e.availableLayouts
                            , O = e.availableHeaderTypes
                            , R = e.availableNavbarOptions
                            , F = e.defaultTheme
                            , I = e.pathResolver
                            , D = e.onSettingsChange
                            , P = e.lang;
                        if (function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                            !this._ssr) {
                            if (!window.Helpers)
                                throw new Error("window.Helpers required.");
                            if (this.settings = {},
                                this.settings.cssPath = n,
                                this.settings.themesPath = a,
                                this.settings.cssFilenamePattern = s || "%name%.css",
                                this.settings.displayCustomizer = void 0 === i || i,
                                this.settings.controls = o || _,
                                this.settings.defaultTextDir = "rtl" === l || C,
                                this.settings.defaultHeaderType = r || E,
                                this.settings.defaultMenuCollapsed = void 0 !== m ? m : T,
                                this.settings.defaultContentLayout = void 0 !== c ? c : "compact",
                                this.settings.defaultShowDropdownOnHover = void 0 === u || u,
                                this.settings.defaultNavbarType = void 0 !== d ? d : N,
                                this.settings.defaultFooterFixed = void 0 !== h ? h : L,
                                this.settings.availableDirections = b || t.DIRECTIONS,
                                this.settings.availableStyles = g || t.STYLES,
                                this.settings.availableThemes = z || t.THEMES,
                                this.settings.availableHeaderTypes = O || t.HEADER_TYPES,
                                this.settings.availableContentLayouts = v || t.CONTENT,
                                this.settings.availableLayouts = A || t.LAYOUTS,
                                this.settings.availableNavbarOptions = R || t.NAVBAR_OPTIONS,
                                this.settings.defaultTheme = this._getDefaultTheme(void 0 !== F ? F : w),
                                this.settings.styles = p || S,
                                this.settings.navbarOptions = f || x,
                                this.settings.defaultStyle = y || k,
                                this.settings.lang = P || "en",
                                this.pathResolver = I || function (t) {
                                    return t
                                }
                                ,
                                this.settings.styles.length < 2) {
                                var q = this.settings.controls.indexOf("style");
                                -1 !== q && (this.settings.controls = this.settings.controls.slice(0, q).concat(this.settings.controls.slice(q + 1)))
                            }
                            this.settings.onSettingsChange = "function" == typeof D ? D : function () { }
                                ,
                                this._loadSettings(),
                                this._listeners = [],
                                this._controls = {},
                                this._initDirection(),
                                this._initStyle(),
                                this._initTheme(),
                                this.setLayoutType(this.settings.headerType, !1),
                                window.Helpers.setCollapsed(this.settings.layoutCollapsed, !1),
                                this.setContentLayout(this.settings.contentLayout, !1),
                                this.setDropdownOnHover(this.settings.showDropdownOnHover, !1),
                                this.setLayoutNavbarOption(this.settings.layoutNavbarOptions, !1),
                                this.setLayoutFooterFixed(this.settings.layoutFooterFixed, !1),
                                this._setup()
                        }
                    }
                    var e, n;
                    return e = t,
                        n = [{
                            key: "setRtl",
                            value: function (t) {
                                this._hasControls("rtl") && (this._setSetting("Rtl", String(t)),
                                    window.location.reload())
                            }
                        }, {
                            key: "setContentLayout",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                this._hasControls("contentLayout") && (this.settings.contentLayout = t,
                                    e && this._setSetting("contentLayout", t),
                                    window.Helpers.setContentLayout(t),
                                    e && this.settings.onSettingsChange.call(this, this.settings))
                            }
                        }, {
                            key: "setStyle",
                            value: function (t) {
                                this._setSetting("Style", t),
                                    window.location.reload()
                            }
                        }, {
                            key: "setTheme",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                                    , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                if (this._hasControls("themes")) {
                                    var a = this._getThemeByName(t);
                                    if (a) {
                                        this.settings.theme = a,
                                            e && this._setSetting("Theme", t);
                                        var s, i, o, l = this.pathResolver(this.settings.themesPath + this.settings.cssFilenamePattern.replace("%name%", t + ("light" !== this.settings.style ? "-".concat(this.settings.style) : "")));
                                        this._loadStylesheets((s = {},
                                            i = l,
                                            o = document.querySelector(".template-customizer-theme-css"),
                                            (i = b(i)) in s ? Object.defineProperty(s, i, {
                                                value: o,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : s[i] = o,
                                            s), n || function () { }
                                        ),
                                            e && this.settings.onSettingsChange.call(this, this.settings)
                                    }
                                }
                            }
                        }, {
                            key: "setLayoutType",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                if (this._hasControls("headerType") && ("static" === t || "static-offcanvas" === t || "fixed" === t || "fixed-offcanvas" === t)) {
                                    this.settings.headerType = t,
                                        e && this._setSetting("LayoutType", t),
                                        window.Helpers.setPosition("fixed" === t || "fixed-offcanvas" === t, "static-offcanvas" === t || "fixed-offcanvas" === t),
                                        e && this.settings.onSettingsChange.call(this, this.settings);
                                    var n = window.Helpers.menuPsScroll
                                        , a = window.PerfectScrollbar;
                                    "fixed" === this.settings.headerType || "fixed-offcanvas" === this.settings.headerType ? a && n && (window.Helpers.menuPsScroll.destroy(),
                                        n = new a(document.querySelector(".menu-inner"), {
                                            suppressScrollX: !0,
                                            wheelPropagation: !1
                                        }),
                                        window.Helpers.menuPsScroll = n) : n && window.Helpers.menuPsScroll.destroy()
                                }
                            }
                        }, {
                            key: "setDropdownOnHover",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                if (this._hasControls("showDropdownOnHover")) {
                                    if (this.settings.showDropdownOnHover = t,
                                        e && this._setSetting("ShowDropdownOnHover", t),
                                        window.Helpers.mainMenu) {
                                        window.Helpers.mainMenu.destroy(),
                                            config.showDropdownOnHover = t;
                                        var n = window.Menu;
                                        window.Helpers.mainMenu = new n(document.getElementById("layout-menu"), {
                                            orientation: "horizontal",
                                            closeChildren: !0,
                                            showDropdownOnHover: config.showDropdownOnHover
                                        })
                                    }
                                    e && this.settings.onSettingsChange.call(this, this.settings)
                                }
                            }
                        }, {
                            key: "setLayoutNavbarOption",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                this._hasControls("layoutNavbarOptions") && (this.settings.layoutNavbarOptions = t,
                                    e && this._setSetting("FixedNavbarOption", t),
                                    window.Helpers.setNavbar(t),
                                    e && this.settings.onSettingsChange.call(this, this.settings))
                            }
                        }, {
                            key: "setLayoutFooterFixed",
                            value: function (t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                this.settings.layoutFooterFixed = t,
                                    e && this._setSetting("FixedFooter", t),
                                    window.Helpers.setFooterFixed(t),
                                    e && this.settings.onSettingsChange.call(this, this.settings)
                            }
                        }, {
                            key: "setLang",
                            value: function (e) {
                                var n = this
                                    , a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (e !== this.settings.lang || a) {
                                    if (!t.LANGUAGES[e])
                                        throw new Error('Language "'.concat(e, '" not found!'));
                                    var s = t.LANGUAGES[e];
                                    ["panel_header", "panel_sub_header", "theming_header", "style_label", "style_switch_light", "style_switch_dark", "layout_header", "layout_label", "layout_header_label", "content_label", "layout_static", "layout_offcanvas", "layout_fixed", "layout_fixed_offcanvas", "layout_dd_open_label", "layout_navbar_label", "layout_footer_label", "misc_header", "theme_label", "direction_label"].forEach((function (t) {
                                        var e = n.container.querySelector(".template-customizer-t-".concat(t));
                                        e && (e.textContent = s[t])
                                    }
                                    ));
                                    for (var i = s.themes || {}, o = this.container.querySelectorAll(".template-customizer-theme-item") || [], l = 0, r = o.length; l < r; l++) {
                                        var c = o[l].querySelector('input[type="radio"]').value;
                                        o[l].querySelector(".template-customizer-theme-name").textContent = i[c] || this._getThemeByName(c).title
                                    }
                                    this.settings.lang = e
                                }
                            }
                        }, {
                            key: "update",
                            value: function () {
                                if (!this._ssr) {
                                    var t = !!document.querySelector(".layout-navbar")
                                        , e = !!document.querySelector(".layout-menu")
                                        , n = !!document.querySelector(".layout-menu-horizontal.menu, .layout-menu-horizontal .menu")
                                        , a = (document.querySelector(".layout-wrapper.layout-navbar-full"),
                                            !!document.querySelector(".content-footer"));
                                    this._controls.showDropdownOnHover && (e ? (this._controls.showDropdownOnHover.setAttribute("disabled", "disabled"),
                                        this._controls.showDropdownOnHover.classList.add("disabled")) : (this._controls.showDropdownOnHover.removeAttribute("disabled"),
                                            this._controls.showDropdownOnHover.classList.remove("disabled"))),
                                        this._controls.layoutNavbarOptions && (t ? (this._controls.layoutNavbarOptions.removeAttribute("disabled"),
                                            this._controls.layoutNavbarOptionsW.classList.remove("disabled")) : (this._controls.layoutNavbarOptions.setAttribute("disabled", "disabled"),
                                                this._controls.layoutNavbarOptionsW.classList.add("disabled")),
                                            n && t && "fixed" === this.settings.headerType && (this._controls.layoutNavbarOptions.setAttribute("disabled", "disabled"),
                                                this._controls.layoutNavbarOptionsW.classList.add("disabled"))),
                                        this._controls.layoutFooterFixed && (a ? (this._controls.layoutFooterFixed.removeAttribute("disabled"),
                                            this._controls.layoutFooterFixedW.classList.remove("disabled")) : (this._controls.layoutFooterFixed.setAttribute("disabled", "disabled"),
                                                this._controls.layoutFooterFixedW.classList.add("disabled"))),
                                        this._controls.headerType && (e || n ? this._controls.headerType.removeAttribute("disabled") : this._controls.headerType.setAttribute("disabled", "disabled"))
                                }
                            }
                        }, {
                            key: "clearLocalStorage",
                            value: function () {
                                this._ssr || (this._setSetting("Theme", ""),
                                    this._setSetting("Style", ""),
                                    this._setSetting("LayoutCollapsed", ""),
                                    this._setSetting("FixedNavbarOption", ""),
                                    this._setSetting("LayoutType", ""),
                                    this._setSetting("contentLayout", ""),
                                    this._setSetting("Rtl", ""),
                                    this._showResetBtnNotification(!1))
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this._ssr || (this._cleanup(),
                                    this.settings = null,
                                    this.container.parentNode.removeChild(this.container),
                                    this.container = null)
                            }
                        }, {
                            key: "_loadSettings",
                            value: function () {
                                var t, e, n = this._getSetting("Rtl"), a = this._getSetting("Style"), s = this._getSetting("Theme"), i = this._getSetting("contentLayout"), o = this._getSetting("LayoutCollapsed"), l = this._getSetting("ShowDropdownOnHover"), r = this._getSetting("FixedNavbarOption"), c = this._getSetting("FixedFooter"), m = this._getSetting("LayoutType");
                                "" !== n || "" !== a || "" !== s || "" !== i || "" !== o || "" !== r || "" !== m ? this._showResetBtnNotification(!0) : this._showResetBtnNotification(!1),
                                    t = "" !== m && -1 !== ["static", "static-offcanvas", "fixed", "fixed-offcanvas"].indexOf(m) ? m : this.settings.defaultHeaderType,
                                    this.settings.headerType = t,
                                    this.settings.rtl = "" !== n ? "true" === n : this.settings.defaultTextDir,
                                    this.settings.stylesOpt = -1 !== this.settings.styles.indexOf(a) ? a : this.settings.defaultStyle,
                                    "system" === this.settings.stylesOpt ? window.matchMedia("(prefers-color-scheme: dark)").matches ? this.settings.style = "dark" : this.settings.style = "light" : this.settings.style = -1 !== this.settings.styles.indexOf(a) ? a : this.settings.defaultStyle,
                                    -1 === this.settings.styles.indexOf(this.settings.style) && (this.settings.style = this.settings.styles[0]),
                                    this.settings.contentLayout = "" !== i ? i : this.settings.defaultContentLayout,
                                    this.settings.layoutCollapsed = "" !== o ? o : this.settings.defaultMenuCollapsed,
                                    this.settings.showDropdownOnHover = "" !== l ? "true" === l : this.settings.defaultShowDropdownOnHover,
                                    e = "" !== r && -1 !== ["static", "sticky", "hidden"].indexOf(r) ? r : this.settings.defaultNavbarType,
                                    this.settings.layoutNavbarOptions = e,
                                    this.settings.layoutFooterFixed = "" !== c ? "true" === c : this.settings.defaultFooterFixed,
                                    this.settings.theme = this._getThemeByName(this._getSetting("Theme"), !0),
                                    this._hasControls("rtl") || (this.settings.rtl = "rtl" === document.documentElement.getAttribute("dir")),
                                    this._hasControls("style") || (this.settings.style = z.contains("dark-style") ? "dark" : "light"),
                                    this._hasControls("contentLayout") || (this.settings.contentLayout = null),
                                    this._hasControls("headerType") || (this.settings.headerType = null),
                                    this._hasControls("layoutCollapsed") || (this.settings.layoutCollapsed = null),
                                    this._hasControls("layoutNavbarOptions") || (this.settings.layoutNavbarOptions = null),
                                    this._hasControls("themes") || (this.settings.theme = null)
                            }
                        }, {
                            key: "_setup",
                            value: function () {
                                var t = this
                                    , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                                this._cleanup(),
                                    this.container = this._getElementFromString('<div id="template-customizer" class="invert-bg-white"> <a href="javascript:void(0)" class="template-customizer-open-btn" tabindex="-1"></a> <div class="p-4 m-0 lh-1 border-bottom template-customizer-header position-relative py-3"> <h4 class="template-customizer-t-panel_header mb-2"></h4> <p class="template-customizer-t-panel_sub_header mb-0"></p> <div class="d-flex align-items-center gap-2 position-absolute end-0 top-0 mt-4 me-3"> <a href="javascript:void(0)" class="template-customizer-reset-btn text-body" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Reset Customizer"><i class="bx bx-refresh fs-4"></i><span class="badge rounded-pill bg-danger badge-dot badge-notifications d-none"></span></a> <a href="javascript:void(0)" class="template-customizer-close-btn fw-light text-body" tabindex="-1"><i class="bx bx-x fs-4"></i></a> </div> </div> <div class="template-customizer-inner pt-4"> <div class="template-customizer-theming"> <h5 class="m-0 px-4 py-4 lh-1 d-block"> <span class="template-customizer-t-theming_header bg-label-primary rounded-1 py-1 px-2 fs-big"></span> </h5> <div class="m-0 px-4 pb-3 pt-1 template-customizer-style w-100"> <label for="customizerStyle" class="form-label d-block template-customizer-t-style_label"></label> <div class="row px-1 template-customizer-styles-options"></div> </div> <div class="m-0 px-4 pt-3 template-customizer-themes w-100"> <label for="customizerTheme" class="form-label template-customizer-t-theme_label"></label> <div class="row px-1 template-customizer-themes-options"></div> </div> </div> <div class="template-customizer-layout"> <hr class="m-0 px-4 my-4"/> <h5 class="m-0 px-4 pb-4 pt-2 d-block"> <span class="template-customizer-t-layout_header bg-label-primary rounded-1 py-1 px-2 fs-big"></span> </h5> <div class="m-0 px-4 pb-3 d-block template-customizer-layouts"> <label for="customizerStyle" class="form-label d-block template-customizer-t-layout_label"></label> <div class="row px-1 template-customizer-layouts-options"> </div> </div> <div class="m-0 px-4 pb-3 template-customizer-headerOptions w-100"> <label for="customizerHeader" class="form-label template-customizer-t-layout_header_label"></label> <div class="row px-1 template-customizer-header-options"></div> </div> <div class="m-0 px-4 pb-3 template-customizer-layoutNavbarOptions w-100"> <label for="customizerNavbar" class="form-label template-customizer-t-layout_navbar_label"></label> <div class="row px-1 template-customizer-navbar-options"></div> </div> <div class="m-0 px-4 pb-3 template-customizer-content w-100"> <label for="customizerContent" class="form-label template-customizer-t-content_label"></label> <div class="row px-1 template-customizer-content-options"></div> </div> <div class="m-0 px-4 pb-3 template-customizer-directions w-100"> <label for="customizerDirection" class="form-label template-customizer-t-direction_label"></label> <div class="row px-1 template-customizer-directions-options"></div> </div> </div> </div> </div> ');
                                var n = this.container;
                                this.settings.displayCustomizer ? n.setAttribute("style", "visibility: visible") : n.setAttribute("style", "visibility: hidden");
                                var a = this.container.querySelector(".template-customizer-open-btn")
                                    , s = function () {
                                        t.container.classList.add("template-customizer-open"),
                                            t.update(),
                                            t._updateInterval && clearInterval(t._updateInterval),
                                            t._updateInterval = setInterval((function () {
                                                t.update()
                                            }
                                            ), 500)
                                    };
                                a.addEventListener("click", s),
                                    this._listeners.push([a, "click", s]);
                                var i = this.container.querySelector(".template-customizer-reset-btn")
                                    , o = function () {
                                        t.clearLocalStorage(),
                                            window.location.reload()
                                    };
                                i.addEventListener("click", o),
                                    this._listeners.push([i, "click", o]);
                                var l = this.container.querySelector(".template-customizer-close-btn")
                                    , r = function () {
                                        t.container.classList.remove("template-customizer-open"),
                                            t._updateInterval && (clearInterval(t._updateInterval),
                                                t._updateInterval = null)
                                    };
                                l.addEventListener("click", r),
                                    this._listeners.push([l, "click", r]);
                                var c = this.container.querySelector(".template-customizer-style");
                                if (this._hasControls("style")) {
                                    var m = c.querySelector(".template-customizer-styles-options");
                                    this.settings.availableStyles.forEach((function (e) {
                                        var n = t._getElementFromString('<div class="col-4 px-2">\n            <div class="form-check custom-option custom-option-icon mb-0">\n              <label class="form-check-label custom-option-content p-0" for="styleRadio'.concat(e.name, '">\n                <span class="custom-option-body mb-0">\n                  <img src="').concat(assetsPath, "img/customizer/").concat(e.name).concat(z.contains("dark-style") ? "-dark" : "", '.svg" alt="Style" class="img-fluid scaleX-n1-rtl" />\n                </span>\n                <input\n                  name="customRadioIcon"\n                  class="form-check-input d-none"\n                  type="radio"\n                  value="').concat(e.name, '"\n                  id="styleRadio').concat(e.name, '" />\n              </label>\n            </div>\n            <label class="form-check-label small" for="themeRadios').concat(e.name, '">').concat(e.title, "</label>\n          </div>"));
                                        m.appendChild(n)
                                    }
                                    )),
                                        m.querySelector('input[value="'.concat(this.settings.stylesOpt, '"]')).setAttribute("checked", "checked");
                                    var u = function (e) {
                                        t._loadingState(!0),
                                            t.setStyle(e.target.value, !0, (function () {
                                                t._loadingState(!1)
                                            }
                                            ))
                                    };
                                    m.addEventListener("change", u),
                                        this._listeners.push([m, "change", u])
                                } else
                                    c.parentNode.removeChild(c);
                                var d = this.container.querySelector(".template-customizer-themes");
                                if (this._hasControls("themes")) {
                                    var h = d.querySelector(".template-customizer-themes-options");
                                    this.settings.availableThemes.forEach((function (e) {
                                        var n;
                                        n = "theme-semi-dark" === e.name ? "semi-dark" : "theme-bordered" === e.name ? "border" : "default";
                                        var a = t._getElementFromString('<div class="col-4 px-2">\n          <div class="form-check custom-option custom-option-icon mb-0">\n            <label class="form-check-label custom-option-content p-0" for="themeRadios'.concat(e.name, '">\n              <span class="custom-option-body mb-0">\n                <img src="').concat(assetsPath, "img/customizer/").concat(n).concat(z.contains("dark-style") ? "-dark" : "", '.svg" alt="Themes" class="img-fluid scaleX-n1-rtl" />\n              </span>\n              <input\n                class="form-check-input d-none"\n                type="radio"\n                name="themeRadios"\n                id="themeRadios').concat(e.name, '"\n                value="').concat(e.name, '" />\n            </label>\n            </div>\n            <label class="form-check-label small" for="themeRadios').concat(e.name, '">').concat(e.title, "</label>\n        </div>"));
                                        h.appendChild(a)
                                    }
                                    )),
                                        h.querySelector('input[value="'.concat(this.settings.theme.name, '"]')).setAttribute("checked", "checked");
                                    var p = function (e) {
                                        t._loading = !0,
                                            t._loadingState(!0, !0),
                                            t.setTheme(e.target.value, !0, (function () {
                                                t._loading = !1,
                                                    t._loadingState(!1, !0)
                                            }
                                            ))
                                    };
                                    h.addEventListener("change", p),
                                        this._listeners.push([h, "change", p])
                                } else
                                    d.parentNode.removeChild(d);
                                var f = this.container.querySelector(".template-customizer-theming");
                                this._hasControls("style") || this._hasControls("themes") || f.parentNode.removeChild(f);
                                var y = this.container.querySelector(".template-customizer-layout");
                                if (this._hasControls("rtl headerType contentLayout layoutCollapsed layoutNavbarOptions", !0)) {
                                    var v = this.container.querySelector(".template-customizer-directions");
                                    if (this._hasControls("rtl") && rtlSupport) {
                                        var b = v.querySelector(".template-customizer-directions-options");
                                        this.settings.availableDirections.forEach((function (e) {
                                            var n = t._getElementFromString('<div class="col-4 px-2">\n              <div class="form-check custom-option custom-option-icon mb-0">\n                <label class="form-check-label custom-option-content p-0" for="directionRadio'.concat(e.name, '">\n                  <span class="custom-option-body mb-0">\n                    <img src="').concat(assetsPath, "img/customizer/").concat(e.name).concat(z.contains("dark-style") ? "-dark" : "", '.svg" alt="Directions" class="img-fluid" />\n                  </span>\n                  <input\n                    name=directionRadioIcon"\n                    class="form-check-input d-none"\n                    type="radio"\n                    value="').concat(e.name, '"\n                    id="directionRadio').concat(e.name, '" />\n                </label>\n              </div>\n              <label class="form-check-label small" for="directionRadios').concat(e.name, '">').concat(e.title, "</label>\n            </div>"));
                                            b.appendChild(n)
                                        }
                                        )),
                                            b.querySelector('input[value="'.concat(this.settings.rtl ? "rtl" : "ltr", '"]')).setAttribute("checked", "checked");
                                        var g = function (e) {
                                            t._loadingState(!0),
                                                t.setRtl("rtl" === e.target.value, !0, (function () {
                                                    t._loadingState(!1)
                                                }
                                                ))
                                        };
                                        b.addEventListener("change", g),
                                            this._listeners.push([b, "change", g])
                                    } else
                                        v.parentNode.removeChild(v);
                                    var _ = this.container.querySelector(".template-customizer-headerOptions");
                                    if (this._hasControls("headerType")) {
                                        var S = _.querySelector(".template-customizer-header-options");
                                        setTimeout((function () {
                                            document.querySelector(".menu-vertical") && _.parentNode.removeChild(_)
                                        }
                                        ), 100),
                                            this.settings.availableHeaderTypes.forEach((function (e) {
                                                var n = t._getElementFromString('<div class="col-4 px-2">\n                <div class="form-check custom-option custom-option-icon mb-0">\n                  <label class="form-check-label custom-option-content p-0" for="headerRadio'.concat(e.name, '">\n                    <span class="custom-option-body mb-0">\n                      <img src="').concat(assetsPath, "img/customizer/horizontal-").concat(e.name).concat(z.contains("dark-style") ? "-dark" : "", '.svg" alt="Header Types" class="img-fluid scaleX-n1-rtl" />\n                    </span>\n                    <input\n                      name=headerRadioIcon"\n                      class="form-check-input d-none"\n                      type="radio"\n                      value="').concat(e.name, '"\n                      id="headerRadio').concat(e.name, '" />\n                  </label>\n                </div>\n                <label class="form-check-label small" for="headerRadios').concat(e.name, '">').concat(e.title, "</label>\n              </div>"));
                                                S.appendChild(n)
                                            }
                                            )),
                                            S.querySelector('input[value="'.concat(this.settings.headerType, '"]')).setAttribute("checked", "checked");
                                        var x = function (e) {
                                            t.setLayoutType(e.target.value)
                                        };
                                        S.addEventListener("change", x),
                                            this._listeners.push([S, "change", x])
                                    } else
                                        _.parentNode.removeChild(_);
                                    var w = this.container.querySelector(".template-customizer-content");
                                    if (this._hasControls("contentLayout")) {
                                        var k = w.querySelector(".template-customizer-content-options");
                                        this.settings.availableContentLayouts.forEach((function (e) {
                                            var n = t._getElementFromString('<div class="col-4 px-2">\n              <div class="form-check custom-option custom-option-icon mb-0">\n                <label class="form-check-label custom-option-content p-0" for="contentRadio'.concat(e.name, '">\n                  <span class="custom-option-body mb-0">\n                    <img src="').concat(assetsPath, "img/customizer/").concat(e.name).concat(z.contains("dark-style") ? "-dark" : "", '.svg" alt="content type" class="img-fluid scaleX-n1-rtl" />\n                  </span>\n                  <input\n                    name=contentRadioIcon"\n                    class="form-check-input d-none"\n                    type="radio"\n                    value="').concat(e.name, '"\n                    id="contentRadio').concat(e.name, '" />\n                </label>\n              </div>\n              <label class="form-check-label small" for="contentRadios').concat(e.name, '">').concat(e.title, "</label>\n            </div>"));
                                            k.appendChild(n)
                                        }
                                        )),
                                            k.querySelector('input[value="'.concat(this.settings.contentLayout, '"]')).setAttribute("checked", "checked");
                                        var C = function (e) {
                                            t._loading = !0,
                                                t._loadingState(!0, !0),
                                                t.setContentLayout(e.target.value, !0, (function () {
                                                    t._loading = !1,
                                                        t._loadingState(!1, !0)
                                                }
                                                ))
                                        };
                                        k.addEventListener("change", C),
                                            this._listeners.push([k, "change", C])
                                    } else
                                        w.parentNode.removeChild(w);
                                    var T = this.container.querySelector(".template-customizer-layouts");
                                    if (this._hasControls("layoutCollapsed")) {
                                        setTimeout((function () {
                                            document.querySelector(".layout-menu-horizontal") && T.parentNode.removeChild(T)
                                        }
                                        ), 100);
                                        var N, L = T.querySelector(".template-customizer-layouts-options");
                                        N = "true" === this.settings.layoutCollapsed ? "collapsed" : "expanded",
                                            this.settings.availableLayouts.forEach((function (e) {
                                                var n = t._getElementFromString('<div class="col-4 px-2">\n          <div class="form-check custom-option custom-option-icon mb-0">\n            <label class="form-check-label custom-option-content p-0" for="layoutsRadios'.concat(e.name, '">\n              <span class="custom-option-body mb-0">\n              <img src="').concat(assetsPath, "img/customizer/").concat(e.name).concat(z.contains("dark-style") ? "-dark" : "", '.svg" alt="Layout Collapsed/Expanded" class="img-fluid scaleX-n1-rtl" />\n              </span>\n              <input\n              class="form-check-input d-none"\n                type="radio"\n                name="layoutsRadios"\n                id="layoutsRadios').concat(e.name, '"\n                value="').concat(e.name, '" />\n            </label>\n            </div>\n            <label class="form-check-label small" for="layoutsRadios').concat(e.name, '">').concat(e.title, "</label>\n            </div>"));
                                                L.appendChild(n)
                                            }
                                            )),
                                            L.querySelector('input[value="'.concat(N, '"]')).setAttribute("checked", "checked");
                                        var E = function (e) {
                                            window.Helpers.setCollapsed("collapsed" === e.target.value, !0),
                                                t._setSetting("LayoutCollapsed", "collapsed" === e.target.value)
                                        };
                                        L.addEventListener("change", E),
                                            this._listeners.push([L, "change", E])
                                    } else
                                        T.parentNode.removeChild(T);
                                    var A = this.container.querySelector(".template-customizer-layoutNavbarOptions");
                                    if (this._hasControls("layoutNavbarOptions")) {
                                        setTimeout((function () {
                                            document.querySelector(".menu-horizontal") && A.parentNode.removeChild(A)
                                        }
                                        ), 100);
                                        var O = A.querySelector(".template-customizer-navbar-options");
                                        this.settings.availableNavbarOptions.forEach((function (e) {
                                            var n = t._getElementFromString('<div class="col-4 px-2">\n          <div class="form-check custom-option custom-option-icon mb-0">\n            <label class="form-check-label custom-option-content p-0" for="navbarOptionRadios'.concat(e.name, '">\n              <span class="custom-option-body mb-0">\n                <img src="').concat(assetsPath, "img/customizer/").concat(e.name).concat(z.contains("dark-style") ? "-dark" : "", '.svg" alt="Navbar Type" class="img-fluid scaleX-n1-rtl" />\n              </span>\n              <input\n                class="form-check-input d-none"\n                type="radio"\n                name="navbarOptionRadios"\n                id="navbarOptionRadios').concat(e.name, '"\n                value="').concat(e.name, '" />\n            </label>\n            </div>\n            <label class="form-check-label small" for="navbarOptionRadios').concat(e.name, '">').concat(e.title, "</label>\n        </div>"));
                                            O.appendChild(n)
                                        }
                                        )),
                                            O.querySelector('input[value="'.concat(this.settings.layoutNavbarOptions, '"]')).setAttribute("checked", "checked");
                                        var R = function (e) {
                                            t._loading = !0,
                                                t._loadingState(!0, !0),
                                                t.setLayoutNavbarOption(e.target.value, !0, (function () {
                                                    t._loading = !1,
                                                        t._loadingState(!1, !0)
                                                }
                                                ))
                                        };
                                        O.addEventListener("change", R),
                                            this._listeners.push([O, "change", R])
                                    } else
                                        A.parentNode.removeChild(A)
                                } else
                                    y.parentNode.removeChild(y);
                                this.setLang(this.settings.lang, !0),
                                    e === document ? e.body ? e.body.appendChild(this.container) : window.addEventListener("DOMContentLoaded", (function () {
                                        return e.body.appendChild(t.container)
                                    }
                                    )) : e.appendChild(this.container)
                            }
                        }, {
                            key: "_initDirection",
                            value: function () {
                                this._hasControls("rtl") && document.documentElement.setAttribute("dir", this.settings.rtl ? "rtl" : "ltr")
                            }
                        }, {
                            key: "_initStyle",
                            value: function () {
                                if (this._hasControls("style")) {
                                    var t = this.settings.style;
                                    this._insertStylesheet("template-customizer-core-css", this.pathResolver(this.settings.cssPath + this.settings.cssFilenamePattern.replace("%name%", "core".concat("light" !== t ? "-".concat(t) : "")))),
                                        ("light" === t ? ["dark-style"] : ["light-style"]).forEach((function (t) {
                                            document.documentElement.classList.remove(t)
                                        }
                                        )),
                                        document.documentElement.classList.add("".concat(t, "-style"))
                                }
                            }
                        }, {
                            key: "_initTheme",
                            value: function () {
                                if (this._hasControls("themes"))
                                    this._insertStylesheet("template-customizer-theme-css", this.pathResolver(this.settings.themesPath + this.settings.cssFilenamePattern.replace("%name%", this.settings.theme.name + ("light" !== this.settings.style ? "-".concat(this.settings.style) : ""))));
                                else {
                                    var t = this._getSetting("Theme");
                                    this._insertStylesheet("template-customizer-theme-css", this.pathResolver(this.settings.themesPath + this.settings.cssFilenamePattern.replace("%name%", t || "theme-default" + ("light" !== this.settings.style ? "-".concat(this.settings.style) : ""))))
                                }
                            }
                        }, {
                            key: "_insertStylesheet",
                            value: function (t, e) {
                                var n = document.querySelector(".".concat(t));
                                if ("number" == typeof document.documentMode && document.documentMode < 11) {
                                    if (!n)
                                        return;
                                    if (e === n.getAttribute("href"))
                                        return;
                                    var a = document.createElement("link");
                                    a.setAttribute("rel", "stylesheet"),
                                        a.setAttribute("type", "text/css"),
                                        a.className = t,
                                        a.setAttribute("href", e),
                                        n.parentNode.insertBefore(a, n.nextSibling)
                                } else
                                    document.write('<link rel="stylesheet" type="text/css" href="'.concat(e, '" class="').concat(t, '">'));
                                n.parentNode.removeChild(n)
                            }
                        }, {
                            key: "_loadStylesheets",
                            value: function (t, e) {
                                var n = Object.keys(t)
                                    , a = n.length
                                    , s = 0;
                                function i(t, e, n) {
                                    var a = document.createElement("link");
                                    a.setAttribute("href", t),
                                        a.setAttribute("rel", "stylesheet"),
                                        a.setAttribute("type", "text/css"),
                                        a.className = e.className;
                                    var s, i = "sheet" in a ? "sheet" : "styleSheet", o = "sheet" in a ? "cssRules" : "rules", l = setTimeout((function () {
                                        clearInterval(s),
                                            clearTimeout(l),
                                            e.parentNode.removeChild(a),
                                            n(!1, t)
                                    }
                                    ), 15e3);
                                    s = setInterval((function () {
                                        try {
                                            a[i] && a[i][o].length && (clearInterval(s),
                                                clearTimeout(l),
                                                e.parentNode.removeChild(e),
                                                n(!0))
                                        } catch (t) { }
                                    }
                                    ), 10),
                                        e.parentNode.insertBefore(a, e.nextSibling)
                                }
                                for (var o = 0; o < n.length; o++)
                                    i(n[o], t[n[o]], void ((s += 1) >= a && e()))
                            }
                        }, {
                            key: "_loadingState",
                            value: function (t, e) {
                                this.container.classList[t ? "add" : "remove"]("template-customizer-loading".concat(e ? "-theme" : ""))
                            }
                        }, {
                            key: "_getElementFromString",
                            value: function (t) {
                                var e = document.createElement("div");
                                return e.innerHTML = t,
                                    e.firstChild
                            }
                        }, {
                            key: "_getSetting",
                            value: function (t) {
                                var e = null
                                    , n = this._getLayoutName();
                                try {
                                    e = localStorage.getItem("templateCustomizer-".concat(n, "--").concat(t))
                                } catch (t) { }
                                return String(e || "")
                            }
                        }, {
                            key: "_showResetBtnNotification",
                            value: function () {
                                var t = this
                                    , e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                setTimeout((function () {
                                    var n = t.container.querySelector(".template-customizer-reset-btn .badge");
                                    e ? n.classList.remove("d-none") : n.classList.add("d-none")
                                }
                                ), 200)
                            }
                        }, {
                            key: "_setSetting",
                            value: function (t, e) {
                                var n = this._getLayoutName();
                                try {
                                    localStorage.setItem("templateCustomizer-".concat(n, "--").concat(t), String(e)),
                                        this._showResetBtnNotification()
                                } catch (t) { }
                            }
                        }, {
                            key: "_getLayoutName",
                            value: function () {
                                return document.getElementsByTagName("HTML")[0].getAttribute("data-template")
                            }
                        }, {
                            key: "_removeListeners",
                            value: function () {
                                for (var t = 0, e = this._listeners.length; t < e; t++)
                                    this._listeners[t][0].removeEventListener(this._listeners[t][1], this._listeners[t][2])
                            }
                        }, {
                            key: "_cleanup",
                            value: function () {
                                this._removeListeners(),
                                    this._listeners = [],
                                    this._controls = {},
                                    this._updateInterval && (clearInterval(this._updateInterval),
                                        this._updateInterval = null)
                            }
                        }, {
                            key: "_ssr",
                            get: function () {
                                return "undefined" == typeof window
                            }
                        }, {
                            key: "_hasControls",
                            value: function (t) {
                                var e = this
                                    , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return t.split(" ").reduce((function (t, a) {
                                    return -1 !== e.settings.controls.indexOf(a) ? (n || !1 !== t) && (t = !0) : n && !0 === t || (t = !1),
                                        t
                                }
                                ), null)
                            }
                        }, {
                            key: "_getDefaultTheme",
                            value: function (t) {
                                var e;
                                if (!(e = "string" == typeof t ? this._getThemeByName(t, !1) : this.settings.availableThemes[t]))
                                    throw new Error('Theme ID "'.concat(t, '" not found!'));
                                return e
                            }
                        }, {
                            key: "_getThemeByName",
                            value: function (t) {
                                for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.settings.availableThemes, a = 0, s = n.length; a < s; a++)
                                    if (n[a].name === t)
                                        return n[a];
                                return e ? this.settings.defaultTheme : null
                            }
                        }],
                        n && v(e.prototype, n),
                        Object.defineProperty(e, "prototype", {
                            writable: !1
                        }),
                        t
                }();
            A.STYLES = [{
                name: "light",
                title: "Light"
            }, {
                name: "dark",
                title: "Dark"
            }, {
                name: "system",
                title: "System"
            }],
                A.THEMES = [{
                    name: "theme-default",
                    title: "Default"
                }, {
                    name: "theme-bordered",
                    title: "Bordered"
                }, {
                    name: "theme-semi-dark",
                    title: "Semi Dark"
                }],
                A.LAYOUTS = [{
                    name: "expanded",
                    title: "Expanded"
                }, {
                    name: "collapsed",
                    title: "Collapsed"
                }],
                A.NAVBAR_OPTIONS = [{
                    name: "sticky",
                    title: "Sticky"
                }, {
                    name: "static",
                    title: "Static"
                }, {
                    name: "hidden",
                    title: "Hidden"
                }],
                A.HEADER_TYPES = [{
                    name: "fixed",
                    title: "Fixed"
                }, {
                    name: "static",
                    title: "Static"
                }],
                A.CONTENT = [{
                    name: "compact",
                    title: "Compact"
                }, {
                    name: "wide",
                    title: "Wide"
                }],
                A.DIRECTIONS = [{
                    name: "ltr",
                    title: "Left to Right"
                }, {
                    name: "rtl",
                    title: "Right to Left"
                }],
                A.LANGUAGES = {
                    en: {
                        panel_header: "Template Customizer",
                        panel_sub_header: "Customize and preview in real time",
                        theming_header: "Theming",
                        style_label: "Style (Mode)",
                        theme_label: "Themes",
                        layout_header: "Layout",
                        layout_label: "Menu (Navigation)",
                        layout_header_label: "Header Types",
                        content_label: "Content",
                        layout_navbar_label: "Navbar Type",
                        direction_label: "Direction"
                    },
                    fr: {
                        panel_header: "Modèle De Personnalisation",
                        panel_sub_header: "Personnalisez et prévisualisez en temps réel",
                        theming_header: "Thématisation",
                        style_label: "Style (Mode)",
                        theme_label: "Thèmes",
                        layout_header: "Disposition",
                        layout_label: "Menu (Navigation)",
                        layout_header_label: "Types d'en-tête",
                        content_label: "Contenu",
                        layout_navbar_label: "Type de barre de navigation",
                        direction_label: "Direction"
                    },
                    de: {
                        panel_header: "Vorlagen-Anpasser",
                        panel_sub_header: "Anpassen und Vorschau in Echtzeit",
                        theming_header: "Themen",
                        style_label: "Stil (Modus)",
                        theme_label: "Themen",
                        layout_header: "Layout",
                        layout_label: "Menü (Navigation)",
                        layout_header_label: "Header-Typen",
                        content_label: "Inhalt",
                        layout_navbar_label: "Art der Navigationsleiste",
                        direction_label: "Richtung"
                    },
                    pt: {
                        panel_header: "Personalizador De Modelo",
                        panel_sub_header: "Personalize e visualize em tempo real",
                        theming_header: "Temas",
                        style_label: "Estilo (Modo)",
                        theme_label: "Temas",
                        layout_header: "Esquema",
                        layout_label: "Menu (Navegação)",
                        layout_header_label: "Tipos de cabeçalho",
                        content_label: "Contente",
                        layout_navbar_label: "Tipo de barra de navegação",
                        direction_label: "Direção"
                    }
                }
        }(),
            a
    }()
}
));
