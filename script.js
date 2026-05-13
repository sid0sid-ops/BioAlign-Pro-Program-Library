/* --- PRISM.JS CORE & PLUGINS INLINED --- */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function (l) { var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, t = 0, e = {}, j = { manual: l.Prism && l.Prism.manual, disableWorkerMessageHandler: l.Prism && l.Prism.disableWorkerMessageHandler, util: { encode: function e(t) { return t instanceof C ? new C(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ") }, type: function (e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId: function (e) { return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id }, clone: function n(e, a) { var r, t; switch (a = a || {}, j.util.type(e)) { case "Object": if (t = j.util.objId(e), a[t]) return a[t]; for (var s in r = {}, a[t] = r, e) e.hasOwnProperty(s) && (r[s] = n(e[s], a)); return r; case "Array": return (t = j.util.objId(e), a[t]) ? a[t] : (r = [], a[t] = r, e.forEach(function (e, t) { r[t] = n(e, a) }), r); default: return e } }, getLanguage: function (e) { for (; e;) { var t = n.exec(e.className); if (t) return t[1].toLowerCase(); e = e.parentElement } return "none" }, setLanguage: function (e, t) { e.className = e.className.replace(RegExp(n, "gi"), ""), e.classList.add("language-" + t) }, currentScript: function () { if ("undefined" == typeof document) return null; if ("currentScript" in document) return document.currentScript; try { throw new Error } catch (e) { var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1]; if (t) { var n, a = document.getElementsByTagName("script"); for (n in a) if (a[n].src == t) return a[n] } return null } }, isActive: function (e, t, n) { for (var a = "no-" + t; e;) { var r = e.classList; if (r.contains(t)) return !0; if (r.contains(a)) return !1; e = e.parentElement } return !!n } }, languages: { plain: e, plaintext: e, text: e, txt: e, extend: function (e, t) { var n, a = j.util.clone(j.languages[e]); for (n in t) a[n] = t[n]; return a }, insertBefore: function (n, e, t, a) { var r, s = (a = a || j.languages)[n], i = {}; for (r in s) if (s.hasOwnProperty(r)) { if (r == e) for (var o in t) t.hasOwnProperty(o) && (i[o] = t[o]); t.hasOwnProperty(r) || (i[r] = s[r]) } var l = a[n]; return a[n] = i, j.languages.DFS(j.languages, function (e, t) { t === l && e != n && (this[e] = i) }), i }, DFS: function e(t, n, a, r) { r = r || {}; var s, i, o, l = j.util.objId; for (s in t) t.hasOwnProperty(s) && (n.call(t, s, t[s], a || s), i = t[s], "Object" !== (o = j.util.type(i)) || r[l(i)] ? "Array" !== o || r[l(i)] || (r[l(i)] = !0, e(i, n, s, r)) : (r[l(i)] = !0, e(i, n, null, r))) } }, plugins: {}, highlightAll: function (e, t) { j.highlightAllUnder(document, e, t) }, highlightAllUnder: function (e, t, n) { var a = { callback: n, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; j.hooks.run("before-highlightall", a), a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)), j.hooks.run("before-all-elements-highlight", a); for (var r, s = 0; r = a.elements[s++];)j.highlightElement(r, !0 === t, a.callback) }, highlightElement: function (e, t, n) { var a = j.util.getLanguage(e), r = j.languages[a], s = (j.util.setLanguage(e, a), e.parentElement); s && "pre" === s.nodeName.toLowerCase() && j.util.setLanguage(s, a); var i = { element: e, language: a, grammar: r, code: e.textContent }; function o(e) { i.highlightedCode = e, j.hooks.run("before-insert", i), i.element.innerHTML = i.highlightedCode, j.hooks.run("after-highlight", i), j.hooks.run("complete", i), n && n.call(i.element) } if (j.hooks.run("before-sanity-check", i), (s = i.element.parentElement) && "pre" === s.nodeName.toLowerCase() && !s.hasAttribute("tabindex") && s.setAttribute("tabindex", "0"), !i.code) return j.hooks.run("complete", i), void (n && n.call(i.element)); j.hooks.run("before-highlight", i), i.grammar ? t && l.Worker ? ((a = new Worker(j.filename)).onmessage = function (e) { o(e.data) }, a.postMessage(JSON.stringify({ language: i.language, code: i.code, immediateClose: !0 }))) : o(j.highlight(i.code, i.grammar, i.language)) : o(j.util.encode(i.code)) }, highlight: function (e, t, n) { e = { code: e, grammar: t, language: n }; if (j.hooks.run("before-tokenize", e), e.grammar) return e.tokens = j.tokenize(e.code, e.grammar), j.hooks.run("after-tokenize", e), C.stringify(j.util.encode(e.tokens), e.language); throw new Error('The language "' + e.language + '" has no grammar.') }, tokenize: function (e, t) { var n = t.rest; if (n) { for (var a in n) t[a] = n[a]; delete t.rest } for (var r = new u, s = (z(r, r.head, e), !function e(t, n, a, r, s, i) { for (var o in a) if (a.hasOwnProperty(o) && a[o]) { var l = a[o]; l = Array.isArray(l) ? l : [l]; for (var u = 0; u < l.length; ++u) { if (i && i.cause == o + "," + u) return; for (var g, c = l[u], d = c.inside, p = !!c.lookbehind, m = !!c.greedy, h = c.alias, f = (m && !c.pattern.global && (g = c.pattern.toString().match(/[imsuy]*$/)[0], c.pattern = RegExp(c.pattern.source, g + "g")), c.pattern || c), b = r.next, y = s; b !== n.tail && !(i && y >= i.reach); y += b.value.length, b = b.next) { var v = b.value; if (n.length > t.length) return; if (!(v instanceof C)) { var F, x = 1; if (m) { if (!(F = L(f, y, t, p)) || F.index >= t.length) break; var k = F.index, w = F.index + F[0].length, A = y; for (A += b.value.length; A <= k;)b = b.next, A += b.value.length; if (A -= b.value.length, y = A, b.value instanceof C) continue; for (var P = b; P !== n.tail && (A < w || "string" == typeof P.value); P = P.next)x++, A += P.value.length; x--, v = t.slice(y, A), F.index -= y } else if (!(F = L(f, 0, v, p))) continue; var k = F.index, $ = F[0], S = v.slice(0, k), E = v.slice(k + $.length), v = y + v.length, _ = (i && v > i.reach && (i.reach = v), b.prev), S = (S && (_ = z(n, _, S), y += S.length), O(n, _, x), new C(o, d ? j.tokenize($, d) : $, h, $)); b = z(n, _, S), E && z(n, b, E), 1 < x && ($ = { cause: o + "," + u, reach: v }, e(t, n, a, b.prev, y, $), i && $.reach > i.reach && (i.reach = $.reach)) } } } } }(e, r, t, r.head, 0), r), i = [], o = s.head.next; o !== s.tail;)i.push(o.value), o = o.next; return i }, hooks: { all: {}, add: function (e, t) { var n = j.hooks.all; n[e] = n[e] || [], n[e].push(t) }, run: function (e, t) { var n = j.hooks.all[e]; if (n && n.length) for (var a, r = 0; a = n[r++];)a(t) } }, Token: C }; function C(e, t, n, a) { this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length } function L(e, t, n, a) { e.lastIndex = t; t = e.exec(n); return t && a && t[1] && (e = t[1].length, t.index += e, t[0] = t[0].slice(e)), t } function u() { var e = { value: null, prev: null, next: null }, t = { value: null, prev: e, next: null }; e.next = t, this.head = e, this.tail = t, this.length = 0 } function z(e, t, n) { var a = t.next, n = { value: n, prev: t, next: a }; return t.next = n, a.prev = n, e.length++, n } function O(e, t, n) { for (var a = t.next, r = 0; r < n && a !== e.tail; r++)a = a.next; (t.next = a).prev = t, e.length -= r } if (l.Prism = j, C.stringify = function t(e, n) { if ("string" == typeof e) return e; var a; if (Array.isArray(e)) return a = "", e.forEach(function (e) { a += t(e, n) }), a; var r, s = { type: e.type, content: t(e.content, n), tag: "span", classes: ["token", e.type], attributes: {}, language: n }, e = e.alias, i = (e && (Array.isArray(e) ? Array.prototype.push.apply(s.classes, e) : s.classes.push(e)), j.hooks.run("wrap", s), ""); for (r in s.attributes) i += " " + r + '="' + (s.attributes[r] || "").replace(/"/g, "&quot;") + '"'; return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + i + ">" + s.content + "</" + s.tag + ">" }, !l.document) return l.addEventListener && (j.disableWorkerMessageHandler || l.addEventListener("message", function (e) { var e = JSON.parse(e.data), t = e.language, n = e.code, e = e.immediateClose; l.postMessage(j.highlight(n, j.languages[t], t)), e && l.close() }, !1)), j; var a, e = j.util.currentScript(); function r() { j.manual || j.highlightAll() } return e && (j.filename = e.src, e.hasAttribute("data-manual") && (j.manual = !0)), j.manual || ("loading" === (a = document.readyState) || "interactive" === a && e && e.defer ? document.addEventListener("DOMContentLoaded", r) : window.requestAnimationFrame ? window.requestAnimationFrame(r) : window.setTimeout(r, 16)), j }(_self); "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (e) { "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&")) }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function (e, t) { var n = {}, n = (n["language-" + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[t] }, n.cdata = /^<!\[CDATA\[|\]\]>$/i, { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } }), t = (n["language-" + t] = { pattern: /[\s\S]+/, inside: Prism.languages[t] }, {}); t[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return e }), "i"), lookbehind: !0, greedy: !0, inside: n }, Prism.languages.insertBefore("markup", "cdata", t) } }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function (e, t) { Prism.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [t, "language-" + t], inside: Prism.languages[t] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } }) } }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, function (e) { var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, t = (e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + t.source + "$"), alias: "url" } } }, selector: { pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: t, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup); t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css")) }(Prism), Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: Prism.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), Prism.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript, function () { var l, u, g, c, e; void 0 !== Prism && "undefined" != typeof document && (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), l = { js: "javascript", py: "python", rb: "ruby", ps1: "powershell", psm1: "powershell", sh: "bash", bat: "batch", h: "c", tex: "latex" }, c = "pre[data-src]:not([" + (u = "data-src-status") + '="loaded"]):not([' + u + '="' + (g = "loading") + '"])', Prism.hooks.add("before-highlightall", function (e) { e.selector += ", " + c }), Prism.hooks.add("before-sanity-check", function (e) { var r, t, n, a, s, i, o = e.element; o.matches(c) && (e.code = "", o.setAttribute(u, g), (r = o.appendChild(document.createElement("CODE"))).textContent = "Loading…", t = o.getAttribute("data-src"), "none" === (e = e.language) && (n = (/\.(\w+)$/.exec(t) || [, "none"])[1], e = l[n] || n), Prism.util.setLanguage(r, e), Prism.util.setLanguage(o, e), (n = Prism.plugins.autoloader) && n.loadLanguages(e), n = t, a = function (e) { o.setAttribute(u, "loaded"); var t, n, a = function (e) { var t, n; if (e = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "")) return t = Number(e[1]), n = e[2], e = e[3], n ? e ? [t, Number(e)] : [t, void 0] : [t, t] }(o.getAttribute("data-range")); a && (t = e.split(/\r\n?|\n/g), n = a[0], a = null == a[1] ? t.length : a[1], n < 0 && (n += t.length), n = Math.max(0, Math.min(n - 1, t.length)), a < 0 && (a += t.length), a = Math.max(0, Math.min(a, t.length)), e = t.slice(n, a).join("\n"), o.hasAttribute("data-start") || o.setAttribute("data-start", String(n + 1))), r.textContent = e, Prism.highlightElement(r) }, s = function (e) { o.setAttribute(u, "failed"), r.textContent = e }, (i = new XMLHttpRequest).open("GET", n, !0), i.onreadystatechange = function () { 4 == i.readyState && (i.status < 400 && i.responseText ? a(i.responseText) : 400 <= i.status ? s("✖ Error " + i.status + " while fetching file: " + i.statusText) : s("✖ Error: File does not exist or is empty")) }, i.send(null)) }), e = !(Prism.plugins.fileHighlight = { highlight: function (e) { for (var t, n = (e || document).querySelectorAll(c), a = 0; t = n[a++];)Prism.highlightElement(t) } }), Prism.fileHighlight = function () { e || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), e = !0), Prism.plugins.fileHighlight.highlight.apply(this, arguments) }) }();
Prism.languages.c = Prism.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: !0 }, keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), Prism.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 } }), Prism.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: !0, greedy: !0, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, Prism.languages.c.string], char: Prism.languages.c.char, comment: Prism.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c } } } }), Prism.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete Prism.languages.c.boolean;
!function (e) { var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g, (function () { return t.source })); e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, (function () { return t.source }))), lookbehind: !0 }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: t, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: !0 }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:false|true)\b/ }), e.languages.insertBefore("cpp", "string", { module: { pattern: RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' + "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g, (function () { return n })) + ")"), lookbehind: !0, greedy: !0, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0 } }), e.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } } }), e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: !0, greedy: !0, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]) }(Prism);
!function () { if ("undefined" != typeof Prism && "undefined" != typeof document) { var e = "line-numbers", n = /\n(?!$)/g, t = Prism.plugins.lineNumbers = { getLine: function (n, t) { if ("PRE" === n.tagName && n.classList.contains(e)) { var i = n.querySelector(".line-numbers-rows"); if (i) { var r = parseInt(n.getAttribute("data-start"), 10) || 1, s = r + (i.children.length - 1); t < r && (t = r), t > s && (t = s); var l = t - r; return i.children[l] } } }, resize: function (e) { r([e]) }, assumeViewportIndependence: !0 }, i = void 0; window.addEventListener("resize", (function () { t.assumeViewportIndependence && i === window.innerWidth || (i = window.innerWidth, r(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers")))) })), Prism.hooks.add("complete", (function (t) { if (t.code) { var i = t.element, s = i.parentNode; if (s && /pre/i.test(s.nodeName) && !i.querySelector(".line-numbers-rows") && Prism.util.isActive(i, e)) { i.classList.remove(e), s.classList.add(e); var l, o = t.code.match(n), a = o ? o.length + 1 : 1, u = new Array(a + 1).join("<span></span>"); (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, s.hasAttribute("data-start") && (s.style.counterReset = "linenumber " + (parseInt(s.getAttribute("data-start"), 10) - 1)), t.element.appendChild(l), r([s]), Prism.hooks.run("line-numbers", t) } } })), Prism.hooks.add("line-numbers", (function (e) { e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0 })) } function r(e) { if (0 != (e = e.filter((function (e) { var n, t = (n = e, n ? window.getComputedStyle ? getComputedStyle(n) : n.currentStyle || null : null)["white-space"]; return "pre-wrap" === t || "pre-line" === t }))).length) { var t = e.map((function (e) { var t = e.querySelector("code"), i = e.querySelector(".line-numbers-rows"); if (t && i) { var r = e.querySelector(".line-numbers-sizer"), s = t.textContent.split(n); r || ((r = document.createElement("span")).className = "line-numbers-sizer", t.appendChild(r)), r.innerHTML = "0", r.style.display = "block"; var l = r.getBoundingClientRect().height; return r.innerHTML = "", { element: e, lines: s, lineHeights: [], oneLinerHeight: l, sizer: r } } })).filter(Boolean); t.forEach((function (e) { var n = e.sizer, t = e.lines, i = e.lineHeights, r = e.oneLinerHeight; i[t.length - 1] = void 0, t.forEach((function (e, t) { if (e && e.length > 1) { var s = n.appendChild(document.createElement("span")); s.style.display = "block", s.textContent = e } else i[t] = r })) })), t.forEach((function (e) { for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++)void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height) })), t.forEach((function (e) { var n = e.sizer, t = e.element.querySelector(".line-numbers-rows"); n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach((function (e, n) { t.children[n].style.height = e + "px" })) })) } } }();

window.__CPP_CONTENTS__ = {"1_hello_world.cpp": "// W.A.P. to demo Standard I/O stream\n/*\nProgram Name: Print \"Hello World\"\nDescription: The absolute beginning. Demonstrates how to write to standard output using the `cout` stream (with `using namespace std;`).\nConcepts Used: Standard I/O stream\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n  cout << \"Hello World (DNA: ATGC)\" << endl;\n  return 0;\n}\n", "2_integer_input.cpp": "// W.A.P. to demo Input Streams\n/*\nProgram Name: Take integer input & display\nDescription: Using std::cin to read user input into a variable memory address.\nConcepts Used: Input Streams\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int length;\n    cout << \"Enter sequence length: \";\n    cin >> length;\n    cout << \"Length is: \" << length << endl;\n    return 0;\n}\n", "3_arithmetic_ops.cpp": "// W.A.P. to demo Binary Operators\n/*\nProgram Name: Arithmetic operations\nDescription: Basic math (+, -, *, /, %) operations in C++.\nConcepts Used: Binary Operators\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n  int a, b;\n  cout << \"Enter two values: \";\n  cin >> a >> b;\n  cout << \"Sum: \" << a + b << \"\\nDiff: \" << a - b;\n  cout << \"\\nMul: \" << a * b << \"\\nDiv: \" << (b != 0 ? a / b : 0);\n  cout << \"\\nMod: \" << (b != 0 ? a % b : 0) << endl;\n  return 0;\n}\n", "4_sizeof_datatypes.cpp": "// W.A.P. to demo Memory Allocation\n/*\nProgram Name: Size of data types\nDescription: Using the sizeof() operator to understand byte sizes of primitive types.\nConcepts Used: Memory Allocation\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"int: \" << sizeof(int) << \" bytes\\n\";\n    cout << \"float: \" << sizeof(float) << \" bytes\\n\";\n    cout << \"char: \" << sizeof(char) << \" bytes\\n\";\n    cout << \"double: \" << sizeof(double) << \" bytes\\n\";\n    return 0;\n}\n", "5_even_odd.cpp": "// W.A.P. to demo Modulo Arithmetic\n/*\nProgram Name: Even or Odd check\nDescription: Checking remainders with the modulo operator (%) and an if-else block.\nConcepts Used: Modulo Arithmetic\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int i = 9;\n\n    if (i > 0) {\n        cout << \"The number \" << i << \" is positive.\" << endl;\n        if (i % 2 == 0) {\n            cout << \"The number \" << i << \" is even.\" << endl;\n        } else {\n            cout << \"The number \" << i << \" is odd.\" << endl;\n        }\n    } else {\n        cout << \"The number \" << i << \" is negative.\" << endl;\n    }\n\n    return 0;\n}\n", "6_if_statement.cpp": "// W.A.P. to demo Control flow\n/*\nProgram Name: Basic if statement\nDescription: Evaluating simple logical blocks.\nConcepts Used: Control flow\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5;\n    if (a == 5) {\n        cout << \"a is equal to 5\" << endl;\n    }\n    return 0;\n}\n", "7_smallest_two.cpp": "// W.A.P. to demo Simple condition\n/*\nProgram Name: Smallest of two numbers\nDescription: Basic conditional assignment.\nConcepts Used: Simple condition\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int A, B, small;\n    cout << \"Enter two numbers: \";\n    cin >> A >> B;\n    if (A < B) small = A;\n    if (B < A) small = B;\n    cout << \"Small: \" << small << endl;\n    return 0;\n}\n", "8_largest_three.cpp": "// W.A.P. to demo Nested Conditionals\n/*\nProgram Name: Largest among three\nDescription: Using logical AND (&&) to compare multiple variables simultaneously.\nConcepts Used: Nested Conditionals\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20, c = 3;\n\n    if ((a > b) && (a > c)) {\n        cout << \"a is greatest: \" << a << endl;\n    }\n    else if ((b > a) && (b > c)) {\n        cout << \"b is greatest: \" << b << endl;\n    }\n    else {\n        cout << \"c is greatest: \" << c << endl;\n    }\n\n    return 0;\n}\n", "9_leap_year.cpp": "// W.A.P. to demo Complex Boolean Logic\n/*\nProgram Name: Leap year check\nDescription: Handling multple conditions (divisible by 4, not 100, unless 400).\nConcepts Used: Complex Boolean Logic\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int year;\n    cout << \"Enter year: \";\n    cin >> year;\n    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {\n        cout << year << \" is a Leap Year.\\n\";\n    } else {\n        cout << year << \" is not a Leap Year.\\n\";\n    }\n    return 0;\n}\n", "10_calc_switch.cpp": "// W.A.P. to demo Switch Case\n/*\nProgram Name: Calculator (switch)\nDescription: Using a switch statement instead of multiple if-else blocks to achieve clean routing.\nConcepts Used: Switch Case\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    char op; float a, b;\n    cout << \"Enter operator (+,-,*,/) and 2 numbers: \";\n    cin >> op >> a >> b;\n    switch(op) {\n        case '+': cout << a+b; break;\n        case '-': cout << a-b; break;\n        case '*': cout << a*b; break;\n        case '/': if (b!=0) cout << a/b; else cout << \"Div by 0\"; break;\n        default: cout << \"Invalid op\";\n    }\n    return 0;\n}\n", "11_print_1_10_for.cpp": "// W.A.P. to demo For Loops\n/*\nProgram Name: Print 1 to 10 (for)\nDescription: Basic iterative looping with initialization, condition, and increment.\nConcepts Used: For Loops\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        cout << i << \" \";\n    }\n    return 0;\n}\n", "12_fibonacci_while.cpp": "// W.A.P. to demo While Loops\n/*\nProgram Name: Fibonacci 10 Terms (while)\nDescription: Generates and displays the first 10 terms of the Fibonacci sequence using a while loop.\nConcepts Used: While Loops\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 10, a = 0, b = 1, next;\n    cout << \"Fibonacci series (First 10 terms): \\n\";\n    while(count > 0) {\n        cout << a << \" \";\n        next = a + b;\n        a = b;\n        b = next;\n        count--;\n    }\n    cout << endl;\n    return 0;\n}\n", "13_fibonacci_for.cpp": "// W.A.P. to demo For Loops\n/*\nProgram Name: Fibonacci 10 Terms (for)\nDescription: Generates and displays the first 10 terms of the Fibonacci sequence using a for loop.\nConcepts Used: For Loops\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 0, b = 1, next;\n    cout << \"Fibonacci series (First 10 terms): \\n\";\n    for(int i=0; i<10; i++) {\n        cout << a << \" \";\n        next = a + b;\n        a = b;\n        b = next;\n    }\n    cout << endl;\n    return 0;\n}\n", "14_fibonacci_while_limit.cpp": "// W.A.P. to demo Value Boundaries\n/*\nProgram Name: Fibonacci Under 10 (while)\nDescription: Generates all Fibonacci numbers strictly less than 10 using a while loop.\nConcepts Used: Value Boundaries\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 0, b = 1, next;\n    cout << \"Fibonacci series (Under value 10): \\n\";\n    while(a < 10) {\n        cout << a << \" \";\n        next = a + b;\n        a = b;\n        b = next;\n    }\n    cout << endl;\n    return 0;\n}\n", "15_fibonacci_for_limit.cpp": "// W.A.P. to demo Bounded Iteration\n/*\nProgram Name: Fibonacci Under 10 (for)\nDescription: Generates all Fibonacci numbers strictly less than 10 using a for loop.\nConcepts Used: Bounded Iteration\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int next;\n    cout << \"Fibonacci series (Under value 10): \\n\";\n    \n    // Simple conditional iteration matching exact bounds \n    for(int a = 0, b = 1; a < 10; ) {\n        cout << a << \" \";\n        next = a + b;\n        a = b;\n        b = next;\n    }\n    \n    cout << endl;\n    return 0;\n}\n", "16_prime_check.cpp": "// W.A.P. to demo Algorithmic Search\n/*\nProgram Name: Prime number check\nDescription: Looping up to half the number to check for factors, determining primality.\nConcepts Used: Algorithmic Search\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    bool isPrime = true;\n    \n    cout << \"Enter a number: \";\n    cin >> n;\n    \n    if (n <= 1) {\n        isPrime = false;\n    } else {\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) {\n                isPrime = false;\n                break;\n            }\n        }\n    }\n    \n    if (isPrime) \n        cout << n << \" is Prime.\\n\";\n    else \n        cout << n << \" is Not Prime.\\n\";\n        \n    return 0;\n}\n", "17_armstrong.cpp": "// W.A.P. to demo Digit Extraction\n/*\nProgram Name: Armstrong number\nDescription: Using modulo 10 and division to process a number digit-by-digit.\nConcepts Used: Digit Extraction\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int n, num, digit, sum = 0;\n    cout << \"Enter a pos integer: \";\n    cin >> n;\n    num = n;\n    while(num != 0) {\n        digit = num % 10;\n        sum += digit * digit * digit;\n        num /= 10;\n    }\n    if(sum == n) cout << n << \" is Armstrong.\\n\";\n    else cout << n << \" is Not Armstrong.\\n\";\n    return 0;\n}\n", "18_palindrome.cpp": "// W.A.P. to check whether a number is Palindrome or not\n/*\nProgram Name: Palindrome Number\nDescription: A palindrome number remains the same\nwhen its digits are reversed.\n\nConcepts Used:\n1. while Loop\n2. Modulus Operator\n3. Reverse Number Logic\n\nBioinformatics Note: Used to detect palindromic sequences in DNA (e.g. restriction enzyme sites).\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main()\n{\n    int num, original, reverse = 0, rem;\n\n    cout << \"Enter a number: \";\n    cin >> num;\n\n    original = num;\n\n    // Reversing the number\n    while(num > 0)\n    {\n        rem = num % 10;\n        reverse = reverse * 10 + rem;\n        num = num / 10;\n    }\n\n    // Checking palindrome\n    if(original == reverse)\n    {\n        cout << \"Palindrome Number\" << endl;\n    }\n    else\n    {\n        cout << \"Not a Palindrome Number\" << endl;\n    }\n\n    return 0;\n}\n", "19_break_continue.cpp": "// W.A.P. to demo Loop Control\n/*\nProgram Name: Break and continue\nDescription: Altering normal loop execution flow by skipping or breaking out.\nConcepts Used: Loop Control\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    for(int i=1; i<=10; i++) {\n        if(i == 4) continue; // skip 4\n        if(i == 8) break;    // stop at 8\n        cout << i << \" \";\n    }\n    return 0;\n}\n", "20_array_io.cpp": "// W.A.P. to demo 1D Arrays\n/*\nProgram Name: Array input/output\nDescription: Storing multiple contiguous values in memory and looping through them.\nConcepts Used: 1D Arrays\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5];\n    cout << \"Enter 5 scores: \";\n    for(int i=0; i<5; i++) cin >> arr[i];\n    cout << \"Scores: \";\n    for(int i=0; i<5; i++) cout << arr[i] << \" \";\n    return 0;\n}\n", "21_sum_avg_array.cpp": "// W.A.P. to demo Accumulators\n/*\nProgram Name: Sum and average of array\nDescription: Iterating through an array to build a running total and calculating the mean.\nConcepts Used: Accumulators\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    int sum = 0;\n    for(int i=0; i<5; i++) sum += arr[i];\n    cout << \"Sum: \" << sum << \", Avg: \" << (float)sum/5 << endl;\n    return 0;\n}\n", "22_array_add.cpp": "// W.A.P. to add numbers using Array\n/*\nProgram Name: Array Addition\nDescription: Using an array to store multiple numbers\nand finding their total sum.\n\nConcepts Used:\n1. Array\n2. for Loop\n3. Addition\n\nBioinformatics Note: Aggregates total sequence quality scores across a block of reads.\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main()\n{\n    int arr[5] = {10, 20, 30, 40, 50};\n    int sum = 0;\n\n    // Adding array elements\n    for(int i = 0; i < 5; i++)\n    {\n        sum = sum + arr[i];\n    }\n\n    cout << \"Sum of array elements = \" << sum << endl;\n\n    return 0;\n}\n", "23_large_small_array.cpp": "// W.A.P. to demo Linear Search\n/*\nProgram Name: Largest/smallest in array\nDescription: Scanning an array to track and update the maximum and minimum values seen.\nConcepts Used: Linear Search\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {3, 1, 9, 7, 5};\n    int min = arr[0], max = arr[0];\n    for(int i=1; i<5; i++) {\n        if(arr[i] > max) max = arr[i];\n        if(arr[i] < min) min = arr[i];\n    }\n    cout << \"Min: \" << min << \", Max: \" << max << endl;\n    return 0;\n}\n", "24_matrix_add.cpp": "// W.A.P. to demo 2D Arrays\n/*\nProgram Name: Add two 2D matrices\nDescription: Using nested loops to iterate over rows and columns of 2D data structures.\nConcepts Used: 2D Arrays\n*/\n\n#include <iostream>\nusing namespace std;\nint main() {\n    int a[2][2]={{1,2},{3,4}}, b[2][2]={{1,1},{1,1}}, res[2][2];\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            res[i][j] = a[i][j] + b[i][j];\n            cout << res[i][j] << \" \";\n        }\n        cout << \"\\n\";\n    }\n    return 0;\n}\n", "25_concat_name.cpp": "// W.A.P. to String Manipulation\n/*\nProgram Name: String Operations\nDescription: Demonstrates various string operations including C-style strings (strcpy, strcat, strlen, strcmp) and C++ std::string.\nConcepts Used: C-Style Strings, C++ Strings, Input/Output Streams\n*/\n\n#include <iostream>\n#include <cstring> // Required for C-style string functions like strcpy, strcat, etc.\n#include <string>  // Required for C++ std::string class\n\nusing namespace std;\n\nint main() {\n    // ==========================================\n    // Part 1: C-Style String Manipulation\n    // ==========================================\n    cout << \"--- C-Style String Manipulation ---\" << endl;\n\n    char F_name[20];\n    char L_name[20];\n    char Full_name[50];\n\n    cout << \"Enter the first name: \";\n    cin.getline(F_name, 20);\n\n    cout << \"Enter the last name: \";\n    cin.getline(L_name, 20);\n\n    cout << \"The Full name is-: \" << F_name << \" \" << L_name << endl;\n\n    // String length \n    cout << \"The length of First name: \" << strlen(F_name) << endl;\n    cout << \"The length of last name: \" << strlen(L_name) << endl;\n\n    // Copy string \n    strcpy(Full_name, F_name);\n    cout << \"After Copy we get: \" << Full_name << endl;\n\n    // Concatenate string \n    strcat(Full_name, \" \"); // Adding a space to separate the names cleanly\n    strcat(Full_name, L_name);\n    cout << \"After concatenation we get: \" << Full_name << endl;\n\n    // String compare\n    if (strcmp(F_name, L_name) == 0) {\n        cout << \"The strings are same\" << endl;\n    } else {\n        cout << \"The strings are different\" << endl;\n    }\n\n    // ==========================================\n    // Part 2: C++ String Class \n    // ==========================================\n    cout << \"\\n--- C++ String Class ---\" << endl;\n    \n    // C++ string declarations (showing different initialization styles)\n    string str1 = \"hello\";\n    string str2(\"hello\");\n    string str3{\"World\"};\n    string str4;\n    string str5;\n\n    // Concatenation using C++ strings\n    str4 = str2 + \" \" + str3;\n    cout << \"After concatenation length is: \" << str4.length() << endl;\n    cout << \"Concatenated string is: \" << str4 << endl;\n\n    // Copying C++ strings\n    str5 = str4; \n    cout << \"After copying -: \" << str5 << endl;\n\n    return 0;\n}", "26_reverse_string.cpp": "// W.A.P. to demo String Manipulation\n/*\nProgram Name: Reverse a string\nDescription: Iterating backwards over a string or swapping characters in-place.\nConcepts Used: String Manipulation\n*/\n\n#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    cout << \"Enter DNA: \";\n    cin >> s;\n    cout << \"Reversed: \";\n    for(int i = s.length()-1; i >= 0; i--) {\n        cout << s[i];\n    }\n    cout << endl;\n    return 0;\n}\n", "27_sum_function.cpp": "// W.A.P. to demo Function Basics\n/*\nProgram Name: Sum using function\nDescription: Encapsulating code into reusable blocks that accept parameters and return values.\nConcepts Used: Function Basics\n*/\n\n#include <iostream>\nusing namespace std;\n\nint getSum(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    cout << \"Sum is: \" << getSum(3, 4) << endl;\n    return 0;\n}\n", "28_pass_array_func.cpp": "// W.A.P. to demo Array Decay\n/*\nProgram Name: Pass array to function\nDescription: Passing arrays to functions (they decay to pointers to the first element).\nConcepts Used: Array Decay\n*/\n\n#include <iostream>\nusing namespace std;\n\nvoid printArray(int arr[], int size) {\n    for(int i=0; i<size; i++) cout << arr[i] << \" \";\n}\n\nint main() {\n    int seq[] = {1, 2, 3, 4};\n    printArray(seq, 4);\n    return 0;\n}\n", "29_swap_value.cpp": "// W.A.P. to demo Pass by Value\n/*\nProgram Name: Swap (Call by Value)\nDescription: Demonstrating that passing standard arguments creates copies, making local swaps fail globally.\nConcepts Used: Pass by Value\n*/\n\n#include <iostream>\nusing namespace std;\n\nvoid swap(int a, int b)\n{\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main()\n{\n    int x = 10, y = 20;\n\n    cout << \"Before swap : x = \" << x << \" , y = \" << y << endl;\n\n    swap(x, y);\n\n    cout << \"After swap : x = \" << x << \" , y = \" << y << endl;\n\n    return 0;\n}\n", "30_swap_ref.cpp": "// W.A.P. to demo Pass by Reference\n/*\nProgram Name: Swap (Call by Reference)\nDescription: Passing memory addresses (&) so functions can modify original variables.\nConcepts Used: Pass by Reference\n*/\n#include <iostream>\nusing namespace std;\n\n// Function using references (&) to swap original values\nvoid swap(int &a, int &b)\n{\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main()\n{\n    int x = 10, y = 20;\n\n    cout << \"Before swap : x = \" << x << \" , y = \" << y << endl;\n\n    swap(x, y);\n\n    cout << \"After swap : x = \" << x << \" , y = \" << y << endl;\n\n    return 0;\n}", "31_recursive_sum.cpp": "// W.A.P. to demo Recursion\n/*\nProgram Name: Recursive sum of naturals\nDescription: A function calling itself with a base case to prevent infinite loops.\nConcepts Used: Recursion\n*/\n\n#include <iostream>\nusing namespace std;\n\nint rSum(int n) {\n    if(n <= 0) return 0;\n    return n + rSum(n - 1);\n}\n\nint main() {\n    cout << \"Sum to 5: \" << rSum(5) << endl;\n    return 0;\n}\n", "32_recursive_factorial.cpp": "// W.A.P. to demo Recursive Math\n/*\nProgram Name: Recursive factorial\nDescription: Classic algorithmic recursion calculating n! by breaking down to n * (n-1)!\nConcepts Used: Recursive Math\n*/\n\n#include <iostream>\nusing namespace std;\n\nint fact(int n) {\n    if(n <= 1) return 1;\n    return n * fact(n - 1);\n}\n\nint main() {\n    cout << \"Factorial 4: \" << fact(4) << endl;\n    return 0;\n}\n", "33_pointer_basics.cpp": "// W.A.P. to demo Memory Addresses\n/*\nProgram Name: Pointer basics\nDescription: Introduction to pointers (*), dereferencing, and the address-of operator (&).\nConcepts Used: Memory Addresses\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int val = 10;\n    int *ptr = &val;\n    cout << \"Address: \" << ptr << \", Value: \" << *ptr << endl;\n    return 0;\n}\n", "34_add_pointers.cpp": "// W.A.P. to demo Pointer Arithmetic\n/*\nProgram Name: Add numbers via pointers\nDescription: Using pointers to indirectly access and sum distinct memory locations.\nConcepts Used: Pointer Arithmetic\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a=5, b=6;\n    int *p1=&a, *p2=&b;\n    cout << \"Sum: \" << *p1 + *p2 << endl;\n    return 0;\n}\n", "35_swap_pointers.cpp": "// Swapping two numbers using pointers\n/*\nProgram Name: Swap Using Pointers\nDescription: Modifies variable values directly in memory using pointer dereferencing.\n\nConcepts Used: Pointers, Call by Reference\n\nBioinformatics Note: In-place memory swap of large genomic sequences to avoid expensive copy operations.\n*/\n\n#include <iostream>\nusing namespace std;\n\n// Function using pointers\nvoid swap(int *a, int *b)\n{\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main()\n{\n    int x = 10, y = 20;\n\n    cout << \"Before swap : x = \" << x << \" , y = \" << y << endl;\n\n    swap(&x, &y);\n\n    cout << \"After swap : x = \" << x << \" , y = \" << y << endl;\n\n    return 0;\n}\n", "36_dyn_array.cpp": "// W.A.P. to demo Heap Allocation\n/*\nProgram Name: Dynamic array\nDescription: Using `new` and `delete` to manually allocate arrays at runtime based on dynamic sizes.\nConcepts Used: Heap Allocation\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int length = 5; \n    \n    // Allocate memory dynamically\n    char* dna = new char[length];\n    \n    for(int i = 0; i < length; i++) {\n        dna[i] = 'A'; // Fill with Adenine\n    }\n    \n    cout << \"Sequence: \";\n    for(int i = 0; i < length; i++) {\n        cout << dna[i];\n    }\n    cout << endl;\n    \n    delete[] dna; // Always free memory!\n    \n    return 0;\n}\n", "37_class_object.cpp": "// W.A.P. to demo OOP\n/*\nProgram Name: Class & Object Basics\nDescription: GfG class showcasing pure basic encapsulation.\nConcepts Used: OOP\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass GfG {\npublic:\n    int val; // Data member\n    void show() { // Member function\n        cout << \"Value: \" << val << endl;\n    }\n};\n\nint main() {\n    GfG obj;\n    obj.val = 10;\n    obj.show();\n    return 0;\n}\n", "38_student_class.cpp": "// W.A.P. to demo Classes and Objects\n/*\nProgram Name: Student class\nDescription: Defining a class blueprint with attributes and methods, instantiating objects.\nConcepts Used: Classes and Objects\n*/\n\n#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int roll;\n};\n\nint main() {\n    Student s1;\n    s1.name = \"John\";\n    s1.roll = 101;\n    cout << \"Student: \" << s1.name << \", Roll: \" << s1.roll << endl;\n    return 0;\n}\n", "39_getdata_display.cpp": "// W.A.P. to demo Methods\n/*\nProgram Name: getData() and display()\nDescription: Adding member functions to a class to intake and output object state.\nConcepts Used: Methods\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass DataObj {\n    int data;\npublic:\n    void getData() { cin >> data; }\n    void display() { cout << \"Data: \" << data << endl; }\n};\n\nint main() {\n    DataObj d;\n    cout << \"Enter data: \"; d.getData();\n    d.display();\n    return 0;\n}\n", "40_factorial_class.cpp": "// W.A.P. to demo Encapsulated Logic\n/*\nProgram Name: Factorial class\nDescription: Wrapping procedural logic (factorial algorithm) securely inside an object-oriented shell.\nConcepts Used: Encapsulated Logic\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Factorial {\npublic:\n    int calc(int n) {\n        int f = 1;\n        for(int i=1; i<=n; i++) f *= i;\n        return f;\n    }\n};\n\nint main() {\n    Factorial obj;\n    cout << \"Fact 5: \" << obj.calc(5) << endl;\n    return 0;\n}\n", "41_array_objects.cpp": "// W.A.P. to demo Object Arrays\n/*\nProgram Name: Array of objects\nDescription: Creating arrays where every element is an instance of a class, looping over them.\nConcepts Used: Object Arrays\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Bioinformatics {\n    int id;\n    char name[20];\n    float marks;\npublic:\n    void getdata() {\n        cout << \"\\nEnter student ID   : \";\n        cin >> id;\n        cout << \"Enter student name : \";\n        cin >> name;\n        cout << \"Enter student marks: \";\n        cin >> marks;\n    }\n    void show() {\n        cout << \"\\nID: \" << id << \"\\tName: \" << name << \"\\tMarks: \" << marks << endl;\n    }\n};\n\nint main() {\n    int n;\n    cout << \"Enter the number of students: \";\n    cin >> n;\n\n    // Dynamic allocation for standard C++ compliance\n    Bioinformatics *obj = new Bioinformatics[n];\n\n    for (int i = 0; i < n; i++) {\n        cout << \"\\n--- Enter details of student \" << i + 1 << \" ---\";\n        obj[i].getdata();\n    }\n\n    cout << \"\\n--- Student Details ---\";\n    for (int i = 0; i < n; i++) {\n        obj[i].show();\n    }\n\n    delete[] obj; // Clean up memory\n    return 0;\n}\n", "42_bank_encapsulation.cpp": "// W.A.P. to demo Data Hiding\n/*\nProgram Name: Bank (Encapsulation)\nDescription: Using private modifiers to protect sensitive data, accessed only via public getter/setter methods.\nConcepts Used: Data Hiding\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass BankAcc {\n    int balance = 0; // private\npublic:\n    void deposit(int amt) { balance += amt; }\n    void show() { cout << \"Bal: \" << balance << endl; }\n};\n\nint main() {\n    BankAcc b;\n    b.deposit(500);\n    b.show();\n    return 0;\n}\n", "43_func_outside_class.cpp": "// W.A.P. to demo Scope Resolution\n/*\nProgram Name: Function outside class\nDescription: Declaring a method inside a class, but defining it outside use the `::` operator.\nConcepts Used: Scope Resolution\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Demo {\npublic:\n    void display();\n};\n\nvoid Demo::display() {\n    cout << \"Outside class!\" << endl;\n}\n\nint main() {\n    Demo d; d.display();\n    return 0;\n}\n", "44_access_specifiers.cpp": "// W.A.P. to demo Public/Private/Protected\n/*\nProgram Name: Access specifiers\nDescription: Demonstrating the strict boundaries of class member visibility.\nConcepts Used: Public/Private/Protected\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Test {\nprivate: int a = 1;\nprotected: int b = 2;\npublic: int c = 3;\n    void show() { cout << a << b << c << endl; }\n};\n\nint main() {\n    Test t;\n    // t.a and t.b are inaccessible here\n    cout << \"Public var: \" << t.c << endl;\n    t.show();\n    return 0;\n}\n", "45_static_counter.cpp": "// W.A.P. to demo Static Members\n/*\nProgram Name: Static object counter\nDescription: Using variables that belong to the Class itself, shared across all instantiated objects.\nConcepts Used: Static Members\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Item {\n    static int count;\npublic:\n    Item() { count++; }\n    static void show() { cout << \"Count: \" << count << endl; }\n};\n// init static\nint Item::count = 0;\n\nint main() {\n    Item i1, i2;\n    Item::show();\n    return 0;\n}\n", "46_friend_func.cpp": "// W.A.P. to demo Friend Access\n/*\nProgram Name: Friend function\nDescription: Granting non-member functions access to private class variables.\nConcepts Used: Friend Access\n*/\n\n/*\nConcepts Used: Friend Functions exist outside a class, they don't use '::', and take object instances safely as arguments!\nNote: A friend method has privileges to reach straight inside the class boundary and retrieve private data members.\n*/\n#include <iostream>\nusing namespace std;\n\n// Class A\nclass A{\nprivate:\n    int x;\npublic:\n    // Constructor\n    A(){\n        x = 10;\n    }\n    friend class B;   // Friend class declaration\n};\n// Class B\nclass B{\npublic:\n    void show(A obj)    {\n        // Accessing private member of class A\n        cout << \"Value of x = \" << obj.x << endl;\n    }\n};\nint main(){\n    A obj1;\n    B obj2;\n    obj2.show(obj1);\n    return 0;\n}", "47_constructors.cpp": "// W.A.P. to demonstrate Constructors and its Types\n/*\nProgram Name: Constructors\nDescription: Constructors are special member functions\nthat are automatically called when an object is created.\n\nTypes of Constructors Used:\n1. Default Constructor\n2. Parameterized Constructor\n3. Copy Constructor\n\nConcepts Used: Constructors\nBioinformatics Note: Properly initializes complex sequence buffers or deep-copies existing gene objects for variant comparison.\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Student\n{\npublic:\n    int marks;\n\n    // 1. Default Constructor\n    Student()\n    {\n        marks = 0;\n        cout << \"Default Constructor called.\" << endl;\n    }\n\n    // 2. Parameterized Constructor\n    Student(int m)\n    {\n        marks = m;\n        cout << \"Parameterized Constructor called.\" << endl;\n        cout << \"Marks = \" << marks << endl;\n    }\n\n    // 3. Copy Constructor\n    Student(const Student &obj)\n    {\n        marks = obj.marks;\n        cout << \"Copy Constructor called.\" << endl;\n        cout << \"Copied Marks = \" << marks << endl;\n    }\n};\n\nint main()\n{\n    // Calling Default Constructor\n    cout << \"Creating student1...\" << endl;\n    Student student1;\n\n    cout << endl;\n\n    // Calling Parameterized Constructor\n    cout << \"Creating student2...\" << endl;\n    Student student2(95);\n\n    cout << endl;\n\n    // Calling Copy Constructor\n    cout << \"Creating student3 by copying student2...\" << endl;\n    Student student3 = student2;\n\n    return 0;\n}", "48_destructor.cpp": "// W.A.P. to demo Cleanup\n/*\nProgram Name: Destructor\nDescription: Special methods (`~Name()`) that fire when an object is destroyed or falls out of scope.\nConcepts Used: Cleanup\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Demo {\npublic:\n    // Constructor\n    Demo() {\n        cout << \"Constructor called (Object created)\" << endl;\n    }\n\n    // Destructor\n    ~Demo() {\n        cout << \"Destructor called (Object destroyed)\" << endl;\n    }\n\n    void display() {\n        cout << \"Inside display function\" << endl;\n    }\n};\n\nint main() {\n    Demo obj;   // Object created\n\n    obj.display();\n\n    return 0;   // Destructor automatically called here\n}", "49_func_overload.cpp": "// W.A.P. to demo Polymorphism (Compile-time)\n/*\nProgram Name: Function overloading\nDescription: Creating multiple functions with the same name but different argument signatures.\nConcepts Used: Polymorphism (Compile-time)\n*/\n\n#include <iostream>\nusing namespace std;\n\n// Add single base\nvoid addDNA(char base) {\n    cout << \"Added base: \" << base << endl;\n}\n\n// Add full sequence\nvoid addDNA(string seq) {\n    cout << \"Added sequence: \" << seq << endl;\n}\n\nint main() {\n    addDNA('A');\n    addDNA(\"ATGC\");\n    \n    return 0;\n}\n", "50_unary_overload.cpp": "// W.A.P. to demo Operator Overloading\n/*\nProgram Name: Unary ++ operator\nDescription: Redefining base operators like ++ to work intimately with custom classes.\nConcepts Used: Operator Overloading\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Generation {\nprivate:\n    int count;\npublic:\n    Generation() { count = 0; }\n    \n    // Unary operator overload\n    void operator++() {\n        count++; // Increment generation directly\n    }\n    \n    void display() {\n        cout << \"Generation: \" << count << endl;\n    }\n};\n\nint main() {\n    Generation gen;\n    gen.display();\n    \n    ++gen; // Using the overloaded ++ \n    gen.display();\n    \n    return 0;\n}\n", "51_binary_overload.cpp": "// W.A.P. to demo Binary Overloading\n/*\nProgram Name: Binary + (Complex)\nDescription: Overloading + to add two custom objects together (like Complex Numbers).\nConcepts Used: Binary Overloading\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass DNA {\nprivate:\n    string seq;\npublic:\n    DNA(string s = \"\") { seq = s; }\n    \n    // Overload + to easily combine sequences\n    DNA operator+(DNA other) {\n        return DNA(seq + other.seq); \n    }\n    \n    void display() {\n        cout << \"DNA: \" << seq << endl;\n    }\n};\n\nint main() {\n    DNA strand1(\"AT\");\n    DNA strand2(\"GC\");\n    \n    // Straightforward addition\n    DNA combined = strand1 + strand2;\n    combined.display();\n    \n    return 0;\n}\n", "52_basic_to_class.cpp": "// W.A.P. to demo Type Conversion\n/*\nProgram Name: Basic-to-class conversion\nDescription: Using overloaded constructors to implicitly convert an `int` or `float` into a complex Class object.\nConcepts Used: Type Conversion\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Time {\n    int hr, min;\npublic:\n    // conversion constructor\n    Time(int t) {\n        hr = t / 60;\n        min = t % 60;\n    }\n    void show() { cout << hr << \"h \" << min << \"m\\n\"; }\n};\n\nint main() {\n    Time t = 130;  // integer converting to class type implicitly\n    t.show();\n    return 0;\n}\n", "53_single_inheritance.cpp": "// W.A.P. to demo Code Reusability\n/*\nProgram Name: Single inheritance\nDescription: A child class extending a parent class, inheriting its methods and public attributes.\nConcepts Used: Code Reusability\n*/\n\n#include <iostream>\nusing namespace std;\n\n// Base Class\nclass Cell {\npublic:\n    void metabolize() {\n        cout << \"Cell is performing metabolic reactions.\" << endl;\n    }\n};\n\n// Derived Class\nclass Neuron : public Cell {\npublic:\n    void sendSignal() {\n        cout << \"Neuron is transmitting an electrical impulse.\" << endl;\n    }\n};\n\nint main() {\n    Neuron n;\n    n.metabolize(); // Inherited from Cell \n    n.sendSignal(); // Specific to Neuron\n    return 0;\n}", "54_multiple_inheritance.cpp": "// W.A.P. to demo Multiple Parent Classes\n/*\nProgram Name: Multiple inheritance\nDescription: A class extending two or more distinct parent classes (unique to C++).\nConcepts Used: Multiple Parent Classes\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass DNA {\npublic:\n    void storeInfo() { cout << \"DNA: Storing genetic sequence.\" << endl; }\n};\n\nclass Histone {\npublic:\n    void provideStructure() { cout << \"Histone: Providing structural support.\" << endl; }\n};\n\n// Chromosome inherits from BOTH DNA and Histone\nclass Chromosome : public DNA, public Histone {\npublic:\n    void replicate() { cout << \"Chromosome: Replicating during S-phase.\" << endl; }\n};\n\nint main() {\n    Chromosome chr;\n    chr.storeInfo();        // From DNA \n    chr.provideStructure(); // From Histone \n    chr.replicate();\n    return 0;\n}", "55_multilevel_inheritance.cpp": "// W.A.P. to demo Inheritance Chains\n/*\nProgram Name: Multilevel inheritance\nDescription: A -> B -> C hierarchy. Grandparent, parent, child relationship scaling properties.\nConcepts Used: Inheritance Chains\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass A { \npublic:\n    void meth1() { cout << \"A\" << endl; }\n};\nclass B : public A { \npublic:\n    void meth2() { cout << \"B\" << endl; }\n};\nclass C : public B { \npublic:\n    void meth3() { cout << \"C\" << endl; }\n};\n\nint main() {\n    C c;\n    c.meth1(); c.meth2(); c.meth3();\n    return 0;\n}\n", "56_hybrid_inheritance.cpp": "// W.A.P. to demo C++ Standard Operation\n/*\nProgram Name: 54 Hybrid Inheritance\nDescription: A standard bio-informatics logic sample.\nConcepts Used: C++ Standard Operation\n*/\n\n#include <iostream>\nusing namespace std;\n\n// Top level base class\nclass Device {\npublic:\n    Device() { cout << \"Device constructor executed.\" << endl; }\n    void powerOn() {\n        cout << \"Device powers on successfully.\" << endl;\n    }\n};\n\n// First intermediate class inherits virtually!\nclass Printer : virtual public Device {\npublic:\n    void print() { cout << \"Printing document...\" << endl; }\n};\n\n// Second intermediate class inherits virtually!\nclass Scanner : virtual public Device {\npublic:\n    void scan() { cout << \"Scanning document...\" << endl; }\n};\n\n// Bottom level inherits identically\nclass Copier_Combo : public Printer, public Scanner {\npublic:\n    void copy() {\n        cout << \"Duplicating utilizing scanning and printing flows...\" << endl;\n    }\n};\n\nint main() {\n    Copier_Combo machine;\n    \n    // Due to 'virtual' inheritance, there is only ONE copy of powerOn()\n    // Resolving the diamond ambiguity elegantly!\n    machine.powerOn();     \n    machine.scan();\n    machine.print();\n    machine.copy();\n    \n    return 0;\n}\n", "57_hierarchical_inheritance.cpp": "// W.A.P. to demo Multiple Derived Classes\n/*\nProgram Name: Hierarchical Inheritance\nDescription: Demonstrating one parent class passing traits to multiple distinct parallel child classes.\nConcepts Used: Multiple Derived Classes\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Cell {\npublic:\n    void divide() {\n        cout << \"Cell is dividing.\" << endl;\n    }\n};\n\nclass PlantCell : public Cell {\npublic:\n    void photosynthesis() {\n        cout << \"Making food via sunlight.\" << endl;\n    }\n};\n\nclass AnimalCell : public Cell {\npublic:\n    void move() {\n        cout << \"Animal cell moving.\" << endl;\n    }\n};\n\nint main() {\n    PlantCell plant;\n    AnimalCell animal;\n    \n    plant.divide();\n    plant.photosynthesis();\n    \n    animal.divide();\n    animal.move();\n    \n    return 0;\n}\n", "58_runtime_poly.cpp": "// W.A.P. to demo Virtual Functions\n/*\nProgram Name: Runtime polymorphism\nDescription: Using `virtual` and pointers to allow derived classes to override base class behavior securely at runtime.\nConcepts Used: Virtual Functions\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Cell {\npublic:\n    virtual void type() { \n        cout << \"Generic Cell\" << endl; \n    }\n};\n\nclass BloodCell : public Cell {\npublic:\n    void type() override { \n        cout << \"Red Blood Cell\" << endl; \n    }\n};\n\nint main() {\n    Cell* pointer;\n    BloodCell blood;\n    \n    // Pointer of Base points to object of Derived\n    pointer = &blood;\n    pointer->type(); \n    \n    return 0;\n}\n", "59_virtual_function.cpp": "// W.A.P. to demo Runtime Polymorphism\n/*\nProgram Name: Virtual Function\nDescription: Demonstrating runtime polymorphism via a dedicated virtual method interface mapping derived mutations securely.\nConcepts Used: Runtime Polymorphism\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() { \n        cout << \"Animal sound\" << endl; \n    }\n};\n\n// Dog overrides the virtual function\nclass Dog : public Animal {\npublic:\n    void sound() override { \n        cout << \"Bark!\" << endl; \n    }\n};\n\nint main() {\n    // Dynamic memory allocation casting to Base pointer\n    Animal* a = new Dog();\n    a->sound(); // Late binding via virtual keyword\n    \n    delete a;\n    return 0;\n}\n", "60_exception_handling.cpp": "// W.A.P. to demo Try, Catch, Throw\n/*\nProgram Name: Exception handling (div by 0)\nDescription: Safely catching dangerous runtime errors (like division by zero) without crashing the program.\nConcepts Used: Try, Catch, Throw\n*/\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 0;\n\n    try {\n        if (b == 0)\n            throw b;   // throwing error\n\n        cout << \"Result: \" << a / b << endl;\n    }\n    catch (int x) {\n        cout << \"Error: Division by zero!\" << endl;\n    }\n\n    return 0;\n}\n", "61_file_handling.cpp": "// W.A.P. to demo File Streams\n/*\nProgram Name: File Handling (Read/Write)\nDescription: Demonstrates how to create a file, write a string to it, and read the content back into the program.\nConcepts Used: File Streams\n*/\n\n#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string fileName = \"student_record.txt\";\n    string writeName = \"Siddharth\";\n    int writeRoll = 42;\n    float writeMarks = 95.5;\n    \n    // Writing details to file (ios::out is default for ofstream)\n    ofstream outFile(fileName, ios::out);\n    if (!outFile) {\n        cerr << \"Error establishing file for writing.\" << endl;\n        return 1;\n    }\n    \n    outFile << writeName << endl;\n    outFile << writeRoll << endl;\n    outFile << writeMarks << endl;\n    outFile.close(); // Securing file\n    \n    cout << \"Student details successfully written to \" << fileName << endl;\n    \n    // Reading details back\n    ifstream inFile(fileName, ios::in);\n    if (!inFile) {\n        cerr << \"Error establishing file for reading.\" << endl;\n        return 1;\n    }\n    \n    string readName;\n    int readRoll;\n    float readMarks;\n    \n    inFile >> readName;\n    inFile >> readRoll;\n    inFile >> readMarks;\n    inFile.close(); // Securing file\n    \n    cout << \"\\n--- Student Record Output ---\" << endl;\n    cout << \"Name: \" << readName << endl;\n    cout << \"Roll Number: \" << readRoll << endl;\n    cout << \"Marks: \" << readMarks << endl;\n\n    return 0;\n}\n", "62_deep_shallow_copy.cpp": "// W.A.P. to demo Memory Architecture\n/*\nProgram Name: Deep vs Shallow Copy\nDescription: Exploring the catastrophic consequences of shallow-copy pointer duplications and building explicit Deep Copy constructors using heap (new) allocation.\nConcepts Used: Memory Architecture\n*/\n\n#include <iostream>\nusing namespace std;\n\nclass Buffer {\npublic:\n    int* data;\n    \n    // Parameterized Constructor mapping array to heap\n    Buffer(int val) {\n        data = new int;\n        *data = val;\n        cout << \"Constructor executed: Memory allocated at \" << data << \" (Val: \" << *data << \")\\n\";\n    }\n    \n    // Deep Copy Constructor\n    Buffer(const Buffer &source) {\n        // Without this, both pointers would point to the same memory address (Shallow Copy Crash!)\n        data = new int; \n        *data = *(source.data);\n        cout << \"Deep Copy executed: NEW memory allocated at \" << data << \" (Val: \" << *data << \")\\n\";\n    }\n    \n    ~Buffer() {\n        delete data; // Free distinct heap locations safely\n        cout << \"Destructor: Memory freed.\\n\";\n    }\n};\n\nint main() {\n    cout << \"Instantiating Primary Buffer:\\n\";\n    Buffer obj1(42);\n    \n    cout << \"\\nCloning to Secondary Buffer:\\n\";\n    Buffer obj2 = obj1; // This fundamentally triggers our Deep Copy Constructor\n    \n    cout << \"\\nTerminating application bounds:\\n\";\n    cout << \"\\n--- BioAlign-Pro ---\" << endl;\n    return 0;\n}\n", "63_templates.cpp": "// W.A.P. to demo Generic Programming\n/*\nProgram Name: C++ Templates (Generics)\nDescription: Creating generic `template <typename T>` signatures able to intuitively execute standard mathematical routines across varying data bounds (int, float, string) simultaneously.\nConcepts Used: Generic Programming\n*/\n\n#include <iostream>\nusing namespace std;\n\n// 1. We declare 'T' as a generalized template typename\ntemplate <typename T>\nT calculateAggregation(T valA, T valB) {\n    // 2. The compiler will automatically substitute 'T' for int, float, double at runtime!\n    return valA + valB;\n}\n\nint main() {\n    cout << \"Executing Template with Integers: \\n\";\n    int iResult = calculateAggregation<int>(15, 30);\n    cout << \"Result: \" << iResult << \"\\n\\n\";\n    \n    cout << \"Executing EXACT SAME Template with Floats (Decimals): \\n\";\n    float fResult = calculateAggregation<float>(14.5f, 2.2f);\n    cout << \"Result: \" << fResult << \"\\n\\n\";\n    \n    cout << \"\\n--- BioAlign-Pro ---\" << endl;\n    return 0;\n}\n"};

window.App = {};

// --- MODULE: data.js ---
window.App.Data = {
    units: {
        'Unit I: Basics, Control Flow, Arrays': { icon: '🔢', title: 'Basics & Arrays' },
        'Unit II: Functions & Pointers': { icon: '⚙️', title: 'Functions & Pointers' },
        'Unit III: OOP': { icon: '🧠', title: 'Object Oriented Programming' }
    },
    cppFiles: [
        { id: '1_hello_world.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '1. Print "Hello World"', concept: 'Standard I/O stream', description: 'The absolute beginning. Demonstrates how to write to standard output using the `cout` stream (with `using namespace std;`).', useCase: 'Testing compiler setup and basic syntax.', bioNote: 'Validates standard POSIX-compliant stdout streams for log-level reporting in sequence processing pipelines.' },
        { id: '2_integer_input.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '2. Take integer input & display', concept: 'Input Streams', description: 'Using std::cin to read user input into a variable memory address.', useCase: 'Interactive CLI tools.', bioNote: 'Captures user-defined genomic coordinates or base-pair offsets for localized sequence alignment queries.' },
        { id: '3_arithmetic_ops.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '3. Arithmetic operations', concept: 'Binary Operators', description: 'Basic math (+, -, *, /, %) operations in C++.', useCase: 'Calculators and math logic.', bioNote: 'Calculates bit-precision score differentials and hamming distances between homologous sequence fragments.' },
        { id: '4_sizeof_datatypes.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '4. Size of data types', concept: 'Memory Allocation', description: 'Using the sizeof() operator to understand byte sizes of primitive types.', useCase: 'Memory optimization and hardware constraints.', bioNote: 'Determines memory footprint requirements for caching large-scale chromosomal datasets in RAM.' },
        { id: '5_even_odd.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '5. Even or Odd check', concept: 'Modulo Arithmetic', description: 'Checking remainders with the modulo operator (%) and an if-else block.', useCase: 'Parity checking, alternating table rows.', bioNote: 'Identifies open reading frame (ORF) parity to distinguish between forward and reverse strand coding regions.' },
        { id: '6_if_statement.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '6. Basic if statement', concept: 'Control flow', description: 'Evaluating simple logical blocks.', useCase: 'Branch execution.', bioNote: 'Evaluates basic presence/absence of primary matching motifs.' },
        { id: '7_smallest_two.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '7. Smallest of two numbers', concept: 'Simple condition', description: 'Basic conditional assignment.', useCase: 'Finding minimums.', bioNote: 'Performs baseline sequence length filtering.' },
        { id: '8_largest_three.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '8. Largest among three', concept: 'Nested Conditionals', description: 'Using logical AND (&&) to compare multiple variables simultaneously.', useCase: 'Sorting algorithms, max/min finding.', bioNote: 'Implements optimal path selection logic within the traceback step of Gotoh or Smith-Waterman alignment matrices.' },
        { id: '9_leap_year.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '9. Leap year check', concept: 'Complex Boolean Logic', description: 'Handling multple conditions (divisible by 4, not 100, unless 400).', useCase: 'Calendar tools, date validations.', bioNote: 'Ensures high-precision temporal synchronization for longitudinal metagenomic sample tracking.' },
        { id: '10_calc_switch.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '10. Calculator (switch)', concept: 'Switch Case', description: 'Using a switch statement instead of multiple if-else blocks to achieve clean routing.', useCase: 'Menu systems, state machines.', bioNote: 'Translates discrete nucleotide or amino acid characters into specific downstream algorithmic execution paths.' },
        { id: '11_print_1_10_for.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '11. Print 1 to 10 (for)', concept: 'For Loops', description: 'Basic iterative looping with initialization, condition, and increment.', useCase: 'Iterating over known ranges.', bioNote: 'Iterates through N-dimensional sequence array indices to perform per-base mutation analysis.' },
        { id: '12_fibonacci_while.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '12. Fibonacci 10 Terms (while)', concept: 'While Loops', description: 'Generates and displays the first 10 terms of the Fibonacci sequence using a while loop.', useCase: 'Fixed-generation population expansion modeling.', bioNote: 'Models exponential population growth over exactly 10 generations in microbial ecology simulations.' },
        { id: '13_fibonacci_for.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '13. Fibonacci 10 Terms (for)', concept: 'For Loops', description: 'Generates and displays the first 10 terms of the Fibonacci sequence using a for loop.', useCase: 'Iterative genetic drift analysis.', bioNote: 'Simulates multi-generational genetic drift across exactly 10 nodes of a population bottleneck.' },
        { id: '14_fibonacci_while_limit.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '14. Fibonacci Under 10 (while)', concept: 'Value Boundaries', description: 'Generates all Fibonacci numbers strictly less than 10 using a while loop.', useCase: 'Metabolic threshold monitoring.', bioNote: 'Simulates threshold-limited ribosomal growth where protein synthesis ceases upon reaching a specific concentration limit (X=10).' },
        { id: '15_fibonacci_for_limit.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '15. Fibonacci Under 10 (for)', concept: 'Bounded Iteration', description: 'Generates all Fibonacci numbers strictly less than 10 using a for loop.', useCase: 'Localized genomic region search.', bioNote: 'Applies a bounded iterative search to identify sub-threshold genetic variants within a localized genomic region.' },
        { id: '16_prime_check.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '16. Prime number check', concept: 'Algorithmic Search', description: 'Looping up to half the number to check for factors, determining primality.', useCase: 'Cryptography, hashing algorithms.', bioNote: 'Optimizes cryptographic salt generation and hash-table sizing for secure genomic data encryption.' },
        { id: '17_armstrong.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '17. Armstrong number', concept: 'Digit Extraction', description: 'Using modulo 10 and division to process a number digit-by-digit.', useCase: 'Number theory, digit isolation.', bioNote: 'Applies digit-wise pattern recognition for identifying non-random statistical anomalies in nucleotide distributions.' },
        { id: '18_palindrome.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '18. Palindrome Number', concept: 'while Loop', description: 'A palindrome number remains the same when its digits are reversed.', useCase: 'String manipulation, digit extraction.', bioNote: 'Used to detect palindromic sequences in DNA (e.g. restriction enzyme sites).' },
        { id: '19_break_continue.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '19. Break and continue', concept: 'Loop Control', description: 'Altering normal loop execution flow by skipping or breaking out.', useCase: 'Error handling, fast-fail scenarios.', bioNote: 'Handles filter-fail logic: skips non-canonical nucleotides (continue) or aborts read processing on low-quality thresholds (break).' },
        { id: '20_array_io.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '20. Array input/output', concept: '1D Arrays', description: 'Storing multiple contiguous values in memory and looping through them.', useCase: 'Data lists, vectors.', bioNote: 'Stores and retrieves high-density Phred quality scores for high-throughput sequencing (HTS) read batches.' },
        { id: '21_sum_avg_array.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '21. Sum and average of array', concept: 'Accumulators', description: 'Iterating through an array to build a running total and calculating the mean.', useCase: 'Statistics, data aggregation.', bioNote: 'Computes the mean alignment score and statistical variance across a set of diverse reads.' },
        { id: '22_array_add.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '22. Array Addition', concept: 'Arrays', description: 'Using an array to store multiple numbers and finding their total sum.', useCase: 'Data aggregation.', bioNote: 'Aggregates total sequence quality scores across a block of reads.' },
        { id: '23_large_small_array.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '23. Largest/smallest in array', concept: 'Linear Search', description: 'Scanning an array to track and update the maximum and minimum values seen.', useCase: 'Finding extremes in datasets.', bioNote: 'Identifies the highest-scoring local alignment and the lowest-confidence base call in a read sequence.' },
        { id: '24_matrix_add.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '24. Add two 2D matrices', concept: '2D Arrays', description: 'Using nested loops to iterate over rows and columns of 2D data structures.', useCase: 'Graphics, linear algebra, grid logic.', bioNote: 'Aggregates substitution probability matrices (e.g., BLOSUM62) to determine evolutionary conservation scores.' },
        { id: '25_concat_name.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '25. Concatenate names', concept: 'String Concatenation', description: 'Combining std::string objects using the + operator.', useCase: 'UI output, formatting full names.', bioNote: 'Performs sequence joining for de novo assembly of overlapping contigs into unified scaffolds.' },
        { id: '26_reverse_string.cpp', unit: 'Unit I: Basics, Control Flow, Arrays', title: '26. Reverse a string', concept: 'String Manipulation', description: 'Iterating backwards over a string or swapping characters in-place.', useCase: 'Palindromes, encoding.', bioNote: 'Computes the reverse-complement of a DNA strand, a critical prerequisite for double-stranded alignment.' },

        { id: '27_sum_function.cpp', unit: 'Unit II: Functions & Pointers', title: '27. Sum using function', concept: 'Function Basics', description: 'Encapsulating code into reusable blocks that accept parameters and return values.', useCase: 'Code modularity, DRY principle.', bioNote: 'Encapsulates repetitive scoring math into modular, high-performance library calls for reuse in large scale pipelines.' },
        { id: '28_pass_array_func.cpp', unit: 'Unit II: Functions & Pointers', title: '28. Pass array to function', concept: 'Array Decay', description: 'Passing arrays to functions (they decay to pointers to the first element).', useCase: 'Sorting/filtering algorithms.', bioNote: 'Transfers massive sequence data pointers to specialized alignment scoring engines for efficient memory management.' },
        { id: '29_swap_value.cpp', unit: 'Unit II: Functions & Pointers', title: '29. Swap (Call by Value)', concept: 'Pass by Value', description: 'Demonstrating that passing standard arguments creates copies, making local swaps fail globally.', useCase: 'Understanding local scope isolating.', bioNote: 'Simulates hypothetical point mutations in a sequence copy without altering the original primary sample data.' },
        { id: '30_swap_ref.cpp', unit: 'Unit II: Functions & Pointers', title: '30. Swap (Call by Reference)', concept: 'Pass by Reference', description: 'Passing memory addresses (&) so functions can modify original variables.', useCase: 'Efficient large payload handling, mutating state.', bioNote: 'Executes permanent in-place memory mutations for physiological sequence corrections during assembly polishing.' },
        { id: '31_recursive_sum.cpp', unit: 'Unit II: Functions & Pointers', title: '31. Recursive sum of naturals', concept: 'Recursion', description: 'A function calling itself with a base case to prevent infinite loops.', useCase: 'Tree traversal, fractal math.', bioNote: 'Navigates deep, bifurcating nodes in complex phylogenetic trees to calculate cumulative evolutionary distances.' },
        { id: '32_recursive_factorial.cpp', unit: 'Unit II: Functions & Pointers', title: '32. Recursive factorial', concept: 'Recursive Math', description: 'Classic algorithmic recursion calculating n! by breaking down to n * (n-1)!', useCase: 'Combinatorics, permutations.', bioNote: 'Calculates the statistical permutations of potential sequence configurations in combinatorial structural biology.' },
        { id: '33_pointer_basics.cpp', unit: 'Unit II: Functions & Pointers', title: '33. Pointer basics', concept: 'Memory Addresses', description: 'Introduction to pointers (*), dereferencing, and the address-of operator (&).', useCase: 'Low-level hardware access, C-interoperability.', bioNote: 'Directly manipulates memory addresses for extreme-speed access to multi-gigabyte genome FASTA files.' },
        { id: '34_add_pointers.cpp', unit: 'Unit II: Functions & Pointers', title: '34. Add numbers via pointers', concept: 'Pointer Arithmetic', description: 'Using pointers to indirectly access and sum distinct memory locations.', useCase: 'Advanced memory manipulation.', bioNote: 'Utilizes low-level memory arithmetic to optimize cross-reference indexing between sequence headers and metadata.' },
        { id: '35_swap_pointers.cpp', unit: 'Unit II: Functions & Pointers', title: '35. Swap Using Pointers', concept: 'Pointers', description: 'Modifies variable values directly in memory using pointer dereferencing.', useCase: 'Pass by Reference.', bioNote: 'In-place memory swap of large genomic sequences to avoid expensive copy operations.' },
        { id: '36_dyn_array.cpp', unit: 'Unit II: Functions & Pointers', title: '36. Dynamic array', concept: 'Heap Allocation', description: 'Using `new` and `delete` to manually allocate arrays at runtime based on dynamic sizes.', useCase: 'Handling unknown payload sizes, avoiding stack overflow.', bioNote: 'Dynamically allocates heap memory to accommodate variable-length sequence reads typical in nanopore sequencing.' },

        { id: '37_class_object.cpp', unit: 'Unit III: OOP', title: '37. Class & Object Basics', concept: 'OOP', description: 'GfG class showcasing pure basic encapsulation.', useCase: 'Foundations of object architectures.', bioNote: 'Defines the structural blueprint for standard biological sequences.' },
        { id: '38_student_class.cpp', unit: 'Unit III: OOP', title: '38. Student class', concept: 'Classes and Objects', description: 'Defining a class blueprint with attributes and methods, instantiating objects.', useCase: 'Domain mapping, structurally tying data to behavior.', bioNote: "Creates a robust 'Sequence' object pattern, encapsulating headers, sub-sequences, and quality metrics into a unified structure." },
        { id: '39_getdata_display.cpp', unit: 'Unit III: OOP', title: '39. getData() and display()', concept: 'Methods', description: 'Adding member functions to a class to intake and output object state.', useCase: 'Standard class I/O patterns.', bioNote: 'Implements structured I/O methods for parsing and rendering complex bioinformatics file formats like GFF3 or SAM.' },
        { id: '40_factorial_class.cpp', unit: 'Unit III: OOP', title: '40. Factorial class', concept: 'Encapsulated Logic', description: 'Wrapping procedural logic (factorial algorithm) securely inside an object-oriented shell.', useCase: 'Math utility classes.', bioNote: 'Wraps specialized combinatorial algorithms within object-oriented boundaries for secure high-fidelity bioinformatics modeling.' },
        { id: '41_array_objects.cpp', unit: 'Unit III: OOP', title: '41. Array of objects', concept: 'Object Arrays', description: 'Creating arrays where every element is an instance of a class, looping over them.', useCase: 'Databases, employee/student tracking systems.', bioNote: 'Manages large-scale collections of sequence objects, enabling batch processing of entire genomic libraries.' },
        { id: '42_bank_encapsulation.cpp', unit: 'Unit III: OOP', title: '42. Bank (Encapsulation)', concept: 'Data Hiding', description: 'Using private modifiers to protect sensitive data, accessed only via public getter/setter methods.', useCase: 'Security, preventing invalid state mutations.', bioNote: 'Enforces strict data hiding for sensitive raw genomic data to prevent accidental corruption during multi-threaded analysis.' },
        { id: '43_func_outside_class.cpp', unit: 'Unit III: OOP', title: '43. Function outside class', concept: 'Scope Resolution', description: 'Declaring a method inside a class, but defining it outside use the `::` operator.', useCase: 'Clean header files (.h) vs implementation (.cpp).', bioNote: 'Decouples large protein-structure logic from class headers, improving compilation modularity and long-term maintainability.' },
        { id: '44_access_specifiers.cpp', unit: 'Unit III: OOP', title: '44. Access specifiers', concept: 'Public/Private/Protected', description: 'Demonstrating the strict boundaries of class member visibility.', useCase: 'API design, inheritance control.', bioNote: 'Hardens core alignment constants from unauthorized runtime modifications, ensuring algorithmic integrity.' },
        { id: '45_static_counter.cpp', unit: 'Unit III: OOP', title: '45. Static object counter', concept: 'Static Members', description: 'Using variables that belong to the Class itself, shared across all instantiated objects.', useCase: 'Unique IDs, global counting logs.', bioNote: 'Tracks the total global instantiation of gene fragments to monitor memory load in large-scale metagenomic runs.' },
        { id: '46_friend_func.cpp', unit: 'Unit III: OOP', title: '46. Friend function', concept: 'Friend Access', description: 'Granting non-member functions access to private class variables.', useCase: 'Operator overloading, tightly coupled utility functions.', bioNote: 'Enables cross-species class comparisons by granting comparison functions privileged access to private genomic features.' },
        { id: '47_constructors.cpp', unit: 'Unit III: OOP', title: '47. Constructors', concept: 'Initialization', description: 'Special methods that fire automatically to set up state when an object is born.', useCase: 'Guaranteeing valid starting states for instances.', bioNote: 'Properly initializes complex sequence buffers or deep-copies existing gene objects for variant comparison.' },
        { id: '48_destructor.cpp', unit: 'Unit III: OOP', title: '48. Destructor', concept: 'Cleanup', description: 'Special methods (`~Name()`) that fire when an object is destroyed or falls out of scope.', useCase: 'Preventing memory leaks, closing files/sockets.', bioNote: 'Ensures catastrophic memory leaks are avoided by automatically purging heavy sequence buffers once out of scope.' },
        { id: '49_func_overload.cpp', unit: 'Unit III: OOP', title: '49. Function overloading', concept: 'Polymorphism (Compile-time)', description: 'Creating multiple functions with the same name but different argument signatures.', useCase: 'Flexible APIs (e.g. print(int) vs print(string)).', bioNote: 'Provides polymorphic scoring interfaces that adapt logic based on whether inputs are DNA sequences or Amino Acid chains.' },
        { id: '50_unary_overload.cpp', unit: 'Unit III: OOP', title: '50. Unary ++ operator', concept: 'Operator Overloading', description: 'Redefining base operators like ++ to work intimately with custom classes.', useCase: 'Custom iterators, mathematical constructs.', bioNote: 'Advances the sequence read cursor seamlessly using the ++ operator, simplifying complex loop logic.' },
        { id: '51_binary_overload.cpp', unit: 'Unit III: OOP', title: '51. Binary + (Complex)', concept: 'Binary Overloading', description: 'Overloading + to add two custom objects together (like Complex Numbers).', useCase: 'Vector math, custom string concatenation.', bioNote: 'Enables intuitive binary scoring between two sequence objects via overloaded math operators (e.g., SeqA + SeqB).' },
        { id: '52_basic_to_class.cpp', unit: 'Unit III: OOP', title: '52. Basic-to-class conversion', concept: 'Type Conversion', description: 'Using overloaded constructors to implicitly convert an `int` or `float` into a complex Class object.', useCase: 'Seamless API integration with primitive types.', bioNote: 'Transmutes raw nucleotide counts into high-level Kilo-basepair (Kbp) or Mega-basepair (Mbp) object representations.' },
        { id: '53_single_inheritance.cpp', unit: 'Unit III: OOP', title: '53. Single inheritance', concept: 'Code Reusability', description: 'A child class extending a parent class, inheriting its methods and public attributes.', useCase: 'Shared base logic (e.g., Animal -> Dog).', bioNote: 'Models biological taxonomies where a derived Species object inherits fundamental traits from a base Organism class.' },
        { id: '54_multiple_inheritance.cpp', unit: 'Unit III: OOP', title: '54. Multiple inheritance', concept: 'Multiple Parent Classes', description: 'A class extending two or more distinct parent classes (unique to C++).', useCase: 'Complex taxonomy (e.g., Flying + Machine -> Airplane).', bioNote: 'Simulates complex hybrid evolutionary paths where an offspring inherits traits from multiple distinct ancestral lineages.' },
        { id: '55_multilevel_inheritance.cpp', unit: 'Unit III: OOP', title: '55. Multilevel inheritance', concept: 'Inheritance Chains', description: 'A -> B -> C hierarchy. Grandparent, parent, child relationship scaling properties.', useCase: 'Deep organizational charts, deep DOM structures.', bioNote: 'Builds deep hierarchical taxonomies (Family -> Genus -> Species), scaling properties through the inheritance chain.' },
        { id: '56_hybrid_inheritance.cpp', unit: 'Unit III: OOP', title: '56. Hybrid inheritance', concept: 'Hybrid Inheritance', description: 'A combination of two or more types of inheritance (typically multiple + multilevel), used to model complex hierarchies.', useCase: 'Complex classification, framework design.', bioNote: 'Models convergent evolution where traits from multiple lineages combine in a single derived organism class.' },
        { id: '57_hierarchical_inheritance.cpp', unit: 'Unit III: OOP', title: '57. Hierarchical Inheritance', concept: 'Multiple Derived Classes', description: 'Demonstrating one parent class passing traits to multiple distinct parallel child classes.', useCase: 'Classification trees, parallel branching logic.', bioNote: 'Models biological branching where a single ancestor stem cell differentiates into specialized immune and structural cell lineages.' },
        { id: '58_runtime_poly.cpp', unit: 'Unit III: OOP', title: '58. Runtime polymorphism', concept: 'Base Pointers', description: 'Assigning a Derived object to a Base class pointer to achieve generic polymorphic execution.', useCase: 'Plug-and-play architectures, game engines.', bioNote: 'Allows a generic Organism pointer to dynamically execute specific Bacterial or Viral behaviors at runtime.' },
        { id: '59_virtual_function.cpp', unit: 'Unit III: OOP', title: '59. Virtual Function', concept: 'Late Binding (virtual)', description: 'Using the exact `virtual` keyword to force the compiler to wait until runtime to determine which method to invoke (Late Binding).', useCase: 'Interface design, method overriding.', bioNote: 'Forces late-binding execution of specialized mutation methods rather than defaulting to the base genomic interface.' },
        { id: '60_exception_handling.cpp', unit: 'Unit III: OOP', title: '60. Exception handling (div by 0)', concept: 'Try, Catch, Throw', description: 'Safely catching dangerous runtime errors (like division by zero) without crashing the program.', useCase: 'Robust backend servers, preventing fatal exits.', bioNote: 'Hardens the sequence pipeline by gracefully trapping IO errors or malformed data samples without fatal process termination.' },
        { id: '61_file_handling.cpp', unit: 'Unit III: OOP', title: '61. File Handling (Read/Write)', concept: 'File Streams', description: 'Demonstrates how to create a file, write a string to it, and read the content back into the program.', useCase: 'Data persistence, logging results.', bioNote: 'Writes final aligned sequence data and alignment summary metrics permanently to persistent disk storage (e.g., FASTA or logs) for downstream analysis.' },
        { id: '62_deep_shallow_copy.cpp', unit: 'Unit III: OOP', title: '62. Deep vs Shallow Copy', concept: 'Memory Architecture', description: 'Exploring the catastrophic consequences of shallow-copy pointer duplications and building explicit Deep Copy constructors using heap (new) allocation.', useCase: 'Safe object cloning, memory leak prevention.', bioNote: 'Guarantees autonomous memory domains when cloning genomic buffer assemblies to avoid cross-contamination.' },
        { id: '63_templates.cpp', unit: 'Unit III: OOP', title: '63. C++ Templates (Generics)', concept: 'Generic Programming', description: 'Creating generic `template <typename T>` signatures able to intuitively execute standard mathematical routines across varying data bounds (int, float, string) simultaneously.', useCase: 'Dynamic APIs, framework tool building.', bioNote: 'Develops polymorphic structural parsing frameworks handling discrete integers or continuously float-valued alignment metrics using 1 generic signature.' },
    ]
};


// --- MODULE: search.js ---
window.App.Search = {
    debounceTimer: null,

    handleInput: function (e) {
        clearTimeout(this.debounceTimer);
        const query = e.target.value.trim();
        const clearBtn = document.getElementById('clearSearch');
        if (query.length > 0) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');

        this.debounceTimer = setTimeout(() => {
            window.App.UI.initSidebar(query);
        }, 200);
    },

    clear: function () {
        const input = document.getElementById('searchInput');
        input.value = '';
        document.getElementById('clearSearch').classList.add('hidden');
        window.App.UI.initSidebar('');
        input.focus();
    }
};


// --- MODULE: ui.js ---
window.App.UI = {

    // Scrolls the currently active sidebar link into view
    scrollActiveSidebarItem: function () {
        if (!window.currentActiveHash) return;
        const activeLink = document.querySelector(`#sidebarContent a[href="${window.currentActiveHash}"]`);
        if (activeLink) activeLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    },

    initSidebar: function (searchQuery = "") {
        const sidebar = document.getElementById('sidebarContent');
        sidebar.innerHTML = '';

        // Add Expand/Collapse All buttons at the top
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'flex items-center justify-end px-4 py-2 gap-2 text-[10px] text-gray-500 uppercase tracking-wide border-b border-gray-200 dark:border-[#333333] shrink-0';
        controlsDiv.innerHTML = `
            <button id="expandAll" class="hover:text-primary transition-colors focus:outline-none"><i class="fa-solid fa-angles-down"></i> Expand All</button>
            <span class="opacity-30">|</span>
            <button id="collapseAll" class="hover:text-primary transition-colors focus:outline-none"><i class="fa-solid fa-angles-up"></i> Collapse All</button>
        `;

        const units = {};
        window.App.Data.cppFiles.forEach(file => {
            let match = true;
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                // Narrowed search scope to prevent invisible matches
                const textTarget = (file.title + " " + file.concept).toLowerCase();
                if (!textTarget.includes(q)) match = false;
            }
            if (!match) return;

            if (!units[file.unit]) units[file.unit] = [];
            units[file.unit].push(file);
        });

        if (Object.keys(units).length === 0) {
            sidebar.innerHTML = `
                <div class="px-4 py-12 text-center text-sm text-gray-400">
                    <i class="fa-solid fa-magnifying-glass opacity-30 text-4xl mb-3"></i><br>
                    No concepts or programs found<br>matching "<span class="text-gray-600 dark:text-gray-300">${searchQuery}</span>"
                </div>
            `;
            return;
        }

        sidebar.appendChild(controlsDiv);

        const allContents = [];
        const allIcons = [];

        for (const [unitName, files] of Object.entries(units)) {
            const unitMeta = window.App.Data.units[unitName] || { icon: '📂', title: unitName };
            const container = document.createElement('div');
            container.className = 'mb-1';

            const btn = document.createElement('button');
            btn.className = 'w-full flex justify-between items-center px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md transition-colors focus:outline-none border-b border-transparent dark:hover:border-[#333333]/50';
            btn.innerHTML = `
                <div class="flex items-center text-xs uppercase tracking-wide opacity-90 truncate w-full">
                    <span class="text-base mr-2">${unitMeta.icon}</span> 
                    <span class="truncate pr-2 mt-0.5">${unitMeta.title} <span class="text-[9px] font-mono bg-gray-200 dark:bg-white/10 text-gray-500 px-1.5 py-0.5 rounded-full ml-1">${files.length}</span></span>
                </div>
                <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 transform shrink-0"></i>
            `;

            const content = document.createElement('div');
            content.className = 'accordion-content flex flex-col gap-0.5 mt-1 overflow-hidden transition-all duration-300';

            const isOpen = localStorage.getItem('acc_' + unitName) === 'true';

            const icon = btn.querySelector('.fa-chevron-down');
            allContents.push(content);
            allIcons.push(icon);

            if (isOpen || searchQuery !== "") {
                content.style.maxHeight = '3000px';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = '0px';
                icon.style.transform = 'rotate(-90deg)';
            }

            btn.onclick = () => {
                const isCurrentlyOpen = content.style.maxHeight !== '0px';
                if (!isCurrentlyOpen) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    icon.style.transform = 'rotate(0deg)';
                    setTimeout(() => content.style.maxHeight = '3000px', 300);
                    localStorage.setItem('acc_' + unitName, 'true');
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.offsetHeight;
                    content.style.maxHeight = '0px';
                    icon.style.transform = 'rotate(-90deg)';
                    localStorage.setItem('acc_' + unitName, 'false');
                }
            };

            files.forEach(file => {
                const link = document.createElement('a');
                link.href = `#${file.id}`;
                link.className = `flex items-center px-4 py-2 ml-2 text-sm rounded-md transition-all relative group ${window.currentActiveHash === `#${file.id}` ? 'bg-primary/10 text-primary font-medium border-l-[3px] border-primary' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 border-l-[3px] border-transparent hover:border-gray-200 dark:hover:border-[#333333]'
                    }`;

                let displayTitle = file.title;
                if (searchQuery) {
                    const safeRegexQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    const regex = new RegExp(`(${safeRegexQuery})`, 'gi');
                    displayTitle = displayTitle.replace(regex, '<mark class="bg-primary/30 text-inherit rounded px-0.5 font-bold">$1</mark>');
                }

                link.innerHTML = `
                    <svg viewBox="0 0 128 128" width="1em" height="1em" class="w-[14px] h-[14px] mr-2 opacity-50 group-hover:opacity-100 group-hover:text-primary fill-current shrink-0 transition-colors"><path d="M118.5,28L71,1.5c-4.3-2.4-9.7-2.4-14,0L9.5,28C5.2,30.4,2.5,35.1,2.5,40v55.5c0,4.9,2.7,9.6,7,12l47.5,26.5c4.3,2.4,9.7,2.4,14,0l47.5-26.5c4.3-2.4,7-7.1,7-12V40C125.5,35.1,122.8,30.4,118.5,28z M62,81.4c-9,0-15-7-15-17.4s6-17.4,15-17.4c6.2,0,10.6,3.6,13.2,9l-8.5,5c-1.3-3.6-2.9-5-5-5c-4,0-6,3.6-6,9s2,9,6,9c2.5,0,4.2-1.7,5.3-5l8.6,4.6C73,78,68.9,81.4,62,81.4z M90,70.5h-5.9v6.5H76v-6.5h-5.9v-8.1H76v-6.5h8.1v6.5H90V70.5z M107.5,70.5h-5.9v6.5H93.5v-6.5h-5.9v-8.1h5.9v-6.5h8.1v6.5h5.9V70.5z"></path></svg>
                    <span class="whitespace-normal break-words leading-tight text-left">${displayTitle}</span>
                `;

                link.onclick = (e) => {
                    if (window.innerWidth < 1024 && window.App.isMenuOpen) window.App.UI.toggleMobileMenu();
                };

                content.appendChild(link);
            });

            container.appendChild(btn);
            container.appendChild(content);
            sidebar.appendChild(container);
        }

        document.getElementById('expandAll').onclick = () => {
            allContents.forEach(c => c.style.maxHeight = '3000px');
            allIcons.forEach(i => i.style.transform = 'rotate(0deg)');
            Object.keys(units).forEach(u => localStorage.setItem('acc_' + u, 'true'));
        };
        document.getElementById('collapseAll').onclick = () => {
            allContents.forEach(c => c.style.maxHeight = '0px');
            allIcons.forEach(i => i.style.transform = 'rotate(-90deg)');
            Object.keys(units).forEach(u => localStorage.setItem('acc_' + u, 'false'));
        };
    },

    toggleMobileMenu: function () {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const btn = document.getElementById('mobileMenuBtn');

        window.App.isMenuOpen = !window.App.isMenuOpen;

        if (window.App.isMenuOpen) {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
            setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            btn.classList.add('menu-open');
        } else {
            sidebar.classList.add('-translate-x-full');
            sidebar.classList.remove('translate-x-0');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
            btn.classList.remove('menu-open');
        }
    },

    toggleTheme: function () {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.className = isDark ? 'fa-solid fa-sun text-yellow-500' : 'fa-solid fa-moon text-gray-700';
        }
    },

    showToast: function (title, msg, isError = false) {
        const toast = document.getElementById('toast');
        document.getElementById('toastTitle').textContent = title;
        document.getElementById('toastMsg').textContent = msg;
        const iconDiv = toast.querySelector('div.w-8');
        if (isError) {
            iconDiv.className = "w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0";
            iconDiv.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            iconDiv.className = "w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0";
            iconDiv.innerHTML = '<i class="fa-solid fa-check"></i>';
        }
        toast.classList.remove('translate-y-20', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');

        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
            toast.classList.remove('translate-y-0', 'opacity-100');
        }, 3000);
    },

    initTerminalResizer: function () {
        const resizer = document.getElementById('terminalResizer');
        const container = document.getElementById('terminalContainer');
        const output = document.getElementById('terminalOutput');
        if (!resizer || !container || !output) return;

        let startY = 0;
        let startHeight = 0;

        window.App.UI.isExpanded = false;
        window.App.UI.hasRunSimulation = false;

        window.App.UI.expandConsole = function (forceExpand) {
            if (forceExpand && window.App.UI.isExpanded) {
                let needed = output.scrollHeight + 60;
                let maxH = window.innerHeight * 0.65;
                container.style.height = Math.max(160, Math.min(needed, maxH)) + 'px';
                return;
            }
            if (forceExpand === false && !window.App.UI.isExpanded) return;

            window.App.UI.isExpanded = forceExpand !== undefined ? forceExpand : !window.App.UI.isExpanded;
            container.style.transition = 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

            if (window.App.UI.isExpanded) {
                let needed = output.scrollHeight + 60;
                let maxH = window.innerHeight * 0.65;
                container.style.height = Math.max(180, Math.min(needed, maxH)) + 'px';
            } else {
                container.style.height = '160px';
            }
            setTimeout(() => container.style.transition = 'none', 300);
        };

        output.style.cursor = 'pointer';
        output.setAttribute('title', 'Click to expand/collapse explicitly AFTER running.');
        output.addEventListener('click', (e) => {
            if (window.getSelection().toString().length > 0) return;
            if (!window.App.UI.hasRunSimulation) return;
            window.App.UI.expandConsole();
        });

        resizer.addEventListener('mousedown', (e) => {
            startY = e.clientY;
            startHeight = container.offsetHeight;
            document.body.style.cursor = 'ns-resize';

            const mouseMoveHandler = (e) => {
                const dy = startY - e.clientY;
                container.style.transition = 'none';
                container.style.height = `${startHeight + dy}px`;
                isExpanded = parseInt(container.style.height) > 200;
            };

            const mouseUpHandler = () => {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
                document.body.style.cursor = '';
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });
    },

    // 📏 Horizontal sidebar resizer (desktop only)
    initSidebarResizer: function () {
        const resizer = document.getElementById('sidebarResizer');
        const sidebar = document.getElementById('sidebar');
        if (!resizer || !sidebar) return;

        let isResizing = false;

        resizer.addEventListener('mousedown', () => {
            isResizing = true;
            document.body.classList.add('select-none');
            document.body.style.cursor = 'ew-resize';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            const newWidth = Math.max(200, Math.min(520, e.clientX));
            sidebar.style.width = newWidth + 'px';
        });

        document.addEventListener('mouseup', () => {
            if (!isResizing) return;
            isResizing = false;
            document.body.classList.remove('select-none');
            document.body.style.cursor = '';
        });
    }
};


// --- MODULE: viewer.js ---
window.App.Viewer = {
    handleHashRouting: function () {
        const hash = window.location.hash;
        window.currentActiveHash = hash;

        window.App.UI.initSidebar(document.getElementById('searchInput').value);
        // Scroll the active sidebar link into view (keyboard nav, button clicks)
        setTimeout(() => window.App.UI.scrollActiveSidebarItem(), 50);

        const fileId = hash.substring(1);
        const currentIndex = window.App.Data.cppFiles.findIndex(f => f.id === fileId);

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn && nextBtn) {
            if (currentIndex <= 0) { prevBtn.style.opacity = 0.3; prevBtn.style.pointerEvents = 'none'; }
            else { prevBtn.style.opacity = 1; prevBtn.style.pointerEvents = 'auto'; }
            if (currentIndex >= window.App.Data.cppFiles.length - 1 || currentIndex === -1) { nextBtn.style.opacity = 0.3; nextBtn.style.pointerEvents = 'none'; }
            else { nextBtn.style.opacity = 1; nextBtn.style.pointerEvents = 'auto'; }
        }

        const emptyState = document.getElementById('emptyState');
        const viewer = document.getElementById('viewerContainer');

        if (!hash || hash === '#') {
            emptyState.classList.remove('hidden');
            viewer.classList.add('hidden');
            viewer.classList.remove('flex');
            return;
        }

        const fileObj = window.App.Data.cppFiles.find(f => f.id === fileId);
        if (fileObj) {
            emptyState.classList.add('hidden');
            viewer.classList.remove('hidden');
            viewer.classList.add('flex');

            document.getElementById('currentFileName').textContent = fileObj.title;
            document.getElementById('currentUnitName').textContent = fileObj.unit;

            if (document.getElementById('conceptName')) {
                document.getElementById('conceptName').textContent = fileObj.concept;
                document.getElementById('conceptDesc').textContent = fileObj.description;
                document.getElementById('conceptUseCase').textContent = fileObj.useCase;

                const bioNoteEl = document.getElementById('conceptBioNote');
                const bioContainer = document.getElementById('bioNoteContainer');
                if (bioNoteEl && bioContainer) {
                    if (fileObj.bioNote) {
                        bioNoteEl.textContent = fileObj.bioNote;
                        bioContainer.classList.remove('hidden');
                    } else {
                        bioContainer.classList.add('hidden');
                    }
                }
            }

            this.fetchCodeData(fileId);
            window.App.Simulator.resetTerminal();
        }
    },

    fetchCodeData: function (filename) {
        if (window.__CPP_CONTENTS__ && window.__CPP_CONTENTS__[filename]) {
            this.renderCode(window.__CPP_CONTENTS__[filename]);
        } else {
            this.renderCode('// Error: File not found in cache.');
        }
    },

    renderCode: function (text) {
        const codeBlock = document.getElementById('codeBlock');
        codeBlock.textContent = text;
        if (window.Prism) {
            Prism.highlightElement(codeBlock);
        }
    },

    navigateProgram: function (offset) {
        if (!window.currentActiveHash) return;
        const fileId = window.currentActiveHash.substring(1);
        const currentIndex = window.App.Data.cppFiles.findIndex(f => f.id === fileId);
        if (currentIndex === -1) return;

        let newIndex = currentIndex + offset;
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= window.App.Data.cppFiles.length) newIndex = window.App.Data.cppFiles.length - 1;

        window.location.hash = '#' + window.App.Data.cppFiles[newIndex].id;
    },

    copyCode: async function () {
        const fileId = window.currentActiveHash.substring(1);
        if (!fileId || !window.__CPP_CONTENTS__ || !window.__CPP_CONTENTS__[fileId]) return;
        const textToCopy = window.__CPP_CONTENTS__[fileId];

        try {
            await navigator.clipboard.writeText(textToCopy);
            this.triggerCopyAnimation(true);
        } catch (err) {
            this.fallbackCopyTextToClipboard(textToCopy);
        }
    },

    fallbackCopyTextToClipboard: function (text) {
        var textArea = document.getElementById("copyFallback");
        textArea.value = text;
        textArea.focus();
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            this.triggerCopyAnimation(successful);
        } catch (err) {
            this.triggerCopyAnimation(false);
        }
        window.getSelection().removeAllRanges();
    },

    triggerCopyAnimation: function (success) {
        if (success) window.App.UI.showToast("Copied!", "Source code placed in clipboard.");
        else window.App.UI.showToast("Error", "Copy command rejected.", true);

        const btn = document.getElementById('copyBtn');
        if (!btn) return;

        btn.classList.add('bg-emerald-500/20', 'border-emerald-500/50', 'text-emerald-600', 'dark:text-emerald-400', 'scale-95');
        btn.innerHTML = `<i class="fa-solid fa-check sm:mr-0 group-hover:scale-100"></i> <span class="hidden sm:inline ml-2">Copied ✓</span>`;

        setTimeout(() => {
            btn.classList.remove('bg-emerald-500/20', 'border-emerald-500/50', 'text-emerald-600', 'dark:text-emerald-400', 'scale-95');
            btn.innerHTML = `<i class="fa-regular fa-copy group-hover:scale-110 transition-transform duration-200"></i> <span class="hidden sm:inline ml-2">Copy Code</span>`;
        }, 1500);
    },

    downloadCode: function () {
        const fileId = window.currentActiveHash.substring(1);
        if (!fileId || !window.__CPP_CONTENTS__[fileId]) return;
        const textToDownload = window.__CPP_CONTENTS__[fileId];
        const blob = new Blob([textToDownload], { type: 'text/x-c++src' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileId;
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
        a.remove();
    }
};


// --- MODULE: simulator.js ---
window.App.Simulator = {
        // =========================================================================
        // 🖥️ SIMULATED COMPILER OUTPUTS
        // =========================================================================
        // This object maps the exact filename (e.g., '1_hello_world.cpp') to its 
        // expected console output string.
        // 
        // HOW TO MODIFY OR FIX ERRORS:
        // 1. Find the exact filename in the list below.
        // 2. Change the text to the right of the colon (inside the quotes).
        // 3. Use \n to represent a new line (Enter key) in the terminal.
        // 4. IMPORTANT: Always run `python builder.py` after saving this file 
        //    to re-bundle the application!
        // =========================================================================
        exactOutputs: {
        
        
        

        "1_hello_world.cpp": "Hello World (DNA: ATGC)\n\n--- BioAlign-Pro ---",
        "2_integer_input.cpp": "Enter sequence length: 5\nLength is: 5\n\n--- BioAlign-Pro ---",
        "3_arithmetic_ops.cpp": "Enter two values: 10 5\nSum: 15\nDiff: 5\nMul: 50\nDiv: 2\nMod: 0\n\n--- BioAlign-Pro ---",
        "4_sizeof_datatypes.cpp": "int: 4 bytes\nfloat: 4 bytes\nchar: 1 bytes\ndouble: 8 bytes\n\n--- BioAlign-Pro ---",
        "5_even_odd.cpp": "The number 9 is positive.\nThe number 9 is odd.\n\n--- BioAlign-Pro ---",
        "6_if_statement.cpp": "The number is strictly positive.\n\n--- BioAlign-Pro ---",
        "7_smallest_two.cpp": "Value B (3) is smaller than A (8)\n\n--- BioAlign-Pro ---",
        "8_largest_three.cpp": "b is greatest: 20\n\n--- BioAlign-Pro ---",
        "9_leap_year.cpp": "Enter year: 2024\n2024 is a Leap Year.\n\n--- BioAlign-Pro ---",
        "10_calc_switch.cpp": "Enter operator (+,-,*,/) and 2 numbers: * 6 7\n42\n\n--- BioAlign-Pro ---",
        "11_print_1_10_for.cpp": "0\n1\n2\n3\n4\n\n\n--- BioAlign-Pro ---",
        "12_fibonacci_while.cpp": "Fibonacci series (First 10 terms): \n0 1 1 2 3 5 8 13 21 34 \n\n--- BioAlign-Pro ---",
        "13_fibonacci_for.cpp": "Fibonacci series (First 10 terms): \n0 1 1 2 3 5 8 13 21 34 \n\n--- BioAlign-Pro ---",
        "14_fibonacci_while_limit.cpp": "Fibonacci series (Under value 10): \n0 1 1 2 3 5 8 \n\n--- BioAlign-Pro ---",
        "15_fibonacci_for_limit.cpp": "Fibonacci series (Under value 10): \n0 1 1 2 3 5 8 \n\n--- BioAlign-Pro ---",
        "16_prime_check.cpp": "Enter a number: 29\n29 is Prime.\n\n--- BioAlign-Pro ---",
        "17_armstrong.cpp": "Enter a pos integer: 153\n153 is Armstrong.\n\n--- BioAlign-Pro ---",
        "18_palindrome.cpp": "Enter a number: 121\nPalindrome Number\n\n--- BioAlign-Pro ---",
        "19_break_continue.cpp": "1 2 3 5 6 7 \n\n--- BioAlign-Pro ---",
        "20_array_io.cpp": "Enter 5 scores: 1 2 3 4 5\nScores: 1 2 3 4 5 \n\n--- BioAlign-Pro ---",
        "21_sum_avg_array.cpp": "Sum: 150, Avg: 30\n\n--- BioAlign-Pro ---",
        "22_array_add.cpp": "Sum of array elements = 150\n\n--- BioAlign-Pro ---",
        "23_large_small_array.cpp": "Min: 1, Max: 9\n\n--- BioAlign-Pro ---",
        "24_matrix_add.cpp": "2 3 \n4 5 \n\n\n--- BioAlign-Pro ---",
        "25_concat_name.cpp": "--- C-Style String Manipulation ---\nEnter the first name: Enter the last name: The Full name is-: Siddharth Tripathi\nThe length of First name: 9\nThe length of last name: 8\nAfter Copy we get: Siddharth\nAfter concatenation we get: Siddharth Tripathi\nThe strings are different\n\n--- C++ String Class ---\nAfter concatenation length is: 11\nConcatenated string is: hello World\nAfter copying -: hello World\n\n--- BioAlign-Pro ---",
        "26_reverse_string.cpp": "Enter DNA: ATGC\nReversed: CGTA\n\n--- BioAlign-Pro ---",
        "27_sum_function.cpp": "Sum is: 7\n\n--- BioAlign-Pro ---",
        "28_pass_array_func.cpp": "1 2 3 4 \n\n--- BioAlign-Pro ---",
        "29_swap_value.cpp": "Enter the value of a:\n10\nEnter the value of b:\n20\nBefore swapping: a = 10\t b = 20\nAfter swapping:  a = 20\t b = 10\n\n--- BioAlign-Pro ---",
        "30_swap_ref.cpp": "Before swapping: a = 10, b = 20\nAfter swapping:  a = 20, b = 10\n\n--- BioAlign-Pro ---",
        "31_recursive_sum.cpp": "Sum to 5: 15\n\n--- BioAlign-Pro ---",
        "32_recursive_factorial.cpp": "Factorial 4: 24\n\n--- BioAlign-Pro ---",
        "33_pointer_basics.cpp": "Address: 0x7ffd5820ab Value: 10\n\n--- BioAlign-Pro ---",
        "34_add_pointers.cpp": "Sum: 11\n\n--- BioAlign-Pro ---",
        "35_swap_pointers.cpp": "Before swap : x = 10 , y = 20\nAfter swap : x = 20 , y = 10\n\n--- BioAlign-Pro ---",
        "36_dyn_array.cpp": "Enter size: 3\n1 2 3 \n\n--- BioAlign-Pro ---",
        "37_class_object.cpp": "Gene name: BRCA1\nMutation rate: 0.052\n\n--- BioAlign-Pro ---",
        "38_student_class.cpp": "Student: John, Roll: 101\n\n--- BioAlign-Pro ---",
        "39_getdata_display.cpp": "Enter data: \nData: 42\n\n--- BioAlign-Pro ---",
        "40_factorial_class.cpp": "Fact 5: 120\n\n--- BioAlign-Pro ---",
        "41_array_objects.cpp": "Enter the number of students: 1\n\n--- Enter details of student 1 ---\nEnter student ID   : 1\nEnter student name : Alice\nEnter student marks: 95\n\n--- Student Details ---\nID: 1\tName: Alice\tMarks: 95\n\n--- BioAlign-Pro ---",
        "42_bank_encapsulation.cpp": "Bal: 500\n\n--- BioAlign-Pro ---",
        "43_func_outside_class.cpp": "Outside class!\n\n--- BioAlign-Pro ---",
        "44_access_specifiers.cpp": "Public var: 3\n123\n\n--- BioAlign-Pro ---",
        "45_static_counter.cpp": "Count: 2\n\n--- BioAlign-Pro ---",
        "46_friend_func.cpp": "Value of x = 10\n\n--- BioAlign-Pro ---",
        "47_constructors.cpp": "Creating seq1... \nDefault Constructor called.\nCreating seq2... \nParameterized Constructor called with length: 100.\nCreating seq3 from seq2... \nCopy Constructor duplicated length: 100.\n\n--- BioAlign-Pro ---",
        "48_destructor.cpp": "Constructor called (Object created)\nInside display function\nDestructor called (Object destroyed)\n\n--- BioAlign-Pro ---",
        "49_func_overload.cpp": "Added base: A\nAdded sequence: ATGC\n\n--- BioAlign-Pro ---",
        "50_unary_overload.cpp": "Generation: 0\nGeneration: 1\n\n--- BioAlign-Pro ---",
        "51_binary_overload.cpp": "DNA: ATGC\n\n--- BioAlign-Pro ---",
        "52_basic_to_class.cpp": "2h 10m\n\n\n--- BioAlign-Pro ---",
        "53_single_inheritance.cpp": "Cell is performing metabolic reactions.\nNeuron is transmitting an electrical impulse.\n\n--- BioAlign-Pro ---",
        "54_multiple_inheritance.cpp": "DNA: Storing genetic sequence.\nHistone: Providing structural support.\nChromosome: Replicating during S-phase.\n\n--- BioAlign-Pro ---",
        "55_multilevel_inheritance.cpp": "A\nB\nC\n\n\n--- BioAlign-Pro ---",
        "56_hybrid_inheritance.cpp": "Device constructor executed.\nDevice powers on successfully.\nScanning document...\nPrinting document...\nDuplicating utilizing scanning and printing flows...\n\n--- BioAlign-Pro ---",
        "57_hierarchical_inheritance.cpp": "Cell is dividing.\nMaking food via sunlight.\nCell is dividing.\nAnimal cell moving.\n\n--- BioAlign-Pro ---",
        "58_runtime_poly.cpp": "Red Blood Cell\n\n--- BioAlign-Pro ---",
        "59_virtual_function.cpp": "Bark!\n\n--- BioAlign-Pro ---",
        "60_exception_handling.cpp": "Error: Division by zero!\n\n--- BioAlign-Pro ---",
        "61_file_handling.cpp": "Student details successfully written to student_record.txt\n\n--- Student Record Output ---\nName: Siddharth\nRoll Number: 42\nMarks: 95.5\n\n--- BioAlign-Pro ---",
        "62_deep_shallow_copy.cpp": "Instantiating Primary Buffer:\nConstructor executed: Memory allocated at 0x22f28a0 (Val: 42)\n\nCloning to Secondary Buffer:\nDeep Copy executed: NEW memory allocated at 0x22fa010 (Val: 42)\n\nTerminating application bounds:\n\n--- BioAlign-Pro ---",
        "63_templates.cpp": "Executing Template with Integers: \nResult: 45\n\nExecuting EXACT SAME Template with Floats (Decimals): \nResult: 16.7\n\n--- BioAlign-Pro ---"
},

        resetTerminal: function () {
                const term = document.getElementById('terminalOutput');
                if (term) term.innerHTML = `<span class="text-gray-600 dark:text-gray-500">Ready to compile. Press <span class="text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-play"></i> Run</span> to test current program.</span>`;

                if (window.App.UI && window.App.UI.expandConsole) {
                        window.App.UI.hasRunSimulation = false;
                        window.App.UI.expandConsole(false);
                }
        },
        runCompiler: function () {
                const term = document.getElementById('terminalOutput');
                const fileId = window.currentActiveHash.substring(1);
                if (!term || !fileId) return;

                if (window.App.UI && window.App.UI.expandConsole) {
                        window.App.UI.hasRunSimulation = true;
                        window.App.UI.expandConsole(true);
                }

                // Authentic MSYS2 bash prompt
                const prompt = `<span class="text-emerald-600 dark:text-emerald-400 font-bold">sid@BioAlign</span> <span class="text-fuchsia-600 dark:text-fuchsia-400">MINGW64</span> <span class="text-yellow-600 dark:text-yellow-300">~/Desktop/C++</span>\n<span class="text-black dark:text-white font-bold">$</span>`;

                // 1. Initial compile and execution chained step
                term.innerHTML = `${prompt} <span class="text-gray-700 dark:text-gray-300">g++ ${fileId} -o app.exe && ./app.exe</span>\n\n`;

                setTimeout(() => {
                        const outStr = this.exactOutputs[fileId] || `Program executed successfully.\nOutput dynamically generated for ${fileId}`;

                        // 2. Colorizing output explicitly to make it beautiful
                        let finalStr = outStr;
                        finalStr = finalStr.replace(/(Enter .*?:|Enter .*?$)/gm, '<span class="text-cyan-600 dark:text-cyan-400 font-semibold">$1</span>');
                        finalStr = finalStr.replace(/--- BioAlign-Pro ---/g, '<span class="text-blue-600 dark:text-blue-400 font-bold px-1 bg-blue-500/10 rounded">--- BioAlign-Pro ---</span>');
                        finalStr = finalStr.replace(/(Exception|Error|Div by 0)/gi, '<span class="text-red-600 dark:text-red-400 font-bold">$1</span>');

                        term.innerHTML += `<span class="text-gray-800 dark:text-gray-200">${finalStr}</span>\n\n`;

                        // End terminal execution with a waiting prompt
                        term.innerHTML += `${prompt} <span class="animate-pulse">_</span>`;
                        term.scrollTop = term.scrollHeight; // Auto-scroll to bottom

                        // Dynamically size the terminal to fit the output content
                        if (window.App.UI && window.App.UI.expandConsole) {
                                window.App.UI.expandConsole(true);
                        }
                }, 800);
        }
};


// --- MODULE: manual_diagrams.js ---
// =========================================================================
// 🖨️ MANUAL DIAGRAM OVERRIDES
// =========================================================================
// Paste your exact Mermaid code here for any program you want to manually design!
// 
// Ensure the filename exactly matches the ones in `src/data.js`.
// You DO NOT need to write any `classDef` blocks! The engine automatically applies the theme natively.
//
// Example:
// "filename.cpp": \`flowchart TD ... \`,
// =========================================================================

window.__MANUAL_DIAGRAMS__ = {

    // ── UNIT I: BASICS & ARRAYS ──────────────────────────────────────────────

    "1_hello_world.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Include iostream"]:::process
    C["Print Hello World"]:::process
    D(["End"]):::startEnd

    A --> B --> C --> D`,

    "2_integer_input.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["Store n in memory"]:::process
    D[/"Print n"/]:::output
    E(["End"]):::startEnd

    A --> B --> C --> D --> E`,

    "3_arithmetic_ops.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C["sum = a + b"]:::process
    D["diff = a - b"]:::process
    E["prod = a * b"]:::process
    F["quot = a / b"]:::process
    G["mod = a % b"]:::process
    H[/"Print all results"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "4_sizeof_datatypes.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["List int, float, double, char, bool"]:::process
    C[/"Print sizeof each type"/]:::output
    D(["End"]):::startEnd

    A --> B --> C --> D`,

    "5_even_odd.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C{"n % 2 == 0"}:::decision
    D[/"Print Even"/]:::output
    E[/"Print Odd"/]:::output
    F(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> F
    C -- No --> E --> F`,

    "6_if_statement.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C{"n > 0"}:::decision
    D[/"Print Positive"/]:::output
    E(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> E
    C -- No --> E`,

    "7_smallest_two.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C{"a < b"}:::decision
    D[/"Print a is smallest"/]:::output
    E[/"Print b is smallest"/]:::output
    F(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> F
    C -- No --> E --> F`,

    "8_largest_three.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize a=10, b=20, c=3"]:::process
    C{"a > b AND a > c"}:::decision
    D["Print a is greatest"]:::process
    E{"b > a AND b > c"}:::decision
    F["Print b is greatest"]:::process
    G["Print c is greatest"]:::process
    H(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> H
    C -- No --> E
    E -- Yes --> F --> H
    E -- No --> G --> H`,

    "9_leap_year.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input year"/]:::input
    C{"year % 400 == 0"}:::decision
    D{"year % 100 == 0"}:::decision
    E{"year % 4 == 0"}:::decision
    F[/"Print Leap Year"/]:::output
    G[/"Print Not Leap Year"/]:::output
    H(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> F --> H
    C -- No --> D
    D -- Yes --> G --> H
    D -- No --> E
    E -- Yes --> F
    E -- No --> G`,

    "10_calc_switch.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input op, a, b"/]:::input
    C{"Operator?"}:::decision

    D["Print a + b"]:::process
    E["Print a - b"]:::process
    F["Print a * b"]:::process

    G{"b != 0"}:::decision
    H["Print a / b"]:::process
    I["Print Div by 0"]:::process

    J["Print Invalid op"]:::process
    K(["End"]):::startEnd

    A --> B --> C

    C -- "+" --> D --> K
    C -- "-" --> E --> K
    C -- "*" --> F --> K

    C -- "/" --> G
    G -- Yes --> H --> K
    G -- No --> I --> K

    C -- "Other" --> J --> K`,

    "11_print_1_10_for.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["i = 1"]:::process
    C{"i <= 10"}:::decision
    D["Print i"]:::process
    E["i = i + 1"]:::process
    F(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> E --> C
    C -- No --> F`,

    "12_fibonacci_while.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize count=10, a=0, b=1"]:::process
    C["Display Fibonacci Series"]:::process
    D{"count > 0"}:::decision
    E["Print a"]:::process
    F["next = a + b"]:::process
    G["a = b"]:::process
    H["b = next"]:::process
    I["count = count - 1"]:::process
    J(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> H --> I --> D
    D -- No --> J`,

    "13_fibonacci_for.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Init a=0, b=1, i=0"]:::process
    C{"i < 10"}:::decision
    D["Print a"]:::process
    E["next = a + b"]:::process
    F["a = b"]:::process
    G["b = next"]:::process
    H["i = i + 1"]:::process
    I(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> E --> F --> G --> H --> C
    C -- No --> I`,

    "14_fibonacci_while_limit.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["a = 0, b = 1"]:::process
    C["Print heading"]:::process
    D{"a < 10"}:::decision
    E["Print a"]:::process
    F["next = a + b"]:::process
    G["a = b"]:::process
    H["b = next"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> H --> D
    D -- No --> I`,

    "15_fibonacci_for_limit.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize a = 0, b = 1"]:::process
    C["Print heading"]:::process
    D{"a < 10"}:::decision
    E["Print a"]:::process
    F["next = a + b"]:::process
    G["a = b"]:::process
    H["b = next"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> H --> D
    D -- No --> I`,

    "16_prime_check.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["isPrime = true"]:::process
    D{"n <= 1"}:::decision
    E["isPrime = false"]:::process
    F["i = 2"]:::process
    G{"i * i <= n"}:::decision
    H{"n % i == 0"}:::decision
    I["isPrime = false"]:::process
    J["i = i + 1"]:::process
    K{"isPrime"}:::decision
    L["Print Prime"]:::process
    M["Print Not Prime"]:::process
    N(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> K
    D -- No --> F --> G
    G -- Yes --> H
    H -- Yes --> I --> K
    H -- No --> J --> G
    G -- No --> K
    K -- Yes --> L --> N
    K -- No --> M --> N`,

    "17_armstrong.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["num = n, sum = 0"]:::process
    D{"num != 0"}:::decision
    E["digit = num % 10"]:::process
    F["sum = sum + digit^3"]:::process
    G["num = num / 10"]:::process
    H{"sum == n"}:::decision
    I["Print Armstrong"]:::process
    J["Print Not Armstrong"]:::process
    K(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> G --> D
    D -- No --> H
    H -- Yes --> I --> K
    H -- No --> J --> K`,

    "18_break_continue.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["i = 1"]:::process
    C{"i <= 10"}:::decision
    D{"i == 4"}:::decision
    E["i = i + 1"]:::process
    F{"i == 8"}:::decision
    G["Print i"]:::process
    H["i = i + 1"]:::process
    I(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D
    D -- Yes --> E --> C
    D -- No --> F
    F -- Yes --> I
    F -- No --> G --> H --> C
    C -- No --> I`,

    "19_array_io.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Declare array arr size 5"]:::process
    C["i = 0"]:::process
    D{"i < 5"}:::decision
    E["Input arr[i]"]:::process
    F["i = i + 1"]:::process

    G["Display Scores"]:::process
    H["i = 0"]:::process
    I{"i < 5"}:::decision
    J["Print arr[i]"]:::process
    K["i = i + 1"]:::process

    L(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> D
    D -- No --> G --> H --> I
    I -- Yes --> J --> K --> I
    I -- No --> L`,

    "20_sum_avg_array.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize arr = {10,20,30,40,50}"]:::process
    C["sum = 0, i = 0"]:::process
    D{"i < 5"}:::decision
    E["sum = sum + arr[i]"]:::process
    F["i = i + 1"]:::process
    G["Compute avg = sum / 5"]:::process
    H["Print Sum and Avg"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> D
    D -- No --> G --> H --> I`,

    "21_large_small_array.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize arr = {3,1,9,7,5}"]:::process
    C["min = arr[0], max = arr[0], i = 1"]:::process
    D{"i < 5"}:::decision
    E{"arr[i] > max"}:::decision
    F["max = arr[i]"]:::process
    G{"arr[i] < min"}:::decision
    H["min = arr[i]"]:::process
    I["i = i + 1"]:::process
    J["Print Min and Max"]:::process
    K(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E
    E -- Yes --> F --> G
    E -- No --> G
    G -- Yes --> H --> I
    G -- No --> I
    I --> D
    D -- No --> J --> K`,

    "22_matrix_add.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Declare A, B, C as 2x2 matrices"]:::process
    C["i = 0"]:::process
    D{"i < 2"}:::decision
    E["j = 0"]:::process
    F{"j < 2"}:::decision
    G["C[i][j] = A[i][j] + B[i][j]"]:::process
    H["j = j + 1"]:::process
    I["i = i + 1"]:::process
    J[/"Print matrix C"/]:::output
    K(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F
    F -- Yes --> G --> H --> F
    F -- No --> I --> D
    D -- No --> J --> K`,

    "23_concat_name.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input firstName, lastName"/]:::input
    C["fullName = firstName + lastName"]:::process
    D[/"Print fullName"/]:::output
    E(["End"]):::startEnd

    A --> B --> C --> D --> E`,

    "24_reverse_string.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input string s"/]:::input
    C["i = length(s) - 1"]:::process
    D{"i >= 0"}:::decision
    E["Print s[i]"]:::process
    F["i = i - 1"]:::process
    G(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> F --> D
    D -- No --> G`,

    // ── UNIT II: FUNCTIONS & POINTERS ───────────────────────────────────────

    "25_sum_function.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C["Call sum(a, b)"]:::process
    D["result = a + b"]:::process
    E["Return result"]:::process
    F[/"Print result"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "26_pass_array_func.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Initialize arr = {10,20,30,40,50}"]:::process
    C["Call printArray(arr, 5)"]:::process
    D["i = 0"]:::process
    E{"i < 5"}:::decision
    F[/"Print arr[i]"/]:::output
    G["i = i + 1"]:::process
    H(["End"]):::startEnd

    A --> B --> C --> D --> E
    E -- Yes --> F --> G --> E
    E -- No --> H`,

    "27_swap_value.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["a = 5, b = 10"]:::process
    C["Call swap(a, b)"]:::process
    D["temp = x, x = y, y = temp"]:::process
    E[/"Print a, b (UNCHANGED)"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "28_swap_ref.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["a = 5, b = 10"]:::process
    C["Call swap(&a, &b)"]:::process
    D["temp = *x, *x = *y, *y = temp"]:::process
    E[/"Print a, b (SWAPPED)"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "29_recursive_sum.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input n"/]:::input
    C["Call sum(n)"]:::process
    D{"n == 0"}:::decision
    E["Return 0"]:::process
    F["Return n + sum(n-1)"]:::process
    G[/"Print result"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> G --> H
    D -- No --> F --> C`,

    "30_recursive_factorial.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Call fact(4)"]:::process

    C{"n <= 1?"}:::decision
    D["Return 1"]:::process

    E["Call fact(n-1)"]:::process
    F["Multiply n * result"]:::process
    G["Return result"]:::process

    H(["End"]):::startEnd

    A --> B --> C
    C -- Yes --> D --> H
    C -- No --> E --> F --> G --> C`,

    "31_pointer_basics.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["int x = 10"]:::process
    C["int *p = &x"]:::process
    D[/"Print x, &x, *p, p"/]:::output
    E(["End"]):::startEnd

    A --> B --> C --> D --> E`,

    "32_add_pointers.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["int a = 5, b = 10"]:::process
    C["int *p = &a, *q = &b"]:::process
    D["sum = *p + *q"]:::process
    E[/"Print sum"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "33_dyn_array.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input size n"/]:::input
    C["Allocate array with new int[n]"]:::process
    D["i = 0"]:::process
    E{"i < n"}:::decision
    F[/"Input arr[i]"/]:::input
    G["i = i + 1"]:::process
    H["i = 0"]:::process
    I{"i < n"}:::decision
    J[/"Print arr[i]"/]:::output
    K["i = i + 1"]:::process
    L["delete[] array"]:::process
    M(["End"]):::startEnd

    A --> B --> C --> D --> E
    E -- Yes --> F --> G --> E
    E -- No --> H --> I
    I -- Yes --> J --> K --> I
    I -- No --> L --> M`,

    // ── UNIT III: OOP ────────────────────────────────────────────────────────

    "34_class_object.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class GfG"]:::process
    C["Create object obj"]:::process
    D["obj.printMsg()"]:::process
    E[/"Print message"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "35_student_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Student"]:::process
    C["Create object s1"]:::process
    D["s1.setData(name, marks)"]:::process
    E["s1.display()"]:::process
    F[/"Print name, marks"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "36_getdata_display.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with getData() and display()"]:::process
    C["Create object obj"]:::process
    D["obj.getData()"]:::process
    E[/"Input data"/]:::input
    F["obj.display()"]:::process
    G[/"Print data"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "37_factorial_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Factorial"]:::process
    C[/"Input n"/]:::input
    D["Create object f"]:::process
    E["f.compute(n)"]:::process
    F{"n <= 1"}:::decision
    G["Return 1"]:::process
    H["Return n * compute(n-1)"]:::process
    I[/"Print result"/]:::output
    J(["End"]):::startEnd

    A --> B --> C --> D --> E --> F
    F -- Yes --> G --> I --> J
    F -- No --> H --> E`,

    "38_array_objects.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Student"]:::process
    C["Create array of 3 Student objects"]:::process
    D["i = 0"]:::process
    E{"i < 3"}:::decision
    F["Input student[i] data"]:::process
    G["i = i + 1"]:::process
    H["i = 0"]:::process
    I{"i < 3"}:::decision
    J[/"Display student[i]"/]:::output
    K["i = i + 1"]:::process
    L(["End"]):::startEnd

    A --> B --> C --> D --> E
    E -- Yes --> F --> G --> E
    E -- No --> H --> I
    I -- Yes --> J --> K --> I
    I -- No --> L`,

    "39_bank_encapsulation.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class BankAccount (private balance)"]:::process
    C["Create object acct"]:::process
    D["acct.deposit(500)"]:::process
    E["acct.withdraw(200)"]:::process
    F[/"acct.getBalance()"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "40_func_outside_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Declare class with method inside"]:::process
    C["Define method outside using ::"]:::process
    D["Create object obj"]:::process
    E["obj.display()"]:::process
    F[/"Print output"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "41_access_specifiers.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with public, private, protected"]:::process
    C["Create object obj"]:::process
    D["Access public member directly"]:::process
    E["Access private via public method"]:::process
    F[/"Print values"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "42_static_counter.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with static int count = 0"]:::process
    C["Create obj1 → count = 1"]:::process
    D["Create obj2 → count = 2"]:::process
    E["Create obj3 → count = 3"]:::process
    F[/"Print count = 3"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "43_friend_func.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with private data"]:::process
    C["Declare friend function"]:::process
    D["Create object obj"]:::process
    E["Call friend function with obj"]:::process
    F["Access private members directly"]:::process
    G[/"Print result"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "44_constructors.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with Default + Param constructors"]:::process
    C["Create obj1 (Default ctor fires)"]:::process
    D["Create obj2(10) (Param ctor fires)"]:::process
    E[/"Print obj1 and obj2 values"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "45_copy_constructor.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with Copy Constructor"]:::process
    C["Create original obj1"]:::process
    D["Create obj2 = obj1 (Copy ctor fires)"]:::process
    E[/"Print obj1 and obj2 (same values)"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "46_destructor.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with Destructor"]:::process
    C["Create object obj"]:::process
    D[/"obj constructor fires"/]:::output
    E["obj goes out of scope"]:::process
    F[/"Destructor fires automatically"/]:::output
    G(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G`,

    "47_func_overload.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define add(int, int)"]:::process
    C["Define add(float, float)"]:::process
    D["Define add(int, int, int)"]:::process
    E["Call add(2, 3)"]:::process
    F["Call add(2.5, 3.5)"]:::process
    G["Call add(1, 2, 3)"]:::process
    H[/"Print 5, 6.0, 6"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "48_unary_overload.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Counter with val = 0"]:::process
    C["Overload ++ operator"]:::process
    D["Create object c"]:::process
    E["++c  (operator fires)"]:::process
    F["val = val + 1"]:::process
    G[/"Print val"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "49_binary_overload.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class Complex (real, imag)"]:::process
    C["Overload + operator"]:::process
    D["Create c1(3,4), c2(1,2)"]:::process
    E["c3 = c1 + c2"]:::process
    F["real = c1.real + c2.real"]:::process
    G["imag = c1.imag + c2.imag"]:::process
    H[/"Print c3: 4 + 6i"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "50_basic_to_class.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class with converting constructor"]:::process
    C["int x = 42"]:::process
    D["MyClass obj = x (auto-converts)"]:::process
    E[/"Print obj value"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`,

    "51_single_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base class Animal"]:::process
    C["Define Derived class Dog extends Animal"]:::process
    D["Create Dog object d"]:::process
    E["d.speak() (Base method)"]:::process
    F["d.bark() (Derived method)"]:::process
    G[/"Print output"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "52_multiple_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class A (featA)"]:::process
    C["Define class B (featB)"]:::process
    D["Define class C extends A and B"]:::process
    E["Create object c"]:::process
    F["c.featA(), c.featB()"]:::process
    G[/"Print both features"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "53_multilevel_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class A (Grandparent)"]:::process
    C["Define class B extends A (Parent)"]:::process
    D["Define class C extends B (Child)"]:::process
    E["Create object c"]:::process
    F["c.featureA(), c.featureB(), c.featureC()"]:::process
    G[/"Print all features"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "54_hybrid_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define class A (Base)"]:::process
    C["Define class B extends A"]:::process
    D["Define class C extends A"]:::process
    E["Define class D extends B and C"]:::process
    F["Create object d"]:::process
    G[/"d.show() (hybrid features)"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "55_hierarchical_inheritance.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base class Organism"]:::process
    C["Define Bacteria extends Organism"]:::process
    D["Define Virus extends Organism"]:::process
    E["Create Bacteria b, Virus v"]:::process
    F["b.info(), v.info()"]:::process
    G[/"Print both outputs"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "56_runtime_poly.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base class with virtual speak()"]:::process
    C["Define Derived Dog and Cat classes"]:::process
    D["Base *ptr = new Dog()"]:::process
    E["ptr->speak() → Dog sound"]:::process
    F["ptr = new Cat()"]:::process
    G["ptr->speak() → Cat sound"]:::process
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "57_virtual_function.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define Base with virtual display()"]:::process
    C["Define Derived overrides display()"]:::process
    D["Base *ptr = new Derived()"]:::process
    E["ptr->display()"]:::process
    F{"Late binding resolves at runtime"}:::decision
    G[/"Calls Derived::display()"/]:::output
    H(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H`,

    "58_exception_handling.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B[/"Input a, b"/]:::input
    C["try block"]:::process
    D{"b == 0"}:::decision
    E["throw exception"]:::process
    F["result = a / b"]:::process
    G[/"Print result"/]:::output
    H["catch block"]:::process
    I[/"Print Div by 0 error"/]:::output
    J(["End"]):::startEnd

    A --> B --> C --> D
    D -- Yes --> E --> H --> I --> J
    D -- No --> F --> G --> J`,

    "59_file_handling.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Open file for writing (ofstream)"]:::process
    C["Write sequence data to file"]:::process
    D["Close file"]:::process
    E["Open file for reading (ifstream)"]:::process
    F{"EOF?"}:::decision
    G[/"Read and print line"/]:::output
    H["Close file"]:::process
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F
    F -- No --> G --> F
    F -- Yes --> H --> I`,

    "60_deep_shallow_copy.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Create obj1 with heap data"]:::process
    C["Shallow copy: obj2 = obj1 (same pointer)"]:::process
    D["Modify obj1 data"]:::process
    E[/"obj2 also changes (DANGER)"/]:::output
    F["Deep copy: obj3 with new memory"]:::process
    G["Modify obj1 data"]:::process
    H[/"obj3 unchanged (SAFE)"/]:::output
    I(["End"]):::startEnd

    A --> B --> C --> D --> E --> F --> G --> H --> I`,

    "61_templates.cpp": `flowchart TD
    A(["Start"]):::startEnd
    B["Define template function add(T a, T b)"]:::process
    C["add(3, 4) → int version"]:::process
    D["add(2.5, 1.5) → float version"]:::process
    E[/"Print 7, 4.0"/]:::output
    F(["End"]):::startEnd

    A --> B --> C --> D --> E --> F`

};


// --- MODULE: diagrams.js ---
window.App = window.App || {};

window.App.Diagrams = {
    init: function () {
        this.btn = document.getElementById('diagramBtn');
        this.modal = document.getElementById('diagramModal');
        this.closeBtn = document.getElementById('closeDiagramBtn');
        this.dlBtn = document.getElementById('dlPngBtn');
        this.renderCtx = document.getElementById('diagramRenderCtx');

        if (!this.btn || !this.modal) return;
        if (typeof mermaid !== 'undefined') {
            mermaid.initialize({ startOnLoad: false, theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default' });
        }

        this.btn.addEventListener('click', () => this.openModal());
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
        this.dlBtn.addEventListener('click', () => this.downloadPNG());
    },

    openModal: function () {
        const fileId = window.currentActiveHash.substring(1);
        const code = window.__CPP_CONTENTS__[fileId] || "";

        let pattern = "";
        const fileObj = window.App.Data.cppFiles.find(f => f.id === fileId);
        const manualOverride = window.__MANUAL_DIAGRAMS__ && window.__MANUAL_DIAGRAMS__[fileId];

        if (manualOverride) {
            pattern = manualOverride + "\n" + this.styles();
        } else if (fileObj && fileObj.diagramPattern) {
            pattern = fileObj.diagramPattern;
        } else {
            pattern = this.generatePatternFromCode(code, fileObj?.title || fileId);
        }

        this.renderDiagram(pattern, fileId);

        this.modal.classList.remove('hidden');
        void this.modal.offsetWidth; // Reflow
        this.modal.classList.remove('opacity-0');
        this.modal.firstElementChild.classList.remove('scale-95');
    },

    closeModal: function () {
        this.modal.classList.add('opacity-0');
        this.modal.firstElementChild.classList.add('scale-95');
        setTimeout(() => { this.modal.classList.add('hidden'); }, 300);
    },

    // 🔷 1. DETECT TYPE
    detectProgramType: function (code, title) {
        const header = title ? title.toLowerCase() : "";
        if (header.includes("recurs")) return "recursion";
        if (/class\s+\w+\s*:\s*(public|private|protected)\s+\w+/.test(code)) return "inheritance";
        if (/class\s+\w+/.test(code)) return "oop";
        if (/(for|while)\s*\(/.test(code)) return "loop";
        if (/if\s*\(/.test(code)) return "decision";
        return "simple";
    },

    // 🔷 2. EXTRACT ALGORITHM-AWARE LOGIC
    extractInfo: function (code) {
        let lines = code.split('\n');
        let initOps = [];
        let bodyOps = [];
        let inLoop = false;

        for (let l of lines) {
            let t = l.trim();
            if (t.startsWith("for") || t.startsWith("while")) inLoop = true;
            if (t === "}") inLoop = false;

            // Extract clean mathematical assignment instructions securely
            if (!t.startsWith("/") && !t.startsWith("cout") && !t.startsWith("cin") && !t.startsWith("return") && !t.startsWith("class") && !t.startsWith("#") && !t.startsWith("using")) {
                let isOp = t.includes("=") || t.includes("++") || t.includes("--") || t.includes("+=") || t.includes("-=");
                if (isOp && !t.includes("==") && !t.includes("for") && !t.includes("while")) {
                    let cleanOp = t.replace(";", "").replace("int ", "").replace("float ", "").replace("double ", "").trim();
                    if (cleanOp.length > 0 && cleanOp.length < 40) {
                        if (inLoop) bodyOps.push(cleanOp);
                        else initOps.push(cleanOp);
                    }
                }
            }
        }

        return {
            hasInput: /cin\s*>>/.test(code),
            hasOutput: /cout\s*<<|printf/.test(code),
            condition: (code.match(/if\s*\((.*?)\)/) || [])[1] || "Condition",
            loop: (code.match(/(for|while)\s*\((.*?)\)/) || [])[2] || "Condition",
            initOps: initOps.length > 0 ? initOps.slice(0, 3) : ["Initialize Variables"],
            bodyOps: bodyOps.length > 0 ? bodyOps.slice(0, 4) : ["Process Logic"]
        };
    },

    // 🔷 3. CLEAN TEXT
    clean: function (txt) {
        if (!txt) return "";
        return txt
            .replace(/&&/g, "AND")
            .replace(/\|\|/g, "OR")
            .replace(/"/g, "'")
            .slice(0, 50);
    },

    // 🔷 4. MAIN GENERATOR
    generatePatternFromCode: function (code, title) {
        const type = this.detectProgramType(code, title);
        const info = this.extractInfo(code);

        switch (type) {
            case "recursion": return this.templateRecursion(info);
            case "inheritance": return this.templateInheritance(info);
            case "oop": return this.templateOOP(info);
            case "loop": return this.templateLoop(info);
            case "decision": return this.templateDecision(info);
            default: return this.templateSimple(info);
        }
    },

    // 🔥 STRUCTURED TEMPLATES (DYNAMIC EDGE ROUTING & AUTO HIDING)
    templateRecursion: function (info) {
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["Invoke Recursive Function"]:::process\n    ${prev} --> C\n`;

        diag += `    D{"Base Case Reached? (${this.clean(info.condition)})"}:::decision\n    C --> D\n`;

        diag += `    E["Call Self (Recursive Loop)"]:::process\n    D -- No --> E\n    E --> C\n`;

        diag += `    F["Base Return AND Unwind Stack"]:::process\n    D -- Yes --> F\n`;
        prev = "F";

        if (info.hasOutput) { diag += `    G[/"Display Output"/]:::output\n    ${prev} --> G\n`; prev = "G"; }
        diag += `    H(["End"]):::startEnd\n    ${prev} --> H\n\n    ${this.styles()}`;
        return diag;
    },

    templateDecision: function (info) {
        const initText = info.initOps.map(op => this.clean(op)).join("<br>");
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["${initText}"]:::process\n    ${prev} --> C\n`;
        diag += `    D{"${this.clean(info.condition)} ?"}:::decision\n    C --> D\n`;
        diag += `    E["True Case Logic"]:::process\n    F["False Case Logic"]:::process\n`;

        if (info.hasOutput) {
            diag += `    G[/"Print Result"/]:::output\n    E --> G\n    F --> G\n    G --> H(["End"]):::startEnd\n`;
        } else {
            diag += `    E --> H(["End"]):::startEnd\n    F --> H\n`;
        }

        diag += `    D -- Yes --> E\n    D -- No --> F\n\n    ${this.styles()}`;
        return diag;
    },

    templateLoop: function (info) {
        const loopCond = info.loop ? this.clean(info.loop) : "Condition";
        const initText = info.initOps.map(op => this.clean(op)).join("<br>");
        const bodyText = info.bodyOps.map(op => this.clean(op)).join("<br>");

        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["${initText}"]:::process\n    ${prev} --> C\n`;
        diag += `    D{"${loopCond}"}:::decision\n    C --> D\n`;
        diag += `    E["${bodyText}"]:::process\n    D -- Yes --> E\n    E --> D\n`;

        if (info.hasOutput) {
            diag += `    F[/"Print Result"/]:::output\n    D -- No --> F\n    F --> G(["End"]):::startEnd\n`;
        } else {
            diag += `    D -- No --> G(["End"]):::startEnd\n`;
        }

        diag += `\n    ${this.styles()}`;
        return diag;
    },

    templateOOP: function (info) {
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n    B["Create Object"]:::process\n    C["Call Methods"]:::process\n    D["Process Inside Class"]:::process\n`;
        diag += `    A --> B --> C --> D\n`;
        if (info.hasOutput) {
            diag += `    E[/"Display Output"/]:::output\n    D --> E\n    E --> F(["End"]):::startEnd\n`;
        } else {
            diag += `    D --> F(["End"]):::startEnd\n`;
        }
        diag += `\n    ${this.styles()}`;
        return diag;
    },

    templateInheritance: function (info) {
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n    B["Create Derived Object"]:::process\n    C["Access Base Class Features"]:::process\n    D["Access Derived Class Features"]:::process\n`;
        diag += `    A --> B --> C --> D\n`;
        if (info.hasOutput) {
            diag += `    E[/"Display Output"/]:::output\n    D --> E\n    E --> F(["End"]):::startEnd\n`;
        } else {
            diag += `    D --> F(["End"]):::startEnd\n`;
        }
        diag += `\n    ${this.styles()}`;
        return diag;
    },

    templateSimple: function (info) {
        const usedInit = info.initOps[0] !== "Initialize Variables" ? info.initOps.map(op => this.clean(op)).join("<br>") : "Process Logic";
        let diag = `flowchart TD\n    A(["Start"]):::startEnd\n`;
        let prev = "A";

        if (info.hasInput) { diag += `    B[/"Enter Input"/]:::input\n    ${prev} --> B\n`; prev = "B"; }
        diag += `    C["${usedInit}"]:::process\n    ${prev} --> C\n`;
        prev = "C";

        if (info.hasOutput) { diag += `    D[/"Display Output"/]:::output\n    ${prev} --> D\n`; prev = "D"; }
        diag += `    E(["End"]):::startEnd\n    ${prev} --> E\n\n    ${this.styles()}`;
        return diag;
    },

    // 🎨 STYLE
    styles: function () {
        return `
classDef startEnd fill:#22c55e,stroke:#16a34a,color:white,rx:20,ry:20;
classDef input fill:#3b82f6,stroke:#1d4ed8,color:white;
classDef process fill:#facc15,stroke:#ca8a04,color:black;
classDef decision fill:#fb7185,stroke:#e11d48,color:white;
classDef output fill:#a78bfa,stroke:#7c3aed,color:white;
`;
    },

    renderDiagram: async function (patternString, id) {
        this.renderCtx.innerHTML = '<div class="text-gray-500"><i class="fa-solid fa-spinner fa-spin"></i> Rendering diagram...</div>';
        try {
            if (typeof mermaid === 'undefined') {
                this.renderCtx.innerHTML = '<div class="text-red-500">Mermaid.js failed to load.</div>';
                return;
            }
            const uniqueId = `mermaid-${Date.now()}`;

            patternString = patternString.trim();
            const { svg } = await mermaid.render(uniqueId, patternString);

            this.renderCtx.innerHTML = svg;

            const svgEl = this.renderCtx.querySelector('svg');
            if (svgEl) {
                svgEl.style.maxWidth = '100% !important';
                svgEl.style.maxHeight = '100% !important';
                svgEl.style.width = 'auto';
                svgEl.style.height = 'auto';
            }
        } catch (err) {
            console.error("Mermaid Render Error:", err);
            this.renderCtx.innerHTML = `<div class="text-red-500 text-sm p-4 whitespace-pre">Syntax Error generating diagram.\n\n${err.message}</div>`;
        }
    },

    downloadPNG: function () {
        if (typeof html2canvas === 'undefined') {
            window.App.UI.showToast("Error", "html2canvas library not loaded.", true);
            return;
        }

        html2canvas(this.renderCtx, {
            scale: 2,
            backgroundColor: "#ffffff",
            logging: false
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `diagram_${window.currentActiveHash.substring(1).replace('.cpp', '')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            window.App.UI.showToast("Success", "Diagram saved as PNG");
        }).catch(err => {
            console.error("html2canvas Error:", err);
            window.App.UI.showToast("Error", "Failed to generate PNG", true);
        });
    }
};


// --- MODULE: background.js ---
window.App.Background = {
    init: function () {
        const c = document.getElementById("matrix-canvas");
        if (!c) return;
        const ctx = c.getContext("2d");

        c.width = window.innerWidth;
        c.height = window.innerHeight;

        const matrixChars = "0101010101{}[]()<>+-*=&|!?;:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const matrix = matrixChars.split("");
        const font_size = 14;
        let columns = c.width / font_size;
        let drops = [];
        for (let x = 0; x < columns; x++) drops[x] = 1;

        let mouseX = -1000;
        let mouseY = -1000;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);

            const isDark = document.documentElement.classList.contains('dark');
            ctx.font = font_size + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];

                let dropX = i * font_size;
                let dropY = drops[i] * font_size;
                let dist = Math.sqrt(Math.pow(dropX - mouseX, 2) + Math.pow(dropY - mouseY, 2));

                // Interaction glow!
                if (dist < 120) {
                    ctx.fillStyle = isDark ? "#ffffff" : "#000000"; // Pure white/black near mouse
                } else if (dist < 200) {
                    ctx.fillStyle = isDark ? "#38bdf8" : "#3b82f6"; // Light blue nearby
                } else {
                    ctx.fillStyle = isDark ? "#0ea5e9" : "#64748b"; // Base color
                }

                ctx.fillText(text, dropX, dropY);
                if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(draw, 35);

        window.addEventListener('resize', () => {
            c.width = window.innerWidth;
            c.height = window.innerHeight;
            columns = c.width / font_size;
            const newDrops = [];
            for (let x = 0; x < columns; x++) newDrops[x] = drops[x] !== undefined ? drops[x] : Math.random() * (c.height / font_size);
            drops = newDrops;
        });
    }
};


// --- MODULE: main.js ---
window.currentActiveHash = '';

// ─── Tab Engine ────────────────────────────────────────────────────────────────
// Active-tab classes (Tailwind)
const TAB_ACTIVE   = ['border-primary', 'text-primary', 'bg-primary/5'];
const TAB_INACTIVE = ['border-transparent', 'text-gray-400'];

window.App.Tabs = {
    current: 'code',

    init: function () {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                window.App.Tabs.switch(tab);
            });
        });
    },

    switch: function (tab) {
        this.current = tab;

        // Toggle button styles
        document.querySelectorAll('.tab-btn').forEach(btn => {
            const isActive = btn.dataset.tab === tab;
            if (isActive) {
                TAB_ACTIVE.forEach(c => btn.classList.add(c));
                TAB_INACTIVE.forEach(c => btn.classList.remove(c));
            } else {
                TAB_INACTIVE.forEach(c => btn.classList.add(c));
                TAB_ACTIVE.forEach(c => btn.classList.remove(c));
            }
        });

        // Show/hide panels
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.add('hidden');
        });
        const active = document.getElementById('tabPanel-' + tab);
        if (active) active.classList.remove('hidden');
    },

    // Called by Simulator after run completes — mirrors terminal content to Output tab
    syncOutput: function (html) {
        const panel = document.getElementById('tabPanel-output');
        if (panel) panel.innerHTML = html || '<span class="text-gray-500">No output produced.</span>';
    }
};
// ───────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    window.App.Background.init();
    window.App.UI.initSidebar();
    if (window.App.UI.initTerminalResizer) window.App.UI.initTerminalResizer();
    if (window.App.UI.initSidebarResizer) window.App.UI.initSidebarResizer();
    if (window.App.Diagrams) window.App.Diagrams.init();

    // 🧩 Initialize tabs
    window.App.Tabs.init();

    document.getElementById('themeToggle').addEventListener('click', () => window.App.UI.toggleTheme());
    document.getElementById('searchInput').addEventListener('input', (e) => window.App.Search.handleInput(e));
    document.getElementById('clearSearch').addEventListener('click', () => window.App.Search.clear());
    document.getElementById('copyBtn').addEventListener('click', () => window.App.Viewer.copyCode());
    document.getElementById('downloadBtn').addEventListener('click', () => window.App.Viewer.downloadCode());

    document.getElementById('prevBtn').addEventListener('click', () => window.App.Viewer.navigateProgram(-1));
    document.getElementById('nextBtn').addEventListener('click', () => window.App.Viewer.navigateProgram(1));

    document.getElementById('mobileMenuBtn').addEventListener('click', () => window.App.UI.toggleMobileMenu());
    document.getElementById('sidebarOverlay').addEventListener('click', () => window.App.UI.toggleMobileMenu());
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            if (!window.App.isMenuOpen) {
                window.App.UI.toggleMobileMenu();
            }
            setTimeout(() => {
                document.getElementById('searchInput').focus();
            }, 300);
        });
    }

    const runBtn = document.getElementById('runBtn');
    if (runBtn) runBtn.addEventListener('click', () => window.App.Simulator.runCompiler());

    const closeConceptBtn = document.getElementById('closeConceptBtn');
    const openConceptBtn  = document.getElementById('openConceptBtn');
    const conceptPanel    = document.getElementById('conceptPanel');

    if (closeConceptBtn && conceptPanel && openConceptBtn) {
        closeConceptBtn.addEventListener('click', () => {
            conceptPanel.classList.add('hidden');
            openConceptBtn.classList.remove('hidden');
        });
        openConceptBtn.addEventListener('click', () => {
            conceptPanel.classList.remove('hidden');
            openConceptBtn.classList.add('hidden');
        });
    }

    window.addEventListener('hashchange', () => window.App.Viewer.handleHashRouting());
    window.App.Viewer.handleHashRouting();

    // ⌨️ Keyboard Navigation (← →)
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.key === 'ArrowRight') window.App.Viewer.navigateProgram(1);
        if (e.key === 'ArrowLeft')  window.App.Viewer.navigateProgram(-1);
    });
});


