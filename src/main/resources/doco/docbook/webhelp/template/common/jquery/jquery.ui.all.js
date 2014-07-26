/*!
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function (b, a) {
    function c(c, a) {
        var e = c.nodeName.toLowerCase();
        if ("area" === e) {
            var e = c.parentNode, f = e.name;
            if (!c.href || !f || "map" !== e.nodeName.toLowerCase())return!1;
            e = b("img[usemap=#" + f + "]")[0];
            return!!e && d(e)
        }
        return(/input|select|textarea|button|object/.test(e) ? !c.disabled : "a" == e ? c.href || a : a) && d(c)
    }

    function d(c) {
        return!b(c).parents().andSelf().filter(function () {
            return"hidden" === b.curCSS(this, "visibility") || b.expr.filters.hidden(this)
        }).length
    }

    b.ui = b.ui || {};
    b.ui.version || (b.extend(b.ui, {version: "1.8.14",
        keyCode: {ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91}}), b.fn.extend({_focus: b.fn.focus, focus: function (c, a) {
        return"number" === typeof c ? this.each(function () {
            var d = this;
            setTimeout(function () {
                b(d).focus();
                a && a.call(d)
            }, c)
        }) : this._focus.apply(this, arguments)
    }, scrollParent: function () {
        var c;
        c = b.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
            return/(relative|absolute|fixed)/.test(b.curCSS(this, "position", 1)) && /(auto|scroll)/.test(b.curCSS(this, "overflow", 1) + b.curCSS(this, "overflow-y", 1) + b.curCSS(this, "overflow-x", 1))
        }).eq(0) : this.parents().filter(function () {
            return/(auto|scroll)/.test(b.curCSS(this, "overflow", 1) + b.curCSS(this,
                "overflow-y", 1) + b.curCSS(this, "overflow-x", 1))
        }).eq(0);
        return/fixed/.test(this.css("position")) || !c.length ? b(document) : c
    }, zIndex: function (c) {
        if (c !== a)return this.css("zIndex", c);
        if (this.length)for (var c = b(this[0]), d; c.length && c[0] !== document;) {
            d = c.css("position");
            if ("absolute" === d || "relative" === d || "fixed" === d)if (d = parseInt(c.css("zIndex"), 10), !isNaN(d) && 0 !== d)return d;
            c = c.parent()
        }
        return 0
    }, disableSelection: function () {
        return this.bind((b.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection",
            function (b) {
                b.preventDefault()
            })
    }, enableSelection: function () {
        return this.unbind(".ui-disableSelection")
    }}), b.each(["Width", "Height"], function (c, d) {
        function e(c, a, d, g) {
            b.each(f, function () {
                a -= parseFloat(b.curCSS(c, "padding" + this, !0)) || 0;
                d && (a -= parseFloat(b.curCSS(c, "border" + this + "Width", !0)) || 0);
                g && (a -= parseFloat(b.curCSS(c, "margin" + this, !0)) || 0)
            });
            return a
        }

        var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"], i = d.toLowerCase(), j = {innerWidth: b.fn.innerWidth, innerHeight: b.fn.innerHeight, outerWidth: b.fn.outerWidth,
            outerHeight: b.fn.outerHeight};
        b.fn["inner" + d] = function (f) {
            return f === a ? j["inner" + d].call(this) : this.each(function () {
                b(this).css(i, e(this, f) + "px")
            })
        };
        b.fn["outer" + d] = function (f, c) {
            return"number" !== typeof f ? j["outer" + d].call(this, f) : this.each(function () {
                b(this).css(i, e(this, f, !0, c) + "px")
            })
        }
    }), b.extend(b.expr[":"], {data: function (c, a, d) {
        return!!b.data(c, d[3])
    }, focusable: function (a) {
        return c(a, !isNaN(b.attr(a, "tabindex")))
    }, tabbable: function (a) {
        var d = b.attr(a, "tabindex"), e = isNaN(d);
        return(e || 0 <= d) && c(a,
            !e)
    }}), b(function () {
        var c = document.body, a = c.appendChild(a = document.createElement("div"));
        b.extend(a.style, {minHeight: "100px", height: "auto", padding: 0, borderWidth: 0});
        b.support.minHeight = 100 === a.offsetHeight;
        b.support.selectstart = "onselectstart"in a;
        c.removeChild(a).style.display = "none"
    }), b.extend(b.ui, {plugin: {add: function (c, a, d) {
        var c = b.ui[c].prototype, f;
        for (f in d)c.plugins[f] = c.plugins[f] || [], c.plugins[f].push([a, d[f]])
    }, call: function (b, c, a) {
        if ((c = b.plugins[c]) && b.element[0].parentNode)for (var f =
            0; f < c.length; f++)b.options[c[f][0]] && c[f][1].apply(b.element, a)
    }}, contains: function (b, c) {
        return document.compareDocumentPosition ? b.compareDocumentPosition(c) & 16 : b !== c && b.contains(c)
    }, hasScroll: function (c, a) {
        if ("hidden" === b(c).css("overflow"))return!1;
        var d = a && "left" === a ? "scrollLeft" : "scrollTop", f = !1;
        if (0 < c[d])return!0;
        c[d] = 1;
        f = 0 < c[d];
        c[d] = 0;
        return f
    }, isOverAxis: function (b, c, a) {
        return b > c && b < c + a
    }, isOver: function (c, a, d, f, i, j) {
        return b.ui.isOverAxis(c, d, i) && b.ui.isOverAxis(a, f, j)
    }}))
})(jQuery);
(function (b, a) {
    if (b.cleanData) {
        var c = b.cleanData;
        b.cleanData = function (a) {
            for (var d = 0, e; null != (e = a[d]); d++)b(e).triggerHandler("remove");
            c(a)
        }
    } else {
        var d = b.fn.remove;
        b.fn.remove = function (c, a) {
            return this.each(function () {
                a || (!c || b.filter(c, [this]).length) && b("*", this).add([this]).each(function () {
                    b(this).triggerHandler("remove")
                });
                return d.call(b(this), c, a)
            })
        }
    }
    b.widget = function (c, a, d) {
        var f = c.split(".")[0], i, c = c.split(".")[1];
        i = f + "-" + c;
        d || (d = a, a = b.Widget);
        b.expr[":"][i] = function (f) {
            return!!b.data(f,
                c)
        };
        b[f] = b[f] || {};
        b[f][c] = function (b, f) {
            arguments.length && this._createWidget(b, f)
        };
        a = new a;
        a.options = b.extend(!0, {}, a.options);
        b[f][c].prototype = b.extend(!0, a, {namespace: f, widgetName: c, widgetEventPrefix: b[f][c].prototype.widgetEventPrefix || c, widgetBaseClass: i}, d);
        b.widget.bridge(c, b[f][c])
    };
    b.widget.bridge = function (c, d) {
        b.fn[c] = function (e) {
            var f = "string" === typeof e, i = Array.prototype.slice.call(arguments, 1), j = this, e = !f && i.length ? b.extend.apply(null, [!0, e].concat(i)) : e;
            if (f && "_" === e.charAt(0))return j;
            f ? this.each(function () {
                var f = b.data(this, c), d = f && b.isFunction(f[e]) ? f[e].apply(f, i) : f;
                if (d !== f && d !== a)return j = d, !1
            }) : this.each(function () {
                var f = b.data(this, c);
                f ? f.option(e || {})._init() : b.data(this, c, new d(e, this))
            });
            return j
        }
    };
    b.Widget = function (b, c) {
        arguments.length && this._createWidget(b, c)
    };
    b.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", options: {disabled: !1}, _createWidget: function (c, a) {
        b.data(a, this.widgetName, this);
        this.element = b(a);
        this.options = b.extend(!0, {}, this.options, this._getCreateOptions(),
            c);
        var d = this;
        this.element.bind("remove." + this.widgetName, function () {
            d.destroy()
        });
        this._create();
        this._trigger("create");
        this._init()
    }, _getCreateOptions: function () {
        return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
    }, _create: function () {
    }, _init: function () {
    }, destroy: function () {
        this.element.unbind("." + this.widgetName).removeData(this.widgetName);
        this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
    }, widget: function () {
        return this.element
    },
        option: function (c, d) {
            var e = c;
            if (0 === arguments.length)return b.extend({}, this.options);
            if ("string" === typeof c) {
                if (d === a)return this.options[c];
                e = {};
                e[c] = d
            }
            this._setOptions(e);
            return this
        }, _setOptions: function (c) {
            var a = this;
            b.each(c, function (b, f) {
                a._setOption(b, f)
            });
            return this
        }, _setOption: function (b, c) {
            this.options[b] = c;
            "disabled" === b && this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c);
            return this
        }, enable: function () {
            return this._setOption("disabled",
                !1)
        }, disable: function () {
            return this._setOption("disabled", !0)
        }, _trigger: function (c, a, d) {
            var f = this.options[c], a = b.Event(a);
            a.type = (c === this.widgetEventPrefix ? c : this.widgetEventPrefix + c).toLowerCase();
            d = d || {};
            if (a.originalEvent)for (var c = b.event.props.length, i; c;)i = b.event.props[--c], a[i] = a.originalEvent[i];
            this.element.trigger(a, d);
            return!(b.isFunction(f) && !1 === f.call(this.element[0], a, d) || a.isDefaultPrevented())
        }}
})(jQuery);
(function (b) {
    var a = !1;
    b(document).mousedown(function () {
        a = !1
    });
    b.widget("ui.mouse", {options: {cancel: ":input,option", distance: 1, delay: 0}, _mouseInit: function () {
        var c = this;
        this.element.bind("mousedown." + this.widgetName,function (b) {
            return c._mouseDown(b)
        }).bind("click." + this.widgetName, function (a) {
            if (!0 === b.data(a.target, c.widgetName + ".preventClickEvent"))return b.removeData(a.target, c.widgetName + ".preventClickEvent"), a.stopImmediatePropagation(), !1
        });
        this.started = !1
    }, _mouseDestroy: function () {
        this.element.unbind("." +
            this.widgetName)
    }, _mouseDown: function (c) {
        if (!a) {
            this._mouseStarted && this._mouseUp(c);
            this._mouseDownEvent = c;
            var d = this, g = 1 == c.which, h = "string" == typeof this.options.cancel ? b(c.target).closest(this.options.cancel).length : !1;
            if (!g || h || !this._mouseCapture(c))return!0;
            this.mouseDelayMet = !this.options.delay;
            this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                d.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = !1 !== this._mouseStart(c),
                !this._mouseStarted))return c.preventDefault(), !0;
            !0 === b.data(c.target, this.widgetName + ".preventClickEvent") && b.removeData(c.target, this.widgetName + ".preventClickEvent");
            this._mouseMoveDelegate = function (b) {
                return d._mouseMove(b)
            };
            this._mouseUpDelegate = function (b) {
                return d._mouseUp(b)
            };
            b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            c.preventDefault();
            return a = !0
        }
    }, _mouseMove: function (c) {
        if (b.browser.msie && !(9 <= document.documentMode) && !c.button)return this._mouseUp(c);
        if (this._mouseStarted)return this._mouseDrag(c), c.preventDefault();
        this._mouseDistanceMet(c) && this._mouseDelayMet(c) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, c)) ? this._mouseDrag(c) : this._mouseUp(c));
        return!this._mouseStarted
    }, _mouseUp: function (c) {
        b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        this._mouseStarted && (this._mouseStarted = !1, c.target == this._mouseDownEvent.target &&
            b.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c));
        return!1
    }, _mouseDistanceMet: function (b) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - b.pageX), Math.abs(this._mouseDownEvent.pageY - b.pageY)) >= this.options.distance
    }, _mouseDelayMet: function () {
        return this.mouseDelayMet
    }, _mouseStart: function () {
    }, _mouseDrag: function () {
    }, _mouseStop: function () {
    }, _mouseCapture: function () {
        return!0
    }})
})(jQuery);
(function (b) {
    b.ui = b.ui || {};
    var a = /left|center|right/, c = /top|center|bottom/, d = b.fn.position, g = b.fn.offset;
    b.fn.position = function (g) {
        if (!g || !g.of)return d.apply(this, arguments);
        var g = b.extend({}, g), e = b(g.of), f = e[0], i = (g.collision || "flip").split(" "), j = g.offset ? g.offset.split(" ") : [0, 0], k, l, m;
        9 === f.nodeType ? (k = e.width(), l = e.height(), m = {top: 0, left: 0}) : f.setTimeout ? (k = e.width(), l = e.height(), m = {top: e.scrollTop(), left: e.scrollLeft()}) : f.preventDefault ? (g.at = "left top", k = l = 0, m = {top: g.of.pageY, left: g.of.pageX}) :
            (k = e.outerWidth(), l = e.outerHeight(), m = e.offset());
        b.each(["my", "at"], function () {
            var b = (g[this] || "").split(" ");
            b.length === 1 && (b = a.test(b[0]) ? b.concat(["center"]) : c.test(b[0]) ? ["center"].concat(b) : ["center", "center"]);
            b[0] = a.test(b[0]) ? b[0] : "center";
            b[1] = c.test(b[1]) ? b[1] : "center";
            g[this] = b
        });
        1 === i.length && (i[1] = i[0]);
        j[0] = parseInt(j[0], 10) || 0;
        1 === j.length && (j[1] = j[0]);
        j[1] = parseInt(j[1], 10) || 0;
        "right" === g.at[0] ? m.left += k : "center" === g.at[0] && (m.left += k / 2);
        "bottom" === g.at[1] ? m.top += l : "center" === g.at[1] &&
            (m.top += l / 2);
        m.left += j[0];
        m.top += j[1];
        return this.each(function () {
            var f = b(this), c = f.outerWidth(), a = f.outerHeight(), d = parseInt(b.curCSS(this, "marginLeft", true)) || 0, e = parseInt(b.curCSS(this, "marginTop", true)) || 0, r = c + d + (parseInt(b.curCSS(this, "marginRight", true)) || 0), u = a + e + (parseInt(b.curCSS(this, "marginBottom", true)) || 0), s = b.extend({}, m), v;
            if (g.my[0] === "right")s.left = s.left - c; else if (g.my[0] === "center")s.left = s.left - c / 2;
            if (g.my[1] === "bottom")s.top = s.top - a; else if (g.my[1] === "center")s.top = s.top - a / 2;
            s.left = Math.round(s.left);
            s.top = Math.round(s.top);
            v = {left: s.left - d, top: s.top - e};
            b.each(["left", "top"], function (f, d) {
                if (b.ui.position[i[f]])b.ui.position[i[f]][d](s, {targetWidth: k, targetHeight: l, elemWidth: c, elemHeight: a, collisionPosition: v, collisionWidth: r, collisionHeight: u, offset: j, my: g.my, at: g.at})
            });
            b.fn.bgiframe && f.bgiframe();
            f.offset(b.extend(s, {using: g.using}))
        })
    };
    b.ui.position = {fit: {left: function (c, a) {
        var f = b(window), f = a.collisionPosition.left + a.collisionWidth - f.width() - f.scrollLeft();
        c.left =
            0 < f ? c.left - f : Math.max(c.left - a.collisionPosition.left, c.left)
    }, top: function (c, a) {
        var f = b(window), f = a.collisionPosition.top + a.collisionHeight - f.height() - f.scrollTop();
        c.top = 0 < f ? c.top - f : Math.max(c.top - a.collisionPosition.top, c.top)
    }}, flip: {left: function (c, a) {
        if ("center" !== a.at[0]) {
            var f = b(window), f = a.collisionPosition.left + a.collisionWidth - f.width() - f.scrollLeft(), d = "left" === a.my[0] ? -a.elemWidth : "right" === a.my[0] ? a.elemWidth : 0, g = "left" === a.at[0] ? a.targetWidth : -a.targetWidth, k = -2 * a.offset[0];
            c.left +=
                0 > a.collisionPosition.left ? d + g + k : 0 < f ? d + g + k : 0
        }
    }, top: function (c, a) {
        if ("center" !== a.at[1]) {
            var f = b(window), f = a.collisionPosition.top + a.collisionHeight - f.height() - f.scrollTop(), d = "top" === a.my[1] ? -a.elemHeight : "bottom" === a.my[1] ? a.elemHeight : 0, g = "top" === a.at[1] ? a.targetHeight : -a.targetHeight, k = -2 * a.offset[1];
            c.top += 0 > a.collisionPosition.top ? d + g + k : 0 < f ? d + g + k : 0
        }
    }}};
    b.offset.setOffset || (b.offset.setOffset = function (c, a) {
        /static/.test(b.curCSS(c, "position")) && (c.style.position = "relative");
        var f = b(c), d = f.offset(),
            g = parseInt(b.curCSS(c, "top", !0), 10) || 0, k = parseInt(b.curCSS(c, "left", !0), 10) || 0, d = {top: a.top - d.top + g, left: a.left - d.left + k};
        "using"in a ? a.using.call(c, d) : f.css(d)
    }, b.fn.offset = function (c) {
        var a = this[0];
        return!a || !a.ownerDocument ? null : c ? this.each(function () {
            b.offset.setOffset(this, c)
        }) : g.call(this)
    })
})(jQuery);
(function (b) {
    b.widget("ui.draggable", b.ui.mouse, {widgetEventPrefix: "drag", options: {addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1}, _create: function () {
        "original" == this.options.helper && !/^(?:r|a|f)/.test(this.element.css("position")) &&
        (this.element[0].style.position = "relative");
        this.options.addClasses && this.element.addClass("ui-draggable");
        this.options.disabled && this.element.addClass("ui-draggable-disabled");
        this._mouseInit()
    }, destroy: function () {
        if (this.element.data("draggable"))return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
    }, _mouseCapture: function (a) {
        var c = this.options;
        if (this.helper || c.disabled || b(a.target).is(".ui-resizable-handle"))return!1;
        this.handle = this._getHandle(a);
        if (!this.handle)return!1;
        b(!0 === c.iframeFix ? "iframe" : c.iframeFix).each(function () {
            b('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1E3}).css(b(this).offset()).appendTo("body")
        });
        return!0
    }, _mouseStart: function (a) {
        var c = this.options;
        this.helper = this._createHelper(a);
        this._cacheHelperProportions();
        b.ui.ddmanager && (b.ui.ddmanager.current = this);
        this._cacheMargins();
        this.cssPosition = this.helper.css("position");
        this.scrollParent = this.helper.scrollParent();
        this.offset = this.positionAbs = this.element.offset();
        this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left};
        b.extend(this.offset, {click: {left: a.pageX - this.offset.left, top: a.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()});
        this.originalPosition = this.position = this._generatePosition(a);
        this.originalPageX = a.pageX;
        this.originalPageY =
            a.pageY;
        c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt);
        c.containment && this._setContainment();
        if (!1 === this._trigger("start", a))return this._clear(), !1;
        this._cacheHelperProportions();
        b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a);
        this.helper.addClass("ui-draggable-dragging");
        this._mouseDrag(a, !0);
        b.ui.ddmanager && b.ui.ddmanager.dragStart(this, a);
        return!0
    }, _mouseDrag: function (a, c) {
        this.position = this._generatePosition(a);
        this.positionAbs = this._convertPositionTo("absolute");
        if (!c) {
            var d = this._uiHash();
            if (!1 === this._trigger("drag", a, d))return this._mouseUp({}), !1;
            this.position = d.position
        }
        if (!this.options.axis || "y" != this.options.axis)this.helper[0].style.left = this.position.left + "px";
        if (!this.options.axis || "x" != this.options.axis)this.helper[0].style.top = this.position.top + "px";
        b.ui.ddmanager && b.ui.ddmanager.drag(this, a);
        return!1
    }, _mouseStop: function (a) {
        var c = !1;
        b.ui.ddmanager && !this.options.dropBehaviour && (c = b.ui.ddmanager.drop(this, a));
        this.dropped && (c = this.dropped, this.dropped = !1);
        if ((!this.element[0] || !this.element[0].parentNode) && "original" == this.options.helper)return!1;
        if ("invalid" == this.options.revert && !c || "valid" == this.options.revert && c || !0 === this.options.revert || b.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
            var d = this;
            b(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                d._trigger("stop", a) !== false && d._clear()
            })
        } else!1 !== this._trigger("stop", a) && this._clear();
        return!1
    }, _mouseUp: function (a) {
        !0 ===
            this.options.iframeFix && b("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this)
        });
        b.ui.ddmanager && b.ui.ddmanager.dragStop(this, a);
        return b.ui.mouse.prototype._mouseUp.call(this, a)
    }, cancel: function () {
        this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
        return this
    }, _getHandle: function (a) {
        var c = !this.options.handle || !b(this.options.handle, this.element).length ? !0 : !1;
        b(this.options.handle, this.element).find("*").andSelf().each(function () {
            this == a.target && (c = !0)
        });
        return c
    }, _createHelper: function (a) {
        var c = this.options, a = b.isFunction(c.helper) ? b(c.helper.apply(this.element[0], [a])) : "clone" == c.helper ? this.element.clone().removeAttr("id") : this.element;
        a.parents("body").length || a.appendTo("parent" == c.appendTo ? this.element[0].parentNode : c.appendTo);
        a[0] != this.element[0] && !/(fixed|absolute)/.test(a.css("position")) && a.css("position", "absolute");
        return a
    }, _adjustOffsetFromHelper: function (a) {
        "string" == typeof a && (a = a.split(" "));
        b.isArray(a) && (a = {left: +a[0], top: +a[1] ||
            0});
        "left"in a && (this.offset.click.left = a.left + this.margins.left);
        "right"in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
        "top"in a && (this.offset.click.top = a.top + this.margins.top);
        "bottom"in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var a = this.offsetParent.offset();
        "absolute" == this.cssPosition && (this.scrollParent[0] != document && b.ui.contains(this.scrollParent[0],
            this.offsetParent[0])) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop());
        if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && b.browser.msie)a = {top: 0, left: 0};
        return{top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" == this.cssPosition) {
            var b = this.element.position();
            return{top: b.top -
                (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: b.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(),
            height: this.helper.outerHeight()}
    }, _setContainment: function () {
        var a = this.options;
        "parent" == a.containment && (a.containment = this.helper[0].parentNode);
        if ("document" == a.containment || "window" == a.containment)this.containment = ["document" == a.containment ? 0 : b(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == a.containment ? 0 : b(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == a.containment ? 0 : b(window).scrollLeft()) + b("document" == a.containment ? document :
            window).width() - this.helperProportions.width - this.margins.left, ("document" == a.containment ? 0 : b(window).scrollTop()) + (b("document" == a.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
        if (!/^(document|window|parent)$/.test(a.containment) && a.containment.constructor != Array) {
            var a = b(a.containment), c = a[0];
            if (c) {
                a.offset();
                var d = "hidden" != b(c).css("overflow");
                this.containment = [(parseInt(b(c).css("borderLeftWidth"), 10) || 0) + (parseInt(b(c).css("paddingLeft"),
                    10) || 0), (parseInt(b(c).css("borderTopWidth"), 10) || 0) + (parseInt(b(c).css("paddingTop"), 10) || 0), (d ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(b(c).css("borderLeftWidth"), 10) || 0) - (parseInt(b(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (d ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(b(c).css("borderTopWidth"), 10) || 0) - (parseInt(b(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                this.relative_container = a
            }
        } else a.containment.constructor == Array && (this.containment = a.containment)
    }, _convertPositionTo: function (a, c) {
        c || (c = this.position);
        var d = "absolute" == a ? 1 : -1, g = "absolute" == this.cssPosition && !(this.scrollParent[0] != document && b.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, h = /(html|body)/i.test(g[0].tagName);
        return{top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (b.browser.safari && 526 > b.browser.version && "fixed" == this.cssPosition ?
            0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : g.scrollTop()) * d), left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (b.browser.safari && 526 > b.browser.version && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : g.scrollLeft()) * d)}
    }, _generatePosition: function (a) {
        var c = this.options, d = "absolute" == this.cssPosition && !(this.scrollParent[0] != document && b.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
            g = /(html|body)/i.test(d[0].tagName), h = a.pageX, e = a.pageY;
        if (this.originalPosition) {
            var f;
            this.containment && (this.relative_container ? (f = this.relative_container.offset(), f = [this.containment[0] + f.left, this.containment[1] + f.top, this.containment[2] + f.left, this.containment[3] + f.top]) : f = this.containment, a.pageX - this.offset.click.left < f[0] && (h = f[0] + this.offset.click.left), a.pageY - this.offset.click.top < f[1] && (e = f[1] + this.offset.click.top), a.pageX - this.offset.click.left > f[2] && (h = f[2] + this.offset.click.left),
                a.pageY - this.offset.click.top > f[3] && (e = f[3] + this.offset.click.top));
            c.grid && (e = c.grid[1] ? this.originalPageY + Math.round((e - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY, e = f ? !(e - this.offset.click.top < f[1] || e - this.offset.click.top > f[3]) ? e : !(e - this.offset.click.top < f[1]) ? e - c.grid[1] : e + c.grid[1] : e, h = c.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX, h = f ? !(h - this.offset.click.left < f[0] || h - this.offset.click.left > f[2]) ? h : !(h - this.offset.click.left <
                f[0]) ? h - c.grid[0] : h + c.grid[0] : h)
        }
        return{top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (b.browser.safari && 526 > b.browser.version && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : g ? 0 : d.scrollTop()), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (b.browser.safari && 526 > b.browser.version && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : g ? 0 : d.scrollLeft())}
    }, _clear: function () {
        this.helper.removeClass("ui-draggable-dragging");
        this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove();
        this.helper = null;
        this.cancelHelperRemoval = !1
    }, _trigger: function (a, c, d) {
        d = d || this._uiHash();
        b.ui.plugin.call(this, a, [c, d]);
        "drag" == a && (this.positionAbs = this._convertPositionTo("absolute"));
        return b.Widget.prototype._trigger.call(this, a, c, d)
    }, plugins: {}, _uiHash: function () {
        return{helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
    }});
    b.extend(b.ui.draggable, {version: "1.8.14"});
    b.ui.plugin.add("draggable", "connectToSortable", {start: function (a, c) {
        var d = b(this).data("draggable"), g = d.options, h = b.extend({}, c, {item: d.element});
        d.sortables = [];
        b(g.connectToSortable).each(function () {
            var c = b.data(this, "sortable");
            c && !c.options.disabled && (d.sortables.push({instance: c, shouldRevert: c.options.revert}), c.refreshPositions(), c._trigger("activate", a, h))
        })
    }, stop: function (a, c) {
        var d = b(this).data("draggable"), g = b.extend({}, c, {item: d.element});
        b.each(d.sortables, function () {
            this.instance.isOver ?
                (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(a), this.instance.options.helper = this.instance.options._helper, "original" == d.options.helper && this.instance.currentItem.css({top: "auto", left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", a, g))
        })
    }, drag: function (a, c) {
        var d = b(this).data("draggable"), g = this;
        b.each(d.sortables, function () {
            this.instance.positionAbs =
                d.positionAbs;
            this.instance.helperProportions = d.helperProportions;
            this.instance.offset.click = d.offset.click;
            this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = b(g).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                return c.helper[0]
            }, a.target = this.instance.currentItem[0], this.instance._mouseCapture(a,
                !0), this.instance._mouseStart(a, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", a), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(a)) : this.instance.isOver &&
                (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", a, this.instance._uiHash(this.instance)), this.instance._mouseStop(a, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", a), d.dropped = !1)
        })
    }});
    b.ui.plugin.add("draggable", "cursor", {start: function () {
        var a = b("body"), c = b(this).data("draggable").options;
        a.css("cursor") && (c._cursor = a.css("cursor"));
        a.css("cursor", c.cursor)
    }, stop: function () {
        var a = b(this).data("draggable").options;
        a._cursor && b("body").css("cursor", a._cursor)
    }});
    b.ui.plugin.add("draggable", "opacity", {start: function (a, c) {
        var d = b(c.helper), g = b(this).data("draggable").options;
        d.css("opacity") && (g._opacity = d.css("opacity"));
        d.css("opacity", g.opacity)
    }, stop: function (a, c) {
        var d = b(this).data("draggable").options;
        d._opacity && b(c.helper).css("opacity", d._opacity)
    }});
    b.ui.plugin.add("draggable",
        "scroll", {start: function () {
            var a = b(this).data("draggable");
            a.scrollParent[0] != document && "HTML" != a.scrollParent[0].tagName && (a.overflowOffset = a.scrollParent.offset())
        }, drag: function (a) {
            var c = b(this).data("draggable"), d = c.options, g = !1;
            if (c.scrollParent[0] != document && "HTML" != c.scrollParent[0].tagName) {
                if (!d.axis || "x" != d.axis)c.overflowOffset.top + c.scrollParent[0].offsetHeight - a.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = g = c.scrollParent[0].scrollTop + d.scrollSpeed : a.pageY - c.overflowOffset.top <
                    d.scrollSensitivity && (c.scrollParent[0].scrollTop = g = c.scrollParent[0].scrollTop - d.scrollSpeed);
                if (!d.axis || "y" != d.axis)c.overflowOffset.left + c.scrollParent[0].offsetWidth - a.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = g = c.scrollParent[0].scrollLeft + d.scrollSpeed : a.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = g = c.scrollParent[0].scrollLeft - d.scrollSpeed)
            } else {
                if (!d.axis || "x" != d.axis)a.pageY - b(document).scrollTop() < d.scrollSensitivity ? g = b(document).scrollTop(b(document).scrollTop() -
                    d.scrollSpeed) : b(window).height() - (a.pageY - b(document).scrollTop()) < d.scrollSensitivity && (g = b(document).scrollTop(b(document).scrollTop() + d.scrollSpeed));
                if (!d.axis || "y" != d.axis)a.pageX - b(document).scrollLeft() < d.scrollSensitivity ? g = b(document).scrollLeft(b(document).scrollLeft() - d.scrollSpeed) : b(window).width() - (a.pageX - b(document).scrollLeft()) < d.scrollSensitivity && (g = b(document).scrollLeft(b(document).scrollLeft() + d.scrollSpeed))
            }
            !1 !== g && (b.ui.ddmanager && !d.dropBehaviour) && b.ui.ddmanager.prepareOffsets(c,
                a)
        }});
    b.ui.plugin.add("draggable", "snap", {start: function () {
        var a = b(this).data("draggable"), c = a.options;
        a.snapElements = [];
        b(c.snap.constructor != String ? c.snap.items || ":data(draggable)" : c.snap).each(function () {
            var c = b(this), g = c.offset();
            this != a.element[0] && a.snapElements.push({item: this, width: c.outerWidth(), height: c.outerHeight(), top: g.top, left: g.left})
        })
    }, drag: function (a, c) {
        for (var d = b(this).data("draggable"), g = d.options, h = g.snapTolerance, e = c.offset.left, f = e + d.helperProportions.width, i = c.offset.top,
                 j = i + d.helperProportions.height, k = d.snapElements.length - 1; 0 <= k; k--) {
            var l = d.snapElements[k].left, m = l + d.snapElements[k].width, p = d.snapElements[k].top, n = p + d.snapElements[k].height;
            if (l - h < e && e < m + h && p - h < i && i < n + h || l - h < e && e < m + h && p - h < j && j < n + h || l - h < f && f < m + h && p - h < i && i < n + h || l - h < f && f < m + h && p - h < j && j < n + h) {
                if ("inner" != g.snapMode) {
                    var q = Math.abs(p - j) <= h, o = Math.abs(n - i) <= h, w = Math.abs(l - f) <= h, r = Math.abs(m - e) <= h;
                    q && (c.position.top = d._convertPositionTo("relative", {top: p - d.helperProportions.height, left: 0}).top - d.margins.top);
                    o && (c.position.top = d._convertPositionTo("relative", {top: n, left: 0}).top - d.margins.top);
                    w && (c.position.left = d._convertPositionTo("relative", {top: 0, left: l - d.helperProportions.width}).left - d.margins.left);
                    r && (c.position.left = d._convertPositionTo("relative", {top: 0, left: m}).left - d.margins.left)
                }
                var u = q || o || w || r;
                if ("outer" != g.snapMode && (q = Math.abs(p - i) <= h, o = Math.abs(n - j) <= h, w = Math.abs(l - e) <= h, r = Math.abs(m - f) <= h, q && (c.position.top = d._convertPositionTo("relative", {top: p, left: 0}).top - d.margins.top), o && (c.position.top =
                    d._convertPositionTo("relative", {top: n - d.helperProportions.height, left: 0}).top - d.margins.top), w && (c.position.left = d._convertPositionTo("relative", {top: 0, left: l}).left - d.margins.left), r))c.position.left = d._convertPositionTo("relative", {top: 0, left: m - d.helperProportions.width}).left - d.margins.left;
                !d.snapElements[k].snapping && (q || o || w || r || u) && d.options.snap.snap && d.options.snap.snap.call(d.element, a, b.extend(d._uiHash(), {snapItem: d.snapElements[k].item}));
                d.snapElements[k].snapping = q || o || w || r || u
            } else d.snapElements[k].snapping &&
                d.options.snap.release && d.options.snap.release.call(d.element, a, b.extend(d._uiHash(), {snapItem: d.snapElements[k].item})), d.snapElements[k].snapping = !1
        }
    }});
    b.ui.plugin.add("draggable", "stack", {start: function () {
        var a = b(this).data("draggable").options, a = b.makeArray(b(a.stack)).sort(function (c, a) {
            return(parseInt(b(c).css("zIndex"), 10) || 0) - (parseInt(b(a).css("zIndex"), 10) || 0)
        });
        if (a.length) {
            var c = parseInt(a[0].style.zIndex) || 0;
            b(a).each(function (b) {
                this.style.zIndex = c + b
            });
            this[0].style.zIndex = c + a.length
        }
    }});
    b.ui.plugin.add("draggable", "zIndex", {start: function (a, c) {
        var d = b(c.helper), g = b(this).data("draggable").options;
        d.css("zIndex") && (g._zIndex = d.css("zIndex"));
        d.css("zIndex", g.zIndex)
    }, stop: function (a, c) {
        var d = b(this).data("draggable").options;
        d._zIndex && b(c.helper).css("zIndex", d._zIndex)
    }})
})(jQuery);
(function (b) {
    b.widget("ui.droppable", {widgetEventPrefix: "drop", options: {accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect"}, _create: function () {
        var a = this.options, c = a.accept;
        this.isover = 0;
        this.isout = 1;
        this.accept = b.isFunction(c) ? c : function (b) {
            return b.is(c)
        };
        this.proportions = {width: this.element[0].offsetWidth, height: this.element[0].offsetHeight};
        b.ui.ddmanager.droppables[a.scope] = b.ui.ddmanager.droppables[a.scope] || [];
        b.ui.ddmanager.droppables[a.scope].push(this);
        a.addClasses && this.element.addClass("ui-droppable")
    }, destroy: function () {
        for (var a = b.ui.ddmanager.droppables[this.options.scope], c = 0; c < a.length; c++)a[c] == this && a.splice(c, 1);
        this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
        return this
    }, _setOption: function (a, c) {
        "accept" == a && (this.accept = b.isFunction(c) ? c : function (b) {
            return b.is(c)
        });
        b.Widget.prototype._setOption.apply(this, arguments)
    }, _activate: function (a) {
        var c = b.ui.ddmanager.current;
        this.options.activeClass &&
        this.element.addClass(this.options.activeClass);
        c && this._trigger("activate", a, this.ui(c))
    }, _deactivate: function (a) {
        var c = b.ui.ddmanager.current;
        this.options.activeClass && this.element.removeClass(this.options.activeClass);
        c && this._trigger("deactivate", a, this.ui(c))
    }, _over: function (a) {
        var c = b.ui.ddmanager.current;
        if (c && (c.currentItem || c.element)[0] != this.element[0])if (this.accept.call(this.element[0], c.currentItem || c.element))this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over",
            a, this.ui(c))
    }, _out: function (a) {
        var c = b.ui.ddmanager.current;
        if (c && (c.currentItem || c.element)[0] != this.element[0])if (this.accept.call(this.element[0], c.currentItem || c.element))this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", a, this.ui(c))
    }, _drop: function (a, c) {
        var d = c || b.ui.ddmanager.current;
        if (!d || (d.currentItem || d.element)[0] == this.element[0])return!1;
        var g = !1;
        this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
            var c = b.data(this,
                "droppable");
            if (c.options.greedy && !c.options.disabled && c.options.scope == d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && b.ui.intersect(d, b.extend(c, {offset: c.element.offset()}), c.options.tolerance))return g = !0, !1
        });
        return g ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", a, this.ui(d)), this.element) :
            !1
    }, ui: function (b) {
        return{draggable: b.currentItem || b.element, helper: b.helper, position: b.position, offset: b.positionAbs}
    }});
    b.extend(b.ui.droppable, {version: "1.8.14"});
    b.ui.intersect = function (a, c, d) {
        if (!c.offset)return!1;
        var g = (a.positionAbs || a.position.absolute).left, h = g + a.helperProportions.width, e = (a.positionAbs || a.position.absolute).top, f = e + a.helperProportions.height, i = c.offset.left, j = i + c.proportions.width, k = c.offset.top, l = k + c.proportions.height;
        switch (d) {
            case "fit":
                return i <= g && h <= j && k <= e && f <= l;
            case "intersect":
                return i < g + a.helperProportions.width / 2 && h - a.helperProportions.width / 2 < j && k < e + a.helperProportions.height / 2 && f - a.helperProportions.height / 2 < l;
            case "pointer":
                return b.ui.isOver((a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, k, i, c.proportions.height, c.proportions.width);
            case "touch":
                return(e >= k && e <= l || f >= k && f <= l || e < k && f > l) && (g >= i && g <= j || h >= i && h <= j || g < i && h > j);
            default:
                return!1
        }
    };
    b.ui.ddmanager = {current: null, droppables: {"default": []}, prepareOffsets: function (a, c) {
        var d = b.ui.ddmanager.droppables[a.options.scope] || [], g = c ? c.type : null, h = (a.currentItem || a.element).find(":data(droppable)").andSelf(), e = 0;
        a:for (; e < d.length; e++)if (!(d[e].options.disabled || a && !d[e].accept.call(d[e].element[0], a.currentItem || a.element))) {
            for (var f = 0; f < h.length; f++)if (h[f] == d[e].element[0]) {
                d[e].proportions.height = 0;
                continue a
            }
            d[e].visible = "none" != d[e].element.css("display");
            d[e].visible && ("mousedown" ==
                g && d[e]._activate.call(d[e], c), d[e].offset = d[e].element.offset(), d[e].proportions = {width: d[e].element[0].offsetWidth, height: d[e].element[0].offsetHeight})
        }
    }, drop: function (a, c) {
        var d = !1;
        b.each(b.ui.ddmanager.droppables[a.options.scope] || [], function () {
            if (this.options && (!this.options.disabled && (this.visible && b.ui.intersect(a, this, this.options.tolerance)) && (d = d || this._drop.call(this, c)), !this.options.disabled && this.visible && this.accept.call(this.element[0], a.currentItem || a.element)))this.isout = 1, this.isover =
                0, this._deactivate.call(this, c)
        });
        return d
    }, dragStart: function (a, c) {
        a.element.parentsUntil("body").bind("scroll.droppable", function () {
            a.options.refreshPositions || b.ui.ddmanager.prepareOffsets(a, c)
        })
    }, drag: function (a, c) {
        a.options.refreshPositions && b.ui.ddmanager.prepareOffsets(a, c);
        b.each(b.ui.ddmanager.droppables[a.options.scope] || [], function () {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
                var d = b.ui.intersect(a, this, this.options.tolerance);
                if (d = !d && 1 == this.isover ? "isout" : d && 0 == this.isover ?
                    "isover" : null) {
                    var g;
                    if (this.options.greedy) {
                        var h = this.element.parents(":data(droppable):eq(0)");
                        h.length && (g = b.data(h[0], "droppable"), g.greedyChild = "isover" == d ? 1 : 0)
                    }
                    g && "isover" == d && (g.isover = 0, g.isout = 1, g._out.call(g, c));
                    this[d] = 1;
                    this["isout" == d ? "isover" : "isout"] = 0;
                    this["isover" == d ? "_over" : "_out"].call(this, c);
                    g && "isout" == d && (g.isout = 0, g.isover = 1, g._over.call(g, c))
                }
            }
        })
    }, dragStop: function (a, c) {
        a.element.parentsUntil("body").unbind("scroll.droppable");
        a.options.refreshPositions || b.ui.ddmanager.prepareOffsets(a,
            c)
    }}
})(jQuery);
(function (b) {
    b.widget("ui.resizable", b.ui.mouse, {widgetEventPrefix: "resize", options: {alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 1E3}, _create: function () {
        var c = this, a = this.options;
        this.element.addClass("ui-resizable");
        b.extend(this, {_aspectRatio: !!a.aspectRatio, aspectRatio: a.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [],
            _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null});
        this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (/relative/.test(this.element.css("position")) && b.browser.opera && this.element.css({position: "relative", top: "auto", left: "auto"}), this.element.wrap(b('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left")})),
            this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize",
            "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static", zoom: 1, display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize());
        this.handles = a.handles || (!b(".ui-resizable-handle", this.element).length ? "e,s,se" : {n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw"});
        if (this.handles.constructor == String) {
            "all" ==
                this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
            var h = this.handles.split(",");
            this.handles = {};
            for (var e = 0; e < h.length; e++) {
                var f = b.trim(h[e]), i = b('<div class="ui-resizable-handle ui-resizable-' + f + '"></div>');
                /sw|se|ne|nw/.test(f) && i.css({zIndex: ++a.zIndex});
                "se" == f && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                this.handles[f] = ".ui-resizable-" + f;
                this.element.append(i)
            }
        }
        this._renderAxis = function (f) {
            var f = f || this.element, c;
            for (c in this.handles) {
                this.handles[c].constructor == String && (this.handles[c] =
                    b(this.handles[c], this.element).show());
                if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                    var a = b(this.handles[c], this.element), d = 0, d = /sw|ne|nw|se|n|s/.test(c) ? a.outerHeight() : a.outerWidth(), a = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join("");
                    f.css(a, d);
                    this._proportionallyResize()
                }
                b(this.handles[c])
            }
        };
        this._renderAxis(this.element);
        this._handles = b(".ui-resizable-handle", this.element).disableSelection();
        this._handles.mouseover(function () {
            if (!c.resizing) {
                if (this.className)var b = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                c.axis = b && b[1] ? b[1] : "se"
            }
        });
        a.autoHide && (this._handles.hide(), b(this.element).addClass("ui-resizable-autohide").hover(function () {
            if (!a.disabled) {
                b(this).removeClass("ui-resizable-autohide");
                c._handles.show()
            }
        }, function () {
            if (!a.disabled && !c.resizing) {
                b(this).addClass("ui-resizable-autohide");
                c._handles.hide()
            }
        }));
        this._mouseInit()
    }, destroy: function () {
        this._mouseDestroy();
        var c = function (c) {
            b(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
        };
        if (this.elementIsWrapper) {
            c(this.element);
            var a = this.element;
            a.after(this.originalElement.css({position: a.css("position"), width: a.outerWidth(), height: a.outerHeight(), top: a.css("top"), left: a.css("left")})).remove()
        }
        this.originalElement.css("resize", this.originalResizeStyle);
        c(this.originalElement);
        return this
    }, _mouseCapture: function (c) {
        var a =
            !1, h;
        for (h in this.handles)b(this.handles[h])[0] == c.target && (a = !0);
        return!this.options.disabled && a
    }, _mouseStart: function (c) {
        var g = this.options, h = this.element.position(), e = this.element;
        this.resizing = !0;
        this.documentScroll = {top: b(document).scrollTop(), left: b(document).scrollLeft()};
        (e.is(".ui-draggable") || /absolute/.test(e.css("position"))) && e.css({position: "absolute", top: h.top, left: h.left});
        b.browser.opera && /relative/.test(e.css("position")) && e.css({position: "relative", top: "auto", left: "auto"});
        this._renderProxy();
        var h = a(this.helper.css("left")), f = a(this.helper.css("top"));
        g.containment && (h += b(g.containment).scrollLeft() || 0, f += b(g.containment).scrollTop() || 0);
        this.offset = this.helper.offset();
        this.position = {left: h, top: f};
        this.size = this._helper ? {width: e.outerWidth(), height: e.outerHeight()} : {width: e.width(), height: e.height()};
        this.originalSize = this._helper ? {width: e.outerWidth(), height: e.outerHeight()} : {width: e.width(), height: e.height()};
        this.originalPosition = {left: h, top: f};
        this.sizeDiff = {width: e.outerWidth() -
            e.width(), height: e.outerHeight() - e.height()};
        this.originalMousePosition = {left: c.pageX, top: c.pageY};
        this.aspectRatio = "number" == typeof g.aspectRatio ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
        g = b(".ui-resizable-" + this.axis).css("cursor");
        b("body").css("cursor", "auto" == g ? this.axis + "-resize" : g);
        e.addClass("ui-resizable-resizing");
        this._propagate("start", c);
        return!0
    }, _mouseDrag: function (b) {
        var c = this.helper, a = this.originalMousePosition, e = this._change[this.axis];
        if (!e)return!1;
        a =
            e.apply(this, [b, b.pageX - a.left || 0, b.pageY - a.top || 0]);
        this._updateVirtualBoundaries(b.shiftKey);
        if (this._aspectRatio || b.shiftKey)a = this._updateRatio(a, b);
        a = this._respectSize(a, b);
        this._propagate("resize", b);
        c.css({top: this.position.top + "px", left: this.position.left + "px", width: this.size.width + "px", height: this.size.height + "px"});
        !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize();
        this._updateCache(a);
        this._trigger("resize", b, this.ui());
        return!1
    }, _mouseStop: function (c) {
        this.resizing = !1;
        var a = this.options;
        if (this._helper) {
            var h = this._proportionallyResizeElements, e = h.length && /textarea/i.test(h[0].nodeName), h = e && b.ui.hasScroll(h[0], "left") ? 0 : this.sizeDiff.height, e = e ? 0 : this.sizeDiff.width, e = {width: this.helper.width() - e, height: this.helper.height() - h}, h = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, f = parseInt(this.element.css("top"), 10) + (this.position.top - this.originalPosition.top) || null;
            a.animate || this.element.css(b.extend(e, {top: f, left: h}));
            this.helper.height(this.size.height);
            this.helper.width(this.size.width);
            this._helper && !a.animate && this._proportionallyResize()
        }
        b("body").css("cursor", "auto");
        this.element.removeClass("ui-resizable-resizing");
        this._propagate("stop", c);
        this._helper && this.helper.remove();
        return!1
    }, _updateVirtualBoundaries: function (b) {
        var a = this.options, h, e, f, a = {minWidth: c(a.minWidth) ? a.minWidth : 0, maxWidth: c(a.maxWidth) ? a.maxWidth : Infinity, minHeight: c(a.minHeight) ? a.minHeight : 0, maxHeight: c(a.maxHeight) ? a.maxHeight : Infinity};
        if (this._aspectRatio || b)if (b = a.minHeight * this.aspectRatio, e = a.minWidth / this.aspectRatio, h = a.maxHeight * this.aspectRatio, f = a.maxWidth / this.aspectRatio, b > a.minWidth && (a.minWidth = b), e > a.minHeight && (a.minHeight = e), h < a.maxWidth && (a.maxWidth = h), f < a.maxHeight)a.maxHeight = f;
        this._vBoundaries = a
    }, _updateCache: function (b) {
        this.offset = this.helper.offset();
        c(b.left) && (this.position.left = b.left);
        c(b.top) && (this.position.top = b.top);
        c(b.height) && (this.size.height = b.height);
        c(b.width) && (this.size.width = b.width)
    }, _updateRatio: function (b) {
        var a =
            this.position, h = this.size, e = this.axis;
        c(b.height) ? b.width = b.height * this.aspectRatio : c(b.width) && (b.height = b.width / this.aspectRatio);
        "sw" == e && (b.left = a.left + (h.width - b.width), b.top = null);
        "nw" == e && (b.top = a.top + (h.height - b.height), b.left = a.left + (h.width - b.width));
        return b
    }, _respectSize: function (b) {
        var a = this._vBoundaries, h = this.axis, e = c(b.width) && a.maxWidth && a.maxWidth < b.width, f = c(b.height) && a.maxHeight && a.maxHeight < b.height, i = c(b.width) && a.minWidth && a.minWidth > b.width, j = c(b.height) && a.minHeight && a.minHeight >
            b.height;
        i && (b.width = a.minWidth);
        j && (b.height = a.minHeight);
        e && (b.width = a.maxWidth);
        f && (b.height = a.maxHeight);
        var k = this.originalPosition.left + this.originalSize.width, l = this.position.top + this.size.height, m = /sw|nw|w/.test(h), h = /nw|ne|n/.test(h);
        i && m && (b.left = k - a.minWidth);
        e && m && (b.left = k - a.maxWidth);
        j && h && (b.top = l - a.minHeight);
        f && h && (b.top = l - a.maxHeight);
        (a = !b.width && !b.height) && !b.left && b.top ? b.top = null : a && (!b.top && b.left) && (b.left = null);
        return b
    }, _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length)for (var c =
            this.helper || this.element, a = 0; a < this._proportionallyResizeElements.length; a++) {
            var h = this._proportionallyResizeElements[a];
            if (!this.borderDif) {
                var e = [h.css("borderTopWidth"), h.css("borderRightWidth"), h.css("borderBottomWidth"), h.css("borderLeftWidth")], f = [h.css("paddingTop"), h.css("paddingRight"), h.css("paddingBottom"), h.css("paddingLeft")];
                this.borderDif = b.map(e, function (b, c) {
                    var a = parseInt(b, 10) || 0, d = parseInt(f[c], 10) || 0;
                    return a + d
                })
            }
            if (!b.browser.msie || !b(c).is(":hidden") && !b(c).parents(":hidden").length)h.css({height: c.height() -
                this.borderDif[0] - this.borderDif[2] || 0, width: c.width() - this.borderDif[1] - this.borderDif[3] || 0})
        }
    }, _renderProxy: function () {
        var c = this.options;
        this.elementOffset = this.element.offset();
        if (this._helper) {
            this.helper = this.helper || b('<div style="overflow:hidden;"></div>');
            var a = b.browser.msie && 7 > b.browser.version, h = a ? 1 : 0, a = a ? 2 : -1;
            this.helper.addClass(this._helper).css({width: this.element.outerWidth() + a, height: this.element.outerHeight() + a, position: "absolute", left: this.elementOffset.left - h + "px", top: this.elementOffset.top -
                h + "px", zIndex: ++c.zIndex});
            this.helper.appendTo("body").disableSelection()
        } else this.helper = this.element
    }, _change: {e: function (b, c) {
        return{width: this.originalSize.width + c}
    }, w: function (b, c) {
        return{left: this.originalPosition.left + c, width: this.originalSize.width - c}
    }, n: function (b, c, a) {
        return{top: this.originalPosition.top + a, height: this.originalSize.height - a}
    }, s: function (b, c, a) {
        return{height: this.originalSize.height + a}
    }, se: function (c, a, h) {
        return b.extend(this._change.s.apply(this, arguments), this._change.e.apply(this,
            [c, a, h]))
    }, sw: function (c, a, h) {
        return b.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [c, a, h]))
    }, ne: function (c, a, h) {
        return b.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [c, a, h]))
    }, nw: function (c, a, h) {
        return b.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [c, a, h]))
    }}, _propagate: function (c, a) {
        b.ui.plugin.call(this, c, [a, this.ui()]);
        "resize" != c && this._trigger(c, a, this.ui())
    }, plugins: {}, ui: function () {
        return{originalElement: this.originalElement,
            element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition}
    }});
    b.extend(b.ui.resizable, {version: "1.8.14"});
    b.ui.plugin.add("resizable", "alsoResize", {start: function () {
        var c = b(this).data("resizable").options, a = function (c) {
            b(c).each(function () {
                var c = b(this);
                c.data("resizable-alsoresize", {width: parseInt(c.width(), 10), height: parseInt(c.height(), 10), left: parseInt(c.css("left"), 10), top: parseInt(c.css("top"), 10), position: c.css("position")})
            })
        };
        "object" == typeof c.alsoResize && !c.alsoResize.parentNode ? c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], a(c.alsoResize)) : b.each(c.alsoResize, function (b) {
            a(b)
        }) : a(c.alsoResize)
    }, resize: function (c, a) {
        var h = b(this).data("resizable"), e = h.options, f = h.originalSize, i = h.originalPosition, j = {height: h.size.height - f.height || 0, width: h.size.width - f.width || 0, top: h.position.top - i.top || 0, left: h.position.left - i.left || 0}, k = function (c, f) {
            b(c).each(function () {
                var c = b(this), d = b(this).data("resizable-alsoresize"), i = {},
                    e = f && f.length ? f : c.parents(a.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                b.each(e, function (b, c) {
                    var a = (d[c] || 0) + (j[c] || 0);
                    a && 0 <= a && (i[c] = a || null)
                });
                b.browser.opera && /relative/.test(c.css("position")) && (h._revertToRelativePosition = !0, c.css({position: "absolute", top: "auto", left: "auto"}));
                c.css(i)
            })
        };
        "object" == typeof e.alsoResize && !e.alsoResize.nodeType ? b.each(e.alsoResize, function (b, c) {
            k(b, c)
        }) : k(e.alsoResize)
    }, stop: function () {
        var c = b(this).data("resizable"), a = c.options,
            h = function (c) {
                b(c).each(function () {
                    var c = b(this);
                    c.css({position: c.data("resizable-alsoresize").position})
                })
            };
        c._revertToRelativePosition && (c._revertToRelativePosition = !1, "object" == typeof a.alsoResize && !a.alsoResize.nodeType ? b.each(a.alsoResize, function (b) {
            h(b)
        }) : h(a.alsoResize));
        b(this).removeData("resizable-alsoresize")
    }});
    b.ui.plugin.add("resizable", "animate", {stop: function (c) {
        var a = b(this).data("resizable"), h = a.options, e = a._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName),
            i = f && b.ui.hasScroll(e[0], "left") ? 0 : a.sizeDiff.height, f = {width: a.size.width - (f ? 0 : a.sizeDiff.width), height: a.size.height - i}, i = parseInt(a.element.css("left"), 10) + (a.position.left - a.originalPosition.left) || null, j = parseInt(a.element.css("top"), 10) + (a.position.top - a.originalPosition.top) || null;
        a.element.animate(b.extend(f, j && i ? {top: j, left: i} : {}), {duration: h.animateDuration, easing: h.animateEasing, step: function () {
            var f = {width: parseInt(a.element.css("width"), 10), height: parseInt(a.element.css("height"), 10),
                top: parseInt(a.element.css("top"), 10), left: parseInt(a.element.css("left"), 10)};
            e && e.length && b(e[0]).css({width: f.width, height: f.height});
            a._updateCache(f);
            a._propagate("resize", c)
        }})
    }});
    b.ui.plugin.add("resizable", "containment", {start: function () {
        var c = b(this).data("resizable"), g = c.element, h = c.options.containment;
        if (g = h instanceof b ? h.get(0) : /parent/.test(h) ? g.parent().get(0) : h)if (c.containerElement = b(g), /document/.test(h) || h == document)c.containerOffset = {left: 0, top: 0}, c.containerPosition = {left: 0, top: 0},
            c.parentData = {element: b(document), left: 0, top: 0, width: b(document).width(), height: b(document).height() || document.body.parentNode.scrollHeight}; else {
            var e = b(g), f = [];
            b(["Top", "Right", "Left", "Bottom"]).each(function (b, c) {
                f[b] = a(e.css("padding" + c))
            });
            c.containerOffset = e.offset();
            c.containerPosition = e.position();
            c.containerSize = {height: e.innerHeight() - f[3], width: e.innerWidth() - f[1]};
            var h = c.containerOffset, i = c.containerSize.height, j = c.containerSize.width, j = b.ui.hasScroll(g, "left") ? g.scrollWidth : j, i = b.ui.hasScroll(g) ?
                g.scrollHeight : i;
            c.parentData = {element: g, left: h.left, top: h.top, width: j, height: i}
        }
    }, resize: function (c) {
        var a = b(this).data("resizable"), h = a.options, e = a.containerOffset, f = a.position, c = a._aspectRatio || c.shiftKey, i = {top: 0, left: 0}, j = a.containerElement;
        j[0] != document && /static/.test(j.css("position")) && (i = e);
        if (f.left < (a._helper ? e.left : 0))a.size.width += a._helper ? a.position.left - e.left : a.position.left - i.left, c && (a.size.height = a.size.width / h.aspectRatio), a.position.left = h.helper ? e.left : 0;
        if (f.top < (a._helper ?
            e.top : 0))a.size.height += a._helper ? a.position.top - e.top : a.position.top, c && (a.size.width = a.size.height * h.aspectRatio), a.position.top = a._helper ? e.top : 0;
        a.offset.left = a.parentData.left + a.position.left;
        a.offset.top = a.parentData.top + a.position.top;
        h = Math.abs(a.offset.left - i.left + a.sizeDiff.width);
        e = Math.abs((a._helper ? a.offset.top - i.top : a.offset.top - e.top) + a.sizeDiff.height);
        f = a.containerElement.get(0) == a.element.parent().get(0);
        i = /relative|absolute/.test(a.containerElement.css("position"));
        f && i && (h -= a.parentData.left);
        h + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - h, c && (a.size.height = a.size.width / a.aspectRatio));
        e + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - e, c && (a.size.width = a.size.height * a.aspectRatio))
    }, stop: function () {
        var a = b(this).data("resizable"), c = a.options, h = a.containerOffset, e = a.containerPosition, f = a.containerElement, i = b(a.helper), j = i.offset(), k = i.outerWidth() - a.sizeDiff.width, i = i.outerHeight() - a.sizeDiff.height;
        a._helper && (!c.animate && /relative/.test(f.css("position"))) &&
        b(this).css({left: j.left - e.left - h.left, width: k, height: i});
        a._helper && (!c.animate && /static/.test(f.css("position"))) && b(this).css({left: j.left - e.left - h.left, width: k, height: i})
    }});
    b.ui.plugin.add("resizable", "ghost", {start: function () {
        var a = b(this).data("resizable"), c = a.options, h = a.size;
        a.ghost = a.originalElement.clone();
        a.ghost.css({opacity: 0.25, display: "block", position: "relative", height: h.height, width: h.width, margin: 0, left: 0, top: 0}).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost :
            "");
        a.ghost.appendTo(a.helper)
    }, resize: function () {
        var a = b(this).data("resizable");
        a.ghost && a.ghost.css({position: "relative", height: a.size.height, width: a.size.width})
    }, stop: function () {
        var a = b(this).data("resizable");
        a.ghost && a.helper && a.helper.get(0).removeChild(a.ghost.get(0))
    }});
    b.ui.plugin.add("resizable", "grid", {resize: function () {
        var a = b(this).data("resizable"), c = a.options, h = a.size, e = a.originalSize, f = a.originalPosition, i = a.axis;
        c.grid = "number" == typeof c.grid ? [c.grid, c.grid] : c.grid;
        var j = Math.round((h.width -
            e.width) / (c.grid[0] || 1)) * (c.grid[0] || 1), c = Math.round((h.height - e.height) / (c.grid[1] || 1)) * (c.grid[1] || 1);
        /^(se|s|e)$/.test(i) ? (a.size.width = e.width + j, a.size.height = e.height + c) : /^(ne)$/.test(i) ? (a.size.width = e.width + j, a.size.height = e.height + c, a.position.top = f.top - c) : (/^(sw)$/.test(i) ? (a.size.width = e.width + j, a.size.height = e.height + c) : (a.size.width = e.width + j, a.size.height = e.height + c, a.position.top = f.top - c), a.position.left = f.left - j)
    }});
    var a = function (b) {
        return parseInt(b, 10) || 0
    }, c = function (b) {
        return!isNaN(parseInt(b,
            10))
    }
})(jQuery);
(function (b) {
    b.widget("ui.selectable", b.ui.mouse, {options: {appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch"}, _create: function () {
        var a = this;
        this.element.addClass("ui-selectable");
        this.dragged = !1;
        var c;
        this.refresh = function () {
            c = b(a.options.filter, a.element[0]);
            c.each(function () {
                var a = b(this), c = a.offset();
                b.data(this, "selectable-item", {element: this, $element: a, left: c.left, top: c.top, right: c.left + a.outerWidth(), bottom: c.top + a.outerHeight(), startselected: !1, selected: a.hasClass("ui-selected"), selecting: a.hasClass("ui-selecting"),
                    unselecting: a.hasClass("ui-unselecting")})
            })
        };
        this.refresh();
        this.selectees = c.addClass("ui-selectee");
        this._mouseInit();
        this.helper = b("<div class='ui-selectable-helper'></div>")
    }, destroy: function () {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item");
        this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
        this._mouseDestroy();
        return this
    }, _mouseStart: function (a) {
        var c = this;
        this.opos = [a.pageX, a.pageY];
        if (!this.options.disabled) {
            var d =
                this.options;
            this.selectees = b(d.filter, this.element[0]);
            this._trigger("start", a);
            b(d.appendTo).append(this.helper);
            this.helper.css({left: a.clientX, top: a.clientY, width: 0, height: 0});
            d.autoRefresh && this.refresh();
            this.selectees.filter(".ui-selected").each(function () {
                var d = b.data(this, "selectable-item");
                d.startselected = !0;
                a.metaKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", a, {unselecting: d.element}))
            });
            b(a.target).parents().andSelf().each(function () {
                var d =
                    b.data(this, "selectable-item");
                if (d) {
                    var h = !a.metaKey || !d.$element.hasClass("ui-selected");
                    d.$element.removeClass(h ? "ui-unselecting" : "ui-selected").addClass(h ? "ui-selecting" : "ui-unselecting");
                    d.unselecting = !h;
                    d.selecting = h;
                    (d.selected = h) ? c._trigger("selecting", a, {selecting: d.element}) : c._trigger("unselecting", a, {unselecting: d.element});
                    return!1
                }
            })
        }
    }, _mouseDrag: function (a) {
        var c = this;
        this.dragged = !0;
        if (!this.options.disabled) {
            var d = this.options, g = this.opos[0], h = this.opos[1], e = a.pageX, f = a.pageY;
            if (g >
                e)var i = e, e = g, g = i;
            h > f && (i = f, f = h, h = i);
            this.helper.css({left: g, top: h, width: e - g, height: f - h});
            this.selectees.each(function () {
                var i = b.data(this, "selectable-item");
                if (i && i.element != c.element[0]) {
                    var k = false;
                    d.tolerance == "touch" ? k = !(i.left > e || i.right < g || i.top > f || i.bottom < h) : d.tolerance == "fit" && (k = i.left > g && i.right < e && i.top > h && i.bottom < f);
                    if (k) {
                        if (i.selected) {
                            i.$element.removeClass("ui-selected");
                            i.selected = false
                        }
                        if (i.unselecting) {
                            i.$element.removeClass("ui-unselecting");
                            i.unselecting = false
                        }
                        if (!i.selecting) {
                            i.$element.addClass("ui-selecting");
                            i.selecting = true;
                            c._trigger("selecting", a, {selecting: i.element})
                        }
                    } else {
                        if (i.selecting)if (a.metaKey && i.startselected) {
                            i.$element.removeClass("ui-selecting");
                            i.selecting = false;
                            i.$element.addClass("ui-selected");
                            i.selected = true
                        } else {
                            i.$element.removeClass("ui-selecting");
                            i.selecting = false;
                            if (i.startselected) {
                                i.$element.addClass("ui-unselecting");
                                i.unselecting = true
                            }
                            c._trigger("unselecting", a, {unselecting: i.element})
                        }
                        if (i.selected && !a.metaKey && !i.startselected) {
                            i.$element.removeClass("ui-selected");
                            i.selected =
                                false;
                            i.$element.addClass("ui-unselecting");
                            i.unselecting = true;
                            c._trigger("unselecting", a, {unselecting: i.element})
                        }
                    }
                }
            });
            return!1
        }
    }, _mouseStop: function (a) {
        var c = this;
        this.dragged = !1;
        b(".ui-unselecting", this.element[0]).each(function () {
            var d = b.data(this, "selectable-item");
            d.$element.removeClass("ui-unselecting");
            d.unselecting = !1;
            d.startselected = !1;
            c._trigger("unselected", a, {unselected: d.element})
        });
        b(".ui-selecting", this.element[0]).each(function () {
            var d = b.data(this, "selectable-item");
            d.$element.removeClass("ui-selecting").addClass("ui-selected");
            d.selecting = !1;
            d.selected = !0;
            d.startselected = !0;
            c._trigger("selected", a, {selected: d.element})
        });
        this._trigger("stop", a);
        this.helper.remove();
        return!1
    }});
    b.extend(b.ui.selectable, {version: "1.8.14"})
})(jQuery);
(function (b) {
    b.widget("ui.sortable", b.ui.mouse, {widgetEventPrefix: "sort", options: {appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1E3}, _create: function () {
        var b = this.options;
        this.containerCache = {};
        this.element.addClass("ui-sortable");
        this.refresh();
        this.floating = this.items.length ? "x" === b.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1;
        this.offset = this.element.offset();
        this._mouseInit()
    }, destroy: function () {
        this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
        this._mouseDestroy();
        for (var b = this.items.length - 1; 0 <= b; b--)this.items[b].item.removeData("sortable-item");
        return this
    }, _setOption: function (a, c) {
        "disabled" === a ? (this.options[a] =
            c, this.widget()[c ? "addClass" : "removeClass"]("ui-sortable-disabled")) : b.Widget.prototype._setOption.apply(this, arguments)
    }, _mouseCapture: function (a, c) {
        if (this.reverting || this.options.disabled || "static" == this.options.type)return!1;
        this._refreshItems(a);
        var d = null, g = this;
        b(a.target).parents().each(function () {
            if (b.data(this, "sortable-item") == g)return d = b(this), !1
        });
        b.data(a.target, "sortable-item") == g && (d = b(a.target));
        if (!d)return!1;
        if (this.options.handle && !c) {
            var h = !1;
            b(this.options.handle, d).find("*").andSelf().each(function () {
                this ==
                    a.target && (h = !0)
            });
            if (!h)return!1
        }
        this.currentItem = d;
        this._removeCurrentsFromItems();
        return!0
    }, _mouseStart: function (a, c, d) {
        c = this.options;
        this.currentContainer = this;
        this.refreshPositions();
        this.helper = this._createHelper(a);
        this._cacheHelperProportions();
        this._cacheMargins();
        this.scrollParent = this.helper.scrollParent();
        this.offset = this.currentItem.offset();
        this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left};
        this.helper.css("position", "absolute");
        this.cssPosition =
            this.helper.css("position");
        b.extend(this.offset, {click: {left: a.pageX - this.offset.left, top: a.pageY - this.offset.top}, parent: this._getParentOffset(), relative: this._getRelativeOffset()});
        this.originalPosition = this._generatePosition(a);
        this.originalPageX = a.pageX;
        this.originalPageY = a.pageY;
        c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt);
        this.domPosition = {prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0]};
        this.helper[0] != this.currentItem[0] && this.currentItem.hide();
        this._createPlaceholder();
        c.containment && this._setContainment();
        c.cursor && (b("body").css("cursor") && (this._storedCursor = b("body").css("cursor")), b("body").css("cursor", c.cursor));
        c.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", c.opacity));
        c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", c.zIndex));
        this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset());
        this._trigger("start", a, this._uiHash());
        this._preserveHelperProportions || this._cacheHelperProportions();
        if (!d)for (d = this.containers.length - 1; 0 <= d; d--)this.containers[d]._trigger("activate", a, this._uiHash(this));
        b.ui.ddmanager && (b.ui.ddmanager.current = this);
        b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, a);
        this.dragging = !0;
        this.helper.addClass("ui-sortable-helper");
        this._mouseDrag(a);
        return!0
    }, _mouseDrag: function (a) {
        this.position = this._generatePosition(a);
        this.positionAbs = this._convertPositionTo("absolute");
        this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
        if (this.options.scroll) {
            var c = this.options, d = !1;
            this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : a.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left +
                this.scrollParent[0].offsetWidth - a.pageX < c.scrollSensitivity) ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : a.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed) : (a.pageY - b(document).scrollTop() < c.scrollSensitivity ? d = b(document).scrollTop(b(document).scrollTop() - c.scrollSpeed) : b(window).height() - (a.pageY - b(document).scrollTop()) < c.scrollSensitivity && (d = b(document).scrollTop(b(document).scrollTop() +
                c.scrollSpeed)), a.pageX - b(document).scrollLeft() < c.scrollSensitivity ? d = b(document).scrollLeft(b(document).scrollLeft() - c.scrollSpeed) : b(window).width() - (a.pageX - b(document).scrollLeft()) < c.scrollSensitivity && (d = b(document).scrollLeft(b(document).scrollLeft() + c.scrollSpeed)));
            !1 !== d && (b.ui.ddmanager && !c.dropBehaviour) && b.ui.ddmanager.prepareOffsets(this, a)
        }
        this.positionAbs = this._convertPositionTo("absolute");
        if (!this.options.axis || "y" != this.options.axis)this.helper[0].style.left = this.position.left +
            "px";
        if (!this.options.axis || "x" != this.options.axis)this.helper[0].style.top = this.position.top + "px";
        for (c = this.items.length - 1; 0 <= c; c--) {
            var d = this.items[c], g = d.item[0], h = this._intersectsWithPointer(d);
            if (h && g != this.currentItem[0] && this.placeholder[1 == h ? "next" : "prev"]()[0] != g && !b.ui.contains(this.placeholder[0], g) && ("semi-dynamic" == this.options.type ? !b.ui.contains(this.element[0], g) : 1)) {
                this.direction = 1 == h ? "down" : "up";
                if ("pointer" == this.options.tolerance || this._intersectsWithSides(d))this._rearrange(a,
                    d); else break;
                this._trigger("change", a, this._uiHash());
                break
            }
        }
        this._contactContainers(a);
        b.ui.ddmanager && b.ui.ddmanager.drag(this, a);
        this._trigger("sort", a, this._uiHash());
        this.lastPositionAbs = this.positionAbs;
        return!1
    }, _mouseStop: function (a, c) {
        if (a) {
            b.ui.ddmanager && !this.options.dropBehaviour && b.ui.ddmanager.drop(this, a);
            if (this.options.revert) {
                var d = this, g = d.placeholder.offset();
                d.reverting = !0;
                b(this.helper).animate({left: g.left - this.offset.parent.left - d.margins.left + (this.offsetParent[0] == document.body ?
                    0 : this.offsetParent[0].scrollLeft), top: g.top - this.offset.parent.top - d.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)}, parseInt(this.options.revert, 10) || 500, function () {
                    d._clear(a)
                })
            } else this._clear(a, c);
            return!1
        }
    }, cancel: function () {
        if (this.dragging) {
            this._mouseUp({target: null});
            "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
            for (var a = this.containers.length - 1; 0 <= a; a--)this.containers[a]._trigger("deactivate",
                null, this._uiHash(this)), this.containers[a].containerCache.over && (this.containers[a]._trigger("out", null, this._uiHash(this)), this.containers[a].containerCache.over = 0)
        }
        this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && (this.helper && this.helper[0].parentNode) && this.helper.remove(), b.extend(this, {helper: null, dragging: !1, reverting: !1, _noFinalSort: null}), this.domPosition.prev ? b(this.domPosition.prev).after(this.currentItem) :
            b(this.domPosition.parent).prepend(this.currentItem));
        return this
    }, serialize: function (a) {
        var c = this._getItemsAsjQuery(a && a.connected), d = [], a = a || {};
        b(c).each(function () {
            var c = (b(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[-=_](.+)/);
            c && d.push((a.key || c[1] + "[]") + "=" + (a.key && a.expression ? c[1] : c[2]))
        });
        !d.length && a.key && d.push(a.key + "=");
        return d.join("&")
    }, toArray: function (a) {
        var c = this._getItemsAsjQuery(a && a.connected), d = [], a = a || {};
        c.each(function () {
            d.push(b(a.item || this).attr(a.attribute ||
                "id") || "")
        });
        return d
    }, _intersectsWith: function (b) {
        var c = this.positionAbs.left, d = c + this.helperProportions.width, g = this.positionAbs.top, h = g + this.helperProportions.height, e = b.left, f = e + b.width, i = b.top, j = i + b.height, k = this.offset.click.top, l = this.offset.click.left;
        return"pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > b[this.floating ? "width" : "height"] ? g + k > i && g + k < j && c + l > e && c + l < f : e < c + this.helperProportions.width /
            2 && d - this.helperProportions.width / 2 < f && i < g + this.helperProportions.height / 2 && h - this.helperProportions.height / 2 < j
    }, _intersectsWithPointer: function (a) {
        var c = b.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height), a = b.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width), c = c && a, a = this._getDragVerticalDirection(), d = this._getDragHorizontalDirection();
        return!c ? !1 : this.floating ? d && "right" == d || "down" == a ? 2 : 1 : a && ("down" == a ? 2 : 1)
    }, _intersectsWithSides: function (a) {
        var c =
            b.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height), a = b.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width), d = this._getDragVerticalDirection(), g = this._getDragHorizontalDirection();
        return this.floating && g ? "right" == g && a || "left" == g && !a : d && ("down" == d && c || "up" == d && !c)
    }, _getDragVerticalDirection: function () {
        var b = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 != b && (0 < b ? "down" : "up")
    }, _getDragHorizontalDirection: function () {
        var b = this.positionAbs.left -
            this.lastPositionAbs.left;
        return 0 != b && (0 < b ? "right" : "left")
    }, refresh: function (b) {
        this._refreshItems(b);
        this.refreshPositions();
        return this
    }, _connectWith: function () {
        var b = this.options;
        return b.connectWith.constructor == String ? [b.connectWith] : b.connectWith
    }, _getItemsAsjQuery: function (a) {
        var c = [], d = [], g = this._connectWith();
        if (g && a)for (a = g.length - 1; 0 <= a; a--)for (var h = b(g[a]), e = h.length - 1; 0 <= e; e--) {
            var f = b.data(h[e], "sortable");
            f && (f != this && !f.options.disabled) && d.push([b.isFunction(f.options.items) ? f.options.items.call(f.element) :
                b(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f])
        }
        d.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options, item: this.currentItem}) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
        for (a = d.length - 1; 0 <= a; a--)d[a][0].each(function () {
            c.push(this)
        });
        return b(c)
    }, _removeCurrentsFromItems: function () {
        for (var b = this.currentItem.find(":data(sortable-item)"), c = 0; c < this.items.length; c++)for (var d =
            0; d < b.length; d++)b[d] == this.items[c].item[0] && this.items.splice(c, 1)
    }, _refreshItems: function (a) {
        this.items = [];
        this.containers = [this];
        var c = this.items, d = [
            [b.isFunction(this.options.items) ? this.options.items.call(this.element[0], a, {item: this.currentItem}) : b(this.options.items, this.element), this]
        ], g = this._connectWith();
        if (g)for (var h = g.length - 1; 0 <= h; h--)for (var e = b(g[h]), f = e.length - 1; 0 <= f; f--) {
            var i = b.data(e[f], "sortable");
            i && (i != this && !i.options.disabled) && (d.push([b.isFunction(i.options.items) ? i.options.items.call(i.element[0],
                a, {item: this.currentItem}) : b(i.options.items, i.element), i]), this.containers.push(i))
        }
        for (h = d.length - 1; 0 <= h; h--) {
            a = d[h][1];
            g = d[h][0];
            f = 0;
            for (e = g.length; f < e; f++)i = b(g[f]), i.data("sortable-item", a), c.push({item: i, instance: a, width: 0, height: 0, left: 0, top: 0})
        }
    }, refreshPositions: function (a) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        for (var c = this.items.length - 1; 0 <= c; c--) {
            var d = this.items[c];
            if (!(d.instance != this.currentContainer && this.currentContainer && d.item[0] != this.currentItem[0])) {
                var g =
                    this.options.toleranceElement ? b(this.options.toleranceElement, d.item) : d.item;
                a || (d.width = g.outerWidth(), d.height = g.outerHeight());
                g = g.offset();
                d.left = g.left;
                d.top = g.top
            }
        }
        if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (c = this.containers.length - 1; 0 <= c; c--)g = this.containers[c].element.offset(), this.containers[c].containerCache.left = g.left, this.containers[c].containerCache.top = g.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(),
            this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
        return this
    }, _createPlaceholder: function (a) {
        var c = a || this, d = c.options;
        if (!d.placeholder || d.placeholder.constructor == String) {
            var g = d.placeholder;
            d.placeholder = {element: function () {
                var a = b(document.createElement(c.currentItem[0].nodeName)).addClass(g || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                g || (a.style.visibility = "hidden");
                return a
            }, update: function (b, a) {
                if (!g || d.forcePlaceholderSize)a.height() ||
                    a.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)), a.width() || a.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10))
            }}
        }
        c.placeholder = b(d.placeholder.element.call(c.element, c.currentItem));
        c.currentItem.after(c.placeholder);
        d.placeholder.update(c, c.placeholder)
    }, _contactContainers: function (a) {
        for (var c = null, d = null, g = this.containers.length -
            1; 0 <= g; g--)if (!b.ui.contains(this.currentItem[0], this.containers[g].element[0]))if (this._intersectsWith(this.containers[g].containerCache)) {
            if (!c || !b.ui.contains(this.containers[g].element[0], c.element[0]))c = this.containers[g], d = g
        } else this.containers[g].containerCache.over && (this.containers[g]._trigger("out", a, this._uiHash(this)), this.containers[g].containerCache.over = 0);
        if (c)if (1 === this.containers.length)this.containers[d]._trigger("over", a, this._uiHash(this)), this.containers[d].containerCache.over =
            1; else if (this.currentContainer != this.containers[d]) {
            for (var c = 1E4, g = null, h = this.positionAbs[this.containers[d].floating ? "left" : "top"], e = this.items.length - 1; 0 <= e; e--)if (b.ui.contains(this.containers[d].element[0], this.items[e].item[0])) {
                var f = this.items[e][this.containers[d].floating ? "left" : "top"];
                Math.abs(f - h) < c && (c = Math.abs(f - h), g = this.items[e])
            }
            if (g || this.options.dropOnEmpty)this.currentContainer = this.containers[d], g ? this._rearrange(a, g, null, !0) : this._rearrange(a, null, this.containers[d].element,
                !0), this._trigger("change", a, this._uiHash()), this.containers[d]._trigger("change", a, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", a, this._uiHash(this)), this.containers[d].containerCache.over = 1
        }
    }, _createHelper: function (a) {
        var c = this.options, a = b.isFunction(c.helper) ? b(c.helper.apply(this.element[0], [a, this.currentItem])) : "clone" == c.helper ? this.currentItem.clone() : this.currentItem;
        a.parents("body").length || b("parent" != c.appendTo ?
            c.appendTo : this.currentItem[0].parentNode)[0].appendChild(a[0]);
        a[0] == this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left")});
        ("" == a[0].style.width || c.forceHelperSize) && a.width(this.currentItem.width());
        ("" == a[0].style.height || c.forceHelperSize) && a.height(this.currentItem.height());
        return a
    }, _adjustOffsetFromHelper: function (a) {
        "string" == typeof a && (a = a.split(" "));
        b.isArray(a) && (a = {left: +a[0], top: +a[1] || 0});
        "left"in a && (this.offset.click.left = a.left + this.margins.left);
        "right"in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
        "top"in a && (this.offset.click.top = a.top + this.margins.top);
        "bottom"in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var a = this.offsetParent.offset();
        "absolute" == this.cssPosition &&
            (this.scrollParent[0] != document && b.ui.contains(this.scrollParent[0], this.offsetParent[0])) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop());
        if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && b.browser.msie)a = {top: 0, left: 0};
        return{top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if ("relative" ==
            this.cssPosition) {
            var b = this.currentItem.position();
            return{top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: b.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return{top: 0, left: 0}
    }, _cacheMargins: function () {
        this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
    }, _cacheHelperProportions: function () {
        this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
    },
        _setContainment: function () {
            var a = this.options;
            "parent" == a.containment && (a.containment = this.helper[0].parentNode);
            if ("document" == a.containment || "window" == a.containment)this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b("document" == a.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (b("document" == a.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height -
                this.margins.top];
            if (!/^(document|window|parent)$/.test(a.containment)) {
                var c = b(a.containment)[0], a = b(a.containment).offset(), d = "hidden" != b(c).css("overflow");
                this.containment = [a.left + (parseInt(b(c).css("borderLeftWidth"), 10) || 0) + (parseInt(b(c).css("paddingLeft"), 10) || 0) - this.margins.left, a.top + (parseInt(b(c).css("borderTopWidth"), 10) || 0) + (parseInt(b(c).css("paddingTop"), 10) || 0) - this.margins.top, a.left + (d ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(b(c).css("borderLeftWidth"), 10) ||
                    0) - (parseInt(b(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, a.top + (d ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(b(c).css("borderTopWidth"), 10) || 0) - (parseInt(b(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        }, _convertPositionTo: function (a, c) {
            c || (c = this.position);
            var d = "absolute" == a ? 1 : -1, g = "absolute" == this.cssPosition && !(this.scrollParent[0] != document && b.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent :
                this.scrollParent, h = /(html|body)/i.test(g[0].tagName);
            return{top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (b.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : g.scrollTop()) * d), left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (b.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : g.scrollLeft()) * d)}
        }, _generatePosition: function (a) {
            var c = this.options, d = "absolute" ==
                this.cssPosition && !(this.scrollParent[0] != document && b.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, g = /(html|body)/i.test(d[0].tagName);
            "relative" == this.cssPosition && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var h = a.pageX, e = a.pageY;
            if (this.originalPosition && (this.containment && (a.pageX - this.offset.click.left < this.containment[0] && (h = this.containment[0] + this.offset.click.left),
                a.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), a.pageX - this.offset.click.left > this.containment[2] && (h = this.containment[2] + this.offset.click.left), a.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), c.grid))e = this.originalPageY + Math.round((e - this.originalPageY) / c.grid[1]) * c.grid[1], e = this.containment ? !(e - this.offset.click.top < this.containment[1] || e - this.offset.click.top > this.containment[3]) ? e : !(e - this.offset.click.top <
                this.containment[1]) ? e - c.grid[1] : e + c.grid[1] : e, h = this.originalPageX + Math.round((h - this.originalPageX) / c.grid[0]) * c.grid[0], h = this.containment ? !(h - this.offset.click.left < this.containment[0] || h - this.offset.click.left > this.containment[2]) ? h : !(h - this.offset.click.left < this.containment[0]) ? h - c.grid[0] : h + c.grid[0] : h;
            return{top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (b.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : g ?
                0 : d.scrollTop()), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (b.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : g ? 0 : d.scrollLeft())}
        }, _rearrange: function (b, c, d, g) {
            d ? d[0].appendChild(this.placeholder[0]) : c.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? c.item[0] : c.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var h = this, e = this.counter;
            window.setTimeout(function () {
                e ==
                    h.counter && h.refreshPositions(!g)
            }, 0)
        }, _clear: function (a, c) {
            this.reverting = !1;
            var d = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem);
            this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var g in this._storedCSS)if ("auto" == this._storedCSS[g] || "static" == this._storedCSS[g])this._storedCSS[g] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !c && d.push(function (b) {
                this._trigger("receive",
                    b, this._uiHash(this.fromOutside))
            });
            (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !c && d.push(function (b) {
                this._trigger("update", b, this._uiHash())
            });
            if (!b.ui.contains(this.element[0], this.currentItem[0])) {
                c || d.push(function (b) {
                    this._trigger("remove", b, this._uiHash())
                });
                for (g = this.containers.length - 1; 0 <= g; g--)b.ui.contains(this.containers[g].element[0], this.currentItem[0]) && !c && (d.push(function (b) {
                    return function (a) {
                        b._trigger("receive",
                            a, this._uiHash(this))
                    }
                }.call(this, this.containers[g])), d.push(function (b) {
                    return function (a) {
                        b._trigger("update", a, this._uiHash(this))
                    }
                }.call(this, this.containers[g])))
            }
            for (g = this.containers.length - 1; 0 <= g; g--)c || d.push(function (b) {
                return function (a) {
                    b._trigger("deactivate", a, this._uiHash(this))
                }
            }.call(this, this.containers[g])), this.containers[g].containerCache.over && (d.push(function (b) {
                return function (a) {
                    b._trigger("out", a, this._uiHash(this))
                }
            }.call(this, this.containers[g])), this.containers[g].containerCache.over =
                0);
            this._storedCursor && b("body").css("cursor", this._storedCursor);
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
            this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex);
            this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!c) {
                    this._trigger("beforeStop", a, this._uiHash());
                    for (g = 0; g < d.length; g++)d[g].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                return!1
            }
            c || this._trigger("beforeStop", a, this._uiHash());
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.helper[0] != this.currentItem[0] && this.helper.remove();
            this.helper = null;
            if (!c) {
                for (g = 0; g < d.length; g++)d[g].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            this.fromOutside = !1;
            return!0
        }, _trigger: function () {
            !1 === b.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        }, _uiHash: function (a) {
            var c = a || this;
            return{helper: c.helper, placeholder: c.placeholder || b([]), position: c.position, originalPosition: c.originalPosition, offset: c.positionAbs, item: c.currentItem, sender: a ? a.element : null}
        }});
    b.extend(b.ui.sortable,
        {version: "1.8.14"})
})(jQuery);
(function (b) {
    b.widget("ui.accordion", {options: {active: 0, animated: "slide", autoHeight: !0, clearStyle: !1, collapsible: !1, event: "click", fillSpace: !1, header: "> li > :first-child,> :not(li):even", icons: {header: "ui-icon-triangle-1-e", headerSelected: "ui-icon-triangle-1-s"}, navigation: !1, navigationFilter: function () {
        return this.href.toLowerCase() === location.href.toLowerCase()
    }}, _create: function () {
        var a = this, c = a.options;
        a.running = 0;
        a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
        a.headers =
            a.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function () {
                c.disabled || b(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion",function () {
                c.disabled || b(this).removeClass("ui-state-hover")
            }).bind("focus.accordion",function () {
                c.disabled || b(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function () {
                c.disabled || b(this).removeClass("ui-state-focus")
            });
        a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
        if (c.navigation) {
            var d = a.element.find("a").filter(c.navigationFilter).eq(0);
            if (d.length) {
                var g = d.closest(".ui-accordion-header");
                a.active = g.length ? g : d.closest(".ui-accordion-content").prev()
            }
        }
        a.active = a._findActive(a.active || c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
        a.active.next().addClass("ui-accordion-content-active");
        a._createIcons();
        a.resize();
        a.element.attr("role", "tablist");
        a.headers.attr("role", "tab").bind("keydown.accordion",
            function (b) {
                return a._keydown(b)
            }).next().attr("role", "tabpanel");
        a.headers.not(a.active || "").attr({"aria-expanded": "false", "aria-selected": "false", tabIndex: -1}).next().hide();
        a.active.length ? a.active.attr({"aria-expanded": "true", "aria-selected": "true", tabIndex: 0}) : a.headers.eq(0).attr("tabIndex", 0);
        b.browser.safari || a.headers.find("a").attr("tabIndex", -1);
        c.event && a.headers.bind(c.event.split(" ").join(".accordion ") + ".accordion", function (b) {
            a._clickHandler.call(a, b, this);
            b.preventDefault()
        })
    }, _createIcons: function () {
        var a =
            this.options;
        a.icons && (b("<span></span>").addClass("ui-icon " + a.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
    }, _destroyIcons: function () {
        this.headers.children(".ui-icon").remove();
        this.element.removeClass("ui-accordion-icons")
    }, destroy: function () {
        var a = this.options;
        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
        this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
        this.headers.find("a").removeAttr("tabIndex");
        this._destroyIcons();
        var c = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
        (a.autoHeight || a.fillHeight) && c.css("height", "");
        return b.Widget.prototype.destroy.call(this)
    }, _setOption: function (a, c) {
        b.Widget.prototype._setOption.apply(this, arguments);
        "active" == a && this.activate(c);
        "icons" == a && (this._destroyIcons(),
            c && this._createIcons());
        if ("disabled" == a)this.headers.add(this.headers.next())[c ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
    }, _keydown: function (a) {
        if (!this.options.disabled && !a.altKey && !a.ctrlKey) {
            var c = b.ui.keyCode, d = this.headers.length, g = this.headers.index(a.target), h = !1;
            switch (a.keyCode) {
                case c.RIGHT:
                case c.DOWN:
                    h = this.headers[(g + 1) % d];
                    break;
                case c.LEFT:
                case c.UP:
                    h = this.headers[(g - 1 + d) % d];
                    break;
                case c.SPACE:
                case c.ENTER:
                    this._clickHandler({target: a.target}, a.target), a.preventDefault()
            }
            return h ?
                (b(a.target).attr("tabIndex", -1), b(h).attr("tabIndex", 0), h.focus(), !1) : !0
        }
    }, resize: function () {
        var a = this.options, c;
        if (a.fillSpace) {
            if (b.browser.msie) {
                var d = this.element.parent().css("overflow");
                this.element.parent().css("overflow", "hidden")
            }
            c = this.element.parent().height();
            b.browser.msie && this.element.parent().css("overflow", d);
            this.headers.each(function () {
                c -= b(this).outerHeight(!0)
            });
            this.headers.next().each(function () {
                b(this).height(Math.max(0, c - b(this).innerHeight() + b(this).height()))
            }).css("overflow",
                "auto")
        } else a.autoHeight && (c = 0, this.headers.next().each(function () {
            c = Math.max(c, b(this).height("").height())
        }).height(c));
        return this
    }, activate: function (b) {
        this.options.active = b;
        b = this._findActive(b)[0];
        this._clickHandler({target: b}, b);
        return this
    }, _findActive: function (a) {
        return a ? "number" === typeof a ? this.headers.filter(":eq(" + a + ")") : this.headers.not(this.headers.not(a)) : !1 === a ? b([]) : this.headers.filter(":eq(0)")
    }, _clickHandler: function (a, c) {
        var d = this.options;
        if (!d.disabled)if (a.target) {
            var g = b(a.currentTarget ||
                c), h = g[0] === this.active[0];
            d.active = d.collapsible && h ? !1 : this.headers.index(g);
            if (!(this.running || !d.collapsible && h)) {
                var e = this.active, f = g.next(), i = this.active.next(), j = {options: d, newHeader: h && d.collapsible ? b([]) : g, oldHeader: this.active, newContent: h && d.collapsible ? b([]) : f, oldContent: i}, k = this.headers.index(this.active[0]) > this.headers.index(g[0]);
                this.active = h ? b([]) : g;
                this._toggle(f, i, j, h, k);
                e.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
                h || (g.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected), g.next().addClass("ui-accordion-content-active"))
            }
        } else if (d.collapsible) {
            this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
            this.active.next().addClass("ui-accordion-content-active");
            var i = this.active.next(),
                j = {options: d, newHeader: b([]), oldHeader: d.active, newContent: b([]), oldContent: i}, f = this.active = b([]);
            this._toggle(f, i, j)
        }
    }, _toggle: function (a, c, d, g, h) {
        var e = this, f = e.options;
        e.toShow = a;
        e.toHide = c;
        e.data = d;
        var i = function () {
            if (e)return e._completed.apply(e, arguments)
        };
        e._trigger("changestart", null, e.data);
        e.running = 0 === c.size() ? a.size() : c.size();
        if (f.animated) {
            d = {};
            d = f.collapsible && g ? {toShow: b([]), toHide: c, complete: i, down: h, autoHeight: f.autoHeight || f.fillSpace} : {toShow: a, toHide: c, complete: i, down: h, autoHeight: f.autoHeight ||
                f.fillSpace};
            f.proxied || (f.proxied = f.animated);
            f.proxiedDuration || (f.proxiedDuration = f.duration);
            f.animated = b.isFunction(f.proxied) ? f.proxied(d) : f.proxied;
            f.duration = b.isFunction(f.proxiedDuration) ? f.proxiedDuration(d) : f.proxiedDuration;
            var g = b.ui.accordion.animations, j = f.duration, k = f.animated;
            k && (!g[k] && !b.easing[k]) && (k = "slide");
            g[k] || (g[k] = function (b) {
                this.slide(b, {easing: k, duration: j || 700})
            });
            g[k](d)
        } else f.collapsible && g ? a.toggle() : (c.hide(), a.show()), i(!0);
        c.prev().attr({"aria-expanded": "false",
            "aria-selected": "false", tabIndex: -1}).blur();
        a.prev().attr({"aria-expanded": "true", "aria-selected": "true", tabIndex: 0}).focus()
    }, _completed: function (b) {
        this.running = b ? 0 : --this.running;
        this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({height: "", overflow: ""}), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
    }});
    b.extend(b.ui.accordion, {version: "1.8.14",
        animations: {slide: function (a, c) {
            a = b.extend({easing: "swing", duration: 300}, a, c);
            if (a.toHide.size())if (a.toShow.size()) {
                var d = a.toShow.css("overflow"), g = 0, h = {}, e = {}, f, i = a.toShow;
                f = i[0].style.width;
                i.width(parseInt(i.parent().width(), 10) - parseInt(i.css("paddingLeft"), 10) - parseInt(i.css("paddingRight"), 10) - (parseInt(i.css("borderLeftWidth"), 10) || 0) - (parseInt(i.css("borderRightWidth"), 10) || 0));
                b.each(["height", "paddingTop", "paddingBottom"], function (c, f) {
                    e[f] = "hide";
                    var i = ("" + b.css(a.toShow[0], f)).match(/^([\d+-.]+)(.*)$/);
                    h[f] = {value: i[1], unit: i[2] || "px"}
                });
                a.toShow.css({height: 0, overflow: "hidden"}).show();
                a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(e, {step: function (b, c) {
                    "height" == c.prop && (g = 0 === c.end - c.start ? 0 : (c.now - c.start) / (c.end - c.start));
                    a.toShow[0].style[c.prop] = g * h[c.prop].value + h[c.prop].unit
                }, duration: a.duration, easing: a.easing, complete: function () {
                    a.autoHeight || a.toShow.css("height", "");
                    a.toShow.css({width: f, overflow: d});
                    a.complete()
                }})
            } else a.toHide.animate({height: "hide",
                paddingTop: "hide", paddingBottom: "hide"}, a); else a.toShow.animate({height: "show", paddingTop: "show", paddingBottom: "show"}, a)
        }, bounceslide: function (b) {
            this.slide(b, {easing: b.down ? "easeOutBounce" : "swing", duration: b.down ? 1E3 : 200})
        }}})
})(jQuery);
(function (b) {
    var a = 0;
    b.widget("ui.autocomplete", {options: {appendTo: "body", autoFocus: !1, delay: 300, minLength: 1, position: {my: "left top", at: "left bottom", collision: "none"}, source: null}, pending: 0, _create: function () {
        var c = this, a = this.element[0].ownerDocument, g;
        this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({role: "textbox", "aria-autocomplete": "list", "aria-haspopup": "true"}).bind("keydown.autocomplete",function (a) {
            if (!c.options.disabled && !c.element.attr("readonly")) {
                g = !1;
                var d =
                    b.ui.keyCode;
                switch (a.keyCode) {
                    case d.PAGE_UP:
                        c._move("previousPage", a);
                        break;
                    case d.PAGE_DOWN:
                        c._move("nextPage", a);
                        break;
                    case d.UP:
                        c._move("previous", a);
                        a.preventDefault();
                        break;
                    case d.DOWN:
                        c._move("next", a);
                        a.preventDefault();
                        break;
                    case d.ENTER:
                    case d.NUMPAD_ENTER:
                        c.menu.active && (g = !0, a.preventDefault());
                    case d.TAB:
                        if (!c.menu.active)break;
                        c.menu.select(a);
                        break;
                    case d.ESCAPE:
                        c.element.val(c.term);
                        c.close(a);
                        break;
                    default:
                        clearTimeout(c.searching), c.searching = setTimeout(function () {
                            c.term != c.element.val() &&
                            (c.selectedItem = null, c.search(null, a))
                        }, c.options.delay)
                }
            }
        }).bind("keypress.autocomplete",function (b) {
            g && (g = !1, b.preventDefault())
        }).bind("focus.autocomplete",function () {
            c.options.disabled || (c.selectedItem = null, c.previous = c.element.val())
        }).bind("blur.autocomplete", function (b) {
            c.options.disabled || (clearTimeout(c.searching), c.closing = setTimeout(function () {
                c.close(b);
                c._change(b)
            }, 150))
        });
        this._initSource();
        this.response = function () {
            return c._response.apply(c, arguments)
        };
        this.menu = b("<ul></ul>").addClass("ui-autocomplete").appendTo(b(this.options.appendTo ||
                "body", a)[0]).mousedown(function (a) {
            var d = c.menu.element[0];
            b(a.target).closest(".ui-menu-item").length || setTimeout(function () {
                b(document).one("mousedown", function (a) {
                    a.target !== c.element[0] && (a.target !== d && !b.ui.contains(d, a.target)) && c.close()
                })
            }, 1);
            setTimeout(function () {
                clearTimeout(c.closing)
            }, 13)
        }).menu({focus: function (b, a) {
            var f = a.item.data("item.autocomplete");
            !1 !== c._trigger("focus", b, {item: f}) && /^key/.test(b.originalEvent.type) && c.element.val(f.value)
        }, selected: function (b, e) {
            var f = e.item.data("item.autocomplete"),
                i = c.previous;
            c.element[0] !== a.activeElement && (c.element.focus(), c.previous = i, setTimeout(function () {
                c.previous = i;
                c.selectedItem = f
            }, 1));
            !1 !== c._trigger("select", b, {item: f}) && c.element.val(f.value);
            c.term = c.element.val();
            c.close(b);
            c.selectedItem = f
        }, blur: function () {
            c.menu.element.is(":visible") && c.element.val() !== c.term && c.element.val(c.term)
        }}).zIndex(this.element.zIndex() + 1).css({top: 0, left: 0}).hide().data("menu");
        b.fn.bgiframe && this.menu.element.bgiframe()
    }, destroy: function () {
        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
        this.menu.element.remove();
        b.Widget.prototype.destroy.call(this)
    }, _setOption: function (a, d) {
        b.Widget.prototype._setOption.apply(this, arguments);
        "source" === a && this._initSource();
        "appendTo" === a && this.menu.element.appendTo(b(d || "body", this.element[0].ownerDocument)[0]);
        "disabled" === a && (d && this.xhr) && this.xhr.abort()
    }, _initSource: function () {
        var c = this, d, g;
        b.isArray(this.options.source) ? (d = this.options.source, this.source = function (a, c) {
            c(b.ui.autocomplete.filter(d, a.term))
        }) : "string" === typeof this.options.source ?
            (g = this.options.source, this.source = function (d, e) {
                c.xhr && c.xhr.abort();
                c.xhr = b.ajax({url: g, data: d, dataType: "json", autocompleteRequest: ++a, success: function (b) {
                    this.autocompleteRequest === a && e(b)
                }, error: function () {
                    this.autocompleteRequest === a && e([])
                }})
            }) : this.source = this.options.source
    }, search: function (b, a) {
        b = null != b ? b : this.element.val();
        this.term = this.element.val();
        if (b.length < this.options.minLength)return this.close(a);
        clearTimeout(this.closing);
        if (!1 !== this._trigger("search", a))return this._search(b)
    },
        _search: function (b) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.source({term: b}, this.response)
        }, _response: function (b) {
            !this.options.disabled && b && b.length ? (b = this._normalize(b), this._suggest(b), this._trigger("open")) : this.close();
            this.pending--;
            this.pending || this.element.removeClass("ui-autocomplete-loading")
        }, close: function (b) {
            clearTimeout(this.closing);
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", b))
        }, _change: function (b) {
            this.previous !==
                this.element.val() && this._trigger("change", b, {item: this.selectedItem})
        }, _normalize: function (a) {
            return a.length && a[0].label && a[0].value ? a : b.map(a, function (a) {
                return"string" === typeof a ? {label: a, value: a} : b.extend({label: a.label || a.value, value: a.value || a.label}, a)
            })
        }, _suggest: function (a) {
            var d = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(d, a);
            this.menu.deactivate();
            this.menu.refresh();
            d.show();
            this._resizeMenu();
            d.position(b.extend({of: this.element}, this.options.position));
            this.options.autoFocus && this.menu.next(new b.Event("mouseover"))
        }, _resizeMenu: function () {
            var b = this.menu.element;
            b.outerWidth(Math.max(b.width("").outerWidth(), this.element.outerWidth()))
        }, _renderMenu: function (a, d) {
            var g = this;
            b.each(d, function (b, d) {
                g._renderItem(a, d)
            })
        }, _renderItem: function (a, d) {
            return b("<li></li>").data("item.autocomplete", d).append(b("<a></a>").text(d.label)).appendTo(a)
        }, _move: function (b, a) {
            if (this.menu.element.is(":visible"))if (this.menu.first() && /^previous/.test(b) || this.menu.last() &&
                /^next/.test(b))this.element.val(this.term), this.menu.deactivate(); else this.menu[b](a); else this.search(null, a)
        }, widget: function () {
            return this.menu.element
        }});
    b.extend(b.ui.autocomplete, {escapeRegex: function (b) {
        return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, filter: function (a, d) {
        var g = RegExp(b.ui.autocomplete.escapeRegex(d), "i");
        return b.grep(a, function (b) {
            return g.test(b.label || b.value || b)
        })
    }})
})(jQuery);
(function (b) {
    b.widget("ui.menu", {_create: function () {
        var a = this;
        this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role: "listbox", "aria-activedescendant": "ui-active-menuitem"}).click(function (c) {
            b(c.target).closest(".ui-menu-item a").length && (c.preventDefault(), a.select(c))
        });
        this.refresh()
    }, refresh: function () {
        var a = this;
        this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
            -1).mouseenter(function (c) {
                a.activate(c, b(this).parent())
            }).mouseleave(function () {
                a.deactivate()
            })
    }, activate: function (b, c) {
        this.deactivate();
        if (this.hasScroll()) {
            var d = c.offset().top - this.element.offset().top, g = this.element.scrollTop(), h = this.element.height();
            0 > d ? this.element.scrollTop(g + d) : d >= h && this.element.scrollTop(g + d - h + c.height())
        }
        this.active = c.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
        this._trigger("focus", b, {item: c})
    }, deactivate: function () {
        this.active &&
        (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
    }, next: function (b) {
        this.move("next", ".ui-menu-item:first", b)
    }, previous: function (b) {
        this.move("prev", ".ui-menu-item:last", b)
    }, first: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    }, last: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    }, move: function (b, c, d) {
        this.active ? (b = this.active[b + "All"](".ui-menu-item").eq(0), b.length ? this.activate(d,
            b) : this.activate(d, this.element.children(c))) : this.activate(d, this.element.children(c))
    }, nextPage: function (a) {
        if (this.hasScroll())if (!this.active || this.last())this.activate(a, this.element.children(".ui-menu-item:first")); else {
            var c = this.active.offset().top, d = this.element.height(), g = this.element.children(".ui-menu-item").filter(function () {
                var a = b(this).offset().top - c - d + b(this).height();
                return 10 > a && -10 < a
            });
            g.length || (g = this.element.children(".ui-menu-item:last"));
            this.activate(a, g)
        } else this.activate(a,
            this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
    }, previousPage: function (a) {
        if (this.hasScroll())if (!this.active || this.first())this.activate(a, this.element.children(".ui-menu-item:last")); else {
            var c = this.active.offset().top, d = this.element.height();
            result = this.element.children(".ui-menu-item").filter(function () {
                var a = b(this).offset().top - c + d - b(this).height();
                return 10 > a && -10 < a
            });
            result.length || (result = this.element.children(".ui-menu-item:first"));
            this.activate(a,
                result)
        } else this.activate(a, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
    }, hasScroll: function () {
        return this.element.height() < this.element[b.fn.prop ? "prop" : "attr"]("scrollHeight")
    }, select: function (b) {
        this._trigger("selected", b, {item: this.active})
    }})
})(jQuery);
(function (b) {
    var a, c, d, g, h = function () {
        var a = b(this).find(":ui-button");
        setTimeout(function () {
            a.button("refresh")
        }, 1)
    }, e = function (a) {
        var c = a.name, d = a.form, h = b([]);
        c && (h = d ? b(d).find("[name='" + c + "']") : b("[name='" + c + "']", a.ownerDocument).filter(function () {
            return!this.form
        }));
        return h
    };
    b.widget("ui.button", {options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}}, _create: function () {
        this.element.closest("form").unbind("reset.button").bind("reset.button", h);
        "boolean" !== typeof this.options.disabled &&
        (this.options.disabled = this.element.attr("disabled"));
        this._determineButtonType();
        this.hasTitle = !!this.buttonElement.attr("title");
        var f = this, i = this.options, j = "checkbox" === this.type || "radio" === this.type, k = "ui-state-hover" + (!j ? " ui-state-active" : "");
        null === i.label && (i.label = this.buttonElement.html());
        this.element.is(":disabled") && (i.disabled = !0);
        this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button",function () {
            if (!i.disabled) {
                b(this).addClass("ui-state-hover");
                this === a && b(this).addClass("ui-state-active")
            }
        }).bind("mouseleave.button",function () {
            i.disabled || b(this).removeClass(k)
        }).bind("click.button", function (b) {
            if (i.disabled) {
                b.preventDefault();
                b.stopImmediatePropagation()
            }
        });
        this.element.bind("focus.button",function () {
            f.buttonElement.addClass("ui-state-focus")
        }).bind("blur.button", function () {
            f.buttonElement.removeClass("ui-state-focus")
        });
        j && (this.element.bind("change.button", function () {
            g || f.refresh()
        }), this.buttonElement.bind("mousedown.button",function (b) {
            if (!i.disabled) {
                g =
                    false;
                c = b.pageX;
                d = b.pageY
            }
        }).bind("mouseup.button", function (b) {
            if (!i.disabled && (c !== b.pageX || d !== b.pageY))g = true
        }));
        "checkbox" === this.type ? this.buttonElement.bind("click.button", function () {
            if (i.disabled || g)return false;
            b(this).toggleClass("ui-state-active");
            f.buttonElement.attr("aria-pressed", f.element[0].checked)
        }) : "radio" === this.type ? this.buttonElement.bind("click.button", function () {
            if (i.disabled || g)return false;
            b(this).addClass("ui-state-active");
            f.buttonElement.attr("aria-pressed", true);
            var a =
                f.element[0];
            e(a).not(a).map(function () {
                return b(this).button("widget")[0]
            }).removeClass("ui-state-active").attr("aria-pressed", false)
        }) : (this.buttonElement.bind("mousedown.button",function () {
            if (i.disabled)return false;
            b(this).addClass("ui-state-active");
            a = this;
            b(document).one("mouseup", function () {
                a = null
            })
        }).bind("mouseup.button",function () {
            if (i.disabled)return false;
            b(this).removeClass("ui-state-active")
        }).bind("keydown.button",function (a) {
            if (i.disabled)return false;
            (a.keyCode == b.ui.keyCode.SPACE ||
                a.keyCode == b.ui.keyCode.ENTER) && b(this).addClass("ui-state-active")
        }).bind("keyup.button", function () {
            b(this).removeClass("ui-state-active")
        }), this.buttonElement.is("a") && this.buttonElement.keyup(function (a) {
            a.keyCode === b.ui.keyCode.SPACE && b(this).click()
        }));
        this._setOption("disabled", i.disabled);
        this._resetButton()
    }, _determineButtonType: function () {
        this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button";
        if ("checkbox" === this.type ||
            "radio" === this.type) {
            var b = this.element.parents().filter(":last"), a = "label[for=" + this.element.attr("id") + "]";
            this.buttonElement = b.find(a);
            this.buttonElement.length || (b = b.length ? b.siblings() : this.element.siblings(), this.buttonElement = b.filter(a), this.buttonElement.length || (this.buttonElement = b.find(a)));
            this.element.addClass("ui-helper-hidden-accessible");
            (b = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active");
            this.buttonElement.attr("aria-pressed", b)
        } else this.buttonElement =
            this.element
    }, widget: function () {
        return this.buttonElement
    }, destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible");
        this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
        this.hasTitle ||
        this.buttonElement.removeAttr("title");
        b.Widget.prototype.destroy.call(this)
    }, _setOption: function (a, c) {
        b.Widget.prototype._setOption.apply(this, arguments);
        "disabled" === a ? c ? this.element.attr("disabled", !0) : this.element.removeAttr("disabled") : this._resetButton()
    }, refresh: function () {
        var a = this.element.is(":disabled");
        a !== this.options.disabled && this._setOption("disabled", a);
        "radio" === this.type ? e(this.element[0]).each(function () {
            b(this).is(":checked") ? b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
                !0) : b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", !1)
        }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", !0) : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", !1))
    }, _resetButton: function () {
        if ("input" === this.type)this.options.label && this.element.val(this.options.label); else {
            var a = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                c = b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(), d = this.options.icons, h = d.primary && d.secondary, e = [];
            d.primary || d.secondary ? (this.options.text && e.push("ui-button-text-icon" + (h ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && a.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && a.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (e.push(h ? "ui-button-icons-only" :
                "ui-button-icon-only"), this.hasTitle || a.attr("title", c))) : e.push("ui-button-text-only");
            a.addClass(e.join(" "))
        }
    }});
    b.widget("ui.buttonset", {options: {items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"}, _create: function () {
        this.element.addClass("ui-buttonset")
    }, _init: function () {
        this.refresh()
    }, _setOption: function (a, c) {
        "disabled" === a && this.buttons.button("option", a, c);
        b.Widget.prototype._setOption.apply(this, arguments)
    }, refresh: function () {
        var a = "ltr" === this.element.css("direction");
        this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
            return b(this).button("widget")[0]
        }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-left" : "ui-corner-right").end().filter(":last").addClass(a ? "ui-corner-right" : "ui-corner-left").end().end()
    }, destroy: function () {
        this.element.removeClass("ui-buttonset");
        this.buttons.map(function () {
            return b(this).button("widget")[0]
        }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
        b.Widget.prototype.destroy.call(this)
    }})
})(jQuery);
(function (b, a) {
    var c = {buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0}, d = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0}, g = b.attrFn || {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0, click: !0};
    b.widget("ui.dialog", {options: {autoOpen: !0, buttons: {}, closeOnEscape: !0, closeText: "close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: !1, maxWidth: !1, minHeight: 150, minWidth: 150, modal: !1, position: {my: "center", at: "center", collision: "fit", using: function (a) {
        var c =
            b(this).css(a).offset().top;
        0 > c && b(this).css("top", a.top - c)
    }}, resizable: !0, show: null, stack: !0, title: "", width: 300, zIndex: 1E3}, _create: function () {
        this.originalTitle = this.element.attr("title");
        "string" !== typeof this.originalTitle && (this.originalTitle = "");
        this.options.title = this.options.title || this.originalTitle;
        var a = this, c = a.options, f = c.title || "&#160;", i = b.ui.dialog.getTitleId(a.element), d = (a.uiDialog = b("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " +
            c.dialogClass).css({zIndex: c.zIndex}).attr("tabIndex", -1).css("outline", 0).keydown(function (f) {
            if (c.closeOnEscape && f.keyCode && f.keyCode === b.ui.keyCode.ESCAPE) {
                a.close(f);
                f.preventDefault()
            }
        }).attr({role: "dialog", "aria-labelledby": i}).mousedown(function (b) {
            a.moveToTop(false, b)
        });
        a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(d);
        var g = (a.uiDialogTitlebar = b("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(d),
            l = b('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () {
                l.addClass("ui-state-hover")
            },function () {
                l.removeClass("ui-state-hover")
            }).focus(function () {
                l.addClass("ui-state-focus")
            }).blur(function () {
                l.removeClass("ui-state-focus")
            }).click(function (b) {
                a.close(b);
                return false
            }).appendTo(g);
        (a.uiDialogTitlebarCloseText = b("<span></span>")).addClass("ui-icon ui-icon-closethick").text(c.closeText).appendTo(l);
        b("<span></span>").addClass("ui-dialog-title").attr("id",
            i).html(f).prependTo(g);
        b.isFunction(c.beforeclose) && !b.isFunction(c.beforeClose) && (c.beforeClose = c.beforeclose);
        g.find("*").add(g).disableSelection();
        c.draggable && b.fn.draggable && a._makeDraggable();
        c.resizable && b.fn.resizable && a._makeResizable();
        a._createButtons(c.buttons);
        a._isOpen = !1;
        b.fn.bgiframe && d.bgiframe()
    }, _init: function () {
        this.options.autoOpen && this.open()
    }, destroy: function () {
        this.overlay && this.overlay.destroy();
        this.uiDialog.hide();
        this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
        this.uiDialog.remove();
        this.originalTitle && this.element.attr("title", this.originalTitle);
        return this
    }, widget: function () {
        return this.uiDialog
    }, close: function (a) {
        var c = this, f, d;
        if (!1 !== c._trigger("beforeClose", a))return c.overlay && c.overlay.destroy(), c.uiDialog.unbind("keypress.ui-dialog"), c._isOpen = !1, c.options.hide ? c.uiDialog.hide(c.options.hide, function () {
            c._trigger("close", a)
        }) : (c.uiDialog.hide(), c._trigger("close", a)), b.ui.dialog.overlay.resize(), c.options.modal && (f = 0, b(".ui-dialog").each(function () {
            if (this !==
                c.uiDialog[0]) {
                d = b(this).css("z-index");
                isNaN(d) || (f = Math.max(f, d))
            }
        }), b.ui.dialog.maxZ = f), c
    }, isOpen: function () {
        return this._isOpen
    }, moveToTop: function (a, c) {
        var f = this.options;
        if (f.modal && !a || !f.stack && !f.modal)return this._trigger("focus", c);
        f.zIndex > b.ui.dialog.maxZ && (b.ui.dialog.maxZ = f.zIndex);
        this.overlay && (b.ui.dialog.maxZ += 1, this.overlay.$el.css("z-index", b.ui.dialog.overlay.maxZ = b.ui.dialog.maxZ));
        f = {scrollTop: this.element.attr("scrollTop"), scrollLeft: this.element.attr("scrollLeft")};
        b.ui.dialog.maxZ +=
            1;
        this.uiDialog.css("z-index", b.ui.dialog.maxZ);
        this.element.attr(f);
        this._trigger("focus", c);
        return this
    }, open: function () {
        if (!this._isOpen) {
            var a = this.options, c = this.uiDialog;
            this.overlay = a.modal ? new b.ui.dialog.overlay(this) : null;
            this._size();
            this._position(a.position);
            c.show(a.show);
            this.moveToTop(!0);
            a.modal && c.bind("keypress.ui-dialog", function (a) {
                if (a.keyCode === b.ui.keyCode.TAB) {
                    var c = b(":tabbable", this), d = c.filter(":first"), c = c.filter(":last");
                    if (a.target === c[0] && !a.shiftKey)return d.focus(1),
                        !1;
                    if (a.target === d[0] && a.shiftKey)return c.focus(1), !1
                }
            });
            b(this.element.find(":tabbable").get().concat(c.find(".ui-dialog-buttonpane :tabbable").get().concat(c.get()))).eq(0).focus();
            this._isOpen = !0;
            this._trigger("open");
            return this
        }
    }, _createButtons: function (a) {
        var c = this, f = !1, d = b("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), j = b("<div></div>").addClass("ui-dialog-buttonset").appendTo(d);
        c.uiDialog.find(".ui-dialog-buttonpane").remove();
        "object" === typeof a &&
            null !== a && b.each(a, function () {
            return!(f = !0)
        });
        f && (b.each(a, function (a, f) {
            var f = b.isFunction(f) ? {click: f, text: a} : f, d = b('<button type="button"></button>').click(function () {
                f.click.apply(c.element[0], arguments)
            }).appendTo(j);
            b.each(f, function (b, a) {
                if ("click" !== b)if (b in g)d[b](a); else d.attr(b, a)
            });
            b.fn.button && d.button()
        }), d.appendTo(c.uiDialog))
    }, _makeDraggable: function () {
        function a(b) {
            return{position: b.position, offset: b.offset}
        }

        var c = this, f = c.options, d = b(document), g;
        c.uiDialog.draggable({cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
            handle: ".ui-dialog-titlebar", containment: "document", start: function (d, i) {
                g = "auto" === f.height ? "auto" : b(this).height();
                b(this).height(b(this).height()).addClass("ui-dialog-dragging");
                c._trigger("dragStart", d, a(i))
            }, drag: function (b, f) {
                c._trigger("drag", b, a(f))
            }, stop: function (k, l) {
                f.position = [l.position.left - d.scrollLeft(), l.position.top - d.scrollTop()];
                b(this).removeClass("ui-dialog-dragging").height(g);
                c._trigger("dragStop", k, a(l));
                b.ui.dialog.overlay.resize()
            }})
    }, _makeResizable: function (c) {
        function d(b) {
            return{originalPosition: b.originalPosition,
                originalSize: b.originalSize, position: b.position, size: b.size}
        }

        var c = c === a ? this.options.resizable : c, f = this, i = f.options, g = f.uiDialog.css("position"), c = "string" === typeof c ? c : "n,e,s,w,se,sw,ne,nw";
        f.uiDialog.resizable({cancel: ".ui-dialog-content", containment: "document", alsoResize: f.element, maxWidth: i.maxWidth, maxHeight: i.maxHeight, minWidth: i.minWidth, minHeight: f._minHeight(), handles: c, start: function (a, c) {
            b(this).addClass("ui-dialog-resizing");
            f._trigger("resizeStart", a, d(c))
        }, resize: function (b, a) {
            f._trigger("resize",
                b, d(a))
        }, stop: function (a, c) {
            b(this).removeClass("ui-dialog-resizing");
            i.height = b(this).height();
            i.width = b(this).width();
            f._trigger("resizeStop", a, d(c));
            b.ui.dialog.overlay.resize()
        }}).css("position", g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
    }, _minHeight: function () {
        var b = this.options;
        return"auto" === b.height ? b.minHeight : Math.min(b.minHeight, b.height)
    }, _position: function (a) {
        var c = [], f = [0, 0], d;
        if (a) {
            if ("string" === typeof a || "object" === typeof a && "0"in a)c = a.split ? a.split(" ") :
                [a[0], a[1]], 1 === c.length && (c[1] = c[0]), b.each(["left", "top"], function (b, a) {
                +c[b] === c[b] && (f[b] = c[b], c[b] = a)
            }), a = {my: c.join(" "), at: c.join(" "), offset: f.join(" ")};
            a = b.extend({}, b.ui.dialog.prototype.options.position, a)
        } else a = b.ui.dialog.prototype.options.position;
        (d = this.uiDialog.is(":visible")) || this.uiDialog.show();
        this.uiDialog.css({top: 0, left: 0}).position(b.extend({of: window}, a));
        d || this.uiDialog.hide()
    }, _setOptions: function (a) {
        var g = this, f = {}, i = !1;
        b.each(a, function (b, a) {
            g._setOption(b, a);
            b in
                c && (i = !0);
            b in d && (f[b] = a)
        });
        i && this._size();
        this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", f)
    }, _setOption: function (a, c) {
        var f = this.uiDialog;
        switch (a) {
            case "beforeclose":
                a = "beforeClose";
                break;
            case "buttons":
                this._createButtons(c);
                break;
            case "closeText":
                this.uiDialogTitlebarCloseText.text("" + c);
                break;
            case "dialogClass":
                f.removeClass(this.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + c);
                break;
            case "disabled":
                c ? f.addClass("ui-dialog-disabled") :
                    f.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                var d = f.is(":data(draggable)");
                d && !c && f.draggable("destroy");
                !d && c && this._makeDraggable();
                break;
            case "position":
                this._position(c);
                break;
            case "resizable":
                (d = f.is(":data(resizable)")) && !c && f.resizable("destroy");
                d && "string" === typeof c && f.resizable("option", "handles", c);
                !d && !1 !== c && this._makeResizable(c);
                break;
            case "title":
                b(".ui-dialog-title", this.uiDialogTitlebar).html("" + (c || "&#160;"))
        }
        b.Widget.prototype._setOption.apply(this, arguments)
    },
        _size: function () {
            var a = this.options, c, f, d = this.uiDialog.is(":visible");
            this.element.show().css({width: "auto", minHeight: 0, height: 0});
            a.minWidth > a.width && (a.width = a.minWidth);
            c = this.uiDialog.css({height: "auto", width: a.width}).height();
            f = Math.max(0, a.minHeight - c);
            "auto" === a.height ? b.support.minHeight ? this.element.css({minHeight: f, height: "auto"}) : (this.uiDialog.show(), a = this.element.css("height", "auto").height(), d || this.uiDialog.hide(), this.element.height(Math.max(a, f))) : this.element.height(Math.max(a.height -
                c, 0));
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }});
    b.extend(b.ui.dialog, {version: "1.8.14", uuid: 0, maxZ: 0, getTitleId: function (b) {
        b = b.attr("id");
        b || (b = this.uuid += 1);
        return"ui-dialog-title-" + b
    }, overlay: function (a) {
        this.$el = b.ui.dialog.overlay.create(a)
    }});
    b.extend(b.ui.dialog.overlay, {instances: [], oldInstances: [], maxZ: 0, events: b.map("focus mousedown mouseup keydown keypress click".split(" "),function (b) {
        return b + ".dialog-overlay"
    }).join(" "),
        create: function (a) {
            0 === this.instances.length && (setTimeout(function () {
                b.ui.dialog.overlay.instances.length && b(document).bind(b.ui.dialog.overlay.events, function (a) {
                    if (b(a.target).zIndex() < b.ui.dialog.overlay.maxZ)return!1
                })
            }, 1), b(document).bind("keydown.dialog-overlay", function (c) {
                a.options.closeOnEscape && (c.keyCode && c.keyCode === b.ui.keyCode.ESCAPE) && (a.close(c), c.preventDefault())
            }), b(window).bind("resize.dialog-overlay", b.ui.dialog.overlay.resize));
            var c = (this.oldInstances.pop() || b("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width: this.width(),
                height: this.height()});
            b.fn.bgiframe && c.bgiframe();
            this.instances.push(c);
            return c
        }, destroy: function (a) {
            var c = b.inArray(a, this.instances);
            -1 != c && this.oldInstances.push(this.instances.splice(c, 1)[0]);
            0 === this.instances.length && b([document, window]).unbind(".dialog-overlay");
            a.remove();
            var f = 0;
            b.each(this.instances, function () {
                f = Math.max(f, this.css("z-index"))
            });
            this.maxZ = f
        }, height: function () {
            var a, c;
            return b.browser.msie && 7 > b.browser.version ? (a = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
                c = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), a < c ? b(window).height() + "px" : a + "px") : b(document).height() + "px"
        }, width: function () {
            var a, c;
            return b.browser.msie ? (a = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), c = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), a < c ? b(window).width() + "px" : a + "px") : b(document).width() + "px"
        }, resize: function () {
            var a = b([]);
            b.each(b.ui.dialog.overlay.instances, function () {
                a = a.add(this)
            });
            a.css({width: 0,
                height: 0}).css({width: b.ui.dialog.overlay.width(), height: b.ui.dialog.overlay.height()})
        }});
    b.extend(b.ui.dialog.overlay.prototype, {destroy: function () {
        b.ui.dialog.overlay.destroy(this.$el)
    }})
})(jQuery);
(function (b) {
    b.widget("ui.slider", b.ui.mouse, {widgetEventPrefix: "slide", options: {animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null}, _create: function () {
        var a = this, c = this.options, d = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), g = c.values && c.values.length || 1, h = [];
        this._mouseSliding = this._keySliding = !1;
        this._animateOff = !0;
        this._handleIndex = null;
        this._detectOrientation();
        this._mouseInit();
        this.element.addClass("ui-slider ui-slider-" +
            this.orientation + " ui-widget ui-widget-content ui-corner-all" + (c.disabled ? " ui-slider-disabled ui-disabled" : ""));
        this.range = b([]);
        if (c.range) {
            if (!0 === c.range && (c.values || (c.values = [this._valueMin(), this._valueMin()]), c.values.length && 2 !== c.values.length))c.values = [c.values[0], c.values[0]];
            this.range = b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === c.range || "max" === c.range ? " ui-slider-range-" + c.range : ""))
        }
        for (var e = d.length; e < g; e += 1)h.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
        this.handles = d.add(b(h.join("")).appendTo(a.element));
        this.handle = this.handles.eq(0);
        this.handles.add(this.range).filter("a").click(function (b) {
            b.preventDefault()
        }).hover(function () {
            c.disabled || b(this).addClass("ui-state-hover")
        },function () {
            b(this).removeClass("ui-state-hover")
        }).focus(function () {
            c.disabled ? b(this).blur() : (b(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), b(this).addClass("ui-state-focus"))
        }).blur(function () {
            b(this).removeClass("ui-state-focus")
        });
        this.handles.each(function (a) {
            b(this).data("index.ui-slider-handle",
                a)
        });
        this.handles.keydown(function (c) {
            var d = !0, g = b(this).data("index.ui-slider-handle"), e, h, m;
            if (!a.options.disabled) {
                switch (c.keyCode) {
                    case b.ui.keyCode.HOME:
                    case b.ui.keyCode.END:
                    case b.ui.keyCode.PAGE_UP:
                    case b.ui.keyCode.PAGE_DOWN:
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        if (d = !1, !a._keySliding && (a._keySliding = !0, b(this).addClass("ui-state-active"), e = a._start(c, g), !1 === e))return
                }
                m = a.options.step;
                e = a.options.values && a.options.values.length ? h = a.values(g) :
                    h = a.value();
                switch (c.keyCode) {
                    case b.ui.keyCode.HOME:
                        h = a._valueMin();
                        break;
                    case b.ui.keyCode.END:
                        h = a._valueMax();
                        break;
                    case b.ui.keyCode.PAGE_UP:
                        h = a._trimAlignValue(e + (a._valueMax() - a._valueMin()) / 5);
                        break;
                    case b.ui.keyCode.PAGE_DOWN:
                        h = a._trimAlignValue(e - (a._valueMax() - a._valueMin()) / 5);
                        break;
                    case b.ui.keyCode.UP:
                    case b.ui.keyCode.RIGHT:
                        if (e === a._valueMax())return;
                        h = a._trimAlignValue(e + m);
                        break;
                    case b.ui.keyCode.DOWN:
                    case b.ui.keyCode.LEFT:
                        if (e === a._valueMin())return;
                        h = a._trimAlignValue(e - m)
                }
                a._slide(c,
                    g, h);
                return d
            }
        }).keyup(function (c) {
            var d = b(this).data("index.ui-slider-handle");
            a._keySliding && (a._keySliding = !1, a._stop(c, d), a._change(c, d), b(this).removeClass("ui-state-active"))
        });
        this._refreshValue();
        this._animateOff = !1
    }, destroy: function () {
        this.handles.remove();
        this.range.remove();
        this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
        this._mouseDestroy();
        return this
    }, _mouseCapture: function (a) {
        var c =
            this.options, d, g, h, e, f;
        if (c.disabled)return!1;
        this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()};
        this.elementOffset = this.element.offset();
        d = this._normValueFromMouse({x: a.pageX, y: a.pageY});
        g = this._valueMax() - this._valueMin() + 1;
        e = this;
        this.handles.each(function (a) {
            var c = Math.abs(d - e.values(a));
            g > c && (g = c, h = b(this), f = a)
        });
        !0 === c.range && this.values(1) === c.min && (f += 1, h = b(this.handles[f]));
        if (!1 === this._start(a, f))return!1;
        this._mouseSliding = !0;
        e._handleIndex = f;
        h.addClass("ui-state-active").focus();
        c = h.offset();
        this._clickOffset = !b(a.target).parents().andSelf().is(".ui-slider-handle") ? {left: 0, top: 0} : {left: a.pageX - c.left - h.width() / 2, top: a.pageY - c.top - h.height() / 2 - (parseInt(h.css("borderTopWidth"), 10) || 0) - (parseInt(h.css("borderBottomWidth"), 10) || 0) + (parseInt(h.css("marginTop"), 10) || 0)};
        this.handles.hasClass("ui-state-hover") || this._slide(a, f, d);
        return this._animateOff = !0
    }, _mouseStart: function () {
        return!0
    }, _mouseDrag: function (b) {
        var c = this._normValueFromMouse({x: b.pageX, y: b.pageY});
        this._slide(b,
            this._handleIndex, c);
        return!1
    }, _mouseStop: function (b) {
        this.handles.removeClass("ui-state-active");
        this._mouseSliding = !1;
        this._stop(b, this._handleIndex);
        this._change(b, this._handleIndex);
        this._clickOffset = this._handleIndex = null;
        return this._animateOff = !1
    }, _detectOrientation: function () {
        this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    }, _normValueFromMouse: function (b) {
        var c;
        "horizontal" === this.orientation ? (c = this.elementSize.width, b = b.x - this.elementOffset.left - (this._clickOffset ?
            this._clickOffset.left : 0)) : (c = this.elementSize.height, b = b.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0));
        c = b / c;
        1 < c && (c = 1);
        0 > c && (c = 0);
        "vertical" === this.orientation && (c = 1 - c);
        b = this._valueMax() - this._valueMin();
        return this._trimAlignValue(this._valueMin() + c * b)
    }, _start: function (b, c) {
        var d = {handle: this.handles[c], value: this.value()};
        this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values());
        return this._trigger("start", b, d)
    }, _slide: function (b, c, d) {
        var g;
        if (this.options.values && this.options.values.length) {
            g = this.values(c ? 0 : 1);
            if (2 === this.options.values.length && !0 === this.options.range && (0 === c && d > g || 1 === c && d < g))d = g;
            d !== this.values(c) && (g = this.values(), g[c] = d, b = this._trigger("slide", b, {handle: this.handles[c], value: d, values: g}), this.values(c ? 0 : 1), !1 !== b && this.values(c, d, !0))
        } else d !== this.value() && (b = this._trigger("slide", b, {handle: this.handles[c], value: d}), !1 !== b && this.value(d))
    }, _stop: function (b, c) {
        var d = {handle: this.handles[c], value: this.value()};
        this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values());
        this._trigger("stop", b, d)
    }, _change: function (b, c) {
        if (!this._keySliding && !this._mouseSliding) {
            var d = {handle: this.handles[c], value: this.value()};
            this.options.values && this.options.values.length && (d.value = this.values(c), d.values = this.values());
            this._trigger("change", b, d)
        }
    }, value: function (b) {
        if (arguments.length)this.options.value = this._trimAlignValue(b), this._refreshValue(), this._change(null, 0); else return this._value()
    },
        values: function (a, c) {
            var d, g, h;
            if (1 < arguments.length)this.options.values[a] = this._trimAlignValue(c), this._refreshValue(), this._change(null, a); else if (arguments.length)if (b.isArray(arguments[0])) {
                d = this.options.values;
                g = arguments[0];
                for (h = 0; h < d.length; h += 1)d[h] = this._trimAlignValue(g[h]), this._change(null, h);
                this._refreshValue()
            } else return this.options.values && this.options.values.length ? this._values(a) : this.value(); else return this._values()
        }, _setOption: function (a, c) {
            var d, g = 0;
            b.isArray(this.options.values) &&
            (g = this.options.values.length);
            b.Widget.prototype._setOption.apply(this, arguments);
            switch (a) {
                case "disabled":
                    c ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.attr("disabled", "disabled"), this.element.addClass("ui-disabled")) : (this.handles.removeAttr("disabled"), this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0;
                    this._refreshValue();
                    for (d = 0; d < g; d += 1)this._change(null, d);
                    this._animateOff = !1
            }
        }, _value: function () {
            var b = this.options.value;
            return b = this._trimAlignValue(b)
        }, _values: function (b) {
            var c, d;
            if (arguments.length)return c = this.options.values[b], c = this._trimAlignValue(c);
            c = this.options.values.slice();
            for (d = 0; d < c.length; d += 1)c[d] = this._trimAlignValue(c[d]);
            return c
        }, _trimAlignValue: function (b) {
            if (b <= this._valueMin())return this._valueMin();
            if (b >= this._valueMax())return this._valueMax();
            var c = 0 < this.options.step ? this.options.step : 1, d = (b - this._valueMin()) % c;
            alignValue = b - d;
            2 * Math.abs(d) >= c && (alignValue += 0 < d ? c : -c);
            return parseFloat(alignValue.toFixed(5))
        }, _valueMin: function () {
            return this.options.min
        }, _valueMax: function () {
            return this.options.max
        }, _refreshValue: function () {
            var a = this.options.range, c = this.options, d = this, g = !this._animateOff ? c.animate : !1, h, e =
            {}, f, i, j, k;
            if (this.options.values && this.options.values.length)this.handles.each(function (a) {
                h = 100 * ((d.values(a) - d._valueMin()) / (d._valueMax() - d._valueMin()));
                e["horizontal" === d.orientation ? "left" : "bottom"] = h + "%";
                b(this).stop(1, 1)[g ? "animate" : "css"](e, c.animate);
                if (!0 === d.options.range)if ("horizontal" === d.orientation) {
                    if (0 === a)d.range.stop(1, 1)[g ? "animate" : "css"]({left: h + "%"}, c.animate);
                    if (1 === a)d.range[g ? "animate" : "css"]({width: h - f + "%"}, {queue: !1, duration: c.animate})
                } else {
                    if (0 === a)d.range.stop(1,
                        1)[g ? "animate" : "css"]({bottom: h + "%"}, c.animate);
                    if (1 === a)d.range[g ? "animate" : "css"]({height: h - f + "%"}, {queue: !1, duration: c.animate})
                }
                f = h
            }); else {
                i = this.value();
                j = this._valueMin();
                k = this._valueMax();
                h = k !== j ? 100 * ((i - j) / (k - j)) : 0;
                e["horizontal" === d.orientation ? "left" : "bottom"] = h + "%";
                this.handle.stop(1, 1)[g ? "animate" : "css"](e, c.animate);
                if ("min" === a && "horizontal" === this.orientation)this.range.stop(1, 1)[g ? "animate" : "css"]({width: h + "%"}, c.animate);
                if ("max" === a && "horizontal" === this.orientation)this.range[g ?
                    "animate" : "css"]({width: 100 - h + "%"}, {queue: !1, duration: c.animate});
                if ("min" === a && "vertical" === this.orientation)this.range.stop(1, 1)[g ? "animate" : "css"]({height: h + "%"}, c.animate);
                if ("max" === a && "vertical" === this.orientation)this.range[g ? "animate" : "css"]({height: 100 - h + "%"}, {queue: !1, duration: c.animate})
            }
        }});
    b.extend(b.ui.slider, {version: "1.8.14"})
})(jQuery);
(function (b, a) {
    var c = 0, d = 0;
    b.widget("ui.tabs", {options: {add: null, ajaxOptions: null, cache: !1, cookie: null, collapsible: !1, disable: null, disabled: [], enable: null, event: "click", fx: null, idPrefix: "ui-tabs-", load: null, panelTemplate: "<div></div>", remove: null, select: null, show: null, spinner: "<em>Loading&#8230;</em>", tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"}, _create: function () {
        this._tabify(!0)
    }, _setOption: function (b, a) {
        "selected" == b ? this.options.collapsible && a == this.options.selected || this.select(a) :
            (this.options[b] = a, this._tabify())
    }, _tabId: function (b) {
        return b.title && b.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + ++c
    }, _sanitizeSelector: function (b) {
        return b.replace(/:/g, "\\:")
    }, _cookie: function () {
        var a = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++d);
        return b.cookie.apply(null, [a].concat(b.makeArray(arguments)))
    }, _ui: function (b, a) {
        return{tab: b, panel: a, index: this.anchors.index(b)}
    }, _cleanup: function () {
        this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
            var a =
                b(this);
            a.html(a.data("label.tabs")).removeData("label.tabs")
        })
    }, _tabify: function (c) {
        function d(a, c) {
            a.css("display", "");
            !b.support.opacity && c.opacity && a[0].style.removeAttribute("filter")
        }

        var e = this, f = this.options, i = /^#.+/;
        this.list = this.element.find("ol,ul").eq(0);
        this.lis = b(" > li:has(a[href])", this.list);
        this.anchors = this.lis.map(function () {
            return b("a", this)[0]
        });
        this.panels = b([]);
        this.anchors.each(function (a, c) {
            var d = b(c).attr("href"), g = d.split("#")[0], h;
            if (g && (g === location.toString().split("#")[0] ||
                (h = b("base")[0]) && g === h.href))d = c.hash, c.href = d;
            i.test(d) ? e.panels = e.panels.add(e.element.find(e._sanitizeSelector(d))) : d && "#" !== d ? (b.data(c, "href.tabs", d), b.data(c, "load.tabs", d.replace(/#.*$/, "")), d = e._tabId(c), c.href = "#" + d, g = e.element.find("#" + d), g.length || (g = b(f.panelTemplate).attr("id", d).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(e.panels[a - 1] || e.list), g.data("destroy.tabs", !0)), e.panels = e.panels.add(g)) : f.disabled.push(a)
        });
        c ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),
            this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), f.selected === a ? (location.hash && this.anchors.each(function (b, a) {
            if (a.hash == location.hash)return f.selected = b, !1
        }), "number" !== typeof f.selected && f.cookie && (f.selected = parseInt(e._cookie(), 10)), "number" !== typeof f.selected && this.lis.filter(".ui-tabs-selected").length && (f.selected =
            this.lis.index(this.lis.filter(".ui-tabs-selected"))), f.selected = f.selected || (this.lis.length ? 0 : -1)) : null === f.selected && (f.selected = -1), f.selected = 0 <= f.selected && this.anchors[f.selected] || 0 > f.selected ? f.selected : 0, f.disabled = b.unique(f.disabled.concat(b.map(this.lis.filter(".ui-state-disabled"), function (b) {
            return e.lis.index(b)
        }))).sort(), -1 != b.inArray(f.selected, f.disabled) && f.disabled.splice(b.inArray(f.selected, f.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"),
            0 <= f.selected && this.anchors.length && (e.element.find(e._sanitizeSelector(e.anchors[f.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(f.selected).addClass("ui-tabs-selected ui-state-active"), e.element.queue("tabs", function () {
                e._trigger("show", null, e._ui(e.anchors[f.selected], e.element.find(e._sanitizeSelector(e.anchors[f.selected].hash))[0]))
            }), this.load(f.selected)), b(window).bind("unload", function () {
            e.lis.add(e.anchors).unbind(".tabs");
            e.lis = e.anchors = e.panels = null
        })) : f.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
        this.element[f.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible");
        f.cookie && this._cookie(f.selected, f.cookie);
        for (var c = 0, j; j = this.lis[c]; c++)b(j)[-1 != b.inArray(c, f.disabled) && !b(j).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
        !1 === f.cache && this.anchors.removeData("cache.tabs");
        this.lis.add(this.anchors).unbind(".tabs");
        if ("mouseover" !== f.event) {
            var k = function (b, a) {
                a.is(":not(.ui-state-disabled)") && a.addClass("ui-state-" + b)
            };
            this.lis.bind("mouseover.tabs",
                function () {
                    k("hover", b(this))
                });
            this.lis.bind("mouseout.tabs", function () {
                b(this).removeClass("ui-state-hover")
            });
            this.anchors.bind("focus.tabs", function () {
                k("focus", b(this).closest("li"))
            });
            this.anchors.bind("blur.tabs", function () {
                b(this).closest("li").removeClass("ui-state-focus")
            })
        }
        var l, m;
        f.fx && (b.isArray(f.fx) ? (l = f.fx[0], m = f.fx[1]) : l = m = f.fx);
        var p = m ? function (a, c) {
            b(a).closest("li").addClass("ui-tabs-selected ui-state-active");
            c.hide().removeClass("ui-tabs-hide").animate(m, m.duration || "normal",
                function () {
                    d(c, m);
                    e._trigger("show", null, e._ui(a, c[0]))
                })
        } : function (a, c) {
            b(a).closest("li").addClass("ui-tabs-selected ui-state-active");
            c.removeClass("ui-tabs-hide");
            e._trigger("show", null, e._ui(a, c[0]))
        }, n = l ? function (b, a) {
            a.animate(l, l.duration || "normal", function () {
                e.lis.removeClass("ui-tabs-selected ui-state-active");
                a.addClass("ui-tabs-hide");
                d(a, l);
                e.element.dequeue("tabs")
            })
        } : function (b, a) {
            e.lis.removeClass("ui-tabs-selected ui-state-active");
            a.addClass("ui-tabs-hide");
            e.element.dequeue("tabs")
        };
        this.anchors.bind(f.event + ".tabs", function () {
            var a = this, c = b(a).closest("li"), d = e.panels.filter(":not(.ui-tabs-hide)"), i = e.element.find(e._sanitizeSelector(a.hash));
            if (c.hasClass("ui-tabs-selected") && !f.collapsible || c.hasClass("ui-state-disabled") || c.hasClass("ui-state-processing") || e.panels.filter(":animated").length || e._trigger("select", null, e._ui(this, i[0])) === false) {
                this.blur();
                return false
            }
            f.selected = e.anchors.index(this);
            e.abort();
            if (f.collapsible) {
                if (c.hasClass("ui-tabs-selected")) {
                    f.selected = -1;
                    f.cookie && e._cookie(f.selected, f.cookie);
                    e.element.queue("tabs",function () {
                        n(a, d)
                    }).dequeue("tabs");
                    this.blur();
                    return false
                }
                if (!d.length) {
                    f.cookie && e._cookie(f.selected, f.cookie);
                    e.element.queue("tabs", function () {
                        p(a, i)
                    });
                    e.load(e.anchors.index(this));
                    this.blur();
                    return false
                }
            }
            f.cookie && e._cookie(f.selected, f.cookie);
            if (i.length) {
                d.length && e.element.queue("tabs", function () {
                    n(a, d)
                });
                e.element.queue("tabs", function () {
                    p(a, i)
                });
                e.load(e.anchors.index(this))
            } else throw"jQuery UI Tabs: Mismatching fragment identifier.";
            b.browser.msie && this.blur()
        });
        this.anchors.bind("click.tabs", function () {
            return false
        })
    }, _getIndex: function (b) {
        "string" == typeof b && (b = this.anchors.index(this.anchors.filter("[href$=" + b + "]")));
        return b
    }, destroy: function () {
        var a = this.options;
        this.abort();
        this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
        this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
        this.anchors.each(function () {
            var a =
                b.data(this, "href.tabs");
            a && (this.href = a);
            var c = b(this).unbind(".tabs");
            b.each(["href", "load", "cache"], function (b, a) {
                c.removeData(a + ".tabs")
            })
        });
        this.lis.unbind(".tabs").add(this.panels).each(function () {
            b.data(this, "destroy.tabs") ? b(this).remove() : b(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
        });
        a.cookie && this._cookie(null, a.cookie);
        return this
    }, add: function (c, d, e) {
        e === a && (e = this.anchors.length);
        var f = this, i = this.options, d = b(i.tabTemplate.replace(/#\{href\}/g, c).replace(/#\{label\}/g, d)), c = !c.indexOf("#") ? c.replace("#", "") : this._tabId(b("a", d)[0]);
        d.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
        var j = f.element.find("#" + c);
        j.length || (j = b(i.panelTemplate).attr("id", c).data("destroy.tabs", !0));
        j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
        e >= this.lis.length ? (d.appendTo(this.list), j.appendTo(this.list[0].parentNode)) :
            (d.insertBefore(this.lis[e]), j.insertBefore(this.panels[e]));
        i.disabled = b.map(i.disabled, function (b) {
            return b >= e ? ++b : b
        });
        this._tabify();
        1 == this.anchors.length && (i.selected = 0, d.addClass("ui-tabs-selected ui-state-active"), j.removeClass("ui-tabs-hide"), this.element.queue("tabs", function () {
            f._trigger("show", null, f._ui(f.anchors[0], f.panels[0]))
        }), this.load(0));
        this._trigger("add", null, this._ui(this.anchors[e], this.panels[e]));
        return this
    }, remove: function (a) {
        var a = this._getIndex(a), c = this.options, d = this.lis.eq(a).remove(),
            f = this.panels.eq(a).remove();
        d.hasClass("ui-tabs-selected") && 1 < this.anchors.length && this.select(a + (a + 1 < this.anchors.length ? 1 : -1));
        c.disabled = b.map(b.grep(c.disabled, function (b) {
            return b != a
        }), function (b) {
            return b >= a ? --b : b
        });
        this._tabify();
        this._trigger("remove", null, this._ui(d.find("a")[0], f[0]));
        return this
    }, enable: function (a) {
        var a = this._getIndex(a), c = this.options;
        if (-1 != b.inArray(a, c.disabled))return this.lis.eq(a).removeClass("ui-state-disabled"), c.disabled = b.grep(c.disabled, function (b) {
            return b !=
                a
        }), this._trigger("enable", null, this._ui(this.anchors[a], this.panels[a])), this
    }, disable: function (b) {
        var b = this._getIndex(b), a = this.options;
        b != a.selected && (this.lis.eq(b).addClass("ui-state-disabled"), a.disabled.push(b), a.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[b], this.panels[b])));
        return this
    }, select: function (b) {
        b = this._getIndex(b);
        if (-1 == b)if (this.options.collapsible && -1 != this.options.selected)b = this.options.selected; else return this;
        this.anchors.eq(b).trigger(this.options.event +
            ".tabs");
        return this
    }, load: function (a) {
        var a = this._getIndex(a), c = this, d = this.options, f = this.anchors.eq(a)[0], i = b.data(f, "load.tabs");
        this.abort();
        if (!i || 0 !== this.element.queue("tabs").length && b.data(f, "cache.tabs"))this.element.dequeue("tabs"); else {
            this.lis.eq(a).addClass("ui-state-processing");
            if (d.spinner) {
                var j = b("span", f);
                j.data("label.tabs", j.html()).html(d.spinner)
            }
            this.xhr = b.ajax(b.extend({}, d.ajaxOptions, {url: i, success: function (i, j) {
                c.element.find(c._sanitizeSelector(f.hash)).html(i);
                c._cleanup();
                d.cache && b.data(f, "cache.tabs", !0);
                c._trigger("load", null, c._ui(c.anchors[a], c.panels[a]));
                try {
                    d.ajaxOptions.success(i, j)
                } catch (m) {
                }
            }, error: function (b, i) {
                c._cleanup();
                c._trigger("load", null, c._ui(c.anchors[a], c.panels[a]));
                try {
                    d.ajaxOptions.error(b, i, a, f)
                } catch (m) {
                }
            }}));
            c.element.dequeue("tabs");
            return this
        }
    }, abort: function () {
        this.element.queue([]);
        this.panels.stop(!1, !0);
        this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2));
        this.xhr && (this.xhr.abort(), delete this.xhr);
        this._cleanup();
        return this
    }, url: function (b, a) {
        this.anchors.eq(b).removeData("cache.tabs").data("load.tabs", a);
        return this
    }, length: function () {
        return this.anchors.length
    }});
    b.extend(b.ui.tabs, {version: "1.8.14"});
    b.extend(b.ui.tabs.prototype, {rotation: null, rotate: function (b, a) {
        var c = this, f = this.options, d = c._rotate || (c._rotate = function (a) {
            clearTimeout(c.rotation);
            c.rotation = setTimeout(function () {
                var b = f.selected;
                c.select(++b < c.anchors.length ? b : 0)
            }, b);
            a && a.stopPropagation()
        }), j = c._unrotate || (c._unrotate = !a ? function (b) {
            b.clientX &&
            c.rotate(null)
        } : function () {
            t = f.selected;
            d()
        });
        b ? (this.element.bind("tabsshow", d), this.anchors.bind(f.event + ".tabs", j), d()) : (clearTimeout(c.rotation), this.element.unbind("tabsshow", d), this.anchors.unbind(f.event + ".tabs", j), delete this._rotate, delete this._unrotate);
        return this
    }})
})(jQuery);
(function (b, a) {
    function c() {
        this.debug = !1;
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass =
            "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: "January February March April May June July August September October November December".split(" "), monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "), dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
            weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""};
        this._defaults = {showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null,
            beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1};
        b.extend(this._defaults, this.regional[""]);
        this.dpDiv = d(b('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }

    function d(a) {
        return a.bind("mouseout",function (a) {
            a = b(a.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
            a.length && a.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function (c) {
            c = b(c.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
            if (!b.datepicker._isDisabledDatepicker(e.inline ? a.parent()[0] : e.input[0]) && c.length)c.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), c.addClass("ui-state-hover"), c.hasClass("ui-datepicker-prev") && c.addClass("ui-datepicker-prev-hover"), c.hasClass("ui-datepicker-next") &&
                c.addClass("ui-datepicker-next-hover")
        })
    }

    function g(c, d) {
        b.extend(c, d);
        for (var e in d)if (null == d[e] || d[e] == a)c[e] = d[e];
        return c
    }

    b.extend(b.ui, {datepicker: {version: "1.8.14"}});
    var h = (new Date).getTime(), e;
    b.extend(c.prototype, {markerClassName: "hasDatepicker", maxRows: 4, log: function () {
        this.debug && console.log.apply("", arguments)
    }, _widgetDatepicker: function () {
        return this.dpDiv
    }, setDefaults: function (b) {
        g(this._defaults, b || {});
        return this
    }, _attachDatepicker: function (a, c) {
        var d = null, e;
        for (e in this._defaults) {
            var g =
                a.getAttribute("date:" + e);
            if (g) {
                d = d || {};
                try {
                    d[e] = eval(g)
                } catch (m) {
                    d[e] = g
                }
            }
        }
        e = a.nodeName.toLowerCase();
        g = "div" == e || "span" == e;
        a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
        var h = this._newInst(b(a), g);
        h.settings = b.extend({}, c || {}, d || {});
        "input" == e ? this._connectDatepicker(a, h) : g && this._inlineDatepicker(a, h)
    }, _newInst: function (a, c) {
        return{id: a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"), input: a, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: c, dpDiv: !c ? this.dpDiv : d(b('<div class="' +
            this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}
    }, _connectDatepicker: function (a, c) {
        var d = b(a);
        c.append = b([]);
        c.trigger = b([]);
        d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function (b, a, f) {
            c.settings[a] = f
        }).bind("getData.datepicker", function (b, a) {
            return this._get(c, a)
        }), this._autoSize(c), b.data(a, "datepicker",
            c))
    }, _attachments: function (a, c) {
        var d = this._get(c, "appendText"), e = this._get(c, "isRTL");
        c.append && c.append.remove();
        d && (c.append = b('<span class="' + this._appendClass + '">' + d + "</span>"), a[e ? "before" : "after"](c.append));
        a.unbind("focus", this._showDatepicker);
        c.trigger && c.trigger.remove();
        d = this._get(c, "showOn");
        ("focus" == d || "both" == d) && a.focus(this._showDatepicker);
        if ("button" == d || "both" == d) {
            var d = this._get(c, "buttonText"), g = this._get(c, "buttonImage");
            c.trigger = b(this._get(c, "buttonImageOnly") ? b("<img/>").addClass(this._triggerClass).attr({src: g,
                alt: d, title: d}) : b('<button type="button"></button>').addClass(this._triggerClass).html("" == g ? d : b("<img/>").attr({src: g, alt: d, title: d})));
            a[e ? "before" : "after"](c.trigger);
            c.trigger.click(function () {
                b.datepicker._datepickerShowing && b.datepicker._lastInput == a[0] ? b.datepicker._hideDatepicker() : b.datepicker._showDatepicker(a[0]);
                return false
            })
        }
    }, _autoSize: function (b) {
        if (this._get(b, "autoSize") && !b.inline) {
            var a = new Date(2009, 11, 20), c = this._get(b, "dateFormat");
            if (c.match(/[DM]/)) {
                var d = function (b) {
                    for (var a =
                        0, c = 0, f = 0; f < b.length; f++)b[f].length > a && (a = b[f].length, c = f);
                    return c
                };
                a.setMonth(d(this._get(b, c.match(/MM/) ? "monthNames" : "monthNamesShort")));
                a.setDate(d(this._get(b, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())
            }
            b.input.attr("size", this._formatDate(b, a).length)
        }
    }, _inlineDatepicker: function (a, c) {
        var d = b(a);
        d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv).bind("setData.datepicker",function (b, a, f) {
            c.settings[a] = f
        }).bind("getData.datepicker", function (b, a) {
            return this._get(c, a)
        }), b.data(a, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.dpDiv.show())
    }, _dialogDatepicker: function (a, c, d, e, h) {
        a = this._dialogInst;
        a || (this.uuid += 1, this._dialogInput = b('<input type="text" id="dp' + this.uuid + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), b("body").append(this._dialogInput), a = this._dialogInst = this._newInst(this._dialogInput, !1),
            a.settings = {}, b.data(this._dialogInput[0], "datepicker", a));
        g(a.settings, e || {});
        c = c && c.constructor == Date ? this._formatDate(a, c) : c;
        this._dialogInput.val(c);
        this._pos = h ? h.length ? h : [h.pageX, h.pageY] : null;
        this._pos || (this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]);
        this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] +
            "px");
        a.settings.onSelect = d;
        this._inDialog = !0;
        this.dpDiv.addClass(this._dialogClass);
        this._showDatepicker(this._dialogInput[0]);
        b.blockUI && b.blockUI(this.dpDiv);
        b.data(this._dialogInput[0], "datepicker", a);
        return this
    }, _destroyDatepicker: function (a) {
        var c = b(a), d = b.data(a, "datepicker");
        if (c.hasClass(this.markerClassName)) {
            var e = a.nodeName.toLowerCase();
            b.removeData(a, "datepicker");
            "input" == e ? (d.append.remove(), d.trigger.remove(), c.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown",
                this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == e || "span" == e) && c.removeClass(this.markerClassName).empty()
        }
    }, _enableDatepicker: function (a) {
        var c = b(a), d = b.data(a, "datepicker");
        if (c.hasClass(this.markerClassName)) {
            var e = a.nodeName.toLowerCase();
            if ("input" == e)a.disabled = !1, d.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({opacity: "1.0", cursor: ""}); else if ("div" == e || "span" == e)c = c.children("." + this._inlineClass), c.children().removeClass("ui-state-disabled"),
                c.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
            this._disabledInputs = b.map(this._disabledInputs, function (b) {
                return b == a ? null : b
            })
        }
    }, _disableDatepicker: function (a) {
        var c = b(a), d = b.data(a, "datepicker");
        if (c.hasClass(this.markerClassName)) {
            var e = a.nodeName.toLowerCase();
            if ("input" == e)a.disabled = !0, d.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({opacity: "0.5", cursor: "default"}); else if ("div" == e || "span" == e)c = c.children("." + this._inlineClass),
                c.children().addClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
            this._disabledInputs = b.map(this._disabledInputs, function (b) {
                return b == a ? null : b
            });
            this._disabledInputs[this._disabledInputs.length] = a
        }
    }, _isDisabledDatepicker: function (b) {
        if (!b)return!1;
        for (var a = 0; a < this._disabledInputs.length; a++)if (this._disabledInputs[a] == b)return!0;
        return!1
    }, _getInst: function (a) {
        try {
            return b.data(a, "datepicker")
        } catch (c) {
            throw"Missing instance data for this datepicker";
        }
    }, _optionDatepicker: function (c, d, e) {
        var h = this._getInst(c);
        if (2 == arguments.length && "string" == typeof d)return"defaults" == d ? b.extend({}, b.datepicker._defaults) : h ? "all" == d ? b.extend({}, h.settings) : this._get(h, d) : null;
        var l = d || {};
        "string" == typeof d && (l = {}, l[d] = e);
        if (h) {
            this._curInst == h && this._hideDatepicker();
            var m = this._getDateDatepicker(c, !0), p = this._getMinMaxDate(h, "min"), n = this._getMinMaxDate(h, "max");
            g(h.settings, l);
            null !== p && (l.dateFormat !== a && l.minDate === a) && (h.settings.minDate = this._formatDate(h,
                p));
            null !== n && (l.dateFormat !== a && l.maxDate === a) && (h.settings.maxDate = this._formatDate(h, n));
            this._attachments(b(c), h);
            this._autoSize(h);
            this._setDate(h, m);
            this._updateAlternate(h);
            this._updateDatepicker(h)
        }
    }, _changeDatepicker: function (b, a, c) {
        this._optionDatepicker(b, a, c)
    }, _refreshDatepicker: function (b) {
        (b = this._getInst(b)) && this._updateDatepicker(b)
    }, _setDateDatepicker: function (b, a) {
        var c = this._getInst(b);
        c && (this._setDate(c, a), this._updateDatepicker(c), this._updateAlternate(c))
    }, _getDateDatepicker: function (b, a) {
        var c = this._getInst(b);
        c && !c.inline && this._setDateFromField(c, a);
        return c ? this._getDate(c) : null
    }, _doKeyDown: function (a) {
        var c = b.datepicker._getInst(a.target), d = !0, e = c.dpDiv.is(".ui-datepicker-rtl");
        c._keyEvent = !0;
        if (b.datepicker._datepickerShowing)switch (a.keyCode) {
            case 9:
                b.datepicker._hideDatepicker();
                d = !1;
                break;
            case 13:
                return d = b("td." + b.datepicker._dayOverClass + ":not(." + b.datepicker._currentClass + ")", c.dpDiv), d[0] ? b.datepicker._selectDay(a.target, c.selectedMonth, c.selectedYear, d[0]) : b.datepicker._hideDatepicker(),
                    !1;
            case 27:
                b.datepicker._hideDatepicker();
                break;
            case 33:
                b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(c, "stepBigMonths") : -b.datepicker._get(c, "stepMonths"), "M");
                break;
            case 34:
                b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(c, "stepBigMonths") : +b.datepicker._get(c, "stepMonths"), "M");
                break;
            case 35:
                (a.ctrlKey || a.metaKey) && b.datepicker._clearDate(a.target);
                d = a.ctrlKey || a.metaKey;
                break;
            case 36:
                (a.ctrlKey || a.metaKey) && b.datepicker._gotoToday(a.target);
                d = a.ctrlKey || a.metaKey;
                break;
            case 37:
                if (a.ctrlKey || a.metaKey)b.datepicker._adjustDate(a.target, e ? 1 : -1, "D");
                d = a.ctrlKey || a.metaKey;
                a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(c, "stepBigMonths") : -b.datepicker._get(c, "stepMonths"), "M");
                break;
            case 38:
                (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, -7, "D");
                d = a.ctrlKey || a.metaKey;
                break;
            case 39:
                if (a.ctrlKey || a.metaKey)b.datepicker._adjustDate(a.target, e ? -1 : 1, "D");
                d = a.ctrlKey || a.metaKey;
                a.originalEvent.altKey && b.datepicker._adjustDate(a.target,
                    a.ctrlKey ? +b.datepicker._get(c, "stepBigMonths") : +b.datepicker._get(c, "stepMonths"), "M");
                break;
            case 40:
                (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, 7, "D");
                d = a.ctrlKey || a.metaKey;
                break;
            default:
                d = !1
        } else 36 == a.keyCode && a.ctrlKey ? b.datepicker._showDatepicker(this) : d = !1;
        d && (a.preventDefault(), a.stopPropagation())
    }, _doKeyPress: function (c) {
        var d = b.datepicker._getInst(c.target);
        if (b.datepicker._get(d, "constrainInput")) {
            var d = b.datepicker._possibleChars(b.datepicker._get(d, "dateFormat")), e = String.fromCharCode(c.charCode ==
                a ? c.keyCode : c.charCode);
            return c.ctrlKey || c.metaKey || " " > e || !d || -1 < d.indexOf(e)
        }
    }, _doKeyUp: function (a) {
        a = b.datepicker._getInst(a.target);
        if (a.input.val() != a.lastVal)try {
            if (b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, b.datepicker._getFormatConfig(a)))b.datepicker._setDateFromField(a), b.datepicker._updateAlternate(a), b.datepicker._updateDatepicker(a)
        } catch (c) {
            b.datepicker.log(c)
        }
        return!0
    }, _showDatepicker: function (a) {
        a = a.target || a;
        "input" != a.nodeName.toLowerCase() &&
        (a = b("input", a.parentNode)[0]);
        if (!(b.datepicker._isDisabledDatepicker(a) || b.datepicker._lastInput == a)) {
            var c = b.datepicker._getInst(a);
            b.datepicker._curInst && b.datepicker._curInst != c && (b.datepicker._datepickerShowing && b.datepicker._triggerOnClose(b.datepicker._curInst), b.datepicker._curInst.dpDiv.stop(!0, !0));
            var d = b.datepicker._get(c, "beforeShow");
            g(c.settings, d ? d.apply(a, [a, c]) : {});
            c.lastVal = null;
            b.datepicker._lastInput = a;
            b.datepicker._setDateFromField(c);
            b.datepicker._inDialog && (a.value = "");
            b.datepicker._pos ||
            (b.datepicker._pos = b.datepicker._findPos(a), b.datepicker._pos[1] += a.offsetHeight);
            var e = !1;
            b(a).parents().each(function () {
                e = e | b(this).css("position") == "fixed";
                return!e
            });
            e && b.browser.opera && (b.datepicker._pos[0] -= document.documentElement.scrollLeft, b.datepicker._pos[1] -= document.documentElement.scrollTop);
            d = {left: b.datepicker._pos[0], top: b.datepicker._pos[1]};
            b.datepicker._pos = null;
            c.dpDiv.empty();
            c.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
            b.datepicker._updateDatepicker(c);
            d =
                b.datepicker._checkOffset(c, d, e);
            c.dpDiv.css({position: b.datepicker._inDialog && b.blockUI ? "static" : e ? "fixed" : "absolute", display: "none", left: d.left + "px", top: d.top + "px"});
            if (!c.inline) {
                var d = b.datepicker._get(c, "showAnim"), h = b.datepicker._get(c, "duration"), m = function () {
                    var a = c.dpDiv.find("iframe.ui-datepicker-cover");
                    if (a.length) {
                        var f = b.datepicker._getBorders(c.dpDiv);
                        a.css({left: -f[0], top: -f[1], width: c.dpDiv.outerWidth(), height: c.dpDiv.outerHeight()})
                    }
                };
                c.dpDiv.zIndex(b(a).zIndex() + 1);
                b.datepicker._datepickerShowing = !0;
                if (b.effects && b.effects[d])c.dpDiv.show(d, b.datepicker._get(c, "showOptions"), h, m); else c.dpDiv[d || "show"](d ? h : null, m);
                (!d || !h) && m();
                c.input.is(":visible") && !c.input.is(":disabled") && c.input.focus();
                b.datepicker._curInst = c
            }
        }
    }, _updateDatepicker: function (a) {
        this.maxRows = 4;
        var c = b.datepicker._getBorders(a.dpDiv);
        e = a;
        a.dpDiv.empty().append(this._generateHTML(a));
        var d = a.dpDiv.find("iframe.ui-datepicker-cover");
        d.length && d.css({left: -c[0], top: -c[1], width: a.dpDiv.outerWidth(), height: a.dpDiv.outerHeight()});
        a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        c = this._getNumberOfMonths(a);
        d = c[1];
        a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
        1 < d && a.dpDiv.addClass("ui-datepicker-multi-" + d).css("width", 17 * d + "em");
        a.dpDiv[(1 != c[0] || 1 != c[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
        a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
        a == b.datepicker._curInst && (b.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement) && a.input.focus();
        if (a.yearshtml) {
            var g = a.yearshtml;
            setTimeout(function () {
                g === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
                g = a.yearshtml = null
            }, 0)
        }
    }, _getBorders: function (a) {
        var b = function (a) {
            return{thin: 1, medium: 2, thick: 3}[a] || a
        };
        return[parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
    }, _checkOffset: function (a, c, d) {
        var e = a.dpDiv.outerWidth(), g = a.dpDiv.outerHeight(),
            h = a.input ? a.input.outerWidth() : 0, p = a.input ? a.input.outerHeight() : 0, n = document.documentElement.clientWidth + b(document).scrollLeft(), q = document.documentElement.clientHeight + b(document).scrollTop();
        c.left -= this._get(a, "isRTL") ? e - h : 0;
        c.left -= d && c.left == a.input.offset().left ? b(document).scrollLeft() : 0;
        c.top -= d && c.top == a.input.offset().top + p ? b(document).scrollTop() : 0;
        c.left -= Math.min(c.left, c.left + e > n && n > e ? Math.abs(c.left + e - n) : 0);
        c.top -= Math.min(c.top, c.top + g > q && q > g ? Math.abs(g + p) : 0);
        return c
    }, _findPos: function (a) {
        for (var c =
            this._get(this._getInst(a), "isRTL"); a && ("hidden" == a.type || 1 != a.nodeType || b.expr.filters.hidden(a));)a = a[c ? "previousSibling" : "nextSibling"];
        a = b(a).offset();
        return[a.left, a.top]
    }, _triggerOnClose: function (a) {
        var b = this._get(a, "onClose");
        b && b.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a])
    }, _hideDatepicker: function (a) {
        var c = this._curInst;
        if (c && !(a && c != b.data(a, "datepicker")) && this._datepickerShowing) {
            var a = this._get(c, "showAnim"), d = this._get(c, "duration"), e = function () {
                b.datepicker._tidyDialog(c);
                this._curInst = null
            };
            if (b.effects && b.effects[a])c.dpDiv.hide(a, b.datepicker._get(c, "showOptions"), d, e); else c.dpDiv["slideDown" == a ? "slideUp" : "fadeIn" == a ? "fadeOut" : "hide"](a ? d : null, e);
            a || e();
            b.datepicker._triggerOnClose(c);
            this._datepickerShowing = !1;
            this._lastInput = null;
            this._inDialog && (this._dialogInput.css({position: "absolute", left: "0", top: "-100px"}), b.blockUI && (b.unblockUI(), b("body").append(this.dpDiv)));
            this._inDialog = !1
        }
    }, _tidyDialog: function (a) {
        a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    },
        _checkExternalClick: function (a) {
            b.datepicker._curInst && (a = b(a.target), a[0].id != b.datepicker._mainDivId && (0 == a.parents("#" + b.datepicker._mainDivId).length && !a.hasClass(b.datepicker.markerClassName) && !a.hasClass(b.datepicker._triggerClass) && b.datepicker._datepickerShowing && (!b.datepicker._inDialog || !b.blockUI)) && b.datepicker._hideDatepicker())
        }, _adjustDate: function (a, c, d) {
            var a = b(a), e = this._getInst(a[0]);
            this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(e, c + ("M" == d ? this._get(e, "showCurrentAtPos") :
                0), d), this._updateDatepicker(e))
        }, _gotoToday: function (a) {
            var a = b(a), c = this._getInst(a[0]);
            if (this._get(c, "gotoCurrent") && c.currentDay)c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear; else {
                var d = new Date;
                c.selectedDay = d.getDate();
                c.drawMonth = c.selectedMonth = d.getMonth();
                c.drawYear = c.selectedYear = d.getFullYear()
            }
            this._notifyChange(c);
            this._adjustDate(a)
        }, _selectMonthYear: function (a, c, d) {
            var a = b(a), e = this._getInst(a[0]);
            e._selectingMonthYear = !1;
            e["selected" + ("M" == d ? "Month" : "Year")] = e["draw" + ("M" == d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10);
            this._notifyChange(e);
            this._adjustDate(a)
        }, _clickMonthYear: function (a) {
            var c = this._getInst(b(a)[0]);
            c.input && c._selectingMonthYear && setTimeout(function () {
                c.input.focus()
            }, 0);
            c._selectingMonthYear = !c._selectingMonthYear
        }, _selectDay: function (a, c, d, e) {
            var g = b(a);
            !b(e).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(g[0]) && (g = this._getInst(g[0]), g.selectedDay = g.currentDay =
                b("a", e).html(), g.selectedMonth = g.currentMonth = c, g.selectedYear = g.currentYear = d, this._selectDate(a, this._formatDate(g, g.currentDay, g.currentMonth, g.currentYear)))
        }, _clearDate: function (a) {
            a = b(a);
            this._getInst(a[0]);
            this._selectDate(a, "")
        }, _selectDate: function (a, c) {
            var d = this._getInst(b(a)[0]), c = null != c ? c : this._formatDate(d);
            d.input && d.input.val(c);
            this._updateAlternate(d);
            var e = this._get(d, "onSelect");
            e ? e.apply(d.input ? d.input[0] : null, [c, d]) : d.input && d.input.trigger("change");
            d.inline ? this._updateDatepicker(d) :
                (this._hideDatepicker(), this._lastInput = d.input[0], "object" != typeof d.input[0] && d.input.focus(), this._lastInput = null)
        }, _updateAlternate: function (a) {
            var c = this._get(a, "altField");
            if (c) {
                var d = this._get(a, "altFormat") || this._get(a, "dateFormat"), e = this._getDate(a), g = this.formatDate(d, e, this._getFormatConfig(a));
                b(c).each(function () {
                    b(this).val(g)
                })
            }
        }, noWeekends: function (a) {
            a = a.getDay();
            return[0 < a && 6 > a, ""]
        }, iso8601Week: function (a) {
            a = new Date(a.getTime());
            a.setDate(a.getDate() + 4 - (a.getDay() || 7));
            var b =
                a.getTime();
            a.setMonth(0);
            a.setDate(1);
            return Math.floor(Math.round((b - a) / 864E5) / 7) + 1
        }, parseDate: function (a, c, d) {
            if (null == a || null == c)throw"Invalid arguments";
            c = "object" == typeof c ? c.toString() : c + "";
            if ("" == c)return null;
            for (var e = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff, e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), g = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, h = (d ? d.dayNames : null) || this._defaults.dayNames, p = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
                     n = (d ? d.monthNames : null) || this._defaults.monthNames, q = d = -1, o = -1, w = -1, r = !1, u = function (b) {
                    (b = E + 1 < a.length && a.charAt(E + 1) == b) && E++;
                    return b
                }, s = function (a) {
                    var b = u(a), a = RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a && b ? 4 : "o" == a ? 3 : 2) + "}"), a = c.substring(B).match(a);
                    if (!a)throw"Missing number at position " + B;
                    B += a[0].length;
                    return parseInt(a[0], 10)
                }, v = function (a, d, f) {
                    var a = b.map(u(a) ? f : d,function (a, b) {
                        return[
                            [b, a]
                        ]
                    }).sort(function (a, b) {
                        return-(a[1].length - b[1].length)
                    }), e = -1;
                    b.each(a, function (a, b) {
                        var d = b[1];
                        if (c.substr(B, d.length).toLowerCase() == d.toLowerCase())return e = b[0], B += d.length, !1
                    });
                    if (-1 != e)return e + 1;
                    throw"Unknown name at position " + B;
                }, z = function () {
                    if (c.charAt(B) != a.charAt(E))throw"Unexpected literal at position " + B;
                    B++
                }, B = 0, E = 0; E < a.length; E++)if (r)"'" == a.charAt(E) && !u("'") ? r = !1 : z(); else switch (a.charAt(E)) {
                case "d":
                    o = s("d");
                    break;
                case "D":
                    v("D", g, h);
                    break;
                case "o":
                    w = s("o");
                    break;
                case "m":
                    q = s("m");
                    break;
                case "M":
                    q = v("M", p, n);
                    break;
                case "y":
                    d = s("y");
                    break;
                case "@":
                    var C = new Date(s("@")), d =
                        C.getFullYear(), q = C.getMonth() + 1, o = C.getDate();
                    break;
                case "!":
                    C = new Date((s("!") - this._ticksTo1970) / 1E4);
                    d = C.getFullYear();
                    q = C.getMonth() + 1;
                    o = C.getDate();
                    break;
                case "'":
                    u("'") ? z() : r = !0;
                    break;
                default:
                    z()
            }
            if (B < c.length)throw"Extra/unparsed characters found in date: " + c.substring(B);
            -1 == d ? d = (new Date).getFullYear() : 100 > d && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= e ? 0 : -100));
            if (-1 < w) {
                q = 1;
                o = w;
                do {
                    e = this._getDaysInMonth(d, q - 1);
                    if (o <= e)break;
                    q++;
                    o -= e
                } while (1)
            }
            C = this._daylightSavingAdjust(new Date(d,
                q - 1, o));
            if (C.getFullYear() != d || C.getMonth() + 1 != q || C.getDate() != o)throw"Invalid date";
            return C
        }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (a, b, c) {
            if (!b)return"";
            var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, e = (c ? c.dayNames :
                null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, c = (c ? c.monthNames : null) || this._defaults.monthNames, h = function (b) {
                (b = r + 1 < a.length && a.charAt(r + 1) == b) && r++;
                return b
            }, n = function (a, b, c) {
                b = "" + b;
                if (h(a))for (; b.length < c;)b = "0" + b;
                return b
            }, q = function (a, b, c, d) {
                return h(a) ? d[b] : c[b]
            }, o = "", w = !1;
            if (b)for (var r = 0; r < a.length; r++)if (w)"'" == a.charAt(r) && !h("'") ? w = !1 : o += a.charAt(r); else switch (a.charAt(r)) {
                case "d":
                    o += n("d", b.getDate(), 2);
                    break;
                case "D":
                    o += q("D", b.getDay(),
                        d, e);
                    break;
                case "o":
                    o += n("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                    break;
                case "m":
                    o += n("m", b.getMonth() + 1, 2);
                    break;
                case "M":
                    o += q("M", b.getMonth(), g, c);
                    break;
                case "y":
                    o += h("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                    break;
                case "@":
                    o += b.getTime();
                    break;
                case "!":
                    o += 1E4 * b.getTime() + this._ticksTo1970;
                    break;
                case "'":
                    h("'") ? o += "'" : w = !0;
                    break;
                default:
                    o += a.charAt(r)
            }
            return o
        }, _possibleChars: function (a) {
            for (var b =
                "", c = !1, d = function (b) {
                (b = e + 1 < a.length && a.charAt(e + 1) == b) && e++;
                return b
            }, e = 0; e < a.length; e++)if (c)"'" == a.charAt(e) && !d("'") ? c = !1 : b += a.charAt(e); else switch (a.charAt(e)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    b += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    d("'") ? b += "'" : c = !0;
                    break;
                default:
                    b += a.charAt(e)
            }
            return b
        }, _get: function (b, c) {
            return b.settings[c] !== a ? b.settings[c] : this._defaults[c]
        }, _setDateFromField: function (a, b) {
            if (a.input.val() != a.lastVal) {
                var c = this._get(a, "dateFormat"), d = a.lastVal =
                    a.input ? a.input.val() : null, e, g;
                e = g = this._getDefaultDate(a);
                var h = this._getFormatConfig(a);
                try {
                    e = this.parseDate(c, d, h) || g
                } catch (n) {
                    this.log(n), d = b ? "" : d
                }
                a.selectedDay = e.getDate();
                a.drawMonth = a.selectedMonth = e.getMonth();
                a.drawYear = a.selectedYear = e.getFullYear();
                a.currentDay = d ? e.getDate() : 0;
                a.currentMonth = d ? e.getMonth() : 0;
                a.currentYear = d ? e.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        }, _getDefaultDate: function (a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        }, _determineDate: function (a, c, d) {
            var e = function (a) {
                var b = new Date;
                b.setDate(b.getDate() + a);
                return b
            }, g = function (c) {
                try {
                    return b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), c, b.datepicker._getFormatConfig(a))
                } catch (d) {
                }
                for (var e = (c.toLowerCase().match(/^c/) ? b.datepicker._getDate(a) : null) || new Date, g = e.getFullYear(), h = e.getMonth(), e = e.getDate(), i = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = i.exec(c); l;) {
                    switch (l[2] || "d") {
                        case "d":
                        case "D":
                            e += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            e += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            h +=
                                parseInt(l[1], 10);
                            e = Math.min(e, b.datepicker._getDaysInMonth(g, h));
                            break;
                        case "y":
                        case "Y":
                            g += parseInt(l[1], 10), e = Math.min(e, b.datepicker._getDaysInMonth(g, h))
                    }
                    l = i.exec(c)
                }
                return new Date(g, h, e)
            };
            if (c = (c = null == c || "" === c ? d : "string" == typeof c ? g(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime())) && "Invalid Date" == c.toString() ? d : c)c.setHours(0), c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0);
            return this._daylightSavingAdjust(c)
        }, _daylightSavingAdjust: function (a) {
            if (!a)return null;
            a.setHours(12 <
                a.getHours() ? a.getHours() + 2 : 0);
            return a
        }, _setDate: function (a, b, c) {
            var d = !b, e = a.selectedMonth, g = a.selectedYear, b = this._restrictMinMax(a, this._determineDate(a, b, new Date));
            a.selectedDay = a.currentDay = b.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
            (e != a.selectedMonth || g != a.selectedYear) && !c && this._notifyChange(a);
            this._adjustInstDate(a);
            a.input && a.input.val(d ? "" : this._formatDate(a))
        }, _getDate: function (a) {
            return!a.currentYear ||
                a.input && "" == a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
        }, _generateHTML: function (a) {
            var c = new Date, c = this._daylightSavingAdjust(new Date(c.getFullYear(), c.getMonth(), c.getDate())), d = this._get(a, "isRTL"), e = this._get(a, "showButtonPanel"), g = this._get(a, "hideIfNoPrevNext"), m = this._get(a, "navigationAsDateFormat"), p = this._getNumberOfMonths(a), n = this._get(a, "showCurrentAtPos"), q = this._get(a, "stepMonths"), o = 1 != p[0] || 1 != p[1], w = this._daylightSavingAdjust(!a.currentDay ?
                new Date(9999, 9, 9) : new Date(a.currentYear, a.currentMonth, a.currentDay)), r = this._getMinMaxDate(a, "min"), u = this._getMinMaxDate(a, "max"), n = a.drawMonth - n, s = a.drawYear;
            0 > n && (n += 12, s--);
            if (u)for (var v = this._daylightSavingAdjust(new Date(u.getFullYear(), u.getMonth() - p[0] * p[1] + 1, u.getDate())), v = r && v < r ? r : v; this._daylightSavingAdjust(new Date(s, n, 1)) > v;)n--, 0 > n && (n = 11, s--);
            a.drawMonth = n;
            a.drawYear = s;
            var v = this._get(a, "prevText"), v = !m ? v : this.formatDate(v, this._daylightSavingAdjust(new Date(s, n - q, 1)), this._getFormatConfig(a)),
                v = this._canAdjustMonth(a, -1, s, n) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + h + ".datepicker._adjustDate('#" + a.id + "', -" + q + ", 'M');\" title=\"" + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (d ? "e" : "w") + '">' + v + "</span></a>" : g ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (d ? "e" : "w") + '">' + v + "</span></a>", z = this._get(a, "nextText"), z = !m ? z : this.formatDate(z, this._daylightSavingAdjust(new Date(s,
                    n + q, 1)), this._getFormatConfig(a)), g = this._canAdjustMonth(a, 1, s, n) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + h + ".datepicker._adjustDate('#" + a.id + "', +" + q + ", 'M');\" title=\"" + z + '"><span class="ui-icon ui-icon-circle-triangle-' + (d ? "w" : "e") + '">' + z + "</span></a>" : g ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + z + '"><span class="ui-icon ui-icon-circle-triangle-' + (d ? "w" : "e") + '">' + z + "</span></a>", q = this._get(a, "currentText"), z = this._get(a, "gotoCurrent") &&
                    a.currentDay ? w : c, q = !m ? q : this.formatDate(q, z, this._getFormatConfig(a)), m = !a.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + h + '.datepicker._hideDatepicker();">' + this._get(a, "closeText") + "</button>" : "", e = e ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (d ? m : "") + (this._isInRange(a, z) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' +
                    h + ".datepicker._gotoToday('#" + a.id + "');\">" + q + "</button>" : "") + (d ? "" : m) + "</div>" : "", m = parseInt(this._get(a, "firstDay"), 10), m = isNaN(m) ? 0 : m, q = this._get(a, "showWeek"), z = this._get(a, "dayNames");
            this._get(a, "dayNamesShort");
            var B = this._get(a, "dayNamesMin"), E = this._get(a, "monthNames"), C = this._get(a, "monthNamesShort"), O = this._get(a, "beforeShowDay"), K = this._get(a, "showOtherMonths"), S = this._get(a, "selectOtherMonths");
            this._get(a, "calculateWeek");
            for (var P = this._getDefaultDate(a), G = "", H = 0; H < p[0]; H++) {
                var L =
                    "";
                this.maxRows = 4;
                for (var I = 0; I < p[1]; I++) {
                    var Q = this._daylightSavingAdjust(new Date(s, n, a.selectedDay)), A = " ui-corner-all", y = "";
                    if (o) {
                        y += '<div class="ui-datepicker-group';
                        if (1 < p[1])switch (I) {
                            case 0:
                                y += " ui-datepicker-group-first";
                                A = " ui-corner-" + (d ? "right" : "left");
                                break;
                            case p[1] - 1:
                                y += " ui-datepicker-group-last";
                                A = " ui-corner-" + (d ? "left" : "right");
                                break;
                            default:
                                y += " ui-datepicker-group-middle", A = ""
                        }
                        y += '">'
                    }
                    for (var y = y + ('<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + A + '">' + (/all|left/.test(A) &&
                        0 == H ? d ? g : v : "") + (/all|right/.test(A) && 0 == H ? d ? v : g : "") + this._generateMonthYearHeader(a, n, s, r, u, 0 < H || 0 < I, E, C) + '</div><table class="ui-datepicker-calendar"><thead><tr>'), D = q ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "", A = 0; 7 > A; A++)var x = (A + m) % 7, D = D + ("<th" + (5 <= (A + m + 6) % 7 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + z[x] + '">' + B[x] + "</span></th>");
                    y += D + "</tr></thead><tbody>";
                    D = this._getDaysInMonth(s, n);
                    s == a.selectedYear && n == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay,
                        D));
                    A = (this._getFirstDayOfMonth(s, n) - m + 7) % 7;
                    D = Math.ceil((A + D) / 7);
                    this.maxRows = D = o ? this.maxRows > D ? this.maxRows : D : D;
                    for (var x = this._daylightSavingAdjust(new Date(s, n, 1 - A)), R = 0; R < D; R++) {
                        for (var y = y + "<tr>", M = !q ? "" : '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(x) + "</td>", A = 0; 7 > A; A++) {
                            var J = O ? O.apply(a.input ? a.input[0] : null, [x]) : [!0, ""], F = x.getMonth() != n, N = F && !S || !J[0] || r && x < r || u && x > u, M = M + ('<td class="' + (5 <= (A + m + 6) % 7 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") +
                                (x.getTime() == Q.getTime() && n == a.selectedMonth && a._keyEvent || P.getTime() == x.getTime() && P.getTime() == Q.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !K ? "" : " " + J[1] + (x.getTime() == w.getTime() ? " " + this._currentClass : "") + (x.getTime() == c.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!F || K) && J[2] ? ' title="' + J[2] + '"' : "") + (N ? "" : ' onclick="DP_jQuery_' + h + ".datepicker._selectDay('#" + a.id + "'," + x.getMonth() + "," + x.getFullYear() + ', this);return false;"') + ">" + (F && !K ?
                                "&#xa0;" : N ? '<span class="ui-state-default">' + x.getDate() + "</span>" : '<a class="ui-state-default' + (x.getTime() == c.getTime() ? " ui-state-highlight" : "") + (x.getTime() == w.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + '" href="#">' + x.getDate() + "</a>") + "</td>");
                            x.setDate(x.getDate() + 1);
                            x = this._daylightSavingAdjust(x)
                        }
                        y += M + "</tr>"
                    }
                    n++;
                    11 < n && (n = 0, s++);
                    y += "</tbody></table>" + (o ? "</div>" + (0 < p[0] && I == p[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
                    L += y
                }
                G += L
            }
            G += e + (b.browser.msie &&
                7 > parseInt(b.browser.version, 10) && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
            a._keyEvent = !1;
            return G
        }, _generateMonthYearHeader: function (a, b, c, d, e, g, p, n) {
            var q = this._get(a, "changeMonth"), o = this._get(a, "changeYear"), w = this._get(a, "showMonthAfterYear"), r = '<div class="ui-datepicker-title">', u = "";
            if (g || !q)u += '<span class="ui-datepicker-month">' + p[b] + "</span>"; else {
                for (var p = d && d.getFullYear() == c, s = e && e.getFullYear() == c, u = u + ('<select class="ui-datepicker-month" onchange="DP_jQuery_' +
                    h + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" onclick=\"DP_jQuery_" + h + ".datepicker._clickMonthYear('#" + a.id + "');\">"), v = 0; 12 > v; v++)if ((!p || v >= d.getMonth()) && (!s || v <= e.getMonth()))u += '<option value="' + v + '"' + (v == b ? ' selected="selected"' : "") + ">" + n[v] + "</option>";
                u += "</select>"
            }
            w || (r += u + (g || !q || !o ? "&#xa0;" : ""));
            if (!a.yearshtml)if (a.yearshtml = "", g || !o)r += '<span class="ui-datepicker-year">' + c + "</span>"; else {
                var n = this._get(a, "yearRange").split(":"), z = (new Date).getFullYear(), p = function (a) {
                    a =
                        a.match(/c[+-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? z + parseInt(a, 10) : parseInt(a, 10);
                    return isNaN(a) ? z : a
                }, b = p(n[0]), n = Math.max(b, p(n[1] || "")), b = d ? Math.max(b, d.getFullYear()) : b, n = e ? Math.min(n, e.getFullYear()) : n;
                for (a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + h + ".datepicker._selectMonthYear('#" + a.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + h + ".datepicker._clickMonthYear('#" + a.id + "');\">"; b <= n; b++)a.yearshtml += '<option value="' + b + '"' + (b == c ? ' selected="selected"' :
                    "") + ">" + b + "</option>";
                a.yearshtml += "</select>";
                r += a.yearshtml;
                a.yearshtml = null
            }
            r += this._get(a, "yearSuffix");
            w && (r += (g || !q || !o ? "&#xa0;" : "") + u);
            return r + "</div>"
        }, _adjustInstDate: function (a, b, c) {
            var d = a.drawYear + ("Y" == c ? b : 0), e = a.drawMonth + ("M" == c ? b : 0), b = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" == c ? b : 0), d = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, b)));
            a.selectedDay = d.getDate();
            a.drawMonth = a.selectedMonth = d.getMonth();
            a.drawYear = a.selectedYear = d.getFullYear();
            ("M" == c ||
                "Y" == c) && this._notifyChange(a)
        }, _restrictMinMax: function (a, b) {
            var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), c = c && b < c ? c : b;
            return d && c > d ? d : c
        }, _notifyChange: function (a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        }, _getNumberOfMonths: function (a) {
            a = this._get(a, "numberOfMonths");
            return null == a ? [1, 1] : "number" == typeof a ? [1, a] : a
        }, _getMinMaxDate: function (a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null)
        }, _getDaysInMonth: function (a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        }, _getFirstDayOfMonth: function (a, b) {
            return(new Date(a, b, 1)).getDay()
        }, _canAdjustMonth: function (a, b, c, d) {
            var e = this._getNumberOfMonths(a), c = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
            0 > b && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth()));
            return this._isInRange(a, c)
        }, _isInRange: function (a, b) {
            var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max");
            return(!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <=
                d.getTime())
        }, _getFormatConfig: function (a) {
            var b = this._get(a, "shortYearCutoff"), b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10);
            return{shortYearCutoff: b, dayNamesShort: this._get(a, "dayNamesShort"), dayNames: this._get(a, "dayNames"), monthNamesShort: this._get(a, "monthNamesShort"), monthNames: this._get(a, "monthNames")}
        }, _formatDate: function (a, b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            b = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d,
                c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
        }});
    b.fn.datepicker = function (a) {
        if (!this.length)return this;
        b.datepicker.initialized || (b(document).mousedown(b.datepicker._checkExternalClick).find("body").append(b.datepicker.dpDiv), b.datepicker.initialized = !0);
        var c = Array.prototype.slice.call(arguments, 1);
        return"string" == typeof a && ("isDisabled" == a || "getDate" == a || "widget" == a) || "option" ==
            a && 2 == arguments.length && "string" == typeof arguments[1] ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this[0]].concat(c)) : this.each(function () {
            typeof a == "string" ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this].concat(c)) : b.datepicker._attachDatepicker(this, a)
        })
    };
    b.datepicker = new c;
    b.datepicker.initialized = !1;
    b.datepicker.uuid = (new Date).getTime();
    b.datepicker.version = "1.8.14";
    window["DP_jQuery_" + h] = b
})(jQuery);
(function (b, a) {
    b.widget("ui.progressbar", {options: {value: 0, max: 100}, min: 0, _create: function () {
        this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role: "progressbar", "aria-valuemin": this.min, "aria-valuemax": this.options.max, "aria-valuenow": this._value()});
        this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
        this.oldValue = this._value();
        this._refreshValue()
    }, destroy: function () {
        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
        this.valueDiv.remove();
        b.Widget.prototype.destroy.apply(this, arguments)
    }, value: function (b) {
        if (b === a)return this._value();
        this._setOption("value", b);
        return this
    }, _setOption: function (a, d) {
        "value" === a && (this.options.value = d, this._refreshValue(), this._value() === this.options.max && this._trigger("complete"));
        b.Widget.prototype._setOption.apply(this, arguments)
    }, _value: function () {
        var a = this.options.value;
        "number" !== typeof a && (a = 0);
        return Math.min(this.options.max, Math.max(this.min, a))
    }, _percentage: function () {
        return 100 *
            this._value() / this.options.max
    }, _refreshValue: function () {
        var a = this.value(), b = this._percentage();
        this.oldValue !== a && (this.oldValue = a, this._trigger("change"));
        this.valueDiv.toggle(a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(b.toFixed(0) + "%");
        this.element.attr("aria-valuenow", a)
    }});
    b.extend(b.ui.progressbar, {version: "1.8.14"})
})(jQuery);
jQuery.effects || function (b, a) {
    function c(a) {
        var c;
        return a && a.constructor == Array && 3 == a.length ? a : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a)) ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)] : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(a)) ? [2.55 * parseFloat(c[1]), 2.55 * parseFloat(c[2]), 2.55 * parseFloat(c[3])] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a)) ? [parseInt(c[1], 16), parseInt(c[2],
            16), parseInt(c[3], 16)] : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(a)) ? [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)] : /rgba\(0, 0, 0, 0\)/.exec(a) ? i.transparent : i[b.trim(a).toLowerCase()]
    }

    function d() {
        var a = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle, b = {}, c, d;
        if (a && a.length && a[0] && a[a[0]])for (var e = a.length; e--;)c = a[e], "string" == typeof a[c] && (d = c.replace(/\-(\w)/g, function (a, b) {
            return b.toUpperCase()
        }), b[d] = a[c]); else for (c in a)"string" === typeof a[c] && (b[c] = a[c]);
        return b
    }

    function g(a) {
        var c, d;
        for (c in a)d = a[c], (null == d || b.isFunction(d) || c in k || /scrollbar/.test(c) || !/color/i.test(c) && isNaN(parseFloat(d))) && delete a[c];
        return a
    }

    function h(a, b) {
        var c = {_: 0}, d;
        for (d in b)a[d] != b[d] && (c[d] = b[d]);
        return c
    }

    function e(a, c, d, e) {
        "object" == typeof a && (e = c, d = null, c = a, a = c.effect);
        b.isFunction(c) && (e = c, d = null, c = {});
        if ("number" == typeof c || b.fx.speeds[c])e = d, d = c, c = {};
        b.isFunction(d) && (e = d, d = null);
        c = c || {};
        d = d || c.duration;
        d = b.fx.off ? 0 : "number" == typeof d ?
            d : d in b.fx.speeds ? b.fx.speeds[d] : b.fx.speeds._default;
        e = e || c.complete;
        return[a, c, d, e]
    }

    function f(a) {
        return!a || ("number" === typeof a || b.fx.speeds[a]) || "string" === typeof a && !b.effects[a] ? !0 : !1
    }

    b.effects = {};
    b.each("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor borderColor color outlineColor".split(" "), function (a, d) {
        b.fx.step[d] = function (a) {
            if (!a.colorInit) {
                var e;
                e = a.elem;
                var f = d, g;
                do {
                    g = b.curCSS(e, f);
                    if (g != "" && g != "transparent" || b.nodeName(e, "body"))break;
                    f = "backgroundColor"
                } while (e =
                    e.parentNode);
                e = c(g);
                a.start = e;
                a.end = c(a.end);
                a.colorInit = true
            }
            a.elem.style[d] = "rgb(" + Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0) + ")"
        }
    });
    var i = {aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0, 0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255],
        maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0], transparent: [255, 255, 255]}, j = ["add", "remove", "toggle"], k = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
    b.effects.animateClass = function (a, c, e, f) {
        b.isFunction(e) && (f = e, e = null);
        return this.queue(function () {
            var i = b(this), o = i.attr("style") ||
                " ", k = g(d.call(this)), r, u = i.attr("class");
            b.each(j, function (b, c) {
                if (a[c])i[c + "Class"](a[c])
            });
            r = g(d.call(this));
            i.attr("class", u);
            i.animate(h(k, r), {queue: false, duration: c, easing: e, complete: function () {
                b.each(j, function (b, c) {
                    if (a[c])i[c + "Class"](a[c])
                });
                if (typeof i.attr("style") == "object") {
                    i.attr("style").cssText = "";
                    i.attr("style").cssText = o
                } else i.attr("style", o);
                f && f.apply(this, arguments);
                b.dequeue(this)
            }})
        })
    };
    b.fn.extend({_addClass: b.fn.addClass, addClass: function (a, c, d, e) {
        return c ? b.effects.animateClass.apply(this,
            [
                {add: a},
                c,
                d,
                e
            ]) : this._addClass(a)
    }, _removeClass: b.fn.removeClass, removeClass: function (a, c, d, e) {
        return c ? b.effects.animateClass.apply(this, [
            {remove: a},
            c,
            d,
            e
        ]) : this._removeClass(a)
    }, _toggleClass: b.fn.toggleClass, toggleClass: function (c, d, e, f, g) {
        return"boolean" == typeof d || d === a ? e ? b.effects.animateClass.apply(this, [d ? {add: c} : {remove: c}, e, f, g]) : this._toggleClass(c, d) : b.effects.animateClass.apply(this, [
            {toggle: c},
            d,
            e,
            f
        ])
    }, switchClass: function (a, c, d, e, f) {
        return b.effects.animateClass.apply(this, [
            {add: c,
                remove: a},
            d,
            e,
            f
        ])
    }});
    b.extend(b.effects, {version: "1.8.14", save: function (a, b) {
        for (var c = 0; c < b.length; c++)null !== b[c] && a.data("ec.storage." + b[c], a[0].style[b[c]])
    }, restore: function (a, b) {
        for (var c = 0; c < b.length; c++)null !== b[c] && a.css(b[c], a.data("ec.storage." + b[c]))
    }, setMode: function (a, b) {
        "toggle" == b && (b = a.is(":hidden") ? "show" : "hide");
        return b
    }, getBaseline: function (a, b) {
        var c, d;
        switch (a[0]) {
            case "top":
                c = 0;
                break;
            case "middle":
                c = 0.5;
                break;
            case "bottom":
                c = 1;
                break;
            default:
                c = a[0] / b.height
        }
        switch (a[1]) {
            case "left":
                d =
                    0;
                break;
            case "center":
                d = 0.5;
                break;
            case "right":
                d = 1;
                break;
            default:
                d = a[1] / b.width
        }
        return{x: d, y: c}
    }, createWrapper: function (a) {
        if (a.parent().is(".ui-effects-wrapper"))return a.parent();
        var c = {width: a.outerWidth(!0), height: a.outerHeight(!0), "float": a.css("float")}, d = b("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0});
        a.wrap(d);
        d = a.parent();
        "static" == a.css("position") ? (d.css({position: "relative"}), a.css({position: "relative"})) :
            (b.extend(c, {position: a.css("position"), zIndex: a.css("z-index")}), b.each(["top", "left", "bottom", "right"], function (b, d) {
                c[d] = a.css(d);
                isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
            }), a.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"}));
        return d.css(c).show()
    }, removeWrapper: function (a) {
        return a.parent().is(".ui-effects-wrapper") ? a.parent().replaceWith(a) : a
    }, setTransition: function (a, c, d, e) {
        e = e || {};
        b.each(c, function (b, c) {
            unit = a.cssUnit(c);
            0 < unit[0] && (e[c] = unit[0] * d + unit[1])
        });
        return e
    }});
    b.fn.extend({effect: function (a, c, d, f) {
        var g = e.apply(this, arguments), h = {options: g[1], duration: g[2], callback: g[3]}, g = h.options.mode, i = b.effects[a];
        return b.fx.off || !i ? g ? this[g](h.duration, h.callback) : this.each(function () {
            h.callback && h.callback.call(this)
        }) : i.call(this, h)
    }, _show: b.fn.show, show: function (a) {
        if (f(a))return this._show.apply(this, arguments);
        var b = e.apply(this, arguments);
        b[1].mode = "show";
        return this.effect.apply(this, b)
    }, _hide: b.fn.hide, hide: function (a) {
        if (f(a))return this._hide.apply(this, arguments);
        var b = e.apply(this,
            arguments);
        b[1].mode = "hide";
        return this.effect.apply(this, b)
    }, __toggle: b.fn.toggle, toggle: function (a) {
        if (f(a) || "boolean" === typeof a || b.isFunction(a))return this.__toggle.apply(this, arguments);
        var c = e.apply(this, arguments);
        c[1].mode = "toggle";
        return this.effect.apply(this, c)
    }, cssUnit: function (a) {
        var c = this.css(a), d = [];
        b.each(["em", "px", "%", "pt"], function (a, b) {
            0 < c.indexOf(b) && (d = [parseFloat(c), b])
        });
        return d
    }});
    b.easing.jswing = b.easing.swing;
    b.extend(b.easing, {def: "easeOutQuad", swing: function (a, c, d, e, f) {
        return b.easing[b.easing.def](a, c, d, e, f)
    }, easeInQuad: function (a, b, c, d, e) {
        return d * (b /= e) * b + c
    }, easeOutQuad: function (a, b, c, d, e) {
        return-d * (b /= e) * (b - 2) + c
    }, easeInOutQuad: function (a, b, c, d, e) {
        return 1 > (b /= e / 2) ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    }, easeInCubic: function (a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    }, easeOutCubic: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    }, easeInOutCubic: function (a, b, c, d, e) {
        return 1 > (b /= e / 2) ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    }, easeInQuart: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
        easeOutQuart: function (a, b, c, d, e) {
            return-d * ((b = b / e - 1) * b * b * b - 1) + c
        }, easeInOutQuart: function (a, b, c, d, e) {
            return 1 > (b /= e / 2) ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        }, easeInQuint: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        }, easeOutQuint: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        }, easeInOutQuint: function (a, b, c, d, e) {
            return 1 > (b /= e / 2) ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        }, easeInSine: function (a, b, c, d, e) {
            return-d * Math.cos(b / e * (Math.PI / 2)) + d + c
        }, easeOutSine: function (a, b, c, d, e) {
            return d * Math.sin(b /
                e * (Math.PI / 2)) + c
        }, easeInOutSine: function (a, b, c, d, e) {
            return-d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        }, easeInExpo: function (a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        }, easeOutExpo: function (a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        }, easeInOutExpo: function (a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : 1 > (b /= e / 2) ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        }, easeInCirc: function (a, b, c, d, e) {
            return-d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        }, easeOutCirc: function (a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) *
                b) + c
        }, easeInOutCirc: function (a, b, c, d, e) {
            return 1 > (b /= e / 2) ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        }, easeInElastic: function (a, b, c, d, e) {
            var a = 1.70158, f = 0, g = d;
            if (0 == b)return c;
            if (1 == (b /= e))return c + d;
            f || (f = 0.3 * e);
            g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g);
            return-(g * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - a) * 2 * Math.PI / f)) + c
        }, easeOutElastic: function (a, b, c, d, e) {
            var a = 1.70158, f = 0, g = d;
            if (0 == b)return c;
            if (1 == (b /= e))return c + d;
            f || (f = 0.3 * e);
            g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) *
                Math.asin(d / g);
            return g * Math.pow(2, -10 * b) * Math.sin((b * e - a) * 2 * Math.PI / f) + d + c
        }, easeInOutElastic: function (a, b, c, d, e) {
            var a = 1.70158, f = 0, g = d;
            if (0 == b)return c;
            if (2 == (b /= e / 2))return c + d;
            f || (f = e * 0.3 * 1.5);
            g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g);
            return 1 > b ? -0.5 * g * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - a) * 2 * Math.PI / f) + c : 0.5 * g * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - a) * 2 * Math.PI / f) + d + c
        }, easeInBack: function (b, c, d, e, f, g) {
            g == a && (g = 1.70158);
            return e * (c /= f) * c * ((g + 1) * c - g) + d
        }, easeOutBack: function (b, c, d, e, f, g) {
            g == a && (g = 1.70158);
            return e * ((c = c / f - 1) * c * ((g + 1) * c + g) + 1) + d
        }, easeInOutBack: function (b, c, d, e, f, g) {
            g == a && (g = 1.70158);
            return 1 > (c /= f / 2) ? e / 2 * c * c * (((g *= 1.525) + 1) * c - g) + d : e / 2 * ((c -= 2) * c * (((g *= 1.525) + 1) * c + g) + 2) + d
        }, easeInBounce: function (a, c, d, e, f) {
            return e - b.easing.easeOutBounce(a, f - c, 0, e, f) + d
        }, easeOutBounce: function (a, b, c, d, e) {
            return(b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c
        }, easeInOutBounce: function (a, c, d, e, f) {
            return c < f / 2 ? 0.5 * b.easing.easeInBounce(a, 2 * c, 0, e, f) + d : 0.5 * b.easing.easeOutBounce(a, 2 * c - f, 0, e, f) + 0.5 * e + d
        }})
}(jQuery);
(function (b) {
    b.effects.blind = function (a) {
        return this.queue(function () {
            var c = b(this), d = ["position", "top", "bottom", "left", "right"], g = b.effects.setMode(c, a.options.mode || "hide"), h = a.options.direction || "vertical";
            b.effects.save(c, d);
            c.show();
            var e = b.effects.createWrapper(c).css({overflow: "hidden"}), f = "vertical" == h ? "height" : "width", h = "vertical" == h ? e.height() : e.width();
            "show" == g && e.css(f, 0);
            var i = {};
            i[f] = "show" == g ? h : 0;
            e.animate(i, a.duration, a.options.easing, function () {
                "hide" == g && c.hide();
                b.effects.restore(c,
                    d);
                b.effects.removeWrapper(c);
                a.callback && a.callback.apply(c[0], arguments);
                c.dequeue()
            })
        })
    }
})(jQuery);
(function (b) {
    b.effects.bounce = function (a) {
        return this.queue(function () {
            var c = b(this), d = ["position", "top", "bottom", "left", "right"], g = b.effects.setMode(c, a.options.mode || "effect"), h = a.options.direction || "up", e = a.options.distance || 20, f = a.options.times || 5, i = a.duration || 250;
            /show|hide/.test(g) && d.push("opacity");
            b.effects.save(c, d);
            c.show();
            b.effects.createWrapper(c);
            var j = "up" == h || "down" == h ? "top" : "left", h = "up" == h || "left" == h ? "pos" : "neg", e = a.options.distance || ("top" == j ? c.outerHeight({margin: !0}) / 3 : c.outerWidth({margin: !0}) /
                3);
            "show" == g && c.css("opacity", 0).css(j, "pos" == h ? -e : e);
            "hide" == g && (e /= 2 * f);
            "hide" != g && f--;
            if ("show" == g) {
                var k = {opacity: 1};
                k[j] = ("pos" == h ? "+=" : "-=") + e;
                c.animate(k, i / 2, a.options.easing);
                e /= 2;
                f--
            }
            for (k = 0; k < f; k++) {
                var l = {}, m = {};
                l[j] = ("pos" == h ? "-=" : "+=") + e;
                m[j] = ("pos" == h ? "+=" : "-=") + e;
                c.animate(l, i / 2, a.options.easing).animate(m, i / 2, a.options.easing);
                e = "hide" == g ? 2 * e : e / 2
            }
            "hide" == g ? (k = {opacity: 0}, k[j] = ("pos" == h ? "-=" : "+=") + e, c.animate(k, i / 2, a.options.easing, function () {
                c.hide();
                b.effects.restore(c, d);
                b.effects.removeWrapper(c);
                a.callback && a.callback.apply(this, arguments)
            })) : (l = {}, m = {}, l[j] = ("pos" == h ? "-=" : "+=") + e, m[j] = ("pos" == h ? "+=" : "-=") + e, c.animate(l, i / 2, a.options.easing).animate(m, i / 2, a.options.easing, function () {
                b.effects.restore(c, d);
                b.effects.removeWrapper(c);
                a.callback && a.callback.apply(this, arguments)
            }));
            c.queue("fx", function () {
                c.dequeue()
            });
            c.dequeue()
        })
    }
})(jQuery);
(function (b) {
    b.effects.clip = function (a) {
        return this.queue(function () {
            var c = b(this), d = "position top bottom left right height width".split(" "), g = b.effects.setMode(c, a.options.mode || "hide"), h = a.options.direction || "vertical";
            b.effects.save(c, d);
            c.show();
            var e = b.effects.createWrapper(c).css({overflow: "hidden"}), e = "IMG" == c[0].tagName ? e : c, f = "vertical" == h ? "height" : "width", i = "vertical" == h ? "top" : "left", h = "vertical" == h ? e.height() : e.width();
            "show" == g && (e.css(f, 0), e.css(i, h / 2));
            var j = {};
            j[f] = "show" == g ? h : 0;
            j[i] =
                "show" == g ? 0 : h / 2;
            e.animate(j, {queue: !1, duration: a.duration, easing: a.options.easing, complete: function () {
                g == "hide" && c.hide();
                b.effects.restore(c, d);
                b.effects.removeWrapper(c);
                a.callback && a.callback.apply(c[0], arguments);
                c.dequeue()
            }})
        })
    }
})(jQuery);
(function (b) {
    b.effects.drop = function (a) {
        return this.queue(function () {
            var c = b(this), d = "position top bottom left right opacity".split(" "), g = b.effects.setMode(c, a.options.mode || "hide"), h = a.options.direction || "left";
            b.effects.save(c, d);
            c.show();
            b.effects.createWrapper(c);
            var e = "up" == h || "down" == h ? "top" : "left", h = "up" == h || "left" == h ? "pos" : "neg", f = a.options.distance || ("top" == e ? c.outerHeight({margin: !0}) / 2 : c.outerWidth({margin: !0}) / 2);
            "show" == g && c.css("opacity", 0).css(e, "pos" == h ? -f : f);
            var i = {opacity: "show" ==
                g ? 1 : 0};
            i[e] = ("show" == g ? "pos" == h ? "+=" : "-=" : "pos" == h ? "-=" : "+=") + f;
            c.animate(i, {queue: !1, duration: a.duration, easing: a.options.easing, complete: function () {
                "hide" == g && c.hide();
                b.effects.restore(c, d);
                b.effects.removeWrapper(c);
                a.callback && a.callback.apply(this, arguments);
                c.dequeue()
            }})
        })
    }
})(jQuery);
(function (b) {
    b.effects.explode = function (a) {
        return this.queue(function () {
            var c = a.options.pieces ? Math.round(Math.sqrt(a.options.pieces)) : 3, d = a.options.pieces ? Math.round(Math.sqrt(a.options.pieces)) : 3;
            a.options.mode = "toggle" == a.options.mode ? b(this).is(":visible") ? "hide" : "show" : a.options.mode;
            var g = b(this).show().css("visibility", "hidden"), h = g.offset();
            h.top -= parseInt(g.css("marginTop"), 10) || 0;
            h.left -= parseInt(g.css("marginLeft"), 10) || 0;
            for (var e = g.outerWidth(!0), f = g.outerHeight(!0), i = 0; i < c; i++)for (var j =
                0; j < d; j++)g.clone().appendTo("body").wrap("<div></div>").css({position: "absolute", visibility: "visible", left: -j * (e / d), top: -i * (f / c)}).parent().addClass("ui-effects-explode").css({position: "absolute", overflow: "hidden", width: e / d, height: f / c, left: h.left + j * (e / d) + ("show" == a.options.mode ? (j - Math.floor(d / 2)) * (e / d) : 0), top: h.top + i * (f / c) + ("show" == a.options.mode ? (i - Math.floor(c / 2)) * (f / c) : 0), opacity: "show" == a.options.mode ? 0 : 1}).animate({left: h.left + j * (e / d) + ("show" == a.options.mode ? 0 : (j - Math.floor(d / 2)) * (e / d)), top: h.top +
                i * (f / c) + ("show" == a.options.mode ? 0 : (i - Math.floor(c / 2)) * (f / c)), opacity: "show" == a.options.mode ? 1 : 0}, a.duration || 500);
            setTimeout(function () {
                "show" == a.options.mode ? g.css({visibility: "visible"}) : g.css({visibility: "visible"}).hide();
                a.callback && a.callback.apply(g[0]);
                g.dequeue();
                b("div.ui-effects-explode").remove()
            }, a.duration || 500)
        })
    }
})(jQuery);
(function (b) {
    b.effects.fade = function (a) {
        return this.queue(function () {
            var c = b(this), d = b.effects.setMode(c, a.options.mode || "hide");
            c.animate({opacity: d}, {queue: !1, duration: a.duration, easing: a.options.easing, complete: function () {
                a.callback && a.callback.apply(this, arguments);
                c.dequeue()
            }})
        })
    }
})(jQuery);
(function (b) {
    b.effects.fold = function (a) {
        return this.queue(function () {
            var c = b(this), d = ["position", "top", "bottom", "left", "right"], g = b.effects.setMode(c, a.options.mode || "hide"), h = a.options.size || 15, e = !!a.options.horizFirst, f = a.duration ? a.duration / 2 : b.fx.speeds._default / 2;
            b.effects.save(c, d);
            c.show();
            var i = b.effects.createWrapper(c).css({overflow: "hidden"}), j = "show" == g != e, k = j ? ["width", "height"] : ["height", "width"], j = j ? [i.width(), i.height()] : [i.height(), i.width()], l = /([0-9]+)%/.exec(h);
            l && (h = parseInt(l[1],
                10) / 100 * j["hide" == g ? 0 : 1]);
            "show" == g && i.css(e ? {height: 0, width: h} : {height: h, width: 0});
            e = {};
            l = {};
            e[k[0]] = "show" == g ? j[0] : h;
            l[k[1]] = "show" == g ? j[1] : 0;
            i.animate(e, f, a.options.easing).animate(l, f, a.options.easing, function () {
                "hide" == g && c.hide();
                b.effects.restore(c, d);
                b.effects.removeWrapper(c);
                a.callback && a.callback.apply(c[0], arguments);
                c.dequeue()
            })
        })
    }
})(jQuery);
(function (b) {
    b.effects.highlight = function (a) {
        return this.queue(function () {
            var c = b(this), d = ["backgroundImage", "backgroundColor", "opacity"], g = b.effects.setMode(c, a.options.mode || "show"), h = {backgroundColor: c.css("backgroundColor")};
            "hide" == g && (h.opacity = 0);
            b.effects.save(c, d);
            c.show().css({backgroundImage: "none", backgroundColor: a.options.color || "#ffff99"}).animate(h, {queue: !1, duration: a.duration, easing: a.options.easing, complete: function () {
                g == "hide" && c.hide();
                b.effects.restore(c, d);
                g == "show" && !b.support.opacity &&
                this.style.removeAttribute("filter");
                a.callback && a.callback.apply(this, arguments);
                c.dequeue()
            }})
        })
    }
})(jQuery);
(function (b) {
    b.effects.pulsate = function (a) {
        return this.queue(function () {
            var c = b(this), d = b.effects.setMode(c, a.options.mode || "show");
            times = 2 * (a.options.times || 5) - 1;
            duration = a.duration ? a.duration / 2 : b.fx.speeds._default / 2;
            isVisible = c.is(":visible");
            animateTo = 0;
            isVisible || (c.css("opacity", 0).show(), animateTo = 1);
            ("hide" == d && isVisible || "show" == d && !isVisible) && times--;
            for (d = 0; d < times; d++)c.animate({opacity: animateTo}, duration, a.options.easing), animateTo = (animateTo + 1) % 2;
            c.animate({opacity: animateTo}, duration,
                a.options.easing, function () {
                    animateTo == 0 && c.hide();
                    a.callback && a.callback.apply(this, arguments)
                });
            c.queue("fx",function () {
                c.dequeue()
            }).dequeue()
        })
    }
})(jQuery);
(function (b) {
    b.effects.puff = function (a) {
        return this.queue(function () {
            var c = b(this), d = b.effects.setMode(c, a.options.mode || "hide"), g = parseInt(a.options.percent, 10) || 150, h = g / 100, e = {height: c.height(), width: c.width()};
            b.extend(a.options, {fade: !0, mode: d, percent: "hide" == d ? g : 100, from: "hide" == d ? e : {height: e.height * h, width: e.width * h}});
            c.effect("scale", a.options, a.duration, a.callback);
            c.dequeue()
        })
    };
    b.effects.scale = function (a) {
        return this.queue(function () {
            var c = b(this), d = b.extend(!0, {}, a.options), g = b.effects.setMode(c,
                a.options.mode || "effect"), h = parseInt(a.options.percent, 10) || (0 == parseInt(a.options.percent, 10) ? 0 : "hide" == g ? 0 : 100), e = a.options.direction || "both", f = a.options.origin;
            "effect" != g && (d.origin = f || ["middle", "center"], d.restore = !0);
            f = {height: c.height(), width: c.width()};
            c.from = a.options.from || ("show" == g ? {height: 0, width: 0} : f);
            c.to = {height: f.height * ("horizontal" != e ? h / 100 : 1), width: f.width * ("vertical" != e ? h / 100 : 1)};
            if (a.options.fade && ("show" == g && (c.from.opacity = 0, c.to.opacity = 1), "hide" == g))c.from.opacity = 1, c.to.opacity =
                0;
            d.from = c.from;
            d.to = c.to;
            d.mode = g;
            c.effect("size", d, a.duration, a.callback);
            c.dequeue()
        })
    };
    b.effects.size = function (a) {
        return this.queue(function () {
            var c = b(this), d = "position top bottom left right width height overflow opacity".split(" "), g = "position top bottom left right overflow opacity".split(" "), h = ["width", "height", "overflow"], e = ["fontSize"], f = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], i = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], j = b.effects.setMode(c,
                a.options.mode || "effect"), k = a.options.restore || !1, l = a.options.scale || "both", m = a.options.origin, p = {height: c.height(), width: c.width()};
            c.from = a.options.from || p;
            c.to = a.options.to || p;
            m && (m = b.effects.getBaseline(m, p), c.from.top = (p.height - c.from.height) * m.y, c.from.left = (p.width - c.from.width) * m.x, c.to.top = (p.height - c.to.height) * m.y, c.to.left = (p.width - c.to.width) * m.x);
            var n = c.from.height / p.height, q = c.from.width / p.width, o = c.to.height / p.height, w = c.to.width / p.width;
            if ("box" == l || "both" == l)if (n != o && (d = d.concat(f),
                c.from = b.effects.setTransition(c, f, n, c.from), c.to = b.effects.setTransition(c, f, o, c.to)), q != w)d = d.concat(i), c.from = b.effects.setTransition(c, i, q, c.from), c.to = b.effects.setTransition(c, i, w, c.to);
            if (("content" == l || "both" == l) && n != o)d = d.concat(e), c.from = b.effects.setTransition(c, e, n, c.from), c.to = b.effects.setTransition(c, e, o, c.to);
            b.effects.save(c, k ? d : g);
            c.show();
            b.effects.createWrapper(c);
            c.css("overflow", "hidden").css(c.from);
            if ("content" == l || "both" == l)f = f.concat(["marginTop", "marginBottom"]).concat(e),
                i = i.concat(["marginLeft", "marginRight"]), h = d.concat(f).concat(i), c.find("*[width]").each(function () {
                child = b(this);
                k && b.effects.save(child, h);
                var c = child.height(), d = child.width();
                child.from = {height: c * n, width: d * q};
                child.to = {height: c * o, width: d * w};
                if (n != o) {
                    child.from = b.effects.setTransition(child, f, n, child.from);
                    child.to = b.effects.setTransition(child, f, o, child.to)
                }
                if (q != w) {
                    child.from = b.effects.setTransition(child, i, q, child.from);
                    child.to = b.effects.setTransition(child, i, w, child.to)
                }
                child.css(child.from);
                child.animate(child.to, a.duration, a.options.easing, function () {
                    k && b.effects.restore(child, h)
                })
            });
            c.animate(c.to, {queue: !1, duration: a.duration, easing: a.options.easing, complete: function () {
                c.to.opacity === 0 && c.css("opacity", c.from.opacity);
                j == "hide" && c.hide();
                b.effects.restore(c, k ? d : g);
                b.effects.removeWrapper(c);
                a.callback && a.callback.apply(this, arguments);
                c.dequeue()
            }})
        })
    }
})(jQuery);
(function (b) {
    b.effects.shake = function (a) {
        return this.queue(function () {
            var c = b(this), d = ["position", "top", "bottom", "left", "right"];
            b.effects.setMode(c, a.options.mode || "effect");
            var g = a.options.direction || "left", h = a.options.distance || 20, e = a.options.times || 3, f = a.duration || a.options.duration || 140;
            b.effects.save(c, d);
            c.show();
            b.effects.createWrapper(c);
            var i = "up" == g || "down" == g ? "top" : "left", j = "up" == g || "left" == g ? "pos" : "neg", g = {}, k = {}, l = {};
            g[i] = ("pos" == j ? "-=" : "+=") + h;
            k[i] = ("pos" == j ? "+=" : "-=") + 2 * h;
            l[i] = ("pos" ==
                j ? "-=" : "+=") + 2 * h;
            c.animate(g, f, a.options.easing);
            for (h = 1; h < e; h++)c.animate(k, f, a.options.easing).animate(l, f, a.options.easing);
            c.animate(k, f, a.options.easing).animate(g, f / 2, a.options.easing, function () {
                b.effects.restore(c, d);
                b.effects.removeWrapper(c);
                a.callback && a.callback.apply(this, arguments)
            });
            c.queue("fx", function () {
                c.dequeue()
            });
            c.dequeue()
        })
    }
})(jQuery);
(function (b) {
    b.effects.slide = function (a) {
        return this.queue(function () {
            var c = b(this), d = ["position", "top", "bottom", "left", "right"], g = b.effects.setMode(c, a.options.mode || "show"), h = a.options.direction || "left";
            b.effects.save(c, d);
            c.show();
            b.effects.createWrapper(c).css({overflow: "hidden"});
            var e = "up" == h || "down" == h ? "top" : "left", h = "up" == h || "left" == h ? "pos" : "neg", f = a.options.distance || ("top" == e ? c.outerHeight({margin: !0}) : c.outerWidth({margin: !0}));
            "show" == g && c.css(e, "pos" == h ? isNaN(f) ? "-" + f : -f : f);
            var i = {};
            i[e] = ("show" == g ? "pos" == h ? "+=" : "-=" : "pos" == h ? "-=" : "+=") + f;
            c.animate(i, {queue: !1, duration: a.duration, easing: a.options.easing, complete: function () {
                "hide" == g && c.hide();
                b.effects.restore(c, d);
                b.effects.removeWrapper(c);
                a.callback && a.callback.apply(this, arguments);
                c.dequeue()
            }})
        })
    }
})(jQuery);
(function (b) {
    b.effects.transfer = function (a) {
        return this.queue(function () {
            var c = b(this), d = b(a.options.to), g = d.offset(), d = {top: g.top, left: g.left, height: d.innerHeight(), width: d.innerWidth()}, g = c.offset(), h = b('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top: g.top, left: g.left, height: c.innerHeight(), width: c.innerWidth(), position: "absolute"}).animate(d, a.duration, a.options.easing, function () {
                h.remove();
                a.callback && a.callback.apply(c[0], arguments);
                c.dequeue()
            })
        })
    }
})(jQuery);
/*
 * jQuery Highlight plugin
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 * Copyright (c) 2009 Bartek Szopka http://bartaz.github.com/sandbox.js/jquery.highlight.html
 * Licensed under MIT license. 
 */
jQuery.extend({highlight: function (a, c, b, e) {
    if (a.nodeType === 3) {
        if (c = a.data.match(c)) {
            b = document.createElement(b || "span");
            b.className = e || "highlight";
            a = a.splitText(c.index);
            a.splitText(c[0].length);
            e = a.cloneNode(true);
            b.appendChild(e);
            a.parentNode.replaceChild(b, a);
            return 1
        }
    } else if (a.nodeType === 1 && a.childNodes && !/(script|style)/i.test(a.tagName) && !(a.tagName === b.toUpperCase() && a.className === e))for (var d = 0; d < a.childNodes.length; d++)d += jQuery.highlight(a.childNodes[d], c, b, e);
    return 0
}});
jQuery.fn.unhighlight = function (a) {
    var c = {className: "highlight", element: "span"};
    jQuery.extend(c, a);
    return this.find(c.element + "." + c.className).each(function () {
        var b = this.parentNode;
        b.replaceChild(this.firstChild, this);
        b.normalize()
    }).end()
};
jQuery.fn.highlight = function (a, c) {
    var b = {className: "highlight", element: "span", caseSensitive: false, wordsOnly: false};
    jQuery.extend(b, c);
    if (a.constructor === String)a = [a];
    a = jQuery.grep(a, function (f) {
        return f != ""
    });
    if (a.length == 0)return this;
    var e = b.caseSensitive ? "" : "i", d = "(" + a.join("|") + ")";
    if (b.wordsOnly)d = "\\b" + d + "\\b";
    var g = RegExp(d, e);
    return this.each(function () {
        jQuery.highlight(this, g, b.element, b.className)
    })
};
