!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body"),r=null;t.addEventListener("click",(function(){r=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled","disabled"),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.46f78151.js.map