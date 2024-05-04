"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[7238],{22021:(e,t,n)=>{n.d(t,{gP:()=>l});var r=n(72791);const o={prefix:String(Math.round(1e10*Math.random())),current:0},s=r.createContext(o);let a=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);function l(e){let t=(0,r.useContext)(s);return t!==o||a||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((()=>e||"react-aria"+t.prefix+"-"+ ++t.current),[e])}},52134:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(72791);const o=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function s(e){var t=o(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},71306:(e,t,n)=>{n.d(t,{$F:()=>a,PB:()=>s});const r="data-rr-ui-",o="rrUi";function s(e){return"".concat(r).concat(e)}function a(e){return"".concat(o).concat(e)}},74784:(e,t,n)=>{n.d(t,{Z:()=>o});const r=n(72791).createContext(null);r.displayName="NavContext";const o=r},78633:(e,t,n)=>{n.d(t,{Z:()=>s,h:()=>o});var r=n(72791);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},s=r.createContext(null)},81012:(e,t,n)=>{function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((t=>(e[t].name=t,e[t])))}function o(e){let{enabled:t,enableEvents:n,placement:o,flip:s,offset:a,fixed:l,containerPadding:i,arrowElement:c,popperConfig:u={}}=e;var d,f,p,g;const v=function(e){const t={};return Array.isArray(e)?(null==e||e.forEach((e=>{t[e.name]=e})),t):e||t}(u.modifiers);return Object.assign({},u,{placement:o,enabled:t,strategy:l?"fixed":u.strategy,modifiers:r(Object.assign({},v,{eventListeners:{enabled:n},preventOverflow:Object.assign({},v.preventOverflow,{options:i?Object.assign({padding:i},null==(d=v.preventOverflow)?void 0:d.options):null==(f=v.preventOverflow)?void 0:f.options}),offset:{options:Object.assign({offset:a},null==(p=v.offset)?void 0:p.options)},arrow:Object.assign({},v.arrow,{enabled:!!c,options:Object.assign({},null==(g=v.arrow)?void 0:g.options,{element:c})}),flip:Object.assign({enabled:!!s},v.flip)}))})}n.d(t,{ZP:()=>o})},49933:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(72791),o=Object.prototype.hasOwnProperty;function s(e,t,n){for(n of e.keys())if(a(n,t))return n}function a(e,t){var n,r,l;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&a(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e){if((l=r)&&"object"===typeof l&&!(l=s(t,l)))return!1;if(!t.has(l))return!1}return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e){if((l=r[0])&&"object"===typeof l&&!(l=s(t,l)))return!1;if(!a(r[1],t.get(l)))return!1}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"===typeof e){for(n in r=0,e){if(o.call(e,n)&&++r&&!o.call(t,n))return!1;if(!(n in t)||!a(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!==e&&t!==t}var l=n(9084);const i=function(e){var t=(0,l.Z)();return[e[0],(0,r.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};var c=n(78702),u=n(19224),d=n(71217),f=n(95468),p=n(41668),g=n(5934),v=n(60545),m=n(29790);const b=(0,n(40761).kZ)({defaultModifiers:[p.Z,v.Z,u.Z,d.Z,g.Z,f.Z,m.Z,c.Z]}),y=["enabled","placement","strategy","modifiers"];const h={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},w={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:e=>{let{state:t}=e;return()=>{const{reference:e,popper:n}=t.elements;if("removeAttribute"in e){const t=(e.getAttribute("aria-describedby")||"").split(",").filter((e=>e.trim()!==n.id));t.length?e.setAttribute("aria-describedby",t.join(",")):e.removeAttribute("aria-describedby")}}},fn:e=>{let{state:t}=e;var n;const{popper:r,reference:o}=t.elements,s=null==(n=r.getAttribute("role"))?void 0:n.toLowerCase();if(r.id&&"tooltip"===s&&"setAttribute"in o){const e=o.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",e?"".concat(e,",").concat(r.id):r.id)}}},C=[];const Z=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{enabled:o=!0,placement:s="bottom",strategy:l="absolute",modifiers:c=C}=n,u=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,y);const d=(0,r.useRef)(c),f=(0,r.useRef)(),p=(0,r.useCallback)((()=>{var e;null==(e=f.current)||e.update()}),[]),g=(0,r.useCallback)((()=>{var e;null==(e=f.current)||e.forceUpdate()}),[]),[v,m]=i((0,r.useState)({placement:s,update:p,forceUpdate:g,attributes:{},styles:{popper:{},arrow:{}}})),Z=(0,r.useMemo)((()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:e=>{let{state:t}=e;const n={},r={};Object.keys(t.elements).forEach((e=>{n[e]=t.styles[e],r[e]=t.attributes[e]})),m({state:t,styles:n,attributes:r,update:p,forceUpdate:g,placement:t.placement})}})),[p,g,m]),x=(0,r.useMemo)((()=>(a(d.current,c)||(d.current=c),d.current)),[c]);return(0,r.useEffect)((()=>{f.current&&o&&f.current.setOptions({placement:s,strategy:l,modifiers:[...x,Z,h]})}),[l,s,Z,o,x]),(0,r.useEffect)((()=>{if(o&&null!=e&&null!=t)return f.current=b(e,t,Object.assign({},u,{placement:s,strategy:l,modifiers:[...x,w,Z]})),()=>{null!=f.current&&(f.current.destroy(),f.current=void 0,m((e=>Object.assign({},e,{attributes:{},styles:{popper:{}}}))))}}),[o,e,t]),v}},66595:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(53189),o=n(92899),s=n(78376),a=n(72791),l=n(22519),i=n(42391),c=n.n(i);const u=27,d=()=>{};const f=e=>e&&("current"in e?e.current:e);const p=function(e,t){let{disabled:n,clickTrigger:i="click"}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const p=(0,a.useRef)(!1),g=t||d,v=(0,a.useCallback)((t=>{const n=f(e);var o;c()(!!n,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),p.current=!n||!!((o=t).metaKey||o.altKey||o.ctrlKey||o.shiftKey)||!function(e){return 0===e.button}(t)||!!(0,r.Z)(n,t.target)}),[e]),m=(0,l.Z)((e=>{p.current||g(e)})),b=(0,l.Z)((e=>{e.keyCode===u&&g(e)}));(0,a.useEffect)((()=>{if(n||null==e)return;let t=window.event;const r=(0,s.Z)(f(e)),a=(0,o.Z)(r,i,v,!0),l=(0,o.Z)(r,i,(e=>{e!==t?m(e):t=void 0})),c=(0,o.Z)(r,"keyup",(e=>{e!==t?b(e):t=void 0}));let u=[];return"ontouchstart"in r.documentElement&&(u=[].slice.call(r.body.children).map((e=>(0,o.Z)(e,"mousemove",d)))),()=>{a(),l(),c(),u.forEach((e=>e()))}}),[e,n,i,v,m,b])}},90522:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(72791);function o(){return(0,r.useReducer)((function(e){return!e}),!1)[1]}},13808:(e,t,n)=>{n.d(t,{Z:()=>o});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return r(e.querySelectorAll(t))}},7238:(e,t,n)=>{n.d(t,{Z:()=>de});var r=n(81694),o=n.n(r),s=n(72791),a=n(13808),l=n(3070),i=n(80239),c=n(37215),u=n(90522),d=n(92444),f=n(22519);const p=s.createContext(null);var g=n(66068),v=n(49933),m=n(66595),b=n(81012),y=n(80184);const h=["children"];const w=()=>{};function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,s.useContext)(p),[n,r]=(0,g.Z)(),o=(0,s.useRef)(!1),{flip:a,offset:l,rootCloseEvent:i,fixed:c=!1,placement:u,popperConfig:d={},enableEventListeners:f=!0,usePopper:y=!!t}=e,h=null==(null==t?void 0:t.show)?!!e.show:t.show;h&&!o.current&&(o.current=!0);const{placement:C,setMenu:Z,menuElement:x,toggleElement:k}=t||{},E=(0,v.Z)(k,x,(0,b.ZP)({placement:u||C||"bottom-start",enabled:y,enableEvents:null==f?h:f,offset:l,flip:a,fixed:c,arrowElement:n,popperConfig:d})),j=Object.assign({ref:Z||w,"aria-labelledby":null==k?void 0:k.id},E.attributes.popper,{style:E.styles.popper}),O={show:h,placement:C,hasShown:o.current,toggle:null==t?void 0:t.toggle,popper:y?E:null,arrowProps:y?Object.assign({ref:r},E.attributes.arrow,{style:E.styles.arrow}):{}};return(0,m.Z)(x,(e=>{null==t||t.toggle(!1,e)}),{clickTrigger:i,disabled:!h}),[j,O]}function Z(e){let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,h);const[r,o]=C(n);return(0,y.jsx)(y.Fragment,{children:t(r,o)})}Z.displayName="DropdownMenu",Z.defaultProps={usePopper:!0};const x=Z;var k=n(22021);const E=e=>{var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},j=()=>{};function O(){const e=(0,k.gP)(),{show:t=!1,toggle:n=j,setToggle:r,menuElement:o}=(0,s.useContext)(p)||{},a=(0,s.useCallback)((e=>{n(!t,e)}),[t,n]),l={id:e,ref:r||j,onClick:a,"aria-expanded":!!t};return o&&E(o)&&(l["aria-haspopup"]=!0),[l,{show:t,toggle:n}]}function P(e){let{children:t}=e;const[n,r]=O();return(0,y.jsx)(y.Fragment,{children:t(n,r)})}P.displayName="DropdownToggle";const S=P;var N=n(78633),A=n(74784),R=n(15341),T=n(71306);const M=["eventKey","disabled","onClick","active","as"];function D(e){let{key:t,href:n,active:r,disabled:o,onClick:a}=e;const l=(0,s.useContext)(N.Z),i=(0,s.useContext)(A.Z),{activeKey:c}=i||{},u=(0,N.h)(t,n),d=null==r&&null!=t?(0,N.h)(c)===u:r;return[{onClick:(0,f.Z)((e=>{o||(null==a||a(e),l&&!e.isPropagationStopped()&&l(u,e))})),"aria-disabled":o||void 0,"aria-selected":d,[(0,T.PB)("dropdown-item")]:""},{isActive:d}]}const I=s.forwardRef(((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:s,as:a=R.ZP}=e,l=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,M);const[i]=D({key:n,href:l.href,disabled:r,onClick:o,active:s});return(0,y.jsx)(a,Object.assign({},l,{ref:t},i))}));I.displayName="DropdownItem";const L=I;function B(){const e=(0,u.Z)(),t=(0,s.useRef)(null),n=(0,s.useCallback)((n=>{t.current=n,e()}),[e]);return[t,n]}function F(e){let{defaultShow:t,show:n,onSelect:r,onToggle:o,itemSelector:u="* [".concat((0,T.PB)("dropdown-item"),"]"),focusFirstItemOnShow:g,placement:v="bottom-start",children:m}=e;const[b,h]=(0,i.$c)(n,t,o),[w,C]=B(),Z=w.current,[x,k]=B(),j=x.current,O=(0,c.Z)(b),P=(0,s.useRef)(null),S=(0,s.useRef)(!1),A=(0,s.useContext)(N.Z),R=(0,s.useCallback)((function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null==t?void 0:t.type;h(e,{originalEvent:t,source:n})}),[h]),M=(0,f.Z)(((e,t)=>{null==r||r(e,t),R(!1,t,"select"),t.isPropagationStopped()||null==A||A(e,t)})),D=(0,s.useMemo)((()=>({toggle:R,placement:v,show:b,menuElement:Z,toggleElement:j,setMenu:C,setToggle:k})),[R,v,b,Z,j,C,k]);Z&&O&&!b&&(S.current=Z.contains(document.activeElement));const I=(0,f.Z)((()=>{j&&j.focus&&j.focus()})),L=(0,f.Z)((()=>{const e=P.current;let t=g;if(null==t&&(t=!(!w.current||!E(w.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;const n=(0,a.Z)(w.current,u)[0];n&&n.focus&&n.focus()}));(0,s.useEffect)((()=>{b?L():S.current&&(S.current=!1,I())}),[b,S,I,L]),(0,s.useEffect)((()=>{P.current=null}));const F=(e,t)=>{if(!w.current)return null;const n=(0,a.Z)(w.current,u);let r=n.indexOf(e)+t;return r=Math.max(0,Math.min(r,n.length)),n[r]};return(0,d.Z)("keydown",(e=>{var t,n;const{key:r}=e,o=e.target,s=null==(t=w.current)?void 0:t.contains(o),a=null==(n=x.current)?void 0:n.contains(o);if(/input|textarea/i.test(o.tagName)&&(" "===r||"Escape"!==r&&s))return;if(!s&&!a)return;if("Tab"===r&&(!w.current||!b))return;P.current=e.type;const i={originalEvent:e,source:e.type};switch(r){case"ArrowUp":{const t=F(o,-1);return t&&t.focus&&t.focus(),void e.preventDefault()}case"ArrowDown":if(e.preventDefault(),b){const e=F(o,1);e&&e.focus&&e.focus()}else h(!0,i);return;case"Tab":(0,l.ZP)(document,"keyup",(e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=w.current)&&t.contains(e.target)||h(!1,i)}),{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),h(!1,i)}})),(0,y.jsx)(N.Z.Provider,{value:M,children:(0,y.jsx)(p.Provider,{value:D,children:m})})}F.displayName="Dropdown",F.Menu=x,F.Toggle=S,F.Item=L;const K=F;var U=n(52134);const z=s.createContext({});z.displayName="DropdownContext";const _=z;var W=n(56236),$=n(10162);const q=s.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,eventKey:s,disabled:a=!1,onClick:l,active:i,as:c=W.Z,...u}=e;const d=(0,$.vE)(n,"dropdown-item"),[f,p]=D({key:s,href:u.href,disabled:a,onClick:l,active:i});return(0,y.jsx)(c,{...u,...f,ref:t,className:o()(r,d,p.isActive&&"active",a&&"disabled")})}));q.displayName="DropdownItem";const V=q;var G="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;const H="undefined"!==typeof document||G?s.useLayoutEffect:s.useEffect;var J=n(73201),Q=(n(42391),n(91991)),X=n(5715);n(92176);function Y(e,t){return e}function ee(e,t,n){let r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t&&(r=e?n?"right-end":"left-end":n?"right-start":"left-start"),r}const te=s.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,align:a,rootCloseEvent:l,flip:i,show:c,renderOnMount:u,as:d="div",popperConfig:f,variant:p,...g}=e,v=!1;const m=(0,s.useContext)(X.Z),b=(0,$.vE)(n,"dropdown-menu"),{align:h,drop:w,isRTL:Z}=(0,s.useContext)(_);a=a||h;const x=(0,s.useContext)(Q.Z),k=[];if(a)if("object"===typeof a){const e=Object.keys(a);if(e.length){const t=e[0],n=a[t];v="start"===n,k.push("".concat(b,"-").concat(t,"-").concat(n))}}else"end"===a&&(v=!0);const E=ee(v,w,Z),[j,{hasShown:O,popper:P,show:S,toggle:N}]=C({flip:i,rootCloseEvent:l,show:c,usePopper:!m&&0===k.length,offset:[0,2],popperConfig:f,placement:E});if(j.ref=(0,J.Z)(Y(t),j.ref),H((()=>{S&&(null==P||P.update())}),[S]),!O&&!u&&!x)return null;"string"!==typeof d&&(j.show=S,j.close=()=>null==N?void 0:N(!1),j.align=a);let A=g.style;return null!=P&&P.placement&&(A={...g.style,...j.style},g["x-placement"]=P.placement),(0,y.jsx)(d,{...g,...j,style:A,...(k.length||m)&&{"data-bs-popper":"static"},className:o()(r,b,S&&"show",v&&"".concat(b,"-end"),p&&"".concat(b,"-").concat(p),...k)})}));te.displayName="DropdownMenu",te.defaultProps={flip:!0};const ne=te;var re=n(43360);const oe=s.forwardRef(((e,t)=>{let{bsPrefix:n,split:r,className:a,childBsPrefix:l,as:i=re.Z,...c}=e;const u=(0,$.vE)(n,"dropdown-toggle"),d=(0,s.useContext)(p),f=(0,s.useContext)(Q.Z);void 0!==l&&(c.bsPrefix=l);const[g]=O();return g.ref=(0,J.Z)(g.ref,Y(t)),(0,y.jsx)(i,{className:o()(a,u,r&&"".concat(u,"-split"),!!f&&(null==d?void 0:d.show)&&"show"),...g,...c})}));oe.displayName="DropdownToggle";const se=oe;var ae=n(66543);const le=(0,ae.Z)("dropdown-header",{defaultProps:{role:"heading"}}),ie=(0,ae.Z)("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),ce=(0,ae.Z)("dropdown-item-text",{Component:"span"}),ue=s.forwardRef(((e,t)=>{const{bsPrefix:n,drop:r,show:a,className:l,align:c,onSelect:u,onToggle:d,focusFirstItemOnShow:f,as:p="div",navbar:g,autoClose:v,...m}=(0,i.Ch)(e,{show:"onToggle"}),b=(0,s.useContext)(Q.Z),h=(0,$.vE)(n,"dropdown"),w=(0,$.SC)(),C=(0,U.Z)(((e,t)=>{var n;t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),n=t.source,(!1===v?"click"===n:"inside"===v?"rootClose"!==n:"outside"!==v||"select"!==n)&&(null==d||d(e,t))})),Z=ee("end"===c,r,w),x=(0,s.useMemo)((()=>({align:c,drop:r,isRTL:w})),[c,r,w]);return(0,y.jsx)(_.Provider,{value:x,children:(0,y.jsx)(K,{placement:Z,show:a,onSelect:u,onToggle:C,focusFirstItemOnShow:f,itemSelector:".".concat(h,"-item:not(.disabled):not(:disabled)"),children:b?m.children:(0,y.jsx)(p,{...m,ref:t,className:o()(l,a&&"show",(!r||"down"===r)&&h,"up"===r&&"dropup","end"===r&&"dropend","start"===r&&"dropstart")})})})}));ue.displayName="Dropdown",ue.defaultProps={navbar:!1,align:"start",autoClose:!0};const de=Object.assign(ue,{Toggle:se,Menu:ne,Item:V,ItemText:ce,Divider:ie,Header:le})},91991:(e,t,n)=>{n.d(t,{Z:()=>o});const r=n(72791).createContext(null);r.displayName="InputGroupContext";const o=r},5715:(e,t,n)=>{n.d(t,{Z:()=>o});const r=n(72791).createContext(null);r.displayName="NavbarContext";const o=r}}]);
//# sourceMappingURL=7238.52699ed3.chunk.js.map