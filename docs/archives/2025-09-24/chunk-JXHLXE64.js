import{A as It,B as J,C as Yt,E as Kt,K as Tt,L as Jt,M as te,N as Et,P as ee,R as ne,S as oe,T as ie,U as re,W as ae,X as se,Y as gt,Z as P,aa as Dt,ba as K,ca as tt,da as S,ea as le,l as ut,m as Gt,n as pt,p as H,t as bt,u as Zt,x as Xt}from"./chunk-DFPAG6WC.js";import{$b as _t,Ab as kt,Bb as G,Cb as Z,Db as U,Fb as Ht,Gb as Wt,Hb as m,Ib as q,Ja as c,Jb as z,Kb as _,Mb as I,N as Rt,Na as At,Nb as T,Q as zt,Rb as $t,Tb as Vt,Ub as h,V as v,Vb as X,W as N,Wa as M,Wb as Y,Xa as A,Ya as V,Zb as E,_ as d,_a as w,a as F,ab as x,cb as ct,d as ft,db as jt,e as rt,fa as at,g as mt,ia as vt,ja as st,jc as Ut,k as Ot,ka as Nt,lb as L,lc as j,na as wt,oc as qt,ra as xt,sa as g,sc as C,tc as Qt,ua as lt,ub as u,v as yt,vb as O,wb as R,xb as nt,ya as dt,yb as St,zb as Ct}from"./chunk-5TO3FCRV.js";function $n(e){e||(e=d(Nt));let a=new Ot(t=>{if(e.destroyed){t.next();return}return e.onDestroy(t.next.bind(t))});return t=>t.pipe(zt(a))}function et(...e){if(e){let a=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")a.push(n);else if(o==="object"){let r=Array.isArray(n)?[et(...n)]:Object.entries(n).map(([i,s])=>s?i:void 0);a=r.length?a.concat(r.filter(i=>!!i)):a}}return a.join(" ").trim()}}var ht={};function ot(e="pui_id_"){return Object.hasOwn(ht,e)||(ht[e]=0),ht[e]++,`${e}${ht[e]}`}var de=(()=>{class e extends S{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),D=(()=>{class e{document=d(st);platformId=d(dt);el=d(lt);injector=d(vt);cd=d(qt);renderer=d(At);config=d(le);baseComponentStyle=d(de);baseStyle=d(S);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=ot("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",o={}){return re(t,n,o)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Zt(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>Dt.off("theme:change",t))}_loadStyles(){let t=()=>{tt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),tt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!tt.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),tt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!K.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,F({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,F({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,F({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(F({name:"global-style"},this.styleOptions),r),K.setLoadedStyleName("common")}if(!K.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,F({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(F({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),K.setLoadedStyleName(this.componentStyle?.name)}if(!K.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,F({name:"layer-order",first:!0},this.styleOptions)),K.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,F({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){tt.clearLoadedStyleNames(),Dt.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n={}){return et(this._getOptionValue(this.$style?.classes,t,F({instance:this},n)))}sx(t="",n=!0,o={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,t,F({instance:this},o))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=et;static \u0275fac=function(n){return new(n||e)};static \u0275dir=V({type:e,inputs:{dt:"dt"},features:[E([de,S]),xt]})}return e})();var Ft=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==t)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var i=0;i<o.length;i++){if(o[i]==t)return r;o[i].attributes&&o[i].attributes[n]&&o[i].nodeType==1&&r++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let r=Q=>{if(Q)return getComputedStyle(Q).getPropertyValue("position")==="relative"?Q:r(Q.parentElement)},i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=n.offsetHeight,l=n.getBoundingClientRect(),b=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),f=this.getViewport(),y=r(t)?.getBoundingClientRect()||{top:-1*b,left:-1*p},B,$,it="top";l.top+s+i.height>f.height?(B=l.top-y.top-i.height,it="bottom",l.top+B<0&&(B=-1*l.top)):(B=s+l.top-y.top,it="top");let Lt=l.left+i.width-f.width,Pe=l.left-y.left;if(i.width>f.width?$=(l.left-y.left)*-1:Lt>0?$=Pe-Lt:$=l.left-y.left,t.style.top=B+"px",t.style.left=$+"px",t.style.transformOrigin=it,o){let Q=Yt(/-anchor-gutter$/)?.value;t.style.marginTop=it==="bottom"?`calc(${Q??"2px"} * -1)`:Q??""}}static absolutePosition(t,n,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),i=r.height,s=r.width,l=n.offsetHeight,b=n.offsetWidth,p=n.getBoundingClientRect(),f=this.getWindowScrollTop(),k=this.getWindowScrollLeft(),y=this.getViewport(),B,$;p.top+l+i>y.height?(B=p.top+f-i,t.style.transformOrigin="bottom",B<0&&(B=f)):(B=l+p.top+f,t.style.transformOrigin="top"),p.left+s>y.width?$=Math.max(0,p.left+k+b-s):$=p.left+k,t.style.top=B+"px",t.style.left=$+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,i=s=>{let l=window.getComputedStyle(s,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let s of o){let l=s.nodeType===1&&s.dataset.scrollselectors;if(l){let b=l.split(",");for(let p of b){let f=this.findSingle(s,p);f&&i(f)&&n.push(f)}}s.nodeType!==9&&i(s)&&n.push(s)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,i=getComputedStyle(t).getPropertyValue("paddingTop"),s=i?parseFloat(i):0,l=t.getBoundingClientRect(),p=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-s,f=t.scrollTop,k=t.clientHeight,y=this.getOuterHeight(n);p<0?t.scrollTop=f+p:p+y>k&&(t.scrollTop=f+p-k+y)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,r=0,i=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(i)||setTimeout(i,16))};i()}static fadeOut(t,n){var o=1,r=50,i=n,s=r/i;let l=setInterval(()=>{o=o-s,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(i){return[].indexOf.call(document.querySelectorAll(i),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],i=t.innerWidth||o.clientWidth||r.clientWidth,s=t.innerHeight||o.clientHeight||r.clientHeight;return{width:i,height:s}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var i=t.indexOf("Edge/");return i>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let i of o){let s=getComputedStyle(i);this.isVisible(i)&&s.display!="none"&&s.visibility!="hidden"&&r.push(i)}return r}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let i=o.indexOf(o[0].ownerDocument.activeElement);n?i==-1||i===0?r=o.length-1:r=i-1:i!=-1&&i!==o.length-1&&(r=i+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let i=(s=>!!(s&&s.constructor&&s.call&&s.apply))(t)?t():t;return i&&i.nodeType===9||this.isExist(i)?i:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(r,i)=>{let s=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[i].flat().reduce((l,b)=>{if(b!=null){let p=typeof b;if(p==="string"||p==="number")l.push(b);else if(p==="object"){let f=Array.isArray(b)?o(r,b):Object.entries(b).map(([k,y])=>r==="style"&&(y||y===0)?`${k.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${y}`:y?k:void 0);l=f.length?l.concat(f.filter(k=>!!k)):l}}return l},s)};Object.entries(n).forEach(([r,i])=>{if(i!=null){let s=r.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),i):r==="pBind"?this.setAttributes(t,i):(i=r==="class"?[...new Set(o("class",i))].join(" ").trim():r==="style"?o("style",i).join(";").trim():i,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=i),t.setAttribute(r,i))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();var ce=class{element;listener;scrollableParents;constructor(a,t=()=>{}){this.element=a,this.listener=t}bindScrollListener(){this.scrollableParents=Ft.getScrollableParents(this.element);for(let a=0;a<this.scrollableParents.length;a++)this.scrollableParents[a].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let a=0;a<this.scrollableParents.length;a++)this.scrollableParents[a].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var ue=(()=>{class e extends D{autofocus=!1;focused=!1;platformId=d(dt);document=d(st);host=d(lt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){bt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Ft.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=V({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[w]})}return e})();var pe=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Be=`
    ${pe}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Le={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":oe(e.value())&&String(e.value()).length===1,"p-badge-dot":ne(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},be=(()=>{class e extends S{name="badge";theme=Be;classes=Le;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var Mt=(()=>{class e extends D{styleClass=j();badgeSize=j();size=j();severity=j();value=j();badgeDisabled=j(!1,{transform:C});_componentStyle=d(be);static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=M({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(h(o.cn(o.cx("root"),o.styleClass())),$t("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[E([be]),w],decls:1,vars:1,template:function(n,o){n&1&&X(0),n&2&&Y(o.value())},dependencies:[H,P],encapsulation:2,changeDetection:0})}return e})(),ge=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=A({type:e});static \u0275inj=N({imports:[Mt,P,P]})}return e})();var he=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var Re=["*"],ze={root:"p-fluid"},fe=(()=>{class e extends S{name="fluid";classes=ze;theme=he;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var me=(()=>{class e extends D{_componentStyle=d(fe);static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=M({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&h(o.cx("root"))},features:[E([fe]),w],ngContentSelectors:Re,decls:1,vars:0,template:function(n,o){n&1&&(q(),z(0))},dependencies:[H],encapsulation:2,changeDetection:0})}return e})();var Ne=["*"],Ae=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ye=(()=>{class e extends S{name="baseicon";css=Ae;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ve=(()=>{class e extends D{spin=!1;_componentStyle=d(ye);getClassNames(){return et("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=M({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&h(o.getClassNames())},inputs:{spin:[2,"spin","spin",C]},features:[E([ye]),w],ngContentSelectors:Ne,decls:1,vars:0,template:function(n,o){n&1&&(q(),z(0))},encapsulation:2,changeDetection:0})}return e})();var je=["data-p-icon","spinner"],we=(()=>{class e extends ve{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+ot()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=M({type:e,selectors:[["","data-p-icon","spinner"]],features:[w],attrs:je,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(at(),St(0,"g"),kt(1,"path",0),Ct(),St(2,"defs")(3,"clipPath",1),kt(4,"rect",2),Ct()()),n&2&&(L("clip-path",o.pathId),c(3),Ht("id",o.pathId))},encapsulation:2})}return e})();var xe=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var He=`
    ${xe}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,We={root:"p-ink"},Se=(()=>{class e extends S{name="ripple";theme=He;classes=We;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var Ce=(()=>{class e extends D{zone=d(jt);_componentStyle=d(Se);animationListener;mouseDownListener;timeout;constructor(){super(),Ut(()=>{bt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(J(n,"p-ink-active"),!Tt(n)&&!Et(n)){let s=Math.max(Kt(this.el.nativeElement),te(this.el.nativeElement));n.style.height=s+"px",n.style.width=s+"px"}let o=Jt(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-Et(n)/2,i=t.pageY-o.top+this.document.body.scrollLeft-Tt(n)/2;this.renderer.setStyle(n,"top",i+"px"),this.renderer.setStyle(n,"left",r+"px"),It(n,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&J(s,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&J(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),J(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ee(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=V({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[E([Se]),w]})}return e})();var ke=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Ve=["content"],Ue=["loadingicon"],qe=["icon"],Qe=["*"],Ie=e=>({class:e});function Ge(e,a){e&1&&U(0)}function Ze(e,a){if(e&1&&nt(0,"span"),e&2){let t=m(3);h(t.cx("loadingIcon")),L("aria-hidden",!0)("data-pc-section","loadingicon")}}function Xe(e,a){if(e&1&&(at(),nt(0,"svg",7)),e&2){let t=m(3);h(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),u("spin",!0),L("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ye(e,a){if(e&1&&(G(0),x(1,Ze,1,4,"span",3)(2,Xe,1,5,"svg",6),Z()),e&2){let t=m(2);c(),u("ngIf",t.loadingIcon),c(),u("ngIf",!t.loadingIcon)}}function Ke(e,a){}function Je(e,a){if(e&1&&x(0,Ke,0,0,"ng-template",8),e&2){let t=m(2);u("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function tn(e,a){if(e&1&&(G(0),x(1,Ye,3,2,"ng-container",2)(2,Je,1,1,null,5),Z()),e&2){let t=m();c(),u("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),c(),u("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",_t(3,Ie,t.cx("loadingIcon")))}}function en(e,a){if(e&1&&nt(0,"span"),e&2){let t=m(2);h(t.cx("icon")),L("data-pc-section","icon")}}function nn(e,a){}function on(e,a){if(e&1&&x(0,nn,0,0,"ng-template",8),e&2){let t=m(2);u("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function rn(e,a){if(e&1&&(G(0),x(1,en,1,3,"span",3)(2,on,1,1,null,5),Z()),e&2){let t=m();c(),u("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),c(),u("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",_t(3,Ie,t.cx("icon")))}}function an(e,a){if(e&1&&(O(0,"span"),X(1),R()),e&2){let t=m();h(t.cx("label")),L("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),c(),Y(t.label)}}function sn(e,a){if(e&1&&nt(0,"p-badge",9),e&2){let t=m();u("value",t.badge)("severity",t.badgeSeverity)}}var ln={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,a])=>!!a).reduce((a,[t])=>a+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},_e=(()=>{class e extends S{name="button";theme=ke;classes=ln;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var dn=(()=>{class e extends D{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=j(void 0,{transform:C});onClick=new ct;onFocus=new ct;onBlur=new ct;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=d(me,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=d(_e);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=M({type:e,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(_(r,Ve,5),_(r,Ue,5),_(r,qe,5),_(r,gt,4)),n&2){let i;I(i=T())&&(o.contentTemplate=i.first),I(i=T())&&(o.loadingIconTemplate=i.first),I(i=T())&&(o.iconTemplate=i.first),I(i=T())&&(o.templates=i)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",C],loading:[2,"loading","loading",C],loadingIcon:"loadingIcon",raised:[2,"raised","raised",C],rounded:[2,"rounded","rounded",C],text:[2,"text","text",C],plain:[2,"plain","plain",C],severity:"severity",outlined:[2,"outlined","outlined",C],link:[2,"link","link",C],tabindex:[2,"tabindex","tabindex",Qt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",C],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[E([_e]),w],ngContentSelectors:Qe,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,o){n&1&&(q(),O(0,"button",0),Wt("click",function(i){return o.onClick.emit(i)})("focus",function(i){return o.onFocus.emit(i)})("blur",function(i){return o.onBlur.emit(i)}),z(1),x(2,Ge,1,0,"ng-container",1)(3,tn,3,5,"ng-container",2)(4,rn,3,5,"ng-container",2)(5,an,2,5,"span",3)(6,sn,1,2,"p-badge",4),R()),n&2&&(h(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),u("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),L("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),c(2),u("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),c(),u("ngIf",o.loading),c(),u("ngIf",!o.loading),c(),u("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),c(),u("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[H,ut,pt,Gt,Ce,ue,we,ge,Mt,P],encapsulation:2,changeDetection:0})}return e})(),Hi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=A({type:e});static \u0275inj=N({imports:[H,dn,P,P]})}return e})();var Te=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var cn=["header"],un=["title"],pn=["subtitle"],bn=["content"],gn=["footer"],hn=["*",[["p-header"]],[["p-footer"]]],fn=["*","p-header","p-footer"];function mn(e,a){e&1&&U(0)}function yn(e,a){if(e&1&&(O(0,"div"),z(1,1),x(2,mn,1,0,"ng-container",1),R()),e&2){let t=m();h(t.cx("header")),c(2),u("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function vn(e,a){if(e&1&&(G(0),X(1),Z()),e&2){let t=m(2);c(),Y(t.header)}}function wn(e,a){e&1&&U(0)}function xn(e,a){if(e&1&&(O(0,"div"),x(1,vn,2,1,"ng-container",2)(2,wn,1,0,"ng-container",1),R()),e&2){let t=m();h(t.cx("title")),c(),u("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),c(),u("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Sn(e,a){if(e&1&&(G(0),X(1),Z()),e&2){let t=m(2);c(),Y(t.subheader)}}function Cn(e,a){e&1&&U(0)}function kn(e,a){if(e&1&&(O(0,"div"),x(1,Sn,2,1,"ng-container",2)(2,Cn,1,0,"ng-container",1),R()),e&2){let t=m();h(t.cx("subtitle")),c(),u("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),c(),u("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function _n(e,a){e&1&&U(0)}function In(e,a){e&1&&U(0)}function Tn(e,a){if(e&1&&(O(0,"div"),z(1,2),x(2,In,1,0,"ng-container",1),R()),e&2){let t=m();h(t.cx("footer")),c(2),u("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var En=`
    ${Te}

    .p-card {
        display: block;
    }
`,Dn={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ee=(()=>{class e extends S{name="card";theme=En;classes=Dn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var Fn=(()=>{class e extends D{header;subheader;set style(t){ie(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=wt(null);_componentStyle=d(Ee);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=M({type:e,selectors:[["p-card"]],contentQueries:function(n,o,r){if(n&1&&(_(r,ae,5),_(r,se,5),_(r,cn,4),_(r,un,4),_(r,pn,4),_(r,bn,4),_(r,gn,4),_(r,gt,4)),n&2){let i;I(i=T())&&(o.headerFacet=i.first),I(i=T())&&(o.footerFacet=i.first),I(i=T())&&(o.headerTemplate=i.first),I(i=T())&&(o.titleTemplate=i.first),I(i=T())&&(o.subtitleTemplate=i.first),I(i=T())&&(o.contentTemplate=i.first),I(i=T())&&(o.footerTemplate=i.first),I(i=T())&&(o.templates=i)}},hostVars:5,hostBindings:function(n,o){n&2&&(L("data-pc-name","card"),Vt(o._style()),h(o.cn(o.cx("root"),o.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[E([Ee]),w],ngContentSelectors:fn,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,o){n&1&&(q(hn),x(0,yn,3,3,"div",0),O(1,"div"),x(2,xn,3,4,"div",0)(3,kn,3,4,"div",0),O(4,"div"),z(5),x(6,_n,1,0,"ng-container",1),R(),x(7,Tn,3,3,"div",0),R()),n&2&&(u("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),c(),h(o.cx("body")),c(),u("ngIf",o.header||o.titleTemplate||o._titleTemplate),c(),u("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),c(),h(o.cx("content")),c(2),u("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),c(),u("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[H,ut,pt,P],encapsulation:2,changeDetection:0})}return e})(),rr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=A({type:e});static \u0275inj=N({imports:[Fn,P,P]})}return e})();function Pt(e,a){if(e===void 0)throw Bn(a)}var Mn=`[UniT dev]
`,Pn="Unspecified error.";function Bn(e){return new Error(Mn+(e||Pn))}function Bt(e){return De+e}function lr(e){return De+e}var De="https://universytest.github.io/archives/2025-09-24/";var fr=(()=>{var a,t,n,Fe,Me;let i=class i{constructor(){rt(this,n);rt(this,a,new Map([["customerReviewsSectionRelativeURL","sections/customerReviews"],["frequentlyAskedQuestionsSectionRelativeURL","sections/frequentlyAskedQuestions"],["headerSectionRelativeURL","sections/headerSection"],["heroSectionRelativeURL","sections/heroSection"],["howAndWhatWeMakeSectionRelativeURL","sections/howAndWhatWeMake"],["improvementsAndGuaranteesSectionRelativeURL","sections/improvementsAndGuarantees"],["inHouseExpertsSectionRelativeURL","sections/inHouseExperts"],["navigationSettingsRelativeURL","settings/navigation"],["userAuthenticationSettingsRelativeURL","settings/userAuthentication"],["utContactsSectionRelativeURL","sections/utContacts"],["utPeculiaritiesSectionRelativeURL","sections/utPeculiarities"],["utServicesSectionRelativeURL","sections/utServices"]]));rt(this,t,mt(this,n,Me).call(this,d(Xt)).pipe(yt(l=>{let b=mt(this,n,Fe).call(this,l);return new Map(b)}),Rt(1)))}readURL(l){return ft(this,t).pipe(yt(b=>{let p=b.get(l);return Pt(p,`[BackendAPIConfigurationService] Wrong data. The URL codename ('${l}') does not exist.`),p}))}};a=new WeakMap,t=new WeakMap,n=new WeakSet,Fe=function(l){return Object.entries(l).map(([p,f])=>{let k=ft(this,a).get(p);return Pt(k,`[BackendAPIConfigurationService] Wrong data. The relative URL codename ('${p}') does not exist.`),[k,Bt(f)]})},Me=function(l){let b=Bt("data/settings/backend-api-configuration.json");return l.get(b)},i.\u0275fac=function(b){return new(b||i)},i.\u0275prov=v({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();export{$n as a,ot as b,D as c,Ft as d,ce as e,ue as f,me as g,ve as h,Ce as i,dn as j,Hi as k,Fn as l,rr as m,Bn as n,Bt as o,lr as p,fr as q};
