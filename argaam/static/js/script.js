/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(n, t) {
    function et(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    function li(n) {
        if (!ft[n]) {
            var e = r.body
              , t = i("<" + n + ">").appendTo(e)
              , u = t.css("display");
            t.remove(),
            (u === "none" || u === "") && (f || (f = r.createElement("iframe"),
            f.frameBorder = f.width = f.height = 0),
            e.appendChild(f),
            l && f.createElement || (l = (f.contentWindow || f.contentDocument).document,
            l.write((r.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"),
            l.close()),
            t = l.createElement(n),
            l.body.appendChild(t),
            u = i.css(t, "display"),
            e.removeChild(f)),
            ft[n] = u
        }
        return ft[n]
    }
    function v(n, t) {
        var r = {};
        return i.each(di.concat.apply([], di.slice(0, t)), function() {
            r[this] = n
        }),
        r
    }
    function ff() {
        k = t
    }
    function ur() {
        return setTimeout(ff, 0),
        k = i.now()
    }
    function uf() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function gi() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }
    function rf(n, r) {
        n.dataFilter && (r = n.dataFilter(r, n.dataType));
        for (var v = n.dataTypes, s = {}, l, p = v.length, a, u = v[0], h, y, f, e, o, c = 1; c < p; c++) {
            if (c === 1)
                for (l in n.converters)
                    typeof l == "string" && (s[l.toLowerCase()] = n.converters[l]);
            if (h = u,
            u = v[c],
            u === "*")
                u = h;
            else if (h !== "*" && h !== u) {
                if (y = h + " " + u,
                f = s[y] || s["* " + u],
                !f) {
                    o = t;
                    for (e in s)
                        if (a = e.split(" "),
                        (a[0] === h || a[0] === "*") && (o = s[a[1] + " " + u],
                        o)) {
                            e = s[e],
                            e === !0 ? f = o : o === !0 && (f = e);
                            break
                        }
                }
                !f && !o && i.error("No conversion from " + y.replace(" ", " to ")),
                f !== !0 && (r = f ? f(r) : o(e(r)))
            }
        }
        return r
    }
    function tf(n, i, r) {
        var s = n.contents, f = n.dataTypes, c = n.responseFields, o, u, e, h;
        for (u in c)
            u in r && (i[c[u]] = r[u]);
        while (f[0] === "*")
            f.shift(),
            o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in s)
                if (s[u] && s[u].test(o)) {
                    f.unshift(u);
                    break
                }
        if (f[0]in r)
            e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                h || (h = u)
            }
            e = e || h
        }
        if (e)
            return e !== f[0] && f.unshift(e),
            r[e]
    }
    function ct(n, t, r, u) {
        if (i.isArray(t))
            i.each(t, function(t, f) {
                r || ru.test(n) ? u(n, f) : ct(n + "[" + (typeof f == "object" || i.isArray(f) ? t : "") + "]", f, r, u)
            });
        else if (r || t == null || typeof t != "object")
            u(n, t);
        else
            for (var f in t)
                ct(n + "[" + f + "]", t[f], r, u)
    }
    function tr(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r)
            r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }
    function nt(n, i, r, u, f, e) {
        f = f || i.dataTypes[0],
        e = e || {},
        e[f] = !0;
        for (var s = n[f], h = 0, l = s ? s.length : 0, c = n === rt, o; h < l && (c || !o); h++)
            o = s[h](i, r, u),
            typeof o == "string" && (!c || e[o] ? o = t : (i.dataTypes.unshift(o),
            o = nt(n, i, r, u, o, e)));
        return (c || !o) && !e["*"] && (o = nt(n, i, r, u, "*", e)),
        o
    }
    function lt(n) {
        return function(t, r) {
            if (typeof t != "string" && (r = t,
            t = "*"),
            i.isFunction(r))
                for (var o = t.toLowerCase().split(kt), f = 0, h = o.length, u, s, e; f < h; f++)
                    u = o[f],
                    e = /^\+/.test(u),
                    e && (u = u.substr(1) || "*"),
                    s = n[u] = n[u] || [],
                    s[e ? "unshift" : "push"](r)
        }
    }
    function fr(n, t, r) {
        var u = t === "width" ? n.offsetWidth : n.offsetHeight
          , e = t === "width" ? hu : ee
          , f = 0
          , o = e.length;
        if (u > 0) {
            if (r !== "border")
                for (; f < o; f++)
                    r || (u -= parseFloat(i.css(n, "padding" + e[f])) || 0),
                    r === "margin" ? u += parseFloat(i.css(n, r + e[f])) || 0 : u -= parseFloat(i.css(n, "border" + e[f] + "Width")) || 0;
            return u + "px"
        }
        if (u = a(n, t, t),
        (u < 0 || u == null) && (u = n.style[t] || 0),
        u = parseFloat(u) || 0,
        r)
            for (; f < o; f++)
                u += parseFloat(i.css(n, "padding" + e[f])) || 0,
                r !== "padding" && (u += parseFloat(i.css(n, "border" + e[f] + "Width")) || 0),
                r === "margin" && (u += parseFloat(i.css(n, r + e[f])) || 0);
        return u + "px"
    }
    function nf(n, t) {
        t.src ? i.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(pf, "/*$0*/")),
        t.parentNode && t.parentNode.removeChild(t)
    }
    function gu(n) {
        var t = r.createElement("div");
        return dt.appendChild(t),
        t.innerHTML = n.outerHTML,
        t.firstChild
    }
    function nr(n) {
        var t = (n.nodeName || "").toLowerCase();
        t === "input" ? wi(n) : t !== "script" && typeof n.getElementsByTagName != "undefined" && i.grep(n.getElementsByTagName("input"), wi)
    }
    function wi(n) {
        (n.type === "checkbox" || n.type === "radio") && (n.defaultChecked = n.checked)
    }
    function tt(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }
    function at(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(n),
        r = t.nodeName.toLowerCase(),
        r === "object" ? t.outerHTML = n.outerHTML : r !== "input" || n.type !== "checkbox" && n.type !== "radio" ? r === "option" ? t.selected = n.defaultSelected : (r === "input" || r === "textarea") && (t.defaultValue = n.defaultValue) : (n.checked && (t.defaultChecked = t.checked = n.checked),
        t.value !== n.value && (t.value = n.value)),
        t.removeAttribute(i.expando))
    }
    function yr(n, t) {
        if (t.nodeType === 1 && !!i.hasData(n)) {
            var r, u, o, s = i._data(n), e = i._data(t, s), f = s.events;
            if (f) {
                delete e.handle,
                e.events = {};
                for (r in f)
                    for (u = 0,
                    o = f[r].length; u < o; u++)
                        i.event.add(t, r + (f[r][u].namespace ? "." : "") + f[r][u].namespace, f[r][u], f[r][u].data)
            }
            e.data && (e.data = i.extend({}, e.data))
        }
    }
    function du(n) {
        return i.nodeName(n, "table") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }
    function vi(n) {
        var i = ni.split("|")
          , t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length)
                t.createElement(i.pop());
        return t
    }
    function yi(n, t, r) {
        if (t = t || 0,
        i.isFunction(t))
            return i.grep(n, function(n, i) {
                var u = !!t.call(n, i, n);
                return u === r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t === r
            });
        if (typeof t == "string") {
            var u = i.grep(n, function(n) {
                return n.nodeType === 1
            });
            if (ie.test(t))
                return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 === r
        })
    }
    function pi(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }
    function g() {
        return !0
    }
    function c() {
        return !1
    }
    function bi(n, t, r) {
        var u = t + "defer"
          , f = t + "queue"
          , e = t + "mark"
          , o = i._data(n, u);
        o && (r === "queue" || !i._data(n, f)) && (r === "mark" || !i._data(n, e)) && setTimeout(function() {
            !i._data(n, f) && !i._data(n, e) && (i.removeData(n, u, !0),
            o.fire())
        }, 0)
    }
    function ot(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON")
                return !1;
        return !0
    }
    function ki(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(ar, "-$1").toLowerCase();
            if (u = n.getAttribute(f),
            typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : i.isNumeric(u) ? parseFloat(u) : rr.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else
                u = t
        }
        return u
    }
    function ef(n) {
        var i = ir[n] = {}, t, r;
        for (n = n.split(/\s+/),
        t = 0,
        r = n.length; t < r; t++)
            i[n[t]] = !0;
        return i
    }
    var r = n.document, ku = n.navigator, wu = n.location, i = function() {
        function c() {
            if (!i.isReady) {
                try {
                    r.documentElement.doScroll("left")
                } catch (n) {
                    setTimeout(c, 1);
                    return
                }
                i.ready()
            }
        }
        var i = function(n, t) {
            return new i.fn.init(n,t,y)
        }, d = n.jQuery, g = n.$, y, nt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, p = /\S/, w = /^\s+/, b = /\s+$/, st = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, it = /^[\],:{}\s]*$/, k = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, lt = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ct = /(?:^|:|,)(?:\s*\[)+/g, ht = /(webkit)[ \/]([\w.]+)/, vt = /(opera)(?:.*version)?[ \/]([\w.]+)/, ot = /(msie) ([\w.]+)/, et = /(mozilla)(?:.*? rv:([\w.]+))?/, ft = /-([a-z]|[0-9])/ig, ut = /^-ms-/, at = function(n, t) {
            return (t + "").toUpperCase()
        }, rt = ku.userAgent, o, e, u, tt = Object.prototype.toString, h = Object.prototype.hasOwnProperty, s = Array.prototype.push, f = Array.prototype.slice, l = String.prototype.trim, a = Array.prototype.indexOf, v = {};
        return i.fn = i.prototype = {
            constructor: i,
            init: function(n, u, f) {
                var e, s, o, h;
                if (!n)
                    return this;
                if (n.nodeType)
                    return this.context = this[0] = n,
                    this.length = 1,
                    this;
                if (n === "body" && !u && r.body)
                    return this.context = r,
                    this[0] = r.body,
                    this.selector = n,
                    this.length = 1,
                    this;
                if (typeof n == "string") {
                    if (e = n.charAt(0) !== "<" || n.charAt(n.length - 1) !== ">" || n.length < 3 ? nt.exec(n) : [null, n, null],
                    e && (e[1] || !u)) {
                        if (e[1])
                            return u = u instanceof i ? u[0] : u,
                            h = u ? u.ownerDocument || u : r,
                            o = st.exec(n),
                            o ? i.isPlainObject(u) ? (n = [r.createElement(o[1])],
                            i.fn.attr.call(n, u, !0)) : n = [h.createElement(o[1])] : (o = i.buildFragment([e[1]], [h]),
                            n = (o.cacheable ? i.clone(o.fragment) : o.fragment).childNodes),
                            i.merge(this, n);
                        if (s = r.getElementById(e[2]),
                        s && s.parentNode) {
                            if (s.id !== e[2])
                                return f.find(n);
                            this.length = 1,
                            this[0] = s
                        }
                        return this.context = r,
                        this.selector = n,
                        this
                    }
                    return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
                }
                return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector,
                this.context = n.context),
                i.makeArray(n, this))
            },
            selector: "",
            jquery: "1.7.1",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return f.call(this, 0)
            },
            get: function(n) {
                return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
            },
            pushStack: function(n, t, r) {
                var u = this.constructor();
                return i.isArray(n) ? s.apply(u, n) : i.merge(u, n),
                u.prevObject = this,
                u.context = this.context,
                t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"),
                u
            },
            each: function(n, t) {
                return i.each(this, n, t)
            },
            ready: function(n) {
                return i.bindReady(),
                e.add(n),
                this
            },
            eq: function(n) {
                return n = +n,
                n === -1 ? this.slice(n) : this.slice(n, n + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(f.apply(this, arguments), "slice", f.call(arguments).join(","))
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: s,
            sort: [].sort,
            splice: [].splice
        },
        i.fn.init.prototype = i.fn,
        i.extend = i.fn.extend = function() {
            var o, e, u, r, s, h, n = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
            for (typeof n == "boolean" && (c = n,
            n = arguments[1] || {},
            f = 2),
            typeof n != "object" && !i.isFunction(n) && (n = {}),
            l === f && (n = this,
            --f); f < l; f++)
                if ((o = arguments[f]) != null)
                    for (e in o)
                        (u = n[e],
                        r = o[e],
                        n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1,
                        h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {},
                        n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
            return n
        }
        ,
        i.extend({
            noConflict: function(t) {
                return n.$ === i && (n.$ = g),
                t && n.jQuery === i && (n.jQuery = d),
                i
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? i.readyWait++ : i.ready(!0)
            },
            ready: function(n) {
                if (n === !0 && !--i.readyWait || n !== !0 && !i.isReady) {
                    if (!r.body)
                        return setTimeout(i.ready, 1);
                    if (i.isReady = !0,
                    n !== !0 && --i.readyWait > 0)
                        return;
                    e.fireWith(r, [i]),
                    i.fn.trigger && i(r).trigger("ready").off("ready")
                }
            },
            bindReady: function() {
                if (!e) {
                    if (e = i.Callbacks("once memory"),
                    r.readyState === "complete")
                        return setTimeout(i.ready, 1);
                    if (r.addEventListener)
                        r.addEventListener("DOMContentLoaded", u, !1),
                        n.addEventListener("load", i.ready, !1);
                    else if (r.attachEvent) {
                        r.attachEvent("onreadystatechange", u),
                        n.attachEvent("onload", i.ready);
                        var t = !1;
                        try {
                            t = n.frameElement == null
                        } catch (f) {}
                        r.documentElement.doScroll && t && c()
                    }
                }
            },
            isFunction: function(n) {
                return i.type(n) === "function"
            },
            isArray: Array.isArray || function(n) {
                return i.type(n) === "array"
            }
            ,
            isWindow: function(n) {
                return n && typeof n == "object" && "setInterval"in n
            },
            isNumeric: function(n) {
                return !isNaN(parseFloat(n)) && isFinite(n)
            },
            type: function(n) {
                return n == null ? String(n) : v[tt.call(n)] || "object"
            },
            isPlainObject: function(n) {
                if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n))
                    return !1;
                try {
                    if (n.constructor && !h.call(n, "constructor") && !h.call(n.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (u) {
                    return !1
                }
                var r;
                for (r in n)
                    ;
                return r === t || h.call(n, r)
            },
            isEmptyObject: function(n) {
                for (var t in n)
                    return !1;
                return !0
            },
            error: function(n) {
                throw new Error(n);
            },
            parseJSON: function(t) {
                if (typeof t != "string" || !t)
                    return null;
                if (t = i.trim(t),
                n.JSON && n.JSON.parse)
                    return n.JSON.parse(t);
                if (it.test(t.replace(k, "@").replace(lt, "]").replace(ct, "")))
                    return new Function("return " + t)();
                i.error("Invalid JSON: " + t)
            },
            parseXML: function(r) {
                var u, f;
                try {
                    n.DOMParser ? (f = new DOMParser,
                    u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"),
                    u.async = "false",
                    u.loadXML(r))
                } catch (e) {
                    u = t
                }
                return (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + r),
                u
            },
            noop: function() {},
            globalEval: function(t) {
                t && p.test(t) && (n.execScript || function(t) {
                    n.eval.call(n, t)
                }
                )(t)
            },
            camelCase: function(n) {
                return n.replace(ut, "ms-").replace(ft, at)
            },
            nodeName: function(n, t) {
                return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
            },
            each: function(n, r, u) {
                var f, e = 0, o = n.length, s = o === t || i.isFunction(n);
                if (u) {
                    if (s) {
                        for (f in n)
                            if (r.apply(n[f], u) === !1)
                                break
                    } else
                        for (; e < o; )
                            if (r.apply(n[e++], u) === !1)
                                break
                } else if (s) {
                    for (f in n)
                        if (r.call(n[f], f, n[f]) === !1)
                            break
                } else
                    for (; e < o; )
                        if (r.call(n[e], e, n[e++]) === !1)
                            break;
                return n
            },
            trim: l ? function(n) {
                return n == null ? "" : l.call(n)
            }
            : function(n) {
                return n == null ? "" : (n + "").replace(w, "").replace(b, "")
            }
            ,
            makeArray: function(n, t) {
                var u = t || [], r;
                return n != null && (r = i.type(n),
                n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? s.call(u, n) : i.merge(u, n)),
                u
            },
            inArray: function(n, t, i) {
                var r;
                if (t) {
                    if (a)
                        return a.call(t, n, i);
                    for (r = t.length,
                    i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                        if (i in t && t[i] === n)
                            return i
                }
                return -1
            },
            merge: function(n, i) {
                var u = n.length, r = 0, f;
                if (typeof i.length == "number")
                    for (f = i.length; r < f; r++)
                        n[u++] = i[r];
                else
                    while (i[r] !== t)
                        n[u++] = i[r++];
                return n.length = u,
                n
            },
            grep: function(n, t, i) {
                var u = [], f, r, e;
                for (i = !!i,
                r = 0,
                e = n.length; r < e; r++)
                    f = !!t(n[r], r),
                    i !== f && u.push(n[r]);
                return u
            },
            map: function(n, r, u) {
                var f, h, e = [], s = 0, o = n.length, c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
                if (c)
                    for (; s < o; s++)
                        f = r(n[s], s, u),
                        f != null && (e[e.length] = f);
                else
                    for (h in n)
                        f = r(n[h], h, u),
                        f != null && (e[e.length] = f);
                return e.concat.apply([], e)
            },
            guid: 1,
            proxy: function(n, r) {
                var e, o, u;
                return (typeof r == "string" && (e = n[r],
                r = n,
                n = e),
                !i.isFunction(n)) ? t : (o = f.call(arguments, 2),
                u = function() {
                    return n.apply(r, o.concat(f.call(arguments)))
                }
                ,
                u.guid = n.guid = n.guid || u.guid || i.guid++,
                u)
            },
            access: function(n, r, u, f, e, o) {
                var c = n.length, h, s;
                if (typeof r == "object") {
                    for (h in r)
                        i.access(n, h, r[h], f, e, u);
                    return n
                }
                if (u !== t) {
                    for (f = !o && f && i.isFunction(u),
                    s = 0; s < c; s++)
                        e(n[s], r, f ? u.call(n[s], s, e(n[s], r)) : u, o);
                    return n
                }
                return c ? e(n[0], r) : t
            },
            now: function() {
                return +new Date
            },
            uaMatch: function(n) {
                n = n.toLowerCase();
                var t = ht.exec(n) || vt.exec(n) || ot.exec(n) || n.indexOf("compatible") < 0 && et.exec(n) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            },
            sub: function() {
                function n(t, i) {
                    return new n.fn.init(t,i)
                }
                i.extend(!0, n, this),
                n.superclass = this,
                n.fn = n.prototype = this(),
                n.fn.constructor = n,
                n.sub = this.sub,
                n.fn.init = function(r, u) {
                    return u && u instanceof i && !(u instanceof n) && (u = n(u)),
                    i.fn.init.call(this, r, u, t)
                }
                ,
                n.fn.init.prototype = n.fn;
                var t = n(r);
                return n
            },
            browser: {}
        }),
        i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(n, t) {
            v["[object " + t + "]"] = t.toLowerCase()
        }),
        o = i.uaMatch(rt),
        o.browser && (i.browser[o.browser] = !0,
        i.browser.version = o.version),
        i.browser.webkit && (i.browser.safari = !0),
        p.test(" ") && (w = /^[\s\xA0]+/,
        b = /[\s\xA0]+$/),
        y = i(r),
        r.addEventListener ? u = function() {
            r.removeEventListener("DOMContentLoaded", u, !1),
            i.ready()
        }
        : r.attachEvent && (u = function() {
            r.readyState === "complete" && (r.detachEvent("onreadystatechange", u),
            i.ready())
        }
        ),
        i
    }(), ir = {}, b, rr, ar, cr, y, p, vr, h, or, ut;
    i.Callbacks = function(n) {
        n = n ? ir[n] || ef(n) : {};
        var r = [], f = [], u, s, c, h, e, l = function(t) {
            for (var u, e, h, f = 0, s = t.length; f < s; f++)
                u = t[f],
                e = i.type(u),
                e === "array" ? l(u) : e === "function" && (!n.unique || !o.has(u)) && r.push(u)
        }, a = function(t, i) {
            for (i = i || [],
            u = !n.memory || [t, i],
            s = !0,
            e = c || 0,
            c = 0,
            h = r.length; r && e < h; e++)
                if (r[e].apply(t, i) === !1 && n.stopOnFalse) {
                    u = !0;
                    break
                }
            s = !1,
            r && (n.once ? u === !0 ? o.disable() : r = [] : f && f.length && (u = f.shift(),
            o.fireWith(u[0], u[1])))
        }, o = {
            add: function() {
                if (r) {
                    var n = r.length;
                    l(arguments),
                    s ? h = r.length : u && u !== !0 && (c = n,
                    a(u[0], u[1]))
                }
                return this
            },
            remove: function() {
                var t;
                if (r)
                    for (var u = arguments, i = 0, f = u.length; i < f; i++)
                        for (t = 0; t < r.length; t++)
                            if (u[i] === r[t] && (s && t <= h && (h--,
                            t <= e && e--),
                            r.splice(t--, 1),
                            n.unique))
                                break;
                return this
            },
            has: function(n) {
                if (r)
                    for (var t = 0, i = r.length; t < i; t++)
                        if (n === r[t])
                            return !0;
                return !1
            },
            empty: function() {
                return r = [],
                this
            },
            disable: function() {
                return r = f = u = t,
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return f = t,
                (!u || u === !0) && o.disable(),
                this
            },
            locked: function() {
                return !f
            },
            fireWith: function(t, i) {
                return f && (s ? n.once || f.push([t, i]) : (!n.once || !u) && a(t, i)),
                this
            },
            fire: function() {
                return o.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!u
            }
        };
        return o
    }
    ,
    b = [].slice,
    i.extend({
        Deferred: function(n) {
            var u = i.Callbacks("once memory"), f = i.Callbacks("once memory"), e = i.Callbacks("memory"), s = "pending", h = {
                resolve: u,
                reject: f,
                notify: e
            }, o = {
                done: u.add,
                fail: f.add,
                progress: e.add,
                state: function() {
                    return s
                },
                isResolved: u.fired,
                isRejected: f.fired,
                then: function(n, i, r) {
                    return t.done(n).fail(i).progress(r),
                    this
                },
                always: function() {
                    return t.done.apply(t, arguments).fail.apply(t, arguments),
                    this
                },
                pipe: function(n, r, u) {
                    return i.Deferred(function(f) {
                        i.each({
                            done: [n, "resolve"],
                            fail: [r, "reject"],
                            progress: [u, "notify"]
                        }, function(n, r) {
                            var e = r[0], o = r[1], u;
                            i.isFunction(e) ? t[n](function() {
                                u = e.apply(this, arguments),
                                u && i.isFunction(u.promise) ? u.promise().then(f.resolve, f.reject, f.notify) : f[o + "With"](this === t ? f : this, [u])
                            }) : t[n](f[o])
                        })
                    }).promise()
                },
                promise: function(n) {
                    if (n == null)
                        n = o;
                    else
                        for (var t in o)
                            n[t] = o[t];
                    return n
                }
            }, t = o.promise({}), r;
            for (r in h)
                t[r] = h[r].fire,
                t[r + "With"] = h[r].fireWith;
            return t.done(function() {
                s = "resolved"
            }, f.disable, e.lock).fail(function() {
                s = "rejected"
            }, u.disable, e.lock),
            n && n.call(t, t),
            t
        },
        when: function(n) {
            function h(n) {
                return function(i) {
                    o[n] = arguments.length > 1 ? b.call(arguments, 0) : i,
                    t.notifyWith(s, o)
                }
            }
            function c(n) {
                return function(i) {
                    r[n] = arguments.length > 1 ? b.call(arguments, 0) : i,
                    --e || t.resolveWith(t, r)
                }
            }
            var r = b.call(arguments, 0)
              , u = 0
              , f = r.length
              , o = Array(f)
              , e = f
              , l = f
              , t = f <= 1 && n && i.isFunction(n.promise) ? n : i.Deferred()
              , s = t.promise();
            if (f > 1) {
                for (; u < f; u++)
                    r[u] && r[u].promise && i.isFunction(r[u].promise) ? r[u].promise().then(c(u), t.reject, h(u)) : --e;
                e || t.resolveWith(t, r)
            } else
                t !== n && t.resolveWith(t, f ? [n] : []);
            return s
        }
    }),
    i.support = function() {
        var u, y, o, l, a, f, s, e, c, w, v, p, h, t = r.createElement("div"), b = r.documentElement;
        if (t.setAttribute("className", "t"),
        t.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        y = t.getElementsByTagName("*"),
        o = t.getElementsByTagName("a")[0],
        !y || !y.length || !o)
            return {};
        l = r.createElement("select"),
        a = l.appendChild(r.createElement("option")),
        f = t.getElementsByTagName("input")[0],
        u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(o.getAttribute("style")),
            hrefNormalized: o.getAttribute("href") === "/a",
            opacity: /^0.55/.test(o.style.opacity),
            cssFloat: !!o.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: a.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        },
        f.checked = !0,
        u.noCloneChecked = f.cloneNode(!0).checked,
        l.disabled = !0,
        u.optDisabled = !a.disabled;
        try {
            delete t.test
        } catch (k) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", function() {
            u.noCloneEvent = !1
        }),
        t.cloneNode(!0).fireEvent("onclick")),
        f = r.createElement("input"),
        f.value = "t",
        f.setAttribute("type", "radio"),
        u.radioValue = f.value === "t",
        f.setAttribute("checked", "checked"),
        t.appendChild(f),
        e = r.createDocumentFragment(),
        e.appendChild(t.lastChild),
        u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        u.appendChecked = f.checked,
        e.removeChild(f),
        e.appendChild(t),
        t.innerHTML = "",
        n.getComputedStyle && (s = r.createElement("div"),
        s.style.width = "0",
        s.style.marginRight = "0",
        t.style.width = "2px",
        t.appendChild(s),
        u.reliableMarginRight = (parseInt((n.getComputedStyle(s, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0),
        t.attachEvent)
            for (p in {
                submit: 1,
                change: 1,
                focusin: 1
            })
                v = "on" + p,
                h = v in t,
                h || (t.setAttribute(v, "return;"),
                h = typeof t[v] == "function"),
                u[p + "Bubbles"] = h;
        return e.removeChild(t),
        e = l = a = s = t = f = null,
        i(function() {
            var f, e, n, b, p, o, l, a, v, y, w, s = r.getElementsByTagName("body")[0];
            !s || (l = 1,
            a = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
            v = "visibility:hidden;border:0;",
            y = "style='" + a + "border:5px solid #000;padding:0;'",
            w = "<div " + y + "><div></div></div><table " + y + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
            f = r.createElement("div"),
            f.style.cssText = v + "width:0;height:0;position:static;top:0;margin-top:" + l + "px",
            s.insertBefore(f, s.firstChild),
            t = r.createElement("div"),
            f.appendChild(t),
            t.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",
            c = t.getElementsByTagName("td"),
            h = c[0].offsetHeight === 0,
            c[0].style.display = "",
            c[1].style.display = "none",
            u.reliableHiddenOffsets = h && c[0].offsetHeight === 0,
            t.innerHTML = "",
            t.style.width = t.style.paddingLeft = "1px",
            i.boxModel = u.boxModel = t.offsetWidth === 2,
            typeof t.style.zoom != "undefined" && (t.style.display = "inline",
            t.style.zoom = 1,
            u.inlineBlockNeedsLayout = t.offsetWidth === 2,
            t.style.display = "",
            t.innerHTML = "<div style='width:4px;'></div>",
            u.shrinkWrapBlocks = t.offsetWidth !== 2),
            t.style.cssText = a + v,
            t.innerHTML = w,
            e = t.firstChild,
            n = e.firstChild,
            p = e.nextSibling.firstChild.firstChild,
            o = {
                doesNotAddBorder: n.offsetTop !== 5,
                doesAddBorderForTableAndCells: p.offsetTop === 5
            },
            n.style.position = "fixed",
            n.style.top = "20px",
            o.fixedPosition = n.offsetTop === 20 || n.offsetTop === 15,
            n.style.position = n.style.top = "",
            e.style.overflow = "hidden",
            e.style.position = "relative",
            o.subtractsBorderForOverflowNotVisible = n.offsetTop === -5,
            o.doesNotIncludeMarginInBodyOffset = s.offsetTop !== l,
            s.removeChild(f),
            t = f = null,
            i.extend(u, o))
        }),
        u
    }(),
    rr = /^(?:\{.*\}|\[.*\])$/,
    ar = /([A-Z])/g,
    i.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando],
            !!n && !ot(n)
        },
        data: function(n, r, u, f) {
            if (!!i.acceptData(n)) {
                var a, o, h, c = i.expando, v = typeof r == "string", l = n.nodeType, s = l ? i.cache : n, e = l ? n[c] : n[c] && c, y = r === "events";
                return (!e || !s[e] || !y && !f && !s[e].data) && v && u === t ? void 0 : (e || (l ? n[c] = e = ++i.uuid : e = c),
                s[e] || (s[e] = {},
                l || (s[e].toJSON = i.noop)),
                (typeof r == "object" || typeof r == "function") && (f ? s[e] = i.extend(s[e], r) : s[e].data = i.extend(s[e].data, r)),
                a = o = s[e],
                f || (o.data || (o.data = {}),
                o = o.data),
                u !== t && (o[i.camelCase(r)] = u),
                y && !o[r]) ? a.events : (v ? (h = o[r],
                h == null && (h = o[i.camelCase(r)])) : h = o,
                h)
            }
        },
        removeData: function(n, t, r) {
            if (!!i.acceptData(n)) {
                var e, s, c, o = i.expando, h = n.nodeType, u = h ? i.cache : n, f = h ? n[o] : o;
                if (!u[f])
                    return;
                if (t && (e = r ? u[f] : u[f].data,
                e)) {
                    for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t),
                    t = t in e ? [t] : t.split(" "))),
                    s = 0,
                    c = t.length; s < c; s++)
                        delete e[t[s]];
                    if (!(r ? ot : i.isEmptyObject)(e))
                        return
                }
                if (!r && (delete u[f].data,
                !ot(u[f])))
                    return;
                i.support.deleteExpando || !u.setInterval ? delete u[f] : u[f] = null,
                h && (i.support.deleteExpando ? delete n[o] : n.removeAttribute ? n.removeAttribute(o) : n[o] = null)
            }
        },
        _data: function(n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function(n) {
            if (n.nodeName) {
                var t = i.noData[n.nodeName.toLowerCase()];
                if (t)
                    return t !== !0 && n.getAttribute("classid") === t
            }
            return !0
        }
    }),
    i.fn.extend({
        data: function(n, r) {
            var u, s, e, f = null, o, h;
            if (typeof n == "undefined") {
                if (this.length && (f = i.data(this[0]),
                this[0].nodeType === 1 && !i._data(this[0], "parsedAttrs"))) {
                    for (s = this[0].attributes,
                    o = 0,
                    h = s.length; o < h; o++)
                        e = s[o].name,
                        e.indexOf("data-") === 0 && (e = i.camelCase(e.substring(5)),
                        ki(this[0], e, f[e]));
                    i._data(this[0], "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function() {
                i.data(this, n)
            }) : (u = n.split("."),
            u[1] = u[1] ? "." + u[1] : "",
            r === t) ? (f = this.triggerHandler("getData" + u[1] + "!", [u[0]]),
            f === t && this.length && (f = i.data(this[0], n),
            f = ki(this[0], n, f)),
            f === t && u[1] ? this.data(u[0]) : f) : this.each(function() {
                var t = i(this)
                  , f = [u[0], r];
                t.triggerHandler("setData" + u[1] + "!", f),
                i.data(this, n, r),
                t.triggerHandler("changeData" + u[1] + "!", f)
            })
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    }),
    i.extend({
        _mark: function(n, t) {
            n && (t = (t || "fx") + "mark",
            i._data(n, t, (i._data(n, t) || 0) + 1))
        },
        _unmark: function(n, t, r) {
            if (n !== !0 && (r = t,
            t = n,
            n = !1),
            t) {
                r = r || "fx";
                var u = r + "mark"
                  , f = n ? 0 : (i._data(t, u) || 1) - 1;
                f ? i._data(t, u, f) : (i.removeData(t, u, !0),
                bi(t, r, "mark"))
            }
        },
        queue: function(n, t, r) {
            var u;
            if (n)
                return t = (t || "fx") + "queue",
                u = i._data(n, t),
                r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)),
                u || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , u = r.shift()
              , f = {};
            u === "inprogress" && (u = r.shift()),
            u && (t === "fx" && r.unshift("inprogress"),
            i._data(n, t + ".run", f),
            u.call(n, function() {
                i.dequeue(n, t)
            }, f)),
            r.length || (i.removeData(n, t + "queue " + t + ".run", !0),
            bi(n, t, "queue"))
        }
    }),
    i.fn.extend({
        queue: function(n, r) {
            return (typeof n != "string" && (r = n,
            n = "fx"),
            r === t) ? i.queue(this[0], n) : this.each(function() {
                var t = i.queue(this, n, r);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n,
            t = t || "fx",
            this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, r) {
            function e() {
                --s || o.resolveWith(u, [u])
            }
            typeof n != "string" && (r = n,
            n = t),
            n = n || "fx";
            for (var o = i.Deferred(), u = this, f = u.length, s = 1, h = n + "defer", l = n + "queue", a = n + "mark", c; f--; )
                (c = i.data(u[f], h, t, !0) || (i.data(u[f], l, t, !0) || i.data(u[f], a, t, !0)) && i.data(u[f], h, i.Callbacks("once memory"), !0)) && (s++,
                c.add(e));
            return e(),
            o.promise()
        }
    });
    var pr = /[\n\t\r]/g, w = /\s+/, pu = /\r/g, yu = /^(?:button|input)$/i, vu = /^(?:button|input|object|select|textarea)$/i, au = /^a(?:rea)?$/i, hr = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, sr = i.support.getSetAttribute, e, er, ai;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, n, t, !0, i.attr)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, n, t, !0, i.prop)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n,
            this.each(function() {
                try {
                    this[n] = t,
                    delete this[n]
                } catch (i) {}
            })
        },
        addClass: function(n) {
            var r, f, o, t, e, u, s;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
            if (n && typeof n == "string")
                for (r = n.split(w),
                f = 0,
                o = this.length; f < o; f++)
                    if (t = this[f],
                    t.nodeType === 1)
                        if (t.className || r.length !== 1) {
                            for (e = " " + t.className + " ",
                            u = 0,
                            s = r.length; u < s; u++)
                                ~e.indexOf(" " + r[u] + " ") || (e += r[u] + " ");
                            t.className = i.trim(e)
                        } else
                            t.className = n;
            return this
        },
        removeClass: function(n) {
            var o, u, s, r, f, e, h;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
            if (n && typeof n == "string" || n === t)
                for (o = (n || "").split(w),
                u = 0,
                s = this.length; u < s; u++)
                    if (r = this[u],
                    r.nodeType === 1 && r.className)
                        if (n) {
                            for (f = (" " + r.className + " ").replace(pr, " "),
                            e = 0,
                            h = o.length; e < h; e++)
                                f = f.replace(" " + o[e] + " ", " ");
                            r.className = i.trim(f)
                        } else
                            r.className = "";
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n
              , u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if (r === "string")
                    for (var f, s = 0, o = i(this), e = t, h = n.split(w); f = h[s++]; )
                        e = u ? e : !o.hasClass(f),
                        o[e ? "addClass" : "removeClass"](f);
                else
                    (r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className),
                    this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(pr, " ").indexOf(i) > -1)
                    return !0;
            return !1
        },
        val: function(n) {
            var r, u, e, f = this[0];
            return !arguments.length ? f ? (r = i.valHooks[f.nodeName.toLowerCase()] || i.valHooks[f.type],
            r && "get"in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value,
            typeof u == "string" ? u.replace(pu, "") : u == null ? "" : u) : void 0 : (e = i.isFunction(n),
            this.each(function(u) {
                var o = i(this), f;
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n,
                f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                    return n == null ? "" : n + ""
                })),
                r = i.valHooks[this.nodeName.toLowerCase()] || i.valHooks[this.type],
                r && "set"in r && r.set(this, f, "value") !== t || (this.value = f))
            }))
        }
    }),
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function(n) {
                    var o, r, h, t, u = n.selectedIndex, s = [], f = n.options, e = n.type === "select-one";
                    if (u < 0)
                        return null;
                    for (r = e ? u : 0,
                    h = e ? u + 1 : f.length; r < h; r++)
                        if (t = f[r],
                        t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(),
                            e)
                                return o;
                            s.push(o)
                        }
                    return e && !s.length && f.length ? i(f[u]).val() : s
                },
                set: function(n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function() {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }),
                    r.length || (n.selectedIndex = -1),
                    r
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(n, r, u, f) {
            var o, s, h, c = n.nodeType;
            if (!!n && c !== 3 && c !== 8 && c !== 2) {
                if (f && r in i.attrFn)
                    return i(n)[r](u);
                if (typeof n.getAttribute == "undefined")
                    return i.prop(n, r, u);
                if (h = c !== 1 || !i.isXMLDoc(n),
                h && (r = r.toLowerCase(),
                s = i.attrHooks[r] || (hr.test(r) ? er : e)),
                u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return s && "set"in s && h && (o = s.set(n, u, r)) !== t ? o : (n.setAttribute(r, "" + u),
                    u)
                }
                return s && "get"in s && h && (o = s.get(n, r)) !== null ? o : (o = n.getAttribute(r),
                o === null ? t : o)
            }
        },
        removeAttr: function(n, t) {
            var u, f, r, o, e = 0;
            if (t && n.nodeType === 1)
                for (f = t.toLowerCase().split(w),
                o = f.length; e < o; e++)
                    r = f[e],
                    r && (u = i.propFix[r] || r,
                    i.attr(n, r, ""),
                    n.removeAttribute(sr ? r : u),
                    hr.test(r) && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (yu.test(n.nodeName) && n.parentNode)
                        i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t),
                        r && (n.value = r),
                        t
                    }
                }
            },
            value: {
                get: function(n, t) {
                    return e && i.nodeName(n, "button") ? e.get(n, t) : t in n ? n.value : null
                },
                set: function(n, t, r) {
                    if (e && i.nodeName(n, "button"))
                        return e.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (!!n && o !== 3 && o !== 8 && o !== 2)
                return s = o !== 1 || !i.isXMLDoc(n),
                s && (r = i.propFix[r] || r,
                f = i.propHooks[r]),
                u !== t ? f && "set"in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get"in f && (e = f.get(n, r)) !== null ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : vu.test(n.nodeName) || au.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    }),
    i.attrHooks.tabindex = i.propHooks.tabIndex,
    er = {
        get: function(n, r) {
            var u, f = i.prop(n, r);
            return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function(n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r,
            u in n && (n[u] = !0),
            n.setAttribute(r, r.toLowerCase())),
            r
        }
    },
    sr || (ai = {
        name: !0,
        id: !0
    },
    e = i.valHooks.button = {
        get: function(n, i) {
            var r;
            return r = n.getAttributeNode(i),
            r && (ai[i] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
        },
        set: function(n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i),
            n.setAttributeNode(u)),
            u.nodeValue = t + ""
        }
    },
    i.attrHooks.tabindex.set = e.set,
    i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function(n, i) {
                if (i === "")
                    return n.setAttribute(t, "auto"),
                    i
            }
        })
    }),
    i.attrHooks.contenteditable = {
        get: e.get,
        set: function(n, t, i) {
            t === "" && (t = "false"),
            e.set(n, t, i)
        }
    }),
    i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function(n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function(n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    }),
    i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function(n, t) {
            return n.style.cssText = "" + t
        }
    }),
    i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    i.support.enctype || (i.propFix.enctype = "encoding"),
    i.support.checkOn || i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            get: function(n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    }),
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function(n, t) {
                if (i.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var it = /^(?:textarea|input|select)$/i
      , ci = /^([^\.]*)?(?:\.(.+))?$/
      , lu = /\bhover(\.\S+)?\b/
      , cu = /^key/
      , bu = /^(?:mouse|contextmenu)|click/
      , vt = /^(?:focusinfocus|focusoutblur)$/
      , of = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/
      , sf = function(n) {
        var t = of.exec(n);
        return t && (t[1] = (t[1] || "").toLowerCase(),
        t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")),
        t
    }
      , hf = function(n, t) {
        var i = n.attributes || {};
        return (!t[1] || n.nodeName.toLowerCase() === t[1]) && (!t[2] || (i.id || {}).value === t[2]) && (!t[3] || t[3].test((i["class"] || {}).value))
    }
      , wt = function(n) {
        return i.event.special.hover ? n : n.replace(lu, "mouseenter$1 mouseleave$1")
    };
    i.event = {
        add: function(n, r, u, f, e) {
            var v, h, a, p, y, o, w, l, b, k, c, s;
            if (!(n.nodeType === 3 || n.nodeType === 8 || !r || !u || !(v = i._data(n)))) {
                for (u.handler && (b = u,
                u = b.handler),
                u.guid || (u.guid = i.guid++),
                a = v.events,
                a || (v.events = a = {}),
                h = v.handle,
                h || (v.handle = h = function(n) {
                    return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(h.elem, arguments) : t
                }
                ,
                h.elem = n),
                r = i.trim(wt(r)).split(" "),
                p = 0; p < r.length; p++)
                    y = ci.exec(r[p]) || [],
                    o = y[1],
                    w = (y[2] || "").split(".").sort(),
                    s = i.event.special[o] || {},
                    o = (e ? s.delegateType : s.bindType) || o,
                    s = i.event.special[o] || {},
                    l = i.extend({
                        type: o,
                        origType: y[1],
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        quick: sf(e),
                        namespace: w.join(".")
                    }, b),
                    c = a[o],
                    c || (c = a[o] = [],
                    c.delegateCount = 0,
                    s.setup && s.setup.call(n, f, w, h) !== !1 || (n.addEventListener ? n.addEventListener(o, h, !1) : n.attachEvent && n.attachEvent("on" + o, h))),
                    s.add && (s.add.call(n, l),
                    l.handler.guid || (l.handler.guid = u.guid)),
                    e ? c.splice(c.delegateCount++, 0, l) : c.push(l),
                    i.event.global[o] = !0;
                n = null
            }
        },
        global: {},
        remove: function(n, t, r, u, f) {
            var y = i.hasData(n) && i._data(n), l, p, e, b, h, k, a, v, c, w, o, s;
            if (!!y && !!(v = y.events)) {
                for (t = i.trim(wt(t || "")).split(" "),
                l = 0; l < t.length; l++) {
                    if (p = ci.exec(t[l]) || [],
                    e = b = p[1],
                    h = p[2],
                    !e) {
                        for (e in v)
                            i.event.remove(n, e + t[l], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {},
                    e = (u ? c.delegateType : c.bindType) || e,
                    o = v[e] || [],
                    k = o.length,
                    h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                    a = 0; a < o.length; a++)
                        s = o[a],
                        (f || b === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1),
                        s.selector && o.delegateCount--,
                        c.remove && c.remove.call(n, s));
                    o.length === 0 && k !== o.length && ((!c.teardown || c.teardown.call(n, h) === !1) && i.removeEvent(n, e, y.handle),
                    delete v[e])
                }
                i.isEmptyObject(v) && (w = y.handle,
                w && (w.elem = null),
                i.removeData(n, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(r, u, f, e) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var o = r.type || r, p = [], w, k, c, s, h, a, l, v, y, b;
                if (vt.test(o + i.event.triggered))
                    return;
                if (o.indexOf("!") >= 0 && (o = o.slice(0, -1),
                k = !0),
                o.indexOf(".") >= 0 && (p = o.split("."),
                o = p.shift(),
                p.sort()),
                (!f || i.event.customEvent[o]) && !i.event.global[o])
                    return;
                if (r = typeof r == "object" ? r[i.expando] ? r : new i.Event(o,r) : new i.Event(o),
                r.type = o,
                r.isTrigger = !0,
                r.exclusive = k,
                r.namespace = p.join("."),
                r.namespace_re = r.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                a = o.indexOf(":") < 0 ? "on" + o : "",
                !f) {
                    w = i.cache;
                    for (c in w)
                        w[c].events && w[c].events[o] && i.event.trigger(r, u, w[c].handle.elem, !0);
                    return
                }
                if (r.result = t,
                r.target || (r.target = f),
                u = u != null ? i.makeArray(u) : [],
                u.unshift(r),
                l = i.event.special[o] || {},
                l.trigger && l.trigger.apply(f, u) === !1)
                    return;
                if (y = [[f, l.bindType || o]],
                !e && !l.noBubble && !i.isWindow(f)) {
                    for (b = l.delegateType || o,
                    s = vt.test(b + o) ? f : f.parentNode,
                    h = null; s; s = s.parentNode)
                        y.push([s, b]),
                        h = s;
                    h && h === f.ownerDocument && y.push([h.defaultView || h.parentWindow || n, b])
                }
                for (c = 0; c < y.length && !r.isPropagationStopped(); c++)
                    s = y[c][0],
                    r.type = y[c][1],
                    v = (i._data(s, "events") || {})[r.type] && i._data(s, "handle"),
                    v && v.apply(s, u),
                    v = a && s[a],
                    v && i.acceptData(s) && v.apply(s, u) === !1 && r.preventDefault();
                return r.type = o,
                !e && !r.isDefaultPrevented() && (!l._default || l._default.apply(f.ownerDocument, u) === !1) && (o !== "click" || !i.nodeName(f, "a")) && i.acceptData(f) && a && f[o] && (o !== "focus" && o !== "blur" || r.target.offsetWidth !== 0) && !i.isWindow(f) && (h = f[a],
                h && (f[a] = null),
                i.event.triggered = o,
                f[o](),
                i.event.triggered = t,
                h && (f[a] = h)),
                r.result
            }
        },
        dispatch: function(r) {
            r = i.event.fix(r || n.event);
            var w = (i._data(this, "events") || {})[r.type] || [], c = w.delegateCount, b = [].slice.call(arguments, 0), k = !r.exclusive && !r.namespace, h = [], f, l, e, a, v, y, s, p, u, o, d;
            if (b[0] = r,
            r.delegateTarget = this,
            c && !r.target.disabled && (!r.button || r.type !== "click"))
                for (a = i(this),
                a.context = this.ownerDocument || this,
                e = r.target; e != this; e = e.parentNode || this) {
                    for (y = {},
                    p = [],
                    a[0] = e,
                    f = 0; f < c; f++)
                        u = w[f],
                        o = u.selector,
                        y[o] === t && (y[o] = u.quick ? hf(e, u.quick) : a.is(o)),
                        y[o] && p.push(u);
                    p.length && h.push({
                        elem: e,
                        matches: p
                    })
                }
            for (w.length > c && h.push({
                elem: this,
                matches: w.slice(c)
            }),
            f = 0; f < h.length && !r.isPropagationStopped(); f++)
                for (s = h[f],
                r.currentTarget = s.elem,
                l = 0; l < s.matches.length && !r.isImmediatePropagationStopped(); l++)
                    u = s.matches[l],
                    (k || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data,
                    r.handleObj = u,
                    v = ((i.event.special[u.origType] || {}).handle || u.handler).apply(s.elem, b),
                    v !== t && (r.result = v,
                    v === !1 && (r.preventDefault(),
                    r.stopPropagation())));
            return r.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode),
                n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, i) {
                var o, u, f, e = i.button, s = i.fromElement;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r,
                u = o.documentElement,
                f = o.body,
                n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0),
                n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)),
                !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s),
                !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0),
                n
            }
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var e, o, u = n, f = i.event.fixHooks[n.type] || {}, s = f.props ? this.props.concat(f.props) : this.props;
            for (n = i.Event(u),
            e = s.length; e; )
                o = s[--e],
                n[o] = u[o];
            return n.target || (n.target = u.srcElement || r),
            n.target.nodeType === 3 && (n.target = n.target.parentNode),
            n.metaKey === t && (n.metaKey = n.ctrlKey),
            f.filter ? f.filter(n, u) : n
        },
        special: {
            ready: {
                setup: i.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r)
                },
                teardown: function(n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f),
            f.isDefaultPrevented() && r.preventDefault()
        }
    },
    i.event.handle = i.event.dispatch,
    i.removeEvent = r.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    }
    : function(n, t, i) {
        n.detachEvent && n.detachEvent("on" + t, i)
    }
    ,
    i.Event = function(n, t) {
        if (!(this instanceof i.Event))
            return new i.Event(n,t);
        n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? g : c) : this.type = n,
        t && i.extend(this, t),
        this.timeStamp = n && n.timeStamp || i.now(),
        this[i.expando] = !0
    }
    ,
    i.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = g;
            var n = this.originalEvent;
            !n || (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = g;
            var n = this.originalEvent;
            !n || (n.stopPropagation && n.stopPropagation(),
            n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g,
            this.stopPropagation()
        },
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c
    },
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var f = this, r = n.relatedTarget, u = n.handleObj, o = u.selector, e;
                return r && (r === f || i.contains(f, r)) || (n.type = u.origType,
                e = u.handler.apply(this, arguments),
                n.type = t),
                e
            }
        }
    }),
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.add(this, "click._submit keypress._submit", function(n) {
                var u = n.target
                  , r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !r._submit_attached && (i.event.add(r, "submit._submit", function(n) {
                    this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0)
                }),
                r._submit_attached = !0)
            })
        },
        teardown: function() {
            if (i.nodeName(this, "form"))
                return !1;
            i.event.remove(this, "._submit")
        }
    }),
    i.support.changeBubbles || (i.event.special.change = {
        setup: function() {
            if (it.test(this.nodeName))
                return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
                    n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                i.event.add(this, "click._change", function(n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1,
                    i.event.simulate("change", this, n, !0))
                })),
                !1;
            i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                it.test(t.nodeName) && !t._change_attached && (i.event.add(t, "change._change", function(n) {
                    this.parentNode && !n.isSimulated && !n.isTrigger && i.event.simulate("change", this.parentNode, n, !0)
                }),
                t._change_attached = !0)
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox")
                return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"),
            it.test(this.nodeName)
        }
    }),
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = 0
          , f = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                u++ == 0 && r.addEventListener(n, f, !0)
            },
            teardown: function() {
                --u == 0 && r.removeEventListener(n, f, !0)
            }
        }
    }),
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = r,
                r = t);
                for (s in n)
                    this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r,
            u = r = t) : f == null && (typeof r == "string" ? (f = u,
            u = t) : (f = u,
            u = r,
            r = t)),
            f === !1)
                f = c;
            else if (!f)
                return this;
            return e === 1 && (o = f,
            f = function(n) {
                return i().off(n),
                o.apply(this, arguments)
            }
            ,
            f.guid = o.guid || (o.guid = i.guid++)),
            this.each(function() {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function(n, t, i, r) {
            return this.on.call(this, n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj)
                return f = n.handleObj,
                i(n.delegateTarget).off(f.namespace ? f.type + "." + f.namespace : f.type, f.selector, f.handler),
                this;
            if (typeof n == "object") {
                for (e in n)
                    this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u = r,
            r = t),
            u === !1 && (u = c),
            this.each(function() {
                i.event.remove(this, n, u, r)
            })
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        live: function(n, t, r) {
            i(this.context).on(n, this.selector, t, r);
            return this
        },
        die: function(n, t) {
            return i(this.context).off(n, this.selector || "**", t),
            this
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length == 1 ? this.off(n, "**") : this.off(t, n, i)
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            if (this[0])
                return i.event.trigger(n, t, this[0], !0)
        },
        toggle: function(n) {
            var t = arguments
              , u = n.guid || i.guid++
              , r = 0
              , f = function(u) {
                var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
                return i._data(this, "lastToggle" + n.guid, f + 1),
                u.preventDefault(),
                t[f].apply(this, arguments) || !1
            };
            for (f.guid = u; r < t.length; )
                t[r++].guid = u;
            return this.click(f)
        },
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }),
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return i == null && (i = n,
            n = null),
            arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
        ,
        i.attrFn && (i.attrFn[t] = !0),
        cu.test(t) && (i.event.fixHooks[t] = i.event.keyHooks),
        bu.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
    }),
    function() {
        function b(t, i, r, u, f, o) {
            for (var s, c, h = 0, l = u.length; h < l; h++)
                if (s = u[h],
                s) {
                    for (c = !1,
                    s = s[t]; s; ) {
                        if (s[e] === r) {
                            c = u[s.sizset];
                            break
                        }
                        if (s.nodeType === 1)
                            if (o || (s[e] = r,
                            s.sizset = h),
                            typeof i != "string") {
                                if (s === i) {
                                    c = !0;
                                    break
                                }
                            } else if (n.filter(i, [s]).length > 0) {
                                c = s;
                                break
                            }
                        s = s[t]
                    }
                    u[h] = c
                }
        }
        function g(n, t, i, r, u, f) {
            for (var o, h, s = 0, c = r.length; s < c; s++)
                if (o = r[s],
                o) {
                    for (h = !1,
                    o = o[n]; o; ) {
                        if (o[e] === i) {
                            h = r[o.sizset];
                            break
                        }
                        if (o.nodeType === 1 && !f && (o[e] = i,
                        o.sizset = s),
                        o.nodeName.toLowerCase() === t) {
                            h = o;
                            break
                        }
                        o = o[n]
                    }
                    r[s] = h
                }
        }
        var v = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, e = "sizcache" + (Math.random() + "").replace(".", ""), y = 0, d = Object.prototype.toString, a = !1, k = !0, o = /\\/g, tt = /\r\n/g, c = /\W/, n, h, f, l, s, p;
        [0, 0].sort(function() {
            return k = !1,
            0
        }),
        n = function(t, i, e, o) {
            var nt;
            if (e = e || [],
            i = i || r,
            nt = i,
            i.nodeType !== 1 && i.nodeType !== 9)
                return [];
            if (!t || typeof t != "string")
                return e;
            var y, a, h, g, l, w, b, c, tt = !0, k = n.isXML(i), s = [], rt = t;
            do
                if (v.exec(""),
                y = v.exec(rt),
                y && (rt = y[3],
                s.push(y[1]),
                y[2])) {
                    g = y[3];
                    break
                }
            while (y);
            if (s.length > 1 && it.exec(t))
                if (s.length === 2 && u.relative[s[0]])
                    a = p(s[0] + s[1], i, o);
                else
                    for (a = u.relative[s[0]] ? [i] : n(s.shift(), i); s.length; )
                        t = s.shift(),
                        u.relative[t] && (t += s.shift()),
                        a = p(t, a, o);
            else if (!o && s.length > 1 && i.nodeType === 9 && !k && u.match.ID.test(s[0]) && !u.match.ID.test(s[s.length - 1]) && (l = n.find(s.shift(), i, k),
            i = l.expr ? n.filter(l.expr, l.set)[0] : l.set[0]),
            i)
                for (l = o ? {
                    expr: s.pop(),
                    set: f(o)
                } : n.find(s.pop(), s.length === 1 && (s[0] === "~" || s[0] === "+") && i.parentNode ? i.parentNode : i, k),
                a = l.expr ? n.filter(l.expr, l.set) : l.set,
                s.length > 0 ? h = f(a) : tt = !1; s.length; )
                    w = s.pop(),
                    b = w,
                    u.relative[w] ? b = s.pop() : w = "",
                    b == null && (b = i),
                    u.relative[w](h, b, k);
            else
                h = s = [];
            if (h || (h = a),
            h || n.error(w || t),
            d.call(h) === "[object Array]")
                if (tt)
                    if (i && i.nodeType === 1)
                        for (c = 0; h[c] != null; c++)
                            h[c] && (h[c] === !0 || h[c].nodeType === 1 && n.contains(i, h[c])) && e.push(a[c]);
                    else
                        for (c = 0; h[c] != null; c++)
                            h[c] && h[c].nodeType === 1 && e.push(a[c]);
                else
                    e.push.apply(e, h);
            else
                f(h, e);
            return g && (n(g, nt, e, o),
            n.uniqueSort(e)),
            e
        }
        ,
        n.uniqueSort = function(n) {
            if (l && (a = k,
            n.sort(l),
            a))
                for (var t = 1; t < n.length; t++)
                    n[t] === n[t - 1] && n.splice(t--, 1);
            return n
        }
        ,
        n.matches = function(t, i) {
            return n(t, null, null, i)
        }
        ,
        n.matchesSelector = function(t, i) {
            return n(i, null, null, [t]).length > 0
        }
        ,
        n.find = function(n, t, i) {
            var f, e, c, r, s, h;
            if (!n)
                return [];
            for (e = 0,
            c = u.order.length; e < c; e++)
                if (s = u.order[e],
                (r = u.leftMatch[s].exec(n)) && (h = r[1],
                r.splice(1, 1),
                h.substr(h.length - 1) !== "\\" && (r[1] = (r[1] || "").replace(o, ""),
                f = u.find[s](r, t, i),
                f != null))) {
                    n = n.replace(u.match[s], "");
                    break
                }
            return f || (f = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []),
            {
                set: f,
                expr: n
            }
        }
        ,
        n.filter = function(i, r, f, e) {
            for (var o, h, c, l, y, k, w, v, p, b = i, a = [], s = r, d = r && r[0] && n.isXML(r[0]); i && r.length; ) {
                for (c in u.filter)
                    if ((o = u.leftMatch[c].exec(i)) != null && o[2]) {
                        if (k = u.filter[c],
                        w = o[1],
                        h = !1,
                        o.splice(1, 1),
                        w.substr(w.length - 1) === "\\")
                            continue;
                        if (s === a && (a = []),
                        u.preFilter[c])
                            if (o = u.preFilter[c](o, s, f, a, e, d),
                            o) {
                                if (o === !0)
                                    continue
                            } else
                                h = l = !0;
                        if (o)
                            for (v = 0; (y = s[v]) != null; v++)
                                y && (l = k(y, o, v, s),
                                p = e ^ l,
                                f && l != null ? p ? h = !0 : s[v] = !1 : p && (a.push(y),
                                h = !0));
                        if (l !== t) {
                            if (f || (s = a),
                            i = i.replace(u.match[c], ""),
                            !h)
                                return [];
                            break
                        }
                    }
                if (i === b)
                    if (h == null)
                        n.error(i);
                    else
                        break;
                b = i
            }
            return s
        }
        ,
        n.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        var w = n.getText = function(n) {
            var i, r, t = n.nodeType, u = "";
            if (t) {
                if (t === 1 || t === 9) {
                    if (typeof n.textContent == "string")
                        return n.textContent;
                    if (typeof n.innerText == "string")
                        return n.innerText.replace(tt, "");
                    for (n = n.firstChild; n; n = n.nextSibling)
                        u += w(n)
                } else if (t === 3 || t === 4)
                    return n.nodeValue
            } else
                for (i = 0; r = n[i]; i++)
                    r.nodeType !== 8 && (u += w(r));
            return u
        }
          , u = n.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(n) {
                    return n.getAttribute("href")
                },
                type: function(n) {
                    return n.getAttribute("type")
                }
            },
            relative: {
                "+": function(t, i) {
                    var f = typeof i == "string", e = f && !c.test(i), o = f && !e, u, s, r;
                    for (e && (i = i.toLowerCase()),
                    u = 0,
                    s = t.length; u < s; u++)
                        if (r = t[u]) {
                            while ((r = r.previousSibling) && r.nodeType !== 1)
                                ;
                            t[u] = o || r && r.nodeName.toLowerCase() === i ? r || !1 : r === i
                        }
                    o && n.filter(i, t, !0)
                },
                ">": function(t, i) {
                    var u, f = typeof i == "string", r = 0, o = t.length, e;
                    if (f && !c.test(i))
                        for (i = i.toLowerCase(); r < o; r++)
                            u = t[r],
                            u && (e = u.parentNode,
                            t[r] = e.nodeName.toLowerCase() === i ? e : !1);
                    else {
                        for (; r < o; r++)
                            u = t[r],
                            u && (t[r] = f ? u.parentNode : u.parentNode === i);
                        f && n.filter(i, t, !0)
                    }
                },
                "": function(n, t, i) {
                    var r, f = y++, u = b;
                    typeof t == "string" && !c.test(t) && (t = t.toLowerCase(),
                    r = t,
                    u = g),
                    u("parentNode", t, f, n, r, i)
                },
                "~": function(n, t, i) {
                    var r, f = y++, u = b;
                    typeof t == "string" && !c.test(t) && (t = t.toLowerCase(),
                    r = t,
                    u = g),
                    u("previousSibling", t, f, n, r, i)
                }
            },
            find: {
                ID: function(n, t, i) {
                    if (typeof t.getElementById != "undefined" && !i) {
                        var r = t.getElementById(n[1]);
                        return r && r.parentNode ? [r] : []
                    }
                },
                NAME: function(n, t) {
                    var r, u, i, f;
                    if (typeof t.getElementsByName != "undefined") {
                        for (r = [],
                        u = t.getElementsByName(n[1]),
                        i = 0,
                        f = u.length; i < f; i++)
                            u[i].getAttribute("name") === n[1] && r.push(u[i]);
                        return r.length === 0 ? null : r
                    }
                },
                TAG: function(n, t) {
                    if (typeof t.getElementsByTagName != "undefined")
                        return t.getElementsByTagName(n[1])
                }
            },
            preFilter: {
                CLASS: function(n, t, i, r, u, f) {
                    if (n = " " + n[1].replace(o, "") + " ",
                    f)
                        return n;
                    for (var s = 0, e; (e = t[s]) != null; s++)
                        e && (u ^ (e.className && (" " + e.className + " ").replace(/[\t\n\r]/g, " ").indexOf(n) >= 0) ? i || r.push(e) : i && (t[s] = !1));
                    return !1
                },
                ID: function(n) {
                    return n[1].replace(o, "")
                },
                TAG: function(n) {
                    return n[1].replace(o, "").toLowerCase()
                },
                CHILD: function(t) {
                    if (t[1] === "nth") {
                        t[2] || n.error(t[0]),
                        t[2] = t[2].replace(/^\+|\s*/g, "");
                        var i = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(t[2] === "even" && "2n" || t[2] === "odd" && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
                        t[2] = i[1] + (i[2] || 1) - 0,
                        t[3] = i[3] - 0
                    } else
                        t[2] && n.error(t[0]);
                    return t[0] = y++,
                    t
                },
                ATTR: function(n, t, i, r, f, e) {
                    var s = n[1] = n[1].replace(o, "");
                    return !e && u.attrMap[s] && (n[1] = u.attrMap[s]),
                    n[4] = (n[4] || n[5] || "").replace(o, ""),
                    n[2] === "~=" && (n[4] = " " + n[4] + " "),
                    n
                },
                PSEUDO: function(t, i, r, f, e) {
                    if (t[1] === "not")
                        if ((v.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))
                            t[3] = n(t[3], null, null, i);
                        else {
                            var o = n.filter(t[3], i, r, !0 ^ e);
                            return r || f.push.apply(f, o),
                            !1
                        }
                    else if (u.match.POS.test(t[0]) || u.match.CHILD.test(t[0]))
                        return !0;
                    return t
                },
                POS: function(n) {
                    return n.unshift(!0),
                    n
                }
            },
            filters: {
                enabled: function(n) {
                    return n.disabled === !1 && n.type !== "hidden"
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    return n.checked === !0
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    n.selected === !0
                },
                parent: function(n) {
                    return !!n.firstChild
                },
                empty: function(n) {
                    return !n.firstChild
                },
                has: function(t, i, r) {
                    return !!n(r[3], t).length
                },
                header: function(n) {
                    return /h\d/i.test(n.nodeName)
                },
                text: function(n) {
                    var t = n.getAttribute("type")
                      , i = n.type;
                    return n.nodeName.toLowerCase() === "input" && "text" === i && (t === i || t === null)
                },
                radio: function(n) {
                    return n.nodeName.toLowerCase() === "input" && "radio" === n.type
                },
                checkbox: function(n) {
                    return n.nodeName.toLowerCase() === "input" && "checkbox" === n.type
                },
                file: function(n) {
                    return n.nodeName.toLowerCase() === "input" && "file" === n.type
                },
                password: function(n) {
                    return n.nodeName.toLowerCase() === "input" && "password" === n.type
                },
                submit: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "submit" === n.type
                },
                image: function(n) {
                    return n.nodeName.toLowerCase() === "input" && "image" === n.type
                },
                reset: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "reset" === n.type
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && "button" === n.type || t === "button"
                },
                input: function(n) {
                    return /input|select|textarea|button/i.test(n.nodeName)
                },
                focus: function(n) {
                    return n === n.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(n, t) {
                    return t === 0
                },
                last: function(n, t, i, r) {
                    return t === r.length - 1
                },
                even: function(n, t) {
                    return t % 2 == 0
                },
                odd: function(n, t) {
                    return t % 2 == 1
                },
                lt: function(n, t, i) {
                    return t < i[3] - 0
                },
                gt: function(n, t, i) {
                    return t > i[3] - 0
                },
                nth: function(n, t, i) {
                    return i[3] - 0 === t
                },
                eq: function(n, t, i) {
                    return i[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function(t, i, r, f) {
                    var e = i[1], h = u.filters[e], s, o, c;
                    if (h)
                        return h(t, r, i, f);
                    if (e === "contains")
                        return (t.textContent || t.innerText || w([t]) || "").indexOf(i[3]) >= 0;
                    if (e === "not") {
                        for (s = i[3],
                        o = 0,
                        c = s.length; o < c; o++)
                            if (s[o] === t)
                                return !1;
                        return !0
                    }
                    n.error(e)
                },
                CHILD: function(n, t) {
                    var r, o, s, u, l, h, f, c = t[1], i = n;
                    switch (c) {
                    case "only":
                    case "first":
                        while (i = i.previousSibling)
                            if (i.nodeType === 1)
                                return !1;
                        if (c === "first")
                            return !0;
                        i = n;
                    case "last":
                        while (i = i.nextSibling)
                            if (i.nodeType === 1)
                                return !1;
                        return !0;
                    case "nth":
                        if (r = t[2],
                        o = t[3],
                        r === 1 && o === 0)
                            return !0;
                        if (s = t[0],
                        u = n.parentNode,
                        u && (u[e] !== s || !n.nodeIndex)) {
                            for (h = 0,
                            i = u.firstChild; i; i = i.nextSibling)
                                i.nodeType === 1 && (i.nodeIndex = ++h);
                            u[e] = s
                        }
                        return f = n.nodeIndex - o,
                        r === 0 ? f === 0 : f % r == 0 && f / r >= 0
                    }
                },
                ID: function(n, t) {
                    return n.nodeType === 1 && n.getAttribute("id") === t
                },
                TAG: function(n, t) {
                    return t === "*" && n.nodeType === 1 || !!n.nodeName && n.nodeName.toLowerCase() === t
                },
                CLASS: function(n, t) {
                    return (" " + (n.className || n.getAttribute("class")) + " ").indexOf(t) > -1
                },
                ATTR: function(t, i) {
                    var o = i[1]
                      , s = n.attr ? n.attr(t, o) : u.attrHandle[o] ? u.attrHandle[o](t) : t[o] != null ? t[o] : t.getAttribute(o)
                      , f = s + ""
                      , e = i[2]
                      , r = i[4];
                    return s == null ? e === "!=" : !e && n.attr ? s != null : e === "=" ? f === r : e === "*=" ? f.indexOf(r) >= 0 : e === "~=" ? (" " + f + " ").indexOf(r) >= 0 : r ? e === "!=" ? f !== r : e === "^=" ? f.indexOf(r) === 0 : e === "$=" ? f.substr(f.length - r.length) === r : e === "|=" ? f === r || f.substr(0, r.length + 1) === r + "-" : !1 : f && s !== !1
                },
                POS: function(n, t, i, r) {
                    var e = t[2]
                      , f = u.setFilters[e];
                    if (f)
                        return f(n, i, t, r)
                }
            }
        }
          , it = u.match.POS
          , nt = function(n, t) {
            return "\\" + (+t + 1)
        };
        for (h in u.match)
            u.match[h] = new RegExp(u.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source),
            u.leftMatch[h] = new RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[h].source.replace(/\\(\d+)/g, nt));
        f = function(n, t) {
            return (n = Array.prototype.slice.call(n, 0),
            t) ? (t.push.apply(t, n),
            t) : n
        }
        ;
        try {
            Array.prototype.slice.call(r.documentElement.childNodes, 0)[0].nodeType
        } catch (rt) {
            f = function(n, t) {
                var i = 0, r = t || [], u;
                if (d.call(n) === "[object Array]")
                    Array.prototype.push.apply(r, n);
                else if (typeof n.length == "number")
                    for (u = n.length; i < u; i++)
                        r.push(n[i]);
                else
                    for (; n[i]; i++)
                        r.push(n[i]);
                return r
            }
        }
        r.documentElement.compareDocumentPosition ? l = function(n, t) {
            return n === t ? (a = !0,
            0) : !n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition ? -1 : 1 : n.compareDocumentPosition(t) & 4 ? -1 : 1
        }
        : (l = function(n, t) {
            var i;
            if (n === t)
                return a = !0,
                0;
            if (n.sourceIndex && t.sourceIndex)
                return n.sourceIndex - t.sourceIndex;
            var e, c, u = [], f = [], o = n.parentNode, h = t.parentNode, r = o;
            if (o === h)
                return s(n, t);
            if (!o)
                return -1;
            if (!h)
                return 1;
            while (r)
                u.unshift(r),
                r = r.parentNode;
            for (r = h; r; )
                f.unshift(r),
                r = r.parentNode;
            for (e = u.length,
            c = f.length,
            i = 0; i < e && i < c; i++)
                if (u[i] !== f[i])
                    return s(u[i], f[i]);
            return i === e ? s(n, f[i], -1) : s(u[i], t, 1)
        }
        ,
        s = function(n, t, i) {
            if (n === t)
                return i;
            for (var r = n.nextSibling; r; ) {
                if (r === t)
                    return -1;
                r = r.nextSibling
            }
            return 1
        }
        ),
        function() {
            var n = r.createElement("div")
              , f = "script" + +new Date
              , i = r.documentElement;
            n.innerHTML = "<a name='" + f + "'/>",
            i.insertBefore(n, i.firstChild),
            r.getElementById(f) && (u.find.ID = function(n, i, r) {
                if (typeof i.getElementById != "undefined" && !r) {
                    var u = i.getElementById(n[1]);
                    return u ? u.id === n[1] || typeof u.getAttributeNode != "undefined" && u.getAttributeNode("id").nodeValue === n[1] ? [u] : t : []
                }
            }
            ,
            u.filter.ID = function(n, t) {
                var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                return n.nodeType === 1 && i && i.nodeValue === t
            }
            ),
            i.removeChild(n),
            i = n = null
        }(),
        function() {
            var n = r.createElement("div");
            n.appendChild(r.createComment("")),
            n.getElementsByTagName("*").length > 0 && (u.find.TAG = function(n, t) {
                var i = t.getElementsByTagName(n[1]), u, r;
                if (n[1] === "*") {
                    for (u = [],
                    r = 0; i[r]; r++)
                        i[r].nodeType === 1 && u.push(i[r]);
                    i = u
                }
                return i
            }
            ),
            n.innerHTML = "<a href='#'></a>",
            n.firstChild && typeof n.firstChild.getAttribute != "undefined" && n.firstChild.getAttribute("href") !== "#" && (u.attrHandle.href = function(n) {
                return n.getAttribute("href", 2)
            }
            ),
            n = null
        }(),
        r.querySelectorAll && function() {
            var i = n, t = r.createElement("div"), o = "__sizzle__", e;
            if (t.innerHTML = "<p class='TEST'></p>",
            !t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                n = function(t, e, s, h) {
                    var c, l;
                    if (e = e || r,
                    !h && !n.isXML(e)) {
                        if (c = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t),
                        c && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (c[1])
                                return f(e.getElementsByTagName(t), s);
                            if (c[2] && u.find.CLASS && e.getElementsByClassName)
                                return f(e.getElementsByClassName(c[2]), s)
                        }
                        if (e.nodeType === 9) {
                            if (t === "body" && e.body)
                                return f([e.body], s);
                            if (c && c[3]) {
                                if (l = e.getElementById(c[3]),
                                !l || !l.parentNode)
                                    return f([], s);
                                if (l.id === c[3])
                                    return f([l], s)
                            }
                            try {
                                return f(e.querySelectorAll(t), s)
                            } catch (b) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var w = e
                              , v = e.getAttribute("id")
                              , a = v || o
                              , y = e.parentNode
                              , p = /^\s*[+~]/.test(t);
                            v ? a = a.replace(/'/g, "\\$&") : e.setAttribute("id", a),
                            p && y && (e = e.parentNode);
                            try {
                                if (!p || y)
                                    return f(e.querySelectorAll("[id='" + a + "'] " + t), s)
                            } catch (k) {} finally {
                                v || w.removeAttribute("id")
                            }
                        }
                    }
                    return i(t, e, s, h)
                }
                ;
                for (e in i)
                    n[e] = i[e];
                t = null
            }
        }(),
        function() {
            var t = r.documentElement, i = t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.msMatchesSelector, e, f;
            if (i) {
                e = !i.call(r.createElement("div"), "div"),
                f = !1;
                try {
                    i.call(r.documentElement, "[test!='']:sizzle")
                } catch (o) {
                    f = !0
                }
                n.matchesSelector = function(t, r) {
                    if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"),
                    !n.isXML(t))
                        try {
                            if (f || !u.match.PSEUDO.test(r) && !/!=/.test(r)) {
                                var o = i.call(t, r);
                                if (o || !e || t.document && t.document.nodeType !== 11)
                                    return o
                            }
                        } catch (s) {}
                    return n(r, null, null, [t]).length > 0
                }
            }
        }(),
        function() {
            var n = r.createElement("div");
            if (n.innerHTML = "<div class='test e'></div><div class='test'></div>",
            !!n.getElementsByClassName && n.getElementsByClassName("e").length !== 0) {
                if (n.lastChild.className = "e",
                n.getElementsByClassName("e").length === 1)
                    return;
                u.order.splice(1, 0, "CLASS"),
                u.find.CLASS = function(n, t, i) {
                    if (typeof t.getElementsByClassName != "undefined" && !i)
                        return t.getElementsByClassName(n[1])
                }
                ,
                n = null
            }
        }(),
        n.contains = r.documentElement.contains ? function(n, t) {
            return n !== t && (n.contains ? n.contains(t) : !0)
        }
        : r.documentElement.compareDocumentPosition ? function(n, t) {
            return !!(n.compareDocumentPosition(t) & 16)
        }
        : function() {
            return !1
        }
        ,
        n.isXML = function(n) {
            var t = (n ? n.ownerDocument || n : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }
        ,
        p = function(t, i, r) {
            for (var e, o = [], s = "", h = i.nodeType ? [i] : i, f, c; e = u.match.PSEUDO.exec(t); )
                s += e[0],
                t = t.replace(u.match.PSEUDO, "");
            for (t = u.relative[t] ? t + "*" : t,
            f = 0,
            c = h.length; f < c; f++)
                n(t, h[f], o, r);
            return n.filter(s, o)
        }
        ,
        n.attr = i.attr,
        n.selectors.attrMap = {},
        i.find = n,
        i.expr = n.selectors,
        i.expr[":"] = i.expr.filters,
        i.unique = n.uniqueSort,
        i.text = n.getText,
        i.isXMLDoc = n.isXML,
        i.contains = n.contains
    }();
    var fe = /Until$/
      , ue = /^(?:parents|prevUntil|prevAll)/
      , re = /,/
      , ie = /^.[^:#\[\.,]*$/
      , su = Array.prototype.slice
      , hi = i.expr.match.POS
      , te = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        find: function(n) {
            var s = this, t, f, r, o, u, e;
            if (typeof n != "string")
                return i(n).filter(function() {
                    for (t = 0,
                    f = s.length; t < f; t++)
                        if (i.contains(s[t], this))
                            return !0
                });
            for (r = this.pushStack("", "find", n),
            t = 0,
            f = this.length; t < f; t++)
                if (o = r.length,
                i.find(n, this[t], r),
                t > 0)
                    for (u = o; u < r.length; u++)
                        for (e = 0; e < o; e++)
                            if (r[e] === r[u]) {
                                r.splice(u--, 1);
                                break
                            }
            return r
        },
        has: function(n) {
            var t = i(n);
            return this.filter(function() {
                for (var n = 0, r = t.length; n < r; n++)
                    if (i.contains(this, t[n]))
                        return !0
            })
        },
        not: function(n) {
            return this.pushStack(yi(this, n, !1), "not", n)
        },
        filter: function(n) {
            return this.pushStack(yi(this, n, !0), "filter", n)
        },
        is: function(n) {
            return !!n && (typeof n == "string" ? hi.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function(n, t) {
            var f = [], u, s, r = this[0], e, o;
            if (i.isArray(n)) {
                for (e = 1; r && r.ownerDocument && r !== t; ) {
                    for (u = 0; u < n.length; u++)
                        i(r).is(n[u]) && f.push({
                            selector: n[u],
                            elem: r,
                            level: e
                        });
                    r = r.parentNode,
                    e++
                }
                return f
            }
            for (o = hi.test(n) || typeof n != "string" ? i(n, t || this.context) : 0,
            u = 0,
            s = this.length; u < s; u++)
                for (r = this[u]; r; ) {
                    if (o ? o.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        f.push(r);
                        break
                    }
                    if (r = r.parentNode,
                    !r || !r.ownerDocument || r === t || r.nodeType === 11)
                        break
                }
            return f = f.length > 1 ? i.unique(f) : f,
            this.pushStack(f, "closest", n)
        },
        index: function(n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n)
              , r = i.merge(this.get(), u);
            return this.pushStack(pi(u[0]) || pi(r[0]) ? r : i.unique(r))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return i.nth(n, 2, "nextSibling")
        },
        prev: function(n) {
            return i.nth(n, 2, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling(n.parentNode.firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.makeArray(n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return fe.test(n) || (u = r),
            u && typeof u == "string" && (f = i.filter(u, f)),
            f = this.length > 1 && !te[n] ? i.unique(f) : f,
            (this.length > 1 || re.test(u)) && ue.test(n) && (f = f.reverse()),
            this.pushStack(f, n, su.call(arguments).join(","))
        }
    }),
    i.extend({
        filter: function(n, t, r) {
            return r && (n = ":not(" + n + ")"),
            t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u)); )
                f.nodeType === 1 && e.push(f),
                f = f[r];
            return e
        },
        nth: function(n, t, i) {
            t = t || 1;
            for (var u = 0; n; n = n[i])
                if (n.nodeType === 1 && ++u === t)
                    break;
            return n
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var ni = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , ne = / jQuery\d+="(?:\d+|null)"/g
      , st = /^\s+/
      , ri = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
      , ui = /<([\w:]+)/
      , gf = /<tbody/i
      , df = /<|&#?\w+;/
      , kf = /<(?:script|style)/i
      , bf = /<(?:script|object|embed|option|style)/i
      , ei = new RegExp("<(?:" + ni + ")","i")
      , oi = /checked\s*(?:[^=]|=\s*.checked.)/i
      , wf = /\/(java|ecma)script/i
      , pf = /^\s*<!(?:\[CDATA\[|\-\-)/
      , u = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , dt = vi(r);
    u.optgroup = u.option,
    u.tbody = u.tfoot = u.colgroup = u.caption = u.thead,
    u.th = u.td,
    i.support.htmlSerialize || (u._default = [1, "div<div>", "</div>"]),
    i.fn.extend({
        text: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                var r = i(this);
                r.text(n.call(this, t, r.text()))
            }) : typeof n != "object" && n !== t ? this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n)) : i.text(this)
        },
        wrapAll: function(n) {
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1; )
                        n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(n) {
                this.nodeType === 1 && this.appendChild(n)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(n) {
                this.nodeType === 1 && this.insertBefore(n, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode.insertBefore(n, this)
                });
            if (arguments.length) {
                var n = i.clean(arguments);
                return n.push.apply(n, this.toArray()),
                this.pushStack(n, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(n) {
                    this.parentNode.insertBefore(n, this.nextSibling)
                });
            if (arguments.length) {
                var n = this.pushStack(this, "after", arguments);
                return n.push.apply(n, i.clean(arguments)),
                n
            }
        },
        remove: function(n, t) {
            for (var u = 0, r; (r = this[u]) != null; u++)
                (!n || i.filter(n, [r]).length) && (!t && r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")),
                i.cleanData([r])),
                r.parentNode && r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var t = 0, n; (n = this[t]) != null; t++)
                for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild; )
                    n.removeChild(n.firstChild);
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n,
            t = t == null ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            if (n === t)
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ne, "") : null;
            if (typeof n != "string" || kf.test(n) || !i.support.leadingWhitespace && st.test(n) || u[(ui.exec(n) || ["", ""])[1].toLowerCase()])
                i.isFunction(n) ? this.each(function(t) {
                    var r = i(this);
                    r.html(n.call(this, t, r.html()))
                }) : this.empty().append(n);
            else {
                n = n.replace(ri, "<$1></$2>");
                try {
                    for (var r = 0, f = this.length; r < f; r++)
                        this[r].nodeType === 1 && (i.cleanData(this[r].getElementsByTagName("*")),
                        this[r].innerHTML = n)
                } catch (e) {
                    this.empty().append(n)
                }
            }
            return this
        },
        replaceWith: function(n) {
            return this[0] && this[0].parentNode ? i.isFunction(n) ? this.each(function(t) {
                var r = i(this)
                  , u = r.html();
                r.replaceWith(n.call(this, t, u))
            }) : (typeof n != "string" && (n = i(n).detach()),
            this.each(function() {
                var t = this.nextSibling
                  , r = this.parentNode;
                i(this).remove(),
                t ? i(t).before(n) : i(r).append(n)
            })) : this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, r, u) {
            var c, o, f, s, e = n[0], l = [];
            if (!i.support.checkClone && arguments.length === 3 && typeof e == "string" && oi.test(e))
                return this.each(function() {
                    i(this).domManip(n, r, u, !0)
                });
            if (i.isFunction(e))
                return this.each(function(f) {
                    var o = i(this);
                    n[0] = e.call(this, f, r ? o.html() : t),
                    o.domManip(n, r, u)
                });
            if (this[0]) {
                if (s = e && e.parentNode,
                c = i.support.parentNode && s && s.nodeType === 11 && s.childNodes.length === this.length ? {
                    fragment: s
                } : i.buildFragment(n, this, l),
                f = c.fragment,
                o = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild,
                o) {
                    r = r && i.nodeName(o, "tr");
                    for (var h = 0, a = this.length, v = a - 1; h < a; h++)
                        u.call(r ? du(this[h], o) : this[h], c.cacheable || a > 1 && h < v ? i.clone(f, !0, !0) : f)
                }
                l.length && i.each(l, nf)
            }
            return this
        }
    }),
    i.buildFragment = function(n, t, u) {
        var e, h, s, o, f = n[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]),
        o.createDocumentFragment || (o = r),
        n.length === 1 && typeof f == "string" && f.length < 512 && o === r && f.charAt(0) === "<" && !bf.test(f) && (i.support.checkClone || !oi.test(f)) && (i.support.html5Clone || !ei.test(f)) && (h = !0,
        s = i.fragments[f],
        s && s !== 1 && (e = s)),
        e || (e = o.createDocumentFragment(),
        i.clean(n, o, e, u)),
        h && (i.fragments[f] = s ? e : 1),
        {
            fragment: e,
            cacheable: h
        }
    }
    ,
    i.fragments = {},
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(r) {
            var e = [], u = i(r), o = this.length === 1 && this[0].parentNode, f, h, s;
            if (o && o.nodeType === 11 && o.childNodes.length === 1 && u.length === 1)
                return u[t](this[0]),
                this;
            for (f = 0,
            h = u.length; f < h; f++)
                s = (f > 0 ? this.clone(!0) : this).get(),
                i(u[f])[t](s),
                e = e.concat(s);
            return this.pushStack(e, n, u.selector)
        }
    }),
    i.extend({
        clone: function(n, t, r) {
            var f, e, u, o = i.support.html5Clone || !ei.test("<" + n.nodeName) ? n.cloneNode(!0) : gu(n);
            if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (at(n, o),
                f = tt(n),
                e = tt(o),
                u = 0; f[u]; ++u)
                    e[u] && at(f[u], e[u]);
            if (t && (yr(n, o),
            r))
                for (f = tt(n),
                e = tt(o),
                u = 0; f[u]; ++u)
                    yr(f[u], e[u]);
            return f = e = null,
            o
        },
        clean: function(n, t, f, e) {
            var b, s, c, h, o, y, a, p, k;
            for (t = t || r,
            typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || r),
            s = [],
            h = 0; (o = n[h]) != null; h++)
                if (typeof o == "number" && (o += ""),
                o) {
                    if (typeof o == "string")
                        if (df.test(o)) {
                            o = o.replace(ri, "<$1></$2>");
                            var w = (ui.exec(o) || ["", ""])[1].toLowerCase()
                              , v = u[w] || u._default
                              , d = v[0]
                              , l = t.createElement("div");
                            for (t === r ? dt.appendChild(l) : vi(t).appendChild(l),
                            l.innerHTML = v[1] + o + v[2]; d--; )
                                l = l.lastChild;
                            if (!i.support.tbody)
                                for (y = gf.test(o),
                                a = w === "table" && !y ? l.firstChild && l.firstChild.childNodes : v[1] === "<table>" && !y ? l.childNodes : [],
                                c = a.length - 1; c >= 0; --c)
                                    i.nodeName(a[c], "tbody") && !a[c].childNodes.length && a[c].parentNode.removeChild(a[c]);
                            !i.support.leadingWhitespace && st.test(o) && l.insertBefore(t.createTextNode(st.exec(o)[0]), l.firstChild),
                            o = l.childNodes
                        } else
                            o = t.createTextNode(o);
                    if (!i.support.appendChecked)
                        if (o[0] && typeof (p = o.length) == "number")
                            for (c = 0; c < p; c++)
                                nr(o[c]);
                        else
                            nr(o);
                    o.nodeType ? s.push(o) : s = i.merge(s, o)
                }
            if (f)
                for (b = function(n) {
                    return !n.type || wf.test(n.type)
                }
                ,
                h = 0; s[h]; h++)
                    e && i.nodeName(s[h], "script") && (!s[h].type || s[h].type.toLowerCase() === "text/javascript") ? e.push(s[h].parentNode ? s[h].parentNode.removeChild(s[h]) : s[h]) : (s[h].nodeType === 1 && (k = i.grep(s[h].getElementsByTagName("script"), b),
                    s.splice.apply(s, [h + 1, 0].concat(k))),
                    f.appendChild(s[h]));
            return s
        },
        cleanData: function(n) {
            for (var r, u, o = i.cache, s = i.event.special, h = i.support.deleteExpando, t, f, e = 0; (t = n[e]) != null; e++)
                if ((!t.nodeName || !i.noData[t.nodeName.toLowerCase()]) && (u = t[i.expando],
                u)) {
                    if (r = o[u],
                    r && r.events) {
                        for (f in r.events)
                            s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, r.handle);
                        r.handle && (r.handle.elem = null)
                    }
                    h ? delete t[i.expando] : t.removeAttribute && t.removeAttribute(i.expando),
                    delete o[u]
                }
        }
    });
    var ht = /alpha\([^)]*\)/i, yf = /opacity=([^)]*)/, vf = /([A-Z]|^ms)/g, fi = /^-?\d+(?:px)?$/i, af = /^-?\d/, lf = /^([\-+])=([\-+.\de]+)/, cf = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, hu = ["Left", "Right"], ee = ["Top", "Bottom"], a, lr, gt;
    i.fn.css = function(n, r) {
        return arguments.length === 2 && r === t ? this : i.access(this, n, r, !0, function(n, r, u) {
            return u !== t ? i.style(n, r, u) : i.css(n, r)
        })
    }
    ,
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = a(n, "opacity", "opacity");
                        return i === "" ? "1" : i
                    }
                    return n.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, r, u, f) {
            if (!!n && n.nodeType !== 3 && n.nodeType !== 8 && !!n.style) {
                var o, s, h = i.camelCase(r), c = n.style, e = i.cssHooks[h];
                if (r = i.cssProps[h] || h,
                u === t)
                    return e && "get"in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
                if (s = typeof u,
                s === "string" && (o = lf.exec(u)) && (u = +(o[1] + 1) * +o[2] + parseFloat(i.css(n, r)),
                s = "number"),
                u == null || s === "number" && isNaN(u))
                    return;
                if (s === "number" && !i.cssNumber[h] && (u += "px"),
                !e || !("set"in e) || (u = e.set(n, u)) !== t)
                    try {
                        c[r] = u
                    } catch (l) {}
            }
        },
        css: function(n, r, u) {
            var e, f;
            return (r = i.camelCase(r),
            f = i.cssHooks[r],
            r = i.cssProps[r] || r,
            r === "cssFloat" && (r = "float"),
            f && "get"in f && (e = f.get(n, !0, u)) !== t) ? e : a ? a(n, r) : void 0
        },
        swap: function(n, t, i) {
            var u = {}, r;
            for (r in t)
                u[r] = n.style[r],
                n.style[r] = t[r];
            i.call(n);
            for (r in t)
                n.style[r] = u[r]
        }
    }),
    i.curCSS = i.css,
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                var f;
                if (r)
                    return n.offsetWidth !== 0 ? fr(n, t, u) : (i.swap(n, cf, function() {
                        f = fr(n, t, u)
                    }),
                    f)
            },
            set: function(n, t) {
                return fi.test(t) ? (t = parseFloat(t),
                t >= 0 ? t + "px" : void 0) : t
            }
        }
    }),
    i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return yf.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style
              , u = n.currentStyle
              , e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : ""
              , f = u && u.filter || r.filter || "";
            (r.zoom = 1,
            t >= 1 && i.trim(f.replace(ht, "")) === "" && (r.removeAttribute("filter"),
            u && !u.filter)) || (r.filter = ht.test(f) ? f.replace(ht, e) : f + " " + e)
        }
    }),
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, t) {
                var r;
                return i.swap(n, {
                    display: "inline-block"
                }, function() {
                    r = t ? a(n, "margin-right", "marginRight") : n.style.marginRight
                }),
                r
            }
        })
    }),
    r.defaultView && r.defaultView.getComputedStyle && (lr = function(n, t) {
        var r, u, f;
        return t = t.replace(vf, "-$1").toLowerCase(),
        (u = n.ownerDocument.defaultView) && (f = u.getComputedStyle(n, null)) && (r = f.getPropertyValue(t),
        r === "" && !i.contains(n.ownerDocument.documentElement, n) && (r = i.style(n, t))),
        r
    }
    ),
    r.documentElement.currentStyle && (gt = function(n, t) {
        var f, u, e, i = n.currentStyle && n.currentStyle[t], r = n.style;
        return i === null && r && (e = r[t]) && (i = e),
        !fi.test(i) && af.test(i) && (f = r.left,
        u = n.runtimeStyle && n.runtimeStyle.left,
        u && (n.runtimeStyle.left = n.currentStyle.left),
        r.left = t === "fontSize" ? "1em" : i || 0,
        i = r.pixelLeft + "px",
        r.left = f,
        u && (n.runtimeStyle.left = u)),
        i === "" ? "auto" : i
    }
    ),
    a = lr || gt,
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        var t = n.offsetWidth
          , r = n.offsetHeight;
        return t === 0 && r === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, "display")) === "none"
    }
    ,
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }
    );
    var fu = /%20/g, ru = /\[\]$/, si = /\r?\n/g, dr = /#.*$/, kr = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, eu = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, wr = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, br = /^(?:GET|HEAD)$/, gr = /^\/\//, ti = /\?/, ou = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, iu = /^(?:select|textarea)/i, kt = /\s+/, nu = /([?&])_=[^&]*/, bt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, pt = i.fn.load, rt = {}, yt = {}, o, s, ii = ["*/"] + ["*"];
    try {
        o = wu.href
    } catch (oe) {
        o = r.createElement("a"),
        o.href = "",
        o = o.href
    }
    s = bt.exec(o.toLowerCase()) || [],
    i.fn.extend({
        load: function(n, r, u) {
            var f, e, o, s;
            return typeof n != "string" && pt ? pt.apply(this, arguments) : this.length ? (f = n.indexOf(" "),
            f >= 0 && (e = n.slice(f, n.length),
            n = n.slice(0, f)),
            o = "GET",
            r && (i.isFunction(r) ? (u = r,
            r = t) : typeof r == "object" && (r = i.param(r, i.ajaxSettings.traditional),
            o = "POST")),
            s = this,
            i.ajax({
                url: n,
                type: o,
                dataType: "html",
                data: r,
                complete: function(n, t, r) {
                    r = n.responseText,
                    n.isResolved() && (n.done(function(n) {
                        r = n
                    }),
                    s.html(e ? i("<div>").append(r.replace(ou, "")).find(e) : r)),
                    u && s.each(u, [r, t, n])
                }
            }),
            this) : this
        },
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || iu.test(this.nodeName) || eu.test(this.type))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(si, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(si, "\r\n")
                }
            }).get()
        }
    }),
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.each(["get", "post"], function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f,
            f = u,
            u = t),
            i.ajax({
                type: r,
                url: n,
                data: u,
                success: f,
                dataType: e
            })
        }
    }),
    i.extend({
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function(n, t) {
            return t ? tr(n, i.ajaxSettings) : (t = n,
            n = i.ajaxSettings),
            tr(n, t),
            n
        },
        ajaxSettings: {
            url: o,
            isLocal: wr.test(s[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": ii
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: lt(rt),
        ajaxTransport: lt(yt),
        ajax: function(n, r) {
            function w(n, r, s, l) {
                if (e !== 2) {
                    e = 2,
                    tt && clearTimeout(tt),
                    c = t,
                    g = l || "",
                    f.readyState = n > 0 ? 4 : 0;
                    var p, k, w, a = r, rt = s ? tf(u, f, s) : t, d, nt;
                    if (n >= 200 && n < 300 || n === 304)
                        if (u.ifModified && ((d = f.getResponseHeader("Last-Modified")) && (i.lastModified[o] = d),
                        (nt = f.getResponseHeader("Etag")) && (i.etag[o] = nt)),
                        n === 304)
                            a = "notmodified",
                            p = !0;
                        else
                            try {
                                k = rf(u, rt),
                                a = "success",
                                p = !0
                            } catch (ut) {
                                a = "parsererror",
                                w = ut
                            }
                    else
                        w = a,
                        (!a || n) && (a = "error",
                        n < 0 && (n = 0));
                    f.status = n,
                    f.statusText = "" + (r || a),
                    p ? b.resolveWith(h, [k, a, f]) : b.rejectWith(h, [f, a, w]),
                    f.statusCode(y),
                    y = t,
                    v && it.trigger("ajax" + (p ? "Success" : "Error"), [f, u, p ? k : w]),
                    ft.fireWith(h, [f, a]),
                    v && (it.trigger("ajaxComplete", [f, u]),
                    --i.active || i.event.trigger("ajaxStop"))
                }
            }
            var k, d;
            typeof n == "object" && (r = n,
            n = t),
            r = r || {};
            var u = i.ajaxSetup({}, r), h = u.context || u, it = h !== u && (h.nodeType || h instanceof i) ? i(h) : i.event, b = i.Deferred(), ft = i.Callbacks("once memory"), y = u.statusCode || {}, o, et = {}, ut = {}, g, p, c, tt, l, e = 0, v, a, f = {
                readyState: 0,
                setRequestHeader: function(n, t) {
                    if (!e) {
                        var i = n.toLowerCase();
                        n = ut[i] = ut[i] || n,
                        et[n] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return e === 2 ? g : null
                },
                getResponseHeader: function(n) {
                    var i;
                    if (e === 2) {
                        if (!p)
                            for (p = {}; i = kr.exec(g); )
                                p[i[1].toLowerCase()] = i[2];
                        i = p[n.toLowerCase()]
                    }
                    return i === t ? null : i
                },
                overrideMimeType: function(n) {
                    return e || (u.mimeType = n),
                    this
                },
                abort: function(n) {
                    return n = n || "abort",
                    c && c.abort(n),
                    w(0, n),
                    this
                }
            };
            if (b.promise(f),
            f.success = f.done,
            f.error = f.fail,
            f.complete = ft.add,
            f.statusCode = function(n) {
                if (n) {
                    var t;
                    if (e < 2)
                        for (t in n)
                            y[t] = [y[t], n[t]];
                    else
                        t = n[f.status],
                        f.then(t, t)
                }
                return this
            }
            ,
            u.url = ((n || u.url) + "").replace(dr, "").replace(gr, s[1] + "//"),
            u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(kt),
            u.crossDomain == null && (l = bt.exec(u.url.toLowerCase()),
            u.crossDomain = !(!l || l[1] == s[1] && l[2] == s[2] && (l[3] || (l[1] === "http:" ? 80 : 443)) == (s[3] || (s[1] === "http:" ? 80 : 443)))),
            u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)),
            nt(rt, u, r, f),
            e === 2)
                return !1;
            v = u.global,
            u.type = u.type.toUpperCase(),
            u.hasContent = !br.test(u.type),
            v && i.active++ == 0 && i.event.trigger("ajaxStart"),
            u.hasContent || (u.data && (u.url += (ti.test(u.url) ? "&" : "?") + u.data,
            delete u.data),
            o = u.url,
            u.cache === !1 && (k = i.now(),
            d = u.url.replace(nu, "$1_=" + k),
            u.url = d + (d === u.url ? (ti.test(u.url) ? "&" : "?") + "_=" + k : ""))),
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType),
            u.ifModified && (o = o || u.url,
            i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]),
            i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o])),
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + ii + "; q=0.01" : "") : u.accepts["*"]);
            for (a in u.headers)
                f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || e === 2))
                return f.abort(),
                !1;
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            })
                f[a](u[a]);
            if (c = nt(yt, u, r, f),
            c) {
                f.readyState = 1,
                v && it.trigger("ajaxSend", [f, u]),
                u.async && u.timeout > 0 && (tt = setTimeout(function() {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    e = 1,
                    c.send(et, w)
                } catch (ot) {
                    if (e < 2)
                        w(-1, ot);
                    else
                        throw ot;
                }
            } else
                w(-1, "No Transport");
            return f
        },
        param: function(n, r) {
            var u = [], e = function(n, t) {
                t = i.isFunction(t) ? t() : t,
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            }, f;
            if (r === t && (r = i.ajaxSettings.traditional),
            i.isArray(n) || n.jquery && !i.isPlainObject(n))
                i.each(n, function() {
                    e(this.name, this.value)
                });
            else
                for (f in n)
                    ct(f, n[f], r, e);
            return u.join("&").replace(fu, "+")
        }
    }),
    i.extend({
        active: 0,
        lastModified: {},
        etag: {}
    }),
    cr = i.now(),
    y = /(\=)\?(&|$)|\?\?/i,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return i.expando + "_" + cr++
        }
    }),
    i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var h = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (y.test(t.url) || h && y.test(t.data))) {
            var o, f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, c = n[f], e = t.url, s = t.data, l = "$1" + f + "$2";
            return t.jsonp !== !1 && (e = e.replace(y, l),
            t.url === e && (h && (s = s.replace(y, l)),
            t.data === s && (e += (/\?/.test(e) ? "&" : "?") + t.jsonp + "=" + f))),
            t.url = e,
            t.data = s,
            n[f] = function(n) {
                o = [n]
            }
            ,
            u.always(function() {
                n[f] = c,
                o && i.isFunction(c) && n[f](o[0])
            }),
            t.converters["script json"] = function() {
                return o || i.error(f + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            "script"
        }
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        n.cache === t && (n.cache = !1),
        n.crossDomain && (n.type = "GET",
        n.global = !1)
    }),
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function(f, e) {
                    i = r.createElement("script"),
                    i.async = "async",
                    n.scriptCharset && (i.charset = n.scriptCharset),
                    i.src = n.url,
                    i.onload = i.onreadystatechange = function(n, r) {
                        (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null,
                        u && i.parentNode && u.removeChild(i),
                        i = t,
                        r || e(200, "success"))
                    }
                    ,
                    u.insertBefore(i, u.firstChild)
                },
                abort: function() {
                    i && i.onload(0, 1)
                }
            }
        }
    }),
    p = n.ActiveXObject ? function() {
        for (var n in h)
            h[n](0, 1)
    }
    : !1,
    vr = 0,
    i.ajaxSettings.xhr = n.ActiveXObject ? function() {
        return !this.isLocal && gi() || uf()
    }
    : gi,
    function(n) {
        i.extend(i.support, {
            ajax: !!n,
            cors: !!n && "withCredentials"in n
        })
    }(i.ajaxSettings.xhr()),
    i.support.ajax && i.ajaxTransport(function(r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function(f, e) {
                    var o = r.xhr(), c, s;
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async),
                    r.xhrFields)
                        for (s in r.xhrFields)
                            o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType),
                    !r.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f)
                            o.setRequestHeader(s, f[s])
                    } catch (l) {}
                    o.send(r.hasContent && r.data || null),
                    u = function(n, f) {
                        var s, v, y, l, a;
                        try {
                            if (u && (f || o.readyState === 4))
                                if (u = t,
                                c && (o.onreadystatechange = i.noop,
                                p && delete h[c]),
                                f)
                                    o.readyState !== 4 && o.abort();
                                else {
                                    s = o.status,
                                    y = o.getAllResponseHeaders(),
                                    l = {},
                                    a = o.responseXML,
                                    a && a.documentElement && (l.xml = a),
                                    l.text = o.responseText;
                                    try {
                                        v = o.statusText
                                    } catch (w) {
                                        v = ""
                                    }
                                    !s && r.isLocal && !r.crossDomain ? s = l.text ? 200 : 404 : s === 1223 && (s = 204)
                                }
                        } catch (b) {
                            f || e(-1, b)
                        }
                        l && e(s, v, l, y)
                    }
                    ,
                    !r.async || o.readyState === 4 ? u() : (c = ++vr,
                    p && (h || (h = {},
                    i(n).unload(p)),
                    h[c] = u),
                    o.onreadystatechange = u)
                },
                abort: function() {
                    u && u(0, 1)
                }
            }
        }
    });
    var ft = {}, f, l, uu = /^(?:toggle|show|hide)$/, tu = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, d, di = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], k;
    i.fn.extend({
        show: function(n, t, r) {
            var u, e, f, o;
            if (n || n === 0)
                return this.animate(v("show", 3), n, t, r);
            for (f = 0,
            o = this.length; f < o; f++)
                u = this[f],
                u.style && (e = u.style.display,
                !i._data(u, "olddisplay") && e === "none" && (e = u.style.display = ""),
                e === "" && i.css(u, "display") === "none" && i._data(u, "olddisplay", li(u.nodeName)));
            for (f = 0; f < o; f++)
                u = this[f],
                u.style && (e = u.style.display,
                (e === "" || e === "none") && (u.style.display = i._data(u, "olddisplay") || ""));
            return this
        },
        hide: function(n, t, r) {
            if (n || n === 0)
                return this.animate(v("hide", 3), n, t, r);
            for (var f, e, u = 0, o = this.length; u < o; u++)
                f = this[u],
                f.style && (e = i.css(f, "display"),
                e !== "none" && !i._data(f, "olddisplay") && i._data(f, "olddisplay", e));
            for (u = 0; u < o; u++)
                this[u].style && (this[u].style.display = "none");
            return this
        },
        _toggle: i.fn.toggle,
        toggle: function(n, t, r) {
            var u = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? this._toggle.apply(this, arguments) : n == null || u ? this.each(function() {
                var t = u ? n : i(this).is(":hidden");
                i(this)[t ? "show" : "hide"]()
            }) : this.animate(v("toggle", 3), n, t, r),
            this
        },
        fadeTo: function(n, t, i, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            function e() {
                f.queue === !1 && i._mark(this);
                var u = i.extend({}, f), y = this.nodeType === 1, v = y && i(this).is(":hidden"), e, t, r, o, h, s, c, l, a;
                u.animatedProperties = {};
                for (r in n) {
                    if (e = i.camelCase(r),
                    r !== e && (n[e] = n[r],
                    delete n[r]),
                    t = n[e],
                    i.isArray(t) ? (u.animatedProperties[e] = t[1],
                    t = n[e] = t[0]) : u.animatedProperties[e] = u.specialEasing && u.specialEasing[e] || u.easing || "swing",
                    t === "hide" && v || t === "show" && !v)
                        return u.complete.call(this);
                    y && (e === "height" || e === "width") && (u.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                    i.css(this, "display") === "inline" && i.css(this, "float") === "none" && (!i.support.inlineBlockNeedsLayout || li(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                u.overflow != null && (this.style.overflow = "hidden");
                for (r in n)
                    o = new i.fx(this,u,r),
                    t = n[r],
                    uu.test(t) ? (a = i._data(this, "toggle" + r) || (t === "toggle" ? v ? "show" : "hide" : 0),
                    a ? (i._data(this, "toggle" + r, a === "show" ? "hide" : "show"),
                    o[a]()) : o[t]()) : (h = tu.exec(t),
                    s = o.cur(),
                    h ? (c = parseFloat(h[2]),
                    l = h[3] || (i.cssNumber[r] ? "" : "px"),
                    l !== "px" && (i.style(this, r, (c || 1) + l),
                    s = (c || 1) / o.cur() * s,
                    i.style(this, r, s + l)),
                    h[1] && (c = (h[1] === "-=" ? -1 : 1) * c + s),
                    o.custom(s, c, l)) : o.custom(s, t, ""));
                return !0
            }
            var f = i.speed(t, r, u);
            return i.isEmptyObject(n) ? this.each(f.complete, [!1]) : (n = i.extend({}, n),
            f.queue === !1 ? this.each(e) : this.queue(f.queue, e))
        },
        stop: function(n, r, u) {
            return typeof n != "string" && (u = r,
            r = n,
            n = t),
            r && n !== !1 && this.queue(n || "fx", []),
            this.each(function() {
                function e(n, t, r) {
                    var f = t[r];
                    i.removeData(n, r, !0),
                    f.stop(u)
                }
                var t, o = !1, f = i.timers, r = i._data(this);
                if (u || i._unmark(!0, this),
                n == null)
                    for (t in r)
                        r[t] && r[t].stop && t.indexOf(".run") === t.length - 4 && e(this, r, t);
                else
                    r[t = n + ".run"] && r[t].stop && e(this, r, t);
                for (t = f.length; t--; )
                    f[t].elem === this && (n == null || f[t].queue === n) && (u ? f[t](!0) : f[t].saveState(),
                    o = !0,
                    f.splice(t, 1));
                (!u || !o) && i.dequeue(this, n)
            })
        }
    }),
    i.each({
        slideDown: v("show", 1),
        slideUp: v("hide", 1),
        slideToggle: v("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    }),
    i.extend({
        speed: function(n, t, r) {
            var u = n && typeof n == "object" ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default,
            (u.queue == null || u.queue === !0) && (u.queue = "fx"),
            u.old = u.complete,
            u.complete = function(n) {
                i.isFunction(u.old) && u.old.call(this),
                u.queue ? i.dequeue(this, u.queue) : n !== !1 && i._unmark(this)
            }
            ,
            u
        },
        easing: {
            linear: function(n, t, i, r) {
                return i + r * n
            },
            swing: function(n, t, i, r) {
                return (-Math.cos(n * Math.PI) / 2 + .5) * r + i
            }
        },
        timers: [],
        fx: function(n, t, i) {
            this.options = t,
            this.elem = n,
            this.prop = i,
            t.orig = t.orig || {}
        }
    }),
    i.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (i.fx.step[this.prop] || i.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                return this.elem[this.prop];
            var t, n = i.css(this.elem, this.prop);
            return isNaN(t = parseFloat(n)) ? !n || n === "auto" ? 0 : n : t
        },
        custom: function(n, r, u) {
            function e(n) {
                return f.step(n)
            }
            var f = this
              , o = i.fx;
            this.startTime = k || ur(),
            this.end = r,
            this.now = this.start = n,
            this.pos = this.state = 0,
            this.unit = u || this.unit || (i.cssNumber[this.prop] ? "" : "px"),
            e.queue = this.options.queue,
            e.elem = this.elem,
            e.saveState = function() {
                f.options.hide && i._data(f.elem, "fxshow" + f.prop) === t && i._data(f.elem, "fxshow" + f.prop, f.start)
            }
            ,
            e() && i.timers.push(e) && !d && (d = setInterval(o.tick, o.interval))
        },
        show: function() {
            var n = i._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = n || i.style(this.elem, this.prop),
            this.options.show = !0,
            n !== t ? this.custom(this.cur(), n) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
            i(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(n) {
            var r, f, e, o = k || ur(), s = !0, u = this.elem, t = this.options;
            if (n || o >= t.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                t.animatedProperties[this.prop] = !0;
                for (r in t.animatedProperties)
                    t.animatedProperties[r] !== !0 && (s = !1);
                if (s) {
                    if (t.overflow != null && !i.support.shrinkWrapBlocks && i.each(["", "X", "Y"], function(n, i) {
                        u.style["overflow" + i] = t.overflow[n]
                    }),
                    t.hide && i(u).hide(),
                    t.hide || t.show)
                        for (r in t.animatedProperties)
                            i.style(u, r, t.orig[r]),
                            i.removeData(u, "fxshow" + r, !0),
                            i.removeData(u, "toggle" + r, !0);
                    e = t.complete,
                    e && (t.complete = !1,
                    e.call(u))
                }
                return !1
            }
            return t.duration == Infinity ? this.now = o : (f = o - this.startTime,
            this.state = f / t.duration,
            this.pos = i.easing[t.animatedProperties[this.prop]](this.state, f, 0, 1, t.duration),
            this.now = this.start + (this.end - this.start) * this.pos),
            this.update(),
            !0
        }
    },
    i.extend(i.fx, {
        tick: function() {
            for (var r, n = i.timers, t = 0; t < n.length; t++)
                r = n[t],
                !r() && n[t] === r && n.splice(t--, 1);
            n.length || i.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(d),
            d = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(n) {
                i.style(n.elem, "opacity", n.now)
            },
            _default: function(n) {
                n.elem.style && n.elem.style[n.prop] != null ? n.elem.style[n.prop] = n.now + n.unit : n.elem[n.prop] = n.now
            }
        }
    }),
    i.each(["width", "height"], function(n, t) {
        i.fx.step[t] = function(n) {
            i.style(n.elem, t, Math.max(0, n.now) + n.unit)
        }
    }),
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ),
    or = /^t(?:able|d|h)$/i,
    ut = /^(?:body|html)$/i,
    i.fn.offset = "getBoundingClientRect"in r.documentElement ? function(n) {
        var t = this[0], r, f, u;
        if (n)
            return this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
        if (!t || !t.ownerDocument)
            return null;
        if (t === t.ownerDocument.body)
            return i.offset.bodyOffset(t);
        try {
            r = t.getBoundingClientRect()
        } catch (y) {}
        if (f = t.ownerDocument,
        u = f.documentElement,
        !r || !i.contains(u, t))
            return r ? {
                top: r.top,
                left: r.left
            } : {
                top: 0,
                left: 0
            };
        var e = f.body
          , o = et(f)
          , s = u.clientTop || e.clientTop || 0
          , h = u.clientLeft || e.clientLeft || 0
          , c = o.pageYOffset || i.support.boxModel && u.scrollTop || e.scrollTop
          , l = o.pageXOffset || i.support.boxModel && u.scrollLeft || e.scrollLeft
          , a = r.top + c - s
          , v = r.left + l - h;
        return {
            top: a,
            left: v
        }
    }
    : function(n) {
        var t = this[0];
        if (n)
            return this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
        if (!t || !t.ownerDocument)
            return null;
        if (t === t.ownerDocument.body)
            return i.offset.bodyOffset(t);
        for (var r, h = t.offsetParent, a = t, c = t.ownerDocument, l = c.documentElement, e = c.body, s = c.defaultView, o = s ? s.getComputedStyle(t, null) : t.currentStyle, u = t.offsetTop, f = t.offsetLeft; (t = t.parentNode) && t !== e && t !== l; ) {
            if (i.support.fixedPosition && o.position === "fixed")
                break;
            r = s ? s.getComputedStyle(t, null) : t.currentStyle,
            u -= t.scrollTop,
            f -= t.scrollLeft,
            t === h && (u += t.offsetTop,
            f += t.offsetLeft,
            i.support.doesNotAddBorder && (!i.support.doesAddBorderForTableAndCells || !or.test(t.nodeName)) && (u += parseFloat(r.borderTopWidth) || 0,
            f += parseFloat(r.borderLeftWidth) || 0),
            a = h,
            h = t.offsetParent),
            i.support.subtractsBorderForOverflowNotVisible && r.overflow !== "visible" && (u += parseFloat(r.borderTopWidth) || 0,
            f += parseFloat(r.borderLeftWidth) || 0),
            o = r
        }
        return (o.position === "relative" || o.position === "static") && (u += e.offsetTop,
        f += e.offsetLeft),
        i.support.fixedPosition && o.position === "fixed" && (u += Math.max(l.scrollTop, e.scrollTop),
        f += Math.max(l.scrollLeft, e.scrollLeft)),
        {
            top: u,
            left: f
        }
    }
    ,
    i.offset = {
        bodyOffset: function(n) {
            var t = n.offsetTop
              , r = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0,
            r += parseFloat(i.css(n, "marginLeft")) || 0),
            {
                top: t,
                left: r
            }
        },
        setOffset: function(n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n), o = e.offset(), l = i.css(n, "top"), a = i.css(n, "left"), v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1, u = {}, s = {}, h, c;
            v ? (s = e.position(),
            h = s.top,
            c = s.left) : (h = parseFloat(l) || 0,
            c = parseFloat(a) || 0),
            i.isFunction(t) && (t = t.call(n, r, o)),
            t.top != null && (u.top = t.top - o.top + h),
            t.left != null && (u.left = t.left - o.left + c),
            "using"in t ? t.using.call(n, u) : e.css(u)
        }
    },
    i.fn.extend({
        position: function() {
            if (!this[0])
                return null;
            var u = this[0]
              , n = this.offsetParent()
              , t = this.offset()
              , r = ut.test(n[0].nodeName) ? {
                top: 0,
                left: 0
            } : n.offset();
            return t.top -= parseFloat(i.css(u, "marginTop")) || 0,
            t.left -= parseFloat(i.css(u, "marginLeft")) || 0,
            r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0,
            r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0,
            {
                top: t.top - r.top,
                left: t.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || r.body; n && !ut.test(n.nodeName) && i.css(n, "position") === "static"; )
                    n = n.offsetParent;
                return n
            })
        }
    }),
    i.each(["Left", "Top"], function(n, r) {
        var u = "scroll" + r;
        i.fn[u] = function(r) {
            var e, f;
            return r === t ? (e = this[0],
            !e) ? null : (f = et(e),
            f ? "pageXOffset"in f ? f[n ? "pageYOffset" : "pageXOffset"] : i.support.boxModel && f.document.documentElement[u] || f.document.body[u] : e[u]) : this.each(function() {
                f = et(this),
                f ? f.scrollTo(n ? i(f).scrollLeft() : r, n ? r : i(f).scrollTop()) : this[u] = r
            })
        }
    }),
    i.each(["Height", "Width"], function(n, r) {
        var u = r.toLowerCase();
        i.fn["inner" + r] = function() {
            var n = this[0];
            return n ? n.style ? parseFloat(i.css(n, u, "padding")) : this[u]() : null
        }
        ,
        i.fn["outer" + r] = function(n) {
            var t = this[0];
            return t ? t.style ? parseFloat(i.css(t, u, n ? "margin" : "border")) : this[u]() : null
        }
        ,
        i.fn[u] = function(n) {
            var f = this[0], e, o, s, h;
            return f ? i.isFunction(n) ? this.each(function(t) {
                var r = i(this);
                r[u](n.call(this, t, r[u]()))
            }) : i.isWindow(f) ? (e = f.document.documentElement["client" + r],
            o = f.document.body,
            f.document.compatMode === "CSS1Compat" && e || o && o["client" + r] || e) : f.nodeType === 9 ? Math.max(f.documentElement["client" + r], f.body["scroll" + r], f.documentElement["scroll" + r], f.body["offset" + r], f.documentElement["offset" + r]) : n === t ? (s = i.css(f, u),
            h = parseFloat(s),
            i.isNumeric(h) ? h : s) : this.css(u, typeof n == "string" ? n : n + "px") : n == null ? null : this
        }
    }),
    n.jQuery = n.$ = i,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return i
    })
}
)(window);
/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.effects.core.js, jquery.effects.blind.js, jquery.effects.bounce.js, jquery.effects.clip.js, jquery.effects.drop.js, jquery.effects.explode.js, jquery.effects.fade.js, jquery.effects.fold.js, jquery.effects.highlight.js, jquery.effects.pulsate.js, jquery.effects.scale.js, jquery.effects.shake.js, jquery.effects.slide.js, jquery.effects.transfer.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT */
(function(n, t) {
    function i(t, i) {
        var u = t.nodeName.toLowerCase(), f, e, o;
        return "area" === u ? (f = t.parentNode,
        e = f.name,
        !t.href || !e || f.nodeName.toLowerCase() !== "map" ? !1 : (o = n("img[usemap=#" + e + "]")[0],
        !!o && r(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" == u ? t.href || i : i) && r(t)
    }
    function r(t) {
        return !n(t).parents().andSelf().filter(function() {
            return n.curCSS(this, "visibility") === "hidden" || n.expr.filters.hidden(this)
        }).length
    }
    (n.ui = n.ui || {},
    n.ui.version) || (n.extend(n.ui, {
        version: "1.8.20",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }),
    n.fn.extend({
        propAttr: n.fn.prop || n.fn.attr,
        _focus: n.fn.focus,
        focus: function(t, i) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    n(r).focus(),
                    i && i.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return t = n.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(n.curCSS(this, "position", 1)) && /(auto|scroll)/.test(n.curCSS(this, "overflow", 1) + n.curCSS(this, "overflow-y", 1) + n.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(n.curCSS(this, "overflow", 1) + n.curCSS(this, "overflow-y", 1) + n.curCSS(this, "overflow-x", 1))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? n(document) : t
        },
        zIndex: function(i) {
            if (i !== t)
                return this.css("zIndex", i);
            if (this.length)
                for (var r = n(this[0]), u, f; r.length && r[0] !== document; ) {
                    if (u = r.css("position"),
                    (u === "absolute" || u === "relative" || u === "fixed") && (f = parseInt(r.css("zIndex"), 10),
                    !isNaN(f) && f !== 0))
                        return f;
                    r = r.parent()
                }
            return 0
        },
        disableSelection: function() {
            return this.bind((n.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(n) {
                n.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    n.each(["Width", "Height"], function(i, r) {
        function u(t, i, r, u) {
            return n.each(o, function() {
                i -= parseFloat(n.curCSS(t, "padding" + this, !0)) || 0,
                r && (i -= parseFloat(n.curCSS(t, "border" + this + "Width", !0)) || 0),
                u && (i -= parseFloat(n.curCSS(t, "margin" + this, !0)) || 0)
            }),
            i
        }
        var o = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
          , f = r.toLowerCase()
          , e = {
            innerWidth: n.fn.innerWidth,
            innerHeight: n.fn.innerHeight,
            outerWidth: n.fn.outerWidth,
            outerHeight: n.fn.outerHeight
        };
        n.fn["inner" + r] = function(i) {
            return i === t ? e["inner" + r].call(this) : this.each(function() {
                n(this).css(f, u(this, i) + "px")
            })
        }
        ,
        n.fn["outer" + r] = function(t, i) {
            return typeof t != "number" ? e["outer" + r].call(this, t) : this.each(function() {
                n(this).css(f, u(this, t, !0, i) + "px")
            })
        }
    }),
    n.extend(n.expr[":"], {
        data: function(t, i, r) {
            return !!n.data(t, r[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(n.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var r = n.attr(t, "tabindex")
              , u = isNaN(r);
            return (u || r >= 0) && i(t, !u)
        }
    }),
    n(function() {
        var i = document.body
          , t = i.appendChild(t = document.createElement("div"));
        t.offsetHeight,
        n.extend(t.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }),
        n.support.minHeight = t.offsetHeight === 100,
        n.support.selectstart = "onselectstart"in t,
        i.removeChild(t).style.display = "none"
    }),
    n.extend(n.ui, {
        plugin: {
            add: function(t, i, r) {
                var f = n.ui[t].prototype, u;
                for (u in r)
                    f.plugins[u] = f.plugins[u] || [],
                    f.plugins[u].push([i, r[u]])
            },
            call: function(n, t, i) {
                var u = n.plugins[t], r;
                if (u && n.element[0].parentNode)
                    for (r = 0; r < u.length; r++)
                        n.options[u[r][0]] && u[r][1].apply(n.element, i)
            }
        },
        contains: function(n, t) {
            return document.compareDocumentPosition ? n.compareDocumentPosition(t) & 16 : n !== t && n.contains(t)
        },
        hasScroll: function(t, i) {
            if (n(t).css("overflow") === "hidden")
                return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop"
              , u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1,
            u = t[r] > 0,
            t[r] = 0,
            u)
        },
        isOverAxis: function(n, t, i) {
            return n > t && n < t + i
        },
        isOver: function(t, i, r, u, f, e) {
            return n.ui.isOverAxis(t, r, f) && n.ui.isOverAxis(i, u, e)
        }
    }))
}
)(jQuery),
function(n, t) {
    var i, r;
    n.cleanData ? (i = n.cleanData,
    n.cleanData = function(t) {
        for (var r = 0, u; (u = t[r]) != null; r++)
            try {
                n(u).triggerHandler("remove")
            } catch (f) {}
        i(t)
    }
    ) : (r = n.fn.remove,
    n.fn.remove = function(t, i) {
        return this.each(function() {
            return i || (!t || n.filter(t, [this]).length) && n("*", this).add([this]).each(function() {
                try {
                    n(this).triggerHandler("remove")
                } catch (t) {}
            }),
            r.call(n(this), t, i)
        })
    }
    ),
    n.widget = function(t, i, r) {
        var u = t.split(".")[0], e, f;
        t = t.split(".")[1],
        e = u + "-" + t,
        r || (r = i,
        i = n.Widget),
        n.expr[":"][e] = function(i) {
            return !!n.data(i, t)
        }
        ,
        n[u] = n[u] || {},
        n[u][t] = function(n, t) {
            arguments.length && this._createWidget(n, t)
        }
        ,
        f = new i,
        f.options = n.extend(!0, {}, f.options),
        n[u][t].prototype = n.extend(!0, f, {
            namespace: u,
            widgetName: t,
            widgetEventPrefix: n[u][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: e
        }, r),
        n.widget.bridge(t, n[u][t])
    }
    ,
    n.widget.bridge = function(i, r) {
        n.fn[i] = function(u) {
            var f = typeof u == "string"
              , e = Array.prototype.slice.call(arguments, 1)
              , o = this;
            return u = !f && e.length ? n.extend.apply(null, [!0, u].concat(e)) : u,
            f && u.charAt(0) === "_" ? o : (f ? this.each(function() {
                var r = n.data(this, i)
                  , f = r && n.isFunction(r[u]) ? r[u].apply(r, e) : r;
                if (f !== r && f !== t)
                    return o = f,
                    !1
            }) : this.each(function() {
                var t = n.data(this, i);
                t ? t.option(u || {})._init() : n.data(this, i, new r(u,this))
            }),
            o)
        }
    }
    ,
    n.Widget = function(n, t) {
        arguments.length && this._createWidget(n, t)
    }
    ,
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(t, i) {
            n.data(i, this.widgetName, this),
            this.element = n(i),
            this.options = n.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var r = this;
            this.element.bind("remove." + this.widgetName, function() {
                r.destroy()
            }),
            this._create(),
            this._trigger("create"),
            this._init()
        },
        _getCreateOptions: function() {
            return n.metadata && n.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName),
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(i, r) {
            var u = i;
            if (arguments.length === 0)
                return n.extend({}, this.options);
            if (typeof i == "string") {
                if (r === t)
                    return this.options[i];
                u = {},
                u[i] = r
            }
            return this._setOptions(u),
            this
        },
        _setOptions: function(t) {
            var i = this;
            return n.each(t, function(n, t) {
                i._setOption(n, t)
            }),
            this
        },
        _setOption: function(n, t) {
            return this.options[n] = t,
            n === "disabled" && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", t),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {},
            i = n.Event(i),
            i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            i.target = this.element[0],
            f = i.originalEvent,
            f)
                for (u in f)
                    u in i || (i[u] = f[u]);
            return this.element.trigger(i, r),
            !(n.isFunction(e) && e.call(this.element[0], i, r) === !1 || i.isDefaultPrevented())
        }
    }
}(jQuery),
function(n) {
    var i = !1;
    n(document).mouseup(function() {
        i = !1
    }),
    n.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(n) {
                return t._mouseDown(n)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent"))
                    return n.removeData(i.target, t.widgetName + ".preventClickEvent"),
                    i.stopImmediatePropagation(),
                    !1
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!i) {
                this._mouseStarted && this._mouseUp(t),
                this._mouseDownEvent = t;
                var r = this
                  , u = t.which == 1
                  , f = typeof this.options.cancel == "string" && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                return !u || f || !this._mouseCapture(t) ? !0 : (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    r.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1,
                !this._mouseStarted)) ? (t.preventDefault(),
                !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(n) {
                    return r._mouseMove(n)
                }
                ,
                this._mouseUpDelegate = function(n) {
                    return r._mouseUp(n)
                }
                ,
                n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                i = !0,
                !0)
            }
        },
        _mouseMove: function(t) {
            return !n.browser.msie || document.documentMode >= 9 || !!t.button ? this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target == this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(n) {
    n.widget("ui.draggable", n.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        destroy: function() {
            if (this.element.data("draggable"))
                return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
                this._mouseDestroy(),
                this
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || n(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t),
            this.handle ? (i.iframeFix && n(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                n('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(n(this).offset()).appendTo("body")
            }),
            !0) : !1)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t),
            this._cacheHelperProportions(),
            n.ui.ddmanager && (n.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            i.containment && this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this.helper.addClass("ui-draggable-dragging"),
            this._mouseDrag(t, !0),
            n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _mouseDrag: function(t, i) {
            if (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1)
                    return this._mouseUp({}),
                    !1;
                this.position = r.position
            }
            return this.options.axis && this.options.axis == "y" || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && this.options.axis == "x" || (this.helper[0].style.top = this.position.top + "px"),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var i = !1, r, u, f;
            for (n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)),
            this.dropped && (i = this.dropped,
            this.dropped = !1),
            r = this.element[0],
            u = !1; r && (r = r.parentNode); )
                r == document && (u = !0);
            return !u && this.options.helper === "original" ? !1 : (this.options.revert == "invalid" && !i || this.options.revert == "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? (f = this,
            n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                f._trigger("stop", t) !== !1 && f._clear()
            })) : this._trigger("stop", t) !== !1 && this._clear(),
            !1)
        },
        _mouseUp: function(t) {
            return this.options.iframeFix === !0 && n("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t),
            n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            var i = !this.options.handle || !n(this.options.handle, this.element).length ? !0 : !1;
            return n(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (i = !0)
            }),
            i
        },
        _createHelper: function(t) {
            var r = this.options
              , i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : r.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo == "parent" ? this.element[0].parentNode : r.appendTo),
            i[0] != this.element[0] && !/(fixed|absolute)/.test(i.css("position")) && i.css("position", "absolute"),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")),
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition == "absolute" && this.scrollParent[0] != document && n.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && n.browser.msie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var n = this.element.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var i = this.options, r, t, f, u;
            if (i.containment == "parent" && (i.containment = this.helper[0].parentNode),
            (i.containment == "document" || i.containment == "window") && (this.containment = [i.containment == "document" ? 0 : n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment == "document" ? 0 : n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment == "document" ? 0 : n(window).scrollLeft()) + n(i.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (i.containment == "document" ? 0 : n(window).scrollTop()) + (n(i.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(i.containment) || i.containment.constructor == Array)
                i.containment.constructor == Array && (this.containment = i.containment);
            else {
                if (r = n(i.containment),
                t = r[0],
                !t)
                    return;
                f = r.offset(),
                u = n(t).css("overflow") != "hidden",
                this.containment = [(parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0), (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0), (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                this.relative_container = r
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t == "absolute" ? 1 : -1
              , e = this.options
              , u = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r),
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r)
            }
        },
        _generatePosition: function(t) {
            var r = this.options, h = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, c = /(html|body)/i.test(h[0].tagName), e = t.pageX, o = t.pageY, i, s, u, f;
            return this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(),
            i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
            t.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)),
            r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY,
            o = i ? u - this.offset.click.top < i[1] || u - this.offset.click.top > i[3] ? u - this.offset.click.top < i[1] ? u + r.grid[1] : u - r.grid[1] : u : u,
            f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX,
            e = i ? f - this.offset.click.left < i[0] || f - this.offset.click.left > i[2] ? f - this.offset.click.left < i[0] ? f + r.grid[0] : f - r.grid[0] : f : f)),
            {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : c ? 0 : h.scrollTop()),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (n.browser.safari && n.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : c ? 0 : h.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, r) {
            return r = r || this._uiHash(),
            n.ui.plugin.call(this, t, [i, r]),
            t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")),
            n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    n.extend(n.ui.draggable, {
        version: "1.8.20"
    }),
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var r = n(this).data("draggable")
              , u = r.options
              , f = n.extend({}, i, {
                item: r.element
            });
            r.sortables = [],
            n(u.connectToSortable).each(function() {
                var i = n.data(this, "sortable");
                i && !i.options.disabled && (r.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }),
                i.refreshPositions(),
                i._trigger("activate", t, f))
            })
        },
        stop: function(t, i) {
            var r = n(this).data("draggable")
              , u = n.extend({}, i, {
                item: r.element
            });
            n.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0,
                r.cancelHelperRemoval = !0,
                this.instance.cancelHelperRemoval = !1,
                this.shouldRevert && (this.instance.options.revert = !0),
                this.instance._mouseStop(t),
                this.instance.options.helper = this.instance.options._helper,
                r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1,
                this.instance._trigger("deactivate", t, u))
            })
        },
        drag: function(t, i) {
            var r = n(this).data("draggable")
              , u = this
              , f = function(t) {
                var i = this.offset.click.top
                  , r = this.offset.click.left
                  , u = this.positionAbs.top
                  , f = this.positionAbs.left
                  , e = t.height
                  , o = t.width
                  , s = t.top
                  , h = t.left;
                return n.ui.isOver(u + i, f + r, s, h, e, o)
            };
            n.each(r.sortables, function() {
                this.instance.positionAbs = r.positionAbs,
                this.instance.helperProportions = r.helperProportions,
                this.instance.offset.click = r.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1,
                this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0),
                this.instance.options._helper = this.instance.options.helper,
                this.instance.options.helper = function() {
                    return i.helper[0]
                }
                ,
                t.target = this.instance.currentItem[0],
                this.instance._mouseCapture(t, !0),
                this.instance._mouseStart(t, !0, !0),
                this.instance.offset.click.top = r.offset.click.top,
                this.instance.offset.click.left = r.offset.click.left,
                this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top,
                r._trigger("toSortable", t),
                r.dropped = this.instance.element,
                r.currentItem = r.element,
                this.instance.fromOutside = r),
                this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0,
                this.instance.cancelHelperRemoval = !0,
                this.instance.options.revert = !1,
                this.instance._trigger("out", t, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(t, !0),
                this.instance.options.helper = this.instance.options._helper,
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                r._trigger("fromSortable", t),
                r.dropped = !1)
            })
        }
    }),
    n.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var r = n("body")
              , u = n(this).data("draggable").options;
            r.css("cursor") && (u._cursor = r.css("cursor")),
            r.css("cursor", u.cursor)
        },
        stop: function() {
            var r = n(this).data("draggable").options;
            r._cursor && n("body").css("cursor", r._cursor)
        }
    }),
    n.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var r = n(i.helper)
              , u = n(this).data("draggable").options;
            r.css("opacity") && (u._opacity = r.css("opacity")),
            r.css("opacity", u.opacity)
        },
        stop: function(t, i) {
            var r = n(this).data("draggable").options;
            r._opacity && n(i.helper).css("opacity", r._opacity)
        }
    }),
    n.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var r = n(this).data("draggable");
            r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
        },
        drag: function(t) {
            var u = n(this).data("draggable")
              , r = u.options
              , f = !1;
            u.scrollParent[0] != document && u.scrollParent[0].tagName != "HTML" ? (r.axis && r.axis == "x" || (u.overflowOffset.top + u.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? u.scrollParent[0].scrollTop = f = u.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - u.overflowOffset.top < r.scrollSensitivity && (u.scrollParent[0].scrollTop = f = u.scrollParent[0].scrollTop - r.scrollSpeed)),
            r.axis && r.axis == "y" || (u.overflowOffset.left + u.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? u.scrollParent[0].scrollLeft = f = u.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - u.overflowOffset.left < r.scrollSensitivity && (u.scrollParent[0].scrollLeft = f = u.scrollParent[0].scrollLeft - r.scrollSpeed))) : (r.axis && r.axis == "x" || (t.pageY - n(document).scrollTop() < r.scrollSensitivity ? f = n(document).scrollTop(n(document).scrollTop() - r.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < r.scrollSensitivity && (f = n(document).scrollTop(n(document).scrollTop() + r.scrollSpeed))),
            r.axis && r.axis == "y" || (t.pageX - n(document).scrollLeft() < r.scrollSensitivity ? f = n(document).scrollLeft(n(document).scrollLeft() - r.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < r.scrollSensitivity && (f = n(document).scrollLeft(n(document).scrollLeft() + r.scrollSpeed)))),
            f !== !1 && n.ui.ddmanager && !r.dropBehaviour && n.ui.ddmanager.prepareOffsets(u, t)
        }
    }),
    n.ui.plugin.add("draggable", "snap", {
        start: function() {
            var r = n(this).data("draggable")
              , u = r.options;
            r.snapElements = [],
            n(u.snap.constructor != String ? u.snap.items || ":data(draggable)" : u.snap).each(function() {
                var t = n(this)
                  , i = t.offset();
                this != r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, i) {
            for (var r = n(this).data("draggable"), k = r.options, u = k.snapTolerance, c = i.offset.left, a = c + r.helperProportions.width, l = i.offset.top, v = l + r.helperProportions.height, d, f = r.snapElements.length - 1; f >= 0; f--) {
                var e = r.snapElements[f].left
                  , s = e + r.snapElements[f].width
                  , o = r.snapElements[f].top
                  , h = o + r.snapElements[f].height;
                if (!(e - u < c && c < s + u && o - u < l && l < h + u || e - u < c && c < s + u && o - u < v && v < h + u || e - u < a && a < s + u && o - u < l && l < h + u || e - u < a && a < s + u && o - u < v && v < h + u)) {
                    r.snapElements[f].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                        snapItem: r.snapElements[f].item
                    })),
                    r.snapElements[f].snapping = !1;
                    continue
                }
                if (k.snapMode != "inner") {
                    var p = Math.abs(o - v) <= u
                      , w = Math.abs(h - l) <= u
                      , b = Math.abs(e - a) <= u
                      , y = Math.abs(s - c) <= u;
                    p && (i.position.top = r._convertPositionTo("relative", {
                        top: o - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top),
                    w && (i.position.top = r._convertPositionTo("relative", {
                        top: h,
                        left: 0
                    }).top - r.margins.top),
                    b && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: e - r.helperProportions.width
                    }).left - r.margins.left),
                    y && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: s
                    }).left - r.margins.left)
                }
                if (d = p || w || b || y,
                k.snapMode != "outer") {
                    var p = Math.abs(o - l) <= u
                      , w = Math.abs(h - v) <= u
                      , b = Math.abs(e - c) <= u
                      , y = Math.abs(s - a) <= u;
                    p && (i.position.top = r._convertPositionTo("relative", {
                        top: o,
                        left: 0
                    }).top - r.margins.top),
                    w && (i.position.top = r._convertPositionTo("relative", {
                        top: h - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top),
                    b && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: e
                    }).left - r.margins.left),
                    y && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: s - r.helperProportions.width
                    }).left - r.margins.left)
                }
                !r.snapElements[f].snapping && (p || w || b || y || d) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[f].item
                })),
                r.snapElements[f].snapping = p || w || b || y || d
            }
        }
    }),
    n.ui.plugin.add("draggable", "stack", {
        start: function() {
            var f = n(this).data("draggable").options, r = n.makeArray(n(f.stack)).sort(function(t, i) {
                return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
            }), u;
            r.length && (u = parseInt(r[0].style.zIndex) || 0,
            n(r).each(function(n) {
                this.style.zIndex = u + n
            }),
            this[0].style.zIndex = u + r.length)
        }
    }),
    n.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var r = n(i.helper)
              , u = n(this).data("draggable").options;
            r.css("zIndex") && (u._zIndex = r.css("zIndex")),
            r.css("zIndex", u.zIndex)
        },
        stop: function(t, i) {
            var r = n(this).data("draggable").options;
            r._zIndex && n(i.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery),
function(n) {
    n.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var t = this.options
              , i = t.accept;
            this.isover = 0,
            this.isout = 1,
            this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            }
            ,
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            },
            n.ui.ddmanager.droppables[t.scope] = n.ui.ddmanager.droppables[t.scope] || [],
            n.ui.ddmanager.droppables[t.scope].push(this),
            t.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function() {
            for (var i = n.ui.ddmanager.droppables[this.options.scope], t = 0; t < i.length; t++)
                i[t] == this && i.splice(t, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),
            this
        },
        _setOption: function(t, i) {
            t == "accept" && (this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            }
            ),
            n.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
            this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var r = i || n.ui.ddmanager.current, u;
            return !r || (r.currentItem || r.element)[0] == this.element[0] ? !1 : (u = !1,
            this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var t = n.data(this, "droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance))
                    return u = !0,
                    !1
            }),
            u ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("drop", t, this.ui(r)),
            this.element) : !1)
        },
        ui: function(n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        }
    }),
    n.extend(n.ui.droppable, {
        version: "1.8.20"
    }),
    n.ui.intersect = function(t, i, r) {
        if (!i.offset)
            return !1;
        var e = (t.positionAbs || t.position.absolute).left
          , s = e + t.helperProportions.width
          , o = (t.positionAbs || t.position.absolute).top
          , h = o + t.helperProportions.height
          , u = i.offset.left
          , c = u + i.proportions.width
          , f = i.offset.top
          , l = f + i.proportions.height;
        switch (r) {
        case "fit":
            return u <= e && s <= c && f <= o && h <= l;
        case "intersect":
            return u < e + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < c && f < o + t.helperProportions.height / 2 && h - t.helperProportions.height / 2 < l;
        case "pointer":
            var a = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left
              , v = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top;
            return n.ui.isOver(v, a, f, u, i.proportions.height, i.proportions.width);
        case "touch":
            return (o >= f && o <= l || h >= f && h <= l || o < f && h > l) && (e >= u && e <= c || s >= u && s <= c || e < u && s > c);
        default:
            return !1
        }
    }
    ,
    n.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var u = n.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null, e = (t.currentItem || t.element).find(":data(droppable)").andSelf(), r, f;
            n: for (r = 0; r < u.length; r++)
                if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                    for (f = 0; f < e.length; f++)
                        if (e[f] == u[r].element[0]) {
                            u[r].proportions.height = 0;
                            continue n
                        }
                    (u[r].visible = u[r].element.css("display") != "none",
                    u[r].visible) && (o == "mousedown" && u[r]._activate.call(u[r], i),
                    u[r].offset = u[r].element.offset(),
                    u[r].proportions = {
                        width: u[r].element[0].offsetWidth,
                        height: u[r].element[0].offsetHeight
                    })
                }
        },
        drop: function(t, i) {
            var r = !1;
            return n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, i) || r),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1,
                this.isover = 0,
                this._deactivate.call(this, i)))
            }),
            r
        },
        dragStart: function(t, i) {
            t.element.parents(":not(body,html)").bind("scroll.droppable", function() {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i),
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                var f, u, r, e;
                this.options.disabled || this.greedyChild || !this.visible || (f = n.ui.intersect(t, this, this.options.tolerance),
                u = !f && this.isover == 1 ? "isout" : f && this.isover == 0 ? "isover" : null,
                u) && (this.options.greedy && (e = this.element.parents(":data(droppable):eq(0)"),
                e.length && (r = n.data(e[0], "droppable"),
                r.greedyChild = u == "isover" ? 1 : 0)),
                r && u == "isover" && (r.isover = 0,
                r.isout = 1,
                r._out.call(r, i)),
                this[u] = 1,
                this[u == "isout" ? "isover" : "isout"] = 0,
                this[u == "isover" ? "_over" : "_out"].call(this, i),
                r && u == "isout" && (r.isout = 0,
                r.isover = 1,
                r._over.call(r, i)))
            })
        },
        dragStop: function(t, i) {
            t.element.parents(":not(body,html)").unbind("scroll.droppable"),
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    }
}(jQuery),
function(n) {
    n.widget("ui.resizable", n.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var i = this, t = this.options, f, r;
            if (this.element.addClass("ui-resizable"),
            n.extend(this, {
                _aspectRatio: !!t.aspectRatio,
                aspectRatio: t.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("resizable", this.element.data("resizable")),
            this.elementIsWrapper = !0,
            this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }),
            this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css({
                margin: this.originalElement.css("margin")
            }),
            this._proportionallyResize()),
            this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this.handles.constructor == String)
                for (this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                f = this.handles.split(","),
                this.handles = {},
                r = 0; r < f.length; r++) {
                    var u = n.trim(f[r])
                      , o = "ui-resizable-" + u
                      , e = n('<div class="ui-resizable-handle ' + o + '"></div>');
                    e.css({
                        zIndex: t.zIndex
                    }),
                    "se" == u && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                    this.handles[u] = ".ui-resizable-" + u,
                    this.element.append(e)
                }
            this._renderAxis = function(t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles)
                    this.handles[i].constructor == String && (this.handles[i] = n(this.handles[i], this.element).show()),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element),
                    u = 0,
                    u = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(),
                    f = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    t.css(f, u),
                    this._proportionallyResize()),
                    !n(this.handles[i]).length
            }
            ,
            this._renderAxis(this.element),
            this._handles = n(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                if (!i.resizing) {
                    if (this.className)
                        var n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    i.axis = n && n[1] ? n[1] : "se"
                }
            }),
            t.autoHide && (this._handles.hide(),
            n(this.element).addClass("ui-resizable-autohide").hover(function() {
                t.disabled || (n(this).removeClass("ui-resizable-autohide"),
                i._handles.show())
            }, function() {
                t.disabled || i.resizing || (n(this).addClass("ui-resizable-autohide"),
                i._handles.hide())
            })),
            this._mouseInit()
        },
        destroy: function() {
            var i, t;
            return this._mouseDestroy(),
            i = function(t) {
                n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            }
            ,
            this.elementIsWrapper && (i(this.element),
            t = this.element,
            t.after(this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            })).remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _mouseCapture: function(t) {
            var i = !1, r;
            for (r in this.handles)
                n(this.handles[r])[0] == t.target && (i = !0);
            return !this.options.disabled && i
        },
        _mouseStart: function(t) {
            var u = this.options, s = this.element.position(), i = this.element, f, e, o;
            return this.resizing = !0,
            this.documentScroll = {
                top: n(document).scrollTop(),
                left: n(document).scrollLeft()
            },
            (i.is(".ui-draggable") || /absolute/.test(i.css("position"))) && i.css({
                position: "absolute",
                top: s.top,
                left: s.left
            }),
            this._renderProxy(),
            f = r(this.helper.css("left")),
            e = r(this.helper.css("top")),
            u.containment && (f += n(u.containment).scrollLeft() || 0,
            e += n(u.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: f,
                top: e
            },
            this.size = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            },
            this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            },
            this.originalPosition = {
                left: f,
                top: e
            },
            this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = typeof u.aspectRatio == "number" ? u.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            o = n(".ui-resizable-" + this.axis).css("cursor"),
            n("body").css("cursor", o == "auto" ? this.axis + "-resize" : o),
            i.addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var f = this.helper
              , h = this.options
              , c = {}
              , l = this
              , r = this.originalMousePosition
              , e = this.axis
              , o = t.pageX - r.left || 0
              , s = t.pageY - r.top || 0
              , u = this._change[e];
            if (!u)
                return !1;
            var i = u.apply(this, [t, o, s])
              , a = n.browser.msie && n.browser.version < 7
              , v = this.sizeDiff;
            return this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)),
            i = this._respectSize(i, t),
            this._propagate("resize", t),
            f.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            this._updateCache(i),
            this._trigger("resize", t, this.ui()),
            !1
        },
        _mouseStop: function(t) {
            var r, i;
            if (this.resizing = !1,
            r = this.options,
            i = this,
            this._helper) {
                var u = this._proportionallyResizeElements
                  , f = u.length && /textarea/i.test(u[0].nodeName)
                  , e = f && n.ui.hasScroll(u[0], "left") ? 0 : i.sizeDiff.height
                  , o = f ? 0 : i.sizeDiff.width
                  , s = {
                    width: i.helper.width() - o,
                    height: i.helper.height() - e
                }
                  , h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null
                  , c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                r.animate || this.element.css(n.extend(s, {
                    top: c,
                    left: h
                })),
                i.helper.height(i.size.height),
                i.helper.width(i.size.width),
                this._helper && !r.animate && this._proportionallyResize()
            }
            return n("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(n) {
            var r = this.options, u, f, e, o, t;
            t = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : Infinity,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : Infinity
            },
            (this._aspectRatio || n) && (u = t.minHeight * this.aspectRatio,
            e = t.minWidth / this.aspectRatio,
            f = t.maxHeight * this.aspectRatio,
            o = t.maxWidth / this.aspectRatio,
            u > t.minWidth && (t.minWidth = u),
            e > t.minHeight && (t.minHeight = e),
            f < t.maxWidth && (t.maxWidth = f),
            o < t.maxHeight && (t.maxHeight = o)),
            this._vBoundaries = t
        },
        _updateCache: function(n) {
            var t = this.options;
            this.offset = this.helper.offset(),
            i(n.left) && (this.position.left = n.left),
            i(n.top) && (this.position.top = n.top),
            i(n.height) && (this.size.height = n.height),
            i(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var e = this.options
              , r = this.position
              , u = this.size
              , f = this.axis;
            return i(n.height) ? n.width = n.height * this.aspectRatio : i(n.width) && (n.height = n.width / this.aspectRatio),
            f == "sw" && (n.left = r.left + (u.width - n.width),
            n.top = null),
            f == "nw" && (n.top = r.top + (u.height - n.height),
            n.left = r.left + (u.width - n.width)),
            n
        },
        _respectSize: function(n, t) {
            var y = this.helper, r = this._vBoundaries, p = this._aspectRatio || t.shiftKey, f = this.axis, e = i(n.width) && r.maxWidth && r.maxWidth < n.width, o = i(n.height) && r.maxHeight && r.maxHeight < n.height, s = i(n.width) && r.minWidth && r.minWidth > n.width, h = i(n.height) && r.minHeight && r.minHeight > n.height, u;
            s && (n.width = r.minWidth),
            h && (n.height = r.minHeight),
            e && (n.width = r.maxWidth),
            o && (n.height = r.maxHeight);
            var c = this.originalPosition.left + this.originalSize.width
              , l = this.position.top + this.size.height
              , a = /sw|nw|w/.test(f)
              , v = /nw|ne|n/.test(f);
            return s && a && (n.left = c - r.minWidth),
            e && a && (n.left = c - r.maxWidth),
            h && v && (n.top = l - r.minHeight),
            o && v && (n.top = l - r.maxHeight),
            u = !n.width && !n.height,
            u && !n.left && n.top ? n.top = null : u && !n.top && n.left && (n.left = null),
            n
        },
        _proportionallyResize: function() {
            var e = this.options, i, r, t, u, f;
            if (this._proportionallyResizeElements.length)
                for (i = this.helper || this.element,
                r = 0; r < this._proportionallyResizeElements.length; r++)
                    if (t = this._proportionallyResizeElements[r],
                    this.borderDif || (u = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")],
                    f = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")],
                    this.borderDif = n.map(u, function(n, t) {
                        var i = parseInt(n, 10) || 0
                          , r = parseInt(f[t], 10) || 0;
                        return i + r
                    })),
                    n.browser.msie && (n(i).is(":hidden") || n(i).parents(":hidden").length))
                        continue;
                    else
                        t.css({
                            height: i.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: i.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
        },
        _renderProxy: function() {
            var u = this.element
              , f = this.options;
            if (this.elementOffset = u.offset(),
            this._helper) {
                this.helper = this.helper || n('<div style="overflow:hidden;"></div>');
                var t = n.browser.msie && n.browser.version < 7
                  , i = t ? 1 : 0
                  , r = t ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + r,
                    height: this.element.outerHeight() + r,
                    position: "absolute",
                    left: this.elementOffset.left - i + "px",
                    top: this.elementOffset.top - i + "px",
                    zIndex: ++f.zIndex
                }),
                this.helper.appendTo("body").disableSelection()
            } else
                this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var f = this.options
                  , r = this.originalSize
                  , u = this.originalPosition;
                return {
                    left: u.left + t,
                    width: r.width - t
                }
            },
            n: function(n, t, i) {
                var f = this.options
                  , r = this.originalSize
                  , u = this.originalPosition;
                return {
                    top: u.top + i,
                    height: r.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]),
            t != "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    n.extend(n.ui.resizable, {
        version: "1.8.20"
    }),
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var f = n(this).data("resizable")
              , r = f.options
              , u = function(t) {
                n(t).each(function() {
                    var t = n(this);
                    t.data("resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            typeof r.alsoResize == "object" && !r.alsoResize.parentNode ? r.alsoResize.length ? (r.alsoResize = r.alsoResize[0],
            u(r.alsoResize)) : n.each(r.alsoResize, function(n) {
                u(n)
            }) : u(r.alsoResize)
        },
        resize: function(t, i) {
            var r = n(this).data("resizable")
              , u = r.options
              , f = r.originalSize
              , e = r.originalPosition
              , s = {
                height: r.size.height - f.height || 0,
                width: r.size.width - f.width || 0,
                top: r.position.top - e.top || 0,
                left: r.position.left - e.left || 0
            }
              , o = function(t, r) {
                n(t).each(function() {
                    var t = n(this)
                      , f = n(this).data("resizable-alsoresize")
                      , u = {}
                      , e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    n.each(e, function(n, t) {
                        var i = (f[t] || 0) + (s[t] || 0);
                        i && i >= 0 && (u[t] = i || null)
                    }),
                    t.css(u)
                })
            };
            typeof u.alsoResize == "object" && !u.alsoResize.nodeType ? n.each(u.alsoResize, function(n, t) {
                o(n, t)
            }) : o(u.alsoResize)
        },
        stop: function() {
            n(this).removeData("resizable-alsoresize")
        }
    }),
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var r = n(this).data("resizable")
              , f = r.options
              , u = r._proportionallyResizeElements
              , e = u.length && /textarea/i.test(u[0].nodeName)
              , h = e && n.ui.hasScroll(u[0], "left") ? 0 : r.sizeDiff.height
              , c = e ? 0 : r.sizeDiff.width
              , l = {
                width: r.size.width - c,
                height: r.size.height - h
            }
              , o = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null
              , s = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
            r.element.animate(n.extend(l, s && o ? {
                top: s,
                left: o
            } : {}), {
                duration: f.animateDuration,
                easing: f.animateEasing,
                step: function() {
                    var i = {
                        width: parseInt(r.element.css("width"), 10),
                        height: parseInt(r.element.css("height"), 10),
                        top: parseInt(r.element.css("top"), 10),
                        left: parseInt(r.element.css("left"), 10)
                    };
                    u && u.length && n(u[0]).css({
                        width: i.width,
                        height: i.height
                    }),
                    r._updateCache(i),
                    r._propagate("resize", t)
                }
            })
        }
    }),
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var u = n(this).data("resizable"), c = u.options, l = u.element, e = c.containment, f = e instanceof n ? e.get(0) : /parent/.test(e) ? l.parent().get(0) : e, o, s;
            if (f)
                if (u.containerElement = n(f),
                /document/.test(e) || e == document)
                    u.containerOffset = {
                        left: 0,
                        top: 0
                    },
                    u.containerPosition = {
                        left: 0,
                        top: 0
                    },
                    u.parentData = {
                        element: n(document),
                        left: 0,
                        top: 0,
                        width: n(document).width(),
                        height: n(document).height() || document.body.parentNode.scrollHeight
                    };
                else {
                    o = n(f),
                    s = [],
                    n(["Top", "Right", "Left", "Bottom"]).each(function(n, t) {
                        s[n] = r(o.css("padding" + t))
                    }),
                    u.containerOffset = o.offset(),
                    u.containerPosition = o.position(),
                    u.containerSize = {
                        height: o.innerHeight() - s[3],
                        width: o.innerWidth() - s[1]
                    };
                    var h = u.containerOffset
                      , a = u.containerSize.height
                      , v = u.containerSize.width
                      , y = n.ui.hasScroll(f, "left") ? f.scrollWidth : v
                      , p = n.ui.hasScroll(f) ? f.scrollHeight : a;
                    u.parentData = {
                        element: f,
                        left: h.left,
                        top: h.top,
                        width: y,
                        height: p
                    }
                }
        },
        resize: function(t) {
            var r = n(this).data("resizable")
              , l = r.options
              , y = r.containerSize
              , u = r.containerOffset
              , p = r.size
              , s = r.position
              , e = r._aspectRatio || t.shiftKey
              , f = {
                top: 0,
                left: 0
            }
              , h = r.containerElement;
            h[0] != document && /static/.test(h.css("position")) && (f = u),
            s.left < (r._helper ? u.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - u.left : r.position.left - f.left),
            e && (r.size.height = r.size.width / r.aspectRatio),
            r.position.left = l.helper ? u.left : 0),
            s.top < (r._helper ? u.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - u.top : r.position.top),
            e && (r.size.width = r.size.height * r.aspectRatio),
            r.position.top = r._helper ? u.top : 0),
            r.offset.left = r.parentData.left + r.position.left,
            r.offset.top = r.parentData.top + r.position.top;
            var o = Math.abs((r._helper ? r.offset.left - f.left : r.offset.left - f.left) + r.sizeDiff.width)
              , c = Math.abs((r._helper ? r.offset.top - f.top : r.offset.top - u.top) + r.sizeDiff.height)
              , a = r.containerElement.get(0) == r.element.parent().get(0)
              , v = /relative|absolute/.test(r.containerElement.css("position"));
            a && v && (o -= r.parentData.left),
            o + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - o,
            e && (r.size.height = r.size.width / r.aspectRatio)),
            c + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - c,
            e && (r.size.width = r.size.height * r.aspectRatio))
        },
        stop: function() {
            var r = n(this).data("resizable")
              , f = r.options
              , a = r.position
              , e = r.containerOffset
              , o = r.containerPosition
              , s = r.containerElement
              , u = n(r.helper)
              , h = u.offset()
              , c = u.outerWidth() - r.sizeDiff.width
              , l = u.outerHeight() - r.sizeDiff.height;
            r._helper && !f.animate && /relative/.test(s.css("position")) && n(this).css({
                left: h.left - o.left - e.left,
                width: c,
                height: l
            }),
            r._helper && !f.animate && /static/.test(s.css("position")) && n(this).css({
                left: h.left - o.left - e.left,
                width: c,
                height: l
            })
        }
    }),
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var r = n(this).data("resizable")
              , u = r.options
              , f = r.size;
            r.ghost = r.originalElement.clone(),
            r.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: f.height,
                width: f.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof u.ghost == "string" ? u.ghost : ""),
            r.ghost.appendTo(r.helper)
        },
        resize: function() {
            var r = n(this).data("resizable")
              , u = r.options;
            r.ghost && r.ghost.css({
                position: "relative",
                height: r.size.height,
                width: r.size.width
            })
        },
        stop: function() {
            var r = n(this).data("resizable")
              , u = r.options;
            r.ghost && r.helper && r.helper.get(0).removeChild(r.ghost.get(0))
        }
    }),
    n.ui.plugin.add("resizable", "grid", {
        resize: function(t) {
            var r = n(this).data("resizable"), u = r.options, c = r.size, f = r.originalSize, s = r.originalPosition, h = r.axis, l = u._aspectRatio || t.shiftKey, e, o;
            u.grid = typeof u.grid == "number" ? [u.grid, u.grid] : u.grid,
            e = Math.round((c.width - f.width) / (u.grid[0] || 1)) * (u.grid[0] || 1),
            o = Math.round((c.height - f.height) / (u.grid[1] || 1)) * (u.grid[1] || 1),
            /^(se|s|e)$/.test(h) ? (r.size.width = f.width + e,
            r.size.height = f.height + o) : /^(ne)$/.test(h) ? (r.size.width = f.width + e,
            r.size.height = f.height + o,
            r.position.top = s.top - o) : /^(sw)$/.test(h) ? (r.size.width = f.width + e,
            r.size.height = f.height + o,
            r.position.left = s.left - e) : (r.size.width = f.width + e,
            r.size.height = f.height + o,
            r.position.top = s.top - o,
            r.position.left = s.left - e)
        }
    });
    var r = function(n) {
        return parseInt(n, 10) || 0
    }
      , i = function(n) {
        return !isNaN(parseInt(n, 10))
    }
}(jQuery),
function(n) {
    n.widget("ui.selectable", n.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var i = this, t;
            this.element.addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                t = n(i.options.filter, i.element[0]),
                t.addClass("ui-selectee"),
                t.each(function() {
                    var t = n(this)
                      , i = t.offset();
                    n.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }
            ,
            this.refresh(),
            this.selectees = t.addClass("ui-selectee"),
            this._mouseInit(),
            this.helper = n("<div class='ui-selectable-helper'></div>")
        },
        destroy: function() {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),
            this._mouseDestroy(),
            this
        },
        _mouseStart: function(t) {
            var r = this, i;
            (this.opos = [t.pageX, t.pageY],
            this.options.disabled) || (i = this.options,
            this.selectees = n(i.filter, this.element[0]),
            this._trigger("start", t),
            n(i.appendTo).append(this.helper),
            this.helper.css({
                left: t.clientX,
                top: t.clientY,
                width: 0,
                height: 0
            }),
            i.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var i = n.data(this, "selectable-item");
                i.startselected = !0,
                !t.metaKey && !t.ctrlKey && (i.$element.removeClass("ui-selected"),
                i.selected = !1,
                i.$element.addClass("ui-unselecting"),
                i.unselecting = !0,
                r._trigger("unselecting", t, {
                    unselecting: i.element
                }))
            }),
            n(t.target).parents().andSelf().each(function() {
                var i = n.data(this, "selectable-item"), u;
                if (i)
                    return u = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"),
                    i.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"),
                    i.unselecting = !u,
                    i.selecting = u,
                    i.selected = u,
                    u ? r._trigger("selecting", t, {
                        selecting: i.element
                    }) : r._trigger("unselecting", t, {
                        unselecting: i.element
                    }),
                    !1
            }))
        },
        _mouseDrag: function(t) {
            var e = this, o;
            if (this.dragged = !0,
            !this.options.disabled) {
                var s = this.options
                  , i = this.opos[0]
                  , r = this.opos[1]
                  , u = t.pageX
                  , f = t.pageY;
                return i > u && (o = u,
                u = i,
                i = o),
                r > f && (o = f,
                f = r,
                r = o),
                this.helper.css({
                    left: i,
                    top: r,
                    width: u - i,
                    height: f - r
                }),
                this.selectees.each(function() {
                    var o = n.data(this, "selectable-item"), h;
                    o && o.element != e.element[0] && (h = !1,
                    s.tolerance == "touch" ? h = !(o.left > u || o.right < i || o.top > f || o.bottom < r) : s.tolerance == "fit" && (h = o.left > i && o.right < u && o.top > r && o.bottom < f),
                    h ? (o.selected && (o.$element.removeClass("ui-selected"),
                    o.selected = !1),
                    o.unselecting && (o.$element.removeClass("ui-unselecting"),
                    o.unselecting = !1),
                    o.selecting || (o.$element.addClass("ui-selecting"),
                    o.selecting = !0,
                    e._trigger("selecting", t, {
                        selecting: o.element
                    }))) : (o.selecting && ((t.metaKey || t.ctrlKey) && o.startselected ? (o.$element.removeClass("ui-selecting"),
                    o.selecting = !1,
                    o.$element.addClass("ui-selected"),
                    o.selected = !0) : (o.$element.removeClass("ui-selecting"),
                    o.selecting = !1,
                    o.startselected && (o.$element.addClass("ui-unselecting"),
                    o.unselecting = !0),
                    e._trigger("unselecting", t, {
                        unselecting: o.element
                    }))),
                    o.selected && !t.metaKey && !t.ctrlKey && !o.startselected && (o.$element.removeClass("ui-selected"),
                    o.selected = !1,
                    o.$element.addClass("ui-unselecting"),
                    o.unselecting = !0,
                    e._trigger("unselecting", t, {
                        unselecting: o.element
                    }))))
                }),
                !1
            }
        },
        _mouseStop: function(t) {
            var i = this, r;
            return this.dragged = !1,
            r = this.options,
            n(".ui-unselecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"),
                r.unselecting = !1,
                r.startselected = !1,
                i._trigger("unselected", t, {
                    unselected: r.element
                })
            }),
            n(".ui-selecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"),
                r.selecting = !1,
                r.selected = !0,
                r.startselected = !0,
                i._trigger("selected", t, {
                    selected: r.element
                })
            }),
            this._trigger("stop", t),
            this.helper.remove(),
            !1
        }
    }),
    n.extend(n.ui.selectable, {
        version: "1.8.20"
    })
}(jQuery),
function(n) {
    n.widget("ui.sortable", n.ui.mouse, {
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var n = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? n.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1,
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        destroy: function() {
            n.Widget.prototype.destroy.call(this),
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, i) {
            t === "disabled" ? (this.options[t] = i,
            this.widget()[i ? "addClass" : "removeClass"]("ui-sortable-disabled")) : n.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, i) {
            var f = this, u;
            if (this.reverting || this.options.disabled || this.options.type == "static")
                return !1;
            this._refreshItems(t);
            var r = null
              , e = this
              , o = n(t.target).parents().each(function() {
                if (n.data(this, f.widgetName + "-item") == e)
                    return r = n(this),
                    !1
            });
            return (n.data(t.target, f.widgetName + "-item") == e && (r = n(t.target)),
            !r) ? !1 : this.options.handle && !i && (u = !1,
            n(this.options.handle, r).find("*").andSelf().each(function() {
                this == t.target && (u = !0)
            }),
            !u) ? !1 : (this.currentItem = r,
            this._removeCurrentsFromItems(),
            !0)
        },
        _mouseStart: function(t, i, r) {
            var u = this.options, e = this, f;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(t),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] != this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            u.containment && this._setContainment(),
            u.cursor && (n("body").css("cursor") && (this._storedCursor = n("body").css("cursor")),
            n("body").css("cursor", u.cursor)),
            u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", u.opacity)),
            u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", u.zIndex)),
            this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", t, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !r)
                for (f = this.containers.length - 1; f >= 0; f--)
                    this.containers[f]._trigger("activate", t, e._uiHash(this));
            return n.ui.ddmanager && (n.ui.ddmanager.current = this),
            n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var i, r, u;
            for (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (i = this.options,
            r = !1,
            this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)),
            t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))),
            r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && this.options.axis == "y" || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && this.options.axis == "x" || (this.helper[0].style.top = this.position.top + "px"),
            u = this.items.length - 1; u >= 0; u--) {
                var f = this.items[u]
                  , e = f.item[0]
                  , o = this._intersectsWithPointer(f);
                if (o && e != this.currentItem[0] && this.placeholder[o == 1 ? "next" : "prev"]()[0] != e && !n.ui.contains(this.placeholder[0], e) && (this.options.type == "semi-dynamic" ? !n.ui.contains(this.element[0], e) : !0)) {
                    if (this.direction = o == 1 ? "down" : "up",
                    this.options.tolerance == "pointer" || this._intersectsWithSides(f))
                        this._rearrange(t, f);
                    else
                        break;
                    this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t),
                this.options.revert) {
                    var r = this
                      , u = r.placeholder.offset();
                    r.reverting = !0,
                    n(this.helper).animate({
                        left: u.left - this.offset.parent.left - r.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: u.top - this.offset.parent.top - r.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        r._clear(t)
                    })
                } else
                    this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            var i = this, t;
            if (this.dragging)
                for (this._mouseUp({
                    target: null
                }),
                this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(),
                t = this.containers.length - 1; t >= 0; t--)
                    this.containers[t]._trigger("deactivate", null, i._uiHash(this)),
                    this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, i._uiHash(this)),
                    this.containers[t].containerCache.over = 0);
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(),
            n.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            n(r).each(function() {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
            }),
            !i.length && t.key && i.push(t.key + "="),
            i.join("&")
        },
        toArray: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            r.each(function() {
                i.push(n(t.item || this).attr(t.attribute || "id") || "")
            }),
            i
        },
        _intersectsWith: function(n) {
            var t = this.positionAbs.left
              , h = t + this.helperProportions.width
              , i = this.positionAbs.top
              , c = i + this.helperProportions.height
              , r = n.left
              , f = r + n.width
              , u = n.top
              , e = u + n.height
              , o = this.offset.click.top
              , s = this.offset.click.left
              , l = i + o > u && i + o < e && t + s > r && t + s < f;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? l : r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
        },
        _intersectsWithPointer: function(t) {
            var u = this.options.axis === "x" || n.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height)
              , f = this.options.axis === "y" || n.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width)
              , e = u && f
              , i = this._getDragVerticalDirection()
              , r = this._getDragHorizontalDirection();
            return e ? this.floating ? r && r == "right" || i == "down" ? 2 : 1 : i && (i == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var u = n.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
              , f = n.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
              , i = this._getDragVerticalDirection()
              , r = this._getDragHorizontalDirection();
            return this.floating && r ? r == "right" && f || r == "left" && !f : i && (i == "down" && u || i == "up" && !u)
        },
        _getDragVerticalDirection: function() {
            var n = this.positionAbs.top - this.lastPositionAbs.top;
            return n != 0 && (n > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var n = this.positionAbs.left - this.lastPositionAbs.left;
            return n != 0 && (n > 0 ? "right" : "left")
        },
        refresh: function(n) {
            return this._refreshItems(n),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var n = this.options;
            return n.connectWith.constructor == String ? [n.connectWith] : n.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var h = this, s = [], u = [], e = this._connectWith(), o, f, i, r;
            if (e && t)
                for (r = e.length - 1; r >= 0; r--)
                    for (o = n(e[r]),
                    f = o.length - 1; f >= 0; f--)
                        i = n.data(o[f], this.widgetName),
                        i && i != this && !i.options.disabled && u.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
            for (u.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            r = u.length - 1; r >= 0; r--)
                u[r][0].each(function() {
                    s.push(this)
                });
            return n(s)
        },
        _removeCurrentsFromItems: function() {
            for (var i = this.currentItem.find(":data(" + this.widgetName + "-item)"), t, n = 0; n < this.items.length; n++)
                for (t = 0; t < i.length; t++)
                    i[t] == this.items[n].item[0] && this.items.splice(n, 1)
        },
        _refreshItems: function(t) {
            var o, i, r, s, h, u, l, c;
            this.items = [],
            this.containers = [this];
            var a = this.items
              , v = this
              , f = [[n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : n(this.options.items, this.element), this]]
              , e = this._connectWith();
            if (e && this.ready)
                for (r = e.length - 1; r >= 0; r--)
                    for (o = n(e[r]),
                    u = o.length - 1; u >= 0; u--)
                        i = n.data(o[u], this.widgetName),
                        i && i != this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                            item: this.currentItem
                        }) : n(i.options.items, i.element), i]),
                        this.containers.push(i));
            for (r = f.length - 1; r >= 0; r--)
                for (s = f[r][1],
                h = f[r][0],
                u = 0,
                l = h.length; u < l; u++)
                    c = n(h[u]),
                    c.data(this.widgetName + "-item", s),
                    a.push({
                        item: c,
                        instance: s,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(t) {
            var r, f, i, u;
            for (this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
            i = this.items.length - 1; i >= 0; i--)
                (r = this.items[i],
                r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item,
                t || (r.width = f.outerWidth(),
                r.height = f.outerHeight()),
                u = f.offset(),
                r.left = u.left,
                r.top = u.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    u = this.containers[i].element.offset(),
                    this.containers[i].containerCache.left = u.left,
                    this.containers[i].containerCache.top = u.top,
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            var i = t || this, r = i.options, u;
            r.placeholder && r.placeholder.constructor != String || (u = r.placeholder,
            r.placeholder = {
                element: function() {
                    var t = n(document.createElement(i.currentItem[0].nodeName)).addClass(u || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                    return u || (t.style.visibility = "hidden"),
                    t
                },
                update: function(n, t) {
                    (!u || r.forcePlaceholderSize) && (t.height() || t.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)),
                    t.width() || t.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            i.placeholder = n(r.placeholder.element.call(i.element, i.currentItem)),
            i.currentItem.after(i.placeholder),
            r.placeholder.update(i, i.placeholder)
        },
        _contactContainers: function(t) {
            for (var f = null, i = null, u, o, r = this.containers.length - 1; r >= 0; r--)
                if (!n.ui.contains(this.currentItem[0], this.containers[r].element[0]))
                    if (this._intersectsWith(this.containers[r].containerCache)) {
                        if (f && n.ui.contains(this.containers[r].element[0], f.element[0]))
                            continue;
                        f = this.containers[r],
                        i = r
                    } else
                        this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)),
                        this.containers[r].containerCache.over = 0);
            if (f)
                if (this.containers.length === 1)
                    this.containers[i]._trigger("over", t, this._uiHash(this)),
                    this.containers[i].containerCache.over = 1;
                else if (this.currentContainer != this.containers[i]) {
                    var s = 1e4
                      , e = null
                      , h = this.positionAbs[this.containers[i].floating ? "left" : "top"];
                    for (u = this.items.length - 1; u >= 0; u--)
                        n.ui.contains(this.containers[i].element[0], this.items[u].item[0]) && (o = this.items[u][this.containers[i].floating ? "left" : "top"],
                        Math.abs(o - h) < s && (s = Math.abs(o - h),
                        e = this.items[u]));
                    if (!e && !this.options.dropOnEmpty)
                        return;
                    this.currentContainer = this.containers[i],
                    e ? this._rearrange(t, e, null, !0) : this._rearrange(t, null, this.containers[i].element, !0),
                    this._trigger("change", t, this._uiHash()),
                    this.containers[i]._trigger("change", t, this._uiHash(this)),
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[i]._trigger("over", t, this._uiHash(this)),
                    this.containers[i].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var r = this.options
              , i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || n(r.appendTo != "parent" ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]),
            i[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (i[0].style.width == "" || r.forceHelperSize) && i.width(this.currentItem.width()),
            (i[0].style.height == "" || r.forceHelperSize) && i.height(this.currentItem.height()),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")),
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return this.cssPosition == "absolute" && this.scrollParent[0] != document && n.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && n.browser.msie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var n = this.currentItem.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var i = this.options;
            if (i.containment == "parent" && (i.containment = this.helper[0].parentNode),
            (i.containment == "document" || i.containment == "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n(i.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (n(i.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            !/^(document|window|parent)$/.test(i.containment)) {
                var t = n(i.containment)[0]
                  , r = n(i.containment).offset()
                  , u = n(t).css("overflow") != "hidden";
                this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = t == "absolute" ? 1 : -1
              , e = this.options
              , u = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
              , f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (n.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r),
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (n.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r)
            }
        },
        _generatePosition: function(t) {
            var i = this.options, o = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !n.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, s = /(html|body)/i.test(o[0].tagName), f, e, r, u;
            return this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()),
            f = t.pageX,
            e = t.pageY,
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)),
            i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1],
            e = this.containment ? r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3] ? r - this.offset.click.top < this.containment[1] ? r + i.grid[1] : r - i.grid[1] : r : r,
            u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0],
            f = this.containment ? u - this.offset.click.left < this.containment[0] || u - this.offset.click.left > this.containment[2] ? u - this.offset.click.left < this.containment[0] ? u + i.grid[0] : u - i.grid[0] : u : u)),
            {
                top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (n.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (n.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(n, t, i, r) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var u = this
              , f = this.counter;
            window.setTimeout(function() {
                f == u.counter && u.refreshPositions(!r)
            }, 0)
        },
        _clear: function(t, i) {
            var u, f, r;
            if (this.reverting = !1,
            u = [],
            f = this,
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] == this.currentItem[0]) {
                for (r in this._storedCSS)
                    (this._storedCSS[r] == "auto" || this._storedCSS[r] == "static") && (this._storedCSS[r] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            if (this.fromOutside && !i && u.push(function(n) {
                this._trigger("receive", n, this._uiHash(this.fromOutside))
            }),
            (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !i && u.push(function(n) {
                this._trigger("update", n, this._uiHash())
            }),
            !n.ui.contains(this.element[0], this.currentItem[0]))
                for (i || u.push(function(n) {
                    this._trigger("remove", n, this._uiHash())
                }),
                r = this.containers.length - 1; r >= 0; r--)
                    n.ui.contains(this.containers[r].element[0], this.currentItem[0]) && !i && (u.push(function(n) {
                        return function(t) {
                            n._trigger("receive", t, this._uiHash(this))
                        }
                    }
                    .call(this, this.containers[r])),
                    u.push(function(n) {
                        return function(t) {
                            n._trigger("update", t, this._uiHash(this))
                        }
                    }
                    .call(this, this.containers[r])));
            for (r = this.containers.length - 1; r >= 0; r--)
                i || u.push(function(n) {
                    return function(t) {
                        n._trigger("deactivate", t, this._uiHash(this))
                    }
                }
                .call(this, this.containers[r])),
                this.containers[r].containerCache.over && (u.push(function(n) {
                    return function(t) {
                        n._trigger("out", t, this._uiHash(this))
                    }
                }
                .call(this, this.containers[r])),
                this.containers[r].containerCache.over = 0);
            if (this._storedCursor && n("body").css("cursor", this._storedCursor),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex),
            this.dragging = !1,
            this.cancelHelperRemoval) {
                if (!i) {
                    for (this._trigger("beforeStop", t, this._uiHash()),
                    r = 0; r < u.length; r++)
                        u[r].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return !1
            }
            if (i || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.helper[0] != this.currentItem[0] && this.helper.remove(),
            this.helper = null,
            !i) {
                for (r = 0; r < u.length; r++)
                    u[r].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || n([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    }),
    n.extend(n.ui.sortable, {
        version: "1.8.20"
    })
}(jQuery),
jQuery.effects || function(n, t) {
    function u(t) {
        var i;
        return t && t.constructor == Array && t.length == 3 ? t : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)] : (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [parseFloat(i[1]) * 2.55, parseFloat(i[2]) * 2.55, parseFloat(i[3]) * 2.55] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16)] : (i = /rgba\(0, 0, 0, 0\)/.exec(t)) ? o.transparent : o[n.trim(t).toLowerCase()]
    }
    function h(t, i) {
        var r;
        do {
            if (r = n.curCSS(t, i),
            r != "" && r != "transparent" || n.nodeName(t, "body"))
                break;
            i = "backgroundColor"
        } while (t = t.parentNode);
        return u(r)
    }
    function f() {
        var n = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle, i = {}, t, u, r;
        if (n && n.length && n[0] && n[n[0]])
            for (r = n.length; r--; )
                t = n[r],
                typeof n[t] == "string" && (u = t.replace(/\-(\w)/g, function(n, t) {
                    return t.toUpperCase()
                }),
                i[u] = n[t]);
        else
            for (t in n)
                typeof n[t] == "string" && (i[t] = n[t]);
        return i
    }
    function e(t) {
        var i, r;
        for (i in t)
            r = t[i],
            (r == null || n.isFunction(r) || i in l || /scrollbar/.test(i) || !/color/i.test(i) && isNaN(parseFloat(r))) && delete t[i];
        return t
    }
    function c(n, t) {
        var r = {
            _: 0
        }, i;
        for (i in t)
            n[i] != t[i] && (r[i] = t[i]);
        return r
    }
    function i(t, i, r, u) {
        return typeof t == "object" && (u = i,
        r = null,
        i = t,
        t = i.effect),
        n.isFunction(i) && (u = i,
        r = null,
        i = {}),
        (typeof i == "number" || n.fx.speeds[i]) && (u = r,
        r = i,
        i = {}),
        n.isFunction(r) && (u = r,
        r = null),
        i = i || {},
        r = r || i.duration,
        r = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default,
        u = u || i.complete,
        [t, i, r, u]
    }
    function r(t) {
        return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects[t] ? !0 : !1
    }
    n.effects = {},
    n.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(t, i) {
        n.fx.step[i] = function(n) {
            n.colorInit || (n.start = h(n.elem, i),
            n.end = u(n.end),
            n.colorInit = !0),
            n.elem.style[i] = "rgb(" + Math.max(Math.min(parseInt(n.pos * (n.end[0] - n.start[0]) + n.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(n.pos * (n.end[1] - n.start[1]) + n.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(n.pos * (n.end[2] - n.start[2]) + n.start[2], 10), 255), 0) + ")"
        }
    });
    var o = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }
      , s = ["add", "remove", "toggle"]
      , l = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
    };
    n.effects.animateClass = function(t, i, r, u) {
        return n.isFunction(r) && (u = r,
        r = null),
        this.queue(function() {
            var o = n(this), h = o.attr("style") || " ", a = e(f.call(this)), l, v = o.attr("class") || "";
            n.each(s, function(n, i) {
                t[i] && o[i + "Class"](t[i])
            }),
            l = e(f.call(this)),
            o.attr("class", v),
            o.animate(c(a, l), {
                queue: !1,
                duration: i,
                easing: r,
                complete: function() {
                    n.each(s, function(n, i) {
                        t[i] && o[i + "Class"](t[i])
                    }),
                    typeof o.attr("style") == "object" ? (o.attr("style").cssText = "",
                    o.attr("style").cssText = h) : o.attr("style", h),
                    u && u.apply(this, arguments),
                    n.dequeue(this)
                }
            })
        })
    }
    ,
    n.fn.extend({
        _addClass: n.fn.addClass,
        addClass: function(t, i, r, u) {
            return i ? n.effects.animateClass.apply(this, [{
                add: t
            }, i, r, u]) : this._addClass(t)
        },
        _removeClass: n.fn.removeClass,
        removeClass: function(t, i, r, u) {
            return i ? n.effects.animateClass.apply(this, [{
                remove: t
            }, i, r, u]) : this._removeClass(t)
        },
        _toggleClass: n.fn.toggleClass,
        toggleClass: function(i, r, u, f, e) {
            return typeof r == "boolean" || r === t ? u ? n.effects.animateClass.apply(this, [r ? {
                add: i
            } : {
                remove: i
            }, u, f, e]) : this._toggleClass(i, r) : n.effects.animateClass.apply(this, [{
                toggle: i
            }, r, u, f])
        },
        switchClass: function(t, i, r, u, f) {
            return n.effects.animateClass.apply(this, [{
                add: i,
                remove: t
            }, r, u, f])
        }
    }),
    n.extend(n.effects, {
        version: "1.8.20",
        save: function(n, t) {
            for (var i = 0; i < t.length; i++)
                t[i] !== null && n.data("ec.storage." + t[i], n[0].style[t[i]])
        },
        restore: function(n, t) {
            for (var i = 0; i < t.length; i++)
                t[i] !== null && n.css(t[i], n.data("ec.storage." + t[i]))
        },
        setMode: function(n, t) {
            return t == "toggle" && (t = n.is(":hidden") ? "show" : "hide"),
            t
        },
        getBaseline: function(n, t) {
            var i, r;
            switch (n[0]) {
            case "top":
                i = 0;
                break;
            case "middle":
                i = .5;
                break;
            case "bottom":
                i = 1;
                break;
            default:
                i = n[0] / t.height
            }
            switch (n[1]) {
            case "left":
                r = 0;
                break;
            case "center":
                r = .5;
                break;
            case "right":
                r = 1;
                break;
            default:
                r = n[1] / t.width
            }
            return {
                x: r,
                y: i
            }
        },
        createWrapper: function(t) {
            if (t.parent().is(".ui-effects-wrapper"))
                return t.parent();
            var i = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                float: t.css("float")
            }
              , r = n("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            })
              , u = document.activeElement;
            return t.wrap(r),
            (t[0] === u || n.contains(t[0], u)) && n(u).focus(),
            r = t.parent(),
            t.css("position") == "static" ? (r.css({
                position: "relative"
            }),
            t.css({
                position: "relative"
            })) : (n.extend(i, {
                position: t.css("position"),
                zIndex: t.css("z-index")
            }),
            n.each(["top", "left", "bottom", "right"], function(n, r) {
                i[r] = t.css(r),
                isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
            }),
            t.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })),
            r.css(i).show()
        },
        removeWrapper: function(t) {
            var r, i = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") ? (r = t.parent().replaceWith(t),
            (t[0] === i || n.contains(t[0], i)) && n(i).focus(),
            r) : t
        },
        setTransition: function(t, i, r, u) {
            return u = u || {},
            n.each(i, function(n, i) {
                var f = t.cssUnit(i);
                f[0] > 0 && (u[i] = f[0] * r + f[1])
            }),
            u
        }
    }),
    n.fn.extend({
        effect: function(t) {
            var o = i.apply(this, arguments)
              , e = {
                options: o[1],
                duration: o[2],
                callback: o[3]
            }
              , s = e.options.mode
              , h = n.effects[t];
            return n.fx.off || !h ? s ? this[s](e.duration, e.callback) : this.each(function() {
                e.callback && e.callback.call(this)
            }) : h.call(this, e)
        },
        _show: n.fn.show,
        show: function(n) {
            if (r(n))
                return this._show.apply(this, arguments);
            var t = i.apply(this, arguments);
            return t[1].mode = "show",
            this.effect.apply(this, t)
        },
        _hide: n.fn.hide,
        hide: function(n) {
            if (r(n))
                return this._hide.apply(this, arguments);
            var t = i.apply(this, arguments);
            return t[1].mode = "hide",
            this.effect.apply(this, t)
        },
        __toggle: n.fn.toggle,
        toggle: function(t) {
            if (r(t) || typeof t == "boolean" || n.isFunction(t))
                return this.__toggle.apply(this, arguments);
            var u = i.apply(this, arguments);
            return u[1].mode = "toggle",
            this.effect.apply(this, u)
        },
        cssUnit: function(t) {
            var i = this.css(t)
              , r = [];
            return n.each(["em", "px", "%", "pt"], function(n, t) {
                i.indexOf(t) > 0 && (r = [parseFloat(i), t])
            }),
            r
        }
    }),
    n.easing.jswing = n.easing.swing,
    n.extend(n.easing, {
        def: "easeOutQuad",
        swing: function(t, i, r, u, f) {
            return n.easing[n.easing.def](t, i, r, u, f)
        },
        easeInQuad: function(n, t, i, r, u) {
            return r * (t /= u) * t + i
        },
        easeOutQuad: function(n, t, i, r, u) {
            return -r * (t /= u) * (t - 2) + i
        },
        easeInOutQuad: function(n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t + i : -r / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function(n, t, i, r, u) {
            return r * (t /= u) * t * t + i
        },
        easeOutCubic: function(n, t, i, r, u) {
            return r * ((t = t / u - 1) * t * t + 1) + i
        },
        easeInOutCubic: function(n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function(n, t, i, r, u) {
            return r * (t /= u) * t * t * t + i
        },
        easeOutQuart: function(n, t, i, r, u) {
            return -r * ((t = t / u - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function(n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t * t * t + i : -r / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function(n, t, i, r, u) {
            return r * (t /= u) * t * t * t * t + i
        },
        easeOutQuint: function(n, t, i, r, u) {
            return r * ((t = t / u - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function(n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function(n, t, i, r, u) {
            return -r * Math.cos(t / u * (Math.PI / 2)) + r + i
        },
        easeOutSine: function(n, t, i, r, u) {
            return r * Math.sin(t / u * (Math.PI / 2)) + i
        },
        easeInOutSine: function(n, t, i, r, u) {
            return -r / 2 * (Math.cos(Math.PI * t / u) - 1) + i
        },
        easeInExpo: function(n, t, i, r, u) {
            return t == 0 ? i : r * Math.pow(2, 10 * (t / u - 1)) + i
        },
        easeOutExpo: function(n, t, i, r, u) {
            return t == u ? i + r : r * (-Math.pow(2, -10 * t / u) + 1) + i
        },
        easeInOutExpo: function(n, t, i, r, u) {
            return t == 0 ? i : t == u ? i + r : (t /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * (-Math.pow(2, -10 * --t) + 2) + i
        },
        easeInCirc: function(n, t, i, r, u) {
            return -r * (Math.sqrt(1 - (t /= u) * t) - 1) + i
        },
        easeOutCirc: function(n, t, i, r, u) {
            return r * Math.sqrt(1 - (t = t / u - 1) * t) + i
        },
        easeInOutCirc: function(n, t, i, r, u) {
            return (t /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function(n, t, i, r, u) {
            var o = 1.70158
              , f = 0
              , e = r;
            return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3),
            e < Math.abs(r) ? (e = r,
            o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e),
            -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f)) + i)
        },
        easeOutElastic: function(n, t, i, r, u) {
            var o = 1.70158
              , f = 0
              , e = r;
            return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3),
            e < Math.abs(r) ? (e = r,
            o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e),
            e * Math.pow(2, -10 * t) * Math.sin((t * u - o) * 2 * Math.PI / f) + r + i)
        },
        easeInOutElastic: function(n, t, i, r, u) {
            var o = 1.70158
              , f = 0
              , e = r;
            return t == 0 ? i : (t /= u / 2) == 2 ? i + r : (f || (f = u * .3 * 1.5),
            e < Math.abs(r) ? (e = r,
            o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e),
            t < 1 ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) + i : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) * .5 + r + i)
        },
        easeInBack: function(n, i, r, u, f, e) {
            return e == t && (e = 1.70158),
            u * (i /= f) * i * ((e + 1) * i - e) + r
        },
        easeOutBack: function(n, i, r, u, f, e) {
            return e == t && (e = 1.70158),
            u * ((i = i / f - 1) * i * ((e + 1) * i + e) + 1) + r
        },
        easeInOutBack: function(n, i, r, u, f, e) {
            return e == t && (e = 1.70158),
            (i /= f / 2) < 1 ? u / 2 * i * i * (((e *= 1.525) + 1) * i - e) + r : u / 2 * ((i -= 2) * i * (((e *= 1.525) + 1) * i + e) + 2) + r
        },
        easeInBounce: function(t, i, r, u, f) {
            return u - n.easing.easeOutBounce(t, f - i, 0, u, f) + r
        },
        easeOutBounce: function(n, t, i, r, u) {
            return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function(t, i, r, u, f) {
            return i < f / 2 ? n.easing.easeInBounce(t, i * 2, 0, u, f) * .5 + r : n.easing.easeOutBounce(t, i * 2 - f, 0, u, f) * .5 + u * .5 + r
        }
    })
}(jQuery),
function(n) {
    n.effects.blind = function(t) {
        return this.queue(function() {
            var i = n(this), e = ["position", "top", "bottom", "left", "right"], u = n.effects.setMode(i, t.options.mode || "hide"), o = t.options.direction || "vertical", f;
            n.effects.save(i, e),
            i.show();
            var r = n.effects.createWrapper(i).css({
                overflow: "hidden"
            })
              , s = o == "vertical" ? "height" : "width"
              , h = o == "vertical" ? r.height() : r.width();
            u == "show" && r.css(s, 0),
            f = {},
            f[s] = u == "show" ? h : 0,
            r.animate(f, t.duration, t.options.easing, function() {
                u == "hide" && i.hide(),
                n.effects.restore(i, e),
                n.effects.removeWrapper(i),
                t.callback && t.callback.apply(i[0], arguments),
                i.dequeue()
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.bounce = function(t) {
        return this.queue(function() {
            var i = n(this), l = ["position", "top", "bottom", "left", "right"], f = n.effects.setMode(i, t.options.mode || "effect"), a = t.options.direction || "up", r = t.options.distance || 20, v = t.options.times || 5, o = t.duration || 250, y, s, h, c;
            /show|hide/.test(f) && l.push("opacity"),
            n.effects.save(i, l),
            i.show(),
            n.effects.createWrapper(i);
            var u = a == "up" || a == "down" ? "top" : "left"
              , e = a == "up" || a == "left" ? "pos" : "neg"
              , r = t.options.distance || (u == "top" ? i.outerHeight({
                margin: !0
            }) / 3 : i.outerWidth({
                margin: !0
            }) / 3);
            for (f == "show" && i.css("opacity", 0).css(u, e == "pos" ? -r : r),
            f == "hide" && (r = r / (v * 2)),
            f != "hide" && v--,
            f == "show" && (s = {
                opacity: 1
            },
            s[u] = (e == "pos" ? "+=" : "-=") + r,
            i.animate(s, o / 2, t.options.easing),
            r = r / 2,
            v--),
            y = 0; y < v; y++)
                h = {},
                c = {},
                h[u] = (e == "pos" ? "-=" : "+=") + r,
                c[u] = (e == "pos" ? "+=" : "-=") + r,
                i.animate(h, o / 2, t.options.easing).animate(c, o / 2, t.options.easing),
                r = f == "hide" ? r * 2 : r / 2;
            f == "hide" ? (s = {
                opacity: 0
            },
            s[u] = (e == "pos" ? "-=" : "+=") + r,
            i.animate(s, o / 2, t.options.easing, function() {
                i.hide(),
                n.effects.restore(i, l),
                n.effects.removeWrapper(i),
                t.callback && t.callback.apply(this, arguments)
            })) : (h = {},
            c = {},
            h[u] = (e == "pos" ? "-=" : "+=") + r,
            c[u] = (e == "pos" ? "+=" : "-=") + r,
            i.animate(h, o / 2, t.options.easing).animate(c, o / 2, t.options.easing, function() {
                n.effects.restore(i, l),
                n.effects.removeWrapper(i),
                t.callback && t.callback.apply(this, arguments)
            })),
            i.queue("fx", function() {
                i.dequeue()
            }),
            i.dequeue()
        })
    }
}(jQuery),
function(n) {
    n.effects.clip = function(t) {
        return this.queue(function() {
            var i = n(this), h = ["position", "top", "bottom", "left", "right", "height", "width"], u = n.effects.setMode(i, t.options.mode || "hide"), o = t.options.direction || "vertical", e;
            n.effects.save(i, h),
            i.show();
            var c = n.effects.createWrapper(i).css({
                overflow: "hidden"
            })
              , r = i[0].tagName == "IMG" ? c : i
              , f = {
                size: o == "vertical" ? "height" : "width",
                position: o == "vertical" ? "top" : "left"
            }
              , s = o == "vertical" ? r.height() : r.width();
            u == "show" && (r.css(f.size, 0),
            r.css(f.position, s / 2)),
            e = {},
            e[f.size] = u == "show" ? s : 0,
            e[f.position] = u == "show" ? 0 : s / 2,
            r.animate(e, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    u == "hide" && i.hide(),
                    n.effects.restore(i, h),
                    n.effects.removeWrapper(i),
                    t.callback && t.callback.apply(i[0], arguments),
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.drop = function(t) {
        return this.queue(function() {
            var i = n(this), h = ["position", "top", "bottom", "left", "right", "opacity"], r = n.effects.setMode(i, t.options.mode || "hide"), u = t.options.direction || "left", s;
            n.effects.save(i, h),
            i.show(),
            n.effects.createWrapper(i);
            var f = u == "up" || u == "down" ? "top" : "left"
              , e = u == "up" || u == "left" ? "pos" : "neg"
              , o = t.options.distance || (f == "top" ? i.outerHeight({
                margin: !0
            }) / 2 : i.outerWidth({
                margin: !0
            }) / 2);
            r == "show" && i.css("opacity", 0).css(f, e == "pos" ? -o : o),
            s = {
                opacity: r == "show" ? 1 : 0
            },
            s[f] = (r == "show" ? e == "pos" ? "+=" : "-=" : e == "pos" ? "-=" : "+=") + o,
            i.animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    r == "hide" && i.hide(),
                    n.effects.restore(i, h),
                    n.effects.removeWrapper(i),
                    t.callback && t.callback.apply(this, arguments),
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.explode = function(t) {
        return this.queue(function() {
            var r = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3, u = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3, i, o, s, h, f, e;
            for (t.options.mode = t.options.mode == "toggle" ? n(this).is(":visible") ? "hide" : "show" : t.options.mode,
            i = n(this).show().css("visibility", "hidden"),
            o = i.offset(),
            o.top -= parseInt(i.css("marginTop"), 10) || 0,
            o.left -= parseInt(i.css("marginLeft"), 10) || 0,
            s = i.outerWidth(!0),
            h = i.outerHeight(!0),
            f = 0; f < r; f++)
                for (e = 0; e < u; e++)
                    i.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -e * (s / u),
                        top: -f * (h / r)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: s / u,
                        height: h / r,
                        left: o.left + e * (s / u) + (t.options.mode == "show" ? (e - Math.floor(u / 2)) * (s / u) : 0),
                        top: o.top + f * (h / r) + (t.options.mode == "show" ? (f - Math.floor(r / 2)) * (h / r) : 0),
                        opacity: t.options.mode == "show" ? 0 : 1
                    }).animate({
                        left: o.left + e * (s / u) + (t.options.mode == "show" ? 0 : (e - Math.floor(u / 2)) * (s / u)),
                        top: o.top + f * (h / r) + (t.options.mode == "show" ? 0 : (f - Math.floor(r / 2)) * (h / r)),
                        opacity: t.options.mode == "show" ? 1 : 0
                    }, t.duration || 500);
            setTimeout(function() {
                t.options.mode == "show" ? i.css({
                    visibility: "visible"
                }) : i.css({
                    visibility: "visible"
                }).hide(),
                t.callback && t.callback.apply(i[0]),
                i.dequeue(),
                n("div.ui-effects-explode").remove()
            }, t.duration || 500)
        })
    }
}(jQuery),
function(n) {
    n.effects.fade = function(t) {
        return this.queue(function() {
            var i = n(this)
              , r = n.effects.setMode(i, t.options.mode || "hide");
            i.animate({
                opacity: r
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    t.callback && t.callback.apply(this, arguments),
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.fold = function(t) {
        return this.queue(function() {
            var i = n(this), h = ["position", "top", "bottom", "left", "right"], r = n.effects.setMode(i, t.options.mode || "hide"), f = t.options.size || 15, c = !!t.options.horizFirst, l = t.duration ? t.duration / 2 : n.fx.speeds._default / 2, o, s;
            n.effects.save(i, h),
            i.show();
            var u = n.effects.createWrapper(i).css({
                overflow: "hidden"
            })
              , a = r == "show" != c
              , v = a ? ["width", "height"] : ["height", "width"]
              , e = a ? [u.width(), u.height()] : [u.height(), u.width()]
              , y = /([0-9]+)%/.exec(f);
            y && (f = parseInt(y[1], 10) / 100 * e[r == "hide" ? 0 : 1]),
            r == "show" && u.css(c ? {
                height: 0,
                width: f
            } : {
                height: f,
                width: 0
            }),
            o = {},
            s = {},
            o[v[0]] = r == "show" ? e[0] : f,
            s[v[1]] = r == "show" ? e[1] : 0,
            u.animate(o, l, t.options.easing).animate(s, l, t.options.easing, function() {
                r == "hide" && i.hide(),
                n.effects.restore(i, h),
                n.effects.removeWrapper(i),
                t.callback && t.callback.apply(i[0], arguments),
                i.dequeue()
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.highlight = function(t) {
        return this.queue(function() {
            var i = n(this)
              , u = ["backgroundImage", "backgroundColor", "opacity"]
              , r = n.effects.setMode(i, t.options.mode || "show")
              , f = {
                backgroundColor: i.css("backgroundColor")
            };
            r == "hide" && (f.opacity = 0),
            n.effects.save(i, u),
            i.show().css({
                backgroundImage: "none",
                backgroundColor: t.options.color || "#ffff99"
            }).animate(f, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    r == "hide" && i.hide(),
                    n.effects.restore(i, u),
                    r == "show" && !n.support.opacity && this.style.removeAttribute("filter"),
                    t.callback && t.callback.apply(this, arguments),
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.pulsate = function(t) {
        return this.queue(function() {
            var i = n(this), e = n.effects.setMode(i, t.options.mode || "show"), o = (t.options.times || 5) * 2 - 1, s = t.duration ? t.duration / 2 : n.fx.speeds._default / 2, u = i.is(":visible"), r = 0, f;
            for (u || (i.css("opacity", 0).show(),
            r = 1),
            (e == "hide" && u || e == "show" && !u) && o--,
            f = 0; f < o; f++)
                i.animate({
                    opacity: r
                }, s, t.options.easing),
                r = (r + 1) % 2;
            i.animate({
                opacity: r
            }, s, t.options.easing, function() {
                r == 0 && i.hide(),
                t.callback && t.callback.apply(this, arguments)
            }),
            i.queue("fx", function() {
                i.dequeue()
            }).dequeue()
        })
    }
}(jQuery),
function(n) {
    n.effects.puff = function(t) {
        return this.queue(function() {
            var i = n(this)
              , r = n.effects.setMode(i, t.options.mode || "hide")
              , f = parseInt(t.options.percent, 10) || 150
              , e = f / 100
              , u = {
                height: i.height(),
                width: i.width()
            };
            n.extend(t.options, {
                fade: !0,
                mode: r,
                percent: r == "hide" ? f : 100,
                from: r == "hide" ? u : {
                    height: u.height * e,
                    width: u.width * e
                }
            }),
            i.effect("scale", t.options, t.duration, t.callback),
            i.dequeue()
        })
    }
    ,
    n.effects.scale = function(t) {
        return this.queue(function() {
            var i = n(this), r = n.extend(!0, {}, t.options), u = n.effects.setMode(i, t.options.mode || "effect"), o = parseInt(t.options.percent, 10) || (parseInt(t.options.percent, 10) == 0 ? 0 : u == "hide" ? 0 : 100), s = t.options.direction || "both", h = t.options.origin, f, e;
            u != "effect" && (r.origin = h || ["middle", "center"],
            r.restore = !0),
            f = {
                height: i.height(),
                width: i.width()
            },
            i.from = t.options.from || (u == "show" ? {
                height: 0,
                width: 0
            } : f),
            e = {
                y: s != "horizontal" ? o / 100 : 1,
                x: s != "vertical" ? o / 100 : 1
            },
            i.to = {
                height: f.height * e.y,
                width: f.width * e.x
            },
            t.options.fade && (u == "show" && (i.from.opacity = 0,
            i.to.opacity = 1),
            u == "hide" && (i.from.opacity = 1,
            i.to.opacity = 0)),
            r.from = i.from,
            r.to = i.to,
            r.mode = u,
            i.effect("size", r, t.duration, t.callback),
            i.dequeue()
        })
    }
    ,
    n.effects.size = function(t) {
        return this.queue(function() {
            var i = n(this), f = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], v = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], a = ["width", "height", "overflow"], c = ["fontSize"], e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = n.effects.setMode(i, t.options.mode || "effect"), l = t.options.restore || !1, s = t.options.scale || "both", y = t.options.origin, u = {
                height: i.height(),
                width: i.width()
            }, h, r;
            i.from = t.options.from || u,
            i.to = t.options.to || u,
            y && (h = n.effects.getBaseline(y, u),
            i.from.top = (u.height - i.from.height) * h.y,
            i.from.left = (u.width - i.from.width) * h.x,
            i.to.top = (u.height - i.to.height) * h.y,
            i.to.left = (u.width - i.to.width) * h.x),
            r = {
                from: {
                    y: i.from.height / u.height,
                    x: i.from.width / u.width
                },
                to: {
                    y: i.to.height / u.height,
                    x: i.to.width / u.width
                }
            },
            (s == "box" || s == "both") && (r.from.y != r.to.y && (f = f.concat(e),
            i.from = n.effects.setTransition(i, e, r.from.y, i.from),
            i.to = n.effects.setTransition(i, e, r.to.y, i.to)),
            r.from.x != r.to.x && (f = f.concat(o),
            i.from = n.effects.setTransition(i, o, r.from.x, i.from),
            i.to = n.effects.setTransition(i, o, r.to.x, i.to))),
            (s == "content" || s == "both") && r.from.y != r.to.y && (f = f.concat(c),
            i.from = n.effects.setTransition(i, c, r.from.y, i.from),
            i.to = n.effects.setTransition(i, c, r.to.y, i.to)),
            n.effects.save(i, l ? f : v),
            i.show(),
            n.effects.createWrapper(i),
            i.css("overflow", "hidden").css(i.from),
            (s == "content" || s == "both") && (e = e.concat(["marginTop", "marginBottom"]).concat(c),
            o = o.concat(["marginLeft", "marginRight"]),
            a = f.concat(e).concat(o),
            i.find("*[width]").each(function() {
                var i = n(this), u;
                l && n.effects.save(i, a),
                u = {
                    height: i.height(),
                    width: i.width()
                },
                i.from = {
                    height: u.height * r.from.y,
                    width: u.width * r.from.x
                },
                i.to = {
                    height: u.height * r.to.y,
                    width: u.width * r.to.x
                },
                r.from.y != r.to.y && (i.from = n.effects.setTransition(i, e, r.from.y, i.from),
                i.to = n.effects.setTransition(i, e, r.to.y, i.to)),
                r.from.x != r.to.x && (i.from = n.effects.setTransition(i, o, r.from.x, i.from),
                i.to = n.effects.setTransition(i, o, r.to.x, i.to)),
                i.css(i.from),
                i.animate(i.to, t.duration, t.options.easing, function() {
                    l && n.effects.restore(i, a)
                })
            })),
            i.animate(i.to, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    i.to.opacity === 0 && i.css("opacity", i.from.opacity),
                    p == "hide" && i.hide(),
                    n.effects.restore(i, l ? f : v),
                    n.effects.removeWrapper(i),
                    t.callback && t.callback.apply(this, arguments),
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.shake = function(t) {
        return this.queue(function() {
            var i = n(this), l = ["position", "top", "bottom", "left", "right"], y = n.effects.setMode(i, t.options.mode || "effect"), u = t.options.direction || "left", f = t.options.distance || 20, v = t.options.times || 3, r = t.duration || t.options.duration || 140, c;
            n.effects.save(i, l),
            i.show(),
            n.effects.createWrapper(i);
            var e = u == "up" || u == "down" ? "top" : "left"
              , o = u == "up" || u == "left" ? "pos" : "neg"
              , s = {}
              , h = {}
              , a = {};
            for (s[e] = (o == "pos" ? "-=" : "+=") + f,
            h[e] = (o == "pos" ? "+=" : "-=") + f * 2,
            a[e] = (o == "pos" ? "-=" : "+=") + f * 2,
            i.animate(s, r, t.options.easing),
            c = 1; c < v; c++)
                i.animate(h, r, t.options.easing).animate(a, r, t.options.easing);
            i.animate(h, r, t.options.easing).animate(s, r / 2, t.options.easing, function() {
                n.effects.restore(i, l),
                n.effects.removeWrapper(i),
                t.callback && t.callback.apply(this, arguments)
            }),
            i.queue("fx", function() {
                i.dequeue()
            }),
            i.dequeue()
        })
    }
}(jQuery),
function(n) {
    n.effects.slide = function(t) {
        return this.queue(function() {
            var i = n(this), h = ["position", "top", "bottom", "left", "right"], f = n.effects.setMode(i, t.options.mode || "show"), u = t.options.direction || "left", s;
            n.effects.save(i, h),
            i.show(),
            n.effects.createWrapper(i).css({
                overflow: "hidden"
            });
            var e = u == "up" || u == "down" ? "top" : "left"
              , o = u == "up" || u == "left" ? "pos" : "neg"
              , r = t.options.distance || (e == "top" ? i.outerHeight({
                margin: !0
            }) : i.outerWidth({
                margin: !0
            }));
            f == "show" && i.css(e, o == "pos" ? isNaN(r) ? "-" + r : -r : r),
            s = {},
            s[e] = (f == "show" ? o == "pos" ? "+=" : "-=" : o == "pos" ? "-=" : "+=") + r,
            i.animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function() {
                    f == "hide" && i.hide(),
                    n.effects.restore(i, h),
                    n.effects.removeWrapper(i),
                    t.callback && t.callback.apply(this, arguments),
                    i.dequeue()
                }
            })
        })
    }
}(jQuery),
function(n) {
    n.effects.transfer = function(t) {
        return this.queue(function() {
            var i = n(this)
              , r = n(t.options.to)
              , u = r.offset()
              , e = {
                top: u.top,
                left: u.left,
                height: r.innerHeight(),
                width: r.innerWidth()
            }
              , f = i.offset()
              , o = n('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.options.className).css({
                top: f.top,
                left: f.left,
                height: i.innerHeight(),
                width: i.innerWidth(),
                position: "absolute"
            }).animate(e, t.duration, t.options.easing, function() {
                o.remove(),
                t.callback && t.callback.apply(i[0], arguments),
                i.dequeue()
            })
        })
    }
}(jQuery),
function(n) {
    n.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: !0,
            clearStyle: !1,
            collapsible: !1,
            event: "click",
            fillSpace: !1,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: !1,
            navigationFilter: function() {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function() {
            var t = this, i = t.options, r, u;
            t.running = 0,
            t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),
            t.headers = t.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
                i.disabled || n(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function() {
                i.disabled || n(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function() {
                i.disabled || n(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function() {
                i.disabled || n(this).removeClass("ui-state-focus")
            }),
            t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"),
            i.navigation && (r = t.element.find("a").filter(i.navigationFilter).eq(0),
            r.length && (u = r.closest(".ui-accordion-header"),
            t.active = u.length ? u : r.closest(".ui-accordion-content").prev())),
            t.active = t._findActive(t.active || i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),
            t.active.next().addClass("ui-accordion-content-active"),
            t._createIcons(),
            t.resize(),
            t.element.attr("role", "tablist"),
            t.headers.attr("role", "tab").bind("keydown.accordion", function(n) {
                return t._keydown(n)
            }).next().attr("role", "tabpanel"),
            t.headers.not(t.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).next().hide(),
            t.active.length ? t.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }) : t.headers.eq(0).attr("tabIndex", 0),
            n.browser.safari || t.headers.find("a").attr("tabIndex", -1),
            i.event && t.headers.bind(i.event.split(" ").join(".accordion ") + ".accordion", function(n) {
                t._clickHandler.call(t, n, this),
                n.preventDefault()
            })
        },
        _createIcons: function() {
            var t = this.options;
            t.icons && (n("<span></span>").addClass("ui-icon " + t.icons.header).prependTo(this.headers),
            this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected),
            this.element.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.children(".ui-icon").remove(),
            this.element.removeClass("ui-accordion-icons")
        },
        destroy: function() {
            var t = this.options, i;
            return this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
            this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),
            this.headers.find("a").removeAttr("tabIndex"),
            this._destroyIcons(),
            i = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled"),
            (t.autoHeight || t.fillHeight) && i.css("height", ""),
            n.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, i) {
            n.Widget.prototype._setOption.apply(this, arguments),
            t == "active" && this.activate(i),
            t == "icons" && (this._destroyIcons(),
            i && this._createIcons()),
            t == "disabled" && this.headers.add(this.headers.next())[i ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function(t) {
            if (!this.options.disabled && !t.altKey && !t.ctrlKey) {
                var i = n.ui.keyCode
                  , u = this.headers.length
                  , f = this.headers.index(t.target)
                  , r = !1;
                switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    r = this.headers[(f + 1) % u];
                    break;
                case i.LEFT:
                case i.UP:
                    r = this.headers[(f - 1 + u) % u];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._clickHandler({
                        target: t.target
                    }, t.target),
                    t.preventDefault()
                }
                return r ? (n(t.target).attr("tabIndex", -1),
                n(r).attr("tabIndex", 0),
                r.focus(),
                !1) : !0
            }
        },
        resize: function() {
            var i = this.options, t, r;
            return i.fillSpace ? (n.browser.msie && (r = this.element.parent().css("overflow"),
            this.element.parent().css("overflow", "hidden")),
            t = this.element.parent().height(),
            n.browser.msie && this.element.parent().css("overflow", r),
            this.headers.each(function() {
                t -= n(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : i.autoHeight && (t = 0,
            this.headers.next().each(function() {
                t = Math.max(t, n(this).height("").height())
            }).height(t)),
            this
        },
        activate: function(n) {
            this.options.active = n;
            var t = this._findActive(n)[0];
            return this._clickHandler({
                target: t
            }, t),
            this
        },
        _findActive: function(t) {
            return t ? typeof t == "number" ? this.headers.filter(":eq(" + t + ")") : this.headers.not(this.headers.not(t)) : t === !1 ? n([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function(t, i) {
            var r = this.options, u, f;
            if (!r.disabled) {
                if (!t.target) {
                    if (!r.collapsible)
                        return;
                    this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header),
                    this.active.next().addClass("ui-accordion-content-active");
                    var e = this.active.next()
                      , s = {
                        options: r,
                        newHeader: n([]),
                        oldHeader: r.active,
                        newContent: n([]),
                        oldContent: e
                    }
                      , o = this.active = n([]);
                    this._toggle(o, e, s);
                    return
                }
                if (u = n(t.currentTarget || i),
                f = u[0] === this.active[0],
                r.active = r.collapsible && f ? !1 : this.headers.index(u),
                !this.running && (r.collapsible || !f)) {
                    var h = this.active
                      , o = u.next()
                      , e = this.active.next()
                      , s = {
                        options: r,
                        newHeader: f && r.collapsible ? n([]) : u,
                        oldHeader: this.active,
                        newContent: f && r.collapsible ? n([]) : o,
                        oldContent: e
                    }
                      , c = this.headers.index(this.active[0]) > this.headers.index(u[0]);
                    this.active = f ? n([]) : u,
                    this._toggle(o, e, s, f, c),
                    h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header),
                    f || (u.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(r.icons.header).addClass(r.icons.headerSelected),
                    u.next().addClass("ui-accordion-content-active"));
                    return
                }
            }
        },
        _toggle: function(t, i, r, u, f) {
            var o = this, e = o.options, c, h;
            if (o.toShow = t,
            o.toHide = i,
            o.data = r,
            c = function() {
                if (o)
                    return o._completed.apply(o, arguments)
            }
            ,
            o._trigger("changestart", null, o.data),
            o.running = i.size() === 0 ? t.size() : i.size(),
            e.animated) {
                h = {},
                h = e.collapsible && u ? {
                    toShow: n([]),
                    toHide: i,
                    complete: c,
                    down: f,
                    autoHeight: e.autoHeight || e.fillSpace
                } : {
                    toShow: t,
                    toHide: i,
                    complete: c,
                    down: f,
                    autoHeight: e.autoHeight || e.fillSpace
                },
                e.proxied || (e.proxied = e.animated),
                e.proxiedDuration || (e.proxiedDuration = e.duration),
                e.animated = n.isFunction(e.proxied) ? e.proxied(h) : e.proxied,
                e.duration = n.isFunction(e.proxiedDuration) ? e.proxiedDuration(h) : e.proxiedDuration;
                var l = n.ui.accordion.animations
                  , a = e.duration
                  , s = e.animated;
                s && !l[s] && !n.easing[s] && (s = "slide"),
                l[s] || (l[s] = function(n) {
                    this.slide(n, {
                        easing: s,
                        duration: a || 700
                    })
                }
                ),
                l[s](h)
            } else
                e.collapsible && u ? t.toggle() : (i.hide(),
                t.show()),
                c(!0);
            i.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).blur(),
            t.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function(n) {
            (this.running = n ? 0 : --this.running,
            this.running) || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                height: "",
                overflow: ""
            }),
            this.toHide.removeClass("ui-accordion-content-active"),
            this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className),
            this._trigger("change", null, this.data))
        }
    }),
    n.extend(n.ui.accordion, {
        version: "1.8.20",
        animations: {
            slide: function(t, i) {
                if (t = n.extend({
                    easing: "swing",
                    duration: 300
                }, t, i),
                !t.toHide.size()) {
                    t.toShow.animate({
                        height: "show",
                        paddingTop: "show",
                        paddingBottom: "show"
                    }, t);
                    return
                }
                if (!t.toShow.size()) {
                    t.toHide.animate({
                        height: "hide",
                        paddingTop: "hide",
                        paddingBottom: "hide"
                    }, t);
                    return
                }
                var s = t.toShow.css("overflow"), f = 0, u = {}, e = {}, h = ["height", "paddingTop", "paddingBottom"], o, r = t.toShow;
                o = r[0].style.width,
                r.width(r.parent().width() - parseFloat(r.css("paddingLeft")) - parseFloat(r.css("paddingRight")) - (parseFloat(r.css("borderLeftWidth")) || 0) - (parseFloat(r.css("borderRightWidth")) || 0)),
                n.each(h, function(i, r) {
                    e[r] = "hide";
                    var f = ("" + n.css(t.toShow[0], r)).match(/^([\d+-.]+)(.*)$/);
                    u[r] = {
                        value: f[1],
                        unit: f[2] || "px"
                    }
                }),
                t.toShow.css({
                    height: 0,
                    overflow: "hidden"
                }).show(),
                t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(e, {
                    step: function(n, i) {
                        i.prop == "height" && (f = i.end - i.start == 0 ? 0 : (i.now - i.start) / (i.end - i.start)),
                        t.toShow[0].style[i.prop] = f * u[i.prop].value + u[i.prop].unit
                    },
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        t.autoHeight || t.toShow.css("height", ""),
                        t.toShow.css({
                            width: o,
                            overflow: s
                        }),
                        t.complete()
                    }
                })
            },
            bounceslide: function(n) {
                this.slide(n, {
                    easing: n.down ? "easeOutBounce" : "swing",
                    duration: n.down ? 1e3 : 200
                })
            }
        }
    })
}(jQuery),
function(n) {
    var i = 0;
    n.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function() {
            var t = this, r = this.element[0].ownerDocument, i;
            this.isMultiLine = this.element.is("textarea"),
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function(r) {
                if (!t.options.disabled && !t.element.propAttr("readOnly")) {
                    i = !1;
                    var u = n.ui.keyCode;
                    switch (r.keyCode) {
                    case u.PAGE_UP:
                        t._move("previousPage", r);
                        break;
                    case u.PAGE_DOWN:
                        t._move("nextPage", r);
                        break;
                    case u.UP:
                        t._keyEvent("previous", r);
                        break;
                    case u.DOWN:
                        t._keyEvent("next", r);
                        break;
                    case u.ENTER:
                    case u.NUMPAD_ENTER:
                        t.menu.active && (i = !0,
                        r.preventDefault());
                    case u.TAB:
                        if (!t.menu.active)
                            return;
                        t.menu.select(r);
                        break;
                    case u.ESCAPE:
                        t.element.val(t.term),
                        t.close(r);
                        break;
                    default:
                        clearTimeout(t.searching),
                        t.searching = setTimeout(function() {
                            t.term != t.element.val() && (t.selectedItem = null,
                            t.search(null, r))
                        }, t.options.delay)
                    }
                }
            }).bind("keypress.autocomplete", function(n) {
                i && (i = !1,
                n.preventDefault())
            }).bind("focus.autocomplete", function() {
                t.options.disabled || (t.selectedItem = null,
                t.previous = t.element.val())
            }).bind("blur.autocomplete", function(n) {
                t.options.disabled || (clearTimeout(t.searching),
                t.closing = setTimeout(function() {
                    t.close(n),
                    t._change(n)
                }, 150))
            }),
            this._initSource(),
            this.menu = n("<ul></ul>").addClass("ui-autocomplete").appendTo(n(this.options.appendTo || "body", r)[0]).mousedown(function(i) {
                var r = t.menu.element[0];
                n(i.target).closest(".ui-menu-item").length || setTimeout(function() {
                    n(document).one("mousedown", function(i) {
                        i.target !== t.element[0] && i.target !== r && !n.ui.contains(r, i.target) && t.close()
                    })
                }, 1),
                setTimeout(function() {
                    clearTimeout(t.closing)
                }, 13)
            }).menu({
                focus: function(n, i) {
                    var r = i.item.data("item.autocomplete");
                    !1 !== t._trigger("focus", n, {
                        item: r
                    }) && /^key/.test(n.originalEvent.type) && t.element.val(r.value)
                },
                selected: function(n, i) {
                    var u = i.item.data("item.autocomplete")
                      , f = t.previous;
                    t.element[0] !== r.activeElement && (t.element.focus(),
                    t.previous = f,
                    setTimeout(function() {
                        t.previous = f,
                        t.selectedItem = u
                    }, 1)),
                    !1 !== t._trigger("select", n, {
                        item: u
                    }) && t.element.val(u.value),
                    t.term = t.element.val(),
                    t.close(n),
                    t.selectedItem = u
                },
                blur: function() {
                    t.menu.element.is(":visible") && t.element.val() !== t.term && t.element.val(t.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"),
            n.fn.bgiframe && this.menu.element.bgiframe(),
            t.beforeunloadHandler = function() {
                t.element.removeAttr("autocomplete")
            }
            ,
            n(window).bind("beforeunload", t.beforeunloadHandler)
        },
        destroy: function() {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),
            this.menu.element.remove(),
            n(window).unbind("beforeunload", this.beforeunloadHandler),
            n.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, i) {
            n.Widget.prototype._setOption.apply(this, arguments),
            t === "source" && this._initSource(),
            t === "appendTo" && this.menu.element.appendTo(n(i || "body", this.element[0].ownerDocument)[0]),
            t === "disabled" && i && this.xhr && this.xhr.abort()
        },
        _initSource: function() {
            var t = this, i, r;
            n.isArray(this.options.source) ? (i = this.options.source,
            this.source = function(t, r) {
                r(n.ui.autocomplete.filter(i, t.term))
            }
            ) : typeof this.options.source == "string" ? (r = this.options.source,
            this.source = function(i, u) {
                t.xhr && t.xhr.abort(),
                t.xhr = n.ajax({
                    url: r,
                    data: i,
                    dataType: "json",
                    success: function(n) {
                        u(n)
                    },
                    error: function() {
                        u([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        search: function(n, t) {
            return (n = n != null ? n : this.element.val(),
            this.term = this.element.val(),
            n.length < this.options.minLength) ? this.close(t) : (clearTimeout(this.closing),
            this._trigger("search", t) === !1) ? void 0 : this._search(n)
        },
        _search: function(n) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.source({
                term: n
            }, this._response())
        },
        _response: function() {
            var n = this
              , t = ++i;
            return function(r) {
                t === i && n.__response(r),
                n.pending--,
                n.pending || n.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(n) {
            !this.options.disabled && n && n.length ? (n = this._normalize(n),
            this._suggest(n),
            this._trigger("open")) : this.close()
        },
        close: function(n) {
            clearTimeout(this.closing),
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.deactivate(),
            this._trigger("close", n))
        },
        _change: function(n) {
            this.previous !== this.element.val() && this._trigger("change", n, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : n.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(i, t),
            this.menu.deactivate(),
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(n.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next(new n.Event("mouseover"))
        },
        _resizeMenu: function() {
            var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var r = this;
            n.each(i, function(n, i) {
                r._renderItem(t, i)
            })
        },
        _renderItem: function(t, i) {
            return n("<li></li>").data("item.autocomplete", i).append(n("<a></a>").text(i.label)).appendTo(t)
        },
        _move: function(n, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.first() && /^previous/.test(n) || this.menu.last() && /^next/.test(n)) {
                this.element.val(this.term),
                this.menu.deactivate();
                return
            }
            this.menu[n](t)
        },
        widget: function() {
            return this.menu.element
        },
        _keyEvent: function(n, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t),
            t.preventDefault())
        }
    }),
    n.extend(n.ui.autocomplete, {
        escapeRegex: function(n) {
            return n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var r = new RegExp(n.ui.autocomplete.escapeRegex(i),"i");
            return n.grep(t, function(n) {
                return r.test(n.label || n.value || n)
            })
        }
    })
}(jQuery),
function(n) {
    n.widget("ui.menu", {
        _create: function() {
            var t = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function(i) {
                n(i.target).closest(".ui-menu-item a").length && (i.preventDefault(),
                t.select(i))
            }),
            this.refresh()
        },
        refresh: function() {
            var t = this
              , i = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
            i.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(i) {
                t.activate(i, n(this).parent())
            }).mouseleave(function() {
                t.deactivate()
            })
        },
        activate: function(n, t) {
            if (this.deactivate(),
            this.hasScroll()) {
                var i = t.offset().top - this.element.offset().top
                  , r = this.element.scrollTop()
                  , u = this.element.height();
                i < 0 ? this.element.scrollTop(r + i) : i >= u && this.element.scrollTop(r + i - u + t.height())
            }
            this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(),
            this._trigger("focus", n, {
                item: t
            })
        },
        deactivate: function() {
            this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),
            this._trigger("blur"),
            this.active = null)
        },
        next: function(n) {
            this.move("next", ".ui-menu-item:first", n)
        },
        previous: function(n) {
            this.move("prev", ".ui-menu-item:last", n)
        },
        first: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function(n, t, i) {
            if (!this.active) {
                this.activate(i, this.element.children(t));
                return
            }
            var r = this.active[n + "All"](".ui-menu-item").eq(0);
            r.length ? this.activate(i, r) : this.activate(i, this.element.children(t))
        },
        nextPage: function(t) {
            if (this.hasScroll()) {
                if (!this.active || this.last()) {
                    this.activate(t, this.element.children(".ui-menu-item:first"));
                    return
                }
                var r = this.active.offset().top
                  , u = this.element.height()
                  , i = this.element.children(".ui-menu-item").filter(function() {
                    var t = n(this).offset().top - r - u + n(this).height();
                    return t < 10 && t > -10
                });
                i.length || (i = this.element.children(".ui-menu-item:last")),
                this.activate(t, i)
            } else
                this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function(t) {
            if (this.hasScroll()) {
                if (!this.active || this.first()) {
                    this.activate(t, this.element.children(".ui-menu-item:last"));
                    return
                }
                var r = this.active.offset().top
                  , u = this.element.height()
                  , i = this.element.children(".ui-menu-item").filter(function() {
                    var t = n(this).offset().top - r + u - n(this).height();
                    return t < 10 && t > -10
                });
                i.length || (i = this.element.children(".ui-menu-item:first")),
                this.activate(t, i)
            } else
                this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function() {
            return this.element.height() < this.element[n.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function(n) {
            this._trigger("selected", n, {
                item: this.active
            })
        }
    })
}(jQuery),
function(n) {
    var r, u, f, i, e = "ui-button ui-widget ui-state-default ui-corner-all", h = "ui-state-hover ui-state-active ", o = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", c = function() {
        var t = n(this).find(":ui-button");
        setTimeout(function() {
            t.button("refresh")
        }, 1)
    }, s = function(t) {
        var i = t.name
          , u = t.form
          , r = n([]);
        return i && (r = u ? n(u).find("[name='" + i + "']") : n("[name='" + i + "']", t.ownerDocument).filter(function() {
            return !this.form
        })),
        r
    };
    n.widget("ui.button", {
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset.button").bind("reset.button", c),
            typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled),
            this._determineButtonType(),
            this.hasTitle = !!this.buttonElement.attr("title");
            var o = this
              , t = this.options
              , h = this.type === "checkbox" || this.type === "radio"
              , a = "ui-state-hover" + (h ? "" : " ui-state-active")
              , l = "ui-state-focus";
            t.label === null && (t.label = this.buttonElement.html()),
            this.buttonElement.addClass(e).attr("role", "button").bind("mouseenter.button", function() {
                t.disabled || (n(this).addClass("ui-state-hover"),
                this === r && n(this).addClass("ui-state-active"))
            }).bind("mouseleave.button", function() {
                t.disabled || n(this).removeClass(a)
            }).bind("click.button", function(n) {
                t.disabled && (n.preventDefault(),
                n.stopImmediatePropagation())
            }),
            this.element.bind("focus.button", function() {
                o.buttonElement.addClass(l)
            }).bind("blur.button", function() {
                o.buttonElement.removeClass(l)
            }),
            h && (this.element.bind("change.button", function() {
                i || o.refresh()
            }),
            this.buttonElement.bind("mousedown.button", function(n) {
                t.disabled || (i = !1,
                u = n.pageX,
                f = n.pageY)
            }).bind("mouseup.button", function(n) {
                t.disabled || (u !== n.pageX || f !== n.pageY) && (i = !0)
            })),
            this.type === "checkbox" ? this.buttonElement.bind("click.button", function() {
                if (t.disabled || i)
                    return !1;
                n(this).toggleClass("ui-state-active"),
                o.buttonElement.attr("aria-pressed", o.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click.button", function() {
                if (t.disabled || i)
                    return !1;
                n(this).addClass("ui-state-active"),
                o.buttonElement.attr("aria-pressed", "true");
                var r = o.element[0];
                s(r).not(r).map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown.button", function() {
                if (t.disabled)
                    return !1;
                n(this).addClass("ui-state-active"),
                r = this,
                n(document).one("mouseup", function() {
                    r = null
                })
            }).bind("mouseup.button", function() {
                if (t.disabled)
                    return !1;
                n(this).removeClass("ui-state-active")
            }).bind("keydown.button", function(i) {
                if (t.disabled)
                    return !1;
                (i.keyCode == n.ui.keyCode.SPACE || i.keyCode == n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
            }).bind("keyup.button", function() {
                n(this).removeClass("ui-state-active")
            }),
            this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === n.ui.keyCode.SPACE && n(this).click()
            })),
            this._setOption("disabled", t.disabled),
            this._resetButton()
        },
        _determineButtonType: function() {
            var n, t, i;
            this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button",
            this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().filter(":last"),
            t = "label[for='" + this.element.attr("id") + "']",
            this.buttonElement = n.find(t),
            this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(),
            this.buttonElement = n.filter(t),
            this.buttonElement.length || (this.buttonElement = n.find(t))),
            this.element.addClass("ui-helper-hidden-accessible"),
            i = this.element.is(":checked"),
            i && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.attr("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"),
            this.buttonElement.removeClass(e + " " + h + " " + o).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
            this.hasTitle || this.buttonElement.removeAttr("title"),
            n.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, i) {
            if (n.Widget.prototype._setOption.apply(this, arguments),
            t === "disabled") {
                i ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var t = this.element.is(":disabled");
            t !== this.options.disabled && this._setOption("disabled", t),
            this.type === "radio" ? s(this.element[0]).each(function() {
                n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var i = this.buttonElement.removeClass(o)
              , f = n("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text()
              , t = this.options.icons
              , u = t.primary && t.secondary
              , r = [];
            t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")),
            t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'></span>"),
            t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'></span>"),
            this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"),
            this.hasTitle || i.attr("title", f))) : r.push("ui-button-text-only"),
            i.addClass(r.join(" "))
        }
    }),
    n.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, i) {
            t === "disabled" && this.buttons.button("option", t, i),
            n.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function() {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        destroy: function() {
            this.element.removeClass("ui-buttonset"),
            this.buttons.map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"),
            n.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery),
function(n, t) {
    function e() {
        this.debug = !1,
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        n.extend(this._defaults, this.regional[""]),
        this.dpDiv = o(n('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    function o(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.bind("mouseout", function(t) {
            var r = n(t.target).closest(i);
            r.length && r.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function(r) {
            var u = n(r.target).closest(i);
            !n.datepicker._isDisabledDatepicker(f.inline ? t.parent()[0] : f.input[0]) && u.length && (u.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
            u.addClass("ui-state-hover"),
            u.hasClass("ui-datepicker-prev") && u.addClass("ui-datepicker-prev-hover"),
            u.hasClass("ui-datepicker-next") && u.addClass("ui-datepicker-next-hover"))
        })
    }
    function u(i, r) {
        n.extend(i, r);
        for (var u in r)
            (r[u] == null || r[u] == t) && (i[u] = r[u]);
        return i
    }
    n.extend(n.ui, {
        datepicker: {
            version: "1.8.20"
        }
    });
    var i = "datepicker", r = +new Date, f;
    n.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function() {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(n) {
            return u(this._defaults, n || {}),
            this
        },
        _attachDatepicker: function(t, i) {
            var r = null, u, f, e, s, o;
            for (u in this._defaults)
                if (f = t.getAttribute("date:" + u),
                f) {
                    r = r || {};
                    try {
                        r[u] = eval(f)
                    } catch (h) {
                        r[u] = f
                    }
                }
            e = t.nodeName.toLowerCase(),
            s = e == "div" || e == "span",
            t.id || (this.uuid += 1,
            t.id = "dp" + this.uuid),
            o = this._newInst(n(t), s),
            o.settings = n.extend({}, i || {}, r || {}),
            e == "input" ? this._connectDatepicker(t, o) : s && this._inlineDatepicker(t, o)
        },
        _newInst: function(t, i) {
            var r = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? o(n('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, r) {
            var u = n(t);
            (r.append = n([]),
            r.trigger = n([]),
            u.hasClass(this.markerClassName)) || (this._attachments(u, r),
            u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(n, t, i) {
                r.settings[t] = i
            }).bind("getData.datepicker", function(n, t) {
                return this._get(r, t)
            }),
            this._autoSize(r),
            n.data(t, i, r),
            r.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var e = this._get(i, "appendText"), o = this._get(i, "isRTL"), u, r, f;
            i.append && i.append.remove(),
            e && (i.append = n('<span class="' + this._appendClass + '">' + e + "</span>"),
            t[o ? "before" : "after"](i.append)),
            t.unbind("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            u = this._get(i, "showOn"),
            (u == "focus" || u == "both") && t.focus(this._showDatepicker),
            (u == "button" || u == "both") && (r = this._get(i, "buttonText"),
            f = this._get(i, "buttonImage"),
            i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: r,
                title: r
            }) : n('<button type="button"></button>').addClass(this._triggerClass).html(f == "" ? r : n("<img/>").attr({
                src: f,
                alt: r,
                title: r
            }))),
            t[o ? "before" : "after"](i.trigger),
            i.trigger.click(function() {
                return n.datepicker._datepickerShowing && n.datepicker._lastInput == t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput != t[0] ? (n.datepicker._hideDatepicker(),
                n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]),
                !1
            }))
        },
        _autoSize: function(n) {
            var t, i, r;
            this._get(n, "autoSize") && !n.inline && (t = new Date(2009,11,20),
            i = this._get(n, "dateFormat"),
            i.match(/[DM]/) && (r = function(n) {
                for (var i = 0, r = 0, t = 0; t < n.length; t++)
                    n[t].length > i && (i = n[t].length,
                    r = t);
                return r
            }
            ,
            t.setMonth(r(this._get(n, i.match(/MM/) ? "monthNames" : "monthNamesShort"))),
            t.setDate(r(this._get(n, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())),
            n.input.attr("size", this._formatDate(n, t).length))
        },
        _inlineDatepicker: function(t, r) {
            var u = n(t);
            u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(r.dpDiv).bind("setData.datepicker", function(n, t, i) {
                r.settings[t] = i
            }).bind("getData.datepicker", function(n, t) {
                return this._get(r, t)
            }),
            n.data(t, i, r),
            this._setDate(r, this._getDefaultDate(r), !0),
            this._updateDatepicker(r),
            this._updateAlternate(r),
            r.settings.disabled && this._disableDatepicker(t),
            r.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, r, f, e, o) {
            var s = this._dialogInst, h;
            if (s || (this.uuid += 1,
            h = "dp" + this.uuid,
            this._dialogInput = n('<input type="text" id="' + h + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'),
            this._dialogInput.keydown(this._doKeyDown),
            n("body").append(this._dialogInput),
            s = this._dialogInst = this._newInst(this._dialogInput, !1),
            s.settings = {},
            n.data(this._dialogInput[0], i, s)),
            u(s.settings, e || {}),
            r = r && r.constructor == Date ? this._formatDate(s, r) : r,
            this._dialogInput.val(r),
            this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null,
            !this._pos) {
                var c = document.documentElement.clientWidth
                  , l = document.documentElement.clientHeight
                  , a = document.documentElement.scrollLeft || document.body.scrollLeft
                  , v = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [c / 2 - 100 + a, l / 2 - 150 + v]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            s.settings.onSelect = f,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            n.blockUI && n.blockUI(this.dpDiv),
            n.data(this._dialogInput[0], i, s),
            this
        },
        _destroyDatepicker: function(t) {
            var u = n(t), f = n.data(t, i), r;
            u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
            n.removeData(t, i),
            r == "input" ? (f.append.remove(),
            f.trigger.remove(),
            u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && u.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var f = n(t), e = n.data(t, i), r, u;
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
            r == "input" ? (t.disabled = !1,
            e.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : (r == "div" || r == "span") && (u = f.children("." + this._inlineClass),
            u.children().removeClass("ui-state-disabled"),
            u.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")),
            this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n == t ? null : n
            }))
        },
        _disableDatepicker: function(t) {
            var f = n(t), e = n.data(t, i), r, u;
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
            r == "input" ? (t.disabled = !0,
            e.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : (r == "div" || r == "span") && (u = f.children("." + this._inlineClass),
            u.children().addClass("ui-state-disabled"),
            u.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")),
            this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n == t ? null : n
            }),
            this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(n) {
            if (!n)
                return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] == n)
                    return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return n.data(t, i)
            } catch (r) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(i, r, f) {
            var e = this._getInst(i), o;
            if (arguments.length == 2 && typeof r == "string")
                return r == "defaults" ? n.extend({}, n.datepicker._defaults) : e ? r == "all" ? n.extend({}, e.settings) : this._get(e, r) : null;
            if (o = r || {},
            typeof r == "string" && (o = {},
            o[r] = f),
            e) {
                this._curInst == e && this._hideDatepicker();
                var c = this._getDateDatepicker(i, !0)
                  , s = this._getMinMaxDate(e, "min")
                  , h = this._getMinMaxDate(e, "max");
                u(e.settings, o),
                s !== null && o.dateFormat !== t && o.minDate === t && (e.settings.minDate = this._formatDate(e, s)),
                h !== null && o.dateFormat !== t && o.maxDate === t && (e.settings.maxDate = this._formatDate(e, h)),
                this._attachments(n(i), e),
                this._autoSize(e),
                this._setDate(e, c),
                this._updateAlternate(e),
                this._updateDatepicker(e)
            }
        },
        _changeDatepicker: function(n, t, i) {
            this._optionDatepicker(n, t, i)
        },
        _refreshDatepicker: function(n) {
            var t = this._getInst(n);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            i && (this._setDate(i, t),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            return i && !i.inline && this._setDateFromField(i, t),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i = n.datepicker._getInst(t.target), r = !0, e = i.dpDiv.is(".ui-datepicker-rtl"), u, f, o;
            if (i._keyEvent = !0,
            n.datepicker._datepickerShowing)
                switch (t.keyCode) {
                case 9:
                    n.datepicker._hideDatepicker(),
                    r = !1;
                    break;
                case 13:
                    return u = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv),
                    u[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, u[0]),
                    f = n.datepicker._get(i, "onSelect"),
                    f ? (o = n.datepicker._formatDate(i),
                    f.apply(i.input ? i.input[0] : null, [o, i])) : n.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    n.datepicker._hideDatepicker();
                    break;
                case 33:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 34:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target),
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target),
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, e ? 1 : -1, "D"),
                    r = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D"),
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, e ? -1 : 1, "D"),
                    r = t.ctrlKey || t.metaKey,
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D"),
                    r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
                }
            else
                t.keyCode == 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(),
            t.stopPropagation())
        },
        _doKeyPress: function(i) {
            var f = n.datepicker._getInst(i.target), r, u;
            if (n.datepicker._get(f, "constrainInput"))
                return r = n.datepicker._possibleChars(n.datepicker._get(f, "dateFormat")),
                u = String.fromCharCode(i.charCode == t ? i.keyCode : i.charCode),
                i.ctrlKey || i.metaKey || u < " " || !r || r.indexOf(u) > -1
        },
        _doKeyUp: function(t) {
            var i = n.datepicker._getInst(t.target), r;
            if (i.input.val() != i.lastVal)
                try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i)),
                    r && (n.datepicker._setDateFromField(i),
                    n.datepicker._updateAlternate(i),
                    n.datepicker._updateDatepicker(i))
                } catch (u) {
                    n.datepicker.log(u)
                }
            return !0
        },
        _showDatepicker: function(t) {
            var i, o, s, r, f;
            if ((t = t.target || t,
            t.nodeName.toLowerCase() != "input" && (t = n("input", t.parentNode)[0]),
            !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput != t) && (i = n.datepicker._getInst(t),
            n.datepicker._curInst && n.datepicker._curInst != i && (n.datepicker._curInst.dpDiv.stop(!0, !0),
            i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])),
            o = n.datepicker._get(i, "beforeShow"),
            s = o ? o.apply(t, [t, i]) : {},
            s !== !1) && (u(i.settings, s),
            i.lastVal = null,
            n.datepicker._lastInput = t,
            n.datepicker._setDateFromField(i),
            n.datepicker._inDialog && (t.value = ""),
            n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t),
            n.datepicker._pos[1] += t.offsetHeight),
            r = !1,
            n(t).parents().each(function() {
                return r |= n(this).css("position") == "fixed",
                !r
            }),
            r && n.browser.opera && (n.datepicker._pos[0] -= document.documentElement.scrollLeft,
            n.datepicker._pos[1] -= document.documentElement.scrollTop),
            f = {
                left: n.datepicker._pos[0],
                top: n.datepicker._pos[1]
            },
            n.datepicker._pos = null,
            i.dpDiv.empty(),
            i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }),
            n.datepicker._updateDatepicker(i),
            f = n.datepicker._checkOffset(i, f, r),
            i.dpDiv.css({
                position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
                display: "none",
                left: f.left + "px",
                top: f.top + "px"
            }),
            !i.inline)) {
                var e = n.datepicker._get(i, "showAnim")
                  , h = n.datepicker._get(i, "duration")
                  , c = function() {
                    var r = i.dpDiv.find("iframe.ui-datepicker-cover"), t;
                    !r.length || (t = n.datepicker._getBorders(i.dpDiv),
                    r.css({
                        left: -t[0],
                        top: -t[1],
                        width: i.dpDiv.outerWidth(),
                        height: i.dpDiv.outerHeight()
                    }))
                };
                i.dpDiv.zIndex(n(t).zIndex() + 1),
                n.datepicker._datepickerShowing = !0,
                n.effects && n.effects[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h, c) : i.dpDiv[e || "show"](e ? h : null, c),
                (!e || !h) && c(),
                i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(),
                n.datepicker._curInst = i
            }
        },
        _updateDatepicker: function(t) {
            var s = this, i, r, o;
            s.maxRows = 4,
            i = n.datepicker._getBorders(t.dpDiv),
            f = t,
            t.dpDiv.empty().append(this._generateHTML(t)),
            r = t.dpDiv.find("iframe.ui-datepicker-cover"),
            !r.length || r.css({
                left: -i[0],
                top: -i[1],
                width: t.dpDiv.outerWidth(),
                height: t.dpDiv.outerHeight()
            }),
            t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var u = this._getNumberOfMonths(t)
              , e = u[1]
              , h = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            e > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", h * e + "em"),
            t.dpDiv[(u[0] != 1 || u[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            t == n.datepicker._curInst && n.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(),
            t.yearshtml && (o = t.yearshtml,
            setTimeout(function() {
                o === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                o = t.yearshtml = null
            }, 0))
        },
        _getBorders: function(n) {
            var t = function(n) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[n] || n
            };
            return [parseFloat(t(n.css("border-left-width"))), parseFloat(t(n.css("border-top-width")))]
        },
        _checkOffset: function(t, i, r) {
            var u = t.dpDiv.outerWidth()
              , f = t.dpDiv.outerHeight()
              , h = t.input ? t.input.outerWidth() : 0
              , o = t.input ? t.input.outerHeight() : 0
              , e = document.documentElement.clientWidth + n(document).scrollLeft()
              , s = document.documentElement.clientHeight + n(document).scrollTop();
            return i.left -= this._get(t, "isRTL") ? u - h : 0,
            i.left -= r && i.left == t.input.offset().left ? n(document).scrollLeft() : 0,
            i.top -= r && i.top == t.input.offset().top + o ? n(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0),
            i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0),
            i
        },
        _findPos: function(t) {
            for (var r = this._getInst(t), u = this._get(r, "isRTL"), i; t && (t.type == "hidden" || t.nodeType != 1 || n.expr.filters.hidden(t)); )
                t = t[u ? "previousSibling" : "nextSibling"];
            return i = n(t).offset(),
            [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var r = this._curInst, e;
            if (r && (!t || r == n.data(t, i)) && this._datepickerShowing) {
                var u = this._get(r, "showAnim")
                  , o = this._get(r, "duration")
                  , f = function() {
                    n.datepicker._tidyDialog(r)
                };
                n.effects && n.effects[u] ? r.dpDiv.hide(u, n.datepicker._get(r, "showOptions"), o, f) : r.dpDiv[u == "slideDown" ? "slideUp" : u == "fadeIn" ? "fadeOut" : "hide"](u ? o : null, f),
                u || f(),
                this._datepickerShowing = !1,
                e = this._get(r, "onClose"),
                e && e.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]),
                this._lastInput = null,
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }),
                n.blockUI && (n.unblockUI(),
                n("body").append(this.dpDiv))),
                this._inDialog = !1
            }
        },
        _tidyDialog: function(n) {
            n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (n.datepicker._curInst) {
                var i = n(t.target)
                  , r = n.datepicker._getInst(i[0]);
                (i[0].id != n.datepicker._mainDivId && i.parents("#" + n.datepicker._mainDivId).length == 0 && !i.hasClass(n.datepicker.markerClassName) && !i.closest("." + n.datepicker._triggerClass).length && n.datepicker._datepickerShowing && (!n.datepicker._inDialog || !n.blockUI) || i.hasClass(n.datepicker.markerClassName) && n.datepicker._curInst != r) && n.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, r) {
            var f = n(t)
              , u = this._getInst(f[0]);
            this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r == "M" ? this._get(u, "showCurrentAtPos") : 0), r),
            this._updateDatepicker(u))
        },
        _gotoToday: function(t) {
            var u = n(t), i = this._getInst(u[0]), r;
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay,
            i.drawMonth = i.selectedMonth = i.currentMonth,
            i.drawYear = i.selectedYear = i.currentYear) : (r = new Date,
            i.selectedDay = r.getDate(),
            i.drawMonth = i.selectedMonth = r.getMonth(),
            i.drawYear = i.selectedYear = r.getFullYear()),
            this._notifyChange(i),
            this._adjustDate(u)
        },
        _selectMonthYear: function(t, i, r) {
            var f = n(t)
              , u = this._getInst(f[0]);
            u["selected" + (r == "M" ? "Month" : "Year")] = u["draw" + (r == "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
            this._notifyChange(u),
            this._adjustDate(f)
        },
        _selectDay: function(t, i, r, u) {
            var e = n(t), f;
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]),
            f.selectedDay = f.currentDay = n("a", u).html(),
            f.selectedMonth = f.currentMonth = i,
            f.selectedYear = f.currentYear = r,
            this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(t) {
            var i = n(t)
              , r = this._getInst(i[0]);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var f = n(t), r = this._getInst(f[0]), u;
            i = i != null ? i : this._formatDate(r),
            r.input && r.input.val(i),
            this._updateAlternate(r),
            u = this._get(r, "onSelect"),
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change"),
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(),
            this._lastInput = r.input[0],
            typeof r.input[0] != "object" && r.input.focus(),
            this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i = this._get(t, "altField");
            if (i) {
                var r = this._get(t, "altFormat") || this._get(t, "dateFormat")
                  , u = this._getDate(t)
                  , f = this.formatDate(r, u, this._getFormatConfig(t));
                n(i).each(function() {
                    n(this).val(f)
                })
            }
        },
        noWeekends: function(n) {
            var t = n.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function(n) {
            var t = new Date(n.getTime()), i;
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)),
            i = t.getTime(),
            t.setMonth(0),
            t.setDate(1),
            Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, r) {
            var l, o, w, u;
            if (t == null || i == null)
                throw "Invalid arguments";
            if (i = typeof i == "object" ? i.toString() : i + "",
            i == "")
                return null;
            l = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            l = typeof l != "string" ? l : (new Date).getFullYear() % 100 + parseInt(l, 10);
            var g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort
              , d = (r ? r.dayNames : null) || this._defaults.dayNames
              , k = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort
              , nt = (r ? r.monthNames : null) || this._defaults.monthNames
              , e = -1
              , s = -1
              , h = -1
              , v = -1
              , y = !1
              , a = function(n) {
                var i = o + 1 < t.length && t.charAt(o + 1) == n;
                return i && o++,
                i
            }
              , c = function(n) {
                var r = a(n)
                  , u = n == "@" ? 14 : n == "!" ? 20 : n == "y" && r ? 4 : n == "o" ? 3 : 2
                  , e = new RegExp("^\\d{1," + u + "}")
                  , t = i.substring(f).match(e);
                if (!t)
                    throw "Missing number at position " + f;
                return f += t[0].length,
                parseInt(t[0], 10)
            }
              , b = function(t, r, u) {
                var o = n.map(a(t) ? u : r, function(n, t) {
                    return [[t, n]]
                }).sort(function(n, t) {
                    return -(n[1].length - t[1].length)
                })
                  , e = -1;
                if (n.each(o, function(n, t) {
                    var r = t[1];
                    if (i.substr(f, r.length).toLowerCase() == r.toLowerCase())
                        return e = t[0],
                        f += r.length,
                        !1
                }),
                e != -1)
                    return e + 1;
                throw "Unknown name at position " + f;
            }
              , p = function() {
                if (i.charAt(f) != t.charAt(o))
                    throw "Unexpected literal at position " + f;
                f++
            }
              , f = 0;
            for (o = 0; o < t.length; o++)
                if (y)
                    t.charAt(o) == "'" && !a("'") ? y = !1 : p();
                else
                    switch (t.charAt(o)) {
                    case "d":
                        h = c("d");
                        break;
                    case "D":
                        b("D", g, d);
                        break;
                    case "o":
                        v = c("o");
                        break;
                    case "m":
                        s = c("m");
                        break;
                    case "M":
                        s = b("M", k, nt);
                        break;
                    case "y":
                        e = c("y");
                        break;
                    case "@":
                        u = new Date(c("@")),
                        e = u.getFullYear(),
                        s = u.getMonth() + 1,
                        h = u.getDate();
                        break;
                    case "!":
                        u = new Date((c("!") - this._ticksTo1970) / 1e4),
                        e = u.getFullYear(),
                        s = u.getMonth() + 1,
                        h = u.getDate();
                        break;
                    case "'":
                        a("'") ? p() : y = !0;
                        break;
                    default:
                        p()
                    }
            if (f < i.length)
                throw "Extra/unparsed characters found in date: " + i.substring(f);
            if (e == -1 ? e = (new Date).getFullYear() : e < 100 && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= l ? 0 : -100)),
            v > -1) {
                s = 1,
                h = v;
                do {
                    if (w = this._getDaysInMonth(e, s - 1),
                    h <= w)
                        break;
                    s++,
                    h -= w
                } while (1)
            }
            if (u = this._daylightSavingAdjust(new Date(e,s - 1,h)),
            u.getFullYear() != e || u.getMonth() + 1 != s || u.getDate() != h)
                throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 864e9,
        formatDate: function(n, t, i) {
            var u;
            if (!t)
                return "";
            var h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort
              , c = (i ? i.dayNames : null) || this._defaults.dayNames
              , l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort
              , a = (i ? i.monthNames : null) || this._defaults.monthNames
              , f = function(t) {
                var i = u + 1 < n.length && n.charAt(u + 1) == t;
                return i && u++,
                i
            }
              , e = function(n, t, i) {
                var r = "" + t;
                if (f(n))
                    while (r.length < i)
                        r = "0" + r;
                return r
            }
              , s = function(n, t, i, r) {
                return f(n) ? r[t] : i[t]
            }
              , r = ""
              , o = !1;
            if (t)
                for (u = 0; u < n.length; u++)
                    if (o)
                        n.charAt(u) == "'" && !f("'") ? o = !1 : r += n.charAt(u);
                    else
                        switch (n.charAt(u)) {
                        case "d":
                            r += e("d", t.getDate(), 2);
                            break;
                        case "D":
                            r += s("D", t.getDay(), h, c);
                            break;
                        case "o":
                            r += e("o", Math.round((+new Date(t.getFullYear(),t.getMonth(),t.getDate()) - +new Date(t.getFullYear(),0,0)) / 864e5), 3);
                            break;
                        case "m":
                            r += e("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            r += s("M", t.getMonth(), l, a);
                            break;
                        case "y":
                            r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            r += t.getTime();
                            break;
                        case "!":
                            r += t.getTime() * 1e4 + this._ticksTo1970;
                            break;
                        case "'":
                            f("'") ? r += "'" : o = !0;
                            break;
                        default:
                            r += n.charAt(u)
                        }
            return r
        },
        _possibleChars: function(n) {
            for (var i = "", r = !1, u = function(i) {
                var r = t + 1 < n.length && n.charAt(t + 1) == i;
                return r && t++,
                r
            }, t = 0; t < n.length; t++)
                if (r)
                    n.charAt(t) == "'" && !u("'") ? r = !1 : i += n.charAt(t);
                else
                    switch (n.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        u("'") ? i += "'" : r = !0;
                        break;
                    default:
                        i += n.charAt(t)
                    }
            return i
        },
        _get: function(n, i) {
            return n.settings[i] !== t ? n.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(n, t) {
            var u, r, i, f, e;
            if (n.input.val() != n.lastVal) {
                u = this._get(n, "dateFormat"),
                r = n.lastVal = n.input ? n.input.val() : null,
                i = f = this._getDefaultDate(n),
                e = this._getFormatConfig(n);
                try {
                    i = this.parseDate(u, r, e) || f
                } catch (o) {
                    this.log(o),
                    r = t ? "" : r
                }
                n.selectedDay = i.getDate(),
                n.drawMonth = n.selectedMonth = i.getMonth(),
                n.drawYear = n.selectedYear = i.getFullYear(),
                n.currentDay = r ? i.getDate() : 0,
                n.currentMonth = r ? i.getMonth() : 0,
                n.currentYear = r ? i.getFullYear() : 0,
                this._adjustInstDate(n)
            }
        },
        _getDefaultDate: function(n) {
            return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, r) {
            var f = function(n) {
                var t = new Date;
                return t.setDate(t.getDate() + n),
                t
            }
              , e = function(i) {
                try {
                    return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                } catch (h) {}
                for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u; ) {
                    switch (u[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(u[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += parseInt(u[1], 10) * 7;
                        break;
                    case "m":
                    case "M":
                        e += parseInt(u[1], 10),
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                        break;
                    case "y":
                    case "Y":
                        f += parseInt(u[1], 10),
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                    }
                    u = s.exec(i)
                }
                return new Date(f,e,r)
            }
              , u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
            return u = u && u.toString() == "Invalid Date" ? r : u,
            u && (u.setHours(0),
            u.setMinutes(0),
            u.setSeconds(0),
            u.setMilliseconds(0)),
            this._daylightSavingAdjust(u)
        },
        _daylightSavingAdjust: function(n) {
            return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0),
            n) : null
        },
        _setDate: function(n, t, i) {
            var u = !t
              , f = n.selectedMonth
              , e = n.selectedYear
              , r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate(),
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth(),
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear(),
            (f != n.selectedMonth || e != n.selectedYear) && !i && this._notifyChange(n),
            this._adjustInstDate(n),
            n.input && n.input.val(u ? "" : this._formatDate(n))
        },
        _getDate: function(n) {
            return !n.currentYear || n.input && n.input.val() == "" ? null : this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay))
        },
        _generateHTML: function(t) {
            var v = new Date, g, l, pt, c, d, st, w, ut, ct, ft, u, ot, ht, h;
            v = this._daylightSavingAdjust(new Date(v.getFullYear(),v.getMonth(),v.getDate()));
            var o = this._get(t, "isRTL")
              , ei = this._get(t, "showButtonPanel")
              , kt = this._get(t, "hideIfNoPrevNext")
              , vt = this._get(t, "navigationAsDateFormat")
              , s = this._getNumberOfMonths(t)
              , oi = this._get(t, "showCurrentAtPos")
              , tt = this._get(t, "stepMonths")
              , yt = s[0] != 1 || s[1] != 1
              , wt = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9))
              , b = this._getMinMaxDate(t, "min")
              , a = this._getMinMaxDate(t, "max")
              , i = t.drawMonth - oi
              , f = t.drawYear;
            if (i < 0 && (i += 12,
            f--),
            a)
                for (g = this._daylightSavingAdjust(new Date(a.getFullYear(),a.getMonth() - s[0] * s[1] + 1,a.getDate())),
                g = b && g < b ? b : g; this._daylightSavingAdjust(new Date(f,i,1)) > g; )
                    i--,
                    i < 0 && (i = 11,
                    f--);
            t.drawMonth = i,
            t.drawYear = f,
            l = this._get(t, "prevText"),
            l = vt ? this.formatDate(l, this._daylightSavingAdjust(new Date(f,i - tt,1)), this._getFormatConfig(t)) : l,
            pt = this._canAdjustMonth(t, -1, f, i) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + r + ".datepicker._adjustDate('#" + t.id + "', -" + tt + ", 'M');\" title=\"" + l + '"><span class="ui-icon ui-icon-circle-triangle-' + (o ? "e" : "w") + '">' + l + "</span></a>" : kt ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + l + '"><span class="ui-icon ui-icon-circle-triangle-' + (o ? "e" : "w") + '">' + l + "</span></a>",
            c = this._get(t, "nextText"),
            c = vt ? this.formatDate(c, this._daylightSavingAdjust(new Date(f,i + tt,1)), this._getFormatConfig(t)) : c;
            var ui = this._canAdjustMonth(t, 1, f, i) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + r + ".datepicker._adjustDate('#" + t.id + "', +" + tt + ", 'M');\" title=\"" + c + '"><span class="ui-icon ui-icon-circle-triangle-' + (o ? "w" : "e") + '">' + c + "</span></a>" : kt ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + c + '"><span class="ui-icon ui-icon-circle-triangle-' + (o ? "w" : "e") + '">' + c + "</span></a>"
              , nt = this._get(t, "currentText")
              , bt = this._get(t, "gotoCurrent") && t.currentDay ? wt : v;
            nt = vt ? this.formatDate(nt, bt, this._getFormatConfig(t)) : nt;
            var ii = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + r + '.datepicker._hideDatepicker();">' + this._get(t, "closeText") + "</button>"
              , vi = ei ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (o ? ii : "") + (this._isInRange(t, bt) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + r + ".datepicker._gotoToday('#" + t.id + "');\">" + nt + "</button>" : "") + (o ? "" : ii) + "</div>" : ""
              , y = parseInt(this._get(t, "firstDay"), 10);
            y = isNaN(y) ? 0 : y;
            var ni = this._get(t, "showWeek")
              , hi = this._get(t, "dayNames")
              , pi = this._get(t, "dayNamesShort")
              , ci = this._get(t, "dayNamesMin")
              , li = this._get(t, "monthNames")
              , si = this._get(t, "monthNamesShort")
              , ri = this._get(t, "beforeShowDay")
              , lt = this._get(t, "showOtherMonths")
              , ai = this._get(t, "selectOtherMonths")
              , yi = this._get(t, "calculateWeek") || this.iso8601Week
              , dt = this._getDefaultDate(t)
              , rt = "";
            for (d = 0; d < s[0]; d++) {
                for (st = "",
                this.maxRows = 4,
                w = 0; w < s[1]; w++) {
                    var ti = this._daylightSavingAdjust(new Date(f,i,t.selectedDay))
                      , p = " ui-corner-all"
                      , e = "";
                    if (yt) {
                        if (e += '<div class="ui-datepicker-group',
                        s[1] > 1)
                            switch (w) {
                            case 0:
                                e += " ui-datepicker-group-first",
                                p = " ui-corner-" + (o ? "right" : "left");
                                break;
                            case s[1] - 1:
                                e += " ui-datepicker-group-last",
                                p = " ui-corner-" + (o ? "left" : "right");
                                break;
                            default:
                                e += " ui-datepicker-group-middle",
                                p = ""
                            }
                        e += '">'
                    }
                    for (e += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + p + '">' + (/all|left/.test(p) && d == 0 ? o ? ui : pt : "") + (/all|right/.test(p) && d == 0 ? o ? pt : ui : "") + this._generateMonthYearHeader(t, i, f, b, a, d > 0 || w > 0, li, si) + '</div><table class="ui-datepicker-calendar"><thead><tr>',
                    ut = ni ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "",
                    h = 0; h < 7; h++)
                        ct = (h + y) % 7,
                        ut += "<th" + ((h + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + hi[ct] + '">' + ci[ct] + "</span></th>";
                    e += ut + "</tr></thead><tbody>",
                    ft = this._getDaysInMonth(f, i),
                    f == t.selectedYear && i == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, ft));
                    var fi = (this._getFirstDayOfMonth(f, i) - y + 7) % 7
                      , et = Math.ceil((fi + ft) / 7)
                      , gt = yt ? this.maxRows > et ? this.maxRows : et : et;
                    for (this.maxRows = gt,
                    u = this._daylightSavingAdjust(new Date(f,i,1 - fi)),
                    ot = 0; ot < gt; ot++) {
                        for (e += "<tr>",
                        ht = ni ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(u) + "</td>" : "",
                        h = 0; h < 7; h++) {
                            var it = ri ? ri.apply(t.input ? t.input[0] : null, [u]) : [!0, ""]
                              , k = u.getMonth() != i
                              , at = k && !ai || !it[0] || b && u < b || a && u > a;
                            ht += '<td class="' + ((h + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (k ? " ui-datepicker-other-month" : "") + (u.getTime() == ti.getTime() && i == t.selectedMonth && t._keyEvent || dt.getTime() == u.getTime() && dt.getTime() == ti.getTime() ? " " + this._dayOverClass : "") + (at ? " " + this._unselectableClass + " ui-state-disabled" : "") + (k && !lt ? "" : " " + it[1] + (u.getTime() == wt.getTime() ? " " + this._currentClass : "") + (u.getTime() == v.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!k || lt) && it[2] ? ' title="' + it[2] + '"' : "") + (at ? "" : ' onclick="DP_jQuery_' + r + ".datepicker._selectDay('#" + t.id + "'," + u.getMonth() + "," + u.getFullYear() + ', this);return false;"') + ">" + (k && !lt ? "&#xa0;" : at ? '<span class="ui-state-default">' + u.getDate() + "</span>" : '<a class="ui-state-default' + (u.getTime() == v.getTime() ? " ui-state-highlight" : "") + (u.getTime() == wt.getTime() ? " ui-state-active" : "") + (k ? " ui-priority-secondary" : "") + '" href="#">' + u.getDate() + "</a>") + "</td>",
                            u.setDate(u.getDate() + 1),
                            u = this._daylightSavingAdjust(u)
                        }
                        e += ht + "</tr>"
                    }
                    i++,
                    i > 11 && (i = 0,
                    f++),
                    e += "</tbody></table>" + (yt ? "</div>" + (s[0] > 0 && w == s[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""),
                    st += e
                }
                rt += st
            }
            return rt += vi + (n.browser.msie && parseInt(n.browser.version, 10) < 7 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""),
            t._keyEvent = !1,
            rt
        },
        _generateMonthYearHeader: function(n, t, i, u, f, e, o, s) {
            var y = this._get(n, "changeMonth"), p = this._get(n, "changeYear"), nt = this._get(n, "showMonthAfterYear"), l = '<div class="ui-datepicker-title">', a = "", w, b, c;
            if (e || !y)
                a += '<span class="ui-datepicker-month">' + o[t] + "</span>";
            else {
                for (w = u && u.getFullYear() == i,
                b = f && f.getFullYear() == i,
                a += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + r + ".datepicker._selectMonthYear('#" + n.id + "', this, 'M');\" >",
                c = 0; c < 12; c++)
                    (!w || c >= u.getMonth()) && (!b || c <= f.getMonth()) && (a += '<option value="' + c + '"' + (c == t ? ' selected="selected"' : "") + ">" + s[c] + "</option>");
                a += "</select>"
            }
            if (nt || (l += a + (e || !y || !p ? "&#xa0;" : "")),
            !n.yearshtml)
                if (n.yearshtml = "",
                e || !p)
                    l += '<span class="ui-datepicker-year">' + i + "</span>";
                else {
                    var k = this._get(n, "yearRange").split(":")
                      , d = (new Date).getFullYear()
                      , g = function(n) {
                        var t = n.match(/c[+-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+-].*/) ? d + parseInt(n, 10) : parseInt(n, 10);
                        return isNaN(t) ? d : t
                    }
                      , h = g(k[0])
                      , v = Math.max(h, g(k[1] || ""));
                    for (h = u ? Math.max(h, u.getFullYear()) : h,
                    v = f ? Math.min(v, f.getFullYear()) : v,
                    n.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + r + ".datepicker._selectMonthYear('#" + n.id + "', this, 'Y');\" >"; h <= v; h++)
                        n.yearshtml += '<option value="' + h + '"' + (h == i ? ' selected="selected"' : "") + ">" + h + "</option>";
                    n.yearshtml += "</select>",
                    l += n.yearshtml,
                    n.yearshtml = null
                }
            return l += this._get(n, "yearSuffix"),
            nt && (l += (e || !y || !p ? "&#xa0;" : "") + a),
            l += "</div>",
            l
        },
        _adjustInstDate: function(n, t, i) {
            var u = n.drawYear + (i == "Y" ? t : 0)
              , f = n.drawMonth + (i == "M" ? t : 0)
              , e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i == "D" ? t : 0)
              , r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u,f,e)));
            n.selectedDay = r.getDate(),
            n.drawMonth = n.selectedMonth = r.getMonth(),
            n.drawYear = n.selectedYear = r.getFullYear(),
            (i == "M" || i == "Y") && this._notifyChange(n)
        },
        _restrictMinMax: function(n, t) {
            var r = this._getMinMaxDate(n, "min")
              , u = this._getMinMaxDate(n, "max")
              , i = r && t < r ? r : t;
            return i = u && i > u ? u : i,
            i
        },
        _notifyChange: function(n) {
            var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
        },
        _getNumberOfMonths: function(n) {
            var t = this._get(n, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function(n, t) {
            return this._determineDate(n, this._get(n, t + "Date"), null)
        },
        _getDaysInMonth: function(n, t) {
            return 32 - this._daylightSavingAdjust(new Date(n,t,32)).getDate()
        },
        _getFirstDayOfMonth: function(n, t) {
            return new Date(n,t,1).getDay()
        },
        _canAdjustMonth: function(n, t, i, r) {
            var f = this._getNumberOfMonths(n)
              , u = this._daylightSavingAdjust(new Date(i,r + (t < 0 ? t : f[0] * f[1]),1));
            return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())),
            this._isInRange(n, u)
        },
        _isInRange: function(n, t) {
            var i = this._getMinMaxDate(n, "min")
              , r = this._getMinMaxDate(n, "max");
            return (!i || t.getTime() >= i.getTime()) && (!r || t.getTime() <= r.getTime())
        },
        _getFormatConfig: function(n) {
            var t = this._get(n, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
            {
                shortYearCutoff: t,
                dayNamesShort: this._get(n, "dayNamesShort"),
                dayNames: this._get(n, "dayNames"),
                monthNamesShort: this._get(n, "monthNamesShort"),
                monthNames: this._get(n, "monthNames")
            }
        },
        _formatDate: function(n, t, i, r) {
            t || (n.currentDay = n.selectedDay,
            n.currentMonth = n.selectedMonth,
            n.currentYear = n.selectedYear);
            var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r,i,t)) : this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay));
            return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
        }
    }),
    n.fn.datepicker = function(t) {
        if (!this.length)
            return this;
        n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick).find("body").append(n.datepicker.dpDiv),
        n.datepicker.initialized = !0);
        var i = Array.prototype.slice.call(arguments, 1);
        return typeof t != "string" || t != "isDisabled" && t != "getDate" && t != "widget" ? t == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
            typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
        }) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i))
    }
    ,
    n.datepicker = new e,
    n.datepicker.initialized = !1,
    n.datepicker.uuid = +new Date,
    n.datepicker.version = "1.8.20",
    window["DP_jQuery_" + r] = n
}(jQuery),
function(n, t) {
    var i = "ui-dialog ui-widget ui-widget-content ui-corner-all "
      , r = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }
      , u = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    }
      , f = n.attrFn || {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
        click: !0
    };
    n.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function(t) {
                    var i = n(this).css(t).offset().top;
                    i < 0 && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"),
            typeof this.originalTitle != "string" && (this.originalTitle = ""),
            this.options.title = this.options.title || this.originalTitle;
            var t = this
              , r = t.options
              , s = r.title || "&#160;"
              , o = n.ui.dialog.getTitleId(t.element)
              , e = (t.uiDialog = n("<div></div>")).appendTo(document.body).hide().addClass(i + r.dialogClass).css({
                zIndex: r.zIndex
            }).attr("tabIndex", -1).css("outline", 0).keydown(function(i) {
                r.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === n.ui.keyCode.ESCAPE && (t.close(i),
                i.preventDefault())
            }).attr({
                role: "dialog",
                "aria-labelledby": o
            }).mousedown(function(n) {
                t.moveToTop(!1, n)
            })
              , h = t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(e)
              , f = (t.uiDialogTitlebar = n("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(e)
              , u = n('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                u.addClass("ui-state-hover")
            }, function() {
                u.removeClass("ui-state-hover")
            }).focus(function() {
                u.addClass("ui-state-focus")
            }).blur(function() {
                u.removeClass("ui-state-focus")
            }).click(function(n) {
                return t.close(n),
                !1
            }).appendTo(f)
              , c = (t.uiDialogTitlebarCloseText = n("<span></span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u)
              , l = n("<span></span>").addClass("ui-dialog-title").attr("id", o).html(s).prependTo(f);
            n.isFunction(r.beforeclose) && !n.isFunction(r.beforeClose) && (r.beforeClose = r.beforeclose),
            f.find("*").add(f).disableSelection(),
            r.draggable && n.fn.draggable && t._makeDraggable(),
            r.resizable && n.fn.resizable && t._makeResizable(),
            t._createButtons(r.buttons),
            t._isOpen = !1,
            n.fn.bgiframe && e.bgiframe()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        destroy: function() {
            var n = this;
            return n.overlay && n.overlay.destroy(),
            n.uiDialog.hide(),
            n.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),
            n.uiDialog.remove(),
            n.originalTitle && n.element.attr("title", n.originalTitle),
            n
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(t) {
            var i = this, r, u;
            if (!1 !== i._trigger("beforeClose", t))
                return i.overlay && i.overlay.destroy(),
                i.uiDialog.unbind("keypress.ui-dialog"),
                i._isOpen = !1,
                i.options.hide ? i.uiDialog.hide(i.options.hide, function() {
                    i._trigger("close", t)
                }) : (i.uiDialog.hide(),
                i._trigger("close", t)),
                n.ui.dialog.overlay.resize(),
                i.options.modal && (r = 0,
                n(".ui-dialog").each(function() {
                    this !== i.uiDialog[0] && (u = n(this).css("z-index"),
                    isNaN(u) || (r = Math.max(r, u)))
                }),
                n.ui.dialog.maxZ = r),
                i
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(t, i) {
            var r = this, u = r.options, f;
            return u.modal && !t || !u.stack && !u.modal ? r._trigger("focus", i) : (u.zIndex > n.ui.dialog.maxZ && (n.ui.dialog.maxZ = u.zIndex),
            r.overlay && (n.ui.dialog.maxZ += 1,
            r.overlay.$el.css("z-index", n.ui.dialog.overlay.maxZ = n.ui.dialog.maxZ)),
            f = {
                scrollTop: r.element.scrollTop(),
                scrollLeft: r.element.scrollLeft()
            },
            n.ui.dialog.maxZ += 1,
            r.uiDialog.css("z-index", n.ui.dialog.maxZ),
            r.element.attr(f),
            r._trigger("focus", i),
            r)
        },
        open: function() {
            if (!this._isOpen) {
                var t = this
                  , i = t.options
                  , r = t.uiDialog;
                return t.overlay = i.modal ? new n.ui.dialog.overlay(t) : null,
                t._size(),
                t._position(i.position),
                r.show(i.show),
                t.moveToTop(!0),
                i.modal && r.bind("keydown.ui-dialog", function(t) {
                    if (t.keyCode === n.ui.keyCode.TAB) {
                        var i = n(":tabbable", this)
                          , r = i.filter(":first")
                          , u = i.filter(":last");
                        return t.target === u[0] && !t.shiftKey ? (r.focus(1),
                        !1) : t.target === r[0] && t.shiftKey ? (u.focus(1),
                        !1) : void 0
                    }
                }),
                n(t.element.find(":tabbable").get().concat(r.find(".ui-dialog-buttonpane :tabbable").get().concat(r.get()))).eq(0).focus(),
                t._isOpen = !0,
                t._trigger("open"),
                t
            }
        },
        _createButtons: function(t) {
            var i = this
              , r = !1
              , u = n("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix")
              , e = n("<div></div>").addClass("ui-dialog-buttonset").appendTo(u);
            i.uiDialog.find(".ui-dialog-buttonpane").remove(),
            typeof t == "object" && t !== null && n.each(t, function() {
                return !(r = !0)
            }),
            r && (n.each(t, function(t, r) {
                r = n.isFunction(r) ? {
                    click: r,
                    text: t
                } : r;
                var u = n('<button type="button"></button>').click(function() {
                    r.click.apply(i.element[0], arguments)
                }).appendTo(e);
                n.each(r, function(n, t) {
                    n !== "click" && (n in f ? u[n](t) : u.attr(n, t))
                }),
                n.fn.button && u.button()
            }),
            u.appendTo(i.uiDialog))
        },
        _makeDraggable: function() {
            function i(n) {
                return {
                    position: n.position,
                    offset: n.offset
                }
            }
            var t = this, r = t.options, u = n(document), f;
            t.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(u, e) {
                    f = r.height === "auto" ? "auto" : n(this).height(),
                    n(this).height(n(this).height()).addClass("ui-dialog-dragging"),
                    t._trigger("dragStart", u, i(e))
                },
                drag: function(n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function(e, o) {
                    r.position = [o.position.left - u.scrollLeft(), o.position.top - u.scrollTop()],
                    n(this).removeClass("ui-dialog-dragging").height(f),
                    t._trigger("dragStop", e, i(o)),
                    n.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(i) {
            function f(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            i = i === t ? this.options.resizable : i;
            var r = this
              , u = r.options
              , e = r.uiDialog.css("position")
              , o = typeof i == "string" ? i : "n,e,s,w,se,sw,ne,nw";
            r.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: r.element,
                maxWidth: u.maxWidth,
                maxHeight: u.maxHeight,
                minWidth: u.minWidth,
                minHeight: r._minHeight(),
                handles: o,
                start: function(t, i) {
                    n(this).addClass("ui-dialog-resizing"),
                    r._trigger("resizeStart", t, f(i))
                },
                resize: function(n, t) {
                    r._trigger("resize", n, f(t))
                },
                stop: function(t, i) {
                    n(this).removeClass("ui-dialog-resizing"),
                    u.height = n(this).height(),
                    u.width = n(this).width(),
                    r._trigger("resizeStop", t, f(i)),
                    n.ui.dialog.overlay.resize()
                }
            }).css("position", e).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var n = this.options;
            return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
        },
        _position: function(t) {
            var i = [], u = [0, 0], r;
            t ? ((typeof t == "string" || typeof t == "object" && "0"in t) && (i = t.split ? t.split(" ") : [t[0], t[1]],
            i.length === 1 && (i[1] = i[0]),
            n.each(["left", "top"], function(n, t) {
                +i[n] === i[n] && (u[n] = i[n],
                i[n] = t)
            }),
            t = {
                my: i.join(" "),
                at: i.join(" "),
                offset: u.join(" ")
            }),
            t = n.extend({}, n.ui.dialog.prototype.options.position, t)) : t = n.ui.dialog.prototype.options.position,
            r = this.uiDialog.is(":visible"),
            r || this.uiDialog.show(),
            this.uiDialog.css({
                top: 0,
                left: 0
            }).position(n.extend({
                of: window
            }, t)),
            r || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var e = this
              , i = {}
              , f = !1;
            n.each(t, function(n, t) {
                e._setOption(n, t),
                n in r && (f = !0),
                n in u && (i[n] = t)
            }),
            f && this._size(),
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", i)
        },
        _setOption: function(t, r) {
            var u = this, f = u.uiDialog, o, e;
            switch (t) {
            case "beforeclose":
                t = "beforeClose";
                break;
            case "buttons":
                u._createButtons(r);
                break;
            case "closeText":
                u.uiDialogTitlebarCloseText.text("" + r);
                break;
            case "dialogClass":
                f.removeClass(u.options.dialogClass).addClass(i + r);
                break;
            case "disabled":
                r ? f.addClass("ui-dialog-disabled") : f.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                o = f.is(":data(draggable)"),
                o && !r && f.draggable("destroy"),
                !o && r && u._makeDraggable();
                break;
            case "position":
                u._position(r);
                break;
            case "resizable":
                e = f.is(":data(resizable)"),
                e && !r && f.resizable("destroy"),
                e && typeof r == "string" && f.resizable("option", "handles", r),
                !e && r !== !1 && u._makeResizable(r);
                break;
            case "title":
                n(".ui-dialog-title", u.uiDialogTitlebar).html("" + (r || "&#160;"))
            }
            n.Widget.prototype._setOption.apply(u, arguments)
        },
        _size: function() {
            var t = this.options, i, r, f = this.uiDialog.is(":visible"), u;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }),
            t.minWidth > t.width && (t.width = t.minWidth),
            i = this.uiDialog.css({
                height: "auto",
                width: t.width
            }).height(),
            r = Math.max(0, t.minHeight - i),
            t.height === "auto" ? n.support.minHeight ? this.element.css({
                minHeight: r,
                height: "auto"
            }) : (this.uiDialog.show(),
            u = this.element.css("height", "auto").height(),
            f || this.uiDialog.hide(),
            this.element.height(Math.max(u, r))) : this.element.height(Math.max(t.height - i, 0)),
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }),
    n.extend(n.ui.dialog, {
        version: "1.8.20",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(n) {
            var t = n.attr("id");
            return t || (this.uuid += 1,
            t = this.uuid),
            "ui-dialog-title-" + t
        },
        overlay: function(t) {
            this.$el = n.ui.dialog.overlay.create(t)
        }
    }),
    n.extend(n.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: n.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(n) {
            return n + ".dialog-overlay"
        }).join(" "),
        create: function(t) {
            this.instances.length === 0 && (setTimeout(function() {
                n.ui.dialog.overlay.instances.length && n(document).bind(n.ui.dialog.overlay.events, function(t) {
                    if (n(t.target).zIndex() < n.ui.dialog.overlay.maxZ)
                        return !1
                })
            }, 1),
            n(document).bind("keydown.dialog-overlay", function(i) {
                t.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === n.ui.keyCode.ESCAPE && (t.close(i),
                i.preventDefault())
            }),
            n(window).bind("resize.dialog-overlay", n.ui.dialog.overlay.resize));
            var i = (this.oldInstances.pop() || n("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            return n.fn.bgiframe && i.bgiframe(),
            this.instances.push(i),
            i
        },
        destroy: function(t) {
            var r = n.inArray(t, this.instances), i;
            r != -1 && this.oldInstances.push(this.instances.splice(r, 1)[0]),
            this.instances.length === 0 && n([document, window]).unbind(".dialog-overlay"),
            t.remove(),
            i = 0,
            n.each(this.instances, function() {
                i = Math.max(i, this.css("z-index"))
            }),
            this.maxZ = i
        },
        height: function() {
            var t, i;
            return n.browser.msie && n.browser.version < 7 ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
            i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight),
            t < i ? n(window).height() + "px" : t + "px") : n(document).height() + "px"
        },
        width: function() {
            var t, i;
            return n.browser.msie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
            i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth),
            t < i ? n(window).width() + "px" : t + "px") : n(document).width() + "px"
        },
        resize: function() {
            var t = n([]);
            n.each(n.ui.dialog.overlay.instances, function() {
                t = t.add(this)
            }),
            t.css({
                width: 0,
                height: 0
            }).css({
                width: n.ui.dialog.overlay.width(),
                height: n.ui.dialog.overlay.height()
            })
        }
    }),
    n.extend(n.ui.dialog.overlay.prototype, {
        destroy: function() {
            n.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery),
function(n) {
    n.ui = n.ui || {};
    var r = /left|center|right/
      , u = /top|center|bottom/
      , i = "center"
      , f = {}
      , e = n.fn.position
      , o = n.fn.offset;
    n.fn.position = function(t) {
        if (!t || !t.of)
            return e.apply(this, arguments);
        t = n.extend({}, t);
        var s = n(t.of), v = s[0], a = (t.collision || "flip").split(" "), h = t.offset ? t.offset.split(" ") : [0, 0], c, l, o;
        return v.nodeType === 9 ? (c = s.width(),
        l = s.height(),
        o = {
            top: 0,
            left: 0
        }) : v.setTimeout ? (c = s.width(),
        l = s.height(),
        o = {
            top: s.scrollTop(),
            left: s.scrollLeft()
        }) : v.preventDefault ? (t.at = "left top",
        c = l = 0,
        o = {
            top: t.of.pageY,
            left: t.of.pageX
        }) : (c = s.outerWidth(),
        l = s.outerHeight(),
        o = s.offset()),
        n.each(["my", "at"], function() {
            var n = (t[this] || "").split(" ");
            n.length === 1 && (n = r.test(n[0]) ? n.concat([i]) : u.test(n[0]) ? [i].concat(n) : [i, i]),
            n[0] = r.test(n[0]) ? n[0] : i,
            n[1] = u.test(n[1]) ? n[1] : i,
            t[this] = n
        }),
        a.length === 1 && (a[1] = a[0]),
        h[0] = parseInt(h[0], 10) || 0,
        h.length === 1 && (h[1] = h[0]),
        h[1] = parseInt(h[1], 10) || 0,
        t.at[0] === "right" ? o.left += c : t.at[0] === i && (o.left += c / 2),
        t.at[1] === "bottom" ? o.top += l : t.at[1] === i && (o.top += l / 2),
        o.left += h[0],
        o.top += h[1],
        this.each(function() {
            var u = n(this), e = u.outerWidth(), s = u.outerHeight(), v = parseInt(n.curCSS(this, "marginLeft", !0)) || 0, y = parseInt(n.curCSS(this, "marginTop", !0)) || 0, w = e + v + (parseInt(n.curCSS(this, "marginRight", !0)) || 0), b = s + y + (parseInt(n.curCSS(this, "marginBottom", !0)) || 0), r = n.extend({}, o), p;
            t.my[0] === "right" ? r.left -= e : t.my[0] === i && (r.left -= e / 2),
            t.my[1] === "bottom" ? r.top -= s : t.my[1] === i && (r.top -= s / 2),
            f.fractions || (r.left = Math.round(r.left),
            r.top = Math.round(r.top)),
            p = {
                left: r.left - v,
                top: r.top - y
            },
            n.each(["left", "top"], function(i, u) {
                n.ui.position[a[i]] && n.ui.position[a[i]][u](r, {
                    targetWidth: c,
                    targetHeight: l,
                    elemWidth: e,
                    elemHeight: s,
                    collisionPosition: p,
                    collisionWidth: w,
                    collisionHeight: b,
                    offset: h,
                    my: t.my,
                    at: t.at
                })
            }),
            n.fn.bgiframe && u.bgiframe(),
            u.offset(n.extend(r, {
                using: t.using
            }))
        })
    }
    ,
    n.ui.position = {
        fit: {
            left: function(t, i) {
                var r = n(window)
                  , u = i.collisionPosition.left + i.collisionWidth - r.width() - r.scrollLeft();
                t.left = u > 0 ? t.left - u : Math.max(t.left - i.collisionPosition.left, t.left)
            },
            top: function(t, i) {
                var r = n(window)
                  , u = i.collisionPosition.top + i.collisionHeight - r.height() - r.scrollTop();
                t.top = u > 0 ? t.top - u : Math.max(t.top - i.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function(t, r) {
                if (r.at[0] !== i) {
                    var u = n(window)
                      , s = r.collisionPosition.left + r.collisionWidth - u.width() - u.scrollLeft()
                      , f = r.my[0] === "left" ? -r.elemWidth : r.my[0] === "right" ? r.elemWidth : 0
                      , e = r.at[0] === "left" ? r.targetWidth : -r.targetWidth
                      , o = -2 * r.offset[0];
                    t.left += r.collisionPosition.left < 0 ? f + e + o : s > 0 ? f + e + o : 0
                }
            },
            top: function(t, r) {
                if (r.at[1] !== i) {
                    var u = n(window)
                      , s = r.collisionPosition.top + r.collisionHeight - u.height() - u.scrollTop()
                      , f = r.my[1] === "top" ? -r.elemHeight : r.my[1] === "bottom" ? r.elemHeight : 0
                      , e = r.at[1] === "top" ? r.targetHeight : -r.targetHeight
                      , o = -2 * r.offset[1];
                    t.top += r.collisionPosition.top < 0 ? f + e + o : s > 0 ? f + e + o : 0
                }
            }
        }
    },
    n.offset.setOffset || (n.offset.setOffset = function(t, i) {
        /static/.test(n.curCSS(t, "position")) && (t.style.position = "relative");
        var r = n(t)
          , u = r.offset()
          , e = parseInt(n.curCSS(t, "top", !0), 10) || 0
          , o = parseInt(n.curCSS(t, "left", !0), 10) || 0
          , f = {
            top: i.top - u.top + e,
            left: i.left - u.left + o
        };
        "using"in i ? i.using.call(t, f) : r.css(f)
    }
    ,
    n.fn.offset = function(t) {
        var i = this[0];
        return !i || !i.ownerDocument ? null : t ? this.each(function() {
            n.offset.setOffset(this, t)
        }) : o.call(this)
    }
    ),
    function() {
        var i = document.getElementsByTagName("body")[0], e = document.createElement("div"), t, r, u, o, s, h;
        t = document.createElement(i ? "div" : "body"),
        u = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        i && n.extend(u, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (h in u)
            t.style[h] = u[h];
        t.appendChild(e),
        r = i || document.documentElement,
        r.insertBefore(t, r.firstChild),
        e.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",
        o = n(e).offset(function(n, t) {
            return t
        }).offset(),
        t.innerHTML = "",
        r.removeChild(t),
        s = o.top + o.left + (i ? 2e3 : 0),
        f.fractions = s > 21 && s < 22
    }()
}(jQuery),
function(n, t) {
    n.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function() {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }),
            this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
            this.oldValue = this._value(),
            this._refreshValue()
        },
        destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.valueDiv.remove(),
            n.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function(n) {
            return n === t ? this._value() : (this._setOption("value", n),
            this)
        },
        _setOption: function(t, i) {
            t === "value" && (this.options.value = i,
            this._refreshValue(),
            this._value() === this.options.max && this._trigger("complete")),
            n.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function() {
            var n = this.options.value;
            return typeof n != "number" && (n = 0),
            Math.min(this.options.max, Math.max(this.min, n))
        },
        _percentage: function() {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function() {
            var n = this.value()
              , t = this._percentage();
            this.oldValue !== n && (this.oldValue = n,
            this._trigger("change")),
            this.valueDiv.toggle(n > this.min).toggleClass("ui-corner-right", n === this.options.max).width(t.toFixed(0) + "%"),
            this.element.attr("aria-valuenow", n)
        }
    }),
    n.extend(n.ui.progressbar, {
        version: "1.8.20"
    })
}(jQuery),
function(n) {
    var i = 5;
    n.widget("ui.slider", n.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var t = this, r = this.options, f = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", s = r.values && r.values.length || 1, e = [], u;
            for (this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (r.disabled ? " ui-slider-disabled ui-disabled" : "")),
            this.range = n([]),
            r.range && (r.range === !0 && (r.values || (r.values = [this._valueMin(), this._valueMin()]),
            r.values.length && r.values.length !== 2 && (r.values = [r.values[0], r.values[0]])),
            this.range = n("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (r.range === "min" || r.range === "max" ? " ui-slider-range-" + r.range : ""))),
            u = f.length; u < s; u += 1)
                e.push(o);
            this.handles = f.add(n(e.join("")).appendTo(t.element)),
            this.handle = this.handles.eq(0),
            this.handles.add(this.range).filter("a").click(function(n) {
                n.preventDefault()
            }).hover(function() {
                r.disabled || n(this).addClass("ui-state-hover")
            }, function() {
                n(this).removeClass("ui-state-hover")
            }).focus(function() {
                r.disabled ? n(this).blur() : (n(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),
                n(this).addClass("ui-state-focus"))
            }).blur(function() {
                n(this).removeClass("ui-state-focus")
            }),
            this.handles.each(function(t) {
                n(this).data("index.ui-slider-handle", t)
            }),
            this.handles.keydown(function(r) {
                var e = n(this).data("index.ui-slider-handle"), s, f, u, o;
                if (!t.options.disabled) {
                    switch (r.keyCode) {
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_UP:
                    case n.ui.keyCode.PAGE_DOWN:
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (r.preventDefault(),
                        !t._keySliding && (t._keySliding = !0,
                        n(this).addClass("ui-state-active"),
                        s = t._start(r, e),
                        s === !1))
                            return
                    }
                    o = t.options.step,
                    f = t.options.values && t.options.values.length ? u = t.values(e) : u = t.value();
                    switch (r.keyCode) {
                    case n.ui.keyCode.HOME:
                        u = t._valueMin();
                        break;
                    case n.ui.keyCode.END:
                        u = t._valueMax();
                        break;
                    case n.ui.keyCode.PAGE_UP:
                        u = t._trimAlignValue(f + (t._valueMax() - t._valueMin()) / i);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        u = t._trimAlignValue(f - (t._valueMax() - t._valueMin()) / i);
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                        if (f === t._valueMax())
                            return;
                        u = t._trimAlignValue(f + o);
                        break;
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (f === t._valueMin())
                            return;
                        u = t._trimAlignValue(f - o)
                    }
                    t._slide(r, e, u)
                }
            }).keyup(function(i) {
                var r = n(this).data("index.ui-slider-handle");
                t._keySliding && (t._keySliding = !1,
                t._stop(i, r),
                t._change(i, r),
                n(this).removeClass("ui-state-active"))
            }),
            this._refreshValue(),
            this._animateOff = !1
        },
        destroy: function() {
            return this.handles.remove(),
            this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),
            this._mouseDestroy(),
            this
        },
        _mouseCapture: function(t) {
            var u = this.options, h, f, e, i, o, r, c, s, l;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            h = {
                x: t.pageX,
                y: t.pageY
            },
            f = this._normValueFromMouse(h),
            e = this._valueMax() - this._valueMin() + 1,
            o = this,
            this.handles.each(function(t) {
                var u = Math.abs(f - o.values(t));
                e > u && (e = u,
                i = n(this),
                r = t)
            }),
            u.range === !0 && this.values(1) === u.min && (r += 1,
            i = n(this.handles[r])),
            c = this._start(t, r),
            c === !1 ? !1 : (this._mouseSliding = !0,
            o._handleIndex = r,
            i.addClass("ui-state-active").focus(),
            s = i.offset(),
            l = !n(t.target).parents().andSelf().is(".ui-slider-handle"),
            this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - s.left - i.width() / 2,
                top: t.pageY - s.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(t, r, f),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(n) {
            var t = {
                x: n.pageX,
                y: n.pageY
            }
              , i = this._normValueFromMouse(t);
            return this._slide(n, this._handleIndex, i),
            !1
        },
        _mouseStop: function(n) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(n, this._handleIndex),
            this._change(n, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(n) {
            var i, r, t, u, f;
            return this.orientation === "horizontal" ? (i = this.elementSize.width,
            r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height,
            r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            t = r / i,
            t > 1 && (t = 1),
            t < 0 && (t = 0),
            this.orientation === "vertical" && (t = 1 - t),
            u = this._valueMax() - this._valueMin(),
            f = this._valueMin() + t * u,
            this._trimAlignValue(f)
        },
        _start: function(n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t),
            i.values = this.values()),
            this._trigger("start", n, i)
        },
        _slide: function(n, t, i) {
            var r, f, u;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1),
            this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r),
            i !== this.values(t) && (f = this.values(),
            f[t] = i,
            u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i,
                values: f
            }),
            r = this.values(t ? 0 : 1),
            u !== !1 && this.values(t, i, !0))) : i !== this.value() && (u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i
            }),
            u !== !1 && this.value(i))
        },
        _stop: function(n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t),
            i.values = this.values()),
            this._trigger("stop", n, i)
        },
        _change: function(n, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t),
                i.values = this.values()),
                this._trigger("change", n, i)
            }
        },
        value: function(n) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(n),
                this._refreshValue(),
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(t, i) {
            var u, f, r;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(i),
                this._refreshValue(),
                this._change(null, t);
                return
            }
            if (!arguments.length)
                return this._values();
            if (!n.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (u = this.options.values,
            f = arguments[0],
            r = 0; r < u.length; r += 1)
                u[r] = this._trimAlignValue(f[r]),
                this._change(null, r);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var r, u = 0;
            n.isArray(this.options.values) && (u = this.options.values.length),
            n.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
            case "disabled":
                i ? (this.handles.filter(".ui-state-focus").blur(),
                this.handles.removeClass("ui-state-hover"),
                this.handles.propAttr("disabled", !0),
                this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1),
                this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                r = 0; r < u; r += 1)
                    this._change(null, r);
                this._animateOff = !1
            }
        },
        _value: function() {
            var n = this.options.value;
            return n = this._trimAlignValue(n),
            n
        },
        _values: function(n) {
            var r, t, i;
            if (arguments.length)
                return r = this.options.values[n],
                r = this._trimAlignValue(r),
                r;
            for (t = this.options.values.slice(),
            i = 0; i < t.length; i += 1)
                t[i] = this._trimAlignValue(t[i]);
            return t
        },
        _trimAlignValue: function(n) {
            if (n <= this._valueMin())
                return this._valueMin();
            if (n >= this._valueMax())
                return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1
              , i = (n - this._valueMin()) % t
              , r = n - i;
            return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t),
            parseFloat(r.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var f = this.options.range, r = this.options, i = this, u = this._animateOff ? !1 : r.animate, t, e = {}, s, c, o, h;
            this.options.values && this.options.values.length ? this.handles.each(function(f) {
                t = (i.values(f) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100,
                e[i.orientation === "horizontal" ? "left" : "bottom"] = t + "%",
                n(this).stop(1, 1)[u ? "animate" : "css"](e, r.animate),
                i.options.range === !0 && (i.orientation === "horizontal" ? (f === 0 && i.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: t + "%"
                }, r.animate),
                f === 1 && i.range[u ? "animate" : "css"]({
                    width: t - s + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (f === 0 && i.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: t + "%"
                }, r.animate),
                f === 1 && i.range[u ? "animate" : "css"]({
                    height: t - s + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))),
                s = t
            }) : (c = this.value(),
            o = this._valueMin(),
            h = this._valueMax(),
            t = h !== o ? (c - o) / (h - o) * 100 : 0,
            e[i.orientation === "horizontal" ? "left" : "bottom"] = t + "%",
            this.handle.stop(1, 1)[u ? "animate" : "css"](e, r.animate),
            f === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: t + "%"
            }, r.animate),
            f === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({
                width: 100 - t + "%"
            }, {
                queue: !1,
                duration: r.animate
            }),
            f === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: t + "%"
            }, r.animate),
            f === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({
                height: 100 - t + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        }
    }),
    n.extend(n.ui.slider, {
        version: "1.8.20"
    })
}(jQuery),
function(n, t) {
    function i() {
        return ++u
    }
    function r() {
        return ++f
    }
    var u = 0
      , f = 0;
    n.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: !1,
            cookie: null,
            collapsible: !1,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function() {
            this._tabify(!0)
        },
        _setOption: function(n, t) {
            if (n == "selected") {
                if (this.options.collapsible && t == this.options.selected)
                    return;
                this.select(t)
            } else
                this.options[n] = t,
                this._tabify()
        },
        _tabId: function(n) {
            return n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + i()
        },
        _sanitizeSelector: function(n) {
            return n.replace(/:/g, "\\:")
        },
        _cookie: function() {
            var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + r());
            return n.cookie.apply(null, [t].concat(n.makeArray(arguments)))
        },
        _ui: function(n, t) {
            return {
                tab: n,
                panel: t,
                index: this.anchors.index(n)
            }
        },
        _cleanup: function() {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
                var t = n(this);
                t.html(t.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function(i) {
            function v(t, i) {
                t.css("display", ""),
                !n.support.opacity && i.opacity && t[0].style.removeAttribute("filter")
            }
            var u = this, r = this.options, y = /^#.+/, o, s, h, c, f, e, l, a;
            for (this.list = this.element.find("ol,ul").eq(0),
            this.lis = n(" > li:has(a[href])", this.list),
            this.anchors = this.lis.map(function() {
                return n("a", this)[0]
            }),
            this.panels = n([]),
            this.anchors.each(function(t, i) {
                var f = n(i).attr("href"), s = f.split("#")[0], h, o, e;
                s && (s === location.toString().split("#")[0] || (h = n("base")[0]) && s === h.href) && (f = i.hash,
                i.href = f),
                y.test(f) ? u.panels = u.panels.add(u.element.find(u._sanitizeSelector(f))) : f && f !== "#" ? (n.data(i, "href.tabs", f),
                n.data(i, "load.tabs", f.replace(/#.*$/, "")),
                o = u._tabId(i),
                i.href = "#" + o,
                e = u.element.find("#" + o),
                e.length || (e = n(r.panelTemplate).attr("id", o).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(u.panels[t - 1] || u.list),
                e.data("destroy.tabs", !0)),
                u.panels = u.panels.add(e)) : r.disabled.push(t)
            }),
            i ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),
            this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),
            this.lis.addClass("ui-state-default ui-corner-top"),
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),
            r.selected === t ? (location.hash && this.anchors.each(function(n, t) {
                if (t.hash == location.hash)
                    return r.selected = n,
                    !1
            }),
            typeof r.selected != "number" && r.cookie && (r.selected = parseInt(u._cookie(), 10)),
            typeof r.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (r.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))),
            r.selected = r.selected || (this.lis.length ? 0 : -1)) : r.selected === null && (r.selected = -1),
            r.selected = r.selected >= 0 && this.anchors[r.selected] || r.selected < 0 ? r.selected : 0,
            r.disabled = n.unique(r.disabled.concat(n.map(this.lis.filter(".ui-state-disabled"), function(n) {
                return u.lis.index(n)
            }))).sort(),
            n.inArray(r.selected, r.disabled) != -1 && r.disabled.splice(n.inArray(r.selected, r.disabled), 1),
            this.panels.addClass("ui-tabs-hide"),
            this.lis.removeClass("ui-tabs-selected ui-state-active"),
            r.selected >= 0 && this.anchors.length && (u.element.find(u._sanitizeSelector(u.anchors[r.selected].hash)).removeClass("ui-tabs-hide"),
            this.lis.eq(r.selected).addClass("ui-tabs-selected ui-state-active"),
            u.element.queue("tabs", function() {
                u._trigger("show", null, u._ui(u.anchors[r.selected], u.element.find(u._sanitizeSelector(u.anchors[r.selected].hash))[0]))
            }),
            this.load(r.selected)),
            n(window).bind("unload", function() {
                u.lis.add(u.anchors).unbind(".tabs"),
                u.lis = u.anchors = u.panels = null
            })) : r.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")),
            this.element[r.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"),
            r.cookie && this._cookie(r.selected, r.cookie),
            o = 0; s = this.lis[o]; o++)
                n(s)[n.inArray(o, r.disabled) != -1 && !n(s).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
            r.cache === !1 && this.anchors.removeData("cache.tabs"),
            this.lis.add(this.anchors).unbind(".tabs"),
            r.event !== "mouseover" && (h = function(n, t) {
                t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + n)
            }
            ,
            c = function(n, t) {
                t.removeClass("ui-state-" + n)
            }
            ,
            this.lis.bind("mouseover.tabs", function() {
                h("hover", n(this))
            }),
            this.lis.bind("mouseout.tabs", function() {
                c("hover", n(this))
            }),
            this.anchors.bind("focus.tabs", function() {
                h("focus", n(this).closest("li"))
            }),
            this.anchors.bind("blur.tabs", function() {
                c("focus", n(this).closest("li"))
            })),
            r.fx && (n.isArray(r.fx) ? (f = r.fx[0],
            e = r.fx[1]) : f = e = r.fx),
            l = e ? function(t, i) {
                n(t).closest("li").addClass("ui-tabs-selected ui-state-active"),
                i.hide().removeClass("ui-tabs-hide").animate(e, e.duration || "normal", function() {
                    v(i, e),
                    u._trigger("show", null, u._ui(t, i[0]))
                })
            }
            : function(t, i) {
                n(t).closest("li").addClass("ui-tabs-selected ui-state-active"),
                i.removeClass("ui-tabs-hide"),
                u._trigger("show", null, u._ui(t, i[0]))
            }
            ,
            a = f ? function(n, t) {
                t.animate(f, f.duration || "normal", function() {
                    u.lis.removeClass("ui-tabs-selected ui-state-active"),
                    t.addClass("ui-tabs-hide"),
                    v(t, f),
                    u.element.dequeue("tabs")
                })
            }
            : function(n, t) {
                u.lis.removeClass("ui-tabs-selected ui-state-active"),
                t.addClass("ui-tabs-hide"),
                u.element.dequeue("tabs")
            }
            ,
            this.anchors.bind(r.event + ".tabs", function() {
                var t = this
                  , i = n(t).closest("li")
                  , f = u.panels.filter(":not(.ui-tabs-hide)")
                  , e = u.element.find(u._sanitizeSelector(t.hash));
                if (i.hasClass("ui-tabs-selected") && !r.collapsible || i.hasClass("ui-state-disabled") || i.hasClass("ui-state-processing") || u.panels.filter(":animated").length || u._trigger("select", null, u._ui(this, e[0])) === !1)
                    return this.blur(),
                    !1;
                if (r.selected = u.anchors.index(this),
                u.abort(),
                r.collapsible) {
                    if (i.hasClass("ui-tabs-selected"))
                        return r.selected = -1,
                        r.cookie && u._cookie(r.selected, r.cookie),
                        u.element.queue("tabs", function() {
                            a(t, f)
                        }).dequeue("tabs"),
                        this.blur(),
                        !1;
                    if (!f.length)
                        return r.cookie && u._cookie(r.selected, r.cookie),
                        u.element.queue("tabs", function() {
                            l(t, e)
                        }),
                        u.load(u.anchors.index(this)),
                        this.blur(),
                        !1
                }
                if (r.cookie && u._cookie(r.selected, r.cookie),
                e.length)
                    f.length && u.element.queue("tabs", function() {
                        a(t, f)
                    }),
                    u.element.queue("tabs", function() {
                        l(t, e)
                    }),
                    u.load(u.anchors.index(this));
                else
                    throw "jQuery UI Tabs: Mismatching fragment identifier.";
                n.browser.msie && this.blur()
            }),
            this.anchors.bind("click.tabs", function() {
                return !1
            })
        },
        _getIndex: function(n) {
            return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))),
            n
        },
        destroy: function() {
            var t = this.options;
            return this.abort(),
            this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),
            this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),
            this.anchors.each(function() {
                var t = n.data(this, "href.tabs"), i;
                t && (this.href = t),
                i = n(this).unbind(".tabs"),
                n.each(["href", "load", "cache"], function(n, t) {
                    i.removeData(t + ".tabs")
                })
            }),
            this.lis.unbind(".tabs").add(this.panels).each(function() {
                n.data(this, "destroy.tabs") ? n(this).remove() : n(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "))
            }),
            t.cookie && this._cookie(null, t.cookie),
            this
        },
        add: function(i, r, u) {
            var f;
            u === t && (u = this.anchors.length);
            var e = this
              , o = this.options
              , s = n(o.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, r))
              , h = i.indexOf("#") ? this._tabId(n("a", s)[0]) : i.replace("#", "");
            return s.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0),
            f = e.element.find("#" + h),
            f.length || (f = n(o.panelTemplate).attr("id", h).data("destroy.tabs", !0)),
            f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),
            u >= this.lis.length ? (s.appendTo(this.list),
            f.appendTo(this.list[0].parentNode)) : (s.insertBefore(this.lis[u]),
            f.insertBefore(this.panels[u])),
            o.disabled = n.map(o.disabled, function(n) {
                return n >= u ? ++n : n
            }),
            this._tabify(),
            this.anchors.length == 1 && (o.selected = 0,
            s.addClass("ui-tabs-selected ui-state-active"),
            f.removeClass("ui-tabs-hide"),
            this.element.queue("tabs", function() {
                e._trigger("show", null, e._ui(e.anchors[0], e.panels[0]))
            }),
            this.load(0)),
            this._trigger("add", null, this._ui(this.anchors[u], this.panels[u])),
            this
        },
        remove: function(t) {
            t = this._getIndex(t);
            var i = this.options
              , r = this.lis.eq(t).remove()
              , u = this.panels.eq(t).remove();
            return r.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)),
            i.disabled = n.map(n.grep(i.disabled, function(n) {
                return n != t
            }), function(n) {
                return n >= t ? --n : n
            }),
            this._tabify(),
            this._trigger("remove", null, this._ui(r.find("a")[0], u[0])),
            this
        },
        enable: function(t) {
            t = this._getIndex(t);
            var i = this.options;
            if (n.inArray(t, i.disabled) != -1)
                return this.lis.eq(t).removeClass("ui-state-disabled"),
                i.disabled = n.grep(i.disabled, function(n) {
                    return n != t
                }),
                this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])),
                this
        },
        disable: function(n) {
            n = this._getIndex(n);
            var i = this
              , t = this.options;
            return n != t.selected && (this.lis.eq(n).addClass("ui-state-disabled"),
            t.disabled.push(n),
            t.disabled.sort(),
            this._trigger("disable", null, this._ui(this.anchors[n], this.panels[n]))),
            this
        },
        select: function(n) {
            if (n = this._getIndex(n),
            n == -1)
                if (this.options.collapsible && this.options.selected != -1)
                    n = this.options.selected;
                else
                    return this;
            return this.anchors.eq(n).trigger(this.options.event + ".tabs"),
            this
        },
        load: function(t) {
            var f;
            t = this._getIndex(t);
            var i = this
              , r = this.options
              , u = this.anchors.eq(t)[0]
              , e = n.data(u, "load.tabs");
            if (this.abort(),
            !e || this.element.queue("tabs").length !== 0 && n.data(u, "cache.tabs")) {
                this.element.dequeue("tabs");
                return
            }
            return this.lis.eq(t).addClass("ui-state-processing"),
            r.spinner && (f = n("span", u),
            f.data("label.tabs", f.html()).html(r.spinner)),
            this.xhr = n.ajax(n.extend({}, r.ajaxOptions, {
                url: e,
                success: function(f, e) {
                    i.element.find(i._sanitizeSelector(u.hash)).html(f),
                    i._cleanup(),
                    r.cache && n.data(u, "cache.tabs", !0),
                    i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                    try {
                        r.ajaxOptions.success(f, e)
                    } catch (o) {}
                },
                error: function(n, f) {
                    i._cleanup(),
                    i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                    try {
                        r.ajaxOptions.error(n, f, t, u)
                    } catch (e) {}
                }
            })),
            i.element.dequeue("tabs"),
            this
        },
        abort: function() {
            return this.element.queue([]),
            this.panels.stop(!1, !0),
            this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)),
            this.xhr && (this.xhr.abort(),
            delete this.xhr),
            this._cleanup(),
            this
        },
        url: function(n, t) {
            return this.anchors.eq(n).removeData("cache.tabs").data("load.tabs", t),
            this
        },
        length: function() {
            return this.anchors.length
        }
    }),
    n.extend(n.ui.tabs, {
        version: "1.8.20"
    }),
    n.extend(n.ui.tabs.prototype, {
        rotation: null,
        rotate: function(n, t) {
            var i = this
              , u = this.options
              , r = i._rotate || (i._rotate = function(t) {
                clearTimeout(i.rotation),
                i.rotation = setTimeout(function() {
                    var n = u.selected;
                    i.select(++n < i.anchors.length ? n : 0)
                }, n),
                t && t.stopPropagation()
            }
            )
              , f = i._unrotate || (i._unrotate = t ? function() {
                r()
            }
            : function(n) {
                n.clientX && i.rotate(null)
            }
            );
            return n ? (this.element.bind("tabsshow", r),
            this.anchors.bind(u.event + ".tabs", f),
            r()) : (clearTimeout(i.rotation),
            this.element.unbind("tabsshow", r),
            this.anchors.unbind(u.event + ".tabs", f),
            delete this._rotate,
            delete this._unrotate),
            this
        }
    })
}(jQuery);
(function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (this.length) {
                var i = n.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"),
                i = new n.validator(t,this[0]),
                n.data(this[0], "validator", i),
                i.settings.onsubmit && (t = this.find("input, button"),
                t.filter(".cancel").click(function() {
                    i.cancelSubmit = !0
                }),
                i.settings.submitHandler && t.filter(":submit").click(function() {
                    i.submitButton = this
                }),
                this.submit(function(t) {
                    function r() {
                        if (i.settings.submitHandler) {
                            if (i.submitButton)
                                var t = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm);
                            return i.settings.submitHandler.call(i, i.currentForm),
                            i.submitButton && t.remove(),
                            !1
                        }
                        return !0
                    }
                    return (i.settings.debug && t.preventDefault(),
                    i.cancelSubmit) ? (i.cancelSubmit = !1,
                    r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                    !1) : r() : (i.focusInvalid(),
                    !1)
                })),
                i)
            }
            t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function() {
            if (n(this[0]).is("form"))
                return this.validate().form();
            var t = !0
              , i = n(this[0].form).validate();
            return this.each(function() {
                t &= i.element(this)
            }),
            t
        },
        removeAttrs: function(t) {
            var i = {}
              , r = this;
            return n.each(t.split(/\s/), function(n, t) {
                i[t] = r.attr(t),
                r.removeAttr(t)
            }),
            i
        },
        rules: function(t, i) {
            var r = this[0], e;
            if (t) {
                var u = n.data(r.form, "validator").settings
                  , o = u.rules
                  , f = n.validator.staticRules(r);
                switch (t) {
                case "add":
                    n.extend(f, n.validator.normalizeRule(i)),
                    o[r.name] = f,
                    i.messages && (u.messages[r.name] = n.extend(u.messages[r.name], i.messages));
                    break;
                case "remove":
                    return i ? (e = {},
                    n.each(i.split(/\s/), function(n, t) {
                        e[t] = f[t],
                        delete f[t]
                    }),
                    e) : (delete o[r.name],
                    f)
                }
            }
            return r = n.validator.normalizeRules(n.extend({}, n.validator.metadataRules(r), n.validator.classRules(r), n.validator.attributeRules(r), n.validator.staticRules(r)), r),
            r.required && (u = r.required,
            delete r.required,
            r = n.extend({
                required: u
            }, r)),
            r
        }
    }),
    n.extend(n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + t.value)
        },
        filled: function(t) {
            return !!n.trim("" + t.value)
        },
        unchecked: function(n) {
            return !n.checked
        }
    }),
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t),
        this.currentForm = i,
        this.init()
    }
    ,
    n.validator.format = function(t, i) {
        return arguments.length == 1 ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t),
            n.validator.format.apply(this, i)
        }
        : (arguments.length > 2 && i.constructor != Array && (i = n.makeArray(arguments).slice(1)),
        i.constructor != Array && (i = [i]),
        n.each(i, function(n, i) {
            t = t.replace(RegExp("\\{" + n + "\\}", "g"), i)
        }),
        t)
    }
    ,
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n,
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass),
                this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(n) {
                (n.name in this.submitted || n == this.lastElement) && this.element(n)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function r(t) {
                    var i = n.data(this[0].form, "validator")
                      , r = "on" + t.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], t)
                }
                var i, t;
                this.labelContainer = n(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm),
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset(),
                i = this.groups = {},
                n.each(this.settings.groups, function(t, r) {
                    n.each(r.split(/\s/), function(n, r) {
                        i[r] = t
                    })
                }),
                t = this.settings.rules,
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                }),
                n(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", r).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", r),
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                n.extend(this.submitted, this.errorMap),
                this.invalid = n.extend({}, this.errorMap),
                this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++)
                    this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                this.lastElement = t = this.validationTargetFor(this.clean(t)),
                this.prepareElement(t),
                this.currentElements = n(t);
                var i = this.check(t);
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                i
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t),
                    this.errorList = [];
                    for (var i in t)
                        this.errorList.push({
                            message: t[i],
                            element: this.findByName(i)[0]
                        });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t = 0, i;
                for (i in n)
                    t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() == 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && n.grep(this.errorList, function(n) {
                    return n.element.name == t.name
                }).length == 1 && t
            },
            elements: function() {
                var t = this
                  , i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return (!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in i || !t.objectLength(n(this).rules())) ? !1 : i[this.name] = !0
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                return n(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = n([]),
                this.toHide = n([]),
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset(),
                this.toHide = this.errorsFor(n)
            },
            check: function(t) {
                var i, r, u, f, e;
                t = this.validationTargetFor(this.clean(t)),
                i = n(t).rules(),
                r = !1;
                for (u in i) {
                    f = {
                        method: u,
                        parameters: i[u]
                    };
                    try {
                        if (e = n.validator.methods[u].call(this, t.value.replace(/\r/g, ""), t, f.parameters),
                        e == "dependency-mismatch")
                            r = !0;
                        else {
                            if (r = !1,
                            e == "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(t));
                                return
                            }
                            if (!e)
                                return this.formatAndAdd(t, f),
                                !1
                        }
                    } catch (o) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + f.method + "' method", o);
                        throw o;
                    }
                }
                if (!r)
                    return this.objectLength(i) && this.successList.push(t),
                    !0
            },
            customMetaMessage: function(t, i) {
                if (n.metadata) {
                    var r = this.settings.meta ? n(t).metadata()[this.settings.meta] : n(t).metadata();
                    return r && r.messages && r.messages[i]
                }
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor == String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (arguments[n] !== undefined)
                        return arguments[n]
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customMetaMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(n, t) {
                var i = this.defaultMessage(n, t.method)
                  , r = /\$?\{(\d+)\}/g;
                typeof i == "function" ? i = i.call(this, t.parameters, n) : r.test(i) && (i = jQuery.format(i.replace(r, "{$1}"), t.parameters)),
                this.errorList.push({
                    message: i,
                    element: n
                }),
                this.errorMap[n.name] = i,
                this.submitted[n.name] = i
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))),
                n
            },
            defaultShowErrors: function() {
                for (var t, n = 0; this.errorList[n]; n++)
                    t = this.errorList[n],
                    this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (n = 0; this.successList[n]; n++)
                        this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0,
                    t = this.validElements(); t[n]; n++)
                        this.settings.unhighlight.call(this, t[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                r.attr("generated") && r.html(i)) : (r = n("<" + this.settings.errorElement + "/>").attr({
                    "for": this.idOrName(t),
                    generated: !0
                }).addClass(this.settings.errorClass).html(i || ""),
                this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t))),
                !i && this.settings.success && (r.text(""),
                typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r)),
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var i = this.idOrName(t);
                return this.errors().filter(function() {
                    return n(this).attr("for") == i
                })
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]),
                n
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                var i = this.currentForm;
                return n(document.getElementsByName(t)).map(function(n, r) {
                    return r.form == i && r.name == t && r || null
                })
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return n("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                return !n.validator.methods.required.call(this, n.trim(t.value), t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++,
                this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                i && this.pendingRequest == 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(),
                this.formSubmitted = !1) : !i && this.pendingRequest == 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor == String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {};
            return (t = n(t).attr("class")) && n.each(t.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(t) {
            var r = {}, i, u;
            t = n(t);
            for (i in n.validator.methods)
                (u = i === "required" && typeof n.fn.prop == "function" ? t.prop(i) : t.attr(i)) ? r[i] = u : t[0].getAttribute("type") === i && (r[i] = !0);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength,
            r
        },
        metadataRules: function(t) {
            if (!n.metadata)
                return {};
            var i = n.data(t.form, "validator").settings.meta;
            return i ? n(t).metadata()[i] : n(t).metadata()
        },
        staticRules: function(t) {
            var i = {}
              , r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1)
                    delete t[r];
                else if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                    case "string":
                        f = !!n(u.depends, i.form).length;
                        break;
                    case "function":
                        f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
                }
            }),
            n.each(t, function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }),
            n.each(["minlength", "maxlength", "min", "max"], function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            n.each(["rangelength", "range"], function() {
                t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
            }),
            n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t.messages && delete t.messages,
            t
        },
        normalizeRule: function(t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                }),
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i,
            n.validator.messages[t] = r != undefined ? r : n.validator.messages[t],
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i))
                    return "dependency-mismatch";
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return (t = n(i).val()) && t.length > 0;
                case "input":
                    if (this.checkable(i))
                        return this.getLength(t, i) > 0;
                default:
                    return n.trim(t).length > 0
                }
            },
            remote: function(t, i, r) {
                var f, u, e;
                return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i),
                this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                f.originalMessage = this.settings.messages[i.name].remote,
                this.settings.messages[i.name].remote = f.message,
                r = typeof r == "string" && {
                    url: r
                } || r,
                this.pending[i.name]) ? "pending" : f.old === t ? f.valid : (f.old = t,
                u = this,
                this.startRequest(i),
                e = {},
                e[i.name] = t,
                n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    success: function(r) {
                        var o, e;
                        u.settings.messages[i.name].remote = f.originalMessage,
                        o = r === !0,
                        o ? (e = u.formSubmitted,
                        u.prepareElement(i),
                        u.formSubmitted = e,
                        u.successList.push(i),
                        u.showErrors()) : (e = {},
                        r = r || u.defaultMessage(i, "remote"),
                        e[i.name] = f.message = n.isFunction(r) ? r(t) : r,
                        u.showErrors(e)),
                        f.valid = o,
                        u.stopRequest(i, o)
                    }
                }, r)),
                "pending")
            },
            minlength: function(t, i, r) {
                return this.optional(i) || this.getLength(n.trim(t), i) >= r
            },
            maxlength: function(t, i, r) {
                return this.optional(i) || this.getLength(n.trim(t), i) <= r
            },
            rangelength: function(t, i, r) {
                return t = this.getLength(n.trim(t), i),
                this.optional(i) || t >= r[0] && t <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            email: function(n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n))
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                var r;
                if (this.optional(t))
                    return "dependency-mismatch";
                if (/[^0-9 -]+/.test(n))
                    return !1;
                var f = 0
                  , i = 0
                  , u = !1;
                for (n = n.replace(/\D/g, ""),
                r = n.length - 1; r >= 0; r--)
                    i = n.charAt(r),
                    i = parseInt(i, 10),
                    u && (i *= 2) > 9 && (i -= 9),
                    f += i,
                    u = !u;
                return f % 10 == 0
            },
            accept: function(n, t, i) {
                return i = typeof i == "string" ? i.replace(/,/g, "|") : "png|jpe?g|gif",
                this.optional(t) || n.match(RegExp(".(" + i + ")$", "i"))
            },
            equalTo: function(t, i, r) {
                return r = n(r).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    n(i).valid()
                }),
                t == r.val()
            }
        }
    }),
    n.format = n.validator.format
}
)(jQuery),
function(n) {
    var t = {}, i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        i = n.port,
        n.mode == "abort" && (t[i] && t[i].abort(),
        t[i] = r)
    }) : (i = n.ajax,
    n.ajax = function(r) {
        var u = ("port"in r ? r : n.ajaxSettings).port;
        return ("mode"in r ? r : n.ajaxSettings).mode == "abort" ? (t[u] && t[u].abort(),
        t[u] = i.apply(this, arguments)) : i.apply(this, arguments)
    }
    )
}(jQuery),
function(n) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, i) {
        function r(t) {
            return t = n.event.fix(t),
            t.type = i,
            n.event.handle.call(this, t)
        }
        n.event.special[i] = {
            setup: function() {
                this.addEventListener(t, r, !0)
            },
            teardown: function() {
                this.removeEventListener(t, r, !0)
            },
            handler: function(t) {
                return arguments[0] = n.event.fix(t),
                arguments[0].type = i,
                n.event.handle.apply(this, arguments)
            }
        }
    }),
    n.extend(n.fn, {
        validateDelegate: function(t, i, r) {
            return this.bind(i, function(i) {
                var u = n(i.target);
                if (u.is(t))
                    return r.apply(u, arguments)
            })
        }
    })
}(jQuery);
!function(n) {
    function i(n, t, i) {
        n.rules[t] = i,
        n.message && (n.messages[t] = n.message)
    }
    function f(n) {
        return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }
    function e(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }
    function o(n, t) {
        return 0 === n.indexOf("*.") && (n = n.replace("*.", t)),
        n
    }
    function h(t, i) {
        var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']")
          , u = !1 !== n.parseJSON(r.attr("data-valmsg-replace"));
        r.removeClass("field-validation-valid").addClass("field-validation-error"),
        t.data("unobtrusiveContainer", r),
        u ? (r.empty(),
        t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }
    function c(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]")
          , r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(),
        u.addClass("validation-summary-errors").removeClass("validation-summary-valid"),
        n.each(i.errorList, function() {
            n("<li />").html(this.message).appendTo(r)
        }))
    }
    function l(t) {
        var i = t.data("unobtrusiveContainer")
          , r = n.parseJSON(i.attr("data-valmsg-replace"));
        i && (i.addClass("field-validation-valid").removeClass("field-validation-error"),
        t.removeData("unobtrusiveContainer"),
        r && i.empty())
    }
    function a() {
        var i = n(this);
        i.data("validator").resetForm(),
        i.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors"),
        i.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
    }
    function s(t) {
        var i = n(t)
          , r = i.data(u)
          , f = n.proxy(a, t);
        return r || (r = {
            options: {
                errorClass: "input-validation-error",
                errorElement: "span",
                errorPlacement: n.proxy(h, t),
                invalidHandler: n.proxy(c, t),
                messages: {},
                rules: {},
                success: n.proxy(l, t)
            },
            attachValidation: function() {
                n.isEmptyObject(this.options.rules) || i.unbind("reset." + u, f).bind("reset." + u, f).validate(this.options)
            },
            validate: function() {
                return i.validate(),
                i.valid()
            }
        },
        i.data(u, r)),
        r
    }
    var t, r = n.validator, u = "unobtrusiveValidation";
    r.unobtrusive = {
        adapters: [],
        parseElement: function(t, i) {
            var r, u, o, f = n(t), e = f.parents("form")[0];
            e && ((r = s(e)).options.rules[t.name] = u = {},
            r.options.messages[t.name] = o = {},
            n.each(this.adapters, function() {
                var i = "data-val-" + this.name
                  , r = f.attr(i)
                  , s = {};
                void 0 !== r && (i += "-",
                n.each(this.params, function() {
                    s[this] = f.attr(i + this)
                }),
                this.adapt({
                    element: t,
                    form: e,
                    message: r,
                    params: s,
                    rules: u,
                    messages: o
                }))
            }),
            n.extend(u, {
                __dummy__: !0
            }),
            i || r.attachValidation())
        },
        parse: function(t) {
            var i = n(t).parents("form").andSelf().add(n(t).find("form")).filter("form");
            n(t).find(":input[data-val=true]").each(function() {
                r.unobtrusive.parseElement(this, !0)
            }),
            i.each(function() {
                var n = s(this);
                n && n.attachValidation()
            })
        }
    },
    (t = r.unobtrusive.adapters).add = function(n, t, i) {
        return i || (i = t,
        t = []),
        this.push({
            name: n,
            params: t,
            adapt: i
        }),
        this
    }
    ,
    t.addBool = function(n, t) {
        return this.add(n, function(r) {
            i(r, t || n, !0)
        })
    }
    ,
    t.addMinMax = function(n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"], function(n) {
            var f = n.params.min
              , e = n.params.max;
            f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
        })
    }
    ,
    t.addSingleVal = function(n, t, r) {
        return this.add(n, [t || "val"], function(u) {
            i(u, r || n, u.params[t])
        })
    }
    ,
    r.addMethod("__dummy__", function() {
        return !0
    }),
    r.addMethod("regex", function(n, t, i) {
        var r;
        return !!this.optional(t) || (r = new RegExp(i).exec(n)) && 0 === r.index && r[0].length === n.length
    }),
    r.addMethod("nonalphamin", function(n, t, i) {
        var r;
        return i && (r = (r = n.match(/\W/g)) && r.length >= i),
        r
    }),
    t.addSingleVal("accept", "exts").addSingleVal("regex", "pattern"),
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"),
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"),
    t.add("equalto", ["other"], function(t) {
        var r = e(t.element.name)
          , u = o(t.params.other, r);
        i(t, "equalTo", n(t.form).find(":input[name='" + f(u) + "']")[0])
    }),
    t.add("required", function(n) {
        "INPUT" === n.element.tagName.toUpperCase() && "CHECKBOX" === n.element.type.toUpperCase() || i(n, "required", !0)
    }),
    t.add("remote", ["url", "type", "additionalfields"], function(t) {
        var r = {
            url: t.params.url,
            type: t.params.type || "GET",
            data: {}
        }
          , u = e(t.element.name);
        n.each((t.params.additionalfields || t.element.name).replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g), function(i, e) {
            var s = o(e, u);
            r.data[s] = function() {
                return n(t.form).find(":input[name='" + f(s) + "']").val()
            }
        }),
        i(t, "remote", r)
    }),
    t.add("password", ["min", "nonalphamin", "regex"], function(n) {
        n.params.min && i(n, "minlength", n.params.min),
        n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin),
        n.params.regex && i(n, "regex", n.params.regex)
    }),
    n(function() {
        r.unobtrusive.parse(document)
    })
}(jQuery);
function News() {
    $("#Companies").hide(),
    $("#Projects").hide(),
    $("#News").hide(),
    $("#News").show(),
    $("#news").addClass("active"),
    $("#projects").removeClass("active"),
    $("#companies").removeClass("active")
}
function Companies() {
    $("#Companies").hide(),
    $("#Projects").hide(),
    $("#News").hide(),
    $("#Companies").show(),
    $("#companies").addClass("active"),
    $("#projects").removeClass("active"),
    $("#news").removeClass("active")
}
function Projects() {
    $("#Companies").hide(),
    $("#Projects").hide(),
    $("#News").hide(),
    $("#Projects").show(),
    $("#projects").addClass("active"),
    $("#news").removeClass("active"),
    $("#companies").removeClass("active")
}
function Initialize() {}
function SearchResult(n) {
    var t = $("#searchInputBox").val(), i;
    t != null && t != "" && t != " " & t != undefined && (t = t.toString().trim().replace("%", "")),
    i = n + "?text=" + t + "&q=" + t,
    document.location.href = i
}
function submitLablebDetailSearchForm() {
    var n = $("#lablebDetailSearchForm");
    n && ($("input[name=q]", "#lablebDetailSearchForm").val($("#searchedTerm").val()),
    n.submit())
}
function SetDefaultMarket(n) {
    var t = $("input[name=rdoDefaultMarket]:checked").val(), i;
    return console.log(t),
    i = "/" + n + "/market/setdefaultmarket?defaultMarketID=" + t,
    $.ajax({
        url: i,
        cache: !1,
        async: !1,
        success: function(n) {
            n != "error" ? window.location.href = n : (alert("Ooops!! Please try again"),
            $("#divDefaultMarketPopup").css("display", "none"))
        },
        error: function() {
            alert("Ooops!! Please try again"),
            $("#divDefaultMarketPopup").css("display", "none")
        }
    }),
    !0
}
function CloseDefaultMarket() {
    var n = $("input[name=rdoDefaultMarket]:checked").val(), t;
    n == "100" && document.cookie != undefined && document.cookie != "" && document.cookie.indexOf("DEFAULT_MARKET_COOKIE") < 0 && (t = "/market/setdefaultmarket?defaultMarketID=" + n,
    $.ajax({
        url: t,
        cache: !1,
        async: !1,
        success: function(n) {
            n != "error" || (alert("Ooops!! Please try again"),
            $("#divDefaultMarketPopupHomePage").css("display", "none"))
        },
        error: function() {
            alert("Ooops!! Please try again"),
            $("#divDefaultMarketPopup").css("display", "none")
        }
    })),
    $("#divDefaultMarketPopup").hide()
}
function DeleteMenu(n) {
    $.ajax({
        type: "GET",
        url: "/content/deletemenu",
        data: {
            navigationID: n
        },
        success: function(n) {
            $("#divMenu").html(""),
            $("#divMenu").html(n)
        },
        error: function(n) {
            n.readyState != 0 && alert("error occurred")
        },
        async: !1
    })
}
function AddLink(n, t) {
    var r = n + "_" + Math.ceil(Math.random()) + +new Date
      , u = "li_" + r
      , i = "<li id=" + u + " class='added-row'>";
    i += "<form id=" + r + " action='' method='post'>",
    i += "<input name='ParentID' type='hidden' id='ParentID' value=" + n + " />",
    i += "<input name='LangID' type='hidden' id='LangID' value=" + t + " />",
    i += "<input type='text' name='SequenceNo' id='SequenceNo' class='navigation-id' />",
    i += "<input type='text' name='DisplayName' id='DisplayName' class='display-name' />",
    i += "<input type='text' name='AdditionalText' id='AdditionalText' class='additional-text' />",
    i += "<input type='text' name='LinkURL' id='LinkURL' class='link-url' />",
    i += "<input type='checkbox' name='IsVisible' id='IsVisible' title='IsVisible' />",
    i += "<input type='checkbox' name='IsExternalLink' id='IsExternalLink' title='IsExternalLink'  />",
    i += "<input type='checkbox' name='IsDisplayInRed' id='IsDisplayInRed' title='IsDisplayInRed'  />",
    i += "<input type='button' value='insert' onclick=javascript:InsertMenu('" + r + "') class='update' />",
    i += "<input type='button' value='cancel' onclick=javascript:Cancel('" + u + "') class='cancel' />",
    i += "</form>",
    i += "</li>",
    $("#" + n).append(i)
}
function Cancel(n) {
    $("#" + n).remove()
}
function InsertMenu(n) {
    var t = $("#" + n).serialize();
    $.ajax({
        type: "POST",
        url: "/content/insertmenu",
        data: t,
        success: function(n) {
            $("#divMenu").html(""),
            $("#divMenu").html(n)
        },
        error: function(n) {
            n.readyState != 0 && alert("error occurred")
        },
        async: !1
    })
}
function UpdateMenu(n) {
    var t = $("#" + n).serialize();
    $.ajax({
        type: "POST",
        url: "/content/updatemenu",
        data: t,
        success: function(n) {
            $("#divMenu").html(""),
            $("#divMenu").html(n)
        },
        error: function(n) {
            n.readyState != 0 && alert("error occurred")
        },
        async: !1
    })
}
function UpdateOrder() {
    var n = [], t;
    $("#ulParent").find("*[navigationid]").each(function(t) {
        var r = this.value
          , u = this.attributes.navigationid.value
          , i = {};
        i.SequenceNo = r,
        i.NavigationID = u,
        n[t] = i
    }),
    t = ConvertArrayOfObjectToJson(n, "sequenceArray"),
    $.ajax({
        type: "POST",
        url: "/content/updateorder",
        data: {
            sequenceJson: t
        },
        success: function(n) {
            $("#divMenu").html(""),
            $("#divMenu").html(n)
        },
        error: function(n) {
            n.readyState != 0 && alert("error occurred")
        },
        async: !1
    })
}
function ShowChart(n, t) {
    var u = arguments.length == 2 ? "" : arguments[2]
      , r = $("#hdnOCommID").val()
      , f = $("#hdnTimeRange").val()
      , i = "";
    u == "" ? (i = $("#hdnChImg_" + n).val(),
    i = $("#hdnChartUrl").val() + i) : u == "mkts" ? (i = $("#hdnMktChartUrl").val(),
    i = i.replace("#MktId#", arguments[3]),
    i = i.replace("#tcgicomp_id#", arguments[4])) : u == "comp" && (i = $("#hdnCmpChartUrl").val(),
    i = i.replace("#MktId#", arguments[3]),
    i = i.replace("#CompId#", arguments[4])),
    i = i.replace("#range#", t),
    r.replace("m_", "").replace("c_", "") > 0 && ($("#chrthead_" + r).hide(),
    $("#dvImgCont_" + r).hide()),
    $("#chartImg_" + n).attr("src", i),
    $("#chrthead_" + n).show(),
    $("#dvImgCont_" + n).show(),
    n != r && ($("#chrtTab_" + f + "_" + r).removeClass("active"),
    $("#chrtTab_90_" + r).removeClass("active"),
    $("#chrtTab_90_" + n).addClass("active"),
    $("#hdnTimeRange").val(t)),
    $("#hdnOCommID").val(n)
}
function ShowChartByTime(n, t, i) {
    var r = arguments.length == 3 ? "" : arguments[3], f = $("#hdnTimeRange").val(), e = !1, u;
    arguments.length == 3 ? e = !0 : arguments.length == 4,
    u = "#chrtTab_" + f + "_" + t,
    $(u).removeClass("active"),
    $(n).addClass("active"),
    $("#hdnTimeRange").val(i),
    r == "" ? ShowChart(t, i) : r == "mkts" ? ShowChart(t, i, r, arguments[4], arguments[5]) : r == "comp" && ShowChart(t, i, r, arguments[4], arguments[5])
}
function getCompaniesJson() {
    var n = "";
    return $.ajax({
        url: $("#hdnUrl4CompJson").val(),
        cache: !1,
        async: !1,
        success: function(t) {
            n = t
        },
        error: function() {
            alert("Ooops!! Please try again")
        }
    }),
    n
}
function getCompaniesWithFullDetailsJson() {
    var n = "";
    return $.ajax({
        url: $("#hdnUrl4CompJson").val(),
        cache: !1,
        async: !1,
        success: function(t) {
            n = t
        },
        error: function() {
            alert("Ooops!! Please try again")
        }
    }),
    n
}
function AddSearchElemHtml(n, t) {
    var i = '<div relf="searchedDivs" class="item">';
    i += n.indexOf("=") > -1 ? '<input type="hidden" id="' + n.replace("=", "") + '" value="' + n + '">' : '<input type="hidden" id="' + n + '" value="' + n.replace("a", "") + '">',
    i += t,
    i += '<a onclick="RemoveSearchElem(this)">&times;</a>',
    i += "</div>",
    $("#presetSearchDivs").append(i),
    $("#searchedElems").hasClass("closed") && ($("#searchedElems").removeClass("closed"),
    HideResetTagsButtonForMob("block"))
}
function SearchChildsElementsIDs(n, t) {
    var r = $("#dvChld_Par_" + n)
      , i = parseInt(n) + ",";
    if (r.children().each(function() {
        $(this).find("span").each(function() {
            if ($(this).attr("id") != undefined) {
                var n = $(this).attr("id").split("_")[1] + ",";
                i += n
            }
        })
    }),
    t == "Add")
        i = $("#hdnSearchElemsNew").val() + i,
        $("#hdnSearchElemsNew").val(i);
    else
        return i
}
function AddSearchElem(n, t) {
    $("#searchedElems").hasClass("closed") && ($("#searchedElems").removeClass("closed"),
    HideResetTagsButtonForMob("block")),
    $("#txtCompanyName").val("");
    var i = $("#hdnSearchElems").val()
      , r = "";
    (i == "" ? ($("#ddlSectors")[0] && ($("#ddlSectors").val(0),
    $("#ddlSectors").attr("disabled", "disabled"),
    $("#ddlSectorsSpn").addClass("disabled")),
    $("#ddlShareholder")[0] && ($("#ddlShareholder").val(0),
    $("#ddlShareholder").attr("disabled", "disabled"),
    $("#ddlShareholder").addClass("disabled")),
    $("#ddlMarket")[0] && ($("#ddlMarket").val(0),
    $("#ddlMarket").attr("disabled", "disabled"),
    $("#ddlMarketSpan").addClass("disabled")),
    $("#txtCompanyName").attr("disabled", "disabled"),
    $("#txtCompanyID")[0] && $("#txtCompanyID").val(0),
    $("#searchedElems").hasClass("closed") && ($("#searchedElems").removeClass("closed"),
    HideResetTagsButtonForMob("block")),
    i = ",") : i[0] != "," && (i = "," + i),
    r = "," + n + ",",
    i.indexOf(r) > -1) || ($("#hdnArgSectId").val() == "0" && $("#hdnArgSectId").val(n),
    i += n + ",",
    $("#hdnSearchElems").val(i),
    AddSearchElemHtml("a" + n, t),
    SearchChildsElementsIDs(n, "Add"))
}
function RemoveSearchElem(n) {
    function u() {
        $(n.parentElement).remove()
    }
    var t, i, r;
    $(n).prev().attr("id").indexOf("c1") > -1 && $("#txtCompanyName").val(""),
    t = $("#" + $(n).prev().attr("id")).val() + ",",
    $("#hdnSearchElems").val($("#hdnSearchElems").val().replace(t, "")),
    $(n.parentElement).addClass("hideItem"),
    window.setInterval(u, 500),
    ResetControlsState(),
    i = SearchChildsElementsIDs($("#" + $(n).prev().attr("id")).val(), "Remove"),
    r = $("#hdnSearchElems").val(),
    $("#hdnSearchElems").val(r.replace(i, ""))
}
function ResetControlsState() {
    ($("#hdnSearchElems").val() == "" || $("#hdnSearchElems").val() == "," || $("#hdnSearchElems").val() == "0,") && ($("#hdnSearchElems").val(""),
    $("#hdnArgSectId").val("0"),
    $("#ddlSectors").val(0),
    $("#ddlSectors").removeAttr("disabled"),
    $("#ddlSectorsSpn").removeClass("disabled"),
    $("#ShareHolderName").val(""),
    $("#ShareHolderName").removeAttr("disabled"),
    $("#ddlMarket").val(0),
    $("#ddlMarket").removeAttr("disabled"),
    $("#ddlMarketSpan").removeClass("disabled"),
    $("#txtCompanyName").removeAttr("disabled"),
    $("#hdnCompID").val(0),
    $("#tbSearch").length > 0 && $("#tbSearch").removeAttr("disabled"),
    $("#dvArgSectors").hasClass("ArgaamSectorDisabled") && $("#dvArgSectors").removeClass("ArgaamSectorDisabled"),
    $("#searchedElems").hasClass("closed") || ($("#searchedElems").addClass("closed"),
    HideResetTagsButtonForMob("none")),
    arguments.length == 1 && arguments[0] == !0 && ResetSearch())
}
function onChangeShareholder() {
    $("#txtCompanyName").val(""),
    $("#txtCompanyName").attr("disabled", "disabled"),
    $("#ddlMarket").val(""),
    $("#ddlMarket").attr("disabled", "disabled"),
    $("#ddlMarketSpan").addClass("disabled"),
    $("#ddlSectors").val(0),
    $("#ddlSectors").attr("disabled", "disabled"),
    $("#ddlSectors").addClass("disabled"),
    $("[relf=searchedDivs]").remove(),
    $("#hdnSearchElems").val(""),
    $("#dvArgSectors").hasClass("ArgaamSectorDisabled") || $("#dvArgSectors").addClass("ArgaamSectorDisabled"),
    $("#searchedElems").hasClass("closed") && ($("#searchedElems").removeClass("closed"),
    HideResetTagsButtonForMob("block"))
}
function onChangeSectors() {
    if ($("#txtCompanyName").val(""),
    $("#txtCompanyName").attr("disabled", "disabled"),
    $("#ddlMarket").val(""),
    $("#ddlMarket").attr("disabled", "disabled"),
    $("#ddlMarketSpan").addClass("disabled"),
    $("#range-value").addClass("disabled"),
    $("#ShareHolderName").val(""),
    $("#ShareHolderName").attr("disabled", "disabled"),
    $("[relf=searchedDivs]").remove(),
    $("#hdnSearchElems").val(""),
    $("#dvArgSectors").hasClass("ArgaamSectorDisabled") || $("#dvArgSectors").addClass("ArgaamSectorDisabled"),
    $("#searchedElems").hasClass("closed") && ($("#searchedElems").removeClass("closed"),
    HideResetTagsButtonForMob("block")),
    $("#ddlSectors").val() != "0") {
        var n = "s=" + $("#ddlSectors").val()
          , t = $("#ddlSectors :selected").text();
        AddSearchElemHtml(n, t)
    }
}
function onChangeMarkets() {
    if ($("#txtCompanyName").val(""),
    $("#txtCompanyName").attr("disabled", "disabled"),
    $("#ddlSectors").val(""),
    $("#ddlSectors").attr("disabled", "disabled"),
    $("#ddlSectorsSpn").addClass("disabled"),
    $("#range-value").addClass("disabled"),
    $("#ShareHolderName").val(""),
    $("#ShareHolderName").attr("disabled", "disabled"),
    $("[relf=searchedDivs]").remove(),
    $("#hdnSearchElems").val(""),
    $("#dvArgSectors").hasClass("ArgaamSectorDisabled") || $("#dvArgSectors").addClass("ArgaamSectorDisabled"),
    $("#searchedElems").hasClass("closed") && ($("#searchedElems").removeClass("closed"),
    HideResetTagsButtonForMob("block")),
    $("#ddlMarket").val() != "0") {
        var n = "m=" + $("#ddlMarket").val()
          , t = $("#ddlMarket :selected").text();
        AddSearchElemHtml(n, t)
    }
}
function onChangeMarketsForMajorShareholders(n) {
    $(".market").each(function() {
        $(this).removeClass("active")
    }),
    $(n).addClass("active"),
    $("#range-value").addClass("disabled"),
    $("#ShareHolderName").val(""),
    $("#ShareHolderName").attr("disabled", "disabled"),
    $("#searchedElems").hasClass("closed") && ($("#searchedElems").removeClass("closed"),
    HideResetTagsButtonForMob("block")),
    $("#presetSearchDivs").find("div.item").length > 0 && $("#presetSearchDivs").html("");
    var t = "m=" + $(n).attr("relf-value")
      , i = $(n).attr("refval");
    AddSearchElemHtml(t, i)
}
function disableOtherControls(n) {
    n == "company" && ($("[relf=searchedDivs]").remove(),
    $("#hdnSearchElems").val(""),
    $("#dvArgSectors").hasClass("ArgaamSectorDisabled") || $("#dvArgSectors").addClass("ArgaamSectorDisabled"),
    $("#ddlSectors").val(0),
    $("#ddlSectors").attr("disabled", "disabled"),
    $("#ddlSectorsSpn").addClass("disabled"),
    $("#ShareHolderName").val(""),
    $("#ShareHolderName").attr("disabled", "disabled"),
    $("#ddlMarket").val(0),
    $("#ddlMarket").attr("disabled", "disabled"),
    $("#ddlMarketSpan").addClass("disabled"))
}
function onChangeCompanyText() {
    $.trim($("#txtCompanyName").val()).length > 0 ? ($("#hdnCompAnalFilterCompName").val() != $.trim($("#txtCompanyName").val()) && $("#hdnCompID").val(0),
    disableOtherControls("company")) : ResetControlsState()
}
function FillChildren(n) {
    var t = "dvChld_Par_" + n.replace("liId_", ""), i;
    $("#" + n).hasClass("close") ? ($("#" + n).removeClass("close").addClass("open"),
    $("#" + t).html() == "" && (i = n.replace("liId_", ""),
    $.ajax({
        url: $("#hdnUrlGetArgSctorsChildren").val() + "?parentargsectorid=" + i,
        cache: !1,
        async: !1,
        success: function(n) {
            $("#" + t).html(n)
        },
        error: function() {
            alert("Ooops!! Please try again")
        }
    })),
    $("#" + t).show()) : ($("#" + n).removeClass("open").addClass("close"),
    $("#" + t).hide())
}
function clearSearchElems() {
    $("[relf=searchedDivs]").remove(),
    $("#txtCompanyName").val(""),
    $("#hdnSearchElems").val(""),
    ResetControlsState()
}
function Search4CompanyAnalysis(n) {
    var u = $("#hdnCompID").val(), f = $("#txtCompanyName").val(), e = $("#hdnSearchElems").val(), o = $("#ddlSectors").val() == null ? "0" : $("#ddlSectors").val(), s = $("#ddlMarket").val() == null ? "0" : $("#ddlMarket").val(), i = "", r, t, h;
    if ($("#hdforderby").length > 0 && (i = "orderby=" + $("#hdforderby").val()),
    r = !1,
    u == 0 && f == "" && e == "" && o == 0 && s == 0 && (r = !0),
    t = document.location.pathname,
    arguments.length > 1 && (t = arguments[1],
    t = t.indexOf("?") > -1 ? t.substring(0, t.indexOf("?")) : t),
    t = SetPageNoInCompAnalysisTabsUrl(t, 1),
    r ? (i != "" && (i = "?" + i),
    t += i) : (i != "" && (i = "&" + i),
    h = "comp=" + f + "&asid=" + e + "&sid=" + o + "&compid=" + u + "&search=1&marketID=" + s + i,
    t += "?" + h),
    n)
        return t;
    document.location.href = t
}
function CompInfoDivIn(n, t, i, r) {
    var f;
    if (cidHd = !1,
    f = $("#hdnPopDivDisplaying").val(),
    f == 0 || f != t) {
        var s = 265
          , u = "#" + n + "_"
          , e = 0
          , o = 0;
        r == 1 ? (e = $(u + t).position().left - 410,
        o = $(u + t).position().top - 220) : (e = $(u + t).outerWidth() * 1 + $(u + t).position().left + 25,
        o = $(u + t).position().top - 220),
        $("#tdBusinessActivity").html(""),
        $("#tdSharesPrices").html(""),
        $("#tdMarketValue").html(""),
        $("#tdShares").html(""),
        $("#tdBookValue").html(""),
        $("#tdEPS").html(""),
        $("#tdNetIncome").html(""),
        $.each(i, function(n, i) {
            parseInt(i.CompanyID) == parseInt(t) && ($("#tdBusinessActivity").html(i.Overview),
            $("#tdSharesPrices").html(i.SharesPrice),
            $("#tdMarketValue").html(i.MarketValue),
            $("#tdShares").html(i.NoOfShares),
            $("#tdBookValue").html(i.BookValue),
            $("#tdEPS").html(i.EPS),
            $("#tdNetIncome").html(i.NetIncome))
        }),
        closeAllProdCapPopups(),
        $("#compBasicInfo").css({
            left: e,
            top: o
        }),
        $("#compBasicInfo").fadeIn(300),
        $("#hdnPopDivDisplaying").val(t)
    }
}
function CompInfoHide() {
    cidHd && ($("#compBasicInfo").fadeOut(150),
    $("#hdnPopDivDisplaying").val(0),
    clearTimeout(tmDvPop),
    tmDvPop = null)
}
function CompInfoDivOut() {
    cidHd = !0,
    tmDvPop = setTimeout(function() {
        CompInfoHide()
    }, 800)
}
function ResetSearch() {
    var n = document.location.pathname, t, r, i;
    $("#hdnSearchUrl").length == 1 && $("#hdnSearchUrl").val() != "" && (n = $("#hdnSearchUrl").val(),
    n = n.indexOf("?") > -1 ? n.substring(0, n.indexOf("?")) : n,
    n = n.replace("/company-analysis-general/", "/company/analysis/general/"),
    n = n.replace("company-analysis/companyanalysisranklist/", "company/analysis/rank/"),
    n = n.replace("company/analysis/companyanalysisranklist/", "company/analysis/rank/"),
    n = n.replace("company-analysis/companyanalysisgrowthlist/", "/company/analysis/growth/"),
    n = n.replace("company-analysis/market-performance-list/", "company/analysis/market-performance/"),
    n = n.replace("company/analysis/market-performance-list/", "company/analysis/market-performance/"),
    n = n.replace("company-analysis/per-share-data-list/", "company/analysis/per-share-data/"),
    n = n.replace("company/analysis/per-share-data-list/", "company/analysis/per-share-data/"),
    n = n.replace("/company-analysis-salandbon-pager/", "/company/analysis/salaries-and-bonuses/"),
    n = n.replace("/company-analysis-page-listing/", "/company-analysis-page/"),
    n = n.replace("/company-analysis-page-menuitem/", "/company-analysis-page/")),
    n = SetPageNoInCompAnalysisTabsUrl(n, 1),
    t = "",
    n.indexOf("/companyanalysisgrowth/") == -1 && $("#hdforderby").length > 0 && (t = "?orderby=" + $("#hdforderby").val()),
    n.toLowerCase().indexOf("/monitors/research-articles") >= 0 ? (r = $("#hdnArtLang").val(),
    $(".loading-div").show(),
    $.ajax({
        url: "/" + r + "/article/research-articles-partial/",
        beforeSend: function() {
            $(".loading-div").show()
        }
    }).done(function(n) {
        $("#hdnSearchElems").val(""),
        $("[relf='searchedDivs']").each(function() {
            $(this).remove()
        }),
        ResetControlsState(),
        $(".loading-div").hide(),
        $("#ResearchCategories").val(""),
        $("#ResearchPeriods").val(""),
        $("#ResearchCompanies").val(""),
        $("#tbSearch").val(""),
        $("#ResearchArticlesListing").html(n)
    }).fail(function(n, t, i) {
        $(".loading-div").hide(),
        n.readyState != 0 && alert("Try again later\r" + t + "\r" + i)
    }).always(function() {
        $(".loading-div").hide()
    })) : (i = n.substring(0, 1) == "/" ? n + t : "/" + n + t,
    $("#hdnSearchUrl").val(i),
    $(".loading-div-companyanalysis").show(),
    $(".loading-div").show(),
    $.ajax({
        url: i,
        beforeSend: function() {
            $(".loading-div-companyanalysis").show()
        }
    }).done(function(n) {
        $("#MenuTabData").html(n),
        $(".loading-div-companyanalysis").hide(),
        $(".loading-div").hide(),
        $("#frLoadingDiv").hide(),
        $("#hdnSearchUrl").val(i)
    }).fail(function(n, t, i) {
        $(".loading-div").hide(),
        n.readyState != 0 && alert("Try again later\r" + t + "\r" + i)
    }).always(function() {
        $(".loading-div-companyanalysis").hide(),
        $("#frLoadingDiv").hide(),
        $(".loading-div").hide()
    }))
}
function ResetCompanyAnalysisSearch() {
    var n = document.location.pathname, t, i;
    $("#hdnSearchUrl").length == 1 && $("#hdnSearchUrl").val() != "" && (n = $("#hdnSearchUrl").val(),
    n = n.indexOf("?") > -1 ? n.substring(0, n.indexOf("?")) : n,
    n = n.replace("/company-analysis-general/", "/company/analysis/general/"),
    n = n.replace("/company-analysis-page-listing/", "/company-analysis-page/"),
    n = n.replace("/companyanalysisgrowthlist/", "/companyanalysisgrowth/"),
    n = n.replace("/market-performance-list/", "/market-performance/"),
    n = n.replace("/per-share-data-list/", "/per-share-data/"),
    n = n.replace("/company-analysis-salandbon-pager/", "/company-analysis/salaries-and-bonuses/"),
    n = n.replace("/company-analysis-page-listing/", "/company-analysis-page/"),
    n = n.replace("/company-analysis-page-menuitem/", "/company-analysis-page/")),
    n = SetPageNoInCompAnalysisTabsUrl(n, 1),
    t = "",
    n.indexOf("/companyanalysisgrowth/") == -1 && $("#hdforderby").length > 0 && (t = "?orderby=" + $("#hdforderby").val()),
    n.toLowerCase().indexOf("/monitors/research-articles") >= 0 ? (n = $("#hdnSearchUrl").val(),
    i = $("#hdnArtLang").val(),
    $(".loading-div").show(),
    $.ajax({
        url: "/" + i + "/research-articles-partial/",
        beforeSend: function() {
            $(".loading-div").show()
        }
    }).done(function(n) {
        $(".loading-div").hide(),
        $("#ResearchArticlesListing").html(n)
    }).fail(function(n, t, i) {
        $(".loading-div").hide(),
        n.readyState != 0 && alert("Try again later\r" + t + "\r" + i)
    }).always(function() {
        $(".loading-div").hide()
    })) : document.location.href = n + t
}
function ChangCompAnalysisTab(n) {
    var i = -1, h = $(n), f = $("#hdnSearchUrl").val(), t, u, e, s, r, o;
    f == "" && (f = document.URL),
    i = f.indexOf("?"),
    t = i > -1 ? f.substring(i) : "",
    u = t.indexOf("orderby="),
    t != "" && u > -1 && (e = "",
    s = t.indexOf("&", u),
    e = s > -1 ? t.substring(u, s + 1) : t.substring(u - 1),
    t = t.replace(e, "")),
    r = h.attr("relfTabUrl"),
    i = r.indexOf("?"),
    t == "" && i > -1 ? t = r.substring(i) : i > -1 && (t += "&" + r.substring(i + 1)),
    r = i > -1 ? r.substring(0, i) : r,
    o = r + t,
    $(".loading-div-companyanalysis").show(),
    $("#hdnSearchUrl").val(o),
    $.ajax({
        url: o,
        beforeSend: function() {
            $(".loading-div-companyanalysis").show()
        }
    }).done(function(n) {
        $("#MenuTabData").html(n),
        $(".loading-div-companyanalysis").hide(),
        $("#frLoadingDiv").hide(),
        $("#hdnSearchUrl").val(o)
    }).error(function(n, t, i) {
        $(".loading-div").hide(),
        n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
    }).always(function() {
        $(".loading-div-companyanalysis").hide(),
        $("#frLoadingDiv").hide(),
        $(".loading-div").hide()
    })
}
function ChangeWatchListMenuTab(n) {
    var i = -1, h = $(n), f = $("#hdnSearchUrl").val(), t, u, e, s, r, o;
    f == "" && (f = document.URL),
    i = f.indexOf("?"),
    t = i > -1 ? f.substring(i) : "",
    u = t.indexOf("orderby="),
    t != "" && u > -1 && (e = "",
    s = t.indexOf("&", u),
    e = s > -1 ? t.substring(u, s + 1) : t.substring(u - 1),
    t = t.replace(e, "")),
    r = h.attr("relfTabUrl"),
    i = r.indexOf("?"),
    t == "" && i > -1 ? t = r.substring(i) : i > -1 && (t += "&" + r.substring(i + 1)),
    r = i > -1 ? r.substring(0, i) : r,
    o = r + t,
    $("#WatchListLoad").css("display", "block"),
    $("#hdnSearchUrl").val(o),
    $.ajax({
        url: o,
        success: function(n) {
            $("#MenuTabData").html(n),
            $("#WatchListLoad").css("display", "none"),
            $("#hdnSearchUrl").val(o)
        },
        error: function(n, t, i) {
            $("#WatchListLoad").css("display", "none"),
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        }
    })
}
function GetPageNoFromCompAnalysisUrls(n) {
    var i = n.indexOf("/page/");
    if (i > -1) {
        i += 6;
        var u = n.substring(0, i)
          , t = n.substring(i)
          , r = "";
        r = t.indexOf("/") > -1 ? t.substr(t.indexOf("/")) : t.indexOf("?") > -1 ? t.substr(t.indexOf("?")) : "",
        n = u + "#PAGE_NO#" + r
    }
    return n
}
function SetPageNoInCompAnalysisTabsUrl(n, t) {
    return n = GetPageNoFromCompAnalysisUrls(n),
    n = n.replace("#PAGE_NO#", t)
}
function GotoCompanyOverviewPg(n) {
    var t = $("#" + n.id + " :selected").attr("data-link");
    document.location.href = t
}
function getMinValue_FormatString_TickInterval_ForJQPlotYAxis(n) {
    var f = "", i = "", r = "", t = new Date, u, e;
    return n == 90 ? (t.setMonth(t.getMonth() - 3),
    i = "%b/%y",
    r = "1 month") : n == 180 ? (t.setMonth(t.getMonth() - 6),
    i = "%b/%y",
    r = "3 months") : n == 365 ? (t.setYear(t.getFullYear() - 1),
    i = "%b/%y",
    r = "4 months") : n == 730 ? (t.setYear(t.getFullYear() - 2),
    i = "%b/%y",
    r = "6 months") : n == 1095 && (t.setYear(t.getFullYear() - 3),
    i = "%b/%y",
    r = "12 months"),
    u = new Date(t),
    f = u.getMonth() + 1 + "/" + u.getDate() + "/" + u.getFullYear(),
    e = {
        minVal: f,
        fomatStr: i,
        tInterval: r
    },
    e.a = f,
    e
}
function setMinAndMaxDateValToGlobVars(n) {
    for (var i = [], t = 0, t = 0; t < n[0].length; t++)
        i.push(new Date(n[0][t][0]));
    maxDate = new Date(Math.max.apply(null, i)),
    maxDate = new Date(maxDate.setDate(maxDate.getDate() + 5))
}
function RenderJQPlotChart(n, t) {
    var o = !1, i = $("#hdnPrevChartHeaderId").val(), r = $("#hdnPrevSelChartRange").val(), u, f, e, s;
    (i != n || r != t) && (i == n && r != t && (o = !0),
    u = "chartdiv_" + n,
    pc_chartCont = u,
    $("#" + u).show(),
    f = $("#hdnPCChartUrl").val(),
    f += "/" + n + "/" + t,
    o == !1 && ($("#charthead_" + i).hide(700),
    $("#chartdiv_" + i).hide(700),
    $("#hdnPrevChartHeaderId").val(n),
    $("#pcRow_" + n).addClass("selected"),
    i != "" && $("#pcRow_" + i).removeClass("selected")),
    $("#hdnPrevSelChartRange").val(t),
    $("#charthead_" + n).show(700),
    $("#chartdiv_" + n).show(500),
    $("#chtab_" + n + "_" + t).addClass("active"),
    r != "" && $("#chtab_" + i + "_" + r).removeClass("active"),
    e = getMinValue_FormatString_TickInterval_ForJQPlotYAxis(t),
    s = $.jqplot(u, f, {
        axes: {
            xaxis: {
                renderer: $.jqplot.DateAxisRenderer,
                tickOptions: {
                    formatString: e.fomatStr
                },
                min: e.minVal,
                max: maxDate,
                tickInterval: e.tInterval
            },
            yaxis: {
                tickOptions: {
                    formatString: "%.2f"
                }
            }
        },
        highlighter: {
            show: !0,
            sizeAdjust: 7.5
        },
        cursor: {
            show: !1
        },
        legend: {
            show: !1,
            location: "e",
            background: "#cccccc"
        },
        series: [{
            lineWidth: 2,
            markerOptions: {
                size: 4
            }
        }],
        dataRenderer: ajaxDataRenderer,
        dataRendererOptions: {
            unusedOptionalUrl: f
        }
    }),
    s.replot({
        clear: !0
    }))
}
function ScrollTo(n, t) {
    $("html body").animate({
        scrollTop: $("#" + n).offset().top
    }, {
        duration: 400,
        complete: function() {
            t != undefined && t()
        }
    })
}
function GetCompanyHistoricPrices(n, t, i, r, u) {
    $.ajax({
        type: "GET",
        url: n,
        data: {
            marketID: t,
            companyID: i,
            fromDate: r,
            toDate: u
        },
        success: function(n) {
            $("#spnCompanyHistoricPrices").html(""),
            $("#spnCompanyHistoricPrices").html(n)
        },
        error: function(n) {
            n.readyState != 0 && alert("error occurred")
        },
        async: !1
    })
}
function InitializeDateTimePicker(n, t) {
    $("#" + n).datepicker({
        dateFormat: "MM-dd-yy",
        showAnim: "slideDown"
    }),
    t != "" && $("#" + n).datepicker("setDate", t)
}
function InitializeDateTimePickerWithFormat(n, t, i) {
    $("#" + n).datepicker({
        dateFormat: i,
        showAnim: "slideDown"
    }),
    t != "" && $("#" + n).datepicker("setDate", t)
}
function ChangeTimeRange(n, t) {
    $("#ulChartTimeRange li").removeClass("active"),
    $("#" + n + "_" + t).addClass("active");
    var i = $("#imgCompanyChart").attr("src");
    i = i.replace(/TimeRange=([0-9]|[all])*/, "TimeRange=" + t),
    $("#imgCompanyChart").attr("src", i),
    $("#HiddenValue_TimeRange").value = t
}
function GetUpdatedChart() {
    var d = $("#PriceBand").val(), b = $("#TimePeriodList").val(), w = $("#chkShowVolBars").attr("checked"), p = $("#chkShowLogScales").attr("checked"), y = $("#chkMajVGrid").attr("checked"), v = $("#chkMinVGrid").attr("checked"), a = $("#chkHorGrid").attr("checked"), l = $("#ddlChartSize").val(), k = $("#ChartTypeList").val(), c = $("#ddlMovAvgType1").val(), h = $("#txtMovAvg1").val(), s = $("#ddlMovAvgType2").val(), o = $("#txtMovAvg2").val(), e = $("#Indicator1").val(), f = $("#Indicator2").val(), u = $("#Indicator3").val(), r = $("#Indicator4").val(), t = $("#HiddenValue_TimeRange").val(), i, n;
    t == "" && (t = "180"),
    i = 0,
    i = $("#HiddenValue_CompanyID").val(),
    n = "http://www.argaamchart.com/main/chart.php?",
    n = n + "company_id=" + i,
    n = n + "&TimeRange=" + t,
    n += "&Volume=" + (w == !0 ? "1" : "0"),
    n += "&LogScale=" + (p == !0 ? "1" : "0"),
    n += "&MajorVGrid=" + (y == !0 ? "1" : "0"),
    n += "&MinorVGrid=" + (v == !0 ? "1" : "0"),
    n += "&HGrid=" + (a == !0 ? "1" : "0"),
    n += "&Interval=" + b,
    n += "&ChartSize=" + l,
    n += "&language=" + $("#hidCurrentLanguage").val(),
    n += "&ChartType=" + k,
    n += "&Band=" + d,
    n += "&avgType1=" + c,
    n += "&movAvg1=" + h,
    n += "&avgType2=" + s,
    n += "&movAvg2=" + o,
    n += "&width=600",
    n += "&height=450",
    n += "&indicator_height=80",
    n += "&remove_company_name=0",
    n += "&Indicator1=" + e,
    n += "&Indicator2=" + f,
    n += "&Indicator3=" + u,
    n += "&Indicator4=" + r,
    $("#ChartFilterContainer").css("display") != "none" && toggleChartFilter(),
    $("#imgCompanyChart").attr("src", n)
}
function toggleChartFilter() {
    $("#chartcontainer").slideToggle("slow"),
    $("#ChartFilterContainer").slideToggle("slow")
}
function Search4ArgaamReports(n) {
    var o, t;
    n == undefined && (n = 1);
    var u = $("#txtSearch").val()
      , i = $("#hdnSearchElems").val()
      , r = $("#ddlSectors").val() == null ? "" : $("#ddlSectors").val()
      , f = $("#txtToDate").val()
      , e = $("#txtFromDate").val()
      , s = $("#ddlMarket").val();
    (u != "" || i != "" || r != 0 || f != "" || e != "") && (i != "" && (r = ""),
    o = "ts=" + u + "&asid=" + i + "&sid=" + r + "&fromdate=" + e + "&todate=" + f + "&marketID=" + s + "&pageNo=" + n,
    t = "",
    t = $("#hdnCurrURL").val(),
    t += "?" + o,
    $("#loadingArgaamReport").css("display", "block"),
    $.ajax({
        type: "GET",
        url: t
    }).done(function(n) {
        $("#ArgaamReportSection").html(n),
        $("#loadingArgaamReport").css("display", "none")
    }))
}
function DisableScroll() {
    document.body.scroll = "no",
    document.body.style.overflow = "hidden",
    document.body.scrollIntoView(100)
}
function EnableScroll() {
    document.body.scroll = "yes",
    document.body.style.overflow = "visible"
}
function HideSendToFriendPopup() {
    var n = $("#sendtofriendcontainer");
    n.remove(),
    EnableScroll(),
    $("#lightBoxbg").css("display", "none")
}
function ShowSendToFriendPopup(n, t, i, r) {
    var u = "/" + r + "/content/getsendtofriendview/"
      , f = $("#sendtofriendcontainer");
    $.ajax({
        type: "GET",
        url: u,
        data: {
            actionName: n,
            controllerName: t,
            keyFieldValue: i,
            languageShortName: r
        },
        success: function(n) {
            $("#sendToFriend").html(n),
            DisableScroll()
        },
        error: function(n) {
            n.readyState != 0 && alert("error occurred in connection")
        }
    })
}
function DisplayAnnouncement() {
    try {
        $("#tickerNewsDiv").vTicker()
    } catch (n) {}
}
function DisplayNewBar() {
    try {
        $("#MarketPulseNewsDiv").vTicker()
    } catch (n) {}
}
function GetCompanyMarketStats(n) {
    $("#companyMarketStatsLoadingDiv").css("display", "block"),
    $.ajax({
        type: "GET",
        url: n,
        cache: !1,
        success: function(n) {
            n != "" ? $("#divCompanyMarketStats").html(n) : $("#divCompanyMarketStats").append("some error occured while processing your request. Try agin later!!!")
        },
        error: function(n) {
            n.readyState != 0 && $("#divCompanyMarketStats").append("some error occured while processing your request. Try agin later!!!")
        }
    }),
    setTimeout(function() {
        $("#companyMarketStatsLoadingDiv").css("display", "none")
    }, 2e3)
}
function loadCementReportByYear(n) {
    var t = $(n).val();
    t > 0 && (document.location.href = $("#hdnCurrUrl").val() + "?year=" + t)
}
function putOnlineStyling(n) {
    var t = $(n).getStyleObject();
    $(n).css(t),
    $(n).removeClass("*"),
    $(n).children("*").each(function() {
        putOnlineStyling($(this))
    })
}
function ExportToExcel(n) {
    var t = $("#" + n)[0].outerHTML;
    setTimeout(function() {
        $.ajax({
            url: $("#hdnContentToExcelURL").val(),
            data: {
                tblToExport: t,
                tblID: n
            },
            type: "POST",
            async: !1,
            success: function(n) {
                n ? ($("#DownloadCustomError").hide(),
                $("#DownloadCustomError").fadeIn(),
                $("#DownloadCustomErrorMessage").html(n)) : ($("#customExcelLoading").show(),
                $.browser.msie && parseInt($.browser.version) <= 8 ? setTimeout(function() {
                    window.open("/exportdatatoexcelfilesave", "PopUp", "width=500,height=300"),
                    $("#customExcelLoading").hide()
                }, 1e3) : setTimeout(function() {
                    window.open('data:application/vnd.ms-excel,<meta http-equiv="content-type" content="text/plain; charset=UTF-8"/>' + encodeURIComponent(t)),
                    $("#DownloadCustomError").hide(),
                    $("#customExcelLoading").hide()
                }, 1e3))
            },
            error: function(n) {
                $("#customExcelLoading").hide(),
                n.readyState != 0 && alert("error occurred")
            }
        })
    }, 1e3)
}
function ExportResourcePrint() {
    console.log("printing..");
    var n = ExportResourcePermission();
    n ? ($("#DownloadCustomError").show(),
    $("#DownloadCustomErrorMessage").html(n)) : window.print()
}
function ExportResourcePermission() {
    console.log("printing..");
    var n = "";
    return $.ajax({
        url: $("#hdnURLToExportPermission").val(),
        type: "GET",
        async: !1,
        success: function(t) {
            n = t
        },
        error: function(n) {
            n.readyState != 0 && alert("error occurred")
        }
    }),
    n
}
function ExportContentToPDF(n, t) {
    var i = $("#" + n)[0].outerHTML;
    $.ajax({
        url: $("#hdnContentToPDFURL").val(),
        data: {
            tblToExport: i,
            tblID: n,
            heading: t
        },
        type: "POST"
    }).done(function(n) {
        $("#DownloadCustomError").hide(),
        n[1].trim() ? ($("#DownloadCustomError").fadeIn(),
        $("#DownloadCustomErrorMessage").html(n[1])) : ($("#customPDFLoading").show(),
        setTimeout(function() {
            $("#customPDFLoading").hide(),
            $("#DownloadCustomError").hide(),
            window.open(n[0], "_blank"),
            setTimeout(function() {
                $.ajax({
                    url: "/ExportResource/DeletePDFFile",
                    data: {
                        fileName: n[0]
                    }
                })
            }, 1e4)
        }, 1e3))
    }).fail(function(n, t) {
        $("#customPDFLoading").hide(),
        console.log(n.Data),
        n.readyState != 0 && (alert("error occurred"),
        console.log(n.status),
        console.log(t),
        console.log(n.textStatus))
    })
}
function ExportURLToPDF(n) {
    var t = $("#" + id)[0].outerHTML;
    $("#customPDFLoading").show(),
    console.log("Creating PDF"),
    $.ajax({
        url: $("#hdnURLToPDFURL").val(),
        data: {
            url: n
        },
        type: "POST",
        beforeSend: function() {
            $("#customPDFLoading").show()
        }
    }).done(function(n) {
        $("#customPDFLoading").hide(),
        window.location = n
    }).fail(function(n) {
        $("#customPDFLoading").hide(),
        n.readyState != 0 && alert("error occurred")
    })
}
function ExcelExportFromYear() {
    var n = new Date;
    return n.getMonth() <= 2 ? n.getFullYear() - 6 : n.getFullYear() - 5
}
function ExcelExportToYear() {
    var n = new Date;
    return n.getMonth() <= 2 ? n.getFullYear() - 1 : n.getFullYear()
}
function ReverseTableDirection(n) {
    var i = "#" + n + " tr"
      , t = "";
    $(i).each(function() {
        t = "",
        $($(this).children().toArray().reverse()).each(function() {
            t += $(this)[0].outerHTML
        }),
        $(this).html(t)
    })
}
function ReverseTableRowDirection(n) {
    var i = "#" + n
      , t = "";
    $(i).each(function() {
        t = "",
        $(this).children().reverse().each(function() {
            t += $(this)[0].outerHTML
        }),
        $(this).html(t)
    })
}
function CurrencyConversion(n, t, i) {
    var r = 0;
    i == USDollarCurId ? $.ajax({
        type: "GET",
        url: "/getcurrencyexchangerateinfo?fromcurrency=" + t + "&tocurrency=" + i,
        cache: !1,
        async: !1,
        success: function(n) {
            r = n
        },
        error: function() {
            alert("Ooops!! Error in getting exchange rate")
        }
    }) : r = 1,
    r > 0 && ($("[relf-val*=]").each(function() {
        var t = $(this), n;
        i == USDollarCurId ? (n = t.html(),
        n = n.replace(/\,/g, ""),
        $.isNumeric(n) && (n = (n * r).toFixed(2),
        t.html(n))) : (n = t.attr("dbdata"),
        t.html(n))
    }),
    $(n).attr("id") == "lnkToUSD" ? ($(n).removeAttr("onclick"),
    $("#lnkToSAR").attr("onclick", "CurrencyConversion(this," + USDollarCurId + "," + ARRiyalCurId + ")")) : ($(n).removeAttr("onclick"),
    $("#lnkToUSD").attr("onclick", "CurrencyConversion(this," + ARRiyalCurId + "," + USDollarCurId + ")")))
}
function searchFU() {
    var t = 1
      , i = $("#txtCompanyName").val()
      , n = $("#hdnCompID").val()
      , r = $("#ddlMarket :selected").val();
    $.trim(i).length == 0 && (n = 0,
    $("#hdnCompID").val(0));
    var u = $("#hdnSearchElems").val()
      , f = $("#ddlSectors").val()
      , e = $("#hdnFUPrevURL").val() + n + "/" + f + "/0/" + t + "?marketID=" + r + "&argaamsectorids=" + u;
    return $.ajax({
        url: e,
        beforeSend: function() {
            $("#frLoadingDiv").show()
        },
        success: function(n) {
            $("#divSearch").html(n)
        },
        error: function(n, t, i) {
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        },
        complete: function() {
            $("#frLoadingDiv").hide()
        }
    }),
    !1
}
function previousloadMore() {
    var n = parseInt($("#Previous_PageNo").val()) + 1, u = parseInt($("#Previous_TotalPageNo").val()), i = $("#hdnCompID").val(), t = $("#ddlMarket :selected").val(), r;
    t == 0 && (t = $("#hdnMarketID").val()),
    r = $("#txtCompanyName").val(),
    $.trim(r).length == 0 && (i = 0,
    $("#hdnCompID").val(0));
    var f = $("#hdnSearchElems").val()
      , e = $("#ddlSectors").val()
      , o = $("#hdnFUPrevURL").val() + i + "/" + e + "/0/" + n + "?marketID=" + t + "&argaamsectorids=" + f;
    return $.ajax({
        url: o,
        success: function(t) {
            $("#divPreviousDataSec").append(t),
            $("#Previous_PageNo").val(n),
            n >= u && $("#divPreviousMore").hide()
        },
        error: function(n, t, i) {
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        }
    }),
    !1
}
function UpdateChart(n, t) {
    var i = new String($("#" + t).attr("src"));
    $("#" + t).attr("src", i.replace(/TimeRange=([0-9]|[1_day])*/, "TimeRange=" + n))
}
function ScrollBusinessSegment(n) {
    return $.ajax({
        url: n,
        beforeSend: function() {
            $("#divLoadingBusinessSegment").show()
        },
        success: function(n) {
            $("#divBusinessSegment").html(n)
        },
        error: function(n, t, i) {
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        },
        complete: function() {
            $("#divLoadingBusinessSegment").hide()
        }
    }),
    !1
}
function ScrollGeoLocationSegment(n) {
    return $.ajax({
        url: n,
        beforeSend: function() {
            $("#divLoadingGeoLocation").show()
        },
        success: function(n) {
            $("#divGeoLocation").html(n)
        },
        error: function(n, t, i) {
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        },
        complete: function() {
            $("#divLoadingGeoLocation").hide()
        }
    }),
    !1
}
function GetSpecialInfo(n, t, i, r) {
    var f = "#dvLoading_"
      , e = "";
    return e = arguments.length == 5 ? "/" + n + "/getcompanyprofilespecialinformationsectioncontent/" + t + "/" + i + "/" + r : "/" + n + "/getcompanyfactsandstatssectioncontent/" + t + "/" + r,
    $.ajax({
        url: e,
        cache: !1,
        beforeSend: function() {
            $(f).show()
        }
    }).done(function(n) {
        $("#dvSpInfoBlk_" + i).html(n)
    }).fail(function(n, t, i) {
        $(f).hide(),
        n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
    }).always(function() {
        $(f).hide()
    }),
    !1
}
function GetDynamicAttributeInfo(n, t, i, r, u) {
    var f = "#dvLoading_"
      , e = "";
    return e = arguments.length == 5 ? "/" + n + "/GetCompanyAttributeSectionContent/" + t + "/" + i + "/" + r + "/" + u : "/" + n + "/GetCompanyAttributeSectionContent/" + t + "/" + i + "/" + r + "/" + u,
    $.ajax({
        url: e,
        cache: !1,
        beforeSend: function() {
            $(f).show()
        }
    }).done(function(n) {
        $("#dvSpInfoBlk_" + i).html(n)
    }).fail(function(n, t, i) {
        $(f).hide(),
        n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
    }).always(function() {
        $(f).hide()
    }),
    !1
}
function GetKeyStatisticsSpecialInfo(n, t, i, r) {
    var f = "#dvLoading_"
      , e = "";
    return e = arguments.length == 5 ? "/" + n + "/GetCompanyProfileKeyStatisticSpecialInformationSection/" + t + "/" + r + "?reportID=" + i : "/" + n + "/GetCompanyProfileKeyStatisticSpecialInformationSection/" + t + "/" + r + "?reportID=" + i,
    $.ajax({
        url: e,
        cache: !1,
        beforeSend: function() {
            $(f).show()
        }
    }).done(function(n) {
        $("#dvSpInfoBlk_" + i).html(n)
    }).fail(function(n, t, i) {
        $(f).hide(),
        n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
    }).always(function() {
        $(f).hide()
    }),
    !1
}
function GetPetrochemicalProductCapacityCompanyReport(n, t, i, r) {
    var u = "#dvLoading_"
      , f = "";
    return f = arguments.length == 4 ? "/" + n + "/GetProductCapacityReportContent/" + t + "/" + i + "/" + r : "/" + n + "/GetProductCapacityReportContent/" + t + "/" + i + "/" + r,
    $.ajax({
        url: f,
        cache: !1,
        beforeSend: function() {
            $(u).show()
        }
    }).done(function(n) {
        $("#dvSpInfoBlk_" + i).html(n)
    }).fail(function(n, t, i) {
        $(u).hide(),
        n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
    }).always(function() {
        $(u).hide()
    }),
    !1
}
function GetPetrochemicalProductReport(n, t, i, r) {
    var u = "#dvLoading_"
      , f = "/" + n + "/PetrochemicalProductAndGlobalizationPartial/" + t + "/" + i + "/" + r;
    return $.ajax({
        url: f,
        cache: !1,
        beforeSend: function() {
            $(u).show()
        }
    }).done(function(n) {
        $("#dvSpInfoBlk_" + i).html(n)
    }).fail(function(n, t, i) {
        $(u).hide(),
        n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
    }).always(function() {
        $(u).hide()
    }),
    !1
}
function ShowAllArgaamSectors(n, t) {
    $("[rel-hidSec='agsec" + t + "']").each(function() {
        $(this).show()
    }),
    $(n).hide()
}
function GetBothTabsProductsOnChangeYear() {
    $("#ddlYears").change(function() {
        var t = $(this).val()
          , n = $("#hdnProdCapAllDataUrl").val();
        n = n.replace("-1", t),
        $.ajax({
            url: n,
            cache: !1,
            beforeSend: function() {
                $("#ddlYears").attr("disabled", "disabled"),
                $("#dvLoading").show()
            }
        }).done(function(n) {
            $("#dvAllAndFinalProds").html(n)
        }).fail(function(n, t, i) {
            $(this).removeAttr("disabled"),
            $("#dvLoading").hide(),
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        }).always(function() {
            $("#ddlYears").removeAttr("disabled"),
            $("#dvLoading").hide()
        })
    })
}
function DocReady_ProductTabs() {
    $("#tblFinProds").hide(),
    typeof compPopupJson != "undefined" && ($("#compBasicInfo").mouseover(function() {
        cidHd = !1
    }),
    $("#compBasicInfo").mouseleave(function() {
        CompInfoDivOut()
    }),
    addPopupsToLinks(),
    addFinProdPopupsToLinks());
    $("#TabAllProd").on("click", function() {
        $("#TabFinProd").removeClass("active"),
        $("#TabAllProd").addClass("active"),
        $("#tblAllProds").show(),
        $("#tblFinProds").hide(),
        closeAllProdCapPopups()
    });
    $("#TabFinProd").on("click", function() {
        $("#TabAllProd").removeClass("active"),
        $("#TabFinProd").addClass("active"),
        $("#tblFinProds").show(),
        $("#tblAllProds").hide(),
        closeAllProdCapPopups()
    });
    $("#TabAllProd").click()
}
function ShowMore(n) {
    var t = "", i;
    n == "fin" ? (t = $("#hdnProdCapMorFinProdsUrl").val(),
    t = t.replace("action", "more"),
    t = t.replace("-2", $("#ddlYears").val()),
    $("#productionStatusFinProd").val() > 0 && (t = t.replace("-3", $("#productionStatusFinProd").val())),
    i = $("#PgNoFinProd").val(),
    i++,
    LoadListFinProds(t, i, "moreFinProd")) : (t = $("#hdnProdCapMorProds").val(),
    t = t.replace("action", "more"),
    t = t.replace("-2", $("#ddlYears").val()),
    $("#productionStatus").val() > 0 && (t = t.replace("-3", $("#productionStatus").val())),
    i = $("#PgNo").val(),
    i++,
    LoadList(t, i, "more"))
}
function ChangeStatus(n, t) {
    var i = "";
    t == "fin" ? (i = $("#hdnProdCapMorFinProdsUrl").val(),
    i = i.replace("action", "status"),
    i = i.replace("-2", $("#ddlYears").val()),
    i = i.replace("-3", $(n).val()),
    LoadListFinProds(i, 1, "statusFinProd")) : (i = $("#hdnProdCapMorProds").val(),
    i = i.replace("action", "status"),
    i = i.replace("-2", $("#ddlYears").val()),
    i = i.replace("-3", $(n).val()),
    LoadList(i, 1, "status"))
}
function LoadList(n, t, i) {
    closeAllProdCapPopups(),
    n = n.replace("-1", t),
    $.ajax({
        url: n,
        cache: !1,
        beforeSend: function() {
            $("#dvLoading").show()
        }
    }).done(function(n) {
        var r, u, f, e;
        removeHiddenVars(["hdnJsonVal", "hdnJsonFsVal", "hdnTotalRecs"]),
        removeHiddenVars(["hdnTotalProdCap", "hdnTotalShares"]),
        i == "status" ? ($("#tblAllProds tr").each(function() {
            $(this).attr("header") == undefined && $(this).remove()
        }),
        $("#allProdSubHeader").after(n),
        r = $("#hdnTotalProdCap").length ? $("#hdnTotalProdCap").val() : "0",
        u = $("#hdnTotalShares").length ? $("#hdnTotalShares").val() : "0",
        $("#tdTotalRowProdCap1").html(r),
        $("#tdTotalRowProdCap2").html(r),
        $("#tdTotalRowShare1").html(u),
        $("#tdTotalRowShare2").html(u),
        $("#tdTotalRowProdCap1").removeClass("red"),
        $("#tdTotalRowProdCap2").removeClass("red"),
        $("#tdTotalRowShare1").removeClass("red"),
        $("#tdTotalRowShare2").removeClass("red"),
        r.indexOf("(") > -1 && ($("#tdTotalRowProdCap1").addClass("red"),
        $("#tdTotalRowProdCap2").addClass("red")),
        u.indexOf("(") > -1 && ($("#tdTotalRowShare1").addClass("red"),
        $("#tdTotalRowShare2").addClass("red"))) : ($("#moreRow").before(n),
        $("#moreRow").remove()),
        extendJsonData(),
        addPopupsToLinks(),
        f = $("#hdnPgSize").val(),
        e = $("#hdnTotalRecs").val(),
        t * f >= e && $("#moreRow").remove()
    }).fail(function(n, i, r) {
        t > 1 && t--,
        $("#dvLoading").hide(),
        n.readyState != 0 && alert("try again later\r" + i + "\r" + r)
    }).always(function() {
        $("#dvLoading").hide(),
        $("#PgNo").val(t)
    })
}
function LoadListFinProds(n, t, i) {
    closeAllProdCapPopups(),
    n = n.replace("-1", t),
    $.ajax({
        url: n,
        cache: !1,
        beforeSend: function() {
            $("#dvLoading").show()
        }
    }).done(function(n) {
        var r, u, f, e;
        removeHiddenVars(["hdnJsonVal", "hdnJsonFsVal", "hdnTotalRecsFin"]),
        removeHiddenVars(["hdnTotalProdCapFin", "hdnTotalSharesFin"]),
        i == "statusFinProd" ? ($("#tblFinProds tr").each(function() {
            $(this).attr("header") == undefined && $(this).remove()
        }),
        $("#finProdSubHeader").after(n),
        r = $("#hdnTotalProdCapFin").length ? $("#hdnTotalProdCapFin").val() : "0",
        u = $("#hdnTotalSharesFin").length ? $("#hdnTotalSharesFin").val() : "0",
        $("#tdTotalRowProdCapFinProd1").html(r),
        $("#tdTotalRowProdCapFinProd2").html(r),
        $("#tdTotalRowShareFinProd1").html(u),
        $("#tdTotalRowShareFinProd2").html(u),
        $("#tdTotalRowProdCapFinProd1").removeClass("red"),
        $("#tdTotalRowProdCapFinProd2").removeClass("red"),
        $("#tdTotalRowShareFinProd1").removeClass("red"),
        $("#tdTotalRowShareFinProd2").removeClass("red"),
        r.indexOf("(") > -1 && ($("#tdTotalRowProdCapFinProd1").addClass("red"),
        $("#tdTotalRowProdCapFinProd2").addClass("red")),
        u.indexOf("(") > -1 && ($("#tdTotalRowShareFinProd1").addClass("red"),
        $("#tdTotalRowShareFinProd2").addClass("red"))) : i == "moreFinProd" && ($("#moreRowFinProd").before(n),
        $("#moreRowFinProd").remove()),
        extendJsonData(),
        addFinProdPopupsToLinks(),
        f = $("#hdnPgSize").val(),
        e = $("#hdnTotalRecsFin").val(),
        t * f >= e && $("#moreRowFinProd").remove()
    }).fail(function(n, i, r) {
        t > 1 && t--,
        $("#dvLoading").hide(),
        n.readyState != 0 && alert("try again later\r" + i + "\r" + r)
    }).always(function() {
        $("#dvLoading").hide(),
        $("#PgNoFinProd").val(t)
    })
}
function addPopupsToLinks() {
    var n = $("#hdnLangID").val();
    $("[relfpopup-val*=]").each(function() {
        var t = $(this).attr("relfpopup-val");
        $("#span_" + t).hover(function() {
            tOut = setTimeout(function() {
                CompInfoDivIn("span", t, compPopupJson, n)
            }, 500)
        }, function() {
            clearTimeout(tOut),
            tOut = null,
            CompInfoDivOut()
        })
    })
}
function addFinProdPopupsToLinks() {
    var n = $("#hdnLangID").val();
    $("[relfpopup2-val*=]").each(function() {
        var t = $(this).attr("relfpopup2-val");
        $("#span2_" + t).hover(function() {
            tOut = setTimeout(function() {
                CompInfoDivIn("span2", t, compPopupJson, n)
            }, 500)
        }, function() {
            clearTimeout(tOut),
            tOut = null,
            CompInfoDivOut()
        })
    })
}
function NotesPopup(n, t, i, r) {
    var f = $("#caNotediv").val(), u;
    $("#caNotediv").length > 0 && f.length > 0 && hidePopup(f),
    u = "#" + t,
    n == 2 ? $("#" + r).position({
        my: "right bottom",
        at: "left top",
        of: u,
        collision: "none none"
    }) : $("#" + r).position({
        my: "left bottom",
        at: "right top",
        of: u,
        collision: "none none"
    }),
    r == "dvNotess" ? ($("#" + r).append("<div class='close relative-pos'><a onclick='javascript:hidePopup(" + r + "); return false;'>&times;</a></div> <div id='dviNotesData'></div>"),
    $("#dviNotesData").html($("#" + i).html())) : ($("#" + r).append("<div class='close relative-pos'><a onclick='javascript:hidePopup(" + r + "); return false;'>&times;</a></div> <div id='dvNotesData'></div>"),
    $("#dvNotesData").html($("#" + i).html())),
    $("#caNotediv").val(r),
    $("#" + r).css("display", "block")
}
function hidePopup(n) {
    $(n).html(""),
    $(n).attr("style", "background-color:transparent !important"),
    $(n).attr("style", "border:none !important"),
    $(n).attr("style", "border-radius:3px !important")
}
function FeedStockPopup(n, t, i) {
    var r = "#" + i.substr(0, i.indexOf("_") + 1);
    return ProvTimePopCl(),
    $(r + n).hasClass("closed") ? ($.each(compPopupFsJson, function(t, i) {
        parseInt(i.ProdCapID) == parseInt(n) && ($("#tdFSTitle").html(i.FeedstockName),
        RowHideOfFeedStockPopup(i.FeedstockPrice, $("#tdFSPrice")),
        RowHideOfFeedStockPopup(i.FeedstockSource, $("#tdFSSource")),
        RowHideOfFeedStockPopup(i.FeedstockQuantity, $("#tdFSQuantity")),
        RowHideOfFeedStockPopup(i.AddupNotes, $("#tdFSNotes")))
    }),
    FeedStockPopCl(!0),
    t == 1 ? $("#dvFeedStock").position({
        my: "right bottom",
        at: "left top",
        of: r + n,
        collision: "none none"
    }) : $("#dvFeedStock").position({
        my: "left bottom",
        at: "right top",
        of: r + n,
        collision: "none none"
    }),
    $("#dvFeedStock").fadeIn(300),
    $(r + n).removeClass("closed").addClass("open"),
    $("#lastFSID").val(n)) : FeedStockPopCl(),
    !1
}
function RowHideOfFeedStockPopup(n, t) {
    $.trim(n) == "" ? t.parent().hide() : (t.parent().show(),
    t.html(n))
}
function ProvTimingsPopup(n, t, i) {
    var u = "#" + i.substr(0, i.indexOf("_") + 1), f, l, h;
    if (FeedStockPopCl(),
    $(u + n).hasClass("closed")) {
        var e = 0
          , o = 0
          , s = -30
          , r = ""
          , c = '<tr><td>{0}</td><td>{1}</td><td><div class="relative-pos"><div class="tt"{4}>{3}{2}</div></div></td></tr>';
        $("#tblProvTimings tr").each(function() {
            $(this).attr("header") == undefined && $(this).remove()
        }),
        f = [],
        l = [],
        $.each(compPopupPTJson, function(t, i) {
            parseInt(i.ProdCapID) == parseInt(n) && (f.push(i),
            s += 30)
        }),
        f.sort(function(n, t) {
            return n.SeqNo - t.SeqNo
        }),
        h = $("#hdnDays").val(),
        $.each(f, function(n, t) {
            r = c.replace("{0}", t.PauseDate),
            r = r.replace("{1}", t.ResumeDate),
            r = r.replace("{2}", t.Duration + (t.Duration != "-" ? " " + h : "")),
            t.Duration != "-" && $.trim(t.DurationNote) != "" ? (r = r.replace("{3}", '<i class="icon"></i>'),
            r = r.replace("{4}", ' tooltip-dur-data="' + t.DurationNote + '"')) : (r = r.replace("{3}", ""),
            r = r.replace("{4}", "")),
            $("#tblProvTimings").append(r)
        }),
        ProvTimePopCl(!1),
        t == 1 ? (e = $(u + n).position().left + 30,
        o = $(u + n).position().top - 50 - s) : (e = $(u + n).position().left - 425,
        o = $(u + n).position().top - 50 - s),
        $("#dvProvTimings").css({
            left: e,
            top: o
        }),
        $("#dvProvTimings").fadeIn(300),
        $(u + n).removeClass("closed").addClass("open"),
        $("#lastPTID").val(n)
    } else
        ProvTimePopCl();
    return !1
}
function removeHiddenVars(n) {
    for (var i, t = 0; t < n.length; t++)
        i = n[t],
        $("#" + i).remove(),
        $("#" + i).length && ($("#" + i)[0].outerHTML = "")
}
function extendJsonData() {
    var t = eval("(" + $("#hdnJsonVal").val() + ")"), n;
    $.extend(compPopupJson, t),
    n = eval("(" + $("#hdnJsonFsVal").val() + ")"),
    $.extend(compPopupFsJson, n)
}
function closeAllProdCapPopups() {
    $("#dvFeedStock").length && FeedStockPopCl(),
    $("#dvProvTimings").length && ProvTimePopCl()
}
function FeedStockPopCl() {
    var n = parseInt($("#lastFSID").val());
    n > 0 && ($("#lnk_" + n).removeClass("open").addClass("closed"),
    $("#lnkFin_" + n).removeClass("open").addClass("closed")),
    arguments.length == 0 && ($("#dvFeedStock").hide(),
    $("#dvFeedStock").css("left", ""),
    $("#dvFeedStock").css("top", ""))
}
function ProvTimePopCl() {
    var n = parseInt($("#lastPTID").val());
    n > 0 && ($("#lnkPT_" + n).removeClass("open").addClass("closed"),
    $("#lnkPTFin_" + n).removeClass("open").addClass("closed")),
    arguments.length == 0 && $("#dvProvTimings").hide()
}
function FillCountries(n) {
    var i = "", r = '<li class="close"><span cls-holder="" class="root"><i class="no-child"></i><a id="c_{0}" class="sas" onclick="SelectIDForGeoFoc(this)">{1}</a></span></li>', u = "dvChld_Par_" + n.replace("liId_", ""), t;
    $("#" + n).hasClass("close") ? ($("#" + n).removeClass("close").addClass("open"),
    t = n.replace("liId_", ""),
    $.each(countryJson, function(n, u) {
        parseInt(u.RegionID) == parseInt(t) && (rowData = r.replace("{0}", u.CountryID),
        rowData = rowData.replace("{1}", u.CountryName),
        i += rowData)
    }),
    $("#dvChld_Par_" + t).html(i)) : ($("#" + n).removeClass("open").addClass("close"),
    $("#" + u).html(""))
}
function SelectIDForGeoFoc(n) {
    var t = "selected-reg"
      , i = $("#hdnSelMultiple").val() == 1 ? !0 : !1;
    i ? ($(n).parent().hasClass(t) ? ($(n).parent().removeClass(t),
    arrRegOrCountry.pop($(n).attr("id"))) : ($(n).parent().addClass(t),
    arrRegOrCountry.push($(n).attr("id"))),
    $("#hdnSelectedGeoFocID").val(arrRegOrCountry)) : ($("[cls-holder]").each(function(n, i) {
        $(i).hasClass(t) && $(i).removeClass(t)
    }),
    $(n).parent().addClass(t),
    $("#hdnSelectedGeoFocID").val($(n).attr("id")),
    $("#geoFocusRegions").html($(n).text()),
    $("#maindvArgSectors").addClass("n-display"))
}
function getVisibleFlds(n) {
    var i = []
      , t = "";
    return t = n == "ff" ? "relf-FF" : "relf-FR",
    $("[" + t + "]").each(function(n, r) {
        if ($(r).css("display") != "none") {
            var u = $(r).attr(t);
            if ($.inArray(u, i) == -1)
                i.push(u);
            else
                return !1
        }
    }),
    i
}
function NavigateFF_FR_ToProperPg(n, t) {
    var r = []
      , i = "";
    n == "ff" ? (i = "relf-FF",
    r = getVisibleFlds("ff")) : (i = "relf-FR",
    r = getVisibleFlds("fr")),
    $("#" + t + " td[" + i + "]").each(function(n, t) {
        $.inArray($(t).attr(i), r) > -1 ? $(t).show() : $(t).hide()
    })
}
function FillChildrenSmartly(n) {
    var i = "dvChld_Par_" + n.replace("liId_", "")
      , t = $("#" + n);
    t.hasClass("collapsed") ? (t.removeClass("collapsed").addClass("expanded"),
    $("#" + i).show()) : t.hasClass("expanded") ? (t.removeClass("expanded").addClass("collapsed"),
    $("#" + i).hide()) : t.hasClass("close") ? (t.removeClass("close").addClass("open"),
    $("#" + i).show()) : (t.removeClass("open").removeClass("open").addClass("close"),
    $("#" + i).hide())
}
function ShowMoreCompanyAdvRecs(n) {
    var f = 0, i = 0, r = $("#hdnPgSize").val(), t = $("#PgNo_" + n).val(), u;
    t++,
    $("#tblComparisonDetails_" + n + " tr[relf-row=1]").each(function(n, t) {
        if (i < r) {
            i++,
            $(t).attr("relf-row", "0");
            var u = $(t).attr("id");
            NavigateFF_FR_ToProperPg("ff", u),
            NavigateFF_FR_ToProperPg("fr", u),
            $(t).show()
        } else
            return !1
    }),
    u = $("#hdnTotalRecs_" + n).val(),
    t * r >= u && $("#moreRow_" + n).remove(),
    $("#PgNo_" + n).val(t);
    return
}
function onChangeCompanyText4ComparisonDetail() {
    $.trim($("#txtCompanyName").val()).length > 0 && $("#hdnCompName").val() != $.trim($("#txtCompanyName").val()) && $("#hdnCompID").val(0)
}
function AddCompanyToFFAndFRTable(n) {
    var t = $("#hdnCompID").val(), r, i;
    t > 0 && (r = $("[relf-companyid=" + t + "]").length > 0,
    r == !1 ? (i = $("#hdnCompaniesComparisonDataByCompanyURL").val(),
    i = i.replace("-1", t),
    $.ajax({
        url: i,
        cache: !1,
        beforeSend: function() {
            $(".loading-div").show()
        }
    }).done(function(i) {
        var u, r;
        n == "c" ? ($("#tblComparisonDetails_0").find("tbody").length == 0 && $("#tblComparisonDetails_0").append($("<tbody>")),
        $("#tblComparisonDetails_0").find("tbody").prepend(i)) : ($("#tblComparisonDetailss").show(),
        $("#tblComparisonDetailss").find("tbody").length == 0 && $("#tblComparisonDetailss").append($("<tbody>")),
        $("#tblComparisonDetailss").find("tbody").prepend(i)),
        $("#msgRow").hide(),
        $("#txtCompanyName").val(""),
        $("#hdnCompName").val(""),
        $("#hdnCompID").val(0),
        u = $("#hdnAddedCompIDs").val() == "" ? t : $("#hdnAddedCompIDs").val() + "," + t,
        $("#hdnAddedCompIDs").val(u),
        r = $("#companyCount").html(),
        r = parseInt(r) + 1,
        $("#companyCount").html(r)
    }).fail(function(n, t, i) {
        $(".loading-div").hide(),
        n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
    }).always(function() {
        $(".loading-div").hide()
    })) : (alert("The company [" + $("#txtCompanyName").val() + "] already exists in the table\nAnd cannot be added."),
    $("#hdnCompName").val(""),
    $("#hdnCompID").val(0)))
}
function RemoveCompanyRow(n, t) {
    var r = $("[relf-companyid=" + n + "]").parent(), u, f, i, e;
    r.attr("newly-added") == undefined && (u = $("#hdnRemovedCompIDs").val(),
    f = u == "" ? [] : u.split(","),
    f.push(n),
    $("#hdnRemovedCompIDs").val(f.join(","))),
    r.css("background-color", "red"),
    r.fadeOut(400, function() {
        var i, n;
        r.remove(),
        i = 0,
        $("[relfCompanyCount*=]").each(function() {
            if (i = i + parseInt($(this).attr("value")),
            $(this).attr("id") == "hdnTotalRecs_" + t) {
                var n = $(this).attr("value");
                n = parseInt(n) - 1,
                $(this).attr("value", n)
            }
        }),
        n = $("#companyCount").html(),
        n = parseInt(n) - 1,
        $("#companyCount").html(n)
    }),
    i = $("#hdnAddedCompIDs").val(),
    i = $("#hdnAddedCompIDs").val().indexOf("," + n) != -1 ? i.replace("," + n, "") : i.replace(n, ""),
    $("#hdnAddedCompIDs").val(i),
    e = $("#hdnRemovedCompIDs").val() == "" ? n : $("#hdnRemovedCompIDs").val().indexOf(n) != -1 ? $("#hdnRemovedCompIDs").val() + "," + n : e,
    t = t == undefined ? 0 : t,
    $("#tblComparisonDetails_" + t + " tbody tr").length == 0 && (arguments.length == 1 ? $("#msgRow").show() : $("#msgRow_" + arguments[1]).show())
}
function ShowReportNamePopup() {
    $("#hdnSavedReportID").val() == 0 ? $("#repNamePopup").show() : SaveComparisonParameters()
}
function HideRepNamePopup() {
    $("#repNamePopup").hide()
}
function SaveComparisonParameters() {
    var t = $.trim($("#txtReportName").val()), n;
    if (t == "") {
        alert($("#reportNameMessage").val());
        return
    }
    n = [],
    $("[newly-added=1]").each(function(t, i) {
        $(i).children().each(function(t, i) {
            $(i).attr("relf-companyid") != undefined && n.push($(i).attr("relf-companyid"))
        })
    }),
    $.ajax({
        url: $("#hdnUrl4CompanyComparisonDetailReport").val(),
        data: {
            sectorIds: $("#hdnSectors").val(),
            finFields: $("#hdnFFlds").val(),
            finRatios: $("#hdnFRtos").val(),
            removedCompanyIds: $("#hdnRemovedCompIDs").val(),
            addedCompanyIds: n.join(","),
            savedReportID: $("#hdnSavedReportID").val(),
            reportFor: $("#hdnReportFor").val(),
            reportName: t,
            year: $("#hdnYear").val(),
            fpTypeID: $("#hdnFPTypeID").val(),
            fpID: $("#hdnFPID").val(),
            navPgNo: $("#hdnNavigatorPgNo").val(),
            GICS: $("#IsGICS").val(),
            Market: $("#IsMarketSector").val(),
            Argaam: $("#hdnArgaam").val(),
            Companies: $("#companyIDs").val()
        },
        type: "POST",
        beforeSend: function() {
            $(".loading-div").show()
        }
    }).done(function(n) {
        n != "" && (n == -1 ? ($(".loading-div").hide(),
        alert($("#ReportNameAlreadyExists").val())) : ($("#hdnSavedReportID").val(n),
        HideRepNamePopup(),
        $("#txtReportName").attr("readonly", !0),
        alert($("#ReportSavedSuccessfully").val())))
    }).fail(function(n) {
        $(".loading-div").hide(),
        n.readyState != 0 && alert("error occurred")
    }).always(function() {
        $(".loading-div").hide()
    })
}
function TableOrder(n, t, i) {
    n.indexOf(",") != -1 ? ($("[" + t + "='" + i + "']").attr("reversed") == "false" || $("[" + t + "='" + i + "']").attr("reversed") == undefined) && ([].reverse.call($("[" + t + "='" + i + "'] tbody tr:not([class^='labh'])")).appendTo("[" + t + "='" + i + "'] tbody"),
    $("[" + t + "='" + i + "']").attr("reversed", "true")) : $("[" + t + "='" + i + "']").attr("reversed") != "true" && ([].reverse.call($("[" + t + "='" + i + "'] tbody tr:not([class^='labh'])")).appendTo("[" + t + "='" + i + "'] tbody"),
    $("[" + t + "='" + i + "']").attr("reversed", "false"))
}
function ShowSectionTab(n) {
    $("[id^=SectionTabM]").each(function(n, t) {
        $(t).removeClass("active")
    }),
    $(n).addClass("active"),
    $("[id^=SectionTabC]").each(function(n, t) {
        $(t).hide()
    });
    var t = $(n).attr("id").replace("M", "C");
    $("#" + t).show()
}
function GetSegments(n, t) {
    return $(".segment").removeClass("active"),
    $("#" + t).addClass("active"),
    $.ajax({
        url: n,
        beforeSend: function() {
            $("#divLoadingSegment").show()
        },
        success: function(n) {
            $("#segmentDiv").html(n)
        },
        error: function(n, t, i) {
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        },
        complete: function() {
            $("#divLoadingSegment").hide()
        }
    }),
    !1
}
function insertCommas(n) {
    n += "",
    x = n.split("."),
    x1 = x[0],
    x2 = x.length > 1 ? "." + x[1] : "";
    for (var t = /(\d+)(\d{3})/; t.test(x1); )
        x1 = x1.replace(t, "$1,$2");
    return x1 + x2
}
function DoColumnTotal(n, t) {
    var u, r;
    $("#" + t).remove();
    var r = 0
      , h = 0
      , e = 0;
    for ($(".doTotalTbl tr").each(function() {
        $(this).children("td").each(function() {
            r++,
            $(this).attr("index", r)
        }),
        r = 0
    }),
    e = $(".doTotalTbl tr:visible").length,
    e--,
    r = 0,
    h = $(".doTotalTbl tr.doTotalColsCount td").length,
    u = '<tr id="' + t + '" style="background-color: #F1F1F1;">',
    r = 1; r <= h; r++)
        u += r == 1 ? "<td index=" + r + "><b>" + n + "</b></td>" : "<td index=" + r + "><b></b></td>";
    u = u + "<\\tr>",
    $(".doTotalTbl tr").last().after(u);
    var i = 0
      , f = !1
      , o = !1
      , c = !1
      , s = 0;
    $(".doTotalCol").each(function() {
        var n = $(this).attr("class"), t, r, u;
        s = $(this).attr("index"),
        n.indexOf("CPE") > -1 || n.indexOf("CPPB") > -1 ? c = !0 : $(".doTotalTbl tr:visible").children("td[index=" + s + "]").each(function() {
            var n = parseFloat($(this).html().replace(",", "")), t;
            $.isNumeric(n) && (i = i + n),
            $(this).html().indexOf("(") > -1 && (t = $(this).html().toString().replace("(", "").replace(")", "").replace(",", "").replace("%", ""),
            n = parseFloat(t),
            $.isNumeric(n) && (i = i - n)),
            $(this).html().indexOf("%") > -1 && (f = !0),
            $(this).attr("doAverage") != undefined && (o = !0)
        }),
        c && (t = "",
        r = $("#frRowValueURL").val(),
        n.indexOf("CPE") > -1 ? t = "CPE" : n.indexOf("CPPB") > -1 && (t = "CPPB"),
        u = $("#sectorID").val(),
        $.ajax({
            url: r + "?fr=" + t + "&sectorID=" + u + "&fiscalPeriodTypeID=3",
            async: !1,
            beforeSend: function() {}
        }).done(function(n) {
            i = n
        }).fail(function(n, t, i) {
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        }).always(function() {})),
        $(".doTotalTbl tr").last().children("td[index=" + s + "]").each(function() {
            i = f == !0 ? i - 1 : i,
            o && (i = i / e);
            var n = insertCommas(parseFloat(i).toFixed(2))
              , t = "";
            t = n < 0 ? f == !0 ? "<span class='red'>(" + n.replace("-", "") + " %)</span>" : "<span class='red'>(" + n.replace("-", "") + ")</span>" : f == !0 ? n + " %" : n,
            $(this).find("b").html(t)
        }),
        i = 0,
        o = !1,
        f = !1
    })
}
function FR(n, t) {
    this.ratio1 = n,
    this.ratio2 = t
}
function FRWithIndex(n, t, i, r, u) {
    this.index = n,
    this.IsNumeratorAbsolute = i,
    this.IsFormulaToNegateByOne = t,
    this.compIds = r,
    this.FR = u
}
function DoColumnTotalAsOfFormula(n, t, i, r, u, f) {
    var e = 0, s = $(".doTotalTbl tr.doTotalColsCount td").length, h = 0, o;
    if (s > 0) {
        if ($("#" + t).length == 0) {
            for ($(".doTotalTbl tr").each(function() {
                $(this).children("td").each(function() {
                    e++,
                    $(this).attr("index", e)
                }),
                e = 0
            }),
            o = '<tr id="' + t + '" style="background-color: #F1F1F1;">',
            e = 1; e <= s; e++)
                o += e == 1 ? "<td index=" + e + "><b>" + n + "</b></td>" : "<td index=" + e + "><b></b></td>";
            o = o + "<\\tr>",
            $(".doTotalTbl tr").last().after(o)
        }
        var c = 0
          , l = !1
          , a = !1;
        $.ajax({
            url: f + "?fiscalPeriodType=" + r + "&sectorID=" + u,
            type: "POST",
            data: JSON.stringify(i),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            beforeSend: function() {}
        }).done(function(n) {
            $.each(n, function(n, i) {
                var r = i.TotalAvgValue
                  , u = !1;
                i.TotalAvgValue != "-" && (i.Index.indexOf("%") > -1 && (u = !0),
                i.TotalAvgValue.indexOf("(") > -1 ? (u && (r = i.TotalAvgValue.replace(")", " %)")),
                r = "<span class='red'>" + r + "</span>") : u && (r = i.TotalAvgValue + " %")),
                $("#" + t + " td[index=" + i.Index + "] b").html(r)
            })
        }).fail(function(n, t, i) {
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        }).always(function() {})
    }
}
function LatestUpdateDateForStockPrice(n, t) {
    if (n.length == 0) {
        console.log("No Companies in list to be Total...");
        return
    }
    $.ajax({
        type: "POST",
        url: t,
        data: {
            compIds: n
        },
        async: !1
    }).done(function(n) {
        $("#latestUpdDate").html(n)
    }).fail(function(n) {
        n.readyState != 0 && alert("error occurred")
    })
}
function GetBusinessSegmentSection(n) {
    $.ajax({
        type: "GET",
        url: n
    }).done(function(n) {
        $("#businessSegmentSection").html(n)
    })
}
function SwitchBusinessSegmentSection(n, t) {
    $(".bgsTab").removeClass("active"),
    $(".bgsData").css("display", "none"),
    $("#" + n).addClass("active"),
    $("#" + t).css("display", "block")
}
function GetOrganizationStructureSection(n) {
    $.ajax({
        type: "GET",
        url: n
    }).done(function(n) {
        $("#organizationStructureSection").html(n)
    })
}
function SwitchAEDSection(n, t, i) {
    $("[relf-section='aed_tab_data']").css("display", "none"),
    $("[relf-section-tab='aed_tab']").removeClass("active"),
    $("[relf-aed-date]").css("display", "none"),
    $("#" + n).addClass("active"),
    $("#" + i).css("display", "block"),
    $("#" + t).css("display", "block")
}
function SwitchFundsSection(n, t, i, r) {
    var u = i.replace("Data", "")
      , f = "/" + n + "/Home/FundsSection?languageID=" + r + "&pageNo=1&actionType=" + u;
    $.trim($("#" + i).html()) || ($("#fundSectionLoading").css("display", "block"),
    $.ajax({
        type: "GET",
        url: f
    }).done(function(n) {
        $("#" + i).html(n)
    }).complete(function() {
        $("#fundSectionLoading").css("display", "none")
    })),
    $("[relf-section-tab='fundsTab']").removeClass("active"),
    $("[relf-section='fundsData']").css("display", "none"),
    $("#" + t).addClass("active"),
    $("#" + i).css("display", "block")
}
function SwitchCompanyMarketStatus(n, t, i, r, u, f, e) {
    i != null && i != "" && (selectedActionType = i),
    r != null && r != "" && (selectedActionDiv = r),
    f != null && f != "" && (SelectedForDate = f);
    var o = $("#GICSSectorEnum").val()
      , s = "/" + n + "/company/companymarketstats?marketID=" + t + "&count=" + u + "&pageNo=1&actionType=" + selectedActionType + "&forDate=&pageid=" + e + "&GICSSector=" + o;
    SelectedForDate != null && SelectedForDate != "" && (s = "/" + n + "/company/companymarketstats?marketID=" + t + "&count=" + u + "&pageNo=1&actionType=" + selectedActionType + "&forDate=" + SelectedForDate + "&pageid=" + e + "&GICSSector=" + o),
    $("#companyMarketStatsLoading").css("display", "block"),
    $.ajax({
        type: "GET",
        url: s,
        cache: !1
    }).done(function(n) {
        $("#" + selectedActionDiv).html(n)
    }).complete(function() {
        $("#companyMarketStatsLoading").css("display", "none"),
        $("[relf-section-tab='marketMovementTab']").removeClass("active"),
        $("[relf-section='marketMovementData']").css("display", "none"),
        $("#" + selectedActionType).addClass("active"),
        $("#" + selectedActionDiv).css("display", "block")
    }).fail(function(n, t) {
        $("[relf-section-tab='marketMovementTab']").removeClass("active"),
        $("[relf-section='marketMovementData']").css("display", "none"),
        $("#" + selectedActionType).addClass("active"),
        $("#" + selectedActionDiv).css("display", "block"),
        alert("Request failed: " + t)
    })
}
function SwitchCompanyMarketMoverStatusArchive(n, t, i, r, u, f) {
    (u == null || u == "") && (SelectedForDate = ""),
    SwitchCompanyMarketStatus(n, t, selectedActionType, selectedActionDiv, r, u, f),
    $("[relf-section-tab='marketMovementFooterTab']").removeClass("active"),
    $("#" + i).addClass("active")
}
function SwitchIPOSection(n, t) {
    $("[relf-ipo-tab='ipoTab']").removeClass("active"),
    $("[relf-ipo-data='ipoData']").css("display", "none"),
    $("#" + n).addClass("active"),
    $("#" + t).css("display", "block")
}
function SwitchAnalyst(n, t) {
    $("[relf-analyst-tab='analystTab']").removeClass("active"),
    $("[relf-analyst-data='analystData']").css("display", "none"),
    $("#" + n).addClass("active"),
    $("#" + t).css("display", "block")
}
function GetFinancialRatioDetails(n) {
    $.ajax({
        url: n,
        cache: !1,
        beforeSend: function() {
            $("#frLoadingDiv").css("display", "block")
        }
    }).done(function(n) {
        $(".content").html(n)
    }).fail(function(n, t, i) {
        $(dvLoadingName).hide(),
        n.readyState != 0 && alert("Try again later\r" + t + "\r" + i)
    }).always(function() {
        $("#frLoadingDiv").css("display", "none")
    })
}
function FinancialLoadingDivShow() {
    $("#frLoadingDiv").css("display", "block")
}
function FinancialLoadingDivHide() {
    $("#frLoadingDiv").css("display", "none")
}
function GetCompanyPeriodicAnalysis(n, t, i) {
    var r = n
      , u = "/4"
      , f = "fptype/3";
    r.indexOf(u) != -1 && t != 1 && i != 1 ? ($("#Interim").removeClass(),
    $("#Quarter").removeClass(),
    $("#slholdinterim").hide()) : t == 1 ? ($("#Interim").removeClass(),
    $("#Year").removeClass(),
    $("#slholdquarter").show()) : ($("#Year").removeClass(),
    $("#Quarter").removeClass(),
    $("#slholdinterim").show()),
    $.ajax({
        url: n,
        beforeSend: function() {
            $("#frLoadingDiv").css("display", "block")
        }
    }).done(function(n) {
        $("#companyResults").html(n)
    }).error(function(n, t, i) {
        n.readyState != 0 && alert("Try again later\r" + t + "\r" + i)
    }).always(function() {
        $("#frLoadingDiv").css("display", "none")
    })
}
function GetInvestorOpinion(n) {
    $.ajax({
        url: n,
        beforeSend: function() {
            $("#frLoadingDiv").css("display", "block")
        }
    }).done(function(n) {
        $("#companyResults").html(n)
    }).error(function(n, t, i) {
        n.readyState != 0 && alert("Try again later\r" + t + "\r" + i)
    }).always(function() {
        $("#frLoadingDiv").css("display", "none")
    })
}
function ChangeWatchListMenuTab(n) {
    var i = -1, h = $(n), f = $("#hdnSearchUrl").val(), t, u, e, s, r, o;
    f == "" && (f = document.URL),
    i = f.indexOf("?"),
    t = i > -1 ? f.substring(i) : "",
    u = t.indexOf("orderby="),
    t != "" && u > -1 && (e = "",
    s = t.indexOf("&", u),
    e = s > -1 ? t.substring(u, s + 1) : t.substring(u - 1),
    t = t.replace(e, "")),
    r = h.attr("relfTabUrl"),
    i = r.indexOf("?"),
    t == "" && i > -1 ? t = r.substring(i) : i > -1 && (t += "&" + r.substring(i + 1)),
    r = i > -1 ? r.substring(0, i) : r,
    o = r + t,
    $("#WatchListLoad").show(),
    $("#hdnSearchUrl").val(o),
    $.ajax({
        url: o,
        success: function(n) {
            $("#MenuTabData").html(n),
            $("#MenuTabData [relf-tid]").remove(),
            $("#WatchListLoad").hide(),
            $("#hdnSearchUrl").val(o)
        },
        error: function(n, t, i) {
            $("#WatchListLoad").hide(),
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        }
    })
}
function GetFinancialRatioSummary(n) {
    $.ajax({
        url: n,
        beforeSend: function() {
            $("#frLoadingDiv").css("display", "block")
        },
        success: function(n) {
            $(".content").html(n)
        },
        error: function(n, t, i) {
            n.readyState != 0 && alert("TRY again later\r" + t + "\r" + i)
        },
        complete: function() {
            $("#frLoadingDiv").css("display", "none")
        }
    })
}
function ChangCompAnalysisMenuTab(n) {
    var i = -1, h = $(n), f = $("#hdnSearchUrl").val(), t, u, e, s, r, o;
    f == "" && (f = document.URL),
    i = f.indexOf("?"),
    t = i > -1 ? f.substring(i) : "",
    u = t.indexOf("orderby="),
    t != "" && u > -1 && (e = "",
    s = t.indexOf("&", u),
    e = s > -1 ? t.substring(u, s + 1) : t.substring(u - 1),
    t = t.replace(e, "")),
    r = h.attr("relfTabUrl"),
    i = r.indexOf("?"),
    t == "" && i > -1 ? t = r.substring(i) : i > -1 && (t += "&" + r.substring(i + 1)),
    r = i > -1 ? r.substring(0, i) : r,
    o = r + t,
    $(".loading-div").show(),
    $("#hdnSearchUrl").val(o),
    $.ajax({
        url: o,
        success: function(n) {
            $("#MenuTabData").html(n),
            $(".loading-div").hide(),
            $("#hdnSearchUrl").val(o)
        },
        error: function(n, t, i) {
            $(".loading-div").hide(),
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        }
    })
}
function LoadAjaxSection(n, t, i) {
    setTimeout(function() {
        var r = $(t);
        $.ajax({
            url: n,
            async: !0,
            cache: !1,
            beforeSend: function() {
                r.find(".loading-div").css({
                    display: "block",
                    top: "auto"
                })
            },
            success: function(n) {
                r.html(n),
                $(n).find("a").length < 1 && i != undefined && $('[section="' + i + '"]').hide()
            },
            error: function(n, t, i) {
                n.readyState != 0 && console.log("TRY again later\r" + t + "\r" + i)
            },
            complete: function() {}
        })
    }, 500)
}
function GetFuturesData(n) {
    var t = "/" + n + "/getfuturesdata"
      , i = "#divFuturesData";
    return $.ajax({
        type: "GET",
        url: t,
        success: function(n) {
            var r, t, u, f;
            if ($("#feauterDataHolderDiv").remove(),
            $(i).empty().html(n),
            $("#hidShowFuturesDataSection").val() == "1") {
                for ($("#divFuturesDataHolder").show(),
                $("#divIndicatorsDataHolder").hide(),
                r = ["CMDT_7", "CMDT_12", "CMDT_33", "CMDT_34", "CMDT_35"],
                t = 0; t < r.length; ++t)
                    u = $("#old_change_" + r[t]).val(),
                    f = $(".change_" + r[t]).val(),
                    u != f && ($(".li_is_" + r[t] + "_data_change_positive").val() == "1" ? ($(".li_data_holder_change_" + r[t]).attr("class", "highlight-green"),
                    $(".li_data_holder_pchange_" + r[t]).attr("class", "highlight-green")) : ($(".li_data_holder_change_" + r[t]).attr("class", "highlight-red"),
                    $(".li_data_holder_pchange_" + r[t]).attr("class", "highlight-red")));
                setTimeout(function() {
                    for (t = 0; t < r.length; ++t) {
                        var n = $("#old_change_" + r[t]).val()
                          , i = $("#change_" + r[t]).val();
                        n != i && ($("#li_data_holder_change_" + r[t]).attr("class", "value"),
                        $("#li_data_holder_pchange_" + r[t]).attr("class", "change")),
                        $("#old_change_" + r[t]).val($("#change_" + r[t]).val())
                    }
                }, 2e3)
            }
            return !1
        },
        error: function(n) {
            n.readyState != 0
        },
        async: !1
    }),
    !1
}
function GetIndicatorsData(n) {
    var t = "/" + n + "/getindicatorsdata"
      , i = "#divIndicatorsData";
    return $.ajax({
        type: "GET",
        cache: !1,
        url: t,
        success: function(n) {
            var r, t, u, f;
            if ($("#indicatorsDiv").remove(),
            $(i).empty().html(n),
            $("#hidShowIndicatorsDataSection").val() == "1") {
                for ($("#divFuturesDataHolder").hide(),
                $("#divIndicatorsDataHolder").show(),
                r = ["CMDT_7", "CMDT_12", "IMS_1", "IMS_2", "IMS_3"],
                t = 0; t < r.length; ++t)
                    u = $("#old_change_" + r[t]).val(),
                    f = $(".change_" + r[t]).val(),
                    u != f && ($(".li_is_" + r[t] + "_data_change_positive").val() == "1" ? ($("#li_data_holder_change_" + r[t]).attr("class", "highlight-green"),
                    $("#li_data_holder_pchange_" + r[t]).attr("class", "highlight-green")) : ($("#li_data_holder_change_" + r[t]).attr("class", "highlight-red"),
                    $("#li_data_holder_pchange_" + r[t]).attr("class", "highlight-red")));
                setTimeout(function() {
                    for (t = 0; t < r.length; ++t) {
                        var n = $("#old_change_" + r[t]).val()
                          , i = $(".change_" + r[t]).val();
                        n != i && ($("#li_data_holder_change_" + r[t]).attr("class", "value"),
                        $("#li_data_holder_pchange_" + r[t]).attr("class", "change")),
                        $("#old_change_" + r[t]).val($(".change_" + r[t]).val())
                    }
                }, 2e3)
            }
            return !1
        },
        error: function(n) {
            n.readyState != 0
        },
        async: !1
    }),
    !1
}
function GetAllMarketStocksData(n) {
    var i = "/" + n + "/getallmarketstocksdata"
      , t = "#divAllMarketStocksData";
    return $.ajax({
        type: "GET",
        url: i,
        success: function(n) {
            var r, i, u, f;
            for ($(t).html(n),
            $(t).hide(),
            r = [1, 2, 3, 4, 5, 6, 7, 13],
            i = 0; i < r.length; ++i)
                u = $("#old_change_" + r[i]).val(),
                f = $("#change_" + r[i]).val(),
                u != f && ($("#li_data_holder_" + r[i]).attr("class", $("#li_data_holder_" + r[i] + "_new").attr("class")),
                $("#index_value_holder_" + r[i]).html($("#index_value_holder_" + r[i] + "_new").html()),
                $("#li_data_holder_change_" + r[i]).html($("#li_data_holder_change_" + r[i] + "_new").html()),
                $("#li_data_holder_pchange_" + r[i]).html($("#li_data_holder_pchange_" + r[i] + "_new").html()),
                $("#li_is_" + r[i] + "_data_change_positive").val() == "1" ? ($("#li_data_holder_change_" + r[i]).attr("class", "highlight-green"),
                $("#li_data_holder_pchange_" + r[i]).attr("class", "highlight-green")) : ($("#li_data_holder_change_" + r[i]).attr("class", "highlight-red"),
                $("#li_data_holder_pchange_" + r[i]).attr("class", "highlight-red")));
            return setTimeout(function() {
                for (i = 0; i < r.length; ++i) {
                    var n = $("#old_change_" + r[i]).val()
                      , t = $("#change_" + r[i]).val();
                    n != t && ($("#li_data_holder_change_" + r[i]).attr("class", ""),
                    $("#li_data_holder_pchange_" + r[i]).attr("class", "")),
                    $("#old_change_" + r[i]).val($("#change_" + r[i]).val())
                }
            }, 2e3),
            !1
        },
        error: function(n) {
            n.readyState != 0
        },
        async: !1
    }),
    !1
}
function AttachEventsWithMarketDropdown() {
    $("#mktDDList").mouseenter(function() {
        $(this).find(".dd-options").slideDown("fast")
    }).mouseleave(function() {
        $(this).find(".dd-options").slideUp("fast")
    });
    var n = $("#mktDDList .dd-select .dd-selected");
    $("#mktDDList .dd-options a").click(function(t) {
        t.preventDefault();
        var i = $(this);
        i.parents(".dd-options").slideUp("fast", function() {
            n.html(i.html()),
            document.location.href = i.attr("href")
        })
    })
}
function AutoRefreshPage(n, t) {
    autoRefresher = setTimeout(function() {
        window.location = n
    }, t)
}
function StopAutoRefresher() {
    clearTimeout(autoRefresher)
}
function HideResetTagsButtonForMob(n) {
    var t = $("#resetTagsButton");
    t != undefined && t.css("display", n)
}
function HideDiv(n) {
    $(n).hide()
}
function ShowDiv(n) {
    $(n).show()
}
function Search4ExclusiveInterviews(n) {
    var o, t;
    n == undefined && (n = 1);
    var u = $("#txtSearch").val()
      , i = $("#hdnSearchElems").val()
      , r = $("#ddlSectors").val() == null ? "" : $("#ddlSectors").val()
      , f = $("#txtToDate").val()
      , e = $("#txtFromDate").val();
    (u != "" || i != "" || r != 0 || f != "" || e != "" || n != undefined) && (i != "" && (r = ""),
    o = "ts=" + u + "&asid=" + i + "&sid=" + r + "&fromdate=" + e + "&todate=" + f,
    t = "",
    t = $("#hdnCurrURL").val(),
    t += "/" + n + "?" + o,
    $("#loadingExclusiveInterviews").css("display", "block"),
    $.ajax({
        type: "GET",
        url: t
    }).done(function(n) {
        $("#ExclusiveInterviewsSection").html(n),
        $("#loadingExclusiveInterviews").css("display", "none")
    }))
}
function ScrollQuarterlyData(n, t) {
    FinancialLoadingDivShow(),
    $.ajax({
        type: "GET",
        url: n,
        success: function(n) {
            var i = $(t);
            i.html(n),
            FinancialLoadingDivHide()
        },
        error: function(n, t, i) {
            n.readyState != 0 && (console.log("ScrollQuarterlyData error: " + i),
            console.log("ScrollQuarterlyData error: " + t)),
            FinancialLoadingDivHide()
        }
    })
}
function RemoveEmptyTags(n) {
    try {
        return $.trim(n.replace(/<[^\/>][^>]*>\s<\/[^>]+>/gim, ""))
    } catch (t) {
        return n
    }
}
function closeUserRankInfoPopup(n) {
    $(n).parents(".congrats-rank").removeClass("open")
}
function TriggerEventTreeDropDown(n) {
    var r = $(n)
      , i = r.parents("li:first")
      , t = i.parents(".dev-ctree-dropdown");
    t.find("li").removeClass("active"),
    i.addClass("active"),
    i.hasClass("dev-parent") ? (t.find("input[data-itype='parent']").val(i.data("value")),
    t.find("input[data-itype='child']").val("")) : (t.find("input[data-itype='child']").val(i.data("value")),
    t.find("input[data-itype='parent']").val("")),
    t.find("input[type='text']").val($.trim(r.text()))
}
function ExpandAndCollapseChildsTreeDropdown(n) {
    var t = $(n).parents("li:first");
    t.hasClass("collapsed") ? t.removeClass("collapsed").addClass("expanded") : t.removeClass("expanded").addClass("collapsed")
}
function ClearSearchTreeDropDown(n) {
    var i = $(n)
      , t = i.parents(".dev-ctree-dropdown");
    ClearTreeDropDown(t.attr("id")),
    t.find("input[type='text']").val("").trigger("focus")
}
function ClearTreeDropDown(n) {
    var t = $("#" + n);
    t.find("li").removeClass("active"),
    t.find(".selected-item").removeClass("searching").addClass("search"),
    t.find(".options").css("display", ""),
    t.find(".dev-child").show(),
    t.find(".dev-parent").removeClass("expanded").addClass("collapsed").show(),
    t.find("input").val("")
}
function ClearCustomDropDown(n) {
    var t = $("#" + n);
    t.find("li").removeClass("active"),
    t.find("input").val("")
}
function BindCustomTreeDropDown() {
    $(".dev-ctree-dropdown input").on("focus keyup input", function() {
        var t = $(this), n = $(this).parents(".dev-ctree-dropdown"), i;
        t.val().length > 0 ? (n.find(".dev-parent").removeClass("collapsed").addClass("expanded"),
        i = n.find("li").hide().filter(function() {
            return $(this).text().toLowerCase().indexOf(t.val().toLowerCase()) != -1
        }),
        i.length > 0 ? (i.show(),
        n.find(".options").css("display", "")) : n.find(".options").css("display", "none"),
        t.parent().removeClass("load").addClass("searching")) : (n.find(".dev-child").show(),
        n.find(".dev-parent").removeClass("expanded").addClass("collapsed").show(),
        t.parent().removeClass("load").removeClass("searching").css("dispaly", ""),
        n.find("input[data-itype='parent']").val(""),
        n.find("input[data-itype='child']").val(""))
    });
    $(".dev-ctree-dropdown input").focusin(function() {
        var n = $(this).parent().next();
        n.val() == "",
        n.length > 0 && !n.hasClass("showDiv") && n.addClass("showDiv")
    }).focusout(function() {
        $(this).parent().next().removeClass("showDiv")
    })
}
function BindCustomDropDown() {
    $(".dev-cdropdown").each(function() {
        var n = $(this);
        n.find("li").on("click", function() {
            n.find("li").removeClass("active"),
            $(this).addClass("active"),
            n.find("input[type='text']").val($(this).text()),
            n.find("input[type='hidden']").val($(this).data("value")),
            $(this).parents("ul").hide().delay(1e3).removeAttr("style")
        })
    })
}
function GetEnFormatedDate(n, t) {
    return n.clone().locale("en").format(t)
}
function CompanyMarketStatsMobileTab(n, t, i) {
    try {
        $("[id*='company_market_stats_" + i + "_market_id']").click(function(r, u) {
            var e;
            $("#companyMarketStatsLoading_" + i).show();
            var f = $(this).attr("relmarkettab")
              , o = $("#GICSSectorEnum").val()
              , s = $("#company_market_stats_" + i + "_parallelmarket-Tabs").find("li a.active").attr("data-marketid");
            $(this).closest("ul").find(".active").removeClass("active"),
            $(this).addClass("active"),
            CompanyMarketStatsData(n, t, i, f, s, o),
            e = "company_market_stats_" + i + "_market_id_" + f,
            GeneralClick(f, e, u)
        })
    } catch (u) {}
}
function CompanyMarketStatsData(n, t, i, r, u, f) {
    try {
        var e = $("#companyMarketStatsSectionURL_" + i).val().replace("marketID=" + u, "marketID=" + r) + "&GICSSector=" + f;
        setTimeout(function() {
            $.ajax({
                type: "GET",
                url: e,
                cache: !1
            }).done(function(n) {
                $("#companyMarketStatsSection_" + i).html(n),
                $("#companyMarketStatsLoading_" + i).hide()
            })
        }, 200)
    } catch (o) {}
}
function CompanyMarketStatsTab() {
    try {
        $("[id*='company_market_stats_market_id']").click(function(n, t) {
            var r, u;
            $("[relf-section='marketMovementData']").empty(),
            $("#companyMarketStatsLoading").show();
            var i = $(this).attr("relmarkettab")
              , f = $("#GICSSectorEnum").val()
              , e = $("#company_market_stats_parallelmarket-Tabs").find("li a.active").attr("data-marketid");
            $(this).closest("ul").find(".active").removeClass("active"),
            $(this).addClass("active"),
            r = $("#companyMarketStatsSectionURL").val().replace("marketID=" + e, "marketID=" + i),
            clearTimeout(cms_Timeout),
            cms_Timeout = setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: r + "&isTasiNomu=true&GICSSector=" + f,
                    async: !0
                }).done(function(n) {
                    SelectedForDate = "",
                    $("#companyMarketStatsSection").html(n),
                    $("#companyMarketStatsLoading").hide(),
                    i == 3 ? $("#investors-opinion-sml-wdgt").show() : $("#investors-opinion-sml-wdgt").hide()
                })
            }, 200),
            u = "company_market_stats_market_id_" + i,
            GeneralClick(i, u, t)
        })
    } catch (n) {}
}
function MarketAnalyticsTab() {
    try {
        $("[id*='market_data_market_id']").click(function(n, t) {
            var i, r, u, f;
            $("#marketAnalyticsLoading").show(),
            i = $(this).attr("relmarkettab"),
            r = $("#market_data_parallelmarket-Tabs").find("li a.active").attr("data-marketid"),
            $(this).closest("ul").find(".active").removeClass("active"),
            $(this).addClass("active"),
            u = $("#marketAnalyticsSectionURL").val().replace("/" + r, "/" + i),
            clearTimeout(ma_Timeout),
            ma_Timeout = setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: u,
                    async: !0
                }).done(function(n) {
                    $("#marketAnalyticsSection").html(n),
                    $("#marketAnalyticsLoading").hide(),
                    i == 17 && $(".row-more").hide()
                })
            }, 200),
            f = "market_data_market_id_" + i,
            GeneralClick(i, f, t)
        })
    } catch (n) {}
}
function PollHomeWidgetTab() {
    try {
        $("[id*='poll_market_id']").click(function(n, t) {
            var i, r, u, f;
            $("#pollHomeWidgetLoading").show(),
            i = $(this).attr("relmarkettab"),
            r = $("#poll_parallelmarket-Tabs").find("li a.active").attr("data-marketid"),
            $(this).closest("ul").find(".active").removeClass("active"),
            $(this).addClass("active"),
            u = $("#pollHomeWidgetSectionURL").val().replace("/" + r, "/" + i),
            clearTimeout(poll_Timeout),
            poll_Timeout = setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: u,
                    async: !0
                }).done(function(n) {
                    $("#pollHomeWidgetSection").html(n),
                    $("#pollHomeWidgetLoading").hide()
                })
            }, 200),
            f = "poll_market_id_" + i,
            GeneralClick(i, f, t)
        })
    } catch (n) {}
}
function MarketChartsTab() {
    $("[id^='saudi_chart_market_id']").each(function(n, t) {
        $(t).attr("has-click-event", $(t).text())
    }),
    $("[id^='saudi_chart_market_id']").click(function(n, t) {
        var i, r, u, f;
        try {
            marketID = $(this).attr("relmarkettab"),
            $("[id^='saudi_market_id_holder']").css("display", "none"),
            $("[id^='saudi_market_id_holder_" + marketID + "']").css("display", "block"),
            $("[class='market-chart-wrapper'][chart-id]").css("display", "none"),
            $("[class='market-chart-wrapper'][chart-id='chartDiv'" + marketID + "]").css("display", "block"),
            $("[id^='saudi_chart_market_id']").removeClass("active"),
            $("[id^='saudi_chart_market_id_" + marketID + "']").addClass("active"),
            i = $("#SaudiMarketHeading").val() + " ( " + $("[id^='saudi_chart_market_id'].active").attr("relmarketname") + " )",
            $("#saudi_index_heading").html(i),
            r = $("#tasiTradingDate").val(),
            u = $("#nomuTradingDate").val(),
            marketID == 3 ? $("#saudi_trading_date").html(r) : $("#saudi_trading_date").html(u),
            f = "saudi_chart_market_id_" + marketID,
            GeneralClick(marketID, f, t)
        } catch (e) {}
    })
}
function MarketIndicatorsTab() {
    try {
        $("[id*='market_indicator_market_id']").click(function(n, t) {
            var r;
            $("#marketIndicatorLoading").show();
            var u = "marketid-" + $("[id*='market_indicator_market_id'].active").attr("data-marketid")
              , i = $(this).attr("relmarkettab")
              , f = $("#marketIndicatorSectionURL").val().replace(u, i);
            clearTimeout(mi_Timeout),
            mi_Timeout = setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: f,
                    async: !0
                }).done(function(n) {
                    $("#marketIndicatorSection").html(n),
                    $("[id^='market_indicator_market_id']").removeClass("active"),
                    $("[id^='market_indicator_market_id_" + i + "']").addClass("active"),
                    $("#marketIndicatorLoading").hide()
                })
            }, 200),
            r = "market_indicator_market_" + i,
            GeneralClick(i, r, t)
        })
    } catch (n) {}
}
function GeneralClick(n, t, i) {
    i == undefined && $("[relenable='yes']").length > 0 && $("[relenable='yes'][relmarkettab='" + n + "'][id!='" + t + "']").each(function() {
        try {
            $(this).trigger("click", {
                callback: !1
            })
        } catch (n) {}
    })
}
function CompanyFinancialResultsTab() {
    try {
        $("[id*='financial_reports_market_id']").click(function(n, t) {
            var i, r, u, f;
            $("#financialReportsSectionLoading").show(),
            i = $(this).attr("relmarkettab"),
            r = $("#financial_reports_parallelmarket-Tabs").find("li a.active").attr("data-marketid"),
            $(this).closest("ul").find(".active").removeClass("active"),
            $(this).addClass("active"),
            u = $("#financialReportsURL").val().replace("/" + r, "/" + i),
            clearTimeout(fr_Timeout),
            fr_Timeout = setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: u,
                    async: !0
                }).done(function(n) {
                    $("#financialReportsSection").html(n),
                    $("#financialReportsSectionLoading").hide()
                })
            }, 200),
            f = "financial_reports_market_id_" + i,
            GeneralClick(i, f, t)
        })
    } catch (n) {}
}
function AnalystOpinionTab() {
    try {
        $("[id*='analyst_opinion_market_id']").click(function(n, t) {
            var i, r, u, f;
            $("#latestAnalystOpinionLoading").show(),
            i = $(this).attr("relmarkettab"),
            r = $("#analyst_opinion_parallelmarket-Tabs").find("li a.active").attr("data-marketid"),
            $(this).closest("ul").find(".active").removeClass("active"),
            $(this).addClass("active"),
            u = $("#latestAnalystOpinionSectionURL").val().replace("marketID=" + r, "marketID=" + i),
            clearTimeout(ao_Timeout),
            ao_Timeout = setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: u,
                    async: !0
                }).done(function(n) {
                    $("#latestAnalystOpinionSection").html(n),
                    $("#latestAnalystOpinionLoading").hide()
                })
            }, 200),
            f = "analyst_opinion_market_id_" + i,
            GeneralClick(i, f, t)
        })
    } catch (n) {}
}
function FinancialUpdatesTab() {
    try {
        $("[id*='financial_update_market_id']").click(function(n, t) {
            var i, r, u, f;
            $("#financialupdateLoading").show(),
            i = $(this).attr("relmarkettab"),
            r = $("#financial_update_parallelmarket-Tabs").find("li a.active").attr("data-marketid"),
            $(this).closest("ul").find(".active").removeClass("active"),
            $(this).addClass("active"),
            u = $("#financialUpdateSectionURL").val().replace("marketID=" + r, "marketID=" + i),
            clearTimeout(fu_Timeout),
            fu_Timeout = setTimeout(function() {
                $.ajax({
                    type: "GET",
                    url: u,
                    async: !0
                }).done(function(n) {
                    $("#financialUpdateSection").html(n),
                    $("#financialupdateLoading").hide()
                })
            }, 200),
            f = "financial_update_market_id_" + i,
            GeneralClick(i, f, t)
        })
    } catch (n) {}
}
function RatiosSummaryWidget() {
    try {
        $("[id*='ratios_summary_widget_market_id']").click(function(n, t) {
            var i = $(this).attr("relmarkettab"), r;
            $(this).closest("ul").find(".active").removeClass("active"),
            $(this).addClass("active"),
            $("#dvWidgetResultSet-tab").find("a.active").click(),
            r = "ratios_summary_widget_market_id_" + i,
            GeneralClick(i, r, t)
        })
    } catch (n) {}
}
function RefreshSectorPieChart(n, t) {
    var u = $("#ddlYear").val()
      , r = $("#ddlInterim").val()
      , i = t + "/" + u;
    return n.id == "ddlYear" ? r = "" : i = i + "/" + r,
    $.ajax({
        url: i,
        beforeSend: function() {
            $("#sectorPieChartContainerloader").show()
        },
        success: function(n) {
            $("#sectorPieChartContainer").replaceWith(n)
        },
        error: function(n, t, i) {
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        },
        complete: function() {}
    }),
    !1
}
function getAmChart(n) {
    for (var i = AmCharts.charts, t = 0; t < i.length; t++)
        if (i[t] != undefined && i[t].div != undefined && n == i[t].div.id)
            return i[t]
}
function RenderPieChartForBrokerOpinion(n, t) {
    if (n != []) {
        var i = getAmChart("sectorPieChart");
        i != undefined && (i.clear(),
        i.validateNow(),
        i.events = null),
        i = AmCharts.makeChart("sectorPieChart", {
            type: "pie",
            angle: t ? 0 : 30,
            theme: "light",
            balloonText: "[[SectorName]]: <b>[[percents]]%</b>",
            depth3D: t ? 0 : 10,
            labelsEnabled: !0,
            labelText: "[[SectorName]]",
            radius: t ? 0 : 90,
            labelRadius: t ? 5 : 25,
            autoTransform: !1,
            outlineAlpha: .8,
            outlineThickness: 2,
            outlineColor: "#FFFFFF",
            fontSize: 12,
            titleField: "SectorName",
            valueField: "Rank",
            legend: {
                enabled: !0,
                align: "center",
                markerType: "circle"
            },
            colors: ["#96BB56", "#54CEC5", "#EFA764", "#AC65B6", "#99A452", "#B5B3B3", "#71744C", "#C6DDD1", "#26A64C", "#B8CE58", "#B3E90A", "#CC6602", "#54EDFE", "#FFAD88", "#82A3CC"],
            dataProvider: n
        }),
        i.addListener("rendered", function() {
            $("#sectorPieChartContainerloader").hide()
        })
    } else
        $("#sectorPieChartContainerloader").hide()
}
function BrokerOpinionBalloonFunctionForLineChart(n) {
    var i = dateLabel + " : <b>" + n.dataContext.OpinionDate + "</b><br>";
    return i += opinionPriceLabel + " : <b>" + n.dataContext.OpinionPrice + "</b><br>",
    i += currentPriceLabel + " : <b>" + n.dataContext.CurrentPrice + "</b><br>",
    i += opinionTypeLabel + " : <b>" + n.dataContext.OpinionType + "</b><br>",
    i += lang == "en" ? changeLabel + " : <b class='" + GetColorClassForNumbers(n.dataContext.Change) + "'>" + n.dataContext.ChangePercentage + "</b>" : "<b class='" + GetColorClassForNumbers(n.dataContext.Change) + "'>" + n.dataContext.ChangePercentage + "</b> : " + changeLabel
}
function RenderLineChartForBrokerOpinion(n, t, i, r, u, f, e, o, s, h, c) {
    var y = o + "/" + u + "/" + r + "/" + i + "?fromDate=" + (f == undefined ? "" : f) + "&toDate=" + (e == undefined ? "" : e);
    $.ajax({
        cache: !1,
        async: !0,
        url: y,
        beforeSend: function() {
            $("#brokerOpinionLineChartContainerloader").show()
        },
        success: function(n) {
            var i = getAmChart("lineChartBrokerOpinions");
            i != undefined && (i.clear(),
            i.validateNow(),
            i.events = null),
            i = AmCharts.makeChart("lineChartBrokerOpinions", {
                type: "serial",
                categoryField: "OpinionDate",
                categoryAxis: {
                    autoGridCount: !1,
                    labelRotation: 45,
                    gridCount: t ? 4 : 6
                },
                listeners: [{
                    event: "rendered",
                    method: function() {
                        $("#brokerOpinionLineChartContainerloader").hide(),
                        setTimeout(function() {
                            $("#brokerOpinionLineChartContainerloader").hide()
                        }, 5e3)
                    }
                }],
                graphs: [{
                    id: "g1",
                    bullet: "round",
                    type: "smoothedLine",
                    valueField: "OpinionPrice",
                    fontSize: t ? 8 : 11,
                    title: c,
                    labelText: "[[value]]",
                    balloonFunction: BrokerOpinionBalloonFunctionForLineChart
                }, {
                    id: "g2",
                    bullet: "round",
                    type: "smoothedLine",
                    valueField: "CurrentPrice",
                    fontSize: t ? 8 : 11,
                    title: h,
                    labelText: "[[value]]",
                    balloonFunction: BrokerOpinionBalloonFunctionForLineChart
                }],
                valueAxes: [{
                    axisAlpha: .1,
                    gridAlpha: .1,
                    minVerticalGap: 50
                }],
                balloon: {
                    adjustBorderColor: !0,
                    color: "#000000",
                    cornerRadius: 5,
                    fillColor: "#FFFFFF"
                },
                legend: {
                    enabled: !0,
                    useGraphSettings: !0
                },
                dataProvider: n
            }),
            i.addListener("rendered", function() {
                $("#brokerOpinionLineChartContainerloader").hide()
            }),
            AmCharts.checkEmptyData = function(n) {
                if (0 == n.dataProvider.length) {
                    n.valueAxes[0].minimum = 0,
                    n.valueAxes[0].maximum = 100;
                    var t = {
                        dummyValue: 0
                    };
                    t[n.categoryField] = "",
                    n.dataProvider = [t],
                    n.addLabel(0, "50%", s, "center"),
                    n.chartDiv.style.opacity = .5,
                    n.validateNow(),
                    $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaam.com").html("").css("top", "0px")
                }
            }
            ,
            AmCharts.checkEmptyData(i)
        },
        error: function(n, t, i) {
            n.readyState != 0 && (console.log("try again later\r" + t + "\r" + i),
            $("#brokerOpinionLineChartContainerloader").hide())
        },
        complete: function() {}
    })
}
function GetColorClassForNumbers(n) {
    return n < 0 ? "red" : n > 0 ? "green" : "none"
}
function BindCustomSearchingDropDown() {
    $(".dev-custom-searching-ddl input").on("keyup input", function() {
        var t = $(this), n = $(this).parents(".dev-custom-searching-ddl"), i, r;
        t.val().length > 0 ? (i = n.find("li").hide().filter(function() {
            return $(this).text().toLowerCase().indexOf(t.val().toLowerCase()) != -1
        }),
        i.length > 0 ? (i.show(),
        n.find(".options").css("display", "")) : n.find(".options").css("display", "none"),
        r = t.parent(),
        r.removeClass("load"),
        n.data("isrequired") == "0" && r.addClass("searching")) : (n.find("li").css("display", ""),
        t.parent().removeClass("load").removeClass("searching").css("dispaly", ""),
        n.data("isrequired") == "0" && n.find("input[data-itype='item']").val(""))
    });
    $(".dev-custom-searching-ddl input").focusin(function() {
        var n = $(this).parent().next();
        $(this).val() == "",
        n.length > 0 && !n.hasClass("showDiv") && n.addClass("showDiv")
    }).focusout(function() {
        if ($(this).val() == "") {
            var t = $(this).parents(".dev-custom-searching-ddl")
              , n = t.attr("id");
            CustomSearchingDropDownSelectValue(CustomSearchingDropDownGetSelectedValue(n), n)
        }
        $(this).parent().next().removeClass("showDiv")
    })
}
function CustomSearchingDropDownSelectValue(n, t) {
    $("#" + t).find("li[data-value='" + n + "']").trigger("click")
}
function CustomSearchingDropDownGetSelectedValue(n) {
    return $("#" + n).find("input[data-itype='item']").val()
}
function FillCustomSearchingDropDownWithData(n, t) {
    var r = $("#" + t).find("ul"), i;
    r.html("");
    for (i in n)
        r.append("<li onclick=TriggerEventSearchingDropDown(this) data-value='" + n[i].value + "'>" + n[i].label + "</li>")
}
function TriggerEventSearchingDropDown(n) {
    var t = $(n)
      , i = t.parents(".dev-custom-searching-ddl");
    i.find("li").removeClass("active"),
    i.find("li").css("display", ""),
    t.addClass("active"),
    i.find("input[data-itype='item']").val(t.data("value")),
    i.find("input[type='text']").val($.trim(t.text()))
}
function LoadBrokerCompaniesAnalystEstimatesAjax(n) {
    $.ajax({
        url: n,
        cache: !1,
        async: !0,
        beforeSend: function() {
            $("#BrokerCompaniesAnalystEstimatesContainerloader").show()
        },
        success: function(n) {
            n.length > 0 && $("#BrokerCompaniesAnalystEstimatesContainer").html(n)
        },
        error: function(n, t, i) {
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        },
        complete: function() {
            $("#BrokerCompaniesAnalystEstimatesContainerloader").hide()
        }
    })
}
function LoadBrokerCompaniesAnalystEstimatesAjaxHierarchical(n) {
    $.ajax({
        url: n,
        cache: !1,
        async: !0,
        beforeSend: function() {
            $("#BrokerCompaniesAnalystEstimatesHierarchicalContainerloader").show()
        },
        success: function(n) {
            n.length > 0 && $("#BrokerCompaniesAnalystEstimatesHierarchicalContainer").html(n)
        },
        error: function(n, t, i) {
            n.readyState != 0 && alert("try again later\r" + t + "\r" + i)
        },
        complete: function() {
            $("#BrokerCompaniesAnalystEstimatesHierarchicalContainerloader").hide()
        }
    })
}
function RenderBrokerCompaniesAnalystEstimatesChart(n, t, i) {
    var r = $.ajax({
        url: n,
        type: "GET",
        beforeSend: function() {}
    }).done(function(n) {
        var r = getAmChart("brokerCompaniesAnalystEstimatesChart");
        r != undefined && (r.clear(),
        r.validateNow(),
        r.events = null),
        r = AmCharts.makeChart("brokerCompaniesAnalystEstimatesChart", {
            type: "serial",
            dataProvider: n,
            valueAxes: [{
                position: "right"
            }],
            graphs: [{
                id: "g1",
                balloonText: "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                bullet: "round",
                bulletSize: 8,
                lineColor: "gray",
                lineThickness: 2,
                negativeLineColor: "gray",
                type: "smoothedLine",
                valueField: "ActualValue",
                title: t
            }, {
                id: "g2",
                balloonText: "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                bullet: "round",
                bulletSize: 8,
                lineColor: "orange",
                lineThickness: 2,
                negativeLineColor: "orange",
                type: "smoothedLine",
                valueField: "EstimatedValue",
                title: i
            }],
            chartCursor: {
                categoryBalloonDateFormat: "DD-MM-YYYY",
                cursorAlpha: 0,
                valueLineEnabled: !0,
                valueLineBalloonEnabled: !0,
                valueLineAlpha: .5,
                fullWidth: !0,
                categoryBalloonColor: "#E2EEF6",
                color: "#000"
            },
            categoryField: "Period",
            categoryAxis: {
                parseDates: !1,
                showLastLabel: !0,
                showFirstLabel: !0,
                equalSpacing: !0,
                gridPosition: "start",
                axisColor: "#fff"
            },
            legend: {
                position: "bottom",
                equalWidths: !1,
                useGraphSettings: !0,
                valueAlign: "left",
                valueWidth: 120
            }
        }),
        r.addListener("rendered", function() {
            $("#BrokerCompaniesAnalystEstimatesChartloader").hide()
        })
    })
}
function BindToolTip(n) {
    $("div#tooltip").remove(),
    layoutWidth == 0 && (layoutWidth = $(".argaam-wrapper").width()),
    $("body").append('<div class="tooltip-font" id="tooltip" style="display:none"></div>'),
    $("[" + n + "]").live({
        mouseenter: function() {
            var i = $(this).attr(n), t;
            i.length != 0 && (t = $("div#tooltip"),
            t.css("width", "auto"),
            t.html(i),
            t.show())
        },
        mouseleave: function() {
            $("div#tooltip").hide()
        }
    }),
    $("[" + n + "]").live("mousemove", function(n) {
        windowWidth = $(window).width() - 300;
        var t = n.pageX
          , i = $("div#tooltip")
          , r = i.width() / 2;
        i.css("top", n.pageY + 10).css("left", t + r > layoutWidth ? windowWidth > layoutWidth ? t + 10 : layoutWidth - r + 10 : t + 10)
    })
}
function LoadTabs(n, t) {
    var f = $(n).parents("ul:first"), i, r, u, e;
    f.find("a").removeClass("active"),
    $(n).addClass("active"),
    $("#widgetLoader").show(),
    t.indexOf("marketid-") >= 0 && (i = $("[id*='ratios_summary_widget_market_id'].active").attr("data-marketid"),
    r = "marketid-" + $("#widget-defaulmarket").val(),
    t = t.replace(r, i)),
    u = "#dvWidgetResultSet",
    e = $.ajax({
        type: "GET",
        url: t,
        cache: !1,
        async: !0
    }).done(function(n) {
        $(u).html("").append(n),
        $("#widgetLoader").hide()
    }).error(function() {})
}
function changeCurrency(n) {
    return n == "usd" ? ($("#usd").addClass("active"),
    $("#sar").removeClass("active"),
    $(".cur").each(function() {
        var n = $(this).attr("relf-usd-value");
        $(this).html(n)
    })) : ($("#sar").addClass("active"),
    $("#usd").removeClass("active"),
    $(".cur").each(function() {
        var n = $(this).attr("relf-sar-value");
        $(this).html(n)
    })),
    !1
}
function CloseLoginPopup() {
    $("#panel").hide(),
    $("#panelForgotPassword").hide(),
    $("#status").html(""),
    $("#status").addClass("n-display"),
    $("#status").removeClass("msg-red"),
    $("#UserName").val(""),
    $("#pass").val(""),
    validatorLogin.resetForm(),
    $("#IsMobileRequest").val() == "True" ? ($("body").css("position", ""),
    $("#loginContainer").hide(),
    $("#status").html(""),
    $("#status").hide()) : $("#support_contact").hasClass("active") && $("#supportspopupMain").show()
}
function LoginSubmit() {
    var r = CryptoJS.enc.Utf8.parse($("#passKey").val()), u = CryptoJS.enc.Utf8.parse($("#passSalt").val()), i = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse($("#pass").val()), r, {
        keySize: 16,
        iv: u,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }), f, n, t;
    if ($("#IsMobileRequest").val() == "True")
        return n = "",
        n = $("#remember").attr("checked") ? "on" : "off",
        $("#loginform").valid() ? (t = $('input[name="__RequestVerificationToken"]').attr("value"),
        f = $.ajax({
            type: "POST",
            url: $("#LoginJSONURL").val(),
            data: {
                __RequestVerificationToken: t,
                EmailAddress: $("#UserName").val().trim(),
                Password: i.toString(),
                RememberMe: n
            }
        }).done(function(n) {
            n == $("#User_LoginInvalidEmailPasswordText").val() ? ($("#status").show(),
            $("#status").html(n),
            $("#status").addClass("msg-red"),
            $("#status").removeClass("n-display")) : n.indexOf("Error-") == 0 ? ($("#status").html(n.replace("Error-", "")),
            $("#status").addClass("msg-red"),
            $("#status").removeClass("n-display"),
            $("#status").show()) : document.location.href = document.URL.indexOf("subscriptionrequest") != -1 ? document.location.origin + "/" + $("#cLanguageID").val() : document.URL
        }).fail(function() {
            $("#status").html($("#User_LoginInvalidEmailPasswordText").val()),
            $("#status").addClass("msg-red"),
            $("#status").removeClass("n-display"),
            $("#status").show()
        }).always(function() {}),
        !1) : !1;
    if (n = "",
    n = $("#remember").attr("checked") ? "on" : "off",
    $("#loginform").valid())
        t = $('input[name="__RequestVerificationToken"]').attr("value"),
        $.ajax({
            type: "POST",
            async: !1,
            url: $("#LoginJSONURL").val(),
            data: {
                __RequestVerificationToken: t,
                EmailAddress: $("#UserName").val().trim(),
                Password: i.toString(),
                RememberMe: n
            },
            beforeSend: function() {}
        }).done(function(n) {
            $("#status").hide(),
            n == $("#User_LoginInvalidEmailPasswordText").val() ? setTimeout(function() {
                $("#status").html(n),
                $("#status").addClass("msg-red"),
                $("#status").removeClass("n-display"),
                $("#status").show()
            }, 200) : n.indexOf("Error-") == 0 ? setTimeout(function() {
                $("#status").html(n.replace("Error-", "")),
                $("#status").addClass("msg-red"),
                $("#status").removeClass("n-display"),
                $("#status").show()
            }, 200) : document.URL.indexOf("subscriptionrequest") != -1 ? document.location.href = document.location.origin + "/" + $("#cLanguageID").val() : document.URL.indexOf("article/articledetail/id") != -1 ? (document.location.href = document.location.origin + document.location.pathname + "#articlecommentsection",
            location.reload()) : document.location.href = $("#hidIsHomePage").val() == "1" ? n : document.URL.indexOf("subscription-free-trial") != -1 ? document.location.origin + "/" + $("#cLanguageID").val() + "/subscription-stepone" : document.URL
        }).fail(function() {
            $("#status").hide(),
            setTimeout(function() {
                $("#status").html($("#User_LoginInvalidEmailPasswordText").val()),
                $("#status").addClass("msg-red"),
                $("#status").removeClass("n-display"),
                $("#status").show()
            }, 200)
        }).always(function() {});
    else
        return !1
}
function LoginValidate() {
    validatorLogin = $("#loginform").validate({
        rules: {
            UserName: {
                required: !0,
                maxlength: 128
            },
            pass: {
                required: !0,
                maxlength: 256
            }
        },
        messages: {
            UserName: {
                required: $("#User_LoginRequiredEmailText").val(),
                maxlength: $("#User_LoginEmailLengthValidationText").val()
            },
            pass: {
                required: $("#User_LoginRequiredPasswordText").val(),
                maxlength: $("#User_LoginPasswordLengthValidationText").val()
            }
        },
        errorElement: "div"
    })
}
function ShowLoginPopup() {
    $("#IsMobileRequest").val() == "True" ? ($("#loginContainer").show(),
    $("#panel").show(),
    $("body").css("position", "fixed")) : ($("#panel").show(),
    $("#UserName").focus())
}
function ShowUpgradeSubscription() {
    $("#restricted").hide(),
    $("#sub-panel").show()
}
function UserProfileRankSetDivPosition() {
    var n = $(".user-profile").width()
      , t = 193 - n;
    $(".congrats-rank-msg").css("right", -t)
}
function ShowForgotPasswordPopup() {
    $("#IsMobileRequest").val() == "True" || ($("#panel").hide(),
    $("#panelForgotPassword").show())
}
function CloseForgotPasswordPopup() {
    $("#IsMobileRequest").val() == "True" && ($("#statusForgotPassword").hide(),
    $("#statusForgotPassword").html(""),
    $("#forgotPassContainer").hide(),
    $("#formForgotPassword").show(),
    $("#OKButton").hide()),
    $("#panelForgotPassword").hide(),
    $("#statusForgotPassword").html(""),
    $("#statusForgotPassword").addClass("n-display"),
    $("#statusForgotPassword").removeClass("msg-red"),
    $("#UserNameForgotPassword").val(""),
    validatorForgotPassword.resetForm(),
    $("#formForgotPassword").show(),
    $("#OKButton").hide(),
    CloseLoginPopup()
}
function ForgotPasswordSubmit() {
    var n = $('input[name="__RequestVerificationToken"]').attr("value"), t;
    return $.ajaxSetup({
        beforeSend: function(t) {
            t.setRequestHeader("Csrf-Token", n)
        }
    }),
    $("#IsMobileRequest").val() == "True" ? ($("#statusForgotPassword").addClass("n-display"),
    $("#statusForgotPassword").removeClass("red"),
    $("#statusForgotPassword").removeClass("green"),
    $("#statusForgotPassword").html(""),
    $("#statusForgotPassword").hide(),
    $("#formForgotPassword").valid() ? (t = $.ajax({
        type: "POST",
        url: $("#ForgotPassowordURL").val(),
        data: {
            __RequestVerificationToken: n,
            EmailAddress: $.trim($("#UserNameForgotPassword").val())
        }
    }).done(function(n) {
        n == $("#User_ForgotPasswordText").val() && ($("#statusForgotPassword").html(n),
        $("#statusForgotPassword").removeClass("red"),
        $("#statusForgotPassword").removeClass("n-display"),
        $("#statusForgotPassword").removeClass("error-msg"),
        $("#UserNameForgotPassword").val(""),
        $("#statusForgotPassword").show(),
        $("#formForgotPassword").hide(),
        $("#OKButton").show()),
        n == $("#User_ForgotPasswordErrorOccurredText").val() && ($("#statusForgotPassword").html(n),
        $("#statusForgotPassword").removeClass("green"),
        $("#statusForgotPassword").removeClass("n-display"),
        $("#statusForgotPassword").show())
    }).fail(function() {
        $("#statusForgotPassword").html($("#User_ForgotPasswordText").val()),
        $("#statusForgotPassword").addClass("red"),
        $("#statusForgotPassword").addClass("y-display"),
        $("#statusForgotPassword").show(),
        $("#statusForgotPassword").addClass("error-msg")
    }).always(function() {}),
    !1) : !1) : ($("#statusForgotPassword").addClass("n-display"),
    $("#statusForgotPassword").removeClass("msg-red"),
    $("#statusForgotPassword").removeClass("msg-green"),
    $("#statusForgotPassword").html(""),
    $("#formForgotPassword").valid() ? (t = $.ajax({
        type: "POST",
        url: $("#ForgotPassowordURL").val(),
        data: {
            __RequestVerificationToken: n,
            EmailAddress: $.trim($("#UserNameForgotPassword").val())
        }
    }).done(function(n) {
        n == $("#User_ForgotPasswordText").val() && ($("#statusForgotPassword").html(n),
        $("#statusForgotPassword").removeClass("msg-red"),
        $("#statusForgotPassword").removeClass("n-display"),
        $("#UserNameForgotPassword").val(""),
        $("#formForgotPassword").hide(),
        $("#OKButton").show()),
        n == $("#User_ForgotPasswordErrorOccurredText").val() && ($("#statusForgotPassword").html(n),
        $("#statusForgotPassword").removeClass("msg-green"),
        $("#statusForgotPassword").removeClass("n-display"))
    }).fail(function() {
        $("#statusForgotPassword").html($("#User_ForgotPasswordText").val()),
        $("#statusForgotPassword").addClass("msg-red"),
        $("#statusForgotPassword").addClass("y-display")
    }).always(function() {}),
    !1) : !1)
}
function ForgotPasswordValidate() {
    validatorForgotPassword = $("#formForgotPassword").validate({
        rules: {
            UserNameForgotPassword: {
                required: !0,
                maxlength: 128,
                email: !0
            }
        },
        messages: {
            UserNameForgotPassword: {
                required: $("#User_LoginRequiredEmailText").val(),
                maxlength: $("#User_LoginEmailLengthValidationText").val(),
                email: $("#User_ForgotPasswordErrorOccurredText").val()
            }
        },
        errorElement: "div"
    })
}
function CloseForceLoggedOut() {
    $(".mobile-notification").hide(),
    $("#subs-message-logout-div").hide(),
    $("#argaam-container").removeClass("subscr-padd")
}
function ShowMobileForgetPassPopup() {
    $("#panel").hide(),
    $("#panelForgotPassword").hide(),
    $("#status").html(""),
    $("#status").addClass("n-display"),
    $("#status").removeClass("msg-red"),
    $("#UserName").val(""),
    $("#pass").val(""),
    validatorLogin.resetForm(),
    $("body").css("position", ""),
    $("#loginContainer").hide(),
    $("#status").html(""),
    $("#status").hide(),
    $("#forgotPassContainer").show(),
    $("#panelForgotPassword").show(),
    $("body").css("position", "fixed"),
    $("#statusForgotPassword").hide().hide(),
    $("#statusForgotPassword").html("")
}
function ShowMobileLoginPopup() {
    $("#panel").show(),
    $("body").css("position", "fixed"),
    $(".close-menu").trigger("click"),
    $("#loginContainer").show()
}
function googleCustomSearch(n) {
    var t = $("#HomePageUrl").val() + "/content/googlesearchv2?q=" + n + "&cx=" + ($("#cLanguageID").val() == "ar" ? "011077457559441124552:_fhkyk47khu" : "011077457559441124552:esuefy9yduk") + "&lang=" + $("#cLanguageID").val();
    $(".argaam-cse-result").html(""),
    $("<iframe>", {
        src: t,
        id: "cse-result",
        frameborder: 0,
        scrolling: "yes",
        width: "100%",
        height: $("#IsMobileRequest").val() == "True" ? "400" : 430
    }).appendTo(".argaam-cse-result")
}
function googleSearchCallBack(n) {
    var r = {}, u = $("#cLanguageID").val() == "ar" ? "no" : "lang_en", f, t, i;
    u != "no" && (r[google.search.Search.RESTRICT_EXTENDED_ARGS] = {
        lr: u
    }),
    f = {},
    t = new google.search.CustomSearchControl("011077457559441124552:9h8vfnqvqh0",r),
    t.setResultSetSize(5),
    i = new google.search.DrawOptions,
    i.enableSearchResultsOnly(),
    t.draw("cse", i),
    t.execute(n)
}
function searchBoxdoneTyping() {
    var n, t;
    $("#LablebSearchEnabled").val() == "false" && $("#IsMobileRequest").val() == "True" ? ($("#cse").html(""),
    n = $.trim($("#searchInputBox").val()),
    n != "" ? (googleCustomSearch(n),
    t = $.ajax({
        type: "GET",
        dataType: "json",
        url: $("#SearchTermURL").val() + "?search=" + encodeURIComponent(n),
        beforeSend: function() {
            $(".loader").css("display", "block")
        }
    }).done(function(n) {
        var i = "", u;
        $("#dvSearchTabs").html("");
        var r = $.grep(n, function(n) {
            return n.EntityID == $("#EntitiesEnumComapnies").val()
        })
          , f = $.grep(n, function(n) {
            return n.EntityID == $("#EntitiesEnumArticles").val()
        })
          , t = $("<div>").attr("id", "Companies").addClass("content-holder").append("<h2>" + $("#Footer_CompaniesLinkText").val() + "<span class='sector-sml-heading'>" + $("#Search_ArgaamSectorText").val() + "</span></h2>");
        $("#dvSearchTabs").append(t),
        r.length != 0 ? ($(r).each(function(n, r) {
            var u, f;
            n > 4 || (i = r.SearchTerm.split("###")[4] != "noresult" ? i = "[" + r.SearchTerm.split("###")[4] + "] - " : "",
            u = "",
            u = $("#IsSEOMarket").val().toLowerCase() == "true" ? "/" + $("#cLanguageIDWithMarket").val() + "/companies/" + r.StockExchangeName + "/" + r.CompanyName + "/overview" : $("#LanguageShortName").val().toLowerCase() == "ar" ? "/" + $("#cLanguageIDWithMarket").val() + "/company/companyoverview/marketid/" + r.MarketID + "/companyid/" + r.RowID + "/" : "/" + $("#cLanguageIDWithMarket").val() + "/" + r.StockExchangeName.toLowerCase() + "/" + r.MarketName.toLowerCase() + "/" + r.CompanyName.toLowerCase() + "/",
            f = $("<div>").addClass("row clear-fix").attr("style", "cursor: pointer;").attr("data-href", u).append($("<div>").addClass("col c-name").html(i).append($("<a>").attr("title", r.SearchTerm.split("###")[0]).attr("href", u).html(r.SearchTerm.split("###")[2])).append("<br>").append($("<em>").html("(" + r.SearchTerm.split("###")[1] + ")"))).append($("<div>").addClass("col c-link").html(r.SectorName)),
            r.Rank != 500 && $(t).append(f))
        }),
        ($("#dvSearchTabs").html() == '<div id="Companies" class="content-holder"><h2>Companies</h2></div>' || $("#dvSearchTabs").html() == '<div id="Companies" class="content-holder"><h2>شركات</h2></div>') && (u = $("#PP_Search_NoSearchResultFound").val(),
        $(t).append($("<div>").addClass("no-results row").html(u)))) : $(t).append($("<div>").addClass("no-results row").html($("#PP_Search_NoSearchResultFound").val())),
        r.length != 0 || f.length != 0 || $("#cse").html() != null ? $("#searchMoreLink").show() : $("#searchMoreLink").hide(),
        $("#searchElement").show(),
        $("*[data-href]").each(function() {
            $(this).css("cursor", "pointer")
        }),
        $("*[data-href]").click(function() {
            return window.location = $(this).data("href"),
            !1
        })
    }).always(function() {
        $(".loader").css("display", "none")
    })) : ($("#dvSearchTabs").html(""),
    $("#searchElement").hide())) : ($("#cse").html(""),
    n = $.trim($("#searchInputBox").val()),
    n !== "" ? $("#LablebSearchEnabled").val() == "true" ? ($(".loader").css("display", "block"),
    $("#searchMoreLink").hide(),
    t = $.ajax({
        type: "POST",
        async: !0,
        url: $("#SearchWithLablebPopup").val(),
        data: {
            search: n,
            langID: $("#SelectedLanguageID").val(),
            marketID: $("#SelectedMarketID").val(),
            userID: $("#cUserID").val(),
            sessionID: $("#cUserSessionID").val()
        },
        beforeSend: function() {
            $(".search-container .loader").show(),
            $("button .search").hide(),
            $(".google-load").show(),
            $(".google-load .loader").css("display", "block")
        }
    }).done(function(n) {
        $("#searchResultsContainer").html(n),
        $(".loader").hide(),
        $(".google-load").hide(),
        $(".google-load .loader").hide(),
        $(".search-container .loader").hide(),
        $("button .search").show(),
        $("#searchElement").show(),
        $("*[data-href]").each(function() {
            $(this).css("cursor", "pointer")
        }),
        $("*[data-href]").click(function() {
            return window.location = $(this).data("href"),
            !1
        }),
        $("#searchMoreLink").show()
    }).fail(function() {
        $(".loader").hide(),
        $("#searchResultsContainer").html($("<div>").addClass("no-results row").html($("#An_Error_Occured").val())),
        $(".google-load").hide(),
        $(".google-load .loader").hide(),
        $(".search-container .loader").hide(),
        $("button .search").show(),
        $("#searchElement").show(),
        $("#searchMoreLink").hide()
    })) : (googleCustomSearch(n),
    $(".search-container .loader").show(),
    $("button .search").hide(),
    t = $.ajax({
        type: "GET",
        dataType: "json",
        async: !0,
        url: $("#SearchTermURL").val() + "?search=" + encodeURIComponent(n),
        beforeSend: function() {
            $("#dvSearchTabs").html(""),
            $(".search-container .loader").show(),
            $("button .search").hide(),
            $(".google-load").show(),
            $(".google-load .loader").css("display", "block")
        }
    }).done(function(n) {
        var t, f;
        $("button .search").hide(),
        t = "",
        $("#dvSearchTabs").html("");
        var r = $.grep(n, function(n) {
            return n.EntityID == $("#EntitiesEnumComapnies").val()
        })
          , e = $.grep(n, function(n) {
            return n.EntityID == $("#EntitiesEnumArticles").val()
        })
          , u = $("<div>").addClass("scroll-content")
          , i = $("<div>").attr("id", "Companies").addClass("content-holder").append("<h2>" + $("#Footer_CompaniesLinkText").val() + "<span class='sector-sml-heading'>" + $("#Search_ArgaamSectorText").val() + "</span></h2>");
        $("#dvSearchTabs").append(i),
        r.length != 0 ? ($(r).each(function(n, i) {
            var r, f;
            n > 9 || (t = i.SearchTerm.split("###")[4] != "noresult" ? t = "[" + i.SearchTerm.split("###")[4] + "] - " : "",
            r = "",
            r = $("#IsSEOMarket").val().toLowerCase() == "true" ? "/" + $("#cLanguageIDWithMarket").val() + "/companies/" + i.StockExchangeName + "/" + i.CompanyName + "/overview" : $("#LanguageShortName").val().toLowerCase() == "ar" ? "/" + $("#LanguageShortName").val() + "/company/companyoverview/marketid/" + i.MarketID + "/companyid/" + i.RowID + "/" : "/" + $("#LanguageShortName").val() + "/" + i.StockExchangeName.toLowerCase() + "/" + i.MarketName.toLowerCase() + "/" + i.CompanyName.toLowerCase() + "/",
            f = $("<div>").addClass("table clearfix").append($("<div>").addClass("row clearfix").attr("style", "cursor: pointer;").attr("data-href", r).append($("<div>").addClass("colum c-name").html(t).append($("<a>").attr("title", i.SearchTerm.split("###")[0]).attr("href", r).html(i.SearchTerm.split("###")[2])).append("<br>").append($("<em>").html("(" + i.SearchTerm.split("###")[1] + ")"))).append($("<div>").addClass("colum c-link").html(i.SectorName))),
            i.Rank != 500 && $(u).append(f))
        }),
        $(i).append(u),
        ($("#dvSearchTabs").html() == '<div id="Companies" class="content-holder"><h2>Companies</h2></div>' || $("#dvSearchTabs").html() == '<div id="Companies" class="content-holder"><h2>شركات</h2></div>') && (f = $("#PP_Search_NoSearchResultFound").val(),
        $(i).append($("<div>").addClass("no-results row").html(f)))) : $(i).append($("<div>").addClass("no-results row").html($("#PP_Search_NoSearchResultFound").val())),
        $(".google-load").hide(),
        $(".google-load .loader").hide(),
        $(".search-container .loader").hide(),
        $("button .search").show(),
        $("#searchElement").show(),
        $("*[data-href]").each(function() {
            $(this).css("cursor", "pointer")
        }),
        $("*[data-href]").click(function() {
            return window.location = $(this).data("href"),
            !1
        })
    })) : ($("#dvSearchTabs").html(""),
    $("#searchElement").hide(),
    $(".google-load").hide(),
    $(".google-load .loader").hide(),
    $(".search-container .loader").hide(),
    $("button .search").show()))
}
function googleSearchKeyUpKeyDown() {
    var n, t = 700;
    $("#searchInputBox").keydown(function() {
        clearTimeout(n),
        console.log("clearTimeout(typingTimer)")
    }),
    $("#searchInputBox").keyup(function() {
        clearTimeout(n),
        n = setTimeout(searchBoxdoneTyping, t),
        console.log("setTimeout(searchBoxdoneTyping, doneTypingInterval)"),
        $("#IsMobileRequest").val() != "True" && ($(".search-container .loader").show(),
        $("button .search").hide(),
        $(".google-load").show(),
        $(".google-load .loader").css("display", "block"))
    })
}
function googleSearchForMobile() {
    $("button.search").click(function() {
        $("#searchContainer").hasClass("show") ? ($("#searchContainer").removeClass("show"),
        $("body").css("position", "")) : ($("#searchContainer").addClass("show"),
        $("body").css("position", "fixed"),
        $("#searchInputBox").focus())
    }),
    $("#closeSearch").click(function() {
        $("#searchContainer").hide()
    })
}
function CloseSearchContainer() {
    $("#searchContainer").removeClass("show"),
    $("body").css("position", "")
}
function LoadDiscoveryTab(n, t) {
    $(".IconContainer").find(".holder").each(function() {
        $(".holder").removeClass("active")
    }),
    $(n).addClass("active");
    var i = ".support-result-tab"
      , r = $.ajax({
        type: "GET",
        url: t,
        cache: !1,
        async: !1
    }).done(function(t) {
        $(i).html("").append(t),
        $(n).attr("relf-target") == "supportspopupMain" ? ($("#loginbtnSupporPopup").click(function() {
            $(".support-result-tab").html(""),
            ShowLoginPopup(),
            $(".login-btn-slide.close").click(function() {
                window.location.host.indexOf("tools.") == -1 && (window.location = "/" + $("#cLanguageID").val())
            })
        }),
        ValidateDiscovery("supportspopupMain")) : $(n).attr("relf-target") == "LiveDemo" ? ($(".support-pop-up.relative-pos").show(),
        $("#clock_btn").click(function() {
            return $("#PreferredTimeToContact_dt_picker").datetimepicker("show"),
            !1
        }),
        $("#PreferredTimeToContact_dt_picker").datetimepicker({
            dateFormat: "mm/dd/yy",
            minDate: new Date,
            timeFormat: "hh:mm tt",
            hourMin: 8,
            hourMax: 17
        }),
        ValidateDiscovery("LiveDemo")) : ValidateDiscovery("AskArgaam")
    }).fail(function() {})
}
function ValidateDiscovery(n) {
    $("#IsRenderContentOnly_Hidden").val() != "true" && (n == "supportspopupMain" ? $("#supportform").validate({
        rules: {
            EmailAddress: {
                required: !0,
                maxlength: 256,
                email: !0
            },
            FullName: {
                required: !0,
                maxlength: 256
            },
            PhoneNo: {
                number: !0,
                required: !0,
                maxlength: 32
            },
            Subject: {
                required: !0,
                maxlength: 256
            }
        },
        messages: {
            EmailAddress: {
                required: $("#PP_Registration_Validation_PleaseEnterEmail").val(),
                maxlength: $("#PP_Registration_Validation_Max256CharactersAreAllowed").val(),
                email: $("#PP_Registration_Validation_Email").val()
            },
            FullName: {
                required: $("#PP_Registration_Validation_PleaseEnterFirstName").val(),
                maxlength: $("#PP_Registration_Validation_Max256CharactersAreAllowed").val()
            },
            PhoneNo: {
                required: $("#PP_Registration_Validation_mOBILEnOiSrEQUIRED").val(),
                maxlength: $("#PP_Registration_Validation_Max32CharactersAreAllowed").val(),
                number: $("#PP_Registration_Validation_NumerOnly").val()
            },
            Subject: {
                required: $("#Support_Popup_Please_Enter_Subject_Required_Field").val(),
                maxlength: $("#PP_Registration_Validation_Max256CharactersAreAllowed").val()
            }
        },
        errorElement: "div"
    }) : n == "LiveDemo" ? $("#LiveDemoForm").validate({
        rules: {
            FullName: {
                required: !0,
                maxlength: 256
            },
            EmailAddress: {
                required: !0,
                maxlength: 256,
                email: !0
            },
            Mobile: {
                number: !0,
                required: !0,
                maxlength: 32
            },
            PhoneNo: {
                number: !0,
                maxlength: 32
            },
            Position: {
                required: !0,
                maxlength: 100
            },
            Company: {
                required: !0,
                maxlength: 250
            }
        },
        messages: {
            FullName: {
                required: $("#PP_Registration_Validation_PleaseEnterFirstName").val(),
                maxlength: $("#PP_Registration_Validation_Max256CharactersAreAllowed").val()
            },
            EmailAddress: {
                required: $("#PP_Registration_Validation_PleaseEnterEmail").val(),
                maxlength: $("#PP_Registration_Validation_Max256CharactersAreAllowed").val(),
                email: $("#PP_Registration_Validation_Email").val()
            },
            Mobile: {
                required: $("#PP_Registration_Validation_mOBILEnOiSrEQUIRED").val(),
                maxlength: $("#PP_Registration_Validation_Max32CharactersAreAllowed").val(),
                number: $("#PP_Registration_Validation_NumerOnly").val()
            },
            PhoneNo: {
                maxlength: $("#PP_Registration_Validation_Max32CharactersAreAllowed").val(),
                number: $("#PP_Registration_Validation_NumerOnly").val()
            },
            Position: {
                required: $("#PP_Registration_Validation_PleaseEnterPosition").val(),
                maxlength: $("#PP_Registration_Validation_Max32CharactersAreAllowed").val(),
                number: $("#PP_Registration_Validation_NumerOnly").val()
            },
            Company: {
                required: $("#PP_Registration_Validation_PleaseEnterCompany").val(),
                maxlength: $("#PP_Registration_Validation_Max32CharactersAreAllowed").val(),
                number: $("#PP_Registration_Validation_NumerOnly").val()
            }
        },
        errorElement: "div"
    }) : $("#AskArgaamForm").validate({
        rules: {
            Subject: {
                required: !0,
                maxlength: 256
            }
        },
        messages: {
            Subject: {
                required: $("#Support_Popup_Please_Enter_Subject_Required_Field").val(),
                maxlength: $("#PP_Registration_Validation_Max256CharactersAreAllowed").val()
            }
        },
        errorElement: "div"
    }))
}
function ToggleDiscovery(n) {
    $("#IsRenderContentOnly_Hidden").val() != "true" && ($(".IconContainer").find(".holder").each(function() {
        $(".holder").removeClass("active")
    }),
    n == "open" ? ($(".discoverMenuHolder").addClass("open"),
    $(".support-pop-up").show(),
    $("#ArgaamPlusURLHelper_IsHomePageURL").val() == "1" && StopAutoRefresher()) : n == "closepopup" ? ($(".support-result-tab").html(""),
    $(".support-pop-up").hide()) : ($(".discoverMenuHolder").removeClass("open"),
    $(".support-pop-up").hide(),
    $("#ArgaamPlusURLHelper_IsHomePageURL").val() == "1"))
}
function GetHideInterval() {
    return 2e3
}
function ShowHistoricalDataPopup(n, t) {
    $("#divHistoricalDataPopup").css({
        left: n,
        top: t
    }),
    $("#divHistoricalDataPopup").show()
}
function GetHistoricSubscriptionPackage(n) {
    var t = !1
      , i = $("#historicSubscriptionPackageUrl").val()
      , r = $("#companyID").val();
    return r && (i += "?companyID=" + r),
    $.ajax({
        type: "get",
        async: !1,
        cache: !1,
        url: i
    }).done(function(i) {
        t = n != undefined && n ? i.IsHistoryDataAllowedForCharts : i.IsHistoryDataAllowed
    }),
    t
}
function IsHistoryDataAllowed(n) {
    var i = ""
      , r = ""
      , u = !1;
    return $("#IsCpUser").length > 0 && $("#IsCpUser").val() == "1" ? (i = "true",
    r = "true") : n ? r = GetHistoricSubscriptionPackage(!0) ? "true" : "false" : i = GetHistoricSubscriptionPackage() ? "true" : "false",
    n ? r != "" && r.toLowerCase() == "true" && (u = !0) : i != "" && i.toLowerCase() == "true" && (u = !0),
    u
}
function GetHistoricLowestSubscriptionPackage(n) {
    var u = $("#blockedSectorCompanyID").length > 0 ? $("#blockedSectorCompanyID").val() : 0, f = $("#isChartHistoric").length > 0 ? $("#isChartHistoric").val() : 0, e = $("#blockedSectorCompanyURL").length > 0 ? $("#blockedSectorCompanyURL").val().toString() : "false", o = $("#restrictedPageID").val(), r = $("#historicLowestSubscritionPackageUrl").val() + "?blockPageID=" + ($("#restrictedPageID").val() == undefined ? -1 : $("#restrictedPageID").val()) + "&companyID=" + u + "&isCompanyUrl=" + e + "&isChartHistoric=" + (f == "1" ? !0 : !1), t, i;
    return r += n == undefined ? "" : "&symbol=" + n,
    t = "",
    i = 0,
    $.ajax({
        type: "get",
        async: !1,
        cache: !1,
        url: r
    }).done(function(n) {
        t = $("#cLanguageID").val().toLowerCase() == "ar" ? n.PackageNameAr : n.PackageNameEn,
        i = n.SubscriptionPackageCode
    }),
    '<a target="_top" href="' + $("#subscriptionUrl").val() + "?SelectedPackageCode=" + i + '&isSubscription=1">' + t + "</a>"
}
function IsHistoricalViewAllowedForCharts() {
    var u = ""
      , t = !1;
    if (IsHistoryDataAllowed(!0))
        t = !0;
    else {
        var n = '<div id="divHistoricalDataPopup" class="lock-pop charts-table-data lockpop_mob" style="display:none;"><div class="lock-pop-holder"><span id="hDataCloseBtn" class="close hDataCloseBtn">&times;</span><div class="pop-detail"><span></span>##message</div></div></div>'
          , i = ""
          , n = n.replace("##header", i)
          , r = $("#PPSubscriptionHistoricalPopupMsgCharts").val() + " " + GetHistoricLowestSubscriptionPackage()
          , n = n.replace("##message", r);
        $("body").append(n);
        $("#hDataCloseBtn").on("click", function() {
            $("#divHistoricalDataPopup").hide()
        });
        $(".close.hDataCloseBtn").on("click", function() {
            $(".lock-pop.charts-table-data").hide()
        })
    }
    return t
}
function IsHistoricalViewAllowed(n) {
    var f = "", r = !1, t;
    if (IsHistoryDataAllowed(!1))
        r = !0;
    else {
        var t = '<div id="divHistoricalDataPopup" class="lock-pop" style="display:none;"><div class="lock-pop-holder"><span id="hDataCloseBtn" class="close">&times;</span><div class="pop-detail"><span></span>##message</div></div></div>'
          , u = ""
          , t = t.replace("##header", u)
          , i = "";
        i = n == undefined ? $("#PPSubscriptionHistoricalPopupMsg").val() + " " + GetHistoricLowestSubscriptionPackage() : n + " " + GetHistoricLowestSubscriptionPackage(),
        t = t.replace("##message", i),
        $("body").append(t);
        $("#hDataCloseBtn").on("click", function() {
            $("#divHistoricalDataPopup").hide()
        })
    }
    return r
}
function applyFormulaPopup() {
    $("[___showformulapopup]").each(function() {
        $(this).hover(function() {
            var t = $(this).attr("formula"), r = $(this).attr("formulaValues"), u = $(this).html(), f = $(this).attr("showformula-popup"), i;
            t.length != 0 && ($(this).append('<div class="tooltip-font" id="formulapopup"></div>'),
            i = $("<h3>" + f + "</h3>"),
            $("div#formulapopup").append(i),
            $("div#formulapopup").append("<hr />"),
            $("div#formulapopup").append("<span> = " + t + " </span><br/>"),
            $("div#formulapopup").append("<span> = " + r + " </span><br/>"),
            $("div#formulapopup").append("<span> = " + u + " </span><br/>"))
        }, function() {
            $("div#formulapopup").remove()
        })
    }),
    $("[_____________showformula-popup]").mousemove(function(n) {
        $("div#formulapopup").css("top", n.pageY + 10).css("left", n.pageX + 10)
    })
}
function ToggaleMarket(n) {
    var t = $("[relmarkettoggled]").attr("relmarkettoggled");
    t != n && $("#market_" + t).hasClass("open") && ($("#market_" + t).switchClass("open", "closed"),
    $("#market_companies_" + t).switchClass("open", "closed")),
    $("[relmarkettoggled]").attr("relmarkettoggled", n),
    $("#market_" + n).hasClass("closed") ? ($("#market_" + n).switchClass("closed", "open"),
    $("#market_companies_" + n).switchClass("closed", "open")) : ($("#market_" + n).switchClass("open", "closed"),
    $("#market_companies_" + n).switchClass("open", "closed"))
}
function CloseForceLoggedOut() {
    $("#subs-message-logout-div").hide(),
    $("#argaam-container").removeClass("subscr-padd")
}
function closeMessageForUser() {
    $("#message-for-current-user").hide(),
    $(".notification-free-sub").hide(),
    $.getJSON("/ar/users/clear-user-message", function(n) {
        console.log(n)
    })
}
function CloseSubscription() {
    $(".mobile-notification").length > 0 && $(".mobile-notification").hide(),
    $("#subs-message-div").hide(),
    $("#argaam-container").removeClass("subscr-padd")
}
function applyFormulaPopup() {
    $("[_____________showformula-popup]").each(function() {
        $(this).hover(function() {
            var t = $(this).attr("formula"), r = $(this).attr("formulaValues"), u = $(this).html(), f = $(this).attr("showformula-popup"), i;
            t.length != 0 && ($(this).append('<div class="tooltip-font" id="formulapopup"></div>'),
            i = $("<h3>" + f + "</h3>"),
            $("div#formulapopup").append(i),
            $("div#formulapopup").append("<hr />"),
            $("div#formulapopup").append("<span> = " + t + " </span><br/>"),
            $("div#formulapopup").append("<span> = " + r + " </span><br/>"),
            $("div#formulapopup").append("<span> = " + u + " </span><br/>"))
        }, function() {
            $("div#formulapopup").remove()
        })
    }),
    $("[_____________showformula-popup]").mousemove(function(n) {
        $("div#formulapopup").css("top", n.pageY + 10).css("left", n.pageX + 10)
    })
}
function RedirectUrlIfUserIsLoggedIn() {
    if ($("#IsLoggedIn").length > 0 && $("#IsLoggedIn").val() == "0") {
        var n = document.referrer;
        n != "" && n != null && (n.indexOf("subscription-free-trial") > -1 ? ShowLoginPopup() : "")
    }
}
function LoadCommonFunctionsForMobileAndWeb() {
    $(function() {
        googleSearchKeyUpKeyDown(),
        RedirectUrlIfUserIsLoggedIn()
    })
}
function layoutLoadForWeb() {
    LoadCommonFunctionsForMobileAndWeb(),
    $(function() {
        IsHistoryDataAllowed(!0) || ($("#next").length > 0 ? $("#next").addClass("locked-nav") : $("#nextyear").length > 0 ? $("#nextyear").addClass("locked-nav") : $("#nextLink").length > 0 && $("#nextLink").addClass("locked-nav"));
        $("#ddlCompaniesList").on("change", function() {
            var n = $("#ddlCompaniesList :selected").attr("co-url");
            n != null && n != undefined && n.toString() != "" && n != "undefined" && ($(".commonLoader").show(),
            window.location.href = n)
        });
        AttachEventsWithMarketDropdown();
        $("#close-modal").on("click", function() {
            $("#dd-modal").effect("drop")
        });
        BindToolTip("title-data"),
        $("body").mousemove(function(n) {
            $(".loader-icon").css("left", n.pageX + 10).css("top", n.pageY + 10).css("display", "block")
        }),
        $("body").click(function(n) {
            if (n || (n = window.event),
            n.target.id == "searchInputBox" || n.target.id == "searchElement" || n.target.id == "companies" || n.target.id == "news" || n.target.id == "projects")
                $.trim($("#searchInputBox").val()) != "" && $("#searchElement").show();
            else {
                var t = $("#" + n.target.id).find("div:first").attr("id");
                $(n.target).parents() != undefined && $(n.target).parents().is("#searchResultsContainer") || $(n.target).parents().is("#searchElement") ? $("#searchElement").show() : t != "searchElement" && $("#searchElement").hide()
            }
            $(n.target).attr("onclick") != undefined && $(n.target).attr("onclick").indexOf("ValidateHistoricalData") != -1 || $(n.target).parent().attr("onclick") != undefined && $(n.target).parent().attr("onclick").indexOf("ValidateHistoricalData") != -1 || $(n.target).hasClass("locked-nav") || $(n.target).parent().hasClass("locked-nav") || $(n.target).parent().parent().hasClass("locked-nav") || !$("#divHistoricalDataPopup").is(":visible") || $("#divHistoricalDataPopup").hide(),
            $(n.target).hasClass("selected-stat") || $(n.target).hasClass("drp_Arrow") || $(n.target).hasClass("calanderticker") || $(n.target).hasClass("glyphicon") || $(n.target).hasClass("sel_date") || ($(".market-stats-dropdown").hide(),
            $(".date-drop-down").hide()),
            $(n.target).hasClass("user-group drop-down") || $(n.target).hasClass("group-selectors") || $(n.target).hasClass("selected-group") || $(n.target).hasClass("drpArrow") || $(".user-group-dropdown").hide()
        }),
        $(document).scroll(function() {
            $("#divHistoricalDataPopup").is(":visible") && ($("#periodrow").hasClass("fixedtotop") ? $("#divHistoricalDataPopup").addClass("FixedWithParent") : $("#periodrow").hasClass("fixedtotop") || $("#divHistoricalDataPopup").removeClass("FixedWithParent"))
        });
        var n = $(document).width();
        try {
            window.matchMedia("(min-width: 769px)").matches && window.matchMedia("(max-width: 1025px)").matches ? $(".argaam-wrapper").addClass("tablet") : window.matchMedia("(max-width: 769px)").matches && !$(".argaam-wrapper").hasClass("mobile") && $(".argaam-wrapper").addClass("mobile")
        } catch (t) {}
        $("input,textarea").focus(function() {
            $(this) != undefined && $(this).data("placeholder", $(this).attr("placeholder")) != undefined && $(this).data("placeholder", $(this).attr("placeholder")).attr("placeholder", "")
        }).blur(function() {
            $(this) != undefined && $(this).attr("placeholder", $(this).data("placeholder"))
        }),
        $("ul[class='holder-full']").each(function() {
            $(this).parent("li").hasClass("current") ? $(this).show() : ($(this).attr("style", ""),
            $(this).hide())
        })
    })
}
function layoutLoadForMobile() {
    LoadCommonFunctionsForMobileAndWeb(),
    $(function() {
        googleSearchForMobile(),
        $("[relddl='marketddl']").each(function() {
            $(this).on("change", function() {
                var t = $(this).attr("id")
                  , n = $("#" + t + " :selected").attr("co-url");
                n != null && n != undefined && n.toString().trim() != "" && n != "undefined" && ($(".commonLoader").show(),
                window.location.href = n)
            })
        }),
        $(".menu-toggle").click(function() {
            $(".plus-mobile-menu").addClass("show"),
            $(".mobile-data-container").addClass("slideout"),
            $("body").addClass("fixed menuOpen")
        }),
        $("#countrymarketselection").click(function() {
            $(this).hasClass("open") ? $(this).removeClass("open") : $(this).find(".markets").length > 0 && $(this).addClass("open")
        }),
        $(".close-menu").click(function() {
            $(".plus-mobile-menu").removeClass("show"),
            $(".mobile-data-container").removeClass("slideout"),
            $("body").removeClass("fixed menuOpen")
        }),
        $("#cLanguageID").val() == "ar" && $("#dvArgPulseTap").click(function() {
            $("body").toggleClass("widgetOpened")
        });
        $(".chart-filter > ul > li").on("touchstart", function(n) {
            var t = $(this);
            return t.hasClass("hover") ? !0 : (t.addClass("hover"),
            $(".chart-filter > ul > li").not(this).removeClass("hover"),
            n.preventDefault(),
            !1)
        });
        $("input,textarea").focus(function() {
            $(this) != undefined && $(this).data("placeholder", $(this).attr("placeholder")) != undefined && $(this).data("placeholder", $(this).attr("placeholder")).attr("placeholder", "")
        }).blur(function() {
            $(this) != undefined && $(this).attr("placeholder", $(this).data("placeholder"))
        })
    })
}
function moreArticles(n) {
    var t = $(n).attr("url");
    url = t.replace("sectionarticles", "MoreArticlesSectionForHoMainNews"),
    $.ajax({
        type: "Get",
        url: url,
        cache: !1
    }).done(function(t) {
        var i = $(n).parents(".news-list:first");
        $(n).parent().remove(),
        i.append(t)
    })
}
function InitOneSignal(n, t, i) {
    var r = window.OneSignal || [];
    r.push(["init", {
        appId: n,
        safari_web_id: t,
        autoRegister: !1,
        subdomainName: i,
        httpPermissionRequest: {
            enable: !0,
            modalTitle: "شكرا على الإشتراك",
            modalMessage: "أنت الآن مشترك في الإشعارات. يمكنك إلغاء الاشتراك في أي وقت.",
            modalButtonText: "أغلق"
        },
        notifyButton: {
            enable: !1,
            text: {
                "tip.state.unsubscribed": "الاشتراك في الإشعارات",
                "tip.state.subscribed": "أنت مشترك في الإشعارات",
                "tip.state.blocked": "لقد حظرت الإشعارات",
                "message.prenotify": "انقر للاشتراك في الإشعارات",
                "message.action.subscribed": "شكرا على الإشتراك!",
                "message.action.resubscribed": "أنت مشترك في الإشعارات",
                "message.action.unsubscribed": "لن تتلقى إشعارات مرة أخرى",
                "dialog.main.title": "إدارة إشعارات الموقع",
                "dialog.main.button.subscribe": "الاشتراك",
                "dialog.main.button.unsubscribe": "إلغاء الاشتراك",
                "dialog.blocked.title": "إلغاء حظر نوتيفيكاتيونس",
                "dialog.blocked.message": "اتبع هذه الإرشادات للسماح بالإشعارات:"
            }
        },
        promptOptions: {
            actionMessage: "إبق على اطلاع باخر أخبار الأسواق المالية والشركات",
            acceptButtonText: "موافق‎",
            cancelButtonText: "لاحقا‎",
            exampleNotificationTitle: "Example notification",
            exampleNotificationMessage: "This is an example notification",
            exampleNotificationCaption: "You can unsubscribe anytime"
        },
        welcomeNotification: {
            title: "تنبيهات أرقام",
            message: "شكرا على الإشتراك",
            url: "http://www.argaam.com"
        },
        persistNotification: !0
    }])
}
function InitOneSignalMobile(n, t) {
    var i = window.OneSignal || [];
    i.push(["init", {
        appId: n,
        autoRegister: !0,
        subdomainName: t,
        httpPermissionRequest: {
            enable: !0,
            modalTitle: "شكرا على الإشتراك",
            modalMessage: "أنت الآن مشترك في الإشعارات. يمكنك إلغاء الاشتراك في أي وقت.",
            modalButtonText: "أغلق"
        },
        notifyButton: {
            enable: !1,
            text: {
                "tip.state.unsubscribed": "الاشتراك في الإشعارات",
                "tip.state.subscribed": "أنت مشترك في الإشعارات",
                "tip.state.blocked": "لقد حظرت الإشعارات",
                "message.prenotify": "انقر للاشتراك في الإشعارات",
                "message.action.subscribed": "شكرا على الإشتراك!",
                "message.action.resubscribed": "أنت مشترك في الإشعارات",
                "message.action.unsubscribed": "لن تتلقى إشعارات مرة أخرى",
                "dialog.main.title": "إدارة إشعارات الموقع",
                "dialog.main.button.subscribe": "الاشتراك",
                "dialog.main.button.unsubscribe": "إلغاء الاشتراك",
                "dialog.blocked.title": "إلغاء حظر نوتيفيكاتيونس",
                "dialog.blocked.message": "اتبع هذه الإرشادات للسماح بالإشعارات:"
            }
        },
        promptOptions: {
            actionMessage: "إبق على اطلاع باخر أخبار الأسواق المالية والشركات",
            acceptButtonText: "موافق‎",
            cancelButtonText: "لاحقا‎",
            exampleNotificationTitle: "Example notification",
            exampleNotificationMessage: "This is an example notification",
            exampleNotificationCaption: "You can unsubscribe anytime"
        },
        welcomeNotification: {
            title: "تنبيهات أرقام",
            message: "شكرا على الإشتراك",
            url: "http://www.argaam.com"
        },
        persistNotification: !0
    }]),
    i.push(function() {
        i.on("popoverShown", function() {
            $("#onesignal-popover-container").attr("style", "direction: rtl;"),
            $("#onesignal-popover-container #onesignal-popover-dialog .popover-body-icon").attr("style", 'float: right!important; background-image: url("http://argaamplus.s3.amazonaws.com/636195c9-5856-4b83-8d19-a02a7cd5d4cb.png");'),
            $("#onesignal-popover-dialog").attr("style", 'font-family: "Greta_Arabic_Bold";overflow:hidden;'),
            $(".popover-body-message").html(' <h4 style="font-size: 20px;color: #fe952c;padding-bottom:3px;">تابعوا أرقام</h4> ابق على اطلاع باخر أخبار الأسواق المالية والشركات اولا باول'),
            $("#onesignal-popover-container #onesignal-popover-dialog .popover-body-message").attr("style", "padding: 5px 0.5em 0 .2em!important;font-size: 15px;"),
            $("#onesignal-popover-container #onesignal-popover-dialog .popover-footer").attr("style", "float: left;"),
            $("#onesignal-popover-allow-button").attr("style", "background: #fe962e!important;"),
            $("#onesignal-popover-cancel-button").attr("style", "color: #fe962e!important;")
        })
    })
}
function SetOneSignalTagByKeyValue(n, t) {
    OneSignal.push(["sendTags", {
        osKey: t
    }])
}
function SetOneSignalTag(n) {
    OneSignal.push(["sendTags", {
        Market: n
    }])
}
function read_cookie(n) {
    var t;
    return (t = new RegExp("(?:^|; )" + encodeURIComponent(n) + "=([^;]*)").exec(document.cookie)) ? t[1] : null
}
function isSafari() {
    return navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && !navigator.userAgent.match("CriOS")
}
function LoginSubmitContent() {
    var n, t;
    if ($("#err-loginformContent").hide(),
    n = "",
    n = $("#remember").attr("checked") ? "on" : "off",
    $("#loginformContent").valid()) {
        var i = CryptoJS.enc.Utf8.parse($("#passKey").val())
          , r = CryptoJS.enc.Utf8.parse($("#passSalt").val())
          , u = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse($("#passContent").val()), i, {
            keySize: 16,
            iv: r,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        $("#loader-loginformContent").show(),
        t = $('input[name="__RequestVerificationToken"]').attr("value"),
        loaderforlogin = setTimeout(function() {
            $.ajax({
                type: "POST",
                async: !1,
                url: $("#LoginJSONURL").val(),
                data: {
                    __RequestVerificationToken: t,
                    EmailAddress: $("#emailLoginContent").val().trim(),
                    Password: u.toString(),
                    RememberMe: n
                },
                beforeSend: function() {}
            }).done(function(n) {
                n == $("#User_LoginInvalidEmailPasswordText").val() ? ($("#loader-loginformContent").hide(),
                $("#err-loginformContent").html(n),
                $("#err-loginformContent").addClass("error"),
                $("#err-loginformContent").removeClass("success"),
                $("#err-loginformContent").show()) : n.indexOf("Error-") == 0 ? ($("#loader-loginformContent").hide(),
                $("#err-loginformContent").html(n.replace("Error-", "")),
                $("#err-loginformContent").addClass("error"),
                $("#err-loginformContent").removeClass("success"),
                $("#err-loginformContent").show()) : (location.reload(!0),
                /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream && $("#loader-loginformContent").hide())
            }).fail(function() {
                $("#loader-loginformContent").hide(),
                $("#err-loginformContent").hide(),
                $("#err-loginformContent").html($("#User_LoginInvalidEmailPasswordText").val()),
                $("#err-loginformContent").addClass("msg-red"),
                $("#err-loginformContent").removeClass("n-display"),
                $("#err-loginformContent").show()
            }).always(function() {})
        }, 200)
    } else
        return !1
}
function LoginValidateContent() {
    validatorLogin = $("#loginformContent").validate({
        rules: {
            emailLogin: {
                required: !0,
                maxlength: 128,
                email: !0
            },
            pass: {
                required: !0,
                maxlength: 256
            }
        },
        messages: {
            emailLogin: {
                required: $("#Register_EnterEmail").val(),
                maxlength: $("#Register_EmailMaxLength").val(),
                email: $("#Register_EnterCorrectEmail").val()
            },
            pass: {
                required: $("#User_LoginRequiredPasswordText").val(),
                maxlength: $("#User_LoginPasswordLengthValidationText").val()
            }
        },
        errorElement: "div"
    })
}
function RegistrationValidationContent(n) {
    n == "#registerformContent" ? (validatorRegister = $(n).validate({
        rules: {
            Email: {
                required: !0,
                maxlength: 128,
                email: !0
            },
            FullName: {
                required: !0,
                maxlength: 32
            },
            DisplayName: {
                required: !0,
                maxlength: 25
            },
            NewPassword: {
                required: !0,
                maxlength: 16,
                minlength: 8,
                pwcheck: !0
            },
            ConfirmPassword: {
                required: !0,
                maxlength: 16,
                minlength: 8,
                equalTo: "#NewPassword"
            },
            MobileNo: {
                required: !0,
                maxlength: 10,
                minlength: 7,
                number: !0
            },
            CountryCode: {
                required: !0
            }
        },
        messages: {
            Email: {
                required: $("#Register_EnterEmail").val(),
                maxlength: $("#Register_EmailMaxLength").val(),
                email: $("#Register_EnterCorrectEmail").val()
            },
            FullName: {
                required: $("#Register_EnterFullName").val(),
                maxlength: $("#Register_FullNameMaxLength").val()
            },
            DisplayName: {
                required: $("#Register_EnterDisplayName").val(),
                maxlength: $("#Register_DisplayNameMaxLength").val()
            },
            CountryCode: {
                required: $("#Register_InvalidCountryCode").val()
            },
            MobileNo: {
                required: $("#Register_MobileRequired").val(),
                maxlength: $("#Register_MobileMaxLength").val(),
                minlength: $("#Register_MobileMinLength").val(),
                number: $("#Register_MobileValidNumber").val()
            },
            NewPassword: {
                required: $("#Register_Password").val(),
                maxlength: $("#Register_PasswordMaxLength").val(),
                minlength: $("#Register_PasswordMinLength").val(),
                pwcheck: $("#Register_PasswordValidation").val()
            },
            ConfirmPassword: {
                required: $("#Register_ConfirmPassword").val(),
                maxlength: $("#Register_ConfirmPasswordMaxLength").val(),
                minlength: $("#Register_ConfirmPasswordMinLength").val(),
                equalTo: $("#Register_ConfirmPasswordEqualTo").val()
            }
        },
        errorElement: "div",
        errorPlacement: function(n, t) {
            var i = $(t).data("error");
            elementID = $(t).attr("id"),
            elementID == "CountryCode" ? n.insertAfter($("#CountryCodeOuter")) : n.insertAfter(t)
        },
        highlight: function() {
            return !1
        },
        unhighlight: function() {
            return !1
        }
    }),
    $.validator.addMethod("pwcheck", function(n) {
        return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-!@@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]).{8,}/.test(n)
    })) : validatorRegister = $(n).validate({
        rules: {
            Email: {
                required: !0,
                maxlength: 128,
                email: !0
            },
            FullName: {
                required: !0,
                maxlength: 32
            },
            DisplayName: {
                required: !0,
                maxlength: 25
            },
            MobileNo: {
                required: !0,
                maxlength: 10,
                minlength: 7,
                number: !0
            },
            CountryCode: {
                required: !0
            }
        },
        messages: {
            Email: {
                required: $("#Register_EnterEmail").val(),
                maxlength: $("#Register_EmailMaxLength").val(),
                email: $("#Register_EnterCorrectEmail").val()
            },
            FullName: {
                required: $("#Register_EnterFullName").val(),
                maxlength: $("#Register_FullNameMaxLength").val()
            },
            DisplayName: {
                required: $("#Register_EnterDisplayName").val(),
                maxlength: $("#Register_DisplayNameMaxLength").val()
            },
            CountryCode: {
                required: $("#Register_InvalidCountryCode").val()
            },
            MobileNo: {
                required: $("#Register_MobileRequired").val(),
                maxlength: $("#Register_MobileMaxLength").val(),
                minlength: $("#Register_MobileMinLength").val(),
                number: $("#Register_MobileValidNumber").val()
            }
        },
        errorElement: "div",
        errorPlacement: function(n, t) {
            var i = $(t).data("error");
            elementID = $(t).attr("id"),
            elementID == "CountryCode" ? n.insertAfter($("#CountryCodeOuter")) : n.insertAfter(t)
        },
        highlight: function() {
            return !1
        },
        unhighlight: function() {
            return !1
        }
    })
}
function RegisterSubmitContent() {
    if ($("#err-registerformContent").hide(),
    $("#registerformContent").valid()) {
        var n = $('input[name="__RequestVerificationToken"]').attr("value");
        loaderforregister = setTimeout(function() {
            return $.ajax({
                type: "POST",
                async: !1,
                url: $("#RegisterJSONURLContent").val(),
                data: {
                    __RequestVerificationToken: n,
                    FullName: $("#FullName").val().trim(),
                    DisplayName: $("#DisplayName").val(),
                    Email: $("#Email").val(),
                    MobileNo: $("#PMobileNo").val(),
                    CountryCode: $("#CountryCode").val(),
                    NewPassword: $("#NewPassword").val(),
                    ConfirmPassword: $("#ConfirmPassword").val(),
                    userType: ""
                },
                beforeSend: function() {}
            }).done(function(n) {
                n.Success == !1 ? ($("#loader-registerformContent").hide(),
                $("#err-registerformContent").html(n.Message.replace("Error-", "")),
                $("#err-registerformContent").addClass("msg-red"),
                $("#err-registerformContent").removeClass("n-display"),
                $("#err-registerformContent").show()) : ($("#register-success-div").css("display", "block"),
                $("#register-success-div").addClass("msg-green"),
                $("#register-success-div").removeClass("n-display"),
                setTimeout(function() {
                    $("#register-success-div").fadeOut("fast"),
                    document.location.href = document.location.href,
                    /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream && $("#loader-registerformContent").hide()
                }, 5e3))
            }).fail(function() {
                $("#registerLoader").hide(),
                $("#err-registerformContent").css("display", "block"),
                $("#err-registerformContent").html("Error occurred, please try again."),
                $("#err-registerformContent").addClass("msg-red"),
                $("#err-registerformContent").removeClass("n-display"),
                setTimeout(function() {
                    $("#err-registerformContent").fadeOut("fast")
                }, 2e4)
            }).always(function() {}),
            !1
        }, 100)
    }
}
function FreeUserRegisterSubmitContent() {
    if ($("#freeRegisteredUserRegiserFormContent").valid()) {
        $("#err-freeRegisteredUserRegiserFormContent").hide(),
        $("#loader-freeRegisteredUserRegiserFormContent").show();
        var n = $('input[name="__RequestVerificationToken"]').attr("value");
        loaderforfreeregister = setTimeout(function() {
            $.ajax({
                type: "POST",
                async: !1,
                url: $("#RegisterJSONURLContent").val(),
                data: {
                    __RequestVerificationToken: n,
                    FullName: $("#FullName").val().trim(),
                    DisplayName: $("#DisplayName").val(),
                    Email: $("#Email").val(),
                    MobileNo: $("#MobileNo").val(),
                    CountryCode: $("#CountryCode").val(),
                    userType: "New User"
                },
                beforeSend: function() {}
            }).done(function(n) {
                if (n.Success == !1)
                    $("#loader-freeRegisteredUserRegiserFormContent").hide(),
                    $("#err-freeRegisteredUserRegiserFormContent").html(n.Message.replace("Error-", "")),
                    $("#err-freeRegisteredUserRegiserFormContent").addClass("msg-red"),
                    $("#err-freeRegisteredUserRegiserFormContent").removeClass("n-display"),
                    $("#err-freeRegisteredUserRegiserFormContent").show();
                else {
                    var t = $("#SubscriptionURLContent").val() + "&FreeUser=1";
                    return n.InfoUpdated != undefined && n.InfoUpdated != "" && (t += "&InfoUpdated=" + n.InfoUpdated),
                    document.location.href = t,
                    /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream && $("#loader-freeRegisteredUserRegiserFormContent").hide(),
                    !1
                }
            })
        }, 100)
    }
}
function ShowForgotPasswordPopupContent() {
    $("#forgotformContent").show(),
    $("#registerformContent").hide(),
    $("#loginformContent").hide(),
    $("#forgotEmail").focus()
}
function ForgotPasswordSubmitContent() {
    if ($("#err-forgotformContent").val(""),
    $("#forgotformContent").valid()) {
        var n = $('input[name="__RequestVerificationToken"]').attr("value");
        return $.ajaxSetup({
            beforeSend: function(t) {
                t.setRequestHeader("Csrf-Token", n)
            }
        }),
        $("#loader-forgotformContent").show(),
        $("#err-forgotformContent").show(),
        loaderforforgot = setTimeout(function() {
            var t = $.ajax({
                type: "POST",
                url: $("#ForgotPassowordURLContent").val(),
                data: {
                    __RequestVerificationToken: n,
                    EmailAddress: $.trim($("#forgotEmail").val())
                }
            }).done(function(n) {
                n.Success == !0 ? ($("#err-forgotformContent").html(n.Message),
                $("#err-forgotformContent").removeClass("error"),
                $("#err-forgotformContent").addClass("success")) : ($("#err-forgotformContent").html(n.Message),
                $("#err-forgotformContent").removeClass("success"),
                $("#err-forgotformContent").addClass("error"))
            }).always(function() {
                $("#loader-forgotformContent").hide()
            })
        }, 100),
        !1
    }
}
function ForgotPasswordValidationContent() {
    $("#forgotformContent").validate({
        rules: {
            forgotEmail: {
                required: !0,
                maxlength: 128,
                email: !0
            }
        },
        messages: {
            forgotEmail: {
                required: $("#Register_EnterEmail").val(),
                maxlength: $("#Register_EmailMaxLength").val(),
                email: $("#Register_EnterCorrectEmail").val()
            }
        },
        errorElement: "div"
    })
}
function AddContentIntoWishList(n, t, i, r, u, f) {
    n = "#" + n,
    r == "contentPopup" ? n == "#freeRegisteredUserBuyLaterBtn" ? $("#loader-freeRegisteredUserRegiserFormContent").show() : $(n).prev().show() : r == "Dashboard_Buylater",
    $(n).css({
        cursor: "wait",
        "pointer-events": "none"
    });
    var e = $("#contentWishListURL").val() + "?userID=" + i + "&contentID=" + t + "&isFavorite=" + u + "&buyLater=" + f + "&fromPage=" + r;
    loaderforfavorite = setTimeout(function() {
        $.ajax({
            type: "post",
            url: e,
            success: function(t) {
                t.Success == "False" ? location.reload(!0) : t.Success == "Inserted" ? ($(n).addClass("yes"),
                $(n).addClass("added"),
                t.UpdateColumn == "isFavorite:Added" && $(n).attr("title", $("#PAYG_MarkUnafavorite").val()),
                $(n).removeAttr("style"),
                $(n).removeClass("processing")) : t.Success == "Updated" ? ($(n).addClass("yes"),
                $(n).addClass("added"),
                t.UpdateColumn == "isFavorite:true" ? ($(n).addClass("yes"),
                $(n).addClass("added"),
                $(n).attr("title", $("#PAYG_MarkUnafavorite").val())) : t.UpdateColumn == "isFavorite:false" && ($(n).removeClass("yes"),
                $(n).removeClass("added"),
                $(n).attr("title", $("#PAYG_AddFavorite").val())),
                $(n).removeAttr("style"),
                $(n).removeClass("processing")) : t.Success == "Deleted" && (t.UpdateColumn == "isFavorite:Deleted" && ($(n).removeClass("yes"),
                $(n).removeClass("added"),
                $(n).attr("title", $("#PAYG_AddFavorite").val())),
                $(n).removeAttr("style")),
                r == "Dashboard_Buylater" ? f != "" && (RowRemoveForBuylaterContent(n),
                totalPoints(),
                setTimeout(function() {
                    $("[rid='removed_" + n + "']").fadeOut("slow")
                }, 9e3)) : r == "contentPopup" && t.Success != "False" && (t.UpdateColumn.indexOf("buyLater:false") == 0 || t.UpdateColumn.indexOf("buyLater:Deleted") == 0 ? ($(n).attr("onclick", $(n).attr("onclick").replace("false", "true")),
                $("#BuyLaterBtnSpan").html(t.Resource),
                $("#noContensToBuy").show().delay(3e3).fadeOut(),
                n == "#freeRegisteredUserBuyLaterBtn" ? $("#loader-freeRegisteredUserRegiserFormContent").hide() : $(n).prev().hide()) : (document.location.href = $("#PointDashboardURL").val() + "?fromPage=Popups",
                /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream && t.UpdateColumn.indexOf("buyLater:") == 0 && (n == "#freeRegisteredUserBuyLaterBtn" ? $("#loader-freeRegisteredUserRegiserFormContent").hide() : $(n).prev().hide())))
            }
        })
    }, 100)
}
function totalPoints() {
    var e = $("#noContensToBuy").val(), o = $("#userContent tbody tr:not(.active)").length, n, r, f, u, t, i;
    if ($("#userContentToBuyDiv input:checkbox:checked").length != 0) {
        for (n = [],
        $("#userContent").find('input[type="checkbox"]:checked').each(function() {
            var t = $(this).attr("relf-points");
            n.push(t)
        }),
        r = $("#chkAll").prop("checked") ? 1 : 0,
        f = $("#userContentToBuyDiv input:checkbox:checked").length - r,
        u = 0,
        t = 0; t < n.length; t++)
            u += parseInt(n[t]);
        $("#defaultMsgs").hide(),
        $("#buySelectedArticles").removeClass("disabled"),
        $("#totalcredits").show(),
        $("#totalcredits").text(u + " " + creditMsg),
        i = $("#TotalPointsTextMessage") != undefined ? $("#TotalPointsTextMessage").val() : "",
        $("#totalselection").text("( " + f + " " + selectionMsg + " " + i + ")")
    } else
        $("#buySelectedArticles").addClass("disabled"),
        o > 0 ? ($("#defaultMsgs").show(),
        $("#defaultMsgs").text(defaultMsg)) : ($("#defaultMsgs").show(),
        $("#defaultMsgs").text(e)),
        $("#totalcredits").hide(),
        i = $("#TotalPointsTextMessage") != undefined ? $("#TotalPointsTextMessage").val() : "",
        $("#totalselection").text("( 0 " + selectionMsg + " " + i + ")")
}
function RowRemoveForBuylaterContent(n) {
    var i = $("#rowRemoved").val(), r = $("#noContensToBuy").val(), t;
    $(n).parent().after('<tr class="active"><td colspan="6" class="center confirmation-msg" rid="removed_' + n + '"> <div class="message success">' + i + "</div></td></tr>"),
    $(n).parent("tr").remove(),
    t = $("#userContent tr:not(.active)").length,
    t < 2 && ($("#buySelectedArticles").addClass("disabled"),
    $("#chkAll").attr("checked", !1),
    $("#chkAll").attr("disabled", !0))
}
function ResendEmailVerificaiton(n) {
    $.ajax({
        type: "GET",
        url: $("#ResendEmailVerification").val(),
        beforeSend: function() {
            $("#" + $(n).attr("loader-id")).show()
        }
    }).done(function(t) {
        if (t.Success == !1)
            $("#" + $(n).attr("loader-id")).hide(),
            $("#verificationmsg").html(t.Message);
        else {
            $("#" + $(n).attr("loader-id")).hide();
            var i = $("#verificationmsg").html();
            $("#verificationmaindiv").removeClass("error"),
            $("#verificationmaindiv").addClass("success"),
            $("#verificationmsg").html(t.Message),
            setTimeout(function() {
                $("#verificationmaindiv").hide(),
                $("#verificationmaindiv").addClass("error"),
                $("#verificationmsg").html(i),
                $("#verificationmaindiv").show(1e3)
            }, 5e3)
        }
        return !1
    })
}
function BuyContent(n) {
    var r = [], u = [], t, i, f, n;
    for ($("#userContent").find('input[type="checkbox"]:checked').each(function() {
        var n = $(this).attr("relf-points")
          , t = $(this).attr("id");
        n > 0 && u.push(t),
        r.push(n)
    }),
    t = 0,
    i = 0; i < r.length; i++)
        t += parseInt(r[i]);
    f = $("#userBalancePoints").val(),
    t > 0 && (t <= f ? ($("#userContentToBuyLoading").show(),
    n = n + "&contentIDs=" + u,
    loaderforfavorite = setTimeout(function() {
        $.ajax({
            type: "post",
            url: n,
            success: function(n) {
                var t = $("#ContentToBuyPartialURL").val() + "?isBuyLater=true";
                contentToBuyTimeout = setTimeout(function() {
                    $.ajax({
                        type: "GET",
                        url: t
                    }).done(function(t) {
                        var i = Math.floor(Math.random() * 5), u, r;
                        $("#userContentToBuyDiv").html(t),
                        u = $("#contentPurchasesCount").val(),
                        r = $("#pointBalanceCount").val(),
                        $("#contentpurchase").html(u),
                        $("#pointBalance").html(r),
                        $("#currentBalance").html(r),
                        $("#userContentToBuyLoading").hide(),
                        n.Success == !0 ? $("#buyLaterTbl").before('<div class="message success center m-bottom argaam-font m-top" id="sucess_' + i + '" ">' + n.Message + "</div>") : $("#buyLaterTbl").before('<div class="message error center m-bottom argaam-font m-top" id="sucess_' + i + '" ">' + n.Message + "</div>"),
                        setTimeout(function() {
                            $("#sucess_" + i + "").fadeOut("slow")
                        }, 9e3)
                    })
                }, 100)
            }
        })
    }, 100)) : ($("#error").show(),
    setTimeout(function() {
        $("#error").fadeOut("slow")
    }, 9e3)))
}
function getParameterByName(n, t) {
    t || (t = window.location.href),
    n = n.replace(/[\[\]]/g, "\\$&");
    var r = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)")
      , i = r.exec(t);
    return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
}
function cseIframeLoaded() {
    $("#cse-result").contents().find(".gsc-cursor").hide(),
    $("#cse-result").contents().find(".gs-bidi-start-align.gs-visibleUrl").hide(),
    $("#cse-result").contents().find(".gsc-above-wrapper-area").hide(),
    $("#cse-result").contents().find(".gcsc-branding").hide(),
    $.each($("#cse-result").contents().find(".gs-bidi-start-align.gs-snippet"), function() {
        var n = $(this).text().length > 100 ? $(this).text().substring(0, 100) + "..." : $(this).text();
        $(this).text(n)
    })
}
function switchTabDataAjaxRequest(n, t) {
    var i = "", r = $(n).attr("div-id"), u;
    t != null && t != "" ? i = t : (i = $(n).attr("rel-url"),
    r = $(n).attr("div-id"),
    u = $(n).attr("element-group"),
    $('[element-group="' + u + '"]').removeClass("active"),
    $(n).addClass("active")),
    $.ajax({
        type: "GET",
        url: i
    }).done(function(n) {
        $("#" + r).text(""),
        $("#" + r).html(n)
    })
}
function applyPolling(n, t) {
    $(".table-poll-option").unbind("click"),
    $(".table-poll-option").click(function() {
        var n = $("#Validate").val();
        n == "true" ? ($(this).attr("disabled", "disabled"),
        submitPollVote($(this).attr("data-pollid"), $(this).attr("data-optionid"), $(this).attr("data-entityid"), $(this).attr("data-rowid"), $(this).parents(".resultHolder")),
        $(this).removeAttr("disabled")) : ShowLoginPopup()
    }),
    $(".poll-option").unbind("click"),
    $(".poll-option").click(function() {
        var n, i;
        $(this).parent().find("button").attr("disabled", !0),
        n = $("#Validate").val(),
        n == "true" ? ($(this).attr("disabled", "disabled"),
        i = $(this).attr("data-iscompanytable"),
        submitPollVote($(this).attr("data-pollid"), $(this).attr("data-optionid"), $(this).attr("data-entityid"), $(this).attr("data-rowid"), $(this).parents(".resultHolder"), i),
        $(this).removeAttr("disabled"),
        t != undefined && t != "" && location.reload(),
        $(this).parent().find("button").attr("disabled", !1)) : (ShowLoginPopup(),
        $(this).parent().find("button").attr("disabled", !1))
    })
}
function submitPollVote(n, t, i, r, u, f) {
    $.ajax({
        type: "POST",
        url: $("#pollsURL").val(),
        data: {
            pollID: n,
            pollOptionID: t,
            entityID: i,
            rowID: r,
            isCommentsPage: $("#isCommentsPage").val(),
            isHomePage: $("#isHomePage").val(),
            isCompanyTable: f
        },
        beforeSend: function() {
            $("#pollsLoader").show()
        }
    }).done(function(n) {
        var f;
        $("#pollsLoader").hide(),
        $(u).html(n),
        i == 3 && (t == 2 ? (f = $("#optMessage").val(),
        $("#tarea_0").attr("placeholder", f)) : t == 1 && (f = $("#pesMessage").val(),
        $("#tarea_0").attr("placeholder", f)),
        $("#hasVoted").val("true"),
        $("#pollNewComment").removeClass("disabled"),
        $("#postCommentPoll").removeClass("disabled")),
        i != 4 || $(location).attr("href").includes("poll/investor/opinions") || (t == 2 ? (f = $("#optMessage").val(),
        $("#tarea_0").attr("placeholder", f)) : t == 1 && (f = $("#pesMessage").val(),
        $("#tarea_0").attr("placeholder", f))),
        i == 4 && ($(location).attr("href").includes("poll/investor/opinions") || $(location).attr("href").includes("/2023-poll/")) && (t == 2 ? (f = $("#optMessage").val(),
        $("#streamer_companyBody").attr("placeholder", f)) : t == 1 && (f = $("#pesMessage").val(),
        $("#streamer_companyBody").attr("placeholder", f)),
        ShowCompanyCommentRow(r, u)),
        $("#tarea_0").removeClass("disabled"),
        $(".post-btn.disabled").removeClass("disabled"),
        checkCompanyCounts($("#currentMarket").val())
    })
}
function applyMarketClick() {
    $(".pMarket").click(function() {
        var n = $(this).attr("data-marketid")
          , t = $(".pollSelectionTab.active").attr("data-selectionID");
        companyPolls(n, null, null, t)
    })
}
function checkCompanyCounts(n) {
    $.ajax({
        type: "POST",
        url: $("#checkCompanyCountsURL").val(),
        data: {
            marketID: n
        }
    }).done(function(n) {
        n != null && n.Count != null && n.Count == 5 && pollTopOpinionWidget()
    })
}
function pollTopOpinionWidget() {
    $.ajax({
        type: "POST",
        url: $("#investorOpinionsWidgetURL").val(),
        beforeSend: function() {
            $("#pollsLoader").show()
        }
    }).done(function(n) {
        $("#pollTopOpinionWidget").html(n),
        $("html,body").animate({
            scrollTop: $("#pollTopOpinionWidget").offset().top
        }, "slow"),
        $("#pollsLoader").hide()
    })
}
function companyPolls(n, t, i, r, u) {
    $.ajax({
        type: "POST",
        url: $("#companyPollsURl").val(),
        data: {
            isActive: $("#pollIsActive").val(),
            marketID: n,
            selectionType: r,
            companyID: i,
            sectorID: t,
            argaamSectorID: u
        },
        beforeSend: function() {
            $("#companyPollsLoader").show()
        }
    }).done(function(n) {
        $("#poll_CompanyPolls").html(n),
        $("#companyPollsLoader").hide()
    })
}
function pollMarketCompanies(n, t, i, r, u) {
    $.ajax({
        type: "POST",
        url: $("#pollMarketCompaniesURL").val(),
        data: {
            isActive: $("#pollIsActive").val(),
            marketID: n,
            selectionType: r,
            companyID: i,
            sectorID: t,
            argaamSectorID: u
        },
        beforeSend: function() {
            $("#companyPollsLoader").show()
        }
    }).done(function(n) {
        $("#companiesListingHolder").html(n),
        $("#companyPollsLoader").hide(),
        ($("#IsSpecialPoll").val() == undefined || $("#IsSpecialPoll").val() == "") && loadStreamerComment()
    })
}
function pollWatchlistCompanies(n, t, i, r, u) {
    $.ajax({
        type: "POST",
        url: $("#pollWatchlistCompaniesURL").val(),
        data: {
            isActive: $("#pollIsActive").val(),
            marketID: n,
            selectionType: r,
            companyID: i,
            sectorID: t,
            argaamSectorID: u
        },
        beforeSend: function() {
            $("#companyPollsLoader").show()
        }
    }).done(function(n) {
        $("#companiesListingHolder").html(n),
        $("#companyPollsLoader").hide(),
        ($("#IsSpecialPoll").val() == undefined || $("#IsSpecialPoll").val() == "") && loadStreamerComment()
    })
}
function TradingViewPopUp(n) {
    widget && widget.showNoticeDialog({
        title: $("#TradingViewUpgradeMessageHeader").val(),
        body: $("#TradingViewUpgradeMessage").val() + " " + GetHistoricLowestSubscriptionPackage(n),
        callback: function() {
            widget.closePopupsAndDialogs()
        }
    })
}
function isGICSSectorBasedMarket(n) {
    var t = [3, 14];
    return $.inArray(parseInt(n), t) > -1 ? !0 : !1
}
function removeThis(n) {
    $(n).remove()
}
var USDollarCurId, ARRiyalCurId, tmDvPop, cidHd, maxDate, pc_chartCont, ajaxDataRenderer, autoRefresher, cms_Timeout, ma_Timeout, mi_Timeout, fu_Timeout, ao_Timeout, fr_Timeout, poll_Timeout, layoutWidth, windowWidth, validatorLogin, validatorForgotPassword, validatorRegister, GlobalNotificationPermission, userAgent, loaderforlogin, loaderforregister, loaderforfreeregister, loaderforforgot;
jQuery.fn.reverse = [].reverse,
USDollarCurId = 10,
ARRiyalCurId = 3,
cidHd = !1,
maxDate = null,
pc_chartCont = "",
ajaxDataRenderer = function(n) {
    var r = null;
    return $.ajax({
        async: !1,
        url: n,
        dataType: "json",
        success: function(n) {
            n[0].length > 0 ? (setMinAndMaxDateValToGlobVars(n),
            r = n) : r = [[null]]
        }
    }),
    r
}
,
function(n) {
    n.fn.getStyleObject = function() {
        var n = this.get(0), r, t = {}, f, u, e, i;
        if (window.getComputedStyle) {
            for (f = function(n, t) {
                return t.toUpperCase()
            }
            ,
            r = window.getComputedStyle(n, null),
            u = 0,
            e = r.length; u < e; u++) {
                var o = r[u]
                  , s = o.replace(/\-([a-z])/g, f)
                  , h = r.getPropertyValue(o);
                t[s] = h
            }
            return t
        }
        if (n.currentStyle) {
            for (i in n.currentStyle)
                t[i] = n.currentStyle[i];
            return t
        }
        if (n.style) {
            for (i in n.style)
                typeof n.style[i] != "function" && (t[i] = n.style[i]);
            return t
        }
        return t
    }
}(jQuery);
var selectedActionType = "topgainer"
  , selectedActionDiv = "marketMovementTopGainers"
  , SelectedForDate = "";
poll_Timeout = 100,
layoutWidth = 0,
windowWidth = 0,
GlobalNotificationPermission = "",
userAgent = navigator.userAgent || navigator.vendor || window.opera,
$(document).ready(function() {
    var n = $(".argaam-policy");
    $("#argaamPolicyAccpetButton").off().click(function() {
        var u = new Date, i, r;
        return u.setTime(u.getTime() + 31536e6),
        i = window.location.hostname,
        r = i.split("."),
        r.length > 1 && (i = "." + r.slice(r.length - 2).join(".")),
        document.cookie = "gdprAccepted=true;path=/;expires=" + u.toUTCString() + ";domain=" + i,
        n.hide(),
        !1
    }),
    document.cookie.indexOf("gdprAccepted=true") < 0 && n.show();
    $(".FiveNews .holder").on("mouseover", function() {
        $(".FiveNews .holder").removeClass("cardhover"),
        $("#bigImageSrc").attr("src", $(this).data("thumb")),
        $("#bigImageSrc").parent("a").attr("href", $(this).data("link")),
        $(this).addClass("cardhover")
    });
    $(".newsContentPane a").each(function() {
        $(this).text().length > 110 && $(this).addClass("count_text")
    })
}),
$(document).ready(function() {
    $(".sectionChanger").click(function() {
        var t = $(this).attr("data-section"), n;
        $("[data-section=" + t + "].sectionChanger ").removeClass("active"),
        $(this).addClass("active"),
        $("div[data-section=" + t + "]").hide(),
        $("#" + $(this).attr("data-sectionid")).show(),
        $(this).attr("data-fiscalperiodtypeid") == 4 && $("#" + $(this).attr("data-sectionid")).hasClass("yeardata") == !1 && $("#" + $(this).attr("data-sectionid")).addClass("yeardata"),
        n = $(this).attr("defaultyearselection"),
        typeof n != typeof undefined && n !== "" && $("#" + $(this).attr("data-sectionid")).find('.yearsTab button[relf-yearcount="' + n + '"]').click()
    }),
    $(".yearsTab button").click(function() {
        var t = $(this).attr("relf-sectionID"), i = $(this).attr("relf-years").split(","), n;
        for ($(".yearsTab button[relf-sectionID=" + t + "]").removeClass("active"),
        $(this).addClass("active"),
        $("table tbody tr", "#" + t).hide(),
        n = 0; n < i.length; n++)
            $("table tbody tr[rel-year=" + i[n] + "]", "#" + t).show()
    }),
    $(".displayChart").click(function() {
        var n = $(this).attr("rel-chartsectionid");
        n && ($(".chartSection[rel-chartsectionid=" + n + "]").toggle(),
        $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active"))
    })
}),
function(n) {
    jQuery.fn.doubleScroll = function(t) {
        var i = {
            contentElement: undefined,
            scrollCss: {
                "overflow-x": "auto",
                "overflow-y": "hidden"
            },
            contentCss: {
                "overflow-x": "auto",
                "overflow-y": "hidden"
            },
            onlyIfScroll: !0,
            resetOnWindowResize: !1,
            timeToWaitForResize: 30
        }, r;
        return n.extend(!0, i, t),
        n.extend(i, {
            topScrollBarMarkup: '<div class="doubleScroll-scroll-wrapper" style="height: 20px;"><div class="doubleScroll-scroll" style="height: 20px;"></div></div>',
            topScrollBarWrapperSelector: ".doubleScroll-scroll-wrapper",
            topScrollBarInnerSelector: ".doubleScroll-scroll"
        }),
        r = function(t, i) {
            var r, f, u;
            if (i.onlyIfScroll && t.get(0).scrollWidth <= t.width()) {
                t.prev(i.topScrollBarWrapperSelector).remove();
                return
            }
            r = t.prev(i.topScrollBarWrapperSelector),
            r.length == 0 && (r = n(i.topScrollBarMarkup),
            t.before(r),
            r.css(i.scrollCss),
            t.css(i.contentCss),
            r.bind("scroll.doubleScroll", function() {
                t.scrollLeft(r.scrollLeft())
            }),
            f = function() {
                r.scrollLeft(t.scrollLeft())
            }
            ,
            t.bind("scroll.doubleScroll", f)),
            u = i.contentElement !== undefined && t.find(i.contentElement).length !== 0 ? t.find(i.contentElement) : t.find(">:first-child"),
            n(i.topScrollBarInnerSelector, r).width(u.outerWidth()),
            r.width(t.width()),
            r.scrollLeft(t.scrollLeft())
        }
        ,
        this.each(function() {
            var t = n(this), u, f;
            r(t, i),
            i.resetOnWindowResize && (f = function() {
                r(t, i)
            }
            ,
            n(window).bind("resize.doubleScroll", function() {
                clearTimeout(u),
                u = setTimeout(f, i.timeToWaitForResize)
            }))
        })
    }
}(jQuery);
/*! vTicker 1.13
 http://richhollis.github.com/vticker/ | http://richhollis.github.com/vticker/license/ | based on Jubgits vTicker http://www.jugbit.com/jquery-vticker-vertical-news-ticker/ */
(function(n) {
    var r = {
        speed: 700,
        pause: 4e3,
        showItems: 1,
        mousePause: !0,
        height: 0,
        animate: !0,
        margin: 0,
        padding: 0,
        startPaused: !1
    }
      , t = {
        moveUp: function(n, i) {
            t.animate(n, i, "up")
        },
        moveDown: function(n, i) {
            t.animate(n, i, "down")
        },
        animate: function(t, i, r) {
            var f = t.itemHeight
              , e = t.options
              , u = t.element.children("ul")
              , o = "up" === r ? "li:first" : "li:last"
              , s = u.children(o).clone(!0);
            if (0 < e.height && (f = u.children("li:first").height()),
            f += e.margin + 2 * e.padding,
            "down" === r && u.css("top", "-" + f + "px").prepend(s),
            i && i.animate) {
                if (t.animating)
                    return;
                t.animating = !0,
                u.animate("up" === r ? {
                    top: "-=" + f + "px"
                } : {
                    top: 0
                }, e.speed, function() {
                    n(u).children(o).remove(),
                    n(u).css("top", "0px"),
                    t.animating = !1
                })
            } else
                u.children(o).remove(),
                u.css("top", "0px");
            "up" === r && s.appendTo(u)
        },
        nextUsePause: function() {
            var t = n(this).data("state")
              , r = t.options;
            t.isPaused || 2 > t.itemCount || i.next.call(this, {
                animate: r.animate
            })
        },
        startInterval: function() {
            var i = n(this).data("state")
              , r = this;
            i.intervalId = setInterval(function() {
                t.nextUsePause.call(r)
            }, i.options.pause)
        },
        stopInterval: function() {
            var t = n(this).data("state");
            t && (t.intervalId && clearInterval(t.intervalId),
            t.intervalId = void 0)
        },
        restartInterval: function() {
            t.stopInterval.call(this),
            t.startInterval.call(this)
        }
    }
      , i = {
        init: function(u) {
            var f, e, o;
            i.stop.call(this),
            f = jQuery.extend({}, r),
            u = n.extend(f, u),
            f = n(this),
            e = {
                itemCount: f.children("ul").children("li").length,
                itemHeight: 0,
                itemMargin: 0,
                element: f,
                animating: !1,
                options: u,
                isPaused: u.startPaused ? !0 : !1,
                pausedByCode: !1
            },
            n(this).data("state", e),
            f.css({
                overflow: "hidden",
                position: "relative"
            }).children("ul").css({
                position: "absolute",
                margin: 0,
                padding: 0
            }).children("li").css({
                margin: u.margin,
                padding: u.padding
            }),
            isNaN(u.height) || 0 === u.height ? (f.children("ul").children("li").each(function() {
                var t = n(this);
                t.height() > e.itemHeight && (e.itemHeight = t.height())
            }),
            f.children("ul").children("li").each(function() {
                n(this).height(e.itemHeight)
            }),
            f.height((e.itemHeight + (u.margin + 2 * u.padding)) * u.showItems + u.margin)) : f.height(u.height),
            o = this,
            u.startPaused || t.startInterval.call(o),
            u.mousePause && f.bind("mouseenter", function() {
                !0 !== e.isPaused && (e.pausedByCode = !0,
                t.stopInterval.call(o),
                i.pause.call(o, !0))
            }).bind("mouseleave", function() {
                (!0 !== e.isPaused || e.pausedByCode) && (e.pausedByCode = !1,
                i.pause.call(o, !1),
                t.startInterval.call(o))
            })
        },
        pause: function(t) {
            var i = n(this).data("state");
            if (i) {
                if (2 > i.itemCount)
                    return !1;
                (i.isPaused = t) ? n(this).addClass("paused") : n(this).removeClass("paused")
            }
        },
        next: function(i) {
            var r = n(this).data("state");
            if (r) {
                if (r.animating || 2 > r.itemCount)
                    return !1;
                t.restartInterval.call(this),
                t.moveUp(r, i)
            }
        },
        prev: function(i) {
            var r = n(this).data("state");
            if (r) {
                if (r.animating || 2 > r.itemCount)
                    return !1;
                t.restartInterval.call(this),
                t.moveDown(r, i)
            }
        },
        stop: function() {
            n(this).data("state") && t.stopInterval.call(this)
        }
    };
    n.fn.vTicker = function(t) {
        if (i[t])
            return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" != typeof t && t)
            n.error("Method " + t + " does not exist on jQuery.vTicker");
        else
            return i.init.apply(this, arguments)
    }
}
)(jQuery);
function icAutoComplete() {
    var n = "";
    $("[relf-autocomplete-source]").each(function() {
        var i = $(this).attr("id"), u = $(this).attr("relf-valueid"), r = $(this).attr("relf-tableName"), t;
        n = i,
        t = $(this).attr("relf-autocomplete-source"),
        t = t.replace("{lang}", $("#lang").val()).replace("{tableName}", r),
        $("#" + i).autocomplete({
            select: function(n, t) {
                return Compare(t.item.value),
                $(this).val(""),
                !1
            },
            source: icAutoCompleteJson(t)
        })
    }),
    $("#compareTextBox").html($("#" + n))
}
function SetAutoComplete() {
    textBox != undefined && textBox != "" && $("[relf-autocomplete-source]").each(function() {
        var n = $(this).attr("relf-valueid")
          , t = $(this).attr("relf-tableName");
        autoCompleteTextBoxID = textBox,
        $("#" + textBox).keydown(function(n) {
            if (n.keyCode == 51)
                return !1;
            clearTimeout(typingTimer)
        }),
        $("#" + textBox).keyup(function() {
            clearTimeout(typingTimer),
            typingTimer = setTimeout(doneTyping, doneTypingInterval)
        })
    })
}
function SetCompanyID(n) {
    var t = $("#tableName").val() + "ID";
    $("#" + t).val(n),
    Compare(n),
    $("#" + textBox).val(""),
    $("#searchChartElement").hide()
}
function doneTyping() {
    var i = $("#lang").val(), n = $("[relf-autocomplete-source]").attr("relf-autocomplete-source").replace("{lang}", i).replace("{tableName}", $("#tableName").val()), t = $.trim($("#" + textBox).val()), r;
    n = n.replace("{searchTerm}", encodeURIComponent(t)),
    t != "" ? r = $.ajax({
        type: "GET",
        dataType: "json",
        url: n,
        beforeSend: function() {}
    }).done(function(n) {
        $("#dvChartSearchTabs").html("");
        var t = $("<div>").attr("id", "Companies").addClass("content-holder");
        $("#dvChartSearchTabs").append(t),
        n.length != 0 ? $(n).each(function(n, i) {
            var r = $("<div>").addClass("table").append($("<div>").addClass("row").attr("style", "cursor: pointer;").append($("<a>").attr("title", i.label).attr("onclick", "SetCompanyID('" + i.value + "')").html(i.label)));
            $(t).append(r)
        }) : $(t).append($("<div>").addClass("no-results row").html(noRecordFound)),
        $("#searchChartElement").show()
    }).always(function() {}) : ($("#dvChartSearchTabs").html(""),
    $("#searchChartElement").hide())
}
function Compare(n) {
    $("#chartcurtain").css("display", "block"),
    chartCompareTimeOut = setTimeout(function() {
        var e = n.split("_"), r = e[0], t = e[1] + ",", i = "", u, f;
        r == "M" ? i = 1 : r == "S" ? i = 2 : r == "C" ? i = 3 : r == "IM" ? i = 9 : r == "CM" ? i = 6 : r == "FRM" ? (i = 8,
        u = activeParams.split("$"),
        t = "m_" + t + "$" + u[1]) : r == "FRC" ? (i = 8,
        u = activeParams.split("$"),
        t = "c_" + t + "$" + u[1]) : r == "FRS" ? (i = 8,
        u = activeParams.split("$"),
        t = "s_" + t + "$" + u[1]) : r == "FRF" ? (i = 8,
        u = activeParams.split("$"),
        t = u[0] + "$fr_" + t) : r == "FN" ? (i = 7,
        f = activeParams.split("$"),
        t = "f_" + t + "$v_" + f[1]) : r == "FV" && (i = 7,
        f = activeParams.split("$"),
        t = f[0] + "$v_" + t),
        GetCompareInteractiveChartData(i, t),
        compareInteractiveChartData != "" && DrawCompareChart(compareInteractiveChartData),
        activeCompareChartParams.push({
            chartType: i,
            paramValue: t
        }),
        $("#chartcurtain").css("display", "none")
    }, 200)
}
function DrawCompareChart(n) {
    var t = [];
    t.fieldMappings = [{
        fromField: "close",
        toField: "close"
    }, {
        fromField: "open",
        toField: "open"
    }, {
        fromField: "high",
        toField: "high"
    }, {
        fromField: "low",
        toField: "low"
    }, {
        fromField: "category",
        toField: "category"
    }, {
        fromField: "sma",
        toField: "sma"
    }, {
        fromField: "ema",
        toField: "ema"
    }, {
        fromField: "volume",
        toField: "volume"
    }, {
        fromField: "mfi",
        toField: "mfi"
    }, {
        fromField: "rsi",
        toField: "rsi"
    }, {
        fromField: "displaydate",
        toField: "displaydate"
    }, {
        fromField: "macd",
        toField: "macd"
    }, {
        fromField: "macdHistory",
        toField: "macdHistory"
    }, {
        fromField: "macdSignal",
        toField: "macdSignal"
    }, {
        fromField: "title",
        toField: "title"
    }, {
        fromField: "williamsR",
        toField: "williamsR"
    }, {
        fromField: "stochRSIFastK",
        toField: "stochRSIFastK"
    }, {
        fromField: "stochRSIFastD",
        toField: "stochRSIFastD"
    }],
    t.categoryField = "date",
    t.compared = !0,
    t.showInCompare = !0,
    t.title = n[0].title,
    t.dataProvider = n,
    chart.panels[0].stockLegend.periodValueText = "[[value]]",
    chart.panels[0].stockLegend.valueTextRegular = "[[value]]",
    chart.panels[0].stockLegend.legendValueText = "[[value]]",
    chart.panels[0].stockGraphs[0].balloonText = "[[close]]",
    chart.dataSets.push(t),
    chart && chart.validateData()
}
function ResetComparison() {
    $("#chartcurtain").css("display", "block"),
    activeCompareChartParams = [],
    chartComparisonResetTimeOut = setTimeout(function() {
        for (var n, t = 0; t < chart.dataSets.length; t++)
            t != 0 && (chart.dataSets[t] = []);
        activeChartType == 7 ? (n = $("#ddlFundFilters").val(),
        chart.panels[0].stockGraphs[0].balloonText = n + ":<b>[[close]]</b>",
        chart.panels[0].stockLegend.valueTextRegular = n + ":[[close]] | Date:[[category]]") : activeChartType == 8 ? (n = $("#ddlFinancialRatioFilters").val(),
        balloonText = n + ":<b>[[close]]</b>",
        valueTextRegular = n + ":[[close]] | Date:[[category]]") : (chart.panels[0].stockLegend.valueTextRegular = "O:[[open]] H:[[high]] L:[[low]] C:[[close]] | Date:[[category]]",
        chart.panels[0].stockGraphs[0].balloonText = "Open:<b>[[open]]</b><br>Close:<b>[[close]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b>"),
        chart && chart.validateData(),
        $("#chartcurtain").css("display", "none")
    }, 200)
}
function GetCompareInteractiveChartData(n, t) {
    var v;
    compareInteractiveChartData = [],
    interval = $("#intervals li a.active").attr("id"),
    period = $("#periods li a.active").attr("relf-value"),
    days = $("#periods li a.active").attr("relf-days"),
    graphType = $("#chartsetting li a.active").attr("id"),
    ChangeChartType($("#chartsetting li a.active"), !1);
    var u = $("#lang").val()
      , f = $("#longCycle").val() == undefined ? "0" : $("#longCycle").val()
      , e = $("#shortCycle").val() == undefined ? "0" : $("#shortCycle").val()
      , o = $("#signal").val() == undefined ? "0" : $("#signal").val()
      , s = $("#timePeriod").val() == undefined ? "0" : $("#timePeriod").val()
      , h = $("#mfiPeriod").val() == undefined ? "0" : $("#mfiPeriod").val()
      , c = $("#williamsRPeriod").val() == undefined ? "0" : $("#williamsRPeriod").val()
      , r = $("#stochRSITimePeriod").val() == undefined ? "0" : $("#stochRSITimePeriod").val()
      , l = $("#stochRSIFastKPeriod").val() == undefined ? "0" : $("#stochRSIFastKPeriod").val()
      , a = $("#stochRSIFastDPeriod").val() == undefined ? "0" : $("#stochRSIFastDPeriod").val()
      , i = "/{lang}/get-chart-data/{chartType}/{param}/{days}/{macdLongCycle}/{macdShortCycle}/{macdSignal}/{rsiTimePeriod}/{mfiPeriod}/{williamsRPeriod}/{stochRSITimePeriod}/{stochRSIFastKPeriod}/{stochRSIFastDPeriod}";
    i = i.replace("{lang}", u).replace("{chartType}", n).replace("{param}", t).replace("{days}", days).replace("{macdLongCycle}", f).replace("{macdShortCycle}", e).replace("{macdSignal}", o).replace("{rsiTimePeriod}", s).replace("{mfiPeriod}", h).replace("{williamsRPeriod}", c).replace("{stochRSITimePeriod}", r).replace("{stochRSITimePeriod}", r).replace("{stochRSIFastKPeriod}", l).replace("{stochRSIFastDPeriod}", a),
    v = $.ajax({
        url: i,
        type: "GET",
        async: !1
    }).done(function(n) {
        var t, u, f;
        if (n != null)
            for (t = 0; t <= n.length; t++)
                if (n[t] != null) {
                    var e = n[t][0]
                      , o = n[t][1]
                      , s = n[t][2]
                      , i = n[t][3]
                      , r = n[t][4];
                    minValue = n[t][5],
                    maxValue = n[t][6],
                    previousCloseStockPrice = n[t][7],
                    u = n[t][8],
                    f = n[t][9],
                    compareInteractiveChartData.push({
                        date: e,
                        open: o,
                        close: s,
                        high: i,
                        low: r,
                        max: i,
                        min: r,
                        category: u,
                        title: f,
                        volume: n[t][10],
                        macd: n[t][11],
                        macdSignal: n[t][12],
                        macdHistory: n[t][13],
                        rsi: n[t][14],
                        mfi: n[t][15],
                        williamsR: n[t][16],
                        stochRSIFastK: n[t][17],
                        stochRSIFastD: n[t][18],
                        ema: n[t][19],
                        sma: n[t][20],
                        amount: n[t][21]
                    })
                }
    }).always(function() {})
}
function icAutoCompleteJson(n) {
    var t = "";
    return $.ajax({
        url: n,
        cache: !1,
        async: !1,
        success: function(n) {
            t = n
        },
        error: function() {}
    }),
    t
}
function icDropDownListSettings() {
    var n = !1;
    $("[relf-select]").each(function() {
        n ? $(this).children().attr("disabled", "disabled") : n = !0
    })
}
function icFilterSettings() {
    $("select").change(function() {
        var n, t, i;
        activeChartType = $(this).parent().attr("relf-charttype"),
        n = this,
        $(this).attr("id") == "ddlCompanies" && activeChartType == 3 && GetCompanySplits(),
        $(this).attr("id") == "ddlCompanies" && activeChartType == 7 ? GetFundManagers() : $(this).attr("id") == "ddlConsumerCategories" && activeChartType == 14 ? GetConsumerMaterialsByCategory() : ($(this).attr("id") == "ddlRegions" && (t = $("#regions ul li a.active").attr("column-name"),
        i = "close",
        balloonText = t + " : <b>[[" + i + "]]</b>",
        valueTextRegular = t + " : [[" + i + "]] | Date:[[category]]"),
        $("#chartcurtain").css("display", "block"),
        setTimeout(function() {
            ChangeChartData(n, !1, !1),
            $(n).attr("id") == "ddlRegions" && ($(n).val() != "1" ? ($("#intervals li a[id='MM']")[0].onclick(),
            $("a#WW").parent("li").css("display", "none")) : ($("#intervals li a[id='WW']")[0].onclick(),
            $("a#WW").parent("li").css("display", "block"))),
            $("#chartcurtain").css("display", "none")
        }, 200),
        $("#ddlFinancialRatioFilters").val() != undefined && ($("#ddlFinancialRatioFilters").val() == "PETop50Companies" ? ($("#ddlCompanies").parent().prev().hide(),
        $("#ddlCompanies").parent().hide(),
        $("#listddlSectors").parent().hide(),
        $("#ddlMarkets-3").click()) : ($("#ddlCompanies").parent().prev().show(),
        $("#ddlCompanies").parent().show(),
        $("#listddlSectors").parent().show())))
    })
}
function GetFundManagers() {
    var n, t;
    $("#ddlFunds option").remove(),
    n = "/{lang}/get-funds-by-fundmanager/{fundManagerID}",
    n = n.replace("{lang}", $("#lang").val()).replace("{fundManagerID}", $("#ddlCompanies").val()),
    t = $.ajax({
        type: "GET",
        url: n
    }).done(function(n) {
        $(n).each(function(n, t) {
            $("#ddlFunds").append("<option value='" + t.value + "'>" + t.label + "</option>")
        })
    }).always(function() {
        $("#ddlFunds").change()
    })
}
function GetConsumerMaterialsByCategory() {
    var n, t;
    $("#ddlConsumerMaterials option").remove(),
    n = "/{lang}/get-consumer-materials-by-category/{consumerCategoryID}",
    n = n.replace("{lang}", $("#lang").val()).replace("{consumerCategoryID}", $("#ddlConsumerCategories").val()),
    t = $.ajax({
        type: "GET",
        url: n
    }).done(function(n) {
        n == "" && ChangeChartData($("#ddlConsumerMaterials"), !1, !1, !1),
        $(n).each(function(n, t) {
            $("#ddlConsumerMaterials").append("<option value='" + t.value + "'>" + t.label + "</option>")
        })
    }).always(function() {
        $("#ddlConsumerMaterials").change()
    })
}
function GetRegionByProduct(n, t) {
    var i = "/{lang}/get-regions-by-product/{categoryID}/{productID}", r;
    i = i.replace("{lang}", $("#lang").val()).replace("{categoryID}", n).replace("{productID}", t),
    r = $.ajax({
        type: "GET",
        url: i,
        async: !1
    }).done(function(n) {
        $("#regions").html(n)
    }).always(function() {
        activeRegionID = $("#regions a.active").attr("region-id")
    })
}
function GetMineralsForRigCount() {
    var n = "/{lang}/get-mineral-for-rigcount", t;
    n = n.replace("{lang}", $("#lang").val()),
    t = $.ajax({
        type: "GET",
        url: n,
        async: !1
    }).done(function(n) {
        $("#regions").html(n)
    }).always(function() {})
}
function GetRegionByOtherCommodities(n) {
    var t = "/{lang}/get-regions-by-other-commodity/{otherCommodityID}", i;
    t = t.replace("{lang}", $("#lang").val()).replace("{otherCommodityID}", n),
    i = $.ajax({
        type: "GET",
        url: t,
        async: !1
    }).done(function(n) {
        $("#regions").html(n)
    }).always(function() {
        activeRegionID = $("#regions a.active").attr("region-id")
    })
}
function ChangeChartData(n, t, i, r) {
    var o, s, h, c;
    if ($("#chartcurtain").css("display", "block"),
    o = "",
    s = "",
    t || i ? t && (o = $(n).attr("relf-value"),
    s = $(n).attr("relf-control-id")) : (o = $(n).val(),
    s = $(n).attr("id")),
    activeChartType == "6" && $(n).attr("relf-value") == "10" && (c_commodityID = 10),
    o != "") {
        var e = s
          , f = o
          , l = e + "_" + f
          , u = $(n).parent().attr("relf-chartType");
        f != undefined && f != "" && (h = $("#" + e + " :selected").text(),
        c = '<div style="display:none;" relf-id="searchedDivs" class="item"><input inputType="' + u + '" type="hidden" id="' + l + '" value="' + f + '">' + h + '<a onclick="icRemoveFilter(this)">×</a></div>',
        $("#presetSearchDivs").append(c)),
        u == 1 || u == 8 && e.indexOf("ddlMarkets") != -1 ? (marketIDs = "",
        activeRatioType = 1,
        $("#presetSearchDivs").children().children("input[id^='ddlSectors']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlSectors']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlCompanies']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlCompanies']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlGICSSectors']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlGICSSectors']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlInternationalMarkets']").parent().remove()) : u == 2 || u == 8 && e.indexOf("ddlSectors") != -1 ? (sectorIDs = "",
        activeRatioType = 2,
        $("#presetSearchDivs").children().children("input[id^='ddlMarkets']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlMarkets']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlCompanies']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlCompanies']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlGICSSectors']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlGICSSectors']").parent().remove()) : u == 12 || u == 8 && e.indexOf("ddlGICSSectors") != -1 ? (sectorIDs = "",
        activeRatioType = 2,
        $("#presetSearchDivs").children().children("input[id^='ddlMarkets']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlMarkets']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlCompanies']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlCompanies']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlSectors']").parent().length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlSectors']").parent().first().remove()) : u == 3 || u == 8 && e.indexOf("ddlCompanies") != -1 ? (companyIDs = "",
        activeRatioType = 3,
        $("#presetSearchDivs").children().children("input[id^='ddlSectors']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlSectors']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlMarkets']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlMarkets']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlGICSSectors']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlGICSSectors']").parent().remove()) : u == 13 && e.indexOf("ddlOtherCommodities") != -1 ? (commodityIDs = "",
        $("#presetSearchDivs").children().children("input[id^='ddlCommodityStockPrices']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlCommodityStockPrices']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlOtherCommodities']").parent().length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlOtherCommodities']").parent().first().remove()) : u == 6 && e.indexOf("ddlCommodityStockPrices") != -1 ? (otherCommoditiesIDs = "",
        $("#presetSearchDivs").children().children("input[id^='ddlOtherCommodities']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlOtherCommodities']").parent().remove(),
        $("#presetSearchDivs").children().children("input[id^='ddlCommodityStockPrices']").parent().length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlCommodityStockPrices']").parent().first().remove()) : u == 16 && e.indexOf("ddlRegions") != -1 && $("#presetSearchDivs").children().children("input[id^='ddlRegions']").parent().length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlRegions']").parent().first().remove(),
        $("[relf-id] input").each(function() {
            var i = $(this).attr("id"), n = $(this).val(), o, l, a, h, v, y, e, c, s, t;
            i.indexOf("Markets") != -1 && marketIDs.indexOf(n) == -1 && u == 1 && (marketIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlMarkets']").parent(),
            activeChartType = u,
            $("#ArgaamIndexChart").val() == undefined && GetChartTable(f, 0, 0, 0),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlMarkets']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            GetInteractiveChartData(u, marketIDs, !1, !1),
            $("#ddlCompanies").val("")),
            i.indexOf("Markets") != -1 && marketIDs.indexOf(n) == -1 && u == 8 && ($("#listddlSectors li.active").removeClass("active"),
            $("#ddlCompanies").val(""),
            marketIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlMarkets']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlMarkets']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            marketIDs.split(",").length > 2 ? (marketIDs = marketIDs.substring(marketIDs.length - 2, marketIDs.length - 1) + ",",
            marketIDs != "" && financialRatioFilterIDs != "" && (financialRatioParams = "m_" + marketIDs + "$fr_" + financialRatioFilterIDs,
            GetInteractiveChartData(u, financialRatioParams, !0, !1),
            GetChartTable(n, 1, 0, 0))) : marketIDs != "" && financialRatioFilterIDs != "" && (financialRatioParams = "m_" + marketIDs + "$fr_" + financialRatioFilterIDs,
            GetInteractiveChartData(u, financialRatioParams, !0, !1),
            GetChartTable(n, 1, 0, 0))),
            i.indexOf("Sectors") != -1 && sectorIDs.indexOf(n) == -1 && u == 8 && ($("#listddlMarkets li.active").removeClass("active"),
            $("#ddlCompanies").val(""),
            $("#listddlGICSSectors li.active").removeClass("active"),
            sectorIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlSectors']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlSectors']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            sectorIDs.split(",").length > 2 ? (sectorIDs = sectorIDs.substring(sectorIDs.length - 2, sectorIDs.length - 1) + ",",
            sectorIDs != "" && financialRatioFilterIDs != "" && (financialRatioParams = "s_" + sectorIDs + "$fr_" + financialRatioFilterIDs,
            GetInteractiveChartData(u, financialRatioParams, !0, !1),
            GetChartTable(n, 2, 0, 0))) : sectorIDs != "" && financialRatioFilterIDs != "" && (financialRatioParams = "s_" + sectorIDs + "$fr_" + financialRatioFilterIDs,
            GetInteractiveChartData(u, financialRatioParams, !0, !1),
            GetChartTable(n, 2, 0, 0))),
            i.indexOf("Sectors") != -1 && sectorIDs.indexOf(n) == -1 && u == 2 && (sectorIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlSectors']").parent(),
            activeChartType = u,
            GetChartTable(f, 0, 0, 0),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlSectors']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            sectorIDs.split(",").length > 2 ? (sectorIDs = sectorIDs.substring(sectorIDs.length - 2, sectorIDs.length - 1) + ",",
            GetInteractiveChartData(u, sectorIDs, !0, !1)) : GetInteractiveChartData(u, sectorIDs, !1, !1),
            $("#ddlCompanies").val("")),
            i.indexOf("GICSSectors") != -1 && gicsSectorIDs.indexOf(n) == -1 && u == 12 && (gicsSectorIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlGICSSectors']").parent(),
            activeChartType = u,
            GetChartTable(f, 0, 0, 0),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlGICSSectors']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            gicsSectorIDs.split(",").length > 2 ? (gicsSectorIDs = gicsSectorIDs.substring(gicsSectorIDs.length - 2, gicsSectorIDs.length - 1) + ",",
            GetInteractiveChartData(u, gicsSectorIDs, !0, !1)) : GetInteractiveChartData(u, gicsSectorIDs, !1, !1),
            $("#ddlCompanies").val("")),
            i.indexOf("Companies") != -1 && companyIDs.indexOf(n) == -1 && u == 3 && (companyIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlCompanies']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlCompanies']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            activeChartType = u,
            GetChartTable(f, 0, 0, 0),
            companyIDs.split(",").length > 2 ? (o = [],
            o = companyIDs.split(","),
            l = o[o.lastIndexOf("") - 1] + ",",
            GetInteractiveChartData(u, l, !0, !1)) : GetInteractiveChartData(u, companyIDs, !1, !1),
            $(".commodities a").parent().removeClass("active")),
            commodityIDs = "",
            i.indexOf("CommodityStockPrices") != -1 && commodityIDs.indexOf(n) == -1 && (commodityIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlCommodityStockPrices']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlCommodityStockPrices']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            commodityIDs.split(",").length > 2 ? (commodityIDs = commodityIDs.substring(commodityIDs.length - 2, commodityIDs.length - 1) + ",",
            GetInteractiveChartData(u, commodityIDs, !0, !1)) : GetInteractiveChartData(u, commodityIDs, !1, !1),
            activeChartType = u,
            GetChartTable(f, 0, 0, 0)),
            internationMarketIDs = "",
            i.indexOf("InternationalMarkets") != -1 && internationMarketIDs.indexOf(n) == -1 && u == 9 && (internationMarketIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlInternationalMarkets']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlInternationalMarkets']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            internationMarketIDs.split(",").length > 2 ? (internationMarketIDs = internationMarketIDs.substring(internationMarketIDs.length - 2, internationMarketIDs.length - 1) + ",",
            GetInteractiveChartData(u, internationMarketIDs, !0, !1)) : GetInteractiveChartData(u, internationMarketIDs, !1, !1),
            activeChartType = u,
            GetChartTable(f, 0, 0, 0)),
            i.indexOf("PetrochemicalPriceTypes") != -1 && petrochemicalPriceTypeIDs.indexOf(n) == -1 && r && ($("#regions").html(""),
            petrochemicalPriceTypeIDs = n + ",",
            chartData = [],
            $("#presetSearchDivs").children().children("input[id^='ddlPetrochemicalProducts']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlPetrochemicalProducts']").parent().remove(),
            t = $("#presetSearchDivs").children().children("input[id^='ddlPetrochemicalPriceTypes']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlPetrochemicalPriceTypes']").parent().first().remove(),
            n == 1 && (petrochemicalProductIDs = petrochemicalProductIDs == "" ? "0" : petrochemicalProductIDs,
            petrochemcialCategoryIDs = activeCategoryID == "" || activeCategoryID == undefined ? "0" : activeCategoryID + ","),
            activeCategoryID = activeCategoryID == "" || activeCategoryID == undefined ? "0" : activeCategoryID,
            $("#interactiveChartDiv").html(""),
            petrochemicalPriceTypeIDs.split(",").length > 2 ? (petrochemicalPriceTypeIDs = petrochemicalPriceTypeIDs.substring(petrochemicalPriceTypeIDs.length - 2, petrochemicalPriceTypeIDs.length - 1) + ",",
            regionIDs != "" && petrochemcialCategoryIDs != "" && petrochemicalProductIDs != "" && petrochemicalPriceTypeIDs != "" && (petrochemicalParams = "pt_" + petrochemicalPriceTypeIDs + "$r_" + regionIDs + "$c_" + petrochemcialCategoryIDs + "$p_" + petrochemicalProductIDs,
            GetInteractiveChartData(u, petrochemicalParams, !0, !1),
            GetChartTable(0, 0, activeCategoryID, 1))) : regionIDs != "" && petrochemcialCategoryIDs != "" && petrochemicalProductIDs != "" && petrochemicalPriceTypeIDs != "" && (petrochemicalParams = "pt_" + petrochemicalPriceTypeIDs + "$r_" + regionIDs + "$c_" + petrochemcialCategoryIDs + "$p_" + petrochemicalProductIDs,
            a = $("#ArgaamIndexChart").val(),
            a != undefined ? GetInteractiveChartData(4, petrochemicalParams, !1, !1) : (GetInteractiveChartData(u, petrochemicalParams, !1, !1),
            GetChartTable(0, 0, activeCategoryID, 1))),
            petrochemicalPriceTypeIDs = "4"),
            i.indexOf("PetrochemicalProducts") != -1 && petrochemicalProductIDs.indexOf(n) == -1 && (petrochemicalProductIDs = n + ",",
            petrochemcialCategoryIDs = activeCategoryID + ",",
            petrochemicalPriceTypeIDs = "4,",
            activePetrochemicalPriceTypeID = petrochemicalPriceTypeIDs,
            activePetrochemicalProductID = petrochemicalProductIDs.replace(",", ""),
            chartData = [],
            GetRegionByProduct(activeCategoryID, activePetrochemicalProductID),
            regionIDs = activeRegionID + ",",
            $("#presetSearchDivs").children().children("input[id^='ddlPetrochemicalPriceTypes']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlPetrochemicalPriceTypes']").parent().remove(),
            t = $("#presetSearchDivs").children().children("input[id^='ddlPetrochemicalProducts']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlPetrochemicalProducts']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            petrochemicalProductIDs.split(",").length > 2 ? (petrochemicalProductIDs = petrochemicalProductIDs.substring(petrochemicalProductIDs.length - 2, petrochemicalProductIDs.length - 1) + ",",
            regionIDs != "" && petrochemcialCategoryIDs != "" && petrochemicalProductIDs != "" && petrochemicalPriceTypeIDs != "" && (petrochemicalParams = "pt_" + petrochemicalPriceTypeIDs + "$r_" + regionIDs + "$c_" + petrochemcialCategoryIDs + "$p_" + petrochemicalProductIDs,
            GetInteractiveChartData(u, petrochemicalParams, !0, !1),
            GetChartTable(n, activeRegionID, activeCategoryID, "4"))) : regionIDs != "" && petrochemcialCategoryIDs != "" && petrochemicalProductIDs != "" && petrochemicalPriceTypeIDs != "" && (petrochemicalParams = "pt_" + petrochemicalPriceTypeIDs + "$r_" + regionIDs + "$c_" + petrochemcialCategoryIDs + "$p_" + petrochemicalProductIDs,
            GetInteractiveChartData(u, petrochemicalParams, !0, !1),
            GetChartTable(n, activeRegionID, activeCategoryID, "4"))),
            i.indexOf("OtherCommodities") != -1 && otherCommoditiesIDs.indexOf(n) == -1 && (otherCommoditiesIDs = n + ",",
            activeOtherCommoditiesID = otherCommoditiesIDs.replace(",", ""),
            chartData = [],
            regionIDs = activeRegionID + ",",
            $("#presetSearchDivs").children().children("input[id^='ddlCommodityStockPrices']").parent().length != 0 && $("#presetSearchDivs").children().children("input[id^='ddlCommodityStockPrices']").parent().remove(),
            t = $("#presetSearchDivs").children().children("input[id^='ddlOtherCommodities']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlOtherCommodities']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            otherCommoditiesIDs.split(",").length > 2 ? (otherCommoditiesIDs = otherCommoditiesIDs.substring(otherCommoditiesIDs.length - 2, otherCommoditiesIDs.length - 1) + ",",
            regionIDs != "" && otherCommoditiesIDs != "" && (otherCommoditiesParams = "r_" + regionIDs + "$ocid_" + otherCommoditiesIDs,
            activeRegionID = regionIDs,
            GetInteractiveChartData(u, otherCommoditiesParams, !0, !1),
            GetChartTable(n, activeRegionID, "", "", 13))) : activeRegionID != undefined && activeRegionID != "0" ? (regionIDs = "2",
            regionIDs != "" && otherCommoditiesIDs != "" && (otherCommoditiesParams = "r_" + regionIDs + "$ocid_" + otherCommoditiesIDs,
            activeRegionID = regionIDs,
            GetInteractiveChartData(u, otherCommoditiesParams, !0, !1),
            GetChartTable(n, activeRegionID, "", "", 13))) : otherCommoditiesIDs != "" && (GetInteractiveChartData(u, otherCommoditiesIDs, !1, !1),
            GetChartTable(n, "", "", "", 13))),
            i.indexOf("Funds") != -1 && fundIDs.indexOf(n) == -1 && (fundIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlFunds']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlFunds']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            fundIDs.split(",").length > 2 ? (fundIDs = fundIDs.substring(fundIDs.length - 2, fundIDs.length - 1) + ",",
            fundIDs != "" && fundFilterIDs != "" && (fundParams = "f_" + fundIDs + "$v_" + fundFilterIDs,
            GetInteractiveChartData(u, fundParams, !0, !1),
            GetChartTable($("#ddlFunds").val(), 0, 0, 0))) : fundIDs != "" && fundFilterIDs != "" && (fundParams = "f_" + fundIDs + "$v_" + fundFilterIDs,
            GetInteractiveChartData(u, fundParams, !0, !1),
            GetChartTable($("#ddlFunds").val(), 0, 0, 0))),
            i.indexOf("FundFilters") != -1 && fundFilterIDs.indexOf(n) == -1 && (balloonText = n + ":<b>[[close]]",
            fundFilterIDs = n + ",",
            valueTextRegular = n + ":[[close]] | Date: [[category]]",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlFundFilters']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlFundFilters']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            fundFilterIDs.split(",").length > 2 ? (fundFilterIDs = fundFilterIDs.substring(fundFilterIDs.length - 2, fundFilterIDs.length - 1) + ",",
            fundIDs != "" && fundFilterIDs != "" && (fundParams = "f_" + fundIDs + "$v_" + fundFilterIDs,
            GetInteractiveChartData(u, fundParams, !0, !1),
            GetChartTable($("#ddlFunds").val(), 0, 0, 0))) : fundIDs != "" && fundFilterIDs != "" && (fundParams = "f_" + fundIDs + "$v_" + fundFilterIDs,
            GetInteractiveChartData(u, fundParams, !0, !1),
            GetChartTable($("#ddlFunds").val(), 0, 0, 0))),
            i.indexOf("ddlCompanies") != -1 && companyIDs.indexOf(n) == -1 && u == 8 && ($("#listddlSectors li.active").removeClass("active"),
            $("#listddlMarkets li.active").removeClass("active"),
            $("#listddlGICSSectors li.active").removeClass("active"),
            companyIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlCompanies']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlCompanies']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            companyIDs.split(",").length > 2 ? (companyIDs = companyIDs.substring(companyIDs.length - 2, companyIDs.length - 1) + ",",
            companyIDs != "" && financialRatioFilterIDs != "" && (financialRatioParams = "c_" + companyIDs + "$fr_" + financialRatioFilterIDs,
            GetInteractiveChartData(u, financialRatioParams, !0, !1),
            GetChartTable($("#ddlCompanies").val(), 3, 0, 0))) : companyIDs != "" && financialRatioFilterIDs != "" && (financialRatioParams = "c_" + companyIDs + "$fr_" + financialRatioFilterIDs,
            GetInteractiveChartData(u, financialRatioParams, !0, !1),
            GetChartTable($("#ddlCompanies").val(), 3, 0, 0))),
            i.indexOf("ddlFinancialRatioFilters") != -1 && financialRatioFilterIDs.replace(",", "") != n && (balloonText = n + ":<b>[[close]]",
            financialRatioFilterIDs = n + ",",
            n.toLowerCase() == "marketvalue" ? (h = $("#ResourceMarketValue").val(),
            v = $("#MarketValueRK").val(),
            valueTextRegular = "[[close]] " + h + " | Date: [[category]]",
            y = $("#ddlFinancialRatioFilters").val(),
            balloonText = v + "<br/><b>[[close]] " + h + "</b>") : valueTextRegular = n + ":[[close]] | Date: [[category]]",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlFinancialRatioFilters']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlFinancialRatioFilters']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            financialRatioFilterIDs.split(",").length > 2 ? (financialRatioFilterIDs = financialRatioFilterIDs.substring(financialRatioFilterIDs.length - 2, financialRatioFilterIDs.length - 1) + ",",
            (companyIDs != "" || marketIDs != "" || sectorIDs) && financialRatioFilterIDs != "" && (e = "",
            activeRatioType == 1 ? (financialRatioParams = "m_" + marketIDs + "$fr_" + financialRatioFilterIDs,
            e = marketIDs.replace(",", "")) : activeRatioType == 2 ? (financialRatioParams = "s_" + sectorIDs + "$fr_" + financialRatioFilterIDs,
            e = sectorIDs.replace(",", "")) : (financialRatioParams = "c_" + companyIDs + "$fr_" + financialRatioFilterIDs,
            e = companyIDs.replace(",", "")),
            GetInteractiveChartData(u, financialRatioParams, !0, !1),
            GetChartTable(e, activeRatioType, 0, 0))) : (companyIDs != "" || marketIDs != "" || sectorIDs) && financialRatioFilterIDs != "" && (e = "",
            activeRatioType == 1 ? (financialRatioParams = "m_" + marketIDs + "$fr_" + financialRatioFilterIDs,
            e = marketIDs.replace(",", "")) : activeRatioType == 2 ? (financialRatioParams = "s_" + sectorIDs + "$fr_" + financialRatioFilterIDs,
            e = sectorIDs.replace(",", "")) : (financialRatioParams = "c_" + companyIDs + "$fr_" + financialRatioFilterIDs,
            e = companyIDs.replace(",", "")),
            GetInteractiveChartData(u, financialRatioParams, !0, !1),
            GetChartTable(e, activeRatioType, 0, 0))),
            shippingIDs = "",
            i.indexOf("Shippings") != -1 && shippingIDs.indexOf(n) == -1 && (shippingIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlShippings']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlShippings']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            shippingIDs.split(",").length > 2 ? (shippingIDs = shippingIDs.substring(shippingIDs.length - 2, shippingIDs.length - 1) + ",",
            GetInteractiveChartData(u, shippingIDs, !0, !1)) : GetInteractiveChartData(u, shippingIDs, !1, !1),
            activeChartType = u,
            GetChartTable(f, 0, 0, 0)),
            saiborRatesIDs = "",
            i.indexOf("SaiborRates") != -1 && saiborRatesIDs.indexOf(n) == -1 && u == 11 && (saiborRatesIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlSaiborRatesView']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlSaiborRatesView']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            saiborRatesIDs.split(",").length > 2 ? (saiborRatesIDs = saiborRatesIDs.substring(saiborRatesIDs.length - 2, saiborRatesIDs.length - 1) + ",",
            GetInteractiveChartData(u, saiborRatesIDs, !0, !1)) : GetInteractiveChartData(u, saiborRatesIDs, !1, !1),
            activeChartType = u,
            f = f == "OverNightRatePercentage" || f == 0 ? 0 : f == "OneMonthPercentage" || f == 1 ? 1 : f == "TwoMonthPercentage" || f == 2 ? 2 : f == "ThreeMonthPercentage" || f == 3 ? 3 : f == "SixMonthPercentage" || f == 6 ? 6 : f == "OneWeekPercentage" || f == 7 ? 7 : f == "NineMonthPercentage" || f == 9 ? 9 : 12,
            GetChartTable(f, 0, 0, 0)),
            consumerMaterialIDs = "",
            i.indexOf("ConsumerMaterials") != -1 && consumerMaterialIDs.indexOf(n) == -1 && (consumerMaterialIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlConsumerMaterials']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlConsumerMaterials']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            consumerMaterialIDs.split(",").length > 2 ? (consumerMaterialIDs = consumerMaterialIDs.substring(consumerMaterialIDs.length - 2, consumerMaterialIDs.length - 1) + ",",
            consumerCategoryIDs = $("#ddlConsumerCategories").val() + ",",
            s = "cc_" + consumerCategoryIDs + "$cm_" + consumerMaterialIDs,
            GetInteractiveChartData(u, s, !0, !1)) : (c = $("#ddlConsumerMaterials").val() == null ? -1 : $("#ddlConsumerMaterials").val().length,
            c == -1 && (f = 0),
            consumerMaterialIDs = consumerMaterialIDs.substring(consumerMaterialIDs.length - (c + 1), consumerMaterialIDs.length - 1) + ",",
            consumerCategoryIDs = $("#ddlConsumerCategories").val() + ",",
            s = "cc_" + consumerCategoryIDs + "$cm_" + consumerMaterialIDs,
            GetInteractiveChartData(u, s, !0, !1)),
            activeChartType = u,
            GetChartTable(f, 0, $("#ddlConsumerCategories").val(), 0)),
            repoRatesIDs = "",
            i.indexOf("RepoItems") != -1 && repoRatesIDs.indexOf(n) == -1 && ($("#chartsetting li .active").removeClass("active"),
            $("#chartsetting li #line").addClass("active"),
            $("#chartsetting_sel").text($("#chartsetting li a.active span").text()),
            repoRatesIDs = n + ",",
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlRepoItems']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlRepoItems']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            repoRatesIDs.split(",").length > 2 ? (repoRatesIDs = repoRatesIDs.substring(repoRatesIDs.length - 2, repoRatesIDs.length - 1) + ",",
            GetInteractiveChartData(u, repoRatesIDs, !0, !1)) : GetInteractiveChartData(u, repoRatesIDs, !1, !1),
            GetChartTable(f, 0, 0, 0)),
            i.indexOf("ddlRegions") != -1 && (regionIDAndMineral = n + "," + $("#regions ul li a.active").attr("column-name"),
            chartData = [],
            t = $("#presetSearchDivs").children().children("input[id^='ddlRegions']").parent(),
            t.length > 1 && $("#presetSearchDivs").children().children("input[id^='ddlRegions']").parent().first().remove(),
            $("#interactiveChartDiv").html(""),
            GetInteractiveChartData(u, regionIDAndMineral, !1, !1),
            activeChartType = u,
            GetChartTable(f, n, n, 0))
        })
    }
}
function GetChartByList(n, t) {
    $("ul[id^='list']").each(function() {
        $(this).children().removeClass("active")
    }),
    $(n).parent().parent().children().removeClass("active"),
    $(n).parent().addClass("active"),
    activeChartType = $(n).parent().attr("relf-charttype"),
    clearTimeout(gcByListTimeOut),
    $("#chartcurtain").css("display", "block"),
    activeChartType == "6" && ($("#candlestick").show(),
    $("#ohlc").show(),
    $("#compareTextBox").show(),
    balloonText = "Open:<b>[[open]]</b><br>Close:<b>[[close]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b>",
    valueTextRegular = "O:[[open]] H:[[high]] L:[[low]] C:[[close]] | Date:[[category]]",
    $("#regions").html("")),
    activeChartType == "13" && (activeOtherCommoditiesID = $(n).attr("relf-value"),
    $("#candlestick").hide(),
    $("#ohlc").hide(),
    $("#compareTextBox").hide(),
    $("#line").addClass("active"),
    GetRegionByOtherCommodities(activeOtherCommoditiesID),
    $(n).attr("id") != "ddlOtherCommodities-3" ? (valueTextRegular = "Average Value:[[close]] High:[[high]] Low:[[low]] | Date:[[category]]",
    balloonText = "Average Value: <b>[[close]]</b><br/>High: <b>[[high]]</b><br/>Low: <b>[[low]]</b><br/>Date: [[category]]") : (valueTextRegular = "Prices:[[close]] | Date:[[category]]",
    balloonText = "Prices: <b>[[close]]</b><br/>Date: [[category]]")),
    gcByListTimeOut = setTimeout(function() {
        ChangeChartData(n, !0, !1, t),
        $("#chartcurtain").css("display", "none")
    }, 200)
}
function GetChartByAccordion(n) {
    var u = $(n).attr("state"), e = $(n).attr("relf-control-id"), r = $(n).attr("relf-value"), t = $(n).attr("relf-control-id"), i, f;
    u == "close" ? (activeCategoryID = r,
    petrochemicalPriceTypeIDs = $("[relf-control-id='ddlPetrochemicalPriceTypes']").parent().hasClass("active") ? "1" : "4,",
    activePetrochemicalPriceTypeID = petrochemicalPriceTypeIDs,
    $("[relf-accordion]").each(function() {
        $(this).removeClass("active");
        var n = $(this).children().attr("relf-control-id");
        $("#" + n).html(""),
        $("#" + n).addClass("n-display")
    }),
    $(n).parent().addClass("active"),
    $(n).attr("state", "open"),
    i = "/{lang}/get-petrochemical-products-by-category-for-accordion/{categoryID}",
    i = i.replace("{lang}", $("#lang").val()).replace("{categoryID}", r),
    f = $.ajax({
        type: "GET",
        url: i
    }).done(function(n) {
        $("#" + t).html(n),
        $("#" + t).removeClass("n-display")
    })) : (activeCategoryID = "0",
    $(n).attr("state", "close"),
    $(n).parent().removeClass("active"),
    $("#" + t).html(""),
    $("#" + t).addClass("n-display"))
}
function icRemoveFilter(n) {
    var i = $(n).siblings("input")
      , r = $(i).attr("id")
      , f = $(i).attr("inputType")
      , u = $(i).val() + ","
      , t = "";
    r.indexOf("Markets") != -1 && ($("#interactiveChartDiv").html(""),
    t = marketIDs.replace(u, "")),
    r.indexOf("Sectors") != -1 && ($("#interactiveChartDiv").html(""),
    t = sectorIDs.replace(u, "")),
    r.indexOf("Companies") != -1 && ($("#interactiveChartDiv").html(""),
    t = companyIDs.replace(u, "")),
    GetInteractiveChartData(f, t, !0),
    $(n).parent().remove()
}
function GetChartByRegions(n) {
    chartData = [],
    $("#regions a").removeClass("active"),
    $(n).addClass("active"),
    activePetrochemicalPriceTypeID = $(n).attr("price-type"),
    petrochemicalPriceTypeIDs = activePetrochemicalPriceTypeID + ",",
    activeRegionID = $(n).attr("region-id"),
    regionIDs = activeRegionID + ",",
    activePetrochemicalProductID = $(n).attr("product-id"),
    petrochemicalProductIDs = activePetrochemicalProductID + ",",
    activeCategoryID = $(n).attr("category-id"),
    petrochemcialCategoryIDs = activeCategoryID + ",",
    petrochemicalParams = "pt_" + petrochemicalPriceTypeIDs + "$r_" + regionIDs + "$c_" + petrochemcialCategoryIDs + "$p_" + petrochemicalProductIDs,
    GetInteractiveChartData(activeChartType, petrochemicalParams, !0, !1),
    GetChartTable(activePetrochemicalProductID, activeRegionID, activeCategoryID, activePetrochemicalPriceTypeID)
}
function GetChartByMinerals(n) {
    $("#regions ul li a").removeClass("active"),
    $(n).addClass("active");
    var t = $(n).attr("column-name")
      , r = $("#ddlRegions")
      , t = $("#regions ul li a.active").attr("column-name")
      , i = "close";
    balloonText = t + " : <b>[[" + i + "]]</b>",
    valueTextRegular = t + " : [[" + i + "]] | Date:[[category]]",
    $("#chartcurtain").css("display", "block"),
    setTimeout(function() {
        ChangeChartData(r, !1, !1),
        $("#chartcurtain").css("display", "none")
    }, 200)
}
function GetOtherCommodityChartByRegions(n) {
    chartData = [],
    $("#regions a").removeClass("active"),
    $(n).addClass("active"),
    activeOtherCommoditiesID = $(n).attr("othercommodity-id"),
    activeRegionID = $(n).attr("region-id"),
    regionIDs = activeRegionID + ",",
    otherCommoditiesIDs = activeOtherCommoditiesID,
    otherCommoditiesParams = "r_" + regionIDs + "$ocid_" + otherCommoditiesIDs,
    GetInteractiveChartData(activeChartType, otherCommoditiesParams, !0, !1),
    GetChartTable(activeOtherCommoditiesID, activeRegionID, "", "", 13)
}
function SetAccordion(n) {
    var t = $(n).attr("state");
    t == "open" ? ($(n).parent().removeClass("active"),
    $(n).attr("state", "close"),
    $("#listddlSectors").addClass("n-display")) : ($(n).parent().addClass("active"),
    $(n).attr("state", "open"),
    $("#listddlSectors").removeClass("n-display"))
}
function DrawIntraDayChart(n, t) {
    var k = $("#ArgaamIndexChart").val(), u = "right", y = 25, v = 55, c, h, i, l, s, e, r, d, b, o, a;
    for (k != undefined && $("#lang").val() == "en" && (u = "left",
    y = 55,
    v = 25),
    chart = [],
    c = [],
    h = !0,
    i = 0; i < t.length; i++)
        h ? (l = !1,
        s = !1,
        h = !1) : (l = !0,
        s = !0),
        c.push({
            fieldMappings: [{
                fromField: "close",
                toField: "close"
            }, {
                fromField: "open",
                toField: "open"
            }, {
                fromField: "high",
                toField: "high"
            }, {
                fromField: "low",
                toField: "low"
            }, {
                fromField: "category",
                toField: "category"
            }, {
                fromField: "sma",
                toField: "sma"
            }, {
                fromField: "ema",
                toField: "ema"
            }, {
                fromField: "volume",
                toField: "volume"
            }, {
                fromField: "amount",
                toField: "amount"
            }, {
                fromField: "mfi",
                toField: "mfi"
            }, {
                fromField: "rsi",
                toField: "rsi"
            }, {
                fromField: "displaydate",
                toField: "displaydate"
            }, {
                fromField: "macd",
                toField: "macd"
            }, {
                fromField: "macdHistory",
                toField: "macdHistory"
            }, {
                fromField: "macdSignal",
                toField: "macdSignal"
            }, {
                fromField: "title",
                toField: "title"
            }, {
                fromField: "williamsR",
                toField: "williamsR"
            }, {
                fromField: "stochRSIFastK",
                toField: "stochRSIFastK"
            }, {
                fromField: "stochRSIFastD",
                toField: "stochRSIFastD"
            }],
            dataProvider: t[i],
            categoryField: "date",
            compared: l,
            showInCompare: s,
            title: t[i][0].title == "نمو" ? "نمو حد أعلى" : t[i][0].title == "Nomu" ? "NomuC" : t[i][0].title
        });
    guide = new AmCharts.Guide,
    e = [],
    (activeChartType == 1 || activeChartType == 2 || activeChartType == 3) && previousCloseStockPrice != 0 && $("#periods li a.active").attr("relf-value") == "1D" && (guide = {
        fillAlpha: 0,
        value: previousCloseStockPrice,
        lineColor: "black",
        lineAlpha: 1,
        lineThickness: 1,
        boldLabel: !1,
        parseDate: !1,
        dashLength: 4,
        inside: !0,
        label: previousCloseStockPrice,
        labelRotation: 180,
        position: $("#lang").val() == "ar" ? "left" : "right",
        date: new Date(2015,2,22,2,0)
    },
    e = {
        guides: [guide]
    });
    var f = []
      , p = new AmCharts.StockPanel
      , w = new AmCharts.StockPanel;
    p = {
        showCategoryAxis: !0,
        title: "",
        percentHeight: 70,
        prefixesOfBigNumbers: [{
            number: 1e6,
            prefix: "M"
        }],
        stockGraphs: graph,
        stockLegend: {
            valueTextRegular: valueTextRegular,
            valueTextComparing: "[[percents.value]]%",
            markerType: "circle",
            align: "left",
            markerSize: 8,
            periodValueText: "[[value.close]]",
            equalWidth: !0
        },
        valueAxes: [e]
    },
    w = {
        showCategoryAxis: !0,
        title: "volume",
        percentHeight: 30,
        prefixesOfBigNumbers: [{
            number: 1e6,
            prefix: "M"
        }],
        stockGraphs: [{
            id: "volume",
            title: "Volume",
            valueField: "volume",
            type: "column",
            lineThickness: 1,
            lineColor: "blue",
            lineThickness: 0,
            fillAlphas: .5,
            showBalloon: !0
        }],
        stockLegend: {
            valueTextRegular: "[[volume]]",
            markerType: "circle",
            align: "left",
            markerSize: 8,
            periodValueText: "[[value.close]]"
        }
    },
    f.push(p),
    isVolumePanelAllowed && (f.push(w),
    $("#interactiveChartDiv").css("height", "440px")),
    setTimeout(function() {
        $("#chartcurtain").css("display", "none")
    }, 2e3),
    activeChartType == 16 ? r = {
        axisAlpha: 1,
        inside: !1,
        position: u,
        maximum: maxValue
    } : activeChartType != 6 ? r = {
        axisAlpha: 1,
        inside: !1,
        position: u
    } : (b = GetMaximumValue(maxValue),
    r = {
        axisAlpha: 1,
        inside: !1,
        position: u,
        maximum: b
    }),
    o = !0,
    document.location.href.indexOf("chart/widget") != -1 && (o = !1),
    a = 1,
    interval && $("#interactiveChartTabs li a.active").attr("relf-chart-type") == "16" && interval == "WW" && (a = 0),
    chart = AmCharts.makeChart("interactiveChartDiv", {
        type: "stock",
        theme: $("#theme").val() == undefined ? "none" : $("#theme").val(),
        pathToImages: "/Scripts/amcharts/images/",
        dataSets: c,
        panels: f,
        valueAxesSettings: r,
        categoryAxesSettings: {
            parseDates: !0,
            minPeriod: "DD",
            showLastLabel: !0,
            showFirstLabel: !0,
            equalSpacing: !0,
            gridPosition: "start",
            dateFormats: [{
                period: "fff",
                format: "JJ:NN:SS"
            }, {
                period: "ss",
                format: "JJ:NN:SS"
            }, {
                period: "mm",
                format: "JJ:NN"
            }, {
                period: "hh",
                format: "JJ:NN"
            }, {
                period: "DD",
                format: "MMM DD"
            }, {
                period: "WW",
                format: "MMM DD"
            }, {
                period: "MM",
                format: "MMM"
            }, {
                period: "YYYY",
                format: "YYYY"
            }],
            axisColor: "#DADADA",
            autoGridCount: !1,
            gridCount: 18,
            markPeriodChange: !0,
            maxPeriod: "YYYY",
            boldPeriodBeginning: !0,
            startOnAxis: !0,
            equalSpacing: !0,
            groupToPeriods: [interval],
            maxSeries: a
        },
        chartCursorSettings: {
            valueBalloonsEnabled: !0,
            bulletsEnabled: !0,
            bulletSize: 8,
            categoryBalloonEnabled: !0,
            cursorPosition: "mouse",
            cursorColor: "#EE7B0B",
            width: 3,
            graphBulletSize: 1,
            cursorAlpha: .5,
            categoryBalloonEnabled: !0,
            valueLineBalloonEnabled: !0,
            valueLineEnabled: !0,
            categoryBalloonDateFormats: [{
                period: "YYYY",
                format: "YYYY"
            }, {
                period: "MM",
                format: "MMM, YYYY"
            }, {
                period: "WW",
                format: "MMM DD, YYYY"
            }, {
                period: "DD",
                format: "MMM DD, YYYY"
            }, {
                period: "hh",
                format: "MMM DD, YYYY JJ:NN"
            }, {
                period: "mm",
                format: "MMM DD, YYYY JJ:NN"
            }, {
                period: "ss",
                format: "JJ:NN:SS"
            }, {
                period: "fff",
                format: "JJ:NN:SS"
            }],
            zoomable: zoomable,
            pan: pan
        },
        chartScrollbarSettings: {
            backgroundColor: "#f4cc75",
            color: "#000000",
            lineColor: "#f9c584",
            lineThickness: 4.5,
            graphFillColor: "#f9c584",
            selectedBackgroundColor: "#FEF1E5",
            selectedGraphFillAlpha: .4,
            selectedGraphFillColor: "#EE7B0B",
            selectedGraphLineColor: "#1A5488",
            selectedGraphLineThickness: 1.5,
            graphLineAlpha: 1,
            graphType: "line",
            useDataSetColors: !1,
            updateOnReleaseOnly: !0,
            graph: "g1",
            enabled: o
        },
        panelsSettings: {
            usePrefixes: !0,
            marginLeft: y,
            marginRight: v
        }
    }),
    AmCharts.checkEmptyData = function(n) {
        var t, i;
        n.panels.length != 0 && n.panels[0].dataProvider == 0 && (n.panels[0].valueAxes[0].minimum = 0,
        n.panels[0].valueAxes[0].maximum = 100,
        t = {
            dummyValue: 0
        },
        t[n.panels[0].categoryField] = "",
        n.panels[0].dataProvider = [t],
        i = $("#chartNoDataFound").val(),
        n.panels[0].addLabel(0, "50%", i, "center"),
        n.panels[0].chartDiv.style.opacity = 1,
        n.validateNow(),
        $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaamplus.com").html("").css("top", "0px"))
    }
    ,
    AmCharts.checkEmptyData(chart),
    $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaamplus.com").html("").css("top", "0px")
}
function GetInteractiveChartData(n, t, i, r, u) {
    var p = $("#lang").val(), o, f, b;
    interactiveChartData = [],
    u == undefined && (activeChartType = n,
    activeParams = t,
    interval = $("#intervals li a.active").attr("id"),
    period = $("#periods li a.active").attr("relf-value"),
    days = $("#periods li a.active").attr("relf-days"),
    graphType = $("#chartsetting li a.active").attr("id"),
    ChangeChartType($("#chartsetting li a.active"), !1));
    var y = $("#longCycle").val() == undefined ? "0" : $("#longCycle").val()
      , v = $("#shortCycle").val() == undefined ? "0" : $("#shortCycle").val()
      , l = $("#signal").val() == undefined ? "0" : $("#signal").val()
      , a = $("#timePeriod").val() == undefined ? "0" : $("#timePeriod").val()
      , w = $("#mfiPeriod").val() == undefined ? "0" : $("#mfiPeriod").val()
      , c = $("#williamsRPeriod").val() == undefined ? "0" : $("#williamsRPeriod").val()
      , e = $("#stochRSITimePeriod").val() == undefined ? "0" : $("#stochRSITimePeriod").val()
      , h = $("#stochRSIFastKPeriod").val() == undefined ? "0" : $("#stochRSIFastKPeriod").val()
      , s = $("#stochRSIFastDPeriod").val() == undefined ? "0" : $("#stochRSIFastDPeriod").val();
    u == undefined ? (SetIntervalPeriod(interval, period),
    SetCookieInterval(interval),
    SetCookiePeriod(period),
    SetCookieGraphType(graphType)) : days = $("#days").val(),
    o = [],
    f = "/{lang}/get-chart-data/{chartType}/{param}/{days}/{macdLongCycle}/{macdShortCycle}/{macdSignal}/{rsiTimePeriod}/{mfiPeriod}/{williamsRPeriod}/{stochRSITimePeriod}/{stochRSIFastKPeriod}/{stochRSIFastDPeriod}",
    f = f.replace("{lang}", p).replace("{chartType}", n).replace("{param}", t).replace("{days}", days).replace("{macdLongCycle}", y).replace("{macdShortCycle}", v).replace("{macdSignal}", l).replace("{rsiTimePeriod}", a).replace("{mfiPeriod}", w).replace("{williamsRPeriod}", c).replace("{stochRSITimePeriod}", e).replace("{stochRSITimePeriod}", e).replace("{stochRSIFastKPeriod}", h).replace("{stochRSIFastDPeriod}", s),
    b = $.ajax({
        url: f,
        type: "GET",
        async: !1
    }).done(function(n) {
        var t, u, f;
        if (n != null) {
            for (t = 0; t <= n.length; t++)
                if (n[t] != null) {
                    var e = n[t][0]
                      , o = n[t][1]
                      , s = n[t][2]
                      , i = n[t][3]
                      , r = n[t][4];
                    minValue = n[t][5],
                    maxValue = n[t][6],
                    previousCloseStockPrice = n[t][7],
                    u = n[t][8],
                    f = n[t][9],
                    interactiveChartData.push({
                        date: e,
                        open: o,
                        close: s,
                        high: i,
                        low: r,
                        max: i,
                        min: r,
                        category: u,
                        title: f,
                        volume: n[t][10],
                        macd: n[t][11],
                        macdSignal: n[t][12],
                        macdHistory: n[t][13],
                        rsi: n[t][14],
                        mfi: n[t][15],
                        williamsR: n[t][16],
                        stochRSIFastK: n[t][17],
                        stochRSIFastD: n[t][18],
                        ema: n[t][19],
                        sma: n[t][20],
                        amount: n[t][21],
                        customBullet: n[t][22],
                        customDescription: n[t][22] == null ? "" : $("#Split").val()
                    })
                }
            chartData.push(interactiveChartData)
        }
    }).always(function() {
        u == undefined && (r || (DrawIntraDayChart(i, chartData),
        (activeChartType == 1 || activeChartType == 2 || activeChartType == 3) && $.cookie(CompanyTechnicalIndicators) != undefined && $.cookie(CompanyTechnicalIndicators) != "" && (indicators = $.cookie(CompanyTechnicalIndicators).split(","),
        $(indicators).each(function(n, t) {
            GetTechnicalIndicators(t, !0)
        }),
        isFirstTimeLoaded ? isFirstTimeLoaded = !1 : (chart && chart.validateNow(),
        $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaamplus.com").html("").css("top", "0px")))))
    })
}
function SetIntervalPeriod(n, t) {
    n == "mm" && t != "1D" && t != "3D" && t != "5D" ? t = "1D" : n == "5mm" && t != "1D" && t != "3D" && t != "5D" ? t = "1D" : n == "10mm" && t != "1D" && t != "3D" && t != "5D" ? t = "1D" : n == "15mm" && t != "1D" && t != "3D" && t != "5D" ? t = "1D" : n == "20mm" && t != "1D" && t != "3D" && t != "5D" ? t = "1D" : n == "30mm" && t != "1D" && t != "3D" && t != "5D" ? t = "1D" : n == "hh" && t != "1D" && t != "3D" && t != "5D" ? t = "1D" : n == "DD" && t != "1M" && t != "3M" && t != "6M" && t == "1Y" && t == "3Y" && t != "MAX" ? t = "1M" : n == "WW" && t != "3M" && t != "6M" && t == "1Y" && t == "3Y" && t != "MAX" ? t = "3M" : n == "MM" && t != "3M" && t != "6M" && t == "3Y" && t != "MAX" && (t = "1Y")
}
function ChangeInterval(n, t) {
    clearTimeout(intervalTimeOut),
    $("#chartcurtain").css("display", "block"),
    intervalTimeOut = setTimeout(function() {
        $("#intervals li a").removeClass("active"),
        interval = $(n).attr("id"),
        $(n).addClass("active"),
        interval == "mm" && period != "1D" && period != "3D" && period != "5D" && ($("#periods li a").removeClass("active"),
        $("#1day").addClass("active")),
        interval == "5mm" && period != "1D" && period != "3D" && period != "5D" && ($("#periods li a").removeClass("active"),
        $("#1day").addClass("active")),
        interval == "10mm" && period != "1D" && period != "3D" && period != "5D" && ($("#periods li a").removeClass("active"),
        $("#1day").addClass("active")),
        interval == "15mm" && period != "1D" && period != "3D" && period != "5D" && ($("#periods li a").removeClass("active"),
        $("#1day").addClass("active")),
        interval == "30mm" && period != "1D" && period != "3D" && period != "5D" && ($("#periods li a").removeClass("active"),
        $("#1day").addClass("active")),
        interval == "hh" && period != "1D" && period != "3D" && period != "5D" && ($("#periods li a").removeClass("active"),
        $("#1day").addClass("active")),
        interval == "DD" && period != "7D" && period != "1M" && period != "3M" && period != "6M" && period != "1Y" && period != "3Y" && period != "MAX" && ($("#periods li a").removeClass("active"),
        $("#1year").addClass("active")),
        interval == "WW" && period != "1M" && period != "3M" && period != "6M" && period != "1Y" && period != "3Y" && period != "MAX" && ($("#periods li a").removeClass("active"),
        $("#1year").addClass("active")),
        interval == "MM" && period != "3M" && period != "6M" && period != "1Y" && period != "3Y" && period != "MAX" && ($("#periods li a").removeClass("active"),
        $("#1year").addClass("active")),
        chartData = [],
        GetInteractiveChartData(activeChartType, activeParams, !1, !1),
        chart.categoryAxesSettings.groupToPeriods = [interval],
        activeCompareChartParams.length != 0 && $(activeCompareChartParams).each(function(n, t) {
            GetCompareInteractiveChartData(t.chartType, t.paramValue),
            compareInteractiveChartData != "" && (DrawCompareChart(compareInteractiveChartData),
            intervalreset ? chart && chart.validateData() : intervalreset = !0)
        }),
        intervalreset ? chart && chart.validateData() : intervalreset = !0,
        $(".amExportButton").hide(),
        $("#periods_sel").text($("#periods li a.active span").text()),
        $("#intervals_sel").text($("#intervals li a.active span").text())
    }, 200),
    t && $(n).parent().parent().css("display", "none")
}
function ChangeChartType(n, t, i) {
    $("#chartsetting li a").removeClass("active"),
    $(n).addClass("active"),
    graphType = $(n).attr("id"),
    SetCookieGraphType(graphType);
    var r = 0
      , e = ""
      , o = ""
      , f = ""
      , u = "";
    graphType == "candlestick" || graphType == "ohlc" ? (u = "green",
    f = "green",
    o = "red",
    e = "red",
    r = 1) : graphType == "smoothedLine" ? u = "#f9ba7f" : graphType == "mountain" && (graphType = "line",
    r = .4),
    graph = new AmCharts.StockGraph,
    graph = graphType != "candlestick" ? [{
        id: "g1",
        valueField: "close",
        openField: "open",
        closeField: "close",
        highField: "high",
        lowField: "low",
        type: graphType,
        lineThickness: 3,
        comparable: !0,
        compareField: "close",
        lineColor: u,
        lineThickness: 1,
        fillColors: f,
        negativeLineColor: "#f9ba7f",
        negativeFillColors: "#f9ba7f",
        negativeLineAlpha: 1,
        fillAlphas: r,
        balloonText: balloonText,
        showBalloon: !0,
        precision: -1,
        customBulletField: "customBullet",
        labelText: "[[customDescription]]",
        balloonFunction: activeChartType == 1 ? function(n) {
            if (n.customBullet != undefined) {
                companySplits.length == 0 && GetCompanySplits();
                var i = "";
                return $(companySplits).each(function(t, r) {
                    new Date(r.date).toString() == new Date(n.category).toString() && (i = r.notes)
                }),
                i
            }
        }
        : null
    }] : [{
        type: "candlestick",
        id: "g1",
        openField: "open",
        closeField: "close",
        highField: "high",
        lowField: "low",
        valueField: "close",
        lineColor: "green",
        fillColors: "green",
        negativeLineColor: "red",
        negativeFillColors: "red",
        fillAlphas: 1,
        comparedGraphLineThickness: 3,
        useDataSetColors: !1,
        comparable: !0,
        compareField: "close",
        showBalloon: !1,
        proCandlesticks: !0,
        balloonText: balloonText,
        showBalloon: !0,
        customBulletField: "customBullet",
        labelText: "[[customDescription]]",
        balloonFunction: activeChartType == 1 ? function(n) {
            if (n.customBullet != undefined) {
                companySplits.length == 0 && GetCompanySplits();
                var i = "";
                return $(companySplits).each(function(t, r) {
                    new Date(r.date).toString() == new Date(n.category).toString() && (i = r.notes)
                }),
                i
            }
        }
        : null
    }],
    t && (chart.panels[0].stockGraphs = [],
    chart.panels[0].stockGraphs = graph,
    chart.validateNow(),
    $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaamplus.com").html("").css("top", "0px"),
    $(".amExportButton").hide()),
    $("#chartsetting_sel").text($("#chartsetting li a.active span").text()),
    i && $(n).parent().parent().css("display", "none")
}
function ChangePeriod(n, t) {
    clearTimeout(cpTimeOut),
    $("#chartcurtain").css("display", "block"),
    chartData = [],
    $("#periods li a").removeClass("active");
    var u = $("#intervals li a.active")
      , i = $(u).attr("id")
      , r = $(n).attr("relf-value");
    r == "1D" && i != "mm" && i != "5mm" && i != "10mm" && i != "15mm" && i != "30mm" && i != "hh" ? interval = "mm" : r == "3D" && i != "mm" && i != "5mm" && i != "10mm" && i != "15mm" && i != "30mm" && i != "hh" ? interval = "mm" : r == "5D" && i != "mm" && i != "5mm" && i != "10mm" && i != "15mm" && i != "30mm" && i != "hh" ? interval = "mm" : r == "7D" && i != "WW" ? interval = "WW" : r == "7D" && i != "DD" ? interval = "DD" : r == "1M" && i != "DD" && i != "WW" ? interval = "DD" : r == "3M" && i != "DD" && i != "WW" && i != "MM" ? interval = "DD" : r == "6M" && i != "DD" && i != "WW" && i != "MM" ? interval = "DD" : r == "1Y" && i != "DD" && i != "WW" && i != "MM" ? interval = "WW" : r == "3Y" && i != "DD" && i != "WW" && i != "MM" ? interval = "MM" : r == "MAX" && i != "DD" && i != "WW" && i != "MM" && (interval = "MM"),
    $("#intervals li a").removeClass("active"),
    $("#intervals li a[id='" + interval + "']").addClass("active"),
    $(n).addClass("active"),
    $("#periods_sel").text($("#periods li a.active span").text()),
    $("#intervals_sel").text($("#intervals li a.active span").text()),
    cpTimeOut = setTimeout(function() {
        GetInteractiveChartData(activeChartType, activeParams, !1, !1),
        activeCompareChartParams.length != 0 && $(activeCompareChartParams).each(function(n, t) {
            GetCompareInteractiveChartData(t.chartType, t.paramValue),
            compareInteractiveChartData != "" && DrawCompareChart(compareInteractiveChartData)
        })
    }, 200),
    t && $(n).parent().parent().css("display", "none")
}
function OnExportClick() {
    var t = new AmCharts.AmExport(chart);
    t.init(),
    t.imageFileName = "ArgaamPlus-Chart",
    t.exportJPG = !0,
    t.output({
        format: "jpg"
    })
}
function GetChartTable(n, t, i, r, u) {
    var a;
    i = i == "" ? "0" : i,
    activeCategoryID = i,
    n = n == "" ? "0" : n,
    activeEntityID = n,
    t = t == "" ? "0" : t,
    activeRegionID = t,
    r = r == "" ? "0" : r,
    activePetrochemicalPriceTypeID = r;
    var f = "/{lang}/get-chart-data-table/{chartType}/{entityID}/{startDate}/{endDate}/{regionID}/{categoryID}/{petrochemicalPriceTypeID}"
      , s = $("#lang").val()
      , h = u != undefined ? u : activeChartType
      , e = $("#w6-container").attr("sdate")
      , o = $("#w6-container").attr("edate")
      , c = e == undefined || e == "" ? $("#fromDate").val() : e
      , l = o == undefined || o == "" ? $("#toDate").val() : o;
    f = f.replace("{lang}", s).replace("{chartType}", h).replace("{entityID}", n).replace("{startDate}", c).replace("{endDate}", l).replace("{regionID}", t).replace("{categoryID}", i).replace("{petrochemicalPriceTypeID}", r),
    a = $.ajax({
        type: "GET",
        url: f.replace(",", "")
    }).done(function(n) {
        if ($("#chartTable").html(n),
        activeChartType == 16) {
            $("#interactivecharttable tbody tr.labh th").hide(),
            $("#interactivecharttable tbody tr td").hide();
            var t = $("#regions ul li a.active").attr("id");
            t == 1 ? ($("#interactivecharttable tbody tr.labh th").show(),
            $("#interactivecharttable tbody tr td").show()) : ($("#interactivecharttable tbody tr").find("#1").show(),
            $("#interactivecharttable tbody tr").find("#" + t + "").show(),
            $("#interactivecharttable tbody tr td").find("#" + t + "").show())
        }
    })
}
function ValidateHistoricalData(n, t, i) {
    var f = new Date($("#w6-container").attr("sdate")), o = new Date($("#w6-container").attr("edate")), n = new Date(n), t = new Date(t), e = !1, r, u;
    f < n && (e = !0),
    f <= o ? e ? IsHistoricalViewAllowedForCharts() ? GetChartTable(activeEntityID, activeRegionID, activeCategoryID, activePetrochemicalPriceTypeID) : (r = 0,
    u = 0,
    u = $(i).offset().top + ($(i).outerHeight() + 8),
    r = $(i).offset().left + $(i).outerWidth() - ($("#divHistoricalDataPopup").outerWidth() / 2 + $(i).outerWidth() / 2),
    ShowHistoricalDataPopup(r, u)) : GetChartTable(activeEntityID, activeRegionID, activeCategoryID, activePetrochemicalPriceTypeID) : alert("Please select proper date! ")
}
function SearchDataTable() {
    GetChartTable(activeEntityID, activeRegionID, activeCategoryID, activePetrochemicalPriceTypeID)
}
function ShowTechnicalIndicator(n) {
    clearTimeout(tITimeOut),
    tITimeOut = setTimeout(function() {
        $("#techincalindicator li a").each(function() {
            var t = $(this).attr("data-indicator"), r = $(this).attr("ti-state"), i;
            $(n).attr("id") != t || $(this).hasClass("active") ? $(n).attr("id") == t && $(this).hasClass("active") && ($("#chartcurtain").css("display", "block"),
            i = $("#interactiveChartDiv").css("height"),
            i = parseInt(i.replace("px", "")),
            i = parseInt(i) - 140,
            i = i + "px",
            setTimeout(function() {
                $("#chartcurtain").css("display", "none")
            }, 2e3),
            t == "macd" ? $(chart.panels).each(function(n) {
                $(this).attr("title") == "macd" && (chart.panels.splice(n, 1),
                $("#interactiveChartDiv").css("height", i),
                chart.validateNow(),
                $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaamplus.com").html("").css("top", "0px"),
                $("#" + t).removeClass("active"))
            }) : t == "rsi" ? $(chart.panels).each(function(n) {
                $(this).attr("title") == "rsi" && (chart.panels.splice(n, 1),
                $("#interactiveChartDiv").css("height", i),
                chart.validateNow(),
                $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaamplus.com").html("").css("top", "0px"),
                $("#" + t).removeClass("active"))
            }) : t == "mfi" ? $(chart.panels).each(function(n) {
                $(this).attr("title") == "mfi" && (chart.panels.splice(n, 1),
                $("#interactiveChartDiv").css("height", i),
                chart.validateNow(),
                $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaamplus.com").html("").css("top", "0px"),
                $("#" + t).removeClass("active"))
            }) : t == "stochRSI" ? $(chart.panels).each(function(n) {
                $(this).attr("title") == "stochrsi" && (chart.panels.splice(n, 1),
                $("#interactiveChartDiv").css("height", i),
                chart.validateNow(),
                $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaamplus.com").html("").css("top", "0px"),
                $("#" + t).removeClass("active"))
            }) : t == "williamsr" && $(chart.panels).each(function(n) {
                $(this).attr("title") == "williamsr" && (chart.panels.splice(n, 1),
                $("#interactiveChartDiv").css("height", i),
                chart.validateNow(),
                $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaamplus.com").html("").css("top", "0px"),
                $("#" + t).removeClass("active"))
            }),
            RemoveCookieTechnicalIndicator(t.toLowerCase())) : t == "macd" ? $("#MACDPopUp").parent().css("display", "block") : t == "rsi" ? $("#RSIPopUp").parent().css("display", "block") : t == "mfi" ? $("#MFIPopUp").parent().css("display", "block") : t == "stochRSI" ? $("#STOCHRSIPopUp").parent().css("display", "block") : t == "williamsr" && $("#WILLIAMSRPopUp").parent().css("display", "block")
        })
    }, 200)
}
function GetTechnicalIndicators(n, t) {
    t || clearTimeout(GTITimeOut),
    $("#chartcurtain").css("display", "block"),
    t ? TechnicalIndicatorSettings(n, t) : GTITimeOut = setTimeout(function() {
        TechnicalIndicatorSettings(n, t),
        $("#chartcurtain").css("display", "none")
    }, 200)
}
function TechnicalIndicatorSettings(n, t) {
    var r, u, i;
    n.indexOf("PopUp") != -1 ? $("#" + n).parent().css("display", "none") : (n = n.toUpperCase() + "PopUp",
    $("#" + n).parent().css("display", "none")),
    r = $("#" + n).attr("technical-indicator"),
    SetCookieTechnicalIndicator(r),
    t || (GetInteractiveChartData(activeChartType, activeParams, !1, !0),
    $("#chartcurtain").css("display", "none")),
    stockPanels = new AmCharts.StockPanel({
        percentHeight: 30,
        marginTop: 1,
        showCategoryAxis: !0
    });
    var f = new AmCharts.StockGraph
      , e = new AmCharts.StockGraph
      , o = new AmCharts.StockGraph
      , s = new AmCharts.StockGraph
      , h = new AmCharts.StockGraph;
    f = [{
        title: "Macd",
        id: "macd",
        valueField: "macd",
        type: "line",
        lineColor: "blue",
        lineThickness: 1,
        fillColors: "blue",
        useDataSetColors: !1,
        updateOnReleaseOnly: !0
    }, {
        title: "Exp",
        id: "macdSignal",
        valueField: "macdSignal",
        type: "line",
        lineColor: "#E79D9D",
        lineThickness: 1,
        fillColors: "#E79D9D",
        useDataSetColors: !1,
        updateOnReleaseOnly: !0
    }, {
        title: "Div",
        id: "macdHistory",
        valueField: "macdHistory",
        type: "column",
        lineColor: "#7CBCB3",
        lineThickness: 1,
        fillColors: "#7CBCB3",
        useDataSetColors: !1,
        updateOnReleaseOnly: !0
    }],
    e = [{
        title: "RSI",
        id: "rsi",
        valueField: "rsi",
        type: "line",
        lineColor: "#FF6600",
        lineThickness: 1,
        useDataSetColors: !1,
        updateOnReleaseOnly: !0
    }],
    o = [{
        title: "MFI",
        id: "mfi",
        valueField: "mfi",
        type: "line",
        lineColor: "#FF6600",
        lineThickness: 1,
        useDataSetColors: !1,
        updateOnReleaseOnly: !0
    }],
    s = [{
        title: "Stoch RSI FastD",
        id: "stochRSIFastD",
        valueField: "stochRSIFastD",
        type: "line",
        lineColor: "#FF6600",
        lineThickness: 1,
        useDataSetColors: !1,
        updateOnReleaseOnly: !0
    }, {
        title: "Stoch RSI FastK",
        id: "stochRSIFastK",
        valueField: "stochRSIFastK",
        type: "line",
        lineColor: "#FF6600",
        lineThickness: 1,
        useDataSetColors: !1,
        updateOnReleaseOnly: !0
    }],
    h = [{
        title: "Williams %R",
        id: "williamsR",
        valueField: "williamsR",
        type: "line",
        lineColor: "#FF6600",
        lineThickness: 1,
        useDataSetColors: !1,
        updateOnReleaseOnly: !0
    }],
    n == "MACDPopUp" ? (panelGraphs = f,
    $("#macd").addClass("active")) : n == "RSIPopUp" ? (panelGraphs = e,
    $("#rsi").addClass("active")) : n == "MFIPopUp" ? (panelGraphs = o,
    $("#mfi").addClass("active")) : n == "STOCHRSIPopUp" ? (panelGraphs = s,
    $("#stochRSI").addClass("active")) : n == "WILLIAMSRPopUp" && (panelGraphs = h,
    $("#williamsr").addClass("active")),
    u = new AmCharts.StockLegend,
    u = {
        markerType: "circle",
        align: "left",
        markerSize: 8,
        periodValueText: "[[value.close]]"
    },
    stockPanels.stockLegend = u,
    stockPanels.stockGraphs = panelGraphs,
    chart.panels.push(stockPanels),
    chart.panels[chart.panels.length - 1].title = r,
    i = $("#interactiveChartDiv").css("height"),
    i = parseInt(i.replace("px", "")),
    i <= 1200 && (i = parseInt(i) + 140),
    (activeChartType == 1 || activeChartType == 2 || activeChartType == 3) && $(chart.panels).each(function() {
        $(this)[0].percentHeight = $(this)[0].title == "" ? 30 : 100 / 7
    }),
    i = i + "px",
    $("#interactiveChartDiv").css("height", i),
    $(".amExportButton").hide(),
    t || (chart.validateNow(),
    $("[href='https://www.amcharts.com/javascript-charts/']").attr("href", "https://www.argaamplus.com").html("").css("top", "0px"))
}
function OnDrawClick() {
    chart.panels[0].handlePencilClick(),
    $("#drawTrendLines").hasClass("c-select") ? $("#drawTrendLines").removeClass("c-select") : ($("#drawTrendLines").addClass("c-select"),
    $("#eraseTrendLines").removeClass("c-select"))
}
function OnEraseClick() {
    chart.panels[0].handleEraserClick(),
    $("#eraseTrendLines").hasClass("c-select") ? $("#eraseTrendLines").removeClass("c-select") : ($("#eraseTrendLines").addClass("c-select"),
    $("#drawTrendLines").removeClass("c-select"))
}
function SetCookieGraphType(n) {
    n != "" && n != undefined && (activeChartType == "1" ? $.cookie(MarketGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "2" ? $.cookie(SectorGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "3" ? $.cookie(CompanyGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "4" ? $.cookie(PetrochemicalGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "6" ? $.cookie(CommodityGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "7" ? $.cookie(FundGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "8" ? $.cookie(RatioGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "9" ? $.cookie(InternationalMarketGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "10" ? $.cookie(ShippingGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "11" ? $.cookie(SaiborRatesGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "14" ? $.cookie(ConsumerGoodsGraphType, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "16" && $.cookie(RigCountsGraphType, n, {
        expires: 7,
        path: "/"
    }))
}
function SetCookieInterval(n) {
    n != "" && n != undefined && (activeChartType == "1" ? $.cookie(MarketInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "2" ? $.cookie(SectorInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "3" ? $.cookie(CompanyInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "4" ? $.cookie(PetrochemicalInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "6" ? $.cookie(CommodityInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "7" ? $.cookie(FundInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "8" ? $.cookie(RatioInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "9" ? $.cookie(InternationalMarketInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "10" ? $.cookie(ShippingInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "11" ? $.cookie(SaiborRatesInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "14" ? $.cookie(ConsumerGoodsInterval, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "16" && $.cookie(RigCountsInterval, n, {
        expires: 7,
        path: "/"
    }))
}
function SetCookiePeriod(n) {
    n != "" && n != undefined && (activeChartType == "1" ? $.cookie(MarketPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "2" ? $.cookie(SectorPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "3" ? $.cookie(CompanyPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "4" ? $.cookie(PetrochemicalPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "6" ? $.cookie(CommodityPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "7" ? $.cookie(FundPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "8" ? $.cookie(RatioPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "9" ? $.cookie(InternationalMarketPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "10" ? $.cookie(ShippingPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "11" ? $.cookie(SaiborRatesPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "14" ? $.cookie(ConsumerGoodsPeriod, n, {
        expires: 7,
        path: "/"
    }) : activeChartType == "16" && $.cookie(RigCountsPeriod, n, {
        expires: 7,
        path: "/"
    }))
}
function SetCookieTechnicalIndicator(n) {
    n != "" && n != undefined && ($.cookie(CompanyTechnicalIndicators) != undefined && $.cookie(CompanyTechnicalIndicators) != "" && (indicators = $.cookie(CompanyTechnicalIndicators).split(",")),
    indicators.indexOf(n) == -1 && (indicators.push(n),
    $.cookie(CompanyTechnicalIndicators, [], {
        expires: 7,
        path: "/"
    }),
    $.cookie(CompanyTechnicalIndicators, indicators, {
        expires: 7,
        path: "/"
    })))
}
function RemoveCookieTechnicalIndicator(n) {
    n != "" && n != undefined && (indicators = $.cookie(CompanyTechnicalIndicators).split(","),
    $.inArray(n.toLowerCase(), indicators) != -1 && (indicators.splice($.inArray(n, indicators), 1),
    $.cookie(CompanyTechnicalIndicators, [], {
        expires: 7,
        path: "/"
    }),
    $.cookie(CompanyTechnicalIndicators, indicators, {
        expires: 7,
        path: "/"
    })))
}
function GetMaximumValue() {
    var i = 0;
    return ($(chartData).each(function() {
        $(this).each(function() {
            parseFloat(i) < parseFloat(this.max) && (i = this.max)
        })
    }),
    i < 10) ? i + parseInt(1) : i < 50 ? i + parseInt(2) : i < 100 ? i + parseInt(5) : i < 500 ? i + parseInt(30) : i < 1e3 ? i + parseInt(50) : i < 1500 ? i + parseInt(60) : void 0
}
function GetCompanySplits(n) {
    var i = $('[relf-charttype="1"]').children().attr("relf-value"), n = $("#ddlCompanies").val(), t = "/{lang}/get-company-splits/{marketID}/{companyID}", r;
    t = t.replace("{lang}", $("#lang").val()).replace("{marketID}", i).replace("{companyID}", n),
    r = $.ajax({
        type: "GET",
        url: t
    }).done(function(n) {
        companySplits = n
    })
}
var interactiveChartData = [], compareInteractiveChartData = [], chartData = [], counter = 0, companySplits = [], previousCloseStockPrice, minValue, maxValue, activeEntityID, activeRegionID, activeCategoryID, activePetrochemicalPriceTypeID, activePetrochemicalProductID, activeOtherCommoditiesID, activeConsumerMaterialID, activeConsumerCategoryID, activeCompareChartParams = [], sectorIDs = "", marketIDs = "", companyIDs = "", commodityIDs = "", gicsSectorIDs = "", regionIDs = "3,", internationMarketIDs = "", shippingIDs = "", saiborRatesIDs = "", petrochemcialCategoryIDs = "", petrochemicalProductIDs = "", petrochemicalPriceTypeIDs = "", petrochemicalParams = "", otherCommoditiesIDs = "", otherCommoditiesParams = "", fundIDs = "", fundFilterIDs = "", fundParams = "", financialRatioFilterIDs = "", financialRatioParams = "", shippingParams = "", consumerCategoryIDs = "", consumerMaterialIDs = "", chart, interval, period, days = 0, activeChartType, activeParams, activeRatioType, graph = [], graphType, stockPanels = [], panelGraphs = [], balloonText = "", valueTextRegular = "", isVolumePanelAllowed = !0, guide = [], isFirstTimeLoaded = !0, zoomable = !0, pan = !1, macdLongCycle = 0, macdShortCycle = 0, macdSignal = 0, rsiTimePeriod = 0, mfiPeriod = 0, williamsRPeriod = 0, stochRSITimePeriod = 0, stochRSIFastKPeriod = 0, stochRSIFastDPeriod = 0, MarketInterval = "COOKIE_MARKET_INTERVAL", SectorInterval = "COOKIE_SECTOR_INTERVAL", CompanyInterval = "COOKIE_COMPANY_INTERVAL", PetrochemicalInterval = "COOKIE_PETROCHEMICAL_INTERVAL", FundInterval = "COOKIE_FUND_INTERVAL", CommodityInterval = "COOKIE_COMMODITY_INTERVAL", RatioInterval = "COOKIE_RATIO_INTERVAL", InternationalMarketInterval = "COOKIE_INTERNATIONALMARKET_INTERVAL", ShippingInterval = "COOKIE_SHIPPING_INTERVAL", SaiborRatesInterval = "COOKIE_SAIBORRATES_INTERVAL", ConsumerGoodsInterval = "COOKIE_CONSUMERGOODS_INTERVAL", RepoRatesInterval = "COOKIE_REPORATES_INTERVAL", RigCountsInterval = "COOKIE_RIGCOUNTS_INTERVAL", MarketPeriod = "COOKIE_MARKET_PERIOD", SectorPeriod = "COOKIE_SECTOR_PERIOD", CompanyPeriod = "COOKIE_COMPANY_PERIOD", PetrochemicalPeriod = "COOKIE_PETROCHEMICAL_PERIOD", FundPeriod = "COOKIE_FUND_PERIOD", CommodityPeriod = "COOKIE_COMMODITY_PERIOD", RatioPeriod = "COOKIE_RATIO_PERIOD", InternationalMarketPeriod = "COOKIE_INTERNATIONALMARKET_PERIOD", ShippingPeriod = "COOKIE_SHIPPING_PERIOD", SaiborRatesPeriod = "COOKIE_SAIBORRATES_PERIOD", ConsumerGoodsPeriod = "COOKIE_CONSUMERGOODS_PERIOD", RepoRatesPeriod = "COOKIE_REPORATES_PERIOD", RigCountsPeriod = "COOKIE_RIGCOUNTS_PERIOD", MarketGraphType = "COOKIE_MARKET_GRAPHTYPE", SectorGraphType = "COOKIE_SECTOR_GRAPHTYPE", CompanyGraphType = "COOKIE_COMPANY_GRAPHTYPE", PetrochemicalGraphType = "COOKIE_PETROCHEMICAL_GRAPHTYPE", FundGraphType = "COOKIE_FUND_GRAPHTYPE", CommodityGraphType = "COOKIE_COMMODITY_GRAPHTYPE", RatioGraphType = "COOKIE_RATIO_GRAPHTYPE", InternationalMarketGraphType = "COOKIE_INTERNATIONALMARKET_GRAPHTYPE", ShippingGraphType = "COOKIE_SHIPPING_GRAPHTYPE", SaiborRatesGraphType = "COOKIE_SAIBORRATES_GRAPHTYPE", ConsumerGoodsGraphType = "COOKIE_CONSUMERGOODS_GRAPHTYPE", RepoRatesGraphType = "COOKIE_REPORATES_GRAPHTYPE", RigCountsGraphType = "COOKIE_RIGCOUNTS_GRAPHTYPE", CompanyTechnicalIndicators = "COOKIE_COMPANY_TECHNICALINDICATORS", indicators = [], c_commodityID = "", GTITimeOut, intervalreset = !1, chartCompareTimeOut, chartComparisonResetTimeOut, wtimeOut, gcByListTimeOut, intervalTimeOut, cpTimeOut, tITimeOut;
;