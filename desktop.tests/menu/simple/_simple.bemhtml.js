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
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "link") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 8) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$17() {
                        var __$r__$18;
                        var __$l0__$19 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 8;
                        __$r__$18 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$19;
                        return __$r__$18;
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
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 128) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$36() {
                        var __$r__$37;
                        var __$l0__$38 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 128;
                        __$r__$37 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$38;
                        return __$r__$37;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b38(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 32) === 0) {
                return [ {
                    elem: "group-title",
                    content: __$ctx.ctx.title
                }, function __$lb__$30() {
                    var __$r__$31;
                    var __$l0__$32 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$31 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$32;
                    return __$r__$31;
                }() ];
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 1024) === 0) {
                    return [ function __$lb__$49() {
                        var __$r__$50;
                        var __$l0__$51 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1024;
                        __$r__$50 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$51;
                        return __$r__$50;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 4096) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$68() {
                    var __$r__$69;
                    var __$l0__$70 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                    __$r__$69 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$70;
                    return __$r__$69;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 8192) === 0) {
                return [ function __$lb__$71() {
                    var __$r__$72;
                    var __$l0__$73 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
                    __$r__$72 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$73;
                    return __$r__$72;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "link") {
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
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
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
            } else if (__$t === "link") {
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 32768) === 0) {
            var __$r = __$b68(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b69(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b70(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b71(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b72(__$ctx, __$ref);
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
        ctx["_button"] = undefined;
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

function __$b3(__$ctx, __$ref) {
    var ctx__$5 = __$ctx.ctx, attrs__$6 = {
        type: $$mods.type || "button",
        name: ctx__$5.name,
        value: ctx__$5.val
    };
    $$mods.disabled && (attrs__$6.disabled = "disabled");
    return __$ctx.extend(function __$lb__$7() {
        var __$r__$8;
        var __$l0__$9 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$8 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$9;
        return __$r__$8;
    }(), attrs__$6);
}

function __$b4(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$10.tabIndex,
        id: ctx__$10.id,
        title: ctx__$10.title
    };
}

function __$b5(__$ctx, __$ref) {
    var ctx__$20 = __$ctx.ctx, attrs__$21 = {}, tabIndex__$22;
    if (!$$mods.disabled) {
        if (ctx__$20.url) {
            attrs__$21.href = ctx__$20.url;
            tabIndex__$22 = ctx__$20.tabIndex;
        } else {
            tabIndex__$22 = ctx__$20.tabIndex || 0;
        }
    }
    typeof tabIndex__$22 === "undefined" || (attrs__$21.tabindex = tabIndex__$22);
    ctx__$20.title && (attrs__$21.title = ctx__$20.title);
    ctx__$20.target && (attrs__$21.target = ctx__$20.target);
    return attrs__$21;
}

function __$b10(__$ctx, __$ref) {
    var attrs__$42 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$42.tabindex = 0);
    return attrs__$42;
}

function __$b38(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx, content__$4 = [ ctx__$3.icon ];
    "text" in ctx__$3 && content__$4.push({
        elem: "text",
        content: ctx__$3.text
    });
    return content__$4;
}

function __$b49(__$ctx, __$ref) {
    var __$r__$12;
    var __$l0__$13 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$15;
    var __$l1__$16 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$15 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$16;
    __$r__$12 = __$r__$15;
    __$ctx._button = __$l0__$13;
    return;
}

function __$b50(__$ctx, __$ref) {
    var ctx__$23 = __$ctx.ctx;
    typeof ctx__$23.url === "object" && (ctx__$23.url = __$ctx.reapply(ctx__$23.url));
    var __$r__$25;
    var __$l0__$26 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$25 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$26;
    return;
}

function __$b51(__$ctx, __$ref) {
    delete __$ctx._menuItemDisabled;
    $$mods.disabled = true;
    applyc(__$ctx, __$ref);
    return;
}

function __$b52(__$ctx, __$ref) {
    var __$r__$28;
    var __$l0__$29 = __$ctx._menuItemDisabled;
    __$ctx._menuItemDisabled = true;
    __$r__$28 = applyc(__$ctx, __$ref);
    __$ctx._menuItemDisabled = __$l0__$29;
    return;
}

function __$b53(__$ctx, __$ref) {
    $$mods.theme = __$ctx._menuMods.theme;
    $$mods.disabled = $$mods.disabled || __$ctx._menuMods.disabled;
    var __$r__$40;
    var __$l0__$41 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$40 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$41;
    return;
}

function __$b54(__$ctx, __$ref) {
    var __$r__$44;
    var __$l0__$45 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$47;
    var __$l1__$48 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$47 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$48;
    __$r__$44 = __$r__$47;
    __$ctx._menuMods = __$l0__$45;
    delete __$ctx._menuTheme;
    return;
}

function __$b55(__$ctx, __$ref) {
    var url__$52 = __$ctx.ctx.url;
    var __$r__$54;
    var __$l0__$55 = $$mode;
    $$mode = "";
    var __$l1__$56 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$52 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$58;
    var __$l2__$59 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$58 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$59;
    __$r__$54 = __$r__$58;
    $$mode = __$l0__$55;
    __$ctx.ctx = __$l1__$56;
    return;
}

function __$b56(__$ctx, __$ref) {
    var ie__$60 = __$ctx.ctx.ie, hideRule__$61 = !ie__$60 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$60 === "!IE" ? [ ie__$60, "<!-->", "<!--" ] : [ ie__$60, "", "" ];
    var __$r__$63;
    var __$l0__$64 = $$mode;
    $$mode = "";
    var __$l3__$65 = __$ctx.ctx;
    var __$l1__$66 = __$l3__$65._ieCommented;
    __$l3__$65._ieCommented = true;
    var __$l2__$67 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$61[0] + "]>" + hideRule__$61[1], __$ctx.ctx, hideRule__$61[2] + "<![endif]-->" ];
    __$r__$63 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$64;
    __$l3__$65._ieCommented = __$l1__$66;
    __$ctx.ctx = __$l2__$67;
    return;
}

function __$b57(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$74 = __$ctx.ctx;
    var __$r__$76;
    var __$l0__$77 = $$mode;
    $$mode = "";
    var __$l1__$78 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$74.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$74.title
            }, {
                block: "ua"
            }, ctx__$74.head, ctx__$74.styles, ctx__$74.favicon ? {
                elem: "favicon",
                url: ctx__$74.favicon
            } : "" ]
        }, ctx__$74 ]
    } ];
    var __$r__$80;
    var __$l2__$81 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$80 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$81;
    __$r__$76 = __$r__$80;
    $$mode = __$l0__$77;
    __$ctx.ctx = __$l1__$78;
    __$ctx._defPageApplied = false;
    return;
}

function __$b58(__$ctx, __$ref) {
    var BEM_INTERNAL__$82 = __$ctx.BEM.INTERNAL, ctx__$83 = __$ctx.ctx, isBEM__$84, tag__$85, res__$86;
    var __$r__$88;
    var __$l0__$89 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$90 = $$block;
    var __$r__$92;
    var __$l1__$93 = $$mode;
    $$mode = "tag";
    __$r__$92 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$93;
    tag__$85 = __$r__$92;
    typeof tag__$85 !== "undefined" || (tag__$85 = ctx__$83.tag);
    typeof tag__$85 !== "undefined" || (tag__$85 = "div");
    if (tag__$85) {
        var jsParams__$94, js__$95;
        if (vBlock__$90 && ctx__$83.js !== false) {
            var __$r__$96;
            var __$l2__$97 = $$mode;
            $$mode = "js";
            __$r__$96 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$97;
            js__$95 = __$r__$96;
            js__$95 = js__$95 ? __$ctx.extend(ctx__$83.js, js__$95 === true ? {} : js__$95) : ctx__$83.js === true ? {} : ctx__$83.js;
            js__$95 && ((jsParams__$94 = {})[BEM_INTERNAL__$82.buildClass(vBlock__$90, ctx__$83.elem)] = js__$95);
        }
        __$ctx._str += "<" + tag__$85;
        var __$r__$98;
        var __$l3__$99 = $$mode;
        $$mode = "bem";
        __$r__$98 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$99;
        isBEM__$84 = __$r__$98;
        typeof isBEM__$84 !== "undefined" || (isBEM__$84 = typeof ctx__$83.bem !== "undefined" ? ctx__$83.bem : ctx__$83.block || ctx__$83.elem);
        var __$r__$101;
        var __$l4__$102 = $$mode;
        $$mode = "cls";
        __$r__$101 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$102;
        var cls__$100 = __$r__$101;
        cls__$100 || (cls__$100 = ctx__$83.cls);
        var addJSInitClass__$103 = ctx__$83.block && jsParams__$94;
        if (isBEM__$84 || cls__$100) {
            __$ctx._str += ' class="';
            if (isBEM__$84) {
                __$ctx._str += BEM_INTERNAL__$82.buildClasses(vBlock__$90, ctx__$83.elem, ctx__$83.elemMods || ctx__$83.mods);
                var __$r__$105;
                var __$l5__$106 = $$mode;
                $$mode = "mix";
                __$r__$105 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$106;
                var mix__$104 = __$r__$105;
                ctx__$83.mix && (mix__$104 = mix__$104 ? [].concat(mix__$104, ctx__$83.mix) : ctx__$83.mix);
                if (mix__$104) {
                    var visited__$107 = {}, visitedKey__$108 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$107[visitedKey__$108(vBlock__$90, $$elem)] = true;
                    __$ctx.isArray(mix__$104) || (mix__$104 = [ mix__$104 ]);
                    for (var i__$109 = 0; i__$109 < mix__$104.length; i__$109++) {
                        var mixItem__$110 = mix__$104[i__$109], hasItem__$111 = mixItem__$110.block || mixItem__$110.elem, mixBlock__$112 = mixItem__$110.block || mixItem__$110._block || $$block, mixElem__$113 = mixItem__$110.elem || mixItem__$110._elem || $$elem;
                        hasItem__$111 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$82[hasItem__$111 ? "buildClasses" : "buildModsClasses"](mixBlock__$112, mixItem__$110.elem || mixItem__$110._elem || (mixItem__$110.block ? undefined : $$elem), mixItem__$110.elemMods || mixItem__$110.mods);
                        if (mixItem__$110.js) {
                            (jsParams__$94 || (jsParams__$94 = {}))[BEM_INTERNAL__$82.buildClass(mixBlock__$112, mixItem__$110.elem)] = mixItem__$110.js === true ? {} : mixItem__$110.js;
                            addJSInitClass__$103 || (addJSInitClass__$103 = mixBlock__$112 && !mixItem__$110.elem);
                        }
                        if (hasItem__$111 && !visited__$107[visitedKey__$108(mixBlock__$112, mixElem__$113)]) {
                            visited__$107[visitedKey__$108(mixBlock__$112, mixElem__$113)] = true;
                            var __$r__$115;
                            var __$l6__$116 = $$mode;
                            $$mode = "mix";
                            var __$l7__$117 = $$block;
                            $$block = mixBlock__$112;
                            var __$l8__$118 = $$elem;
                            $$elem = mixElem__$113;
                            __$r__$115 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$116;
                            $$block = __$l7__$117;
                            $$elem = __$l8__$118;
                            var nestedMix__$114 = __$r__$115;
                            if (nestedMix__$114) {
                                for (var j__$119 = 0; j__$119 < nestedMix__$114.length; j__$119++) {
                                    var nestedItem__$120 = nestedMix__$114[j__$119];
                                    if (!nestedItem__$120.block && !nestedItem__$120.elem || !visited__$107[visitedKey__$108(nestedItem__$120.block, nestedItem__$120.elem)]) {
                                        nestedItem__$120._block = mixBlock__$112;
                                        nestedItem__$120._elem = mixElem__$113;
                                        mix__$104.splice(i__$109 + 1, 0, nestedItem__$120);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$100 && (__$ctx._str += isBEM__$84 ? " " + cls__$100 : cls__$100);
            __$ctx._str += addJSInitClass__$103 ? ' i-bem"' : '"';
        }
        if (isBEM__$84 && jsParams__$94) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$94)) + '"';
        }
        var __$r__$122;
        var __$l9__$123 = $$mode;
        $$mode = "attrs";
        __$r__$122 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$123;
        var attrs__$121 = __$r__$122;
        attrs__$121 = __$ctx.extend(attrs__$121, ctx__$83.attrs);
        if (attrs__$121) {
            var name__$124, attr__$125;
            for (name__$124 in attrs__$121) {
                attr__$125 = attrs__$121[name__$124];
                if (typeof attr__$125 === "undefined") continue;
                __$ctx._str += " " + name__$124 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$125) ? attr__$125 : __$ctx.reapply(attr__$125)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$85)) {
        __$ctx._str += "/>";
    } else {
        tag__$85 && (__$ctx._str += ">");
        var __$r__$127;
        var __$l10__$128 = $$mode;
        $$mode = "content";
        __$r__$127 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$128;
        var content__$126 = __$r__$127;
        if (content__$126 || content__$126 === 0) {
            isBEM__$84 = vBlock__$90 || $$elem;
            var __$r__$129;
            var __$l11__$130 = $$mode;
            $$mode = "";
            var __$l12__$131 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$132 = __$ctx.position;
            __$ctx.position = isBEM__$84 ? 1 : __$ctx.position;
            var __$l14__$133 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$84 ? 1 : __$ctx._listLength;
            var __$l15__$134 = __$ctx.ctx;
            __$ctx.ctx = content__$126;
            __$r__$129 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$130;
            __$ctx._notNewList = __$l12__$131;
            __$ctx.position = __$l13__$132;
            __$ctx._listLength = __$l14__$133;
            __$ctx.ctx = __$l15__$134;
        }
        tag__$85 && (__$ctx._str += "</" + tag__$85 + ">");
    }
    res__$86 = __$ctx._str;
    __$r__$88 = undefined;
    __$ctx._str = __$l0__$89;
    __$ctx._buf.push(res__$86);
    return;
}

function __$b68(__$ctx, __$ref) {
    var __$r__$136;
    var __$l0__$137 = $$mode;
    $$mode = "";
    var __$l1__$138 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$140;
    var __$l2__$141 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$140 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$141;
    __$r__$136 = __$r__$140;
    $$mode = __$l0__$137;
    __$ctx.ctx = __$l1__$138;
    return;
}

function __$b69(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$142 = __$ctx.ctx;
    if (ctx__$142 && ctx__$142 !== true || ctx__$142 === 0) {
        __$ctx._str += ctx__$142 + "";
    }
    return;
}

function __$b70(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b71(__$ctx, __$ref) {
    var ctx__$143 = __$ctx.ctx, len__$144 = ctx__$143.length, i__$145 = 0, prevPos__$146 = __$ctx.position, prevNotNewList__$147 = __$ctx._notNewList;
    if (prevNotNewList__$147) {
        __$ctx._listLength += len__$144 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$144;
    }
    __$ctx._notNewList = true;
    while (i__$145 < len__$144) (function __$lb__$148() {
        var __$r__$149;
        var __$l0__$150 = __$ctx.ctx;
        __$ctx.ctx = ctx__$143[i__$145++];
        __$r__$149 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$150;
        return __$r__$149;
    })();
    prevNotNewList__$147 || (__$ctx.position = prevPos__$146);
    return;
}

function __$b72(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$151 = __$ctx.ctx.block, vElem__$152 = __$ctx.ctx.elem, block__$153 = __$ctx._currBlock || $$block;
    var __$r__$155;
    var __$l0__$156 = $$mode;
    $$mode = "default";
    var __$l1__$157 = $$block;
    $$block = vBlock__$151 || (vElem__$152 ? block__$153 : undefined);
    var __$l2__$158 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$151 || vElem__$152 ? undefined : block__$153;
    var __$l3__$159 = $$elem;
    $$elem = vElem__$152;
    var __$l4__$160 = $$mods;
    $$mods = vBlock__$151 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$161 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$155 = undefined;
    $$mode = __$l0__$156;
    $$block = __$l1__$157;
    __$ctx._currBlock = __$l2__$158;
    $$elem = __$l3__$159;
    $$mods = __$l4__$160;
    $$elemMods = __$l5__$161;
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
    } else if (__$t === "button") {
        if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
            return {
                style: "max-width:" + __$ctx._button.textMaxWidth + "px"
            };
        }
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b3(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b4(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "link") {
        if (!$$elem) {
            var __$r = __$b5(__$ctx, __$ref);
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
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 64) === 0) {
                var __$r = __$ctx.extend(function __$lb__$33() {
                    var __$r__$34;
                    var __$l0__$35 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 64;
                    __$r__$34 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$35;
                    return __$r__$34;
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
            var __$r = __$b10(__$ctx, __$ref);
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
    if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
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
        if (__$t === "js") {
            return "script";
        } else if (__$t === "link") {
            return "link";
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
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
            var __$r = __$b49(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "link") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b50(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if (__$ctx._menuItemDisabled) {
                var __$r = __$b51(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "menu-item") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods && $$mods["disabled"] === true && !__$ctx._menuItemDisabled && $$mods["type"] === "link") {
                var __$r = __$b52(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            if (__$ctx._menuMods && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b53(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 2048) === 0) {
                        var __$r = __$b55(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b56(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b58(__$ctx, __$ref);
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