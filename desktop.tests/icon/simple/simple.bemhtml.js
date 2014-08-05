(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "image") {
            if (!$$elem) {
                var __$r = __$b1(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "icon") {
            if (!$$elem && __$ctx.ctx.url) {
                return {
                    style: "background-image:url(" + __$ctx.ctx.url + ")"
                };
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                if (__$ctx.ctx.url) {
                    return {
                        src: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "image") {
            if (!$$elem) {
                return "img";
            }
        } else if (__$t === "icon") {
            if (!$$elem) {
                return "i";
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return "script";
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return "link";
                }
                return "style";
            } else if (__$t === "head") {
                return "head";
            } else if (__$t === "favicon") {
                return "link";
            } else if (__$t === "link") {
                return "link";
            } else if (__$t === "meta") {
                return "meta";
            }
            if (!$$elem) {
                return "body";
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 1) === 0) {
                    return [ function __$lb__$1() {
                        var __$r__$2;
                        var __$l0__$3 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$2 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$3;
                        return __$r__$2;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 4) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$20() {
                    var __$r__$21;
                    var __$l0__$22 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$21 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$22;
                    return __$r__$21;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
                return [ function __$lb__$23() {
                    var __$r__$24;
                    var __$l0__$25 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$24 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$25;
                    return __$r__$24;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        return undefined;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 2) === 0) {
                            var __$r = __$b33(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b34(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b35(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b36(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b39(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b40(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b42(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b43(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_ieCommented"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b1(__$ctx, __$ref) {
    var ctx__$0 = __$ctx.ctx;
    return {
        src: ctx__$0.url,
        width: ctx__$0.width,
        height: ctx__$0.height,
        alt: ctx__$0.alt,
        title: ctx__$0.title
    };
}

function __$b33(__$ctx, __$ref) {
    var url__$4 = __$ctx.ctx.url;
    var __$r__$6;
    var __$l0__$7 = $$mode;
    $$mode = "";
    var __$l1__$8 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$4 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$10;
    var __$l2__$11 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$10 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$11;
    __$r__$6 = __$r__$10;
    $$mode = __$l0__$7;
    __$ctx.ctx = __$l1__$8;
    return;
}

function __$b34(__$ctx, __$ref) {
    var ie__$12 = __$ctx.ctx.ie, hideRule__$13 = !ie__$12 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$12 === "!IE" ? [ ie__$12, "<!-->", "<!--" ] : [ ie__$12, "", "" ];
    var __$r__$15;
    var __$l0__$16 = $$mode;
    $$mode = "";
    var __$l3__$17 = __$ctx.ctx;
    var __$l1__$18 = __$l3__$17._ieCommented;
    __$l3__$17._ieCommented = true;
    var __$l2__$19 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$13[0] + "]>" + hideRule__$13[1], __$ctx.ctx, hideRule__$13[2] + "<![endif]-->" ];
    __$r__$15 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$16;
    __$l3__$17._ieCommented = __$l1__$18;
    __$ctx.ctx = __$l2__$19;
    return;
}

function __$b35(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$26 = __$ctx.ctx;
    var __$r__$28;
    var __$l0__$29 = $$mode;
    $$mode = "";
    var __$l1__$30 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$26.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, {
                tag: "title",
                content: ctx__$26.title
            }, {
                block: "ua"
            }, ctx__$26.head, ctx__$26.styles, ctx__$26.favicon ? {
                elem: "favicon",
                url: ctx__$26.favicon
            } : "" ]
        }, ctx__$26 ]
    } ];
    var __$r__$32;
    var __$l2__$33 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$32 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$33;
    __$r__$28 = __$r__$32;
    $$mode = __$l0__$29;
    __$ctx.ctx = __$l1__$30;
    __$ctx._defPageApplied = false;
    return;
}

function __$b36(__$ctx, __$ref) {
    var BEM_INTERNAL__$34 = __$ctx.BEM.INTERNAL, ctx__$35 = __$ctx.ctx, isBEM__$36, tag__$37, res__$38;
    var __$r__$40;
    var __$l0__$41 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$42 = $$block;
    var __$r__$44;
    var __$l1__$45 = $$mode;
    $$mode = "tag";
    __$r__$44 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$45;
    tag__$37 = __$r__$44;
    typeof tag__$37 !== "undefined" || (tag__$37 = ctx__$35.tag);
    typeof tag__$37 !== "undefined" || (tag__$37 = "div");
    if (tag__$37) {
        var jsParams__$46, js__$47;
        if (vBlock__$42 && ctx__$35.js !== false) {
            var __$r__$48;
            var __$l2__$49 = $$mode;
            $$mode = "js";
            __$r__$48 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$49;
            js__$47 = __$r__$48;
            js__$47 = js__$47 ? __$ctx.extend(ctx__$35.js, js__$47 === true ? {} : js__$47) : ctx__$35.js === true ? {} : ctx__$35.js;
            js__$47 && ((jsParams__$46 = {})[BEM_INTERNAL__$34.buildClass(vBlock__$42, ctx__$35.elem)] = js__$47);
        }
        __$ctx._str += "<" + tag__$37;
        var __$r__$50;
        var __$l3__$51 = $$mode;
        $$mode = "bem";
        __$r__$50 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$51;
        isBEM__$36 = __$r__$50;
        typeof isBEM__$36 !== "undefined" || (isBEM__$36 = typeof ctx__$35.bem !== "undefined" ? ctx__$35.bem : ctx__$35.block || ctx__$35.elem);
        var __$r__$53;
        var __$l4__$54 = $$mode;
        $$mode = "cls";
        __$r__$53 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$54;
        var cls__$52 = __$r__$53;
        cls__$52 || (cls__$52 = ctx__$35.cls);
        var addJSInitClass__$55 = ctx__$35.block && jsParams__$46;
        if (isBEM__$36 || cls__$52) {
            __$ctx._str += ' class="';
            if (isBEM__$36) {
                __$ctx._str += BEM_INTERNAL__$34.buildClasses(vBlock__$42, ctx__$35.elem, ctx__$35.elemMods || ctx__$35.mods);
                var __$r__$57;
                var __$l5__$58 = $$mode;
                $$mode = "mix";
                __$r__$57 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$58;
                var mix__$56 = __$r__$57;
                ctx__$35.mix && (mix__$56 = mix__$56 ? [].concat(mix__$56, ctx__$35.mix) : ctx__$35.mix);
                if (mix__$56) {
                    var visited__$59 = {}, visitedKey__$60 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$59[visitedKey__$60(vBlock__$42, $$elem)] = true;
                    __$ctx.isArray(mix__$56) || (mix__$56 = [ mix__$56 ]);
                    for (var i__$61 = 0; i__$61 < mix__$56.length; i__$61++) {
                        var mixItem__$62 = mix__$56[i__$61], hasItem__$63 = mixItem__$62.block || mixItem__$62.elem, mixBlock__$64 = mixItem__$62.block || mixItem__$62._block || $$block, mixElem__$65 = mixItem__$62.elem || mixItem__$62._elem || $$elem;
                        hasItem__$63 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$34[hasItem__$63 ? "buildClasses" : "buildModsClasses"](mixBlock__$64, mixItem__$62.elem || mixItem__$62._elem || (mixItem__$62.block ? undefined : $$elem), mixItem__$62.elemMods || mixItem__$62.mods);
                        if (mixItem__$62.js) {
                            (jsParams__$46 || (jsParams__$46 = {}))[BEM_INTERNAL__$34.buildClass(mixBlock__$64, mixItem__$62.elem)] = mixItem__$62.js === true ? {} : mixItem__$62.js;
                            addJSInitClass__$55 || (addJSInitClass__$55 = mixBlock__$64 && !mixItem__$62.elem);
                        }
                        if (hasItem__$63 && !visited__$59[visitedKey__$60(mixBlock__$64, mixElem__$65)]) {
                            visited__$59[visitedKey__$60(mixBlock__$64, mixElem__$65)] = true;
                            var __$r__$67;
                            var __$l6__$68 = $$mode;
                            $$mode = "mix";
                            var __$l7__$69 = $$block;
                            $$block = mixBlock__$64;
                            var __$l8__$70 = $$elem;
                            $$elem = mixElem__$65;
                            __$r__$67 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$68;
                            $$block = __$l7__$69;
                            $$elem = __$l8__$70;
                            var nestedMix__$66 = __$r__$67;
                            if (nestedMix__$66) {
                                for (var j__$71 = 0; j__$71 < nestedMix__$66.length; j__$71++) {
                                    var nestedItem__$72 = nestedMix__$66[j__$71];
                                    if (!nestedItem__$72.block && !nestedItem__$72.elem || !visited__$59[visitedKey__$60(nestedItem__$72.block, nestedItem__$72.elem)]) {
                                        nestedItem__$72._block = mixBlock__$64;
                                        nestedItem__$72._elem = mixElem__$65;
                                        mix__$56.splice(i__$61 + 1, 0, nestedItem__$72);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$52 && (__$ctx._str += isBEM__$36 ? " " + cls__$52 : cls__$52);
            __$ctx._str += addJSInitClass__$55 ? ' i-bem"' : '"';
        }
        if (isBEM__$36 && jsParams__$46) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$46)) + '"';
        }
        var __$r__$74;
        var __$l9__$75 = $$mode;
        $$mode = "attrs";
        __$r__$74 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$75;
        var attrs__$73 = __$r__$74;
        attrs__$73 = __$ctx.extend(attrs__$73, ctx__$35.attrs);
        if (attrs__$73) {
            var name__$76, attr__$77;
            for (name__$76 in attrs__$73) {
                attr__$77 = attrs__$73[name__$76];
                if (typeof attr__$77 === "undefined") continue;
                __$ctx._str += " " + name__$76 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$77) ? attr__$77 : __$ctx.reapply(attr__$77)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$37)) {
        __$ctx._str += "/>";
    } else {
        tag__$37 && (__$ctx._str += ">");
        var __$r__$79;
        var __$l10__$80 = $$mode;
        $$mode = "content";
        __$r__$79 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$80;
        var content__$78 = __$r__$79;
        if (content__$78 || content__$78 === 0) {
            isBEM__$36 = vBlock__$42 || $$elem;
            var __$r__$81;
            var __$l11__$82 = $$mode;
            $$mode = "";
            var __$l12__$83 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$84 = __$ctx.position;
            __$ctx.position = isBEM__$36 ? 1 : __$ctx.position;
            var __$l14__$85 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$36 ? 1 : __$ctx._listLength;
            var __$l15__$86 = __$ctx.ctx;
            __$ctx.ctx = content__$78;
            __$r__$81 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$82;
            __$ctx._notNewList = __$l12__$83;
            __$ctx.position = __$l13__$84;
            __$ctx._listLength = __$l14__$85;
            __$ctx.ctx = __$l15__$86;
        }
        tag__$37 && (__$ctx._str += "</" + tag__$37 + ">");
    }
    res__$38 = __$ctx._str;
    __$r__$40 = undefined;
    __$ctx._str = __$l0__$41;
    __$ctx._buf.push(res__$38);
    return;
}

function __$b39(__$ctx, __$ref) {
    var __$r__$88;
    var __$l0__$89 = $$mode;
    $$mode = "";
    var __$l1__$90 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$92;
    var __$l2__$93 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$92 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$93;
    __$r__$88 = __$r__$92;
    $$mode = __$l0__$89;
    __$ctx.ctx = __$l1__$90;
    return;
}

function __$b40(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$94 = __$ctx.ctx;
    if (ctx__$94 && ctx__$94 !== true || ctx__$94 === 0) {
        __$ctx._str += ctx__$94 + "";
    }
    return;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b42(__$ctx, __$ref) {
    var ctx__$95 = __$ctx.ctx, len__$96 = ctx__$95.length, i__$97 = 0, prevPos__$98 = __$ctx.position, prevNotNewList__$99 = __$ctx._notNewList;
    if (prevNotNewList__$99) {
        __$ctx._listLength += len__$96 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$96;
    }
    __$ctx._notNewList = true;
    while (i__$97 < len__$96) (function __$lb__$100() {
        var __$r__$101;
        var __$l0__$102 = __$ctx.ctx;
        __$ctx.ctx = ctx__$95[i__$97++];
        __$r__$101 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$102;
        return __$r__$101;
    })();
    prevNotNewList__$99 || (__$ctx.position = prevPos__$98);
    return;
}

function __$b43(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$103 = __$ctx.ctx.block, vElem__$104 = __$ctx.ctx.elem, block__$105 = __$ctx._currBlock || $$block;
    var __$r__$107;
    var __$l0__$108 = $$mode;
    $$mode = "default";
    var __$l1__$109 = $$block;
    $$block = vBlock__$103 || (vElem__$104 ? block__$105 : undefined);
    var __$l2__$110 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$103 || vElem__$104 ? undefined : block__$105;
    var __$l3__$111 = $$elem;
    $$elem = vElem__$104;
    var __$l4__$112 = $$mods;
    $$mods = vBlock__$103 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$113 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$107 = undefined;
    $$mode = __$l0__$108;
    $$block = __$l1__$109;
    __$ctx._currBlock = __$l2__$110;
    $$elem = __$l3__$111;
    $$mods = __$l4__$112;
    $$elemMods = __$l5__$113;
    return;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);