(()=>{"use strict";var e,r,t,o={74211:(e,r,t)=>{var o=t(65043),a=t(85168),n=t(61338),s=t(32981),i=t(53334),l=t(63814),d=t(85471),c=t(94219),p=t(16044);const u=(0,d.pM)({__name:"RemoteShareDialog",props:{name:null,owner:null,remote:null,passwordRequired:{type:Boolean}},emits:["close"],setup(e,r){let{emit:t}=r;const o=e,a=(0,d.KR)(""),n=(0,d.EW)((()=>[{label:(0,i.t)("federatedfilesharing","Cancel"),callback:()=>t("close",!1)},{label:(0,i.t)("federatedfilesharing","Add remote share"),nativeType:o.passwordRequired?"submit":void 0,type:"primary",callback:()=>t("close",!0,a.value)}]));return{__sfc:!0,props:o,emit:t,password:a,buttons:n,t:i.t,NcDialog:c.A,NcPasswordField:p.A}}});var f=t(85072),h=t.n(f),m=t(97825),w=t.n(m),g=t(77659),v=t.n(g),b=t(55056),y=t.n(b),A=t(10540),O=t.n(A),_=t(41113),C=t.n(_),S=t(87020),k={};k.styleTagTransform=C(),k.setAttributes=y(),k.insert=v().bind(null,"head"),k.domAPI=w(),k.insertStyleElement=O(),h()(S.A,k),S.A&&S.A.locals&&S.A.locals;const P=(0,t(14486).A)(u,(function(){var e=this,r=e._self._c,t=e._self._setupProxy;return r(t.NcDialog,{attrs:{buttons:t.buttons,"is-form":e.passwordRequired,name:t.t("federatedfilesharing","Remote share")},on:{submit:function(e){return t.emit("close",!0,t.password)}}},[r("p",[e._v("\n\t\t"+e._s(t.t("federatedfilesharing","Do you want to add the remote share {name} from {owner}@{remote}?",{name:e.name,owner:e.owner,remote:e.remote}))+"\n\t")]),e._v(" "),e.passwordRequired?r(t.NcPasswordField,{staticClass:"remote-share-dialog__password",attrs:{label:t.t("federatedfilesharing","Remote share password"),value:t.password},on:{"update:value":function(e){t.password=e}}}):e._e()],1)}),[],!1,null,"0cc68f36",null).exports,R=(0,t(35947).YK)().setApp("federatedfilesharing").build();function x(){window?.OCP?.Files?.Router?.goToRoute?window.OCP.Files.Router.goToRoute(null,{...window.OCP.Files.Router.params,fileid:void 0},{...window.OCP.Files.Router.query,dir:"/",openfile:void 0}):window.location.reload()}window.OCA.Sharing=window.OCA.Sharing??{},window.OCA.Sharing.showAddExternalDialog=function(e,r,t){const o=e.ownerDisplayName||e.owner;(function(e,r,t){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const{promise:n,reject:s,resolve:i}=Promise.withResolvers();return(0,a.Ss)(P,{name:e,owner:r,remote:t,passwordRequired:o},((e,r)=>{o&&e?i(r):e?i(void 0):s()})),n})(e.name,o,e.remote.replace(/^https?:\/\//,"").replace(/\/$/,""),r).then(((r,o)=>t(r,{...e,password:o}))).catch((()=>t(!1,e)))},window.addEventListener("DOMContentLoaded",(()=>{!function(){const e=window.OC.Util.History.parseUrlQuery();if(e.remote&&e.token&&e.name){const r=(e,r)=>{!1!==e&&o.Ay.post((0,l.Jv)("apps/federatedfilesharing/askForFederatedShare"),{remote:r.remote,token:r.token,owner:r.owner,ownerDisplayName:r.ownerDisplayName||r.owner,name:r.name,password:r.password||""}).then((e=>{let{data:r}=e;Object.hasOwn(r,"legacyMount")?x():(0,a.cf)(r.message)})).catch((e=>{R.error("Error while processing incoming share",{error:e}),(0,o.F0)(e)&&e.response.data.message?(0,a.Qg)(e.response.data.message):(0,a.Qg)((0,i.t)("federatedfilesharing","Incoming share could not be processed"))}))};location.hash="",e.passwordProtected=1===parseInt(e.protected,10),window.OCA.Sharing.showAddExternalDialog(e,e.passwordProtected,r)}}(),!0!==(0,s.C)("federatedfilesharing","notificationsEnabled",!0)&&async function(){const{data:e}=await o.Ay.get((0,l.Jv)("/apps/files_sharing/api/externalShares"));for(let r=0;r<e.length;++r)window.OCA.Sharing.showAddExternalDialog(e[r],!1,(function(e,r){e?o.Ay.post((0,l.Jv)("/apps/files_sharing/api/externalShares"),{id:r.id}).then((()=>x())):o.Ay.delete((0,l.Jv)("/apps/files_sharing/api/externalShares/"+r.id))}))}(),(0,n.B1)("notifications:action:executed",(e=>{let{action:r,notification:t}=e;"files_sharing"===t.app&&"remote_share"===t.object_type&&"POST"===r.type&&x()}))}))},87020:(e,r,t)=>{t.d(r,{A:()=>i});var o=t(71354),a=t.n(o),n=t(76314),s=t.n(n)()(a());s.push([e.id,".remote-share-dialog__password[data-v-0cc68f36]{margin-block:1em .5em}","",{version:3,sources:["webpack://./apps/federatedfilesharing/src/components/RemoteShareDialog.vue"],names:[],mappings:"AAGC,gDACC,qBAAA",sourceRoot:""}]);const i=s}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}n.m=o,e=[],n.O=(r,t,o,a)=>{if(!t){var s=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],a=e[c][2];for(var i=!0,l=0;l<t.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((e=>n.O[e](t[l])))?t.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var d=o();void 0!==d&&(r=d)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,o,a]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+"-"+e+".js?v="+{802:"387187865bf364bcd145",9291:"077955af818a227340aa"}[e],n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="nextcloud:",n.l=(e,o,a,s)=>{if(r[e])r[e].push(o);else{var i,l;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var p=d[c];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==t+a){i=p;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=e),r[e]=[o];var u=(t,o)=>{i.onerror=i.onload=null,clearTimeout(f);var a=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(o))),t)return t(o)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=2299,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n.b=document.baseURI||self.location.href;var e={2299:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var s=n.p+n.u(r),i=new Error;n.l(s,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}}),"chunk-"+r,r)}},n.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,s=t[0],i=t[1],l=t[2],d=0;if(s.some((r=>0!==e[r]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var c=l(n)}for(r&&r(t);d<s.length;d++)a=s[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.nc=void 0;var s=n.O(void 0,[4208],(()=>n(74211)));s=n.O(s)})();
//# sourceMappingURL=federatedfilesharing-external.js.map?v=6ee3cd64f9f2dc965ba1