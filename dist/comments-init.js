(()=>{"use strict";var t,e={1107:(t,e,n)=>{var i=n(68251),r=(n(43627),n(53334)),o=n(380),s=n(65606),a=(t=>(t.DEFAULT="default",t.HIDDEN="hidden",t))(a||{});Error;var E={};!function(t){const e=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",n="["+e+"]["+e+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",i=new RegExp("^"+n+"$");t.isExist=function(t){return void 0!==t},t.isEmptyObject=function(t){return 0===Object.keys(t).length},t.merge=function(t,e,n){if(e){const i=Object.keys(e),r=i.length;for(let o=0;o<r;o++)t[i[o]]="strict"===n?[e[i[o]]]:e[i[o]]}},t.getValue=function(e){return t.isExist(e)?e:""},t.isName=function(t){return!(null==i.exec(t))},t.getAllMatches=function(t,e){const n=[];let i=e.exec(t);for(;i;){const r=[];r.startIndex=e.lastIndex-i[0].length;const o=i.length;for(let t=0;t<o;t++)r.push(i[t]);n.push(r),i=e.exec(t)}return n},t.nameRegexp=n}(E);new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");var u={};const c={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,n){return t}};u.buildOptions=function(t){return Object.assign({},c,t)},u.defaultOptions=c,!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");var l={};function d(t,e,n){let i;const r={};for(let o=0;o<t.length;o++){const s=t[o],a=p(s);let E="";if(E=void 0===n?a:n+"."+a,a===e.textNodeName)void 0===i?i=s[a]:i+=""+s[a];else{if(void 0===a)continue;if(s[a]){let t=d(s[a],e,E);const n=h(t,e);s[":@"]?N(t,s[":@"],E,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==r[a]&&r.hasOwnProperty(a)?(Array.isArray(r[a])||(r[a]=[r[a]]),r[a].push(t)):e.isArray(a,E,n)?r[a]=[t]:r[a]=t}}}return"string"==typeof i?i.length>0&&(r[e.textNodeName]=i):void 0!==i&&(r[e.textNodeName]=i),r}function p(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const n=e[t];if(":@"!==n)return n}}function N(t,e,n,i){if(e){const r=Object.keys(e),o=r.length;for(let s=0;s<o;s++){const o=r[s];i.isArray(o,n+"."+o,!0,!0)?t[o]=[e[o]]:t[o]=e[o]}}}function h(t,e){const{textNodeName:n}=e,i=Object.keys(t).length;return 0===i||!(1!==i||!t[n]&&"boolean"!=typeof t[n]&&0!==t[n])}l.prettify=function(t,e){return d(t,e)};const{buildOptions:f}=u,{prettify:I}=l;function O(t,e,n,i){let r="",o=!1;for(let s=0;s<t.length;s++){const a=t[s],E=R(a);if(void 0===E)continue;let u="";if(u=0===n.length?E:`${n}.${E}`,E===e.textNodeName){let t=a[E];g(u,e)||(t=e.tagValueProcessor(E,t),t=L(t,e)),o&&(r+=i),r+=t,o=!1;continue}if(E===e.cdataPropName){o&&(r+=i),r+=`<![CDATA[${a[E][0][e.textNodeName]}]]>`,o=!1;continue}if(E===e.commentPropName){r+=i+`\x3c!--${a[E][0][e.textNodeName]}--\x3e`,o=!0;continue}if("?"===E[0]){const t=A(a[":@"],e),n="?xml"===E?"":i;let s=a[E][0][e.textNodeName];s=0!==s.length?" "+s:"",r+=n+`<${E}${s}${t}?>`,o=!0;continue}let c=i;""!==c&&(c+=e.indentBy);const l=i+`<${E}${A(a[":@"],e)}`,d=O(a[E],e,u,c);-1!==e.unpairedTags.indexOf(E)?e.suppressUnpairedNode?r+=l+">":r+=l+"/>":d&&0!==d.length||!e.suppressEmptyNode?d&&d.endsWith(">")?r+=l+`>${d}${i}</${E}>`:(r+=l+">",d&&""!==i&&(d.includes("/>")||d.includes("</"))?r+=i+e.indentBy+d+i:r+=d,r+=`</${E}>`):r+=l+"/>",o=!0}return r}function R(t){const e=Object.keys(t);for(let n=0;n<e.length;n++){const i=e[n];if(t.hasOwnProperty(i)&&":@"!==i)return i}}function A(t,e){let n="";if(t&&!e.ignoreAttributes)for(let i in t){if(!t.hasOwnProperty(i))continue;let r=e.attributeValueProcessor(i,t[i]);r=L(r,e),!0===r&&e.suppressBooleanAttributes?n+=` ${i.substr(e.attributeNamePrefix.length)}`:n+=` ${i.substr(e.attributeNamePrefix.length)}="${r}"`}return n}function g(t,e){let n=(t=t.substr(0,t.length-e.textNodeName.length-1)).substr(t.lastIndexOf(".")+1);for(let i in e.stopNodes)if(e.stopNodes[i]===t||e.stopNodes[i]==="*."+n)return!0;return!1}function L(t,e){if(t&&t.length>0&&e.processEntities)for(let n=0;n<e.entities.length;n++){const i=e.entities[n];t=t.replace(i.regex,i.val)}return t}const m=function(t,e){let n="";return e.format&&e.indentBy.length>0&&(n="\n"),O(t,e,"",n)},b=function(t){return"function"==typeof t?t:Array.isArray(t)?e=>{for(const n of t){if("string"==typeof n&&e===n)return!0;if(n instanceof RegExp&&n.test(e))return!0}}:()=>!1},$={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function T(t){this.options=Object.assign({},$,t),!0===this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.ignoreAttributesFn=b(this.options.ignoreAttributes),this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=y),this.processTextOrObjNode=x,this.options.format?(this.indentate=v,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function x(t,e,n,i){const r=this.j2x(t,n+1,i.concat(e));return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,r.attrStr,n):this.buildObjectNode(r.val,e,r.attrStr,n)}function v(t){return this.options.indentBy.repeat(t)}function y(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}T.prototype.build=function(t){return this.options.preserveOrder?m(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0,[]).val)},T.prototype.j2x=function(t,e,n){let i="",r="";const o=n.join(".");for(let s in t)if(Object.prototype.hasOwnProperty.call(t,s))if(void 0===t[s])this.isAttribute(s)&&(r+="");else if(null===t[s])this.isAttribute(s)?r+="":"?"===s[0]?r+=this.indentate(e)+"<"+s+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+s+"/"+this.tagEndChar;else if(t[s]instanceof Date)r+=this.buildTextValNode(t[s],s,"",e);else if("object"!=typeof t[s]){const n=this.isAttribute(s);if(n&&!this.ignoreAttributesFn(n,o))i+=this.buildAttrPairStr(n,""+t[s]);else if(!n)if(s===this.options.textNodeName){let e=this.options.tagValueProcessor(s,""+t[s]);r+=this.replaceEntitiesValue(e)}else r+=this.buildTextValNode(t[s],s,"",e)}else if(Array.isArray(t[s])){const i=t[s].length;let o="",a="";for(let E=0;E<i;E++){const i=t[s][E];if(void 0===i);else if(null===i)"?"===s[0]?r+=this.indentate(e)+"<"+s+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+s+"/"+this.tagEndChar;else if("object"==typeof i)if(this.options.oneListGroup){const t=this.j2x(i,e+1,n.concat(s));o+=t.val,this.options.attributesGroupName&&i.hasOwnProperty(this.options.attributesGroupName)&&(a+=t.attrStr)}else o+=this.processTextOrObjNode(i,s,e,n);else if(this.options.oneListGroup){let t=this.options.tagValueProcessor(s,i);t=this.replaceEntitiesValue(t),o+=t}else o+=this.buildTextValNode(i,s,"",e)}this.options.oneListGroup&&(o=this.buildObjectNode(o,s,a,e)),r+=o}else if(this.options.attributesGroupName&&s===this.options.attributesGroupName){const e=Object.keys(t[s]),n=e.length;for(let r=0;r<n;r++)i+=this.buildAttrPairStr(e[r],""+t[s][e[r]])}else r+=this.processTextOrObjNode(t[s],s,e,n);return{attrStr:i,val:r}},T.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},T.prototype.buildObjectNode=function(t,e,n,i){if(""===t)return"?"===e[0]?this.indentate(i)+"<"+e+n+"?"+this.tagEndChar:this.indentate(i)+"<"+e+n+this.closeTag(e)+this.tagEndChar;{let r="</"+e+this.tagEndChar,o="";return"?"===e[0]&&(o="?",r=""),!n&&""!==n||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===o.length?this.indentate(i)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(i)+"<"+e+n+o+this.tagEndChar+t+this.indentate(i)+r:this.indentate(i)+"<"+e+n+o+">"+t+r}},T.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},T.prototype.buildTextValNode=function(t,e,n,i){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(i)+`<![CDATA[${t}]]>`+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(i)+`\x3c!--${t}--\x3e`+this.newLine;if("?"===e[0])return this.indentate(i)+"<"+e+n+"?"+this.tagEndChar;{let r=this.options.tagValueProcessor(e,t);return r=this.replaceEntitiesValue(r),""===r?this.indentate(i)+"<"+e+n+this.closeTag(e)+this.tagEndChar:this.indentate(i)+"<"+e+n+">"+r+"</"+e+this.tagEndChar}},T.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const n=this.options.entities[e];t=t.replace(n.regex,n.val)}return t};var P="object"==typeof s&&s.env&&s.env.NODE_DEBUG&&/\bsemver\b/i.test(s.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{},S={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},w={exports:{}};!function(t,e){const{MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:i,MAX_LENGTH:r}=S,o=P,s=(e=t.exports={}).re=[],a=e.safeRe=[],E=e.src=[],u=e.t={};let c=0;const l="[a-zA-Z0-9-]",d=[["\\s",1],["\\d",r],[l,i]],p=(t,e,n)=>{const i=(t=>{for(const[e,n]of d)t=t.split(`${e}*`).join(`${e}{0,${n}}`).split(`${e}+`).join(`${e}{1,${n}}`);return t})(e),r=c++;o(t,r,e),u[t]=r,E[r]=e,s[r]=new RegExp(e,n?"g":void 0),a[r]=new RegExp(i,n?"g":void 0)};p("NUMERICIDENTIFIER","0|[1-9]\\d*"),p("NUMERICIDENTIFIERLOOSE","\\d+"),p("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${l}*`),p("MAINVERSION",`(${E[u.NUMERICIDENTIFIER]})\\.(${E[u.NUMERICIDENTIFIER]})\\.(${E[u.NUMERICIDENTIFIER]})`),p("MAINVERSIONLOOSE",`(${E[u.NUMERICIDENTIFIERLOOSE]})\\.(${E[u.NUMERICIDENTIFIERLOOSE]})\\.(${E[u.NUMERICIDENTIFIERLOOSE]})`),p("PRERELEASEIDENTIFIER",`(?:${E[u.NUMERICIDENTIFIER]}|${E[u.NONNUMERICIDENTIFIER]})`),p("PRERELEASEIDENTIFIERLOOSE",`(?:${E[u.NUMERICIDENTIFIERLOOSE]}|${E[u.NONNUMERICIDENTIFIER]})`),p("PRERELEASE",`(?:-(${E[u.PRERELEASEIDENTIFIER]}(?:\\.${E[u.PRERELEASEIDENTIFIER]})*))`),p("PRERELEASELOOSE",`(?:-?(${E[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${E[u.PRERELEASEIDENTIFIERLOOSE]})*))`),p("BUILDIDENTIFIER",`${l}+`),p("BUILD",`(?:\\+(${E[u.BUILDIDENTIFIER]}(?:\\.${E[u.BUILDIDENTIFIER]})*))`),p("FULLPLAIN",`v?${E[u.MAINVERSION]}${E[u.PRERELEASE]}?${E[u.BUILD]}?`),p("FULL",`^${E[u.FULLPLAIN]}$`),p("LOOSEPLAIN",`[v=\\s]*${E[u.MAINVERSIONLOOSE]}${E[u.PRERELEASELOOSE]}?${E[u.BUILD]}?`),p("LOOSE",`^${E[u.LOOSEPLAIN]}$`),p("GTLT","((?:<|>)?=?)"),p("XRANGEIDENTIFIERLOOSE",`${E[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),p("XRANGEIDENTIFIER",`${E[u.NUMERICIDENTIFIER]}|x|X|\\*`),p("XRANGEPLAIN",`[v=\\s]*(${E[u.XRANGEIDENTIFIER]})(?:\\.(${E[u.XRANGEIDENTIFIER]})(?:\\.(${E[u.XRANGEIDENTIFIER]})(?:${E[u.PRERELEASE]})?${E[u.BUILD]}?)?)?`),p("XRANGEPLAINLOOSE",`[v=\\s]*(${E[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${E[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${E[u.XRANGEIDENTIFIERLOOSE]})(?:${E[u.PRERELEASELOOSE]})?${E[u.BUILD]}?)?)?`),p("XRANGE",`^${E[u.GTLT]}\\s*${E[u.XRANGEPLAIN]}$`),p("XRANGELOOSE",`^${E[u.GTLT]}\\s*${E[u.XRANGEPLAINLOOSE]}$`),p("COERCEPLAIN",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`),p("COERCE",`${E[u.COERCEPLAIN]}(?:$|[^\\d])`),p("COERCEFULL",E[u.COERCEPLAIN]+`(?:${E[u.PRERELEASE]})?(?:${E[u.BUILD]})?(?:$|[^\\d])`),p("COERCERTL",E[u.COERCE],!0),p("COERCERTLFULL",E[u.COERCEFULL],!0),p("LONETILDE","(?:~>?)"),p("TILDETRIM",`(\\s*)${E[u.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",p("TILDE",`^${E[u.LONETILDE]}${E[u.XRANGEPLAIN]}$`),p("TILDELOOSE",`^${E[u.LONETILDE]}${E[u.XRANGEPLAINLOOSE]}$`),p("LONECARET","(?:\\^)"),p("CARETTRIM",`(\\s*)${E[u.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",p("CARET",`^${E[u.LONECARET]}${E[u.XRANGEPLAIN]}$`),p("CARETLOOSE",`^${E[u.LONECARET]}${E[u.XRANGEPLAINLOOSE]}$`),p("COMPARATORLOOSE",`^${E[u.GTLT]}\\s*(${E[u.LOOSEPLAIN]})$|^$`),p("COMPARATOR",`^${E[u.GTLT]}\\s*(${E[u.FULLPLAIN]})$|^$`),p("COMPARATORTRIM",`(\\s*)${E[u.GTLT]}\\s*(${E[u.LOOSEPLAIN]}|${E[u.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",p("HYPHENRANGE",`^\\s*(${E[u.XRANGEPLAIN]})\\s+-\\s+(${E[u.XRANGEPLAIN]})\\s*$`),p("HYPHENRANGELOOSE",`^\\s*(${E[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${E[u.XRANGEPLAINLOOSE]})\\s*$`),p("STAR","(<|>)?=?\\s*\\*"),p("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),p("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}(w,w.exports);var F=w.exports;Object.freeze({loose:!0}),Object.freeze({});const C=/^[0-9]+$/,D=(t,e)=>{const n=C.test(t),i=C.test(e);return n&&i&&(t=+t,e=+e),t===e?0:n&&!i?-1:i&&!n?1:t<e?-1:1};var _={compareIdentifiers:D,rcompareIdentifiers:(t,e)=>D(e,t)};const{MAX_LENGTH:G,MAX_SAFE_INTEGER:M}=S,{safeRe:j,t:U}=F,{compareIdentifiers:V}=_;o.m;const X=(0,n(35947).YK)().setApp("comments").detectUser().build();var B;B=new class{_action;constructor(t){this.validateAction(t),this._action=t}get id(){return this._action.id}get displayName(){return this._action.displayName}get title(){return this._action.title}get iconSvgInline(){return this._action.iconSvgInline}get enabled(){return this._action.enabled}get exec(){return this._action.exec}get execBatch(){return this._action.execBatch}get order(){return this._action.order}get parent(){return this._action.parent}get default(){return this._action.default}get destructive(){return this._action.destructive}get inline(){return this._action.inline}get renderInline(){return this._action.renderInline}validateAction(t){if(!t.id||"string"!=typeof t.id)throw new Error("Invalid id");if(!t.displayName||"function"!=typeof t.displayName)throw new Error("Invalid displayName function");if("title"in t&&"function"!=typeof t.title)throw new Error("Invalid title function");if(!t.iconSvgInline||"function"!=typeof t.iconSvgInline)throw new Error("Invalid iconSvgInline function");if(!t.exec||"function"!=typeof t.exec)throw new Error("Invalid exec function");if("enabled"in t&&"function"!=typeof t.enabled)throw new Error("Invalid enabled function");if("execBatch"in t&&"function"!=typeof t.execBatch)throw new Error("Invalid execBatch function");if("order"in t&&"number"!=typeof t.order)throw new Error("Invalid order");if(void 0!==t.destructive&&"boolean"!=typeof t.destructive)throw new Error("Invalid destructive flag");if("parent"in t&&"string"!=typeof t.parent)throw new Error("Invalid parent");if(t.default&&!Object.values(a).includes(t.default))throw new Error("Invalid default");if("inline"in t&&"function"!=typeof t.inline)throw new Error("Invalid inline function");if("renderInline"in t&&"function"!=typeof t.renderInline)throw new Error("Invalid renderInline function")}}({id:"comments-unread",title(t){const e=t[0].attributes["comments-unread"];return e>=0?(0,r.zw)("comments","1 new comment","{unread} new comments",e,{unread:e}):(0,r.Tl)("comments","Comment")},displayName:()=>"",iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-comment-processing" viewBox="0 0 24 24"><path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M17,11V9H15V11H17M13,11V9H11V11H13M9,11V9H7V11H9Z" /></svg>',enabled(t){const e=t[0].attributes["comments-unread"];return"number"==typeof e&&e>0},async exec(t){try{return window.OCA.Files.Sidebar.setActiveTab("comments"),await window.OCA.Files.Sidebar.open(t.path),null}catch(t){return X.error("Error while opening sidebar",{error:t}),!1}},inline:()=>!0,order:-140}),void 0===window._nc_fileactions&&(window._nc_fileactions=[],i.o.debug("FileActions initialized")),window._nc_fileactions.find((t=>t.id===B.id))?i.o.error(`FileAction ${B.id} already registered`,{action:B}):window._nc_fileactions.push(B)}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var o=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=e,t=[],i.O=(e,n,r,o)=>{if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],o=t[c][2];for(var a=!0,E=0;E<n.length;E++)(!1&o||s>=o)&&Object.keys(i.O).every((t=>i.O[t](n[E])))?n.splice(E--,1):(a=!1,o<s&&(s=o));if(a){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,r,o]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.e=()=>Promise.resolve(),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),i.j=3260,(()=>{i.b=document.baseURI||self.location.href;var t={3260:0};i.O.j=e=>0===t[e];var e=(e,n)=>{var r,o,s=n[0],a=n[1],E=n[2],u=0;if(s.some((e=>0!==t[e]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(E)var c=E(i)}for(e&&e(n);u<s.length;u++)o=s[u],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),i.nc=void 0;var r=i.O(void 0,[4208],(()=>i(1107)));r=i.O(r)})();
//# sourceMappingURL=comments-init.js.map?v=e312756da59be06e5741