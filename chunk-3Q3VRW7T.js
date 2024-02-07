import{C as te,I as ne,L as $,N as D,Pa as ae,R as m,S as f,T as p,aa as ie,ca as re,da as se,f as q,ia as U,l as H,m as x,q as b,sa as oe,w as Q,y as ee}from"./chunk-QQGNICN3.js";var le=null;function j(){return le}function Ht(e){le??=e}var ue=class{},R=new m(""),he=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=D({token:t,factory:()=>p(Le),providedIn:"platform"});let e=t;return e})();var Le=(()=>{let t=class t extends he{constructor(){super(),this._doc=p(R),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return j().getBaseHref(this._doc)}onPopState(n){let r=j().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=j().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,s){this._history.pushState(n,r,s)}replaceState(n,r,s){this._history.replaceState(n,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=D({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function fe(e,t){if(e.length==0)return t;if(t.length==0)return e;let i=0;return e.endsWith("/")&&i++,t.startsWith("/")&&i++,i==2?e+t.substring(1):i==1?e+t:e+"/"+t}function ce(e){let t=e.match(/#|\?|$/),i=t&&t.index||e.length,n=i-(e[i-1]==="/"?1:0);return e.slice(0,n)+e.slice(i)}function F(e){return e&&e[0]!=="?"?"?"+e:e}var z=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=D({token:t,factory:()=>p(Ne),providedIn:"root"});let e=t;return e})(),Be=new m(""),Ne=(()=>{let t=class t extends z{constructor(n,r){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??p(R).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return fe(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+F(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${r}${s}`:r}pushState(n,r,s,a){let o=this.prepareExternalUrl(s+F(a));this._platformLocation.pushState(n,r,o)}replaceState(n,r,s,a){let o=this.prepareExternalUrl(s+F(a));this._platformLocation.replaceState(n,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(r){return new(r||t)(f(he),f(Be,8))},t.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var ke=(()=>{let t=class t{constructor(n){this._subject=new oe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=Ue(ce(de(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+F(r))}normalize(n){return t.stripTrailingSlash($e(this._basePath,de(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",s=null){this._locationStrategy.pushState(s,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+F(r)),s)}replaceState(n,r="",s=null){this._locationStrategy.replaceState(s,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+F(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(s=>s(n,r))}subscribe(n,r,s){return this._subject.subscribe({next:n,error:r,complete:s})}};t.normalizeQueryParams=F,t.joinWithSlash=fe,t.stripTrailingSlash=ce,t.\u0275fac=function(r){return new(r||t)(f(z))},t.\u0275prov=D({token:t,factory:()=>xe(),providedIn:"root"});let e=t;return e})();function xe(){return new ke(f(z))}function $e(e,t){if(!e||!t.startsWith(e))return t;let i=t.substring(e.length);return i===""||["/",";","?","#"].includes(i[0])?i:t}function de(e){return e.replace(/\/index.html$/,"")}function Ue(e){if(new RegExp("^(https?:)?//").test(e)){let[,i]=e.split(/\/\/[^\/]+/);return i}return e}function ge(e,t){t=encodeURIComponent(t);for(let i of e.split(";")){let n=i.indexOf("="),[r,s]=n==-1?[i,""]:[i.slice(0,n),i.slice(n+1)];if(r.trim()===t)return decodeURIComponent(s)}return null}var Qt="browser",je="server";function en(e){return e===je}var M=class{};var T=class{},_=class{},w=class e{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(i=>{let n=i.indexOf(":");if(n>0){let r=i.slice(0,n),s=r.toLowerCase(),a=i.slice(n+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(a):this.headers.set(s,[a])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((i,n)=>{this.setHeaderEntries(n,i)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([i,n])=>{this.setHeaderEntries(i,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let i=this.headers.get(t.toLowerCase());return i&&i.length>0?i[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,i){return this.clone({name:t,value:i,op:"a"})}set(t,i){return this.clone({name:t,value:i,op:"s"})}delete(t,i){return this.clone({name:t,value:i,op:"d"})}maybeSetNormalizedName(t,i){this.normalizedNames.has(i)||this.normalizedNames.set(i,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(i=>{this.headers.set(i,t.headers.get(i)),this.normalizedNames.set(i,t.normalizedNames.get(i))})}clone(t){let i=new e;return i.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,i.lazyUpdate=(this.lazyUpdate||[]).concat([t]),i}applyUpdate(t){let i=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,i);let r=(t.op==="a"?this.headers.get(i):void 0)||[];r.push(...n),this.headers.set(i,r);break;case"d":let s=t.value;if(!s)this.headers.delete(i),this.normalizedNames.delete(i);else{let a=this.headers.get(i);if(!a)return;a=a.filter(o=>s.indexOf(o)===-1),a.length===0?(this.headers.delete(i),this.normalizedNames.delete(i)):this.headers.set(i,a)}break}}setHeaderEntries(t,i){let n=(Array.isArray(i)?i:[i]).map(s=>s.toString()),r=t.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(i=>t(this.normalizedNames.get(i),this.headers.get(i)))}};var G=class{encodeKey(t){return De(t)}encodeValue(t){return De(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function Ve(e,t){let i=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[a,o]=s==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,s)),t.decodeValue(r.slice(s+1))],l=i.get(a)||[];l.push(o),i.set(a,l)}),i}var Ge=/%(\d[a-f0-9])/gi,Ye={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function De(e){return encodeURIComponent(e).replace(Ge,(t,i)=>Ye[i]??t)}function O(e){return`${e}`}var E=class e{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new G,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Ve(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(i=>{let n=t.fromObject[i],r=Array.isArray(n)?n.map(O):[O(n)];this.map.set(i,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let i=this.map.get(t);return i?i[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,i){return this.clone({param:t,value:i,op:"a"})}appendAll(t){let i=[];return Object.keys(t).forEach(n=>{let r=t[n];Array.isArray(r)?r.forEach(s=>{i.push({param:n,value:s,op:"a"})}):i.push({param:n,value:r,op:"a"})}),this.clone(i)}set(t,i){return this.clone({param:t,value:i,op:"s"})}delete(t,i){return this.clone({param:t,value:i,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let i=this.encoder.encodeKey(t);return this.map.get(t).map(n=>i+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let i=new e({encoder:this.encoder});return i.cloneFrom=this.cloneFrom||this,i.updates=(this.updates||[]).concat(t),i}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let i=(t.op==="a"?this.map.get(t.param):void 0)||[];i.push(O(t.value)),this.map.set(t.param,i);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],r=n.indexOf(O(t.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Y=class{constructor(){this.map=new Map}set(t,i){return this.map.set(t,i),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function We(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function pe(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function me(e){return typeof Blob<"u"&&e instanceof Blob}function ye(e){return typeof FormData<"u"&&e instanceof FormData}function Ze(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var S=class e{constructor(t,i,n,r){this.url=i,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase();let s;if(We(this.method)||r?(this.body=n!==void 0?n:null,s=r):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new w,this.context??=new Y,!this.params)this.params=new E,this.urlWithParams=i;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=i;else{let o=i.indexOf("?"),l=o===-1?"?":o<i.length-1?"&":"";this.urlWithParams=i+l+a}}}serializeBody(){return this.body===null?null:pe(this.body)||me(this.body)||ye(this.body)||Ze(this.body)||typeof this.body=="string"?this.body:this.body instanceof E?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ye(this.body)?null:me(this.body)?this.body.type||null:pe(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof E?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let i=t.method||this.method,n=t.url||this.url,r=t.responseType||this.responseType,s=t.body!==void 0?t.body:this.body,a=t.withCredentials!==void 0?t.withCredentials:this.withCredentials,o=t.reportProgress!==void 0?t.reportProgress:this.reportProgress,l=t.headers||this.headers,u=t.params||this.params,y=t.context??this.context;return t.setHeaders!==void 0&&(l=Object.keys(t.setHeaders).reduce((A,g)=>A.set(g,t.setHeaders[g]),l)),t.setParams&&(u=Object.keys(t.setParams).reduce((A,g)=>A.set(g,t.setParams[g]),u)),new e(i,n,s,{params:u,headers:l,context:y,reportProgress:o,responseType:r,withCredentials:a})}},v=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(v||{}),I=class{constructor(t,i=B.Ok,n="OK"){this.headers=t.headers||new w,this.status=t.status!==void 0?t.status:i,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},W=class e extends I{constructor(t={}){super(t),this.type=v.ResponseHeader}clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},P=class e extends I{constructor(t={}){super(t),this.type=v.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},L=class extends I{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},B=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(B||{});function V(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Ke=(()=>{let t=class t{constructor(n){this.handler=n}request(n,r,s={}){let a;if(n instanceof S)a=n;else{let u;s.headers instanceof w?u=s.headers:u=new w(s.headers);let y;s.params&&(s.params instanceof E?y=s.params:y=new E({fromObject:s.params})),a=new S(n,r,s.body!==void 0?s.body:null,{headers:u,context:s.context,params:y,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=x(a).pipe(ee(u=>this.handler.handle(u)));if(n instanceof S||s.observe==="events")return o;let l=o.pipe(Q(u=>u instanceof P));switch(s.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(b(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return u.body}));case"blob":return l.pipe(b(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new Error("Response is not a Blob.");return u.body}));case"text":return l.pipe(b(u=>{if(u.body!==null&&typeof u.body!="string")throw new Error("Response is not a string.");return u.body}));case"json":default:return l.pipe(b(u=>u.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new E().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,s={}){return this.request("PATCH",n,V(s,r))}post(n,r,s={}){return this.request("POST",n,V(s,r))}put(n,r,s={}){return this.request("PUT",n,V(s,r))}};t.\u0275fac=function(r){return new(r||t)(f(T))},t.\u0275prov=D({token:t,factory:t.\u0275fac});let e=t;return e})();function Xe(e,t){return t(e)}function Je(e,t,i){return(n,r)=>se(i,()=>t(n,s=>e(s,r)))}var we=new m(""),qe=new m(""),He=new m("");var Ee=(()=>{let t=class t extends T{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=p(ae);let s=p(He,{optional:!0});this.backend=s??n}handle(n){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(we),...this.injector.get(qe,[])]));this.chain=s.reduceRight((a,o)=>Je(a,o,this.injector),Xe)}let r=this.pendingTasks.add();return this.chain(n,s=>this.backend.handle(s)).pipe(te(()=>this.pendingTasks.remove(r)))}};t.\u0275fac=function(r){return new(r||t)(f(_),f(re))},t.\u0275prov=D({token:t,factory:t.\u0275fac});let e=t;return e})();var Qe=/^\)\]\}',?\n/;function et(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var Fe=(()=>{let t=class t{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new $(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?H(r.\u0275loadImpl()):x(null)).pipe(ne(()=>new q(a=>{let o=r.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((c,d)=>o.setRequestHeader(c,d.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let c=n.detectContentTypeHeader();c!==null&&o.setRequestHeader("Content-Type",c)}if(n.responseType){let c=n.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let l=n.serializeBody(),u=null,y=()=>{if(u!==null)return u;let c=o.statusText||"OK",d=new w(o.getAllResponseHeaders()),C=et(o)||n.url;return u=new W({headers:d,status:o.status,statusText:c,url:C}),u},A=()=>{let{headers:c,status:d,statusText:C,url:J}=y(),h=null;d!==B.NoContent&&(h=typeof o.response>"u"?o.responseText:o.response),d===0&&(d=h?B.Ok:0);let k=d>=200&&d<300;if(n.responseType==="json"&&typeof h=="string"){let Ce=h;h=h.replace(Qe,"");try{h=h!==""?JSON.parse(h):null}catch(ve){h=Ce,k&&(k=!1,h={error:ve,text:h})}}k?(a.next(new P({body:h,headers:c,status:d,statusText:C,url:J||void 0})),a.complete()):a.error(new L({error:h,headers:c,status:d,statusText:C,url:J||void 0}))},g=c=>{let{url:d}=y(),C=new L({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:d||void 0});a.error(C)},Z=!1,K=c=>{Z||(a.next(y()),Z=!0);let d={type:v.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),n.responseType==="text"&&o.responseText&&(d.partialText=o.responseText),a.next(d)},X=c=>{let d={type:v.UploadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),a.next(d)};return o.addEventListener("load",A),o.addEventListener("error",g),o.addEventListener("timeout",g),o.addEventListener("abort",g),n.reportProgress&&(o.addEventListener("progress",K),l!==null&&o.upload&&o.upload.addEventListener("progress",X)),o.send(l),a.next({type:v.Sent}),()=>{o.removeEventListener("error",g),o.removeEventListener("abort",g),o.removeEventListener("load",A),o.removeEventListener("timeout",g),n.reportProgress&&(o.removeEventListener("progress",K),l!==null&&o.upload&&o.upload.removeEventListener("progress",X)),o.readyState!==o.DONE&&o.abort()}})))}};t.\u0275fac=function(r){return new(r||t)(f(M))},t.\u0275prov=D({token:t,factory:t.\u0275fac});let e=t;return e})(),Ae=new m(""),tt="XSRF-TOKEN",nt=new m("",{providedIn:"root",factory:()=>tt}),it="X-XSRF-TOKEN",rt=new m("",{providedIn:"root",factory:()=>it}),N=class{},st=(()=>{let t=class t{constructor(n,r,s){this.doc=n,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=ge(n,this.cookieName),this.lastCookieString=n),this.lastToken}};t.\u0275fac=function(r){return new(r||t)(f(R),f(U),f(nt))},t.\u0275prov=D({token:t,factory:t.\u0275fac});let e=t;return e})();function ot(e,t){let i=e.url.toLowerCase();if(!p(Ae)||e.method==="GET"||e.method==="HEAD"||i.startsWith("http://")||i.startsWith("https://"))return t(e);let n=p(N).getToken(),r=p(rt);return n!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,n)})),t(e)}function wn(...e){let t=[Ke,Fe,Ee,{provide:T,useExisting:Ee},{provide:_,useExisting:Fe},{provide:we,useValue:ot,multi:!0},{provide:Ae,useValue:!0},{provide:N,useClass:st}];for(let i of e)t.push(...i.\u0275providers);return ie(t)}export{j as a,Ht as b,ue as c,R as d,ke as e,ge as f,Qt as g,en as h,M as i,Ke as j,wn as k};