!function(n){function r(r){for(var t,i,c=r[0],l=r[1],s=r[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);for(u&&u(r);f.length;)f.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var n,r=0;r<o.length;r++){for(var e=o[r],t=!0,c=1;c<e.length;c++){var l=e[c];0!==a[l]&&(t=!1)}t&&(o.splice(r--,1),n=i(i.s=e[0]))}return n}var t={},a={7:0},o=[];function i(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=t,i.d=function(n,r,e){i.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,r){if(1&r&&(n=i(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)i.d(e,t,function(r){return n[r]}.bind(null,t));return e},i.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(r,"a",r),r},i.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=r,c=c.slice();for(var s=0;s<c.length;s++)r(c[s]);var u=l;o.push([127,0]),e()}({124:function(n,r,e){var t=e(19),a=e(125);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},i=(t(a,o),a.locals?a.locals:{});n.exports=i},125:function(n,r,e){(r=e(20)(!1)).push([n.i,'.content{\r\n    justify-content: center;\r\n}\r\n\r\n.setting-wrapper{\r\n    width: 68%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.info-change, .password-change{\r\n    width:100%;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n#info input:first-of-type, #password input{\r\n    border:1px solid #ccc;\r\n    border-radius: 5px;\r\n    padding: 0.5em;\r\n    background-color: #fff;\r\n    width: 80%;\r\n    font-size: 1.5em;\r\n    display: block;\r\n}\r\n\r\n#preview-avatar{\r\n    position: relative;\r\n    width: 20%;\r\n    /*border: 1px solid #000;*/\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    margin:0 auto 1em;\r\n    box-sizing: border-box;\r\n}\r\n#preview-avatar:before{\r\n    content: "";\r\n    display: block;\r\n    padding-top: 100%;\r\n}\r\n#preview-avatar img{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    /*line-height:100%;*/\r\n    height:100%;\r\n    width: 100%;\r\n    /*text-align: center;*/\r\n    /*display: flex;*/\r\n    /*align-items: center;*/\r\n    /*justify-content: center;*/\r\n    object-fit: cover;\r\n}\r\n\r\n#info input, #password input{\r\n    margin: 1em auto;\r\n}\r\n\r\n/*#info,#password{*/\r\n/*    width:100%;*/\r\n/*}*/\r\n\r\n#passBtn, #infoBtn, #logout{\r\n    outline:none;\r\n    border:none;\r\n    font-family: Microsoft Yahei;\r\n    color:#fff;\r\n    border-radius: 3px;\r\n    padding: 1em;\r\n    width: 50%;\r\n    background-color: rgba(0,0,225,0.7);\r\n    display: block;\r\n    margin:0 auto;\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n}\r\n\r\n#logout{\r\n    background-color:rgba(225,0,0,0.8);\r\n}',""]),n.exports=r},127:function(n,r,e){"use strict";e.r(r);var t=e(15),a=e.n(t),o=e(0),i=e.n(o),c=e(18),l=e(16),s=e(17),u=e(13),d=e(14),f=e(35);function p(n){return{type:"SUCCEEDED_UPDATE_INFO",feedback:n}}function b(n){return{type:"SUCCEEDED_UPDATE_PASSWORD",feedback:n}}var g=Object(u.c)({infoChangeFeedback:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"FAILED_UPDATE_INFO":case"SUCCEEDED_UPDATE_INFO":return r.feedback;default:return n}},passChangeFeedback:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"FAILED_UPDATE_PASSWORD":case"SUCCEEDED_UPDATE_PASSWORD":return r.feedback;default:return n}},settingInfo:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1?arguments[1]:void 0;return"PUT_SETTING_INFO"===r.type?r.info:n},logoutFeedback:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1?arguments[1]:void 0;return"PUT_LOG_OUT_FEEDBACK"===r.type?r.feedback:n}}),m=e(2),h=e.n(m),w=e(4),v=e(7),x=e.n(v),E=h.a.mark(S),k=h.a.mark(P),y=h.a.mark(j),O=h.a.mark(T),_=h.a.mark(F);function S(n){var r,e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.userName,t.next=3,x.a.post("http://localhost:3000/api/user/isExist",{userName:r},{withCredentials:!0});case 3:return e=t.sent,t.next=6,Object(w.a)({type:"PUT_SETTING_INFO",info:e.data.data});case 6:case"end":return t.stop()}}),E)}function P(n){var r,e,t;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=n.password,e=n.newPassword,a.next=3,x.a.patch("http://localhost:3000/api/user/changePassword",{password:r,newPassword:e},{withCredentials:!0});case 3:if(t=a.sent,console.log(t.data),0===t.data.errno){a.next=10;break}return a.next=8,Object(w.a)({type:"FAILED_UPDATE_PASSWORD",feedback:t.data});case 8:a.next=12;break;case 10:return a.next=12,Object(w.a)(b(t.data));case 12:case"end":return a.stop()}}),k)}function j(n){var r,e,t;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=n.nickname,e=n.picture,a.next=3,x.a.patch("http://localhost:3000/api/user/changeInfo",{nickname:r,picture:e},{withCredentials:!0});case 3:if(0===(t=a.sent).data.errno){a.next=9;break}return a.next=7,Object(w.a)({type:"FAILED_UPDATE_INFO",feedback:t.data});case 7:a.next=11;break;case 9:return a.next=11,Object(w.a)(p(t.data));case 11:case"end":return a.stop()}}),y)}function T(){var n;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,x.a.post("http://localhost:3000/api/user/logout",{},{withCredentials:!0});case 2:return n=r.sent,r.next=5,Object(w.a)({type:"PUT_LOG_OUT_FEEDBACK",feedback:n.data});case 5:case"end":return r.stop()}}),O)}function F(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(w.c)("REQUEST_SETTING_INFO_ASYNC",S);case 2:return n.next=4,Object(w.c)("REQUEST_UPDATE_INFO",j);case 4:return n.next=6,Object(w.c)("REQUEST_UPDATE_PASSWORD",P);case 6:return n.next=8,Object(w.c)("REQUEST_LOG_OUT",T);case 8:console.log("setting saga");case 9:case"end":return n.stop()}}),_)}var D=e(25),U=(e(22),e(40),e(124),Object(f.a)()),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,C=Object(u.e)(g,I(Object(u.a)(U)));U.run(F);var N=Object(o.createRef)(),A=Object(o.createRef)(),R=Object(o.createRef)(),z=Object(o.createRef)();var L=Object(d.b)((function(n){return{settingInfo:n.settingInfo?n.settingInfo:null,passChangeFeedback:n.passChangeFeedback,infoChangeFeedback:n.infoChangeFeedback,logoutFeedback:n.logoutFeedback}}),(function(n){return{getSettingInfo:function(r){n(function(n){return{type:"REQUEST_SETTING_INFO_ASYNC",userName:n}}(r))},dispatchUpdatePassword:function(r,e){n(function(n,r){return{type:"REQUEST_UPDATE_PASSWORD",password:n,newPassword:r}}(r,e))},logout:function(){n({type:"REQUEST_LOG_OUT"})},dispatchUpdateInfo:function(r,e){n(function(n,r){return{type:"REQUEST_UPDATE_INFO",nickname:n,picture:r}}(r,e))},clearPassFeedback:function(){n(b(null))},clearInfoFeedback:function(){n(p(null))}}}))((function(n){n.getSettingInfo,n.settingInfo;var r=n.dispatchUpdatePassword,e=n.passChangeFeedback,t=n.logoutFeedback,c=n.logout,u=n.dispatchUpdateInfo,d=n.infoChangeFeedback,f=n.clearInfoFeedback,p=n.clearPassFeedback,b=Object(o.useState)(""),g=a()(b,2),m=g[0],h=g[1],w=Object(o.useState)(""),v=a()(w,2),E=v[0],k=v[1];return Object(o.useEffect)((function(){t&&(alert("成功登出"),location.href="/");var n=Object(D.a)(),r=(n.userName,n.nickname),a=n.picture;k(r),h(a),A.current.value="",R.current.value="",z.current.value="",e&&(0===e.errno?(alert("密码修改成功"),p()):(alert(e.message),p())),d&&(0===d.errno?(alert("资料修改成功"),f()):(alert(d.message),f()))}),[e,t,d]),i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"setting-wrapper"},i.a.createElement("div",{className:"info-change"},i.a.createElement("form",{action:"",id:"info",onSubmit:function(n){n.preventDefault(),u(E,m)}},i.a.createElement("label",{htmlFor:"nickname"},"更改昵称: "),i.a.createElement("input",{type:"text",id:"nickname",value:E,ref:N,onChange:function(n){k(N.current.value)}}),i.a.createElement("label",{htmlFor:"picture"},"更改头像: "),i.a.createElement("input",{type:"file",id:"picture",onChange:function(n){var r=z.current.files[0],e=new FormData;e.append("file",r),x.a.post("http://localhost:3000/api/utils/upload",e,{withCredentials:!0}).then((function(n){var r=n.data;0!==r.errno?alert(r.message):h(r.data.url)})).catch((function(n){return console.log(n)}))},ref:z}),i.a.createElement("div",{id:"preview-avatar"},i.a.createElement("img",{src:m,alt:""})),i.a.createElement("button",{id:"infoBtn",type:"submit",form:"info"},"修改资料"))),i.a.createElement("div",{className:"password-change"},i.a.createElement("form",{action:"/",id:"password",onSubmit:function(n){n.preventDefault();var e=A.current.value,t=R.current.value;r(e,t)}},i.a.createElement("label",{htmlFor:"prevPass"},"请输入当前密码: "),i.a.createElement("input",{type:"password",id:"prevPass",ref:A}),i.a.createElement("label",{htmlFor:"newPass"},"请输入新的密码: "),i.a.createElement("input",{type:"password",id:"newPass",ref:R}),i.a.createElement("button",{id:"passBtn",type:"submit",form:"password"},"修改密码"))),i.a.createElement("button",{id:"logout",onClick:function(n){c()}},"退出登录"))),i.a.createElement(s.a,null))}));Object(c.render)(i.a.createElement(d.a,{store:C},i.a.createElement(L,null)),document.getElementById("root"),(function(){console.log("setting page")}))},16:function(n,r,e){"use strict";var t=e(8),a=e.n(t),o=e(9),i=e.n(o),c=e(10),l=e.n(c),s=e(11),u=e.n(s),d=e(12),f=e.n(d),p=e(0),b=e.n(p),g=e(39),m=e(31),h=e(38),w=e(37),v=function(n){function r(n){return a()(this,r),l()(this,u()(r).call(this,n))}return f()(r,n),i()(r,[{key:"render",value:function(){return b.a.createElement("div",{className:"header"},b.a.createElement("ul",null,b.a.createElement("li",null,b.a.createElement("h1",null,b.a.createElement("a",{href:"/"},"微博"))),b.a.createElement("li",null,b.a.createElement("a",{href:"/"},b.a.createElement(g.a,null),"首页")),b.a.createElement("li",null,b.a.createElement("a",{href:"/profile"},b.a.createElement(m.a,null),"我的空间")),b.a.createElement("li",null,b.a.createElement("a",{href:"/square"},b.a.createElement(h.a,null),"广场")),b.a.createElement("li",null,b.a.createElement("a",{href:"/setting"},b.a.createElement(w.a,null),"设置"))))}}]),r}(b.a.Component);r.a=v},17:function(n,r,e){"use strict";var t=e(8),a=e.n(t),o=e(9),i=e.n(o),c=e(10),l=e.n(c),s=e(11),u=e.n(s),d=e(12),f=e.n(d),p=e(0),b=e.n(p),g=function(n){function r(n){return a()(this,r),l()(this,u()(r).call(this,n))}return f()(r,n),i()(r,[{key:"render",value:function(){return b.a.createElement("div",{className:"footer"},"Footer")}}]),r}(b.a.Component);r.a=g},22:function(n,r,e){var t=e(19),a=e(23);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},i=(t(a,o),a.locals?a.locals:{});n.exports=i},23:function(n,r,e){(r=e(20)(!1)).push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n    display: block;\r\n}\r\nbody {\r\n    line-height: 1;\r\n    font-family: Microsoft YaHei;\r\n}\r\nol, ul {\r\n    list-style: none;\r\n}\r\nblockquote, q {\r\n    quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\n\r\n.header{\r\n    background-color: rgb(251,251,251);\r\n    box-shadow: 0 0 10px rgb(170,170,170);\r\n    padding: 1.5em 1em;\r\n    min-width: 1000px;\r\n}\r\n\r\n.header a{\r\n    color: rgb(51,51,51);\r\n}\r\n.header a:hover{\r\n    color:rgb(250,125,60);\r\n}\r\n\r\n.header ul{\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n}\r\n\r\n.header ul li{\r\n    margin-right: 1.5em;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\n.load-more{\r\n    width: 100%;\r\n    margin-bottom: 1em;\r\n    background-color: #fff;\r\n    border-radius: 3px;\r\n    padding: 1em 1em;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.content{\r\n    position: relative;\r\n    max-width: 1024px;\r\n    min-width: 1000px;\r\n    margin: 0 auto;\r\n    /*background-color: rgba(150,50,70,0.3);*/\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    padding: 1em 1em;\r\n    box-sizing: border-box;\r\n    border-left:1px solid #eee;\r\n    border-right:1px solid #eee;\r\n}\r\n\r\n.error{\r\n    height: 90vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.error span{\r\n    cursor: pointer;\r\n    color: cornflowerblue;\r\n}\r\n\r\n.footer{\r\n    padding: 1.5em 1em;\r\n    color:#fff;\r\n    text-align: center;\r\n    background-color: rgb(0,0,0);\r\n    min-width: 1000px;\r\n}",""]),n.exports=r},25:function(n,r,e){"use strict";function t(){for(var n,r,e,t=document.cookie.split("; "),a=0;a<t.length;a++){var o=t[a].split("=");"user"==o[0]&&(n=o[1]),"nick"==o[0]&&(r=o[1]),"pic"==o[0]&&(e=o[1])}return{userName:n,nickname:r,picture:e}}e.d(r,"a",(function(){return t}))},40:function(n,r,e){var t=e(19),a=e(41);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},i=(t(a,o),a.locals?a.locals:{});n.exports=i},41:function(n,r,e){(r=e(20)(!1)).push([n.i,"\r\n\r\n\r\n\r\n\r\n.input{\r\n    width: 68%;\r\n    box-shadow: 0 0 10px rgb(170,170,170);\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    padding: 0.5em;\r\n    box-sizing: border-box;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n#textarea{\r\n    font-size: 1.5em;\r\n    resize:none;\r\n    width: 100%;\r\n    padding: 0.3em;\r\n    box-sizing: border-box;\r\n    margin-bottom: 0.3em;\r\n    box-shadow: inset 0 0 3px rgb(170,170,170);\r\n}\r\n\r\n#textarea:focus{\r\n    outline-color:rgb(250,125,60);\r\n    box-shadow: none;\r\n}\r\n#publish{\r\n    color: #fff;\r\n    border:none;\r\n    float: right;\r\n    padding: 0.5em 1.5em;\r\n    border-radius: 3px;\r\n    font-weight: bold;\r\n}\r\n.no-input{\r\n    background-color:rgba(250,125,60,0.5);\r\n}\r\n.has-input{\r\n    background-color:rgba(250,125,60,1);\r\n    cursor: pointer;\r\n}\r\n\r\n.user-info{\r\n    background-color: #fff;\r\n    box-sizing: border-box;\r\n    width: 30%;\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 10px rgb(170,170,170);\r\n    margin-left: 1em;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.avatar{\r\n    width: 5em;\r\n    height: 5em;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    margin: 1em 0;\r\n}\r\n.avatar img{\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.fan-follows {\r\n    display: flex;\r\n    flex-flow:row nowrap;\r\n    margin: 1em 0;\r\n}\r\n.fan-follows div span{\r\n    display: block;\r\n    border-right: 1px solid rgb(170,170,170);\r\n    text-align: center;\r\n    padding:0 0.5em;\r\n}\r\n.fan-follows div span:nth-of-type(even){\r\n    padding-top: 0.2em;\r\n    color:#aaa;\r\n}\r\n\r\n.fan-follows div span:nth-of-type(odd) a{\r\n    color:#000;\r\n}\r\n.fan-follows div span:nth-of-type(odd) a:hover{\r\n    color:rgba(250,125,60,1);\r\n}\r\n\r\n.follow-button{\r\n    border-radius:3px;\r\n    padding: 0.5em 1em;\r\n    margin-bottom: 1em;\r\n    cursor: pointer;\r\n    color:#fff;\r\n    font-weight: bold;\r\n    background-color:rgba(250,125,60,1);\r\n}\r\n\r\n.blog-list{\r\n    width: 68%;\r\n    min-height: 80vh;\r\n}\r\n\r\n.loading{\r\n    width: 68%;\r\n    min-height: 100vh;\r\n}\r\n/*if no blog posted*/\r\n.no-blog{\r\n    width: 68%;\r\n    min-height: 80vh;\r\n    display: flex;\r\n    flex-flow:row nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.blog{\r\n    width: 100%;\r\n    margin-bottom: 1em;\r\n    background-color: #fff;\r\n    border-radius: 3px;\r\n    padding: 1.5em 1em;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 0 10px rgb(170,170,170);\r\n}\r\n.blog a{\r\n    color:rgb(100,100,100);\r\n}\r\n.blog-userinfo{\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n}\r\n.blog-content{\r\n    margin: 1em 0;\r\n    word-wrap: break-word;\r\n}\r\n.blog-content a{\r\n    color:rgb(24,144,255);\r\n}\r\n.blog-img{\r\n    width: 100%;\r\n}\r\n.blog-img img{\r\n    max-width: 100%;\r\n}\r\n\r\n.blog-function {\r\n\r\n}\r\n.blog-function a{\r\n    float: right;\r\n}\r\n\r\n.tribute-container{\r\n    padding: 0.5em;\r\n    box-shadow: 0 0 3px rgb(170,170,170);\r\n    background-color: white;\r\n    font-size: 1em;\r\n}\r\n\r\n.backBtn{\r\n    position:fixed;\r\n    right:4em;\r\n    bottom: 4.5em;\r\n    background-color: #000;\r\n    color:#fff;\r\n    border-radius: 10px;\r\n    z-index: 1000;\r\n    display: none;\r\n    width: 3em;\r\n    height: 3em;\r\n    text-align: center;\r\n    line-height: 3em;\r\n}\r\n\r\n\r\n\r\n",""]),n.exports=r}});