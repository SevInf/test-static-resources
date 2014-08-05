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
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 4) === 0) {
                    var __$r = __$b3(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox") {
            if ($$elem === "control") {
                var __$r = __$b5(__$ctx, __$ref);
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
    } else if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b27(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox") {
            if (!$$elem && $$mods && $$mods["type"] === "button" && (__$ctx.__$a0 & 1) === 0) {
                var __$r = __$b28(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 32) === 0) {
                            var __$r = __$b29(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b30(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b31(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b32(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$11() {
                        var __$r__$12;
                        var __$l0__$13 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 2;
                        __$r__$12 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$13;
                        return __$r__$12;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "checkbox") {
            if (!$$elem) {
                return true;
            }
        } else if (__$t === "checkbox-group") {
            if (!$$elem) {
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
                var __$r = __$b39(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox") {
            if (!$$elem) {
                var __$r = __$b40(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "checkbox-group") {
            if (!$$elem) {
                var __$r = __$b41(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 16) === 0) {
                    return [ function __$lb__$34() {
                        var __$r__$35;
                        var __$l0__$36 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 16;
                        __$r__$35 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$36;
                        return __$r__$35;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 64) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$53() {
                    var __$r__$54;
                    var __$l0__$55 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 64;
                    __$r__$54 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$55;
                    return __$r__$54;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 128) === 0) {
                return [ function __$lb__$56() {
                    var __$r__$57;
                    var __$l0__$58 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$57 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$58;
                    return __$r__$57;
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
        } else if (__$t === "checkbox-group") {
            if (!$$elem) {
                return [ {
                    block: "control-group"
                } ];
            }
        }
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
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b62(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b63(__$ctx, __$ref);
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
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["__$a0"] = 0;
        ctx["_button"] = undefined;
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
    var ctx__$16 = __$ctx.ctx, attrs__$17 = {
        type: $$mods.type || "button",
        name: ctx__$16.name,
        value: ctx__$16.val
    };
    $$mods.disabled && (attrs__$17.disabled = "disabled");
    return __$ctx.extend(function __$lb__$18() {
        var __$r__$19;
        var __$l0__$20 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 4;
        __$r__$19 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$20;
        return __$r__$19;
    }(), attrs__$17);
}

function __$b4(__$ctx, __$ref) {
    var ctx__$21 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$21.tabIndex,
        id: ctx__$21.id,
        title: ctx__$21.title
    };
}

function __$b5(__$ctx, __$ref) {
    var attrs__$28 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$29 = __$ctx.ctx;
    attrs__$28.name = ctx__$29.name;
    attrs__$28.value = ctx__$29.val;
    ctx__$29.checked && (attrs__$28.checked = "checked");
    ctx__$29.disabled && (attrs__$28.disabled = "disabled");
    return attrs__$28;
}

function __$b27(__$ctx, __$ref) {
    var __$r__$23;
    var __$l0__$24 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$26;
    var __$l1__$27 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$26 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$27;
    __$r__$23 = __$r__$26;
    __$ctx._button = __$l0__$24;
    return;
}

function __$b28(__$ctx, __$ref) {
    var ctx__$0 = __$ctx.ctx, mods__$1 = $$mods, buttonMods__$2 = {
        togglable: "check",
        checked: mods__$1.checked,
        disabled: mods__$1.disabled,
        theme: mods__$1.theme,
        size: mods__$1.size
    }, buttonContent__$3 = [ {
        block: "checkbox",
        elem: "control",
        checked: mods__$1.checked,
        disabled: mods__$1.disabled,
        name: ctx__$0.name,
        val: ctx__$0.val
    }, ctx__$0.icon ];
    typeof ctx__$0.text !== "undefined" && buttonContent__$3.push({
        elem: "text",
        content: ctx__$0.text
    });
    var __$r__$5;
    var __$l0__$6 = $$mode;
    $$mode = "";
    var __$l1__$7 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: [ {
            block: "checkbox",
            mods: mods__$1,
            js: ctx__$0.js || true
        } ].concat(ctx__$0.mix || []),
        mods: buttonMods__$2,
        content: buttonContent__$3
    };
    var __$r__$9;
    var __$l2__$10 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1;
    __$r__$9 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$10;
    __$r__$5 = __$r__$9;
    $$mode = __$l0__$6;
    __$ctx.ctx = __$l1__$7;
    return;
}

function __$b29(__$ctx, __$ref) {
    var url__$37 = __$ctx.ctx.url;
    var __$r__$39;
    var __$l0__$40 = $$mode;
    $$mode = "";
    var __$l1__$41 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$37 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$43;
    var __$l2__$44 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$43 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$44;
    __$r__$39 = __$r__$43;
    $$mode = __$l0__$40;
    __$ctx.ctx = __$l1__$41;
    return;
}

function __$b30(__$ctx, __$ref) {
    var ie__$45 = __$ctx.ctx.ie, hideRule__$46 = !ie__$45 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$45 === "!IE" ? [ ie__$45, "<!-->", "<!--" ] : [ ie__$45, "", "" ];
    var __$r__$48;
    var __$l0__$49 = $$mode;
    $$mode = "";
    var __$l3__$50 = __$ctx.ctx;
    var __$l1__$51 = __$l3__$50._ieCommented;
    __$l3__$50._ieCommented = true;
    var __$l2__$52 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$46[0] + "]>" + hideRule__$46[1], __$ctx.ctx, hideRule__$46[2] + "<![endif]-->" ];
    __$r__$48 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$49;
    __$l3__$50._ieCommented = __$l1__$51;
    __$ctx.ctx = __$l2__$52;
    return;
}

function __$b31(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$59 = __$ctx.ctx;
    var __$r__$61;
    var __$l0__$62 = $$mode;
    $$mode = "";
    var __$l1__$63 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$59.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$59.title
            }, {
                block: "ua"
            }, ctx__$59.head, ctx__$59.styles, ctx__$59.favicon ? {
                elem: "favicon",
                url: ctx__$59.favicon
            } : "" ]
        }, ctx__$59 ]
    } ];
    var __$r__$65;
    var __$l2__$66 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$65 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$66;
    __$r__$61 = __$r__$65;
    $$mode = __$l0__$62;
    __$ctx.ctx = __$l1__$63;
    __$ctx._defPageApplied = false;
    return;
}

function __$b32(__$ctx, __$ref) {
    var BEM_INTERNAL__$67 = __$ctx.BEM.INTERNAL, ctx__$68 = __$ctx.ctx, isBEM__$69, tag__$70, res__$71;
    var __$r__$73;
    var __$l0__$74 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$75 = $$block;
    var __$r__$77;
    var __$l1__$78 = $$mode;
    $$mode = "tag";
    __$r__$77 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$78;
    tag__$70 = __$r__$77;
    typeof tag__$70 !== "undefined" || (tag__$70 = ctx__$68.tag);
    typeof tag__$70 !== "undefined" || (tag__$70 = "div");
    if (tag__$70) {
        var jsParams__$79, js__$80;
        if (vBlock__$75 && ctx__$68.js !== false) {
            var __$r__$81;
            var __$l2__$82 = $$mode;
            $$mode = "js";
            __$r__$81 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$82;
            js__$80 = __$r__$81;
            js__$80 = js__$80 ? __$ctx.extend(ctx__$68.js, js__$80 === true ? {} : js__$80) : ctx__$68.js === true ? {} : ctx__$68.js;
            js__$80 && ((jsParams__$79 = {})[BEM_INTERNAL__$67.buildClass(vBlock__$75, ctx__$68.elem)] = js__$80);
        }
        __$ctx._str += "<" + tag__$70;
        var __$r__$83;
        var __$l3__$84 = $$mode;
        $$mode = "bem";
        __$r__$83 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$84;
        isBEM__$69 = __$r__$83;
        typeof isBEM__$69 !== "undefined" || (isBEM__$69 = typeof ctx__$68.bem !== "undefined" ? ctx__$68.bem : ctx__$68.block || ctx__$68.elem);
        var __$r__$86;
        var __$l4__$87 = $$mode;
        $$mode = "cls";
        __$r__$86 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$87;
        var cls__$85 = __$r__$86;
        cls__$85 || (cls__$85 = ctx__$68.cls);
        var addJSInitClass__$88 = ctx__$68.block && jsParams__$79;
        if (isBEM__$69 || cls__$85) {
            __$ctx._str += ' class="';
            if (isBEM__$69) {
                __$ctx._str += BEM_INTERNAL__$67.buildClasses(vBlock__$75, ctx__$68.elem, ctx__$68.elemMods || ctx__$68.mods);
                var __$r__$90;
                var __$l5__$91 = $$mode;
                $$mode = "mix";
                __$r__$90 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$91;
                var mix__$89 = __$r__$90;
                ctx__$68.mix && (mix__$89 = mix__$89 ? [].concat(mix__$89, ctx__$68.mix) : ctx__$68.mix);
                if (mix__$89) {
                    var visited__$92 = {}, visitedKey__$93 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$92[visitedKey__$93(vBlock__$75, $$elem)] = true;
                    __$ctx.isArray(mix__$89) || (mix__$89 = [ mix__$89 ]);
                    for (var i__$94 = 0; i__$94 < mix__$89.length; i__$94++) {
                        var mixItem__$95 = mix__$89[i__$94], hasItem__$96 = mixItem__$95.block || mixItem__$95.elem, mixBlock__$97 = mixItem__$95.block || mixItem__$95._block || $$block, mixElem__$98 = mixItem__$95.elem || mixItem__$95._elem || $$elem;
                        hasItem__$96 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$67[hasItem__$96 ? "buildClasses" : "buildModsClasses"](mixBlock__$97, mixItem__$95.elem || mixItem__$95._elem || (mixItem__$95.block ? undefined : $$elem), mixItem__$95.elemMods || mixItem__$95.mods);
                        if (mixItem__$95.js) {
                            (jsParams__$79 || (jsParams__$79 = {}))[BEM_INTERNAL__$67.buildClass(mixBlock__$97, mixItem__$95.elem)] = mixItem__$95.js === true ? {} : mixItem__$95.js;
                            addJSInitClass__$88 || (addJSInitClass__$88 = mixBlock__$97 && !mixItem__$95.elem);
                        }
                        if (hasItem__$96 && !visited__$92[visitedKey__$93(mixBlock__$97, mixElem__$98)]) {
                            visited__$92[visitedKey__$93(mixBlock__$97, mixElem__$98)] = true;
                            var __$r__$100;
                            var __$l6__$101 = $$mode;
                            $$mode = "mix";
                            var __$l7__$102 = $$block;
                            $$block = mixBlock__$97;
                            var __$l8__$103 = $$elem;
                            $$elem = mixElem__$98;
                            __$r__$100 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$101;
                            $$block = __$l7__$102;
                            $$elem = __$l8__$103;
                            var nestedMix__$99 = __$r__$100;
                            if (nestedMix__$99) {
                                for (var j__$104 = 0; j__$104 < nestedMix__$99.length; j__$104++) {
                                    var nestedItem__$105 = nestedMix__$99[j__$104];
                                    if (!nestedItem__$105.block && !nestedItem__$105.elem || !visited__$92[visitedKey__$93(nestedItem__$105.block, nestedItem__$105.elem)]) {
                                        nestedItem__$105._block = mixBlock__$97;
                                        nestedItem__$105._elem = mixElem__$98;
                                        mix__$89.splice(i__$94 + 1, 0, nestedItem__$105);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$85 && (__$ctx._str += isBEM__$69 ? " " + cls__$85 : cls__$85);
            __$ctx._str += addJSInitClass__$88 ? ' i-bem"' : '"';
        }
        if (isBEM__$69 && jsParams__$79) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$79)) + '"';
        }
        var __$r__$107;
        var __$l9__$108 = $$mode;
        $$mode = "attrs";
        __$r__$107 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$108;
        var attrs__$106 = __$r__$107;
        attrs__$106 = __$ctx.extend(attrs__$106, ctx__$68.attrs);
        if (attrs__$106) {
            var name__$109, attr__$110;
            for (name__$109 in attrs__$106) {
                attr__$110 = attrs__$106[name__$109];
                if (typeof attr__$110 === "undefined") continue;
                __$ctx._str += " " + name__$109 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$110) ? attr__$110 : __$ctx.reapply(attr__$110)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$70)) {
        __$ctx._str += "/>";
    } else {
        tag__$70 && (__$ctx._str += ">");
        var __$r__$112;
        var __$l10__$113 = $$mode;
        $$mode = "content";
        __$r__$112 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$113;
        var content__$111 = __$r__$112;
        if (content__$111 || content__$111 === 0) {
            isBEM__$69 = vBlock__$75 || $$elem;
            var __$r__$114;
            var __$l11__$115 = $$mode;
            $$mode = "";
            var __$l12__$116 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$117 = __$ctx.position;
            __$ctx.position = isBEM__$69 ? 1 : __$ctx.position;
            var __$l14__$118 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$69 ? 1 : __$ctx._listLength;
            var __$l15__$119 = __$ctx.ctx;
            __$ctx.ctx = content__$111;
            __$r__$114 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$115;
            __$ctx._notNewList = __$l12__$116;
            __$ctx.position = __$l13__$117;
            __$ctx._listLength = __$l14__$118;
            __$ctx.ctx = __$l15__$119;
        }
        tag__$70 && (__$ctx._str += "</" + tag__$70 + ">");
    }
    res__$71 = __$ctx._str;
    __$r__$73 = undefined;
    __$ctx._str = __$l0__$74;
    __$ctx._buf.push(res__$71);
    return;
}

function __$b39(__$ctx, __$ref) {
    var ctx__$14 = __$ctx.ctx, content__$15 = [ ctx__$14.icon ];
    "text" in ctx__$14 && content__$15.push({
        elem: "text",
        content: ctx__$14.text
    });
    return content__$15;
}

function __$b40(__$ctx, __$ref) {
    var ctx__$30 = __$ctx.ctx, mods__$31 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$31.checked,
            disabled: mods__$31.disabled,
            name: ctx__$30.name,
            val: ctx__$30.val
        }
    }, ctx__$30.text ];
}

function __$b41(__$ctx, __$ref) {
    var mods__$32 = $$mods, ctx__$33 = __$ctx.ctx;
    return (ctx__$33.options || []).map(function(option, i) {
        return [ !!i && !mods__$32.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$32.type,
                theme: mods__$32.theme,
                size: mods__$32.size,
                checked: option.checked,
                disabled: option.disabled || mods__$32.disabled
            },
            name: ctx__$33.name,
            val: option.val,
            text: option.text,
            icon: option.icon
        } ];
    });
}

function __$b59(__$ctx, __$ref) {
    var __$r__$121;
    var __$l0__$122 = $$mode;
    $$mode = "";
    var __$l1__$123 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$125;
    var __$l2__$126 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$125 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$126;
    __$r__$121 = __$r__$125;
    $$mode = __$l0__$122;
    __$ctx.ctx = __$l1__$123;
    return;
}

function __$b60(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$127 = __$ctx.ctx;
    if (ctx__$127 && ctx__$127 !== true || ctx__$127 === 0) {
        __$ctx._str += ctx__$127 + "";
    }
    return;
}

function __$b61(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b62(__$ctx, __$ref) {
    var ctx__$128 = __$ctx.ctx, len__$129 = ctx__$128.length, i__$130 = 0, prevPos__$131 = __$ctx.position, prevNotNewList__$132 = __$ctx._notNewList;
    if (prevNotNewList__$132) {
        __$ctx._listLength += len__$129 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$129;
    }
    __$ctx._notNewList = true;
    while (i__$130 < len__$129) (function __$lb__$133() {
        var __$r__$134;
        var __$l0__$135 = __$ctx.ctx;
        __$ctx.ctx = ctx__$128[i__$130++];
        __$r__$134 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$135;
        return __$r__$134;
    })();
    prevNotNewList__$132 || (__$ctx.position = prevPos__$131);
    return;
}

function __$b63(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$136 = __$ctx.ctx.block, vElem__$137 = __$ctx.ctx.elem, block__$138 = __$ctx._currBlock || $$block;
    var __$r__$140;
    var __$l0__$141 = $$mode;
    $$mode = "default";
    var __$l1__$142 = $$block;
    $$block = vBlock__$136 || (vElem__$137 ? block__$138 : undefined);
    var __$l2__$143 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$136 || vElem__$137 ? undefined : block__$138;
    var __$l3__$144 = $$elem;
    $$elem = vElem__$137;
    var __$l4__$145 = $$mods;
    $$mods = vBlock__$136 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$146 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$140 = undefined;
    $$mode = __$l0__$141;
    $$block = __$l1__$142;
    __$ctx._currBlock = __$l2__$143;
    $$elem = __$l3__$144;
    $$mods = __$l4__$145;
    $$elemMods = __$l5__$146;
    return;
}

function __$g0(__$ctx, __$ref) {
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
    } else if (__$t === "checkbox") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "label";
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            return "span";
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