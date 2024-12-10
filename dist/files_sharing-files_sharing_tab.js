(()=>{"use strict";var e,t,r,i={69196:(e,t,r)=>{var i=r(85471),n=r(21777),o=r(53334);r.nc=(0,n.aV)(),window.OCA.Sharing||(window.OCA.Sharing={}),Object.assign(window.OCA.Sharing,{ShareSearch:new class{constructor(){var e,t,r;e=this,r=void 0,(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t="_state"))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._state={},this._state.results=[],console.debug("OCA.Sharing.ShareSearch initialized")}get state(){return this._state}addNewResult(e){return""!==e.displayName.trim()&&"function"==typeof e.handler?(this._state.results.push(e),!0):(console.error("Invalid search result provided",e),!1)}}}),Object.assign(window.OCA.Sharing,{ExternalLinkActions:new class{constructor(){var e,t,r;e=this,r=void 0,(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t="_state"))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._state={},this._state.actions=[],console.debug("OCA.Sharing.ExternalLinkActions initialized")}get state(){return this._state}registerAction(e){return OC.debug&&console.warn("OCA.Sharing.ExternalLinkActions is deprecated, use OCA.Sharing.ExternalShareAction instead"),"object"==typeof e&&e.icon&&e.name&&e.url?(this._state.actions.push(e),!0):(console.error("Invalid action provided",e),!1)}}}),Object.assign(window.OCA.Sharing,{ExternalShareActions:new class{constructor(){var e,t,r;e=this,r=void 0,(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t="_state"))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._state={},this._state.actions=[],console.debug("OCA.Sharing.ExternalShareActions initialized")}get state(){return this._state}registerAction(e){return"object"==typeof e&&"string"==typeof e.id&&"function"==typeof e.data&&Array.isArray(e.shareType)&&"object"==typeof e.handlers&&Object.values(e.handlers).every((e=>"function"==typeof e))?this._state.actions.findIndex((t=>t.id===e.id))>-1?(console.error(`An action with the same id ${e.id} already exists`,e),!1):(this._state.actions.push(e),!0):(console.error("Invalid action provided",e),!1)}}}),Object.assign(window.OCA.Sharing,{ShareTabSections:new class{constructor(){var e,t,r;e=this,r=void 0,(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t="_sections"))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,this._sections=[]}registerSection(e){this._sections.push(e)}getSections(){return this._sections}}}),i.Ay.prototype.t=o.t,i.Ay.prototype.n=o.n;let a=null;window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({id:"sharing",name:(0,o.t)("files_sharing","Sharing"),iconSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-share-variant" viewBox="0 0 24 24"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" /></svg>',async mount(e,t,n){const o=(await Promise.all([r.e(4208),r.e(4005)]).then(r.bind(r,49899))).default,s=i.Ay.extend(o);a&&a.$destroy(),a=new s({parent:n}),await a.update(t),a.$mount(e)},update(e){a.update(e)},destroy(){a&&(a.$destroy(),a=null)}}))}))}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=i,e=[],o.O=(t,r,i,n)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],n=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(s=!1,n<a&&(a=n));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,i,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+"-"+e+".js?v="+{857:"6797210df0f1d53f94c4",4005:"8ef80622ebb5fcde733e",5706:"3153330af47fc26a725a",6127:"da37b69cd9ee64a1836b"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="nextcloud:",o.l=(e,i,n,a)=>{if(t[e])t[e].push(i);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+n){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",r+n),s.src=e),t[e]=[i];var f=(r,i)=>{s.onerror=s.onload=null,clearTimeout(p);var n=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(i))),r)return r(i)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=4958,(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={4958:0};o.f.j=(t,r)=>{var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var n=new Promise(((r,n)=>i=e[t]=[r,n]));r.push(i[2]=n);var a=o.p+o.u(t),s=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,i[1](s)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,a=r[0],s=r[1],c=r[2],l=0;if(a.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(c)var u=c(o)}for(t&&t(r);l<a.length;l++)n=a[l],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.nc=void 0;var a=o.O(void 0,[4208],(()=>o(69196)));a=o.O(a)})();
//# sourceMappingURL=files_sharing-files_sharing_tab.js.map?v=eda52d88ae55f004f239