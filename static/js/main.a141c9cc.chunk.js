(this.webpackJsonpadcoins = this.webpackJsonpadcoins || []).push([
  [0],
  {
    108: function (e, t, a) {
      e.exports = a(145);
    },
    126: function (e, t, a) {},
    145: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(30),
        r = a.n(n),
        l = a(31),
        c = a(32),
        o = a(43),
        i = a(42),
        s = a(0),
        u = a.n(s),
        m = a(5),
        d = (a(124), a(13)),
        p = a.n(d),
        E = a(19),
        b = a.n(E),
        f = a(39),
        y = (a(126), a(40)),
        h = a.n(y),
        v = function (e) {
          return parseFloat(e)
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        g = "",
        x = 1,
        k = 0,
        w = 0,
        j = "",
        W = "",
        A = "",
        I = "",
        O = 0,
        _ = 0,
        P = 0,
        S = 0,
        B = 0,
        C = 0,
        K = 0,
        V = 0,
        N = 0;
      function T() {
        return z.apply(this, arguments);
      }
      function z() {
        return (z = Object(f.a)(
          b.a.mark(function e() {
            var t, a;
            return b.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 3), p.a.sendPromise("VKWebAppGetUserInfo")
                      );
                    case 3:
                      return (
                        (t = e.sent),
                        (j = t.first_name),
                        (W = t.last_name),
                        (g = t.photo_max_orig),
                        (x = Number(t.id)),
                        (e.next = 10),
                        h()({
                          method: "POST",
                          url: "https://lucky-coin.ru/user/balance",
                          headers: { "Content-Type": "application/json" },
                          data: { id: Number(x) },
                        })
                      );
                    case 10:
                      (a = e.sent),
                        p.a.sendPromise("VKWebAppShowNativeAds", {
                          ad_format: "reward",
                        }),
                        (k = a.data.response.balance),
                        (w = a.data.response.bonusbalance),
                        (A = a.data.response.clan),
                        (I = a.data.response.name),
                        (O = a.data.response.totalWin),
                        (_ = a.data.response.weekWin),
                        (P = a.data.response.todayWin),
                        (S = a.data.response.totalbuy),
                        (B = a.data.response.todaybuy),
                        (C = a.data.response.placetotal),
                        (K = a.data.response.placeweek),
                        (V = a.data.response.placetoday),
                        (N = a.data.response.placetodaybuy);
                    case 26:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )).apply(this, arguments);
      }
      T();
      var F = function (e) {
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
              u.a.createElement(m.a, { size: 96, src: g }),
              u.a.createElement(
                m.k,
                {
                  style: { marginBottom: 8, marginTop: 20 },
                  level: "2",
                  weight: "medium",
                },
                j,
                " ",
                W
              ),
              u.a.createElement(
                m.j,
                { style: { marginBottom: 24, color: "var(--text_secondary)" } },
                "\ud83c\udf10 \u041a\u043b\u0430\u043d: ",
                A
              ),
              u.a.createElement(
                m.b,
                { size: "m", mode: "secondary" },
                "\ud83d\udcac \u041d\u0438\u043a\u043d\u0435\u0439\u043c: ",
                I
              ),
              u.a.createElement(
                m.b,
                {
                  mode: "outline",
                  onClick: function () {
                    return T();
                  },
                },
                "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"
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
                m.i,
                null,
                "\u0411\u0430\u043b\u0430\u043d\u0441: ",
                v(k)
              ),
              u.a.createElement(
                m.i,
                null,
                "\u0411\u043e\u043d\u0443\u0441\u043d\u044b\u0439 \u0431\u0430\u043b\u0430\u043d\u0441: ",
                v(w)
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
                m.i,
                null,
                "\u2b50\u0412\u044b\u0438\u0433\u0440\u0430\u043d\u043e \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f: ",
                v(O)
              ),
              u.a.createElement(
                m.i,
                null,
                "\ud83d\udcc6 \u0412\u044b\u0438\u0433\u0440\u0430\u043d\u043e \u0437\u0430 \u043d\u0435\u0434\u0435\u043b\u044e: ",
                v(_)
              ),
              u.a.createElement(
                m.i,
                null,
                "\ud83d\udd5b \u0412\u044b\u0438\u0433\u0440\u0430\u043d\u043e \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ",
                v(P)
              ),
              u.a.createElement(
                m.i,
                null,
                "\u2b50 \u041a\u0443\u043f\u043b\u0435\u043d\u043e \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430 ",
                v(S),
                "\u20bd"
              ),
              u.a.createElement(
                m.i,
                null,
                "\ud83d\udd5b \u041a\u0443\u043f\u043b\u0435\u043d\u043e \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0430 ",
                v(B),
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
                m.i,
                null,
                "\u2b50 \u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0432\u044b\u0438\u0433\u0440\u044b\u0448\u0430\u043c: ",
                C,
                " \u043c\u0435\u0441\u0442\u043e"
              ),
              u.a.createElement(
                m.i,
                null,
                "\ud83d\udcc6 \u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0432\u044b\u0438\u0433\u0440\u044b\u0448\u0430\u043c \u043d\u0435\u0434\u0435\u043b\u0438: ",
                K,
                " \u043c\u0435\u0441\u0442\u043e"
              ),
              u.a.createElement(
                m.i,
                null,
                "\ud83d\udd5b \u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e \u0432\u044b\u0438\u0433\u0440\u044b\u0448\u0430\u043c \u0434\u043d\u044f: ",
                V,
                " \u043c\u0435\u0441\u0442\u043e"
              ),
              u.a.createElement(
                m.i,
                null,
                "\ud83d\udd5b \u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439 \u0434\u043d\u044f: ",
                N,
                " \u043c\u0435\u0441\u0442\u043e"
              )
            )
          )
        );
      };
      p.a.send("VKWebAppInit", {});
      var J = (function (e) {
        Object(o.a)(a, e);
        var t = Object(i.a)(a);
        function a(e) {
          var n;
          return (
            Object(l.a)(this, a),
            ((n = t.call(this, e)).state = { activePanel: "main" }),
            n
          );
        }
        return (
          Object(c.a)(a, [
            {
              key: "render",
              value: function () {
                return u.a.createElement(
                  m.d,
                  null,
                  u.a.createElement(
                    m.l,
                    { activePanel: "main" },
                    u.a.createElement(F, { id: "main" })
                  )
                );
              },
            },
          ]),
          a
        );
      })(u.a.Component);
      a(41).a.send("VKWebAppInit", {}),
        setInterval(function () {
          r.a.render(
            u.a.createElement(J, null),
            document.getElementById("root")
          );
        }, 100);
    },
  },
  [[108, 1, 2]],
]);
//# sourceMappingURL=main.a141c9cc.chunk.js.map
