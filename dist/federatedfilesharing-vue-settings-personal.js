(()=>{"use strict";var e,t,r,o={82123:(e,t,r)=>{var o=r(85471),n=r(21777),i=r(53334),a=r(85168),l=r(32981),s=r(63814),c=r(88837),d=r(18740),u=r(63407);const p={name:"WebIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var h=r(14486);const f=(0,h.A)(p,(function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon web-icon",attrs:{"aria-hidden":!e.title||null,"aria-label":e.title,role:"img"},on:{click:function(t){return e.$emit("click",t)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])}),[],!1,null,null,null).exports;var g=r(85338),C=r(35111);const b={name:"PersonalSettings",components:{NcButton:d.A,NcInputField:u.A,NcSettingsSection:c.A,IconCheck:g.A,IconClipboard:C.A,IconWeb:f},setup:()=>({t:i.t,cloudId:(0,l.C)("federatedfilesharing","cloudId"),reference:(0,l.C)("federatedfilesharing","reference"),urlFacebookIcon:(0,s.d0)("core","facebook"),urlMastodonIcon:(0,s.d0)("core","mastodon"),urlXIcon:(0,s.d0)("core","x")}),data:()=>({color:(0,l.C)("federatedfilesharing","color"),textColor:(0,l.C)("federatedfilesharing","textColor"),logoPath:(0,l.C)("federatedfilesharing","logoPath"),docUrlFederated:(0,l.C)("federatedfilesharing","docUrlFederated"),showHtml:!1,isCopied:!1}),computed:{messageWithURL(){return(0,i.t)("federatedfilesharing","Share with me through my #Nextcloud Federated Cloud ID, see {url}",{url:this.reference})},messageWithoutURL:()=>(0,i.t)("federatedfilesharing","Share with me through my #Nextcloud Federated Cloud ID"),shareMastodonUrl(){return`https://mastodon.social/?text=${encodeURIComponent(this.messageWithoutURL)}&url=${encodeURIComponent(this.reference)}`},shareXUrl(){return`https://x.com/intent/tweet?text=${encodeURIComponent(this.messageWithURL)}`},shareFacebookUrl(){return`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.reference)}`},logoPathAbsolute(){return window.location.protocol+"//"+window.location.host+this.logoPath},backgroundStyle(){return`padding:10px;background-color:${this.color};color:${this.textColor};border-radius:3px;padding-inline-start:4px;`},linkStyle(){return`background-image:url(${this.logoPathAbsolute});width:50px;height:30px;position:relative;top:8px;background-size:contain;display:inline-block;background-repeat:no-repeat; background-position: center center;`},htmlCode(){return`<a target="_blank" rel="noreferrer noopener" href="${this.reference}" style="${this.backgroundStyle}">\n\t<span style="${this.linkStyle}"></span>\n\t${(0,i.t)("federatedfilesharing","Share with me via Nextcloud")}\n</a>`},copyLinkTooltip(){return this.isCopied?(0,i.t)("federatedfilesharing","Cloud ID copied to the clipboard"):(0,i.t)("federatedfilesharing","Copy to clipboard")}},methods:{async copyCloudId(){try{await navigator.clipboard.writeText(this.cloudId),(0,a.Te)((0,i.t)("federatedfilesharing","Cloud ID copied to the clipboard"))}catch(e){window.prompt((0,i.t)("federatedfilesharing","Clipboard not available. Please copy the cloud ID manually."),this.reference)}this.isCopied=!0,(0,a.Te)((0,i.t)("federatedfilesharing","Copied!")),setTimeout((()=>{this.isCopied=!1}),2e3)},goTo(e){window.location.href=e}}};var m=r(85072),v=r.n(m),A=r(97825),y=r.n(A),_=r(77659),w=r.n(_),k=r(55056),x=r.n(k),I=r(10540),S=r.n(I),T=r(41113),M=r.n(T),N=r(56054),U={};U.styleTagTransform=M(),U.setAttributes=x(),U.insert=w().bind(null,"head"),U.domAPI=y(),U.insertStyleElement=S(),v()(N.A,U),N.A&&N.A.locals&&N.A.locals;const P=(0,h.A)(b,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("federatedfilesharing","Federated Cloud"),description:e.t("federatedfilesharing","You can share with anyone who uses a Nextcloud server or other Open Cloud Mesh (OCM) compatible servers and services! Just put their Federated Cloud ID in the share dialog. It looks like person@cloud.example.com"),"doc-url":e.docUrlFederated}},[t("NcInputField",{staticClass:"federated-cloud__cloud-id",attrs:{readonly:"",label:e.t("federatedfilesharing","Your Federated Cloud ID"),value:e.cloudId,success:e.isCopied,"show-trailing-button":"","trailing-button-label":e.copyLinkTooltip},on:{"trailing-button-click":e.copyCloudId},scopedSlots:e._u([{key:"trailing-button-icon",fn:function(){return[e.isCopied?t("IconCheck",{attrs:{size:20,"fill-color":"var(--color-success)"}}):t("IconClipboard",{attrs:{size:20}})]},proxy:!0}])}),e._v(" "),t("p",{staticClass:"social-button"},[e._v("\n\t\t"+e._s(e.t("federatedfilesharing","Share it so your friends can share files with you:"))),t("br"),e._v(" "),t("NcButton",{on:{click:function(t){return e.goTo(e.shareFacebookUrl)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("img",{staticClass:"social-button__icon social-button__icon--bright",attrs:{src:e.urlFacebookIcon}})]},proxy:!0}])},[e._v("\n\t\t\t"+e._s(e.t("federatedfilesharing","Facebook"))+"\n\t\t\t")]),e._v(" "),t("NcButton",{attrs:{"aria-label":e.t("federatedfilesharing","X (formerly Twitter)")},on:{click:function(t){return e.goTo(e.shareXUrl)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("img",{staticClass:"social-button__icon",attrs:{src:e.urlXIcon}})]},proxy:!0}])},[e._v("\n\t\t\t"+e._s(e.t("federatedfilesharing","formerly Twitter"))+"\n\t\t\t")]),e._v(" "),t("NcButton",{on:{click:function(t){return e.goTo(e.shareMastodonUrl)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("img",{staticClass:"social-button__icon",attrs:{src:e.urlMastodonIcon}})]},proxy:!0}])},[e._v("\n\t\t\t"+e._s(e.t("federatedfilesharing","Mastodon"))+"\n\t\t\t")]),e._v(" "),t("NcButton",{staticClass:"social-button__website-button",on:{click:function(t){e.showHtml=!e.showHtml}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconWeb",{attrs:{size:20}})]},proxy:!0}])},[e._v("\n\t\t\t"+e._s(e.t("federatedfilesharing","Add to your website"))+"\n\t\t")])],1),e._v(" "),e.showHtml?[t("p",{staticStyle:{margin:"10px 0"}},[t("a",{style:e.backgroundStyle,attrs:{target:"_blank",rel:"noreferrer noopener",href:e.reference}},[t("span",{style:e.linkStyle}),e._v("\n\t\t\t\t"+e._s(e.t("federatedfilesharing","Share with me via Nextcloud"))+"\n\t\t\t")])]),e._v(" "),t("p",[e._v("\n\t\t\t"+e._s(e.t("federatedfilesharing","HTML Code:"))+"\n\t\t\t"),t("br"),e._v(" "),t("pre",[e._v(e._s(e.htmlCode))])])]:e._e()],2)}),[],!1,null,"2c468406",null).exports;r.nc=(0,n.aV)(),o.Ay.mixin({methods:{t:i.Tl}}),(new(o.Ay.extend(P))).$mount("#vue-personal-federated")},56054:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(71354),n=r.n(o),i=r(76314),a=r.n(i)()(n());a.push([e.id,".social-button[data-v-2c468406]{margin-top:.5rem}.social-button button[data-v-2c468406]{display:inline-flex;margin-inline-start:.5rem;margin-top:1rem}.social-button__website-button[data-v-2c468406]{width:min(100%,400px) !important}.social-button__icon[data-v-2c468406]{height:20px;width:20px;filter:var(--background-invert-if-dark)}.social-button__icon--bright[data-v-2c468406]{filter:var(--background-invert-if-bright)}.federated-cloud__cloud-id[data-v-2c468406]{max-width:300px}pre[data-v-2c468406]{margin-top:0;white-space:pre-wrap}","",{version:3,sources:["webpack://./apps/federatedfilesharing/src/components/PersonalSettings.vue"],names:[],mappings:"AACA,gCACC,gBAAA,CAEA,uCACC,mBAAA,CACA,yBAAA,CACA,eAAA,CAGD,gDACC,gCAAA,CAGD,sCACC,WAAA,CACA,UAAA,CACA,uCAAA,CAEA,8CAEC,yCAAA,CAKH,4CACC,eAAA,CAGD,qBACC,YAAA,CACA,oBAAA",sourceRoot:""}]);const l=a}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=o,e=[],i.O=(t,r,o,n)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],n=e[d][2];for(var l=!0,s=0;s<r.length;s++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](r[s])))?r.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+"-"+e+".js?v="+{5706:"3153330af47fc26a725a",6127:"99ec308b98ff27921578"}[e],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="nextcloud:",i.l=(e,o,n,a)=>{if(t[e])t[e].push(o);else{var l,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+n){l=u;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",r+n),l.src=e),t[e]=[o];var p=(r,o)=>{l.onerror=l.onload=null,clearTimeout(h);var n=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),r)return r(o)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=7949,(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=document.baseURI||self.location.href;var e={7949:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=i.p+i.u(t),l=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],l=r[1],s=r[2],c=0;if(a.some((t=>0!==e[t]))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);if(s)var d=s(i)}for(t&&t(r);c<a.length;c++)n=a[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(d)},r=self.webpackChunknextcloud=self.webpackChunknextcloud||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.nc=void 0;var a=i.O(void 0,[4208],(()=>i(82123)));a=i.O(a)})();
//# sourceMappingURL=federatedfilesharing-vue-settings-personal.js.map?v=d5748e7acdb1920646f4