(()=>{"use strict";var t,e,a,r={96219:(t,e,a)=>{var r=a(21777),i=a(85471),A=a(85168),n=a(61338),o=a(32981),s=a(53334),l=a(63814),c=a(24764),C=a(73267),d=a(18195),p=a(41944),u=a(18740),_=a(22378),f=a(34196);const v={name:"AccountIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var h=a(14486);const m=(0,h.A)(v,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon account-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports,g={name:"MapMarkerIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},b=(0,h.A)(g,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon map-marker-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var y=a(93919);const x=(0,i.pM)({name:"Profile",components:{AccountIcon:m,MapMarkerIcon:b,NcActionLink:C.A,NcActions:c.A,NcAppContent:d.A,NcAvatar:p.A,NcButton:u.A,NcContent:_.A,NcEmptyContent:f.A,PencilIcon:y.A},data:()=>({...(0,o.C)("core","profileParameters",{userId:null,displayname:null,address:null,organisation:null,role:null,headline:null,biography:null,actions:[],isUserAvatarVisible:!1,pronouns:null}),status:(0,o.C)("core","status",{}),sections:window.OCA.Core.ProfileSections.getSections()}),computed:{isCurrentUser(){return(0,r.HW)()?.uid===this.userId},allActions(){return this.actions},primaryAction(){return this.allActions.length?this.allActions[0]:null},otherActions(){return console.warn(this.allActions),this.allActions.length>1?this.allActions.slice(1):[]},settingsUrl:()=>(0,l.Jv)("/settings/user"),emptyProfileMessage(){return this.isCurrentUser?(0,s.Tl)("core","You have not added any info yet"):(0,s.Tl)("core","{user} has not added any info yet",{user:this.displayname||this.userId})}},mounted(){document.title=`${this.displayname||this.userId} - ${document.title}`,(0,n.B1)("user_status:status.updated",this.handleStatusUpdate)},beforeDestroy(){(0,n.al)("user_status:status.updated",this.handleStatusUpdate)},methods:{t:s.Tl,handleStatusUpdate(t){this.isCurrentUser&&t.userId===this.userId&&(this.status=t)},openStatusModal(){const t=document.querySelector(".user-status-menu-item");this.isCurrentUser&&(t?t.click():(0,A.Qg)((0,s.Tl)("core","Error opening the user status modal, try hard refreshing the page")))}}});var k=a(85072),w=a.n(k),B=a(97825),S=a.n(B),E=a(77659),I=a.n(E),D=a(55056),O=a.n(D),P=a(10540),N=a.n(P),U=a(41113),M=a.n(U),j=a(52054),T={};T.styleTagTransform=M(),T.setAttributes=O(),T.insert=I().bind(null,"head"),T.domAPI=S(),T.insertStyleElement=N(),w()(j.A,T),j.A&&j.A.locals&&j.A.locals;const G=(0,h.A)(x,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("NcContent",{attrs:{"app-name":"profile"}},[e("NcAppContent",[e("div",{staticClass:"profile__header"},[e("div",{staticClass:"profile__header__container"},[e("div",{staticClass:"profile__header__container__placeholder"}),t._v(" "),e("div",{staticClass:"profile__header__container__displayname"},[e("h2",[t._v(t._s(t.displayname||t.userId))]),t._v(" "),t.pronouns?e("span",[t._v("·")]):t._e(),t._v(" "),t.pronouns?e("span",{staticClass:"profile__header__container__pronouns"},[t._v(t._s(t.pronouns))]):t._e(),t._v(" "),t.isCurrentUser?e("NcButton",{attrs:{type:"primary",href:t.settingsUrl},scopedSlots:t._u([{key:"icon",fn:function(){return[e("PencilIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,4260349822)},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("core","Edit Profile"))+"\n\t\t\t\t\t")]):t._e()],1),t._v(" "),t.status.icon||t.status.message?e("NcButton",{attrs:{disabled:!t.isCurrentUser,type:t.isCurrentUser?"tertiary":"tertiary-no-background"},on:{click:t.openStatusModal}},[t._v("\n\t\t\t\t\t"+t._s(t.status.icon)+" "+t._s(t.status.message)+"\n\t\t\t\t")]):t._e()],1)]),t._v(" "),e("div",{staticClass:"profile__wrapper"},[e("div",{staticClass:"profile__content"},[e("div",{staticClass:"profile__sidebar"},[e("NcAvatar",{staticClass:"avatar",class:{interactive:t.isCurrentUser},attrs:{user:t.userId,size:180,"show-user-status":!0,"show-user-status-compact":!1,"disable-menu":!0,"disable-tooltip":!0,"is-no-user":!t.isUserAvatarVisible},nativeOn:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.openStatusModal.apply(null,arguments)}}}),t._v(" "),e("div",{staticClass:"user-actions"},[t.primaryAction?e("NcButton",{staticClass:"user-actions__primary",attrs:{type:"primary",href:t.primaryAction.target,icon:t.primaryAction.icon,target:"phone"===t.primaryAction.id?"_self":"_blank"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"user-actions__primary__icon",attrs:{src:t.primaryAction.icon,alt:""}})]},proxy:!0}],null,!1,1780240256)},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.primaryAction.title)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),e("NcActions",{staticClass:"user-actions__other",attrs:{inline:4}},t._l(t.otherActions,(function(a){return e("NcActionLink",{key:a.id,attrs:{"close-after-click":!0,href:a.target,target:"phone"===a.id?"_self":"_blank"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"user-actions__other__icon",attrs:{src:a.icon,alt:""}})]},proxy:!0}],null,!0)},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(a.title)+"\n\t\t\t\t\t\t\t")])})),1)],1)],1),t._v(" "),e("div",{staticClass:"profile__blocks"},[t.organisation||t.role||t.address?e("div",{staticClass:"profile__blocks-details"},[t.organisation||t.role?e("div",{staticClass:"detail"},[e("p",[t._v(t._s(t.organisation)+" "),t.organisation&&t.role?e("span",[t._v("•")]):t._e(),t._v(" "+t._s(t.role))])]):t._e(),t._v(" "),t.address?e("div",{staticClass:"detail"},[e("p",[e("MapMarkerIcon",{staticClass:"map-icon",attrs:{size:16}}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.address)+"\n\t\t\t\t\t\t\t")],1)]):t._e()]):t._e(),t._v(" "),t.headline||t.biography||t.sections.length>0?[t.headline?e("h3",{staticClass:"profile__blocks-headline"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.headline)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t.biography?e("p",{staticClass:"profile__blocks-biography"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.biography)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t._l(t.sections,(function(a,r){return e("div",{key:r,ref:"section-"+r,refInFor:!0,staticClass:"profile__additionalContent"},[e(a(t.$refs["section-"+r],t.userId),{tag:"component",attrs:{"user-id":t.userId}})],1)}))]:e("NcEmptyContent",{staticClass:"profile__blocks-empty-info",attrs:{name:t.emptyProfileMessage,description:t.t("core","The headline and about sections will show up here")},scopedSlots:t._u([{key:"icon",fn:function(){return[e("AccountIcon",{attrs:{size:60}})]},proxy:!0}])})],2)])])])],1)}),[],!1,null,"b76e3ec8",null).exports;a.nc=(0,r.aV)(),window.OCA||(window.OCA={}),window.OCA.Core||(window.OCA.Core={}),Object.assign(window.OCA.Core,{ProfileSections:new class{constructor(){var t,e,a;t=this,a=void 0,(e=function(t){var e=function(t){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var a=e.call(t,"string");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:e+""}(e="_sections"))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,this._sections=[]}registerSection(t){this._sections.push(t)}getSections(){return this._sections}}});const z=i.Ay.extend(G);window.addEventListener("DOMContentLoaded",(()=>{(new z).$mount("#content")}))},52054:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(71354),i=a.n(r),A=a(76314),n=a.n(A)()(i());n.push([t.id,"[data-v-b76e3ec8] #app-content-vue{background-color:unset}.profile[data-v-b76e3ec8]{width:100%;overflow-y:auto}.profile__header[data-v-b76e3ec8]{display:flex;position:sticky;height:190px;top:-40px;background-color:var(--color-main-background-blur);backdrop-filter:var(--filter-background-blur);-webkit-backdrop-filter:var(--filter-background-blur)}.profile__header__container[data-v-b76e3ec8]{align-self:flex-end;width:100%;max-width:1024px;margin:8px auto;row-gap:8px;display:grid;grid-template-rows:max-content max-content;grid-template-columns:240px 1fr;justify-content:center}.profile__header__container__placeholder[data-v-b76e3ec8]{grid-row:1/3}.profile__header__container__displayname[data-v-b76e3ec8]{padding-inline:16px;width:640px;height:45px;margin-block:125px 0;display:flex;align-items:center;gap:18px}.profile__header__container__displayname h2[data-v-b76e3ec8]{font-size:30px;margin:0}.profile__header__container__displayname span[data-v-b76e3ec8]{font-size:20px}.profile__sidebar[data-v-b76e3ec8]{position:sticky;top:0;align-self:flex-start;padding-top:20px;min-width:220px;margin-block:-150px 0;margin-inline:0 20px}.profile__sidebar[data-v-b76e3ec8] .avatar.avatardiv{text-align:center;margin:auto;display:block;padding:8px}.profile__sidebar[data-v-b76e3ec8] .avatar.avatardiv.interactive .avatardiv__user-status{cursor:pointer}.profile__sidebar[data-v-b76e3ec8] .avatar.avatardiv .avatardiv__user-status{inset-inline-end:14px;bottom:14px;width:34px;height:34px;background-size:28px;border:none;background-color:var(--color-main-background);line-height:34px;font-size:20px}.profile__wrapper[data-v-b76e3ec8]{background-color:var(--color-main-background);min-height:100%}.profile__content[data-v-b76e3ec8]{max-width:1024px;margin:0 auto;display:flex;width:100%}.profile__blocks[data-v-b76e3ec8]{margin:18px 0 80px 0;display:grid;gap:16px 0;width:640px}.profile__blocks p[data-v-b76e3ec8],.profile__blocks h3[data-v-b76e3ec8]{cursor:text;overflow-wrap:anywhere}.profile__blocks-details[data-v-b76e3ec8]{display:flex;flex-direction:column;gap:2px 0}.profile__blocks-details .detail[data-v-b76e3ec8]{display:inline-block;color:var(--color-text-maxcontrast)}.profile__blocks-details .detail p .map-icon[data-v-b76e3ec8]{display:inline-block;vertical-align:middle}.profile__blocks-headline[data-v-b76e3ec8]{margin-inline:0;margin-block:10px 0;font-weight:bold;font-size:20px}.profile__blocks-biography[data-v-b76e3ec8]{white-space:pre-line}@media only screen and (max-width: 1024px){.profile__header[data-v-b76e3ec8]{height:250px;position:unset}.profile__header__container[data-v-b76e3ec8]{grid-template-columns:unset;margin-bottom:110px}.profile__header__container__displayname[data-v-b76e3ec8]{margin:80px 20px 0px 0px !important;width:unset;text-align:center;padding-inline:12px}.profile__header__container__edit-button[data-v-b76e3ec8]{width:fit-content;display:block;margin:60px auto}.profile__header__container__status-text[data-v-b76e3ec8]{margin:4px auto}.profile__content[data-v-b76e3ec8]{display:block}.profile__content .avatar[data-v-b76e3ec8]{margin-top:-110px !important}.profile__blocks[data-v-b76e3ec8]{width:unset;max-width:600px;margin:0 auto;padding:20px 50px 50px 50px}.profile__sidebar[data-v-b76e3ec8]{margin:unset;position:unset}}.user-actions[data-v-b76e3ec8]{display:flex;flex-direction:column;gap:8px 0;margin-top:20px}.user-actions__primary[data-v-b76e3ec8]{margin:0 auto}.user-actions__primary__icon[data-v-b76e3ec8]{filter:var(--primary-invert-if-dark)}.user-actions__other[data-v-b76e3ec8]{display:flex;justify-content:center;gap:0 4px}.user-actions__other__icon[data-v-b76e3ec8]{height:20px;width:20px;object-fit:contain;filter:var(--background-invert-if-dark);align-self:center;margin:12px}","",{version:3,sources:["webpack://./core/src/views/Profile.vue"],names:[],mappings:"AAIA,mCACC,sBAAA,CAGD,0BACC,UAAA,CACA,eAAA,CAEA,kCACC,YAAA,CACA,eAAA,CACA,YAAA,CACA,SAAA,CACA,kDAAA,CACA,6CAAA,CACA,qDAAA,CAEA,6CACC,mBAAA,CACA,UAAA,CACA,gBAvBiB,CAwBjB,eAAA,CACA,WAAA,CACA,YAAA,CACA,0CAAA,CACA,+BAAA,CACA,sBAAA,CAEA,0DACC,YAAA,CAGD,0DACC,mBAAA,CACA,WApCgB,CAqChB,WAAA,CACA,oBAAA,CACA,YAAA,CACA,kBAAA,CACA,QAAA,CAEA,6DACC,cAAA,CACA,QAAA,CAGD,+DACC,cAAA,CAMJ,mCACC,eAAA,CACA,KAAA,CACA,qBAAA,CACA,gBAAA,CACA,eAAA,CACA,qBAAA,CACA,oBAAA,CAGA,qDACC,iBAAA,CACA,WAAA,CACA,aAAA,CACA,WAAA,CAGC,yFAEC,cAAA,CAIF,6EACC,qBAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,oBAAA,CACA,WAAA,CAEA,6CAAA,CACA,gBAAA,CACA,cAAA,CAKH,mCACC,6CAAA,CACA,eAAA,CAGD,mCACC,gBApGkB,CAqGlB,aAAA,CACA,YAAA,CACA,UAAA,CAGD,kCACC,oBAAA,CACA,YAAA,CACA,UAAA,CACA,WA7GkB,CA+GlB,yEACC,WAAA,CACA,sBAAA,CAGD,0CACC,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,kDACC,oBAAA,CACA,mCAAA,CAEA,8DACC,oBAAA,CACA,qBAAA,CAKH,2CACC,eAAA,CACA,mBAAA,CACA,gBAAA,CACA,cAAA,CAGD,4CACC,oBAAA,CAKH,2CAEE,kCACC,YAAA,CACA,cAAA,CAEA,6CACC,2BAAA,CACA,mBAAA,CAEA,0DACC,mCAAA,CACA,WAAA,CACA,iBAAA,CACA,mBAAA,CAGD,0DACC,iBAAA,CACA,aAAA,CACA,gBAAA,CAGD,0DACC,eAAA,CAKH,mCACC,aAAA,CAEC,2CAEA,4BAAA,CAIF,kCACC,WAAA,CACA,eAAA,CACA,aAAA,CACA,2BAAA,CAGD,mCACC,YAAA,CACA,cAAA,CAAA,CAKH,+BACC,YAAA,CACA,qBAAA,CACA,SAAA,CACA,eAAA,CAEA,wCACC,aAAA,CAEA,8CACC,oCAAA,CAIF,sCACC,YAAA,CACA,sBAAA,CACA,SAAA,CAEA,4CACC,WAAA,CACA,UAAA,CACA,kBAAA,CACA,uCAAA,CACA,iBAAA,CACA,WAAA",sourceRoot:""}]);const o=n}},i={};function A(t){var e=i[t];if(void 0!==e)return e.exports;var a=i[t]={id:t,loaded:!1,exports:{}};return r[t].call(a.exports,a,a.exports,A),a.loaded=!0,a.exports}A.m=r,t=[],A.O=(e,a,r,i)=>{if(!a){var n=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],i=t[c][2];for(var o=!0,s=0;s<a.length;s++)(!1&i||n>=i)&&Object.keys(A.O).every((t=>A.O[t](a[s])))?a.splice(s--,1):(o=!1,i<n&&(n=i));if(o){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[a,r,i]},A.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return A.d(e,{a:e}),e},A.d=(t,e)=>{for(var a in e)A.o(e,a)&&!A.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},A.f={},A.e=t=>Promise.all(Object.keys(A.f).reduce(((e,a)=>(A.f[a](t,e),e)),[])),A.u=t=>t+"-"+t+".js?v="+{802:"c10e4e0c57e30824ef47",9291:"077955af818a227340aa"}[t],A.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),A.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},a="nextcloud:",A.l=(t,r,i,n)=>{if(e[t])e[t].push(r);else{var o,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var C=l[c];if(C.getAttribute("src")==t||C.getAttribute("data-webpack")==a+i){o=C;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,A.nc&&o.setAttribute("nonce",A.nc),o.setAttribute("data-webpack",a+i),o.src=t),e[t]=[r];var d=(a,r)=>{o.onerror=o.onload=null,clearTimeout(p);var i=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((t=>t(r))),a)return a(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),s&&document.head.appendChild(o)}},A.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},A.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),A.j=1390,(()=>{var t;A.g.importScripts&&(t=A.g.location+"");var e=A.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=a[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),A.p=t})(),(()=>{A.b=document.baseURI||self.location.href;var t={1390:0};A.f.j=(e,a)=>{var r=A.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var i=new Promise(((a,i)=>r=t[e]=[a,i]));a.push(r[2]=i);var n=A.p+A.u(e),o=new Error;A.l(n,(a=>{if(A.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",o.name="ChunkLoadError",o.type=i,o.request=n,r[1](o)}}),"chunk-"+e,e)}},A.O.j=e=>0===t[e];var e=(e,a)=>{var r,i,n=a[0],o=a[1],s=a[2],l=0;if(n.some((e=>0!==t[e]))){for(r in o)A.o(o,r)&&(A.m[r]=o[r]);if(s)var c=s(A)}for(e&&e(a);l<n.length;l++)i=n[l],A.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return A.O(c)},a=self.webpackChunknextcloud=self.webpackChunknextcloud||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})(),A.nc=void 0;var n=A.O(void 0,[4208],(()=>A(96219)));n=A.O(n)})();
//# sourceMappingURL=core-profile.js.map?v=ca4fd1169ec68ffa3814