webpackJsonp([66],{MAOp:function(e,t,n){var i=n("PN/5");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("25abfb0c",i,!0,{})},"PN/5":function(e,t,n){t=e.exports=n("FZ+f")(!0),t.i(n("goML"),""),t.push([e.i,"#task{margin-top:28px}#search{display:none}.weui-cell_tab{height:30px;text-align:center;float:left;width:24.5%;margin:0}.app-header{position:relative;-webkit-transition:.3s;transition:.3s;width:100%;z-index:10000;height:45px;line-height:45px;font-size:17px;background:-webkit-gradient(linear,left top,left bottom,from(#303036),to(#3c3b40));background:linear-gradient(180deg,#303036,#3c3b40);color:#fff;text-align:center}.wechat-list .list-info{position:relative;z-index:2;left:0;width:100%;height:64px;padding:8px;background-color:#fff}.wechat-list .list-info .header-box{position:relative;float:left;width:48px;height:48px;margin-right:10px;margin-left:0}.wechat-list .new-msg-count{font-style:normal;font-family:PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Helvetica;right:-9px;top:-5px;padding:0 4px;width:auto;min-width:18px;height:18px;line-height:18px;border-radius:9px;font-size:14px;background-color:#f43531}.wechat-list .new-msg-count,.wechat-list .new-msg-dot{position:absolute;z-index:2;color:#fff;text-align:center}.wechat-list .new-msg-dot{right:-4px;top:-3px;width:10px;height:10px;border-radius:50%;background-color:red;background-color:#f43531;font-size:0}.wechat-list .list-info .header-box .header{height:100%;border-radius:5px;display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;overflow:hidden;background:#dddbdb}.wechat-list .list-info .header-box .header img{width:10%;height:auto;-webkit-box-flex:2;-ms-flex-positive:2;flex-grow:2;border:0}.wechat-list .list-info .desc-box{overflow:hidden}.wechat-list .list-info .desc-box .desc-time{float:right;color:#b8b8b8}.wechat-list .list-info .desc-box .desc-author{height:25px;line-height:25px;font-size:16px;color:#000}.wechat-list .list-info .desc-box .desc-msg{height:23px;line-height:23px;font-size:14px;color:#888}.wechat-list .list-info .desc-box .desc-msg .desc-mute{float:right;color:#b8b8b8}","",{version:3,sources:["/Users/yunwisdom/Workspace/xdata-vuechat-service/src/components/explore/task.vue"],names:[],mappings:"AAEA,MACE,eAAiB,CAClB,AACD,QACE,YAAa,CACd,AACD,eACE,YAAa,kBAAkB,WAAW,YAAY,QAAe,CACtE,AACD,YAEI,kBAAmB,AACnB,uBAAyB,AACzB,eAAiB,AACjB,WAAY,AACZ,cAAe,AACf,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,mFAAwF,AACxF,mDAAsD,AACtD,WAAY,AACZ,iBAAmB,CACtB,AACD,wBACI,kBAAmB,AACnB,UAAW,AACX,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,YAAa,AACb,qBAAuB,CAC1B,AACD,oCACI,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,aAAiB,CACpB,AACD,4BAEI,kBAAmB,AACnB,yEAA8E,AAC9E,WAAY,AACZ,SAAU,AAEV,cAAe,AACf,WAAY,AACZ,eAAgB,AAChB,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AAGnB,eAAgB,AAChB,wBAA0B,CAC7B,AACD,sDAjBI,kBAAmB,AAKnB,UAAW,AAOX,WAAY,AACZ,iBAAmB,CAiBtB,AAbD,0BAEI,WAAY,AACZ,SAAU,AACV,WAAY,AACZ,YAAa,AAEb,kBAAmB,AAGnB,qBAAsB,AACtB,yBAA0B,AAC1B,WAAa,CAChB,AACD,4CACI,YAAa,AACb,kBAAmB,AACnB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,8BAA+B,AAC/B,6BAA8B,AAC9B,uBAAwB,AACxB,mBAAoB,AACpB,mBAAoB,AACpB,eAAgB,AAChB,wBAAyB,AACzB,qBAAsB,AACtB,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACvB,AACD,gDACI,UAAW,AACX,YAAa,AACb,mBAAoB,AACpB,oBAAqB,AACrB,YAAa,AACb,QAAU,CACb,AACD,kCACI,eAAiB,CACpB,AACD,6CACI,YAAa,AACb,aAAe,CAClB,AACD,+CACI,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACf,AACD,4CACI,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACf,AACD,uDACI,YAAa,AACb,aAAe,CAClB",file:"task.vue",sourcesContent:['\n@import "../../assets/css/explore.css";\n#task {\n  margin-top: 28px;\n}\n#search {\n  display:none;\n}\n.weui-cell_tab {\n  height: 30px;text-align:center;float:left;width:24.5%;margin:0px 0px;\n}\n.app-header {\n    /* position: absolute; */\n    position: relative;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    width: 100%;\n    z-index: 10000;\n    height: 45px;\n    line-height: 45px;\n    font-size: 17px;\n    background: -webkit-gradient(linear, left top, left bottom, from(#303036), to(#3c3b40));\n    background: linear-gradient(180deg, #303036, #3c3b40);\n    color: #fff;\n    text-align: center;\n}\n.wechat-list .list-info {\n    position: relative;\n    z-index: 2;\n    left: 0;\n    width: 100%;\n    height: 64px;\n    padding: 8px;\n    background-color: #fff;\n}\n.wechat-list .list-info .header-box {\n    position: relative;\n    float: left;\n    width: 48px;\n    height: 48px;\n    margin-right: 10px;\n    margin-left: 0px;\n}\n.wechat-list .new-msg-count {\n    position: absolute;\n    font-style: normal;\n    font-family: PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Helvetica;\n    right: -9px;\n    top: -5px;\n    z-index: 2;\n    padding: 0 4px;\n    width: auto;\n    min-width: 18px;\n    height: 18px;\n    line-height: 18px;\n    border-radius: 9px;\n    color: #fff;\n    text-align: center;\n    font-size: 14px;\n    background-color: #f43531;\n}\n.wechat-list .new-msg-dot {\n    position: absolute;\n    right: -4px;\n    top: -3px;\n    width: 10px;\n    height: 10px;\n    z-index: 2;\n    border-radius: 50%;\n    color: #ffffff;\n    text-align: center;\n    background-color: red;\n    background-color: #f43531;\n    font-size: 0;\n}\n.wechat-list .list-info .header-box .header {\n    height: 100%;\n    border-radius: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    overflow: hidden;\n    background: #dddbdb;\n}\n.wechat-list .list-info .header-box .header img {\n    width: 10%;\n    height: auto;\n    -webkit-box-flex: 2;\n    -ms-flex-positive: 2;\n    flex-grow: 2;\n    border: 0;\n}\n.wechat-list .list-info .desc-box {\n    overflow: hidden;\n}\n.wechat-list .list-info .desc-box .desc-time {\n    float: right;\n    color: #b8b8b8;\n}\n.wechat-list .list-info .desc-box .desc-author {\n    height: 25px;\n    line-height: 25px;\n    font-size: 16px;\n    color: #000;\n}\n.wechat-list .list-info .desc-box .desc-msg {\n    height: 23px;\n    line-height: 23px;\n    font-size: 14px;\n    color: #888;\n}\n.wechat-list .list-info .desc-box .desc-msg .desc-mute {\n    float: right;\n    color: #b8b8b8;\n}\n\n\n'],sourceRoot:""}])},didQ:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("keep-alive",[n("div",{staticStyle:{"margin-top":"0px",background:"#fdfdfd"},attrs:{id:"task"}},[n("header",{attrs:{id:"wx-header"}},[n("div",{staticClass:"center"},[n("router-link",{staticClass:"iconfont icon-left",attrs:{to:"/explore",tag:"div"},on:{click:function(t){return e.$router.push("/explore")}}},[n("span",[e._v("返回")])]),e._v(" "),n("span",[e._v("任务")])],1)]),e._v(" "),n("section",[n("div",{staticClass:"weui-cells",staticStyle:{"margin-top":"0px"}},[n("div",{staticClass:"weui-cell weui-cell_access",staticStyle:{padding:"8px 10px 4px 10px"},attrs:{id:"scanCell"}},[n("div",{staticClass:"weui-cell__bd weui-cell_tab",style:1==e.tabname?"border-bottom: 1px solid #329ff0;":"border-bottom: 0px solid #329ff0;",on:{click:function(t){e.tabname=1}}},[e._v("\n          计时\n        ")]),e._v(" "),n("div",{staticClass:"weui-cell__bd weui-cell_tab",style:2==e.tabname?"border-bottom: 1px solid #329ff0;":"border-bottom: 0px solid #329ff0;",on:{click:function(t){e.tabname=2}}},[e._v("\n          待办\n        ")]),e._v(" "),n("div",{staticClass:"weui-cell__bd weui-cell_tab",style:3==e.tabname?"border-bottom: 1px solid #329ff0;":"border-bottom: 0px solid #329ff0;",on:{click:function(t){e.tabname=3}}},[e._v("\n          已办\n        ")]),e._v(" "),n("div",{staticClass:"weui-cell__bd weui-cell_tab",style:4==e.tabname?"border-bottom: 1px solid #329ff0;display:none;":"border-bottom: 0px solid #329ff0;display:none;",on:{click:function(t){e.tabname=4}}},[e._v("\n          本人\n        ")]),e._v(" "),n("div",{staticClass:"weui-cell__bd weui-cell_tab",style:5==e.tabname?"border-bottom: 1px solid #329ff0;":"border-bottom: 0px solid #329ff0;",on:{click:function(t){e.tabname=5}}},[e._v("\n          收藏\n        ")])])]),e._v(" "),n("div",{staticClass:"wechat-list"},[[n("van-loading",{directives:[{name:"show",rawName:"v-show",value:1==e.tabname&&e.loading,expression:"tabname == 1 && loading"}],staticStyle:{display:"flex",margin:"0px auto","margin-top":"10px","margin-left":"0%","text-align":"center"},attrs:{size:"12%",vertical:""}},[e._v("加载中...")]),e._v(" "),n("van-empty",{directives:[{name:"show",rawName:"v-show",value:1==e.tabname&&0==e.timetasks.length&&!e.loading,expression:"tabname == 1 && timetasks.length == 0 && !loading"}],attrs:{description:"您还没有计时待办任务哦！"}}),e._v(" "),n("van-pull-refresh",{directives:[{name:"show",rawName:"v-show",value:1==e.tabname&&!e.loading,expression:"tabname == 1 && !loading"}],staticStyle:{"min-height":"400px"},attrs:{"success-text":"刷新成功"},on:{refresh:e.refreshData},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},e._l(e.timetasks.slice(0,8),function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.tabname&&!e.loading,expression:"tabname == 1 && !loading"}],key:t.id,staticClass:"list-info"},[n("div",{staticClass:"header-box"},[n("i",{staticClass:"new-msg-count",staticStyle:{display:"none"}}),e._v(" "),n("i",{staticClass:"new-msg-dot",staticStyle:{display:"none"}}),e._v(" "),n("div",{staticClass:"header"},[n("img",{attrs:{src:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/time_00.png"}})])]),e._v(" "),n("div",{staticClass:"desc-box",on:{click:function(n){e.$router.push("/explore/content?id="+t.id+"&pid="+t.pid+"&backpath="+encodeURI("/explore/task?tabname=1")+"&tasktype=wait&tname="+t.tname+"&bname="+encodeURI(t.name)+"&username="+t.proponents+"&sponsor="+encodeURI(t.sponsor)+"&topic="+encodeURI(t.topic)+"&title="+encodeURI(t.topic)+"&files="+encodeURI(t.files))}}},[n("div",{staticClass:"desc-time"},[e._v(e._s(t.create_time))]),e._v(" "),n("div",{staticClass:"desc-author"},[e._v(e._s(t.type+" - "+t.name))]),e._v(" "),n("div",{staticClass:"desc-msg"},[n("div",{staticClass:"desc-mute iconfont icon-mute",staticStyle:{display:"none"}}),e._v(" "),n("span",[e._v(e._s(t.sponsor)+": ")]),e._v(" "),n("span",[e._v(e._s(t.topic||t.name.replace("表","")+"申请"))])])])])}),0),e._v(" "),e._l(e.timetasks.slice(8),function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.tabname&&!e.loading,expression:"tabname == 1 && !loading"}],key:t.id,staticClass:"list-info"},[n("div",{staticClass:"header-box"},[n("i",{staticClass:"new-msg-count",staticStyle:{display:"none"}}),e._v(" "),n("i",{staticClass:"new-msg-dot",staticStyle:{display:"none"}}),e._v(" "),n("div",{staticClass:"header"},[n("img",{attrs:{src:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/time_00.png"}})])]),e._v(" "),n("div",{staticClass:"desc-box",on:{click:function(n){e.$router.push("/explore/content?id="+t.id+"&pid="+t.pid+"&backpath="+encodeURI("/explore/task?tabname=1")+"&tasktype=wait&tname="+t.tname+"&bname="+encodeURI(t.name)+"&username="+t.proponents+"&sponsor="+encodeURI(t.sponsor)+"&topic="+encodeURI(t.topic)+"&title="+encodeURI(t.topic)+"&files="+encodeURI(t.files))}}},[n("div",{staticClass:"desc-time"},[e._v(e._s(t.create_time))]),e._v(" "),n("div",{staticClass:"desc-author"},[e._v(e._s(t.type+" - "+t.name))]),e._v(" "),n("div",{staticClass:"desc-msg"},[n("div",{staticClass:"desc-mute iconfont icon-mute",staticStyle:{display:"none"}}),e._v(" "),n("span",[e._v(e._s(t.sponsor)+": ")]),e._v(" "),n("span",[e._v(e._s(t.topic||t.name.replace("表","")+"申请"))])])])])})],e._v(" "),[n("van-loading",{directives:[{name:"show",rawName:"v-show",value:2==e.tabname&&e.loading,expression:"tabname == 2 && loading"}],staticStyle:{display:"flex",margin:"0px auto","margin-top":"10px","margin-left":"0%","text-align":"center"},attrs:{size:"12%",vertical:""}},[e._v("加载中...")]),e._v(" "),n("van-empty",{directives:[{name:"show",rawName:"v-show",value:2==e.tabname&&0==e.doingtasks.length&&!e.loading,expression:"tabname == 2 && doingtasks.length == 0 && !loading"}],attrs:{description:"您还没有非计时待办任务哦！"}}),e._v(" "),n("van-pull-refresh",{directives:[{name:"show",rawName:"v-show",value:2==e.tabname&&!e.loading,expression:"tabname == 2 && !loading"}],staticStyle:{"min-height":"400px"},attrs:{"success-text":"刷新成功"},on:{refresh:e.refreshData},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},e._l(e.doingtasks.slice(0,8),function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:2==e.tabname&&!e.loading,expression:"tabname == 2 && !loading"}],key:t.id,staticClass:"list-info",attrs:{index:i}},[n("div",{staticClass:"header-box"},[n("i",{staticClass:"new-msg-count",staticStyle:{display:"none"}}),e._v(" "),n("i",{staticClass:"new-msg-dot",staticStyle:{display:"none"}}),e._v(" "),n("div",{staticClass:"header"},[n("img",{attrs:{src:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/leave.png"}})])]),e._v(" "),n("div",{staticClass:"desc-box",on:{click:function(n){return e.clickTaskDoing(t,e.tabname)}}},[n("div",{staticClass:"desc-time"},[e._v(e._s(t.create_time))]),e._v(" "),n("div",{staticClass:"desc-author"},[e._v(e._s(t.type+" - "+t.name))]),e._v(" "),n("div",{staticClass:"desc-msg"},[n("div",{staticClass:"desc-mute iconfont icon-mute",staticStyle:{display:"none"}}),e._v(" "),n("span",[e._v(e._s(t.sponsor)+": ")]),e._v(" "),n("span",[e._v(e._s(t.topic||t.name.replace("表","")+"申请"))])])])])}),0),e._v(" "),e._l(e.doingtasks.slice(8),function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:2==e.tabname&&!e.loading,expression:"tabname == 2 && !loading"}],key:t.id,staticClass:"list-info",attrs:{index:i}},[n("div",{staticClass:"header-box"},[n("i",{staticClass:"new-msg-count",staticStyle:{display:"none"}}),e._v(" "),n("i",{staticClass:"new-msg-dot",staticStyle:{display:"none"}}),e._v(" "),n("div",{staticClass:"header"},[n("img",{attrs:{src:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/leave.png"}})])]),e._v(" "),n("div",{staticClass:"desc-box",on:{click:function(n){return e.clickTaskDoing(t,e.tabname)}}},[n("div",{staticClass:"desc-time"},[e._v(e._s(t.create_time))]),e._v(" "),n("div",{staticClass:"desc-author"},[e._v(e._s(t.type+" - "+t.name))]),e._v(" "),n("div",{staticClass:"desc-msg"},[n("div",{staticClass:"desc-mute iconfont icon-mute",staticStyle:{display:"none"}}),e._v(" "),n("span",[e._v(e._s(t.sponsor)+": ")]),e._v(" "),n("span",[e._v(e._s(t.topic||t.name.replace("表","")+"申请"))])])])])})],e._v(" "),[n("van-loading",{directives:[{name:"show",rawName:"v-show",value:3==e.tabname&&e.loading,expression:"tabname == 3 && loading"}],staticStyle:{display:"flex",margin:"0px auto","margin-top":"10px","margin-left":"0%","text-align":"center"},attrs:{size:"12%",vertical:""}},[e._v("加载中...")]),e._v(" "),n("van-empty",{directives:[{name:"show",rawName:"v-show",value:3==e.tabname&&0==e.donetasks.length&&!e.loading,expression:"tabname == 3 && donetasks.length == 0 && !loading"}],attrs:{description:"您还没有已办任务哦！"}}),e._v(" "),n("van-pull-refresh",{directives:[{name:"show",rawName:"v-show",value:3==e.tabname&&!e.loading,expression:"tabname == 3 && !loading"}],staticStyle:{"min-height":"400px"},attrs:{"success-text":"刷新成功"},on:{refresh:e.refreshData},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},e._l(e.donetasks.slice(0,8),function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:3==e.tabname&&!e.loading,expression:"tabname == 3 && !loading"}],key:t.id,staticClass:"list-info",attrs:{index:i}},[n("div",{staticClass:"header-box"},[n("i",{staticClass:"new-msg-count",staticStyle:{display:"none"}}),e._v(" "),n("i",{staticClass:"new-msg-dot",staticStyle:{display:"none"}}),e._v(" "),n("div",{staticClass:"header"},[n("img",{attrs:{src:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/list_00.png"}})])]),e._v(" "),n("div",{staticClass:"desc-box",on:{click:function(n){return e.clickTaskDone(t,e.tabname)}}},[n("div",{staticClass:"desc-time"},[e._v(e._s(t.create_time))]),e._v(" "),n("div",{staticClass:"desc-author"},[e._v(e._s(t.type+" - "+t.name))]),e._v(" "),n("div",{staticClass:"desc-msg"},[n("div",{staticClass:"desc-mute iconfont icon-mute",staticStyle:{display:"none"}}),e._v(" "),n("span",[e._v(e._s(t.sponsor)+": ")]),e._v(" "),n("span",[e._v(e._s(t.topic||t.name.replace("表","")+"申请"))])])])])}),0),e._v(" "),e._l(e.donetasks.slice(8),function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:3==e.tabname&&!e.loading,expression:"tabname == 3 && !loading"}],key:t.id,staticClass:"list-info",attrs:{index:i}},[n("div",{staticClass:"header-box"},[n("i",{staticClass:"new-msg-count",staticStyle:{display:"none"}}),e._v(" "),n("i",{staticClass:"new-msg-dot",staticStyle:{display:"none"}}),e._v(" "),n("div",{staticClass:"header"},[n("img",{attrs:{src:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/list_00.png"}})])]),e._v(" "),n("div",{staticClass:"desc-box",on:{click:function(n){return e.clickTaskDone(t,e.tabname)}}},[n("div",{staticClass:"desc-time"},[e._v(e._s(t.create_time))]),e._v(" "),n("div",{staticClass:"desc-author"},[e._v(e._s(t.type+" - "+t.name))]),e._v(" "),n("div",{staticClass:"desc-msg"},[n("div",{staticClass:"desc-mute iconfont icon-mute",staticStyle:{display:"none"}}),e._v(" "),n("span",[e._v(e._s(t.sponsor)+": ")]),e._v(" "),n("span",[e._v(e._s(t.topic||t.name.replace("表","")+"申请"))])])])])})],e._v(" "),[n("van-loading",{directives:[{name:"show",rawName:"v-show",value:4==e.tabname&&e.loading,expression:"tabname == 4 && loading"}],staticStyle:{display:"flex",margin:"0px auto","margin-top":"10px","margin-left":"0%","text-align":"center"},attrs:{size:"12%",vertical:""}},[e._v("加载中...")]),e._v(" "),n("van-empty",{directives:[{name:"show",rawName:"v-show",value:4==e.tabname&&0==e.selftasks.length&&!e.loading,expression:"tabname == 4 && selftasks.length == 0 && !loading"}],attrs:{description:"您还没有已办任务(本人)哦！"}}),e._v(" "),n("van-pull-refresh",{directives:[{name:"show",rawName:"v-show",value:4==e.tabname&&!e.loading,expression:"tabname == 4 && !loading"}],staticStyle:{"min-height":"400px"},attrs:{"success-text":"刷新成功"},on:{refresh:e.refreshData},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},e._l(e.selftasks.slice(0,8),function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:4==e.tabname&&!e.loading,expression:"tabname == 4 && !loading"}],key:t.id,staticClass:"list-info",attrs:{index:i}},[n("div",{staticClass:"header-box"},[n("i",{staticClass:"new-msg-count",staticStyle:{display:"none"}}),e._v(" "),n("i",{staticClass:"new-msg-dot",staticStyle:{display:"none"}}),e._v(" "),n("div",{staticClass:"header"},[n("img",{attrs:{src:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/shenpi.png"}})])]),e._v(" "),n("div",{staticClass:"desc-box",on:{click:function(n){e.$router.push("/explore/content?id="+t.id+"&pid="+t.pid+"&backpath="+encodeURI("/explore/task?tabname=4")+"&tasktype=done&tname="+t.tname+"&bname="+encodeURI(t.name)+"&username="+t.proponents+"&sponsor="+encodeURI(t.sponsor)+"&topic="+encodeURI(t.topic)+"&title="+encodeURI(t.topic)+"&files="+encodeURI(t.files))}}},[n("div",{staticClass:"desc-time"},[e._v(e._s(t.create_time))]),e._v(" "),n("div",{staticClass:"desc-author"},[e._v(e._s(t.type+" - "+t.name))]),e._v(" "),n("div",{staticClass:"desc-msg"},[n("div",{staticClass:"desc-mute iconfont icon-mute",staticStyle:{display:"none"}}),e._v(" "),n("span"),e._v(" "),n("span",[e._v(e._s(t.topic||t.name.replace("表","")+"申请"))])])])])}),0),e._v(" "),e._l(e.selftasks.slice(8),function(t,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:4==e.tabname&&!e.loading,expression:"tabname == 4 && !loading"}],key:t.id,staticClass:"list-info",attrs:{index:i}},[n("div",{staticClass:"header-box"},[n("i",{staticClass:"new-msg-count",staticStyle:{display:"none"}}),e._v(" "),n("i",{staticClass:"new-msg-dot",staticStyle:{display:"none"}}),e._v(" "),n("div",{staticClass:"header"},[n("img",{attrs:{src:"//cdn.jsdelivr.net/gh/Miazzy/yunwisdom_cdn@v1.0.0/images/shenpi.png"}})])]),e._v(" "),n("div",{staticClass:"desc-box",on:{click:function(n){e.$router.push("/explore/content?id="+t.id+"&pid="+t.pid+"&backpath="+encodeURI("/explore/task?tabname=4")+"&tasktype=done&tname="+t.tname+"&bname="+encodeURI(t.name)+"&username="+t.proponents+"&sponsor="+encodeURI(t.sponsor)+"&topic="+encodeURI(t.topic)+"&title="+encodeURI(t.topic)+"&files="+encodeURI(t.files))}}},[n("div",{staticClass:"desc-time"},[e._v(e._s(t.create_time))]),e._v(" "),n("div",{staticClass:"desc-author"},[e._v(e._s(t.type+" - "+t.name))]),e._v(" "),n("div",{staticClass:"desc-msg"},[n("div",{staticClass:"desc-mute iconfont icon-mute",staticStyle:{display:"none"}}),e._v(" "),n("span"),e._v(" "),n("span",[e._v(e._s(t.topic||t.name.replace("表","")+"申请"))])])])])})],e._v(" "),[n("van-loading",{directives:[{name:"show",rawName:"v-show",value:5==e.tabname&&e.loading,expression:"tabname == 5 && loading"}],staticStyle:{display:"flex",margin:"0px auto","margin-top":"10px","margin-left":"0%","text-align":"center"},attrs:{size:"12%",vertical:""}},[e._v("加载中...")]),e._v(" "),n("van-empty",{directives:[{name:"show",rawName:"v-show",value:5==e.tabname&&0==e.collecttasks.length&&!e.loading,expression:"tabname == 5 && collecttasks.length == 0 && !loading"}],attrs:{description:"您还没有已收藏任务哦！"}})]],2)])])])},s=[],a={render:i,staticRenderFns:s};t.a=a},goML:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"#explore .weui-cell__hd img{width:28px;margin-right:10px;display:block;border-radius:4px}#explore .home__notice{position:relative}#explore .home__notice img{width:30px;height:30px;vertical-align:middle;border-radius:4px}#explore .new-msg-dot{position:absolute;top:-4px;right:-5px;display:inline-block;width:9px;height:9px;border-radius:50%;background-color:red}#explore{margin-top:28px}.app-footer{display:block}.weui-cell_tab{height:30px;text-align:center;float:left;width:24.5%;margin:0}.wechat-list .list-info{position:relative;z-index:2;left:0;width:100%;height:64px;padding:8px;background-color:#fff}.wechat-list .list-info .header-box{position:relative;float:left;width:48px;height:48px;margin-right:10px;margin-left:0}.wechat-list .new-msg-count{font-style:normal;font-family:PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Helvetica;right:-9px;top:-5px;padding:0 4px;width:auto;min-width:18px;height:18px;line-height:18px;border-radius:9px;font-size:14px;background-color:#f43531}.wechat-list .new-msg-count,.wechat-list .new-msg-dot{position:absolute;z-index:2;color:#fff;text-align:center}.wechat-list .new-msg-dot{right:-4px;top:-3px;width:10px;height:10px;border-radius:50%;background-color:red;background-color:#f43531;font-size:0}.wechat-list .list-info .header-box .header{height:100%;border-radius:5px;display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;overflow:hidden;background:#dddbdb}.wechat-list .list-info .header-box .header img{width:10%;height:auto;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;border:0}.wechat-list .list-info .desc-box{overflow:hidden}.wechat-list .list-info .desc-box .desc-time{float:right;color:#b8b8b8}.wechat-list .list-info .desc-box .desc-author{height:25px;line-height:25px;font-size:16px;color:#000}.wechat-list .list-info .desc-box .desc-msg{height:23px;line-height:23px;font-size:14px;color:#888}.wechat-list .list-info .desc-box .desc-msg .desc-mute{float:right;color:#b8b8b8}.van-goods-action{position:relative;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:content-box;height:50px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);background-color:#fff;z-index:10}.van-goods-action-button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(90deg,#ff6034,#ee0a24);border-radius:0 10px 10px 0}.van-goods-action-button--warning{border-radius:10px 0 0 10px}","",{version:3,sources:["/Users/yunwisdom/Workspace/xdata-vuechat-service/src/assets/css/explore.css"],names:[],mappings:"AAAA,4BACI,WAAY,AACZ,kBAAmB,AACnB,cAAe,AACf,iBAAmB,CACtB,AAED,uBACI,iBAAkB,CACrB,AAED,2BACI,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,iBAAmB,CACtB,AAED,sBACI,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,qBAAsB,AACtB,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,oBAAqB,CACxB,AAED,SACI,eAAiB,CACpB,AAED,YACI,aAAe,CAClB,AAED,eACI,YAAa,AACb,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,QAAgB,CACnB,AAED,wBACI,kBAAmB,AACnB,UAAW,AACX,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,YAAa,AACb,qBAAuB,CAC1B,AAED,oCACI,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,aAAiB,CACpB,AAED,4BAEI,kBAAmB,AACnB,yEAA8E,AAC9E,WAAY,AACZ,SAAU,AAEV,cAAe,AACf,WAAY,AACZ,eAAgB,AAChB,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AAGnB,eAAgB,AAChB,wBAA0B,CAC7B,AAED,sDAlBI,kBAAmB,AAKnB,UAAW,AAOX,WAAY,AACZ,iBAAmB,CAkBtB,AAbD,0BAEI,WAAY,AACZ,SAAU,AACV,WAAY,AACZ,YAAa,AAEb,kBAAmB,AAGnB,qBAAsB,AACtB,yBAA0B,AAC1B,WAAa,CAChB,AAED,4CACI,YAAa,AACb,kBAAmB,AACnB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,8BAA+B,AAC/B,6BAA8B,AAC9B,2BAA4B,AAC5B,uBAAwB,AACxB,mBAAoB,AACpB,uBAAwB,AACxB,mBAAoB,AACpB,eAAgB,AAChB,wBAAyB,AACzB,+BAAgC,AAChC,qBAAsB,AACtB,uBAAwB,AACxB,gBAAiB,AACjB,kBAAoB,CACvB,AAED,gDACI,UAAW,AACX,YAAa,AACb,mBAAoB,AACpB,oBAAqB,AACrB,oBAAqB,AACrB,YAAa,AACb,QAAU,CACb,AAED,kCACI,eAAiB,CACpB,AAED,6CACI,YAAa,AACb,aAAe,CAClB,AAED,+CACI,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACf,AAED,4CACI,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACf,AAED,uDACI,YAAa,AACb,aAAe,CAClB,AAED,kBACI,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,OAAQ,AACR,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,yBAA0B,AAC1B,2BAA4B,AAC5B,mBAAoB,AACpB,uBAAwB,AACxB,YAAa,AACb,gDAAiD,AACjD,2CAA4C,AAC5C,sBAAuB,AACvB,UAAY,CACf,AAED,iCACI,yDAA4D,AAC5D,kDAAwD,AACxD,2BAAiC,CACpC,AAED,kCACI,2BAAiC,CACpC",file:"explore.css",sourcesContent:["#explore .weui-cell__hd img {\n    width: 28px;\n    margin-right: 10px;\n    display: block;\n    border-radius: 4px;\n}\n\n#explore .home__notice {\n    position: relative\n}\n\n#explore .home__notice img {\n    width: 30px;\n    height: 30px;\n    vertical-align: middle;\n    border-radius: 4px;\n}\n\n#explore .new-msg-dot {\n    position: absolute;\n    top: -4px;\n    right: -5px;\n    display: inline-block;\n    width: 9px;\n    height: 9px;\n    border-radius: 50%;\n    background-color: red\n}\n\n#explore {\n    margin-top: 28px;\n}\n\n.app-footer {\n    display: block;\n}\n\n.weui-cell_tab {\n    height: 30px;\n    text-align: center;\n    float: left;\n    width: 24.5%;\n    margin: 0px 0px;\n}\n\n.wechat-list .list-info {\n    position: relative;\n    z-index: 2;\n    left: 0;\n    width: 100%;\n    height: 64px;\n    padding: 8px;\n    background-color: #fff;\n}\n\n.wechat-list .list-info .header-box {\n    position: relative;\n    float: left;\n    width: 48px;\n    height: 48px;\n    margin-right: 10px;\n    margin-left: 0px;\n}\n\n.wechat-list .new-msg-count {\n    position: absolute;\n    font-style: normal;\n    font-family: PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Helvetica;\n    right: -9px;\n    top: -5px;\n    z-index: 2;\n    padding: 0 4px;\n    width: auto;\n    min-width: 18px;\n    height: 18px;\n    line-height: 18px;\n    border-radius: 9px;\n    color: #fff;\n    text-align: center;\n    font-size: 14px;\n    background-color: #f43531;\n}\n\n.wechat-list .new-msg-dot {\n    position: absolute;\n    right: -4px;\n    top: -3px;\n    width: 10px;\n    height: 10px;\n    z-index: 2;\n    border-radius: 50%;\n    color: #ffffff;\n    text-align: center;\n    background-color: red;\n    background-color: #f43531;\n    font-size: 0;\n}\n\n.wechat-list .list-info .header-box .header {\n    height: 100%;\n    border-radius: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    display: -webkit-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    overflow: hidden;\n    background: #dddbdb;\n}\n\n.wechat-list .list-info .header-box .header img {\n    width: 10%;\n    height: auto;\n    -webkit-box-flex: 2;\n    -webkit-flex-grow: 2;\n    -ms-flex-positive: 2;\n    flex-grow: 2;\n    border: 0;\n}\n\n.wechat-list .list-info .desc-box {\n    overflow: hidden;\n}\n\n.wechat-list .list-info .desc-box .desc-time {\n    float: right;\n    color: #b8b8b8;\n}\n\n.wechat-list .list-info .desc-box .desc-author {\n    height: 25px;\n    line-height: 25px;\n    font-size: 16px;\n    color: #000;\n}\n\n.wechat-list .list-info .desc-box .desc-msg {\n    height: 23px;\n    line-height: 23px;\n    font-size: 14px;\n    color: #888;\n}\n\n.wechat-list .list-info .desc-box .desc-msg .desc-mute {\n    float: right;\n    color: #b8b8b8;\n}\n\n.van-goods-action {\n    position: relative;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n    box-sizing: content-box;\n    height: 50px;\n    padding-bottom: constant(safe-area-inset-bottom);\n    padding-bottom: env(safe-area-inset-bottom);\n    background-color: #fff;\n    z-index: 10;\n}\n\n.van-goods-action-button--danger {\n    background: -webkit-linear-gradient(left, #ff6034, #ee0a24);\n    background: linear-gradient(to right, #ff6034, #ee0a24);\n    border-radius: 0px 10px 10px 0px;\n}\n\n.van-goods-action-button--warning {\n    border-radius: 10px 0px 0px 10px;\n}"],sourceRoot:""}])},tdwn:function(e,t,n){"use strict";var i=n("Xxa5"),s=n.n(i),a=n("exGp"),o=n.n(a);t.a={mixins:[window.mixin],data:function(){return{pageName:"任务",momentNewMsg:!0,tabname:"1",donetasks:[],doingtasks:[],timetasks:[],selftasks:[],collecttasks:[],isLoading:!1,loading:!1}},activated:function(){this.renderStatus(),this.queryTaskDone(),this.queryTaskDoing(),this.queryTaskTiming(),this.queryTaskSelf()},mounted:function(){this.renderStatus(),this.queryTaskDone(),this.queryTaskDoing(),this.queryTaskTiming(),this.queryTaskSelf()},watch:{$route:function(e,t){},tabname:function(){var e=this;this.loading=!0,setTimeout(o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(1!=e.tabname){t.next=5;break}return t.next=3,e.queryTaskTiming();case 3:t.next=18;break;case 5:if(2!=e.tabname){t.next=10;break}return t.next=8,e.queryTaskDoing();case 8:t.next=18;break;case 10:if(3!=e.tabname){t.next=15;break}return t.next=13,e.queryTaskDone();case 13:t.next=18;break;case 15:if(4!=e.tabname){t.next=18;break}return t.next=18,e.queryTaskSelf();case 18:e.loading=!1;case 19:case"end":return t.stop()}},t,e)})),500)}},methods:{encodeURI:function(e){return window.encodeURIComponent(e)},getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.hash.substr(window.location.hash.indexOf("?")+1).match(t);return null!=n?decodeURI(n[2]):null},queryReturnDiv:function(){var e=this;$(".center").prepend('<div id="return" tag="div" class="iconfont icon-left">\n                                  <span style="margin-left:10px;">返回</span>\n                              </div>'),$("#return[tag=div]").click(function(){e.$router.push("/explore")})},renderStatus:function(){this.tabname=window.decodeURIComponent(this.getUrlParam("tabname")||1)},queryTaskDone:function(){var e=this;return o()(s.a.mark(function t(){var n,i,a,o,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Betools.storage.getStore("system_userinfo");case 2:if(n=t.sent,i=n.username,a=n.realname,o=null,r=Betools.storage.getStore("system_task_done_by_user@"+i),!(Betools.tools.isNull(r)||r.length<=0||"undefined"==r)){t.next=14;break}return t.next=10,Betools.task.queryProcessLogDone(i,a,0,30);case 10:o=t.sent,Betools.storage.setStore("system_task_done_by_user@"+i,o,60),t.next=15;break;case 14:o=r;case 15:e.donetasks=o;case 16:case"end":return t.stop()}},t,e)}))()},queryTaskDoing:function(){var e=this;return o()(s.a.mark(function t(){var n,i,a,o,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Betools.storage.getStore("system_userinfo");case 2:if(n=t.sent,i=n.username,a=n.realname,o=null,r=Betools.storage.getStore("system_task_doing_by_user@"+i),!(Betools.tools.isNull(r)||r.length<=0||"undefined"==r)){t.next=14;break}return t.next=10,Betools.task.queryProcessLogWait(i,a,0,99);case 10:o=t.sent,Betools.storage.setStore("system_task_doing_by_user@"+i,o,60),t.next=15;break;case 14:o=r;case 15:o=o.filter(function(e){return e.sponsor=Betools.tools.isNull(e.sponsor)?a:e.sponsor,!Betools.task.TIME_TASK_NAME.includes(e.name)}),o=o.slice(0,30),e.doingtasks=o;case 18:case"end":return t.stop()}},t,e)}))()},queryTaskTiming:function(){var e=this;return o()(s.a.mark(function t(){var n,i,a,o,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Betools.storage.getStore("system_userinfo");case 2:if(n=t.sent,i=n.username,a=n.realname,o=null,r=Betools.storage.getStore("system_task_time_by_user@"+i),!(Betools.tools.isNull(r)||r.length<=0||"undefined"==r)){t.next=14;break}return t.next=10,Betools.task.queryProcessLogWait(i,a,0,99);case 10:o=t.sent,Betools.storage.setStore("system_task_time_by_user@"+i,o,60),t.next=15;break;case 14:o=r;case 15:o=o.filter(function(e){return Betools.task.TIME_TASK_NAME.includes(e.name)}),o=o.slice(0,30),e.timetasks=o;case 18:case"end":return t.stop()}},t,e)}))()},queryTaskSelf:function(){var e=this;return o()(s.a.mark(function t(){var n,i,a,o,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Betools.storage.getStore("system_userinfo");case 2:if(n=t.sent,i=n.username,a=n.realname,o=null,r=Betools.storage.getStore("system_task_done_by_user@"+i),!(Betools.tools.isNull(r)||r.length<=0||"undefined"==r)){t.next=14;break}return t.next=10,Betools.task.queryProcessLogDone(i,a,0,90);case 10:o=t.sent,Betools.storage.setStore("system_task_done_by_user@"+i,o,60),t.next=15;break;case 14:o=r;case 15:o=o.filter(function(e){return e.sponsor==n.realname}),o=o.slice(0,30),e.selftasks=o;case 18:case"end":return t.stop()}},t,e)}))()},clickTaskDone:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o()(s.a.mark(function i(){return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:"bs_seal_regist"==e.tname?t.$router.push("/app/sealview?id="+e.id+"&pid="+e.pid+"&statustype=none&type=finish&view=view&back=/explore/task"):"bs_goods_receive"==e.tname?t.$router.push("/app/goodsview?id="+e.id+"&pid="+e.pid+"&statustype=none&type=finish&view=view&back=/explore/task"):t.$router.push("/explore/content?id="+e.id+"&pid="+e.pid+"&backpath="+encodeURI("/explore/task?tabname="+n)+"&tasktype=done&tname="+e.tname+"&bname="+encodeURI(e.name)+"&username="+e.proponents+"&sponsor="+encodeURI(e.sponsor)+"&topic="+encodeURI(e.topic)+"&title="+encodeURI(e.topic)+"&files="+encodeURI(e.files));case 1:case"end":return i.stop()}},i,t)}))()},clickTaskDoing:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o()(s.a.mark(function i(){return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:"bs_seal_regist"==e.tname&&e.topic.includes("#待用印")?t.$router.push("/app/sealview?id="+e.id+"&pid="+e.pid+"&statustype=none&type=seal&view=edit&back=/explore/task"):"bs_seal_regist"==e.tname&&e.topic.includes("#待移交")?t.$router.push("/app/sealview?id="+e.id+"&pid="+e.pid+"&statustype=none&type=front&view=edit&back=/explore/task"):"bs_goods_receive"==e.tname&&e.topic.includes("#待处理")?t.$router.push("/app/goodsview?id="+e.id+"&pid="+e.pid+"&statustype=none&type=none&role=front&view=edit&back=/explore/task"):"bs_goods_receive"==e.tname&&e.topic.includes("#已领取")?t.$router.push("/app/goodsview?id="+e.id+"&pid="+e.pid+"&statustype=none&type=none&role=receive&view=edit&back=/explore/task"):t.$router.push("/explore/content?id="+e.id+"&pid="+e.pid+"&backpath="+encodeURI("/explore/task?tabname="+n)+"&tasktype=wait&tname="+e.tname+"&bname="+encodeURI(e.name)+"&username="+e.proponents+"&sponsor="+encodeURI(e.sponsor)+"&topic="+encodeURI(e.topic)+"&title="+encodeURI(e.topic)+"&files="+encodeURI(e.files)+"&back=/explore/task");case 1:case"end":return i.stop()}},i,t)}))()}}}},togY:function(e,t,n){"use strict";function i(e){n("MAOp")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("tdwn"),a=n("didQ"),o=n("VU/8"),r=i,l=o(s.a,a.a,!1,r,null,null);t.default=l.exports}});