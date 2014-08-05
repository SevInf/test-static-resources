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
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "icon") {
            if (!$$elem) {
                return "i";
            }
        } else if (__$t === "link") {
            if (!$$elem) {
                return "a";
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "link") {
                return "link";
            } else if (__$t === "js") {
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
            } else if (__$t === "meta") {
                return "meta";
            }
            if (!$$elem) {
                return "body";
            }
        }
        return undefined;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "link") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
                    }(), {
                        url: __$ctx.ctx.url
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "menu-item") {
            if (!$$elem) {
                return {
                    val: __$ctx.ctx.val
                };
            }
        } else if (__$t === "menu") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 16) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$19() {
                        var __$r__$20;
                        var __$l0__$21 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 16;
                        __$r__$20 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$21;
                        return __$r__$20;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        } else if (__$t === "menu") {
            if (!$$elem) {
                return [ {
                    elem: "control"
                } ];
            }
        }
        return undefined;
    } else if (__$t === "default") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "menu") {
            if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 4) === 0) {
                return [ {
                    elem: "group-title",
                    content: __$ctx.ctx.title
                }, function __$lb__$13() {
                    var __$r__$14;
                    var __$l0__$15 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$14 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$15;
                    return __$r__$14;
                }() ];
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 128) === 0) {
                    return [ function __$lb__$32() {
                        var __$r__$33;
                        var __$l0__$34 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 128;
                        __$r__$33 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$34;
                        return __$r__$33;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 512) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$51() {
                    var __$r__$52;
                    var __$l0__$53 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 512;
                    __$r__$52 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$53;
                    return __$r__$52;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 1024) === 0) {
                return [ function __$lb__$54() {
                    var __$r__$55;
                    var __$l0__$56 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
                    __$r__$55 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$56;
                    return __$r__$55;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "link") {
                return false;
            } else if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 4096) === 0) {
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b61(__$ctx, __$ref);
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
        ctx["_menuItemDisabled"] = undefined;
        ctx["_menuMods"] = undefined;
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

function __$b2(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx, attrs__$4 = {}, tabIndex__$5;
    if (!$$mods.disabled) {
        if (ctx__$3.url) {
            attrs__$4.href = ctx__$3.url;
            tabIndex__$5 = ctx__$3.tabIndex;
        } else {
            tabIndex__$5 = ctx__$3.tabIndex || 0;
        }
    }
    typeof tabIndex__$5 === "undefined" || (attrs__$4.tabindex = tabIndex__$5);
    ctx__$3.title && (attrs__$4.title = ctx__$3.title);
    ctx__$3.target && (attrs__$4.target = ctx__$3.target);
    return attrs__$4;
}

function __$b7(__$ctx, __$ref) {
    var attrs__$25 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$25.tabindex = 0);
    return attrs__$25;
}

function __$b33(__$ctx, __$ref) {
    var ctx__$6 = __$ctx.ctx;
    typeof ctx__$6.url === "object" && (ctx__$6.url = __$ctx.reapply(ctx__$6.url));
    var __$r__$8;
    var __$l0__$9 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$8 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$9;
    return;
}

function __$b34(__$ctx, __$ref) {
    delete __$ctx._menuItemDisabled;
    $$mods.disabled = true;
    applyc(__$ctx, __$ref);
    return;
}

function __$b35(__$ctx, __$ref) {
    var __$r__$11;
    var __$l0__$12 = __$ctx._menuItemDisabled;
    __$ctx._menuItemDisabled = true;
    __$r__$11 = applyc(__$ctx, __$ref);
    __$ctx._menuItemDisabled = __$l0__$12;
    return;
}

function __$b36(__$ctx, __$ref) {
    $$mods.theme = __$ctx._menuMods.theme;
    $$mods.disabled = $$mods.disabled || __$ctx._menuMods.disabled;
    var __$r__$23;
    var __$l0__$24 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$23 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$24;
    return;
}

function __$b37(__$ctx, __$ref) {
    var __$r__$27;
    var __$l0__$28 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$30;
    var __$l1__$31 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$30 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$31;
    __$r__$27 = __$r__$30;
    __$ctx._menuMods = __$l0__$28;
    delete __$ctx._menuTheme;
    return;
}

function __$b38(__$ctx, __$ref) {
    var url__$35 = __$ctx.ctx.url;
    var __$r__$37;
    var __$l0__$38 = $$mode;
    $$mode = "";
    var __$l1__$39 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$35 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$41;
    var __$l2__$42 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$41 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$42;
    __$r__$37 = __$r__$41;
    $$mode = __$l0__$38;
    __$ctx.ctx = __$l1__$39;
    return;
}

function __$b39(__$ctx, __$ref) {
    var ie__$43 = __$ctx.ctx.ie, hideRule__$44 = !ie__$43 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$43 === "!IE" ? [ ie__$43, "<!-->", "<!--" ] : [ ie__$43, "", "" ];
    var __$r__$46;
    var __$l0__$47 = $$mode;
    $$mode = "";
    var __$l3__$48 = __$ctx.ctx;
    var __$l1__$49 = __$l3__$48._ieCommented;
    __$l3__$48._ieCommented = true;
    var __$l2__$50 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$44[0] + "]>" + hideRule__$44[1], __$ctx.ctx, hideRule__$44[2] + "<![endif]-->" ];
    __$r__$46 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$47;
    __$l3__$48._ieCommented = __$l1__$49;
    __$ctx.ctx = __$l2__$50;
    return;
}

function __$b40(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$57 = __$ctx.ctx;
    var __$r__$59;
    var __$l0__$60 = $$mode;
    $$mode = "";
    var __$l1__$61 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$57.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$57.title
            }, {
                block: "ua"
            }, ctx__$57.head, ctx__$57.styles, ctx__$57.favicon ? {
                elem: "favicon",
                url: ctx__$57.favicon
            } : "" ]
        }, ctx__$57 ]
    } ];
    var __$r__$63;
    var __$l2__$64 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$63 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$64;
    __$r__$59 = __$r__$63;
    $$mode = __$l0__$60;
    __$ctx.ctx = __$l1__$61;
    __$ctx._defPageApplied = false;
    return;
}

function __$b41(__$ctx, __$ref) {
    var BEM_INTERNAL__$65 = __$ctx.BEM.INTERNAL, ctx__$66 = __$ctx.ctx, isBEM__$67, tag__$68, res__$69;
    var __$r__$71;
    var __$l0__$72 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$73 = $$block;
    var __$r__$75;
    var __$l1__$76 = $$mode;
    $$mode = "tag";
    __$r__$75 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$76;
    tag__$68 = __$r__$75;
    typeof tag__$68 !== "undefined" || (tag__$68 = ctx__$66.tag);
    typeof tag__$68 !== "undefined" || (tag__$68 = "div");
    if (tag__$68) {
        var jsParams__$77, js__$78;
        if (vBlock__$73 && ctx__$66.js !== false) {
            var __$r__$79;
            var __$l2__$80 = $$mode;
            $$mode = "js";
            __$r__$79 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$80;
            js__$78 = __$r__$79;
            js__$78 = js__$78 ? __$ctx.extend(ctx__$66.js, js__$78 === true ? {} : js__$78) : ctx__$66.js === true ? {} : ctx__$66.js;
            js__$78 && ((jsParams__$77 = {})[BEM_INTERNAL__$65.buildClass(vBlock__$73, ctx__$66.elem)] = js__$78);
        }
        __$ctx._str += "<" + tag__$68;
        var __$r__$81;
        var __$l3__$82 = $$mode;
        $$mode = "bem";
        __$r__$81 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$82;
        isBEM__$67 = __$r__$81;
        typeof isBEM__$67 !== "undefined" || (isBEM__$67 = typeof ctx__$66.bem !== "undefined" ? ctx__$66.bem : ctx__$66.block || ctx__$66.elem);
        var __$r__$84;
        var __$l4__$85 = $$mode;
        $$mode = "cls";
        __$r__$84 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$85;
        var cls__$83 = __$r__$84;
        cls__$83 || (cls__$83 = ctx__$66.cls);
        var addJSInitClass__$86 = ctx__$66.block && jsParams__$77;
        if (isBEM__$67 || cls__$83) {
            __$ctx._str += ' class="';
            if (isBEM__$67) {
                __$ctx._str += BEM_INTERNAL__$65.buildClasses(vBlock__$73, ctx__$66.elem, ctx__$66.elemMods || ctx__$66.mods);
                var __$r__$88;
                var __$l5__$89 = $$mode;
                $$mode = "mix";
                __$r__$88 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$89;
                var mix__$87 = __$r__$88;
                ctx__$66.mix && (mix__$87 = mix__$87 ? [].concat(mix__$87, ctx__$66.mix) : ctx__$66.mix);
                if (mix__$87) {
                    var visited__$90 = {}, visitedKey__$91 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$90[visitedKey__$91(vBlock__$73, $$elem)] = true;
                    __$ctx.isArray(mix__$87) || (mix__$87 = [ mix__$87 ]);
                    for (var i__$92 = 0; i__$92 < mix__$87.length; i__$92++) {
                        var mixItem__$93 = mix__$87[i__$92], hasItem__$94 = mixItem__$93.block || mixItem__$93.elem, mixBlock__$95 = mixItem__$93.block || mixItem__$93._block || $$block, mixElem__$96 = mixItem__$93.elem || mixItem__$93._elem || $$elem;
                        hasItem__$94 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$65[hasItem__$94 ? "buildClasses" : "buildModsClasses"](mixBlock__$95, mixItem__$93.elem || mixItem__$93._elem || (mixItem__$93.block ? undefined : $$elem), mixItem__$93.elemMods || mixItem__$93.mods);
                        if (mixItem__$93.js) {
                            (jsParams__$77 || (jsParams__$77 = {}))[BEM_INTERNAL__$65.buildClass(mixBlock__$95, mixItem__$93.elem)] = mixItem__$93.js === true ? {} : mixItem__$93.js;
                            addJSInitClass__$86 || (addJSInitClass__$86 = mixBlock__$95 && !mixItem__$93.elem);
                        }
                        if (hasItem__$94 && !visited__$90[visitedKey__$91(mixBlock__$95, mixElem__$96)]) {
                            visited__$90[visitedKey__$91(mixBlock__$95, mixElem__$96)] = true;
                            var __$r__$98;
                            var __$l6__$99 = $$mode;
                            $$mode = "mix";
                            var __$l7__$100 = $$block;
                            $$block = mixBlock__$95;
                            var __$l8__$101 = $$elem;
                            $$elem = mixElem__$96;
                            __$r__$98 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$99;
                            $$block = __$l7__$100;
                            $$elem = __$l8__$101;
                            var nestedMix__$97 = __$r__$98;
                            if (nestedMix__$97) {
                                for (var j__$102 = 0; j__$102 < nestedMix__$97.length; j__$102++) {
                                    var nestedItem__$103 = nestedMix__$97[j__$102];
                                    if (!nestedItem__$103.block && !nestedItem__$103.elem || !visited__$90[visitedKey__$91(nestedItem__$103.block, nestedItem__$103.elem)]) {
                                        nestedItem__$103._block = mixBlock__$95;
                                        nestedItem__$103._elem = mixElem__$96;
                                        mix__$87.splice(i__$92 + 1, 0, nestedItem__$103);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$83 && (__$ctx._str += isBEM__$67 ? " " + cls__$83 : cls__$83);
            __$ctx._str += addJSInitClass__$86 ? ' i-bem"' : '"';
        }
        if (isBEM__$67 && jsParams__$77) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$77)) + '"';
        }
        var __$r__$105;
        var __$l9__$106 = $$mode;
        $$mode = "attrs";
        __$r__$105 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$106;
        var attrs__$104 = __$r__$105;
        attrs__$104 = __$ctx.extend(attrs__$104, ctx__$66.attrs);
        if (attrs__$104) {
            var name__$107, attr__$108;
            for (name__$107 in attrs__$104) {
                attr__$108 = attrs__$104[name__$107];
                if (typeof attr__$108 === "undefined") continue;
                __$ctx._str += " " + name__$107 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$108) ? attr__$108 : __$ctx.reapply(attr__$108)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$68)) {
        __$ctx._str += "/>";
    } else {
        tag__$68 && (__$ctx._str += ">");
        var __$r__$110;
        var __$l10__$111 = $$mode;
        $$mode = "content";
        __$r__$110 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$111;
        var content__$109 = __$r__$110;
        if (content__$109 || content__$109 === 0) {
            isBEM__$67 = vBlock__$73 || $$elem;
            var __$r__$112;
            var __$l11__$113 = $$mode;
            $$mode = "";
            var __$l12__$114 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$115 = __$ctx.position;
            __$ctx.position = isBEM__$67 ? 1 : __$ctx.position;
            var __$l14__$116 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$67 ? 1 : __$ctx._listLength;
            var __$l15__$117 = __$ctx.ctx;
            __$ctx.ctx = content__$109;
            __$r__$112 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$113;
            __$ctx._notNewList = __$l12__$114;
            __$ctx.position = __$l13__$115;
            __$ctx._listLength = __$l14__$116;
            __$ctx.ctx = __$l15__$117;
        }
        tag__$68 && (__$ctx._str += "</" + tag__$68 + ">");
    }
    res__$69 = __$ctx._str;
    __$r__$71 = undefined;
    __$ctx._str = __$l0__$72;
    __$ctx._buf.push(res__$69);
    return;
}

function __$b57(__$ctx, __$ref) {
    var __$r__$119;
    var __$l0__$120 = $$mode;
    $$mode = "";
    var __$l1__$121 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$123;
    var __$l2__$124 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
    __$r__$123 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$124;
    __$r__$119 = __$r__$123;
    $$mode = __$l0__$120;
    __$ctx.ctx = __$l1__$121;
    return;
}

function __$b58(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$125 = __$ctx.ctx;
    if (ctx__$125 && ctx__$125 !== true || ctx__$125 === 0) {
        __$ctx._str += ctx__$125 + "";
    }
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b60(__$ctx, __$ref) {
    var ctx__$126 = __$ctx.ctx, len__$127 = ctx__$126.length, i__$128 = 0, prevPos__$129 = __$ctx.position, prevNotNewList__$130 = __$ctx._notNewList;
    if (prevNotNewList__$130) {
        __$ctx._listLength += len__$127 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$127;
    }
    __$ctx._notNewList = true;
    while (i__$128 < len__$127) (function __$lb__$131() {
        var __$r__$132;
        var __$l0__$133 = __$ctx.ctx;
        __$ctx.ctx = ctx__$126[i__$128++];
        __$r__$132 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$133;
        return __$r__$132;
    })();
    prevNotNewList__$130 || (__$ctx.position = prevPos__$129);
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$134 = __$ctx.ctx.block, vElem__$135 = __$ctx.ctx.elem, block__$136 = __$ctx._currBlock || $$block;
    var __$r__$138;
    var __$l0__$139 = $$mode;
    $$mode = "default";
    var __$l1__$140 = $$block;
    $$block = vBlock__$134 || (vElem__$135 ? block__$136 : undefined);
    var __$l2__$141 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$134 || vElem__$135 ? undefined : block__$136;
    var __$l3__$142 = $$elem;
    $$elem = vElem__$135;
    var __$l4__$143 = $$mods;
    $$mods = vBlock__$134 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$144 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$138 = undefined;
    $$mode = __$l0__$139;
    $$block = __$l1__$140;
    __$ctx._currBlock = __$l2__$141;
    $$elem = __$l3__$142;
    $$mods = __$l4__$143;
    $$elemMods = __$l5__$144;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem && __$ctx.ctx.url) {
            return {
                style: "background-image:url(" + __$ctx.ctx.url + ")"
            };
        }
    } else if (__$t === "link") {
        if (!$$elem) {
            var __$r = __$b2(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                role: "menuitem"
            };
        }
    } else if (__$t === "menu") {
        var __$t = $$elem;
        if (__$t === "group-title") {
            return {
                role: "presentation"
            };
        } else if (__$t === "group") {
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$ctx.extend(function __$lb__$16() {
                    var __$r__$17;
                    var __$l0__$18 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$17 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$18;
                    return __$r__$17;
                }(), {
                    "aria-label": __$ctx.ctx.title
                });
                if (__$r !== __$ref) return __$r;
            }
            return {
                role: "group"
            };
        }
        if (!$$elem) {
            var __$r = __$b7(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
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
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b33(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if (__$ctx._menuItemDisabled) {
                var __$r = __$b34(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "menu-item") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods && $$mods["disabled"] === true && !__$ctx._menuItemDisabled && $$mods["type"] === "link") {
                var __$r = __$b35(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if (__$ctx._menuMods && (__$ctx.__$a0 & 32) === 0) {
                var __$r = __$b36(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b37(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 256) === 0) {
                        var __$r = __$b38(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b39(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 2048) === 0) {
            var __$r = __$b40(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b41(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
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