(function(e){function t(t){for(var r,a,o=t[0],i=t[1],l=t[2],s=0,f=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&f.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==u[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},u={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-100a2f6e":"3ded4dfd","chunk-18ae0253":"a961e1e3","chunk-45a5d6e9":"30a11077","chunk-7a93a4c2":"26ca9a7e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-100a2f6e":1,"chunk-18ae0253":1,"chunk-45a5d6e9":1,"chunk-7a93a4c2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-100a2f6e":"a8a73028","chunk-18ae0253":"9526ebbe","chunk-45a5d6e9":"bf450e0f","chunk-7a93a4c2":"6e067a3e"}[e]+".css",u=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===u))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],s=l.getAttribute("data-href");if(s===r||s===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}u[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],c=(n("5c0b"),n("2877")),o={},i=Object(c["a"])(o,a,u,!1,null,null,null),l=i.exports,s=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-home"},[n("div",[n("Header",{on:{getSearchValue:e.getSearchValue}}),n("Table",{attrs:{searchedElement:e.searchValue}})],1),n("Footer")],1)},d=[],p=n("d4ec"),h=n("bee2"),b=n("262e"),v=n("2caf"),m=(n("d3b7"),n("3ca3"),n("ddb0"),n("9ab4")),g=n("1b40"),y=function(){return n.e("chunk-100a2f6e").then(n.bind(null,"0418"))},k=function(){return n.e("chunk-45a5d6e9").then(n.bind(null,"0748"))},j=function(){return n.e("chunk-18ae0253").then(n.bind(null,"9d10"))},O=function(e){Object(b["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.searchValue="",e}return Object(h["a"])(n,[{key:"getSearchValue",value:function(e){this.searchValue=e}}]),n}(g["c"]);O=Object(m["a"])([Object(g["a"])({components:{Header:y,Table:k,Footer:j}})],O);var w=O,S=w,_=(n("21bb"),Object(c["a"])(S,f,d,!1,null,null,null)),E=_.exports;r["default"].use(s["a"]);var P=[{path:"/",name:"Home",component:E}],x=new s["a"]({mode:"history",base:"/",routes:P}),T=x,C=n("2f62"),A=n("1da1"),V=(n("96cf"),n("6fc5")),L=n("bc3a"),N=n.n(L),H=function(e){Object(b["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return Object(h["a"])(n,[{key:"getPackages",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("https://data.jsdelivr.com/v1/stats/packages");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()}]),n}(V["c"]);Object(m["a"])([V["a"]],H.prototype,"getPackages",null),H=Object(m["a"])([V["b"]],H);var M=H;r["default"].use(C["a"]);var B=new C["a"].Store({modules:{packages:M}}),F=n("5f5b"),$=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(F["a"]),r["default"].use($["a"]),r["default"].config.productionTip=!1,new r["default"]({router:T,store:B,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.f754e3c3.js.map