"use strict";(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[5828],{4466:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(71354),i=a.n(n),r=a(76314),s=a.n(r)()(i());s.push([e.id,"\n.invalid-filename-dialog__input[data-v-3a479259] {\n\t/* Ensure the helper text can always be shown without jumping */\n\tmin-height: calc(var(--default-clickable-area) + 4 * var(--default-font-size));\n}\n","",{version:3,sources:["webpack://./node_modules/@nextcloud/upload/dist/assets/InvalidFilenameDialog-YDOzIzS6.css"],names:[],mappings:";AACA;CACC,+DAA+D;CAC/D,8EAA8E;AAC/E",sourcesContent:["\n.invalid-filename-dialog__input[data-v-3a479259] {\n\t/* Ensure the helper text can always be shown without jumping */\n\tmin-height: calc(var(--default-clickable-area) + 4 * var(--default-font-size));\n}\n"],sourceRoot:""}]);const l=s},35828:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(85072),i=a.n(n),r=a(97825),s=a.n(r),l=a(77659),o=a.n(l),c=a(55056),d=a.n(c),m=a(10540),u=a.n(m),h=a(41113),p=a.n(h),f=a(4466),v={};v.styleTagTransform=p(),v.setAttributes=d(),v.insert=o().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=u(),i()(f.A,v),f.A&&f.A.locals&&f.A.locals;var g=a(35810),w=a(85471),A=a(24351),E=a(94219),b=a(82182),N=a(80910);const y=(0,w.pM)({components:{NcDialog:E.A,NcNoteCard:N.A,NcTextField:b.A},props:{error:{type:g.di,required:!0},validateFilename:{type:Function,required:!0}},setup:()=>({t:A.t}),data:()=>({newName:"",validationError:""}),computed:{isValidName(){return""===this.validationError},isInvalidFileType(){return this.error.reason===g.nF.Extension&&null!==this.error.segment.match(/^\.\w/)},canRename(){return!this.isInvalidFileType},dialogButtons(){const e=[{label:(0,A.t)("Cancel"),type:"error",callback:()=>{this.$emit("close",{cancel:!0})}},{label:(0,A.t)("Skip"),callback:()=>{this.$emit("close",{skip:!0})}}];return this.canRename&&e.push({label:(0,A.t)("Rename"),type:"primary",disabled:!this.isValidName,callback:()=>{this.$emit("close",{rename:this.newName.trimEnd()})}}),e}},watch:{error:{handler(){this.validationError=this.getErrorText(this.error),this.newName=this.error.filename},immediate:!0},newName(){try{this.validateFilename(this.newName.trimEnd()),this.validationError=""}catch(e){this.validationError=this.getErrorText(e)}finally{const e=this.$refs.textfield?.$el.querySelector("input");e&&(e.setCustomValidity(this.validationError),e.reportValidity())}}},methods:{getErrorText(e){switch(e.reason){case g.nF.Character:return(0,A.t)('"{segment}" is not allowed inside a file or folder name.',{segment:e.segment});case g.nF.ReservedName:return(0,A.t)('"{segment}" is a forbidden file or folder name.',{segment:e.segment});case g.nF.Extension:return e.segment.match(/\.\w/)?(0,A.t)('"{segment}" is a forbidden file type.',{segment:e.segment}):(0,A.t)('Filenames must not end with "{segment}".',{segment:e.segment})}}}});var x=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("NcDialog",{attrs:{buttons:e.dialogButtons,name:e.t("Invalid filename")},on:{close:function(t){return e.$emit("close",{cancel:!0})}}},[t("NcNoteCard",{attrs:{severity:"error"}},[e._v(" "+e._s(e.getErrorText(e.error))+" "+e._s(e.t("You can either rename the file, skip this file or cancel the whole operation."))+" ")]),e.canRename?t("NcTextField",{ref:"textfield",staticClass:"invalid-filename-dialog__input",attrs:{error:!e.isValidName,"helper-text":e.validationError,label:e.t("New filename"),value:e.newName},on:{"update:value":function(t){e.newName=t}}}):e._e()],1)},C=[];const _=(0,A.n)(y,x,C,!1,null,"3a479259").exports}}]);
//# sourceMappingURL=5828-5828.js.map?v=a5b61ebfb42d1297e995