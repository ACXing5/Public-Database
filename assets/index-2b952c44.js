function J2(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in t)){const r=Object.getOwnPropertyDescriptor(i,s);r&&Object.defineProperty(t,s,r.get?r:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Z2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var PT={exports:{}},Nf={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eD=Symbol.for("react.transitional.element"),tD=Symbol.for("react.fragment");function BT(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var s in e)s!=="key"&&(n[s]=e[s])}else n=e;return e=n.ref,{$$typeof:eD,type:t,key:i,ref:e!==void 0?e:null,props:n}}Nf.Fragment=tD;Nf.jsx=BT;Nf.jsxs=BT;PT.exports=Nf;var E=PT.exports,jT={exports:{}},H={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy=Symbol.for("react.transitional.element"),nD=Symbol.for("react.portal"),iD=Symbol.for("react.fragment"),sD=Symbol.for("react.strict_mode"),rD=Symbol.for("react.profiler"),oD=Symbol.for("react.consumer"),aD=Symbol.for("react.context"),lD=Symbol.for("react.forward_ref"),uD=Symbol.for("react.suspense"),cD=Symbol.for("react.memo"),FT=Symbol.for("react.lazy"),hD=Symbol.for("react.activity"),x0=Symbol.iterator;function fD(t){return t===null||typeof t!="object"?null:(t=x0&&t[x0]||t["@@iterator"],typeof t=="function"?t:null)}var VT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qT=Object.assign,HT={};function ea(t,e,n){this.props=t,this.context=e,this.refs=HT,this.updater=n||VT}ea.prototype.isReactComponent={};ea.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ea.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $T(){}$T.prototype=ea.prototype;function _y(t,e,n){this.props=t,this.context=e,this.refs=HT,this.updater=n||VT}var Ey=_y.prototype=new $T;Ey.constructor=_y;qT(Ey,ea.prototype);Ey.isPureReactComponent=!0;var D0=Array.isArray;function pm(){}var Se={H:null,A:null,T:null,S:null},GT=Object.prototype.hasOwnProperty;function wy(t,e,n){var i=n.ref;return{$$typeof:vy,type:t,key:e,ref:i!==void 0?i:null,props:n}}function dD(t,e){return wy(t.type,e,t.props)}function Ty(t){return typeof t=="object"&&t!==null&&t.$$typeof===vy}function pD(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var O0=/\/+/g;function Gd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pD(""+t.key):e.toString(36)}function mD(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(pm,pm):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function jr(t,e,n,i,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(r){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vy:case nD:o=!0;break;case FT:return o=t._init,jr(o(t._payload),e,n,i,s)}}if(o)return s=s(t),o=i===""?"."+Gd(t,0):i,D0(s)?(n="",o!=null&&(n=o.replace(O0,"$&/")+"/"),jr(s,e,n,"",function(u){return u})):s!=null&&(Ty(s)&&(s=dD(s,n+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(O0,"$&/")+"/")+o)),e.push(s)),1;o=0;var a=i===""?".":i+":";if(D0(t))for(var l=0;l<t.length;l++)i=t[l],r=a+Gd(i,l),o+=jr(i,e,n,r,s);else if(l=fD(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=a+Gd(i,l++),o+=jr(i,e,n,r,s);else if(r==="object"){if(typeof t.then=="function")return jr(mD(t),e,n,i,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return o}function tc(t,e,n){if(t==null)return t;var i=[],s=0;return jr(t,i,"","",function(r){return e.call(n,r,s++)}),i}function gD(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var M0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yD={map:tc,forEach:function(t,e,n){tc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tc(t,function(){e++}),e},toArray:function(t){return tc(t,function(e){return e})||[]},only:function(t){if(!Ty(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Activity=hD;H.Children=yD;H.Component=ea;H.Fragment=iD;H.Profiler=rD;H.PureComponent=_y;H.StrictMode=sD;H.Suspense=uD;H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se;H.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Se.H.useMemoCache(t)}};H.cache=function(t){return function(){return t.apply(null,arguments)}};H.cacheSignal=function(){return null};H.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=qT({},t.props),s=t.key;if(e!=null)for(r in e.key!==void 0&&(s=""+e.key),e)!GT.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var o=Array(r),a=0;a<r;a++)o[a]=arguments[a+2];i.children=o}return wy(t.type,s,i)};H.createContext=function(t){return t={$$typeof:aD,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:oD,_context:t},t};H.createElement=function(t,e,n){var i,s={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)GT.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=e[i]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var a=Array(o),l=0;l<o;l++)a[l]=arguments[l+2];s.children=a}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)s[i]===void 0&&(s[i]=o[i]);return wy(t,r,s)};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:lD,render:t}};H.isValidElement=Ty;H.lazy=function(t){return{$$typeof:FT,_payload:{_status:-1,_result:t},_init:gD}};H.memo=function(t,e){return{$$typeof:cD,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Se.T,n={};Se.T=n;try{var i=t(),s=Se.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(pm,M0)}catch(r){M0(r)}finally{e!==null&&n.types!==null&&(e.types=n.types),Se.T=e}};H.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()};H.use=function(t){return Se.H.use(t)};H.useActionState=function(t,e,n){return Se.H.useActionState(t,e,n)};H.useCallback=function(t,e){return Se.H.useCallback(t,e)};H.useContext=function(t){return Se.H.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t,e){return Se.H.useDeferredValue(t,e)};H.useEffect=function(t,e){return Se.H.useEffect(t,e)};H.useEffectEvent=function(t){return Se.H.useEffectEvent(t)};H.useId=function(){return Se.H.useId()};H.useImperativeHandle=function(t,e,n){return Se.H.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Se.H.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Se.H.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Se.H.useMemo(t,e)};H.useOptimistic=function(t,e){return Se.H.useOptimistic(t,e)};H.useReducer=function(t,e,n){return Se.H.useReducer(t,e,n)};H.useRef=function(t){return Se.H.useRef(t)};H.useState=function(t){return Se.H.useState(t)};H.useSyncExternalStore=function(t,e,n){return Se.H.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Se.H.useTransition()};H.version="19.2.1";jT.exports=H;var S=jT.exports;const KT=Z2(S),vD=J2({__proto__:null,default:KT},[S]);var YT={exports:{}},Rf={},QT={exports:{}},XT={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Q){var G=D.length;D.push(Q);e:for(;0<G;){var Me=G-1>>>1,Qe=D[Me];if(0<s(Qe,Q))D[Me]=Q,D[G]=Qe,G=Me;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Q=D[0],G=D.pop();if(G!==Q){D[0]=G;e:for(var Me=0,Qe=D.length,Ju=Qe>>>1;Me<Ju;){var Zu=2*(Me+1)-1,$d=D[Zu],Ns=Zu+1,ec=D[Ns];if(0>s($d,G))Ns<Qe&&0>s(ec,$d)?(D[Me]=ec,D[Ns]=G,Me=Ns):(D[Me]=$d,D[Zu]=G,Me=Zu);else if(Ns<Qe&&0>s(ec,G))D[Me]=ec,D[Ns]=G,Me=Ns;else break e}}return Q}function s(D,Q){var G=D.sortIndex-Q.sortIndex;return G!==0?G:D.id-Q.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,d=!1,g=!1,v=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function w(D){for(var Q=n(u);Q!==null;){if(Q.callback===null)i(u);else if(Q.startTime<=D)i(u),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(u)}}function N(D){if(v=!1,w(D),!g)if(n(l)!==null)g=!0,O||(O=!0,Oi());else{var Q=n(u);Q!==null&&Hd(N,Q.startTime-D)}}var O=!1,R=-1,k=5,U=-1;function Y(){return _?!0:!(t.unstable_now()-U<k)}function on(){if(_=!1,O){var D=t.unstable_now();U=D;var Q=!0;try{e:{g=!1,v&&(v=!1,p(R),R=-1),d=!0;var G=f;try{t:{for(w(D),h=n(l);h!==null&&!(h.expirationTime>D&&Y());){var Me=h.callback;if(typeof Me=="function"){h.callback=null,f=h.priorityLevel;var Qe=Me(h.expirationTime<=D);if(D=t.unstable_now(),typeof Qe=="function"){h.callback=Qe,w(D),Q=!0;break t}h===n(l)&&i(l),w(D)}else i(l);h=n(l)}if(h!==null)Q=!0;else{var Ju=n(u);Ju!==null&&Hd(N,Ju.startTime-D),Q=!1}}break e}finally{h=null,f=G,d=!1}Q=void 0}}finally{Q?Oi():O=!1}}}var Oi;if(typeof y=="function")Oi=function(){y(on)};else if(typeof MessageChannel<"u"){var I0=new MessageChannel,W2=I0.port2;I0.port1.onmessage=on,Oi=function(){W2.postMessage(null)}}else Oi=function(){m(on,0)};function Hd(D,Q){R=m(function(){D(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var Q=3;break;default:Q=f}var G=f;f=Q;try{return D()}finally{f=G}},t.unstable_requestPaint=function(){_=!0},t.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=f;f=D;try{return Q()}finally{f=G}},t.unstable_scheduleCallback=function(D,Q,G){var Me=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Me+G:Me):G=Me,D){case 1:var Qe=-1;break;case 2:Qe=250;break;case 5:Qe=1073741823;break;case 4:Qe=1e4;break;default:Qe=5e3}return Qe=G+Qe,D={id:c++,callback:Q,priorityLevel:D,startTime:G,expirationTime:Qe,sortIndex:-1},G>Me?(D.sortIndex=G,e(u,D),n(l)===null&&D===n(u)&&(v?(p(R),R=-1):v=!0,Hd(N,G-Me))):(D.sortIndex=Qe,e(l,D),g||d||(g=!0,O||(O=!0,Oi()))),D},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(D){var Q=f;return function(){var G=f;f=Q;try{return D.apply(this,arguments)}finally{f=G}}}})(XT);QT.exports=XT;var _D=QT.exports,WT={exports:{}},Dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ED=S;function JT(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Mi(){}var Rt={d:{f:Mi,r:function(){throw Error(JT(522))},D:Mi,C:Mi,L:Mi,m:Mi,X:Mi,S:Mi,M:Mi},p:0,findDOMNode:null},wD=Symbol.for("react.portal");function TD(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wD,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var $a=ED.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function If(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Rt;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(JT(299));return TD(t,e,null,n)};Dt.flushSync=function(t){var e=$a.T,n=Rt.p;try{if($a.T=null,Rt.p=2,t)return t()}finally{$a.T=e,Rt.p=n,Rt.d.f()}};Dt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Rt.d.C(t,e))};Dt.prefetchDNS=function(t){typeof t=="string"&&Rt.d.D(t)};Dt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=If(n,e.crossOrigin),s=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Rt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&Rt.d.X(t,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Dt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=If(e.as,e.crossOrigin);Rt.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Rt.d.M(t)};Dt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=If(n,e.crossOrigin);Rt.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Dt.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=If(e.as,e.crossOrigin);Rt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Rt.d.m(t)};Dt.requestFormReset=function(t){Rt.d.r(t)};Dt.unstable_batchedUpdates=function(t,e){return t(e)};Dt.useFormState=function(t,e,n){return $a.H.useFormState(t,e,n)};Dt.useFormStatus=function(){return $a.H.useHostTransitionStatus()};Dt.version="19.2.1";function ZT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ZT)}catch(t){console.error(t)}}ZT(),WT.exports=Dt;var bD=WT.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=_D,eb=S,SD=bD;function b(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function tb(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ru(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nb(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ib(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function k0(t){if(ru(t)!==t)throw Error(b(188))}function CD(t){var e=t.alternate;if(!e){if(e=ru(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return k0(s),t;if(r===i)return k0(s),e;r=r.sibling}throw Error(b(188))}if(n.return!==i.return)n=s,i=r;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o){for(a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==i)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function sb(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=sb(t),e!==null)return e;t=t.sibling}return null}var Ce=Object.assign,AD=Symbol.for("react.element"),nc=Symbol.for("react.transitional.element"),La=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),rb=Symbol.for("react.strict_mode"),mm=Symbol.for("react.profiler"),ob=Symbol.for("react.consumer"),ni=Symbol.for("react.context"),by=Symbol.for("react.forward_ref"),gm=Symbol.for("react.suspense"),ym=Symbol.for("react.suspense_list"),Sy=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),vm=Symbol.for("react.activity"),ND=Symbol.for("react.memo_cache_sentinel"),L0=Symbol.iterator;function Ea(t){return t===null||typeof t!="object"?null:(t=L0&&t[L0]||t["@@iterator"],typeof t=="function"?t:null)}var RD=Symbol.for("react.client.reference");function _m(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===RD?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case mm:return"Profiler";case rb:return"StrictMode";case gm:return"Suspense";case ym:return"SuspenseList";case vm:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case La:return"Portal";case ni:return t.displayName||"Context";case ob:return(t._context.displayName||"Context")+".Consumer";case by:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sy:return e=t.displayName||null,e!==null?e:_m(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return _m(t(e))}catch{}}return null}var Ua=Array.isArray,B=eb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=SD.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gs={pending:!1,data:null,method:null,action:null},Em=[],Yr=-1;function Gn(t){return{current:t}}function it(t){0>Yr||(t.current=Em[Yr],Em[Yr]=null,Yr--)}function _e(t,e){Yr++,Em[Yr]=t.current,t.current=e}var Bn=Gn(null),gl=Gn(null),Ji=Gn(null),ch=Gn(null);function hh(t,e){switch(_e(Ji,e),_e(gl,t),_e(Bn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?FE(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=FE(e),t=AC(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(Bn),_e(Bn,t)}function Ro(){it(Bn),it(gl),it(Ji)}function wm(t){t.memoizedState!==null&&_e(ch,t);var e=Bn.current,n=AC(e,t.type);e!==n&&(_e(gl,t),_e(Bn,n))}function fh(t){gl.current===t&&(it(Bn),it(gl)),ch.current===t&&(it(ch),Nl._currentValue=Gs)}var Kd,U0;function xs(t){if(Kd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kd=e&&e[1]||"",U0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kd+t+U0}var Yd=!1;function Qd(t,e){if(!t||Yd)return"";Yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(d){var f=d}Reflect.construct(t,[],h)}else{try{h.call()}catch(d){f=d}t.call(h.prototype)}}else{try{throw Error()}catch(d){f=d}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(d){if(d&&f&&typeof d.stack=="string")return[d.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),o=r[0],a=r[1];if(o&&a){var l=o.split(`
`),u=a.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<u.length&&!u[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===u.length)for(i=l.length-1,s=u.length-1;1<=i&&0<=s&&l[i]!==u[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==u[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==u[s]){var c=`
`+l[i].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=i&&0<=s);break}}}finally{Yd=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?xs(n):""}function ID(t,e){switch(t.tag){case 26:case 27:case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return t.child!==e&&e!==null?xs("Suspense Fallback"):xs("Suspense");case 19:return xs("SuspenseList");case 0:case 15:return Qd(t.type,!1);case 11:return Qd(t.type.render,!1);case 1:return Qd(t.type,!0);case 31:return xs("Activity");default:return""}}function z0(t){try{var e="",n=null;do e+=ID(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Tm=Object.prototype.hasOwnProperty,Cy=Ye.unstable_scheduleCallback,Xd=Ye.unstable_cancelCallback,xD=Ye.unstable_shouldYield,DD=Ye.unstable_requestPaint,Qt=Ye.unstable_now,OD=Ye.unstable_getCurrentPriorityLevel,ab=Ye.unstable_ImmediatePriority,lb=Ye.unstable_UserBlockingPriority,dh=Ye.unstable_NormalPriority,MD=Ye.unstable_LowPriority,ub=Ye.unstable_IdlePriority,kD=Ye.log,LD=Ye.unstable_setDisableYieldValue,ou=null,Xt=null;function $i(t){if(typeof kD=="function"&&LD(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(ou,t)}catch{}}var Wt=Math.clz32?Math.clz32:PD,UD=Math.log,zD=Math.LN2;function PD(t){return t>>>=0,t===0?32:31-(UD(t)/zD|0)|0}var ic=256,sc=262144,rc=4194304;function Ds(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xf(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var s=0,r=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var a=i&134217727;return a!==0?(i=a&~r,i!==0?s=Ds(i):(o&=a,o!==0?s=Ds(o):n||(n=a&~t,n!==0&&(s=Ds(n))))):(a=i&~r,a!==0?s=Ds(a):o!==0?s=Ds(o):n||(n=i&~t,n!==0&&(s=Ds(n)))),s===0?0:e!==0&&e!==s&&!(e&r)&&(r=s&-s,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:s}function au(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function BD(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cb(){var t=rc;return rc<<=1,!(rc&62914560)&&(rc=4194304),t}function Wd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function lu(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jD(t,e,n,i,s,r){var o=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var a=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(n=o&~n;0<n;){var c=31-Wt(n),h=1<<c;a[c]=0,l[c]=-1;var f=u[c];if(f!==null)for(u[c]=null,c=0;c<f.length;c++){var d=f[c];d!==null&&(d.lane&=-536870913)}n&=~h}i!==0&&hb(t,i,0),r!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=r&~(o&~e))}function hb(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Wt(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function fb(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wt(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}function db(t,e){var n=e&-e;return n=n&42?1:Ay(n),n&(t.suspendedLanes|e)?0:n}function Ay(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ny(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function pb(){var t=le.p;return t!==0?t:(t=window.event,t===void 0?32:zC(t.type))}function P0(t,e){var n=le.p;try{return le.p=t,e()}finally{le.p=n}}var ws=Math.random().toString(36).slice(2),ut="__reactFiber$"+ws,Ft="__reactProps$"+ws,ta="__reactContainer$"+ws,bm="__reactEvents$"+ws,FD="__reactListeners$"+ws,VD="__reactHandles$"+ws,B0="__reactResources$"+ws,uu="__reactMarker$"+ws;function Ry(t){delete t[ut],delete t[Ft],delete t[bm],delete t[FD],delete t[VD]}function Qr(t){var e=t[ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ta]||n[ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=GE(t);t!==null;){if(n=t[ut])return n;t=GE(t)}return e}t=n,n=t.parentNode}return null}function na(t){if(t=t[ut]||t[ta]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function za(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(b(33))}function uo(t){var e=t[B0];return e||(e=t[B0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function et(t){t[uu]=!0}var mb=new Set,gb={};function Tr(t,e){Io(t,e),Io(t+"Capture",e)}function Io(t,e){for(gb[t]=e,t=0;t<e.length;t++)mb.add(e[t])}var qD=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),j0={},F0={};function HD(t){return Tm.call(F0,t)?!0:Tm.call(j0,t)?!1:qD.test(t)?F0[t]=!0:(j0[t]=!0,!1)}function kc(t,e,n){if(HD(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function oc(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Yn(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yb(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $D(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){n=""+o,r.call(this,o)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sm(t){if(!t._valueTracker){var e=yb(t)?"checked":"value";t._valueTracker=$D(t,e,""+t[e])}}function vb(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=yb(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ph(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var GD=/[\n"\\]/g;function hn(t){return t.replace(GD,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Cm(t,e,n,i,s,r,o,a){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ln(e)):t.value!==""+ln(e)&&(t.value=""+ln(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?Am(t,o,ln(e)):n!=null?Am(t,o,ln(n)):i!=null&&t.removeAttribute("value"),s==null&&r!=null&&(t.defaultChecked=!!r),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?t.name=""+ln(a):t.removeAttribute("name")}function _b(t,e,n,i,s,r,o,a){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){Sm(t);return}n=n!=null?""+ln(n):"",e=e!=null?""+ln(e):n,a||e===t.value||(t.value=e),t.defaultValue=e}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=a?t.checked:!!i,t.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Sm(t)}function Am(t,e,n){e==="number"&&ph(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function co(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ln(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Eb(t,e,n){if(e!=null&&(e=""+ln(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ln(n):""}function wb(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(b(92));if(Ua(i)){if(1<i.length)throw Error(b(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=ln(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),Sm(t)}function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var KD=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function V0(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||KD.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Tb(t,e,n){if(e!=null&&typeof e!="object")throw Error(b(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var s in e)i=e[s],e.hasOwnProperty(s)&&n[s]!==i&&V0(t,s,i)}else for(var r in e)e.hasOwnProperty(r)&&V0(t,r,e[r])}function Iy(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var YD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),QD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lc(t){return QD.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ii(){}var Nm=null;function xy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xr=null,ho=null;function q0(t){var e=na(t);if(e&&(t=e.stateNode)){var n=t[Ft]||null;e:switch(t=e.stateNode,e.type){case"input":if(Cm(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+hn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=i[Ft]||null;if(!s)throw Error(b(90));Cm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&vb(i)}break e;case"textarea":Eb(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&co(t,!!n.multiple,e,!1)}}}var Jd=!1;function bb(t,e,n){if(Jd)return t(e,n);Jd=!0;try{var i=t(e);return i}finally{if(Jd=!1,(Xr!==null||ho!==null)&&(Vf(),Xr&&(e=Xr,t=ho,ho=Xr=null,q0(e),t)))for(e=0;e<t.length;e++)q0(t[e])}}function yl(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Ft]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rm=!1;if(mi)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){Rm=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{Rm=!1}var Gi=null,Dy=null,Uc=null;function Sb(){if(Uc)return Uc;var t,e=Dy,n=e.length,i,s="value"in Gi?Gi.value:Gi.textContent,r=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===s[r-i];i++);return Uc=s.slice(t,1<i?1-i:void 0)}function zc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ac(){return!0}function H0(){return!1}function qt(t){function e(n,i,s,r,o){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(r):r[a]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ac:H0,this.isPropagationStopped=H0,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),e}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=qt(br),cu=Ce({},br,{view:0,detail:0}),XD=qt(cu),Zd,ep,Ta,Of=Ce({},cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ta&&(Ta&&t.type==="mousemove"?(Zd=t.screenX-Ta.screenX,ep=t.screenY-Ta.screenY):ep=Zd=0,Ta=t),Zd)},movementY:function(t){return"movementY"in t?t.movementY:ep}}),$0=qt(Of),WD=Ce({},Of,{dataTransfer:0}),JD=qt(WD),ZD=Ce({},cu,{relatedTarget:0}),tp=qt(ZD),eO=Ce({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),tO=qt(eO),nO=Ce({},br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iO=qt(nO),sO=Ce({},br,{data:0}),G0=qt(sO),rO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lO(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aO[t])?!!e[t]:!1}function Oy(){return lO}var uO=Ce({},cu,{key:function(t){if(t.key){var e=rO[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oO[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oy,charCode:function(t){return t.type==="keypress"?zc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cO=qt(uO),hO=Ce({},Of,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K0=qt(hO),fO=Ce({},cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oy}),dO=qt(fO),pO=Ce({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),mO=qt(pO),gO=Ce({},Of,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yO=qt(gO),vO=Ce({},br,{newState:0,oldState:0}),_O=qt(vO),EO=[9,13,27,32],My=mi&&"CompositionEvent"in window,Ga=null;mi&&"documentMode"in document&&(Ga=document.documentMode);var wO=mi&&"TextEvent"in window&&!Ga,Cb=mi&&(!My||Ga&&8<Ga&&11>=Ga),Y0=String.fromCharCode(32),Q0=!1;function Ab(t,e){switch(t){case"keyup":return EO.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nb(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function TO(t,e){switch(t){case"compositionend":return Nb(e);case"keypress":return e.which!==32?null:(Q0=!0,Y0);case"textInput":return t=e.data,t===Y0&&Q0?null:t;default:return null}}function bO(t,e){if(Wr)return t==="compositionend"||!My&&Ab(t,e)?(t=Sb(),Uc=Dy=Gi=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cb&&e.locale!=="ko"?null:e.data;default:return null}}var SO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!SO[t.type]:e==="textarea"}function Rb(t,e,n,i){Xr?ho?ho.push(i):ho=[i]:Xr=i,e=Oh(e,"onChange"),0<e.length&&(n=new Df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ka=null,vl=null;function CO(t){bC(t,0)}function Mf(t){var e=za(t);if(vb(e))return t}function W0(t,e){if(t==="change")return e}var Ib=!1;if(mi){var np;if(mi){var ip="oninput"in document;if(!ip){var J0=document.createElement("div");J0.setAttribute("oninput","return;"),ip=typeof J0.oninput=="function"}np=ip}else np=!1;Ib=np&&(!document.documentMode||9<document.documentMode)}function Z0(){Ka&&(Ka.detachEvent("onpropertychange",xb),vl=Ka=null)}function xb(t){if(t.propertyName==="value"&&Mf(vl)){var e=[];Rb(e,vl,t,xy(t)),bb(CO,e)}}function AO(t,e,n){t==="focusin"?(Z0(),Ka=e,vl=n,Ka.attachEvent("onpropertychange",xb)):t==="focusout"&&Z0()}function NO(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mf(vl)}function RO(t,e){if(t==="click")return Mf(e)}function IO(t,e){if(t==="input"||t==="change")return Mf(e)}function xO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:xO;function _l(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Tm.call(e,s)||!tn(t[s],e[s]))return!1}return!0}function eE(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tE(t,e){var n=eE(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eE(n)}}function Db(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Db(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ob(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ph(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ph(t.document)}return e}function ky(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var DO=mi&&"documentMode"in document&&11>=document.documentMode,Jr=null,Im=null,Ya=null,xm=!1;function nE(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xm||Jr==null||Jr!==ph(i)||(i=Jr,"selectionStart"in i&&ky(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ya&&_l(Ya,i)||(Ya=i,i=Oh(Im,"onSelect"),0<i.length&&(e=new Df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Jr)))}function Rs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},sp={},Mb={};mi&&(Mb=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function Sr(t){if(sp[t])return sp[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mb)return sp[t]=e[n];return t}var kb=Sr("animationend"),Lb=Sr("animationiteration"),Ub=Sr("animationstart"),OO=Sr("transitionrun"),MO=Sr("transitionstart"),kO=Sr("transitioncancel"),zb=Sr("transitionend"),Pb=new Map,Dm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dm.push("scrollEnd");function xn(t,e){Pb.set(t,e),Tr(e,[t])}var mh=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},an=[],eo=0,Ly=0;function kf(){for(var t=eo,e=Ly=eo=0;e<t;){var n=an[e];an[e++]=null;var i=an[e];an[e++]=null;var s=an[e];an[e++]=null;var r=an[e];if(an[e++]=null,i!==null&&s!==null){var o=i.pending;o===null?s.next=s:(s.next=o.next,o.next=s),i.pending=s}r!==0&&Bb(n,s,r)}}function Lf(t,e,n,i){an[eo++]=t,an[eo++]=e,an[eo++]=n,an[eo++]=i,Ly|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Uy(t,e,n,i){return Lf(t,e,n,i),gh(t)}function Cr(t,e){return Lf(t,null,null,e),gh(t)}function Bb(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(s=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,s&&e!==null&&(s=31-Wt(n),t=r.hiddenUpdates,i=t[s],i===null?t[s]=[e]:i.push(e),e.lane=n|536870912),r):null}function gh(t){if(50<il)throw il=0,Jm=null,Error(b(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var to={};function LO(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,i){return new LO(t,e,n,i)}function zy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ui(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function jb(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Pc(t,e,n,i,s,r){var o=0;if(i=t,typeof t=="function")zy(t)&&(o=1);else if(typeof t=="string")o=jM(t,n,Bn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case vm:return t=Gt(31,n,e,s),t.elementType=vm,t.lanes=r,t;case Kr:return Ks(n.children,s,r,e);case rb:o=8,s|=24;break;case mm:return t=Gt(12,n,e,s|2),t.elementType=mm,t.lanes=r,t;case gm:return t=Gt(13,n,e,s),t.elementType=gm,t.lanes=r,t;case ym:return t=Gt(19,n,e,s),t.elementType=ym,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ni:o=10;break e;case ob:o=9;break e;case by:o=11;break e;case Sy:o=14;break e;case Li:o=16,i=null;break e}o=29,n=Error(b(130,t===null?"null":typeof t,"")),i=null}return e=Gt(o,n,e,s),e.elementType=t,e.type=i,e.lanes=r,e}function Ks(t,e,n,i){return t=Gt(7,t,i,e),t.lanes=n,t}function rp(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function Fb(t){var e=Gt(18,null,null,0);return e.stateNode=t,e}function op(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var iE=new WeakMap;function fn(t,e){if(typeof t=="object"&&t!==null){var n=iE.get(t);return n!==void 0?n:(e={value:t,source:e,stack:z0(e)},iE.set(t,e),e)}return{value:t,source:e,stack:z0(e)}}var no=[],io=0,yh=null,El=0,un=[],cn=0,fs=null,On=1,Mn="";function Zn(t,e){no[io++]=El,no[io++]=yh,yh=t,El=e}function Vb(t,e,n){un[cn++]=On,un[cn++]=Mn,un[cn++]=fs,fs=t;var i=On;t=Mn;var s=32-Wt(i)-1;i&=~(1<<s),n+=1;var r=32-Wt(e)+s;if(30<r){var o=s-s%5;r=(i&(1<<o)-1).toString(32),i>>=o,s-=o,On=1<<32-Wt(e)+s|n<<s|i,Mn=r+t}else On=1<<r|n<<s|i,Mn=t}function Py(t){t.return!==null&&(Zn(t,1),Vb(t,1,0))}function By(t){for(;t===yh;)yh=no[--io],no[io]=null,El=no[--io],no[io]=null;for(;t===fs;)fs=un[--cn],un[cn]=null,Mn=un[--cn],un[cn]=null,On=un[--cn],un[cn]=null}function qb(t,e){un[cn++]=On,un[cn++]=Mn,un[cn++]=fs,On=e.id,Mn=e.overflow,fs=t}var ct=null,Te=null,ne=!1,Zi=null,dn=!1,Om=Error(b(519));function ds(t){var e=Error(b(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wl(fn(e,t)),Om}function sE(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[ut]=t,e[Ft]=i,n){case"dialog":X("cancel",e),X("close",e);break;case"iframe":case"object":case"embed":X("load",e);break;case"video":case"audio":for(n=0;n<Cl.length;n++)X(Cl[n],e);break;case"source":X("error",e);break;case"img":case"image":case"link":X("error",e),X("load",e);break;case"details":X("toggle",e);break;case"input":X("invalid",e),_b(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":X("invalid",e);break;case"textarea":X("invalid",e),wb(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||CC(e.textContent,n)?(i.popover!=null&&(X("beforetoggle",e),X("toggle",e)),i.onScroll!=null&&X("scroll",e),i.onScrollEnd!=null&&X("scrollend",e),i.onClick!=null&&(e.onclick=ii),e=!0):e=!1,e||ds(t,!0)}function rE(t){for(ct=t.return;ct;)switch(ct.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:ct=ct.return}}function kr(t){if(t!==ct)return!1;if(!ne)return rE(t),ne=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||ig(t.type,t.memoizedProps)),n=!n),n&&Te&&ds(t),rE(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));Te=$E(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));Te=$E(t)}else e===27?(e=Te,Ts(t.type)?(t=ag,ag=null,Te=t):Te=e):Te=ct?yn(t.stateNode.nextSibling):null;return!0}function nr(){Te=ct=null,ne=!1}function ap(){var t=Zi;return t!==null&&(Lt===null?Lt=t:Lt.push.apply(Lt,t),Zi=null),t}function wl(t){Zi===null?Zi=[t]:Zi.push(t)}var Mm=Gn(null),Ar=null,si=null;function zi(t,e,n){_e(Mm,e._currentValue),e._currentValue=n}function ci(t){t._currentValue=Mm.current,it(Mm)}function km(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Lm(t,e,n,i){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var r=s.dependencies;if(r!==null){var o=s.child;r=r.firstContext;e:for(;r!==null;){var a=r;r=s;for(var l=0;l<e.length;l++)if(a.context===e[l]){r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),km(r.return,n,t),i||(o=null);break e}r=a.next}}else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,r=o.alternate,r!==null&&(r.lanes|=n),km(o,n,t),o=null}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}}function ia(t,e,n,i){t=null;for(var s=e,r=!1;s!==null;){if(!r){if(s.flags&524288)r=!0;else if(s.flags&262144)break}if(s.tag===10){var o=s.alternate;if(o===null)throw Error(b(387));if(o=o.memoizedProps,o!==null){var a=s.type;tn(s.pendingProps.value,o.value)||(t!==null?t.push(a):t=[a])}}else if(s===ch.current){if(o=s.alternate,o===null)throw Error(b(387));o.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(Nl):t=[Nl])}s=s.return}t!==null&&Lm(e,t,n,i),e.flags|=262144}function vh(t){for(t=t.firstContext;t!==null;){if(!tn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){Ar=t,si=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ht(t){return Hb(Ar,t)}function lc(t,e){return Ar===null&&ir(t),Hb(t,e)}function Hb(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},si===null){if(t===null)throw Error(b(308));si=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else si=si.next=e;return n}var UO=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},zO=Ye.unstable_scheduleCallback,PO=Ye.unstable_NormalPriority,Fe={$$typeof:ni,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jy(){return{controller:new UO,data:new Map,refCount:0}}function hu(t){t.refCount--,t.refCount===0&&zO(PO,function(){t.controller.abort()})}var Qa=null,Um=0,Do=0,fo=null;function BO(t,e){if(Qa===null){var n=Qa=[];Um=0,Do=hv(),fo={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Um++,e.then(oE,oE),e}function oE(){if(--Um===0&&Qa!==null){fo!==null&&(fo.status="fulfilled");var t=Qa;Qa=null,Do=0,fo=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function jO(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var s=0;s<n.length;s++)(0,n[s])(e)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var aE=B.S;B.S=function(t,e){sC=Qt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&BO(t,e),aE!==null&&aE(t,e)};var Ys=Gn(null);function Fy(){var t=Ys.current;return t!==null?t:ge.pooledCache}function Bc(t,e){e===null?_e(Ys,Ys.current):_e(Ys,e.pool)}function $b(){var t=Fy();return t===null?null:{parent:Fe._currentValue,pool:t}}var sa=Error(b(460)),Vy=Error(b(474)),Uf=Error(b(542)),_h={then:function(){}};function lE(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gb(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ii,ii),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,cE(t),t;default:if(typeof e.status=="string")e.then(ii,ii);else{if(t=ge,t!==null&&100<t.shellSuspendCounter)throw Error(b(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=i}},function(i){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,cE(t),t}throw Qs=e,sa}}function Os(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Qs=n,sa):n}}var Qs=null;function uE(){if(Qs===null)throw Error(b(459));var t=Qs;return Qs=null,t}function cE(t){if(t===sa||t===Uf)throw Error(b(483))}var po=null,Tl=0;function uc(t){var e=Tl;return Tl+=1,po===null&&(po=[]),Gb(po,t,e)}function ba(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function cc(t,e){throw e.$$typeof===AD?Error(b(525)):(t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Kb(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function i(m){for(var p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function s(m,p){return m=ui(m,p),m.index=0,m.sibling=null,m}function r(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=67108866,p):y):(m.flags|=67108866,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function a(m,p,y,w){return p===null||p.tag!==6?(p=rp(y,m.mode,w),p.return=m,p):(p=s(p,y),p.return=m,p)}function l(m,p,y,w){var N=y.type;return N===Kr?c(m,p,y.props.children,w,y.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Li&&Os(N)===p.type)?(p=s(p,y.props),ba(p,y),p.return=m,p):(p=Pc(y.type,y.key,y.props,null,m.mode,w),ba(p,y),p.return=m,p)}function u(m,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=op(y,m.mode,w),p.return=m,p):(p=s(p,y.children||[]),p.return=m,p)}function c(m,p,y,w,N){return p===null||p.tag!==7?(p=Ks(y,m.mode,w,N),p.return=m,p):(p=s(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=rp(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case nc:return y=Pc(p.type,p.key,p.props,null,m.mode,y),ba(y,p),y.return=m,y;case La:return p=op(p,m.mode,y),p.return=m,p;case Li:return p=Os(p),h(m,p,y)}if(Ua(p)||Ea(p))return p=Ks(p,m.mode,y,null),p.return=m,p;if(typeof p.then=="function")return h(m,uc(p),y);if(p.$$typeof===ni)return h(m,lc(m,p),y);cc(m,p)}return null}function f(m,p,y,w){var N=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return N!==null?null:a(m,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nc:return y.key===N?l(m,p,y,w):null;case La:return y.key===N?u(m,p,y,w):null;case Li:return y=Os(y),f(m,p,y,w)}if(Ua(y)||Ea(y))return N!==null?null:c(m,p,y,w,null);if(typeof y.then=="function")return f(m,p,uc(y),w);if(y.$$typeof===ni)return f(m,p,lc(m,y),w);cc(m,y)}return null}function d(m,p,y,w,N){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return m=m.get(y)||null,a(p,m,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case nc:return m=m.get(w.key===null?y:w.key)||null,l(p,m,w,N);case La:return m=m.get(w.key===null?y:w.key)||null,u(p,m,w,N);case Li:return w=Os(w),d(m,p,y,w,N)}if(Ua(w)||Ea(w))return m=m.get(y)||null,c(p,m,w,N,null);if(typeof w.then=="function")return d(m,p,y,uc(w),N);if(w.$$typeof===ni)return d(m,p,y,lc(p,w),N);cc(p,w)}return null}function g(m,p,y,w){for(var N=null,O=null,R=p,k=p=0,U=null;R!==null&&k<y.length;k++){R.index>k?(U=R,R=null):U=R.sibling;var Y=f(m,R,y[k],w);if(Y===null){R===null&&(R=U);break}t&&R&&Y.alternate===null&&e(m,R),p=r(Y,p,k),O===null?N=Y:O.sibling=Y,O=Y,R=U}if(k===y.length)return n(m,R),ne&&Zn(m,k),N;if(R===null){for(;k<y.length;k++)R=h(m,y[k],w),R!==null&&(p=r(R,p,k),O===null?N=R:O.sibling=R,O=R);return ne&&Zn(m,k),N}for(R=i(R);k<y.length;k++)U=d(R,m,k,y[k],w),U!==null&&(t&&U.alternate!==null&&R.delete(U.key===null?k:U.key),p=r(U,p,k),O===null?N=U:O.sibling=U,O=U);return t&&R.forEach(function(on){return e(m,on)}),ne&&Zn(m,k),N}function v(m,p,y,w){if(y==null)throw Error(b(151));for(var N=null,O=null,R=p,k=p=0,U=null,Y=y.next();R!==null&&!Y.done;k++,Y=y.next()){R.index>k?(U=R,R=null):U=R.sibling;var on=f(m,R,Y.value,w);if(on===null){R===null&&(R=U);break}t&&R&&on.alternate===null&&e(m,R),p=r(on,p,k),O===null?N=on:O.sibling=on,O=on,R=U}if(Y.done)return n(m,R),ne&&Zn(m,k),N;if(R===null){for(;!Y.done;k++,Y=y.next())Y=h(m,Y.value,w),Y!==null&&(p=r(Y,p,k),O===null?N=Y:O.sibling=Y,O=Y);return ne&&Zn(m,k),N}for(R=i(R);!Y.done;k++,Y=y.next())Y=d(R,m,k,Y.value,w),Y!==null&&(t&&Y.alternate!==null&&R.delete(Y.key===null?k:Y.key),p=r(Y,p,k),O===null?N=Y:O.sibling=Y,O=Y);return t&&R.forEach(function(Oi){return e(m,Oi)}),ne&&Zn(m,k),N}function _(m,p,y,w){if(typeof y=="object"&&y!==null&&y.type===Kr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case nc:e:{for(var N=y.key;p!==null;){if(p.key===N){if(N=y.type,N===Kr){if(p.tag===7){n(m,p.sibling),w=s(p,y.props.children),w.return=m,m=w;break e}}else if(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Li&&Os(N)===p.type){n(m,p.sibling),w=s(p,y.props),ba(w,y),w.return=m,m=w;break e}n(m,p);break}else e(m,p);p=p.sibling}y.type===Kr?(w=Ks(y.props.children,m.mode,w,y.key),w.return=m,m=w):(w=Pc(y.type,y.key,y.props,null,m.mode,w),ba(w,y),w.return=m,m=w)}return o(m);case La:e:{for(N=y.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),w=s(p,y.children||[]),w.return=m,m=w;break e}else{n(m,p);break}else e(m,p);p=p.sibling}w=op(y,m.mode,w),w.return=m,m=w}return o(m);case Li:return y=Os(y),_(m,p,y,w)}if(Ua(y))return g(m,p,y,w);if(Ea(y)){if(N=Ea(y),typeof N!="function")throw Error(b(150));return y=N.call(y),v(m,p,y,w)}if(typeof y.then=="function")return _(m,p,uc(y),w);if(y.$$typeof===ni)return _(m,p,lc(m,y),w);cc(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),w=s(p,y),w.return=m,m=w):(n(m,p),w=rp(y,m.mode,w),w.return=m,m=w),o(m)):n(m,p)}return function(m,p,y,w){try{Tl=0;var N=_(m,p,y,w);return po=null,N}catch(R){if(R===sa||R===Uf)throw R;var O=Gt(29,R,null,m.mode);return O.lanes=w,O.return=m,O}finally{}}}var sr=Kb(!0),Yb=Kb(!1),Ui=!1;function qy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function es(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ts(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ae&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,e=gh(t),Bb(t,null,n),e}return Lf(t,i,e,n),gh(t)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fb(t,n)}}function lp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?s=r=e:r=r.next=e}else s=r=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Pm=!1;function Wa(){if(Pm){var t=fo;if(t!==null)throw t}}function Ja(t,e,n,i){Pm=!1;var s=t.updateQueue;Ui=!1;var r=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?r=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(r!==null){var h=s.baseState;o=0,c=u=l=null,a=r;do{var f=a.lane&-536870913,d=f!==a.lane;if(d?(te&f)===f:(i&f)===f){f!==0&&f===Do&&(Pm=!0),c!==null&&(c=c.next={lane:0,tag:a.tag,payload:a.payload,callback:null,next:null});e:{var g=t,v=a;f=e;var _=n;switch(v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(_,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(_,h,f):g,f==null)break e;h=Ce({},h,f);break e;case 2:Ui=!0}}f=a.callback,f!==null&&(t.flags|=64,d&&(t.flags|=8192),d=s.callbacks,d===null?s.callbacks=[f]:d.push(f))}else d={lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=h):c=c.next=d,o|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;d=a,a=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(1);c===null&&(l=h),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=c,r===null&&(s.shared.lanes=0),ms|=o,t.lanes=o,t.memoizedState=h}}function Qb(t,e){if(typeof t!="function")throw Error(b(191,t));t.call(e)}function Xb(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Qb(n[t],e)}var Oo=Gn(null),Eh=Gn(0);function hE(t,e){t=_i,_e(Eh,t),_e(Oo,e),_i=t|e.baseLanes}function Bm(){_e(Eh,_i),_e(Oo,Oo.current)}function Hy(){_i=Eh.current,it(Oo),it(Eh)}var nn=Gn(null),gn=null;function Pi(t){var e=t.alternate;_e(Le,Le.current&1),_e(nn,t),gn===null&&(e===null||Oo.current!==null||e.memoizedState!==null)&&(gn=t)}function jm(t){_e(Le,Le.current),_e(nn,t),gn===null&&(gn=t)}function Wb(t){t.tag===22?(_e(Le,Le.current),_e(nn,t),gn===null&&(gn=t)):Bi()}function Bi(){_e(Le,Le.current),_e(nn,nn.current)}function $t(t){it(nn),gn===t&&(gn=null),it(Le)}var Le=Gn(0);function wh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||rg(n)||og(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gi=0,$=null,me=null,Pe=null,Th=!1,mo=!1,rr=!1,bh=0,bl=0,go=null,FO=0;function Ie(){throw Error(b(321))}function $y(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Gy(t,e,n,i,s,r){return gi=r,$=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,B.H=t===null||t.memoizedState===null?RS:iv,rr=!1,r=n(i,s),rr=!1,mo&&(r=Zb(e,n,i,s)),Jb(t),r}function Jb(t){B.H=Sl;var e=me!==null&&me.next!==null;if(gi=0,Pe=me=$=null,Th=!1,bl=0,go=null,e)throw Error(b(300));t===null||Ve||(t=t.dependencies,t!==null&&vh(t)&&(Ve=!0))}function Zb(t,e,n,i){$=t;var s=0;do{if(mo&&(go=null),bl=0,mo=!1,25<=s)throw Error(b(301));if(s+=1,Pe=me=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}B.H=IS,r=e(n,i)}while(mo);return r}function VO(){var t=B.H,e=t.useState()[0];return e=typeof e.then=="function"?fu(e):e,t=t.useState()[0],(me!==null?me.memoizedState:null)!==t&&($.flags|=1024),e}function Ky(){var t=bh!==0;return bh=0,t}function Yy(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Qy(t){if(Th){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Th=!1}gi=0,Pe=me=$=null,mo=!1,bl=bh=0,go=null}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?$.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function Ue(){if(me===null){var t=$.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=Pe===null?$.memoizedState:Pe.next;if(e!==null)Pe=e,me=t;else{if(t===null)throw $.alternate===null?Error(b(467)):Error(b(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Pe===null?$.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function zf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fu(t){var e=bl;return bl+=1,go===null&&(go=[]),t=Gb(go,t,e),e=$,(Pe===null?e.memoizedState:Pe.next)===null&&(e=e.alternate,B.H=e===null||e.memoizedState===null?RS:iv),t}function Pf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fu(t);if(t.$$typeof===ni)return ht(t)}throw Error(b(438,String(t)))}function Xy(t){var e=null,n=$.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=$.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=zf(),$.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=ND;return e.index++,n}function yi(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=Ue();return Wy(e,me,t)}function Wy(t,e,n){var i=t.queue;if(i===null)throw Error(b(311));i.lastRenderedReducer=n;var s=t.baseQueue,r=i.pending;if(r!==null){if(s!==null){var o=s.next;s.next=r.next,r.next=o}e.baseQueue=s=r,i.pending=null}if(r=t.baseState,s===null)t.memoizedState=r;else{e=s.next;var a=o=null,l=null,u=e,c=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(te&h)===h:(gi&h)===h){var f=u.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===Do&&(c=!0);else if((gi&f)===f){u=u.next,f===Do&&(c=!0);continue}else h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(a=l=h,o=r):l=l.next=h,$.lanes|=f,ms|=f;h=u.action,rr&&n(r,h),r=u.hasEagerState?u.eagerState:n(r,h)}else f={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(a=l=f,o=r):l=l.next=f,$.lanes|=h,ms|=h;u=u.next}while(u!==null&&u!==e);if(l===null?o=r:l.next=a,!tn(r,t.memoizedState)&&(Ve=!0,c&&(n=fo,n!==null)))throw n;t.memoizedState=r,t.baseState=o,t.baseQueue=l,i.lastRenderedState=r}return s===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function up(t){var e=Ue(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,r=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do r=t(r,o.action),o=o.next;while(o!==s);tn(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function eS(t,e,n){var i=$,s=Ue(),r=ne;if(r){if(n===void 0)throw Error(b(407));n=n()}else n=e();var o=!tn((me||s).memoizedState,n);if(o&&(s.memoizedState=n,Ve=!0),s=s.queue,Jy(iS.bind(null,i,s,t),[t]),s.getSnapshot!==e||o||Pe!==null&&Pe.memoizedState.tag&1){if(i.flags|=2048,Mo(9,{destroy:void 0},nS.bind(null,i,s,n,e),null),ge===null)throw Error(b(349));r||gi&127||tS(i,e,n)}return n}function tS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$.updateQueue,e===null?(e=zf(),$.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nS(t,e,n,i){e.value=n,e.getSnapshot=i,sS(e)&&rS(t)}function iS(t,e,n){return n(function(){sS(e)&&rS(t)})}function sS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function rS(t){var e=Cr(t,2);e!==null&&jt(e,t,2)}function Fm(t){var e=At();if(typeof t=="function"){var n=t;if(t=n(),rr){$i(!0);try{n()}finally{$i(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:t},e}function oS(t,e,n,i){return t.baseState=n,Wy(t,me,typeof i=="function"?i:yi)}function qO(t,e,n,i,s){if(jf(t))throw Error(b(485));if(t=e.action,t!==null){var r={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};B.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,aS(e,r)):(r.next=n.next,e.pending=n.next=r)}}function aS(t,e){var n=e.action,i=e.payload,s=t.state;if(e.isTransition){var r=B.T,o={};B.T=o;try{var a=n(s,i),l=B.S;l!==null&&l(o,a),fE(t,e,a)}catch(u){Vm(t,e,u)}finally{r!==null&&o.types!==null&&(r.types=o.types),B.T=r}}else try{r=n(s,i),fE(t,e,r)}catch(u){Vm(t,e,u)}}function fE(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){dE(t,e,i)},function(i){return Vm(t,e,i)}):dE(t,e,n)}function dE(t,e,n){e.status="fulfilled",e.value=n,lS(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,aS(t,n)))}function Vm(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,lS(e),e=e.next;while(e!==i)}t.action=null}function lS(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function uS(t,e){return e}function pE(t,e){if(ne){var n=ge.formState;if(n!==null){e:{var i=$;if(ne){if(Te){t:{for(var s=Te,r=dn;s.nodeType!==8;){if(!r){s=null;break t}if(s=yn(s.nextSibling),s===null){s=null;break t}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Te=yn(s.nextSibling),i=s.data==="F!";break e}}ds(i)}i=!1}i&&(e=n[0])}}return n=At(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uS,lastRenderedState:e},n.queue=i,n=CS.bind(null,$,i),i.dispatch=n,i=Fm(!1),r=nv.bind(null,$,!1,i.queue),i=At(),s={state:e,dispatch:null,action:t,pending:null},i.queue=s,n=qO.bind(null,$,s,r,n),s.dispatch=n,i.memoizedState=t,[e,n,!1]}function mE(t){var e=Ue();return cS(e,me,t)}function cS(t,e,n){if(e=Wy(t,e,uS)[0],t=jc(yi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=fu(e)}catch(o){throw o===sa?Uf:o}else i=e;e=Ue();var s=e.queue,r=s.dispatch;return n!==e.memoizedState&&($.flags|=2048,Mo(9,{destroy:void 0},HO.bind(null,s,n),null)),[i,r,t]}function HO(t,e){t.action=e}function gE(t){var e=Ue(),n=me;if(n!==null)return cS(e,n,t);Ue(),e=e.memoizedState,n=Ue();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Mo(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=$.updateQueue,e===null&&(e=zf(),$.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function hS(){return Ue().memoizedState}function Fc(t,e,n,i){var s=At();$.flags|=t,s.memoizedState=Mo(1|e,{destroy:void 0},n,i===void 0?null:i)}function Bf(t,e,n,i){var s=Ue();i=i===void 0?null:i;var r=s.memoizedState.inst;me!==null&&i!==null&&$y(i,me.memoizedState.deps)?s.memoizedState=Mo(e,r,n,i):($.flags|=t,s.memoizedState=Mo(1|e,r,n,i))}function yE(t,e){Fc(8390656,8,t,e)}function Jy(t,e){Bf(2048,8,t,e)}function $O(t){$.flags|=4;var e=$.updateQueue;if(e===null)e=zf(),$.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function fS(t){var e=Ue().memoizedState;return $O({ref:e,nextImpl:t}),function(){if(ae&2)throw Error(b(440));return e.impl.apply(void 0,arguments)}}function dS(t,e){return Bf(4,2,t,e)}function pS(t,e){return Bf(4,4,t,e)}function mS(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gS(t,e,n){n=n!=null?n.concat([t]):null,Bf(4,4,mS.bind(null,e,t),n)}function Zy(){}function yS(t,e){var n=Ue();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&$y(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vS(t,e){var n=Ue();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&$y(e,i[1]))return i[0];if(i=t(),rr){$i(!0);try{t()}finally{$i(!1)}}return n.memoizedState=[i,e],i}function ev(t,e,n){return n===void 0||gi&1073741824&&!(te&261930)?t.memoizedState=e:(t.memoizedState=n,t=oC(),$.lanes|=t,ms|=t,n)}function _S(t,e,n,i){return tn(n,e)?n:Oo.current!==null?(t=ev(t,n,i),tn(t,e)||(Ve=!0),t):!(gi&42)||gi&1073741824&&!(te&261930)?(Ve=!0,t.memoizedState=n):(t=oC(),$.lanes|=t,ms|=t,e)}function ES(t,e,n,i,s){var r=le.p;le.p=r!==0&&8>r?r:8;var o=B.T,a={};B.T=a,nv(t,!1,e,n);try{var l=s(),u=B.S;if(u!==null&&u(a,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=jO(l,i);Za(t,e,c,Jt(t))}else Za(t,e,i,Jt(t))}catch(h){Za(t,e,{then:function(){},status:"rejected",reason:h},Jt())}finally{le.p=r,o!==null&&a.types!==null&&(o.types=a.types),B.T=o}}function GO(){}function qm(t,e,n,i){if(t.tag!==5)throw Error(b(476));var s=wS(t).queue;ES(t,s,e,Gs,n===null?GO:function(){return TS(t),n(i)})}function wS(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Gs,baseState:Gs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:Gs},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function TS(t){var e=wS(t);e.next===null&&(e=t.alternate.memoizedState),Za(t,e.next.queue,{},Jt())}function tv(){return ht(Nl)}function bS(){return Ue().memoizedState}function SS(){return Ue().memoizedState}function KO(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Jt();t=es(n);var i=ts(e,t,n);i!==null&&(jt(i,e,n),Xa(i,e,n)),e={cache:jy()},t.payload=e;return}e=e.return}}function YO(t,e,n){var i=Jt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},jf(t)?AS(e,n):(n=Uy(t,e,n,i),n!==null&&(jt(n,t,i),NS(n,e,i)))}function CS(t,e,n){var i=Jt();Za(t,e,n,i)}function Za(t,e,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(jf(t))AS(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var o=e.lastRenderedState,a=r(o,n);if(s.hasEagerState=!0,s.eagerState=a,tn(a,o))return Lf(t,e,s,0),ge===null&&kf(),!1}catch{}finally{}if(n=Uy(t,e,s,i),n!==null)return jt(n,t,i),NS(n,e,i),!0}return!1}function nv(t,e,n,i){if(i={lane:2,revertLane:hv(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},jf(t)){if(e)throw Error(b(479))}else e=Uy(t,n,i,2),e!==null&&jt(e,t,2)}function jf(t){var e=t.alternate;return t===$||e!==null&&e===$}function AS(t,e){mo=Th=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function NS(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fb(t,n)}}var Sl={readContext:ht,use:Pf,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useLayoutEffect:Ie,useInsertionEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useSyncExternalStore:Ie,useId:Ie,useHostTransitionStatus:Ie,useFormState:Ie,useActionState:Ie,useOptimistic:Ie,useMemoCache:Ie,useCacheRefresh:Ie};Sl.useEffectEvent=Ie;var RS={readContext:ht,use:Pf,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:ht,useEffect:yE,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Fc(4194308,4,mS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fc(4194308,4,t,e)},useInsertionEffect:function(t,e){Fc(4,2,t,e)},useMemo:function(t,e){var n=At();e=e===void 0?null:e;var i=t();if(rr){$i(!0);try{t()}finally{$i(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=At();if(n!==void 0){var s=n(e);if(rr){$i(!0);try{n(e)}finally{$i(!1)}}}else s=e;return i.memoizedState=i.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},i.queue=t,t=t.dispatch=YO.bind(null,$,t),[i.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:function(t){t=Fm(t);var e=t.queue,n=CS.bind(null,$,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Zy,useDeferredValue:function(t,e){var n=At();return ev(n,t,e)},useTransition:function(){var t=Fm(!1);return t=ES.bind(null,$,t.queue,!0,!1),At().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=$,s=At();if(ne){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),ge===null)throw Error(b(349));te&127||tS(i,e,n)}s.memoizedState=n;var r={value:n,getSnapshot:e};return s.queue=r,yE(iS.bind(null,i,r,t),[t]),i.flags|=2048,Mo(9,{destroy:void 0},nS.bind(null,i,r,n,e),null),n},useId:function(){var t=At(),e=ge.identifierPrefix;if(ne){var n=Mn,i=On;n=(i&~(1<<32-Wt(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=bh++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=FO++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:tv,useFormState:pE,useActionState:pE,useOptimistic:function(t){var e=At();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=nv.bind(null,$,!0,n),n.dispatch=e,[t,e]},useMemoCache:Xy,useCacheRefresh:function(){return At().memoizedState=KO.bind(null,$)},useEffectEvent:function(t){var e=At(),n={impl:t};return e.memoizedState=n,function(){if(ae&2)throw Error(b(440));return n.impl.apply(void 0,arguments)}}},iv={readContext:ht,use:Pf,useCallback:yS,useContext:ht,useEffect:Jy,useImperativeHandle:gS,useInsertionEffect:dS,useLayoutEffect:pS,useMemo:vS,useReducer:jc,useRef:hS,useState:function(){return jc(yi)},useDebugValue:Zy,useDeferredValue:function(t,e){var n=Ue();return _S(n,me.memoizedState,t,e)},useTransition:function(){var t=jc(yi)[0],e=Ue().memoizedState;return[typeof t=="boolean"?t:fu(t),e]},useSyncExternalStore:eS,useId:bS,useHostTransitionStatus:tv,useFormState:mE,useActionState:mE,useOptimistic:function(t,e){var n=Ue();return oS(n,me,t,e)},useMemoCache:Xy,useCacheRefresh:SS};iv.useEffectEvent=fS;var IS={readContext:ht,use:Pf,useCallback:yS,useContext:ht,useEffect:Jy,useImperativeHandle:gS,useInsertionEffect:dS,useLayoutEffect:pS,useMemo:vS,useReducer:up,useRef:hS,useState:function(){return up(yi)},useDebugValue:Zy,useDeferredValue:function(t,e){var n=Ue();return me===null?ev(n,t,e):_S(n,me.memoizedState,t,e)},useTransition:function(){var t=up(yi)[0],e=Ue().memoizedState;return[typeof t=="boolean"?t:fu(t),e]},useSyncExternalStore:eS,useId:bS,useHostTransitionStatus:tv,useFormState:gE,useActionState:gE,useOptimistic:function(t,e){var n=Ue();return me!==null?oS(n,me,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Xy,useCacheRefresh:SS};IS.useEffectEvent=fS;function cp(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hm={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),s=es(i);s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,i),e!==null&&(jt(e,t,i),Xa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),s=es(i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,i),e!==null&&(jt(e,t,i),Xa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=es(n);i.tag=2,e!=null&&(i.callback=e),e=ts(t,i,n),e!==null&&(jt(e,t,n),Xa(e,t,n))}};function vE(t,e,n,i,s,r,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,o):e.prototype&&e.prototype.isPureReactComponent?!_l(n,i)||!_l(s,r):!0}function _E(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Hm.enqueueReplaceState(e,e.state,null)}function or(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Ce({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}function xS(t){mh(t)}function DS(t){console.error(t)}function OS(t){mh(t)}function Sh(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function EE(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function $m(t,e,n){return n=es(n),n.tag=3,n.payload={element:null},n.callback=function(){Sh(t,e)},n}function MS(t){return t=es(t),t.tag=3,t}function kS(t,e,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;t.payload=function(){return s(r)},t.callback=function(){EE(e,n,i)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){EE(e,n,i),typeof s!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var a=i.stack;this.componentDidCatch(i.value,{componentStack:a!==null?a:""})})}function QO(t,e,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&ia(e,n,s,!0),n=nn.current,n!==null){switch(n.tag){case 31:case 13:return gn===null?Ih():n.alternate===null&&xe===0&&(xe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===_h?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),wp(t,i,s)),!1;case 22:return n.flags|=65536,i===_h?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),wp(t,i,s)),!1}throw Error(b(435,n.tag))}return wp(t,i,s),Ih(),!1}if(ne)return e=nn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=s,i!==Om&&(t=Error(b(422),{cause:i}),wl(fn(t,n)))):(i!==Om&&(e=Error(b(423),{cause:i}),wl(fn(e,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,i=fn(i,n),s=$m(t.stateNode,i,s),lp(t,s),xe!==4&&(xe=2)),!1;var r=Error(b(520),{cause:i});if(r=fn(r,n),nl===null?nl=[r]:nl.push(r),xe!==4&&(xe=2),e===null)return!0;i=fn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=$m(n.stateNode,i,t),lp(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ns===null||!ns.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=MS(s),kS(s,t,n,i),lp(n,s),!1}n=n.return}while(n!==null);return!1}var sv=Error(b(461)),Ve=!1;function ot(t,e,n,i){e.child=t===null?Yb(e,null,n,i):sr(e,t.child,n,i)}function wE(t,e,n,i,s){n=n.render;var r=e.ref;if("ref"in i){var o={};for(var a in i)a!=="ref"&&(o[a]=i[a])}else o=i;return ir(e),i=Gy(t,e,n,o,r,s),a=Ky(),t!==null&&!Ve?(Yy(t,e,s),vi(t,e,s)):(ne&&a&&Py(e),e.flags|=1,ot(t,e,i,s),e.child)}function TE(t,e,n,i,s){if(t===null){var r=n.type;return typeof r=="function"&&!zy(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,LS(t,e,r,i,s)):(t=Pc(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!rv(t,s)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:_l,n(o,i)&&t.ref===e.ref)return vi(t,e,s)}return e.flags|=1,t=ui(r,i),t.ref=e.ref,t.return=e,e.child=t}function LS(t,e,n,i,s){if(t!==null){var r=t.memoizedProps;if(_l(r,i)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=i=r,rv(t,s))t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,vi(t,e,s)}return Gm(t,e,n,i,s)}function US(t,e,n,i){var s=i.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,e.child=null;return bE(t,e,r,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bc(e,r!==null?r.cachePool:null),r!==null?hE(e,r):Bm(),Wb(e);else return i=e.lanes=536870912,bE(t,e,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Bc(e,r.cachePool),hE(e,r),Bi(),e.memoizedState=null):(t!==null&&Bc(e,null),Bm(),Bi());return ot(t,e,s,n),e.child}function Pa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function bE(t,e,n,i,s){var r=Fy();return r=r===null?null:{parent:Fe._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Bc(e,null),Bm(),Wb(e),t!==null&&ia(t,e,i,!0),e.childLanes=s,null}function Vc(t,e){return e=Ch({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function SE(t,e,n){return sr(e,t.child,null,n),t=Vc(e,e.pendingProps),t.flags|=2,$t(e),e.memoizedState=null,t}function XO(t,e,n){var i=e.pendingProps,s=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ne){if(i.mode==="hidden")return t=Vc(e,i),e.lanes=536870912,Pa(null,t);if(jm(e),(t=Te)?(t=RC(t,dn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:fs!==null?{id:On,overflow:Mn}:null,retryLane:536870912,hydrationErrors:null},n=Fb(t),n.return=e,e.child=n,ct=e,Te=null)):t=null,t===null)throw ds(e);return e.lanes=536870912,null}return Vc(e,i)}var r=t.memoizedState;if(r!==null){var o=r.dehydrated;if(jm(e),s)if(e.flags&256)e.flags&=-257,e=SE(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(b(558));else if(Ve||ia(t,e,n,!1),s=(n&t.childLanes)!==0,Ve||s){if(i=ge,i!==null&&(o=db(i,n),o!==0&&o!==r.retryLane))throw r.retryLane=o,Cr(t,o),jt(i,t,o),sv;Ih(),e=SE(t,e,n)}else t=r.treeContext,Te=yn(o.nextSibling),ct=e,ne=!0,Zi=null,dn=!1,t!==null&&qb(e,t),e=Vc(e,i),e.flags|=4096;return e}return t=ui(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function qc(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(b(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Gm(t,e,n,i,s){return ir(e),n=Gy(t,e,n,i,void 0,s),i=Ky(),t!==null&&!Ve?(Yy(t,e,s),vi(t,e,s)):(ne&&i&&Py(e),e.flags|=1,ot(t,e,n,s),e.child)}function CE(t,e,n,i,s,r){return ir(e),e.updateQueue=null,n=Zb(e,i,n,s),Jb(t),i=Ky(),t!==null&&!Ve?(Yy(t,e,r),vi(t,e,r)):(ne&&i&&Py(e),e.flags|=1,ot(t,e,n,r),e.child)}function AE(t,e,n,i,s){if(ir(e),e.stateNode===null){var r=to,o=n.contextType;typeof o=="object"&&o!==null&&(r=ht(o)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hm,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},qy(e),o=n.contextType,r.context=typeof o=="object"&&o!==null?ht(o):to,r.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(cp(e,n,o,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Hm.enqueueReplaceState(r,r.state,null),Ja(e,i,r,s),Wa(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var a=e.memoizedProps,l=or(n,a);r.props=l;var u=r.context,c=n.contextType;o=to,typeof c=="object"&&c!==null&&(o=ht(c));var h=n.getDerivedStateFromProps;c=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",a=e.pendingProps!==a,c||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a||u!==o)&&_E(e,r,i,o),Ui=!1;var f=e.memoizedState;r.state=f,Ja(e,i,r,s),Wa(),u=e.memoizedState,a||f!==u||Ui?(typeof h=="function"&&(cp(e,n,h,i),u=e.memoizedState),(l=Ui||vE(e,n,l,i,f,u,o))?(c||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),r.props=i,r.state=u,r.context=o,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,zm(t,e),o=e.memoizedProps,c=or(n,o),r.props=c,h=e.pendingProps,f=r.context,u=n.contextType,l=to,typeof u=="object"&&u!==null&&(l=ht(u)),a=n.getDerivedStateFromProps,(u=typeof a=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==h||f!==l)&&_E(e,r,i,l),Ui=!1,f=e.memoizedState,r.state=f,Ja(e,i,r,s),Wa();var d=e.memoizedState;o!==h||f!==d||Ui||t!==null&&t.dependencies!==null&&vh(t.dependencies)?(typeof a=="function"&&(cp(e,n,a,i),d=e.memoizedState),(c=Ui||vE(e,n,c,i,f,d,l)||t!==null&&t.dependencies!==null&&vh(t.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,d,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,d,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=d),r.props=i,r.state=d,r.context=l,i=c):(typeof r.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,qc(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=sr(e,t.child,null,s),e.child=sr(e,null,n,s)):ot(t,e,n,s),e.memoizedState=r.state,t=e.child):t=vi(t,e,s),t}function NE(t,e,n,i){return nr(),e.flags|=256,ot(t,e,n,i),e.child}var hp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fp(t){return{baseLanes:t,cachePool:$b()}}function dp(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Kt),t}function zS(t,e,n){var i=e.pendingProps,s=!1,r=(e.flags&128)!==0,o;if((o=r)||(o=t!==null&&t.memoizedState===null?!1:(Le.current&2)!==0),o&&(s=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(ne){if(s?Pi(e):Bi(),(t=Te)?(t=RC(t,dn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:fs!==null?{id:On,overflow:Mn}:null,retryLane:536870912,hydrationErrors:null},n=Fb(t),n.return=e,e.child=n,ct=e,Te=null)):t=null,t===null)throw ds(e);return og(t)?e.lanes=32:e.lanes=536870912,null}var a=i.children;return i=i.fallback,s?(Bi(),s=e.mode,a=Ch({mode:"hidden",children:a},s),i=Ks(i,s,n,null),a.return=e,i.return=e,a.sibling=i,e.child=a,i=e.child,i.memoizedState=fp(n),i.childLanes=dp(t,o,n),e.memoizedState=hp,Pa(null,i)):(Pi(e),Km(e,a))}var l=t.memoizedState;if(l!==null&&(a=l.dehydrated,a!==null)){if(r)e.flags&256?(Pi(e),e.flags&=-257,e=pp(t,e,n)):e.memoizedState!==null?(Bi(),e.child=t.child,e.flags|=128,e=null):(Bi(),a=i.fallback,s=e.mode,i=Ch({mode:"visible",children:i.children},s),a=Ks(a,s,n,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,sr(e,t.child,null,n),i=e.child,i.memoizedState=fp(n),i.childLanes=dp(t,o,n),e.memoizedState=hp,e=Pa(null,i));else if(Pi(e),og(a)){if(o=a.nextSibling&&a.nextSibling.dataset,o)var u=o.dgst;o=u,i=Error(b(419)),i.stack="",i.digest=o,wl({value:i,source:null,stack:null}),e=pp(t,e,n)}else if(Ve||ia(t,e,n,!1),o=(n&t.childLanes)!==0,Ve||o){if(o=ge,o!==null&&(i=db(o,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Cr(t,i),jt(o,t,i),sv;rg(a)||Ih(),e=pp(t,e,n)}else rg(a)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Te=yn(a.nextSibling),ct=e,ne=!0,Zi=null,dn=!1,t!==null&&qb(e,t),e=Km(e,i.children),e.flags|=4096);return e}return s?(Bi(),a=i.fallback,s=e.mode,l=t.child,u=l.sibling,i=ui(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,u!==null?a=ui(u,a):(a=Ks(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,Pa(null,i),i=e.child,a=t.child.memoizedState,a===null?a=fp(n):(s=a.cachePool,s!==null?(l=Fe._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=$b(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=dp(t,o,n),e.memoizedState=hp,Pa(t.child,i)):(Pi(e),n=t.child,t=n.sibling,n=ui(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=n,e.memoizedState=null,n)}function Km(t,e){return e=Ch({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ch(t,e){return t=Gt(22,t,null,e),t.lanes=0,t}function pp(t,e,n){return sr(e,t.child,null,n),t=Km(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RE(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),km(t.return,e,n)}function mp(t,e,n,i,s,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=s,o.treeForkCount=r)}function PS(t,e,n){var i=e.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var o=Le.current,a=(o&2)!==0;if(a?(o=o&1|2,e.flags|=128):o&=1,_e(Le,o),ot(t,e,i,n),i=ne?El:0,!a&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&RE(t,n,e);else if(t.tag===19)RE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&wh(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),mp(e,!1,s,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&wh(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}mp(e,!0,n,null,r,i);break;case"together":mp(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,!(n&e.childLanes))if(t!==null){if(ia(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rv(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&vh(t)))}function WO(t,e,n){switch(e.tag){case 3:hh(e,e.stateNode.containerInfo),zi(e,Fe,t.memoizedState.cache),nr();break;case 27:case 5:wm(e);break;case 4:hh(e,e.stateNode.containerInfo);break;case 10:zi(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,jm(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Pi(e),e.flags|=128,null):n&e.child.childLanes?zS(t,e,n):(Pi(e),t=vi(t,e,n),t!==null?t.sibling:null);Pi(e);break;case 19:var s=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(ia(t,e,n,!1),i=(n&e.childLanes)!==0),s){if(i)return PS(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_e(Le,Le.current),i)break;return null;case 22:return e.lanes=0,US(t,e,n,e.pendingProps);case 24:zi(e,Fe,t.memoizedState.cache)}return vi(t,e,n)}function BS(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ve=!0;else{if(!rv(t,n)&&!(e.flags&128))return Ve=!1,WO(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,ne&&e.flags&1048576&&Vb(e,El,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=Os(e.elementType),e.type=t,typeof t=="function")zy(t)?(i=or(t,i),e.tag=1,e=AE(null,e,t,i,n)):(e.tag=0,e=Gm(null,e,t,i,n));else{if(t!=null){var s=t.$$typeof;if(s===by){e.tag=11,e=wE(null,e,t,i,n);break e}else if(s===Sy){e.tag=14,e=TE(null,e,t,i,n);break e}}throw e=_m(t)||t,Error(b(306,e,""))}}return e;case 0:return Gm(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,s=or(i,e.pendingProps),AE(t,e,i,s,n);case 3:e:{if(hh(e,e.stateNode.containerInfo),t===null)throw Error(b(387));i=e.pendingProps;var r=e.memoizedState;s=r.element,zm(t,e),Ja(e,i,null,n);var o=e.memoizedState;if(i=o.cache,zi(e,Fe,i),i!==r.cache&&Lm(e,[Fe],n,!0),Wa(),i=o.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=NE(t,e,i,n);break e}else if(i!==s){s=fn(Error(b(424)),e),wl(s),e=NE(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Te=yn(t.firstChild),ct=e,ne=!0,Zi=null,dn=!0,n=Yb(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(nr(),i===s){e=vi(t,e,n);break e}ot(t,e,i,n)}e=e.child}return e;case 26:return qc(t,e),t===null?(n=YE(e.type,null,e.pendingProps,null))?e.memoizedState=n:ne||(n=e.type,t=e.pendingProps,i=Mh(Ji.current).createElement(n),i[ut]=e,i[Ft]=t,ft(i,n,t),et(i),e.stateNode=i):e.memoizedState=YE(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return wm(e),t===null&&ne&&(i=e.stateNode=IC(e.type,e.pendingProps,Ji.current),ct=e,dn=!0,s=Te,Ts(e.type)?(ag=s,Te=yn(i.firstChild)):Te=s),ot(t,e,e.pendingProps.children,n),qc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ne&&((s=i=Te)&&(i=NM(i,e.type,e.pendingProps,dn),i!==null?(e.stateNode=i,ct=e,Te=yn(i.firstChild),dn=!1,s=!0):s=!1),s||ds(e)),wm(e),s=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,i=r.children,ig(s,r)?i=null:o!==null&&ig(s,o)&&(e.flags|=32),e.memoizedState!==null&&(s=Gy(t,e,VO,null,null,n),Nl._currentValue=s),qc(t,e),ot(t,e,i,n),e.child;case 6:return t===null&&ne&&((t=n=Te)&&(n=RM(n,e.pendingProps,dn),n!==null?(e.stateNode=n,ct=e,Te=null,t=!0):t=!1),t||ds(e)),null;case 13:return zS(t,e,n);case 4:return hh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=sr(e,null,i,n):ot(t,e,i,n),e.child;case 11:return wE(t,e,e.type,e.pendingProps,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,zi(e,e.type,i.value),ot(t,e,i.children,n),e.child;case 9:return s=e.type._context,i=e.pendingProps.children,ir(e),s=ht(s),i=i(s),e.flags|=1,ot(t,e,i,n),e.child;case 14:return TE(t,e,e.type,e.pendingProps,n);case 15:return LS(t,e,e.type,e.pendingProps,n);case 19:return PS(t,e,n);case 31:return XO(t,e,n);case 22:return US(t,e,n,e.pendingProps);case 24:return ir(e),i=ht(Fe),t===null?(s=Fy(),s===null&&(s=ge,r=jy(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),e.memoizedState={parent:i,cache:s},qy(e),zi(e,Fe,s)):(t.lanes&n&&(zm(t,e),Ja(e,null,null,n),Wa()),s=t.memoizedState,r=e.memoizedState,s.parent!==i?(s={parent:i,cache:i},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),zi(e,Fe,i)):(i=r.cache,zi(e,Fe,i),i!==s.cache&&Lm(e,[Fe],n,!0))),ot(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(b(156,e.tag))}function Qn(t){t.flags|=4}function gp(t,e,n,i,s){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(uC())t.flags|=8192;else throw Qs=_h,Vy}else t.flags&=-16777217}function IE(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!OC(e))if(uC())t.flags|=8192;else throw Qs=_h,Vy}function hc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?cb():536870912,t.lanes|=e,ko|=e)}function Sa(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function JO(t,e,n){var i=e.pendingProps;switch(By(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Ee(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ci(Fe),Ro(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(kr(e)?Qn(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ap())),Ee(e),null;case 26:var s=e.type,r=e.memoizedState;return t===null?(Qn(e),r!==null?(Ee(e),IE(e,r)):(Ee(e),gp(e,s,null,i,n))):r?r!==t.memoizedState?(Qn(e),Ee(e),IE(e,r)):(Ee(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Qn(e),Ee(e),gp(e,s,t,i,n)),null;case 27:if(fh(e),n=Ji.current,s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Qn(e);else{if(!i){if(e.stateNode===null)throw Error(b(166));return Ee(e),null}t=Bn.current,kr(e)?sE(e):(t=IC(s,i,n),e.stateNode=t,Qn(e))}return Ee(e),null;case 5:if(fh(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Qn(e);else{if(!i){if(e.stateNode===null)throw Error(b(166));return Ee(e),null}if(r=Bn.current,kr(e))sE(e);else{var o=Mh(Ji.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?o.createElement(s,{is:i.is}):o.createElement(s)}}r[ut]=e,r[Ft]=i;e:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break e;for(;o.sibling===null;){if(o.return===null||o.return===e)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=r;e:switch(ft(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Qn(e)}}return Ee(e),gp(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Qn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(b(166));if(t=Ji.current,kr(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,s=ct,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}t[ut]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||CC(t.nodeValue,n)),t||ds(e,!0)}else t=Mh(t).createTextNode(i),t[ut]=e,e.stateNode=t}return Ee(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=kr(e),n!==null){if(t===null){if(!i)throw Error(b(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(557));t[ut]=e}else nr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),t=!1}else n=ap(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?($t(e),e):($t(e),null);if(e.flags&128)throw Error(b(558))}return Ee(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=kr(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[ut]=e}else nr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else s=ap(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?($t(e),e):($t(e),null)}return $t(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),hc(e,e.updateQueue),Ee(e),null);case 4:return Ro(),t===null&&fv(e.stateNode.containerInfo),Ee(e),null;case 10:return ci(e.type),Ee(e),null;case 19:if(it(Le),i=e.memoizedState,i===null)return Ee(e),null;if(s=(e.flags&128)!==0,r=i.rendering,r===null)if(s)Sa(i,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=wh(t),r!==null){for(e.flags|=128,Sa(i,!1),t=r.updateQueue,e.updateQueue=t,hc(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)jb(n,t),n=n.sibling;return _e(Le,Le.current&1|2),ne&&Zn(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Qt()>Nh&&(e.flags|=128,s=!0,Sa(i,!1),e.lanes=4194304)}else{if(!s)if(t=wh(r),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,hc(e,t),Sa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ne)return Ee(e),null}else 2*Qt()-i.renderingStartTime>Nh&&n!==536870912&&(e.flags|=128,s=!0,Sa(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Qt(),t.sibling=null,n=Le.current,_e(Le,s?n&1|2:n&1),ne&&Zn(e,i.treeForkCount),t):(Ee(e),null);case 22:case 23:return $t(e),Hy(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),n=e.updateQueue,n!==null&&hc(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&it(Ys),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ci(Fe),Ee(e),null;case 25:return null;case 30:return null}throw Error(b(156,e.tag))}function ZO(t,e){switch(By(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ci(Fe),Ro(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return fh(e),null;case 31:if(e.memoizedState!==null){if($t(e),e.alternate===null)throw Error(b(340));nr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if($t(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));nr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(Le),null;case 4:return Ro(),null;case 10:return ci(e.type),null;case 22:case 23:return $t(e),Hy(),t!==null&&it(Ys),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ci(Fe),null;case 25:return null;default:return null}}function jS(t,e){switch(By(e),e.tag){case 3:ci(Fe),Ro();break;case 26:case 27:case 5:fh(e);break;case 4:Ro();break;case 31:e.memoizedState!==null&&$t(e);break;case 13:$t(e);break;case 19:it(Le);break;case 10:ci(e.type);break;case 22:case 23:$t(e),Hy(),t!==null&&it(Ys);break;case 24:ci(Fe)}}function du(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){i=void 0;var r=n.create,o=n.inst;i=r(),o.destroy=i}n=n.next}while(n!==s)}}catch(a){ce(e,e.return,a)}}function ps(t,e,n){try{var i=e.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&t)===t){var o=i.inst,a=o.destroy;if(a!==void 0){o.destroy=void 0,s=e;var l=n,u=a;try{u()}catch(c){ce(s,l,c)}}}i=i.next}while(i!==r)}}catch(c){ce(e,e.return,c)}}function FS(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Xb(e,n)}catch(i){ce(t,t.return,i)}}}function VS(t,e,n){n.props=or(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){ce(t,e,i)}}function el(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(s){ce(t,e,s)}}function kn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ce(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ce(t,e,s)}else n.current=null}function qS(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ce(t,t.return,s)}}function yp(t,e,n){try{var i=t.stateNode;wM(i,t.type,n,e),i[Ft]=e}catch(s){ce(t,t.return,s)}}function HS(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ts(t.type)||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||HS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ts(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ym(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ii));else if(i!==4&&(i===27&&Ts(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Ym(t,e,n),t=t.sibling;t!==null;)Ym(t,e,n),t=t.sibling}function Ah(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Ts(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}function $S(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ft(e,i,n),e[ut]=t,e[Ft]=n}catch(r){ce(t,t.return,r)}}var ei=!1,Be=!1,_p=!1,xE=typeof WeakSet=="function"?WeakSet:Set,Je=null;function eM(t,e){if(t=t.containerInfo,tg=zh,t=Ob(t),ky(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var d;h!==n||s!==0&&h.nodeType!==3||(a=o+s),h!==r||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(d=h.firstChild)!==null;)f=h,h=d;for(;;){if(h===t)break t;if(f===n&&++u===s&&(a=o),f===r&&++c===i&&(l=o),(d=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=d}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ng={focusedElem:t,selectionRange:n},zh=!1,Je=e;Je!==null;)if(e=Je,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Je=t;else for(;Je!==null;){switch(e=Je,r=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)s=t[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var g=or(n.type,s);t=i.getSnapshotBeforeUpdate(g,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(v){ce(n,n.return,v)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)sg(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sg(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(b(163))}if(t=e.sibling,t!==null){t.return=e.return,Je=t;break}Je=e.return}}function GS(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wn(t,n),i&4&&du(5,n);break;case 1:if(Wn(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(o){ce(n,n.return,o)}else{var s=or(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){ce(n,n.return,o)}}i&64&&FS(n),i&512&&el(n,n.return);break;case 3:if(Wn(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Xb(t,e)}catch(o){ce(n,n.return,o)}}break;case 27:e===null&&i&4&&$S(n);case 26:case 5:Wn(t,n),e===null&&i&4&&qS(n),i&512&&el(n,n.return);break;case 12:Wn(t,n);break;case 31:Wn(t,n),i&4&&QS(t,n);break;case 13:Wn(t,n),i&4&&XS(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=uM.bind(null,n),IM(t,n))));break;case 22:if(i=n.memoizedState!==null||ei,!i){e=e!==null&&e.memoizedState!==null||Be,s=ei;var r=Be;ei=i,(Be=e)&&!r?Jn(t,n,(n.subtreeFlags&8772)!==0):Wn(t,n),ei=s,Be=r}break;case 30:break;default:Wn(t,n)}}function KS(t){var e=t.alternate;e!==null&&(t.alternate=null,KS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ry(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ne=null,kt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)YS(t,e,n),n=n.sibling}function YS(t,e,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 26:Be||kn(n,e),Xn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Be||kn(n,e);var i=Ne,s=kt;Ts(n.type)&&(Ne=n.stateNode,kt=!1),Xn(t,e,n),sl(n.stateNode),Ne=i,kt=s;break;case 5:Be||kn(n,e);case 6:if(i=Ne,s=kt,Ne=null,Xn(t,e,n),Ne=i,kt=s,Ne!==null)if(kt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(r){ce(n,e,r)}else try{Ne.removeChild(n.stateNode)}catch(r){ce(n,e,r)}break;case 18:Ne!==null&&(kt?(t=Ne,qE(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Po(t)):qE(Ne,n.stateNode));break;case 4:i=Ne,s=kt,Ne=n.stateNode.containerInfo,kt=!0,Xn(t,e,n),Ne=i,kt=s;break;case 0:case 11:case 14:case 15:ps(2,n,e),Be||ps(4,n,e),Xn(t,e,n);break;case 1:Be||(kn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&VS(n,e,i)),Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:Be=(i=Be)||n.memoizedState!==null,Xn(t,e,n),Be=i;break;default:Xn(t,e,n)}}function QS(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Po(t)}catch(n){ce(e,e.return,n)}}}function XS(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Po(t)}catch(n){ce(e,e.return,n)}}function tM(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new xE),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new xE),e;default:throw Error(b(435,t.tag))}}function fc(t,e){var n=tM(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var s=cM.bind(null,t,i);i.then(s,s)}})}function Ot(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 27:if(Ts(a.type)){Ne=a.stateNode,kt=!1;break e}break;case 5:Ne=a.stateNode,kt=!1;break e;case 3:case 4:Ne=a.stateNode.containerInfo,kt=!0;break e}a=a.return}if(Ne===null)throw Error(b(160));YS(r,o,s),Ne=null,kt=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)WS(e,t),e=e.sibling}var bn=null;function WS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ot(e,t),Mt(t),i&4&&(ps(3,t,t.return),du(3,t),ps(5,t,t.return));break;case 1:Ot(e,t),Mt(t),i&512&&(Be||n===null||kn(n,n.return)),i&64&&ei&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=bn;if(Ot(e,t),Mt(t),i&512&&(Be||n===null||kn(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[uu]||r[ut]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),ft(r,i,n),r[ut]=t,et(r),i=r;break e;case"link":var o=XE("link","href",s).get(i+(n.href||""));if(o){for(var a=0;a<o.length;a++)if(r=o[a],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(a,1);break t}}r=s.createElement(i),ft(r,i,n),s.head.appendChild(r);break;case"meta":if(o=XE("meta","content",s).get(i+(n.content||""))){for(a=0;a<o.length;a++)if(r=o[a],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(a,1);break t}}r=s.createElement(i),ft(r,i,n),s.head.appendChild(r);break;default:throw Error(b(468,i))}r[ut]=t,et(r),i=r}t.stateNode=i}else WE(s,t.type,t.stateNode);else t.stateNode=QE(s,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?WE(s,t.type,t.stateNode):QE(s,i,t.memoizedProps)):i===null&&t.stateNode!==null&&yp(t,t.memoizedProps,n.memoizedProps)}break;case 27:Ot(e,t),Mt(t),i&512&&(Be||n===null||kn(n,n.return)),n!==null&&i&4&&yp(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Ot(e,t),Mt(t),i&512&&(Be||n===null||kn(n,n.return)),t.flags&32){s=t.stateNode;try{xo(s,"")}catch(g){ce(t,t.return,g)}}i&4&&t.stateNode!=null&&(s=t.memoizedProps,yp(t,s,n!==null?n.memoizedProps:s)),i&1024&&(_p=!0);break;case 6:if(Ot(e,t),Mt(t),i&4){if(t.stateNode===null)throw Error(b(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(g){ce(t,t.return,g)}}break;case 3:if(Gc=null,s=bn,bn=kh(e.containerInfo),Ot(e,t),bn=s,Mt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(g){ce(t,t.return,g)}_p&&(_p=!1,JS(t));break;case 4:i=bn,bn=kh(t.stateNode.containerInfo),Ot(e,t),Mt(t),bn=i;break;case 12:Ot(e,t),Mt(t);break;case 31:Ot(e,t),Mt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,fc(t,i)));break;case 13:Ot(e,t),Mt(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ff=Qt()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,fc(t,i)));break;case 22:s=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=ei,c=Be;if(ei=u||s,Be=c||l,Ot(e,t),Be=c,ei=u,Mt(t),i&8192)e:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(n===null||l||ei||Be||Ms(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(r=l.stateNode,s)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{a=l.stateNode;var h=l.memoizedProps.style,f=h!=null&&h.hasOwnProperty("display")?h.display:null;a.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(g){ce(l,l.return,g)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(g){ce(l,l.return,g)}}}else if(e.tag===18){if(n===null){l=e;try{var d=l.stateNode;s?HE(d,!0):HE(l.stateNode,!1)}catch(g){ce(l,l.return,g)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,fc(t,n))));break;case 19:Ot(e,t),Mt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,fc(t,i)));break;case 30:break;case 21:break;default:Ot(e,t),Mt(t)}}function Mt(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(HS(i)){n=i;break}i=i.return}if(n==null)throw Error(b(160));switch(n.tag){case 27:var s=n.stateNode,r=vp(t);Ah(t,r,s);break;case 5:var o=n.stateNode;n.flags&32&&(xo(o,""),n.flags&=-33);var a=vp(t);Ah(t,a,o);break;case 3:case 4:var l=n.stateNode.containerInfo,u=vp(t);Ym(t,u,l);break;default:throw Error(b(161))}}catch(c){ce(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JS(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;JS(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Wn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)GS(t,e.alternate,e),e=e.sibling}function Ms(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ps(4,e,e.return),Ms(e);break;case 1:kn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&VS(e,e.return,n),Ms(e);break;case 27:sl(e.stateNode);case 26:case 5:kn(e,e.return),Ms(e);break;case 22:e.memoizedState===null&&Ms(e);break;case 30:Ms(e);break;default:Ms(e)}t=t.sibling}}function Jn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,s=t,r=e,o=r.flags;switch(r.tag){case 0:case 11:case 15:Jn(s,r,n),du(4,r);break;case 1:if(Jn(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(u){ce(i,i.return,u)}if(i=r,s=i.updateQueue,s!==null){var a=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Qb(l[s],a)}catch(u){ce(i,i.return,u)}}n&&o&64&&FS(r),el(r,r.return);break;case 27:$S(r);case 26:case 5:Jn(s,r,n),n&&i===null&&o&4&&qS(r),el(r,r.return);break;case 12:Jn(s,r,n);break;case 31:Jn(s,r,n),n&&o&4&&QS(s,r);break;case 13:Jn(s,r,n),n&&o&4&&XS(s,r);break;case 22:r.memoizedState===null&&Jn(s,r,n),el(r,r.return);break;case 30:break;default:Jn(s,r,n)}e=e.sibling}}function ov(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&hu(n))}function av(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&hu(t))}function Tn(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ZS(t,e,n,i),e=e.sibling}function ZS(t,e,n,i){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Tn(t,e,n,i),s&2048&&du(9,e);break;case 1:Tn(t,e,n,i);break;case 3:Tn(t,e,n,i),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&hu(t)));break;case 12:if(s&2048){Tn(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,o=r.id,a=r.onPostCommit;typeof a=="function"&&a(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){ce(e,e.return,l)}}else Tn(t,e,n,i);break;case 31:Tn(t,e,n,i);break;case 13:Tn(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,o=e.alternate,e.memoizedState!==null?r._visibility&2?Tn(t,e,n,i):tl(t,e):r._visibility&2?Tn(t,e,n,i):(r._visibility|=2,Fr(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),s&2048&&ov(o,e);break;case 24:Tn(t,e,n,i),s&2048&&av(e.alternate,e);break;default:Tn(t,e,n,i)}}function Fr(t,e,n,i,s){for(s=s&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,o=e,a=n,l=i,u=o.flags;switch(o.tag){case 0:case 11:case 15:Fr(r,o,a,l,s),du(8,o);break;case 23:break;case 22:var c=o.stateNode;o.memoizedState!==null?c._visibility&2?Fr(r,o,a,l,s):tl(r,o):(c._visibility|=2,Fr(r,o,a,l,s)),s&&u&2048&&ov(o.alternate,o);break;case 24:Fr(r,o,a,l,s),s&&u&2048&&av(o.alternate,o);break;default:Fr(r,o,a,l,s)}e=e.sibling}}function tl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,s=i.flags;switch(i.tag){case 22:tl(n,i),s&2048&&ov(i.alternate,i);break;case 24:tl(n,i),s&2048&&av(i.alternate,i);break;default:tl(n,i)}e=e.sibling}}var Ba=8192;function Lr(t,e,n){if(t.subtreeFlags&Ba)for(t=t.child;t!==null;)eC(t,e,n),t=t.sibling}function eC(t,e,n){switch(t.tag){case 26:Lr(t,e,n),t.flags&Ba&&t.memoizedState!==null&&FM(n,bn,t.memoizedState,t.memoizedProps);break;case 5:Lr(t,e,n);break;case 3:case 4:var i=bn;bn=kh(t.stateNode.containerInfo),Lr(t,e,n),bn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Ba,Ba=16777216,Lr(t,e,n),Ba=i):Lr(t,e,n));break;default:Lr(t,e,n)}}function tC(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ca(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Je=i,iC(i,t)}tC(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nC(t),t=t.sibling}function nC(t){switch(t.tag){case 0:case 11:case 15:Ca(t),t.flags&2048&&ps(9,t,t.return);break;case 3:Ca(t);break;case 12:Ca(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Hc(t)):Ca(t);break;default:Ca(t)}}function Hc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Je=i,iC(i,t)}tC(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ps(8,e,e.return),Hc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Hc(e));break;default:Hc(e)}t=t.sibling}}function iC(t,e){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:ps(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:hu(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Je=i;else e:for(n=t;Je!==null;){i=Je;var s=i.sibling,r=i.return;if(KS(i),i===n){Je=null;break e}if(s!==null){s.return=r,Je=s;break e}Je=r}}}var nM={getCacheForType:function(t){var e=ht(Fe),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ht(Fe).controller.signal}},iM=typeof WeakMap=="function"?WeakMap:Map,ae=0,ge=null,W=null,te=0,ue=0,Ht=null,Ki=!1,ra=!1,lv=!1,_i=0,xe=0,ms=0,Xs=0,uv=0,Kt=0,ko=0,nl=null,Lt=null,Qm=!1,Ff=0,sC=0,Nh=1/0,Rh=null,ns=null,$e=0,is=null,Lo=null,hi=0,Xm=0,Wm=null,rC=null,il=0,Jm=null;function Jt(){return ae&2&&te!==0?te&-te:B.T!==null?hv():pb()}function oC(){if(Kt===0)if(!(te&536870912)||ne){var t=sc;sc<<=1,!(sc&3932160)&&(sc=262144),Kt=t}else Kt=536870912;return t=nn.current,t!==null&&(t.flags|=32),Kt}function jt(t,e,n){(t===ge&&(ue===2||ue===9)||t.cancelPendingCommit!==null)&&(Uo(t,0),Yi(t,te,Kt,!1)),lu(t,n),(!(ae&2)||t!==ge)&&(t===ge&&(!(ae&2)&&(Xs|=n),xe===4&&Yi(t,te,Kt,!1)),Kn(t))}function aC(t,e,n){if(ae&6)throw Error(b(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||au(t,e),s=i?oM(t,e):Ep(t,e,!0),r=i;do{if(s===0){ra&&!i&&Yi(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!sM(n)){s=Ep(t,e,!1),r=!1;continue}if(s===2){if(r=e,t.errorRecoveryDisabledLanes&r)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;e:{var a=t;s=nl;var l=a.current.memoizedState.isDehydrated;if(l&&(Uo(a,o).flags|=256),o=Ep(a,o,!1),o!==2){if(lv&&!l){a.errorRecoveryDisabledLanes|=r,Xs|=r,s=4;break e}r=Lt,Lt=s,r!==null&&(Lt===null?Lt=r:Lt.push.apply(Lt,r))}s=o}if(r=!1,s!==2)continue}}if(s===1){Uo(t,0),Yi(t,e,0,!0);break}e:{switch(i=t,r=s,r){case 0:case 1:throw Error(b(345));case 4:if((e&4194048)!==e)break;case 6:Yi(i,e,Kt,!Ki);break e;case 2:Lt=null;break;case 3:case 5:break;default:throw Error(b(329))}if((e&62914560)===e&&(s=Ff+300-Qt(),10<s)){if(Yi(i,e,Kt,!Ki),xf(i,0,!0)!==0)break e;hi=e,i.timeoutHandle=NC(DE.bind(null,i,n,Lt,Rh,Qm,e,Kt,Xs,ko,Ki,r,"Throttled",-0,0),s);break e}DE(i,n,Lt,Rh,Qm,e,Kt,Xs,ko,Ki,r,null,-0,0)}}break}while(1);Kn(t)}function DE(t,e,n,i,s,r,o,a,l,u,c,h,f,d){if(t.timeoutHandle=-1,h=e.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ii},eC(e,r,h);var g=(r&62914560)===r?Ff-Qt():(r&4194048)===r?sC-Qt():0;if(g=VM(h,g),g!==null){hi=r,t.cancelPendingCommit=g(ME.bind(null,t,e,r,n,i,s,o,a,l,c,h,null,f,d)),Yi(t,r,o,!u);return}}ME(t,e,r,n,i,s,o,a,l)}function sM(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!tn(r(),s))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e,n,i){e&=~uv,e&=~Xs,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var s=e;0<s;){var r=31-Wt(s),o=1<<r;i[r]=-1,s&=~o}n!==0&&hb(t,n,e)}function Vf(){return ae&6?!0:(pu(0,!1),!1)}function cv(){if(W!==null){if(ue===0)var t=W.return;else t=W,si=Ar=null,Qy(t),po=null,Tl=0,t=W;for(;t!==null;)jS(t.alternate,t),t=t.return;W=null}}function Uo(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,SM(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),hi=0,cv(),ge=t,W=n=ui(t.current,null),te=e,ue=0,Ht=null,Ki=!1,ra=au(t,e),lv=!1,ko=Kt=uv=Xs=ms=xe=0,Lt=nl=null,Qm=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var s=31-Wt(i),r=1<<s;e|=t[s],i&=~r}return _i=e,kf(),n}function lC(t,e){$=null,B.H=Sl,e===sa||e===Uf?(e=uE(),ue=3):e===Vy?(e=uE(),ue=4):ue=e===sv?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ht=e,W===null&&(xe=1,Sh(t,fn(e,t.current)))}function uC(){var t=nn.current;return t===null?!0:(te&4194048)===te?gn===null:(te&62914560)===te||te&536870912?t===gn:!1}function cC(){var t=B.H;return B.H=Sl,t===null?Sl:t}function hC(){var t=B.A;return B.A=nM,t}function Ih(){xe=4,Ki||(te&4194048)!==te&&nn.current!==null||(ra=!0),!(ms&134217727)&&!(Xs&134217727)||ge===null||Yi(ge,te,Kt,!1)}function Ep(t,e,n){var i=ae;ae|=2;var s=cC(),r=hC();(ge!==t||te!==e)&&(Rh=null,Uo(t,e)),e=!1;var o=xe;e:do try{if(ue!==0&&W!==null){var a=W,l=Ht;switch(ue){case 8:cv(),o=6;break e;case 3:case 2:case 9:case 6:nn.current===null&&(e=!0);var u=ue;if(ue=0,Ht=null,so(t,a,l,u),n&&ra){o=0;break e}break;default:u=ue,ue=0,Ht=null,so(t,a,l,u)}}rM(),o=xe;break}catch(c){lC(t,c)}while(1);return e&&t.shellSuspendCounter++,si=Ar=null,ae=i,B.H=s,B.A=r,W===null&&(ge=null,te=0,kf()),o}function rM(){for(;W!==null;)fC(W)}function oM(t,e){var n=ae;ae|=2;var i=cC(),s=hC();ge!==t||te!==e?(Rh=null,Nh=Qt()+500,Uo(t,e)):ra=au(t,e);e:do try{if(ue!==0&&W!==null){e=W;var r=Ht;t:switch(ue){case 1:ue=0,Ht=null,so(t,e,r,1);break;case 2:case 9:if(lE(r)){ue=0,Ht=null,OE(e);break}e=function(){ue!==2&&ue!==9||ge!==t||(ue=7),Kn(t)},r.then(e,e);break e;case 3:ue=7;break e;case 4:ue=5;break e;case 7:lE(r)?(ue=0,Ht=null,OE(e)):(ue=0,Ht=null,so(t,e,r,7));break;case 5:var o=null;switch(W.tag){case 26:o=W.memoizedState;case 5:case 27:var a=W;if(o?OC(o):a.stateNode.complete){ue=0,Ht=null;var l=a.sibling;if(l!==null)W=l;else{var u=a.return;u!==null?(W=u,qf(u)):W=null}break t}}ue=0,Ht=null,so(t,e,r,5);break;case 6:ue=0,Ht=null,so(t,e,r,6);break;case 8:cv(),xe=6;break e;default:throw Error(b(462))}}aM();break}catch(c){lC(t,c)}while(1);return si=Ar=null,B.H=i,B.A=s,ae=n,W!==null?0:(ge=null,te=0,kf(),xe)}function aM(){for(;W!==null&&!xD();)fC(W)}function fC(t){var e=BS(t.alternate,t,_i);t.memoizedProps=t.pendingProps,e===null?qf(t):W=e}function OE(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=CE(n,e,e.pendingProps,e.type,void 0,te);break;case 11:e=CE(n,e,e.pendingProps,e.type.render,e.ref,te);break;case 5:Qy(e);default:jS(n,e),e=W=jb(e,_i),e=BS(n,e,_i)}t.memoizedProps=t.pendingProps,e===null?qf(t):W=e}function so(t,e,n,i){si=Ar=null,Qy(e),po=null,Tl=0;var s=e.return;try{if(QO(t,s,e,n,te)){xe=1,Sh(t,fn(n,t.current)),W=null;return}}catch(r){if(s!==null)throw W=s,r;xe=1,Sh(t,fn(n,t.current)),W=null;return}e.flags&32768?(ne||i===1?t=!0:ra||te&536870912?t=!1:(Ki=t=!0,(i===2||i===9||i===3||i===6)&&(i=nn.current,i!==null&&i.tag===13&&(i.flags|=16384))),dC(e,t)):qf(e)}function qf(t){var e=t;do{if(e.flags&32768){dC(e,Ki);return}t=e.return;var n=JO(e.alternate,e,_i);if(n!==null){W=n;return}if(e=e.sibling,e!==null){W=e;return}W=e=t}while(e!==null);xe===0&&(xe=5)}function dC(t,e){do{var n=ZO(t.alternate,t);if(n!==null){n.flags&=32767,W=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){W=t;return}W=t=n}while(t!==null);xe=6,W=null}function ME(t,e,n,i,s,r,o,a,l){t.cancelPendingCommit=null;do Hf();while($e!==0);if(ae&6)throw Error(b(327));if(e!==null){if(e===t.current)throw Error(b(177));if(r=e.lanes|e.childLanes,r|=Ly,jD(t,n,r,o,a,l),t===ge&&(W=ge=null,te=0),Lo=e,is=t,hi=n,Xm=r,Wm=s,rC=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,hM(dh,function(){return vC(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=B.T,B.T=null,s=le.p,le.p=2,o=ae,ae|=4;try{eM(t,e,n)}finally{ae=o,le.p=s,B.T=i}}$e=1,pC(),mC(),gC()}}function pC(){if($e===1){$e=0;var t=is,e=Lo,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=B.T,B.T=null;var i=le.p;le.p=2;var s=ae;ae|=4;try{WS(e,t);var r=ng,o=Ob(t.containerInfo),a=r.focusedElem,l=r.selectionRange;if(o!==a&&a&&a.ownerDocument&&Db(a.ownerDocument.documentElement,a)){if(l!==null&&ky(a)){var u=l.start,c=l.end;if(c===void 0&&(c=u),"selectionStart"in a)a.selectionStart=u,a.selectionEnd=Math.min(c,a.value.length);else{var h=a.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var d=f.getSelection(),g=a.textContent.length,v=Math.min(l.start,g),_=l.end===void 0?v:Math.min(l.end,g);!d.extend&&v>_&&(o=_,_=v,v=o);var m=tE(a,v),p=tE(a,_);if(m&&p&&(d.rangeCount!==1||d.anchorNode!==m.node||d.anchorOffset!==m.offset||d.focusNode!==p.node||d.focusOffset!==p.offset)){var y=h.createRange();y.setStart(m.node,m.offset),d.removeAllRanges(),v>_?(d.addRange(y),d.extend(p.node,p.offset)):(y.setEnd(p.node,p.offset),d.addRange(y))}}}}for(h=[],d=a;d=d.parentNode;)d.nodeType===1&&h.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<h.length;a++){var w=h[a];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}zh=!!tg,ng=tg=null}finally{ae=s,le.p=i,B.T=n}}t.current=e,$e=2}}function mC(){if($e===2){$e=0;var t=is,e=Lo,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=B.T,B.T=null;var i=le.p;le.p=2;var s=ae;ae|=4;try{GS(t,e.alternate,e)}finally{ae=s,le.p=i,B.T=n}}$e=3}}function gC(){if($e===4||$e===3){$e=0,DD();var t=is,e=Lo,n=hi,i=rC;e.subtreeFlags&10256||e.flags&10256?$e=5:($e=0,Lo=is=null,yC(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(ns=null),Ny(n),e=e.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(ou,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=B.T,s=le.p,le.p=2,B.T=null;try{for(var r=t.onRecoverableError,o=0;o<i.length;o++){var a=i[o];r(a.value,{componentStack:a.stack})}}finally{B.T=e,le.p=s}}hi&3&&Hf(),Kn(t),s=t.pendingLanes,n&261930&&s&42?t===Jm?il++:(il=0,Jm=t):il=0,pu(0,!1)}}function yC(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,hu(e)))}function Hf(){return pC(),mC(),gC(),vC()}function vC(){if($e!==5)return!1;var t=is,e=Xm;Xm=0;var n=Ny(hi),i=B.T,s=le.p;try{le.p=32>n?32:n,B.T=null,n=Wm,Wm=null;var r=is,o=hi;if($e=0,Lo=is=null,hi=0,ae&6)throw Error(b(331));var a=ae;if(ae|=4,nC(r.current),ZS(r,r.current,o,n),ae=a,pu(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(ou,r)}catch{}return!0}finally{le.p=s,B.T=i,yC(t,e)}}function kE(t,e,n){e=fn(n,e),e=$m(t.stateNode,e,2),t=ts(t,e,2),t!==null&&(lu(t,2),Kn(t))}function ce(t,e,n){if(t.tag===3)kE(t,t,n);else for(;e!==null;){if(e.tag===3){kE(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ns===null||!ns.has(i))){t=fn(n,t),n=MS(2),i=ts(e,n,2),i!==null&&(kS(n,i,e,t),lu(i,2),Kn(i));break}}e=e.return}}function wp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iM;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(lv=!0,s.add(n),t=lM.bind(null,t,e,n),e.then(t,t))}function lM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,ge===t&&(te&n)===n&&(xe===4||xe===3&&(te&62914560)===te&&300>Qt()-Ff?!(ae&2)&&Uo(t,0):uv|=n,ko===te&&(ko=0)),Kn(t)}function _C(t,e){e===0&&(e=cb()),t=Cr(t,e),t!==null&&(lu(t,e),Kn(t))}function uM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_C(t,n)}function cM(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(b(314))}i!==null&&i.delete(e),_C(t,n)}function hM(t,e){return Cy(t,e)}var xh=null,Vr=null,Zm=!1,Dh=!1,Tp=!1,Qi=0;function Kn(t){t!==Vr&&t.next===null&&(Vr===null?xh=Vr=t:Vr=Vr.next=t),Dh=!0,Zm||(Zm=!0,dM())}function pu(t,e){if(!Tp&&Dh){Tp=!0;do for(var n=!1,i=xh;i!==null;){if(!e)if(t!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var o=i.suspendedLanes,a=i.pingedLanes;r=(1<<31-Wt(42|t)+1)-1,r&=s&~(o&~a),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,LE(i,r))}else r=te,r=xf(i,i===ge?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||au(i,r)||(n=!0,LE(i,r));i=i.next}while(n);Tp=!1}}function fM(){EC()}function EC(){Dh=Zm=!1;var t=0;Qi!==0&&bM()&&(t=Qi);for(var e=Qt(),n=null,i=xh;i!==null;){var s=i.next,r=wC(i,e);r===0?(i.next=null,n===null?xh=s:n.next=s,s===null&&(Vr=n)):(n=i,(t!==0||r&3)&&(Dh=!0)),i=s}$e!==0&&$e!==5||pu(t,!1),Qi!==0&&(Qi=0)}function wC(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var o=31-Wt(r),a=1<<o,l=s[o];l===-1?(!(a&n)||a&i)&&(s[o]=BD(a,e)):l<=e&&(t.expiredLanes|=a),r&=~a}if(e=ge,n=te,n=xf(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ue===2||ue===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Xd(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||au(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Xd(i),Ny(n)){case 2:case 8:n=lb;break;case 32:n=dh;break;case 268435456:n=ub;break;default:n=dh}return i=TC.bind(null,t),n=Cy(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Xd(i),t.callbackPriority=2,t.callbackNode=null,2}function TC(t,e){if($e!==0&&$e!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Hf()&&t.callbackNode!==n)return null;var i=te;return i=xf(t,t===ge?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(aC(t,i,e),wC(t,Qt()),t.callbackNode!=null&&t.callbackNode===n?TC.bind(null,t):null)}function LE(t,e){if(Hf())return null;aC(t,e,!0)}function dM(){CM(function(){ae&6?Cy(ab,fM):EC()})}function hv(){if(Qi===0){var t=Do;t===0&&(t=ic,ic<<=1,!(ic&261888)&&(ic=256)),Qi=t}return Qi}function UE(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Lc(""+t)}function zE(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function pM(t,e,n,i,s){if(e==="submit"&&n&&n.stateNode===s){var r=UE((s[Ft]||null).action),o=i.submitter;o&&(e=(e=o[Ft]||null)?UE(e.formAction):o.getAttribute("formAction"),e!==null&&(r=e,o=null));var a=new Df("action","action",null,i,s);t.push({event:a,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Qi!==0){var l=o?zE(s,o):new FormData(s);qm(n,{pending:!0,data:l,method:s.method,action:r},null,l)}}else typeof r=="function"&&(a.preventDefault(),l=o?zE(s,o):new FormData(s),qm(n,{pending:!0,data:l,method:s.method,action:r},r,l))},currentTarget:s}]})}}for(var bp=0;bp<Dm.length;bp++){var Sp=Dm[bp],mM=Sp.toLowerCase(),gM=Sp[0].toUpperCase()+Sp.slice(1);xn(mM,"on"+gM)}xn(kb,"onAnimationEnd");xn(Lb,"onAnimationIteration");xn(Ub,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(OO,"onTransitionRun");xn(MO,"onTransitionStart");xn(kO,"onTransitionCancel");xn(zb,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cl));function bC(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==r&&s.isPropagationStopped())break e;r=a,s.currentTarget=u;try{r(s)}catch(c){mh(c)}s.currentTarget=null,r=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==r&&s.isPropagationStopped())break e;r=a,s.currentTarget=u;try{r(s)}catch(c){mh(c)}s.currentTarget=null,r=l}}}}function X(t,e){var n=e[bm];n===void 0&&(n=e[bm]=new Set);var i=t+"__bubble";n.has(i)||(SC(e,t,2,!1),n.add(i))}function Cp(t,e,n){var i=0;e&&(i|=4),SC(n,t,i,e)}var dc="_reactListening"+Math.random().toString(36).slice(2);function fv(t){if(!t[dc]){t[dc]=!0,mb.forEach(function(n){n!=="selectionchange"&&(yM.has(n)||Cp(n,!1,t),Cp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dc]||(e[dc]=!0,Cp("selectionchange",!1,e))}}function SC(t,e,n,i){switch(zC(e)){case 2:var s=$M;break;case 8:s=GM;break;default:s=gv}n=s.bind(null,e,n,t),s=void 0,!Rm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ap(t,e,n,i,s){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===s)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===s)return;o=o.return}for(;a!==null;){if(o=Qr(a),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){i=r=o;continue e}a=a.parentNode}}i=i.return}bb(function(){var u=r,c=xy(n),h=[];e:{var f=Pb.get(t);if(f!==void 0){var d=Df,g=t;switch(t){case"keypress":if(zc(n)===0)break e;case"keydown":case"keyup":d=cO;break;case"focusin":g="focus",d=tp;break;case"focusout":g="blur",d=tp;break;case"beforeblur":case"afterblur":d=tp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=$0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=JD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=dO;break;case kb:case Lb:case Ub:d=tO;break;case zb:d=mO;break;case"scroll":case"scrollend":d=XD;break;case"wheel":d=yO;break;case"copy":case"cut":case"paste":d=iO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=K0;break;case"toggle":case"beforetoggle":d=_O}var v=(e&4)!==0,_=!v&&(t==="scroll"||t==="scrollend"),m=v?f!==null?f+"Capture":null:f;v=[];for(var p=u,y;p!==null;){var w=p;if(y=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||y===null||m===null||(w=yl(p,m),w!=null&&v.push(Al(p,w,y))),_)break;p=p.return}0<v.length&&(f=new d(f,g,null,n,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",f&&n!==Nm&&(g=n.relatedTarget||n.fromElement)&&(Qr(g)||g[ta]))break e;if((d||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,d?(g=n.relatedTarget||n.toElement,d=u,g=g?Qr(g):null,g!==null&&(_=ru(g),v=g.tag,g!==_||v!==5&&v!==27&&v!==6)&&(g=null)):(d=null,g=u),d!==g)){if(v=$0,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=K0,w="onPointerLeave",m="onPointerEnter",p="pointer"),_=d==null?f:za(d),y=g==null?f:za(g),f=new v(w,p+"leave",d,n,c),f.target=_,f.relatedTarget=y,w=null,Qr(c)===u&&(v=new v(m,p+"enter",g,n,c),v.target=y,v.relatedTarget=_,w=v),_=w,d&&g)t:{for(v=vM,m=d,p=g,y=0,w=m;w;w=v(w))y++;w=0;for(var N=p;N;N=v(N))w++;for(;0<y-w;)m=v(m),y--;for(;0<w-y;)p=v(p),w--;for(;y--;){if(m===p||p!==null&&m===p.alternate){v=m;break t}m=v(m),p=v(p)}v=null}else v=null;d!==null&&PE(h,f,d,v,!1),g!==null&&_!==null&&PE(h,_,g,v,!0)}}e:{if(f=u?za(u):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var O=W0;else if(X0(f))if(Ib)O=IO;else{O=NO;var R=AO}else d=f.nodeName,!d||d.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&Iy(u.elementType)&&(O=W0):O=RO;if(O&&(O=O(t,u))){Rb(h,O,n,c);break e}R&&R(t,f,u),t==="focusout"&&u&&f.type==="number"&&u.memoizedProps.value!=null&&Am(f,"number",f.value)}switch(R=u?za(u):window,t){case"focusin":(X0(R)||R.contentEditable==="true")&&(Jr=R,Im=u,Ya=null);break;case"focusout":Ya=Im=Jr=null;break;case"mousedown":xm=!0;break;case"contextmenu":case"mouseup":case"dragend":xm=!1,nE(h,n,c);break;case"selectionchange":if(DO)break;case"keydown":case"keyup":nE(h,n,c)}var k;if(My)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Wr?Ab(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Cb&&n.locale!=="ko"&&(Wr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Wr&&(k=Sb()):(Gi=c,Dy="value"in Gi?Gi.value:Gi.textContent,Wr=!0)),R=Oh(u,U),0<R.length&&(U=new G0(U,t,null,n,c),h.push({event:U,listeners:R}),k?U.data=k:(k=Nb(n),k!==null&&(U.data=k)))),(k=wO?TO(t,n):bO(t,n))&&(U=Oh(u,"onBeforeInput"),0<U.length&&(R=new G0("onBeforeInput","beforeinput",null,n,c),h.push({event:R,listeners:U}),R.data=k)),pM(h,t,u,n,c)}bC(h,e)})}function Al(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oh(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=yl(t,n),s!=null&&i.unshift(Al(t,s,r)),s=yl(t,e),s!=null&&i.push(Al(t,s,r))),t.tag===3)return i;t=t.return}return[]}function vM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function PE(t,e,n,i,s){for(var r=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(a=a.tag,l!==null&&l===i)break;a!==5&&a!==26&&a!==27||u===null||(l=u,s?(u=yl(n,r),u!=null&&o.unshift(Al(n,u,l))):s||(u=yl(n,r),u!=null&&o.push(Al(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _M=/\r\n?/g,EM=/\u0000|\uFFFD/g;function BE(t){return(typeof t=="string"?t:""+t).replace(_M,`
`).replace(EM,"")}function CC(t,e){return e=BE(e),BE(t)===e}function pe(t,e,n,i,s,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||xo(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&xo(t,""+i);break;case"className":oc(t,"class",i);break;case"tabIndex":oc(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":oc(t,n,i);break;case"style":Tb(t,i,r);break;case"data":if(e!=="object"){oc(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Lc(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&pe(t,e,"name",s.name,s,null),pe(t,e,"formEncType",s.formEncType,s,null),pe(t,e,"formMethod",s.formMethod,s,null),pe(t,e,"formTarget",s.formTarget,s,null)):(pe(t,e,"encType",s.encType,s,null),pe(t,e,"method",s.method,s,null),pe(t,e,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Lc(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=ii);break;case"onScroll":i!=null&&X("scroll",t);break;case"onScrollEnd":i!=null&&X("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(b(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(b(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Lc(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":X("beforetoggle",t),X("toggle",t),kc(t,"popover",i);break;case"xlinkActuate":Yn(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Yn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Yn(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Yn(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Yn(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Yn(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":kc(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=YD.get(n)||n,kc(t,n,i))}}function eg(t,e,n,i,s,r){switch(n){case"style":Tb(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(b(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(b(60));t.innerHTML=n}}break;case"children":typeof i=="string"?xo(t,i):(typeof i=="number"||typeof i=="bigint")&&xo(t,""+i);break;case"onScroll":i!=null&&X("scroll",t);break;case"onScrollEnd":i!=null&&X("scrollend",t);break;case"onClick":i!=null&&(t.onclick=ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gb.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),e=n.slice(2,s?n.length-7:void 0),r=t[Ft]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,s);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):kc(t,n,i)}}}function ft(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",t),X("load",t);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var o=n[r];if(o!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,e));default:pe(t,e,r,o,n,null)}}s&&pe(t,e,"srcSet",n.srcSet,n,null),i&&pe(t,e,"src",n.src,n,null);return;case"input":X("invalid",t);var a=r=o=s=null,l=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var c=n[i];if(c!=null)switch(i){case"name":s=c;break;case"type":o=c;break;case"checked":l=c;break;case"defaultChecked":u=c;break;case"value":r=c;break;case"defaultValue":a=c;break;case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(b(137,e));break;default:pe(t,e,i,c,n,null)}}_b(t,r,a,l,u,o,s,!1);return;case"select":X("invalid",t),i=o=r=null;for(s in n)if(n.hasOwnProperty(s)&&(a=n[s],a!=null))switch(s){case"value":r=a;break;case"defaultValue":o=a;break;case"multiple":i=a;default:pe(t,e,s,a,n,null)}e=r,n=o,t.multiple=!!i,e!=null?co(t,!!i,e,!1):n!=null&&co(t,!!i,n,!0);return;case"textarea":X("invalid",t),r=s=i=null;for(o in n)if(n.hasOwnProperty(o)&&(a=n[o],a!=null))switch(o){case"value":i=a;break;case"defaultValue":s=a;break;case"children":r=a;break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(b(91));break;default:pe(t,e,o,a,n,null)}wb(t,i,s,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:pe(t,e,l,i,n,null)}return;case"dialog":X("beforetoggle",t),X("toggle",t),X("cancel",t),X("close",t);break;case"iframe":case"object":X("load",t);break;case"video":case"audio":for(i=0;i<Cl.length;i++)X(Cl[i],t);break;case"image":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"embed":case"source":case"link":X("error",t),X("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,e));default:pe(t,e,u,i,n,null)}return;default:if(Iy(e)){for(c in n)n.hasOwnProperty(c)&&(i=n[c],i!==void 0&&eg(t,e,c,i,n,void 0));return}}for(a in n)n.hasOwnProperty(a)&&(i=n[a],i!=null&&pe(t,e,a,i,n,null))}function wM(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,o=null,a=null,l=null,u=null,c=null;for(d in n){var h=n[d];if(n.hasOwnProperty(d)&&h!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(d)||pe(t,e,d,null,i,h)}}for(var f in i){var d=i[f];if(h=n[f],i.hasOwnProperty(f)&&(d!=null||h!=null))switch(f){case"type":r=d;break;case"name":s=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":o=d;break;case"defaultValue":a=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(b(137,e));break;default:d!==h&&pe(t,e,f,d,i,h)}}Cm(t,o,a,l,u,c,r,s);return;case"select":d=o=a=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(r)||pe(t,e,r,null,i,l)}for(s in i)if(r=i[s],l=n[s],i.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":f=r;break;case"defaultValue":a=r;break;case"multiple":o=r;default:r!==l&&pe(t,e,s,r,i,l)}e=a,n=o,i=d,f!=null?co(t,!!n,f,!1):!!i!=!!n&&(e!=null?co(t,!!n,e,!0):co(t,!!n,n?[]:"",!1));return;case"textarea":d=f=null;for(a in n)if(s=n[a],n.hasOwnProperty(a)&&s!=null&&!i.hasOwnProperty(a))switch(a){case"value":break;case"children":break;default:pe(t,e,a,null,i,s)}for(o in i)if(s=i[o],r=n[o],i.hasOwnProperty(o)&&(s!=null||r!=null))switch(o){case"value":f=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(b(91));break;default:s!==r&&pe(t,e,o,s,i,r)}Eb(t,f,d);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g))switch(g){case"selected":t.selected=!1;break;default:pe(t,e,g,null,i,f)}for(l in i)if(f=i[l],d=n[l],i.hasOwnProperty(l)&&f!==d&&(f!=null||d!=null))switch(l){case"selected":t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:pe(t,e,l,f,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in n)f=n[v],n.hasOwnProperty(v)&&f!=null&&!i.hasOwnProperty(v)&&pe(t,e,v,null,i,f);for(u in i)if(f=i[u],d=n[u],i.hasOwnProperty(u)&&f!==d&&(f!=null||d!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(b(137,e));break;default:pe(t,e,u,f,i,d)}return;default:if(Iy(e)){for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!==void 0&&!i.hasOwnProperty(_)&&eg(t,e,_,void 0,i,f);for(c in i)f=i[c],d=n[c],!i.hasOwnProperty(c)||f===d||f===void 0&&d===void 0||eg(t,e,c,f,i,d);return}}for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!=null&&!i.hasOwnProperty(m)&&pe(t,e,m,null,i,f);for(h in i)f=i[h],d=n[h],!i.hasOwnProperty(h)||f===d||f==null&&d==null||pe(t,e,h,f,i,d)}function jE(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],r=s.transferSize,o=s.initiatorType,a=s.duration;if(r&&a&&jE(o)){for(o=0,a=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],u=l.startTime;if(u>a)break;var c=l.transferSize,h=l.initiatorType;c&&jE(h)&&(l=l.responseEnd,o+=c*(l<a?1:(a-u)/(l-u)))}if(--i,e+=8*(r+o)/(s.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var tg=null,ng=null;function Mh(t){return t.nodeType===9?t:t.ownerDocument}function FE(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function AC(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ig(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Np=null;function bM(){var t=window.event;return t&&t.type==="popstate"?t===Np?!1:(Np=t,!0):(Np=null,!1)}var NC=typeof setTimeout=="function"?setTimeout:void 0,SM=typeof clearTimeout=="function"?clearTimeout:void 0,VE=typeof Promise=="function"?Promise:void 0,CM=typeof queueMicrotask=="function"?queueMicrotask:typeof VE<"u"?function(t){return VE.resolve(null).then(t).catch(AM)}:NC;function AM(t){setTimeout(function(){throw t})}function Ts(t){return t==="head"}function qE(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(s),Po(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")sl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,sl(n);for(var r=n.firstChild;r;){var o=r.nextSibling,a=r.nodeName;r[uu]||a==="SCRIPT"||a==="STYLE"||a==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=o}}else n==="body"&&sl(t.ownerDocument.body);n=s}while(n);Po(e)}function HE(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function sg(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":sg(n),Ry(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function NM(t,e,n,i){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[uu])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=yn(t.nextSibling),t===null)break}return null}function RM(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yn(t.nextSibling),t===null))return null;return t}function RC(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=yn(t.nextSibling),t===null))return null;return t}function rg(t){return t.data==="$?"||t.data==="$~"}function og(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function IM(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ag=null;function $E(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return yn(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function GE(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function IC(t,e,n){switch(e=Mh(n),t){case"html":if(t=e.documentElement,!t)throw Error(b(452));return t;case"head":if(t=e.head,!t)throw Error(b(453));return t;case"body":if(t=e.body,!t)throw Error(b(454));return t;default:throw Error(b(451))}}function sl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ry(t)}var vn=new Map,KE=new Set;function kh(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ni=le.d;le.d={f:xM,r:DM,D:OM,C:MM,L:kM,m:LM,X:zM,S:UM,M:PM};function xM(){var t=Ni.f(),e=Vf();return t||e}function DM(t){var e=na(t);e!==null&&e.tag===5&&e.type==="form"?TS(e):Ni.r(t)}var oa=typeof document>"u"?null:document;function xC(t,e,n){var i=oa;if(i&&typeof e=="string"&&e){var s=hn(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),KE.has(s)||(KE.add(s),t={rel:t,crossOrigin:n,href:e},i.querySelector(s)===null&&(e=i.createElement("link"),ft(e,"link",t),et(e),i.head.appendChild(e)))}}function OM(t){Ni.D(t),xC("dns-prefetch",t,null)}function MM(t,e){Ni.C(t,e),xC("preconnect",t,e)}function kM(t,e,n){Ni.L(t,e,n);var i=oa;if(i&&t&&e){var s='link[rel="preload"][as="'+hn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+hn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+hn(n.imageSizes)+'"]')):s+='[href="'+hn(t)+'"]';var r=s;switch(e){case"style":r=zo(t);break;case"script":r=aa(t)}vn.has(r)||(t=Ce({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),vn.set(r,t),i.querySelector(s)!==null||e==="style"&&i.querySelector(mu(r))||e==="script"&&i.querySelector(gu(r))||(e=i.createElement("link"),ft(e,"link",t),et(e),i.head.appendChild(e)))}}function LM(t,e){Ni.m(t,e);var n=oa;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+hn(i)+'"][href="'+hn(t)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=aa(t)}if(!vn.has(r)&&(t=Ce({rel:"modulepreload",href:t},e),vn.set(r,t),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(gu(r)))return}i=n.createElement("link"),ft(i,"link",t),et(i),n.head.appendChild(i)}}}function UM(t,e,n){Ni.S(t,e,n);var i=oa;if(i&&t){var s=uo(i).hoistableStyles,r=zo(t);e=e||"default";var o=s.get(r);if(!o){var a={loading:0,preload:null};if(o=i.querySelector(mu(r)))a.loading=5;else{t=Ce({rel:"stylesheet",href:t,"data-precedence":e},n),(n=vn.get(r))&&dv(t,n);var l=o=i.createElement("link");et(l),ft(l,"link",t),l._p=new Promise(function(u,c){l.onload=u,l.onerror=c}),l.addEventListener("load",function(){a.loading|=1}),l.addEventListener("error",function(){a.loading|=2}),a.loading|=4,$c(o,e,i)}o={type:"stylesheet",instance:o,count:1,state:a},s.set(r,o)}}}function zM(t,e){Ni.X(t,e);var n=oa;if(n&&t){var i=uo(n).hoistableScripts,s=aa(t),r=i.get(s);r||(r=n.querySelector(gu(s)),r||(t=Ce({src:t,async:!0},e),(e=vn.get(s))&&pv(t,e),r=n.createElement("script"),et(r),ft(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function PM(t,e){Ni.M(t,e);var n=oa;if(n&&t){var i=uo(n).hoistableScripts,s=aa(t),r=i.get(s);r||(r=n.querySelector(gu(s)),r||(t=Ce({src:t,async:!0,type:"module"},e),(e=vn.get(s))&&pv(t,e),r=n.createElement("script"),et(r),ft(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function YE(t,e,n,i){var s=(s=Ji.current)?kh(s):null;if(!s)throw Error(b(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=zo(n.href),n=uo(s).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=zo(n.href);var r=uo(s).hoistableStyles,o=r.get(t);if(o||(s=s.ownerDocument||s,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,o),(r=s.querySelector(mu(t)))&&!r._p&&(o.instance=r,o.state.loading=5),vn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vn.set(t,n),r||BM(s,t,n,o.state))),e&&i===null)throw Error(b(528,""));return o}if(e&&i!==null)throw Error(b(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=aa(n),n=uo(s).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,t))}}function zo(t){return'href="'+hn(t)+'"'}function mu(t){return'link[rel="stylesheet"]['+t+"]"}function DC(t){return Ce({},t,{"data-precedence":t.precedence,precedence:null})}function BM(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ft(e,"link",n),et(e),t.head.appendChild(e))}function aa(t){return'[src="'+hn(t)+'"]'}function gu(t){return"script[async]"+t}function QE(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+hn(n.href)+'"]');if(i)return e.instance=i,et(i),i;var s=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),et(i),ft(i,"style",s),$c(i,n.precedence,t),e.instance=i;case"stylesheet":s=zo(n.href);var r=t.querySelector(mu(s));if(r)return e.state.loading|=4,e.instance=r,et(r),r;i=DC(n),(s=vn.get(s))&&dv(i,s),r=(t.ownerDocument||t).createElement("link"),et(r);var o=r;return o._p=new Promise(function(a,l){o.onload=a,o.onerror=l}),ft(r,"link",i),e.state.loading|=4,$c(r,n.precedence,t),e.instance=r;case"script":return r=aa(n.src),(s=t.querySelector(gu(r)))?(e.instance=s,et(s),s):(i=n,(s=vn.get(r))&&(i=Ce({},n),pv(i,s)),t=t.ownerDocument||t,s=t.createElement("script"),et(s),ft(s,"link",i),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(b(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,$c(i,n.precedence,t));return e.instance}function $c(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,o=0;o<i.length;o++){var a=i[o];if(a.dataset.precedence===e)r=a;else if(r!==s)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function dv(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function pv(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Gc=null;function XE(t,e,n){if(Gc===null){var i=new Map,s=Gc=new Map;s.set(n,i)}else s=Gc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var r=n[s];if(!(r[uu]||r[ut]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(e)||"";o=t+o;var a=i.get(o);a?a.push(r):i.set(o,[r])}}return i}function WE(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function jM(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function OC(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function FM(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var s=zo(i.href),r=e.querySelector(mu(s));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Lh.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,et(r);return}r=e.ownerDocument||e,i=DC(i),(s=vn.get(s))&&dv(i,s),r=r.createElement("link"),et(r);var o=r;o._p=new Promise(function(a,l){o.onload=a,o.onerror=l}),ft(r,"link",i),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Lh.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Rp=0;function VM(t,e){return t.stylesheets&&t.count===0&&Kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&Rp===0&&(Rp=62500*TM());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>Rp?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Lh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uh=null;function Kc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uh=new Map,e.forEach(qM,t),Uh=null,Lh.call(t))}function qM(t,e){if(!(e.state.loading&4)){var n=Uh.get(t);if(n)var i=n.get(null);else{n=new Map,Uh.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var o=s[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),i=o)}i&&n.set(null,i)}s=e.instance,o=s.getAttribute("data-precedence"),r=n.get(o)||i,r===i&&n.set(null,s),n.set(o,s),this.count++,i=Lh.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var Nl={$$typeof:ni,Provider:null,Consumer:null,_currentValue:Gs,_currentValue2:Gs,_threadCount:0};function HM(t,e,n,i,s,r,o,a,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wd(0),this.hiddenUpdates=Wd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function MC(t,e,n,i,s,r,o,a,l,u,c,h){return t=new HM(t,e,n,o,l,u,c,h,a),e=1,r===!0&&(e|=24),r=Gt(3,null,null,e),t.current=r,r.stateNode=t,e=jy(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},qy(r),t}function kC(t){return t?(t=to,t):to}function LC(t,e,n,i,s,r){s=kC(s),i.context===null?i.context=s:i.pendingContext=s,i=es(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=ts(t,i,e),n!==null&&(jt(n,t,e),Xa(n,t,e))}function JE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mv(t,e){JE(t,e),(t=t.alternate)&&JE(t,e)}function UC(t){if(t.tag===13||t.tag===31){var e=Cr(t,67108864);e!==null&&jt(e,t,67108864),mv(t,67108864)}}function ZE(t){if(t.tag===13||t.tag===31){var e=Jt();e=Ay(e);var n=Cr(t,e);n!==null&&jt(n,t,e),mv(t,e)}}var zh=!0;function $M(t,e,n,i){var s=B.T;B.T=null;var r=le.p;try{le.p=2,gv(t,e,n,i)}finally{le.p=r,B.T=s}}function GM(t,e,n,i){var s=B.T;B.T=null;var r=le.p;try{le.p=8,gv(t,e,n,i)}finally{le.p=r,B.T=s}}function gv(t,e,n,i){if(zh){var s=lg(i);if(s===null)Ap(t,e,i,Ph,n),ew(t,i);else if(YM(s,t,e,n,i))i.stopPropagation();else if(ew(t,i),e&4&&-1<KM.indexOf(t)){for(;s!==null;){var r=na(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=Ds(r.pendingLanes);if(o!==0){var a=r;for(a.pendingLanes|=2,a.entangledLanes|=2;o;){var l=1<<31-Wt(o);a.entanglements[1]|=l,o&=~l}Kn(r),!(ae&6)&&(Nh=Qt()+500,pu(0,!1))}}break;case 31:case 13:a=Cr(r,2),a!==null&&jt(a,r,2),Vf(),mv(r,2)}if(r=lg(i),r===null&&Ap(t,e,i,Ph,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else Ap(t,e,i,null,n)}}function lg(t){return t=xy(t),yv(t)}var Ph=null;function yv(t){if(Ph=null,t=Qr(t),t!==null){var e=ru(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=nb(e),t!==null)return t;t=null}else if(n===31){if(t=ib(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ph=t,null}function zC(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(OD()){case ab:return 2;case lb:return 8;case dh:case MD:return 32;case ub:return 268435456;default:return 32}default:return 32}}var ug=!1,ss=null,rs=null,os=null,Rl=new Map,Il=new Map,ji=[],KM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ew(t,e){switch(t){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(e.pointerId)}}function Aa(t,e,n,i,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},e!==null&&(e=na(e),e!==null&&UC(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function YM(t,e,n,i,s){switch(e){case"focusin":return ss=Aa(ss,t,e,n,i,s),!0;case"dragenter":return rs=Aa(rs,t,e,n,i,s),!0;case"mouseover":return os=Aa(os,t,e,n,i,s),!0;case"pointerover":var r=s.pointerId;return Rl.set(r,Aa(Rl.get(r)||null,t,e,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Il.set(r,Aa(Il.get(r)||null,t,e,n,i,s)),!0}return!1}function PC(t){var e=Qr(t.target);if(e!==null){var n=ru(e);if(n!==null){if(e=n.tag,e===13){if(e=nb(n),e!==null){t.blockedOn=e,P0(t.priority,function(){ZE(n)});return}}else if(e===31){if(e=ib(n),e!==null){t.blockedOn=e,P0(t.priority,function(){ZE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lg(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nm=i,n.target.dispatchEvent(i),Nm=null}else return e=na(n),e!==null&&UC(e),t.blockedOn=n,!1;e.shift()}return!0}function tw(t,e,n){Yc(t)&&n.delete(e)}function QM(){ug=!1,ss!==null&&Yc(ss)&&(ss=null),rs!==null&&Yc(rs)&&(rs=null),os!==null&&Yc(os)&&(os=null),Rl.forEach(tw),Il.forEach(tw)}function pc(t,e){t.blockedOn===e&&(t.blockedOn=null,ug||(ug=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,QM)))}var mc=null;function nw(t){mc!==t&&(mc=t,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,function(){mc===t&&(mc=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],s=t[e+2];if(typeof i!="function"){if(yv(i||n)===null)continue;break}var r=na(n);r!==null&&(t.splice(e,3),e-=3,qm(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Po(t){function e(l){return pc(l,t)}ss!==null&&pc(ss,t),rs!==null&&pc(rs,t),os!==null&&pc(os,t),Rl.forEach(e),Il.forEach(e);for(var n=0;n<ji.length;n++){var i=ji[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)PC(n),n.blockedOn===null&&ji.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],o=s[Ft]||null;if(typeof r=="function")o||nw(n);else if(o){var a=null;if(r&&r.hasAttribute("formAction")){if(s=r,o=r[Ft]||null)a=o.formAction;else if(yv(s)!==null)continue}else a=o.action;typeof a=="function"?n[i+1]=a:(n.splice(i,3),i-=3),nw(n)}}}function BC(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return s=o})},focusReset:"manual",scroll:"manual"})}function e(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),s!==null&&(s(),s=null)}}}function vv(t){this._internalRoot=t}$f.prototype.render=vv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));var n=e.current,i=Jt();LC(n,i,t,e,null,null)};$f.prototype.unmount=vv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;LC(t.current,2,null,t,null,null),Vf(),e[ta]=null}};function $f(t){this._internalRoot=t}$f.prototype.unstable_scheduleHydration=function(t){if(t){var e=pb();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&PC(t)}};var iw=eb.version;if(iw!=="19.2.1")throw Error(b(527,iw,"19.2.1"));le.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=CD(e),t=t!==null?sb(t):null,t=t===null?null:t.stateNode,t};var XM={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ou=gc.inject(XM),Xt=gc}catch{}}Rf.createRoot=function(t,e){if(!tb(t))throw Error(b(299));var n=!1,i="",s=xS,r=DS,o=OS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=MC(t,1,!1,null,null,n,i,null,s,r,o,BC),t[ta]=e.current,fv(t),new vv(e)};Rf.hydrateRoot=function(t,e,n){if(!tb(t))throw Error(b(299));var i=!1,s="",r=xS,o=DS,a=OS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(a=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=MC(t,1,!0,e,n??null,i,s,l,r,o,a,BC),e.context=kC(null),n=e.current,i=Jt(),i=Ay(i),s=es(i),s.callback=null,ts(n,s,i),n=i,e.current.lanes=n,lu(e,n),Kn(e),t[ta]=e.current,fv(t),new $f(e)};Rf.version="19.2.1";function jC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jC)}catch(t){console.error(t)}}jC(),YT.exports=Rf;var WM=YT.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(t,e){if(!t)throw la(e)},la=function(t){return new Error("Firebase Database ("+FC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},JM=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,c=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;l||(d=64,o||(f=64)),i.push(n[c],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(VC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||u==null||h==null)throw new ZM;const f=r<<2|a>>4;if(i.push(f),u!==64){const d=a<<4&240|u>>2;if(i.push(d),h!==64){const g=u<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qC=function(t){const e=VC(t);return _v.encodeByteArray(e,!0)},Bh=function(t){return qC(t).replace(/\./g,"")},jh=function(t){try{return _v.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){return HC(void 0,t)}function HC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tk(n)||(t[n]=HC(t[n],e[n]));return t}function tk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=()=>nk().__FIREBASE_DEFAULTS__,sk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jh(t[1]);return e&&JSON.parse(e)},Gf=()=>{try{return ik()||sk()||rk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$C=t=>{var e,n;return(n=(e=Gf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ev=t=>{const e=$C(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},GC=()=>{var t;return(t=Gf())===null||t===void 0?void 0:t.config},KC=t=>{var e;return(e=Gf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Bh(JSON.stringify(n)),Bh(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function ok(){var t;const e=(t=Gf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ak(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lk(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XC(){return FC.NODE_ADMIN===!0}function WC(){try{return typeof indexedDB=="object"}catch{return!1}}function uk(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="FirebaseError";class wn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ck,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?hk(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wn(s,a,i)}}function hk(t,e){return t.replace(fk,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const fk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){return JSON.parse(t)}function tt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=xl(jh(r[0])||""),n=xl(jh(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},dk=function(t){const e=JC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pk=function(t){const e=JC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fh(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Vh(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(sw(r)&&sw(o)){if(!Vh(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function sw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^r&(o^a),c=1518500249):(u=r^o^a,c=1859775393):h<60?(u=r&o|a&(r|o),c=2400959708):(u=r^o^a,c=3395469782);const f=(s<<5|s>>>27)+u+l+c+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function gk(t,e){const n=new yk(t,e);return n.subscribe.bind(n)}class yk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");vk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Ip),s.error===void 0&&(s.error=Ip),s.complete===void 0&&(s.complete=Ip);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ip(){}function ZC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,A(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Kf=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=1e3,wk=2,Tk=4*60*60*1e3,bk=.5;function Sk(t,e=Ek,n=wk){const i=e*Math.pow(n,t),s=Math.round(bk*i*(Math.random()-.5)*2);return Math.min(Tk,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new wv;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nk(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ak(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ak(t){return t===ks?void 0:t}function Nk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ck(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Ik={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},xk=se.INFO,Dk={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Ok=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Dk[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yu{constructor(e){this.name=e,this._logLevel=xk,this._logHandler=Ok,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ik[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Mk=(t,e)=>e.some(n=>t instanceof n);let rw,ow;function kk(){return rw||(rw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lk(){return ow||(ow=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const eA=new WeakMap,hg=new WeakMap,tA=new WeakMap,xp=new WeakMap,bv=new WeakMap;function Uk(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(as(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&eA.set(n,t)}).catch(()=>{}),bv.set(e,t),e}function zk(t){if(hg.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hg.set(t,e)}let fg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tA.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return as(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pk(t){fg=t(fg)}function Bk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Dp(this),e,...n);return tA.set(i,e.sort?e.sort():[e]),as(i)}:Lk().includes(t)?function(...e){return t.apply(Dp(this),e),as(eA.get(this))}:function(...e){return as(t.apply(Dp(this),e))}}function jk(t){return typeof t=="function"?Bk(t):(t instanceof IDBTransaction&&zk(t),Mk(t,kk())?new Proxy(t,fg):t)}function as(t){if(t instanceof IDBRequest)return Uk(t);if(xp.has(t))return xp.get(t);const e=jk(t);return e!==t&&(xp.set(t,e),bv.set(e,t)),e}const Dp=t=>bv.get(t);function Fk(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=as(o);return i&&o.addEventListener("upgradeneeded",l=>{i(as(o.result),l.oldVersion,l.newVersion,as(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Vk=["get","getKey","getAll","getAllKeys","count"],qk=["put","add","delete","clear"],Op=new Map;function aw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Op.get(e))return Op.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=qk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Vk.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Op.set(e,r),r}Pk(t=>({...t,get:(e,n,i)=>aw(e,n)||t.get(e,n,i),has:(e,n)=>!!aw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($k(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function $k(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dg="@firebase/app",lw="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new yu("@firebase/app"),Gk="@firebase/app-compat",Kk="@firebase/analytics-compat",Yk="@firebase/analytics",Qk="@firebase/app-check-compat",Xk="@firebase/app-check",Wk="@firebase/auth",Jk="@firebase/auth-compat",Zk="@firebase/database",e4="@firebase/database-compat",t4="@firebase/functions",n4="@firebase/functions-compat",i4="@firebase/installations",s4="@firebase/installations-compat",r4="@firebase/messaging",o4="@firebase/messaging-compat",a4="@firebase/performance",l4="@firebase/performance-compat",u4="@firebase/remote-config",c4="@firebase/remote-config-compat",h4="@firebase/storage",f4="@firebase/storage-compat",d4="@firebase/firestore",p4="@firebase/firestore-compat",m4="firebase",g4="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="[DEFAULT]",y4={[dg]:"fire-core",[Gk]:"fire-core-compat",[Yk]:"fire-analytics",[Kk]:"fire-analytics-compat",[Xk]:"fire-app-check",[Qk]:"fire-app-check-compat",[Wk]:"fire-auth",[Jk]:"fire-auth-compat",[Zk]:"fire-rtdb",[e4]:"fire-rtdb-compat",[t4]:"fire-fn",[n4]:"fire-fn-compat",[i4]:"fire-iid",[s4]:"fire-iid-compat",[r4]:"fire-fcm",[o4]:"fire-fcm-compat",[a4]:"fire-perf",[l4]:"fire-perf-compat",[u4]:"fire-rc",[c4]:"fire-rc-compat",[h4]:"fire-gcs",[f4]:"fire-gcs-compat",[d4]:"fire-fst",[p4]:"fire-fst-compat","fire-js":"fire-js",[m4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map,mg=new Map;function v4(t,e){try{t.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(mg.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;mg.set(e,t);for(const n of Dl.values())v4(n,t);return!0}function Rr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ls=new Nr("app","Firebase",_4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ls.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=g4;function nA(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:pg,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw ls.create("bad-app-name",{appName:String(s)});if(n||(n=GC()),!n)throw ls.create("no-options");const r=Dl.get(s);if(r){if(Vh(n,r.options)&&Vh(i,r.config))return r;throw ls.create("duplicate-app",{appName:s})}const o=new Rk(s);for(const l of mg.values())o.addComponent(l);const a=new E4(n,i,o);return Dl.set(s,a),a}function Yf(t=pg){const e=Dl.get(t);if(!e&&t===pg&&GC())return nA();if(!e)throw ls.create("no-app",{appName:t});return e}function w4(){return Array.from(Dl.values())}function qe(t,e,n){var i;let s=(i=y4[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}_n(new sn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4="firebase-heartbeat-database",b4=1,Ol="firebase-heartbeat-store";let Mp=null;function iA(){return Mp||(Mp=Fk(T4,b4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ol)}}}).catch(t=>{throw ls.create("idb-open",{originalErrorMessage:t.message})})),Mp}async function S4(t){try{return await(await iA()).transaction(Ol).objectStore(Ol).get(sA(t))}catch(e){if(e instanceof wn)ar.warn(e.message);else{const n=ls.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function uw(t,e){try{const i=(await iA()).transaction(Ol,"readwrite");await i.objectStore(Ol).put(e,sA(t)),await i.done}catch(n){if(n instanceof wn)ar.warn(n.message);else{const i=ls.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(i.message)}}}function sA(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4=1024,A4=30*24*60*60*1e3;class N4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new I4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=A4}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cw(),{heartbeatsToSend:n,unsentEntries:i}=R4(this._heartbeatsCache.heartbeats),s=Bh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function cw(){return new Date().toISOString().substring(0,10)}function R4(t,e=C4){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),hw(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hw(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class I4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WC()?uk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await S4(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hw(t){return Bh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x4(t){_n(new sn("platform-logger",e=>new Hk(e),"PRIVATE")),_n(new sn("heartbeat",e=>new N4(e),"PRIVATE")),qe(dg,lw,t),qe(dg,lw,"esm2017"),qe("fire-js","")}x4("");function Sv(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function rA(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D4=rA,oA=new Nr("auth","Firebase",rA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new yu("@firebase/auth");function O4(t,...e){qh.logLevel<=se.WARN&&qh.warn(`Auth (${Ii}): ${t}`,...e)}function Qc(t,...e){qh.logLevel<=se.ERROR&&qh.error(`Auth (${Ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,...e){throw Cv(t,...e)}function jn(t,...e){return Cv(t,...e)}function aA(t,e,n){const i=Object.assign(Object.assign({},D4()),{[e]:n});return new Nr("auth","Firebase",i).create(e,{appName:t.name})}function M4(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&qn(t,"argument-error"),aA(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cv(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return oA.create(t,...e)}function V(t,e,...n){if(!t)throw Cv(e,...n)}function ri(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qc(e),new Error(e)}function Ei(t,e){t||ri(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function k4(){return fw()==="http:"||fw()==="https:"}function fw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(k4()||ak()||"connection"in navigator)?navigator.onLine:!0}function U4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ei(n>e,"Short delay should be less than long delay!"),this.isMobile=Tv()||QC()}get(){return L4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t,e){Ei(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ri("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ri("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ri("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P4=new vu(3e4,6e4);function uA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _u(t,e,n,i,s={}){return cA(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=ua(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),lA.fetch()(hA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function cA(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},z4),e);try{const s=new j4(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw yc(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw yc(t,"user-disabled",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw aA(t,c,u);qn(t,c)}}catch(s){if(s instanceof wn)throw s;qn(t,"network-request-failed",{message:String(s)})}}async function B4(t,e,n,i,s={}){const r=await _u(t,e,n,i,s);return"mfaPendingCredential"in r&&qn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function hA(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Av(t.config,s):`${t.config.apiScheme}://${s}`}class j4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(jn(this.auth,"network-request-failed")),P4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yc(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=jn(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F4(t,e){return _u(t,"POST","/v1/accounts:delete",e)}async function V4(t,e){return _u(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q4(t,e=!1){const n=fe(t),i=await n.getIdToken(e),s=Nv(i);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:rl(kp(s.auth_time)),issuedAtTime:rl(kp(s.iat)),expirationTime:rl(kp(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function kp(t){return Number(t)*1e3}function Nv(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Qc("JWT malformed, contained fewer than 3 sections"),null;try{const s=jh(n);return s?JSON.parse(s):(Qc("Failed to decode base64 JWT payload"),null)}catch(s){return Qc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function H4(t){const e=Nv(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof wn&&$4(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function $4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rl(this.lastLoginAt),this.creationTime=rl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Ml(t,V4(n,{idToken:i}));V(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Q4(r.providerUserInfo):[],a=Y4(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new fA(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function K4(t){const e=fe(t);await Hh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Y4(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Q4(t){return t.map(e=>{var{providerId:n}=e,i=Sv(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X4(t,e){const n=await cA(t,{},async()=>{const i=ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=hA(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lA.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):H4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await X4(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new kl;return i&&(V(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(V(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(V(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kl,this.toJSON())}_performRefresh(){return ri("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ws{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Sv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fA(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ml(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return q4(this,e)}reload(){return K4(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ws(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Hh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ml(this,F4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,u,c;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:w,isAnonymous:N,providerData:O,stsTokenManager:R}=n;V(y&&R,e,"internal-error");const k=kl.fromJSON(this.name,R);V(typeof y=="string",e,"internal-error"),ki(h,e.name),ki(f,e.name),V(typeof w=="boolean",e,"internal-error"),V(typeof N=="boolean",e,"internal-error"),ki(d,e.name),ki(g,e.name),ki(v,e.name),ki(_,e.name),ki(m,e.name),ki(p,e.name);const U=new Ws({uid:y,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:N,photoURL:g,phoneNumber:d,tenantId:v,stsTokenManager:k,createdAt:m,lastLoginAt:p});return O&&Array.isArray(O)&&(U.providerData=O.map(Y=>Object.assign({},Y))),_&&(U._redirectEventId=_),U}static async _fromIdTokenResponse(e,n,i=!1){const s=new kl;s.updateFromServerResponse(n);const r=new Ws({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Hh(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=new Map;function oi(t){Ei(t instanceof Function,"Expected a class definition");let e=dw.get(t);return e?(Ei(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dA.type="NONE";const pw=dA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t,e,n){return`firebase:${t}:${e}:${n}`}class yo{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Xc(this.userKey,s.apiKey,r),this.fullPersistenceKey=Xc("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ws._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new yo(oi(pw),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||oi(pw);const o=Xc(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ws._fromJSON(e,c);u!==r&&(a=h),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new yo(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new yo(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vA(e))return"Blackberry";if(_A(e))return"Webos";if(Rv(e))return"Safari";if((e.includes("chrome/")||mA(e))&&!e.includes("edge/"))return"Chrome";if(yA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pA(t=bt()){return/firefox\//i.test(t)}function Rv(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mA(t=bt()){return/crios\//i.test(t)}function gA(t=bt()){return/iemobile/i.test(t)}function yA(t=bt()){return/android/i.test(t)}function vA(t=bt()){return/blackberry/i.test(t)}function _A(t=bt()){return/webos/i.test(t)}function Qf(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function W4(t=bt()){var e;return Qf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function J4(){return lk()&&document.documentMode===10}function EA(t=bt()){return Qf(t)||yA(t)||_A(t)||vA(t)||/windows phone/i.test(t)||gA(t)}function Z4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t,e=[]){let n;switch(t){case"Browser":n=mw(bt());break;case"Worker":n=`${mw(bt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${i}`}async function TA(t,e){return _u(t,"GET","/v2/recaptchaConfig",uA(t,e))}function gw(t){return t!==void 0&&t.enterprise!==void 0}class bA{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function SA(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=jn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",eL().appendChild(i)})}function tL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const nL="https://www.google.com/recaptcha/enterprise.js?render=",iL="recaptcha-enterprise",sL="NO_RECAPTCHA";class rL{constructor(e){this.type=iL,this.auth=Eu(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{TA(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new bA(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;gw(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(sL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&gw(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}SA(nL+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yw(this),this.idTokenSubscription=new yw(this),this.beforeStateQueue=new oL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=oi(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?fe(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(oi(e))})}async initializeRecaptchaConfig(){const e=await TA(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new bA(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new rL(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&oi(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[oi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&O4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Eu(t){return fe(t)}class yw{constructor(e){this.auth=e,this.observer=null,this.addObserver=gk(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t,e){const n=Rr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Vh(r,e??{}))return s;qn(s,"already-initialized")}return n.initialize({options:e})}function uL(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(oi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function cL(t,e,n){const i=Eu(t);V(i._canInitEmulator,i,"emulator-config-failed"),V(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=CA(e),{host:o,port:a}=hL(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fL()}function CA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hL(t){const e=CA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:vw(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:vw(o)}}}function vw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ri("not implemented")}_getIdTokenResponse(e){return ri("not implemented")}_linkToIdToken(e,n){return ri("not implemented")}_getReauthenticationResolver(e){return ri("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(t,e){return B4(t,"POST","/v1/accounts:signInWithIdp",uA(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dL="http://localhost";class lr extends AA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Sv(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new lr(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vo(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,vo(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vo(e,n)}buildRequest(){const e={requestUri:dL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ua(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends Iv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends wu{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fi.credential(e.oauthAccessToken)}catch{return null}}}Fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends wu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ti.credential(n,i)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends wu{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vi.credential(e.oauthAccessToken)}catch{return null}}}Vi.GITHUB_SIGN_IN_METHOD="github.com";Vi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends wu{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return qi.credential(n,i)}catch{return null}}}qi.TWITTER_SIGN_IN_METHOD="twitter.com";qi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Ws._fromIdTokenResponse(e,i,s),o=_w(i);return new jo({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=_w(i);return new jo({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function _w(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h extends wn{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,$h.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new $h(e,n,i,s)}}function NA(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?$h._fromErrorAndOperation(t,r,e,i):r})}async function pL(t,e,n=!1){const i=await Ml(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jo._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mL(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Ml(t,NA(i,s,e,t),n);V(r.idToken,i,"internal-error");const o=Nv(r.idToken);V(o,i,"internal-error");const{sub:a}=o;return V(t.uid===a,i,"user-mismatch"),jo._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&qn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(t,e,n=!1){const i="signIn",s=await NA(t,i,e),r=await jo._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function RA(t,e,n,i){return fe(t).onIdTokenChanged(e,n,i)}function yL(t,e,n){return fe(t).beforeAuthStateChanged(e,n)}const Gh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gh,"1"),this.storage.removeItem(Gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(){const t=bt();return Rv(t)||Qf(t)}const _L=1e3,EL=10;class xA extends IA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vL()&&Z4(),this.fallbackToPolling=EA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);J4()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EL):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},_L)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xA.type="LOCAL";const wL=xA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA extends IA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}DA.type="SESSION";const OA=DA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Xf(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,r)),l=await TL(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=xv("",20);s.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(c),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return window}function SL(t){Fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(){return typeof Fn().WorkerGlobalScope<"u"&&typeof Fn().importScripts=="function"}async function CL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NL(){return MA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA="firebaseLocalStorageDb",RL=1,Kh="firebaseLocalStorage",LA="fbase_key";class Tu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wf(t,e){return t.transaction([Kh],e?"readwrite":"readonly").objectStore(Kh)}function IL(){const t=indexedDB.deleteDatabase(kA);return new Tu(t).toPromise()}function yg(){const t=indexedDB.open(kA,RL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Kh,{keyPath:LA})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Kh)?e(i):(i.close(),await IL(),e(await yg()))})})}async function Ew(t,e,n){const i=Wf(t,!0).put({[LA]:e,value:n});return new Tu(i).toPromise()}async function xL(t,e){const n=Wf(t,!1).get(e),i=await new Tu(n).toPromise();return i===void 0?null:i.value}function ww(t,e){const n=Wf(t,!0).delete(e);return new Tu(n).toPromise()}const DL=800,OL=3;class UA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>OL)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xf._getInstance(NL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CL(),!this.activeServiceWorker)return;this.sender=new bL(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yg();return await Ew(e,Gh,"1"),await ww(e,Gh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ew(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>xL(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ww(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Wf(s,!1).getAll();return new Tu(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UA.type="LOCAL";const ML=UA;new vu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t,e){return e?oi(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv extends AA{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kL(t){return gL(t.auth,new Dv(t),t.bypassAuthState)}function LL(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),mL(n,new Dv(t),t.bypassAuthState)}async function UL(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),pL(n,new Dv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kL;case"linkViaPopup":case"linkViaRedirect":return UL;case"reauthViaPopup":case"reauthViaRedirect":return LL;default:qn(this.auth,"internal-error")}}resolve(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=new vu(2e3,1e4);async function PL(t,e,n){const i=Eu(t);M4(t,e,Iv);const s=zA(i,n);return new js(i,"signInViaPopup",e,s).executeNotNull()}class js extends PA{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,js.currentPopupAction&&js.currentPopupAction.cancel(),js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Ei(this.filter.length===1,"Popup operations only handle one event");const e=xv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,js.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zL.get())};e()}}js.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL="pendingRedirect",Wc=new Map;class jL extends PA{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Wc.get(this.auth._key());if(!e){try{const i=await FL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Wc.set(this.auth._key(),e)}return this.bypassAuthState||Wc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FL(t,e){const n=HL(e),i=qL(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function VL(t,e){Wc.set(t._key(),e)}function qL(t){return oi(t._redirectPersistence)}function HL(t){return Xc(BL,t.config.apiKey,t.name)}async function $L(t,e,n=!1){const i=Eu(t),s=zA(i,e),o=await new jL(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=10*60*1e3;class KL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!BA(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tw(e))}saveEventToCache(e){this.cachedEventUids.add(Tw(e)),this.lastProcessedEventTime=Date.now()}}function Tw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QL(t,e={}){return _u(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WL=/^https?/;async function JL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await QL(t);for(const n of e)try{if(ZL(n))return}catch{}qn(t,"unauthorized-domain")}function ZL(t){const e=gg(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!WL.test(n))return!1;if(XL.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eU=new vu(3e4,6e4);function bw(){const t=Fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tU(t){return new Promise((e,n)=>{var i,s,r;function o(){bw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bw(),n(jn(t,"network-request-failed"))},timeout:eU.get()})}if(!((s=(i=Fn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Fn().gapi)===null||r===void 0)&&r.load)o();else{const a=tL("iframefcb");return Fn()[a]=()=>{gapi.load?o():n(jn(t,"network-request-failed"))},SA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jc=null,e})}let Jc=null;function nU(t){return Jc=Jc||tU(t),Jc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU=new vu(5e3,15e3),sU="__/auth/iframe",rU="emulator/auth/iframe",oU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lU(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Av(e,rU):`https://${t.config.authDomain}/${sU}`,i={apiKey:e.apiKey,appName:t.name,v:Ii},s=aU.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ua(i).slice(1)}`}async function uU(t){const e=await nU(t),n=Fn().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:lU(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oU,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),a=Fn().setTimeout(()=>{r(o)},iU.get());function l(){Fn().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hU=500,fU=600,dU="_blank",pU="http://localhost";class Sw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mU(t,e,n,i=hU,s=fU){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cU),{width:i.toString(),height:s.toString(),top:r,left:o}),u=bt().toLowerCase();n&&(a=mA(u)?dU:n),pA(u)&&(e=e||pU,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[d,g])=>`${f}${d}=${g},`,"");if(W4(u)&&a!=="_self")return gU(e||"",a),new Sw(null);const h=window.open(e||"",a,c);V(h,t,"popup-blocked");try{h.focus()}catch{}return new Sw(h)}function gU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yU="__/auth/handler",vU="emulator/auth/handler",_U=encodeURIComponent("fac");async function Cw(t,e,n,i,s,r){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ii,eventId:s};if(e instanceof Iv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(r||{}))o[c]=h}if(e instanceof wu){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${_U}=${encodeURIComponent(l)}`:"";return`${EU(t)}?${ua(a).slice(1)}${u}`}function EU({config:t}){return t.emulator?Av(t,vU):`https://${t.authDomain}/${yU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="webStorageSupport";class wU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OA,this._completeRedirectFn=$L,this._overrideRedirectResult=VL}async _openPopup(e,n,i,s){var r;Ei((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Cw(e,n,i,gg(),s);return mU(e,o,xv())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Cw(e,n,i,gg(),s);return SL(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ei(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await uU(e),i=new KL(e);return n.register("authEvent",s=>(V(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lp,{type:Lp},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Lp];o!==void 0&&n(!!o),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EA()||Rv()||Qf()}}const TU=wU;var Aw="@firebase/auth",Nw="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CU(t){_n(new sn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wA(t)},u=new aL(i,s,r,l);return uL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),_n(new sn("auth-internal",e=>{const n=Eu(e.getProvider("auth").getImmediate());return(i=>new bU(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(Aw,Nw,SU(t)),qe(Aw,Nw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU=5*60,NU=KC("authIdTokenMaxAge")||AU;let Rw=null;const RU=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>NU)return;const s=n==null?void 0:n.token;Rw!==s&&(Rw=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function IU(t=Yf()){const e=Rr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lL(t,{popupRedirectResolver:TU,persistence:[ML,wL,OA]}),i=KC("authTokenSyncURL");if(i){const r=RU(i);yL(n,r,()=>r(n.currentUser)),RA(n,o=>r(o))}const s=$C("auth");return s&&cL(n,`http://${s}`),n}CU("Browser");var xU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,Ov=Ov||{},j=xU||self;function Jf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function DU(t){return Object.prototype.hasOwnProperty.call(t,Up)&&t[Up]||(t[Up]=++OU)}var Up="closure_uid_"+(1e9*Math.random()>>>0),OU=0;function MU(t,e,n){return t.call.apply(t.bind,arguments)}function kU(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function _t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_t=MU:_t=kU,_t.apply(null,arguments)}function vc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function bs(){this.s=this.s,this.o=this.o}var LU=0;bs.prototype.s=!1;bs.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),LU!=0)&&DU(this)};bs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jA=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Mv(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Iw(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Jf(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var UU=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",()=>{},e),j.removeEventListener("test",()=>{},e)}catch{}return t}();function Ll(t){return/^[\s\xa0]*$/.test(t)}function Zf(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function Dn(t){return Zf().indexOf(t)!=-1}function kv(t){return kv[" "](t),t}kv[" "]=function(){};function zU(t,e){var n=I3;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var PU=Dn("Opera"),Fo=Dn("Trident")||Dn("MSIE"),FA=Dn("Edge"),vg=FA||Fo,VA=Dn("Gecko")&&!(Zf().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge"))&&!(Dn("Trident")||Dn("MSIE"))&&!Dn("Edge"),BU=Zf().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge");function qA(){var t=j.document;return t?t.documentMode:void 0}var _g;e:{var zp="",Pp=function(){var t=Zf();if(VA)return/rv:([^\);]+)(\)|;)/.exec(t);if(FA)return/Edge\/([\d\.]+)/.exec(t);if(Fo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BU)return/WebKit\/(\S+)/.exec(t);if(PU)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pp&&(zp=Pp?Pp[1]:""),Fo){var Bp=qA();if(Bp!=null&&Bp>parseFloat(zp)){_g=String(Bp);break e}}_g=zp}var Eg;if(j.document&&Fo){var xw=qA();Eg=xw||parseInt(_g,10)||void 0}else Eg=void 0;var jU=Eg;function Ul(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(VA){e:{try{kv(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FU[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ul.$.h.call(this)}}rt(Ul,Et);var FU={2:"touch",3:"pen",4:"mouse"};Ul.prototype.h=function(){Ul.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Su="closure_listenable_"+(1e6*Math.random()|0),VU=0;function qU(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++VU,this.fa=this.ia=!1}function ed(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Lv(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function HU(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function HA(t){const e={};for(const n in t)e[n]=t[n];return e}const Dw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $A(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Dw.length;r++)n=Dw[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function td(t){this.src=t,this.g={},this.h=0}td.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Tg(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new qU(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function wg(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=jA(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ed(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tg(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Uv="closure_lm_"+(1e6*Math.random()|0),jp={};function GA(t,e,n,i,s){if(i&&i.once)return YA(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)GA(t,e[r],n,i,s);return null}return n=Bv(n),t&&t[Su]?t.O(e,n,bu(i)?!!i.capture:!!i,s):KA(t,e,n,!1,i,s)}function KA(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=bu(s)?!!s.capture:!!s,a=Pv(t);if(a||(t[Uv]=a=new td(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=$U(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)UU||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(XA(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $U(){function t(n){return e.call(t.src,t.listener,n)}const e=GU;return t}function YA(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)YA(t,e[r],n,i,s);return null}return n=Bv(n),t&&t[Su]?t.P(e,n,bu(i)?!!i.capture:!!i,s):KA(t,e,n,!0,i,s)}function QA(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)QA(t,e[r],n,i,s);else i=bu(i)?!!i.capture:!!i,n=Bv(n),t&&t[Su]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Tg(r,n,i,s),-1<n&&(ed(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tg(e,n,i,s)),(n=-1<t?e[t]:null)&&zv(n))}function zv(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Su])wg(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(XA(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Pv(e))?(wg(n,t),n.h==0&&(n.src=null,e[Uv]=null)):ed(t)}}}function XA(t){return t in jp?jp[t]:jp[t]="on"+t}function GU(t,e){if(t.fa)t=!0;else{e=new Ul(e,this);var n=t.listener,i=t.la||t.src;t.ia&&zv(t),t=n.call(i,e)}return t}function Pv(t){return t=t[Uv],t instanceof td?t:null}var Fp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bv(t){return typeof t=="function"?t:(t[Fp]||(t[Fp]=function(e){return t.handleEvent(e)}),t[Fp])}function st(){bs.call(this),this.i=new td(this),this.S=this,this.J=null}rt(st,bs);st.prototype[Su]=!0;st.prototype.removeEventListener=function(t,e,n,i){QA(this,t,e,n,i)};function dt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var s=e;e=new Et(i,t),$A(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=_c(o,i,!0,e)&&s}if(o=e.g=t,s=_c(o,i,!0,e)&&s,s=_c(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=_c(o,i,!1,e)&&s}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)ed(n[i]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};st.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function _c(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&wg(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var jv=j.JSON.stringify;class KU{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function YU(){var t=Fv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class QU{constructor(){this.h=this.g=null}add(e,n){const i=WA.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var WA=new KU(()=>new XU,t=>t.reset());class XU{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WU(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function JU(t){j.setTimeout(()=>{throw t},0)}let zl,Pl=!1,Fv=new QU,JA=()=>{const t=j.Promise.resolve(void 0);zl=()=>{t.then(ZU)}};var ZU=()=>{for(var t;t=YU();){try{t.h.call(t.g)}catch(n){JU(n)}var e=WA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pl=!1};function nd(t,e){st.call(this),this.h=t||1,this.g=e||j,this.j=_t(this.qb,this),this.l=Date.now()}rt(nd,st);I=nd.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dt(this,"tick"),this.ga&&(Vv(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}I.N=function(){nd.$.N.call(this),Vv(this),delete this.g};function qv(t,e,n){if(typeof t=="function")n&&(t=_t(t,n));else if(t&&typeof t.handleEvent=="function")t=_t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function ZA(t){t.g=qv(()=>{t.g=null,t.i&&(t.i=!1,ZA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class e3 extends bs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ZA(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bl(t){bs.call(this),this.h=t,this.g={}}rt(Bl,bs);var Ow=[];function eN(t,e,n,i){Array.isArray(n)||(n&&(Ow[0]=n.toString()),n=Ow);for(var s=0;s<n.length;s++){var r=GA(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function tN(t){Lv(t.g,function(e,n){this.g.hasOwnProperty(n)&&zv(e)},t),t.g={}}Bl.prototype.N=function(){Bl.$.N.call(this),tN(this)};Bl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function id(){this.g=!0}id.prototype.Ea=function(){this.g=!1};function t3(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function n3(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function ro(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+s3(t,n)+(i?" "+i:"")})}function i3(t,e){t.info(function(){return"TIMEOUT: "+e})}id.prototype.info=function(){};function s3(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return jv(n)}catch{return e}}var Ir={},Mw=null;function sd(){return Mw=Mw||new st}Ir.Ta="serverreachability";function nN(t){Et.call(this,Ir.Ta,t)}rt(nN,Et);function jl(t){const e=sd();dt(e,new nN(e))}Ir.STAT_EVENT="statevent";function iN(t,e){Et.call(this,Ir.STAT_EVENT,t),this.stat=e}rt(iN,Et);function It(t){const e=sd();dt(e,new iN(e,t))}Ir.Ua="timingevent";function sN(t,e){Et.call(this,Ir.Ua,t),this.size=e}rt(sN,Et);function Cu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var rd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rN={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hv(){}Hv.prototype.h=null;function kw(t){return t.h||(t.h=t.i())}function oN(){}var Au={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $v(){Et.call(this,"d")}rt($v,Et);function Gv(){Et.call(this,"c")}rt(Gv,Et);var bg;function od(){}rt(od,Hv);od.prototype.g=function(){return new XMLHttpRequest};od.prototype.i=function(){return{}};bg=new od;function Nu(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Bl(this),this.P=r3,t=vg?125:void 0,this.V=new nd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new aN}function aN(){this.i=null,this.g="",this.h=!1}var r3=45e3,Sg={},Yh={};I=Nu.prototype;I.setTimeout=function(t){this.P=t};function Cg(t,e,n){t.L=1,t.v=ld(wi(e)),t.s=n,t.S=!0,lN(t,null)}function lN(t,e){t.G=Date.now(),Ru(t),t.A=wi(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),gN(n.i,"t",i),t.C=0,n=t.l.J,t.h=new aN,t.g=zN(t.l,n?e:null,!t.s),0<t.O&&(t.M=new e3(_t(t.Pa,t,t.g),t.O)),eN(t.U,t.g,"readystatechange",t.nb),e=t.I?HA(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),jl(),t3(t.j,t.u,t.A,t.m,t.W,t.s)}I.nb=function(t){t=t.target;const e=this.M;e&&Ln(t)==3?e.l():this.Pa(t)};I.Pa=function(t){try{if(t==this.g)e:{const c=Ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||vg||this.g&&(this.h.h||this.g.ja()||Pw(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?jl(3):jl(2)),ad(this);var n=this.g.da();this.ca=n;t:if(uN(this)){var i=Pw(this.g);t="";var s=i.length,r=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fs(this),ol(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,n3(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ll(a)){var u=a;break t}}u=null}if(n=u)ro(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ag(this,n);else{this.i=!1,this.o=3,It(12),Fs(this),ol(this);break e}}this.S?(cN(this,c,o),vg&&this.i&&c==3&&(eN(this.U,this.V,"tick",this.mb),this.V.start())):(ro(this.j,this.m,o,null),Ag(this,o)),c==4&&Fs(this),this.i&&!this.J&&(c==4?MN(this.l,this):(this.i=!1,Ru(this)))}else A3(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),Fs(this),ol(this)}}}catch{}finally{}};function uN(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function cN(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=o3(t,n),s==Yh){e==4&&(t.o=4,It(14),i=!1),ro(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Sg){t.o=4,It(15),ro(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ro(t.j,t.m,s,null),Ag(t,s);uN(t)&&s!=Yh&&s!=Sg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jv(e),e.M=!0,It(11))):(ro(t.j,t.m,n,"[Invalid Chunked Response]"),Fs(t),ol(t))}I.mb=function(){if(this.g){var t=Ln(this.g),e=this.g.ja();this.C<e.length&&(ad(this),cN(this,t,e),this.i&&t!=4&&Ru(this))}};function o3(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Yh:(n=Number(e.substring(n,i)),isNaN(n)?Sg:(i+=1,i+n>e.length?Yh:(e=e.slice(i,i+n),t.C=i+n,e)))}I.cancel=function(){this.J=!0,Fs(this)};function Ru(t){t.Y=Date.now()+t.P,hN(t,t.P)}function hN(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Cu(_t(t.lb,t),e)}function ad(t){t.B&&(j.clearTimeout(t.B),t.B=null)}I.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(i3(this.j,this.A),this.L!=2&&(jl(),It(17)),Fs(this),this.o=2,ol(this)):hN(this,this.Y-t)};function ol(t){t.l.H==0||t.J||MN(t.l,t)}function Fs(t){ad(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Vv(t.V),tN(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ag(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ng(n.i,t))){if(!t.K&&Ng(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wh(n),hd(n);else break e;Wv(n),It(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Cu(_t(n.ib,n),6e3));if(1>=_N(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vs(n,11)}else if((t.K||n.g==t)&&Wh(n),!Ll(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Kv(r,r.h),r.h=null))}if(i.F){const v=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,be(i.I,i.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=UN(i,i.J?i.pa:null,i.Y),o.K){EN(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(ad(a),Ru(a)),i.g=o}else DN(i);0<n.j.length&&fd(n)}else u[0]!="stop"&&u[0]!="close"||Vs(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vs(n,7):Xv(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}jl(4)}catch{}}function a3(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Jf(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function l3(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Jf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function fN(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Jf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=l3(t),i=a3(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var dN=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u3(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Js(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Js){this.h=t.h,Qh(this,t.j),this.s=t.s,this.g=t.g,Xh(this,t.m),this.l=t.l;var e=t.i,n=new Fl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lw(this,n),this.o=t.o}else t&&(e=String(t).match(dN))?(this.h=!1,Qh(this,e[1]||"",!0),this.s=ja(e[2]||""),this.g=ja(e[3]||"",!0),Xh(this,e[4]),this.l=ja(e[5]||"",!0),Lw(this,e[6]||"",!0),this.o=ja(e[7]||"")):(this.h=!1,this.i=new Fl(null,this.h))}Js.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fa(e,Uw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fa(e,Uw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fa(n,n.charAt(0)=="/"?f3:h3,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fa(n,p3)),t.join("")};function wi(t){return new Js(t)}function Qh(t,e,n){t.j=n?ja(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lw(t,e,n){e instanceof Fl?(t.i=e,m3(t.i,t.h)):(n||(e=Fa(e,d3)),t.i=new Fl(e,t.h))}function be(t,e,n){t.i.set(e,n)}function ld(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ja(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,c3),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function c3(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Uw=/[#\/\?@]/g,h3=/[#\?:]/g,f3=/[#\?]/g,d3=/[#\?@]/g,p3=/#/g;function Fl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ss(t){t.g||(t.g=new Map,t.h=0,t.i&&u3(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}I=Fl.prototype;I.add=function(t,e){Ss(this),this.i=null,t=ca(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function pN(t,e){Ss(t),e=ca(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function mN(t,e){return Ss(t),e=ca(t,e),t.g.has(e)}I.forEach=function(t,e){Ss(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};I.ta=function(){Ss(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};I.Z=function(t){Ss(this);let e=[];if(typeof t=="string")mN(this,t)&&(e=e.concat(this.g.get(ca(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};I.set=function(t,e){return Ss(this),this.i=null,t=ca(this,t),mN(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};I.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function gN(t,e,n){pN(t,e),0<n.length&&(t.i=null,t.g.set(ca(t,e),Mv(n)),t.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ca(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function m3(t,e){e&&!t.j&&(Ss(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(pN(this,i),gN(this,s,n))},t)),t.j=e}var g3=class{constructor(t,e){this.g=t,this.map=e}};function yN(t){this.l=t||y3,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var y3=10;function vN(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _N(t){return t.h?1:t.g?t.g.size:0}function Ng(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Kv(t,e){t.g?t.g.add(e):t.h=e}function EN(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}yN.prototype.cancel=function(){if(this.i=wN(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function wN(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Mv(t.i)}var v3=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function _3(){this.g=new v3}function E3(t,e,n){const i=n||"";try{fN(t,function(s,r){let o=s;bu(s)&&(o=jv(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function w3(t,e){const n=new id;if(j.Image){const i=new Image;i.onload=vc(Ec,n,i,"TestLoadImage: loaded",!0,e),i.onerror=vc(Ec,n,i,"TestLoadImage: error",!1,e),i.onabort=vc(Ec,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=vc(Ec,n,i,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Ec(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Iu(t){this.l=t.fc||null,this.j=t.ob||!1}rt(Iu,Hv);Iu.prototype.g=function(){return new ud(this.l,this.j)};Iu.prototype.i=function(t){return function(){return t}}({});function ud(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Yv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(ud,st);var Yv=0;I=ud.prototype;I.open=function(t,e){if(this.readyState!=Yv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vl(this)};I.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xu(this)),this.readyState=Yv};I.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vl(this)),this.g&&(this.readyState=3,Vl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;TN(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function TN(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}I.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xu(this):Vl(this),this.readyState==3&&TN(this)}};I.Za=function(t){this.g&&(this.response=this.responseText=t,xu(this))};I.Ya=function(t){this.g&&(this.response=t,xu(this))};I.ka=function(){this.g&&xu(this)};function xu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vl(t)}I.setRequestHeader=function(t,e){this.v.append(t,e)};I.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ud.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var T3=j.JSON.parse;function Oe(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=bN,this.L=this.M=!1}rt(Oe,st);var bN="",b3=/^https?$/i,S3=["POST","PUT"];I=Oe.prototype;I.Oa=function(t){this.M=t};I.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bg.g(),this.C=this.u?kw(this.u):kw(bg),this.g.onreadystatechange=_t(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){zw(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=j.FormData&&t instanceof j.FormData,!(0<=jA(S3,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{AN(this),0<this.B&&((this.L=C3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_t(this.ua,this)):this.A=qv(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){zw(this,r)}};function C3(t){return Fo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}I.ua=function(){typeof Ov<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function zw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,SN(t),cd(t)}function SN(t){t.F||(t.F=!0,dt(t,"complete"),dt(t,"error"))}I.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),cd(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cd(this,!0)),Oe.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?CN(this):this.kb())};I.kb=function(){CN(this)};function CN(t){if(t.h&&typeof Ov<"u"&&(!t.C[1]||Ln(t)!=4||t.da()!=2)){if(t.v&&Ln(t)==4)qv(t.La,0,t);else if(dt(t,"readystatechange"),Ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(dN)[1]||null;!s&&j.self&&j.self.location&&(s=j.self.location.protocol.slice(0,-1)),i=!b3.test(s?s.toLowerCase():"")}n=i}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var r=2<Ln(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",SN(t)}}finally{cd(t)}}}}function cd(t,e){if(t.g){AN(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=i}catch{}}}function AN(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}I.isActive=function(){return!!this.g};function Ln(t){return t.g?t.g.readyState:0}I.da=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),T3(e)}};function Pw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case bN:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function A3(t){const e={};t=(t.g&&2<=Ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(Ll(t[i]))continue;var n=WU(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}HU(e,function(i){return i.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function NN(t){let e="";return Lv(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Qv(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=NN(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function Na(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function RN(t){this.Ga=0,this.j=[],this.l=new id,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Na("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Na("baseRetryDelayMs",5e3,t),this.hb=Na("retryDelaySeedMs",1e4,t),this.eb=Na("forwardChannelMaxRetries",2,t),this.xa=Na("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new yN(t&&t.concurrentRequestLimit),this.Ja=new _3,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=RN.prototype;I.ra=8;I.H=1;function Xv(t){if(IN(t),t.H==3){var e=t.W++,n=wi(t.I);if(be(n,"SID",t.K),be(n,"RID",e),be(n,"TYPE","terminate"),Du(t,n),e=new Nu(t,t.l,e),e.L=2,e.v=ld(wi(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=zN(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ru(e)}LN(t)}function hd(t){t.g&&(Jv(t),t.g.cancel(),t.g=null)}function IN(t){hd(t),t.u&&(j.clearTimeout(t.u),t.u=null),Wh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function fd(t){if(!vN(t.i)&&!t.m){t.m=!0;var e=t.Na;zl||JA(),Pl||(zl(),Pl=!0),Fv.add(e,t),t.C=0}}function N3(t,e){return _N(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Cu(_t(t.Na,t,e),kN(t,t.C)),t.C++,!0)}I.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Nu(this,this.l,t);let r=this.s;if(this.U&&(r?(r=HA(r),$A(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xN(this,s,e),n=wi(this.I),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),Du(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(NN(r)))+"&"+e:this.o&&Qv(n,this.o,r)),Kv(this.i,s),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),s.aa=!0,Cg(s,n,null)):Cg(s,n,e),this.H=2}}else this.H==3&&(t?Bw(this,t):this.j.length==0||vN(this.i)||Bw(this))};function Bw(t,e){var n;e?n=e.m:n=t.W++;const i=wi(t.I);be(i,"SID",t.K),be(i,"RID",n),be(i,"AID",t.V),Du(t,i),t.o&&t.s&&Qv(i,t.o,t.s),n=new Nu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=xN(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Kv(t.i,n),Cg(n,i,e)}function Du(t,e){t.na&&Lv(t.na,function(n,i){be(e,i,n)}),t.h&&fN({},function(n,i){be(e,i,n)})}function xN(t,e,n){n=Math.min(t.j.length,n);var i=t.h?_t(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let u=s[l].g;const c=s[l].map;if(u-=r,0>u)r=Math.max(0,s[l].g-100),a=!1;else try{E3(c,o,"req"+u+"_")}catch{i&&i(c)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function DN(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;zl||JA(),Pl||(zl(),Pl=!0),Fv.add(e,t),t.A=0}}function Wv(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Cu(_t(t.Ma,t),kN(t,t.A)),t.A++,!0)}I.Ma=function(){if(this.u=null,ON(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Cu(_t(this.jb,this),t)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,It(10),hd(this),ON(this))};function Jv(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function ON(t){t.g=new Nu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wi(t.wa);be(e,"RID","rpc"),be(e,"SID",t.K),be(e,"AID",t.V),be(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&be(e,"TO",t.qa),be(e,"TYPE","xmlhttp"),Du(t,e),t.o&&t.s&&Qv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ld(wi(e)),n.s=null,n.S=!0,lN(n,t)}I.ib=function(){this.v!=null&&(this.v=null,hd(this),Wv(this),It(19))};function Wh(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function MN(t,e){var n=null;if(t.g==e){Wh(t),Jv(t),t.g=null;var i=2}else if(Ng(t.i,e))n=e.F,EN(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=sd(),dt(i,new sN(i,n)),fd(t)}else DN(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&N3(t,e)||i==2&&Wv(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Vs(t,5);break;case 4:Vs(t,10);break;case 3:Vs(t,6);break;default:Vs(t,2)}}}function kN(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Vs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=_t(t.pb,t);n||(n=new Js("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Qh(n,"https"),ld(n)),w3(n.toString(),i)}else It(2);t.H=0,t.h&&t.h.za(e),LN(t),IN(t)}I.pb=function(t){t?(this.l.info("Successfully pinged google.com"),It(2)):(this.l.info("Failed to ping google.com"),It(1))};function LN(t){if(t.H=0,t.ma=[],t.h){const e=wN(t.i);(e.length!=0||t.j.length!=0)&&(Iw(t.ma,e),Iw(t.ma,t.j),t.i.i.length=0,Mv(t.j),t.j.length=0),t.h.ya()}}function UN(t,e,n){var i=n instanceof Js?wi(n):new Js(n);if(i.g!="")e&&(i.g=e+"."+i.g),Xh(i,i.m);else{var s=j.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Js(null);i&&Qh(r,i),e&&(r.g=e),s&&Xh(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&be(i,n,e),be(i,"VER",t.ra),Du(t,i),i}function zN(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Oe(new Iu({ob:!0})):new Oe(t.va),e.Oa(t.J),e}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function PN(){}I=PN.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function Jh(){if(Fo&&!(10<=Number(jU)))throw Error("Environmental error: no available transport.")}Jh.prototype.g=function(t,e){return new rn(t,e)};function rn(t,e){st.call(this),this.g=new RN(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ll(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ll(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ha(this)}rt(rn,st);rn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=UN(t,null,t.Y),fd(t)};rn.prototype.close=function(){Xv(this.g)};rn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jv(t),t=n);e.j.push(new g3(e.fb++,t)),e.H==3&&fd(e)};rn.prototype.N=function(){this.g.h=null,delete this.j,Xv(this.g),delete this.g,rn.$.N.call(this)};function BN(t){$v.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(BN,$v);function jN(){Gv.call(this),this.status=1}rt(jN,Gv);function ha(t){this.g=t}rt(ha,PN);ha.prototype.Ba=function(){dt(this.g,"a")};ha.prototype.Aa=function(t){dt(this.g,new BN(t))};ha.prototype.za=function(t){dt(this.g,new jN)};ha.prototype.ya=function(){dt(this.g,"b")};function R3(){this.blockSize=-1}function Rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}rt(Rn,R3);Rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vp(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Rn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Vp(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Vp(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Vp(this,i),s=0;break}}this.h=s,this.i+=e};Rn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function de(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var I3={};function Zv(t){return-128<=t&&128>t?zU(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Un(t){if(isNaN(t)||!isFinite(t))return _o;if(0>t)return lt(Un(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Rg;return new de(e,0)}function FN(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(FN(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Un(Math.pow(e,8)),i=_o,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Un(Math.pow(e,r)),i=i.R(r).add(Un(o))):(i=i.R(n),i=i.add(Un(o)))}return i}var Rg=4294967296,_o=Zv(0),Ig=Zv(1),jw=Zv(16777216);I=de.prototype;I.ea=function(){if(pn(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Rg+i)*e,e*=Rg}return t};I.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ai(this))return"0";if(pn(this))return"-"+lt(this).toString(t);for(var e=Un(Math.pow(t,6)),n=this,i="";;){var s=ef(n,e).g;n=Zh(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,ai(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};I.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ai(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function pn(t){return t.h==-1}I.X=function(t){return t=Zh(this,t),pn(t)?-1:ai(t)?0:1};function lt(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new de(n,~t.h).add(Ig)}I.abs=function(){return pn(this)?lt(this):this};I.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new de(n,n[n.length-1]&-2147483648?-1:0)};function Zh(t,e){return t.add(lt(e))}I.R=function(t){if(ai(this)||ai(t))return _o;if(pn(this))return pn(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(pn(t))return lt(this.R(lt(t)));if(0>this.X(jw)&&0>t.X(jw))return Un(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,wc(n,2*i+2*s),n[2*i+2*s+1]+=r*l,wc(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,wc(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,wc(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new de(n,0)};function wc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ra(t,e){this.g=t,this.h=e}function ef(t,e){if(ai(e))throw Error("division by zero");if(ai(t))return new Ra(_o,_o);if(pn(t))return e=ef(lt(t),e),new Ra(lt(e.g),lt(e.h));if(pn(e))return e=ef(t,lt(e)),new Ra(lt(e.g),e.h);if(30<t.g.length){if(pn(t)||pn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ig,i=e;0>=i.X(t);)n=Fw(n),i=Fw(i);var s=Ur(n,1),r=Ur(i,1);for(i=Ur(i,2),n=Ur(n,2);!ai(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Ur(i,1),n=Ur(n,1)}return e=Zh(t,s.R(e)),new Ra(s,e)}for(s=_o;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Un(n),o=r.R(e);pn(o)||0<o.X(t);)n-=i,r=Un(n),o=r.R(e);ai(r)&&(r=Ig),s=s.add(r),t=Zh(t,o)}return new Ra(s,t)}I.gb=function(t){return ef(this,t).h};I.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new de(n,this.h&t.h)};I.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new de(n,this.h|t.h)};I.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new de(n,this.h^t.h)};function Fw(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new de(n,t.h)}function Ur(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new de(s,t.h)}Jh.prototype.createWebChannel=Jh.prototype.g;rn.prototype.send=rn.prototype.u;rn.prototype.open=rn.prototype.m;rn.prototype.close=rn.prototype.close;rd.NO_ERROR=0;rd.TIMEOUT=8;rd.HTTP_ERROR=6;rN.COMPLETE="complete";oN.EventType=Au;Au.OPEN="a";Au.CLOSE="b";Au.ERROR="c";Au.MESSAGE="d";st.prototype.listen=st.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;Rn.prototype.digest=Rn.prototype.l;Rn.prototype.reset=Rn.prototype.reset;Rn.prototype.update=Rn.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Un;de.fromString=FN;var x3=function(){return new Jh},D3=function(){return sd()},qp=rd,O3=rN,M3=Ir,Vw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},k3=Iu,Tc=oN,L3=Oe,U3=Rn,Eo=de;const qw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new yu("@firebase/firestore");function Hw(){return ur.logLevel}function M(t,...e){if(ur.logLevel<=se.DEBUG){const n=e.map(e_);ur.debug(`Firestore (${fa}): ${t}`,...n)}}function Ti(t,...e){if(ur.logLevel<=se.ERROR){const n=e.map(e_);ur.error(`Firestore (${fa}): ${t}`,...n)}}function Vo(t,...e){if(ur.logLevel<=se.WARN){const n=e.map(e_);ur.warn(`Firestore (${fa}): ${t}`,...n)}}function e_(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${fa}) INTERNAL ASSERTION FAILED: `+t;throw Ti(e),new Error(e)}function he(t,e){t||z()}function q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let x=class extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class P3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let B3=class{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new fi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new fi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new fi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(he(typeof i.accessToken=="string"),new VN(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new gt(e)}},j3=class{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};class F3{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new j3(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}let V3=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class q3{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.T=n.token,new V3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H3(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qN=class{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=H3(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}};function re(t,e){return t<e?-1:t>e?1:0}function qo(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt=class Zc{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Zc.fromMillis(Date.now())}static fromDate(e){return Zc.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Zc(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F=class eh{constructor(e){this.timestamp=e}static fromTimestamp(e){return new eh(e)}static min(){return new eh(new xt(0,0))}static max(){return new eh(new xt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HN=class xg{constructor(e,n,i){n===void 0?n=0:n>e.length&&z(),i===void 0?i=e.length-n:i>e.length-n&&z(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return xg.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xg?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}},ke=class th extends HN{construct(e,n,i){return new th(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new x(T.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new th(n)}static emptyPath(){return new th([])}};const $3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Hn=class qr extends HN{construct(e,n,i){return new qr(e,n,i)}static isValidIdentifier(e){return $3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qr(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new x(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new x(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new x(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qr(n)}static emptyPath(){return new qr([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ke.fromString(e))}static fromName(e){return new L(ke.fromString(e).popFirst(5))}static empty(){return new L(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ke(e.slice()))}}function G3(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=F.fromTimestamp(i===1e9?new xt(n+1,0):new xt(n,i));return new gs(s,L.empty(),e)}function K3(t){return new gs(t.readTime,t.key,-1)}class gs{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new gs(F.min(),L.empty(),-1)}static max(){return new gs(F.max(),L.empty(),-1)}}function Y3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";let X3=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Q3)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,i)=>{n(e)})}static reject(e){return new C((n,i)=>{i(e)})}static waitFor(e){return new C((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=C.resolve(!1);for(const i of e)n=n.next(s=>s?C.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new C((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===r&&i(o)},c=>s(c))}})}static doWhile(e,n){return new C((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function Mu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}t_.ct=-1;function ku(t){return t==null}function tf(t){return t===0&&1/t==-1/0}function W3(t){return typeof t=="number"&&Number.isInteger(t)&&!tf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $N(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He=class Dg{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Dg(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Dg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bc(this.root,e,this.comparator,!1)}getReverseIterator(){return new bc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bc(this.root,e,this.comparator,!0)}},bc=class{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}};class at{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??at.RED,this.left=s??at.EMPTY,this.right=r??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new at(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,i,s){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gw(this.data.getIterator())}getIteratorFrom(e){return new Gw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}let Gw=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn=class Og{constructor(e){this.fields=e,e.sort(Hn.comparator)}static empty(){return new Og([])}unionWith(e){let n=new wt(Hn.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Og(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qo(this.fields,e.fields,(n,i)=>n.isEqual(i))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GN=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new GN("Invalid base64 string: "+s):s}}(e);return new St(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const J3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ys(t){if(he(!!t),typeof t=="string"){let e=0;const n=J3.exec(t);if(he(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cr(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function i_(t){const e=t.mapValue.fields.__previous_value__;return n_(e)?i_(e):e}function ql(t){const e=ys(t.mapValue.fields.__local_write_time__.timestampValue);return new xt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(e,n,i,s,r,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Hl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Hl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?n_(t)?4:e6(t)?9007199254740991:10:z()}function $n(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ql(t).isEqual(ql(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=ys(i.timestampValue),o=ys(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return cr(i.bytesValue).isEqual(cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=je(i.doubleValue),o=je(s.doubleValue);return r===o?tf(r)===tf(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return qo(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if($w(r)!==$w(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!$n(r[a],o[a])))return!1;return!0}(t,e);default:return z()}}function $l(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function Ho(t,e){if(t===e)return 0;const n=hr(t),i=hr(e);if(n!==i)return re(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=je(s.integerValue||s.doubleValue),a=je(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Kw(t.timestampValue,e.timestampValue);case 4:return Kw(ql(t),ql(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,r){const o=cr(s),a=cr(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=re(o[l],a[l]);if(u!==0)return u}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=re(je(s.latitude),je(r.latitude));return o!==0?o:re(je(s.longitude),je(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ho(o[l],a[l]);if(u)return u}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Sc.mapValue&&r===Sc.mapValue)return 0;if(s===Sc.mapValue)return 1;if(r===Sc.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=re(a[c],u[c]);if(h!==0)return h;const f=Ho(o[a[c]],l[u[c]]);if(f!==0)return f}return re(a.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function Kw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=ys(t),i=ys(e),s=re(n.seconds,i.seconds);return s!==0?s:re(n.nanos,i.nanos)}function $o(t){return Mg(t)}function Mg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=ys(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?cr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Mg(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Mg(i.fields[a])}`;return r+"}"}(t.mapValue):z();var e,n}function Yw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kg(t){return!!t&&"integerValue"in t}function s_(t){return!!t&&"arrayValue"in t}function Qw(t){return!!t&&"nullValue"in t}function Xw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nh(t){return!!t&&"mapValue"in t}function al(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=al(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=al(t.arrayValue.values[n]);return e}return Object.assign({},t)}function e6(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn=class Lg{constructor(e){this.value=e}static empty(){return new Lg({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!nh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=al(n)}setAll(e){let n=Hn.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=al(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());nh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];nh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){xr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Lg(al(this.value))}};function KN(t){const e=[];return xr(t.fields,(n,i)=>{const s=new Hn([n]);if(nh(i)){const r=KN(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In=class Ls{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ls(e,0,F.min(),F.min(),F.min(),mn.empty(),0)}static newFoundDocument(e,n,i,s){return new Ls(e,1,n,F.min(),i,s,0)}static newNoDocument(e,n){return new Ls(e,2,n,F.min(),F.min(),mn.empty(),0)}static newUnknownDocument(e,n){return new Ls(e,3,n,F.min(),F.min(),mn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ls&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ls(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf=class{constructor(e,n){this.position=e,this.inclusive=n}};function Ww(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=L.comparator(L.fromName(o.referenceValue),n.key):i=Ho(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Jw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo=class{constructor(e,n="asc"){this.field=e,this.dir=n}};function t6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YN=class{},nt=class QN extends YN{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new i6(e,n,i):n==="array-contains"?new o6(e,i):n==="in"?new a6(e,i):n==="not-in"?new l6(e,i):n==="array-contains-any"?new u6(e,i):new QN(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new s6(e,i):new r6(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ho(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.matchesComparison(Ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}},bi=class XN extends YN{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new XN(e,n)}matches(e){return WN(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}};function WN(t){return t.op==="and"}function JN(t){return n6(t)&&WN(t)}function n6(t){for(const e of t.filters)if(e instanceof bi)return!1;return!0}function Ug(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+$o(t.value);if(JN(t))return t.filters.map(e=>Ug(e)).join(",");{const e=t.filters.map(n=>Ug(n)).join(",");return`${t.op}(${e})`}}function ZN(t,e){return t instanceof nt?function(n,i){return i instanceof nt&&n.op===i.op&&n.field.isEqual(i.field)&&$n(n.value,i.value)}(t,e):t instanceof bi?function(n,i){return i instanceof bi&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&ZN(r,i.filters[o]),!0):!1}(t,e):void z()}function eR(t){return t instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${$o(e.value)}`}(t):t instanceof bi?function(e){return e.op.toString()+" {"+e.getFilters().map(eR).join(" ,")+"}"}(t):"Filter"}class i6 extends nt{constructor(e,n,i){super(e,n,i),this.key=L.fromName(i.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}let s6=class extends nt{constructor(e,n){super(e,"in",n),this.keys=tR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}};class r6 extends nt{constructor(e,n){super(e,"not-in",n),this.keys=tR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>L.fromName(i.referenceValue))}class o6 extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return s_(n)&&$l(n.arrayValue,this.value)}}let a6=class extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$l(this.value.arrayValue,n)}},l6=class extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if($l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$l(this.value.arrayValue,n)}};class u6 extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!s_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>$l(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Zw(t,e=null,n=[],i=[],s=null,r=null,o=null){return new c6(t,e,n,i,s,r,o)}function r_(t){const e=q(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Ug(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),ku(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>$o(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>$o(i)).join(",")),e.dt=n}return e.dt}function o_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!t6(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ZN(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jw(t.startAt,e.startAt)&&Jw(t.endAt,e.endAt)}function zg(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function h6(t,e,n,i,s,r,o,a){return new da(t,e,n,i,s,r,o,a)}function dd(t){return new da(t)}function e1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function a_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function pd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function nR(t){return t.collectionGroup!==null}function To(t){const e=q(t);if(e.wt===null){e.wt=[];const n=pd(e),i=a_(e);if(n!==null&&i===null)n.isKeyField()||e.wt.push(new wo(n)),e.wt.push(new wo(Hn.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new wo(Hn.keyField(),r))}}}return e.wt}function Si(t){const e=q(t);if(!e._t)if(e.limitType==="F")e._t=Zw(e.path,e.collectionGroup,To(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of To(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new wo(r.field,o))}const i=e.endAt?new nf(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new nf(e.startAt.position,e.startAt.inclusive):null;e._t=Zw(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e._t}function Pg(t,e){e.getFirstInequalityField(),pd(t);const n=t.filters.concat([e]);return new da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bg(t,e,n){return new da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lu(t,e){return o_(Si(t),Si(e))&&t.limitType===e.limitType}function iR(t){return`${r_(Si(t))}|lt:${t.limitType}`}function jg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>eR(i)).join(", ")}]`),ku(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>$o(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>$o(i)).join(",")),`Target(${n})`}(Si(t))}; limitType=${t.limitType})`}function md(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):L.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of To(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Ww(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,To(n),i)||n.endAt&&!function(s,r,o){const a=Ww(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,To(n),i))}(t,e)}function f6(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sR(t){return(e,n)=>{let i=!1;for(const s of To(t)){const r=d6(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function d6(t,e,n){const i=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Ho(a,l):z()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return $N(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p6=new He(L.comparator);function Ci(){return p6}const rR=new He(L.comparator);function Va(...t){let e=rR;for(const n of t)e=e.insert(n.key,n);return e}function oR(t){let e=rR;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function qs(){return ll()}function aR(){return ll()}function ll(){return new pa(t=>t.toString(),(t,e)=>t.isEqual(e))}const m6=new He(L.comparator),g6=new wt(L.comparator);function ee(...t){let e=g6;for(const n of t)e=e.add(n);return e}const y6=new wt(re);function v6(){return y6}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tf(e)?"-0":e}}function uR(t){return{integerValue:""+t}}function _6(t,e){return W3(e)?uR(e):lR(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this._=void 0}}function E6(t,e,n){return t instanceof sf?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&n_(s)&&(s=i_(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof Gl?hR(t,e):t instanceof Kl?fR(t,e):function(i,s){const r=cR(i,s),o=t1(r)+t1(i.gt);return kg(r)&&kg(i.gt)?uR(o):lR(i.serializer,o)}(t,e)}function w6(t,e,n){return t instanceof Gl?hR(t,e):t instanceof Kl?fR(t,e):n}function cR(t,e){return t instanceof rf?kg(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class sf extends gd{}class Gl extends gd{constructor(e){super(),this.elements=e}}function hR(t,e){const n=dR(e);for(const i of t.elements)n.some(s=>$n(s,i))||n.push(i);return{arrayValue:{values:n}}}class Kl extends gd{constructor(e){super(),this.elements=e}}function fR(t,e){let n=dR(e);for(const i of t.elements)n=n.filter(s=>!$n(s,i));return{arrayValue:{values:n}}}class rf extends gd{constructor(e,n){super(),this.serializer=e,this.gt=n}}function t1(t){return je(t.integerValue||t.doubleValue)}function dR(t){return s_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function T6(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Gl&&i instanceof Gl||n instanceof Kl&&i instanceof Kl?qo(n.elements,i.elements,$n):n instanceof rf&&i instanceof rf?$n(n.gt,i.gt):n instanceof sf&&i instanceof sf}(t.transform,e.transform)}class b6{constructor(e,n){this.version=e,this.transformResults=n}}class Nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ih(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yd{}function pR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new l_(t.key,Nt.none()):new Uu(t.key,t.data,Nt.none());{const n=t.data,i=mn.empty();let s=new wt(Hn.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Cs(t.key,i,new zn(s.toArray()),Nt.none())}}function S6(t,e,n){t instanceof Uu?function(i,s,r){const o=i.value.clone(),a=i1(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Cs?function(i,s,r){if(!ih(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=i1(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(mR(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ul(t,e,n,i){return t instanceof Uu?function(s,r,o,a){if(!ih(s.precondition,r))return o;const l=s.value.clone(),u=s1(s.fieldTransforms,a,r);return l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Cs?function(s,r,o,a){if(!ih(s.precondition,r))return o;const l=s1(s.fieldTransforms,a,r),u=r.data;return u.setAll(mR(s)),u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(t,e,n,i):function(s,r,o){return ih(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function C6(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=cR(i.transform,s||null);r!=null&&(n===null&&(n=mn.empty()),n.set(i.field,r))}return n||null}function n1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&qo(n,i,(s,r)=>T6(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uu extends yd{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cs extends yd{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function mR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function i1(t,e,n){const i=new Map;he(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,w6(o,a,n[s]))}return i}function s1(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,E6(r,o,e))}return i}class l_ extends yd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gR extends yd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&S6(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=ul(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=ul(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=aR();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=pR(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&qo(this.mutations,e.mutations,(n,i)=>n1(n,i))&&qo(this.baseMutations,e.baseMutations,(n,i)=>n1(n,i))}}let N6=class yR{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){he(e.mutations.length===i.length);let s=m6;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new yR(e,n,i,s)}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I6{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ie;function vR(t){switch(t){default:return z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function _R(t){if(t===void 0)return Ti("GRPC error has no .code"),T.UNKNOWN;switch(t){case ze.OK:return T.OK;case ze.CANCELLED:return T.CANCELLED;case ze.UNKNOWN:return T.UNKNOWN;case ze.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ze.INTERNAL:return T.INTERNAL;case ze.UNAVAILABLE:return T.UNAVAILABLE;case ze.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ze.NOT_FOUND:return T.NOT_FOUND;case ze.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ze.ABORTED:return T.ABORTED;case ze.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ze.DATA_LOSS:return T.DATA_LOSS;default:return z()}}(ie=ze||(ze={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Cc}static getOrCreateInstance(){return Cc===null&&(Cc=new u_),Cc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Cc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x6(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D6=new Eo([4294967295,4294967295],0);function r1(t){const e=x6().encode(t),n=new U3;return n.update(e),new Uint8Array(n.digest())}function o1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Eo([n,i],0),new Eo([s,r],0)]}class c_{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new qa(`Invalid padding: ${n}`);if(i<0)throw new qa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new qa(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new qa(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Eo.fromNumber(this.It)}Et(e,n,i){let s=e.add(n.multiply(Eo.fromNumber(i)));return s.compare(D6)===1&&(s=new Eo([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=r1(e),[i,s]=o1(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);if(!this.At(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new c_(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=r1(e),[i,s]=o1(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ER=class wR{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,zu.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new wR(F.min(),s,new He(re),Ci(),ee())}};class zu{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new zu(i,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh=class{constructor(e,n,i,s){this.Pt=e,this.removedTargetIds=n,this.key=i,this.bt=s}},TR=class{constructor(e,n){this.targetId=e,this.Vt=n}};class bR{constructor(e,n,i=St.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class a1{constructor(){this.St=0,this.Dt=u1(),this.Ct=St.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ee(),n=ee(),i=ee();return this.Dt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:z()}}),new zu(this.Ct,this.xt,e,n,i)}Ft(){this.Nt=!1,this.Dt=u1()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class O6{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Ci(),this.zt=l1(),this.Wt=new He(re)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const i=this.Zt(n);switch(e.state){case 0:this.te(n)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(n);break;case 3:this.te(n)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),i.$t(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((i,s)=>{this.te(s)&&n(s)})}ne(e){var n;const i=e.targetId,s=e.Vt.count,r=this.se(i);if(r){const o=r.target;if(zg(o))if(s===0){const a=new L(o.path);this.Yt(i,a,In.newNoDocument(a,F.min()))}else he(s===1);else{const a=this.ie(i);if(a!==s){const l=this.re(e,a);if(l!==0){this.ee(i);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,u)}(n=u_.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var f,d,g,v,_,m;const p={localCacheCount:c,existenceFilterCount:h.count},y=h.unchangedNames;return y&&(p.bloomFilter={applied:u===0,hashCount:(f=y==null?void 0:y.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(v=(g=(d=y==null?void 0:y.bits)===null||d===void 0?void 0:d.bitmap)===null||g===void 0?void 0:g.length)!==null&&v!==void 0?v:0,padding:(m=(_=y==null?void 0:y.bits)===null||_===void 0?void 0:_.padding)!==null&&m!==void 0?m:0}),p}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let l,u;try{l=cr(r).toUint8Array()}catch(c){if(c instanceof GN)return Vo("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new c_(l,o,a)}catch(c){return Vo(c instanceof qa?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:s!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const i=this.Gt.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(e,r,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&zg(a.target)){const l=new L(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,In.newNoDocument(l,e))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let i=ee();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const s=new ER(e,n,this.Wt,this.jt,i);return this.jt=Ci(),this.zt=l1(),this.Wt=new He(re),s}Jt(e,n){if(!this.te(e))return;const i=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,i),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,i){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),i&&(this.jt=this.jt.insert(n,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new a1,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new wt(re),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new a1),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function l1(){return new He(L.comparator)}function u1(){return new He(L.comparator)}const M6=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),k6=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),L6=(()=>({and:"AND",or:"OR"}))();class U6{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fg(t,e){return t.useProto3Json||ku(e)?e:{value:e}}function of(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function z6(t,e){return of(t,e.toTimestamp())}function Zt(t){return he(!!t),F.fromTimestamp(function(e){const n=ys(e);return new xt(n.seconds,n.nanos)}(t))}function h_(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function CR(t){const e=ke.fromString(t);return he(xR(e)),e}function af(t,e){return h_(t.databaseId,e.path)}function cl(t,e){const n=CR(e);if(n.get(1)!==t.databaseId.projectId)throw new x(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(AR(n))}function Vg(t,e){return h_(t.databaseId,e)}function P6(t){const e=CR(t);return e.length===4?ke.emptyPath():AR(e)}function Yl(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AR(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function c1(t,e,n){return{name:af(t,e),fields:n.value.mapValue.fields}}function B6(t,e){return"found"in e?function(n,i){he(!!i.found),i.found.name,i.found.updateTime;const s=cl(n,i.found.name),r=Zt(i.found.updateTime),o=i.found.createTime?Zt(i.found.createTime):F.min(),a=new mn({mapValue:{fields:i.found.fields}});return In.newFoundDocument(s,r,o,a)}(t,e):"missing"in e?function(n,i){he(!!i.missing),he(!!i.readTime);const s=cl(n,i.missing),r=Zt(i.readTime);return In.newNoDocument(s,r)}(t,e):z()}function j6(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,u){return l.useProto3Json?(he(u===void 0||typeof u=="string"),St.fromBase64String(u||"")):(he(u===void 0||u instanceof Uint8Array),St.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:_R(l.code);return new x(u,l.message||"")}(o);n=new bR(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=cl(t,i.document.name),r=Zt(i.document.updateTime),o=i.document.createTime?Zt(i.document.createTime):F.min(),a=new mn({mapValue:{fields:i.document.fields}}),l=In.newFoundDocument(s,r,o,a),u=i.targetIds||[],c=i.removedTargetIds||[];n=new sh(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=cl(t,i.document),r=i.readTime?Zt(i.readTime):F.min(),o=In.newNoDocument(s,r),a=i.removedTargetIds||[];n=new sh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=cl(t,i.document),r=i.removedTargetIds||[];n=new sh([],r,s,null)}else{if(!("filter"in e))return z();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new I6(s,r),a=i.targetId;n=new TR(a,o)}}return n}function NR(t,e){let n;if(e instanceof Uu)n={update:c1(t,e.key,e.value)};else if(e instanceof l_)n={delete:af(t,e.key)};else if(e instanceof Cs)n={update:c1(t,e.key,e.data),updateMask:Q6(e.fieldMask)};else{if(!(e instanceof gR))return z();n={verify:af(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof sf)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Gl)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Kl)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof rf)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw z()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:z6(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:z()}(t,e.precondition)),n}function F6(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?Zt(i.updateTime):Zt(s);return r.isEqual(F.min())&&(r=Zt(s)),new b6(r,i.transformResults||[])}(n,e))):[]}function V6(t,e){return{documents:[Vg(t,e.path)]}}function q6(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Vg(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vg(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return IR(bi.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Hr(c.field),direction:G6(c.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Fg(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function H6(t){let e=P6(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){he(i===1);const c=n.from[0];c.allDescendants?s=c.collectionId:e=e.child(c.collectionId)}let r=[];n.where&&(r=function(c){const h=RR(c);return h instanceof bi&&JN(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new wo($r(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ku(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new nf(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new nf(f,h)}(n.endAt)),h6(e,s,o,r,a,"F",l,u)}function $6(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function RR(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$r(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=$r(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$r(e.unaryFilter.field);return nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$r(e.unaryFilter.field);return nt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return nt.create($r(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return bi.create(e.compositeFilter.filters.map(n=>RR(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function G6(t){return M6[t]}function K6(t){return k6[t]}function Y6(t){return L6[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function $r(t){return Hn.fromServerFormat(t.fieldPath)}function IR(t){return t instanceof nt?function(e){if(e.op==="=="){if(Xw(e.value))return{unaryFilter:{field:Hr(e.field),op:"IS_NAN"}};if(Qw(e.value))return{unaryFilter:{field:Hr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xw(e.value))return{unaryFilter:{field:Hr(e.field),op:"IS_NOT_NAN"}};if(Qw(e.value))return{unaryFilter:{field:Hr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(e.field),op:K6(e.op),value:e.value}}}(t):t instanceof bi?function(e){const n=e.getFilters().map(i=>IR(i));return n.length===1?n[0]:{compositeFilter:{op:Y6(e.op),filters:n}}}(t):z()}function Q6(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,i,s,r=F.min(),o=F.min(),a=St.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Xi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6{constructor(e){this.fe=e}}function W6(t){const e=H6({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J6{constructor(){this.rn=new Z6}addToCollectionParentIndex(e,n){return this.rn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(gs.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(gs.min())}updateCollectionGroup(e,n,i){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class Z6{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new wt(ke.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new wt(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Go(0)}static Mn(){return new Go(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(){this.changes=new pa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,In.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?C.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&ul(i.mutation,s,zn.empty(),xt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ee()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ee()){const s=qs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Va();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=qs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ee()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Ci();const o=ll(),a=ll();return n.forEach((l,u)=>{const c=i.get(u.key);s.has(u.key)&&(c===void 0||c.mutation instanceof Cs)?r=r.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ul(c.mutation,u,c.mutation.getFieldMask(),xt.now())):o.set(u.key,zn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new t5(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=ll();let s=new He((o,a)=>o-a),r=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=i.get(l)||zn.empty();c=a.applyToLocalView(u,c),i.set(l,c);const h=(s.get(a.batchId)||ee()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=aR();c.forEach(f=>{if(!r.has(f)){const d=pR(n.get(f),i.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):C.resolve(qs());let a=-1,l=r;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,l,u,ee())).next(c=>({batchId:a,changes:oR(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(i=>{let s=Va();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Va();return this.indexManager.getCollectionParents(e,s).next(o=>C.forEach(o,a=>{const l=function(u,c){return new da(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(u=>{u.forEach((c,h)=>{r=r.insert(c,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const u=l.getKey();r.get(u)===null&&(r=r.insert(u,In.newInvalidDocument(u)))});let o=Va();return r.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ul(u.mutation,l,zn.empty(),xt.now()),md(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return C.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var i;return this.cs.set(n.id,{id:(i=n).id,version:i.version,createTime:Zt(i.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(i){return{name:i.name,query:W6(i.bundledQuery),readTime:Zt(i.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(){this.overlays=new He(L.comparator),this.ls=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const i=qs();return C.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.we(e,n,r)}),C.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(i)),C.resolve()}getOverlaysForCollection(e,n,i){const s=qs(),r=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new He((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let c=r.get(u.largestBatchId);c===null&&(c=qs(),r=r.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=qs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=s)););return C.resolve(a)}we(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new R6(n,i));let r=this.ls.get(n);r===void 0&&(r=ee(),this.ls.set(n,r)),this.ls.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.fs=new wt(We.ds),this.ws=new wt(We._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const i=new We(e,n);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ys(new We(e,n))}ps(e,n){e.forEach(i=>this.removeReference(i,n))}Is(e){const n=new L(new ke([])),i=new We(n,e),s=new We(n,e+1),r=[];return this.ws.forEachInRange([i,s],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new L(new ke([])),i=new We(n,e),s=new We(n,e+1);let r=ee();return this.ws.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new We(e,0),i=this.fs.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class We{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return L.comparator(e.key,n.key)||re(e.As,n.As)}static _s(e,n){return re(e.As,n.As)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new wt(We.ds)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new A6(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new We(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.bs(i),r=s<0?0:s;return C.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([i,s],o=>{const a=this.Ps(o.As);r.push(a)}),C.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new wt(re);return n.forEach(s=>{const r=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{i=i.add(a.As)})}),C.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;L.isDocumentKey(r)||(r=r.child(""));const o=new We(new L(r),0);let a=new wt(re);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.As)),!0)},o),C.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(i=>{const s=this.Ps(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){he(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return C.forEach(n.mutations,s=>{const r=new We(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,n){const i=new We(n,0),s=this.Rs.firstAfterOrEqual(i);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e){this.Ds=e,this.docs=new He(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return C.resolve(i?i.document.mutableCopy():In.newInvalidDocument(n))}getEntries(e,n){let i=Ci();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():In.newInvalidDocument(s))}),C.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Ci();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Y3(K3(c),i)<=0||(s.has(c.key)||md(n,c))&&(r=r.insert(c.key,c.mutableCopy()))}return C.resolve(r)}getAllFromCollectionGroup(e,n,i,s){z()}Cs(e,n){return C.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new a5(this)}getSize(e){return C.resolve(this.size)}}class a5 extends e5{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(i)}),C.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(e){this.persistence=e,this.xs=new pa(n=>r_(n),o_),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Ns=0,this.ks=new f_,this.targetCount=0,this.Ms=Go.kn()}forEachTarget(e,n){return this.xs.forEach((i,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Ns&&(this.Ns=n),C.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Go(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Fn(n),C.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(r).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const i=this.xs.get(n)||null;return C.resolve(i)}addMatchingKeys(e,n,i){return this.ks.gs(n,i),C.resolve()}removeMatchingKeys(e,n,i){this.ks.ps(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),C.resolve()}getMatchingKeysForTargetId(e,n){const i=this.ks.Es(n);return C.resolve(i)}containsKey(e,n){return C.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(e,n){this.$s={},this.overlays={},this.Os=new t_(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new l5(this),this.indexManager=new J6,this.remoteDocumentCache=function(i){return new o5(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new X6(n),this.qs=new i5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new s5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.$s[e.toKey()];return i||(i=new r5(n,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,i){M("MemoryPersistence","Starting transaction:",e);const s=new c5(this.Os.next());return this.referenceDelegate.Us(),i(s).next(r=>this.referenceDelegate.Ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gs(e,n){return C.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,n)))}}class c5 extends X3{constructor(e){super(),this.currentSequenceNumber=e}}class d_{constructor(e){this.persistence=e,this.Qs=new f_,this.js=null}static zs(e){return new d_(e)}get Ws(){if(this.js)return this.js;throw z()}addReference(e,n,i){return this.Qs.addReference(i,n),this.Ws.delete(i.toString()),C.resolve()}removeReference(e,n,i){return this.Qs.removeReference(i,n),this.Ws.add(i.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),C.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Ws.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ws,i=>{const s=L.fromPath(i);return this.Hs(e,s).next(r=>{r||n.removeEntry(s,F.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(i=>{i?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return C.or([()=>C.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Fi=i,this.Bi=s}static Li(e,n){let i=ee(),s=ee();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new p_(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h5{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ki(e,n).next(r=>r||this.Gi(e,n,s,i)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(e1(n))return C.resolve(null);let i=Si(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Bg(n,null,"F"),i=Si(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=ee(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Bg(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,i,s){return e1(n)||s.isEqual(F.min())?this.Qi(e,n):this.Ui.getDocuments(e,i).next(r=>{const o=this.ji(n,r);return this.zi(n,o,i,s)?this.Qi(e,n):(Hw()<=se.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jg(n)),this.Wi(e,o,n,G3(s,-1)))})}ji(e,n){let i=new wt(sR(e));return n.forEach((s,r)=>{md(e,r)&&(i=i.add(r))}),i}zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,n){return Hw()<=se.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",jg(n)),this.Ui.getDocumentsMatchingQuery(e,n,gs.min())}Wi(e,n,i,s){return this.Ui.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f5{constructor(e,n,i,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new He(re),this.Yi=new pa(r=>r_(r),o_),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n5(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function d5(t,e,n,i){return new f5(t,e,n,i)}async function DR(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.tr(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=ee();for(const u of s){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of r){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(i,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function p5(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=C.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(g=>{const v=l.docVersions.get(d);he(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=ee();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function OR(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function m5(t,e){const n=q(t),i=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const f=s.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(r,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(r,c.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(St.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(c.resumeToken,i)),s=s.insert(h,d),function(g,v,_){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,d,c)&&a.push(n.Bs.updateTargetData(r,d))});let l=Ci(),u=ee();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(g5(r,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!i.isEqual(F.min())){const c=n.Bs.getLastRemoteSnapshotVersion(r).next(h=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(c)}return C.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(n.Ji=s,r))}function g5(t,e,n){let i=ee(),s=ee();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Ci();return n.forEach((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:s}})}function y5(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function v5(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Bs.getTargetData(i,e).next(r=>r?(s=r,C.resolve(s)):n.Bs.allocateTargetId(i).next(o=>(s=new Xi(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Bs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function qg(t,e,n){const i=q(t),s=i.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Mu(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function h1(t,e,n){const i=q(t);let s=F.min(),r=ee();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=q(a),h=c.Yi.get(u);return h!==void 0?C.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(i,o,Si(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,n?s:F.min(),n?r:ee())).next(a=>(_5(i,f6(e),a),{documents:a,ir:r})))}function _5(t,e,n){let i=t.Xi.get(e)||F.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Xi.set(e,i)}class f1{constructor(){this.activeTargetIds=v6()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E5{constructor(){this.Hr=new f1,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,i){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new f1,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w5{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac=null;function Hp(){return Ac===null?Ac=268435456+Math.round(2147483648*Math.random()):Ac++,"0x"+Ac.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b5{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class S5 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,i,s,r){const o=Hp(),a=this.To(e,n);M("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.Eo(l,s,r),this.Ao(e,a,l,i).then(u=>(M("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Vo("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",i),u})}vo(e,n,i,s,r,o){return this.Io(e,n,i,s,r)}Eo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+fa,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}To(e,n){const i=T5[e];return`${this.mo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,i,s){const r=Hp();return new Promise((o,a)=>{const l=new L3;l.setWithCredentials(!0),l.listenOnce(O3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qp.NO_ERROR:const c=l.getResponseJson();M(mt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(c)),o(c);break;case qp.TIMEOUT:M(mt,`RPC '${e}' ${r} timed out`),a(new x(T.DEADLINE_EXCEEDED,"Request time out"));break;case qp.HTTP_ERROR:const h=l.getStatus();if(M(mt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const g=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(_)>=0?_:T.UNKNOWN}(d.status);a(new x(g,d.message))}else a(new x(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(T.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{M(mt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(s);M(mt,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",u,i,15)})}Ro(e,n,i){const s=Hp(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=x3(),a=D3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new k3({})),this.Eo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=r.join("");M(mt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,d=!1;const g=new b5({ro:_=>{d?M(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(f||(M(mt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),M(mt,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},oo:()=>h.close()}),v=(_,m,p)=>{_.listen(m,y=>{try{p(y)}catch(w){setTimeout(()=>{throw w},0)}})};return v(h,Tc.EventType.OPEN,()=>{d||M(mt,`RPC '${e}' stream ${s} transport opened.`)}),v(h,Tc.EventType.CLOSE,()=>{d||(d=!0,M(mt,`RPC '${e}' stream ${s} transport closed`),g.wo())}),v(h,Tc.EventType.ERROR,_=>{d||(d=!0,Vo(mt,`RPC '${e}' stream ${s} transport errored:`,_),g.wo(new x(T.UNAVAILABLE,"The operation could not be completed")))}),v(h,Tc.EventType.MESSAGE,_=>{var m;if(!d){const p=_.data[0];he(!!p);const y=p,w=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(w){M(mt,`RPC '${e}' stream ${s} received error:`,w);const N=w.status;let O=function(k){const U=ze[k];if(U!==void 0)return _R(U)}(N),R=w.message;O===void 0&&(O=T.INTERNAL,R="Unknown error status: "+N+" with message "+w.message),d=!0,g.wo(new x(O,R)),h.close()}else M(mt,`RPC '${e}' stream ${s} received:`,p),g._o(p)}}),v(a,M3.STAT_EVENT,_=>{_.stat===Vw.PROXY?M(mt,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===Vw.NOPROXY&&M(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function $p(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){return new U6(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,i,s,r,o,a,l){this.ii=e,this.$o=i,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new m_(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Ti(n.toString()),Ti("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===n&&this.Zo(i,s)},i=>{e(()=>{const s=new x(T.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(e,n){const i=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C5 extends MR{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=j6(this.serializer,e),i=function(s){if(!("targetChange"in s))return F.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?F.min():r.readTime?Zt(r.readTime):F.min()}(e);return this.listener.nu(n,i)}su(e){const n={};n.database=Yl(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;if(o=zg(a)?{documents:V6(s,a)}:{query:q6(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=SR(s,r.resumeToken);const l=Fg(s,r.expectedCount);l!==null&&(o.expectedCount=l)}else if(r.snapshotVersion.compareTo(F.min())>0){o.readTime=of(s,r.snapshotVersion.toTimestamp());const l=Fg(s,r.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const i=$6(this.serializer,e);i&&(n.labels=i),this.Wo(n)}iu(e){const n={};n.database=Yl(this.serializer),n.removeTarget=e,this.Wo(n)}}class A5 extends MR{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=F6(e.writeResults,e.commitTime),i=Zt(e.commitTime);return this.listener.cu(i,n)}return he(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Yl(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>NR(this.serializer,i))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N5 extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new x(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Io(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(T.UNKNOWN,s.toString())})}vo(e,n,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new x(T.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class R5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ti(n),this.mu=!1):M("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{Dr(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=q(a);l.vu.add(4),await Pu(l),l.bu.set("Unknown"),l.vu.delete(4),await _d(l)}(this))})}),this.bu=new R5(i,s)}}async function _d(t){if(Dr(t))for(const e of t.Ru)await e(!0)}async function Pu(t){for(const e of t.Ru)await e(!1)}function kR(t,e){const n=q(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),v_(n)?y_(n):ma(n).Ko()&&g_(n,e))}function LR(t,e){const n=q(t),i=ma(n);n.Au.delete(e),i.Ko()&&UR(n,e),n.Au.size===0&&(i.Ko()?i.jo():Dr(n)&&n.bu.set("Unknown"))}function g_(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ma(t).su(e)}function UR(t,e){t.Vu.qt(e),ma(t).iu(e)}function y_(t){t.Vu=new O6({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ma(t).start(),t.bu.gu()}function v_(t){return Dr(t)&&!ma(t).Uo()&&t.Au.size>0}function Dr(t){return q(t).vu.size===0}function zR(t){t.Vu=void 0}async function x5(t){t.Au.forEach((e,n)=>{g_(t,e)})}async function D5(t,e){zR(t),v_(t)?(t.bu.Iu(e),y_(t)):t.bu.set("Unknown")}async function O5(t,e,n){if(t.bu.set("Online"),e instanceof bR&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Au.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Au.delete(o),i.Vu.removeTarget(o))}(t,e)}catch(i){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await lf(t,i)}else if(e instanceof sh?t.Vu.Ht(e):e instanceof TR?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(F.min()))try{const i=await OR(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.Vu.ce(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.Au.get(l);u&&s.Au.set(l,u.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,l)=>{const u=s.Au.get(a);if(!u)return;s.Au.set(a,u.withResumeToken(St.EMPTY_BYTE_STRING,u.snapshotVersion)),UR(s,a);const c=new Xi(u.target,a,l,u.sequenceNumber);g_(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){M("RemoteStore","Failed to raise snapshot:",i),await lf(t,i)}}async function lf(t,e,n){if(!Mu(e))throw e;t.vu.add(1),await Pu(t),t.bu.set("Offline"),n||(n=()=>OR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await _d(t)})}function PR(t,e){return e().catch(n=>lf(t,n,e))}async function Ed(t){const e=q(t),n=vs(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;M5(e);)try{const s=await y5(e.localStore,i);if(s===null){e.Eu.length===0&&n.jo();break}i=s.batchId,k5(e,s)}catch(s){await lf(e,s)}BR(e)&&jR(e)}function M5(t){return Dr(t)&&t.Eu.length<10}function k5(t,e){t.Eu.push(e);const n=vs(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function BR(t){return Dr(t)&&!vs(t).Uo()&&t.Eu.length>0}function jR(t){vs(t).start()}async function L5(t){vs(t).hu()}async function U5(t){const e=vs(t);for(const n of t.Eu)e.uu(n.mutations)}async function z5(t,e,n){const i=t.Eu.shift(),s=N6.from(i,e,n);await PR(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ed(t)}async function P5(t,e){e&&vs(t).ou&&await async function(n,i){if(s=i.code,vR(s)&&s!==T.ABORTED){const r=n.Eu.shift();vs(n).Qo(),await PR(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Ed(n)}var s}(t,e),BR(t)&&jR(t)}async function p1(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const i=Dr(n);n.vu.add(3),await Pu(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await _d(n)}async function B5(t,e){const n=q(t);e?(n.vu.delete(2),await _d(n)):e||(n.vu.add(2),await Pu(n),n.bu.set("Unknown"))}function ma(t){return t.Su||(t.Su=function(e,n,i){const s=q(e);return s.fu(),new C5(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:x5.bind(null,t),ao:D5.bind(null,t),nu:O5.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),v_(t)?y_(t):t.bu.set("Unknown")):(await t.Su.stop(),zR(t))})),t.Su}function vs(t){return t.Du||(t.Du=function(e,n,i){const s=q(e);return s.fu(),new A5(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:L5.bind(null,t),ao:P5.bind(null,t),au:U5.bind(null,t),cu:z5.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Ed(t)):(await t.Du.stop(),t.Eu.length>0&&(M("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new __(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function E_(t,e){if(Ti("AsyncQueue",`${e}: ${t}`),Mu(t))return new x(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.comparator=e?(n,i)=>e(n,i)||L.comparator(n.key,i.key):(n,i)=>L.comparator(n.key,i.key),this.keyedMap=Va(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new bo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new bo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(){this.Cu=new He(L.comparator)}track(e){const n=e.doc.key,i=this.Cu.get(n);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(n):e.type===1&&i.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):z():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Ko{constructor(e,n,i,s,r,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ko(e,n,bo.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j5{constructor(){this.Nu=void 0,this.listeners=[]}}class F5{constructor(){this.queries=new pa(e=>iR(e),Lu),this.onlineState="Unknown",this.ku=new Set}}async function FR(t,e){const n=q(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new j5),s)try{r.Nu=await n.onListen(i)}catch(o){const a=E_(o,`Initialization of query '${jg(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&w_(n)}async function VR(t,e){const n=q(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function V5(t,e){const n=q(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(s)&&(i=!0);o.Nu=s}}i&&w_(n)}function q5(t,e,n){const i=q(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function w_(t){t.ku.forEach(e=>{e.next()})}class qR{constructor(e,n,i){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Ko(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.key=e}}class $R{constructor(e){this.key=e}}class H5{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ee(),this.mutatedKeys=ee(),this.tc=sR(e),this.ec=new bo(this.tc)}get nc(){return this.Yu}sc(e,n){const i=n?n.ic:new m1,s=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((c,h)=>{const f=s.get(c),d=md(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?g!==v&&(i.track({type:3,doc:d}),_=!0):this.rc(f,d)||(i.track({type:2,doc:d}),_=!0,(l&&this.tc(d,l)>0||u&&this.tc(d,u)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),_=!0):f&&!d&&(i.track({type:1,doc:f}),_=!0,(l||u)&&(a=!0)),_&&(d?(o=o.add(d),r=v?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),i.track({type:1,doc:c})}return{ec:o,ic:i,zi:a,mutatedKeys:r}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((u,c)=>function(h,f){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return d(h)-d(f)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(i);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,r.length!==0||l?{snapshot:new Ko(this.query,e.ec,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new m1,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ee(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const n=[];return e.forEach(i=>{this.Zu.has(i)||n.push(new $R(i))}),this.Zu.forEach(i=>{e.has(i)||n.push(new HR(i))}),n}hc(e){this.Yu=e.ir,this.Zu=ee();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Ko.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class $5{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class G5{constructor(e){this.key=e,this.fc=!1}}class K5{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new pa(a=>iR(a),Lu),this._c=new Map,this.mc=new Set,this.gc=new He(L.comparator),this.yc=new Map,this.Ic=new f_,this.Tc={},this.Ec=new Map,this.Ac=Go.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Y5(t,e){const n=s9(t);let i,s;const r=n.wc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const o=await v5(n.localStore,Si(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await Q5(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&kR(n.remoteStore,o)}return s}async function Q5(t,e,n,i,s){t.Rc=(h,f,d)=>async function(g,v,_,m){let p=v.view.sc(_);p.zi&&(p=await h1(g.localStore,v.query,!1).then(({documents:N})=>v.view.sc(N,p)));const y=m&&m.targetChanges.get(v.targetId),w=v.view.applyChanges(p,g.isPrimaryClient,y);return y1(g,v.targetId,w.cc),w.snapshot}(t,h,f,d);const r=await h1(t.localStore,e,!0),o=new H5(e,r.ir),a=o.sc(r.documents),l=zu.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);y1(t,n,u.cc);const c=new $5(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function X5(t,e){const n=q(t),i=n.wc.get(e),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter(r=>!Lu(r,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await qg(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),LR(n.remoteStore,i.targetId),Hg(n,i.targetId)}).catch(Ou)):(Hg(n,i.targetId),await qg(n.localStore,i.targetId,!0))}async function W5(t,e,n){const i=r9(t);try{const s=await function(r,o){const a=q(r),l=xt.now(),u=o.reduce((f,d)=>f.add(d.key),ee());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Ci(),g=ee();return a.Zi.getEntries(f,u).next(v=>{d=v,d.forEach((_,m)=>{m.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(v=>{c=v;const _=[];for(const m of o){const p=C6(m,c.get(m.key).overlayedDocument);p!=null&&_.push(new Cs(m.key,p,KN(p.value.mapValue),Nt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(f,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:oR(c)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.Tc[r.currentUser.toKey()];l||(l=new He(re)),l=l.insert(o,a),r.Tc[r.currentUser.toKey()]=l}(i,s.batchId,n),await Bu(i,s.changes),await Ed(i.remoteStore)}catch(s){const r=E_(s,"Failed to persist write");n.reject(r)}}async function GR(t,e){const n=q(t);try{const i=await m5(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.yc.get(r);o&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?he(o.fc):s.removedDocuments.size>0&&(he(o.fc),o.fc=!1))}),await Bu(n,i,e)}catch(i){await Ou(i)}}function g1(t,e,n){const i=q(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=q(r);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&w_(a)}(i.eventManager,e),s.length&&i.dc.nu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function J5(t,e,n){const i=q(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.yc.get(e),r=s&&s.key;if(r){let o=new He(L.comparator);o=o.insert(r,In.newNoDocument(r,F.min()));const a=ee().add(r),l=new ER(F.min(),new Map,new He(re),o,a);await GR(i,l),i.gc=i.gc.remove(r),i.yc.delete(e),T_(i)}else await qg(i.localStore,e,!1).then(()=>Hg(i,e,n)).catch(Ou)}async function Z5(t,e){const n=q(t),i=e.batch.batchId;try{const s=await p5(n.localStore,e);YR(n,i,null),KR(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Bu(n,s)}catch(s){await Ou(s)}}async function e9(t,e,n){const i=q(t);try{const s=await function(r,o){const a=q(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(he(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(i.localStore,e);YR(i,e,n),KR(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Bu(i,s)}catch(s){await Ou(s)}}function KR(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function YR(t,e,n){const i=q(t);let s=i.Tc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Tc[i.currentUser.toKey()]=s}}function Hg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t._c.get(e))t.wc.delete(i),n&&t.dc.Pc(i,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(i=>{t.Ic.containsKey(i)||QR(t,i)})}function QR(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(LR(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),T_(t))}function y1(t,e,n){for(const i of n)i instanceof HR?(t.Ic.addReference(i.key,e),t9(t,i)):i instanceof $R?(M("SyncEngine","Document no longer in limbo: "+i.key),t.Ic.removeReference(i.key,e),t.Ic.containsKey(i.key)||QR(t,i.key)):z()}function t9(t,e){const n=e.key,i=n.path.canonicalString();t.gc.get(n)||t.mc.has(i)||(M("SyncEngine","New document in limbo: "+n),t.mc.add(i),T_(t))}function T_(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new L(ke.fromString(e)),i=t.Ac.next();t.yc.set(i,new G5(n)),t.gc=t.gc.insert(n,i),kR(t.remoteStore,new Xi(Si(dd(n.path)),i,"TargetPurposeLimboResolution",t_.ct))}}async function Bu(t,e,n){const i=q(t),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach((a,l)=>{o.push(i.Rc(l,e,n).then(u=>{if((u||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const c=p_.Li(l.targetId,u);r.push(c)}}))}),await Promise.all(o),i.dc.nu(s),await async function(a,l){const u=q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>C.forEach(l,h=>C.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>C.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Mu(c))throw c;M("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ji.get(h),d=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(d);u.Ji=u.Ji.insert(h,g)}}}(i.localStore,r))}async function n9(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const i=await DR(n.localStore,e);n.currentUser=e,function(s,r){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new x(T.CANCELLED,r))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Bu(n,i.er)}}function i9(t,e){const n=q(t),i=n.yc.get(e);if(i&&i.fc)return ee().add(i.key);{let s=ee();const r=n._c.get(e);if(!r)return s;for(const o of r){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function s9(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=GR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i9.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J5.bind(null,e),e.dc.nu=V5.bind(null,e.eventManager),e.dc.Pc=q5.bind(null,e.eventManager),e}function r9(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Z5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=e9.bind(null,e),e}class v1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return d5(this.persistence,new h5,e.initialUser,this.serializer)}createPersistence(e){return new u5(d_.zs,this.serializer)}createSharedClientState(e){return new E5}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class o9{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>g1(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=n9.bind(null,this.syncEngine),await B5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new F5}createDatastore(e){const n=vd(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new S5(s));var s;return function(r,o,a,l){return new N5(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>g1(this.syncEngine,a,0),o=d1.D()?new d1:new w5,new I5(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,u){const c=new K5(i,s,r,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);M("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Pu(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ti("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new x(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const r=q(i),o=Yl(r.serializer)+"/documents",a={documents:s.map(h=>af(r.serializer,h))},l=await r.vo("BatchGetDocuments",o,a,s.length),u=new Map;l.forEach(h=>{const f=B6(r.serializer,h);u.set(f.key.toString(),f)});const c=[];return s.forEach(h=>{const f=u.get(h.toString());he(!!f),c.push(f)}),c}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new l_(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const s=L.fromPath(i);this.mutations.push(new gR(s,this.precondition(s)))}),await async function(n,i){const s=q(n),r=Yl(s.serializer)+"/documents",o={writes:i.map(a=>NR(s.serializer,a))};await s.Io("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw z();n=F.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new x(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(F.min())?Nt.exists(!1):Nt.updateTime(n):Nt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(F.min()))throw new x(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Nt.updateTime(n)}return Nt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l9{constructor(e,n,i,s,r){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=s,this.deferred=r,this.Bc=i.maxAttempts,this.qo=new m_(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new a9(this.datastore),n=this.qc(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(s=>{this.Uc(s)}))}).catch(i=>{this.Uc(i)})})}qc(e){try{const n=this.updateFunction(e);return!ku(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!vR(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=qN.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{M("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(M("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=E_(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Gp(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await DR(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await h9(t);M("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>p1(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>p1(e.remoteStore,r)),t._onlineComponents=e}function c9(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function h9(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!c9(n))throw n;Vo("Error using user provided cache. Falling back to memory cache: "+n),await Gp(t,new v1)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Gp(t,new v1);return t._offlineComponents}async function b_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await _1(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await _1(t,new o9))),t._onlineComponents}function f9(t){return b_(t).then(e=>e.syncEngine)}function d9(t){return b_(t).then(e=>e.datastore)}async function $g(t){const e=await b_(t),n=e.eventManager;return n.onListen=Y5.bind(null,e.syncEngine),n.onUnlisten=X5.bind(null,e.syncEngine),n}function p9(t,e,n={}){const i=new fi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const u=new XR({next:h=>{r.enqueueAndForget(()=>VR(s,c));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new x(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new x(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new qR(dd(o.path),u,{includeMetadataChanges:!0,Ku:!0});return FR(s,c)}(await $g(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t,e,n){if(!n)throw new x(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function m9(t,e,n,i){if(e===!0&&i===!0)throw new x(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function w1(t){if(!L.isDocumentKey(t))throw new x(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function T1(t){if(L.isDocumentKey(t))throw new x(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wd(t);throw new x(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new x(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}m9("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=WR((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class Td{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new b1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new b1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new z3;switch(n.type){case"firstParty":return new F3(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=E1.get(e);n&&(M("ComponentProvider","Removing Datastore"),E1.delete(e),n.terminate())}(this),Promise.resolve()}}function g9(t,e,n,i={}){var s;const r=(t=Vn(t,Td))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=gt.MOCK_USER;else{a=YC(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new x(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(u)}t._authCredentials=new P3(new VN(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new us(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Ai{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ai(this.firestore,e,this._query)}}class us extends Ai{constructor(e,n,i){super(e,n,dd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new L(e))}withConverter(e){return new us(this.firestore,e,this._path)}}function Ps(t,e,...n){if(t=fe(t),JR("collection","path",e),t instanceof Td){const i=ke.fromString(e,...n);return T1(i),new us(t,null,i)}{if(!(t instanceof Tt||t instanceof us))throw new x(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ke.fromString(e,...n));return T1(i),new us(t.firestore,null,i)}}function Ha(t,e,...n){if(t=fe(t),arguments.length===1&&(e=qN.A()),JR("doc","path",e),t instanceof Td){const i=ke.fromString(e,...n);return w1(i),new Tt(t,null,new L(i))}{if(!(t instanceof Tt||t instanceof us))throw new x(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ke.fromString(e,...n));return w1(i),new Tt(t.firestore,t instanceof us?t.converter:null,new L(i))}}function y9(t,e){return t=fe(t),e=fe(e),t instanceof Ai&&e instanceof Ai&&t.firestore===e.firestore&&Lu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v9{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new m_(this,"async_queue_retry"),this.Xc=()=>{const n=$p();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=$p();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=$p();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new fi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Mu(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ti("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=__.createAndSchedule(this,e,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&z()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function S1(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class fr extends Td{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new v9,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ZR(this),this._firestoreClient.terminate()}}function _9(t,e){const n=typeof t=="object"?t:Yf(),i=typeof t=="string"?t:e||"(default)",s=Rr(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Ev("firestore");r&&g9(s,...r)}return s}function bd(t){return t._firestoreClient||ZR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ZR(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,u){return new Z3(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,WR(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new u9(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dr(St.fromBase64String(e))}catch(n){throw new x(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new dr(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Hn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E9=/^__.*__$/;class w9{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uu(e,this.data,n,this.fieldTransforms)}}class eI{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class A_{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new A_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:i,la:!1});return s.fa(e),s}da(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:i,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return uf(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(tI(this.ca)&&E9.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class T9{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||vd(e)}ya(e,n,i,s=!1){return new A_({ca:e,methodName:n,ga:i,path:Hn.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sd(t){const e=t._freezeSettings(),n=vd(t._databaseId);return new T9(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nI(t,e,n,i,s,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,s);N_("Data must be an object, but it was:",o,i);const a=rI(i,o);let l,u;if(r.merge)l=new zn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const h of r.mergeFields){const f=Gg(e,h,n);if(!o.contains(f))throw new x(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);aI(c,f)||c.push(f)}l=new zn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new w9(new mn(a),l,u)}class Cd extends S_{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cd}}function iI(t,e,n,i){const s=t.ya(1,e,n);N_("Data must be an object, but it was:",s,i);const r=[],o=mn.empty();xr(i,(l,u)=>{const c=R_(e,l,n);u=fe(u);const h=s.da(c);if(u instanceof Cd)r.push(c);else{const f=Fu(u,h);f!=null&&(r.push(c),o.set(c,f))}});const a=new zn(r);return new eI(o,a,s.fieldTransforms)}function sI(t,e,n,i,s,r){const o=t.ya(1,e,n),a=[Gg(e,i,n)],l=[s];if(r.length%2!=0)throw new x(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Gg(e,r[f])),l.push(r[f+1]);const u=[],c=mn.empty();for(let f=a.length-1;f>=0;--f)if(!aI(u,a[f])){const d=a[f];let g=l[f];g=fe(g);const v=o.da(d);if(g instanceof Cd)u.push(d);else{const _=Fu(g,v);_!=null&&(u.push(d),c.set(d,_))}}const h=new zn(u);return new eI(c,h,o.fieldTransforms)}function b9(t,e,n,i=!1){return Fu(n,t.ya(i?4:3,e))}function Fu(t,e){if(oI(t=fe(t)))return N_("Unsupported field value:",e,t),rI(t,e);if(t instanceof S_)return function(n,i){if(!tI(i.ca))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Fu(o,i.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _6(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=xt.fromDate(n);return{timestampValue:of(i.serializer,s)}}if(n instanceof xt){const s=new xt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:of(i.serializer,s)}}if(n instanceof C_)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof dr)return{bytesValue:SR(i.serializer,n._byteString)};if(n instanceof Tt){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:h_(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${wd(n)}`)}(t,e)}function rI(t,e){const n={};return $N(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(t,(i,s)=>{const r=Fu(s,e.ha(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function oI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xt||t instanceof C_||t instanceof dr||t instanceof Tt||t instanceof S_)}function N_(t,e,n){if(!oI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=wd(n);throw i==="an object"?e._a(t+" a custom object"):e._a(t+" "+i)}}function Gg(t,e,n){if((e=fe(e))instanceof ju)return e._internalPath;if(typeof e=="string")return R_(t,e);throw uf("Field path arguments must be of type string or ",t,!1,void 0,n)}const S9=new RegExp("[~\\*/\\[\\]]");function R_(t,e,n){if(e.search(S9)>=0)throw uf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ju(...e.split("."))._internalPath}catch{throw uf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uf(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new x(T.INVALID_ARGUMENT,a+t+l)}function aI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new C9(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ad("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class C9 extends cf{data(){return super.data()}}function Ad(t,e){return typeof e=="string"?R_(t,e):e instanceof ju?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A9(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class I_{}class lI extends I_{}function zr(t,e,...n){let i=[];e instanceof I_&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof x_).length,o=s.filter(a=>a instanceof Nd).length;if(r>1||r>0&&o>0)throw new x(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class Nd extends lI{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new Nd(e,n,i)}_apply(e){const n=this._parse(e);return uI(e._query,n),new Ai(e.firestore,e.converter,Pg(e._query,n))}_parse(e){const n=Sd(e.firestore);return function(s,r,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new x(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){N1(c,u);const f=[];for(const d of c)f.push(A1(a,s,d));h={arrayValue:{values:f}}}else h=A1(a,s,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||N1(c,u),h=b9(o,r,c,u==="in"||u==="not-in");return nt.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Kp(t,e,n){const i=e,s=Ad("where",t);return Nd._create(s,i,n)}class x_ extends I_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new x_(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:bi.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)uI(r,a),r=Pg(r,a)}(e._query,n),new Ai(e.firestore,e.converter,Pg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class D_ extends lI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new D_(e,n)}_apply(e){const n=function(i,s,r){if(i.startAt!==null)throw new x(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new wo(s,r);return function(a,l){if(a_(a)===null){const u=pd(a);u!==null&&cI(a,u,l.field)}}(i,o),o}(e._query,this._field,this._direction);return new Ai(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new da(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function C1(t,e="asc"){const n=e,i=Ad("orderBy",t);return D_._create(i,n)}function A1(t,e,n){if(typeof(n=fe(n))=="string"){if(n==="")throw new x(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nR(e)&&n.indexOf("/")!==-1)throw new x(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(ke.fromString(n));if(!L.isDocumentKey(i))throw new x(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Yw(t,new L(i))}if(n instanceof Tt)return Yw(t,n._key);throw new x(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wd(n)}.`)}function N1(t,e){if(!Array.isArray(t)||t.length===0)throw new x(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uI(t,e){if(e.isInequality()){const i=pd(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new x(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=a_(t);r!==null&&cI(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function cI(t,e,n){if(!n.isEqual(e))throw new x(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class hI{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return xr(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new C_(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=i_(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(ql(e));default:return null}}convertTimestamp(e){const n=ys(e);return new xt(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=ke.fromString(e);he(xR(i));const s=new Hl(i.get(1),i.get(3)),r=new L(i.popFirst(5));return s.isEqual(n)||Ti(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class N9 extends hI{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class O_ extends cf{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Ad("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class rh extends O_{data(e={}){return super.data(e)}}class R9{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oo(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new rh(this._firestore,this._userDataWriter,i.key,i,new oo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new rh(i._firestore,i._userDataWriter,o.doc.key,o.doc,new oo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new rh(i._firestore,i._userDataWriter,o.doc.key,o.doc,new oo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,u=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:I9(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function I9(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x9(t){t=Vn(t,Tt);const e=Vn(t.firestore,fr);return p9(bd(e),t._key).then(n=>pI(e,t,n))}class M_ extends hI{constructor(e){super(),this.firestore=e}convertBytes(e){return new dr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function D9(t,e,n,...i){t=Vn(t,Tt);const s=Vn(t.firestore,fr),r=Sd(s);let o;return o=typeof(e=fe(e))=="string"||e instanceof ju?sI(r,"updateDoc",t._key,e,n,i):iI(r,"updateDoc",t._key,e),dI(s,[o.toMutation(t._key,Nt.exists(!0))])}function O9(t,e){const n=Vn(t.firestore,fr),i=Ha(t),s=fI(t.converter,e);return dI(n,[nI(Sd(t.firestore),"addDoc",i._key,s,t.converter!==null,{}).toMutation(i._key,Nt.exists(!1))]).then(()=>i)}function M9(t,...e){var n,i,s;t=fe(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||S1(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(S1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,u,c;if(t instanceof Tt)u=Vn(t.firestore,fr),c=dd(t._key.path),l={next:h=>{e[o]&&e[o](pI(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Vn(t,Ai);u=Vn(h.firestore,fr),c=h._query;const f=new M_(u);l={next:d=>{e[o]&&e[o](new R9(u,f,h,d))},error:e[o+1],complete:e[o+2]},A9(t._query)}return function(h,f,d,g){const v=new XR(g),_=new qR(f,v,d);return h.asyncQueue.enqueueAndForget(async()=>FR(await $g(h),_)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>VR(await $g(h),_))}}(bd(u),c,a,l)}function dI(t,e){return function(n,i){const s=new fi;return n.asyncQueue.enqueueAndForget(async()=>W5(await f9(n),i,s)),s.promise}(bd(t),e)}function pI(t,e,n){const i=n.docs.get(e._key),s=new M_(t);return new O_(t,s,e._key,i,new oo(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k9={maxAttempts:5};function Ia(t,e){if((t=fe(t)).firestore!==e)throw new x(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L9 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Sd(e)}get(e){const n=Ia(e,this._firestore),i=new N9(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return z();const r=s[0];if(r.isFoundDocument())return new cf(this._firestore,i,r.key,r,n.converter);if(r.isNoDocument())return new cf(this._firestore,i,n._key,null,n.converter);throw z()})}set(e,n,i){const s=Ia(e,this._firestore),r=fI(s.converter,n,i),o=nI(this._dataReader,"Transaction.set",s._key,r,s.converter!==null,i);return this._transaction.set(s._key,o),this}update(e,n,i,...s){const r=Ia(e,this._firestore);let o;return o=typeof(n=fe(n))=="string"||n instanceof ju?sI(this._dataReader,"Transaction.update",r._key,n,i,s):iI(this._dataReader,"Transaction.update",r._key,n),this._transaction.update(r._key,o),this}delete(e){const n=Ia(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ia(e,this._firestore),i=new M_(this._firestore);return super.get(e).then(s=>new O_(this._firestore,i,n._key,s._document,new oo(!1,!1),n.converter))}}function U9(t,e,n){t=Vn(t,fr);const i=Object.assign(Object.assign({},k9),n);return function(s){if(s.maxAttempts<1)throw new x(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,r,o){const a=new fi;return s.asyncQueue.enqueueAndForget(async()=>{const l=await d9(s);new l9(s.asyncQueue,l,o,r,a).run()}),a.promise}(bd(t),s=>e(new L9(t,s)),i)}(function(t,e=!0){(function(n){fa=n})(Ii),_n(new sn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new fr(new B3(n.getProvider("auth-internal")),new q3(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hl(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),qe(qw,"3.13.0",t),qe(qw,"3.13.0","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z9{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:i,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="us-central1";class P9{constructor(e,n,i,s,r=Kg,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new z9(n,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin,this.region=Kg}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function B9(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}const R1="@firebase/functions",I1="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j9="auth-internal",F9="app-check-internal",V9="messaging-internal";function q9(t,e){const n=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(j9),a=i.getProvider(V9),l=i.getProvider(F9);return new P9(r,o,a,l,s,t)};_n(new sn(mI,n,"PUBLIC").setMultipleInstances(!0)),qe(R1,I1,e),qe(R1,I1,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H9(t=Yf(),e=Kg){const i=Rr(fe(t),mI).getImmediate({identifier:e}),s=Ev("functions");return s&&$9(i,...s),i}function $9(t,e,n){B9(fe(t),e,n)}q9(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="firebasestorage.googleapis.com",yI="storageBucket",G9=2*60*1e3,K9=10*60*1e3,Y9=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends wn{constructor(e,n,i=0){super(Yp(e),`Firebase Storage: ${n} (${Yp(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function Yp(t){return"storage/"+t}function k_(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(Ae.UNKNOWN,t)}function Q9(t){return new Re(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function X9(t){return new Re(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function W9(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(Ae.UNAUTHENTICATED,t)}function J9(){return new Re(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Z9(t){return new Re(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vI(){return new Re(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _I(){return new Re(Ae.CANCELED,"User canceled the upload/download.")}function ez(t){return new Re(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function tz(t){return new Re(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function nz(){return new Re(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yI+"' property when initializing the app?")}function EI(){return new Re(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function iz(){return new Re(Ae.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function sz(){return new Re(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rz(t){return new Re(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yg(t){return new Re(Ae.INVALID_ARGUMENT,t)}function wI(){return new Re(Ae.APP_DELETED,"The Firebase app was deleted.")}function oz(t){return new Re(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hl(t,e){return new Re(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function xa(t){throw new Re(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(i.path==="")return i;throw tz(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${c}/b/${s}/o${f}`,"i"),g={bucket:1,path:3},v=n===gI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",m=new RegExp(`^https?://${v}/${s}/${_}`,"i"),y=[{regex:a,indices:l,postModify:r},{regex:d,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<y.length;w++){const N=y[w],O=N.regex.exec(e);if(O){const R=O[N.indices.bucket];let k=O[N.indices.path];k||(k=""),i=new Yt(R,k),N.postModify(i);break}}if(i==null)throw ez(e);return i}}class az{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lz(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,t(d,l())},_)}function f(){r&&clearTimeout(r)}function d(_,...m){if(u){f();return}if(_){f(),c.call(null,_,...m);return}if(l()||o){f(),c.call(null,_,...m);return}i<64&&(i*=2);let y;a===1?(a=2,y=0):y=(i+Math.random())*1e3,h(y)}let g=!1;function v(_){g||(g=!0,f(),!u&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function uz(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cz(t){return t!==void 0}function hz(t){return typeof t=="function"}function fz(t){return typeof t=="object"&&!Array.isArray(t)}function Rd(t){return typeof t=="string"||t instanceof String}function x1(t){return L_()&&t instanceof Blob}function L_(){return typeof Blob<"u"&&!ok()}function D1(t,e,n,i){if(i<e)throw Yg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Yg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function TI(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zs||(Zs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dz{constructor(e,n,i,s,r,o,a,l,u,c,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Nc(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Zs.NO_ERROR,l=r.getStatus();if(!a||bI(l,this.additionalRetryCodes_)&&this.retry){const c=r.getErrorCode()===Zs.ABORT;i(!1,new Nc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new Nc(u,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());cz(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=k_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?wI():_I();o(l)}else{const l=vI();o(l)}};this.canceled_?n(!1,new Nc(!1,null,!0)):this.backoffId_=lz(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uz(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Nc{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function pz(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mz(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gz(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yz(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vz(t,e,n,i,s,r,o=!0){const a=TI(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return gz(u,e),pz(u,n),mz(u,r),yz(u,i),new dz(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _z(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ez(...t){const e=_z();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(L_())return new Blob(t);throw new Re(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wz(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tz(t){if(typeof atob>"u")throw rz("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qp{constructor(e,n){this.data=e,this.contentType=n||null}}function bz(t,e){switch(t){case Pn.RAW:return new Qp(SI(e));case Pn.BASE64:case Pn.BASE64URL:return new Qp(CI(t,e));case Pn.DATA_URL:return new Qp(Cz(e),Az(e))}throw k_()}function SI(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=t.charCodeAt(++n);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function Sz(t){let e;try{e=decodeURIComponent(t)}catch{throw hl(Pn.DATA_URL,"Malformed data URL.")}return SI(e)}function CI(t,e){switch(t){case Pn.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw hl(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Pn.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw hl(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Tz(e)}catch(s){throw s.message.includes("polyfill")?s:hl(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class AI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw hl(Pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=Nz(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function Cz(t){const e=new AI(t);return e.base64?CI(Pn.BASE64,e.rest):Sz(e.rest)}function Az(t){return new AI(t).contentType}function Nz(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){let i=0,s="";x1(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(x1(this.data_)){const i=this.data_,s=wz(i,e,n);return s===null?null:new Hi(s)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new Hi(i,!0)}}static getBlob(...e){if(L_()){const n=e.map(i=>i instanceof Hi?i.data_:i);return new Hi(Ez.apply(null,n))}else{const n=e.map(o=>Rd(o)?bz(Pn.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[r++]=o[a]}),new Hi(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){let e;try{e=JSON.parse(t)}catch{return null}return fz(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rz(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Iz(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function RI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xz(t,e){return e}class Ct{constructor(e,n,i,s){this.server=e,this.local=n||e,this.writable=!!i,this.xform=s||xz}}let Rc=null;function Dz(t){return!Rd(t)||t.length<2?t:RI(t)}function II(){if(Rc)return Rc;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(r,o){return Dz(o)}const n=new Ct("name");n.xform=e,t.push(n);function i(r,o){return o!==void 0?Number(o):o}const s=new Ct("size");return s.xform=i,t.push(s),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),Rc=t,Rc}function Oz(t,e){function n(){const i=t.bucket,s=t.fullPath,r=new Yt(i,s);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function Mz(t,e,n){const i={};i.type="file";const s=n.length;for(let r=0;r<s;r++){const o=n[r];i[o.local]=o.xform(i,e[o.server])}return Oz(i,t),i}function xI(t,e,n){const i=NI(e);return i===null?null:Mz(t,i,n)}function kz(t,e,n,i){const s=NI(e);if(s===null||!Rd(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const c=t.bucket,h=t.fullPath,f="/b/"+o(c)+"/o/"+o(h),d=Vu(f,n,i),g=TI({alt:"media",token:u});return d+g})[0]}function DI(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class ga{constructor(e,n,i,s){this.url=e,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){if(!t)throw k_()}function U_(t,e){function n(i,s){const r=xI(t,s,e);return di(r!==null),r}return n}function Lz(t,e){function n(i,s){const r=xI(t,s,e);return di(r!==null),kz(r,s,t.host,t._protocol)}return n}function qu(t){function e(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=J9():s=W9():n.getStatus()===402?s=X9(t.bucket):n.getStatus()===403?s=Z9(t.path):s=i,s.status=n.getStatus(),s.serverResponse=i.serverResponse,s}return e}function OI(t){const e=qu(t);function n(i,s){let r=e(i,s);return i.getStatus()===404&&(r=Q9(t.path)),r.serverResponse=s.serverResponse,r}return n}function Uz(t,e,n){const i=e.fullServerUrl(),s=Vu(i,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new ga(s,r,U_(t,n),o);return a.errorHandler=OI(e),a}function zz(t,e,n){const i=e.fullServerUrl(),s=Vu(i,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new ga(s,r,Lz(t,n),o);return a.errorHandler=OI(e),a}function Pz(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function MI(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=Pz(null,e)),i}function Bz(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let w=0;w<2;w++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=MI(e,i,s),c=DI(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",d=Hi.getBlob(h,i,f);if(d===null)throw EI();const g={name:u.fullPath},v=Vu(r,t.host,t._protocol),_="POST",m=t.maxUploadRetryTime,p=new ga(v,_,U_(t,n),m);return p.urlParams=g,p.headers=o,p.body=d.uploadData(),p.errorHandler=qu(e),p}class hf{constructor(e,n,i,s){this.current=e,this.total=n,this.finalized=!!i,this.metadata=s||null}}function z_(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{di(!1)}return di(!!n&&(e||["active"]).indexOf(n)!==-1),n}function jz(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o=MI(e,i,s),a={name:o.fullPath},l=Vu(r,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=DI(o,n),f=t.maxUploadRetryTime;function d(v){z_(v);let _;try{_=v.getResponseHeader("X-Goog-Upload-URL")}catch{di(!1)}return di(Rd(_)),_}const g=new ga(l,u,d,f);return g.urlParams=a,g.headers=c,g.body=h,g.errorHandler=qu(e),g}function Fz(t,e,n,i){const s={"X-Goog-Upload-Command":"query"};function r(u){const c=z_(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{di(!1)}h||di(!1);const f=Number(h);return di(!isNaN(f)),new hf(f,i.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ga(n,o,r,a);return l.headers=s,l.errorHandler=qu(e),l}const O1=256*1024;function Vz(t,e,n,i,s,r,o,a){const l=new hf(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=i.size()),i.size()!==l.total)throw iz();const u=l.total-l.current;let c=u;s>0&&(c=Math.min(c,s));const h=l.current,f=h+c;let d="";c===0?d="finalize":u===c?d="upload, finalize":d="upload";const g={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${l.current}`},v=i.slice(h,f);if(v===null)throw EI();function _(w,N){const O=z_(w,["active","final"]),R=l.current+c,k=i.size();let U;return O==="final"?U=U_(e,r)(w,N):U=null,new hf(R,k,O==="final",U)}const m="POST",p=e.maxUploadRetryTime,y=new ga(n,m,_,p);return y.headers=g,y.body=v.uploadData(),y.progressCallback=a||null,y.errorHandler=qu(t),y}const Ut={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xp(t){switch(t){case"running":case"pausing":case"canceling":return Ut.RUNNING;case"paused":return Ut.PAUSED;case"success":return Ut.SUCCESS;case"canceled":return Ut.CANCELED;case"error":return Ut.ERROR;default:return Ut.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qz{constructor(e,n,i){if(hz(e)||n!=null||i!=null)this.next=e,this.error=n??void 0,this.complete=i??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Hz{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Zs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Zs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Zs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s){if(this.sent_)throw xa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $z extends Hz{initXhr(){this.xhr_.responseType="text"}}function Gr(){return new $z}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gz{constructor(e,n,i=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=i,this._mappings=II(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Ae.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(bI(s.status,[]))if(r)s=vI();else{this.sleepTime=Math.max(this.sleepTime*2,Y9),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Ae.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,r)=>{this._resolve=s,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,i])=>{switch(this._state){case"running":e(n,i);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const i=jz(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(i,Gr,e,n);this._request=s,s.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,i)=>{const s=Fz(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(s,Gr,n,i);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=O1*this._chunkMultiplier,n=new hf(this._transferred,this._blob.size()),i=this._uploadUrl;this._resolveToken((s,r)=>{let o;try{o=Vz(this._ref._location,this._ref.storage,i,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Gr,s,r,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){O1*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const i=Uz(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(i,Gr,e,n);this._request=s,s.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const i=Bz(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(i,Gr,e,n);this._request=s,s.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=_I(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Xp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,i,s){const r=new qz(n||void 0,i||void 0,s||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Xp(this._state)){case Ut.SUCCESS:Pr(this._resolve.bind(null,this.snapshot))();break;case Ut.CANCELED:case Ut.ERROR:const n=this._reject;Pr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Xp(this._state)){case Ut.RUNNING:case Ut.PAUSED:e.next&&Pr(e.next.bind(e,this.snapshot))();break;case Ut.SUCCESS:e.complete&&Pr(e.complete.bind(e))();break;case Ut.CANCELED:case Ut.ERROR:e.error&&Pr(e.error.bind(e,this._error))();break;default:e.error&&Pr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pr(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return RI(this._location.path)}get storage(){return this._service}get parent(){const e=Rz(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new pr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oz(e)}}function Kz(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Gz(t,new Hi(e),n)}function Yz(t){t._throwIfRoot("getDownloadURL");const e=zz(t.storage,t._location,II());return t.storage.makeRequestWithTokens(e,Gr).then(n=>{if(n===null)throw sz();return n})}function Qz(t,e){const n=Iz(t._location.path,e),i=new Yt(t._location.bucket,n);return new pr(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xz(t){return/^[A-Za-z]+:\/\//.test(t)}function Wz(t,e){return new pr(t,e)}function kI(t,e){if(t instanceof P_){const n=t;if(n._bucket==null)throw nz();const i=new pr(n,n._bucket);return e!=null?kI(i,e):i}else return e!==void 0?Qz(t,e):t}function Jz(t,e){if(e&&Xz(e)){if(t instanceof P_)return Wz(t,e);throw Yg("To use ref(service, url), the first argument must be a Storage instance.")}else return kI(t,e)}function M1(t,e){const n=e==null?void 0:e[yI];return n==null?null:Yt.makeFromBucketSpec(n,t)}function Zz(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken=typeof s=="string"?s:YC(s,t.app.options.projectId))}class P_{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=gI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=G9,this._maxUploadRetryTime=K9,this._requests=new Set,s!=null?this._bucket=Yt.makeFromBucketSpec(s,this._host):this._bucket=M1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=M1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){D1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){D1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pr(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new az(wI());{const o=vz(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const k1="@firebase/storage",L1="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="storage";function eP(t,e,n){return t=fe(t),Kz(t,e,n)}function tP(t){return t=fe(t),Yz(t)}function nP(t,e){return t=fe(t),Jz(t,e)}function iP(t=Yf(),e){t=fe(t);const i=Rr(t,LI).getImmediate({identifier:e}),s=Ev("storage");return s&&sP(i,...s),i}function sP(t,e,n,i={}){Zz(t,e,n,i)}function rP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new P_(n,i,s,e,Ii)}function oP(){_n(new sn(LI,rP,"PUBLIC").setMultipleInstances(!0)),qe(k1,L1,""),qe(k1,L1,"esm2017")}oP();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ql.apply(this,arguments)}var Wi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Wi||(Wi={}));const U1="popstate";function aP(t){t===void 0&&(t={});function e(i,s){let{pathname:r,search:o,hash:a}=i.location;return Qg("",{pathname:r,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){return typeof s=="string"?s:UI(s)}return uP(e,n,null,t)}function Ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function B_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lP(){return Math.random().toString(36).substr(2,8)}function z1(t,e){return{usr:t.state,key:t.key,idx:e}}function Qg(t,e,n,i){return n===void 0&&(n=null),Ql({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ya(e):e,{state:n,key:e&&e.key||i||lP()})}function UI(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ya(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function uP(t,e,n,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:r=!1}=i,o=s.history,a=Wi.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ql({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Wi.Pop;let _=c(),m=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:m})}function f(_,m){a=Wi.Push;let p=Qg(v.location,_,m);n&&n(p,_),u=c()+1;let y=z1(p,u),w=v.createHref(p);try{o.pushState(y,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;s.location.assign(w)}r&&l&&l({action:a,location:v.location,delta:1})}function d(_,m){a=Wi.Replace;let p=Qg(v.location,_,m);n&&n(p,_),u=c();let y=z1(p,u),w=v.createHref(p);o.replaceState(y,"",w),r&&l&&l({action:a,location:v.location,delta:0})}function g(_){let m=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof _=="string"?_:UI(_);return p=p.replace(/ $/,"%20"),Ke(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return a},get location(){return t(s,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(U1,h),l=_,()=>{s.removeEventListener(U1,h),l=null}},createHref(_){return e(s,_)},createURL:g,encodeLocation(_){let m=g(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:d,go(_){return o.go(_)}};return v}var P1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(P1||(P1={}));function cP(t,e,n){return n===void 0&&(n="/"),hP(t,e,n,!1)}function hP(t,e,n,i){let s=typeof e=="string"?ya(e):e,r=BI(s.pathname||"/",n);if(r==null)return null;let o=zI(t);fP(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=bP(r);a=wP(o[l],u,i)}return a}function zI(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let s=(r,o,a)=>{let l={relativePath:a===void 0?r.path||"":a,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};l.relativePath.startsWith("/")&&(Ke(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=er([i,l.relativePath]),c=n.concat(l);r.children&&r.children.length>0&&(Ke(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zI(r.children,e,c,u)),!(r.path==null&&!r.index)&&e.push({path:u,score:_P(u,r.index),routesMeta:c})};return t.forEach((r,o)=>{var a;if(r.path===""||!((a=r.path)!=null&&a.includes("?")))s(r,o);else for(let l of PI(r.path))s(r,o,l)}),e}function PI(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,s=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return s?[r,""]:[r];let o=PI(i.join("/")),a=[];return a.push(...o.map(l=>l===""?r:[r,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function fP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:EP(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const dP=/^:[\w-]+$/,pP=3,mP=2,gP=1,yP=10,vP=-2,B1=t=>t==="*";function _P(t,e){let n=t.split("/"),i=n.length;return n.some(B1)&&(i+=vP),e&&(i+=mP),n.filter(s=>!B1(s)).reduce((s,r)=>s+(dP.test(r)?pP:r===""?gP:yP),i)}function EP(t,e){return t.length===e.length&&t.slice(0,-1).every((i,s)=>i===e[s])?t[t.length-1]-e[e.length-1]:0}function wP(t,e,n){n===void 0&&(n=!1);let{routesMeta:i}=t,s={},r="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=r==="/"?e:e.slice(r.length)||"/",h=j1({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!h&&u&&n&&!i[i.length-1].route.index&&(h=j1({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!h)return null;Object.assign(s,h.params),o.push({params:s,pathname:er([r,h.pathname]),pathnameBase:xP(er([r,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(r=er([r,h.pathnameBase]))}return o}function j1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=TP(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let r=s[0],o=r.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:i.reduce((u,c,h)=>{let{paramName:f,isOptional:d}=c;if(f==="*"){let v=a[h]||"";o=r.slice(0,r.length-v.length).replace(/(.)\/+$/,"$1")}const g=a[h];return d&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:o,pattern:t}}function TP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),B_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function bP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return B_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function BI(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const SP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,CP=t=>SP.test(t);function AP(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:s=""}=typeof t=="string"?ya(t):t,r;if(n)if(CP(n))r=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),B_(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?r=F1(n.substring(1),"/"):r=F1(n,e)}else r=e;return{pathname:r,search:DP(i),hash:OP(s)}}function F1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Wp(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function RP(t,e){let n=NP(t);return e?n.map((i,s)=>s===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function IP(t,e,n,i){i===void 0&&(i=!1);let s;typeof t=="string"?s=ya(t):(s=Ql({},t),Ke(!s.pathname||!s.pathname.includes("?"),Wp("?","pathname","search",s)),Ke(!s.pathname||!s.pathname.includes("#"),Wp("#","pathname","hash",s)),Ke(!s.search||!s.search.includes("#"),Wp("#","search","hash",s)));let r=t===""||s.pathname==="",o=r?"/":s.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!i&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;s.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=AP(s,a),u=o&&o!=="/"&&o.endsWith("/"),c=(r||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const er=t=>t.join("/").replace(/\/\/+/g,"/"),xP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function MP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const jI=["post","put","patch","delete"];new Set(jI);const kP=["get",...jI];new Set(kP);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xl.apply(this,arguments)}const j_=S.createContext(null),LP=S.createContext(null),Id=S.createContext(null),xd=S.createContext(null),As=S.createContext({outlet:null,matches:[],isDataRoute:!1}),FI=S.createContext(null);function Dd(){return S.useContext(xd)!=null}function VI(){return Dd()||Ke(!1),S.useContext(xd).location}function qI(t){S.useContext(Id).static||S.useLayoutEffect(t)}function HI(){let{isDataRoute:t}=S.useContext(As);return t?WP():UP()}function UP(){Dd()||Ke(!1);let t=S.useContext(j_),{basename:e,future:n,navigator:i}=S.useContext(Id),{matches:s}=S.useContext(As),{pathname:r}=VI(),o=JSON.stringify(RP(s,n.v7_relativeSplatPath)),a=S.useRef(!1);return qI(()=>{a.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let h=IP(u,JSON.parse(o),r,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:er([e,h.pathname])),(c.replace?i.replace:i.push)(h,c.state,c)},[e,i,o,r,t])}const $I=S.createContext(null);function zP(){return S.useContext($I)}function PP(t){let e=S.useContext(As).outlet;return e&&S.createElement($I.Provider,{value:t},e)}function BP(){let{matches:t}=S.useContext(As),e=t[t.length-1];return e?e.params:{}}function jP(t,e){return FP(t,e)}function FP(t,e,n,i){Dd()||Ke(!1);let{navigator:s}=S.useContext(Id),{matches:r}=S.useContext(As),o=r[r.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=VI(),c;if(e){var h;let _=typeof e=="string"?ya(e):e;l==="/"||(h=_.pathname)!=null&&h.startsWith(l)||Ke(!1),c=_}else c=u;let f=c.pathname||"/",d=f;if(l!=="/"){let _=l.replace(/^\//,"").split("/");d="/"+f.replace(/^\//,"").split("/").slice(_.length).join("/")}let g=cP(t,{pathname:d}),v=GP(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:er([l,s.encodeLocation?s.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:er([l,s.encodeLocation?s.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),r,n,i);return e&&v?S.createElement(xd.Provider,{value:{location:Xl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Wi.Pop}},v):v}function VP(){let t=XP(),e=MP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},r=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:s},n):null,r)}const qP=S.createElement(VP,null);class HP extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(As.Provider,{value:this.props.routeContext},S.createElement(FI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $P(t){let{routeContext:e,match:n,children:i}=t,s=S.useContext(j_);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(As.Provider,{value:e},i)}function GP(t,e,n,i){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var r;if(!n)return null;if(n.errors)t=n.matches;else if((r=i)!=null&&r.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);c>=0||Ke(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:f,errors:d}=n,g=h.route.loader&&f[h.route.id]===void 0&&(!d||d[h.route.id]===void 0);if(h.route.lazy||g){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,f)=>{let d,g=!1,v=null,_=null;n&&(d=a&&h.route.id?a[h.route.id]:void 0,v=h.route.errorElement||qP,l&&(u<0&&f===0?(JP("route-fallback",!1),g=!0,_=null):u===f&&(g=!0,_=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),p=()=>{let y;return d?y=v:g?y=_:h.route.Component?y=S.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=c,S.createElement($P,{match:h,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?S.createElement(HP,{location:n.location,revalidation:n.revalidation,component:v,error:d,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var GI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(GI||{}),ff=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ff||{});function KP(t){let e=S.useContext(j_);return e||Ke(!1),e}function YP(t){let e=S.useContext(LP);return e||Ke(!1),e}function QP(t){let e=S.useContext(As);return e||Ke(!1),e}function KI(t){let e=QP(),n=e.matches[e.matches.length-1];return n.route.id||Ke(!1),n.route.id}function XP(){var t;let e=S.useContext(FI),n=YP(ff.UseRouteError),i=KI(ff.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function WP(){let{router:t}=KP(GI.UseNavigateStable),e=KI(ff.UseNavigateStable),n=S.useRef(!1);return qI(()=>{n.current=!0}),S.useCallback(function(s,r){r===void 0&&(r={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Xl({fromRouteId:e},r)))},[t,e])}const V1={};function JP(t,e,n){!e&&!V1[t]&&(V1[t]=!0)}function ZP(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function eB(t){return PP(t.context)}function oh(t){Ke(!1)}function tB(t){let{basename:e="/",children:n=null,location:i,navigationType:s=Wi.Pop,navigator:r,static:o=!1,future:a}=t;Dd()&&Ke(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:r,static:o,future:Xl({v7_relativeSplatPath:!1},a)}),[l,a,r,o]);typeof i=="string"&&(i=ya(i));let{pathname:c="/",search:h="",hash:f="",state:d=null,key:g="default"}=i,v=S.useMemo(()=>{let _=BI(c,l);return _==null?null:{location:{pathname:_,search:h,hash:f,state:d,key:g},navigationType:s}},[l,c,h,f,d,g,s]);return v==null?null:S.createElement(Id.Provider,{value:u},S.createElement(xd.Provider,{children:n,value:v}))}function nB(t){let{children:e,location:n}=t;return jP(Xg(e),n)}new Promise(()=>{});function Xg(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(i,s)=>{if(!S.isValidElement(i))return;let r=[...e,s];if(i.type===S.Fragment){n.push.apply(n,Xg(i.props.children,r));return}i.type!==oh&&Ke(!1),!i.props.index||!i.props.children||Ke(!1);let o={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Xg(i.props.children,r)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const iB="6";try{window.__reactRouterVersion=iB}catch{}const sB="startTransition",q1=vD[sB];function rB(t){let{basename:e,children:n,future:i,window:s}=t,r=S.useRef();r.current==null&&(r.current=aP({window:s,v5Compat:!0}));let o=r.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=S.useCallback(h=>{u&&q1?q1(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.useEffect(()=>ZP(i),[i]),S.createElement(tB,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var H1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(H1||(H1={}));var $1;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($1||($1={}));const G1="@firebase/database",K1="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YI="";function oB(t){YI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lB{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ri(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aB(e)}}catch{}return new lB},Hs=QI("localStorage"),Wg=QI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new yu("@firebase/database"),uB=function(){let t=1;return function(){return t++}}(),XI=function(t){const e=_k(t),n=new mk;n.update(e);const i=n.digest();return _v.encodeByteArray(i)},Hu=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Hu.apply(null,i):typeof i=="object"?e+=tt(i):e+=i,e+=" "}return e};let tr=null,Y1=!0;const cB=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(So.logLevel=se.VERBOSE,tr=So.log.bind(So),e&&Wg.set("logging_enabled",!0)):typeof t=="function"?tr=t:(tr=null,Wg.remove("logging_enabled"))},yt=function(...t){if(Y1===!0&&(Y1=!1,tr===null&&Wg.get("logging_enabled")===!0&&cB(!0)),tr){const e=Hu.apply(null,t);tr(e)}},$u=function(t){return function(...e){yt(t,...e)}},Jg=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hu(...t);So.error(e)},mr=function(...t){const e=`FIREBASE FATAL ERROR: ${Hu(...t)}`;throw So.error(e),new Error(e)},en=function(...t){const e="FIREBASE WARNING: "+Hu(...t);So.warn(e)},hB=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&en("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},WI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},fB=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yo="[MIN_NAME]",gr="[MAX_NAME]",va=function(t,e){if(t===e)return 0;if(t===Yo||e===gr)return-1;if(e===Yo||t===gr)return 1;{const n=Q1(t),i=Q1(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},dB=function(t,e){return t===e?0:t<e?-1:1},Da=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+tt(e))},F_=function(t){if(typeof t!="object"||t===null)return tt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=tt(e[i]),n+=":",n+=F_(t[e[i]]);return n+="}",n},JI=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Vt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ZI=function(t){A(!WI(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},pB=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},mB=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gB(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const yB=new RegExp("^-?(0*)\\d{1,10}$"),vB=-2147483648,_B=2147483647,Q1=function(t){if(yB.test(t)){const e=Number(t);if(e>=vB&&e<=_B)return e}return null},Gu=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw en("Exception was thrown by user callback.",n),e},Math.floor(0))}},EB=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wB{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){en(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TB{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',en(e)}}class Zg{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zg.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="5",ex="v",tx="s",nx="r",ix="f",sx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rx="ls",ox="p",ey="ac",ax="websocket",lx="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bB{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function SB(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ux(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let i;if(e===ax)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===lx)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);SB(t)&&(n.ns=t.namespace);const s=[];return Vt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CB{constructor(){this.counters_={}}incrementCounter(e,n=1){Ri(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ek(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp={},Zp={};function q_(t){const e=t.toString();return Jp[e]||(Jp[e]=new CB),Jp[e]}function AB(t,e){const n=t.toString();return Zp[n]||(Zp[n]=e()),Zp[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NB{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Gu(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="start",RB="close",IB="pLPCommand",xB="pRTLPCB",cx="id",hx="pw",fx="ser",DB="cb",OB="seg",MB="ts",kB="d",LB="dframe",dx=1870,px=30,UB=dx-px,zB=25e3,PB=3e4;class ao{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$u(e),this.stats_=q_(n),this.urlFn=l=>(this.appCheckToken&&(l[ey]=this.appCheckToken),ux(n,lx,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NB(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PB)),fB(()=>{if(this.isClosed_)return;this.scriptTagHolder=new H_((...r)=>{const[o,a,l,u,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===X1)this.id=a,this.password=l;else if(o===RB)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[X1]="t",i[fx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[DB]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ex]=V_,this.transportSessionId&&(i[tx]=this.transportSessionId),this.lastSessionId&&(i[rx]=this.lastSessionId),this.applicationId&&(i[ox]=this.applicationId),this.appCheckToken&&(i[ey]=this.appCheckToken),typeof location<"u"&&location.hostname&&sx.test(location.hostname)&&(i[nx]=ix);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ao.forceAllow_=!0}static forceDisallow(){ao.forceDisallow_=!0}static isAvailable(){return ao.forceAllow_?!0:!ao.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pB()&&!mB()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=qC(n),s=JI(i,UB);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[LB]="t",i[cx]=e,i[hx]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class H_{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uB(),window[IB+this.uniqueCallbackIdentifier]=e,window[xB+this.uniqueCallbackIdentifier]=n,this.myIFrame=H_.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){yt("frame writing exception"),a.stack&&yt(a.stack),yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||yt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cx]=this.myID,e[hx]=this.myPW,e[fx]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+px+i.length<=dx;){const o=this.pendingSegs.shift();i=i+"&"+OB+s+"="+o.seg+"&"+MB+s+"="+o.ts+"&"+kB+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(zB)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BB=16384,jB=45e3;let df=null;typeof MozWebSocket<"u"?df=MozWebSocket:typeof WebSocket<"u"&&(df=WebSocket);class Sn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$u(this.connId),this.stats_=q_(n),this.connURL=Sn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[ex]=V_,typeof location<"u"&&location.hostname&&sx.test(location.hostname)&&(o[nx]=ix),n&&(o[tx]=n),i&&(o[rx]=i),s&&(o[ey]=s),r&&(o[ox]=r),ux(e,ax,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hs.set("previous_websocket_failure",!0);try{let i;XC(),this.mySock=new df(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&df!==null&&!Sn.forceDisallow_}static previouslyFailed(){return Hs.isInMemoryStorage||Hs.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=xl(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=JI(n,BB);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jB))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Sn.responsesRequiredToBeHealthy=2;Sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ao,Sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Sn&&Sn.isAvailable();let i=n&&!Sn.previouslyFailed();if(e.webSocketOnly&&(n||en("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Sn];else{const s=this.transports_=[];for(const r of Wl.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Wl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FB=6e4,VB=5e3,qB=10*1024,HB=100*1024,em="t",W1="d",$B="s",J1="r",GB="e",Z1="o",eT="a",tT="n",nT="p",KB="h";class YB{constructor(e,n,i,s,r,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$u("c:"+this.id+":"),this.transportManager_=new Wl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=fl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HB?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qB?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(em in e){const n=e[em];n===eT?this.upgradeIfSecondaryHealthy_():n===J1?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Z1&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Da("t",e),i=Da("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Da("t",e),i=Da("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Da(em,e);if(W1 in e){const i=e[W1];if(n===KB){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===tT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$B?this.onConnectionShutdown_(i):n===J1?this.onReset_(i):n===GB?Jg("Server Error: "+i):n===Z1?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jg("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),V_!==i&&en("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),fl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(FB))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VB))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf extends gx{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new pf}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=32,sT=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new ye("")}function J(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function _s(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function yx(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function QB(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vx(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _x(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function Ge(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ye)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ye(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function Pt(t,e){const n=J(t),i=J(e);if(n===null)return e;if(n===i)return Pt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $_(t,e){if(_s(t)!==_s(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Cn(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(_s(t)>_s(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class XB{constructor(e,n){this.errorPrefix_=n,this.parts_=vx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Kf(this.parts_[i]);Ex(this)}}function WB(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kf(e),Ex(t)}function JB(t){const e=t.parts_.pop();t.byteLength_-=Kf(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ex(t){if(t.byteLength_>sT)throw new Error(t.errorPrefix_+"has a key path longer than "+sT+" bytes ("+t.byteLength_+").");if(t.parts_.length>iT)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+iT+") or object contains a cycle "+Us(t))}function Us(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_ extends gx{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new G_}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=1e3,ZB=60*5*1e3,rT=30*1e3,ej=1.3,tj=3e4,nj="server_kill",oT=3;class pi extends mx{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pi.nextPersistentConnectionId_++,this.log_=$u("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oa,this.maxReconnectDelay_=ZB,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!XC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");G_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(tt(r)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new wv,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,u=a.s;pi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ri(e,"w")){const i=Bo(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();en(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dk(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jg("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tj&&(this.reconnectDelay_=Oa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ej)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+pi.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},u=function(h){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?yt("getToken() completed but was canceled"):(yt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new YB(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{en(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(nj)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&en(h),l())}}}interrupt(e){yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cg(this.interruptReasons_)&&(this.reconnectDelay_=Oa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>F_(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ye(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){yt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=oT&&(this.reconnectDelay_=rT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){yt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=oT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+YI.replace(/\./g,"-")]=1,Tv()?e["framework.cordova"]=1:QC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pf.getInstance().currentlyOnline();return cg(this.interruptReasons_)&&e}}pi.nextPersistentConnectionId_=0;pi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new K(Yo,e),s=new K(Yo,n);return this.compare(i,s)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;class wx extends Od{static get __EMPTY_NODE(){return Ic}static set __EMPTY_NODE(e){Ic=e}compare(e,n){return va(e.name,n.name)}isDefinedOn(e){throw la("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(gr,Ic)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Ic)}toString(){return".key"}}const Co=new wx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ze{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ze.RED,this.left=s??Bt.EMPTY_NODE,this.right=r??Bt.EMPTY_NODE}copy(e,n,i,s,r){return new Ze(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ze.RED=!0;Ze.BLACK=!1;class ij{copy(e,n,i,s,r){return this}insert(e,n,i){return new Ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bt{constructor(e,n=Bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ze.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xc(this.root_,null,this.comparator_,!0,e)}}Bt.EMPTY_NODE=new ij;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sj(t,e){return va(t.name,e.name)}function K_(t,e){return va(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty;function rj(t){ty=t}const Tx=function(t){return typeof t=="number"?"number:"+ZI(t):"string:"+t},bx=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ri(e,".sv"),"Priority must be a string or number.")}else A(t===ty||t.isEmpty(),"priority of unexpected type.");A(t===ty||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aT;class Xe{constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bx(this.priorityNode_)}static set __childrenNodeConstructor(e){aT=e}static get __childrenNodeConstructor(){return aT}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:J(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=J(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(A(i!==".priority"||_s(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tx(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ZI(this.value_):e+=this.value_,this.lazyHash_=XI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Xe.VALUE_TYPE_ORDER.indexOf(n),r=Xe.VALUE_TYPE_ORDER.indexOf(i);return A(s>=0,"Unknown leaf type: "+n),A(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sx,Cx;function oj(t){Sx=t}function aj(t){Cx=t}class lj extends Od{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?va(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(gr,new Xe("[PRIORITY-POST]",Cx))}makePost(e,n){const i=Sx(e);return new K(n,new Xe("[PRIORITY-POST]",i))}toString(){return".priority"}}const De=new lj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uj=Math.log(2);class cj{constructor(e){const n=r=>parseInt(Math.log(r)/uj,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mf=function(t,e,n,i){t.sort(e);const s=function(l,u){const c=u-l;let h,f;if(c===0)return null;if(c===1)return h=t[l],f=n?n(h):h,new Ze(f,h.node,Ze.BLACK,null,null);{const d=parseInt(c/2,10)+l,g=s(l,d),v=s(d+1,u);return h=t[d],f=n?n(h):h,new Ze(f,h.node,Ze.BLACK,g,v)}},r=function(l){let u=null,c=null,h=t.length;const f=function(g,v){const _=h-g,m=h;h-=g;const p=s(_+1,m),y=t[_],w=n?n(y):y;d(new Ze(w,y.node,v,null,p))},d=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),_=Math.pow(2,l.count-(g+1));v?f(_,Ze.BLACK):(f(_,Ze.BLACK),f(_,Ze.RED))}return c},o=new cj(t.length),a=r(o);return new Bt(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tm;const Br={};class li{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(Br&&De,"ChildrenNode.ts has not been loaded"),tm=tm||new li({".priority":Br},{".priority":De}),tm}get(e){const n=Bo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Bt?n:null}hasIndex(e){return Ri(this.indexSet_,e.toString())}addIndex(e,n){A(e!==Co,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=mf(i,e.getCompare()):a=Br;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new li(c,u)}addToIndexes(e,n){const i=Fh(this.indexes_,(s,r)=>{const o=Bo(this.indexSet_,r);if(A(o,"Missing index implementation for "+r),s===Br)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(K.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),mf(a,o.getCompare())}else return Br;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new K(e.name,a))),l.insert(e,e.node)}});return new li(i,this.indexSet_)}removeFromIndexes(e,n){const i=Fh(this.indexes_,s=>{if(s===Br)return s;{const r=n.get(e.name);return r?s.remove(new K(e.name,r)):s}});return new li(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma;class P{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&bx(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ma||(Ma=new P(new Bt(K_),null,li.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ma}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ma:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new K(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ma:this.priorityNode_;return new P(s,o,r)}}updateChild(e,n){const i=J(e);if(i===null)return n;{A(J(e)!==".priority"||_s(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ve(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(De,(o,a)=>{n[o]=a.val(e),i++,r&&P.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tx(this.getPriority().val())+":"),this.forEachChild(De,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":XI(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,K.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ku?-1:0}withIndex(e){if(e===Co||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Co||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(De),s=n.getIterator(De);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Co?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hj extends P{constructor(){super(new Bt(K_),P.EMPTY_NODE,li.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Ku=new hj;Object.defineProperties(K,{MIN:{value:new K(Yo,P.EMPTY_NODE)},MAX:{value:new K(gr,Ku)}});wx.__EMPTY_NODE=P.EMPTY_NODE;Xe.__childrenNodeConstructor=P;rj(Ku);aj(Ku);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fj=!0;function vt(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,vt(e))}if(!(t instanceof Array)&&fj){const n=[];let i=!1;if(Vt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=vt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new K(o,l)))}}),n.length===0)return P.EMPTY_NODE;const r=mf(n,sj,o=>o.name,K_);if(i){const o=mf(n,De.getCompare());return new P(r,vt(e),new li({".priority":o},{".priority":De}))}else return new P(r,vt(e),li.Default)}else{let n=P.EMPTY_NODE;return Vt(t,(i,s)=>{if(Ri(t,i)&&i.substring(0,1)!=="."){const r=vt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(vt(e))}}oj(vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj extends Od{constructor(e){super(),this.indexPath_=e,A(!Z(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?va(e.name,n.name):r}makePost(e,n){const i=vt(e),s=P.EMPTY_NODE.updateChild(this.indexPath_,i);return new K(n,s)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Ku);return new K(gr,e)}toString(){return vx(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj extends Od{compare(e,n){const i=e.node.compareTo(n.node);return i===0?va(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const i=vt(e);return new K(n,i)}toString(){return".value"}}const mj=new pj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t){return{type:"value",snapshotNode:t}}function Qo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Jl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gj(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Jl(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qo(n,i)):o.trackChildChange(Zl(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(De,(s,r)=>{n.hasChild(s)||i.trackChildChange(Jl(s,r))}),n.isLeafNode()||n.forEachChild(De,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Zl(s,r,o))}else i.trackChildChange(Qo(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.indexedFilter_=new Y_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=eu.getStartPost_(e),this.endPost_=eu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new K(n,i))||(i=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=P.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(De,(o,a)=>{r.matches(new K(o,a))||(s=s.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yj{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new eu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new K(n,i))||(i=P.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(P.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,d)=>h(d,f)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new K(n,i),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const d=f==null?1:o(f,l);if(c&&!i.isEmpty()&&d>=0)return r!=null&&r.trackChildChange(Zl(n,i,h)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(Jl(n,h));const v=a.updateImmediateChild(n,P.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Qo(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return i.isEmpty()?e:c&&o(u,l)>=0?(r!=null&&(r.trackChildChange(Jl(u.name,u.node)),r.trackChildChange(Qo(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(u.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yo}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Q_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vj(t){return t.loadsAllData()?new Y_(t.getIndex()):t.hasLimit()?new yj(t):new eu(t)}function lT(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===mj?n="$value":t.index_===Co?n="$key":(A(t.index_ instanceof dj,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=tt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=tt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+tt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=tt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function uT(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends mx{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=$u("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=gf.getListenId_(e,i),a={};this.listens_[o]=a;const l=lT(e._queryParams);this.restRequest_(r+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(r,h,!1,i),Bo(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const i=gf.getListenId_(e,n);delete this.listens_[i]}get(e){const n=lT(e._queryParams),i=e._path.toString(),s=new wv;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ua(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xl(a.responseText)}catch{en("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&en("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _j{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(){return{value:null,children:new Map}}function Nx(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=J(e);t.children.has(i)||t.children.set(i,yf());const s=t.children.get(i);e=ve(e),Nx(s,e,n)}}function ny(t,e,n){t.value!==null?n(e,t.value):Ej(t,(i,s)=>{const r=new ye(e.toString()+"/"+i);ny(s,r,n)})}function Ej(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Vt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=10*1e3,Tj=30*1e3,bj=5*60*1e3;class Sj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wj(e);const i=cT+(Tj-cT)*Math.random();fl(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Vt(e,(s,r)=>{r>0&&Ri(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),fl(this.reportStats_.bind(this),Math.floor(Math.random()*2*bj))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var An;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(An||(An={}));function Rx(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function X_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function W_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=An.ACK_USER_WRITE,this.source=Rx()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new vf(oe(),n,this.revert)}}else return A(J(this.path)===e,"operationForChild called for unrelated child."),new vf(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.source=e,this.path=n,this.type=An.LISTEN_COMPLETE}operationForChild(e){return Z(this.path)?new tu(this.source,oe()):new tu(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=An.OVERWRITE}operationForChild(e){return Z(this.path)?new yr(this.source,oe(),this.snap.getImmediateChild(e)):new yr(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=An.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new yr(this.source,oe(),n.value):new nu(this.source,oe(),n)}else return A(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new nu(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Aj(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(gj(o.childName,o.snapshotNode))}),ka(t,s,"child_removed",e,i,n),ka(t,s,"child_added",e,i,n),ka(t,s,"child_moved",r,i,n),ka(t,s,"child_changed",e,i,n),ka(t,s,"value",e,i,n),s}function ka(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Rj(t,a,l)),o.forEach(a=>{const l=Nj(t,a,r);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Nj(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Rj(t,e,n){if(e.childName==null||n.childName==null)throw la("Should only compare child_ events.");const i=new K(e.childName,e.snapshotNode),s=new K(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){return{eventCache:t,serverCache:e}}function dl(t,e,n,i){return Md(new vr(e,n,i),t.serverCache)}function Ix(t,e,n,i){return Md(t.eventCache,new vr(e,n,i))}function iy(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _r(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nm;const Ij=()=>(nm||(nm=new Bt(dB)),nm);class we{constructor(e,n=Ij()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return Vt(e,(i,s)=>{n=n.set(new ye(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(Z(e))return null;{const i=J(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ve(e),n);return r!=null?{path:Ge(new ye(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=J(e),i=this.children.get(n);return i!==null?i.subtree(ve(e)):new we(null)}}set(e,n){if(Z(e))return new we(n,this.children);{const i=J(e),r=(this.children.get(i)||new we(null)).set(ve(e),n),o=this.children.insert(i,r);return new we(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=J(e),i=this.children.get(n);if(i){const s=i.remove(ve(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(Z(e))return this.value;{const n=J(e),i=this.children.get(n);return i?i.get(ve(e)):null}}setTree(e,n){if(Z(e))return n;{const i=J(e),r=(this.children.get(i)||new we(null)).setTree(ve(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new we(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ge(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Z(e))return null;{const r=J(e),o=this.children.get(r);return o?o.findOnPath_(ve(e),Ge(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,i){if(Z(e))return this;{this.value&&i(n,this.value);const s=J(e),r=this.children.get(s);return r?r.foreachOnPath_(ve(e),Ge(n,s),i):new we(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ge(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.writeTree_=e}static empty(){return new Nn(new we(null))}}function pl(t,e,n){if(Z(e))return new Nn(new we(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Pt(s,e);return r=r.updateChild(o,n),new Nn(t.writeTree_.set(s,r))}else{const s=new we(n),r=t.writeTree_.setTree(e,s);return new Nn(r)}}}function hT(t,e,n){let i=t;return Vt(n,(s,r)=>{i=pl(i,Ge(e,s),r)}),i}function fT(t,e){if(Z(e))return Nn.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Nn(n)}}function sy(t,e){return Or(t,e)!=null}function Or(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pt(n.path,e)):null}function dT(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(i,s)=>{e.push(new K(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new K(i,s.value))}),e}function cs(t,e){if(Z(e))return t;{const n=Or(t,e);return n!=null?new Nn(new we(n)):new Nn(t.writeTree_.subtree(e))}}function ry(t){return t.writeTree_.isEmpty()}function Xo(t,e){return xx(oe(),t.writeTree_,e)}function xx(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(A(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=xx(Ge(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ge(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t,e){return kx(e,t)}function xj(t,e,n,i,s){A(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=pl(t.visibleWrites,e,n)),t.lastWriteId=i}function Dj(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Oj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Mj(a,i.path)?s=!1:Cn(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return kj(t),!0;if(i.snap)t.visibleWrites=fT(t.visibleWrites,i.path);else{const a=i.children;Vt(a,l=>{t.visibleWrites=fT(t.visibleWrites,Ge(i.path,l))})}return!0}else return!1}function Mj(t,e){if(t.snap)return Cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Cn(Ge(t.path,n),e))return!0;return!1}function kj(t){t.visibleWrites=Dx(t.allWrites,Lj,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Lj(t){return t.visible}function Dx(t,e,n){let i=Nn.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Cn(n,o)?(a=Pt(n,o),i=pl(i,a,r.snap)):Cn(o,n)&&(a=Pt(o,n),i=pl(i,oe(),r.snap.getChild(a)));else if(r.children){if(Cn(n,o))a=Pt(n,o),i=hT(i,a,r.children);else if(Cn(o,n))if(a=Pt(o,n),Z(a))i=hT(i,oe(),r.children);else{const l=Bo(r.children,J(a));if(l){const u=l.getChild(ve(a));i=pl(i,oe(),u)}}}else throw la("WriteRecord should have .snap or .children")}}return i}function Ox(t,e,n,i,s){if(!i&&!s){const r=Or(t.visibleWrites,e);if(r!=null)return r;{const o=cs(t.visibleWrites,e);if(ry(o))return n;if(n==null&&!sy(o,oe()))return null;{const a=n||P.EMPTY_NODE;return Xo(o,a)}}}else{const r=cs(t.visibleWrites,e);if(!s&&ry(r))return n;if(!s&&n==null&&!sy(r,oe()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(Cn(u.path,e)||Cn(e,u.path))},a=Dx(t.allWrites,o,e),l=n||P.EMPTY_NODE;return Xo(a,l)}}}function Uj(t,e,n){let i=P.EMPTY_NODE;const s=Or(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(De,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=cs(t.visibleWrites,e);return n.forEachChild(De,(o,a)=>{const l=Xo(cs(r,new ye(o)),a);i=i.updateImmediateChild(o,l)}),dT(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=cs(t.visibleWrites,e);return dT(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function zj(t,e,n,i,s){A(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ge(e,n);if(sy(t.visibleWrites,r))return null;{const o=cs(t.visibleWrites,r);return ry(o)?s.getChild(n):Xo(o,s.getChild(n))}}function Pj(t,e,n,i){const s=Ge(e,n),r=Or(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=cs(t.visibleWrites,s);return Xo(o,i.getNode().getImmediateChild(n))}else return null}function Bj(t,e){return Or(t.visibleWrites,e)}function jj(t,e,n,i,s,r,o){let a;const l=cs(t.visibleWrites,e),u=Or(l,oe());if(u!=null)a=u;else if(n!=null)a=Xo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&c.length<s;)h(d,i)!==0&&c.push(d),d=f.getNext();return c}else return[]}function Fj(){return{visibleWrites:Nn.empty(),allWrites:[],lastWriteId:-1}}function _f(t,e,n,i){return Ox(t.writeTree,t.treePath,e,n,i)}function Z_(t,e){return Uj(t.writeTree,t.treePath,e)}function pT(t,e,n,i){return zj(t.writeTree,t.treePath,e,n,i)}function Ef(t,e){return Bj(t.writeTree,Ge(t.treePath,e))}function Vj(t,e,n,i,s,r){return jj(t.writeTree,t.treePath,e,n,i,s,r)}function e0(t,e,n){return Pj(t.writeTree,t.treePath,e,n)}function Mx(t,e){return kx(Ge(t.treePath,e),t.writeTree)}function kx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Zl(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Jl(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Qo(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Zl(i,e.snapshotNode,s.oldSnap));else throw la("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Lx=new Hj;class t0{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new vr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return e0(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_r(this.viewCache_),r=Vj(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $j(t){return{filter:t}}function Gj(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Kj(t,e,n,i,s){const r=new qj;let o,a;if(n.type===An.OVERWRITE){const u=n;u.source.fromUser?o=oy(t,e,u.path,u.snap,i,s,r):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Z(u.path),o=wf(t,e,u.path,u.snap,i,s,a,r))}else if(n.type===An.MERGE){const u=n;u.source.fromUser?o=Qj(t,e,u.path,u.children,i,s,r):(A(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ay(t,e,u.path,u.children,i,s,a,r))}else if(n.type===An.ACK_USER_WRITE){const u=n;u.revert?o=Jj(t,e,u.path,i,s,r):o=Xj(t,e,u.path,u.affectedTree,i,s,r)}else if(n.type===An.LISTEN_COMPLETE)o=Wj(t,e,n.path,i,r);else throw la("Unknown operation type: "+n.type);const l=r.getChanges();return Yj(e,o,l),{viewCache:o,changes:l}}function Yj(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=iy(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Ax(iy(e)))}}function Ux(t,e,n,i,s,r){const o=e.eventCache;if(Ef(i,n)!=null)return e;{let a,l;if(Z(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=_r(e),c=u instanceof P?u:P.EMPTY_NODE,h=Z_(i,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const u=_f(i,_r(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=J(n);if(u===".priority"){A(_s(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=pT(i,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=ve(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=pT(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(u).updateChild(c,f):h=o.getNode().getImmediateChild(u)}else h=e0(i,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,s,r):a=o.getNode()}}return dl(e,a,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function wf(t,e,n,i,s,r,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(Z(n))u=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);u=c.updateFullNode(l.getNode(),d,null)}else{const d=J(n);if(!l.isCompleteForPath(n)&&_s(n)>1)return e;const g=ve(n),_=l.getNode().getImmediateChild(d).updateChild(g,i);d===".priority"?u=c.updatePriority(l.getNode(),_):u=c.updateChild(l.getNode(),d,_,g,Lx,null)}const h=Ix(e,u,l.isFullyInitialized()||Z(n),c.filtersNodes()),f=new t0(s,h,r);return Ux(t,h,n,s,f,a)}function oy(t,e,n,i,s,r,o){const a=e.eventCache;let l,u;const c=new t0(s,e,r);if(Z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=dl(e,u,!0,t.filter.filtersNodes());else{const h=J(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),i),l=dl(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ve(n),d=a.getNode().getImmediateChild(h);let g;if(Z(f))g=i;else{const v=c.getCompleteChild(h);v!=null?yx(f)===".priority"&&v.getChild(_x(f)).isEmpty()?g=v:g=v.updateChild(f,i):g=P.EMPTY_NODE}if(d.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),h,g,f,c,o);l=dl(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function mT(t,e){return t.eventCache.isCompleteForChild(e)}function Qj(t,e,n,i,s,r,o){let a=e;return i.foreach((l,u)=>{const c=Ge(n,l);mT(e,J(c))&&(a=oy(t,a,c,u,s,r,o))}),i.foreach((l,u)=>{const c=Ge(n,l);mT(e,J(c))||(a=oy(t,a,c,u,s,r,o))}),a}function gT(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ay(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Z(n)?u=i:u=new we(null).setTree(n,i);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(c.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),g=gT(t,d,f);l=wf(t,l,new ye(h),g,s,r,o,a)}}),u.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!c.hasChild(h)&&!d){const g=e.serverCache.getNode().getImmediateChild(h),v=gT(t,g,f);l=wf(t,l,new ye(h),v,s,r,o,a)}}),l}function Xj(t,e,n,i,s,r,o){if(Ef(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return wf(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Z(n)){let u=new we(null);return l.getNode().forEachChild(Co,(c,h)=>{u=u.set(new ye(c),h)}),ay(t,e,n,u,s,r,a,o)}else return e}else{let u=new we(null);return i.foreach((c,h)=>{const f=Ge(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),ay(t,e,n,u,s,r,a,o)}}function Wj(t,e,n,i,s){const r=e.serverCache,o=Ix(e,r.getNode(),r.isFullyInitialized()||Z(n),r.isFiltered());return Ux(t,o,n,i,Lx,s)}function Jj(t,e,n,i,s,r){let o;if(Ef(i,n)!=null)return e;{const a=new t0(i,e,s),l=e.eventCache.getNode();let u;if(Z(n)||J(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=_f(i,_r(e));else{const h=e.serverCache.getNode();A(h instanceof P,"serverChildren would be complete if leaf node"),c=Z_(i,h)}c=c,u=t.filter.updateFullNode(l,c,r)}else{const c=J(n);let h=e0(i,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,ve(n),a,r):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,P.EMPTY_NODE,ve(n),a,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_f(i,_r(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Ef(i,oe())!=null,dl(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Y_(i.getIndex()),r=vj(i);this.processor_=$j(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(P.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(P.EMPTY_NODE,a.getNode(),null),c=new vr(l,o.isFullyInitialized(),s.filtersNodes()),h=new vr(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Md(h,c),this.eventGenerator_=new Cj(this.query_)}get query(){return this.query_}}function eF(t){return t.viewCache_.serverCache.getNode()}function tF(t,e){const n=_r(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function yT(t){return t.eventRegistrations_.length===0}function nF(t,e){t.eventRegistrations_.push(e)}function vT(t,e,n){const i=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function _T(t,e,n,i){e.type===An.MERGE&&e.source.queryId!==null&&(A(_r(t.viewCache_),"We should always have a full cache before handling merges"),A(iy(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Kj(t.processor_,s,e,n,i);return Gj(t.processor_,r.viewCache),A(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,zx(t,r.changes,r.viewCache.eventCache.getNode(),null)}function iF(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(r,o)=>{i.push(Qo(r,o))}),n.isFullyInitialized()&&i.push(Ax(n.getNode())),zx(t,i,n.getNode(),e)}function zx(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Aj(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tf;class sF{constructor(){this.views=new Map}}function rF(t){A(!Tf,"__referenceConstructor has already been defined"),Tf=t}function oF(){return A(Tf,"Reference.ts has not been loaded"),Tf}function aF(t){return t.views.size===0}function n0(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return A(r!=null,"SyncTree gave us an op for an invalid query."),_T(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(_T(o,e,n,i));return r}}function lF(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=_f(n,s?i:null),l=!1;a?l=!0:i instanceof P?(a=Z_(n,i),l=!1):(a=P.EMPTY_NODE,l=!1);const u=Md(new vr(a,l,!1),new vr(i,s,!1));return new Zj(e,u)}return o}function uF(t,e,n,i,s,r){const o=lF(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nF(o,n),iF(o,n)}function cF(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Es(t);if(s==="default")for(const[l,u]of t.views.entries())o=o.concat(vT(u,n,i)),yT(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=t.views.get(s);l&&(o=o.concat(vT(l,n,i)),yT(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Es(t)&&r.push(new(oF())(e._repo,e._path)),{removed:r,events:o}}function Px(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ao(t,e){let n=null;for(const i of t.views.values())n=n||tF(i,e);return n}function Bx(t,e){if(e._queryParams.loadsAllData())return kd(t);{const i=e._queryIdentifier;return t.views.get(i)}}function jx(t,e){return Bx(t,e)!=null}function Es(t){return kd(t)!=null}function kd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bf;function hF(t){A(!bf,"__referenceConstructor has already been defined"),bf=t}function fF(){return A(bf,"Reference.ts has not been loaded"),bf}let dF=1;class ET{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=Fj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pF(t,e,n,i,s){return xj(t.pendingWriteTree_,e,n,i,s),s?Yu(t,new yr(Rx(),e,n)):[]}function lo(t,e,n=!1){const i=Dj(t.pendingWriteTree_,e);if(Oj(t.pendingWriteTree_,e)){let r=new we(null);return i.snap!=null?r=r.set(oe(),!0):Vt(i.children,o=>{r=r.set(new ye(o),!0)}),Yu(t,new vf(i.path,r,n))}else return[]}function Ld(t,e,n){return Yu(t,new yr(X_(),e,n))}function mF(t,e,n){const i=we.fromObject(n);return Yu(t,new nu(X_(),e,i))}function gF(t,e){return Yu(t,new tu(X_(),e))}function yF(t,e,n){const i=i0(t,n);if(i){const s=s0(i),r=s.path,o=s.queryId,a=Pt(r,e),l=new tu(W_(o),a);return r0(t,r,l)}else return[]}function ly(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||jx(o,e))){const l=cF(o,e,n,i);aF(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=l.removed;if(a=l.events,!s){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,d)=>Es(d));if(c&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const d=EF(f);for(let g=0;g<d.length;++g){const v=d[g],_=v.query,m=Hx(t,v);t.listenProvider_.startListening(ml(_),Sf(t,_),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!i&&(c?t.listenProvider_.stopListening(ml(e),null):u.forEach(f=>{const d=t.queryToTagMap.get(Ud(f));t.listenProvider_.stopListening(ml(f),d)}))}wF(t,u)}return a}function vF(t,e,n,i){const s=i0(t,i);if(s!=null){const r=s0(s),o=r.path,a=r.queryId,l=Pt(o,e),u=new yr(W_(a),l,n);return r0(t,o,u)}else return[]}function _F(t,e,n,i){const s=i0(t,i);if(s){const r=s0(s),o=r.path,a=r.queryId,l=Pt(o,e),u=we.fromObject(n),c=new nu(W_(a),l,u);return r0(t,o,c)}else return[]}function wT(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,d)=>{const g=Pt(f,s);r=r||Ao(d,g),o=o||Es(d)});let a=t.syncPointTree_.get(s);a?(o=o||Es(a),r=r||Ao(a,oe())):(a=new sF,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((d,g)=>{const v=Ao(g,oe());v&&(r=r.updateImmediateChild(d,v))}));const u=jx(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Ud(e);A(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const d=TF();t.queryToTagMap.set(f,d),t.tagToQueryMap.set(d,f)}const c=J_(t.pendingWriteTree_,s);let h=uF(a,e,n,c,r,l);if(!u&&!o&&!i){const f=Bx(a,e);h=h.concat(bF(t,e,f))}return h}function Fx(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Pt(o,e),u=Ao(a,l);if(u)return u});return Ox(s,e,r,n,!0)}function Yu(t,e){return Vx(e,t.syncPointTree_,null,J_(t.pendingWriteTree_,oe()))}function Vx(t,e,n,i){if(Z(t.path))return qx(t,e,n,i);{const s=e.get(oe());n==null&&s!=null&&(n=Ao(s,oe()));let r=[];const o=J(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Mx(i,o);r=r.concat(Vx(a,l,u,c))}return s&&(r=r.concat(n0(s,t,i,n))),r}}function qx(t,e,n,i){const s=e.get(oe());n==null&&s!=null&&(n=Ao(s,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Mx(i,o),c=t.operationForChild(o);c&&(r=r.concat(qx(c,a,l,u)))}),s&&(r=r.concat(n0(s,t,i,n))),r}function Hx(t,e){const n=e.query,i=Sf(t,n);return{hashFn:()=>(eF(e)||P.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?yF(t,n._path,i):gF(t,n._path);{const r=gB(s,n);return ly(t,n,null,r)}}}}function Sf(t,e){const n=Ud(e);return t.queryToTagMap.get(n)}function Ud(t){return t._path.toString()+"$"+t._queryIdentifier}function i0(t,e){return t.tagToQueryMap.get(e)}function s0(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function r0(t,e,n){const i=t.syncPointTree_.get(e);A(i,"Missing sync point for query tag that we're tracking");const s=J_(t.pendingWriteTree_,e);return n0(i,n,s,null)}function EF(t){return t.fold((e,n,i)=>{if(n&&Es(n))return[kd(n)];{let s=[];return n&&(s=Px(n)),Vt(i,(r,o)=>{s=s.concat(o)}),s}})}function ml(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(fF())(t._repo,t._path):t}function wF(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=Ud(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function TF(){return dF++}function bF(t,e,n){const i=e._path,s=Sf(t,e),r=Hx(t,n),o=t.listenProvider_.startListening(ml(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)A(!Es(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!Z(u)&&c&&Es(c))return[kd(c).query];{let f=[];return c&&(f=f.concat(Px(c).map(d=>d.query))),Vt(h,(d,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(ml(c),Sf(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new o0(n)}node(){return this.node_}}class a0{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ge(this.path_,e);return new a0(this.syncTree_,n)}node(){return Fx(this.syncTree_,this.path_)}}const SF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},TT=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return CF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return AF(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},CF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},AF=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&A(!1,"Unexpected increment value: "+i);const s=e.node();if(A(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},NF=function(t,e,n,i){return l0(e,new a0(n,t),i)},RF=function(t,e,n){return l0(t,new o0(e),n)};function l0(t,e,n){const i=t.getPriority().val(),s=TT(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=TT(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Xe(a,vt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Xe(s))),o.forEachChild(De,(a,l)=>{const u=l0(l,e.getImmediateChild(a),n);u!==l&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function c0(t,e){let n=e instanceof ye?e:new ye(e),i=t,s=J(n);for(;s!==null;){const r=Bo(i.node.children,s)||{children:{},childCount:0};i=new u0(s,i,r),n=ve(n),s=J(n)}return i}function _a(t){return t.node.value}function $x(t,e){t.node.value=e,uy(t)}function Gx(t){return t.node.childCount>0}function IF(t){return _a(t)===void 0&&!Gx(t)}function zd(t,e){Vt(t.node.children,(n,i)=>{e(new u0(n,t,i))})}function Kx(t,e,n,i){n&&!i&&e(t),zd(t,s=>{Kx(s,e,!0,i)}),n&&i&&e(t)}function xF(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Qu(t){return new ye(t.parent===null?t.name:Qu(t.parent)+"/"+t.name)}function uy(t){t.parent!==null&&DF(t.parent,t.name,t)}function DF(t,e,n){const i=IF(n),s=Ri(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,uy(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,uy(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF=/[\[\].#$\/\u0000-\u001F\u007F]/,MF=/[\[\].#$\u0000-\u001F\u007F]/,im=10*1024*1024,Yx=function(t){return typeof t=="string"&&t.length!==0&&!OF.test(t)},Qx=function(t){return typeof t=="string"&&t.length!==0&&!MF.test(t)},kF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qx(t)},Xx=function(t,e,n){const i=n instanceof ye?new XB(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Us(i));if(typeof e=="function")throw new Error(t+"contains a function "+Us(i)+" with contents = "+e.toString());if(WI(e))throw new Error(t+"contains "+e.toString()+" "+Us(i));if(typeof e=="string"&&e.length>im/3&&Kf(e)>im)throw new Error(t+"contains a string greater than "+im+" utf8 bytes "+Us(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Vt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Yx(o)))throw new Error(t+" contains an invalid key ("+o+") "+Us(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WB(i,o),Xx(t,a,i),JB(i)}),s&&r)throw new Error(t+' contains ".value" child '+Us(i)+" in addition to actual children.")}},Wx=function(t,e,n,i){if(!(i&&n===void 0)&&!Qx(n))throw new Error(ZC(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LF=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wx(t,e,n,i)},UF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kF(n))throw new Error(ZC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jx(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!$_(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Zx(t,e,n){Jx(t,n),e2(t,i=>$_(i,e))}function Mr(t,e,n){Jx(t,n),e2(t,i=>Cn(i,e)||Cn(e,i))}function e2(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(PF(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();tr&&yt("event: "+n.toString()),Gu(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BF="repo_interrupt",jF=25;class FF{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yf(),this.transactionQueueTree_=new u0,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VF(t,e,n){if(t.stats_=q_(t.repoInfo_),t.forceRestClient_||EB())t.server_=new gf(t.repoInfo_,(i,s,r,o)=>{bT(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ST(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new pi(t.repoInfo_,e,(i,s,r,o)=>{bT(t,i,s,r,o)},i=>{ST(t,i)},i=>{HF(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=AB(t.repoInfo_,()=>new Sj(t.stats_,t.server_)),t.infoData_=new _j,t.infoSyncTree_=new ET({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Ld(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),h0(t,"connected",!1),t.serverSyncTree_=new ET({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const u=o(a,l);Mr(t.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function qF(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function t2(t){return SF({timestamp:qF(t)})}function bT(t,e,n,i,s){t.dataUpdateCount++;const r=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Fh(n,u=>vt(u));o=_F(t.serverSyncTree_,r,l,s)}else{const l=vt(n);o=vF(t.serverSyncTree_,r,l,s)}else if(i){const l=Fh(n,u=>vt(u));o=mF(t.serverSyncTree_,r,l)}else{const l=vt(n);o=Ld(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=d0(t,r)),Mr(t.eventQueue_,a,o)}function ST(t,e){h0(t,"connected",e),e===!1&&GF(t)}function HF(t,e){Vt(e,(n,i)=>{h0(t,n,i)})}function h0(t,e,n){const i=new ye("/.info/"+e),s=vt(n);t.infoData_.updateSnapshot(i,s);const r=Ld(t.infoSyncTree_,i,s);Mr(t.eventQueue_,i,r)}function $F(t){return t.nextWriteId_++}function GF(t){n2(t,"onDisconnectEvents");const e=t2(t),n=yf();ny(t.onDisconnect_,oe(),(s,r)=>{const o=NF(s,r,t.serverSyncTree_,e);Nx(n,s,o)});let i=[];ny(n,oe(),(s,r)=>{i=i.concat(Ld(t.serverSyncTree_,s,r));const o=WF(t,s);d0(t,o)}),t.onDisconnect_=yf(),Mr(t.eventQueue_,oe(),i)}function KF(t,e,n){let i;J(e._path)===".info"?i=wT(t.infoSyncTree_,e,n):i=wT(t.serverSyncTree_,e,n),Zx(t.eventQueue_,e._path,i)}function CT(t,e,n){let i;J(e._path)===".info"?i=ly(t.infoSyncTree_,e,n):i=ly(t.serverSyncTree_,e,n),Zx(t.eventQueue_,e._path,i)}function YF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(BF)}function n2(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),yt(n,...e)}function i2(t,e,n){return Fx(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function f0(t,e=t.transactionQueueTree_){if(e||Pd(t,e),_a(e)){const n=r2(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&QF(t,Qu(e),n)}else Gx(e)&&zd(e,n=>{f0(t,n)})}function QF(t,e,n){const i=n.map(u=>u.currentWriteId),s=i2(t,e,i);let r=s;const o=s.hash();for(let u=0;u<n.length;u++){const c=n[u];A(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Pt(e,c.path);r=r.updateChild(h,c.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,u=>{n2(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(lo(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Pd(t,c0(t.transactionQueueTree_,e)),f0(t,t.transactionQueueTree_),Mr(t.eventQueue_,e,c);for(let f=0;f<h.length;f++)Gu(h[f])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{en("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}d0(t,e)}},o)}function d0(t,e){const n=s2(t,e),i=Qu(n),s=r2(t,n);return XF(t,s,i),i}function XF(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Pt(n,l.path);let c=!1,h;if(A(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,s=s.concat(lo(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=jF)c=!0,h="maxretry",s=s.concat(lo(t.serverSyncTree_,l.currentWriteId,!0));else{const f=i2(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Xx("transaction failed: Data returned ",d,l.path);let g=vt(d);typeof d=="object"&&d!=null&&Ri(d,".priority")||(g=g.updatePriority(f.getPriority()));const _=l.currentWriteId,m=t2(t),p=RF(g,f,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=p,l.currentWriteId=$F(t),o.splice(o.indexOf(_),1),s=s.concat(pF(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),s=s.concat(lo(t.serverSyncTree_,_,!0))}else c=!0,h="nodata",s=s.concat(lo(t.serverSyncTree_,l.currentWriteId,!0))}Mr(t.eventQueue_,n,s),s=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Pd(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Gu(i[a]);f0(t,t.transactionQueueTree_)}function s2(t,e){let n,i=t.transactionQueueTree_;for(n=J(e);n!==null&&_a(i)===void 0;)i=c0(i,n),e=ve(e),n=J(e);return i}function r2(t,e){const n=[];return o2(t,e,n),n.sort((i,s)=>i.order-s.order),n}function o2(t,e,n){const i=_a(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);zd(e,s=>{o2(t,s,n)})}function Pd(t,e){const n=_a(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,$x(e,n.length>0?n:void 0)}zd(e,i=>{Pd(t,i)})}function WF(t,e){const n=Qu(s2(t,e)),i=c0(t.transactionQueueTree_,e);return xF(i,s=>{sm(t,s)}),sm(t,i),Kx(i,s=>{sm(t,s)}),n}function sm(t,e){const n=_a(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(lo(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$x(e,void 0):n.length=r+1,Mr(t.eventQueue_,Qu(e),s);for(let o=0;o<i.length;o++)Gu(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JF(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function ZF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):en(`Invalid query segment '${n}' in query '${t}'`)}return e}const AT=function(t,e){const n=eV(t),i=n.namespace;n.domain==="firebase.com"&&mr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&mr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hB();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bB(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ye(n.pathString)}},eV=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(s=JF(t.substring(c,h)));const f=ZF(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const d=e.slice(0,u);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tt(this.snapshot.exportVal())}}class l2{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Z(this._path)?null:yx(this._path)}get ref(){return new xi(this._repo,this._path)}get _queryIdentifier(){const e=uT(this._queryParams),n=F_(e);return n==="{}"?"default":n}get _queryObject(){return uT(this._queryParams)}isEqual(e){if(e=fe(e),!(e instanceof p0))return!1;const n=this._repo===e._repo,i=$_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+QB(this._path)}}class xi extends p0{constructor(e,n){super(e,n,new Q_,!1)}get parent(){const e=_x(this._path);return e===null?null:new xi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class iu{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),i=cy(this.ref,e);return new iu(this._node.getChild(n),i,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new iu(s,cy(this.ref,i),De)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cy(t,e){return t=fe(t),J(t._path)===null?LF("child","path",e,!1):Wx("child","path",e,!1),new xi(t._repo,Ge(t._path,e))}class m0{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new a2("value",this,new iu(e.snapshotNode,new xi(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new l2(this,e,n):null}matches(e){return e instanceof m0?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class g0{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new l2(this,e,n):null}createEvent(e,n){A(e.childName!=null,"Child events should have a childName.");const i=cy(new xi(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new a2(e.type,this,new iu(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof g0?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Xu(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=n,u=(c,h)=>{CT(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new tV(n,r||void 0),a=e==="value"?new m0(o):new g0(e,o);return KF(t._repo,t,a),()=>CT(t._repo,t,a)}function nV(t,e,n,i){return Xu(t,"value",e,n,i)}function iV(t,e,n,i){return Xu(t,"child_added",e,n,i)}function sV(t,e,n,i){return Xu(t,"child_changed",e,n,i)}function rV(t,e,n,i){return Xu(t,"child_moved",e,n,i)}function oV(t,e,n,i){return Xu(t,"child_removed",e,n,i)}rF(xi);hF(xi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV="FIREBASE_DATABASE_EMULATOR_HOST",hy={};let lV=!1;function uV(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||mr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=AT(r,s),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[aV]),u?(l=!0,r=`http://${u}?ns=${a.namespace}`,o=AT(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const c=s&&l?new Zg(Zg.OWNER):new TB(t.name,t.options,e);UF("Invalid Firebase Database URL",o),Z(o.path)||mr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=hV(a,t,c,new wB(t.name,n));return new fV(h,t)}function cV(t,e){const n=hy[e];(!n||n[t.key]!==t)&&mr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),YF(t),delete n[t.key]}function hV(t,e,n,i){let s=hy[e.name];s||(s={},hy[e.name]=s);let r=s[t.toURLString()];return r&&mr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new FF(t,lV,n,i),s[t.toURLString()]=r,r}class fV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xi(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mr("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dV(t){oB(Ii),_n(new sn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return uV(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),qe(G1,K1,t),qe(G1,K1,"esm2017")}pi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dV();var pV="firebase",mV="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(pV,mV,"app");const gV=(t,e)=>e.some(n=>t instanceof n);let NT,RT;function yV(){return NT||(NT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vV(){return RT||(RT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u2=new WeakMap,fy=new WeakMap,c2=new WeakMap,rm=new WeakMap,y0=new WeakMap;function _V(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(hs(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&u2.set(n,t)}).catch(()=>{}),y0.set(e,t),e}function EV(t){if(fy.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});fy.set(t,e)}let dy={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fy.get(t);if(e==="objectStoreNames")return t.objectStoreNames||c2.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wV(t){dy=t(dy)}function TV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(om(this),e,...n);return c2.set(i,e.sort?e.sort():[e]),hs(i)}:vV().includes(t)?function(...e){return t.apply(om(this),e),hs(u2.get(this))}:function(...e){return hs(t.apply(om(this),e))}}function bV(t){return typeof t=="function"?TV(t):(t instanceof IDBTransaction&&EV(t),gV(t,yV())?new Proxy(t,dy):t)}function hs(t){if(t instanceof IDBRequest)return _V(t);if(rm.has(t))return rm.get(t);const e=bV(t);return e!==t&&(rm.set(t,e),y0.set(e,t)),e}const om=t=>y0.get(t);function SV(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=hs(o);return i&&o.addEventListener("upgradeneeded",l=>{i(hs(o.result),l.oldVersion,l.newVersion,hs(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const CV=["get","getKey","getAll","getAllKeys","count"],AV=["put","add","delete","clear"],am=new Map;function IT(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(am.get(e))return am.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=AV.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||CV.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return am.set(e,r),r}wV(t=>({...t,get:(e,n,i)=>IT(e,n)||t.get(e,n,i),has:(e,n)=>!!IT(e,n)||t.has(e,n)}));const h2="@firebase/installations",v0="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=1e4,d2=`w:${v0}`,p2="FIS_v2",NV="https://firebaseinstallations.googleapis.com/v1",RV=60*60*1e3,IV="installations",xV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Er=new Nr(IV,xV,DV);function m2(t){return t instanceof wn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2({projectId:t}){return`${NV}/projects/${t}/installations`}function y2(t){return{token:t.token,requestStatus:2,expiresIn:MV(t.expiresIn),creationTime:Date.now()}}async function v2(t,e){const i=(await e.json()).error;return Er.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function _2({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function OV(t,{refreshToken:e}){const n=_2(t);return n.append("Authorization",kV(e)),n}async function E2(t){const e=await t();return e.status>=500&&e.status<600?t():e}function MV(t){return Number(t.replace("s","000"))}function kV(t){return`${p2} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=g2(t),s=_2(t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:p2,appId:t.appId,sdkVersion:d2},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await E2(()=>fetch(i,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:y2(u.authToken)}}else throw await v2("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV=/^[cdef][\w-]{21}$/,py="";function PV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=BV(t);return zV.test(n)?n:py}catch{return py}}function BV(t){return UV(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=new Map;function b2(t,e){const n=Bd(t);S2(n,e),jV(n,e)}function S2(t,e){const n=T2.get(t);if(n)for(const i of n)i(e)}function jV(t,e){const n=FV();n&&n.postMessage({key:t,fid:e}),VV()}let $s=null;function FV(){return!$s&&"BroadcastChannel"in self&&($s=new BroadcastChannel("[Firebase] FID Change"),$s.onmessage=t=>{S2(t.data.key,t.data.fid)}),$s}function VV(){T2.size===0&&$s&&($s.close(),$s=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV="firebase-installations-database",HV=1,wr="firebase-installations-store";let lm=null;function _0(){return lm||(lm=SV(qV,HV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wr)}}})),lm}async function Cf(t,e){const n=Bd(t),s=(await _0()).transaction(wr,"readwrite"),r=s.objectStore(wr),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&b2(t,e.fid),e}async function C2(t){const e=Bd(t),i=(await _0()).transaction(wr,"readwrite");await i.objectStore(wr).delete(e),await i.done}async function jd(t,e){const n=Bd(t),s=(await _0()).transaction(wr,"readwrite"),r=s.objectStore(wr),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&b2(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t){let e;const n=await jd(t.appConfig,i=>{const s=$V(i),r=GV(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===py?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $V(t){const e=t||{fid:PV(),registrationStatus:0};return A2(e)}function GV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Er.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=KV(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:YV(t)}:{installationEntry:e}}async function KV(t,e){try{const n=await LV(t,e);return Cf(t.appConfig,n)}catch(n){throw m2(n)&&n.customData.serverCode===409?await C2(t.appConfig):await Cf(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function YV(t){let e=await xT(t.appConfig);for(;e.registrationStatus===1;)await w2(100),e=await xT(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await E0(t);return i||n}return e}function xT(t){return jd(t,e=>{if(!e)throw Er.create("installation-not-found");return A2(e)})}function A2(t){return QV(t)?{fid:t.fid,registrationStatus:0}:t}function QV(t){return t.registrationStatus===1&&t.registrationTime+f2<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XV({appConfig:t,heartbeatServiceProvider:e},n){const i=WV(t,n),s=OV(t,n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:d2,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await E2(()=>fetch(i,a));if(l.ok){const u=await l.json();return y2(u)}else throw await v2("Generate Auth Token",l)}function WV(t,{fid:e}){return`${g2(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(t,e=!1){let n;const i=await jd(t.appConfig,r=>{if(!N2(r))throw Er.create("not-registered");const o=r.authToken;if(!e&&e8(o))return r;if(o.requestStatus===1)return n=JV(t,e),r;{if(!navigator.onLine)throw Er.create("app-offline");const a=n8(r);return n=ZV(t,a),a}});return n?await n:i.authToken}async function JV(t,e){let n=await DT(t.appConfig);for(;n.authToken.requestStatus===1;)await w2(100),n=await DT(t.appConfig);const i=n.authToken;return i.requestStatus===0?w0(t,e):i}function DT(t){return jd(t,e=>{if(!N2(e))throw Er.create("not-registered");const n=e.authToken;return i8(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ZV(t,e){try{const n=await XV(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Cf(t.appConfig,i),n}catch(n){if(m2(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await C2(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cf(t.appConfig,i)}throw n}}function N2(t){return t!==void 0&&t.registrationStatus===2}function e8(t){return t.requestStatus===2&&!t8(t)}function t8(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+RV}function n8(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function i8(t){return t.requestStatus===1&&t.requestTime+f2<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s8(t){const e=t,{installationEntry:n,registrationPromise:i}=await E0(e);return i?i.catch(console.error):w0(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r8(t,e=!1){const n=t;return await o8(n),(await w0(n,e)).token}async function o8(t){const{registrationPromise:e}=await E0(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a8(t){if(!t||!t.options)throw um("App Configuration");if(!t.name)throw um("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw um(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function um(t){return Er.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2="installations",l8="installations-internal",u8=t=>{const e=t.getProvider("app").getImmediate(),n=a8(e),i=Rr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},c8=t=>{const e=t.getProvider("app").getImmediate(),n=Rr(e,R2).getImmediate();return{getId:()=>s8(n),getToken:s=>r8(n,s)}};function h8(){_n(new sn(R2,u8,"PUBLIC")),_n(new sn(l8,c8,"PRIVATE"))}h8();qe(h2,v0);qe(h2,v0,"esm2017");const cm="@firebase/remote-config",OT="0.4.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f8="remote-config";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d8={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},zt=new Nr("remoteconfig","Remote Config",d8);function p8(t){const e=fe(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m8{constructor(e,n,i,s){this.client=e,this.storage=n,this.storageCache=i,this.logger=s}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const i=Date.now()-n,s=i<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${i}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${s}.`),s}async fetch(e){const[n,i]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(i&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return i;e.eTag=i&&i.eTag;const s=await this.client.fetch(e),r=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return s.status===200&&r.push(this.storage.setLastSuccessfulFetchResponse(s)),await Promise.all(r),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g8(t=navigator){return t.languages&&t.languages[0]||t.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y8{constructor(e,n,i,s,r,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=i,this.projectId=s,this.apiKey=r,this.appId=o}async fetch(e){const[n,i]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),r=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:i,app_id:this.appId,language_code:g8()},l={method:"POST",headers:o,body:JSON.stringify(a)},u=fetch(r,l),c=new Promise((_,m)=>{e.signal.addEventListener(()=>{const p=new Error("The operation was aborted.");p.name="AbortError",m(p)})});let h;try{await Promise.race([u,c]),h=await u}catch(_){let m="fetch-client-network";throw(_==null?void 0:_.name)==="AbortError"&&(m="fetch-timeout"),zt.create(m,{originalErrorMessage:_==null?void 0:_.message})}let f=h.status;const d=h.headers.get("ETag")||void 0;let g,v;if(h.status===200){let _;try{_=await h.json()}catch(m){throw zt.create("fetch-client-parse",{originalErrorMessage:m==null?void 0:m.message})}g=_.entries,v=_.state}if(v==="INSTANCE_STATE_UNSPECIFIED"?f=500:v==="NO_CHANGE"?f=304:(v==="NO_TEMPLATE"||v==="EMPTY_CONFIG")&&(g={}),f!==304&&f!==200)throw zt.create("fetch-status",{httpStatus:f});return{status:f,eTag:d,config:g}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v8(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _8(t){if(!(t instanceof wn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class E8{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:i}){await v8(e.signal,n);try{const s=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),s}catch(s){if(!_8(s))throw s;const r={throttleEndTimeMillis:Date.now()+Sk(i),backoffCount:i+1};return await this.storage.setThrottleMetadata(r),this.attemptFetch(e,r)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w8=60*1e3,T8=12*60*60*1e3;class b8{constructor(e,n,i,s,r){this.app=e,this._client=n,this._storageCache=i,this._storage=s,this._logger=r,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:w8,minimumFetchIntervalMillis:T8},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e){const n=t.target.error||void 0;return zt.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const zs="app_namespace_store",S8="firebase_remote_config",C8=1;function A8(){return new Promise((t,e)=>{try{const n=indexedDB.open(S8,C8);n.onerror=i=>{e(ah(i,"storage-open"))},n.onsuccess=i=>{t(i.target.result)},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(zs,{keyPath:"compositeKey"})}}}catch(n){e(zt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class N8{constructor(e,n,i,s=A8()){this.appId=e,this.appName=n,this.namespace=i,this.openDbPromise=s}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((i,s)=>{const o=n.transaction([zs],"readonly").objectStore(zs),a=this.createCompositeKey(e);try{const l=o.get(a);l.onerror=u=>{s(ah(u,"storage-get"))},l.onsuccess=u=>{const c=u.target.result;i(c?c.value:void 0)}}catch(l){s(zt.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const i=await this.openDbPromise;return new Promise((s,r)=>{const a=i.transaction([zs],"readwrite").objectStore(zs),l=this.createCompositeKey(e);try{const u=a.put({compositeKey:l,value:n});u.onerror=c=>{r(ah(c,"storage-set"))},u.onsuccess=()=>{s()}}catch(u){r(zt.create("storage-set",{originalErrorMessage:u==null?void 0:u.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((i,s)=>{const o=n.transaction([zs],"readwrite").objectStore(zs),a=this.createCompositeKey(e);try{const l=o.delete(a);l.onerror=u=>{s(ah(u,"storage-delete"))},l.onsuccess=()=>{i()}}catch(l){s(zt.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R8{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),i=this.storage.getActiveConfig(),s=await e;s&&(this.lastFetchStatus=s);const r=await n;r&&(this.lastSuccessfulFetchTimestampMillis=r);const o=await i;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I8(){_n(new sn(f8,t,"PUBLIC").setMultipleInstances(!0)),qe(cm,OT),qe(cm,OT,"esm2017");function t(e,{instanceIdentifier:n}){const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw zt.create("registration-window");if(!WC())throw zt.create("indexed-db-unavailable");const{projectId:r,apiKey:o,appId:a}=i.options;if(!r)throw zt.create("registration-project-id");if(!o)throw zt.create("registration-api-key");if(!a)throw zt.create("registration-app-id");n=n||"firebase";const l=new N8(a,i.name,n),u=new R8(l),c=new yu(cm);c.logLevel=se.ERROR;const h=new y8(s,Ii,n,r,o,a),f=new E8(h,l),d=new m8(f,l,u,c),g=new b8(i,d,u,l,c);return p8(g),g}}I8();var my=function(t,e){return my=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},my(t,e)};function Di(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");my(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function x8(t,e,n,i){function s(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function a(c){try{u(i.next(c))}catch(h){o(h)}}function l(c){try{u(i.throw(c))}catch(h){o(h)}}function u(c){c.done?r(c.value):s(c.value).then(a,l)}u((i=i.apply(t,e||[])).next())})}function I2(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,s,r,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,s&&(r=u[0]&2?s.return:u[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,u[1])).done)return r;switch(s=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,s=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){n.label=u[1];break}if(u[0]===6&&n.label<r[1]){n.label=r[1],r=u;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(u);break}r[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],s=0}finally{i=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Wo(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Jo(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),s,r=[],o;try{for(;(e===void 0||e-- >0)&&!(s=i.next()).done;)r.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return r}function Zo(t,e,n){if(n||arguments.length===2)for(var i=0,s=e.length,r;i<s;i++)(r||!(i in e))&&(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}function No(t){return this instanceof No?(this.v=t,this):new No(t)}function D8(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=n.apply(t,e||[]),s,r=[];return s={},o("next"),o("throw"),o("return"),s[Symbol.asyncIterator]=function(){return this},s;function o(f){i[f]&&(s[f]=function(d){return new Promise(function(g,v){r.push([f,d,g,v])>1||a(f,d)})})}function a(f,d){try{l(i[f](d))}catch(g){h(r[0][3],g)}}function l(f){f.value instanceof No?Promise.resolve(f.value.v).then(u,c):h(r[0][2],f)}function u(f){a("next",f)}function c(f){a("throw",f)}function h(f,d){f(d),r.shift(),r.length&&a(r[0][0],r[0][1])}}function O8(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Wo=="function"?Wo(t):t[Symbol.iterator](),n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n);function i(r){n[r]=t[r]&&function(o){return new Promise(function(a,l){o=t[r](o),s(a,l,o.done,o.value)})}}function s(r,o,a,l){Promise.resolve(l).then(function(u){r({value:u,done:a})},o)}}function pt(t){return typeof t=="function"}function T0(t){var e=function(i){Error.call(i),i.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var hm=T0(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Af(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Wu=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,i,s,r;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Wo(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(pt(c))try{c()}catch(v){r=v instanceof hm?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var f=Wo(h),d=f.next();!d.done;d=f.next()){var g=d.value;try{MT(g)}catch(v){r=r??[],v instanceof hm?r=Zo(Zo([],Jo(r)),Jo(v.errors)):r.push(v)}}}catch(v){i={error:v}}finally{try{d&&!d.done&&(s=f.return)&&s.call(f)}finally{if(i)throw i.error}}}if(r)throw new hm(r)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)MT(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Af(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Af(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),x2=Wu.EMPTY;function D2(t){return t instanceof Wu||t&&"closed"in t&&pt(t.remove)&&pt(t.add)&&pt(t.unsubscribe)}function MT(t){pt(t)?t():t.unsubscribe()}var O2={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},M8={setTimeout:function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];return setTimeout.apply(void 0,Zo([t,e],Jo(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function M2(t){M8.setTimeout(function(){throw t})}function kT(){}function lh(t){t()}var b0=function(t){Di(e,t);function e(n){var i=t.call(this)||this;return i.isStopped=!1,n?(i.destination=n,D2(n)&&n.add(i)):i.destination=z8,i}return e.create=function(n,i,s){return new su(n,i,s)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Wu),k8=Function.prototype.bind;function fm(t,e){return k8.call(t,e)}var L8=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(i){Dc(i)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(i){Dc(i)}else Dc(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){Dc(n)}},t}(),su=function(t){Di(e,t);function e(n,i,s){var r=t.call(this)||this,o;if(pt(n)||!n)o={next:n??void 0,error:i??void 0,complete:s??void 0};else{var a;r&&O2.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return r.unsubscribe()},o={next:n.next&&fm(n.next,a),error:n.error&&fm(n.error,a),complete:n.complete&&fm(n.complete,a)}):o=n}return r.destination=new L8(o),r}return e}(b0);function Dc(t){M2(t)}function U8(t){throw t}var z8={closed:!0,next:kT,error:U8,complete:kT},S0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function k2(t){return t}function P8(t){return t.length===0?k2:t.length===1?t[0]:function(e){return t.reduce(function(n,i){return i(n)},e)}}var En=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,i){var s=this,r=j8(e)?e:new su(e,n,i);return lh(function(){var o=s,a=o.operator,l=o.source;r.add(a?a.call(r,l):l?s._subscribe(r):s._trySubscribe(r))}),r},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var i=this;return n=LT(n),new n(function(s,r){var o=new su({next:function(a){try{e(a)}catch(l){r(l),o.unsubscribe()}},error:r,complete:s});i.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[S0]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return P8(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=LT(e),new e(function(i,s){var r;n.subscribe(function(o){return r=o},function(o){return s(o)},function(){return i(r)})})},t.create=function(e){return new t(e)},t}();function LT(t){var e;return(e=t??O2.Promise)!==null&&e!==void 0?e:Promise}function B8(t){return t&&pt(t.next)&&pt(t.error)&&pt(t.complete)}function j8(t){return t&&t instanceof b0||B8(t)&&D2(t)}function F8(t){return pt(t==null?void 0:t.lift)}function Fd(t){return function(e){if(F8(e))return e.lift(function(n){try{return t(n,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function C0(t,e,n,i,s){return new V8(t,e,n,i,s)}var V8=function(t){Di(e,t);function e(n,i,s,r,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=i?function(u){try{i(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=r?function(u){try{r(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=s?function(){try{s()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;t.prototype.unsubscribe.call(this),!i&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(b0),q8=T0(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Vd=function(t){Di(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var i=new UT(this,this);return i.operator=n,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new q8},e.prototype.next=function(n){var i=this;lh(function(){var s,r;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var o=Wo(i.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){s={error:u}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(s)throw s.error}}}})},e.prototype.error=function(n){var i=this;lh(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=n;for(var s=i.observers;s.length;)s.shift().error(n)}})},e.prototype.complete=function(){var n=this;lh(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var i=n.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var i=this,s=this,r=s.hasError,o=s.isStopped,a=s.observers;return r||o?x2:(this.currentObservers=null,a.push(n),new Wu(function(){i.currentObservers=null,Af(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var i=this,s=i.hasError,r=i.thrownError,o=i.isStopped;s?n.error(r):o&&n.complete()},e.prototype.asObservable=function(){var n=new En;return n.source=this,n},e.create=function(n,i){return new UT(n,i)},e}(En),UT=function(t){Di(e,t);function e(n,i){var s=t.call(this)||this;return s.destination=n,s.source=i,s}return e.prototype.next=function(n){var i,s;(s=(i=this.destination)===null||i===void 0?void 0:i.next)===null||s===void 0||s.call(i,n)},e.prototype.error=function(n){var i,s;(s=(i=this.destination)===null||i===void 0?void 0:i.error)===null||s===void 0||s.call(i,n)},e.prototype.complete=function(){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||i===void 0||i.call(n)},e.prototype._subscribe=function(n){var i,s;return(s=(i=this.source)===null||i===void 0?void 0:i.subscribe(n))!==null&&s!==void 0?s:x2},e}(Vd),A0={now:function(){return(A0.delegate||Date).now()},delegate:void 0},H8=function(t){Di(e,t);function e(n,i,s){n===void 0&&(n=1/0),i===void 0&&(i=1/0),s===void 0&&(s=A0);var r=t.call(this)||this;return r._bufferSize=n,r._windowTime=i,r._timestampProvider=s,r._buffer=[],r._infiniteTimeWindow=!0,r._infiniteTimeWindow=i===1/0,r._bufferSize=Math.max(1,n),r._windowTime=Math.max(1,i),r}return e.prototype.next=function(n){var i=this,s=i.isStopped,r=i._buffer,o=i._infiniteTimeWindow,a=i._timestampProvider,l=i._windowTime;s||(r.push(n),!o&&r.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var i=this._innerSubscribe(n),s=this,r=s._infiniteTimeWindow,o=s._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=r?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),i},e.prototype._trimBuffer=function(){var n=this,i=n._bufferSize,s=n._timestampProvider,r=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*i;if(i<1/0&&a<r.length&&r.splice(0,r.length-a),!o){for(var l=s.now(),u=0,c=1;c<r.length&&r[c]<=l;c+=2)u=c;u&&r.splice(0,u+1)}},e}(Vd),$8=function(t){Di(e,t);function e(n,i){return t.call(this)||this}return e.prototype.schedule=function(n,i){return this},e}(Wu),gy={setInterval:function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var s=gy.delegate;return s!=null&&s.setInterval?s.setInterval.apply(s,Zo([t,e],Jo(n))):setInterval.apply(void 0,Zo([t,e],Jo(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},G8=function(t){Di(e,t);function e(n,i){var s=t.call(this,n,i)||this;return s.scheduler=n,s.work=i,s.pending=!1,s}return e.prototype.schedule=function(n,i){if(i===void 0&&(i=0),this.closed)return this;this.state=n;var s=this.id,r=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(r,s,i)),this.pending=!0,this.delay=i,this.id=this.id||this.requestAsyncId(r,this.id,i),this},e.prototype.requestAsyncId=function(n,i,s){return s===void 0&&(s=0),gy.setInterval(n.flush.bind(n,this),s)},e.prototype.recycleAsyncId=function(n,i,s){if(s===void 0&&(s=0),s!=null&&this.delay===s&&this.pending===!1)return i;gy.clearInterval(i)},e.prototype.execute=function(n,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var s=this._execute(n,i);if(s)return s;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,i){var s=!1,r;try{this.work(n)}catch(o){s=!0,r=o||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),r},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,i=n.id,s=n.scheduler,r=s.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Af(r,this),i!=null&&(this.id=this.recycleAsyncId(s,i,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}($8),zT=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,i){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(i,n)},t.now=A0.now,t}(),K8=function(t){Di(e,t);function e(n,i){i===void 0&&(i=zT.now);var s=t.call(this,n,i)||this;return s.actions=[],s._active=!1,s._scheduled=void 0,s}return e.prototype.flush=function(n){var i=this.actions;if(this._active){i.push(n);return}var s;this._active=!0;do if(s=n.execute(n.state,n.delay))break;while(n=i.shift());if(this._active=!1,s){for(;n=i.shift();)n.unsubscribe();throw s}},e}(zT);new K8(G8);var Y8=new En(function(t){return t.complete()});function Q8(t){return t?X8(t):Y8}function X8(t){return new En(function(e){return t.schedule(function(){return e.complete()})})}var W8=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function J8(t){return pt(t==null?void 0:t.then)}function Z8(t){return pt(t[S0])}function eq(t){return Symbol.asyncIterator&&pt(t==null?void 0:t[Symbol.asyncIterator])}function tq(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function nq(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var iq=nq();function sq(t){return pt(t==null?void 0:t[iq])}function rq(t){return D8(this,arguments,function(){var e,n,i,s;return I2(this,function(r){switch(r.label){case 0:e=t.getReader(),r.label=1;case 1:r.trys.push([1,,9,10]),r.label=2;case 2:return[4,No(e.read())];case 3:return n=r.sent(),i=n.value,s=n.done,s?[4,No(void 0)]:[3,5];case 4:return[2,r.sent()];case 5:return[4,No(i)];case 6:return[4,r.sent()];case 7:return r.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}})})}function oq(t){return pt(t==null?void 0:t.getReader)}function L2(t){if(t instanceof En)return t;if(t!=null){if(Z8(t))return aq(t);if(W8(t))return lq(t);if(J8(t))return uq(t);if(eq(t))return U2(t);if(sq(t))return cq(t);if(oq(t))return hq(t)}throw tq(t)}function aq(t){return new En(function(e){var n=t[S0]();if(pt(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function lq(t){return new En(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function uq(t){return new En(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,M2)})}function cq(t){return new En(function(e){var n,i;try{for(var s=Wo(t),r=s.next();!r.done;r=s.next()){var o=r.value;if(e.next(o),e.closed)return}}catch(a){n={error:a}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}e.complete()})}function U2(t){return new En(function(e){fq(t,e).catch(function(n){return e.error(n)})})}function hq(t){return U2(rq(t))}function fq(t,e){var n,i,s,r;return x8(this,void 0,void 0,function(){var o,a;return I2(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=O8(t),l.label=1;case 1:return[4,n.next()];case 2:if(i=l.sent(),!!i.done)return[3,4];if(o=i.value,e.next(o),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),s={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),i&&!i.done&&(r=n.return)?[4,r.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}T0(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function z2(t,e){return Fd(function(n,i){var s=0;n.subscribe(C0(i,function(r){i.next(t.call(e,r,s++))}))})}function P2(t){return Fd(function(e,n){var i=null,s=!1,r;i=e.subscribe(C0(n,void 0,void 0,function(o){r=L2(t(o,P2(t)(e))),i?(i.unsubscribe(),i=null,r.subscribe(n)):s=!0})),s&&(i.unsubscribe(),i=null,r.subscribe(n))})}function dq(t){t===void 0&&(t={});var e=t.connector,n=e===void 0?function(){return new Vd}:e,i=t.resetOnError,s=i===void 0?!0:i,r=t.resetOnComplete,o=r===void 0?!0:r,a=t.resetOnRefCountZero,l=a===void 0?!0:a;return function(u){var c,h,f,d=0,g=!1,v=!1,_=function(){h==null||h.unsubscribe(),h=void 0},m=function(){_(),c=f=void 0,g=v=!1},p=function(){var y=c;m(),y==null||y.unsubscribe()};return Fd(function(y,w){d++,!v&&!g&&_();var N=f=f??n();w.add(function(){d--,d===0&&!v&&!g&&(h=dm(p,l))}),N.subscribe(w),!c&&d>0&&(c=new su({next:function(O){return N.next(O)},error:function(O){v=!0,_(),h=dm(m,s,O),N.error(O)},complete:function(){g=!0,_(),h=dm(m,o),N.complete()}}),L2(y).subscribe(c))})(u)}}function dm(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(e===!0){t();return}if(e!==!1){var s=new su({next:function(){s.unsubscribe(),t()}});return e.apply(void 0,Zo([],Jo(n))).subscribe(s)}}function pq(t,e,n){var i,s,r,o,a=!1;return t&&typeof t=="object"?(i=t.bufferSize,o=i===void 0?1/0:i,s=t.windowTime,e=s===void 0?1/0:s,r=t.refCount,a=r===void 0?!1:r,n=t.scheduler):o=t??1/0,dq({connector:function(){return new H8(o,e,n)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}function mq(t,e,n){var i=pt(t)||e||n?{next:t,error:e,complete:n}:t;return i?Fd(function(s,r){var o;(o=i.subscribe)===null||o===void 0||o.call(i);var a=!0;s.subscribe(C0(r,function(l){var u;(u=i.next)===null||u===void 0||u.call(i,l),r.next(l)},function(){var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),r.complete()},function(l){var u;a=!1,(u=i.error)===null||u===void 0||u.call(i,l),r.error(l)},function(){var l,u;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(u=i.finalize)===null||u===void 0||u.call(i)}))}):k2}function gq(t){return new En(function(e){var n=RA(t,e.next.bind(e),e.error.bind(e),e.complete.bind(e));return{unsubscribe:n}})}const yq="[DEFAULT]",B2=S.createContext(void 0),j2=S.createContext(!1),vq="4.2.3",_q=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function Eq(t){const{firebaseConfig:e,appName:n,suspense:i}=t,s=S.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const r=w4().find(o=>o.name===(n||yq));if(r){if(e&&_q(r.options,e))return r;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=S.version||"unknown";return qe("react",o),qe("reactfire",vq),nA(e,n)}},[t.firebaseApp,e,n]);return S.createElement(B2.Provider,{value:s},S.createElement(j2.Provider,Object.assign({value:i??!1},t)))}function wq(t){let e=S.useContext(j2);return t!==void 0?t:e}function F2(){const t=S.useContext(B2);if(!t)throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return t}function Tq(t){const e=K2(),n=`auth:user:${e.name}`,i=gq(e);return V2(n,i,t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Is,Bs;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Bs||(Bs={}));Object.freeze((Is={},Is[Bs.added]=iV,Is[Bs.removed]=oV,Is[Bs.changed]=sV,Is[Bs.moved]=rV,Is[Bs.value]=nV,Is));const bq=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=bq);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sq={includeMetadataChanges:!1};function Cq(t,e){return e===void 0&&(e=Sq),new En(function(n){var i=M9(t,e,{next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)});return{unsubscribe:i}})}function Aq(t,e){e===void 0&&(e={});var n=t.data();return!t.exists()||typeof n!="object"||n===null||e.idField&&(n[e.idField]=t.id),n}function Nq(t){return Cq(t,{includeMetadataChanges:!0}).pipe(z2(function(e){return e.docs}))}function Rq(t,e){return e===void 0&&(e={}),Nq(t).pipe(z2(function(n){return n.map(function(i){return Aq(i,e)})}))}class Iq extends Vd{constructor(e,n){super(),this._timeoutWindow=n,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(i=>this._resolveFirstEmission=i),this._innerObservable=e.pipe(mq({next:i=>{this._next(i)},error:i=>{this._error=i,this._resolveFirstEmission()}}),P2(()=>Q8()),pq(1)),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(e){this._hasValue=!0,this._value=e,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(e=>this._resolveFirstEmission=e)}_subscribe(e){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(e),this._innerSubscriber}get ourError(){return this._error}}const xq=3e4,uh=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=uh);function Dq(t,e){if(uh.has(e))return uh.get(e);{const n=new Iq(t,xq);return uh.set(e,n),n}}function Oq(t){return function(e,n){const i=Object.assign(Object.assign({},e),{hasEmitted:e.hasEmitted||t.hasValue,error:t.ourError,firstValuePromise:t.firstEmission});switch(t.hasValue&&(i.data=t.value),n){case"value":return i.status="success",i;case"error":return i.status="error",i;case"complete":return i.isComplete=!0,i;default:throw new Error(`invalid action "${n}"`)}}}function V2(t,e,n={}){var i;if(!t)throw new Error("cannot call useObservable without an observableId");const s=Dq(e,t),r=n.hasOwnProperty("initialData")||n.hasOwnProperty("startWithValue"),o=s.hasValue||r;if(wq(n.suspense)===!0&&!o)throw s.firstEmission;const a={status:o?"success":"loading",hasEmitted:o,isComplete:!1,data:s.hasValue?s.value:(i=n==null?void 0:n.initialData)!==null&&i!==void 0?i:n==null?void 0:n.startWithValue,error:s.ourError,firstValuePromise:s.firstEmission},[l,u]=S.useReducer(Oq(s),a);return S.useEffect(()=>{const c=s.subscribe({next:()=>{u("value")},error:h=>{throw u("error"),h},complete:()=>{u("complete")}});return()=>c.unsubscribe()},[s]),l}const yy=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=yy);function Mq(t){const e=yy.findIndex(n=>y9(n,t));return e>-1?e:yy.push(t)-1}function q2(t,e){const n=e?Fq(e):"NO_ID_FIELD",i=`firestore:collectionData:${Mq(t)}:idField=${n}`,s=Rq(t,{idField:n});return V2(i,s,e)}S.createContext(void 0);const H2=S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);const $2=S.createContext(void 0),kq=S.createContext(void 0),G2=S.createContext(void 0);S.createContext(void 0);S.createContext(void 0);function qd(t){return function(e){var n,i;if(!e.sdk)throw new Error("no sdk provided");const s=F2().name;if(((i=(n=e==null?void 0:e.sdk)===null||n===void 0?void 0:n.app)===null||i===void 0?void 0:i.name)!==s)throw new Error("sdk was initialized with a different firebase app");return S.createElement(t.Provider,Object.assign({value:e.sdk},e))}}function N0(t){const e=S.useContext(t);if(!e)throw new Error("SDK not found. useSdk must be called from within a provider");return e}const Lq=qd(H2),Uq=qd($2),zq=qd(kq),Pq=qd(G2),K2=()=>N0(H2),R0=()=>N0($2),Bq=()=>N0(G2);function jq(t,e){if(e==="idField"||e==="initialData"||e==="suspense")return t?t[e]:void 0;throw new Error(`Field "${e}" is not a valid key in ReactFireOptions`)}function Fq(t){return jq(t,"idField")}const Vq="/assets/friendly-eats-8cbac8ac.svg",qq="/assets/menu-4c0b4dc8.svg",Hq=()=>{var u,c,h,f,d,g,v;const t=K2(),e=Tq(),n=_=>{_.signOut().then(()=>console.log("signed out"))},i=async _=>{const m=new ti;await PL(_,m)},s=R0(),r=_=>{const m=Ps(s,"restaurants");return O9(m,_)},o=HI(),a=_=>_[Math.floor(Math.random()*_.length)],l=()=>{for(let _=0;_<20;_++){const m=a(Oc.words)+" "+a(Oc.words),p=a(Oc.categories),y=a(Oc.cities),w=Math.floor(Math.random()*4)+1,O="https://storage.googleapis.com/firestorequickstarts.appspot.com/food_"+(Math.floor(Math.random()*22)+1)+".png";if(!r({name:m,category:p,price:w,city:y,numRatings:0,avgRating:0,photo:O}))return alert("addRestaurant() is not implemented yet!"),Promise.reject()}};return S.useEffect(()=>{var _;e&&e.data&&console.log(`${(_=e.data)==null?void 0:_.displayName}`)},[e]),E.jsxs("header",{children:[E.jsx("nav",{className:"bg-navy-400 px-2 lg:px-4 py-2.5 h-18",children:E.jsxs("div",{className:"flex flex-wrap justify-between items-center max-w-screen",children:[E.jsxs("a",{href:"#",className:"flex items-center",onClick:()=>o("/"),children:[E.jsx("img",{className:"mr-3 h-10 sm:h-8",src:Vq,alt:"FriendlyEats"}),E.jsx("span",{className:"mr-3 self-center text-xl whitespace-nowrap font-light text-white",children:"Friendly Eats"})]}),E.jsx("div",{className:"flex flex-wrap items-end",children:e.data?E.jsxs("div",{className:"flex flex-wrap justify-between text-white",children:[E.jsx("img",{className:"w-10 h-10 rounded-full",src:`${(u=e==null?void 0:e.data)==null?void 0:u.photoURL}`,alt:`${(c=e==null?void 0:e.data)==null?void 0:c.displayName}`})," ",E.jsx("span",{className:"text-white text-xl whitespace-nowrap font-light px-4 lg:px-5 py-2 lg:py-2.5",children:(h=e==null?void 0:e.data)==null?void 0:h.displayName})," ",E.jsxs("div",{className:"dropdown inline-block relativ ",children:[E.jsx("button",{className:" text-gray-700 py-2 px-4 rounded inline-flex items-center font-semibold",children:E.jsx("img",{className:"w-8 h-8 rounded-full",src:qq})}),E.jsxs("ul",{className:"dropdown-menu absolute hidden text-gray-700 pt-3 w-48 right-2",children:[E.jsxs("li",{className:"bg-white p-4 flex-row",children:[E.jsx("img",{className:"w-10 h-10 rounded-full",src:`${(f=e==null?void 0:e.data)==null?void 0:f.photoURL}`,alt:`${(d=e==null?void 0:e.data)==null?void 0:d.displayName}`})," ",E.jsx("span",{className:"text-navy-200 text-md whitespace-nowrap px-4 lg:px-5 py-2 lg:py-2.5 mr-6",children:(g=e==null?void 0:e.data)==null?void 0:g.displayName})," "]}),E.jsx("li",{className:"",children:E.jsx("a",{className:"rounded-b bg-white hover:bg-navy-20 py-3 p-4 block whitespace-no-wrap text-amber-900 font-semibold",href:"#",onClick:()=>{l(),o("/")},children:"Add Random Items"})}),E.jsx("li",{className:"",children:E.jsx("a",{className:"bg-white hover:bg-navy-20 py-3 px-4 block whitespace-no-wrap text-navy-500 font-semibold",href:"#",onClick:()=>n(t),children:"Logout"})})]})]})]}):E.jsx("a",{href:"#",className:"text-white text-xl whitespace-nowrap font-light px-4 lg:px-5 py-2 lg:py-2.5 mr-6",onClick:()=>i(t),children:"Log in"})})]})}),E.jsx(eB,{context:(v=e==null?void 0:e.data)==null?void 0:v.uid})]})},Oc={words:["Bar","Fire","Grill","Drive Thru","Place","Best","Spot","Prime","Eatin'"],cities:["Albuquerque","Arlington","Atlanta","Austin","Baltimore","Boston","Charlotte","Chicago","Cleveland","Colorado Springs","Columbus","Dallas","Denver","Detroit","El Paso","Fort Worth","Fresno","Houston","Indianapolis","Jacksonville","Kansas City","Las Vegas","Long Island","Los Angeles","Louisville","Memphis","Mesa","Miami","Milwaukee","Nashville","New York","Oakland","Oklahoma","Omaha","Philadelphia","Phoenix","Portland","Raleigh","Sacramento","San Antonio","San Diego","San Francisco","San Jose","Tucson","Tulsa","Virginia Beach","Washington"],categories:["Brunch","Burgers","Coffee","Deli","Dim Sum","Indian","Italian","Mediterranean","Mexican","Pizza","Ramen","Sushi"],ratings:[{rating:1,text:"Would never eat here again!"},{rating:2,text:"Not my cup of tea."},{rating:3,text:"Exactly okay :/"},{rating:4,text:"Actually pretty good, would recommend!"},{rating:5,text:"This is my favorite place. Literally."}]},$q="/assets/filter-65b6bf58.svg",Gq="/assets/arrowDown-89d999ff.svg",Kq="/assets/food-4a700a3f.svg",Yq="/assets/location-4bb1d546.svg",Qq="/assets/price-798da658.svg",Xq="/assets/sortBy-272e0a80.svg",Wq=({filters:t,setFilters:e})=>{const[n,i]=S.useState(!1),[s,r]=S.useState(t),o=(a,l)=>{r({...s,[l]:a})};return E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"flex flex-wrap bg-navy-10 px-3 py-2 border-b border-navy-600 mr-1 mb-1 ease-linear transition-all duration-150 w-4/5 shadow-sm justify-between cursor-pointer",onClick:()=>i(!0),children:[E.jsxs("div",{className:"flex flex-wrap",children:[E.jsx("img",{className:"h-12",src:$q,alt:"Filter restaurants"}),E.jsxs("div",{className:"flex-row ml-5",children:[E.jsx("p",{className:"font-light text-xl",children:"Restaurants"}),E.jsxs("p",{className:"text-navy-500 font-semibold text-sm",children:["Sorted by ",t.sort]})]})]}),E.jsx("div",{className:"flex flex-wrap items-center",children:E.jsx("img",{className:"h-8",src:Gq,alt:"Filter restaurants"})})]}),n?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:E.jsx("div",{className:"relative my-6 mx-auto max-w-3xl w-5/6",children:E.jsxs("div",{className:"border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[E.jsxs("div",{className:"flex items-start justify-between p-5 border-slate-200 rounded-t",children:[E.jsx("h3",{className:"text-lg font-semibold",children:"Filters"}),E.jsx("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>i(!1),children:E.jsx("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"×"})})]}),E.jsxs("div",{className:"relative p-6 flex-auto ",children:[E.jsx(Mc,{name:"category",icon:Kq,editFilter:s,onChange:o}),E.jsx(Mc,{name:"city",icon:Yq,editFilter:s,onChange:o}),E.jsx(Mc,{name:"price",icon:Qq,editFilter:s,onChange:o}),E.jsx(Mc,{name:"sort",icon:Xq,editFilter:s,onChange:o})]}),E.jsxs("div",{className:"flex items-center justify-end p-6",children:[E.jsx("button",{className:"text-navy-50 background-transparent uppercase px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>i(!1),children:"Cancel"}),E.jsx("button",{className:"bg-amber-900 text-white active:bg-amber-900 font-light uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>{e(s),i(!1)},children:"Apply"})]})]})})}),E.jsx("div",{className:"opacity-75 fixed inset-0 z-40 bg-navy-600"})]}):null]})},Mc=({name:t,icon:e,onChange:n,editFilter:i})=>E.jsxs("div",{className:"my-4 text-slate-500 text-lg leading-relaxed flex flex-row",children:[E.jsx("img",{className:"h-16",src:e,alt:`Restaurant ${t}`}),E.jsxs("div",{className:"w-full mx-2",children:[E.jsx("label",{htmlFor:t,className:"block mb-2 text-xs font-light text-gray-600",children:t}),E.jsx("select",{id:t,className:"text-gray-900 text-sm border-b-2 block w-full px-2.5 py-2",defaultValue:i[t],onChange:s=>n(s.target.value,t),children:Jq[t].map(s=>E.jsx("option",{value:s,children:s==""?"All "+s:s},s))})]})]}),Jq={category:["","Brunch","Burgers","Coffee","Deli","Dim Sum","Indian","Italian","Mediterranean","Mexican","Pizza","Ramen","Sushi"],city:["","Albuquerque","Arlington","Atlanta","Austin","Baltimore","Boston","Charlotte","Chicago","Cleveland","Colorado Springs","Columbus","Dallas","Denver","Detroit","El Paso","Fort Worth","Fresno","Houston","Indianapolis","Jacksonville","Kansas City","Las Vegas","Long Island","Los Angeles","Louisville","Memphis","Mesa","Miami","Milwaukee","Nashville","New York","Oakland","Oklahoma","Omaha","Philadelphia","Phoenix","Portland","Raleigh","Sacramento","San Antonio","San Diego","San Francisco","San Jose","Tucson","Tulsa","Virginia Beach","Washington"],price:["","$","$$","$$$","$$$$","$$$$$"],sort:["Rating","Review"]},Zq=({restaurants:t,displayCol:e})=>{const n=HI();return E.jsx(E.Fragment,{children:E.jsx("div",{className:`h-full w-full grid ${e?"grid-cols-3 gap-3":"grid-cols-1"} justify-items-center`,children:t==null?void 0:t.map(i=>e?E.jsx(eH,{restaurant:i,navigate:n}):E.jsx(tH,{restaurant:i,navigate:n}))})})},eH=({restaurant:t,navigate:e})=>E.jsx(E.Fragment,{children:E.jsxs("div",{className:"bg-white w-4/5 hover:cursor-pointer h-[450px] mt-10 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/3 overflow-auto",onClick:()=>e(`/restaurant/${t.id}`),children:[E.jsx("img",{className:"w-full h-3/5",src:t.photo}),E.jsx("p",{className:"text-navy-600 font-light text-3xl pt-10 pb-4 px-8",children:t.name}),E.jsxs("ul",{className:"flex justify-start pl-8 py-2",children:[Q2(t.avgRating),E.jsx("p",{className:"text-gray-400 font-light pt-2 px-2",children:`(${t.numRatings})`})]}),E.jsxs("div",{className:"flex w-full place-content-between",children:[E.jsxs("p",{className:"text-navy-900 font-semibold px-8",children:[t.category," · ",t.city]}),E.jsx("p",{className:"font-semibold px-6",children:Y2(t.price)})]})]},t.name+t.city+t.type+"-col")}),tH=({restaurant:t,navigate:e})=>E.jsx(E.Fragment,{children:E.jsxs("div",{className:"bg-white w-4/5 hover:cursor-pointer h-32 mt-4 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 flex overflow-auto",onClick:()=>e(`/restaurant/${t.id}`),children:[E.jsx("img",{className:"w-1/6 h-full",src:t.photo}),E.jsxs("div",{className:"p-3 w-full",children:[E.jsx("p",{className:"text-navy-600 font-light text-3xl pl-6",children:t.name}),E.jsxs("ul",{className:"flex justify-start pl-6 py-2",children:[Q2(t.avgRating),E.jsx("p",{className:"text-gray-400 font-light pt-2 px-2",children:`(${t.numRatings})`})]}),E.jsxs("div",{className:"flex w-full place-content-between",children:[E.jsxs("p",{className:"text-navy-900 font-semibold px-6",children:[t.category," · ",t.city]}),E.jsx("p",{className:"font-semibold px-6",children:Y2(t.price)})]})]})]},t.name+t.city+t.type+"-row")}),Y2=t=>{let e="";for(let n=0;n<t;n++)e+="$";return e},Q2=t=>{const e=[];for(let n=0;n<5;n++)n<Math.floor(t)?e.push(E.jsx("li",{children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-8 w-8 text-amber-400",children:E.jsx("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",clipRule:"evenodd"})})})):e.push(E.jsx("li",{children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-8 w-8 text-amber-400",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})})}));return e},nH=()=>{const[t,e]=S.useState({category:"",city:"",price:"",sort:"Rating"}),n=R0(),i=()=>{let l=zr(Ps(n,"restaurants"));return t.category!==""&&(l=zr(l,Kp("category","==",t.category))),t.city!==""&&(l=zr(l,Kp("city","==",t.city))),t.price!==""&&(l=zr(l,Kp("price","==",t.price.length))),t.sort==="Rating"?l=zr(l,C1("avgRating","desc")):t.sort==="Reviews"&&(l=zr(l,C1("numRatings","desc"))),l},{data:s}=q2(i(),{idField:"id"});S.useEffect(()=>{console.log("fetching filters...")},[t]);const r=(l,u)=>{e({...t,[l]:u})},[o,a]=S.useState(!0);return E.jsx("div",{className:"bg-navy-50 min-h-screen h-full ",children:E.jsxs("div",{className:"w-3/4 bg-navy-20 min-h-screen h-full mx-auto",children:[E.jsxs("div",{className:"flex items-center justify-center p-4",children:[E.jsx(Wq,{filters:t,setFilters:e}),E.jsxs("label",{className:"relative inline-flex items-center cursor-pointer mx-6",children:[E.jsx("input",{type:"checkbox",value:"",className:"sr-only peer",onChange:()=>a(!o)}),E.jsx("div",{className:"w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"})]})]}),E.jsx("div",{className:"flex items-start justify-start px-4 ml-32",children:Object.entries(t).map(([l,u])=>l=="sort"||u==""?null:E.jsx(iH,{type:l,value:u,updateField:r},u))}),E.jsx(Zq,{restaurants:s,displayCol:o})]})})},iH=({type:t,value:e,updateField:n})=>E.jsxs("span",{id:`${t}`,className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-white bg-navy-300 rounded-full",children:[e,E.jsxs("button",{type:"button",className:"inline-flex items-center p-0.5 ml-2 text-sm text-navy-20 bg-transparent rounded-full hover:bg-navy-300","data-dismiss-target":`#${t}`,"aria-label":"Remove",onClick:()=>n(t,""),children:[E.jsx("svg",{"aria-hidden":"true",className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:E.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),E.jsx("span",{className:"sr-only",children:"Remove badge"})]})]}),sH="/assets/review-ca9a658d.svg",rH=({addReview:t})=>{const[e,n]=S.useState(!1),[i,s]=S.useState({rating:0,review:""}),r=(o,a)=>{s({...i,[a]:o})};return E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"flex flex-wrap cursor-pointer mx-auto",onClick:()=>n(!0),children:E.jsx("img",{className:"h-16 bg-amber-400 rounded-xl right-40 shadow-lg",src:sH,alt:"Add review"})}),e?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:E.jsx("div",{className:"relative my-6 mx-auto max-w-3xl w-5/6",children:E.jsxs("div",{className:"border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[E.jsxs("div",{className:"flex items-start justify-between p-5 border-slate-200 rounded-t",children:[E.jsx("h3",{className:"text-lg font-semibold",children:"Add a review"}),E.jsx("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:()=>n(!1),children:E.jsx("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"×"})})]}),E.jsx("ul",{className:"flex justify-start mx-auto py-10",children:[...Array(5)].map((o,a)=>(a+=1,E.jsx("button",{type:"button",onClick:()=>r(a,"rating"),children:a<=i.rating?E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-8 w-8 text-amber-400",children:E.jsx("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",clipRule:"evenodd"})}):E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-8 w-8 text-amber-400",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})})},a)))}),E.jsx("textarea",{id:"message",onChange:o=>r(o.target.value,"review"),className:"block p-2.5 w-3/4 text-sm text-gray-900 dark:placeholder-gray-400 border-b-2 border-amber-900 focus:ring-0 mx-auto",placeholder:"Write your thoughts here..."}),E.jsxs("div",{className:"flex items-center justify-end p-6",children:[E.jsx("button",{className:"text-navy-50 background-transparent uppercase px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>n(!1),children:"Cancel"}),E.jsx("button",{className:"bg-amber-900 text-white active:bg-amber-900 font-light uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>{t(i),n(!1)},children:"Apply"})]})]})})}),E.jsx("div",{className:"opacity-75 fixed inset-0 z-40 bg-navy-600"})]}):null]})},oH="/assets/add-d8cdfeb7.svg",aH=()=>{const t=zP(),{id:e}=BP(),[n,i]=S.useState(),s=R0(),r=()=>{x9(Ha(Ps(s,"restaurants"),e)).then(c=>{c.exists()&&i(c.data())})},{data:o}=q2(Ps(s,`restaurants/${e}/ratings`)),a=Bq(),l=async c=>{const h=c.files?c.files[0]:null;if(h)try{const f=`images/${e}/${h.name}`,d=nP(a,f);await eP(d,h);const g=await tP(d),v=Ha(Ps(s,"restaurants"),e);console.log(g,"2"),v&&await D9(v,{photo:g})}catch(f){console.error("There was an error uploading a file to Cloud Storage:",f)}},u=c=>{const h=Ha(Ps(s,"restaurants"),e),f=Ha(Ps(s,`restaurants/${e}/ratings`));return U9(s,d=>d.get(h).then(g=>{const v=g.data(),_=((v==null?void 0:v.numRatings)*(v==null?void 0:v.avgRating)+c.rating)/((v==null?void 0:v.numRatings)+1);return d.update(h,{...v,numRatings:v!=null&&v.numRatings?(v==null?void 0:v.numRatings)+1:1,avgRating:_}),c.userId=t,d.set(f,c)}))};return S.useEffect(()=>{r()},[t]),E.jsxs("div",{className:"bg-navy-20 min-h-screen",children:[E.jsxs("div",{className:"relative w-full",children:[E.jsx("img",{className:"w-full h-[400px]",src:n==null?void 0:n.photo}),E.jsxs("div",{className:"absolute bottom-0 left-0 right-0 px-4 py-2 h-full bg-gradient-to-tr from-navy-400",children:[E.jsxs("div",{className:"absolute bottom-0 h-1/2",children:[E.jsx("p",{className:"text-white font-light text-3xl pt-10 px-8",children:n==null?void 0:n.name}),E.jsxs("ul",{className:"flex justify-start pl-8 py-2",children:[X2(n==null?void 0:n.avgRating),E.jsx("p",{className:"text-white font-light pt-2 px-2",children:`(${n==null?void 0:n.numRatings})`})]}),E.jsxs("p",{className:"text-white px-8",children:[n==null?void 0:n.category," · ",n==null?void 0:n.city]}),E.jsx("p",{className:"text-white px-8",children:uH(n==null?void 0:n.price)})]}),E.jsxs("div",{className:"flex absolute bottom-[-30px] flex-row right-0 justify-end w-1/3",children:[E.jsx(rH,{addReview:u}),E.jsxs("label",{onChange:c=>l(c.target),htmlFor:"upload-image",className:" bg-amber-800 w-16 h-16 rounded-full cursor-pointer shadow-lg mx-auto",children:[E.jsx("input",{name:"",type:"file",id:"upload-image",className:"file-input hidden w-full h-full"}),E.jsx("img",{className:"w-16 h-16",src:oH,alt:"Upload image"})]})]})]})]}),E.jsx("div",{className:"w-3/4 h-full mx-auto",children:o==null?void 0:o.map(c=>E.jsx(lH,{rating:c}))})]})},lH=({rating:t})=>E.jsx(E.Fragment,{children:E.jsxs("div",{className:"border-b border-gray-400 py-10 justify-self-end",children:[E.jsx("ul",{className:"flex justify-start pl-8 py-2",children:X2(t.rating)}),E.jsx("p",{className:"pl-8",children:t.review})]})}),uH=t=>{let e="";for(let n=0;n<t;n++)e+="$";return e},X2=t=>{const e=[];return[...Array(5)].map((n,i)=>{i<Math.floor(t)?e.push(E.jsx("li",{children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-8 w-8 text-amber-400",children:E.jsx("path",{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",clipRule:"evenodd"})})})):e.push(E.jsx("li",{children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-8 w-8 text-amber-400",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"})})}))}),e};function cH(){const t=F2(),e=_9(t),n=iP(t),i=IU(t),s=H9(t);return E.jsx(Uq,{sdk:e,children:E.jsx(Pq,{sdk:n,children:E.jsx(Lq,{sdk:i,children:E.jsx(zq,{sdk:s,children:E.jsx(nB,{children:E.jsxs(oh,{path:"/",element:E.jsx(Hq,{}),children:[E.jsx(oh,{index:!0,element:E.jsx(nH,{})}),E.jsx(oh,{path:"/restaurant/:id",element:E.jsx(aH,{})})]})})})})})})}const hH={apiKey:"API_KEY",authDomain:"PROJECT_ID.firebaseapp.com",databaseURL:"https://PROJECT_ID.firebaseio.com",projectId:"PROJECT_ID",storageBucket:"PROJECT_ID.appspot.com",messagingSenderId:"SENDER_ID",appId:"APP_ID",measurementId:"G-MEASUREMENT_ID"},fH=WM.createRoot(document.getElementById("root"));fH.render(E.jsx(KT.StrictMode,{children:E.jsx(Eq,{firebaseConfig:hH,children:E.jsx(rB,{children:E.jsx(cH,{})})})}));
