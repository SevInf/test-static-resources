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
    } else if (__$t === "content") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$r = __$g3(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "default") {
        var __$r = __$g4(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "mix") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem) {
                return {
                    elem: "control"
                };
            }
        } else if (__$t === "menu") {
            if (!$$elem) {
                return [ {
                    elem: "control"
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 8388608) === 0) {
            var __$r = __$b79(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b80(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b81(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b82(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b83(__$ctx, __$ref);
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
        ctx["_checkedOption"] = undefined;
        ctx["_menuMods"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_button"] = undefined;
        ctx["_select"] = undefined;
        ctx["_checkedOptions"] = undefined;
        ctx["_firstOption"] = undefined;
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
    var val__$81 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$81) ? val__$81 : JSON.stringify(val__$81),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b4(__$ctx, __$ref) {
    var ctx__$59 = __$ctx.ctx, attrs__$60 = {
        type: $$mods.type || "button",
        name: ctx__$59.name,
        value: ctx__$59.val
    };
    $$mods.disabled && (attrs__$60.disabled = "disabled");
    return __$ctx.extend(function __$lb__$61() {
        var __$r__$62;
        var __$l0__$63 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 8192;
        __$r__$62 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$63;
        return __$r__$62;
    }(), attrs__$60);
}

function __$b5(__$ctx, __$ref) {
    var ctx__$64 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$64.tabIndex,
        id: ctx__$64.id,
        title: ctx__$64.title
    };
}

function __$b9(__$ctx, __$ref) {
    var attrs__$37 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$37.tabindex = 0);
    return attrs__$37;
}

function __$b29(__$ctx, __$ref) {
    var res__$0 = __$ctx._checkedOptions.map(function(option) {
        return {
            elem: "control",
            val: option.val
        };
    });
    res__$0.push(function __$lb__$1() {
        var __$r__$2;
        var __$l0__$3 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 1;
        __$r__$2 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$3;
        return __$r__$2;
    }());
    return res__$0;
}

function __$b30(__$ctx, __$ref) {
    var checkedOptions__$4 = __$ctx._checkedOptions;
    return [ {
        elem: "text",
        content: checkedOptions__$4.length === 1 ? checkedOptions__$4[0].text : checkedOptions__$4.reduce(function(res, option) {
            return res + (res ? ", " : "") + (option.checkedText || option.text);
        }, "") || __$ctx._select.text
    } ];
}

function __$b38(__$ctx, __$ref) {
    var ctx__$57 = __$ctx.ctx, content__$58 = [ ctx__$57.icon ];
    "text" in ctx__$57 && content__$58.push({
        elem: "text",
        content: ctx__$57.text
    });
    return content__$58;
}

function __$b48(__$ctx, __$ref) {
    var ctx__$85 = __$ctx.ctx;
    return {
        name: ctx__$85.name,
        optionsMaxHeight: ctx__$85.optionsMaxHeight
    };
}

function __$b56(__$ctx, __$ref) {
    var checkedOptions__$11 = __$ctx._checkedOptions, firstOption__$12 = __$ctx._firstOption;
    if (!checkedOptions__$11.length) {
        firstOption__$12.checked = true;
        checkedOptions__$11.push(firstOption__$12);
    }
    var __$r__$14;
    var __$l0__$15 = __$ctx._checkedOption;
    __$ctx._checkedOption = checkedOptions__$11[0];
    var __$r__$17;
    var __$l1__$18 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$17 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$18;
    __$r__$14 = __$r__$17;
    __$ctx._checkedOption = __$l0__$15;
    return;
}

function __$b57(__$ctx, __$ref) {
    var mods__$71 = $$mods;
    var __$r__$73;
    var __$l0__$74 = $$mode;
    $$mode = "";
    var __$l1__$75 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$71.size,
            theme: mods__$71.theme,
            focused: mods__$71.focused,
            disabled: mods__$71.disabled,
            checked: mods__$71.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        content: [ function __$lb__$76() {
            var __$r__$77;
            var __$l3__$78 = $$mode;
            $$mode = "content";
            __$r__$77 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$78;
            return __$r__$77;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$79;
    var __$l2__$80 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
    __$r__$79 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$80;
    __$r__$73 = __$r__$79;
    $$mode = __$l0__$74;
    __$ctx.ctx = __$l1__$75;
    return;
}

function __$b58(__$ctx, __$ref) {
    var mods__$44 = $$mods, optionToMenuItem__$45 = function(option) {
        var res__$46 = {
            block: "menu-item",
            mods: {
                checked: option.checked,
                disabled: option.disabled
            },
            val: option.val,
            js: {
                checkedText: option.checkedText
            },
            content: option.text
        };
        if (option.icon) {
            res__$46.js.text = option.text;
            res__$46.content = [ option.icon, res__$46.content ];
        }
        return res__$46;
    };
    var __$r__$48;
    var __$l0__$49 = $$mode;
    $$mode = "";
    var __$l1__$50 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$44.size,
            theme: mods__$44.theme,
            disabled: mods__$44.disabled,
            mode: mods__$44.mode
        },
        attrs: {
            tabindex: undefined
        },
        content: __$ctx._select.options.map(function(optionOrGroup) {
            return optionOrGroup.group ? {
                elem: "group",
                mods: {
                    "has-title": !!optionOrGroup.title
                },
                title: optionOrGroup.title,
                content: optionOrGroup.group.map(optionToMenuItem__$45)
            } : optionToMenuItem__$45(optionOrGroup);
        })
    };
    var __$r__$52;
    var __$l2__$53 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
    __$r__$52 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$53;
    __$r__$48 = __$r__$52;
    $$mode = __$l0__$49;
    __$ctx.ctx = __$l1__$50;
    return;
}

function __$b59(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$86 = __$ctx.ctx.options, i__$87 = 0, j__$88, optionOrGroup__$89, option__$90, firstOption__$91, checkedOptions__$92 = [];
    while (optionOrGroup__$89 = options__$86[i__$87++]) {
        if (optionOrGroup__$89.group) {
            j__$88 = 0;
            while (option__$90 = optionOrGroup__$89.group[j__$88++]) {
                i__$87 === 1 && j__$88 === 1 && (firstOption__$91 = option__$90);
                option__$90.checked && checkedOptions__$92.push(option__$90);
            }
        } else {
            i__$87 === 1 && (firstOption__$91 = optionOrGroup__$89);
            optionOrGroup__$89.checked && checkedOptions__$92.push(optionOrGroup__$89);
        }
    }
    var __$r__$94;
    var __$l0__$95 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$96 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$92;
    var __$l2__$97 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$91;
    var __$r__$99;
    var __$l3__$100 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$99 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$100;
    __$r__$94 = __$r__$99;
    __$ctx._select = __$l0__$95;
    __$ctx._checkedOptions = __$l1__$96;
    __$ctx._firstOption = __$l2__$97;
    return;
}

function __$b60(__$ctx, __$ref) {
    var __$r__$66;
    var __$l0__$67 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$69;
    var __$l1__$70 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$69 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$70;
    __$r__$66 = __$r__$69;
    __$ctx._button = __$l0__$67;
    return;
}

function __$b61(__$ctx, __$ref) {
    var __$r__$39;
    var __$l0__$40 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$42;
    var __$l1__$43 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$42 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$43;
    __$r__$39 = __$r__$42;
    __$ctx._menuMods = __$l0__$40;
    delete __$ctx._menuTheme;
    return;
}

function __$b62(__$ctx, __$ref) {
    $$mods.theme = __$ctx._menuMods.theme;
    $$mods.disabled = $$mods.disabled || __$ctx._menuMods.disabled;
    var __$r__$35;
    var __$l0__$36 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 512;
    __$r__$35 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$36;
    return;
}

function __$b63(__$ctx, __$ref) {
    var url__$104 = __$ctx.ctx.url;
    var __$r__$106;
    var __$l0__$107 = $$mode;
    $$mode = "";
    var __$l1__$108 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$104 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$110;
    var __$l2__$111 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
    __$r__$110 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$111;
    __$r__$106 = __$r__$110;
    $$mode = __$l0__$107;
    __$ctx.ctx = __$l1__$108;
    return;
}

function __$b64(__$ctx, __$ref) {
    var ie__$112 = __$ctx.ctx.ie, hideRule__$113 = !ie__$112 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$112 === "!IE" ? [ ie__$112, "<!-->", "<!--" ] : [ ie__$112, "", "" ];
    var __$r__$115;
    var __$l0__$116 = $$mode;
    $$mode = "";
    var __$l3__$117 = __$ctx.ctx;
    var __$l1__$118 = __$l3__$117._ieCommented;
    __$l3__$117._ieCommented = true;
    var __$l2__$119 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$113[0] + "]>" + hideRule__$113[1], __$ctx.ctx, hideRule__$113[2] + "<![endif]-->" ];
    __$r__$115 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$116;
    __$l3__$117._ieCommented = __$l1__$118;
    __$ctx.ctx = __$l2__$119;
    return;
}

function __$b65(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$126 = __$ctx.ctx;
    var __$r__$128;
    var __$l0__$129 = $$mode;
    $$mode = "";
    var __$l1__$130 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$126.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$126.title
            }, {
                block: "ua"
            }, ctx__$126.head, ctx__$126.styles, ctx__$126.favicon ? {
                elem: "favicon",
                url: ctx__$126.favicon
            } : "" ]
        }, ctx__$126 ]
    } ];
    var __$r__$132;
    var __$l2__$133 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4194304;
    __$r__$132 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$133;
    __$r__$128 = __$r__$132;
    $$mode = __$l0__$129;
    __$ctx.ctx = __$l1__$130;
    __$ctx._defPageApplied = false;
    return;
}

function __$b66(__$ctx, __$ref) {
    var BEM_INTERNAL__$134 = __$ctx.BEM.INTERNAL, ctx__$135 = __$ctx.ctx, isBEM__$136, tag__$137, res__$138;
    var __$r__$140;
    var __$l0__$141 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$142 = $$block;
    var __$r__$144;
    var __$l1__$145 = $$mode;
    $$mode = "tag";
    __$r__$144 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$145;
    tag__$137 = __$r__$144;
    typeof tag__$137 !== "undefined" || (tag__$137 = ctx__$135.tag);
    typeof tag__$137 !== "undefined" || (tag__$137 = "div");
    if (tag__$137) {
        var jsParams__$146, js__$147;
        if (vBlock__$142 && ctx__$135.js !== false) {
            var __$r__$148;
            var __$l2__$149 = $$mode;
            $$mode = "js";
            __$r__$148 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$149;
            js__$147 = __$r__$148;
            js__$147 = js__$147 ? __$ctx.extend(ctx__$135.js, js__$147 === true ? {} : js__$147) : ctx__$135.js === true ? {} : ctx__$135.js;
            js__$147 && ((jsParams__$146 = {})[BEM_INTERNAL__$134.buildClass(vBlock__$142, ctx__$135.elem)] = js__$147);
        }
        __$ctx._str += "<" + tag__$137;
        var __$r__$150;
        var __$l3__$151 = $$mode;
        $$mode = "bem";
        __$r__$150 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$151;
        isBEM__$136 = __$r__$150;
        typeof isBEM__$136 !== "undefined" || (isBEM__$136 = typeof ctx__$135.bem !== "undefined" ? ctx__$135.bem : ctx__$135.block || ctx__$135.elem);
        var __$r__$153;
        var __$l4__$154 = $$mode;
        $$mode = "cls";
        __$r__$153 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$154;
        var cls__$152 = __$r__$153;
        cls__$152 || (cls__$152 = ctx__$135.cls);
        var addJSInitClass__$155 = ctx__$135.block && jsParams__$146;
        if (isBEM__$136 || cls__$152) {
            __$ctx._str += ' class="';
            if (isBEM__$136) {
                __$ctx._str += BEM_INTERNAL__$134.buildClasses(vBlock__$142, ctx__$135.elem, ctx__$135.elemMods || ctx__$135.mods);
                var __$r__$157;
                var __$l5__$158 = $$mode;
                $$mode = "mix";
                __$r__$157 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$158;
                var mix__$156 = __$r__$157;
                ctx__$135.mix && (mix__$156 = mix__$156 ? [].concat(mix__$156, ctx__$135.mix) : ctx__$135.mix);
                if (mix__$156) {
                    var visited__$159 = {}, visitedKey__$160 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$159[visitedKey__$160(vBlock__$142, $$elem)] = true;
                    __$ctx.isArray(mix__$156) || (mix__$156 = [ mix__$156 ]);
                    for (var i__$161 = 0; i__$161 < mix__$156.length; i__$161++) {
                        var mixItem__$162 = mix__$156[i__$161], hasItem__$163 = mixItem__$162.block || mixItem__$162.elem, mixBlock__$164 = mixItem__$162.block || mixItem__$162._block || $$block, mixElem__$165 = mixItem__$162.elem || mixItem__$162._elem || $$elem;
                        hasItem__$163 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$134[hasItem__$163 ? "buildClasses" : "buildModsClasses"](mixBlock__$164, mixItem__$162.elem || mixItem__$162._elem || (mixItem__$162.block ? undefined : $$elem), mixItem__$162.elemMods || mixItem__$162.mods);
                        if (mixItem__$162.js) {
                            (jsParams__$146 || (jsParams__$146 = {}))[BEM_INTERNAL__$134.buildClass(mixBlock__$164, mixItem__$162.elem)] = mixItem__$162.js === true ? {} : mixItem__$162.js;
                            addJSInitClass__$155 || (addJSInitClass__$155 = mixBlock__$164 && !mixItem__$162.elem);
                        }
                        if (hasItem__$163 && !visited__$159[visitedKey__$160(mixBlock__$164, mixElem__$165)]) {
                            visited__$159[visitedKey__$160(mixBlock__$164, mixElem__$165)] = true;
                            var __$r__$167;
                            var __$l6__$168 = $$mode;
                            $$mode = "mix";
                            var __$l7__$169 = $$block;
                            $$block = mixBlock__$164;
                            var __$l8__$170 = $$elem;
                            $$elem = mixElem__$165;
                            __$r__$167 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$168;
                            $$block = __$l7__$169;
                            $$elem = __$l8__$170;
                            var nestedMix__$166 = __$r__$167;
                            if (nestedMix__$166) {
                                for (var j__$171 = 0; j__$171 < nestedMix__$166.length; j__$171++) {
                                    var nestedItem__$172 = nestedMix__$166[j__$171];
                                    if (!nestedItem__$172.block && !nestedItem__$172.elem || !visited__$159[visitedKey__$160(nestedItem__$172.block, nestedItem__$172.elem)]) {
                                        nestedItem__$172._block = mixBlock__$164;
                                        nestedItem__$172._elem = mixElem__$165;
                                        mix__$156.splice(i__$161 + 1, 0, nestedItem__$172);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$152 && (__$ctx._str += isBEM__$136 ? " " + cls__$152 : cls__$152);
            __$ctx._str += addJSInitClass__$155 ? ' i-bem"' : '"';
        }
        if (isBEM__$136 && jsParams__$146) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$146)) + '"';
        }
        var __$r__$174;
        var __$l9__$175 = $$mode;
        $$mode = "attrs";
        __$r__$174 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$175;
        var attrs__$173 = __$r__$174;
        attrs__$173 = __$ctx.extend(attrs__$173, ctx__$135.attrs);
        if (attrs__$173) {
            var name__$176, attr__$177;
            for (name__$176 in attrs__$173) {
                attr__$177 = attrs__$173[name__$176];
                if (typeof attr__$177 === "undefined") continue;
                __$ctx._str += " " + name__$176 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$177) ? attr__$177 : __$ctx.reapply(attr__$177)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$137)) {
        __$ctx._str += "/>";
    } else {
        tag__$137 && (__$ctx._str += ">");
        var __$r__$179;
        var __$l10__$180 = $$mode;
        $$mode = "content";
        __$r__$179 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$180;
        var content__$178 = __$r__$179;
        if (content__$178 || content__$178 === 0) {
            isBEM__$136 = vBlock__$142 || $$elem;
            var __$r__$181;
            var __$l11__$182 = $$mode;
            $$mode = "";
            var __$l12__$183 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$184 = __$ctx.position;
            __$ctx.position = isBEM__$136 ? 1 : __$ctx.position;
            var __$l14__$185 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$136 ? 1 : __$ctx._listLength;
            var __$l15__$186 = __$ctx.ctx;
            __$ctx.ctx = content__$178;
            __$r__$181 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$182;
            __$ctx._notNewList = __$l12__$183;
            __$ctx.position = __$l13__$184;
            __$ctx._listLength = __$l14__$185;
            __$ctx.ctx = __$l15__$186;
        }
        tag__$137 && (__$ctx._str += "</" + tag__$137 + ">");
    }
    res__$138 = __$ctx._str;
    __$r__$140 = undefined;
    __$ctx._str = __$l0__$141;
    __$ctx._buf.push(res__$138);
    return;
}

function __$b79(__$ctx, __$ref) {
    var __$r__$188;
    var __$l0__$189 = $$mode;
    $$mode = "";
    var __$l1__$190 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$192;
    var __$l2__$193 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8388608;
    __$r__$192 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$193;
    __$r__$188 = __$r__$192;
    $$mode = __$l0__$189;
    __$ctx.ctx = __$l1__$190;
    return;
}

function __$b80(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$194 = __$ctx.ctx;
    if (ctx__$194 && ctx__$194 !== true || ctx__$194 === 0) {
        __$ctx._str += ctx__$194 + "";
    }
    return;
}

function __$b81(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b82(__$ctx, __$ref) {
    var ctx__$195 = __$ctx.ctx, len__$196 = ctx__$195.length, i__$197 = 0, prevPos__$198 = __$ctx.position, prevNotNewList__$199 = __$ctx._notNewList;
    if (prevNotNewList__$199) {
        __$ctx._listLength += len__$196 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$196;
    }
    __$ctx._notNewList = true;
    while (i__$197 < len__$196) (function __$lb__$200() {
        var __$r__$201;
        var __$l0__$202 = __$ctx.ctx;
        __$ctx.ctx = ctx__$195[i__$197++];
        __$r__$201 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$202;
        return __$r__$201;
    })();
    prevNotNewList__$199 || (__$ctx.position = prevPos__$198);
    return;
}

function __$b83(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$203 = __$ctx.ctx.block, vElem__$204 = __$ctx.ctx.elem, block__$205 = __$ctx._currBlock || $$block;
    var __$r__$207;
    var __$l0__$208 = $$mode;
    $$mode = "default";
    var __$l1__$209 = $$block;
    $$block = vBlock__$203 || (vElem__$204 ? block__$205 : undefined);
    var __$l2__$210 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$203 || vElem__$204 ? undefined : block__$205;
    var __$l3__$211 = $$elem;
    $$elem = vElem__$204;
    var __$l4__$212 = $$mods;
    $$mods = vBlock__$203 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$213 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$207 = undefined;
    $$mode = __$l0__$208;
    $$block = __$l1__$209;
    __$ctx._currBlock = __$l2__$210;
    $$elem = __$l3__$211;
    $$mods = __$l4__$212;
    $$elemMods = __$l5__$213;
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
    } else if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b2(__$ctx, __$ref);
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
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 8192) === 0) {
                var __$r = __$b4(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b5(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = $$elem;
        if (__$t === "group-title") {
            return {
                role: "presentation"
            };
        } else if (__$t === "group") {
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$ctx.extend(function __$lb__$28() {
                    var __$r__$29;
                    var __$l0__$30 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 128;
                    __$r__$29 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$30;
                    return __$r__$29;
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
            var __$r = __$b9(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                role: "menuitem"
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
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "select") {
        if ($$elem === "control") {
            return "input";
        }
    } else if (__$t === "button") {
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

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "check" && __$ctx._checkedOptions[0] && (__$ctx.__$a0 & 1) === 0) {
            var __$r = __$b29(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "button") {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["mode"];
                if (__$t === "check") {
                    var __$r = __$b30(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                } else if (__$t === "radio") {
                    return [ {
                        elem: "text",
                        content: __$ctx._checkedOption.text
                    } ];
                }
            }
        }
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["mode"];
                if (__$t === "radio") {
                    if ((__$ctx.__$a0 & 4) === 0) {
                        return [ {
                            elem: "control",
                            val: __$ctx._checkedOption.val
                        }, function __$lb__$8() {
                            var __$r__$9;
                            var __$l0__$10 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 4;
                            __$r__$9 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$10;
                            return __$r__$9;
                        }() ];
                    }
                } else if (__$t === "radio-check") {
                    if (__$ctx._checkedOptions[0] && (__$ctx.__$a0 & 16) === 0) {
                        return [ {
                            elem: "control",
                            val: __$ctx._checkedOptions[0].val
                        }, function __$lb__$19() {
                            var __$r__$20;
                            var __$l0__$21 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 16;
                            __$r__$20 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$21;
                            return __$r__$20;
                        }() ];
                    }
                }
            }
        }
        if ($$elem === "button" && $$mods && $$mods["mode"] === "radio-check") {
            return [ {
                elem: "text",
                content: (__$ctx._checkedOptions[0] || __$ctx._select).text
            } ];
        }
        var __$t = !$$elem;
        if (__$t) {
            return [ {
                elem: "button"
            }, {
                block: "popup",
                mods: {
                    theme: $$mods.theme,
                    autoclosable: true
                },
                cls: __$ctx.ctx.cls + "-popup",
                js: {
                    directions: [ "bottom-left", "bottom-right", "top-left", "top-right" ]
                },
                content: {
                    block: $$block,
                    mods: $$mods,
                    elem: "menu"
                }
            } ];
            return [ {
                elem: "button"
            }, {
                block: "popup",
                mods: {
                    theme: $$mods.theme,
                    autoclosable: true
                },
                js: {
                    directions: [ "bottom-left", "bottom-right", "top-left", "top-right" ]
                },
                content: {
                    block: $$block,
                    mods: $$mods,
                    elem: "menu"
                }
            } ];
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            var __$r = __$b38(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 64) === 0) {
            return [ {
                elem: "group-title",
                content: __$ctx.ctx.title
            }, function __$lb__$25() {
                var __$r__$26;
                var __$l0__$27 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 64;
                __$r__$26 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$27;
                return __$r__$26;
            }() ];
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 262144) === 0) {
                return [ function __$lb__$101() {
                    var __$r__$102;
                    var __$l0__$103 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
                    __$r__$102 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$103;
                    return __$r__$102;
                }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
            }
            return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
        }
    } else if (__$t === "page") {
        if ($$elem === "head" && (__$ctx.__$a0 & 1048576) === 0) {
            return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                }
            }, function __$lb__$120() {
                var __$r__$121;
                var __$l0__$122 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
                __$r__$121 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$122;
                return __$r__$121;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 2097152) === 0) {
            return [ function __$lb__$123() {
                var __$r__$124;
                var __$l0__$125 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
                __$r__$124 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$125;
                return __$r__$124;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            var __$t = $$mods;
            if (__$t) {
                var __$t = $$mods["mode"];
                if (__$t === "check") {
                    if ((__$ctx.__$a0 & 2) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$5() {
                            var __$r__$6;
                            var __$l0__$7 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 2;
                            __$r__$6 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$7;
                            return __$r__$6;
                        }(), {
                            text: __$ctx.ctx.text
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                } else if (__$t === "radio-check") {
                    if ((__$ctx.__$a0 & 32) === 0) {
                        var __$r = __$ctx.extend(function __$lb__$22() {
                            var __$r__$23;
                            var __$l0__$24 = __$ctx.__$a0;
                            __$ctx.__$a0 = __$ctx.__$a0 | 32;
                            __$r__$23 = applyc(__$ctx, __$ref);
                            __$ctx.__$a0 = __$l0__$24;
                            return __$r__$23;
                        }(), {
                            text: __$ctx.ctx.text
                        });
                        if (__$r !== __$ref) return __$r;
                    }
                }
                if ($$mods["focused"] === true && (__$ctx.__$a0 & 65536) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$82() {
                        var __$r__$83;
                        var __$l0__$84 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 65536;
                        __$r__$83 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$84;
                        return __$r__$83;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
            }
            var __$r = __$b48(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 4096) === 0) {
                var __$r = __$ctx.extend(function __$lb__$54() {
                    var __$r__$55;
                    var __$l0__$56 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
                    __$r__$55 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$56;
                    return __$r__$55;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            return true;
        }
    } else if (__$t === "popup") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "menu") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 256) === 0) {
                var __$r = __$ctx.extend(function __$lb__$31() {
                    var __$r__$32;
                    var __$l0__$33 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 256;
                    __$r__$32 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$33;
                    return __$r__$32;
                }(), {
                    live: false
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
    }
    return undefined;
    return __$ref;
}

function __$g4(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 8) === 0) {
            var __$r = __$b56(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 32768) === 0) {
                var __$r = __$b57(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$b58(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 131072) === 0) {
            var __$r = __$b59(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b60(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b61(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 512) === 0) {
            var __$r = __$b62(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "css") {
            var __$t = !__$ctx.ctx._ieCommented;
            if (__$t) {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 524288) === 0) {
                        var __$r = __$b63(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b64(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 4194304) === 0) {
            var __$r = __$b65(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b66(__$ctx, __$ref);
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