(this.webpackJsonpadcoins = this.webpackJsonpadcoins || []).push([
  [0],
  {
    107: function (e, n, t) {
      e.exports = t(142);
    },
    123: function (e, n, t) {},
    142: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t(26),
        r = t.n(a),
        c = t(27),
        l = t(28),
        s = t(33),
        i = t(32),
        o = t(0),
        u = t.n(o),
        p = t(12),
        m = (t(121), t(13)),
        d = t.n(m),
        b = t(15),
        E = t.n(b),
        f = t(30),
        h = (t(123), t(16)),
        v = t.n(h),
        x = 1,
        y = 1,
        g = 1;
      function j() {
        return (j = Object(f.a)(
          E.a.mark(function e() {
            var n, t;
            return E.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      v()({
                        method: "POST",
                        url: "https://lucky-coin.ru/user/balance",
                        headers: { "Content-Type": "application/json" },
                        data: { id: Number(612267237) },
                      })
                    );
                  case 2:
                    return (
                      (n = e.sent),
                      (y = n.data.response.balance),
                      (g = n.data.response.bonusbalance),
                      (e.next = 7),
                      d.a.sendPromise("VKWebAppGetUserInfo")
                    );
                  case 7:
                    return (
                      (e.next = 12),
                      v()({
                        method: "POST",
                        url: "https://lucky-coin.ru/user/balance",
                        headers: { "Content-Type": "application/json" },
                        data: { id: e.sent.data.id },
                      })
                    );
                  case 12:
                    n = e.sent;
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var k = function (e) {
        return u.a.createElement(
          p.d,
          { id: e.id },
          u.a.createElement(p.e, null, "\u0411\u0430\u043b\u0430\u043d\u0441"),
          u.a.createElement(
            p.c,
            { style: { height: "500px" } },
            u.a.createElement(p.b, { align: "center" }),
            u.a.createElement("br", null),
            u.a.createElement("br", null),
            u.a.createElement(
              "p",
              { align: "center", class: "t1" },
              "\u0412\u0430\u0448 \u0411\u0430\u043b\u0430\u043d\u0441 (",
              x,
              ")"
            ),
            u.a.createElement(
              "p",
              { align: "center", class: "t2" },
              parseFloat(y).toFixed(0)
            ),
            u.a.createElement(
              "p",
              { align: "center", class: "t3" },
              parseFloat(g).toFixed(0)
            ),
            u.a.createElement(
              "center",
              null,
              u.a.createElement(
                p.a,
                {
                  size: "xl",
                  level: "2",
                  onClick: function () {
                    return (function () {
                      return j.apply(this, arguments);
                    })();
                  },
                },
                "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"
              )
            ),
            u.a.createElement("br", null),
            u.a.createElement("br", null)
          )
        );
      };
      d.a.send("VKWebAppInit", {});
      var O = (function (e) {
        Object(s.a)(t, e);
        var n = Object(i.a)(t);
        function t(e) {
          var a;
          return (
            Object(c.a)(this, t),
            ((a = n.call(this, e)).state = { activePanel: "main" }),
            a
          );
        }
        return (
          Object(l.a)(t, [
            {
              key: "render",
              value: function () {
                return u.a.createElement(
                  p.c,
                  null,
                  u.a.createElement(
                    p.f,
                    { activePanel: "main" },
                    u.a.createElement(k, { id: "main" })
                  )
                );
              },
            },
          ]),
          t
        );
      })(u.a.Component);
      t(31).a.send("VKWebAppInit", {}),
        setInterval(function () {
          r.a.render(
            u.a.createElement(O, null),
            document.getElementById("root")
          );
        }, 100);
    },
  },
  [[107, 1, 2]],
]);
//# sourceMappingURL=main.765cc99c.chunk.js.map
