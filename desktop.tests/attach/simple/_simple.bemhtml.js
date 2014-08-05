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
    if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "attach") {
            if ($$elem === "control") {
                var __$r = __$b21(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
                return {
                    style: "max-width:" + __$ctx._button.textMaxWidth + "px"
                };
            }
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 4) === 0) {
                    var __$r = __$b23(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b24(__$ctx, __$ref);
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
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "attach") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b31(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (__$ctx._attach && (__$ctx.__$a0 & 1) === 0) {
                    return [ {
                        block: "attach",
                        elem: "control"
                    }, function __$lb__$2() {
                        var __$r__$3;
                        var __$l0__$4 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$3 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$4;
                        return __$r__$3;
                    }() ];
                }
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b34(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 32) === 0) {
                    return [ function __$lb__$36() {
                        var __$r__$37;
                        var __$l0__$38 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 32;
                        __$r__$37 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$38;
                        return __$r__$37;
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
                }, function __$lb__$55() {
                    var __$r__$56;
                    var __$l0__$57 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$56 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$57;
                    return __$r__$56;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 256) === 0) {
                return [ function __$lb__$58() {
                    var __$r__$59;
                    var __$l0__$60 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$59 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$60;
                    return __$r__$59;
                }(), __$ctx.ctx.scripts ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "attach") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$5() {
                        var __$r__$6;
                        var __$l0__$7 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$6 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$7;
                        return __$r__$6;
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
        if ($$block === "button" && !$$elem) {
            return {
                elem: "control"
            };
        }
        return undefined;
    } else if (__$t === "default") {
        var __$r = __$g1(__$ctx, __$ref);
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
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b62(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b63(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b64(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b65(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b66(__$ctx, __$ref);
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
}, function() {
    (function(global, bem_) {
        if (bem_.I18N) {
            return;
        }
        global.BEM = bem_;
        var i18n = global.BEM.I18N = function(keyset, key) {
            return key;
        };
        i18n.keyset = function() {
            return i18n;
        };
        i18n.key = function(key) {
            return key;
        };
        i18n.lang = function() {
            return;
        };
    })(this, typeof BEM === "undefined" ? {} : BEM);
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_button"] = undefined;
        ctx["_attach"] = undefined;
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

function __$b21(__$ctx, __$ref) {
    var attrs__$0 = {
        type: "file"
    }, attach__$1 = __$ctx._attach;
    if (attach__$1) {
        attrs__$0.name = attach__$1.name;
        attach__$1.mods && attach__$1.mods.disabled && (attrs__$0.disabled = "disabled");
        attach__$1.tabIndex && (attrs__$0.tabindex = attach__$1.tabIndex);
    }
    return attrs__$0;
}

function __$b23(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx, attrs__$11 = {
        type: $$mods.type || "button",
        name: ctx__$10.name,
        value: ctx__$10.val
    };
    $$mods.disabled && (attrs__$11.disabled = "disabled");
    return __$ctx.extend(function __$lb__$12() {
        var __$r__$13;
        var __$l0__$14 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 4;
        __$r__$13 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$14;
        return __$r__$13;
    }(), attrs__$11);
}

function __$b24(__$ctx, __$ref) {
    var ctx__$15 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$15.tabIndex,
        id: ctx__$15.id,
        title: ctx__$15.title
    };
}

function __$b31(__$ctx, __$ref) {
    var ctx__$22 = __$ctx.ctx, button__$23 = ctx__$22.button;
    __$ctx.isSimple(button__$23) && (button__$23 = {
        block: "button",
        tag: "span",
        text: button__$23
    });
    var attachMods__$24 = $$mods, buttonMods__$25 = button__$23.mods || (button__$23.mods = {});
    buttonMods__$25["size"] || (buttonMods__$25["size"] = attachMods__$24["size"]);
    buttonMods__$25["theme"] || (buttonMods__$25["theme"] = attachMods__$24["theme"]);
    buttonMods__$25["disabled"] || (buttonMods__$25["disabled"] = attachMods__$24["disabled"]);
    return [ button__$23, {
        elem: "no-file",
        content: __$ctx.ctx.noFileText
    } ];
}

function __$b34(__$ctx, __$ref) {
    var ctx__$8 = __$ctx.ctx, content__$9 = [ ctx__$8.icon ];
    "text" in ctx__$8 && content__$9.push({
        elem: "text",
        content: ctx__$8.text
    });
    return content__$9;
}

function __$b46(__$ctx, __$ref) {
    var __$r__$27;
    var __$l0__$28 = __$ctx._attach;
    __$ctx._attach = __$ctx.ctx;
    var __$r__$30;
    var __$l1__$31 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$30 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$31;
    __$r__$27 = __$r__$30;
    __$ctx._attach = __$l0__$28;
    return;
}

function __$b47(__$ctx, __$ref) {
    var __$r__$17;
    var __$l0__$18 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$20;
    var __$l1__$21 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$20 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$21;
    __$r__$17 = __$r__$20;
    __$ctx._button = __$l0__$18;
    return;
}

function __$b48(__$ctx, __$ref) {
    if (!__$ctx.ctx) return "";
    var ctx__$32 = __$ctx.ctx, keyset__$33 = ctx__$32.keyset, key__$34 = ctx__$32.key, params__$35 = ctx__$32.params || {};
    if (!(keyset__$33 || key__$34)) return "";
    if (typeof ctx__$32.content === "undefined" || ctx__$32.content !== null) {
        params__$35.content = exports.apply(ctx__$32.content);
    }
    __$ctx._buf.push(BEM.I18N(keyset__$33, key__$34, params__$35));
    return;
}

function __$b49(__$ctx, __$ref) {
    var url__$39 = __$ctx.ctx.url;
    var __$r__$41;
    var __$l0__$42 = $$mode;
    $$mode = "";
    var __$l1__$43 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$39 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$45;
    var __$l2__$46 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$45 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$46;
    __$r__$41 = __$r__$45;
    $$mode = __$l0__$42;
    __$ctx.ctx = __$l1__$43;
    return;
}

function __$b50(__$ctx, __$ref) {
    var ie__$47 = __$ctx.ctx.ie, hideRule__$48 = !ie__$47 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$47 === "!IE" ? [ ie__$47, "<!-->", "<!--" ] : [ ie__$47, "", "" ];
    var __$r__$50;
    var __$l0__$51 = $$mode;
    $$mode = "";
    var __$l3__$52 = __$ctx.ctx;
    var __$l1__$53 = __$l3__$52._ieCommented;
    __$l3__$52._ieCommented = true;
    var __$l2__$54 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$48[0] + "]>" + hideRule__$48[1], __$ctx.ctx, hideRule__$48[2] + "<![endif]-->" ];
    __$r__$50 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$51;
    __$l3__$52._ieCommented = __$l1__$53;
    __$ctx.ctx = __$l2__$54;
    return;
}

function __$b51(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$61 = __$ctx.ctx;
    var __$r__$63;
    var __$l0__$64 = $$mode;
    $$mode = "";
    var __$l1__$65 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$61.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$61.title
            }, {
                block: "ua"
            }, ctx__$61.head, ctx__$61.styles, ctx__$61.favicon ? {
                elem: "favicon",
                url: ctx__$61.favicon
            } : "" ]
        }, ctx__$61 ]
    } ];
    var __$r__$67;
    var __$l2__$68 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$67 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$68;
    __$r__$63 = __$r__$67;
    $$mode = __$l0__$64;
    __$ctx.ctx = __$l1__$65;
    __$ctx._defPageApplied = false;
    return;
}

function __$b52(__$ctx, __$ref) {
    var BEM_INTERNAL__$69 = __$ctx.BEM.INTERNAL, ctx__$70 = __$ctx.ctx, isBEM__$71, tag__$72, res__$73;
    var __$r__$75;
    var __$l0__$76 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$77 = $$block;
    var __$r__$79;
    var __$l1__$80 = $$mode;
    $$mode = "tag";
    __$r__$79 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$80;
    tag__$72 = __$r__$79;
    typeof tag__$72 !== "undefined" || (tag__$72 = ctx__$70.tag);
    typeof tag__$72 !== "undefined" || (tag__$72 = "div");
    if (tag__$72) {
        var jsParams__$81, js__$82;
        if (vBlock__$77 && ctx__$70.js !== false) {
            var __$r__$83;
            var __$l2__$84 = $$mode;
            $$mode = "js";
            __$r__$83 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$84;
            js__$82 = __$r__$83;
            js__$82 = js__$82 ? __$ctx.extend(ctx__$70.js, js__$82 === true ? {} : js__$82) : ctx__$70.js === true ? {} : ctx__$70.js;
            js__$82 && ((jsParams__$81 = {})[BEM_INTERNAL__$69.buildClass(vBlock__$77, ctx__$70.elem)] = js__$82);
        }
        __$ctx._str += "<" + tag__$72;
        var __$r__$85;
        var __$l3__$86 = $$mode;
        $$mode = "bem";
        __$r__$85 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$86;
        isBEM__$71 = __$r__$85;
        typeof isBEM__$71 !== "undefined" || (isBEM__$71 = typeof ctx__$70.bem !== "undefined" ? ctx__$70.bem : ctx__$70.block || ctx__$70.elem);
        var __$r__$88;
        var __$l4__$89 = $$mode;
        $$mode = "cls";
        __$r__$88 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$89;
        var cls__$87 = __$r__$88;
        cls__$87 || (cls__$87 = ctx__$70.cls);
        var addJSInitClass__$90 = ctx__$70.block && jsParams__$81;
        if (isBEM__$71 || cls__$87) {
            __$ctx._str += ' class="';
            if (isBEM__$71) {
                __$ctx._str += BEM_INTERNAL__$69.buildClasses(vBlock__$77, ctx__$70.elem, ctx__$70.elemMods || ctx__$70.mods);
                var __$r__$92;
                var __$l5__$93 = $$mode;
                $$mode = "mix";
                __$r__$92 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$93;
                var mix__$91 = __$r__$92;
                ctx__$70.mix && (mix__$91 = mix__$91 ? [].concat(mix__$91, ctx__$70.mix) : ctx__$70.mix);
                if (mix__$91) {
                    var visited__$94 = {}, visitedKey__$95 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$94[visitedKey__$95(vBlock__$77, $$elem)] = true;
                    __$ctx.isArray(mix__$91) || (mix__$91 = [ mix__$91 ]);
                    for (var i__$96 = 0; i__$96 < mix__$91.length; i__$96++) {
                        var mixItem__$97 = mix__$91[i__$96], hasItem__$98 = mixItem__$97.block || mixItem__$97.elem, mixBlock__$99 = mixItem__$97.block || mixItem__$97._block || $$block, mixElem__$100 = mixItem__$97.elem || mixItem__$97._elem || $$elem;
                        hasItem__$98 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$69[hasItem__$98 ? "buildClasses" : "buildModsClasses"](mixBlock__$99, mixItem__$97.elem || mixItem__$97._elem || (mixItem__$97.block ? undefined : $$elem), mixItem__$97.elemMods || mixItem__$97.mods);
                        if (mixItem__$97.js) {
                            (jsParams__$81 || (jsParams__$81 = {}))[BEM_INTERNAL__$69.buildClass(mixBlock__$99, mixItem__$97.elem)] = mixItem__$97.js === true ? {} : mixItem__$97.js;
                            addJSInitClass__$90 || (addJSInitClass__$90 = mixBlock__$99 && !mixItem__$97.elem);
                        }
                        if (hasItem__$98 && !visited__$94[visitedKey__$95(mixBlock__$99, mixElem__$100)]) {
                            visited__$94[visitedKey__$95(mixBlock__$99, mixElem__$100)] = true;
                            var __$r__$102;
                            var __$l6__$103 = $$mode;
                            $$mode = "mix";
                            var __$l7__$104 = $$block;
                            $$block = mixBlock__$99;
                            var __$l8__$105 = $$elem;
                            $$elem = mixElem__$100;
                            __$r__$102 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$103;
                            $$block = __$l7__$104;
                            $$elem = __$l8__$105;
                            var nestedMix__$101 = __$r__$102;
                            if (nestedMix__$101) {
                                for (var j__$106 = 0; j__$106 < nestedMix__$101.length; j__$106++) {
                                    var nestedItem__$107 = nestedMix__$101[j__$106];
                                    if (!nestedItem__$107.block && !nestedItem__$107.elem || !visited__$94[visitedKey__$95(nestedItem__$107.block, nestedItem__$107.elem)]) {
                                        nestedItem__$107._block = mixBlock__$99;
                                        nestedItem__$107._elem = mixElem__$100;
                                        mix__$91.splice(i__$96 + 1, 0, nestedItem__$107);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$87 && (__$ctx._str += isBEM__$71 ? " " + cls__$87 : cls__$87);
            __$ctx._str += addJSInitClass__$90 ? ' i-bem"' : '"';
        }
        if (isBEM__$71 && jsParams__$81) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$81)) + '"';
        }
        var __$r__$109;
        var __$l9__$110 = $$mode;
        $$mode = "attrs";
        __$r__$109 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$110;
        var attrs__$108 = __$r__$109;
        attrs__$108 = __$ctx.extend(attrs__$108, ctx__$70.attrs);
        if (attrs__$108) {
            var name__$111, attr__$112;
            for (name__$111 in attrs__$108) {
                attr__$112 = attrs__$108[name__$111];
                if (typeof attr__$112 === "undefined") continue;
                __$ctx._str += " " + name__$111 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$112) ? attr__$112 : __$ctx.reapply(attr__$112)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$72)) {
        __$ctx._str += "/>";
    } else {
        tag__$72 && (__$ctx._str += ">");
        var __$r__$114;
        var __$l10__$115 = $$mode;
        $$mode = "content";
        __$r__$114 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$115;
        var content__$113 = __$r__$114;
        if (content__$113 || content__$113 === 0) {
            isBEM__$71 = vBlock__$77 || $$elem;
            var __$r__$116;
            var __$l11__$117 = $$mode;
            $$mode = "";
            var __$l12__$118 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$119 = __$ctx.position;
            __$ctx.position = isBEM__$71 ? 1 : __$ctx.position;
            var __$l14__$120 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$71 ? 1 : __$ctx._listLength;
            var __$l15__$121 = __$ctx.ctx;
            __$ctx.ctx = content__$113;
            __$r__$116 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$117;
            __$ctx._notNewList = __$l12__$118;
            __$ctx.position = __$l13__$119;
            __$ctx._listLength = __$l14__$120;
            __$ctx.ctx = __$l15__$121;
        }
        tag__$72 && (__$ctx._str += "</" + tag__$72 + ">");
    }
    res__$73 = __$ctx._str;
    __$r__$75 = undefined;
    __$ctx._str = __$l0__$76;
    __$ctx._buf.push(res__$73);
    return;
}

function __$b62(__$ctx, __$ref) {
    var __$r__$123;
    var __$l0__$124 = $$mode;
    $$mode = "";
    var __$l1__$125 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$127;
    var __$l2__$128 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$127 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$128;
    __$r__$123 = __$r__$127;
    $$mode = __$l0__$124;
    __$ctx.ctx = __$l1__$125;
    return;
}

function __$b63(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$129 = __$ctx.ctx;
    if (ctx__$129 && ctx__$129 !== true || ctx__$129 === 0) {
        __$ctx._str += ctx__$129 + "";
    }
    return;
}

function __$b64(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b65(__$ctx, __$ref) {
    var ctx__$130 = __$ctx.ctx, len__$131 = ctx__$130.length, i__$132 = 0, prevPos__$133 = __$ctx.position, prevNotNewList__$134 = __$ctx._notNewList;
    if (prevNotNewList__$134) {
        __$ctx._listLength += len__$131 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$131;
    }
    __$ctx._notNewList = true;
    while (i__$132 < len__$131) (function __$lb__$135() {
        var __$r__$136;
        var __$l0__$137 = __$ctx.ctx;
        __$ctx.ctx = ctx__$130[i__$132++];
        __$r__$136 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$137;
        return __$r__$136;
    })();
    prevNotNewList__$134 || (__$ctx.position = prevPos__$133);
    return;
}

function __$b66(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$138 = __$ctx.ctx.block, vElem__$139 = __$ctx.ctx.elem, block__$140 = __$ctx._currBlock || $$block;
    var __$r__$142;
    var __$l0__$143 = $$mode;
    $$mode = "default";
    var __$l1__$144 = $$block;
    $$block = vBlock__$138 || (vElem__$139 ? block__$140 : undefined);
    var __$l2__$145 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$138 || vElem__$139 ? undefined : block__$140;
    var __$l3__$146 = $$elem;
    $$elem = vElem__$139;
    var __$l4__$147 = $$mods;
    $$mods = vBlock__$138 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$148 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$142 = undefined;
    $$mode = __$l0__$143;
    $$block = __$l1__$144;
    __$ctx._currBlock = __$l2__$145;
    $$elem = __$l3__$146;
    $$mods = __$l4__$147;
    $$elemMods = __$l5__$148;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "attach") {
        var __$t = $$elem;
        if (__$t === "clear") {
            return "i";
        } else if (__$t === "text") {
            return "span";
        } else if (__$t === "file") {
            return "span";
        } else if (__$t === "no-file") {
            return "span";
        } else if (__$t === "control") {
            return "input";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "button") {
        if (!$$elem && __$ctx._attach) {
            return "span";
        }
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
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
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "attach") {
        if (!$$elem && (__$ctx.__$a0 & 16) === 0) {
            var __$r = __$b46(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
            var __$r = __$b47(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "i-bem") {
        if ($$elem === "i18n") {
            var __$r = __$b48(__$ctx, __$ref);
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
                        var __$r = __$b49(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b50(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b51(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b52(__$ctx, __$ref);
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