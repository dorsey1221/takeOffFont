(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e9f7d33"],{"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{hidden:e.hidden,"pagination-container":!e.isTop,"pagination-container-top":e.isTop}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total,isTop:e.isTop},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},l=[];n("c5f6");Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,n){var a=u(),l=e-a,s=20,c=0;t="undefined"===typeof t?500:t;var i=function e(){c+=s;var u=Math.easeInOutQuad(c,a,l,t);r(u),c<t?o(e):n&&"function"===typeof n&&n()};i()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},i=c,d=(n("94c7"),n("2877")),h=Object(d["a"])(i,a,l,!1,null,"7a2f2234",null);t["a"]=h.exports},"4bcf":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-radio",{attrs:{label:0},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("今天")]),e._v(" "),n("el-radio",{attrs:{label:1},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("昨天")]),e._v(" "),n("el-radio",{attrs:{label:2},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("近3天")]),e._v(" "),n("el-radio",{attrs:{label:3},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("本周")]),e._v(" "),n("el-radio",{attrs:{label:4},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("上周")]),e._v(" "),n("el-radio",{attrs:{label:5},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("本月")]),e._v(" "),n("el-radio",{attrs:{label:6},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("上月")]),e._v(" "),n("el-radio",{attrs:{label:7},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("自定义")]),e._v(" "),7==e.query.time?n("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"开始时间","value-format":"yyyy-MM-dd",type:"date"},model:{value:e.query.begin,callback:function(t){e.$set(e.query,"begin",t)},expression:"query.begin"}}):e._e(),e._v(" "),7==e.query.time?n("span",[e._v("至")]):e._e(),e._v(" "),7==e.query.time?n("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"结束时间","value-format":"yyyy-MM-dd",type:"date"},model:{value:e.query.end,callback:function(t){e.$set(e.query,"end",t)},expression:"query.end"}}):e._e(),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n    "+e._s(e.$t("table.search"))+"\n  ")]),e._v(" "),n("el-dropdown",{staticStyle:{float:"right"},attrs:{"hide-on-click":!1}},[n("el-button",{attrs:{size:"mini",type:"primary"}},[n("i",{staticClass:"el-icon-s-grid right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.index,callback:function(t){e.$set(e.showColumns,"index",t)},expression:"showColumns.index"}},[e._v("#")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.ymd,callback:function(t){e.$set(e.showColumns,"ymd",t)},expression:"showColumns.ymd"}},[e._v("统计日期")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.recharge,callback:function(t){e.$set(e.showColumns,"recharge",t)},expression:"showColumns.recharge"}},[e._v("充值")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.rechargeOffline,callback:function(t){e.$set(e.showColumns,"rechargeOffline",t)},expression:"showColumns.rechargeOffline"}},[e._v("充值-线下")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.rechargeOnline,callback:function(t){e.$set(e.showColumns,"rechargeOnline",t)},expression:"showColumns.rechargeOnline"}},[e._v("充值-线上")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.rechargeHands,callback:function(t){e.$set(e.showColumns,"rechargeHands",t)},expression:"showColumns.rechargeHands"}},[e._v("充值-人工")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.rechargeTotal,callback:function(t){e.$set(e.showColumns,"rechargeTotal",t)},expression:"showColumns.rechargeTotal"}},[e._v("充值-总计")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.with,callback:function(t){e.$set(e.showColumns,"with",t)},expression:"showColumns.with"}},[e._v("提现")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.withUsdt,callback:function(t){e.$set(e.showColumns,"withUsdt",t)},expression:"showColumns.withUsdt"}},[e._v("提现-USDT")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.withBank,callback:function(t){e.$set(e.showColumns,"withBank",t)},expression:"showColumns.withBank"}},[e._v("提现-银行")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.withHands,callback:function(t){e.$set(e.showColumns,"withHands",t)},expression:"showColumns.withHands"}},[e._v("提现-人工")])],1),e._v(" "),n("el-dropdown-item",[n("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.withTotal,callback:function(t){e.$set(e.showColumns,"withTotal",t)},expression:"showColumns.withTotal"}},[e._v("提现-总计")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":"","show-summary":"","summary-method":e.getSummaries}},[e.showColumns.index?n("el-table-column",{attrs:{label:"#",align:"center",width:"80",type:"index",prop:"index"}}):e._e(),e._v(" "),e.showColumns.ymd?n("el-table-column",{attrs:{label:"统计日期",align:"center",width:"120",prop:"ymd"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.ymd))])]}}],null,!1,1786295380)}):e._e(),e._v(" "),e.showColumns.recharge?n("el-table-column",{attrs:{label:"充值",align:"center"}},[e.showColumns.rechargeOffline?n("el-table-column",{attrs:{label:"线下",align:"center"}},[n("el-table-column",{attrs:{label:"充值人数",align:"center",prop:"rechargePlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.rechargePlayerCount))])]}}],null,!1,2891570777)}),e._v(" "),n("el-table-column",{attrs:{label:"充值笔数",align:"center",prop:"rechargeCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.rechargeCount))])]}}],null,!1,3792185130)}),e._v(" "),n("el-table-column",{attrs:{label:"充值金额",align:"center",prop:"rechargeMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e._f("balance")(a.rechargeMoney)))])]}}],null,!1,2875004038)})],1):e._e(),e._v(" "),e.showColumns.rechargeOnline?n("el-table-column",{attrs:{label:"线上",align:"center"}},[n("el-table-column",{attrs:{label:"充值人数",align:"center",prop:"brechargePlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.brechargePlayerCount))])]}}],null,!1,3989984603)}),e._v(" "),n("el-table-column",{attrs:{label:"充值笔数",align:"center",prop:"brechargeCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.brechargeCount))])]}}],null,!1,674480776)}),e._v(" "),n("el-table-column",{attrs:{label:"充值金额",align:"center",prop:"brechargeMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e._f("balance")(a.brechargeMoney)))])]}}],null,!1,2058963876)})],1):e._e(),e._v(" "),e.showColumns.rechargeHands?n("el-table-column",{attrs:{label:"人工",align:"center"}},[n("el-table-column",{attrs:{label:"充值人数",align:"center",prop:"crechargePlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.crechargePlayerCount))])]}}],null,!1,2030174458)}),e._v(" "),n("el-table-column",{attrs:{label:"充值笔数",align:"center",prop:"crechargeCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.crechargeCount))])]}}],null,!1,1391744233)}),e._v(" "),n("el-table-column",{attrs:{label:"充值金额",align:"center",prop:"crechargeMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e._f("balance")(a.crechargeMoney)))])]}}],null,!1,3793770821)})],1):e._e(),e._v(" "),e.showColumns.rechargeTotal?n("el-table-column",{attrs:{label:"总计",align:"center"}},[n("el-table-column",{attrs:{label:"充值人数",align:"center",prop:"crechargePlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.rechargeTotalPlayer))])]}}],null,!1,11668920)}),e._v(" "),n("el-table-column",{attrs:{label:"充值笔数",align:"center",prop:"crechargeCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.rechargeTotalCount))])]}}],null,!1,4260221256)}),e._v(" "),n("el-table-column",{attrs:{label:"充值金额",align:"center",prop:"crechargeMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e._f("balance")(a.rechargeTotalBalance)))])]}}],null,!1,664505618)})],1):e._e()],1):e._e(),e._v(" "),e.showColumns.with?n("el-table-column",{attrs:{label:"提现",align:"center"}},[e.showColumns.withUsdt?n("el-table-column",{attrs:{label:"USDT",align:"center"}},[n("el-table-column",{attrs:{label:"提现人数",align:"center",prop:"withdrawalPlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.withdrawalPlayerCount))])]}}],null,!1,1929768795)}),e._v(" "),n("el-table-column",{attrs:{label:"提现笔数",align:"center",prop:"withdrawalCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.withdrawalCount))])]}}],null,!1,2139948840)}),e._v(" "),n("el-table-column",{attrs:{label:"提现金额",align:"center",prop:"withdrawalMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e._f("balance")(a.withdrawalMoney)))])]}}],null,!1,1047531524)})],1):e._e(),e._v(" "),e.showColumns.withBank?n("el-table-column",{attrs:{label:"银行",align:"center"}},[n("el-table-column",{attrs:{label:"提现人数",align:"center",prop:"bwithdrawalPlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.bwithdrawalPlayerCount))])]}}],null,!1,574570009)}),e._v(" "),n("el-table-column",{attrs:{label:"提现笔数",align:"center",prop:"bwithdrawalCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.bwithdrawalCount))])]}}],null,!1,598909898)}),e._v(" "),n("el-table-column",{attrs:{label:"提现金额",align:"center",prop:"bwithdrawalMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e._f("balance")(a.bwithdrawalMoney)))])]}}],null,!1,191322982)})],1):e._e(),e._v(" "),e.showColumns.withHands?n("el-table-column",{attrs:{label:"人工",align:"center"}},[n("el-table-column",{attrs:{label:"提现人数",align:"center",prop:"cwithdrawalPlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.cwithdrawalPlayerCount))])]}}],null,!1,402746296)}),e._v(" "),n("el-table-column",{attrs:{label:"提现笔数",align:"center",prop:"cwithdrawalCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.cwithdrawalCount))])]}}],null,!1,1049163563)}),e._v(" "),n("el-table-column",{attrs:{label:"提现金额",align:"center",prop:"cwithdrawalMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e._f("balance")(a.cwithdrawalMoney)))])]}}],null,!1,2059610375)})],1):e._e(),e._v(" "),e.showColumns.withTotal?n("el-table-column",{attrs:{label:"总计",align:"center"}},[n("el-table-column",{attrs:{label:"提现人数",align:"center",prop:"cwithdrawalPlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.withdrawalTotalPlayer))])]}}],null,!1,1840844218)}),e._v(" "),n("el-table-column",{attrs:{label:"提现笔数",align:"center",prop:"cwithdrawalCount"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.withdrawalTotalCount))])]}}],null,!1,4035865930)}),e._v(" "),n("el-table-column",{attrs:{label:"提现金额",align:"center",prop:"cwithdrawalMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(e._f("balance")(a.withdrawalTotalBalance)))])]}}],null,!1,277631376)})],1):e._e()],1):e._e()],1)],1)},l=[],o=(n("c5f6"),n("ac6a"),n("333d")),r=n("b775"),u=(n("5c96"),n("4360")),s={name:"ReportRecharge",components:{Pagination:o["a"]},data:function(){return{user:u["a"].getters.user,tableKey:0,list:null,listLoading:!0,query:{time:2,begin:"",end:""},showColumns:{index:!0,ymd:!0,recharge:!0,rechargeOffline:!0,rechargeOnline:!0,rechargeHands:!0,rechargeTotal:!0,with:!0,withUsdt:!0,withBank:!0,withHands:!0,withTotal:!0}}},created:function(){this.getList(),this.checkShowColumns()},updated:function(){var e=this;this.$nextTick((function(){e.$refs["dataTable"].doLayout()}))},methods:{checkShowColumns:function(){try{var e=JSON.parse(localStorage.getItem("report_recharge_show"));console.log(e),void 0==e&&null==e||(this.showColumns=e)}catch(t){}},updateChooseColumns:function(){localStorage.setItem("report_recharge_show",JSON.stringify(this.showColumns))},getSummaries:function(e){var t=e.columns,n=e.data,a=[];return t.forEach((function(e,t){var l=e.property;if("index"!==l)if("ymd"!==l){var o=n.map((function(t){return Number(t[e.property])}));o.every((function(e){return isNaN(e)}))?a[t]="0":(a[t]=o.reduce((function(e,t){var n=Number(t);return isNaN(n)?e:e+t}),0),"rechargeMoney"!=l&&"brechargeMoney"!=l&&"crechargeMoney"!=l&&"rechargeTotalBalance"!=l&&"withdrawalMoney"!=l&&22!=l&&"bwithdrawalMoney"!=l&&"cwithdrawalMoney"!=l&&"withdrawalTotalBalance"!=l||(a[t]=Math.abs(a[t]/100)))}else a[t]="合计";else a[t]=""})),a},getList:function(){var e=this;this.listLoading=!0;var t=this;Object(r["a"])({url:"ball/report/recharge",method:"post",data:t.query}).then((function(t){200===t.code&&(e.list=t.data),e.listLoading=!1})).catch((function(){e.listLoading=!1}))},handleFilter:function(){this.getList()}}},c=s,i=n("2877"),d=Object(i["a"])(c,a,l,!1,null,null,null);t["default"]=d.exports},"7e75":function(e,t,n){},"94c7":function(e,t,n){"use strict";var a=n("7e75"),l=n.n(a);l.a}}]);