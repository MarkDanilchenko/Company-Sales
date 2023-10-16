/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var n={43:()=>{!function(){var n=function(){return localStorage.getItem("theme")},t=function(){return n()||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},e=function(n){"auto"===n&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme",n)};e(t());var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=document.querySelector("#bd-theme");if(e){var r=document.querySelector("#bd-theme-text"),i=document.querySelector(".theme-icon-active use"),o=document.querySelector('[data-bs-theme-value="'.concat(n,'"]')),a=o.querySelector("svg use").getAttribute("href");document.querySelectorAll("[data-bs-theme-value]").forEach((function(n){n.classList.remove("active"),n.setAttribute("aria-pressed","false")})),o.classList.add("active"),o.setAttribute("aria-pressed","true"),i.setAttribute("href",a);var c="".concat(r.textContent," (").concat(o.dataset.bsThemeValue,")");e.setAttribute("aria-label",c),t&&e.focus()}};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(){var r=n();"light"!==r&&"dark"!==r&&e(t())})),window.addEventListener("DOMContentLoaded",(function(){r(t()),document.querySelectorAll("[data-bs-theme-value]").forEach((function(n){n.addEventListener("click",(function(){var t=n.getAttribute("data-bs-theme-value");!function(n){localStorage.setItem("theme",n)}(t),e(t),r(t,!0)}))}))}))}()},498:()=>{try{var n=localStorage.getItem("colorMode_switcher");if(null===n)throw new Error("The color theme switched to light-mode as default");$("html").attr("data-bs-theme","".concat(n))}catch(n){$("html").attr("data-bs-theme","light"),localStorage.setItem("colorMode_switcher","light")}document.getElementById("colorMode_switcher")&&document.getElementById("colorMode_switcher").addEventListener("click",(function(){var n=$("html").attr("data-bs-theme");"dark"==n?($("html").attr("data-bs-theme","light"),localStorage.setItem("colorMode_switcher","light")):"light"==n&&($("html").attr("data-bs-theme","dark"),localStorage.setItem("colorMode_switcher","dark"))}))},402:(n,t,e)=>{"use strict";e.d(t,{Z:()=>c});var r=e(81),i=e.n(r),o=e(645),a=e.n(o)()(i());a.push([n.id,'@charset "UTF-8";\n.bd-placeholder-img {\n  font-size: 1.125rem;\n  text-anchor: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg {\n    font-size: 3.5rem;\n  }\n}\n.b-example-vr {\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 100vh;\n}\n\n.bi {\n  vertical-align: -0.125em;\n  fill: currentColor;\n}\n\n.nav-scroller {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller .nav {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.btn-bd-primary {\n  --bd-violet-bg: #712cf9;\n  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n  --bs-btn-font-weight: 600;\n  --bs-btn-color: var(--bs-white);\n  --bs-btn-bg: var(--bd-violet-bg);\n  --bs-btn-border-color: var(--bd-violet-bg);\n  --bs-btn-hover-color: var(--bs-white);\n  --bs-btn-hover-bg: #6528e0;\n  --bs-btn-hover-border-color: #6528e0;\n  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n  --bs-btn-active-color: var(--bs-btn-hover-color);\n  --bs-btn-active-bg: #5a23c8;\n  --bs-btn-active-border-color: #5a23c8;\n}\n\n.bd-mode-toggle {\n  z-index: 1500;\n}\n\n.form-control-dark {\n  border-color: var(--bs-gray);\n}\n\n.form-control-dark:focus {\n  border-color: #fff;\n  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);\n}\n\n.text-small {\n  font-size: 85%;\n}\n\n.dropdown-toggle:not(:focus) {\n  outline: 0;\n}\n\n.form-signin {\n  max-width: 330px;\n  padding: 1rem;\n}\n\n.form-signin .form-floating:focus-within {\n  z-index: 2;\n}\n\n#colorThemeSwitcher {\n  --trans-dur: 0.3s;\n  --trans-timing: cubic-bezier(0.76, 0.05, 0.24, 0.95);\n  --trans-timing-in: cubic-bezier(0.76, 0.05, 0.86, 0.06);\n  --trans-timing-out: cubic-bezier(0.05, 0.76, 0.06, 0.86);\n  font-size: calc(40px + 40 * (100vw - 320px) / 2240);\n}\n\n.switch {\n  position: relative;\n}\n\n.switch__icon,\n.switch__input {\n  display: block;\n}\n\n.switch__icon {\n  position: absolute;\n  top: 0.11em;\n  right: 0.12em;\n  width: 0.35em;\n  height: 0.35em;\n  transition: opacity calc(var(--trans-dur) / 2), transform calc(var(--trans-dur) / 2);\n}\n\n.switch__icon polyline {\n  transition: stroke-dashoffset calc(var(--trans-dur) / 2);\n}\n\n.switch__icon--light,\n.switch__icon--light polyline {\n  transition-delay: calc(var(--trans-dur) / 2);\n  transition-timing-function: var(--trans-timing-out);\n}\n\n.switch__icon--dark {\n  opacity: 0;\n  transform: translateX(0.75em) rotate(30deg) scale(1.75);\n  transition-timing-function: var(--trans-timing-in);\n}\n\n.switch__input {\n  background-color: rgb(13, 113, 212);\n  border-radius: 0.75em;\n  border: 1px solid rgb(191, 191, 191) !important;\n  outline: transparent;\n  position: relative;\n  width: 1.1em;\n  height: 0.6em;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  transition: background-color var(--trans-dur) var(--trans-timing), box-shadow 0.15s linear;\n}\n\n.switch__input:before,\n.switch__input:after {\n  content: "";\n  display: block;\n  position: absolute;\n}\n\n.switch__input:before {\n  background-color: rgb(220, 220, 220);\n  border-radius: inherit;\n  mask-image: linear-gradient(120deg, hsl(0, 0%, 0%) 20%, hsla(0, 0%, 0%, 0) 80%);\n  -webkit-mask-image: linear-gradient(120deg, hsl(0, 0%, 0%) 20%, hsla(0, 0%, 0%, 0) 80%);\n  inset: 0;\n  transition: background-color var(--trans-dur) var(--trans-timing);\n}\n\n.switch__input:after {\n  background-color: rgb(223, 14, 14);\n  border-radius: 50%;\n  top: 0.08em;\n  left: 0.05em;\n  width: 0.4em;\n  height: 0.4em;\n  transition: background-color var(--trans-dur) var(--trans-timing), transform var(--trans-dur) var(--trans-timing);\n  z-index: 1;\n}\n\n.switch__input:checked {\n  background-color: rgb(92, 92, 92);\n}\n\n.switch__input:checked:before {\n  background-color: #212529;\n}\n\n.switch__input:checked:after {\n  background-color: rgb(223, 14, 14);\n  transform: translateX(0.5em);\n}\n\n.switch__input:checked ~ .switch__icon--light,\n.switch__input:checked ~ .switch__icon--light polyline {\n  transition-delay: 0s;\n  transition-timing-function: var(--trans-timing-in);\n}\n\n.switch__input:checked ~ .switch__icon--light {\n  opacity: 0;\n  transform: translateX(-0.75em) rotate(-30deg) scale(1.75);\n}\n\n.switch__input:checked ~ .switch__icon--light polyline {\n  stroke-dashoffset: 1.5;\n}\n\n.switch__input:checked ~ .switch__icon--dark {\n  opacity: 1;\n  transform: translateX(-0.5em);\n  transition-delay: calc(var(--trans-dur) / 2);\n  transition-timing-function: var(--trans-timing-out);\n}\n\n#myHomework_labelRow * {\n  margin: 0;\n  padding: 0;\n}\n\n#myHomework_label {\n  font-family: "JetBrains Mono", monospace;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.bracketsBlock {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-height: 60px;\n}\n\n.string {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  animation: move 6s infinite;\n}\n\n.greeting {\n  top: 50px;\n  position: relative;\n  height: 25px;\n  font-size: 20px;\n}\n\n.Python {\n  color: rgb(223, 14, 14);\n}\n\n.JavaScript {\n  color: rgb(223, 14, 14);\n}\n\n.HTML {\n  color: rgb(223, 14, 14);\n}\n\n.SCSS {\n  color: rgb(223, 14, 14);\n}\n\n.Git {\n  color: rgb(223, 14, 14);\n}\n\n@keyframes move {\n  0% {\n    transform: translateY(0px);\n  }\n  10% {\n    transform: translateY(0px);\n  }\n  25% {\n    transform: translateY(-25px);\n  }\n  40% {\n    transform: translateY(-50px);\n  }\n  55% {\n    transform: translateY(-75px);\n  }\n  70% {\n    transform: translateY(-100px);\n  }\n  85% {\n    transform: translateY(-125px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n.string .greeting:nth-child(1) {\n  animation: appear_1 6s infinite;\n}\n\n@keyframes appear_1 {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  25% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  55% {\n    opacity: 0;\n  }\n  70% {\n    opacity: 0;\n  }\n  85% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.string .greeting:nth-child(2) {\n  animation: appear_2 6s infinite;\n}\n\n@keyframes appear_2 {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  40% {\n    opacity: 0;\n  }\n  55% {\n    opacity: 0;\n  }\n  70% {\n    opacity: 0;\n  }\n  85% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.string .greeting:nth-child(3) {\n  animation: appear_3 6s infinite;\n}\n\n@keyframes appear_3 {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n  55% {\n    opacity: 0;\n  }\n  70% {\n    opacity: 0;\n  }\n  85% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.string .greeting:nth-child(4) {\n  animation: appear_4 6s infinite;\n}\n\n@keyframes appear_4 {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  55% {\n    opacity: 1;\n  }\n  70% {\n    opacity: 0;\n  }\n  85% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.string .greeting:nth-child(5) {\n  animation: appear_5 6s infinite;\n}\n\n@keyframes appear_5 {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  55% {\n    opacity: 0;\n  }\n  70% {\n    opacity: 1;\n  }\n  85% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.nav-link {\n  color: rgb(191, 191, 191);\n}\n\n.nav-link:hover {\n  color: rgb(223, 14, 14);\n}\n\nbody {\n  border-radius: 15px;\n  margin: 20px;\n  box-shadow: 0 0 20px rgb(191, 191, 191);\n  min-height: 95vh;\n}\n\n#container_main {\n  min-height: 95vh;\n}\n\n#myHomework_labelRow + div {\n  position: relative;\n  top: 50px;\n}\n\nfooter {\n  position: sticky;\n  top: 95%;\n}\n\n@media screen and (min-width: 600px) {\n  .myHomework_labelBr {\n    display: none;\n  }\n  #myHomework_label {\n    font-family: "JetBrains Mono", monospace;\n    height: 150px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: unset;\n  }\n}\n.logoString_h3,\n.logoString_h5,\n#headerGreeting {\n  font-family: "JetBrains Mono", monospace;\n}\n\n#content_main {\n  width: 100%;\n  min-height: 75vh;\n}\n\n#ul_get_started {\n  list-style-type: none;\n  line-height: 40px;\n}\n#ul_get_started li::marker {\n  content: "➧";\n}\n#ul_get_started li {\n  padding-left: 15px;\n}\n\n#date_report2, #date_report4 {\n  max-width: 250px !important;\n}\n',""]);const c=a},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=e(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var m=i(h,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=e(o[a]);t[c].references--}for(var s=r(n,i),l=0;l<o.length;l++){var d=e(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,i&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{"use strict";e(43),e(498);var n=e(379),t=e.n(n),r=e(795),i=e.n(r),o=e(569),a=e.n(o),c=e(565),s=e.n(c),l=e(216),d=e.n(l),p=e(589),u=e.n(p),h=e(402),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals})()})();