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
    if (__$t === "content") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "default") {
        var __$r = __$g1(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        var __$r = __$g2(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "attrs") {
        var __$r = __$g3(__$ctx, __$ref);
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
        } else if (__$t === "radio-group") {
            if (!$$elem) {
                return [ {
                    block: "control-group"
                } ];
            }
        } else if (__$t === "checkbox-group") {
            if (!$$elem) {
                return [ {
                    block: "control-group"
                } ];
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g4(__$ctx, __$ref);
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
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 8388608) === 0) {
            var __$r = __$b103(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b104(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b105(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b106(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b107(__$ctx, __$ref);
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
        ctx["_select"] = undefined;
        ctx["_checkedOptions"] = undefined;
        ctx["_firstOption"] = undefined;
        ctx["_input"] = undefined;
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

function __$b1(__$ctx, __$ref) {
    var ctx__$94 = __$ctx.ctx;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: $$mods.checked,
            disabled: $$mods.disabled,
            name: ctx__$94.name,
            val: ctx__$94.val
        }
    }, ctx__$94.text ];
}

function __$b6(__$ctx, __$ref) {
    var ctx__$111 = __$ctx.ctx, content__$112 = [ ctx__$111.icon ];
    "text" in ctx__$111 && content__$112.push({
        elem: "text",
        content: ctx__$111.text
    });
    return content__$112;
}

function __$b10(__$ctx, __$ref) {
    var mods__$95 = $$mods, ctx__$96 = __$ctx.ctx;
    return (ctx__$96.options || []).map(function(option, i) {
        return [ !!i && !mods__$95.type && {
            tag: "br"
        }, {
            block: "radio",
            mods: {
                type: mods__$95.type,
                mode: mods__$95.mode,
                theme: mods__$95.theme,
                size: mods__$95.size,
                checked: option.checked,
                disabled: option.disabled || mods__$95.disabled
            },
            name: ctx__$96.name,
            val: option.val,
            text: option.text,
            icon: option.icon
        } ];
    });
}

function __$b11(__$ctx, __$ref) {
    var ctx__$127 = __$ctx.ctx, mods__$128 = $$mods;
    return [ {
        elem: "box",
        content: {
            elem: "control",
            checked: mods__$128.checked,
            disabled: mods__$128.disabled,
            name: ctx__$127.name,
            val: ctx__$127.val
        }
    }, ctx__$127.text ];
}

function __$b12(__$ctx, __$ref) {
    var mods__$129 = $$mods, ctx__$130 = __$ctx.ctx;
    return (ctx__$130.options || []).map(function(option, i) {
        return [ !!i && !mods__$129.type && {
            tag: "br"
        }, {
            block: "checkbox",
            mods: {
                type: mods__$129.type,
                theme: mods__$129.theme,
                size: mods__$129.size,
                checked: option.checked,
                disabled: option.disabled || mods__$129.disabled
            },
            name: ctx__$130.name,
            val: option.val,
            text: option.text,
            icon: option.icon
        } ];
    });
}

function __$b18(__$ctx, __$ref) {
    var ctx__$81 = __$ctx.ctx, mods__$82 = $$mods, buttonMods__$83 = {
        togglable: mods__$82.mode === "radio-check" ? "check" : "radio",
        checked: mods__$82.checked,
        disabled: mods__$82.disabled,
        theme: mods__$82.theme,
        size: mods__$82.size
    }, buttonContent__$84 = [ {
        block: "radio",
        elem: "control",
        checked: mods__$82.checked,
        disabled: mods__$82.disabled,
        name: ctx__$81.name,
        val: ctx__$81.val
    }, ctx__$81.icon ];
    typeof ctx__$81.text !== "undefined" && buttonContent__$84.push({
        elem: "text",
        content: ctx__$81.text
    });
    var __$r__$86;
    var __$l0__$87 = $$mode;
    $$mode = "";
    var __$l1__$88 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: "radio",
            mods: mods__$82,
            js: true
        },
        mods: buttonMods__$83,
        content: buttonContent__$84
    };
    var __$r__$90;
    var __$l2__$91 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8192;
    __$r__$90 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$91;
    __$r__$86 = __$r__$90;
    $$mode = __$l0__$87;
    __$ctx.ctx = __$l1__$88;
    return;
}

function __$b19(__$ctx, __$ref) {
    var checkedOptions__$3 = __$ctx._checkedOptions, firstOption__$4 = __$ctx._firstOption;
    if (!checkedOptions__$3.length) {
        firstOption__$4.checked = true;
        checkedOptions__$3.push(firstOption__$4);
    }
    var __$r__$6;
    var __$l0__$7 = __$ctx._checkedOption;
    __$ctx._checkedOption = checkedOptions__$3[0];
    var __$r__$9;
    var __$l1__$10 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$9 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$10;
    __$r__$6 = __$r__$9;
    __$ctx._checkedOption = __$l0__$7;
    return;
}

function __$b20(__$ctx, __$ref) {
    var mods__$40 = $$mods;
    var __$r__$42;
    var __$l0__$43 = $$mode;
    $$mode = "";
    var __$l1__$44 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$40.size,
            theme: mods__$40.theme,
            focused: mods__$40.focused,
            disabled: mods__$40.disabled,
            checked: mods__$40.mode !== "radio" && !!__$ctx._checkedOptions.length
        },
        id: __$ctx._select.id,
        textMaxWidth: __$ctx._select.textMaxWidth,
        content: [ function __$lb__$45() {
            var __$r__$46;
            var __$l3__$47 = $$mode;
            $$mode = "content";
            __$r__$46 = applyc(__$ctx, __$ref);
            $$mode = __$l3__$47;
            return __$r__$46;
        }(), {
            block: "icon",
            mix: {
                block: "select",
                elem: "tick"
            }
        } ]
    };
    var __$r__$48;
    var __$l2__$49 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$48 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$49;
    __$r__$42 = __$r__$48;
    $$mode = __$l0__$43;
    __$ctx.ctx = __$l1__$44;
    return;
}

function __$b21(__$ctx, __$ref) {
    var mods__$30 = $$mods, optionToMenuItem__$31 = function(option) {
        var res__$32 = {
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
            res__$32.js.text = option.text;
            res__$32.content = [ option.icon, res__$32.content ];
        }
        return res__$32;
    };
    var __$r__$34;
    var __$l0__$35 = $$mode;
    $$mode = "";
    var __$l1__$36 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "menu",
        mix: {
            block: $$block,
            elem: $$elem
        },
        mods: {
            size: mods__$30.size,
            theme: mods__$30.theme,
            disabled: mods__$30.disabled,
            mode: mods__$30.mode
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
                content: optionOrGroup.group.map(optionToMenuItem__$31)
            } : optionToMenuItem__$31(optionOrGroup);
        })
    };
    var __$r__$38;
    var __$l2__$39 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$38 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$39;
    __$r__$34 = __$r__$38;
    $$mode = __$l0__$35;
    __$ctx.ctx = __$l1__$36;
    return;
}

function __$b22(__$ctx, __$ref) {
    if (!$$mods.mode) throw Error("Can't build select without mode modifier");
    var options__$55 = __$ctx.ctx.options, i__$56 = 0, j__$57, optionOrGroup__$58, option__$59, firstOption__$60, checkedOptions__$61 = [];
    while (optionOrGroup__$58 = options__$55[i__$56++]) {
        if (optionOrGroup__$58.group) {
            j__$57 = 0;
            while (option__$59 = optionOrGroup__$58.group[j__$57++]) {
                i__$56 === 1 && j__$57 === 1 && (firstOption__$60 = option__$59);
                option__$59.checked && checkedOptions__$61.push(option__$59);
            }
        } else {
            i__$56 === 1 && (firstOption__$60 = optionOrGroup__$58);
            optionOrGroup__$58.checked && checkedOptions__$61.push(optionOrGroup__$58);
        }
    }
    var __$r__$63;
    var __$l0__$64 = __$ctx._select;
    __$ctx._select = __$ctx.ctx;
    var __$l1__$65 = __$ctx._checkedOptions;
    __$ctx._checkedOptions = checkedOptions__$61;
    var __$l2__$66 = __$ctx._firstOption;
    __$ctx._firstOption = firstOption__$60;
    var __$r__$68;
    var __$l3__$69 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 1024;
    __$r__$68 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$69;
    __$r__$63 = __$r__$68;
    __$ctx._select = __$l0__$64;
    __$ctx._checkedOptions = __$l1__$65;
    __$ctx._firstOption = __$l2__$66;
    return;
}

function __$b23(__$ctx, __$ref) {
    var __$r__$120;
    var __$l0__$121 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$123;
    var __$l1__$124 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 131072;
    __$r__$123 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$124;
    __$r__$120 = __$r__$123;
    __$ctx._button = __$l0__$121;
    return;
}

function __$b24(__$ctx, __$ref) {
    var __$r__$25;
    var __$l0__$26 = __$ctx._menuMods;
    __$ctx._menuMods = {
        theme: $$mods.theme,
        disabled: $$mods.disabled
    };
    var __$r__$28;
    var __$l1__$29 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 64;
    __$r__$28 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$29;
    __$r__$25 = __$r__$28;
    __$ctx._menuMods = __$l0__$26;
    delete __$ctx._menuTheme;
    return;
}

function __$b25(__$ctx, __$ref) {
    $$mods.theme = __$ctx._menuMods.theme;
    $$mods.disabled = $$mods.disabled || __$ctx._menuMods.disabled;
    var __$r__$21;
    var __$l0__$22 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$21 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$22;
    return;
}

function __$b26(__$ctx, __$ref) {
    var __$r__$76;
    var __$l0__$77 = __$ctx._input;
    __$ctx._input = __$ctx.ctx;
    var __$r__$79;
    var __$l1__$80 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4096;
    __$r__$79 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$80;
    __$r__$76 = __$r__$79;
    __$ctx._input = __$l0__$77;
    return;
}

function __$b27(__$ctx, __$ref) {
    var ctx__$97 = __$ctx.ctx, mods__$98 = $$mods, buttonMods__$99 = {
        togglable: "check",
        checked: mods__$98.checked,
        disabled: mods__$98.disabled,
        theme: mods__$98.theme,
        size: mods__$98.size
    }, buttonContent__$100 = [ {
        block: "checkbox",
        elem: "control",
        checked: mods__$98.checked,
        disabled: mods__$98.disabled,
        name: ctx__$97.name,
        val: ctx__$97.val
    }, ctx__$97.icon ];
    typeof ctx__$97.text !== "undefined" && buttonContent__$100.push({
        elem: "text",
        content: ctx__$97.text
    });
    var __$r__$102;
    var __$l0__$103 = $$mode;
    $$mode = "";
    var __$l1__$104 = __$ctx.ctx;
    __$ctx.ctx = {
        block: "button",
        mix: [ {
            block: "checkbox",
            mods: mods__$98,
            js: ctx__$97.js || true
        } ].concat(ctx__$97.mix || []),
        mods: buttonMods__$99,
        content: buttonContent__$100
    };
    var __$r__$106;
    var __$l2__$107 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16384;
    __$r__$106 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$107;
    __$r__$102 = __$r__$106;
    $$mode = __$l0__$103;
    __$ctx.ctx = __$l1__$104;
    return;
}

function __$b28(__$ctx, __$ref) {
    var url__$134 = __$ctx.ctx.url;
    var __$r__$136;
    var __$l0__$137 = $$mode;
    $$mode = "";
    var __$l1__$138 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$134 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$140;
    var __$l2__$141 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 524288;
    __$r__$140 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$141;
    __$r__$136 = __$r__$140;
    $$mode = __$l0__$137;
    __$ctx.ctx = __$l1__$138;
    return;
}

function __$b29(__$ctx, __$ref) {
    var ie__$142 = __$ctx.ctx.ie, hideRule__$143 = !ie__$142 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$142 === "!IE" ? [ ie__$142, "<!-->", "<!--" ] : [ ie__$142, "", "" ];
    var __$r__$145;
    var __$l0__$146 = $$mode;
    $$mode = "";
    var __$l3__$147 = __$ctx.ctx;
    var __$l1__$148 = __$l3__$147._ieCommented;
    __$l3__$147._ieCommented = true;
    var __$l2__$149 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$143[0] + "]>" + hideRule__$143[1], __$ctx.ctx, hideRule__$143[2] + "<![endif]-->" ];
    __$r__$145 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$146;
    __$l3__$147._ieCommented = __$l1__$148;
    __$ctx.ctx = __$l2__$149;
    return;
}

function __$b30(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$156 = __$ctx.ctx;
    var __$r__$158;
    var __$l0__$159 = $$mode;
    $$mode = "";
    var __$l1__$160 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$156.doctype || "<!DOCTYPE html>", {
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
                content: ctx__$156.title
            }, {
                block: "ua"
            }, ctx__$156.head, ctx__$156.styles, ctx__$156.favicon ? {
                elem: "favicon",
                url: ctx__$156.favicon
            } : "" ]
        }, ctx__$156 ]
    } ];
    var __$r__$162;
    var __$l2__$163 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4194304;
    __$r__$162 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$163;
    __$r__$158 = __$r__$162;
    $$mode = __$l0__$159;
    __$ctx.ctx = __$l1__$160;
    __$ctx._defPageApplied = false;
    return;
}

function __$b31(__$ctx, __$ref) {
    var BEM_INTERNAL__$164 = __$ctx.BEM.INTERNAL, ctx__$165 = __$ctx.ctx, isBEM__$166, tag__$167, res__$168;
    var __$r__$170;
    var __$l0__$171 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$172 = $$block;
    var __$r__$174;
    var __$l1__$175 = $$mode;
    $$mode = "tag";
    __$r__$174 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$175;
    tag__$167 = __$r__$174;
    typeof tag__$167 !== "undefined" || (tag__$167 = ctx__$165.tag);
    typeof tag__$167 !== "undefined" || (tag__$167 = "div");
    if (tag__$167) {
        var jsParams__$176, js__$177;
        if (vBlock__$172 && ctx__$165.js !== false) {
            var __$r__$178;
            var __$l2__$179 = $$mode;
            $$mode = "js";
            __$r__$178 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$179;
            js__$177 = __$r__$178;
            js__$177 = js__$177 ? __$ctx.extend(ctx__$165.js, js__$177 === true ? {} : js__$177) : ctx__$165.js === true ? {} : ctx__$165.js;
            js__$177 && ((jsParams__$176 = {})[BEM_INTERNAL__$164.buildClass(vBlock__$172, ctx__$165.elem)] = js__$177);
        }
        __$ctx._str += "<" + tag__$167;
        var __$r__$180;
        var __$l3__$181 = $$mode;
        $$mode = "bem";
        __$r__$180 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$181;
        isBEM__$166 = __$r__$180;
        typeof isBEM__$166 !== "undefined" || (isBEM__$166 = typeof ctx__$165.bem !== "undefined" ? ctx__$165.bem : ctx__$165.block || ctx__$165.elem);
        var __$r__$183;
        var __$l4__$184 = $$mode;
        $$mode = "cls";
        __$r__$183 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$184;
        var cls__$182 = __$r__$183;
        cls__$182 || (cls__$182 = ctx__$165.cls);
        var addJSInitClass__$185 = ctx__$165.block && jsParams__$176;
        if (isBEM__$166 || cls__$182) {
            __$ctx._str += ' class="';
            if (isBEM__$166) {
                __$ctx._str += BEM_INTERNAL__$164.buildClasses(vBlock__$172, ctx__$165.elem, ctx__$165.elemMods || ctx__$165.mods);
                var __$r__$187;
                var __$l5__$188 = $$mode;
                $$mode = "mix";
                __$r__$187 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$188;
                var mix__$186 = __$r__$187;
                ctx__$165.mix && (mix__$186 = mix__$186 ? [].concat(mix__$186, ctx__$165.mix) : ctx__$165.mix);
                if (mix__$186) {
                    var visited__$189 = {}, visitedKey__$190 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$189[visitedKey__$190(vBlock__$172, $$elem)] = true;
                    __$ctx.isArray(mix__$186) || (mix__$186 = [ mix__$186 ]);
                    for (var i__$191 = 0; i__$191 < mix__$186.length; i__$191++) {
                        var mixItem__$192 = mix__$186[i__$191], hasItem__$193 = mixItem__$192.block || mixItem__$192.elem, mixBlock__$194 = mixItem__$192.block || mixItem__$192._block || $$block, mixElem__$195 = mixItem__$192.elem || mixItem__$192._elem || $$elem;
                        hasItem__$193 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$164[hasItem__$193 ? "buildClasses" : "buildModsClasses"](mixBlock__$194, mixItem__$192.elem || mixItem__$192._elem || (mixItem__$192.block ? undefined : $$elem), mixItem__$192.elemMods || mixItem__$192.mods);
                        if (mixItem__$192.js) {
                            (jsParams__$176 || (jsParams__$176 = {}))[BEM_INTERNAL__$164.buildClass(mixBlock__$194, mixItem__$192.elem)] = mixItem__$192.js === true ? {} : mixItem__$192.js;
                            addJSInitClass__$185 || (addJSInitClass__$185 = mixBlock__$194 && !mixItem__$192.elem);
                        }
                        if (hasItem__$193 && !visited__$189[visitedKey__$190(mixBlock__$194, mixElem__$195)]) {
                            visited__$189[visitedKey__$190(mixBlock__$194, mixElem__$195)] = true;
                            var __$r__$197;
                            var __$l6__$198 = $$mode;
                            $$mode = "mix";
                            var __$l7__$199 = $$block;
                            $$block = mixBlock__$194;
                            var __$l8__$200 = $$elem;
                            $$elem = mixElem__$195;
                            __$r__$197 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$198;
                            $$block = __$l7__$199;
                            $$elem = __$l8__$200;
                            var nestedMix__$196 = __$r__$197;
                            if (nestedMix__$196) {
                                for (var j__$201 = 0; j__$201 < nestedMix__$196.length; j__$201++) {
                                    var nestedItem__$202 = nestedMix__$196[j__$201];
                                    if (!nestedItem__$202.block && !nestedItem__$202.elem || !visited__$189[visitedKey__$190(nestedItem__$202.block, nestedItem__$202.elem)]) {
                                        nestedItem__$202._block = mixBlock__$194;
                                        nestedItem__$202._elem = mixElem__$195;
                                        mix__$186.splice(i__$191 + 1, 0, nestedItem__$202);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$182 && (__$ctx._str += isBEM__$166 ? " " + cls__$182 : cls__$182);
            __$ctx._str += addJSInitClass__$185 ? ' i-bem"' : '"';
        }
        if (isBEM__$166 && jsParams__$176) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$176)) + '"';
        }
        var __$r__$204;
        var __$l9__$205 = $$mode;
        $$mode = "attrs";
        __$r__$204 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$205;
        var attrs__$203 = __$r__$204;
        attrs__$203 = __$ctx.extend(attrs__$203, ctx__$165.attrs);
        if (attrs__$203) {
            var name__$206, attr__$207;
            for (name__$206 in attrs__$203) {
                attr__$207 = attrs__$203[name__$206];
                if (typeof attr__$207 === "undefined") continue;
                __$ctx._str += " " + name__$206 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$207) ? attr__$207 : __$ctx.reapply(attr__$207)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$167)) {
        __$ctx._str += "/>";
    } else {
        tag__$167 && (__$ctx._str += ">");
        var __$r__$209;
        var __$l10__$210 = $$mode;
        $$mode = "content";
        __$r__$209 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$210;
        var content__$208 = __$r__$209;
        if (content__$208 || content__$208 === 0) {
            isBEM__$166 = vBlock__$172 || $$elem;
            var __$r__$211;
            var __$l11__$212 = $$mode;
            $$mode = "";
            var __$l12__$213 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$214 = __$ctx.position;
            __$ctx.position = isBEM__$166 ? 1 : __$ctx.position;
            var __$l14__$215 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$166 ? 1 : __$ctx._listLength;
            var __$l15__$216 = __$ctx.ctx;
            __$ctx.ctx = content__$208;
            __$r__$211 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$212;
            __$ctx._notNewList = __$l12__$213;
            __$ctx.position = __$l13__$214;
            __$ctx._listLength = __$l14__$215;
            __$ctx.ctx = __$l15__$216;
        }
        tag__$167 && (__$ctx._str += "</" + tag__$167 + ">");
    }
    res__$168 = __$ctx._str;
    __$r__$170 = undefined;
    __$ctx._str = __$l0__$171;
    __$ctx._buf.push(res__$168);
    return;
}

function __$b34(__$ctx, __$ref) {
    var ctx__$54 = __$ctx.ctx;
    return {
        name: ctx__$54.name,
        optionsMaxHeight: ctx__$54.optionsMaxHeight
    };
}

function __$b46(__$ctx, __$ref) {
    var ctx__$92 = __$ctx.ctx, attrs__$93 = {
        type: "radio",
        autocomplete: "off",
        name: ctx__$92.name,
        value: ctx__$92.val
    };
    ctx__$92.checked && (attrs__$93.checked = "checked");
    ctx__$92.disabled && (attrs__$93.disabled = "disabled");
    return attrs__$93;
}

function __$b47(__$ctx, __$ref) {
    var val__$50 = __$ctx.ctx.val;
    return {
        type: "hidden",
        name: __$ctx._select.name,
        value: __$ctx.isSimple(val__$50) ? val__$50 : JSON.stringify(val__$50),
        disabled: $$mods.disabled ? "disabled" : undefined
    };
}

function __$b49(__$ctx, __$ref) {
    var ctx__$113 = __$ctx.ctx, attrs__$114 = {
        type: $$mods.type || "button",
        name: ctx__$113.name,
        value: ctx__$113.val
    };
    $$mods.disabled && (attrs__$114.disabled = "disabled");
    return __$ctx.extend(function __$lb__$115() {
        var __$r__$116;
        var __$l0__$117 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 65536;
        __$r__$116 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$117;
        return __$r__$116;
    }(), attrs__$114);
}

function __$b50(__$ctx, __$ref) {
    var ctx__$118 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$118.tabIndex,
        id: ctx__$118.id,
        title: ctx__$118.title
    };
}

function __$b54(__$ctx, __$ref) {
    var attrs__$23 = {
        role: "menu"
    };
    $$mods.disabled || (attrs__$23.tabindex = 0);
    return attrs__$23;
}

function __$b57(__$ctx, __$ref) {
    var input__$73 = __$ctx._input, attrs__$74 = {
        id: input__$73.id,
        name: input__$73.name,
        value: input__$73.val,
        maxlength: input__$73.maxLength,
        tabindex: input__$73.tabIndex,
        placeholder: input__$73.placeholder
    };
    input__$73.autocomplete === false && (attrs__$74.autocomplete = "off");
    $$mods.disabled && (attrs__$74.disabled = "disabled");
    return attrs__$74;
}

function __$b59(__$ctx, __$ref) {
    var attrs__$125 = {
        type: "checkbox",
        autocomplete: "off"
    }, ctx__$126 = __$ctx.ctx;
    attrs__$125.name = ctx__$126.name;
    attrs__$125.value = ctx__$126.val;
    ctx__$126.checked && (attrs__$125.checked = "checked");
    ctx__$126.disabled && (attrs__$125.disabled = "disabled");
    return attrs__$125;
}

function __$b103(__$ctx, __$ref) {
    var __$r__$218;
    var __$l0__$219 = $$mode;
    $$mode = "";
    var __$l1__$220 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$222;
    var __$l2__$223 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8388608;
    __$r__$222 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$223;
    __$r__$218 = __$r__$222;
    $$mode = __$l0__$219;
    __$ctx.ctx = __$l1__$220;
    return;
}

function __$b104(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$224 = __$ctx.ctx;
    if (ctx__$224 && ctx__$224 !== true || ctx__$224 === 0) {
        __$ctx._str += ctx__$224 + "";
    }
    return;
}

function __$b105(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b106(__$ctx, __$ref) {
    var ctx__$225 = __$ctx.ctx, len__$226 = ctx__$225.length, i__$227 = 0, prevPos__$228 = __$ctx.position, prevNotNewList__$229 = __$ctx._notNewList;
    if (prevNotNewList__$229) {
        __$ctx._listLength += len__$226 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$226;
    }
    __$ctx._notNewList = true;
    while (i__$227 < len__$226) (function __$lb__$230() {
        var __$r__$231;
        var __$l0__$232 = __$ctx.ctx;
        __$ctx.ctx = ctx__$225[i__$227++];
        __$r__$231 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$232;
        return __$r__$231;
    })();
    prevNotNewList__$229 || (__$ctx.position = prevPos__$228);
    return;
}

function __$b107(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$233 = __$ctx.ctx.block, vElem__$234 = __$ctx.ctx.elem, block__$235 = __$ctx._currBlock || $$block;
    var __$r__$237;
    var __$l0__$238 = $$mode;
    $$mode = "default";
    var __$l1__$239 = $$block;
    $$block = vBlock__$233 || (vElem__$234 ? block__$235 : undefined);
    var __$l2__$240 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$233 || vElem__$234 ? undefined : block__$235;
    var __$l3__$241 = $$elem;
    $$elem = vElem__$234;
    var __$l4__$242 = $$mods;
    $$mods = vBlock__$233 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$243 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$237 = undefined;
    $$mode = __$l0__$238;
    $$block = __$l1__$239;
    __$ctx._currBlock = __$l2__$240;
    $$elem = __$l3__$241;
    $$mods = __$l4__$242;
    $$elemMods = __$l5__$243;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "radio") {
        if (!$$elem) {
            var __$r = __$b1(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "select") {
        if ($$elem === "button" && $$mods && $$mods["mode"] === "radio") {
            return [ {
                elem: "text",
                content: __$ctx._checkedOption.text
            } ];
        }
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["mode"] === "radio" && (__$ctx.__$a0 & 1) === 0) {
                return [ {
                    elem: "control",
                    val: __$ctx._checkedOption.val
                }, function __$lb__$0() {
                    var __$r__$1;
                    var __$l0__$2 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1;
                    __$r__$1 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$2;
                    return __$r__$1;
                }() ];
            }
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
            var __$r = __$b6(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if ($$elem === "group" && typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 4) === 0) {
            return [ {
                elem: "group-title",
                content: __$ctx.ctx.title
            }, function __$lb__$11() {
                var __$r__$12;
                var __$l0__$13 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 4;
                __$r__$12 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$13;
                return __$r__$12;
            }() ];
        }
    } else if (__$t === "input") {
        var __$t = !$$elem;
        if (__$t) {
            if (typeof __$ctx.ctx.content !== "undefined") {
                return __$ctx.ctx.content;
            }
            return {
                elem: "box",
                content: {
                    elem: "control"
                }
            };
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            var __$r = __$b10(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        if (!$$elem) {
            var __$r = __$b11(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox-group") {
        if (!$$elem) {
            var __$r = __$b12(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "ua") {
        var __$t = !$$elem;
        if (__$t) {
            if ((__$ctx.__$a0 & 262144) === 0) {
                return [ function __$lb__$131() {
                    var __$r__$132;
                    var __$l0__$133 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 262144;
                    __$r__$132 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$133;
                    return __$r__$132;
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
            }, function __$lb__$150() {
                var __$r__$151;
                var __$l0__$152 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 1048576;
                __$r__$151 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$152;
                return __$r__$151;
            }() ];
        }
        if (!$$elem && (__$ctx.__$a0 & 2097152) === 0) {
            return [ function __$lb__$153() {
                var __$r__$154;
                var __$l0__$155 = __$ctx.__$a0;
                __$ctx.__$a0 = __$ctx.__$a0 | 2097152;
                __$r__$154 = applyc(__$ctx, __$ref);
                __$ctx.__$a0 = __$l0__$155;
                return __$r__$154;
            }(), __$ctx.ctx.scripts ];
        }
    }
    return __$ctx.ctx.content;
    return __$ref;
}

function __$g1(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "radio") {
        if (!$$elem && $$mods && $$mods["type"] === "button" && (__$ctx.__$a0 & 8192) === 0) {
            var __$r = __$b18(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "select") {
        if (!$$elem && $$mods && $$mods["mode"] === "radio" && __$ctx._checkedOptions && (__$ctx.__$a0 & 2) === 0) {
            var __$r = __$b19(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$t = $$elem;
        if (__$t === "button") {
            if ((__$ctx.__$a0 & 256) === 0) {
                var __$r = __$b20(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "menu") {
            if ((__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b21(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        if (!$$elem && !__$ctx._select && (__$ctx.__$a0 & 1024) === 0) {
            var __$r = __$b22(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        if (!$$elem && (__$ctx.__$a0 & 131072) === 0) {
            var __$r = __$b23(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
            var __$r = __$b24(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem && __$ctx._menuMods && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b25(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "input") {
        if (!$$elem && (__$ctx.__$a0 & 4096) === 0) {
            var __$r = __$b26(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "checkbox") {
        if (!$$elem && $$mods && $$mods["type"] === "button" && (__$ctx.__$a0 & 16384) === 0) {
            var __$r = __$b27(__$ctx, __$ref);
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
                        var __$r = __$b28(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    var __$r = __$b29(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
            }
        }
        if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 4194304) === 0) {
            var __$r = __$b30(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    }
    var __$r = __$b31(__$ctx, __$ref);
    if (__$r !== __$ref) return __$r;
    return __$ref;
}

function __$g2(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "radio") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "select") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 512) === 0) {
                var __$r = __$ctx.extend(function __$lb__$51() {
                    var __$r__$52;
                    var __$l0__$53 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 512;
                    __$r__$52 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$53;
                    return __$r__$52;
                }(), {
                    live: false
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b34(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "button") {
        var __$t = !$$elem;
        if (__$t) {
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 32768) === 0) {
                var __$r = __$ctx.extend(function __$lb__$108() {
                    var __$r__$109;
                    var __$l0__$110 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32768;
                    __$r__$109 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$110;
                    return __$r__$109;
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
            if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 16) === 0) {
                var __$r = __$ctx.extend(function __$lb__$17() {
                    var __$r__$18;
                    var __$l0__$19 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 16;
                    __$r__$18 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$19;
                    return __$r__$18;
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
    } else if (__$t === "input") {
        if (!$$elem) {
            return true;
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
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
    return __$ref;
}

function __$g3(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "radio") {
        if ($$elem === "control") {
            var __$r = __$b46(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "select") {
        if ($$elem === "control") {
            var __$r = __$b47(__$ctx, __$ref);
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
            if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 65536) === 0) {
                var __$r = __$b49(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b50(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu") {
        var __$t = $$elem;
        if (__$t === "group-title") {
            return {
                role: "presentation"
            };
        } else if (__$t === "group") {
            if (typeof __$ctx.ctx.title !== "undefined" && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$ctx.extend(function __$lb__$14() {
                    var __$r__$15;
                    var __$l0__$16 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 8;
                    __$r__$15 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$16;
                    return __$r__$15;
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
            var __$r = __$b54(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "menu-item") {
        if (!$$elem) {
            return {
                role: "menuitem"
            };
        }
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            if ($$mods && $$mods["type"] === "search" && (__$ctx.__$a0 & 2048) === 0) {
                var __$r = __$ctx.extend(function __$lb__$70() {
                    var __$r__$71;
                    var __$l0__$72 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 2048;
                    __$r__$71 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$72;
                    return __$r__$71;
                }(), {
                    type: "search"
                });
                if (__$r !== __$ref) return __$r;
            }
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
    } else if (__$t === "icon") {
        if (!$$elem && __$ctx.ctx.url) {
            return {
                style: "background-image:url(" + __$ctx.ctx.url + ")"
            };
        }
    } else if (__$t === "checkbox") {
        if ($$elem === "control") {
            var __$r = __$b59(__$ctx, __$ref);
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

function __$g4(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "radio") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "label";
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
    } else if (__$t === "input") {
        var __$t = $$elem;
        if (__$t === "control") {
            return "input";
        } else if (__$t === "box") {
            return "span";
        }
        if (!$$elem) {
            return "span";
        }
    } else if (__$t === "icon") {
        if (!$$elem) {
            return "i";
        }
    } else if (__$t === "radio-group") {
        if (!$$elem) {
            return "span";
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