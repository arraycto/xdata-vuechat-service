webpackJsonp([77],{CIhk:function(e,t,s){"use strict";var a=s("Xxa5"),i=s.n(a),l=s("exGp"),c=s.n(l);t.a={mixins:[window.mixin],data:function(){return{pageName:"我的",username:"",realname:"",mobile:"",avatar:"",qrcode:"",mail:""}},mounted:function(){this.changeStyle(),this.displayFoot(),this.userStatus()},activated:function(){$("#return[tag=div]").remove(),this.changeStyle(),this.displayFoot(),this.userStatus()},methods:{changeStyle:function(e){try{var e=window.location.hash.slice(2);e=e.includes("?")?e.split("?")[0]:e,e=e.includes("/")?e.split("/")[0]:e,$("#wx-nav dl").not("#wx-nav-"+e).removeClass("router-link-exact-active"),$("#wx-nav dl").not("#wx-nav-"+e).removeClass("router-link-active"),$("#wx-nav-"+e).addClass("router-link-exact-active"),$("#wx-nav-"+e).addClass("router-link-active"),console.log(e)}catch(e){console.log(e)}},displayFoot:function(){$(".app-footer").css("display","block")},clearLoginInfo:function(){var e=this;return c()(i.a.mark(function t(){var s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Betools.storage.getStore("system_linfo");case 3:s=t.sent,e.username=s.username,e.password=s.password,Betools.storage.clearStore("system_userinfo"),Betools.storage.clearStore("system_token"),Betools.storage.clearStore("system_department"),Betools.storage.clearStore("system_login_time"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}},t,e,[[0,12]])}))()},userStatus:function(){var e=this;return c()(i.a.mark(function t(){var s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Betools.storage.getStore("system_userinfo");case 3:if(s=t.sent,!Betools.tools.isNull(s)){t.next=11;break}return vant.Toast("尚未登录！"),t.next=8,e.clearLoginInfo();case 8:e.$router.push("/login"),t.next=17;break;case 11:e.username=s.username,e.realname=s.realname,e.mobile=s.mobile,e.qrcode=s.qr_code,e.mail=s.mail,e.avatar=s.avatar&&(s.avatar.startsWith("https://")||s.avatar.startsWith("http://"))?s.avatar:"";case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),console.log(t.t0);case 22:case"end":return t.stop()}},t,e,[[0,19]])}))()}}}},FDyh:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"security"},[s("header",{attrs:{id:"wx-header"}},[s("div",{staticClass:"center"},[s("router-link",{staticClass:"iconfont icon-left",attrs:{to:"/self/settings",tag:"div"}},[s("span",[e._v("设置")])]),e._v(" "),s("span",[e._v("账号与安全")])],1)]),e._v(" "),s("section",[s("div",{staticClass:"weui-cells"},[s("div",{staticClass:"weui-cell"},[s("div",{staticClass:"weui-cell__bd"},[e._v("账号")]),e._v(" "),s("div",{staticClass:"weui-cell__ft"},[e._v(e._s(e.realname))])])]),e._v(" "),s("div",{staticClass:"weui-cells"},[s("div",{staticClass:"weui-cell weui-cell_access"},[s("div",{staticClass:"weui-cell__bd"},[e._v("手机号")]),e._v(" "),s("div",{staticClass:"weui-cell__ft"},[e._v(e._s(e.mobile))])]),e._v(" "),s("div",{staticClass:"weui-cell weui-cell_access"},[s("div",{staticClass:"weui-cell__bd"},[e._v("邮箱地址")]),e._v(" "),s("div",{staticClass:"weui-cell__ft"},[e._v(e._s(e.mail))])])]),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"weui-cells__tips"},[e._v("如果遇到帐号信息泄露, 忘记密码, 诈骗等帐号安全问题, 可联系系统管理员.")])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"weui-cells"},[s("div",{staticClass:"weui-cell weui-cell_access"},[s("div",{staticClass:"weui-cell__bd"},[e._v("声音锁")]),e._v(" "),s("div",{staticClass:"weui-cell__ft"})]),e._v(" "),s("div",{staticClass:"weui-cell weui-cell_access"},[s("div",{staticClass:"weui-cell__bd"},[e._v("密码")]),e._v(" "),s("div",{staticClass:"weui-cell__ft"})]),e._v(" "),s("div",{staticClass:"weui-cell weui-cell_access"},[s("div",{staticClass:"weui-cell__bd"},[e._v("帐号保护")]),e._v(" "),s("div",{staticClass:"weui-cell__ft"})]),e._v(" "),s("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:"https://weixin110.qq.com"}},[s("div",{staticClass:"weui-cell__bd"},[e._v("安全中心")]),e._v(" "),s("div",{staticClass:"weui-cell__ft"})])])}],l={render:a,staticRenderFns:i};t.a=l},u5uL:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("CIhk"),i=s("FDyh"),l=s("VU/8"),c=l(a.a,i.a,!1,null,null,null);t.default=c.exports}});