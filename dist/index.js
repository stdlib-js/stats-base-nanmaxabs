"use strict";var f=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var c=f(function(z,o){
var k=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-abs/dist');function l(a,i,u){var v,n,e,r;if(a<=0)return NaN;if(a===1||u===0)return i[0];for(u<0?n=(1-a)*u:n=0,r=0;r<a&&(e=i[n],e!==e);r++)n+=u;if(r===a)return NaN;for(v=s(e),r+=1,r;r<a;r++)n+=u,e=s(i[n]),!k(e)&&e>v&&(v=e);return v}o.exports=l
});var x=f(function(A,b){
var O=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function R(a,i,u,v){var n,e,r,t;if(a<=0)return NaN;if(a===1||u===0)return i[v];for(e=v,t=0;t<a&&(r=i[e],r!==r);t++)e+=u;if(t===a)return NaN;for(n=q(r),t+=1,t;t<a;t++)e+=u,r=q(i[e]),!O(r)&&r>n&&(n=r);return n}b.exports=R
});var y=f(function(B,p){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=c(),h=x();g(m,"ndarray",h);p.exports=m
});var j=y();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
