(()=>{"use strict";var e,t,r,a,o,n={},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,c),r.loaded=!0,r.exports}c.m=n,c.c=i,e=[],c.O=(t,r,a,o)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var i=!0,d=0;d<r.length;d++)(!1&o||n>=o)&&Object.keys(c.O).every((e=>c.O[e](r[d])))?r.splice(d--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var f=a();void 0!==f&&(t=f)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var i=2&a&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,c.d(o,n),o},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({48:"a94703ab",61:"1f391b9e",98:"a7bd4aaa",100:"497cce4d",134:"393be207",211:"2a041a4e",235:"a7456010",270:"2be7ad0f",401:"17896441",409:"3c946100",414:"5234ec0a",461:"56ac369c",477:"b4e0ed80",488:"19ebc8d1",634:"c4f5d8e4",647:"5e95c892",706:"83180ab2",742:"aba21aa0",744:"95509214",787:"73aad76a",893:"15808048",899:"62247e42",969:"14eb3368"}[e]||e)+"."+{48:"587d25aa",61:"506e8fd6",98:"bc3784b1",100:"78a65b55",134:"07a48660",211:"9bbf7a6d",235:"ac7a73ae",237:"0c473fa1",270:"244f4c02",401:"09b7f468",409:"2cbd5183",414:"bde75d07",461:"c400f4d4",477:"47c763f3",488:"497a9289",634:"9c112d48",647:"1a0c9aaf",706:"3f148c03",742:"1f90f7fb",744:"0067106f",787:"2af7a27a",888:"292b36f3",893:"2d5a85b4",899:"864acfbb",969:"8b3b67bf"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="wixua-ttrpg:",c.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var i,d;if(void 0!==r)for(var f=document.getElementsByTagName("script"),u=0;u<f.length;u++){var b=f[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+r){i=b;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",o+r),i.src=e),a[e]=[t];var l=(t,r)=>{i.onerror=i.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),d&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/wuxia/",c.gca=function(e){return e={15808048:"893",17896441:"401",95509214:"744",a94703ab:"48","1f391b9e":"61",a7bd4aaa:"98","497cce4d":"100","393be207":"134","2a041a4e":"211",a7456010:"235","2be7ad0f":"270","3c946100":"409","5234ec0a":"414","56ac369c":"461",b4e0ed80:"477","19ebc8d1":"488",c4f5d8e4:"634","5e95c892":"647","83180ab2":"706",aba21aa0:"742","73aad76a":"787","62247e42":"899","14eb3368":"969"}[e]||e,c.p+c.u(e)},(()=>{var e={354:0,869:0};c.f.j=(t,r)=>{var a=c.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=c.p+c.u(t),i=new Error;c.l(n,(r=>{if(c.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],i=r[1],d=r[2],f=0;if(n.some((t=>0!==e[t]))){for(a in i)c.o(i,a)&&(c.m[a]=i[a]);if(d)var u=d(c)}for(t&&t(r);f<n.length;f++)o=n[f],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(u)},r=self.webpackChunkwixua_ttrpg=self.webpackChunkwixua_ttrpg||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();