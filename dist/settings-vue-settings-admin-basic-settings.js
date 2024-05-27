/*! For license information please see settings-vue-settings-admin-basic-settings.js.license?v=7165fda01522cfa5cf6a */
(()=>{"use strict";var e,n,o,r={9165:(e,t,n)=>{n.d(t,{NZC:()=>a,ZL5:()=>l,fEr:()=>i,kHm:()=>s,n7C:()=>o,vrq:()=>r,zY6:()=>c});var o="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z",r="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z",a="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z",i="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z",s="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",l="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",c="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"},30029:(e,n,o)=>{var r=o(85471),a=o(21777),i=o(38613),s=o(53334);const l=(0,o(53529).YK)().setApp("settings").detectUser().build();var c=o(85168),d=o(26287),A=o(63814),u=o(56760);o(51257);var g=o(9165);const E=Object.freeze({ADDRESS:"address",AVATAR:"avatar",BIOGRAPHY:"biography",DISPLAYNAME:"displayname",EMAIL_COLLECTION:"additional_mail",EMAIL:"email",HEADLINE:"headline",NOTIFICATION_EMAIL:"notify_email",FEDIVERSE:"fediverse",ORGANISATION:"organisation",PHONE:"phone",PROFILE_ENABLED:"profile_enabled",ROLE:"role",TWITTER:"twitter",WEBSITE:"website",BIRTHDATE:"birthdate"}),p=Object.freeze({ADDRESS:(0,s.Tl)("settings","Location"),AVATAR:(0,s.Tl)("settings","Profile picture"),BIOGRAPHY:(0,s.Tl)("settings","About"),DISPLAYNAME:(0,s.Tl)("settings","Full name"),EMAIL_COLLECTION:(0,s.Tl)("settings","Additional email"),EMAIL:(0,s.Tl)("settings","Email"),HEADLINE:(0,s.Tl)("settings","Headline"),ORGANISATION:(0,s.Tl)("settings","Organisation"),PHONE:(0,s.Tl)("settings","Phone number"),PROFILE_ENABLED:(0,s.Tl)("settings","Profile"),ROLE:(0,s.Tl)("settings","Role"),TWITTER:(0,s.Tl)("settings","X (formerly Twitter)"),FEDIVERSE:(0,s.Tl)("settings","Fediverse (e.g. Mastodon)"),WEBSITE:(0,s.Tl)("settings","Website"),BIRTHDATE:(0,s.Tl)("settings","Date of birth")}),b=(Object.freeze({[E.ADDRESS]:p.ADDRESS,[E.AVATAR]:p.AVATAR,[E.BIOGRAPHY]:p.BIOGRAPHY,[E.DISPLAYNAME]:p.DISPLAYNAME,[E.EMAIL_COLLECTION]:p.EMAIL_COLLECTION,[E.EMAIL]:p.EMAIL,[E.HEADLINE]:p.HEADLINE,[E.ORGANISATION]:p.ORGANISATION,[E.PHONE]:p.PHONE,[E.PROFILE_ENABLED]:p.PROFILE_ENABLED,[E.ROLE]:p.ROLE,[E.TWITTER]:p.TWITTER,[E.FEDIVERSE]:p.FEDIVERSE,[E.WEBSITE]:p.WEBSITE,[E.BIRTHDATE]:p.BIRTHDATE}),Object.freeze({PROFILE_VISIBILITY:(0,s.Tl)("settings","Profile visibility")}),Object.freeze({[p.ADDRESS]:E.ADDRESS,[p.AVATAR]:E.AVATAR,[p.BIOGRAPHY]:E.BIOGRAPHY,[p.DISPLAYNAME]:E.DISPLAYNAME,[p.EMAIL_COLLECTION]:E.EMAIL_COLLECTION,[p.EMAIL]:E.EMAIL,[p.HEADLINE]:E.HEADLINE,[p.ORGANISATION]:E.ORGANISATION,[p.PHONE]:E.PHONE,[p.PROFILE_ENABLED]:E.PROFILE_ENABLED,[p.ROLE]:E.ROLE,[p.TWITTER]:E.TWITTER,[p.FEDIVERSE]:E.FEDIVERSE,[p.WEBSITE]:E.WEBSITE,[p.BIRTHDATE]:E.BIRTHDATE}),Object.freeze({LANGUAGE:"language",LOCALE:"locale"}),Object.freeze({LANGUAGE:(0,s.Tl)("settings","Language"),LOCALE:(0,s.Tl)("settings","Locale")}),Object.freeze({PRIVATE:"v2-private",LOCAL:"v2-local",FEDERATED:"v2-federated",PUBLISHED:"v2-published"}));Object.freeze({[p.ADDRESS]:[b.LOCAL,b.PRIVATE],[p.AVATAR]:[b.LOCAL,b.PRIVATE],[p.BIOGRAPHY]:[b.LOCAL,b.PRIVATE],[p.DISPLAYNAME]:[b.LOCAL],[p.EMAIL_COLLECTION]:[b.LOCAL],[p.EMAIL]:[b.LOCAL],[p.HEADLINE]:[b.LOCAL,b.PRIVATE],[p.ORGANISATION]:[b.LOCAL,b.PRIVATE],[p.PHONE]:[b.LOCAL,b.PRIVATE],[p.PROFILE_ENABLED]:[b.LOCAL,b.PRIVATE],[p.ROLE]:[b.LOCAL,b.PRIVATE],[p.TWITTER]:[b.LOCAL,b.PRIVATE],[p.FEDIVERSE]:[b.LOCAL,b.PRIVATE],[p.WEBSITE]:[b.LOCAL,b.PRIVATE],[p.BIRTHDATE]:[b.LOCAL,b.PRIVATE]}),Object.freeze([p.BIOGRAPHY,p.HEADLINE,p.ORGANISATION,p.ROLE,p.BIRTHDATE]),Object.freeze({[b.PRIVATE]:{name:b.PRIVATE,displayName:(0,s.Tl)("settings","Private"),tooltip:(0,s.Tl)("settings","Only visible to people matched via phone number integration through Talk on mobile"),tooltipDisabled:(0,s.Tl)("settings","Not available as this property is required for core functionality including file sharing and calendar invitations"),icon:g.vrq},[b.LOCAL]:{name:b.LOCAL,displayName:(0,s.Tl)("settings","Local"),tooltip:(0,s.Tl)("settings","Only visible to people on this instance and guests"),icon:g.kHm},[b.FEDERATED]:{name:b.FEDERATED,displayName:(0,s.Tl)("settings","Federated"),tooltip:(0,s.Tl)("settings","Only synchronize to trusted servers"),tooltipDisabled:(0,s.Tl)("settings","Not available as federation has been disabled for your account, contact your system administration if you have any questions"),icon:g.n7C},[b.PUBLISHED]:{name:b.PUBLISHED,displayName:(0,s.Tl)("settings","Published"),tooltip:(0,s.Tl)("settings","Synchronize to trusted servers and the global and public address book"),tooltipDisabled:(0,s.Tl)("settings","Not available as publishing account specific data to the lookup server is not allowed, contact your system administration if you have any questions"),icon:g.zY6}}),b.LOCAL,Object.freeze({NOT_VERIFIED:0,VERIFICATION_IN_PROGRESS:1,VERIFIED:2});var C=o(32073);const v=(0,i.C)("settings","profileEnabledByDefault",!0),T={name:"ProfileSettings",components:{NcCheckboxRadioSwitch:C.A},data:()=>({initialProfileEnabledByDefault:v}),methods:{async onProfileDefaultChange(e){"boolean"==typeof e&&await this.updateProfileDefault(e)},async updateProfileDefault(e){try{var n;const t=await(async e=>{e=e?"1":"0";const t=(0,A.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"settings",key:"profile_enabled_by_default"});return await(0,u.C)(),(await d.A.post(t,{value:e})).data})(e);this.handleResponse({isEnabled:e,status:null===(n=t.ocs)||void 0===n||null===(n=n.meta)||void 0===n?void 0:n.status})}catch(e){this.handleResponse({errorMessage:t("settings","Unable to update profile default setting"),error:e})}},handleResponse(e){let{isEnabled:t,status:n,errorMessage:o,error:r}=e;"ok"===n?this.initialProfileEnabledByDefault=t:((0,c.Qg)(o),l.error(o,r))}}};var h=o(14486);const m=(0,h.A)(T,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"section",attrs:{id:"profile-settings"}},[t("h2",{staticClass:"inlineblock"},[e._v("\n\t\t"+e._s(e.t("settings","Profile"))+"\n\t")]),e._v(" "),t("p",{staticClass:"settings-hint"},[e._v("\n\t\t"+e._s(e.t("settings","Enable or disable profile by default for new accounts."))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.initialProfileEnabledByDefault},on:{"update:checked":[function(t){e.initialProfileEnabledByDefault=t},e.onProfileDefaultChange]}},[e._v("\n\t\t"+e._s(e.t("settings","Enable"))+"\n\t")])],1)}),[],!1,null,"7490d12a",null).exports;var L=o(88837),I=o(48934),f=o(51651),O=o(96763);const R=(0,i.C)("settings","lastCron"),y=(0,i.C)("settings","cronMaxAge",""),N=(0,i.C)("settings","backgroundJobsMode","cron"),P=(0,i.C)("settings","cliBasedCronPossible",!0),k=(0,i.C)("settings","cliBasedCronUser","www-data"),D=(0,i.C)("settings","backgroundJobsDocUrl"),S={name:"BackgroundJob",components:{NcCheckboxRadioSwitch:C.A,NcSettingsSection:L.A,NcNoteCard:I.A},data:()=>({lastCron:R,cronMaxAge:y,backgroundJobsMode:N,cliBasedCronPossible:P,cliBasedCronUser:k,backgroundJobsDocUrl:D,relativeTime:(0,f.A)(1e3*R).fromNow(),maxAgeRelativeTime:(0,f.A)(1e3*y).fromNow()}),computed:{cronLabel(){let e=t("settings","Use system cron service to call the cron.php file every 5 minutes.");return this.cliBasedCronPossible?e+="<br>"+t("settings",'The cron.php needs to be executed by the system account "{user}".',{user:this.cliBasedCronUser}):e+="<br>"+t("settings","The PHP POSIX extension is required. See {linkstart}PHP documentation{linkend} for more details.",{linkstart:'<a target="_blank" rel="noreferrer nofollow" class="external" href="https://www.php.net/manual/en/book.posix.php">',linkend:"</a>"},void 0,{escape:!1,sanitize:!1}),e},oldExecution(){return Date.now()/1e3-this.lastCron>600},longExecutionNotCron(){return Date.now()/1e3-this.cronMaxAge>43200&&"cron"!==this.backgroundJobsMode},longExecutionCron(){return Date.now()/1e3-this.cronMaxAge>86400&&"cron"===this.backgroundJobsMode}},methods:{async onBackgroundJobModeChanged(e){const n=(0,A.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:"backgroundjobs_mode"});await(0,u.C)();try{var o;const{data:t}=await d.A.post(n,{value:e});this.handleResponse({status:null===(o=t.ocs)||void 0===o||null===(o=o.meta)||void 0===o?void 0:o.status})}catch(e){this.handleResponse({errorMessage:t("settings","Unable to update background job mode"),error:e})}},async handleResponse(e){let{status:t,errorMessage:n,error:o}=e;"ok"===t?await this.deleteError():((0,c.Qg)(n),O.error(n,o))},async deleteError(){const e=(0,A.KT)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"core",key:"cronErrors"});await(0,u.C)();try{await d.A.delete(e)}catch(e){O.error(e)}}}},M=S;var _=o(85072),w=o.n(_),H=o(97825),x=o.n(H),B=o(77659),V=o.n(B),j=o(55056),F=o.n(j),J=o(10540),G=o.n(J),Y=o(41113),U=o.n(Y),W=o(46683),z={};z.styleTagTransform=U(),z.setAttributes=F(),z.insert=V().bind(null,"head"),z.domAPI=x(),z.insertStyleElement=G(),w()(W.A,z),W.A&&W.A.locals&&W.A.locals;const q=(0,h.A)(M,(function(){var e=this,t=e._self._c;return t("NcSettingsSection",{attrs:{name:e.t("settings","Background jobs"),description:e.t("settings","For the server to work properly, it's important to configure background jobs correctly. Cron is the recommended setting. Please see the documentation for more information."),"doc-url":e.backgroundJobsDocUrl}},[0!==e.lastCron?[e.oldExecution?t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Last job execution ran {time}. Something seems wrong.",{time:e.relativeTime}))+"\n\t\t")]):e.longExecutionCron?t("NcNoteCard",{attrs:{type:"warning"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Some jobs have not been executed since {maxAgeRelativeTime}. Please consider increasing the execution frequency.",{maxAgeRelativeTime:e.maxAgeRelativeTime}))+"\n\t\t")]):e.longExecutionNotCron?t("NcNoteCard",{attrs:{type:"warning"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Some jobs have not been executed since {maxAgeRelativeTime}. Please consider switching to system cron.",{maxAgeRelativeTime:e.maxAgeRelativeTime}))+"\n\t\t")]):t("NcNoteCard",{attrs:{type:"success"}},[e._v("\n\t\t\t"+e._s(e.t("settings","Last job ran {relativeTime}.",{relativeTime:e.relativeTime}))+"\n\t\t")])]:t("NcNoteCard",{attrs:{type:"error"}},[e._v("\n\t\t"+e._s(e.t("settings","Background job did not run yet!"))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"ajaxSwitch",attrs:{type:"radio",checked:e.backgroundJobsMode,name:"backgroundJobsMode",value:"ajax"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","AJAX"))+"\n\t")]),e._v(" "),t("em",[e._v(e._s(e.t("settings","Execute one task with each page loaded. Use case: Single account instance.")))]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"radio",checked:e.backgroundJobsMode,name:"backgroundJobsMode",value:"webcron"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","Webcron"))+"\n\t")]),e._v(" "),t("em",[e._v(e._s(e.t("settings","cron.php is registered at a webcron service to call cron.php every 5 minutes over HTTP. Use case: Very small instance (1–5 accounts depending on the usage).")))]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"radio",disabled:!e.cliBasedCronPossible,checked:e.backgroundJobsMode,value:"cron",name:"backgroundJobsMode"},on:{"update:checked":[function(t){e.backgroundJobsMode=t},e.onBackgroundJobModeChanged]}},[e._v("\n\t\t"+e._s(e.t("settings","Cron (Recommended)"))+"\n\t")]),e._v(" "),t("em",{domProps:{innerHTML:e._s(e.cronLabel)}})],2)}),[],!1,null,"0875cbc5",null).exports;o.nc=btoa((0,a.do)());const Z=(0,i.C)("settings","profileEnabledGlobally",!0);r.Ay.mixin({props:{logger:l},methods:{t:s.Tl}}),(new(r.Ay.extend(q))).$mount("#vue-admin-background-job"),Z&&(new(r.Ay.extend(m))).$mount("#vue-admin-profile-settings")},46683:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(71354),r=n.n(o),a=n(76314),i=n.n(a)()(r());i.push([e.id,".error[data-v-0875cbc5]{margin-top:8px;padding:5px;border-radius:var(--border-radius);color:var(--color-primary-element-text);background-color:var(--color-error);width:initial}.warning[data-v-0875cbc5]{margin-top:8px;padding:5px;border-radius:var(--border-radius);color:var(--color-primary-element-text);background-color:var(--color-warning);width:initial}.ajaxSwitch[data-v-0875cbc5]{margin-top:1rem}","",{version:3,sources:["webpack://./apps/settings/src/components/BasicSettings/BackgroundJob.vue"],names:[],mappings:"AACA,wBACC,cAAA,CACA,WAAA,CACA,kCAAA,CACA,uCAAA,CACA,mCAAA,CACA,aAAA,CAED,0BACC,cAAA,CACA,WAAA,CACA,kCAAA,CACA,uCAAA,CACA,qCAAA,CACA,aAAA,CAED,6BACC,eAAA",sourcesContent:["\n.error {\n\tmargin-top: 8px;\n\tpadding: 5px;\n\tborder-radius: var(--border-radius);\n\tcolor: var(--color-primary-element-text);\n\tbackground-color: var(--color-error);\n\twidth: initial;\n}\n.warning {\n\tmargin-top: 8px;\n\tpadding: 5px;\n\tborder-radius: var(--border-radius);\n\tcolor: var(--color-primary-element-text);\n\tbackground-color: var(--color-warning);\n\twidth: initial;\n}\n.ajaxSwitch {\n\tmargin-top: 1rem;\n}\n"],sourceRoot:""}]);const s=i}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=r,e=[],i.O=(t,n,o,r)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>e+"-"+e+".js?v="+{1110:"a5d6e6f59aa058840a1e",5455:"9cd46fa2e0b6ad206e92"}[e],i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="nextcloud:",i.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var A=c[d];if(A.getAttribute("src")==e||A.getAttribute("data-webpack")==o+r){s=A;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",o+r),s.src=e),n[e]=[t];var u=(t,o)=>{s.onerror=s.onload=null,clearTimeout(g);var r=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),t)return t(o)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=6282,(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{i.b=document.baseURI||self.location.href;var e={6282:0};i.f.j=(t,n)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=r);var a=i.p+i.u(t),s=new Error;i.l(a,(n=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,o[1](s)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,a=n[0],s=n[1],l=n[2],c=0;if(a.some((t=>0!==e[t]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var d=l(i)}for(t&&t(n);c<a.length;c++)r=a[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),i.nc=void 0;var s=i.O(void 0,[4208],(()=>i(30029)));s=i.O(s)})();
//# sourceMappingURL=settings-vue-settings-admin-basic-settings.js.map?v=7165fda01522cfa5cf6a