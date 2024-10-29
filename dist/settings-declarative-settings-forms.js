(()=>{"use strict";var e,a,i,r={17607:(e,a,i)=>{var r=i(32981),l=i(53334),o=i(85471),s=i(65043),d=i(63814),n=i(85168),c=i(17334),p=i.n(c),u=i(88837),f=i(63407),v=i(67607),m=i(32073);const A={name:"DeclarativeSection",components:{NcSettingsSection:u.A,NcInputField:f.A,NcSelect:v.A,NcCheckboxRadioSwitch:m.A},props:{form:{type:Object,required:!0}},data:()=>({formFieldsData:{}}),computed:{formApp(){return this.form.app||""},formFields(){return this.form.fields||[]}},beforeMount(){this.initFormFieldsData()},methods:{initFormFieldsData(){this.form.fields.forEach((e=>{"checkbox"===e.type&&this.$set(e,"value",+e.value),"multi-checkbox"===e.type&&(""===e.value?(this.$set(e,"value",{}),e.options.forEach((t=>{this.$set(e.value,t.value,!1)}))):(this.$set(e,"value",JSON.parse(e.value)),e.options.forEach((t=>{Object.prototype.hasOwnProperty.call(e.value,t.value)||this.$set(e.value,t.value,!1)})),Object.keys(e.value).forEach((t=>{e.options.find((e=>e.value===t))||delete e.value[t]})))),"multi-select"===e.type&&(""===e.value?this.$set(e,"value",[]):this.$set(e,"value",JSON.parse(e.value))),this.$set(this.formFieldsData,e.id,{value:e.value})}))},updateFormFieldDataValue(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.formFieldsData[t.id].value=e,a&&this.updateDeclarativeSettingsValue(t)},updateDeclarativeSettingsValue(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;try{return s.Ay.post((0,d.KT)("settings/api/declarative/value"),{app:this.formApp,formId:this.form.id.replace(this.formApp+"_",""),fieldId:e.id,value:null===a?this.formFieldsData[e.id].value:a})}catch(e){console.debug(e),(0,n.Qg)(t("settings","Failed to save setting"))}},onChangeDebounced:p()((function(e){this.updateDeclarativeSettingsValue(e)}),1e3),isTextFormField:e=>["text","password","email","tel","url","number"].includes(e.type)}};var h=i(85072),b=i.n(h),_=i(97825),g=i.n(_),C=i(77659),y=i.n(C),x=i(55056),k=i.n(x),D=i(10540),F=i.n(D),S=i(41113),w=i.n(S),O=i(78156),N={};N.styleTagTransform=w(),N.setAttributes=k(),N.insert=y().bind(null,"head"),N.domAPI=g(),N.insertStyleElement=F(),b()(O.A,N),O.A&&O.A.locals&&O.A.locals;const E=(0,i(14486).A)(A,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{staticClass:"declarative-settings-section",attrs:{name:e.t(e.formApp,e.form.title),description:e.t(e.formApp,e.form.description),"doc-url":e.form.doc_url||""}},e._l(e.formFields,(function(a){return t("div",{key:a.id,staticClass:"declarative-form-field",class:{"declarative-form-field-text":e.isTextFormField(a),"declarative-form-field-select":"select"===a.type,"declarative-form-field-multi-select":"multi-select"===a.type,"declarative-form-field-checkbox":"checkbox"===a.type,"declarative-form-field-multi_checkbox":"multi-checkbox"===a.type,"declarative-form-field-radio":"radio"===a.type},attrs:{"aria-label":e.t("settings","{app}'s declarative setting field: {name}",{app:e.formApp,name:e.t(e.formApp,a.title)})}},[e.isTextFormField(a)?[t("div",{staticClass:"input-wrapper"},[t("NcInputField",{attrs:{type:a.type,label:e.t(e.formApp,a.title),value:e.formFieldsData[a.id].value,placeholder:e.t(e.formApp,a.placeholder)},on:{"update:value":[function(t){return e.$set(e.formFieldsData[a.id],"value",t)},function(t){return e.onChangeDebounced(a)}],submit:function(t){return e.updateDeclarativeSettingsValue(a)}}})],1),e._v(" "),a.description?t("span",{staticClass:"hint"},[e._v(e._s(e.t(e.formApp,a.description)))]):e._e()]:e._e(),e._v(" "),"select"===a.type?[t("label",{attrs:{for:a.id+"_field"}},[e._v(e._s(e.t(e.formApp,a.title)))]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("NcSelect",{attrs:{id:a.id+"_field",options:a.options,placeholder:e.t(e.formApp,a.placeholder),"label-outside":!0,value:e.formFieldsData[a.id].value},on:{input:t=>e.updateFormFieldDataValue(t,a,!0)}})],1),e._v(" "),a.description?t("span",{staticClass:"hint"},[e._v(e._s(e.t(e.formApp,a.description)))]):e._e()]:e._e(),e._v(" "),"multi-select"===a.type?[t("label",{attrs:{for:a.id+"_field"}},[e._v(e._s(e.t(e.formApp,a.title)))]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("NcSelect",{attrs:{id:a.id+"_field",options:a.options,placeholder:e.t(e.formApp,a.placeholder),multiple:!0,"label-outside":!0,value:e.formFieldsData[a.id].value},on:{input:t=>{e.formFieldsData[a.id].value=t,e.updateDeclarativeSettingsValue(a,JSON.stringify(e.formFieldsData[a.id].value))}}})],1),e._v(" "),a.description?t("span",{staticClass:"hint"},[e._v(e._s(e.t(e.formApp,a.description)))]):e._e()]:e._e(),e._v(" "),"checkbox"===a.type?[a.label?t("label",{attrs:{for:a.id+"_field"}},[e._v(e._s(e.t(e.formApp,a.title)))]):e._e(),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{id:a.id+"_field",checked:Boolean(e.formFieldsData[a.id].value),type:"switch"},on:{"update:checked":t=>{a.value=t,e.updateFormFieldDataValue(+t,a,!0)}}},[e._v("\n\t\t\t\t"+e._s(e.t(e.formApp,a.label??a.title))+"\n\t\t\t")]),e._v(" "),a.description?t("span",{staticClass:"hint"},[e._v(e._s(e.t(e.formApp,a.description)))]):e._e()]:e._e(),e._v(" "),"multi-checkbox"===a.type?[t("label",{attrs:{for:a.id+"_field"}},[e._v(e._s(e.t(e.formApp,a.title)))]),e._v(" "),e._l(a.options,(function(i){return t("NcCheckboxRadioSwitch",{key:i.value,attrs:{id:a.id+"_field_"+i.value,checked:e.formFieldsData[a.id].value[i.value]},on:{"update:checked":t=>{e.formFieldsData[a.id].value[i.value]=t,e.updateDeclarativeSettingsValue(a,JSON.stringify(e.formFieldsData[a.id].value))}}},[e._v("\n\t\t\t\t"+e._s(e.t(e.formApp,i.name))+"\n\t\t\t")])})),e._v(" "),a.description?t("span",{staticClass:"hint"},[e._v(e._s(e.t(e.formApp,a.description)))]):e._e()]:e._e(),e._v(" "),"radio"===a.type?[t("label",{attrs:{for:a.id+"_field"}},[e._v(e._s(e.t(e.formApp,a.title)))]),e._v(" "),e._l(a.options,(function(i){return t("NcCheckboxRadioSwitch",{key:i.value,attrs:{value:i.value,type:"radio",checked:e.formFieldsData[a.id].value},on:{"update:checked":t=>e.updateFormFieldDataValue(t,a,!0)}},[e._v("\n\t\t\t\t"+e._s(e.t(e.formApp,i.name))+"\n\t\t\t")])})),e._v(" "),a.description?t("span",{staticClass:"hint"},[e._v(e._s(e.t(e.formApp,a.description)))]):e._e()]:e._e()],2)})),0)}),[],!1,null,"b98f34ce",null).exports,j=(0,i(35947).YK)().setApp("settings").detectUser().build(),T=(0,r.C)("settings","declarative-settings-forms",[]);document.addEventListener("DOMContentLoaded",(()=>{j.debug("Loaded declarative forms",{forms:T}),function(e){o.Ay.mixin({methods:{t:l.t,n:l.n}});const t=o.Ay.extend(E);e.map((e=>{const a=`#${e.app}_${e.id}`;return new t({el:a,propsData:{form:e}})}))}(T)}))},78156:(e,t,a)=>{a.d(t,{A:()=>s});var i=a(71354),r=a.n(i),l=a(76314),o=a.n(l)()(r());o.push([e.id,".declarative-form-field[data-v-b98f34ce]{padding:10px 0}.declarative-form-field .input-wrapper[data-v-b98f34ce]{width:100%;max-width:400px}.declarative-form-field[data-v-b98f34ce]:last-child{border-bottom:none}.declarative-form-field .hint[data-v-b98f34ce]{display:inline-block;color:var(--color-text-maxcontrast);margin-inline-start:8px;padding-block-start:5px}.declarative-form-field-radio[data-v-b98f34ce],.declarative-form-field-multi_checkbox[data-v-b98f34ce]{max-height:250px;overflow-y:auto}.declarative-form-field-multi-select[data-v-b98f34ce],.declarative-form-field-select[data-v-b98f34ce]{display:flex;flex-direction:column}.declarative-form-field-multi-select label[data-v-b98f34ce],.declarative-form-field-select label[data-v-b98f34ce]{margin-bottom:5px}","",{version:3,sources:["webpack://./apps/settings/src/components/DeclarativeSettings/DeclarativeSection.vue"],names:[],mappings:"AACA,yCACC,cAAA,CAEA,wDACC,UAAA,CACA,eAAA,CAGD,oDACC,kBAAA,CAGD,+CACC,oBAAA,CACA,mCAAA,CACA,uBAAA,CACA,uBAAA,CAGD,uGACC,gBAAA,CACA,eAAA,CAGD,sGACC,YAAA,CACA,qBAAA,CAEA,kHACC,iBAAA",sourceRoot:""}]);const s=o}},l={};function o(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={id:e,loaded:!1,exports:{}};return r[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=r,e=[],o.O=(t,a,i,r)=>{if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],r=e[c][2];for(var s=!0,d=0;d<a.length;d++)(!1&r||l>=r)&&Object.keys(o.O).every((e=>o.O[e](a[d])))?a.splice(d--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var n=i();void 0!==n&&(t=n)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,i,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[])),o.u=e=>e+"-"+e+".js?v="+{802:"c10e4e0c57e30824ef47",9291:"077955af818a227340aa"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},i="nextcloud:",o.l=(e,t,r,l)=>{if(a[e])a[e].push(t);else{var s,d;if(void 0!==r)for(var n=document.getElementsByTagName("script"),c=0;c<n.length;c++){var p=n[c];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==i+r){s=p;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",i+r),s.src=e),a[e]=[t];var u=(t,i)=>{s.onerror=s.onload=null,clearTimeout(f);var r=a[e];if(delete a[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(i))),t)return t(i)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),d&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j=6085,(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{o.b=document.baseURI||self.location.href;var e={6085:0};o.f.j=(t,a)=>{var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise(((a,r)=>i=e[t]=[a,r]));a.push(i[2]=r);var l=o.p+o.u(t),s=new Error;o.l(l,(a=>{if(o.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",s.name="ChunkLoadError",s.type=r,s.request=l,i[1](s)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var i,r,l=a[0],s=a[1],d=a[2],n=0;if(l.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(d)var c=d(o)}for(t&&t(a);n<l.length;n++)r=l[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},a=self.webpackChunknextcloud=self.webpackChunknextcloud||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),o.nc=void 0;var s=o.O(void 0,[4208],(()=>o(17607)));s=o.O(s)})();
//# sourceMappingURL=settings-declarative-settings-forms.js.map?v=f3f2b22d27ba8763bf15