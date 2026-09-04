(function () {
  var KEY = "bushi.theme";
  var LANG = "bushi.hq.lang";

  function applyTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    try { localStorage.setItem(KEY, mode); } catch (e) {}
    var btn = document.getElementById("theme-btn");
    if (btn) btn.textContent = mode === "light" ? "陰" : "陽";
  }

  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) {}
    if (stored === "light" || stored === "dark") applyTheme(stored);
    else applyTheme("light");
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "ja";
    document.querySelectorAll("[data-ja]").forEach(function (el) {
      el.classList.toggle("hidden", lang !== "ja");
    });
    document.querySelectorAll("[data-en]").forEach(function (el) {
      el.classList.toggle("hidden", lang !== "en");
    });
    try { localStorage.setItem(LANG, lang); } catch (e) {}
    var btn = document.getElementById("lang-btn");
    if (btn) btn.textContent = lang === "ja" ? "EN" : "JP";
  }

  function initLang() {
    var stored = null;
    try { stored = localStorage.getItem(LANG); } catch (e) {}
    applyLang(stored === "en" ? "en" : "ja");
  }

  initTheme();
  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    var t = document.getElementById("theme-btn");
    if (t) t.addEventListener("click", function () {
      var now = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(now);
    });
    var l = document.getElementById("lang-btn");
    if (l) l.addEventListener("click", function () {
      var now = document.documentElement.lang === "en" ? "ja" : "en";
      applyLang(now);
    });
    document.querySelectorAll('a[href^="http"]').forEach(function (a) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    });
  });
})();
