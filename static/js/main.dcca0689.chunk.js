(this.webpackJsonpadcoins = this.webpackJsonpadcoins || []).push([
  [0],
  {
    103: function (e, a, n) {
      e.exports = n(144);
    },
    125: function (e, a, n) {},
    144: function (e, a, n) {
      "use strict";
      n.r(a);
      var t = n(26),
        r = n.n(t),
        l = n(27),
        s = n(28),
        c = n(35),
        o = n(34),
        i = n(0),
        u = n.n(i),
        m = n(5),
        d = (n(123), n(13)),
        p = n.n(d),
        b = n(15),
        E = n.n(b),
        h = n(31),
        f = (n(125), n(32)),
        y = n.n(f),
        g = function (e) {
          return parseFloat(e)
            .toFixed(0)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
        },
        v =
          "https://sun9-54.userapi.com/impg/Dsl74TUYVjVszO6afOsx763or-YZfjoyS0v9LQ/2Nh7H9Qeadc.jpg?size=498x456&quality=96&sign=5992208e62e400632d4b4b8fb90abfb0&type=album",
        x = 1,
        j = 0,
        O = 0,
        k = "///",
        w = "///",
        I = "///",
        W = "///",
        V = 0,
        _ = 0,
        z = 0,
        A = 0,
        B = 0,
        P = 0,
        T = 0,
        C = 0,
        K = 0;
      function N() {
        return (N = Object(h.a)(
          E.a.mark(function e() {
            var a, n;
            return E.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), p.a.sendPromise("VKWebAppGetUserInfo");
                  case 2:
                    return (
                      (a = e.sent),
                      (k = a.first_name),
                      (w = a.last_name),
                      (v = a.photo_max_orig),
                      (x = Number(a.id)),
                      (e.next = 9),
                      y()({
                        method: "POST",
                        url: "https://lucky-coin.ru/user/balance",
                        headers: { "Content-Type": "application/json" },
                        data: { id: Number(x) },
                      })
                    );
                  case 9:
                    (n = e.sent),
                      (j = n.data.response.balance),
                      (O = n.data.response.bonusbalance),
                      (I = n.data.response.clan),
                      (W = n.data.response.name),
                      (V = n.data.response.totalWin),
                      (_ = n.data.response.weekWin),
                      (z = n.data.response.todayWin),
                      (A = n.data.response.totalbuy),
                      (B = n.data.response.todaybuy),
                      (P = n.data.response.placetotal),
                      (T = n.data.response.placeweek),
                      (C = n.data.response.placetoday),
                      (K = n.data.response.placetodaybuy);
                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      !(function () {
        N.apply(this, arguments);
      })();
      var S = function (e) {
        return u.a.createElement(
          m.f,
          { id: e.id },
          u.a.createElement(
            m.g,
            null,
            "\u041f\u0440\u043e\u0444\u0438\u043b\u044c"
          ),
          u.a.createElement(
            m.d,
            null,
            u.a.createElement(
              m.c,
              {
                style: {
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 32,
                },
              },
              u.a.createElement(m.a, { size: 96, src: v }),
              u.a.createElement(
                m.j,
                {
                  style: { marginBottom: 8, marginTop: 20 },
                  level: "2",
                  weight: "medium",
                },
                k,
                " ",
                w
              ),
              u.a.createElement(
                m.i,
                { style: { marginBottom: 24, color: "var(--text_secondary)" } },
                "\ud83c\udf10 \u041a\u043b\u0430\u043d: ",
                I
              ),
              u.a.createElement(
                m.b,
                { size: "m", mode: "secondary" },
                "\ud83d\udcac \u041d\u0438\u043a\u043d\u0435\u0439\u043c: ",
                W
              )
            ),
            u.a.createElement(
              m.d,
              { mode: "plain" },
              u.a.createElement(
                m.e,
                null,
                "\ud83d\udcb3 \u0411\u0430\u043b\u0430\u043d\u0441\u044b:"
              ),
              u.a.createElement(
                m.h,
                null,
                "\u0411\u0430\u043b\u0430\u043d\u0441: ",
                g(j)
              ),
              u.a.createElement(
                m.h,
                null,
                "\u0411\u043e\u043d\u0443\u0441\u043d\u044b\u0439 \u0431\u0430\u043b\u0430\u043d\u0441: ",
                g(O)
              )
            ),
            u.a.createElement(
              m.d,
              { mode: "plain" },
              u.a.createElement(
                m.e,
                null,
                "\ud83d\udcca \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430:"
              ),
              u.a.createElement(
                m.h,
                null,
                "\u2b50\u0412\u044b\u0438\u0433\u0440\u0430\u043d\u043e \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f: ",
                g(V)
              ),
              u.a.createElement(
                m.h,
                null,
                "\ud83d\udcc6 \u0412\u044b\u0438\u0433\u0440\u0430\u043d\u043e \u0437\u0430 \u043d\u0435\u0434\u0435\u043b\u044e: ",
                g(_)
              ),
              u.a.createElement(
                m.h,
                null,
                "\ud83d\udd5b \u0412\u044b\u0438\u0433\u0440\u0430\u043d\u043e \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ",
                g(z)
              ),
              u.a.createElement(
                m.h,
                null,
                "\u2b50 \u041a\u0443\u043f\u043b\u0435\u043d\u043e \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430 ",
                g(A),
                "\u20bd"
              ),
              u.a.createElement(
                m.h,
                null,
                "\ud83d\udd5b \u041a\u0443\u043f\u043b\u0435\u043d\u043e \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0430 ",
                g(B),
                "\u20bd"
              )
            ),
            u.a.createElement(
              m.d,
              { mode: "plain" },
              u.a.createElement(
                m.e,
                null,
                "\ud83c\udfc6 \u041c\u0435\u0441\u0442\u0430 \u0432 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0430\u0445:"
              ),
              u.a.createElement(
                m.h,
                null,
                "\u2b50 \u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0432\u044b\u0438\u0433\u0440\u044b\u0448\u0430\u043c: ",
                P,
                " \u043c\u0435\u0441\u0442\u043e"
              ),
              u.a.createElement(
                m.h,
                null,
                "\ud83d\udcc6 \u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0432\u044b\u0438\u0433\u0440\u044b\u0448\u0430\u043c \u043d\u0435\u0434\u0435\u043b\u0438: ",
                T,
                " \u043c\u0435\u0441\u0442\u043e"
              ),
              u.a.createElement(
                m.h,
                null,
                "\ud83d\udd5b \u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0432\u044b\u0438\u0433\u0440\u044b\u0448\u0430\u043c \u0434\u043d\u044f: ",
                C,
                " \u043c\u0435\u0441\u0442\u043e"
              ),
              u.a.createElement(
                m.h,
                null,
                "\ud83d\udd5b \u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439 \u0434\u043d\u044f: ",
                K,
                " \u043c\u0435\u0441\u0442\u043e"
              )
            )
          )
        );
      };
      p.a.send("VKWebAppInit", {});
      var D = (function (e) {
        Object(c.a)(n, e);
        var a = Object(o.a)(n);
        function n(e) {
          var t;
          return (
            Object(l.a)(this, n),
            ((t = a.call(this, e)).state = { activePanel: "main" }),
            t
          );
        }
        return (
          Object(s.a)(n, [
            {
              key: "render",
              value: function () {
                return u.a.createElement(
                  m.d,
                  null,
                  u.a.createElement(
                    m.k,
                    { activePanel: "main" },
                    u.a.createElement(S, { id: "main" })
                  )
                );
              },
            },
          ]),
          n
        );
      })(u.a.Component);
      n(33).a.send("VKWebAppInit", {}),
        setInterval(function () {
          r.a.render(
            u.a.createElement(D, null),
            document.getElementById("root")
          );
        }, 100);
    },
  },
  [[103, 1, 2]],
]);
//# sourceMappingURL=main.dcca0689.chunk.js.map
