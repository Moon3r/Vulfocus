(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-509536a0"],{2634:function(t,a,e){},"68fb":function(t,a,e){},"7b98":function(t,a,e){"use strict";e("68fb")},d471:function(t,a,e){"use strict";e("2634")},e534:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("el-tabs",{staticStyle:{"margin-left":"20px"}},[e("el-tab-pane",{attrs:{label:"FRP设置"}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-top":"30px"},attrs:{"label-width":"170px",model:t.data,"element-loading-text":"修改中"}},[e("el-form-item",{attrs:{label:"是否启用FRP"}},[e("el-col",{attrs:{span:20}},[e("el-switch",{attrs:{"on-value":"true","off-value":"false"},model:{value:t.data.switch,callback:function(a){t.$set(t.data,"switch",a)},expression:"data.switch"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"Frp服务端地址"}},[e("el-col",{attrs:{span:20}},[e("el-input",{model:{value:t.data.frp_url,callback:function(a){t.$set(t.data,"frp_url",a)},expression:"data.frp_url"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"域名设置"}},[e("el-col",{attrs:{span:20}},[e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.data.domain,callback:function(a){t.$set(t.data,"domain",a)},expression:"data.domain"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"FRP模板"}},[e("el-col",{attrs:{span:20}},[e("el-input",{attrs:{type:"textarea",autosize:""},model:{value:t.data.frp_template,callback:function(a){t.$set(t.data,"frp_template",a)},expression:"data.frp_template"}})],1)],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.settingUpdate}},[t._v("修改")])],1)],1)],1)],1)],1),t._v(" "),e("el-tab-pane",{attrs:{label:"FRP映射"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tabLoading,expression:"tabLoading"}],staticStyle:{width:"100%"},attrs:{data:t.frpdata,border:"",stripe:"",align:"center"}},[e("el-table-column",{attrs:{type:"index",width:"30"}}),t._v(" "),e("el-table-column",{attrs:{prop:"frpid",label:"FRPID",width:"290"}}),t._v(" "),e("el-table-column",{attrs:{prop:"frp_subdomain",label:"访问子域名",width:"270"}}),t._v(" "),e("el-table-column",{attrs:{prop:"dockerid",label:"容器ID",width:"150","min-width":"270"}}),t._v(" "),e("el-table-column",{attrs:{prop:"container_status",label:"容器状态",width:"80"}}),t._v(" "),e("el-table-column",{attrs:{prop:"container_port",label:"容器端口",width:"80"}}),t._v(" "),e("el-table-column",{attrs:{prop:"frpconfig",label:"FRP配置"}}),t._v(" "),e("el-table-column",{attrs:{prop:"frpconfig",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){var l=a.row;return[e("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.deleteFrp(l)}}},[t._v("删除")])]}}])})],1)],1)],1)],1)},n=[],r=e("b775");function s(){return Object(r["a"])({url:"/frp/get",method:"get"})}function i(t){return Object(r["a"])({url:"/frp/update",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/frp/delete",method:"post",data:t})}var d={data:function(){return{data:{domain:"",frp_template:"",switch:!1,frp_url:""},frpdata:[],loading:!1,tabLoading:!0}},created:function(){this.initSetting()},methods:{initSetting:function(){var t=this;s().then((function(a){var e=a.data;if(200===e.status)t.data=e.data.config,t.frpdata=e.data.all,t.tabLoading=!1;else for(var l;l<e.msg.length;l++)t.$message({message:e.msg[l],type:"info"})}))},settingUpdate:function(){var t=this,a=new FormData;a.set("domain",this.data.domain),a.set("frp_template",this.data.frp_template),a.set("switch",this.data.switch),a.set("frp_url",this.data.frp_url),this.loading=!0,i(a).then((function(a){var e=a.data;t.loading=!1,200===e.status?(t.data=e.data,t.$message({message:"修改成功",type:"success"})):t.$message({message:e.msg,type:"error"})}))},deleteFrp:function(t){var a=this,e=new FormData;e.set("frpid",t.frpid),this.loading=!0,o(e).then((function(t){var e=t.data;a.loading=!1,200===e.status?(a.data=e.data,a.$message({message:"删除成功",type:"success"})):a.$message({message:e.msg,type:"error"})}))}}},p=d,c=(e("7b98"),e("d471"),e("2877")),u=Object(c["a"])(p,l,n,!1,null,"1eefe46d",null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-509536a0.99543ea3.js.map