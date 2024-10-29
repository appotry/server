(()=>{"use strict";var e,t,n,r={76907:(e,t,n)=>{var r=n(21777),o=n(85471),l=n(85168),i=n(32981),a=n(53334),c=n(53429),u=n(18740),s=n(2769),p=n(35559),d=n(1522);const m=(0,o.pM)({__name:"PublicPageMenuEntry",props:{clickOnly:{type:Boolean},id:null,label:null,icon:null,href:null,details:null},setup(e){const t=e;return(0,o.sV)((()=>{const e=document.getElementById(`${t.id}--link`);e.role="menuitem",t.clickOnly&&(e.onclick=e=>e.preventDefault())})),{__sfc:!0,props:t,NcListItem:d.A}}});var f=n(85072),b=n.n(f),v=n(97825),g=n.n(v),y=n(77659),A=n.n(y),h=n(55056),_=n.n(h),k=n(10540),C=n.n(k),P=n(41113),x=n.n(P),w=n(35253),M={};M.styleTagTransform=x(),M.setAttributes=_(),M.insert=A().bind(null,"head"),M.domAPI=g(),M.insertStyleElement=C(),b()(w.A,M),w.A&&w.A.locals&&w.A.locals;var E=n(14486);const S=(0,E.A)(m,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(n.NcListItem,{attrs:{"anchor-id":`${e.id}--link`,compact:"",details:e.details,href:e.href,name:e.label,role:"presentation"},on:{click:function(t){return e.$emit("click")}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("div",{class:["icon",e.icon,"public-page-menu-entry__icon"],attrs:{role:"presentation"}})]},proxy:!0}])})}),[],!1,null,"0d5b2ec6",null).exports,N=(0,o.pM)({__name:"PublicPageMenuCustomEntry",props:{id:null,html:null},setup(e){const t=(0,o.KR)(),n=(0,o.KR)("presentation");return(0,o.sV)((()=>{const e=t.value?.querySelector('[role="menuitem"]');if(e)return;const r=t.value?.querySelector("button")??t.value?.querySelector("a");r?r.role="menuitem":n.value="menuitem"})),{__sfc:!0,listItem:t,itemRole:n}}}),I=(0,E.A)(N,(function(){var e=this;return(0,e._self._c)("li",{ref:"listItem",attrs:{role:e._self._setupProxy.itemRole},domProps:{innerHTML:e._s(e.html)}})}),[],!1,null,null,null).exports;var T=n(63814),L=n(82680),O=n(65043),D=n(94219),R=n(84237),$=n(82182),j=n(35947);const B=null===(F=(0,r.HW)())?(0,j.YK)().setApp("core").build():(0,j.YK)().setApp("core").setUid(F.uid).build();var F;(0,j.YK)().setApp("unified-search").detectUser().build();const U=(0,o.pM)({__name:"PublicPageMenuExternalDialog",props:{label:null},setup(e){const t=(0,o.KR)(!1),n=(0,o.KR)(""),r=(0,o.KR)(),i=(0,o.KR)(!0);return(0,o.sV)((()=>(0,o.dY)((()=>r.value.focus())))),(0,o.wB)(n,(()=>{let e="";n.value.includes("@")?n.value.match(/@(.+\..{2,}|localhost)(:\d\d+)?$/)||(e=(0,a.t)("core","Invalid remote URL.")):e=(0,a.t)("core","The remote URL must include the user."),r.value.$el.querySelector("input").setCustomValidity(e),r.value.$el.querySelector("input").reportValidity()})),{__sfc:!0,loading:t,remoteUrl:n,input:r,open:i,createFederatedShare:async function(){t.value=!0;try{const e=(0,T.Jv)("/apps/federatedfilesharing/createFederatedShare"),{data:t}=await O.Ay.post(e,{shareWith:n.value,token:(0,L.G)()});t.remoteUrl.includes("://")?window.location.href=t.remoteUrl:window.location.href=`${window.location.protocol}//${t.remoteUrl}`}catch(e){B.error("Failed to create federated share",{error:e}),(0,l.Qg)((0,a.t)("files_sharing","Failed to add the public link to your Nextcloud"))}finally{t.value=!1}},t:a.t,NcButton:u.A,NcDialog:D.A,NcLoadingIcon:R.A,NcTextField:$.A}}}),q=(0,E.A)(U,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(n.NcDialog,{attrs:{"is-form":"",name:e.label,open:n.open},on:{"update:open":function(e){n.open=e},submit:n.createFederatedShare},scopedSlots:e._u([{key:"actions",fn:function(){return[t(n.NcButton,{attrs:{disabled:n.loading,type:"primary","native-type":"submit"},scopedSlots:e._u([n.loading?{key:"icon",fn:function(){return[t(n.NcLoadingIcon)]},proxy:!0}:null],null,!0)},[e._v("\n\t\t\t"+e._s(n.t("core","Create share"))+"\n\t\t")])]},proxy:!0}])},[t(n.NcTextField,{ref:"input",attrs:{label:n.t("core","Federated user"),placeholder:n.t("core","user@your-nextcloud.org"),required:"",value:n.remoteUrl},on:{"update:value":function(e){n.remoteUrl=e}}})],1)}),[],!1,null,null,null).exports,K=(0,o.pM)({__name:"PublicPageMenuExternalEntry",props:{id:null,label:null,icon:null,href:null},emits:["click"],setup(e,t){let{emit:n}=t;const r=e;return{__sfc:!0,props:r,emit:n,openDialog:function(){(0,l.Ss)(q,{label:r.label}),n("click")},PublicPageMenuEntry:S}}}),G=(0,E.A)(K,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(n.PublicPageMenuEntry,{attrs:{id:e.id,icon:e.icon,href:"#",label:e.label},on:{click:n.openDialog}})}),[],!1,null,null,null).exports,H=(0,o.pM)({__name:"PublicPageMenuLinkEntry",props:{id:null,label:null,icon:null,href:null},emits:["click"],setup(e,t){let{emit:n}=t;const r=e;async function o(){try{await window.navigator.clipboard.writeText(r.href),(0,l.Te)((0,a.t)("core","Direct link copied to clipboard"))}catch{window.prompt((0,a.t)("core","Please copy the link manually:"),r.href)}}return{__sfc:!0,props:r,emit:n,copyLink:o,onClick:function(){o(),n("click")},PublicPageMenuEntry:S}}}),V=(0,E.A)(H,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(n.PublicPageMenuEntry,{attrs:{id:e.id,"click-only":"",icon:e.icon,href:e.href,label:e.label},on:{click:n.onClick}})}),[],!1,null,null,null).exports,Y=(0,o.pM)({__name:"PublicPageMenu",setup(e){const t=(0,i.C)("core","public-page-menu"),n=(0,o.KR)(!1),r=(0,c.F)(),d=(0,o.EW)((()=>r.value?void 0:t[0])),m=(0,o.EW)((()=>r.value?t:t.slice(1)));return{__sfc:!0,menuEntries:t,showMenu:n,isMobile:r,primaryAction:d,secondaryActions:m,getComponent:function(e){if("html"in e)return I;switch(e.id){case"save":return G;case"directLink":return V;default:return S}},openDialogIfNeeded:function(){"save"===d.value?.id&&(0,l.Ss)(q,{label:d.value.label})},t:a.t,NcButton:u.A,NcHeaderMenu:s.A,IconMore:p.A}}});var W=n(64254),z={};z.styleTagTransform=x(),z.setAttributes=_(),z.insert=A().bind(null,"head"),z.domAPI=g(),z.insertStyleElement=C(),b()(W.A,z),W.A&&W.A.locals&&W.A.locals;const X=(0,E.A)(Y,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"public-page-menu__wrapper"},[n.primaryAction?t(n.NcButton,{staticClass:"public-page-menu__primary",attrs:{id:"public-page-menu--primary",href:n.primaryAction.href,type:"primary"},on:{click:n.openDialogIfNeeded},scopedSlots:e._u([n.primaryAction.icon?{key:"icon",fn:function(){return[t("div",{class:["icon",n.primaryAction.icon,"public-page-menu__primary-icon"]})]},proxy:!0}:null],null,!0)},[e._v("\n\t\t"+e._s(n.primaryAction.label)+"\n\t")]):e._e(),e._v(" "),n.secondaryActions.length>0?t(n.NcHeaderMenu,{attrs:{id:"public-page-menu","aria-label":n.t("core","More actions"),open:n.showMenu},on:{"update:open":function(e){n.showMenu=e}},scopedSlots:e._u([{key:"trigger",fn:function(){return[t(n.IconMore,{attrs:{size:20}})]},proxy:!0}],null,!1,262033445)},[e._v(" "),t("ul",{staticClass:"public-page-menu",attrs:{"aria-label":n.t("core","More actions"),role:"menu"}},e._l(n.secondaryActions,(function(r,o){return t(n.getComponent(r),e._b({key:o,tag:"component",on:{click:function(e){n.showMenu=!1}}},"component",r,!1))})),1)]):e._e()],1)}),[],!1,null,"432be84e",null).exports;n.nc=(0,r.aV)(),(new(o.Ay.extend(X))).$mount("#public-page-menu")},64254:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(71354),o=n.n(r),l=n(76314),i=n.n(l)()(o());i.push([e.id,".public-page-menu[data-v-432be84e]{box-sizing:border-box}.public-page-menu[data-v-432be84e]> *{box-sizing:border-box}.public-page-menu__wrapper[data-v-432be84e]{display:flex;flex-direction:row;gap:var(--default-grid-baseline)}.public-page-menu__primary[data-v-432be84e]{height:var(--default-clickable-area);margin-block:calc((var(--header-height) - var(--default-clickable-area))/2)}.public-page-menu__primary[data-v-432be84e]:focus-visible{border-color:var(--color-background-plain-text) !important}.public-page-menu__primary-icon[data-v-432be84e]{filter:var(--primary-invert-if-bright)}","",{version:3,sources:["webpack://./core/src/views/PublicPageMenu.vue"],names:[],mappings:"AACA,mCACC,qBAAA,CAEA,sCACC,qBAAA,CAGD,4CACC,YAAA,CACA,kBAAA,CACA,gCAAA,CAGD,4CACC,oCAAA,CACA,2EAAA,CAGA,0DACC,0DAAA,CAIF,iDACC,sCAAA",sourceRoot:""}]);const a=i},35253:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(71354),o=n.n(r),l=n(76314),i=n.n(l)()(o());i.push([e.id,"\n.public-page-menu-entry__icon[data-v-0d5b2ec6] {\n\tpadding-inline-start: var(--default-grid-baseline);\n}\n","",{version:3,sources:["webpack://./core/src/components/PublicPageMenu/PublicPageMenuEntry.vue"],names:[],mappings:";AA6CA;CACA,kDAAA;AACA",sourcesContent:['\x3c!--\n - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors\n - SPDX-License-Identifier: AGPL-3.0-or-later\n --\x3e\n<template>\n\t<NcListItem :anchor-id="`${id}--link`"\n\t\tcompact\n\t\t:details="details"\n\t\t:href="href"\n\t\t:name="label"\n\t\trole="presentation"\n\t\t@click="$emit(\'click\')">\n\t\t<template #icon>\n\t\t\t<div role="presentation" :class="[\'icon\', icon, \'public-page-menu-entry__icon\']" />\n\t\t</template>\n\t</NcListItem>\n</template>\n\n<script setup lang="ts">\nimport NcListItem from \'@nextcloud/vue/dist/Components/NcListItem.js\'\nimport { onMounted } from \'vue\'\n\nconst props = defineProps<{\n\t/** Only emit click event but do not open href */\n\tclickOnly?: boolean\n\t// menu entry props\n\tid: string\n\tlabel: string\n\ticon: string\n\thref: string\n\tdetails?: string\n}>()\n\nonMounted(() => {\n\tconst anchor = document.getElementById(`${props.id}--link`) as HTMLAnchorElement\n\t// Make the `<a>` a menuitem\n\tanchor.role = \'menuitem\'\n\t// Prevent native click handling if required\n\tif (props.clickOnly) {\n\t\tanchor.onclick = (event) => event.preventDefault()\n\t}\n})\n<\/script>\n\n<style scoped>\n.public-page-menu-entry__icon {\n\tpadding-inline-start: var(--default-grid-baseline);\n}\n</style>\n'],sourceRoot:""}]);const a=i}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,l),n.loaded=!0,n.exports}l.m=r,e=[],l.O=(t,n,r,o)=>{if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>e+"-"+e+".js?v="+{802:"387187865bf364bcd145",9291:"077955af818a227340aa"}[e],l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="nextcloud:",l.l=(e,r,o,i)=>{if(t[e])t[e].push(r);else{var a,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var p=u[s];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+o){a=p;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.setAttribute("data-webpack",n+o),a.src=e),t[e]=[r];var d=(n,r)=>{a.onerror=a.onload=null,clearTimeout(m);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),n)return n(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),l.j=1688,(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{l.b=document.baseURI||self.location.href;var e={1688:0};l.f.j=(t,n)=>{var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=o);var i=l.p+l.u(t),a=new Error;l.l(i,(n=>{if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,i=n[0],a=n[1],c=n[2],u=0;if(i.some((t=>0!==e[t]))){for(r in a)l.o(a,r)&&(l.m[r]=a[r]);if(c)var s=c(l)}for(t&&t(n);u<i.length;u++)o=i[u],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(s)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),l.nc=void 0;var i=l.O(void 0,[4208],(()=>l(76907)));i=l.O(i)})();
//# sourceMappingURL=core-public-page-menu.js.map?v=52c9d96fa354f7e1a18a