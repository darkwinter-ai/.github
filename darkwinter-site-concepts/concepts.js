var nM=Object.create;var lp=Object.defineProperty;var iM=Object.getOwnPropertyDescriptor;var sM=Object.getOwnPropertyNames;var rM=Object.getPrototypeOf,oM=Object.prototype.hasOwnProperty;var Ci=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports),Vg=(i,t)=>{for(var e in t)lp(i,e,{get:t[e],enumerable:!0})},aM=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of sM(t))!oM.call(i,s)&&s!==e&&lp(i,s,{get:()=>t[s],enumerable:!(n=iM(t,s))||n.enumerable});return i};var zg=(i,t,e)=>(e=i!=null?nM(rM(i)):{},aM(t||!i||!i.__esModule?lp(e,"default",{value:i,enumerable:!0}):e,i));var Qx=Ci((c2,Ml)=>{function RC(i){if(Array.isArray(i))return i}Ml.exports=RC,Ml.exports.__esModule=!0,Ml.exports.default=Ml.exports});var t0=Ci((l2,wl)=>{function IC(i,t){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var n,s,r,o,a=[],c=!0,l=!1;try{if(r=(e=e.call(i)).next,t===0){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=r.call(e)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(h){l=!0,s=h}finally{try{if(!c&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(l)throw s}}return a}}wl.exports=IC,wl.exports.__esModule=!0,wl.exports.default=wl.exports});var e0=Ci((h2,Tl)=>{function NC(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=Array(t);e<t;e++)n[e]=i[e];return n}Tl.exports=NC,Tl.exports.__esModule=!0,Tl.exports.default=Tl.exports});var i0=Ci((u2,Al)=>{var n0=e0();function PC(i,t){if(i){if(typeof i=="string")return n0(i,t);var e={}.toString.call(i).slice(8,-1);return e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set"?Array.from(i):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n0(i,t):void 0}}Al.exports=PC,Al.exports.__esModule=!0,Al.exports.default=Al.exports});var s0=Ci((d2,El)=>{function DC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}El.exports=DC,El.exports.__esModule=!0,El.exports.default=El.exports});var r0=Ci((p2,Cl)=>{var OC=Qx(),FC=t0(),LC=i0(),UC=s0();function kC(i,t){return OC(i)||FC(i,t)||LC(i,t)||UC()}Cl.exports=kC,Cl.exports.__esModule=!0,Cl.exports.default=Cl.exports});var o0=Ci((f2,Rl)=>{function BC(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}Rl.exports=BC,Rl.exports.__esModule=!0,Rl.exports.default=Rl.exports});var kf=Ci((m2,Bs)=>{function Uf(i){"@babel/helpers - typeof";return Bs.exports=Uf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bs.exports.__esModule=!0,Bs.exports.default=Bs.exports,Uf(i)}Bs.exports=Uf,Bs.exports.__esModule=!0,Bs.exports.default=Bs.exports});var c0=Ci((g2,Il)=>{var a0=kf().default;function VC(i,t){if(a0(i)!="object"||!i)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var n=e.call(i,t||"default");if(a0(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}Il.exports=VC,Il.exports.__esModule=!0,Il.exports.default=Il.exports});var l0=Ci((_2,Nl)=>{var zC=kf().default,GC=c0();function WC(i){var t=GC(i,"string");return zC(t)=="symbol"?t:t+""}Nl.exports=WC,Nl.exports.__esModule=!0,Nl.exports.default=Nl.exports});var u0=Ci((x2,Pl)=>{var HC=l0();function h0(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,HC(n.key),n)}}function qC(i,t,e){return t&&h0(i.prototype,t),e&&h0(i,e),Object.defineProperty(i,"prototype",{writable:!1}),i}Pl.exports=qC,Pl.exports.__esModule=!0,Pl.exports.default=Pl.exports});var Bf=Ci((wd,d0)=>{(function(i,t){typeof wd=="object"&&typeof d0<"u"?t(wd,r0(),o0(),u0()):typeof define=="function"&&define.amd?define(["exports","@babel/runtime/helpers/slicedToArray","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass"],t):(i=typeof globalThis<"u"?globalThis:i||self,t(i.automationEvents={},i._slicedToArray,i._classCallCheck,i._createClass))})(wd,(function(i,t,e,n){"use strict";var s=function(D,R,G){return{endTime:R,insertTime:G,type:"exponentialRampToValue",value:D}},r=function(D,R,G){return{endTime:R,insertTime:G,type:"linearRampToValue",value:D}},o=function(D,R){return{startTime:R,type:"setValue",value:D}},a=function(D,R,G){return{duration:G,startTime:R,type:"setValueCurve",values:D}},c=function(D,R,G){var U=G.startTime,W=G.target,B=G.timeConstant;return W+(R-W)*Math.exp((U-D)/B)},l=function(D){return D.type==="exponentialRampToValue"},h=function(D){return D.type==="linearRampToValue"},u=function(D){return l(D)||h(D)},d=function(D){return D.type==="setValue"},p=function(D){return D.type==="setValueCurve"},f=function(D,R,G,U){var W=D[R];return W===void 0?U:u(W)||d(W)?W.value:p(W)?W.values[W.values.length-1]:c(G,f(D,R-1,W.startTime,U),W)},x=function(D,R,G,U,W){return G===void 0?[U.insertTime,W]:u(G)?[G.endTime,G.value]:d(G)?[G.startTime,G.value]:p(G)?[G.startTime+G.duration,G.values[G.values.length-1]]:[G.startTime,f(D,R-1,G.startTime,W)]},g=function(D){return D.type==="cancelAndHold"},m=function(D){return D.type==="cancelScheduledValues"},w=function(D){return g(D)||m(D)?D.cancelTime:l(D)||h(D)?D.endTime:D.startTime},E=function(D,R,G,U){var W=U.endTime,B=U.value;return G===B?B:0<G&&0<B||G<0&&B<0?G*Math.pow(B/G,(D-R)/(W-R)):D<W?G:B},S=function(D,R,G,U){var W=U.endTime,B=U.value;return G+(D-R)/(W-R)*(B-G)},y=function(D,R){var G=Math.floor(R);if(G===R)return D[G];var U=Math.ceil(R);return(1-(R-G))*D[G]+(1-(U-R))*D[U]},b=function(D,R){var G=R.duration,U=R.startTime,W=R.values,B=(D-U)/G*(W.length-1);return y(W,B)},M=function(D,R,G){for(var U=D.length,W=Math.max(1,Math.floor(G/R*U))+1,B=D instanceof Float32Array?new Float32Array(W):D.slice(0,W),pt=0;pt<W;pt+=1){var xt=pt/(W-1)*G,Yt=xt/R*(U-1);B[pt]=y(D,Yt)}return B},_=function(D){return D.type==="setTarget"},T=(function(){function F(D){e(this,F),this._automationEvents=[],this._currenTime=0,this._defaultValue=D}return n(F,[{key:Symbol.iterator,value:function(){return this._automationEvents[Symbol.iterator]()}},{key:"add",value:function(R){var G=w(R);if(g(R)||m(R)){var U=this._automationEvents.findIndex(function(gt){return m(R)&&p(gt)?gt.startTime+gt.duration>=G:w(gt)>=G}),W=this._automationEvents[U];if(U!==-1&&(this._automationEvents=this._automationEvents.slice(0,U)),g(R)){var B=this._automationEvents[this._automationEvents.length-1];if(W!==void 0&&u(W)){if(B!==void 0&&_(B))throw new Error("The internal list is malformed.");var pt=B===void 0?W.insertTime:p(B)?B.startTime+B.duration:w(B),xt=B===void 0?this._defaultValue:p(B)?B.values[B.values.length-1]:B.value,Yt=l(W)?E(G,pt,xt,W):S(G,pt,xt,W),Mt=l(W)?s(Yt,G,this._currenTime):r(Yt,G,this._currenTime);this._automationEvents.push(Mt)}if(B!==void 0&&_(B)&&this._automationEvents.push(o(this.getValue(G),G)),B!==void 0&&p(B)&&B.startTime+B.duration>G){var Ot=G-B.startTime;this._automationEvents[this._automationEvents.length-1]=a(M(B.values,B.duration,Ot),B.startTime,Ot)}}}else{var J=this._automationEvents.findIndex(function(gt){return w(gt)>G}),X=J===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[J-1];if(X!==void 0&&p(X)&&w(X)+X.duration>G)return!1;var Q=l(R)?s(R.value,R.endTime,this._currenTime):h(R)?r(R.value,G,this._currenTime):R;if(J===-1)this._automationEvents.push(Q);else{if(p(R)&&G+R.duration>w(this._automationEvents[J]))return!1;this._automationEvents.splice(J,0,Q)}}return!0}},{key:"flush",value:function(R){var G=this._automationEvents.findIndex(function(B){return w(B)>R});if(G>1){var U=this._automationEvents.slice(G-1),W=U[0];_(W)&&U.unshift(o(f(this._automationEvents,G-2,W.startTime,this._defaultValue),W.startTime)),this._automationEvents=U}}},{key:"getValue",value:function(R){if(this._automationEvents.length===0)return this._defaultValue;var G=this._automationEvents.findIndex(function(gt){return w(gt)>R}),U=this._automationEvents[G],W=(G===-1?this._automationEvents.length:G)-1,B=this._automationEvents[W];if(B!==void 0&&_(B)&&(U===void 0||!u(U)||U.insertTime>R))return c(R,f(this._automationEvents,W-1,B.startTime,this._defaultValue),B);if(B!==void 0&&d(B)&&(U===void 0||!u(U)))return B.value;if(B!==void 0&&p(B)&&(U===void 0||!u(U)||B.startTime+B.duration>R))return R<B.startTime+B.duration?b(R,B):B.values[B.values.length-1];if(B!==void 0&&u(B)&&(U===void 0||!u(U)))return B.value;if(U!==void 0&&l(U)){var pt=x(this._automationEvents,W,B,U,this._defaultValue),xt=t(pt,2),Yt=xt[0],Mt=xt[1];return E(R,Yt,Mt,U)}if(U!==void 0&&h(U)){var Ot=x(this._automationEvents,W,B,U,this._defaultValue),J=t(Ot,2),X=J[0],Q=J[1];return S(R,X,Q,U)}return this._defaultValue}}])})(),C=function(D){return{cancelTime:D,type:"cancelAndHold"}},I=function(D){return{cancelTime:D,type:"cancelScheduledValues"}},P=function(D,R){return{endTime:R,type:"exponentialRampToValue",value:D}},V=function(D,R){return{endTime:R,type:"linearRampToValue",value:D}},O=function(D,R,G){return{startTime:R,target:D,timeConstant:G,type:"setTarget"}};i.AutomationEventList=T,i.createCancelAndHoldAutomationEvent=C,i.createCancelScheduledValuesAutomationEvent=I,i.createExponentialRampToValueAutomationEvent=P,i.createLinearRampToValueAutomationEvent=V,i.createSetTargetAutomationEvent=O,i.createSetValueAutomationEvent=o,i.createSetValueCurveAutomationEvent=a}))});var C_=0,jp=1,R_=2;var el=1,I_=2,da=3,gr=0,Jn=1,ys=2,Ii=0,pa=1,nl=2,Zp=3,$p=4,N_=5;var Jr=100,P_=101,D_=102,O_=103,F_=104,L_=200,U_=201,k_=202,B_=203,Jp=204,Kp=205,V_=206,z_=207,G_=208,W_=209,H_=210,q_=211,X_=212,Y_=213,j_=214,Lh=0,Uh=1,kh=2,Jo=3,Bh=4,Vh=5,zh=6,Gh=7,Qp=0,Z_=1,$_=2,Zi=0,il=1,sl=2,rl=3,ol=4,al=5,cl=6,ll=7;var tf=300,_r=301,Kr=302,vu=303,Su=304,hl=306,Wh=1e3,fs=1001,Hh=1002,Sn=1003,J_=1004;var ul=1005;var En=1006,bu=1007;var xr=1008;var gi=1009,ef=1010,nf=1011,fa=1012,Mu=1013,$i=1014,Ni=1015,Cn=1016,wu=1017,Tu=1018,ma=1020,sf=35902,rf=35899,of=1021,af=1022,Pi=1023,gs=1026,yr=1027,Au=1028,Eu=1029,vr=1030,Cu=1031;var Ru=1033,dl=33776,pl=33777,fl=33778,ml=33779,Iu=35840,Nu=35841,Pu=35842,Du=35843,Ou=36196,Fu=37492,Lu=37496,Uu=37488,ku=37489,gl=37490,Bu=37491,Vu=37808,zu=37809,Gu=37810,Wu=37811,Hu=37812,qu=37813,Xu=37814,Yu=37815,ju=37816,Zu=37817,$u=37818,Ju=37819,Ku=37820,Qu=37821,td=36492,ed=36494,nd=36495,id=36283,sd=36284,_l=36285,rd=36286;var xc=2300,qh=2301,Oh=2302,Lp=2303,Up=2400,kp=2401,Bp=2402;var K_=3200;var cf=0,Q_=1,ks="",Yn="srgb",yc="srgb-linear",vc="linear",xe="srgb";var Fh=7680;var tx=519,ex=512,nx=513,ix=514,od=515,sx=516,rx=517,ad=518,ox=519,lf=35044;var hf="300 es",Yi=2e3,Sc=2001;function cM(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function bc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ax(){let i=bc("canvas");return i.style.display="block",i}var Gg={},Ko=null;function Mc(...i){let t="THREE."+i.shift();Ko?Ko("log",t,...i):console.log(t,...i)}function cx(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=cx(i);let t="THREE."+i.shift();if(Ko)Ko("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=cx(i);let t="THREE."+i.shift();if(Ko)Ko("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xr(...i){let t=i.join(" ");t in Gg||(Gg[t]=!0,Kt(...i))}function lx(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var hx={[Lh]:Uh,[kh]:zh,[Bh]:Gh,[Jo]:Vh,[Uh]:Lh,[zh]:kh,[Gh]:Bh,[Vh]:Jo},_s=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wg=1234567,fc=Math.PI/180,Qo=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[e&63|128]+Bn[e>>8&255]+"-"+Bn[e>>16&255]+Bn[e>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function uf(i,t){return(i%t+t)%t}function hM(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function uM(i,t,e){return i!==t?(e-i)/(t-i):0}function mc(i,t,e){return(1-e)*i+e*t}function dM(i,t,e,n){return mc(i,t,1-Math.exp(-e*n))}function pM(i,t=1){return t-Math.abs(uf(i,t*2)-t)}function fM(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mM(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gM(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _M(i,t){return i+Math.random()*(t-i)}function xM(i){return i*(.5-Math.random())}function yM(i){i!==void 0&&(Wg=i);let t=Wg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vM(i){return i*fc}function SM(i){return i*Qo}function bM(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function MM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wM(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function TM(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),f=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*f,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*f,a*l);break;case"ZYZ":i.set(c*f,c*p,a*h,a*l);break;default:Kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var df={DEG2RAD:fc,RAD2DEG:Qo,generateUUID:ms,clamp:re,euclideanModulo:uf,mapLinear:hM,inverseLerp:uM,lerp:mc,damp:dM,pingpong:pM,smoothstep:fM,smootherstep:mM,randInt:gM,randFloat:_M,randFloatSpread:xM,seededRandom:yM,degToRad:vM,radToDeg:SM,isPowerOfTwo:bM,ceilPowerOfTwo:MM,floorPowerOfTwo:wM,setQuaternionFromProperEuler:TM,normalize:Ee,denormalize:Xi},mt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ui=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],f=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==p||h!==f){let g=c*d+l*p+h*f+u*x;g<0&&(d=-d,p=-p,f=-f,x=-x,g=-g);let m=1-a;if(g<.9995){let w=Math.acos(g),E=Math.sin(w);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E,c=c*m+d*a,l=l*m+p*a,h=h*m+f*a,u=u*m+x*a}else{c=c*m+d*a,l=l*m+p*a,h=h*m+f*a,u=u*m+x*a;let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+h*u+c*p-l*d,t[e+1]=c*f+h*d+l*u-a*p,t[e+2]=l*f+h*p+a*d-c*u,t[e+3]=h*f-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),f=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hp.copy(this).projectOnVector(t),this.sub(hp)}reflect(t){return this.sub(hp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hp=new k,Hg=new ui,se=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],x=s[0],g=s[3],m=s[6],w=s[1],E=s[4],S=s[7],y=s[2],b=s[5],M=s[8];return r[0]=o*x+a*w+c*y,r[3]=o*g+a*E+c*b,r[6]=o*m+a*S+c*M,r[1]=l*x+h*w+u*y,r[4]=l*g+h*E+u*b,r[7]=l*m+h*S+u*M,r[2]=d*x+p*w+f*y,r[5]=d*g+p*E+f*b,r[8]=d*m+p*S+f*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,f=e*u+n*d+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(up.makeScale(t,e)),this}rotate(t){return Xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(up.makeRotation(-t)),this}translate(t,e){return Xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(up.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},up=new se,qg=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xg=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AM(){let i={enabled:!0,workingColorSpace:yc,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=$o(s.r),s.g=$o(s.g),s.b=$o(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ks?vc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yc]:{primaries:t,whitePoint:n,transfer:vc,toXYZ:qg,fromXYZ:Xg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:qg,fromXYZ:Xg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),i}var ue=AM();function Us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $o(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Io,Xh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Io===void 0&&(Io=bc("canvas")),Io.width=t.width,Io.height=t.height;let s=Io.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Io}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=bc("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Us(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Us(e[n]/255)*255):e[n]=Us(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},EM=0,ta=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dp(s[o].image)):r.push(dp(s[o]))}else r=dp(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function dp(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var CM=0,pp=new k,jn=class i extends _s{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fs,s=fs,r=En,o=xr,a=Pi,c=gi,l=i.DEFAULT_ANISOTROPY,h=ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=ms(),this.name="",this.source=new ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pp).x}get height(){return this.source.getSize(pp).y}get depth(){return this.source.getSize(pp).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wh:t.x=t.x-Math.floor(t.x);break;case fs:t.x=t.x<0?0:1;break;case Hh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wh:t.y=t.y-Math.floor(t.y);break;case fs:t.y=t.y<0?0:1;break;case Hh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=tf;jn.DEFAULT_ANISOTROPY=1;var Ce=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(f+g)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,S=(p+1)/2,y=(m+1)/2,b=(h+d)/4,M=(u+x)/4,_=(f+g)/4;return E>S&&E>y?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=M/n):S>y?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=b/s,r=_/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=M/r,s=_/r),this.set(n,s,r,e),this}let w=Math.sqrt((g-f)*(g-f)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(g-f)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yh=class extends _s{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new jn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ta(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Yh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wc=class extends jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jh=class extends jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _e=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,f,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,f,x,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,f,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=f,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/No.setFromMatrixColumn(t,0).length(),r=1/No.setFromMatrixColumn(t,1).length(),o=1/No.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,f=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+f*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=f+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,f=l*h,x=l*u;e[0]=d+x*a,e[4]=f*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-f,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,f=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,f=a*h,x=a*u;e[0]=c*h,e[4]=f*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-f,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,f=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=f*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+f,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,p=o*l,f=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-f,e[2]=f*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(RM,t,IM)}lookAt(t,e,n){let s=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),ir.crossVectors(n,li),ir.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ir.crossVectors(n,li)),ir.normalize(),sh.crossVectors(li,ir),s[0]=ir.x,s[4]=sh.x,s[8]=li.x,s[1]=ir.y,s[5]=sh.y,s[9]=li.y,s[2]=ir.z,s[6]=sh.z,s[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],x=n[6],g=n[10],m=n[14],w=n[3],E=n[7],S=n[11],y=n[15],b=s[0],M=s[4],_=s[8],T=s[12],C=s[1],I=s[5],P=s[9],V=s[13],O=s[2],F=s[6],D=s[10],R=s[14],G=s[3],U=s[7],W=s[11],B=s[15];return r[0]=o*b+a*C+c*O+l*G,r[4]=o*M+a*I+c*F+l*U,r[8]=o*_+a*P+c*D+l*W,r[12]=o*T+a*V+c*R+l*B,r[1]=h*b+u*C+d*O+p*G,r[5]=h*M+u*I+d*F+p*U,r[9]=h*_+u*P+d*D+p*W,r[13]=h*T+u*V+d*R+p*B,r[2]=f*b+x*C+g*O+m*G,r[6]=f*M+x*I+g*F+m*U,r[10]=f*_+x*P+g*D+m*W,r[14]=f*T+x*V+g*R+m*B,r[3]=w*b+E*C+S*O+y*G,r[7]=w*M+E*I+S*F+y*U,r[11]=w*_+E*P+S*D+y*W,r[15]=w*T+E*V+S*R+y*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],f=t[3],x=t[7],g=t[11],m=t[15],w=c*p-l*d,E=a*p-l*u,S=a*d-c*u,y=o*p-l*h,b=o*d-c*h,M=o*u-a*h;return e*(x*w-g*E+m*S)-n*(f*w-g*y+m*b)+s*(f*E-x*y+m*M)-r*(f*S-x*b+g*M)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],x=t[13],g=t[14],m=t[15],w=e*a-n*o,E=e*c-s*o,S=e*l-r*o,y=n*c-s*a,b=n*l-r*a,M=s*l-r*c,_=h*x-u*f,T=h*g-d*f,C=h*m-p*f,I=u*g-d*x,P=u*m-p*x,V=d*m-p*g,O=w*V-E*P+S*I+y*C-b*T+M*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/O;return t[0]=(a*V-c*P+l*I)*F,t[1]=(s*P-n*V-r*I)*F,t[2]=(x*M-g*b+m*y)*F,t[3]=(d*b-u*M-p*y)*F,t[4]=(c*C-o*V-l*T)*F,t[5]=(e*V-s*C+r*T)*F,t[6]=(g*S-f*M-m*E)*F,t[7]=(h*M-d*S+p*E)*F,t[8]=(o*P-a*C+l*_)*F,t[9]=(n*C-e*P-r*_)*F,t[10]=(f*b-x*S+m*w)*F,t[11]=(u*S-h*b-p*w)*F,t[12]=(a*T-o*I-c*_)*F,t[13]=(e*I-n*T+s*_)*F,t[14]=(x*E-f*y-g*w)*F,t[15]=(h*y-u*E+d*w)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,f=r*u,x=o*h,g=o*u,m=a*u,w=c*l,E=c*h,S=c*u,y=n.x,b=n.y,M=n.z;return s[0]=(1-(x+m))*y,s[1]=(p+S)*y,s[2]=(f-E)*y,s[3]=0,s[4]=(p-S)*b,s[5]=(1-(d+m))*b,s[6]=(g+w)*b,s[7]=0,s[8]=(f+E)*M,s[9]=(g-w)*M,s[10]=(1-(d+x))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=No.set(s[0],s[1],s[2]).length(),a=No.set(s[4],s[5],s[6]).length(),c=No.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gi.copy(this);let l=1/o,h=1/a,u=1/c;return Gi.elements[0]*=l,Gi.elements[1]*=l,Gi.elements[2]*=l,Gi.elements[4]*=h,Gi.elements[5]*=h,Gi.elements[6]*=h,Gi.elements[8]*=u,Gi.elements[9]*=u,Gi.elements[10]*=u,e.setFromRotationMatrix(Gi),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Yi,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),f,x;if(c)f=r/(o-r),x=o*r/(o-r);else if(a===Yi)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Sc)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Yi,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),f,x;if(c)f=1/(o-r),x=o/(o-r);else if(a===Yi)f=-2/(o-r),x=-(o+r)/(o-r);else if(a===Sc)f=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},No=new k,Gi=new _e,RM=new k(0,0,0),IM=new k(1,1,1),ir=new k,sh=new k,li=new k,Yg=new _e,jg=new ui,cr=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jg.setFromEuler(this),this.setFromQuaternion(jg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cr.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},NM=0,Zg=new k,Po=new ui,Ns=new _e,rh=new k,ic=new k,PM=new k,DM=new ui,$g=new k(1,0,0),Jg=new k(0,1,0),Kg=new k(0,0,1),Qg={type:"added"},OM={type:"removed"},Do={type:"childadded",child:null},fp={type:"childremoved",child:null},Zn=class i extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new cr,n=new ui,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new se}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Po.setFromAxisAngle(t,e),this.quaternion.multiply(Po),this}rotateOnWorldAxis(t,e){return Po.setFromAxisAngle(t,e),this.quaternion.premultiply(Po),this}rotateX(t){return this.rotateOnAxis($g,t)}rotateY(t){return this.rotateOnAxis(Jg,t)}rotateZ(t){return this.rotateOnAxis(Kg,t)}translateOnAxis(t,e){return Zg.copy(t).applyQuaternion(this.quaternion),this.position.add(Zg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($g,t)}translateY(t){return this.translateOnAxis(Jg,t)}translateZ(t){return this.translateOnAxis(Kg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ns.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rh.copy(t):rh.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ic.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ns.lookAt(ic,rh,this.up):Ns.lookAt(rh,ic,this.up),this.quaternion.setFromRotationMatrix(Ns),s&&(Ns.extractRotation(s.matrixWorld),Po.setFromRotationMatrix(Ns),this.quaternion.premultiply(Po.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qg),Do.child=t,this.dispatchEvent(Do),Do.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(OM),fp.child=t,this.dispatchEvent(fp),fp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ns.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ns.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ns),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qg),Do.child=t,this.dispatchEvent(Do),Do.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,t,PM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ic,DM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zn.DEFAULT_UP=new k(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ji=class extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},FM={type:"move"},na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},oh={h:0,s:0,l:0};function mp(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=uf(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=mp(o,r,t+1/3),this.g=mp(o,r,t),this.b=mp(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=Yn){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Yn){let n=ux[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=$o(t.r),this.g=$o(t.g),this.b=$o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return ue.workingToColorSpace(Vn.copy(this),t),Math.round(re(Vn.r*255,0,255))*65536+Math.round(re(Vn.g*255,0,255))*256+Math.round(re(Vn.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Vn.copy(this),e);let n=Vn.r,s=Vn.g,r=Vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Vn.copy(this),e),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Yn){ue.workingToColorSpace(Vn.copy(this),t);let e=Vn.r,n=Vn.g,s=Vn.b;return t!==Yn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(sr),this.setHSL(sr.h+t,sr.s+e,sr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(sr),t.getHSL(oh);let n=mc(sr.h,oh.h,e),s=mc(sr.s,oh.s,e),r=mc(sr.l,oh.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new Qt;Qt.NAMES=ux;var Tc=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ac=class extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wi=new k,Ps=new k,gp=new k,Ds=new k,Oo=new k,Fo=new k,t_=new k,_p=new k,xp=new k,yp=new k,vp=new Ce,Sp=new Ce,bp=new Ce,Ls=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wi.subVectors(t,e),s.cross(Wi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Wi.subVectors(s,e),Ps.subVectors(n,e),gp.subVectors(t,e);let o=Wi.dot(Wi),a=Wi.dot(Ps),c=Wi.dot(gp),l=Ps.dot(Ps),h=Ps.dot(gp),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,f=(o*h-a*c)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ds)===null?!1:Ds.x>=0&&Ds.y>=0&&Ds.x+Ds.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ds)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ds.x),c.addScaledVector(o,Ds.y),c.addScaledVector(a,Ds.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return vp.setScalar(0),Sp.setScalar(0),bp.setScalar(0),vp.fromBufferAttribute(t,e),Sp.fromBufferAttribute(t,n),bp.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(vp,r.x),o.addScaledVector(Sp,r.y),o.addScaledVector(bp,r.z),o}static isFrontFacing(t,e,n,s){return Wi.subVectors(n,e),Ps.subVectors(t,e),Wi.cross(Ps).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),Ps.subVectors(this.a,this.b),Wi.cross(Ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Oo.subVectors(s,n),Fo.subVectors(r,n),_p.subVectors(t,n);let c=Oo.dot(_p),l=Fo.dot(_p);if(c<=0&&l<=0)return e.copy(n);xp.subVectors(t,s);let h=Oo.dot(xp),u=Fo.dot(xp);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Oo,o);yp.subVectors(t,r);let p=Oo.dot(yp),f=Fo.dot(yp);if(f>=0&&p<=f)return e.copy(r);let x=p*l-c*f;if(x<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(Fo,a);let g=h*f-p*u;if(g<=0&&u-h>=0&&p-f>=0)return t_.subVectors(r,s),a=(u-h)/(u-h+(p-f)),e.copy(s).addScaledVector(t_,a);let m=1/(g+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(Oo,o).addScaledVector(Fo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$n=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hi):Hi.fromBufferAttribute(r,o),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ah.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ah.copy(n.boundingBox)),ah.applyMatrix4(t.matrixWorld),this.union(ah)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sc),ch.subVectors(this.max,sc),Lo.subVectors(t.a,sc),Uo.subVectors(t.b,sc),ko.subVectors(t.c,sc),rr.subVectors(Uo,Lo),or.subVectors(ko,Uo),zr.subVectors(Lo,ko);let e=[0,-rr.z,rr.y,0,-or.z,or.y,0,-zr.z,zr.y,rr.z,0,-rr.x,or.z,0,-or.x,zr.z,0,-zr.x,-rr.y,rr.x,0,-or.y,or.x,0,-zr.y,zr.x,0];return!Mp(e,Lo,Uo,ko,ch)||(e=[1,0,0,0,1,0,0,0,1],!Mp(e,Lo,Uo,ko,ch))?!1:(lh.crossVectors(rr,or),e=[lh.x,lh.y,lh.z],Mp(e,Lo,Uo,ko,ch))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Os),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Os=[new k,new k,new k,new k,new k,new k,new k,new k],Hi=new k,ah=new $n,Lo=new k,Uo=new k,ko=new k,rr=new k,or=new k,zr=new k,sc=new k,ch=new k,lh=new k,Gr=new k;function Mp(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gr.fromArray(i,r);let a=s.x*Math.abs(Gr.x)+s.y*Math.abs(Gr.y)+s.z*Math.abs(Gr.z),c=t.dot(Gr),l=e.dot(Gr),h=n.dot(Gr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var un=new k,hh=new mt,LM=0,Gn=class extends _s{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lf,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hh.fromBufferAttribute(this,e),hh.applyMatrix3(t),this.setXY(e,hh.x,hh.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ec=class extends Gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cc=class extends Gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Se=class extends Gn{constructor(t,e,n){super(new Float32Array(t),e,n)}},UM=new $n,rc=new k,wp=new k,si=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):UM.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rc.subVectors(t,this.center);let e=rc.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rc,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rc.copy(t.center).add(wp)),this.expandByPoint(rc.copy(t.center).sub(wp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kM=0,Ri=new _e,Tp=new Zn,Bo=new k,hi=new $n,oc=new $n,vn=new k,$e=class i extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cM(t)?Cc:Ec)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,e,n){return Ri.makeTranslation(t,e,n),this.applyMatrix4(Ri),this}scale(t,e,n){return Ri.makeScale(t,e,n),this.applyMatrix4(Ri),this}lookAt(t){return Tp.lookAt(t),Tp.updateMatrix(),this.applyMatrix4(Tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];oc.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(hi.min,oc.min),hi.expandByPoint(vn),vn.addVectors(hi.max,oc.max),hi.expandByPoint(vn)):(hi.expandByPoint(oc.min),hi.expandByPoint(oc.max))}hi.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)vn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(vn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)vn.fromBufferAttribute(a,l),c&&(Bo.fromBufferAttribute(t,l),vn.add(Bo)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new k,c[_]=new k;let l=new k,h=new k,u=new k,d=new mt,p=new mt,f=new mt,x=new k,g=new k;function m(_,T,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,_),p.fromBufferAttribute(r,T),f.fromBufferAttribute(r,C),h.sub(l),u.sub(l),p.sub(d),f.sub(d);let I=1/(p.x*f.y-f.x*p.y);isFinite(I)&&(x.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(I),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(I),a[_].add(x),a[T].add(x),a[C].add(x),c[_].add(g),c[T].add(g),c[C].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let _=0,T=w.length;_<T;++_){let C=w[_],I=C.start,P=C.count;for(let V=I,O=I+P;V<O;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let E=new k,S=new k,y=new k,b=new k;function M(_){y.fromBufferAttribute(s,_),b.copy(y);let T=a[_];E.copy(T),E.sub(y.multiplyScalar(y.dot(T))).normalize(),S.crossVectors(b,T);let I=S.dot(c[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,I)}for(let _=0,T=w.length;_<T;++_){let C=w[_],I=C.start,P=C.count;for(let V=I,O=I+P;V<O;V+=3)M(t.getX(V+0)),M(t.getX(V+1)),M(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,l=new k,h=new k,u=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){let f=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,f),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let m=0;m<h;m++)d[f++]=l[p++]}return new Gn(d,h,u)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lf,this.updateRanges=[],this.version=0,this.uuid=ms()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Xn=new k,di=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.applyMatrix4(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.applyNormalMatrix(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.transformDirection(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Mc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ap=new k,BM=new k,VM=new se,qi=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ap.subVectors(n,e).cross(BM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ap),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||VM.getNormalMatrix(t),s=this.coplanarPoint(Ap).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zM=0,xs=class extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=pa,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jp,this.blendDst=Kp,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fh,this.stencilZFail=Fh,this.stencilZPass=Fh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new qi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ia=class extends xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vo,ac=new k,zo=new k,Go=new k,Wo=new mt,cc=new mt,dx=new _e,uh=new k,lc=new k,dh=new k,e_=new mt,Ep=new mt,n_=new mt,Ic=class extends Zn{constructor(t=new ia){if(super(),this.isSprite=!0,this.type="Sprite",Vo===void 0){Vo=new $e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rc(e,5);Vo.setIndex([0,1,2,0,2,3]),Vo.setAttribute("position",new di(n,3,0,!1)),Vo.setAttribute("uv",new di(n,2,3,!1))}this.geometry=Vo,this.material=t,this.center=new mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zo.setFromMatrixScale(this.matrixWorld),dx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Go.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zo.multiplyScalar(-Go.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ph(uh.set(-.5,-.5,0),Go,o,zo,s,r),ph(lc.set(.5,-.5,0),Go,o,zo,s,r),ph(dh.set(.5,.5,0),Go,o,zo,s,r),e_.set(0,0),Ep.set(1,0),n_.set(1,1);let a=t.ray.intersectTriangle(uh,lc,dh,!1,ac);if(a===null&&(ph(lc.set(-.5,.5,0),Go,o,zo,s,r),Ep.set(0,1),a=t.ray.intersectTriangle(uh,dh,lc,!1,ac),a===null))return;let c=t.ray.origin.distanceTo(ac);c<t.near||c>t.far||e.push({distance:c,point:ac.clone(),uv:Ls.getInterpolation(ac,uh,lc,dh,e_,Ep,n_,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ph(i,t,e,n,s,r){Wo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(cc.x=r*Wo.x-s*Wo.y,cc.y=s*Wo.x+r*Wo.y):cc.copy(Wo),i.copy(t),i.x+=cc.x,i.y+=cc.y,i.applyMatrix4(dx)}var Fs=new k,Cp=new k,fh=new k,mh=new k,Yr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fs.copy(this.origin).addScaledVector(this.direction,e),Fs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Cp.copy(t).add(e).multiplyScalar(.5),fh.copy(e).sub(t).normalize(),mh.copy(this.origin).sub(Cp);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fh),a=mh.dot(this.direction),c=-mh.dot(fh),l=mh.lengthSq(),h=Math.abs(1-o*o),u,d,p,f;if(h>0)if(u=o*c-a,d=o*a-c,f=r*h,u>=0)if(d>=-f)if(d<=f){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cp).addScaledVector(fh,d),p}intersectSphere(t,e){if(t.radius<0)return null;Fs.subVectors(t.center,this.origin);let n=Fs.dot(this.direction),s=Fs.dot(Fs)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fs)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,p=t.z-o.z,f=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,w=n.y-o.y,E=n.z-o.z,S=Math.abs(c),y=Math.abs(l),b=Math.abs(h),M,_,T,C,I,P,V,O,F,D,R,G;if(S>=y&&S>=b?(T=c,P=u,F=f,G=m,c>=0?(M=l,_=h,C=d,I=p,V=x,O=g,D=w,R=E):(M=h,_=l,C=p,I=d,V=g,O=x,D=E,R=w)):y>=b?(T=l,P=d,F=x,G=w,l>=0?(M=h,_=c,C=p,I=u,V=g,O=f,D=E,R=m):(M=c,_=h,C=u,I=p,V=f,O=g,D=m,R=E)):(T=h,P=p,F=g,G=E,h>=0?(M=c,_=l,C=u,I=d,V=f,O=x,D=m,R=w):(M=l,_=c,C=d,I=u,V=x,O=f,D=w,R=m)),T===0)return null;let U=M/T,W=_/T,B=1/T,pt=C-U*P,xt=I-W*P,Yt=V-U*F,Mt=O-W*F,Ot=D-U*G,J=R-W*G,X=Ot*Mt-J*Yt,Q=pt*J-xt*Ot,gt=Yt*xt-Mt*pt;if(s){if(X<0||Q<0||gt<0)return null}else if((X<0||Q<0||gt<0)&&(X>0||Q>0||gt>0))return null;let ft=X+Q+gt;if(ft===0)return null;let Lt=B*(X*P+Q*F+gt*G);return(ft>0?Lt<0:Lt>0)?null:this.at(Lt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pi=class extends xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=Qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},i_=new _e,Wr=new Yr,gh=new si,s_=new k,_h=new k,xh=new k,yh=new k,Rp=new k,vh=new k,r_=new k,Sh=new k,Je=class extends Zn{constructor(t=new $e,e=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){vh.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Rp.fromBufferAttribute(u,t),o?vh.addScaledVector(Rp,h):vh.addScaledVector(Rp.sub(e),h))}e.add(vh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gh.copy(n.boundingSphere),gh.applyMatrix4(r),Wr.copy(t.ray).recast(t.near),!(gh.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(gh,s_)===null||Wr.origin.distanceToSquared(s_)>(t.far-t.near)**2))&&(i_.copy(r).invert(),Wr.copy(t.ray).applyMatrix4(i_),!(n.boundingBox!==null&&Wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wr)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,x=d.length;f<x;f++){let g=d[f],m=o[g.materialIndex],w=Math.max(g.start,p.start),E=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=w,y=E;S<y;S+=3){let b=a.getX(S),M=a.getX(S+1),_=a.getX(S+2);s=bh(this,m,t,n,l,h,u,b,M,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=f,m=x;g<m;g+=3){let w=a.getX(g),E=a.getX(g+1),S=a.getX(g+2);s=bh(this,o,t,n,l,h,u,w,E,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let f=0,x=d.length;f<x;f++){let g=d[f],m=o[g.materialIndex],w=Math.max(g.start,p.start),E=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let S=w,y=E;S<y;S+=3){let b=S,M=S+1,_=S+2;s=bh(this,m,t,n,l,h,u,b,M,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=f,m=x;g<m;g+=3){let w=g,E=g+1,S=g+2;s=bh(this,o,t,n,l,h,u,w,E,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function GM(i,t,e,n,s,r,o,a){let c;if(t.side===Jn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===gr,a),c===null)return null;Sh.copy(a),Sh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Sh);return l<e.near||l>e.far?null:{distance:l,point:Sh.clone(),object:i}}function bh(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,_h),i.getVertexPosition(c,xh),i.getVertexPosition(l,yh);let h=GM(i,t,e,n,_h,xh,yh,r_);if(h){let u=new k;Ls.getBarycoord(r_,_h,xh,yh,u),s&&(h.uv=Ls.getInterpolatedAttribute(s,a,c,l,u,new mt)),r&&(h.uv1=Ls.getInterpolatedAttribute(r,a,c,l,u,new mt)),o&&(h.normal=Ls.getInterpolatedAttribute(o,a,c,l,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new k,materialIndex:0};Ls.getNormal(_h,xh,yh,d.normal),h.face=d,h.barycoord=u}return h}var Nc=class extends jn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Sn,h=Sn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pc=class extends Gn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ho=new _e,o_=new _e,Mh=[],a_=new $n,WM=new _e,hc=new Je,uc=new si,Dc=class extends Je{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,WM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ho),a_.copy(t.boundingBox).applyMatrix4(Ho),this.boundingBox.union(a_)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ho),uc.copy(t.boundingSphere).applyMatrix4(Ho),this.boundingSphere.union(uc)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hc.geometry=this.geometry,hc.material=this.material,hc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uc.copy(this.boundingSphere),uc.applyMatrix4(n),t.ray.intersectsSphere(uc)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ho),o_.multiplyMatrices(n,Ho),hc.matrixWorld=o_,hc.raycast(t,Mh);for(let o=0,a=Mh.length;o<a;o++){let c=Mh[o];c.instanceId=r,c.object=this,e.push(c)}Mh.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nc(new Float32Array(s*this.count),s,this.count,Au,Ni));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hr=new si,HM=new mt(.5,.5),wh=new k,Oc=class{constructor(t=new qi,e=new qi,n=new qi,s=new qi,r=new qi,o=new qi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],f=r[8],x=r[9],g=r[10],m=r[11],w=r[12],E=r[13],S=r[14],y=r[15];if(s[0].setComponents(l-o,p-h,m-f,y-w).normalize(),s[1].setComponents(l+o,p+h,m+f,y+w).normalize(),s[2].setComponents(l+a,p+u,m+x,y+E).normalize(),s[3].setComponents(l-a,p-u,m-x,y-E).normalize(),n)s[4].setComponents(c,d,g,S).normalize(),s[5].setComponents(l-c,p-d,m-g,y-S).normalize();else if(s[4].setComponents(l-c,p-d,m-g,y-S).normalize(),e===Yi)s[5].setComponents(l+c,p+d,m+g,y+S).normalize();else if(e===Sc)s[5].setComponents(c,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(t){Hr.center.set(0,0,0);let e=HM.distanceTo(t.center);return Hr.radius=.7071067811865476+e,Hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(wh.x=s.normal.x>0?t.max.x:t.min.x,wh.y=s.normal.y>0?t.max.y:t.min.y,wh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fc=class extends xs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zh=new k,$h=new k,c_=new _e,dc=new Yr,Th=new si,Ip=new k,l_=new k,Jh=class extends Zn{constructor(t=new $e,e=new Fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Zh.fromBufferAttribute(e,s-1),$h.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Zh.distanceTo($h);t.setAttribute("lineDistance",new Se(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Th.copy(n.boundingSphere),Th.applyMatrix4(s),Th.radius+=r,t.ray.intersectsSphere(Th)===!1)return;c_.copy(s).invert(),dc.copy(t.ray).applyMatrix4(c_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=p,g=f-1;x<g;x+=l){let m=h.getX(x),w=h.getX(x+1),E=Ah(this,t,dc,c,m,w,x);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(f-1),g=h.getX(p),m=Ah(this,t,dc,c,x,g,f-1);m&&e.push(m)}}else{let p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let x=p,g=f-1;x<g;x+=l){let m=Ah(this,t,dc,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Ah(this,t,dc,c,f-1,p,f-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ah(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Zh.fromBufferAttribute(a,s),$h.fromBufferAttribute(a,r),e.distanceSqToSegment(Zh,$h,Ip,l_)>n)return;Ip.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ip);if(!(l<t.near||l>t.far))return{distance:l,point:l_.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var h_=new k,u_=new k,Kh=class extends Jh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)h_.fromBufferAttribute(e,s),u_.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+h_.distanceTo(u_);t.setAttribute("lineDistance",new Se(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sa=class extends xs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},d_=new _e,Vp=new Yr,Eh=new si,Ch=new k,Lc=class extends Zn{constructor(t=new $e,e=new sa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eh.copy(n.boundingSphere),Eh.applyMatrix4(s),Eh.radius+=r,t.ray.intersectsSphere(Eh)===!1)return;d_.copy(s).invert(),Vp.copy(t.ray).applyMatrix4(d_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let f=d,x=p;f<x;f++){let g=l.getX(f);Ch.fromBufferAttribute(u,g),p_(Ch,g,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let f=d,x=p;f<x;f++)Ch.fromBufferAttribute(u,f),p_(Ch,f,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function p_(i,t,e,n,s,r,o){let a=Vp.distanceSqToPoint(i);if(a<e){let c=new k;Vp.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Uc=class extends jn{constructor(t=[],e=_r,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ra=class extends jn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var lr=class extends jn{constructor(t,e,n=$i,s,r,o,a=Sn,c=Sn,l,h=gs,u=1){if(h!==gs&&h!==yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ta(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qh=class extends lr{constructor(t,e=$i,n=_r,s,r,o=Sn,a=Sn,c,l=gs){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},kc=class extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},oa=class i extends $e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;f("z","y","x",-1,-1,n,e,t,o,r,0),f("z","y","x",1,-1,n,e,-t,o,r,1),f("x","z","y",1,1,t,n,e,s,o,2),f("x","z","y",1,-1,t,n,-e,s,o,3),f("x","y","z",1,-1,t,e,n,s,r,4),f("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2));function f(x,g,m,w,E,S,y,b,M,_,T){let C=S/M,I=y/_,P=S/2,V=y/2,O=b/2,F=M+1,D=_+1,R=0,G=0,U=new k;for(let W=0;W<D;W++){let B=W*I-V;for(let pt=0;pt<F;pt++){let xt=pt*C-P;U[x]=xt*w,U[g]=B*E,U[m]=O,l.push(U.x,U.y,U.z),U[x]=0,U[g]=0,U[m]=b>0?1:-1,h.push(U.x,U.y,U.z),u.push(pt/M),u.push(1-W/_),R+=1}}for(let W=0;W<_;W++)for(let B=0;B<M;B++){let pt=d+B+F*W,xt=d+B+F*(W+1),Yt=d+(B+1)+F*(W+1),Mt=d+(B+1)+F*W;c.push(pt,xt,Mt),c.push(xt,Yt,Mt),G+=6}a.addGroup(p,G,T),p+=G,d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new mt:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],r=[],o=[],a=new k,c=new _e;for(let p=0;p<=t;p++){let f=p/t;s[p]=this.getTangentAt(f,new k)}r[0]=new k,o[0]=new k;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(re(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(re(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(c.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},aa=class extends fi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},tu=class extends aa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pf(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var f_=new k,m_=new k,Np=new pf,Pp=new pf,Dp=new pf,eu=class extends fi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(m_.subVectors(s[0],s[1]).add(s[0]),l=m_);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(f_.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=f_),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),f<1e-4&&(f=x),g<1e-4&&(g=x),Np.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,f,x,g),Pp.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,f,x,g),Dp.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,f,x,g)}else this.curveType==="catmullrom"&&(Np.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Pp.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Dp.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Np.calc(c),Pp.calc(c),Dp.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function g_(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function qM(i,t){let e=1-i;return e*e*t}function XM(i,t){return 2*(1-i)*i*t}function YM(i,t){return i*i*t}function gc(i,t,e,n){return qM(i,t)+XM(i,e)+YM(i,n)}function jM(i,t){let e=1-i;return e*e*e*t}function ZM(i,t){let e=1-i;return 3*e*e*i*t}function $M(i,t){return 3*(1-i)*i*i*t}function JM(i,t){return i*i*i*t}function _c(i,t,e,n,s){return jM(i,t)+ZM(i,e)+$M(i,n)+JM(i,s)}var Bc=class extends fi{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_c(t,s.x,r.x,o.x,a.x),_c(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nu=class extends fi{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_c(t,s.x,r.x,o.x,a.x),_c(t,s.y,r.y,o.y,a.y),_c(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vc=class extends fi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},iu=class extends fi{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zc=class extends fi{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gc(t,s.x,r.x,o.x),gc(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},su=class extends fi{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gc(t,s.x,r.x,o.x),gc(t,s.y,r.y,o.y),gc(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gc=class extends fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(g_(a,c.x,l.x,h.x,u.x),g_(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},zp=Object.freeze({__proto__:null,ArcCurve:tu,CatmullRomCurve3:eu,CubicBezierCurve:Bc,CubicBezierCurve3:nu,EllipseCurve:aa,LineCurve:Vc,LineCurve3:iu,QuadraticBezierCurve:zc,QuadraticBezierCurve3:su,SplineCurve:Gc}),ru=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zp[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new zp[s.type]().fromJSON(s))}return this}},hr=class extends ru{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Vc(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new zc(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Bc(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Gc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new aa(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},jr=class extends hr{constructor(t){super(t),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new hr().fromJSON(s))}return this}};function KM(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=px(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=iw(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,u=c;for(let d=e;d<s;d+=e){let p=i[d],f=i[d+1];p<a&&(a=p),f<c&&(c=f),p>h&&(h=p),f>u&&(u=f)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Wc(r,o,e,a,c,l,0),o}function px(i,t,e,n,s){let r;if(s===fw(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=__(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=__(o/n|0,i[o],i[o+1],r);return r&&ca(r,r.next)&&(qc(r),r=r.next),r}function Zr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ca(e,e.next)||Ze(e.prev,e,e.next)===0)){if(qc(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wc(i,t,e,n,s,r,o){if(!i)return;!o&&r&&cw(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?tw(i,n,s,r):QM(i)){t.push(c.i,i.i,l.i),qc(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ew(Zr(i),t),Wc(i,t,e,n,s,r,2)):o===2&&nw(i,t,e,n,s,r):Wc(Zr(i),t,e,n,s,r,1);break}}}function QM(i){let t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),p=Math.max(a,c,l),f=n.next;for(;f!==t;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&pc(s,a,r,c,o,l,f.x,f.y)&&Ze(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function tw(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ze(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=Math.min(a,c,l),f=Math.min(h,u,d),x=Math.max(a,c,l),g=Math.max(h,u,d),m=Gp(p,f,t,e,n),w=Gp(x,g,t,e,n),E=i.prevZ,S=i.nextZ;for(;E&&E.z>=m&&S&&S.z<=w;){if(E.x>=p&&E.x<=x&&E.y>=f&&E.y<=g&&E!==s&&E!==o&&pc(a,h,c,u,l,d,E.x,E.y)&&Ze(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=p&&S.x<=x&&S.y>=f&&S.y<=g&&S!==s&&S!==o&&pc(a,h,c,u,l,d,S.x,S.y)&&Ze(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=m;){if(E.x>=p&&E.x<=x&&E.y>=f&&E.y<=g&&E!==s&&E!==o&&pc(a,h,c,u,l,d,E.x,E.y)&&Ze(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=w;){if(S.x>=p&&S.x<=x&&S.y>=f&&S.y<=g&&S!==s&&S!==o&&pc(a,h,c,u,l,d,S.x,S.y)&&Ze(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function ew(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ca(n,s)&&mx(n,e,e.next,s)&&Hc(n,s)&&Hc(s,n)&&(t.push(n.i,e.i,s.i),qc(e),qc(e.next),e=i=s),e=e.next}while(e!==i);return Zr(e)}function nw(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uw(o,a)){let c=gx(o,a);o=Zr(o,o.next),c=Zr(c,c.next),Wc(o,t,e,n,s,r,0),Wc(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function iw(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=px(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(hw(l))}s.sort(sw);for(let r=0;r<s.length;r++)e=rw(s[r],e);return e}function sw(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function rw(i,t){let e=ow(i,t);if(!e)return t;let n=gx(e,i);return Zr(n,n.next),Zr(e,e.next)}function ow(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ca(i,e))return e;do{if(ca(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&fx(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Hc(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&aw(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function aw(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function cw(i,t,e,n){let s=i;do s.z===0&&(s.z=Gp(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lw(s)}function lw(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Gp(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function hw(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fx(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function pc(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&fx(i,t,e,n,s,r,o,a)}function uw(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dw(i,t)&&(Hc(i,t)&&Hc(t,i)&&pw(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||ca(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ca(i,t){return i.x===t.x&&i.y===t.y}function mx(i,t,e,n){let s=Ih(Ze(i,t,e)),r=Ih(Ze(i,t,n)),o=Ih(Ze(e,n,i)),a=Ih(Ze(e,n,t));return!!(s!==r&&o!==a||s===0&&Rh(i,e,t)||r===0&&Rh(i,n,t)||o===0&&Rh(e,i,n)||a===0&&Rh(e,t,n))}function Rh(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ih(i){return i>0?1:i<0?-1:0}function dw(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mx(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Hc(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function pw(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gx(i,t){let e=Wp(i.i,i.x,i.y),n=Wp(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function __(i,t,e,n){let s=Wp(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qc(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wp(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fw(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hp=class{static triangulate(t,e,n=2){return KM(t,e,n)}},qr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];x_(t),y_(n,t);let o=t.length;e.forEach(x_);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,y_(n,e[c]);let a=Hp.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function x_(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function y_(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var la=class i extends $e{constructor(t=new jr([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,f=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:mw,E,S=!1,y,b,M,_;if(m){E=m.getSpacedPoints(h),S=!0,d=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(h,rt),b=new k,M=new k,_=new k}d||(g=0,p=0,f=0,x=0);let T=a.extractPoints(l),C=T.shape,I=T.holes;if(!qr.isClockWise(C)){C=C.reverse();for(let rt=0,j=I.length;rt<j;rt++){let nt=I[rt];qr.isClockWise(nt)&&(I[rt]=nt.reverse())}}function V(rt){let nt=10000000000000001e-36,ct=rt[0];for(let ht=1;ht<=rt.length;ht++){let _t=ht%rt.length,St=rt[_t],Ut=St.x-ct.x,jt=St.y-ct.y,z=Ut*Ut+jt*jt,Wt=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(ct.x),Math.abs(ct.y)),ne=nt*Wt*Wt;if(z<=ne){rt.splice(_t,1),ht--;continue}ct=St}}V(C),I.forEach(V);let O=I.length,F=C;for(let rt=0;rt<O;rt++){let j=I[rt];C=C.concat(j)}function D(rt,j,nt){return j||ee("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(j,nt)}let R=C.length;function G(rt,j,nt){let ct,ht,_t,St=rt.x-j.x,Ut=rt.y-j.y,jt=nt.x-rt.x,z=nt.y-rt.y,Wt=St*St+Ut*Ut,ne=St*z-Ut*jt;if(Math.abs(ne)>Number.EPSILON){let N=Math.sqrt(Wt),v=Math.sqrt(jt*jt+z*z),Y=j.x-Ut/N,K=j.y+St/N,it=nt.x-z/v,vt=nt.y+jt/v,wt=((it-Y)*z-(vt-K)*jt)/(St*z-Ut*jt);ct=Y+St*wt-rt.x,ht=K+Ut*wt-rt.y;let st=ct*ct+ht*ht;if(st<=2)return new mt(ct,ht);_t=Math.sqrt(st/2)}else{let N=!1;St>Number.EPSILON?jt>Number.EPSILON&&(N=!0):St<-Number.EPSILON?jt<-Number.EPSILON&&(N=!0):Math.sign(Ut)===Math.sign(z)&&(N=!0),N?(ct=-Ut,ht=St,_t=Math.sqrt(Wt)):(ct=St,ht=Ut,_t=Math.sqrt(Wt/2))}return new mt(ct/_t,ht/_t)}let U=[];for(let rt=0,j=F.length,nt=j-1,ct=rt+1;rt<j;rt++,nt++,ct++)nt===j&&(nt=0),ct===j&&(ct=0),U[rt]=G(F[rt],F[nt],F[ct]);let W=[],B,pt=U.concat();for(let rt=0,j=O;rt<j;rt++){let nt=I[rt];B=[];for(let ct=0,ht=nt.length,_t=ht-1,St=ct+1;ct<ht;ct++,_t++,St++)_t===ht&&(_t=0),St===ht&&(St=0),B[ct]=G(nt[ct],nt[_t],nt[St]);W.push(B),pt=pt.concat(B)}let xt;if(g===0)xt=qr.triangulateShape(F,I);else{let rt=[],j=[];for(let nt=0;nt<g;nt++){let ct=nt/g,ht=p*Math.cos(ct*Math.PI/2),_t=f*Math.sin(ct*Math.PI/2)+x;for(let St=0,Ut=F.length;St<Ut;St++){let jt=D(F[St],U[St],_t);Q(jt.x,jt.y,-ht),ct===0&&rt.push(jt)}for(let St=0,Ut=O;St<Ut;St++){let jt=I[St];B=W[St];let z=[];for(let Wt=0,ne=jt.length;Wt<ne;Wt++){let N=D(jt[Wt],B[Wt],_t);Q(N.x,N.y,-ht),ct===0&&z.push(N)}ct===0&&j.push(z)}}xt=qr.triangulateShape(rt,j)}let Yt=xt.length,Mt=f+x;for(let rt=0;rt<R;rt++){let j=d?D(C[rt],pt[rt],Mt):C[rt];S?(M.copy(y.normals[0]).multiplyScalar(j.x),b.copy(y.binormals[0]).multiplyScalar(j.y),_.copy(E[0]).add(M).add(b),Q(_.x,_.y,_.z)):Q(j.x,j.y,0)}for(let rt=1;rt<=h;rt++)for(let j=0;j<R;j++){let nt=d?D(C[j],pt[j],Mt):C[j];S?(M.copy(y.normals[rt]).multiplyScalar(nt.x),b.copy(y.binormals[rt]).multiplyScalar(nt.y),_.copy(E[rt]).add(M).add(b),Q(_.x,_.y,_.z)):Q(nt.x,nt.y,u/h*rt)}for(let rt=g-1;rt>=0;rt--){let j=rt/g,nt=p*Math.cos(j*Math.PI/2),ct=f*Math.sin(j*Math.PI/2)+x;for(let ht=0,_t=F.length;ht<_t;ht++){let St=D(F[ht],U[ht],ct);Q(St.x,St.y,u+nt)}for(let ht=0,_t=I.length;ht<_t;ht++){let St=I[ht];B=W[ht];for(let Ut=0,jt=St.length;Ut<jt;Ut++){let z=D(St[Ut],B[Ut],ct);S?Q(z.x,z.y+E[h-1].y,E[h-1].x+nt):Q(z.x,z.y,u+nt)}}}Ot(),J();function Ot(){let rt=s.length/3;if(d){let j=0,nt=R*j;for(let ct=0;ct<Yt;ct++){let ht=xt[ct];gt(ht[2]+nt,ht[1]+nt,ht[0]+nt)}j=h+g*2,nt=R*j;for(let ct=0;ct<Yt;ct++){let ht=xt[ct];gt(ht[0]+nt,ht[1]+nt,ht[2]+nt)}}else{for(let j=0;j<Yt;j++){let nt=xt[j];gt(nt[2],nt[1],nt[0])}for(let j=0;j<Yt;j++){let nt=xt[j];gt(nt[0]+R*h,nt[1]+R*h,nt[2]+R*h)}}n.addGroup(rt,s.length/3-rt,0)}function J(){let rt=s.length/3,j=0;X(F,j),j+=F.length;for(let nt=0,ct=I.length;nt<ct;nt++){let ht=I[nt];X(ht,j),j+=ht.length}n.addGroup(rt,s.length/3-rt,1)}function X(rt,j){let nt=rt.length;for(;--nt>=0;){let ct=nt,ht=nt-1;ht<0&&(ht=rt.length-1);for(let _t=0,St=h+g*2;_t<St;_t++){let Ut=R*_t,jt=R*(_t+1),z=j+ct+Ut,Wt=j+ht+Ut,ne=j+ht+jt,N=j+ct+jt;ft(z,Wt,ne,N)}}}function Q(rt,j,nt){c.push(rt),c.push(j),c.push(nt)}function gt(rt,j,nt){Lt(rt),Lt(j),Lt(nt);let ct=s.length/3,ht=w.generateTopUV(n,s,ct-3,ct-2,ct-1);he(ht[0]),he(ht[1]),he(ht[2])}function ft(rt,j,nt,ct){Lt(rt),Lt(j),Lt(ct),Lt(j),Lt(nt),Lt(ct);let ht=s.length/3,_t=w.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);he(_t[0]),he(_t[1]),he(_t[3]),he(_t[1]),he(_t[2]),he(_t[3])}function Lt(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function he(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gw(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new zp[s.type]().fromJSON(s)),new i(n,t.options)}},mw={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new mt(r,o),new mt(a,c),new mt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],f=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new mt(o,1-c),new mt(l,1-u),new mt(d,1-f),new mt(x,1-m)]:[new mt(a,1-c),new mt(h,1-u),new mt(p,1-f),new mt(g,1-m)]}};function gw(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Xc=class i extends $e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],f=[],x=[],g=[];for(let m=0;m<h;m++){let w=m*d-o;for(let E=0;E<l;E++){let S=E*u-r;f.push(S,-w,0),x.push(0,0,1),g.push(E/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){let E=w+l*m,S=w+l*(m+1),y=w+1+l*(m+1),b=w+1+l*m;p.push(E,S,b),p.push(S,y,b)}this.setIndex(p),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ur=class i extends $e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new k,d=new k,p=[],f=[],x=[],g=[];for(let m=0;m<=n;m++){let w=[],E=m/n,S=o+E*a,y=t*Math.cos(S),b=Math.sqrt(t*t-y*y),M=0;m===0&&o===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let _=0;_<=e;_++){let T=_/e,C=s+T*r;u.x=-b*Math.cos(C),u.y=y,u.z=b*Math.sin(C),f.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+M,1-E),w.push(l++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){let E=h[m][w+1],S=h[m][w],y=h[m+1][w],b=h[m+1][w+1];(m!==0||o>0)&&p.push(E,S,b),(m!==n-1||c<Math.PI)&&p.push(S,y,b)}this.setIndex(p),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ha=class i extends $e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new k,p=new k,f=new k;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let m=0;m<=s;m++){let w=m/s*r;p.x=(t+e*Math.cos(g))*Math.cos(w),p.y=(t+e*Math.cos(g))*Math.sin(w),p.z=e*Math.sin(g),l.push(p.x,p.y,p.z),d.x=t*Math.cos(w),d.y=t*Math.sin(w),f.subVectors(p,d).normalize(),h.push(f.x,f.y,f.z),u.push(m/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,w=(s+1)*(x-1)+g-1,E=(s+1)*(x-1)+g,S=(s+1)*x+g;c.push(m,w,S),c.push(w,E,S)}this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Yc=class extends $e{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new k,r=new k;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start,p=u.count;for(let f=d,x=d+p;f<x;f+=3)for(let g=0;g<3;g++){let m=a.getX(f+g),w=a.getX(f+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,w),v_(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let h=3*a+l,u=3*a+(l+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),v_(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Se(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function v_(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Qr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(S_(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(S_(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Wn(i){let t={};for(let e=0;e<i.length;e++){let n=Qr(i[e]);for(let s in n)t[s]=n[s]}return t}function S_(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _w(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ff(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Di={clone:Qr,merge:Wn},xw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xw,this.fragmentShader=yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=_w(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new se().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ua=class extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ou=class extends xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},au=class extends xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Op(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var dr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cu=class extends dr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Up,endingEnd:Up}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kp:r=t,a=2*e-n;break;case Bp:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kp:o=t,c=2*n-e;break;case Bp:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-e)/(s-e),x=f*f,g=x*f,m=-d*g+2*d*x-d*f,w=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*f+1,E=(-1-p)*g+(1.5+p)*x+.5*f,S=p*g-p*x;for(let y=0;y!==a;++y)r[y]=m*o[h+y]+w*o[l+y]+E*o[c+y]+S*o[u+y];return r}},lu=class extends dr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},hu=class extends dr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},uu=class extends dr{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let f=(n-e)/(s-e),x=1-f;for(let g=0;g!==a;++g)r[g]=o[l+g]*x+o[c+g]*f;return r}let d=a*2,p=t-1;for(let f=0;f!==a;++f){let x=o[l+f],g=o[c+f],m=p*d+f*2,w=u[m],E=u[m+1],S=t*d+f*2,y=h[S],b=h[S+1],M=Sw(n,e,w,y,s);r[f]=_x(M,x,E,b,g)}return r}};function _x(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function vw(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Sw(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=_x(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=vw(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var mi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qo(e,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qo(t.times,Array),values:qo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Op(t.settings)&&(n.settings={inTangents:qo(t.settings.inTangents,Array),outTangents:qo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new lu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new uu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xc:e=this.InterpolantFactoryMethodDiscrete;break;case qh:e=this.InterpolantFactoryMethodLinear;break;case Oh:e=this.InterpolantFactoryMethodSmooth;break;case Lp:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xc;case this.InterpolantFactoryMethodLinear:return qh;case this.InterpolantFactoryMethodSmooth:return Oh;case this.InterpolantFactoryMethodBezier:return Lp}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Op(this.settings)&&(b_(this.settings.inTangents,t),b_(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ee("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ee("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&lM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ee("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oh,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let f=0;f!==n;++f){let x=e[u+f];if(x!==e[d+f]||x!==e[p+f]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Op(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function b_(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}mi.prototype.ValueTypeName="";mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=qh;var pr=class extends mi{constructor(t,e,n){super(t,e,n)}};pr.prototype.ValueTypeName="bool";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=xc;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}};du.prototype.ValueTypeName="color";var pu=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}};pu.prototype.ValueTypeName="number";var fu=class extends dr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ui.slerpFlat(r,0,o,l-a,o,l,c);return r}},jc=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new fu(this.times,this.values,this.getValueSize(),t)}};jc.prototype.ValueTypeName="quaternion";jc.prototype.InterpolantFactoryMethodSmooth=void 0;var fr=class extends mi{constructor(t,e,n){super(t,e,n)}};fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=xc;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var mu=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}};mu.prototype.ValueTypeName="vector";var gu=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xx=new gu,_u=class{constructor(t){this.manager=t!==void 0?t:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_u.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nh=new k,Ph=new ui,ps=new k,Zc=class extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Nh,Ph,ps),ps.x===1&&ps.y===1&&ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nh,Ph,ps.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Nh,Ph,ps),ps.x===1&&ps.y===1&&ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nh,Ph,ps.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ar=new k,M_=new mt,w_=new mt,zn=class extends Zc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ar.x,ar.y).multiplyScalar(-t/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-t/ar.z)}getViewSize(t,e){return this.getViewBounds(t,M_,w_),e.subVectors(w_,M_)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $r=class extends Zc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var $c=class extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Xo=-90,Yo=1,xu=class extends Zn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zn(Xo,Yo,t,e);s.layers=this.layers,this.add(s);let r=new zn(Xo,Yo,t,e);r.layers=this.layers,this.add(r);let o=new zn(Xo,Yo,t,e);o.layers=this.layers,this.add(o);let a=new zn(Xo,Yo,t,e);a.layers=this.layers,this.add(a);let c=new zn(Xo,Yo,t,e);c.layers=this.layers,this.add(c);let l=new zn(Xo,Yo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},yu=class extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Jc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=bw.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function bw(){this._document.hidden===!1&&this.reset()}var mf="\\[\\]\\.:\\/",Mw=new RegExp("["+mf+"]","g"),gf="[^"+mf+"]",ww="[^"+mf.replace("\\.","")+"]",Tw=/((?:WC+[\/:])*)/.source.replace("WC",gf),Aw=/(WCOD+)?/.source.replace("WCOD",ww),Ew=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gf),Cw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gf),Rw=new RegExp("^"+Tw+Aw+Ew+Cw+"$"),Iw=["material","materials","bones","map"],qp=class{constructor(t,e,n){let s=n||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ge=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mw,"")}static parseTrackName(t){let e=Rw.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Iw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=qp;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yN=new Float32Array(1);var mr=class extends Rc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var T_=new _e,Kc=class{constructor(t,e,n=0,s=1/0){this.ray=new Yr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return T_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(T_),this}intersectObject(t,e=!0,n=[]){return Xp(t,this,n,e),n.sort(A_),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Xp(t[s],this,n,e);return n.sort(A_),n}};function A_(i,t){return i.distance-t.distance}function Xp(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Xp(r[o],t,e,!0)}}var Yp=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var E_=new k,Dh=new k,jo=new k,Zo=new k,Fp=new k,Nw=new k,Pw=new k,Qc=class{constructor(t=new k,e=new k){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){E_.subVectors(t,this.start),Dh.subVectors(this.end,this.start);let n=Dh.dot(Dh);if(n===0)return 0;let r=Dh.dot(E_)/n;return e&&(r=re(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Nw,n=Pw){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,h=t.end;jo.subVectors(l,a),Zo.subVectors(h,c),Fp.subVectors(a,c);let u=jo.dot(jo),d=Zo.dot(Zo),p=Zo.dot(Fp);if(u<=s&&d<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(u<=s)r=0,o=p/d,o=re(o,0,1);else{let f=jo.dot(Fp);if(d<=s)o=0,r=re(-f/u,0,1);else{let x=jo.dot(Zo),g=u*d-x*x;g!==0?r=re((x*p-f*d)/g,0,1):r=0,o=(x*r+p)/d,o<0?(o=0,r=re(-f/u,0,1)):o>1&&(o=1,r=re((x-f)/u,0,1))}}return e.copy(a).addScaledVector(jo,r),n.copy(c).addScaledVector(Zo,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var tl=class extends Kh{constructor(t=10,e=10,n=4473924,s=8947848){n=new Qt(n),s=new Qt(s);let r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,p=0,f=-a;d<=e;d++,f+=o){c.push(-a,0,f,a,0,f),c.push(f,0,-a,f,0,a);let x=d===r?n:s;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}let h=new $e;h.setAttribute("position",new Se(c,3)),h.setAttribute("color",new Se(l,3));let u=new Fc({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function _f(i,t,e,n){let s=Dw(n);switch(e){case of:return i*t;case Au:return i*t/s.components*s.byteLength;case Eu:return i*t/s.components*s.byteLength;case vr:return i*t*2/s.components*s.byteLength;case Cu:return i*t*2/s.components*s.byteLength;case af:return i*t*3/s.components*s.byteLength;case Pi:return i*t*4/s.components*s.byteLength;case Ru:return i*t*4/s.components*s.byteLength;case dl:case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fl:case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nu:case Du:return Math.max(i,16)*Math.max(t,8)/4;case Iu:case Pu:return Math.max(i,8)*Math.max(t,8)/2;case Ou:case Fu:case Uu:case ku:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lu:case gl:case Bu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ju:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Zu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $u:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ju:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ku:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case td:case ed:case nd:return Math.ceil(i/4)*Math.ceil(t/4)*16;case id:case sd:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _l:case rd:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dw(i){switch(i){case gi:case ef:return{byteLength:1,components:1};case fa:case nf:case Cn:return{byteLength:2,components:1};case wu:case Tu:return{byteLength:2,components:4};case $i:case Mu:case Ni:return{byteLength:4,components:1};case sf:case rf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vx(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fw(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){let f=u[d],x=u[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){let x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Lw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ww=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$w=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ST=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ET=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,CT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,RT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,BT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,QT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_A=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,LA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Lw,alphahash_pars_fragment:Uw,alphamap_fragment:kw,alphamap_pars_fragment:Bw,alphatest_fragment:Vw,alphatest_pars_fragment:zw,aomap_fragment:Gw,aomap_pars_fragment:Ww,batching_pars_vertex:Hw,batching_vertex:qw,begin_vertex:Xw,beginnormal_vertex:Yw,bsdfs:jw,iridescence_fragment:Zw,bumpmap_pars_fragment:$w,clipping_planes_fragment:Jw,clipping_planes_pars_fragment:Kw,clipping_planes_pars_vertex:Qw,clipping_planes_vertex:tT,color_fragment:eT,color_pars_fragment:nT,color_pars_vertex:iT,color_vertex:sT,common:rT,cube_uv_reflection_fragment:oT,defaultnormal_vertex:aT,displacementmap_pars_vertex:cT,displacementmap_vertex:lT,emissivemap_fragment:hT,emissivemap_pars_fragment:uT,colorspace_fragment:dT,colorspace_pars_fragment:pT,envmap_fragment:fT,envmap_common_pars_fragment:mT,envmap_pars_fragment:gT,envmap_pars_vertex:_T,envmap_physical_pars_fragment:CT,envmap_vertex:xT,fog_vertex:yT,fog_pars_vertex:vT,fog_fragment:ST,fog_pars_fragment:bT,gradientmap_pars_fragment:MT,lightmap_pars_fragment:wT,lights_lambert_fragment:TT,lights_lambert_pars_fragment:AT,lights_pars_begin:ET,lights_toon_fragment:RT,lights_toon_pars_fragment:IT,lights_phong_fragment:NT,lights_phong_pars_fragment:PT,lights_physical_fragment:DT,lights_physical_pars_fragment:OT,lights_fragment_begin:FT,lights_fragment_maps:LT,lights_fragment_end:UT,lightprobes_pars_fragment:kT,logdepthbuf_fragment:BT,logdepthbuf_pars_fragment:VT,logdepthbuf_pars_vertex:zT,logdepthbuf_vertex:GT,map_fragment:WT,map_pars_fragment:HT,map_particle_fragment:qT,map_particle_pars_fragment:XT,metalnessmap_fragment:YT,metalnessmap_pars_fragment:jT,morphinstance_vertex:ZT,morphcolor_vertex:$T,morphnormal_vertex:JT,morphtarget_pars_vertex:KT,morphtarget_vertex:QT,normal_fragment_begin:tA,normal_fragment_maps:eA,normal_pars_fragment:nA,normal_pars_vertex:iA,normal_vertex:sA,normalmap_pars_fragment:rA,clearcoat_normal_fragment_begin:oA,clearcoat_normal_fragment_maps:aA,clearcoat_pars_fragment:cA,iridescence_pars_fragment:lA,opaque_fragment:hA,packing:uA,premultiplied_alpha_fragment:dA,project_vertex:pA,dithering_fragment:fA,dithering_pars_fragment:mA,roughnessmap_fragment:gA,roughnessmap_pars_fragment:_A,shadowmap_pars_fragment:xA,shadowmap_pars_vertex:yA,shadowmap_vertex:vA,shadowmask_pars_fragment:SA,skinbase_vertex:bA,skinning_pars_vertex:MA,skinning_vertex:wA,skinnormal_vertex:TA,specularmap_fragment:AA,specularmap_pars_fragment:EA,tonemapping_fragment:CA,tonemapping_pars_fragment:RA,transmission_fragment:IA,transmission_pars_fragment:NA,uv_pars_fragment:PA,uv_pars_vertex:DA,uv_vertex:OA,worldpos_vertex:FA,background_vert:LA,background_frag:UA,backgroundCube_vert:kA,backgroundCube_frag:BA,cube_vert:VA,cube_frag:zA,depth_vert:GA,depth_frag:WA,distance_vert:HA,distance_frag:qA,equirect_vert:XA,equirect_frag:YA,linedashed_vert:jA,linedashed_frag:ZA,meshbasic_vert:$A,meshbasic_frag:JA,meshlambert_vert:KA,meshlambert_frag:QA,meshmatcap_vert:tE,meshmatcap_frag:eE,meshnormal_vert:nE,meshnormal_frag:iE,meshphong_vert:sE,meshphong_frag:rE,meshphysical_vert:oE,meshphysical_frag:aE,meshtoon_vert:cE,meshtoon_frag:lE,points_vert:hE,points_frag:uE,shadow_vert:dE,shadow_frag:pE,sprite_vert:fE,sprite_frag:mE},Tt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Kn={basic:{uniforms:Wn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Wn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Wn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Wn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Wn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Wn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Wn([Tt.points,Tt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Wn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Wn([Tt.common,Tt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Wn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Wn([Tt.sprite,Tt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:Wn([Tt.common,Tt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:Wn([Tt.lights,Tt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Kn.physical={uniforms:Wn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var cd={r:0,b:0,g:0},gE=new _e,zx=new se;zx.set(-1,0,0,0,1,0,0,0,1);function _E(i,t,e,n,s,r){let o=new Qt(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function p(w){let E=w.isScene===!0?w.background:null;if(E&&E.isTexture){let S=w.backgroundBlurriness>0;E=t.get(E,S)}return E}function f(w){let E=!1,S=p(w);S===null?g(o,a):S&&S.isColor&&(g(S,1),E=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(w,E){let S=p(E);S&&(S.isCubeTexture||S.mapping===hl)?(l===void 0&&(l=new Je(new oa(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:Qr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(gE.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zx),l.material.toneMapped=ue.getTransfer(S.colorSpace)!==xe,(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Je(new Xc(2,2),new Ke({name:"BackgroundMaterial",uniforms:Qr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ue.getTransfer(S.colorSpace)!==xe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,E){w.getRGB(cd,ff(i)),e.buffers.color.setClear(cd.r,cd.g,cd.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,g(o,a)},render:f,addToRenderList:x,dispose:m}}function xE(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,P,V,O,F){let D=!1,R=u(I,O,V,P);r!==R&&(r=R,l(r.object)),D=p(I,O,V,F),D&&f(I,O,V,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,S(I,P,V,O),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,P,V,O){let F=O.wireframe===!0,D=n[P.id];D===void 0&&(D={},n[P.id]=D);let R=I.isInstancedMesh===!0?I.id:0,G=D[R];G===void 0&&(G={},D[R]=G);let U=G[V.id];U===void 0&&(U={},G[V.id]=U);let W=U[F];return W===void 0&&(W=d(c()),U[F]=W),W}function d(I){let P=[],V=[],O=[];for(let F=0;F<e;F++)P[F]=0,V[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:O,object:I,attributes:{},index:null}}function p(I,P,V,O){let F=r.attributes,D=P.attributes,R=0,G=V.getAttributes();for(let U in G)if(G[U].location>=0){let B=F[U],pt=D[U];if(pt===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(pt=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(pt=I.instanceColor)),B===void 0||B.attribute!==pt||pt&&B.data!==pt.data)return!0;R++}return r.attributesNum!==R||r.index!==O}function f(I,P,V,O){let F={},D=P.attributes,R=0,G=V.getAttributes();for(let U in G)if(G[U].location>=0){let B=D[U];B===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(B=I.instanceColor));let pt={};pt.attribute=B,B&&B.data&&(pt.data=B.data),F[U]=pt,R++}r.attributes=F,r.attributesNum=R,r.index=O}function x(){let I=r.newAttributes;for(let P=0,V=I.length;P<V;P++)I[P]=0}function g(I){m(I,0)}function m(I,P){let V=r.newAttributes,O=r.enabledAttributes,F=r.attributeDivisors;V[I]=1,O[I]===0&&(i.enableVertexAttribArray(I),O[I]=1),F[I]!==P&&(i.vertexAttribDivisor(I,P),F[I]=P)}function w(){let I=r.newAttributes,P=r.enabledAttributes;for(let V=0,O=P.length;V<O;V++)P[V]!==I[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function E(I,P,V,O,F,D,R){R===!0?i.vertexAttribIPointer(I,P,V,F,D):i.vertexAttribPointer(I,P,V,O,F,D)}function S(I,P,V,O){x();let F=O.attributes,D=V.getAttributes(),R=P.defaultAttributeValues;for(let G in D){let U=D[G];if(U.location>=0){let W=F[G];if(W===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){let B=W.normalized,pt=W.itemSize,xt=t.get(W);if(xt===void 0)continue;let Yt=xt.buffer,Mt=xt.type,Ot=xt.bytesPerElement,J=Mt===i.INT||Mt===i.UNSIGNED_INT||W.gpuType===Mu;if(W.isInterleavedBufferAttribute){let X=W.data,Q=X.stride,gt=W.offset;if(X.isInstancedInterleavedBuffer){for(let ft=0;ft<U.locationSize;ft++)m(U.location+ft,X.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ft=0;ft<U.locationSize;ft++)g(U.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let ft=0;ft<U.locationSize;ft++)E(U.location+ft,pt/U.locationSize,Mt,B,Q*Ot,(gt+pt/U.locationSize*ft)*Ot,J)}else{if(W.isInstancedBufferAttribute){for(let X=0;X<U.locationSize;X++)m(U.location+X,W.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let X=0;X<U.locationSize;X++)g(U.location+X);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let X=0;X<U.locationSize;X++)E(U.location+X,pt/U.locationSize,Mt,B,pt*Ot,pt/U.locationSize*X*Ot,J)}}else if(R!==void 0){let B=R[G];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(U.location,B);break;case 3:i.vertexAttrib3fv(U.location,B);break;case 4:i.vertexAttrib4fv(U.location,B);break;default:i.vertexAttrib1fv(U.location,B)}}}}w()}function y(){T();for(let I in n){let P=n[I];for(let V in P){let O=P[V];for(let F in O){let D=O[F];for(let R in D)h(D[R].object),delete D[R];delete O[F]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let P=n[I.id];for(let V in P){let O=P[V];for(let F in O){let D=O[F];for(let R in D)h(D[R].object),delete D[R];delete O[F]}}delete n[I.id]}function M(I){for(let P in n){let V=n[P];for(let O in V){let F=V[O];if(F[I.id]===void 0)continue;let D=F[I.id];for(let R in D)h(D[R].object),delete D[R];delete F[I.id]}}}function _(I){for(let P in n){let V=n[P],O=I.isInstancedMesh===!0?I.id:0,F=V[O];if(F!==void 0){for(let D in F){let R=F[D];for(let G in R)h(R[G].object),delete R[G];delete F[D]}delete V[O],Object.keys(V).length===0&&delete n[P]}}}function T(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function yE(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let p=0;p<h;p++)d+=l[p];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function vE(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==Pi&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){let _=M===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==gi&&M!==Ni&&!_&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Kt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,maxSamples:y,samples:b}}function SE(i){let t=this,e=null,n=0,s=!1,r=!1,o=new qi,a=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let f=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||f===null||f.length===0||r&&!g)r?h(null):l();else{let w=r?0:n,E=w*4,S=m.clippingState||null;c.value=S,S=h(f,d,E,p);for(let y=0;y!==E;++y)S[y]=e[y];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,f){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,f!==!0||g===null){let m=p+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,S=p;E!==x;++E,S+=4)o.copy(u[E]).applyMatrix4(w,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var _a=4,bE=6,ME=20,wE=256,xl=new $r,yx=new Qt,xf=null,yf=0,vf=0,Sf=!1,TE=new k,to=new k,hd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=TE}=r;xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xf,yf,vf),this._renderer.xr.enabled=Sf,t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_r||t.mapping===Kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Cn,format:Pi,colorSpace:yc,depthBuffer:!1},s=vx(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vx(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=AE(r)),this._blurMaterial=CE(r,t,e),this._ggxMaterial=EE(r,t,e)}return s}_compileMaterial(t){let e=new Je(new $e,t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,n,s,r){let c=new zn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(yx),u.toneMapping=Zi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new oa,new pi({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,m=!0):(g.color.copy(yx),m=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let y=this._cubeSize;ga(s,S*y,E>2?y:0,y,y),u.setRenderTarget(s),m&&u.render(x,c),u.render(t,c)}u.toneMapping=p,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_r||t.mapping===Kr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sx());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ga(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,p=u*d,{_lodMax:f}=this,x=this._sizeLods[n],g=3*x*(n>f-_a?n-f+_a:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=f-e,ga(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(a,xl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=f-n,ga(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(a,xl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-_a?s-this._lodMax+_a:0),d=4*(this._cubeSize-h);ga(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(c,xl)}};function AE(i){let t=[],e=[],n=i,s=i-_a+1+bE;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,p=3,f=new Float32Array(p*d*u),x=new Float32Array(p*d*u);for(let m=0;m<u;m++){let w=m%3*2/3-1,E=m>2?0:-1,S=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];f.set(S,p*d*m);for(let y=0;y<d;y++){let b=h[y*2]*2-1,M=h[y*2+1]*2-1;m===0?to.set(1,M,b):m===1?to.set(-b,1,-M):m===2?to.set(-b,M,1):m===3?to.set(-1,M,-b):m===4?to.set(-b,-1,M):to.set(b,M,-1),to.toArray(x,(m*d+y)*p)}}let g=new $e;g.setAttribute("position",new Gn(f,p)),g.setAttribute("outputDirection",new Gn(x,p)),e.push(new Je(g,null)),n>_a&&n--}return{lodMeshes:e,sizeLods:t}}function vx(i,t,e){let n=new dn(i,t,e);return n.texture.mapping=hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function EE(i,t,e){return new Ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function CE(i,t,e){return new Ke({name:"SphericalGaussianBlur",defines:{SAMPLES:ME,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Sx(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function bx(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function pd(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ud=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new oa(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:Qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Ii});r.uniforms.tEquirect.value=e;let o=new Je(s,r),a=e.minFilter;return e.minFilter===xr&&(e.minFilter=En),new xu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function RE(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?o(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===vu||p===Su)if(t.has(d)){let f=t.get(d).texture;return a(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let x=new ud(f.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let p=d.mapping,f=p===vu||p===Su,x=p===_r||p===Kr;if(f||x){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new hd(i)),g=f?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let w=d.image;return f&&w&&w.height>0||x&&w&&c(w)?(n===null&&(n=new hd(i)),g=f?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,p){return p===vu?d.mapping=_r:p===Su&&(d.mapping=Kr),d}function c(d){let p=0,f=6;for(let x=0;x<f;x++)d[x]!==void 0&&p++;return p===f}function l(d){let p=d.target;p.removeEventListener("dispose",l);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function h(d){let p=d.target;p.removeEventListener("dispose",h);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function IE(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xr("WebGLRenderer: "+n+" extension not supported."),s}}}function NE(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let f in d.attributes)t.remove(d.attributes[f]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,f=u.attributes.position,x=0;if(f===void 0)return;if(p!==null){let w=p.array;x=p.version;for(let E=0,S=w.length;E<S;E+=3){let y=w[E+0],b=w[E+1],M=w[E+2];d.push(y,b,b,M,M,y)}}else{let w=f.array;x=f.version;for(let E=0,S=w.length/3-1;E<S;E+=3){let y=E+0,b=E+1,M=E+2;d.push(y,b,b,M,M,y)}}let g=new(f.count>=65535?Cc:Ec)(d,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function PE(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function l(u,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,u*o,p),e.update(d,n,p))}function h(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,p);let x=0;for(let g=0;g<p;g++)x+=d[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function DE(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function OE(i,t,e){let n=new WeakMap,s=new Ce;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],E=0;p===!0&&(E=1),f===!0&&(E=2),x===!0&&(E=3);let S=a.attributes.position.count*E,y=1;S>t.maxTextureSize&&(y=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let b=new Float32Array(S*y*4*u),M=new wc(b,S,y,u);M.type=Ni,M.needsUpdate=!0;let _=E*4;for(let C=0;C<u;C++){let I=g[C],P=m[C],V=w[C],O=S*y*4*C;for(let F=0;F<I.count;F++){let D=F*_;p===!0&&(s.fromBufferAttribute(I,F),b[O+D+0]=s.x,b[O+D+1]=s.y,b[O+D+2]=s.z,b[O+D+3]=0),f===!0&&(s.fromBufferAttribute(P,F),b[O+D+4]=s.x,b[O+D+5]=s.y,b[O+D+6]=s.z,b[O+D+7]=0),x===!0&&(s.fromBufferAttribute(V,F),b[O+D+8]=s.x,b[O+D+9]=s.y,b[O+D+10]=s.z,b[O+D+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:M,size:new mt(S,y)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let f=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function FE(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=t.get(l,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var LE={[il]:"LINEAR_TONE_MAPPING",[sl]:"REINHARD_TONE_MAPPING",[rl]:"CINEON_TONE_MAPPING",[ol]:"ACES_FILMIC_TONE_MAPPING",[cl]:"AGX_TONE_MAPPING",[ll]:"NEUTRAL_TONE_MAPPING",[al]:"CUSTOM_TONE_MAPPING"};function UE(i,t,e,n,s,r){let o=new dn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new $e;l.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Se([0,2,0,0,2,0],2));let h=new ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Je(l,h),d=new $r(-1,1,1,-1,0,1),p=null,f=null,x=!1,g,m=null,w=[],E=!1;this.setSize=function(S,y){o.setSize(S,y),a!==null&&a.setSize(S,y),c!==null&&c.setSize(S,y);for(let b=0;b<w.length;b++){let M=w[b];M.setSize&&M.setSize(S,y)}},this.setEffects=function(S){w=S,E=w.length>0&&w[0].isRenderPass===!0;let y=o.width,b=o.height;w.length>0&&a===null&&(a=new dn(y,b,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new dn(y,b,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let M=0;M<w.length;M++){let _=w[M];_.setSize&&_.setSize(y,b)}},this.begin=function(S,y){if(x||S.toneMapping===Zi&&w.length===0)return!1;if(m=y,y!==null){let b=y.width,M=y.height;(o.width!==b||o.height!==M)&&this.setSize(b,M)}return E===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Zi,!0},this.hasRenderPass=function(){return E},this.end=function(S,y){S.toneMapping=g,x=!0;let b=o,M=a;for(let _=0;_<w.length;_++){let T=w[_];T.enabled!==!1&&(T.render(S,M,b,y),T.needsSwap!==!1&&(b=M,M=M===a?c:a))}if(p!==S.outputColorSpace||f!==S.toneMapping){p=S.outputColorSpace,f=S.toneMapping,h.defines={},ue.getTransfer(p)===xe&&(h.defines.SRGB_TRANSFER="");let _=LE[f];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(m),S.render(u,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Gx=new jn,wf=new lr(1,1),Wx=new wc,Hx=new jh,qx=new Uc,Mx=[],wx=[],Tx=new Float32Array(16),Ax=new Float32Array(9),Ex=new Float32Array(4);function ya(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Mx[s];if(r===void 0&&(r=new Float32Array(s),Mx[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function fn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fd(i,t){let e=wx[t];e===void 0&&(e=new Int32Array(t),wx[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kE(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function BE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2fv(this.addr,t),mn(e,t)}}function VE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;i.uniform3fv(this.addr,t),mn(e,t)}}function zE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4fv(this.addr,t),mn(e,t)}}function GE(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(fn(e,n))return;Ex.set(n),i.uniformMatrix2fv(this.addr,!1,Ex),mn(e,n)}}function WE(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(fn(e,n))return;Ax.set(n),i.uniformMatrix3fv(this.addr,!1,Ax),mn(e,n)}}function HE(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(fn(e,n))return;Tx.set(n),i.uniformMatrix4fv(this.addr,!1,Tx),mn(e,n)}}function qE(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function XE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2iv(this.addr,t),mn(e,t)}}function YE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3iv(this.addr,t),mn(e,t)}}function jE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4iv(this.addr,t),mn(e,t)}}function ZE(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $E(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2uiv(this.addr,t),mn(e,t)}}function JE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3uiv(this.addr,t),mn(e,t)}}function KE(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4uiv(this.addr,t),mn(e,t)}}function QE(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wf.compareFunction=e.isReversedDepthBuffer()?ad:od,r=wf):r=Gx,e.setTexture2D(t||r,s)}function t1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hx,s)}function e1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qx,s)}function n1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wx,s)}function i1(i){switch(i){case 5126:return kE;case 35664:return BE;case 35665:return VE;case 35666:return zE;case 35674:return GE;case 35675:return WE;case 35676:return HE;case 5124:case 35670:return qE;case 35667:case 35671:return XE;case 35668:case 35672:return YE;case 35669:case 35673:return jE;case 5125:return ZE;case 36294:return $E;case 36295:return JE;case 36296:return KE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return n1}}function s1(i,t){i.uniform1fv(this.addr,t)}function r1(i,t){let e=ya(t,this.size,2);i.uniform2fv(this.addr,e)}function o1(i,t){let e=ya(t,this.size,3);i.uniform3fv(this.addr,e)}function a1(i,t){let e=ya(t,this.size,4);i.uniform4fv(this.addr,e)}function c1(i,t){let e=ya(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function l1(i,t){let e=ya(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function h1(i,t){let e=ya(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function u1(i,t){i.uniform1iv(this.addr,t)}function d1(i,t){i.uniform2iv(this.addr,t)}function p1(i,t){i.uniform3iv(this.addr,t)}function f1(i,t){i.uniform4iv(this.addr,t)}function m1(i,t){i.uniform1uiv(this.addr,t)}function g1(i,t){i.uniform2uiv(this.addr,t)}function _1(i,t){i.uniform3uiv(this.addr,t)}function x1(i,t){i.uniform4uiv(this.addr,t)}function y1(i,t,e){let n=this.cache,s=t.length,r=fd(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=wf:o=Gx;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function v1(i,t,e){let n=this.cache,s=t.length,r=fd(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hx,r[o])}function S1(i,t,e){let n=this.cache,s=t.length,r=fd(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qx,r[o])}function b1(i,t,e){let n=this.cache,s=t.length,r=fd(e,s);fn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wx,r[o])}function M1(i){switch(i){case 5126:return s1;case 35664:return r1;case 35665:return o1;case 35666:return a1;case 35674:return c1;case 35675:return l1;case 35676:return h1;case 5124:case 35670:return u1;case 35667:case 35671:return d1;case 35668:case 35672:return p1;case 35669:case 35673:return f1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return b1}}var Tf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=i1(e.type)}},Af=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M1(e.type)}},Ef=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},bf=/(\w+)(\])?(\[|\.)?/g;function Cx(i,t){i.seq.push(t),i.map[t.id]=t}function w1(i,t,e){let n=i.name,s=n.length;for(bf.lastIndex=0;;){let r=bf.exec(n),o=bf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Cx(e,l===void 0?new Tf(a,i,t):new Af(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ef(a),Cx(e,u)),e=u}}}var xa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);w1(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Rx(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var T1=37297,A1=0;function E1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ix=new se;function C1(i){ue._getMatrix(Ix,ue.workingColorSpace,i);let t=`mat3( ${Ix.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case vc:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nx(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+E1(i.getShaderSource(t),a)}else return r}function R1(i,t){let e=C1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var I1={[il]:"Linear",[sl]:"Reinhard",[rl]:"Cineon",[ol]:"ACESFilmic",[cl]:"AgX",[ll]:"Neutral",[al]:"Custom"};function N1(i,t){let e=I1[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ld=new k;function P1(){ue.getLuminanceCoefficients(ld);let i=ld.x.toFixed(4),t=ld.y.toFixed(4),e=ld.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function O1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function F1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vl(i){return i!==""}function Px(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dx(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(i){return i.replace(L1,k1)}var U1=new Map;function k1(i,t){let e=ce[t];if(e===void 0){let n=U1.get(t);if(n!==void 0)e=ce[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Cf(e)}var B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ox(i){return i.replace(B1,V1)}function V1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fx(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var z1={[el]:"SHADOWMAP_TYPE_PCF",[da]:"SHADOWMAP_TYPE_VSM"};function G1(i){return z1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var W1={[_r]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE",[hl]:"ENVMAP_TYPE_CUBE_UV"};function H1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":W1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var q1={[Kr]:"ENVMAP_MODE_REFRACTION"};function X1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":q1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Y1={[Qp]:"ENVMAP_BLENDING_MULTIPLY",[Z_]:"ENVMAP_BLENDING_MIX",[$_]:"ENVMAP_BLENDING_ADD"};function j1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Y1[i.combine]||"ENVMAP_BLENDING_NONE"}function Z1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=G1(e),l=H1(e),h=X1(e),u=j1(e),d=Z1(e),p=D1(e),f=O1(r),x=s.createProgram(),g,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vl).join(`
`),m.length>0&&(m+=`
`)):(g=[Fx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),m=[Fx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?ce.tonemapping_pars_fragment:"",e.toneMapping!==Zi?N1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,R1("linearToOutputTexel",e.outputColorSpace),P1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vl).join(`
`)),o=Cf(o),o=Px(o,e),o=Dx(o,e),a=Cf(a),a=Px(a,e),a=Dx(a,e),o=Ox(o),a=Ox(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=w+g+o,S=w+m+a,y=Rx(s,s.VERTEX_SHADER,E),b=Rx(s,s.FRAGMENT_SHADER,S);s.attachShader(x,y),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function M(I){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(y)||"",O=s.getShaderInfoLog(b)||"",F=P.trim(),D=V.trim(),R=O.trim(),G=!0,U=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,b);else{let W=Nx(s,y,"vertex"),B=Nx(s,b,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+W+`
`+B)}else F!==""?Kt("WebGLProgram: Program Info Log:",F):(D===""||R==="")&&(U=!1);U&&(I.diagnostics={runnable:G,programLog:F,vertexShader:{log:D,prefix:g},fragmentShader:{log:R,prefix:m}})}s.deleteShader(y),s.deleteShader(b),_=new xa(s,x),T=F1(s,x)}let _;this.getUniforms=function(){return _===void 0&&M(this),_};let T;this.getAttributes=function(){return T===void 0&&M(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,T1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=A1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=b,this}var J1=0,Rf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new If(t),e.set(t,n)),n}},If=class{constructor(t){this.id=J1++,this.code=t,this.usedTimes=0}};function K1(i){return i===vr||i===gl||i===_l}function Q1(i,t,e,n,s,r){let o=new ea,a=new Rf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,T,C,I,P,V){let O=I.fog,F=P.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,R=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||D,R),U=G&&G.mapping===hl?G.image.height:null,W=p[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Kt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let B=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,pt=B!==void 0?B.length:0,xt=0;F.morphAttributes.position!==void 0&&(xt=1),F.morphAttributes.normal!==void 0&&(xt=2),F.morphAttributes.color!==void 0&&(xt=3);let Yt,Mt,Ot,J;if(W){let ke=Kn[W];Yt=ke.vertexShader,Mt=ke.fragmentShader}else{Yt=_.vertexShader,Mt=_.fragmentShader;let ke=a.getVertexShaderStage(_),Te=a.getFragmentShaderStage(_);a.update(_,ke,Te),Ot=ke.id,J=Te.id}let X=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),gt=P.isInstancedMesh===!0,ft=P.isBatchedMesh===!0,Lt=!!_.map,he=!!_.matcap,rt=!!G,j=!!_.aoMap,nt=!!_.lightMap,ct=!!_.bumpMap&&_.wireframe===!1,ht=!!_.normalMap,_t=!!_.displacementMap,St=!!_.emissiveMap,Ut=!!_.metalnessMap,jt=!!_.roughnessMap,z=_.anisotropy>0,Wt=_.clearcoat>0,ne=_.dispersion>0,N=_.retroreflectivity>0,v=_.iridescence>0,Y=_.sheen>0,K=_.transmission>0,it=z&&!!_.anisotropyMap,vt=Wt&&!!_.clearcoatMap,wt=Wt&&!!_.clearcoatNormalMap,st=Wt&&!!_.clearcoatRoughnessMap,at=v&&!!_.iridescenceMap,At=v&&!!_.iridescenceThicknessMap,Zt=Y&&!!_.sheenColorMap,It=Y&&!!_.sheenRoughnessMap,Et=!!_.specularMap,$t=!!_.specularColorMap,te=!!_.specularIntensityMap,oe=K&&!!_.transmissionMap,q=K&&!!_.thicknessMap,Ct=!!_.gradientMap,ot=!!_.alphaMap,Rt=_.alphaTest>0,Dt=!!_.alphaHash,ut=!!_.extensions,Jt=Zi;_.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Jt=i.toneMapping);let Gt={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:Yt,fragmentShader:Mt,defines:_.defines,customVertexShaderID:Ot,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ft,batchingColor:ft&&P._colorsTexture!==null,instancing:gt,instancingColor:gt&&P.instanceColor!==null,instancingMorph:gt&&P.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Lt,matcap:he,envMap:rt,envMapMode:rt&&G.mapping,envMapCubeUVHeight:U,aoMap:j,lightMap:nt,bumpMap:ct,normalMap:ht,displacementMap:_t,emissiveMap:St,normalMapObjectSpace:ht&&_.normalMapType===Q_,normalMapTangentSpace:ht&&_.normalMapType===cf,packedNormalMap:ht&&_.normalMapType===cf&&K1(_.normalMap.format),metalnessMap:Ut,roughnessMap:jt,anisotropy:z,anisotropyMap:it,clearcoat:Wt,clearcoatMap:vt,clearcoatNormalMap:wt,clearcoatRoughnessMap:st,dispersion:ne,retroreflection:N,iridescence:v,iridescenceMap:at,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:Zt,sheenRoughnessMap:It,specularMap:Et,specularColorMap:$t,specularIntensityMap:te,transmission:K,transmissionMap:oe,thicknessMap:q,gradientMap:Ct,opaque:_.transparent===!1&&_.blending===pa&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:Rt,alphaHash:Dt,combine:_.combine,mapUv:Lt&&f(_.map.channel),aoMapUv:j&&f(_.aoMap.channel),lightMapUv:nt&&f(_.lightMap.channel),bumpMapUv:ct&&f(_.bumpMap.channel),normalMapUv:ht&&f(_.normalMap.channel),displacementMapUv:_t&&f(_.displacementMap.channel),emissiveMapUv:St&&f(_.emissiveMap.channel),metalnessMapUv:Ut&&f(_.metalnessMap.channel),roughnessMapUv:jt&&f(_.roughnessMap.channel),anisotropyMapUv:it&&f(_.anisotropyMap.channel),clearcoatMapUv:vt&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:wt&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:At&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:It&&f(_.sheenRoughnessMap.channel),specularMapUv:Et&&f(_.specularMap.channel),specularColorMapUv:$t&&f(_.specularColorMap.channel),specularIntensityMapUv:te&&f(_.specularIntensityMap.channel),transmissionMapUv:oe&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:ot&&f(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ht||z),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(Lt||ot),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&ht===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Q,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:xt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Lt&&_.map.isVideoTexture===!0&&ue.getTransfer(_.map.colorSpace)===xe,decodeVideoTextureEmissive:St&&_.emissiveMap.isVideoTexture===!0&&ue.getTransfer(_.emissiveMap.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ys,flipSided:_.side===Jn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ut&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&_.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(T,_),w(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){let T=p[_.type],C;if(T){let I=Kn[T];C=Di.clone(I.uniforms)}else C=_.uniforms;return C}function S(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new $1(i,T,_,s),l.push(C),h.set(T,C)),C}function y(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function M(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:S,releaseProgram:y,releaseShaderCache:b,programs:l,dispose:M}}function tC(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function eC(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Lx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ux(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,f,x,g,m){let w=i[t];return w===void 0?(w={id:d.id,object:d,geometry:p,material:f,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},i[t]=w):(w.id=d.id,w.object=d,w.geometry=p,w.material=f,w.materialVariant=o(d),w.groupOrder=x,w.renderOrder=d.renderOrder,w.z=g,w.group=m),t++,w}function c(d,p,f,x,g,m,w){w.reversedDepth===!0&&(g=-g);let E=a(d,p,f,x,g,m);f.transmission>0?n.push(E):f.transparent===!0?s.push(E):e.push(E)}function l(d,p,f,x,g,m){let w=a(d,p,f,x,g,m);f.transmission>0?n.unshift(w):f.transparent===!0?s.unshift(w):e.unshift(w)}function h(d,p){e.length>1&&e.sort(d||eC),n.length>1&&n.sort(p||Lx),s.length>1&&s.sort(p||Lx)}function u(){for(let d=t,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function nC(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ux,i.set(n,[o])):s>=r.length?(o=new Ux,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function iC(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Qt};break;case"SpotLight":e={position:new k,direction:new k,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function sC(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var rC=0;function oC(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function aC(i){let t=new iC,e=sC(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new _e,o=new _e;function a(l){let h=0,u=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let p=0,f=0,x=0,g=0,m=0,w=0,E=0,S=0,y=0,b=0,M=0,_=0,T=0,C=0;l.sort(oC);for(let P=0,V=l.length;P<V;P++){let O=l[P],F=O.color,D=O.intensity,R=O.distance,G=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===vr?G=O.shadow.map.texture:G=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=F.r*D,u+=F.g*D,d+=F.b*D;else if(O.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(O.sh.coefficients[U],D);C++}else if(O.isSunLight){let U=t.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let W=O.shadow,B=e.get(O);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[f]=B,n.sunShadowMap[f]=G;let pt=W.getViewportCount();for(let xt=0;xt<pt;xt++)n.sunShadowMatrix[x+xt]=W.getMatrix(xt),n.sunShadowCascade[x+xt]=W._cascadeData[xt];x+=pt,f++}n.sun[p]=U,p++}else if(O.isDirectionalLight){let U=t.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let W=O.shadow,B=e.get(O);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.directionalShadow[g]=B,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=O.shadow.matrix,y++}n.directional[g]=U,g++}else if(O.isSpotLight){let U=t.get(O);U.position.setFromMatrixPosition(O.matrixWorld),U.color.copy(F).multiplyScalar(D),U.distance=R,U.coneCos=Math.cos(O.angle),U.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),U.decay=O.decay,n.spot[w]=U;let W=O.shadow;if(O.map&&(n.spotLightMap[_]=O.map,_++,W.updateMatrices(O),O.castShadow&&T++),n.spotLightMatrix[w]=W.matrix,O.castShadow){let B=e.get(O);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,n.spotShadow[w]=B,n.spotShadowMap[w]=G,M++}w++}else if(O.isRectAreaLight){let U=t.get(O);U.color.copy(F).multiplyScalar(D),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),n.rectArea[E]=U,E++}else if(O.isPointLight){let U=t.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity),U.distance=O.distance,U.decay=O.decay,O.castShadow){let W=O.shadow,B=e.get(O);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=O.shadow.matrix,b++}n.point[m]=U,m++}else if(O.isHemisphereLight){let U=t.get(O);U.skyColor.copy(O.color).multiplyScalar(D),U.groundColor.copy(O.groundColor).multiplyScalar(D),n.hemi[S]=U,S++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==p||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==w||I.rectAreaLength!==E||I.hemiLength!==S||I.numSunShadows!==f||I.numDirectionalShadows!==y||I.numPointShadows!==b||I.numSpotShadows!==M||I.numSpotMaps!==_||I.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=g,n.spot.length=w,n.rectArea.length=E,n.point.length=m,n.hemi.length=S,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.sunLength=p,I.directionalLength=g,I.pointLength=m,I.spotLength=w,I.rectAreaLength=E,I.hemiLength=S,I.numSunShadows=f,I.numDirectionalShadows=y,I.numPointShadows=b,I.numSpotShadows=M,I.numSpotMaps=_,I.numLightProbes=C,n.version=rC++)}function c(l,h){let u=0,d=0,p=0,f=0,x=0,g=0,m=h.matrixWorldInverse;for(let w=0,E=l.length;w<E;w++){let S=l[w];if(S.isSunLight){let y=n.sun[u];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),u++}else if(S.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(S.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function kx(i){let t=new aC(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function cC(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new kx(i),t.set(s,[a])):r>=o.length?(a=new kx(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var lC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,uC=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],dC=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Bx=new _e,yl=new k,Mf=new k;function pC(i,t,e){let n=new Oc,s=new mt,r=new mt,o=new Ce,a=new ou,c=new au,l={},h=e.maxTextureSize,u={[gr]:Jn,[Jn]:gr,[ys]:ys},d=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:lC,fragmentShader:hC}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new $e;f.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Je(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let m=this.type;this.render=function(b,M,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===I_&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=el);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Ii),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let V=m!==this.type;V&&M.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(F=>F.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,F=b.length;O<F;O++){let D=b[O],R=D.shadow;if(R===void 0){Kt("WebGLShadowMap:",D,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;s.copy(R.mapSize);let G=R.getFrameExtents();s.multiply(G),r.copy(R.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,R.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,R.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(R.camera._reversedDepth=U,R.map===null||V===!0){if(R.map!==null&&(R.map.depthTexture!==null&&(R.map.depthTexture.dispose(),R.map.depthTexture=null),R.map.dispose()),this.type===da){if(D.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}R.map=new dn(s.x,s.y,{format:vr,type:Cn,minFilter:En,magFilter:En,generateMipmaps:!1}),R.map.texture.name=D.name+".shadowMap",R.map.depthTexture=new lr(s.x,s.y,Ni),R.map.depthTexture.name=D.name+".shadowMapDepth",R.map.depthTexture.format=gs,R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=Sn,R.map.depthTexture.magFilter=Sn}else D.isPointLight?(R.map=new ud(s.x),R.map.depthTexture=new Qh(s.x,$i)):(R.map=new dn(s.x,s.y),R.map.depthTexture=new lr(s.x,s.y,$i)),R.map.depthTexture.name=D.name+".shadowMap",R.map.depthTexture.format=gs,this.type===el?(R.map.depthTexture.compareFunction=U?ad:od,R.map.depthTexture.minFilter=En,R.map.depthTexture.magFilter=En):(R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=Sn,R.map.depthTexture.magFilter=Sn);R.camera.updateProjectionMatrix()}R.map.isWebGLCubeRenderTarget!==!0&&(R.map.width!==s.x||R.map.height!==s.y)&&R.map.setSize(s.x,s.y);let W=R.map.isWebGLCubeRenderTarget?6:R.getViewportCount();D.isPointLight!==!0&&R.updateMatrices(D,_);for(let B=0;B<W;B++){let pt=R.getCamera(B);if(D.isPointLight){let xt=R.camera,Yt=R.matrix,Mt=D.distance||xt.far;Mt!==xt.far&&(xt.far=Mt,xt.updateProjectionMatrix()),yl.setFromMatrixPosition(D.matrixWorld),xt.position.copy(yl),Mf.copy(xt.position),Mf.add(uC[B]),xt.up.copy(dC[B]),xt.lookAt(Mf),xt.updateMatrixWorld(),Yt.makeTranslation(-yl.x,-yl.y,-yl.z),Bx.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),R._frustum.setFromProjectionMatrix(Bx,xt.coordinateSystem,xt.reversedDepth)}if(R.map.isWebGLCubeRenderTarget)i.setRenderTarget(R.map,B),i.clear();else{B===0&&(i.setRenderTarget(R.map),i.clear());let xt=R.getViewport(B);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),P.viewport(o)}n=R.getFrustum(B),S(M,_,pt,D,this.type)}R.isPointLightShadow!==!0&&this.type===da&&w(R,_),R.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,I)};function w(b,M){let _=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new dn(s.x,s.y,{format:vr,type:Cn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,_,d,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,_,p,x,null)}function E(b,M,_,T){let C=null,I=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?c:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let P=C.uuid,V=M.uuid,O=l[P];O===void 0&&(O={},l[P]=O);let F=O[V];F===void 0&&(F=C.clone(),O[V]=F,M.addEventListener("dispose",y)),C=F}if(C.visible=M.visible,C.wireframe=M.wireframe,T===da?C.side=M.shadowSide!==null?M.shadowSide:M.side:C.side=M.shadowSide!==null?M.shadowSide:u[M.side],C.alphaMap=M.alphaMap,C.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,C.map=M.map,C.clipShadows=M.clipShadows,C.clippingPlanes=M.clippingPlanes,C.clipIntersection=M.clipIntersection,C.displacementMap=M.displacementMap,C.displacementScale=M.displacementScale,C.displacementBias=M.displacementBias,C.wireframeLinewidth=M.wireframeLinewidth,C.linewidth=M.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=i.properties.get(C);P.light=_}return C}function S(b,M,_,T,C){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===da)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let V=t.update(b),O=b.material;if(Array.isArray(O)){let F=V.groups;for(let D=0,R=F.length;D<R;D++){let G=F[D],U=O[G.materialIndex];if(U&&U.visible){let W=E(b,U,T,C);b.onBeforeShadow(i,b,M,_,V,W,G),i.renderBufferDirect(_,null,V,W,b,G),b.onAfterShadow(i,b,M,_,V,W,G)}}}else if(O.visible){let F=E(b,O,T,C);b.onBeforeShadow(i,b,M,_,V,F,null),i.renderBufferDirect(_,null,V,F,b,null),b.onAfterShadow(i,b,M,_,V,F,null)}}let P=b.children;for(let V=0,O=P.length;V<O;V++)S(P[V],M,_,T,C)}function y(b){b.target.removeEventListener("dispose",y);for(let _ in l){let T=l[_],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function fC(i,t){function e(){let q=!1,Ct=new Ce,ot=null,Rt=new Ce(0,0,0,0);return{setMask:function(Dt){ot!==Dt&&!q&&(i.colorMask(Dt,Dt,Dt,Dt),ot=Dt)},setLocked:function(Dt){q=Dt},setClear:function(Dt,ut,Jt,Gt,ke){ke===!0&&(Dt*=Gt,ut*=Gt,Jt*=Gt),Ct.set(Dt,ut,Jt,Gt),Rt.equals(Ct)===!1&&(i.clearColor(Dt,ut,Jt,Gt),Rt.copy(Ct))},reset:function(){q=!1,ot=null,Rt.set(-1,0,0,0)}}}function n(){let q=!1,Ct=!1,ot=null,Rt=null,Dt=null;return{setReversed:function(ut){if(Ct!==ut){let Jt=t.get("EXT_clip_control");ut?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=ut;let Gt=Dt;Dt=null,this.setClear(Gt)}},getReversed:function(){return Ct},setTest:function(ut){ut?X(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(ut){ot!==ut&&!q&&(i.depthMask(ut),ot=ut)},setFunc:function(ut){if(Ct&&(ut=hx[ut]),Rt!==ut){switch(ut){case Lh:i.depthFunc(i.NEVER);break;case Uh:i.depthFunc(i.ALWAYS);break;case kh:i.depthFunc(i.LESS);break;case Jo:i.depthFunc(i.LEQUAL);break;case Bh:i.depthFunc(i.EQUAL);break;case Vh:i.depthFunc(i.GEQUAL);break;case zh:i.depthFunc(i.GREATER);break;case Gh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Rt=ut}},setLocked:function(ut){q=ut},setClear:function(ut){Dt!==ut&&(Dt=ut,Ct&&(ut=1-ut),i.clearDepth(ut))},reset:function(){q=!1,ot=null,Rt=null,Dt=null,Ct=!1}}}function s(){let q=!1,Ct=null,ot=null,Rt=null,Dt=null,ut=null,Jt=null,Gt=null,ke=null;return{setTest:function(Te){q||(Te?X(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(Te){Ct!==Te&&!q&&(i.stencilMask(Te),Ct=Te)},setFunc:function(Te,zi,us){(ot!==Te||Rt!==zi||Dt!==us)&&(i.stencilFunc(Te,zi,us),ot=Te,Rt=zi,Dt=us)},setOp:function(Te,zi,us){(ut!==Te||Jt!==zi||Gt!==us)&&(i.stencilOp(Te,zi,us),ut=Te,Jt=zi,Gt=us)},setLocked:function(Te){q=Te},setClear:function(Te){ke!==Te&&(i.clearStencil(Te),ke=Te)},reset:function(){q=!1,Ct=null,ot=null,Rt=null,Dt=null,ut=null,Jt=null,Gt=null,ke=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},p=new WeakMap,f=[],x=null,g=!1,m=null,w=null,E=null,S=null,y=null,b=null,M=null,_=new Qt(0,0,0),T=0,C=!1,I=null,P=null,V=null,O=null,F=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,G=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(U)[1]),R=G>=1):U.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),R=G>=2);let W=null,B={},pt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Yt=new Ce().fromArray(pt),Mt=new Ce().fromArray(xt);function Ot(q,Ct,ot,Rt){let Dt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(q,ut),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<ot;Jt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,Rt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(Ct+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return ut}let J={};J[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Jo),ct(!1),ht(jp),X(i.CULL_FACE),j(Ii);function X(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function Q(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function gt(q,Ct){return d[q]!==Ct?(i.bindFramebuffer(q,Ct),d[q]=Ct,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ct),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function ft(q,Ct){let ot=f,Rt=!1;if(q){ot=p.get(Ct),ot===void 0&&(ot=[],p.set(Ct,ot));let Dt=q.textures;if(ot.length!==Dt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Jt=Dt.length;ut<Jt;ut++)ot[ut]=i.COLOR_ATTACHMENT0+ut;ot.length=Dt.length,Rt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,Rt=!0);Rt&&i.drawBuffers(ot)}function Lt(q){return x!==q?(i.useProgram(q),x=q,!0):!1}let he={[Jr]:i.FUNC_ADD,[P_]:i.FUNC_SUBTRACT,[D_]:i.FUNC_REVERSE_SUBTRACT};he[O_]=i.MIN,he[F_]=i.MAX;let rt={[L_]:i.ZERO,[U_]:i.ONE,[k_]:i.SRC_COLOR,[Jp]:i.SRC_ALPHA,[H_]:i.SRC_ALPHA_SATURATE,[G_]:i.DST_COLOR,[V_]:i.DST_ALPHA,[B_]:i.ONE_MINUS_SRC_COLOR,[Kp]:i.ONE_MINUS_SRC_ALPHA,[W_]:i.ONE_MINUS_DST_COLOR,[z_]:i.ONE_MINUS_DST_ALPHA,[q_]:i.CONSTANT_COLOR,[X_]:i.ONE_MINUS_CONSTANT_COLOR,[Y_]:i.CONSTANT_ALPHA,[j_]:i.ONE_MINUS_CONSTANT_ALPHA};function j(q,Ct,ot,Rt,Dt,ut,Jt,Gt,ke,Te){if(q===Ii){g===!0&&(Q(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),q!==N_){if(q!==m||Te!==C){if((w!==Jr||y!==Jr)&&(i.blendEquation(i.FUNC_ADD),w=Jr,y=Jr),Te)switch(q){case pa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case Zp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $p:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",q);break}else switch(q){case pa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zp:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $p:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",q);break}E=null,S=null,b=null,M=null,_.set(0,0,0),T=0,m=q,C=Te}return}Dt=Dt||Ct,ut=ut||ot,Jt=Jt||Rt,(Ct!==w||Dt!==y)&&(i.blendEquationSeparate(he[Ct],he[Dt]),w=Ct,y=Dt),(ot!==E||Rt!==S||ut!==b||Jt!==M)&&(i.blendFuncSeparate(rt[ot],rt[Rt],rt[ut],rt[Jt]),E=ot,S=Rt,b=ut,M=Jt),(Gt.equals(_)===!1||ke!==T)&&(i.blendColor(Gt.r,Gt.g,Gt.b,ke),_.copy(Gt),T=ke),m=q,C=!1}function nt(q,Ct){q.side===ys?Q(i.CULL_FACE):X(i.CULL_FACE);let ot=q.side===Jn;Ct&&(ot=!ot),ct(ot),q.blending===pa&&q.transparent===!1?j(Ii):j(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);let Rt=q.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),St(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(q){I!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),I=q)}function ht(q){q!==C_?(X(i.CULL_FACE),q!==P&&(q===jp?i.cullFace(i.BACK):q===R_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),P=q}function _t(q){q!==V&&(R&&i.lineWidth(q),V=q)}function St(q,Ct,ot){q?(X(i.POLYGON_OFFSET_FILL),(O!==Ct||F!==ot)&&(O=Ct,F=ot,o.getReversed()&&(Ct=-Ct),i.polygonOffset(Ct,ot))):Q(i.POLYGON_OFFSET_FILL)}function Ut(q){q?X(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function jt(q){q===void 0&&(q=i.TEXTURE0+D-1),W!==q&&(i.activeTexture(q),W=q)}function z(q,Ct,ot){ot===void 0&&(W===null?ot=i.TEXTURE0+D-1:ot=W);let Rt=B[ot];Rt===void 0&&(Rt={type:void 0,texture:void 0},B[ot]=Rt),(Rt.type!==q||Rt.texture!==Ct)&&(W!==ot&&(i.activeTexture(ot),W=ot),i.bindTexture(q,Ct||J[q]),Rt.type=q,Rt.texture=Ct)}function Wt(){let q=B[W];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(q){ee("WebGLState:",q)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(q){ee("WebGLState:",q)}}function v(){try{i.texSubImage2D(...arguments)}catch(q){ee("WebGLState:",q)}}function Y(){try{i.texSubImage3D(...arguments)}catch(q){ee("WebGLState:",q)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(q){ee("WebGLState:",q)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(q){ee("WebGLState:",q)}}function vt(){try{i.texStorage2D(...arguments)}catch(q){ee("WebGLState:",q)}}function wt(){try{i.texStorage3D(...arguments)}catch(q){ee("WebGLState:",q)}}function st(){try{i.texImage2D(...arguments)}catch(q){ee("WebGLState:",q)}}function at(){try{i.texImage3D(...arguments)}catch(q){ee("WebGLState:",q)}}function At(q){return u[q]!==void 0?u[q]:i.getParameter(q)}function Zt(q,Ct){u[q]!==Ct&&(i.pixelStorei(q,Ct),u[q]=Ct)}function It(q){Yt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Yt.copy(q))}function Et(q){Mt.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Mt.copy(q))}function $t(q,Ct){let ot=l.get(Ct);ot===void 0&&(ot=new WeakMap,l.set(Ct,ot));let Rt=ot.get(q);Rt===void 0&&(Rt=i.getUniformBlockIndex(Ct,q.name),ot.set(q,Rt))}function te(q,Ct){let Rt=l.get(Ct).get(q);c.get(Ct)!==Rt&&(i.uniformBlockBinding(Ct,Rt,q.__bindingPointIndex),c.set(Ct,Rt))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},W=null,B={},d={},p=new WeakMap,f=[],x=null,g=!1,m=null,w=null,E=null,S=null,y=null,b=null,M=null,_=new Qt(0,0,0),T=0,C=!1,I=null,P=null,V=null,O=null,F=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:Q,bindFramebuffer:gt,drawBuffers:ft,useProgram:Lt,setBlending:j,setMaterial:nt,setFlipSided:ct,setCullFace:ht,setLineWidth:_t,setPolygonOffset:St,setScissorTest:Ut,activeTexture:jt,bindTexture:z,unbindTexture:Wt,compressedTexImage2D:ne,compressedTexImage3D:N,texImage2D:st,texImage3D:at,pixelStorei:Zt,getParameter:At,updateUBOMapping:$t,uniformBlockBinding:te,texStorage2D:vt,texStorage3D:wt,texSubImage2D:v,texSubImage3D:Y,compressedTexSubImage2D:K,compressedTexSubImage3D:it,scissor:It,viewport:Et,reset:oe}}function mC(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,h=new WeakMap,u=new Set,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,v){return f?new OffscreenCanvas(N,v):bc("canvas")}function g(N,v,Y){let K=1,it=ne(N);if((it.width>Y||it.height>Y)&&(K=Y/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let vt=Math.floor(K*it.width),wt=Math.floor(K*it.height);d===void 0&&(d=x(vt,wt));let st=v?x(vt,wt):d;return st.width=vt,st.height=wt,st.getContext("2d").drawImage(N,0,0,vt,wt),Kt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+vt+"x"+wt+")."),st}else return"data"in N&&Kt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),N;return N}function m(N){return N.generateMipmaps}function w(N){i.generateMipmap(N)}function E(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(N,v,Y,K,it,vt=!1){if(N!==null){if(i[N]!==void 0)return i[N];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let wt;K&&(wt=t.get("EXT_texture_norm16"),wt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=v;if(v===i.RED&&(Y===i.FLOAT&&(st=i.R32F),Y===i.HALF_FLOAT&&(st=i.R16F),Y===i.UNSIGNED_BYTE&&(st=i.R8),Y===i.UNSIGNED_SHORT&&wt&&(st=wt.R16_EXT),Y===i.SHORT&&wt&&(st=wt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.R8UI),Y===i.UNSIGNED_SHORT&&(st=i.R16UI),Y===i.UNSIGNED_INT&&(st=i.R32UI),Y===i.BYTE&&(st=i.R8I),Y===i.SHORT&&(st=i.R16I),Y===i.INT&&(st=i.R32I)),v===i.RG&&(Y===i.FLOAT&&(st=i.RG32F),Y===i.HALF_FLOAT&&(st=i.RG16F),Y===i.UNSIGNED_BYTE&&(st=i.RG8),Y===i.UNSIGNED_SHORT&&wt&&(st=wt.RG16_EXT),Y===i.SHORT&&wt&&(st=wt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RG8UI),Y===i.UNSIGNED_SHORT&&(st=i.RG16UI),Y===i.UNSIGNED_INT&&(st=i.RG32UI),Y===i.BYTE&&(st=i.RG8I),Y===i.SHORT&&(st=i.RG16I),Y===i.INT&&(st=i.RG32I)),v===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(st=i.RGB16UI),Y===i.UNSIGNED_INT&&(st=i.RGB32UI),Y===i.BYTE&&(st=i.RGB8I),Y===i.SHORT&&(st=i.RGB16I),Y===i.INT&&(st=i.RGB32I)),v===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),Y===i.UNSIGNED_INT&&(st=i.RGBA32UI),Y===i.BYTE&&(st=i.RGBA8I),Y===i.SHORT&&(st=i.RGBA16I),Y===i.INT&&(st=i.RGBA32I)),v===i.RGB&&(Y===i.UNSIGNED_SHORT&&wt&&(st=wt.RGB16_EXT),Y===i.SHORT&&wt&&(st=wt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),v===i.RGBA){let at=vt?vc:ue.getTransfer(it);Y===i.FLOAT&&(st=i.RGBA32F),Y===i.HALF_FLOAT&&(st=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(st=at===xe?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&wt&&(st=wt.RGBA16_EXT),Y===i.SHORT&&wt&&(st=wt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function y(N,v){let Y;return N?v===null||v===$i||v===ma?Y=i.DEPTH24_STENCIL8:v===Ni?Y=i.DEPTH32F_STENCIL8:v===fa&&(Y=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$i||v===ma?Y=i.DEPTH_COMPONENT24:v===Ni?Y=i.DEPTH_COMPONENT32F:v===fa&&(Y=i.DEPTH_COMPONENT16),Y}function b(N,v){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?v.mipmaps.length:1}function M(N){let v=N.target;v.removeEventListener("dispose",M),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function _(N){let v=N.target;v.removeEventListener("dispose",_),I(v)}function T(N){let v=n.get(N);if(v.__webglInit===void 0)return;let Y=N.source,K=p.get(Y);if(K){let it=K[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&C(N),Object.keys(K).length===0&&p.delete(Y)}n.remove(N)}function C(N){let v=n.get(N);i.deleteTexture(v.__webglTexture);let Y=N.source,K=p.get(Y);delete K[v.__cacheKey],o.memory.textures--}function I(N){let v=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let it=0;it<v.__webglFramebuffer[K].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[K][it]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Y=N.textures;for(let K=0,it=Y.length;K<it;K++){let vt=n.get(Y[K]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(Y[K])}n.remove(N)}let P=0;function V(){P=0}function O(){return P}function F(N){P=N}function D(){let N=P;return N>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,N}function R(N){let v=[];return v.push(N.wrapS),v.push(N.wrapT),v.push(N.wrapR||0),v.push(N.magFilter),v.push(N.minFilter),v.push(N.anisotropy),v.push(N.internalFormat),v.push(N.format),v.push(N.type),v.push(N.generateMipmaps),v.push(N.premultiplyAlpha),v.push(N.flipY),v.push(N.unpackAlignment),v.push(N.colorSpace),v.join()}function G(N,v){let Y=n.get(N);if(N.isVideoTexture&&z(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){let K=N.image;if(K===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Y,N,v);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+v)}function U(N,v){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){Q(Y,N,v);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+v)}function W(N,v){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){Q(Y,N,v);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+v)}function B(N,v){let Y=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){gt(Y,N,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+v)}let pt={[Wh]:i.REPEAT,[fs]:i.CLAMP_TO_EDGE,[Hh]:i.MIRRORED_REPEAT},xt={[Sn]:i.NEAREST,[J_]:i.NEAREST_MIPMAP_NEAREST,[ul]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[bu]:i.LINEAR_MIPMAP_NEAREST,[xr]:i.LINEAR_MIPMAP_LINEAR},Yt={[ex]:i.NEVER,[ox]:i.ALWAYS,[nx]:i.LESS,[od]:i.LEQUAL,[ix]:i.EQUAL,[ad]:i.GEQUAL,[sx]:i.GREATER,[rx]:i.NOTEQUAL};function Mt(N,v){if(v.type===Ni&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===bu||v.magFilter===ul||v.magFilter===xr||v.minFilter===En||v.minFilter===bu||v.minFilter===ul||v.minFilter===xr)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,pt[v.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,pt[v.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,pt[v.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,xt[v.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Sn||v.minFilter!==ul&&v.minFilter!==xr||v.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ot(N,v){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,v.addEventListener("dispose",M));let K=v.source,it=p.get(K);it===void 0&&(it={},p.set(K,it));let vt=R(v);if(vt!==N.__cacheKey){it[vt]===void 0&&(it[vt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),it[vt].usedTimes++;let wt=it[N.__cacheKey];wt!==void 0&&(it[N.__cacheKey].usedTimes--,wt.usedTimes===0&&C(v)),N.__cacheKey=vt,N.__webglTexture=it[vt].texture}return Y}function J(N,v,Y){return Math.floor(Math.floor(N/Y)/v)}function X(N,v,Y,K){let vt=N.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Y,K,v.data);else{vt.sort((Zt,It)=>Zt.start-It.start);let wt=0;for(let Zt=1;Zt<vt.length;Zt++){let It=vt[wt],Et=vt[Zt],$t=It.start+It.count,te=J(Et.start,v.width,4),oe=J(It.start,v.width,4);Et.start<=$t+1&&te===oe&&J(Et.start+Et.count-1,v.width,4)===te?It.count=Math.max(It.count,Et.start+Et.count-It.start):(++wt,vt[wt]=Et)}vt.length=wt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),At=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Zt=0,It=vt.length;Zt<It;Zt++){let Et=vt[Zt],$t=Math.floor(Et.start/4),te=Math.ceil(Et.count/4),oe=$t%v.width,q=Math.floor($t/v.width),Ct=te,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,oe,q,Ct,ot,Y,K,v.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function Q(N,v,Y){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);let it=Ot(N,v),vt=v.source;e.bindTexture(K,N.__webglTexture,i.TEXTURE0+Y);let wt=n.get(vt);if(vt.version!==wt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ot=ue.getPrimaries(ue.workingColorSpace),Rt=v.colorSpace===ks?null:ue.getPrimaries(v.colorSpace),Dt=v.colorSpace===ks||ot===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let at=g(v.image,!1,s.maxTextureSize);at=Wt(v,at);let At=r.convert(v.format,v.colorSpace),Zt=r.convert(v.type),It=S(v.internalFormat,At,Zt,v.normalized,v.colorSpace,v.isVideoTexture);Mt(K,v);let Et,$t=v.mipmaps,te=v.isVideoTexture!==!0,oe=wt.__version===void 0||it===!0,q=vt.dataReady,Ct=b(v,at);if(v.isDepthTexture)It=y(v.format===yr,v.type),oe&&(te?e.texStorage2D(i.TEXTURE_2D,1,It,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,It,at.width,at.height,0,At,Zt,null));else if(v.isDataTexture)if($t.length>0){te&&oe&&e.texStorage2D(i.TEXTURE_2D,Ct,It,$t[0].width,$t[0].height);for(let ot=0,Rt=$t.length;ot<Rt;ot++)Et=$t[ot],te?q&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Et.width,Et.height,At,Zt,Et.data):e.texImage2D(i.TEXTURE_2D,ot,It,Et.width,Et.height,0,At,Zt,Et.data);v.generateMipmaps=!1}else te?(oe&&e.texStorage2D(i.TEXTURE_2D,Ct,It,at.width,at.height),q&&X(v,at,At,Zt)):e.texImage2D(i.TEXTURE_2D,0,It,at.width,at.height,0,At,Zt,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){te&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,$t[0].width,$t[0].height,at.depth);for(let ot=0,Rt=$t.length;ot<Rt;ot++)if(Et=$t[ot],v.format!==Pi)if(At!==null)if(te){if(q)if(v.layerUpdates.size>0){let Dt=_f(Et.width,Et.height,v.format,v.type);for(let ut of v.layerUpdates){let Jt=Et.data.subarray(ut*Dt/Et.data.BYTES_PER_ELEMENT,(ut+1)*Dt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ut,Et.width,Et.height,1,At,Jt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Et.width,Et.height,at.depth,At,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,It,Et.width,Et.height,at.depth,0,Et.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Et.width,Et.height,at.depth,At,Zt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,It,Et.width,Et.height,at.depth,0,At,Zt,Et.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{te&&oe&&e.texStorage2D(i.TEXTURE_2D,Ct,It,$t[0].width,$t[0].height);for(let ot=0,Rt=$t.length;ot<Rt;ot++)Et=$t[ot],v.format!==Pi?At!==null?te?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,It,Et.width,Et.height,0,Et.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?q&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Et.width,Et.height,At,Zt,Et.data):e.texImage2D(i.TEXTURE_2D,ot,It,Et.width,Et.height,0,At,Zt,Et.data)}else if(v.isDataArrayTexture)if(te){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,at.width,at.height,at.depth),q)if(v.layerUpdates.size>0){let ot=_f(at.width,at.height,v.format,v.type);for(let Rt of v.layerUpdates){let Dt=at.data.subarray(Rt*ot/at.data.BYTES_PER_ELEMENT,(Rt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,at.width,at.height,1,At,Zt,Dt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,At,Zt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,at.width,at.height,at.depth,0,At,Zt,at.data);else if(v.isData3DTexture)te?(oe&&e.texStorage3D(i.TEXTURE_3D,Ct,It,at.width,at.height,at.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,At,Zt,at.data)):e.texImage3D(i.TEXTURE_3D,0,It,at.width,at.height,at.depth,0,At,Zt,at.data);else if(v.isFramebufferTexture){if(oe)if(te)e.texStorage2D(i.TEXTURE_2D,Ct,It,at.width,at.height);else{let ot=at.width,Rt=at.height;for(let Dt=0;Dt<Ct;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,It,ot,Rt,0,At,Zt,null),ot>>=1,Rt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),at.parentNode!==ot){ot.appendChild(at),u.add(v),ot.onpaint=Rt=>{let Dt=Rt.changedElements;for(let ut of u)Dt.includes(ut.image)&&(ut.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Dt=i.RGBA,ut=i.RGBA,Jt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Dt,ut,Jt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($t.length>0){if(te&&oe){let ot=ne($t[0]);e.texStorage2D(i.TEXTURE_2D,Ct,It,ot.width,ot.height)}for(let ot=0,Rt=$t.length;ot<Rt;ot++)Et=$t[ot],te?q&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,At,Zt,Et):e.texImage2D(i.TEXTURE_2D,ot,It,At,Zt,Et);v.generateMipmaps=!1}else if(te){if(oe){let ot=ne(at);e.texStorage2D(i.TEXTURE_2D,Ct,It,ot.width,ot.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Zt,at)}else e.texImage2D(i.TEXTURE_2D,0,It,At,Zt,at);m(v)&&w(K),wt.__version=vt.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function gt(N,v,Y){if(v.image.length!==6)return;let K=Ot(N,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Y);let vt=n.get(it);if(it.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+Y);let wt=ue.getPrimaries(ue.workingColorSpace),st=v.colorSpace===ks?null:ue.getPrimaries(v.colorSpace),at=v.colorSpace===ks||wt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let At=v.isCompressedTexture||v.image[0].isCompressedTexture,Zt=v.image[0]&&v.image[0].isDataTexture,It=[];for(let ut=0;ut<6;ut++)!At&&!Zt?It[ut]=g(v.image[ut],!0,s.maxCubemapSize):It[ut]=Zt?v.image[ut].image:v.image[ut],It[ut]=Wt(v,It[ut]);let Et=It[0],$t=r.convert(v.format,v.colorSpace),te=r.convert(v.type),oe=S(v.internalFormat,$t,te,v.normalized,v.colorSpace),q=v.isVideoTexture!==!0,Ct=vt.__version===void 0||K===!0,ot=it.dataReady,Rt=b(v,Et);Mt(i.TEXTURE_CUBE_MAP,v);let Dt;if(At){q&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,oe,Et.width,Et.height);for(let ut=0;ut<6;ut++){Dt=It[ut].mipmaps;for(let Jt=0;Jt<Dt.length;Jt++){let Gt=Dt[Jt];v.format!==Pi?$t!==null?q?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt,0,0,Gt.width,Gt.height,$t,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt,oe,Gt.width,Gt.height,0,Gt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt,0,0,Gt.width,Gt.height,$t,te,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt,oe,Gt.width,Gt.height,0,$t,te,Gt.data)}}}else{if(Dt=v.mipmaps,q&&Ct){Dt.length>0&&Rt++;let ut=ne(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,oe,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Zt){q?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,It[ut].width,It[ut].height,$t,te,It[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,oe,It[ut].width,It[ut].height,0,$t,te,It[ut].data);for(let Jt=0;Jt<Dt.length;Jt++){let ke=Dt[Jt].image[ut].image;q?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt+1,0,0,ke.width,ke.height,$t,te,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt+1,oe,ke.width,ke.height,0,$t,te,ke.data)}}else{q?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,$t,te,It[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,oe,$t,te,It[ut]);for(let Jt=0;Jt<Dt.length;Jt++){let Gt=Dt[Jt];q?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt+1,0,0,$t,te,Gt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Jt+1,oe,$t,te,Gt.image[ut])}}}m(v)&&w(i.TEXTURE_CUBE_MAP),vt.__version=it.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function ft(N,v,Y,K,it,vt){let wt=r.convert(Y.format,Y.colorSpace),st=r.convert(Y.type),at=S(Y.internalFormat,wt,st,Y.normalized,Y.colorSpace),At=n.get(v),Zt=n.get(Y);if(Zt.__renderTarget=v,!At.__hasExternalTextures){let It=Math.max(1,v.width>>vt),Et=Math.max(1,v.height>>vt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,vt,at,It,Et,v.depth,0,wt,st,null):e.texImage2D(it,vt,at,It,Et,0,wt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),jt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,it,Zt.__webglTexture,0,Ut(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,it,Zt.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(N,v,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,N),v.depthBuffer){let K=v.depthTexture,it=K&&K.isDepthTexture?K.type:null,vt=y(v.stencilBuffer,it),wt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;jt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(v),vt,v.width,v.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(v),vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,N)}else{let K=v.textures;for(let it=0;it<K.length;it++){let vt=K[it],wt=r.convert(vt.format,vt.colorSpace),st=r.convert(vt.type),at=S(vt.internalFormat,wt,st,vt.normalized,vt.colorSpace);jt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(v),at,v.width,v.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(v),at,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,at,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(N,v,Y){let K=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(v.depthTexture);if(it.__renderTarget=v,(!it.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(it.__webglInit===void 0&&(it.__webglInit=!0,v.depthTexture.addEventListener("dispose",M)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,v.depthTexture);let At=r.convert(v.depthTexture.format),Zt=r.convert(v.depthTexture.type),It;v.depthTexture.format===gs?It=i.DEPTH_COMPONENT24:v.depthTexture.format===yr&&(It=i.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,It,v.width,v.height,0,At,Zt,null)}}else G(v.depthTexture,0);let vt=it.__webglTexture,wt=Ut(v),st=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,at=v.depthTexture.format===yr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===gs)jt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,st,vt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,at,st,vt,0);else if(v.depthTexture.format===yr)jt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,st,vt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,at,st,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(N){let v=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==N.depthTexture){let K=N.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=K}if(N.depthTexture&&!v.__autoAllocateDepthBuffer)if(Y)for(let K=0;K<6;K++)he(v.__webglFramebuffer[K],N,K);else{let K=N.texture.mipmaps;K&&K.length>0?he(v.__webglFramebuffer[0],N,0):he(v.__webglFramebuffer,N,0)}else if(Y){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),Lt(v.__webglDepthbuffer[K],N,!1);else{let it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,vt)}}else{let K=N.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Lt(v.__webglDepthbuffer,N,!1);else{let it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,vt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function j(N,v,Y){let K=n.get(N);v!==void 0&&ft(K.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&rt(N)}function nt(N){let v=N.texture,Y=n.get(N),K=n.get(v);N.addEventListener("dispose",_);let it=N.textures,vt=N.isWebGLCubeRenderTarget===!0,wt=it.length>1;if(wt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),vt){Y.__webglFramebuffer=[];for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer[st]=[];for(let at=0;at<v.mipmaps.length;at++)Y.__webglFramebuffer[st][at]=i.createFramebuffer()}else Y.__webglFramebuffer[st]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let st=0;st<v.mipmaps.length;st++)Y.__webglFramebuffer[st]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(wt)for(let st=0,at=it.length;st<at;st++){let At=n.get(it[st]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&jt(N)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let at=it[st];Y.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[st]);let At=r.convert(at.format,at.colorSpace),Zt=r.convert(at.type),It=S(at.internalFormat,At,Zt,at.normalized,at.colorSpace,N.isXRRenderTarget===!0),Et=Ut(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,It,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,Y.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(Y.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,v);for(let st=0;st<6;st++)if(v.mipmaps&&v.mipmaps.length>0)for(let at=0;at<v.mipmaps.length;at++)ft(Y.__webglFramebuffer[st][at],N,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,at);else ft(Y.__webglFramebuffer[st],N,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(v)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let st=0,at=it.length;st<at;st++){let At=it[st],Zt=n.get(At),It=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(It=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,Zt.__webglTexture),Mt(It,At),ft(Y.__webglFramebuffer,N,At,i.COLOR_ATTACHMENT0+st,It,0),m(At)&&w(It)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(st=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),Mt(st,v),v.mipmaps&&v.mipmaps.length>0)for(let at=0;at<v.mipmaps.length;at++)ft(Y.__webglFramebuffer[at],N,v,i.COLOR_ATTACHMENT0,st,at);else ft(Y.__webglFramebuffer,N,v,i.COLOR_ATTACHMENT0,st,0);m(v)&&w(st),e.unbindTexture()}N.depthBuffer&&rt(N)}function ct(N){let v=N.textures;for(let Y=0,K=v.length;Y<K;Y++){let it=v[Y];if(m(it)){let vt=E(N),wt=n.get(it).__webglTexture;e.bindTexture(vt,wt),w(vt),e.unbindTexture()}}}let ht=[],_t=[];function St(N){if(N.samples>0){if(jt(N)===!1){let v=N.textures,Y=N.width,K=N.height,it=i.COLOR_BUFFER_BIT,vt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(N),st=v.length>1;if(st)for(let At=0;At<v.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let at=N.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<v.length;At++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);let Zt=n.get(v[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,Y,K,0,0,Y,K,it,i.NEAREST),c===!0&&(ht.length=0,_t.length=0,ht.push(i.COLOR_ATTACHMENT0+At),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(ht.push(vt),_t.push(vt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let At=0;At<v.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);let Zt=n.get(v[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let v=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ut(N){return Math.min(s.maxSamples,N.samples)}function jt(N){let v=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function z(N){let v=o.render.frame;h.get(N)!==v&&(h.set(N,v),N.update())}function Wt(N,v){let Y=N.colorSpace,K=N.format,it=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==yc&&Y!==ks&&(ue.getTransfer(Y)===xe?(K!==Pi||it!==gi)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",Y)),v}function ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=V,this.getTextureUnits=O,this.setTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=j,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function gC(i,t){function e(n,s=ks){let r,o=ue.getTransfer(s);if(n===gi)return i.UNSIGNED_BYTE;if(n===wu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ef)return i.BYTE;if(n===nf)return i.SHORT;if(n===fa)return i.UNSIGNED_SHORT;if(n===Mu)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===Ni)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===of)return i.ALPHA;if(n===af)return i.RGB;if(n===Pi)return i.RGBA;if(n===gs)return i.DEPTH_COMPONENT;if(n===yr)return i.DEPTH_STENCIL;if(n===Au)return i.RED;if(n===Eu)return i.RED_INTEGER;if(n===vr)return i.RG;if(n===Cu)return i.RG_INTEGER;if(n===Ru)return i.RGBA_INTEGER;if(n===dl||n===pl||n===fl||n===ml)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ml)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Iu||n===Nu||n===Pu||n===Du)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Iu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Du)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ou||n===Fu||n===Lu||n===Uu||n===ku||n===gl||n===Bu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ou||n===Fu)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uu)return r.COMPRESSED_R11_EAC;if(n===ku)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gl)return r.COMPRESSED_RG11_EAC;if(n===Bu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vu||n===zu||n===Gu||n===Wu||n===Hu||n===qu||n===Xu||n===Yu||n===ju||n===Zu||n===$u||n===Ju||n===Ku||n===Qu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ju)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$u)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ju)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ku)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qu)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===td||n===ed||n===nd)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===td)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ed)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===id||n===sd||n===_l||n===rd)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===id)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ma?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var _C=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new kc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ke({vertexShader:_C,fragmentShader:xC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new Xc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pf=class extends _s{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,x=typeof XRWebGLBinding<"u",g=new Nf,m={},w=e.getContextAttributes(),E=null,S=null,y=[],b=[],M=new mt,_=null,T=null,C=new zn;C.viewport=new Ce;let I=new zn;I.viewport=new Ce;let P=[C,I],V=new yu,O=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let X=y[J];return X===void 0&&(X=new na,y[J]=X),X.getTargetRaySpace()},this.getControllerGrip=function(J){let X=y[J];return X===void 0&&(X=new na,y[J]=X),X.getGripSpace()},this.getHand=function(J){let X=y[J];return X===void 0&&(X=new na,y[J]=X),X.getHandSpace()};function D(J){let X=b.indexOf(J.inputSource);if(X===-1)return;let Q=y[X];Q!==void 0&&(Q.update(J.inputSource,J.frame,l||o),Q.dispatchEvent({type:J.type,data:J.inputSource}))}function R(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",G);for(let J=0;J<y.length;J++){let X=b[J];X!==null&&(b[J]=null,y[J].disconnect(X))}O=null,F=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(E),p=null,d=null,u=null,s=null,S=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(M.width,M.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",R),s.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(M),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,gt=null,ft=null;w.depth&&(ft=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=w.stencil?yr:gs,gt=w.stencil?ma:$i);let Lt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new dn(d.textureWidth,d.textureHeight,{format:Pi,type:gi,depthTexture:new lr(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Q={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new dn(p.framebufferWidth,p.framebufferHeight,{format:Pi,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(J){for(let X=0;X<J.removed.length;X++){let Q=J.removed[X],gt=b.indexOf(Q);gt>=0&&(b[gt]=null,y[gt].disconnect(Q))}for(let X=0;X<J.added.length;X++){let Q=J.added[X],gt=b.indexOf(Q);if(gt===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=b.length){b.push(Q),gt=Lt;break}else if(b[Lt]===null){b[Lt]=Q,gt=Lt;break}if(gt===-1)break}let ft=y[gt];ft&&ft.connect(Q)}}let U=new k,W=new k;function B(J,X,Q){U.setFromMatrixPosition(X.matrixWorld),W.setFromMatrixPosition(Q.matrixWorld);let gt=U.distanceTo(W),ft=X.projectionMatrix.elements,Lt=Q.projectionMatrix.elements,he=ft[14]/(ft[10]-1),rt=ft[14]/(ft[10]+1),j=(ft[9]+1)/ft[5],nt=(ft[9]-1)/ft[5],ct=(ft[8]-1)/ft[0],ht=(Lt[8]+1)/Lt[0],_t=he*ct,St=he*ht,Ut=gt/(-ct+ht),jt=Ut*-ct;if(X.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(jt),J.translateZ(Ut),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ft[10]===-1)J.projectionMatrix.copy(X.projectionMatrix),J.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let z=he+Ut,Wt=rt+Ut,ne=_t-jt,N=St+(gt-jt),v=j*rt/Wt*z,Y=nt*rt/Wt*z;J.projectionMatrix.makePerspective(ne,N,v,Y,z,Wt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function pt(J,X){X===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(X.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let X=J.near,Q=J.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),V.near=I.near=C.near=X,V.far=I.far=C.far=Q,(O!==V.near||F!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),O=V.near,F=V.far),V.layers.mask=J.layers.mask|6,C.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;let gt=J.parent,ft=V.cameras;pt(V,gt);for(let Lt=0;Lt<ft.length;Lt++)pt(ft[Lt],gt);ft.length===2?B(V,C,I):V.projectionMatrix.copy(C.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),xt(J,V,gt)};function xt(J,X,Q){Q===null?J.matrix.copy(X.matrixWorld):(J.matrix.copy(Q.matrixWorld),J.matrix.invert(),J.matrix.multiply(X.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(X.projectionMatrix),J.projectionMatrixInverse.copy(X.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(J){return m[J]};let Yt=null;function Mt(J,X){if(h=X.getViewerPose(l||o),f=X,h!==null){let Q=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let gt=!1;Q.length!==V.cameras.length&&(V.cameras.length=0,gt=!0);for(let rt=0;rt<Q.length;rt++){let j=Q[rt],nt=null;if(p!==null)nt=p.getViewport(j);else{let ht=u.getViewSubImage(d,j);nt=ht.viewport,rt===0&&(t.setRenderTargetTextures(S,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(S))}let ct=P[rt];ct===void 0&&(ct=new zn,ct.layers.enable(rt),ct.viewport=new Ce,P[rt]=ct),ct.matrix.fromArray(j.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(j.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(nt.x,nt.y,nt.width,nt.height),rt===0&&(V.matrix.copy(ct.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),gt===!0&&V.cameras.push(ct)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let rt=u.getDepthInformation(Q[0]);rt&&rt.isValid&&rt.texture&&g.init(rt,s.renderState)}if(ft&&ft.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let rt=0;rt<Q.length;rt++){let j=Q[rt].camera;if(j){let nt=m[j];nt||(nt=new kc,m[j]=nt);let ct=u.getCameraImage(j);nt.sourceTexture=ct}}}}for(let Q=0;Q<y.length;Q++){let gt=b[Q],ft=y[Q];gt!==null&&ft!==void 0&&ft.update(gt,X,l||o)}Yt&&Yt(J,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),f=null}let Ot=new Vx;Ot.setAnimationLoop(Mt),this.setAnimationLoop=function(J){Yt=J},this.dispose=function(){}}},yC=new _e,Xx=new se;Xx.set(-1,0,0,0,1,0,0,0,1);function vC(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ff(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,E,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,w,E):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=t.get(m),E=w.envMap,S=w.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(yC.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Xx),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,w,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let w=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function SC(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){let b=y.program;n.uniformBlockBinding(S,b)}function l(S,y){let b=s[S.id];b===void 0&&(g(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",w));let M=y.program;n.updateUBOMapping(S,M);let _=t.render.frame;r[S.id]!==_&&(d(S),r[S.id]=_)}function h(S){let y=u();S.__bindingPointIndex=y;let b=i.createBuffer(),M=S.__size,_=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,M,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=s[S.id],b=S.uniforms,M=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let _=0,T=b.length;_<T;_++){let C=b[_];if(Array.isArray(C))for(let I=0,P=C.length;I<P;I++)p(C[I],_,I,M);else p(C,_,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,y,b,M){if(x(S,y,b,M)===!0){let _=S.__offset,T=S.value;if(Array.isArray(T)){let C=0;for(let I=0;I<T.length;I++){let P=T[I],V=m(P);f(P,S.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,S.__data)}}function f(S,y,b){typeof S=="number"||typeof S=="boolean"?y[0]=S:S.isMatrix3?(y[0]=S.elements[0],y[1]=S.elements[1],y[2]=S.elements[2],y[3]=0,y[4]=S.elements[3],y[5]=S.elements[4],y[6]=S.elements[5],y[7]=0,y[8]=S.elements[6],y[9]=S.elements[7],y[10]=S.elements[8],y[11]=0):ArrayBuffer.isView(S)?y.set(new S.constructor(S.buffer,S.byteOffset,y.length)):S.toArray(y,b)}function x(S,y,b,M){let _=S.value,T=y+"_"+b;if(M[T]===void 0)return typeof _=="number"||typeof _=="boolean"?M[T]=_:ArrayBuffer.isView(_)?M[T]=_.slice():M[T]=_.clone(),!0;{let C=M[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return M[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(S){let y=S.uniforms,b=0,M=16;for(let T=0,C=y.length;T<C;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let P=0,V=I.length;P<V;P++){let O=I[P],F=Array.isArray(O.value)?O.value:[O.value];for(let D=0,R=F.length;D<R;D++){let G=F[D],U=m(G),W=b%M,B=W%U.boundary,pt=W+B;b+=B,pt!==0&&M-pt<U.storage&&(b+=M-pt),O.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=U.storage}}}let _=b%M;return _>0&&(b+=M-_),S.__size=b,S.__cache={},this}function m(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",S),y}function w(S){let y=S.target;y.removeEventListener("dispose",w);let b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function E(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:E}}var bC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vs=null;function MC(){return vs===null&&(vs=new Nc(bC,16,16,vr,Cn),vs.name="DFG_LUT",vs.minFilter=En,vs.magFilter=En,vs.wrapS=fs,vs.wrapT=fs,vs.generateMipmaps=!1,vs.needsUpdate=!0),vs}var dd=class{constructor(t={}){let{canvas:e=ax(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=gi}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let x=p,g=new Set([Ru,Cu,Eu]),m=new Set([gi,$i,fa,ma,wu,Tu]),w=new Uint32Array(4),E=new Int32Array(4),S=new k,y=null,b=null,M=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,P=null,V=null,O=null,F=null;this._outputColorSpace=Yn;let D=0,R=0,G=null,U=-1,W=null,B=new Ce,pt=new Ce,xt=null,Yt=new Qt(0),Mt=0,Ot=e.width,J=e.height,X=1,Q=null,gt=null,ft=new Ce(0,0,Ot,J),Lt=new Ce(0,0,Ot,J),he=!1,rt=new Oc,j=!1,nt=!1,ct=new _e,ht=new k,_t=new Ce,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function jt(){return G===null?X:1}let z=n;function Wt(A,H){return e.getContext(A,H)}let ne,N,v,Y,K,it,vt,wt,st,at,At,Zt,It,Et,$t,te,oe,q,Ct,ot,Rt,Dt,ut;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",zi,!1),z===null){let H="webgl2";if(z=Wt(H,A),z===null)throw Wt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(A){throw e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",zi,!1),ee("WebGLRenderer: "+A.message),A}function Jt(){ne=new IE(z),ne.init(),Rt=new gC(z,ne),N=new vE(z,ne,t,Rt),v=new fC(z,ne),N.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),V=z.createFramebuffer(),O=z.createFramebuffer(),F=z.createFramebuffer(),Y=new DE(z),K=new tC,it=new mC(z,ne,v,K,N,Rt,Y),vt=new RE(C),wt=new Fw(z),Dt=new xE(z,wt),st=new NE(z,wt,Y,Dt),at=new FE(z,st,wt,Dt,Y),q=new OE(z,N,it),$t=new SE(K),At=new Q1(C,vt,ne,N,Dt,$t),Zt=new vC(C,K),It=new nC,Et=new cC(ne),oe=new _E(C,vt,v,at,f,c),te=new pC(C,at,N),ut=new SC(z,Y,N,v),Ct=new yE(z,ne,Y),ot=new PE(z,ne,Y),Y.programs=At.programs,C.capabilities=N,C.extensions=ne,C.properties=K,C.renderLists=It,C.shadowMap=te,C.state=v,C.info=Y}x!==gi&&(T=new UE(x,e.width,e.height,a,s,r));let Gt=new Pf(C,z);this.xr=Gt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(Ot,J,!1))},this.getSize=function(A){return A.set(Ot,J)},this.setSize=function(A,H,et=!0){if(Gt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=A,J=H,e.width=Math.floor(A*X),e.height=Math.floor(H*X),et===!0&&(e.style.width=A+"px",e.style.height=H+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Ot*X,J*X).floor()},this.setDrawingBufferSize=function(A,H,et){Ot=A,J=H,X=et,e.width=Math.floor(A*et),e.height=Math.floor(H*et),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(x===gi){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(ft)},this.setViewport=function(A,H,et,Z){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,H,et,Z),v.viewport(B.copy(ft).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Lt)},this.setScissor=function(A,H,et,Z){A.isVector4?Lt.set(A.x,A.y,A.z,A.w):Lt.set(A,H,et,Z),v.scissor(pt.copy(Lt).multiplyScalar(X).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){v.setScissorTest(he=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){gt=A},this.getClearColor=function(A){return A.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,et=!0){let Z=0;if(A){let $=!1;if(G!==null){let Pt=G.texture.format;$=g.has(Pt)}if($){let Pt=G.texture.type,kt=m.has(Pt),Nt=oe.getClearColor(),Vt=oe.getClearAlpha(),Ht=Nt.r,ae=Nt.g,pe=Nt.b;kt?(w[0]=Ht,w[1]=ae,w[2]=pe,w[3]=Vt,z.clearBufferuiv(z.COLOR,0,w)):(E[0]=Ht,E[1]=ae,E[2]=pe,E[3]=Vt,z.clearBufferiv(z.COLOR,0,E))}else Z|=z.COLOR_BUFFER_BIT}H&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",zi,!1),oe.dispose(),It.dispose(),Et.dispose(),K.dispose(),vt.dispose(),at.dispose(),Dt.dispose(),ut.dispose(),At.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Ng),Gt.removeEventListener("sessionend",Pg),Vr.stop()};function ke(A){A.preventDefault(),Mc("WebGLRenderer: Context Lost."),I=!0}function Te(){Mc("WebGLRenderer: Context Restored."),I=!1;let A=Y.autoReset,H=te.enabled,et=te.autoUpdate,Z=te.needsUpdate,$=te.type;Jt(),Y.autoReset=A,te.enabled=H,te.autoUpdate=et,te.needsUpdate=Z,te.type=$}function zi(A){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function us(A){let H=A.target;H.removeEventListener("dispose",us),Zb(H)}function Zb(A){$b(A),K.remove(A)}function $b(A){let H=K.get(A).programs;H!==void 0&&(H.forEach(function(et){At.releaseProgram(et)}),A.isShaderMaterial&&At.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,et,Z,$,Pt){H===null&&(H=St);let kt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Nt=Qb(A,H,et,Z,$);v.setMaterial(Z,kt);let Vt=et.index,Ht=1;if(Z.wireframe===!0){if(Vt=st.getWireframeAttribute(et),Vt===void 0)return;Ht=2}let ae=et.drawRange,pe=et.attributes.position,zt=ae.start*Ht,Ae=(ae.start+ae.count)*Ht;Pt!==null&&(zt=Math.max(zt,Pt.start*Ht),Ae=Math.min(Ae,(Pt.start+Pt.count)*Ht)),Vt!==null?(zt=Math.max(zt,0),Ae=Math.min(Ae,Vt.count)):pe!=null&&(zt=Math.max(zt,0),Ae=Math.min(Ae,pe.count));let hn=Ae-zt;if(hn<0||hn===1/0)return;Dt.setup($,Z,Nt,et,Vt);let ze,Oe=Ct;if(Vt!==null&&(ze=wt.get(Vt),Oe=ot,Oe.setIndex(ze)),$.isMesh)Z.wireframe===!0?(v.setLineWidth(Z.wireframeLinewidth*jt()),Oe.setMode(z.LINES)):Oe.setMode(z.TRIANGLES);else if($.isLine){let kn=Z.linewidth;kn===void 0&&(kn=1),v.setLineWidth(kn*jt()),$.isLineSegments?Oe.setMode(z.LINES):$.isLineLoop?Oe.setMode(z.LINE_LOOP):Oe.setMode(z.LINE_STRIP)}else $.isPoints?Oe.setMode(z.POINTS):$.isSprite&&Oe.setMode(z.TRIANGLES);if($.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Oe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let kn=$._multiDrawStarts,Ft=$._multiDrawCounts,qn=$._multiDrawCount,ge=Vt?wt.get(Vt).bytesPerElement:1,Ei=K.get(Z).currentProgram.getUniforms();for(let ds=0;ds<qn;ds++)Ei.setValue(z,"_gl_DrawID",ds),Oe.render(kn[ds]/ge,Ft[ds])}else if($.isInstancedMesh)Oe.renderInstances(zt,hn,$.count);else if(et.isInstancedBufferGeometry){let kn=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ft=Math.min(et.instanceCount,kn);Oe.renderInstances(zt,hn,Ft)}else Oe.render(zt,hn)};function Ig(A,H,et,Z){P!==null&&A.isNodeMaterial&&P.setObject(Z,A),j===!0&&$t.setState(A,et,!1),A.transparent===!0&&A.side===ys&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,ih(A,H,Z),A.side=gr,A.needsUpdate=!0,ih(A,H,Z),A.side=ys):ih(A,H,Z)}this.compile=function(A,H,et=null){et===null&&(et=A),P!==null&&P.renderStart(A,H,et),b=Et.get(et),b.init(H),_.push(b),et.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),A!==et&&A.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),nt=this.localClippingEnabled,j=$t.init(this.clippingPlanes,nt),j===!0&&$t.setGlobalState(this.clippingPlanes,H),P!==null&&te.render(b.state.shadowsArray,et,H);let Z=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Pt=$.material;if(Pt)if(Array.isArray(Pt))for(let kt=0;kt<Pt.length;kt++){let Nt=Pt[kt];Ig(Nt,et,H,$),Z.add(Nt)}else Ig(Pt,et,H,$),Z.add(Pt)}),b=_.pop(),P!==null&&P.renderEnd(),Z},this.compileAsync=function(A,H,et=null){let Z=this.compile(A,H,et);return new Promise($=>{function Pt(){if(Z.forEach(function(kt){let Vt=K.get(kt).currentProgram;(Vt===void 0||Vt.isReady())&&Z.delete(kt)}),Z.size===0){$(A);return}setTimeout(Pt,10)}ne.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let ap=null;function Jb(A){ap&&ap(A)}function Ng(){Vr.stop()}function Pg(){Vr.start()}let Vr=new Vx;Vr.setAnimationLoop(Jb),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(A){ap=A,Gt.setAnimationLoop(A),A===null?Vr.stop():Vr.start()},Gt.addEventListener("sessionstart",Ng),Gt.addEventListener("sessionend",Pg),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(A,H);let et=Gt.enabled===!0&&Gt.isPresenting===!0,Z=T!==null&&(G===null||et)&&T.begin(C,G);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(H),H=Gt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,H,G),b=Et.get(A,_.length),b.init(H),b.state.textureUnits=it.getTextureUnits(),_.push(b),ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),rt.setFromProjectionMatrix(ct,Yi,H.reversedDepth),nt=this.localClippingEnabled,j=$t.init(this.clippingPlanes,nt),y=It.get(A,M.length),y.init(),M.push(y),Gt.enabled===!0&&Gt.isPresenting===!0){let kt=C.xr.getDepthSensingMesh();kt!==null&&cp(kt,H,-1/0,C.sortObjects)}cp(A,H,0,C.sortObjects),y.finish(),P!==null&&P.updateLights(b.state.lightsArray),C.sortObjects===!0&&y.sort(Q,gt),Ut=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Ut&&oe.addToRenderList(y,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j===!0&&$t.beginShadows();let $=b.state.shadowsArray;if(te.render($,A,H),j===!0&&$t.endShadows(),(Z&&T.hasRenderPass())===!1){let kt=y.opaque,Nt=y.transmissive;if(b.setupLights(),H.isArrayCamera){let Vt=H.cameras;if(Nt.length>0)for(let Ht=0,ae=Vt.length;Ht<ae;Ht++){let pe=Vt[Ht];Og(kt,Nt,A,pe)}Ut&&oe.render(A);for(let Ht=0,ae=Vt.length;Ht<ae;Ht++){let pe=Vt[Ht];Dg(y,A,pe,pe.viewport)}}else Nt.length>0&&Og(kt,Nt,A,H),Ut&&oe.render(A),Dg(y,A,H)}G!==null&&R===0&&(it.updateMultisampleRenderTarget(G),it.updateRenderTargetMipmap(G)),Z&&T.end(C),A.isScene===!0&&A.onAfterRender(C,A,H),Dt.resetDefaultState(),U=-1,W=null,_.pop(),_.length>0?(b=_[_.length-1],it.setTextureUnits(b.state.textureUnits),j===!0&&$t.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,M.pop(),M.length>0?y=M[M.length-1]:y=null,P!==null&&P.renderEnd()};function cp(A,H,et,Z){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(rt)){Z&&_t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ct);let kt=at.update(A),Nt=A.material;Nt.visible&&y.push(A,kt,Nt,et,_t.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(rt))){let kt=at.update(A),Nt=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_t.copy(A.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),_t.copy(kt.boundingSphere.center)),_t.applyMatrix4(A.matrixWorld).applyMatrix4(ct)),Array.isArray(Nt)){let Vt=kt.groups;for(let Ht=0,ae=Vt.length;Ht<ae;Ht++){let pe=Vt[Ht],zt=Nt[pe.materialIndex];zt&&zt.visible&&y.push(A,kt,zt,et,_t.z,pe,H)}}else Nt.visible&&y.push(A,kt,Nt,et,_t.z,null,H)}}let Pt=A.children;for(let kt=0,Nt=Pt.length;kt<Nt;kt++)cp(Pt[kt],H,et,Z)}function Dg(A,H,et,Z){let{opaque:$,transmissive:Pt,transparent:kt}=A;b.setupLightsView(et),j===!0&&$t.setGlobalState(C.clippingPlanes,et),Z&&v.viewport(B.copy(Z)),$.length>0&&nh($,H,et),Pt.length>0&&nh(Pt,H,et),kt.length>0&&nh(kt,H,et),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Og(A,H,et,Z){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Z.id]===void 0){let zt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Z.id]=new dn(1,1,{generateMipmaps:!0,type:zt?Cn:gi,minFilter:xr,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let Pt=b.state.transmissionRenderTarget[Z.id],kt=Z.viewport||B;Pt.setSize(kt.z*C.transmissionResolutionScale,kt.w*C.transmissionResolutionScale);let Nt=C.getRenderTarget(),Vt=C.getActiveCubeFace(),Ht=C.getActiveMipmapLevel();C.setRenderTarget(Pt),C.getClearColor(Yt),Mt=C.getClearAlpha(),Mt<1&&C.setClearColor(16777215,.5),C.clear(),Ut&&oe.render(et);let ae=C.toneMapping;C.toneMapping=Zi;let pe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),b.setupLightsView(Z),j===!0&&$t.setGlobalState(C.clippingPlanes,Z),nh(A,et,Z),it.updateMultisampleRenderTarget(Pt),it.updateRenderTargetMipmap(Pt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ae=0,hn=H.length;Ae<hn;Ae++){let ze=H[Ae],{object:Oe,geometry:kn,material:Ft,group:qn}=ze;if(Ft.side===ys&&Oe.layers.test(Z.layers)){let ge=Ft.side;Ft.side=Jn,Ft.needsUpdate=!0,Fg(Oe,et,Z,kn,Ft,qn),Ft.side=ge,Ft.needsUpdate=!0,zt=!0}}zt===!0&&(it.updateMultisampleRenderTarget(Pt),it.updateRenderTargetMipmap(Pt))}C.setRenderTarget(Nt,Vt,Ht),C.setClearColor(Yt,Mt),pe!==void 0&&(Z.viewport=pe),C.toneMapping=ae}function nh(A,H,et){let Z=H.isScene===!0?H.overrideMaterial:null;for(let $=0,Pt=A.length;$<Pt;$++){let kt=A[$],{object:Nt,geometry:Vt,group:Ht}=kt,ae=kt.material;ae.allowOverride===!0&&Z!==null&&(ae=Z),Nt.layers.test(et.layers)&&Fg(Nt,H,et,Vt,ae,Ht)}}function Fg(A,H,et,Z,$,Pt){P!==null&&$.isNodeMaterial&&P.setObject(A,$),A.onBeforeRender(C,H,et,Z,$,Pt),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(C,H,et,Z,A,Pt),$.transparent===!0&&$.side===ys&&$.forceSinglePass===!1?($.side=Jn,$.needsUpdate=!0,C.renderBufferDirect(et,H,Z,$,A,Pt),$.side=gr,$.needsUpdate=!0,C.renderBufferDirect(et,H,Z,$,A,Pt),$.side=ys):C.renderBufferDirect(et,H,Z,$,A,Pt),A.onAfterRender(C,H,et,Z,$,Pt)}function ih(A,H,et){H.isScene!==!0&&(H=St);let Z=K.get(A),$=b.state.lights,Pt=b.state.shadowsArray,kt=$.state.version,Nt=At.getParameters(A,$.state,Pt,H,et,b.state.lightProbeGridArray),Vt=At.getProgramCacheKey(Nt),Ht=Z.programs;Z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;let ae=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Z.envMap=vt.get(A.envMap||Z.environment,ae),Z.envMapRotation=Z.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",us),Ht=new Map,Z.programs=Ht);let pe=Ht.get(Vt);if(pe!==void 0){if(Z.currentProgram===pe&&Z.lightsStateVersion===kt)return Ug(A,Nt),pe}else Nt.uniforms=At.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,et,Nt),A.onBeforeCompile(Nt,C),pe=At.acquireProgram(Nt,Vt),Ht.set(Vt,pe),Z.uniforms=Nt.uniforms;let zt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=$t.uniform),Ug(A,Nt),Z.needsLights=eM(A),Z.lightsStateVersion=kt,Z.needsLights&&(zt.ambientLightColor.value=$.state.ambient,zt.lightProbe.value=$.state.probe,zt.sunLights.value=$.state.sun,zt.sunLightShadows.value=$.state.sunShadow,zt.directionalLights.value=$.state.directional,zt.directionalLightShadows.value=$.state.directionalShadow,zt.spotLights.value=$.state.spot,zt.spotLightShadows.value=$.state.spotShadow,zt.rectAreaLights.value=$.state.rectArea,zt.ltc_1.value=$.state.rectAreaLTC1,zt.ltc_2.value=$.state.rectAreaLTC2,zt.pointLights.value=$.state.point,zt.pointLightShadows.value=$.state.pointShadow,zt.hemisphereLights.value=$.state.hemi,zt.sunShadowMatrix.value=$.state.sunShadowMatrix,zt.sunShadowCascade.value=$.state.sunShadowCascade,zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,zt.spotLightMatrix.value=$.state.spotLightMatrix,zt.spotLightMap.value=$.state.spotLightMap,zt.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=b.state.lightProbeGridArray.length>0,Z.currentProgram=pe,Z.uniformsList=null,pe}function Lg(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=xa.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Ug(A,H){let et=K.get(A);et.outputColorSpace=H.outputColorSpace,et.batching=H.batching,et.batchingColor=H.batchingColor,et.instancing=H.instancing,et.instancingColor=H.instancingColor,et.instancingMorph=H.instancingMorph,et.skinning=H.skinning,et.morphTargets=H.morphTargets,et.morphNormals=H.morphNormals,et.morphColors=H.morphColors,et.morphTargetsCount=H.morphTargetsCount,et.numClippingPlanes=H.numClippingPlanes,et.numIntersection=H.numClipIntersection,et.vertexAlphas=H.vertexAlphas,et.vertexTangents=H.vertexTangents,et.toneMapping=H.toneMapping}function Kb(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(H.matrixWorld);for(let et=0,Z=A.length;et<Z;et++){let $=A[et];if($.texture!==null&&$.boundingBox.containsPoint(S))return $}return null}function Qb(A,H,et,Z,$){H.isScene!==!0&&(H=St),it.resetTextureUnits();let Pt=H.fog,kt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,Nt=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ue.workingColorSpace,Vt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ht=vt.get(Z.envMap||kt,Vt),ae=Z.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pe=!!et.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),zt=!!et.morphAttributes.position,Ae=!!et.morphAttributes.normal,hn=!!et.morphAttributes.color,ze=Zi;Z.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ze=C.toneMapping);let Oe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,kn=Oe!==void 0?Oe.length:0,Ft=K.get(Z),qn=b.state.lights;if(j===!0&&(nt===!0||A!==W)){let Be=A===W&&Z.id===U;$t.setState(Z,A,Be)}let ge=!1;Z.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==qn.state.version||Ft.outputColorSpace!==Nt||$.isBatchedMesh&&Ft.batching===!1||!$.isBatchedMesh&&Ft.batching===!0||$.isBatchedMesh&&Ft.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ft.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ft.instancing===!1||!$.isInstancedMesh&&Ft.instancing===!0||$.isSkinnedMesh&&Ft.skinning===!1||!$.isSkinnedMesh&&Ft.skinning===!0||$.isInstancedMesh&&Ft.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ft.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ft.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ft.instancingMorph===!1&&$.morphTexture!==null||Ft.envMap!==Ht||Z.fog===!0&&Ft.fog!==Pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==$t.numPlanes||Ft.numIntersection!==$t.numIntersection)||Ft.vertexAlphas!==ae||Ft.vertexTangents!==pe||Ft.morphTargets!==zt||Ft.morphNormals!==Ae||Ft.morphColors!==hn||Ft.toneMapping!==ze||Ft.morphTargetsCount!==kn||!!Ft.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Ft.__version=Z.version);let Ei=Ft.currentProgram;ge===!0&&(Ei=ih(Z,H,$),P&&Z.isNodeMaterial&&P.onUpdateProgram(Z,Ei,Ft));let ds=!1,tr=!1,Co=!1,Ie=Ei.getUniforms(),sn=Ft.uniforms;if(v.useProgram(Ei.program)&&(ds=!0,tr=!0,Co=!0),Z.id!==U&&(U=Z.id,tr=!0),Ft.needsLights){let Be=Kb(b.state.lightProbeGridArray,$);Ft.lightProbeGrid!==Be&&(Ft.lightProbeGrid=Be,tr=!0)}if(ds||W!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(z,"projectionMatrix",A.projectionMatrix),Ie.setValue(z,"viewMatrix",A.matrixWorldInverse);let nr=Ie.map.cameraPosition;nr!==void 0&&nr.setValue(z,ht.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&Ie.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ie.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,tr=!0,Co=!0)}if(Ft.needsLights&&(qn.state.sunShadowMap.length>0&&Ie.setValue(z,"sunShadowMap",qn.state.sunShadowMap,it),qn.state.directionalShadowMap.length>0&&Ie.setValue(z,"directionalShadowMap",qn.state.directionalShadowMap,it),qn.state.spotShadowMap.length>0&&Ie.setValue(z,"spotShadowMap",qn.state.spotShadowMap,it),qn.state.pointShadowMap.length>0&&Ie.setValue(z,"pointShadowMap",qn.state.pointShadowMap,it)),$.isSkinnedMesh){Ie.setOptional(z,$,"bindMatrix"),Ie.setOptional(z,$,"bindMatrixInverse");let Be=$.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Ie.setValue(z,"boneTexture",Be.boneTexture,it))}$.isBatchedMesh&&(Ie.setOptional(z,$,"batchingTexture"),Ie.setValue(z,"batchingTexture",$._matricesTexture,it),Ie.setOptional(z,$,"batchingIdTexture"),Ie.setValue(z,"batchingIdTexture",$._indirectTexture,it),Ie.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&Ie.setValue(z,"batchingColorTexture",$._colorsTexture,it));let er=et.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&q.update($,et,Ei),(tr||Ft.receiveShadow!==$.receiveShadow)&&(Ft.receiveShadow=$.receiveShadow,Ie.setValue(z,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(sn.envMapIntensity.value=H.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=MC()),tr){if(Ie.setValue(z,"toneMappingExposure",C.toneMappingExposure),Ft.needsLights&&tM(sn,Co),Pt&&Z.fog===!0&&Zt.refreshFogUniforms(sn,Pt),Zt.refreshMaterialUniforms(sn,Z,X,J,b.state.transmissionRenderTarget[A.id]),Ft.needsLights&&Ft.lightProbeGrid){let Be=Ft.lightProbeGrid;sn.probesSH.value=Be.texture,sn.probesMin.value.copy(Be.boundingBox.min),sn.probesMax.value.copy(Be.boundingBox.max),sn.probesResolution.value.copy(Be.resolution)}xa.upload(z,Lg(Ft),sn,it)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(xa.upload(z,Lg(Ft),sn,it),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ie.setValue(z,"center",$.center),Ie.setValue(z,"modelViewMatrix",$.modelViewMatrix),Ie.setValue(z,"normalMatrix",$.normalMatrix),Ie.setValue(z,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let Be=Z.uniformsGroups;for(let nr=0,Ro=Be.length;nr<Ro;nr++){let Bg=Be[nr];ut.update(Bg,Ei),ut.bind(Bg,Ei)}}return Ei}function tM(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function eM(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,H,et){let Z=K.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=H,K.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:et,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let et=K.get(A);et.__webglFramebuffer=H,et.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,et=0){G=A,D=H,R=et;let Z=null,$=!1,Pt=!1;if(A){let Nt=K.get(A);if(Nt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(z.FRAMEBUFFER,Nt.__webglFramebuffer),B.copy(A.viewport),pt.copy(A.scissor),xt=A.scissorTest,v.viewport(B),v.scissor(pt),v.setScissorTest(xt),U=-1;return}else if(Nt.__webglFramebuffer===void 0)it.setupRenderTarget(A);else if(Nt.__hasExternalTextures)it.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ae=A.depthTexture;if(Nt.__boundDepthTexture!==ae){if(ae!==null&&K.has(ae)&&(A.width!==ae.image.width||A.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(A)}}let Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Pt=!0);let Ht=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[H])?Z=Ht[H][et]:Z=Ht[H],$=!0):A.samples>0&&it.useMultisampledRTT(A)===!1?Z=K.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?Z=Ht[et]:Z=Ht,B.copy(A.viewport),pt.copy(A.scissor),xt=A.scissorTest}else B.copy(ft).multiplyScalar(X).floor(),pt.copy(Lt).multiplyScalar(X).floor(),xt=he;if(et!==0&&(Z=V),v.bindFramebuffer(z.FRAMEBUFFER,Z)&&v.drawBuffers(A,Z),v.viewport(B),v.scissor(pt),v.setScissorTest(xt),$){let Nt=K.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Nt.__webglTexture,et)}else if(Pt){let Nt=H;for(let Vt=0;Vt<A.textures.length;Vt++){let Ht=K.get(A.textures[Vt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Vt,Ht.__webglTexture,et,Nt)}}else if(A!==null&&et!==0){let Nt=K.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Nt.__webglTexture,et)}U=-1};function kg(A){let H=K.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=N.textureFormatReadable(A.format),H.__typeReadable=N.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,et,Z,$,Pt,kt,Nt=0){if(!(A&&A.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Vt=Vt[kt]),Vt){v.bindFramebuffer(z.FRAMEBUFFER,Vt);try{let Ht=A.textures[Nt],ae=Ht.format,pe=Ht.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Nt);let zt=kg(Ht);if(zt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Z&&et>=0&&et<=A.height-$&&z.readPixels(H,et,Z,$,Rt.convert(ae),Rt.convert(pe),Pt)}finally{let Ht=G!==null?K.get(G).__webglFramebuffer:null;v.bindFramebuffer(z.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,H,et,Z,$,Pt,kt,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Vt=Vt[kt]),Vt)if(H>=0&&H<=A.width-Z&&et>=0&&et<=A.height-$){v.bindFramebuffer(z.FRAMEBUFFER,Vt);let Ht=A.textures[Nt],ae=Ht.format,pe=Ht.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Nt);let zt=kg(Ht);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ae),z.bufferData(z.PIXEL_PACK_BUFFER,Pt.byteLength,z.STREAM_READ),z.readPixels(H,et,Z,$,Rt.convert(ae),Rt.convert(pe),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let hn=G!==null?K.get(G).__webglFramebuffer:null;v.bindFramebuffer(z.FRAMEBUFFER,hn);let ze=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await lx(z,ze,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ae),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ae),z.deleteSync(ze),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,et=0){let Z=Math.pow(2,-et),$=Math.floor(A.image.width*Z),Pt=Math.floor(A.image.height*Z),kt=H!==null?H.x:0,Nt=H!==null?H.y:0;it.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,et,0,0,kt,Nt,$,Pt),v.unbindTexture()},this.copyTextureToTexture=function(A,H,et=null,Z=null,$=0,Pt=0){let kt,Nt,Vt,Ht,ae,pe,zt,Ae,hn,ze=A.isCompressedTexture?A.mipmaps[Pt]:A.image;if(et!==null)kt=et.max.x-et.min.x,Nt=et.max.y-et.min.y,Vt=et.isBox3?et.max.z-et.min.z:1,Ht=et.min.x,ae=et.min.y,pe=et.isBox3?et.min.z:0;else{let sn=Math.pow(2,-$);kt=Math.floor(ze.width*sn),Nt=Math.floor(ze.height*sn),A.isDataArrayTexture?Vt=ze.depth:A.isData3DTexture?Vt=Math.floor(ze.depth*sn):Vt=1,Ht=0,ae=0,pe=0}Z!==null?(zt=Z.x,Ae=Z.y,hn=Z.z):(zt=0,Ae=0,hn=0);let Oe=Rt.convert(H.format),kn=Rt.convert(H.type),Ft;H.isData3DTexture?(it.setTexture3D(H,0),Ft=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(it.setTexture2DArray(H,0),Ft=z.TEXTURE_2D_ARRAY):(it.setTexture2D(H,0),Ft=z.TEXTURE_2D),v.activeTexture(z.TEXTURE0),v.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);let qn=v.getParameter(z.UNPACK_ROW_LENGTH),ge=v.getParameter(z.UNPACK_IMAGE_HEIGHT),Ei=v.getParameter(z.UNPACK_SKIP_PIXELS),ds=v.getParameter(z.UNPACK_SKIP_ROWS),tr=v.getParameter(z.UNPACK_SKIP_IMAGES);v.pixelStorei(z.UNPACK_ROW_LENGTH,ze.width),v.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ze.height),v.pixelStorei(z.UNPACK_SKIP_PIXELS,Ht),v.pixelStorei(z.UNPACK_SKIP_ROWS,ae),v.pixelStorei(z.UNPACK_SKIP_IMAGES,pe);let Co=A.isDataArrayTexture||A.isData3DTexture,Ie=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let sn=K.get(A),er=K.get(H),Be=K.get(sn.__renderTarget),nr=K.get(er.__renderTarget);v.bindFramebuffer(z.READ_FRAMEBUFFER,Be.__webglFramebuffer),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let Ro=0;Ro<Vt;Ro++)Co&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,K.get(A).__webglTexture,$,pe+Ro),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,K.get(H).__webglTexture,Pt,hn+Ro)),z.blitFramebuffer(Ht,ae,kt,Nt,zt,Ae,kt,Nt,z.DEPTH_BUFFER_BIT,z.NEAREST);v.bindFramebuffer(z.READ_FRAMEBUFFER,null),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||K.has(A)){let sn=K.get(A),er=K.get(H);v.bindFramebuffer(z.READ_FRAMEBUFFER,O),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,F);for(let Be=0;Be<Vt;Be++)Co?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,sn.__webglTexture,$,pe+Be):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,sn.__webglTexture,$),Ie?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,er.__webglTexture,Pt,hn+Be):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,er.__webglTexture,Pt),$!==0?z.blitFramebuffer(Ht,ae,kt,Nt,zt,Ae,kt,Nt,z.COLOR_BUFFER_BIT,z.NEAREST):Ie?z.copyTexSubImage3D(Ft,Pt,zt,Ae,hn+Be,Ht,ae,kt,Nt):z.copyTexSubImage2D(Ft,Pt,zt,Ae,Ht,ae,kt,Nt);v.bindFramebuffer(z.READ_FRAMEBUFFER,null),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ie?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ft,Pt,zt,Ae,hn,kt,Nt,Vt,Oe,kn,ze.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Ft,Pt,zt,Ae,hn,kt,Nt,Vt,Oe,ze.data):z.texSubImage3D(Ft,Pt,zt,Ae,hn,kt,Nt,Vt,Oe,kn,ze):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pt,zt,Ae,kt,Nt,Oe,kn,ze.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pt,zt,Ae,ze.width,ze.height,Oe,ze.data):z.texSubImage2D(z.TEXTURE_2D,Pt,zt,Ae,kt,Nt,Oe,kn,ze);v.pixelStorei(z.UNPACK_ROW_LENGTH,qn),v.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ge),v.pixelStorei(z.UNPACK_SKIP_PIXELS,Ei),v.pixelStorei(z.UNPACK_SKIP_ROWS,ds),v.pixelStorei(z.UNPACK_SKIP_IMAGES,tr),Pt===0&&H.generateMipmaps&&z.generateMipmap(Ft),v.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&it.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?it.setTextureCube(A,0):A.isData3DTexture?it.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?it.setTexture2DArray(A,0):it.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){D=0,R=0,G=null,v.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var _i=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},TC=new $r(-1,1,1,-1,0,1),Df=class extends $e{constructor(){super(),this.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Se([0,2,0,0,2,0],2))}},AC=new Df,Sr=class{constructor(t){this._mesh=new Je(AC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,TC)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var md=class extends _i{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Di.clone(t.uniforms),this.material=new Ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Sr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Sl=class extends _i{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},gd=class extends _i{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var _d=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new mt);this._width=n.width,this._height=n.height,e=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new md(va),this.copyPass.material.blending=Ii,this.timer=new Jc}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Sl!==void 0&&(o instanceof Sl?n=!0:o instanceof gd&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xd=class extends _i{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Yx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Sa=class i extends _i{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new mt(t.x,t.y):new mt(256,256),this.clearColor=new Qt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(r,o,{type:Cn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new dn(r,o,{type:Cn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new dn(r,o,{type:Cn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Yx;this.highPassUniforms=Di.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ke({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new mt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Di.clone(va.uniforms),this.blendMaterial=new Ke({uniforms:this.copyUniforms,vertexShader:va.vertexShader,fragmentShader:va.fragmentShader,premultipliedAlpha:!0,blending:nl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qt,this._oldClearAlpha=1,this._basic=new pi,this._fsQuad=new Sr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new mt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],c=o+1<t?e[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new Ke({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Sa.BlurDirectionX=new mt(1,0);Sa.BlurDirectionY=new mt(0,1);var bl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var yd=class extends _i{constructor(){super(),this.isOutputPass=!0,this.uniforms=Di.clone(bl.uniforms),this.material=new ua({name:bl.name,uniforms:this.uniforms,vertexShader:bl.vertexShader,fragmentShader:bl.fragmentShader}),this._fsQuad=new Sr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===il?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===al&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var jx=new $n,vd=new k,ba=class extends $c{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Se(t,3)),this.setAttribute("uv",new Se(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new mr(e,6,1);return this.setAttribute("instanceStart",new di(n,3,0)),this.setAttribute("instanceEnd",new di(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new mr(e,6,1);return this.setAttribute("instanceColorStart",new di(n,3,0)),this.setAttribute("instanceColorEnd",new di(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Yc(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),jx.setFromBufferAttribute(e),this.boundingBox.union(jx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)vd.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(vd)),vd.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vd));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Tt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new mt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Kn.line={uniforms:Di.merge([Tt.common,Tt.fog,Tt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Ma=class extends Ke{constructor(t){super({type:"LineMaterial",uniforms:Di.clone(Kn.line.uniforms),vertexShader:Kn.line.vertexShader,fragmentShader:Kn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Of=new Ce,Zx=new k,$x=new k,Rn=new Ce,In=new Ce,Ss=new Ce,Ff=new k,Lf=new _e,Nn=new Qc,Jx=new k,Sd=new $n,bd=new si,bs=new Ce,Ms,eo;function Kx(i,t,e){return bs.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),bs.multiplyScalar(1/bs.w),bs.x=eo/e.width,bs.y=eo/e.height,bs.applyMatrix4(i.projectionMatrixInverse),bs.multiplyScalar(1/bs.w),Math.abs(Math.max(bs.x,bs.y))}function EC(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){Nn.start.fromBufferAttribute(s,a),Nn.end.fromBufferAttribute(r,a),Nn.applyMatrix4(e);let l=new k,h=new k;Ms.distanceSqToSegment(Nn.start,Nn.end,h,l),h.distanceTo(l)<eo*.5&&t.push({point:h,pointOnLine:l,distance:Ms.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function CC(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),u=-t.near;Ms.at(1,Ss),Ss.w=1,Ss.applyMatrix4(t.matrixWorldInverse),Ss.applyMatrix4(n),Ss.multiplyScalar(1/Ss.w),Ss.x*=r.x/2,Ss.y*=r.y/2,Ss.z=0,Ff.copy(Ss),Lf.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(Rn.fromBufferAttribute(c,d),In.fromBufferAttribute(l,d),Rn.w=1,In.w=1,Rn.applyMatrix4(Lf),In.applyMatrix4(Lf),Rn.z>u&&In.z>u)continue;if(Rn.z>u){let E=Rn.z-In.z,S=(Rn.z-u)/E;Rn.lerp(In,S)}else if(In.z>u){let E=In.z-Rn.z,S=(In.z-u)/E;In.lerp(Rn,S)}Rn.applyMatrix4(n),In.applyMatrix4(n),Rn.multiplyScalar(1/Rn.w),In.multiplyScalar(1/In.w),Rn.x*=r.x/2,Rn.y*=r.y/2,In.x*=r.x/2,In.y*=r.y/2,Nn.start.copy(Rn),Nn.start.z=0,Nn.end.copy(In),Nn.end.z=0;let x=Nn.closestPointToPointParameter(Ff,!0);Nn.at(x,Jx);let g=df.lerp(Rn.z,In.z,x),m=g>=-1&&g<=1,w=Ff.distanceTo(Jx)<eo*.5;if(m&&w){Nn.start.fromBufferAttribute(c,d),Nn.end.fromBufferAttribute(l,d),Nn.start.applyMatrix4(o),Nn.end.applyMatrix4(o);let E=new k,S=new k;Ms.distanceSqToSegment(Nn.start,Nn.end,S,E),e.push({point:S,pointOnLine:E,distance:Ms.origin.distanceTo(S),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var Md=class extends Je{constructor(t=new ba,e=new Ma({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Zx.fromBufferAttribute(e,o),$x.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Zx.distanceTo($x);let r=new mr(s,2,1);return t.setAttribute("instanceDistanceStart",new di(r,1,0)),t.setAttribute("instanceDistanceEnd",new di(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ms=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;eo=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),bd.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=eo*.5;else{let u=Math.max(s.near,bd.distanceToPoint(Ms.origin));l=Kx(s,u,c.resolution)}if(bd.radius+=l,Ms.intersectsSphere(bd)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Sd.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=eo*.5;else{let u=Math.max(s.near,Sd.distanceToPoint(Ms.origin));h=Kx(s,u,c.resolution)}Sd.expandByScalar(h),Ms.intersectsBox(Sd)!==!1&&(n?EC(this,e):CC(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Of),this.material.uniforms.resolution.value.set(Of.z,Of.w))}};var wg={};Vg(wg,{AMOscillator:()=>Za,AMSynth:()=>Pm,Abs:()=>Wl,Add:()=>as,AmplitudeEnvelope:()=>Ks,Analyser:()=>To,AudioToGain:()=>Js,AutoFilter:()=>Hm,AutoPanner:()=>qm,AutoWah:()=>Xm,BaseContext:()=>co,BiquadFilter:()=>Ka,BitCrusher:()=>jm,Buffer:()=>fN,BufferSource:()=>gN,Buffers:()=>mN,Channel:()=>rp,Chebyshev:()=>$m,Chorus:()=>Jm,Clock:()=>Or,Compressor:()=>Vi,Context:()=>Nr,Convolver:()=>bg,CrossFade:()=>Qs,DCMeter:()=>dg,Delay:()=>Tn,Destination:()=>Mg,Distortion:()=>Km,Draw:()=>hN,DuoSynth:()=>Dm,EQ3:()=>Sg,Emitter:()=>qs,Envelope:()=>Ye,FFT:()=>ug,FMOscillator:()=>Fr,FMSynth:()=>Om,FatOscillator:()=>$a,FeedbackCombFilter:()=>_o,FeedbackDelay:()=>Qm,Filter:()=>An,Follower:()=>So,Freeverb:()=>eg,Frequency:()=>LI,FrequencyClass:()=>Fn,FrequencyEnvelope:()=>Qa,FrequencyShifter:()=>tg,Gain:()=>dt,GainToAudio:()=>Hl,Gate:()=>_g,GrainPlayer:()=>Im,GreaterThan:()=>Xl,GreaterThanZero:()=>ql,IntervalTimeline:()=>zl,JCReverb:()=>ng,LFO:()=>nn,Limiter:()=>xg,Listener:()=>cN,Loop:()=>ec,LowpassCombFilter:()=>yo,Master:()=>oN,MembraneSynth:()=>jl,Merge:()=>wi,MetalSynth:()=>Fm,Meter:()=>hg,MidSideCompressor:()=>yg,MidSideMerge:()=>wo,MidSideSplit:()=>Mo,Midi:()=>VI,MidiClass:()=>ho,Mono:()=>fg,MonoSynth:()=>Ur,MultibandCompressor:()=>vg,MultibandSplit:()=>Eo,Multiply:()=>de,Negate:()=>fo,Noise:()=>os,NoiseSynth:()=>Lm,Offline:()=>BI,OfflineContext:()=>vi,OmniOscillator:()=>ki,OnePoleFilter:()=>xo,Oscillator:()=>Ue,PWMOscillator:()=>Ja,PanVol:()=>th,Panner:()=>vo,Panner3D:()=>mg,Param:()=>Bt,Part:()=>$l,Pattern:()=>Gm,Phaser:()=>rg,PingPongDelay:()=>ig,PitchShift:()=>sg,Player:()=>po,Players:()=>Rm,PluckSynth:()=>Bm,PolySynth:()=>Vm,Pow:()=>js,PulseOscillator:()=>Lr,Recorder:()=>gg,Reverb:()=>og,Sampler:()=>Zl,Scale:()=>ai,ScaleExp:()=>Yl,Sequence:()=>Wm,Signal:()=>bt,Solo:()=>Ao,Split:()=>hs,StateTimeline:()=>Si,StereoWidener:()=>ag,Subtract:()=>cs,SyncedSignal:()=>Nm,Synth:()=>ls,Ticks:()=>zI,TicksClass:()=>Me,Time:()=>DI,TimeClass:()=>ni,Timeline:()=>cn,ToneAudioBuffer:()=>De,ToneAudioBuffers:()=>Ys,ToneAudioNode:()=>tt,ToneBufferSource:()=>bi,ToneEvent:()=>Mi,ToneOscillatorNode:()=>uo,Transport:()=>sN,TransportTime:()=>UI,TransportTimeClass:()=>Le,Tremolo:()=>cg,Unit:()=>Db,UserMedia:()=>Cm,Vibrato:()=>lg,Volume:()=>ii,WaveShaper:()=>yn,Waveform:()=>pg,Zero:()=>Gl,connect:()=>Xe,connectSeries:()=>ln,connectSignal:()=>Dr,context:()=>dN,dbToGain:()=>is,debug:()=>Sm,defaultArg:()=>_n,disconnect:()=>jd,fanIn:()=>kI,ftom:()=>Ui,gainToDb:()=>Is,getContext:()=>me,getDestination:()=>aN,getDraw:()=>uN,getListener:()=>lN,getTransport:()=>rN,immediate:()=>iN,intervalToFrequencyRatio:()=>ss,isArray:()=>Fe,isBoolean:()=>kl,isDefined:()=>qt,isFunction:()=>_m,isNote:()=>Ha,isNumber:()=>an,isObject:()=>yi,isString:()=>Mn,isUndef:()=>Qe,loaded:()=>pN,mtof:()=>Xa,now:()=>nN,optionsFromArguments:()=>L,setContext:()=>Pr,start:()=>qd,supported:()=>gm,version:()=>wa});var wa="15.1.22";var ri=zg(Bf());var p0=()=>new DOMException("","AbortError");var f0=i=>(t,e,[n,s,r],o)=>{i(t[s],[e,n,r],a=>a[0]===e&&a[1]===n,o)};var m0=i=>(t,e,n)=>{let s=[];for(let r=0;r<n.numberOfInputs;r+=1)s.push(new Set);i.set(t,{activeInputs:s,outputs:new Set,passiveInputs:new WeakMap,renderer:e})};var g0=i=>(t,e)=>{i.set(t,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:e})};var ws=new WeakSet,Td=new WeakMap,Ta=new WeakMap,Ad=new WeakMap,Dl=new WeakMap,Aa=new WeakMap,Ed=new WeakMap,Ol=new WeakMap,Fl=new WeakMap,Ll=new WeakMap;var _0={construct(){return _0}},x0=i=>{try{let t=new Proxy(i,_0);new t}catch{return!1}return!0};var y0=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Vf=(i,t)=>{let e=[],n=i.replace(/^[\s]+/,""),s=n.match(y0);for(;s!==null;){let r=s[1].slice(1,-1),o=s[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,t).toString());e.push(o),n=n.slice(s[0].length).replace(/^[\s]+/,""),s=n.match(y0)}return[e.join(";"),n]};var v0=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},S0=i=>{if(!x0(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},b0=(i,t,e,n,s,r,o,a,c,l,h,u,d)=>{let p=0;return(f,x,g={credentials:"omit"})=>{let m=h.get(f);if(m!==void 0&&m.has(x))return Promise.resolve();let w=l.get(f);if(w!==void 0){let y=w.get(x);if(y!==void 0)return y}let E=r(f),S=E.audioWorklet===void 0?s(x).then(([y,b])=>{let[M,_]=Vf(y,b),T=`${M};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${_}
})})(window,'_AWGS')`;return e(T)}).then(()=>{let y=d._AWGS.pop();if(y===void 0)throw new SyntaxError;n(E.currentTime,E.sampleRate,()=>y(class{},void 0,(b,M)=>{if(b.trim()==="")throw t();let _=Fl.get(E);if(_!==void 0){if(_.has(b))throw t();S0(M),v0(M.parameterDescriptors),_.set(b,M)}else S0(M),v0(M.parameterDescriptors),Fl.set(E,new Map([[b,M]]))},E.sampleRate,void 0,void 0))}):Promise.all([s(x),Promise.resolve(i(u,u))]).then(([[y,b],M])=>{let _=p+1;p=_;let[T,C]=Vf(y,b),O=`${T};((AudioWorkletProcessor,registerProcessor)=>{${C}
})(${M?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${M?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${M?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${_}',class extends AudioWorkletProcessor{process(){return !1}})`,F=new Blob([O],{type:"application/javascript; charset=utf-8"}),D=URL.createObjectURL(F);return E.audioWorklet.addModule(D,g).then(()=>{if(a(E))return E;let R=o(E);return R.audioWorklet.addModule(D,g).then(()=>R)}).then(R=>{if(c===null)throw new SyntaxError;try{new c(R,`__sac${_}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(D))});return w===void 0?l.set(f,new Map([[x,S]])):w.set(x,S),S.then(()=>{let y=h.get(f);y===void 0?h.set(f,new Set([x])):y.add(x)}).finally(()=>{let y=l.get(f);y!==void 0&&y.delete(x)}),S}};var pn=(i,t)=>{let e=i.get(t);if(e===void 0)throw new Error("A value with the given key could not be found.");return e};var br=(i,t)=>{let e=Array.from(i).filter(t);if(e.length>1)throw Error("More than one element was found.");if(e.length===0)throw Error("No element was found.");let[n]=e;return i.delete(n),n};var Cd=(i,t,e,n)=>{let s=pn(i,t),r=br(s,o=>o[0]===e&&o[1]===n);return s.size===0&&i.delete(t),r};var Ts=i=>pn(Ed,i);var Ji=i=>{if(ws.has(i))throw new Error("The AudioNode is already stored.");ws.add(i),Ts(i).forEach(t=>t(!0))};var Rd=i=>"port"in i;var As=i=>{if(!ws.has(i))throw new Error("The AudioNode is not stored.");ws.delete(i),Ts(i).forEach(t=>t(!1))};var Ul=(i,t)=>{!Rd(i)&&t.every(e=>e.size===0)&&As(i)};var M0=(i,t,e,n,s,r,o,a,c,l,h,u,d)=>{let p=new WeakMap;return(f,x,g,m,w)=>{let{activeInputs:E,passiveInputs:S}=r(x),{outputs:y}=r(f),b=a(f),M=_=>{let T=c(x),C=c(f);if(_){let I=Cd(S,f,g,m);i(E,f,I,!1),!w&&!u(f)&&e(C,T,g,m),d(x)&&Ji(x)}else{let I=n(E,f,g,m);t(S,m,I,!1),!w&&!u(f)&&s(C,T,g,m);let P=o(x);if(P===0)h(x)&&Ul(x,E);else{let V=p.get(x);V!==void 0&&clearTimeout(V),p.set(x,setTimeout(()=>{h(x)&&Ul(x,E)},P*1e3))}}};return l(y,[x,g,m],_=>_[0]===x&&_[1]===g&&_[2]===m,!0)?(b.add(M),h(f)?i(E,f,[g,m,M],!0):t(S,m,[f,g,M],!0),!0):!1}};var w0=i=>(t,e,[n,s,r],o)=>{let a=t.get(n);a===void 0?t.set(n,new Set([[s,e,r]])):i(a,[s,e,r],c=>c[0]===s&&c[1]===e,o)};var T0=i=>(t,e)=>{let n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});e.connect(n).connect(t.destination);let s=()=>{e.removeEventListener("ended",s),e.disconnect(n),n.disconnect()};e.addEventListener("ended",s)};var A0=i=>(t,e)=>{i(t).add(e)};var XC={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},E0=(i,t,e,n,s,r)=>class extends i{constructor(a,c){let l=s(a),h={...XC,...c},u=n(l,h),d=r(l)?t():null;super(a,!1,u,d),this._nativeAnalyserNode=u}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){let c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,e()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){let c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,e()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}};var ye=(i,t)=>i.context===t;var C0=(i,t,e)=>()=>{let n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!ye(a,o)){let l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=i(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){let a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}};var Ea=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0};var Oi=()=>new DOMException("","IndexSizeError");var Ca=i=>{i.getChannelData=(t=>e=>{try{return t.call(i,e)}catch(n){throw n.code===12?Oi():n}})(i.getChannelData)};var YC={numberOfChannels:1},R0=(i,t,e,n,s,r,o,a)=>{let c=null;return class I0{constructor(h){if(s===null)throw new Error("Missing the native OfflineAudioContext constructor.");let{length:u,numberOfChannels:d,sampleRate:p}={...YC,...h};c===null&&(c=new s(1,1,44100));let f=n!==null&&t(r,r)?new n({length:u,numberOfChannels:d,sampleRate:p}):c.createBuffer(d,u,p);if(f.numberOfChannels===0)throw e();return typeof f.copyFromChannel!="function"?(o(f),Ca(f)):t(Ea,()=>Ea(f))||a(f),i.add(f),f}static[Symbol.hasInstance](h){return h!==null&&typeof h=="object"&&Object.getPrototypeOf(h)===I0.prototype||i.has(h)}}};var rn=-34028234663852886e22,tn=-rn;var Qn=i=>ws.has(i);var jC={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},N0=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,h){let u=r(l),d={...jC,...h},p=s(u,d),f=o(u),x=f?t():null;super(l,!1,p,x),this._audioBufferSourceNodeRenderer=x,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=p,this._onended=null,this._playbackRate=e(this,f,p.playbackRate,tn,rn)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){let h=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=h;let u=this._nativeAudioBufferSourceNode.onended;this._onended=u!==null&&u===h?l:u}get playbackRate(){return this._playbackRate}start(l=0,h=0,u){if(this._nativeAudioBufferSourceNode.start(l,h,u),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=u===void 0?[l,h]:[l,h,u]),this.context.state!=="closed"){Ji(this);let d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),Qn(this)&&As(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}};var P0=(i,t,e,n,s)=>()=>{let r=new WeakMap,o=null,a=null,c=async(l,h)=>{let u=e(l),d=ye(u,h);if(!d){let p={buffer:u.buffer,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,loop:u.loop,loopEnd:u.loopEnd,loopStart:u.loopStart,playbackRate:u.playbackRate.value};u=t(h,p),o!==null&&u.start(...o),a!==null&&u.stop(a)}return r.set(h,u),d?await i(h,l.playbackRate,u.playbackRate):await n(h,l.playbackRate,u.playbackRate),await s(l,h,u),u};return{set start(l){o=l},set stop(l){a=l},render(l,h){let u=r.get(h);return u!==void 0?Promise.resolve(u):c(l,h)}}};var D0=i=>"playbackRate"in i;var O0=i=>"frequency"in i&&"gain"in i;var F0=i=>"offset"in i;var L0=i=>!("frequency"in i)&&"gain"in i;var U0=i=>"detune"in i&&"frequency"in i&&!("gain"in i);var k0=i=>"pan"in i;var gn=i=>pn(Td,i);var Mr=i=>pn(Ad,i);var Id=(i,t)=>{let{activeInputs:e}=gn(i);e.forEach(s=>s.forEach(([r])=>{t.includes(i)||Id(r,[...t,i])}));let n=D0(i)?[i.playbackRate]:Rd(i)?Array.from(i.parameters.values()):O0(i)?[i.Q,i.detune,i.frequency,i.gain]:F0(i)?[i.offset]:L0(i)?[i.gain]:U0(i)?[i.detune,i.frequency]:k0(i)?[i.pan]:[];for(let s of n){let r=Mr(s);r!==void 0&&r.activeInputs.forEach(([o])=>Id(o,t))}Qn(i)&&As(i)};var wr=i=>{Id(i.destination,[])};var Nd=i=>i===void 0||typeof i=="number"||typeof i=="string"&&(i==="balanced"||i==="interactive"||i==="playback");var B0=(i,t,e,n,s,r,o,a,c)=>class extends i{constructor(h={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let u;try{u=new c(h)}catch(f){throw f.code===12&&f.message==="sampleRate is not in range"?e():f}if(u===null)throw n();if(!Nd(h.latencyHint))throw new TypeError(`The provided value '${h.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(h.sampleRate!==void 0&&u.sampleRate!==h.sampleRate)throw e();super(u,2);let{latencyHint:d}=h,{sampleRate:p}=u;if(this._baseLatency=typeof u.baseLatency=="number"?u.baseLatency:d==="balanced"?512/p:d==="interactive"||d===void 0?256/p:d==="playback"?1024/p:Math.max(2,Math.min(128,Math.round(d*p/128)))*128/p,this._nativeAudioContext=u,c.name==="webkitAudioContext"?(this._nativeGainNode=u.createGain(),this._nativeOscillatorNode=u.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(u.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,u.state==="running"){this._state="suspended";let f=()=>{this._state==="suspended"&&(this._state=null),u.removeEventListener("statechange",f)};u.addEventListener("statechange",f)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw t()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),wr(this)}))}createMediaElementSource(h){return new s(this,{mediaElement:h})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(h){return new o(this,{mediaStream:h})}createMediaStreamTrackSource(h){return new a(this,{mediaStreamTrack:h})}resume(){return this._state==="suspended"?new Promise((h,u)=>{let d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?h():this.resume().then(h,u)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(h=>{throw h===void 0||h.code===15?t():h})}suspend(){return this._nativeAudioContext.suspend().catch(h=>{throw h===void 0?t():h})}};var V0=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,h){let u=r(l),d=o(u),p=s(u,h,d),f=d?t(a):null;super(l,!1,p,f),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=p}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw e();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}};var z0=i=>{let t=new WeakMap,e=async(n,s)=>{let r=s.destination;return t.set(s,r),await i(n,s,r),r};return{render(n,s){let r=t.get(s);return r!==void 0?Promise.resolve(r):e(n,s)}}};var G0=(i,t,e,n,s,r,o,a)=>(c,l)=>{let h=l.listener,u=()=>{let y=new Float32Array(1),b=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),M=o(l),_=!1,T=[0,0,-1,0,1,0],C=[0,0,0],I=()=>{if(_)return;_=!0;let F=n(l,256,9,0);F.onaudioprocess=({inputBuffer:D})=>{let R=[r(D,y,0),r(D,y,1),r(D,y,2),r(D,y,3),r(D,y,4),r(D,y,5)];R.some((U,W)=>U!==T[W])&&(h.setOrientation(...R),T=R);let G=[r(D,y,6),r(D,y,7),r(D,y,8)];G.some((U,W)=>U!==C[W])&&(h.setPosition(...G),C=G)},b.connect(F)},P=F=>D=>{D!==T[F]&&(T[F]=D,h.setOrientation(...T))},V=F=>D=>{D!==C[F]&&(C[F]=D,h.setPosition(...C))},O=(F,D,R)=>{let G=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:D});G.connect(b,0,F),G.start(),Object.defineProperty(G.offset,"defaultValue",{get(){return D}});let U=i({context:c},M,G.offset,tn,rn);return a(U,"value",W=>()=>W.call(U),W=>B=>{try{W.call(U,B)}catch(pt){if(pt.code!==9)throw pt}I(),M&&R(B)}),U.cancelAndHoldAtTime=(W=>M?()=>{throw s()}:(...B)=>{let pt=W.apply(U,B);return I(),pt})(U.cancelAndHoldAtTime),U.cancelScheduledValues=(W=>M?()=>{throw s()}:(...B)=>{let pt=W.apply(U,B);return I(),pt})(U.cancelScheduledValues),U.exponentialRampToValueAtTime=(W=>M?()=>{throw s()}:(...B)=>{let pt=W.apply(U,B);return I(),pt})(U.exponentialRampToValueAtTime),U.linearRampToValueAtTime=(W=>M?()=>{throw s()}:(...B)=>{let pt=W.apply(U,B);return I(),pt})(U.linearRampToValueAtTime),U.setTargetAtTime=(W=>M?()=>{throw s()}:(...B)=>{let pt=W.apply(U,B);return I(),pt})(U.setTargetAtTime),U.setValueAtTime=(W=>M?()=>{throw s()}:(...B)=>{let pt=W.apply(U,B);return I(),pt})(U.setValueAtTime),U.setValueCurveAtTime=(W=>M?()=>{throw s()}:(...B)=>{let pt=W.apply(U,B);return I(),pt})(U.setValueCurveAtTime),U};return{forwardX:O(0,0,P(0)),forwardY:O(1,0,P(1)),forwardZ:O(2,-1,P(2)),positionX:O(6,0,V(0)),positionY:O(7,0,V(1)),positionZ:O(8,0,V(2)),upX:O(3,0,P(3)),upY:O(4,1,P(4)),upZ:O(5,0,P(5))}},{forwardX:d,forwardY:p,forwardZ:f,positionX:x,positionY:g,positionZ:m,upX:w,upY:E,upZ:S}=h.forwardX===void 0?u():h;return{get forwardX(){return d},get forwardY(){return p},get forwardZ(){return f},get positionX(){return x},get positionY(){return g},get positionZ(){return m},get upX(){return w},get upY(){return E},get upZ(){return S}}};var no=i=>"context"in i;var Tr=i=>no(i[0]);var Ki=(i,t,e,n)=>{for(let s of i)if(e(s)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(t),!0};var zf=(i,t,[e,n],s)=>{Ki(i,[t,e,n],r=>r[0]===t&&r[1]===e,s)};var Gf=(i,[t,e,n],s)=>{let r=i.get(t);r===void 0?i.set(t,new Set([[e,n]])):Ki(r,[e,n],o=>o[0]===e,s)};var Fi=i=>"inputs"in i;var Ra=(i,t,e,n)=>{if(Fi(t)){let s=t.inputs[n];return i.connect(s,e,0),[s,e,0]}return i.connect(t,e,n),[t,e,n]};var Wf=(i,t,e)=>{for(let n of i)if(n[0]===t&&n[1]===e)return i.delete(n),n;return null};var W0=(i,t,e)=>br(i,n=>n[0]===t&&n[1]===e);var Hf=(i,t)=>{if(!Ts(i).delete(t))throw new Error("Missing the expected event listener.")};var qf=(i,t,e)=>{let n=pn(i,t),s=br(n,r=>r[0]===e);return n.size===0&&i.delete(t),s};var Ia=(i,t,e,n)=>{Fi(t)?i.disconnect(t.inputs[n],e,0):i.disconnect(t,e,n)};var Ne=i=>pn(Ta,i);var io=i=>pn(Dl,i);var Vs=i=>Ol.has(i);var Na=i=>!ws.has(i);var Xf=(i,t)=>new Promise(e=>{if(t!==null)e(!0);else{let n=i.createScriptProcessor(256,1,1),s=i.createGain(),r=i.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;let a=i.createBufferSource();a.buffer=r,a.loop=!0,a.connect(n).connect(i.destination),a.connect(s),a.disconnect(s),n.onaudioprocess=c=>{let l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,h=>h===1)?e(!0):e(!1),a.stop(),n.onaudioprocess=null,a.disconnect(n),n.disconnect(i.destination)},a.start()}});var Pd=(i,t)=>{let e=new Map;for(let n of i)for(let s of n){let r=e.get(s);e.set(s,r===void 0?1:r+1)}e.forEach((n,s)=>t(s,n))};var so=i=>"context"in i;var H0=i=>{let t=new Map;i.connect=(e=>(n,s=0,r=0)=>{let o=so(n)?e(n,s,r):e(n,s),a=t.get(n);return a===void 0?t.set(n,[{input:r,output:s}]):a.every(c=>c.input!==r||c.output!==s)&&a.push({input:r,output:s}),o})(i.connect.bind(i)),i.disconnect=(e=>(n,s,r)=>{if(e.apply(i),n===void 0)t.clear();else if(typeof n=="number")for(let[o,a]of t){let c=a.filter(l=>l.output!==n);c.length===0?t.delete(o):t.set(o,c)}else if(t.has(n))if(s===void 0)t.delete(n);else{let o=t.get(n);if(o!==void 0){let a=o.filter(c=>c.output!==s&&(c.input!==r||r===void 0));a.length===0?t.delete(n):t.set(n,a)}}for(let[o,a]of t)a.forEach(c=>{so(o)?i.connect(o,c.output,c.input):i.connect(o,c.output)})})(i.disconnect)};var ZC=(i,t,e,n)=>{let{activeInputs:s,passiveInputs:r}=Mr(t),{outputs:o}=gn(i),a=Ts(i),c=l=>{let h=Ne(i),u=io(t);if(l){let d=qf(r,i,e);zf(s,i,d,!1),!n&&!Vs(i)&&h.connect(u,e)}else{let d=W0(s,i,e);Gf(r,d,!1),!n&&!Vs(i)&&h.disconnect(u,e)}};return Ki(o,[t,e],l=>l[0]===t&&l[1]===e,!0)?(a.add(c),Qn(i)?zf(s,i,[e,c],!0):Gf(r,[i,e,c],!0),!0):!1},$C=(i,t,e,n)=>{let{activeInputs:s,passiveInputs:r}=gn(t),o=Wf(s[n],i,e);return o===null?[Cd(r,i,e,n)[2],!1]:[o[2],!0]},JC=(i,t,e)=>{let{activeInputs:n,passiveInputs:s}=Mr(t),r=Wf(n,i,e);return r===null?[qf(s,i,e)[1],!1]:[r[2],!0]},Yf=(i,t,e,n,s)=>{let[r,o]=$C(i,e,n,s);if(r!==null&&(Hf(i,r),o&&!t&&!Vs(i)&&Ia(Ne(i),Ne(e),n,s)),Qn(e)){let{activeInputs:a}=gn(e);Ul(e,a)}},jf=(i,t,e,n)=>{let[s,r]=JC(i,e,n);s!==null&&(Hf(i,s),r&&!t&&!Vs(i)&&Ne(i).disconnect(io(e),n))},KC=(i,t)=>{let e=gn(i),n=[];for(let s of e.outputs)Tr(s)?Yf(i,t,...s):jf(i,t,...s),n.push(s[0]);return e.outputs.clear(),n},QC=(i,t,e)=>{let n=gn(i),s=[];for(let r of n.outputs)r[1]===e&&(Tr(r)?Yf(i,t,...r):jf(i,t,...r),s.push(r[0]),n.outputs.delete(r));return s},tR=(i,t,e,n,s)=>{let r=gn(i);return Array.from(r.outputs).filter(o=>o[0]===e&&(n===void 0||o[1]===n)&&(s===void 0||o[2]===s)).map(o=>(Tr(o)?Yf(i,t,...o):jf(i,t,...o),r.outputs.delete(o),o[0]))},q0=(i,t,e,n,s,r,o,a,c,l,h,u,d,p,f,x)=>class extends l{constructor(m,w,E,S){super(E),this._context=m,this._nativeAudioNode=E;let y=h(m);u(y)&&e(Xf,()=>Xf(y,x))!==!0&&H0(E),Ta.set(this,E),Ed.set(this,new Set),m.state!=="closed"&&w&&Ji(this),i(this,S,E)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(m){this._nativeAudioNode.channelCount=m}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(m){this._nativeAudioNode.channelCountMode=m}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(m){this._nativeAudioNode.channelInterpretation=m}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(m,w=0,E=0){if(w<0||w>=this._nativeAudioNode.numberOfOutputs)throw s();let S=h(this._context),y=f(S);if(d(m)||p(m))throw r();if(no(m)){let _=Ne(m);try{let C=Ra(this._nativeAudioNode,_,w,E),I=Na(this);(y||I)&&this._nativeAudioNode.disconnect(...C),this.context.state!=="closed"&&!I&&Na(m)&&Ji(m)}catch(C){throw C.code===12?r():C}if(t(this,m,w,E,y)){let C=c([this],m);Pd(C,n(y))}return m}let b=io(m);if(b.name==="playbackRate"&&b.maxValue===1024)throw o();try{this._nativeAudioNode.connect(b,w),(y||Na(this))&&this._nativeAudioNode.disconnect(b,w)}catch(_){throw _.code===12?r():_}if(ZC(this,m,w,y)){let _=c([this],m);Pd(_,n(y))}}disconnect(m,w,E){let S,y=h(this._context),b=f(y);if(m===void 0)S=KC(this,b);else if(typeof m=="number"){if(m<0||m>=this.numberOfOutputs)throw s();S=QC(this,b,m)}else{if(w!==void 0&&(w<0||w>=this.numberOfOutputs)||no(m)&&E!==void 0&&(E<0||E>=m.numberOfInputs))throw s();if(S=tR(this,b,m,w,E),S.length===0)throw r()}for(let M of S){let _=c([this],M);Pd(_,a)}}};var X0=zg(Bf()),Y0=(i,t,e,n,s,r,o,a,c,l,h,u,d)=>(p,f,x,g=null,m=null)=>{let w=x.value,E=new X0.AutomationEventList(w),S=f?n(E):null,y={get defaultValue(){return w},get maxValue(){return g===null?x.maxValue:g},get minValue(){return m===null?x.minValue:m},get value(){return x.value},set value(b){x.value=b,y.setValueAtTime(b,p.context.currentTime)},cancelAndHoldAtTime(b){if(typeof x.cancelAndHoldAtTime=="function")S===null&&E.flush(p.context.currentTime),E.add(s(b)),x.cancelAndHoldAtTime(b);else{let M=Array.from(E).pop();S===null&&E.flush(p.context.currentTime),E.add(s(b));let _=Array.from(E).pop();x.cancelScheduledValues(b),M!==_&&_!==void 0&&(_.type==="exponentialRampToValue"?x.exponentialRampToValueAtTime(_.value,_.endTime):_.type==="linearRampToValue"?x.linearRampToValueAtTime(_.value,_.endTime):_.type==="setValue"?x.setValueAtTime(_.value,_.startTime):_.type==="setValueCurve"&&x.setValueCurveAtTime(_.values,_.startTime,_.duration))}return y},cancelScheduledValues(b){return S===null&&E.flush(p.context.currentTime),E.add(r(b)),x.cancelScheduledValues(b),y},exponentialRampToValueAtTime(b,M){if(b===0)throw new RangeError;if(!Number.isFinite(M)||M<0)throw new RangeError;let _=p.context.currentTime;return S===null&&E.flush(_),Array.from(E).length===0&&(E.add(l(w,_)),x.setValueAtTime(w,_)),E.add(o(b,M)),x.exponentialRampToValueAtTime(b,M),y},linearRampToValueAtTime(b,M){let _=p.context.currentTime;return S===null&&E.flush(_),Array.from(E).length===0&&(E.add(l(w,_)),x.setValueAtTime(w,_)),E.add(a(b,M)),x.linearRampToValueAtTime(b,M),y},setTargetAtTime(b,M,_){return S===null&&E.flush(p.context.currentTime),E.add(c(b,M,_)),x.setTargetAtTime(b,M,_),y},setValueAtTime(b,M){return S===null&&E.flush(p.context.currentTime),E.add(l(b,M)),x.setValueAtTime(b,M),y},setValueCurveAtTime(b,M,_){let T=b instanceof Float32Array?b:new Float32Array(b);if(u!==null&&u.name==="webkitAudioContext"){let C=M+_,I=p.context.sampleRate,P=Math.ceil(M*I),V=Math.floor(C*I),O=V-P,F=new Float32Array(O);for(let R=0;R<O;R+=1){let G=(T.length-1)/_*((P+R)/I-M),U=Math.floor(G),W=Math.ceil(G);F[R]=U===W?T[U]:(1-(G-U))*T[U]+(1-(W-G))*T[W]}S===null&&E.flush(p.context.currentTime),E.add(h(F,M,_)),x.setValueCurveAtTime(F,M,_);let D=V/I;D<C&&d(y,F[F.length-1],D),d(y,T[T.length-1],C)}else S===null&&E.flush(p.context.currentTime),E.add(h(T,M,_)),x.setValueCurveAtTime(T,M,_);return y}};return e.set(y,x),t.set(y,p),i(y,S),y};var j0=i=>({replay(t){for(let e of i)if(e.type==="exponentialRampToValue"){let{endTime:n,value:s}=e;t.exponentialRampToValueAtTime(s,n)}else if(e.type==="linearRampToValue"){let{endTime:n,value:s}=e;t.linearRampToValueAtTime(s,n)}else if(e.type==="setTarget"){let{startTime:n,target:s,timeConstant:r}=e;t.setTargetAtTime(s,n,r)}else if(e.type==="setValue"){let{startTime:n,value:s}=e;t.setValueAtTime(s,n)}else if(e.type==="setValueCurve"){let{duration:n,startTime:s,values:r}=e;t.setValueCurveAtTime(r,s,n)}else throw new Error("Can't apply an unknown automation.")}});var Pa=class{constructor(t){this._map=new Map(t)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(t,e=null){return this._map.forEach((n,s)=>t.call(e,n,s,this))}get(t){return this._map.get(t)}has(t){return this._map.has(t)}keys(){return this._map.keys()}values(){return this._map.values()}};var eR={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},Z0=(i,t,e,n,s,r,o,a,c,l,h,u,d,p)=>class extends t{constructor(x,g,m){var w;let E=a(x),S=c(E),y=h({...eR,...m});d(y);let b=Fl.get(E),M=b?.get(g),_=S||E.state!=="closed"?E:(w=o(E))!==null&&w!==void 0?w:E,T=s(_,S?null:x.baseLatency,l,g,M,y),C=S?n(g,y,M):null;super(x,!0,T,C);let I=[];T.parameters.forEach((V,O)=>{let F=e(this,S,V);I.push([O,F])}),this._nativeAudioWorkletNode=T,this._onprocessorerror=null,this._parameters=new Pa(I),S&&i(E,this);let{activeInputs:P}=r(this);u(T,P)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(x){let g=typeof x=="function"?p(this,x):null;this._nativeAudioWorkletNode.onprocessorerror=g;let m=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=m!==null&&m===g?x:m}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Da(i,t,e,n,s){if(typeof i.copyFromChannel=="function")t[e].byteLength===0&&(t[e]=new Float32Array(128)),i.copyFromChannel(t[e],n,s);else{let r=i.getChannelData(n);if(t[e].byteLength===0)t[e]=r.slice(s,s+128);else{let o=new Float32Array(r.buffer,s*Float32Array.BYTES_PER_ELEMENT,128);t[e].set(o)}}}var Dd=(i,t,e,n,s)=>{typeof i.copyToChannel=="function"?t[e].byteLength!==0&&i.copyToChannel(t[e],n,s):t[e].byteLength!==0&&i.getChannelData(n).set(t[e],s)};var Oa=(i,t)=>{let e=[];for(let n=0;n<i;n+=1){let s=[],r=typeof t=="number"?t:t[n];for(let o=0;o<r;o+=1)s.push(new Float32Array(128));e.push(s)}return e};var $0=(i,t)=>{let e=pn(Ll,i),n=Ne(t);return pn(e,n)};var nR=async(i,t,e,n,s,r,o)=>{let a=t===null?Math.ceil(i.context.length/128)*128:t.length,c=n.channelCount*n.numberOfInputs,l=s.reduce((g,m)=>g+m,0),h=l===0?null:e.createBuffer(l,a,e.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");let u=gn(i),d=await $0(e,i),p=Oa(n.numberOfInputs,n.channelCount),f=Oa(n.numberOfOutputs,s),x=Array.from(i.parameters.keys()).reduce((g,m)=>({...g,[m]:new Float32Array(128)}),{});for(let g=0;g<a;g+=128){if(n.numberOfInputs>0&&t!==null)for(let m=0;m<n.numberOfInputs;m+=1)for(let w=0;w<n.channelCount;w+=1)Da(t,p[m],w,w,g);r.parameterDescriptors!==void 0&&t!==null&&r.parameterDescriptors.forEach(({name:m},w)=>{Da(t,x,m,c+w,g)});for(let m=0;m<n.numberOfInputs;m+=1)for(let w=0;w<s[m];w+=1)f[m][w].byteLength===0&&(f[m][w]=new Float32Array(128));try{let m=p.map((E,S)=>u.activeInputs[S].size===0?[]:E),w=o(g/e.sampleRate,e.sampleRate,()=>d.process(m,f,x));if(h!==null)for(let E=0,S=0;E<n.numberOfOutputs;E+=1){for(let y=0;y<s[E];y+=1)Dd(h,f[E],y,S+y,g);S+=s[E]}if(!w)break}catch(m){i.dispatchEvent(new ErrorEvent("processorerror",{colno:m.colno,filename:m.filename,lineno:m.lineno,message:m.message}));break}}return h},J0=(i,t,e,n,s,r,o,a,c,l,h,u,d,p,f,x)=>(g,m,w)=>{let E=new WeakMap,S=null,y=async(b,M)=>{let _=h(b),T=null,C=ye(_,M),I=Array.isArray(m.outputChannelCount)?m.outputChannelCount:Array.from(m.outputChannelCount);if(u===null){let P=I.reduce((D,R)=>D+R,0),V=s(M,{channelCount:Math.max(1,P),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,P)}),O=[];for(let D=0;D<b.numberOfOutputs;D+=1)O.push(n(M,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:I[D]}));let F=o(M,{channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation,gain:1});F.connect=t.bind(null,O),F.disconnect=c.bind(null,O),T=[V,O,F]}else C||(_=new u(M,g));if(E.set(M,T===null?_:T[2]),T!==null){if(S===null){if(w===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");let R=b.channelCount*b.numberOfInputs,G=w.parameterDescriptors===void 0?0:w.parameterDescriptors.length,U=R+G;S=nR(b,U===0?null:await(async()=>{let B=new d(U,Math.ceil(b.context.length/128)*128,M.sampleRate),pt=[],xt=[];for(let Ot=0;Ot<m.numberOfInputs;Ot+=1)pt.push(o(B,{channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation,gain:1})),xt.push(s(B,{channelCount:m.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:m.channelCount}));let Yt=await Promise.all(Array.from(b.parameters.values()).map(async Ot=>{let J=r(B,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:Ot.value});return await p(B,Ot,J.offset),J})),Mt=n(B,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,R+G)});for(let Ot=0;Ot<m.numberOfInputs;Ot+=1){pt[Ot].connect(xt[Ot]);for(let J=0;J<m.channelCount;J+=1)xt[Ot].connect(Mt,J,Ot*m.channelCount+J)}for(let[Ot,J]of Yt.entries())J.connect(Mt,0,R+Ot),J.start(0);return Mt.connect(B.destination),await Promise.all(pt.map(Ot=>f(b,B,Ot))),x(B)})(),M,m,I,w,l)}let P=await S,V=e(M,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[O,F,D]=T;P!==null&&(V.buffer=P,V.start(0)),V.connect(O);for(let R=0,G=0;R<b.numberOfOutputs;R+=1){let U=F[R];for(let W=0;W<I[R];W+=1)O.connect(U,G+W,W);G+=I[R]}return D}if(C)for(let[P,V]of b.parameters.entries())await i(M,V,_.parameters.get(P));else for(let[P,V]of b.parameters.entries())await p(M,V,_.parameters.get(P));return await f(b,M,_),_};return{render(b,M){a(M,b);let _=E.get(M);return _!==void 0?Promise.resolve(_):y(b,M)}}};var K0=(i,t,e,n,s,r,o,a,c,l,h,u,d,p,f,x,g,m,w,E)=>class extends f{constructor(y,b){super(y,b),this._nativeContext=y,this._audioWorklet=i===void 0?void 0:{addModule:(M,_)=>i(this,M,_)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new t(this)}createBiquadFilter(){return new s(this)}createBuffer(y,b,M){return new e({length:b,numberOfChannels:y,sampleRate:M})}createBufferSource(){return new n(this)}createChannelMerger(y=6){return new r(this,{numberOfInputs:y})}createChannelSplitter(y=6){return new o(this,{numberOfOutputs:y})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(y=1){return new h(this,{maxDelayTime:y})}createDynamicsCompressor(){return new u(this)}createGain(){return new d(this)}createIIRFilter(y,b){return new p(this,{feedback:b,feedforward:y})}createOscillator(){return new x(this)}createPanner(){return new g(this)}createPeriodicWave(y,b,M={disableNormalization:!1}){return new m(this,{...M,imag:b,real:y})}createStereoPanner(){return new w(this)}createWaveShaper(){return new E(this)}decodeAudioData(y,b,M){return l(this._nativeContext,y).then(_=>(typeof b=="function"&&b(_),_),_=>{throw typeof M=="function"&&M(_),_})}};var iR={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},Q0=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,h){let u=r(l),d={...iR,...h},p=s(u,d),f=o(u),x=f?e():null;super(l,!1,p,x),this._Q=t(this,f,p.Q,tn,rn),this._detune=t(this,f,p.detune,1200*Math.log2(tn),-1200*Math.log2(tn)),this._frequency=t(this,f,p.frequency,l.sampleRate/2,0),this._gain=t(this,f,p.gain,40*Math.log10(tn),rn),this._nativeBiquadFilterNode=p,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,h,u){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,h,u)}catch(d){throw d.code===11?n():d}if(l.length!==h.length||h.length!==u.length)throw n()}};var ty=(i,t,e,n,s)=>()=>{let r=new WeakMap,o=async(a,c)=>{let l=e(a),h=ye(l,c);if(!h){let u={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=t(c,u)}return r.set(c,l),h?(await i(c,a.Q,l.Q),await i(c,a.detune,l.detune),await i(c,a.frequency,l.frequency),await i(c,a.gain,l.gain)):(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)),await s(a,c,l),l};return{render(a,c){let l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}};var ey=(i,t)=>(e,n)=>{let s=t.get(e);if(s!==void 0)return s;let r=i.get(e);if(r!==void 0)return r;try{let o=n();return o instanceof Promise?(i.set(e,o),o.catch(()=>!1).then(a=>(i.delete(e),t.set(e,a),a))):(t.set(e,o),o)}catch{return t.set(e,!1),!1}};var sR={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},ny=(i,t,e,n,s)=>class extends i{constructor(o,a){let c=n(o),l={...sR,...a},h=e(c,l),u=s(c)?t():null;super(o,!1,h,u)}};var iy=(i,t,e)=>()=>{let n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!ye(a,o)){let l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=i(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){let a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}};var rR={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},sy=(i,t,e,n,s,r)=>class extends i{constructor(a,c){let l=n(a),h=r({...rR,...c}),u=e(l,h),d=s(l)?t():null;super(a,!1,u,d)}};var ry=(i,t,e)=>()=>{let n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!ye(a,o)){let l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=i(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){let a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}};var oy=i=>(t,e,n)=>i(e,t,n);var ay=i=>(t,e,n=0,s=0)=>{let r=t[n];if(r===void 0)throw i();return so(e)?r.connect(e,0,s):r.connect(e,0)};var cy=i=>(t,e)=>{let n=i(t,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),s=t.createBuffer(1,2,44100);return n.buffer=s,n.loop=!0,n.connect(e),n.start(),()=>{n.stop(),n.disconnect(e)}};var oR={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},ly=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){let h=s(c),u={...oR,...l},d=n(h,u),p=r(h),f=p?e():null;super(c,!1,d,f),this._constantSourceNodeRenderer=f,this._nativeConstantSourceNode=d,this._offset=t(this,p,d.offset,tn,rn),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){let l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;let h=this._nativeConstantSourceNode.onended;this._onended=h!==null&&h===l?c:h}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){Ji(this);let l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),Qn(this)&&As(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}};var hy=(i,t,e,n,s)=>()=>{let r=new WeakMap,o=null,a=null,c=async(l,h)=>{let u=e(l),d=ye(u,h);if(!d){let p={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,offset:u.offset.value};u=t(h,p),o!==null&&u.start(o),a!==null&&u.stop(a)}return r.set(h,u),d?await i(h,l.offset,u.offset):await n(h,l.offset,u.offset),await s(l,h,u),u};return{set start(l){o=l},set stop(l){a=l},render(l,h){let u=r.get(h);return u!==void 0?Promise.resolve(u):c(l,h)}}};var uy=i=>t=>(i[0]=t,i[0]);var aR={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},dy=(i,t,e,n,s,r)=>class extends i{constructor(a,c){let l=n(a),h={...aR,...c},u=e(l,h),p=s(l)?t():null;super(a,!1,u,p),this._isBufferNullified=!1,this._nativeConvolverNode=u,h.buffer!==null&&r(this,h.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){let c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}};var py=(i,t,e)=>()=>{let n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!ye(a,o)){let l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=i(o,l)}return n.set(o,a),Fi(a)?await e(r,o,a.inputs[0]):await e(r,o,a),a};return{render(r,o){let a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}};var fy=(i,t)=>(e,n,s)=>{if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new t(e,n,s)}catch(r){throw r.name==="SyntaxError"?i():r}};var my=()=>new DOMException("","DataCloneError");var Zf=i=>{let{port1:t,port2:e}=new MessageChannel;return new Promise(n=>{let s=()=>{e.onmessage=null,t.close(),e.close(),n()};e.onmessage=()=>s();try{t.postMessage(i,[i])}catch{}finally{s()}})};var gy=(i,t,e,n,s,r,o,a,c,l,h)=>(u,d)=>{let p=o(u)?u:r(u);if(s.has(d)){let f=e();return Promise.reject(f)}try{s.add(d)}catch{}return t(c,()=>c(p))?p.decodeAudioData(d).then(f=>(Zf(d).catch(()=>{}),t(a,()=>a(f))||h(f),i.add(f),f)):new Promise((f,x)=>{let g=async()=>{try{await Zf(d)}catch{}},m=w=>{x(w),g()};try{p.decodeAudioData(d,w=>{typeof w.copyFromChannel!="function"&&(l(w),Ca(w)),i.add(w),g().then(()=>f(w))},w=>{m(w===null?n():w)})}catch(w){m(w)}})};var _y=(i,t,e,n,s,r,o,a)=>(c,l)=>{let h=t.get(c);if(h===void 0)throw new Error("Missing the expected cycle count.");let u=r(c.context),d=a(u);if(h===l){if(t.delete(c),!d&&o(c)){let p=n(c),{outputs:f}=e(c);for(let x of f)if(Tr(x)){let g=n(x[0]);i(p,g,x[1],x[2])}else{let g=s(x[0]);p.connect(g,x[1])}}}else t.set(c,h-l)};var cR={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},xy=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){let h=s(c),u={...cR,...l},d=n(h,u),p=r(h),f=p?e(u.maxDelayTime):null;super(c,!1,d,f),this._delayTime=t(this,p,d.delayTime),o(this,u.maxDelayTime)}get delayTime(){return this._delayTime}};var yy=(i,t,e,n,s)=>r=>{let o=new WeakMap,a=async(c,l)=>{let h=e(c),u=ye(h,l);if(!u){let d={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,delayTime:h.delayTime.value,maxDelayTime:r};h=t(l,d)}return o.set(l,h),u?await i(l,c.delayTime,h.delayTime):await n(l,c.delayTime,h.delayTime),await s(c,l,h),h};return{render(c,l){let h=o.get(l);return h!==void 0?Promise.resolve(h):a(c,l)}}};var vy=i=>(t,e,n,s)=>i(t[s],r=>r[0]===e&&r[1]===n);var Sy=i=>(t,e)=>{i(t).delete(e)};var by=i=>"delayTime"in i;var My=(i,t,e)=>function n(s,r){let o=no(r)?r:e(i,r);if(by(o))return[];if(s[0]===o)return[s];if(s.includes(o))return[];let{outputs:a}=t(o);return Array.from(a).map(c=>n([...s,o],c[0])).reduce((c,l)=>c.concat(l),[])};var Od=(i,t,e)=>{let n=t[e];if(n===void 0)throw i();return n},wy=i=>(t,e=void 0,n=void 0,s=0)=>e===void 0?t.forEach(r=>r.disconnect()):typeof e=="number"?Od(i,t,e).disconnect():so(e)?n===void 0?t.forEach(r=>r.disconnect(e)):s===void 0?Od(i,t,n).disconnect(e,0):Od(i,t,n).disconnect(e,0,s):n===void 0?t.forEach(r=>r.disconnect(e)):Od(i,t,n).disconnect(e,0);var lR={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},Ty=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,h){let u=r(l),d={...lR,...h},p=n(u,d),f=o(u),x=f?e():null;super(l,!1,p,x),this._attack=t(this,f,p.attack),this._knee=t(this,f,p.knee),this._nativeDynamicsCompressorNode=p,this._ratio=t(this,f,p.ratio),this._release=t(this,f,p.release),this._threshold=t(this,f,p.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){let h=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=h,s()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){let h=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=h,s()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}};var Ay=(i,t,e,n,s)=>()=>{let r=new WeakMap,o=async(a,c)=>{let l=e(a),h=ye(l,c);if(!h){let u={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=t(c,u)}return r.set(c,l),h?(await i(c,a.attack,l.attack),await i(c,a.knee,l.knee),await i(c,a.ratio,l.ratio),await i(c,a.release,l.release),await i(c,a.threshold,l.threshold)):(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)),await s(a,c,l),l};return{render(a,c){let l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}};var Ey=()=>new DOMException("","EncodingError");var Cy=i=>t=>new Promise((e,n)=>{if(i===null){n(new SyntaxError);return}let s=i.document.head;if(s===null)n(new SyntaxError);else{let r=i.document.createElement("script"),o=new Blob([t],{type:"application/javascript"}),a=URL.createObjectURL(o),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(a)};i.onerror=(h,u,d,p,f)=>{if(u===a||u===i.location.href&&d===1&&p===1)return l(),n(f),!1;if(c!==null)return c(h,u,d,p,f)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),e()},r.src=a,r.type="module",s.appendChild(r)}});var Ry=i=>class{constructor(e){this._nativeEventTarget=e,this._listeners=new WeakMap}addEventListener(e,n,s){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=i(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(e,r,s)}}dispatchEvent(e){return this._nativeEventTarget.dispatchEvent(e)}removeEventListener(e,n,s){let r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(e,r===void 0?null:r,s)}};var Iy=i=>(t,e,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(t*e)}},currentTime:{configurable:!0,get(){return t}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}};var Ny=i=>async t=>{try{let e=await fetch(t);if(e.ok)return[await e.text(),e.url]}catch{}throw i()};var hR={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},Py=(i,t,e,n,s,r)=>class extends i{constructor(a,c){let l=s(a),h={...hR,...c},u=n(l,h),d=r(l),p=d?e():null;super(a,!1,u,p),this._gain=t(this,d,u.gain,tn,rn)}get gain(){return this._gain}};var Dy=(i,t,e,n,s)=>()=>{let r=new WeakMap,o=async(a,c)=>{let l=e(a),h=ye(l,c);if(!h){let u={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=t(c,u)}return r.set(c,l),h?await i(c,a.gain,l.gain):await n(c,a.gain,l.gain),await s(a,c,l),l};return{render(a,c){let l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}};var Oy=(i,t)=>e=>t(i,e);var Fy=i=>t=>{let e=i(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return e.renderer};var Ly=i=>t=>{var e;return(e=i.get(t))!==null&&e!==void 0?e:0};var Uy=i=>t=>{let e=i(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return e.renderer};var ky=i=>t=>i.get(t);var He=()=>new DOMException("","InvalidStateError");var By=i=>t=>{let e=i.get(t);if(e===void 0)throw He();return e};var Vy=(i,t)=>e=>{let n=i.get(e);if(n!==void 0)return n;if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new t(1,1,44100),i.set(e,n),n};var zy=i=>t=>{let e=i.get(t);if(e===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return e};var Fa=()=>new DOMException("","InvalidAccessError");var Gy=i=>{i.getFrequencyResponse=(t=>(e,n,s)=>{if(e.length!==n.length||n.length!==s.length)throw Fa();return t.call(i,e,n,s)})(i.getFrequencyResponse)};var uR={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},Wy=(i,t,e,n,s,r)=>class extends i{constructor(a,c){let l=n(a),h=s(l),u={...uR,...c},d=t(l,h?null:a.baseLatency,u),p=h?e(u.feedback,u.feedforward):null;super(a,!1,d,p),Gy(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}};var Fd=(i,t,e,n,s,r,o,a,c,l,h)=>{let u=l.length,d=a;for(let p=0;p<u;p+=1){let f=e[0]*l[p];for(let x=1;x<s;x+=1){let g=d-x&c-1;f+=e[x]*r[g],f-=i[x]*o[g]}for(let x=s;x<n;x+=1)f+=e[x]*r[d-x&c-1];for(let x=s;x<t;x+=1)f-=i[x]*o[d-x&c-1];r[d]=l[p],o[d]=f,d=d+1&c-1,h[p]=f}return d};var dR=(i,t,e,n)=>{let s=e instanceof Float64Array?e:new Float64Array(e),r=n instanceof Float64Array?n:new Float64Array(n),o=s.length,a=r.length,c=Math.min(o,a);if(s[0]!==1){for(let f=0;f<o;f+=1)r[f]/=s[0];for(let f=1;f<a;f+=1)s[f]/=s[0]}let l=32,h=new Float32Array(l),u=new Float32Array(l),d=t.createBuffer(i.numberOfChannels,i.length,i.sampleRate),p=i.numberOfChannels;for(let f=0;f<p;f+=1){let x=i.getChannelData(f),g=d.getChannelData(f);h.fill(0),u.fill(0),Fd(s,o,r,a,c,h,u,0,l,x,g)}return d},Hy=(i,t,e,n,s)=>(r,o)=>{let a=new WeakMap,c=null,l=async(h,u)=>{let d=null,p=t(h),f=ye(p,u);if(u.createIIRFilter===void 0?d=i(u,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):f||(p=u.createIIRFilter(o,r)),a.set(u,d===null?p:d),d!==null){if(c===null){if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");let g=new e(h.context.destination.channelCount,h.context.length,u.sampleRate);c=(async()=>{await n(h,g,g.destination);let m=await s(g);return dR(m,u,r,o)})()}let x=await c;return d.buffer=x,d.start(0),d}return await n(h,u,p),p};return{render(h,u){let d=a.get(u);return d!==void 0?Promise.resolve(d):l(h,u)}}};var qy=(i,t,e,n,s,r)=>o=>(a,c)=>{let l=i.get(a);if(l===void 0){if(!o&&r(a)){let h=n(a),{outputs:u}=e(a);for(let d of u)if(Tr(d)){let p=n(d[0]);t(h,p,d[1],d[2])}else{let p=s(d[0]);h.disconnect(p,d[1])}}i.set(a,c)}else i.set(a,l+c)};var Xy=(i,t)=>e=>{let n=i.get(e);return t(n)||t(e)};var Yy=(i,t)=>e=>i.has(e)||t(e);var jy=(i,t)=>e=>i.has(e)||t(e);var Zy=(i,t)=>e=>{let n=i.get(e);return t(n)||t(e)};var $y=i=>t=>i!==null&&t instanceof i;var Jy=i=>t=>i!==null&&typeof i.AudioNode=="function"&&t instanceof i.AudioNode;var Ky=i=>t=>i!==null&&typeof i.AudioParam=="function"&&t instanceof i.AudioParam;var Qy=(i,t)=>e=>i(e)||t(e);var tv=i=>t=>i!==null&&t instanceof i;var ev=i=>i!==null&&i.isSecureContext;var nv=async(i,t,e,n,s,r,o,a,c,l,h,u,d,p,f,x)=>i(t,t)&&i(e,e)&&i(s,s)&&i(r,r)&&i(a,a)&&i(c,c)&&i(l,l)&&i(h,h)&&i(u,u)&&i(d,d)&&i(p,p)?(await Promise.all([i(n,n),i(o,o),i(f,f),i(x,x)])).every(m=>m):!1;var iv=(i,t,e,n)=>class extends i{constructor(r,o){let a=e(r),c=t(a,o);if(n(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}};var pR={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},sv=(i,t,e,n)=>class extends i{constructor(r,o){let a=e(r);if(n(a))throw new TypeError;let c={...pR,...o},l=t(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}};var rv=(i,t,e,n)=>class extends i{constructor(r,o){let a=e(r),c=t(a,o);if(n(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}};var ov=(i,t,e)=>class extends i{constructor(s,r){let o=e(s),a=t(o,r);super(s,!0,a,null)}};var av=(i,t,e,n,s)=>class extends n{constructor(o={}){if(s===null)throw new Error("Missing the native AudioContext constructor.");let a;try{a=new s(o)}catch(h){throw h.code===12&&h.message==="sampleRate is not in range"?t():h}if(a===null)throw e();if(!Nd(o.latencyHint))throw new TypeError(`The provided value '${o.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(o.sampleRate!==void 0&&a.sampleRate!==o.sampleRate)throw t();super(a,2);let{latencyHint:c}=o,{sampleRate:l}=a;if(this._baseLatency=typeof a.baseLatency=="number"?a.baseLatency:c==="balanced"?512/l:c==="interactive"||c===void 0?256/l:c==="playback"?1024/l:Math.max(2,Math.min(128,Math.round(c*l/128)))*128/l,this._nativeAudioContext=a,s.name==="webkitAudioContext"?(this._nativeGainNode=a.createGain(),this._nativeOscillatorNode=a.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(a.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,a.state==="running"){this._state="suspended";let h=()=>{this._state==="suspended"&&(this._state=null),a.removeEventListener("statechange",h)};a.addEventListener("statechange",h)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw i()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),wr(this)}))}resume(){return this._state==="suspended"?new Promise((o,a)=>{let c=()=>{this._nativeAudioContext.removeEventListener("statechange",c),this._nativeAudioContext.state==="running"?o():this.resume().then(o,a)};this._nativeAudioContext.addEventListener("statechange",c)}):this._nativeAudioContext.resume().catch(o=>{throw o===void 0||o.code===15?i():o})}suspend(){return this._nativeAudioContext.suspend().catch(o=>{throw o===void 0?i():o})}};var cv=(i,t,e,n,s,r)=>class extends e{constructor(a,c){super(a),this._nativeContext=a,Aa.set(this,a),n(a)&&s.set(a,new Set),this._destination=new i(this,c),this._listener=t(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){let c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;let l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}};var Qi=i=>{let t=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{let e=i.decodeAudioData(t.buffer,()=>{});return e===void 0?!1:(e.catch(()=>{}),!0)}catch{}return!1};var fR={numberOfChannels:1},lv=(i,t,e,n,s)=>class extends n{constructor(o){let{length:a,numberOfChannels:c,sampleRate:l}={...fR,...o},h=e(c,a,l);i(Qi,()=>Qi(h))||h.addEventListener("statechange",(()=>{let u=0,d=p=>{this._state==="running"&&(u>0?(h.removeEventListener("statechange",d),p.stopImmediatePropagation(),this._waitForThePromiseToSettle(p)):u+=1)};return d})()),super(h,c),this._length=a,this._nativeOfflineAudioContext=h,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",s(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,wr(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}};var hv=(i,t)=>(e,n,s)=>{let r=new Set;return e.connect=(o=>(a,c=0,l=0)=>{let h=r.size===0;if(t(a))return o.call(e,a,c,l),i(r,[a,c,l],u=>u[0]===a&&u[1]===c&&u[2]===l,!0),h&&n(),a;o.call(e,a,c),i(r,[a,c],u=>u[0]===a&&u[1]===c,!0),h&&n()})(e.connect),e.disconnect=(o=>(a,c,l)=>{let h=r.size>0;if(a===void 0)o.apply(e),r.clear();else if(typeof a=="number"){o.call(e,a);for(let d of r)d[1]===a&&r.delete(d)}else{t(a)?o.call(e,a,c,l):o.call(e,a,c);for(let d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}let u=r.size===0;h&&u&&s()})(e.disconnect),e};var ve=(i,t,e)=>{let n=t[e];n!==void 0&&n!==i[e]&&(i[e]=n)};var fe=(i,t)=>{ve(i,t,"channelCount"),ve(i,t,"channelCountMode"),ve(i,t,"channelInterpretation")};var $f=i=>typeof i.getFloatTimeDomainData=="function";var uv=i=>{i.getFloatTimeDomainData=t=>{let e=new Uint8Array(t.length);i.getByteTimeDomainData(e);let n=Math.max(e.length,i.fftSize);for(let s=0;s<n;s+=1)t[s]=(e[s]-128)*.0078125;return t}};var dv=(i,t)=>(e,n)=>{let s=e.createAnalyser();if(fe(s,n),!(n.maxDecibels>n.minDecibels))throw t();return ve(s,n,"fftSize"),ve(s,n,"maxDecibels"),ve(s,n,"minDecibels"),ve(s,n,"smoothingTimeConstant"),i($f,()=>$f(s))||uv(s),s};var pv=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null;var be=(i,t,e)=>{let n=t[e];n!==void 0&&n!==i[e].value&&(i[e].value=n)};var fv=i=>{i.start=(t=>{let e=!1;return(n=0,s=0,r)=>{if(e)throw He();t.call(i,n,s,r),e=!0}})(i.start)};var La=i=>{i.start=(t=>(e=0,n=0,s)=>{if(typeof s=="number"&&s<0||n<0||e<0)throw new RangeError("The parameters can't be negative.");t.call(i,e,n,s)})(i.start)};var Ua=i=>{i.stop=(t=>(e=0)=>{if(e<0)throw new RangeError("The parameter can't be negative.");t.call(i,e)})(i.stop)};var mv=(i,t,e,n,s,r,o,a,c,l,h)=>(u,d)=>{let p=u.createBufferSource();return fe(p,d),be(p,d,"playbackRate"),ve(p,d,"buffer"),ve(p,d,"loop"),ve(p,d,"loopEnd"),ve(p,d,"loopStart"),t(e,()=>e(u))||fv(p),t(n,()=>n(u))||c(p),t(s,()=>s(u))||l(p,u),t(r,()=>r(u))||La(p),t(o,()=>o(u))||h(p,u),t(a,()=>a(u))||Ua(p),i(u,p),p};var gv=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null;var _v=(i,t)=>(e,n,s)=>{let r=e.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}s&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});let o=i(e,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return t(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),t(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),t(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o};var xv=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null;var yv=i=>{let{port1:t}=new MessageChannel;try{t.postMessage(i)}finally{t.close()}};var vv=(i,t,e,n,s)=>(r,o,a,c,l,h)=>{if(a!==null)try{let u=new a(r,c,h),d=new Map,p=null;if(Object.defineProperties(u,{channelCount:{get:()=>h.channelCount,set:()=>{throw i()}},channelCountMode:{get:()=>"explicit",set:()=>{throw i()}},onprocessorerror:{get:()=>p,set:f=>{typeof p=="function"&&u.removeEventListener("processorerror",p),p=typeof f=="function"?f:null,typeof p=="function"&&u.addEventListener("processorerror",p)}}}),u.addEventListener=(f=>(...x)=>{if(x[0]==="processorerror"){let g=typeof x[1]=="function"?x[1]:typeof x[1]=="object"&&x[1]!==null&&typeof x[1].handleEvent=="function"?x[1].handleEvent:null;if(g!==null){let m=d.get(x[1]);m!==void 0?x[1]=m:(x[1]=w=>{w.type==="error"?(Object.defineProperties(w,{type:{value:"processorerror"}}),g(w)):g(new ErrorEvent(x[0],{...w}))},d.set(g,x[1]))}}return f.call(u,"error",x[1],x[2]),f.call(u,...x)})(u.addEventListener),u.removeEventListener=(f=>(...x)=>{if(x[0]==="processorerror"){let g=d.get(x[1]);g!==void 0&&(d.delete(x[1]),x[1]=g)}return f.call(u,"error",x[1],x[2]),f.call(u,x[0],x[1],x[2])})(u.removeEventListener),h.numberOfOutputs!==0){let f=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return u.connect(f).connect(r.destination),s(u,()=>f.disconnect(),()=>f.connect(r.destination))}return u}catch(u){throw u.code===11?n():u}if(l===void 0)throw n();return yv(h),t(r,o,l,h)};var Ld=(i,t)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*t)))));var Sv=i=>new Promise((t,e)=>{let{port1:n,port2:s}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),s.close(),t(r)},n.onmessageerror=({data:r})=>{n.close(),s.close(),e(r)},s.postMessage(i)});var bv=async(i,t)=>{let e=await Sv(t);return new i(e)};var Mv=(i,t,e,n)=>{let s=Ll.get(i);s===void 0&&(s=new WeakMap,Ll.set(i,s));let r=bv(e,n);return s.set(t,r),r};var wv=(i,t,e,n,s,r,o,a,c,l,h,u,d)=>(p,f,x,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();let m=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(m.some(j=>j<1))throw c();if(m.length!==g.numberOfOutputs)throw t();if(g.channelCountMode!=="explicit")throw c();let w=g.channelCount*g.numberOfInputs,E=m.reduce((j,nt)=>j+nt,0),S=x.parameterDescriptors===void 0?0:x.parameterDescriptors.length;if(w+S>6||E>6)throw c();let y=new MessageChannel,b=[],M=[];for(let j=0;j<g.numberOfInputs;j+=1)b.push(o(p,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),M.push(s(p,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));let _=[];if(x.parameterDescriptors!==void 0)for(let{defaultValue:j,maxValue:nt,minValue:ct,name:ht}of x.parameterDescriptors){let _t=r(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[ht]!==void 0?g.parameterData[ht]:j===void 0?0:j});Object.defineProperties(_t.offset,{defaultValue:{get:()=>j===void 0?0:j},maxValue:{get:()=>nt===void 0?tn:nt},minValue:{get:()=>ct===void 0?rn:ct}}),_.push(_t)}let T=n(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,w+S)}),C=Ld(f,p.sampleRate),I=a(p,C,w+S,Math.max(1,E)),P=s(p,{channelCount:Math.max(1,E),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,E)}),V=[];for(let j=0;j<g.numberOfOutputs;j+=1)V.push(n(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:m[j]}));for(let j=0;j<g.numberOfInputs;j+=1){b[j].connect(M[j]);for(let nt=0;nt<g.channelCount;nt+=1)M[j].connect(T,nt,j*g.channelCount+nt)}let O=new Pa(x.parameterDescriptors===void 0?[]:x.parameterDescriptors.map(({name:j},nt)=>{let ct=_[nt];return ct.connect(T,0,w+nt),ct.start(0),[j,ct.offset]}));T.connect(I);let F=g.channelInterpretation,D=null,R=g.numberOfOutputs===0?[I]:V,G={get bufferSize(){return C},get channelCount(){return g.channelCount},set channelCount(j){throw e()},get channelCountMode(){return g.channelCountMode},set channelCountMode(j){throw e()},get channelInterpretation(){return F},set channelInterpretation(j){for(let nt of b)nt.channelInterpretation=j;F=j},get context(){return I.context},get inputs(){return b},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return D},set onprocessorerror(j){typeof D=="function"&&G.removeEventListener("processorerror",D),D=typeof j=="function"?j:null,typeof D=="function"&&G.addEventListener("processorerror",D)},get parameters(){return O},get port(){return y.port2},addEventListener(...j){return I.addEventListener(j[0],j[1],j[2])},connect:i.bind(null,R),disconnect:l.bind(null,R),dispatchEvent(...j){return I.dispatchEvent(j[0])},removeEventListener(...j){return I.removeEventListener(j[0],j[1],j[2])}},U=new Map;y.port1.addEventListener=(j=>(...nt)=>{if(nt[0]==="message"){let ct=typeof nt[1]=="function"?nt[1]:typeof nt[1]=="object"&&nt[1]!==null&&typeof nt[1].handleEvent=="function"?nt[1].handleEvent:null;if(ct!==null){let ht=U.get(nt[1]);ht!==void 0?nt[1]=ht:(nt[1]=_t=>{h(p.currentTime,p.sampleRate,()=>ct(_t))},U.set(ct,nt[1]))}}return j.call(y.port1,nt[0],nt[1],nt[2])})(y.port1.addEventListener),y.port1.removeEventListener=(j=>(...nt)=>{if(nt[0]==="message"){let ct=U.get(nt[1]);ct!==void 0&&(U.delete(nt[1]),nt[1]=ct)}return j.call(y.port1,nt[0],nt[1],nt[2])})(y.port1.removeEventListener);let W=null;Object.defineProperty(y.port1,"onmessage",{get:()=>W,set:j=>{typeof W=="function"&&y.port1.removeEventListener("message",W),W=typeof j=="function"?j:null,typeof W=="function"&&(y.port1.addEventListener("message",W),y.port1.start())}}),x.prototype.port=y.port1;let B=null;Mv(p,G,x,g).then(j=>B=j);let xt=Oa(g.numberOfInputs,g.channelCount),Yt=Oa(g.numberOfOutputs,m),Mt=x.parameterDescriptors===void 0?[]:x.parameterDescriptors.reduce((j,{name:nt})=>({...j,[nt]:new Float32Array(128)}),{}),Ot=!0,J=()=>{g.numberOfOutputs>0&&I.disconnect(P);for(let j=0,nt=0;j<g.numberOfOutputs;j+=1){let ct=V[j];for(let ht=0;ht<m[j];ht+=1)P.disconnect(ct,nt+ht,ht);nt+=m[j]}},X=new Map;I.onaudioprocess=({inputBuffer:j,outputBuffer:nt})=>{if(B!==null){let ct=u(G);for(let ht=0;ht<C;ht+=128){for(let _t=0;_t<g.numberOfInputs;_t+=1)for(let St=0;St<g.channelCount;St+=1)Da(j,xt[_t],St,St,ht);x.parameterDescriptors!==void 0&&x.parameterDescriptors.forEach(({name:_t},St)=>{Da(j,Mt,_t,w+St,ht)});for(let _t=0;_t<g.numberOfInputs;_t+=1)for(let St=0;St<m[_t];St+=1)Yt[_t][St].byteLength===0&&(Yt[_t][St]=new Float32Array(128));try{let _t=xt.map((Ut,jt)=>{if(ct[jt].size>0)return X.set(jt,C/128),Ut;let Wt=X.get(jt);return Wt===void 0?[]:(Ut.every(ne=>ne.every(N=>N===0))&&(Wt===1?X.delete(jt):X.set(jt,Wt-1)),Ut)});Ot=h(p.currentTime+ht/p.sampleRate,p.sampleRate,()=>B.process(_t,Yt,Mt));for(let Ut=0,jt=0;Ut<g.numberOfOutputs;Ut+=1){for(let z=0;z<m[Ut];z+=1)Dd(nt,Yt[Ut],z,jt+z,ht);jt+=m[Ut]}}catch(_t){Ot=!1,G.dispatchEvent(new ErrorEvent("processorerror",{colno:_t.colno,filename:_t.filename,lineno:_t.lineno,message:_t.message}))}if(!Ot){for(let _t=0;_t<g.numberOfInputs;_t+=1){b[_t].disconnect(M[_t]);for(let St=0;St<g.channelCount;St+=1)M[ht].disconnect(T,St,_t*g.channelCount+St)}if(x.parameterDescriptors!==void 0){let _t=x.parameterDescriptors.length;for(let St=0;St<_t;St+=1){let Ut=_[St];Ut.disconnect(T,0,w+St),Ut.stop()}}T.disconnect(I),I.onaudioprocess=null,Q?J():Lt();break}}}};let Q=!1,gt=o(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),ft=()=>I.connect(gt).connect(p.destination),Lt=()=>{I.disconnect(gt),gt.disconnect()},he=()=>{if(Ot){Lt(),g.numberOfOutputs>0&&I.connect(P);for(let j=0,nt=0;j<g.numberOfOutputs;j+=1){let ct=V[j];for(let ht=0;ht<m[j];ht+=1)P.connect(ct,nt+ht,ht);nt+=m[j]}}Q=!0},rt=()=>{Ot&&(ft(),J()),Q=!1};return ft(),d(G,he,rt)};var Jf=(i,t)=>{let e=i.createBiquadFilter();return fe(e,t),be(e,t,"Q"),be(e,t,"detune"),be(e,t,"frequency"),be(e,t,"gain"),ve(e,t,"type"),e};var Tv=(i,t)=>(e,n)=>{let s=e.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&t(e,s),fe(s,n),s};var Av=i=>{let t=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>t,set:e=>{if(e!==t)throw He()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:e=>{if(e!=="explicit")throw He()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:e=>{if(e!=="discrete")throw He()}})};var ka=(i,t)=>{let e=i.createChannelSplitter(t.numberOfOutputs);return fe(e,t),Av(e),e};var Ev=(i,t,e,n,s)=>(r,o)=>{if(r.createConstantSource===void 0)return e(r,o);let a=r.createConstantSource();return fe(a,o),be(a,o,"offset"),t(n,()=>n(r))||La(a),t(s,()=>s(r))||Ua(a),i(r,a),a};var Li=(i,t)=>(i.connect=t.connect.bind(t),i.disconnect=t.disconnect.bind(t),i);var Cv=(i,t,e,n)=>(s,{offset:r,...o})=>{let a=s.createBuffer(1,2,44100),c=t(s,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=e(s,{...o,gain:r}),h=a.getChannelData(0);h[0]=1,h[1]=1,c.buffer=a,c.loop=!0;let u={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(f){l.channelCount=f},get channelCountMode(){return l.channelCountMode},set channelCountMode(f){l.channelCountMode=f},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(f){l.channelInterpretation=f},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(f){c.onended=f},addEventListener(...f){return c.addEventListener(f[0],f[1],f[2])},dispatchEvent(...f){return c.dispatchEvent(f[0])},removeEventListener(...f){return c.removeEventListener(f[0],f[1],f[2])},start(f=0){c.start.call(c,f)},stop(f=0){c.stop.call(c,f)}},d=()=>c.connect(l),p=()=>c.disconnect(l);return i(s,c),n(Li(u,l),d,p)};var Rv=(i,t)=>(e,n)=>{let s=e.createConvolver();if(fe(s,n),n.disableNormalization===s.normalize&&(s.normalize=!n.disableNormalization),ve(s,n,"buffer"),n.channelCount>2||(t(s,"channelCount",r=>()=>r.call(s),r=>o=>{if(o>2)throw i();return r.call(s,o)}),n.channelCountMode==="max"))throw i();return t(s,"channelCountMode",r=>()=>r.call(s),r=>o=>{if(o==="max")throw i();return r.call(s,o)}),s};var Kf=(i,t)=>{let e=i.createDelay(t.maxDelayTime);return fe(e,t),be(e,t,"delayTime"),e};var Iv=i=>(t,e)=>{let n=t.createDynamicsCompressor();if(fe(n,e),e.channelCount>2||e.channelCountMode==="max")throw i();return be(n,e,"attack"),be(n,e,"knee"),be(n,e,"ratio"),be(n,e,"release"),be(n,e,"threshold"),n};var ti=(i,t)=>{let e=i.createGain();return fe(e,t),be(e,t,"gain"),e};var Nv=i=>(t,e,n)=>{if(t.createIIRFilter===void 0)return i(t,e,n);let s=t.createIIRFilter(n.feedforward,n.feedback);return fe(s,n),s};function mR(i,t){let e=t[0]*t[0]+t[1]*t[1];return[(i[0]*t[0]+i[1]*t[1])/e,(i[1]*t[0]-i[0]*t[1])/e]}function gR(i,t){return[i[0]*t[0]-i[1]*t[1],i[0]*t[1]+i[1]*t[0]]}function Pv(i,t){let e=[0,0];for(let n=i.length-1;n>=0;n-=1)e=gR(e,t),e[0]+=i[n];return e}var Dv=(i,t,e,n)=>(s,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:h})=>{let u=Ld(r,s.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),p=h instanceof Float64Array?h:new Float64Array(h),f=d.length,x=p.length,g=Math.min(f,x);if(f===0||f>20)throw n();if(d[0]===0)throw t();if(x===0||x>20)throw n();if(p[0]===0)throw t();if(d[0]!==1){for(let _=0;_<x;_+=1)p[_]/=d[0];for(let _=1;_<f;_+=1)d[_]/=d[0]}let m=e(s,u,o,o);m.channelCount=o,m.channelCountMode=a,m.channelInterpretation=c;let w=32,E=[],S=[],y=[];for(let _=0;_<o;_+=1){E.push(0);let T=new Float32Array(w),C=new Float32Array(w);T.fill(0),C.fill(0),S.push(T),y.push(C)}m.onaudioprocess=_=>{let T=_.inputBuffer,C=_.outputBuffer,I=T.numberOfChannels;for(let P=0;P<I;P+=1){let V=T.getChannelData(P),O=C.getChannelData(P);E[P]=Fd(d,f,p,x,g,S[P],y[P],E[P],w,V,O)}};let b=s.sampleRate/2;return Li({get bufferSize(){return u},get channelCount(){return m.channelCount},set channelCount(_){m.channelCount=_},get channelCountMode(){return m.channelCountMode},set channelCountMode(_){m.channelCountMode=_},get channelInterpretation(){return m.channelInterpretation},set channelInterpretation(_){m.channelInterpretation=_},get context(){return m.context},get inputs(){return[m]},get numberOfInputs(){return m.numberOfInputs},get numberOfOutputs(){return m.numberOfOutputs},addEventListener(..._){return m.addEventListener(_[0],_[1],_[2])},dispatchEvent(..._){return m.dispatchEvent(_[0])},getFrequencyResponse(_,T,C){if(_.length!==T.length||T.length!==C.length)throw i();let I=_.length;for(let P=0;P<I;P+=1){let V=-Math.PI*(_[P]/b),O=[Math.cos(V),Math.sin(V)],F=Pv(p,O),D=Pv(d,O),R=mR(F,D);T[P]=Math.sqrt(R[0]*R[0]+R[1]*R[1]),C[P]=Math.atan2(R[1],R[0])}},removeEventListener(..._){return m.removeEventListener(_[0],_[1],_[2])}},m)};var Ov=(i,t)=>i.createMediaElementSource(t.mediaElement);var Fv=(i,t)=>{let e=i.createMediaStreamDestination();return fe(e,t),e.numberOfOutputs===1&&Object.defineProperty(e,"numberOfOutputs",{get:()=>0}),e};var Lv=(i,{mediaStream:t})=>{let e=t.getAudioTracks();e.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);let n=e.slice(0,1),s=i.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(s,"mediaStream",{value:t}),s};var Uv=(i,t)=>(e,{mediaStreamTrack:n})=>{if(typeof e.createMediaStreamTrackSource=="function")return e.createMediaStreamTrackSource(n);let s=new MediaStream([n]),r=e.createMediaStreamSource(s);if(n.kind!=="audio")throw i();if(t(e))throw new TypeError;return r};var kv=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null;var Bv=(i,t,e,n,s,r)=>(o,a)=>{let c=o.createOscillator();return fe(c,a),be(c,a,"detune"),be(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):ve(c,a,"type"),t(e,()=>e(o))||La(c),t(n,()=>n(o))||r(c,o),t(s,()=>s(o))||Ua(c),i(o,c),c};var Vv=i=>(t,e)=>{let n=t.createPanner();return n.orientationX===void 0?i(t,e):(fe(n,e),be(n,e,"orientationX"),be(n,e,"orientationY"),be(n,e,"orientationZ"),be(n,e,"positionX"),be(n,e,"positionY"),be(n,e,"positionZ"),ve(n,e,"coneInnerAngle"),ve(n,e,"coneOuterAngle"),ve(n,e,"coneOuterGain"),ve(n,e,"distanceModel"),ve(n,e,"maxDistance"),ve(n,e,"panningModel"),ve(n,e,"refDistance"),ve(n,e,"rolloffFactor"),n)};var zv=(i,t,e,n,s,r,o,a,c,l)=>(h,{coneInnerAngle:u,coneOuterAngle:d,coneOuterGain:p,distanceModel:f,maxDistance:x,orientationX:g,orientationY:m,orientationZ:w,panningModel:E,positionX:S,positionY:y,positionZ:b,refDistance:M,rolloffFactor:_,...T})=>{let C=h.createPanner();if(T.channelCount>2||T.channelCountMode==="max")throw o();fe(C,T);let I={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},P=e(h,{...I,channelInterpretation:"speakers",numberOfInputs:6}),V=n(h,{...T,gain:1}),O=n(h,{...I,gain:1}),F=n(h,{...I,gain:0}),D=n(h,{...I,gain:0}),R=n(h,{...I,gain:0}),G=n(h,{...I,gain:0}),U=n(h,{...I,gain:0}),W=s(h,256,6,1),B=r(h,{...I,curve:new Float32Array([1,1]),oversample:"none"}),pt=[g,m,w],xt=[S,y,b],Yt=new Float32Array(1);W.onaudioprocess=({inputBuffer:X})=>{let Q=[c(X,Yt,0),c(X,Yt,1),c(X,Yt,2)];Q.some((ft,Lt)=>ft!==pt[Lt])&&(C.setOrientation(...Q),pt=Q);let gt=[c(X,Yt,3),c(X,Yt,4),c(X,Yt,5)];gt.some((ft,Lt)=>ft!==xt[Lt])&&(C.setPosition(...gt),xt=gt)},Object.defineProperty(F.gain,"defaultValue",{get:()=>0}),Object.defineProperty(D.gain,"defaultValue",{get:()=>0}),Object.defineProperty(R.gain,"defaultValue",{get:()=>0}),Object.defineProperty(G.gain,"defaultValue",{get:()=>0}),Object.defineProperty(U.gain,"defaultValue",{get:()=>0});let Mt={get bufferSize(){},get channelCount(){return C.channelCount},set channelCount(X){if(X>2)throw o();V.channelCount=X,C.channelCount=X},get channelCountMode(){return C.channelCountMode},set channelCountMode(X){if(X==="max")throw o();V.channelCountMode=X,C.channelCountMode=X},get channelInterpretation(){return C.channelInterpretation},set channelInterpretation(X){V.channelInterpretation=X,C.channelInterpretation=X},get coneInnerAngle(){return C.coneInnerAngle},set coneInnerAngle(X){C.coneInnerAngle=X},get coneOuterAngle(){return C.coneOuterAngle},set coneOuterAngle(X){C.coneOuterAngle=X},get coneOuterGain(){return C.coneOuterGain},set coneOuterGain(X){if(X<0||X>1)throw t();C.coneOuterGain=X},get context(){return C.context},get distanceModel(){return C.distanceModel},set distanceModel(X){C.distanceModel=X},get inputs(){return[V]},get maxDistance(){return C.maxDistance},set maxDistance(X){if(X<0)throw new RangeError;C.maxDistance=X},get numberOfInputs(){return C.numberOfInputs},get numberOfOutputs(){return C.numberOfOutputs},get orientationX(){return O.gain},get orientationY(){return F.gain},get orientationZ(){return D.gain},get panningModel(){return C.panningModel},set panningModel(X){C.panningModel=X},get positionX(){return R.gain},get positionY(){return G.gain},get positionZ(){return U.gain},get refDistance(){return C.refDistance},set refDistance(X){if(X<0)throw new RangeError;C.refDistance=X},get rolloffFactor(){return C.rolloffFactor},set rolloffFactor(X){if(X<0)throw new RangeError;C.rolloffFactor=X},addEventListener(...X){return V.addEventListener(X[0],X[1],X[2])},dispatchEvent(...X){return V.dispatchEvent(X[0])},removeEventListener(...X){return V.removeEventListener(X[0],X[1],X[2])}};u!==Mt.coneInnerAngle&&(Mt.coneInnerAngle=u),d!==Mt.coneOuterAngle&&(Mt.coneOuterAngle=d),p!==Mt.coneOuterGain&&(Mt.coneOuterGain=p),f!==Mt.distanceModel&&(Mt.distanceModel=f),x!==Mt.maxDistance&&(Mt.maxDistance=x),g!==Mt.orientationX.value&&(Mt.orientationX.value=g),m!==Mt.orientationY.value&&(Mt.orientationY.value=m),w!==Mt.orientationZ.value&&(Mt.orientationZ.value=w),E!==Mt.panningModel&&(Mt.panningModel=E),S!==Mt.positionX.value&&(Mt.positionX.value=S),y!==Mt.positionY.value&&(Mt.positionY.value=y),b!==Mt.positionZ.value&&(Mt.positionZ.value=b),M!==Mt.refDistance&&(Mt.refDistance=M),_!==Mt.rolloffFactor&&(Mt.rolloffFactor=_),(pt[0]!==1||pt[1]!==0||pt[2]!==0)&&C.setOrientation(...pt),(xt[0]!==0||xt[1]!==0||xt[2]!==0)&&C.setPosition(...xt);let Ot=()=>{V.connect(C),i(V,B,0,0),B.connect(O).connect(P,0,0),B.connect(F).connect(P,0,1),B.connect(D).connect(P,0,2),B.connect(R).connect(P,0,3),B.connect(G).connect(P,0,4),B.connect(U).connect(P,0,5),P.connect(W).connect(h.destination)},J=()=>{V.disconnect(C),a(V,B,0,0),B.disconnect(O),O.disconnect(P),B.disconnect(F),F.disconnect(P),B.disconnect(D),D.disconnect(P),B.disconnect(R),R.disconnect(P),B.disconnect(G),G.disconnect(P),B.disconnect(U),U.disconnect(P),P.disconnect(W),W.disconnect(h.destination)};return l(Li(Mt,C),Ot,J)};var Gv=i=>(t,{disableNormalization:e,imag:n,real:s})=>{let r=n instanceof Float32Array?n:new Float32Array(n),o=s instanceof Float32Array?s:new Float32Array(s),a=t.createPeriodicWave(o,r,{disableNormalization:e});if(Array.from(n).length<2)throw i();return a};var Ba=(i,t,e,n)=>i.createScriptProcessor(t,e,n);var Wv=(i,t)=>(e,n)=>{let s=n.channelCountMode;if(s==="clamped-max")throw t();if(e.createStereoPanner===void 0)return i(e,n);let r=e.createStereoPanner();return fe(r,n),be(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>s,set:o=>{if(o!==s)throw t()}}),r};var Hv=(i,t,e,n,s,r)=>{let a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},h={...l,oversample:"none"},u=(f,x,g,m)=>{let w=new Float32Array(16385),E=new Float32Array(16385);for(let T=0;T<16385;T+=1){let C=T/16384*c;w[T]=Math.cos(C),E[T]=Math.sin(C)}let S=e(f,{...l,gain:0}),y=n(f,{...h,curve:w}),b=n(f,{...h,curve:a}),M=e(f,{...l,gain:0}),_=n(f,{...h,curve:E});return{connectGraph(){x.connect(S),x.connect(b.inputs===void 0?b:b.inputs[0]),x.connect(M),b.connect(g),g.connect(y.inputs===void 0?y:y.inputs[0]),g.connect(_.inputs===void 0?_:_.inputs[0]),y.connect(S.gain),_.connect(M.gain),S.connect(m,0,0),M.connect(m,0,1)},disconnectGraph(){x.disconnect(S),x.disconnect(b.inputs===void 0?b:b.inputs[0]),x.disconnect(M),b.disconnect(g),g.disconnect(y.inputs===void 0?y:y.inputs[0]),g.disconnect(_.inputs===void 0?_:_.inputs[0]),y.disconnect(S.gain),_.disconnect(M.gain),S.disconnect(m,0,0),M.disconnect(m,0,1)}}},d=(f,x,g,m)=>{let w=new Float32Array(16385),E=new Float32Array(16385),S=new Float32Array(16385),y=new Float32Array(16385),b=Math.floor(16385/2);for(let R=0;R<16385;R+=1)if(R>b){let G=(R-b)/(16384-b)*c;w[R]=Math.cos(G),E[R]=Math.sin(G),S[R]=0,y[R]=1}else{let G=R/(16384-b)*c;w[R]=1,E[R]=0,S[R]=Math.cos(G),y[R]=Math.sin(G)}let M=t(f,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),_=e(f,{...l,gain:0}),T=n(f,{...h,curve:w}),C=e(f,{...l,gain:0}),I=n(f,{...h,curve:E}),P=n(f,{...h,curve:a}),V=e(f,{...l,gain:0}),O=n(f,{...h,curve:S}),F=e(f,{...l,gain:0}),D=n(f,{...h,curve:y});return{connectGraph(){x.connect(M),x.connect(P.inputs===void 0?P:P.inputs[0]),M.connect(_,0),M.connect(C,0),M.connect(V,1),M.connect(F,1),P.connect(g),g.connect(T.inputs===void 0?T:T.inputs[0]),g.connect(I.inputs===void 0?I:I.inputs[0]),g.connect(O.inputs===void 0?O:O.inputs[0]),g.connect(D.inputs===void 0?D:D.inputs[0]),T.connect(_.gain),I.connect(C.gain),O.connect(V.gain),D.connect(F.gain),_.connect(m,0,0),V.connect(m,0,0),C.connect(m,0,1),F.connect(m,0,1)},disconnectGraph(){x.disconnect(M),x.disconnect(P.inputs===void 0?P:P.inputs[0]),M.disconnect(_,0),M.disconnect(C,0),M.disconnect(V,1),M.disconnect(F,1),P.disconnect(g),g.disconnect(T.inputs===void 0?T:T.inputs[0]),g.disconnect(I.inputs===void 0?I:I.inputs[0]),g.disconnect(O.inputs===void 0?O:O.inputs[0]),g.disconnect(D.inputs===void 0?D:D.inputs[0]),T.disconnect(_.gain),I.disconnect(C.gain),O.disconnect(V.gain),D.disconnect(F.gain),_.disconnect(m,0,0),V.disconnect(m,0,0),C.disconnect(m,0,1),F.disconnect(m,0,1)}}},p=(f,x,g,m,w)=>{if(x===1)return u(f,g,m,w);if(x===2)return d(f,g,m,w);throw s()};return(f,{channelCount:x,channelCountMode:g,pan:m,...w})=>{if(g==="max")throw s();let E=i(f,{...w,channelCount:1,channelCountMode:g,numberOfInputs:2}),S=e(f,{...w,channelCount:x,channelCountMode:g,gain:1}),y=e(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:m}),{connectGraph:b,disconnectGraph:M}=p(f,x,S,y,E);Object.defineProperty(y.gain,"defaultValue",{get:()=>0}),Object.defineProperty(y.gain,"maxValue",{get:()=>1}),Object.defineProperty(y.gain,"minValue",{get:()=>-1});let _={get bufferSize(){},get channelCount(){return S.channelCount},set channelCount(P){S.channelCount!==P&&(T&&M(),{connectGraph:b,disconnectGraph:M}=p(f,P,S,y,E),T&&b()),S.channelCount=P},get channelCountMode(){return S.channelCountMode},set channelCountMode(P){if(P==="clamped-max"||P==="max")throw s();S.channelCountMode=P},get channelInterpretation(){return S.channelInterpretation},set channelInterpretation(P){S.channelInterpretation=P},get context(){return S.context},get inputs(){return[S]},get numberOfInputs(){return S.numberOfInputs},get numberOfOutputs(){return S.numberOfOutputs},get pan(){return y.gain},addEventListener(...P){return S.addEventListener(P[0],P[1],P[2])},dispatchEvent(...P){return S.dispatchEvent(P[0])},removeEventListener(...P){return S.removeEventListener(P[0],P[1],P[2])}},T=!1,C=()=>{b(),T=!0},I=()=>{M(),T=!1};return r(Li(_,E),C,I)}};var qv=(i,t,e,n,s,r,o)=>(a,c)=>{let l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return e(a,c);fe(l,c);let h=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(h!==null&&h.length<2)throw t();ve(l,{curve:h},"curve"),ve(l,c,"oversample");let u=null,d=!1;return o(l,"curve",x=>()=>x.call(l),x=>g=>(x.call(l,g),d&&(n(g)&&u===null?u=i(a,l):!n(g)&&u!==null&&(u(),u=null)),g)),s(l,()=>{d=!0,n(l.curve)&&(u=i(a,l))},()=>{d=!1,u!==null&&(u(),u=null)})};var Xv=(i,t,e,n,s)=>(r,{curve:o,oversample:a,...c})=>{let l=r.createWaveShaper(),h=r.createWaveShaper();fe(l,c),fe(h,c);let u=e(r,{...c,gain:1}),d=e(r,{...c,gain:-1}),p=e(r,{...c,gain:1}),f=e(r,{...c,gain:-1}),x=null,g=!1,m=null,w={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(y){u.channelCount=y,d.channelCount=y,l.channelCount=y,p.channelCount=y,h.channelCount=y,f.channelCount=y},get channelCountMode(){return l.channelCountMode},set channelCountMode(y){u.channelCountMode=y,d.channelCountMode=y,l.channelCountMode=y,p.channelCountMode=y,h.channelCountMode=y,f.channelCountMode=y},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(y){u.channelInterpretation=y,d.channelInterpretation=y,l.channelInterpretation=y,p.channelInterpretation=y,h.channelInterpretation=y,f.channelInterpretation=y},get context(){return l.context},get curve(){return m},set curve(y){if(y!==null&&y.length<2)throw t();if(y===null)l.curve=y,h.curve=y;else{let b=y.length,M=new Float32Array(b+2-b%2),_=new Float32Array(b+2-b%2);M[0]=y[0],_[0]=-y[b-1];let T=Math.ceil((b+1)/2),C=(b+1)/2-1;for(let I=1;I<T;I+=1){let P=I/T*C,V=Math.floor(P),O=Math.ceil(P);M[I]=V===O?y[V]:(1-(P-V))*y[V]+(1-(O-P))*y[O],_[I]=V===O?-y[b-1-V]:-((1-(P-V))*y[b-1-V])-(1-(O-P))*y[b-1-O]}M[T]=b%2===1?y[T-1]:(y[T-2]+y[T-1])/2,l.curve=M,h.curve=_}m=y,g&&(n(m)&&x===null?x=i(r,u):x!==null&&(x(),x=null))},get inputs(){return[u]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(y){l.oversample=y,h.oversample=y},addEventListener(...y){return u.addEventListener(y[0],y[1],y[2])},dispatchEvent(...y){return u.dispatchEvent(y[0])},removeEventListener(...y){return u.removeEventListener(y[0],y[1],y[2])}};o!==null&&(w.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==w.oversample&&(w.oversample=a);let E=()=>{u.connect(l).connect(p),u.connect(d).connect(h).connect(f).connect(p),g=!0,n(m)&&(x=i(r,u))},S=()=>{u.disconnect(l),l.disconnect(p),u.disconnect(d),d.disconnect(h),h.disconnect(f),f.disconnect(p),g=!1,x!==null&&(x(),x=null)};return s(Li(w,p),E,S)};var Pn=()=>new DOMException("","NotSupportedError");var _R={numberOfChannels:1},Yv=(i,t,e,n,s)=>class extends i{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");let{length:h,numberOfChannels:u,sampleRate:d}={..._R,...l},p=n(u,h,d);t(Qi,()=>Qi(p))||p.addEventListener("statechange",(()=>{let f=0,x=g=>{this._state==="running"&&(f>0?(p.removeEventListener("statechange",x),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):f+=1)};return x})()),super(p,u),this._length=h,this._nativeOfflineAudioContext=p,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(e()):(this._state="running",s(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,wr(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}};var xR={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},jv=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){let h=s(c),u={...xR,...l},d=e(h,u),p=r(h),f=p?n():null,x=c.sampleRate/2;super(c,!1,d,f),this._detune=t(this,p,d.detune,153600,-153600),this._frequency=t(this,p,d.frequency,x,-x),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=f,this._oscillatorNodeRenderer!==null&&u.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=u.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){let l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;let h=this._nativeOscillatorNode.onended;this._onended=h!==null&&h===l?c:h}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){Ji(this);let l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),Qn(this)&&As(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}};var Zv=(i,t,e,n,s)=>()=>{let r=new WeakMap,o=null,a=null,c=null,l=async(h,u)=>{let d=e(h),p=ye(d,u);if(!p){let f={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=t(u,f),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(u,d),p?(await i(u,h.detune,d.detune),await i(u,h.frequency,d.frequency)):(await n(u,h.detune,d.detune),await n(u,h.frequency,d.frequency)),await s(h,u,d),d};return{set periodicWave(h){o=h},set start(h){a=h},set stop(h){c=h},render(h,u){let d=r.get(u);return d!==void 0?Promise.resolve(d):l(h,u)}}};var yR={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},$v=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){let h=s(c),u={...yR,...l},d=e(h,u),p=r(h),f=p?n():null;super(c,!1,d,f),this._nativePannerNode=d,this._orientationX=t(this,p,d.orientationX,tn,rn),this._orientationY=t(this,p,d.orientationY,tn,rn),this._orientationZ=t(this,p,d.orientationZ,tn,rn),this._positionX=t(this,p,d.positionX,tn,rn),this._positionY=t(this,p,d.positionY,tn,rn),this._positionZ=t(this,p,d.positionZ,tn,rn),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}};var Jv=(i,t,e,n,s,r,o,a,c,l)=>()=>{let h=new WeakMap,u=null,d=async(p,f)=>{let x=null,g=r(p),m={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},w={...m,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},E=ye(g,f);if("bufferSize"in g)x=n(f,{...m,gain:1});else if(!E){let S={...w,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=s(f,S)}if(h.set(f,x===null?g:x),x!==null){if(u===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");let I=new o(6,p.context.length,f.sampleRate),P=t(I,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});P.connect(I.destination),u=(async()=>{let V=await Promise.all([p.orientationX,p.orientationY,p.orientationZ,p.positionX,p.positionY,p.positionZ].map(async(O,F)=>{let D=e(I,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:F===0?1:0});return await a(I,O,D.offset),D}));for(let O=0;O<6;O+=1)V[O].connect(P,0,O),V[O].start(0);return l(I)})()}let S=await u,y=n(f,{...m,gain:1});await c(p,f,y);let b=[];for(let I=0;I<S.numberOfChannels;I+=1)b.push(S.getChannelData(I));let M=[b[0][0],b[1][0],b[2][0]],_=[b[3][0],b[4][0],b[5][0]],T=n(f,{...m,gain:1}),C=s(f,{...w,orientationX:M[0],orientationY:M[1],orientationZ:M[2],positionX:_[0],positionY:_[1],positionZ:_[2]});y.connect(T).connect(C.inputs[0]),C.connect(x);for(let I=128;I<S.length;I+=128){let P=[b[0][I],b[1][I],b[2][I]],V=[b[3][I],b[4][I],b[5][I]];if(P.some((O,F)=>O!==M[F])||V.some((O,F)=>O!==_[F])){M=P,_=V;let O=I/f.sampleRate;T.gain.setValueAtTime(0,O),T=n(f,{...m,gain:0}),C=s(f,{...w,orientationX:M[0],orientationY:M[1],orientationZ:M[2],positionX:_[0],positionY:_[1],positionZ:_[2]}),T.gain.setValueAtTime(1,O),y.connect(T).connect(C.inputs[0]),C.connect(x)}}return x}return E?(await i(f,p.orientationX,g.orientationX),await i(f,p.orientationY,g.orientationY),await i(f,p.orientationZ,g.orientationZ),await i(f,p.positionX,g.positionX),await i(f,p.positionY,g.positionY),await i(f,p.positionZ,g.positionZ)):(await a(f,p.orientationX,g.orientationX),await a(f,p.orientationY,g.orientationY),await a(f,p.orientationZ,g.orientationZ),await a(f,p.positionX,g.positionX),await a(f,p.positionY,g.positionY),await a(f,p.positionZ,g.positionZ)),Fi(g)?await c(p,f,g.inputs[0]):await c(p,f,g),g};return{render(p,f){let x=h.get(f);return x!==void 0?Promise.resolve(x):d(p,f)}}};var vR={disableNormalization:!1},Kv=(i,t,e,n)=>class Qv{constructor(r,o){let a=t(r),c=n({...vR,...o}),l=i(a,c);return e.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===Qv.prototype||e.has(r)}};var tS=(i,t)=>(e,n,s)=>(i(n).replay(s),t(n,e,s));var eS=(i,t,e)=>async(n,s,r)=>{let o=i(n);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,h])=>{let d=await t(l).render(l,s),p=n.context.destination;!e(l)&&(n!==p||!e(n))&&d.connect(r,h,c)})).reduce((a,c)=>[...a,...c],[]))};var nS=(i,t,e)=>async(n,s,r)=>{let o=t(n);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{let h=await i(a).render(a,s);e(a)||h.connect(r,c)}))};var iS=(i,t,e,n)=>s=>i(Qi,()=>Qi(s))?Promise.resolve(i(n,n)).then(r=>{if(!r){let o=e(s,512,0,1);s.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>s.currentTime,o.connect(s.destination)}return s.startRendering()}):new Promise(r=>{let o=t(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});s.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(s.destination),s.startRendering()});var sS=i=>(t,e)=>{i.set(t,e)};var rS=i=>(t,e)=>i.set(t,e);var oS=(i,t,e,n,s,r,o,a)=>(c,l)=>e(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(h=>e(h).render(h,l)))).then(()=>s(l)).then(h=>(typeof h.copyFromChannel!="function"?(o(h),Ca(h)):t(r,()=>r(h))||a(h),i.add(h),h));var SR={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},aS=(i,t,e,n,s,r)=>class extends i{constructor(a,c){let l=s(a),h={...SR,...c},u=e(l,h),d=r(l),p=d?n():null;super(a,!1,u,p),this._pan=t(this,d,u.pan)}get pan(){return this._pan}};var cS=(i,t,e,n,s)=>()=>{let r=new WeakMap,o=async(a,c)=>{let l=e(a),h=ye(l,c);if(!h){let u={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=t(c,u)}return r.set(c,l),h?await i(c,a.pan,l.pan):await n(c,a.pan,l.pan),Fi(l)?await s(a,c,l.inputs[0]):await s(a,c,l),l};return{render(a,c){let l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}};var lS=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0};var hS=i=>()=>{if(i===null)return!1;let e=new i(1,1,44100).createBuffer(1,1,44100);if(e.copyToChannel===void 0)return!0;let n=new Float32Array(2);try{e.copyFromChannel(n,0,0)}catch{return!1}return!0};var uS=i=>()=>{if(i===null)return!1;if(i.prototype!==void 0&&i.prototype.close!==void 0)return!0;let t=new i,e=t.close!==void 0;try{t.close()}catch{}return e};var dS=i=>()=>{if(i===null)return Promise.resolve(!1);let t=new i(1,1,44100);return new Promise(e=>{let n=!0,s=o=>{n&&(n=!1,t.startRendering(),e(o instanceof TypeError))},r;try{r=t.decodeAudioData(null,()=>{},s)}catch(o){s(o)}r!==void 0&&r.catch(s)})};var pS=i=>()=>{if(i===null)return!1;let t;try{t=new i({latencyHint:"balanced"})}catch{return!1}return t.close(),!0};var fS=i=>()=>{if(i===null)return!1;let e=new i(1,1,44100).createGain(),n=e.connect(e)===e;return e.disconnect(e),n};var mS=(i,t)=>async()=>{if(i===null)return!0;if(t===null)return!1;let e=new Blob(['let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new MessageChannel,s=new t(1,128,44100),r=URL.createObjectURL(e),o=!1;try{await s.audioWorklet.addModule(r);let a=new i(s,"a",{numberOfOutputs:0}),c=s.createOscillator();await new Promise(l=>{a.port.onmessage=()=>l(),a.port.postMessage(n.port2,[n.port2])}),a.port.onmessage=()=>o=!0,c.connect(a),c.start(0),await s.startRendering(),o=await new Promise(l=>{n.port1.onmessage=({data:h})=>l(h===1),n.port1.postMessage(0)})}catch{}finally{n.port1.close(),URL.revokeObjectURL(r)}return o};var gS=(i,t)=>async()=>{if(i===null)return!0;if(t===null)return!1;let e=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new t(1,128,44100),s=URL.createObjectURL(e),r=!1,o=!1;try{await n.audioWorklet.addModule(s);let a=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(s)}return r&&!o};var _S=i=>()=>{if(i===null)return!1;let e=new i(1,1,44100).createChannelMerger();if(e.channelCountMode==="max")return!0;try{e.channelCount=2}catch{return!0}return!1};var xS=i=>()=>{if(i===null)return!1;let t=new i(1,1,44100);return t.createConstantSource===void 0?!0:t.createConstantSource().offset.maxValue!==Number.POSITIVE_INFINITY};var yS=i=>()=>{if(i===null)return!1;let t=new i(1,1,44100),e=t.createConvolver();e.buffer=t.createBuffer(1,1,t.sampleRate);try{e.buffer=t.createBuffer(1,1,t.sampleRate)}catch{return!1}return!0};var vS=i=>()=>{if(i===null)return!1;let e=new i(1,1,44100).createConvolver();try{e.channelCount=1}catch{return!1}return!0};var SS=i=>()=>i!==null&&i.hasOwnProperty("isSecureContext");var bS=i=>()=>{if(i===null)return!1;let t=new i;try{return t.createMediaStreamSource(new MediaStream),!1}catch{return!0}finally{t.close()}};var MS=(i,t)=>()=>{if(t===null)return Promise.resolve(!1);let e=new t(1,1,44100),n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(s=>{e.oncomplete=()=>{n.disconnect(),s(e.currentTime!==0)},e.startRendering()})};var wS=i=>()=>{if(i===null)return Promise.resolve(!1);let t=new i(1,1,44100);if(t.createStereoPanner===void 0||t.createConstantSource===void 0)return Promise.resolve(!0);let e=t.createConstantSource(),n=t.createStereoPanner();return e.channelCount=1,e.offset.value=1,n.channelCount=1,e.start(),e.connect(n).connect(t.destination),t.startRendering().then(s=>s.getChannelData(0)[0]!==1)};var Qf=()=>new DOMException("","UnknownError");var bR={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},TS=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){let h=s(c),u={...bR,...l},d=e(h,u),f=r(h)?n():null;super(c,!0,d,f),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw t();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}};var AS=(i,t,e)=>()=>{let n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!ye(a,o)){let l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=i(o,l)}return n.set(o,a),Fi(a)?await e(r,o,a.inputs[0]):await e(r,o,a),a};return{render(r,o){let a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}};var ES=()=>typeof window>"u"?null:window;var CS=(i,t)=>e=>{e.copyFromChannel=(n,s,r=0)=>{let o=i(r),a=i(s);if(a>=e.numberOfChannels)throw t();let c=e.length,l=e.getChannelData(a),h=n.length;for(let u=o<0?-o:0;u+o<c&&u<h;u+=1)n[u]=l[u+o]},e.copyToChannel=(n,s,r=0)=>{let o=i(r),a=i(s);if(a>=e.numberOfChannels)throw t();let c=e.length,l=e.getChannelData(a),h=n.length;for(let u=o<0?-o:0;u+o<c&&u<h;u+=1)l[u+o]=n[u]}};var RS=i=>t=>{t.copyFromChannel=(e=>(n,s,r=0)=>{let o=i(r),a=i(s);if(o<t.length)return e.call(t,n,a,o)})(t.copyFromChannel),t.copyToChannel=(e=>(n,s,r=0)=>{let o=i(r),a=i(s);if(o<t.length)return e.call(t,n,a,o)})(t.copyToChannel)};var IS=i=>(t,e)=>{let n=e.createBuffer(1,1,44100);t.buffer===null&&(t.buffer=n),i(t,"buffer",s=>()=>{let r=s.call(t);return r===n?null:r},s=>r=>s.call(t,r===null?n:r))};var NS=(i,t)=>(e,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});let s=e.createBufferSource();t(n,()=>{let a=n.numberOfInputs;for(let c=0;c<a;c+=1)s.connect(n,0,c)},()=>s.disconnect(n))};var tm=(i,t,e)=>i.copyFromChannel===void 0?i.getChannelData(e)[0]:(i.copyFromChannel(t,e),t[0]);var em=i=>{if(i===null)return!1;let t=i.length;return t%2!==0?i[Math.floor(t/2)]!==0:i[t/2-1]+i[t/2]!==0};var Va=(i,t,e,n)=>{let s=i;for(;!s.hasOwnProperty(t);)s=Object.getPrototypeOf(s);let{get:r,set:o}=Object.getOwnPropertyDescriptor(s,t);Object.defineProperty(i,t,{get:e(r),set:n(o)})};var PS=i=>({...i,outputChannelCount:i.outputChannelCount!==void 0?i.outputChannelCount:i.numberOfInputs===1&&i.numberOfOutputs===1?[i.channelCount]:Array.from({length:i.numberOfOutputs},()=>1)});var DS=i=>({...i,channelCount:i.numberOfOutputs});var OS=i=>{let{imag:t,real:e}=i;return t===void 0?e===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(e,()=>0),real:e}:e===void 0?{...i,imag:t,real:Array.from(t,()=>0)}:{...i,imag:t,real:e}};var nm=(i,t,e)=>{try{i.setValueAtTime(t,e)}catch(n){if(n.code!==9)throw n;nm(i,t,e+1e-7)}};var FS=i=>{let t=i.createBufferSource();t.start();try{t.start()}catch{return!0}return!1};var LS=i=>{let t=i.createBufferSource(),e=i.createBuffer(1,1,44100);t.buffer=e;try{t.start(0,1)}catch{return!1}return!0};var US=i=>{let t=i.createBufferSource();t.start();try{t.stop()}catch{return!1}return!0};var Ud=i=>{let t=i.createOscillator();try{t.start(-1)}catch(e){return e instanceof RangeError}return!1};var im=i=>{let t=i.createBuffer(1,1,44100),e=i.createBufferSource();e.buffer=t,e.start(),e.stop();try{return e.stop(),!0}catch{return!1}};var kd=i=>{let t=i.createOscillator();try{t.stop(-1)}catch(e){return e instanceof RangeError}return!1};var kS=i=>{let{port1:t,port2:e}=new MessageChannel;try{t.postMessage(i)}finally{t.close(),e.close()}};var BS=()=>{try{new DOMException}catch{return!1}return!0};var VS=()=>new Promise(i=>{let t=new ArrayBuffer(0),{port1:e,port2:n}=new MessageChannel;e.onmessage=({data:s})=>i(s!==null),n.postMessage(t,[t])});var zS=i=>{i.start=(t=>(e=0,n=0,s)=>{let r=i.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/i.context.sampleRate?t.call(i,e,0,0):t.call(i,e,o,s)})(i.start)};var sm=(i,t)=>{let e=t.createGain();i.connect(e);let n=(s=>()=>{s.call(i,e),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),Li(i,e),i.stop=(s=>{let r=!1;return(o=0)=>{if(r)try{s.call(i,o)}catch{e.gain.setValueAtTime(0,o)}else s.call(i,o),r=!0}})(i.stop)};var ro=(i,t)=>e=>{let n={value:i};return Object.defineProperties(e,{currentTarget:n,target:n}),typeof t=="function"?t.call(i,e):t.handleEvent.call(i,e)};var MR=f0(Ki),wR=w0(Ki),TR=vy(br),WS=new WeakMap,AR=Ly(WS),xi=ey(new Map,new WeakMap),ts=ES(),HS=dv(xi,Oi),rm=Fy(gn),Dn=eS(gn,rm,Vs),ER=C0(HS,Ne,Dn),Ve=By(Aa),bn=kv(ts),Pe=tv(bn),qS=new WeakMap,XS=Ry(ro),zs=gv(ts),om=$y(zs),am=Jy(ts),YS=Ky(ts),za=xv(ts),on=q0(m0(Td),M0(MR,wR,Ra,TR,Ia,gn,AR,Ts,Ne,Ki,Qn,Vs,Na),xi,qy(Ol,Ia,gn,Ne,io,Qn),Oi,Fa,Pn,_y(Ra,Ol,gn,Ne,io,Ve,Qn,Pe),My(qS,gn,pn),XS,Ve,om,am,YS,Pe,za),CR=E0(on,ER,Oi,HS,Ve,Pe);var cm=new WeakSet,GS=pv(ts),jS=uy(new Uint32Array(1)),lm=CS(jS,Oi),hm=RS(jS),um=R0(cm,xi,Pn,GS,bn,lS(GS),lm,hm);var Bd=T0(ti),ZS=nS(rm,Mr,Vs),Es=oy(ZS),Ga=mv(Bd,xi,FS,LS,US,Ud,im,kd,zS,IS(Va),sm),Cs=tS(Uy(Mr),ZS),RR=P0(Es,Ga,Ne,Cs,Dn),es=Y0(g0(Ad),qS,Dl,j0,ri.createCancelAndHoldAutomationEvent,ri.createCancelScheduledValuesAutomationEvent,ri.createExponentialRampToValueAutomationEvent,ri.createLinearRampToValueAutomationEvent,ri.createSetTargetAutomationEvent,ri.createSetValueAutomationEvent,ri.createSetValueCurveAutomationEvent,zs,nm),IR=N0(on,RR,es,He,Ga,Ve,Pe,ro);var NR=V0(on,z0,Oi,He,_v(ti,Va),Ve,Pe,Dn),PR=ty(Es,Jf,Ne,Cs,Dn),oo=rS(WS),DR=Q0(on,es,PR,Fa,Jf,Ve,Pe,oo),Ar=hv(Ki,am),OR=NS(He,Ar),Er=Tv(zs,OR),FR=iy(Er,Ne,Dn),LR=ny(on,FR,Er,Ve,Pe),UR=ry(ka,Ne,Dn),kR=sy(on,UR,ka,Ve,Pe,DS),BR=Cv(Bd,Ga,ti,Ar),Wa=Ev(Bd,xi,BR,Ud,kd),VR=hy(Es,Wa,Ne,Cs,Dn),zR=ly(on,es,VR,Wa,Ve,Pe,ro),$S=Rv(Pn,Va),GR=py($S,Ne,Dn),WR=dy(on,GR,$S,Ve,Pe,oo),HR=yy(Es,Kf,Ne,Cs,Dn),qR=xy(on,es,HR,Kf,Ve,Pe,oo),JS=Iv(Pn),XR=Ay(Es,JS,Ne,Cs,Dn),YR=Ty(on,es,XR,JS,Pn,Ve,Pe,oo),jR=Dy(Es,ti,Ne,Cs,Dn),ZR=Py(on,es,jR,ti,Ve,Pe),$R=Dv(Fa,He,Ba,Pn),Vd=iS(xi,ti,Ba,MS(ti,bn)),JR=Hy(Ga,Ne,bn,Dn,Vd),KR=Nv($R),QR=Wy(on,KR,JR,Ve,Pe,oo),tI=G0(es,Er,Wa,Ba,Pn,tm,Pe,Va),KS=new WeakMap,dm=cv(NR,tI,XS,Pe,KS,ro),QS=Bv(Bd,xi,Ud,im,kd,sm),eI=Zv(Es,QS,Ne,Cs,Dn),nI=jv(on,es,QS,eI,Ve,Pe,ro),tb=cy(Ga),iI=Xv(tb,He,ti,em,Ar),zd=qv(tb,He,iI,em,Ar,zs,Va),sI=zv(Ra,He,Er,ti,Ba,zd,Pn,Ia,tm,Ar),eb=Vv(sI),rI=Jv(Es,Er,Wa,ti,eb,Ne,bn,Cs,Dn,Vd),oI=$v(on,es,eb,rI,Ve,Pe,oo),aI=Gv(Oi),cI=Kv(aI,Ve,new WeakSet,OS),lI=Hv(Er,ka,ti,zd,Pn,Ar),nb=Wv(lI,Pn),hI=cS(Es,nb,Ne,Cs,Dn),uI=aS(on,es,nb,hI,Ve,Pe),dI=AS(zd,Ne,Dn),pI=TS(on,He,zd,dI,Ve,Pe,oo),ib=ev(ts),pm=Iy(ts),sb=new WeakMap,fI=Vy(sb,bn),mI=ib?b0(xi,Pn,Cy(ts),pm,Ny(p0),Ve,fI,Pe,za,new WeakMap,new WeakMap,gS(za,bn),ts):void 0,gI=Qy(om,Pe),_I=gy(cm,xi,my,Ey,new WeakSet,Ve,gI,Ea,Qi,lm,hm),rb=K0(mI,CR,um,IR,DR,LR,kR,zR,WR,_I,qR,YR,ZR,QR,dm,nI,oI,cI,uI,pI),xI=iv(on,Ov,Ve,Pe),yI=sv(on,Fv,Ve,Pe),vI=rv(on,Lv,Ve,Pe),SI=Uv(He,Pe),bI=ov(on,SI,Ve),ob=B0(rb,He,Pn,Qf,xI,yI,vI,bI,zs);var fm=zy(KS),MI=A0(fm),ab=ay(Oi),wI=Sy(fm),cb=wy(Oi),lb=new WeakMap,TI=Oy(lb,pn),AI=wv(ab,Oi,He,Er,ka,Wa,ti,Ba,Pn,cb,pm,TI,Ar),EI=vv(He,AI,ti,Pn,Ar),CI=J0(Es,ab,Ga,Er,ka,Wa,ti,wI,cb,pm,Ne,za,bn,Cs,Dn,Vd),RI=ky(sb),II=sS(lb),mm=ib?Z0(MI,on,es,CI,EI,gn,RI,Ve,Pe,za,PS,II,kS,ro):void 0;var oZ=av(He,Pn,Qf,dm,zs);var hb=fy(Pn,bn),ub=oS(cm,xi,rm,fm,Vd,Ea,lm,hm),aZ=lv(xi,He,hb,dm,ub);var db=Yv(rb,xi,He,hb,ub);var pb=Xy(Aa,om),fb=Yy(Ta,am),mb=jy(Dl,YS),gb=Zy(Aa,Pe),gm=()=>nv(xi,hS(bn),uS(zs),dS(bn),pS(zs),fS(bn),mS(za,bn),_S(bn),xS(bn),yS(bn),vS(bn),BS,SS(ts),bS(zs),wS(bn),VS);var Sm={};Vg(Sm,{assert:()=>yt,assertContextRunning:()=>Bl,assertRange:()=>Re,assertUsedScheduleTime:()=>xm,enterScheduledCallback:()=>Gd,log:()=>vm,setLogger:()=>NI,warn:()=>Gs});function Qe(i){return i===void 0}function qt(i){return i!==void 0}function _m(i){return typeof i=="function"}function an(i){return typeof i=="number"}function yi(i){return Object.prototype.toString.call(i)==="[object Object]"&&i.constructor===Object}function kl(i){return typeof i=="boolean"}function Fe(i){return Array.isArray(i)}function Mn(i){return typeof i=="string"}function Ha(i){return Mn(i)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(i)}function yt(i,t){if(!i)throw new Error(t)}function Re(i,t,e=1/0){if(!(t<=i&&i<=e))throw new RangeError(`Value must be within [${t}, ${e}], got: ${i}`)}function Bl(i){!i.isOffline&&i.state!=="running"&&Gs('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}var xb=!1,_b=!1;function Gd(i){xb=i}function xm(i){Qe(i)&&xb&&!_b&&(_b=!0,Gs("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}var ym=console;function NI(i){ym=i}function vm(...i){ym.log(...i)}function Gs(...i){ym.warn(...i)}function yb(i){return new ob(i)}function vb(i,t,e){return new db(i,t,e)}var wn=typeof self=="object"?self:null,Sb=wn&&(wn.hasOwnProperty("AudioContext")||wn.hasOwnProperty("webkitAudioContext"));function bb(i,t,e){return yt(qt(mm),"AudioWorkletNode only works in a secure context (https or localhost)"),new(i instanceof wn?.BaseAudioContext?wn?.AudioWorkletNode:mm)(i,t,e)}function Hn(i,t,e,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r}function ie(i,t,e,n){function s(r){return r instanceof e?r:new e(function(o){o(r)})}return new(e||(e=Promise))(function(r,o){function a(h){try{l(n.next(h))}catch(u){o(u)}}function c(h){try{l(n.throw(h))}catch(u){o(u)}}function l(h){h.done?r(h.value):s(h.value).then(a,c)}l((n=n.apply(i,t||[])).next())})}var Wd=class{constructor(t,e,n,s){this._callback=t,this._type=e,this._minimumUpdateInterval=Math.max(128/(s||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){let t=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),e=URL.createObjectURL(t),n=new Worker(e);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(t){var e;this._updateInterval=Math.max(t,this._minimumUpdateInterval),this._type==="worker"&&((e=this._worker)===null||e===void 0||e.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(t){this._disposeClock(),this._type=t,this._createClock()}dispose(){this._disposeClock()}};function ns(i){return mb(i)}function Rs(i){return fb(i)}function qa(i){return gb(i)}function Cr(i){return pb(i)}function Mb(i){return i instanceof um}function PI(i,t){return i==="value"||ns(t)||Rs(t)||Mb(t)}function On(i,...t){if(!t.length)return i;let e=t.shift();if(yi(i)&&yi(e))for(let n in e)PI(n,e[n])?i[n]=e[n]:yi(e[n])?(i[n]||Object.assign(i,{[n]:{}}),On(i[n],e[n])):Object.assign(i,{[n]:e[n]});return On(i,...t)}function wb(i,t){return i.length===t.length&&i.every((e,n)=>t[n]===e)}function L(i,t,e=[],n){let s={},r=Array.from(t);if(yi(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(a=>Reflect.has(i,a))||(On(s,{[n]:r[0]}),e.splice(e.indexOf(n),1),r.shift())),r.length===1&&yi(r[0]))On(s,r[0]);else for(let o=0;o<e.length;o++)qt(r[o])&&(s[e[o]]=r[o]);return On(i,s)}function Tb(i){return i.constructor.getDefaults()}function _n(i,t){return Qe(i)?t:i}function We(i,t){return t.forEach(e=>{Reflect.has(i,e)&&delete i[e]}),i}var xn=class{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...t){(this.debug||wn&&this.toString()===wn.TONE_DEBUG_CLASS)&&vm(this,...t)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}};xn.version=wa;function Ws(i,t){return i>t+1e-6}function Vl(i,t){return Ws(i,t)||ei(i,t)}function ao(i,t){return i+1e-6<t}function ei(i,t){return Math.abs(i-t)<1e-6}function Hs(i,t,e){return Math.max(Math.min(i,e),t)}var cn=class i extends xn{constructor(){super(),this.name="Timeline",this._timeline=[];let t=L(i.getDefaults(),arguments,["memory"]);this.memory=t.memory,this.increasing=t.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(t){if(yt(Reflect.has(t,"time"),"Timeline: events must have a time attribute"),t.time=t.time.valueOf(),this.increasing&&this.length){let e=this._timeline[this.length-1];yt(Vl(t.time,e.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(t)}else{let e=this._search(t.time);this._timeline.splice(e+1,0,t)}if(this.length>this.memory){let e=this.length-this.memory;this._timeline.splice(0,e)}return this}remove(t){let e=this._timeline.indexOf(t);return e!==-1&&this._timeline.splice(e,1),this}get(t,e="time"){let n=this._search(t,e);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(t,e="time"){let n=this._search(t,e);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(t){let e=this._timeline.length;if(e>0&&this._timeline[e-1].time<t)return this._timeline[e-1];let n=this._search(t);return n-1>=0?this._timeline[n-1]:null}cancel(t){if(this._timeline.length>1){let e=this._search(t);if(e>=0)if(ei(this._timeline[e].time,t)){for(let n=e;n>=0&&ei(this._timeline[n].time,t);n--)e=n;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else this._timeline.length===1&&Vl(this._timeline[0].time,t)&&(this._timeline=[]);return this}cancelBefore(t){let e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this}previousEvent(t){let e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null}_search(t,e="time"){if(this._timeline.length===0)return-1;let n=0,s=this._timeline.length,r=s;if(s>0&&this._timeline[s-1][e]<=t)return s-1;for(;n<r;){let o=Math.floor(n+(r-n)/2),a=this._timeline[o],c=this._timeline[o+1];if(ei(a[e],t)){for(let l=o;l<this._timeline.length;l++){let h=this._timeline[l];if(ei(h[e],t))o=l;else break}return o}else{if(ao(a[e],t)&&Ws(c[e],t))return o;Ws(a[e],t)?r=o:n=o+1}}return-1}_iterate(t,e=0,n=this._timeline.length-1){this._timeline.slice(e,n+1).forEach(t)}forEach(t){return this._iterate(t),this}forEachBefore(t,e){let n=this._search(t);return n!==-1&&this._iterate(e,0,n),this}forEachAfter(t,e){let n=this._search(t);return this._iterate(e,n+1),this}forEachBetween(t,e,n){let s=this._search(t),r=this._search(e);return s!==-1&&r!==-1?(this._timeline[s].time!==t&&(s+=1),this._timeline[r].time===e&&(r-=1),this._iterate(n,s,r)):s===-1&&this._iterate(n,0,r),this}forEachFrom(t,e){let n=this._search(t);for(;n>=0&&this._timeline[n].time>=t;)n--;return this._iterate(e,n+1),this}forEachAtTime(t,e){let n=this._search(t);if(n!==-1&&ei(this._timeline[n].time,t)){let s=n;for(let r=n;r>=0&&ei(this._timeline[r].time,t);r--)s=r;this._iterate(r=>{e(r)},s,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}};var Ab=[];function Rr(i){Ab.push(i)}function Eb(i){Ab.forEach(t=>t(i))}var Cb=[];function Ir(i){Cb.push(i)}function Rb(i){Cb.forEach(t=>t(i))}var qs=class i extends xn{constructor(){super(...arguments),this.name="Emitter"}on(t,e){return t.split(/\W+/).forEach(s=>{Qe(this._events)&&(this._events={}),this._events.hasOwnProperty(s)||(this._events[s]=[]),this._events[s].push(e)}),this}once(t,e){let n=(...s)=>{e(...s),this.off(t,n)};return this.on(t,n),this}off(t,e){return t.split(/\W+/).forEach(s=>{if(Qe(this._events)&&(this._events={}),this._events.hasOwnProperty(s))if(Qe(e))this._events[s]=[];else{let r=this._events[s];for(let o=r.length-1;o>=0;o--)r[o]===e&&r.splice(o,1)}}),this}emit(t,...e){if(this._events&&this._events.hasOwnProperty(t)){let n=this._events[t].slice(0);for(let s=0,r=n.length;s<r;s++)n[s].apply(this,e)}return this}static mixin(t){["on","once","off","emit"].forEach(e=>{let n=Object.getOwnPropertyDescriptor(i.prototype,e);Object.defineProperty(t.prototype,e,n)})}dispose(){return super.dispose(),this._events=void 0,this}};var co=class extends qs{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}};var Nr=class i extends co{constructor(){var t,e;super(),this.name="Context",this._constants=new Map,this._timeouts=new cn,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;let n=L(i.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((t=arguments[0])===null||t===void 0?void 0:t.latencyHint)||""):(this._context=yb({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new Wd(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((e=arguments[0])===null||e===void 0)&&e.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(Eb(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(t,e,n){return this._context.createBuffer(t,e,n)}createChannelMerger(t){return this._context.createChannelMerger(t)}createChannelSplitter(t){return this._context.createChannelSplitter(t)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(t){return this._context.createDelay(t)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(t,e){return this._context.createIIRFilter(t,e)}createPanner(){return this._context.createPanner()}createPeriodicWave(t,e,n){return this._context.createPeriodicWave(t,e,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(t){return yt(Cr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(t)}createMediaElementSource(t){return yt(Cr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(t)}createMediaStreamDestination(){return yt(Cr(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(t){return this._context.decodeAudioData(t)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(t){yt(!this._initialized,"The listener cannot be set after initialization."),this._listener=t}get transport(){return this.initialize(),this._transport}set transport(t){yt(!this._initialized,"The transport cannot be set after initialization."),this._transport=t}get draw(){return this.initialize(),this._draw}set draw(t){yt(!this._initialized,"Draw cannot be set after initialization."),this._draw=t}get destination(){return this.initialize(),this._destination}set destination(t){yt(!this._initialized,"The destination cannot be set after initialization."),this._destination=t}createAudioWorkletNode(t,e){return bb(this.rawContext,t,e)}addAudioWorkletModule(t){return ie(this,void 0,void 0,function*(){yt(qt(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(t)),yield this._workletPromise})}workletsAreReady(){return ie(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(t){this._ticker.updateInterval=t}get clockSource(){return this._ticker.type}set clockSource(t){this._ticker.type=t}get lookAhead(){return this._lookAhead}set lookAhead(t){this._lookAhead=t,this.updateInterval=t?t/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Cr(this._context)?this._context.resume():Promise.resolve()}close(){return ie(this,void 0,void 0,function*(){Cr(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&Rb(this)})}getConstant(t){if(this._constants.has(t))return this._constants.get(t);{let e=this._context.createBuffer(1,128,this._context.sampleRate),n=e.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=t;let s=this._context.createBufferSource();return s.channelCount=1,s.channelCountMode="explicit",s.buffer=e,s.loop=!0,s.start(0),this._constants.set(t,s),s}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(t=>this._constants[t].disconnect()),this.close(),this}_timeoutLoop(){let t=this.now();this._timeouts.forEachBefore(t,e=>{e.callback(),this._timeouts.remove(e)})}setTimeout(t,e){this._timeoutIds++;let n=this.now();return this._timeouts.add({callback:t,id:this._timeoutIds,time:n+e}),this._timeoutIds}clearTimeout(t){return this._timeouts.forEach(e=>{e.id===t&&this._timeouts.remove(e)}),this}clearInterval(t){return this.clearTimeout(t)}setInterval(t,e){let n=++this._timeoutIds,s=()=>{let r=this.now();this._timeouts.add({callback:()=>{t(),s()},id:n,time:r+e})};return s(),n}};var Hd=class extends co{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(t,e,n){return{}}createChannelMerger(t){return{}}createChannelSplitter(t){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(t){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(t,e){return{}}createPanner(){return{}}createPeriodicWave(t,e,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(t){return{}}createMediaElementSource(t){return{}}createMediaStreamDestination(){return{}}decodeAudioData(t){return Promise.resolve({})}createAudioWorkletNode(t,e){return{}}get rawContext(){return{}}addAudioWorkletModule(t){return ie(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(t,e){return 0}clearTimeout(t){return this}setInterval(t,e){return 0}clearInterval(t){return this}getConstant(t){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(t){}get destination(){return{}}set destination(t){}now(){return 0}immediate(){return 0}};function lt(i,t){Fe(t)?t.forEach(e=>lt(i,e)):Object.defineProperty(i,t,{enumerable:!0,writable:!1})}function Xs(i,t){Fe(t)?t.forEach(e=>Xs(i,e)):Object.defineProperty(i,t,{writable:!0})}var Xt=()=>{};var De=class i extends xn{constructor(){super(),this.name="ToneAudioBuffer",this.onload=Xt;let t=L(i.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=t.reverse,this.onload=t.onload,Mn(t.url)?this.load(t.url).catch(t.onerror):t.url&&this.set(t.url)}static getDefaults(){return{onerror:Xt,onload:Xt,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:me().sampleRate}set(t){return t instanceof i?t.loaded?this._buffer=t.get():t.onload=()=>{this.set(t),this.onload(this)}:this._buffer=t,this._reversed&&this._reverse(),this}get(){return this._buffer}load(t){return ie(this,void 0,void 0,function*(){let e=i.load(t).then(n=>{this.set(n),this.onload(this)});i.downloads.push(e);try{yield e}finally{let n=i.downloads.indexOf(e);i.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(t){let e=Fe(t)&&t[0].length>0,n=e?t.length:1,s=e?t[0].length:t.length,r=me(),o=r.createBuffer(n,s,r.sampleRate),a=!e&&n===1?[t]:t;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(t){if(an(t))this.fromArray(this.toArray(t));else{let e=new Float32Array(this.length),n=this.numberOfChannels;for(let s=0;s<n;s++){let r=this.toArray(s);for(let o=0;o<r.length;o++)e[o]+=r[o]}e=e.map(s=>s/n),this.fromArray(e)}return this}toArray(t){if(an(t))return this.getChannelData(t);if(this.numberOfChannels===1)return this.toArray(0);{let e=[];for(let n=0;n<this.numberOfChannels;n++)e[n]=this.getChannelData(n);return e}}getChannelData(t){return this._buffer?this._buffer.getChannelData(t):new Float32Array(0)}slice(t,e=this.duration){yt(this.loaded,"Buffer is not loaded");let n=Math.floor(t*this.sampleRate),s=Math.floor(e*this.sampleRate);yt(n<s,"The start time must be less than the end time");let r=s-n,o=me().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,s),a);return new i(o)}_reverse(){if(this.loaded)for(let t=0;t<this.numberOfChannels;t++)this.getChannelData(t).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(t){this._reversed!==t&&(this._reversed=t,this._reverse())}static fromArray(t){return new i().fromArray(t)}static fromUrl(t){return ie(this,void 0,void 0,function*(){return yield new i().load(t)})}static load(t){return ie(this,void 0,void 0,function*(){let e=i.baseUrl===""||i.baseUrl.endsWith("/")?i.baseUrl:i.baseUrl+"/",n=yield fetch(e+t);if(!n.ok)throw new Error(`could not load url: ${t}`);let s=yield n.arrayBuffer();return yield me().decodeAudioData(s)})}static supportsType(t){let e=t.split("."),n=e[e.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return ie(this,void 0,void 0,function*(){for(yield Promise.resolve();i.downloads.length;)yield i.downloads[0]})}};De.baseUrl="";De.downloads=[];var vi=class extends Nr{constructor(){super({clockSource:"offline",context:qa(arguments[0])?arguments[0]:vb(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:qa(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=qa(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(t){return ie(this,void 0,void 0,function*(){let e=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,e++;let n=Math.floor(this.sampleRate/128);t&&e%n===0&&(yield new Promise(s=>setTimeout(s,1)))}})}render(){return ie(this,arguments,void 0,function*(t=!0){yield this.workletsAreReady(),yield this._renderClock(t);let e=yield this._context.startRendering();return new De(e)})}close(){return Promise.resolve()}};var Ib=new Hd,lo=Ib;function me(){return lo===Ib&&Sb&&Pr(new Nr),lo}function Pr(i,t=!1){t&&lo.dispose(),Cr(i)?lo=new Nr(i):qa(i)?lo=new vi(i):lo=i}function qd(){return lo.resume()}if(wn&&!wn.TONE_SILENCE_LOGGING){let i="v";wa==="dev"&&(i="");let t=` * Tone.js ${i}${wa} * `;console.log(`%c${t}`,"background: #000; color: #fff")}function is(i){return Math.pow(10,i/20)}function Is(i){return 20*(Math.log(i)/Math.LN10)}function ss(i){return Math.pow(2,i/12)}var Xd=440;function Nb(){return Xd}function Pb(i){Xd=i}function Ui(i){return Math.round(bm(i))}function bm(i){return 69+12*Math.log2(i/Xd)}function Xa(i){return Xd*Math.pow(2,(i-69)/12)}var Yd=class i extends xn{constructor(t,e,n){super(),this.defaultUnits="s",this._val=e,this._units=n,this.context=t,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:t=>this._frequencyToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:t=>this._ticksToUnits(parseInt(t,10)),regexp:/^(\d+)i$/i},m:{method:t=>this._beatsToUnits(parseInt(t,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(t,e)=>{let n=parseInt(t,10),s=e==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*s:this._beatsToUnits(4/n)*s},regexp:/^(\d+)n(\.?)$/i},number:{method:t=>this._expressions[this.defaultUnits].method.call(this,t),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:t=>this._secondsToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:t=>parseInt(t,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:t=>{let e=parseInt(t,10);return this._beatsToUnits(8/(Math.floor(e)*3))},regexp:/^(\d+)t$/i},tr:{method:(t,e,n)=>{let s=0;return t&&t!=="0"&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(s+=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(s+=this._beatsToUnits(parseFloat(n)/4)),s},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof i&&this.fromType(this._val),Qe(this._val))return this._noArg();if(Mn(this._val)&&Qe(this._units)){for(let t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(yi(this._val)){let t=0;for(let e in this._val)if(qt(this._val[e])){let n=this._val[e],s=new this.constructor(this.context,e).valueOf()*n;t+=s}return t}if(qt(this._units)){let t=this._expressions[this._units],e=this._val.toString().trim().match(t.regexp);return e?t.method.apply(this,e.slice(1)):t.method.call(this,this._val)}else return Mn(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(t){return 1/t}_beatsToUnits(t){return 60/this._getBpm()*t}_secondsToUnits(t){return t}_ticksToUnits(t){return t*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(t){switch(this._units=void 0,this.defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}};var ni=class i extends Yd{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:t=>this._now()+new this.constructor(this.context,t).valueOf(),regexp:/^\+(.+)/},quantize:{method:t=>{let e=new i(this.context,t).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(e))},regexp:/^@(.+)/}})}quantize(t,e=1){let n=new this.constructor(this.context,t).valueOf(),s=this.valueOf(),a=Math.round(s/n)*n-s;return s+a*e}toNotation(){let t=this.toSeconds(),e=["1m"];for(let r=1;r<9;r++){let o=Math.pow(2,r);e.push(o+"n."),e.push(o+"n"),e.push(o+"t")}e.push("0");let n=e[0],s=new i(this.context,e[0]).toSeconds();return e.forEach(r=>{let o=new i(this.context,r).toSeconds();Math.abs(o-t)<Math.abs(s-t)&&(n=r,s=o)}),n}toBarsBeatsSixteenths(){let t=this._beatsToUnits(1),e=this.valueOf()/t;e=parseFloat(e.toFixed(4));let n=Math.floor(e/this._getTimeSignature()),s=e%1*4;e=Math.floor(e)%this._getTimeSignature();let r=s.toString();return r.length>3&&(s=parseFloat(parseFloat(r).toFixed(3))),[n,e,s].join(":")}toTicks(){let t=this._beatsToUnits(1);return this.valueOf()/t*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return Ui(this.toFrequency())}_now(){return this.context.now()}};function DI(i,t){return new ni(me(),i,t)}var Fn=class i extends ni{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return Nb()}static set A4(t){Pb(t)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(t){return this.defaultUnits==="midi"?t:i.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(t,e){let s=OI[t.toLowerCase()]+(parseInt(e,10)+1)*12;return this.defaultUnits==="midi"?s:i.mtof(s)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(t,e,n){let s=1;return t&&t!=="0"&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(s*=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(s*=this._beatsToUnits(parseFloat(n)/4)),s}}})}transpose(t){return new i(this.context,this.valueOf()*ss(t))}harmonize(t){return t.map(e=>this.transpose(e))}toMidi(){return Ui(this.valueOf())}toNote(){let t=this.toFrequency(),e=Math.log2(t/i.A4),n=Math.round(12*e)+57,s=Math.floor(n/12);return s<0&&(n+=-12*s),FI[n%12]+s.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){let t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(t){return t}_ticksToUnits(t){return 1/(t*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(t){return 1/super._beatsToUnits(t)}_secondsToUnits(t){return 1/t}static mtof(t){return Xa(t)}static ftom(t){return Ui(t)}},OI={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},FI=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function LI(i,t){return new Fn(me(),i,t)}var Le=class extends ni{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}};function UI(i,t){return new Le(me(),i,t)}var qe=class i extends xn{constructor(){super();let t=L(i.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=t.context}static getDefaults(){return{context:me()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(t){return xm(t),new ni(this.context,t).toSeconds()}toFrequency(t){return new Fn(this.context,t).toFrequency()}toTicks(t){return new Le(this.context,t).toTicks()}_getPartialProperties(t){let e=this.get();return Object.keys(e).forEach(n=>{Qe(t[n])&&delete e[n]}),e}get(){let t=Tb(this);return Object.keys(t).forEach(e=>{if(Reflect.has(this,e)){let n=this[e];qt(n)&&qt(n.value)&&qt(n.setValueAtTime)?t[e]=n.value:n instanceof i?t[e]=n._getPartialProperties(t[e]):Fe(n)||an(n)||Mn(n)||kl(n)?t[e]=n:delete t[e]}}),t}set(t){return Object.keys(t).forEach(e=>{Reflect.has(this,e)&&qt(this[e])&&(this[e]&&qt(this[e].value)&&qt(this[e].setValueAtTime)?this[e].value!==t[e]&&(this[e].value=t[e]):this[e]instanceof i?this[e].set(t[e]):this[e]=t[e])}),this}};var Si=class extends cn{constructor(t="stopped"){super(),this.name="StateTimeline",this._initial=t,this.setStateAtTime(this._initial,0)}getValueAtTime(t){let e=this.get(t);return e!==null?e.state:this._initial}setStateAtTime(t,e,n){return Re(e,0),this.add(Object.assign({},n,{state:t,time:e})),this}getLastState(t,e){let n=this._search(e);for(let s=n;s>=0;s--){let r=this._timeline[s];if(r.state===t)return r}}getNextState(t,e){let n=this._search(e);if(n!==-1)for(let s=n;s<this._timeline.length;s++){let r=this._timeline[s];if(r.state===t)return r}}};var Bt=class i extends qe{constructor(){let t=L(i.getDefaults(),arguments,["param","units","convert"]);for(super(t),this.name="Param",this.overridden=!1,this._minOutput=1e-7,yt(qt(t.param)&&(ns(t.param)||t.param instanceof i),"param must be an AudioParam");!ns(t.param);)t.param=t.param._param;this._swappable=qt(t.swappable)?t.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=t.param,this.input.connect(this._param)):this._param=this.input=t.param,this._events=new cn(1e3),this._initialValue=this._param.defaultValue,this.units=t.units,this.convert=t.convert,this._minValue=t.minValue,this._maxValue=t.maxValue,qt(t.value)&&t.value!==this._toType(this._initialValue)&&this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(qe.getDefaults(),{convert:!0,units:"number"})}get value(){let t=this.now();return this.getValueAtTime(t)}set value(t){this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}get minValue(){return qt(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return qt(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(t,e){return this.units===e}_assertRange(t){return qt(this.maxValue)&&qt(this.minValue)&&Re(t,this._fromType(this.minValue),this._fromType(this.maxValue)),t}_fromType(t){return this.convert&&!this.overridden?this._is(t,"time")?this.toSeconds(t):this._is(t,"decibels")?is(t):this._is(t,"frequency")?this.toFrequency(t):t:this.overridden?0:t}_toType(t){return this.convert&&this.units==="decibels"?Is(t):t}setValueAtTime(t,e){let n=this.toSeconds(e),s=this._fromType(t);return yt(isFinite(s)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(s),this.log(this.units,"setValueAtTime",t,n),this._events.add({time:n,type:"setValueAtTime",value:s}),this._param.setValueAtTime(s,n),this}getValueAtTime(t){let e=Math.max(this.toSeconds(t),0),n=this._events.getAfter(e),s=this._events.get(e),r=this._initialValue;if(s===null)r=this._initialValue;else if(s.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){let o=this._events.getBefore(s.time),a;o===null?a=this._initialValue:a=o.value,s.type==="setTargetAtTime"&&(r=this._exponentialApproach(s.time,a,s.value,s.constant,e))}else if(n===null)r=s.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=s.value;if(s.type==="setTargetAtTime"){let a=this._events.getBefore(s.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(s.time,o,n.time,n.value,e):r=this._exponentialInterpolate(s.time,o,n.time,n.value,e)}else r=s.value;return this._toType(r)}setRampPoint(t){t=this.toSeconds(t);let e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),this._fromType(e)===0&&(e=this._toType(this._minOutput)),this.setValueAtTime(e,t),this}linearRampToValueAtTime(t,e){let n=this._fromType(t),s=this.toSeconds(e);return yt(isFinite(n)&&isFinite(s),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(n),this._events.add({time:s,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",t,s),this._param.linearRampToValueAtTime(n,s),this}exponentialRampToValueAtTime(t,e){let n=this._fromType(t);n=ei(n,0)?this._minOutput:n,this._assertRange(n);let s=this.toSeconds(e);return yt(isFinite(n)&&isFinite(s),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({time:s,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",t,s),this._param.exponentialRampToValueAtTime(n,s),this}exponentialRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(t,n+this.toSeconds(e)),this}linearRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(t,n+this.toSeconds(e)),this}targetRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(t,n,e),this}exponentialApproachValueAtTime(t,e,n){e=this.toSeconds(e),n=this.toSeconds(n);let s=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(t,e,s),this.cancelAndHoldAtTime(e+n*.9),this.linearRampToValueAtTime(t,e+n),this}setTargetAtTime(t,e,n){let s=this._fromType(t);yt(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");let r=this.toSeconds(e);return this._assertRange(s),yt(isFinite(s)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:s}),this.log(this.units,"setTargetAtTime",t,r,n),this._param.setTargetAtTime(s,r,n),this}setValueCurveAtTime(t,e,n,s=1){n=this.toSeconds(n),e=this.toSeconds(e);let r=this._fromType(t[0])*s;this.setValueAtTime(this._toType(r),e);let o=n/(t.length-1);for(let a=1;a<t.length;a++){let c=this._fromType(t[a])*s;this.linearRampToValueAtTime(this._toType(c),e+a*o)}return this}cancelScheduledValues(t){let e=this.toSeconds(t);return yt(isFinite(e),`Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`),this._events.cancel(e),this._param.cancelScheduledValues(e),this.log(this.units,"cancelScheduledValues",e),this}cancelAndHoldAtTime(t){let e=this.toSeconds(t),n=this._fromType(this.getValueAtTime(e));yt(isFinite(e),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`),this.log(this.units,"cancelAndHoldAtTime",e,"value="+n);let s=this._events.get(e),r=this._events.getAfter(e);return s&&ei(s.time,e)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(e),this._events.cancel(e+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),e):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),e)),this._events.add({time:e,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,e),this}rampTo(t,e=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(t,e,n):this.linearRampTo(t,e,n),this}apply(t){let e=this.context.currentTime;t.setValueAtTime(this.getValueAtTime(e),e);let n=this._events.get(e);if(n&&n.type==="setTargetAtTime"){let s=this._events.getAfter(n.time),r=s?s.time:e+2,o=(r-e)/10;for(let a=e;a<r;a+=o)t.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,s=>{s.type==="cancelScheduledValues"?t.cancelScheduledValues(s.time):s.type==="setTargetAtTime"?t.setTargetAtTime(s.value,s.time,s.constant):t[s.type](s.value,s.time)}),this}setParam(t){yt(this._swappable,"The Param must be assigned as 'swappable' in the constructor");let e=this.input;return e.disconnect(this._param),this.apply(t),this._param=t,e.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(t,e,n,s,r){return n+(e-n)*Math.exp(-(r-t)/s)}_linearInterpolate(t,e,n,s,r){return e+(s-e)*((r-t)/(n-t))}_exponentialInterpolate(t,e,n,s,r){return e*Math.pow(s/e,(r-t)/(n-t))}};var tt=class i extends qe{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return qt(this.input)?ns(this.input)||this.input instanceof Bt?1:this.input.numberOfInputs:0}get numberOfOutputs(){return qt(this.output)?this.output.numberOfOutputs:0}_isAudioNode(t){return qt(t)&&(t instanceof i||Rs(t))}_getInternalNodes(){let t=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&t.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&t.push(this.output),t}_setChannelProperties(t){this._getInternalNodes().forEach(n=>{n.channelCount=t.channelCount,n.channelCountMode=t.channelCountMode,n.channelInterpretation=t.channelInterpretation})}_getChannelProperties(){let t=this._getInternalNodes();yt(t.length>0,"ToneAudioNode does not have any internal nodes");let e=t[0];return{channelCount:e.channelCount,channelCountMode:e.channelCountMode,channelInterpretation:e.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(t){let e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCount:t}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(t){let e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCountMode:t}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(t){let e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelInterpretation:t}))}connect(t,e=0,n=0){return Xe(this,t,e,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Gs("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(t,e=0,n=0){return jd(this,t,e,n),this}chain(...t){return ln(this,...t),this}fan(...t){return t.forEach(e=>this.connect(e)),this}dispose(){return super.dispose(),qt(this.input)&&(this.input instanceof i?this.input.dispose():Rs(this.input)&&this.input.disconnect()),qt(this.output)&&(this.output instanceof i?this.output.dispose():Rs(this.output)&&this.output.disconnect()),this._internalChannels=[],this}};function ln(...i){let t=i.shift();i.reduce((e,n)=>(e instanceof tt?e.connect(n):Rs(e)&&Xe(e,n),n),t)}function Xe(i,t,e=0,n=0){for(yt(qt(i),"Cannot connect from undefined node"),yt(qt(t),"Cannot connect to undefined node"),(t instanceof tt||Rs(t))&&yt(t.numberOfInputs>0,"Cannot connect to node with no inputs"),yt(i.numberOfOutputs>0,"Cannot connect from node with no outputs");t instanceof tt||t instanceof Bt;)qt(t.input)&&(t=t.input);for(;i instanceof tt;)qt(i.output)&&(i=i.output);ns(t)?i.connect(t,e):i.connect(t,e,n)}function jd(i,t,e=0,n=0){if(qt(t))for(;t instanceof tt;)t=t.input;for(;!Rs(i);)qt(i.output)&&(i=i.output);ns(t)?i.disconnect(t,e):Rs(t)?i.disconnect(t,e,n):i.disconnect()}function kI(...i){let t=i.pop();qt(t)&&i.forEach(e=>Xe(e,t))}var dt=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["gain","units"]);super(t),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new Bt({context:this.context,convert:t.convert,param:this._gainNode.gain,units:t.units,value:t.gain,minValue:t.minValue,maxValue:t.maxValue}),lt(this,"gain")}static getDefaults(){return Object.assign(tt.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}};var rs=class extends tt{constructor(t){super(t),this.onended=Xt,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new dt({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(e){let n=this.toSeconds(e);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut,this._curve=t.curve,this.onended=t.onended}static getDefaults(){return Object.assign(tt.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:Xt})}_startGain(t,e=1){yt(this._startTime===-1,"Source cannot be started more than once");let n=this.toSeconds(this._fadeIn);return this._startTime=t+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,t),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(e,t+n):this._gainNode.gain.exponentialApproachValueAtTime(e,t,n)):this._gainNode.gain.setValueAtTime(e,t),this}stop(t){return this.log("stop",t),this._stopGain(this.toSeconds(t)),this}_stopGain(t){yt(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();let e=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(t)+e,this._stopTime=Math.max(this._stopTime,this.now()),e>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{let n=this._curve==="exponential"?e*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==Xt&&(this.onended(this),this.onended=Xt,!this.context.isOffline)){let t=()=>this.dispose();typeof requestIdleCallback<"u"?requestIdleCallback(t):setTimeout(t,10)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),yt(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=Xt,this}};var Ya=class i extends rs{constructor(){let t=L(i.getDefaults(),arguments,["offset"]);super(t),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),Xe(this._source,this._gainNode),this.offset=new Bt({context:this.context,convert:t.convert,param:this._source.offset,units:t.units,value:t.offset,minValue:t.minValue,maxValue:t.maxValue})}static getDefaults(){return Object.assign(rs.getDefaults(),{convert:!0,offset:1,units:"number"})}start(t){let e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._source.start(e),this}_stopSource(t){this._source.stop(t)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}};var bt=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["value","units"]);super(t),this.name="Signal",this.override=!0,this.output=this._constantSource=new Ya({context:this.context,convert:t.convert,offset:t.value,units:t.units,minValue:t.minValue,maxValue:t.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(tt.getDefaults(),{convert:!0,units:"number",value:0})}connect(t,e=0,n=0){return Dr(this,t,e,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(t,e){return this._param.setValueAtTime(t,e),this}getValueAtTime(t){return this._param.getValueAtTime(t)}setRampPoint(t){return this._param.setRampPoint(t),this}linearRampToValueAtTime(t,e){return this._param.linearRampToValueAtTime(t,e),this}exponentialRampToValueAtTime(t,e){return this._param.exponentialRampToValueAtTime(t,e),this}exponentialRampTo(t,e,n){return this._param.exponentialRampTo(t,e,n),this}linearRampTo(t,e,n){return this._param.linearRampTo(t,e,n),this}targetRampTo(t,e,n){return this._param.targetRampTo(t,e,n),this}exponentialApproachValueAtTime(t,e,n){return this._param.exponentialApproachValueAtTime(t,e,n),this}setTargetAtTime(t,e,n){return this._param.setTargetAtTime(t,e,n),this}setValueCurveAtTime(t,e,n,s){return this._param.setValueCurveAtTime(t,e,n,s),this}cancelScheduledValues(t){return this._param.cancelScheduledValues(t),this}cancelAndHoldAtTime(t){return this._param.cancelAndHoldAtTime(t),this}rampTo(t,e,n){return this._param.rampTo(t,e,n),this}get value(){return this._param.value}set value(t){this._param.value=t}get convert(){return this._param.convert}set convert(t){this._param.convert=t}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(t){this._param.overridden=t}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(t){return this._param.apply(t),this}};function Dr(i,t,e,n){(t instanceof Bt||ns(t)||t instanceof bt&&t.override)&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0),t instanceof bt&&(t.overridden=!0)),Xe(i,t,e,n)}var Zd=class i extends Bt{constructor(){let t=L(i.getDefaults(),arguments,["value"]);super(t),this.name="TickParam",this._events=new cn(1/0),this._multiplier=1,this._multiplier=t.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(t.value)}),this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Bt.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(t,e,n){e=this.toSeconds(e),this.setRampPoint(e);let s=this._fromType(t),r=this._events.get(e),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){let c=n*a+e,l=this._exponentialApproach(r.time,r.value,s,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(t,e){let n=this.toSeconds(e);super.setValueAtTime(t,e);let s=this._events.get(n),r=this._events.previousEvent(s),o=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(o,0),this}linearRampToValueAtTime(t,e){let n=this.toSeconds(e);super.linearRampToValueAtTime(t,e);let s=this._events.get(n),r=this._events.previousEvent(s),o=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(t,e){e=this.toSeconds(e);let n=this._fromType(t),s=this._events.get(e),r=Math.round(Math.max((e-s.time)*10,1)),o=(e-s.time)/r;for(let a=0;a<=r;a++){let c=o*a+s.time,l=this._exponentialInterpolate(s.time,s.value,e,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(t,e){if(t===null)t={ticks:0,time:0,type:"setValueAtTime",value:0};else if(Qe(t.ticks)){let o=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(o,t.time)}let n=this._fromType(this.getValueAtTime(t.time)),s=this._fromType(this.getValueAtTime(e)),r=this._events.get(e);return r&&r.time===e&&r.type==="setValueAtTime"&&(s=this._fromType(this.getValueAtTime(e-this.sampleTime))),.5*(e-t.time)*(n+s)+t.ticks}getTicksAtTime(t){let e=this.toSeconds(t),n=this._events.get(e);return Math.max(this._getTicksUntilEvent(n,e),0)}getDurationOfTicks(t,e){let n=this.toSeconds(e),s=this.getTicksAtTime(e);return this.getTimeOfTick(s+t)-n}getTimeOfTick(t){let e=this._events.get(t,"ticks"),n=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&n&&n.type==="linearRampToValueAtTime"&&e.value!==n.value){let s=this._fromType(this.getValueAtTime(e.time)),o=(this._fromType(this.getValueAtTime(n.time))-s)/(n.time-e.time),a=Math.sqrt(Math.pow(s,2)-2*o*(e.ticks-t)),c=(-s+a)/o,l=(-s-a)/o;return(c>0?c:l)+e.time}else return e?e.value===0?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue}ticksToTime(t,e){return this.getDurationOfTicks(t,e)}timeToTicks(t,e){let n=this.toSeconds(e),s=this.toSeconds(t),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+s)-r}_fromType(t){return this.units==="bpm"&&this.multiplier?1/(60/t/this.multiplier):super._fromType(t)}_toType(t){return this.units==="bpm"&&this.multiplier?t/this.multiplier*60:super._toType(t)}get multiplier(){return this._multiplier}set multiplier(t){let e=this.value;this._multiplier=t,this.cancelScheduledValues(0),this.setValueAtTime(e,0)}};var $d=class i extends bt{constructor(){let t=L(i.getDefaults(),arguments,["value"]);super(t),this.name="TickSignal",this.input=this._param=new Zd({context:this.context,convert:t.convert,multiplier:t.multiplier,param:this._constantSource.offset,units:t.units,value:t.value})}static getDefaults(){return Object.assign(bt.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(t,e){return this._param.ticksToTime(t,e)}timeToTicks(t,e){return this._param.timeToTicks(t,e)}getTimeOfTick(t){return this._param.getTimeOfTick(t)}getDurationOfTicks(t,e){return this._param.getDurationOfTicks(t,e)}getTicksAtTime(t){return this._param.getTicksAtTime(t)}get multiplier(){return this._param.multiplier}set multiplier(t){this._param.multiplier=t}dispose(){return super.dispose(),this._param.dispose(),this}};var Jd=class i extends qe{constructor(){let t=L(i.getDefaults(),arguments,["frequency"]);super(t),this.name="TickSource",this._state=new Si,this._tickOffset=new cn,this._ticksAtTime=new cn,this._secondsAtTime=new cn,this.frequency=new $d({context:this.context,units:t.units,value:t.frequency}),lt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},qe.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(t,e){let n=this.toSeconds(t);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),qt(e)&&this.setTicksAtTime(e,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(t){let e=this.toSeconds(t);if(this._state.getValueAtTime(e)==="stopped"){let n=this._state.get(e);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(e),this._state.setStateAtTime("stopped",e),this.setTicksAtTime(0,e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}pause(t){let e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&(this._state.setStateAtTime("paused",e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e)),this}cancel(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getTicksAtTime(t){let e=this.toSeconds(t),n=this._state.getLastState("stopped",e),s=this._ticksAtTime.get(e),r={state:"paused",time:e};this._state.add(r);let o=s||n,a=s?s.ticks:0,c=null;return this._state.forEachBetween(o.time,e+this.sampleTime,l=>{let h=o.time,u=this._tickOffset.get(l.time);u&&u.time>=o.time&&(a=u.ticks,h=u.time),o.state==="started"&&l.state!=="started"&&(a+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(h),l.time!==r.time&&(c={state:l.state,time:l.time,ticks:a})),o=l}),this._state.remove(r),c&&this._ticksAtTime.add(c),a}get ticks(){return this.getTicksAtTime(this.now())}set ticks(t){this.setTicksAtTime(t,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(t){let e=this.now(),n=this.frequency.timeToTicks(t,e);this.setTicksAtTime(n,e)}getSecondsAtTime(t){t=this.toSeconds(t);let e=this._state.getLastState("stopped",t),n={state:"paused",time:t};this._state.add(n);let s=this._secondsAtTime.get(t),r=s||e,o=s?s.seconds:0,a=null;return this._state.forEachBetween(r.time,t+this.sampleTime,c=>{let l=r.time,h=this._tickOffset.get(c.time);h&&h.time>=r.time&&(o=h.seconds,l=h.time),r.state==="started"&&c.state!=="started"&&(o+=c.time-l,c.time!==n.time&&(a={state:c.state,time:c.time,seconds:o})),r=c}),this._state.remove(n),a&&this._secondsAtTime.add(a),o}setTicksAtTime(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(t,e),ticks:t,time:e}),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getStateAtTime(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)}getTimeOfTick(t,e=this.now()){let n=this._tickOffset.get(e),s=this._state.get(e),r=Math.max(n.time,s.time),o=this.frequency.getTicksAtTime(r)+t-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(t,e,n){let s=this._state.get(t);this._state.forEachBetween(t,e,o=>{s&&s.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(s.time,t),o.time-this.sampleTime,n),s=o});let r=null;if(s&&s.state==="started"){let o=Math.max(s.time,t),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(s.time),l=a-c,h=Math.ceil(l)-l;h=ei(h,1)?0:h;let u=this.frequency.getTimeOfTick(a+h);for(;u<e;){try{n(u,Math.round(this.getTicksAtTime(u)))}catch(d){r=d;break}u+=this.frequency.getDurationOfTicks(1,u)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}};var Or=class i extends qe{constructor(){let t=L(i.getDefaults(),arguments,["callback","frequency"]);super(t),this.name="Clock",this.callback=Xt,this._lastUpdate=0,this._state=new Si("stopped"),this._boundLoop=this._loop.bind(this),this.callback=t.callback,this._tickSource=new Jd({context:this.context,frequency:t.frequency,units:t.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,lt(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(qe.getDefaults(),{callback:Xt,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(t,e){Bl(this.context);let n=this.toSeconds(t);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,e),n<this._lastUpdate&&this.emit("start",n,e)),this}stop(t){let e=this.toSeconds(t);return this.log("stop",e),this._state.cancel(e),this._state.setStateAtTime("stopped",e),this._tickSource.stop(e),e<this._lastUpdate&&this.emit("stop",e),this}pause(t){let e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&(this._state.setStateAtTime("paused",e),this._tickSource.pause(e),e<this._lastUpdate&&this.emit("pause",e)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(t){this._tickSource.ticks=t}get seconds(){return this._tickSource.seconds}set seconds(t){this._tickSource.seconds=t}getSecondsAtTime(t){return this._tickSource.getSecondsAtTime(t)}setTicksAtTime(t,e){return this._tickSource.setTicksAtTime(t,e),this}getTimeOfTick(t,e=this.now()){return this._tickSource.getTimeOfTick(t,e)}getTicksAtTime(t){return this._tickSource.getTicksAtTime(t)}nextTickTime(t,e){let n=this.toSeconds(e),s=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(s+t,n)}_loop(){let t=this._lastUpdate,e=this.now();this._lastUpdate=e,this.log("loop",t,e),t!==e&&(this._state.forEachBetween(t,e,n=>{switch(n.state){case"started":let s=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,s);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(t,e,(n,s)=>{this.callback(n,s)}))}getStateAtTime(t){let e=this.toSeconds(t);return this._state.getValueAtTime(e)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}};qs.mixin(Or);var Tn=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["delayTime","maxDelay"]);super(t),this.name="Delay";let e=this.toSeconds(t.maxDelay);this._maxDelay=Math.max(e,this.toSeconds(t.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(e),this.delayTime=new Bt({context:this.context,param:this._delayNode.delayTime,units:"time",value:t.delayTime,minValue:0,maxValue:this.maxDelay}),lt(this,"delayTime")}static getDefaults(){return Object.assign(tt.getDefaults(),{delayTime:0,maxDelay:1})}get maxDelay(){return this._maxDelay}dispose(){return super.dispose(),this._delayNode.disconnect(),this.delayTime.dispose(),this}};var ii=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["volume"]);super(t),this.name="Volume",this.input=this.output=new dt({context:this.context,gain:t.volume,units:"decibels"}),this.volume=this.output.gain,lt(this,"volume"),this._unmutedVolume=t.volume,this.mute=t.mute}static getDefaults(){return Object.assign(tt.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}};var Mm=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="Destination",this.input=new ii({context:this.context}),this.output=new dt({context:this.context}),this.volume=this.input.volume,ln(this.input,this.output,this.context.rawContext.destination),this.mute=t.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(tt.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(t){this.input.mute=t}chain(...t){return this.input.disconnect(),t.unshift(this.input),t.push(this.output),ln(...t),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}};Rr(i=>{i.destination=new Mm({context:i})});Ir(i=>{i.destination.dispose()});var wm=class extends tt{constructor(){super(...arguments),this.name="Listener",this.positionX=new Bt({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Bt({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Bt({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Bt({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Bt({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Bt({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Bt({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Bt({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Bt({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(tt.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}};Rr(i=>{i.listener=new wm({context:i})});Ir(i=>{i.listener.dispose()});function BI(i,t){return ie(this,arguments,void 0,function*(e,n,s=2,r=me().sampleRate){let o=me(),a=new vi(s,n,r);Pr(a),yield e(a);let c=a.render();Pr(o);let l=yield c;return new De(l)})}var Ys=class i extends xn{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;let t=L(i.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=t.baseUrl,Object.keys(t.urls).forEach(e=>{this._loadingCount++;let n=t.urls[e];this.add(e,n,this._bufferLoaded.bind(this,t.onload),t.onerror)})}static getDefaults(){return{baseUrl:"",onerror:Xt,onload:Xt,urls:{}}}has(t){return this._buffers.has(t.toString())}get(t){return yt(this.has(t),`ToneAudioBuffers has no buffer named: ${t}`),this._buffers.get(t.toString())}_bufferLoaded(t){this._loadingCount--,this._loadingCount===0&&t&&t()}get loaded(){return Array.from(this._buffers).every(([t,e])=>e.loaded)}add(t,e,n=Xt,s=Xt){return Mn(e)?(this.baseUrl&&e.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(t.toString(),new De(this.baseUrl+e,n,s))):this._buffers.set(t.toString(),new De(e,n,s)),this}dispose(){return super.dispose(),this._buffers.forEach(t=>t.dispose()),this._buffers.clear(),this}};var ho=class i extends Fn{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(t){return Ui(super._frequencyToUnits(t))}_ticksToUnits(t){return Ui(super._ticksToUnits(t))}_beatsToUnits(t){return Ui(super._beatsToUnits(t))}_secondsToUnits(t){return Ui(super._secondsToUnits(t))}toMidi(){return this.valueOf()}toFrequency(){return Xa(this.toMidi())}transpose(t){return new i(this.context,this.toMidi()+t)}};function VI(i,t){return new ho(me(),i,t)}var Me=class extends Le{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(t){return this._getPPQ()*t}_secondsToUnits(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(t){return t}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}};function zI(i,t){return new Me(me(),i,t)}var Tm=class extends qe{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new cn,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(t){return this._events.cancel(this.toSeconds(t)),this}_drawLoop(){let t=this.context.currentTime;this._events.forEachBefore(t+this.anticipation,e=>{t-e.time<=this.expiration&&e.callback(),this._events.remove(e)}),this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}};Rr(i=>{i.draw=new Tm({context:i})});Ir(i=>{i.draw.dispose()});var zl=class extends xn{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(t){yt(qt(t.time),"Events must have a time property"),yt(qt(t.duration),"Events must have a duration parameter"),t.time=t.time.valueOf();let e=new Am(t.time,t.time+t.duration,t);for(this._root===null?this._root=e:this._root.insert(e),this._length++;e!==null;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this}remove(t){if(this._root!==null){let e=[];this._root.search(t.time,e);for(let n of e)if(n.event===t){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(t){return this.forEachFrom(t,e=>this.remove(e)),this}_setRoot(t){this._root=t,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(t,e){t.parent!==null?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)}_removeNode(t){if(t.left===null&&t.right===null)this._replaceNodeInParent(t,null);else if(t.right===null)this._replaceNodeInParent(t,t.left);else if(t.left===null)this._replaceNodeInParent(t,t.right);else{let e=t.getBalance(),n,s=null;if(e>0)if(t.left.right===null)n=t.left,n.right=t.right,s=n;else{for(n=t.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,s=n.parent,n.left=t.left,n.right=t.right)}else if(t.right.left===null)n=t.right,n.left=t.left,s=n;else{for(n=t.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,s=n.parent,n.left=t.left,n.right=t.right)}t.parent!==null?t.isLeftChild()?t.parent.left=n:t.parent.right=n:this._setRoot(n),s&&this._rebalance(s)}t.dispose()}_rotateLeft(t){let e=t.parent,n=t.isLeftChild(),s=t.right;s&&(t.right=s.left,s.left=t),e!==null?n?e.left=s:e.right=s:this._setRoot(s)}_rotateRight(t){let e=t.parent,n=t.isLeftChild(),s=t.left;s&&(t.left=s.right,s.right=t),e!==null?n?e.left=s:e.right=s:this._setRoot(s)}_rebalance(t){let e=t.getBalance();e>1&&t.left?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&t.right&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))}get(t){if(this._root!==null){let e=[];if(this._root.search(t,e),e.length>0){let n=e[0];for(let s=1;s<e.length;s++)e[s].low>n.low&&(n=e[s]);return n.event}}return null}forEach(t){if(this._root!==null){let e=[];this._root.traverse(n=>e.push(n)),e.forEach(n=>{n.event&&t(n.event)})}return this}forEachAtTime(t,e){if(this._root!==null){let n=[];this._root.search(t,n),n.forEach(s=>{s.event&&e(s.event)})}return this}forEachFrom(t,e){if(this._root!==null){let n=[];this._root.searchAfter(t,n),n.forEach(s=>{s.event&&e(s.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(t=>t.dispose()),this._root=null,this}},Am=class{constructor(t,e,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=t,this.high=e,this.max=this.high}insert(t){t.low<=this.low?this.left===null?this.left=t:this.left.insert(t):this.right===null?this.right=t:this.right.insert(t)}search(t,e){t>this.max||(this.left!==null&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),!(this.low>t)&&this.right!==null&&this.right.search(t,e))}searchAfter(t,e){this.low>=t&&(e.push(this),this.left!==null&&this.left.searchAfter(t,e)),this.right!==null&&this.right.searchAfter(t,e)}traverse(t){t(this),this.left!==null&&this.left.traverse(t),this.right!==null&&this.right.traverse(t)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let t=0;return this.left!==null&&this.right!==null?t=this.left.height-this.right.height:this.left!==null?t=this.left.height+1:this.right!==null&&(t=-(this.right.height+1)),t}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(t){this._left=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(t){this._right=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}};var Db={};var Kd=class extends xn{constructor(t){super(),this.name="TimelineValue",this._timeline=new cn({memory:10}),this._initialValue=t}set(t,e){return this._timeline.add({value:t,time:e}),this}get(t){let e=this._timeline.get(t);return e?e.value:this._initialValue}};var en=class i extends tt{constructor(){super(L(i.getDefaults(),arguments,["context"]))}connect(t,e=0,n=0){return Dr(this,t,e,n),this}};var yn=class i extends en{constructor(){let t=L(i.getDefaults(),arguments,["mapping","length"]);super(t),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,Fe(t.mapping)||t.mapping instanceof Float32Array?this.curve=Float32Array.from(t.mapping):_m(t.mapping)&&this.setMap(t.mapping,t.length)}static getDefaults(){return Object.assign(bt.getDefaults(),{length:1024})}setMap(t,e=1024){let n=new Float32Array(e);for(let s=0,r=e;s<r;s++){let o=s/(r-1)*2-1;n[s]=t(o,s)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(t){this._shaper.curve=t}get oversample(){return this._shaper.oversample}set oversample(t){let e=["none","2x","4x"].some(n=>n.includes(t));yt(e,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.disconnect(),this}};var js=class i extends en{constructor(){let t=L(i.getDefaults(),arguments,["value"]);super(t),this.name="Pow",this._exponentScaler=this.input=this.output=new yn({context:this.context,mapping:this._expFunc(t.value),length:8192}),this._exponent=t.value}static getDefaults(){return Object.assign(en.getDefaults(),{value:1})}_expFunc(t){return e=>Math.pow(Math.abs(e),t)}get value(){return this._exponent}set value(t){this._exponent=t,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}};var Zs=class i{constructor(t,e){this.id=i._eventId++,this._remainderTime=0;let n=Object.assign(i.getDefaults(),e);this.transport=t,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:Xt,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(t){if(this.callback){let e=this.transport.bpm.getDurationOfTicks(1,t);this.callback(t+this._remainderTime*e),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}};Zs._eventId=0;var Qd=class i extends Zs{constructor(t,e){super(t,e),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);let n=Object.assign(i.getDefaults(),e);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},Zs.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(t){this._createEvents(t),super.invoke(t)}_createEvent(){return ao(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new Me(this.context,this._nextTick).toSeconds()):-1}_createEvents(t){ao(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Me(this.context,this._nextTick).toSeconds()))}_restart(t){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;let e=this.transport.getTicksAtTime(t);Ws(e,this.time)&&(this._nextTick=this.floatTime+Math.ceil((e-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}};var tp=class i extends qe{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="Transport",this._loop=new Kd(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new cn,this._repeatedEvents=new zl,this._syncedSignals=[],this._swingAmount=0,this._ppq=t.ppq,this._clock=new Or({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=t.ppq,this.bpm.setValueAtTime(t.bpm,0),lt(this,"bpm"),this._timeSignature=t.timeSignature,this._swingTicks=t.ppq/2}static getDefaults(){return Object.assign(qe.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(t,e){if(this._loop.get(t)&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._swingAmount>0&&e%this._ppq!==0&&e%(this._swingTicks*2)!==0){let n=e%(this._swingTicks*2)/(this._swingTicks*2),s=Math.sin(n*Math.PI)*this._swingAmount;t+=new Me(this.context,this._swingTicks*2/3).toSeconds()*s}Gd(!0),this._timeline.forEachAtTime(e,n=>n.invoke(t)),Gd(!1)}schedule(t,e){let n=new Zs(this,{callback:t,time:new Le(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(t,e,n,s=1/0){let r=new Qd(this,{callback:t,duration:new ni(this.context,s).toTicks(),interval:new ni(this.context,e).toTicks(),time:new Le(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(t,e){let n=new Zs(this,{callback:t,once:!0,time:new Le(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}clear(t){if(this._scheduledEvents.hasOwnProperty(t)){let e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this}_addEvent(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id}cancel(t=0){let e=this.toTicks(t);return this._timeline.forEachFrom(e,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(e,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(t,e)=>{e=new Me(this.context,e).toSeconds(),this.emit("start",t,e)}),this._clock.on("stop",t=>{this.emit("stop",t)}),this._clock.on("pause",t=>{this.emit("pause",t)})}get state(){return this._clock.getStateAtTime(this.now())}start(t,e){this.context.resume();let n;return qt(e)&&(n=this.toTicks(e)),this._clock.start(t,n),this}stop(t){return this._clock.stop(t),this}pause(t){return this._clock.pause(t),this}toggle(t){return t=this.toSeconds(t),this._clock.getStateAtTime(t)!=="started"?this.start(t):this.stop(t),this}get timeSignature(){return this._timeSignature}set timeSignature(t){Fe(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}get loopStart(){return new ni(this.context,this._loopStart,"i").toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t)}get loopEnd(){return new ni(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t)}get loop(){return this._loop.get(this.now())}set loop(t){this._loop.set(t,this.now())}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get swing(){return this._swingAmount}set swing(t){this._swingAmount=t}get swingSubdivision(){return new Me(this.context,this._swingTicks).toNotation()}set swingSubdivision(t){this._swingTicks=this.toTicks(t)}get position(){let t=this.now(),e=this._clock.getTicksAtTime(t);return new Me(this.context,e).toBarsBeatsSixteenths()}set position(t){let e=this.toTicks(t);this.ticks=e}get seconds(){return this._clock.seconds}set seconds(t){let e=this.now(),n=this._clock.frequency.timeToTicks(t,e);this.ticks=n}get progress(){if(this.loop){let t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(t){if(this._clock.ticks!==t){let e=this.now();if(this.state==="started"){let n=this._clock.getTicksAtTime(e),s=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,e),r=e+s;this.emit("stop",r),this._clock.setTicksAtTime(t,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",e),this._clock.setTicksAtTime(t,e)}}getTicksAtTime(t){return this._clock.getTicksAtTime(t)}getSecondsAtTime(t){return this._clock.getSecondsAtTime(t)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(t){this._clock.frequency.multiplier=t}nextSubdivision(t){if(t=this.toTicks(t),this.state!=="started")return 0;{let e=this.now(),n=this.getTicksAtTime(e),s=t-n%t;return this._clock.nextTickTime(s,e)}}syncSignal(t,e){let n=this.now(),s=this.bpm,r=1/(60/s.getValueAtTime(n)/this.PPQ),o=[];if(t.units==="time"){let c=.015625/r,l=new dt(c),h=new js(-1),u=new dt(c);s.chain(l,h,u),s=u,r=1/r,o=[l,h,u]}e||(t.getValueAtTime(n)!==0?e=t.getValueAtTime(n)/r:e=0);let a=new dt(e);return s.connect(a),a.connect(t._param),o.push(a),this._syncedSignals.push({initial:t.value,nodes:o,signal:t}),t.value=0,this}unsyncSignal(t){for(let e=this._syncedSignals.length-1;e>=0;e--){let n=this._syncedSignals[e];n.signal===t&&(n.nodes.forEach(s=>s.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(e,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),Xs(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}};qs.mixin(tp);Rr(i=>{i.transport=new tp({context:i})});Ir(i=>{i.transport.dispose()});var le=class extends tt{constructor(t){super(t),this.input=void 0,this._state=new Si("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=Xt,this._syncedStop=Xt,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new ii({context:this.context,mute:t.mute,volume:t.volume}),this.volume=this._volume.volume,lt(this,"volume"),this.onstop=t.onstop}static getDefaults(){return Object.assign(tt.getDefaults(),{mute:!1,onstop:Xt,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}_clampToCurrentTime(t){return this._synced?t:Math.max(t,this.context.currentTime)}start(t,e,n){let s=Qe(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(s=this._clampToCurrentTime(s),!this._synced&&this._state.getValueAtTime(s)==="started")yt(Ws(s,this._state.get(s).time),"Start time must be strictly greater than previous start time"),this._state.cancel(s),this._state.setStateAtTime("started",s),this.log("restart",s),this.restart(s,e,n);else if(this.log("start",s),this._state.setStateAtTime("started",s),this._synced){let r=this._state.get(s);r&&(r.offset=this.toSeconds(_n(e,0)),r.duration=n?this.toSeconds(n):void 0);let o=this.context.transport.schedule(a=>{this._start(a,e,n)},s);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>s&&this._syncedStart(this.now(),this.context.transport.seconds)}else Bl(this.context),this._start(s,e,n);return this}stop(t){let e=Qe(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(e=this._clampToCurrentTime(e),this._state.getValueAtTime(e)==="started"||qt(this._state.getNextState("started",e))){if(this.log("stop",e),!this._synced)this._stop(e);else{let n=this.context.transport.schedule(this._stop.bind(this),e);this._scheduled.push(n)}this._state.cancel(e),this._state.setStateAtTime("stopped",e)}return this}restart(t,e,n){return t=this.toSeconds(t),this._state.getValueAtTime(t)==="started"&&(this._state.cancel(t),this._restart(t,e,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(t,e)=>{if(Ws(e,0)){let n=this._state.get(e);if(n&&n.state==="started"&&n.time!==e){let s=e-this.toSeconds(n.time),r;n.duration&&(r=this.toSeconds(n.duration)-s),this._start(t,this.toSeconds(n.offset)+s,r)}}},this._syncedStop=t=>{let e=this.context.transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));this._state.getValueAtTime(e)==="started"&&this._stop(t)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(t=>this.context.transport.clear(t)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=Xt,this.unsync(),this._volume.dispose(),this._state.dispose(),this}};var bi=class i extends rs{constructor(){let t=L(i.getDefaults(),arguments,["url","onload"]);super(t),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,Xe(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new Bt({context:this.context,param:this._source.playbackRate,units:"positive",value:t.playbackRate}),this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this._buffer=new De(t.url,t.onload,t.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(rs.getDefaults(),{url:new De,loop:!1,loopEnd:0,loopStart:0,onload:Xt,onerror:Xt,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t}get curve(){return this._curve}set curve(t){this._curve=t}start(t,e,n,s=1){yt(this.buffer.loaded,"buffer is either not set or not loaded");let r=this.toSeconds(t);this._startGain(r,s),this.loop?e=_n(e,this.loopStart):e=_n(e,0);let o=Math.max(this.toSeconds(e),0);if(this.loop){let a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;Vl(o,a)&&(o=(o-c)%l+c),ei(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,ao(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),qt(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(r+a)}return this}_stopSource(t){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(t)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(t){this._source.loopStart=this.toSeconds(t)}get loopEnd(){return this._source.loopEnd}set loopEnd(t){this._source.loopEnd=this.toSeconds(t)}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._source.loop}set loop(t){this._source.loop=t,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}};var os=class i extends le{constructor(){let t=L(i.getDefaults(),arguments,["type"]);super(t),this.name="Noise",this._source=null,this._playbackRate=t.playbackRate,this.type=t.type,this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut}static getDefaults(){return Object.assign(le.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(t){if(yt(t in Ob,"Noise: invalid type: "+t),this._type!==t&&(this._type=t,this.state==="started")){let e=this.now();this._stop(e),this._start(e)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._source&&(this._source.playbackRate.value=t)}_start(t){let e=Ob[this._type];this._source=new bi({url:e,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(t),Math.random()*(e.duration-.001))}_stop(t){this._source&&(this._source.stop(this.toSeconds(t)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(t){this._stop(t),this._start(t)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}},ja=44100*5,Em=2,$s={brown:null,pink:null,white:null},Ob={get brown(){if(!$s.brown){let i=[];for(let t=0;t<Em;t++){let e=new Float32Array(ja);i[t]=e;let n=0;for(let s=0;s<ja;s++){let r=Math.random()*2-1;e[s]=(n+.02*r)/1.02,n=e[s],e[s]*=3.5}}$s.brown=new De().fromArray(i)}return $s.brown},get pink(){if(!$s.pink){let i=[];for(let t=0;t<Em;t++){let e=new Float32Array(ja);i[t]=e;let n,s,r,o,a,c,l;n=s=r=o=a=c=l=0;for(let h=0;h<ja;h++){let u=Math.random()*2-1;n=.99886*n+u*.0555179,s=.99332*s+u*.0750759,r=.969*r+u*.153852,o=.8665*o+u*.3104856,a=.55*a+u*.5329522,c=-.7616*c-u*.016898,e[h]=n+s+r+o+a+c+l+u*.5362,e[h]*=.11,l=u*.115926}}$s.pink=new De().fromArray(i)}return $s.pink},get white(){if(!$s.white){let i=[];for(let t=0;t<Em;t++){let e=new Float32Array(ja);i[t]=e;for(let n=0;n<ja;n++)e[n]=Math.random()*2-1}$s.white=new De().fromArray(i)}return $s.white}};var Cm=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["volume"]);super(t),this.name="UserMedia",this._volume=this.output=new ii({context:this.context,volume:t.volume}),this.volume=this._volume.volume,lt(this,"volume"),this.mute=t.mute}static getDefaults(){return Object.assign(tt.getDefaults(),{mute:!1,volume:0})}open(t){return ie(this,void 0,void 0,function*(){yt(i.supported,"UserMedia is not supported"),this.state==="started"&&this.close();let e=yield i.enumerateDevices();an(t)?this._device=e[t]:(this._device=e.find(r=>r.label===t||r.deviceId===t),!this._device&&e.length>0&&(this._device=e[0]),yt(qt(this._device),`No matching device ${t}`));let n={audio:{echoCancellation:!1,sampleRate:this.context.sampleRate,noiseSuppression:!1,mozNoiseSuppression:!1}};this._device&&(n.audio.deviceId=this._device.deviceId);let s=yield navigator.mediaDevices.getUserMedia(n);if(!this._stream){this._stream=s;let r=this.context.createMediaStreamSource(s);Xe(r,this.output),this._mediaStream=r}return this})}close(){return this._stream&&this._mediaStream&&(this._stream.getAudioTracks().forEach(t=>{t.stop()}),this._stream=void 0,this._mediaStream.disconnect(),this._mediaStream=void 0),this._device=void 0,this}static enumerateDevices(){return ie(this,void 0,void 0,function*(){return(yield navigator.mediaDevices.enumerateDevices()).filter(e=>e.kind==="audioinput")})}get state(){return this._stream&&this._stream.active?"started":"stopped"}get deviceId(){if(this._device)return this._device.deviceId}get groupId(){if(this._device)return this._device.groupId}get label(){if(this._device)return this._device.label}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}dispose(){return super.dispose(),this.close(),this._volume.dispose(),this.volume.dispose(),this}static get supported(){return qt(navigator.mediaDevices)&&qt(navigator.mediaDevices.getUserMedia)}};function oi(i,t){return ie(this,void 0,void 0,function*(){let e=t/i.context.sampleRate,n=new vi(1,e,i.context.sampleRate);return new i.constructor(Object.assign(i.get(),{frequency:2/e,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}var uo=class i extends rs{constructor(){let t=L(i.getDefaults(),arguments,["frequency","type"]);super(t),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],Xe(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new Bt({context:this.context,param:this._oscillator.frequency,units:"frequency",value:t.frequency}),this.detune=new Bt({context:this.context,param:this._oscillator.detune,units:"cents",value:t.detune}),lt(this,["frequency","detune"])}static getDefaults(){return Object.assign(rs.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(t){let e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._oscillator.start(e),this}_stopSource(t){this._oscillator.stop(t)}setPeriodicWave(t){return this._oscillator.setPeriodicWave(t),this}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}};var Ue=class i extends le{constructor(){let t=L(i.getDefaults(),arguments,["frequency","type"]);super(t),this.name="Oscillator",this._oscillator=null,this.frequency=new bt({context:this.context,units:"frequency",value:t.frequency}),lt(this,"frequency"),this.detune=new bt({context:this.context,units:"cents",value:t.detune}),lt(this,"detune"),this._partials=t.partials,this._partialCount=t.partialCount,this._type=t.type,t.partialCount&&t.type!=="custom"&&(this._type=this.baseType+t.partialCount.toString()),this.phase=t.phase}static getDefaults(){return Object.assign(le.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(t){let e=this.toSeconds(t),n=new uo({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(e)}_stop(t){let e=this.toSeconds(t);this._oscillator&&this._oscillator.stop(e)}_restart(t){let e=this.toSeconds(t);return this.log("restart",e),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(e),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return i._periodicWaveCache.find(e=>e.phase===this._phase&&wb(e.partials,this._partials));{let t=i._periodicWaveCache.find(e=>e.type===this._type&&e.phase===this._phase);return this._partialCount=t?t.partialCount:this._partialCount,t}}get type(){return this._type}set type(t){this._type=t;let e=["sine","square","sawtooth","triangle"].indexOf(t)!==-1;if(this._phase===0&&e)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=t);else{let n=this._getCachedPeriodicWave();if(qt(n)){let{partials:s,wave:r}=n;this._wave=r,this._partials=s,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{let[s,r]=this._getRealImaginary(t,this._phase),o=this.context.createPeriodicWave(s,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),i._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:s,type:this._type,wave:this._wave}),i._periodicWaveCache.length>100&&i._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(t){this.partialCount&&this._type!=="custom"&&t!=="custom"?this.type=t+this.partialCount:this.type=t}get partialCount(){return this._partialCount}set partialCount(t){Re(t,0);let e=this._type,n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(e=n[1]),this._type!=="custom")t===0?this.type=e:this.type=e+t.toString();else{let s=new Float32Array(t);this._partials.forEach((r,o)=>s[o]=r),this._partials=Array.from(s),this.type=this._type}}_getRealImaginary(t,e){let s=2048,r=new Float32Array(s),o=new Float32Array(s),a=1;if(t==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,s=a,this._partials.length===0)return[r,o]}else{let c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),t=c[1],a=Math.max(a,2),s=a):this._partialCount=0,this._partials=[]}for(let c=1;c<s;++c){let l=2/(c*Math.PI),h;switch(t){case"sine":h=c<=a?1:0,this._partials[c-1]=h;break;case"square":h=c&1?2*l:0,this._partials[c-1]=h;break;case"sawtooth":h=l*(c&1?1:-1),this._partials[c-1]=h;break;case"triangle":c&1?h=2*(l*l)*(c-1>>1&1?-1:1):h=0,this._partials[c-1]=h;break;case"custom":h=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+t)}h!==0?(r[c]=-h*Math.sin(e*c),o[c]=h*Math.cos(e*c)):(r[c]=0,o[c]=0)}return[r,o]}_inverseFFT(t,e,n){let s=0,r=t.length;for(let o=0;o<r;o++)s+=t[o]*Math.cos(o*n)+e[o]*Math.sin(o*n);return s}getInitialValue(){let[t,e]=this._getRealImaginary(this._type,0),n=0,s=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(t,e,o/r*s),n);return Hs(-this._inverseFFT(t,e,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(t){this._phase=t*Math.PI/180,this.type=this._type}asArray(){return ie(this,arguments,void 0,function*(t=1024){return oi(this,t)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}};Ue._periodicWaveCache=[];var Js=class extends en{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new yn({context:this.context,mapping:t=>(t+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}};var de=class i extends bt{constructor(){let t=L(i.getDefaults(),arguments,["value"]);super(t),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new dt({context:this.context,minValue:t.minValue,maxValue:t.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(bt.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}};var Za=class i extends le{constructor(){let t=L(i.getDefaults(),arguments,["frequency","type","modulationType"]);super(t),this.name="AMOscillator",this._modulationScale=new Js({context:this.context}),this._modulationNode=new dt({context:this.context}),this._carrier=new Ue({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new Ue({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new de({context:this.context,units:"positive",value:t.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),lt(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Ue.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){this._modulator.restart(t),this._carrier.restart(t)}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(){return ie(this,arguments,void 0,function*(t=1024){return oi(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}};var Fr=class i extends le{constructor(){let t=L(i.getDefaults(),arguments,["frequency","type","modulationType"]);super(t),this.name="FMOscillator",this._modulationNode=new dt({context:this.context,gain:0}),this._carrier=new Ue({context:this.context,detune:t.detune,frequency:0,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.detune=this._carrier.detune,this.frequency=new bt({context:this.context,units:"frequency",value:t.frequency}),this._modulator=new Ue({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new de({context:this.context,units:"positive",value:t.harmonicity}),this.modulationIndex=new de({context:this.context,units:"positive",value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),lt(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Ue.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){return this._modulator.restart(t),this._carrier.restart(t),this}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(){return ie(this,arguments,void 0,function*(t=1024){return oi(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}};var Lr=class i extends le{constructor(){let t=L(i.getDefaults(),arguments,["frequency","width"]);super(t),this.name="PulseOscillator",this._widthGate=new dt({context:this.context,gain:0}),this._thresh=new yn({context:this.context,mapping:e=>e<=0?-1:1}),this.width=new bt({context:this.context,units:"audioRange",value:t.width}),this._triangle=new Ue({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),lt(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(le.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(t){t=this.toSeconds(t),this._triangle.start(t),this._widthGate.gain.setValueAtTime(1,t)}_stop(t){t=this.toSeconds(t),this._triangle.stop(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(0,t)}_restart(t){this._triangle.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)}get phase(){return this._triangle.phase}set phase(t){this._triangle.phase=t}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(t){this._triangle.type=t}asArray(){return ie(this,arguments,void 0,function*(t=1024){return oi(this,t)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}};var $a=class i extends le{constructor(){let t=L(i.getDefaults(),arguments,["frequency","type","spread"]);super(t),this.name="FatOscillator",this._oscillators=[],this.frequency=new bt({context:this.context,units:"frequency",value:t.frequency}),this.detune=new bt({context:this.context,units:"cents",value:t.detune}),this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,lt(this,["frequency","detune"])}static getDefaults(){return Object.assign(Ue.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(t){t=this.toSeconds(t),this._forEach(e=>e.start(t))}_stop(t){t=this.toSeconds(t),this._forEach(e=>e.stop(t))}_restart(t){this._forEach(e=>e.restart(t))}_forEach(t){for(let e=0;e<this._oscillators.length;e++)t(this._oscillators[e],e)}get type(){return this._type}set type(t){this._type=t,this._forEach(e=>e.type=t)}get spread(){return this._spread}set spread(t){if(this._spread=t,this._oscillators.length>1){let e=-t/2,n=t/(this._oscillators.length-1);this._forEach((s,r)=>s.detune.value=e+n*r)}}get count(){return this._oscillators.length}set count(t){if(Re(t,1),this._oscillators.length!==t){this._forEach(e=>e.dispose()),this._oscillators=[];for(let e=0;e<t;e++){let n=new Ue({context:this.context,volume:-6-t*1.1,type:this._type,phase:this._phase+e/t*360,partialCount:this._partialCount,onstop:e===0?()=>this.onstop(this):Xt});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[e]=n}this.spread=this._spread,this.state==="started"&&this._forEach(e=>e.start())}}get phase(){return this._phase}set phase(t){this._phase=t,this._forEach((e,n)=>e.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(t){this._forEach(e=>e.baseType=t),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this._type="custom",this._forEach(e=>e.partials=t))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(t){this._partialCount=t,this._forEach(e=>e.partialCount=t),this._type=this._oscillators[0].type}asArray(){return ie(this,arguments,void 0,function*(t=1024){return oi(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(t=>t.dispose()),this}};var Ja=class i extends le{constructor(){let t=L(i.getDefaults(),arguments,["frequency","modulationFrequency"]);super(t),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new de({context:this.context,value:2}),this._pulse=new Lr({context:this.context,frequency:t.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new Ue({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),lt(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(le.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)}_stop(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)}_restart(t){this._modulator.restart(t),this._pulse.restart(t)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(t){this._modulator.phase=t}asArray(){return ie(this,arguments,void 0,function*(t=1024){return oi(this,t)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}};var Fb={am:Za,fat:$a,fm:Fr,oscillator:Ue,pulse:Lr,pwm:Ja},ki=class i extends le{constructor(){let t=L(i.getDefaults(),arguments,["frequency","type"]);super(t),this.name="OmniOscillator",this.frequency=new bt({context:this.context,units:"frequency",value:t.frequency}),this.detune=new bt({context:this.context,units:"cents",value:t.detune}),lt(this,["frequency","detune"]),this.set(t)}static getDefaults(){return Object.assign(Ue.getDefaults(),Fr.getDefaults(),Za.getDefaults(),$a.getDefaults(),Lr.getDefaults(),Ja.getDefaults())}_start(t){this._oscillator.start(t)}_stop(t){this._oscillator.stop(t)}_restart(t){return this._oscillator.restart(t),this}get type(){let t="";return["am","fm","fat"].some(e=>this._sourceType===e)&&(t=this._sourceType),t+this._oscillator.type}set type(t){t.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(3)):t==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):t==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=t)}get partials(){return this._oscillator.partials}set partials(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=t)}get partialCount(){return this._oscillator.partialCount}set partialCount(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=t)}set(t){return Reflect.has(t,"type")&&t.type&&(this.type=t.type),super.set(t),this}_createNewOscillator(t){if(t!==this._sourceType){this._sourceType=t;let e=Fb[t],n=this.now();if(this._oscillator){let s=this._oscillator;s.stop(n),this.context.setTimeout(()=>s.dispose(),this.blockTime)}this._oscillator=new e({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t}get sourceType(){return this._sourceType}set sourceType(t){let e="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(e=this._oscillator.type),t==="fm"?this.type="fm"+e:t==="am"?this.type="am"+e:t==="fat"?this.type="fat"+e:t==="oscillator"?this.type=e:t==="pulse"?this.type="pulse":t==="pwm"&&(this.type="pwm")}_getOscType(t,e){return t instanceof Fb[e]}get baseType(){return this._oscillator.baseType}set baseType(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&t!=="pulse"&&t!=="pwm"&&(this._oscillator.baseType=t)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(t){this._getOscType(this._oscillator,"fat")&&an(t)&&(this._oscillator.count=t)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(t){this._getOscType(this._oscillator,"fat")&&an(t)&&(this._oscillator.spread=t)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(t){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&Mn(t)&&(this._oscillator.modulationType=t)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return ie(this,arguments,void 0,function*(t=1024){return oi(this,t)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}};var as=class i extends bt{constructor(){super(L(i.getDefaults(),arguments,["value"])),this.override=!1,this.name="Add",this._sum=new dt({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,ln(this._constantSource,this._sum)}static getDefaults(){return Object.assign(bt.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}};var ai=class i extends en{constructor(){let t=L(i.getDefaults(),arguments,["min","max"]);super(t),this.name="Scale",this._mult=this.input=new de({context:this.context,value:t.max-t.min}),this._add=this.output=new as({context:this.context,value:t.min}),this._min=t.min,this._max=t.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(en.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(t){this._min=t,this._setRange()}get max(){return this._max}set max(t){this._max=t,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}};var Gl=class i extends en{constructor(){super(L(i.getDefaults(),arguments)),this.name="Zero",this._gain=new dt({context:this.context}),this.output=this._gain,this.input=void 0,Xe(this.context.getConstant(0),this._gain)}dispose(){return super.dispose(),jd(this.context.getConstant(0),this._gain),this}};var nn=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["frequency","min","max"]);super(t),this.name="LFO",this._stoppedValue=0,this._units="number",this.convert=!0,this._fromType=Bt.prototype._fromType,this._toType=Bt.prototype._toType,this._is=Bt.prototype._is,this._clampValue=Bt.prototype._clampValue,this._oscillator=new Ue(t),this.frequency=this._oscillator.frequency,this._amplitudeGain=new dt({context:this.context,gain:t.amplitude,units:"normalRange"}),this.amplitude=this._amplitudeGain.gain,this._stoppedSignal=new bt({context:this.context,units:"audioRange",value:0}),this._zeros=new Gl({context:this.context}),this._a2g=new Js({context:this.context}),this._scaler=this.output=new ai({context:this.context,max:t.max,min:t.min}),this.units=t.units,this.min=t.min,this.max=t.max,this._oscillator.chain(this._amplitudeGain,this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),lt(this,["amplitude","frequency"]),this.phase=t.phase}static getDefaults(){return Object.assign(Ue.getDefaults(),{amplitude:1,frequency:"4n",max:1,min:0,type:"sine",units:"number"})}start(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(0,t),this._oscillator.start(t),this}stop(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(this._stoppedValue,t),this._oscillator.stop(t),this}sync(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this}unsync(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this}_setStoppedValue(){this._stoppedValue=this._oscillator.getInitialValue(),this._stoppedSignal.value=this._stoppedValue}get min(){return this._toType(this._scaler.min)}set min(t){t=this._fromType(t),this._scaler.min=t}get max(){return this._toType(this._scaler.max)}set max(t){t=this._fromType(t),this._scaler.max=t}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t,this._setStoppedValue()}get partials(){return this._oscillator.partials}set partials(t){this._oscillator.partials=t,this._setStoppedValue()}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t,this._setStoppedValue()}get units(){return this._units}set units(t){let e=this.min,n=this.max;this._units=t,this.min=e,this.max=n}get state(){return this._oscillator.state}connect(t,e,n){return(t instanceof Bt||t instanceof bt)&&(this.convert=t.convert,this.units=t.units),Dr(this,t,e,n),this}dispose(){return super.dispose(),this._oscillator.dispose(),this._stoppedSignal.dispose(),this._zeros.dispose(),this._scaler.dispose(),this._a2g.dispose(),this._amplitudeGain.dispose(),this.amplitude.dispose(),this}};function ep(i,t=1/0){let e=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){Re(r,i,t),e.set(this,r)}})}}function ci(i,t=1/0){let e=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){Re(this.toSeconds(r),i,t),e.set(this,r)}})}}var po=class i extends le{constructor(){let t=L(i.getDefaults(),arguments,["url","onload"]);super(t),this.name="Player",this._activeSources=new Set,this._buffer=new De({onload:this._onload.bind(this,t.onload),onerror:t.onerror,reverse:t.reverse,url:t.url}),this.autostart=t.autostart,this._loop=t.loop,this._loopStart=t.loopStart,this._loopEnd=t.loopEnd,this._playbackRate=t.playbackRate,this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut}static getDefaults(){return Object.assign(le.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:Xt,onerror:Xt,playbackRate:1,reverse:!1})}load(t){return ie(this,void 0,void 0,function*(){return yield this._buffer.load(t),this._onload(),this})}_onload(t=Xt){t(),this.autostart&&this.start()}_onSourceEnd(t){this.onstop(this),this._activeSources.delete(t),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(t,e,n){return super.start(t,e,n),this}_start(t,e,n){this._loop?e=_n(e,this._loopStart):e=_n(e,0);let s=this.toSeconds(e),r=n;n=_n(n,Math.max(this._buffer.duration-s,0));let o=this.toSeconds(n);o=o/this._playbackRate,t=this.toSeconds(t);let a=new bi({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(t+o),this._state.setStateAtTime("stopped",t+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&Qe(r)?a.start(t,s):a.start(t,s,o-this.toSeconds(this.fadeOut))}_stop(t){let e=this.toSeconds(t);this._activeSources.forEach(n=>n.stop(e))}restart(t,e,n){return super.restart(t,e,n),this}_restart(t,e,n){var s;(s=[...this._activeSources].pop())===null||s===void 0||s.stop(t),this._start(t,e,n)}seek(t,e){let n=this.toSeconds(e);if(this._state.getValueAtTime(n)==="started"){let s=this.toSeconds(t);this._stop(n),this._start(n,s)}return this}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get loopStart(){return this._loopStart}set loopStart(t){this._loopStart=t,this.buffer.loaded&&Re(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopStart=t})}get loopEnd(){return this._loopEnd}set loopEnd(t){this._loopEnd=t,this.buffer.loaded&&Re(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopEnd=t})}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._loop}set loop(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(e=>{e.loop=t}),t)){let e=this._state.getNextState("stopped",this.now());e&&this._state.cancel(e.time)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t;let e=this.now(),n=this._state.getNextState("stopped",e);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(s=>s.cancelStop())),this._activeSources.forEach(s=>{s.playbackRate.setValueAtTime(t,e)})}get reverse(){return this._buffer.reverse}set reverse(t){this._buffer.reverse=t}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(t=>t.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}};Hn([ci(0)],po.prototype,"fadeIn",void 0);Hn([ci(0)],po.prototype,"fadeOut",void 0);var Rm=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["urls","onload"],"urls");super(t),this.name="Players",this.input=void 0,this._players=new Map,this._volume=this.output=new ii({context:this.context,volume:t.volume}),this.volume=this._volume.volume,lt(this,"volume"),this._buffers=new Ys({urls:t.urls,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.mute=t.mute,this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut}static getDefaults(){return Object.assign(le.getDefaults(),{baseUrl:"",fadeIn:0,fadeOut:0,mute:!1,onload:Xt,onerror:Xt,urls:{},volume:0})}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t,this._players.forEach(e=>{e.fadeIn=t})}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t,this._players.forEach(e=>{e.fadeOut=t})}get state(){return Array.from(this._players).some(([e,n])=>n.state==="started")?"started":"stopped"}has(t){return this._buffers.has(t)}player(t){if(yt(this.has(t),`No Player with the name ${t} exists on this object`),!this._players.has(t)){let e=new po({context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,url:this._buffers.get(t)}).connect(this.output);this._players.set(t,e)}return this._players.get(t)}get loaded(){return this._buffers.loaded}add(t,e,n){return yt(!this._buffers.has(t),"A buffer with that name already exists on this object"),this._buffers.add(t,e,n),this}stopAll(t){return this._players.forEach(e=>e.stop(t)),this}dispose(){return super.dispose(),this._volume.dispose(),this.volume.dispose(),this._players.forEach(t=>t.dispose()),this._buffers.dispose(),this}};var Im=class i extends le{constructor(){let t=L(i.getDefaults(),arguments,["url","onload"]);super(t),this.name="GrainPlayer",this._loopStart=0,this._loopEnd=0,this._activeSources=[],this.buffer=new De({onload:t.onload,onerror:t.onerror,reverse:t.reverse,url:t.url}),this._clock=new Or({context:this.context,callback:this._tick.bind(this),frequency:1/t.grainSize}),this._playbackRate=t.playbackRate,this._grainSize=t.grainSize,this._overlap=t.overlap,this.detune=t.detune,this.overlap=t.overlap,this.loop=t.loop,this.playbackRate=t.playbackRate,this.grainSize=t.grainSize,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.reverse=t.reverse,this._clock.on("stop",this._onstop.bind(this))}static getDefaults(){return Object.assign(le.getDefaults(),{onload:Xt,onerror:Xt,overlap:.1,grainSize:.2,playbackRate:1,detune:0,loop:!1,loopStart:0,loopEnd:0,reverse:!1})}_start(t,e,n){e=_n(e,0),e=this.toSeconds(e),t=this.toSeconds(t);let s=1/this._clock.frequency.getValueAtTime(t);this._clock.start(t,e/s),n&&this.stop(t+this.toSeconds(n))}restart(t,e,n){return super.restart(t,e,n),this}_restart(t,e,n){this._stop(t),this._start(t,e,n)}_stop(t){this._clock.stop(t)}_onstop(t){this._activeSources.forEach(e=>{e.fadeOut=0,e.stop(t)}),this.onstop(this)}_tick(t){let e=this._clock.getTicksAtTime(t),n=e*this._grainSize;if(this.log("offset",n),!this.loop&&n>this.buffer.duration){this.stop(t);return}let s=n<this._overlap?0:this._overlap,r=new bi({context:this.context,url:this.buffer,fadeIn:s,fadeOut:this._overlap,loop:this.loop,loopStart:this._loopStart,loopEnd:this._loopEnd,playbackRate:ss(this.detune/100)}).connect(this.output);r.start(t,this._grainSize*e),r.stop(t+this._grainSize/this.playbackRate),this._activeSources.push(r),r.onended=()=>{let o=this._activeSources.indexOf(r);o!==-1&&this._activeSources.splice(o,1)}}get playbackRate(){return this._playbackRate}set playbackRate(t){Re(t,.001),this._playbackRate=t,this.grainSize=this._grainSize}get loopStart(){return this._loopStart}set loopStart(t){this.buffer.loaded&&Re(this.toSeconds(t),0,this.buffer.duration),this._loopStart=this.toSeconds(t)}get loopEnd(){return this._loopEnd}set loopEnd(t){this.buffer.loaded&&Re(this.toSeconds(t),0,this.buffer.duration),this._loopEnd=this.toSeconds(t)}get reverse(){return this.buffer.reverse}set reverse(t){this.buffer.reverse=t}get grainSize(){return this._grainSize}set grainSize(t){this._grainSize=this.toSeconds(t),this._clock.frequency.setValueAtTime(this._playbackRate/this._grainSize,this.now())}get overlap(){return this._overlap}set overlap(t){let e=this.toSeconds(t);Re(e,0),this._overlap=e}get loaded(){return this.buffer.loaded}dispose(){return super.dispose(),this.buffer.dispose(),this._clock.dispose(),this._activeSources.forEach(t=>t.dispose()),this}};var Wl=class extends en{constructor(){super(...arguments),this.name="Abs",this._abs=new yn({context:this.context,mapping:t=>Math.abs(t)<.001?0:Math.abs(t)}),this.input=this._abs,this.output=this._abs}dispose(){return super.dispose(),this._abs.dispose(),this}};var Hl=class extends en{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new yn({context:this.context,mapping:t=>Math.abs(t)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}};var fo=class extends en{constructor(){super(...arguments),this.name="Negate",this._multiply=new de({context:this.context,value:-1}),this.input=this._multiply,this.output=this._multiply}dispose(){return super.dispose(),this._multiply.dispose(),this}};var cs=class i extends bt{constructor(){super(L(i.getDefaults(),arguments,["value"])),this.override=!1,this.name="Subtract",this._sum=new dt({context:this.context}),this.input=this._sum,this.output=this._sum,this._neg=new fo({context:this.context}),this.subtrahend=this._param,ln(this._constantSource,this._neg,this._sum)}static getDefaults(){return Object.assign(bt.getDefaults(),{value:0})}dispose(){return super.dispose(),this._neg.dispose(),this._sum.dispose(),this}};var ql=class i extends en{constructor(){super(L(i.getDefaults(),arguments)),this.name="GreaterThanZero",this._thresh=this.output=new yn({context:this.context,length:127,mapping:t=>t<=0?0:1}),this._scale=this.input=new de({context:this.context,value:1e4}),this._scale.connect(this._thresh)}dispose(){return super.dispose(),this._scale.dispose(),this._thresh.dispose(),this}};var Xl=class i extends bt{constructor(){let t=L(i.getDefaults(),arguments,["value"]);super(t),this.name="GreaterThan",this.override=!1,this._subtract=this.input=new cs({context:this.context,value:t.value}),this._gtz=this.output=new ql({context:this.context}),this.comparator=this._param=this._subtract.subtrahend,lt(this,"comparator"),this._subtract.connect(this._gtz)}static getDefaults(){return Object.assign(bt.getDefaults(),{value:0})}dispose(){return super.dispose(),this._gtz.dispose(),this._subtract.dispose(),this.comparator.dispose(),this}};var Yl=class i extends ai{constructor(){let t=L(i.getDefaults(),arguments,["min","max","exponent"]);super(t),this.name="ScaleExp",this.input=this._exp=new js({context:this.context,value:t.exponent}),this._exp.connect(this._mult)}static getDefaults(){return Object.assign(ai.getDefaults(),{exponent:1})}get exponent(){return this._exp.value}set exponent(t){this._exp.value=t}dispose(){return super.dispose(),this._exp.dispose(),this}};var Nm=class extends bt{constructor(){let t=L(bt.getDefaults(),arguments,["value","units"]);super(t),this.name="SyncedSignal",this.override=!1,this._lastVal=t.value,this._synced=this.context.transport.scheduleRepeat(this._onTick.bind(this),"1i"),this._syncedCallback=this._anchorValue.bind(this),this.context.transport.on("start",this._syncedCallback),this.context.transport.on("pause",this._syncedCallback),this.context.transport.on("stop",this._syncedCallback),this._constantSource.disconnect(),this._constantSource.stop(0),this._constantSource=this.output=new Ya({context:this.context,offset:t.value,units:t.units}).start(0),this.setValueAtTime(t.value,0)}_onTick(t){let e=super.getValueAtTime(this.context.transport.seconds);this._lastVal!==e&&(this._lastVal=e,this._constantSource.offset.setValueAtTime(e,t))}_anchorValue(t){let e=super.getValueAtTime(this.context.transport.seconds);this._lastVal=e,this._constantSource.offset.cancelAndHoldAtTime(t),this._constantSource.offset.setValueAtTime(e,t)}getValueAtTime(t){let e=new Le(this.context,t).toSeconds();return super.getValueAtTime(e)}setValueAtTime(t,e){let n=new Le(this.context,e).toSeconds();return super.setValueAtTime(t,n),this}linearRampToValueAtTime(t,e){let n=new Le(this.context,e).toSeconds();return super.linearRampToValueAtTime(t,n),this}exponentialRampToValueAtTime(t,e){let n=new Le(this.context,e).toSeconds();return super.exponentialRampToValueAtTime(t,n),this}setTargetAtTime(t,e,n){let s=new Le(this.context,e).toSeconds();return super.setTargetAtTime(t,s,n),this}cancelScheduledValues(t){let e=new Le(this.context,t).toSeconds();return super.cancelScheduledValues(e),this}setValueCurveAtTime(t,e,n,s){let r=new Le(this.context,e).toSeconds();return n=this.toSeconds(n),super.setValueCurveAtTime(t,r,n,s),this}cancelAndHoldAtTime(t){let e=new Le(this.context,t).toSeconds();return super.cancelAndHoldAtTime(e),this}setRampPoint(t){let e=new Le(this.context,t).toSeconds();return super.setRampPoint(e),this}exponentialRampTo(t,e,n){let s=new Le(this.context,n).toSeconds();return super.exponentialRampTo(t,e,s),this}linearRampTo(t,e,n){let s=new Le(this.context,n).toSeconds();return super.linearRampTo(t,e,s),this}targetRampTo(t,e,n){let s=new Le(this.context,n).toSeconds();return super.targetRampTo(t,e,s),this}dispose(){return super.dispose(),this.context.transport.clear(this._synced),this.context.transport.off("start",this._syncedCallback),this.context.transport.off("pause",this._syncedCallback),this.context.transport.off("stop",this._syncedCallback),this._constantSource.dispose(),this}};var Ye=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["attack","decay","sustain","release"]);super(t),this.name="Envelope",this._sig=new bt({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve}static getDefaults(){return Object.assign(tt.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(t,e){if(Mn(t))return t;{let n;for(n in np)if(np[n][e]===t)return n;return t}}_setCurve(t,e,n){if(Mn(n)&&Reflect.has(np,n)){let s=np[n];yi(s)?t!=="_decayCurve"&&(this[t]=s[e]):this[t]=s}else if(Fe(n)&&t!=="_decayCurve")this[t]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(t){this._setCurve("_attackCurve","In",t)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(t){this._setCurve("_releaseCurve","Out",t)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(t){this._setCurve("_decayCurve","Out",t)}triggerAttack(t,e=1){this.log("triggerAttack",t,e),t=this.toSeconds(t);let s=this.toSeconds(this.attack),r=this.toSeconds(this.decay),o=this.getValueAtTime(t);if(o>0){let a=1/s;s=(1-o)/a}if(s<this.sampleTime)this._sig.cancelScheduledValues(t),this._sig.setValueAtTime(e,t);else if(this._attackCurve==="linear")this._sig.linearRampTo(e,s,t);else if(this._attackCurve==="exponential")this._sig.targetRampTo(e,s,t);else{this._sig.cancelAndHoldAtTime(t);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,t,s,e)}if(r&&this.sustain<1){let a=e*this.sustain,c=t+s;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,r+c):this._sig.exponentialApproachValueAtTime(a,c,r)}return this}triggerRelease(t){this.log("triggerRelease",t),t=this.toSeconds(t);let e=this.getValueAtTime(t);if(e>0){let n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,t):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,t):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,t):(yt(Fe(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(this._releaseCurve,t,n,e))}return this}getValueAtTime(t){return this._sig.getValueAtTime(t)}triggerAttackRelease(t,e,n=1){return e=this.toSeconds(e),this.triggerAttack(e,n),this.triggerRelease(e+this.toSeconds(t)),this}cancel(t){return this._sig.cancelScheduledValues(this.toSeconds(t)),this}connect(t,e=0,n=0){return Dr(this,t,e,n),this}asArray(){return ie(this,arguments,void 0,function*(t=1024){let e=t/this.context.sampleRate,n=new vi(1,e,this.context.sampleRate),s=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=s+this.toSeconds(this.release),o=r*.1,a=r+o,c=new this.constructor(Object.assign(this.get(),{attack:e*this.toSeconds(this.attack)/a,decay:e*this.toSeconds(this.decay)/a,release:e*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(e*(s+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}};Hn([ci(0)],Ye.prototype,"attack",void 0);Hn([ci(0)],Ye.prototype,"decay",void 0);Hn([ep(0,1)],Ye.prototype,"sustain",void 0);Hn([ci(0)],Ye.prototype,"release",void 0);var np=(()=>{let t,e,n=[];for(t=0;t<128;t++)n[t]=Math.sin(t/127*(Math.PI/2));let s=[],r=6.4;for(t=0;t<127;t++){e=t/127;let d=Math.sin(e*(Math.PI*2)*r-Math.PI/2)+1;s[t]=d/10+e*.83}s[127]=1;let o=[],a=5;for(t=0;t<128;t++)o[t]=Math.ceil(t/127*a)/a;let c=[];for(t=0;t<128;t++)e=t/127,c[t]=.5*(1-Math.cos(Math.PI*e));let l=[];for(t=0;t<128;t++){e=t/127;let d=Math.pow(e,3)*4+.2,p=Math.cos(d*Math.PI*2*e);l[t]=Math.abs(p*(1-e))}function h(d){let p=new Array(d.length);for(let f=0;f<d.length;f++)p[f]=1-d[f];return p}function u(d){return d.slice(0).reverse()}return{bounce:{In:h(l),Out:l},cosine:{In:n,Out:u(n)},exponential:"exponential",linear:"linear",ripple:{In:s,Out:h(s)},sine:{In:c,Out:h(c)},step:{In:o,Out:h(o)}}})();var Ln=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments);super(t),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=e=>this._original_triggerRelease(e),this._volume=this.output=new ii({context:this.context,volume:t.volume}),this.volume=this._volume.volume,lt(this,"volume")}static getDefaults(){return Object.assign(tt.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let t=!1;return this._synced||(this._synced=!0,t=!0),t}_syncMethod(t,e){let n=this["_original_"+t]=this[t];this[t]=(...s)=>{let r=s[e],o=this.context.transport.schedule(a=>{s[e]=a,n.apply(this,s)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(t=>this.context.transport.clear(t)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(t,e,n,s){let r=this.toSeconds(n),o=this.toSeconds(e);return this.triggerAttack(t,r,s),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}};var je=class i extends Ln{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.portamento=t.portamento,this.onsilence=t.onsilence}static getDefaults(){return Object.assign(Ln.getDefaults(),{detune:0,onsilence:Xt,portamento:0})}triggerAttack(t,e,n=1){this.log("triggerAttack",t,e,n);let s=this.toSeconds(e);return this._triggerEnvelopeAttack(s,n),this.setNote(t,s),this}triggerRelease(t){this.log("triggerRelease",t);let e=this.toSeconds(t);return this._triggerEnvelopeRelease(e),this}setNote(t,e){let n=this.toSeconds(e),s=t instanceof Fn?t.toFrequency():t;if(this.portamento>0&&this.getLevelAtTime(n)>.05){let r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(s,r,n)}else this.frequency.setValueAtTime(s,n);return this}};Hn([ci(0)],je.prototype,"portamento",void 0);var Ks=class i extends Ye{constructor(){super(L(i.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new dt({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}};var ls=class i extends je{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="Synth",this.oscillator=new ki(Object.assign({context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)},t.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Ks(Object.assign({context:this.context},t.envelope)),this.oscillator.chain(this.envelope,this.output),lt(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(je.getDefaults(),{envelope:Object.assign(We(Ye.getDefaults(),Object.keys(tt.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(We(ki.getDefaults(),[...Object.keys(le.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(t,e){if(this.envelope.triggerAttack(t,e),this.oscillator.start(t),this.envelope.sustain===0){let n=this.toSeconds(this.envelope.attack),s=this.toSeconds(this.envelope.decay);this.oscillator.stop(t+n+s)}}_triggerEnvelopeRelease(t){this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release))}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}};var mo=class i extends je{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="ModulationSynth",this._carrier=new ls({context:this.context,oscillator:t.oscillator,envelope:t.envelope,onsilence:()=>this.onsilence(this),volume:-10}),this._modulator=new ls({context:this.context,oscillator:t.modulation,envelope:t.modulationEnvelope,volume:-10}),this.oscillator=this._carrier.oscillator,this.envelope=this._carrier.envelope,this.modulation=this._modulator.oscillator,this.modulationEnvelope=this._modulator.envelope,this.frequency=new bt({context:this.context,units:"frequency"}),this.detune=new bt({context:this.context,value:t.detune,units:"cents"}),this.harmonicity=new de({context:this.context,value:t.harmonicity,minValue:0}),this._modulationNode=new dt({context:this.context,gain:0}),lt(this,["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"])}static getDefaults(){return Object.assign(je.getDefaults(),{harmonicity:3,oscillator:Object.assign(We(ki.getDefaults(),[...Object.keys(le.getDefaults()),"frequency","detune"]),{type:"sine"}),envelope:Object.assign(We(Ye.getDefaults(),Object.keys(tt.getDefaults())),{attack:.01,decay:.01,sustain:1,release:.5}),modulation:Object.assign(We(ki.getDefaults(),[...Object.keys(le.getDefaults()),"frequency","detune"]),{type:"square"}),modulationEnvelope:Object.assign(We(Ye.getDefaults(),Object.keys(tt.getDefaults())),{attack:.5,decay:0,sustain:1,release:.5})})}_triggerEnvelopeAttack(t,e){this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t,e)}_triggerEnvelopeRelease(t){return this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this._carrier.dispose(),this._modulator.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._modulationNode.dispose(),this}};var Pm=class i extends mo{constructor(){super(L(i.getDefaults(),arguments)),this.name="AMSynth",this._modulationScale=new Js({context:this.context}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output)}dispose(){return super.dispose(),this._modulationScale.dispose(),this}};var Ka=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["frequency","type"]);super(t),this.name="BiquadFilter",this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new Bt({context:this.context,units:"number",value:t.Q,param:this._filter.Q}),this.frequency=new Bt({context:this.context,units:"frequency",value:t.frequency,param:this._filter.frequency}),this.detune=new Bt({context:this.context,units:"cents",value:t.detune,param:this._filter.detune}),this.gain=new Bt({context:this.context,units:"decibels",convert:!1,value:t.gain,param:this._filter.gain}),this.type=t.type}static getDefaults(){return Object.assign(tt.getDefaults(),{Q:1,type:"lowpass",frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(t){yt(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t)!==-1,`Invalid filter type: ${t}`),this._filter.type=t}getFrequencyResponse(t=128){let e=new Float32Array(t);for(let o=0;o<t;o++){let c=Math.pow(o/t,2)*19980+20;e[o]=c}let n=new Float32Array(t),s=new Float32Array(t),r=this.context.createBiquadFilter();return r.type=this.type,r.Q.value=this.Q.value,r.frequency.value=this.frequency.value,r.gain.value=this.gain.value,r.getFrequencyResponse(e,n,s),n}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}};var An=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["frequency","type","rolloff"]);super(t),this.name="Filter",this.input=new dt({context:this.context}),this.output=new dt({context:this.context}),this._filters=[],this._filters=[],this.Q=new bt({context:this.context,units:"positive",value:t.Q}),this.frequency=new bt({context:this.context,units:"frequency",value:t.frequency}),this.detune=new bt({context:this.context,units:"cents",value:t.detune}),this.gain=new bt({context:this.context,units:"decibels",convert:!1,value:t.gain}),this._type=t.type,this.rolloff=t.rolloff,lt(this,["detune","frequency","gain","Q"])}static getDefaults(){return Object.assign(tt.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:"lowpass"})}get type(){return this._type}set type(t){yt(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t)!==-1,`Invalid filter type: ${t}`),this._type=t,this._filters.forEach(n=>n.type=t)}get rolloff(){return this._rolloff}set rolloff(t){let e=an(t)?t:parseInt(t,10),n=[-12,-24,-48,-96],s=n.indexOf(e);yt(s!==-1,`rolloff can only be ${n.join(", ")}`),s+=1,this._rolloff=e,this.input.disconnect(),this._filters.forEach(r=>r.disconnect()),this._filters=new Array(s);for(let r=0;r<s;r++){let o=new Ka({context:this.context});o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[r]=o}this._internalChannels=this._filters,ln(this.input,...this._internalChannels,this.output)}getFrequencyResponse(t=128){let e=new Ka({context:this.context,frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),n=new Float32Array(t).map(()=>1);return this._filters.forEach(()=>{e.getFrequencyResponse(t).forEach((r,o)=>n[o]*=r)}),e.dispose(),n}dispose(){return super.dispose(),this._filters.forEach(t=>{t.dispose()}),Xs(this,["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}};var Qa=class i extends Ye{constructor(){let t=L(i.getDefaults(),arguments,["attack","decay","sustain","release"]);super(t),this.name="FrequencyEnvelope",this._octaves=t.octaves,this._baseFrequency=this.toFrequency(t.baseFrequency),this._exponent=this.input=new js({context:this.context,value:t.exponent}),this._scale=this.output=new ai({context:this.context,min:this._baseFrequency,max:this._baseFrequency*Math.pow(2,this._octaves)}),this._sig.chain(this._exponent,this._scale)}static getDefaults(){return Object.assign(Ye.getDefaults(),{baseFrequency:200,exponent:1,octaves:4})}get baseFrequency(){return this._baseFrequency}set baseFrequency(t){let e=this.toFrequency(t);Re(e,0),this._baseFrequency=e,this._scale.min=this._baseFrequency,this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(t){this._octaves=t,this._scale.max=this._baseFrequency*Math.pow(2,t)}get exponent(){return this._exponent.value}set exponent(t){this._exponent.value=t}dispose(){return super.dispose(),this._exponent.dispose(),this._scale.dispose(),this}};var Ur=class i extends je{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="MonoSynth",this.oscillator=new ki(Object.assign(t.oscillator,{context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)})),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.filter=new An(Object.assign(t.filter,{context:this.context})),this.filterEnvelope=new Qa(Object.assign(t.filterEnvelope,{context:this.context})),this.envelope=new Ks(Object.assign(t.envelope,{context:this.context})),this.oscillator.chain(this.filter,this.envelope,this.output),this.filterEnvelope.connect(this.filter.frequency),lt(this,["oscillator","frequency","detune","filter","filterEnvelope","envelope"])}static getDefaults(){return Object.assign(je.getDefaults(),{envelope:Object.assign(We(Ye.getDefaults(),Object.keys(tt.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.9}),filter:Object.assign(We(An.getDefaults(),Object.keys(tt.getDefaults())),{Q:1,rolloff:-12,type:"lowpass"}),filterEnvelope:Object.assign(We(Qa.getDefaults(),Object.keys(tt.getDefaults())),{attack:.6,baseFrequency:200,decay:.2,exponent:2,octaves:3,release:2,sustain:.5}),oscillator:Object.assign(We(ki.getDefaults(),Object.keys(le.getDefaults())),{type:"sawtooth"})})}_triggerEnvelopeAttack(t,e=1){if(this.envelope.triggerAttack(t,e),this.filterEnvelope.triggerAttack(t),this.oscillator.start(t),this.envelope.sustain===0){let n=this.toSeconds(this.envelope.attack),s=this.toSeconds(this.envelope.decay);this.oscillator.stop(t+n+s)}}_triggerEnvelopeRelease(t){this.envelope.triggerRelease(t),this.filterEnvelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release))}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this.filterEnvelope.dispose(),this.filter.dispose(),this}};var Dm=class i extends je{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="DuoSynth",this.voice0=new Ur(Object.assign(t.voice0,{context:this.context,onsilence:()=>this.onsilence(this)})),this.voice1=new Ur(Object.assign(t.voice1,{context:this.context})),this.harmonicity=new de({context:this.context,units:"positive",value:t.harmonicity}),this._vibrato=new nn({frequency:t.vibratoRate,context:this.context,min:-50,max:50}),this._vibrato.start(),this.vibratoRate=this._vibrato.frequency,this._vibratoGain=new dt({context:this.context,units:"normalRange",gain:t.vibratoAmount}),this.vibratoAmount=this._vibratoGain.gain,this.frequency=new bt({context:this.context,units:"frequency",value:440}),this.detune=new bt({context:this.context,units:"cents",value:t.detune}),this.frequency.connect(this.voice0.frequency),this.frequency.chain(this.harmonicity,this.voice1.frequency),this._vibrato.connect(this._vibratoGain),this._vibratoGain.fan(this.voice0.detune,this.voice1.detune),this.detune.fan(this.voice0.detune,this.voice1.detune),this.voice0.connect(this.output),this.voice1.connect(this.output),lt(this,["voice0","voice1","frequency","vibratoAmount","vibratoRate"])}getLevelAtTime(t){return t=this.toSeconds(t),this.voice0.envelope.getValueAtTime(t)+this.voice1.envelope.getValueAtTime(t)}static getDefaults(){return On(je.getDefaults(),{vibratoAmount:.5,vibratoRate:5,harmonicity:1.5,voice0:On(We(Ur.getDefaults(),Object.keys(je.getDefaults())),{filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}}),voice1:On(We(Ur.getDefaults(),Object.keys(je.getDefaults())),{filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}})})}_triggerEnvelopeAttack(t,e){this.voice0._triggerEnvelopeAttack(t,e),this.voice1._triggerEnvelopeAttack(t,e)}_triggerEnvelopeRelease(t){return this.voice0._triggerEnvelopeRelease(t),this.voice1._triggerEnvelopeRelease(t),this}dispose(){return super.dispose(),this.voice0.dispose(),this.voice1.dispose(),this.frequency.dispose(),this.detune.dispose(),this._vibrato.dispose(),this.vibratoRate.dispose(),this._vibratoGain.dispose(),this.harmonicity.dispose(),this}};var Om=class i extends mo{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="FMSynth",this.modulationIndex=new de({context:this.context,value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output)}static getDefaults(){return Object.assign(mo.getDefaults(),{modulationIndex:10})}dispose(){return super.dispose(),this.modulationIndex.dispose(),this}};var Lb=[1,1.483,1.932,2.546,2.63,3.897],Fm=class i extends je{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="MetalSynth",this._oscillators=[],this._freqMultipliers=[],this.detune=new bt({context:this.context,units:"cents",value:t.detune}),this.frequency=new bt({context:this.context,units:"frequency"}),this._amplitude=new dt({context:this.context,gain:0}).connect(this.output),this._highpass=new An({Q:0,context:this.context,type:"highpass"}).connect(this._amplitude);for(let e=0;e<Lb.length;e++){let n=new Fr({context:this.context,harmonicity:t.harmonicity,modulationIndex:t.modulationIndex,modulationType:"square",onstop:e===0?()=>this.onsilence(this):Xt,type:"square"});n.connect(this._highpass),this._oscillators[e]=n;let s=new de({context:this.context,value:Lb[e]});this._freqMultipliers[e]=s,this.frequency.chain(s,n.frequency),this.detune.connect(n.detune)}this._filterFreqScaler=new ai({context:this.context,max:7e3,min:this.toFrequency(t.resonance)}),this.envelope=new Ye({attack:t.envelope.attack,attackCurve:"linear",context:this.context,decay:t.envelope.decay,release:t.envelope.release,sustain:0}),this.envelope.chain(this._filterFreqScaler,this._highpass.frequency),this.envelope.connect(this._amplitude.gain),this._octaves=t.octaves,this.octaves=t.octaves}static getDefaults(){return On(je.getDefaults(),{envelope:Object.assign(We(Ye.getDefaults(),Object.keys(tt.getDefaults())),{attack:.001,decay:1.4,release:.2}),harmonicity:5.1,modulationIndex:32,octaves:1.5,resonance:4e3})}_triggerEnvelopeAttack(t,e=1){return this.envelope.triggerAttack(t,e),this._oscillators.forEach(n=>n.start(t)),this.envelope.sustain===0&&this._oscillators.forEach(n=>{n.stop(t+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay))}),this}_triggerEnvelopeRelease(t){return this.envelope.triggerRelease(t),this._oscillators.forEach(e=>e.stop(t+this.toSeconds(this.envelope.release))),this}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}get modulationIndex(){return this._oscillators[0].modulationIndex.value}set modulationIndex(t){this._oscillators.forEach(e=>e.modulationIndex.value=t)}get harmonicity(){return this._oscillators[0].harmonicity.value}set harmonicity(t){this._oscillators.forEach(e=>e.harmonicity.value=t)}get resonance(){return this._filterFreqScaler.min}set resonance(t){this._filterFreqScaler.min=this.toFrequency(t),this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(t){this._octaves=t,this._filterFreqScaler.max=this._filterFreqScaler.min*Math.pow(2,t)}dispose(){return super.dispose(),this._oscillators.forEach(t=>t.dispose()),this._freqMultipliers.forEach(t=>t.dispose()),this.frequency.dispose(),this.detune.dispose(),this._filterFreqScaler.dispose(),this._amplitude.dispose(),this.envelope.dispose(),this._highpass.dispose(),this}};var jl=class i extends ls{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=t.pitchDecay,this.octaves=t.octaves,lt(this,["oscillator","envelope"])}static getDefaults(){return On(je.getDefaults(),ls.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(t,e){let n=this.toSeconds(e),s=this.toFrequency(t instanceof Fn?t.toFrequency():t),r=s*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(s,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}};Hn([ep(0)],jl.prototype,"octaves",void 0);Hn([ci(0)],jl.prototype,"pitchDecay",void 0);var Lm=class i extends Ln{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="NoiseSynth",this.noise=new os(Object.assign({context:this.context},t.noise)),this.envelope=new Ks(Object.assign({context:this.context},t.envelope)),this.noise.chain(this.envelope,this.output)}static getDefaults(){return Object.assign(Ln.getDefaults(),{envelope:Object.assign(We(Ye.getDefaults(),Object.keys(tt.getDefaults())),{decay:.1,sustain:0}),noise:Object.assign(We(os.getDefaults(),Object.keys(le.getDefaults())),{type:"white"})})}triggerAttack(t,e=1){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.noise.start(t),this.envelope.sustain===0&&this.noise.stop(t+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this}triggerRelease(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.noise.stop(t+this.toSeconds(this.envelope.release)),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0)),this}triggerAttackRelease(t,e,n=1){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,n),this.triggerRelease(e+t),this}dispose(){return super.dispose(),this.noise.dispose(),this.envelope.dispose(),this}};var Um=new Set;function tc(i){Um.add(i)}function ip(i,t){let e=`registerProcessor("${i}", ${t})`;Um.add(e)}function Ub(){return Array.from(Um).join(`
`)}var go=class extends tt{constructor(t){super(t),this.name="ToneAudioWorklet",this.workletOptions={},this.onprocessorerror=Xt;let e=URL.createObjectURL(new Blob([Ub()],{type:"text/javascript"})),n=this._audioWorkletName();this._dummyGain=this.context.createGain(),this._dummyParam=this._dummyGain.gain,this.context.addAudioWorkletModule(e).then(()=>{this.disposed||(this._worklet=this.context.createAudioWorkletNode(n,this.workletOptions),this._worklet.onprocessorerror=this.onprocessorerror.bind(this),this.onReady(this._worklet))})}dispose(){return super.dispose(),this._dummyGain.disconnect(),this._worklet&&(this._worklet.port.postMessage("dispose"),this._worklet.disconnect()),this}};var GI=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;tc(GI);var WI=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;tc(WI);var HI=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;tc(HI);var km="feedback-comb-filter",qI=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;ip(km,qI);var _o=class i extends go{constructor(){let t=L(i.getDefaults(),arguments,["delayTime","resonance"]);super(t),this.name="FeedbackCombFilter",this.input=new dt({context:this.context}),this.output=new dt({context:this.context}),this.delayTime=new Bt({context:this.context,value:t.delayTime,units:"time",minValue:0,maxValue:1,param:this._dummyParam,swappable:!0}),this.resonance=new Bt({context:this.context,value:t.resonance,units:"normalRange",param:this._dummyParam,swappable:!0}),lt(this,["resonance","delayTime"])}_audioWorkletName(){return km}static getDefaults(){return Object.assign(tt.getDefaults(),{delayTime:.1,resonance:.5})}onReady(t){ln(this.input,t,this.output);let e=t.parameters.get("delayTime");this.delayTime.setParam(e);let n=t.parameters.get("feedback");this.resonance.setParam(n)}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.delayTime.dispose(),this.resonance.dispose(),this}};var xo=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["frequency","type"]);super(t),this.name="OnePoleFilter",this._frequency=t.frequency,this._type=t.type,this.input=new dt({context:this.context}),this.output=new dt({context:this.context}),this._createFilter()}static getDefaults(){return Object.assign(tt.getDefaults(),{frequency:880,type:"lowpass"})}_createFilter(){let t=this._filter,e=this.toFrequency(this._frequency),n=1/(2*Math.PI*e);if(this._type==="lowpass"){let s=1/(n*this.context.sampleRate),r=s-1;this._filter=this.context.createIIRFilter([s,0],[1,r])}else{let s=1/(n*this.context.sampleRate)-1;this._filter=this.context.createIIRFilter([1,-1],[1,s])}this.input.chain(this._filter,this.output),t&&this.context.setTimeout(()=>{this.disposed||(this.input.disconnect(t),t.disconnect())},this.blockTime)}get frequency(){return this._frequency}set frequency(t){this._frequency=t,this._createFilter()}get type(){return this._type}set type(t){this._type=t,this._createFilter()}getFrequencyResponse(t=128){let e=new Float32Array(t);for(let r=0;r<t;r++){let a=Math.pow(r/t,2)*19980+20;e[r]=a}let n=new Float32Array(t),s=new Float32Array(t);return this._filter.getFrequencyResponse(e,n,s),n}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this._filter.disconnect(),this}};var yo=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["delayTime","resonance","dampening"]);super(t),this.name="LowpassCombFilter",this._combFilter=this.output=new _o({context:this.context,delayTime:t.delayTime,resonance:t.resonance}),this.delayTime=this._combFilter.delayTime,this.resonance=this._combFilter.resonance,this._lowpass=this.input=new xo({context:this.context,frequency:t.dampening,type:"lowpass"}),this._lowpass.connect(this._combFilter)}static getDefaults(){return Object.assign(tt.getDefaults(),{dampening:3e3,delayTime:.1,resonance:.5})}get dampening(){return this._lowpass.frequency}set dampening(t){this._lowpass.frequency=t}dispose(){return super.dispose(),this._combFilter.dispose(),this._lowpass.dispose(),this}};var Bm=class i extends Ln{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="PluckSynth",this._noise=new os({context:this.context,type:"pink"}),this.attackNoise=t.attackNoise,this._lfcf=new yo({context:this.context,dampening:t.dampening,resonance:t.resonance}),this.resonance=t.resonance,this.release=t.release,this._noise.connect(this._lfcf),this._lfcf.connect(this.output)}static getDefaults(){return On(Ln.getDefaults(),{attackNoise:1,dampening:4e3,resonance:.7,release:1})}get dampening(){return this._lfcf.dampening}set dampening(t){this._lfcf.dampening=t}triggerAttack(t,e){let n=this.toFrequency(t);e=this.toSeconds(e);let s=1/n;return this._lfcf.delayTime.setValueAtTime(s,e),this._noise.start(e),this._noise.stop(e+s*this.attackNoise),this._lfcf.resonance.cancelScheduledValues(e),this._lfcf.resonance.setValueAtTime(this.resonance,e),this}triggerRelease(t){return this._lfcf.resonance.linearRampTo(0,this.release,t),this}dispose(){return super.dispose(),this._noise.dispose(),this._lfcf.dispose(),this}};var Vm=class i extends Ln{constructor(){let t=L(i.getDefaults(),arguments,["voice","options"]);super(t),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0,this._syncedRelease=s=>this.releaseAll(s),yt(!an(t.voice),"DEPRECATED: The polyphony count is no longer the first argument.");let e=t.voice.getDefaults();this.options=Object.assign(e,t.options),this.voice=t.voice,this.maxPolyphony=t.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();let n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(Ln.getDefaults(),{maxPolyphony:32,options:{},voice:ls})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(t){this._availableVoices.push(t);let e=this._activeVoices.findIndex(n=>n.voice===t);this._activeVoices.splice(e,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){let t=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return yt(t instanceof je,"Voice must extend Monophonic class"),t.connect(this.output),this._voices.push(t),t}else Gs("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){let t=this._availableVoices.shift(),e=this._voices.indexOf(t);this._voices.splice(e,1),this.context.isOffline||t.dispose()}}_triggerAttack(t,e,n){t.forEach(s=>{let r=new ho(this.context,s).toMidi(),o=this._getNextAvailableVoice();o&&(o.triggerAttack(s,e,n),this._activeVoices.push({midi:r,voice:o,released:!1}),this.log("triggerAttack",s,e))})}_triggerRelease(t,e){t.forEach(n=>{let s=new ho(this.context,n).toMidi(),r=this._activeVoices.find(({midi:o,released:a})=>o===s&&!a);r&&(r.voice.triggerRelease(e),r.released=!0,this.log("triggerRelease",n,e))})}_scheduleEvent(t,e,n,s){yt(!this.disposed,"Synth was already disposed"),n<=this.now()?t==="attack"?this._triggerAttack(e,n,s):this._triggerRelease(e,n):this.context.setTimeout(()=>{this.disposed||this._scheduleEvent(t,e,n,s)},n-this.now())}triggerAttack(t,e,n){Array.isArray(t)||(t=[t]);let s=this.toSeconds(e);return this._scheduleEvent("attack",t,s,n),this}triggerRelease(t,e){Array.isArray(t)||(t=[t]);let n=this.toSeconds(e);return this._scheduleEvent("release",t,n),this}triggerAttackRelease(t,e,n,s){let r=this.toSeconds(n);if(this.triggerAttack(t,r,s),Fe(e)){yt(Fe(t),"If the duration is an array, the notes must also be an array"),t=t;for(let o=0;o<t.length;o++){let a=e[Math.min(o,e.length-1)],c=this.toSeconds(a);yt(c>0,"The duration must be greater than 0"),this.triggerRelease(t[o],r+c)}}else{let o=this.toSeconds(e);yt(o>0,"The duration must be greater than 0"),this.triggerRelease(t,r+o)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}set(t){let e=We(t,["onsilence","context"]);return this.options=On(this.options,e),this._voices.forEach(n=>n.set(e)),this._dummyVoice.set(e),this}get(){return this._dummyVoice.get()}releaseAll(t){let e=this.toSeconds(t);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(e)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(t=>t.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}};var Zl=class i extends Ln{constructor(){let t=L(i.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(t),this.name="Sampler",this._activeSources=new Map;let e={};Object.keys(t.urls).forEach(n=>{let s=parseInt(n,10);if(yt(Ha(n)||an(s)&&isFinite(s),`url key is neither a note or midi pitch: ${n}`),Ha(n)){let r=new Fn(this.context,n).toMidi();e[r]=t.urls[n]}else an(s)&&isFinite(s)&&(e[s]=t.urls[s])}),this._buffers=new Ys({urls:e,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.attack=t.attack,this.release=t.release,this.curve=t.curve,this._buffers.loaded&&Promise.resolve().then(t.onload)}static getDefaults(){return Object.assign(Ln.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:Xt,onerror:Xt,release:.1,urls:{}})}_findClosest(t){let n=0;for(;n<96;){if(this._buffers.has(t+n))return-n;if(this._buffers.has(t-n))return n;n++}throw new Error(`No available buffers for note: ${t}`)}triggerAttack(t,e,n=1){return this.log("triggerAttack",t,e,n),Array.isArray(t)||(t=[t]),t.forEach(s=>{let r=bm(new Fn(this.context,s).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,h=this._buffers.get(l),u=ss(c+a),d=new bi({url:h,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:u}).connect(this.output);d.start(e,0,h.duration/u,n),Fe(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){let p=this._activeSources.get(o),f=p.indexOf(d);f!==-1&&p.splice(f,1)}}}),this}triggerRelease(t,e){return this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]),t.forEach(n=>{let s=new Fn(this.context,n).toMidi();if(this._activeSources.has(s)&&this._activeSources.get(s).length){let r=this._activeSources.get(s);e=this.toSeconds(e),r.forEach(o=>{o.stop(e)}),this._activeSources.set(s,[])}}),this}releaseAll(t){let e=this.toSeconds(t);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(e)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(t,e,n,s=1){let r=this.toSeconds(n);return this.triggerAttack(t,r,s),Fe(e)?(yt(Fe(t),"notes must be an array when duration is array"),t.forEach((o,a)=>{let c=e[Math.min(a,e.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(t,r+this.toSeconds(e)),this}add(t,e,n){if(yt(Ha(t)||isFinite(t),`note must be a pitch or midi: ${t}`),Ha(t)){let s=new Fn(this.context,t).toMidi();this._buffers.add(s,e,n)}else this._buffers.add(t,e,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(t=>{t.forEach(e=>e.dispose())}),this._activeSources.clear(),this}};Hn([ci(0)],Zl.prototype,"attack",void 0);Hn([ci(0)],Zl.prototype,"release",void 0);var Mi=class i extends qe{constructor(){let t=L(i.getDefaults(),arguments,["callback","value"]);super(t),this.name="ToneEvent",this._state=new Si("stopped"),this._startOffset=0,this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._playbackRate=t.playbackRate,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this._playbackRate=t.playbackRate,this._state.increasing=!0,this._rescheduleEvents()}static getDefaults(){return Object.assign(qe.getDefaults(),{callback:Xt,humanize:!1,loop:!1,loopEnd:"1m",loopStart:0,mute:!1,playbackRate:1,probability:1,value:null})}_rescheduleEvents(t=-1){this._state.forEachFrom(t,e=>{let n;if(e.state==="started"){e.id!==-1&&this.context.transport.clear(e.id);let s=e.time+Math.round(this.startOffset/this._playbackRate);if(this._loop===!0||an(this._loop)&&this._loop>1){n=1/0,an(this._loop)&&(n=this._loop*this._getLoopDuration());let r=this._state.getAfter(s);r!==null&&(n=Math.min(n,r.time-s)),n!==1/0&&(n=new Me(this.context,n));let o=new Me(this.context,this._getLoopDuration());e.id=this.context.transport.scheduleRepeat(this._tick.bind(this),o,new Me(this.context,s),n)}else e.id=this.context.transport.schedule(this._tick.bind(this),new Me(this.context,s))}})}get state(){return this._state.getValueAtTime(this.context.transport.ticks)}get startOffset(){return this._startOffset}set startOffset(t){this._startOffset=t}get probability(){return this._probability}set probability(t){this._probability=t}get humanize(){return this._humanize}set humanize(t){this._humanize=t}start(t){let e=this.toTicks(t);return this._state.getValueAtTime(e)==="stopped"&&(this._state.add({id:-1,state:"started",time:e}),this._rescheduleEvents(e)),this}stop(t){this.cancel(t);let e=this.toTicks(t);if(this._state.getValueAtTime(e)==="started"){this._state.setStateAtTime("stopped",e,{id:-1});let n=this._state.getBefore(e),s=e;n!==null&&(s=n.time),this._rescheduleEvents(s)}return this}cancel(t){t=_n(t,-1/0);let e=this.toTicks(t);return this._state.forEachFrom(e,n=>{this.context.transport.clear(n.id)}),this._state.cancel(e),this}_tick(t){let e=this.context.transport.getTicksAtTime(t);if(!this.mute&&this._state.getValueAtTime(e)==="started"){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){let n=.02;kl(this.humanize)||(n=this.toSeconds(this.humanize)),t+=(Math.random()*2-1)*n}this.callback(t,this.value)}}_getLoopDuration(){return(this._loopEnd-this._loopStart)/this._playbackRate}get loop(){return this._loop}set loop(t){this._loop=t,this._rescheduleEvents()}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._rescheduleEvents()}get loopEnd(){return new Me(this.context,this._loopEnd).toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}get loopStart(){return new Me(this.context,this._loopStart).toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}get progress(){if(this._loop){let t=this.context.transport.ticks,e=this._state.get(t);if(e!==null&&e.state==="started"){let n=this._getLoopDuration();return(t-e.time)%n/n}else return 0}else return 0}dispose(){return super.dispose(),this.cancel(),this._state.dispose(),this}};var ec=class i extends qe{constructor(){let t=L(i.getDefaults(),arguments,["callback","interval"]);super(t),this.name="Loop",this._event=new Mi({context:this.context,callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability,humanize:t.humanize}),this.callback=t.callback,this.iterations=t.iterations}static getDefaults(){return Object.assign(qe.getDefaults(),{interval:"4n",callback:Xt,playbackRate:1,iterations:1/0,probability:1,mute:!1,humanize:!1})}start(t){return this._event.start(t),this}stop(t){return this._event.stop(t),this}cancel(t){return this._event.cancel(t),this}_tick(t){this.callback(t)}get state(){return this._event.state}get progress(){return this._event.progress}get interval(){return this._event.loopEnd}set interval(t){this._event.loopEnd=t}get playbackRate(){return this._event.playbackRate}set playbackRate(t){this._event.playbackRate=t}get humanize(){return this._event.humanize}set humanize(t){this._event.humanize=t}get probability(){return this._event.probability}set probability(t){this._event.probability=t}get mute(){return this._event.mute}set mute(t){this._event.mute=t}get iterations(){return this._event.loop===!0?1/0:this._event.loop}set iterations(t){t===1/0?this._event.loop=!0:this._event.loop=t}dispose(){return super.dispose(),this._event.dispose(),this}};var $l=class i extends Mi{constructor(){let t=L(i.getDefaults(),arguments,["callback","events"]);super(t),this.name="Part",this._state=new Si("stopped"),this._events=new Set,this._state.increasing=!0,t.events.forEach(e=>{Fe(e)?this.add(e[0],e[1]):this.add(e)})}static getDefaults(){return Object.assign(Mi.getDefaults(),{events:[]})}start(t,e){let n=this.toTicks(t);if(this._state.getValueAtTime(n)!=="started"){e=_n(e,this._loop?this._loopStart:0),this._loop?e=_n(e,this._loopStart):e=_n(e,0);let s=this.toTicks(e);this._state.add({id:-1,offset:s,state:"started",time:n}),this._forEach(r=>{this._startNote(r,n,s)})}return this}_startNote(t,e,n){e-=n,this._loop?t.startOffset>=this._loopStart&&t.startOffset<this._loopEnd?(t.startOffset<n&&(e+=this._getLoopDuration()),t.start(new Me(this.context,e))):t.startOffset<this._loopStart&&t.startOffset>=n&&(t.loop=!1,t.start(new Me(this.context,e))):t.startOffset>=n&&t.start(new Me(this.context,e))}get startOffset(){return this._startOffset}set startOffset(t){this._startOffset=t,this._forEach(e=>{e.startOffset+=this._startOffset})}stop(t){let e=this.toTicks(t);return this._state.cancel(e),this._state.setStateAtTime("stopped",e),this._forEach(n=>{n.stop(t)}),this}at(t,e){let n=new Le(this.context,t).toTicks(),s=new Me(this.context,1).toSeconds(),r=this._events.values(),o=r.next();for(;!o.done;){let a=o.value;if(Math.abs(n-a.startOffset)<s)return qt(e)&&(a.value=e),a;o=r.next()}return qt(e)?(this.add(t,e),this.at(t)):null}add(t,e){t instanceof Object&&Reflect.has(t,"time")&&(e=t,t=e.time);let n=this.toTicks(t),s;return e instanceof Mi?(s=e,s.callback=this._tick.bind(this)):s=new Mi({callback:this._tick.bind(this),context:this.context,value:e}),s.startOffset=n,s.set({humanize:this.humanize,loop:this.loop,loopEnd:this.loopEnd,loopStart:this.loopStart,playbackRate:this.playbackRate,probability:this.probability}),this._events.add(s),this._restartEvent(s),this}_restartEvent(t){this._state.forEach(e=>{e.state==="started"?this._startNote(t,e.time,e.offset):t.stop(new Me(this.context,e.time))})}remove(t,e){return yi(t)&&t.hasOwnProperty("time")&&(e=t,t=e.time),t=this.toTicks(t),this._events.forEach(n=>{n.startOffset===t&&(Qe(e)||qt(e)&&n.value===e)&&(this._events.delete(n),n.dispose())}),this}clear(){return this._forEach(t=>t.dispose()),this._events.clear(),this}cancel(t){return this._forEach(e=>e.cancel(t)),this._state.cancel(this.toTicks(t)),this}_forEach(t){return this._events&&this._events.forEach(e=>{e instanceof i?e._forEach(t):t(e)}),this}_setAll(t,e){this._forEach(n=>{n[t]=e})}_tick(t,e){this.mute||this.callback(t,e)}_testLoopBoundries(t){this._loop&&(t.startOffset<this._loopStart||t.startOffset>=this._loopEnd)?t.cancel(0):t.state==="stopped"&&this._restartEvent(t)}get probability(){return this._probability}set probability(t){this._probability=t,this._setAll("probability",t)}get humanize(){return this._humanize}set humanize(t){this._humanize=t,this._setAll("humanize",t)}get loop(){return this._loop}set loop(t){this._loop=t,this._forEach(e=>{e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.loop=t,this._testLoopBoundries(e)})}get loopEnd(){return new Me(this.context,this._loopEnd).toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t),this._loop&&this._forEach(e=>{e.loopEnd=t,this._testLoopBoundries(e)})}get loopStart(){return new Me(this.context,this._loopStart).toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t),this._loop&&this._forEach(e=>{e.loopStart=this.loopStart,this._testLoopBoundries(e)})}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._setAll("playbackRate",t)}get length(){return this._events.size}dispose(){return super.dispose(),this.clear(),this}};function*XI(i){let t=0;for(;t<i;)t=Hs(t,0,i-1),yield t,t++}function*YI(i){let t=i-1;for(;t>=0;)t=Hs(t,0,i-1),yield t,t--}function*Jl(i,t){for(;;)yield*t(i)}function*kb(i,t){let e=t?0:i-1;for(;;)e=Hs(e,0,i-1),yield e,t?(e++,e>=i-1&&(t=!1)):(e--,e<=0&&(t=!0))}function*jI(i){let t=0,e=0;for(;t<i;)t=Hs(t,0,i-1),yield t,e++,t+=e%2?2:-1}function*ZI(i){let t=i-1,e=0;for(;t>=0;)t=Hs(t,0,i-1),yield t,e++,t+=e%2?-2:1}function*$I(i){for(;;)yield Math.floor(Math.random()*i)}function*JI(i){let t=[];for(let e=0;e<i;e++)t.push(e);for(;t.length>0;){let e=t.splice(Math.floor(t.length*Math.random()),1);yield Hs(e[0],0,i-1)}}function*KI(i){let t=Math.floor(Math.random()*i);for(;;)t===0?t++:t===i-1||Math.random()<.5?t--:t++,yield t}function*zm(i,t="up",e=0){switch(yt(i>=1,"The number of values must be at least one"),t){case"up":yield*Jl(i,XI);case"down":yield*Jl(i,YI);case"upDown":yield*kb(i,!0);case"downUp":yield*kb(i,!1);case"alternateUp":yield*Jl(i,jI);case"alternateDown":yield*Jl(i,ZI);case"random":yield*$I(i);case"randomOnce":yield*Jl(i,JI);case"randomWalk":yield*KI(i)}}var Gm=class i extends ec{constructor(){let t=L(i.getDefaults(),arguments,["callback","values","pattern"]);super(t),this.name="Pattern",this.callback=t.callback,this._values=t.values,this._pattern=zm(t.values.length,t.pattern),this._type=t.pattern}static getDefaults(){return Object.assign(ec.getDefaults(),{pattern:"up",values:[],callback:Xt})}_tick(t){let e=this._pattern.next();this._index=e.value,this._value=this._values[e.value],this.callback(t,this._value)}get values(){return this._values}set values(t){this._values=t,this.pattern=this._type}get value(){return this._value}get index(){return this._index}get pattern(){return this._type}set pattern(t){this._type=t,this._pattern=zm(this._values.length,this._type)}};var Wm=class i extends Mi{constructor(){let t=L(i.getDefaults(),arguments,["callback","events","subdivision"]);super(t),this.name="Sequence",this._part=new $l({callback:this._seqCallback.bind(this),context:this.context}),this._events=[],this._eventsArray=[],this._subdivision=this.toTicks(t.subdivision),this.events=t.events,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.playbackRate=t.playbackRate,this.probability=t.probability,this.humanize=t.humanize,this.mute=t.mute,this.playbackRate=t.playbackRate}static getDefaults(){return Object.assign(We(Mi.getDefaults(),["value"]),{events:[],loop:!0,loopEnd:0,loopStart:0,subdivision:"8n"})}_seqCallback(t,e){e!==null&&!this.mute&&this.callback(t,e)}get events(){return this._events}set events(t){this.clear(),this._eventsArray=t,this._events=this._createSequence(this._eventsArray),this._eventsUpdated()}start(t,e){return this._part.start(t,e&&this._indexTime(e)),this}stop(t){return this._part.stop(t),this}get subdivision(){return new Me(this.context,this._subdivision).toSeconds()}_createSequence(t){return new Proxy(t,{get:(e,n)=>e[n],set:(e,n,s)=>(Mn(n)&&isFinite(parseInt(n,10))&&Fe(s)?e[n]=this._createSequence(s):e[n]=s,this._eventsUpdated(),!0)})}_eventsUpdated(){this._part.clear(),this._rescheduleSequence(this._eventsArray,this._subdivision,this.startOffset),this.loopEnd=this.loopEnd}_rescheduleSequence(t,e,n){t.forEach((s,r)=>{let o=r*e+n;if(Fe(s))this._rescheduleSequence(s,e/s.length,o);else{let a=new Me(this.context,o,"i").toSeconds();this._part.add(a,s)}})}_indexTime(t){return new Me(this.context,t*this._subdivision+this.startOffset).toSeconds()}clear(){return this._part.clear(),this}dispose(){return super.dispose(),this._part.dispose(),this}get loop(){return this._part.loop}set loop(t){this._part.loop=t}get loopStart(){return this._loopStart}set loopStart(t){this._loopStart=t,this._part.loopStart=this._indexTime(t)}get loopEnd(){return this._loopEnd}set loopEnd(t){this._loopEnd=t,t===0?this._part.loopEnd=this._indexTime(this._eventsArray.length):this._part.loopEnd=this._indexTime(t)}get startOffset(){return this._part.startOffset}set startOffset(t){this._part.startOffset=t}get playbackRate(){return this._part.playbackRate}set playbackRate(t){this._part.playbackRate=t}get probability(){return this._part.probability}set probability(t){this._part.probability=t}get progress(){return this._part.progress}get humanize(){return this._part.humanize}set humanize(t){this._part.humanize=t}get length(){return this._part.length}};var Qs=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["fade"]);super(t),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new Hl({context:this.context}),this.a=new dt({context:this.context,gain:0}),this.b=new dt({context:this.context,gain:0}),this.output=new dt({context:this.context}),this._internalChannels=[this.a,this.b],this.fade=new bt({context:this.context,units:"normalRange",value:t.fade}),lt(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",Xe(this._split,this.a.gain,0),Xe(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(tt.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}};var we=class extends tt{constructor(t){super(t),this.name="Effect",this._dryWet=new Qs({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new dt({context:this.context}),this.effectReturn=new dt({context:this.context}),this.input=new dt({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(t.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],lt(this,"wet")}static getDefaults(){return Object.assign(tt.getDefaults(),{wet:1})}connectEffect(t){return this._internalChannels.push(t),this.effectSend.chain(t,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}};var kr=class extends we{constructor(t){super(t),this.name="LFOEffect",this._lfo=new nn({context:this.context,frequency:t.frequency,amplitude:t.depth}),this.depth=this._lfo.amplitude,this.frequency=this._lfo.frequency,this.type=t.type,lt(this,["frequency","depth"])}static getDefaults(){return Object.assign(we.getDefaults(),{frequency:1,type:"sine",depth:1})}start(t){return this._lfo.start(t),this}stop(t){return this._lfo.stop(t),this}sync(){return this._lfo.sync(),this}unsync(){return this._lfo.unsync(),this}get type(){return this._lfo.type}set type(t){this._lfo.type=t}dispose(){return super.dispose(),this._lfo.dispose(),this.frequency.dispose(),this.depth.dispose(),this}};var Hm=class i extends kr{constructor(){let t=L(i.getDefaults(),arguments,["frequency","baseFrequency","octaves"]);super(t),this.name="AutoFilter",this.filter=new An(Object.assign(t.filter,{context:this.context})),this.connectEffect(this.filter),this._lfo.connect(this.filter.frequency),this.octaves=t.octaves,this.baseFrequency=t.baseFrequency}static getDefaults(){return Object.assign(kr.getDefaults(),{baseFrequency:200,octaves:2.6,filter:{type:"lowpass",rolloff:-12,Q:1}})}get baseFrequency(){return this._lfo.min}set baseFrequency(t){this._lfo.min=this.toFrequency(t),this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(t){this._octaves=t,this._lfo.max=this._lfo.min*Math.pow(2,t)}dispose(){return super.dispose(),this.filter.dispose(),this}};var vo=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["pan"]);super(t),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new Bt({context:this.context,param:this._panner.pan,value:t.pan,minValue:-1,maxValue:1}),this._panner.channelCount=t.channelCount,this._panner.channelCountMode="explicit",lt(this,"pan")}static getDefaults(){return Object.assign(tt.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}};var qm=class i extends kr{constructor(){let t=L(i.getDefaults(),arguments,["frequency"]);super(t),this.name="AutoPanner",this._panner=new vo({context:this.context,channelCount:t.channelCount}),this.connectEffect(this._panner),this._lfo.connect(this._panner.pan),this._lfo.min=-1,this._lfo.max=1}static getDefaults(){return Object.assign(kr.getDefaults(),{channelCount:1})}dispose(){return super.dispose(),this._panner.dispose(),this}};var So=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["smoothing"]);super(t),this.name="Follower",this._abs=this.input=new Wl({context:this.context}),this._lowpass=this.output=new xo({context:this.context,frequency:1/this.toSeconds(t.smoothing),type:"lowpass"}),this._abs.connect(this._lowpass),this._smoothing=t.smoothing}static getDefaults(){return Object.assign(tt.getDefaults(),{smoothing:.05})}get smoothing(){return this._smoothing}set smoothing(t){this._smoothing=t,this._lowpass.frequency=1/this.toSeconds(this.smoothing)}dispose(){return super.dispose(),this._abs.dispose(),this._lowpass.dispose(),this}};var Xm=class i extends we{constructor(){let t=L(i.getDefaults(),arguments,["baseFrequency","octaves","sensitivity"]);super(t),this.name="AutoWah",this._follower=new So({context:this.context,smoothing:t.follower}),this._sweepRange=new Yl({context:this.context,min:0,max:1,exponent:.5}),this._baseFrequency=this.toFrequency(t.baseFrequency),this._octaves=t.octaves,this._inputBoost=new dt({context:this.context}),this._bandpass=new An({context:this.context,rolloff:-48,frequency:0,Q:t.Q}),this._peaking=new An({context:this.context,type:"peaking"}),this._peaking.gain.value=t.gain,this.gain=this._peaking.gain,this.Q=this._bandpass.Q,this.effectSend.chain(this._inputBoost,this._follower,this._sweepRange),this._sweepRange.connect(this._bandpass.frequency),this._sweepRange.connect(this._peaking.frequency),this.effectSend.chain(this._bandpass,this._peaking,this.effectReturn),this._setSweepRange(),this.sensitivity=t.sensitivity,lt(this,["gain","Q"])}static getDefaults(){return Object.assign(we.getDefaults(),{baseFrequency:100,octaves:6,sensitivity:0,Q:2,gain:2,follower:.2})}get octaves(){return this._octaves}set octaves(t){this._octaves=t,this._setSweepRange()}get follower(){return this._follower.smoothing}set follower(t){this._follower.smoothing=t}get baseFrequency(){return this._baseFrequency}set baseFrequency(t){this._baseFrequency=this.toFrequency(t),this._setSweepRange()}get sensitivity(){return Is(1/this._inputBoost.gain.value)}set sensitivity(t){this._inputBoost.gain.value=1/is(t)}_setSweepRange(){this._sweepRange.min=this._baseFrequency,this._sweepRange.max=Math.min(this._baseFrequency*Math.pow(2,this._octaves),this.context.sampleRate/2)}dispose(){return super.dispose(),this._follower.dispose(),this._sweepRange.dispose(),this._bandpass.dispose(),this._peaking.dispose(),this._inputBoost.dispose(),this}};var Ym="bit-crusher",QI=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;ip(Ym,QI);var jm=class i extends we{constructor(){let t=L(i.getDefaults(),arguments,["bits"]);super(t),this.name="BitCrusher",this._bitCrusherWorklet=new Zm({context:this.context,bits:t.bits}),this.connectEffect(this._bitCrusherWorklet),this.bits=this._bitCrusherWorklet.bits}static getDefaults(){return Object.assign(we.getDefaults(),{bits:4})}dispose(){return super.dispose(),this._bitCrusherWorklet.dispose(),this}},Zm=class i extends go{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="BitCrusherWorklet",this.input=new dt({context:this.context}),this.output=new dt({context:this.context}),this.bits=new Bt({context:this.context,value:t.bits,units:"positive",minValue:1,maxValue:16,param:this._dummyParam,swappable:!0})}static getDefaults(){return Object.assign(go.getDefaults(),{bits:12})}_audioWorkletName(){return Ym}onReady(t){ln(this.input,t,this.output);let e=t.parameters.get("bits");this.bits.setParam(e)}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.bits.dispose(),this}};var $m=class i extends we{constructor(){let t=L(i.getDefaults(),arguments,["order"]);super(t),this.name="Chebyshev",this._shaper=new yn({context:this.context,length:4096}),this._order=t.order,this.connectEffect(this._shaper),this.order=t.order,this.oversample=t.oversample}static getDefaults(){return Object.assign(we.getDefaults(),{order:1,oversample:"none"})}_getCoefficient(t,e,n){return n.has(e)||(e===0?n.set(e,0):e===1?n.set(e,t):n.set(e,2*t*this._getCoefficient(t,e-1,n)-this._getCoefficient(t,e-2,n))),n.get(e)}get order(){return this._order}set order(t){yt(Number.isInteger(t),"'order' must be an integer"),this._order=t,this._shaper.setMap(e=>this._getCoefficient(e,t,new Map))}get oversample(){return this._shaper.oversample}set oversample(t){this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.dispose(),this}};var hs=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["channels"]);super(t),this.name="Split",this._splitter=this.input=this.output=this.context.createChannelSplitter(t.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(tt.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}};var wi=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["channels"]);super(t),this.name="Merge",this._merger=this.output=this.input=this.context.createChannelMerger(t.channels)}static getDefaults(){return Object.assign(tt.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}};var Un=class extends tt{constructor(t){super(t),this.name="StereoEffect",this.input=new dt({context:this.context}),this.input.channelCount=2,this.input.channelCountMode="explicit",this._dryWet=this.output=new Qs({context:this.context,fade:t.wet}),this.wet=this._dryWet.fade,this._split=new hs({context:this.context,channels:2}),this._merge=new wi({context:this.context,channels:2}),this.input.connect(this._split),this.input.connect(this._dryWet.a),this._merge.connect(this._dryWet.b),lt(this,["wet"])}connectEffectLeft(...t){this._split.connect(t[0],0,0),ln(...t),Xe(t[t.length-1],this._merge,0,0)}connectEffectRight(...t){this._split.connect(t[0],1,0),ln(...t),Xe(t[t.length-1],this._merge,0,1)}static getDefaults(){return Object.assign(tt.getDefaults(),{wet:1})}dispose(){return super.dispose(),this._dryWet.dispose(),this._split.dispose(),this._merge.dispose(),this}};var bo=class extends Un{constructor(t){super(t),this.feedback=new bt({context:this.context,value:t.feedback,units:"normalRange"}),this._feedbackL=new dt({context:this.context}),this._feedbackR=new dt({context:this.context}),this._feedbackSplit=new hs({context:this.context,channels:2}),this._feedbackMerge=new wi({context:this.context,channels:2}),this._merge.connect(this._feedbackSplit),this._feedbackMerge.connect(this._split),this._feedbackSplit.connect(this._feedbackL,0,0),this._feedbackL.connect(this._feedbackMerge,0,0),this._feedbackSplit.connect(this._feedbackR,1,0),this._feedbackR.connect(this._feedbackMerge,0,1),this.feedback.fan(this._feedbackL.gain,this._feedbackR.gain),lt(this,["feedback"])}static getDefaults(){return Object.assign(Un.getDefaults(),{feedback:.5})}dispose(){return super.dispose(),this.feedback.dispose(),this._feedbackL.dispose(),this._feedbackR.dispose(),this._feedbackSplit.dispose(),this._feedbackMerge.dispose(),this}};var Jm=class i extends bo{constructor(){let t=L(i.getDefaults(),arguments,["frequency","delayTime","depth"]);super(t),this.name="Chorus",this._depth=t.depth,this._delayTime=t.delayTime/1e3,this._lfoL=new nn({context:this.context,frequency:t.frequency,min:0,max:1}),this._lfoR=new nn({context:this.context,frequency:t.frequency,min:0,max:1,phase:180}),this._delayNodeL=new Tn({context:this.context}),this._delayNodeR=new Tn({context:this.context}),this.frequency=this._lfoL.frequency,lt(this,["frequency"]),this._lfoL.frequency.connect(this._lfoR.frequency),this.connectEffectLeft(this._delayNodeL),this.connectEffectRight(this._delayNodeR),this._lfoL.connect(this._delayNodeL.delayTime),this._lfoR.connect(this._delayNodeR.delayTime),this.depth=this._depth,this.type=t.type,this.spread=t.spread}static getDefaults(){return Object.assign(bo.getDefaults(),{frequency:1.5,delayTime:3.5,depth:.7,type:"sine",spread:180,feedback:0,wet:.5})}get depth(){return this._depth}set depth(t){this._depth=t;let e=this._delayTime*t;this._lfoL.min=Math.max(this._delayTime-e,0),this._lfoL.max=this._delayTime+e,this._lfoR.min=Math.max(this._delayTime-e,0),this._lfoR.max=this._delayTime+e}get delayTime(){return this._delayTime*1e3}set delayTime(t){this._delayTime=t/1e3,this.depth=this._depth}get type(){return this._lfoL.type}set type(t){this._lfoL.type=t,this._lfoR.type=t}get spread(){return this._lfoR.phase-this._lfoL.phase}set spread(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}start(t){return this._lfoL.start(t),this._lfoR.start(t),this}stop(t){return this._lfoL.stop(t),this._lfoR.stop(t),this}sync(){return this._lfoL.sync(),this._lfoR.sync(),this}unsync(){return this._lfoL.unsync(),this._lfoR.unsync(),this}dispose(){return super.dispose(),this._lfoL.dispose(),this._lfoR.dispose(),this._delayNodeL.dispose(),this._delayNodeR.dispose(),this.frequency.dispose(),this}};var Km=class i extends we{constructor(){let t=L(i.getDefaults(),arguments,["distortion"]);super(t),this.name="Distortion",this._shaper=new yn({context:this.context,length:4096}),this._distortion=t.distortion,this.connectEffect(this._shaper),this.distortion=t.distortion,this.oversample=t.oversample}static getDefaults(){return Object.assign(we.getDefaults(),{distortion:.4,oversample:"none"})}get distortion(){return this._distortion}set distortion(t){this._distortion=t;let e=t*100,n=Math.PI/180;this._shaper.setMap(s=>Math.abs(s)<.001?0:(3+e)*s*20*n/(Math.PI+e*Math.abs(s)))}get oversample(){return this._shaper.oversample}set oversample(t){this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.dispose(),this}};var Br=class extends we{constructor(t){super(t),this.name="FeedbackEffect",this._feedbackGain=new dt({context:this.context,gain:t.feedback,units:"normalRange"}),this.feedback=this._feedbackGain.gain,lt(this,"feedback"),this.effectReturn.chain(this._feedbackGain,this.effectSend)}static getDefaults(){return Object.assign(we.getDefaults(),{feedback:.125})}dispose(){return super.dispose(),this._feedbackGain.dispose(),this.feedback.dispose(),this}};var Qm=class i extends Br{constructor(){let t=L(i.getDefaults(),arguments,["delayTime","feedback"]);super(t),this.name="FeedbackDelay",this._delayNode=new Tn({context:this.context,delayTime:t.delayTime,maxDelay:t.maxDelay}),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),lt(this,"delayTime")}static getDefaults(){return Object.assign(Br.getDefaults(),{delayTime:.25,maxDelay:1})}dispose(){return super.dispose(),this._delayNode.dispose(),this.delayTime.dispose(),this}};var sp=class extends tt{constructor(t){super(t),this.name="PhaseShiftAllpass",this.input=new dt({context:this.context}),this.output=new dt({context:this.context}),this.offset90=new dt({context:this.context});let e=[.6923878,.9360654322959,.988229522686,.9987488452737],n=[.4021921162426,.856171088242,.9722909545651,.9952884791278];this._bank0=this._createAllPassFilterBank(e),this._bank1=this._createAllPassFilterBank(n),this._oneSampleDelay=this.context.createIIRFilter([0,1],[1,0]),ln(this.input,...this._bank0,this._oneSampleDelay,this.output),ln(this.input,...this._bank1,this.offset90)}_createAllPassFilterBank(t){return t.map(n=>{let s=[[n*n,0,-1],[1,0,-(n*n)]];return this.context.createIIRFilter(s[0],s[1])})}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.offset90.dispose(),this._bank0.forEach(t=>t.disconnect()),this._bank1.forEach(t=>t.disconnect()),this._oneSampleDelay.disconnect(),this}};var tg=class i extends we{constructor(){let t=L(i.getDefaults(),arguments,["frequency"]);super(t),this.name="FrequencyShifter",this.frequency=new bt({context:this.context,units:"frequency",value:t.frequency,minValue:-this.context.sampleRate/2,maxValue:this.context.sampleRate/2}),this._sine=new uo({context:this.context,type:"sine"}),this._cosine=new Ue({context:this.context,phase:-90,type:"sine"}),this._sineMultiply=new de({context:this.context}),this._cosineMultiply=new de({context:this.context}),this._negate=new fo({context:this.context}),this._add=new as({context:this.context}),this._phaseShifter=new sp({context:this.context}),this.effectSend.connect(this._phaseShifter),this.frequency.fan(this._sine.frequency,this._cosine.frequency),this._phaseShifter.offset90.connect(this._cosineMultiply),this._cosine.connect(this._cosineMultiply.factor),this._phaseShifter.connect(this._sineMultiply),this._sine.connect(this._sineMultiply.factor),this._sineMultiply.connect(this._negate),this._cosineMultiply.connect(this._add),this._negate.connect(this._add.addend),this._add.connect(this.effectReturn);let e=this.immediate();this._sine.start(e),this._cosine.start(e)}static getDefaults(){return Object.assign(we.getDefaults(),{frequency:0})}dispose(){return super.dispose(),this.frequency.dispose(),this._add.dispose(),this._cosine.dispose(),this._cosineMultiply.dispose(),this._negate.dispose(),this._phaseShifter.dispose(),this._sine.dispose(),this._sineMultiply.dispose(),this}};var Bb=[1557/44100,1617/44100,1491/44100,1422/44100,1277/44100,1356/44100,1188/44100,1116/44100],Vb=[225,556,441,341],eg=class i extends Un{constructor(){let t=L(i.getDefaults(),arguments,["roomSize","dampening"]);super(t),this.name="Freeverb",this._combFilters=[],this._allpassFiltersL=[],this._allpassFiltersR=[],this.roomSize=new bt({context:this.context,value:t.roomSize,units:"normalRange"}),this._allpassFiltersL=Vb.map(e=>{let n=this.context.createBiquadFilter();return n.type="allpass",n.frequency.value=e,n}),this._allpassFiltersR=Vb.map(e=>{let n=this.context.createBiquadFilter();return n.type="allpass",n.frequency.value=e,n}),this._combFilters=Bb.map((e,n)=>{let s=new yo({context:this.context,dampening:t.dampening,delayTime:e});return n<Bb.length/2?this.connectEffectLeft(s,...this._allpassFiltersL):this.connectEffectRight(s,...this._allpassFiltersR),this.roomSize.connect(s.resonance),s}),lt(this,["roomSize"])}static getDefaults(){return Object.assign(Un.getDefaults(),{roomSize:.7,dampening:3e3})}get dampening(){return this._combFilters[0].dampening}set dampening(t){this._combFilters.forEach(e=>e.dampening=t)}dispose(){return super.dispose(),this._allpassFiltersL.forEach(t=>t.disconnect()),this._allpassFiltersR.forEach(t=>t.disconnect()),this._combFilters.forEach(t=>t.dispose()),this.roomSize.dispose(),this}};var zb=[1687/25e3,1601/25e3,2053/25e3,2251/25e3],tN=[.773,.802,.753,.733],eN=[347,113,37],ng=class i extends Un{constructor(){let t=L(i.getDefaults(),arguments,["roomSize"]);super(t),this.name="JCReverb",this._allpassFilters=[],this._feedbackCombFilters=[],this.roomSize=new bt({context:this.context,value:t.roomSize,units:"normalRange"}),this._scaleRoomSize=new ai({context:this.context,min:-.733,max:.197}),this._allpassFilters=eN.map(e=>{let n=this.context.createBiquadFilter();return n.type="allpass",n.frequency.value=e,n}),this._feedbackCombFilters=zb.map((e,n)=>{let s=new _o({context:this.context,delayTime:e});return this._scaleRoomSize.connect(s.resonance),s.resonance.value=tN[n],n<zb.length/2?this.connectEffectLeft(...this._allpassFilters,s):this.connectEffectRight(...this._allpassFilters,s),s}),this.roomSize.connect(this._scaleRoomSize),lt(this,["roomSize"])}static getDefaults(){return Object.assign(Un.getDefaults(),{roomSize:.5})}dispose(){return super.dispose(),this._allpassFilters.forEach(t=>t.disconnect()),this._feedbackCombFilters.forEach(t=>t.dispose()),this.roomSize.dispose(),this._scaleRoomSize.dispose(),this}};var Kl=class extends bo{constructor(t){super(t),this._feedbackL.disconnect(),this._feedbackL.connect(this._feedbackMerge,0,1),this._feedbackR.disconnect(),this._feedbackR.connect(this._feedbackMerge,0,0),lt(this,["feedback"])}};var ig=class i extends Kl{constructor(){let t=L(i.getDefaults(),arguments,["delayTime","feedback"]);super(t),this.name="PingPongDelay",this._leftDelay=new Tn({context:this.context,maxDelay:t.maxDelay}),this._rightDelay=new Tn({context:this.context,maxDelay:t.maxDelay}),this._rightPreDelay=new Tn({context:this.context,maxDelay:t.maxDelay}),this.delayTime=new bt({context:this.context,units:"time",value:t.delayTime}),this.connectEffectLeft(this._leftDelay),this.connectEffectRight(this._rightPreDelay,this._rightDelay),this.delayTime.fan(this._leftDelay.delayTime,this._rightDelay.delayTime,this._rightPreDelay.delayTime),this._feedbackL.disconnect(),this._feedbackL.connect(this._rightDelay),lt(this,["delayTime"])}static getDefaults(){return Object.assign(Kl.getDefaults(),{delayTime:.25,maxDelay:1})}dispose(){return super.dispose(),this._leftDelay.dispose(),this._rightDelay.dispose(),this._rightPreDelay.dispose(),this.delayTime.dispose(),this}};var sg=class i extends Br{constructor(){let t=L(i.getDefaults(),arguments,["pitch"]);super(t),this.name="PitchShift",this._frequency=new bt({context:this.context}),this._delayA=new Tn({maxDelay:1,context:this.context}),this._lfoA=new nn({context:this.context,min:0,max:.1,type:"sawtooth"}).connect(this._delayA.delayTime),this._delayB=new Tn({maxDelay:1,context:this.context}),this._lfoB=new nn({context:this.context,min:0,max:.1,type:"sawtooth",phase:180}).connect(this._delayB.delayTime),this._crossFade=new Qs({context:this.context}),this._crossFadeLFO=new nn({context:this.context,min:0,max:1,type:"triangle",phase:90}).connect(this._crossFade.fade),this._feedbackDelay=new Tn({delayTime:t.delayTime,context:this.context}),this.delayTime=this._feedbackDelay.delayTime,lt(this,"delayTime"),this._pitch=t.pitch,this._windowSize=t.windowSize,this._delayA.connect(this._crossFade.a),this._delayB.connect(this._crossFade.b),this._frequency.fan(this._lfoA.frequency,this._lfoB.frequency,this._crossFadeLFO.frequency),this.effectSend.fan(this._delayA,this._delayB),this._crossFade.chain(this._feedbackDelay,this.effectReturn);let e=this.now();this._lfoA.start(e),this._lfoB.start(e),this._crossFadeLFO.start(e),this.windowSize=this._windowSize}static getDefaults(){return Object.assign(Br.getDefaults(),{pitch:0,windowSize:.1,delayTime:0,feedback:0})}get pitch(){return this._pitch}set pitch(t){this._pitch=t;let e=0;t<0?(this._lfoA.min=0,this._lfoA.max=this._windowSize,this._lfoB.min=0,this._lfoB.max=this._windowSize,e=ss(t-1)+1):(this._lfoA.min=this._windowSize,this._lfoA.max=0,this._lfoB.min=this._windowSize,this._lfoB.max=0,e=ss(t)-1),this._frequency.value=e*(1.2/this._windowSize)}get windowSize(){return this._windowSize}set windowSize(t){this._windowSize=this.toSeconds(t),this.pitch=this._pitch}dispose(){return super.dispose(),this._frequency.dispose(),this._delayA.dispose(),this._delayB.dispose(),this._lfoA.dispose(),this._lfoB.dispose(),this._crossFade.dispose(),this._crossFadeLFO.dispose(),this._feedbackDelay.dispose(),this}};var rg=class i extends Un{constructor(){let t=L(i.getDefaults(),arguments,["frequency","octaves","baseFrequency"]);super(t),this.name="Phaser",this._lfoL=new nn({context:this.context,frequency:t.frequency,min:0,max:1}),this._lfoR=new nn({context:this.context,frequency:t.frequency,min:0,max:1,phase:180}),this._baseFrequency=this.toFrequency(t.baseFrequency),this._octaves=t.octaves,this.Q=new bt({context:this.context,value:t.Q,units:"positive"}),this._filtersL=this._makeFilters(t.stages,this._lfoL),this._filtersR=this._makeFilters(t.stages,this._lfoR),this.frequency=this._lfoL.frequency,this.frequency.value=t.frequency,this.connectEffectLeft(...this._filtersL),this.connectEffectRight(...this._filtersR),this._lfoL.frequency.connect(this._lfoR.frequency),this.baseFrequency=t.baseFrequency,this.octaves=t.octaves,this._lfoL.start(),this._lfoR.start(),lt(this,["frequency","Q"])}static getDefaults(){return Object.assign(Un.getDefaults(),{frequency:.5,octaves:3,stages:10,Q:10,baseFrequency:350})}_makeFilters(t,e){let n=[];for(let s=0;s<t;s++){let r=this.context.createBiquadFilter();r.type="allpass",this.Q.connect(r.Q),e.connect(r.frequency),n.push(r)}return n}get octaves(){return this._octaves}set octaves(t){this._octaves=t;let e=this._baseFrequency*Math.pow(2,t);this._lfoL.max=e,this._lfoR.max=e}get baseFrequency(){return this._baseFrequency}set baseFrequency(t){this._baseFrequency=this.toFrequency(t),this._lfoL.min=this._baseFrequency,this._lfoR.min=this._baseFrequency,this.octaves=this._octaves}dispose(){return super.dispose(),this.Q.dispose(),this._lfoL.dispose(),this._lfoR.dispose(),this._filtersL.forEach(t=>t.disconnect()),this._filtersR.forEach(t=>t.disconnect()),this.frequency.dispose(),this}};var og=class i extends we{constructor(){let t=L(i.getDefaults(),arguments,["decay"]);super(t),this.name="Reverb",this._convolver=this.context.createConvolver(),this.ready=Promise.resolve();let e=this.toSeconds(t.decay);Re(e,.001),this._decay=e;let n=this.toSeconds(t.preDelay);Re(n,0),this._preDelay=n,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(we.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(t){t=this.toSeconds(t),Re(t,.001),this._decay=t,this.generate()}get preDelay(){return this._preDelay}set preDelay(t){t=this.toSeconds(t),Re(t,0),this._preDelay=t,this.generate()}generate(){return ie(this,void 0,void 0,function*(){let t=this.ready,e=new vi(2,this._decay+this._preDelay,this.context.sampleRate),n=new os({context:e}),s=new os({context:e}),r=new wi({context:e});n.connect(r,0,0),s.connect(r,0,1);let o=new dt({context:e}).toDestination();r.connect(o),n.start(0),s.start(0),o.gain.setValueAtTime(0,0),o.gain.setValueAtTime(1,this._preDelay),o.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);let a=e.render();return this.ready=a.then(Xt),yield t,this._convolver.buffer=(yield a).get(),this})}dispose(){return super.dispose(),this._convolver.disconnect(),this}};var Mo=class i extends tt{constructor(){super(L(i.getDefaults(),arguments)),this.name="MidSideSplit",this._split=this.input=new hs({channels:2,context:this.context}),this._midAdd=new as({context:this.context}),this.mid=new de({context:this.context,value:Math.SQRT1_2}),this._sideSubtract=new cs({context:this.context}),this.side=new de({context:this.context,value:Math.SQRT1_2}),this._split.connect(this._midAdd,0),this._split.connect(this._midAdd.addend,1),this._split.connect(this._sideSubtract,0),this._split.connect(this._sideSubtract.subtrahend,1),this._midAdd.connect(this.mid),this._sideSubtract.connect(this.side)}dispose(){return super.dispose(),this.mid.dispose(),this.side.dispose(),this._midAdd.dispose(),this._sideSubtract.dispose(),this._split.dispose(),this}};var wo=class i extends tt{constructor(){super(L(i.getDefaults(),arguments)),this.name="MidSideMerge",this.mid=new dt({context:this.context}),this.side=new dt({context:this.context}),this._left=new as({context:this.context}),this._leftMult=new de({context:this.context,value:Math.SQRT1_2}),this._right=new cs({context:this.context}),this._rightMult=new de({context:this.context,value:Math.SQRT1_2}),this._merge=this.output=new wi({context:this.context}),this.mid.fan(this._left),this.side.connect(this._left.addend),this.mid.connect(this._right),this.side.connect(this._right.subtrahend),this._left.connect(this._leftMult),this._right.connect(this._rightMult),this._leftMult.connect(this._merge,0,0),this._rightMult.connect(this._merge,0,1)}dispose(){return super.dispose(),this.mid.dispose(),this.side.dispose(),this._leftMult.dispose(),this._rightMult.dispose(),this._left.dispose(),this._right.dispose(),this}};var Ql=class extends we{constructor(t){super(t),this.name="MidSideEffect",this._midSideMerge=new wo({context:this.context}),this._midSideSplit=new Mo({context:this.context}),this._midSend=this._midSideSplit.mid,this._sideSend=this._midSideSplit.side,this._midReturn=this._midSideMerge.mid,this._sideReturn=this._midSideMerge.side,this.effectSend.connect(this._midSideSplit),this._midSideMerge.connect(this.effectReturn)}connectEffectMid(...t){this._midSend.chain(...t,this._midReturn)}connectEffectSide(...t){this._sideSend.chain(...t,this._sideReturn)}dispose(){return super.dispose(),this._midSideSplit.dispose(),this._midSideMerge.dispose(),this._midSend.dispose(),this._sideSend.dispose(),this._midReturn.dispose(),this._sideReturn.dispose(),this}};var ag=class i extends Ql{constructor(){let t=L(i.getDefaults(),arguments,["width"]);super(t),this.name="StereoWidener",this.width=new bt({context:this.context,value:t.width,units:"normalRange"}),lt(this,["width"]),this._twoTimesWidthMid=new de({context:this.context,value:2}),this._twoTimesWidthSide=new de({context:this.context,value:2}),this._midMult=new de({context:this.context}),this._twoTimesWidthMid.connect(this._midMult.factor),this.connectEffectMid(this._midMult),this._oneMinusWidth=new cs({context:this.context}),this._oneMinusWidth.connect(this._twoTimesWidthMid),Xe(this.context.getConstant(1),this._oneMinusWidth),this.width.connect(this._oneMinusWidth.subtrahend),this._sideMult=new de({context:this.context}),this.width.connect(this._twoTimesWidthSide),this._twoTimesWidthSide.connect(this._sideMult.factor),this.connectEffectSide(this._sideMult)}static getDefaults(){return Object.assign(Ql.getDefaults(),{width:.5})}dispose(){return super.dispose(),this.width.dispose(),this._midMult.dispose(),this._sideMult.dispose(),this._twoTimesWidthMid.dispose(),this._twoTimesWidthSide.dispose(),this._oneMinusWidth.dispose(),this}};var cg=class i extends Un{constructor(){let t=L(i.getDefaults(),arguments,["frequency","depth"]);super(t),this.name="Tremolo",this._lfoL=new nn({context:this.context,type:t.type,min:1,max:0}),this._lfoR=new nn({context:this.context,type:t.type,min:1,max:0}),this._amplitudeL=new dt({context:this.context}),this._amplitudeR=new dt({context:this.context}),this.frequency=new bt({context:this.context,value:t.frequency,units:"frequency"}),this.depth=new bt({context:this.context,value:t.depth,units:"normalRange"}),lt(this,["frequency","depth"]),this.connectEffectLeft(this._amplitudeL),this.connectEffectRight(this._amplitudeR),this._lfoL.connect(this._amplitudeL.gain),this._lfoR.connect(this._amplitudeR.gain),this.frequency.fan(this._lfoL.frequency,this._lfoR.frequency),this.depth.fan(this._lfoR.amplitude,this._lfoL.amplitude),this.spread=t.spread}static getDefaults(){return Object.assign(Un.getDefaults(),{frequency:10,type:"sine",depth:.5,spread:180})}start(t){return this._lfoL.start(t),this._lfoR.start(t),this}stop(t){return this._lfoL.stop(t),this._lfoR.stop(t),this}sync(){return this._lfoL.sync(),this._lfoR.sync(),this.context.transport.syncSignal(this.frequency),this}unsync(){return this._lfoL.unsync(),this._lfoR.unsync(),this.context.transport.unsyncSignal(this.frequency),this}get type(){return this._lfoL.type}set type(t){this._lfoL.type=t,this._lfoR.type=t}get spread(){return this._lfoR.phase-this._lfoL.phase}set spread(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}dispose(){return super.dispose(),this._lfoL.dispose(),this._lfoR.dispose(),this._amplitudeL.dispose(),this._amplitudeR.dispose(),this.frequency.dispose(),this.depth.dispose(),this}};var lg=class i extends we{constructor(){let t=L(i.getDefaults(),arguments,["frequency","depth"]);super(t),this.name="Vibrato",this._delayNode=new Tn({context:this.context,delayTime:0,maxDelay:t.maxDelay}),this._lfo=new nn({context:this.context,type:t.type,min:0,max:t.maxDelay,frequency:t.frequency,phase:-90}).start().connect(this._delayNode.delayTime),this.frequency=this._lfo.frequency,this.depth=this._lfo.amplitude,this.depth.value=t.depth,lt(this,["frequency","depth"]),this.effectSend.chain(this._delayNode,this.effectReturn)}static getDefaults(){return Object.assign(we.getDefaults(),{maxDelay:.005,frequency:5,depth:.1,type:"sine"})}get type(){return this._lfo.type}set type(t){this._lfo.type=t}dispose(){return super.dispose(),this._delayNode.dispose(),this._lfo.dispose(),this.frequency.dispose(),this.depth.dispose(),this}};var To=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["type","size"]);super(t),this.name="Analyser",this._analysers=[],this._buffers=[],this.input=this.output=this._gain=new dt({context:this.context}),this._split=new hs({context:this.context,channels:t.channels}),this.input.connect(this._split),Re(t.channels,1);for(let e=0;e<t.channels;e++)this._analysers[e]=this.context.createAnalyser(),this._split.connect(this._analysers[e],e,0);this.size=t.size,this.type=t.type,this.smoothing=t.smoothing}static getDefaults(){return Object.assign(tt.getDefaults(),{size:1024,smoothing:.8,type:"fft",channels:1})}getValue(){return this._analysers.forEach((t,e)=>{let n=this._buffers[e];this._type==="fft"?t.getFloatFrequencyData(n):this._type==="waveform"&&t.getFloatTimeDomainData(n)}),this.channels===1?this._buffers[0]:this._buffers}get size(){return this._analysers[0].frequencyBinCount}set size(t){this._analysers.forEach((e,n)=>{e.fftSize=t*2,this._buffers[n]=new Float32Array(t)})}get channels(){return this._analysers.length}get type(){return this._type}set type(t){yt(t==="waveform"||t==="fft",`Analyser: invalid type: ${t}`),this._type=t}get smoothing(){return this._analysers[0].smoothingTimeConstant}set smoothing(t){this._analysers.forEach(e=>e.smoothingTimeConstant=t)}dispose(){return super.dispose(),this._analysers.forEach(t=>t.disconnect()),this._split.dispose(),this._gain.dispose(),this}};var Bi=class i extends tt{constructor(){super(L(i.getDefaults(),arguments)),this.name="MeterBase",this.input=this.output=this._analyser=new To({context:this.context,size:256,type:"waveform"})}dispose(){return super.dispose(),this._analyser.dispose(),this}};var hg=class i extends Bi{constructor(){let t=L(i.getDefaults(),arguments,["smoothing"]);super(t),this.name="Meter",this.input=this.output=this._analyser=new To({context:this.context,size:256,type:"waveform",channels:t.channelCount}),this.smoothing=t.smoothing,this.normalRange=t.normalRange,this._rms=new Array(t.channelCount),this._rms.fill(0)}static getDefaults(){return Object.assign(Bi.getDefaults(),{smoothing:.8,normalRange:!1,channelCount:1})}getLevel(){return Gs("'getLevel' has been changed to 'getValue'"),this.getValue()}getValue(){let t=this._analyser.getValue(),n=(this.channels===1?[t]:t).map((s,r)=>{let o=s.reduce((c,l)=>c+l*l,0),a=Math.sqrt(o/s.length);return this._rms[r]=Math.max(a,this._rms[r]*this.smoothing),this.normalRange?this._rms[r]:Is(this._rms[r])});return this.channels===1?n[0]:n}get channels(){return this._analyser.channels}dispose(){return super.dispose(),this._analyser.dispose(),this}};var ug=class i extends Bi{constructor(){let t=L(i.getDefaults(),arguments,["size"]);super(t),this.name="FFT",this.normalRange=t.normalRange,this._analyser.type="fft",this.size=t.size}static getDefaults(){return Object.assign(tt.getDefaults(),{normalRange:!1,size:1024,smoothing:.8})}getValue(){return this._analyser.getValue().map(e=>this.normalRange?is(e):e)}get size(){return this._analyser.size}set size(t){this._analyser.size=t}get smoothing(){return this._analyser.smoothing}set smoothing(t){this._analyser.smoothing=t}getFrequencyOfIndex(t){return yt(0<=t&&t<this.size,`index must be greater than or equal to 0 and less than ${this.size}`),t*this.context.sampleRate/(this.size*2)}};var dg=class i extends Bi{constructor(){super(L(i.getDefaults(),arguments)),this.name="DCMeter",this._analyser.type="waveform",this._analyser.size=256}getValue(){return this._analyser.getValue()[0]}};var pg=class i extends Bi{constructor(){let t=L(i.getDefaults(),arguments,["size"]);super(t),this.name="Waveform",this._analyser.type="waveform",this.size=t.size}static getDefaults(){return Object.assign(Bi.getDefaults(),{size:1024})}getValue(){return this._analyser.getValue()}get size(){return this._analyser.size}set size(t){this._analyser.size=t}};var Ao=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["solo"]);super(t),this.name="Solo",this.input=this.output=new dt({context:this.context}),i._allSolos.has(this.context)||i._allSolos.set(this.context,new Set),i._allSolos.get(this.context).add(this),this.solo=t.solo}static getDefaults(){return Object.assign(tt.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(t){t?this._addSolo():this._removeSolo(),i._allSolos.get(this.context).forEach(e=>e._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){i._soloed.has(this.context)||i._soloed.set(this.context,new Set),i._soloed.get(this.context).add(this)}_removeSolo(){i._soloed.has(this.context)&&i._soloed.get(this.context).delete(this)}_isSoloed(){return i._soloed.has(this.context)&&i._soloed.get(this.context).has(this)}_noSolos(){return!i._soloed.has(this.context)||i._soloed.has(this.context)&&i._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),i._allSolos.get(this.context).delete(this),this._removeSolo(),this}};Ao._allSolos=new Map;Ao._soloed=new Map;var th=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["pan","volume"]);super(t),this.name="PanVol",this._panner=this.input=new vo({context:this.context,pan:t.pan,channelCount:t.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new ii({context:this.context,volume:t.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,lt(this,["pan","volume"])}static getDefaults(){return Object.assign(tt.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}};var rp=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["volume","pan"]);super(t),this.name="Channel",this._solo=this.input=new Ao({solo:t.solo,context:this.context}),this._panVol=this.output=new th({context:this.context,pan:t.pan,volume:t.volume,mute:t.mute,channelCount:t.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),lt(this,["pan","volume"])}static getDefaults(){return Object.assign(tt.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(t){this._solo.solo=t}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(t){this._panVol.mute=t}_getBus(t){return i.buses.has(t)||i.buses.set(t,new dt({context:this.context})),i.buses.get(t)}send(t,e=0){let n=this._getBus(t),s=new dt({context:this.context,units:"decibels",gain:e});return this.connect(s),s.connect(n),s}receive(t){return this._getBus(t).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}};rp.buses=new Map;var fg=class i extends tt{constructor(){super(L(i.getDefaults(),arguments)),this.name="Mono",this.input=new dt({context:this.context}),this._merge=this.output=new wi({channels:2,context:this.context}),this.input.connect(this._merge,0,0),this.input.connect(this._merge,0,1)}dispose(){return super.dispose(),this._merge.dispose(),this.input.dispose(),this}};var Eo=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["lowFrequency","highFrequency"]);super(t),this.name="MultibandSplit",this.input=new dt({context:this.context}),this.output=void 0,this.low=new An({context:this.context,frequency:0,type:"lowpass"}),this._lowMidFilter=new An({context:this.context,frequency:0,type:"highpass"}),this.mid=new An({context:this.context,frequency:0,type:"lowpass"}),this.high=new An({context:this.context,frequency:0,type:"highpass"}),this._internalChannels=[this.low,this.mid,this.high],this.lowFrequency=new bt({context:this.context,units:"frequency",value:t.lowFrequency}),this.highFrequency=new bt({context:this.context,units:"frequency",value:t.highFrequency}),this.Q=new bt({context:this.context,units:"positive",value:t.Q}),this.input.fan(this.low,this.high),this.input.chain(this._lowMidFilter,this.mid),this.lowFrequency.fan(this.low.frequency,this._lowMidFilter.frequency),this.highFrequency.fan(this.mid.frequency,this.high.frequency),this.Q.connect(this.low.Q),this.Q.connect(this._lowMidFilter.Q),this.Q.connect(this.mid.Q),this.Q.connect(this.high.Q),lt(this,["high","mid","low","highFrequency","lowFrequency"])}static getDefaults(){return Object.assign(tt.getDefaults(),{Q:1,highFrequency:2500,lowFrequency:400})}dispose(){return super.dispose(),Xs(this,["high","mid","low","highFrequency","lowFrequency"]),this.low.dispose(),this._lowMidFilter.dispose(),this.mid.dispose(),this.high.dispose(),this.lowFrequency.dispose(),this.highFrequency.dispose(),this.Q.dispose(),this}};var mg=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["positionX","positionY","positionZ"]);super(t),this.name="Panner3D",this._panner=this.input=this.output=this.context.createPanner(),this.panningModel=t.panningModel,this.maxDistance=t.maxDistance,this.distanceModel=t.distanceModel,this.coneOuterGain=t.coneOuterGain,this.coneOuterAngle=t.coneOuterAngle,this.coneInnerAngle=t.coneInnerAngle,this.refDistance=t.refDistance,this.rolloffFactor=t.rolloffFactor,this.positionX=new Bt({context:this.context,param:this._panner.positionX,value:t.positionX}),this.positionY=new Bt({context:this.context,param:this._panner.positionY,value:t.positionY}),this.positionZ=new Bt({context:this.context,param:this._panner.positionZ,value:t.positionZ}),this.orientationX=new Bt({context:this.context,param:this._panner.orientationX,value:t.orientationX}),this.orientationY=new Bt({context:this.context,param:this._panner.orientationY,value:t.orientationY}),this.orientationZ=new Bt({context:this.context,param:this._panner.orientationZ,value:t.orientationZ})}static getDefaults(){return Object.assign(tt.getDefaults(),{coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:0,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1})}setPosition(t,e,n){return this.positionX.value=t,this.positionY.value=e,this.positionZ.value=n,this}setOrientation(t,e,n){return this.orientationX.value=t,this.orientationY.value=e,this.orientationZ.value=n,this}get panningModel(){return this._panner.panningModel}set panningModel(t){this._panner.panningModel=t}get refDistance(){return this._panner.refDistance}set refDistance(t){this._panner.refDistance=t}get rolloffFactor(){return this._panner.rolloffFactor}set rolloffFactor(t){this._panner.rolloffFactor=t}get distanceModel(){return this._panner.distanceModel}set distanceModel(t){this._panner.distanceModel=t}get coneInnerAngle(){return this._panner.coneInnerAngle}set coneInnerAngle(t){this._panner.coneInnerAngle=t}get coneOuterAngle(){return this._panner.coneOuterAngle}set coneOuterAngle(t){this._panner.coneOuterAngle=t}get coneOuterGain(){return this._panner.coneOuterGain}set coneOuterGain(t){this._panner.coneOuterGain=t}get maxDistance(){return this._panner.maxDistance}set maxDistance(t){this._panner.maxDistance=t}dispose(){return super.dispose(),this._panner.disconnect(),this.orientationX.dispose(),this.orientationY.dispose(),this.orientationZ.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this}};var gg=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="Recorder",this.input=new dt({context:this.context}),yt(i.supported,"Media Recorder API is not available"),this._stream=this.context.createMediaStreamDestination(),this.input.connect(this._stream),this._recorder=new MediaRecorder(this._stream.stream,{mimeType:t.mimeType})}static getDefaults(){return tt.getDefaults()}get mimeType(){return this._recorder.mimeType}static get supported(){return wn!==null&&Reflect.has(wn,"MediaRecorder")}get state(){return this._recorder.state==="inactive"?"stopped":this._recorder.state==="paused"?"paused":"started"}start(){return ie(this,void 0,void 0,function*(){yt(this.state!=="started","Recorder is already started");let t=new Promise(e=>{let n=()=>{this._recorder.removeEventListener("start",n,!1),e()};this._recorder.addEventListener("start",n,!1)});return this.state==="stopped"?this._recorder.start():this._recorder.resume(),yield t})}stop(){return ie(this,void 0,void 0,function*(){yt(this.state!=="stopped","Recorder is not started");let t=new Promise(e=>{let n=s=>{this._recorder.removeEventListener("dataavailable",n,!1),e(s.data)};this._recorder.addEventListener("dataavailable",n,!1)});return this._recorder.stop(),yield t})}pause(){return yt(this.state==="started","Recorder must be started"),this._recorder.pause(),this}dispose(){return super.dispose(),this.input.dispose(),this._stream.disconnect(),this}};var Vi=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["threshold","ratio"]);super(t),this.name="Compressor",this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor,this.threshold=new Bt({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:"decibels",value:t.threshold}),this.attack=new Bt({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:"time",value:t.attack}),this.release=new Bt({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:"time",value:t.release}),this.knee=new Bt({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:"decibels",value:t.knee}),this.ratio=new Bt({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:"positive",value:t.ratio}),lt(this,["knee","release","attack","ratio","threshold"])}static getDefaults(){return Object.assign(tt.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}};var _g=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["threshold","smoothing"]);super(t),this.name="Gate",this._follower=new So({context:this.context,smoothing:t.smoothing}),this._gt=new Xl({context:this.context,value:is(t.threshold)}),this.input=new dt({context:this.context}),this._gate=this.output=new dt({context:this.context}),this.input.connect(this._gate),this.input.chain(this._follower,this._gt,this._gate.gain)}static getDefaults(){return Object.assign(tt.getDefaults(),{smoothing:.1,threshold:-40})}get threshold(){return Is(this._gt.value)}set threshold(t){this._gt.value=is(t)}get smoothing(){return this._follower.smoothing}set smoothing(t){this._follower.smoothing=t}dispose(){return super.dispose(),this.input.dispose(),this._follower.dispose(),this._gt.dispose(),this._gate.dispose(),this}};var xg=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["threshold"]);super(t),this.name="Limiter",this._compressor=this.input=this.output=new Vi({context:this.context,ratio:20,attack:.003,release:.01,threshold:t.threshold}),this.threshold=this._compressor.threshold,lt(this,"threshold")}static getDefaults(){return Object.assign(tt.getDefaults(),{threshold:-12})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.dispose(),this.threshold.dispose(),this}};var yg=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="MidSideCompressor",this._midSideSplit=this.input=new Mo({context:this.context}),this._midSideMerge=this.output=new wo({context:this.context}),this.mid=new Vi(Object.assign(t.mid,{context:this.context})),this.side=new Vi(Object.assign(t.side,{context:this.context})),this._midSideSplit.mid.chain(this.mid,this._midSideMerge.mid),this._midSideSplit.side.chain(this.side,this._midSideMerge.side),lt(this,["mid","side"])}static getDefaults(){return Object.assign(tt.getDefaults(),{mid:{ratio:3,threshold:-24,release:.03,attack:.02,knee:16},side:{ratio:6,threshold:-30,release:.25,attack:.03,knee:10}})}dispose(){return super.dispose(),this.mid.dispose(),this.side.dispose(),this._midSideSplit.dispose(),this._midSideMerge.dispose(),this}};var vg=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments);super(t),this.name="MultibandCompressor",this._splitter=this.input=new Eo({context:this.context,lowFrequency:t.lowFrequency,highFrequency:t.highFrequency}),this.lowFrequency=this._splitter.lowFrequency,this.highFrequency=this._splitter.highFrequency,this.output=new dt({context:this.context}),this.low=new Vi(Object.assign(t.low,{context:this.context})),this.mid=new Vi(Object.assign(t.mid,{context:this.context})),this.high=new Vi(Object.assign(t.high,{context:this.context})),this._splitter.low.chain(this.low,this.output),this._splitter.mid.chain(this.mid,this.output),this._splitter.high.chain(this.high,this.output),lt(this,["high","mid","low","highFrequency","lowFrequency"])}static getDefaults(){return Object.assign(tt.getDefaults(),{lowFrequency:250,highFrequency:2e3,low:{ratio:6,threshold:-30,release:.25,attack:.03,knee:10},mid:{ratio:3,threshold:-24,release:.03,attack:.02,knee:16},high:{ratio:3,threshold:-24,release:.03,attack:.02,knee:16}})}dispose(){return super.dispose(),this._splitter.dispose(),this.low.dispose(),this.mid.dispose(),this.high.dispose(),this.output.dispose(),this}};var Sg=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["low","mid","high"]);super(t),this.name="EQ3",this.output=new dt({context:this.context}),this._internalChannels=[],this.input=this._multibandSplit=new Eo({context:this.context,highFrequency:t.highFrequency,lowFrequency:t.lowFrequency}),this._lowGain=new dt({context:this.context,gain:t.low,units:"decibels"}),this._midGain=new dt({context:this.context,gain:t.mid,units:"decibels"}),this._highGain=new dt({context:this.context,gain:t.high,units:"decibels"}),this.low=this._lowGain.gain,this.mid=this._midGain.gain,this.high=this._highGain.gain,this.Q=this._multibandSplit.Q,this.lowFrequency=this._multibandSplit.lowFrequency,this.highFrequency=this._multibandSplit.highFrequency,this._multibandSplit.low.chain(this._lowGain,this.output),this._multibandSplit.mid.chain(this._midGain,this.output),this._multibandSplit.high.chain(this._highGain,this.output),lt(this,["low","mid","high","lowFrequency","highFrequency"]),this._internalChannels=[this._multibandSplit]}static getDefaults(){return Object.assign(tt.getDefaults(),{high:0,highFrequency:2500,low:0,lowFrequency:400,mid:0})}dispose(){return super.dispose(),Xs(this,["low","mid","high","lowFrequency","highFrequency"]),this._multibandSplit.dispose(),this.lowFrequency.dispose(),this.highFrequency.dispose(),this._lowGain.dispose(),this._midGain.dispose(),this._highGain.dispose(),this.low.dispose(),this.mid.dispose(),this.high.dispose(),this.Q.dispose(),this}};var bg=class i extends tt{constructor(){let t=L(i.getDefaults(),arguments,["url","onload"]);super(t),this.name="Convolver",this._convolver=this.context.createConvolver(),this._buffer=new De(t.url,e=>{this.buffer=e,t.onload()}),this.input=new dt({context:this.context}),this.output=new dt({context:this.context}),this._buffer.loaded&&(this.buffer=this._buffer),this.normalize=t.normalize,this.input.chain(this._convolver,this.output)}static getDefaults(){return Object.assign(tt.getDefaults(),{normalize:!0,onload:Xt})}load(t){return ie(this,void 0,void 0,function*(){this.buffer=yield this._buffer.load(t)})}get buffer(){return this._buffer.length?this._buffer:null}set buffer(t){t&&this._buffer.set(t),this._convolver.buffer&&(this.input.disconnect(),this._convolver.disconnect(),this._convolver=this.context.createConvolver(),this.input.chain(this._convolver,this.output));let e=this._buffer.get();this._convolver.buffer=e||null}get normalize(){return this._convolver.normalize}set normalize(t){this._convolver.normalize=t}dispose(){return super.dispose(),this._buffer.dispose(),this._convolver.disconnect(),this}};function nN(){return me().now()}function iN(){return me().immediate()}var sN=me().transport;function rN(){return me().transport}var Mg=me().destination,oN=me().destination;function aN(){return me().destination}var cN=me().listener;function lN(){return me().listener}var hN=me().draw;function uN(){return me().draw}var dN=me();function pN(){return De.loaded()}var fN=De,mN=Ys,gN=bi;var Gb={"00":{lead:"sine",pad:"sine",scale:["D5","F5","A5","C6","E6"],chord:["D4","A4","E5","F5"],bass:"D2",click:"tick",kick:!1,rev:1.8,revWet:.2,dly:0,drone:["D3","A3"],droneVol:-30,logo:["A4","C5","E5","F5"]},"01":{lead:"sawtooth",pad:"sawtooth",scale:["D5","F5","A5","C6","D6"],chord:["D3","A3","F4","A4","D5"],bass:"D1",click:"noise",kick:!0,rev:4,revWet:.35,dly:.375,drone:["D2","A2","F3"],droneVol:-27,cutoff:1400,logo:["A5","C6","E6","F6"]},"02":{lead:"square",pad:"triangle",scale:["A5","C6","E6","A6","C7"],chord:["A3","E4","C5","E5"],bass:"A1",click:"metal",kick:!1,rev:1.5,revWet:.2,dly:.12,drone:["A2","E3"],droneVol:-28,wobble:!0,beep:!0,cutoff:1800,logo:["E5","G5","B5","C6"]},"03":{lead:"fm",pad:"triangle",scale:["F5","A5","C6","D6","F6"],chord:["F3","C4","A4","C5","F5"],bass:"F1",click:"metal",kick:!0,rev:2.6,revWet:.3,dly:0,drone:["F2","C3"],droneVol:-31,theremin:!0,logo:["A5","C6","E6","F6"]},"04":{lead:"square",pad:"square",scale:["E5","G5","B5","E6","G6"],chord:["E3","B3","G4","B4"],bass:"E1",click:"tick",kick:!1,rev:1.2,revWet:.12,dly:.5,drone:["E2"],droneVol:-32,ping:!0,cutoff:1100,logo:["B5","D6","F#6","G6"]},"05":{lead:"sawtooth",pad:"sawtooth",scale:["C5","Eb5","G5","Bb5","C6"],chord:["C3","G3","Eb4","Bb4","D5"],bass:"C1",click:"noise",kick:!0,rev:6,revWet:.45,dly:.5,drone:["C2","G2"],droneVol:-28,rain:!0,buzz:!0,cutoff:900,logo:["G4","Bb4","D5","Eb5"]},"06":{lead:"sine",pad:"fatsine",scale:["G5","B5","D6","E6","G6"],chord:["G3","D4","B4","E5","G5"],bass:"G1",click:null,kick:!1,rev:5,revWet:.45,dly:0,drone:["G2","D3","B3"],droneVol:-23,cutoff:2200,logo:["B5","D6","F#6","G6"]}};function Hb(i){let t=Gb[i]||Gb["01"],e=wg,n=[],s=M=>(n.push(M),M),r=s(new e.Gain(.9)).toDestination(),o=s(new e.Reverb({decay:t.rev,wet:t.revWet})).connect(r),a=o;if(t.dly){let M=s(new e.PingPongDelay(t.dly,.35));M.wet.value=.28,M.connect(o),a=M}if(t.wobble){let M=s(new e.Vibrato(5.5,.12));M.connect(a),a=M}let c=t.lead==="fm"?s(new e.PolySynth(e.FMSynth,{harmonicity:2,modulationIndex:6,envelope:{attack:.01,decay:.25,sustain:.2,release:.6},volume:-18})).connect(a):s(new e.PolySynth(e.Synth,{oscillator:{type:t.lead},envelope:{attack:.005,decay:.18,sustain:.15,release:.4},volume:-18})).connect(a),l=t.theremin?s(new e.Synth({oscillator:{type:"sine"},portamento:.25,envelope:{attack:.15,decay:.2,sustain:.7,release:.8},volume:-18})):null;if(l){let M=s(new e.Vibrato(6,.25)).connect(o);l.connect(M)}let h=s(new e.Filter(t.cutoff||3e3,"lowpass")).connect(a),u=s(new e.PolySynth(e.Synth,{oscillator:{type:t.pad},envelope:{attack:.6,decay:.5,sustain:.8,release:2.5},volume:-20})).connect(h),d=s(new e.PolySynth(e.FMSynth,{harmonicity:3.5,modulationIndex:1.4,oscillator:{type:"sine"},modulation:{type:"sine"},envelope:{attack:.006,decay:2.2,sustain:0,release:1.8},modulationEnvelope:{attack:.002,decay:.2,sustain:0,release:.2},volume:-12})).connect(o),p=t.kick?s(new e.MembraneSynth({pitchDecay:.05,octaves:5,envelope:{attack:.002,decay:.45,sustain:0},volume:-14})).connect(r):null,f=s(new e.Filter(300,"bandpass",-24)).connect(o);f.Q.value=2;let x=s(new e.NoiseSynth({noise:{type:"pink"},envelope:{attack:.85,decay:.05,sustain:0,release:.1},volume:-22})).connect(f),g=null;t.click==="metal"?g=s(new e.MetalSynth({envelope:{attack:.001,decay:.06,release:.02},harmonicity:5.1,resonance:4e3,volume:-30})).connect(a):t.click==="noise"?g=s(new e.NoiseSynth({noise:{type:"white"},envelope:{attack:.001,decay:.1,sustain:0},volume:-24})).connect(o):t.click==="tick"&&(g=s(new e.Synth({oscillator:{type:"sine"},envelope:{attack:.001,decay:.03,sustain:0,release:.01},volume:-18})).connect(a));let m=s(new e.PolySynth(e.Synth,{oscillator:{type:t.pad==="fatsine"?"fatsine":"triangle"},envelope:{attack:2.5,decay:1,sustain:1,release:2.5},volume:t.droneVol})).connect(h),w=s(new e.LFO(.07,(t.cutoff||3e3)*.4,t.cutoff||3e3)).connect(h.frequency),E=null,S=null;if(t.rain){let M=s(new e.Filter(1800,"highpass")).connect(r);E=s(new e.Noise({type:"pink",volume:-38})).connect(M)}if(t.buzz){let M=s(new e.Filter(500,"lowpass")).connect(r);S=s(new e.Oscillator({frequency:60,type:"sawtooth",volume:-44})).connect(M)}let y=()=>e.now()+.05,b=0;return{ready:o.ready,build(){let M=y(),_=t.scale;if(g)for(let T=0;T<5;T++){let C=M+T*.045;t.click==="tick"?g.triggerAttackRelease(_[T%_.length],"64n",C):t.click==="metal"?g.triggerAttackRelease("C6","64n",C,.6):g.triggerAttackRelease("32n",C,.4)}t.beep&&[0,.12,.24].forEach(T=>c.triggerAttackRelease("A6",.05,M+.3+T,.4)),_.forEach((T,C)=>c.triggerAttackRelease(T,.12,M+.35+C*.075,.6)),f.frequency.cancelScheduledValues(M),f.frequency.setValueAtTime(300,M+.7),f.frequency.exponentialRampToValueAtTime(6e3,M+1.55),x.triggerAttackRelease(.9,M+.7),p&&p.triggerAttackRelease(t.bass,"4n",M+1.45,.7),u.triggerAttackRelease(t.chord,2.6,M+1.45,.7),d.triggerAttackRelease(_[_.length-1],1.2,M+1.45,.5),l&&(l.triggerAttack(_[0],M+.7),l.setNote(_[4],M+1.2),l.triggerRelease(M+1.7)),t.ping&&[0,.5,1].forEach((T,C)=>d.triggerAttackRelease("E6",.4,M+2.2+T,.45/(C+1)))},logo(M=0){let _=y()+M,[T,C,I,P]=t.logo;[[T,0],[C,.24],[I,.48]].forEach(([V,O])=>d.triggerAttackRelease(V,.9,_+O,.55)),d.triggerAttackRelease(P,2.2,_+.96,.8),u.triggerAttackRelease(t.chord.slice(0,3),2.2,_+.96,.45),p&&p.triggerAttackRelease(t.bass,"8n",_+.96,.35)},note(M,_=.35){let T=e.now();if(T-b<.085)return;b=T;let C=t.scale;c.triggerAttackRelease(C[(M%C.length+C.length)%C.length],.09,T+.01,_)},ui(M){let _=y(),T=t.scale,[C,I,P,V]=t.logo;M==="tap"&&(g&&t.click==="tick"?g.triggerAttackRelease(T[2],"64n",_):c.triggerAttackRelease(T[2],.05,_,.35)),M==="hover"&&c.triggerAttackRelease(T[0],.06,_,.18),M==="success"&&(d.triggerAttackRelease(I,.5,_,.45),d.triggerAttackRelease(V,1.4,_+.14,.6)),M==="notify"&&(d.triggerAttackRelease(C,.6,_,.45),d.triggerAttackRelease(P,1.2,_+.16,.5)),M==="signal"&&(d.triggerAttackRelease(V,1.6,_,.6),u.triggerAttackRelease(t.chord.slice(0,2),.9,_,.3))},settle(){let M=y();u.triggerAttackRelease(t.chord.slice(0,3),1.6,M,.4)},part(M){let _=y(),T=t.scale;M==="core"&&d.triggerAttackRelease(T[T.length-1],1.4,_,.45),M==="ring"&&u.triggerAttackRelease(t.chord.slice(0,3),1.8,_,.4),M==="frame"&&(p&&p.triggerAttackRelease(t.bass,"8n",_,.45),u.triggerAttackRelease([t.chord[0]],1.2,_,.35)),M==="lattice"&&T.forEach((C,I)=>c.triggerAttackRelease(C,.1,_+I*.075,.45))},start(){m.triggerAttack(t.drone,y()),w.start(),E?.start(),S?.start()},stop(){let M=y();m.releaseAll(M),E?.stop(M+.3),S?.stop(M+.3),r.gain.rampTo(0,1,M),setTimeout(()=>n.forEach(_=>{try{_.dispose()}catch{}}),2400)}}}var Wb=null;async function qb(i){return Wb!==i&&(Pr(i),Wb=i),await qd(),Mg.volume.value=-8,i.state==="running"}var Tg={core:{n:"01",name:"The Core",path:"Get started with AI",line:"Find one useful first task. Build the context and confidence to do it well.",color:"#ff3b3b",changes:["Pick one recurring task worth improving","Capture your business context once, reuse it everywhere","Get a reviewed, useful result your team can see"],resource:"Find your first use case",kind:"Prompt"},ring:{n:"02",name:"The Ring",path:"Build team capability",line:"Shared practices, reusable prompts, and clear ownership of quality.",color:"#b04dff",changes:["Shared prompts and practices the team owns","Clear review and ownership for AI output","A working agreement for how AI is used"],resource:"Team AI working agreement",kind:"Template"},frame:{n:"03",name:"The Frame",path:"Connect and automate work",line:"Map the recurring work, connect the tools, and add review gates.",color:"#2f7bff",changes:["A map of the recurring work and its handoffs","A focused pilot with a human review gate","Connected tools and fewer manual steps"],resource:"Workflow map",kind:"Template"},lattice:{n:"04",name:"The Lattice",path:"Build your AI operating system",line:"Context, tools, workflows, permissions and selected agents, connected.",color:"#00d4ff",changes:["Shared context across tools and teams","Permissions and review built in from day one","Selected agents where they earn their place"],resource:"Pilot scorecard",kind:"Template"}},wgt=["core","ring","frame","lattice"],Ag=null,Ai=null,Eg={};async function Agt(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}return Ag??=new(window.AudioContext||window.webkitAudioContext),Ag.resume(),await qb(Ag),Ai||(Ai=Hb("01"),await Ai.ready,Ai.start(),Ai.build()),!0}function Egt(){Ai?.stop(),Ai=null}var Cg=(i,t)=>{let e=performance.now()/1e3;return!Ai||Eg[i]&&e-Eg[i]<t?!1:(Eg[i]=e,!0)},Rg={hover(i){Cg(i,.7)&&Ai.part(i)},select(){Cg("select",.4)&&Ai.logo()},step(i){Ai&&Ai.note(i)},tick(){Cg("tick",.12)&&Ai.ui("tap")}},Xb=Math.sqrt(3),Ti={T:.085,ringW:.032,hex:.25,D4:2};Ti.ringR=.5-Ti.T-Ti.ringW/2;var nc=i=>[[0,i],[-Xb/2*i,-i/2],[Xb/2*i,-i/2]],jb=[];for(let i=0;i<16;i++)jb.push([i&1?1:-1,i&2?1:-1,i&4?1:-1,i&8?1:-1]);var op=[];for(let i=0;i<16;i++)for(let t=0;t<4;t++){let e=i^1<<t;i<e&&op.push([i,e])}var _N=(i,t)=>{let e=Ti.hex/Math.SQRT2,n=Math.cos(i),s=Math.sin(i),r=Math.cos(t),o=Math.sin(t);return jb.map(([a,c,l,h])=>{let u=a*n-h*s,d=a*s+h*n,p=l*r-d*o,f=l*o+d*r,x=1/(Ti.D4+f)*e;return[u*x,c*x,p*x]})},eh=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Yb=i=>1+2.70158*(i-1)**3+1.70158*(i-1)**2;function Cgt(i,t={}){let e=matchMedia("(prefers-reduced-motion: reduce)").matches,n=new dd({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(2,devicePixelRatio||1)),n.outputColorSpace=Yn,i.prepend(n.domElement),Object.assign(n.domElement.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"});let s=new Ac;s.background=new Qt("#040810"),s.fog=new Tc("#040810",3.6,9);let r=new zn(32,1,.1,40),o=new _d(n);o.addPass(new xd(s,r));let a=new Sa(new mt(256,256),.5,.45,.3);if(o.addPass(a),o.addPass(new yd),t.grid!==!1){let Q=new tl(16,48,"#00d4ff","#00d4ff");Q.position.y=-1.05,Q.material.transparent=!0,Q.material.opacity=.07,s.add(Q)}let c=document.createElement("canvas");c.width=c.height=32;{let Q=c.getContext("2d"),gt=Q.createRadialGradient(16,16,0,16,16,16);gt.addColorStop(0,"rgba(255,255,255,1)"),gt.addColorStop(1,"rgba(255,255,255,0)"),Q.fillStyle=gt,Q.fillRect(0,0,32,32)}let l=t.snow??900,h=new Float32Array(l*3),u=new Float32Array(l);for(let Q=0;Q<l;Q++)h[Q*3]=(Math.random()-.5)*9,h[Q*3+1]=(Math.random()-.5)*5,h[Q*3+2]=(Math.random()-.5)*6-1,u[Q]=.15+Math.random()*.35;let d=new $e;d.setAttribute("position",new Gn(h,3)),s.add(new Lc(d,new sa({size:.03,map:new ra(c),transparent:!0,depthWrite:!1,color:"#cfe0ff",opacity:.45})));let p=new ji,f=new ji;p.add(f),s.add(p);let x=new jr(nc(1).map(Q=>new mt(...Q)));x.holes.push(new hr(nc(1-2*Ti.T).reverse().map(Q=>new mt(...Q))));let g=new la(x,{depth:.09,bevelEnabled:!0,bevelThickness:.012,bevelSize:.008,bevelSegments:3});g.translate(0,0,-.045);let m={frame:new Qt(Tg.frame.color),ring:new Qt(Tg.ring.color),lattice:new Qt("#e8f0ff"),core:new Qt(Tg.core.color)},w=new Je(g,new pi({color:m.frame.clone()}));f.add(w);let E=new Je(new ha(Ti.ringR,Ti.ringW/2*1.05,20,180),new pi({color:m.ring.clone()}));f.add(E);let S=(()=>{let Q=new ui().setFromUnitVectors(new k(1,1,1).normalize(),new k(0,0,1)),gt=new k(1,1,-1).applyQuaternion(Q);return new ui().setFromAxisAngle(new k(0,0,1),Math.PI/2-Math.atan2(gt.y,gt.x)).multiply(Q)})(),y=new ji;y.quaternion.copy(S),f.add(y);let b=new Float32Array(op.length*6),M=new ba;M.setPositions(b);let _=new Ma({color:m.lattice.clone(),linewidth:2.4,worldUnits:!1});y.add(new Md(M,_));let T=new Dc(new ur(.013,10,8),new pi({color:"#e8f0ff"}),16);y.add(T);let C=new Je(new ur(.03,20,16),new pi({color:m.core.clone().multiplyScalar(1.4)}));f.add(C);let I=document.createElement("canvas");I.width=I.height=128;{let Q=I.getContext("2d"),gt=Q.createRadialGradient(64,64,0,64,64,64);gt.addColorStop(0,"rgba(255,59,59,.55)"),gt.addColorStop(1,"rgba(255,59,59,0)"),Q.fillStyle=gt,Q.fillRect(0,0,128,128)}let P=new Ic(new ia({map:new ra(I),transparent:!0,depthWrite:!1}));P.scale.setScalar(.35),f.add(P);let V=new pi({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),O=[],F=(Q,gt)=>{let ft=new Je(Q,V);return ft.userData.part=gt,f.add(ft),O.push(ft),ft};F(new ur(.075,16,12),"core"),F(new ur(Ti.hex*.95,20,16),"lattice"),F(new ha(Ti.ringR,.05,10,90),"ring");{let Q=new jr(nc(1.03).map(ft=>new mt(...ft)));Q.holes.push(new hr(nc(1-2*Ti.T-.06).reverse().map(ft=>new mt(...ft))));let gt=new la(Q,{depth:.2,bevelEnabled:!1});gt.translate(0,0,-.1),F(gt,"frame")}let D=["core","lattice","ring","frame"],R={hover:null,selected:null,a:.6,b:.2,ta:.6,tb:.2,step:null,clock:0,build0:0,ripple:-9,drag:null,moved:0},G=new _e,U=new Kc,W=new mt,B=new k,pt={hover(Q){Q!==R.hover&&(R.hover=Q,Q&&Rg.hover(Q),t.onHover?.(Q),i.style.cursor=Q?"pointer":"grab")},select(Q){R.selected=Q,Q&&(R.ripple=R.clock,Rg.select()),t.onSelect?.(Q)},get selected(){return R.selected}},xt=Q=>{let gt=n.domElement.getBoundingClientRect();W.set((Q.clientX-gt.left)/gt.width*2-1,-((Q.clientY-gt.top)/gt.height)*2+1),U.setFromCamera(W,r);let ft=new Set(U.intersectObjects(O,!1).map(Lt=>Lt.object.userData.part));return D.find(Lt=>ft.has(Lt))??null},Yt=n.domElement;Yt.style.touchAction="pan-y",Yt.addEventListener("pointermove",Q=>{if(R.drag){let gt=Q.clientX-R.drag.x,ft=Q.clientY-R.drag.y;R.moved+=Math.abs(gt)+Math.abs(ft),R.ta+=gt*.012,R.tb+=ft*.008,R.drag={x:Q.clientX,y:Q.clientY};return}Q.pointerType==="mouse"&&pt.hover(xt(Q))}),Yt.addEventListener("pointerdown",Q=>{R.drag={x:Q.clientX,y:Q.clientY},R.moved=0}),Yt.addEventListener("pointerup",Q=>{let gt=R.moved>8;if(R.drag=null,gt)return;let ft=xt(Q);ft&&(pt.hover(ft),pt.select(ft))}),Yt.addEventListener("pointerleave",()=>{R.drag=null,R.selected||pt.hover(null)});let Mt=()=>{let Q=i.clientWidth,gt=i.clientHeight;n.setSize(Q,gt,!1),o.setSize(Q,gt),r.aspect=Q/gt,r.updateProjectionMatrix(),_.resolution.set(Q,gt)};new ResizeObserver(Mt).observe(i),Mt();let Ot=performance.now(),J=!0;new IntersectionObserver(([Q])=>{J=Q.isIntersecting}).observe(i);let X=Q=>{if(requestAnimationFrame(X),!J){Ot=Q;return}let gt=Math.min(.1,(Q-Ot)/1e3);Ot=Q,R.clock+=gt;let ft=gt,Lt=R.clock,he=t.layout?t.layout(r.aspect):{x:0,y:0,scale:1},rt=R.selected,j=rt||R.hover;p.position.x+=((rt&&he.selX!==void 0?he.selX:he.x)-p.position.x)*(1-Math.exp(-ft*4)),p.position.y=he.y??0;let nt=he.scale*(rt?he.selScale??1:1);p.scale.setScalar(p.scale.x+(nt-p.scale.x)*(1-Math.exp(-ft*4))),r.position.set(0,.05,3.6),r.lookAt(0,0,0);let ct=e?9:Lt-R.build0;w.scale.setScalar(Yb(eh((ct-.4)/1.1))),E.scale.setScalar(Yb(eh((ct-1.2)/.9))),!R.drag&&!e&&(R.ta+=ft*(j==="lattice"?.45:.16)),R.a+=(R.ta-R.a)*(1-Math.exp(-ft*5)),R.b+=(R.tb-R.b)*(1-Math.exp(-ft*5));let ht=Math.floor(R.a/(Math.PI/6));R.step!==null&&ht!==R.step&&R.drag&&Rg.step(ht),R.step=ht;let _t=eh((ct-1.9)/1.4),St=_N(R.a,eh(.3*Math.sin(R.a*.37)+R.b*.25,-.38,.38));for(let Wt=0;Wt<op.length;Wt++){let[ne,N]=op[Wt];b.set([...St[ne].map(v=>v*_t),...St[N].map(v=>v*_t)],Wt*6)}M.setPositions(b),St.forEach((Wt,ne)=>{G.makeTranslation(Wt[0]*_t,Wt[1]*_t,Wt[2]*_t),T.setMatrixAt(ne,G)}),T.instanceMatrix.needsUpdate=!0;let Ut=(Wt,ne)=>ne.copy(m[Wt]).multiplyScalar(j?j===Wt?1.25:.55:1);Ut("frame",w.material.color),Ut("ring",E.material.color),Ut("lattice",_.color),Ut("core",C.material.color);let jt=Lt-R.ripple,z=1+Math.sin(Lt*1.4)*.06+(j==="core"?.25:0)+(jt<1.6?(1-jt/1.6)*.7:0);if(C.scale.setScalar(eh((ct-3.1)/.6)*1.2*z),P.scale.setScalar(.35*z*(j&&j!=="core"?.5:1)),f.rotation.set(Math.sin(Lt*.5)*(e?0:.08),Math.sin(Lt*.37)*(e?0:.22)+(R.drag,0),0),a.strength=.5+(jt<1.6?(1-jt/1.6)*.25:0),!e){for(let Wt=0;Wt<l;Wt++)h[Wt*3+1]-=u[Wt]*ft,h[Wt*3]+=Math.sin(Lt*.4+Wt)*.002+ft*.05,h[Wt*3+1]<-2.5&&(h[Wt*3+1]=2.5,h[Wt*3]=(Math.random()-.5)*9);d.attributes.position.needsUpdate=!0}if(o.render(),t.onFrame){let Wt={w:i.clientWidth,h:i.clientHeight},ne=(v,Y,K,it=f)=>(B.set(v,Y,K),it.localToWorld(B),B.project(r),[(B.x+1)/2*Wt.w,(1-B.y)/2*Wt.h]),N=St[5].map(v=>v*_t);t.onFrame({core:ne(0,0,0),ring:ne(Math.cos(-.5)*Ti.ringR,Math.sin(-.5)*Ti.ringR,0),frame:ne(nc(1)[2][0]*.82,nc(1)[2][1]*.82+.02,0),lattice:ne(N[0],N[1],N[2],y)})}};return requestAnimationFrame(X),pt}export{wgt as ORDER,Tg as PARTS,Cgt as mountMark,Rg as sfx,Egt as soundOff,Agt as soundOn};
