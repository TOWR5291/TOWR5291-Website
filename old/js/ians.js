    ("undefined" != typeof window ? window : this, function(a, b, c, d, e) {
        "use strict";
        var f = "fullpage-wrapper",
            g = "." + f,
            h = "fp-scrollable",
            i = "." + h,
            j = ".slimScrollBar",
            k = ".slimScrollRail",
            l = "fp-responsive",
            m = "fp-notransition",
            n = "fp-destroyed",
            o = "fp-enabled",
            p = "fp-viewing",
            q = "active",
            r = "." + q,
            s = ".section",
            t = "fp-section",
            u = "." + t,
            v = u + r,
            w = u + ":first",
            x = u + ":last",
            y = "fp-tableCell",
            z = "." + y,
            A = "fp-auto-height",
            B = "fp-nav",
            C = "#" + B,
            D = "fp-tooltip",
            E = "fp-show-active",
            F = ".slide",
            G = "fp-slide",
            H = "." + G,
            I = H + r,
            J = "fp-slides",
            K = "." + J,
            L = "fp-slidesContainer",
            M = "." + L,
            N = "fp-table",
            O = "fp-slidesNav",
            P = "." + O,
            Q = P + " a",
            R = "fp-controlArrow",
            S = "." + R,
            T = "fp-prev",
            U = "." + T,
            V = R + " " + T,
            W = S + U,
            X = "fp-next",
            Y = "." + X,
            Z = R + " " + X,
            $ = S + Y,
            _ = a(b),
            aa = a(c);
        a.fn.fullpage = function(R) {
            function U() {
                R.css3 && (R.css3 = gb()), R.anchors.length || (R.anchors = a("[data-anchor]").map(function() {
                    return a(this).data("anchor").toString()
                }).get()), X(), xb.setAllowScrolling(!0), Fb = _.height(), xb.setAutoScrolling(R.autoScrolling, "internal");
                var b = a(v).find(I);
                b.length && (0 !== a(v).index(u) || 0 === a(v).index(u) && 0 !== b.index()) && nb(b), Ka(), fb(), _.on("load", function() {
                    Da()
                })
            }

            function X() {
                Eb.css({
                    height: "100%",
                    position: "relative"
                }), Eb.addClass(f), a("html").addClass(o), Eb.removeClass(n), da(), a(u).each(function(b) {
                    var c = a(this),
                        d = c.find(H),
                        e = d.length;
                    ba(c, b), ca(c, b), e > 0 ? Y(c, d, e) : R.verticalCentered && Wa(c)
                }), R.fixedElements && R.css3 && a(R.fixedElements).appendTo(wb), R.navigation && fa(), R.scrollOverflow ? ("complete" === c.readyState && ga(), _.on("load", ga)) : ha()
            }

            function Y(b, c, d) {
                var e = 100 * d,
                    f = 100 / d;
                c.wrapAll('<div class="' + L + '" />'), c.parent().wrap('<div class="' + J + '" />'), b.find(M).css("width", e + "%"), d > 1 && (R.controlArrows && ea(b), R.slidesNavigation && bb(b, d)), c.each(function(b) {
                    a(this).css("width", f + "%"), R.verticalCentered && Wa(a(this))
                });
                var g = b.find(I);
                g.length && (0 !== a(v).index(u) || 0 === a(v).index(u) && 0 !== g.index()) ? nb(g) : c.eq(0).addClass(q)
            }

            function ba(b, c) {
                c || 0 !== a(v).length || b.addClass(q), b.css("height", Fb + "px"), R.paddingTop && b.css("padding-top", R.paddingTop), R.paddingBottom && b.css("padding-bottom", R.paddingBottom), "undefined" != typeof R.sectionsColor[c] && b.css("background-color", R.sectionsColor[c]), "undefined" != typeof R.anchors[c] && b.attr("data-anchor", R.anchors[c])
            }

            function ca(b, c) {
                "undefined" != typeof R.anchors[c] && b.hasClass(q) && Qa(R.anchors[c], c), R.menu && R.css3 && a(R.menu).closest(g).length && a(R.menu).appendTo(wb)
            }

            function da() {
                a(R.sectionSelector).each(function() {
                    a(this).addClass(t)
                }), a(R.slideSelector).each(function() {
                    a(this).addClass(G)
                })
            }

            function ea(a) {
                a.find(K).after('<div class="' + V + '"></div><div class="' + Z + '"></div>'), "#fff" != R.controlArrowColor && (a.find($).css("border-color", "transparent transparent transparent " + R.controlArrowColor), a.find(W).css("border-color", "transparent " + R.controlArrowColor + " transparent transparent")), R.loopHorizontal || a.find(W).hide()
            }

            function fa() {
                wb.append('<div id="' + B + '"><ul></ul></div>');
                var b = a(C);
                b.addClass(function() {
                    return R.showActiveTooltip ? E + " " + R.navigationPosition : R.navigationPosition
                });
                for (var c = 0; c < a(u).length; c++) {
                    var d = "";
                    R.anchors.length && (d = R.anchors[c]);
                    var e = '<li><a href="#' + d + '"><span></span></a>',
                        f = R.navigationTooltips[c];
                    "undefined" != typeof f && "" !== f && (e += '<div class="' + D + " " + R.navigationPosition + '">' + f + "</div>"), e += "</li>", b.find("ul").append(e)
                }
                a(C).css("margin-top", "-" + a(C).height() / 2 + "px"), a(C).find("li").eq(a(v).index(u)).find("a").addClass(q)
            }

            function ga() {
                a(u).each(function() {
                    var b = a(this).find(H);
                    b.length ? b.each(function() {
                        Ua(a(this))
                    }) : Ua(a(this))
                }), ha()
            }

            function ha() {
                var b = a(v);
                ia(b), Aa(b), Ba(b), a.isFunction(R.afterLoad) && R.afterLoad.call(b, b.data("anchor"), b.index(u) + 1), a.isFunction(R.afterRender) && R.afterRender.call(Eb)
            }

            function ia(a) {
                var b = a.find("SLIDES_WRAPPER"),
                    c = a.find(i);
                b.length && (c = b.find(I)), c.mouseover()
            }

            function ja() {
                var b;
                if (!R.autoScrolling || R.scrollBar) {
                    for (var e = _.scrollTop(), f = 0, g = d.abs(e - c.querySelectorAll(u)[0].offsetTop), h = c.querySelectorAll(u), i = 0; i < h.length; ++i) {
                        var j = h[i],
                            k = d.abs(e - j.offsetTop);
                        g > k && (f = i, g = k)
                    }
                    if (b = a(h).eq(f), !b.hasClass(q) && !b.hasClass(A)) {
                        Sb = !0;
                        var l = a(v),
                            m = l.index(u) + 1,
                            n = Sa(b),
                            o = b.data("anchor"),
                            p = b.index(u) + 1,
                            r = b.find(I);
                        if (r.length) var s = r.data("anchor"),
                            t = r.index();
                        Ib && (b.addClass(q).siblings().removeClass(q), a.isFunction(R.onLeave) && R.onLeave.call(l, m, p, n), a.isFunction(R.afterLoad) && R.afterLoad.call(b, o, p), Aa(b), Qa(o, p - 1), R.anchors.length && (yb = o, cb(t, s, o, p))), clearTimeout(Ob), Ob = setTimeout(function() {
                            Sb = !1
                        }, 100)
                    }
                    R.fitToSection && (clearTimeout(Pb), Pb = setTimeout(function() {
                        Ib && R.fitToSection && (a(v).is(b) && requestAnimFrame(function() {
                            Gb = !0
                        }), ua(b), Gb = !1)
                    }, R.fitToSectionDelay))
                }
            }

            function ka(a) {
                return a.find(K).length ? a.find(I).find(i) : a.find(i)
            }

            function la(a, b) {
                if (Kb.m[a]) {
                    var c, d;
                    if ("down" == a ? (c = "bottom", d = xb.moveSectionDown) : (c = "top", d = xb.moveSectionUp), b.length > 0) {
                        if (!Ra(c, b)) return !0;
                        d()
                    } else d()
                }
            }

            function ma(b) {
                var c = b.originalEvent;
                if (!na(b.target) && oa(c)) {
                    R.autoScrolling && b.preventDefault();
                    var e = a(v),
                        f = ka(e);
                    if (Ib && !Bb) {
                        var g = mb(c);
                        Vb = g.y, Wb = g.x, e.find(K).length && d.abs(Ub - Wb) > d.abs(Tb - Vb) ? d.abs(Ub - Wb) > _.width() / 100 * R.touchSensitivity && (Ub > Wb ? Kb.m.right && xb.moveSlideRight() : Kb.m.left && xb.moveSlideLeft()) : R.autoScrolling && d.abs(Tb - Vb) > _.height() / 100 * R.touchSensitivity && (Tb > Vb ? la("down", f) : Vb > Tb && la("up", f))
                    }
                }
            }

            function na(b, c) {
                c = c || 0;
                var d = a(b).parent();
                return c < R.normalScrollElementTouchThreshold && d.is(R.normalScrollElements) ? !0 : c == R.normalScrollElementTouchThreshold ? !1 : na(d, ++c)
            }

            function oa(a) {
                return "undefined" == typeof a.pointerType || "mouse" != a.pointerType
            }

            function pa(a) {
                var b = a.originalEvent;
                if (R.fitToSection && vb.stop(), oa(b)) {
                    var c = mb(b);
                    Tb = c.y, Ub = c.x
                }
            }

            function qa(a, b) {
                for (var c = 0, e = a.slice(d.max(a.length - b, 1)), f = 0; f < e.length; f++) c += e[f];
                return d.ceil(c / b)
            }

            function ra(c) {
                var e = (new Date).getTime();
                if (R.autoScrolling && !Ab) {
                    c = c || b.event;
                    var f = c.wheelDelta || -c.deltaY || -c.detail,
                        g = d.max(-1, d.min(1, f)),
                        h = "undefined" != typeof c.wheelDeltaX || "undefined" != typeof c.deltaX,
                        i = d.abs(c.wheelDeltaX) < d.abs(c.wheelDelta) || d.abs(c.deltaX) < d.abs(c.deltaY) || !h;
                    Jb.length > 149 && Jb.shift(), Jb.push(d.abs(f)), R.scrollBar && (c.preventDefault ? c.preventDefault() : c.returnValue = !1);
                    var j = a(v),
                        k = ka(j),
                        l = e - Xb;
                    if (Xb = e, l > 200 && (Jb = []), Ib) {
                        var m = qa(Jb, 10),
                            n = qa(Jb, 70),
                            o = m >= n;
                        o && i && (0 > g ? la("down", k) : la("up", k))
                    }
                    return !1
                }
                R.fitToSection && vb.stop()
            }

            function sa(b) {
                var c = a(v),
                    d = c.find(K),
                    e = d.find(H).length;
                if (!(!d.length || Bb || 2 > e)) {
                    var f = d.find(I),
                        g = null;
                    if (g = "prev" === b ? f.prev(H) : f.next(H), !g.length) {
                        if (!R.loopHorizontal) return;
                        g = "prev" === b ? f.siblings(":last") : f.siblings(":first")
                    }
                    Bb = !0, Ia(d, g)
                }
            }

            function ta() {
                a(I).each(function() {
                    nb(a(this), "internal")
                })
            }

            function ua(b, c, d) {
                requestAnimFrame(function() {
                    var e = b.position();
                    if ("undefined" != typeof e) {
                        var f = b.hasClass(A) ? e.top - Fb + b.height() : e.top,
                            g = {
                                element: b,
                                callback: c,
                                isMovementUp: d,
                                dest: e,
                                dtop: f,
                                yMovement: Sa(b),
                                anchorLink: b.data("anchor"),
                                sectionIndex: b.index(u),
                                activeSlide: b.find(I),
                                activeSection: a(v),
                                leavingSection: a(v).index(u) + 1,
                                localIsResizing: Gb
                            };
                        if (!(g.activeSection.is(b) && !Gb || R.scrollBar && _.scrollTop() === g.dtop && !b.hasClass(A))) {
                            if (g.activeSlide.length) var h = g.activeSlide.data("anchor"),
                                i = g.activeSlide.index();
                            if (R.autoScrolling && R.continuousVertical && "undefined" != typeof g.isMovementUp && (!g.isMovementUp && "up" == g.yMovement || g.isMovementUp && "down" == g.yMovement) && (g = xa(g)), a.isFunction(R.onLeave) && !g.localIsResizing) {
                                if (R.onLeave.call(g.activeSection, g.leavingSection, g.sectionIndex + 1, g.yMovement) === !1) return;
                                Ca(g.activeSection)
                            }
                            b.addClass(q).siblings().removeClass(q), Aa(b), Ib = !1, cb(i, h, g.anchorLink, g.sectionIndex), va(g), yb = g.anchorLink, Qa(g.anchorLink, g.sectionIndex)
                        }
                    }
                })
            }

            function va(b) {
                if (R.css3 && R.autoScrolling && !R.scrollBar) {
                    var c = "translate3d(0px, -" + b.dtop + "px, 0px)";
                    Ya(c, !0), R.scrollingSpeed ? Mb = setTimeout(function() {
                        za(b)
                    }, R.scrollingSpeed) : za(b)
                } else {
                    var d = wa(b);
                    a(d.element).animate(d.options, R.scrollingSpeed, R.easing).promise().done(function() {
                        za(b)
                    })
                }
            }

            function wa(a) {
                var b = {};
                return R.autoScrolling && !R.scrollBar ? (b.options = {
                    top: -a.dtop
                }, b.element = g) : (b.options = {
                    scrollTop: a.dtop
                }, b.element = "html, body"), b
            }

            function xa(b) {
                return b.isMovementUp ? a(v).before(b.activeSection.nextAll(u)) : a(v).after(b.activeSection.prevAll(u).get().reverse()), ob(a(v).position().top), ta(), b.wrapAroundElements = b.activeSection, b.dest = b.element.position(), b.dtop = b.dest.top, b.yMovement = Sa(b.element), b
            }

            function ya(b) {
                b.wrapAroundElements && b.wrapAroundElements.length && (b.isMovementUp ? a(w).before(b.wrapAroundElements) : a(x).after(b.wrapAroundElements), ob(a(v).position().top), ta())
            }

            function za(b) {
                ya(b), b.element.find(".fp-scrollable").mouseover(), xb.setFitToSection(!b.element.hasClass(A)), a.isFunction(R.afterLoad) && !b.localIsResizing && R.afterLoad.call(b.element, b.anchorLink, b.sectionIndex + 1), Ba(b.element), Ib = !0, a.isFunction(b.callback) && b.callback.call(this)
            }

            function Aa(b) {
                var c = b.find(I);
                c.length && (b = a(c)), b.find("img[data-src], source[data-src], audio[data-src]").each(function() {
                    a(this).attr("src", a(this).data("src")), a(this).removeAttr("data-src"), a(this).is("source") && a(this).closest("video").get(0).load()
                })
            }

            function Ba(b) {
                b.find("video, audio").each(function() {
                    var b = a(this).get(0);
                    b.hasAttribute("autoplay") && "function" == typeof b.play && b.play()
                })
            }

            function Ca(b) {
                b.find("video, audio").each(function() {
                    var b = a(this).get(0);
                    b.hasAttribute("data-ignore") || "function" != typeof b.pause || b.pause()
                })
            }

            function Da() {
                var a = b.location.hash.replace("#", "").split("/"),
                    c = a[0],
                    d = a[1];
                c && (R.animateAnchor ? _a(c, d) : xb.silentMoveTo(c, d))
            }

            function Ea() {
                if (!Sb && !R.lockAnchors) {
                    var a = b.location.hash.replace("#", "").split("/"),
                        c = a[0],
                        d = a[1],
                        e = "undefined" == typeof yb,
                        f = "undefined" == typeof yb && "undefined" == typeof d && !Bb;
                    c.length && (c && c !== yb && !e || f || !Bb && zb != d) && _a(c, d)
                }
            }

            function Fa(b) {
                clearTimeout(Qb);
                var c = a(":focus");
                if (!c.is("textarea") && !c.is("input") && !c.is("select") && R.keyboardScrolling && R.autoScrolling) {
                    var d = b.which,
                        e = [40, 38, 32, 33, 34];
                    a.inArray(d, e) > -1 && b.preventDefault(), Ab = b.ctrlKey, Qb = setTimeout(function() {
                        Ga(b)
                    }, 150)
                }
            }

            function Ga(b) {
                var c = b.shiftKey;
                switch (b.which) {
                    case 38:
                    case 33:
                        Kb.k.up && xb.moveSectionUp();
                        break;
                    case 32:
                        if (c && Kb.k.up) {
                            xb.moveSectionUp();
                            break
                        }
                    case 40:
                    case 34:
                        Kb.k.down && xb.moveSectionDown();
                        break;
                    case 36:
                        Kb.k.up && xb.moveTo(1);
                        break;
                    case 35:
                        Kb.k.down && xb.moveTo(a(u).length);
                        break;
                    case 37:
                        Kb.k.left && xb.moveSlideLeft();
                        break;
                    case 39:
                        Kb.k.right && xb.moveSlideRight();
                        break;
                    default:
                        return
                }
            }

            function Ha(a) {
                Ib && (a.pageY < Yb ? xb.moveSectionUp() : a.pageY > Yb && xb.moveSectionDown()), Yb = a.pageY
            }

            function Ia(b, c) {
                var e = c.position(),
                    f = c.index(),
                    g = b.closest(u),
                    h = g.index(u),
                    i = g.data("anchor"),
                    j = g.find(P),
                    k = eb(c),
                    l = Gb;
                if (R.onSlideLeave) {
                    var m = g.find(I),
                        n = m.index(),
                        o = Ta(n, f);
                    if (!l && "none" !== o && a.isFunction(R.onSlideLeave) && R.onSlideLeave.call(m, i, h + 1, n, o, f) === !1) return void(Bb = !1)
                }
                c.addClass(q).siblings().removeClass(q), l || Aa(c), !R.loopHorizontal && R.controlArrows && (g.find(W).toggle(0 !== f), g.find($).toggle(!c.is(":last-child"))), g.hasClass(q) && cb(f, k, i, h);
                var p = function() {
                    l || a.isFunction(R.afterSlideLoad) && R.afterSlideLoad.call(c, i, h + 1, k, f), Bb = !1
                };
                if (R.css3) {
                    var s = "translate3d(-" + d.round(e.left) + "px, 0px, 0px)";
                    La(b.find(M), R.scrollingSpeed > 0).css(pb(s)), Nb = setTimeout(function() {
                        p()
                    }, R.scrollingSpeed, R.easing)
                } else b.animate({
                    scrollLeft: d.round(e.left)
                }, R.scrollingSpeed, R.easing, function() {
                    p()
                });
                j.find(r).removeClass(q), j.find("li").eq(f).find("a").addClass(q)
            }

            function Ja() {
                if (Ka(), Cb) {
                    var b = a(c.activeElement);
                    if (!b.is("textarea") && !b.is("input") && !b.is("select")) {
                        var e = _.height();
                        d.abs(e - Zb) > 20 * d.max(Zb, e) / 100 && (xb.reBuild(!0), Zb = e)
                    }
                } else clearTimeout(Lb), Lb = setTimeout(function() {
                    xb.reBuild(!0)
                }, 350)
            }

            function Ka() {
                var a = R.responsive || R.responsiveWidth,
                    b = R.responsiveHeight;
                if (a && xb.setResponsive(_.width() < a), b) {
                    var c = Eb.hasClass(l);
                    c || xb.setResponsive(_.height() < b)
                }
            }

            function La(a) {
                var b = "all " + R.scrollingSpeed + "ms " + R.easingcss3;
                return a.removeClass(m), a.css({
                    "-webkit-transition": b,
                    transition: b
                })
            }

            function Ma(a) {
                return a.addClass(m)
            }

            function Na(a, b) {
                var c = 825,
                    e = 900;
                if (c > a || e > b) {
                    var f = 100 * a / c,
                        g = 100 * b / e,
                        h = d.min(f, g),
                        i = h.toFixed(2);
                    wb.css("font-size", i + "%")
                } else wb.css("font-size", "100%")
            }

            function Oa(b, c) {
                R.navigation && (a(C).find(r).removeClass(q), b ? a(C).find('a[href="#' + b + '"]').addClass(q) : a(C).find("li").eq(c).find("a").addClass(q))
            }

            function Pa(b) {
                R.menu && (a(R.menu).find(r).removeClass(q), a(R.menu).find('[data-menuanchor="' + b + '"]').addClass(q))
            }

            function Qa(a, b) {
                Pa(a), Oa(a, b)
            }

            function Ra(a, b) {
                return "top" === a ? !b.scrollTop() : "bottom" === a ? b.scrollTop() + 1 + b.innerHeight() >= b[0].scrollHeight : void 0
            }

            function Sa(b) {
                var c = a(v).index(u),
                    d = b.index(u);
                return c == d ? "none" : c > d ? "up" : "down"
            }

            function Ta(a, b) {
                return a == b ? "none" : a > b ? "left" : "right"
            }

            function Ua(a) {
                a.css("overflow", "hidden");
                var b, c = a.closest(u),
                    d = a.find(i);
                d.length ? b = d.get(0).scrollHeight : (b = a.get(0).scrollHeight, R.verticalCentered && (b = a.find(z).get(0).scrollHeight));
                var e = Fb - parseInt(c.css("padding-bottom")) - parseInt(c.css("padding-top"));
                b > e ? d.length ? d.css("height", e + "px").parent().css("height", e + "px") : (R.verticalCentered ? a.find(z).wrapInner('<div class="' + h + '" />') : a.wrapInner('<div class="' + h + '" />'), a.find(i).slimScroll({
                    allowPageScroll: !0,
                    height: e + "px",
                    size: "10px",
                    alwaysVisible: !0
                })) : Va(a), a.css("overflow", "")
            }

            function Va(a) {
                a.find(i).children().first().unwrap().unwrap(), a.find(j).remove(), a.find(k).remove()
            }

            function Wa(a) {
                a.addClass(N).wrapInner('<div class="' + y + '" style="height:' + Xa(a) + 'px;" />')
            }

            function Xa(a) {
                var b = Fb;
                if (R.paddingTop || R.paddingBottom) {
                    var c = a;
                    c.hasClass(t) || (c = a.closest(u));
                    var d = parseInt(c.css("padding-top")) + parseInt(c.css("padding-bottom"));
                    b = Fb - d
                }
                return b
            }

            function Ya(a, b) {
                b ? La(Eb) : Ma(Eb), Eb.css(pb(a)), setTimeout(function() {
                    Eb.removeClass(m)
                }, 10)
            }

            function Za(b) {
                var c = a(u + '[data-anchor="' + b + '"]');
                return c.length || (c = a(u).eq(b - 1)), c
            }

            function $a(a, b) {
                var c = b.find(K),
                    d = c.find(H + '[data-anchor="' + a + '"]');
                return d.length || (d = c.find(H).eq(a)), d
            }

            function _a(a, b) {
                var c = Za(a);
                "undefined" == typeof b && (b = 0), a === yb || c.hasClass(q) ? ab(c, b) : ua(c, function() {
                    ab(c, b)
                })
            }

            function ab(a, b) {
                if ("undefined" != typeof b) {
                    var c = a.find(K),
                        d = $a(b, a);
                    d.length && Ia(c, d)
                }
            }

            function bb(a, b) {
                a.append('<div class="' + O + '"><ul></ul></div>');
                var c = a.find(P);
                c.addClass(R.slidesNavPosition);
                for (var d = 0; b > d; d++) c.find("ul").append('<li><a href="#"><span></span></a></li>');
                c.css("margin-left", "-" + c.width() / 2 + "px"), c.find("li").first().find("a").addClass(q)
            }

            function cb(a, b, c, d) {
                var e = "";
                R.anchors.length && !R.lockAnchors && (a ? ("undefined" != typeof c && (e = c),
                    "undefined" == typeof b && (b = a), zb = b, db(e + "/" + b)) : "undefined" != typeof a ? (zb = b, db(c)) : db(c)), fb()
            }

            function db(a) {
                if (R.recordHistory) location.hash = a;
                else if (Cb || Db) history.replaceState(e, e, "#" + a);
                else {
                    var c = b.location.href.split("#")[0];
                    b.location.replace(c + "#" + a)
                }
            }

            function eb(a) {
                var b = a.data("anchor"),
                    c = a.index();
                return "undefined" == typeof b && (b = c), b
            }

            function fb() {
                var b = a(v),
                    c = b.find(I),
                    d = eb(b),
                    e = eb(c),
                    f = (b.index(u), String(d));
                c.length && (f = f + "-" + e), f = f.replace("/", "-").replace("#", "");
                var g = new RegExp("\\b\\s?" + p + "-[^\\s]+\\b", "g");
                wb[0].className = wb[0].className.replace(g, ""), wb.addClass(p + "-" + f)
            }

            function gb() {
                var a, d = c.createElement("p"),
                    f = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                c.body.insertBefore(d, null);
                for (var g in f) d.style[g] !== e && (d.style[g] = "translate3d(1px,1px,1px)", a = b.getComputedStyle(d).getPropertyValue(f[g]));
                return c.body.removeChild(d), a !== e && a.length > 0 && "none" !== a
            }

            function hb() {
                c.addEventListener ? (c.removeEventListener("mousewheel", ra, !1), c.removeEventListener("wheel", ra, !1), c.removeEventListener("MozMousePixelScroll", ra, !1)) : c.detachEvent("onmousewheel", ra)
            }

            function ib() {
                var a, d = "";
                b.addEventListener ? a = "addEventListener" : (a = "attachEvent", d = "on");
                var f = "onwheel" in c.createElement("div") ? "wheel" : c.onmousewheel !== e ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == f ? c[a](d + "MozMousePixelScroll", ra, !1) : c[a](d + f, ra, !1)
            }

            function jb() {
                if (Cb || Db) {
                    var b = lb();
                    a(g).off("touchstart " + b.down).on("touchstart " + b.down, pa), a(g).off("touchmove " + b.move).on("touchmove " + b.move, ma)
                }
            }

            function kb() {
                if (Cb || Db) {
                    var b = lb();
                    a(g).off("touchstart " + b.down), a(g).off("touchmove " + b.move)
                }
            }

            function lb() {
                var a;
                return a = b.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
            }

            function mb(a) {
                var b = [];
                return b.y = "undefined" != typeof a.pageY && (a.pageY || a.pageX) ? a.pageY : a.touches[0].pageY, b.x = "undefined" != typeof a.pageX && (a.pageY || a.pageX) ? a.pageX : a.touches[0].pageX, Db && oa(a) && R.scrollBar && (b.y = a.touches[0].pageY, b.x = a.touches[0].pageX), b
            }

            function nb(a, b) {
                xb.setScrollingSpeed(0, "internal"), "undefined" != typeof b && (Gb = !0), Ia(a.closest(K), a), "undefined" != typeof b && (Gb = !1), xb.setScrollingSpeed(Rb.scrollingSpeed, "internal")
            }

            function ob(a) {
                if (R.scrollBar) Eb.scrollTop(a);
                else if (R.css3) {
                    var b = "translate3d(0px, -" + a + "px, 0px)";
                    Ya(b, !1)
                } else Eb.css("top", -a)
            }

            function pb(a) {
                return {
                    "-webkit-transform": a,
                    "-moz-transform": a,
                    "-ms-transform": a,
                    transform: a
                }
            }

            function qb(a, b, c) {
                switch (b) {
                    case "up":
                        Kb[c].up = a;
                        break;
                    case "down":
                        Kb[c].down = a;
                        break;
                    case "left":
                        Kb[c].left = a;
                        break;
                    case "right":
                        Kb[c].right = a;
                        break;
                    case "all":
                        "m" == c ? xb.setAllowScrolling(a) : xb.setKeyboardScrolling(a)
                }
            }

            function rb() {
                ob(0), a(C + ", " + P + ", " + S).remove(), a(u).css({
                    height: "",
                    "background-color": "",
                    padding: ""
                }), a(H).css({
                    width: ""
                }), Eb.css({
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), vb.css({
                    overflow: "",
                    height: ""
                }), a("html").removeClass(o), a.each(wb.get(0).className.split(/\s+/), function(a, b) {
                    0 === b.indexOf(p) && wb.removeClass(b)
                }), a(u + ", " + H).each(function() {
                    Va(a(this)), a(this).removeClass(N + " " + q)
                }), Ma(Eb), Eb.find(z + ", " + M + ", " + K).each(function() {
                    a(this).replaceWith(this.childNodes)
                }), vb.scrollTop(0)
            }

            function sb(a, b, c) {
                R[a] = b, "internal" !== c && (Rb[a] = b)
            }

            function tb() {
                R.continuousVertical && (R.loopTop || R.loopBottom) && (R.continuousVertical = !1, ub("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), R.scrollBar && R.scrollOverflow && ub("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), R.continuousVertical && R.scrollBar && (R.continuousVertical = !1, ub("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), a.each(R.anchors, function(b, c) {
                    (a("#" + c).length || a('[name="' + c + '"]').length) && ub("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
                })
            }

            function ub(a, b) {
                console && console[a] && console[a]("fullPage: " + b)
            }
            var vb = a("html, body"),
                wb = a("body"),
                xb = a.fn.fullpage;
            R = a.extend({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                resize: !1,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                sectionSelector: s,
                slideSelector: F,
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null
            }, R), tb(), a.extend(a.easing, {
                easeInOutCubic: function(a, b, c, d, e) {
                    return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
                }
            }), a.extend(a.easing, {
                easeInQuart: function(a, b, c, d, e) {
                    return d * (b /= e) * b * b * b + c
                }
            }), xb.setAutoScrolling = function(b, c) {
                sb("autoScrolling", b, c);
                var d = a(v);
                R.autoScrolling && !R.scrollBar ? (vb.css({
                    overflow: "hidden",
                    height: "100%"
                }), xb.setRecordHistory(Rb.recordHistory, "internal"), Eb.css({
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }), d.length && ob(d.position().top)) : (vb.css({
                    overflow: "visible",
                    height: "initial"
                }), xb.setRecordHistory(!1, "internal"), Eb.css({
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), ob(0), d.length && vb.scrollTop(d.position().top))
            }, xb.setRecordHistory = function(a, b) {
                sb("recordHistory", a, b)
            }, xb.setScrollingSpeed = function(a, b) {
                sb("scrollingSpeed", a, b)
            }, xb.setFitToSection = function(a, b) {
                sb("fitToSection", a, b)
            }, xb.setLockAnchors = function(a) {
                R.lockAnchors = a
            }, xb.setMouseWheelScrolling = function(a) {
                a ? ib() : hb()
            }, xb.setAllowScrolling = function(b, c) {
                "undefined" != typeof c ? (c = c.replace(/ /g, "").split(","), a.each(c, function(a, c) {
                    qb(b, c, "m")
                })) : b ? (xb.setMouseWheelScrolling(!0), jb()) : (xb.setMouseWheelScrolling(!1), kb())
            }, xb.setKeyboardScrolling = function(b, c) {
                "undefined" != typeof c ? (c = c.replace(/ /g, "").split(","), a.each(c, function(a, c) {
                    qb(b, c, "k")
                })) : R.keyboardScrolling = b
            }, xb.moveSectionUp = function() {
                var b = a(v).prev(u);
                b.length || !R.loopTop && !R.continuousVertical || (b = a(u).last()), b.length && ua(b, null, !0)
            }, xb.moveSectionDown = function() {
                var b = a(v).next(u);
                b.length || !R.loopBottom && !R.continuousVertical || (b = a(u).first()), b.length && ua(b, null, !1)
            }, xb.silentMoveTo = function(a, b) {
                requestAnimFrame(function() {
                    xb.setScrollingSpeed(0, "internal")
                }), xb.moveTo(a, b), requestAnimFrame(function() {
                    xb.setScrollingSpeed(Rb.scrollingSpeed, "internal")
                })
            }, xb.moveTo = function(a, b) {
                var c = Za(a);
                "undefined" != typeof b ? _a(a, b) : c.length > 0 && ua(c)
            }, xb.moveSlideRight = function() {
                sa("next")
            }, xb.moveSlideLeft = function() {
                sa("prev")
            }, xb.reBuild = function(b) {
                if (!Eb.hasClass(n)) {
                    requestAnimFrame(function() {
                        Gb = !0
                    });
                    var c = _.width();
                    Fb = _.height(), R.resize && Na(Fb, c), a(u).each(function() {
                        var b = a(this).find(K),
                            c = a(this).find(H);
                        R.verticalCentered && a(this).find(z).css("height", Xa(a(this)) + "px"), a(this).css("height", Fb + "px"), R.scrollOverflow && (c.length ? c.each(function() {
                            Ua(a(this))
                        }) : Ua(a(this))), c.length > 1 && Ia(b, b.find(I))
                    });
                    var d = a(v),
                        e = d.index(u);
                    e && xb.silentMoveTo(e + 1), requestAnimFrame(function() {
                        Gb = !1
                    }), a.isFunction(R.afterResize) && b && R.afterResize.call(Eb), a.isFunction(R.afterReBuild) && !b && R.afterReBuild.call(Eb)
                }
            }, xb.setResponsive = function(b) {
                var c = Eb.hasClass(l);
                b ? c || (xb.setAutoScrolling(!1, "internal"), xb.setFitToSection(!1, "internal"), a(C).hide(), Eb.addClass(l)) : c && (xb.setAutoScrolling(Rb.autoScrolling, "internal"), xb.setFitToSection(Rb.autoScrolling, "internal"), a(C).show(), Eb.removeClass(l))
            };
            var yb, zb, Ab, Bb = !1,
                Cb = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                Db = "ontouchstart" in b || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                Eb = a(this),
                Fb = _.height(),
                Gb = !1,
                Hb = !0,
                Ib = !0,
                Jb = [],
                Kb = {};
            Kb.m = {
                up: !0,
                down: !0,
                left: !0,
                right: !0
            }, Kb.k = a.extend(!0, {}, Kb.m);
            var Lb, Mb, Nb, Ob, Pb, Qb, Rb = a.extend(!0, {}, R);
            a(this).length && U();
            var Sb = !1;
            _.on("scroll", ja);
            var Tb = 0,
                Ub = 0,
                Vb = 0,
                Wb = 0,
                Xb = (new Date).getTime();
            b.requestAnimFrame = function() {
                return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || b.requestAnimationFrame || function(a) {
                    a()
                }
            }(), _.on("hashchange", Ea), aa.keydown(Fa), aa.keyup(function(a) {
                Hb && (Ab = a.ctrlKey)
            }), a(b).blur(function() {
                Hb = !1, Ab = !1
            });
            var Qb;
            Eb.mousedown(function(a) {
                2 == a.which && (Yb = a.pageY, Eb.on("mousemove", Ha))
            }), Eb.mouseup(function(a) {
                2 == a.which && Eb.off("mousemove")
            });
            var Yb = 0;
            aa.on("click touchstart", C + " a", function(b) {
                b.preventDefault();
                var c = a(this).parent().index();
                ua(a(u).eq(c))
            }), aa.on("click touchstart", Q, function(b) {
                b.preventDefault();
                var c = a(this).closest(u).find(K),
                    d = c.find(H).eq(a(this).closest("li").index());
                Ia(c, d)
            }), R.normalScrollElements && (aa.on("mouseenter", R.normalScrollElements, function() {
                xb.setMouseWheelScrolling(!1)
            }), aa.on("mouseleave", R.normalScrollElements, function() {
                xb.setMouseWheelScrolling(!0)
            })), a(u).on("click touchstart", S, function() {
                a(this).hasClass(T) ? Kb.m.left && xb.moveSlideLeft() : Kb.m.right && xb.moveSlideRight()
            }), _.resize(Ja);
            var Zb = Fb;
            xb.destroy = function(b) {
                xb.setAutoScrolling(!1, "internal"), xb.setAllowScrolling(!1), xb.setKeyboardScrolling(!1), Eb.addClass(n), clearTimeout(Nb), clearTimeout(Mb), clearTimeout(Lb), clearTimeout(Ob), clearTimeout(Pb), _.off("scroll", ja).off("hashchange", Ea).off("resize", Ja), aa.off("click", C + " a").off("mouseenter", C + " li").off("mouseleave", C + " li").off("click", Q).off("mouseover", R.normalScrollElements).off("mouseout", R.normalScrollElements), a(u).off("click", S), clearTimeout(Nb), clearTimeout(Mb), b && rb()
            }
        }
    }), ! function(a) {
        var b = "waitForImages";
        a.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
            hasImageAttributes: ["srcset"]
        }, a.expr[":"].uncached = function(b) {
            if (!a(b).is('img[src][src!=""]')) return !1;
            var c = new Image;
            return c.src = b.src, !c.complete
        }, a.fn.waitForImages = function() {
            var c, d, e, f = 0,
                g = 0,
                h = a.Deferred();
            if (a.isPlainObject(arguments[0]) ? (e = arguments[0].waitForAll, d = arguments[0].each, c = arguments[0].finished) : 1 === arguments.length && "boolean" === a.type(arguments[0]) ? e = arguments[0] : (c = arguments[0], d = arguments[1], e = arguments[2]), c = c || a.noop, d = d || a.noop, e = !!e, !a.isFunction(c) || !a.isFunction(d)) throw new TypeError("An invalid callback was supplied.");
            return this.each(function() {
                var i = a(this),
                    j = [],
                    k = a.waitForImages.hasImageProperties || [],
                    l = a.waitForImages.hasImageAttributes || [],
                    m = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
                e ? i.find("*").addBack().each(function() {
                    var b = a(this);
                    b.is("img:uncached") && j.push({
                        src: b.attr("src"),
                        element: b[0]
                    }), a.each(k, function(a, c) {
                        var d, e = b.css(c);
                        if (!e) return !0;
                        for (; d = m.exec(e);) j.push({
                            src: d[2],
                            element: b[0]
                        })
                    }), a.each(l, function(c, d) {
                        var e, f = b.attr(d);
                        return f ? (e = f.split(","), void a.each(e, function(c, d) {
                            d = a.trim(d).split(" ")[0], j.push({
                                src: d,
                                element: b[0]
                            })
                        })) : !0
                    })
                }) : i.find("img:uncached").each(function() {
                    j.push({
                        src: this.src,
                        element: this
                    })
                }), f = j.length, g = 0, 0 === f && (c.call(i[0]), h.resolveWith(i[0])), a.each(j, function(e, j) {
                    var k = new Image,
                        l = "load." + b + " error." + b;
                    a(k).one(l, function m(b) {
                        var e = [g, f, "load" == b.type];
                        return g++, d.apply(j.element, e), h.notifyWith(j.element, e), a(this).off(l, m), g == f ? (c.call(i[0]), h.resolveWith(i[0]), !1) : void 0
                    }), k.src = j.src
                })
            }), h.promise()
        }
    }
    
    
    (jQuery), $(document).ready(function() {
        $(".js-menu").click(function(a) {
            $(".nav").toggleClass("is-visible"), $(".nav-icon").toggleClass("nav-icon--close"), $(".nav-main").toggleClass("is-visible"), $("html").toggleClass("no-scroll")
        }), $(".js-down").click(function(a) {
            $(window).width() > 1024 ? $.fn.fullpage.moveSectionDown() : $("html, body").animate({
                scrollTop: $(".products").offset().top
            }, 700)
        }), $(".js-up").click(function(a) {
            $.fn.fullpage.moveSectionUp()
        }), $(".js-carousel-center").slick({
            slidesToShow: 6,
            draggable: !0,
            focusOnSelect: !0,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1679,
                settings: {
                    slidesToShow: 5
                }
            }, {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }]
        })
    })