(function(e){function t(t){for(var r,a,c=t[0],s=t[1],i=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-05959d18":"4bb17179","chunk-1fa4a925":"ffaaf4aa","chunk-2b526a74":"14928b86","chunk-3f8e34b0":"c21d2944","chunk-533ee0ec":"9bb4016f","chunk-64ce90f4":"cc1999cc","chunk-7f998dde":"ffece210","chunk-9d9914a6":"d67eed66"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-05959d18":1,"chunk-1fa4a925":1,"chunk-2b526a74":1,"chunk-3f8e34b0":1,"chunk-533ee0ec":1,"chunk-64ce90f4":1,"chunk-7f998dde":1,"chunk-9d9914a6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-05959d18":"849f124c","chunk-1fa4a925":"91075764","chunk-2b526a74":"8287c234","chunk-3f8e34b0":"3cc476a7","chunk-533ee0ec":"a9e01428","chunk-64ce90f4":"e6031fdc","chunk-7f998dde":"2acb9a08","chunk-9d9914a6":"9490e81a"}[e]+".css",o=s.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2b7c":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,u){var c={url:e,method:t};"get"===t.toLowerCase()?c.params=n:c.data=n,a()(c).then((function(e){"ok"===e.data.status?r(e.data):(o["Message"].error(e.data.msg),u(e.data))})).catch((function(){o["Message"].error("网络异常"),u({msg:"网络异常"})}))}))}a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",a.a.defaults.baseURL="",a.a.defaults.withCredentials=!0},5064:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5c96"),o=n.n(a);n("ecc5");r["default"].use(o.a);n("45fc"),n("d3b7");var u=n("8c4f"),c=n("2f62"),s=(n("96cf"),n("1da1")),i=n("2b7c"),l={REGISTER:"/auth/register",LOGIN:"/auth/login",LOGOUT:"/auth/logout",GET_INFO:"/auth"},f={register:function(e){var t=e.username,n=e.password;return Object(i["a"])(l.REGISTER,"POST",{username:t,password:n})},login:function(e){var t=e.username,n=e.password;return Object(i["a"])(l.LOGIN,"POST",{username:t,password:n})},logout:function(){return Object(i["a"])(l.LOGOUT)},getInfo:function(){return Object(i["a"])(l.GET_INFO)}},d={userInfo:null,loginStatus:!1},h={userInfo:function(e){return e.userInfo},loginStatus:function(e){return e.loginStatus}},p={setUserInfo:function(e,t){e.userInfo=t.userInfo},setLoginStatus:function(e,t){e.loginStatus=t.loginStatus}},g={login:function(e,t){var n=e.commit,r=t.username,a=t.password;return f.login({username:r,password:a}).then((function(e){n("setUserInfo",{userInfo:e.data}),n("setLoginStatus",{loginStatus:!0})}))},register:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.username,o=n.password,e.next=4,f.register({username:a,password:o});case 4:return u=e.sent,r("setUserInfo",{userInfo:u.data}),r("setLoginStatus",{loginStatus:!0}),e.abrupt("return",u.data);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,f.logout();case 3:n("setUserInfo",{userInfo:null}),n("setLoginStatus",{loginStatus:!1});case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),checkLoginStatus:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,!r.loginStatus){e.next=3;break}return e.abrupt("return",!0);case 3:return e.next=5,f.getInfo();case 5:if(a=e.sent,n("setLoginStatus",{loginStatus:a.isLogin}),r.loginStatus){e.next=9;break}return e.abrupt("return",!1);case 9:return n("setUserInfo",{userInfo:a.data}),e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},b={state:d,getters:h,mutations:p,actions:g},m={state:{},getters:{},mutations:{},actions:{}};r["default"].use(c["a"]);var v=new c["a"].Store({modules:{user:b,blog:m}});r["default"].use(u["a"]);var k=[{path:"/",component:function(){return n.e("chunk-7f998dde").then(n.bind(null,"8b24"))}},{path:"/login",component:function(){return n.e("chunk-533ee0ec").then(n.bind(null,"013f"))}},{path:"/register",component:function(){return n.e("chunk-3f8e34b0").then(n.bind(null,"56b4"))}},{path:"/detail/:blogId",component:function(){return n.e("chunk-64ce90f4").then(n.bind(null,"d0d1"))}},{path:"/user/:userId",component:function(){return n.e("chunk-2b526a74").then(n.bind(null,"d843"))}},{path:"/edit/:blogId",component:function(){return n.e("chunk-9d9914a6").then(n.bind(null,"70e2"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return n.e("chunk-1fa4a925").then(n.bind(null,"561f"))},meta:{requiresAuth:!0}},{path:"/my",component:function(){return n.e("chunk-05959d18").then(n.bind(null,"5b6b"))},meta:{requiresAuth:!0}}],w=new u["a"]({routes:k});w.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?v.dispatch("checkLoginStatus").then((function(t){t?n():n({path:"/login",query:{redirect:e.fullPath}})})):n()}));var O=w,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{id:"header"}}),n("main",{attrs:{id:"main"}},[n("router-view")],1),n("Footer",{attrs:{id:"footer"}})],1)},S=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"header"}},[e.loginStatus?n("header",{staticClass:"logged-in"},[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("LET'S SHARE")])],1),n("router-link",{staticClass:"edit",attrs:{to:"/create"}},[n("i",{staticClass:"el-icon-plus"})]),n("el-dropdown",{staticClass:"avatar-dropdown"},[n("div",{staticClass:"avatar el-dropdown-link"},[n("img",{attrs:{src:e.userInfo.avatar,alt:e.userInfo.avatar}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/my"}},[n("el-dropdown-item",[n("span",[e._v("我的")])])],1),n("el-dropdown-item",{nativeOn:{click:function(t){return e.onLogout(t)}}},[e._v("注销")])],1)],1)],1):n("header",{staticClass:"not-logged-in"},[n("router-link",{attrs:{to:"/"}},[n("h1",[e._v("LET'S SHARE")]),n("p",[e._v("分享你的见解")])]),n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button",attrs:{to:"/register"}},[n("el-button",{attrs:{round:"",size:"medium"}},[e._v("注册账号")])],1),n("router-link",{staticClass:"button",attrs:{to:"/login"}},[n("el-button",{attrs:{round:"",size:"medium"}},[e._v("立即登录")])],1)],1)],1)])},I=[],_=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3"));function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(_["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}window.user=f;var P={name:"Header",computed:L({},Object(c["c"])(["userInfo","loginStatus"])),created:function(){this.checkLoginStatus()},methods:L({},Object(c["b"])(["checkLoginStatus","logout"]),{onLogout:function(){var e=this;this.logout().then((function(){e.$router.push("/")}))}})},x=P,C=(n("aa8f"),n("2877")),T=Object(C["a"])(x,j,I,!1,null,"161d018a",null),G=T.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("")]),n("p",[e._v("GitHub")])])}],D={name:"Footer"},M=D,N=(n("bf28"),Object(C["a"])(M,A,R,!1,null,"32fe5b90",null)),U=N.exports,q={name:"App",components:{Header:G,Footer:U}},$=q,F=(n("5c0b"),Object(C["a"])($,y,S,!1,null,null,null)),H=F.exports,B=n("53ca");function z(e){var t="object"===Object(B["a"])(e)?e:new Date(e),n=t.getTime(),r=Date.now(),a=r-n,o="";switch(!0){case a<6e4:o="刚刚";break;case a<36e5:o=Math.floor(a/6e4)+"分钟前";break;case a<864e5:o=Math.floor(a/36e5)+"小时前";break;default:o=Math.floor(a/864e5)+"天前"}return o}var J={install:function(e){e.prototype.$friendlyDate=z}};r["default"].use(J),r["default"].config.productionTip=!1,new r["default"]({router:O,store:v,render:function(e){return e(H)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"79d3":function(e,t,n){},"9c0c":function(e,t,n){},aa8f:function(e,t,n){"use strict";var r=n("5064"),a=n.n(r);a.a},bf28:function(e,t,n){"use strict";var r=n("79d3"),a=n.n(r);a.a},ecc5:function(e,t,n){}});
//# sourceMappingURL=app.107d3237.js.map