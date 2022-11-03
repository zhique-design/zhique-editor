/*! For license information please see app.27545368.9db8f585.js.LICENSE.txt */
(self.webpackChunkzhique_editor=self.webpackChunkzhique_editor||[]).push([[276],{59216:(e,n,t)=>{var r=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var o in r={},t[i]=r,n)n.hasOwnProperty(o)&&(r[o]=e(n[o],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==n)for(var s in t)t.hasOwnProperty(s)&&(o[s]=t[s]);t.hasOwnProperty(l)||(o[l]=i[l])}var u=r[e];return r[e]=o,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=o)})),o},DFS:function e(n,t,r,i){i=i||{};var o=a.util.objId;for(var l in n)if(n.hasOwnProperty(l)){t.call(n,l,n[l],r||l);var s=n[l],u=a.util.type(s);"Object"!==u||i[o(s)]?"Array"!==u||i[o(s)]||(i[o(s)]=!0,e(s,t,l,i)):(i[o(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,o=0;i=r.elements[o++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),o=a.languages[i];a.util.setLanguage(n,i);var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&a.util.setLanguage(l,i);var s={element:n,language:i,grammar:o,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(l=s.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),l(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function o(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function l(e,n,t,r,s,f){for(var g in t)if(t.hasOwnProperty(g)&&t[g]){var h=t[g];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(f&&f.cause==g+","+d)return;var p=h[d],v=p.inside,m=!!p.lookbehind,b=!!p.greedy,y=p.alias;if(b&&!p.pattern.global){var w=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,w+"g")}for(var k=p.pattern||p,x=r.next,_=s;x!==n.tail&&!(f&&_>=f.reach);_+=x.value.length,x=x.next){var A=x.value;if(n.length>e.length)return;if(!(A instanceof i)){var T,P=1;if(b){if(!(T=o(k,_,e,m))||T.index>=e.length)break;var E=T.index,C=T.index+T[0].length,L=_;for(L+=x.value.length;E>=L;)L+=(x=x.next).value.length;if(_=L-=x.value.length,x.value instanceof i)continue;for(var M=x;M!==n.tail&&(L<C||"string"==typeof M.value);M=M.next)P++,L+=M.value.length;P--,A=e.slice(_,L),T.index-=_}else if(!(T=o(k,0,A,m)))continue;E=T.index;var S=T[0],O=A.slice(0,E),I=A.slice(E+S.length),j=_+A.length;f&&j>f.reach&&(f.reach=j);var F=x.prev;if(O&&(F=u(n,F,O),_+=O.length),c(n,F,P),x=u(n,F,new i(g,v?a.tokenize(S,v):S,y,S)),I&&u(n,x,I),P>1){var N={cause:g+","+d,reach:j};l(e,n,t,x.prev,_,N),f&&N.reach>f.reach&&(f.reach=N.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},o=n.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),a.hooks.run("wrap",i);var l="";for(var s in i.attributes)l+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,o=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),o&&e.close()}),!1),a):a;var f=a.util.currentScript();function g(){a.manual||a.highlightAll()}if(f&&(a.filename=f.src,f.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&f&&f.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=r),void 0!==t.g&&(t.g.Prism=r)},10043:(e,n,t)=>{"use strict";var r,a=t(82747),i=t(10438),o=t(48135);e.exports=function(e){var n=this.data();function t(e,t){n[e]?n[e].push(t):n[e]=[t]}!r&&(this.Parser&&this.Parser.prototype&&this.Parser.prototype.blockTokenizers||this.Compiler&&this.Compiler.prototype&&this.Compiler.prototype.visitors)&&(r=!0,console.warn("[remark-gfm] Warning: please upgrade to remark 13 to use this plugin")),t("micromarkExtensions",a(e)),t("fromMarkdownExtensions",i),t("toMarkdownExtensions",o(e))}},12861:(e,n,t)=>{"use strict";e.exports=function(e){var n=this;this.Parser=function(t){return r(t,Object.assign({},n.data("settings"),e,{extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]}))}};var r=t(39671)},96464:e=>{"use strict";var n,t="";e.exports=function(e,r){if("string"!=typeof e)throw new TypeError("expected a string");if(1===r)return e;if(2===r)return e+e;var a=e.length*r;if(n!==e||void 0===n)n=e,t="";else if(t.length>=a)return t.substr(0,a);for(;a>t.length&&r>1;)1&r&&(t+=e),r>>=1,e+=e;return t=(t+=e).substr(0,a)}},60053:(e,n)=>{"use strict";var t,r,a,i,o;if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,s=null,u=function(){if(null!==l)try{var e=n.unstable_now();l(!0,e),l=null}catch(e){throw setTimeout(u,0),e}},c=Date.now();n.unstable_now=function(){return Date.now()-c},t=function(e){null!==l?setTimeout(t,0,e):(l=e,setTimeout(u,0))},r=function(e,n){s=setTimeout(e,n)},a=function(){clearTimeout(s)},i=function(){return!1},o=n.unstable_forceFrameRate=function(){}}else{var f=window.performance,g=window.Date,h=window.setTimeout,d=window.clearTimeout;if("undefined"!=typeof console){var p=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof p&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof f&&"function"==typeof f.now)n.unstable_now=function(){return f.now()};else{var v=g.now();n.unstable_now=function(){return g.now()-v}}var m=!1,b=null,y=-1,w=5,k=0;i=function(){return n.unstable_now()>=k},o=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):w=0<e?Math.floor(1e3/e):5};var x=new MessageChannel,_=x.port2;x.port1.onmessage=function(){if(null!==b){var e=n.unstable_now();k=e+w;try{b(!0,e)?_.postMessage(null):(m=!1,b=null)}catch(e){throw _.postMessage(null),e}}else m=!1},t=function(e){b=e,m||(m=!0,_.postMessage(null))},r=function(e,t){y=h((function(){e(n.unstable_now())}),t)},a=function(){d(y),y=-1}}function A(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,a=e[r];if(!(void 0!==a&&0<E(a,n)))break e;e[r]=n,e[t]=a,t=r}}function T(e){return void 0===(e=e[0])?null:e}function P(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,a=e.length;r<a;){var i=2*(r+1)-1,o=e[i],l=i+1,s=e[l];if(void 0!==o&&0>E(o,t))void 0!==s&&0>E(s,o)?(e[r]=s,e[l]=t,r=l):(e[r]=o,e[i]=t,r=i);else{if(!(void 0!==s&&0>E(s,t)))break e;e[r]=s,e[l]=t,r=l}}}return n}return null}function E(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var C=[],L=[],M=1,S=null,O=3,I=!1,j=!1,F=!1;function N(e){for(var n=T(L);null!==n;){if(null===n.callback)P(L);else{if(!(n.startTime<=e))break;P(L),n.sortIndex=n.expirationTime,A(C,n)}n=T(L)}}function q(e){if(F=!1,N(e),!j)if(null!==T(C))j=!0,t(W);else{var n=T(L);null!==n&&r(q,n.startTime-e)}}function W(e,t){j=!1,F&&(F=!1,a()),I=!0;var o=O;try{for(N(t),S=T(C);null!==S&&(!(S.expirationTime>t)||e&&!i());){var l=S.callback;if(null!==l){S.callback=null,O=S.priorityLevel;var s=l(S.expirationTime<=t);t=n.unstable_now(),"function"==typeof s?S.callback=s:S===T(C)&&P(C),N(t)}else P(C);S=T(C)}if(null!==S)var u=!0;else{var c=T(L);null!==c&&r(q,c.startTime-t),u=!1}return u}finally{S=null,O=o,I=!1}}function z(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var D=o;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){j||I||(j=!0,t(W))},n.unstable_getCurrentPriorityLevel=function(){return O},n.unstable_getFirstCallbackNode=function(){return T(C)},n.unstable_next=function(e){switch(O){case 1:case 2:case 3:var n=3;break;default:n=O}var t=O;O=n;try{return e()}finally{O=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=D,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=O;O=e;try{return n()}finally{O=t}},n.unstable_scheduleCallback=function(e,i,o){var l=n.unstable_now();if("object"==typeof o&&null!==o){var s=o.delay;s="number"==typeof s&&0<s?l+s:l,o="number"==typeof o.timeout?o.timeout:z(e)}else o=z(e),s=l;return e={id:M++,callback:i,priorityLevel:e,startTime:s,expirationTime:o=s+o,sortIndex:-1},s>l?(e.sortIndex=s,A(L,e),null===T(C)&&e===T(L)&&(F?a():F=!0,r(q,s-l))):(e.sortIndex=o,A(C,e),j||I||(j=!0,t(W))),e},n.unstable_shouldYield=function(){var e=n.unstable_now();N(e);var t=T(C);return t!==S&&null!==S&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<S.expirationTime||i()},n.unstable_wrapCallback=function(e){var n=O;return function(){var t=O;O=n;try{return e.apply(this,arguments)}finally{O=t}}}},63840:(e,n,t)=>{"use strict";e.exports=t(60053)},36582:(e,n)=>{"use strict";n.Q=function(e){var n=String(e||"").trim();return""===n?[]:n.split(t)};var t=/[ \t\n\r\f]+/g}}]);