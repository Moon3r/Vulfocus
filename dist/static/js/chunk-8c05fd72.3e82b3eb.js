(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c05fd72"],{"0dec":function(t,e,n){t.exports=n("f292")},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),s=n("6821"),o=n("6a99"),a=n("69a8"),u=n("c69a"),c=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?c:function(t,e){if(t=s(t),e=o(e,!0),u)try{return c(t,e)}catch(n){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},"15d4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",[n("div",{attrs:{slot:"page1"},slot:"page1"},[n("el-carousel",{staticStyle:{"padding-top":"100px"},attrs:{interval:4e3,type:"card",height:"300px",autoplay:!1,align:"center"}},t._l(t.list,(function(e){return n("el-carousel-item",[n("h3",[n("el-button",{attrs:{plain:""},on:{click:function(n){return t.opendialog(e)}}},[t._v(t._s(e.time_range)+'"分钟挑战赛"\n          ')])],1),t._v(" "),n("h2",[t._v("描述:"+t._s(e.time_desc))]),t._v(" "),e.flag_status?n("h2",[t._v(" 挑战赛正在进行\n          ")]):t._e(),t._v(" "),e.flag_status?n("el-button",{staticStyle:{float:"right"},on:{click:function(e){return t.stop()}}},[t._v("关闭")]):t._e()],1)})),1)],1)])])},i=[],s=n("d3d5"),o=n("0dec"),a=n.n(o),u=n("905e"),c={data:function(){return{list:[],allList:[],currentDate:new Date,Donelabs:"开始",centerDialogVisible:!1,item:"",visibleLine:"none",startTime:"",endTime:""}},components:{"vue-good-wizard":s["a"],CountDown:a.a},created:function(){this.templist(),this.timelist()},mounted:function(){},methods:{templist:function(){var t=this;Object(u["i"])().then((function(e){var n=e.data.results;t.list=n}))},timelist:function(){var t=this;Object(u["a"])().then((function(e){var n=e.data.results;t.allList=n}))},opendialog:function(t){var e=this;this.item=t,!0===t.flag_status?this.$message({type:"error",message:t.time_range+"分钟挑战赛已经开始"}):this.$confirm("是否开始挑战?","提示",{center:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["d"])(t).then((function(t){var n=t.data,r="success",i="";"200"===n.code?i="计时模式开始启动！":"2001"===n.code?i="计时模式已经启动，请勿重新启动":(r="error",i="内部错误"),e.$message({type:r,message:i})})),e.$router.push({path:"/dashboard"})})).catch((function(){e.$message({type:"info",message:"已取挑战"})}))},stop:function(){var t=this;this.$confirm("是否取消挑战?","提示",{center:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["e"])().then((function(e){var n=e.data,r="success",i="";"2000"===n.code?i="计时模式已经关闭！":(r="error",i="关闭失败,内部错误"),t.$message({type:r,message:i})})),t.$router.push({path:"/dashboard"})})).catch((function(){t.$message({type:"info",message:"已取消"})}))},nextClicked:function(t){return 2===t&&this.open2(),!0},backClicked:function(t){return!0}},watch:{}},f=c,h=(n("4af3"),n("2877")),m=Object(h["a"])(f,r,i,!1,null,"3cc7d788",null);e["default"]=m.exports},"4af3":function(t,e,n){"use strict";n("8286")},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var s,o=e.constructor;return o!==n&&"function"==typeof o&&(s=o.prototype)!==n.prototype&&r(s)&&i&&i(t,s),t}},8286:function(t,e,n){},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),s=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:s}},"905e":function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"g",(function(){return a})),n.d(e,"i",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"j",(function(){return f})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return m})),n.d(e,"b",(function(){return d}));var r=n("b775");function i(t){return Object(r["a"])({url:"/time/",method:"post",data:t})}function s(){return Object(r["a"])({url:"/time/",method:"delete"})}function o(){return Object(r["a"])({url:"/time/",method:"get"})}function a(t){return Object(r["a"])({url:"/timetemp/",method:"post",data:t})}function u(t){var e="";!0===t&&(e="flag"),"temp"===t&&(e="temp");var n="/timetemp/?query=&flag="+e;return Object(r["a"])({url:n,method:"get"})}function c(t){return Object(r["a"])({url:"/timetemp/"+t+"/",method:"delete",data:{id:t}})}function f(t){return void 0!==t&&null!==t||(t=1),Object(r["a"])({url:"/rank/user/?page="+t,method:"get"})}function h(t){return Object(r["a"])({url:"/time/"+t+"/get/",method:"get"})}function m(t,e){return void 0!==e&&null!==e||(e=1),Object(r["a"])({url:"/timerank/?value="+t+"&page="+e,method:"get"})}var d={getTimestamp:function(t){return new Date(t).getTime()/1e3}}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),s=n("79e5"),o=n("fdef"),a="["+o+"]",u="​",c=RegExp("^"+a+a+"*"),f=RegExp(a+a+"*$"),h=function(t,e,n){var i={},a=s((function(){return!!o[t]()||u[t]()!=u})),c=i[t]=a?e(m):o[t];n&&(i[n]=c),r(r.P+r.F*a,"String",i)},m=h.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),s=n("2d95"),o=n("5dbc"),a=n("6a99"),u=n("79e5"),c=n("9093").f,f=n("11e9").f,h=n("86cc").f,m=n("aa77").trim,d="Number",l=r[d],p=l,g=l.prototype,_=s(n("2aeb")(g))==d,T="trim"in String.prototype,v=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=T?e.trim():m(e,3);var n,r,i,s=e.charCodeAt(0);if(43===s||45===s){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var o,u=e.slice(2),c=0,f=u.length;c<f;c++)if(o=u.charCodeAt(c),o<48||o>i)return NaN;return parseInt(u,r)}}return+e};if(!l(" 0o1")||!l("0b1")||l("+0x1")){l=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof l&&(_?u((function(){g.valueOf.call(n)})):s(n)!=d)?o(new p(v(e)),n,l):v(e)};for(var b,y=n("9e1e")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;y.length>w;w++)i(p,b=y[w])&&!i(l,b)&&h(l,b,f(p,b));l.prototype=g,g.constructor=l,n("2aba")(r,d,l)}},f292:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.msTime.show?n("p",[t.msTime.day>0?n("span",[n("span",[t._v(t._s(t.msTime.day))]),n("i",[t._v(t._s(t.dayTxt))])]):t._e(),t._v(" "),n("span",[t._v(t._s(t.msTime.hour))]),n("i",[t._v(t._s(t.hourTxt))]),t._v(" "),n("span",[t._v(t._s(t.msTime.minutes))]),n("i",[t._v(t._s(t.minutesTxt))]),t._v(" "),n("span",[t._v(t._s(t.msTime.seconds))]),n("i",[t._v(t._s(t.secondsTxt))])]):t._e()])},i=[],s=(n("6b54"),n("c5f6"),{replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"",hour:"",minutes:"",seconds:""},star:"",end:"",current:""}},watch:{currentTime:function(t,e){this.gogogo()}},props:{tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:":"},secondsFixed:{type:Boolean,default:!1}},mounted:function(){console.log(this),this.gogogo()},methods:{gogogo:function(){var t=this;10==this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10==this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10==this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout((function(){t.runTime(t.star,t.current,t.start_message)}),1)):(this.end>this.current&&this.star<this.current||this.star==this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1))},runTime:function(t,e,n,r){var i=this,s=this.msTime,o=t-e;if(o>0){this.msTime.show=!0,s.day=Math.floor(o/864e5),o-=864e5*s.day,s.hour=Math.floor(o/36e5),o-=36e5*s.hour,s.minutes=Math.floor(o/6e4),o-=6e4*s.minutes,s.seconds=Math.floor(o/1e3).toFixed(0),o-=1e3*s.seconds,s.hour<10&&(s.hour="0"+s.hour),s.minutes<10&&(s.minutes="0"+s.minutes),s.seconds<10&&(s.seconds="0"+s.seconds);var a=Date.now(),u=Date.now(),c=u-a;setTimeout((function(){r?i.runTime(i.end,e+=1e3,n,!0):i.runTime(i.star,e+=1e3,n)}),1e3-c)}else n()},start_message:function(){var t=this;this.$set(this,"tipShow",!1),this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1)},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("end_callback",this.msTime.show)}}}),o=s,a=n("2877"),u=Object(a["a"])(o,r,i,!1,null,null,null);e["default"]=u.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-8c05fd72.3e82b3eb.js.map