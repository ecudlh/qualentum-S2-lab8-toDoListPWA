/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var s=t.g.document;if(!e&&s&&(s.currentScript&&"SCRIPT"===s.currentScript.tagName.toUpperCase()&&(e=s.currentScript.src),!e)){var i=s.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(s,t,i)},a=(t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:h,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,m=globalThis,$=m.trustedTypes,g=$?$.emptyScript:"",_=m.reactiveElementPolyfillSupport,y=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!h(t,e),A={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);n?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i;const r=n.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){const i=this.constructor,n=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??v)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,_?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.1");const w=globalThis,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+P,k=`<${T}>`,D=document,I=()=>D.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,M="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,H=/>/g,R=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,z=/^(?:script|style|textarea|title)$/i,V=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),W=V(1),q=(V(2),V(3),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),F=new WeakMap,J=D.createTreeWalker(D,129);function Z(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=N;for(let e=0;e<s;e++){const s=t[e];let a,c,h=-1,d=0;for(;d<s.length&&(o.lastIndex=d,c=o.exec(s),null!==c);)d=o.lastIndex,o===N?"!--"===c[1]?o=B:void 0!==c[1]?o=H:void 0!==c[2]?(z.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=R):void 0!==c[3]&&(o=R):o===R?">"===c[0]?(o=n??N,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?R:'"'===c[3]?j:L):o===j||o===L?o=R:o===B||o===H?o=N:(o=R,n=void 0);const l=o===R&&t[e+1].startsWith("/>")?" ":"";r+=o===N?s+k:h>=0?(i.push(a),s.slice(0,h)+C+s.slice(h)+P+l):s+P+(-2===h?e:l)}return[Z(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,h]=G(t,e);if(this.el=Q.createElement(c,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=h[r++],s=i.getAttribute(t).split(P),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?st:"?"===o[1]?it:"@"===o[1]?nt:et}),i.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(z.test(i.tagName)){const t=i.textContent.split(P),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],I()),J.nextNode(),a.push({type:2,index:++n});i.append(t[e],I())}}}else if(8===i.nodeType)if(i.data===T)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(P,t+1));)a.push({type:7,index:n}),t+=P.length-1}n++}}static createElement(t,e){const s=D.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===q)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=O(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=X(t,n._$AS(t,e.values),n,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??D).importNode(e,!0);J.currentNode=i;let n=J.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new tt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new rt(n,this,t)),this._$AV.push(e),a=s[++o]}r!==a?.index&&(n=J.nextNode(),r++)}return J.currentNode=D,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),O(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Q.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Q(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new tt(this.O(I()),this.O(I()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=X(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=X(this,i[s+o],e,o),a===q&&(a=this._$AH[o]),r||=!O(a)||a!==this._$AH[o],a===K?t=K:t!==K&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class nt extends et{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??K)===q)return;const s=this._$AH,i=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(Q,tt),(w.litHtmlVersions??=[]).push("3.3.1");const at=globalThis;class ct extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new tt(e.insertBefore(I(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,at.litElementHydrateSupport?.({LitElement:ct});const ht=at.litElementPolyfillSupport;ht?.({LitElement:ct}),(at.litElementVersions??=[]).push("4.2.1");class dt extends ct{static properties={texto:{type:String},completada:{type:Boolean}};constructor(){super(),this.texto="Tarea de ejemplo",this.completada=!1}static styles=o`
        :host {
            width: 100%;
        }

        .card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 15px;
            width: 100%;
            box-sizing: border-box;
            background-color: #fefefe; 
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            margin-bottom: 10px;
            transition: background-color 0.3s;
        }

        .card:hover {
            background-color: #f0f0f0;
        }

        input[type="checkbox"] {
            margin-right: 10px;
            transform: scale(1.2);
            cursor: pointer;
        }

        span {
            flex: 1;
            word-break: break-word;
            font-family: sans-serif;
        }

        .completada {
            text-decoration: line-through;
            color: gray;
        }
        
        .card:has(span.completada) {
            background-color: #dbdbdb;
        }

        button.delete {
            border: none;
            background-color: #ff4d4d;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background-color 0.2s;
        }

        button.delete:hover {
            background-color: #e60000;
        }  
    `;render(){return W`
            <div class="card">
                <input type="checkbox" 
                    ?checked=${this.completada}
                    @change=${this._marcarCompletada}>
                <span class=${this.completada?"completada":""} >${this.texto}</span>
                <button class="delete"  @click=${this._eliminarTarea}>Eliminar</button>
            </div>
        `}_marcarCompletada(t){this.completada=t.target.checked,console.log("tarea completada"),this.dispatchEvent(new CustomEvent("tarea-completada",{detail:{texto:this.texto,completada:this.completada},bubbles:!0,composed:!0}))}_eliminarTarea(){console.log("tarea eliminada"),this.dispatchEvent(new CustomEvent("tarea-eliminada",{detail:{texto:this.texto},bubbles:!0,composed:!0}))}}customElements.define("todo-item",dt);const lt=(t,e)=>e.some(e=>t instanceof e);let pt,ut;const ft=new WeakMap,mt=new WeakMap,$t=new WeakMap;let gt={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return ft.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return bt(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function _t(t){gt=t(gt)}function yt(t){return"function"==typeof t?(e=t,(ut||(ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(vt(this),t),bt(this.request)}:function(...t){return bt(e.apply(vt(this),t))}):(t instanceof IDBTransaction&&function(t){if(ft.has(t))return;const e=new Promise((e,s)=>{const i=()=>{t.removeEventListener("complete",n),t.removeEventListener("error",r),t.removeEventListener("abort",r)},n=()=>{e(),i()},r=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",n),t.addEventListener("error",r),t.addEventListener("abort",r)});ft.set(t,e)}(t),lt(t,pt||(pt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,gt):t);var e}function bt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,s)=>{const i=()=>{t.removeEventListener("success",n),t.removeEventListener("error",r)},n=()=>{e(bt(t.result)),i()},r=()=>{s(t.error),i()};t.addEventListener("success",n),t.addEventListener("error",r)});return $t.set(e,t),e}(t);if(mt.has(t))return mt.get(t);const e=yt(t);return e!==t&&(mt.set(t,e),$t.set(e,t)),e}const vt=t=>$t.get(t),At=["get","getKey","getAll","getAllKeys","count"],xt=["put","add","delete","clear"],wt=new Map;function Et(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(wt.get(e))return wt.get(e);const s=e.replace(/FromIndex$/,""),i=e!==s,n=xt.includes(s);if(!(s in(i?IDBIndex:IDBObjectStore).prototype)||!n&&!At.includes(s))return;const r=async function(t,...e){const r=this.transaction(t,n?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[s](...e),n&&r.done]))[0]};return wt.set(e,r),r}_t(t=>({...t,get:(e,s,i)=>Et(e,s)||t.get(e,s,i),has:(e,s)=>!!Et(e,s)||t.has(e,s)}));const St=["continue","continuePrimaryKey","advance"],Ct={},Pt=new WeakMap,Tt=new WeakMap,kt={get(t,e){if(!St.includes(e))return t[e];let s=Ct[e];return s||(s=Ct[e]=function(...t){Pt.set(this,Tt.get(this)[e](...t))}),s}};async function*Dt(...t){let e=this;if(e instanceof IDBCursor||(e=await e.openCursor(...t)),!e)return;const s=new Proxy(e,kt);for(Tt.set(s,e),$t.set(s,vt(e));e;)yield s,e=await(Pt.get(s)||e.continue()),Pt.delete(s)}function It(t,e){return e===Symbol.asyncIterator&&lt(t,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===e&&lt(t,[IDBIndex,IDBObjectStore])}_t(t=>({...t,get:(e,s,i)=>It(e,s)?Dt:t.get(e,s,i),has:(e,s)=>It(e,s)||t.has(e,s)}));const Ot="tareas";async function Ut(){return function(t,e,{blocked:s,upgrade:i,blocking:n,terminated:r}={}){const o=indexedDB.open(t,e),a=bt(o);return i&&o.addEventListener("upgradeneeded",t=>{i(bt(o.result),t.oldVersion,t.newVersion,bt(o.transaction),t)}),s&&o.addEventListener("blocked",t=>s(t.oldVersion,t.newVersion,t)),a.then(t=>{r&&t.addEventListener("close",()=>r()),n&&t.addEventListener("versionchange",t=>n(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}("todo-db",1,{upgrade(t){t.objectStoreNames.contains(Ot)||t.createObjectStore(Ot,{keyPath:"id"})}})}class Mt extends ct{static properties={tareas:{type:Array},nuevaTarea:{type:String}};constructor(){super(),this.tareas=[],this.nuevaTarea=""}connectedCallback(){super.connectedCallback(),this._loadTasks()}async _loadTasks(){this.tareas=await async function(){return(await Ut()).getAll(Ot)}()}static styles=o`
        :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding-block: 24px;
        }

        form {
            display: flex;
            gap: 8px;
            width: 100%;
            align-items: center;
            padding-bottom: 24px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 8px;
        }

        input[type="text"] {
            padding: 8px 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
            width: 100%;
            font-size: 0.95rem;
        }

        button.add {
            padding: 8px 12px;
            border: none;
            background-color: #2b8aef;
            color: white;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
        }

        button.add:disabled {
            opacity: 0.6;
            cursor: default;
        }

        .list {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            width: 100%;
        }

        @media (min-width: 420px) {
            .container { max-width: 420px; margin: 0 auto; }
        }
    `;render(){return W`
            <div class="container">
                <form @submit=${this._onSubmit}>
                    <input type="text" placeholder="Nueva tarea..." .value=${this.nuevaTarea} @input=${this._onInput}>
                    <button class="add" type="submit">Añadir</button>
                </form>
                ${this.tareas.map(t=>W`
                    <todo-item
                        .texto=${t.texto}
                        .completada=${t.completada}
                        data-id=${t.id}
                        @tarea-completada=${this._onTareaCompletada}
                        @tarea-eliminada=${this._onTareaEliminada}>
                    </todo-item>
                `)}
            </div>

        `}_onInput(t){this.nuevaTarea=t.target.value}async _onSubmit(t){t.preventDefault();const e=this.nuevaTarea.trim();if(!e)return;const s={id:Date.now(),texto:e,completada:!1};await async function(t){const e=await Ut();await e.put(Ot,t)}(s),this.tareas=[...this.tareas,s],this.nuevaTarea=""}async _onTareaCompletada(t){const e=Number(t.target.getAttribute("data-id")),s=t.detail.completada,i=this.tareas.find(t=>t.id===e);if(i){const t={...i,completada:s};await async function(t){const e=await Ut();await e.put(Ot,t)}(t),this.tareas=this.tareas.map(s=>s.id===e?t:s)}}async _onTareaEliminada(t){const e=Number(t.target.getAttribute("data-id"));await async function(t){const e=await Ut();await e.delete(Ot,t)}(e),this.tareas=this.tareas.filter(t=>t.id!==e)}}customElements.define("todo-list",Mt);const Nt=t.p+"./assets/logo.png";class Bt extends ct{static styles=o`
        .to-do-list--container {

        }

        header {
            display: flex;
            align-items: center;
            margin-top: 24px;
            margin-bottom: 0;
            background-color: #2b8aef;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            border-radius: 8px;
        }

        .logo {
            width: 60px;
            height: 60px;
            padding: 8px;
        }

        h1 {
            font-family: Arial, sans-serif;
            color: #fff;
            font-size: 24px;
        }

        @media (min-width: 420px) {
            header { max-width: 420px; margin: 0 auto; margin-top: 24px;}
            h1 {font-size: 32px;}
            logo {margin-right: 8px;}
        }
    `;static properties={};render(){return W`
            <div id="to-do-list--container">
                <header>
                    <img class="logo" src="${Nt}" alt="To do list app logo">
                    <h1>To do List</h1>
                </header>
                <todo-list></todo-list>
            </div>
        `}}customElements.define("app-component",Bt),document.getElementById("app").innerHTML="<app-component></app-component>"})();