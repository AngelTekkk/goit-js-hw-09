!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),d=null;t.addEventListener("click",(function(){d=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled","")})),e.setAttribute("disabled","")}();
//# sourceMappingURL=01-color-switcher.9212f506.js.map
