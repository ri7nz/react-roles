(window["webpackJsonpreact-roles"]=window["webpackJsonpreact-roles"]||[]).push([[0],{22:function(e,n,t){e.exports=t(36)},27:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(19),i=t.n(r),c=(t(27),t(8)),l=t(9),u=t(11),s=t(10),m=t(12),d=t(7),f=t(5),h=function(){var e=JSON.parse(localStorage.getItem("user"));return e||{user:"",role:"guest"}},g=function(e){return function(n){return function(n){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={user:h()},n}return Object(m.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){return function(e){var n=e.role;return e.allowedRoles.includes(n)}({role:this.state.user.role,allowedRoles:e})?o.a.createElement("wrappedComponent",null):o.a.createElement("h1",null," Hai! kamu tidak boleh masuk dihalaman ini, rasakan chidorii ini - regards ",e.join(", "))}}]),t}(a.Component)}},p=g(["admin"]),w=g(["admin","user"]),v=function(){return o.a.createElement("ul",{style:{display:"flex",justifyContent:"space-around"}},o.a.createElement("li",null,o.a.createElement(d.b,{to:"/"}," Home ")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/admin"}," Admin Page ")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/user"}," User Page ")))},E=function(){return o.a.createElement("h1",null,"Selamat datang")},b=function(){return o.a.createElement("h1",null,"Hai Admin, Kamu cantik deh!")},k=function(){return o.a.createElement("h1",null,"Hai user, Jomblo kan!")},j=function(){return o.a.createElement(d.a,null,o.a.createElement(a.Fragment,null,o.a.createElement(v,null),o.a.createElement(f.a,{path:"/",component:E,exact:!0}),o.a.createElement(f.a,{path:"/admin",component:p(b)}),o.a.createElement(f.a,{path:"/user",component:w(k)})))},O=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(j,null)}}]),n}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");y?(!function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.e94fb001.chunk.js.map