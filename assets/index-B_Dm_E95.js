(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function K0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var gf={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function Q1(){if(vv)return ul;vv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return ul.Fragment=e,ul.jsx=i,ul.jsxs=i,ul}var _v;function Y1(){return _v||(_v=1,gf.exports=Q1()),gf.exports}var m=Y1(),yf={exports:{}},ze={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function $1(){if(bv)return ze;bv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),z=Symbol.iterator;function G(j){return j===null||typeof j!="object"?null:(j=z&&j[z]||j["@@iterator"],typeof j=="function"?j:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,$={};function ae(j,M,Q){this.props=j,this.context=M,this.refs=$,this.updater=Q||D}ae.prototype.isReactComponent={},ae.prototype.setState=function(j,M){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,M,"setState")},ae.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function W(){}W.prototype=ae.prototype;function me(j,M,Q){this.props=j,this.context=M,this.refs=$,this.updater=Q||D}var ge=me.prototype=new W;ge.constructor=me,J(ge,ae.prototype),ge.isPureReactComponent=!0;var Ce=Array.isArray;function xe(){}var w={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function C(j,M,Q){var fe=Q.ref;return{$$typeof:r,type:j,key:M,ref:fe!==void 0?fe:null,props:Q}}function k(j,M){return C(j.type,M,j.props)}function O(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function S(j){var M={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(Q){return M[Q]})}var R=/\/+/g;function be(j,M){return typeof j=="object"&&j!==null&&j.key!=null?S(""+j.key):M.toString(36)}function he(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(xe,xe):(j.status="pending",j.then(function(M){j.status==="pending"&&(j.status="fulfilled",j.value=M)},function(M){j.status==="pending"&&(j.status="rejected",j.reason=M)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function L(j,M,Q,fe,K){var Z=typeof j;(Z==="undefined"||Z==="boolean")&&(j=null);var de=!1;if(j===null)de=!0;else switch(Z){case"bigint":case"string":case"number":de=!0;break;case"object":switch(j.$$typeof){case r:case e:de=!0;break;case T:return de=j._init,L(de(j._payload),M,Q,fe,K)}}if(de)return K=K(j),de=fe===""?"."+be(j,0):fe,Ce(K)?(Q="",de!=null&&(Q=de.replace(R,"$&/")+"/"),L(K,M,Q,"",function(Ye){return Ye})):K!=null&&(O(K)&&(K=k(K,Q+(K.key==null||j&&j.key===K.key?"":(""+K.key).replace(R,"$&/")+"/")+de)),M.push(K)),1;de=0;var ve=fe===""?".":fe+":";if(Ce(j))for(var Te=0;Te<j.length;Te++)fe=j[Te],Z=ve+be(fe,Te),de+=L(fe,M,Q,Z,K);else if(Te=G(j),typeof Te=="function")for(j=Te.call(j),Te=0;!(fe=j.next()).done;)fe=fe.value,Z=ve+be(fe,Te++),de+=L(fe,M,Q,Z,K);else if(Z==="object"){if(typeof j.then=="function")return L(he(j),M,Q,fe,K);throw M=String(j),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return de}function B(j,M,Q){if(j==null)return j;var fe=[],K=0;return L(j,fe,"","",function(Z){return M.call(Q,Z,K++)}),fe}function se(j){if(j._status===-1){var M=j._result;M=M(),M.then(function(Q){(j._status===0||j._status===-1)&&(j._status=1,j._result=Q)},function(Q){(j._status===0||j._status===-1)&&(j._status=2,j._result=Q)}),j._status===-1&&(j._status=0,j._result=M)}if(j._status===1)return j._result.default;throw j._result}var Re=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},Ne={map:B,forEach:function(j,M,Q){B(j,function(){M.apply(this,arguments)},Q)},count:function(j){var M=0;return B(j,function(){M++}),M},toArray:function(j){return B(j,function(M){return M})||[]},only:function(j){if(!O(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ze.Activity=N,ze.Children=Ne,ze.Component=ae,ze.Fragment=i,ze.Profiler=l,ze.PureComponent=me,ze.StrictMode=s,ze.Suspense=y,ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,ze.__COMPILER_RUNTIME={__proto__:null,c:function(j){return w.H.useMemoCache(j)}},ze.cache=function(j){return function(){return j.apply(null,arguments)}},ze.cacheSignal=function(){return null},ze.cloneElement=function(j,M,Q){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var fe=J({},j.props),K=j.key;if(M!=null)for(Z in M.key!==void 0&&(K=""+M.key),M)!A.call(M,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&M.ref===void 0||(fe[Z]=M[Z]);var Z=arguments.length-2;if(Z===1)fe.children=Q;else if(1<Z){for(var de=Array(Z),ve=0;ve<Z;ve++)de[ve]=arguments[ve+2];fe.children=de}return C(j.type,K,fe)},ze.createContext=function(j){return j={$$typeof:h,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:c,_context:j},j},ze.createElement=function(j,M,Q){var fe,K={},Z=null;if(M!=null)for(fe in M.key!==void 0&&(Z=""+M.key),M)A.call(M,fe)&&fe!=="key"&&fe!=="__self"&&fe!=="__source"&&(K[fe]=M[fe]);var de=arguments.length-2;if(de===1)K.children=Q;else if(1<de){for(var ve=Array(de),Te=0;Te<de;Te++)ve[Te]=arguments[Te+2];K.children=ve}if(j&&j.defaultProps)for(fe in de=j.defaultProps,de)K[fe]===void 0&&(K[fe]=de[fe]);return C(j,Z,K)},ze.createRef=function(){return{current:null}},ze.forwardRef=function(j){return{$$typeof:p,render:j}},ze.isValidElement=O,ze.lazy=function(j){return{$$typeof:T,_payload:{_status:-1,_result:j},_init:se}},ze.memo=function(j,M){return{$$typeof:_,type:j,compare:M===void 0?null:M}},ze.startTransition=function(j){var M=w.T,Q={};w.T=Q;try{var fe=j(),K=w.S;K!==null&&K(Q,fe),typeof fe=="object"&&fe!==null&&typeof fe.then=="function"&&fe.then(xe,Re)}catch(Z){Re(Z)}finally{M!==null&&Q.types!==null&&(M.types=Q.types),w.T=M}},ze.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},ze.use=function(j){return w.H.use(j)},ze.useActionState=function(j,M,Q){return w.H.useActionState(j,M,Q)},ze.useCallback=function(j,M){return w.H.useCallback(j,M)},ze.useContext=function(j){return w.H.useContext(j)},ze.useDebugValue=function(){},ze.useDeferredValue=function(j,M){return w.H.useDeferredValue(j,M)},ze.useEffect=function(j,M){return w.H.useEffect(j,M)},ze.useEffectEvent=function(j){return w.H.useEffectEvent(j)},ze.useId=function(){return w.H.useId()},ze.useImperativeHandle=function(j,M,Q){return w.H.useImperativeHandle(j,M,Q)},ze.useInsertionEffect=function(j,M){return w.H.useInsertionEffect(j,M)},ze.useLayoutEffect=function(j,M){return w.H.useLayoutEffect(j,M)},ze.useMemo=function(j,M){return w.H.useMemo(j,M)},ze.useOptimistic=function(j,M){return w.H.useOptimistic(j,M)},ze.useReducer=function(j,M,Q){return w.H.useReducer(j,M,Q)},ze.useRef=function(j){return w.H.useRef(j)},ze.useState=function(j){return w.H.useState(j)},ze.useSyncExternalStore=function(j,M,Q){return w.H.useSyncExternalStore(j,M,Q)},ze.useTransition=function(){return w.H.useTransition()},ze.version="19.2.8",ze}var xv;function sm(){return xv||(xv=1,yf.exports=$1()),yf.exports}var le=sm();const X1=K0(le);var vf={exports:{}},dl={},_f={exports:{}},bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function W1(){return Ev||(Ev=1,(function(r){function e(L,B){var se=L.length;L.push(B);e:for(;0<se;){var Re=se-1>>>1,Ne=L[Re];if(0<l(Ne,B))L[Re]=B,L[se]=Ne,se=Re;else break e}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var B=L[0],se=L.pop();if(se!==B){L[0]=se;e:for(var Re=0,Ne=L.length,j=Ne>>>1;Re<j;){var M=2*(Re+1)-1,Q=L[M],fe=M+1,K=L[fe];if(0>l(Q,se))fe<Ne&&0>l(K,Q)?(L[Re]=K,L[fe]=se,Re=fe):(L[Re]=Q,L[M]=se,Re=M);else if(fe<Ne&&0>l(K,se))L[Re]=K,L[fe]=se,Re=fe;else break e}}return B}function l(L,B){var se=L.sortIndex-B.sortIndex;return se!==0?se:L.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var y=[],_=[],T=1,N=null,z=3,G=!1,D=!1,J=!1,$=!1,ae=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;function ge(L){for(var B=i(_);B!==null;){if(B.callback===null)s(_);else if(B.startTime<=L)s(_),B.sortIndex=B.expirationTime,e(y,B);else break;B=i(_)}}function Ce(L){if(J=!1,ge(L),!D)if(i(y)!==null)D=!0,xe||(xe=!0,S());else{var B=i(_);B!==null&&he(Ce,B.startTime-L)}}var xe=!1,w=-1,A=5,C=-1;function k(){return $?!0:!(r.unstable_now()-C<A)}function O(){if($=!1,xe){var L=r.unstable_now();C=L;var B=!0;try{e:{D=!1,J&&(J=!1,W(w),w=-1),G=!0;var se=z;try{t:{for(ge(L),N=i(y);N!==null&&!(N.expirationTime>L&&k());){var Re=N.callback;if(typeof Re=="function"){N.callback=null,z=N.priorityLevel;var Ne=Re(N.expirationTime<=L);if(L=r.unstable_now(),typeof Ne=="function"){N.callback=Ne,ge(L),B=!0;break t}N===i(y)&&s(y),ge(L)}else s(y);N=i(y)}if(N!==null)B=!0;else{var j=i(_);j!==null&&he(Ce,j.startTime-L),B=!1}}break e}finally{N=null,z=se,G=!1}B=void 0}}finally{B?S():xe=!1}}}var S;if(typeof me=="function")S=function(){me(O)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,be=R.port2;R.port1.onmessage=O,S=function(){be.postMessage(null)}}else S=function(){ae(O,0)};function he(L,B){w=ae(function(){L(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return z},r.unstable_next=function(L){switch(z){case 1:case 2:case 3:var B=3;break;default:B=z}var se=z;z=B;try{return L()}finally{z=se}},r.unstable_requestPaint=function(){$=!0},r.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var se=z;z=L;try{return B()}finally{z=se}},r.unstable_scheduleCallback=function(L,B,se){var Re=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Re+se:Re):se=Re,L){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=se+Ne,L={id:T++,callback:B,priorityLevel:L,startTime:se,expirationTime:Ne,sortIndex:-1},se>Re?(L.sortIndex=se,e(_,L),i(y)===null&&L===i(_)&&(J?(W(w),w=-1):J=!0,he(Ce,se-Re))):(L.sortIndex=Ne,e(y,L),D||G||(D=!0,xe||(xe=!0,S()))),L},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(L){var B=z;return function(){var se=z;z=B;try{return L.apply(this,arguments)}finally{z=se}}}})(bf)),bf}var Tv;function J1(){return Tv||(Tv=1,_f.exports=W1()),_f.exports}var xf={exports:{}},mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function Z1(){if(Sv)return mn;Sv=1;var r=sm();function e(y){var _="https://react.dev/errors/"+y;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)_+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(y,_,T){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:N==null?null:""+N,children:y,containerInfo:_,implementation:T}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,_){if(y==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,mn.createPortal=function(y,_){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return c(y,_,null,T)},mn.flushSync=function(y){var _=h.T,T=s.p;try{if(h.T=null,s.p=2,y)return y()}finally{h.T=_,s.p=T,s.d.f()}},mn.preconnect=function(y,_){typeof y=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(y,_))},mn.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},mn.preinit=function(y,_){if(typeof y=="string"&&_&&typeof _.as=="string"){var T=_.as,N=p(T,_.crossOrigin),z=typeof _.integrity=="string"?_.integrity:void 0,G=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;T==="style"?s.d.S(y,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:N,integrity:z,fetchPriority:G}):T==="script"&&s.d.X(y,{crossOrigin:N,integrity:z,fetchPriority:G,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},mn.preinitModule=function(y,_){if(typeof y=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var T=p(_.as,_.crossOrigin);s.d.M(y,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&s.d.M(y)},mn.preload=function(y,_){if(typeof y=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var T=_.as,N=p(T,_.crossOrigin);s.d.L(y,T,{crossOrigin:N,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},mn.preloadModule=function(y,_){if(typeof y=="string")if(_){var T=p(_.as,_.crossOrigin);s.d.m(y,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else s.d.m(y)},mn.requestFormReset=function(y){s.d.r(y)},mn.unstable_batchedUpdates=function(y,_){return y(_)},mn.useFormState=function(y,_,T){return h.H.useFormState(y,_,T)},mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},mn.version="19.2.8",mn}var wv;function eE(){if(wv)return xf.exports;wv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xf.exports=Z1(),xf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function tE(){if(Av)return dl;Av=1;var r=J1(),e=sm(),i=eE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function y(t){if(c(t)!==t)throw Error(s(188))}function _(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(o=d.return,o!==null){a=o;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return y(d),t;if(f===o)return y(d),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=d,o=f;else{for(var v=!1,x=d.child;x;){if(x===a){v=!0,a=d,o=f;break}if(x===o){v=!0,o=d,a=f;break}x=x.sibling}if(!v){for(x=f.child;x;){if(x===a){v=!0,a=f,o=d;break}if(x===o){v=!0,o=f,a=d;break}x=x.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function T(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=T(t),n!==null)return n;t=t.sibling}return null}var N=Object.assign,z=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),me=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function S(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var R=Symbol.for("react.client.reference");function be(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===R?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case J:return"Fragment";case ae:return"Profiler";case $:return"StrictMode";case Ce:return"Suspense";case xe:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case me:return t.displayName||"Context";case W:return(t._context.displayName||"Context")+".Consumer";case ge:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case w:return n=t.displayName||null,n!==null?n:be(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return be(t(n))}catch{}}return null}var he=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},Re=[],Ne=-1;function j(t){return{current:t}}function M(t){0>Ne||(t.current=Re[Ne],Re[Ne]=null,Ne--)}function Q(t,n){Ne++,Re[Ne]=t.current,t.current=n}var fe=j(null),K=j(null),Z=j(null),de=j(null);function ve(t,n){switch(Q(Z,n),Q(K,t),Q(fe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?By(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=By(n),t=Hy(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}M(fe),Q(fe,t)}function Te(){M(fe),M(K),M(Z)}function Ye(t){t.memoizedState!==null&&Q(de,t);var n=fe.current,a=Hy(n,t.type);n!==a&&(Q(K,t),Q(fe,a))}function Fe(t){K.current===t&&(M(fe),M(K)),de.current===t&&(M(de),sl._currentValue=se)}var Rt,yt;function tt(t){if(Rt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Rt=n&&n[1]||"",yt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+t+yt}var It=!1;function bn(t,n){if(!t||It)return"";It=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var re=function(){throw Error()};if(Object.defineProperty(re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(re,[])}catch(Y){var q=Y}Reflect.construct(t,[],re)}else{try{re.call()}catch(Y){q=Y}t.call(re.prototype)}}else{try{throw Error()}catch(Y){q=Y}(re=t())&&typeof re.catch=="function"&&re.catch(function(){})}}catch(Y){if(Y&&q&&typeof Y.stack=="string")return[Y.stack,q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],x=f[1];if(v&&x){var I=v.split(`
`),F=x.split(`
`);for(d=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;d<F.length&&!F[d].includes("DetermineComponentFrameRoot");)d++;if(o===I.length||d===F.length)for(o=I.length-1,d=F.length-1;1<=o&&0<=d&&I[o]!==F[d];)d--;for(;1<=o&&0<=d;o--,d--)if(I[o]!==F[d]){if(o!==1||d!==1)do if(o--,d--,0>d||I[o]!==F[d]){var te=`
`+I[o].replace(" at new "," at ");return t.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",t.displayName)),te}while(1<=o&&0<=d);break}}}finally{It=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?tt(a):""}function ne(t,n){switch(t.tag){case 26:case 27:case 5:return tt(t.type);case 16:return tt("Lazy");case 13:return t.child!==n&&n!==null?tt("Suspense Fallback"):tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return bn(t.type,!1);case 11:return bn(t.type.render,!1);case 1:return bn(t.type,!0);case 31:return tt("Activity");default:return""}}function ue(t){try{var n="",a=null;do n+=ne(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ye=Object.prototype.hasOwnProperty,ee=r.unstable_scheduleCallback,we=r.unstable_cancelCallback,ke=r.unstable_shouldYield,st=r.unstable_requestPaint,Le=r.unstable_now,ut=r.unstable_getCurrentPriorityLevel,bt=r.unstable_ImmediatePriority,ot=r.unstable_UserBlockingPriority,xn=r.unstable_NormalPriority,Mn=r.unstable_LowPriority,si=r.unstable_IdlePriority,wt=r.log,Ct=r.unstable_setDisableYieldValue,dn=null,hn=null;function Qn(t){if(typeof wt=="function"&&Ct(t),hn&&typeof hn.setStrictMode=="function")try{hn.setStrictMode(dn,t)}catch{}}var En=Math.clz32?Math.clz32:Ql,pd=Math.log,uo=Math.LN2;function Ql(t){return t>>>=0,t===0?32:31-(pd(t)/uo|0)|0}var ya=256,pi=262144,gr=4194304;function oi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Yn(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var d=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var x=o&134217727;return x!==0?(o=x&~f,o!==0?d=oi(o):(v&=x,v!==0?d=oi(v):a||(a=x&~t,a!==0&&(d=oi(a))))):(x=o&~f,x!==0?d=oi(x):v!==0?d=oi(v):a||(a=o&~t,a!==0&&(d=oi(a)))),d===0?0:n!==0&&n!==d&&(n&f)===0&&(f=d&-d,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:d}function yr(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Za(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ho(){var t=gr;return gr<<=1,(gr&62914560)===0&&(gr=4194304),t}function ji(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function en(t,n,a,o,d,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var x=t.entanglements,I=t.expirationTimes,F=t.hiddenUpdates;for(a=v&~a;0<a;){var te=31-En(a),re=1<<te;x[te]=0,I[te]=-1;var q=F[te];if(q!==null)for(F[te]=null,te=0;te<q.length;te++){var Y=q[te];Y!==null&&(Y.lane&=-536870913)}a&=~re}o!==0&&fo(t,o,0),f!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function fo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-En(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function _r(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-En(a),d=1<<o;d&n|t[o]&n&&(t[o]|=n),a&=~d}}function br(t,n){var a=n&-n;return a=(a&42)!==0?1:mo(a),(a&(t.suspendedLanes|n))!==0?0:a}function mo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function po(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mi(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:dv(t.type))}function Yl(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var gi=Math.random().toString(36).slice(2),Dt="__reactFiber$"+gi,tn="__reactProps$"+gi,yi="__reactContainer$"+gi,xr="__reactEvents$"+gi,vi="__reactListeners$"+gi,$l="__reactHandles$"+gi,go="__reactResources$"+gi,Vi="__reactMarker$"+gi;function va(t){delete t[Dt],delete t[tn],delete t[xr],delete t[vi],delete t[$l]}function Li(t){var n=t[Dt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[Dt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=$y(t);t!==null;){if(a=t[Dt])return a;t=$y(t)}return n}t=a,a=t.parentNode}return null}function zi(t){if(t=t[Dt]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function _a(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function li(t){var n=t[go];return n||(n=t[go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Vt(t){t[Vi]=!0}var es=new Set,Er={};function Tn(t,n){_i(t,n),_i(t+"Capture",n)}function _i(t,n){for(Er[t]=n,t=0;t<n.length;t++)es.add(n[t])}var gd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yo={},vo={};function Xl(t){return ye.call(vo,t)?!0:ye.call(yo,t)?!1:gd.test(t)?vo[t]=!0:(yo[t]=!0,!1)}function Tr(t,n,a){if(Xl(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Sr(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function $n(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Sn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wl(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function yd(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ts(t){if(!t._valueTracker){var n=Wl(t)?"checked":"value";t._valueTracker=yd(t,n,""+t[n])}}function _o(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Wl(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function ns(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Pi=/[\n"\\]/g;function kt(t){return t.replace(Pi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wr(t,n,a,o,d,f,v,x){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Sn(n)):t.value!==""+Sn(n)&&(t.value=""+Sn(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?is(t,v,Sn(n)):a!=null?is(t,v,Sn(a)):o!=null&&t.removeAttribute("value"),d==null&&f!=null&&(t.defaultChecked=!!f),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.name=""+Sn(x):t.removeAttribute("name")}function ba(t,n,a,o,d,f,v,x){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ts(t);return}a=a!=null?""+Sn(a):"",n=n!=null?""+Sn(n):a,x||n===t.value||(t.value=n),t.defaultValue=n}o=o??d,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=x?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),ts(t)}function is(t,n,a){n==="number"&&ns(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function nt(t,n,a,o){if(t=t.options,n){n={};for(var d=0;d<a.length;d++)n["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=n.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Sn(a),n=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,o&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function xa(t,n,a){if(n!=null&&(n=""+Sn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Sn(a):""}function Ar(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(he(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Sn(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),ts(t)}function Xn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var vd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bo(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||vd.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Jl(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var d in n)o=n[d],n.hasOwnProperty(d)&&a[d]!==o&&bo(t,d,o)}else for(var f in n)n.hasOwnProperty(f)&&bo(t,f,n[f])}function xo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _d=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bi(t){return bd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $t(){}var rs=null;function as(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ui=null,Vn=null;function Zl(t){var n=zi(t);if(n&&(t=n.stateNode)){var a=t[tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(wr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var d=o[tn]||null;if(!d)throw Error(s(90));wr(o,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&_o(o)}break e;case"textarea":xa(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&nt(t,!!a.multiple,n,!1)}}}var Eo=!1;function ec(t,n,a){if(Eo)return t(n,a);Eo=!0;try{var o=t(n);return o}finally{if(Eo=!1,(Ui!==null||Vn!==null)&&(Xc(),Ui&&(n=Ui,t=Vn,Vn=Ui=null,Zl(n),t)))for(n=0;n<t.length;n++)Zl(t[n])}}function Cn(t,n){var a=t.stateNode;if(a===null)return null;var o=a[tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),To=!1;if(ci)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){To=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{To=!1}var Ln=null,ss=null,Ei=null;function Rr(){if(Ei)return Ei;var t,n=ss,a=n.length,o,d="value"in Ln?Ln.value:Ln.textContent,f=d.length;for(t=0;t<a&&n[t]===d[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===d[f-o];o++);return Ei=d.slice(t,1<o?1-o:void 0)}function Ea(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Cr(){return!0}function xt(){return!1}function fn(t){function n(a,o,d,f,v){this._reactName=a,this._targetInst=d,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var x in t)t.hasOwnProperty(x)&&(a=t[x],this[x]=a?a(f):f[x]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Cr:xt,this.isPropagationStopped=xt,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),n}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ta=fn(Bi),Nr=N({},Bi,{view:0,detail:0}),tc=fn(Nr),Ir,os,wn,Sa=N({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wn&&(wn&&t.type==="mousemove"?(Ir=t.screenX-wn.screenX,os=t.screenY-wn.screenY):os=Ir=0,wn=t),Ir)},movementY:function(t){return"movementY"in t?t.movementY:os}}),nc=fn(Sa),wa=N({},Sa,{dataTransfer:0}),ic=fn(wa),So=N({},Nr,{relatedTarget:0}),Dr=fn(So),rc=N({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),ls=fn(rc),xd=N({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ac=fn(xd),Aa=N({},Bi,{data:0}),wo=fn(Aa),sc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ao={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ro={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oc(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ro[t])?!!n[t]:!1}function kr(){return oc}var lc=N({},Nr,{key:function(t){if(t.key){var n=sc[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ao[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kr,charCode:function(t){return t.type==="keypress"?Ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cc=fn(lc),Hi=N({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Co=fn(Hi),uc=N({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kr}),dc=fn(uc),hc=N({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),cs=fn(hc),An=N({},Sa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fc=fn(An),mc=N({},Bi,{newState:0,oldState:0}),Or=fn(mc),u=[9,13,27,32],g=ci&&"CompositionEvent"in window,b=null;ci&&"documentMode"in document&&(b=document.documentMode);var E=ci&&"TextEvent"in window&&!b,U=ci&&(!g||b&&8<b&&11>=b),X=" ",pe=!1;function ct(t,n){switch(t){case"keyup":return u.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ut(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qe=!1;function Xt(t,n){switch(t){case"compositionend":return Ut(n);case"keypress":return n.which!==32?null:(pe=!0,X);case"textInput":return t=n.data,t===X&&pe?null:t;default:return null}}function Wt(t,n){if(qe)return t==="compositionend"||!g&&ct(t,n)?(t=Rr(),Ei=ss=Ln=null,qe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return U&&n.locale!=="ko"?null:n.data;default:return null}}var jr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nn(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!jr[t.type]:n==="textarea"}function Ra(t,n,a,o){Ui?Vn?Vn.push(o):Vn=[o]:Ui=o,n=iu(n,"onChange"),0<n.length&&(a=new Ta("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Fi=null,No=null;function bx(t){My(t,0)}function pc(t){var n=_a(t);if(_o(n))return t}function ep(t,n){if(t==="change")return n}var tp=!1;if(ci){var Ed;if(ci){var Td="oninput"in document;if(!Td){var np=document.createElement("div");np.setAttribute("oninput","return;"),Td=typeof np.oninput=="function"}Ed=Td}else Ed=!1;tp=Ed&&(!document.documentMode||9<document.documentMode)}function ip(){Fi&&(Fi.detachEvent("onpropertychange",rp),No=Fi=null)}function rp(t){if(t.propertyName==="value"&&pc(No)){var n=[];Ra(n,No,t,as(t)),ec(bx,n)}}function xx(t,n,a){t==="focusin"?(ip(),Fi=n,No=a,Fi.attachEvent("onpropertychange",rp)):t==="focusout"&&ip()}function Ex(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(No)}function Tx(t,n){if(t==="click")return pc(n)}function Sx(t,n){if(t==="input"||t==="change")return pc(n)}function wx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var zn=typeof Object.is=="function"?Object.is:wx;function Io(t,n){if(zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var d=a[o];if(!ye.call(n,d)||!zn(t[d],n[d]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,n){var a=ap(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ap(a)}}function op(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?op(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function lp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ns(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ns(t.document)}return n}function Sd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ax=ci&&"documentMode"in document&&11>=document.documentMode,us=null,wd=null,Do=null,Ad=!1;function cp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ad||us==null||us!==ns(o)||(o=us,"selectionStart"in o&&Sd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Do&&Io(Do,o)||(Do=o,o=iu(wd,"onSelect"),0<o.length&&(n=new Ta("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=us)))}function Ca(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ds={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Rd={},up={};ci&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Na(t){if(Rd[t])return Rd[t];if(!ds[t])return t;var n=ds[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in up)return Rd[t]=n[a];return t}var dp=Na("animationend"),hp=Na("animationiteration"),fp=Na("animationstart"),Rx=Na("transitionrun"),Cx=Na("transitionstart"),Nx=Na("transitioncancel"),mp=Na("transitionend"),pp=new Map,Cd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cd.push("scrollEnd");function ui(t,n){pp.set(t,n),Tn(n,[t])}var gc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Wn=[],hs=0,Nd=0;function yc(){for(var t=hs,n=Nd=hs=0;n<t;){var a=Wn[n];Wn[n++]=null;var o=Wn[n];Wn[n++]=null;var d=Wn[n];Wn[n++]=null;var f=Wn[n];if(Wn[n++]=null,o!==null&&d!==null){var v=o.pending;v===null?d.next=d:(d.next=v.next,v.next=d),o.pending=d}f!==0&&gp(a,d,f)}}function vc(t,n,a,o){Wn[hs++]=t,Wn[hs++]=n,Wn[hs++]=a,Wn[hs++]=o,Nd|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Id(t,n,a,o){return vc(t,n,a,o),_c(t)}function Ia(t,n){return vc(t,null,null,n),_c(t)}function gp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var d=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(d=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,d&&n!==null&&(d=31-En(a),t=f.hiddenUpdates,o=t[d],o===null?t[d]=[n]:o.push(n),n.lane=a|536870912),f):null}function _c(t){if(50<Zo)throw Zo=0,Ph=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fs={};function Ix(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,n,a,o){return new Ix(t,n,a,o)}function Dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var a=t.alternate;return a===null?(a=Pn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function yp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bc(t,n,a,o,d,f){var v=0;if(o=t,typeof t=="function")Dd(t)&&(v=1);else if(typeof t=="string")v=M1(t,a,fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Pn(31,a,n,d),t.elementType=C,t.lanes=f,t;case J:return Da(a.children,d,f,n);case $:v=8,d|=24;break;case ae:return t=Pn(12,a,n,d|2),t.elementType=ae,t.lanes=f,t;case Ce:return t=Pn(13,a,n,d),t.elementType=Ce,t.lanes=f,t;case xe:return t=Pn(19,a,n,d),t.elementType=xe,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case me:v=10;break e;case W:v=9;break e;case ge:v=11;break e;case w:v=14;break e;case A:v=16,o=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Pn(v,a,n,d),n.elementType=t,n.type=o,n.lanes=f,n}function Da(t,n,a,o){return t=Pn(7,t,o,n),t.lanes=a,t}function kd(t,n,a){return t=Pn(6,t,null,n),t.lanes=a,t}function vp(t){var n=Pn(18,null,null,0);return n.stateNode=t,n}function Od(t,n,a){return n=Pn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var _p=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=_p.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ue(n)},_p.set(t,n),n)}return{value:t,source:n,stack:ue(n)}}var ms=[],ps=0,xc=null,ko=0,Zn=[],ei=0,Mr=null,Ti=1,Si="";function Gi(t,n){ms[ps++]=ko,ms[ps++]=xc,xc=t,ko=n}function bp(t,n,a){Zn[ei++]=Ti,Zn[ei++]=Si,Zn[ei++]=Mr,Mr=t;var o=Ti;t=Si;var d=32-En(o)-1;o&=~(1<<d),a+=1;var f=32-En(n)+d;if(30<f){var v=d-d%5;f=(o&(1<<v)-1).toString(32),o>>=v,d-=v,Ti=1<<32-En(n)+d|a<<d|o,Si=f+t}else Ti=1<<f|a<<d|o,Si=t}function jd(t){t.return!==null&&(Gi(t,1),bp(t,1,0))}function Md(t){for(;t===xc;)xc=ms[--ps],ms[ps]=null,ko=ms[--ps],ms[ps]=null;for(;t===Mr;)Mr=Zn[--ei],Zn[ei]=null,Si=Zn[--ei],Zn[ei]=null,Ti=Zn[--ei],Zn[ei]=null}function xp(t,n){Zn[ei++]=Ti,Zn[ei++]=Si,Zn[ei++]=Mr,Ti=n.id,Si=n.overflow,Mr=t}var nn=null,Et=null,Je=!1,Vr=null,ti=!1,Vd=Error(s(519));function Lr(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(Jn(n,t)),Vd}function Ep(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Dt]=t,n[tn]=o,a){case"dialog":Qe("cancel",n),Qe("close",n);break;case"iframe":case"object":case"embed":Qe("load",n);break;case"video":case"audio":for(a=0;a<tl.length;a++)Qe(tl[a],n);break;case"source":Qe("error",n);break;case"img":case"image":case"link":Qe("error",n),Qe("load",n);break;case"details":Qe("toggle",n);break;case"input":Qe("invalid",n),ba(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Qe("invalid",n);break;case"textarea":Qe("invalid",n),Ar(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Py(n.textContent,a)?(o.popover!=null&&(Qe("beforetoggle",n),Qe("toggle",n)),o.onScroll!=null&&Qe("scroll",n),o.onScrollEnd!=null&&Qe("scrollend",n),o.onClick!=null&&(n.onclick=$t),n=!0):n=!1,n||Lr(t,!0)}function Tp(t){for(nn=t.return;nn;)switch(nn.tag){case 5:case 31:case 13:ti=!1;return;case 27:case 3:ti=!0;return;default:nn=nn.return}}function gs(t){if(t!==nn)return!1;if(!Je)return Tp(t),Je=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ef(t.type,t.memoizedProps)),a=!a),a&&Et&&Lr(t),Tp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Et=Yy(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Et=Yy(t)}else n===27?(n=Et,Wr(t.type)?(t=sf,sf=null,Et=t):Et=n):Et=nn?ii(t.stateNode.nextSibling):null;return!0}function ka(){Et=nn=null,Je=!1}function Ld(){var t=Vr;return t!==null&&(On===null?On=t:On.push.apply(On,t),Vr=null),t}function Oo(t){Vr===null?Vr=[t]:Vr.push(t)}var zd=j(null),Oa=null,Ki=null;function zr(t,n,a){Q(zd,n._currentValue),n._currentValue=a}function Qi(t){t._currentValue=zd.current,M(zd)}function Pd(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ud(t,n,a,o){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var f=d.dependencies;if(f!==null){var v=d.child;f=f.firstContext;e:for(;f!==null;){var x=f;f=d;for(var I=0;I<n.length;I++)if(x.context===n[I]){f.lanes|=a,x=f.alternate,x!==null&&(x.lanes|=a),Pd(f.return,a,t),o||(v=null);break e}f=x.next}}else if(d.tag===18){if(v=d.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Pd(v,a,t),v=null}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===t){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}}function ys(t,n,a,o){t=null;for(var d=n,f=!1;d!==null;){if(!f){if((d.flags&524288)!==0)f=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var v=d.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var x=d.type;zn(d.pendingProps.value,v.value)||(t!==null?t.push(x):t=[x])}}else if(d===de.current){if(v=d.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(sl):t=[sl])}d=d.return}t!==null&&Ud(n,t,a,o),n.flags|=262144}function Ec(t){for(t=t.firstContext;t!==null;){if(!zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ja(t){Oa=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function rn(t){return Sp(Oa,t)}function Tc(t,n){return Oa===null&&ja(t),Sp(t,n)}function Sp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(s(308));Ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ki=Ki.next=n;return a}var Dx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},kx=r.unstable_scheduleCallback,Ox=r.unstable_NormalPriority,Bt={$$typeof:me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bd(){return{controller:new Dx,data:new Map,refCount:0}}function jo(t){t.refCount--,t.refCount===0&&kx(Ox,function(){t.controller.abort()})}var Mo=null,Hd=0,vs=0,_s=null;function jx(t,n){if(Mo===null){var a=Mo=[];Hd=0,vs=Gh(),_s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Hd++,n.then(wp,wp),n}function wp(){if(--Hd===0&&Mo!==null){_s!==null&&(_s.status="fulfilled");var t=Mo;Mo=null,vs=0,_s=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Mx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var d=0;d<a.length;d++)(0,a[d])(n)},function(d){for(o.status="rejected",o.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),o}var Ap=L.S;L.S=function(t,n){cy=Le(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jx(t,n),Ap!==null&&Ap(t,n)};var Ma=j(null);function Fd(){var t=Ma.current;return t!==null?t:vt.pooledCache}function Sc(t,n){n===null?Q(Ma,Ma.current):Q(Ma,n.pool)}function Rp(){var t=Fd();return t===null?null:{parent:Bt._currentValue,pool:t}}var bs=Error(s(460)),qd=Error(s(474)),wc=Error(s(542)),Ac={then:function(){}};function Cp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Np(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($t,$t),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dp(t),t;default:if(typeof n.status=="string")n.then($t,$t);else{if(t=vt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var d=n;d.status="fulfilled",d.value=o}},function(o){if(n.status==="pending"){var d=n;d.status="rejected",d.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dp(t),t}throw La=n,bs}}function Va(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(La=a,bs):a}}var La=null;function Ip(){if(La===null)throw Error(s(459));var t=La;return La=null,t}function Dp(t){if(t===bs||t===wc)throw Error(s(483))}var xs=null,Vo=0;function Rc(t){var n=Vo;return Vo+=1,xs===null&&(xs=[]),Np(xs,t,n)}function Lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Cc(t,n){throw n.$$typeof===z?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function kp(t){function n(P,V){if(t){var H=P.deletions;H===null?(P.deletions=[V],P.flags|=16):H.push(V)}}function a(P,V){if(!t)return null;for(;V!==null;)n(P,V),V=V.sibling;return null}function o(P){for(var V=new Map;P!==null;)P.key!==null?V.set(P.key,P):V.set(P.index,P),P=P.sibling;return V}function d(P,V){return P=qi(P,V),P.index=0,P.sibling=null,P}function f(P,V,H){return P.index=H,t?(H=P.alternate,H!==null?(H=H.index,H<V?(P.flags|=67108866,V):H):(P.flags|=67108866,V)):(P.flags|=1048576,V)}function v(P){return t&&P.alternate===null&&(P.flags|=67108866),P}function x(P,V,H,ie){return V===null||V.tag!==6?(V=kd(H,P.mode,ie),V.return=P,V):(V=d(V,H),V.return=P,V)}function I(P,V,H,ie){var Ie=H.type;return Ie===J?te(P,V,H.props.children,ie,H.key):V!==null&&(V.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===A&&Va(Ie)===V.type)?(V=d(V,H.props),Lo(V,H),V.return=P,V):(V=bc(H.type,H.key,H.props,null,P.mode,ie),Lo(V,H),V.return=P,V)}function F(P,V,H,ie){return V===null||V.tag!==4||V.stateNode.containerInfo!==H.containerInfo||V.stateNode.implementation!==H.implementation?(V=Od(H,P.mode,ie),V.return=P,V):(V=d(V,H.children||[]),V.return=P,V)}function te(P,V,H,ie,Ie){return V===null||V.tag!==7?(V=Da(H,P.mode,ie,Ie),V.return=P,V):(V=d(V,H),V.return=P,V)}function re(P,V,H){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=kd(""+V,P.mode,H),V.return=P,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return H=bc(V.type,V.key,V.props,null,P.mode,H),Lo(H,V),H.return=P,H;case D:return V=Od(V,P.mode,H),V.return=P,V;case A:return V=Va(V),re(P,V,H)}if(he(V)||S(V))return V=Da(V,P.mode,H,null),V.return=P,V;if(typeof V.then=="function")return re(P,Rc(V),H);if(V.$$typeof===me)return re(P,Tc(P,V),H);Cc(P,V)}return null}function q(P,V,H,ie){var Ie=V!==null?V.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return Ie!==null?null:x(P,V,""+H,ie);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return H.key===Ie?I(P,V,H,ie):null;case D:return H.key===Ie?F(P,V,H,ie):null;case A:return H=Va(H),q(P,V,H,ie)}if(he(H)||S(H))return Ie!==null?null:te(P,V,H,ie,null);if(typeof H.then=="function")return q(P,V,Rc(H),ie);if(H.$$typeof===me)return q(P,V,Tc(P,H),ie);Cc(P,H)}return null}function Y(P,V,H,ie,Ie){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return P=P.get(H)||null,x(V,P,""+ie,Ie);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case G:return P=P.get(ie.key===null?H:ie.key)||null,I(V,P,ie,Ie);case D:return P=P.get(ie.key===null?H:ie.key)||null,F(V,P,ie,Ie);case A:return ie=Va(ie),Y(P,V,H,ie,Ie)}if(he(ie)||S(ie))return P=P.get(H)||null,te(V,P,ie,Ie,null);if(typeof ie.then=="function")return Y(P,V,H,Rc(ie),Ie);if(ie.$$typeof===me)return Y(P,V,H,Tc(V,ie),Ie);Cc(V,ie)}return null}function Ee(P,V,H,ie){for(var Ie=null,it=null,Ae=V,He=V=0,Xe=null;Ae!==null&&He<H.length;He++){Ae.index>He?(Xe=Ae,Ae=null):Xe=Ae.sibling;var rt=q(P,Ae,H[He],ie);if(rt===null){Ae===null&&(Ae=Xe);break}t&&Ae&&rt.alternate===null&&n(P,Ae),V=f(rt,V,He),it===null?Ie=rt:it.sibling=rt,it=rt,Ae=Xe}if(He===H.length)return a(P,Ae),Je&&Gi(P,He),Ie;if(Ae===null){for(;He<H.length;He++)Ae=re(P,H[He],ie),Ae!==null&&(V=f(Ae,V,He),it===null?Ie=Ae:it.sibling=Ae,it=Ae);return Je&&Gi(P,He),Ie}for(Ae=o(Ae);He<H.length;He++)Xe=Y(Ae,P,He,H[He],ie),Xe!==null&&(t&&Xe.alternate!==null&&Ae.delete(Xe.key===null?He:Xe.key),V=f(Xe,V,He),it===null?Ie=Xe:it.sibling=Xe,it=Xe);return t&&Ae.forEach(function(na){return n(P,na)}),Je&&Gi(P,He),Ie}function Oe(P,V,H,ie){if(H==null)throw Error(s(151));for(var Ie=null,it=null,Ae=V,He=V=0,Xe=null,rt=H.next();Ae!==null&&!rt.done;He++,rt=H.next()){Ae.index>He?(Xe=Ae,Ae=null):Xe=Ae.sibling;var na=q(P,Ae,rt.value,ie);if(na===null){Ae===null&&(Ae=Xe);break}t&&Ae&&na.alternate===null&&n(P,Ae),V=f(na,V,He),it===null?Ie=na:it.sibling=na,it=na,Ae=Xe}if(rt.done)return a(P,Ae),Je&&Gi(P,He),Ie;if(Ae===null){for(;!rt.done;He++,rt=H.next())rt=re(P,rt.value,ie),rt!==null&&(V=f(rt,V,He),it===null?Ie=rt:it.sibling=rt,it=rt);return Je&&Gi(P,He),Ie}for(Ae=o(Ae);!rt.done;He++,rt=H.next())rt=Y(Ae,P,He,rt.value,ie),rt!==null&&(t&&rt.alternate!==null&&Ae.delete(rt.key===null?He:rt.key),V=f(rt,V,He),it===null?Ie=rt:it.sibling=rt,it=rt);return t&&Ae.forEach(function(K1){return n(P,K1)}),Je&&Gi(P,He),Ie}function gt(P,V,H,ie){if(typeof H=="object"&&H!==null&&H.type===J&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case G:e:{for(var Ie=H.key;V!==null;){if(V.key===Ie){if(Ie=H.type,Ie===J){if(V.tag===7){a(P,V.sibling),ie=d(V,H.props.children),ie.return=P,P=ie;break e}}else if(V.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===A&&Va(Ie)===V.type){a(P,V.sibling),ie=d(V,H.props),Lo(ie,H),ie.return=P,P=ie;break e}a(P,V);break}else n(P,V);V=V.sibling}H.type===J?(ie=Da(H.props.children,P.mode,ie,H.key),ie.return=P,P=ie):(ie=bc(H.type,H.key,H.props,null,P.mode,ie),Lo(ie,H),ie.return=P,P=ie)}return v(P);case D:e:{for(Ie=H.key;V!==null;){if(V.key===Ie)if(V.tag===4&&V.stateNode.containerInfo===H.containerInfo&&V.stateNode.implementation===H.implementation){a(P,V.sibling),ie=d(V,H.children||[]),ie.return=P,P=ie;break e}else{a(P,V);break}else n(P,V);V=V.sibling}ie=Od(H,P.mode,ie),ie.return=P,P=ie}return v(P);case A:return H=Va(H),gt(P,V,H,ie)}if(he(H))return Ee(P,V,H,ie);if(S(H)){if(Ie=S(H),typeof Ie!="function")throw Error(s(150));return H=Ie.call(H),Oe(P,V,H,ie)}if(typeof H.then=="function")return gt(P,V,Rc(H),ie);if(H.$$typeof===me)return gt(P,V,Tc(P,H),ie);Cc(P,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,V!==null&&V.tag===6?(a(P,V.sibling),ie=d(V,H),ie.return=P,P=ie):(a(P,V),ie=kd(H,P.mode,ie),ie.return=P,P=ie),v(P)):a(P,V)}return function(P,V,H,ie){try{Vo=0;var Ie=gt(P,V,H,ie);return xs=null,Ie}catch(Ae){if(Ae===bs||Ae===wc)throw Ae;var it=Pn(29,Ae,null,P.mode);return it.lanes=ie,it.return=P,it}finally{}}}var za=kp(!0),Op=kp(!1),Pr=!1;function Gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kd(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ur(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Br(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(lt&2)!==0){var d=o.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),o.pending=n,n=_c(t),gp(t,null,a),n}return vc(t,o,n,a),_c(t)}function zo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,_r(t,a)}}function Qd(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=n:f=f.next=n}else d=f=n;a={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Yd=!1;function Po(){if(Yd){var t=_s;if(t!==null)throw t}}function Uo(t,n,a,o){Yd=!1;var d=t.updateQueue;Pr=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,x=d.shared.pending;if(x!==null){d.shared.pending=null;var I=x,F=I.next;I.next=null,v===null?f=F:v.next=F,v=I;var te=t.alternate;te!==null&&(te=te.updateQueue,x=te.lastBaseUpdate,x!==v&&(x===null?te.firstBaseUpdate=F:x.next=F,te.lastBaseUpdate=I))}if(f!==null){var re=d.baseState;v=0,te=F=I=null,x=f;do{var q=x.lane&-536870913,Y=q!==x.lane;if(Y?($e&q)===q:(o&q)===q){q!==0&&q===vs&&(Yd=!0),te!==null&&(te=te.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var Ee=t,Oe=x;q=n;var gt=a;switch(Oe.tag){case 1:if(Ee=Oe.payload,typeof Ee=="function"){re=Ee.call(gt,re,q);break e}re=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Oe.payload,q=typeof Ee=="function"?Ee.call(gt,re,q):Ee,q==null)break e;re=N({},re,q);break e;case 2:Pr=!0}}q=x.callback,q!==null&&(t.flags|=64,Y&&(t.flags|=8192),Y=d.callbacks,Y===null?d.callbacks=[q]:Y.push(q))}else Y={lane:q,tag:x.tag,payload:x.payload,callback:x.callback,next:null},te===null?(F=te=Y,I=re):te=te.next=Y,v|=q;if(x=x.next,x===null){if(x=d.shared.pending,x===null)break;Y=x,x=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);te===null&&(I=re),d.baseState=I,d.firstBaseUpdate=F,d.lastBaseUpdate=te,f===null&&(d.shared.lanes=0),Kr|=v,t.lanes=v,t.memoizedState=re}}function jp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Mp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)jp(a[t],n)}var Es=j(null),Nc=j(0);function Vp(t,n){t=nr,Q(Nc,t),Q(Es,n),nr=t|n.baseLanes}function $d(){Q(Nc,nr),Q(Es,Es.current)}function Xd(){nr=Nc.current,M(Es),M(Nc)}var Un=j(null),ni=null;function Hr(t){var n=t.alternate;Q(Lt,Lt.current&1),Q(Un,t),ni===null&&(n===null||Es.current!==null||n.memoizedState!==null)&&(ni=t)}function Wd(t){Q(Lt,Lt.current),Q(Un,t),ni===null&&(ni=t)}function Lp(t){t.tag===22?(Q(Lt,Lt.current),Q(Un,t),ni===null&&(ni=t)):Fr()}function Fr(){Q(Lt,Lt.current),Q(Un,Un.current)}function Bn(t){M(Un),ni===t&&(ni=null),M(Lt)}var Lt=j(0);function Ic(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rf(a)||af(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=0,Be=null,mt=null,Ht=null,Dc=!1,Ts=!1,Pa=!1,kc=0,Bo=0,Ss=null,Vx=0;function Ot(){throw Error(s(321))}function Jd(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!zn(t[a],n[a]))return!1;return!0}function Zd(t,n,a,o,d,f){return Yi=f,Be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?bg:mh,Pa=!1,f=a(o,d),Pa=!1,Ts&&(f=Pp(n,a,o,d)),zp(t),f}function zp(t){L.H=qo;var n=mt!==null&&mt.next!==null;if(Yi=0,Ht=mt=Be=null,Dc=!1,Bo=0,Ss=null,n)throw Error(s(300));t===null||Ft||(t=t.dependencies,t!==null&&Ec(t)&&(Ft=!0))}function Pp(t,n,a,o){Be=t;var d=0;do{if(Ts&&(Ss=null),Bo=0,Ts=!1,25<=d)throw Error(s(301));if(d+=1,Ht=mt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=xg,f=n(a,o)}while(Ts);return f}function Lx(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?Ho(n):n,t=t.useState()[0],(mt!==null?mt.memoizedState:null)!==t&&(Be.flags|=1024),n}function eh(){var t=kc!==0;return kc=0,t}function th(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function nh(t){if(Dc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dc=!1}Yi=0,Ht=mt=Be=null,Ts=!1,Bo=kc=0,Ss=null}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Be.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function zt(){if(mt===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var n=Ht===null?Be.memoizedState:Ht.next;if(n!==null)Ht=n,mt=t;else{if(t===null)throw Be.alternate===null?Error(s(467)):Error(s(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Ht===null?Be.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(t){var n=Bo;return Bo+=1,Ss===null&&(Ss=[]),t=Np(Ss,t,n),n=Be,(Ht===null?n.memoizedState:Ht.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?bg:mh),t}function jc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ho(t);if(t.$$typeof===me)return rn(t)}throw Error(s(438,String(t)))}function ih(t){var n=null,a=Be.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Be.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(d){return d.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Oc(),Be.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=k;return n.index++,a}function $i(t,n){return typeof n=="function"?n(t):n}function Mc(t){var n=zt();return rh(n,mt,t)}function rh(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var d=t.baseQueue,f=o.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}n.baseQueue=d=f,o.pending=null}if(f=t.baseState,d===null)t.memoizedState=f;else{n=d.next;var x=v=null,I=null,F=n,te=!1;do{var re=F.lane&-536870913;if(re!==F.lane?($e&re)===re:(Yi&re)===re){var q=F.revertLane;if(q===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),re===vs&&(te=!0);else if((Yi&q)===q){F=F.next,q===vs&&(te=!0);continue}else re={lane:0,revertLane:F.revertLane,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},I===null?(x=I=re,v=f):I=I.next=re,Be.lanes|=q,Kr|=q;re=F.action,Pa&&a(f,re),f=F.hasEagerState?F.eagerState:a(f,re)}else q={lane:re,revertLane:F.revertLane,gesture:F.gesture,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},I===null?(x=I=q,v=f):I=I.next=q,Be.lanes|=re,Kr|=re;F=F.next}while(F!==null&&F!==n);if(I===null?v=f:I.next=x,!zn(f,t.memoizedState)&&(Ft=!0,te&&(a=_s,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=I,o.lastRenderedState=f}return d===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ah(t){var n=zt(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,d=a.pending,f=n.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=t(f,v.action),v=v.next;while(v!==d);zn(f,n.memoizedState)||(Ft=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Up(t,n,a){var o=Be,d=zt(),f=Je;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!zn((mt||d).memoizedState,a);if(v&&(d.memoizedState=a,Ft=!0),d=d.queue,lh(Fp.bind(null,o,d,t),[t]),d.getSnapshot!==n||v||Ht!==null&&Ht.memoizedState.tag&1){if(o.flags|=2048,ws(9,{destroy:void 0},Hp.bind(null,o,d,a,n),null),vt===null)throw Error(s(349));f||(Yi&127)!==0||Bp(o,n,a)}return a}function Bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Be.updateQueue,n===null?(n=Oc(),Be.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Hp(t,n,a,o){n.value=a,n.getSnapshot=o,qp(n)&&Gp(t)}function Fp(t,n,a){return a(function(){qp(n)&&Gp(t)})}function qp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!zn(t,a)}catch{return!0}}function Gp(t){var n=Ia(t,2);n!==null&&jn(n,t,2)}function sh(t){var n=Rn();if(typeof t=="function"){var a=t;if(t=a(),Pa){Qn(!0);try{a()}finally{Qn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},n}function Kp(t,n,a,o){return t.baseState=a,rh(t,mt,typeof o=="function"?o:$i)}function zx(t,n,a,o,d){if(zc(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Qp(t,n){var a=n.action,o=n.payload,d=t.state;if(n.isTransition){var f=L.T,v={};L.T=v;try{var x=a(d,o),I=L.S;I!==null&&I(v,x),Yp(t,n,x)}catch(F){oh(t,n,F)}finally{f!==null&&v.types!==null&&(f.types=v.types),L.T=f}}else try{f=a(d,o),Yp(t,n,f)}catch(F){oh(t,n,F)}}function Yp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$p(t,n,o)},function(o){return oh(t,n,o)}):$p(t,n,a)}function $p(t,n,a){n.status="fulfilled",n.value=a,Xp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Qp(t,a)))}function oh(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Xp(n),n=n.next;while(n!==o)}t.action=null}function Xp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Wp(t,n){return n}function Jp(t,n){if(Je){var a=vt.formState;if(a!==null){e:{var o=Be;if(Je){if(Et){t:{for(var d=Et,f=ti;d.nodeType!==8;){if(!f){d=null;break t}if(d=ii(d.nextSibling),d===null){d=null;break t}}f=d.data,d=f==="F!"||f==="F"?d:null}if(d){Et=ii(d.nextSibling),o=d.data==="F!";break e}}Lr(o)}o=!1}o&&(n=a[0])}}return a=Rn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wp,lastRenderedState:n},a.queue=o,a=yg.bind(null,Be,o),o.dispatch=a,o=sh(!1),f=fh.bind(null,Be,!1,o.queue),o=Rn(),d={state:n,dispatch:null,action:t,pending:null},o.queue=d,a=zx.bind(null,Be,d,f,a),d.dispatch=a,o.memoizedState=t,[n,a,!1]}function Zp(t){var n=zt();return eg(n,mt,t)}function eg(t,n,a){if(n=rh(t,n,Wp)[0],t=Mc($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ho(n)}catch(v){throw v===bs?wc:v}else o=n;n=zt();var d=n.queue,f=d.dispatch;return a!==n.memoizedState&&(Be.flags|=2048,ws(9,{destroy:void 0},Px.bind(null,d,a),null)),[o,f,t]}function Px(t,n){t.action=n}function tg(t){var n=zt(),a=mt;if(a!==null)return eg(n,a,t);zt(),n=n.memoizedState,a=zt();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ws(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=Be.updateQueue,n===null&&(n=Oc(),Be.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function ng(){return zt().memoizedState}function Vc(t,n,a,o){var d=Rn();Be.flags|=t,d.memoizedState=ws(1|n,{destroy:void 0},a,o===void 0?null:o)}function Lc(t,n,a,o){var d=zt();o=o===void 0?null:o;var f=d.memoizedState.inst;mt!==null&&o!==null&&Jd(o,mt.memoizedState.deps)?d.memoizedState=ws(n,f,a,o):(Be.flags|=t,d.memoizedState=ws(1|n,f,a,o))}function ig(t,n){Vc(8390656,8,t,n)}function lh(t,n){Lc(2048,8,t,n)}function Ux(t){Be.flags|=4;var n=Be.updateQueue;if(n===null)n=Oc(),Be.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function rg(t){var n=zt().memoizedState;return Ux({ref:n,nextImpl:t}),function(){if((lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ag(t,n){return Lc(4,2,t,n)}function sg(t,n){return Lc(4,4,t,n)}function og(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function lg(t,n,a){a=a!=null?a.concat([t]):null,Lc(4,4,og.bind(null,n,t),a)}function ch(){}function cg(t,n){var a=zt();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Jd(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function ug(t,n){var a=zt();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Jd(n,o[1]))return o[0];if(o=t(),Pa){Qn(!0);try{t()}finally{Qn(!1)}}return a.memoizedState=[o,n],o}function uh(t,n,a){return a===void 0||(Yi&1073741824)!==0&&($e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=dy(),Be.lanes|=t,Kr|=t,a)}function dg(t,n,a,o){return zn(a,n)?a:Es.current!==null?(t=uh(t,a,o),zn(t,n)||(Ft=!0),t):(Yi&42)===0||(Yi&1073741824)!==0&&($e&261930)===0?(Ft=!0,t.memoizedState=a):(t=dy(),Be.lanes|=t,Kr|=t,n)}function hg(t,n,a,o,d){var f=B.p;B.p=f!==0&&8>f?f:8;var v=L.T,x={};L.T=x,fh(t,!1,n,a);try{var I=d(),F=L.S;if(F!==null&&F(x,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var te=Mx(I,o);Fo(t,n,te,qn(t))}else Fo(t,n,o,qn(t))}catch(re){Fo(t,n,{then:function(){},status:"rejected",reason:re},qn())}finally{B.p=f,v!==null&&x.types!==null&&(v.types=x.types),L.T=v}}function Bx(){}function dh(t,n,a,o){if(t.tag!==5)throw Error(s(476));var d=fg(t).queue;hg(t,d,n,se,a===null?Bx:function(){return mg(t),a(o)})}function fg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:se},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function mg(t){var n=fg(t);n.next===null&&(n=t.alternate.memoizedState),Fo(t,n.next.queue,{},qn())}function hh(){return rn(sl)}function pg(){return zt().memoizedState}function gg(){return zt().memoizedState}function Hx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=Ur(a);var o=Br(n,t,a);o!==null&&(jn(o,n,a),zo(o,n,a)),n={cache:Bd()},t.payload=n;return}n=n.return}}function Fx(t,n,a){var o=qn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zc(t)?vg(n,a):(a=Id(t,n,a,o),a!==null&&(jn(a,t,o),_g(a,n,o)))}function yg(t,n,a){var o=qn();Fo(t,n,a,o)}function Fo(t,n,a,o){var d={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zc(t))vg(n,d);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,x=f(v,a);if(d.hasEagerState=!0,d.eagerState=x,zn(x,v))return vc(t,n,d,0),vt===null&&yc(),!1}catch{}finally{}if(a=Id(t,n,d,o),a!==null)return jn(a,t,o),_g(a,n,o),!0}return!1}function fh(t,n,a,o){if(o={lane:2,revertLane:Gh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zc(t)){if(n)throw Error(s(479))}else n=Id(t,a,o,2),n!==null&&jn(n,t,2)}function zc(t){var n=t.alternate;return t===Be||n!==null&&n===Be}function vg(t,n){Ts=Dc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function _g(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,_r(t,a)}}var qo={readContext:rn,use:jc,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useLayoutEffect:Ot,useInsertionEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useSyncExternalStore:Ot,useId:Ot,useHostTransitionStatus:Ot,useFormState:Ot,useActionState:Ot,useOptimistic:Ot,useMemoCache:Ot,useCacheRefresh:Ot};qo.useEffectEvent=Ot;var bg={readContext:rn,use:jc,useCallback:function(t,n){return Rn().memoizedState=[t,n===void 0?null:n],t},useContext:rn,useEffect:ig,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Vc(4194308,4,og.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vc(4194308,4,t,n)},useInsertionEffect:function(t,n){Vc(4,2,t,n)},useMemo:function(t,n){var a=Rn();n=n===void 0?null:n;var o=t();if(Pa){Qn(!0);try{t()}finally{Qn(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Rn();if(a!==void 0){var d=a(n);if(Pa){Qn(!0);try{a(n)}finally{Qn(!1)}}}else d=n;return o.memoizedState=o.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},o.queue=t,t=t.dispatch=Fx.bind(null,Be,t),[o.memoizedState,t]},useRef:function(t){var n=Rn();return t={current:t},n.memoizedState=t},useState:function(t){t=sh(t);var n=t.queue,a=yg.bind(null,Be,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ch,useDeferredValue:function(t,n){var a=Rn();return uh(a,t,n)},useTransition:function(){var t=sh(!1);return t=hg.bind(null,Be,t.queue,!0,!1),Rn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=Be,d=Rn();if(Je){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),vt===null)throw Error(s(349));($e&127)!==0||Bp(o,n,a)}d.memoizedState=a;var f={value:a,getSnapshot:n};return d.queue=f,ig(Fp.bind(null,o,f,t),[t]),o.flags|=2048,ws(9,{destroy:void 0},Hp.bind(null,o,f,a,n),null),a},useId:function(){var t=Rn(),n=vt.identifierPrefix;if(Je){var a=Si,o=Ti;a=(o&~(1<<32-En(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=kc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Vx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:hh,useFormState:Jp,useActionState:Jp,useOptimistic:function(t){var n=Rn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=fh.bind(null,Be,!0,a),a.dispatch=n,[t,n]},useMemoCache:ih,useCacheRefresh:function(){return Rn().memoizedState=Hx.bind(null,Be)},useEffectEvent:function(t){var n=Rn(),a={impl:t};return n.memoizedState=a,function(){if((lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},mh={readContext:rn,use:jc,useCallback:cg,useContext:rn,useEffect:lh,useImperativeHandle:lg,useInsertionEffect:ag,useLayoutEffect:sg,useMemo:ug,useReducer:Mc,useRef:ng,useState:function(){return Mc($i)},useDebugValue:ch,useDeferredValue:function(t,n){var a=zt();return dg(a,mt.memoizedState,t,n)},useTransition:function(){var t=Mc($i)[0],n=zt().memoizedState;return[typeof t=="boolean"?t:Ho(t),n]},useSyncExternalStore:Up,useId:pg,useHostTransitionStatus:hh,useFormState:Zp,useActionState:Zp,useOptimistic:function(t,n){var a=zt();return Kp(a,mt,t,n)},useMemoCache:ih,useCacheRefresh:gg};mh.useEffectEvent=rg;var xg={readContext:rn,use:jc,useCallback:cg,useContext:rn,useEffect:lh,useImperativeHandle:lg,useInsertionEffect:ag,useLayoutEffect:sg,useMemo:ug,useReducer:ah,useRef:ng,useState:function(){return ah($i)},useDebugValue:ch,useDeferredValue:function(t,n){var a=zt();return mt===null?uh(a,t,n):dg(a,mt.memoizedState,t,n)},useTransition:function(){var t=ah($i)[0],n=zt().memoizedState;return[typeof t=="boolean"?t:Ho(t),n]},useSyncExternalStore:Up,useId:pg,useHostTransitionStatus:hh,useFormState:tg,useActionState:tg,useOptimistic:function(t,n){var a=zt();return mt!==null?Kp(a,mt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ih,useCacheRefresh:gg};xg.useEffectEvent=rg;function ph(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:N({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var gh={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=qn(),d=Ur(o);d.payload=n,a!=null&&(d.callback=a),n=Br(t,d,o),n!==null&&(jn(n,t,o),zo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=qn(),d=Ur(o);d.tag=1,d.payload=n,a!=null&&(d.callback=a),n=Br(t,d,o),n!==null&&(jn(n,t,o),zo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),o=Ur(a);o.tag=2,n!=null&&(o.callback=n),n=Br(t,o,a),n!==null&&(jn(n,t,a),zo(n,t,a))}};function Eg(t,n,a,o,d,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!Io(a,o)||!Io(d,f):!0}function Tg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&gh.enqueueReplaceState(n,n.state,null)}function Ua(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=N({},a));for(var d in t)a[d]===void 0&&(a[d]=t[d])}return a}function Sg(t){gc(t)}function wg(t){console.error(t)}function Ag(t){gc(t)}function Pc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Rg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function yh(t,n,a){return a=Ur(a),a.tag=3,a.payload={element:null},a.callback=function(){Pc(t,n)},a}function Cg(t){return t=Ur(t),t.tag=3,t}function Ng(t,n,a,o){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var f=o.value;t.payload=function(){return d(f)},t.callback=function(){Rg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Rg(n,a,o),typeof d!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var x=o.stack;this.componentDidCatch(o.value,{componentStack:x!==null?x:""})})}function qx(t,n,a,o,d){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ys(n,a,d,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:return ni===null?Wc():a.alternate===null&&jt===0&&(jt=3),a.flags&=-257,a.flags|=65536,a.lanes=d,o===Ac?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Hh(t,o,d)),!1;case 22:return a.flags|=65536,o===Ac?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Hh(t,o,d)),!1}throw Error(s(435,a.tag))}return Hh(t,o,d),Wc(),!1}if(Je)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=d,o!==Vd&&(t=Error(s(422),{cause:o}),Oo(Jn(t,a)))):(o!==Vd&&(n=Error(s(423),{cause:o}),Oo(Jn(n,a))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,o=Jn(o,a),d=yh(t.stateNode,o,d),Qd(t,d),jt!==4&&(jt=2)),!1;var f=Error(s(520),{cause:o});if(f=Jn(f,a),Jo===null?Jo=[f]:Jo.push(f),jt!==4&&(jt=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=d&-d,a.lanes|=t,t=yh(a.stateNode,o,t),Qd(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qr===null||!Qr.has(f))))return a.flags|=65536,d&=-d,a.lanes|=d,d=Cg(d),Ng(d,t,a,o),Qd(a,d),!1}a=a.return}while(a!==null);return!1}var vh=Error(s(461)),Ft=!1;function an(t,n,a,o){n.child=t===null?Op(n,null,a,o):za(n,t.child,a,o)}function Ig(t,n,a,o,d){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var x in o)x!=="ref"&&(v[x]=o[x])}else v=o;return ja(n),o=Zd(t,n,a,v,f,d),x=eh(),t!==null&&!Ft?(th(t,n,d),Xi(t,n,d)):(Je&&x&&jd(n),n.flags|=1,an(t,n,o,d),n.child)}function Dg(t,n,a,o,d){if(t===null){var f=a.type;return typeof f=="function"&&!Dd(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,kg(t,n,f,o,d)):(t=bc(a.type,null,o,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Ah(t,d)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(v,o)&&t.ref===n.ref)return Xi(t,n,d)}return n.flags|=1,t=qi(f,o),t.ref=n.ref,t.return=n,n.child=t}function kg(t,n,a,o,d){if(t!==null){var f=t.memoizedProps;if(Io(f,o)&&t.ref===n.ref)if(Ft=!1,n.pendingProps=o=f,Ah(t,d))(t.flags&131072)!==0&&(Ft=!0);else return n.lanes=t.lanes,Xi(t,n,d)}return _h(t,n,a,o,d)}function Og(t,n,a,o){var d=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,d=0;o!==null;)d=d|o.lanes|o.childLanes,o=o.sibling;o=d&~f}else o=0,n.child=null;return jg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sc(n,f!==null?f.cachePool:null),f!==null?Vp(n,f):$d(),Lp(n);else return o=n.lanes=536870912,jg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Sc(n,f.cachePool),Vp(n,f),Fr(),n.memoizedState=null):(t!==null&&Sc(n,null),$d(),Fr());return an(t,n,d,a),n.child}function Go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function jg(t,n,a,o,d){var f=Fd();return f=f===null?null:{parent:Bt._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Sc(n,null),$d(),Lp(n),t!==null&&ys(t,n,o,!0),n.childLanes=d,null}function Uc(t,n){return n=Hc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Mg(t,n,a){return za(n,t.child,null,a),t=Uc(n,n.pendingProps),t.flags|=2,Bn(n),n.memoizedState=null,t}function Gx(t,n,a){var o=n.pendingProps,d=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Je){if(o.mode==="hidden")return t=Uc(n,o),n.lanes=536870912,Go(null,t);if(Wd(n),(t=Et)?(t=Qy(t,ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Mr!==null?{id:Ti,overflow:Si}:null,retryLane:536870912,hydrationErrors:null},a=vp(t),a.return=n,n.child=a,nn=n,Et=null)):t=null,t===null)throw Lr(n);return n.lanes=536870912,null}return Uc(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Wd(n),d)if(n.flags&256)n.flags&=-257,n=Mg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Ft||ys(t,n,a,!1),d=(a&t.childLanes)!==0,Ft||d){if(o=vt,o!==null&&(v=br(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ia(t,v),jn(o,t,v),vh;Wc(),n=Mg(t,n,a)}else t=f.treeContext,Et=ii(v.nextSibling),nn=n,Je=!0,Vr=null,ti=!1,t!==null&&xp(n,t),n=Uc(n,o),n.flags|=4096;return n}return t=qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Bc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function _h(t,n,a,o,d){return ja(n),a=Zd(t,n,a,o,void 0,d),o=eh(),t!==null&&!Ft?(th(t,n,d),Xi(t,n,d)):(Je&&o&&jd(n),n.flags|=1,an(t,n,a,d),n.child)}function Vg(t,n,a,o,d,f){return ja(n),n.updateQueue=null,a=Pp(n,o,a,d),zp(t),o=eh(),t!==null&&!Ft?(th(t,n,f),Xi(t,n,f)):(Je&&o&&jd(n),n.flags|=1,an(t,n,a,f),n.child)}function Lg(t,n,a,o,d){if(ja(n),n.stateNode===null){var f=fs,v=a.contextType;typeof v=="object"&&v!==null&&(f=rn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Gd(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?rn(v):fs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ph(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&gh.enqueueReplaceState(f,f.state,null),Uo(n,o,f,d),Po(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var x=n.memoizedProps,I=Ua(a,x);f.props=I;var F=f.context,te=a.contextType;v=fs,typeof te=="object"&&te!==null&&(v=rn(te));var re=a.getDerivedStateFromProps;te=typeof re=="function"||typeof f.getSnapshotBeforeUpdate=="function",x=n.pendingProps!==x,te||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x||F!==v)&&Tg(n,f,o,v),Pr=!1;var q=n.memoizedState;f.state=q,Uo(n,o,f,d),Po(),F=n.memoizedState,x||q!==F||Pr?(typeof re=="function"&&(ph(n,a,re,o),F=n.memoizedState),(I=Pr||Eg(n,a,I,o,q,F,v))?(te||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=F),f.props=o,f.state=F,f.context=v,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Kd(t,n),v=n.memoizedProps,te=Ua(a,v),f.props=te,re=n.pendingProps,q=f.context,F=a.contextType,I=fs,typeof F=="object"&&F!==null&&(I=rn(F)),x=a.getDerivedStateFromProps,(F=typeof x=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==re||q!==I)&&Tg(n,f,o,I),Pr=!1,q=n.memoizedState,f.state=q,Uo(n,o,f,d),Po();var Y=n.memoizedState;v!==re||q!==Y||Pr||t!==null&&t.dependencies!==null&&Ec(t.dependencies)?(typeof x=="function"&&(ph(n,a,x,o),Y=n.memoizedState),(te=Pr||Eg(n,a,te,o,q,Y,I)||t!==null&&t.dependencies!==null&&Ec(t.dependencies))?(F||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,Y,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,Y,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=Y),f.props=o,f.state=Y,f.context=I,o=te):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Bc(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=za(n,t.child,null,d),n.child=za(n,null,a,d)):an(t,n,a,d),n.memoizedState=f.state,t=n.child):t=Xi(t,n,d),t}function zg(t,n,a,o){return ka(),n.flags|=256,an(t,n,a,o),n.child}var bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xh(t){return{baseLanes:t,cachePool:Rp()}}function Eh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Fn),t}function Pg(t,n,a){var o=n.pendingProps,d=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(Lt.current&2)!==0),v&&(d=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Je){if(d?Hr(n):Fr(),(t=Et)?(t=Qy(t,ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Mr!==null?{id:Ti,overflow:Si}:null,retryLane:536870912,hydrationErrors:null},a=vp(t),a.return=n,n.child=a,nn=n,Et=null)):t=null,t===null)throw Lr(n);return af(t)?n.lanes=32:n.lanes=536870912,null}var x=o.children;return o=o.fallback,d?(Fr(),d=n.mode,x=Hc({mode:"hidden",children:x},d),o=Da(o,d,a,null),x.return=n,o.return=n,x.sibling=o,n.child=x,o=n.child,o.memoizedState=xh(a),o.childLanes=Eh(t,v,a),n.memoizedState=bh,Go(null,o)):(Hr(n),Th(n,x))}var I=t.memoizedState;if(I!==null&&(x=I.dehydrated,x!==null)){if(f)n.flags&256?(Hr(n),n.flags&=-257,n=Sh(t,n,a)):n.memoizedState!==null?(Fr(),n.child=t.child,n.flags|=128,n=null):(Fr(),x=o.fallback,d=n.mode,o=Hc({mode:"visible",children:o.children},d),x=Da(x,d,a,null),x.flags|=2,o.return=n,x.return=n,o.sibling=x,n.child=o,za(n,t.child,null,a),o=n.child,o.memoizedState=xh(a),o.childLanes=Eh(t,v,a),n.memoizedState=bh,n=Go(null,o));else if(Hr(n),af(x)){if(v=x.nextSibling&&x.nextSibling.dataset,v)var F=v.dgst;v=F,o=Error(s(419)),o.stack="",o.digest=v,Oo({value:o,source:null,stack:null}),n=Sh(t,n,a)}else if(Ft||ys(t,n,a,!1),v=(a&t.childLanes)!==0,Ft||v){if(v=vt,v!==null&&(o=br(v,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,Ia(t,o),jn(v,t,o),vh;rf(x)||Wc(),n=Sh(t,n,a)}else rf(x)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Et=ii(x.nextSibling),nn=n,Je=!0,Vr=null,ti=!1,t!==null&&xp(n,t),n=Th(n,o.children),n.flags|=4096);return n}return d?(Fr(),x=o.fallback,d=n.mode,I=t.child,F=I.sibling,o=qi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,F!==null?x=qi(F,x):(x=Da(x,d,a,null),x.flags|=2),x.return=n,o.return=n,o.sibling=x,n.child=o,Go(null,o),o=n.child,x=t.child.memoizedState,x===null?x=xh(a):(d=x.cachePool,d!==null?(I=Bt._currentValue,d=d.parent!==I?{parent:I,pool:I}:d):d=Rp(),x={baseLanes:x.baseLanes|a,cachePool:d}),o.memoizedState=x,o.childLanes=Eh(t,v,a),n.memoizedState=bh,Go(t.child,o)):(Hr(n),a=t.child,t=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Th(t,n){return n=Hc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hc(t,n){return t=Pn(22,t,null,n),t.lanes=0,t}function Sh(t,n,a){return za(n,t.child,null,a),t=Th(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ug(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Pd(t.return,n,a)}function wh(t,n,a,o,d,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:d,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=d,v.treeForkCount=f)}function Bg(t,n,a){var o=n.pendingProps,d=o.revealOrder,f=o.tail;o=o.children;var v=Lt.current,x=(v&2)!==0;if(x?(v=v&1|2,n.flags|=128):v&=1,Q(Lt,v),an(t,n,o,a),o=Je?ko:0,!x&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ug(t,a,n);else if(t.tag===19)Ug(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(a=n.child,d=null;a!==null;)t=a.alternate,t!==null&&Ic(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=n.child,n.child=null):(d=a.sibling,a.sibling=null),wh(n,!1,d,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&Ic(t)===null){n.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}wh(n,!0,a,null,f,o);break;case"together":wh(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Kr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ys(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ah(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ec(t)))}function Kx(t,n,a){switch(n.tag){case 3:ve(n,n.stateNode.containerInfo),zr(n,Bt,t.memoizedState.cache),ka();break;case 27:case 5:Ye(n);break;case 4:ve(n,n.stateNode.containerInfo);break;case 10:zr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Wd(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Hr(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Pg(t,n,a):(Hr(n),t=Xi(t,n,a),t!==null?t.sibling:null);Hr(n);break;case 19:var d=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ys(t,n,a,!1),o=(a&n.childLanes)!==0),d){if(o)return Bg(t,n,a);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Q(Lt,Lt.current),o)break;return null;case 22:return n.lanes=0,Og(t,n,a,n.pendingProps);case 24:zr(n,Bt,t.memoizedState.cache)}return Xi(t,n,a)}function Hg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Ft=!0;else{if(!Ah(t,a)&&(n.flags&128)===0)return Ft=!1,Kx(t,n,a);Ft=(t.flags&131072)!==0}else Ft=!1,Je&&(n.flags&1048576)!==0&&bp(n,ko,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Va(n.elementType),n.type=t,typeof t=="function")Dd(t)?(o=Ua(t,o),n.tag=1,n=Lg(null,n,t,o,a)):(n.tag=0,n=_h(null,n,t,o,a));else{if(t!=null){var d=t.$$typeof;if(d===ge){n.tag=11,n=Ig(null,n,t,o,a);break e}else if(d===w){n.tag=14,n=Dg(null,n,t,o,a);break e}}throw n=be(t)||t,Error(s(306,n,""))}}return n;case 0:return _h(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,d=Ua(o,n.pendingProps),Lg(t,n,o,d,a);case 3:e:{if(ve(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;d=f.element,Kd(t,n),Uo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,zr(n,Bt,o),o!==f.cache&&Ud(n,[Bt],a,!0),Po(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=zg(t,n,o,a);break e}else if(o!==d){d=Jn(Error(s(424)),n),Oo(d),n=zg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=ii(t.firstChild),nn=n,Je=!0,Vr=null,ti=!0,a=Op(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ka(),o===d){n=Xi(t,n,a);break e}an(t,n,o,a)}n=n.child}return n;case 26:return Bc(t,n),t===null?(a=Zy(n.type,null,n.pendingProps,null))?n.memoizedState=a:Je||(a=n.type,t=n.pendingProps,o=ru(Z.current).createElement(a),o[Dt]=n,o[tn]=t,sn(o,a,t),Vt(o),n.stateNode=o):n.memoizedState=Zy(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ye(n),t===null&&Je&&(o=n.stateNode=Xy(n.type,n.pendingProps,Z.current),nn=n,ti=!0,d=Et,Wr(n.type)?(sf=d,Et=ii(o.firstChild)):Et=d),an(t,n,n.pendingProps.children,a),Bc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Je&&((d=o=Et)&&(o=E1(o,n.type,n.pendingProps,ti),o!==null?(n.stateNode=o,nn=n,Et=ii(o.firstChild),ti=!1,d=!0):d=!1),d||Lr(n)),Ye(n),d=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,ef(d,f)?o=null:v!==null&&ef(d,v)&&(n.flags|=32),n.memoizedState!==null&&(d=Zd(t,n,Lx,null,null,a),sl._currentValue=d),Bc(t,n),an(t,n,o,a),n.child;case 6:return t===null&&Je&&((t=a=Et)&&(a=T1(a,n.pendingProps,ti),a!==null?(n.stateNode=a,nn=n,Et=null,t=!0):t=!1),t||Lr(n)),null;case 13:return Pg(t,n,a);case 4:return ve(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=za(n,null,o,a):an(t,n,o,a),n.child;case 11:return Ig(t,n,n.type,n.pendingProps,a);case 7:return an(t,n,n.pendingProps,a),n.child;case 8:return an(t,n,n.pendingProps.children,a),n.child;case 12:return an(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,zr(n,n.type,o.value),an(t,n,o.children,a),n.child;case 9:return d=n.type._context,o=n.pendingProps.children,ja(n),d=rn(d),o=o(d),n.flags|=1,an(t,n,o,a),n.child;case 14:return Dg(t,n,n.type,n.pendingProps,a);case 15:return kg(t,n,n.type,n.pendingProps,a);case 19:return Bg(t,n,a);case 31:return Gx(t,n,a);case 22:return Og(t,n,a,n.pendingProps);case 24:return ja(n),o=rn(Bt),t===null?(d=Fd(),d===null&&(d=vt,f=Bd(),d.pooledCache=f,f.refCount++,f!==null&&(d.pooledCacheLanes|=a),d=f),n.memoizedState={parent:o,cache:d},Gd(n),zr(n,Bt,d)):((t.lanes&a)!==0&&(Kd(t,n),Uo(n,null,null,a),Po()),d=t.memoizedState,f=n.memoizedState,d.parent!==o?(d={parent:o,cache:o},n.memoizedState=d,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=d),zr(n,Bt,o)):(o=f.cache,zr(n,Bt,o),o!==d.cache&&Ud(n,[Bt],a,!0))),an(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Wi(t){t.flags|=4}function Rh(t,n,a,o,d){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(py())t.flags|=8192;else throw La=Ac,qd}else t.flags&=-16777217}function Fg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!rv(n))if(py())t.flags|=8192;else throw La=Ac,qd}function Fc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ho():536870912,t.lanes|=n,Ns|=n)}function Ko(t,n){if(!Je)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Tt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,o|=d.subtreeFlags&65011712,o|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Qx(t,n,a){var o=n.pendingProps;switch(Md(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(n),null;case 1:return Tt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(Bt),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(gs(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ld())),Tt(n),null;case 26:var d=n.type,f=n.memoizedState;return t===null?(Wi(n),f!==null?(Tt(n),Fg(n,f)):(Tt(n),Rh(n,d,null,o,a))):f?f!==t.memoizedState?(Wi(n),Tt(n),Fg(n,f)):(Tt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Wi(n),Tt(n),Rh(n,d,t,o,a)),null;case 27:if(Fe(n),a=Z.current,d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Tt(n),null}t=fe.current,gs(n)?Ep(n):(t=Xy(d,o,a),n.stateNode=t,Wi(n))}return Tt(n),null;case 5:if(Fe(n),d=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Tt(n),null}if(f=fe.current,gs(n))Ep(n);else{var v=ru(Z.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(d,{is:o.is}):v.createElement(d)}}f[Dt]=n,f[tn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(sn(f,d,o),d){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Wi(n)}}return Tt(n),Rh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Z.current,gs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,d=nn,d!==null)switch(d.tag){case 27:case 5:o=d.memoizedProps}t[Dt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Py(t.nodeValue,a)),t||Lr(n,!0)}else t=ru(t).createTextNode(o),t[Dt]=n,n.stateNode=t}return Tt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=gs(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Dt]=n}else ka(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Tt(n),t=!1}else a=Ld(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Bn(n),n):(Bn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Tt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=gs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!d)throw Error(s(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[Dt]=n}else ka(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Tt(n),d=!1}else d=Ld(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return n.flags&256?(Bn(n),n):(Bn(n),null)}return Bn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,d=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(d=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==d&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Fc(n,n.updateQueue),Tt(n),null);case 4:return Te(),t===null&&$h(n.stateNode.containerInfo),Tt(n),null;case 10:return Qi(n.type),Tt(n),null;case 19:if(M(Lt),o=n.memoizedState,o===null)return Tt(n),null;if(d=(n.flags&128)!==0,f=o.rendering,f===null)if(d)Ko(o,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ic(t),f!==null){for(n.flags|=128,Ko(o,!1),t=f.updateQueue,n.updateQueue=t,Fc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)yp(a,t),a=a.sibling;return Q(Lt,Lt.current&1|2),Je&&Gi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Le()>Yc&&(n.flags|=128,d=!0,Ko(o,!1),n.lanes=4194304)}else{if(!d)if(t=Ic(f),t!==null){if(n.flags|=128,d=!0,t=t.updateQueue,n.updateQueue=t,Fc(n,t),Ko(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Je)return Tt(n),null}else 2*Le()-o.renderingStartTime>Yc&&a!==536870912&&(n.flags|=128,d=!0,Ko(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Le(),t.sibling=null,a=Lt.current,Q(Lt,d?a&1|2:a&1),Je&&Gi(n,o.treeForkCount),t):(Tt(n),null);case 22:case 23:return Bn(n),Xd(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Tt(n),n.subtreeFlags&6&&(n.flags|=8192)):Tt(n),a=n.updateQueue,a!==null&&Fc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&M(Ma),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(Bt),Tt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Yx(t,n){switch(Md(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(Bt),Te(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 31:if(n.memoizedState!==null){if(Bn(n),n.alternate===null)throw Error(s(340));ka()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Bn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ka()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return M(Lt),null;case 4:return Te(),null;case 10:return Qi(n.type),null;case 22:case 23:return Bn(n),Xd(),t!==null&&M(Ma),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(Bt),null;case 25:return null;default:return null}}function qg(t,n){switch(Md(n),n.tag){case 3:Qi(Bt),Te();break;case 26:case 27:case 5:Fe(n);break;case 4:Te();break;case 31:n.memoizedState!==null&&Bn(n);break;case 13:Bn(n);break;case 19:M(Lt);break;case 10:Qi(n.type);break;case 22:case 23:Bn(n),Xd(),t!==null&&M(Ma);break;case 24:Qi(Bt)}}function Qo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var d=o.next;a=d;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==d)}}catch(x){ht(n,n.return,x)}}function qr(t,n,a){try{var o=n.updateQueue,d=o!==null?o.lastEffect:null;if(d!==null){var f=d.next;o=f;do{if((o.tag&t)===t){var v=o.inst,x=v.destroy;if(x!==void 0){v.destroy=void 0,d=n;var I=a,F=x;try{F()}catch(te){ht(d,I,te)}}}o=o.next}while(o!==f)}}catch(te){ht(n,n.return,te)}}function Gg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mp(n,a)}catch(o){ht(t,t.return,o)}}}function Kg(t,n,a){a.props=Ua(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){ht(t,n,o)}}function Yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(d){ht(t,n,d)}}function wi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(d){ht(t,n,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){ht(t,n,d)}else a.current=null}function Qg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(d){ht(t,t.return,d)}}function Ch(t,n,a){try{var o=t.stateNode;g1(o,t.type,a,n),o[tn]=n}catch(d){ht(t,t.return,d)}}function Yg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wr(t.type)||t.tag===4}function Nh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ih(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$t));else if(o!==4&&(o===27&&Wr(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ih(t,n,a),t=t.sibling;t!==null;)Ih(t,n,a),t=t.sibling}function qc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(qc(t,n,a),t=t.sibling;t!==null;)qc(t,n,a),t=t.sibling}function $g(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,d=n.attributes;d.length;)n.removeAttributeNode(d[0]);sn(n,o,a),n[Dt]=t,n[tn]=a}catch(f){ht(t,t.return,f)}}var Ji=!1,qt=!1,Dh=!1,Xg=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function $x(t,n){if(t=t.containerInfo,Jh=du,t=lp(t),Sd(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var d=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,x=-1,I=-1,F=0,te=0,re=t,q=null;t:for(;;){for(var Y;re!==a||d!==0&&re.nodeType!==3||(x=v+d),re!==f||o!==0&&re.nodeType!==3||(I=v+o),re.nodeType===3&&(v+=re.nodeValue.length),(Y=re.firstChild)!==null;)q=re,re=Y;for(;;){if(re===t)break t;if(q===a&&++F===d&&(x=v),q===f&&++te===o&&(I=v),(Y=re.nextSibling)!==null)break;re=q,q=re.parentNode}re=Y}a=x===-1||I===-1?null:{start:x,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zh={focusedElem:t,selectionRange:a},du=!1,Jt=n;Jt!==null;)if(n=Jt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Jt=t;else for(;Jt!==null;){switch(n=Jt,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)d=t[a],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,d=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ee=Ua(a.type,d);t=o.getSnapshotBeforeUpdate(Ee,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Oe){ht(a,a.return,Oe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)nf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Jt=t;break}Jt=n.return}}function Wg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:er(t,a),o&4&&Qo(5,a);break;case 1:if(er(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){ht(a,a.return,v)}else{var d=Ua(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(d,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){ht(a,a.return,v)}}o&64&&Gg(a),o&512&&Yo(a,a.return);break;case 3:if(er(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mp(t,n)}catch(v){ht(a,a.return,v)}}break;case 27:n===null&&o&4&&$g(a);case 26:case 5:er(t,a),n===null&&o&4&&Qg(a),o&512&&Yo(a,a.return);break;case 12:er(t,a);break;case 31:er(t,a),o&4&&ey(t,a);break;case 13:er(t,a),o&4&&ty(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=r1.bind(null,a),S1(t,a))));break;case 22:if(o=a.memoizedState!==null||Ji,!o){n=n!==null&&n.memoizedState!==null||qt,d=Ji;var f=qt;Ji=o,(qt=n)&&!f?tr(t,a,(a.subtreeFlags&8772)!==0):er(t,a),Ji=d,qt=f}break;case 30:break;default:er(t,a)}}function Jg(t){var n=t.alternate;n!==null&&(t.alternate=null,Jg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&va(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var At=null,In=!1;function Zi(t,n,a){for(a=a.child;a!==null;)Zg(t,n,a),a=a.sibling}function Zg(t,n,a){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(dn,a)}catch{}switch(a.tag){case 26:qt||wi(a,n),Zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qt||wi(a,n);var o=At,d=In;Wr(a.type)&&(At=a.stateNode,In=!1),Zi(t,n,a),il(a.stateNode),At=o,In=d;break;case 5:qt||wi(a,n);case 6:if(o=At,d=In,At=null,Zi(t,n,a),At=o,In=d,At!==null)if(In)try{(At.nodeType===9?At.body:At.nodeName==="HTML"?At.ownerDocument.body:At).removeChild(a.stateNode)}catch(f){ht(a,n,f)}else try{At.removeChild(a.stateNode)}catch(f){ht(a,n,f)}break;case 18:At!==null&&(In?(t=At,Gy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ls(t)):Gy(At,a.stateNode));break;case 4:o=At,d=In,At=a.stateNode.containerInfo,In=!0,Zi(t,n,a),At=o,In=d;break;case 0:case 11:case 14:case 15:qr(2,a,n),qt||qr(4,a,n),Zi(t,n,a);break;case 1:qt||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Kg(a,n,o)),Zi(t,n,a);break;case 21:Zi(t,n,a);break;case 22:qt=(o=qt)||a.memoizedState!==null,Zi(t,n,a),qt=o;break;default:Zi(t,n,a)}}function ey(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ls(t)}catch(a){ht(n,n.return,a)}}}function ty(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ls(t)}catch(a){ht(n,n.return,a)}}function Xx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Xg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Xg),n;default:throw Error(s(435,t.tag))}}function Gc(t,n){var a=Xx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var d=a1.bind(null,t,o);o.then(d,d)}})}function Dn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var d=a[o],f=t,v=n,x=v;e:for(;x!==null;){switch(x.tag){case 27:if(Wr(x.type)){At=x.stateNode,In=!1;break e}break;case 5:At=x.stateNode,In=!1;break e;case 3:case 4:At=x.stateNode.containerInfo,In=!0;break e}x=x.return}if(At===null)throw Error(s(160));Zg(f,v,d),At=null,In=!1,f=d.alternate,f!==null&&(f.return=null),d.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ny(n,t),n=n.sibling}var di=null;function ny(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Dn(n,t),kn(t),o&4&&(qr(3,t,t.return),Qo(3,t),qr(5,t,t.return));break;case 1:Dn(n,t),kn(t),o&512&&(qt||a===null||wi(a,a.return)),o&64&&Ji&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var d=di;if(Dn(n,t),kn(t),o&512&&(qt||a===null||wi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,d=d.ownerDocument||d;t:switch(o){case"title":f=d.getElementsByTagName("title")[0],(!f||f[Vi]||f[Dt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=d.createElement(o),d.head.insertBefore(f,d.querySelector("head > title"))),sn(f,o,a),f[Dt]=t,Vt(f),o=f;break e;case"link":var v=nv("link","href",d).get(o+(a.href||""));if(v){for(var x=0;x<v.length;x++)if(f=v[x],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(x,1);break t}}f=d.createElement(o),sn(f,o,a),d.head.appendChild(f);break;case"meta":if(v=nv("meta","content",d).get(o+(a.content||""))){for(x=0;x<v.length;x++)if(f=v[x],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(x,1);break t}}f=d.createElement(o),sn(f,o,a),d.head.appendChild(f);break;default:throw Error(s(468,o))}f[Dt]=t,Vt(f),o=f}t.stateNode=o}else iv(d,t.type,t.stateNode);else t.stateNode=tv(d,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?iv(d,t.type,t.stateNode):tv(d,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ch(t,t.memoizedProps,a.memoizedProps)}break;case 27:Dn(n,t),kn(t),o&512&&(qt||a===null||wi(a,a.return)),a!==null&&o&4&&Ch(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Dn(n,t),kn(t),o&512&&(qt||a===null||wi(a,a.return)),t.flags&32){d=t.stateNode;try{Xn(d,"")}catch(Ee){ht(t,t.return,Ee)}}o&4&&t.stateNode!=null&&(d=t.memoizedProps,Ch(t,d,a!==null?a.memoizedProps:d)),o&1024&&(Dh=!0);break;case 6:if(Dn(n,t),kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ee){ht(t,t.return,Ee)}}break;case 3:if(ou=null,d=di,di=au(n.containerInfo),Dn(n,t),di=d,kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ls(n.containerInfo)}catch(Ee){ht(t,t.return,Ee)}Dh&&(Dh=!1,iy(t));break;case 4:o=di,di=au(t.stateNode.containerInfo),Dn(n,t),kn(t),di=o;break;case 12:Dn(n,t),kn(t);break;case 31:Dn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gc(t,o)));break;case 13:Dn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Qc=Le()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gc(t,o)));break;case 22:d=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,F=Ji,te=qt;if(Ji=F||d,qt=te||I,Dn(n,t),qt=te,Ji=F,kn(t),o&8192)e:for(n=t.stateNode,n._visibility=d?n._visibility&-2:n._visibility|1,d&&(a===null||I||Ji||qt||Ba(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,d)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{x=I.stateNode;var re=I.memoizedProps.style,q=re!=null&&re.hasOwnProperty("display")?re.display:null;x.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(Ee){ht(I,I.return,Ee)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=d?"":I.memoizedProps}catch(Ee){ht(I,I.return,Ee)}}}else if(n.tag===18){if(a===null){I=n;try{var Y=I.stateNode;d?Ky(Y,!0):Ky(I.stateNode,!1)}catch(Ee){ht(I,I.return,Ee)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Gc(t,a))));break;case 19:Dn(n,t),kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Gc(t,o)));break;case 30:break;case 21:break;default:Dn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Yg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var d=a.stateNode,f=Nh(t);qc(t,f,d);break;case 5:var v=a.stateNode;a.flags&32&&(Xn(v,""),a.flags&=-33);var x=Nh(t);qc(t,x,v);break;case 3:case 4:var I=a.stateNode.containerInfo,F=Nh(t);Ih(t,F,I);break;default:throw Error(s(161))}}catch(te){ht(t,t.return,te)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function iy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;iy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function er(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wg(t,n.alternate,n),n=n.sibling}function Ba(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:qr(4,n,n.return),Ba(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Kg(n,n.return,a),Ba(n);break;case 27:il(n.stateNode);case 26:case 5:wi(n,n.return),Ba(n);break;case 22:n.memoizedState===null&&Ba(n);break;case 30:Ba(n);break;default:Ba(n)}t=t.sibling}}function tr(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,d=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:tr(d,f,a),Qo(4,f);break;case 1:if(tr(d,f,a),o=f,d=o.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(F){ht(o,o.return,F)}if(o=f,d=o.updateQueue,d!==null){var x=o.stateNode;try{var I=d.shared.hiddenCallbacks;if(I!==null)for(d.shared.hiddenCallbacks=null,d=0;d<I.length;d++)jp(I[d],x)}catch(F){ht(o,o.return,F)}}a&&v&64&&Gg(f),Yo(f,f.return);break;case 27:$g(f);case 26:case 5:tr(d,f,a),a&&o===null&&v&4&&Qg(f),Yo(f,f.return);break;case 12:tr(d,f,a);break;case 31:tr(d,f,a),a&&v&4&&ey(d,f);break;case 13:tr(d,f,a),a&&v&4&&ty(d,f);break;case 22:f.memoizedState===null&&tr(d,f,a),Yo(f,f.return);break;case 30:break;default:tr(d,f,a)}n=n.sibling}}function kh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&jo(a))}function Oh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jo(t))}function hi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ry(t,n,a,o),n=n.sibling}function ry(t,n,a,o){var d=n.flags;switch(n.tag){case 0:case 11:case 15:hi(t,n,a,o),d&2048&&Qo(9,n);break;case 1:hi(t,n,a,o);break;case 3:hi(t,n,a,o),d&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&jo(t)));break;case 12:if(d&2048){hi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,x=f.onPostCommit;typeof x=="function"&&x(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){ht(n,n.return,I)}}else hi(t,n,a,o);break;case 31:hi(t,n,a,o);break;case 13:hi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?hi(t,n,a,o):$o(t,n):f._visibility&2?hi(t,n,a,o):(f._visibility|=2,As(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),d&2048&&kh(v,n);break;case 24:hi(t,n,a,o),d&2048&&Oh(n.alternate,n);break;default:hi(t,n,a,o)}}function As(t,n,a,o,d){for(d=d&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,x=a,I=o,F=v.flags;switch(v.tag){case 0:case 11:case 15:As(f,v,x,I,d),Qo(8,v);break;case 23:break;case 22:var te=v.stateNode;v.memoizedState!==null?te._visibility&2?As(f,v,x,I,d):$o(f,v):(te._visibility|=2,As(f,v,x,I,d)),d&&F&2048&&kh(v.alternate,v);break;case 24:As(f,v,x,I,d),d&&F&2048&&Oh(v.alternate,v);break;default:As(f,v,x,I,d)}n=n.sibling}}function $o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,d=o.flags;switch(o.tag){case 22:$o(a,o),d&2048&&kh(o.alternate,o);break;case 24:$o(a,o),d&2048&&Oh(o.alternate,o);break;default:$o(a,o)}n=n.sibling}}var Xo=8192;function Rs(t,n,a){if(t.subtreeFlags&Xo)for(t=t.child;t!==null;)ay(t,n,a),t=t.sibling}function ay(t,n,a){switch(t.tag){case 26:Rs(t,n,a),t.flags&Xo&&t.memoizedState!==null&&V1(a,di,t.memoizedState,t.memoizedProps);break;case 5:Rs(t,n,a);break;case 3:case 4:var o=di;di=au(t.stateNode.containerInfo),Rs(t,n,a),di=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Xo,Xo=16777216,Rs(t,n,a),Xo=o):Rs(t,n,a));break;default:Rs(t,n,a)}}function sy(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jt=o,ly(o,t)}sy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)oy(t),t=t.sibling}function oy(t){switch(t.tag){case 0:case 11:case 15:Wo(t),t.flags&2048&&qr(9,t,t.return);break;case 3:Wo(t);break;case 12:Wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kc(t)):Wo(t);break;default:Wo(t)}}function Kc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Jt=o,ly(o,t)}sy(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qr(8,n,n.return),Kc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kc(n));break;default:Kc(n)}t=t.sibling}}function ly(t,n){for(;Jt!==null;){var a=Jt;switch(a.tag){case 0:case 11:case 15:qr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:jo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Jt=o;else e:for(a=t;Jt!==null;){o=Jt;var d=o.sibling,f=o.return;if(Jg(o),o===a){Jt=null;break e}if(d!==null){d.return=f,Jt=d;break e}Jt=f}}}var Wx={getCacheForType:function(t){var n=rn(Bt),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return rn(Bt).controller.signal}},Jx=typeof WeakMap=="function"?WeakMap:Map,lt=0,vt=null,Ke=null,$e=0,dt=0,Hn=null,Gr=!1,Cs=!1,jh=!1,nr=0,jt=0,Kr=0,Ha=0,Mh=0,Fn=0,Ns=0,Jo=null,On=null,Vh=!1,Qc=0,cy=0,Yc=1/0,$c=null,Qr=null,Kt=0,Yr=null,Is=null,ir=0,Lh=0,zh=null,uy=null,Zo=0,Ph=null;function qn(){return(lt&2)!==0&&$e!==0?$e&-$e:L.T!==null?Gh():Mi()}function dy(){if(Fn===0)if(($e&536870912)===0||Je){var t=pi;pi<<=1,(pi&3932160)===0&&(pi=262144),Fn=t}else Fn=536870912;return t=Un.current,t!==null&&(t.flags|=32),Fn}function jn(t,n,a){(t===vt&&(dt===2||dt===9)||t.cancelPendingCommit!==null)&&(Ds(t,0),$r(t,$e,Fn,!1)),vr(t,a),((lt&2)===0||t!==vt)&&(t===vt&&((lt&2)===0&&(Ha|=a),jt===4&&$r(t,$e,Fn,!1)),Ai(t))}function hy(t,n,a){if((lt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||yr(t,n),d=o?t1(t,n):Bh(t,n,!0),f=o;do{if(d===0){Cs&&!o&&$r(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Zx(a)){d=Bh(t,n,!1),f=!1;continue}if(d===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var x=t;d=Jo;var I=x.current.memoizedState.isDehydrated;if(I&&(Ds(x,v).flags|=256),v=Bh(x,v,!1),v!==2){if(jh&&!I){x.errorRecoveryDisabledLanes|=f,Ha|=f,d=4;break e}f=On,On=d,f!==null&&(On===null?On=f:On.push.apply(On,f))}d=v}if(f=!1,d!==2)continue}}if(d===1){Ds(t,0),$r(t,n,0,!0);break}e:{switch(o=t,f=d,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:$r(o,n,Fn,!Gr);break e;case 2:On=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(d=Qc+300-Le(),10<d)){if($r(o,n,Fn,!Gr),Yn(o,0,!0)!==0)break e;ir=n,o.timeoutHandle=Fy(fy.bind(null,o,a,On,$c,Vh,n,Fn,Ha,Ns,Gr,f,"Throttled",-0,0),d);break e}fy(o,a,On,$c,Vh,n,Fn,Ha,Ns,Gr,f,null,-0,0)}}break}while(!0);Ai(t)}function fy(t,n,a,o,d,f,v,x,I,F,te,re,q,Y){if(t.timeoutHandle=-1,re=n.subtreeFlags,re&8192||(re&16785408)===16785408){re={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},ay(n,f,re);var Ee=(f&62914560)===f?Qc-Le():(f&4194048)===f?cy-Le():0;if(Ee=L1(re,Ee),Ee!==null){ir=f,t.cancelPendingCommit=Ee(xy.bind(null,t,n,f,a,o,d,v,x,I,te,re,null,q,Y)),$r(t,f,v,!F);return}}xy(t,n,f,a,o,d,v,x,I)}function Zx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var d=a[o],f=d.getSnapshot;d=d.value;try{if(!zn(f(),d))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $r(t,n,a,o){n&=~Mh,n&=~Ha,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var d=n;0<d;){var f=31-En(d),v=1<<f;o[f]=-1,d&=~v}a!==0&&fo(t,a,n)}function Xc(){return(lt&6)===0?(el(0),!1):!0}function Uh(){if(Ke!==null){if(dt===0)var t=Ke.return;else t=Ke,Ki=Oa=null,nh(t),xs=null,Vo=0,t=Ke;for(;t!==null;)qg(t.alternate,t),t=t.return;Ke=null}}function Ds(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,_1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ir=0,Uh(),vt=t,Ke=a=qi(t.current,null),$e=n,dt=0,Hn=null,Gr=!1,Cs=yr(t,n),jh=!1,Ns=Fn=Mh=Ha=Kr=jt=0,On=Jo=null,Vh=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var d=31-En(o),f=1<<d;n|=t[d],o&=~f}return nr=n,yc(),a}function my(t,n){Be=null,L.H=qo,n===bs||n===wc?(n=Ip(),dt=3):n===qd?(n=Ip(),dt=4):dt=n===vh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Hn=n,Ke===null&&(jt=1,Pc(t,Jn(n,t.current)))}function py(){var t=Un.current;return t===null?!0:($e&4194048)===$e?ni===null:($e&62914560)===$e||($e&536870912)!==0?t===ni:!1}function gy(){var t=L.H;return L.H=qo,t===null?qo:t}function yy(){var t=L.A;return L.A=Wx,t}function Wc(){jt=4,Gr||($e&4194048)!==$e&&Un.current!==null||(Cs=!0),(Kr&134217727)===0&&(Ha&134217727)===0||vt===null||$r(vt,$e,Fn,!1)}function Bh(t,n,a){var o=lt;lt|=2;var d=gy(),f=yy();(vt!==t||$e!==n)&&($c=null,Ds(t,n)),n=!1;var v=jt;e:do try{if(dt!==0&&Ke!==null){var x=Ke,I=Hn;switch(dt){case 8:Uh(),v=6;break e;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var F=dt;if(dt=0,Hn=null,ks(t,x,I,F),a&&Cs){v=0;break e}break;default:F=dt,dt=0,Hn=null,ks(t,x,I,F)}}e1(),v=jt;break}catch(te){my(t,te)}while(!0);return n&&t.shellSuspendCounter++,Ki=Oa=null,lt=o,L.H=d,L.A=f,Ke===null&&(vt=null,$e=0,yc()),v}function e1(){for(;Ke!==null;)vy(Ke)}function t1(t,n){var a=lt;lt|=2;var o=gy(),d=yy();vt!==t||$e!==n?($c=null,Yc=Le()+500,Ds(t,n)):Cs=yr(t,n);e:do try{if(dt!==0&&Ke!==null){n=Ke;var f=Hn;t:switch(dt){case 1:dt=0,Hn=null,ks(t,n,f,1);break;case 2:case 9:if(Cp(f)){dt=0,Hn=null,_y(n);break}n=function(){dt!==2&&dt!==9||vt!==t||(dt=7),Ai(t)},f.then(n,n);break e;case 3:dt=7;break e;case 4:dt=5;break e;case 7:Cp(f)?(dt=0,Hn=null,_y(n)):(dt=0,Hn=null,ks(t,n,f,7));break;case 5:var v=null;switch(Ke.tag){case 26:v=Ke.memoizedState;case 5:case 27:var x=Ke;if(v?rv(v):x.stateNode.complete){dt=0,Hn=null;var I=x.sibling;if(I!==null)Ke=I;else{var F=x.return;F!==null?(Ke=F,Jc(F)):Ke=null}break t}}dt=0,Hn=null,ks(t,n,f,5);break;case 6:dt=0,Hn=null,ks(t,n,f,6);break;case 8:Uh(),jt=6;break e;default:throw Error(s(462))}}n1();break}catch(te){my(t,te)}while(!0);return Ki=Oa=null,L.H=o,L.A=d,lt=a,Ke!==null?0:(vt=null,$e=0,yc(),jt)}function n1(){for(;Ke!==null&&!ke();)vy(Ke)}function vy(t){var n=Hg(t.alternate,t,nr);t.memoizedProps=t.pendingProps,n===null?Jc(t):Ke=n}function _y(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Vg(a,n,n.pendingProps,n.type,void 0,$e);break;case 11:n=Vg(a,n,n.pendingProps,n.type.render,n.ref,$e);break;case 5:nh(n);default:qg(a,n),n=Ke=yp(n,nr),n=Hg(a,n,nr)}t.memoizedProps=t.pendingProps,n===null?Jc(t):Ke=n}function ks(t,n,a,o){Ki=Oa=null,nh(n),xs=null,Vo=0;var d=n.return;try{if(qx(t,d,n,a,$e)){jt=1,Pc(t,Jn(a,t.current)),Ke=null;return}}catch(f){if(d!==null)throw Ke=d,f;jt=1,Pc(t,Jn(a,t.current)),Ke=null;return}n.flags&32768?(Je||o===1?t=!0:Cs||($e&536870912)!==0?t=!1:(Gr=t=!0,(o===2||o===9||o===3||o===6)&&(o=Un.current,o!==null&&o.tag===13&&(o.flags|=16384))),by(n,t)):Jc(n)}function Jc(t){var n=t;do{if((n.flags&32768)!==0){by(n,Gr);return}t=n.return;var a=Qx(n.alternate,n,nr);if(a!==null){Ke=a;return}if(n=n.sibling,n!==null){Ke=n;return}Ke=n=t}while(n!==null);jt===0&&(jt=5)}function by(t,n){do{var a=Yx(t.alternate,t);if(a!==null){a.flags&=32767,Ke=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ke=t;return}Ke=t=a}while(t!==null);jt=6,Ke=null}function xy(t,n,a,o,d,f,v,x,I){t.cancelPendingCommit=null;do Zc();while(Kt!==0);if((lt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Nd,en(t,a,f,v,x,I),t===vt&&(Ke=vt=null,$e=0),Is=n,Yr=t,ir=a,Lh=f,zh=d,uy=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,s1(xn,function(){return Ay(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,d=B.p,B.p=2,v=lt,lt|=4;try{$x(t,n,a)}finally{lt=v,B.p=d,L.T=o}}Kt=1,Ey(),Ty(),Sy()}}function Ey(){if(Kt===1){Kt=0;var t=Yr,n=Is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=B.p;B.p=2;var d=lt;lt|=4;try{ny(n,t);var f=Zh,v=lp(t.containerInfo),x=f.focusedElem,I=f.selectionRange;if(v!==x&&x&&x.ownerDocument&&op(x.ownerDocument.documentElement,x)){if(I!==null&&Sd(x)){var F=I.start,te=I.end;if(te===void 0&&(te=F),"selectionStart"in x)x.selectionStart=F,x.selectionEnd=Math.min(te,x.value.length);else{var re=x.ownerDocument||document,q=re&&re.defaultView||window;if(q.getSelection){var Y=q.getSelection(),Ee=x.textContent.length,Oe=Math.min(I.start,Ee),gt=I.end===void 0?Oe:Math.min(I.end,Ee);!Y.extend&&Oe>gt&&(v=gt,gt=Oe,Oe=v);var P=sp(x,Oe),V=sp(x,gt);if(P&&V&&(Y.rangeCount!==1||Y.anchorNode!==P.node||Y.anchorOffset!==P.offset||Y.focusNode!==V.node||Y.focusOffset!==V.offset)){var H=re.createRange();H.setStart(P.node,P.offset),Y.removeAllRanges(),Oe>gt?(Y.addRange(H),Y.extend(V.node,V.offset)):(H.setEnd(V.node,V.offset),Y.addRange(H))}}}}for(re=[],Y=x;Y=Y.parentNode;)Y.nodeType===1&&re.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<re.length;x++){var ie=re[x];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}du=!!Jh,Zh=Jh=null}finally{lt=d,B.p=o,L.T=a}}t.current=n,Kt=2}}function Ty(){if(Kt===2){Kt=0;var t=Yr,n=Is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=B.p;B.p=2;var d=lt;lt|=4;try{Wg(t,n.alternate,n)}finally{lt=d,B.p=o,L.T=a}}Kt=3}}function Sy(){if(Kt===4||Kt===3){Kt=0,st();var t=Yr,n=Is,a=ir,o=uy;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Kt=5:(Kt=0,Is=Yr=null,wy(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Qr=null),po(a),n=n.stateNode,hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(dn,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,d=B.p,B.p=2,L.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var x=o[v];f(x.value,{componentStack:x.stack})}}finally{L.T=n,B.p=d}}(ir&3)!==0&&Zc(),Ai(t),d=t.pendingLanes,(a&261930)!==0&&(d&42)!==0?t===Ph?Zo++:(Zo=0,Ph=t):Zo=0,el(0)}}function wy(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,jo(n)))}function Zc(){return Ey(),Ty(),Sy(),Ay()}function Ay(){if(Kt!==5)return!1;var t=Yr,n=Lh;Lh=0;var a=po(ir),o=L.T,d=B.p;try{B.p=32>a?32:a,L.T=null,a=zh,zh=null;var f=Yr,v=ir;if(Kt=0,Is=Yr=null,ir=0,(lt&6)!==0)throw Error(s(331));var x=lt;if(lt|=4,oy(f.current),ry(f,f.current,v,a),lt=x,el(0,!1),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(dn,f)}catch{}return!0}finally{B.p=d,L.T=o,wy(t,n)}}function Ry(t,n,a){n=Jn(a,n),n=yh(t.stateNode,n,2),t=Br(t,n,2),t!==null&&(vr(t,2),Ai(t))}function ht(t,n,a){if(t.tag===3)Ry(t,t,a);else for(;n!==null;){if(n.tag===3){Ry(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qr===null||!Qr.has(o))){t=Jn(a,t),a=Cg(2),o=Br(n,a,2),o!==null&&(Ng(a,o,n,t),vr(o,2),Ai(o));break}}n=n.return}}function Hh(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Jx;var d=new Set;o.set(n,d)}else d=o.get(n),d===void 0&&(d=new Set,o.set(n,d));d.has(a)||(jh=!0,d.add(a),t=i1.bind(null,t,n,a),n.then(t,t))}function i1(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,vt===t&&($e&a)===a&&(jt===4||jt===3&&($e&62914560)===$e&&300>Le()-Qc?(lt&2)===0&&Ds(t,0):Mh|=a,Ns===$e&&(Ns=0)),Ai(t)}function Cy(t,n){n===0&&(n=ho()),t=Ia(t,n),t!==null&&(vr(t,n),Ai(t))}function r1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Cy(t,a)}function a1(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Cy(t,a)}function s1(t,n){return ee(t,n)}var eu=null,Os=null,Fh=!1,tu=!1,qh=!1,Xr=0;function Ai(t){t!==Os&&t.next===null&&(Os===null?eu=Os=t:Os=Os.next=t),tu=!0,Fh||(Fh=!0,l1())}function el(t,n){if(!qh&&tu){qh=!0;do for(var a=!1,o=eu;o!==null;){if(t!==0){var d=o.pendingLanes;if(d===0)var f=0;else{var v=o.suspendedLanes,x=o.pingedLanes;f=(1<<31-En(42|t)+1)-1,f&=d&~(v&~x),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ky(o,f))}else f=$e,f=Yn(o,o===vt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||yr(o,f)||(a=!0,ky(o,f));o=o.next}while(a);qh=!1}}function o1(){Ny()}function Ny(){tu=Fh=!1;var t=0;Xr!==0&&v1()&&(t=Xr);for(var n=Le(),a=null,o=eu;o!==null;){var d=o.next,f=Iy(o,n);f===0?(o.next=null,a===null?eu=d:a.next=d,d===null&&(Os=a)):(a=o,(t!==0||(f&3)!==0)&&(tu=!0)),o=d}Kt!==0&&Kt!==5||el(t),Xr!==0&&(Xr=0)}function Iy(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,d=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-En(f),x=1<<v,I=d[v];I===-1?((x&a)===0||(x&o)!==0)&&(d[v]=Za(x,n)):I<=n&&(t.expiredLanes|=x),f&=~x}if(n=vt,a=$e,a=Yn(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(dt===2||dt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&we(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||yr(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&we(o),po(a)){case 2:case 8:a=ot;break;case 32:a=xn;break;case 268435456:a=si;break;default:a=xn}return o=Dy.bind(null,t),a=ee(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&we(o),t.callbackPriority=2,t.callbackNode=null,2}function Dy(t,n){if(Kt!==0&&Kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Zc()&&t.callbackNode!==a)return null;var o=$e;return o=Yn(t,t===vt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(hy(t,o,n),Iy(t,Le()),t.callbackNode!=null&&t.callbackNode===a?Dy.bind(null,t):null)}function ky(t,n){if(Zc())return null;hy(t,n,!0)}function l1(){b1(function(){(lt&6)!==0?ee(bt,o1):Ny()})}function Gh(){if(Xr===0){var t=vs;t===0&&(t=ya,ya<<=1,(ya&261888)===0&&(ya=256)),Xr=t}return Xr}function Oy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bi(""+t)}function jy(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function c1(t,n,a,o,d){if(n==="submit"&&a&&a.stateNode===d){var f=Oy((d[tn]||null).action),v=o.submitter;v&&(n=(n=v[tn]||null)?Oy(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var x=new Ta("action","action",null,o,d);t.push({event:x,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xr!==0){var I=v?jy(d,v):new FormData(d);dh(a,{pending:!0,data:I,method:d.method,action:f},null,I)}}else typeof f=="function"&&(x.preventDefault(),I=v?jy(d,v):new FormData(d),dh(a,{pending:!0,data:I,method:d.method,action:f},f,I))},currentTarget:d}]})}}for(var Kh=0;Kh<Cd.length;Kh++){var Qh=Cd[Kh],u1=Qh.toLowerCase(),d1=Qh[0].toUpperCase()+Qh.slice(1);ui(u1,"on"+d1)}ui(dp,"onAnimationEnd"),ui(hp,"onAnimationIteration"),ui(fp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(Rx,"onTransitionRun"),ui(Cx,"onTransitionStart"),ui(Nx,"onTransitionCancel"),ui(mp,"onTransitionEnd"),_i("onMouseEnter",["mouseout","mouseover"]),_i("onMouseLeave",["mouseout","mouseover"]),_i("onPointerEnter",["pointerout","pointerover"]),_i("onPointerLeave",["pointerout","pointerover"]),Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function My(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],d=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var x=o[v],I=x.instance,F=x.currentTarget;if(x=x.listener,I!==f&&d.isPropagationStopped())break e;f=x,d.currentTarget=F;try{f(d)}catch(te){gc(te)}d.currentTarget=null,f=I}else for(v=0;v<o.length;v++){if(x=o[v],I=x.instance,F=x.currentTarget,x=x.listener,I!==f&&d.isPropagationStopped())break e;f=x,d.currentTarget=F;try{f(d)}catch(te){gc(te)}d.currentTarget=null,f=I}}}}function Qe(t,n){var a=n[xr];a===void 0&&(a=n[xr]=new Set);var o=t+"__bubble";a.has(o)||(Vy(n,t,2,!1),a.add(o))}function Yh(t,n,a){var o=0;n&&(o|=4),Vy(a,t,o,n)}var nu="_reactListening"+Math.random().toString(36).slice(2);function $h(t){if(!t[nu]){t[nu]=!0,es.forEach(function(a){a!=="selectionchange"&&(h1.has(a)||Yh(a,!1,t),Yh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nu]||(n[nu]=!0,Yh("selectionchange",!1,n))}}function Vy(t,n,a,o){switch(dv(n)){case 2:var d=U1;break;case 8:d=B1;break;default:d=df}a=d.bind(null,n,a,t),d=void 0,!To||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),o?d!==void 0?t.addEventListener(n,a,{capture:!0,passive:d}):t.addEventListener(n,a,!0):d!==void 0?t.addEventListener(n,a,{passive:d}):t.addEventListener(n,a,!1)}function Xh(t,n,a,o,d){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var x=o.stateNode.containerInfo;if(x===d)break;if(v===4)for(v=o.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===d)return;v=v.return}for(;x!==null;){if(v=Li(x),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){o=f=v;continue e}x=x.parentNode}}o=o.return}ec(function(){var F=f,te=as(a),re=[];e:{var q=pp.get(t);if(q!==void 0){var Y=Ta,Ee=t;switch(t){case"keypress":if(Ea(a)===0)break e;case"keydown":case"keyup":Y=cc;break;case"focusin":Ee="focus",Y=Dr;break;case"focusout":Ee="blur",Y=Dr;break;case"beforeblur":case"afterblur":Y=Dr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=ic;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=dc;break;case dp:case hp:case fp:Y=ls;break;case mp:Y=cs;break;case"scroll":case"scrollend":Y=tc;break;case"wheel":Y=fc;break;case"copy":case"cut":case"paste":Y=ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Co;break;case"toggle":case"beforetoggle":Y=Or}var Oe=(n&4)!==0,gt=!Oe&&(t==="scroll"||t==="scrollend"),P=Oe?q!==null?q+"Capture":null:q;Oe=[];for(var V=F,H;V!==null;){var ie=V;if(H=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||H===null||P===null||(ie=Cn(V,P),ie!=null&&Oe.push(nl(V,ie,H))),gt)break;V=V.return}0<Oe.length&&(q=new Y(q,Ee,null,a,te),re.push({event:q,listeners:Oe}))}}if((n&7)===0){e:{if(q=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",q&&a!==rs&&(Ee=a.relatedTarget||a.fromElement)&&(Li(Ee)||Ee[yi]))break e;if((Y||q)&&(q=te.window===te?te:(q=te.ownerDocument)?q.defaultView||q.parentWindow:window,Y?(Ee=a.relatedTarget||a.toElement,Y=F,Ee=Ee?Li(Ee):null,Ee!==null&&(gt=c(Ee),Oe=Ee.tag,Ee!==gt||Oe!==5&&Oe!==27&&Oe!==6)&&(Ee=null)):(Y=null,Ee=F),Y!==Ee)){if(Oe=nc,ie="onMouseLeave",P="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Oe=Co,ie="onPointerLeave",P="onPointerEnter",V="pointer"),gt=Y==null?q:_a(Y),H=Ee==null?q:_a(Ee),q=new Oe(ie,V+"leave",Y,a,te),q.target=gt,q.relatedTarget=H,ie=null,Li(te)===F&&(Oe=new Oe(P,V+"enter",Ee,a,te),Oe.target=H,Oe.relatedTarget=gt,ie=Oe),gt=ie,Y&&Ee)t:{for(Oe=f1,P=Y,V=Ee,H=0,ie=P;ie;ie=Oe(ie))H++;ie=0;for(var Ie=V;Ie;Ie=Oe(Ie))ie++;for(;0<H-ie;)P=Oe(P),H--;for(;0<ie-H;)V=Oe(V),ie--;for(;H--;){if(P===V||V!==null&&P===V.alternate){Oe=P;break t}P=Oe(P),V=Oe(V)}Oe=null}else Oe=null;Y!==null&&Ly(re,q,Y,Oe,!1),Ee!==null&&gt!==null&&Ly(re,gt,Ee,Oe,!0)}}e:{if(q=F?_a(F):window,Y=q.nodeName&&q.nodeName.toLowerCase(),Y==="select"||Y==="input"&&q.type==="file")var it=ep;else if(Nn(q))if(tp)it=Sx;else{it=Ex;var Ae=xx}else Y=q.nodeName,!Y||Y.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?F&&xo(F.elementType)&&(it=ep):it=Tx;if(it&&(it=it(t,F))){Ra(re,it,a,te);break e}Ae&&Ae(t,q,F),t==="focusout"&&F&&q.type==="number"&&F.memoizedProps.value!=null&&is(q,"number",q.value)}switch(Ae=F?_a(F):window,t){case"focusin":(Nn(Ae)||Ae.contentEditable==="true")&&(us=Ae,wd=F,Do=null);break;case"focusout":Do=wd=us=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,cp(re,a,te);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":cp(re,a,te)}var He;if(g)e:{switch(t){case"compositionstart":var Xe="onCompositionStart";break e;case"compositionend":Xe="onCompositionEnd";break e;case"compositionupdate":Xe="onCompositionUpdate";break e}Xe=void 0}else qe?ct(t,a)&&(Xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Xe="onCompositionStart");Xe&&(U&&a.locale!=="ko"&&(qe||Xe!=="onCompositionStart"?Xe==="onCompositionEnd"&&qe&&(He=Rr()):(Ln=te,ss="value"in Ln?Ln.value:Ln.textContent,qe=!0)),Ae=iu(F,Xe),0<Ae.length&&(Xe=new wo(Xe,t,null,a,te),re.push({event:Xe,listeners:Ae}),He?Xe.data=He:(He=Ut(a),He!==null&&(Xe.data=He)))),(He=E?Xt(t,a):Wt(t,a))&&(Xe=iu(F,"onBeforeInput"),0<Xe.length&&(Ae=new wo("onBeforeInput","beforeinput",null,a,te),re.push({event:Ae,listeners:Xe}),Ae.data=He)),c1(re,t,F,a,te)}My(re,n)})}function nl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function iu(t,n){for(var a=n+"Capture",o=[];t!==null;){var d=t,f=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||f===null||(d=Cn(t,a),d!=null&&o.unshift(nl(t,d,f)),d=Cn(t,n),d!=null&&o.push(nl(t,d,f))),t.tag===3)return o;t=t.return}return[]}function f1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ly(t,n,a,o,d){for(var f=n._reactName,v=[];a!==null&&a!==o;){var x=a,I=x.alternate,F=x.stateNode;if(x=x.tag,I!==null&&I===o)break;x!==5&&x!==26&&x!==27||F===null||(I=F,d?(F=Cn(a,f),F!=null&&v.unshift(nl(a,F,I))):d||(F=Cn(a,f),F!=null&&v.push(nl(a,F,I)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var m1=/\r\n?/g,p1=/\u0000|\uFFFD/g;function zy(t){return(typeof t=="string"?t:""+t).replace(m1,`
`).replace(p1,"")}function Py(t,n){return n=zy(n),zy(t)===n}function pt(t,n,a,o,d,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Xn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Xn(t,""+o);break;case"className":Sr(t,"class",o);break;case"tabIndex":Sr(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Sr(t,a,o);break;case"style":Jl(t,o,f);break;case"data":if(n!=="object"){Sr(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=bi(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&pt(t,n,"name",d.name,d,null),pt(t,n,"formEncType",d.formEncType,d,null),pt(t,n,"formMethod",d.formMethod,d,null),pt(t,n,"formTarget",d.formTarget,d,null)):(pt(t,n,"encType",d.encType,d,null),pt(t,n,"method",d.method,d,null),pt(t,n,"target",d.target,d,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=bi(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=$t);break;case"onScroll":o!=null&&Qe("scroll",t);break;case"onScrollEnd":o!=null&&Qe("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(d.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=bi(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Qe("beforetoggle",t),Qe("toggle",t),Tr(t,"popover",o);break;case"xlinkActuate":$n(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":$n(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":$n(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":$n(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":$n(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":$n(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":$n(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":$n(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":$n(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tr(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_d.get(a)||a,Tr(t,a,o))}}function Wh(t,n,a,o,d,f){switch(a){case"style":Jl(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(d.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Xn(t,o):(typeof o=="number"||typeof o=="bigint")&&Xn(t,""+o);break;case"onScroll":o!=null&&Qe("scroll",t);break;case"onScrollEnd":o!=null&&Qe("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Er.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),n=a.slice(2,d?a.length-7:void 0),f=t[tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,d),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,d);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Tr(t,a,o)}}}function sn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",t),Qe("load",t);var o=!1,d=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:pt(t,n,f,v,a,null)}}d&&pt(t,n,"srcSet",a.srcSet,a,null),o&&pt(t,n,"src",a.src,a,null);return;case"input":Qe("invalid",t);var x=f=v=d=null,I=null,F=null;for(o in a)if(a.hasOwnProperty(o)){var te=a[o];if(te!=null)switch(o){case"name":d=te;break;case"type":v=te;break;case"checked":I=te;break;case"defaultChecked":F=te;break;case"value":f=te;break;case"defaultValue":x=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(s(137,n));break;default:pt(t,n,o,te,a,null)}}ba(t,f,x,I,F,v,d,!1);return;case"select":Qe("invalid",t),o=v=f=null;for(d in a)if(a.hasOwnProperty(d)&&(x=a[d],x!=null))switch(d){case"value":f=x;break;case"defaultValue":v=x;break;case"multiple":o=x;default:pt(t,n,d,x,a,null)}n=f,a=v,t.multiple=!!o,n!=null?nt(t,!!o,n,!1):a!=null&&nt(t,!!o,a,!0);return;case"textarea":Qe("invalid",t),f=d=o=null;for(v in a)if(a.hasOwnProperty(v)&&(x=a[v],x!=null))switch(v){case"value":o=x;break;case"defaultValue":d=x;break;case"children":f=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(s(91));break;default:pt(t,n,v,x,a,null)}Ar(t,o,d,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:pt(t,n,I,o,a,null)}return;case"dialog":Qe("beforetoggle",t),Qe("toggle",t),Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":Qe("load",t);break;case"video":case"audio":for(o=0;o<tl.length;o++)Qe(tl[o],t);break;case"image":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"embed":case"source":case"link":Qe("error",t),Qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:pt(t,n,F,o,a,null)}return;default:if(xo(n)){for(te in a)a.hasOwnProperty(te)&&(o=a[te],o!==void 0&&Wh(t,n,te,o,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(o=a[x],o!=null&&pt(t,n,x,o,a,null))}function g1(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,f=null,v=null,x=null,I=null,F=null,te=null;for(Y in a){var re=a[Y];if(a.hasOwnProperty(Y)&&re!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":I=re;default:o.hasOwnProperty(Y)||pt(t,n,Y,null,o,re)}}for(var q in o){var Y=o[q];if(re=a[q],o.hasOwnProperty(q)&&(Y!=null||re!=null))switch(q){case"type":f=Y;break;case"name":d=Y;break;case"checked":F=Y;break;case"defaultChecked":te=Y;break;case"value":v=Y;break;case"defaultValue":x=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Y!==re&&pt(t,n,q,Y,o,re)}}wr(t,v,x,I,F,te,f,d);return;case"select":Y=v=x=q=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":Y=I;default:o.hasOwnProperty(f)||pt(t,n,f,null,o,I)}for(d in o)if(f=o[d],I=a[d],o.hasOwnProperty(d)&&(f!=null||I!=null))switch(d){case"value":q=f;break;case"defaultValue":x=f;break;case"multiple":v=f;default:f!==I&&pt(t,n,d,f,o,I)}n=x,a=v,o=Y,q!=null?nt(t,!!a,q,!1):!!o!=!!a&&(n!=null?nt(t,!!a,n,!0):nt(t,!!a,a?[]:"",!1));return;case"textarea":Y=q=null;for(x in a)if(d=a[x],a.hasOwnProperty(x)&&d!=null&&!o.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:pt(t,n,x,null,o,d)}for(v in o)if(d=o[v],f=a[v],o.hasOwnProperty(v)&&(d!=null||f!=null))switch(v){case"value":q=d;break;case"defaultValue":Y=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(s(91));break;default:d!==f&&pt(t,n,v,d,o,f)}xa(t,q,Y);return;case"option":for(var Ee in a)if(q=a[Ee],a.hasOwnProperty(Ee)&&q!=null&&!o.hasOwnProperty(Ee))switch(Ee){case"selected":t.selected=!1;break;default:pt(t,n,Ee,null,o,q)}for(I in o)if(q=o[I],Y=a[I],o.hasOwnProperty(I)&&q!==Y&&(q!=null||Y!=null))switch(I){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:pt(t,n,I,q,o,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Oe in a)q=a[Oe],a.hasOwnProperty(Oe)&&q!=null&&!o.hasOwnProperty(Oe)&&pt(t,n,Oe,null,o,q);for(F in o)if(q=o[F],Y=a[F],o.hasOwnProperty(F)&&q!==Y&&(q!=null||Y!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,n));break;default:pt(t,n,F,q,o,Y)}return;default:if(xo(n)){for(var gt in a)q=a[gt],a.hasOwnProperty(gt)&&q!==void 0&&!o.hasOwnProperty(gt)&&Wh(t,n,gt,void 0,o,q);for(te in o)q=o[te],Y=a[te],!o.hasOwnProperty(te)||q===Y||q===void 0&&Y===void 0||Wh(t,n,te,q,o,Y);return}}for(var P in a)q=a[P],a.hasOwnProperty(P)&&q!=null&&!o.hasOwnProperty(P)&&pt(t,n,P,null,o,q);for(re in o)q=o[re],Y=a[re],!o.hasOwnProperty(re)||q===Y||q==null&&Y==null||pt(t,n,re,q,o,Y)}function Uy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function y1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var d=a[o],f=d.transferSize,v=d.initiatorType,x=d.duration;if(f&&x&&Uy(v)){for(v=0,x=d.responseEnd,o+=1;o<a.length;o++){var I=a[o],F=I.startTime;if(F>x)break;var te=I.transferSize,re=I.initiatorType;te&&Uy(re)&&(I=I.responseEnd,v+=te*(I<x?1:(x-F)/(I-F)))}if(--o,n+=8*(f+v)/(d.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Jh=null,Zh=null;function ru(t){return t.nodeType===9?t:t.ownerDocument}function By(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hy(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ef(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var tf=null;function v1(){var t=window.event;return t&&t.type==="popstate"?t===tf?!1:(tf=t,!0):(tf=null,!1)}var Fy=typeof setTimeout=="function"?setTimeout:void 0,_1=typeof clearTimeout=="function"?clearTimeout:void 0,qy=typeof Promise=="function"?Promise:void 0,b1=typeof queueMicrotask=="function"?queueMicrotask:typeof qy<"u"?function(t){return qy.resolve(null).then(t).catch(x1)}:Fy;function x1(t){setTimeout(function(){throw t})}function Wr(t){return t==="head"}function Gy(t,n){var a=n,o=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(d),Ls(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")il(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,il(a);for(var f=a.firstChild;f;){var v=f.nextSibling,x=f.nodeName;f[Vi]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&il(t.ownerDocument.body);a=d}while(a);Ls(n)}function Ky(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function nf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nf(a),va(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function E1(t,n,a,o){for(;t.nodeType===1;){var d=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Vi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ii(t.nextSibling),t===null)break}return null}function T1(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ii(t.nextSibling),t===null))return null;return t}function Qy(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ii(t.nextSibling),t===null))return null;return t}function rf(t){return t.data==="$?"||t.data==="$~"}function af(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function S1(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ii(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var sf=null;function Yy(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ii(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function $y(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Xy(t,n,a){switch(n=ru(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function il(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);va(t)}var ri=new Map,Wy=new Set;function au(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var rr=B.d;B.d={f:w1,r:A1,D:R1,C:C1,L:N1,m:I1,X:k1,S:D1,M:O1};function w1(){var t=rr.f(),n=Xc();return t||n}function A1(t){var n=zi(t);n!==null&&n.tag===5&&n.type==="form"?mg(n):rr.r(t)}var js=typeof document>"u"?null:document;function Jy(t,n,a){var o=js;if(o&&typeof n=="string"&&n){var d=kt(n);d='link[rel="'+t+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),Wy.has(d)||(Wy.add(d),t={rel:t,crossOrigin:a,href:n},o.querySelector(d)===null&&(n=o.createElement("link"),sn(n,"link",t),Vt(n),o.head.appendChild(n)))}}function R1(t){rr.D(t),Jy("dns-prefetch",t,null)}function C1(t,n){rr.C(t,n),Jy("preconnect",t,n)}function N1(t,n,a){rr.L(t,n,a);var o=js;if(o&&t&&n){var d='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+kt(a.imageSizes)+'"]')):d+='[href="'+kt(t)+'"]';var f=d;switch(n){case"style":f=Ms(t);break;case"script":f=Vs(t)}ri.has(f)||(t=N({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),o.querySelector(d)!==null||n==="style"&&o.querySelector(rl(f))||n==="script"&&o.querySelector(al(f))||(n=o.createElement("link"),sn(n,"link",t),Vt(n),o.head.appendChild(n)))}}function I1(t,n){rr.m(t,n);var a=js;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",d='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(t)+'"]',f=d;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Vs(t)}if(!ri.has(f)&&(t=N({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(d)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(f)))return}o=a.createElement("link"),sn(o,"link",t),Vt(o),a.head.appendChild(o)}}}function D1(t,n,a){rr.S(t,n,a);var o=js;if(o&&t){var d=li(o).hoistableStyles,f=Ms(t);n=n||"default";var v=d.get(f);if(!v){var x={loading:0,preload:null};if(v=o.querySelector(rl(f)))x.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&of(t,a);var I=v=o.createElement("link");Vt(I),sn(I,"link",t),I._p=new Promise(function(F,te){I.onload=F,I.onerror=te}),I.addEventListener("load",function(){x.loading|=1}),I.addEventListener("error",function(){x.loading|=2}),x.loading|=4,su(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:x},d.set(f,v)}}}function k1(t,n){rr.X(t,n);var a=js;if(a&&t){var o=li(a).hoistableScripts,d=Vs(t),f=o.get(d);f||(f=a.querySelector(al(d)),f||(t=N({src:t,async:!0},n),(n=ri.get(d))&&lf(t,n),f=a.createElement("script"),Vt(f),sn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(d,f))}}function O1(t,n){rr.M(t,n);var a=js;if(a&&t){var o=li(a).hoistableScripts,d=Vs(t),f=o.get(d);f||(f=a.querySelector(al(d)),f||(t=N({src:t,async:!0,type:"module"},n),(n=ri.get(d))&&lf(t,n),f=a.createElement("script"),Vt(f),sn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(d,f))}}function Zy(t,n,a,o){var d=(d=Z.current)?au(d):null;if(!d)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=li(d).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ms(a.href);var f=li(d).hoistableStyles,v=f.get(t);if(v||(d=d.ownerDocument||d,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=d.querySelector(rl(t)))&&!f._p&&(v.instance=f,v.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||j1(d,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Vs(a),a=li(d).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ms(t){return'href="'+kt(t)+'"'}function rl(t){return'link[rel="stylesheet"]['+t+"]"}function ev(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function j1(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),sn(n,"link",a),Vt(n),t.head.appendChild(n))}function Vs(t){return'[src="'+kt(t)+'"]'}function al(t){return"script[async]"+t}function tv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return n.instance=o,Vt(o),o;var d=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Vt(o),sn(o,"style",d),su(o,a.precedence,t),n.instance=o;case"stylesheet":d=Ms(a.href);var f=t.querySelector(rl(d));if(f)return n.state.loading|=4,n.instance=f,Vt(f),f;o=ev(a),(d=ri.get(d))&&of(o,d),f=(t.ownerDocument||t).createElement("link"),Vt(f);var v=f;return v._p=new Promise(function(x,I){v.onload=x,v.onerror=I}),sn(f,"link",o),n.state.loading|=4,su(f,a.precedence,t),n.instance=f;case"script":return f=Vs(a.src),(d=t.querySelector(al(f)))?(n.instance=d,Vt(d),d):(o=a,(d=ri.get(f))&&(o=N({},a),lf(o,d)),t=t.ownerDocument||t,d=t.createElement("script"),Vt(d),sn(d,"link",o),t.head.appendChild(d),n.instance=d);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,su(o,a.precedence,t));return n.instance}function su(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=o.length?o[o.length-1]:null,f=d,v=0;v<o.length;v++){var x=o[v];if(x.dataset.precedence===n)f=x;else if(f!==d)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function lf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ou=null;function nv(t,n,a){if(ou===null){var o=new Map,d=ou=new Map;d.set(a,o)}else d=ou,o=d.get(a),o||(o=new Map,d.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),d=0;d<a.length;d++){var f=a[d];if(!(f[Vi]||f[Dt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var x=o.get(v);x?x.push(f):o.set(v,[f])}}return o}function iv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function M1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function rv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function V1(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var d=Ms(o.href),f=n.querySelector(rl(d));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=lu.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Vt(f);return}f=n.ownerDocument||n,o=ev(o),(d=ri.get(d))&&of(o,d),f=f.createElement("link"),Vt(f);var v=f;v._p=new Promise(function(x,I){v.onload=x,v.onerror=I}),sn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=lu.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var cf=0;function L1(t,n){return t.stylesheets&&t.count===0&&uu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&uu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&cf===0&&(cf=62500*y1());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>cf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(d)}}:null}function lu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cu=null;function uu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cu=new Map,n.forEach(z1,t),cu=null,lu.call(t))}function z1(t,n){if(!(n.state.loading&4)){var a=cu.get(t);if(a)var o=a.get(null);else{a=new Map,cu.set(t,a);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<d.length;f++){var v=d[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}d=n.instance,v=d.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,d),a.set(v,d),this.count++,o=lu.bind(this),d.addEventListener("load",o),d.addEventListener("error",o),f?f.parentNode.insertBefore(d,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),n.state.loading|=4}}var sl={$$typeof:me,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function P1(t,n,a,o,d,f,v,x,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ji(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.hiddenUpdates=ji(null),this.identifierPrefix=o,this.onUncaughtError=d,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function av(t,n,a,o,d,f,v,x,I,F,te,re){return t=new P1(t,n,a,v,I,F,te,re,x),n=1,f===!0&&(n|=24),f=Pn(3,null,null,n),t.current=f,f.stateNode=t,n=Bd(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Gd(f),t}function sv(t){return t?(t=fs,t):fs}function ov(t,n,a,o,d,f){d=sv(d),o.context===null?o.context=d:o.pendingContext=d,o=Ur(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Br(t,o,n),a!==null&&(jn(a,t,n),zo(a,t,n))}function lv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function uf(t,n){lv(t,n),(t=t.alternate)&&lv(t,n)}function cv(t){if(t.tag===13||t.tag===31){var n=Ia(t,67108864);n!==null&&jn(n,t,67108864),uf(t,67108864)}}function uv(t){if(t.tag===13||t.tag===31){var n=qn();n=mo(n);var a=Ia(t,n);a!==null&&jn(a,t,n),uf(t,n)}}var du=!0;function U1(t,n,a,o){var d=L.T;L.T=null;var f=B.p;try{B.p=2,df(t,n,a,o)}finally{B.p=f,L.T=d}}function B1(t,n,a,o){var d=L.T;L.T=null;var f=B.p;try{B.p=8,df(t,n,a,o)}finally{B.p=f,L.T=d}}function df(t,n,a,o){if(du){var d=hf(o);if(d===null)Xh(t,n,o,hu,a),hv(t,o);else if(F1(d,t,n,a,o))o.stopPropagation();else if(hv(t,o),n&4&&-1<H1.indexOf(t)){for(;d!==null;){var f=zi(d);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=oi(f.pendingLanes);if(v!==0){var x=f;for(x.pendingLanes|=2,x.entangledLanes|=2;v;){var I=1<<31-En(v);x.entanglements[1]|=I,v&=~I}Ai(f),(lt&6)===0&&(Yc=Le()+500,el(0))}}break;case 31:case 13:x=Ia(f,2),x!==null&&jn(x,f,2),Xc(),uf(f,2)}if(f=hf(o),f===null&&Xh(t,n,o,hu,a),f===d)break;d=f}d!==null&&o.stopPropagation()}else Xh(t,n,o,null,a)}}function hf(t){return t=as(t),ff(t)}var hu=null;function ff(t){if(hu=null,t=Li(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return hu=t,null}function dv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ut()){case bt:return 2;case ot:return 8;case xn:case Mn:return 32;case si:return 268435456;default:return 32}default:return 32}}var mf=!1,Jr=null,Zr=null,ea=null,ol=new Map,ll=new Map,ta=[],H1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hv(t,n){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":ea=null;break;case"pointerover":case"pointerout":ol.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(n.pointerId)}}function cl(t,n,a,o,d,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[d]},n!==null&&(n=zi(n),n!==null&&cv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function F1(t,n,a,o,d){switch(n){case"focusin":return Jr=cl(Jr,t,n,a,o,d),!0;case"dragenter":return Zr=cl(Zr,t,n,a,o,d),!0;case"mouseover":return ea=cl(ea,t,n,a,o,d),!0;case"pointerover":var f=d.pointerId;return ol.set(f,cl(ol.get(f)||null,t,n,a,o,d)),!0;case"gotpointercapture":return f=d.pointerId,ll.set(f,cl(ll.get(f)||null,t,n,a,o,d)),!0}return!1}function fv(t){var n=Li(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Yl(t.priority,function(){uv(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Yl(t.priority,function(){uv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=hf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);rs=o,a.target.dispatchEvent(o),rs=null}else return n=zi(a),n!==null&&cv(n),t.blockedOn=a,!1;n.shift()}return!0}function mv(t,n,a){fu(t)&&a.delete(n)}function q1(){mf=!1,Jr!==null&&fu(Jr)&&(Jr=null),Zr!==null&&fu(Zr)&&(Zr=null),ea!==null&&fu(ea)&&(ea=null),ol.forEach(mv),ll.forEach(mv)}function mu(t,n){t.blockedOn===n&&(t.blockedOn=null,mf||(mf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,q1)))}var pu=null;function pv(t){pu!==t&&(pu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pu===t&&(pu=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],d=t[n+2];if(typeof o!="function"){if(ff(o||a)===null)continue;break}var f=zi(a);f!==null&&(t.splice(n,3),n-=3,dh(f,{pending:!0,data:d,method:a.method,action:o},o,d))}}))}function Ls(t){function n(I){return mu(I,t)}Jr!==null&&mu(Jr,t),Zr!==null&&mu(Zr,t),ea!==null&&mu(ea,t),ol.forEach(n),ll.forEach(n);for(var a=0;a<ta.length;a++){var o=ta[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ta.length&&(a=ta[0],a.blockedOn===null);)fv(a),a.blockedOn===null&&ta.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var d=a[o],f=a[o+1],v=d[tn]||null;if(typeof f=="function")v||pv(a);else if(v){var x=null;if(f&&f.hasAttribute("formAction")){if(d=f,v=f[tn]||null)x=v.formAction;else if(ff(d)!==null)continue}else x=v.action;typeof x=="function"?a[o+1]=x:(a.splice(o,3),o-=3),pv(a)}}}function gv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return d=v})},focusReset:"manual",scroll:"manual"})}function n(){d!==null&&(d(),d=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),d!==null&&(d(),d=null)}}}function pf(t){this._internalRoot=t}gu.prototype.render=pf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=qn();ov(a,o,t,n,null,null)},gu.prototype.unmount=pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ov(t.current,2,null,t,null,null),Xc(),n[yi]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Mi();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ta.length&&n!==0&&n<ta[a].priority;a++);ta.splice(a,0,t),a===0&&fv(t)}};var yv=e.version;if(yv!=="19.2.8")throw Error(s(527,yv,"19.2.8"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=_(n),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var G1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{dn=yu.inject(G1),hn=yu}catch{}}return dl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",d=Sg,f=wg,v=Ag;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=av(t,1,!1,null,null,a,o,null,d,f,v,gv),t[yi]=n.current,$h(t),new pf(n)},dl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,d="",f=Sg,v=wg,x=Ag,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=av(t,1,!0,n,a??null,o,d,I,f,v,x,gv),n.context=sv(null),a=n.current,o=qn(),o=mo(o),d=Ur(o),d.callback=null,Br(a,d,o),a=o,n.current.lanes=a,vr(n,a),Ai(n),t[yi]=n.current,$h(t),new gu(n)},dl.version="19.2.8",dl}var Rv;function nE(){if(Rv)return vf.exports;Rv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vf.exports=tE(),vf.exports}var iE=nE();const rE=K0(iE);function aE(r,e="dark"){if(!r)return e==="dark"?"#ADFF2F":"#008A47";const i=r.replace("#","").trim();if(i.length!==6)return e==="dark"?"#ADFF2F":"#008A47";const s=i.toLowerCase();if(s==="adff2f"||s==="008a47")return e==="dark"?"#ADFF2F":"#008A47";let l=parseInt(i.substring(0,2),16),c=parseInt(i.substring(2,4),16),h=parseInt(i.substring(4,6),16);const p=(.299*l+.587*c+.114*h)/255;if(e==="light"){if(p>.38){const y=.35/p,_=Math.max(0,Math.min(255,Math.floor(l*y))),T=Math.max(0,Math.min(255,Math.floor(c*y))),N=Math.max(0,Math.min(255,Math.floor(h*y)));return`#${_.toString(16).padStart(2,"0")}${T.toString(16).padStart(2,"0")}${N.toString(16).padStart(2,"0")}`}}else if(p<.35){const y=.55/Math.max(p,.05),_=Math.max(0,Math.min(255,Math.floor(l*y))),T=Math.max(0,Math.min(255,Math.floor(c*y))),N=Math.max(0,Math.min(255,Math.floor(h*y)));return`#${_.toString(16).padStart(2,"0")}${T.toString(16).padStart(2,"0")}${N.toString(16).padStart(2,"0")}`}return r}function Q0(r,e="dark"){r||(r=e==="dark"?"#ADFF2F":"#008A47");try{localStorage.setItem("kademia_secondary_color",r)}catch{}const i=aE(r,e),s=i.replace("#","").trim();if(s.length!==6)return;const l=parseInt(s.substring(0,2),16),c=parseInt(s.substring(2,4),16),h=parseInt(s.substring(4,6),16),p=.85,y=Math.max(0,Math.floor(l*p)),_=Math.max(0,Math.floor(c*p)),T=Math.max(0,Math.floor(h*p)),N=`#${y.toString(16).padStart(2,"0")}${_.toString(16).padStart(2,"0")}${T.toString(16).padStart(2,"0")}`,z=Math.max(0,Math.floor(l*.75)),G=Math.max(0,Math.floor(c*.75)),D=Math.max(0,Math.floor(h*.75)),J=`#${z.toString(16).padStart(2,"0")}${G.toString(16).padStart(2,"0")}${D.toString(16).padStart(2,"0")}`,ae=(.299*l+.587*c+.114*h)/255>.55?"#071200":"#ffffff";let W=document.getElementById("theme-accent-override");W||(W=document.createElement("style"),W.id="theme-accent-override",document.head.appendChild(W)),W.innerHTML=`
    :root, body, body.dark-theme, body.light-theme {
      --accent-purple: ${i} !important;
      --accent-lime: ${i} !important;
      --accent-secondary: ${i} !important;
      --border-focus: ${i} !important;
      --status-success: ${i} !important;
      --clay-bg-primary: ${i} !important;
      --accent-hover: ${N} !important;
      --accent-active-color: ${J} !important;
      --accent-purple-glow: rgba(${l}, ${c}, ${h}, 0.15) !important;
      --accent-lime-glow: rgba(${l}, ${c}, ${h}, 0.2) !important;
      --accent-secondary-glow: rgba(${l}, ${c}, ${h}, 0.2) !important;
      --border-hover: rgba(${l}, ${c}, ${h}, 0.3) !important;
      --accent-active: rgba(${l}, ${c}, ${h}, 0.25) !important;
      --glass-border-hover: rgba(${l}, ${c}, ${h}, 0.4) !important;
      --pulsing-shadow: rgba(${l}, ${c}, ${h}, 0.4) !important;
      --pulsing-shadow-start: rgba(${l}, ${c}, ${h}, 0.7) !important;
      --color-on-accent: ${ae} !important;
    }
  `,[document.body,document.documentElement].forEach(ge=>{ge&&(ge.style.setProperty("--accent-purple",i),ge.style.setProperty("--accent-lime",i),ge.style.setProperty("--accent-secondary",i),ge.style.setProperty("--border-focus",i),ge.style.setProperty("--status-success",i),ge.style.setProperty("--clay-bg-primary",i),ge.style.setProperty("--accent-hover",N),ge.style.setProperty("--accent-active-color",J),ge.style.setProperty("--accent-purple-glow",`rgba(${l}, ${c}, ${h}, 0.15)`),ge.style.setProperty("--accent-lime-glow",`rgba(${l}, ${c}, ${h}, 0.2)`),ge.style.setProperty("--accent-secondary-glow",`rgba(${l}, ${c}, ${h}, 0.2)`),ge.style.setProperty("--border-hover",`rgba(${l}, ${c}, ${h}, 0.3)`),ge.style.setProperty("--accent-active",`rgba(${l}, ${c}, ${h}, 0.25)`),ge.style.setProperty("--glass-border-hover",`rgba(${l}, ${c}, ${h}, 0.4)`),ge.style.setProperty("--pulsing-shadow",`rgba(${l}, ${c}, ${h}, 0.4)`),ge.style.setProperty("--pulsing-shadow-start",`rgba(${l}, ${c}, ${h}, 0.7)`),ge.style.setProperty("--color-on-accent",ae))})}const ar={id:"kademia-abcd-opt",name:"Ficha ABCD Otimizada - Hipertrofia & Definição",objective:"Recomposição Corporal & Tensão Mecânica",routines:[{id:"A",name:"Treino A - Peito, Tríceps & Panturrilhas",exercises:[{id:"a1",name:"Mobilidade de Ombro c/ Bastão",sets:2,reps:"15",rest:20,load:"",observations:"Aquecimento dinâmico e preparação da cintura escapular."},{id:"a2",name:"Supino Reto (Barra ou Halteres)",sets:4,reps:"8-10",rest:90,load:"",observations:"Exercício composto primário. Progressão de carga e foco na porção esternal."},{id:"a3",name:"Supino Inclinado com Halteres",sets:4,reps:"10",rest:90,load:"",observations:"Banco a 30°-45°. Foco na porção clavicular (peitoral superior)."},{id:"a4",name:"Crucifixo Máquina (Pec Deck)",sets:4,reps:"10-12",rest:60,load:"",observations:"Dropset apenas na última série. Alongamento máximo no peitoral."},{id:"a5",name:"Tríceps Pulley Barra",sets:4,reps:"10-12",rest:60,load:"",observations:"Cotovelos fixos ao lado do tronco. Dropset na última série."},{id:"a6",name:"Tríceps Testa + Mergulho Banco",sets:4,reps:"10 + 10",rest:60,load:"",observations:"Biset: 10 reps de Tríceps Testa alternado seguidas de 10 reps no Banco."},{id:"a7",name:"Panturrilha em Pé (Leg Press ou Máquina)",sets:4,reps:"12-15",rest:45,load:"",observations:"Pico de contração de 1s no topo e descida controlada."},{id:"a8",name:"Cardio Moderado (Esteira)",sets:1,reps:"25-30 min",rest:0,load:"",observations:"Trote/Corrida moderada constante para queima calórica pós-musculação."}]},{id:"B",name:"Treino B - Ombros & Core / Abdômen",exercises:[{id:"b1",name:"Desenvolvimento com Halteres",sets:4,reps:"10-12",rest:90,load:"",observations:"Exercício multiarticular primário para ombros."},{id:"b2",name:"Elevação Lateral com Halteres",sets:4,reps:"12",rest:60,load:"",observations:"Subida explosiva, descida controlada. Dropset na última série."},{id:"b3",name:"Elevação Lateral na Polia Baixa",sets:3,reps:"12",rest:60,load:"",observations:"Tensão contínua do cabo focado na cabeça lateral do deltoide."},{id:"b4",name:"Crucifixo Inverso (Máquina ou Halteres)",sets:4,reps:"12",rest:60,load:"",observations:"Isolamento de deltoide posterior."},{id:"b5",name:"Facepull na Polia Alta",sets:4,reps:"12",rest:60,load:"",observations:"Puxada com corda em direção à testa. Saúde do manguito e deltoide posterior."},{id:"b6",name:"Abdominal Supra na Polia com Carga",sets:4,reps:"12-15",rest:45,load:"",observations:"Contração abdominal concentrada sob carga progressiva."},{id:"b7",name:"Abdominal Prancha Baixa",sets:3,reps:"45-60s",rest:45,load:"",observations:"Isometria rigorosa para estabilização do core."},{id:"b8",name:"Cardio Moderado (Esteira)",sets:1,reps:"25-30 min",rest:0,load:"",observations:"Trote/Corrida moderada constante para queima calórica pós-musculação."}]},{id:"C",name:"Treino C - Inferiores (Quadríceps, Posteriores & Panturrilha)",exercises:[{id:"c1",name:"Cadeira Extensora",sets:3,reps:"12-15",rest:60,load:"",observations:"Aquecimento e ativação isolada do quadríceps."},{id:"c2",name:"Agachamento (Livre ou Smith)",sets:4,reps:"8-10",rest:120,load:"",observations:"Composto primário. Amplitude máxima com segurança e foco em tensão mecânica."},{id:"c3",name:"Stiff com Halteres ou Barra",sets:4,reps:"10",rest:90,load:"",observations:"Costas alinhadas, quadril para trás. Foco total em posteriores de coxa e glúteos."},{id:"c4",name:"Leg Press 180°",sets:4,reps:"10",rest:90,load:"",observations:"Cadência 2020 (2s descida, 0s pausa, 2s subida)."},{id:"c5",name:"Afundo com Halteres",sets:3,reps:"10 cada",rest:60,load:"",observations:"Trabalho unilateral de estabilidade e glúteos."},{id:"c6",name:"Mesa Flexora",sets:4,reps:"10-12",rest:60,load:"",observations:"Manter o quadril colado no banco durante o movimento."},{id:"c7",name:"Cadeira Adutora / Abdutora",sets:3,reps:"12",rest:45,load:"",observations:"Trabalho complementar de adutores e glúteo médio."},{id:"c8",name:"Panturrilha Sentado (Gêmeos Sentado)",sets:4,reps:"12-15",rest:45,load:"",observations:"Joelhos flexionados a 90° para isolamento do sóleo. Segurar 1-2s no pico de contração."},{id:"c9",name:"Cardio Moderado (Esteira)",sets:1,reps:"25-30 min",rest:0,load:"",observations:"Caminhada inclinada ou trote leve pós-treino de pernas."}]},{id:"D",name:"Treino D - Costas, Trapézio & Bíceps",exercises:[{id:"d1",name:"Puxada Alta Pronada",sets:4,reps:"10-12",rest:90,load:"",observations:"Foco no latíssimo do dorso para expansão de dorsais."},{id:"d2",name:"Puxada Alta Neutra",sets:3,reps:"10-12",rest:60,load:"",observations:"Pegada neutra/triângulo. Dropset na última série."},{id:"d3",name:"Remada Baixa Pronada",sets:3,reps:"10-12",rest:90,load:"",observations:"Cadência 2020. Foco em miolo de costas e romboides."},{id:"d4",name:"Remada Alta Polia Baixa + Encolhimento",sets:3,reps:"10-12",rest:60,load:"",observations:"Biset: Remada alta para ombro posterior/trapézio + encolhimento vertical."},{id:"d5",name:"Rosca Direta com Barra",sets:3,reps:"10",rest:60,load:"",observations:"Flexão pura de cotovelo sem movimento de tronco."},{id:"d6",name:"Rosca Martelo com Halteres",sets:3,reps:"10-12",rest:60,load:"",observations:"Foco em braquial, braquiorradial e antebraço."},{id:"d7",name:"Cardio Moderado (Esteira)",sets:1,reps:"25-30 min",rest:0,load:"",observations:"Trote/Corrida moderada constante para queima calórica pós-musculação."}]}]},Qs=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"currentColor",className:e,children:[m.jsx("rect",{x:"2",y:"9",width:"2",height:"6",rx:"1"}),m.jsx("rect",{x:"5",y:"6",width:"3",height:"12",rx:"1.5"}),m.jsx("rect",{x:"8",y:"10.5",width:"8",height:"3",rx:"1"}),m.jsx("rect",{x:"16",y:"6",width:"3",height:"12",rx:"1.5"}),m.jsx("rect",{x:"20",y:"9",width:"2",height:"6",rx:"1"})]}),Y0=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),m.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),m.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),m.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),sE=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),m.jsx("path",{d:"M3 3v5h5"}),m.jsx("path",{d:"M12 7v5l4 2"})]}),Sl=({size:r=24,className:e=""})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:m.jsx("polyline",{points:"20 6 9 17 4 12"})}),ku=({size:r=24,className:e=""})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"currentColor",className:e,children:m.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),Cv=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"currentColor",className:e,children:[m.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),m.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),Nv=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("polygon",{points:"5 4 15 12 5 20 5 4",fill:"currentColor"}),m.jsx("line",{x1:"19",y1:"5",x2:"19",y2:"19"})]}),oE=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),m.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),$0=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("polyline",{points:"3 6 5 6 21 6"}),m.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),m.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),m.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),X0=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),m.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),Ou=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("circle",{cx:"12",cy:"12",r:"10"}),m.jsx("polyline",{points:"12 6 12 12 16 14"})]}),om=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("circle",{cx:"12",cy:"12",r:"10"}),m.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),m.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),lE=({size:r=24,className:e=""})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"currentColor",className:e,children:m.jsx("path",{d:"M19 4h-2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v1a4 4 0 0 0 4 4h.26A6.002 6.002 0 0 0 11 16.92V19H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.08A6.002 6.002 0 0 0 17.74 12H18a4 4 0 0 0 4-4V7a3 3 0 0 0-3-3zM4 8V7a1 1 0 0 1 1-1h2v4.07A2.003 2.003 0 0 1 4 8zm16 0a2.003 2.003 0 0 1-3 2.07V6h2a1 1 0 0 1 1 1v1z"})}),W0=({size:r=20,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("circle",{cx:"12",cy:"12",r:"4",fill:"currentColor"}),m.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"})]}),J0=({size:r=20,className:e=""})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"currentColor",className:e,children:m.jsx("path",{d:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.38 5.38 0 0 1-4.4 2.26 5.4 5.4 0 0 1-4.14-8.8A9 9 0 0 0 12 3Z"})}),cE=({size:r=20,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("circle",{cx:"9",cy:"5",r:"1",fill:"currentColor"}),m.jsx("circle",{cx:"9",cy:"12",r:"1",fill:"currentColor"}),m.jsx("circle",{cx:"9",cy:"19",r:"1",fill:"currentColor"}),m.jsx("circle",{cx:"15",cy:"5",r:"1",fill:"currentColor"}),m.jsx("circle",{cx:"15",cy:"12",r:"1",fill:"currentColor"}),m.jsx("circle",{cx:"15",cy:"19",r:"1",fill:"currentColor"})]}),uE=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),m.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"})]}),Mf=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),m.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Vf=({size:r=24,className:e=""})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:m.jsx("path",{d:"M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"})}),dE=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}),m.jsx("circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}),m.jsx("circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}),m.jsx("circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}),m.jsx("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.75 1.7-1.67 0-.42-.16-.8-.43-1.09-.27-.29-.44-.68-.44-1.12 0-.92.75-1.67 1.67-1.67H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9z"})]}),Z0=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),m.jsx("polyline",{points:"7 10 12 15 17 10"}),m.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),hE=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),m.jsx("polyline",{points:"17 8 12 3 7 8"}),m.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),fE=({size:r=24,className:e=""})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:m.jsx("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"})}),mE=({size:r=24,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("circle",{cx:"18",cy:"5",r:"3"}),m.jsx("circle",{cx:"6",cy:"12",r:"3"}),m.jsx("circle",{cx:"18",cy:"19",r:"3"}),m.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),m.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]});function pE({deferredPrompt:r,onEnterApp:e}){const[i,s]=le.useState(!1),[l,c]=le.useState("KademIA"),[h,p]=le.useState(!1),[y,_]=le.useState(!1),[T,N]=le.useState(!1),[z,G]=le.useState(!1),[D,J]=le.useState(!1);le.useEffect(()=>{const W=()=>{console.log("PWA instalado com sucesso! Preparando tela de conclusão..."),setTimeout(()=>{G(!1),J(!0)},3500)};return window.addEventListener("appinstalled",W),()=>{window.removeEventListener("appinstalled",W)}},[]);const $=()=>{window.close(),e()};le.useEffect(()=>{const W=window.navigator.userAgent.toLowerCase(),me=/iphone|ipad|ipod/.test(W);p(me);const ge=/android|webos|blackberry|iemobile|opera mini/i.test(W);_(ge),(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone)&&(N(!0),e())},[e]);const ae=()=>{r?(r.prompt(),r.userChoice.then(W=>{W.outcome==="accepted"?(console.log("Usuário aceitou a instalação"),G(!0)):console.log("Usuário recusou a instalação")})):s(!0)};return T?null:m.jsxs("div",{className:"landing-container animate-fade-in",children:[m.jsx("div",{className:"landing-content glass",children:D?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"landing-logo-wrapper",children:[m.jsx("div",{className:"landing-logo-circle",style:{backgroundColor:"var(--accent-lime)"},children:m.jsx(Sl,{size:36,className:"landing-logo-icon"})}),m.jsx("h1",{className:"landing-title",children:"Instalado!"}),m.jsx("p",{className:"landing-subtitle",style:{color:"var(--accent-lime)"},children:"O KademIA está pronto."})]}),m.jsxs("p",{className:"landing-description",style:{marginBottom:"30px",fontSize:"0.95rem"},children:["O aplicativo foi instalado com sucesso no seu dispositivo.",m.jsx("br",{}),m.jsx("br",{}),"Você já pode fechar esta aba do navegador. Abra o KademIA diretamente pelo ícone criado na tela inicial do seu aparelho para começar a treinar!"]}),m.jsx("div",{className:"landing-actions",children:m.jsx("button",{className:"btn btn-primary btn-large",onClick:$,children:"Fechar Página"})})]}):z?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"landing-logo-wrapper",children:[m.jsx("div",{className:"landing-logo-circle",children:m.jsx(Qs,{size:42,className:"landing-logo-icon"})}),m.jsx("h1",{className:"landing-title",children:"Instalando..."}),m.jsx("p",{className:"landing-subtitle",children:"O KademIA está chegando!"})]}),m.jsxs("p",{className:"landing-description",style:{marginBottom:"30px",fontSize:"0.95rem"},children:["O aplicativo está sendo adicionado ao seu dispositivo.",m.jsx("br",{}),m.jsx("br",{}),"Um atalho estará disponível na sua tela principal em instantes. Aguarde a conclusão da instalação..."]}),m.jsx("div",{className:"landing-actions",children:m.jsx("button",{className:"btn btn-secondary btn-large",onClick:()=>G(!1),children:"Voltar"})})]}):m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"landing-logo-wrapper",children:[m.jsx("div",{className:"landing-logo-circle",children:m.jsx(Qs,{size:42,className:"landing-logo-icon"})}),m.jsxs("h1",{className:"landing-title",children:["Kadem",m.jsx("span",{children:"IA"})]}),m.jsx("p",{className:"landing-subtitle",children:"Seu treino, no seu ritmo."})]}),m.jsx("p",{className:"landing-description",children:"Gerencie suas rotinas de treino, registre cargas em tempo real e utilize o timer de descanso inteligente de forma simples e rápida."}),m.jsxs("div",{className:"landing-features",children:[m.jsx("span",{className:"landing-chip",children:"⚡ Registro de Cargas"}),m.jsx("span",{className:"landing-chip",children:"⏱️ Timer Inteligente"}),m.jsx("span",{className:"landing-chip",children:"📋 Rotinas de Treino"}),m.jsx("span",{className:"landing-chip",children:"📱 PWA Instalável"})]}),m.jsxs("div",{className:"landing-actions",children:[m.jsx("button",{className:"btn btn-primary btn-large",onClick:ae,children:"Instalar Aplicativo"}),m.jsx("button",{className:"btn btn-secondary btn-large",onClick:e,children:"Acessar no Navegador"})]}),m.jsx("div",{className:"landing-footer",children:"Ficha de Treino Inteligente"})]})}),i&&m.jsx("div",{className:"modal-overlay animate-fade-in",onClick:()=>s(!1),children:m.jsx("div",{className:"modal-content glass animate-slide-up",onClick:W=>W.stopPropagation(),children:h?m.jsxs(m.Fragment,{children:[m.jsx("h3",{className:"modal-title",children:"Como Instalar no iPhone"}),m.jsx("p",{className:"modal-text",children:"Como a Apple não permite a instalação direta pelo navegador, siga os passos abaixo:"}),m.jsxs("ol",{className:"ios-instructions-list",children:[m.jsxs("li",{children:["Toque no ícone de ",m.jsx("strong",{children:"Compartilhar"})," ",m.jsx("span",{className:"ios-icon",children:"⎋"})," (na barra inferior)."]}),m.jsxs("li",{children:["Role a lista e selecione ",m.jsx("strong",{children:"Adicionar à Tela de Início"}),"."]}),m.jsxs("li",{children:["Escolha o nome desejado para o seu app e toque em ",m.jsx("strong",{children:"Adicionar"}),"."]})]}),m.jsx("div",{className:"modal-actions",children:m.jsx("button",{className:"btn btn-primary",style:{width:"100%"},onClick:()=>{s(!1),e()},children:"Entendi, Acessar Treino"})})]}):m.jsxs(m.Fragment,{children:[m.jsx("h3",{className:"modal-title",children:y?"Instalar no Android":"Instalar no Computador"}),m.jsx("p",{className:"modal-text",children:"Para instalar este aplicativo no seu dispositivo, siga os passos no seu navegador:"}),m.jsx("ol",{className:"ios-instructions-list",children:y?m.jsxs(m.Fragment,{children:[m.jsxs("li",{children:["Toque no ícone de ",m.jsxs("strong",{children:["menu (três pontos ",m.jsx("span",{className:"ios-icon",children:"⋮"}),")"]})," no canto superior direito do navegador."]}),m.jsxs("li",{children:["Selecione ",m.jsx("strong",{children:"Instalar aplicativo"})," ou ",m.jsx("strong",{children:"Adicionar à tela inicial"}),"."]}),m.jsx("li",{children:"Confirme para ter o atalho na sua tela de início."})]}):m.jsxs(m.Fragment,{children:[m.jsxs("li",{children:["Procure o ícone de ",m.jsx("strong",{children:"Instalação"})," (um monitor com seta para baixo ou símbolo de ",m.jsx("span",{className:"ios-icon",children:"+"}),") no lado direito da barra de endereços do seu navegador."]}),m.jsxs("li",{children:["Ou clique no menu do navegador (três pontos ",m.jsx("span",{className:"ios-icon",children:"⋮"}),") e selecione ",m.jsx("strong",{children:"Instalar KademIA..."})," ou ",m.jsx("strong",{children:"Instalar página como aplicativo"}),"."]})]})}),m.jsxs("div",{className:"modal-actions",children:[m.jsx("button",{className:"btn btn-secondary",onClick:()=>s(!1),children:"Fechar"}),m.jsx("button",{className:"btn btn-primary",onClick:()=>{s(!1),e()},children:"Acessar no Navegador"})]})]})})}),m.jsx("style",{children:`
        .landing-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .landing-content {
          width: 100%;
          max-width: 420px;
          padding: 42px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: rgba(22, 27, 34, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(163, 230, 53, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .landing-content:hover {
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(163, 230, 53, 0.12);
        }

        .landing-logo-wrapper {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .landing-logo-circle {
          width: 72px;
          height: 72px;
          border-radius: 24px; /* Soft square Google style */
          background-color: var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(11, 87, 208, 0.2);
        }

        .landing-logo-icon {
          color: var(--color-on-accent);
        }

        .landing-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-text-primary);
          line-height: 1;
        }

        .landing-title span {
          color: var(--accent-purple);
        }

        .landing-subtitle {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          margin-top: 6px;
          font-weight: 500;
        }

        .landing-description {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        /* Item 3: Destaques de Recursos (Chips) */
        .landing-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 28px;
          width: 100%;
        }

        .landing-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #e2e8f0;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          backdrop-filter: blur(4px);
          transition: all 0.2s ease;
        }

        .landing-chip:hover {
          background: rgba(163, 230, 53, 0.12);
          border-color: rgba(163, 230, 53, 0.35);
          color: #a3e635;
          transform: translateY(-1px);
        }

        .landing-actions {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .btn-large {
          width: 100%;
          padding: 14px;
          font-size: 1rem;
          border-radius: 100px;
        }

        .landing-actions .btn-primary {
          box-shadow: none !important;
          transition: all 0.2s ease;
        }

        .landing-actions .btn-primary:hover {
          box-shadow: none !important;
          transform: translateY(-1px);
        }

        /* Item 4: Contraste do Botão Secundário */
        .landing-actions .btn-secondary {
          background: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: #f8fafc !important;
          font-weight: 600;
          box-shadow: none !important;
          transition: all 0.2s ease;
        }

        .landing-actions .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.16) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
          color: #ffffff !important;
          transform: translateY(-1px);
          box-shadow: none !important;
        }

        .landing-footer {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(31, 31, 31, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
        }

        .modal-content {
          width: 100%;
          max-width: 380px;
          padding: 28px 24px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 28px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .modal-title {
          font-size: 1.25rem;
          color: var(--color-text-primary);
          margin-bottom: 12px;
          text-align: left;
          font-weight: 700;
        }

        .modal-text {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
          text-align: left;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }

        .modal-actions button {
          flex: 1;
        }

        /* iOS Instructions */
        .ios-instructions-list {
          text-align: left;
          color: var(--color-text-secondary);
          font-size: 0.88rem;
          padding-left: 20px;
          margin-bottom: 24px;
        }

        .ios-instructions-list li {
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .ios-icon {
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid var(--border-color);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 1rem;
          color: var(--color-text-primary);
        }

        @keyframes spinFast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .spinner-animation {
          animation: spinFast 1s linear infinite;
        }
      `})]})}function Iv({workoutData:r,history:e,onStartWorkout:i,onSetActiveTab:s,profile:l,syncProps:c}){const p=(()=>{const D=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],J=new Date;return Array.from({length:7}).map(($,ae)=>{const W=new Date;W.setDate(J.getDate()-(6-ae));const me=D[W.getDay()],ge=W.toDateString(),Ce=e.find(xe=>new Date(xe.date).toDateString()===ge);return{dayName:me,completed:!!Ce,routineId:Ce?Ce.routineId:null,isToday:ge===J.toDateString()}})})(),_=(()=>{var me;const D=r.routines||[];if(D.length<=1||e.length===0)return D;const J=(me=e[0])==null?void 0:me.routineId;if(!J)return D;const $=D.findIndex(ge=>ge.id===J);if($===-1)return D;const ae=D.slice($+1),W=D.slice(0,$+1);return[...ae,...W]})(),T=e.length,z=(()=>{if(!e||e.length===0)return 0;const D=Array.from(new Set(e.map(ae=>{const W=new Date(ae.date);return isNaN(W.getTime())?null:`${W.getFullYear()}-${String(W.getMonth()+1).padStart(2,"0")}-${String(W.getDate()).padStart(2,"0")}`}).filter(Boolean))).sort();if(D.length===0)return 0;let J=1,$=1;for(let ae=1;ae<D.length;ae++){const W=new Date(D[ae-1]+"T00:00:00"),ge=new Date(D[ae]+"T00:00:00").getTime()-W.getTime(),Ce=Math.round(ge/(1e3*3600*24));Ce===1?($+=1,$>J&&(J=$)):Ce>1&&($=1)}return J})(),G=e[0]?new Date(e[0].date).toLocaleDateString("pt-BR"):"Nenhum";return m.jsxs("div",{className:"dashboard-container animate-fade-in",children:[m.jsxs("header",{className:"dash-header",children:[m.jsxs("div",{children:[m.jsx("span",{className:"welcome-text",children:"Bora treinar,"}),m.jsxs("h2",{className:"user-name",children:[(l==null?void 0:l.name)||"Wagner","!"]})]}),m.jsxs("div",{className:"header-actions",style:{display:"flex",alignItems:"center",gap:"8px"},children:[c!=null&&c.connected?m.jsx("button",{type:"button",className:"btn-dash-sync",onClick:c.onSync,title:"Sincronizar com a nuvem","aria-label":"Sincronizar com a nuvem",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"6px 10px",borderRadius:"20px",background:"rgba(173, 255, 47, 0.12)",border:"1px solid rgba(173, 255, 47, 0.3)",color:"#ADFF2F",fontSize:"0.75rem",fontWeight:"600",cursor:"pointer"},children:"🔄 Sincronizar"}):m.jsx("button",{type:"button",className:"btn-dash-sync",onClick:c==null?void 0:c.onConnectGoogle,title:"Entrar com o Google para sincronizar","aria-label":"Entrar com o Google para sincronizar",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"6px 10px",borderRadius:"20px",background:"rgba(173, 255, 47, 0.18)",border:"1px solid rgba(173, 255, 47, 0.5)",color:"#ADFF2F",fontSize:"0.75rem",fontWeight:"600",cursor:"pointer"},children:"☁️ Entrar c/ Google"}),m.jsxs("div",{className:"streak-badge glass",children:[m.jsx(lE,{size:18,className:"badge-icon"}),m.jsxs("span",{children:[m.jsx("strong",{children:T})," treinos"]})]})]})]}),T===0&&m.jsxs("div",{style:{background:"rgba(173, 255, 47, 0.08)",border:"1px solid rgba(173, 255, 47, 0.2)",borderRadius:"12px",padding:"10px 14px",marginBottom:"16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px",fontSize:"0.82rem",color:"var(--color-text-secondary)"},children:[m.jsx("span",{children:c!=null&&c.connected?`☁️ Conectado como ${c.email||"Google"}. Toque ao lado para buscar seus treinos do Notebook.`:"☁️ Sem histórico exibido? Entre com a sua conta Google para resgatar os treinos do Notebook."}),m.jsx("button",{type:"button",onClick:c!=null&&c.connected?c.onSync:c==null?void 0:c.onConnectGoogle,style:{background:"var(--accent-lime)",color:"#000",border:"none",borderRadius:"8px",padding:"6px 12px",fontWeight:"700",fontSize:"0.78rem",cursor:"pointer",whiteSpace:"nowrap"},children:c!=null&&c.connected?"Baixar Dados":"Entrar c/ Google"})]}),m.jsxs("section",{className:"section-container glass",children:[m.jsx("h3",{className:"section-title",children:"Esta Semana"}),m.jsx("div",{className:"week-grid",children:p.map((D,J)=>m.jsxs("div",{className:`day-col ${D.isToday?"today":""}`,children:[m.jsx("span",{className:"day-name",children:D.dayName}),m.jsx("div",{className:`day-dot ${D.completed?"completed":""}`,children:D.completed?D.routineId||"✓":""})]},J))})]}),m.jsxs("section",{className:"stats-row",children:[m.jsxs("div",{className:"stat-card glass",children:[m.jsx(sE,{size:28,className:"stat-icon purple"}),m.jsxs("div",{className:"stat-info",children:[m.jsx("span",{className:"stat-value",children:G}),m.jsx("span",{className:"stat-label",children:"Último Treino"})]})]}),m.jsxs("div",{className:"stat-card glass",children:[m.jsx(fE,{size:28,className:"stat-icon orange"}),m.jsxs("div",{className:"stat-info",children:[m.jsxs("span",{className:"stat-value",children:[z," ",z===1?"dia":"dias"]}),m.jsx("span",{className:"stat-label",children:"Sua Maior Sequência"})]})]})]}),m.jsxs("section",{className:"routines-section",children:[m.jsxs("div",{className:"section-header",children:[m.jsx("h3",{className:"section-title",children:"Suas Fichas"}),m.jsxs("button",{className:"btn-link",onClick:()=>s("routines"),children:[m.jsx(X0,{size:16})," Gerenciar"]})]}),m.jsx("div",{className:"routines-grid",children:_.map(D=>m.jsxs("div",{className:"routine-card glass glass-interactive",children:[m.jsxs("div",{className:"routine-header",children:[m.jsxs("div",{children:[m.jsx("h4",{className:"routine-name",children:D.name}),m.jsxs("span",{className:"routine-qty",children:[D.exercises.length," exercícios"]})]}),m.jsx("div",{className:"routine-tag",children:D.id})]}),m.jsxs("div",{className:"routine-preview",children:[D.exercises.slice(0,3).map((J,$)=>m.jsxs("div",{className:"preview-item",children:[m.jsx("span",{children:J.name}),m.jsxs("span",{className:"preview-sets",children:[J.sets,"x",J.reps]})]},J.id)),D.exercises.length>3&&m.jsxs("div",{className:"preview-more",children:["e mais ",D.exercises.length-3," exercícios..."]})]}),m.jsxs("button",{className:"btn btn-lime start-routine-btn",onClick:()=>i(D),children:[m.jsx(ku,{size:18})," Iniciar Treino ",D.id]})]},D.id))})]}),m.jsx("style",{children:`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 20px 16px;
        }

        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .welcome-text {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        .user-name {
          font-size: 1.8rem;
          color: var(--color-text-primary);
          margin-top: -2px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .streak-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 99px;
          font-family: var(--font-title);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--accent-lime);
          border: 1px solid var(--accent-lime-glow);
          background: var(--accent-purple-glow);
        }

        .badge-icon {
          color: var(--accent-lime);
        }

        .section-container {
          padding: 16px;
        }

        .section-title {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          margin-bottom: 12px;
        }

        .week-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
          text-align: center;
        }

        .day-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .day-col.today .day-name {
          color: var(--accent-purple);
          font-weight: 700;
        }

        .day-name {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .day-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          color: transparent;
          transition: all 0.3s ease;
        }

        .day-dot.completed {
          background: var(--accent-lime);
          border-color: var(--accent-lime);
          color: var(--color-on-accent);
          font-weight: 800;
        }

        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .stat-card {
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 8px;
          border-radius: 12px;
          background: var(--bg-primary);
        }

        .stat-icon.purple {
          color: var(--accent-purple);
          background: var(--accent-purple-glow);
        }

        .stat-icon.lime {
          color: var(--accent-lime);
          background: var(--accent-purple-glow);
        }

        .stat-icon.orange {
          color: #FF6B00;
          background: rgba(255, 107, 0, 0.12);
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-primary);
          font-family: var(--font-title);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .routines-section {
          margin-top: 10px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .btn-link {
          background: none;
          border: none;
          color: var(--color-text-secondary);
          font-size: 0.85rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .btn-link:hover {
          color: var(--accent-purple);
        }

        .routines-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .routine-card {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          overflow: hidden;
        }

        .routine-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .routine-name {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          margin-bottom: 2px;
        }

        .routine-qty {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        .routine-tag {
          background: var(--accent-purple-glow);
          color: var(--accent-purple);
          border: 1px solid var(--border-hover);
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 1.1rem;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .routine-preview {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 10px 12px;
          background: var(--bg-primary);
          border-radius: 10px;
          border: 1px solid var(--border-color);
        }

        .preview-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--color-text-secondary);
        }

        .preview-sets {
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .preview-more {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-style: italic;
          margin-top: 2px;
        }

        .start-routine-btn {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
        }
      `})]})}const gE=({size:r=20,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("polyline",{points:"4 14 10 14 10 20"}),m.jsx("polyline",{points:"20 10 14 10 14 4"}),m.jsx("line",{x1:"14",y1:"10",x2:"21",y2:"3"}),m.jsx("line",{x1:"10",y1:"14",x2:"3",y2:"21"})]}),yE=({size:r=20,className:e=""})=>m.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[m.jsx("path",{d:"M15 3h6v6"}),m.jsx("path",{d:"M9 21H3v-6"}),m.jsx("path",{d:"M21 3l-7 7"}),m.jsx("path",{d:"M3 21l7-7"})]});function vE({duration:r,onFinish:e,onCancel:i}){const[s,l]=le.useState(r),[c,h]=le.useState(!0),[p,y]=le.useState(!0),[_,T]=le.useState(null),N=le.useRef(null);le.useEffect(()=>("Notification"in window&&Notification.permission==="default"&&Notification.requestPermission(),()=>{navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({type:"CANCEL_NOTIFICATION"})}),[]);const z=()=>{try{const w=new(window.AudioContext||window.webkitAudioContext),A=w.createOscillator(),C=w.createGain();A.connect(C),C.connect(w.destination),A.frequency.setValueAtTime(880,w.currentTime),C.gain.setValueAtTime(.1,w.currentTime),C.gain.exponentialRampToValueAtTime(.01,w.currentTime+.3),A.start(w.currentTime),A.stop(w.currentTime+.3),setTimeout(()=>{const k=w.createOscillator(),O=w.createGain();k.connect(O),O.connect(w.destination),k.frequency.setValueAtTime(1046.5,w.currentTime),O.gain.setValueAtTime(.1,w.currentTime),O.gain.exponentialRampToValueAtTime(.01,w.currentTime+.4),k.start(w.currentTime),k.stop(w.currentTime+.4)},300),"vibrate"in navigator&&navigator.vibrate([200,100,200])}catch(w){console.log("Audio contexts not supported/allowed yet by browser policy:",w)}};le.useEffect(()=>{l(r),h(!0);const w=Date.now()+r*1e3;T(w),navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({type:"SCHEDULE_NOTIFICATION",title:"Fim do Descanso!",body:"Hora de começar a próxima série!",delay:r*1e3+500})},[r]),le.useEffect(()=>(c&&s>0&&_?N.current=setInterval(()=>{const w=Math.max(0,Math.round((_-Date.now())/1e3));l(w),w===0&&(clearInterval(N.current),z(),navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({type:"CANCEL_NOTIFICATION"}),e())},500):s===0&&clearInterval(N.current),()=>clearInterval(N.current)),[c,s,_,e]),le.useEffect(()=>{const w=document.title;if(c&&s>0){const A=Math.floor(s/60),C=s%60,k=`${A.toString().padStart(2,"0")}:${C.toString().padStart(2,"0")}`;document.title=`⏱️ ${k} - Descanso | KademIA`}return()=>{document.title=w}},[c,s]);const G=()=>{if(c)h(!1),T(null),navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({type:"CANCEL_NOTIFICATION"});else{h(!0);const w=Date.now()+s*1e3;T(w),navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({type:"SCHEDULE_NOTIFICATION",title:"Fim do Descanso!",body:"Hora de começar a próxima série!",delay:s*1e3+500})}},D=()=>{l(w=>{const A=w+30;if(c){const C=Date.now()+A*1e3;T(C),navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({type:"SCHEDULE_NOTIFICATION",title:"Fim do Descanso!",body:"Hora de começar a próxima série!",delay:A*1e3+500})}return A})},J=()=>{clearInterval(N.current),navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({type:"CANCEL_NOTIFICATION"}),e()},$=60,ae=2*Math.PI*$,W=r>0?(r-s)/r:0,me=ae-W*ae,ge=696,Ce=ge-s/r*ge,xe=w=>{const A=Math.floor(w/60),C=w%60;return`${A.toString().padStart(2,"0")}:${C.toString().padStart(2,"0")}`};return m.jsxs("div",{className:`timer-overlay-wrapper ${p?"is-minimized":"is-maximized"} animate-fade-in`,children:[p?m.jsxs("div",{className:"timer-dynamic-island glass-dark animate-island-pop",onClick:()=>y(!1),title:"Maximizar",children:[m.jsxs("div",{className:"island-content",children:[m.jsxs("div",{className:"island-info",children:[m.jsx(Ou,{size:18,className:"island-clock-icon animate-pulse"}),m.jsx("span",{className:"island-digits",children:xe(s)})]}),m.jsxs("div",{className:"island-controls",onClick:w=>w.stopPropagation(),children:[m.jsx("button",{className:"btn-island-control",onClick:G,title:c?"Pausar":"Iniciar",children:c?m.jsx(Cv,{size:14}):m.jsx(ku,{size:14})}),m.jsx("button",{className:"btn-island-control btn-island-pill",onClick:D,children:"+30s"}),m.jsx("button",{className:"btn-island-control",onClick:J,title:"Pular descanso",children:m.jsx(Nv,{size:14})})]}),m.jsx("div",{className:"island-actions",children:m.jsx("button",{className:"btn-island-action",onClick:w=>{w.stopPropagation(),y(!1)},title:"Maximizar",children:m.jsx(yE,{size:18})})})]}),m.jsxs("svg",{className:"island-border-progress-svg",viewBox:"0 0 320 54",width:"320",height:"54",children:[m.jsx("path",{className:"island-border-progress-track",d:"M 160 1 H 293 A 26 26 0 0 1 293 53 H 27 A 26 26 0 0 1 27 1 Z",fill:"none"}),m.jsx("path",{className:"island-border-progress-rect",d:"M 160 1 H 293 A 26 26 0 0 1 293 53 H 27 A 26 26 0 0 1 27 1 Z",fill:"none",strokeDasharray:"696",strokeDashoffset:Ce})]})]}):m.jsxs("div",{className:"timer-modal glass animate-slide-up",children:[m.jsxs("div",{className:"timer-header",children:[m.jsxs("div",{className:"timer-header-title",children:[m.jsx(Ou,{size:20,className:"timer-header-icon"}),m.jsx("span",{children:"Timer de Descanso"})]}),m.jsx("button",{className:"btn-minimize",onClick:()=>y(!0),title:"Minimizar",children:m.jsx(gE,{size:18})})]}),m.jsxs("div",{className:"timer-circle-container",children:[m.jsxs("svg",{className:"timer-svg",width:"140",height:"140",children:[m.jsx("circle",{className:"timer-circle-bg",cx:"70",cy:"70",r:$,strokeWidth:"6"}),m.jsx("circle",{className:"timer-circle-progress",cx:"70",cy:"70",r:$,strokeWidth:"6",strokeDasharray:ae,strokeDashoffset:me,strokeLinecap:"round"})]}),m.jsx("div",{className:"timer-digits",children:xe(s)})]}),m.jsxs("div",{className:"timer-controls",children:[m.jsx("button",{className:"btn btn-secondary btn-circle",onClick:G,children:c?m.jsx(Cv,{size:20}):m.jsx(ku,{size:20})}),m.jsx("button",{className:"btn btn-primary btn-pill",onClick:D,children:"+30s"}),m.jsx("button",{className:"btn btn-secondary btn-circle",onClick:J,children:m.jsx(Nv,{size:20})})]}),m.jsx("button",{className:"btn-cancel-timer",onClick:i,children:"Pular Descanso"})]}),m.jsx("style",{children:`
        .timer-overlay-wrapper.is-maximized {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(31, 31, 31, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .timer-overlay-wrapper.is-minimized {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          pointer-events: none;
        }

        .timer-modal {
          width: 100%;
          max-width: 320px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          border-radius: 28px;
          box-shadow: 0 8px 32px var(--glass-shadow);
        }

        .timer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          color: var(--color-text-secondary);
          font-family: var(--font-title);
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 20px;
        }

        .timer-header-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-minimize {
          background: none;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s;
        }

        .btn-minimize:hover {
          background: var(--border-color);
          color: var(--color-text-primary);
        }

        .timer-header-icon {
          color: var(--accent-purple);
        }

        .timer-circle-container {
          position: relative;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .timer-svg {
          transform: rotate(-90deg);
        }

        .timer-circle-bg {
          fill: none;
          stroke: var(--border-color);
          opacity: 0.25;
        }

        .timer-circle-progress {
          fill: none;
          stroke: var(--accent-purple);
          transition: stroke-dashoffset 1s linear;
        }

        .timer-digits {
          position: absolute;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--color-text-primary);
          font-family: var(--font-title);
          letter-spacing: -0.02em;
        }

        .timer-controls {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          width: 100%;
          justify-content: center;
        }

        .btn-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          padding: 0;
        }

        .btn-pill {
          padding: 10px 20px;
          font-size: 0.95rem;
          border-radius: 99px;
        }

        .btn-cancel-timer {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-size: 0.85rem;
          cursor: pointer;
          font-weight: 500;
          transition: color 0.2s;
        }

        .btn-cancel-timer:hover {
          color: var(--status-error);
        }

        /* Ilha Dinâmica (Dynamic Island) no Topo-Centro */
        .timer-dynamic-island {
          pointer-events: auto;
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 320px;
          height: 54px;
          background: rgba(18, 18, 20, 0.8);
          border-radius: 27px;
          border: none;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px) saturate(190%);
          -webkit-backdrop-filter: blur(20px) saturate(190%);
          overflow: hidden;
          z-index: 1001;
          display: flex;
          flex-direction: column;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .timer-dynamic-island:hover {
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.5);
          transform: translateX(-50%) scale(1.02);
        }

        .island-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 18px;
          height: 100%;
          width: 100%;
          gap: 16px;
          position: relative;
          z-index: 2;
        }

        .island-info {
          display: flex;
          align-items: center;
          gap: 8px;
          user-select: none;
        }

        .island-clock-icon {
          color: var(--accent-purple);
        }

        .island-digits {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          font-family: var(--font-title);
          letter-spacing: -0.01em;
        }

        .island-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-island-control {
          background: rgba(255, 255, 255, 0.12);
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .btn-island-control:hover {
          background: rgba(255, 255, 255, 0.24);
          transform: scale(1.08);
        }

        .btn-island-control:active {
          transform: scale(0.95);
        }

        .btn-island-pill {
          width: auto;
          height: 34px;
          padding: 0 12px;
          border-radius: 17px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .island-actions {
          display: flex;
          align-items: center;
        }

        .btn-island-action {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .btn-island-action:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .island-border-progress-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .island-border-progress-track {
          stroke: rgba(255, 255, 255, 0.08);
          stroke-width: 1.5px;
        }

        .island-border-progress-rect {
          stroke: var(--accent-purple);
          stroke-width: 1.5px;
          stroke-linecap: round;
          transition: stroke-dashoffset 1s linear;
        }

        .animate-island-pop {
          animation: islandPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes islandPop {
          from {
            transform: translateX(-50%) scale(0.85);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .5; }
        }
      `})]})}const _e="/KademIA/gifs/",Ge={"Mobilidade de Ombro c/ Bastão":_e+"Chest_And_Front_Of_Shoulder_Stretch.gif","Supino Reto (Barra ou Halteres)":_e+"Barbell_Bench_Press_-_Medium_Grip.gif","Supino Reto Vertical":_e+"Barbell_Bench_Press_-_Medium_Grip.gif","Supino Reto":_e+"Barbell_Bench_Press_-_Medium_Grip.gif","Supino Inclinado com Halteres":_e+"Barbell_Incline_Bench_Press_-_Medium_Grip.gif","Supino Inclinado Articulado":_e+"Barbell_Incline_Bench_Press_-_Medium_Grip.gif","Supino Inclinado":_e+"Barbell_Incline_Bench_Press_-_Medium_Grip.gif","Crucifixo Máquina (Pec Deck)":_e+"Butterfly.gif","Crucifixo Máquina":_e+"Butterfly.gif","Tríceps Pulley Barra":_e+"Reverse_Grip_Triceps_Pushdown.gif","Tríceps Pulley (Barra ou Corda)":_e+"Reverse_Grip_Triceps_Pushdown.gif","Tríceps Testa + Mergulho Banco":_e+"Cable_Lying_Triceps_Extension.gif","Tríceps Testa com Halteres":_e+"Cable_Lying_Triceps_Extension.gif","Tríceps Testa Barra":_e+"Cable_Lying_Triceps_Extension.gif","Panturrilha em Pé (Leg Press ou Máquina)":_e+"Rocking_Standing_Calf_Raise.gif","Panturrilha em Pé":_e+"Rocking_Standing_Calf_Raise.gif","Panturrilha em Pé (no Leg Press)":_e+"Calf_Press_On_The_Leg_Press_Machine.gif","Panturrilha Sentado":_e+"Barbell_Seated_Calf_Raise.gif","Desenvolvimento com Halteres":_e+"Alternating_Cable_Shoulder_Press.gif","Desenvolvimento Máquina":_e+"Alternating_Cable_Shoulder_Press.gif",Desenvolvimento:_e+"Alternating_Cable_Shoulder_Press.gif","Elevação Lateral com Halteres":_e+"Cable_Seated_Lateral_Raise.gif","Elevação Lateral":_e+"Cable_Seated_Lateral_Raise.gif","Elevação Lateral na Polia Baixa":_e+"Cable_Seated_Lateral_Raise.gif","Elevação Frontal na Polia":_e+"Cable_Seated_Lateral_Raise.gif","Crucifixo Inverso (Máquina ou Halteres)":_e+"Cable_Rear_Delt_Fly.gif","Crucifixo Inverso":_e+"Cable_Rear_Delt_Fly.gif","Facepull na Polia Alta":_e+"Face_Pull.gif",Facepull:_e+"Face_Pull.gif","Abdominal Supra na Polia com Carga":_e+"Ab_Crunch_Machine.gif","Abdominal Supra (Polia ou Solo)":_e+"Ab_Crunch_Machine.gif","Abdominal Prancha Baixa":_e+"Plank.gif","Cadeira Extensora":_e+"Leg_Extensions.gif",Extensora:_e+"Leg_Extensions.gif","Agachamento (Livre ou Smith)":_e+"Barbell_Full_Squat.gif","Agachamento Smith (ou Hack)":_e+"Barbell_Full_Squat.gif",Agachamento:_e+"Barbell_Full_Squat.gif","Stiff com Halteres ou Barra":_e+"Smith_Machine_Stiff-Legged_Deadlift.gif",Stiff:_e+"Smith_Machine_Stiff-Legged_Deadlift.gif","Leg Press 180°":_e+"Calf_Press_On_The_Leg_Press_Machine.gif","LegPress 180":_e+"Calf_Press_On_The_Leg_Press_Machine.gif","Leg 180 (Foco em Quadríceps)":_e+"Calf_Press_On_The_Leg_Press_Machine.gif","Leg 45":_e+"Calf_Press_On_The_Leg_Press_Machine.gif","Afundo com Halteres":_e+"Barbell_Lunge.gif","Afundo Halter":_e+"Barbell_Lunge.gif","Mesa Flexora":_e+"Ball_Leg_Curl.gif","Flexora Deitada (Mesa Flexora)":_e+"Ball_Leg_Curl.gif","Flexora Deitado":_e+"Ball_Leg_Curl.gif","Flexora em Pé":_e+"Ball_Leg_Curl.gif","Cadeira Adutora / Abdutora":_e+"Adductor.gif","Adução Máquina":_e+"Adductor.gif",Adutora:_e+"Adductor.gif","Abdução Máquina":_e+"Adductor.gif",Abdutora:_e+"Adductor.gif","Puxada Alta Pronada":_e+"Close-Grip_Front_Lat_Pulldown.gif","Puxada Alta Neutra":_e+"Close-Grip_Front_Lat_Pulldown.gif","Puxada Alta Supinada":_e+"Close-Grip_Front_Lat_Pulldown.gif","Remada Baixa Pronada":_e+"Seated_Cable_Rows.gif","Remada Baixa Neutra":_e+"Seated_Cable_Rows.gif","Remada Alta Polia Baixa + Encolhimento":_e+"Dumbbell_One-Arm_Upright_Row.gif","Remada Alta na Polia Baixa":_e+"Dumbbell_One-Arm_Upright_Row.gif","Encolhimento com Halteres":_e+"Dumbbell_One-Arm_Upright_Row.gif","Rosca Direta com Barra":_e+"Barbell_Curl.gif","Rosca Direta Barra":_e+"Barbell_Curl.gif","Rosca Martelo com Halteres":_e+"Alternate_Hammer_Curl.gif","Rosca Martelo Barra H":_e+"Alternate_Hammer_Curl.gif","Rosca Martelo Halter":_e+"Alternate_Hammer_Curl.gif","Cardio Moderado (Esteira)":_e+"Running_Treadmill_Flat.gif","Cardio (Corrida/Trote)":_e+"Running_Treadmill_Flat.gif","Cardio (Corrida/Elíptico)":_e+"Running_Treadmill_Flat.gif","Agachamento Sumô":_e+"Barbell_Full_Squat.gif","Elevação de Quadril Máquina (Hip Thrust)":_e+"Barbell_Full_Squat.gif","Abdominal Infra / Elevação Pernas":_e+"Ab_Crunch_Machine.gif"};function Hs(r){if(!r)return null;if(Ge[r])return Ge[r];const e=r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.includes("supino reto")?Ge["Supino Reto (Barra ou Halteres)"]:e.includes("supino inclinado")?Ge["Supino Inclinado com Halteres"]:e.includes("crucifixo maquina")||e.includes("pec deck")||e.includes("crucifixo")?Ge["Crucifixo Máquina (Pec Deck)"]:e.includes("desenvolvimento")?Ge["Desenvolvimento com Halteres"]:e.includes("elevacao lateral polia")?Ge["Elevação Lateral na Polia Baixa"]:e.includes("elevacao lateral")?Ge["Elevação Lateral com Halteres"]:e.includes("elevacao frontal")?Ge["Elevação Frontal na Polia"]:e.includes("crucifixo inverso")?Ge["Crucifixo Inverso (Máquina ou Halteres)"]:e.includes("facepull")||e.includes("face pull")?Ge["Facepull na Polia Alta"]:e.includes("triceps pulley")||e.includes("triceps corda")||e.includes("triceps barra")?Ge["Tríceps Pulley Barra"]:e.includes("triceps testa")||e.includes("mergulho banco")?Ge["Tríceps Testa + Mergulho Banco"]:e.includes("panturrilha")?Ge["Panturrilha em Pé"]:e.includes("extensora")?Ge["Cadeira Extensora"]:e.includes("agachamento sumo")?Ge["Agachamento Sumô"]:e.includes("agachamento")?Ge["Agachamento (Livre ou Smith)"]:e.includes("stiff")?Ge["Stiff com Halteres ou Barra"]:e.includes("legpress")||e.includes("leg press")||e.includes("leg 45")||e.includes("leg 180")?Ge["Leg Press 180°"]:e.includes("afundo")?Ge["Afundo com Halteres"]:e.includes("mesa flexora")||e.includes("flexora deitada")||e.includes("flexora deitado")?Ge["Mesa Flexora"]:e.includes("flexora")?Ge["Flexora em Pé"]:e.includes("adutora")||e.includes("aducao")||e.includes("abdutora")||e.includes("abducao")?Ge["Cadeira Adutora / Abdutora"]:e.includes("puxada alta")?Ge["Puxada Alta Pronada"]:e.includes("remada baixa")||e.includes("remada pronada")||e.includes("remada neutra")?Ge["Remada Baixa Pronada"]:e.includes("remada alta")?Ge["Remada Alta Polia Baixa + Encolhimento"]:e.includes("encolhimento")?Ge["Encolhimento com Halteres"]:e.includes("rosca direta")?Ge["Rosca Direta com Barra"]:e.includes("rosca martelo")?Ge["Rosca Martelo com Halteres"]:e.includes("hip thrust")||e.includes("elevacao de quadril")?Ge["Elevação de Quadril Máquina (Hip Thrust)"]:e.includes("prancha")?Ge["Abdominal Prancha Baixa"]:e.includes("abdominal infra")||e.includes("elevacao pernas")?Ge["Abdominal Infra / Elevação Pernas"]:e.includes("abdominal")?Ge["Abdominal Supra na Polia com Carga"]:e.includes("cardio")||e.includes("esteira")||e.includes("corrida")||e.includes("trote")?Ge["Cardio Moderado (Esteira)"]:e.includes("mobilidade")?Ge["Mobilidade de Ombro c/ Bastão"]:null}function _E(){const r=new Set,e=[];for(const[i,s]of Object.entries(Ge))r.has(s)||(r.add(s),e.push({name:i,gifUrl:s}));return e}function Dv(r){const e=_E();if(!r||!r.trim())return e;const i=r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.filter(s=>s.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(i))}function e_(r,e){return new Promise((i,s)=>{var l,c,h;try{const p=(e==null?void 0:e.name)||r.userName||"Wagner",y=r.routineName||"Treino",_=r.routineId?String(r.routineId).toUpperCase():"A",T=new Date(r.date||Date.now()),N=T.toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit",month:"long",year:"numeric"}),z=T.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),G=((l=r.exercises)==null?void 0:l.reduce((Z,de)=>{var ve;return Z+(((ve=de.setsData)==null?void 0:ve.reduce((Te,Ye)=>Te+(parseFloat(Ye.load)||0)*(parseInt(Ye.reps)||0),0))||0)},0))||0,D=((c=r.exercises)==null?void 0:c.reduce((Z,de)=>{var ve;return Z+(((ve=de.setsData)==null?void 0:ve.length)||0)},0))||0,J=((h=r.exercises)==null?void 0:h.reduce((Z,de)=>{var ve;return Z+(((ve=de.setsData)==null?void 0:ve.filter(Te=>Te.completed).length)||0)},0))||0,$=r.exercises||[],ae=640,W=28,me=24,ge=ae-W*2,xe=document.createElement("canvas").getContext("2d");if(!xe){s(new Error("Não foi possível inicializar o contexto 2D do Canvas."));return}xe.font="bold 12px sans-serif";let w=0;w+=36,w+=24,w+=32,w+=22,w+=38,w+=24,w+=28,$.forEach(Z=>{w+=28;const de=Z.setsData||[];let ve=W+24,Te=1;de.forEach((Ye,Fe)=>{const Rt=Ye.load?`${Ye.load}kg`:"--",yt=Ye.reps||"0",tt=`${Ye.setNum||Fe+1}ª `,It=`${Rt} × ${yt} `,bn=xe.measureText(tt).width,ne=xe.measureText(It).width,ue=xe.measureText("✓").width,ye=bn+ne+ue+20;ve+ye>ae-W-24&&ve>W+24&&(ve=W+24,Te++),ve+=ye+8}),w+=Te*34+10}),w+=20;const A=me+12,C=A+w,k=C+me+16,O=document.createElement("canvas");O.width=ae,O.height=k;const S=O.getContext("2d");if(!S){s(new Error("Não foi possível inicializar o contexto 2D do Canvas."));return}S.clearRect(0,0,ae,k);const R=14,be=10;S.beginPath();let he=W;for(S.moveTo(he,A);he<W+ge;){const Z=Math.min(he+R,W+ge),de=he+(Z-he)/2;S.lineTo(de,A-be),S.lineTo(Z,A),he=Z}for(S.lineTo(W+ge,C);he>W;){const Z=Math.max(he-R,W),de=he-(he-Z)/2;S.lineTo(de,C+be),S.lineTo(Z,C),he=Z}S.lineTo(W,A),S.closePath(),S.fillStyle="#1A1E26",S.fill(),S.strokeStyle="rgba(255, 255, 255, 0.15)",S.lineWidth=2,S.stroke();const L=(Z,de,ve,Te=24,Ye="#ADFF2F")=>{Z.save(),Z.fillStyle=Ye;const Fe=Te/24;Z.translate(de,ve),Z.scale(Fe,Fe),Z.beginPath(),typeof Z.roundRect=="function"?(Z.roundRect(2,9,2,6,1),Z.roundRect(5,6,3,12,1.5),Z.roundRect(8,10.5,8,3,1),Z.roundRect(16,6,3,12,1.5),Z.roundRect(20,9,2,6,1)):(Z.rect(2,9,2,6),Z.rect(5,6,3,12),Z.rect(8,10.5,8,3),Z.rect(16,6,3,12),Z.rect(20,9,2,6)),Z.fill(),Z.restore()};let B=A+36;L(S,W+24,B-20,22,"#ADFF2F"),S.fillStyle="#ADFF2F",S.font="bold 24px sans-serif",S.textAlign="left",S.fillText("KADEMIA",W+24+30,B);const se="TÁ PAGO ✓";S.font="bold 13px sans-serif";const Re=S.measureText(se).width+24,Ne=ae-W-24-Re;S.fillStyle="rgba(173, 255, 47, 0.15)",S.strokeStyle="#ADFF2F",S.lineWidth=1.5,S.beginPath(),typeof S.roundRect=="function"?S.roundRect(Ne,B-20,Re,28,14):S.rect(Ne,B-20,Re,28),S.fill(),S.stroke(),S.fillStyle="#ADFF2F",S.fillText(se,Ne+12,B-1),B+=24,S.strokeStyle="rgba(255, 255, 255, 0.12)",S.setLineDash([6,6]),S.beginPath(),S.moveTo(W+24,B),S.lineTo(ae-W-24,B),S.stroke(),S.setLineDash([]),B+=28;const j=W+24,M=B-14,Q=14;S.fillStyle="#ADFF2F",S.beginPath(),S.arc(j+Q,M+Q,Q,0,Math.PI*2),S.fill(),S.fillStyle="#000000",S.font="bold 15px sans-serif",S.textAlign="center",S.fillText(_.charAt(0),j+Q,M+Q+5),S.fillStyle="#FFFFFF",S.font="bold 18px sans-serif",S.textAlign="left",S.fillText(y,j+Q*2+12,B+4),S.fillStyle="#94A3B8",S.font="14px sans-serif",S.textAlign="right",S.fillText(z,ae-W-24,B+4),B+=24,S.fillStyle="#CBD5E1",S.font="13px sans-serif",S.textAlign="left",S.fillText(`Atleta: ${p} • ${N}`,W+24,B+6),B+=32,S.textAlign="left";const fe=(Z,de,ve=!1)=>{S.font="bold 12px sans-serif";const Te=S.measureText(de).width+24;return S.fillStyle=ve?"rgba(173, 255, 47, 0.15)":"rgba(255, 255, 255, 0.05)",S.strokeStyle=ve?"#ADFF2F":"rgba(255, 255, 255, 0.15)",S.lineWidth=1,S.beginPath(),typeof S.roundRect=="function"?S.roundRect(Z,B,Te,28,8):S.rect(Z,B,Te,28),S.fill(),S.stroke(),S.fillStyle=ve?"#ADFF2F":"#E2E8F0",S.fillText(de,Z+12,B+18),Te};let K=W+24;K+=fe(K,`⏱️ ${r.duration||0} min`)+10,K+=fe(K,`Vol: ${G.toLocaleString("pt-BR")} kg`)+10,fe(K,`Séries: ${J}/${D}`,!0),B+=44,S.strokeStyle="rgba(255, 255, 255, 0.12)",S.setLineDash([6,6]),S.beginPath(),S.moveTo(W+24,B),S.lineTo(ae-W-24,B),S.stroke(),S.setLineDash([]),B+=28,S.fillStyle="#FFFFFF",S.font="bold 16px sans-serif",S.fillText("Exercícios Realizados",W+24,B),B+=24,$.forEach(Z=>{S.fillStyle="#F1F5F9",S.font="bold 15px sans-serif",S.fillText(Z.name,W+24,B),B+=10;const de=Z.setsData||[];let ve=W+24;de.forEach((Te,Ye)=>{const Fe=Te.load?`${Te.load}kg`:"--",Rt=Te.reps||"0",yt=Te.completed?"✓":"✕";S.font="bold 12px sans-serif";const tt=`${Te.setNum||Ye+1}ª `,It=`${Fe} × ${Rt} `,bn=S.measureText(tt).width,ne=S.measureText(It).width,ue=S.measureText(yt).width,ye=bn+ne+ue+20;ve+ye>ae-W-24&&ve>W+24&&(ve=W+24,B+=34),S.fillStyle="rgba(255, 255, 255, 0.05)",S.strokeStyle="rgba(255, 255, 255, 0.12)",S.lineWidth=1,S.beginPath(),typeof S.roundRect=="function"?S.roundRect(ve,B+6,ye,26,6):S.rect(ve,B+6,ye,26),S.fill(),S.stroke();let ee=ve+10;S.fillStyle="#94A3B8",S.fillText(tt,ee,B+23),ee+=bn,S.fillStyle="#FFFFFF",S.fillText(It,ee,B+23),ee+=ne,S.fillStyle=Te.completed?"#4ADE80":"#EF4444",S.fillText(yt,ee,B+23),ve+=ye+8}),B+=38}),O.toBlob(Z=>{Z?i(Z):s(new Error("Falha ao gerar a imagem PNG do comprovante."))},"image/png")}catch(p){s(p)}})}function t_({session:r,profile:e,onClose:i}){var N,z,G,D;const[s,l]=le.useState(!1);if(!r)return null;const c=((N=r.exercises)==null?void 0:N.reduce((J,$)=>{var ae;return J+(((ae=$.setsData)==null?void 0:ae.reduce((W,me)=>W+(parseFloat(me.load)||0)*(parseInt(me.reps)||0),0))||0)},0))||0,h=((z=r.exercises)==null?void 0:z.reduce((J,$)=>{var ae;return J+(((ae=$.setsData)==null?void 0:ae.filter(W=>W.completed).length)||0)},0))||0,p=new Date(r.date||Date.now());p.toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});const y=p.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),_=`#KDM-${p.getTime().toString(36).toUpperCase()}`;e!=null&&e.name;const T=async()=>{l(!0);try{const J=await e_(r,e),$=`comprovante_treino_${r.routineId}_${p.toISOString().split("T")[0]}.png`,ae=new File([J],$,{type:"image/png"});if(navigator.share&&navigator.canShare&&navigator.canShare({files:[ae]}))await navigator.share({title:"Comprovante de Treino - KademIA",text:`Treino ${r.routineName} concluído! 💪`,files:[ae]});else{const W=URL.createObjectURL(J),me=document.createElement("a");me.href=W,me.download=$,document.body.appendChild(me),me.click(),document.body.removeChild(me),URL.revokeObjectURL(W)}}catch(J){console.error("Erro ao gerar ou compartilhar comprovante:",J),alert("Não foi possível gerar a imagem do comprovante. Tente novamente.")}finally{l(!1)}};return m.jsx("div",{className:"modal-overlay animate-fade-in",style:{zIndex:11e3},children:m.jsxs("div",{className:"modal-content receipt-modal-box glass animate-slide-up",style:{maxWidth:"440px",padding:"0"},children:[m.jsxs("div",{id:"printable-receipt",className:"receipt-paper",children:[m.jsxs("div",{className:"receipt-header",children:[m.jsxs("div",{className:"receipt-brand",children:[m.jsx(Qs,{size:22,className:"receipt-logo-icon"}),m.jsx("span",{className:"receipt-brand-title",children:"KADEMIA"})]}),m.jsx("span",{className:"receipt-badge-stamp",children:"TÁ PAGO ✓"})]}),m.jsx("div",{className:"receipt-divider-dashed"}),m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[m.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"var(--accent-lime)",color:"#000",fontWeight:"700",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.9rem"},children:(r.routineId||"A").toString().charAt(0).toUpperCase()}),m.jsx("h4",{style:{margin:0,fontSize:"1.05rem",fontWeight:"700",color:"#fff"},children:r.routineName})]}),m.jsx("span",{style:{fontSize:"0.85rem",color:"var(--color-text-secondary)"},children:y})]}),m.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"16px"},children:[m.jsxs("div",{style:{padding:"4px 10px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-color)",fontSize:"0.8rem",color:"#e2e8f0",fontWeight:"600"},children:["⏱️ ",r.duration||0," min"]}),m.jsxs("div",{style:{padding:"4px 10px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid var(--border-color)",fontSize:"0.8rem",color:"#e2e8f0",fontWeight:"600"},children:["Vol: ",c.toLocaleString("pt-BR")," kg"]}),m.jsxs("div",{style:{padding:"4px 10px",borderRadius:"8px",background:"rgba(173, 255, 47, 0.15)",border:"1px solid var(--accent-lime)",fontSize:"0.8rem",color:"var(--accent-lime)",fontWeight:"700"},children:["Séries: ",h,"/",((G=r.exercises)==null?void 0:G.reduce((J,$)=>{var ae;return J+(((ae=$.setsData)==null?void 0:ae.length)||0)},0))||0]})]}),m.jsx("div",{className:"receipt-divider-dashed"}),m.jsxs("div",{className:"receipt-exercises-breakdown",style:{textAlign:"left"},children:[m.jsx("h5",{className:"details-title",style:{fontSize:"0.9rem",color:"#fff",marginBottom:"12px"},children:"Exercícios Realizados"}),(D=r.exercises)==null?void 0:D.map((J,$)=>{var ae;return m.jsxs("div",{className:"details-ex-item",style:{marginBottom:"14px"},children:[m.jsx("span",{className:"details-ex-name",style:{fontSize:"0.9rem",fontWeight:"700",color:"#f1f5f9",display:"block",marginBottom:"6px"},children:J.name}),m.jsx("div",{className:"details-sets-list",style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:(ae=J.setsData)==null?void 0:ae.map((W,me)=>m.jsxs("div",{className:`details-set-bubble ${W.completed?"ok":"nok"}`,style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"4px 8px",borderRadius:"6px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.12)",fontSize:"0.78rem"},children:[m.jsxs("span",{className:"set-num",style:{color:"var(--color-text-muted)",fontWeight:"600"},children:[W.setNum||me+1,"ª"]}),m.jsxs("span",{className:"set-val",style:{color:"#fff",fontWeight:"700"},children:[W.load?`${W.load}kg`:"--"," × ",W.reps||"0"]}),W.completed?m.jsx("span",{style:{color:"#4ade80",fontWeight:"bold",marginLeft:"2px"},children:"✓"}):m.jsx("span",{style:{color:"#ef4444",fontWeight:"bold",marginLeft:"2px"},children:"✕"})]},me))})]},$)})]}),m.jsx("div",{className:"receipt-divider-dashed"}),m.jsxs("div",{className:"receipt-footer",children:[m.jsxs("span",{className:"r-auth-code",children:["AUTENTICAÇÃO: ",_]}),m.jsx("span",{className:"r-footer-tag",children:"KademIA PWA • Resiliência & Alta Performance"})]})]}),m.jsxs("div",{className:"receipt-actions-bar no-print",children:[m.jsxs("button",{type:"button",className:"btn btn-lime",onClick:T,disabled:s,style:{justifyContent:"center"},children:[m.jsx(Z0,{size:16})," ",s?"Gerando Imagem PNG...":"Salvar / Compartilhar PNG"]}),m.jsx("button",{type:"button",className:"btn btn-secondary",onClick:i,style:{justifyContent:"center"},children:"Fechar"})]})]})})}function bE({name:r,gifUrl:e}){const i=e||Hs(r),[s,l]=le.useState(0),c=typeof i=="string"&&(i.endsWith(".gif")||i.endsWith(".webp")||i.endsWith(".mp4"));if(le.useEffect(()=>{if(!i||c)return;const y=setInterval(()=>{l(_=>_===0?1:0)},1100);return()=>clearInterval(y)},[i,c]),!i)return null;if(c)return i.endsWith(".mp4")?m.jsx("div",{className:"exercise-gif-drawer animate-slide-down",children:m.jsx("video",{src:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"exercise-gif"})}):m.jsx("div",{className:"exercise-gif-drawer animate-slide-down",children:m.jsx("img",{src:i,alt:r,className:"exercise-gif",loading:"eager"})});const h=typeof i=="string"?i:i.static||i.src0,p=h?h.replace("_0.jpg","_1.jpg"):"";return m.jsxs("div",{className:"exercise-gif-drawer animate-slide-down",style:{position:"relative",minHeight:"220px",display:"flex",justifyContent:"center",alignItems:"center"},children:[m.jsx("img",{src:h,alt:`${r} - Posição 1`,className:"exercise-gif",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"contain",transition:"opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)",opacity:s===0?1:0},loading:"eager"}),p&&m.jsx("img",{src:p,alt:`${r} - Posição 2`,className:"exercise-gif",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"contain",transition:"opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)",opacity:s===1?1:0},loading:"eager"})]})}const Ef=r=>/cardio|corrida|trote|esteira|caminhada|bike|bicicleta|elíptico|running|spinning/i.test(r);function xE({routine:r,history:e,onSaveWorkout:i,onCancelWorkout:s,profile:l}){const[c,h]=le.useState([]),[p,y]=le.useState(null),[_,T]=le.useState(()=>new Date),[N,z]=le.useState(""),[G,D]=le.useState(!1),[J,$]=le.useState(null),[ae,W]=le.useState(null),me=R=>{$(be=>be===R?null:R)};le.useEffect(()=>{try{const he=localStorage.getItem("kademia_active_workout_state");if(he){const L=JSON.parse(he);if(L.routineId===r.id){h(L.exercisesState),T(new Date(L.startTime)),z(L.notes||""),console.log("Restaurou treino ativo salvo para ficha:",r.id);return}}}catch(he){console.error("Erro ao carregar active workout state do localStorage:",he)}const R=he=>{var L;for(const B of e){const se=(L=B.exercises)==null?void 0:L.find(Re=>Re.name.toLowerCase()===he.toLowerCase());if(se&&se.setsData&&se.setsData.length>0)return se.setsData}return null},be=r.exercises.map(he=>{const L=R(he.name),B=Ef(he.name);return{...he,setsData:Array.from({length:he.sets}).map((se,Re)=>{const Ne=L&&L[Re]?L[Re]:L&&L.length>0?L[L.length-1]:null;return{setNum:Re+1,load:Ne?Ne.load:he.load||"",reps:Ne&&Ne.reps?Ne.reps:B?"Corrida":he.reps.includes("-")?he.reps.split("-")[1]:he.reps,completed:!1}})}});h(be)},[r,e]),le.useEffect(()=>{c&&c.length>0&&localStorage.setItem("kademia_active_workout_state",JSON.stringify({routineId:r.id,exercisesState:c,startTime:_.toISOString(),notes:N}))},[c,_,N,r.id]);const ge=(R,be)=>{const he=[...c],L=he[R].setsData[be],B=!L.completed;if(L.completed=B,h(he),B){const se=R===c.length-1,Re=be===he[R].setsData.length-1;se&&Re||y({duration:he[R].rest||60,exerciseName:he[R].name})}},Ce=(R,be,he,L)=>{const B=[...c];B[R].setsData[be][he]=L,h(B)},xe=(R,be,he,L)=>{const B=[...c],se=parseFloat(B[R].setsData[be][he])||0,Re=Math.max(0,se+L);B[R].setsData[be][he]=Math.round(Re).toString(),h(B)},w=R=>{const be=[...c],he=be[R].setsData,L=he[he.length-1],B=Ef(be[R].name);he.push({setNum:he.length+1,load:L?L.load:"",reps:L?L.reps:B?"Corrida":"",completed:!1}),be[R].sets=he.length,h(be)},A=R=>{const be=[...c],he=be[R].setsData;he.length>1&&(he.pop(),be[R].sets=he.length,h(be))},C=(R,be)=>{if(be==="up"&&R===0||be==="down"&&R===c.length-1)return;const he=[...c],L=be==="up"?R-1:R+1,B=he[R];he[R]=he[L],he[L]=B,h(he)},k=()=>{D(!0)},O=()=>{const be=new Date-_,he=Math.round(be/6e4),L=c.map(se=>({name:se.name,sets:se.sets,setsData:se.setsData.map(Re=>({setNum:Re.setNum,load:Re.load,reps:Re.reps,completed:Re.completed}))}));localStorage.removeItem("kademia_active_workout_state");const B={routineId:r.id,routineName:r.name,date:new Date().toISOString(),duration:he,notes:N,exercises:L};W(B)},S=()=>{ae&&i(ae)};return m.jsxs("div",{className:"active-workout-container animate-fade-in",children:[ae&&m.jsx(t_,{session:ae,profile:l,onClose:S}),p&&m.jsx(vE,{duration:p.duration,onFinish:()=>y(null),onCancel:()=>y(null)}),m.jsxs("header",{className:"active-workout-header",children:[m.jsxs("div",{children:[m.jsx("span",{className:"routine-tag-large",children:r.id}),m.jsx("h2",{className:"routine-title-large",children:r.name})]}),m.jsx("button",{className:"btn-cancel",onClick:s,children:"Desistir"})]}),G?m.jsxs("div",{className:"finish-workout-card glass animate-slide-up",children:[m.jsx("h3",{className:"finish-title",children:"Treino Concluído!"}),m.jsx("p",{className:"finish-desc",children:"Deseja adicionar alguma anotação sobre o treino de hoje?"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",htmlFor:"workout-notes",children:"Observações / Como se sentiu"}),m.jsx("textarea",{id:"workout-notes",className:"input-field textarea-field",value:N,onChange:R=>z(R.target.value),placeholder:"Ex: Treino muito produtivo. Consegui aumentar 2kg no agachamento.",rows:4})]}),m.jsxs("div",{className:"finish-actions",children:[m.jsx("button",{className:"btn btn-secondary",onClick:()=>D(!1),children:"Voltar ao Treino"}),m.jsx("button",{className:"btn btn-primary",onClick:O,children:"Salvar Treino"})]})]}):m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"exercises-list-wrapper",children:c.map((R,be)=>{const he=Ef(R.name);return m.jsxs("div",{className:"exercise-workout-card glass",children:[m.jsxs("div",{className:"ex-card-header",children:[m.jsxs("div",{className:"ex-card-title-container",children:[m.jsx("h4",{className:"ex-card-title",children:R.name}),Hs(R.name)&&m.jsx("button",{className:`btn-show-gif ${J===R.id?"active":""}`,onClick:()=>me(R.id),title:"Ver execução em 3D",type:"button",children:m.jsx(ku,{size:12})})]}),m.jsxs("div",{className:"ex-card-header-actions",children:[m.jsxs("div",{className:"ex-order-buttons",children:[m.jsx("button",{type:"button",className:"btn-order-move",onClick:()=>C(be,"up"),disabled:be===0,title:"Mover exercício para cima",children:m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("polyline",{points:"18 15 12 9 6 15"})})}),m.jsx("button",{type:"button",className:"btn-order-move",onClick:()=>C(be,"down"),disabled:be===c.length-1,title:"Mover exercício para baixo",children:m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),m.jsxs("div",{className:"ex-card-meta",children:[m.jsx(Ou,{size:14})," ",m.jsxs("span",{children:[R.rest,"s descanso"]})]})]})]}),R.observations&&m.jsxs("div",{className:"ex-card-observations",children:[m.jsx(om,{size:14})," ",m.jsx("span",{children:R.observations})]}),J===R.id&&m.jsx(bE,{name:R.name,gifUrl:R.gifUrl||R.customGif}),m.jsxs("div",{className:"sets-grid-header",children:[m.jsx("span",{children:"SÉRIE"}),m.jsx("span",{children:he?"DISTÂNCIA":"CARGA"}),m.jsx("span",{children:he?"TIPO":"REPETIÇÕES"}),m.jsx("span",{children:"STATUS"})]}),m.jsx("div",{className:"sets-rows",children:R.setsData.map((L,B)=>m.jsxs("div",{className:`set-row ${L.completed?"completed":""}`,children:[m.jsxs("span",{className:"set-number-label",children:[L.setNum,"ª"]}),m.jsxs("div",{className:"input-with-suffix",children:[m.jsx("input",{type:"number",step:he?"0.1":"1",pattern:"[0-9]*",inputMode:"decimal",className:"set-input load",value:L.load,disabled:L.completed,onChange:se=>Ce(be,B,"load",se.target.value),placeholder:"0"}),m.jsx("span",{className:"suffix",children:he?"km":"kg"})]}),he?m.jsx("div",{className:"cardio-type-container",children:m.jsxs("select",{className:"set-input reps cardio-select",value:L.reps||"Corrida",disabled:L.completed,onChange:se=>Ce(be,B,"reps",se.target.value),children:[m.jsx("option",{value:"Corrida",children:"Corrida"}),m.jsx("option",{value:"Caminhada",children:"Caminhada"}),m.jsx("option",{value:"Trote",children:"Trote"}),m.jsx("option",{value:"Misto",children:"Misto"})]})}):m.jsxs("div",{className:"input-spinner-container",children:[m.jsx("button",{type:"button",className:"btn-spinner dec",disabled:L.completed,onClick:()=>xe(be,B,"reps",-1),children:"-"}),m.jsx("input",{type:"number",pattern:"[0-9]*",inputMode:"numeric",className:"set-input reps reps-no-suffix",value:L.reps,disabled:L.completed,onChange:se=>Ce(be,B,"reps",se.target.value),placeholder:"0"}),m.jsx("button",{type:"button",className:"btn-spinner inc",disabled:L.completed,onClick:()=>xe(be,B,"reps",1),children:"+"})]}),m.jsx("button",{className:`btn-check-set ${L.completed?"checked":""}`,onClick:()=>ge(be,B),children:m.jsx(Sl,{size:16})})]},B))}),m.jsxs("div",{className:"sets-actions-row",children:[m.jsx("button",{type:"button",className:"btn-set-action remove",onClick:()=>A(be),disabled:R.setsData.length<=1,children:"- Remover Série"}),m.jsx("button",{type:"button",className:"btn-set-action add",onClick:()=>w(be),children:"+ Adicionar Série"})]})]},R.id)})}),m.jsx("button",{className:"btn btn-lime finish-workout-btn",onClick:k,children:"Finalizar Treino"})]}),m.jsx("style",{children:`
        .active-workout-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 20px 16px;
          min-height: 100vh;
        }

        .active-workout-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .routine-tag-large {
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--accent-purple);
          background: rgba(11, 87, 208, 0.08);
          padding: 4px 8px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 4px;
        }

        .routine-title-large {
          font-size: 1.5rem;
          color: var(--color-text-primary);
        }

        .btn-cancel {
          background: var(--status-error-glow);
          border: 1px solid var(--status-error-glow);
          color: var(--status-error);
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s;
          margin-right: 48px; /* Evita colisão com o botão de tema */
        }

        .btn-cancel:hover {
          background: var(--status-error-glow);
          opacity: 0.85;
        }

        .exercises-list-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .exercise-workout-card {
          padding: 16px;
        }

        .ex-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .ex-card-title {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          max-width: 70%;
        }

        .ex-card-header-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          flex-shrink: 0;
        }

        .ex-order-buttons {
          display: flex;
          gap: 4px;
        }

        .btn-order-move {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--color-text-secondary);
          border-radius: 6px;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0;
        }

        .btn-order-move:hover:not(:disabled) {
          border-color: var(--accent-purple);
          color: var(--accent-purple);
          background: var(--bg-card-hover);
        }

        .btn-order-move:disabled {
          opacity: 0.25;
          cursor: not-allowed;
        }

        .ex-card-meta {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .ex-card-observations {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--accent-lime);
          background: var(--accent-purple-glow);
          padding: 8px 10px;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .sets-grid-header {
          display: grid;
          grid-template-columns: 0.4fr 1.0fr 1.6fr 0.6fr;
          gap: 6px;
          font-size: 0.7rem;
          color: var(--color-text-muted);
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          padding: 0 4px;
        }

        .sets-rows {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .set-row {
          display: grid;
          grid-template-columns: 0.4fr 1.0fr 1.6fr 0.6fr;
          gap: 6px;
          align-items: center;
          padding: 8px;
          border-radius: 10px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          transition: all 0.2s;
        }

        .set-row.completed {
          background: var(--accent-purple-glow);
          border-color: var(--accent-lime-glow);
        }

        .set-number-label {
          font-family: var(--font-title);
          font-weight: 700;
          color: var(--color-text-secondary);
          padding-left: 4px;
        }

        /* Spinner container and buttons */
        .input-spinner-container {
          display: flex;
          align-items: center;
          gap: 4px;
          width: 100%;
        }

        .btn-spinner {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-text-primary);
          font-size: 0.95rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          transition: all 0.15s ease;
          padding: 0;
          flex-shrink: 0;
          box-shadow: none;
        }

        .btn-spinner:hover:not(:disabled) {
          background: var(--accent-active);
          border-color: var(--border-hover);
          transform: translateY(-1px);
        }

        .btn-spinner:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: none;
        }

        .btn-spinner:disabled {
          opacity: 0.35;
          cursor: not-allowed;
          box-shadow: none;
        }

        .input-with-suffix {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
        }

        .set-input {
          width: 100%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 8px 8px;
          color: var(--color-text-primary);
          text-align: right;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.2s;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.03);
        }

        .set-input.load {
          padding-right: 28px;
        }

        .set-input.reps {
          padding-right: 40px;
        }

        .set-input.reps-no-suffix {
          padding-right: 8px !important;
          text-align: center !important;
          flex: 1;
          min-width: 0;
        }

        .set-input:disabled {
          color: var(--color-text-secondary);
          border-color: transparent;
          background: transparent;
          box-shadow: none;
        }

        .set-input:focus {
          outline: none;
          border-color: var(--border-focus);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.03), 0 0 0 2px var(--accent-purple-glow);
        }

        .suffix {
          position: absolute;
          right: 6px;
          font-size: 0.72rem;
          color: var(--color-text-muted);
          pointer-events: none;
        }

        /* Cardio Select styling */
        .cardio-type-container {
          width: 100%;
        }

        .cardio-select {
          text-align: center;
          text-align-last: center;
          padding-right: 8px !important;
          cursor: pointer;
        }

        /* Sets action row buttons */
        .sets-actions-row {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 12px;
          padding: 0 4px;
        }

        .btn-set-action {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 8px;
          transition: all 0.2s;
          box-shadow: none;
        }

        .btn-set-action.add {
          color: var(--status-success);
          border-color: var(--accent-lime-glow);
        }

        .btn-set-action.add:hover {
          background: var(--accent-purple-glow);
          transform: translateY(-1px);
        }

        .btn-set-action.remove {
          color: var(--status-error);
          border-color: var(--status-error-glow);
        }

        .btn-set-action.remove:hover {
          background: var(--status-error-glow);
          transform: translateY(-1px);
        }

        .btn-set-action:disabled {
          opacity: 0.3;
          cursor: not-allowed;
          background: transparent;
          box-shadow: none;
          border-color: var(--border-color);
        }

        .btn-check-set {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--color-text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          justify-self: center;
          flex-shrink: 0;
          box-shadow: none;
        }

        .btn-check-set:hover {
          border-color: var(--accent-lime);
          color: var(--accent-lime);
          transform: translateY(-1px);
        }

        .btn-check-set:active {
          transform: translateY(0);
        }

        .btn-check-set.checked {
          background: var(--accent-lime);
          border-color: var(--accent-lime);
          color: var(--color-on-accent);
          box-shadow: 0 4px 12px var(--accent-lime-glow);
        }

        .finish-workout-btn {
          width: 100%;
          padding: 15px;
          margin-top: 10px;
          font-size: 1.1rem;
          border-radius: 12px;
        }

        /* Finish Card */
        .finish-workout-card {
          padding: 24px;
          text-align: center;
        }

        .finish-title {
          font-size: 1.6rem;
          color: var(--color-text-primary);
          margin-bottom: 8px;
        }

        .finish-desc {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        .textarea-field {
          resize: none;
        }

        .finish-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .finish-actions button {
          flex: 1;
        }

        .ex-card-title-container {
          display: flex;
          align-items: center;
          gap: 10px;
          max-width: 80%;
        }

        .btn-show-gif {
          background: rgba(11, 87, 208, 0.06);
          border: 1px solid rgba(11, 87, 208, 0.15);
          color: var(--accent-purple);
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
          flex-shrink: 0;
        }

        .btn-show-gif:hover {
          background: rgba(11, 87, 208, 0.15);
          transform: scale(1.08);
        }

        .btn-show-gif.active {
          background: var(--accent-purple);
          border-color: var(--accent-purple);
          color: white;
          transform: rotate(90deg);
        }

        .exercise-gif-drawer {
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 10px;
          margin-top: 8px;
          margin-bottom: 16px;
          overflow: hidden;
        }

        .dark-theme .exercise-gif-drawer {
          background: rgba(255, 255, 255, 0.02);
        }

        .exercise-gif {
          max-width: 100%;
          max-height: 220px;
          border-radius: 8px;
          object-fit: contain;
          transition: filter 0.3s ease;
        }

        .dark-theme .exercise-gif {
          filter: invert(0.92) hue-rotate(180deg);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.2s ease-out forwards;
        }
      `})]})}function EE({workoutData:r,onUpdateWorkoutData:e,syncProps:i}){const[s,l]=le.useState(()=>r.routines.length>0?r.routines[0].id:""),[c,h]=le.useState(null),[p,y]=le.useState({name:"",sets:3,reps:"10",rest:60,observations:"",gifUrl:""}),[_,T]=le.useState(!1),[N,z]=le.useState(!1),[G,D]=le.useState(""),[J,$]=le.useState(null),[ae,W]=le.useState(null),[me,ge]=le.useState(!1),[Ce,xe]=le.useState(!1),[w,A]=le.useState({id:"",name:""}),[C,k]=le.useState({name:""}),O=()=>{window.confirm("Deseja realmente restaurar as fichas padrão do KademIA? Suas personalizações atuais nas fichas serão perdidas (seu histórico de treinos salvos NÃO será afetado).")&&(e(ar),l(ar.routines[0].id))},S=r.routines.find(K=>K.id===s)||null,R=()=>{y({name:"",sets:3,reps:"10",rest:60,observations:"",gifUrl:""}),T(!0),h(null)},be=K=>{y({name:K.name,sets:K.sets,reps:K.reps,rest:K.rest,observations:K.observations||"",gifUrl:K.gifUrl||K.customGif||""}),h(K.id),T(!1)},he=K=>{if(K.preventDefault(),!p.name.trim()||!s)return;const Z=r.routines.map(de=>{if(de.id!==s)return de;let ve;if(_){const Te={id:`ex-${Date.now()}`,name:p.name.trim(),sets:parseInt(p.sets)||3,reps:p.reps.toString(),rest:parseInt(p.rest)||60,observations:p.observations.trim(),gifUrl:p.gifUrl||void 0};ve=[...de.exercises,Te]}else ve=de.exercises.map(Te=>Te.id!==c?Te:{...Te,name:p.name.trim(),sets:parseInt(p.sets)||3,reps:p.reps.toString(),rest:parseInt(p.rest)||60,observations:p.observations.trim(),gifUrl:p.gifUrl||void 0});return{...de,exercises:ve}});e({...r,routines:Z}),T(!1),h(null)},L=K=>{if(!window.confirm("Deseja realmente remover este exercício?"))return;const Z=r.routines.map(de=>de.id!==s?de:{...de,exercises:de.exercises.filter(ve=>ve.id!==K)});e({...r,routines:Z}),c===K&&h(null)},B=(K,Z)=>{$(Z),K.dataTransfer.effectAllowed="move",K.dataTransfer.setDragImage&&K.currentTarget.parentElement&&K.dataTransfer.setDragImage(K.currentTarget.parentElement,20,20)},se=(K,Z)=>{K.preventDefault(),W(Z)},Re=()=>{$(null),W(null)},Ne=K=>{if(J===null||J===K)return;const Z=r.routines.findIndex(Fe=>Fe.id===s);if(Z===-1)return;const de=r.routines[Z],ve=[...de.exercises],Te=ve[J];ve.splice(J,1),ve.splice(K,0,Te);const Ye=[...r.routines];Ye[Z]={...de,exercises:ve},e({...r,routines:Ye}),$(null),W(null)},j=K=>{K.preventDefault();const Z=w.id.trim().toUpperCase(),de=w.name.trim();if(!Z||!de)return;if(r.routines.some(Te=>Te.id===Z)){alert(`Já existe uma Ficha com a identificação "${Z}". Escolha outra (ex: E, F).`);return}const ve={id:Z,name:de,exercises:[]};e({...r,routines:[...r.routines,ve]}),l(Z),ge(!1),A({id:"",name:""})},M=K=>{K.preventDefault();const Z=C.name.trim();if(!Z)return;const de=r.routines.map(ve=>ve.id===s?{...ve,name:Z}:ve);e({...r,routines:de}),xe(!1)},Q=()=>{if(r.routines.length<=1){alert("Você precisa ter pelo menos uma Ficha de treino activa.");return}if(!window.confirm(`Deseja realmente apagar a Ficha ${s} (${S==null?void 0:S.name})?
Todos os exercícios cadastrados nela serão excluídos permanentemente!`))return;const K=r.routines.filter(Z=>Z.id!==s);e({...r,routines:K}),l(K[0].id)},fe=()=>{S&&(k({name:S.name}),xe(!0))};return m.jsxs("div",{className:"routine-manager-container animate-fade-in",children:[m.jsx("header",{className:"routine-manager-header",children:m.jsx("h2",{className:"routine-manager-title",children:"Gerenciar Fichas"})}),m.jsx("div",{className:"routine-tabs-wrapper",children:m.jsx("div",{className:"routine-tabs",children:r.routines.map(K=>m.jsxs("button",{className:`routine-tab-btn ${K.id===s?"active":""}`,onClick:()=>{l(K.id),T(!1),h(null)},children:["Treino ",K.id]},K.id))})}),m.jsxs("div",{className:"routine-action-buttons",children:[m.jsx("button",{className:"btn-routine-action edit",onClick:fe,disabled:!S,children:"Renomear Ficha"}),m.jsx("button",{className:"btn-routine-action delete",onClick:Q,disabled:!S,children:"Excluir Ficha"}),m.jsx("button",{className:"btn-routine-action add",onClick:()=>ge(!0),children:"Nova Ficha +"}),m.jsx("button",{className:"btn-routine-action reset",onClick:O,children:"Restaurar Padrão"})]}),S?m.jsxs("div",{className:"routine-details-wrapper",children:[m.jsxs("div",{className:"routine-meta-info",children:[m.jsx("h3",{children:S.name}),m.jsxs("span",{className:"exercise-count-badge",children:[S.exercises.length," exercícios"]})]}),(_||c)&&m.jsxs("form",{className:"exercise-form glass animate-slide-up",onSubmit:he,children:[m.jsx("h4",{className:"form-title",children:_?"Adicionar Exercício":"Editar Exercício"}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Nome do Exercício"}),m.jsx("input",{type:"text",className:"input-field",value:p.name,onChange:K=>y({...p,name:K.target.value}),placeholder:"Ex: Supino Inclinado c/ Halteres",required:!0})]}),m.jsxs("div",{className:"form-row-3",children:[m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Séries"}),m.jsx("input",{type:"number",className:"input-field",value:p.sets,onChange:K=>y({...p,sets:parseInt(K.target.value)||""}),min:"1",max:"10",required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Repetições"}),m.jsx("input",{type:"text",className:"input-field",value:p.reps,onChange:K=>y({...p,reps:K.target.value}),placeholder:"10 ou 10-12",required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Descanso (s)"}),m.jsx("input",{type:"number",className:"input-field",value:p.rest,onChange:K=>y({...p,rest:parseInt(K.target.value)||""}),min:"10",max:"300",placeholder:"Ex: 60",required:!0})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsxs("label",{className:"form-label",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{children:"Demonstração Visual (GIF)"}),p.gifUrl&&m.jsx("button",{type:"button",style:{fontSize:"0.75rem",cursor:"pointer",background:"none",border:"none",color:"#FF5252",fontWeight:600},onClick:()=>y({...p,gifUrl:""}),children:"Remover GIF"})]}),m.jsxs("div",{className:"gif-form-preview-card",children:[p.gifUrl||Hs(p.name)?m.jsxs("div",{className:"gif-preview-media",children:[m.jsx("img",{src:p.gifUrl||Hs(p.name),alt:"Demonstração selecionada",className:"exercise-gif",style:{maxHeight:"110px",borderRadius:"8px",objectFit:"contain"}}),m.jsx("span",{className:"gif-badge",children:p.gifUrl?"GIF Personalizado":"GIF Automático"})]}):m.jsx("div",{className:"gif-empty-info",children:m.jsx("span",{children:"Nenhum GIF selecionado"})}),m.jsxs("button",{type:"button",className:"btn-gif-picker-trigger",onClick:()=>{D(p.name||""),z(!0)},children:["🔍 ",p.gifUrl||Hs(p.name)?"Trocar GIF":"Buscar & Selecionar GIF"]})]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Observações / Dicas de Execução"}),m.jsx("input",{type:"text",className:"input-field",value:p.observations,onChange:K=>y({...p,observations:K.target.value}),placeholder:"Ex: Controle de descida, foco na contração"})]}),m.jsxs("div",{className:"form-actions",children:[m.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{T(!1),h(null)},children:"Cancelar"}),m.jsxs("button",{type:"submit",className:"btn btn-lime",children:[m.jsx(Sl,{size:16})," Salvar"]})]})]}),!_&&!c&&m.jsxs("div",{className:"manager-exercises-list",children:[m.jsxs("button",{className:"btn btn-primary add-ex-btn",onClick:R,children:[m.jsx(oE,{size:18})," Adicionar Exercício"]}),S.exercises.length===0?m.jsx("p",{className:"no-exercises-text",children:"Nenhum exercício cadastrado nesta ficha. Arraste exercícios aqui ou adicione novos."}):m.jsx("div",{className:"drag-drop-instructions",children:"💡 Arraste e solte os cartões para reordenar a sequência de treino."}),m.jsx("div",{className:"exercises-drag-container",children:S.exercises.map((K,Z)=>m.jsxs("div",{className:`manager-exercise-item glass ${J===Z?"dragging":""} ${ae===Z?"drag-over":""}`,onDragOver:de=>se(de,Z),onDrop:()=>Ne(Z),children:[m.jsx("div",{className:"drag-handle-wrapper",draggable:!0,onDragStart:de=>B(de,Z),onDragEnd:Re,children:m.jsx(cE,{size:18,className:"drag-icon"})}),m.jsxs("div",{className:"ex-info",children:[m.jsx("h5",{className:"ex-name",children:K.name}),m.jsxs("div",{className:"ex-meta",children:[m.jsxs("span",{children:[K.sets,"x",K.reps]})," • ",m.jsxs("span",{children:[K.rest,"s descanso"]})]}),K.observations&&m.jsx("span",{className:"ex-obs-tag",children:K.observations})]}),m.jsxs("div",{className:"ex-actions",children:[m.jsx("button",{className:"btn-icon edit",onClick:()=>be(K),title:"Editar exercício",children:m.jsx(X0,{size:16})}),m.jsx("button",{className:"btn-icon delete",onClick:()=>L(K.id),title:"Excluir exercício",children:m.jsx($0,{size:16})})]})]},K.id))})]})]}):m.jsx("p",{className:"no-exercises-text",children:'Nenhuma ficha cadastrada no momento. Clique em "Nova Ficha" para começar.'}),me&&m.jsx("div",{className:"routine-modal-overlay",children:m.jsxs("div",{className:"routine-modal animate-slide-up",children:[m.jsx("h3",{className:"modal-title",children:"Criar Nova Ficha de Treino"}),m.jsxs("form",{onSubmit:j,children:[m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Identificação/Sigla (Ex: E, F, G)"}),m.jsx("input",{type:"text",className:"input-field",maxLength:"2",value:w.id,onChange:K=>A({...w,id:K.target.value}),placeholder:"Ex: E",required:!0})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Nome do Treino / Músculo Foco"}),m.jsx("input",{type:"text",className:"input-field",value:w.name,onChange:K=>A({...w,name:K.target.value}),placeholder:"Ex: Ombros e Triceps",required:!0})]}),m.jsxs("div",{className:"modal-actions",children:[m.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>ge(!1),children:"Cancelar"}),m.jsx("button",{type:"submit",className:"btn btn-primary",children:"Criar Ficha"})]})]})]})}),Ce&&m.jsx("div",{className:"routine-modal-overlay",children:m.jsxs("div",{className:"routine-modal animate-slide-up",children:[m.jsxs("h3",{className:"modal-title",children:["Renomear Ficha ",s]}),m.jsxs("form",{onSubmit:M,children:[m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Nome do Treino / Músculo Foco"}),m.jsx("input",{type:"text",className:"input-field",value:C.name,onChange:K=>k({name:K.target.value}),placeholder:"Ex: Peito e Triceps",required:!0})]}),m.jsxs("div",{className:"modal-actions",children:[m.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>xe(!1),children:"Cancelar"}),m.jsx("button",{type:"submit",className:"btn btn-primary",children:"Salvar"})]})]})]})}),N&&m.jsx("div",{className:"routine-modal-overlay animate-fade-in",style:{zIndex:1e3},children:m.jsxs("div",{className:"routine-modal gif-picker-modal animate-slide-up",style:{maxWidth:"480px",maxHeight:"85vh",display:"flex",flexDirection:"column"},children:[m.jsxs("div",{className:"gif-modal-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("h3",{className:"modal-title",children:"🎬 Selecionar GIF de Demonstração"}),m.jsx("button",{type:"button",className:"btn-icon",onClick:()=>z(!1),style:{width:"32px",height:"32px",fontSize:"1rem"},children:"✕"})]}),m.jsxs("div",{className:"gif-modal-body",style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:"12px",paddingRight:"4px"},children:[m.jsx("div",{className:"form-group",style:{marginBottom:0},children:m.jsx("input",{type:"text",className:"input-field",placeholder:"Pesquise o exercício (ex: Supino, Agachamento, Rosca)...",value:G,onChange:K=>D(K.target.value),autoFocus:!0})}),m.jsxs("div",{className:"gif-grid",children:[Dv(G).map(K=>{const de=(p.gifUrl||Hs(p.name))===K.gifUrl;return m.jsxs("div",{className:`gif-grid-item ${de?"selected":""}`,onClick:()=>{y({...p,gifUrl:K.gifUrl}),z(!1)},children:[m.jsx("div",{className:"gif-item-media",children:m.jsx("img",{src:K.gifUrl,alt:K.name,loading:"lazy"})}),m.jsx("span",{className:"gif-item-title",children:K.name})]},K.name)}),Dv(G).length===0&&m.jsxs("div",{className:"gif-no-results",children:['Nenhum GIF encontrado para "',G,'". Tente pesquisar com outro nome.']})]})]}),m.jsx("div",{className:"modal-actions",style:{marginTop:"12px"},children:m.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>z(!1),children:"Fechar"})})]})}),m.jsx("style",{children:`
        .routine-manager-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px 16px;
        }

        .routine-manager-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .routine-manager-title {
          font-size: 1.5rem;
          color: var(--color-text-primary);
        }

        .routine-tabs-wrapper {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: none;
        }
        
        .routine-tabs-wrapper::-webkit-scrollbar {
          display: none;
        }

        .routine-tabs {
          display: flex;
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 4px;
          gap: 4px;
          min-width: max-content;
          width: 100%;
          box-shadow: 0 4px 12px var(--glass-shadow);
        }

        .routine-tab-btn {
          flex: 1;
          background: none;
          border: none;
          color: var(--color-text-secondary);
          font-family: var(--font-title);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 10px 16px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .routine-tab-btn.active {
          background: var(--accent-purple);
          color: var(--color-on-accent);
          box-shadow: 0 4px 12px var(--accent-purple-glow);
        }

        .routine-action-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1.3fr;
          gap: 6px;
          margin-bottom: 4px;
        }

        .btn-routine-action {
          padding: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 10px;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.04);
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: none;
        }

        .btn-routine-action:hover:not(:disabled) {
          border-color: var(--border-hover);
          background: var(--accent-active);
          color: var(--color-text-primary);
          transform: translateY(-1px);
        }

        .btn-routine-action:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: none;
        }

        .btn-routine-action:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          box-shadow: none;
        }

        .btn-routine-action.delete:hover:not(:disabled) {
          border-color: var(--status-error);
          color: var(--status-error);
          background: var(--status-error-glow);
          box-shadow: none;
        }



        .routine-details-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .routine-meta-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 10px;
        }

        .routine-meta-info h3 {
          font-size: 1.15rem;
          color: var(--color-text-primary);
        }

        .exercise-count-badge {
          background: var(--bg-primary);
          color: var(--color-text-secondary);
          padding: 4px 10px;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid var(--border-color);
        }

        /* Exercise Form */
        .exercise-form {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-title {
          font-size: 1.1rem;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }

        .form-row-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .form-actions button {
          flex: 1;
        }

        /* Exercises List */
        .manager-exercises-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .add-ex-btn {
          width: 100%;
          padding: 12px;
          border-radius: 100px;
        }

        .no-exercises-text {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          text-align: center;
          margin: 24px 0;
          font-style: italic;
        }

        .drag-drop-instructions {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          text-align: center;
          padding: 4px;
          background: var(--bg-primary);
          border-radius: 8px;
          border: 1px dashed var(--border-color);
        }

        .exercises-drag-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .manager-exercise-item {
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: grab;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }

        .manager-exercise-item:active {
          cursor: grabbing;
        }

        .manager-exercise-item.dragging {
          opacity: 0.4;
          transform: scale(0.98);
          border: 1px dashed var(--accent-purple);
        }

        .manager-exercise-item.drag-over {
          border-top: 2px solid var(--accent-purple);
          background: var(--bg-primary);
        }

        .drag-handle-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          padding-right: 4px;
          flex-shrink: 0;
        }

        .drag-icon {
          opacity: 0.6;
        }

        .ex-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
          min-width: 0;
        }

        .ex-name {
          font-size: 0.95rem;
          color: var(--color-text-primary);
          font-family: var(--font-body);
        }

        .ex-meta {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .ex-obs-tag {
          font-size: 0.75rem;
          color: var(--accent-lime);
          font-weight: 500;
          display: inline-block;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ex-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .btn-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--color-text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          transition: all 0.2s;
        }

        .btn-icon:hover {
          background: var(--bg-card-hover);
          color: var(--color-text-primary);
        }

        .btn-icon.edit:hover {
          border-color: var(--accent-purple);
          color: var(--accent-purple);
        }

        .btn-icon.delete:hover {
          border-color: var(--status-error);
          color: var(--status-error);
        }

        /* Modals style */
        .routine-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(31, 31, 31, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          padding: 20px;
        }

        .routine-modal {
          width: 100%;
          max-width: 340px;
          padding: 24px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 28px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-title {
          font-size: 1.15rem;
          color: var(--color-text-primary);
          font-family: var(--font-title);
          font-weight: 700;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .modal-actions button {
          flex: 1;
        }

        /* GIF Picker Styles */
        .gif-form-preview-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 14px;
          background: rgba(0, 0, 0, 0.03);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          margin-top: 6px;
        }

        .dark-theme .gif-form-preview-card {
          background: rgba(255, 255, 255, 0.02);
        }

        .gif-preview-media {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .gif-badge {
          font-size: 0.65rem;
          padding: 2px 6px;
          background: var(--accent-lime);
          color: #000;
          font-weight: 700;
          border-radius: 4px;
        }

        .gif-empty-info {
          flex: 1;
          font-size: 0.85rem;
          color: var(--color-text-secondary);
        }

        .btn-gif-picker-trigger {
          padding: 8px 14px;
          font-size: 0.85rem;
          border-radius: 8px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--color-text-primary);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-gif-picker-trigger:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent-lime);
        }

        .gif-picker-modal {
          overflow: hidden;
        }

        .gif-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 10px;
          max-height: 50vh;
          overflow-y: auto;
          padding: 4px;
        }

        .gif-grid-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 8px;
          border-radius: 10px;
          border: 2px solid var(--border-color);
          background: var(--bg-card);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .gif-grid-item:hover {
          border-color: var(--accent-lime);
          transform: translateY(-2px);
        }

        .gif-grid-item.selected {
          border-color: var(--accent-lime);
          box-shadow: 0 0 0 2px var(--accent-lime);
        }

        .gif-item-media {
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .gif-item-media img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .dark-theme .gif-item-media img {
          filter: invert(0.92) hue-rotate(180deg);
        }

        .gif-item-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-primary);
          text-align: center;
          line-height: 1.2;
        }

        .gif-no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 24px;
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }
      `})]})}const TE=({size:r=20})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("polyline",{points:"15 18 9 12 15 6"})}),SE=({size:r=20})=>m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:m.jsx("polyline",{points:"9 18 15 12 9 6"})}),kv=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],wE=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];function AE({history:r,onClearHistory:e,onDeleteWorkout:i,syncProps:s,profile:l}){const[c,h]=le.useState(new Date().getMonth()),[p,y]=le.useState(new Date().getFullYear()),[_,T]=le.useState(()=>new Date),[N,z]=le.useState(null),[G,D]=le.useState(null),[J,$]=le.useState(null),ae=async M=>{$(M.id);try{const Q=await e_(M,l),fe=`comprovante_treino_${M.routineId||"A"}_${new Date(M.date||Date.now()).toISOString().split("T")[0]}.png`,K=new File([Q],fe,{type:"image/png"});if(navigator.share&&navigator.canShare&&navigator.canShare({files:[K]}))await navigator.share({title:"Comprovante de Treino - KademIA",text:`Treino ${M.routineName} concluído! 💪`,files:[K]});else{const Z=URL.createObjectURL(Q),de=document.createElement("a");de.href=Z,de.download=fe,document.body.appendChild(de),de.click(),document.body.removeChild(de),URL.revokeObjectURL(Z)}}catch(Q){console.error("Erro ao gerar imagem PNG:",Q),alert("Não foi possível gerar a imagem PNG do treino. Tente novamente.")}finally{$(null)}},W=(M,Q)=>new Date(M,Q+1,0).getDate(),me=(M,Q)=>new Date(M,Q,1).getDay(),ge=W(p,c),Ce=me(p,c),xe=c===0?11:c-1,w=c===0?p-1:p,A=W(w,xe),C=[];for(let M=Ce-1;M>=0;M--)C.push({day:A-M,month:xe,year:w,isCurrentMonth:!1});for(let M=1;M<=ge;M++)C.push({day:M,month:c,year:p,isCurrentMonth:!0});const k=c===11?0:c+1,O=c===11?p+1:p,S=C.length,R=S%7===0?0:7-S%7;for(let M=1;M<=R;M++)C.push({day:M,month:k,year:O,isCurrentMonth:!1});const be=M=>{M==="prev"?c===0?(h(11),y(Q=>Q-1)):h(Q=>Q-1):c===11?(h(0),y(Q=>Q+1)):h(Q=>Q+1)},he=M=>{const Q=new Date(M.year,M.month,M.day);T(Q),M.isCurrentMonth||(h(M.month),y(M.year))},L=M=>r.filter(Q=>{const fe=new Date(Q.date);return fe.getDate()===M.day&&fe.getMonth()===M.month&&fe.getFullYear()===M.year}),B=r.filter(M=>{const Q=new Date(M.date);return Q.getDate()===_.getDate()&&Q.getMonth()===_.getMonth()&&Q.getFullYear()===_.getFullYear()}),se=M=>{const Q=new Date;return Q.getDate()===M.day&&Q.getMonth()===M.month&&Q.getFullYear()===M.year},Re=M=>_.getDate()===M.day&&_.getMonth()===M.month&&_.getFullYear()===M.year,Ne=M=>{const Q=M.toLocaleDateString("pt-BR",{weekday:"long"}),fe=Q.charAt(0).toUpperCase()+Q.slice(1),K=M.getDate(),Z=kv[M.getMonth()];return`${fe}, ${K} de ${Z}`},j=M=>new Date(M).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});return m.jsxs("div",{className:"history-container animate-fade-in",children:[m.jsx("header",{className:"history-header",children:m.jsx("h2",{className:"history-title",children:"Histórico"})}),r.length===0?m.jsxs("div",{className:"empty-history glass",children:[m.jsx(Y0,{size:32,className:"empty-icon"}),m.jsx("p",{children:"Nenhum treino registrado ainda."}),m.jsx("span",{children:"Complete seu primeiro treino para começar a registrar sua evolução!"})]}):m.jsxs("div",{className:"history-content-wrapper",children:[m.jsxs("div",{className:"calendar-widget glass",children:[m.jsxs("div",{className:"calendar-header",children:[m.jsxs("span",{className:"current-month-year",children:[kv[c]," ",p]}),m.jsxs("div",{className:"calendar-nav-buttons",children:[m.jsx("button",{className:"calendar-nav-btn",onClick:()=>be("prev"),"aria-label":"Mês anterior",children:m.jsx(TE,{size:16})}),m.jsx("button",{className:"calendar-nav-btn",onClick:()=>be("next"),"aria-label":"Próximo mês",children:m.jsx(SE,{size:16})})]})]}),m.jsx("div",{className:"calendar-weekdays-row",children:wE.map(M=>m.jsx("div",{className:"weekday-label",children:M},M))}),m.jsx("div",{className:"calendar-grid",children:C.map((M,Q)=>{const fe=L(M);return fe.length>0,m.jsxs("button",{className:`calendar-cell ${M.isCurrentMonth?"current-month":"other-month"} ${se(M)?"today":""} ${Re(M)?"selected":""}`,onClick:()=>he(M),children:[m.jsx("span",{className:"day-number",children:M.day}),m.jsx("div",{className:"calendar-badge-container",children:fe.map((K,Z)=>m.jsx("span",{className:"calendar-workout-letter",title:K.routineName,children:K.routineId},Z))})]},Q)})})]}),m.jsxs("div",{className:"selected-day-details",children:[m.jsx("h3",{className:"selected-day-title",children:Ne(_)}),B.length===0?m.jsx("div",{className:"no-workouts-day",children:m.jsx("p",{children:"Nenhum treino realizado nesta data."})}):m.jsx("div",{className:"day-workouts-list",children:B.map((M,Q)=>{var de,ve,Te,Ye;const fe=((de=M.exercises)==null?void 0:de.reduce((Fe,Rt)=>{var yt;return Fe+(((yt=Rt.setsData)==null?void 0:yt.reduce((tt,It)=>tt+(parseFloat(It.load)||0)*(parseInt(It.reps)||0),0))||0)},0))||0,K=((ve=M.exercises)==null?void 0:ve.reduce((Fe,Rt)=>{var yt;return Fe+(((yt=Rt.setsData)==null?void 0:yt.length)||0)},0))||0,Z=((Te=M.exercises)==null?void 0:Te.reduce((Fe,Rt)=>{var yt;return Fe+(((yt=Rt.setsData)==null?void 0:yt.filter(tt=>tt.completed).length)||0)},0))||0;return m.jsxs("div",{className:"history-day-card receipt-paper animate-slide-up",children:[m.jsxs("div",{className:"receipt-header-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[m.jsxs("div",{className:"receipt-brand",style:{display:"flex",alignItems:"center",gap:"6px"},children:[m.jsx(Qs,{size:20,className:"receipt-logo-icon"}),m.jsx("span",{className:"receipt-brand-title",style:{fontSize:"1.1rem"},children:"KADEMIA"})]}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[m.jsx("span",{className:"receipt-badge-stamp",children:"TÁ PAGO ✓"}),m.jsx("button",{type:"button",className:"btn-icon-share-discreet",onClick:Fe=>{Fe.stopPropagation(),ae(M)},disabled:J===M.id,title:"Salvar / Compartilhar PNG","aria-label":"Salvar / Compartilhar PNG",children:m.jsx(mE,{size:14})})]})]}),m.jsx("div",{className:"receipt-divider-dashed",style:{margin:"10px 0 14px 0"}}),m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"},children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[m.jsx("span",{className:"hist-routine-tag",children:(M.routineId||"A").toString().charAt(0).toUpperCase()}),m.jsx("h4",{className:"hist-routine-name",style:{margin:0},children:M.routineName})]}),m.jsx("span",{className:"hist-time-tag",children:j(M.date)})]}),m.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--color-text-secondary)",marginBottom:"12px",paddingLeft:"2px"},children:["Atleta: ",m.jsx("strong",{children:(l==null?void 0:l.name)||M.userName||"Wagner"})," • ",new Date(M.date||Date.now()).toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit",month:"long",year:"numeric"})]}),m.jsxs("div",{className:"hist-meta-summary",style:{marginBottom:"14px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[m.jsxs("div",{className:"meta-badge",children:[m.jsx(Ou,{size:12}),m.jsxs("span",{children:[M.duration||0," min"]})]}),m.jsx("div",{className:"meta-badge",children:m.jsxs("span",{children:["Vol: ",fe.toLocaleString("pt-BR")," kg"]})}),m.jsx("div",{className:"meta-badge green-highlight",style:{background:"rgba(173, 255, 47, 0.15)",borderColor:"var(--accent-lime)",color:"var(--accent-lime)",fontWeight:"700"},children:m.jsxs("span",{children:["Séries: ",Z,"/",K]})})]}),M.notes&&m.jsxs("div",{className:"hist-note-snippet",children:[m.jsx(om,{size:12}),m.jsx("span",{children:M.notes})]}),m.jsx("div",{className:"receipt-divider-dashed",style:{margin:"10px 0 14px 0"}}),m.jsxs("div",{className:"hist-details",style:{margin:0},children:[m.jsx("h5",{className:"details-title",style:{fontSize:"0.95rem",marginBottom:"12px"},children:"Exercícios Realizados"}),m.jsx("div",{className:"details-exercises-list",children:(Ye=M.exercises)==null?void 0:Ye.map((Fe,Rt)=>{var yt;return m.jsxs("div",{className:"details-ex-item",style:{marginBottom:"14px"},children:[m.jsx("span",{className:"details-ex-name",style:{fontWeight:"700",display:"block",marginBottom:"6px"},children:Fe.name}),m.jsx("div",{className:"details-sets-list",children:(yt=Fe.setsData)==null?void 0:yt.map((tt,It)=>m.jsxs("div",{className:`details-set-bubble ${tt.completed?"ok":"nok"}`,children:[m.jsxs("span",{className:"set-num",children:[tt.setNum||It+1,"ª"]}),m.jsxs("span",{className:"set-val",children:[tt.load?`${tt.load}kg`:"--"," × ",tt.reps||"0"]}),tt.completed?m.jsx("span",{className:"set-check-ok",children:"✓"}):m.jsx("span",{className:"set-check-nok",children:"✕"})]},It))})]},Rt)})})]}),m.jsx("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:"8px"},children:m.jsx("button",{type:"button",className:"btn-delete-workout-discreet",onClick:Fe=>{Fe.stopPropagation(),D(M)},title:"Apagar este treino","aria-label":"Apagar este treino",children:m.jsx($0,{size:14})})})]},M.id||Q)})})]})]}),m.jsx("style",{children:`
        .history-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px 16px;
        }

        .history-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .history-title {
          font-size: 1.5rem;
          color: var(--color-text-primary);
        }

        .btn-clear-history {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-size: 0.85rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
        }

        .btn-clear-history:hover {
          color: var(--status-error);
        }

        .empty-history {
          padding: 40px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .empty-icon {
          color: var(--color-text-muted);
          opacity: 0.4;
        }

        .empty-history p {
          color: var(--color-text-primary);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .empty-history span {
          color: var(--color-text-secondary);
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .history-content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Calendar Styling */
        .calendar-widget {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 4px;
        }

        .current-month-year {
          font-family: var(--font-title);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-text-primary);
          text-transform: capitalize;
        }

        .calendar-nav-buttons {
          display: flex;
          gap: 4px;
        }

        .calendar-nav-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          color: var(--color-text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .calendar-nav-btn:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent-purple);
        }

        .calendar-weekdays-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 6px;
        }

        .weekday-label {
          padding: 2px 0;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }

        .calendar-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 6px 2px;
          background: none;
          border: 1px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
          min-height: 52px;
        }

        .calendar-cell:hover {
          background: var(--bg-card-hover);
        }

        .calendar-cell.current-month {
          color: var(--color-text-primary);
        }

        .calendar-cell.other-month {
          color: var(--color-text-muted);
          opacity: 0.4;
        }

        .calendar-cell.today {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
        }

        .calendar-cell.today .day-number {
          font-weight: 800;
          color: var(--accent-purple);
        }

        .calendar-cell.selected {
          border: 1.5px solid var(--accent-purple);
          background: var(--accent-purple-glow);
        }

        .day-number {
          font-size: 0.85rem;
          font-weight: 600;
        }

        .calendar-badge-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2px;
          width: 100%;
        }

        .calendar-workout-letter {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: var(--accent-purple);
          color: var(--color-on-accent);
          font-size: 0.65rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        /* Selected Day details */
        .selected-day-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .selected-day-title {
          font-size: 1.1rem;
          font-family: var(--font-title);
          color: var(--color-text-primary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 6px;
        }

        .no-workouts-day {
          padding: 24px 16px;
          text-align: center;
          color: var(--color-text-muted);
          font-style: italic;
          font-size: 0.9rem;
        }

        .day-workouts-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .history-day-card {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .day-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .hist-routine-tag {
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 0.75rem;
          color: var(--accent-lime);
          background: var(--accent-purple-glow);
          padding: 2px 6px;
          border-radius: 4px;
          margin-right: 8px;
          display: inline-block;
          vertical-align: middle;
        }

        .hist-routine-name {
          font-size: 0.95rem;
          color: var(--color-text-primary);
          display: inline-block;
          vertical-align: middle;
        }

        .hist-time-tag {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .hist-meta-summary {
          display: flex;
          gap: 8px;
        }

        .meta-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          font-weight: 600;
        }

        .btn-icon-share-discreet {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(173, 255, 47, 0.12);
          border: 1px solid rgba(173, 255, 47, 0.4);
          color: #ADFF2F;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-icon-share-discreet:hover {
          background: rgba(173, 255, 47, 0.22);
          border-color: #ADFF2F;
          color: #ADFF2F;
          transform: scale(1.05);
          box-shadow: 0 2px 8px rgba(173, 255, 47, 0.2);
        }

        .btn-icon-share-discreet:disabled {
          opacity: 0.4;
          cursor: wait;
        }

        .hist-note-snippet {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--accent-purple-glow);
          padding: 6px 8px;
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--accent-purple);
        }

        .hist-details {
          border-top: 1px solid var(--border-color);
          padding-top: 12px;
        }

        .details-title {
          font-size: 0.85rem;
          color: var(--color-text-primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .details-exercises-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .details-ex-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .details-ex-name {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          font-weight: 600;
        }

        .details-sets-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .details-set-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 2px 6px;
          font-size: 0.75rem;
        }

        .details-set-bubble.nok {
          opacity: 0.7;
          border-style: dashed;
        }

        .details-set-bubble .set-num {
          color: var(--color-text-muted);
          font-weight: 600;
        }

        .details-set-bubble .set-val {
          color: var(--color-text-primary);
          font-weight: 700;
        }

        .set-check-ok {
          color: #4ade80;
          font-weight: bold;
          margin-left: 3px;
        }

        .set-check-nok {
          color: #ef4444;
          font-weight: bold;
          margin-left: 3px;
        }

        .btn-delete-workout-discreet {
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          opacity: 0.35;
          padding: 4px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-delete-workout-discreet:hover {
          opacity: 1;
          color: var(--status-error);
          background: rgba(225, 29, 72, 0.12);
        }
      `}),G&&m.jsx("div",{className:"modal-overlay animate-fade-in",style:{zIndex:12e3},children:m.jsxs("div",{className:"modal-content glass animate-slide-up",style:{maxWidth:"380px"},children:[m.jsx("h3",{className:"modal-title text-danger",style:{color:"var(--status-error)",marginBottom:"8px"},children:"Apagar Registro de Treino?"}),m.jsxs("p",{style:{fontSize:"0.9rem",color:"var(--color-text-secondary)",lineHeight:"1.4",marginBottom:"14px"},children:["Você está prestes a apagar o registro do treino ",m.jsx("strong",{children:G.routineName})," realizado em ",m.jsx("strong",{children:new Date(G.date).toLocaleDateString("pt-BR")}),"."]}),m.jsx("div",{style:{background:"rgba(225, 29, 72, 0.1)",border:"1px solid rgba(225, 29, 72, 0.3)",borderRadius:"8px",padding:"10px 12px",marginBottom:"20px"},children:m.jsx("span",{style:{fontSize:"0.82rem",color:"var(--status-error)",fontWeight:"600"},children:"⚠️ Atenção: Ao clicar em apagar, este dado será perdido permanentemente e não há mais volta."})}),m.jsxs("div",{style:{display:"flex",gap:"10px"},children:[m.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>D(null),style:{flex:1,justifyContent:"center"},children:"Cancelar"}),m.jsx("button",{type:"button",className:"btn btn-danger",onClick:()=>{i&&i(G),D(null)},style:{flex:1,justifyContent:"center"},children:"Apagar Treino"})]})]})}),N&&m.jsx(t_,{session:N,profile:l,onClose:()=>z(null)})]})}var Ov={};/**
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
 */const n_=function(r){const e=[];let i=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[i++]=l:l<2048?(e[i++]=l>>6|192,e[i++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[i++]=l>>18|240,e[i++]=l>>12&63|128,e[i++]=l>>6&63|128,e[i++]=l&63|128):(e[i++]=l>>12|224,e[i++]=l>>6&63|128,e[i++]=l&63|128)}return e},RE=function(r){const e=[];let i=0,s=0;for(;i<r.length;){const l=r[i++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[i++];e[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[i++],h=r[i++],p=r[i++],y=((l&7)<<18|(c&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=r[i++],h=r[i++];e[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|h&63)}}return e.join("")},i_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],h=l+1<r.length,p=h?r[l+1]:0,y=l+2<r.length,_=y?r[l+2]:0,T=c>>2,N=(c&3)<<4|p>>4;let z=(p&15)<<2|_>>6,G=_&63;y||(G=64,h||(z=64)),s.push(i[T],i[N],i[z],i[G])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(n_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):RE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=i[r.charAt(l++)],p=l<r.length?i[r.charAt(l)]:0;++l;const _=l<r.length?i[r.charAt(l)]:64;++l;const N=l<r.length?i[r.charAt(l)]:64;if(++l,c==null||p==null||_==null||N==null)throw new CE;const z=c<<2|p>>4;if(s.push(z),_!==64){const G=p<<4&240|_>>2;if(s.push(G),N!==64){const D=_<<6&192|N;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class CE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NE=function(r){const e=n_(r);return i_.encodeByteArray(e,!0)},ju=function(r){return NE(r).replace(/\./g,"")},r_=function(r){try{return i_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function IE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DE=()=>IE().__FIREBASE_DEFAULTS__,kE=()=>{if(typeof process>"u"||typeof Ov>"u")return;const r=Ov.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},OE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&r_(r[1]);return e&&JSON.parse(e)},Zu=()=>{try{return DE()||kE()||OE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},a_=r=>{var e,i;return(i=(e=Zu())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[r]},jE=r=>{const e=a_(r);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),s]:[e.substring(0,i),s]},s_=()=>{var r;return(r=Zu())===null||r===void 0?void 0:r.config},o_=r=>{var e;return(e=Zu())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class ME{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,s))}}}/**
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
 */function VE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ju(JSON.stringify(i)),ju(JSON.stringify(h)),""].join(".")}/**
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
 */function _n(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_n())}function zE(){var r;const e=(r=Zu())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function UE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function BE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HE(){const r=_n();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function FE(){return!zE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qE(){try{return typeof indexedDB=="object"}catch{return!1}}function GE(){return new Promise((r,e)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var c;e(((c=l.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}/**
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
 */const KE="FirebaseError";class pr extends Error{constructor(e,i,s){super(i),this.code=e,this.customData=s,this.name=KE,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vl.prototype.create)}}class Vl{constructor(e,i,s){this.service=e,this.serviceName=i,this.errors=s}create(e,...i){const s=i[0]||{},l=`${this.service}/${e}`,c=this.errors[e],h=c?QE(c,s):"Error",p=`${this.serviceName}: ${h} (${l}).`;return new pr(l,p,s)}}function QE(r,e){return r.replace(YE,(i,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const YE=/\{\$([^}]+)}/g;function $E(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Mu(r,e){if(r===e)return!0;const i=Object.keys(r),s=Object.keys(e);for(const l of i){if(!s.includes(l))return!1;const c=r[l],h=e[l];if(jv(c)&&jv(h)){if(!Mu(c,h))return!1}else if(c!==h)return!1}for(const l of s)if(!i.includes(l))return!1;return!0}function jv(r){return r!==null&&typeof r=="object"}/**
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
 */function Ll(r){const e=[];for(const[i,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function XE(r,e){const i=new WE(r,e);return i.subscribe.bind(i)}class WE{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,s){let l;if(e===void 0&&i===void 0&&s===void 0)throw new Error("Missing Observer.");JE(e,["next","error","complete"])?l=e:l={next:e,error:i,complete:s},l.next===void 0&&(l.next=Tf),l.error===void 0&&(l.error=Tf),l.complete===void 0&&(l.complete=Tf);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JE(r,e){if(typeof r!="object"||r===null)return!1;for(const i of e)if(i in r&&typeof r[i]=="function")return!0;return!1}function Tf(){}/**
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
 */function Kn(r){return r&&r._delegate?r._delegate:r}let Vu=class{constructor(e,i,s){this.name=e,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Fa="[DEFAULT]";/**
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
 */class ZE{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const s=new ME;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(l)return null;throw c}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tT(e))try{this.getOrInitializeService({instanceIdentifier:Fa})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(e=Fa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fa){return this.instances.has(e)}getOptions(e=Fa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[c,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&h.resolve(l)}return l}onInit(e,i){var s;const l=this.normalizeInstanceIdentifier(i),c=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(l,c);const h=this.instances.get(l);return h&&e(h,l),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const s=this.onInitCallbacks.get(i);if(s)for(const l of s)try{l(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eT(e),options:i}),this.instances.set(e,s),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fa){return this.component?this.component.multipleInstances?e:Fa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eT(r){return r===Fa?void 0:r}function tT(r){return r.instantiationMode==="EAGER"}/**
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
 */class nT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new ZE(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var St;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(St||(St={}));const iT={debug:St.DEBUG,verbose:St.VERBOSE,info:St.INFO,warn:St.WARN,error:St.ERROR,silent:St.SILENT},rT=St.INFO,aT={[St.DEBUG]:"log",[St.VERBOSE]:"log",[St.INFO]:"info",[St.WARN]:"warn",[St.ERROR]:"error"},sT=(r,e,...i)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=aT[e];if(l)console[l](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let oT=class{constructor(e){this.name=e,this._logLevel=rT,this._logHandler=sT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in St))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,St.DEBUG,...e),this._logHandler(this,St.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,St.VERBOSE,...e),this._logHandler(this,St.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,St.INFO,...e),this._logHandler(this,St.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,St.WARN,...e),this._logHandler(this,St.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,St.ERROR,...e),this._logHandler(this,St.ERROR,...e)}};const lT=(r,e)=>e.some(i=>r instanceof i);let Mv,Vv;function cT(){return Mv||(Mv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uT(){return Vv||(Vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l_=new WeakMap,Lf=new WeakMap,c_=new WeakMap,Sf=new WeakMap,lm=new WeakMap;function dT(r){const e=new Promise((i,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{i(la(r.result)),l()},h=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",h)});return e.then(i=>{i instanceof IDBCursor&&l_.set(i,r)}).catch(()=>{}),lm.set(e,r),e}function hT(r){if(Lf.has(r))return;const e=new Promise((i,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{i(),l()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});Lf.set(r,e)}let zf={get(r,e,i){if(r instanceof IDBTransaction){if(e==="done")return Lf.get(r);if(e==="objectStoreNames")return r.objectStoreNames||c_.get(r);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return la(r[e])},set(r,e,i){return r[e]=i,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function fT(r){zf=r(zf)}function mT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const s=r.call(wf(this),e,...i);return c_.set(s,e.sort?e.sort():[e]),la(s)}:uT().includes(r)?function(...e){return r.apply(wf(this),e),la(l_.get(this))}:function(...e){return la(r.apply(wf(this),e))}}function pT(r){return typeof r=="function"?mT(r):(r instanceof IDBTransaction&&hT(r),lT(r,cT())?new Proxy(r,zf):r)}function la(r){if(r instanceof IDBRequest)return dT(r);if(Sf.has(r))return Sf.get(r);const e=pT(r);return e!==r&&(Sf.set(r,e),lm.set(e,r)),e}const wf=r=>lm.get(r);function gT(r,e,{blocked:i,upgrade:s,blocking:l,terminated:c}={}){const h=indexedDB.open(r,e),p=la(h);return s&&h.addEventListener("upgradeneeded",y=>{s(la(h.result),y.oldVersion,y.newVersion,la(h.transaction),y)}),i&&h.addEventListener("blocked",y=>i(y.oldVersion,y.newVersion,y)),p.then(y=>{c&&y.addEventListener("close",()=>c()),l&&y.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const yT=["get","getKey","getAll","getAllKeys","count"],vT=["put","add","delete","clear"],Af=new Map;function Lv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Af.get(e))return Af.get(e);const i=e.replace(/FromIndex$/,""),s=e!==i,l=vT.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(l||yT.includes(i)))return;const c=async function(h,...p){const y=this.transaction(h,l?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[i](...p),l&&y.done]))[0]};return Af.set(e,c),c}fT(r=>({...r,get:(e,i,s)=>Lv(e,i)||r.get(e,i,s),has:(e,i)=>!!Lv(e,i)||r.has(e,i)}));/**
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
 */class _T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(bT(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function bT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pf="@firebase/app",zv="0.10.13";/**
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
 */const dr=new oT("@firebase/app"),xT="@firebase/app-compat",ET="@firebase/analytics-compat",TT="@firebase/analytics",ST="@firebase/app-check-compat",wT="@firebase/app-check",AT="@firebase/auth",RT="@firebase/auth-compat",CT="@firebase/database",NT="@firebase/data-connect",IT="@firebase/database-compat",DT="@firebase/functions",kT="@firebase/functions-compat",OT="@firebase/installations",jT="@firebase/installations-compat",MT="@firebase/messaging",VT="@firebase/messaging-compat",LT="@firebase/performance",zT="@firebase/performance-compat",PT="@firebase/remote-config",UT="@firebase/remote-config-compat",BT="@firebase/storage",HT="@firebase/storage-compat",FT="@firebase/firestore",qT="@firebase/vertexai-preview",GT="@firebase/firestore-compat",KT="firebase",QT="10.14.1";/**
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
 */const Uf="[DEFAULT]",YT={[Pf]:"fire-core",[xT]:"fire-core-compat",[TT]:"fire-analytics",[ET]:"fire-analytics-compat",[wT]:"fire-app-check",[ST]:"fire-app-check-compat",[AT]:"fire-auth",[RT]:"fire-auth-compat",[CT]:"fire-rtdb",[NT]:"fire-data-connect",[IT]:"fire-rtdb-compat",[DT]:"fire-fn",[kT]:"fire-fn-compat",[OT]:"fire-iid",[jT]:"fire-iid-compat",[MT]:"fire-fcm",[VT]:"fire-fcm-compat",[LT]:"fire-perf",[zT]:"fire-perf-compat",[PT]:"fire-rc",[UT]:"fire-rc-compat",[BT]:"fire-gcs",[HT]:"fire-gcs-compat",[FT]:"fire-fst",[GT]:"fire-fst-compat",[qT]:"fire-vertex","fire-js":"fire-js",[KT]:"fire-js-all"};/**
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
 */const Lu=new Map,$T=new Map,Bf=new Map;function Pv(r,e){try{r.container.addComponent(e)}catch(i){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,i)}}function Ys(r){const e=r.name;if(Bf.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;Bf.set(e,r);for(const i of Lu.values())Pv(i,r);for(const i of $T.values())Pv(i,r);return!0}function cm(r,e){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(e)}function Ri(r){return r.settings!==void 0}/**
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
 */const XT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ca=new Vl("app","Firebase",XT);/**
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
 */class WT{constructor(e,i,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vu("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ca.create("app-deleted",{appName:this._name})}}/**
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
 */const io=QT;function u_(r,e={}){let i=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Uf,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw ca.create("bad-app-name",{appName:String(l)});if(i||(i=s_()),!i)throw ca.create("no-options");const c=Lu.get(l);if(c){if(Mu(i,c.options)&&Mu(s,c.config))return c;throw ca.create("duplicate-app",{appName:l})}const h=new nT(l);for(const y of Bf.values())h.addComponent(y);const p=new WT(i,s,h);return Lu.set(l,p),p}function d_(r=Uf){const e=Lu.get(r);if(!e&&r===Uf&&s_())return u_();if(!e)throw ca.create("no-app",{appName:r});return e}function ua(r,e,i){var s;let l=(s=YT[r])!==null&&s!==void 0?s:r;i&&(l+=`-${i}`);const c=l.match(/\s|\//),h=e.match(/\s|\//);if(c||h){const p=[`Unable to register library "${l}" with version "${e}":`];c&&p.push(`library name "${l}" contains illegal characters (whitespace or "/")`),c&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(p.join(" "));return}Ys(new Vu(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const JT="firebase-heartbeat-database",ZT=1,wl="firebase-heartbeat-store";let Rf=null;function h_(){return Rf||(Rf=gT(JT,ZT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(wl)}catch(i){console.warn(i)}}}}).catch(r=>{throw ca.create("idb-open",{originalErrorMessage:r.message})})),Rf}async function eS(r){try{const i=(await h_()).transaction(wl),s=await i.objectStore(wl).get(f_(r));return await i.done,s}catch(e){if(e instanceof pr)dr.warn(e.message);else{const i=ca.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(i.message)}}}async function Uv(r,e){try{const s=(await h_()).transaction(wl,"readwrite");await s.objectStore(wl).put(e,f_(r)),await s.done}catch(i){if(i instanceof pr)dr.warn(i.message);else{const s=ca.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});dr.warn(s.message)}}}function f_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const tS=1024,nS=720*60*60*1e3;class iS{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new aS(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Bv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const p=new Date(h.date).valueOf();return Date.now()-p<=nS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){dr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Bv(),{heartbeatsToSend:s,unsentEntries:l}=rS(this._heartbeatsCache.heartbeats),c=ju(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return dr.warn(i),""}}}function Bv(){return new Date().toISOString().substring(0,10)}function rS(r,e=tS){const i=[];let s=r.slice();for(const l of r){const c=i.find(h=>h.agent===l.agent);if(c){if(c.dates.push(l.date),Hv(i)>e){c.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Hv(i)>e){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class aS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qE()?GE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await eS(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return Uv(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Hv(r){return ju(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function sS(r){Ys(new Vu("platform-logger",e=>new _T(e),"PRIVATE")),Ys(new Vu("heartbeat",e=>new iS(e),"PRIVATE")),ua(Pf,zv,r),ua(Pf,zv,"esm2017"),ua("fire-js","")}sS("");var oS="firebase",lS="10.14.1";/**
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
 */ua(oS,lS,"app");/**
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
 */var _t;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(_t||(_t={}));const cS={debug:_t.DEBUG,verbose:_t.VERBOSE,info:_t.INFO,warn:_t.WARN,error:_t.ERROR,silent:_t.SILENT},uS=_t.INFO,dS={[_t.DEBUG]:"log",[_t.VERBOSE]:"log",[_t.INFO]:"info",[_t.WARN]:"warn",[_t.ERROR]:"error"},hS=(r,e,...i)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=dS[e];if(l)console[l](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let fS=class{constructor(e){this.name=e,this._logLevel=uS,this._logHandler=hS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _t))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_t.DEBUG,...e),this._logHandler(this,_t.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_t.VERBOSE,...e),this._logHandler(this,_t.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_t.INFO,...e),this._logHandler(this,_t.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_t.WARN,...e),this._logHandler(this,_t.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_t.ERROR,...e),this._logHandler(this,_t.ERROR,...e)}};function um(r,e){var i={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(i[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(i[s[l]]=r[s[l]]);return i}let Fv=class{constructor(e,i,s){this.name=e,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};function m_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mS=m_,p_=new Vl("auth","Firebase",m_());/**
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
 */const zu=new fS("@firebase/auth");function pS(r,...e){zu.logLevel<=_t.WARN&&zu.warn(`Auth (${io}): ${r}`,...e)}function Tu(r,...e){zu.logLevel<=_t.ERROR&&zu.error(`Auth (${io}): ${r}`,...e)}/**
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
 */function Di(r,...e){throw hm(r,...e)}function mi(r,...e){return hm(r,...e)}function dm(r,e,i){const s=Object.assign(Object.assign({},mS()),{[e]:i});return new Vl("auth","Firebase",s).create(e,{appName:r.name})}function da(r){return dm(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function g_(r,e,i){const s=i;if(!(e instanceof s))throw s.name!==e.constructor.name&&Di(r,"argument-error"),dm(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hm(r,...e){if(typeof r!="string"){const i=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(i,...s)}return p_.create(r,...e)}function Me(r,e,...i){if(!r)throw hm(e,...i)}function or(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Tu(e),new Error(e)}function hr(r,e){r||or(e)}/**
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
 */function Hf(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function gS(){return qv()==="http:"||qv()==="https:"}function qv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function yS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gS()||UE()||"connection"in navigator)?navigator.onLine:!0}function vS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class zl{constructor(e,i){this.shortDelay=e,this.longDelay=i,hr(i>e,"Short delay should be less than long delay!"),this.isMobile=LE()||BE()}get(){return yS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fm(r,e){hr(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class y_{static initialize(e,i,s){this.fetchImpl=e,i&&(this.headersImpl=i),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bS=new zl(3e4,6e4);function mm(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ro(r,e,i,s,l={}){return v_(r,l,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const p=Ll(Object.assign({key:r.config.apiKey},h)).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:y},c);return PE()||(_.referrerPolicy="no-referrer"),y_.fetch()(__(r,r.config.apiHost,i,p),_)})}async function v_(r,e,i){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},_S),e);try{const l=new ES(r),c=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw vu(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const p=c.ok?h.errorMessage:h.error.message,[y,_]=p.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(r,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw vu(r,"email-already-in-use",h);if(y==="USER_DISABLED")throw vu(r,"user-disabled",h);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw dm(r,T,_);Di(r,T)}}catch(l){if(l instanceof pr)throw l;Di(r,"network-request-failed",{message:String(l)})}}async function xS(r,e,i,s,l={}){const c=await ro(r,e,i,s,l);return"mfaPendingCredential"in c&&Di(r,"multi-factor-auth-required",{_serverResponse:c}),c}function __(r,e,i,s){const l=`${e}${i}?${s}`;return r.config.emulator?fm(r.config,l):`${r.config.apiScheme}://${l}`}class ES{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,s)=>{this.timer=setTimeout(()=>s(mi(this.auth,"network-request-failed")),bS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vu(r,e,i){const s={appName:r.name};i.email&&(s.email=i.email),i.phoneNumber&&(s.phoneNumber=i.phoneNumber);const l=mi(r,e,s);return l.customData._tokenResponse=i,l}/**
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
 */async function TS(r,e){return ro(r,"POST","/v1/accounts:delete",e)}async function b_(r,e){return ro(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function _l(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SS(r,e=!1){const i=Kn(r),s=await i.getIdToken(e),l=pm(s);Me(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:l,token:s,authTime:_l(Cf(l.auth_time)),issuedAtTime:_l(Cf(l.iat)),expirationTime:_l(Cf(l.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Cf(r){return Number(r)*1e3}function pm(r){const[e,i,s]=r.split(".");if(e===void 0||i===void 0||s===void 0)return Tu("JWT malformed, contained fewer than 3 sections"),null;try{const l=r_(i);return l?JSON.parse(l):(Tu("Failed to decode base64 JWT payload"),null)}catch(l){return Tu("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Gv(r){const e=pm(r);return Me(e,"internal-error"),Me(typeof e.exp<"u","internal-error"),Me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Al(r,e,i=!1){if(i)return e;try{return await e}catch(s){throw s instanceof pr&&wS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function wS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class AS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ff{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=_l(this.lastLoginAt),this.creationTime=_l(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pu(r){var e;const i=r.auth,s=await r.getIdToken(),l=await Al(r,b_(i,{idToken:s}));Me(l==null?void 0:l.users.length,i,"internal-error");const c=l.users[0];r._notifyReloadListener(c);const h=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?x_(c.providerUserInfo):[],p=CS(r.providerData,h),y=r.isAnonymous,_=!(r.email&&c.passwordHash)&&!(p!=null&&p.length),T=y?_:!1,N={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new Ff(c.createdAt,c.lastLoginAt),isAnonymous:T};Object.assign(r,N)}async function RS(r){const e=Kn(r);await Pu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CS(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function x_(r){return r.map(e=>{var{providerId:i}=e,s=um(e,["providerId"]);return{providerId:i,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function NS(r,e){const i=await v_(r,{},async()=>{const s=Ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,h=__(r,l,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",y_.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function IS(r,e){return ro(r,"POST","/v2/accounts:revokeToken",mm(r,e))}/**
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
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Me(e.idToken,"internal-error"),Me(typeof e.idToken<"u","internal-error"),Me(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){Me(e.length!==0,"internal-error");const i=Gv(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(Me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:s,refreshToken:l,expiresIn:c}=await NS(e,i);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(e,i,s){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,i){const{refreshToken:s,accessToken:l,expirationTime:c}=i,h=new Fs;return s&&(Me(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),l&&(Me(typeof l=="string","internal-error",{appName:e}),h.accessToken=l),c&&(Me(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
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
 */function ia(r,e){Me(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class lr{constructor(e){var{uid:i,auth:s,stsTokenManager:l}=e,c=um(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Ff(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await Al(this,this.stsTokenManager.getToken(this.auth,e));return Me(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return SS(this,e)}reload(){return RS(this)}_assign(e){this!==e&&(Me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){Me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),i&&await Pu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ri(this.auth.app))return Promise.reject(da(this.auth));const e=await this.getIdToken();return await Al(this,TS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var s,l,c,h,p,y,_,T;const N=(s=i.displayName)!==null&&s!==void 0?s:void 0,z=(l=i.email)!==null&&l!==void 0?l:void 0,G=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,D=(h=i.photoURL)!==null&&h!==void 0?h:void 0,J=(p=i.tenantId)!==null&&p!==void 0?p:void 0,$=(y=i._redirectEventId)!==null&&y!==void 0?y:void 0,ae=(_=i.createdAt)!==null&&_!==void 0?_:void 0,W=(T=i.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:me,emailVerified:ge,isAnonymous:Ce,providerData:xe,stsTokenManager:w}=i;Me(me&&w,e,"internal-error");const A=Fs.fromJSON(this.name,w);Me(typeof me=="string",e,"internal-error"),ia(N,e.name),ia(z,e.name),Me(typeof ge=="boolean",e,"internal-error"),Me(typeof Ce=="boolean",e,"internal-error"),ia(G,e.name),ia(D,e.name),ia(J,e.name),ia($,e.name),ia(ae,e.name),ia(W,e.name);const C=new lr({uid:me,auth:e,email:z,emailVerified:ge,displayName:N,isAnonymous:Ce,photoURL:D,phoneNumber:G,tenantId:J,stsTokenManager:A,createdAt:ae,lastLoginAt:W});return xe&&Array.isArray(xe)&&(C.providerData=xe.map(k=>Object.assign({},k))),$&&(C._redirectEventId=$),C}static async _fromIdTokenResponse(e,i,s=!1){const l=new Fs;l.updateFromServerResponse(i);const c=new lr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Pu(c),c}static async _fromGetAccountInfoResponse(e,i,s){const l=i.users[0];Me(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?x_(l.providerUserInfo):[],h=!(l.email&&l.passwordHash)&&!(c!=null&&c.length),p=new Fs;p.updateFromIdToken(s);const y=new lr({uid:l.localId,auth:e,stsTokenManager:p,isAnonymous:h}),_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Ff(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(c!=null&&c.length)};return Object.assign(y,_),y}}/**
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
 */const Kv=new Map;function cr(r){hr(r instanceof Function,"Expected a class definition");let e=Kv.get(r);return e?(hr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Kv.set(r,e),e)}/**
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
 */class E_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}E_.type="NONE";const Qv=E_;/**
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
 */function Su(r,e,i){return`firebase:${r}:${e}:${i}`}class qs{constructor(e,i,s){this.persistence=e,this.auth=i,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Su(this.userKey,l.apiKey,c),this.fullPersistenceKey=Su("persistence",l.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,s="authUser"){if(!i.length)return new qs(cr(Qv),e,s);const l=(await Promise.all(i.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=l[0]||cr(Qv);const h=Su(s,e.config.apiKey,e.name);let p=null;for(const _ of i)try{const T=await _._get(h);if(T){const N=lr._fromJSON(e,T);_!==c&&(p=N),c=_;break}}catch{}const y=l.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new qs(c,e,s):(c=y[0],p&&await c._set(h,p.toJSON()),await Promise.all(i.map(async _=>{if(_!==c)try{await _._remove(h)}catch{}})),new qs(c,e,s))}}/**
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
 */function Yv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C_(e))return"Blackberry";if(N_(e))return"Webos";if(S_(e))return"Safari";if((e.includes("chrome/")||w_(e))&&!e.includes("edge/"))return"Chrome";if(R_(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(i);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function T_(r=_n()){return/firefox\//i.test(r)}function S_(r=_n()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w_(r=_n()){return/crios\//i.test(r)}function A_(r=_n()){return/iemobile/i.test(r)}function R_(r=_n()){return/android/i.test(r)}function C_(r=_n()){return/blackberry/i.test(r)}function N_(r=_n()){return/webos/i.test(r)}function gm(r=_n()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function DS(r=_n()){var e;return gm(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kS(){return HE()&&document.documentMode===10}function I_(r=_n()){return gm(r)||R_(r)||N_(r)||C_(r)||/windows phone/i.test(r)||A_(r)}/**
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
 */function D_(r,e=[]){let i;switch(r){case"Browser":i=Yv(_n());break;case"Worker":i=`${Yv(_n())}-${r}`;break;default:i=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${io}/${s}`}/**
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
 */class OS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const s=c=>new Promise((h,p)=>{try{const y=e(c);h(y)}catch(y){p(y)}});s.onAbort=i,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function jS(r,e={}){return ro(r,"GET","/v2/passwordPolicy",mm(r,e))}/**
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
 */const MS=6;class VS{constructor(e){var i,s,l,c;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:MS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,s,l,c,h,p;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(i=y.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(l=y.containsLowercaseLetter)!==null&&l!==void 0?l:!0),y.isValid&&(y.isValid=(c=y.containsUppercaseLetter)!==null&&c!==void 0?c:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(p=y.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),y}validatePasswordLengthOptions(e,i){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(i.meetsMinPasswordLength=e.length>=s),l&&(i.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,i,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class LS{constructor(e,i,s,l){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $v(this),this.idTokenSubscription=new $v(this),this.beforeStateQueue=new OS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=cr(i)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await b_(this,{idToken:e}),s=await lr._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(s)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ri(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=l==null?void 0:l._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===p)&&(y!=null&&y.user)&&(l=y.user,c=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(l)}catch(h){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Pu(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ri(this.app))return Promise.reject(da(this));const i=e?Kn(e):null;return i&&Me(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&Me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ri(this.app)?Promise.reject(da(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ri(this.app)?Promise.reject(da(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jS(this),i=new VS(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vl("auth","Firebase",e())}onAuthStateChanged(e,i,s){return this.registerStateListener(this.authStateSubscription,e,i,s)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,s){return this.registerStateListener(this.idTokenSubscription,e,i,s)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(s.tenantId=this.tenantId),await IS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const s=await this.getOrInitRedirectPersistenceManager(i);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&cr(e)||this._popupRedirectResolver;Me(i,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[cr(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,s;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,s,l){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Me(p,this,"internal-error"),p.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const y=e.addObserver(i,s,l);return()=>{h=!0,y()}}else{const y=e.addObserver(i);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(i["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(i["X-Firebase-AppCheck"]=l),i}async _getAppCheckToken(){var e;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&pS(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function ao(r){return Kn(r)}class $v{constructor(e){this.auth=e,this.observer=null,this.addObserver=XE(i=>this.observer=i)}get next(){return Me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ym={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zS(r){ym=r}function PS(r){return ym.loadJS(r)}function US(){return ym.gapiScript}function BS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function HS(r,e){const i=cm(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),c=i.getOptions();if(Mu(c,e??{}))return l;Di(l,"already-initialized")}return i.initialize({options:e})}function FS(r,e){const i=(e==null?void 0:e.persistence)||[],s=(Array.isArray(i)?i:[i]).map(cr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function qS(r,e,i){const s=ao(r);Me(s._canInitEmulator,s,"emulator-config-failed"),Me(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,c=k_(e),{host:h,port:p}=GS(e),y=p===null?"":`:${p}`;s.config.emulator={url:`${c}//${h}${y}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})}),KS()}function k_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function GS(r){const e=k_(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!i)return{host:"",port:null};const s=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:Xv(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:Xv(h)}}}function Xv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function KS(){function r(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class O_{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,i){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}/**
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
 */async function Gs(r,e){return xS(r,"POST","/v1/accounts:signInWithIdp",mm(r,e))}/**
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
 */const QS="http://localhost";class Qa extends O_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Qa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):Di("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=i,c=um(i,["providerId","signInMethod"]);if(!s||!l)return null;const h=new Qa(s,l);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const i=this.buildRequest();return Gs(e,i)}_linkToIdToken(e,i){const s=this.buildRequest();return s.idToken=i,Gs(e,s)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,Gs(e,i)}buildRequest(){const e={requestUri:QS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Ll(i)}return e}}/**
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
 */class ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pl extends ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ra extends Pl{constructor(){super("facebook.com")}static credential(e){return Qa._fromParams({providerId:ra.PROVIDER_ID,signInMethod:ra.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ra.credentialFromTaggedObject(e)}static credentialFromError(e){return ra.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ra.credential(e.oauthAccessToken)}catch{return null}}}ra.FACEBOOK_SIGN_IN_METHOD="facebook.com";ra.PROVIDER_ID="facebook.com";/**
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
 */class sr extends Pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Qa._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:s}=e;if(!i&&!s)return null;try{return sr.credential(i,s)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
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
 */class aa extends Pl{constructor(){super("github.com")}static credential(e){return Qa._fromParams({providerId:aa.PROVIDER_ID,signInMethod:aa.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return aa.credentialFromTaggedObject(e)}static credentialFromError(e){return aa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return aa.credential(e.oauthAccessToken)}catch{return null}}}aa.GITHUB_SIGN_IN_METHOD="github.com";aa.PROVIDER_ID="github.com";/**
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
 */class sa extends Pl{constructor(){super("twitter.com")}static credential(e,i){return Qa._fromParams({providerId:sa.PROVIDER_ID,signInMethod:sa.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return sa.credentialFromTaggedObject(e)}static credentialFromError(e){return sa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:s}=e;if(!i||!s)return null;try{return sa.credential(i,s)}catch{return null}}}sa.TWITTER_SIGN_IN_METHOD="twitter.com";sa.PROVIDER_ID="twitter.com";/**
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
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,s,l=!1){const c=await lr._fromIdTokenResponse(e,s,l),h=Wv(s);return new $s({user:c,providerId:h,_tokenResponse:s,operationType:i})}static async _forOperation(e,i,s){await e._updateTokensIfNecessary(s,!0);const l=Wv(s);return new $s({user:e,providerId:l,_tokenResponse:s,operationType:i})}}function Wv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Uu extends pr{constructor(e,i,s,l){var c;super(i.code,i.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,i,s,l){return new Uu(e,i,s,l)}}function j_(r,e,i,s){return(e==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(r,c,e,s):c})}async function YS(r,e,i=!1){const s=await Al(r,e._linkToIdToken(r.auth,await r.getIdToken()),i);return $s._forOperation(r,"link",s)}/**
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
 */async function $S(r,e,i=!1){const{auth:s}=r;if(Ri(s.app))return Promise.reject(da(s));const l="reauthenticate";try{const c=await Al(r,j_(s,l,e,r),i);Me(c.idToken,s,"internal-error");const h=pm(c.idToken);Me(h,s,"internal-error");const{sub:p}=h;return Me(r.uid===p,s,"user-mismatch"),$s._forOperation(r,l,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Di(s,"user-mismatch"),c}}/**
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
 */async function XS(r,e,i=!1){if(Ri(r.app))return Promise.reject(da(r));const s="signIn",l=await j_(r,s,e),c=await $s._fromIdTokenResponse(r,s,l);return i||await r._updateCurrentUser(c.user),c}function WS(r,e,i,s){return Kn(r).onIdTokenChanged(e,i,s)}function JS(r,e,i){return Kn(r).beforeAuthStateChanged(e,i)}function ZS(r,e,i,s){return Kn(r).onAuthStateChanged(e,i,s)}function ew(r){return Kn(r).signOut()}const Bu="__sak";/**
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
 */class M_{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Bu,"1"),this.storage.removeItem(Bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tw=1e3,nw=10;class V_ extends M_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=I_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const s=this.storage.getItem(i),l=this.localCache[i];s!==l&&e(i,l,s)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((h,p,y)=>{this.notifyListeners(h,y)});return}const s=e.key;i?this.detachListener():this.stopPolling();const l=()=>{const h=this.storage.getItem(s);!i&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);kS()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,nw):l()}notifyListeners(e,i){this.localCache[e]=i;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:s}),!0)})},tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}V_.type="LOCAL";const iw=V_;/**
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
 */class L_ extends M_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}L_.type="SESSION";const z_=L_;/**
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
 */function rw(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class td{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(l=>l.isListeningto(e));if(i)return i;const s=new td(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:s,eventType:l,data:c}=i.data,h=this.handlersMap[l];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const p=Array.from(h).map(async _=>_(i.origin,c)),y=await rw(p);i.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:y})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}td.receivers=[];/**
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
 */function vm(r="",e=10){let i="";for(let s=0;s<e;s++)i+=Math.floor(Math.random()*10);return r+i}/**
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
 */class aw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,h;return new Promise((p,y)=>{const _=vm("",20);l.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:l,onMessage(N){const z=N;if(z.data.eventId===_)switch(z.data.status){case"ack":clearTimeout(T),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(z.data.response);break;default:clearTimeout(T),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(h),l.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:i},[l.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Ci(){return window}function sw(r){Ci().location.href=r}/**
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
 */function P_(){return typeof Ci().WorkerGlobalScope<"u"&&typeof Ci().importScripts=="function"}async function ow(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lw(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function cw(){return P_()?self:null}/**
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
 */const U_="firebaseLocalStorageDb",uw=1,Hu="firebaseLocalStorage",B_="fbase_key";class Ul{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function nd(r,e){return r.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function dw(){const r=indexedDB.deleteDatabase(U_);return new Ul(r).toPromise()}function qf(){const r=indexedDB.open(U_,uw);return new Promise((e,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Hu,{keyPath:B_})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Hu)?e(s):(s.close(),await dw(),e(await qf()))})})}async function Jv(r,e,i){const s=nd(r,!0).put({[B_]:e,value:i});return new Ul(s).toPromise()}async function hw(r,e){const i=nd(r,!1).get(e),s=await new Ul(i).toPromise();return s===void 0?null:s.value}function Zv(r,e){const i=nd(r,!0).delete(e);return new Ul(i).toPromise()}const fw=800,mw=3;class H_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qf(),this.db)}async _withRetries(e){let i=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(i++>mw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return P_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=td._getInstance(cw()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await ow(),!this.activeServiceWorker)return;this.sender=new aw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((i=s[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qf();return await Jv(e,Bu,"1"),await Zv(e,Bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(s=>Jv(s,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(s=>hw(s,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Zv(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=nd(l,!1).getAll();return new Ul(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(e,i){this.localCache[e]=i;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H_.type="LOCAL";const pw=H_;new zl(3e4,6e4);/**
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
 */function _m(r,e){return e?cr(e):(Me(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class bm extends O_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,i){return Gs(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function gw(r){return XS(r.auth,new bm(r),r.bypassAuthState)}function yw(r){const{auth:e,user:i}=r;return Me(i,e,"internal-error"),$S(i,new bm(r),r.bypassAuthState)}async function vw(r){const{auth:e,user:i}=r;return Me(i,e,"internal-error"),YS(i,new bm(r),r.bypassAuthState)}/**
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
 */class F_{constructor(e,i,s,l,c=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:s,postBody:l,tenantId:c,error:h,type:p}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:i,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gw;case"linkViaPopup":case"linkViaRedirect":return vw;case"reauthViaPopup":case"reauthViaRedirect":return yw;default:Di(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _w=new zl(2e3,1e4);async function bw(r,e,i){if(Ri(r.app))return Promise.reject(mi(r,"operation-not-supported-in-this-environment"));const s=ao(r);g_(r,e,ed);const l=_m(s,i);return new qa(s,"signInViaPopup",e,l).executeNotNull()}class qa extends F_{constructor(e,i,s,l,c){super(e,i,l,c),this.provider=s,this.authWindow=null,this.pollId=null,qa.currentPopupAction&&qa.currentPopupAction.cancel(),qa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Me(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=vm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,s;if(!((s=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_w.get())};e()}}qa.currentPopupAction=null;/**
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
 */const xw="pendingRedirect",wu=new Map;class Ew extends F_{constructor(e,i,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const s=await Tw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(i){e=()=>Promise.reject(i)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tw(r,e){const i=G_(e),s=q_(r);if(!await s._isAvailable())return!1;const l=await s._get(i)==="true";return await s._remove(i),l}async function Sw(r,e){return q_(r)._set(G_(e),"true")}function ww(r,e){wu.set(r._key(),e)}function q_(r){return cr(r._redirectPersistence)}function G_(r){return Su(xw,r.config.apiKey,r.name)}/**
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
 */function Aw(r,e,i){return Rw(r,e,i)}async function Rw(r,e,i){if(Ri(r.app))return Promise.reject(da(r));const s=ao(r);g_(r,e,ed),await s._initializationPromise;const l=_m(s,i);return await Sw(l,s),l._openRedirect(s,e,"signInViaRedirect")}async function Cw(r,e){return await ao(r)._initializationPromise,K_(r,e,!1)}async function K_(r,e,i=!1){if(Ri(r.app))return Promise.reject(da(r));const s=ao(r),l=_m(s,e),h=await new Ew(s,l,i).execute();return h&&!i&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const Nw=600*1e3;class Iw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(i=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dw(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var s;if(e.error&&!Q_(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";i.onError(mi(this.auth,l))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const s=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nw&&this.cachedEventUids.clear(),this.cachedEventUids.has(e0(e))}saveEventToCache(e){this.cachedEventUids.add(e0(e)),this.lastProcessedEventTime=Date.now()}}function e0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Q_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dw(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Q_(r);default:return!1}}/**
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
 */async function kw(r,e={}){return ro(r,"GET","/v1/projects",e)}/**
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
 */const Ow=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jw=/^https?/;async function Mw(r){if(r.config.emulator)return;const{authorizedDomains:e}=await kw(r);for(const i of e)try{if(Vw(i))return}catch{}Di(r,"unauthorized-domain")}function Vw(r){const e=Hf(),{protocol:i,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===s}if(!jw.test(i))return!1;if(Ow.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const Lw=new zl(3e4,6e4);function t0(){const r=Ci().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function zw(r){return new Promise((e,i)=>{var s,l,c;function h(){t0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{t0(),i(mi(r,"network-request-failed"))},timeout:Lw.get()})}if(!((l=(s=Ci().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((c=Ci().gapi)===null||c===void 0)&&c.load)h();else{const p=BS("iframefcb");return Ci()[p]=()=>{gapi.load?h():i(mi(r,"network-request-failed"))},PS(`${US()}?onload=${p}`).catch(y=>i(y))}}).catch(e=>{throw Au=null,e})}let Au=null;function Pw(r){return Au=Au||zw(r),Au}/**
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
 */const Uw=new zl(5e3,15e3),Bw="__/auth/iframe",Hw="emulator/auth/iframe",Fw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gw(r){const e=r.config;Me(e.authDomain,r,"auth-domain-config-required");const i=e.emulator?fm(e,Hw):`https://${r.config.authDomain}/${Bw}`,s={apiKey:e.apiKey,appName:r.name,v:io},l=qw.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${i}?${Ll(s).slice(1)}`}async function Kw(r){const e=await Pw(r),i=Ci().gapi;return Me(i,r,"internal-error"),e.open({where:document.body,url:Gw(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fw,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const h=mi(r,"network-request-failed"),p=Ci().setTimeout(()=>{c(h)},Uw.get());function y(){Ci().clearTimeout(p),l(s)}s.ping(y).then(y,()=>{c(h)})}))}/**
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
 */const Qw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yw=500,$w=600,Xw="_blank",Ww="http://localhost";class n0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jw(r,e,i,s=Yw,l=$w){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const y=Object.assign(Object.assign({},Qw),{width:s.toString(),height:l.toString(),top:c,left:h}),_=_n().toLowerCase();i&&(p=w_(_)?Xw:i),T_(_)&&(e=e||Ww,y.scrollbars="yes");const T=Object.entries(y).reduce((z,[G,D])=>`${z}${G}=${D},`,"");if(DS(_)&&p!=="_self")return Zw(e||"",p),new n0(null);const N=window.open(e||"",p,T);Me(N,r,"popup-blocked");try{N.focus()}catch{}return new n0(N)}function Zw(r,e){const i=document.createElement("a");i.href=r,i.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(s)}/**
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
 */const e2="__/auth/handler",t2="emulator/auth/handler",n2=encodeURIComponent("fac");async function i0(r,e,i,s,l,c){Me(r.config.authDomain,r,"auth-domain-config-required"),Me(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:s,v:io,eventId:l};if(e instanceof ed){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",$E(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,N]of Object.entries({}))h[T]=N}if(e instanceof Pl){const T=e.getScopes().filter(N=>N!=="");T.length>0&&(h.scopes=T.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const y=await r._getAppCheckToken(),_=y?`#${n2}=${encodeURIComponent(y)}`:"";return`${i2(r)}?${Ll(p).slice(1)}${_}`}function i2({config:r}){return r.emulator?fm(r,t2):`https://${r.authDomain}/${e2}`}/**
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
 */const Nf="webStorageSupport";class r2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z_,this._completeRedirectFn=K_,this._overrideRedirectResult=ww}async _openPopup(e,i,s,l){var c;hr((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await i0(e,i,s,Hf(),l);return Jw(e,h,vm())}async _openRedirect(e,i,s,l){await this._originValidation(e);const c=await i0(e,i,s,Hf(),l);return sw(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:l,promise:c}=this.eventManagers[i];return l?Promise.resolve(l):(hr(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[i]={promise:s},s.catch(()=>{delete this.eventManagers[i]}),s}async initAndGetManager(e){const i=await Kw(e),s=new Iw(e);return i.register("authEvent",l=>(Me(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=i,s}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Nf,{type:Nf},l=>{var c;const h=(c=l==null?void 0:l[0])===null||c===void 0?void 0:c[Nf];h!==void 0&&i(!!h),Di(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=Mw(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return I_()||S_()||gm()}}const a2=r2;var r0="@firebase/auth",a0="1.7.9";/**
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
 */class s2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){Me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function o2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l2(r){Ys(new Fv("auth",(e,{options:i})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;Me(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D_(r)},_=new LS(s,l,c,y);return FS(_,i),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,s)=>{e.getProvider("auth-internal").initialize()})),Ys(new Fv("auth-internal",e=>{const i=ao(e.getProvider("auth").getImmediate());return(s=>new s2(s))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),ua(r0,a0,o2(r)),ua(r0,a0,"esm2017")}/**
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
 */const c2=300,u2=o_("authIdTokenMaxAge")||c2;let s0=null;const d2=r=>async e=>{const i=e&&await e.getIdTokenResult(),s=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(s&&s>u2)return;const l=i==null?void 0:i.token;s0!==l&&(s0=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function h2(r=d_()){const e=cm(r,"auth");if(e.isInitialized())return e.getImmediate();const i=HS(r,{popupRedirectResolver:a2,persistence:[pw,iw,z_]}),s=o_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=d2(c.toString());JS(i,h,()=>h(i.currentUser)),WS(i,p=>h(p))}}const l=a_("auth");return l&&qS(i,`http://${l}`),i}function f2(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}zS({loadJS(r){return new Promise((e,i)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const c=mi("internal-error");c.customData=l,i(c)},s.type="text/javascript",s.charset="UTF-8",f2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l2("Browser");class m2{constructor(e,i,s){this.name=e,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var et;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(et||(et={}));const p2={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},g2=et.INFO,y2={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},v2=(r,e,...i)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=y2[e];if(l)console[l](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _2{constructor(e){this.name=e,this._logLevel=g2,this._logHandler=v2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in et))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?p2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...e),this._logHandler(this,et.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...e),this._logHandler(this,et.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,et.INFO,...e),this._logHandler(this,et.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,et.WARN,...e),this._logHandler(this,et.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...e),this._logHandler(this,et.ERROR,...e)}}var o0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ka,Y_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,A){function C(){}C.prototype=A.prototype,w.D=A.prototype,w.prototype=new C,w.prototype.constructor=w,w.C=function(k,O,S){for(var R=Array(arguments.length-2),be=2;be<arguments.length;be++)R[be-2]=arguments[be];return A.prototype[O].apply(k,R)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,i),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(w,A,C){C||(C=0);var k=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)k[O]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(O=0;16>O;++O)k[O]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=w.g[0],C=w.g[1],O=w.g[2];var S=w.g[3],R=A+(S^C&(O^S))+k[0]+3614090360&4294967295;A=C+(R<<7&4294967295|R>>>25),R=S+(O^A&(C^O))+k[1]+3905402710&4294967295,S=A+(R<<12&4294967295|R>>>20),R=O+(C^S&(A^C))+k[2]+606105819&4294967295,O=S+(R<<17&4294967295|R>>>15),R=C+(A^O&(S^A))+k[3]+3250441966&4294967295,C=O+(R<<22&4294967295|R>>>10),R=A+(S^C&(O^S))+k[4]+4118548399&4294967295,A=C+(R<<7&4294967295|R>>>25),R=S+(O^A&(C^O))+k[5]+1200080426&4294967295,S=A+(R<<12&4294967295|R>>>20),R=O+(C^S&(A^C))+k[6]+2821735955&4294967295,O=S+(R<<17&4294967295|R>>>15),R=C+(A^O&(S^A))+k[7]+4249261313&4294967295,C=O+(R<<22&4294967295|R>>>10),R=A+(S^C&(O^S))+k[8]+1770035416&4294967295,A=C+(R<<7&4294967295|R>>>25),R=S+(O^A&(C^O))+k[9]+2336552879&4294967295,S=A+(R<<12&4294967295|R>>>20),R=O+(C^S&(A^C))+k[10]+4294925233&4294967295,O=S+(R<<17&4294967295|R>>>15),R=C+(A^O&(S^A))+k[11]+2304563134&4294967295,C=O+(R<<22&4294967295|R>>>10),R=A+(S^C&(O^S))+k[12]+1804603682&4294967295,A=C+(R<<7&4294967295|R>>>25),R=S+(O^A&(C^O))+k[13]+4254626195&4294967295,S=A+(R<<12&4294967295|R>>>20),R=O+(C^S&(A^C))+k[14]+2792965006&4294967295,O=S+(R<<17&4294967295|R>>>15),R=C+(A^O&(S^A))+k[15]+1236535329&4294967295,C=O+(R<<22&4294967295|R>>>10),R=A+(O^S&(C^O))+k[1]+4129170786&4294967295,A=C+(R<<5&4294967295|R>>>27),R=S+(C^O&(A^C))+k[6]+3225465664&4294967295,S=A+(R<<9&4294967295|R>>>23),R=O+(A^C&(S^A))+k[11]+643717713&4294967295,O=S+(R<<14&4294967295|R>>>18),R=C+(S^A&(O^S))+k[0]+3921069994&4294967295,C=O+(R<<20&4294967295|R>>>12),R=A+(O^S&(C^O))+k[5]+3593408605&4294967295,A=C+(R<<5&4294967295|R>>>27),R=S+(C^O&(A^C))+k[10]+38016083&4294967295,S=A+(R<<9&4294967295|R>>>23),R=O+(A^C&(S^A))+k[15]+3634488961&4294967295,O=S+(R<<14&4294967295|R>>>18),R=C+(S^A&(O^S))+k[4]+3889429448&4294967295,C=O+(R<<20&4294967295|R>>>12),R=A+(O^S&(C^O))+k[9]+568446438&4294967295,A=C+(R<<5&4294967295|R>>>27),R=S+(C^O&(A^C))+k[14]+3275163606&4294967295,S=A+(R<<9&4294967295|R>>>23),R=O+(A^C&(S^A))+k[3]+4107603335&4294967295,O=S+(R<<14&4294967295|R>>>18),R=C+(S^A&(O^S))+k[8]+1163531501&4294967295,C=O+(R<<20&4294967295|R>>>12),R=A+(O^S&(C^O))+k[13]+2850285829&4294967295,A=C+(R<<5&4294967295|R>>>27),R=S+(C^O&(A^C))+k[2]+4243563512&4294967295,S=A+(R<<9&4294967295|R>>>23),R=O+(A^C&(S^A))+k[7]+1735328473&4294967295,O=S+(R<<14&4294967295|R>>>18),R=C+(S^A&(O^S))+k[12]+2368359562&4294967295,C=O+(R<<20&4294967295|R>>>12),R=A+(C^O^S)+k[5]+4294588738&4294967295,A=C+(R<<4&4294967295|R>>>28),R=S+(A^C^O)+k[8]+2272392833&4294967295,S=A+(R<<11&4294967295|R>>>21),R=O+(S^A^C)+k[11]+1839030562&4294967295,O=S+(R<<16&4294967295|R>>>16),R=C+(O^S^A)+k[14]+4259657740&4294967295,C=O+(R<<23&4294967295|R>>>9),R=A+(C^O^S)+k[1]+2763975236&4294967295,A=C+(R<<4&4294967295|R>>>28),R=S+(A^C^O)+k[4]+1272893353&4294967295,S=A+(R<<11&4294967295|R>>>21),R=O+(S^A^C)+k[7]+4139469664&4294967295,O=S+(R<<16&4294967295|R>>>16),R=C+(O^S^A)+k[10]+3200236656&4294967295,C=O+(R<<23&4294967295|R>>>9),R=A+(C^O^S)+k[13]+681279174&4294967295,A=C+(R<<4&4294967295|R>>>28),R=S+(A^C^O)+k[0]+3936430074&4294967295,S=A+(R<<11&4294967295|R>>>21),R=O+(S^A^C)+k[3]+3572445317&4294967295,O=S+(R<<16&4294967295|R>>>16),R=C+(O^S^A)+k[6]+76029189&4294967295,C=O+(R<<23&4294967295|R>>>9),R=A+(C^O^S)+k[9]+3654602809&4294967295,A=C+(R<<4&4294967295|R>>>28),R=S+(A^C^O)+k[12]+3873151461&4294967295,S=A+(R<<11&4294967295|R>>>21),R=O+(S^A^C)+k[15]+530742520&4294967295,O=S+(R<<16&4294967295|R>>>16),R=C+(O^S^A)+k[2]+3299628645&4294967295,C=O+(R<<23&4294967295|R>>>9),R=A+(O^(C|~S))+k[0]+4096336452&4294967295,A=C+(R<<6&4294967295|R>>>26),R=S+(C^(A|~O))+k[7]+1126891415&4294967295,S=A+(R<<10&4294967295|R>>>22),R=O+(A^(S|~C))+k[14]+2878612391&4294967295,O=S+(R<<15&4294967295|R>>>17),R=C+(S^(O|~A))+k[5]+4237533241&4294967295,C=O+(R<<21&4294967295|R>>>11),R=A+(O^(C|~S))+k[12]+1700485571&4294967295,A=C+(R<<6&4294967295|R>>>26),R=S+(C^(A|~O))+k[3]+2399980690&4294967295,S=A+(R<<10&4294967295|R>>>22),R=O+(A^(S|~C))+k[10]+4293915773&4294967295,O=S+(R<<15&4294967295|R>>>17),R=C+(S^(O|~A))+k[1]+2240044497&4294967295,C=O+(R<<21&4294967295|R>>>11),R=A+(O^(C|~S))+k[8]+1873313359&4294967295,A=C+(R<<6&4294967295|R>>>26),R=S+(C^(A|~O))+k[15]+4264355552&4294967295,S=A+(R<<10&4294967295|R>>>22),R=O+(A^(S|~C))+k[6]+2734768916&4294967295,O=S+(R<<15&4294967295|R>>>17),R=C+(S^(O|~A))+k[13]+1309151649&4294967295,C=O+(R<<21&4294967295|R>>>11),R=A+(O^(C|~S))+k[4]+4149444226&4294967295,A=C+(R<<6&4294967295|R>>>26),R=S+(C^(A|~O))+k[11]+3174756917&4294967295,S=A+(R<<10&4294967295|R>>>22),R=O+(A^(S|~C))+k[2]+718787259&4294967295,O=S+(R<<15&4294967295|R>>>17),R=C+(S^(O|~A))+k[9]+3951481745&4294967295,w.g[0]=w.g[0]+A&4294967295,w.g[1]=w.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,w.g[2]=w.g[2]+O&4294967295,w.g[3]=w.g[3]+S&4294967295}s.prototype.u=function(w,A){A===void 0&&(A=w.length);for(var C=A-this.blockSize,k=this.B,O=this.h,S=0;S<A;){if(O==0)for(;S<=C;)l(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<A;)if(k[O++]=w.charCodeAt(S++),O==this.blockSize){l(this,k),O=0;break}}else for(;S<A;)if(k[O++]=w[S++],O==this.blockSize){l(this,k),O=0;break}}this.h=O,this.o+=A},s.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var A=1;A<w.length-8;++A)w[A]=0;var C=8*this.o;for(A=w.length-8;A<w.length;++A)w[A]=C&255,C/=256;for(this.u(w),w=Array(16),A=C=0;4>A;++A)for(var k=0;32>k;k+=8)w[C++]=this.g[A]>>>k&255;return w};function c(w,A){var C=p;return Object.prototype.hasOwnProperty.call(C,w)?C[w]:C[w]=A(w)}function h(w,A){this.h=A;for(var C=[],k=!0,O=w.length-1;0<=O;O--){var S=w[O]|0;k&&S==A||(C[O]=S,k=!1)}this.g=C}var p={};function y(w){return-128<=w&&128>w?c(w,function(A){return new h([A|0],0>A?-1:0)}):new h([w|0],0>w?-1:0)}function _(w){if(isNaN(w)||!isFinite(w))return N;if(0>w)return $(_(-w));for(var A=[],C=1,k=0;w>=C;k++)A[k]=w/C|0,C*=4294967296;return new h(A,0)}function T(w,A){if(w.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(w.charAt(0)=="-")return $(T(w.substring(1),A));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=_(Math.pow(A,8)),k=N,O=0;O<w.length;O+=8){var S=Math.min(8,w.length-O),R=parseInt(w.substring(O,O+S),A);8>S?(S=_(Math.pow(A,S)),k=k.j(S).add(_(R))):(k=k.j(C),k=k.add(_(R)))}return k}var N=y(0),z=y(1),G=y(16777216);r=h.prototype,r.m=function(){if(J(this))return-$(this).m();for(var w=0,A=1,C=0;C<this.g.length;C++){var k=this.i(C);w+=(0<=k?k:4294967296+k)*A,A*=4294967296}return w},r.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D(this))return"0";if(J(this))return"-"+$(this).toString(w);for(var A=_(Math.pow(w,6)),C=this,k="";;){var O=ge(C,A).g;C=ae(C,O.j(A));var S=((0<C.g.length?C.g[0]:C.h)>>>0).toString(w);if(C=O,D(C))return S+k;for(;6>S.length;)S="0"+S;k=S+k}},r.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function D(w){if(w.h!=0)return!1;for(var A=0;A<w.g.length;A++)if(w.g[A]!=0)return!1;return!0}function J(w){return w.h==-1}r.l=function(w){return w=ae(this,w),J(w)?-1:D(w)?0:1};function $(w){for(var A=w.g.length,C=[],k=0;k<A;k++)C[k]=~w.g[k];return new h(C,~w.h).add(z)}r.abs=function(){return J(this)?$(this):this},r.add=function(w){for(var A=Math.max(this.g.length,w.g.length),C=[],k=0,O=0;O<=A;O++){var S=k+(this.i(O)&65535)+(w.i(O)&65535),R=(S>>>16)+(this.i(O)>>>16)+(w.i(O)>>>16);k=R>>>16,S&=65535,R&=65535,C[O]=R<<16|S}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ae(w,A){return w.add($(A))}r.j=function(w){if(D(this)||D(w))return N;if(J(this))return J(w)?$(this).j($(w)):$($(this).j(w));if(J(w))return $(this.j($(w)));if(0>this.l(G)&&0>w.l(G))return _(this.m()*w.m());for(var A=this.g.length+w.g.length,C=[],k=0;k<2*A;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<w.g.length;O++){var S=this.i(k)>>>16,R=this.i(k)&65535,be=w.i(O)>>>16,he=w.i(O)&65535;C[2*k+2*O]+=R*he,W(C,2*k+2*O),C[2*k+2*O+1]+=S*he,W(C,2*k+2*O+1),C[2*k+2*O+1]+=R*be,W(C,2*k+2*O+1),C[2*k+2*O+2]+=S*be,W(C,2*k+2*O+2)}for(k=0;k<A;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=A;k<2*A;k++)C[k]=0;return new h(C,0)};function W(w,A){for(;(w[A]&65535)!=w[A];)w[A+1]+=w[A]>>>16,w[A]&=65535,A++}function me(w,A){this.g=w,this.h=A}function ge(w,A){if(D(A))throw Error("division by zero");if(D(w))return new me(N,N);if(J(w))return A=ge($(w),A),new me($(A.g),$(A.h));if(J(A))return A=ge(w,$(A)),new me($(A.g),A.h);if(30<w.g.length){if(J(w)||J(A))throw Error("slowDivide_ only works with positive integers.");for(var C=z,k=A;0>=k.l(w);)C=Ce(C),k=Ce(k);var O=xe(C,1),S=xe(k,1);for(k=xe(k,2),C=xe(C,2);!D(k);){var R=S.add(k);0>=R.l(w)&&(O=O.add(C),S=R),k=xe(k,1),C=xe(C,1)}return A=ae(w,O.j(A)),new me(O,A)}for(O=N;0<=w.l(A);){for(C=Math.max(1,Math.floor(w.m()/A.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),S=_(C),R=S.j(A);J(R)||0<R.l(w);)C-=k,S=_(C),R=S.j(A);D(S)&&(S=z),O=O.add(S),w=ae(w,R)}return new me(O,w)}r.A=function(w){return ge(this,w).h},r.and=function(w){for(var A=Math.max(this.g.length,w.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)&w.i(k);return new h(C,this.h&w.h)},r.or=function(w){for(var A=Math.max(this.g.length,w.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)|w.i(k);return new h(C,this.h|w.h)},r.xor=function(w){for(var A=Math.max(this.g.length,w.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)^w.i(k);return new h(C,this.h^w.h)};function Ce(w){for(var A=w.g.length+1,C=[],k=0;k<A;k++)C[k]=w.i(k)<<1|w.i(k-1)>>>31;return new h(C,w.h)}function xe(w,A){var C=A>>5;A%=32;for(var k=w.g.length-C,O=[],S=0;S<k;S++)O[S]=0<A?w.i(S+C)>>>A|w.i(S+C+1)<<32-A:w.i(S+C);return new h(O,w.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Y_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=T,Ka=h}).apply(typeof o0<"u"?o0:typeof self<"u"?self:typeof window<"u"?window:{});var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $_,pl,X_,Ru,Gf,W_,J_,Z_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,g,b){return u==Array.prototype||u==Object.prototype||(u[g]=b.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof _u=="object"&&_u];for(var g=0;g<u.length;++g){var b=u[g];if(b&&b.Math==Math)return b}throw Error("Cannot find global object")}var s=i(this);function l(u,g){if(g)e:{var b=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var U=u[E];if(!(U in b))break e;b=b[U]}u=u[u.length-1],E=b[u],g=g(E),g!=E&&g!=null&&e(b,u,{configurable:!0,writable:!0,value:g})}}function c(u,g){u instanceof String&&(u+="");var b=0,E=!1,U={next:function(){if(!E&&b<u.length){var X=b++;return{value:g(X,u[X]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}l("Array.prototype.values",function(u){return u||function(){return c(this,function(g,b){return b})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function y(u){var g=typeof u;return g=g!="object"?g:u?Array.isArray(u)?"array":g:"null",g=="array"||g=="object"&&typeof u.length=="number"}function _(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function T(u,g,b){return u.call.apply(u.bind,arguments)}function N(u,g,b){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),u.apply(g,U)}}return function(){return u.apply(g,arguments)}}function z(u,g,b){return z=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:N,z.apply(null,arguments)}function G(u,g){var b=Array.prototype.slice.call(arguments,1);return function(){var E=b.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function D(u,g){function b(){}b.prototype=g.prototype,u.aa=g.prototype,u.prototype=new b,u.prototype.constructor=u,u.Qb=function(E,U,X){for(var pe=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)pe[ct-2]=arguments[ct];return g.prototype[U].apply(E,pe)}}function J(u){const g=u.length;if(0<g){const b=Array(g);for(let E=0;E<g;E++)b[E]=u[E];return b}return[]}function $(u,g){for(let b=1;b<arguments.length;b++){const E=arguments[b];if(y(E)){const U=u.length||0,X=E.length||0;u.length=U+X;for(let pe=0;pe<X;pe++)u[U+pe]=E[pe]}else u.push(E)}}class ae{constructor(g,b){this.i=g,this.j=b,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function W(u){return/^[\s\xa0]*$/.test(u)}function me(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function ge(u){return ge[" "](u),u}ge[" "]=function(){};var Ce=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function xe(u,g,b){for(const E in u)g.call(b,u[E],E,u)}function w(u,g){for(const b in u)g.call(void 0,u[b],b,u)}function A(u){const g={};for(const b in u)g[b]=u[b];return g}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,g){let b,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(b in E)u[b]=E[b];for(let X=0;X<C.length;X++)b=C[X],Object.prototype.hasOwnProperty.call(E,b)&&(u[b]=E[b])}}function O(u){var g=1;u=u.split(":");const b=[];for(;0<g&&u.length;)b.push(u.shift()),g--;return u.length&&b.push(u.join(":")),b}function S(u){p.setTimeout(()=>{throw u},0)}function R(){var u=Re;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class be{constructor(){this.h=this.g=null}add(g,b){const E=he.get();E.set(g,b),this.h?this.h.next=E:this.g=E,this.h=E}}var he=new ae(()=>new L,u=>u.reset());class L{constructor(){this.next=this.g=this.h=null}set(g,b){this.h=g,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}let B,se=!1,Re=new be,Ne=()=>{const u=p.Promise.resolve(void 0);B=()=>{u.then(j)}};var j=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(b){S(b)}var g=he;g.j(u),100>g.h&&(g.h++,u.next=g.g,g.g=u)}se=!1};function M(){this.s=this.s,this.C=this.C}M.prototype.s=!1,M.prototype.ma=function(){this.s||(this.s=!0,this.N())},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var fe=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const b=()=>{};p.addEventListener("test",b,g),p.removeEventListener("test",b,g)}catch{}return u})();function K(u,g){if(Q.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var b=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget){if(Ce){e:{try{ge(g.nodeName);var U=!0;break e}catch{}U=!1}U||(g=null)}}else b=="mouseover"?g=u.fromElement:b=="mouseout"&&(g=u.toElement);this.relatedTarget=g,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Z[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&K.aa.h.call(this)}}D(K,Q);var Z={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var de="closure_listenable_"+(1e6*Math.random()|0),ve=0;function Te(u,g,b,E,U){this.listener=u,this.proxy=null,this.src=g,this.type=b,this.capture=!!E,this.ha=U,this.key=++ve,this.da=this.fa=!1}function Ye(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Fe(u){this.src=u,this.g={},this.h=0}Fe.prototype.add=function(u,g,b,E,U){var X=u.toString();u=this.g[X],u||(u=this.g[X]=[],this.h++);var pe=yt(u,g,E,U);return-1<pe?(g=u[pe],b||(g.fa=!1)):(g=new Te(g,this.src,X,!!E,U),g.fa=b,u.push(g)),g};function Rt(u,g){var b=g.type;if(b in u.g){var E=u.g[b],U=Array.prototype.indexOf.call(E,g,void 0),X;(X=0<=U)&&Array.prototype.splice.call(E,U,1),X&&(Ye(g),u.g[b].length==0&&(delete u.g[b],u.h--))}}function yt(u,g,b,E){for(var U=0;U<u.length;++U){var X=u[U];if(!X.da&&X.listener==g&&X.capture==!!b&&X.ha==E)return U}return-1}var tt="closure_lm_"+(1e6*Math.random()|0),It={};function bn(u,g,b,E,U){if(Array.isArray(g)){for(var X=0;X<g.length;X++)bn(u,g[X],b,E,U);return null}return b=ut(b),u&&u[de]?u.K(g,b,_(E)?!!E.capture:!1,U):ne(u,g,b,!1,E,U)}function ne(u,g,b,E,U,X){if(!g)throw Error("Invalid event type");var pe=_(U)?!!U.capture:!!U,ct=st(u);if(ct||(u[tt]=ct=new Fe(u)),b=ct.add(g,b,E,pe,X),b.proxy)return b;if(E=ue(),b.proxy=E,E.src=u,E.listener=b,u.addEventListener)fe||(U=pe),U===void 0&&(U=!1),u.addEventListener(g.toString(),E,U);else if(u.attachEvent)u.attachEvent(we(g.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return b}function ue(){function u(b){return g.call(u.src,u.listener,b)}const g=ke;return u}function ye(u,g,b,E,U){if(Array.isArray(g))for(var X=0;X<g.length;X++)ye(u,g[X],b,E,U);else E=_(E)?!!E.capture:!!E,b=ut(b),u&&u[de]?(u=u.i,g=String(g).toString(),g in u.g&&(X=u.g[g],b=yt(X,b,E,U),-1<b&&(Ye(X[b]),Array.prototype.splice.call(X,b,1),X.length==0&&(delete u.g[g],u.h--)))):u&&(u=st(u))&&(g=u.g[g.toString()],u=-1,g&&(u=yt(g,b,E,U)),(b=-1<u?g[u]:null)&&ee(b))}function ee(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[de])Rt(g.i,u);else{var b=u.type,E=u.proxy;g.removeEventListener?g.removeEventListener(b,E,u.capture):g.detachEvent?g.detachEvent(we(b),E):g.addListener&&g.removeListener&&g.removeListener(E),(b=st(g))?(Rt(b,u),b.h==0&&(b.src=null,g[tt]=null)):Ye(u)}}}function we(u){return u in It?It[u]:It[u]="on"+u}function ke(u,g){if(u.da)u=!0;else{g=new K(g,this);var b=u.listener,E=u.ha||u.src;u.fa&&ee(u),u=b.call(E,g)}return u}function st(u){return u=u[tt],u instanceof Fe?u:null}var Le="__closure_events_fn_"+(1e9*Math.random()>>>0);function ut(u){return typeof u=="function"?u:(u[Le]||(u[Le]=function(g){return u.handleEvent(g)}),u[Le])}function bt(){M.call(this),this.i=new Fe(this),this.M=this,this.F=null}D(bt,M),bt.prototype[de]=!0,bt.prototype.removeEventListener=function(u,g,b,E){ye(this,u,g,b,E)};function ot(u,g){var b,E=u.F;if(E)for(b=[];E;E=E.F)b.push(E);if(u=u.M,E=g.type||g,typeof g=="string")g=new Q(g,u);else if(g instanceof Q)g.target=g.target||u;else{var U=g;g=new Q(E,u),k(g,U)}if(U=!0,b)for(var X=b.length-1;0<=X;X--){var pe=g.g=b[X];U=xn(pe,E,!0,g)&&U}if(pe=g.g=u,U=xn(pe,E,!0,g)&&U,U=xn(pe,E,!1,g)&&U,b)for(X=0;X<b.length;X++)pe=g.g=b[X],U=xn(pe,E,!1,g)&&U}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var u=this.i,g;for(g in u.g){for(var b=u.g[g],E=0;E<b.length;E++)Ye(b[E]);delete u.g[g],u.h--}}this.F=null},bt.prototype.K=function(u,g,b,E){return this.i.add(String(u),g,!1,b,E)},bt.prototype.L=function(u,g,b,E){return this.i.add(String(u),g,!0,b,E)};function xn(u,g,b,E){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,X=0;X<g.length;++X){var pe=g[X];if(pe&&!pe.da&&pe.capture==b){var ct=pe.listener,Ut=pe.ha||pe.src;pe.fa&&Rt(u.i,pe),U=ct.call(Ut,E)!==!1&&U}}return U&&!E.defaultPrevented}function Mn(u,g,b){if(typeof u=="function")b&&(u=z(u,b));else if(u&&typeof u.handleEvent=="function")u=z(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:p.setTimeout(u,g||0)}function si(u){u.g=Mn(()=>{u.g=null,u.i&&(u.i=!1,si(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class wt extends M{constructor(g,b){super(),this.m=g,this.l=b,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:si(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(u){M.call(this),this.h=u,this.g={}}D(Ct,M);var dn=[];function hn(u){xe(u.g,function(g,b){this.g.hasOwnProperty(b)&&ee(g)},u),u.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),hn(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qn=p.JSON.stringify,En=p.JSON.parse,pd=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function uo(){}uo.prototype.h=null;function Ql(u){return u.h||(u.h=u.i())}function ya(){}var pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gr(){Q.call(this,"d")}D(gr,Q);function oi(){Q.call(this,"c")}D(oi,Q);var Yn={},yr=null;function Za(){return yr=yr||new bt}Yn.La="serverreachability";function ho(u){Q.call(this,Yn.La,u)}D(ho,Q);function ji(u){const g=Za();ot(g,new ho(g))}Yn.STAT_EVENT="statevent";function vr(u,g){Q.call(this,Yn.STAT_EVENT,u),this.stat=g}D(vr,Q);function en(u){const g=Za();ot(g,new vr(g,u))}Yn.Ma="timingevent";function fo(u,g){Q.call(this,Yn.Ma,u),this.size=g}D(fo,Q);function _r(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},g)}function br(){this.g=!0}br.prototype.xa=function(){this.g=!1};function mo(u,g,b,E,U,X){u.info(function(){if(u.g)if(X)for(var pe="",ct=X.split("&"),Ut=0;Ut<ct.length;Ut++){var qe=ct[Ut].split("=");if(1<qe.length){var Xt=qe[0];qe=qe[1];var Wt=Xt.split("_");pe=2<=Wt.length&&Wt[1]=="type"?pe+(Xt+"="+qe+"&"):pe+(Xt+"=redacted&")}}else pe=null;else pe=X;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+g+`
`+b+`
`+pe})}function po(u,g,b,E,U,X,pe){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+g+`
`+b+`
`+X+" "+pe})}function Mi(u,g,b,E){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+gi(u,b)+(E?" "+E:"")})}function Yl(u,g){u.info(function(){return"TIMEOUT: "+g})}br.prototype.info=function(){};function gi(u,g){if(!u.g)return g;if(!g)return null;try{var b=JSON.parse(g);if(b){for(u=0;u<b.length;u++)if(Array.isArray(b[u])){var E=b[u];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var X=U[0];if(X!="noop"&&X!="stop"&&X!="close")for(var pe=1;pe<U.length;pe++)U[pe]=""}}}}return Qn(b)}catch{return g}}var Dt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tn={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yi;function xr(){}D(xr,uo),xr.prototype.g=function(){return new XMLHttpRequest},xr.prototype.i=function(){return{}},yi=new xr;function vi(u,g,b,E){this.j=u,this.i=g,this.l=b,this.R=E||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $l}function $l(){this.i=null,this.g="",this.h=!1}var go={},Vi={};function va(u,g,b){u.L=1,u.v=xa(kt(g)),u.m=b,u.P=!0,Li(u,null)}function Li(u,g){u.F=Date.now(),li(u),u.A=kt(u.v);var b=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Ui(b.i,"t",E),u.C=0,b=u.j.J,u.h=new $l,u.g=dc(u.j,b?g:null,!u.m),0<u.O&&(u.M=new wt(z(u.Y,u,u.g),u.O)),g=u.U,b=u.g,E=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(dn[0]=U.toString()),U=dn);for(var X=0;X<U.length;X++){var pe=bn(b,U[X],E||g.handleEvent,!1,g.h||g);if(!pe)break;g.g[pe.key]=pe}g=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,g)):(u.u="GET",u.g.ea(u.A,u.u,null,g)),ji(),mo(u.i,u.u,u.A,u.l,u.R,u.m)}vi.prototype.ca=function(u){u=u.target;const g=this.M;g&&wn(u)==3?g.j():this.Y(u)},vi.prototype.Y=function(u){try{if(u==this.g)e:{const Wt=wn(this.g);var g=this.g.Ba();const jr=this.g.Z();if(!(3>Wt)&&(Wt!=3||this.g&&(this.h.h||this.g.oa()||Sa(this.g)))){this.J||Wt!=4||g==7||(g==8||0>=jr?ji(3):ji(2)),es(this);var b=this.g.Z();this.X=b;t:if(zi(this)){var E=Sa(this.g);u="";var U=E.length,X=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),Er(this);var pe="";break t}this.h.i=new p.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,u+=this.h.i.decode(E[g],{stream:!(X&&g==U-1)});E.length=0,this.h.g+=u,this.C=0,pe=this.h.g}else pe=this.g.oa();if(this.o=b==200,po(this.i,this.u,this.A,this.l,this.R,Wt,b),this.o){if(this.T&&!this.K){t:{if(this.g){var ct,Ut=this.g;if((ct=Ut.g?Ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(ct)){var qe=ct;break t}}qe=null}if(b=qe)Mi(this.i,this.l,b,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_i(this,b);else{this.o=!1,this.s=3,en(12),Tn(this),Er(this);break e}}if(this.P){b=!0;let Nn;for(;!this.J&&this.C<pe.length;)if(Nn=_a(this,pe),Nn==Vi){Wt==4&&(this.s=4,en(14),b=!1),Mi(this.i,this.l,null,"[Incomplete Response]");break}else if(Nn==go){this.s=4,en(15),Mi(this.i,this.l,pe,"[Invalid Chunk]"),b=!1;break}else Mi(this.i,this.l,Nn,null),_i(this,Nn);if(zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Wt!=4||pe.length!=0||this.h.h||(this.s=1,en(16),b=!1),this.o=this.o&&b,!b)Mi(this.i,this.l,pe,"[Invalid Chunked Response]"),Tn(this),Er(this);else if(0<pe.length&&!this.W){this.W=!0;var Xt=this.j;Xt.g==this&&Xt.ba&&!Xt.M&&(Xt.j.info("Great, no buffering proxy detected. Bytes received: "+pe.length),Ro(Xt),Xt.M=!0,en(11))}}else Mi(this.i,this.l,pe,null),_i(this,pe);Wt==4&&Tn(this),this.o&&!this.J&&(Wt==4?lc(this.j,this):(this.o=!1,li(this)))}else nc(this.g),b==400&&0<pe.indexOf("Unknown SID")?(this.s=3,en(12)):(this.s=0,en(13)),Tn(this),Er(this)}}}catch{}finally{}};function zi(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function _a(u,g){var b=u.C,E=g.indexOf(`
`,b);return E==-1?Vi:(b=Number(g.substring(b,E)),isNaN(b)?go:(E+=1,E+b>g.length?Vi:(g=g.slice(E,E+b),u.C=E+b,g)))}vi.prototype.cancel=function(){this.J=!0,Tn(this)};function li(u){u.S=Date.now()+u.I,Vt(u,u.I)}function Vt(u,g){if(u.B!=null)throw Error("WatchDog timer not null");u.B=_r(z(u.ba,u),g)}function es(u){u.B&&(p.clearTimeout(u.B),u.B=null)}vi.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Yl(this.i,this.A),this.L!=2&&(ji(),en(17)),Tn(this),this.s=2,Er(this)):Vt(this,this.S-u)};function Er(u){u.j.G==0||u.J||lc(u.j,u)}function Tn(u){es(u);var g=u.M;g&&typeof g.ma=="function"&&g.ma(),u.M=null,hn(u.U),u.g&&(g=u.g,u.g=null,g.abort(),g.ma())}function _i(u,g){try{var b=u.j;if(b.G!=0&&(b.g==u||Tr(b.h,u))){if(!u.K&&Tr(b.h,u)&&b.G==3){try{var E=b.Da.g.parse(g)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){e:if(!b.u){if(b.g)if(b.g.F+3e3<u.F)kr(b),Dr(b);else break e;Ao(b),en(18)}}else b.za=U[1],0<b.za-b.T&&37500>U[2]&&b.F&&b.v==0&&!b.C&&(b.C=_r(z(b.Za,b),6e3));if(1>=Xl(b.h)&&b.ca){try{b.ca()}catch{}b.ca=void 0}}else Hi(b,11)}else if((u.K||b.g==u)&&kr(b),!W(g))for(U=b.Da.g.parse(g),g=0;g<U.length;g++){let qe=U[g];if(b.T=qe[0],qe=qe[1],b.G==2)if(qe[0]=="c"){b.K=qe[1],b.ia=qe[2];const Xt=qe[3];Xt!=null&&(b.la=Xt,b.j.info("VER="+b.la));const Wt=qe[4];Wt!=null&&(b.Aa=Wt,b.j.info("SVER="+b.Aa));const jr=qe[5];jr!=null&&typeof jr=="number"&&0<jr&&(E=1.5*jr,b.L=E,b.j.info("backChannelRequestTimeoutMs_="+E)),E=b;const Nn=u.g;if(Nn){const Ra=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ra){var X=E.h;X.g||Ra.indexOf("spdy")==-1&&Ra.indexOf("quic")==-1&&Ra.indexOf("h2")==-1||(X.j=X.l,X.g=new Set,X.h&&(Sr(X,X.h),X.h=null))}if(E.D){const Fi=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Fi&&(E.ya=Fi,nt(E.I,E.D,Fi))}}b.G=3,b.l&&b.l.ua(),b.ba&&(b.R=Date.now()-u.F,b.j.info("Handshake RTT: "+b.R+"ms")),E=b;var pe=u;if(E.qa=uc(E,E.J?E.ia:null,E.W),pe.K){$n(E.h,pe);var ct=pe,Ut=E.L;Ut&&(ct.I=Ut),ct.B&&(es(ct),li(ct)),E.g=pe}else sc(E);0<b.i.length&&ls(b)}else qe[0]!="stop"&&qe[0]!="close"||Hi(b,7);else b.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Hi(b,7):So(b):qe[0]!="noop"&&b.l&&b.l.ta(qe),b.v=0)}}ji(4)}catch{}}var gd=class{constructor(u,g){this.g=u,this.map=g}};function yo(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vo(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Xl(u){return u.h?1:u.g?u.g.size:0}function Tr(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function Sr(u,g){u.g?u.g.add(g):u.h=g}function $n(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}yo.prototype.cancel=function(){if(this.i=Sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Sn(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const b of u.g.values())g=g.concat(b.D);return g}return J(u.i)}function Wl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(y(u)){for(var g=[],b=u.length,E=0;E<b;E++)g.push(u[E]);return g}g=[],b=0;for(E in u)g[b++]=u[E];return g}function yd(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(y(u)||typeof u=="string"){var g=[];u=u.length;for(var b=0;b<u;b++)g.push(b);return g}g=[],b=0;for(const E in u)g[b++]=E;return g}}}function ts(u,g){if(u.forEach&&typeof u.forEach=="function")u.forEach(g,void 0);else if(y(u)||typeof u=="string")Array.prototype.forEach.call(u,g,void 0);else for(var b=yd(u),E=Wl(u),U=E.length,X=0;X<U;X++)g.call(void 0,E[X],b&&b[X],u)}var _o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ns(u,g){if(u){u=u.split("&");for(var b=0;b<u.length;b++){var E=u[b].indexOf("="),U=null;if(0<=E){var X=u[b].substring(0,E);U=u[b].substring(E+1)}else X=u[b];g(X,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Pi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Pi){this.h=u.h,wr(this,u.j),this.o=u.o,this.g=u.g,ba(this,u.s),this.l=u.l;var g=u.i,b=new bi;b.i=g.i,g.g&&(b.g=new Map(g.g),b.h=g.h),is(this,b),this.m=u.m}else u&&(g=String(u).match(_o))?(this.h=!1,wr(this,g[1]||"",!0),this.o=Ar(g[2]||""),this.g=Ar(g[3]||"",!0),ba(this,g[4]),this.l=Ar(g[5]||"",!0),is(this,g[6]||"",!0),this.m=Ar(g[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}Pi.prototype.toString=function(){var u=[],g=this.j;g&&u.push(Xn(g,bo,!0),":");var b=this.g;return(b||g=="file")&&(u.push("//"),(g=this.o)&&u.push(Xn(g,bo,!0),"@"),u.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b=this.s,b!=null&&u.push(":",String(b))),(b=this.l)&&(this.g&&b.charAt(0)!="/"&&u.push("/"),u.push(Xn(b,b.charAt(0)=="/"?xo:Jl,!0))),(b=this.i.toString())&&u.push("?",b),(b=this.m)&&u.push("#",Xn(b,bd)),u.join("")};function kt(u){return new Pi(u)}function wr(u,g,b){u.j=b?Ar(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function ba(u,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);u.s=g}else u.s=null}function is(u,g,b){g instanceof bi?(u.i=g,Zl(u.i,u.h)):(b||(g=Xn(g,_d)),u.i=new bi(g,u.h))}function nt(u,g,b){u.i.set(g,b)}function xa(u){return nt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ar(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Xn(u,g,b){return typeof u=="string"?(u=encodeURI(u).replace(g,vd),b&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function vd(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var bo=/[#\/\?@]/g,Jl=/[#\?:]/g,xo=/[#\?]/g,_d=/[#\?@]/g,bd=/#/g;function bi(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function $t(u){u.g||(u.g=new Map,u.h=0,u.i&&ns(u.i,function(g,b){u.add(decodeURIComponent(g.replace(/\+/g," ")),b)}))}r=bi.prototype,r.add=function(u,g){$t(this),this.i=null,u=Vn(this,u);var b=this.g.get(u);return b||this.g.set(u,b=[]),b.push(g),this.h+=1,this};function rs(u,g){$t(u),g=Vn(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function as(u,g){return $t(u),g=Vn(u,g),u.g.has(g)}r.forEach=function(u,g){$t(this),this.g.forEach(function(b,E){b.forEach(function(U){u.call(g,U,E,this)},this)},this)},r.na=function(){$t(this);const u=Array.from(this.g.values()),g=Array.from(this.g.keys()),b=[];for(let E=0;E<g.length;E++){const U=u[E];for(let X=0;X<U.length;X++)b.push(g[E])}return b},r.V=function(u){$t(this);let g=[];if(typeof u=="string")as(this,u)&&(g=g.concat(this.g.get(Vn(this,u))));else{u=Array.from(this.g.values());for(let b=0;b<u.length;b++)g=g.concat(u[b])}return g},r.set=function(u,g){return $t(this),this.i=null,u=Vn(this,u),as(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},r.get=function(u,g){return u?(u=this.V(u),0<u.length?String(u[0]):g):g};function Ui(u,g,b){rs(u,g),0<b.length&&(u.i=null,u.g.set(Vn(u,g),J(b)),u.h+=b.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(var b=0;b<g.length;b++){var E=g[b];const X=encodeURIComponent(String(E)),pe=this.V(E);for(E=0;E<pe.length;E++){var U=X;pe[E]!==""&&(U+="="+encodeURIComponent(String(pe[E]))),u.push(U)}}return this.i=u.join("&")};function Vn(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function Zl(u,g){g&&!u.j&&($t(u),u.i=null,u.g.forEach(function(b,E){var U=E.toLowerCase();E!=U&&(rs(this,E),Ui(this,U,b))},u)),u.j=g}function Eo(u,g){const b=new br;if(p.Image){const E=new Image;E.onload=G(Cn,b,"TestLoadImage: loaded",!0,g,E),E.onerror=G(Cn,b,"TestLoadImage: error",!1,g,E),E.onabort=G(Cn,b,"TestLoadImage: abort",!1,g,E),E.ontimeout=G(Cn,b,"TestLoadImage: timeout",!1,g,E),p.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else g(!1)}function ec(u,g){const b=new br,E=new AbortController,U=setTimeout(()=>{E.abort(),Cn(b,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:E.signal}).then(X=>{clearTimeout(U),X.ok?Cn(b,"TestPingServer: ok",!0,g):Cn(b,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),Cn(b,"TestPingServer: error",!1,g)})}function Cn(u,g,b,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(b)}catch{}}function ci(){this.g=new pd}function To(u,g,b){const E=b||"";try{ts(u,function(U,X){let pe=U;_(U)&&(pe=Qn(U)),g.push(E+X+"="+encodeURIComponent(pe))})}catch(U){throw g.push(E+"type="+encodeURIComponent("_badmap")),U}}function xi(u){this.l=u.Ub||null,this.j=u.eb||!1}D(xi,uo),xi.prototype.g=function(){return new Ln(this.l,this.j)},xi.prototype.i=(function(u){return function(){return u}})({});function Ln(u,g){bt.call(this),this.D=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ln,bt),r=Ln.prototype,r.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=g,this.readyState=1,Rr(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(g.body=u),(this.D||p).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ss(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ss(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?Ei(this):Rr(this),this.readyState==3&&ss(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Ei(this))},r.Qa=function(u){this.g&&(this.response=u,Ei(this))},r.ga=function(){this.g&&Ei(this)};function Ei(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Rr(u)}r.setRequestHeader=function(u,g){this.u.append(u,g)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var b=g.next();!b.done;)b=b.value,u.push(b[0]+": "+b[1]),b=g.next();return u.join(`\r
`)};function Rr(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ea(u){let g="";return xe(u,function(b,E){g+=E,g+=":",g+=b,g+=`\r
`}),g}function Cr(u,g,b){e:{for(E in b){var E=!1;break e}E=!0}E||(b=Ea(b),typeof u=="string"?b!=null&&encodeURIComponent(String(b)):nt(u,g,b))}function xt(u){bt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(xt,bt);var fn=/^https?$/i,Bi=["POST","PUT"];r=xt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,g,b,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yi.g(),this.v=this.o?Ql(this.o):Ql(yi),this.g.onreadystatechange=z(this.Ea,this);try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(X){Ta(this,X);return}if(u=b||"",b=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)b.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const X of E.keys())b.set(X,E.get(X));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(b.keys()).find(X=>X.toLowerCase()=="content-type"),U=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Bi,g,void 0))||E||U||b.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[X,pe]of b)this.g.setRequestHeader(X,pe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{os(this),this.u=!0,this.g.send(u),this.u=!1}catch(X){Ta(this,X)}};function Ta(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.m=5,Nr(u),Ir(u)}function Nr(u){u.A||(u.A=!0,ot(u,"complete"),ot(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ot(this,"complete"),ot(this,"abort"),Ir(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),xt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?tc(this):this.bb())},r.bb=function(){tc(this)};function tc(u){if(u.h&&typeof h<"u"&&(!u.v[1]||wn(u)!=4||u.Z()!=2)){if(u.u&&wn(u)==4)Mn(u.Ea,0,u);else if(ot(u,"readystatechange"),wn(u)==4){u.h=!1;try{const pe=u.Z();e:switch(pe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var b;if(!(b=g)){var E;if(E=pe===0){var U=String(u.D).match(_o)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),E=!fn.test(U?U.toLowerCase():"")}b=E}if(b)ot(u,"complete"),ot(u,"success");else{u.m=6;try{var X=2<wn(u)?u.g.statusText:""}catch{X=""}u.l=X+" ["+u.Z()+"]",Nr(u)}}finally{Ir(u)}}}}function Ir(u,g){if(u.g){os(u);const b=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,g||ot(u,"ready");try{b.onreadystatechange=E}catch{}}}function os(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function wn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),En(g)}};function Sa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function nc(u){const g={};u=(u.g&&2<=wn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(W(u[E]))continue;var b=O(u[E]);const U=b[0];if(b=b[1],typeof b!="string")continue;b=b.trim();const X=g[U]||[];g[U]=X,X.push(b)}w(g,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wa(u,g,b){return b&&b.internalChannelParams&&b.internalChannelParams[u]||g}function ic(u){this.Aa=0,this.i=[],this.j=new br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wa("baseRetryDelayMs",5e3,u),this.cb=wa("retryDelaySeedMs",1e4,u),this.Wa=wa("forwardChannelMaxRetries",2,u),this.wa=wa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new yo(u&&u.concurrentRequestLimit),this.Da=new ci,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ic.prototype,r.la=8,r.G=1,r.connect=function(u,g,b,E){en(0),this.W=u,this.H=g||{},b&&E!==void 0&&(this.H.OSID=b,this.H.OAID=E),this.F=this.X,this.I=uc(this,null,this.W),ls(this)};function So(u){if(rc(u),u.G==3){var g=u.U++,b=kt(u.I);if(nt(b,"SID",u.K),nt(b,"RID",g),nt(b,"TYPE","terminate"),Aa(u,b),g=new vi(u,u.j,g),g.L=2,g.v=xa(kt(b)),b=!1,p.navigator&&p.navigator.sendBeacon)try{b=p.navigator.sendBeacon(g.v.toString(),"")}catch{}!b&&p.Image&&(new Image().src=g.v,b=!0),b||(g.g=dc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),li(g)}Co(u)}function Dr(u){u.g&&(Ro(u),u.g.cancel(),u.g=null)}function rc(u){Dr(u),u.u&&(p.clearTimeout(u.u),u.u=null),kr(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function ls(u){if(!vo(u.h)&&!u.s){u.s=!0;var g=u.Ga;B||Ne(),se||(B(),se=!0),Re.add(g,u),u.B=0}}function xd(u,g){return Xl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=g.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=_r(z(u.Ga,u,g),cc(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new vi(this,this.j,u);let X=this.o;if(this.S&&(X?(X=A(X),k(X,this.S)):X=this.S),this.m!==null||this.O||(U.H=X,X=null),this.P)e:{for(var g=0,b=0;b<this.i.length;b++){t:{var E=this.i[b];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(g+=E,4096<g){g=b;break e}if(g===4096||b===this.i.length-1){g=b+1;break e}}g=1e3}else g=1e3;g=wo(this,U,g),b=kt(this.I),nt(b,"RID",u),nt(b,"CVER",22),this.D&&nt(b,"X-HTTP-Session-Id",this.D),Aa(this,b),X&&(this.O?g="headers="+encodeURIComponent(String(Ea(X)))+"&"+g:this.m&&Cr(b,this.m,X)),Sr(this.h,U),this.Ua&&nt(b,"TYPE","init"),this.P?(nt(b,"$req",g),nt(b,"SID","null"),U.T=!0,va(U,b,null)):va(U,b,g),this.G=2}}else this.G==3&&(u?ac(this,u):this.i.length==0||vo(this.h)||ac(this))};function ac(u,g){var b;g?b=g.l:b=u.U++;const E=kt(u.I);nt(E,"SID",u.K),nt(E,"RID",b),nt(E,"AID",u.T),Aa(u,E),u.m&&u.o&&Cr(E,u.m,u.o),b=new vi(u,u.j,b,u.B+1),u.m===null&&(b.H=u.o),g&&(u.i=g.D.concat(u.i)),g=wo(u,b,1e3),b.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Sr(u.h,b),va(b,E,g)}function Aa(u,g){u.H&&xe(u.H,function(b,E){nt(g,E,b)}),u.l&&ts({},function(b,E){nt(g,E,b)})}function wo(u,g,b){b=Math.min(u.i.length,b);var E=u.l?z(u.l.Na,u.l,u):null;e:{var U=u.i;let X=-1;for(;;){const pe=["count="+b];X==-1?0<b?(X=U[0].g,pe.push("ofs="+X)):X=0:pe.push("ofs="+X);let ct=!0;for(let Ut=0;Ut<b;Ut++){let qe=U[Ut].g;const Xt=U[Ut].map;if(qe-=X,0>qe)X=Math.max(0,U[Ut].g-100),ct=!1;else try{To(Xt,pe,"req"+qe+"_")}catch{E&&E(Xt)}}if(ct){E=pe.join("&");break e}}}return u=u.i.splice(0,b),g.D=u,E}function sc(u){if(!u.g&&!u.u){u.Y=1;var g=u.Fa;B||Ne(),se||(B(),se=!0),Re.add(g,u),u.v=0}}function Ao(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=_r(z(u.Fa,u),cc(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,oc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=_r(z(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,en(10),Dr(this),oc(this))};function Ro(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function oc(u){u.g=new vi(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var g=kt(u.qa);nt(g,"RID","rpc"),nt(g,"SID",u.K),nt(g,"AID",u.T),nt(g,"CI",u.F?"0":"1"),!u.F&&u.ja&&nt(g,"TO",u.ja),nt(g,"TYPE","xmlhttp"),Aa(u,g),u.m&&u.o&&Cr(g,u.m,u.o),u.L&&(u.g.I=u.L);var b=u.g;u=u.ia,b.L=1,b.v=xa(kt(g)),b.m=null,b.P=!0,Li(b,u)}r.Za=function(){this.C!=null&&(this.C=null,Dr(this),Ao(this),en(19))};function kr(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function lc(u,g){var b=null;if(u.g==g){kr(u),Ro(u),u.g=null;var E=2}else if(Tr(u.h,g))b=g.D,$n(u.h,g),E=1;else return;if(u.G!=0){if(g.o)if(E==1){b=g.m?g.m.length:0,g=Date.now()-g.F;var U=u.B;E=Za(),ot(E,new fo(E,b)),ls(u)}else sc(u);else if(U=g.s,U==3||U==0&&0<g.X||!(E==1&&xd(u,g)||E==2&&Ao(u)))switch(b&&0<b.length&&(g=u.h,g.i=g.i.concat(b)),U){case 1:Hi(u,5);break;case 4:Hi(u,10);break;case 3:Hi(u,6);break;default:Hi(u,2)}}}function cc(u,g){let b=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(b*=2),b*g}function Hi(u,g){if(u.j.info("Error code "+g),g==2){var b=z(u.fb,u),E=u.Xa;const U=!E;E=new Pi(E||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||wr(E,"https"),xa(E),U?Eo(E.toString(),b):ec(E.toString(),b)}else en(2);u.G=0,u.l&&u.l.sa(g),Co(u),rc(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),en(2)):(this.j.info("Failed to ping google.com"),en(1))};function Co(u){if(u.G=0,u.ka=[],u.l){const g=Sn(u.h);(g.length!=0||u.i.length!=0)&&($(u.ka,g),$(u.ka,u.i),u.h.i.length=0,J(u.i),u.i.length=0),u.l.ra()}}function uc(u,g,b){var E=b instanceof Pi?kt(b):new Pi(b);if(E.g!="")g&&(E.g=g+"."+E.g),ba(E,E.s);else{var U=p.location;E=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var X=new Pi(null);E&&wr(X,E),g&&(X.g=g),U&&ba(X,U),b&&(X.l=b),E=X}return b=u.D,g=u.ya,b&&g&&nt(E,b,g),nt(E,"VER",u.la),Aa(u,E),E}function dc(u,g,b){if(g&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Ca&&!u.pa?new xt(new xi({eb:b})):new xt(u.pa),g.Ha(u.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function hc(){}r=hc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function cs(){}cs.prototype.g=function(u,g){return new An(u,g)};function An(u,g){bt.call(this),this.g=new ic(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(u?u["X-WebChannel-Client-Profile"]=g.va:u={"X-WebChannel-Client-Profile":g.va}),this.g.S=u,(u=g&&g.Sb)&&!W(u)&&(this.g.m=u),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!W(g)&&(this.g.D=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new Or(this)}D(An,bt),An.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},An.prototype.close=function(){So(this.g)},An.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var b={};b.__data__=u,u=b}else this.u&&(b={},b.__data__=Qn(u),u=b);g.i.push(new gd(g.Ya++,u)),g.G==3&&ls(g)},An.prototype.N=function(){this.g.l=null,delete this.j,So(this.g),delete this.g,An.aa.N.call(this)};function fc(u){gr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){e:{for(const b in g){u=b;break e}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}D(fc,gr);function mc(){oi.call(this),this.status=1}D(mc,oi);function Or(u){this.g=u}D(Or,hc),Or.prototype.ua=function(){ot(this.g,"a")},Or.prototype.ta=function(u){ot(this.g,new fc(u))},Or.prototype.sa=function(u){ot(this.g,new mc)},Or.prototype.ra=function(){ot(this.g,"b")},cs.prototype.createWebChannel=cs.prototype.g,An.prototype.send=An.prototype.o,An.prototype.open=An.prototype.m,An.prototype.close=An.prototype.close,Z_=function(){return new cs},J_=function(){return Za()},W_=Yn,Gf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Dt.NO_ERROR=0,Dt.TIMEOUT=8,Dt.HTTP_ERROR=6,Ru=Dt,tn.COMPLETE="complete",X_=tn,ya.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",bt.prototype.listen=bt.prototype.K,pl=ya,xt.prototype.listenOnce=xt.prototype.L,xt.prototype.getLastError=xt.prototype.Ka,xt.prototype.getLastErrorCode=xt.prototype.Ba,xt.prototype.getStatus=xt.prototype.Z,xt.prototype.getResponseJson=xt.prototype.Oa,xt.prototype.getResponseText=xt.prototype.oa,xt.prototype.send=xt.prototype.ea,xt.prototype.setWithCredentials=xt.prototype.Ha,$_=xt}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});const l0="@firebase/firestore";/**
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
 */class yn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yn.UNAUTHENTICATED=new yn(null),yn.GOOGLE_CREDENTIALS=new yn("google-credentials-uid"),yn.FIRST_PARTY=new yn("first-party-uid"),yn.MOCK_USER=new yn("mock-user");/**
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
 */let so="10.14.0";/**
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
 */const Ya=new _2("@firebase/firestore");function hl(){return Ya.logLevel}function Se(r,...e){if(Ya.logLevel<=et.DEBUG){const i=e.map(xm);Ya.debug(`Firestore (${so}): ${r}`,...i)}}function fr(r,...e){if(Ya.logLevel<=et.ERROR){const i=e.map(xm);Ya.error(`Firestore (${so}): ${r}`,...i)}}function Xs(r,...e){if(Ya.logLevel<=et.WARN){const i=e.map(xm);Ya.warn(`Firestore (${so}): ${r}`,...i)}}function xm(r){if(typeof r=="string")return r;try{/**
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
*/return(function(i){return JSON.stringify(i)})(r)}catch{return r}}/**
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
 */function Ve(r="Unexpected state"){const e=`FIRESTORE (${so}) INTERNAL ASSERTION FAILED: `+r;throw fr(e),new Error(e)}function ft(r,e){r||Ve()}function Ue(r,e){return r}/**
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
 */const ce={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class De extends pr{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ha{constructor(){this.promise=new Promise(((e,i)=>{this.resolve=e,this.reject=i}))}}/**
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
 */class eb{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable((()=>i(yn.UNAUTHENTICATED)))}shutdown(){}}class x2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class E2{constructor(e){this.t=e,this.currentUser=yn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){ft(this.o===void 0);let s=this.i;const l=y=>this.i!==s?(s=this.i,i(y)):Promise.resolve();let c=new ha;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new ha,e.enqueueRetryable((()=>l(this.currentUser)))};const h=()=>{const y=c;e.enqueueRetryable((async()=>{await y.promise,await l(this.currentUser)}))},p=y=>{Se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>p(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(Se("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new ha)}}),0),h()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((s=>this.i!==e?(Se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ft(typeof s.accessToken=="string"),new eb(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ft(e===null||typeof e=="string"),new yn(e)}}class T2{constructor(e,i,s){this.l=e,this.h=i,this.P=s,this.type="FirstParty",this.user=yn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class S2{constructor(e,i,s){this.l=e,this.h=i,this.P=s}getToken(){return Promise.resolve(new T2(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable((()=>i(yn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class w2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){ft(this.o===void 0);const s=c=>{c.error!=null&&Se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.R;return this.R=c.token,Se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const l=c=>{Se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((c=>l(c))),setTimeout((()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?l(c):Se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((i=>i?(ft(typeof i.token=="string"),this.R=i.token,new w2(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function R2(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let s=0;s<r;s++)i[s]=Math.floor(256*Math.random());return i}/**
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
 */class tb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const l=R2(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<i&&(s+=e.charAt(l[c]%e.length))}return s}}function at(r,e){return r<e?-1:r>e?1:0}function Ws(r,e,i){return r.length===e.length&&r.every(((s,l)=>i(s,e[l])))}/**
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
 */class Yt{constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new De(ce.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new De(ce.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<-62135596800)throw new De(ce.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new De(ce.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Yt.fromMillis(Date.now())}static fromDate(e){return Yt.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*i));return new Yt(i,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?at(this.nanoseconds,e.nanoseconds):at(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new Yt(0,0))}static max(){return new Pe(new Yt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Rl{constructor(e,i,s){i===void 0?i=0:i>e.length&&Ve(),s===void 0?s=e.length-i:s>e.length-i&&Ve(),this.segments=e,this.offset=i,this.len=s}get length(){return this.len}isEqual(e){return Rl.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof Rl?e.forEach((s=>{i.push(s)})):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,s=this.limit();i<s;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const s=Math.min(e.length,i.length);for(let l=0;l<s;l++){const c=e.get(l),h=i.get(l);if(c<h)return-1;if(c>h)return 1}return e.length<i.length?-1:e.length>i.length?1:0}}class Mt extends Rl{construct(e,i,s){return new Mt(e,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const s of e){if(s.indexOf("//")>=0)throw new De(ce.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter((l=>l.length>0)))}return new Mt(i)}static emptyPath(){return new Mt([])}}const C2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ln extends Rl{construct(e,i,s){return new ln(e,i,s)}static isValidIdentifier(e){return C2.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ln.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ln(["__name__"])}static fromServerFormat(e){const i=[];let s="",l=0;const c=()=>{if(s.length===0)throw new De(ce.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""};let h=!1;for(;l<e.length;){const p=e[l];if(p==="\\"){if(l+1===e.length)throw new De(ce.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[l+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new De(ce.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,l+=2}else p==="`"?(h=!h,l++):p!=="."||h?(s+=p,l++):(c(),l++)}if(c(),h)throw new De(ce.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ln(i)}static emptyPath(){return new ln([])}}/**
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
 */class je{constructor(e){this.path=e}static fromPath(e){return new je(Mt.fromString(e))}static fromName(e){return new je(Mt.fromString(e).popFirst(5))}static empty(){return new je(Mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return Mt.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new je(new Mt(e.slice()))}}function N2(r,e){const i=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=Pe.fromTimestamp(s===1e9?new Yt(i+1,0):new Yt(i,s));return new ma(l,je.empty(),e)}function I2(r){return new ma(r.readTime,r.key,-1)}class ma{constructor(e,i,s){this.readTime=e,this.documentKey=i,this.largestBatchId=s}static min(){return new ma(Pe.min(),je.empty(),-1)}static max(){return new ma(Pe.max(),je.empty(),-1)}}function D2(r,e){let i=r.readTime.compareTo(e.readTime);return i!==0?i:(i=je.comparator(r.documentKey,e.documentKey),i!==0?i:at(r.largestBatchId,e.largestBatchId))}/**
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
 */const k2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Bl(r){if(r.code!==ce.FAILED_PRECONDITION||r.message!==k2)throw r;Se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class oe{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(e){return this.next(void 0,e)}next(e,i){return this.callbackAttached&&Ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(e,this.result):new oe(((s,l)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,l)},this.catchCallback=c=>{this.wrapFailure(i,c).next(s,l)}}))}toPromise(){return new Promise(((e,i)=>{this.next(e,i)}))}wrapUserFunction(e){try{const i=e();return i instanceof oe?i:oe.resolve(i)}catch(i){return oe.reject(i)}}wrapSuccess(e,i){return e?this.wrapUserFunction((()=>e(i))):oe.resolve(i)}wrapFailure(e,i){return e?this.wrapUserFunction((()=>e(i))):oe.reject(i)}static resolve(e){return new oe(((i,s)=>{i(e)}))}static reject(e){return new oe(((i,s)=>{s(e)}))}static waitFor(e){return new oe(((i,s)=>{let l=0,c=0,h=!1;e.forEach((p=>{++l,p.next((()=>{++c,h&&c===l&&i()}),(y=>s(y)))})),h=!0,c===l&&i()}))}static or(e){let i=oe.resolve(!1);for(const s of e)i=i.next((l=>l?oe.resolve(l):s()));return i}static forEach(e,i){const s=[];return e.forEach(((l,c)=>{s.push(i.call(this,l,c))})),this.waitFor(s)}static mapArray(e,i){return new oe(((s,l)=>{const c=e.length,h=new Array(c);let p=0;for(let y=0;y<c;y++){const _=y;i(e[_]).next((T=>{h[_]=T,++p,p===c&&s(h)}),(T=>l(T)))}}))}static doWhile(e,i){return new oe(((s,l)=>{const c=()=>{e()===!0?i().next((()=>{c()}),l):s()};c()}))}}function j2(r){const e=r.match(/Android ([\d.]+)/i),i=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Hl(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Em{constructor(e,i){this.previousValue=e,i&&(i.sequenceNumberHandler=s=>this.ie(s),this.se=s=>i.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Em.oe=-1;function id(r){return r==null}function Fu(r){return r===0&&1/r==-1/0}function M2(r){return typeof r=="number"&&Number.isInteger(r)&&!Fu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function c0(r){let e=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&e++;return e}function oo(r,e){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&e(i,r[i])}function nb(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Nt{constructor(e,i){this.comparator=e,this.root=i||on.EMPTY}insert(e,i){return new Nt(this.comparator,this.root.insert(e,i,this.comparator).copy(null,null,on.BLACK,null,null))}remove(e){return new Nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,on.BLACK,null,null))}get(e){let i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return i.value;s<0?i=i.left:s>0&&(i=i.right)}return null}indexOf(e){let i=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(e,s.key);if(l===0)return i+s.left.size;l<0?s=s.left:(i+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((i,s)=>(e(i,s),!1)))}toString(){const e=[];return this.inorderTraversal(((i,s)=>(e.push(`${i}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bu(this.root,e,this.comparator,!0)}}class bu{constructor(e,i,s,l){this.isReverse=l,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=i?s(e.key,i):1,i&&l&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const i={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class on{constructor(e,i,s,l,c){this.key=e,this.value=i,this.color=s??on.RED,this.left=l??on.EMPTY,this.right=c??on.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,i,s,l,c){return new on(e??this.key,i??this.value,s??this.color,l??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,s){let l=this;const c=s(e,l.key);return l=c<0?l.copy(null,null,null,l.left.insert(e,i,s),null):c===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(e,i,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return on.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,i){let s,l=this;if(i(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(e,l.key)===0){if(l.right.isEmpty())return on.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,on.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,on.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ve();const e=this.left.check();if(e!==this.right.check())throw Ve();return e+(this.isRed()?0:1)}}on.EMPTY=null,on.RED=!0,on.BLACK=!1;on.EMPTY=new class{constructor(){this.size=0}get key(){throw Ve()}get value(){throw Ve()}get color(){throw Ve()}get left(){throw Ve()}get right(){throw Ve()}copy(e,i,s,l,c){return this}insert(e,i,s){return new on(e,i)}remove(e,i){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class cn{constructor(e){this.comparator=e,this.data=new Nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((i,s)=>(e(i),!1)))}forEachInRange(e,i){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,e[1])>=0)return;i(l.key)}}forEachWhile(e,i){let s;for(s=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const i=this.data.getIteratorFrom(e);return i.hasNext()?i.getNext().key:null}getIterator(){return new u0(this.data.getIterator())}getIteratorFrom(e){return new u0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let i=this;return i.size<e.size&&(i=e,e=this),e.forEach((s=>{i=i.add(s)})),i}isEqual(e){if(!(e instanceof cn)||this.size!==e.size)return!1;const i=this.data.getIterator(),s=e.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=s.getNext().key;if(this.comparator(l,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((i=>{e.push(i)})),e}toString(){const e=[];return this.forEach((i=>e.push(i))),"SortedSet("+e.toString()+")"}copy(e){const i=new cn(this.comparator);return i.data=e,i}}class u0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fi{constructor(e){this.fields=e,e.sort(ln.comparator)}static empty(){return new fi([])}unionWith(e){let i=new cn(ln.comparator);for(const s of this.fields)i=i.add(s);for(const s of e)i=i.add(s);return new fi(i.toArray())}covers(e){for(const i of this.fields)if(i.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,((i,s)=>i.isEqual(s)))}}/**
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
 */class ib extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class un{constructor(e){this.binaryString=e}static fromBase64String(e){const i=(function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new ib("Invalid base64 string: "+c):c}})(e);return new un(i)}static fromUint8Array(e){const i=(function(l){let c="";for(let h=0;h<l.length;++h)c+=String.fromCharCode(l[h]);return c})(e);return new un(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const s=new Uint8Array(i.length);for(let l=0;l<i.length;l++)s[l]=i.charCodeAt(l);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return at(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}un.EMPTY_BYTE_STRING=new un("");const V2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pa(r){if(ft(!!r),typeof r=="string"){let e=0;const i=V2.exec(r);if(ft(!!i),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),e=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pt(r.seconds),nanos:Pt(r.nanos)}}function Pt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function $a(r){return typeof r=="string"?un.fromBase64String(r):un.fromUint8Array(r)}/**
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
 */function Tm(r){var e,i;return((i=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||i===void 0?void 0:i.stringValue)==="server_timestamp"}function Sm(r){const e=r.mapValue.fields.__previous_value__;return Tm(e)?Sm(e):e}function Cl(r){const e=pa(r.mapValue.fields.__local_write_time__.timestampValue);return new Yt(e.seconds,e.nanos)}/**
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
 */class L2{constructor(e,i,s,l,c,h,p,y,_){this.databaseId=e,this.appId=i,this.persistenceKey=s,this.host=l,this.ssl=c,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=y,this.useFetchStreams=_}}class Nl{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new Nl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const xu={mapValue:{}};function Xa(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Tm(r)?4:P2(r)?9007199254740991:z2(r)?10:11:Ve()}function ki(r,e){if(r===e)return!0;const i=Xa(r);if(i!==Xa(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Cl(r).isEqual(Cl(e));case 3:return(function(l,c){if(typeof l.timestampValue=="string"&&typeof c.timestampValue=="string"&&l.timestampValue.length===c.timestampValue.length)return l.timestampValue===c.timestampValue;const h=pa(l.timestampValue),p=pa(c.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(l,c){return $a(l.bytesValue).isEqual($a(c.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(l,c){return Pt(l.geoPointValue.latitude)===Pt(c.geoPointValue.latitude)&&Pt(l.geoPointValue.longitude)===Pt(c.geoPointValue.longitude)})(r,e);case 2:return(function(l,c){if("integerValue"in l&&"integerValue"in c)return Pt(l.integerValue)===Pt(c.integerValue);if("doubleValue"in l&&"doubleValue"in c){const h=Pt(l.doubleValue),p=Pt(c.doubleValue);return h===p?Fu(h)===Fu(p):isNaN(h)&&isNaN(p)}return!1})(r,e);case 9:return Ws(r.arrayValue.values||[],e.arrayValue.values||[],ki);case 10:case 11:return(function(l,c){const h=l.mapValue.fields||{},p=c.mapValue.fields||{};if(c0(h)!==c0(p))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(p[y]===void 0||!ki(h[y],p[y])))return!1;return!0})(r,e);default:return Ve()}}function Il(r,e){return(r.values||[]).find((i=>ki(i,e)))!==void 0}function Js(r,e){if(r===e)return 0;const i=Xa(r),s=Xa(e);if(i!==s)return at(i,s);switch(i){case 0:case 9007199254740991:return 0;case 1:return at(r.booleanValue,e.booleanValue);case 2:return(function(c,h){const p=Pt(c.integerValue||c.doubleValue),y=Pt(h.integerValue||h.doubleValue);return p<y?-1:p>y?1:p===y?0:isNaN(p)?isNaN(y)?0:-1:1})(r,e);case 3:return d0(r.timestampValue,e.timestampValue);case 4:return d0(Cl(r),Cl(e));case 5:return at(r.stringValue,e.stringValue);case 6:return(function(c,h){const p=$a(c),y=$a(h);return p.compareTo(y)})(r.bytesValue,e.bytesValue);case 7:return(function(c,h){const p=c.split("/"),y=h.split("/");for(let _=0;_<p.length&&_<y.length;_++){const T=at(p[_],y[_]);if(T!==0)return T}return at(p.length,y.length)})(r.referenceValue,e.referenceValue);case 8:return(function(c,h){const p=at(Pt(c.latitude),Pt(h.latitude));return p!==0?p:at(Pt(c.longitude),Pt(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return h0(r.arrayValue,e.arrayValue);case 10:return(function(c,h){var p,y,_,T;const N=c.fields||{},z=h.fields||{},G=(p=N.value)===null||p===void 0?void 0:p.arrayValue,D=(y=z.value)===null||y===void 0?void 0:y.arrayValue,J=at(((_=G==null?void 0:G.values)===null||_===void 0?void 0:_.length)||0,((T=D==null?void 0:D.values)===null||T===void 0?void 0:T.length)||0);return J!==0?J:h0(G,D)})(r.mapValue,e.mapValue);case 11:return(function(c,h){if(c===xu.mapValue&&h===xu.mapValue)return 0;if(c===xu.mapValue)return 1;if(h===xu.mapValue)return-1;const p=c.fields||{},y=Object.keys(p),_=h.fields||{},T=Object.keys(_);y.sort(),T.sort();for(let N=0;N<y.length&&N<T.length;++N){const z=at(y[N],T[N]);if(z!==0)return z;const G=Js(p[y[N]],_[T[N]]);if(G!==0)return G}return at(y.length,T.length)})(r.mapValue,e.mapValue);default:throw Ve()}}function d0(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return at(r,e);const i=pa(r),s=pa(e),l=at(i.seconds,s.seconds);return l!==0?l:at(i.nanos,s.nanos)}function h0(r,e){const i=r.values||[],s=e.values||[];for(let l=0;l<i.length&&l<s.length;++l){const c=Js(i[l],s[l]);if(c)return c}return at(i.length,s.length)}function Zs(r){return Kf(r)}function Kf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(i){const s=pa(i);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(i){return $a(i).toBase64()})(r.bytesValue):"referenceValue"in r?(function(i){return je.fromName(i).toString()})(r.referenceValue):"geoPointValue"in r?(function(i){return`geo(${i.latitude},${i.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(i){let s="[",l=!0;for(const c of i.values||[])l?l=!1:s+=",",s+=Kf(c);return s+"]"})(r.arrayValue):"mapValue"in r?(function(i){const s=Object.keys(i.fields||{}).sort();let l="{",c=!0;for(const h of s)c?c=!1:l+=",",l+=`${h}:${Kf(i.fields[h])}`;return l+"}"})(r.mapValue):Ve()}function Qf(r){return!!r&&"integerValue"in r}function wm(r){return!!r&&"arrayValue"in r}function f0(r){return!!r&&"nullValue"in r}function m0(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Cu(r){return!!r&&"mapValue"in r}function z2(r){var e,i;return((i=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||i===void 0?void 0:i.stringValue)==="__vector__"}function bl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return oo(r.mapValue.fields,((i,s)=>e.mapValue.fields[i]=bl(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=bl(r.arrayValue.values[i]);return e}return Object.assign({},r)}function P2(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ai{constructor(e){this.value=e}static empty(){return new ai({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let i=this.value;for(let s=0;s<e.length-1;++s)if(i=(i.mapValue.fields||{})[e.get(s)],!Cu(i))return null;return i=(i.mapValue.fields||{})[e.lastSegment()],i||null}}set(e,i){this.getFieldsMap(e.popLast())[e.lastSegment()]=bl(i)}setAll(e){let i=ln.emptyPath(),s={},l=[];e.forEach(((h,p)=>{if(!i.isImmediateParentOf(p)){const y=this.getFieldsMap(i);this.applyChanges(y,s,l),s={},l=[],i=p.popLast()}h?s[p.lastSegment()]=bl(h):l.push(p.lastSegment())}));const c=this.getFieldsMap(i);this.applyChanges(c,s,l)}delete(e){const i=this.field(e.popLast());Cu(i)&&i.mapValue.fields&&delete i.mapValue.fields[e.lastSegment()]}isEqual(e){return ki(this.value,e.value)}getFieldsMap(e){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let s=0;s<e.length;++s){let l=i.mapValue.fields[e.get(s)];Cu(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[e.get(s)]=l),i=l}return i.mapValue.fields}applyChanges(e,i,s){oo(i,((l,c)=>e[l]=c));for(const l of s)delete e[l]}clone(){return new ai(bl(this.value))}}function rb(r){const e=[];return oo(r.fields,((i,s)=>{const l=new ln([i]);if(Cu(s)){const c=rb(s.mapValue).fields;if(c.length===0)e.push(l);else for(const h of c)e.push(l.child(h))}else e.push(l)})),new fi(e)}/**
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
 */class vn{constructor(e,i,s,l,c,h,p){this.key=e,this.documentType=i,this.version=s,this.readTime=l,this.createTime=c,this.data=h,this.documentState=p}static newInvalidDocument(e){return new vn(e,0,Pe.min(),Pe.min(),Pe.min(),ai.empty(),0)}static newFoundDocument(e,i,s,l){return new vn(e,1,i,Pe.min(),s,l,0)}static newNoDocument(e,i){return new vn(e,2,i,Pe.min(),Pe.min(),ai.empty(),0)}static newUnknownDocument(e,i){return new vn(e,3,i,Pe.min(),Pe.min(),ai.empty(),2)}convertToFoundDocument(e,i){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ai.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ai.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qu{constructor(e,i){this.position=e,this.inclusive=i}}function p0(r,e,i){let s=0;for(let l=0;l<r.position.length;l++){const c=e[l],h=r.position[l];if(c.field.isKeyField()?s=je.comparator(je.fromName(h.referenceValue),i.key):s=Js(h,i.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function g0(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!ki(r.position[i],e.position[i]))return!1;return!0}/**
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
 */class Gu{constructor(e,i="asc"){this.field=e,this.dir=i}}function U2(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class ab{}class Qt extends ab{constructor(e,i,s){super(),this.field=e,this.op=i,this.value=s}static create(e,i,s){return e.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(e,i,s):new H2(e,i,s):i==="array-contains"?new G2(e,s):i==="in"?new K2(e,s):i==="not-in"?new Q2(e,s):i==="array-contains-any"?new Y2(e,s):new Qt(e,i,s)}static createKeyFieldInFilter(e,i,s){return i==="in"?new F2(e,s):new q2(e,s)}matches(e){const i=e.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(Js(i,this.value)):i!==null&&Xa(this.value)===Xa(i)&&this.matchesComparison(Js(i,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Oi extends ab{constructor(e,i){super(),this.filters=e,this.op=i,this.ae=null}static create(e,i){return new Oi(e,i)}matches(e){return sb(this)?this.filters.find((i=>!i.matches(e)))===void 0:this.filters.find((i=>i.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,i)=>e.concat(i.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function sb(r){return r.op==="and"}function ob(r){return B2(r)&&sb(r)}function B2(r){for(const e of r.filters)if(e instanceof Oi)return!1;return!0}function Yf(r){if(r instanceof Qt)return r.field.canonicalString()+r.op.toString()+Zs(r.value);if(ob(r))return r.filters.map((e=>Yf(e))).join(",");{const e=r.filters.map((i=>Yf(i))).join(",");return`${r.op}(${e})`}}function lb(r,e){return r instanceof Qt?(function(s,l){return l instanceof Qt&&s.op===l.op&&s.field.isEqual(l.field)&&ki(s.value,l.value)})(r,e):r instanceof Oi?(function(s,l){return l instanceof Oi&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce(((c,h,p)=>c&&lb(h,l.filters[p])),!0):!1})(r,e):void Ve()}function cb(r){return r instanceof Qt?(function(i){return`${i.field.canonicalString()} ${i.op} ${Zs(i.value)}`})(r):r instanceof Oi?(function(i){return i.op.toString()+" {"+i.getFilters().map(cb).join(" ,")+"}"})(r):"Filter"}class H2 extends Qt{constructor(e,i,s){super(e,i,s),this.key=je.fromName(s.referenceValue)}matches(e){const i=je.comparator(e.key,this.key);return this.matchesComparison(i)}}class F2 extends Qt{constructor(e,i){super(e,"in",i),this.keys=ub("in",i)}matches(e){return this.keys.some((i=>i.isEqual(e.key)))}}class q2 extends Qt{constructor(e,i){super(e,"not-in",i),this.keys=ub("not-in",i)}matches(e){return!this.keys.some((i=>i.isEqual(e.key)))}}function ub(r,e){var i;return(((i=e.arrayValue)===null||i===void 0?void 0:i.values)||[]).map((s=>je.fromName(s.referenceValue)))}class G2 extends Qt{constructor(e,i){super(e,"array-contains",i)}matches(e){const i=e.data.field(this.field);return wm(i)&&Il(i.arrayValue,this.value)}}class K2 extends Qt{constructor(e,i){super(e,"in",i)}matches(e){const i=e.data.field(this.field);return i!==null&&Il(this.value.arrayValue,i)}}class Q2 extends Qt{constructor(e,i){super(e,"not-in",i)}matches(e){if(Il(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=e.data.field(this.field);return i!==null&&!Il(this.value.arrayValue,i)}}class Y2 extends Qt{constructor(e,i){super(e,"array-contains-any",i)}matches(e){const i=e.data.field(this.field);return!(!wm(i)||!i.arrayValue.values)&&i.arrayValue.values.some((s=>Il(this.value.arrayValue,s)))}}/**
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
 */class $2{constructor(e,i=null,s=[],l=[],c=null,h=null,p=null){this.path=e,this.collectionGroup=i,this.orderBy=s,this.filters=l,this.limit=c,this.startAt=h,this.endAt=p,this.ue=null}}function y0(r,e=null,i=[],s=[],l=null,c=null,h=null){return new $2(r,e,i,s,l,c,h)}function Am(r){const e=Ue(r);if(e.ue===null){let i=e.path.canonicalString();e.collectionGroup!==null&&(i+="|cg:"+e.collectionGroup),i+="|f:",i+=e.filters.map((s=>Yf(s))).join(","),i+="|ob:",i+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),id(e.limit)||(i+="|l:",i+=e.limit),e.startAt&&(i+="|lb:",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((s=>Zs(s))).join(",")),e.endAt&&(i+="|ub:",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((s=>Zs(s))).join(",")),e.ue=i}return e.ue}function Rm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!U2(r.orderBy[i],e.orderBy[i]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!lb(r.filters[i],e.filters[i]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!g0(r.startAt,e.startAt)&&g0(r.endAt,e.endAt)}function $f(r){return je.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class rd{constructor(e,i=null,s=[],l=[],c=null,h="F",p=null,y=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=h,this.startAt=p,this.endAt=y,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function X2(r,e,i,s,l,c,h,p){return new rd(r,e,i,s,l,c,h,p)}function ad(r){return new rd(r)}function v0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function W2(r){return r.collectionGroup!==null}function xl(r){const e=Ue(r);if(e.ce===null){e.ce=[];const i=new Set;for(const c of e.explicitOrderBy)e.ce.push(c),i.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new cn(ln.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(e).forEach((c=>{i.has(c.canonicalString())||c.isKeyField()||e.ce.push(new Gu(c,s))})),i.has(ln.keyField().canonicalString())||e.ce.push(new Gu(ln.keyField(),s))}return e.ce}function Ni(r){const e=Ue(r);return e.le||(e.le=J2(e,xl(r))),e.le}function J2(r,e){if(r.limitType==="F")return y0(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((l=>{const c=l.dir==="desc"?"asc":"desc";return new Gu(l.field,c)}));const i=r.endAt?new qu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new qu(r.startAt.position,r.startAt.inclusive):null;return y0(r.path,r.collectionGroup,e,r.filters,r.limit,i,s)}}function Xf(r,e,i){return new rd(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,i,r.startAt,r.endAt)}function sd(r,e){return Rm(Ni(r),Ni(e))&&r.limitType===e.limitType}function db(r){return`${Am(Ni(r))}|lt:${r.limitType}`}function Ps(r){return`Query(target=${(function(i){let s=i.path.canonicalString();return i.collectionGroup!==null&&(s+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(s+=`, filters: [${i.filters.map((l=>cb(l))).join(", ")}]`),id(i.limit)||(s+=", limit: "+i.limit),i.orderBy.length>0&&(s+=`, orderBy: [${i.orderBy.map((l=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(l))).join(", ")}]`),i.startAt&&(s+=", startAt: ",s+=i.startAt.inclusive?"b:":"a:",s+=i.startAt.position.map((l=>Zs(l))).join(",")),i.endAt&&(s+=", endAt: ",s+=i.endAt.inclusive?"a:":"b:",s+=i.endAt.position.map((l=>Zs(l))).join(",")),`Target(${s})`})(Ni(r))}; limitType=${r.limitType})`}function od(r,e){return e.isFoundDocument()&&(function(s,l){const c=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):je.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(r,e)&&(function(s,l){for(const c of xl(s))if(!c.field.isKeyField()&&l.data.field(c.field)===null)return!1;return!0})(r,e)&&(function(s,l){for(const c of s.filters)if(!c.matches(l))return!1;return!0})(r,e)&&(function(s,l){return!(s.startAt&&!(function(h,p,y){const _=p0(h,p,y);return h.inclusive?_<=0:_<0})(s.startAt,xl(s),l)||s.endAt&&!(function(h,p,y){const _=p0(h,p,y);return h.inclusive?_>=0:_>0})(s.endAt,xl(s),l))})(r,e)}function Z2(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function hb(r){return(e,i)=>{let s=!1;for(const l of xl(r)){const c=eA(l,e,i);if(c!==0)return c;s=s||l.field.isKeyField()}return 0}}function eA(r,e,i){const s=r.field.isKeyField()?je.comparator(e.key,i.key):(function(c,h,p){const y=h.data.field(c),_=p.data.field(c);return y!==null&&_!==null?Js(y,_):Ve()})(r.field,e,i);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ve()}}/**
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
 */class lo{constructor(e,i){this.mapKeyFn=e,this.equalsFn=i,this.inner={},this.innerSize=0}get(e){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(const[l,c]of s)if(this.equalsFn(l,e))return c}}has(e){return this.get(e)!==void 0}set(e,i){const s=this.mapKeyFn(e),l=this.inner[s];if(l===void 0)return this.inner[s]=[[e,i]],void this.innerSize++;for(let c=0;c<l.length;c++)if(this.equalsFn(l[c][0],e))return void(l[c]=[e,i]);l.push([e,i]),this.innerSize++}delete(e){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],e))return s.length===1?delete this.inner[i]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(e){oo(this.inner,((i,s)=>{for(const[l,c]of s)e(l,c)}))}isEmpty(){return nb(this.inner)}size(){return this.innerSize}}/**
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
 */const tA=new Nt(je.comparator);function mr(){return tA}const fb=new Nt(je.comparator);function gl(...r){let e=fb;for(const i of r)e=e.insert(i.key,i);return e}function mb(r){let e=fb;return r.forEach(((i,s)=>e=e.insert(i,s.overlayedDocument))),e}function Ga(){return El()}function pb(){return El()}function El(){return new lo((r=>r.toString()),((r,e)=>r.isEqual(e)))}const nA=new Nt(je.comparator),iA=new cn(je.comparator);function We(...r){let e=iA;for(const i of r)e=e.add(i);return e}const rA=new cn(at);function aA(){return rA}/**
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
 */function Cm(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fu(e)?"-0":e}}function gb(r){return{integerValue:""+r}}function sA(r,e){return M2(e)?gb(e):Cm(r,e)}/**
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
 */class ld{constructor(){this._=void 0}}function oA(r,e,i){return r instanceof Ku?(function(l,c){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return c&&Tm(c)&&(c=Sm(c)),c&&(h.fields.__previous_value__=c),{mapValue:h}})(i,e):r instanceof Dl?vb(r,e):r instanceof kl?_b(r,e):(function(l,c){const h=yb(l,c),p=_0(h)+_0(l.Pe);return Qf(h)&&Qf(l.Pe)?gb(p):Cm(l.serializer,p)})(r,e)}function lA(r,e,i){return r instanceof Dl?vb(r,e):r instanceof kl?_b(r,e):i}function yb(r,e){return r instanceof Qu?(function(s){return Qf(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class Ku extends ld{}class Dl extends ld{constructor(e){super(),this.elements=e}}function vb(r,e){const i=bb(e);for(const s of r.elements)i.some((l=>ki(l,s)))||i.push(s);return{arrayValue:{values:i}}}class kl extends ld{constructor(e){super(),this.elements=e}}function _b(r,e){let i=bb(e);for(const s of r.elements)i=i.filter((l=>!ki(l,s)));return{arrayValue:{values:i}}}class Qu extends ld{constructor(e,i){super(),this.serializer=e,this.Pe=i}}function _0(r){return Pt(r.integerValue||r.doubleValue)}function bb(r){return wm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function cA(r,e){return r.field.isEqual(e.field)&&(function(s,l){return s instanceof Dl&&l instanceof Dl||s instanceof kl&&l instanceof kl?Ws(s.elements,l.elements,ki):s instanceof Qu&&l instanceof Qu?ki(s.Pe,l.Pe):s instanceof Ku&&l instanceof Ku})(r.transform,e.transform)}class uA{constructor(e,i){this.version=e,this.transformResults=i}}class ur{constructor(e,i){this.updateTime=e,this.exists=i}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class cd{}function xb(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Tb(r.key,ur.none()):new Fl(r.key,r.data,ur.none());{const i=r.data,s=ai.empty();let l=new cn(ln.comparator);for(let c of e.fields)if(!l.has(c)){let h=i.field(c);h===null&&c.length>1&&(c=c.popLast(),h=i.field(c)),h===null?s.delete(c):s.set(c,h),l=l.add(c)}return new Wa(r.key,s,new fi(l.toArray()),ur.none())}}function dA(r,e,i){r instanceof Fl?(function(l,c,h){const p=l.value.clone(),y=x0(l.fieldTransforms,c,h.transformResults);p.setAll(y),c.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(r,e,i):r instanceof Wa?(function(l,c,h){if(!Nu(l.precondition,c))return void c.convertToUnknownDocument(h.version);const p=x0(l.fieldTransforms,c,h.transformResults),y=c.data;y.setAll(Eb(l)),y.setAll(p),c.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(r,e,i):(function(l,c,h){c.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,i)}function Tl(r,e,i,s){return r instanceof Fl?(function(c,h,p,y){if(!Nu(c.precondition,h))return p;const _=c.value.clone(),T=E0(c.fieldTransforms,y,h);return _.setAll(T),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,i,s):r instanceof Wa?(function(c,h,p,y){if(!Nu(c.precondition,h))return p;const _=E0(c.fieldTransforms,y,h),T=h.data;return T.setAll(Eb(c)),T.setAll(_),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((N=>N.field)))})(r,e,i,s):(function(c,h,p){return Nu(c.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p})(r,e,i)}function hA(r,e){let i=null;for(const s of r.fieldTransforms){const l=e.data.field(s.field),c=yb(s.transform,l||null);c!=null&&(i===null&&(i=ai.empty()),i.set(s.field,c))}return i||null}function b0(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&Ws(s,l,((c,h)=>cA(c,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Fl extends cd{constructor(e,i,s,l=[]){super(),this.key=e,this.value=i,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Wa extends cd{constructor(e,i,s,l,c=[]){super(),this.key=e,this.data=i,this.fieldMask=s,this.precondition=l,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function Eb(r){const e=new Map;return r.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const s=r.data.field(i);e.set(i,s)}})),e}function x0(r,e,i){const s=new Map;ft(r.length===i.length);for(let l=0;l<i.length;l++){const c=r[l],h=c.transform,p=e.data.field(c.field);s.set(c.field,lA(h,p,i[l]))}return s}function E0(r,e,i){const s=new Map;for(const l of r){const c=l.transform,h=i.data.field(l.field);s.set(l.field,oA(c,h,e))}return s}class Tb extends cd{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fA extends cd{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mA{constructor(e,i,s,l){this.batchId=e,this.localWriteTime=i,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(e,i){const s=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const c=this.mutations[l];c.key.isEqual(e.key)&&dA(c,e,s[l])}}applyToLocalView(e,i){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(i=Tl(s,e,i,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(i=Tl(s,e,i,this.localWriteTime));return i}applyToLocalDocumentSet(e,i){const s=pb();return this.mutations.forEach((l=>{const c=e.get(l.key),h=c.overlayedDocument;let p=this.applyToLocalView(h,c.mutatedFields);p=i.has(l.key)?null:p;const y=xb(h,p);y!==null&&s.set(l.key,y),h.isValidDocument()||h.convertToNoDocument(Pe.min())})),s}keys(){return this.mutations.reduce(((e,i)=>e.add(i.key)),We())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,((i,s)=>b0(i,s)))&&Ws(this.baseMutations,e.baseMutations,((i,s)=>b0(i,s)))}}class Nm{constructor(e,i,s,l){this.batch=e,this.commitVersion=i,this.mutationResults=s,this.docVersions=l}static from(e,i,s){ft(e.mutations.length===s.length);let l=(function(){return nA})();const c=e.mutations;for(let h=0;h<c.length;h++)l=l.insert(c[h].key,s[h].version);return new Nm(e,i,s,l)}}/**
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
 */class pA{constructor(e,i){this.largestBatchId=e,this.mutation=i}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gA{constructor(e,i){this.count=e,this.unchangedNames=i}}/**
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
 */var Gt,Ze;function yA(r){switch(r){default:return Ve();case ce.CANCELLED:case ce.UNKNOWN:case ce.DEADLINE_EXCEEDED:case ce.RESOURCE_EXHAUSTED:case ce.INTERNAL:case ce.UNAVAILABLE:case ce.UNAUTHENTICATED:return!1;case ce.INVALID_ARGUMENT:case ce.NOT_FOUND:case ce.ALREADY_EXISTS:case ce.PERMISSION_DENIED:case ce.FAILED_PRECONDITION:case ce.ABORTED:case ce.OUT_OF_RANGE:case ce.UNIMPLEMENTED:case ce.DATA_LOSS:return!0}}function Sb(r){if(r===void 0)return fr("GRPC error has no .code"),ce.UNKNOWN;switch(r){case Gt.OK:return ce.OK;case Gt.CANCELLED:return ce.CANCELLED;case Gt.UNKNOWN:return ce.UNKNOWN;case Gt.DEADLINE_EXCEEDED:return ce.DEADLINE_EXCEEDED;case Gt.RESOURCE_EXHAUSTED:return ce.RESOURCE_EXHAUSTED;case Gt.INTERNAL:return ce.INTERNAL;case Gt.UNAVAILABLE:return ce.UNAVAILABLE;case Gt.UNAUTHENTICATED:return ce.UNAUTHENTICATED;case Gt.INVALID_ARGUMENT:return ce.INVALID_ARGUMENT;case Gt.NOT_FOUND:return ce.NOT_FOUND;case Gt.ALREADY_EXISTS:return ce.ALREADY_EXISTS;case Gt.PERMISSION_DENIED:return ce.PERMISSION_DENIED;case Gt.FAILED_PRECONDITION:return ce.FAILED_PRECONDITION;case Gt.ABORTED:return ce.ABORTED;case Gt.OUT_OF_RANGE:return ce.OUT_OF_RANGE;case Gt.UNIMPLEMENTED:return ce.UNIMPLEMENTED;case Gt.DATA_LOSS:return ce.DATA_LOSS;default:return Ve()}}(Ze=Gt||(Gt={}))[Ze.OK=0]="OK",Ze[Ze.CANCELLED=1]="CANCELLED",Ze[Ze.UNKNOWN=2]="UNKNOWN",Ze[Ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ze[Ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ze[Ze.NOT_FOUND=5]="NOT_FOUND",Ze[Ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ze[Ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ze[Ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ze[Ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ze[Ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ze[Ze.ABORTED=10]="ABORTED",Ze[Ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ze[Ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ze[Ze.INTERNAL=13]="INTERNAL",Ze[Ze.UNAVAILABLE=14]="UNAVAILABLE",Ze[Ze.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vA(){return new TextEncoder}/**
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
 */const _A=new Ka([4294967295,4294967295],0);function T0(r){const e=vA().encode(r),i=new Y_;return i.update(e),new Uint8Array(i.digest())}function S0(r){const e=new DataView(r.buffer),i=e.getUint32(0,!0),s=e.getUint32(4,!0),l=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new Ka([i,s],0),new Ka([l,c],0)]}class Im{constructor(e,i,s){if(this.bitmap=e,this.padding=i,this.hashCount=s,i<0||i>=8)throw new yl(`Invalid padding: ${i}`);if(s<0)throw new yl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new yl(`Invalid hash count: ${s}`);if(e.length===0&&i!==0)throw new yl(`Invalid padding when bitmap length is 0: ${i}`);this.Ie=8*e.length-i,this.Te=Ka.fromNumber(this.Ie)}Ee(e,i,s){let l=e.add(i.multiply(Ka.fromNumber(s)));return l.compare(_A)===1&&(l=new Ka([l.getBits(0),l.getBits(1)],0)),l.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const i=T0(e),[s,l]=S0(i);for(let c=0;c<this.hashCount;c++){const h=this.Ee(s,l,c);if(!this.de(h))return!1}return!0}static create(e,i,s){const l=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),h=new Im(c,l,i);return s.forEach((p=>h.insert(p))),h}insert(e){if(this.Ie===0)return;const i=T0(e),[s,l]=S0(i);for(let c=0;c<this.hashCount;c++){const h=this.Ee(s,l,c);this.Ae(h)}}Ae(e){const i=Math.floor(e/8),s=e%8;this.bitmap[i]|=1<<s}}class yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ud{constructor(e,i,s,l,c){this.snapshotVersion=e,this.targetChanges=i,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,i,s){const l=new Map;return l.set(e,ql.createSynthesizedTargetChangeForCurrentChange(e,i,s)),new ud(Pe.min(),l,new Nt(at),mr(),We())}}class ql{constructor(e,i,s,l,c){this.resumeToken=e,this.current=i,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,i,s){return new ql(s,i,We(),We(),We())}}/**
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
 */class Iu{constructor(e,i,s,l){this.Re=e,this.removedTargetIds=i,this.key=s,this.Ve=l}}class wb{constructor(e,i){this.targetId=e,this.me=i}}class Ab{constructor(e,i,s=un.EMPTY_BYTE_STRING,l=null){this.state=e,this.targetIds=i,this.resumeToken=s,this.cause=l}}class w0{constructor(){this.fe=0,this.ge=R0(),this.pe=un.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=We(),i=We(),s=We();return this.ge.forEach(((l,c)=>{switch(c){case 0:e=e.add(l);break;case 2:i=i.add(l);break;case 1:s=s.add(l);break;default:Ve()}})),new ql(this.pe,this.ye,e,i,s)}Ce(){this.we=!1,this.ge=R0()}Fe(e,i){this.we=!0,this.ge=this.ge.insert(e,i)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ft(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bA{constructor(e){this.Le=e,this.Be=new Map,this.ke=mr(),this.qe=A0(),this.Qe=new Nt(at)}Ke(e){for(const i of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(i,e.Ve):this.Ue(i,e.key,e.Ve);for(const i of e.removedTargetIds)this.Ue(i,e.key,e.Ve)}We(e){this.forEachTarget(e,(i=>{const s=this.Ge(i);switch(e.state){case 0:this.ze(i)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(i);break;case 3:this.ze(i)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(i)&&(this.je(i),s.De(e.resumeToken));break;default:Ve()}}))}forEachTarget(e,i){e.targetIds.length>0?e.targetIds.forEach(i):this.Be.forEach(((s,l)=>{this.ze(l)&&i(l)}))}He(e){const i=e.targetId,s=e.me.count,l=this.Je(i);if(l){const c=l.target;if($f(c))if(s===0){const h=new je(c.path);this.Ue(i,h,vn.newNoDocument(h,Pe.min()))}else ft(s===1);else{const h=this.Ye(i);if(h!==s){const p=this.Ze(e),y=p?this.Xe(p,e,h):1;if(y!==0){this.je(i);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(i,_)}}}}}Ze(e){const i=e.me.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:c=0}=i;let h,p;try{h=$a(s).toUint8Array()}catch(y){if(y instanceof ib)return Xs("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{p=new Im(h,l,c)}catch(y){return Xs(y instanceof yl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return p.Ie===0?null:p}Xe(e,i,s){return i.me.count===s-this.nt(e,i.targetId)?0:2}nt(e,i){const s=this.Le.getRemoteKeysForTarget(i);let l=0;return s.forEach((c=>{const h=this.Le.tt(),p=`projects/${h.projectId}/databases/${h.database}/documents/${c.path.canonicalString()}`;e.mightContain(p)||(this.Ue(i,c,null),l++)})),l}rt(e){const i=new Map;this.Be.forEach(((c,h)=>{const p=this.Je(h);if(p){if(c.current&&$f(p.target)){const y=new je(p.target.path);this.ke.get(y)!==null||this.it(h,y)||this.Ue(h,y,vn.newNoDocument(y,e))}c.be&&(i.set(h,c.ve()),c.Ce())}}));let s=We();this.qe.forEach(((c,h)=>{let p=!0;h.forEachWhile((y=>{const _=this.Je(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(c))})),this.ke.forEach(((c,h)=>h.setReadTime(e)));const l=new ud(e,i,this.Qe,this.ke,s);return this.ke=mr(),this.qe=A0(),this.Qe=new Nt(at),l}$e(e,i){if(!this.ze(e))return;const s=this.it(e,i.key)?2:0;this.Ge(e).Fe(i.key,s),this.ke=this.ke.insert(i.key,i),this.qe=this.qe.insert(i.key,this.st(i.key).add(e))}Ue(e,i,s){if(!this.ze(e))return;const l=this.Ge(e);this.it(e,i)?l.Fe(i,1):l.Me(i),this.qe=this.qe.insert(i,this.st(i).delete(e)),s&&(this.ke=this.ke.insert(i,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const i=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+i.addedDocuments.size-i.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let i=this.Be.get(e);return i||(i=new w0,this.Be.set(e,i)),i}st(e){let i=this.qe.get(e);return i||(i=new cn(at),this.qe=this.qe.insert(e,i)),i}ze(e){const i=this.Je(e)!==null;return i||Se("WatchChangeAggregator","Detected inactive target",e),i}Je(e){const i=this.Be.get(e);return i&&i.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new w0),this.Le.getRemoteKeysForTarget(e).forEach((i=>{this.Ue(e,i,null)}))}it(e,i){return this.Le.getRemoteKeysForTarget(e).has(i)}}function A0(){return new Nt(je.comparator)}function R0(){return new Nt(je.comparator)}const xA={asc:"ASCENDING",desc:"DESCENDING"},EA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TA={and:"AND",or:"OR"};class SA{constructor(e,i){this.databaseId=e,this.useProto3Json=i}}function Wf(r,e){return r.useProto3Json||id(e)?e:{value:e}}function Yu(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rb(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function wA(r,e){return Yu(r,e.toTimestamp())}function Ii(r){return ft(!!r),Pe.fromTimestamp((function(i){const s=pa(i);return new Yt(s.seconds,s.nanos)})(r))}function Dm(r,e){return Jf(r,e).canonicalString()}function Jf(r,e){const i=(function(l){return new Mt(["projects",l.projectId,"databases",l.database])})(r).child("documents");return e===void 0?i:i.child(e)}function Cb(r){const e=Mt.fromString(r);return ft(Ob(e)),e}function Zf(r,e){return Dm(r.databaseId,e.path)}function If(r,e){const i=Cb(e);if(i.get(1)!==r.databaseId.projectId)throw new De(ce.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new De(ce.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new je(Ib(i))}function Nb(r,e){return Dm(r.databaseId,e)}function AA(r){const e=Cb(r);return e.length===4?Mt.emptyPath():Ib(e)}function em(r){return new Mt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ib(r){return ft(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function C0(r,e,i){return{name:Zf(r,e),fields:i.value.mapValue.fields}}function RA(r,e){let i;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Ve()})(e.targetChange.targetChangeType||"NO_CHANGE"),l=e.targetChange.targetIds||[],c=(function(_,T){return _.useProto3Json?(ft(T===void 0||typeof T=="string"),un.fromBase64String(T||"")):(ft(T===void 0||T instanceof Buffer||T instanceof Uint8Array),un.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&(function(_){const T=_.code===void 0?ce.UNKNOWN:Sb(_.code);return new De(T,_.message||"")})(h);i=new Ab(s,l,c,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const l=If(r,s.document.name),c=Ii(s.document.updateTime),h=s.document.createTime?Ii(s.document.createTime):Pe.min(),p=new ai({mapValue:{fields:s.document.fields}}),y=vn.newFoundDocument(l,c,h,p),_=s.targetIds||[],T=s.removedTargetIds||[];i=new Iu(_,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const l=If(r,s.document),c=s.readTime?Ii(s.readTime):Pe.min(),h=vn.newNoDocument(l,c),p=s.removedTargetIds||[];i=new Iu([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const l=If(r,s.document),c=s.removedTargetIds||[];i=new Iu([],c,l,null)}else{if(!("filter"in e))return Ve();{e.filter;const s=e.filter;s.targetId;const{count:l=0,unchangedNames:c}=s,h=new gA(l,c),p=s.targetId;i=new wb(p,h)}}return i}function CA(r,e){let i;if(e instanceof Fl)i={update:C0(r,e.key,e.value)};else if(e instanceof Tb)i={delete:Zf(r,e.key)};else if(e instanceof Wa)i={update:C0(r,e.key,e.data),updateMask:LA(e.fieldMask)};else{if(!(e instanceof fA))return Ve();i={verify:Zf(r,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map((s=>(function(c,h){const p=h.transform;if(p instanceof Ku)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Dl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof kl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Qu)return{fieldPath:h.field.canonicalString(),increment:p.Pe};throw Ve()})(0,s)))),e.precondition.isNone||(i.currentDocument=(function(l,c){return c.updateTime!==void 0?{updateTime:wA(l,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Ve()})(r,e.precondition)),i}function NA(r,e){return r&&r.length>0?(ft(e!==void 0),r.map((i=>(function(l,c){let h=l.updateTime?Ii(l.updateTime):Ii(c);return h.isEqual(Pe.min())&&(h=Ii(c)),new uA(h,l.transformResults||[])})(i,e)))):[]}function IA(r,e){return{documents:[Nb(r,e.path)]}}function DA(r,e){const i={structuredQuery:{}},s=e.path;let l;e.collectionGroup!==null?(l=s,i.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(l=s.popLast(),i.structuredQuery.from=[{collectionId:s.lastSegment()}]),i.parent=Nb(r,l);const c=(function(_){if(_.length!==0)return kb(Oi.create(_,"and"))})(e.filters);c&&(i.structuredQuery.where=c);const h=(function(_){if(_.length!==0)return _.map((T=>(function(z){return{field:Us(z.field),direction:jA(z.dir)}})(T)))})(e.orderBy);h&&(i.structuredQuery.orderBy=h);const p=Wf(r,e.limit);return p!==null&&(i.structuredQuery.limit=p),e.startAt&&(i.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(i.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{_t:i,parent:l}}function kA(r){let e=AA(r.parent);const i=r.structuredQuery,s=i.from?i.from.length:0;let l=null;if(s>0){ft(s===1);const T=i.from[0];T.allDescendants?l=T.collectionId:e=e.child(T.collectionId)}let c=[];i.where&&(c=(function(N){const z=Db(N);return z instanceof Oi&&ob(z)?z.getFilters():[z]})(i.where));let h=[];i.orderBy&&(h=(function(N){return N.map((z=>(function(D){return new Gu(Bs(D.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(z)))})(i.orderBy));let p=null;i.limit&&(p=(function(N){let z;return z=typeof N=="object"?N.value:N,id(z)?null:z})(i.limit));let y=null;i.startAt&&(y=(function(N){const z=!!N.before,G=N.values||[];return new qu(G,z)})(i.startAt));let _=null;return i.endAt&&(_=(function(N){const z=!N.before,G=N.values||[];return new qu(G,z)})(i.endAt)),X2(e,l,h,c,p,"F",y,_)}function OA(r,e){const i=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ve()}})(e.purpose);return i==null?null:{"goog-listen-tags":i}}function Db(r){return r.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const s=Bs(i.unaryFilter.field);return Qt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=Bs(i.unaryFilter.field);return Qt.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Bs(i.unaryFilter.field);return Qt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Bs(i.unaryFilter.field);return Qt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ve()}})(r):r.fieldFilter!==void 0?(function(i){return Qt.create(Bs(i.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ve()}})(i.fieldFilter.op),i.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(i){return Oi.create(i.compositeFilter.filters.map((s=>Db(s))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Ve()}})(i.compositeFilter.op))})(r):Ve()}function jA(r){return xA[r]}function MA(r){return EA[r]}function VA(r){return TA[r]}function Us(r){return{fieldPath:r.canonicalString()}}function Bs(r){return ln.fromServerFormat(r.fieldPath)}function kb(r){return r instanceof Qt?(function(i){if(i.op==="=="){if(m0(i.value))return{unaryFilter:{field:Us(i.field),op:"IS_NAN"}};if(f0(i.value))return{unaryFilter:{field:Us(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(m0(i.value))return{unaryFilter:{field:Us(i.field),op:"IS_NOT_NAN"}};if(f0(i.value))return{unaryFilter:{field:Us(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(i.field),op:MA(i.op),value:i.value}}})(r):r instanceof Oi?(function(i){const s=i.getFilters().map((l=>kb(l)));return s.length===1?s[0]:{compositeFilter:{op:VA(i.op),filters:s}}})(r):Ve()}function LA(r){const e=[];return r.fields.forEach((i=>e.push(i.canonicalString()))),{fieldPaths:e}}function Ob(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class oa{constructor(e,i,s,l,c=Pe.min(),h=Pe.min(),p=un.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=i,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=y}withSequenceNumber(e){return new oa(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,i){return new oa(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new oa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new oa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zA{constructor(e){this.ct=e}}function PA(r){const e=kA({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Xf(e,e.limit,"L"):e}/**
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
 */class UA{constructor(){this.un=new BA}addToCollectionParentIndex(e,i){return this.un.add(i),oe.resolve()}getCollectionParents(e,i){return oe.resolve(this.un.getEntries(i))}addFieldIndex(e,i){return oe.resolve()}deleteFieldIndex(e,i){return oe.resolve()}deleteAllFieldIndexes(e){return oe.resolve()}createTargetIndexes(e,i){return oe.resolve()}getDocumentsMatchingTarget(e,i){return oe.resolve(null)}getIndexType(e,i){return oe.resolve(0)}getFieldIndexes(e,i){return oe.resolve([])}getNextCollectionGroupToUpdate(e){return oe.resolve(null)}getMinOffset(e,i){return oe.resolve(ma.min())}getMinOffsetFromCollectionGroup(e,i){return oe.resolve(ma.min())}updateCollectionGroup(e,i,s){return oe.resolve()}updateIndexEntries(e,i){return oe.resolve()}}class BA{constructor(){this.index={}}add(e){const i=e.lastSegment(),s=e.popLast(),l=this.index[i]||new cn(Mt.comparator),c=!l.has(s);return this.index[i]=l.add(s),c}has(e){const i=e.lastSegment(),s=e.popLast(),l=this.index[i];return l&&l.has(s)}getEntries(e){return(this.index[e]||new cn(Mt.comparator)).toArray()}}/**
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
 */class eo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new eo(0)}static kn(){return new eo(-1)}}/**
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
 */class HA{constructor(){this.changes=new lo((e=>e.toString()),((e,i)=>e.isEqual(i))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,i){this.assertNotApplied(),this.changes.set(e,vn.newInvalidDocument(e).setReadTime(i))}getEntry(e,i){this.assertNotApplied();const s=this.changes.get(i);return s!==void 0?oe.resolve(s):this.getFromCache(e,i)}getEntries(e,i){return this.getAllFromCache(e,i)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FA{constructor(e,i){this.overlayedDocument=e,this.mutatedFields=i}}/**
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
 */class qA{constructor(e,i,s,l){this.remoteDocumentCache=e,this.mutationQueue=i,this.documentOverlayCache=s,this.indexManager=l}getDocument(e,i){let s=null;return this.documentOverlayCache.getOverlay(e,i).next((l=>(s=l,this.remoteDocumentCache.getEntry(e,i)))).next((l=>(s!==null&&Tl(s.mutation,l,fi.empty(),Yt.now()),l)))}getDocuments(e,i){return this.remoteDocumentCache.getEntries(e,i).next((s=>this.getLocalViewOfDocuments(e,s,We()).next((()=>s))))}getLocalViewOfDocuments(e,i,s=We()){const l=Ga();return this.populateOverlays(e,l,i).next((()=>this.computeViews(e,i,l,s).next((c=>{let h=gl();return c.forEach(((p,y)=>{h=h.insert(p,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,i){const s=Ga();return this.populateOverlays(e,s,i).next((()=>this.computeViews(e,i,s,We())))}populateOverlays(e,i,s){const l=[];return s.forEach((c=>{i.has(c)||l.push(c)})),this.documentOverlayCache.getOverlays(e,l).next((c=>{c.forEach(((h,p)=>{i.set(h,p)}))}))}computeViews(e,i,s,l){let c=mr();const h=El(),p=(function(){return El()})();return i.forEach(((y,_)=>{const T=s.get(_.key);l.has(_.key)&&(T===void 0||T.mutation instanceof Wa)?c=c.insert(_.key,_):T!==void 0?(h.set(_.key,T.mutation.getFieldMask()),Tl(T.mutation,_,T.mutation.getFieldMask(),Yt.now())):h.set(_.key,fi.empty())})),this.recalculateAndSaveOverlays(e,c).next((y=>(y.forEach(((_,T)=>h.set(_,T))),i.forEach(((_,T)=>{var N;return p.set(_,new FA(T,(N=h.get(_))!==null&&N!==void 0?N:null))})),p)))}recalculateAndSaveOverlays(e,i){const s=El();let l=new Nt(((h,p)=>h-p)),c=We();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,i).next((h=>{for(const p of h)p.keys().forEach((y=>{const _=i.get(y);if(_===null)return;let T=s.get(y)||fi.empty();T=p.applyToLocalView(_,T),s.set(y,T);const N=(l.get(p.batchId)||We()).add(y);l=l.insert(p.batchId,N)}))})).next((()=>{const h=[],p=l.getReverseIterator();for(;p.hasNext();){const y=p.getNext(),_=y.key,T=y.value,N=pb();T.forEach((z=>{if(!c.has(z)){const G=xb(i.get(z),s.get(z));G!==null&&N.set(z,G),c=c.add(z)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,N))}return oe.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,i){return this.remoteDocumentCache.getEntries(e,i).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,i,s,l){return(function(h){return je.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(e,i.path):W2(i)?this.getDocumentsMatchingCollectionGroupQuery(e,i,s,l):this.getDocumentsMatchingCollectionQuery(e,i,s,l)}getNextDocuments(e,i,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,i,s,l).next((c=>{const h=l-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,i,s.largestBatchId,l-c.size):oe.resolve(Ga());let p=-1,y=c;return h.next((_=>oe.forEach(_,((T,N)=>(p<N.largestBatchId&&(p=N.largestBatchId),c.get(T)?oe.resolve():this.remoteDocumentCache.getEntry(e,T).next((z=>{y=y.insert(T,z)}))))).next((()=>this.populateOverlays(e,_,c))).next((()=>this.computeViews(e,y,_,We()))).next((T=>({batchId:p,changes:mb(T)})))))}))}getDocumentsMatchingDocumentQuery(e,i){return this.getDocument(e,new je(i)).next((s=>{let l=gl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l}))}getDocumentsMatchingCollectionGroupQuery(e,i,s,l){const c=i.collectionGroup;let h=gl();return this.indexManager.getCollectionParents(e,c).next((p=>oe.forEach(p,(y=>{const _=(function(N,z){return new rd(z,null,N.explicitOrderBy.slice(),N.filters.slice(),N.limit,N.limitType,N.startAt,N.endAt)})(i,y.child(c));return this.getDocumentsMatchingCollectionQuery(e,_,s,l).next((T=>{T.forEach(((N,z)=>{h=h.insert(N,z)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,i,s,l){let c;return this.documentOverlayCache.getOverlaysForCollection(e,i.path,s.largestBatchId).next((h=>(c=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,i,s,c,l)))).next((h=>{c.forEach(((y,_)=>{const T=_.getKey();h.get(T)===null&&(h=h.insert(T,vn.newInvalidDocument(T)))}));let p=gl();return h.forEach(((y,_)=>{const T=c.get(y);T!==void 0&&Tl(T.mutation,_,fi.empty(),Yt.now()),od(i,_)&&(p=p.insert(y,_))})),p}))}}/**
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
 */class GA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,i){return oe.resolve(this.hr.get(i))}saveBundleMetadata(e,i){return this.hr.set(i.id,(function(l){return{id:l.id,version:l.version,createTime:Ii(l.createTime)}})(i)),oe.resolve()}getNamedQuery(e,i){return oe.resolve(this.Pr.get(i))}saveNamedQuery(e,i){return this.Pr.set(i.name,(function(l){return{name:l.name,query:PA(l.bundledQuery),readTime:Ii(l.readTime)}})(i)),oe.resolve()}}/**
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
 */class KA{constructor(){this.overlays=new Nt(je.comparator),this.Ir=new Map}getOverlay(e,i){return oe.resolve(this.overlays.get(i))}getOverlays(e,i){const s=Ga();return oe.forEach(i,(l=>this.getOverlay(e,l).next((c=>{c!==null&&s.set(l,c)})))).next((()=>s))}saveOverlays(e,i,s){return s.forEach(((l,c)=>{this.ht(e,i,c)})),oe.resolve()}removeOverlaysForBatchId(e,i,s){const l=this.Ir.get(s);return l!==void 0&&(l.forEach((c=>this.overlays=this.overlays.remove(c))),this.Ir.delete(s)),oe.resolve()}getOverlaysForCollection(e,i,s){const l=Ga(),c=i.length+1,h=new je(i.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const y=p.getNext().value,_=y.getKey();if(!i.isPrefixOf(_.path))break;_.path.length===c&&y.largestBatchId>s&&l.set(y.getKey(),y)}return oe.resolve(l)}getOverlaysForCollectionGroup(e,i,s,l){let c=new Nt(((_,T)=>_-T));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===i&&_.largestBatchId>s){let T=c.get(_.largestBatchId);T===null&&(T=Ga(),c=c.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const p=Ga(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,T)=>p.set(_,T))),!(p.size()>=l)););return oe.resolve(p)}ht(e,i,s){const l=this.overlays.get(s.key);if(l!==null){const h=this.Ir.get(l.largestBatchId).delete(s.key);this.Ir.set(l.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new pA(i,s));let c=this.Ir.get(i);c===void 0&&(c=We(),this.Ir.set(i,c)),this.Ir.set(i,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.sessionToken=un.EMPTY_BYTE_STRING}getSessionToken(e){return oe.resolve(this.sessionToken)}setSessionToken(e,i){return this.sessionToken=i,oe.resolve()}}/**
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
 */class km{constructor(){this.Tr=new cn(Zt.Er),this.dr=new cn(Zt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,i){const s=new Zt(e,i);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,i){e.forEach((s=>this.addReference(s,i)))}removeReference(e,i){this.Vr(new Zt(e,i))}mr(e,i){e.forEach((s=>this.removeReference(s,i)))}gr(e){const i=new je(new Mt([])),s=new Zt(i,e),l=new Zt(i,e+1),c=[];return this.dr.forEachInRange([s,l],(h=>{this.Vr(h),c.push(h.key)})),c}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const i=new je(new Mt([])),s=new Zt(i,e),l=new Zt(i,e+1);let c=We();return this.dr.forEachInRange([s,l],(h=>{c=c.add(h.key)})),c}containsKey(e){const i=new Zt(e,0),s=this.Tr.firstAfterOrEqual(i);return s!==null&&e.isEqual(s.key)}}class Zt{constructor(e,i){this.key=e,this.wr=i}static Er(e,i){return je.comparator(e.key,i.key)||at(e.wr,i.wr)}static Ar(e,i){return at(e.wr,i.wr)||je.comparator(e.key,i.key)}}/**
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
 */class YA{constructor(e,i){this.indexManager=e,this.referenceDelegate=i,this.mutationQueue=[],this.Sr=1,this.br=new cn(Zt.Er)}checkEmpty(e){return oe.resolve(this.mutationQueue.length===0)}addMutationBatch(e,i,s,l){const c=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new mA(c,i,s,l);this.mutationQueue.push(h);for(const p of l)this.br=this.br.add(new Zt(p.key,c)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return oe.resolve(h)}lookupMutationBatch(e,i){return oe.resolve(this.Dr(i))}getNextMutationBatchAfterBatchId(e,i){const s=i+1,l=this.vr(s),c=l<0?0:l;return oe.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return oe.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return oe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,i){const s=new Zt(i,0),l=new Zt(i,Number.POSITIVE_INFINITY),c=[];return this.br.forEachInRange([s,l],(h=>{const p=this.Dr(h.wr);c.push(p)})),oe.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,i){let s=new cn(at);return i.forEach((l=>{const c=new Zt(l,0),h=new Zt(l,Number.POSITIVE_INFINITY);this.br.forEachInRange([c,h],(p=>{s=s.add(p.wr)}))})),oe.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,i){const s=i.path,l=s.length+1;let c=s;je.isDocumentKey(c)||(c=c.child(""));const h=new Zt(new je(c),0);let p=new cn(at);return this.br.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===l&&(p=p.add(y.wr)),!0)}),h),oe.resolve(this.Cr(p))}Cr(e){const i=[];return e.forEach((s=>{const l=this.Dr(s);l!==null&&i.push(l)})),i}removeMutationBatch(e,i){ft(this.Fr(i.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return oe.forEach(i.mutations,(l=>{const c=new Zt(l.key,i.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)})).next((()=>{this.br=s}))}On(e){}containsKey(e,i){const s=new Zt(i,0),l=this.br.firstAfterOrEqual(s);return oe.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,oe.resolve()}Fr(e,i){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const i=this.vr(e);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class $A{constructor(e){this.Mr=e,this.docs=(function(){return new Nt(je.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,i){const s=i.key,l=this.docs.get(s),c=l?l.size:0,h=this.Mr(i);return this.docs=this.docs.insert(s,{document:i.mutableCopy(),size:h}),this.size+=h-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const i=this.docs.get(e);i&&(this.docs=this.docs.remove(e),this.size-=i.size)}getEntry(e,i){const s=this.docs.get(i);return oe.resolve(s?s.document.mutableCopy():vn.newInvalidDocument(i))}getEntries(e,i){let s=mr();return i.forEach((l=>{const c=this.docs.get(l);s=s.insert(l,c?c.document.mutableCopy():vn.newInvalidDocument(l))})),oe.resolve(s)}getDocumentsMatchingQuery(e,i,s,l){let c=mr();const h=i.path,p=new je(h.child("")),y=this.docs.getIteratorFrom(p);for(;y.hasNext();){const{key:_,value:{document:T}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||D2(I2(T),s)<=0||(l.has(T.key)||od(i,T))&&(c=c.insert(T.key,T.mutableCopy()))}return oe.resolve(c)}getAllFromCollectionGroup(e,i,s,l){Ve()}Or(e,i){return oe.forEach(this.docs,(s=>i(s)))}newChangeBuffer(e){return new XA(this)}getSize(e){return oe.resolve(this.size)}}class XA extends HA{constructor(e){super(),this.cr=e}applyChanges(e){const i=[];return this.changes.forEach(((s,l)=>{l.isValidDocument()?i.push(this.cr.addEntry(e,l)):this.cr.removeEntry(s)})),oe.waitFor(i)}getFromCache(e,i){return this.cr.getEntry(e,i)}getAllFromCache(e,i){return this.cr.getEntries(e,i)}}/**
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
 */class WA{constructor(e){this.persistence=e,this.Nr=new lo((i=>Am(i)),Rm),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new km,this.targetCount=0,this.kr=eo.Bn()}forEachTarget(e,i){return this.Nr.forEach(((s,l)=>i(l))),oe.resolve()}getLastRemoteSnapshotVersion(e){return oe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return oe.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),oe.resolve(this.highestTargetId)}setTargetsMetadata(e,i,s){return s&&(this.lastRemoteSnapshotVersion=s),i>this.Lr&&(this.Lr=i),oe.resolve()}Kn(e){this.Nr.set(e.target,e);const i=e.targetId;i>this.highestTargetId&&(this.kr=new eo(i),this.highestTargetId=i),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,i){return this.Kn(i),this.targetCount+=1,oe.resolve()}updateTargetData(e,i){return this.Kn(i),oe.resolve()}removeTargetData(e,i){return this.Nr.delete(i.target),this.Br.gr(i.targetId),this.targetCount-=1,oe.resolve()}removeTargets(e,i,s){let l=0;const c=[];return this.Nr.forEach(((h,p)=>{p.sequenceNumber<=i&&s.get(p.targetId)===null&&(this.Nr.delete(h),c.push(this.removeMatchingKeysForTargetId(e,p.targetId)),l++)})),oe.waitFor(c).next((()=>l))}getTargetCount(e){return oe.resolve(this.targetCount)}getTargetData(e,i){const s=this.Nr.get(i)||null;return oe.resolve(s)}addMatchingKeys(e,i,s){return this.Br.Rr(i,s),oe.resolve()}removeMatchingKeys(e,i,s){this.Br.mr(i,s);const l=this.persistence.referenceDelegate,c=[];return l&&i.forEach((h=>{c.push(l.markPotentiallyOrphaned(e,h))})),oe.waitFor(c)}removeMatchingKeysForTargetId(e,i){return this.Br.gr(i),oe.resolve()}getMatchingKeysForTargetId(e,i){const s=this.Br.yr(i);return oe.resolve(s)}containsKey(e,i){return oe.resolve(this.Br.containsKey(i))}}/**
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
 */class JA{constructor(e,i){this.qr={},this.overlays={},this.Qr=new Em(0),this.Kr=!1,this.Kr=!0,this.$r=new QA,this.referenceDelegate=e(this),this.Ur=new WA(this),this.indexManager=new UA,this.remoteDocumentCache=(function(l){return new $A(l)})((s=>this.referenceDelegate.Wr(s))),this.serializer=new zA(i),this.Gr=new GA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let i=this.overlays[e.toKey()];return i||(i=new KA,this.overlays[e.toKey()]=i),i}getMutationQueue(e,i){let s=this.qr[e.toKey()];return s||(s=new YA(i,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,i,s){Se("MemoryPersistence","Starting transaction:",e);const l=new ZA(this.Qr.next());return this.referenceDelegate.zr(),s(l).next((c=>this.referenceDelegate.jr(l).next((()=>c)))).toPromise().then((c=>(l.raiseOnCommittedEvent(),c)))}Hr(e,i){return oe.or(Object.values(this.qr).map((s=>()=>s.containsKey(e,i))))}}class ZA extends O2{constructor(e){super(),this.currentSequenceNumber=e}}class Om{constructor(e){this.persistence=e,this.Jr=new km,this.Yr=null}static Zr(e){return new Om(e)}get Xr(){if(this.Yr)return this.Yr;throw Ve()}addReference(e,i,s){return this.Jr.addReference(s,i),this.Xr.delete(s.toString()),oe.resolve()}removeReference(e,i,s){return this.Jr.removeReference(s,i),this.Xr.add(s.toString()),oe.resolve()}markPotentiallyOrphaned(e,i){return this.Xr.add(i.toString()),oe.resolve()}removeTarget(e,i){this.Jr.gr(i.targetId).forEach((l=>this.Xr.add(l.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,i.targetId).next((l=>{l.forEach((c=>this.Xr.add(c.toString())))})).next((()=>s.removeTargetData(e,i)))}zr(){this.Yr=new Set}jr(e){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return oe.forEach(this.Xr,(s=>{const l=je.fromPath(s);return this.ei(e,l).next((c=>{c||i.removeEntry(l,Pe.min())}))})).next((()=>(this.Yr=null,i.apply(e))))}updateLimboDocument(e,i){return this.ei(e,i).next((s=>{s?this.Xr.delete(i.toString()):this.Xr.add(i.toString())}))}Wr(e){return 0}ei(e,i){return oe.or([()=>oe.resolve(this.Jr.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(e,i),()=>this.persistence.Hr(e,i)])}}/**
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
 */class jm{constructor(e,i,s,l){this.targetId=e,this.fromCache=i,this.$i=s,this.Ui=l}static Wi(e,i){let s=We(),l=We();for(const c of i.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:l=l.add(c.doc.key)}return new jm(e,i.fromCache,s,l)}}/**
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
 */class eR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return FE()?8:j2(_n())>0?6:4})()}initialize(e,i){this.Ji=e,this.indexManager=i,this.Gi=!0}getDocumentsMatchingQuery(e,i,s,l){const c={result:null};return this.Yi(e,i).next((h=>{c.result=h})).next((()=>{if(!c.result)return this.Zi(e,i,l,s).next((h=>{c.result=h}))})).next((()=>{if(c.result)return;const h=new eR;return this.Xi(e,i,h).next((p=>{if(c.result=p,this.zi)return this.es(e,i,h,p.size)}))})).next((()=>c.result))}es(e,i,s,l){return s.documentReadCount<this.ji?(hl()<=et.DEBUG&&Se("QueryEngine","SDK will not create cache indexes for query:",Ps(i),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),oe.resolve()):(hl()<=et.DEBUG&&Se("QueryEngine","Query:",Ps(i),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.Hi*l?(hl()<=et.DEBUG&&Se("QueryEngine","The SDK decides to create cache indexes for query:",Ps(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ni(i))):oe.resolve())}Yi(e,i){if(v0(i))return oe.resolve(null);let s=Ni(i);return this.indexManager.getIndexType(e,s).next((l=>l===0?null:(i.limit!==null&&l===1&&(i=Xf(i,null,"F"),s=Ni(i)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const h=We(...c);return this.Ji.getDocuments(e,h).next((p=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.ts(i,p);return this.ns(i,_,h,y.readTime)?this.Yi(e,Xf(i,null,"F")):this.rs(e,_,i,y)}))))})))))}Zi(e,i,s,l){return v0(i)||l.isEqual(Pe.min())?oe.resolve(null):this.Ji.getDocuments(e,s).next((c=>{const h=this.ts(i,c);return this.ns(i,h,s,l)?oe.resolve(null):(hl()<=et.DEBUG&&Se("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Ps(i)),this.rs(e,h,i,N2(l,-1)).next((p=>p)))}))}ts(e,i){let s=new cn(hb(e));return i.forEach(((l,c)=>{od(e,c)&&(s=s.add(c))})),s}ns(e,i,s,l){if(e.limit===null)return!1;if(s.size!==i.size)return!0;const c=e.limitType==="F"?i.last():i.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(l)>0)}Xi(e,i,s){return hl()<=et.DEBUG&&Se("QueryEngine","Using full collection scan to execute query:",Ps(i)),this.Ji.getDocumentsMatchingQuery(e,i,ma.min(),s)}rs(e,i,s,l){return this.Ji.getDocumentsMatchingQuery(e,s,l).next((c=>(i.forEach((h=>{c=c.insert(h.key,h)})),c)))}}/**
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
 */class nR{constructor(e,i,s,l){this.persistence=e,this.ss=i,this.serializer=l,this.os=new Nt(at),this._s=new lo((c=>Am(c)),Rm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>e.collect(i,this.os)))}}function iR(r,e,i,s){return new nR(r,e,i,s)}async function jb(r,e){const i=Ue(r);return await i.persistence.runTransaction("Handle user change","readonly",(s=>{let l;return i.mutationQueue.getAllMutationBatches(s).next((c=>(l=c,i.ls(e),i.mutationQueue.getAllMutationBatches(s)))).next((c=>{const h=[],p=[];let y=We();for(const _ of l){h.push(_.batchId);for(const T of _.mutations)y=y.add(T.key)}for(const _ of c){p.push(_.batchId);for(const T of _.mutations)y=y.add(T.key)}return i.localDocuments.getDocuments(s,y).next((_=>({hs:_,removedBatchIds:h,addedBatchIds:p})))}))}))}function rR(r,e){const i=Ue(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const l=e.batch.keys(),c=i.cs.newChangeBuffer({trackRemovals:!0});return(function(p,y,_,T){const N=_.batch,z=N.keys();let G=oe.resolve();return z.forEach((D=>{G=G.next((()=>T.getEntry(y,D))).next((J=>{const $=_.docVersions.get(D);ft($!==null),J.version.compareTo($)<0&&(N.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),T.addEntry(J)))}))})),G.next((()=>p.mutationQueue.removeMutationBatch(y,N)))})(i,s,e,c).next((()=>c.apply(s))).next((()=>i.mutationQueue.performConsistencyCheck(s))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(s,l,e.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let y=We();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(y=y.add(p.batch.mutations[_].key));return y})(e)))).next((()=>i.localDocuments.getDocuments(s,l)))}))}function Mb(r){const e=Ue(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>e.Ur.getLastRemoteSnapshotVersion(i)))}function aR(r,e){const i=Ue(r),s=e.snapshotVersion;let l=i.os;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const h=i.cs.newChangeBuffer({trackRemovals:!0});l=i.os;const p=[];e.targetChanges.forEach(((T,N)=>{const z=l.get(N);if(!z)return;p.push(i.Ur.removeMatchingKeys(c,T.removedDocuments,N).next((()=>i.Ur.addMatchingKeys(c,T.addedDocuments,N))));let G=z.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(N)!==null?G=G.withResumeToken(un.EMPTY_BYTE_STRING,Pe.min()).withLastLimboFreeSnapshotVersion(Pe.min()):T.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(T.resumeToken,s)),l=l.insert(N,G),(function(J,$,ae){return J.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=3e8?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0})(z,G,T)&&p.push(i.Ur.updateTargetData(c,G))}));let y=mr(),_=We();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&p.push(i.persistence.referenceDelegate.updateLimboDocument(c,T))})),p.push(sR(c,h,e.documentUpdates).next((T=>{y=T.Ps,_=T.Is}))),!s.isEqual(Pe.min())){const T=i.Ur.getLastRemoteSnapshotVersion(c).next((N=>i.Ur.setTargetsMetadata(c,c.currentSequenceNumber,s)));p.push(T)}return oe.waitFor(p).next((()=>h.apply(c))).next((()=>i.localDocuments.getLocalViewOfDocuments(c,y,_))).next((()=>y))})).then((c=>(i.os=l,c)))}function sR(r,e,i){let s=We(),l=We();return i.forEach((c=>s=s.add(c))),e.getEntries(r,s).next((c=>{let h=mr();return i.forEach(((p,y)=>{const _=c.get(p);y.isFoundDocument()!==_.isFoundDocument()&&(l=l.add(p)),y.isNoDocument()&&y.version.isEqual(Pe.min())?(e.removeEntry(p,y.readTime),h=h.insert(p,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(p,y)):Se("LocalStore","Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",y.version)})),{Ps:h,Is:l}}))}function oR(r,e){const i=Ue(r);return i.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=-1),i.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function lR(r,e){const i=Ue(r);return i.persistence.runTransaction("Allocate target","readwrite",(s=>{let l;return i.Ur.getTargetData(s,e).next((c=>c?(l=c,oe.resolve(l)):i.Ur.allocateTargetId(s).next((h=>(l=new oa(e,h,"TargetPurposeListen",s.currentSequenceNumber),i.Ur.addTargetData(s,l).next((()=>l)))))))})).then((s=>{const l=i.os.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.os=i.os.insert(s.targetId,s),i._s.set(e,s.targetId)),s}))}async function tm(r,e,i){const s=Ue(r),l=s.os.get(e),c=i?"readwrite":"readwrite-primary";try{i||await s.persistence.runTransaction("Release target",c,(h=>s.persistence.referenceDelegate.removeTarget(h,l)))}catch(h){if(!Hl(h))throw h;Se("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.os=s.os.remove(e),s._s.delete(l.target)}function N0(r,e,i){const s=Ue(r);let l=Pe.min(),c=We();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,T){const N=Ue(y),z=N._s.get(T);return z!==void 0?oe.resolve(N.os.get(z)):N.Ur.getTargetData(_,T)})(s,h,Ni(e)).next((p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(h,p.targetId).next((y=>{c=y}))})).next((()=>s.ss.getDocumentsMatchingQuery(h,e,i?l:Pe.min(),i?c:We()))).next((p=>(cR(s,Z2(e),p),{documents:p,Ts:c})))))}function cR(r,e,i){let s=r.us.get(e)||Pe.min();i.forEach(((l,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),r.us.set(e,s)}class I0{constructor(){this.activeTargetIds=aA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uR{constructor(){this.so=new I0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,i,s){}addLocalQueryTarget(e,i=!0){return i&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,i,s){this.oo[e]=i}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new I0,Promise.resolve()}handleUserChange(e,i,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dR{_o(e){}shutdown(){}}/**
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
 */class D0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eu=null;function Df(){return Eu===null?Eu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Eu++,"0x"+Eu.toString(16)}/**
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
 */const hR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const pn="WebChannelConnection";class mR extends class{constructor(i){this.databaseInfo=i,this.databaseId=i.databaseId;const s=i.ssl?"https":"http",l=encodeURIComponent(this.databaseId.projectId),c=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+i.host,this.vo=`projects/${l}/databases/${c}`,this.Co=this.databaseId.database==="(default)"?`project_id=${l}`:`project_id=${l}&database_id=${c}`}get Fo(){return!1}Mo(i,s,l,c,h){const p=Df(),y=this.xo(i,s.toUriEncodedString());Se("RestConnection",`Sending RPC '${i}' ${p}:`,y,l);const _={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(_,c,h),this.No(i,y,_,l).then((T=>(Se("RestConnection",`Received RPC '${i}' ${p}: `,T),T)),(T=>{throw Xs("RestConnection",`RPC '${i}' ${p} failed with error: `,T,"url: ",y,"request:",l),T}))}Lo(i,s,l,c,h,p){return this.Mo(i,s,l,c,h)}Oo(i,s,l){i["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+so})(),i["Content-Type"]="text/plain",this.databaseInfo.appId&&(i["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach(((c,h)=>i[h]=c)),l&&l.headers.forEach(((c,h)=>i[h]=c))}xo(i,s){const l=hR[i];return`${this.Do}/v1/${s}:${l}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,i,s,l){const c=Df();return new Promise(((h,p)=>{const y=new $_;y.setWithCredentials(!0),y.listenOnce(X_.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case Ru.NO_ERROR:const T=y.getResponseJson();Se(pn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),h(T);break;case Ru.TIMEOUT:Se(pn,`RPC '${e}' ${c} timed out`),p(new De(ce.DEADLINE_EXCEEDED,"Request time out"));break;case Ru.HTTP_ERROR:const N=y.getStatus();if(Se(pn,`RPC '${e}' ${c} failed with status:`,N,"response text:",y.getResponseText()),N>0){let z=y.getResponseJson();Array.isArray(z)&&(z=z[0]);const G=z==null?void 0:z.error;if(G&&G.status&&G.message){const D=(function($){const ae=$.toLowerCase().replace(/_/g,"-");return Object.values(ce).indexOf(ae)>=0?ae:ce.UNKNOWN})(G.status);p(new De(D,G.message))}else p(new De(ce.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new De(ce.UNAVAILABLE,"Connection failed."));break;default:Ve()}}finally{Se(pn,`RPC '${e}' ${c} completed.`)}}));const _=JSON.stringify(l);Se(pn,`RPC '${e}' ${c} sending request:`,l),y.send(i,"POST",_,s,15)}))}Bo(e,i,s){const l=Df(),c=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Z_(),p=J_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Oo(y.initMessageHeaders,i,s),y.encodeInitMessageHeaders=!0;const T=c.join("");Se(pn,`Creating RPC '${e}' stream ${l}: ${T}`,y);const N=h.createWebChannel(T,y);let z=!1,G=!1;const D=new fR({Io:$=>{G?Se(pn,`Not sending because RPC '${e}' stream ${l} is closed:`,$):(z||(Se(pn,`Opening RPC '${e}' stream ${l} transport.`),N.open(),z=!0),Se(pn,`RPC '${e}' stream ${l} sending:`,$),N.send($))},To:()=>N.close()}),J=($,ae,W)=>{$.listen(ae,(me=>{try{W(me)}catch(ge){setTimeout((()=>{throw ge}),0)}}))};return J(N,pl.EventType.OPEN,(()=>{G||(Se(pn,`RPC '${e}' stream ${l} transport opened.`),D.yo())})),J(N,pl.EventType.CLOSE,(()=>{G||(G=!0,Se(pn,`RPC '${e}' stream ${l} transport closed`),D.So())})),J(N,pl.EventType.ERROR,($=>{G||(G=!0,Xs(pn,`RPC '${e}' stream ${l} transport errored:`,$),D.So(new De(ce.UNAVAILABLE,"The operation could not be completed")))})),J(N,pl.EventType.MESSAGE,($=>{var ae;if(!G){const W=$.data[0];ft(!!W);const me=W,ge=me.error||((ae=me[0])===null||ae===void 0?void 0:ae.error);if(ge){Se(pn,`RPC '${e}' stream ${l} received error:`,ge);const Ce=ge.status;let xe=(function(C){const k=Gt[C];if(k!==void 0)return Sb(k)})(Ce),w=ge.message;xe===void 0&&(xe=ce.INTERNAL,w="Unknown error status: "+Ce+" with message "+ge.message),G=!0,D.So(new De(xe,w)),N.close()}else Se(pn,`RPC '${e}' stream ${l} received:`,W),D.bo(W)}})),J(p,W_.STAT_EVENT,($=>{$.stat===Gf.PROXY?Se(pn,`RPC '${e}' stream ${l} detected buffering proxy`):$.stat===Gf.NOPROXY&&Se(pn,`RPC '${e}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{D.wo()}),0),D}}function kf(){return typeof document<"u"?document:null}/**
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
 */function dd(r){return new SA(r,!0)}/**
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
 */class Vb{constructor(e,i,s=1e3,l=1.5,c=6e4){this.ui=e,this.timerId=i,this.ko=s,this.qo=l,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const i=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),l=Math.max(0,i-s);l>0&&Se("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ko} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,l,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Lb{constructor(e,i,s,l,c,h,p,y){this.ui=e,this.Ho=s,this.Jo=l,this.connection=c,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=y,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Vb(e,i)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,i){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():i&&i.code===ce.RESOURCE_EXHAUSTED?(fr(i.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):i&&i.code===ce.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(i)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),i=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,l])=>{this.Yo===i&&this.P_(s,l)}),(s=>{e((()=>{const l=new De(ce.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(l)}))}))}P_(e,i){const s=this.h_(this.Yo);this.stream=this.T_(e,i),this.stream.Eo((()=>{s((()=>this.listener.Eo()))})),this.stream.Ro((()=>{s((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((l=>{s((()=>this.I_(l)))})),this.stream.onMessage((l=>{s((()=>++this.e_==1?this.E_(l):this.onNext(l)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return Se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return i=>{this.ui.enqueueAndForget((()=>this.Yo===e?i():(Se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pR extends Lb{constructor(e,i,s,l,c,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,s,l,h),this.serializer=c}T_(e,i){return this.connection.Bo("Listen",e,i)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const i=RA(this.serializer,e),s=(function(c){if(!("targetChange"in c))return Pe.min();const h=c.targetChange;return h.targetIds&&h.targetIds.length?Pe.min():h.readTime?Ii(h.readTime):Pe.min()})(e);return this.listener.d_(i,s)}A_(e){const i={};i.database=em(this.serializer),i.addTarget=(function(c,h){let p;const y=h.target;if(p=$f(y)?{documents:IA(c,y)}:{query:DA(c,y)._t},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=Rb(c,h.resumeToken);const _=Wf(c,h.expectedCount);_!==null&&(p.expectedCount=_)}else if(h.snapshotVersion.compareTo(Pe.min())>0){p.readTime=Yu(c,h.snapshotVersion.toTimestamp());const _=Wf(c,h.expectedCount);_!==null&&(p.expectedCount=_)}return p})(this.serializer,e);const s=OA(this.serializer,e);s&&(i.labels=s),this.a_(i)}R_(e){const i={};i.database=em(this.serializer),i.removeTarget=e,this.a_(i)}}class gR extends Lb{constructor(e,i,s,l,c,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,s,l,h),this.serializer=c}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,i){return this.connection.Bo("Write",e,i)}E_(e){return ft(!!e.streamToken),this.lastStreamToken=e.streamToken,ft(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ft(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const i=NA(e.writeResults,e.commitTime),s=Ii(e.commitTime);return this.listener.g_(s,i)}p_(){const e={};e.database=em(this.serializer),this.a_(e)}m_(e){const i={streamToken:this.lastStreamToken,writes:e.map((s=>CA(this.serializer,s)))};this.a_(i)}}/**
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
 */class yR extends class{}{constructor(e,i,s,l){super(),this.authCredentials=e,this.appCheckCredentials=i,this.connection=s,this.serializer=l,this.y_=!1}w_(){if(this.y_)throw new De(ce.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,i,s,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,h])=>this.connection.Mo(e,Jf(i,s),l,c,h))).catch((c=>{throw c.name==="FirebaseError"?(c.code===ce.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new De(ce.UNKNOWN,c.toString())}))}Lo(e,i,s,l,c){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,p])=>this.connection.Lo(e,Jf(i,s),l,h,p,c))).catch((h=>{throw h.name==="FirebaseError"?(h.code===ce.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new De(ce.UNKNOWN,h.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class vR{constructor(e,i){this.asyncQueue=e,this.onlineStateHandler=i,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const i=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(fr(i),this.D_=!1):Se("OnlineStateTracker",i)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _R{constructor(e,i,s,l,c){this.localStore=e,this.datastore=i,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=c,this.k_._o((h=>{s.enqueueAndForget((async()=>{Ja(this)&&(Se("RemoteStore","Restarting streams for network reachability change."),await(async function(y){const _=Ue(y);_.L_.add(4),await Gl(_),_.q_.set("Unknown"),_.L_.delete(4),await hd(_)})(this))}))})),this.q_=new vR(s,l)}}async function hd(r){if(Ja(r))for(const e of r.B_)await e(!0)}async function Gl(r){for(const e of r.B_)await e(!1)}function zb(r,e){const i=Ue(r);i.N_.has(e.targetId)||(i.N_.set(e.targetId,e),zm(i)?Lm(i):co(i).r_()&&Vm(i,e))}function Mm(r,e){const i=Ue(r),s=co(i);i.N_.delete(e),s.r_()&&Pb(i,e),i.N_.size===0&&(s.r_()?s.o_():Ja(i)&&i.q_.set("Unknown"))}function Vm(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pe.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(i)}co(r).A_(e)}function Pb(r,e){r.Q_.xe(e),co(r).R_(e)}function Lm(r){r.Q_=new bA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),co(r).start(),r.q_.v_()}function zm(r){return Ja(r)&&!co(r).n_()&&r.N_.size>0}function Ja(r){return Ue(r).L_.size===0}function Ub(r){r.Q_=void 0}async function bR(r){r.q_.set("Online")}async function xR(r){r.N_.forEach(((e,i)=>{Vm(r,e)}))}async function ER(r,e){Ub(r),zm(r)?(r.q_.M_(e),Lm(r)):r.q_.set("Unknown")}async function TR(r,e,i){if(r.q_.set("Online"),e instanceof Ab&&e.state===2&&e.cause)try{await(async function(l,c){const h=c.cause;for(const p of c.targetIds)l.N_.has(p)&&(await l.remoteSyncer.rejectListen(p,h),l.N_.delete(p),l.Q_.removeTarget(p))})(r,e)}catch(s){Se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $u(r,s)}else if(e instanceof Iu?r.Q_.Ke(e):e instanceof wb?r.Q_.He(e):r.Q_.We(e),!i.isEqual(Pe.min()))try{const s=await Mb(r.localStore);i.compareTo(s)>=0&&await(function(c,h){const p=c.Q_.rt(h);return p.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const T=c.N_.get(_);T&&c.N_.set(_,T.withResumeToken(y.resumeToken,h))}})),p.targetMismatches.forEach(((y,_)=>{const T=c.N_.get(y);if(!T)return;c.N_.set(y,T.withResumeToken(un.EMPTY_BYTE_STRING,T.snapshotVersion)),Pb(c,y);const N=new oa(T.target,y,_,T.sequenceNumber);Vm(c,N)})),c.remoteSyncer.applyRemoteEvent(p)})(r,i)}catch(s){Se("RemoteStore","Failed to raise snapshot:",s),await $u(r,s)}}async function $u(r,e,i){if(!Hl(e))throw e;r.L_.add(1),await Gl(r),r.q_.set("Offline"),i||(i=()=>Mb(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{Se("RemoteStore","Retrying IndexedDB access"),await i(),r.L_.delete(1),await hd(r)}))}function Bb(r,e){return e().catch((i=>$u(r,i,e)))}async function fd(r){const e=Ue(r),i=ga(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;SR(e);)try{const l=await oR(e.localStore,s);if(l===null){e.O_.length===0&&i.o_();break}s=l.batchId,wR(e,l)}catch(l){await $u(e,l)}Hb(e)&&Fb(e)}function SR(r){return Ja(r)&&r.O_.length<10}function wR(r,e){r.O_.push(e);const i=ga(r);i.r_()&&i.V_&&i.m_(e.mutations)}function Hb(r){return Ja(r)&&!ga(r).n_()&&r.O_.length>0}function Fb(r){ga(r).start()}async function AR(r){ga(r).p_()}async function RR(r){const e=ga(r);for(const i of r.O_)e.m_(i.mutations)}async function CR(r,e,i){const s=r.O_.shift(),l=Nm.from(s,e,i);await Bb(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await fd(r)}async function NR(r,e){e&&ga(r).V_&&await(async function(s,l){if((function(h){return yA(h)&&h!==ce.ABORTED})(l.code)){const c=s.O_.shift();ga(s).s_(),await Bb(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,l))),await fd(s)}})(r,e),Hb(r)&&Fb(r)}async function k0(r,e){const i=Ue(r);i.asyncQueue.verifyOperationInProgress(),Se("RemoteStore","RemoteStore received new credentials");const s=Ja(i);i.L_.add(3),await Gl(i),s&&i.q_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.L_.delete(3),await hd(i)}async function IR(r,e){const i=Ue(r);e?(i.L_.delete(2),await hd(i)):e||(i.L_.add(2),await Gl(i),i.q_.set("Unknown"))}function co(r){return r.K_||(r.K_=(function(i,s,l){const c=Ue(i);return c.w_(),new pR(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Eo:bR.bind(null,r),Ro:xR.bind(null,r),mo:ER.bind(null,r),d_:TR.bind(null,r)}),r.B_.push((async e=>{e?(r.K_.s_(),zm(r)?Lm(r):r.q_.set("Unknown")):(await r.K_.stop(),Ub(r))}))),r.K_}function ga(r){return r.U_||(r.U_=(function(i,s,l){const c=Ue(i);return c.w_(),new gR(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,l)})(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:AR.bind(null,r),mo:NR.bind(null,r),f_:RR.bind(null,r),g_:CR.bind(null,r)}),r.B_.push((async e=>{e?(r.U_.s_(),await fd(r)):(await r.U_.stop(),r.O_.length>0&&(Se("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))}))),r.U_}/**
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
 */class Pm{constructor(e,i,s,l,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new ha,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,i,s,l,c){const h=Date.now()+s,p=new Pm(e,i,h,l,c);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new De(ce.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Um(r,e){if(fr("AsyncQueue",`${e}: ${r}`),Hl(r))return new De(ce.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Ks{constructor(e){this.comparator=e?(i,s)=>e(i,s)||je.comparator(i.key,s.key):(i,s)=>je.comparator(i.key,s.key),this.keyedMap=gl(),this.sortedSet=new Nt(this.comparator)}static emptySet(e){return new Ks(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const i=this.keyedMap.get(e);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((i,s)=>(e(i),!1)))}add(e){const i=this.delete(e.key);return i.copy(i.keyedMap.insert(e.key,e),i.sortedSet.insert(e,null))}delete(e){const i=this.get(e);return i?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(i)):this}isEqual(e){if(!(e instanceof Ks)||this.size!==e.size)return!1;const i=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,c=s.getNext().key;if(!l.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((i=>{e.push(i.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,i){const s=new Ks;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=i,s}}/**
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
 */class O0{constructor(){this.W_=new Nt(je.comparator)}track(e){const i=e.doc.key,s=this.W_.get(i);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(i,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(i,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(i,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(i,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(i):e.type===1&&s.type===2?this.W_=this.W_.insert(i,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(i,{type:2,doc:e.doc}):Ve():this.W_=this.W_.insert(i,e)}G_(){const e=[];return this.W_.inorderTraversal(((i,s)=>{e.push(s)})),e}}class to{constructor(e,i,s,l,c,h,p,y,_){this.query=e,this.docs=i,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=c,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,i,s,l,c){const h=[];return i.forEach((p=>{h.push({type:0,doc:p})})),new to(e,i,Ks.emptySet(i),h,s,l,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const i=this.docChanges,s=e.docChanges;if(i.length!==s.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==s[l].type||!i[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
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
 */class DR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class kR{constructor(){this.queries=j0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(i,s){const l=Ue(i),c=l.queries;l.queries=j0(),c.forEach(((h,p)=>{for(const y of p.j_)y.onError(s)}))})(this,new De(ce.ABORTED,"Firestore shutting down"))}}function j0(){return new lo((r=>db(r)),sd)}async function qb(r,e){const i=Ue(r);let s=3;const l=e.query;let c=i.queries.get(l);c?!c.H_()&&e.J_()&&(s=2):(c=new DR,s=e.J_()?0:1);try{switch(s){case 0:c.z_=await i.onListen(l,!0);break;case 1:c.z_=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(h){const p=Um(h,`Initialization of query '${Ps(e.query)}' failed`);return void e.onError(p)}i.queries.set(l,c),c.j_.push(e),e.Z_(i.onlineState),c.z_&&e.X_(c.z_)&&Bm(i)}async function Gb(r,e){const i=Ue(r),s=e.query;let l=3;const c=i.queries.get(s);if(c){const h=c.j_.indexOf(e);h>=0&&(c.j_.splice(h,1),c.j_.length===0?l=e.J_()?0:1:!c.H_()&&e.J_()&&(l=2))}switch(l){case 0:return i.queries.delete(s),i.onUnlisten(s,!0);case 1:return i.queries.delete(s),i.onUnlisten(s,!1);case 2:return i.onLastRemoteStoreUnlisten(s);default:return}}function OR(r,e){const i=Ue(r);let s=!1;for(const l of e){const c=l.query,h=i.queries.get(c);if(h){for(const p of h.j_)p.X_(l)&&(s=!0);h.z_=l}}s&&Bm(i)}function jR(r,e,i){const s=Ue(r),l=s.queries.get(e);if(l)for(const c of l.j_)c.onError(i);s.queries.delete(e)}function Bm(r){r.Y_.forEach((e=>{e.next()}))}var nm,M0;(M0=nm||(nm={})).ea="default",M0.Cache="cache";class Kb{constructor(e,i,s){this.query=e,this.ta=i,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const l of e.docChanges)l.type!==3&&s.push(l);e=new to(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let i=!1;return this.na?this.ia(e)&&(this.ta.next(e),i=!0):this.sa(e,this.onlineState)&&(this.oa(e),i=!0),this.ra=e,i}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let i=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),i=!0),i}sa(e,i){if(!e.fromCache||!this.J_())return!0;const s=i!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||i==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const i=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}oa(e){e=to.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nm.Cache}}/**
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
 */class Qb{constructor(e){this.key=e}}class Yb{constructor(e){this.key=e}}class MR{constructor(e,i){this.query=e,this.Ta=i,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=We(),this.mutatedKeys=We(),this.Aa=hb(e),this.Ra=new Ks(this.Aa)}get Va(){return this.Ta}ma(e,i){const s=i?i.fa:new O0,l=i?i.Ra:this.Ra;let c=i?i.mutatedKeys:this.mutatedKeys,h=l,p=!1;const y=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,_=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(e.inorderTraversal(((T,N)=>{const z=l.get(T),G=od(this.query,N)?N:null,D=!!z&&this.mutatedKeys.has(z.key),J=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let $=!1;z&&G?z.data.isEqual(G.data)?D!==J&&(s.track({type:3,doc:G}),$=!0):this.ga(z,G)||(s.track({type:2,doc:G}),$=!0,(y&&this.Aa(G,y)>0||_&&this.Aa(G,_)<0)&&(p=!0)):!z&&G?(s.track({type:0,doc:G}),$=!0):z&&!G&&(s.track({type:1,doc:z}),$=!0,(y||_)&&(p=!0)),$&&(G?(h=h.add(G),c=J?c.add(T):c.delete(T)):(h=h.delete(T),c=c.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),c=c.delete(T.key),s.track({type:1,doc:T})}return{Ra:h,fa:s,ns:p,mutatedKeys:c}}ga(e,i){return e.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(e,i,s,l){const c=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort(((T,N)=>(function(G,D){const J=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ve()}};return J(G)-J(D)})(T.type,N.type)||this.Aa(T.doc,N.doc))),this.pa(s),l=l!=null&&l;const p=i&&!l?this.ya():[],y=this.da.size===0&&this.current&&!l?1:0,_=y!==this.Ea;return this.Ea=y,h.length!==0||_?{snapshot:new to(this.query,e.Ra,c,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:p}:{wa:p}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new O0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((i=>this.Ta=this.Ta.add(i))),e.modifiedDocuments.forEach((i=>{})),e.removedDocuments.forEach((i=>this.Ta=this.Ta.delete(i))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=We(),this.Ra.forEach((s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))}));const i=[];return e.forEach((s=>{this.da.has(s)||i.push(new Yb(s))})),this.da.forEach((s=>{e.has(s)||i.push(new Qb(s))})),i}ba(e){this.Ta=e.Ts,this.da=We();const i=this.ma(e.documents);return this.applyChanges(i,!0)}Da(){return to.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class VR{constructor(e,i,s){this.query=e,this.targetId=i,this.view=s}}class LR{constructor(e){this.key=e,this.va=!1}}class zR{constructor(e,i,s,l,c,h){this.localStore=e,this.remoteStore=i,this.eventManager=s,this.sharedClientState=l,this.currentUser=c,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new lo((p=>db(p)),sd),this.Ma=new Map,this.xa=new Set,this.Oa=new Nt(je.comparator),this.Na=new Map,this.La=new km,this.Ba={},this.ka=new Map,this.qa=eo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function PR(r,e,i=!0){const s=ex(r);let l;const c=s.Fa.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),l=c.view.Da()):l=await $b(s,e,i,!0),l}async function UR(r,e){const i=ex(r);await $b(i,e,!0,!1)}async function $b(r,e,i,s){const l=await lR(r.localStore,Ni(e)),c=l.targetId,h=r.sharedClientState.addLocalQueryTarget(c,i);let p;return s&&(p=await BR(r,e,c,h==="current",l.resumeToken)),r.isPrimaryClient&&i&&zb(r.remoteStore,l),p}async function BR(r,e,i,s,l){r.Ka=(N,z,G)=>(async function(J,$,ae,W){let me=$.view.ma(ae);me.ns&&(me=await N0(J.localStore,$.query,!1).then((({documents:w})=>$.view.ma(w,me))));const ge=W&&W.targetChanges.get($.targetId),Ce=W&&W.targetMismatches.get($.targetId)!=null,xe=$.view.applyChanges(me,J.isPrimaryClient,ge,Ce);return L0(J,$.targetId,xe.wa),xe.snapshot})(r,N,z,G);const c=await N0(r.localStore,e,!0),h=new MR(e,c.Ts),p=h.ma(c.documents),y=ql.createSynthesizedTargetChangeForCurrentChange(i,s&&r.onlineState!=="Offline",l),_=h.applyChanges(p,r.isPrimaryClient,y);L0(r,i,_.wa);const T=new VR(e,i,h);return r.Fa.set(e,T),r.Ma.has(i)?r.Ma.get(i).push(e):r.Ma.set(i,[e]),_.snapshot}async function HR(r,e,i){const s=Ue(r),l=s.Fa.get(e),c=s.Ma.get(l.targetId);if(c.length>1)return s.Ma.set(l.targetId,c.filter((h=>!sd(h,e)))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await tm(s.localStore,l.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(l.targetId),i&&Mm(s.remoteStore,l.targetId),im(s,l.targetId)})).catch(Bl)):(im(s,l.targetId),await tm(s.localStore,l.targetId,!0))}async function FR(r,e){const i=Ue(r),s=i.Fa.get(e),l=i.Ma.get(s.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(s.targetId),Mm(i.remoteStore,s.targetId))}async function qR(r,e,i){const s=WR(r);try{const l=await(function(h,p){const y=Ue(h),_=Yt.now(),T=p.reduce(((G,D)=>G.add(D.key)),We());let N,z;return y.persistence.runTransaction("Locally write mutations","readwrite",(G=>{let D=mr(),J=We();return y.cs.getEntries(G,T).next(($=>{D=$,D.forEach(((ae,W)=>{W.isValidDocument()||(J=J.add(ae))}))})).next((()=>y.localDocuments.getOverlayedDocuments(G,D))).next(($=>{N=$;const ae=[];for(const W of p){const me=hA(W,N.get(W.key).overlayedDocument);me!=null&&ae.push(new Wa(W.key,me,rb(me.value.mapValue),ur.exists(!0)))}return y.mutationQueue.addMutationBatch(G,_,ae,p)})).next(($=>{z=$;const ae=$.applyToLocalDocumentSet(N,J);return y.documentOverlayCache.saveOverlays(G,$.batchId,ae)}))})).then((()=>({batchId:z.batchId,changes:mb(N)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(l.batchId),(function(h,p,y){let _=h.Ba[h.currentUser.toKey()];_||(_=new Nt(at)),_=_.insert(p,y),h.Ba[h.currentUser.toKey()]=_})(s,l.batchId,i),await Kl(s,l.changes),await fd(s.remoteStore)}catch(l){const c=Um(l,"Failed to persist write");i.reject(c)}}async function Xb(r,e){const i=Ue(r);try{const s=await aR(i.localStore,e);e.targetChanges.forEach(((l,c)=>{const h=i.Na.get(c);h&&(ft(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1),l.addedDocuments.size>0?h.va=!0:l.modifiedDocuments.size>0?ft(h.va):l.removedDocuments.size>0&&(ft(h.va),h.va=!1))})),await Kl(i,s,e)}catch(s){await Bl(s)}}function V0(r,e,i){const s=Ue(r);if(s.isPrimaryClient&&i===0||!s.isPrimaryClient&&i===1){const l=[];s.Fa.forEach(((c,h)=>{const p=h.view.Z_(e);p.snapshot&&l.push(p.snapshot)})),(function(h,p){const y=Ue(h);y.onlineState=p;let _=!1;y.queries.forEach(((T,N)=>{for(const z of N.j_)z.Z_(p)&&(_=!0)})),_&&Bm(y)})(s.eventManager,e),l.length&&s.Ca.d_(l),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function GR(r,e,i){const s=Ue(r);s.sharedClientState.updateQueryState(e,"rejected",i);const l=s.Na.get(e),c=l&&l.key;if(c){let h=new Nt(je.comparator);h=h.insert(c,vn.newNoDocument(c,Pe.min()));const p=We().add(c),y=new ud(Pe.min(),new Map,new Nt(at),h,p);await Xb(s,y),s.Oa=s.Oa.remove(c),s.Na.delete(e),Hm(s)}else await tm(s.localStore,e,!1).then((()=>im(s,e,i))).catch(Bl)}async function KR(r,e){const i=Ue(r),s=e.batch.batchId;try{const l=await rR(i.localStore,e);Jb(i,s,null),Wb(i,s),i.sharedClientState.updateMutationState(s,"acknowledged"),await Kl(i,l)}catch(l){await Bl(l)}}async function QR(r,e,i){const s=Ue(r);try{const l=await(function(h,p){const y=Ue(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let T;return y.mutationQueue.lookupMutationBatch(_,p).next((N=>(ft(N!==null),T=N.keys(),y.mutationQueue.removeMutationBatch(_,N)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,T,p))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T))).next((()=>y.localDocuments.getDocuments(_,T)))}))})(s.localStore,e);Jb(s,e,i),Wb(s,e),s.sharedClientState.updateMutationState(e,"rejected",i),await Kl(s,l)}catch(l){await Bl(l)}}function Wb(r,e){(r.ka.get(e)||[]).forEach((i=>{i.resolve()})),r.ka.delete(e)}function Jb(r,e,i){const s=Ue(r);let l=s.Ba[s.currentUser.toKey()];if(l){const c=l.get(e);c&&(i?c.reject(i):c.resolve(),l=l.remove(e)),s.Ba[s.currentUser.toKey()]=l}}function im(r,e,i=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Ma.get(e))r.Fa.delete(s),i&&r.Ca.$a(s,i);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach((s=>{r.La.containsKey(s)||Zb(r,s)}))}function Zb(r,e){r.xa.delete(e.path.canonicalString());const i=r.Oa.get(e);i!==null&&(Mm(r.remoteStore,i),r.Oa=r.Oa.remove(e),r.Na.delete(i),Hm(r))}function L0(r,e,i){for(const s of i)s instanceof Qb?(r.La.addReference(s.key,e),YR(r,s)):s instanceof Yb?(Se("SyncEngine","Document no longer in limbo: "+s.key),r.La.removeReference(s.key,e),r.La.containsKey(s.key)||Zb(r,s.key)):Ve()}function YR(r,e){const i=e.key,s=i.path.canonicalString();r.Oa.get(i)||r.xa.has(s)||(Se("SyncEngine","New document in limbo: "+i),r.xa.add(s),Hm(r))}function Hm(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const i=new je(Mt.fromString(e)),s=r.qa.next();r.Na.set(s,new LR(i)),r.Oa=r.Oa.insert(i,s),zb(r.remoteStore,new oa(Ni(ad(i.path)),s,"TargetPurposeLimboResolution",Em.oe))}}async function Kl(r,e,i){const s=Ue(r),l=[],c=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach(((p,y)=>{h.push(s.Ka(y,e,i).then((_=>{var T;if((_||i)&&s.isPrimaryClient){const N=_?!_.fromCache:(T=i==null?void 0:i.targetChanges.get(y.targetId))===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(y.targetId,N?"current":"not-current")}if(_){l.push(_);const N=jm.Wi(y.targetId,_);c.push(N)}})))})),await Promise.all(h),s.Ca.d_(l),await(async function(y,_){const T=Ue(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(N=>oe.forEach(_,(z=>oe.forEach(z.$i,(G=>T.persistence.referenceDelegate.addReference(N,z.targetId,G))).next((()=>oe.forEach(z.Ui,(G=>T.persistence.referenceDelegate.removeReference(N,z.targetId,G)))))))))}catch(N){if(!Hl(N))throw N;Se("LocalStore","Failed to update sequence numbers: "+N)}for(const N of _){const z=N.targetId;if(!N.fromCache){const G=T.os.get(z),D=G.snapshotVersion,J=G.withLastLimboFreeSnapshotVersion(D);T.os=T.os.insert(z,J)}}})(s.localStore,c))}async function $R(r,e){const i=Ue(r);if(!i.currentUser.isEqual(e)){Se("SyncEngine","User change. New user:",e.toKey());const s=await jb(i.localStore,e);i.currentUser=e,(function(c,h){c.ka.forEach((p=>{p.forEach((y=>{y.reject(new De(ce.CANCELLED,h))}))})),c.ka.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Kl(i,s.hs)}}function XR(r,e){const i=Ue(r),s=i.Na.get(e);if(s&&s.va)return We().add(s.key);{let l=We();const c=i.Ma.get(e);if(!c)return l;for(const h of c){const p=i.Fa.get(h);l=l.unionWith(p.view.Va)}return l}}function ex(r){const e=Ue(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GR.bind(null,e),e.Ca.d_=OR.bind(null,e.eventManager),e.Ca.$a=jR.bind(null,e.eventManager),e}function WR(r){const e=Ue(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QR.bind(null,e),e}class Xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,i){return null}Ha(e,i){return null}za(e){return iR(this.persistence,new tR,e.initialUser,this.serializer)}Ga(e){return new JA(Om.Zr,this.serializer)}Wa(e){return new uR}async terminate(){var e,i;(e=this.gcScheduler)===null||e===void 0||e.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xu.provider={build:()=>new Xu};class rm{async initialize(e,i){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>V0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$R.bind(null,this.syncEngine),await IR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new kR})()}createDatastore(e){const i=dd(e.databaseInfo.databaseId),s=(function(c){return new mR(c)})(e.databaseInfo);return(function(c,h,p,y){return new yR(c,h,p,y)})(e.authCredentials,e.appCheckCredentials,s,i)}createRemoteStore(e){return(function(s,l,c,h,p){return new _R(s,l,c,h,p)})(this.localStore,this.datastore,e.asyncQueue,(i=>V0(this.syncEngine,i,0)),(function(){return D0.D()?new D0:new dR})())}createSyncEngine(e,i){return(function(l,c,h,p,y,_,T){const N=new zR(l,c,h,p,y,_);return T&&(N.Qa=!0),N})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,i)}async terminate(){var e,i;await(async function(l){const c=Ue(l);Se("RemoteStore","RemoteStore shutting down."),c.L_.add(5),await Gl(c),c.k_.shutdown(),c.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}rm.provider={build:()=>new rm};/**
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
 */class tx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,i){setTimeout((()=>{this.muted||e(i)}),0)}}/**
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
 */class JR{constructor(e,i,s,l,c){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=s,this.databaseInfo=l,this.user=yn.UNAUTHENTICATED,this.clientId=tb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async h=>{Se("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(Se("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ha;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const s=Um(i,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Of(r,e){r.asyncQueue.verifyOperationInProgress(),Se("FirestoreClient","Initializing OfflineComponentProvider");const i=r.configuration;await e.initialize(i);let s=i.initialUser;r.setCredentialChangeListener((async l=>{s.isEqual(l)||(await jb(e.localStore,l),s=l)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function z0(r,e){r.asyncQueue.verifyOperationInProgress();const i=await ZR(r);Se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(i,r.configuration),r.setCredentialChangeListener((s=>k0(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,l)=>k0(e.remoteStore,l))),r._onlineComponents=e}async function ZR(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){Se("FirestoreClient","Using user provided OfflineComponentProvider");try{await Of(r,r._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!(function(l){return l.name==="FirebaseError"?l.code===ce.FAILED_PRECONDITION||l.code===ce.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(i))throw i;Xs("Error using user provided cache. Falling back to memory cache: "+i),await Of(r,new Xu)}}else Se("FirestoreClient","Using default OfflineComponentProvider"),await Of(r,new Xu);return r._offlineComponents}async function nx(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(Se("FirestoreClient","Using user provided OnlineComponentProvider"),await z0(r,r._uninitializedComponentsProvider._online)):(Se("FirestoreClient","Using default OnlineComponentProvider"),await z0(r,new rm))),r._onlineComponents}function eC(r){return nx(r).then((e=>e.syncEngine))}async function am(r){const e=await nx(r),i=e.eventManager;return i.onListen=PR.bind(null,e.syncEngine),i.onUnlisten=HR.bind(null,e.syncEngine),i.onFirstRemoteStoreListen=UR.bind(null,e.syncEngine),i.onLastRemoteStoreUnlisten=FR.bind(null,e.syncEngine),i}function tC(r,e,i={}){const s=new ha;return r.asyncQueue.enqueueAndForget((async()=>(function(c,h,p,y,_){const T=new tx({next:z=>{T.Za(),h.enqueueAndForget((()=>Gb(c,N)));const G=z.docs.has(p);!G&&z.fromCache?_.reject(new De(ce.UNAVAILABLE,"Failed to get document because the client is offline.")):G&&z.fromCache&&y&&y.source==="server"?_.reject(new De(ce.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(z)},error:z=>_.reject(z)}),N=new Kb(ad(p.path),T,{includeMetadataChanges:!0,_a:!0});return qb(c,N)})(await am(r),r.asyncQueue,e,i,s))),s.promise}/**
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
 */function ix(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const P0=new Map;/**
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
 */function nC(r,e,i){if(!i)throw new De(ce.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function iC(r,e,i,s){if(e===!0&&s===!0)throw new De(ce.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function U0(r){if(!je.isDocumentKey(r))throw new De(ce.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Fm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ve()}function fa(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new De(ce.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Fm(r);throw new De(ce.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return r}/**
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
 */class B0{constructor(e){var i,s;if(e.host===void 0){if(e.ssl!==void 0)throw new De(ce.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(i=e.ssl)===null||i===void 0||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new De(ce.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ix((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new De(ce.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new De(ce.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new De(ce.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,l){return s.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qm{constructor(e,i,s,l){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new De(ce.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new De(ce.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B0(e),e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new b2;switch(s.type){case"firstParty":return new S2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new De(ce.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const s=P0.get(i);s&&(Se("ComponentProvider","Removing Datastore"),P0.delete(i),s.terminate())})(this),Promise.resolve()}}function rC(r,e,i,s={}){var l;const c=(r=fa(r,qm))._getSettings(),h=`${e}:${i}`;if(c.host!=="firestore.googleapis.com"&&c.host!==h&&Xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},c),{host:h,ssl:!1})),s.mockUserToken){let p,y;if(typeof s.mockUserToken=="string")p=s.mockUserToken,y=yn.MOCK_USER;else{p=VE(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new De(ce.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new yn(_)}r._authCredentials=new x2(new eb(p,y))}}/**
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
 */class md{constructor(e,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new md(this.firestore,e,this._query)}}class Gn{constructor(e,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ol(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gn(this.firestore,e,this._key)}}class Ol extends md{constructor(e,i,s){super(e,i,ad(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gn(this.firestore,null,new je(e))}withConverter(e){return new Ol(this.firestore,e,this._path)}}function Gm(r,e,...i){if(r=Kn(r),arguments.length===1&&(e=tb.newId()),nC("doc","path",e),r instanceof qm){const s=Mt.fromString(e,...i);return U0(s),new Gn(r,null,new je(s))}{if(!(r instanceof Gn||r instanceof Ol))throw new De(ce.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Mt.fromString(e,...i));return U0(s),new Gn(r.firestore,r instanceof Ol?r.converter:null,new je(s))}}/**
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
 */class H0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Vb(this,"async_queue_retry"),this.Vu=()=>{const s=kf();s&&Se("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const i=kf();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const i=kf();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const i=new ha;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Hl(e))throw e;Se("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const i=this.mu.then((()=>(this.du=!0,e().catch((s=>{this.Eu=s,this.du=!1;const l=(function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p})(s);throw fr("INTERNAL UNHANDLED ERROR: ",l),s})).then((s=>(this.du=!1,s))))));return this.mu=i,i}enqueueAfterDelay(e,i,s){this.fu(),this.Ru.indexOf(e)>-1&&(i=0);const l=Pm.createAndSchedule(this,e,i,s,(c=>this.yu(c)));return this.Tu.push(l),l}fu(){this.Eu&&Ve()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const i of this.Tu)if(i.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((i,s)=>i.targetTimeMs-s.targetTimeMs));for(const i of this.Tu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const i=this.Tu.indexOf(e);this.Tu.splice(i,1)}}function F0(r){return(function(i,s){if(typeof i!="object"||i===null)return!1;const l=i;for(const c of s)if(c in l&&typeof l[c]=="function")return!0;return!1})(r,["next","error","complete"])}class jl extends qm{constructor(e,i,s,l){super(e,i,s,l),this.type="firestore",this._queue=new H0,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new H0(e),this._firestoreClient=void 0,await e}}}function aC(r,e){const i=typeof r=="object"?r:d_(),s=typeof r=="string"?r:"(default)",l=cm(i,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=jE("firestore");c&&rC(l,...c)}return l}function Km(r){if(r._terminated)throw new De(ce.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||sC(r),r._firestoreClient}function sC(r){var e,i,s;const l=r._freezeSettings(),c=(function(p,y,_,T){return new L2(p,y,_,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,ix(T.experimentalLongPollingOptions),T.useFetchStreams)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((s=l.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new JR(r._authCredentials,r._appCheckCredentials,r._queue,c,r._componentsProvider&&(function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}})(r._componentsProvider))}/**
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
 */class no{constructor(e){this._byteString=e}static fromBase64String(e){try{return new no(un.fromBase64String(e))}catch(i){throw new De(ce.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new no(un.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qm{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new De(ce.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ln(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ym{constructor(e){this._methodName=e}}/**
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
 */class $m{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new De(ce.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new De(ce.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return at(this._lat,e._lat)||at(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this._values=(e||[]).map((i=>i))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0})(this._values,e._values)}}/**
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
 */const oC=/^__.*__$/;class lC{constructor(e,i,s){this.data=e,this.fieldMask=i,this.fieldTransforms=s}toMutation(e,i){return this.fieldMask!==null?new Wa(e,this.data,this.fieldMask,i,this.fieldTransforms):new Fl(e,this.data,i,this.fieldTransforms)}}function rx(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ve()}}class Wm{constructor(e,i,s,l,c,h){this.settings=e,this.databaseId=i,this.serializer=s,this.ignoreUndefinedProperties=l,c===void 0&&this.vu(),this.fieldTransforms=c||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Wm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(e),l=this.Fu({path:s,xu:!1});return l.Ou(e),l}Nu(e){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(e),l=this.Fu({path:s,xu:!1});return l.vu(),l}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Wu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((i=>e.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>e.isPrefixOf(i.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(rx(this.Cu)&&oC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class cC{constructor(e,i,s){this.databaseId=e,this.ignoreUndefinedProperties=i,this.serializer=s||dd(e)}Qu(e,i,s,l=!1){return new Wm({Cu:e,methodName:i,qu:s,path:ln.emptyPath(),xu:!1,ku:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uC(r){const e=r._freezeSettings(),i=dd(r._databaseId);return new cC(r._databaseId,!!e.ignoreUndefinedProperties,i)}function dC(r,e,i,s,l,c={}){const h=r.Qu(c.merge||c.mergeFields?2:0,e,i,l);lx("Data must be an object, but it was:",h,s);const p=sx(s,h);let y,_;if(c.merge)y=new fi(h.fieldMask),_=h.fieldTransforms;else if(c.mergeFields){const T=[];for(const N of c.mergeFields){const z=hC(e,N,i);if(!h.contains(z))throw new De(ce.INVALID_ARGUMENT,`Field '${z}' is specified in your field mask but missing from your input data.`);mC(T,z)||T.push(z)}y=new fi(T),_=h.fieldTransforms.filter((N=>y.covers(N.field)))}else y=null,_=h.fieldTransforms;return new lC(new ai(p),y,_)}class Jm extends Ym{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jm}}function ax(r,e){if(ox(r=Kn(r)))return lx("Unsupported field value:",e,r),sx(r,e);if(r instanceof Ym)return(function(s,l){if(!rx(l.Cu))throw l.Bu(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Bu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(l);c&&l.fieldTransforms.push(c)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(s,l){const c=[];let h=0;for(const p of s){let y=ax(p,l.Lu(h));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),h++}return{arrayValue:{values:c}}})(r,e)}return(function(s,l){if((s=Kn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return sA(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=Yt.fromDate(s);return{timestampValue:Yu(l.serializer,c)}}if(s instanceof Yt){const c=new Yt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Yu(l.serializer,c)}}if(s instanceof $m)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof no)return{bytesValue:Rb(l.serializer,s._byteString)};if(s instanceof Gn){const c=l.databaseId,h=s.firestore._databaseId;if(!h.isEqual(c))throw l.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Dm(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof Xm)return(function(h,p){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw p.Bu("VectorValues must only contain numeric values.");return Cm(p.serializer,y)}))}}}}}})(s,l);throw l.Bu(`Unsupported field value: ${Fm(s)}`)})(r,e)}function sx(r,e){const i={};return nb(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oo(r,((s,l)=>{const c=ax(l,e.Mu(s));c!=null&&(i[s]=c)})),{mapValue:{fields:i}}}function ox(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Yt||r instanceof $m||r instanceof no||r instanceof Gn||r instanceof Ym||r instanceof Xm)}function lx(r,e,i){if(!ox(i)||!(function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)})(i)){const s=Fm(i);throw s==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+s)}}function hC(r,e,i){if((e=Kn(e))instanceof Qm)return e._internalPath;if(typeof e=="string")return cx(r,e);throw Wu("Field path arguments must be of type string or ",r,!1,void 0,i)}const fC=new RegExp("[~\\*/\\[\\]]");function cx(r,e,i){if(e.search(fC)>=0)throw Wu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new Qm(...e.split("."))._internalPath}catch{throw Wu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function Wu(r,e,i,s,l){const c=s&&!s.isEmpty(),h=l!==void 0;let p=`Function ${e}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let y="";return(c||h)&&(y+=" (found",c&&(y+=` in field ${s}`),h&&(y+=` in document ${l}`),y+=")"),new De(ce.INVALID_ARGUMENT,p+r+y)}function mC(r,e){return r.some((i=>i.isEqual(e)))}/**
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
 */class ux{constructor(e,i,s,l,c){this._firestore=e,this._userDataWriter=i,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new Gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(dx("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class pC extends ux{data(){return super.data()}}function dx(r,e){return typeof e=="string"?cx(r,e):e instanceof Qm?e._internalPath:e._delegate._internalPath}/**
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
 */function gC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new De(ce.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yC{convertValue(e,i="none"){switch(Xa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,i);case 5:return e.stringValue;case 6:return this.convertBytes($a(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,i);case 11:return this.convertObject(e.mapValue,i);case 10:return this.convertVectorValue(e.mapValue);default:throw Ve()}}convertObject(e,i){return this.convertObjectMap(e.fields,i)}convertObjectMap(e,i="none"){const s={};return oo(e,((l,c)=>{s[l]=this.convertValue(c,i)})),s}convertVectorValue(e){var i,s,l;const c=(l=(s=(i=e.fields)===null||i===void 0?void 0:i.value.arrayValue)===null||s===void 0?void 0:s.values)===null||l===void 0?void 0:l.map((h=>Pt(h.doubleValue)));return new Xm(c)}convertGeoPoint(e){return new $m(Pt(e.latitude),Pt(e.longitude))}convertArray(e,i){return(e.values||[]).map((s=>this.convertValue(s,i)))}convertServerTimestamp(e,i){switch(i){case"previous":const s=Sm(e);return s==null?null:this.convertValue(s,i);case"estimate":return this.convertTimestamp(Cl(e));default:return null}}convertTimestamp(e){const i=pa(e);return new Yt(i.seconds,i.nanos)}convertDocumentKey(e,i){const s=Mt.fromString(e);ft(Ob(s));const l=new Nl(s.get(1),s.get(3)),c=new je(s.popFirst(5));return l.isEqual(i)||fr(`Document ${c} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),c}}/**
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
 */function vC(r,e,i){let s;return s=r?i&&(i.merge||i.mergeFields)?r.toFirestore(e,i):r.toFirestore(e):e,s}/**
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
 */class vl{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hx extends ux{constructor(e,i,s,l,c,h){super(e,i,s,l,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const s=this._document.data.field(dx("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}}class Du extends hx{data(e={}){return super.data(e)}}class _C{constructor(e,i,s,l){this._firestore=e,this._userDataWriter=i,this._snapshot=l,this.metadata=new vl(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const e=[];return this.forEach((i=>e.push(i))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach((s=>{e.call(i,new Du(this._firestore,this._userDataWriter,s.key,s,new vl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new De(ce.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(l,c){if(l._snapshot.oldDocs.isEmpty()){let h=0;return l._snapshot.docChanges.map((p=>{const y=new Du(l._firestore,l._userDataWriter,p.doc.key,p.doc,new vl(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const y=new Du(l._firestore,l._userDataWriter,p.doc.key,p.doc,new vl(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let _=-1,T=-1;return p.type!==0&&(_=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),T=h.indexOf(p.doc.key)),{type:bC(p.type),doc:y,oldIndex:_,newIndex:T}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}}function bC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ve()}}/**
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
 */function xC(r){r=fa(r,Gn);const e=fa(r.firestore,jl);return tC(Km(e),r._key).then((i=>mx(e,r,i)))}class fx extends yC{constructor(e){super(),this.firestore=e}convertBytes(e){return new no(e)}convertReference(e){const i=this.convertDocumentKey(e,this.firestore._databaseId);return new Gn(this.firestore,null,i)}}function EC(r,e,i){r=fa(r,Gn);const s=fa(r.firestore,jl),l=vC(r.converter,e,i);return SC(s,[dC(uC(s),"setDoc",r._key,l,r.converter!==null,i).toMutation(r._key,ur.none())])}function TC(r,...e){var i,s,l;r=Kn(r);let c={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||F0(e[h])||(c=e[h],h++);const p={includeMetadataChanges:c.includeMetadataChanges,source:c.source};if(F0(e[h])){const N=e[h];e[h]=(i=N.next)===null||i===void 0?void 0:i.bind(N),e[h+1]=(s=N.error)===null||s===void 0?void 0:s.bind(N),e[h+2]=(l=N.complete)===null||l===void 0?void 0:l.bind(N)}let y,_,T;if(r instanceof Gn)_=fa(r.firestore,jl),T=ad(r._key.path),y={next:N=>{e[h]&&e[h](mx(_,r,N))},error:e[h+1],complete:e[h+2]};else{const N=fa(r,md);_=fa(N.firestore,jl),T=N._query;const z=new fx(_);y={next:G=>{e[h]&&e[h](new _C(_,z,N,G))},error:e[h+1],complete:e[h+2]},gC(r._query)}return(function(z,G,D,J){const $=new tx(J),ae=new Kb(G,$,D);return z.asyncQueue.enqueueAndForget((async()=>qb(await am(z),ae))),()=>{$.Za(),z.asyncQueue.enqueueAndForget((async()=>Gb(await am(z),ae)))}})(Km(_),T,p,y)}function SC(r,e){return(function(s,l){const c=new ha;return s.asyncQueue.enqueueAndForget((async()=>qR(await eC(s),l,c))),c.promise})(Km(r),e)}function mx(r,e,i){const s=i.docs.get(e._key),l=new fx(r);return new hx(r,l,e._key,s,new vl(i.hasPendingWrites,i.fromCache),e.converter)}/**
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
 */function zs(){return new Jm("deleteField")}(function(e,i=!0){(function(l){so=l})(io),Ys(new m2("firestore",((s,{instanceIdentifier:l,options:c})=>{const h=s.getProvider("app").getImmediate(),p=new jl(new E2(s.getProvider("auth-internal")),new A2(s.getProvider("app-check-internal")),(function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new De(ce.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nl(_.options.projectId,T)})(h,l),h);return c=Object.assign({useFetchStreams:i},c),p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),ua(l0,"4.7.3",e),ua(l0,"4.7.3","esm2017")})();const wC={apiKey:"AIzaSyB07-euGPy_rXhtydDghMg5rImc15g165s",authDomain:"kadem-ia.firebaseapp.com",projectId:"kadem-ia",storageBucket:"kadem-ia.firebasestorage.app",messagingSenderId:"313349494427",appId:"1:313349494427:web:0c0c03231ac7f12aa4183e"},px=u_(wC),Ml=h2(px),Zm=aC(px),q0=new sr;async function gx(){try{return{success:!0,user:(await bw(Ml,q0)).user}}catch(r){if(console.error("Erro no login via Popup Firebase Google:",r),r.code==="auth/popup-blocked"||r.code==="auth/popup-closed-by-user"||r.code==="auth/cancelled-popup-request"||/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))try{return await Aw(Ml,q0),{success:!0,redirecting:!0}}catch(e){return{success:!1,error:e.message}}return{success:!1,error:r.message}}}async function AC(){try{const r=await Cw(Ml);if(r&&r.user)return{success:!0,user:r.user}}catch(r){console.error("Erro no checkRedirectResult:",r)}return null}async function RC(){try{return await ew(Ml),{success:!0}}catch(r){return console.error("Erro ao fazer logout:",r),{success:!1,error:r.message}}}function CC(r){return ZS(Ml,e=>{r(e)})}async function gn(r,{workoutData:e,history:i,profile:s,profileHistory:l}){if(!r)return{success:!1,error:"ID de usuário ausente"};try{const c=Gm(Zm,"users",r),h={appName:"KademIA",updatedAt:new Date().toISOString(),gymrotData:zs(),gymwagData:zs(),fittrackData:zs(),gymwag_backup:zs(),gymrot_history:zs(),fittrack_history:zs()};return e!==void 0&&(h.workoutData=JSON.parse(JSON.stringify(e))),i!==void 0&&(h.history=JSON.parse(JSON.stringify(i))),s!==void 0&&(h.profile=JSON.parse(JSON.stringify(s))),l!==void 0&&(h.profileHistory=JSON.parse(JSON.stringify(l))),await EC(c,h,{merge:!0}),console.log("🔥 Dados sincronizados com sucesso no Firestore para o usuário:",r),{success:!0}}catch(c){return console.error("Erro ao salvar no Firestore:",c),{success:!1,error:c.message}}}async function G0(r){if(!r)return null;try{const e=Gm(Zm,"users",r),i=await xC(e);return i.exists()?i.data():null}catch(e){return console.error("Erro ao carregar dados do Firestore:",e),null}}function NC(r,e){if(!r)return()=>{};const i=Gm(Zm,"users",r);return TC(i,s=>{s.exists()&&e(s.data())},s=>{console.error("Erro no listener em tempo real do Firestore:",s)})}function IC({profile:r,onUpdateProfile:e,profileHistory:i,onClearProfileHistory:s,theme:l,onToggleTheme:c,googleSyncSettings:h,onUpdateGoogleSyncSettings:p,onSync:y,workoutData:_,history:T,onImportBackup:N,onClearHistory:z,onResetDefaultWorkout:G,onForcePush:D,syncProps:J}){const $=l==="dark"?"#ADFF2F":"#008A47",ae=r.secondaryColor||$,W=!r.secondaryColor||ae.toLowerCase()==="#adff2f"||ae.toLowerCase()==="#008a47",[me,ge]=le.useState(r.name||""),[Ce,xe]=le.useState(r.weight||""),[w,A]=le.useState(r.targetWeight||""),[C,k]=le.useState(r.height||""),[O,S]=le.useState(W?$:ae),[R,be]=le.useState(!1),[he,L]=le.useState(!1),[B,se]=le.useState(""),[Re,Ne]=le.useState(!1),[j,M]=le.useState(!1),Q=le.useRef(null),fe=()=>{const ee=window.prompt(`ATENÇÃO: Esta ação apaga permanentemente todo o seu histórico de pesagens.

Para confirmar a exclusão, digite "deletar" abaixo:`);ee&&ee.trim().toLowerCase()==="deletar"?(s(),alert("Histórico de pesagens apagado com sucesso.")):ee!==null&&alert('Exclusão cancelada. A palavra digitada deve ser exatamente "deletar".')},K=()=>{const ee=window.prompt(`ATENÇÃO: Esta ação apaga permanentemente todo o seu histórico de treinos salvos.

Para confirmar a exclusão, digite "deletar" abaixo:`);ee&&ee.trim().toLowerCase()==="deletar"?(z(),alert("Histórico de treinos apagado com sucesso.")):ee!==null&&alert('Exclusão cancelada. A palavra digitada deve ser exatamente "deletar".')};le.useEffect(()=>{ge(r.name||""),xe(r.weight||""),A(r.targetWeight||""),k(r.height||"");const ee=r.secondaryColor||$,we=!r.secondaryColor||ee.toLowerCase()==="#adff2f"||ee.toLowerCase()==="#008a47";S(we?$:ee)},[r,l,$]);const Z=parseFloat(C)/100,de=parseFloat(Ce),ve=Z>0&&de>0?(de/(Z*Z)).toFixed(1):null;let Te="",Ye="";if(ve){const ee=parseFloat(ve);ee<18.5?(Te="Abaixo do peso",Ye="warning"):ee<25?(Te="Peso Normal",Ye="success"):ee<30?(Te="Sobrepeso",Ye="warning"):(Te="Obesidade",Ye="error")}const Fe=ee=>{S(ee),Q0(ee,l),e({...r,name:me,weight:Ce?parseFloat(Ce):"",targetWeight:w?parseFloat(w):"",height:C?parseFloat(C):"",secondaryColor:ee})},Rt=()=>{Fe($)},yt=ee=>{ee.preventDefault(),e({name:me,weight:Ce?parseFloat(Ce):"",targetWeight:w?parseFloat(w):"",height:C?parseFloat(C):"",secondaryColor:O}),alert("Perfil atualizado com sucesso!")},tt=async()=>{be(!0),se(""),Ne(!1);try{const ee=await gx();if(ee.success&&ee.user){const we=ee.user;p({connected:!0,email:we.email||"",userName:we.displayName||"",picture:we.photoURL||"",uid:we.uid});const ke=(we.displayName||"").split(" ")[0];ke&&(!r.name||r.name==="Wagner")&&e({...r,name:ke}),Ne(!0)}else se("Falha ao entrar com o Google: "+(ee.error||"Erro desconhecido"))}catch(ee){console.error("Connection setup error:",ee),se("Erro ao conectar com o Firebase: "+ee.message)}finally{be(!1)}},It=async()=>{window.confirm("Deseja realmente desconectar sua conta da nuvem? Os dados locais continuarão salvos no aparelho.")&&(await RC(),p({connected:!1,email:"",userName:"",picture:"",uid:""}),Ne(!1))},bn=async()=>{if(h.connected){L(!0),se(""),Ne(!1);try{await y(),Ne(!0),setTimeout(()=>Ne(!1),4e3),alert("Sucesso! Os seus dados foram sincronizados em tempo real com a nuvem.")}catch(ee){se("Erro na sincronização: "+ee.message)}finally{L(!1)}}},ne=()=>{const ee={kademia_workout_data:_,kademia_history:T,kademia_profile:{...r,name:me,weight:Ce?parseFloat(Ce):"",targetWeight:w?parseFloat(w):"",height:C?parseFloat(C):"",secondaryColor:O},kademia_profile_history:i,exportedAt:new Date().toISOString(),version:"1.2.0"},we=JSON.stringify(ee,null,2),ke=new Blob([we],{type:"application/json"}),st=URL.createObjectURL(ke),Le=document.createElement("a");Le.href=st,Le.download=`kademia_backup_${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(Le),Le.click(),document.body.removeChild(Le),URL.revokeObjectURL(st)},ue=ee=>{var st;const we=(st=ee.target.files)==null?void 0:st[0];if(!we)return;const ke=new FileReader;ke.onload=async Le=>{try{const ut=JSON.parse(Le.target.result);window.confirm("Deseja importar este arquivo de backup JSON? Os dados serão mesclados com a sua conta.")&&await N(ut)}catch(ut){alert("Erro ao processar o arquivo de backup: "+ut.message)}},ke.readAsText(we),ee.target.value=""},ye=()=>{const ee=i.filter(Ct=>Ct.weight).sort((Ct,dn)=>new Date(Ct.date)-new Date(dn.date));if(ee.length<2)return m.jsxs("div",{className:"chart-empty-state",children:[m.jsx(om,{size:20}),m.jsx("span",{children:"Registre pelo menos 2 pesagens no seu perfil para visualizar o gráfico de evolução."})]});const we=ee.map(Ct=>Ct.weight),ke=parseFloat(w);ke&&we.push(ke);const st=Math.min(...we)-1,Le=Math.max(...we)+1,ut=340,bt=140,ot=20,xn=Ct=>ee.length===1?ut/2:ot+Ct/(ee.length-1)*(ut-2*ot),Mn=Ct=>Le===st?bt/2:bt-ot-(Ct-st)/(Le-st)*(bt-2*ot),si=ee.map((Ct,dn)=>`${xn(dn)},${Mn(Ct.weight)}`).join(" "),wt=ke&&ke>=st&&ke<=Le?Mn(ke):null;return m.jsx("div",{className:"svg-chart-container",children:m.jsxs("svg",{viewBox:`0 0 ${ut} ${bt}`,className:"weight-svg",children:[wt!==null&&m.jsxs("g",{children:[m.jsx("line",{x1:ot,y1:wt,x2:ut-ot,y2:wt,stroke:"var(--color-text-muted)",strokeWidth:"1.5",strokeDasharray:"4 4"}),m.jsxs("text",{x:ut-ot,y:wt-4,fill:"var(--color-text-muted)",fontSize:"9",textAnchor:"end",fontWeight:"600",children:["Meta: ",ke,"kg"]})]}),m.jsx("polyline",{fill:"none",stroke:O||$,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",points:si}),ee.map((Ct,dn)=>m.jsxs("g",{children:[m.jsx("circle",{cx:xn(dn),cy:Mn(Ct.weight),r:"5",fill:O||$,stroke:"var(--bg-secondary)",strokeWidth:"2"}),m.jsxs("text",{x:xn(dn),y:Mn(Ct.weight)-10,fill:"var(--color-text-secondary)",fontSize:"10",textAnchor:"middle",fontWeight:"600",children:[Ct.weight,"kg"]})]},dn))]})})};return m.jsxs("div",{className:"settings-container animate-fade-in",children:[m.jsxs("div",{className:"settings-header",children:[m.jsx("h2",{className:"settings-page-title",children:"Ajustes & Perfil"}),m.jsx("p",{className:"settings-page-subtitle",children:"Personalize suas metas, dados biométricos e conta."})]}),m.jsxs("section",{className:"settings-section glass",children:[m.jsx("h3",{className:"section-title",children:"Dados Pessoais & Biometria"}),m.jsxs("form",{onSubmit:yt,className:"profile-form",children:[m.jsxs("div",{className:"form-grid",children:[m.jsxs("div",{className:"input-group",children:[m.jsx("label",{children:"Nome do Atleta"}),m.jsx("input",{type:"text",value:me,onChange:ee=>ge(ee.target.value),placeholder:"Ex: Wagner",required:!0})]}),m.jsxs("div",{className:"input-group",children:[m.jsx("label",{children:"Peso Atual (kg)"}),m.jsx("input",{type:"number",step:"0.1",value:Ce,onChange:ee=>xe(ee.target.value),placeholder:"Ex: 78.5"})]}),m.jsxs("div",{className:"input-group",children:[m.jsx("label",{children:"Meta de Peso (kg)"}),m.jsx("input",{type:"number",step:"0.1",value:w,onChange:ee=>A(ee.target.value),placeholder:"Ex: 80.0"})]}),m.jsxs("div",{className:"input-group",children:[m.jsx("label",{children:"Altura (cm)"}),m.jsx("input",{type:"number",value:C,onChange:ee=>k(ee.target.value),placeholder:"Ex: 175"})]})]}),ve&&m.jsxs("div",{className:"biometrics-summary-box",children:[m.jsxs("div",{className:"biometrics-item",children:[m.jsx("span",{className:"biometrics-label",children:"Índice de Massa Corporal (IMC)"}),m.jsxs("div",{className:"biometrics-value-row",children:[m.jsx("span",{className:"biometrics-value",children:ve}),m.jsx("span",{className:`imc-pill-badge ${Ye}`,children:Te})]})]}),w&&Ce&&m.jsxs("div",{className:"biometrics-item",children:[m.jsx("span",{className:"biometrics-label",children:"Objetivo Corporal"}),m.jsxs("div",{className:"biometrics-value-row",children:[m.jsxs("span",{className:"biometrics-value",children:[Math.abs(parseFloat(w)-parseFloat(Ce)).toFixed(1)," kg"]}),m.jsx("span",{className:"imc-pill-badge success",children:parseFloat(Ce)<parseFloat(w)?"Faltam p/ meta":"A eliminar"})]})]})]}),m.jsxs("button",{type:"submit",className:"btn btn-lime submit-profile-btn",style:{marginTop:"20px"},children:[m.jsx(Mf,{size:18})," Salvar Alterações"]})]})]}),i.filter(ee=>ee.weight).length>0&&m.jsxs("section",{className:"settings-section glass",children:[m.jsx("h3",{className:"section-title",children:"Evolução de Peso Corporal"}),m.jsxs("div",{className:"evolution-chart-box",style:{marginTop:"12px"},children:[ye(),m.jsxs("div",{className:"history-table-wrapper",children:[m.jsxs("table",{className:"history-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Data"}),m.jsx("th",{children:"Peso"})]})}),m.jsx("tbody",{children:[...i].filter(ee=>ee.weight).reverse().slice(0,5).map((ee,we)=>m.jsxs("tr",{children:[m.jsx("td",{children:new Date(ee.date).toLocaleDateString("pt-BR")}),m.jsxs("td",{children:[ee.weight," kg"]})]},we))})]}),i.filter(ee=>ee.weight).length>5&&m.jsx("div",{className:"table-more-info",children:"Exibindo as últimas 5 pesagens"})]})]})]}),m.jsxs("section",{className:"settings-section glass",children:[m.jsxs("div",{className:"section-header-row",children:[m.jsx("h3",{className:"section-title",children:"Conta & Sincronização"}),h.connected?m.jsxs("span",{className:"badge-status connected",children:[m.jsx("span",{className:"status-dot pulsing"})," Conectado"]}):m.jsx("span",{className:"badge-status disconnected",children:"Desconectado"})]}),B&&m.jsx("div",{className:"sync-banner error",children:B}),Re&&m.jsx("div",{className:"sync-banner success",children:"Sincronização concluída com sucesso!"}),h.connected?m.jsxs("div",{className:"sync-connected-flow",children:[m.jsxs("div",{className:"user-profile-sync",children:[h.picture?m.jsx("img",{src:h.picture,alt:"Avatar",className:"user-sync-avatar"}):m.jsx("div",{className:"user-sync-avatar-fallback",children:m.jsx(Mf,{size:24})}),m.jsxs("div",{className:"user-sync-details",children:[m.jsx("span",{className:"user-sync-name",children:h.userName||"Usuário Conectado"}),m.jsx("span",{className:"user-sync-email",children:h.email})]})]}),m.jsxs("div",{className:"sync-actions-grid",style:{gridTemplateColumns:"1fr auto"},children:[m.jsxs("button",{type:"button",className:"btn btn-lime full-sync-btn",onClick:bn,disabled:he,children:[m.jsx(Vf,{size:18,className:he?"spinner-animation":""}),he?"Sincronizando...":"Sincronizar Agora"]}),m.jsx("button",{type:"button",className:"btn btn-danger disconnect-btn",onClick:It,children:"Sair da Conta"})]})]}):m.jsxs("div",{className:"sync-connect-flow",children:[m.jsx("p",{className:"sync-info-text",children:"Conecte sua conta do Google para salvar e sincronizar automaticamente suas fichas, cargas e histórico de treinos na nuvem."}),m.jsxs("button",{type:"button",className:"btn btn-primary start-sync-btn",onClick:tt,disabled:R,style:{marginTop:"16px"},children:[m.jsx(Vf,{size:18,className:R?"spinner-animation":""}),R?"Conectando...":"Conectar Conta Google"]})]})]}),m.jsxs("section",{className:"settings-section glass",children:[m.jsx("h3",{className:"section-title",children:"Aparência & Interface"}),m.jsxs("div",{className:"theme-toggle-row",style:{marginBottom:"20px"},children:[m.jsxs("span",{children:["Modo ",l==="dark"?"Escuro":"Claro"," Ativo"]}),m.jsx("button",{type:"button",className:"btn btn-secondary theme-toggle-pill",onClick:c,children:l==="dark"?m.jsxs(m.Fragment,{children:[m.jsx(W0,{size:18})," Modo Claro"]}):m.jsxs(m.Fragment,{children:[m.jsx(J0,{size:18})," Modo Escuro"]})})]}),m.jsxs("div",{className:"color-scheme-picker",children:[m.jsxs("div",{className:"label-with-reset",children:[m.jsxs("label",{children:[m.jsx(dE,{size:16})," Cor Secundária do App"]}),!W&&m.jsx("button",{type:"button",className:"btn-reset-color",onClick:Rt,children:"Restaurar Padrão"})]}),m.jsxs("div",{className:"color-swatches-grid",children:[[{name:"Verde Esportivo",hex:$},{name:"Azul Neon",hex:"#3B82F6"},{name:"Roxo Tech",hex:"#8B5CF6"},{name:"Laranja Energia",hex:"#F97316"},{name:"Rosa Vibrante",hex:"#EC4899"}].map(ee=>{const we=O.toLowerCase()===ee.hex.toLowerCase()||ee.name==="Verde Esportivo"&&W;return m.jsx("button",{type:"button",className:`color-swatch-btn ${we?"active":""}`,style:{backgroundColor:ee.hex},onClick:()=>Fe(ee.hex),title:ee.name,children:we&&m.jsx(Sl,{size:16,className:"color-swatch-check"})},ee.hex)}),(()=>{const we=!W&&![$,"#ADFF2F","#008A47","#3B82F6","#8B5CF6","#F97316","#EC4899"].map(ke=>ke.toLowerCase()).includes(O.toLowerCase());return m.jsxs("div",{className:`custom-color-wrapper ${we?"active":""}`,title:"Escolher cor personalizada",children:[m.jsx("div",{className:"custom-color-inner",style:{backgroundColor:we?O:"transparent"},children:we&&m.jsx(Sl,{size:16,className:"color-swatch-check"})}),m.jsx("input",{type:"color",value:O||$,onInput:ke=>Fe(ke.target.value),onChange:ke=>Fe(ke.target.value),className:"custom-color-input"})]})})()]})]})]}),m.jsxs("section",{className:"settings-section glass advanced-section",children:[m.jsxs("button",{type:"button",className:"advanced-toggle-btn",onClick:()=>M(!j),children:[m.jsxs("div",{className:"advanced-title-group",children:[m.jsx("h3",{className:"section-title",children:"Avançado"}),m.jsx("span",{className:"advanced-subtitle",children:"Backup manual e exclusão de histórico"})]}),m.jsx("span",{className:`advanced-chevron ${j?"open":""}`,children:j?"▲":"▼"})]}),j&&m.jsxs("div",{className:"advanced-content animate-slide-up",style:{marginTop:"16px"},children:[m.jsxs("div",{className:"advanced-subcard",children:[m.jsx("h4",{className:"advanced-subcard-title",children:"Backup Local (JSON)"}),m.jsx("p",{className:"sync-info-text",style:{marginBottom:"12px",marginTop:"4px"},children:"Exporte ou importe um arquivo de cópia de segurança física dos seus dados."}),m.jsxs("div",{className:"backup-actions-grid",style:{display:"flex",gap:"8px"},children:[m.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:ne,style:{justifyContent:"center",fontSize:"0.8rem",padding:"8px 12px",flex:1},children:[m.jsx(Z0,{size:14})," Exportar JSON"]}),m.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>{var ee;return(ee=Q.current)==null?void 0:ee.click()},style:{justifyContent:"center",fontSize:"0.8rem",padding:"8px 12px",flex:1},children:[m.jsx(hE,{size:14})," Importar JSON"]}),m.jsx("input",{type:"file",accept:".json",ref:Q,onChange:ue,style:{display:"none"}})]})]}),m.jsxs("div",{className:"advanced-subcard danger-zone-subcard",style:{marginTop:"20px"},children:[m.jsx("h4",{className:"advanced-subcard-title text-danger",children:"Zona de Perigo"}),m.jsxs("p",{className:"sync-info-text",style:{marginBottom:"14px",marginTop:"6px"},children:["Exclusão irreversível de dados. Requer digitação da palavra ",m.jsx("strong",{children:"deletar"}),"."]}),m.jsxs("div",{className:"danger-actions-column",style:{display:"flex",flexDirection:"column",gap:"10px"},children:[m.jsx("button",{type:"button",className:"btn btn-danger danger-btn",onClick:fe,children:"Limpar Histórico de Pesagens"}),m.jsx("button",{type:"button",className:"btn btn-danger danger-btn",onClick:K,children:"Limpar Histórico de Treinos"})]})]})]})]}),m.jsx("style",{children:`
        .advanced-toggle-btn {
          width: 100%;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0;
          cursor: pointer;
          color: inherit;
          text-align: left;
        }

        .advanced-title-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .advanced-subtitle {
          font-size: 0.78rem;
          color: var(--color-text-secondary);
        }

        .advanced-chevron {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          transition: transform 0.2s ease;
        }

        .advanced-subcard {
          padding: 14px;
          border-radius: 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
        }

        .advanced-subcard-title {
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0;
        }

        .text-danger {
          color: var(--status-error);
        }
      `})]})}function DC({theme:r,onToggleTheme:e,onUpdateProfile:i,profile:s,onLoginSuccess:l}){const[c,h]=le.useState(!1),[p,y]=le.useState(""),_=async()=>{h(!0),y("");try{const T=await gx();if(T.success&&T.user){const N=T.user,G=(N.displayName||"").split(" ")[0];G&&(!(s!=null&&s.name)||(s==null?void 0:s.name)==="Wagner")&&i({...s,name:G}),l&&l(N)}else y("Falha ao entrar com o Google: "+(T.error||"Erro desconhecido"))}catch(T){console.error("Erro no login Firebase Google:",T),y("Erro de autenticação: "+T.message)}finally{h(!1)}};return m.jsxs("div",{className:"login-screen-container animate-fade-in",children:[m.jsx("button",{type:"button",className:"theme-toggle-btn",onClick:e,children:r==="dark"?m.jsx(W0,{size:20}):m.jsx(J0,{size:20})}),m.jsxs("div",{className:"login-card glass animate-slide-up",children:[m.jsxs("div",{className:"login-logo-wrapper",children:[m.jsx("div",{className:"login-logo-circle",children:m.jsx(Qs,{size:36,className:"login-logo-icon"})}),m.jsxs("h1",{className:"login-title",children:["Kadem",m.jsx("span",{children:"IA"})]}),m.jsx("p",{className:"login-subtitle",children:"Seu treino, no seu ritmo."})]}),m.jsx("p",{className:"login-description",children:"Conecte-se com sua conta Google para salvar e sincronizar automaticamente suas fichas, cargas e histórico de treinos na nuvem."}),p&&m.jsx("div",{className:"login-error-banner",children:p}),m.jsx("div",{className:"login-form-area",children:m.jsx("button",{type:"button",className:"btn btn-primary login-connect-btn",onClick:_,disabled:c,children:c?m.jsxs(m.Fragment,{children:[m.jsx(Vf,{size:18,className:"spinner-animation"}),"Conectando..."]}):m.jsxs(m.Fragment,{children:[m.jsxs("svg",{className:"google-logo-svg",width:"18",height:"18",viewBox:"0 0 24 24",children:[m.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),m.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),m.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),m.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Entrar com o Google"]})})})]}),m.jsx("style",{children:`
        .login-screen-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: var(--bg-primary);
          position: relative;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 28px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .login-logo-wrapper {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .login-logo-circle {
          width: 64px;
          height: 64px;
          border-radius: 20px;
          background-color: var(--accent-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .login-logo-icon {
          color: var(--color-on-accent);
        }

        .login-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-text-primary);
          line-height: 1;
        }

        .login-title span {
          color: var(--accent-purple);
        }

        .login-subtitle {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          margin-top: 4px;
          font-weight: 500;
        }

        .login-description {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .login-error-banner {
          width: 100%;
          padding: 10px 14px;
          background: var(--status-error-glow);
          border: 1px solid var(--status-error);
          color: var(--status-error);
          border-radius: 12px;
          font-size: 0.82rem;
          margin-bottom: 16px;
          text-align: left;
        }

        .login-form-area {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .login-connect-btn {
          width: 100%;
          padding: 14px;
          font-size: 1rem;
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .google-logo-svg {
          flex-shrink: 0;
          background: white;
          border-radius: 50%;
          padding: 2px;
        }
      `})]})}function yx(r){if(!Array.isArray(r))return[];const e=s=>{if(!s)return"";if(s.id)return String(s.id);if(!s.date)return"";try{const l=new Date(s.date);return l.setMilliseconds(0),l.toISOString()}catch{return String(s.date)}},i={};return r.forEach(s=>{if(!s)return;const l=e(s)||Math.random().toString();if(!i[l])i[l]={...s,exercises:Array.isArray(s.exercises)?s.exercises.map(c=>{if(!c)return c;const h=new Set,p=[];return Array.isArray(c.setsData)&&c.setsData.forEach(y=>{const _=parseInt(y.setNum)||1;h.has(_)||(h.add(_),p.push(y))}),{...c,setsData:p}}):[]};else{const c=i[l];Array.isArray(s.exercises)&&s.exercises.forEach(h=>{if(!h)return;let p=c.exercises.find(y=>y.name===h.name);p||(p={name:h.name,sets:h.sets,setsData:[]},c.exercises.push(p)),Array.isArray(h.setsData)&&h.setsData.forEach(y=>{const _=parseInt(y.setNum)||1;p.setsData.some(N=>(parseInt(N.setNum)||1)===_)||p.setsData.push(y)})})}}),Object.values(i).sort((s,l)=>new Date(l.date)-new Date(s.date))}function vx(r){if(!Array.isArray(r))return[];const e=s=>{if(!s)return"";try{const l=new Date(s);return l.setMilliseconds(0),l.toISOString()}catch{return s}},i={};return r.forEach(s=>{if(!s||s.weight===void 0||s.weight===null||s.weight==="")return;const l=e(s.date);i[l]||(i[l]=s)}),Object.values(i).sort((s,l)=>new Date(s.date)-new Date(l.date))}function fl(r,e){const i=Array.isArray(r)?r:[],s=Array.isArray(e)?e:[];return yx([...i,...s])}function ml(r,e){const i=Array.isArray(r)?r:[],s=Array.isArray(e)?e:[];return vx([...i,...s])}function Ju(r){return!r||!Array.isArray(r.routines)?ar:r}function jf(r,e){const i=Ju(r);if(!e)return i;const s=Ju(e);if(!r)return s;const l=i.lastUpdated?new Date(i.lastUpdated).getTime():0;return(s.lastUpdated?new Date(s.lastUpdated).getTime():0)>=l?s:i}function kC(){const[r,e]=le.useState(()=>localStorage.getItem("kademia_theme")||"dark"),[i,s]=le.useState(()=>{try{const ne=localStorage.getItem("kademia_workout_data");return ne?JSON.parse(ne):ar}catch{return ar}}),[l,c]=le.useState(()=>{try{const ne=["kademia_history","gymrot_history","fittrack_history","gymwag_history","history"];let ue=[];ne.forEach(ee=>{const we=localStorage.getItem(ee);if(we)try{const ke=JSON.parse(we);Array.isArray(ke)&&(ue=[...ue,...ke])}catch{}});const ye=yx(ue);return ye.length>0&&localStorage.setItem("kademia_history",JSON.stringify(ye)),localStorage.removeItem("gymrot_history"),localStorage.removeItem("fittrack_history"),localStorage.removeItem("gymwag_history"),localStorage.removeItem("gymrot_workout_data"),localStorage.removeItem("fittrack_workout_data"),ye}catch{return[]}}),[h,p]=le.useState(()=>{try{const ne=localStorage.getItem("kademia_profile"),ue=r==="dark"?"#ADFF2F":"#008A47",ye=localStorage.getItem("kademia_secondary_color");if(ne){const ee=JSON.parse(ne);return!ee.secondaryColor&&ye&&(ee.secondaryColor=ye),ee}return{name:"Wagner",weight:78.5,height:175,secondaryColor:localStorage.getItem("kademia_secondary_color")||""}}catch{return{name:"Wagner",weight:78.5,height:175,secondaryColor:""}}}),[y,_]=le.useState(()=>{try{const ne=["kademia_profile_history","gymrot_profile_history","fittrack_profile_history","gymwag_profile_history","profile_history"];let ue=[];ne.forEach(ee=>{const we=localStorage.getItem(ee);if(we)try{const ke=JSON.parse(we);Array.isArray(ke)&&(ue=[...ue,...ke])}catch{}});const ye=vx(ue);return ye.length>0&&localStorage.setItem("kademia_profile_history",JSON.stringify(ye)),localStorage.removeItem("gymrot_profile_history"),localStorage.removeItem("fittrack_profile_history"),localStorage.removeItem("gymwag_profile_history"),ye}catch{return[]}}),T=r==="dark"?"#ADFF2F":"#008A47",N=(h==null?void 0:h.secondaryColor)||localStorage.getItem("kademia_secondary_color")||T,G=N.toLowerCase()==="#adff2f"||N.toLowerCase()==="#008a47"?T:N;le.useEffect(()=>{Q0(G,r)},[G,r]);const[D,J]=le.useState(()=>{try{const ne=localStorage.getItem("kademia_google_sync");return ne?JSON.parse(ne):{connected:!1}}catch{return{connected:!1}}}),[$,ae]=le.useState(()=>localStorage.getItem("kademia_sync_status")||"synced"),[W,me]=le.useState(()=>localStorage.getItem("kademia_last_sync_time")||""),[ge,Ce]=le.useState(navigator.onLine),[xe,w]=le.useState(()=>sessionStorage.getItem("kademia_session_entered")==="true"),[A,C]=le.useState("dashboard"),[k,O]=le.useState(()=>{try{const ne=localStorage.getItem("kademia_active_routine");return ne?JSON.parse(ne):null}catch{return null}}),[S,R]=le.useState(null),[be,he]=le.useState(!1),L=le.useRef(!1),B=le.useRef(!1),se=le.useRef({googleSyncSettings:D,workoutData:i,history:l,profile:h,profileHistory:y});le.useEffect(()=>{se.current={googleSyncSettings:D,workoutData:i,history:l,profile:h,profileHistory:y}}),le.useEffect(()=>{r==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme"),localStorage.setItem("kademia_theme",r)},[r]);const Re=()=>{e(ne=>{const ue=ne==="dark"?"light":"dark",ye=ue==="dark"?"#ADFF2F":"#008A47",ee=(h==null?void 0:h.secondaryColor)||localStorage.getItem("kademia_secondary_color");if(!ee||ee.toLowerCase()==="#adff2f"||ee.toLowerCase()==="#008a47"){p(ke=>({...ke,secondaryColor:ye}));try{localStorage.setItem("kademia_secondary_color",ye)}catch{}}return ue})};le.useEffect(()=>{const ne=ye=>{ye.preventDefault(),R(ye),window.deferredPrompt=ye},ue=ye=>{R(ye.detail)};return window.addEventListener("beforeinstallprompt",ne),window.addEventListener("pwa-prompt-available",ue),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/KademIA/sw.js").then(ye=>{console.log("Service Worker registrado com sucesso:",ye.scope)}).catch(ye=>{console.log("Falha ao registrar o Service Worker:",ye)})}),()=>{window.removeEventListener("beforeinstallprompt",ne),window.removeEventListener("pwa-prompt-available",ue)}},[]),le.useEffect(()=>{AC().catch(ue=>console.error("Erro no checkRedirectResult:",ue));const ne=CC(async ue=>{if(ue){J({connected:!0,email:ue.email||"",userName:ue.displayName||"",picture:ue.photoURL||"",uid:ue.uid});try{const ye=await G0(ue.uid);let ee=se.current.history||[],we=se.current.profileHistory||[],ke=se.current.profile||{},st=se.current.workoutData||ar;try{const wt=localStorage.getItem("kademia_history");wt&&(ee=fl(ee,JSON.parse(wt)))}catch{}try{const wt=localStorage.getItem("kademia_profile_history");wt&&(we=ml(we,JSON.parse(wt)))}catch{}try{const wt=localStorage.getItem("kademia_profile");wt&&(ke={...ke,...JSON.parse(wt)})}catch{}try{const wt=localStorage.getItem("kademia_workout_data");wt&&(st=Ju(JSON.parse(wt)))}catch{}const Le=(ye==null?void 0:ye.history)||[],ut=fl(ee,Le),bt=(ye==null?void 0:ye.profileHistory)||[],ot=ml(we,bt),xn=(ye==null?void 0:ye.profile)||{},Mn={...ke,...xn},si=jf(st,ye==null?void 0:ye.workoutData);B.current=!0,c(ut),_(ot),p(Mn),s(si),localStorage.setItem("kademia_history",JSON.stringify(ut)),localStorage.setItem("kademia_profile_history",JSON.stringify(ot)),localStorage.setItem("kademia_profile",JSON.stringify(Mn)),localStorage.setItem("kademia_workout_data",JSON.stringify(si)),L.current=!0,setTimeout(()=>{B.current=!1},100),await gn(ue.uid,{workoutData:si,history:ut,profile:Mn,profileHistory:ot}),console.log(`✅ Sincronização automática de login concluída! ${ut.length} treinos no histórico e ${ot.length} pesagens ativas.`)}catch(ye){console.error("Erro ao sincronizar Firestore ao autenticar:",ye)}}else J({connected:!1})});return()=>ne()},[]),le.useEffect(()=>{if(!D.connected||!D.uid)return;const ne=NC(D.uid,ue=>{if(!ue)return;B.current=!0,ue.workoutData&&s(ee=>jf(ee,ue.workoutData)),ue.history&&c(ee=>fl(ee,ue.history)),ue.profile&&p(ee=>({...ee,...ue.profile})),ue.profileHistory&&_(ee=>ml(ee,ue.profileHistory)),L.current=!0,ae("synced");const ye=new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"});me(ye),setTimeout(()=>{B.current=!1},100)});return()=>ne()},[D.connected,D.uid]);const Ne=async ne=>{if(!(!D.connected||!D.uid)){ae("syncing"),localStorage.setItem("kademia_sync_status","syncing");try{if(!navigator.onLine)throw new Error("offline");await ne(),ae("synced"),localStorage.setItem("kademia_sync_status","synced");const ue=new Date().toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"});me(ue),localStorage.setItem("kademia_last_sync_time",ue)}catch(ue){console.error("Erro na sincronização Firestore:",ue);const ee=!navigator.onLine||ue.message==="offline"||ue.message.includes("Failed to fetch")||ue.message.includes("NetworkError")?"pending":"error";ae(ee),localStorage.setItem("kademia_sync_status",ee)}}};le.useEffect(()=>{const ne=()=>{Ce(!0),D.connected&&D.uid&&ve()},ue=()=>{Ce(!1)},ye=()=>{D.connected&&D.uid&&(console.log("🔄 Foco na janela: Verificando sincronização com a nuvem..."),ve())};return window.addEventListener("online",ne),window.addEventListener("offline",ue),window.addEventListener("focus",ye),()=>{window.removeEventListener("online",ne),window.removeEventListener("offline",ue),window.removeEventListener("focus",ye)}},[D.connected,D.uid]);const j=le.useRef({activeTab:A,activeWorkoutRoutine:k});le.useEffect(()=>{j.current={activeTab:A,activeWorkoutRoutine:k}},[A,k]),le.useEffect(()=>{if(!xe||!D.connected)return;window.history.pushState({noBackExits:!0},"");let ne=0,ue=null;const ye=()=>{const ee=j.current.activeTab;if(j.current.activeWorkoutRoutine){window.history.pushState({noBackExits:!0},""),window.confirm("Deseja realmente cancelar este treino? Os dados digitados serão perdidos.")&&(O(null),C("dashboard"));return}if(ee!=="dashboard"){window.history.pushState({noBackExits:!0},""),C("dashboard");return}const ke=Date.now();ke-ne<2e3?window.history.go(-2):(ne=ke,window.history.pushState({noBackExits:!0},""),he(!0),clearTimeout(ue),ue=setTimeout(()=>{he(!1)},2e3))};return window.addEventListener("popstate",ye),()=>{window.removeEventListener("popstate",ye),clearTimeout(ue)}},[xe,D.connected]),le.useEffect(()=>{if(localStorage.setItem("kademia_workout_data",JSON.stringify(i)),D.connected&&D.uid&&L.current&&!B.current){const ne=setTimeout(()=>{B.current||gn(D.uid,{workoutData:i})},1500);return()=>clearTimeout(ne)}},[i,D.connected,D.uid]),le.useEffect(()=>{if(localStorage.setItem("kademia_history",JSON.stringify(l)),D.connected&&D.uid&&L.current&&!B.current){const ne=setTimeout(()=>{B.current||gn(D.uid,{history:l})},1500);return()=>clearTimeout(ne)}},[l,D.connected,D.uid]),le.useEffect(()=>{if(localStorage.setItem("kademia_profile",JSON.stringify(h)),D.connected&&D.uid&&L.current&&!B.current){const ne=setTimeout(()=>{B.current||gn(D.uid,{profile:h})},1500);return()=>clearTimeout(ne)}},[h,D.connected,D.uid]),le.useEffect(()=>{if(localStorage.setItem("kademia_profile_history",JSON.stringify(y)),D.connected&&D.uid&&L.current&&!B.current){const ne=setTimeout(()=>{B.current||gn(D.uid,{profileHistory:y})},1500);return()=>clearTimeout(ne)}},[y,D.connected,D.uid]),le.useEffect(()=>{const ne=()=>{D.connected&&D.uid&&L.current&&!B.current&&gn(D.uid,{workoutData:se.current.workoutData,history:se.current.history,profile:se.current.profile,profileHistory:se.current.profileHistory})},ue=()=>{document.visibilityState==="hidden"&&ne()};return window.addEventListener("beforeunload",ne),document.addEventListener("visibilitychange",ue),()=>{window.removeEventListener("beforeunload",ne),document.removeEventListener("visibilitychange",ue)}},[D.connected,D.uid]),le.useEffect(()=>{localStorage.setItem("kademia_google_sync",JSON.stringify(D))},[D]),le.useEffect(()=>{k?localStorage.setItem("kademia_active_routine",JSON.stringify(k)):localStorage.removeItem("kademia_active_routine")},[k]);const M=async ne=>{const ue=ne.weight!==""&&ne.weight!==void 0&&ne.weight!==null,ye=ue&&ne.weight!==h.weight,ee=ne.height!==h.height&&ne.height!==""&&ne.height!==void 0&&ne.height!==null;let we=[...y];ue&&(ye||ee)&&(we.push({date:new Date().toISOString(),name:ne.name,weight:ne.weight,height:ne.height}),_(we)),p(ne),D.connected&&D.uid&&gn(D.uid,{profile:ne,profileHistory:we})},Q=ne=>{J(ne)},fe=()=>{_([]),D.connected&&D.uid&&gn(D.uid,{profileHistory:[]})},K=async ne=>{let ue=i,ye=l,ee=h,we=y;const ke=ne.kademia_workout_data||ne.workoutData;ke&&(ue=Ju(ke),s(ue),localStorage.setItem("kademia_workout_data",JSON.stringify(ue)));const st=ne.kademia_history||ne.history;st&&Array.isArray(st)&&(ye=fl(l,st),c(ye),localStorage.setItem("kademia_history",JSON.stringify(ye)));const Le=ne.kademia_profile||ne.profile;Le&&(ee={...h,...Le},p(ee),localStorage.setItem("kademia_profile",JSON.stringify(ee)));const ut=ne.kademia_profile_history||ne.profileHistory;ut&&Array.isArray(ut)&&(we=ml(y,ut),_(we),localStorage.setItem("kademia_profile_history",JSON.stringify(we))),alert(`Backup importado e mesclado com sucesso! (${ye.length} treinos no histórico e ${we.length} pesagens).`),D.connected&&D.uid&&await gn(D.uid,{workoutData:ue,history:ye,profile:ee,profileHistory:we})},Z=ne=>{let ue;s(ye=>(ue={...typeof ne=="function"?ne(ye):ne,lastUpdated:new Date().toISOString()},ue)),L.current=!0,D.connected&&D.uid&&Ne(()=>gn(D.uid,{workoutData:ue}))},de=async()=>{window.confirm("Deseja restaurar as fichas para a versão oficial (Ficha ABCD Otimizada - com treino B isolado de Ombros & Core)? As fichas serão atualizadas no seu aparelho e na nuvem imediatamente (seu histórico de treinos salvos NÃO será afetado).")&&(s(ar),localStorage.setItem("kademia_workout_data",JSON.stringify(ar)),D.connected&&D.uid&&await gn(D.uid,{workoutData:ar}),alert("Ficha ABCD Otimizada restaurada e sincronizada com a nuvem com sucesso!"))},ve=async()=>{!D.connected||!D.uid||await Ne(async()=>{const ne=await G0(D.uid),ue=se.current.history||[],ye=(ne==null?void 0:ne.history)||[],ee=fl(ue,ye),we=se.current.profileHistory||[],ke=(ne==null?void 0:ne.profileHistory)||[],st=ml(we,ke),Le={...se.current.profile||{},...(ne==null?void 0:ne.profile)||{}},ut=jf(se.current.workoutData,ne==null?void 0:ne.workoutData);B.current=!0,c(ee),_(st),p(Le),s(ut),L.current=!0,setTimeout(()=>{B.current=!1},100),localStorage.setItem("kademia_history",JSON.stringify(ee)),localStorage.setItem("kademia_profile_history",JSON.stringify(st)),localStorage.setItem("kademia_profile",JSON.stringify(Le)),localStorage.setItem("kademia_workout_data",JSON.stringify(ut)),await gn(D.uid,{workoutData:ut,history:ee,profile:Le,profileHistory:st})})},Te=async()=>{if(!D.connected||!D.uid){alert("Sua conta do Google não está conectada neste aparelho.");return}const ne=(l||[]).length,ue=(y||[]).length;window.confirm(`Deseja ENVIAR TODOS OS DADOS deste aparelho (${ne} treinos salvos e ${ue} pesagens) para a nuvem na conta (${D.email})?`)&&(await Ne(async()=>{await gn(D.uid,{workoutData:se.current.workoutData,history:se.current.history,profile:se.current.profile,profileHistory:se.current.profileHistory})}),alert(`Sucesso! Os ${ne} treinos e ${ue} pesagens deste aparelho foram gravados na nuvem para a conta ${D.email}. No seu outro aparelho, abra a tela Perfil e clique em 'Sincronizar Agora com a Nuvem'.`))},Ye=()=>{w(!0),sessionStorage.setItem("kademia_session_entered","true")},Fe=ne=>{O(ne)},Rt=async ne=>{const ue=[ne,...l];c(ue);const ye=i.routines.map(we=>we.id!==ne.routineId?we:{...we,exercises:we.exercises.map(ke=>{const st=ne.exercises.find(Le=>Le.name===ke.name);if(st&&st.setsData){const Le=st.setsData.map(ut=>ut.load).filter(Boolean);if(Le.length>0)return{...ke,load:Le[Le.length-1]}}return ke})}),ee={...i,routines:ye,lastUpdated:new Date().toISOString()};s(ee),O(null),C("dashboard"),L.current=!0,D.connected&&D.uid&&await Ne(()=>gn(D.uid,{history:ue,workoutData:ee}))},yt=()=>{window.confirm("Deseja realmente cancelar este treino? Os dados digitados serão perdidos.")&&(O(null),localStorage.removeItem("kademia_active_routine"))},tt=()=>{c([]),D.connected&&D.uid&&gn(D.uid,{history:[]})},It=ne=>{const ue=l.filter(ye=>ne.id&&ye.id?ye.id!==ne.id:ye.date!==ne.date);c(ue),localStorage.setItem("kademia_history",JSON.stringify(ue)),D.connected&&D.uid&&gn(D.uid,{history:ue})},bn=()=>{const ne={connected:!!D.connected,email:D.email||"",status:$,lastSync:W,isOnline:ge,onSync:ve,onConnectGoogle:async()=>{try{const ue=await loginWithGoogle();ue.success&&ue.user||ue.error&&alert("Erro no login Google: "+ue.error)}catch(ue){alert("Erro na conexão: "+ue.message)}}};switch(A){case"dashboard":return m.jsx(Iv,{workoutData:i,history:l,onStartWorkout:Fe,onSetActiveTab:C,profile:h,syncProps:ne});case"routines":return m.jsx(EE,{workoutData:i,onUpdateWorkoutData:Z,syncProps:ne});case"history":return m.jsx(AE,{history:l,onClearHistory:tt,onDeleteWorkout:It,syncProps:ne,profile:h});case"settings":return m.jsx(IC,{profile:h,onUpdateProfile:M,profileHistory:y,onClearProfileHistory:fe,theme:r,onToggleTheme:Re,googleSyncSettings:D,onUpdateGoogleSyncSettings:Q,onSync:ve,workoutData:i,history:l,onImportBackup:K,onClearHistory:tt,onResetDefaultWorkout:de,onForcePush:Te,syncProps:ne});default:return m.jsx(Iv,{workoutData:i,history:l,onStartWorkout:Fe,onSetActiveTab:C,profile:h})}};return xe?xe&&!D.connected?m.jsx(DC,{theme:r,onToggleTheme:Re,onUpdateProfile:M,profile:h}):k?m.jsx("div",{className:"app-container",children:m.jsx(xE,{routine:k,history:l,onSaveWorkout:Rt,onCancelWorkout:yt,profile:h})}):m.jsxs("div",{className:"app-container animate-fade-in",children:[m.jsx("main",{className:"app-main-content",children:bn()}),m.jsxs("nav",{className:"bottom-nav",children:[m.jsxs("button",{className:`nav-item ${A==="dashboard"?"active":""}`,onClick:()=>C("dashboard"),children:[m.jsx(Qs,{size:20}),m.jsx("span",{children:"Treinar"})]}),m.jsxs("button",{className:`nav-item ${A==="routines"?"active":""}`,onClick:()=>C("routines"),children:[m.jsx(uE,{size:20}),m.jsx("span",{children:"Fichas"})]}),m.jsxs("button",{className:`nav-item ${A==="history"?"active":""}`,onClick:()=>C("history"),children:[m.jsx(Y0,{size:20}),m.jsx("span",{children:"Histórico"})]}),m.jsxs("button",{className:`nav-item ${A==="settings"?"active":""}`,onClick:()=>C("settings"),children:[m.jsx(Mf,{size:20}),m.jsx("span",{children:"Perfil"})]})]}),be&&m.jsx("div",{className:"exit-toast animate-fade-in",children:"Pressione voltar novamente para sair"}),m.jsx("style",{children:`
        .app-main-content {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 20px;
        }

        .bottom-nav {
          position: fixed;
          bottom: 16px;
          left: 16px;
          right: 16px;
          height: 66px;
          max-width: 448px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: 24px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
          z-index: 99;
          
          background: var(--nav-bg);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid var(--nav-border);
          transition: all 0.3s ease;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background: none;
          border: none;
          color: var(--color-text-secondary);
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          transition: all 0.2s;
          padding: 8px 10px;
          border-radius: 12px;
        }

        .nav-item:hover {
          color: var(--color-text-primary);
        }

        .nav-item.active {
          color: var(--accent-purple);
        }

        .exit-toast {
          position: fixed;
          bottom: 96px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(30, 30, 30, 0.9);
          color: #ffffff;
          padding: 10px 18px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1000;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          white-space: nowrap;
          pointer-events: none;
        }
      `})]}):m.jsx(pE,{deferredPrompt:S,onEnterApp:Ye})}const _x=r=>{const e=r.target;e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable||r.preventDefault()};document.addEventListener("copy",_x);document.addEventListener("cut",_x);document.addEventListener("gesturestart",r=>{r.preventDefault()});document.addEventListener("touchstart",r=>{r.touches.length>1&&r.preventDefault()},{passive:!1});rE.createRoot(document.getElementById("root")).render(m.jsx(X1.StrictMode,{children:m.jsx(kC,{})}));
