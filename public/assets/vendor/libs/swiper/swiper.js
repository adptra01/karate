!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var s = t();
        for (var a in s)
            ("object" == typeof exports ? exports : e)[a] = s[a]
    }
}(self, (function () {
    return function () {
        "use strict";
        var e = {
            d: function (t, s) {
                for (var a in s)
                    e.o(s, a) && !e.o(t, a) && Object.defineProperty(t, a, {
                        enumerable: !0,
                        get: s[a]
                    })
            },
            o: function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            r: function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
        }
            , t = {};
        function s(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }
        function a(e = {}, t = {}) {
            Object.keys(t).forEach((i => {
                void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && a(e[i], t[i])
            }
            ))
        }
        e.r(t),
            e.d(t, {
                Swiper: function () {
                    return Z
                }
            });
        const i = {
            body: {},
            addEventListener() { },
            removeEventListener() { },
            activeElement: {
                blur() { },
                nodeName: ""
            },
            querySelector() {
                return null
            },
            querySelectorAll() {
                return []
            },
            getElementById() {
                return null
            },
            createEvent() {
                return {
                    initEvent() { }
                }
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() { },
                    getElementsByTagName() {
                        return []
                    }
                }
            },
            createElementNS() {
                return {}
            },
            importNode() {
                return null
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function r() {
            const e = "undefined" != typeof document ? document : {};
            return a(e, i),
                e
        }
        const n = {
            document: i,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() { },
                pushState() { },
                go() { },
                back() { }
            },
            CustomEvent: function () {
                return this
            },
            addEventListener() { },
            removeEventListener() { },
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return ""
                    }
                }
            },
            Image() { },
            Date() { },
            screen: {},
            setTimeout() { },
            clearTimeout() { },
            matchMedia() {
                return {}
            },
            requestAnimationFrame(e) {
                return "undefined" == typeof setTimeout ? (e(),
                    null) : setTimeout(e, 0)
            },
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };
        function l() {
            const e = "undefined" != typeof window ? window : {};
            return a(e, n),
                e
        }
        function o(e, t = 0) {
            return setTimeout(e, t)
        }
        function d() {
            return Date.now()
        }
        function c(e, t = "x") {
            const s = l();
            let a, i, r;
            const n = function (e) {
                const t = l();
                let s;
                return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                    !s && e.currentStyle && (s = e.currentStyle),
                    s || (s = e.style),
                    s
            }(e);
            return s.WebKitCSSMatrix ? (i = n.transform || n.webkitTransform,
                i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")),
                r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                    a = r.toString().split(",")),
                "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
                "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
                i || 0
        }
        function p(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }
        function u(...e) {
            const t = Object(e[0])
                , s = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < e.length; i += 1) {
                const r = e[i];
                if (null != r && (a = r,
                    !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
                    const e = Object.keys(Object(r)).filter((e => s.indexOf(e) < 0));
                    for (let s = 0, a = e.length; s < a; s += 1) {
                        const a = e[s]
                            , i = Object.getOwnPropertyDescriptor(r, a);
                        void 0 !== i && i.enumerable && (p(t[a]) && p(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : u(t[a], r[a]) : !p(t[a]) && p(r[a]) ? (t[a] = {},
                            r[a].__swiper__ ? t[a] = r[a] : u(t[a], r[a])) : t[a] = r[a])
                    }
                }
            }
            var a;
            return t
        }
        function m(e, t, s) {
            e.style.setProperty(t, s)
        }
        function h({ swiper: e, targetPosition: t, side: s }) {
            const a = l()
                , i = -e.translate;
            let r, n = null;
            const o = e.params.speed;
            e.wrapperEl.style.scrollSnapType = "none",
                a.cancelAnimationFrame(e.cssModeFrameID);
            const d = t > i ? "next" : "prev"
                , c = (e, t) => "next" === d && e >= t || "prev" === d && e <= t
                , p = () => {
                    r = (new Date).getTime(),
                        null === n && (n = r);
                    const l = Math.max(Math.min((r - n) / o, 1), 0)
                        , d = .5 - Math.cos(l * Math.PI) / 2;
                    let u = i + d * (t - i);
                    if (c(u, t) && (u = t),
                        e.wrapperEl.scrollTo({
                            [s]: u
                        }),
                        c(u, t))
                        return e.wrapperEl.style.overflow = "hidden",
                            e.wrapperEl.style.scrollSnapType = "",
                            setTimeout((() => {
                                e.wrapperEl.style.overflow = "",
                                    e.wrapperEl.scrollTo({
                                        [s]: u
                                    })
                            }
                            )),
                            void a.cancelAnimationFrame(e.cssModeFrameID);
                    e.cssModeFrameID = a.requestAnimationFrame(p)
                }
                ;
            p()
        }
        function f(e) {
            return e.querySelector(".swiper-slide-transform") || e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform") || e
        }
        function g(e, t = "") {
            return [...e.children].filter((e => e.matches(t)))
        }
        function v(e, t = []) {
            const s = document.createElement(e);
            return s.classList.add(...Array.isArray(t) ? t : [t]),
                s
        }
        function w(e) {
            const t = l()
                , s = r()
                , a = e.getBoundingClientRect()
                , i = s.body
                , n = e.clientTop || i.clientTop || 0
                , o = e.clientLeft || i.clientLeft || 0
                , d = e === t ? t.scrollY : e.scrollTop
                , c = e === t ? t.scrollX : e.scrollLeft;
            return {
                top: a.top + d - n,
                left: a.left + c - o
            }
        }
        function b(e, t) {
            return l().getComputedStyle(e, null).getPropertyValue(t)
        }
        function y(e) {
            let t, s = e;
            if (s) {
                for (t = 0; null !== (s = s.previousSibling);)
                    1 === s.nodeType && (t += 1);
                return t
            }
        }
        function E(e, t) {
            const s = [];
            let a = e.parentElement;
            for (; a;)
                t ? a.matches(t) && s.push(a) : s.push(a),
                    a = a.parentElement;
            return s
        }
        function x(e, t) {
            t && e.addEventListener("transitionend", (function s(a) {
                a.target === e && (t.call(e, a),
                    e.removeEventListener("transitionend", s))
            }
            ))
        }
        function S(e, t, s) {
            const a = l();
            return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }
        let T, M, C;
        function P() {
            return T || (T = function () {
                const e = l()
                    , t = r();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()),
                T
        }
        var L = {
            on(e, t, s) {
                const a = this;
                if (!a.eventsListeners || a.destroyed)
                    return a;
                if ("function" != typeof t)
                    return a;
                const i = s ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    a.eventsListeners[e] || (a.eventsListeners[e] = []),
                        a.eventsListeners[e][i](t)
                }
                )),
                    a
            },
            once(e, t, s) {
                const a = this;
                if (!a.eventsListeners || a.destroyed)
                    return a;
                if ("function" != typeof t)
                    return a;
                function i(...s) {
                    a.off(e, i),
                        i.__emitterProxy && delete i.__emitterProxy,
                        t.apply(a, s)
                }
                return i.__emitterProxy = t,
                    a.on(e, i, s)
            },
            onAny(e, t) {
                const s = this;
                if (!s.eventsListeners || s.destroyed)
                    return s;
                if ("function" != typeof e)
                    return s;
                const a = t ? "unshift" : "push";
                return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
                    s
            },
            offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed)
                    return t;
                if (!t.eventsAnyListeners)
                    return t;
                const s = t.eventsAnyListeners.indexOf(e);
                return s >= 0 && t.eventsAnyListeners.splice(s, 1),
                    t
            },
            off(e, t) {
                const s = this;
                return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                        (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                    }
                    ))
                }
                )),
                    s) : s
            },
            emit(...e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed)
                    return t;
                if (!t.eventsListeners)
                    return t;
                let s, a, i;
                return "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0],
                    a = e.slice(1, e.length),
                    i = t) : (s = e[0].events,
                        a = e[0].data,
                        i = e[0].context || t),
                    a.unshift(i),
                    (Array.isArray(s) ? s : s.split(" ")).forEach((e => {
                        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                            t.apply(i, [e, ...a])
                        }
                        )),
                            t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                                e.apply(i, a)
                            }
                            ))
                    }
                    )),
                    t
            }
        };
        const z = (e, t) => {
            if (!e || e.destroyed || !e.params)
                return;
            const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (s) {
                const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                t && t.remove()
            }
        }
            , A = (e, t) => {
                if (!e.slides[t])
                    return;
                const s = e.slides[t].querySelector('[loading="lazy"]');
                s && s.removeAttribute("loading")
            }
            , $ = e => {
                if (!e || e.destroyed || !e.params)
                    return;
                let t = e.params.lazyPreloadPrevNext;
                const s = e.slides.length;
                if (!s || !t || t < 0)
                    return;
                t = Math.min(t, s);
                const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
                    , i = e.activeIndex;
                if (e.params.grid && e.params.grid.rows > 1) {
                    const s = i
                        , r = [s - t];
                    return r.push(...Array.from({
                        length: t
                    }).map(((e, t) => s + a + t))),
                        void e.slides.forEach(((t, s) => {
                            r.includes(t.column) && A(e, s)
                        }
                        ))
                }
                const r = i + a - 1;
                if (e.params.rewind || e.params.loop)
                    for (let a = i - t; a <= r + t; a += 1) {
                        const t = (a % s + s) % s;
                        (t < i || t > r) && A(e, t)
                    }
                else
                    for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1)
                        a !== i && (a > r || a < i) && A(e, a)
            }
            ;
        var I = {
            updateSize: function () {
                const e = this;
                let t, s;
                const a = e.el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth,
                    s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight,
                    0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10),
                        s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10),
                        Number.isNaN(t) && (t = 0),
                        Number.isNaN(s) && (s = 0),
                        Object.assign(e, {
                            width: t,
                            height: s,
                            size: e.isHorizontal() ? t : s
                        }))
            },
            updateSlides: function () {
                const e = this;
                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }
                function s(e, s) {
                    return parseFloat(e.getPropertyValue(t(s)) || 0)
                }
                const a = e.params
                    , { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: l, wrongRTL: o } = e
                    , d = e.virtual && a.virtual.enabled
                    , c = d ? e.virtual.slides.length : e.slides.length
                    , p = g(r, `.${e.params.slideClass}, swiper-slide`)
                    , u = d ? e.virtual.slides.length : p.length;
                let h = [];
                const f = []
                    , v = [];
                let w = a.slidesOffsetBefore;
                "function" == typeof w && (w = a.slidesOffsetBefore.call(e));
                let y = a.slidesOffsetAfter;
                "function" == typeof y && (y = a.slidesOffsetAfter.call(e));
                const E = e.snapGrid.length
                    , x = e.slidesGrid.length;
                let T = a.spaceBetween
                    , M = -w
                    , C = 0
                    , P = 0;
                if (void 0 === n)
                    return;
                "string" == typeof T && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * n : "string" == typeof T && (T = parseFloat(T)),
                    e.virtualSize = -T,
                    p.forEach((e => {
                        l ? e.style.marginLeft = "" : e.style.marginRight = "",
                            e.style.marginBottom = "",
                            e.style.marginTop = ""
                    }
                    )),
                    a.centeredSlides && a.cssMode && (m(i, "--swiper-centered-offset-before", ""),
                        m(i, "--swiper-centered-offset-after", ""));
                const L = a.grid && a.grid.rows > 1 && e.grid;
                let z;
                L && e.grid.initSlides(u);
                const A = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
                for (let i = 0; i < u; i += 1) {
                    let r;
                    if (z = 0,
                        p[i] && (r = p[i]),
                        L && e.grid.updateSlide(i, r, u, t),
                        !p[i] || "none" !== b(r, "display")) {
                        if ("auto" === a.slidesPerView) {
                            A && (p[i].style[t("width")] = "");
                            const n = getComputedStyle(r)
                                , l = r.style.transform
                                , o = r.style.webkitTransform;
                            if (l && (r.style.transform = "none"),
                                o && (r.style.webkitTransform = "none"),
                                a.roundLengths)
                                z = e.isHorizontal() ? S(r, "width", !0) : S(r, "height", !0);
                            else {
                                const e = s(n, "width")
                                    , t = s(n, "padding-left")
                                    , a = s(n, "padding-right")
                                    , i = s(n, "margin-left")
                                    , l = s(n, "margin-right")
                                    , o = n.getPropertyValue("box-sizing");
                                if (o && "border-box" === o)
                                    z = e + i + l;
                                else {
                                    const { clientWidth: s, offsetWidth: n } = r;
                                    z = e + t + a + i + l + (n - s)
                                }
                            }
                            l && (r.style.transform = l),
                                o && (r.style.webkitTransform = o),
                                a.roundLengths && (z = Math.floor(z))
                        } else
                            z = (n - (a.slidesPerView - 1) * T) / a.slidesPerView,
                                a.roundLengths && (z = Math.floor(z)),
                                p[i] && (p[i].style[t("width")] = `${z}px`);
                        p[i] && (p[i].swiperSlideSize = z),
                            v.push(z),
                            a.centeredSlides ? (M = M + z / 2 + C / 2 + T,
                                0 === C && 0 !== i && (M = M - n / 2 - T),
                                0 === i && (M = M - n / 2 - T),
                                Math.abs(M) < .001 && (M = 0),
                                a.roundLengths && (M = Math.floor(M)),
                                P % a.slidesPerGroup == 0 && h.push(M),
                                f.push(M)) : (a.roundLengths && (M = Math.floor(M)),
                                    (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup == 0 && h.push(M),
                                    f.push(M),
                                    M = M + z + T),
                            e.virtualSize += z + T,
                            C = z,
                            P += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, n) + y,
                    l && o && ("slide" === a.effect || "coverflow" === a.effect) && (i.style.width = `${e.virtualSize + T}px`),
                    a.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + T}px`),
                    L && e.grid.updateWrapperSize(z, h, t),
                    !a.centeredSlides) {
                    const t = [];
                    for (let s = 0; s < h.length; s += 1) {
                        let i = h[s];
                        a.roundLengths && (i = Math.floor(i)),
                            h[s] <= e.virtualSize - n && t.push(i)
                    }
                    h = t,
                        Math.floor(e.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - n)
                }
                if (d && a.loop) {
                    const t = v[0] + T;
                    if (a.slidesPerGroup > 1) {
                        const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / a.slidesPerGroup)
                            , i = t * a.slidesPerGroup;
                        for (let e = 0; e < s; e += 1)
                            h.push(h[h.length - 1] + i)
                    }
                    for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1)
                        1 === a.slidesPerGroup && h.push(h[h.length - 1] + t),
                            f.push(f[f.length - 1] + t),
                            e.virtualSize += t
                }
                if (0 === h.length && (h = [0]),
                    0 !== T) {
                    const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
                    p.filter(((e, t) => !(a.cssMode && !a.loop) || t !== p.length - 1)).forEach((e => {
                        e.style[s] = `${T}px`
                    }
                    ))
                }
                if (a.centeredSlides && a.centeredSlidesBounds) {
                    let e = 0;
                    v.forEach((t => {
                        e += t + (T || 0)
                    }
                    )),
                        e -= T;
                    const t = e - n;
                    h = h.map((e => e <= 0 ? -w : e > t ? t + y : e))
                }
                if (a.centerInsufficientSlides) {
                    let e = 0;
                    if (v.forEach((t => {
                        e += t + (T || 0)
                    }
                    )),
                        e -= T,
                        e < n) {
                        const t = (n - e) / 2;
                        h.forEach(((e, s) => {
                            h[s] = e - t
                        }
                        )),
                            f.forEach(((e, s) => {
                                f[s] = e + t
                            }
                            ))
                    }
                }
                if (Object.assign(e, {
                    slides: p,
                    snapGrid: h,
                    slidesGrid: f,
                    slidesSizesGrid: v
                }),
                    a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                    m(i, "--swiper-centered-offset-before", -h[0] + "px"),
                        m(i, "--swiper-centered-offset-after", e.size / 2 - v[v.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0]
                        , s = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)),
                        e.slidesGrid = e.slidesGrid.map((e => e + s))
                }
                if (u !== c && e.emit("slidesLengthChange"),
                    h.length !== E && (e.params.watchOverflow && e.checkOverflow(),
                        e.emit("snapGridLengthChange")),
                    f.length !== x && e.emit("slidesGridLengthChange"),
                    a.watchSlidesProgress && e.updateSlidesOffset(),
                    !(d || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                    const t = `${a.containerModifierClass}backface-hidden`
                        , s = e.el.classList.contains(t);
                    u <= a.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t)
                }
            },
            updateAutoHeight: function (e) {
                const t = this
                    , s = []
                    , a = t.virtual && t.params.virtual.enabled;
                let i, r = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)
                        (t.visibleSlides || []).forEach((e => {
                            s.push(e)
                        }
                        ));
                    else
                        for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                            const e = t.activeIndex + i;
                            if (e > t.slides.length && !a)
                                break;
                            s.push(n(e))
                        }
                else
                    s.push(n(t.activeIndex));
                for (i = 0; i < s.length; i += 1)
                    if (void 0 !== s[i]) {
                        const e = s[i].offsetHeight;
                        r = e > r ? e : r
                    }
                (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
            },
            updateSlidesOffset: function () {
                const e = this
                    , t = e.slides
                    , s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let a = 0; a < t.length; a += 1)
                    t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment()
            },
            updateSlidesProgress: function (e = this && this.translate || 0) {
                const t = this
                    , s = t.params
                    , { slides: a, rtlTranslate: i, snapGrid: r } = t;
                if (0 === a.length)
                    return;
                void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                let n = -e;
                i && (n = e),
                    a.forEach((e => {
                        e.classList.remove(s.slideVisibleClass)
                    }
                    )),
                    t.visibleSlidesIndexes = [],
                    t.visibleSlides = [];
                let l = s.spaceBetween;
                "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
                for (let e = 0; e < a.length; e += 1) {
                    const o = a[e];
                    let d = o.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
                    const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l)
                        , p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l)
                        , u = -(n - d)
                        , m = u + t.slidesSizesGrid[e];
                    (u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size) && (t.visibleSlides.push(o),
                        t.visibleSlidesIndexes.push(e),
                        a[e].classList.add(s.slideVisibleClass)),
                        o.progress = i ? -c : c,
                        o.originalProgress = i ? -p : p
                }
            },
            updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * s || 0
                }
                const s = t.params
                    , a = t.maxTranslate() - t.minTranslate();
                let { progress: i, isBeginning: r, isEnd: n, progressLoop: l } = t;
                const o = r
                    , d = n;
                if (0 === a)
                    i = 0,
                        r = !0,
                        n = !0;
                else {
                    i = (e - t.minTranslate()) / a;
                    const s = Math.abs(e - t.minTranslate()) < 1
                        , l = Math.abs(e - t.maxTranslate()) < 1;
                    r = s || i <= 0,
                        n = l || i >= 1,
                        s && (i = 0),
                        l && (i = 1)
                }
                if (s.loop) {
                    const s = t.getSlideIndexByData(0)
                        , a = t.getSlideIndexByData(t.slides.length - 1)
                        , i = t.slidesGrid[s]
                        , r = t.slidesGrid[a]
                        , n = t.slidesGrid[t.slidesGrid.length - 1]
                        , o = Math.abs(e);
                    l = o >= i ? (o - i) / n : (o + n - r) / n,
                        l > 1 && (l -= 1)
                }
                Object.assign(t, {
                    progress: i,
                    progressLoop: l,
                    isBeginning: r,
                    isEnd: n
                }),
                    (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
                    r && !o && t.emit("reachBeginning toEdge"),
                    n && !d && t.emit("reachEnd toEdge"),
                    (o && !r || d && !n) && t.emit("fromEdge"),
                    t.emit("progress", i)
            },
            updateSlidesClasses: function () {
                const e = this
                    , { slides: t, params: s, slidesEl: a, activeIndex: i } = e
                    , r = e.virtual && s.virtual.enabled
                    , n = e => g(a, `.${s.slideClass}${e}, swiper-slide ${e}`)[0];
                let l;
                if (t.forEach((e => {
                    e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
                }
                )),
                    r)
                    if (s.loop) {
                        let t = i - e.virtual.slidesBefore;
                        t < 0 && (t = e.virtual.slides.length + t),
                            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                            l = n(`[data-swiper-slide-index="${t}"]`)
                    } else
                        l = n(`[data-swiper-slide-index="${i}"]`);
                else
                    l = t[i];
                if (l) {
                    l.classList.add(s.slideActiveClass);
                    let e = function (e, t) {
                        const s = [];
                        for (; e.nextElementSibling;) {
                            const a = e.nextElementSibling;
                            t ? a.matches(t) && s.push(a) : s.push(a),
                                e = a
                        }
                        return s
                    }(l, `.${s.slideClass}, swiper-slide`)[0];
                    s.loop && !e && (e = t[0]),
                        e && e.classList.add(s.slideNextClass);
                    let a = function (e, t) {
                        const s = [];
                        for (; e.previousElementSibling;) {
                            const a = e.previousElementSibling;
                            t ? a.matches(t) && s.push(a) : s.push(a),
                                e = a
                        }
                        return s
                    }(l, `.${s.slideClass}, swiper-slide`)[0];
                    s.loop && 0 === !a && (a = t[t.length - 1]),
                        a && a.classList.add(s.slidePrevClass)
                }
                e.emitSlidesClasses()
            },
            updateActiveIndex: function (e) {
                const t = this
                    , s = t.rtlTranslate ? t.translate : -t.translate
                    , { snapGrid: a, params: i, activeIndex: r, realIndex: n, snapIndex: l } = t;
                let o, d = e;
                const c = e => {
                    let s = e - t.virtual.slidesBefore;
                    return s < 0 && (s = t.virtual.slides.length + s),
                        s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
                        s
                }
                    ;
                if (void 0 === d && (d = function (e) {
                    const { slidesGrid: t, params: s } = e
                        , a = e.rtlTranslate ? e.translate : -e.translate;
                    let i;
                    for (let e = 0; e < t.length; e += 1)
                        void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
                    return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0),
                        i
                }(t)),
                    a.indexOf(s) >= 0)
                    o = a.indexOf(s);
                else {
                    const e = Math.min(i.slidesPerGroupSkip, d);
                    o = e + Math.floor((d - e) / i.slidesPerGroup)
                }
                if (o >= a.length && (o = a.length - 1),
                    d === r)
                    return o !== l && (t.snapIndex = o,
                        t.emit("snapIndexChange")),
                        void (t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(d)));
                let p;
                p = t.virtual && i.virtual.enabled && i.loop ? c(d) : t.slides[d] ? parseInt(t.slides[d].getAttribute("data-swiper-slide-index") || d, 10) : d,
                    Object.assign(t, {
                        previousSnapIndex: l,
                        snapIndex: o,
                        previousRealIndex: n,
                        realIndex: p,
                        previousIndex: r,
                        activeIndex: d
                    }),
                    t.initialized && $(t),
                    t.emit("activeIndexChange"),
                    t.emit("snapIndexChange"),
                    n !== p && t.emit("realIndexChange"),
                    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function (e) {
                const t = this
                    , s = t.params
                    , a = e.closest(`.${s.slideClass}, swiper-slide`);
                let i, r = !1;
                if (a)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === a) {
                            r = !0,
                                i = e;
                            break
                        }
                if (!a || !r)
                    return t.clickedSlide = void 0,
                        void (t.clickedIndex = void 0);
                t.clickedSlide = a,
                    t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = i,
                    s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        };
        function k({ swiper: e, runCallbacks: t, direction: s, step: a }) {
            const { activeIndex: i, previousIndex: r } = e;
            let n = s;
            if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"),
                e.emit(`transition ${a}`),
                t && i !== r) {
                if ("reset" === n)
                    return void e.emit(`slideResetTransition ${a}`);
                e.emit(`slideChangeTransition ${a}`),
                    "next" === n ? e.emit(`slideNextTransition ${a}`) : e.emit(`slidePrevTransition ${a}`)
            }
        }
        var O = {
            slideTo: function (e = 0, t = this.params.speed, s = !0, a, i) {
                "string" == typeof e && (e = parseInt(e, 10));
                const r = this;
                let n = e;
                n < 0 && (n = 0);
                const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: m, enabled: f } = r;
                if (r.animating && l.preventInteractionOnTransition || !f && !a && !i)
                    return !1;
                const g = Math.min(r.params.slidesPerGroupSkip, n);
                let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
                v >= o.length && (v = o.length - 1);
                const w = -o[v];
                if (l.normalizeSlideIndex)
                    for (let e = 0; e < d.length; e += 1) {
                        const t = -Math.floor(100 * w)
                            , s = Math.floor(100 * d[e])
                            , a = Math.floor(100 * d[e + 1]);
                        void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                    }
                if (r.initialized && n !== p) {
                    if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate()))
                        return !1;
                    if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n)
                        return !1
                }
                let b;
                if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
                    r.updateProgress(w),
                    b = n > p ? "next" : n < p ? "prev" : "reset",
                    u && -w === r.translate || !u && w === r.translate)
                    return r.updateActiveIndex(n),
                        l.autoHeight && r.updateAutoHeight(),
                        r.updateSlidesClasses(),
                        "slide" !== l.effect && r.setTranslate(w),
                        "reset" !== b && (r.transitionStart(s, b),
                            r.transitionEnd(s, b)),
                        !1;
                if (l.cssMode) {
                    const e = r.isHorizontal()
                        , s = u ? w : -w;
                    if (0 === t) {
                        const t = r.virtual && r.params.virtual.enabled;
                        t && (r.wrapperEl.style.scrollSnapType = "none",
                            r._immediateVirtual = !0),
                            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
                                requestAnimationFrame((() => {
                                    m[e ? "scrollLeft" : "scrollTop"] = s
                                }
                                ))) : m[e ? "scrollLeft" : "scrollTop"] = s,
                            t && requestAnimationFrame((() => {
                                r.wrapperEl.style.scrollSnapType = "",
                                    r._immediateVirtual = !1
                            }
                            ))
                    } else {
                        if (!r.support.smoothScroll)
                            return h({
                                swiper: r,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }),
                                !0;
                        m.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return r.setTransition(t),
                    r.setTranslate(w),
                    r.updateActiveIndex(n),
                    r.updateSlidesClasses(),
                    r.emit("beforeTransitionStart", t, a),
                    r.transitionStart(s, b),
                    0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0,
                        r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                            r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                r.onSlideToWrapperTransitionEnd = null,
                                delete r.onSlideToWrapperTransitionEnd,
                                r.transitionEnd(s, b))
                        }
                        ),
                        r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
                    !0
            },
            slideToLoop: function (e = 0, t = this.params.speed, s = !0, a) {
                "string" == typeof e && (e = parseInt(e, 10));
                const i = this;
                let r = e;
                return i.params.loop && (i.virtual && i.params.virtual.enabled ? r += i.virtual.slidesBefore : r = i.getSlideIndexByData(r)),
                    i.slideTo(r, t, s, a)
            },
            slideNext: function (e = this.params.speed, t = !0, s) {
                const a = this
                    , { enabled: i, params: r, animating: n } = a;
                if (!i)
                    return a;
                let l = r.slidesPerGroup;
                "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l
                    , d = a.virtual && r.virtual.enabled;
                if (r.loop) {
                    if (n && !d && r.loopPreventsSliding)
                        return !1;
                    a.loopFix({
                        direction: "next"
                    }),
                        a._clientLeft = a.wrapperEl.clientLeft
                }
                return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
            },
            slidePrev: function (e = this.params.speed, t = !0, s) {
                const a = this
                    , { params: i, snapGrid: r, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d } = a;
                if (!o)
                    return a;
                const c = a.virtual && i.virtual.enabled;
                if (i.loop) {
                    if (d && !c && i.loopPreventsSliding)
                        return !1;
                    a.loopFix({
                        direction: "prev"
                    }),
                        a._clientLeft = a.wrapperEl.clientLeft
                }
                function p(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const u = p(l ? a.translate : -a.translate)
                    , m = r.map((e => p(e)));
                let h = r[m.indexOf(u) - 1];
                if (void 0 === h && i.cssMode) {
                    let e;
                    r.forEach(((t, s) => {
                        u >= t && (e = s)
                    }
                    )),
                        void 0 !== e && (h = r[e > 0 ? e - 1 : e])
                }
                let f = 0;
                if (void 0 !== h && (f = n.indexOf(h),
                    f < 0 && (f = a.activeIndex - 1),
                    "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1,
                        f = Math.max(f, 0))),
                    i.rewind && a.isBeginning) {
                    const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                    return a.slideTo(i, e, t, s)
                }
                return a.slideTo(f, e, t, s)
            },
            slideReset: function (e = this.params.speed, t = !0, s) {
                return this.slideTo(this.activeIndex, e, t, s)
            },
            slideToClosest: function (e = this.params.speed, t = !0, s, a = .5) {
                const i = this;
                let r = i.activeIndex;
                const n = Math.min(i.params.slidesPerGroupSkip, r)
                    , l = n + Math.floor((r - n) / i.params.slidesPerGroup)
                    , o = i.rtlTranslate ? i.translate : -i.translate;
                if (o >= i.snapGrid[l]) {
                    const e = i.snapGrid[l];
                    o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
                } else {
                    const e = i.snapGrid[l - 1];
                    o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
                }
                return r = Math.max(r, 0),
                    r = Math.min(r, i.slidesGrid.length - 1),
                    i.slideTo(r, e, t, s)
            },
            slideToClickedSlide: function () {
                const e = this
                    , { params: t, slidesEl: s } = e
                    , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let i, r = e.clickedIndex;
                const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating)
                        return;
                    i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                        t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
                            r = e.getSlideIndex(g(s, `${n}[data-swiper-slide-index="${i}"]`)[0]),
                            o((() => {
                                e.slideTo(r)
                            }
                            ))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(),
                                r = e.getSlideIndex(g(s, `${n}[data-swiper-slide-index="${i}"]`)[0]),
                                o((() => {
                                    e.slideTo(r)
                                }
                                ))) : e.slideTo(r)
                } else
                    e.slideTo(r)
            }
        };
        function D(e) {
            const t = this
                , s = r()
                , a = l()
                , i = t.touchEventsData;
            i.evCache.push(e);
            const { params: n, touches: o, enabled: c } = t;
            if (!c)
                return;
            if (!n.simulateTouch && "mouse" === e.pointerType)
                return;
            if (t.animating && n.preventInteractionOnTransition)
                return;
            !t.animating && n.cssMode && n.loop && t.loopFix();
            let p = e;
            p.originalEvent && (p = p.originalEvent);
            let u = p.target;
            if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(u))
                return;
            if ("which" in p && 3 === p.which)
                return;
            if ("button" in p && p.button > 0)
                return;
            if (i.isTouched && i.isMoved)
                return;
            const m = !!n.noSwipingClass && "" !== n.noSwipingClass
                , h = e.composedPath ? e.composedPath() : e.path;
            m && p.target && p.target.shadowRoot && h && (u = h[0]);
            const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
                , g = !(!p.target || !p.target.shadowRoot);
            if (n.noSwiping && (g ? function (e, t = this) {
                return function t(s) {
                    if (!s || s === r() || s === l())
                        return null;
                    s.assignedSlot && (s = s.assignedSlot);
                    const a = s.closest(e);
                    return a || s.getRootNode ? a || t(s.getRootNode().host) : null
                }(t)
            }(f, u) : u.closest(f)))
                return void (t.allowClick = !0);
            if (n.swipeHandler && !u.closest(n.swipeHandler))
                return;
            o.currentX = p.pageX,
                o.currentY = p.pageY;
            const v = o.currentX
                , w = o.currentY
                , b = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection
                , y = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
            if (b && (v <= y || v >= a.innerWidth - y)) {
                if ("prevent" !== b)
                    return;
                e.preventDefault()
            }
            Object.assign(i, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
                o.startX = v,
                o.startY = w,
                i.touchStartTime = d(),
                t.allowClick = !0,
                t.updateSize(),
                t.swipeDirection = void 0,
                n.threshold > 0 && (i.allowThresholdMove = !1);
            let E = !0;
            u.matches(i.focusableElements) && (E = !1,
                "SELECT" === u.nodeName && (i.isTouched = !1)),
                s.activeElement && s.activeElement.matches(i.focusableElements) && s.activeElement !== u && s.activeElement.blur();
            const x = E && t.allowTouchMove && n.touchStartPreventDefault;
            !n.touchStartForcePreventDefault && !x || u.isContentEditable || p.preventDefault(),
                n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(),
                t.emit("touchStart", p)
        }
        function G(e) {
            const t = r()
                , s = this
                , a = s.touchEventsData
                , { params: i, touches: n, rtlTranslate: l, enabled: o } = s;
            if (!o)
                return;
            if (!i.simulateTouch && "mouse" === e.pointerType)
                return;
            let c = e;
            if (c.originalEvent && (c = c.originalEvent),
                !a.isTouched)
                return void (a.startMoving && a.isScrolling && s.emit("touchMoveOpposite", c));
            const p = a.evCache.findIndex((e => e.pointerId === c.pointerId));
            p >= 0 && (a.evCache[p] = c);
            const u = a.evCache.length > 1 ? a.evCache[0] : c
                , m = u.pageX
                , h = u.pageY;
            if (c.preventedByNestedSwiper)
                return n.startX = m,
                    void (n.startY = h);
            if (!s.allowTouchMove)
                return c.target.matches(a.focusableElements) || (s.allowClick = !1),
                    void (a.isTouched && (Object.assign(n, {
                        startX: m,
                        startY: h,
                        prevX: s.touches.currentX,
                        prevY: s.touches.currentY,
                        currentX: m,
                        currentY: h
                    }),
                        a.touchStartTime = d()));
            if (i.touchReleaseOnEdges && !i.loop)
                if (s.isVertical()) {
                    if (h < n.startY && s.translate <= s.maxTranslate() || h > n.startY && s.translate >= s.minTranslate())
                        return a.isTouched = !1,
                            void (a.isMoved = !1)
                } else if (m < n.startX && s.translate <= s.maxTranslate() || m > n.startX && s.translate >= s.minTranslate())
                    return;
            if (t.activeElement && c.target === t.activeElement && c.target.matches(a.focusableElements))
                return a.isMoved = !0,
                    void (s.allowClick = !1);
            if (a.allowTouchCallbacks && s.emit("touchMove", c),
                c.targetTouches && c.targetTouches.length > 1)
                return;
            n.currentX = m,
                n.currentY = h;
            const f = n.currentX - n.startX
                , g = n.currentY - n.startY;
            if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
                return;
            if (void 0 === a.isScrolling) {
                let e;
                s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? a.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI,
                    a.isScrolling = s.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
            }
            if (a.isScrolling && s.emit("touchMoveOpposite", c),
                void 0 === a.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (a.startMoving = !0)),
                a.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && a.evCache.length > 1)
                return void (a.isTouched = !1);
            if (!a.startMoving)
                return;
            s.allowClick = !1,
                !i.cssMode && c.cancelable && c.preventDefault(),
                i.touchMoveStopPropagation && !i.nested && c.stopPropagation();
            let v = s.isHorizontal() ? f : g
                , w = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
            i.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1),
                w = Math.abs(w) * (l ? 1 : -1)),
                n.diff = v,
                v *= i.touchRatio,
                l && (v = -v,
                    w = -w);
            const b = s.touchesDirection;
            s.swipeDirection = v > 0 ? "prev" : "next",
                s.touchesDirection = w > 0 ? "prev" : "next";
            const y = s.params.loop && !i.cssMode;
            if (!a.isMoved) {
                if (y && s.loopFix({
                    direction: s.swipeDirection
                }),
                    a.startTranslate = s.getTranslate(),
                    s.setTransition(0),
                    s.animating) {
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    s.wrapperEl.dispatchEvent(e)
                }
                a.allowMomentumBounce = !1,
                    !i.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
                    s.emit("sliderFirstMove", c)
            }
            let E;
            a.isMoved && b !== s.touchesDirection && y && Math.abs(v) >= 1 && (s.loopFix({
                direction: s.swipeDirection,
                setTranslate: !0
            }),
                E = !0),
                s.emit("sliderMove", c),
                a.isMoved = !0,
                a.currentTranslate = v + a.startTranslate;
            let x = !0
                , S = i.resistanceRatio;
            if (i.touchReleaseOnEdges && (S = 0),
                v > 0 ? (y && !E && a.currentTranslate > (i.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
                    direction: "prev",
                    setTranslate: !0,
                    activeSlideIndex: 0
                }),
                    a.currentTranslate > s.minTranslate() && (x = !1,
                        i.resistance && (a.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + a.startTranslate + v) ** S))) : v < 0 && (y && !E && a.currentTranslate < (i.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
                            direction: "next",
                            setTranslate: !0,
                            activeSlideIndex: s.slides.length - ("auto" === i.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
                        }),
                            a.currentTranslate < s.maxTranslate() && (x = !1,
                                i.resistance && (a.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - a.startTranslate - v) ** S))),
                x && (c.preventedByNestedSwiper = !0),
                !s.allowSlideNext && "next" === s.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate),
                !s.allowSlidePrev && "prev" === s.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate),
                s.allowSlidePrev || s.allowSlideNext || (a.currentTranslate = a.startTranslate),
                i.threshold > 0) {
                if (!(Math.abs(v) > i.threshold || a.allowThresholdMove))
                    return void (a.currentTranslate = a.startTranslate);
                if (!a.allowThresholdMove)
                    return a.allowThresholdMove = !0,
                        n.startX = n.currentX,
                        n.startY = n.currentY,
                        a.currentTranslate = a.startTranslate,
                        void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
            }
            i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(),
                s.updateSlidesClasses()),
                i.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
                s.updateProgress(a.currentTranslate),
                s.setTranslate(a.currentTranslate))
        }
        function H(e) {
            const t = this
                , s = t.touchEventsData
                , a = s.evCache.findIndex((t => t.pointerId === e.pointerId));
            if (a >= 0 && s.evCache.splice(a, 1),
                ["pointercancel", "pointerout", "pointerleave"].includes(e.type) && ("pointercancel" !== e.type || !t.browser.isSafari && !t.browser.isWebView))
                return;
            const { params: i, touches: r, rtlTranslate: n, slidesGrid: l, enabled: c } = t;
            if (!c)
                return;
            if (!i.simulateTouch && "mouse" === e.pointerType)
                return;
            let p = e;
            if (p.originalEvent && (p = p.originalEvent),
                s.allowTouchCallbacks && t.emit("touchEnd", p),
                s.allowTouchCallbacks = !1,
                !s.isTouched)
                return s.isMoved && i.grabCursor && t.setGrabCursor(!1),
                    s.isMoved = !1,
                    void (s.startMoving = !1);
            i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const u = d()
                , m = u - s.touchStartTime;
            if (t.allowClick) {
                const e = p.path || p.composedPath && p.composedPath();
                t.updateClickedSlide(e && e[0] || p.target),
                    t.emit("tap click", p),
                    m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", p)
            }
            if (s.lastClickTime = d(),
                o((() => {
                    t.destroyed || (t.allowClick = !0)
                }
                )),
                !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate)
                return s.isTouched = !1,
                    s.isMoved = !1,
                    void (s.startMoving = !1);
            let h;
            if (s.isTouched = !1,
                s.isMoved = !1,
                s.startMoving = !1,
                h = i.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate,
                i.cssMode)
                return;
            if (i.freeMode && i.freeMode.enabled)
                return void t.freeMode.onTouchEnd({
                    currentPos: h
                });
            let f = 0
                , g = t.slidesSizesGrid[0];
            for (let e = 0; e < l.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                void 0 !== l[e + t] ? h >= l[e] && h < l[e + t] && (f = e,
                    g = l[e + t] - l[e]) : h >= l[e] && (f = e,
                        g = l[l.length - 1] - l[l.length - 2])
            }
            let v = null
                , w = null;
            i.rewind && (t.isBeginning ? w = i.virtual && i.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
            const b = (h - l[f]) / g
                , y = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (m > i.longSwipesMs) {
                if (!i.longSwipes)
                    return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (b >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : f + y) : t.slideTo(f)),
                    "prev" === t.swipeDirection && (b > 1 - i.longSwipesRatio ? t.slideTo(f + y) : null !== w && b < 0 && Math.abs(b) > i.longSwipesRatio ? t.slideTo(w) : t.slideTo(f))
            } else {
                if (!i.shortSwipes)
                    return void t.slideTo(t.activeIndex);
                !t.navigation || p.target !== t.navigation.nextEl && p.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y),
                    "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f)) : p.target === t.navigation.nextEl ? t.slideTo(f + y) : t.slideTo(f)
            }
        }
        function X() {
            const e = this
                , { params: t, el: s } = e;
            if (s && 0 === s.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e
                , n = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0,
                e.allowSlidePrev = !0,
                e.updateSize(),
                e.updateSlides(),
                e.updateSlidesClasses();
            const l = n && t.loop;
            !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
                e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
                    e.autoplay.resizeTimeout = setTimeout((() => {
                        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                    }
                    ), 500)),
                e.allowSlidePrev = i,
                e.allowSlideNext = a,
                e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
        function Y(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
                t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation())))
        }
        function B() {
            const e = this
                , { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
            if (!a)
                return;
            let i;
            e.previousTranslate = e.translate,
                e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
                0 === e.translate && (e.translate = 0),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            const r = e.maxTranslate() - e.minTranslate();
            i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
                i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
                e.emit("setTranslate", e.translate, !1)
        }
        function N(e) {
            const t = this;
            z(t, e.target),
                t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
        }
        let q = !1;
        function R() { }
        const _ = (e, t) => {
            const s = r()
                , { params: a, el: i, wrapperEl: n, device: l } = e
                , o = !!a.nested
                , d = "on" === t ? "addEventListener" : "removeEventListener"
                , c = t;
            i[d]("pointerdown", e.onTouchStart, {
                passive: !1
            }),
                s[d]("pointermove", e.onTouchMove, {
                    passive: !1,
                    capture: o
                }),
                s[d]("pointerup", e.onTouchEnd, {
                    passive: !0
                }),
                s[d]("pointercancel", e.onTouchEnd, {
                    passive: !0
                }),
                s[d]("pointerout", e.onTouchEnd, {
                    passive: !0
                }),
                s[d]("pointerleave", e.onTouchEnd, {
                    passive: !0
                }),
                (a.preventClicks || a.preventClicksPropagation) && i[d]("click", e.onClick, !0),
                a.cssMode && n[d]("scroll", e.onScroll),
                a.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", X, !0) : e[c]("observerUpdate", X, !0),
                i[d]("load", e.onLoad, {
                    capture: !0
                })
        }
            , F = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var V = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopedSlides: null,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        function j(e, t) {
            return function (s = {}) {
                const a = Object.keys(s)[0]
                    , i = s[a];
                "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                    auto: !0
                }),
                    a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                        enabled: !0
                    }),
                        "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0),
                        e[a] || (e[a] = {
                            enabled: !1
                        }),
                        u(t, s)) : u(t, s)) : u(t, s)
            }
        }
        const W = {
            eventsEmitter: L,
            update: I,
            translate: {
                getTranslate: function (e = (this.isHorizontal() ? "x" : "y")) {
                    const { params: t, rtlTranslate: s, translate: a, wrapperEl: i } = this;
                    if (t.virtualTranslate)
                        return s ? -a : a;
                    if (t.cssMode)
                        return a;
                    let r = c(i, e);
                    return r += this.cssOverflowAdjustment(),
                        s && (r = -r),
                        r || 0
                },
                setTranslate: function (e, t) {
                    const s = this
                        , { rtlTranslate: a, params: i, wrapperEl: r, progress: n } = s;
                    let l, o = 0, d = 0;
                    s.isHorizontal() ? o = a ? -e : e : d = e,
                        i.roundLengths && (o = Math.floor(o),
                            d = Math.floor(d)),
                        s.previousTranslate = s.translate,
                        s.translate = s.isHorizontal() ? o : d,
                        i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(),
                            r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
                    const c = s.maxTranslate() - s.minTranslate();
                    l = 0 === c ? 0 : (e - s.minTranslate()) / c,
                        l !== n && s.updateProgress(e),
                        s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e = 0, t = this.params.speed, s = !0, a = !0, i) {
                    const r = this
                        , { params: n, wrapperEl: l } = r;
                    if (r.animating && n.preventInteractionOnTransition)
                        return !1;
                    const o = r.minTranslate()
                        , d = r.maxTranslate();
                    let c;
                    if (c = a && e > o ? o : a && e < d ? d : e,
                        r.updateProgress(c),
                        n.cssMode) {
                        const e = r.isHorizontal();
                        if (0 === t)
                            l[e ? "scrollLeft" : "scrollTop"] = -c;
                        else {
                            if (!r.support.smoothScroll)
                                return h({
                                    swiper: r,
                                    targetPosition: -c,
                                    side: e ? "left" : "top"
                                }),
                                    !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0),
                        r.setTranslate(c),
                        s && (r.emit("beforeTransitionStart", t, i),
                            r.emit("transitionEnd"))) : (r.setTransition(t),
                                r.setTranslate(c),
                                s && (r.emit("beforeTransitionStart", t, i),
                                    r.emit("transitionStart")),
                                r.animating || (r.animating = !0,
                                    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                                        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                            r.onTranslateToWrapperTransitionEnd = null,
                                            delete r.onTranslateToWrapperTransitionEnd,
                                            s && r.emit("transitionEnd"))
                                    }
                                    ),
                                    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
                        !0
                }
            },
            transition: {
                setTransition: function (e, t) {
                    const s = this;
                    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
                        s.emit("setTransition", e, t)
                },
                transitionStart: function (e = !0, t) {
                    const s = this
                        , { params: a } = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(),
                        k({
                            swiper: s,
                            runCallbacks: e,
                            direction: t,
                            step: "Start"
                        }))
                },
                transitionEnd: function (e = !0, t) {
                    const s = this
                        , { params: a } = s;
                    s.animating = !1,
                        a.cssMode || (s.setTransition(0),
                            k({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                }
            },
            slide: O,
            loop: {
                loopCreate: function (e) {
                    const t = this
                        , { params: s, slidesEl: a } = t;
                    !s.loop || t.virtual && t.params.virtual.enabled || (g(a, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    }
                    )),
                        t.loopFix({
                            slideRealIndex: e,
                            direction: s.centeredSlides ? void 0 : "next"
                        }))
                },
                loopFix: function ({ slideRealIndex: e, slideTo: t = !0, direction: s, setTranslate: a, activeSlideIndex: i, byController: r, byMousewheel: n } = {}) {
                    const l = this;
                    if (!l.params.loop)
                        return;
                    l.emit("beforeLoopFix");
                    const { slides: o, allowSlidePrev: d, allowSlideNext: c, slidesEl: p, params: u } = l;
                    if (l.allowSlidePrev = !0,
                        l.allowSlideNext = !0,
                        l.virtual && u.virtual.enabled)
                        return t && (u.centeredSlides || 0 !== l.snapIndex ? u.centeredSlides && l.snapIndex < u.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
                            l.allowSlidePrev = d,
                            l.allowSlideNext = c,
                            void l.emit("loopFix");
                    const m = "auto" === u.slidesPerView ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(u.slidesPerView, 10));
                    let h = u.loopedSlides || m;
                    h % u.slidesPerGroup != 0 && (h += u.slidesPerGroup - h % u.slidesPerGroup),
                        l.loopedSlides = h;
                    const f = []
                        , g = [];
                    let v = l.activeIndex;
                    void 0 === i ? i = l.getSlideIndex(l.slides.filter((e => e.classList.contains(u.slideActiveClass)))[0]) : v = i;
                    const w = "next" === s || !s
                        , b = "prev" === s || !s;
                    let y = 0
                        , E = 0;
                    if (i < h) {
                        y = Math.max(h - i, u.slidesPerGroup);
                        for (let e = 0; e < h - i; e += 1) {
                            const t = e - Math.floor(e / o.length) * o.length;
                            f.push(o.length - t - 1)
                        }
                    } else if (i > l.slides.length - 2 * h) {
                        E = Math.max(i - (l.slides.length - 2 * h), u.slidesPerGroup);
                        for (let e = 0; e < E; e += 1) {
                            const t = e - Math.floor(e / o.length) * o.length;
                            g.push(t)
                        }
                    }
                    if (b && f.forEach((e => {
                        l.slides[e].swiperLoopMoveDOM = !0,
                            p.prepend(l.slides[e]),
                            l.slides[e].swiperLoopMoveDOM = !1
                    }
                    )),
                        w && g.forEach((e => {
                            l.slides[e].swiperLoopMoveDOM = !0,
                                p.append(l.slides[e]),
                                l.slides[e].swiperLoopMoveDOM = !1
                        }
                        )),
                        l.recalcSlides(),
                        "auto" === u.slidesPerView && l.updateSlides(),
                        u.watchSlidesProgress && l.updateSlidesOffset(),
                        t)
                        if (f.length > 0 && b)
                            if (void 0 === e) {
                                const e = l.slidesGrid[v]
                                    , t = l.slidesGrid[v + y] - e;
                                n ? l.setTranslate(l.translate - t) : (l.slideTo(v + y, 0, !1, !0),
                                    a && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t))
                            } else
                                a && l.slideToLoop(e, 0, !1, !0);
                        else if (g.length > 0 && w)
                            if (void 0 === e) {
                                const e = l.slidesGrid[v]
                                    , t = l.slidesGrid[v - E] - e;
                                n ? l.setTranslate(l.translate - t) : (l.slideTo(v - E, 0, !1, !0),
                                    a && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t))
                            } else
                                l.slideToLoop(e, 0, !1, !0);
                    if (l.allowSlidePrev = d,
                        l.allowSlideNext = c,
                        l.controller && l.controller.control && !r) {
                        const t = {
                            slideRealIndex: e,
                            slideTo: !1,
                            direction: s,
                            setTranslate: a,
                            activeSlideIndex: i,
                            byController: !0
                        };
                        Array.isArray(l.controller.control) ? l.controller.control.forEach((e => {
                            !e.destroyed && e.params.loop && e.loopFix(t)
                        }
                        )) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix(t)
                    }
                    l.emit("loopFix")
                },
                loopDestroy: function () {
                    const e = this
                        , { params: t, slidesEl: s } = e;
                    if (!t.loop || e.virtual && e.params.virtual.enabled)
                        return;
                    e.recalcSlides();
                    const a = [];
                    e.slides.forEach((e => {
                        const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                        a[t] = e
                    }
                    )),
                        e.slides.forEach((e => {
                            e.removeAttribute("data-swiper-slide-index")
                        }
                        )),
                        a.forEach((e => {
                            s.append(e)
                        }
                        )),
                        e.recalcSlides(),
                        e.slideTo(e.realIndex, 0)
                }
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                        return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0),
                        s.style.cursor = "move",
                        s.style.cursor = e ? "grabbing" : "grab",
                        t.isElement && requestAnimationFrame((() => {
                            t.__preventObserver__ = !1
                        }
                        ))
                },
                unsetGrabCursor: function () {
                    const e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
                        e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
                        e.isElement && requestAnimationFrame((() => {
                            e.__preventObserver__ = !1
                        }
                        )))
                }
            },
            events: {
                attachEvents: function () {
                    const e = this
                        , t = r()
                        , { params: s } = e;
                    e.onTouchStart = D.bind(e),
                        e.onTouchMove = G.bind(e),
                        e.onTouchEnd = H.bind(e),
                        s.cssMode && (e.onScroll = B.bind(e)),
                        e.onClick = Y.bind(e),
                        e.onLoad = N.bind(e),
                        q || (t.addEventListener("touchstart", R),
                            q = !0),
                        _(e, "on")
                },
                detachEvents: function () {
                    _(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    const e = this
                        , { realIndex: t, initialized: s, params: a, el: i } = e
                        , r = a.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length)
                        return;
                    const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                    if (!n || e.currentBreakpoint === n)
                        return;
                    const l = (n in r ? r[n] : void 0) || e.originalParams
                        , o = F(e, a)
                        , d = F(e, l)
                        , c = a.enabled;
                    o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`),
                        e.emitContainerClasses()) : !o && d && (i.classList.add(`${a.containerModifierClass}grid`),
                            (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`),
                            e.emitContainerClasses()),
                        ["navigation", "pagination", "scrollbar"].forEach((t => {
                            if (void 0 === l[t])
                                return;
                            const s = a[t] && a[t].enabled
                                , i = l[t] && l[t].enabled;
                            s && !i && e[t].disable(),
                                !s && i && e[t].enable()
                        }
                        ));
                    const p = l.direction && l.direction !== a.direction
                        , m = a.loop && (l.slidesPerView !== a.slidesPerView || p);
                    p && s && e.changeDirection(),
                        u(e.params, l);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                        c && !h ? e.disable() : !c && h && e.enable(),
                        e.currentBreakpoint = n,
                        e.emit("_beforeBreakpoint", l),
                        m && s && (e.loopDestroy(),
                            e.loopCreate(t),
                            e.updateSlides()),
                        e.emit("breakpoint", l)
                },
                getBreakpoint: function (e, t = "window", s) {
                    if (!e || "container" === t && !s)
                        return;
                    let a = !1;
                    const i = l()
                        , r = "window" === t ? i.innerHeight : s.clientHeight
                        , n = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: r * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }
                        ));
                    n.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < n.length; e += 1) {
                        const { point: r, value: l } = n[e];
                        "window" === t ? i.matchMedia(`(min-width: ${l}px)`).matches && (a = r) : l <= s.clientWidth && (a = r)
                    }
                    return a || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    const e = this
                        , { isLocked: t, params: s } = e
                        , { slidesOffsetBefore: a } = s;
                    if (a) {
                        const t = e.slides.length - 1
                            , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else
                        e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                        !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                        t && t !== e.isLocked && (e.isEnd = !1),
                        t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function () {
                    const e = this
                        , { classNames: t, params: s, rtl: a, el: i, device: r } = e
                        , n = function (e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((a => {
                                    e[a] && s.push(t + a)
                                }
                                )) : "string" == typeof e && s.push(t + e)
                            }
                            )),
                                s
                        }(["initialized", s.direction, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                                autoheight: s.autoHeight
                            }, {
                                rtl: a
                            }, {
                                grid: s.grid && s.grid.rows > 1
                            }, {
                                "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": s.cssMode
                            }, {
                                centered: s.cssMode && s.centeredSlides
                            }, {
                                "watch-progress": s.watchSlidesProgress
                            }], s.containerModifierClass);
                    t.push(...n),
                        i.classList.add(...t),
                        e.emitContainerClasses()
                },
                removeClasses: function () {
                    const { el: e, classNames: t } = this;
                    e.classList.remove(...t),
                        this.emitContainerClasses()
                }
            }
        }
            , U = {};
        class K {
            constructor(...e) {
                let t, s;
                1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t, s] = e,
                    s || (s = {}),
                    s = u({}, s),
                    t && !s.el && (s.el = t);
                const a = r();
                if (s.el && "string" == typeof s.el && a.querySelectorAll(s.el).length > 1) {
                    const e = [];
                    return a.querySelectorAll(s.el).forEach((t => {
                        const a = u({}, s, {
                            el: t
                        });
                        e.push(new K(a))
                    }
                    )),
                        e
                }
                const i = this;
                i.__swiper__ = !0,
                    i.support = P(),
                    i.device = function (e = {}) {
                        return M || (M = function ({ userAgent: e } = {}) {
                            const t = P()
                                , s = l()
                                , a = s.navigator.platform
                                , i = e || s.navigator.userAgent
                                , r = {
                                    ios: !1,
                                    android: !1
                                }
                                , n = s.screen.width
                                , o = s.screen.height
                                , d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                            let c = i.match(/(iPad).*OS\s([\d_]+)/);
                            const p = i.match(/(iPod)(.*OS\s([\d_]+))?/)
                                , u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                                , m = "Win32" === a;
                            let h = "MacIntel" === a;
                            return !c && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${n}x ${o}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/),
                                c || (c = [0, 1, "13_0_0"]),
                                h = !1),
                                d && !m && (r.os = "android",
                                    r.android = !0),
                                (c || u || p) && (r.os = "ios",
                                    r.ios = !0),
                                r
                        }(e)),
                            M
                    }({
                        userAgent: s.userAgent
                    }),
                    i.browser = (C || (C = function () {
                        const e = l();
                        let t = !1;
                        function s() {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }
                        if (s()) {
                            const s = String(e.navigator.userAgent);
                            if (s.includes("Version/")) {
                                const [e, a] = s.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                                t = e < 16 || 16 === e && a < 2
                            }
                        }
                        return {
                            isSafari: t || s(),
                            needPerspectiveFix: t,
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()),
                        C),
                    i.eventsListeners = {},
                    i.eventsAnyListeners = [],
                    i.modules = [...i.__modules__],
                    s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
                const n = {};
                i.modules.forEach((e => {
                    e({
                        params: s,
                        swiper: i,
                        extendParams: j(s, n),
                        on: i.on.bind(i),
                        once: i.once.bind(i),
                        off: i.off.bind(i),
                        emit: i.emit.bind(i)
                    })
                }
                ));
                const o = u({}, V, n);
                return i.params = u({}, o, U, s),
                    i.originalParams = u({}, i.params),
                    i.passedParams = u({}, s),
                    i.params && i.params.on && Object.keys(i.params.on).forEach((e => {
                        i.on(e, i.params.on[e])
                    }
                    )),
                    i.params && i.params.onAny && i.onAny(i.params.onAny),
                    Object.assign(i, {
                        enabled: i.params.enabled,
                        el: t,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal() {
                            return "horizontal" === i.params.direction
                        },
                        isVertical() {
                            return "vertical" === i.params.direction
                        },
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                        },
                        allowSlideNext: i.params.allowSlideNext,
                        allowSlidePrev: i.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: i.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            evCache: []
                        },
                        allowClick: !0,
                        allowTouchMove: i.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }),
                    i.emit("_swiper"),
                    i.params.init && i.init(),
                    i
            }
            getSlideIndex(e) {
                const { slidesEl: t, params: s } = this
                    , a = y(g(t, `.${s.slideClass}, swiper-slide`)[0]);
                return y(e) - a
            }
            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
            }
            recalcSlides() {
                const { slidesEl: e, params: t } = this;
                this.slides = g(e, `.${t.slideClass}, swiper-slide`)
            }
            enable() {
                const e = this;
                e.enabled || (e.enabled = !0,
                    e.params.grabCursor && e.setGrabCursor(),
                    e.emit("enable"))
            }
            disable() {
                const e = this;
                e.enabled && (e.enabled = !1,
                    e.params.grabCursor && e.unsetGrabCursor(),
                    e.emit("disable"))
            }
            setProgress(e, t) {
                const s = this;
                e = Math.min(Math.max(e, 0), 1);
                const a = s.minTranslate()
                    , i = (s.maxTranslate() - a) * e + a;
                s.translateTo(i, void 0 === t ? 0 : t),
                    s.updateActiveIndex(),
                    s.updateSlidesClasses()
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                const t = [];
                e.slides.forEach((s => {
                    const a = e.getSlideClasses(s);
                    t.push({
                        slideEl: s,
                        classNames: a
                    }),
                        e.emit("_slideClass", s, a)
                }
                )),
                    e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e = "current", t = !1) {
                const { params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l } = this;
                let o = 1;
                if (s.centeredSlides) {
                    let e, t = a[l] ? a[l].swiperSlideSize : 0;
                    for (let s = l + 1; s < a.length; s += 1)
                        a[s] && !e && (t += a[s].swiperSlideSize,
                            o += 1,
                            t > n && (e = !0));
                    for (let s = l - 1; s >= 0; s -= 1)
                        a[s] && !e && (t += a[s].swiperSlideSize,
                            o += 1,
                            t > n && (e = !0))
                } else if ("current" === e)
                    for (let e = l + 1; e < a.length; e += 1)
                        (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
                else
                    for (let e = l - 1; e >= 0; e -= 1)
                        i[l] - i[e] < n && (o += 1);
                return o
            }
            update() {
                const e = this;
                if (!e || e.destroyed)
                    return;
                const { snapGrid: t, params: s } = e;
                function a() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate
                        , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                }
                let i;
                if (s.breakpoints && e.setBreakpoint(),
                    [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                        t.complete && z(e, t)
                    }
                    )),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateProgress(),
                    e.updateSlidesClasses(),
                    s.freeMode && s.freeMode.enabled && !s.cssMode)
                    a(),
                        s.autoHeight && e.updateAutoHeight();
                else {
                    if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                        const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                        i = e.slideTo(t.length - 1, 0, !1, !0)
                    } else
                        i = e.slideTo(e.activeIndex, 0, !1, !0);
                    i || a()
                }
                s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                    e.emit("update")
            }
            changeDirection(e, t = !0) {
                const s = this
                    , a = s.params.direction;
                return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
                    e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`),
                        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
                        s.emitContainerClasses(),
                        s.params.direction = e,
                        s.slides.forEach((t => {
                            "vertical" === e ? t.style.width = "" : t.style.height = ""
                        }
                        )),
                        s.emit("changeDirection"),
                        t && s.update()),
                    s
            }
            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
                    t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
                    t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                            t.el.dir = "ltr"),
                    t.update())
            }
            mount(e) {
                const t = this;
                if (t.mounted)
                    return !0;
                let s = e || t.params.el;
                if ("string" == typeof s && (s = document.querySelector(s)),
                    !s)
                    return !1;
                s.swiper = t,
                    s.shadowEl && (t.isElement = !0);
                const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let i = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(a()) : g(s, a())[0];
                return !i && t.params.createElements && (i = v("div", t.params.wrapperClass),
                    s.append(i),
                    g(s, `.${t.params.slideClass}`).forEach((e => {
                        i.append(e)
                    }
                    ))),
                    Object.assign(t, {
                        el: s,
                        wrapperEl: i,
                        slidesEl: t.isElement ? s : i,
                        mounted: !0,
                        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
                        wrongRTL: "-webkit-box" === b(i, "display")
                    }),
                    !0
            }
            init(e) {
                const t = this;
                return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"),
                    t.params.breakpoints && t.setBreakpoint(),
                    t.addClasses(),
                    t.updateSize(),
                    t.updateSlides(),
                    t.params.watchOverflow && t.checkOverflow(),
                    t.params.grabCursor && t.enabled && t.setGrabCursor(),
                    t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                    t.params.loop && t.loopCreate(),
                    t.attachEvents(),
                    [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e => {
                        e.complete ? z(t, e) : e.addEventListener("load", (e => {
                            z(t, e.target)
                        }
                        ))
                    }
                    )),
                    $(t),
                    t.initialized = !0,
                    $(t),
                    t.emit("init"),
                    t.emit("afterInit")),
                    t
            }
            destroy(e = !0, t = !0) {
                const s = this
                    , { params: a, el: i, wrapperEl: r, slides: n } = s;
                return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
                    s.initialized = !1,
                    s.detachEvents(),
                    a.loop && s.loopDestroy(),
                    t && (s.removeClasses(),
                        i.removeAttribute("style"),
                        r.removeAttribute("style"),
                        n && n.length && n.forEach((e => {
                            e.classList.remove(a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass),
                                e.removeAttribute("style"),
                                e.removeAttribute("data-swiper-slide-index")
                        }
                        ))),
                    s.emit("destroy"),
                    Object.keys(s.eventsListeners).forEach((e => {
                        s.off(e)
                    }
                    )),
                    !1 !== e && (s.el.swiper = null,
                        function (e) {
                            const t = e;
                            Object.keys(t).forEach((e => {
                                try {
                                    t[e] = null
                                } catch (e) { }
                                try {
                                    delete t[e]
                                } catch (e) { }
                            }
                            ))
                        }(s)),
                    s.destroyed = !0),
                    null
            }
            static extendDefaults(e) {
                u(U, e)
            }
            static get extendedDefaults() {
                return U
            }
            static get defaults() {
                return V
            }
            static installModule(e) {
                K.prototype.__modules__ || (K.prototype.__modules__ = []);
                const t = K.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => K.installModule(e))),
                    K) : (K.installModule(e),
                        K)
            }
        }
        Object.keys(W).forEach((e => {
            Object.keys(W[e]).forEach((t => {
                K.prototype[t] = W[e][t]
            }
            ))
        }
        )),
            K.use([function ({ swiper: e, on: t, emit: s }) {
                const a = l();
                let i = null
                    , r = null;
                const n = () => {
                    e && !e.destroyed && e.initialized && (s("beforeResize"),
                        s("resize"))
                }
                    , o = () => {
                        e && !e.destroyed && e.initialized && s("orientationchange")
                    }
                    ;
                t("init", (() => {
                    e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                        r = a.requestAnimationFrame((() => {
                            const { width: s, height: a } = e;
                            let i = s
                                , r = a;
                            t.forEach((({ contentBoxSize: t, contentRect: s, target: a }) => {
                                a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize,
                                    r = s ? s.height : (t[0] || t).blockSize)
                            }
                            )),
                                i === s && r === a || n()
                        }
                        ))
                    }
                    )),
                        i.observe(e.el)) : (a.addEventListener("resize", n),
                            a.addEventListener("orientationchange", o))
                }
                )),
                    t("destroy", (() => {
                        r && a.cancelAnimationFrame(r),
                            i && i.unobserve && e.el && (i.unobserve(e.el),
                                i = null),
                            a.removeEventListener("resize", n),
                            a.removeEventListener("orientationchange", o)
                    }
                    ))
            }
                , function ({ swiper: e, extendParams: t, on: s, emit: a }) {
                    const i = []
                        , r = l()
                        , n = (t, s = {}) => {
                            const n = new (r.MutationObserver || r.WebkitMutationObserver)((t => {
                                if (e.__preventObserver__)
                                    return;
                                if (1 === t.length)
                                    return void a("observerUpdate", t[0]);
                                const s = function () {
                                    a("observerUpdate", t[0])
                                };
                                r.requestAnimationFrame ? r.requestAnimationFrame(s) : r.setTimeout(s, 0)
                            }
                            ));
                            n.observe(t, {
                                attributes: void 0 === s.attributes || s.attributes,
                                childList: void 0 === s.childList || s.childList,
                                characterData: void 0 === s.characterData || s.characterData
                            }),
                                i.push(n)
                        }
                        ;
                    t({
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1
                    }),
                        s("init", (() => {
                            if (e.params.observer) {
                                if (e.params.observeParents) {
                                    const t = E(e.el);
                                    for (let e = 0; e < t.length; e += 1)
                                        n(t[e])
                                }
                                n(e.el, {
                                    childList: e.params.observeSlideChildren
                                }),
                                    n(e.wrapperEl, {
                                        attributes: !1
                                    })
                            }
                        }
                        )),
                        s("destroy", (() => {
                            i.forEach((e => {
                                e.disconnect()
                            }
                            )),
                                i.splice(0, i.length)
                        }
                        ))
                }
            ]);
        var Z = K;
        function Q(e, t, s, a) {
            return e.params.createElements && Object.keys(a).forEach((i => {
                if (!s[i] && !0 === s.auto) {
                    let r = g(e.el, `.${a[i]}`)[0];
                    r || (r = v("div", a[i]),
                        r.className = a[i],
                        e.el.append(r)),
                        s[i] = r,
                        t[i] = r
                }
            }
            )),
                s
        }
        function J(e = "") {
            return `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
        }
        function ee(e) {
            const t = this
                , { params: s, slidesEl: a } = t;
            s.loop && t.loopDestroy();
            const i = e => {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e,
                        a.append(t.children[0]),
                        t.innerHTML = ""
                } else
                    a.append(e)
            }
                ;
            if ("object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1)
                    e[t] && i(e[t]);
            else
                i(e);
            t.recalcSlides(),
                s.loop && t.loopCreate(),
                s.observer && !t.isElement || t.update()
        }
        function te(e) {
            const t = this
                , { params: s, activeIndex: a, slidesEl: i } = t;
            s.loop && t.loopDestroy();
            let r = a + 1;
            const n = e => {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e,
                        i.prepend(t.children[0]),
                        t.innerHTML = ""
                } else
                    i.prepend(e)
            }
                ;
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1)
                    e[t] && n(e[t]);
                r = a + e.length
            } else
                n(e);
            t.recalcSlides(),
                s.loop && t.loopCreate(),
                s.observer && !t.isElement || t.update(),
                t.slideTo(r, 0, !1)
        }
        function se(e, t) {
            const s = this
                , { params: a, activeIndex: i, slidesEl: r } = s;
            let n = i;
            a.loop && (n -= s.loopedSlides,
                s.loopDestroy(),
                s.recalcSlides());
            const l = s.slides.length;
            if (e <= 0)
                return void s.prependSlide(t);
            if (e >= l)
                return void s.appendSlide(t);
            let o = n > e ? n + 1 : n;
            const d = [];
            for (let t = l - 1; t >= e; t -= 1) {
                const e = s.slides[t];
                e.remove(),
                    d.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1)
                    t[e] && r.append(t[e]);
                o = n > e ? n + t.length : n
            } else
                r.append(t);
            for (let e = 0; e < d.length; e += 1)
                r.append(d[e]);
            s.recalcSlides(),
                a.loop && s.loopCreate(),
                a.observer && !s.isElement || s.update(),
                a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
        }
        function ae(e) {
            const t = this
                , { params: s, activeIndex: a } = t;
            let i = a;
            s.loop && (i -= t.loopedSlides,
                t.loopDestroy());
            let r, n = i;
            if ("object" == typeof e && "length" in e) {
                for (let s = 0; s < e.length; s += 1)
                    r = e[s],
                        t.slides[r] && t.slides[r].remove(),
                        r < n && (n -= 1);
                n = Math.max(n, 0)
            } else
                r = e,
                    t.slides[r] && t.slides[r].remove(),
                    r < n && (n -= 1),
                    n = Math.max(n, 0);
            t.recalcSlides(),
                s.loop && t.loopCreate(),
                s.observer && !t.isElement || t.update(),
                s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
        }
        function ie() {
            const e = this
                , t = [];
            for (let s = 0; s < e.slides.length; s += 1)
                t.push(s);
            e.removeSlide(t)
        }
        function re(e) {
            const { effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d } = e;
            let c;
            a("beforeInit", (() => {
                if (s.params.effect !== t)
                    return;
                s.classNames.push(`${s.params.containerModifierClass}${t}`),
                    l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                const e = n ? n() : {};
                Object.assign(s.params, e),
                    Object.assign(s.originalParams, e)
            }
            )),
                a("setTranslate", (() => {
                    s.params.effect === t && i()
                }
                )),
                a("setTransition", ((e, a) => {
                    s.params.effect === t && r(a)
                }
                )),
                a("transitionEnd", (() => {
                    if (s.params.effect === t && o) {
                        if (!d || !d().slideShadows)
                            return;
                        s.slides.forEach((e => {
                            e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                        }
                        )),
                            o()
                    }
                }
                )),
                a("virtualUpdate", (() => {
                    s.params.effect === t && (s.slides.length || (c = !0),
                        requestAnimationFrame((() => {
                            c && s.slides && s.slides.length && (i(),
                                c = !1)
                        }
                        )))
                }
                ))
        }
        function ne(e, t) {
            const s = f(t);
            return s !== t && (s.style.backfaceVisibility = "hidden",
                s.style["-webkit-backface-visibility"] = "hidden"),
                s
        }
        function le({ swiper: e, duration: t, transformElements: s, allSlides: a }) {
            const { activeIndex: i } = e;
            if (e.params.virtualTranslate && 0 !== t) {
                let t, r = !1;
                t = a ? s : s.filter((t => {
                    const s = t.classList.contains("swiper-slide-transform") ? (t => t.parentElement ? t.parentElement : e.slides.filter((e => e.shadowEl && e.shadowEl === t.parentNode))[0])(t) : t;
                    return e.getSlideIndex(s) === i
                }
                )),
                    t.forEach((t => {
                        x(t, (() => {
                            if (r)
                                return;
                            if (!e || e.destroyed)
                                return;
                            r = !0,
                                e.animating = !1;
                            const t = new window.CustomEvent("transitionend", {
                                bubbles: !0,
                                cancelable: !0
                            });
                            e.wrapperEl.dispatchEvent(t)
                        }
                        ))
                    }
                    ))
            }
        }
        function oe(e, t, s) {
            const a = "swiper-slide-shadow" + (s ? `-${s}` : "")
                , i = f(t);
            let r = i.querySelector(`.${a}`);
            return r || (r = v("div", "swiper-slide-shadow" + (s ? `-${s}` : "")),
                i.append(r)),
                r
        }
        const de = [function ({ swiper: e, extendParams: t, on: s, emit: a }) {
            let i;
            t({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            });
            const n = r();
            e.virtual = {
                cache: {},
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: []
            };
            const l = n.createElement("div");
            function o(t, s) {
                const a = e.params.virtual;
                if (a.cache && e.virtual.cache[s])
                    return e.virtual.cache[s];
                let i;
                return a.renderSlide ? (i = a.renderSlide.call(e, t, s),
                    "string" == typeof i && (l.innerHTML = i,
                        i = l.children[0])) : i = e.isElement ? v("swiper-slide") : v("div", e.params.slideClass),
                    i.setAttribute("data-swiper-slide-index", s),
                    a.renderSlide || (i.innerHTML = t),
                    a.cache && (e.virtual.cache[s] = i),
                    i
            }
            function d(t) {
                const { slidesPerView: s, slidesPerGroup: i, centeredSlides: r, loop: n } = e.params
                    , { addSlidesBefore: l, addSlidesAfter: d } = e.params.virtual
                    , { from: c, to: p, slides: u, slidesGrid: m, offset: h } = e.virtual;
                e.params.cssMode || e.updateActiveIndex();
                const f = e.activeIndex || 0;
                let v, w, b;
                v = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top",
                    r ? (w = Math.floor(s / 2) + i + d,
                        b = Math.floor(s / 2) + i + l) : (w = s + (i - 1) + d,
                            b = (n ? s : i) + l);
                let y = f - b
                    , E = f + w;
                n || (y = Math.max(y, 0),
                    E = Math.min(E, u.length - 1));
                let x = (e.slidesGrid[y] || 0) - (e.slidesGrid[0] || 0);
                function S() {
                    e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        a("virtualUpdate")
                }
                if (n && f >= b ? (y -= b,
                    r || (x += e.slidesGrid[0])) : n && f < b && (y = -b,
                        r && (x += e.slidesGrid[0])),
                    Object.assign(e.virtual, {
                        from: y,
                        to: E,
                        offset: x,
                        slidesGrid: e.slidesGrid,
                        slidesBefore: b,
                        slidesAfter: w
                    }),
                    c === y && p === E && !t)
                    return e.slidesGrid !== m && x !== h && e.slides.forEach((t => {
                        t.style[v] = x - Math.abs(e.cssOverflowAdjustment()) + "px"
                    }
                    )),
                        e.updateProgress(),
                        void a("virtualUpdate");
                if (e.params.virtual.renderExternal)
                    return e.params.virtual.renderExternal.call(e, {
                        offset: x,
                        from: y,
                        to: E,
                        slides: function () {
                            const e = [];
                            for (let t = y; t <= E; t += 1)
                                e.push(u[t]);
                            return e
                        }()
                    }),
                        void (e.params.virtual.renderExternalUpdate ? S() : a("virtualUpdate"));
                const T = []
                    , M = []
                    , C = e => {
                        let t = e;
                        return e < 0 ? t = u.length + e : t >= u.length && (t -= u.length),
                            t
                    }
                    ;
                if (t)
                    e.slidesEl.querySelectorAll(`.${e.params.slideClass}, swiper-slide`).forEach((e => {
                        e.remove()
                    }
                    ));
                else
                    for (let t = c; t <= p; t += 1)
                        if (t < y || t > E) {
                            const s = C(t);
                            e.slidesEl.querySelectorAll(`.${e.params.slideClass}[data-swiper-slide-index="${s}"], swiper-slide[data-swiper-slide-index="${s}"]`).forEach((e => {
                                e.remove()
                            }
                            ))
                        }
                const P = n ? -u.length : 0
                    , L = n ? 2 * u.length : u.length;
                for (let e = P; e < L; e += 1)
                    if (e >= y && e <= E) {
                        const s = C(e);
                        void 0 === p || t ? M.push(s) : (e > p && M.push(s),
                            e < c && T.push(s))
                    }
                if (M.forEach((t => {
                    e.slidesEl.append(o(u[t], t))
                }
                )),
                    n)
                    for (let t = T.length - 1; t >= 0; t -= 1) {
                        const s = T[t];
                        e.slidesEl.prepend(o(u[s], s))
                    }
                else
                    T.sort(((e, t) => t - e)),
                        T.forEach((t => {
                            e.slidesEl.prepend(o(u[t], t))
                        }
                        ));
                g(e.slidesEl, ".swiper-slide, swiper-slide").forEach((t => {
                    t.style[v] = x - Math.abs(e.cssOverflowAdjustment()) + "px"
                }
                )),
                    S()
            }
            s("beforeInit", (() => {
                if (!e.params.virtual.enabled)
                    return;
                let t;
                if (void 0 === e.passedParams.virtual.slides) {
                    const s = [...e.slidesEl.children].filter((t => t.matches(`.${e.params.slideClass}, swiper-slide`)));
                    s && s.length && (e.virtual.slides = [...s],
                        t = !0,
                        s.forEach(((t, s) => {
                            t.setAttribute("data-swiper-slide-index", s),
                                e.virtual.cache[s] = t,
                                t.remove()
                        }
                        )))
                }
                t || (e.virtual.slides = e.params.virtual.slides),
                    e.classNames.push(`${e.params.containerModifierClass}virtual`),
                    e.params.watchSlidesProgress = !0,
                    e.originalParams.watchSlidesProgress = !0,
                    e.params.initialSlide || d()
            }
            )),
                s("setTranslate", (() => {
                    e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(i),
                        i = setTimeout((() => {
                            d()
                        }
                        ), 100)) : d())
                }
                )),
                s("init update resize", (() => {
                    e.params.virtual.enabled && e.params.cssMode && m(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
                }
                )),
                Object.assign(e.virtual, {
                    appendSlide: function (t) {
                        if ("object" == typeof t && "length" in t)
                            for (let s = 0; s < t.length; s += 1)
                                t[s] && e.virtual.slides.push(t[s]);
                        else
                            e.virtual.slides.push(t);
                        d(!0)
                    },
                    prependSlide: function (t) {
                        const s = e.activeIndex;
                        let a = s + 1
                            , i = 1;
                        if (Array.isArray(t)) {
                            for (let s = 0; s < t.length; s += 1)
                                t[s] && e.virtual.slides.unshift(t[s]);
                            a = s + t.length,
                                i = t.length
                        } else
                            e.virtual.slides.unshift(t);
                        if (e.params.virtual.cache) {
                            const t = e.virtual.cache
                                , s = {};
                            Object.keys(t).forEach((e => {
                                const a = t[e]
                                    , r = a.getAttribute("data-swiper-slide-index");
                                r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i),
                                    s[parseInt(e, 10) + i] = a
                            }
                            )),
                                e.virtual.cache = s
                        }
                        d(!0),
                            e.slideTo(a, 0)
                    },
                    removeSlide: function (t) {
                        if (null == t)
                            return;
                        let s = e.activeIndex;
                        if (Array.isArray(t))
                            for (let a = t.length - 1; a >= 0; a -= 1)
                                e.virtual.slides.splice(t[a], 1),
                                    e.params.virtual.cache && delete e.virtual.cache[t[a]],
                                    t[a] < s && (s -= 1),
                                    s = Math.max(s, 0);
                        else
                            e.virtual.slides.splice(t, 1),
                                e.params.virtual.cache && delete e.virtual.cache[t],
                                t < s && (s -= 1),
                                s = Math.max(s, 0);
                        d(!0),
                            e.slideTo(s, 0)
                    },
                    removeAllSlides: function () {
                        e.virtual.slides = [],
                            e.params.virtual.cache && (e.virtual.cache = {}),
                            d(!0),
                            e.slideTo(0, 0)
                    },
                    update: d
                })
        }
            , function ({ swiper: e, extendParams: t, on: s, emit: a }) {
                const i = r()
                    , n = l();
                function o(t) {
                    if (!e.enabled)
                        return;
                    const { rtlTranslate: s } = e;
                    let r = t;
                    r.originalEvent && (r = r.originalEvent);
                    const l = r.keyCode || r.charCode
                        , o = e.params.keyboard.pageUpDown
                        , d = o && 33 === l
                        , c = o && 34 === l
                        , p = 37 === l
                        , u = 39 === l
                        , m = 38 === l
                        , h = 40 === l;
                    if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && h || c))
                        return !1;
                    if (!e.allowSlidePrev && (e.isHorizontal() && p || e.isVertical() && m || d))
                        return !1;
                    if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                        if (e.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
                            let t = !1;
                            if (E(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && 0 === E(e.el, `.${e.params.slideActiveClass}`).length)
                                return;
                            const a = e.el
                                , i = a.clientWidth
                                , r = a.clientHeight
                                , l = n.innerWidth
                                , o = n.innerHeight
                                , d = w(a);
                            s && (d.left -= a.scrollLeft);
                            const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                            for (let e = 0; e < c.length; e += 1) {
                                const s = c[e];
                                if (s[0] >= 0 && s[0] <= l && s[1] >= 0 && s[1] <= o) {
                                    if (0 === s[0] && 0 === s[1])
                                        continue;
                                    t = !0
                                }
                            }
                            if (!t)
                                return
                        }
                        e.isHorizontal() ? ((d || c || p || u) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1),
                            ((c || u) && !s || (d || p) && s) && e.slideNext(),
                            ((d || p) && !s || (c || u) && s) && e.slidePrev()) : ((d || c || m || h) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1),
                                (c || h) && e.slideNext(),
                                (d || m) && e.slidePrev()),
                            a("keyPress", l)
                    }
                }
                function d() {
                    e.keyboard.enabled || (i.addEventListener("keydown", o),
                        e.keyboard.enabled = !0)
                }
                function c() {
                    e.keyboard.enabled && (i.removeEventListener("keydown", o),
                        e.keyboard.enabled = !1)
                }
                e.keyboard = {
                    enabled: !1
                },
                    t({
                        keyboard: {
                            enabled: !1,
                            onlyInViewport: !0,
                            pageUpDown: !0
                        }
                    }),
                    s("init", (() => {
                        e.params.keyboard.enabled && d()
                    }
                    )),
                    s("destroy", (() => {
                        e.keyboard.enabled && c()
                    }
                    )),
                    Object.assign(e.keyboard, {
                        enable: d,
                        disable: c
                    })
            }
            , function ({ swiper: e, extendParams: t, on: s, emit: a }) {
                const i = l();
                let r;
                t({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null,
                        noMousewheelClass: "swiper-no-mousewheel"
                    }
                }),
                    e.mousewheel = {
                        enabled: !1
                    };
                let n, c = d();
                const p = [];
                function u() {
                    e.enabled && (e.mouseEntered = !0)
                }
                function m() {
                    e.enabled && (e.mouseEntered = !1)
                }
                function h(t) {
                    return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && d() - c < e.params.mousewheel.thresholdTime || !(t.delta >= 6 && d() - c < 60) && (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(),
                        a("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(),
                            a("scroll", t.raw)),
                        c = (new i.Date).getTime(),
                        1))
                }
                function f(t) {
                    let s = t
                        , i = !0;
                    if (!e.enabled)
                        return;
                    if (t.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))
                        return;
                    const l = e.params.mousewheel;
                    e.params.cssMode && s.preventDefault();
                    let c = e.el;
                    "container" !== e.params.mousewheel.eventsTarget && (c = document.querySelector(e.params.mousewheel.eventsTarget));
                    const u = c && c.contains(s.target);
                    if (!e.mouseEntered && !u && !l.releaseOnEdges)
                        return !0;
                    s.originalEvent && (s = s.originalEvent);
                    let m = 0;
                    const f = e.rtlTranslate ? -1 : 1
                        , g = function (e) {
                            let t = 0
                                , s = 0
                                , a = 0
                                , i = 0;
                            return "detail" in e && (s = e.detail),
                                "wheelDelta" in e && (s = -e.wheelDelta / 120),
                                "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
                                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                                "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
                                    s = 0),
                                a = 10 * t,
                                i = 10 * s,
                                "deltaY" in e && (i = e.deltaY),
                                "deltaX" in e && (a = e.deltaX),
                                e.shiftKey && !a && (a = i,
                                    i = 0),
                                (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40,
                                    i *= 40) : (a *= 800,
                                        i *= 800)),
                                a && !t && (t = a < 1 ? -1 : 1),
                                i && !s && (s = i < 1 ? -1 : 1),
                            {
                                spinX: t,
                                spinY: s,
                                pixelX: a,
                                pixelY: i
                            }
                        }(s);
                    if (l.forceToAxis)
                        if (e.isHorizontal()) {
                            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
                                return !0;
                            m = -g.pixelX * f
                        } else {
                            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
                                return !0;
                            m = -g.pixelY
                        }
                    else
                        m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * f : -g.pixelY;
                    if (0 === m)
                        return !0;
                    l.invert && (m = -m);
                    let v = e.getTranslate() + m * l.sensitivity;
                    if (v >= e.minTranslate() && (v = e.minTranslate()),
                        v <= e.maxTranslate() && (v = e.maxTranslate()),
                        i = !!e.params.loop || !(v === e.minTranslate() || v === e.maxTranslate()),
                        i && e.params.nested && s.stopPropagation(),
                        e.params.freeMode && e.params.freeMode.enabled) {
                        const t = {
                            time: d(),
                            delta: Math.abs(m),
                            direction: Math.sign(m)
                        }
                            , i = n && t.time < n.time + 500 && t.delta <= n.delta && t.direction === n.direction;
                        if (!i) {
                            n = void 0;
                            let d = e.getTranslate() + m * l.sensitivity;
                            const c = e.isBeginning
                                , u = e.isEnd;
                            if (d >= e.minTranslate() && (d = e.minTranslate()),
                                d <= e.maxTranslate() && (d = e.maxTranslate()),
                                e.setTransition(0),
                                e.setTranslate(d),
                                e.updateProgress(),
                                e.updateActiveIndex(),
                                e.updateSlidesClasses(),
                                (!c && e.isBeginning || !u && e.isEnd) && e.updateSlidesClasses(),
                                e.params.loop && e.loopFix({
                                    direction: t.direction < 0 ? "next" : "prev",
                                    byMousewheel: !0
                                }),
                                e.params.freeMode.sticky) {
                                clearTimeout(r),
                                    r = void 0,
                                    p.length >= 15 && p.shift();
                                const s = p.length ? p[p.length - 1] : void 0
                                    , a = p[0];
                                if (p.push(t),
                                    s && (t.delta > s.delta || t.direction !== s.direction))
                                    p.splice(0);
                                else if (p.length >= 15 && t.time - a.time < 500 && a.delta - t.delta >= 1 && t.delta <= 6) {
                                    const s = m > 0 ? .8 : .2;
                                    n = t,
                                        p.splice(0),
                                        r = o((() => {
                                            e.slideToClosest(e.params.speed, !0, void 0, s)
                                        }
                                        ), 0)
                                }
                                r || (r = o((() => {
                                    n = t,
                                        p.splice(0),
                                        e.slideToClosest(e.params.speed, !0, void 0, .5)
                                }
                                ), 500))
                            }
                            if (i || a("scroll", s),
                                e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
                                d === e.minTranslate() || d === e.maxTranslate())
                                return !0
                        }
                    } else {
                        const s = {
                            time: d(),
                            delta: Math.abs(m),
                            direction: Math.sign(m),
                            raw: t
                        };
                        p.length >= 2 && p.shift();
                        const a = p.length ? p[p.length - 1] : void 0;
                        if (p.push(s),
                            a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && h(s) : h(s),
                            function (t) {
                                const s = e.params.mousewheel;
                                if (t.direction < 0) {
                                    if (e.isEnd && !e.params.loop && s.releaseOnEdges)
                                        return !0
                                } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges)
                                    return !0;
                                return !1
                            }(s))
                            return !0
                    }
                    return s.preventDefault ? s.preventDefault() : s.returnValue = !1,
                        !1
                }
                function g(t) {
                    let s = e.el;
                    "container" !== e.params.mousewheel.eventsTarget && (s = document.querySelector(e.params.mousewheel.eventsTarget)),
                        s[t]("mouseenter", u),
                        s[t]("mouseleave", m),
                        s[t]("wheel", f)
                }
                function v() {
                    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", f),
                        !0) : !e.mousewheel.enabled && (g("addEventListener"),
                            e.mousewheel.enabled = !0,
                            !0)
                }
                function w() {
                    return e.params.cssMode ? (e.wrapperEl.addEventListener(event, f),
                        !0) : !!e.mousewheel.enabled && (g("removeEventListener"),
                            e.mousewheel.enabled = !1,
                            !0)
                }
                s("init", (() => {
                    !e.params.mousewheel.enabled && e.params.cssMode && w(),
                        e.params.mousewheel.enabled && v()
                }
                )),
                    s("destroy", (() => {
                        e.params.cssMode && v(),
                            e.mousewheel.enabled && w()
                    }
                    )),
                    Object.assign(e.mousewheel, {
                        enable: v,
                        disable: w
                    })
            }
            , function ({ swiper: e, extendParams: t, on: s, emit: a }) {
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }),
                    e.navigation = {
                        nextEl: null,
                        prevEl: null
                    };
                const i = e => (Array.isArray(e) || (e = [e].filter((e => !!e))),
                    e);
                function r(t) {
                    let s;
                    return t && "string" == typeof t && e.isElement && (s = e.el.shadowRoot.querySelector(t),
                        s) ? s : (t && ("string" == typeof t && (s = [...document.querySelectorAll(t)]),
                            e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.el.querySelectorAll(t).length && (s = e.el.querySelector(t))),
                            t && !s ? t : s)
                }
                function n(t, s) {
                    const a = e.params.navigation;
                    (t = i(t)).forEach((t => {
                        t && (t.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")),
                            "BUTTON" === t.tagName && (t.disabled = s),
                            e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](a.lockClass))
                    }
                    ))
                }
                function l() {
                    const { nextEl: t, prevEl: s } = e.navigation;
                    if (e.params.loop)
                        return n(s, !1),
                            void n(t, !1);
                    n(s, e.isBeginning && !e.params.rewind),
                        n(t, e.isEnd && !e.params.rewind)
                }
                function o(t) {
                    t.preventDefault(),
                        (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(),
                            a("navigationPrev"))
                }
                function d(t) {
                    t.preventDefault(),
                        (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(),
                            a("navigationNext"))
                }
                function c() {
                    const t = e.params.navigation;
                    if (e.params.navigation = Q(e, e.originalParams.navigation, e.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }),
                        !t.nextEl && !t.prevEl)
                        return;
                    let s = r(t.nextEl)
                        , a = r(t.prevEl);
                    Object.assign(e.navigation, {
                        nextEl: s,
                        prevEl: a
                    }),
                        s = i(s),
                        a = i(a);
                    const n = (s, a) => {
                        s && s.addEventListener("click", "next" === a ? d : o),
                            !e.enabled && s && s.classList.add(...t.lockClass.split(" "))
                    }
                        ;
                    s.forEach((e => n(e, "next"))),
                        a.forEach((e => n(e, "prev")))
                }
                function p() {
                    let { nextEl: t, prevEl: s } = e.navigation;
                    t = i(t),
                        s = i(s);
                    const a = (t, s) => {
                        t.removeEventListener("click", "next" === s ? d : o),
                            t.classList.remove(...e.params.navigation.disabledClass.split(" "))
                    }
                        ;
                    t.forEach((e => a(e, "next"))),
                        s.forEach((e => a(e, "prev")))
                }
                s("init", (() => {
                    !1 === e.params.navigation.enabled ? u() : (c(),
                        l())
                }
                )),
                    s("toEdge fromEdge lock unlock", (() => {
                        l()
                    }
                    )),
                    s("destroy", (() => {
                        p()
                    }
                    )),
                    s("enable disable", (() => {
                        let { nextEl: t, prevEl: s } = e.navigation;
                        t = i(t),
                            s = i(s),
                            [...t, ...s].filter((e => !!e)).forEach((t => t.classList[e.enabled ? "remove" : "add"](e.params.navigation.lockClass)))
                    }
                    )),
                    s("click", ((t, s) => {
                        let { nextEl: r, prevEl: n } = e.navigation;
                        r = i(r),
                            n = i(n);
                        const l = s.target;
                        if (e.params.navigation.hideOnClick && !n.includes(l) && !r.includes(l)) {
                            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === l || e.pagination.el.contains(l)))
                                return;
                            let t;
                            r.length ? t = r[0].classList.contains(e.params.navigation.hiddenClass) : n.length && (t = n[0].classList.contains(e.params.navigation.hiddenClass)),
                                a(!0 === t ? "navigationShow" : "navigationHide"),
                                [...r, ...n].filter((e => !!e)).forEach((t => t.classList.toggle(e.params.navigation.hiddenClass)))
                        }
                    }
                    ));
                const u = () => {
                    e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
                        p()
                }
                    ;
                Object.assign(e.navigation, {
                    enable: () => {
                        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
                            c(),
                            l()
                    }
                    ,
                    disable: u,
                    update: l,
                    init: c,
                    destroy: p
                })
            }
            , function ({ swiper: e, extendParams: t, on: s, emit: a }) {
                const i = "swiper-pagination";
                let r;
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${i}-bullet`,
                        bulletActiveClass: `${i}-bullet-active`,
                        modifierClass: `${i}-`,
                        currentClass: `${i}-current`,
                        totalClass: `${i}-total`,
                        hiddenClass: `${i}-hidden`,
                        progressbarFillClass: `${i}-progressbar-fill`,
                        progressbarOppositeClass: `${i}-progressbar-opposite`,
                        clickableClass: `${i}-clickable`,
                        lockClass: `${i}-lock`,
                        horizontalClass: `${i}-horizontal`,
                        verticalClass: `${i}-vertical`,
                        paginationDisabledClass: `${i}-disabled`
                    }
                }),
                    e.pagination = {
                        el: null,
                        bullets: []
                    };
                let n = 0;
                const l = e => (Array.isArray(e) || (e = [e].filter((e => !!e))),
                    e);
                function o() {
                    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
                }
                function d(t, s) {
                    const { bulletActiveClass: a } = e.params.pagination;
                    t && (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (t.classList.add(`${a}-${s}`),
                        (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) && t.classList.add(`${a}-${s}-${s}`))
                }
                function c(t) {
                    const s = t.target.closest(J(e.params.pagination.bulletClass));
                    if (!s)
                        return;
                    t.preventDefault();
                    const a = y(s) * e.params.slidesPerGroup;
                    if (e.params.loop) {
                        if (e.realIndex === a)
                            return;
                        const t = e.getSlideIndexByData(a)
                            , s = e.getSlideIndexByData(e.realIndex);
                        t > e.slides.length - e.loopedSlides && e.loopFix({
                            direction: t > s ? "next" : "prev",
                            activeSlideIndex: t,
                            slideTo: !1
                        }),
                            e.slideToLoop(a)
                    } else
                        e.slideTo(a)
                }
                function p() {
                    const t = e.rtl
                        , s = e.params.pagination;
                    if (o())
                        return;
                    let i, c, p = e.pagination.el;
                    p = l(p);
                    const u = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                        , m = e.params.loop ? Math.ceil(u / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? (c = e.previousRealIndex || 0,
                        i = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : void 0 !== e.snapIndex ? (i = e.snapIndex,
                            c = e.previousSnapIndex) : (c = e.previousIndex || 0,
                                i = e.activeIndex || 0),
                        "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        const a = e.pagination.bullets;
                        let l, o, u;
                        if (s.dynamicBullets && (r = S(a[0], e.isHorizontal() ? "width" : "height", !0),
                            p.forEach((t => {
                                t.style[e.isHorizontal() ? "width" : "height"] = r * (s.dynamicMainBullets + 4) + "px"
                            }
                            )),
                            s.dynamicMainBullets > 1 && void 0 !== c && (n += i - (c || 0),
                                n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)),
                            l = Math.max(i - n, 0),
                            o = l + (Math.min(a.length, s.dynamicMainBullets) - 1),
                            u = (o + l) / 2),
                            a.forEach((e => {
                                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                                e.classList.remove(...t)
                            }
                            )),
                            p.length > 1)
                            a.forEach((t => {
                                const a = y(t);
                                a === i ? t.classList.add(...s.bulletActiveClass.split(" ")) : e.isElement && t.setAttribute("part", "bullet"),
                                    s.dynamicBullets && (a >= l && a <= o && t.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),
                                        a === l && d(t, "prev"),
                                        a === o && d(t, "next"))
                            }
                            ));
                        else {
                            const t = a[i];
                            if (t && t.classList.add(...s.bulletActiveClass.split(" ")),
                                e.isElement && a.forEach(((e, t) => {
                                    e.setAttribute("part", t === i ? "bullet-active" : "bullet")
                                }
                                )),
                                s.dynamicBullets) {
                                const e = a[l]
                                    , t = a[o];
                                for (let e = l; e <= o; e += 1)
                                    a[e] && a[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                                d(e, "prev"),
                                    d(t, "next")
                            }
                        }
                        if (s.dynamicBullets) {
                            const i = Math.min(a.length, s.dynamicMainBullets + 4)
                                , n = (r * i - r) / 2 - u * r
                                , l = t ? "right" : "left";
                            a.forEach((t => {
                                t.style[e.isHorizontal() ? l : "top"] = `${n}px`
                            }
                            ))
                        }
                    }
                    p.forEach(((t, r) => {
                        if ("fraction" === s.type && (t.querySelectorAll(J(s.currentClass)).forEach((e => {
                            e.textContent = s.formatFractionCurrent(i + 1)
                        }
                        )),
                            t.querySelectorAll(J(s.totalClass)).forEach((e => {
                                e.textContent = s.formatFractionTotal(m)
                            }
                            ))),
                            "progressbar" === s.type) {
                            let a;
                            a = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                            const r = (i + 1) / m;
                            let n = 1
                                , l = 1;
                            "horizontal" === a ? n = r : l = r,
                                t.querySelectorAll(J(s.progressbarFillClass)).forEach((t => {
                                    t.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,
                                        t.style.transitionDuration = `${e.params.speed}ms`
                                }
                                ))
                        }
                        "custom" === s.type && s.renderCustom ? (t.innerHTML = s.renderCustom(e, i + 1, m),
                            0 === r && a("paginationRender", t)) : (0 === r && a("paginationRender", t),
                                a("paginationUpdate", t)),
                            e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](s.lockClass)
                    }
                    ))
                }
                function u() {
                    const t = e.params.pagination;
                    if (o())
                        return;
                    const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
                    let i = e.pagination.el;
                    i = l(i);
                    let r = "";
                    if ("bullets" === t.type) {
                        let a = e.params.loop ? Math.ceil(s / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && a > s && (a = s);
                        for (let s = 0; s < a; s += 1)
                            t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += `<${t.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${t.bulletClass}"></${t.bulletElement}>`
                    }
                    "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
                        "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`),
                        e.pagination.bullets = [],
                        i.forEach((s => {
                            "custom" !== t.type && (s.innerHTML = r || ""),
                                "bullets" === t.type && e.pagination.bullets.push(...s.querySelectorAll(J(t.bulletClass)))
                        }
                        )),
                        "custom" !== t.type && a("paginationRender", i[0])
                }
                function m() {
                    e.params.pagination = Q(e, e.originalParams.pagination, e.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const t = e.params.pagination;
                    if (!t.el)
                        return;
                    let s;
                    "string" == typeof t.el && e.isElement && (s = e.el.shadowRoot.querySelector(t.el)),
                        s || "string" != typeof t.el || (s = [...document.querySelectorAll(t.el)]),
                        s || (s = t.el),
                        s && 0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(s) && s.length > 1 && (s = [...e.el.querySelectorAll(t.el)],
                            s.length > 1 && (s = s.filter((t => E(t, ".swiper")[0] === e.el))[0])),
                            Array.isArray(s) && 1 === s.length && (s = s[0]),
                            Object.assign(e.pagination, {
                                el: s
                            }),
                            s = l(s),
                            s.forEach((s => {
                                "bullets" === t.type && t.clickable && s.classList.add(t.clickableClass),
                                    s.classList.add(t.modifierClass + t.type),
                                    s.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                                    "bullets" === t.type && t.dynamicBullets && (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                                        n = 0,
                                        t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                                    "progressbar" === t.type && t.progressbarOpposite && s.classList.add(t.progressbarOppositeClass),
                                    t.clickable && s.addEventListener("click", c),
                                    e.enabled || s.classList.add(t.lockClass)
                            }
                            )))
                }
                function h() {
                    const t = e.params.pagination;
                    if (o())
                        return;
                    let s = e.pagination.el;
                    s && (s = l(s),
                        s.forEach((s => {
                            s.classList.remove(t.hiddenClass),
                                s.classList.remove(t.modifierClass + t.type),
                                s.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                                t.clickable && s.removeEventListener("click", c)
                        }
                        ))),
                        e.pagination.bullets && e.pagination.bullets.forEach((e => e.classList.remove(...t.bulletActiveClass.split(" "))))
                }
                s("changeDirection", (() => {
                    if (!e.pagination || !e.pagination.el)
                        return;
                    const t = e.params.pagination;
                    let { el: s } = e.pagination;
                    s = l(s),
                        s.forEach((s => {
                            s.classList.remove(t.horizontalClass, t.verticalClass),
                                s.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
                        }
                        ))
                }
                )),
                    s("init", (() => {
                        !1 === e.params.pagination.enabled ? f() : (m(),
                            u(),
                            p())
                    }
                    )),
                    s("activeIndexChange", (() => {
                        void 0 === e.snapIndex && p()
                    }
                    )),
                    s("snapIndexChange", (() => {
                        p()
                    }
                    )),
                    s("snapGridLengthChange", (() => {
                        u(),
                            p()
                    }
                    )),
                    s("destroy", (() => {
                        h()
                    }
                    )),
                    s("enable disable", (() => {
                        let { el: t } = e.pagination;
                        t && (t = l(t),
                            t.forEach((t => t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass))))
                    }
                    )),
                    s("lock unlock", (() => {
                        p()
                    }
                    )),
                    s("click", ((t, s) => {
                        const i = s.target;
                        let { el: r } = e.pagination;
                        if (Array.isArray(r) || (r = [r].filter((e => !!e))),
                            e.params.pagination.el && e.params.pagination.hideOnClick && r && r.length > 0 && !i.classList.contains(e.params.pagination.bulletClass)) {
                            if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl))
                                return;
                            const t = r[0].classList.contains(e.params.pagination.hiddenClass);
                            a(!0 === t ? "paginationShow" : "paginationHide"),
                                r.forEach((t => t.classList.toggle(e.params.pagination.hiddenClass)))
                        }
                    }
                    ));
                const f = () => {
                    e.el.classList.add(e.params.pagination.paginationDisabledClass);
                    let { el: t } = e.pagination;
                    t && (t = l(t),
                        t.forEach((t => t.classList.add(e.params.pagination.paginationDisabledClass)))),
                        h()
                }
                    ;
                Object.assign(e.pagination, {
                    enable: () => {
                        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
                        let { el: t } = e.pagination;
                        t && (t = l(t),
                            t.forEach((t => t.classList.remove(e.params.pagination.paginationDisabledClass)))),
                            m(),
                            u(),
                            p()
                    }
                    ,
                    disable: f,
                    render: u,
                    update: p,
                    init: m,
                    destroy: h
                })
            }
            , function ({ swiper: e, extendParams: t, on: s, emit: a }) {
                const i = r();
                let n, l, d, c, p = !1, u = null, m = null;
                function h() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el)
                        return;
                    const { scrollbar: t, rtlTranslate: s } = e
                        , { dragEl: a, el: i } = t
                        , r = e.params.scrollbar
                        , n = e.params.loop ? e.progressLoop : e.progress;
                    let o = l
                        , c = (d - l) * n;
                    s ? (c = -c,
                        c > 0 ? (o = l - c,
                            c = 0) : -c + l > d && (o = d + c)) : c < 0 ? (o = l + c,
                                c = 0) : c + l > d && (o = d - c),
                        e.isHorizontal() ? (a.style.transform = `translate3d(${c}px, 0, 0)`,
                            a.style.width = `${o}px`) : (a.style.transform = `translate3d(0px, ${c}px, 0)`,
                                a.style.height = `${o}px`),
                        r.hide && (clearTimeout(u),
                            i.style.opacity = 1,
                            u = setTimeout((() => {
                                i.style.opacity = 0,
                                    i.style.transitionDuration = "400ms"
                            }
                            ), 1e3))
                }
                function f() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el)
                        return;
                    const { scrollbar: t } = e
                        , { dragEl: s, el: a } = t;
                    s.style.width = "",
                        s.style.height = "",
                        d = e.isHorizontal() ? a.offsetWidth : a.offsetHeight,
                        c = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)),
                        l = "auto" === e.params.scrollbar.dragSize ? d * c : parseInt(e.params.scrollbar.dragSize, 10),
                        e.isHorizontal() ? s.style.width = `${l}px` : s.style.height = `${l}px`,
                        a.style.display = c >= 1 ? "none" : "",
                        e.params.scrollbar.hide && (a.style.opacity = 0),
                        e.params.watchOverflow && e.enabled && t.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass)
                }
                function g(t) {
                    return e.isHorizontal() ? t.clientX : t.clientY
                }
                function b(t) {
                    const { scrollbar: s, rtlTranslate: a } = e
                        , { el: i } = s;
                    let r;
                    r = (g(t) - w(i)[e.isHorizontal() ? "left" : "top"] - (null !== n ? n : l / 2)) / (d - l),
                        r = Math.max(Math.min(r, 1), 0),
                        a && (r = 1 - r);
                    const o = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
                    e.updateProgress(o),
                        e.setTranslate(o),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                }
                function y(t) {
                    const s = e.params.scrollbar
                        , { scrollbar: i, wrapperEl: r } = e
                        , { el: l, dragEl: o } = i;
                    p = !0,
                        n = t.target === o ? g(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null,
                        t.preventDefault(),
                        t.stopPropagation(),
                        r.style.transitionDuration = "100ms",
                        o.style.transitionDuration = "100ms",
                        b(t),
                        clearTimeout(m),
                        l.style.transitionDuration = "0ms",
                        s.hide && (l.style.opacity = 1),
                        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
                        a("scrollbarDragStart", t)
                }
                function E(t) {
                    const { scrollbar: s, wrapperEl: i } = e
                        , { el: r, dragEl: n } = s;
                    p && (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                        b(t),
                        i.style.transitionDuration = "0ms",
                        r.style.transitionDuration = "0ms",
                        n.style.transitionDuration = "0ms",
                        a("scrollbarDragMove", t))
                }
                function x(t) {
                    const s = e.params.scrollbar
                        , { scrollbar: i, wrapperEl: r } = e
                        , { el: n } = i;
                    p && (p = !1,
                        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "",
                            r.style.transitionDuration = ""),
                        s.hide && (clearTimeout(m),
                            m = o((() => {
                                n.style.opacity = 0,
                                    n.style.transitionDuration = "400ms"
                            }
                            ), 1e3)),
                        a("scrollbarDragEnd", t),
                        s.snapOnRelease && e.slideToClosest())
                }
                function S(t) {
                    const { scrollbar: s, params: a } = e
                        , r = s.el;
                    if (!r)
                        return;
                    const n = r
                        , l = !!a.passiveListeners && {
                            passive: !1,
                            capture: !1
                        }
                        , o = !!a.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                    if (!n)
                        return;
                    const d = "on" === t ? "addEventListener" : "removeEventListener";
                    n[d]("pointerdown", y, l),
                        i[d]("pointermove", E, l),
                        i[d]("pointerup", x, o)
                }
                function T() {
                    const { scrollbar: t, el: s } = e;
                    e.params.scrollbar = Q(e, e.originalParams.scrollbar, e.params.scrollbar, {
                        el: "swiper-scrollbar"
                    });
                    const a = e.params.scrollbar;
                    if (!a.el)
                        return;
                    let r, n;
                    "string" == typeof a.el && e.isElement && (r = e.el.shadowRoot.querySelector(a.el)),
                        r || "string" != typeof a.el ? r || (r = a.el) : r = i.querySelectorAll(a.el),
                        e.params.uniqueNavElements && "string" == typeof a.el && r.length > 1 && 1 === s.querySelectorAll(a.el).length && (r = s.querySelector(a.el)),
                        r.length > 0 && (r = r[0]),
                        r.classList.add(e.isHorizontal() ? a.horizontalClass : a.verticalClass),
                        r && (n = r.querySelector(`.${e.params.scrollbar.dragClass}`),
                            n || (n = v("div", e.params.scrollbar.dragClass),
                                r.append(n))),
                        Object.assign(t, {
                            el: r,
                            dragEl: n
                        }),
                        a.draggable && e.params.scrollbar.el && e.scrollbar.el && S("on"),
                        r && r.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass)
                }
                function M() {
                    const t = e.params.scrollbar
                        , s = e.scrollbar.el;
                    s && s.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                        e.params.scrollbar.el && e.scrollbar.el && S("off")
                }
                t({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: "swiper-scrollbar-horizontal",
                        verticalClass: "swiper-scrollbar-vertical"
                    }
                }),
                    e.scrollbar = {
                        el: null,
                        dragEl: null
                    },
                    s("init", (() => {
                        !1 === e.params.scrollbar.enabled ? C() : (T(),
                            f(),
                            h())
                    }
                    )),
                    s("update resize observerUpdate lock unlock", (() => {
                        f()
                    }
                    )),
                    s("setTranslate", (() => {
                        h()
                    }
                    )),
                    s("setTransition", ((t, s) => {
                        !function (t) {
                            e.params.scrollbar.el && e.scrollbar.el && (e.scrollbar.dragEl.style.transitionDuration = `${t}ms`)
                        }(s)
                    }
                    )),
                    s("enable disable", (() => {
                        const { el: t } = e.scrollbar;
                        t && t.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass)
                    }
                    )),
                    s("destroy", (() => {
                        M()
                    }
                    ));
                const C = () => {
                    e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),
                        e.scrollbar.el && e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),
                        M()
                }
                    ;
                Object.assign(e.scrollbar, {
                    enable: () => {
                        e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),
                            e.scrollbar.el && e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),
                            T(),
                            f(),
                            h()
                    }
                    ,
                    disable: C,
                    updateSize: f,
                    setTranslate: h,
                    init: T,
                    destroy: M
                })
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                t({
                    parallax: {
                        enabled: !1
                    }
                });
                const a = (t, s) => {
                    const { rtl: a } = e
                        , i = a ? -1 : 1
                        , r = t.getAttribute("data-swiper-parallax") || "0";
                    let n = t.getAttribute("data-swiper-parallax-x")
                        , l = t.getAttribute("data-swiper-parallax-y");
                    const o = t.getAttribute("data-swiper-parallax-scale")
                        , d = t.getAttribute("data-swiper-parallax-opacity")
                        , c = t.getAttribute("data-swiper-parallax-rotate");
                    if (n || l ? (n = n || "0",
                        l = l || "0") : e.isHorizontal() ? (n = r,
                            l = "0") : (l = r,
                                n = "0"),
                        n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px",
                        l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px",
                        null != d) {
                        const e = d - (d - 1) * (1 - Math.abs(s));
                        t.style.opacity = e
                    }
                    let p = `translate3d(${n}, ${l}, 0px)`;
                    null != o && (p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`),
                        c && null != c && (p += ` rotate(${c * s * -1}deg)`),
                        t.style.transform = p
                }
                    , i = () => {
                        const { el: t, slides: s, progress: i, snapGrid: r } = e;
                        g(t, "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((e => {
                            a(e, i)
                        }
                        )),
                            s.forEach(((t, s) => {
                                let n = t.progress;
                                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(s / 2) - i * (r.length - 1)),
                                    n = Math.min(Math.max(n, -1), 1),
                                    t.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach((e => {
                                        a(e, n)
                                    }
                                    ))
                            }
                            ))
                    }
                    ;
                s("beforeInit", (() => {
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
                        e.originalParams.watchSlidesProgress = !0)
                }
                )),
                    s("init", (() => {
                        e.params.parallax.enabled && i()
                    }
                    )),
                    s("setTranslate", (() => {
                        e.params.parallax.enabled && i()
                    }
                    )),
                    s("setTransition", ((t, s) => {
                        e.params.parallax.enabled && ((t = e.params.speed) => {
                            const { el: s } = e;
                            s.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach((e => {
                                let s = parseInt(e.getAttribute("data-swiper-parallax-duration"), 10) || t;
                                0 === t && (s = 0),
                                    e.style.transitionDuration = `${s}ms`
                            }
                            ))
                        }
                        )(s)
                    }
                    ))
            }
            , function ({ swiper: e, extendParams: t, on: s, emit: a }) {
                const i = l();
                t({
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                }),
                    e.zoom = {
                        enabled: !1
                    };
                let r, n, o = 1, d = !1;
                const p = []
                    , u = {
                        originX: 0,
                        originY: 0,
                        slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        imageEl: void 0,
                        imageWrapEl: void 0,
                        maxRatio: 3
                    }
                    , m = {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    }
                    , h = {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    };
                let f = 1;
                function v() {
                    if (p.length < 2)
                        return 1;
                    const e = p[0].pageX
                        , t = p[0].pageY
                        , s = p[1].pageX
                        , a = p[1].pageY;
                    return Math.sqrt((s - e) ** 2 + (a - t) ** 2)
                }
                function b(t) {
                    const s = e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
                    return !!t.target.matches(s) || e.slides.filter((e => e.contains(t.target))).length > 0
                }
                function y(t) {
                    if ("mouse" === t.pointerType && p.splice(0, p.length),
                        !b(t))
                        return;
                    const s = e.params.zoom;
                    if (r = !1,
                        n = !1,
                        p.push(t),
                        !(p.length < 2)) {
                        if (r = !0,
                            u.scaleStart = v(),
                            !u.slideEl) {
                            u.slideEl = t.target.closest(`.${e.params.slideClass}, swiper-slide`),
                                u.slideEl || (u.slideEl = e.slides[e.activeIndex]);
                            let a = u.slideEl.querySelector(`.${s.containerClass}`);
                            if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                                u.imageEl = a,
                                u.imageWrapEl = a ? E(u.imageEl, `.${s.containerClass}`)[0] : void 0,
                                !u.imageWrapEl)
                                return void (u.imageEl = void 0);
                            u.maxRatio = u.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio
                        }
                        if (u.imageEl) {
                            const [e, t] = function () {
                                if (p.length < 2)
                                    return {
                                        x: null,
                                        y: null
                                    };
                                const e = u.imageEl.getBoundingClientRect();
                                return [(p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - e.x) / o, (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - e.y) / o]
                            }();
                            u.originX = e,
                                u.originY = t,
                                u.imageEl.style.transitionDuration = "0ms"
                        }
                        d = !0
                    }
                }
                function x(t) {
                    if (!b(t))
                        return;
                    const s = e.params.zoom
                        , a = e.zoom
                        , i = p.findIndex((e => e.pointerId === t.pointerId));
                    i >= 0 && (p[i] = t),
                        p.length < 2 || (n = !0,
                            u.scaleMove = v(),
                            u.imageEl && (a.scale = u.scaleMove / u.scaleStart * o,
                                a.scale > u.maxRatio && (a.scale = u.maxRatio - 1 + (a.scale - u.maxRatio + 1) ** .5),
                                a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5),
                                u.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`))
                }
                function S(t) {
                    if (!b(t))
                        return;
                    if ("mouse" === t.pointerType && "pointerout" === t.type)
                        return;
                    const s = e.params.zoom
                        , a = e.zoom
                        , i = p.findIndex((e => e.pointerId === t.pointerId));
                    i >= 0 && p.splice(i, 1),
                        r && n && (r = !1,
                            n = !1,
                            u.imageEl && (a.scale = Math.max(Math.min(a.scale, u.maxRatio), s.minRatio),
                                u.imageEl.style.transitionDuration = `${e.params.speed}ms`,
                                u.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`,
                                o = a.scale,
                                d = !1,
                                a.scale > 1 && u.slideEl ? u.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && u.slideEl && u.slideEl.classList.remove(`${s.zoomedSlideClass}`),
                                1 === a.scale && (u.originX = 0,
                                    u.originY = 0,
                                    u.slideEl = void 0)))
                }
                function T(t) {
                    if (!b(t) || !function (t) {
                        const s = `.${e.params.zoom.containerClass}`;
                        return !!t.target.matches(s) || [...e.el.querySelectorAll(s)].filter((e => e.contains(t.target))).length > 0
                    }(t))
                        return;
                    const s = e.zoom;
                    if (!u.imageEl)
                        return;
                    if (!m.isTouched || !u.slideEl)
                        return;
                    m.isMoved || (m.width = u.imageEl.offsetWidth,
                        m.height = u.imageEl.offsetHeight,
                        m.startX = c(u.imageWrapEl, "x") || 0,
                        m.startY = c(u.imageWrapEl, "y") || 0,
                        u.slideWidth = u.slideEl.offsetWidth,
                        u.slideHeight = u.slideEl.offsetHeight,
                        u.imageWrapEl.style.transitionDuration = "0ms");
                    const a = m.width * s.scale
                        , i = m.height * s.scale;
                    if (a < u.slideWidth && i < u.slideHeight)
                        return;
                    if (m.minX = Math.min(u.slideWidth / 2 - a / 2, 0),
                        m.maxX = -m.minX,
                        m.minY = Math.min(u.slideHeight / 2 - i / 2, 0),
                        m.maxY = -m.minY,
                        m.touchesCurrent.x = p.length > 0 ? p[0].pageX : t.pageX,
                        m.touchesCurrent.y = p.length > 0 ? p[0].pageY : t.pageY,
                        Math.max(Math.abs(m.touchesCurrent.x - m.touchesStart.x), Math.abs(m.touchesCurrent.y - m.touchesStart.y)) > 5 && (e.allowClick = !1),
                        !m.isMoved && !d) {
                        if (e.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x))
                            return void (m.isTouched = !1);
                        if (!e.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y))
                            return void (m.isTouched = !1)
                    }
                    t.cancelable && t.preventDefault(),
                        t.stopPropagation(),
                        m.isMoved = !0;
                    const r = (s.scale - o) / (u.maxRatio - e.params.zoom.minRatio)
                        , { originX: n, originY: l } = u;
                    m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX + r * (m.width - 2 * n),
                        m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY + r * (m.height - 2 * l),
                        m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8),
                        m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8),
                        m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8),
                        m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8),
                        h.prevPositionX || (h.prevPositionX = m.touchesCurrent.x),
                        h.prevPositionY || (h.prevPositionY = m.touchesCurrent.y),
                        h.prevTime || (h.prevTime = Date.now()),
                        h.x = (m.touchesCurrent.x - h.prevPositionX) / (Date.now() - h.prevTime) / 2,
                        h.y = (m.touchesCurrent.y - h.prevPositionY) / (Date.now() - h.prevTime) / 2,
                        Math.abs(m.touchesCurrent.x - h.prevPositionX) < 2 && (h.x = 0),
                        Math.abs(m.touchesCurrent.y - h.prevPositionY) < 2 && (h.y = 0),
                        h.prevPositionX = m.touchesCurrent.x,
                        h.prevPositionY = m.touchesCurrent.y,
                        h.prevTime = Date.now(),
                        u.imageWrapEl.style.transform = `translate3d(${m.currentX}px, ${m.currentY}px,0)`
                }
                function M() {
                    const t = e.zoom;
                    u.slideEl && e.activeIndex !== e.slides.indexOf(u.slideEl) && (u.imageEl && (u.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
                        u.imageWrapEl && (u.imageWrapEl.style.transform = "translate3d(0,0,0)"),
                        u.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
                        t.scale = 1,
                        o = 1,
                        u.slideEl = void 0,
                        u.imageEl = void 0,
                        u.imageWrapEl = void 0,
                        u.originX = 0,
                        u.originY = 0)
                }
                function C(t) {
                    const s = e.zoom
                        , a = e.params.zoom;
                    if (!u.slideEl) {
                        t && t.target && (u.slideEl = t.target.closest(`.${e.params.slideClass}, swiper-slide`)),
                            u.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.slideEl = g(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : u.slideEl = e.slides[e.activeIndex]);
                        let s = u.slideEl.querySelector(`.${a.containerClass}`);
                        s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                            u.imageEl = s,
                            u.imageWrapEl = s ? E(u.imageEl, `.${a.containerClass}`)[0] : void 0
                    }
                    if (!u.imageEl || !u.imageWrapEl)
                        return;
                    let r, n, l, d, c, p, h, f, v, b, y, x, S, T, M, C, P, L;
                    e.params.cssMode && (e.wrapperEl.style.overflow = "hidden",
                        e.wrapperEl.style.touchAction = "none"),
                        u.slideEl.classList.add(`${a.zoomedSlideClass}`),
                        void 0 === m.touchesStart.x && t ? (r = t.pageX,
                            n = t.pageY) : (r = m.touchesStart.x,
                                n = m.touchesStart.y);
                    const z = "number" == typeof t ? t : null;
                    1 === o && z && (r = void 0,
                        n = void 0),
                        s.scale = z || u.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio,
                        o = z || u.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio,
                        !t || 1 === o && z ? (h = 0,
                            f = 0) : (P = u.slideEl.offsetWidth,
                                L = u.slideEl.offsetHeight,
                                l = w(u.slideEl).left + i.scrollX,
                                d = w(u.slideEl).top + i.scrollY,
                                c = l + P / 2 - r,
                                p = d + L / 2 - n,
                                v = u.imageEl.offsetWidth,
                                b = u.imageEl.offsetHeight,
                                y = v * s.scale,
                                x = b * s.scale,
                                S = Math.min(P / 2 - y / 2, 0),
                                T = Math.min(L / 2 - x / 2, 0),
                                M = -S,
                                C = -T,
                                h = c * s.scale,
                                f = p * s.scale,
                                h < S && (h = S),
                                h > M && (h = M),
                                f < T && (f = T),
                                f > C && (f = C)),
                        z && 1 === s.scale && (u.originX = 0,
                            u.originY = 0),
                        u.imageWrapEl.style.transitionDuration = "300ms",
                        u.imageWrapEl.style.transform = `translate3d(${h}px, ${f}px,0)`,
                        u.imageEl.style.transitionDuration = "300ms",
                        u.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`
                }
                function P() {
                    const t = e.zoom
                        , s = e.params.zoom;
                    if (!u.slideEl) {
                        e.params.virtual && e.params.virtual.enabled && e.virtual ? u.slideEl = g(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : u.slideEl = e.slides[e.activeIndex];
                        let t = u.slideEl.querySelector(`.${s.containerClass}`);
                        t && (t = t.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                            u.imageEl = t,
                            u.imageWrapEl = t ? E(u.imageEl, `.${s.containerClass}`)[0] : void 0
                    }
                    u.imageEl && u.imageWrapEl && (e.params.cssMode && (e.wrapperEl.style.overflow = "",
                        e.wrapperEl.style.touchAction = ""),
                        t.scale = 1,
                        o = 1,
                        u.imageWrapEl.style.transitionDuration = "300ms",
                        u.imageWrapEl.style.transform = "translate3d(0,0,0)",
                        u.imageEl.style.transitionDuration = "300ms",
                        u.imageEl.style.transform = "translate3d(0,0,0) scale(1)",
                        u.slideEl.classList.remove(`${s.zoomedSlideClass}`),
                        u.slideEl = void 0,
                        u.originX = 0,
                        u.originY = 0)
                }
                function L(t) {
                    const s = e.zoom;
                    s.scale && 1 !== s.scale ? P() : C(t)
                }
                function z() {
                    return {
                        passiveListener: !!e.params.passiveListeners && {
                            passive: !0,
                            capture: !1
                        },
                        activeListenerWithCapture: !e.params.passiveListeners || {
                            passive: !1,
                            capture: !0
                        }
                    }
                }
                function A() {
                    const t = e.zoom;
                    if (t.enabled)
                        return;
                    t.enabled = !0;
                    const { passiveListener: s, activeListenerWithCapture: a } = z();
                    e.wrapperEl.addEventListener("pointerdown", y, s),
                        e.wrapperEl.addEventListener("pointermove", x, a),
                        ["pointerup", "pointercancel", "pointerout"].forEach((t => {
                            e.wrapperEl.addEventListener(t, S, s)
                        }
                        )),
                        e.wrapperEl.addEventListener("pointermove", T, a)
                }
                function $() {
                    const t = e.zoom;
                    if (!t.enabled)
                        return;
                    t.enabled = !1;
                    const { passiveListener: s, activeListenerWithCapture: a } = z();
                    e.wrapperEl.removeEventListener("pointerdown", y, s),
                        e.wrapperEl.removeEventListener("pointermove", x, a),
                        ["pointerup", "pointercancel", "pointerout"].forEach((t => {
                            e.wrapperEl.removeEventListener(t, S, s)
                        }
                        )),
                        e.wrapperEl.removeEventListener("pointermove", T, a)
                }
                Object.defineProperty(e.zoom, "scale", {
                    get() {
                        return f
                    },
                    set(e) {
                        if (f !== e) {
                            const t = u.imageEl
                                , s = u.slideEl;
                            a("zoomChange", e, t, s)
                        }
                        f = e
                    }
                }),
                    s("init", (() => {
                        e.params.zoom.enabled && A()
                    }
                    )),
                    s("destroy", (() => {
                        $()
                    }
                    )),
                    s("touchStart", ((t, s) => {
                        e.zoom.enabled && function (t) {
                            const s = e.device;
                            if (!u.imageEl)
                                return;
                            if (m.isTouched)
                                return;
                            s.android && t.cancelable && t.preventDefault(),
                                m.isTouched = !0;
                            const a = p.length > 0 ? p[0] : t;
                            m.touchesStart.x = a.pageX,
                                m.touchesStart.y = a.pageY
                        }(s)
                    }
                    )),
                    s("touchEnd", ((t, s) => {
                        e.zoom.enabled && function () {
                            const t = e.zoom;
                            if (!u.imageEl)
                                return;
                            if (!m.isTouched || !m.isMoved)
                                return m.isTouched = !1,
                                    void (m.isMoved = !1);
                            m.isTouched = !1,
                                m.isMoved = !1;
                            let s = 300
                                , a = 300;
                            const i = h.x * s
                                , r = m.currentX + i
                                , n = h.y * a
                                , l = m.currentY + n;
                            0 !== h.x && (s = Math.abs((r - m.currentX) / h.x)),
                                0 !== h.y && (a = Math.abs((l - m.currentY) / h.y));
                            const o = Math.max(s, a);
                            m.currentX = r,
                                m.currentY = l;
                            const d = m.width * t.scale
                                , c = m.height * t.scale;
                            m.minX = Math.min(u.slideWidth / 2 - d / 2, 0),
                                m.maxX = -m.minX,
                                m.minY = Math.min(u.slideHeight / 2 - c / 2, 0),
                                m.maxY = -m.minY,
                                m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX),
                                m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY),
                                u.imageWrapEl.style.transitionDuration = `${o}ms`,
                                u.imageWrapEl.style.transform = `translate3d(${m.currentX}px, ${m.currentY}px,0)`
                        }()
                    }
                    )),
                    s("doubleTap", ((t, s) => {
                        !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && L(s)
                    }
                    )),
                    s("transitionEnd", (() => {
                        e.zoom.enabled && e.params.zoom.enabled && M()
                    }
                    )),
                    s("slideChange", (() => {
                        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && M()
                    }
                    )),
                    Object.assign(e.zoom, {
                        enable: A,
                        disable: $,
                        in: C,
                        out: P,
                        toggle: L
                    })
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                function a(e, t) {
                    const s = function () {
                        let e, t, s;
                        return (a, i) => {
                            for (t = -1,
                                e = a.length; e - t > 1;)
                                s = e + t >> 1,
                                    a[s] <= i ? t = s : e = s;
                            return e
                        }
                    }();
                    let a, i;
                    return this.x = e,
                        this.y = t,
                        this.lastIndex = e.length - 1,
                        this.interpolate = function (e) {
                            return e ? (i = s(this.x, e),
                                a = i - 1,
                                (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
                        }
                        ,
                        this
                }
                function i() {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                }
                t({
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                }),
                    e.controller = {
                        control: void 0
                    },
                    s("beforeInit", (() => {
                        if ("undefined" != typeof window && ("string" == typeof e.params.controller.control || e.params.controller.control instanceof HTMLElement)) {
                            const t = document.querySelector(e.params.controller.control);
                            if (t && t.swiper)
                                e.controller.control = t.swiper;
                            else if (t) {
                                const s = a => {
                                    e.controller.control = a.detail[0],
                                        e.update(),
                                        t.removeEventListener("init", s)
                                }
                                    ;
                                t.addEventListener("init", s)
                            }
                        } else
                            e.controller.control = e.params.controller.control
                    }
                    )),
                    s("update", (() => {
                        i()
                    }
                    )),
                    s("resize", (() => {
                        i()
                    }
                    )),
                    s("observerUpdate", (() => {
                        i()
                    }
                    )),
                    s("setTranslate", ((t, s, a) => {
                        e.controller.control && !e.controller.control.destroyed && e.controller.setTranslate(s, a)
                    }
                    )),
                    s("setTransition", ((t, s, a) => {
                        e.controller.control && !e.controller.control.destroyed && e.controller.setTransition(s, a)
                    }
                    )),
                    Object.assign(e.controller, {
                        setTranslate: function (t, s) {
                            const i = e.controller.control;
                            let r, n;
                            const l = e.constructor;
                            function o(t) {
                                if (t.destroyed)
                                    return;
                                const s = e.rtlTranslate ? -e.translate : e.translate;
                                "slide" === e.params.controller.by && (function (t) {
                                    e.controller.spline = e.params.loop ? new a(e.slidesGrid, t.slidesGrid) : new a(e.snapGrid, t.snapGrid)
                                }(t),
                                    n = -e.controller.spline.interpolate(-s)),
                                    n && "container" !== e.params.controller.by || (r = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()),
                                        !Number.isNaN(r) && Number.isFinite(r) || (r = 1),
                                        n = (s - e.minTranslate()) * r + t.minTranslate()),
                                    e.params.controller.inverse && (n = t.maxTranslate() - n),
                                    t.updateProgress(n),
                                    t.setTranslate(n, e),
                                    t.updateActiveIndex(),
                                    t.updateSlidesClasses()
                            }
                            if (Array.isArray(i))
                                for (let e = 0; e < i.length; e += 1)
                                    i[e] !== s && i[e] instanceof l && o(i[e]);
                            else
                                i instanceof l && s !== i && o(i)
                        },
                        setTransition: function (t, s) {
                            const a = e.constructor
                                , i = e.controller.control;
                            let r;
                            function n(s) {
                                s.destroyed || (s.setTransition(t, e),
                                    0 !== t && (s.transitionStart(),
                                        s.params.autoHeight && o((() => {
                                            s.updateAutoHeight()
                                        }
                                        )),
                                        x(s.wrapperEl, (() => {
                                            i && s.transitionEnd()
                                        }
                                        ))))
                            }
                            if (Array.isArray(i))
                                for (r = 0; r < i.length; r += 1)
                                    i[r] !== s && i[r] instanceof a && n(i[r]);
                            else
                                i instanceof a && s !== i && n(i)
                        }
                    })
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                t({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null
                    }
                }),
                    e.a11y = {
                        clicked: !1
                    };
                let a = null;
                function i(e) {
                    const t = a;
                    0 !== t.length && (t.innerHTML = "",
                        t.innerHTML = e)
                }
                const r = e => (Array.isArray(e) || (e = [e].filter((e => !!e))),
                    e);
                function n(e) {
                    (e = r(e)).forEach((e => {
                        e.setAttribute("tabIndex", "0")
                    }
                    ))
                }
                function l(e) {
                    (e = r(e)).forEach((e => {
                        e.setAttribute("tabIndex", "-1")
                    }
                    ))
                }
                function o(e, t) {
                    (e = r(e)).forEach((e => {
                        e.setAttribute("role", t)
                    }
                    ))
                }
                function d(e, t) {
                    (e = r(e)).forEach((e => {
                        e.setAttribute("aria-roledescription", t)
                    }
                    ))
                }
                function c(e, t) {
                    (e = r(e)).forEach((e => {
                        e.setAttribute("aria-label", t)
                    }
                    ))
                }
                function p(e) {
                    (e = r(e)).forEach((e => {
                        e.setAttribute("aria-disabled", !0)
                    }
                    ))
                }
                function u(e) {
                    (e = r(e)).forEach((e => {
                        e.setAttribute("aria-disabled", !1)
                    }
                    ))
                }
                function m(t) {
                    if (13 !== t.keyCode && 32 !== t.keyCode)
                        return;
                    const s = e.params.a11y
                        , a = t.target;
                    e.pagination && e.pagination.el && (a === e.pagination.el || e.pagination.el.contains(t.target)) && !t.target.matches(J(e.params.pagination.bulletClass)) || (e.navigation && e.navigation.nextEl && a === e.navigation.nextEl && (e.isEnd && !e.params.loop || e.slideNext(),
                        e.isEnd ? i(s.lastSlideMessage) : i(s.nextSlideMessage)),
                        e.navigation && e.navigation.prevEl && a === e.navigation.prevEl && (e.isBeginning && !e.params.loop || e.slidePrev(),
                            e.isBeginning ? i(s.firstSlideMessage) : i(s.prevSlideMessage)),
                        e.pagination && a.matches(J(e.params.pagination.bulletClass)) && a.click())
                }
                function h() {
                    return e.pagination && e.pagination.bullets && e.pagination.bullets.length
                }
                function f() {
                    return h() && e.params.pagination.clickable
                }
                const g = (e, t, s) => {
                    n(e),
                        "BUTTON" !== e.tagName && (o(e, "button"),
                            e.addEventListener("keydown", m)),
                        c(e, s),
                        function (e, t) {
                            (e = r(e)).forEach((e => {
                                e.setAttribute("aria-controls", t)
                            }
                            ))
                        }(e, t)
                }
                    , w = () => {
                        e.a11y.clicked = !0
                    }
                    , b = () => {
                        requestAnimationFrame((() => {
                            requestAnimationFrame((() => {
                                e.destroyed || (e.a11y.clicked = !1)
                            }
                            ))
                        }
                        ))
                    }
                    , E = t => {
                        if (e.a11y.clicked)
                            return;
                        const s = t.target.closest(`.${e.params.slideClass}, swiper-slide`);
                        if (!s || !e.slides.includes(s))
                            return;
                        const a = e.slides.indexOf(s) === e.activeIndex
                            , i = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(s);
                        a || i || t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0,
                            e.slideTo(e.slides.indexOf(s), 0))
                    }
                    , x = () => {
                        const t = e.params.a11y;
                        t.itemRoleDescriptionMessage && d(e.slides, t.itemRoleDescriptionMessage),
                            t.slideRole && o(e.slides, t.slideRole);
                        const s = e.slides.length;
                        t.slideLabelMessage && e.slides.forEach(((a, i) => {
                            const r = e.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
                            c(a, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
                        }
                        ))
                    }
                    ;
                s("beforeInit", (() => {
                    a = v("span", e.params.a11y.notificationClass),
                        a.setAttribute("aria-live", "assertive"),
                        a.setAttribute("aria-atomic", "true")
                }
                )),
                    s("afterInit", (() => {
                        e.params.a11y.enabled && (() => {
                            const t = e.params.a11y;
                            e.isElement ? e.el.shadowEl.append(a) : e.el.append(a);
                            const s = e.el;
                            t.containerRoleDescriptionMessage && d(s, t.containerRoleDescriptionMessage),
                                t.containerMessage && c(s, t.containerMessage);
                            const i = e.wrapperEl
                                , n = t.id || i.getAttribute("id") || `swiper-wrapper-${function (e = 16) {
                                    return "x".repeat(e).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))
                                }(16)}`
                                , l = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                            var o;
                            o = n,
                                r(i).forEach((e => {
                                    e.setAttribute("id", o)
                                }
                                )),
                                function (e, t) {
                                    (e = r(e)).forEach((e => {
                                        e.setAttribute("aria-live", t)
                                    }
                                    ))
                                }(i, l),
                                x();
                            let { nextEl: p, prevEl: u } = e.navigation ? e.navigation : {};
                            p = r(p),
                                u = r(u),
                                p && p.forEach((e => g(e, n, t.nextSlideMessage))),
                                u && u.forEach((e => g(e, n, t.prevSlideMessage))),
                                f() && (Array.isArray(e.pagination.el) ? e.pagination.el : [e.pagination.el]).forEach((e => {
                                    e.addEventListener("keydown", m)
                                }
                                )),
                                e.el.addEventListener("focus", E, !0),
                                e.el.addEventListener("pointerdown", w, !0),
                                e.el.addEventListener("pointerup", b, !0)
                        }
                        )()
                    }
                    )),
                    s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                        e.params.a11y.enabled && x()
                    }
                    )),
                    s("fromEdge toEdge afterInit lock unlock", (() => {
                        e.params.a11y.enabled && function () {
                            if (e.params.loop || e.params.rewind || !e.navigation)
                                return;
                            const { nextEl: t, prevEl: s } = e.navigation;
                            s && (e.isBeginning ? (p(s),
                                l(s)) : (u(s),
                                    n(s))),
                                t && (e.isEnd ? (p(t),
                                    l(t)) : (u(t),
                                        n(t)))
                        }()
                    }
                    )),
                    s("paginationUpdate", (() => {
                        e.params.a11y.enabled && function () {
                            const t = e.params.a11y;
                            h() && e.pagination.bullets.forEach((s => {
                                e.params.pagination.clickable && (n(s),
                                    e.params.pagination.renderBullet || (o(s, "button"),
                                        c(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))),
                                    s.matches(J(e.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
                            }
                            ))
                        }()
                    }
                    )),
                    s("destroy", (() => {
                        e.params.a11y.enabled && function () {
                            a && a.remove();
                            let { nextEl: t, prevEl: s } = e.navigation ? e.navigation : {};
                            t = r(t),
                                s = r(s),
                                t && t.forEach((e => e.removeEventListener("keydown", m))),
                                s && s.forEach((e => e.removeEventListener("keydown", m))),
                                f() && (Array.isArray(e.pagination.el) ? e.pagination.el : [e.pagination.el]).forEach((e => {
                                    e.removeEventListener("keydown", m)
                                }
                                )),
                                e.el.removeEventListener("focus", E, !0),
                                e.el.removeEventListener("pointerdown", w, !0),
                                e.el.removeEventListener("pointerup", b, !0)
                        }()
                    }
                    ))
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                t({
                    history: {
                        enabled: !1,
                        root: "",
                        replaceState: !1,
                        key: "slides",
                        keepQuery: !1
                    }
                });
                let a = !1
                    , i = {};
                const r = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    , n = e => {
                        const t = l();
                        let s;
                        s = e ? new URL(e) : t.location;
                        const a = s.pathname.slice(1).split("/").filter((e => "" !== e))
                            , i = a.length;
                        return {
                            key: a[i - 2],
                            value: a[i - 1]
                        }
                    }
                    , o = (t, s) => {
                        const i = l();
                        if (!a || !e.params.history.enabled)
                            return;
                        let n;
                        n = e.params.url ? new URL(e.params.url) : i.location;
                        const o = e.slides[s];
                        let d = r(o.getAttribute("data-history"));
                        if (e.params.history.root.length > 0) {
                            let s = e.params.history.root;
                            "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
                                d = `${s}/${t ? `${t}/` : ""}${d}`
                        } else
                            n.pathname.includes(t) || (d = `${t ? `${t}/` : ""}${d}`);
                        e.params.history.keepQuery && (d += n.search);
                        const c = i.history.state;
                        c && c.value === d || (e.params.history.replaceState ? i.history.replaceState({
                            value: d
                        }, null, d) : i.history.pushState({
                            value: d
                        }, null, d))
                    }
                    , d = (t, s, a) => {
                        if (s)
                            for (let i = 0, n = e.slides.length; i < n; i += 1) {
                                const n = e.slides[i];
                                if (r(n.getAttribute("data-history")) === s) {
                                    const s = e.getSlideIndex(n);
                                    e.slideTo(s, t, a)
                                }
                            }
                        else
                            e.slideTo(0, t, a)
                    }
                    , c = () => {
                        i = n(e.params.url),
                            d(e.params.speed, i.value, !1)
                    }
                    ;
                s("init", (() => {
                    e.params.history.enabled && (() => {
                        const t = l();
                        if (e.params.history) {
                            if (!t.history || !t.history.pushState)
                                return e.params.history.enabled = !1,
                                    void (e.params.hashNavigation.enabled = !0);
                            a = !0,
                                i = n(e.params.url),
                                i.key || i.value ? (d(0, i.value, e.params.runCallbacksOnInit),
                                    e.params.history.replaceState || t.addEventListener("popstate", c)) : e.params.history.replaceState || t.addEventListener("popstate", c)
                        }
                    }
                    )()
                }
                )),
                    s("destroy", (() => {
                        e.params.history.enabled && (() => {
                            const t = l();
                            e.params.history.replaceState || t.removeEventListener("popstate", c)
                        }
                        )()
                    }
                    )),
                    s("transitionEnd _freeModeNoMomentumRelease", (() => {
                        a && o(e.params.history.key, e.activeIndex)
                    }
                    )),
                    s("slideChange", (() => {
                        a && e.params.cssMode && o(e.params.history.key, e.activeIndex)
                    }
                    ))
            }
            , function ({ swiper: e, extendParams: t, emit: s, on: a }) {
                let i = !1;
                const n = r()
                    , o = l();
                t({
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1,
                        getSlideIndex(t, s) {
                            if (e.virtual && e.params.virtual.enabled) {
                                const t = e.slides.filter((e => e.getAttribute("data-hash") === s))[0];
                                return t ? parseInt(t.getAttribute("data-swiper-slide-index"), 10) : 0
                            }
                            return e.getSlideIndex(g(e.slidesEl, `.${e.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
                        }
                    }
                });
                const d = () => {
                    s("hashChange");
                    const t = n.location.hash.replace("#", "")
                        , a = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex];
                    if (t !== (a ? a.getAttribute("data-hash") : "")) {
                        const s = e.params.hashNavigation.getSlideIndex(e, t);
                        if (void 0 === s || Number.isNaN(s))
                            return;
                        e.slideTo(s)
                    }
                }
                    , c = () => {
                        if (!i || !e.params.hashNavigation.enabled)
                            return;
                        const t = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex]
                            , a = t ? t.getAttribute("data-hash") || t.getAttribute("data-history") : "";
                        e.params.hashNavigation.replaceState && o.history && o.history.replaceState ? (o.history.replaceState(null, null, `#${a}` || ""),
                            s("hashSet")) : (n.location.hash = a || "",
                                s("hashSet"))
                    }
                    ;
                a("init", (() => {
                    e.params.hashNavigation.enabled && (() => {
                        if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
                            return;
                        i = !0;
                        const t = n.location.hash.replace("#", "");
                        if (t) {
                            const s = 0
                                , a = e.params.hashNavigation.getSlideIndex(e, t);
                            e.slideTo(a || 0, s, e.params.runCallbacksOnInit, !0)
                        }
                        e.params.hashNavigation.watchState && o.addEventListener("hashchange", d)
                    }
                    )()
                }
                )),
                    a("destroy", (() => {
                        e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && o.removeEventListener("hashchange", d)
                    }
                    )),
                    a("transitionEnd _freeModeNoMomentumRelease", (() => {
                        i && c()
                    }
                    )),
                    a("slideChange", (() => {
                        i && e.params.cssMode && c()
                    }
                    ))
            }
            , function ({ swiper: e, extendParams: t, on: s, emit: a, params: i }) {
                let n, l;
                e.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                },
                    t({
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1,
                            pauseOnMouseEnter: !1
                        }
                    });
                let o, d, c, p, u, m, h, f = i && i.autoplay ? i.autoplay.delay : 3e3, g = i && i.autoplay ? i.autoplay.delay : 3e3, v = (new Date).getTime;
                function w(t) {
                    e && !e.destroyed && e.wrapperEl && t.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", w),
                        T())
                }
                const b = () => {
                    if (e.destroyed || !e.autoplay.running)
                        return;
                    e.autoplay.paused ? d = !0 : d && (g = o,
                        d = !1);
                    const t = e.autoplay.paused ? o : v + g - (new Date).getTime();
                    e.autoplay.timeLeft = t,
                        a("autoplayTimeLeft", t, t / f),
                        l = requestAnimationFrame((() => {
                            b()
                        }
                        ))
                }
                    , y = t => {
                        if (e.destroyed || !e.autoplay.running)
                            return;
                        cancelAnimationFrame(l),
                            b();
                        let s = void 0 === t ? e.params.autoplay.delay : t;
                        f = e.params.autoplay.delay,
                            g = e.params.autoplay.delay;
                        const i = (() => {
                            let t;
                            if (t = e.virtual && e.params.virtual.enabled ? e.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : e.slides[e.activeIndex],
                                t)
                                return parseInt(t.getAttribute("data-swiper-autoplay"), 10)
                        }
                        )();
                        !Number.isNaN(i) && i > 0 && void 0 === t && (s = i,
                            f = i,
                            g = i),
                            o = s;
                        const r = e.params.speed
                            , d = () => {
                                e && !e.destroyed && (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(r, !0, !0),
                                    a("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, r, !0, !0),
                                        a("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(r, !0, !0),
                                            a("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, r, !0, !0),
                                                a("autoplay")),
                                    e.params.cssMode && (v = (new Date).getTime(),
                                        requestAnimationFrame((() => {
                                            y()
                                        }
                                        ))))
                            }
                            ;
                        return s > 0 ? (clearTimeout(n),
                            n = setTimeout((() => {
                                d()
                            }
                            ), s)) : requestAnimationFrame((() => {
                                d()
                            }
                            )),
                            s
                    }
                    , E = () => {
                        e.autoplay.running = !0,
                            y(),
                            a("autoplayStart")
                    }
                    , x = () => {
                        e.autoplay.running = !1,
                            clearTimeout(n),
                            cancelAnimationFrame(l),
                            a("autoplayStop")
                    }
                    , S = (t, s) => {
                        if (e.destroyed || !e.autoplay.running)
                            return;
                        clearTimeout(n),
                            t || (h = !0);
                        const i = () => {
                            a("autoplayPause"),
                                e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", w) : T()
                        }
                            ;
                        if (e.autoplay.paused = !0,
                            s)
                            return m && (o = e.params.autoplay.delay),
                                m = !1,
                                void i();
                        const r = o || e.params.autoplay.delay;
                        o = r - ((new Date).getTime() - v),
                            e.isEnd && o < 0 && !e.params.loop || (o < 0 && (o = 0),
                                i())
                    }
                    , T = () => {
                        e.isEnd && o < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (v = (new Date).getTime(),
                            h ? (h = !1,
                                y(o)) : y(),
                            e.autoplay.paused = !1,
                            a("autoplayResume"))
                    }
                    , M = () => {
                        if (e.destroyed || !e.autoplay.running)
                            return;
                        const t = r();
                        "hidden" === t.visibilityState && (h = !0,
                            S(!0)),
                            "visible" === t.visibilityState && T()
                    }
                    , C = e => {
                        "mouse" === e.pointerType && (h = !0,
                            S(!0))
                    }
                    , P = t => {
                        "mouse" === t.pointerType && e.autoplay.paused && T()
                    }
                    ;
                s("init", (() => {
                    e.params.autoplay.enabled && (e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", C),
                        e.el.addEventListener("pointerleave", P)),
                        r().addEventListener("visibilitychange", M),
                        v = (new Date).getTime(),
                        E())
                }
                )),
                    s("destroy", (() => {
                        e.el.removeEventListener("pointerenter", C),
                            e.el.removeEventListener("pointerleave", P),
                            r().removeEventListener("visibilitychange", M),
                            e.autoplay.running && x()
                    }
                    )),
                    s("beforeTransitionStart", ((t, s, a) => {
                        !e.destroyed && e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? S(!0, !0) : x())
                    }
                    )),
                    s("sliderFirstMove", (() => {
                        !e.destroyed && e.autoplay.running && (e.params.autoplay.disableOnInteraction ? x() : (c = !0,
                            p = !1,
                            h = !1,
                            u = setTimeout((() => {
                                h = !0,
                                    p = !0,
                                    S(!0)
                            }
                            ), 200)))
                    }
                    )),
                    s("touchEnd", (() => {
                        if (!e.destroyed && e.autoplay.running && c) {
                            if (clearTimeout(u),
                                clearTimeout(n),
                                e.params.autoplay.disableOnInteraction)
                                return p = !1,
                                    void (c = !1);
                            p && e.params.cssMode && T(),
                                p = !1,
                                c = !1
                        }
                    }
                    )),
                    s("slideChange", (() => {
                        !e.destroyed && e.autoplay.running && (m = !0)
                    }
                    )),
                    Object.assign(e.autoplay, {
                        start: E,
                        stop: x,
                        pause: S,
                        resume: T
                    })
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                t({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                let a = !1
                    , i = !1;
                function n() {
                    const t = e.thumbs.swiper;
                    if (!t || t.destroyed)
                        return;
                    const s = t.clickedIndex
                        , a = t.clickedSlide;
                    if (a && a.classList.contains(e.params.thumbs.slideThumbActiveClass))
                        return;
                    if (null == s)
                        return;
                    let i;
                    i = t.params.loop ? parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s,
                        e.params.loop ? e.slideToLoop(i) : e.slideTo(i)
                }
                function l() {
                    const { thumbs: t } = e.params;
                    if (a)
                        return !1;
                    a = !0;
                    const s = e.constructor;
                    if (t.swiper instanceof s)
                        e.thumbs.swiper = t.swiper,
                            Object.assign(e.thumbs.swiper.originalParams, {
                                watchSlidesProgress: !0,
                                slideToClickedSlide: !1
                            }),
                            Object.assign(e.thumbs.swiper.params, {
                                watchSlidesProgress: !0,
                                slideToClickedSlide: !1
                            }),
                            e.thumbs.swiper.update();
                    else if (p(t.swiper)) {
                        const a = Object.assign({}, t.swiper);
                        Object.assign(a, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }),
                            e.thumbs.swiper = new s(a),
                            i = !0
                    }
                    return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
                        e.thumbs.swiper.on("tap", n),
                        !0
                }
                function o(t) {
                    const s = e.thumbs.swiper;
                    if (!s || s.destroyed)
                        return;
                    const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                    let i = 1;
                    const r = e.params.thumbs.slideThumbActiveClass;
                    if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (i = e.params.slidesPerView),
                        e.params.thumbs.multipleActiveThumbs || (i = 1),
                        i = Math.floor(i),
                        s.slides.forEach((e => e.classList.remove(r))),
                        s.params.loop || s.params.virtual && s.params.virtual.enabled)
                        for (let t = 0; t < i; t += 1)
                            g(s.slidesEl, `[data-swiper-slide-index="${e.realIndex + t}"]`).forEach((e => {
                                e.classList.add(r)
                            }
                            ));
                    else
                        for (let t = 0; t < i; t += 1)
                            s.slides[e.realIndex + t] && s.slides[e.realIndex + t].classList.add(r);
                    const n = e.params.thumbs.autoScrollOffset
                        , l = n && !s.params.loop;
                    if (e.realIndex !== s.realIndex || l) {
                        const i = s.activeIndex;
                        let r, o;
                        if (s.params.loop) {
                            const t = s.slides.filter((t => t.getAttribute("data-swiper-slide-index") === `${e.realIndex}`))[0];
                            r = s.slides.indexOf(t),
                                o = e.activeIndex > e.previousIndex ? "next" : "prev"
                        } else
                            r = e.realIndex,
                                o = r > e.previousIndex ? "next" : "prev";
                        l && (r += "next" === o ? n : -1 * n),
                            s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup,
                                s.slideTo(r, t ? 0 : void 0))
                    }
                }
                e.thumbs = {
                    swiper: null
                },
                    s("beforeInit", (() => {
                        const { thumbs: t } = e.params;
                        if (t && t.swiper)
                            if ("string" == typeof t.swiper || t.swiper instanceof HTMLElement) {
                                const s = r()
                                    , a = () => {
                                        const a = "string" == typeof t.swiper ? s.querySelector(t.swiper) : t.swiper;
                                        if (a && a.swiper)
                                            t.swiper = a.swiper,
                                                l(),
                                                o(!0);
                                        else if (a) {
                                            const s = i => {
                                                t.swiper = i.detail[0],
                                                    a.removeEventListener("init", s),
                                                    l(),
                                                    o(!0),
                                                    t.swiper.update(),
                                                    e.update()
                                            }
                                                ;
                                            a.addEventListener("init", s)
                                        }
                                        return a
                                    }
                                    , i = () => {
                                        e.destroyed || a() || requestAnimationFrame(i)
                                    }
                                    ;
                                requestAnimationFrame(i)
                            } else
                                l(),
                                    o(!0)
                    }
                    )),
                    s("slideChange update resize observerUpdate", (() => {
                        o()
                    }
                    )),
                    s("setTransition", ((t, s) => {
                        const a = e.thumbs.swiper;
                        a && !a.destroyed && a.setTransition(s)
                    }
                    )),
                    s("beforeDestroy", (() => {
                        const t = e.thumbs.swiper;
                        t && !t.destroyed && i && t.destroy()
                    }
                    )),
                    Object.assign(e.thumbs, {
                        init: l,
                        update: o
                    })
            }
            , function ({ swiper: e, extendParams: t, emit: s, once: a }) {
                t({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }),
                    Object.assign(e, {
                        freeMode: {
                            onTouchStart: function () {
                                if (e.params.cssMode)
                                    return;
                                const t = e.getTranslate();
                                e.setTranslate(t),
                                    e.setTransition(0),
                                    e.touchEventsData.velocities.length = 0,
                                    e.freeMode.onTouchEnd({
                                        currentPos: e.rtl ? e.translate : -e.translate
                                    })
                            },
                            onTouchMove: function () {
                                if (e.params.cssMode)
                                    return;
                                const { touchEventsData: t, touches: s } = e;
                                0 === t.velocities.length && t.velocities.push({
                                    position: s[e.isHorizontal() ? "startX" : "startY"],
                                    time: t.touchStartTime
                                }),
                                    t.velocities.push({
                                        position: s[e.isHorizontal() ? "currentX" : "currentY"],
                                        time: d()
                                    })
                            },
                            onTouchEnd: function ({ currentPos: t }) {
                                if (e.params.cssMode)
                                    return;
                                const { params: i, wrapperEl: r, rtlTranslate: n, snapGrid: l, touchEventsData: o } = e
                                    , c = d() - o.touchStartTime;
                                if (t < -e.minTranslate())
                                    e.slideTo(e.activeIndex);
                                else if (t > -e.maxTranslate())
                                    e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
                                else {
                                    if (i.freeMode.momentum) {
                                        if (o.velocities.length > 1) {
                                            const t = o.velocities.pop()
                                                , s = o.velocities.pop()
                                                , a = t.position - s.position
                                                , r = t.time - s.time;
                                            e.velocity = a / r,
                                                e.velocity /= 2,
                                                Math.abs(e.velocity) < i.freeMode.minimumVelocity && (e.velocity = 0),
                                                (r > 150 || d() - t.time > 300) && (e.velocity = 0)
                                        } else
                                            e.velocity = 0;
                                        e.velocity *= i.freeMode.momentumVelocityRatio,
                                            o.velocities.length = 0;
                                        let t = 1e3 * i.freeMode.momentumRatio;
                                        const c = e.velocity * t;
                                        let p = e.translate + c;
                                        n && (p = -p);
                                        let u, m = !1;
                                        const h = 20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;
                                        let f;
                                        if (p < e.maxTranslate())
                                            i.freeMode.momentumBounce ? (p + e.maxTranslate() < -h && (p = e.maxTranslate() - h),
                                                u = e.maxTranslate(),
                                                m = !0,
                                                o.allowMomentumBounce = !0) : p = e.maxTranslate(),
                                                i.loop && i.centeredSlides && (f = !0);
                                        else if (p > e.minTranslate())
                                            i.freeMode.momentumBounce ? (p - e.minTranslate() > h && (p = e.minTranslate() + h),
                                                u = e.minTranslate(),
                                                m = !0,
                                                o.allowMomentumBounce = !0) : p = e.minTranslate(),
                                                i.loop && i.centeredSlides && (f = !0);
                                        else if (i.freeMode.sticky) {
                                            let t;
                                            for (let e = 0; e < l.length; e += 1)
                                                if (l[e] > -p) {
                                                    t = e;
                                                    break
                                                }
                                            p = Math.abs(l[t] - p) < Math.abs(l[t - 1] - p) || "next" === e.swipeDirection ? l[t] : l[t - 1],
                                                p = -p
                                        }
                                        if (f && a("transitionEnd", (() => {
                                            e.loopFix()
                                        }
                                        )),
                                            0 !== e.velocity) {
                                            if (t = n ? Math.abs((-p - e.translate) / e.velocity) : Math.abs((p - e.translate) / e.velocity),
                                                i.freeMode.sticky) {
                                                const s = Math.abs((n ? -p : p) - e.translate)
                                                    , a = e.slidesSizesGrid[e.activeIndex];
                                                t = s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed
                                            }
                                        } else if (i.freeMode.sticky)
                                            return void e.slideToClosest();
                                        i.freeMode.momentumBounce && m ? (e.updateProgress(u),
                                            e.setTransition(t),
                                            e.setTranslate(p),
                                            e.transitionStart(!0, e.swipeDirection),
                                            e.animating = !0,
                                            x(r, (() => {
                                                e && !e.destroyed && o.allowMomentumBounce && (s("momentumBounce"),
                                                    e.setTransition(i.speed),
                                                    setTimeout((() => {
                                                        e.setTranslate(u),
                                                            x(r, (() => {
                                                                e && !e.destroyed && e.transitionEnd()
                                                            }
                                                            ))
                                                    }
                                                    ), 0))
                                            }
                                            ))) : e.velocity ? (s("_freeModeNoMomentumRelease"),
                                                e.updateProgress(p),
                                                e.setTransition(t),
                                                e.setTranslate(p),
                                                e.transitionStart(!0, e.swipeDirection),
                                                e.animating || (e.animating = !0,
                                                    x(r, (() => {
                                                        e && !e.destroyed && e.transitionEnd()
                                                    }
                                                    )))) : e.updateProgress(p),
                                            e.updateActiveIndex(),
                                            e.updateSlidesClasses()
                                    } else {
                                        if (i.freeMode.sticky)
                                            return void e.slideToClosest();
                                        i.freeMode && s("_freeModeNoMomentumRelease")
                                    }
                                    (!i.freeMode.momentum || c >= i.longSwipesMs) && (e.updateProgress(),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses())
                                }
                            }
                        }
                    })
            }
            , function ({ swiper: e, extendParams: t }) {
                let s, a, i;
                t({
                    grid: {
                        rows: 1,
                        fill: "column"
                    }
                });
                const r = () => {
                    let t = e.params.spaceBetween;
                    return "string" == typeof t && t.indexOf("%") >= 0 ? t = parseFloat(t.replace("%", "")) / 100 * e.size : "string" == typeof t && (t = parseFloat(t)),
                        t
                }
                    ;
                e.grid = {
                    initSlides: t => {
                        const { slidesPerView: r } = e.params
                            , { rows: n, fill: l } = e.params.grid;
                        i = Math.floor(t / n),
                            s = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n,
                            "auto" !== r && "row" === l && (s = Math.max(s, r * n)),
                            a = s / n
                    }
                    ,
                    updateSlide: (t, n, l, o) => {
                        const { slidesPerGroup: d } = e.params
                            , c = r()
                            , { rows: p, fill: u } = e.params.grid;
                        let m, h, f;
                        if ("row" === u && d > 1) {
                            const e = Math.floor(t / (d * p))
                                , a = t - p * d * e
                                , i = 0 === e ? d : Math.min(Math.ceil((l - e * p * d) / p), d);
                            f = Math.floor(a / i),
                                h = a - f * i + e * d,
                                m = h + f * s / p,
                                n.style.order = m
                        } else
                            "column" === u ? (h = Math.floor(t / p),
                                f = t - h * p,
                                (h > i || h === i && f === p - 1) && (f += 1,
                                    f >= p && (f = 0,
                                        h += 1))) : (f = Math.floor(t / a),
                                            h = t - f * a);
                        n.row = f,
                            n.column = h,
                            n.style[o("margin-top")] = 0 !== f ? c && `${c}px` : ""
                    }
                    ,
                    updateWrapperSize: (t, a, i) => {
                        const { centeredSlides: n, roundLengths: l } = e.params
                            , o = r()
                            , { rows: d } = e.params.grid;
                        if (e.virtualSize = (t + o) * s,
                            e.virtualSize = Math.ceil(e.virtualSize / d) - o,
                            e.wrapperEl.style[i("width")] = `${e.virtualSize + o}px`,
                            n) {
                            const t = [];
                            for (let s = 0; s < a.length; s += 1) {
                                let i = a[s];
                                l && (i = Math.floor(i)),
                                    a[s] < e.virtualSize + a[0] && t.push(i)
                            }
                            a.splice(0, a.length),
                                a.push(...t)
                        }
                    }
                }
            }
            , function ({ swiper: e }) {
                Object.assign(e, {
                    appendSlide: ee.bind(e),
                    prependSlide: te.bind(e),
                    addSlide: se.bind(e),
                    removeSlide: ae.bind(e),
                    removeAllSlides: ie.bind(e)
                })
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                t({
                    fadeEffect: {
                        crossFade: !1
                    }
                }),
                    re({
                        effect: "fade",
                        swiper: e,
                        on: s,
                        setTranslate: () => {
                            const { slides: t } = e;
                            e.params.fadeEffect;
                            for (let s = 0; s < t.length; s += 1) {
                                const t = e.slides[s];
                                let a = -t.swiperSlideOffset;
                                e.params.virtualTranslate || (a -= e.translate);
                                let i = 0;
                                e.isHorizontal() || (i = a,
                                    a = 0);
                                const r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t.progress), 0) : 1 + Math.min(Math.max(t.progress, -1), 0)
                                    , n = ne(0, t);
                                n.style.opacity = r,
                                    n.style.transform = `translate3d(${a}px, ${i}px, 0px)`
                            }
                        }
                        ,
                        setTransition: t => {
                            const s = e.slides.map((e => f(e)));
                            s.forEach((e => {
                                e.style.transitionDuration = `${t}ms`
                            }
                            )),
                                le({
                                    swiper: e,
                                    duration: t,
                                    transformElements: s,
                                    allSlides: !0
                                })
                        }
                        ,
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !e.params.cssMode
                        })
                    })
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                t({
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                });
                const a = (e, t, s) => {
                    let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top")
                        , i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
                    a || (a = v("div", "swiper-slide-shadow-" + (s ? "left" : "top")),
                        e.append(a)),
                        i || (i = v("div", "swiper-slide-shadow-" + (s ? "right" : "bottom")),
                            e.append(i)),
                        a && (a.style.opacity = Math.max(-t, 0)),
                        i && (i.style.opacity = Math.max(t, 0))
                }
                    ;
                re({
                    effect: "cube",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        const { el: t, wrapperEl: s, slides: i, width: r, height: n, rtlTranslate: l, size: o, browser: d } = e
                            , c = e.params.cubeEffect
                            , p = e.isHorizontal()
                            , u = e.virtual && e.params.virtual.enabled;
                        let m, h = 0;
                        c.shadow && (p ? (m = e.slidesEl.querySelector(".swiper-cube-shadow"),
                            m || (m = v("div", "swiper-cube-shadow"),
                                e.slidesEl.append(m)),
                            m.style.height = `${r}px`) : (m = t.querySelector(".swiper-cube-shadow"),
                                m || (m = v("div", "swiper-cube-shadow"),
                                    t.append(m))));
                        for (let e = 0; e < i.length; e += 1) {
                            const t = i[e];
                            let s = e;
                            u && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
                            let r = 90 * s
                                , n = Math.floor(r / 360);
                            l && (r = -r,
                                n = Math.floor(-r / 360));
                            const d = Math.max(Math.min(t.progress, 1), -1);
                            let m = 0
                                , f = 0
                                , g = 0;
                            s % 4 == 0 ? (m = 4 * -n * o,
                                g = 0) : (s - 1) % 4 == 0 ? (m = 0,
                                    g = 4 * -n * o) : (s - 2) % 4 == 0 ? (m = o + 4 * n * o,
                                        g = o) : (s - 3) % 4 == 0 && (m = -o,
                                            g = 3 * o + 4 * o * n),
                                l && (m = -m),
                                p || (f = m,
                                    m = 0);
                            const v = `rotateX(${p ? 0 : -r}deg) rotateY(${p ? r : 0}deg) translate3d(${m}px, ${f}px, ${g}px)`;
                            d <= 1 && d > -1 && (h = 90 * s + 90 * d,
                                l && (h = 90 * -s - 90 * d)),
                                t.style.transform = v,
                                c.slideShadows && a(t, d, p)
                        }
                        if (s.style.transformOrigin = `50% 50% -${o / 2}px`,
                            s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`,
                            c.shadow)
                            if (p)
                                m.style.transform = `translate3d(0px, ${r / 2 + c.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`;
                            else {
                                const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)
                                    , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                                    , s = c.shadowScale
                                    , a = c.shadowScale / t
                                    , i = c.shadowOffset;
                                m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`
                            }
                        const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
                        s.style.transform = `translate3d(0px,0,${f}px) rotateX(${e.isHorizontal() ? 0 : h}deg) rotateY(${e.isHorizontal() ? -h : 0}deg)`,
                            s.style.setProperty("--swiper-cube-translate-z", `${f}px`)
                    }
                    ,
                    setTransition: t => {
                        const { el: s, slides: a } = e;
                        if (a.forEach((e => {
                            e.style.transitionDuration = `${t}ms`,
                                e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => {
                                    e.style.transitionDuration = `${t}ms`
                                }
                                ))
                        }
                        )),
                            e.params.cubeEffect.shadow && !e.isHorizontal()) {
                            const e = s.querySelector(".swiper-cube-shadow");
                            e && (e.style.transitionDuration = `${t}ms`)
                        }
                    }
                    ,
                    recreateShadows: () => {
                        const t = e.isHorizontal();
                        e.slides.forEach((e => {
                            const s = Math.max(Math.min(e.progress, 1), -1);
                            a(e, s, t)
                        }
                        ))
                    }
                    ,
                    getEffectParams: () => e.params.cubeEffect,
                    perspective: () => !0,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    })
                })
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                t({
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                });
                const a = (t, s, a) => {
                    let i = e.isHorizontal() ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top")
                        , r = e.isHorizontal() ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
                    i || (i = oe(0, t, e.isHorizontal() ? "left" : "top")),
                        r || (r = oe(0, t, e.isHorizontal() ? "right" : "bottom")),
                        i && (i.style.opacity = Math.max(-s, 0)),
                        r && (r.style.opacity = Math.max(s, 0))
                }
                    ;
                re({
                    effect: "flip",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        const { slides: t, rtlTranslate: s } = e
                            , i = e.params.flipEffect;
                        for (let r = 0; r < t.length; r += 1) {
                            const n = t[r];
                            let l = n.progress;
                            e.params.flipEffect.limitRotation && (l = Math.max(Math.min(n.progress, 1), -1));
                            const o = n.swiperSlideOffset;
                            let d = -180 * l
                                , c = 0
                                , p = e.params.cssMode ? -o - e.translate : -o
                                , u = 0;
                            e.isHorizontal() ? s && (d = -d) : (u = p,
                                p = 0,
                                c = -d,
                                d = 0),
                                n.style.zIndex = -Math.abs(Math.round(l)) + t.length,
                                i.slideShadows && a(n, l);
                            const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                            ne(0, n).style.transform = m
                        }
                    }
                    ,
                    setTransition: t => {
                        const s = e.slides.map((e => f(e)));
                        s.forEach((e => {
                            e.style.transitionDuration = `${t}ms`,
                                e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => {
                                    e.style.transitionDuration = `${t}ms`
                                }
                                ))
                        }
                        )),
                            le({
                                swiper: e,
                                duration: t,
                                transformElements: s
                            })
                    }
                    ,
                    recreateShadows: () => {
                        e.params.flipEffect,
                            e.slides.forEach((t => {
                                let s = t.progress;
                                e.params.flipEffect.limitRotation && (s = Math.max(Math.min(t.progress, 1), -1)),
                                    a(t, s)
                            }
                            ))
                    }
                    ,
                    getEffectParams: () => e.params.flipEffect,
                    perspective: () => !0,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                t({
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0
                    }
                }),
                    re({
                        effect: "coverflow",
                        swiper: e,
                        on: s,
                        setTranslate: () => {
                            const { width: t, height: s, slides: a, slidesSizesGrid: i } = e
                                , r = e.params.coverflowEffect
                                , n = e.isHorizontal()
                                , l = e.translate
                                , o = n ? t / 2 - l : s / 2 - l
                                , d = n ? r.rotate : -r.rotate
                                , c = r.depth;
                            for (let e = 0, t = a.length; e < t; e += 1) {
                                const t = a[e]
                                    , s = i[e]
                                    , l = (o - t.swiperSlideOffset - s / 2) / s
                                    , p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                                let u = n ? d * p : 0
                                    , m = n ? 0 : d * p
                                    , h = -c * Math.abs(p)
                                    , f = r.stretch;
                                "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                                let g = n ? 0 : f * p
                                    , v = n ? f * p : 0
                                    , w = 1 - (1 - r.scale) * Math.abs(p);
                                Math.abs(v) < .001 && (v = 0),
                                    Math.abs(g) < .001 && (g = 0),
                                    Math.abs(h) < .001 && (h = 0),
                                    Math.abs(u) < .001 && (u = 0),
                                    Math.abs(m) < .001 && (m = 0),
                                    Math.abs(w) < .001 && (w = 0);
                                const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
                                if (ne(0, t).style.transform = b,
                                    t.style.zIndex = 1 - Math.abs(Math.round(p)),
                                    r.slideShadows) {
                                    let e = n ? t.querySelector(".swiper-slide-shadow-left") : t.querySelector(".swiper-slide-shadow-top")
                                        , s = n ? t.querySelector(".swiper-slide-shadow-right") : t.querySelector(".swiper-slide-shadow-bottom");
                                    e || (e = oe(0, t, n ? "left" : "top")),
                                        s || (s = oe(0, t, n ? "right" : "bottom")),
                                        e && (e.style.opacity = p > 0 ? p : 0),
                                        s && (s.style.opacity = -p > 0 ? -p : 0)
                                }
                            }
                        }
                        ,
                        setTransition: t => {
                            e.slides.map((e => f(e))).forEach((e => {
                                e.style.transitionDuration = `${t}ms`,
                                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => {
                                        e.style.transitionDuration = `${t}ms`
                                    }
                                    ))
                            }
                            ))
                        }
                        ,
                        perspective: () => !0,
                        overwriteParams: () => ({
                            watchSlidesProgress: !0
                        })
                    })
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                t({
                    creativeEffect: {
                        limitProgress: 1,
                        shadowPerProgress: !1,
                        progressMultiplier: 1,
                        perspective: !0,
                        prev: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        },
                        next: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        }
                    }
                });
                const a = e => "string" == typeof e ? e : `${e}px`;
                re({
                    effect: "creative",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        const { slides: t, wrapperEl: s, slidesSizesGrid: i } = e
                            , r = e.params.creativeEffect
                            , { progressMultiplier: n } = r
                            , l = e.params.centeredSlides;
                        if (l) {
                            const t = i[0] / 2 - e.params.slidesOffsetBefore || 0;
                            s.style.transform = `translateX(calc(50% - ${t}px))`
                        }
                        for (let s = 0; s < t.length; s += 1) {
                            const i = t[s]
                                , o = i.progress
                                , d = Math.min(Math.max(i.progress, -r.limitProgress), r.limitProgress);
                            let c = d;
                            l || (c = Math.min(Math.max(i.originalProgress, -r.limitProgress), r.limitProgress));
                            const p = i.swiperSlideOffset
                                , u = [e.params.cssMode ? -p - e.translate : -p, 0, 0]
                                , m = [0, 0, 0];
                            let h = !1;
                            e.isHorizontal() || (u[1] = u[0],
                                u[0] = 0);
                            let f = {
                                translate: [0, 0, 0],
                                rotate: [0, 0, 0],
                                scale: 1,
                                opacity: 1
                            };
                            d < 0 ? (f = r.next,
                                h = !0) : d > 0 && (f = r.prev,
                                    h = !0),
                                u.forEach(((e, t) => {
                                    u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d * n)}))`
                                }
                                )),
                                m.forEach(((e, t) => {
                                    m[t] = f.rotate[t] * Math.abs(d * n)
                                }
                                )),
                                i.style.zIndex = -Math.abs(Math.round(o)) + t.length;
                            const g = u.join(", ")
                                , v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`
                                , w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`
                                , b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n
                                , y = `translate3d(${g}) ${v} ${w}`;
                            if (h && f.shadow || !h) {
                                let e = i.querySelector(".swiper-slide-shadow");
                                if (!e && f.shadow && (e = oe(0, i)),
                                    e) {
                                    const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                                    e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                                }
                            }
                            const E = ne(0, i);
                            E.style.transform = y,
                                E.style.opacity = b,
                                f.origin && (E.style.transformOrigin = f.origin)
                        }
                    }
                    ,
                    setTransition: t => {
                        const s = e.slides.map((e => f(e)));
                        s.forEach((e => {
                            e.style.transitionDuration = `${t}ms`,
                                e.querySelectorAll(".swiper-slide-shadow").forEach((e => {
                                    e.style.transitionDuration = `${t}ms`
                                }
                                ))
                        }
                        )),
                            le({
                                swiper: e,
                                duration: t,
                                transformElements: s,
                                allSlides: !0
                            })
                    }
                    ,
                    perspective: () => e.params.creativeEffect.perspective,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }
            , function ({ swiper: e, extendParams: t, on: s }) {
                t({
                    cardsEffect: {
                        slideShadows: !0,
                        rotate: !0,
                        perSlideRotate: 2,
                        perSlideOffset: 8
                    }
                }),
                    re({
                        effect: "cards",
                        swiper: e,
                        on: s,
                        setTranslate: () => {
                            const { slides: t, activeIndex: s, rtlTranslate: a } = e
                                , i = e.params.cardsEffect
                                , { startTranslate: r, isTouched: n } = e.touchEventsData
                                , l = a ? -e.translate : e.translate;
                            for (let o = 0; o < t.length; o += 1) {
                                const d = t[o]
                                    , c = d.progress
                                    , p = Math.min(Math.max(c, -4), 4);
                                let u = d.swiperSlideOffset;
                                e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
                                    e.params.centeredSlides && e.params.cssMode && (u -= t[0].swiperSlideOffset);
                                let m = e.params.cssMode ? -u - e.translate : -u
                                    , h = 0;
                                const f = -100 * Math.abs(p);
                                let g = 1
                                    , v = -i.perSlideRotate * p
                                    , w = i.perSlideOffset - .75 * Math.abs(p);
                                const b = e.virtual && e.params.virtual.enabled ? e.virtual.from + o : o
                                    , y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || e.params.cssMode) && l < r
                                    , E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || e.params.cssMode) && l > r;
                                if (y || E) {
                                    const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                                    v += -28 * p * e,
                                        g += -.5 * e,
                                        w += 96 * e,
                                        h = -25 * e * Math.abs(p) + "%"
                                }
                                if (m = p < 0 ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))` : `${m}px`,
                                    !e.isHorizontal()) {
                                    const e = h;
                                    h = m,
                                        m = e
                                }
                                const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p)
                                    , S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? a ? -v : v : 0}deg)\n        scale(${x})\n      `;
                                if (i.slideShadows) {
                                    let e = d.querySelector(".swiper-slide-shadow");
                                    e || (e = oe(0, d)),
                                        e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                                }
                                d.style.zIndex = -Math.abs(Math.round(c)) + t.length,
                                    ne(0, d).style.transform = S
                            }
                        }
                        ,
                        setTransition: t => {
                            const s = e.slides.map((e => f(e)));
                            s.forEach((e => {
                                e.style.transitionDuration = `${t}ms`,
                                    e.querySelectorAll(".swiper-slide-shadow").forEach((e => {
                                        e.style.transitionDuration = `${t}ms`
                                    }
                                    ))
                            }
                            )),
                                le({
                                    swiper: e,
                                    duration: t,
                                    transformElements: s
                                })
                        }
                        ,
                        perspective: () => !0,
                        overwriteParams: () => ({
                            watchSlidesProgress: !0,
                            virtualTranslate: !e.params.cssMode
                        })
                    })
            }
        ];
        return Z.use(de),
            t
    }()
}
));
