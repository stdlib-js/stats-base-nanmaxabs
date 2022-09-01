// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;function c(e){return e!=e}function _(e){return Math.abs(e)}function p(e,r,t){var n,o,a,i;if(e<=0)return NaN;if(1===e||0===t)return r[0];for(o=t<0?(1-e)*t:0,i=0;i<e&&(a=r[o])!=a;i++)o+=t;if(i===e)return NaN;for(n=_(a),i+=1;i<e;i++)c(a=_(r[o+=t]))||a>n&&(n=a);return n}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},r(p,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,a,i,u;if(e<=0)return NaN;if(1===e||0===t)return r[n];for(a=n,u=0;u<e&&(i=r[a])!=i;u++)a+=t;if(u===e)return NaN;for(o=_(i),u+=1;u<e;u++)c(i=_(r[a+=t]))||i>o&&(o=i);return o}});const{ndarray:d}=p;e.default=p,e.ndarray=d,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).nanmaxabs={});
//# sourceMappingURL=index.js.map
