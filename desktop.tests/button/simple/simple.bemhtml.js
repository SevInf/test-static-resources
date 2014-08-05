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
                var __$t = $$mods;
                if (__$t) {
                    if ($$mods && $$mods["type"] === "link" && $$mods["disabled"] === true && (__$ctx.__$a0 & 1) === 0) {
                        var __$r = __$ctx._.extend(function __$lb__$1() {
                            var __$r__$2;
                            var __$l0__$3 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 1;
                            __$r__$2 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$3;
                            return __$r__$2;
                        }(), {
                            url: __$ctx.ctx.url
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                    if ($$mods["focused"] === true && (__$ctx.__$a0 & 4) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$9() {
                            var __$r__$10;
                            var __$l0__$11 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 4;
                            __$r__$10 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$11;
                            return __$r__$10;
                        }(), {
                            live: false
                        });
                        if (__$r !== __$ref) return __$r;
                    }
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
                var __$r = __$b31(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 32) === 0) {
                    return [ function __$lb__$26() {
                        var __$r__$27;
                        var __$l0__$28 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 32;
                        __$r__$27 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$28;
                        return __$r__$27;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 128) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$45() {
                    var __$r__$46;
                    var __$l0__$47 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$46 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$47;
                    return __$r__$46;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
                return [ function __$lb__$48() {
                    var __$r__$49;
                    var __$l0__$50 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$49 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$50;
                    return __$r__$49;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "mix") {
        if ($$block === "button" && !$$elem) {
            return {
                elem: "control"
            };
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$b39(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 64) === 0) {
                            var __$r = __$b40(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b41(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$b42(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b43(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b53(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b55(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b56(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b57(__$ctx, __$ref);
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

function __$b3(__$ctx, __$ref) {
    var ctx__$4 = __$ctx.ctx, attrs__$5 = {};
    ctx__$4.target && (attrs__$5.target = ctx__$4.target);
    $$mods.disabled ? attrs__$5["aria-disabled"] = true : attrs__$5.href = ctx__$4.url;
    return __$ctx.extend(function __$lb__$6() {
        var __$r__$7;
        var __$l0__$8 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$7 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$8;
        return __$r__$7;
    }(), attrs__$5);
}

function __$b5(__$ctx, __$ref) {
    var ctx__$14 = __$ctx.ctx, attrs__$15 = {
        type: $$mods.type || "button",
        name: ctx__$14.name,
        value: ctx__$14.val
    };
    $$mods.disabled && (attrs__$15.disabled = "disabled");
    return __$ctx.extend(function __$lb__$16() {
        var __$r__$17;
        var __$l0__$18 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 8;
        __$r__$17 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$18;
        return __$r__$17;
    }(), attrs__$15);
}

function __$b6(__$ctx, __$ref) {
    var ctx__$19 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$19.tabIndex,
        id: ctx__$19.id,
        title: ctx__$19.title
    };
}

function __$b31(__$ctx, __$ref) {
    var ctx__$12 = __$ctx.ctx, content__$13 = [ ctx__$12.icon ];
    "text" in ctx__$12 && content__$13.push({
        elem: "text",
        content: ctx__$12.text
    });
    return content__$13;
}

function __$b39(__$ctx, __$ref) {
    var __$r__$21;
    var __$l0__$22 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$24;
    var __$l1__$25 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$24 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$25;
    __$r__$21 = __$r__$24;
    __$ctx._button = __$l0__$22;
    return;
}

function __$b40(__$ctx, __$ref) {
    var url__$29 = __$ctx.ctx.url;
    var __$r__$31;
    var __$l0__$32 = $$mode;
    $$mode = "";
    var __$l1__$33 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$29 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$35;
    var __$l2__$36 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$35 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$36;
    __$r__$31 = __$r__$35;
    $$mode = __$l0__$32;
    __$ctx.ctx = __$l1__$33;
    return;
}

function __$b41(__$ctx, __$ref) {
    var ie__$37 = __$ctx.ctx.ie, hideRule__$38 = !ie__$37 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$37 === "!IE" ? [ ie__$37, "<!-->", "<!--" ] : [ ie__$37, "", "" ];
    var __$r__$40;
    var __$l0__$41 = $$mode;
    $$mode = "";
    var __$l3__$42 = __$ctx.ctx;
    var __$l1__$43 = __$l3__$42._ieCommented;
    __$l3__$42._ieCommented = true;
    var __$l2__$44 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$38[0] + "]>" + hideRule__$38[1], __$ctx.ctx, hideRule__$38[2] + "<![endif]-->" ];
    __$r__$40 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$41;
    __$l3__$42._ieCommented = __$l1__$43;
    __$ctx.ctx = __$l2__$44;
    return;
}

function __$b42(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$51 = __$ctx.ctx;
    var __$r__$53;
    var __$l0__$54 = $$mode;
    $$mode = "";
    var __$l1__$55 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$51.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$51.title
            }, {
                block: "ua"
            }, ctx__$51.head, ctx__$51.styles, ctx__$51.favicon ? {
                elem: "favicon",
                url: ctx__$51.favicon
            } : "" ]
        }, ctx__$51 ]
    } ];
    var __$r__$57;
    var __$l2__$58 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$57 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$58;
    __$r__$53 = __$r__$57;
    $$mode = __$l0__$54;
    __$ctx.ctx = __$l1__$55;
    __$ctx._defPageApplied = false;
    return;
}

function __$b43(__$ctx, __$ref) {
    var BEM_INTERNAL__$59 = __$ctx.BEM.INTERNAL, ctx__$60 = __$ctx.ctx, isBEM__$61, tag__$62, res__$63;
    var __$r__$65;
    var __$l0__$66 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$67 = $$block;
    var __$r__$69;
    var __$l1__$70 = $$mode;
    $$mode = "tag";
    __$r__$69 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$70;
    tag__$62 = __$r__$69;
    typeof tag__$62 !== "undefined" || (tag__$62 = ctx__$60.tag);
    typeof tag__$62 !== "undefined" || (tag__$62 = "div");
    if (tag__$62) {
        var jsParams__$71, js__$72;
        if (vBlock__$67 && ctx__$60.js !== false) {
            var __$r__$73;
            var __$l2__$74 = $$mode;
            $$mode = "js";
            __$r__$73 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$74;
            js__$72 = __$r__$73;
            js__$72 = js__$72 ? __$ctx.extend(ctx__$60.js, js__$72 === true ? {} : js__$72) : ctx__$60.js === true ? {} : ctx__$60.js;
            js__$72 && ((jsParams__$71 = {})[BEM_INTERNAL__$59.buildClass(vBlock__$67, ctx__$60.elem)] = js__$72);
        }
        __$ctx._str += "<" + tag__$62;
        var __$r__$75;
        var __$l3__$76 = $$mode;
        $$mode = "bem";
        __$r__$75 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$76;
        isBEM__$61 = __$r__$75;
        typeof isBEM__$61 !== "undefined" || (isBEM__$61 = typeof ctx__$60.bem !== "undefined" ? ctx__$60.bem : ctx__$60.block || ctx__$60.elem);
        var __$r__$78;
        var __$l4__$79 = $$mode;
        $$mode = "cls";
        __$r__$78 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$79;
        var cls__$77 = __$r__$78;
        cls__$77 || (cls__$77 = ctx__$60.cls);
        var addJSInitClass__$80 = ctx__$60.block && jsParams__$71;
        if (isBEM__$61 || cls__$77) {
            __$ctx._str += ' class="';
            if (isBEM__$61) {
                __$ctx._str += BEM_INTERNAL__$59.buildClasses(vBlock__$67, ctx__$60.elem, ctx__$60.elemMods || ctx__$60.mods);
                var __$r__$82;
                var __$l5__$83 = $$mode;
                $$mode = "mix";
                __$r__$82 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$83;
                var mix__$81 = __$r__$82;
                ctx__$60.mix && (mix__$81 = mix__$81 ? [].concat(mix__$81, ctx__$60.mix) : ctx__$60.mix);
                if (mix__$81) {
                    var visited__$84 = {}, visitedKey__$85 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$84[visitedKey__$85(vBlock__$67, $$elem)] = true;
                    __$ctx.isArray(mix__$81) || (mix__$81 = [ mix__$81 ]);
                    for (var i__$86 = 0; i__$86 < mix__$81.length; i__$86++) {
                        var mixItem__$87 = mix__$81[i__$86], hasItem__$88 = mixItem__$87.block || mixItem__$87.elem, mixBlock__$89 = mixItem__$87.block || mixItem__$87._block || $$block, mixElem__$90 = mixItem__$87.elem || mixItem__$87._elem || $$elem;
                        hasItem__$88 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$59[hasItem__$88 ? "buildClasses" : "buildModsClasses"](mixBlock__$89, mixItem__$87.elem || mixItem__$87._elem || (mixItem__$87.block ? undefined : $$elem), mixItem__$87.elemMods || mixItem__$87.mods);
                        if (mixItem__$87.js) {
                            (jsParams__$71 || (jsParams__$71 = {}))[BEM_INTERNAL__$59.buildClass(mixBlock__$89, mixItem__$87.elem)] = mixItem__$87.js === true ? {} : mixItem__$87.js;
                            addJSInitClass__$80 || (addJSInitClass__$80 = mixBlock__$89 && !mixItem__$87.elem);
                        }
                        if (hasItem__$88 && !visited__$84[visitedKey__$85(mixBlock__$89, mixElem__$90)]) {
                            visited__$84[visitedKey__$85(mixBlock__$89, mixElem__$90)] = true;
                            var __$r__$92;
                            var __$l6__$93 = $$mode;
                            $$mode = "mix";
                            var __$l7__$94 = $$block;
                            $$block = mixBlock__$89;
                            var __$l8__$95 = $$elem;
                            $$elem = mixElem__$90;
                            __$r__$92 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$93;
                            $$block = __$l7__$94;
                            $$elem = __$l8__$95;
                            var nestedMix__$91 = __$r__$92;
                            if (nestedMix__$91) {
                                for (var j__$96 = 0; j__$96 < nestedMix__$91.length; j__$96++) {
                                    var nestedItem__$97 = nestedMix__$91[j__$96];
                                    if (!nestedItem__$97.block && !nestedItem__$97.elem || !visited__$84[visitedKey__$85(nestedItem__$97.block, nestedItem__$97.elem)]) {
                                        nestedItem__$97._block = mixBlock__$89;
                                        nestedItem__$97._elem = mixElem__$90;
                                        mix__$81.splice(i__$86 + 1, 0, nestedItem__$97);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$77 && (__$ctx._str += isBEM__$61 ? " " + cls__$77 : cls__$77);
            __$ctx._str += addJSInitClass__$80 ? ' i-bem"' : '"';
        }
        if (isBEM__$61 && jsParams__$71) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$71)) + '"';
        }
        var __$r__$99;
        var __$l9__$100 = $$mode;
        $$mode = "attrs";
        __$r__$99 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$100;
        var attrs__$98 = __$r__$99;
        attrs__$98 = __$ctx.extend(attrs__$98, ctx__$60.attrs);
        if (attrs__$98) {
            var name__$101, attr__$102;
            for (name__$101 in attrs__$98) {
                attr__$102 = attrs__$98[name__$101];
                if (typeof attr__$102 === "undefined") continue;
                __$ctx._str += " " + name__$101 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$102) ? attr__$102 : __$ctx.reapply(attr__$102)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$62)) {
        __$ctx._str += "/>";
    } else {
        tag__$62 && (__$ctx._str += ">");
        var __$r__$104;
        var __$l10__$105 = $$mode;
        $$mode = "content";
        __$r__$104 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$105;
        var content__$103 = __$r__$104;
        if (content__$103 || content__$103 === 0) {
            isBEM__$61 = vBlock__$67 || $$elem;
            var __$r__$106;
            var __$l11__$107 = $$mode;
            $$mode = "";
            var __$l12__$108 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$109 = __$ctx.position;
            __$ctx.position = isBEM__$61 ? 1 : __$ctx.position;
            var __$l14__$110 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$61 ? 1 : __$ctx._listLength;
            var __$l15__$111 = __$ctx.ctx;
            __$ctx.ctx = content__$103;
            __$r__$106 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$107;
            __$ctx._notNewList = __$l12__$108;
            __$ctx.position = __$l13__$109;
            __$ctx._listLength = __$l14__$110;
            __$ctx.ctx = __$l15__$111;
        }
        tag__$62 && (__$ctx._str += "</" + tag__$62 + ">");
    }
    res__$63 = __$ctx._str;
    __$r__$65 = undefined;
    __$ctx._str = __$l0__$66;
    __$ctx._buf.push(res__$63);
    return;
}

function __$b53(__$ctx, __$ref) {
    var __$r__$113;
    var __$l0__$114 = $$mode;
    $$mode = "";
    var __$l1__$115 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$117;
    var __$l2__$118 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$117 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$118;
    __$r__$113 = __$r__$117;
    $$mode = __$l0__$114;
    __$ctx.ctx = __$l1__$115;
    return;
}

function __$b54(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$119 = __$ctx.ctx;
    if (ctx__$119 && ctx__$119 !== true || ctx__$119 === 0) {
        __$ctx._str += ctx__$119 + "";
    }
    return;
}

function __$b55(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b56(__$ctx, __$ref) {
    var ctx__$120 = __$ctx.ctx, len__$121 = ctx__$120.length, i__$122 = 0, prevPos__$123 = __$ctx.position, prevNotNewList__$124 = __$ctx._notNewList;
    if (prevNotNewList__$124) {
        __$ctx._listLength += len__$121 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$121;
    }
    __$ctx._notNewList = true;
    while (i__$122 < len__$121) (function __$lb__$125() {
        var __$r__$126;
        var __$l0__$127 = __$ctx.ctx;
        __$ctx.ctx = ctx__$120[i__$122++];
        __$r__$126 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$127;
        return __$r__$126;
    })();
    prevNotNewList__$124 || (__$ctx.position = prevPos__$123);
    return;
}

function __$b57(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$128 = __$ctx.ctx.block, vElem__$129 = __$ctx.ctx.elem, block__$130 = __$ctx._currBlock || $$block;
    var __$r__$132;
    var __$l0__$133 = $$mode;
    $$mode = "default";
    var __$l1__$134 = $$block;
    $$block = vBlock__$128 || (vElem__$129 ? block__$130 : undefined);
    var __$l2__$135 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$128 || vElem__$129 ? undefined : block__$130;
    var __$l3__$136 = $$elem;
    $$elem = vElem__$129;
    var __$l4__$137 = $$mods;
    $$mods = vBlock__$128 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$138 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$132 = undefined;
    $$mode = __$l0__$133;
    $$block = __$l1__$134;
    __$ctx._currBlock = __$l2__$135;
    $$elem = __$l3__$136;
    $$mods = __$l4__$137;
    $$elemMods = __$l5__$138;
    return;
}

function __$g0(__$ctx, __$ref) {
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
    } else if (__$t === "button") {
        if (!$$elem && $$mods && $$mods["type"] === "link" && (__$ctx.__$a0 & 2) === 0) {
            var __$r = __$b3(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
            return {
                style: "max-width:" + __$ctx._button.textMaxWidth + "px"
            };
        }
        var __$t = !$$elem;
        if (__$t) {
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b5(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b6(__$ctx, __$ref);
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
    if (__$t === "image") {
        if (!$$elem) {
            return "img";
        }
    } else if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "button") {
        if (!$$elem && $$mods && $$mods["type"] === "link") {
            return "a";
        }
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
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