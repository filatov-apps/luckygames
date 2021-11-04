(this.webpackJsonpadcoins = this.webpackJsonpadcoins || []).push([
  [0],
  {
    108: function (e, t, n) {
      e.exports = n(143);
    },
    124: function (e, t, n) {},
    143: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(26),
        r = n.n(a),
        c = n(27),
        l = n(28),
        s = n(33),
        u = n(32),
        i = n(0),
        o = n.n(i),
        d = n(13),
        p = (n(122), n(12)),
        m = n.n(p),
        b = n(16),
        h = n.n(b),
        f = n(30),
        y = (n(124), n(14)),
        E = n.n(y),
        v = 1,
        x = 1,
        j = 1,
        k = "///",
        O = "///";
      function T() {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = Object(f.a)(
          h.a.mark(function e() {
            var t, n;
            return h.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), m.a.sendPromise("VKWebAppGetUserInfo");
                  case 2:
                    return (
                      (t = e.sent),
                      (e.next = 5),
                      E()({
                        method: "POST",
                        url: "https://lucky-coin.ru/user/balance",
                        headers: { "Content-Type": "application/json" },
                        data: {
                          first2: t.data.first_name,
                        },
                      })
                    );
                  case 5:
                    return (
                      (k = t.data.first_name),
                      (e.next = 8),
                      E()({
                        method: "POST",
                        url: "https://lucky-coin.ru/user/balance",
                        headers: { "Content-Type": "application/json" },
                        data: { id: t.data.first_name },
                      })
                    );
                  case 8:
                    return (
                      (O = t.data.last_name),
                      (e.next = 11),
                      E()({
                        method: "POST",
                        url: "https://lucky-coin.ru/user/balance",
                        headers: { "Content-Type": "application/json" },
                        data: { id: t.data.last_name },
                      })
                    );
                  case 11:
                    return (
                      (v = Number(t.data.id)),
                      (e.next = 14),
                      E()({
                        method: "POST",
                        url: "https://lucky-coin.ru/user/balance",
                        headers: { "Content-Type": "application/json" },
                        data: { id: t.data.id },
                      })
                    );
                  case 14:
                    return (
                      (e.next = 16),
                      E()({
                        method: "POST",
                        url: "https://lucky-coin.ru/user/balance",
                        headers: { "Content-Type": "application/json" },
                        data: { id: Number(v) },
                      })
                    );
                  case 16:
                    (n = e.sent),
                      (x = n.data.response.balance),
                      (j = n.data.response.bonusbalance);
                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      T();
      var C = function (e) {
        return o.a.createElement(
          d.c,
          { id: e.id },
          o.a.createElement(
            d.d,
            null,
            "\u041f\u0440\u043e\u0444\u0438\u043b\u044c"
          ),
          o.a.createElement("br", null),
          "ID (",
          v,
          ")",
          o.a.createElement("br", null),
          "\u0418\u043c\u044f (",
          k,
          ")",
          o.a.createElement("br", null),
          "\u0424\u0430\u043c\u0438\u043b\u0438\u044f (",
          O,
          ")",
          o.a.createElement("br", null),
          parseFloat(x).toFixed(0),
          o.a.createElement("br", null),
          parseFloat(j).toFixed(0),
          o.a.createElement(
            d.a,
            {
              size: "xl",
              level: "2",
              onClick: function () {
                return T();
              },
            },
            "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"
          )
        );
      };
      m.a.send("VKWebAppInit", {});
      var I = (function (e) {
        Object(s.a)(n, e);
        var t = Object(u.a)(n);
        function n(e) {
          var a;
          return (
            Object(c.a)(this, n),
            ((a = t.call(this, e)).state = { activePanel: "main" }),
            a
          );
        }
        return (
          Object(l.a)(n, [
            {
              key: "render",
              value: function () {
                return o.a.createElement(
                  d.b,
                  null,
                  o.a.createElement(
                    d.e,
                    { activePanel: "main" },
                    o.a.createElement(C, { id: "main" })
                  )
                );
              },
            },
          ]),
          n
        );
      })(o.a.Component);
      n(31).a.send("VKWebAppInit", {}),
        setInterval(function () {
          r.a.render(
            o.a.createElement(I, null),
            document.getElementById("root")
          );
        }, 100);
    },
  },
  [[108, 1, 2]],
]);
//# sourceMappingURL=main.e7c3f895.chunk.js.map
