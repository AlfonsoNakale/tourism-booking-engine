(() => {
  [
    {
      id: 1,
      name: "NAD-45-000.00-Excess-Waiver",
      baseFee: 45e3,
      perDay: !1,
      displayName: "NAD 45,000.00 Excess Waiver",
    },
    {
      id: 2,
      name: "Tyre-Glass-Waiver",
      baseFee: 165,
      perDay: !0,
      displayName: "Tyre & Glass Waiver @ 165.00 p.d",
    },
    {
      id: 3,
      name: "Cross-Border-Charge",
      baseFee: 100,
      perDay: !1,
      displayName: "Cross Border Charge @ 100.00",
    },
    {
      id: 4,
      name: "Satellite-Phone-N-6000-Excess",
      baseFee: 140,
      perDay: !0,
      displayName: "Satellite Phone (N$6000 Excess) @ 140.00 p.d",
    },
    {
      id: 5,
      name: "Satellite-Phone-Zero-Excess",
      baseFee: 170,
      perDay: !0,
      displayName: "Satellite Phone (Zero Excess) @ 170.00 p.d",
    },
    {
      id: 6,
      name: "Camping-Equipment---Double-Cab",
      baseFee: 170,
      perDay: !0,
      displayName: "Camping Equipment - Double Cab @ NAD 170.00 p.d",
    },
    {
      id: 7,
      name: "Roof-Tents-Required",
      baseFee: 60,
      perDay: !0,
      displayName: "Roof Tents Required @ NAD 60.00 p.d",
    },
    {
      id: 8,
      name: "Engel-40L-Fridge-Freezer",
      baseFee: 90,
      perDay: !0,
      displayName: "Engel 40L Fridge/Freezer @ 90.00 p.d",
    },
    {
      id: 9,
      name: "Bedding-incl.-1x-sleeping-bag-1x-pillow",
      baseFee: 20,
      perDay: !0,
      displayName: "Bedding (incl. 1x sleeping bag + 1x pillow) @ 20.00 p.d",
    },
    {
      id: 10,
      name: "GPS-System",
      baseFee: 75,
      perDay: !0,
      displayName: "GPS System @ 75.00 p.d",
    },
    {
      id: 11,
      name: "SAT-Phone-Minutes",
      baseFee: 825,
      perDay: !1,
      displayName: "SAT Phone Minutes @ 825.00 once.off",
    },
    {
      id: 12,
      name: "Kitchen-wash-up-kit-small-dish-wash-liquid-2x-drying-cloth-2x-sponge-2x-cleaning-cloth-extras",
      baseFee: 150,
      perDay: !1,
      displayName: "Kitchen wash up kit @ 150.00 once.off",
    },
    {
      id: 13,
      name: "Ground-Tent",
      baseFee: 0,
      perDay: !1,
      displayName: "Free Ground Tent",
    },
    {
      id: 14,
      name: "Jerry-Can",
      baseFee: 10,
      perDay: !0,
      displayName: "Jerry Can @ 10.00 p.d",
    },
    {
      id: 15,
      name: "Baby-Seat",
      baseFee: 0,
      perDay: !1,
      displayName: "Free Baby Seat",
    },
  ].map((e) => ({
    ...e,
    key: `extra-${e.id}`,
    inputId: `i-extra-${e.id}`,
    countId: `i-count-extra-${e.id}`,
    displayId: `v-calc-extra-${e.id}`,
    getElements() {
      return {
        checkbox: document.querySelector(`#${this.inputId}`),
        quantity: document.querySelector(`#${this.countId}`),
        display: document.querySelector(`#${this.displayId}`),
      };
    },
    isValid() {
      let e = this.getElements();
      return e.checkbox && e.quantity && e.display;
    },
  }));
  var e = [
      "onChange",
      "onClose",
      "onDayCreate",
      "onDestroy",
      "onKeyDown",
      "onMonthChange",
      "onOpen",
      "onParseConfig",
      "onReady",
      "onValueUpdate",
      "onYearChange",
      "onPreCalendarPosition",
    ],
    n = {
      _disable: [],
      allowInput: !1,
      allowInvalidPreload: !1,
      altFormat: "F j, Y",
      altInput: !1,
      altInputClass: "form-control input",
      animate:
        "object" == typeof window &&
        -1 === window.navigator.userAgent.indexOf("MSIE"),
      ariaDateFormat: "F j, Y",
      autoFillDefaultTime: !0,
      clickOpens: !0,
      closeOnSelect: !0,
      conjunction: ", ",
      dateFormat: "Y-m-d",
      defaultHour: 12,
      defaultMinute: 0,
      defaultSeconds: 0,
      disable: [],
      disableMobile: !1,
      enableSeconds: !1,
      enableTime: !1,
      errorHandler: function (e) {
        return "undefined" != typeof console && console.warn(e);
      },
      getWeek: function (e) {
        var n = new Date(e.getTime());
        n.setHours(0, 0, 0, 0),
          n.setDate(n.getDate() + 3 - ((n.getDay() + 6) % 7));
        var t = new Date(n.getFullYear(), 0, 4);
        return (
          1 +
          Math.round(
            ((n.getTime() - t.getTime()) / 864e5 - 3 + ((t.getDay() + 6) % 7)) /
              7
          )
        );
      },
      hourIncrement: 1,
      ignoredFocusElements: [],
      inline: !1,
      locale: "default",
      minuteIncrement: 5,
      mode: "single",
      monthSelectorType: "dropdown",
      nextArrow:
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
      noCalendar: !1,
      now: new Date(),
      onChange: [],
      onClose: [],
      onDayCreate: [],
      onDestroy: [],
      onKeyDown: [],
      onMonthChange: [],
      onOpen: [],
      onParseConfig: [],
      onReady: [],
      onValueUpdate: [],
      onYearChange: [],
      onPreCalendarPosition: [],
      plugins: [],
      position: "auto",
      positionElement: void 0,
      prevArrow:
        "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
      shorthandCurrentMonth: !1,
      showMonths: 1,
      static: !1,
      time_24hr: !1,
      weekNumbers: !1,
      wrap: !1,
    },
    t = {
      weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      months: {
        shorthand: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        longhand: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      firstDayOfWeek: 0,
      ordinal: function (e) {
        var n = e % 100;
        if (n > 3 && n < 21) return "th";
        switch (n % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      },
      rangeSeparator: " to ",
      weekAbbreviation: "Wk",
      scrollTitle: "Scroll to increment",
      toggleTitle: "Click to toggle",
      amPM: ["AM", "PM"],
      yearAriaLabel: "Year",
      monthAriaLabel: "Month",
      hourAriaLabel: "Hour",
      minuteAriaLabel: "Minute",
      time_24hr: !1,
    },
    a = function (e, n) {
      return void 0 === n && (n = 2), ("000" + e).slice(-1 * n);
    },
    i = function (e) {
      return !0 === e ? 1 : 0;
    };
  function o(e, n) {
    var t;
    return function () {
      var a = this,
        i = arguments;
      clearTimeout(t),
        (t = setTimeout(function () {
          return e.apply(a, i);
        }, n));
    };
  }
  var r = function (e) {
    return e instanceof Array ? e : [e];
  };
  function l(e, n, t) {
    if (!0 === t) return e.classList.add(n);
    e.classList.remove(n);
  }
  function c(e, n, t) {
    var a = window.document.createElement(e);
    return (
      (n = n || ""),
      (t = t || ""),
      (a.className = n),
      void 0 !== t && (a.textContent = t),
      a
    );
  }
  function s(e) {
    for (; e.firstChild; ) e.removeChild(e.firstChild);
  }
  function d(e, n) {
    var t = c("div", "numInputWrapper"),
      a = c("input", "numInput " + e),
      i = c("span", "arrowUp"),
      o = c("span", "arrowDown");
    if (
      (-1 === navigator.userAgent.indexOf("MSIE 9.0")
        ? (a.type = "number")
        : ((a.type = "text"), (a.pattern = "\\d*")),
      void 0 !== n)
    )
      for (var r in n) a.setAttribute(r, n[r]);
    return t.appendChild(a), t.appendChild(i), t.appendChild(o), t;
  }
  function u(e) {
    try {
      if ("function" == typeof e.composedPath) return e.composedPath()[0];
      return e.target;
    } catch (n) {
      return e.target;
    }
  }
  var f = function () {},
    m = function (e, n, t) {
      return t.months[n ? "shorthand" : "longhand"][e];
    },
    g = {
      D: f,
      F: function (e, n, t) {
        e.setMonth(t.months.longhand.indexOf(n));
      },
      G: function (e, n) {
        e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n));
      },
      H: function (e, n) {
        e.setHours(parseFloat(n));
      },
      J: function (e, n) {
        e.setDate(parseFloat(n));
      },
      K: function (e, n, t) {
        e.setHours(
          (e.getHours() % 12) + 12 * i(RegExp(t.amPM[1], "i").test(n))
        );
      },
      M: function (e, n, t) {
        e.setMonth(t.months.shorthand.indexOf(n));
      },
      S: function (e, n) {
        e.setSeconds(parseFloat(n));
      },
      U: function (e, n) {
        return new Date(1e3 * parseFloat(n));
      },
      W: function (e, n, t) {
        var a = parseInt(n),
          i = new Date(e.getFullYear(), 0, 2 + (a - 1) * 7, 0, 0, 0, 0);
        return i.setDate(i.getDate() - i.getDay() + t.firstDayOfWeek), i;
      },
      Y: function (e, n) {
        e.setFullYear(parseFloat(n));
      },
      Z: function (e, n) {
        return new Date(n);
      },
      d: function (e, n) {
        e.setDate(parseFloat(n));
      },
      h: function (e, n) {
        e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n));
      },
      i: function (e, n) {
        e.setMinutes(parseFloat(n));
      },
      j: function (e, n) {
        e.setDate(parseFloat(n));
      },
      l: f,
      m: function (e, n) {
        e.setMonth(parseFloat(n) - 1);
      },
      n: function (e, n) {
        e.setMonth(parseFloat(n) - 1);
      },
      s: function (e, n) {
        e.setSeconds(parseFloat(n));
      },
      u: function (e, n) {
        return new Date(parseFloat(n));
      },
      w: f,
      y: function (e, n) {
        e.setFullYear(2e3 + parseFloat(n));
      },
    },
    p = {
      D: "",
      F: "",
      G: "(\\d\\d|\\d)",
      H: "(\\d\\d|\\d)",
      J: "(\\d\\d|\\d)\\w+",
      K: "",
      M: "",
      S: "(\\d\\d|\\d)",
      U: "(.+)",
      W: "(\\d\\d|\\d)",
      Y: "(\\d{4})",
      Z: "(.+)",
      d: "(\\d\\d|\\d)",
      h: "(\\d\\d|\\d)",
      i: "(\\d\\d|\\d)",
      j: "(\\d\\d|\\d)",
      l: "",
      m: "(\\d\\d|\\d)",
      n: "(\\d\\d|\\d)",
      s: "(\\d\\d|\\d)",
      u: "(.+)",
      w: "(\\d\\d|\\d)",
      y: "(\\d{2})",
    },
    h = {
      Z: function (e) {
        return e.toISOString();
      },
      D: function (e, n, t) {
        return n.weekdays.shorthand[h.w(e, n, t)];
      },
      F: function (e, n, t) {
        return m(h.n(e, n, t) - 1, !1, n);
      },
      G: function (e, n, t) {
        return a(h.h(e, n, t));
      },
      H: function (e) {
        return a(e.getHours());
      },
      J: function (e, n) {
        return void 0 !== n.ordinal
          ? e.getDate() + n.ordinal(e.getDate())
          : e.getDate();
      },
      K: function (e, n) {
        return n.amPM[i(e.getHours() > 11)];
      },
      M: function (e, n) {
        return m(e.getMonth(), !0, n);
      },
      S: function (e) {
        return a(e.getSeconds());
      },
      U: function (e) {
        return e.getTime() / 1e3;
      },
      W: function (e, n, t) {
        return t.getWeek(e);
      },
      Y: function (e) {
        return a(e.getFullYear(), 4);
      },
      d: function (e) {
        return a(e.getDate());
      },
      h: function (e) {
        return e.getHours() % 12 ? e.getHours() % 12 : 12;
      },
      i: function (e) {
        return a(e.getMinutes());
      },
      j: function (e) {
        return e.getDate();
      },
      l: function (e, n) {
        return n.weekdays.longhand[e.getDay()];
      },
      m: function (e) {
        return a(e.getMonth() + 1);
      },
      n: function (e) {
        return e.getMonth() + 1;
      },
      s: function (e) {
        return e.getSeconds();
      },
      u: function (e) {
        return e.getTime();
      },
      w: function (e) {
        return e.getDay();
      },
      y: function (e) {
        return String(e.getFullYear()).substring(2);
      },
    },
    v = function (e) {
      var a = e.config,
        i = void 0 === a ? n : a,
        o = e.l10n,
        r = void 0 === o ? t : o,
        l = e.isMobile,
        c = void 0 !== l && l;
      return function (e, n, t) {
        var a = t || r;
        return void 0 === i.formatDate || c
          ? n
              .split("")
              .map(function (n, t, o) {
                return h[n] && "\\" !== o[t - 1]
                  ? h[n](e, a, i)
                  : "\\" !== n
                    ? n
                    : "";
              })
              .join("")
          : i.formatDate(e, n, a);
      };
    },
    D = function (e) {
      var a = e.config,
        i = void 0 === a ? n : a,
        o = e.l10n,
        r = void 0 === o ? t : o;
      return function (e, t, a, o) {
        if (0 === e || e) {
          var l,
            c = o || r;
          if (e instanceof Date) l = new Date(e.getTime());
          else if ("string" != typeof e && void 0 !== e.toFixed)
            l = new Date(e);
          else if ("string" == typeof e) {
            var s = t || (i || n).dateFormat,
              d = String(e).trim();
            if ("today" === d) (l = new Date()), (a = !0);
            else if (i && i.parseDate) l = i.parseDate(e, s);
            else if (/Z$/.test(d) || /GMT$/.test(d)) l = new Date(e);
            else {
              for (
                var u = void 0, f = [], m = 0, h = 0, v = "";
                m < s.length;
                m++
              ) {
                var D = s[m],
                  y = "\\" === D,
                  b = "\\" === s[m - 1] || y;
                if (p[D] && !b) {
                  var C = new RegExp((v += p[D])).exec(e);
                  C &&
                    (u = !0) &&
                    f["Y" !== D ? "push" : "unshift"]({
                      fn: g[D],
                      val: C[++h],
                    });
                } else y || (v += ".");
              }
              (l =
                i && i.noCalendar
                  ? new Date(new Date().setHours(0, 0, 0, 0))
                  : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)),
                f.forEach(function (e) {
                  var n = e.fn,
                    t = e.val;
                  return (l = n(l, t, c) || l);
                }),
                (l = u ? l : void 0);
            }
          }
          if (!(l instanceof Date && !isNaN(l.getTime()))) {
            i.errorHandler(Error("Invalid date provided: " + e));
            return;
          }
          return !0 === a && l.setHours(0, 0, 0, 0), l;
        }
      };
    };
  function y(e, n, t) {
    return (void 0 === t && (t = !0), !1 !== t)
      ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
          new Date(n.getTime()).setHours(0, 0, 0, 0)
      : e.getTime() - n.getTime();
  }
  var b = function (e, n, t) {
      return 3600 * e + 60 * n + t;
    },
    C = function (e) {
      var n = Math.floor(e / 3600),
        t = (e - 3600 * n) / 60;
      return [n, t, e - 3600 * n - 60 * t];
    },
    w = { DAY: 864e5 };
  function M(e) {
    var n = e.defaultHour,
      t = e.defaultMinute,
      a = e.defaultSeconds;
    if (void 0 !== e.minDate) {
      var i = e.minDate.getHours(),
        o = e.minDate.getMinutes(),
        r = e.minDate.getSeconds();
      n < i && (n = i),
        n === i && t < o && (t = o),
        n === i && t === o && a < r && (a = e.minDate.getSeconds());
    }
    if (void 0 !== e.maxDate) {
      var l = e.maxDate.getHours(),
        c = e.maxDate.getMinutes();
      (n = Math.min(n, l)) === l && (t = Math.min(c, t)),
        n === l && t === c && (a = e.maxDate.getSeconds());
    }
    return { hours: n, minutes: t, seconds: a };
  }
  "function" != typeof Object.assign &&
    (Object.assign = function (e) {
      for (var n = [], t = 1; t < arguments.length; t++)
        n[t - 1] = arguments[t];
      if (!e) throw TypeError("Cannot convert undefined or null to object");
      for (
        var a = function (n) {
            n &&
              Object.keys(n).forEach(function (t) {
                return (e[t] = n[t]);
              });
          },
          i = 0;
        i < n.length;
        i++
      )
        a(n[i]);
      return e;
    });
  var x = function () {
      return (x =
        Object.assign ||
        function (e) {
          for (var n, t = 1, a = arguments.length; t < a; t++)
            for (var i in (n = arguments[t]))
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          return e;
        }).apply(this, arguments);
    },
    E = function () {
      for (var e = 0, n = 0, t = arguments.length; n < t; n++)
        e += arguments[n].length;
      for (var a = Array(e), i = 0, n = 0; n < t; n++)
        for (var o = arguments[n], r = 0, l = o.length; r < l; r++, i++)
          a[i] = o[r];
      return a;
    };
  function k(f, g) {
    for (
      var h = Array.prototype.slice.call(f).filter(function (e) {
          return e instanceof HTMLElement;
        }),
        k = [],
        S = 0;
      S < h.length;
      S++
    ) {
      var F = h[S];
      try {
        if (null !== F.getAttribute("data-fp-omit")) continue;
        void 0 !== F._flatpickr &&
          (F._flatpickr.destroy(), (F._flatpickr = void 0)),
          (F._flatpickr = (function (f, g) {
            var h,
              k = { config: x(x({}, n), T.defaultConfig), l10n: t };
            function S() {
              var e;
              return (
                (null === (e = k.calendarContainer) || void 0 === e
                  ? void 0
                  : e.getRootNode()
                ).activeElement || document.activeElement
              );
            }
            function F(e) {
              return e.bind(k);
            }
            function I() {
              var e = k.config;
              (!1 !== e.weekNumbers || 1 !== e.showMonths) &&
                !0 !== e.noCalendar &&
                window.requestAnimationFrame(function () {
                  if (
                    (void 0 !== k.calendarContainer &&
                      ((k.calendarContainer.style.visibility = "hidden"),
                      (k.calendarContainer.style.display = "block")),
                    void 0 !== k.daysContainer)
                  ) {
                    var n = (k.days.offsetWidth + 1) * e.showMonths;
                    (k.daysContainer.style.width = n + "px"),
                      (k.calendarContainer.style.width =
                        n +
                        (void 0 !== k.weekWrapper
                          ? k.weekWrapper.offsetWidth
                          : 0) +
                        "px"),
                      k.calendarContainer.style.removeProperty("visibility"),
                      k.calendarContainer.style.removeProperty("display");
                  }
                });
            }
            function N(e) {
              if (0 === k.selectedDates.length) {
                var n =
                    void 0 === k.config.minDate ||
                    y(new Date(), k.config.minDate) >= 0
                      ? new Date()
                      : new Date(k.config.minDate.getTime()),
                  t = M(k.config);
                n.setHours(t.hours, t.minutes, t.seconds, n.getMilliseconds()),
                  (k.selectedDates = [n]),
                  (k.latestSelectedDateObj = n);
              }
              void 0 !== e &&
                "blur" !== e.type &&
                (function (e) {
                  e.preventDefault();
                  var n = "keydown" === e.type,
                    t = u(e);
                  void 0 !== k.amPM &&
                    t === k.amPM &&
                    (k.amPM.textContent =
                      k.l10n.amPM[i(k.amPM.textContent === k.l10n.amPM[0])]);
                  var o = parseFloat(t.getAttribute("min")),
                    r = parseFloat(t.getAttribute("max")),
                    l = parseFloat(t.getAttribute("step")),
                    c = parseInt(t.value, 10),
                    s =
                      c + l * (e.delta || (n ? (38 === e.which ? 1 : -1) : 0));
                  if (void 0 !== t.value && 2 === t.value.length) {
                    var d = t === k.hourElement,
                      f = t === k.minuteElement;
                    s < o
                      ? ((s = r + s + i(!d) + (i(d) && i(!k.amPM))),
                        f && R(void 0, -1, k.hourElement))
                      : s > r &&
                        ((s = t === k.hourElement ? s - r - i(!k.amPM) : o),
                        f && R(void 0, 1, k.hourElement)),
                      k.amPM &&
                        d &&
                        (1 === l ? s + c === 23 : Math.abs(s - c) > l) &&
                        (k.amPM.textContent =
                          k.l10n.amPM[
                            i(k.amPM.textContent === k.l10n.amPM[0])
                          ]),
                      (t.value = a(s));
                  }
                })(e);
              var o = k._input.value;
              _(), ew(), k._input.value !== o && k._debouncedChange();
            }
            function _() {
              if (void 0 !== k.hourElement && void 0 !== k.minuteElement) {
                var e = (parseInt(k.hourElement.value.slice(-2), 10) || 0) % 24,
                  n = (parseInt(k.minuteElement.value, 10) || 0) % 60,
                  t =
                    void 0 !== k.secondElement
                      ? (parseInt(k.secondElement.value, 10) || 0) % 60
                      : 0;
                void 0 !== k.amPM &&
                  (e =
                    (e % 12) + 12 * i(k.amPM.textContent === k.l10n.amPM[1]));
                var a =
                    void 0 !== k.config.minTime ||
                    (k.config.minDate &&
                      k.minDateHasTime &&
                      k.latestSelectedDateObj &&
                      0 === y(k.latestSelectedDateObj, k.config.minDate, !0)),
                  o =
                    void 0 !== k.config.maxTime ||
                    (k.config.maxDate &&
                      k.maxDateHasTime &&
                      k.latestSelectedDateObj &&
                      0 === y(k.latestSelectedDateObj, k.config.maxDate, !0));
                if (
                  void 0 !== k.config.maxTime &&
                  void 0 !== k.config.minTime &&
                  k.config.minTime > k.config.maxTime
                ) {
                  var r = b(
                      k.config.minTime.getHours(),
                      k.config.minTime.getMinutes(),
                      k.config.minTime.getSeconds()
                    ),
                    l = b(
                      k.config.maxTime.getHours(),
                      k.config.maxTime.getMinutes(),
                      k.config.maxTime.getSeconds()
                    ),
                    c = b(e, n, t);
                  if (c > l && c < r) {
                    var s = C(r);
                    (e = s[0]), (n = s[1]), (t = s[2]);
                  }
                } else {
                  if (o) {
                    var d =
                      void 0 !== k.config.maxTime
                        ? k.config.maxTime
                        : k.config.maxDate;
                    (e = Math.min(e, d.getHours())) === d.getHours() &&
                      (n = Math.min(n, d.getMinutes())),
                      n === d.getMinutes() && (t = Math.min(t, d.getSeconds()));
                  }
                  if (a) {
                    var u =
                      void 0 !== k.config.minTime
                        ? k.config.minTime
                        : k.config.minDate;
                    (e = Math.max(e, u.getHours())) === u.getHours() &&
                      n < u.getMinutes() &&
                      (n = u.getMinutes()),
                      n === u.getMinutes() && (t = Math.max(t, u.getSeconds()));
                  }
                }
                A(e, n, t);
              }
            }
            function O(e) {
              var n = e || k.latestSelectedDateObj;
              n &&
                n instanceof Date &&
                A(n.getHours(), n.getMinutes(), n.getSeconds());
            }
            function A(e, n, t) {
              void 0 !== k.latestSelectedDateObj &&
                k.latestSelectedDateObj.setHours(e % 24, n, t || 0, 0),
                k.hourElement &&
                  k.minuteElement &&
                  !k.isMobile &&
                  ((k.hourElement.value = a(
                    k.config.time_24hr
                      ? e
                      : ((12 + e) % 12) + 12 * i(e % 12 == 0)
                  )),
                  (k.minuteElement.value = a(n)),
                  void 0 !== k.amPM &&
                    (k.amPM.textContent = k.l10n.amPM[i(e >= 12)]),
                  void 0 !== k.secondElement && (k.secondElement.value = a(t)));
            }
            function P(e) {
              var n = parseInt(u(e).value) + (e.delta || 0);
              (n / 1e3 > 1 ||
                ("Enter" === e.key && !/[^\d]/.test(n.toString()))) &&
                X(n);
            }
            function Y(e, n, t, a) {
              return n instanceof Array
                ? n.forEach(function (n) {
                    return Y(e, n, t, a);
                  })
                : e instanceof Array
                  ? e.forEach(function (e) {
                      return Y(e, n, t, a);
                    })
                  : void (e.addEventListener(n, t, a),
                    k._handlers.push({
                      remove: function () {
                        return e.removeEventListener(n, t, a);
                      },
                    }));
            }
            function j() {
              ev("onChange");
            }
            function H(e, n) {
              var t =
                  void 0 !== e
                    ? k.parseDate(e)
                    : k.latestSelectedDateObj ||
                      (k.config.minDate && k.config.minDate > k.now
                        ? k.config.minDate
                        : k.config.maxDate && k.config.maxDate < k.now
                          ? k.config.maxDate
                          : k.now),
                a = k.currentYear,
                i = k.currentMonth;
              try {
                void 0 !== t &&
                  ((k.currentYear = t.getFullYear()),
                  (k.currentMonth = t.getMonth()));
              } catch (e) {
                (e.message = "Invalid date supplied: " + t),
                  k.config.errorHandler(e);
              }
              n && k.currentYear !== a && (ev("onYearChange"), $()),
                n &&
                  (k.currentYear !== a || k.currentMonth !== i) &&
                  ev("onMonthChange"),
                k.redraw();
            }
            function L(e) {
              var n = u(e);
              ~n.className.indexOf("arrow") &&
                R(e, n.classList.contains("arrowUp") ? 1 : -1);
            }
            function R(e, n, t) {
              var a = e && u(e),
                i = t || (a && a.parentNode && a.parentNode.firstChild),
                o = eD("increment");
              (o.delta = n), i && i.dispatchEvent(o);
            }
            function W(e, n, t, a) {
              var i = ee(n, !0),
                o = c("span", e, n.getDate().toString());
              return (
                (o.dateObj = n),
                (o.$i = a),
                o.setAttribute(
                  "aria-label",
                  k.formatDate(n, k.config.ariaDateFormat)
                ),
                -1 === e.indexOf("hidden") &&
                  0 === y(n, k.now) &&
                  ((k.todayDateElem = o),
                  o.classList.add("today"),
                  o.setAttribute("aria-current", "date")),
                i
                  ? ((o.tabIndex = -1),
                    ey(n) &&
                      (o.classList.add("selected"),
                      (k.selectedDateElem = o),
                      "range" === k.config.mode &&
                        (l(
                          o,
                          "startRange",
                          k.selectedDates[0] &&
                            0 === y(n, k.selectedDates[0], !0)
                        ),
                        l(
                          o,
                          "endRange",
                          k.selectedDates[1] &&
                            0 === y(n, k.selectedDates[1], !0)
                        ),
                        "nextMonthDay" === e && o.classList.add("inRange"))))
                  : o.classList.add("flatpickr-disabled"),
                "range" === k.config.mode &&
                  "range" === k.config.mode &&
                  !(k.selectedDates.length < 2) &&
                  y(n, k.selectedDates[0]) >= 0 &&
                  0 >= y(n, k.selectedDates[1]) &&
                  !ey(n) &&
                  o.classList.add("inRange"),
                k.weekNumbers &&
                  1 === k.config.showMonths &&
                  "prevMonthDay" !== e &&
                  a % 7 == 6 &&
                  k.weekNumbers.insertAdjacentHTML(
                    "beforeend",
                    "<span class='flatpickr-day'>" +
                      k.config.getWeek(n) +
                      "</span>"
                  ),
                ev("onDayCreate", o),
                o
              );
            }
            function B(e) {
              e.focus(), "range" === k.config.mode && ei(e);
            }
            function q(e) {
              for (
                var n = e > 0 ? 0 : k.config.showMonths - 1,
                  t = e > 0 ? k.config.showMonths : -1,
                  a = n;
                a != t;
                a += e
              )
                for (
                  var i = k.daysContainer.children[a],
                    o = e > 0 ? 0 : i.children.length - 1,
                    r = e > 0 ? i.children.length : -1,
                    l = o;
                  l != r;
                  l += e
                ) {
                  var c = i.children[l];
                  if (-1 === c.className.indexOf("hidden") && ee(c.dateObj))
                    return c;
                }
            }
            function J(e, n) {
              var t = S(),
                a = en(t || document.body),
                i =
                  void 0 !== e
                    ? e
                    : a
                      ? t
                      : void 0 !== k.selectedDateElem && en(k.selectedDateElem)
                        ? k.selectedDateElem
                        : void 0 !== k.todayDateElem && en(k.todayDateElem)
                          ? k.todayDateElem
                          : q(n > 0 ? 1 : -1);
              void 0 === i
                ? k._input.focus()
                : a
                  ? (function (e, n) {
                      for (
                        var t =
                            -1 === e.className.indexOf("Month")
                              ? e.dateObj.getMonth()
                              : k.currentMonth,
                          a = n > 0 ? k.config.showMonths : -1,
                          i = n > 0 ? 1 : -1,
                          o = t - k.currentMonth;
                        o != a;
                        o += i
                      )
                        for (
                          var r = k.daysContainer.children[o],
                            l =
                              t - k.currentMonth === o
                                ? e.$i + n
                                : n < 0
                                  ? r.children.length - 1
                                  : 0,
                            c = r.children.length,
                            s = l;
                          s >= 0 && s < c && s != (n > 0 ? c : -1);
                          s += i
                        ) {
                          var d = r.children[s];
                          if (
                            -1 === d.className.indexOf("hidden") &&
                            ee(d.dateObj) &&
                            Math.abs(e.$i - s) >= Math.abs(n)
                          )
                            return B(d);
                        }
                      k.changeMonth(i), J(q(i), 0);
                    })(i, n)
                  : B(i);
            }
            function K() {
              if (void 0 !== k.daysContainer) {
                s(k.daysContainer), k.weekNumbers && s(k.weekNumbers);
                for (
                  var e = document.createDocumentFragment(), n = 0;
                  n < k.config.showMonths;
                  n++
                ) {
                  var t = new Date(k.currentYear, k.currentMonth, 1);
                  t.setMonth(k.currentMonth + n),
                    e.appendChild(
                      (function (e, n) {
                        for (
                          var t =
                              (new Date(e, n, 1).getDay() -
                                k.l10n.firstDayOfWeek +
                                7) %
                              7,
                            a = k.utils.getDaysInMonth((n - 1 + 12) % 12, e),
                            i = k.utils.getDaysInMonth(n, e),
                            o = window.document.createDocumentFragment(),
                            r = k.config.showMonths > 1,
                            l = r ? "prevMonthDay hidden" : "prevMonthDay",
                            s = r ? "nextMonthDay hidden" : "nextMonthDay",
                            d = a + 1 - t,
                            u = 0;
                          d <= a;
                          d++, u++
                        )
                          o.appendChild(
                            W("flatpickr-day " + l, new Date(e, n - 1, d), d, u)
                          );
                        for (d = 1; d <= i; d++, u++)
                          o.appendChild(
                            W("flatpickr-day", new Date(e, n, d), d, u)
                          );
                        for (
                          var f = i + 1;
                          f <= 42 - t &&
                          (1 === k.config.showMonths || u % 7 != 0);
                          f++, u++
                        )
                          o.appendChild(
                            W(
                              "flatpickr-day " + s,
                              new Date(e, n + 1, f % i),
                              f,
                              u
                            )
                          );
                        var m = c("div", "dayContainer");
                        return m.appendChild(o), m;
                      })(t.getFullYear(), t.getMonth())
                    );
                }
                k.daysContainer.appendChild(e),
                  (k.days = k.daysContainer.firstChild),
                  "range" === k.config.mode &&
                    1 === k.selectedDates.length &&
                    ei();
              }
            }
            function $() {
              if (
                !(k.config.showMonths > 1) &&
                "dropdown" === k.config.monthSelectorType
              ) {
                (k.monthsDropdownContainer.tabIndex = -1),
                  (k.monthsDropdownContainer.innerHTML = "");
                for (var e, n = 0; n < 12; n++)
                  if (
                    ((e = n),
                    !(
                      (void 0 !== k.config.minDate &&
                        k.currentYear === k.config.minDate.getFullYear() &&
                        e < k.config.minDate.getMonth()) ||
                      (void 0 !== k.config.maxDate &&
                        k.currentYear === k.config.maxDate.getFullYear() &&
                        e > k.config.maxDate.getMonth())
                    ))
                  ) {
                    var t = c("option", "flatpickr-monthDropdown-month");
                    (t.value = new Date(k.currentYear, n)
                      .getMonth()
                      .toString()),
                      (t.textContent = m(
                        n,
                        k.config.shorthandCurrentMonth,
                        k.l10n
                      )),
                      (t.tabIndex = -1),
                      k.currentMonth === n && (t.selected = !0),
                      k.monthsDropdownContainer.appendChild(t);
                  }
              }
            }
            function G() {
              s(k.monthNav),
                k.monthNav.appendChild(k.prevMonthNav),
                k.config.showMonths &&
                  ((k.yearElements = []), (k.monthElements = []));
              for (var e = k.config.showMonths; e--; ) {
                var n = (function () {
                  var e,
                    n = c("div", "flatpickr-month"),
                    t = window.document.createDocumentFragment();
                  k.config.showMonths > 1 ||
                  "static" === k.config.monthSelectorType
                    ? (e = c("span", "cur-month"))
                    : ((k.monthsDropdownContainer = c(
                        "select",
                        "flatpickr-monthDropdown-months"
                      )),
                      k.monthsDropdownContainer.setAttribute(
                        "aria-label",
                        k.l10n.monthAriaLabel
                      ),
                      Y(k.monthsDropdownContainer, "change", function (e) {
                        var n = parseInt(u(e).value, 10);
                        k.changeMonth(n - k.currentMonth), ev("onMonthChange");
                      }),
                      $(),
                      (e = k.monthsDropdownContainer));
                  var a = d("cur-year", { tabindex: "-1" }),
                    i = a.getElementsByTagName("input")[0];
                  i.setAttribute("aria-label", k.l10n.yearAriaLabel),
                    k.config.minDate &&
                      i.setAttribute(
                        "min",
                        k.config.minDate.getFullYear().toString()
                      ),
                    k.config.maxDate &&
                      (i.setAttribute(
                        "max",
                        k.config.maxDate.getFullYear().toString()
                      ),
                      (i.disabled =
                        !!k.config.minDate &&
                        k.config.minDate.getFullYear() ===
                          k.config.maxDate.getFullYear()));
                  var o = c("div", "flatpickr-current-month");
                  return (
                    o.appendChild(e),
                    o.appendChild(a),
                    t.appendChild(o),
                    n.appendChild(t),
                    { container: n, yearElement: i, monthElement: e }
                  );
                })();
                k.yearElements.push(n.yearElement),
                  k.monthElements.push(n.monthElement),
                  k.monthNav.appendChild(n.container);
              }
              k.monthNav.appendChild(k.nextMonthNav);
            }
            function U() {
              k.weekdayContainer
                ? s(k.weekdayContainer)
                : (k.weekdayContainer = c("div", "flatpickr-weekdays"));
              for (var e = k.config.showMonths; e--; ) {
                var n = c("div", "flatpickr-weekdaycontainer");
                k.weekdayContainer.appendChild(n);
              }
              return z(), k.weekdayContainer;
            }
            function z() {
              if (k.weekdayContainer) {
                var e = k.l10n.firstDayOfWeek,
                  n = E(k.l10n.weekdays.shorthand);
                e > 0 &&
                  e < n.length &&
                  (n = E(n.splice(e, n.length), n.splice(0, e)));
                for (var t = k.config.showMonths; t--; )
                  k.weekdayContainer.children[t].innerHTML =
                    "\n      <span class='flatpickr-weekday'>\n        " +
                    n.join("</span><span class='flatpickr-weekday'>") +
                    "\n      </span>\n      ";
              }
            }
            function V(e, n) {
              void 0 === n && (n = !0);
              var t = n ? e : e - k.currentMonth;
              (t < 0 && !0 === k._hidePrevMonthArrow) ||
                (t > 0 && !0 === k._hideNextMonthArrow) ||
                ((k.currentMonth += t),
                (k.currentMonth < 0 || k.currentMonth > 11) &&
                  ((k.currentYear += k.currentMonth > 11 ? 1 : -1),
                  (k.currentMonth = (k.currentMonth + 12) % 12),
                  ev("onYearChange"),
                  $()),
                K(),
                ev("onMonthChange"),
                eb());
            }
            function Z(e) {
              return k.calendarContainer.contains(e);
            }
            function Q(e) {
              if (k.isOpen && !k.config.inline) {
                var n = u(e),
                  t = Z(n),
                  a =
                    !(
                      n === k.input ||
                      n === k.altInput ||
                      k.element.contains(n) ||
                      (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(k.input) ||
                          ~e.path.indexOf(k.altInput)))
                    ) &&
                    !t &&
                    !Z(e.relatedTarget),
                  i = !k.config.ignoredFocusElements.some(function (e) {
                    return e.contains(n);
                  });
                a &&
                  i &&
                  (k.config.allowInput &&
                    k.setDate(
                      k._input.value,
                      !1,
                      k.config.altInput
                        ? k.config.altFormat
                        : k.config.dateFormat
                    ),
                  void 0 !== k.timeContainer &&
                    void 0 !== k.minuteElement &&
                    void 0 !== k.hourElement &&
                    "" !== k.input.value &&
                    void 0 !== k.input.value &&
                    N(),
                  k.close(),
                  k.config &&
                    "range" === k.config.mode &&
                    1 === k.selectedDates.length &&
                    k.clear(!1));
              }
            }
            function X(e) {
              if (
                !(
                  !e ||
                  (k.config.minDate && e < k.config.minDate.getFullYear()) ||
                  (k.config.maxDate && e > k.config.maxDate.getFullYear())
                )
              ) {
                var n = k.currentYear !== e;
                (k.currentYear = e || k.currentYear),
                  k.config.maxDate &&
                  k.currentYear === k.config.maxDate.getFullYear()
                    ? (k.currentMonth = Math.min(
                        k.config.maxDate.getMonth(),
                        k.currentMonth
                      ))
                    : k.config.minDate &&
                      k.currentYear === k.config.minDate.getFullYear() &&
                      (k.currentMonth = Math.max(
                        k.config.minDate.getMonth(),
                        k.currentMonth
                      )),
                  n && (k.redraw(), ev("onYearChange"), $());
              }
            }
            function ee(e, n) {
              void 0 === n && (n = !0);
              var t,
                a = k.parseDate(e, void 0, n);
              if (
                (k.config.minDate &&
                  a &&
                  0 >
                    y(
                      a,
                      k.config.minDate,
                      void 0 !== n ? n : !k.minDateHasTime
                    )) ||
                (k.config.maxDate &&
                  a &&
                  y(a, k.config.maxDate, void 0 !== n ? n : !k.maxDateHasTime) >
                    0)
              )
                return !1;
              if (!k.config.enable && 0 === k.config.disable.length) return !0;
              if (void 0 === a) return !1;
              for (
                var i = !!k.config.enable,
                  o =
                    null !== (t = k.config.enable) && void 0 !== t
                      ? t
                      : k.config.disable,
                  r = 0,
                  l = void 0;
                r < o.length;
                r++
              ) {
                if (
                  ("function" == typeof (l = o[r]) && l(a)) ||
                  (l instanceof Date &&
                    void 0 !== a &&
                    l.getTime() === a.getTime())
                )
                  return i;
                if ("string" == typeof l) {
                  var c = k.parseDate(l, void 0, !0);
                  return c && c.getTime() === a.getTime() ? i : !i;
                }
                if (
                  "object" == typeof l &&
                  void 0 !== a &&
                  l.from &&
                  l.to &&
                  a.getTime() >= l.from.getTime() &&
                  a.getTime() <= l.to.getTime()
                )
                  return i;
              }
              return !i;
            }
            function en(e) {
              return (
                void 0 !== k.daysContainer &&
                -1 === e.className.indexOf("hidden") &&
                -1 === e.className.indexOf("flatpickr-disabled") &&
                k.daysContainer.contains(e)
              );
            }
            function et(e) {
              var n = e.target === k._input,
                t = k._input.value.trimEnd() !== eC();
              n &&
                t &&
                !(e.relatedTarget && Z(e.relatedTarget)) &&
                k.setDate(
                  k._input.value,
                  !0,
                  e.target === k.altInput
                    ? k.config.altFormat
                    : k.config.dateFormat
                );
            }
            function ea(e) {
              var n = u(e),
                t = k.config.wrap ? f.contains(n) : n === k._input,
                a = k.config.allowInput,
                i = k.isOpen && (!a || !t),
                o = k.config.inline && t && !a;
              if (13 === e.keyCode && t) {
                if (a)
                  return (
                    k.setDate(
                      k._input.value,
                      !0,
                      n === k.altInput
                        ? k.config.altFormat
                        : k.config.dateFormat
                    ),
                    k.close(),
                    n.blur()
                  );
                k.open();
              } else if (Z(n) || i || o) {
                var r = !!k.timeContainer && k.timeContainer.contains(n);
                switch (e.keyCode) {
                  case 13:
                    r ? (e.preventDefault(), N(), eu()) : ef(e);
                    break;
                  case 27:
                    e.preventDefault(), eu();
                    break;
                  case 8:
                  case 46:
                    t &&
                      !k.config.allowInput &&
                      (e.preventDefault(), k.clear());
                    break;
                  case 37:
                  case 39:
                    if (r || t) k.hourElement && k.hourElement.focus();
                    else {
                      e.preventDefault();
                      var l = S();
                      if (
                        void 0 !== k.daysContainer &&
                        (!1 === a || (l && en(l)))
                      ) {
                        var c = 39 === e.keyCode ? 1 : -1;
                        e.ctrlKey
                          ? (e.stopPropagation(), V(c), J(q(1), 0))
                          : J(void 0, c);
                      }
                    }
                    break;
                  case 38:
                  case 40:
                    e.preventDefault();
                    var s = 40 === e.keyCode ? 1 : -1;
                    (k.daysContainer && void 0 !== n.$i) ||
                    n === k.input ||
                    n === k.altInput
                      ? e.ctrlKey
                        ? (e.stopPropagation(),
                          X(k.currentYear - s),
                          J(q(1), 0))
                        : r || J(void 0, 7 * s)
                      : n === k.currentYearElement
                        ? X(k.currentYear - s)
                        : k.config.enableTime &&
                          (!r && k.hourElement && k.hourElement.focus(),
                          N(e),
                          k._debouncedChange());
                    break;
                  case 9:
                    if (r) {
                      var d = [
                          k.hourElement,
                          k.minuteElement,
                          k.secondElement,
                          k.amPM,
                        ]
                          .concat(k.pluginElements)
                          .filter(function (e) {
                            return e;
                          }),
                        m = d.indexOf(n);
                      if (-1 !== m) {
                        var g = d[m + (e.shiftKey ? -1 : 1)];
                        e.preventDefault(), (g || k._input).focus();
                      }
                    } else
                      !k.config.noCalendar &&
                        k.daysContainer &&
                        k.daysContainer.contains(n) &&
                        e.shiftKey &&
                        (e.preventDefault(), k._input.focus());
                }
              }
              if (void 0 !== k.amPM && n === k.amPM)
                switch (e.key) {
                  case k.l10n.amPM[0].charAt(0):
                  case k.l10n.amPM[0].charAt(0).toLowerCase():
                    (k.amPM.textContent = k.l10n.amPM[0]), _(), ew();
                    break;
                  case k.l10n.amPM[1].charAt(0):
                  case k.l10n.amPM[1].charAt(0).toLowerCase():
                    (k.amPM.textContent = k.l10n.amPM[1]), _(), ew();
                }
              (t || Z(n)) && ev("onKeyDown", e);
            }
            function ei(e, n) {
              if (
                (void 0 === n && (n = "flatpickr-day"),
                !(
                  1 !== k.selectedDates.length ||
                  (e &&
                    (!e.classList.contains(n) ||
                      e.classList.contains("flatpickr-disabled")))
                ))
              ) {
                for (
                  var t = e
                      ? e.dateObj.getTime()
                      : k.days.firstElementChild.dateObj.getTime(),
                    a = k.parseDate(k.selectedDates[0], void 0, !0).getTime(),
                    i = Math.min(t, k.selectedDates[0].getTime()),
                    o = Math.max(t, k.selectedDates[0].getTime()),
                    r = !1,
                    l = 0,
                    c = 0,
                    s = i;
                  s < o;
                  s += w.DAY
                )
                  !ee(new Date(s), !0) &&
                    ((r = r || (s > i && s < o)),
                    s < a && (!l || s > l)
                      ? (l = s)
                      : s > a && (!c || s < c) && (c = s));
                Array.from(
                  k.rContainer.querySelectorAll(
                    "*:nth-child(-n+" + k.config.showMonths + ") > ." + n
                  )
                ).forEach(function (n) {
                  var i,
                    o,
                    s,
                    d = n.dateObj.getTime(),
                    u = (l > 0 && d < l) || (c > 0 && d > c);
                  if (u) {
                    n.classList.add("notAllowed"),
                      ["inRange", "startRange", "endRange"].forEach(
                        function (e) {
                          n.classList.remove(e);
                        }
                      );
                    return;
                  }
                  (!r || u) &&
                    ([
                      "startRange",
                      "inRange",
                      "endRange",
                      "notAllowed",
                    ].forEach(function (e) {
                      n.classList.remove(e);
                    }),
                    void 0 !== e &&
                      (e.classList.add(
                        t <= k.selectedDates[0].getTime()
                          ? "startRange"
                          : "endRange"
                      ),
                      a < t && d === a
                        ? n.classList.add("startRange")
                        : a > t && d === a && n.classList.add("endRange"),
                      d >= l &&
                        (0 === c || d <= c) &&
                        (i = d) > Math.min((o = a), (s = t)) &&
                        i < Math.max(o, s) &&
                        n.classList.add("inRange")));
                });
              }
            }
            function eo() {
              !k.isOpen || k.config.static || k.config.inline || es();
            }
            function er(e) {
              return function (n) {
                var t = (k.config["_" + e + "Date"] = k.parseDate(
                    n,
                    k.config.dateFormat
                  )),
                  a = k.config["_" + ("min" === e ? "max" : "min") + "Date"];
                void 0 !== t &&
                  (k["min" === e ? "minDateHasTime" : "maxDateHasTime"] =
                    t.getHours() > 0 ||
                    t.getMinutes() > 0 ||
                    t.getSeconds() > 0),
                  k.selectedDates &&
                    ((k.selectedDates = k.selectedDates.filter(function (e) {
                      return ee(e);
                    })),
                    k.selectedDates.length || "min" !== e || O(t),
                    ew()),
                  k.daysContainer &&
                    (ed(),
                    void 0 !== t
                      ? (k.currentYearElement[e] = t.getFullYear().toString())
                      : k.currentYearElement.removeAttribute(e),
                    (k.currentYearElement.disabled =
                      !!a &&
                      void 0 !== t &&
                      a.getFullYear() === t.getFullYear()));
              };
            }
            function el() {
              return k.config.wrap ? f.querySelector("[data-input]") : f;
            }
            function ec() {
              "object" != typeof k.config.locale &&
                void 0 === T.l10ns[k.config.locale] &&
                k.config.errorHandler(
                  Error("flatpickr: invalid locale " + k.config.locale)
                ),
                (k.l10n = x(
                  x({}, T.l10ns.default),
                  "object" == typeof k.config.locale
                    ? k.config.locale
                    : "default" !== k.config.locale
                      ? T.l10ns[k.config.locale]
                      : void 0
                )),
                (p.D = "(" + k.l10n.weekdays.shorthand.join("|") + ")"),
                (p.l = "(" + k.l10n.weekdays.longhand.join("|") + ")"),
                (p.M = "(" + k.l10n.months.shorthand.join("|") + ")"),
                (p.F = "(" + k.l10n.months.longhand.join("|") + ")"),
                (p.K =
                  "(" +
                  k.l10n.amPM[0] +
                  "|" +
                  k.l10n.amPM[1] +
                  "|" +
                  k.l10n.amPM[0].toLowerCase() +
                  "|" +
                  k.l10n.amPM[1].toLowerCase() +
                  ")"),
                void 0 ===
                  x(x({}, g), JSON.parse(JSON.stringify(f.dataset || {})))
                    .time_24hr &&
                  void 0 === T.defaultConfig.time_24hr &&
                  (k.config.time_24hr = k.l10n.time_24hr),
                (k.formatDate = v(k)),
                (k.parseDate = D({ config: k.config, l10n: k.l10n }));
            }
            function es(e) {
              if ("function" == typeof k.config.position)
                return void k.config.position(k, e);
              if (void 0 !== k.calendarContainer) {
                ev("onPreCalendarPosition");
                var n = e || k._positionElement,
                  t = Array.prototype.reduce.call(
                    k.calendarContainer.children,
                    function (e, n) {
                      return e + n.offsetHeight;
                    },
                    0
                  ),
                  a = k.calendarContainer.offsetWidth,
                  i = k.config.position.split(" "),
                  o = i[0],
                  r = i.length > 1 ? i[1] : null,
                  c = n.getBoundingClientRect(),
                  s = window.innerHeight - c.bottom,
                  d = "above" === o || ("below" !== o && s < t && c.top > t),
                  u =
                    window.pageYOffset +
                    c.top +
                    (d ? -t - 2 : n.offsetHeight + 2);
                if (
                  (l(k.calendarContainer, "arrowTop", !d),
                  l(k.calendarContainer, "arrowBottom", d),
                  !k.config.inline)
                ) {
                  var f = window.pageXOffset + c.left,
                    m = !1,
                    g = !1;
                  "center" === r
                    ? ((f -= (a - c.width) / 2), (m = !0))
                    : "right" === r && ((f -= a - c.width), (g = !0)),
                    l(k.calendarContainer, "arrowLeft", !m && !g),
                    l(k.calendarContainer, "arrowCenter", m),
                    l(k.calendarContainer, "arrowRight", g);
                  var p =
                      window.document.body.offsetWidth -
                      (window.pageXOffset + c.right),
                    h = f + a > window.document.body.offsetWidth,
                    v = p + a > window.document.body.offsetWidth;
                  if (
                    (l(k.calendarContainer, "rightMost", h), !k.config.static)
                  ) {
                    if (((k.calendarContainer.style.top = u + "px"), h)) {
                      if (v) {
                        var D = (function () {
                          for (
                            var e = null, n = 0;
                            n < document.styleSheets.length;
                            n++
                          ) {
                            var t = document.styleSheets[n];
                            if (t.cssRules) {
                              try {
                                t.cssRules;
                              } catch (e) {
                                continue;
                              }
                              e = t;
                              break;
                            }
                          }
                          return null != e
                            ? e
                            : (function () {
                                var e = document.createElement("style");
                                return document.head.appendChild(e), e.sheet;
                              })();
                        })();
                        if (void 0 === D) return;
                        var y = Math.max(
                            0,
                            window.document.body.offsetWidth / 2 - a / 2
                          ),
                          b = D.cssRules.length,
                          C = "{left:" + c.left + "px;right:auto;}";
                        l(k.calendarContainer, "rightMost", !1),
                          l(k.calendarContainer, "centerMost", !0),
                          D.insertRule(
                            ".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" +
                              C,
                            b
                          ),
                          (k.calendarContainer.style.left = y + "px"),
                          (k.calendarContainer.style.right = "auto");
                      } else
                        (k.calendarContainer.style.left = "auto"),
                          (k.calendarContainer.style.right = p + "px");
                    } else
                      (k.calendarContainer.style.left = f + "px"),
                        (k.calendarContainer.style.right = "auto");
                  }
                }
              }
            }
            function ed() {
              k.config.noCalendar || k.isMobile || ($(), eb(), K());
            }
            function eu() {
              k._input.focus(),
                -1 !== window.navigator.userAgent.indexOf("MSIE") ||
                void 0 !== navigator.msMaxTouchPoints
                  ? setTimeout(k.close, 0)
                  : k.close();
            }
            function ef(e) {
              e.preventDefault(), e.stopPropagation();
              var n = (function e(n, t) {
                return t(n) ? n : n.parentNode ? e(n.parentNode, t) : void 0;
              })(u(e), function (e) {
                return (
                  e.classList &&
                  e.classList.contains("flatpickr-day") &&
                  !e.classList.contains("flatpickr-disabled") &&
                  !e.classList.contains("notAllowed")
                );
              });
              if (void 0 !== n) {
                var t = (k.latestSelectedDateObj = new Date(
                    n.dateObj.getTime()
                  )),
                  a =
                    (t.getMonth() < k.currentMonth ||
                      t.getMonth() >
                        k.currentMonth + k.config.showMonths - 1) &&
                    "range" !== k.config.mode;
                if (((k.selectedDateElem = n), "single" === k.config.mode))
                  k.selectedDates = [t];
                else if ("multiple" === k.config.mode) {
                  var i = ey(t);
                  i
                    ? k.selectedDates.splice(parseInt(i), 1)
                    : k.selectedDates.push(t);
                } else
                  "range" === k.config.mode &&
                    (2 === k.selectedDates.length && k.clear(!1, !1),
                    (k.latestSelectedDateObj = t),
                    k.selectedDates.push(t),
                    0 !== y(t, k.selectedDates[0], !0) &&
                      k.selectedDates.sort(function (e, n) {
                        return e.getTime() - n.getTime();
                      }));
                if ((_(), a)) {
                  var o = k.currentYear !== t.getFullYear();
                  (k.currentYear = t.getFullYear()),
                    (k.currentMonth = t.getMonth()),
                    o && (ev("onYearChange"), $()),
                    ev("onMonthChange");
                }
                if (
                  (eb(),
                  K(),
                  ew(),
                  a || "range" === k.config.mode || 1 !== k.config.showMonths
                    ? void 0 !== k.selectedDateElem &&
                      void 0 === k.hourElement &&
                      k.selectedDateElem &&
                      k.selectedDateElem.focus()
                    : B(n),
                  void 0 !== k.hourElement &&
                    void 0 !== k.hourElement &&
                    k.hourElement.focus(),
                  k.config.closeOnSelect)
                ) {
                  var r = "single" === k.config.mode && !k.config.enableTime,
                    l =
                      "range" === k.config.mode &&
                      2 === k.selectedDates.length &&
                      !k.config.enableTime;
                  (r || l) && eu();
                }
                j();
              }
            }
            (k.parseDate = D({ config: k.config, l10n: k.l10n })),
              (k._handlers = []),
              (k.pluginElements = []),
              (k.loadedPlugins = []),
              (k._bind = Y),
              (k._setHoursFromDate = O),
              (k._positionCalendar = es),
              (k.changeMonth = V),
              (k.changeYear = X),
              (k.clear = function (e, n) {
                if (
                  (void 0 === e && (e = !0),
                  void 0 === n && (n = !0),
                  (k.input.value = ""),
                  void 0 !== k.altInput && (k.altInput.value = ""),
                  void 0 !== k.mobileInput && (k.mobileInput.value = ""),
                  (k.selectedDates = []),
                  (k.latestSelectedDateObj = void 0),
                  !0 === n &&
                    ((k.currentYear = k._initialDate.getFullYear()),
                    (k.currentMonth = k._initialDate.getMonth())),
                  !0 === k.config.enableTime)
                ) {
                  var t = M(k.config);
                  A(t.hours, t.minutes, t.seconds);
                }
                k.redraw(), e && ev("onChange");
              }),
              (k.close = function () {
                (k.isOpen = !1),
                  k.isMobile ||
                    (void 0 !== k.calendarContainer &&
                      k.calendarContainer.classList.remove("open"),
                    void 0 !== k._input && k._input.classList.remove("active")),
                  ev("onClose");
              }),
              (k.onMouseOver = ei),
              (k._createElement = c),
              (k.createDay = W),
              (k.destroy = function () {
                void 0 !== k.config && ev("onDestroy");
                for (var e = k._handlers.length; e--; ) k._handlers[e].remove();
                if (((k._handlers = []), k.mobileInput))
                  k.mobileInput.parentNode &&
                    k.mobileInput.parentNode.removeChild(k.mobileInput),
                    (k.mobileInput = void 0);
                else if (
                  k.calendarContainer &&
                  k.calendarContainer.parentNode
                ) {
                  if (k.config.static && k.calendarContainer.parentNode) {
                    var n = k.calendarContainer.parentNode;
                    if (
                      (n.lastChild && n.removeChild(n.lastChild), n.parentNode)
                    ) {
                      for (; n.firstChild; )
                        n.parentNode.insertBefore(n.firstChild, n);
                      n.parentNode.removeChild(n);
                    }
                  } else
                    k.calendarContainer.parentNode.removeChild(
                      k.calendarContainer
                    );
                }
                k.altInput &&
                  ((k.input.type = "text"),
                  k.altInput.parentNode &&
                    k.altInput.parentNode.removeChild(k.altInput),
                  delete k.altInput),
                  k.input &&
                    ((k.input.type = k.input._type),
                    k.input.classList.remove("flatpickr-input"),
                    k.input.removeAttribute("readonly")),
                  [
                    "_showTimeInput",
                    "latestSelectedDateObj",
                    "_hideNextMonthArrow",
                    "_hidePrevMonthArrow",
                    "__hideNextMonthArrow",
                    "__hidePrevMonthArrow",
                    "isMobile",
                    "isOpen",
                    "selectedDateElem",
                    "minDateHasTime",
                    "maxDateHasTime",
                    "days",
                    "daysContainer",
                    "_input",
                    "_positionElement",
                    "innerContainer",
                    "rContainer",
                    "monthNav",
                    "todayDateElem",
                    "calendarContainer",
                    "weekdayContainer",
                    "prevMonthNav",
                    "nextMonthNav",
                    "monthsDropdownContainer",
                    "currentMonthElement",
                    "currentYearElement",
                    "navigationCurrentMonth",
                    "selectedDateElem",
                    "config",
                  ].forEach(function (e) {
                    try {
                      delete k[e];
                    } catch (e) {}
                  });
              }),
              (k.isEnabled = ee),
              (k.jumpToDate = H),
              (k.updateValue = ew),
              (k.open = function (e, n) {
                if (
                  (void 0 === n && (n = k._positionElement), !0 === k.isMobile)
                ) {
                  if (e) {
                    e.preventDefault();
                    var t = u(e);
                    t && t.blur();
                  }
                  void 0 !== k.mobileInput &&
                    (k.mobileInput.focus(), k.mobileInput.click()),
                    ev("onOpen");
                  return;
                }
                if (!k._input.disabled && !k.config.inline) {
                  var a = k.isOpen;
                  (k.isOpen = !0),
                    a ||
                      (k.calendarContainer.classList.add("open"),
                      k._input.classList.add("active"),
                      ev("onOpen"),
                      es(n)),
                    !0 !== k.config.enableTime ||
                      !0 !== k.config.noCalendar ||
                      !1 !== k.config.allowInput ||
                      (void 0 !== e &&
                        k.timeContainer.contains(e.relatedTarget)) ||
                      setTimeout(function () {
                        return k.hourElement.select();
                      }, 50);
                }
              }),
              (k.redraw = ed),
              (k.set = function (n, t) {
                if (null !== n && "object" == typeof n)
                  for (var a in (Object.assign(k.config, n), n))
                    void 0 !== em[a] &&
                      em[a].forEach(function (e) {
                        return e();
                      });
                else
                  (k.config[n] = t),
                    void 0 !== em[n]
                      ? em[n].forEach(function (e) {
                          return e();
                        })
                      : e.indexOf(n) > -1 && (k.config[n] = r(t));
                k.redraw(), ew(!0);
              }),
              (k.setDate = function (e, n, t) {
                if (
                  (void 0 === n && (n = !1),
                  void 0 === t && (t = k.config.dateFormat),
                  (0 !== e && !e) || (e instanceof Array && 0 === e.length))
                )
                  return k.clear(n);
                eg(e, t),
                  (k.latestSelectedDateObj =
                    k.selectedDates[k.selectedDates.length - 1]),
                  k.redraw(),
                  H(void 0, n),
                  O(),
                  0 === k.selectedDates.length && k.clear(!1),
                  ew(n),
                  n && ev("onChange");
              }),
              (k.toggle = function (e) {
                if (!0 === k.isOpen) return k.close();
                k.open(e);
              });
            var em = {
              locale: [ec, z],
              showMonths: [G, I, U],
              minDate: [H],
              maxDate: [H],
              positionElement: [eh],
              clickOpens: [
                function () {
                  !0 === k.config.clickOpens
                    ? (Y(k._input, "focus", k.open),
                      Y(k._input, "click", k.open))
                    : (k._input.removeEventListener("focus", k.open),
                      k._input.removeEventListener("click", k.open));
                },
              ],
            };
            function eg(e, n) {
              var t = [];
              if (e instanceof Array)
                t = e.map(function (e) {
                  return k.parseDate(e, n);
                });
              else if (e instanceof Date || "number" == typeof e)
                t = [k.parseDate(e, n)];
              else if ("string" == typeof e)
                switch (k.config.mode) {
                  case "single":
                  case "time":
                    t = [k.parseDate(e, n)];
                    break;
                  case "multiple":
                    t = e.split(k.config.conjunction).map(function (e) {
                      return k.parseDate(e, n);
                    });
                    break;
                  case "range":
                    t = e.split(k.l10n.rangeSeparator).map(function (e) {
                      return k.parseDate(e, n);
                    });
                }
              else
                k.config.errorHandler(
                  Error("Invalid date supplied: " + JSON.stringify(e))
                );
              (k.selectedDates = k.config.allowInvalidPreload
                ? t
                : t.filter(function (e) {
                    return e instanceof Date && ee(e, !1);
                  })),
                "range" === k.config.mode &&
                  k.selectedDates.sort(function (e, n) {
                    return e.getTime() - n.getTime();
                  });
            }
            function ep(e) {
              return e
                .slice()
                .map(function (e) {
                  return "string" == typeof e ||
                    "number" == typeof e ||
                    e instanceof Date
                    ? k.parseDate(e, void 0, !0)
                    : e && "object" == typeof e && e.from && e.to
                      ? {
                          from: k.parseDate(e.from, void 0),
                          to: k.parseDate(e.to, void 0),
                        }
                      : e;
                })
                .filter(function (e) {
                  return e;
                });
            }
            function eh() {
              k._positionElement = k.config.positionElement || k._input;
            }
            function ev(e, n) {
              if (void 0 !== k.config) {
                var t = k.config[e];
                if (void 0 !== t && t.length > 0)
                  for (var a = 0; t[a] && a < t.length; a++)
                    t[a](k.selectedDates, k.input.value, k, n);
                "onChange" === e &&
                  (k.input.dispatchEvent(eD("change")),
                  k.input.dispatchEvent(eD("input")));
              }
            }
            function eD(e) {
              var n = document.createEvent("Event");
              return n.initEvent(e, !0, !0), n;
            }
            function ey(e) {
              for (var n = 0; n < k.selectedDates.length; n++) {
                var t = k.selectedDates[n];
                if (t instanceof Date && 0 === y(t, e)) return "" + n;
              }
              return !1;
            }
            function eb() {
              k.config.noCalendar ||
                k.isMobile ||
                !k.monthNav ||
                (k.yearElements.forEach(function (e, n) {
                  var t = new Date(k.currentYear, k.currentMonth, 1);
                  t.setMonth(k.currentMonth + n),
                    k.config.showMonths > 1 ||
                    "static" === k.config.monthSelectorType
                      ? (k.monthElements[n].textContent =
                          m(
                            t.getMonth(),
                            k.config.shorthandCurrentMonth,
                            k.l10n
                          ) + " ")
                      : (k.monthsDropdownContainer.value = t
                          .getMonth()
                          .toString()),
                    (e.value = t.getFullYear().toString());
                }),
                (k._hidePrevMonthArrow =
                  void 0 !== k.config.minDate &&
                  (k.currentYear === k.config.minDate.getFullYear()
                    ? k.currentMonth <= k.config.minDate.getMonth()
                    : k.currentYear < k.config.minDate.getFullYear())),
                (k._hideNextMonthArrow =
                  void 0 !== k.config.maxDate &&
                  (k.currentYear === k.config.maxDate.getFullYear()
                    ? k.currentMonth + 1 > k.config.maxDate.getMonth()
                    : k.currentYear > k.config.maxDate.getFullYear())));
            }
            function eC(e) {
              var n =
                e ||
                (k.config.altInput ? k.config.altFormat : k.config.dateFormat);
              return k.selectedDates
                .map(function (e) {
                  return k.formatDate(e, n);
                })
                .filter(function (e, n, t) {
                  return (
                    "range" !== k.config.mode ||
                    k.config.enableTime ||
                    t.indexOf(e) === n
                  );
                })
                .join(
                  "range" !== k.config.mode
                    ? k.config.conjunction
                    : k.l10n.rangeSeparator
                );
            }
            function ew(e) {
              void 0 === e && (e = !0),
                void 0 !== k.mobileInput &&
                  k.mobileFormatStr &&
                  (k.mobileInput.value =
                    void 0 !== k.latestSelectedDateObj
                      ? k.formatDate(k.latestSelectedDateObj, k.mobileFormatStr)
                      : ""),
                (k.input.value = eC(k.config.dateFormat)),
                void 0 !== k.altInput &&
                  (k.altInput.value = eC(k.config.altFormat)),
                !1 !== e && ev("onValueUpdate");
            }
            function eM(e) {
              var n = u(e),
                t = k.prevMonthNav.contains(n),
                a = k.nextMonthNav.contains(n);
              t || a
                ? V(t ? -1 : 1)
                : k.yearElements.indexOf(n) >= 0
                  ? n.select()
                  : n.classList.contains("arrowUp")
                    ? k.changeYear(k.currentYear + 1)
                    : n.classList.contains("arrowDown") &&
                      k.changeYear(k.currentYear - 1);
            }
            return (
              (k.element = k.input = f),
              (k.isOpen = !1),
              (function () {
                var t = [
                    "wrap",
                    "weekNumbers",
                    "allowInput",
                    "allowInvalidPreload",
                    "clickOpens",
                    "time_24hr",
                    "enableTime",
                    "noCalendar",
                    "altInput",
                    "shorthandCurrentMonth",
                    "inline",
                    "static",
                    "enableSeconds",
                    "disableMobile",
                  ],
                  a = x(x({}, JSON.parse(JSON.stringify(f.dataset || {}))), g),
                  i = {};
                (k.config.parseDate = a.parseDate),
                  (k.config.formatDate = a.formatDate),
                  Object.defineProperty(k.config, "enable", {
                    get: function () {
                      return k.config._enable;
                    },
                    set: function (e) {
                      k.config._enable = ep(e);
                    },
                  }),
                  Object.defineProperty(k.config, "disable", {
                    get: function () {
                      return k.config._disable;
                    },
                    set: function (e) {
                      k.config._disable = ep(e);
                    },
                  });
                var o = "time" === a.mode;
                if (!a.dateFormat && (a.enableTime || o)) {
                  var l = T.defaultConfig.dateFormat || n.dateFormat;
                  i.dateFormat =
                    a.noCalendar || o
                      ? "H:i" + (a.enableSeconds ? ":S" : "")
                      : l + " H:i" + (a.enableSeconds ? ":S" : "");
                }
                if (a.altInput && (a.enableTime || o) && !a.altFormat) {
                  var c = T.defaultConfig.altFormat || n.altFormat;
                  i.altFormat =
                    a.noCalendar || o
                      ? "h:i" + (a.enableSeconds ? ":S K" : " K")
                      : c + " h:i" + (a.enableSeconds ? ":S" : "") + " K";
                }
                Object.defineProperty(k.config, "minDate", {
                  get: function () {
                    return k.config._minDate;
                  },
                  set: er("min"),
                }),
                  Object.defineProperty(k.config, "maxDate", {
                    get: function () {
                      return k.config._maxDate;
                    },
                    set: er("max"),
                  });
                var s = function (e) {
                  return function (n) {
                    k.config["min" === e ? "_minTime" : "_maxTime"] =
                      k.parseDate(n, "H:i:S");
                  };
                };
                Object.defineProperty(k.config, "minTime", {
                  get: function () {
                    return k.config._minTime;
                  },
                  set: s("min"),
                }),
                  Object.defineProperty(k.config, "maxTime", {
                    get: function () {
                      return k.config._maxTime;
                    },
                    set: s("max"),
                  }),
                  "time" === a.mode &&
                    ((k.config.noCalendar = !0), (k.config.enableTime = !0)),
                  Object.assign(k.config, i, a);
                for (var d = 0; d < t.length; d++)
                  k.config[t[d]] =
                    !0 === k.config[t[d]] || "true" === k.config[t[d]];
                e
                  .filter(function (e) {
                    return void 0 !== k.config[e];
                  })
                  .forEach(function (e) {
                    k.config[e] = r(k.config[e] || []).map(F);
                  }),
                  (k.isMobile =
                    !k.config.disableMobile &&
                    !k.config.inline &&
                    "single" === k.config.mode &&
                    !k.config.disable.length &&
                    !k.config.enable &&
                    !k.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent
                    ));
                for (var d = 0; d < k.config.plugins.length; d++) {
                  var u = k.config.plugins[d](k) || {};
                  for (var m in u)
                    e.indexOf(m) > -1
                      ? (k.config[m] = r(u[m]).map(F).concat(k.config[m]))
                      : void 0 === a[m] && (k.config[m] = u[m]);
                }
                a.altInputClass ||
                  (k.config.altInputClass =
                    el().className + " " + k.config.altInputClass),
                  ev("onParseConfig");
              })(),
              ec(),
              (function () {
                if (((k.input = el()), !k.input)) {
                  k.config.errorHandler(
                    Error("Invalid input element specified")
                  );
                  return;
                }
                (k.input._type = k.input.type),
                  (k.input.type = "text"),
                  k.input.classList.add("flatpickr-input"),
                  (k._input = k.input),
                  k.config.altInput &&
                    ((k.altInput = c(k.input.nodeName, k.config.altInputClass)),
                    (k._input = k.altInput),
                    (k.altInput.placeholder = k.input.placeholder),
                    (k.altInput.disabled = k.input.disabled),
                    (k.altInput.required = k.input.required),
                    (k.altInput.tabIndex = k.input.tabIndex),
                    (k.altInput.type = "text"),
                    k.input.setAttribute("type", "hidden"),
                    !k.config.static &&
                      k.input.parentNode &&
                      k.input.parentNode.insertBefore(
                        k.altInput,
                        k.input.nextSibling
                      )),
                  k.config.allowInput ||
                    k._input.setAttribute("readonly", "readonly"),
                  eh();
              })(),
              (function () {
                (k.selectedDates = []),
                  (k.now = k.parseDate(k.config.now) || new Date());
                var e =
                  k.config.defaultDate ||
                  (("INPUT" === k.input.nodeName ||
                    "TEXTAREA" === k.input.nodeName) &&
                  k.input.placeholder &&
                  k.input.value === k.input.placeholder
                    ? null
                    : k.input.value);
                e && eg(e, k.config.dateFormat),
                  (k._initialDate =
                    k.selectedDates.length > 0
                      ? k.selectedDates[0]
                      : k.config.minDate &&
                          k.config.minDate.getTime() > k.now.getTime()
                        ? k.config.minDate
                        : k.config.maxDate &&
                            k.config.maxDate.getTime() < k.now.getTime()
                          ? k.config.maxDate
                          : k.now),
                  (k.currentYear = k._initialDate.getFullYear()),
                  (k.currentMonth = k._initialDate.getMonth()),
                  k.selectedDates.length > 0 &&
                    (k.latestSelectedDateObj = k.selectedDates[0]),
                  void 0 !== k.config.minTime &&
                    (k.config.minTime = k.parseDate(k.config.minTime, "H:i")),
                  void 0 !== k.config.maxTime &&
                    (k.config.maxTime = k.parseDate(k.config.maxTime, "H:i")),
                  (k.minDateHasTime =
                    !!k.config.minDate &&
                    (k.config.minDate.getHours() > 0 ||
                      k.config.minDate.getMinutes() > 0 ||
                      k.config.minDate.getSeconds() > 0)),
                  (k.maxDateHasTime =
                    !!k.config.maxDate &&
                    (k.config.maxDate.getHours() > 0 ||
                      k.config.maxDate.getMinutes() > 0 ||
                      k.config.maxDate.getSeconds() > 0));
              })(),
              (k.utils = {
                getDaysInMonth: function (e, n) {
                  return (void 0 === e && (e = k.currentMonth),
                  void 0 === n && (n = k.currentYear),
                  1 === e && ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0))
                    ? 29
                    : k.l10n.daysInMonth[e];
                },
              }),
              k.isMobile ||
                (function () {
                  var e = window.document.createDocumentFragment();
                  if (
                    ((k.calendarContainer = c("div", "flatpickr-calendar")),
                    (k.calendarContainer.tabIndex = -1),
                    !k.config.noCalendar)
                  ) {
                    if (
                      (e.appendChild(
                        ((k.monthNav = c("div", "flatpickr-months")),
                        (k.yearElements = []),
                        (k.monthElements = []),
                        (k.prevMonthNav = c("span", "flatpickr-prev-month")),
                        (k.prevMonthNav.innerHTML = k.config.prevArrow),
                        (k.nextMonthNav = c("span", "flatpickr-next-month")),
                        (k.nextMonthNav.innerHTML = k.config.nextArrow),
                        G(),
                        Object.defineProperty(k, "_hidePrevMonthArrow", {
                          get: function () {
                            return k.__hidePrevMonthArrow;
                          },
                          set: function (e) {
                            k.__hidePrevMonthArrow !== e &&
                              (l(k.prevMonthNav, "flatpickr-disabled", e),
                              (k.__hidePrevMonthArrow = e));
                          },
                        }),
                        Object.defineProperty(k, "_hideNextMonthArrow", {
                          get: function () {
                            return k.__hideNextMonthArrow;
                          },
                          set: function (e) {
                            k.__hideNextMonthArrow !== e &&
                              (l(k.nextMonthNav, "flatpickr-disabled", e),
                              (k.__hideNextMonthArrow = e));
                          },
                        }),
                        (k.currentYearElement = k.yearElements[0]),
                        eb(),
                        k.monthNav)
                      ),
                      (k.innerContainer = c("div", "flatpickr-innerContainer")),
                      k.config.weekNumbers)
                    ) {
                      var n = (function () {
                          k.calendarContainer.classList.add("hasWeeks");
                          var e = c("div", "flatpickr-weekwrapper");
                          e.appendChild(
                            c(
                              "span",
                              "flatpickr-weekday",
                              k.l10n.weekAbbreviation
                            )
                          );
                          var n = c("div", "flatpickr-weeks");
                          return (
                            e.appendChild(n), { weekWrapper: e, weekNumbers: n }
                          );
                        })(),
                        t = n.weekWrapper,
                        o = n.weekNumbers;
                      k.innerContainer.appendChild(t),
                        (k.weekNumbers = o),
                        (k.weekWrapper = t);
                    }
                    (k.rContainer = c("div", "flatpickr-rContainer")),
                      k.rContainer.appendChild(U()),
                      k.daysContainer ||
                        ((k.daysContainer = c("div", "flatpickr-days")),
                        (k.daysContainer.tabIndex = -1)),
                      K(),
                      k.rContainer.appendChild(k.daysContainer),
                      k.innerContainer.appendChild(k.rContainer),
                      e.appendChild(k.innerContainer);
                  }
                  k.config.enableTime &&
                    e.appendChild(
                      (function () {
                        k.calendarContainer.classList.add("hasTime"),
                          k.config.noCalendar &&
                            k.calendarContainer.classList.add("noCalendar");
                        var e = M(k.config);
                        (k.timeContainer = c("div", "flatpickr-time")),
                          (k.timeContainer.tabIndex = -1);
                        var n = c("span", "flatpickr-time-separator", ":"),
                          t = d("flatpickr-hour", {
                            "aria-label": k.l10n.hourAriaLabel,
                          });
                        k.hourElement = t.getElementsByTagName("input")[0];
                        var o = d("flatpickr-minute", {
                          "aria-label": k.l10n.minuteAriaLabel,
                        });
                        if (
                          ((k.minuteElement =
                            o.getElementsByTagName("input")[0]),
                          (k.hourElement.tabIndex = k.minuteElement.tabIndex =
                            -1),
                          (k.hourElement.value = a(
                            k.latestSelectedDateObj
                              ? k.latestSelectedDateObj.getHours()
                              : k.config.time_24hr
                                ? e.hours
                                : (function (e) {
                                    switch (e % 24) {
                                      case 0:
                                      case 12:
                                        return 12;
                                      default:
                                        return e % 12;
                                    }
                                  })(e.hours)
                          )),
                          (k.minuteElement.value = a(
                            k.latestSelectedDateObj
                              ? k.latestSelectedDateObj.getMinutes()
                              : e.minutes
                          )),
                          k.hourElement.setAttribute(
                            "step",
                            k.config.hourIncrement.toString()
                          ),
                          k.minuteElement.setAttribute(
                            "step",
                            k.config.minuteIncrement.toString()
                          ),
                          k.hourElement.setAttribute(
                            "min",
                            k.config.time_24hr ? "0" : "1"
                          ),
                          k.hourElement.setAttribute(
                            "max",
                            k.config.time_24hr ? "23" : "12"
                          ),
                          k.hourElement.setAttribute("maxlength", "2"),
                          k.minuteElement.setAttribute("min", "0"),
                          k.minuteElement.setAttribute("max", "59"),
                          k.minuteElement.setAttribute("maxlength", "2"),
                          k.timeContainer.appendChild(t),
                          k.timeContainer.appendChild(n),
                          k.timeContainer.appendChild(o),
                          k.config.time_24hr &&
                            k.timeContainer.classList.add("time24hr"),
                          k.config.enableSeconds)
                        ) {
                          k.timeContainer.classList.add("hasSeconds");
                          var r = d("flatpickr-second");
                          (k.secondElement =
                            r.getElementsByTagName("input")[0]),
                            (k.secondElement.value = a(
                              k.latestSelectedDateObj
                                ? k.latestSelectedDateObj.getSeconds()
                                : e.seconds
                            )),
                            k.secondElement.setAttribute(
                              "step",
                              k.minuteElement.getAttribute("step")
                            ),
                            k.secondElement.setAttribute("min", "0"),
                            k.secondElement.setAttribute("max", "59"),
                            k.secondElement.setAttribute("maxlength", "2"),
                            k.timeContainer.appendChild(
                              c("span", "flatpickr-time-separator", ":")
                            ),
                            k.timeContainer.appendChild(r);
                        }
                        return (
                          k.config.time_24hr ||
                            ((k.amPM = c(
                              "span",
                              "flatpickr-am-pm",
                              k.l10n.amPM[
                                i(
                                  (k.latestSelectedDateObj
                                    ? k.hourElement.value
                                    : k.config.defaultHour) > 11
                                )
                              ]
                            )),
                            (k.amPM.title = k.l10n.toggleTitle),
                            (k.amPM.tabIndex = -1),
                            k.timeContainer.appendChild(k.amPM)),
                          k.timeContainer
                        );
                      })()
                    ),
                    l(
                      k.calendarContainer,
                      "rangeMode",
                      "range" === k.config.mode
                    ),
                    l(k.calendarContainer, "animate", !0 === k.config.animate),
                    l(
                      k.calendarContainer,
                      "multiMonth",
                      k.config.showMonths > 1
                    ),
                    k.calendarContainer.appendChild(e);
                  var r =
                    void 0 !== k.config.appendTo &&
                    void 0 !== k.config.appendTo.nodeType;
                  if (
                    (k.config.inline || k.config.static) &&
                    (k.calendarContainer.classList.add(
                      k.config.inline ? "inline" : "static"
                    ),
                    k.config.inline &&
                      (!r && k.element.parentNode
                        ? k.element.parentNode.insertBefore(
                            k.calendarContainer,
                            k._input.nextSibling
                          )
                        : void 0 !== k.config.appendTo &&
                          k.config.appendTo.appendChild(k.calendarContainer)),
                    k.config.static)
                  ) {
                    var s = c("div", "flatpickr-wrapper");
                    k.element.parentNode &&
                      k.element.parentNode.insertBefore(s, k.element),
                      s.appendChild(k.element),
                      k.altInput && s.appendChild(k.altInput),
                      s.appendChild(k.calendarContainer);
                  }
                  k.config.static ||
                    k.config.inline ||
                    (void 0 !== k.config.appendTo
                      ? k.config.appendTo
                      : window.document.body
                    ).appendChild(k.calendarContainer);
                })(),
              (function () {
                if (
                  (k.config.wrap &&
                    ["open", "close", "toggle", "clear"].forEach(function (e) {
                      Array.prototype.forEach.call(
                        k.element.querySelectorAll("[data-" + e + "]"),
                        function (n) {
                          return Y(n, "click", k[e]);
                        }
                      );
                    }),
                  k.isMobile)
                ) {
                  (function () {
                    var e = k.config.enableTime
                      ? k.config.noCalendar
                        ? "time"
                        : "datetime-local"
                      : "date";
                    (k.mobileInput = c(
                      "input",
                      k.input.className + " flatpickr-mobile"
                    )),
                      (k.mobileInput.tabIndex = 1),
                      (k.mobileInput.type = e),
                      (k.mobileInput.disabled = k.input.disabled),
                      (k.mobileInput.required = k.input.required),
                      (k.mobileInput.placeholder = k.input.placeholder),
                      (k.mobileFormatStr =
                        "datetime-local" === e
                          ? "Y-m-d\\TH:i:S"
                          : "date" === e
                            ? "Y-m-d"
                            : "H:i:S"),
                      k.selectedDates.length > 0 &&
                        (k.mobileInput.defaultValue = k.mobileInput.value =
                          k.formatDate(k.selectedDates[0], k.mobileFormatStr)),
                      k.config.minDate &&
                        (k.mobileInput.min = k.formatDate(
                          k.config.minDate,
                          "Y-m-d"
                        )),
                      k.config.maxDate &&
                        (k.mobileInput.max = k.formatDate(
                          k.config.maxDate,
                          "Y-m-d"
                        )),
                      k.input.getAttribute("step") &&
                        (k.mobileInput.step = String(
                          k.input.getAttribute("step")
                        )),
                      (k.input.type = "hidden"),
                      void 0 !== k.altInput && (k.altInput.type = "hidden");
                    try {
                      k.input.parentNode &&
                        k.input.parentNode.insertBefore(
                          k.mobileInput,
                          k.input.nextSibling
                        );
                    } catch (e) {}
                    Y(k.mobileInput, "change", function (e) {
                      k.setDate(u(e).value, !1, k.mobileFormatStr),
                        ev("onChange"),
                        ev("onClose");
                    });
                  })();
                  return;
                }
                var e = o(eo, 50);
                (k._debouncedChange = o(j, 300)),
                  k.daysContainer &&
                    !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                    Y(k.daysContainer, "mouseover", function (e) {
                      "range" === k.config.mode && ei(u(e));
                    }),
                  Y(k._input, "keydown", ea),
                  void 0 !== k.calendarContainer &&
                    Y(k.calendarContainer, "keydown", ea),
                  k.config.inline || k.config.static || Y(window, "resize", e),
                  void 0 !== window.ontouchstart
                    ? Y(window.document, "touchstart", Q)
                    : Y(window.document, "mousedown", Q),
                  Y(window.document, "focus", Q, { capture: !0 }),
                  !0 === k.config.clickOpens &&
                    (Y(k._input, "focus", k.open),
                    Y(k._input, "click", k.open)),
                  void 0 !== k.daysContainer &&
                    (Y(k.monthNav, "click", eM),
                    Y(k.monthNav, ["keyup", "increment"], P),
                    Y(k.daysContainer, "click", ef)),
                  void 0 !== k.timeContainer &&
                    void 0 !== k.minuteElement &&
                    void 0 !== k.hourElement &&
                    (Y(k.timeContainer, ["increment"], N),
                    Y(k.timeContainer, "blur", N, { capture: !0 }),
                    Y(k.timeContainer, "click", L),
                    Y(
                      [k.hourElement, k.minuteElement],
                      ["focus", "click"],
                      function (e) {
                        return u(e).select();
                      }
                    ),
                    void 0 !== k.secondElement &&
                      Y(k.secondElement, "focus", function () {
                        return k.secondElement && k.secondElement.select();
                      }),
                    void 0 !== k.amPM &&
                      Y(k.amPM, "click", function (e) {
                        N(e);
                      })),
                  k.config.allowInput && Y(k._input, "blur", et);
              })(),
              (k.selectedDates.length || k.config.noCalendar) &&
                (k.config.enableTime &&
                  O(k.config.noCalendar ? k.latestSelectedDateObj : void 0),
                ew(!1)),
              I(),
              (h = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)),
              !k.isMobile && h && es(),
              ev("onReady"),
              k
            );
          })(F, g || {})),
          k.push(F._flatpickr);
      } catch (e) {
        console.error(e);
      }
    }
    return 1 === k.length ? k[0] : k;
  }
  "undefined" != typeof HTMLElement &&
    "undefined" != typeof HTMLCollection &&
    "undefined" != typeof NodeList &&
    ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr =
      function (e) {
        return k(this, e);
      }),
    (HTMLElement.prototype.flatpickr = function (e) {
      return k([this], e);
    }));
  var T = function (e, n) {
    return "string" == typeof e
      ? k(window.document.querySelectorAll(e), n)
      : e instanceof Node
        ? k([e], n)
        : k(e, n);
  };
  (T.defaultConfig = {}),
    (T.l10ns = { en: x({}, t), default: x({}, t) }),
    (T.localize = function (e) {
      T.l10ns.default = x(x({}, T.l10ns.default), e);
    }),
    (T.setDefaults = function (e) {
      T.defaultConfig = x(x({}, T.defaultConfig), e);
    }),
    (T.parseDate = D({})),
    (T.formatDate = v({})),
    (T.compareDates = y),
    "undefined" != typeof jQuery &&
      void 0 !== jQuery.fn &&
      (jQuery.fn.flatpickr = function (e) {
        return k(this, e);
      }),
    (Date.prototype.fp_incr = function (e) {
      return new Date(
        this.getFullYear(),
        this.getMonth(),
        this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e)
      );
    }),
    "undefined" != typeof window && (window.flatpickr = T),
    document.addEventListener("DOMContentLoaded", () => {
      console.log("Application initialized");
    });
})();
//# sourceMappingURL=app.js.map
