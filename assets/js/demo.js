document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelector(".nav-toggler"),
        t = document.querySelector(".site-navbar ul"),
        o = document.querySelectorAll(".site-navbar a");
        
    e.addEventListener("click", function () {
        e.classList.toggle("toggler-open"), t.classList.toggle("open");
    }),
        o.forEach(function (o) {
            o.addEventListener("click", function () {
                t.classList.contains("open") && e.click();
            });
        });
    const n = document.querySelector(".navigation-menu"),
        c = document.querySelector(".top-bar");
    function l() {
        const e = document.querySelector("#myOverlay");
        (e.style.display = "block" === e.style.display ? "none" : "block"), "block" === e.style.display ? document.querySelector("#myOverlay input").focus() : document.querySelector("#myOverlay input").blur();
    }
    window.addEventListener("scroll", function () {
        window.pageYOffset > 80
            ? (c && ((c.style.position = "absolute"), (c.style.width = "100%"), (c.style.top = "-35px")),
              (n.style.position = "fixed"),
              (n.style.top = "-80px"),
              (n.style.left = "0px"),
              (n.style.zIndex = "1000"),
              (n.style.width = "100%"),
              window.pageYOffset > 85 && (n.style.top = "0px"))
            : (c && ((c.style.position = "relative"), (c.style.top = "inherit")), (n.style.position = "relative"), (n.style.top = "inherit"));
    });
    const i = document.querySelector(".openBtn"),
        s = document.querySelector(".closebtn");
    i.addEventListener("click", l), s.addEventListener("click", l);
    const r = document.querySelector("#back-to-top");
    r.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }),
        window.addEventListener("scroll", function () {
            document.documentElement.scrollTop > 100 ? ((r.style.display = "block"), r.classList.add("active")) : ((r.style.display = "none"), r.classList.remove("active"));
        });
    const a = document.querySelector(".table-list"),
        d = document.querySelector("#icon-position"),
        u = document.querySelector(".sidebar-main");
    if (a) {
        d.addEventListener("click", function () {
            a.classList.toggle("open"), (u.style.marginBottom = "60px");
        });
        const p = document.querySelectorAll(".table-list a");
        if (p.length) {
            function y(e) {
                e.preventDefault();
                const t = this.getAttribute("href").substring(1),
                    o = document.getElementById(t);
                if (o) {
                    const e = o.offsetTop - 100,
                        t = e > 0 ? e : 0;
                    window.scrollTo({ top: t, behavior: "smooth" });
                }
            }
            p.forEach(function (e) {
                e.addEventListener("click", y);
            });
        }
        const m = new IntersectionObserver((e) => {
            e.forEach((e) => {
                const t = e.target.getAttribute("id");
                if (null !== t)
                    if (e.intersectionRatio > 0) {
                        const e = document.querySelector('.table-list li a[href="#' + t + '"]');
                        e && e.parentElement.classList.add("t-active");
                    } else {
                        const e = document.querySelector('.table-list li a[href="#' + t + '"]');
                        e && e.parentElement.classList.remove("t-active");
                    }
            });
        });
        document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(function (e) {
            m.observe(e);
        });
    }
});
