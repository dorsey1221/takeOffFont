(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5297d33a"],{"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{hidden:e.hidden,"pagination-container":!e.isTop,"pagination-container-top":e.isTop}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total,isTop:e.isTop},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},l=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function u(e,t,a){var n=i(),l=e-n,u=20,s=0;t="undefined"===typeof t?500:t;var c=function e(){s+=u;var i=Math.easeInOutQuad(s,n,l,t);r(i),s<t?o(e):a&&"function"===typeof a&&a()};c()}var s={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&u(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&u(0,800)}}},c=s,d=(a("94c7"),a("2877")),p=Object(d["a"])(c,n,l,!1,null,"7a2f2234",null);t["a"]=p.exports},"7e75":function(e,t,a){},"85c0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-radio",{attrs:{label:0},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("今天")]),e._v(" "),a("el-radio",{attrs:{label:1},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("昨天")]),e._v(" "),a("el-radio",{attrs:{label:2},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("近3天")]),e._v(" "),a("el-radio",{attrs:{label:3},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("本周")]),e._v(" "),a("el-radio",{attrs:{label:4},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("上周")]),e._v(" "),a("el-radio",{attrs:{label:5},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("本月")]),e._v(" "),a("el-radio",{attrs:{label:6},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("上月")]),e._v(" "),a("el-radio",{attrs:{label:7},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}},[e._v("自定义")]),e._v(" "),7==e.query.time?a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"开始时间","value-format":"yyyy-MM-dd",type:"date"},model:{value:e.query.begin,callback:function(t){e.$set(e.query,"begin",t)},expression:"query.begin"}}):e._e(),e._v(" "),7==e.query.time?a("span",[e._v("至")]):e._e(),e._v(" "),7==e.query.time?a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"结束时间","value-format":"yyyy-MM-dd",type:"date"},model:{value:e.query.end,callback:function(t){e.$set(e.query,"end",t)},expression:"query.end"}}):e._e(),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n    "+e._s(e.$t("table.search"))+"\n  ")]),e._v(" "),a("el-dropdown",{staticStyle:{float:"right"},attrs:{"hide-on-click":!1}},[a("el-button",{attrs:{size:"mini",type:"primary"}},[a("i",{staticClass:"el-icon-s-grid right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.index,callback:function(t){e.$set(e.showColumns,"index",t)},expression:"showColumns.index"}},[e._v("#")])],1),e._v(" "),a("el-dropdown-item",[a("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.ymd,callback:function(t){e.$set(e.showColumns,"ymd",t)},expression:"showColumns.ymd"}},[e._v("统计日期")])],1),e._v(" "),a("el-dropdown-item",[a("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.gameCount,callback:function(t){e.$set(e.showColumns,"gameCount",t)},expression:"showColumns.gameCount"}},[e._v("比赛场次")])],1),e._v(" "),a("el-dropdown-item",[a("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.betGameCount,callback:function(t){e.$set(e.showColumns,"betGameCount",t)},expression:"showColumns.betGameCount"}},[e._v("下注场次")])],1),e._v(" "),a("el-dropdown-item",[a("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.notStart,callback:function(t){e.$set(e.showColumns,"notStart",t)},expression:"showColumns.notStart"}},[e._v("未开赛")])],1),e._v(" "),a("el-dropdown-item",[a("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.normal,callback:function(t){e.$set(e.showColumns,"normal",t)},expression:"showColumns.normal"}},[e._v("普通下注")])],1),e._v(" "),a("el-dropdown-item",[a("el-checkbox",{on:{change:function(t){return e.updateChooseColumns()}},model:{value:e.showColumns.even,callback:function(t){e.$set(e.showColumns,"even",t)},expression:"showColumns.even"}},[e._v("保本下注")])],1)],1)],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{isTop:!0,total:e.total,page:e.list.pageNo,limit:e.list.pageSize},on:{"update:page":function(t){return e.$set(e.list,"pageNo",t)},"update:limit":function(t){return e.$set(e.list,"pageSize",t)},pagination:e.getList}}),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,ref:"dataTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":"","show-summary":"","summary-method":e.getSummaries}},[e.showColumns.index?a("el-table-column",{attrs:{label:"#",align:"center",width:"80",type:"index",prop:"index"}}):e._e(),e._v(" "),e.showColumns.ymd?a("el-table-column",{attrs:{label:"统计日期",align:"center",width:"120",prop:"ymd"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.ymd))])]}}],null,!1,1786295380)}):e._e(),e._v(" "),e.showColumns.gameCount?a("el-table-column",{attrs:{label:"比赛场次",align:"center",prop:"gameCount"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.gameCount))])]}}],null,!1,1593329033)}):e._e(),e._v(" "),e.showColumns.betGameCount?a("el-table-column",{attrs:{label:"下注场次",align:"center",prop:"betGameCount"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.betGameCount))])]}}],null,!1,940693306)}):e._e(),e._v(" "),e.showColumns.notStart?a("el-table-column",{attrs:{label:"未开赛",align:"center",prop:"notStart"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.notStart))])]}}],null,!1,3197172593)}):e._e(),e._v(" "),e.showColumns.normal?a("el-table-column",{attrs:{label:"普通下注",align:"center"}},[a("el-table-column",{attrs:{label:"下注人数",align:"center",prop:"betPlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.betPlayerCount))])]}}],null,!1,2695090631)}),e._v(" "),a("el-table-column",{attrs:{label:"下注笔数",align:"center",prop:"betCounts"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.betCounts))])]}}],null,!1,3506622215)}),e._v(" "),a("el-table-column",{attrs:{label:"投注金额",align:"center",prop:"betBalance"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balancez")(n.betBalance)))])]}}],null,!1,57901140)}),e._v(" "),a("el-table-column",{attrs:{label:"中奖人数",align:"center",prop:"betBingoCount"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.betBingoCount))])]}}],null,!1,2178344057)}),e._v(" "),a("el-table-column",{attrs:{label:"中奖金额",align:"center",prop:"betBingoBalance"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balance")(n.betBingoBalance)))])]}}],null,!1,1748268771)}),e._v(" "),a("el-table-column",{attrs:{label:"未中奖金额",align:"center",width:"120",prop:"betNotBingoBalance"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balance")(n.betNotBingoBalance)))])]}}],null,!1,3731512342)}),e._v(" "),a("el-table-column",{attrs:{label:"手续费",align:"center",prop:"betHandMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balance")(n.betHandMoney)))])]}}],null,!1,481319483)}),e._v(" "),a("el-table-column",{attrs:{label:"盈亏金额",align:"center",prop:"betWinLose"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balancex")(n.betWinLose)))])]}}],null,!1,2906672181)}),e._v(" "),a("el-table-column",{attrs:{label:"人均盈亏",align:"center",prop:"betWinLosePerPlayer"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balancex")(n.betWinLosePerPlayer)))])]}}],null,!1,4095044033)}),e._v(" "),a("el-table-column",{attrs:{label:"盈亏率(%)",align:"center",width:"120",prop:"betWinLosePer"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.betWinLosePer))])]}}],null,!1,1204480341)})],1):e._e(),e._v(" "),e.showColumns.even?a("el-table-column",{attrs:{label:"保本下注",align:"center"}},[a("el-table-column",{attrs:{label:"下注人数",align:"center",prop:"bbetPlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.bbetPlayerCount))])]}}],null,!1,945852421)}),e._v(" "),a("el-table-column",{attrs:{label:"下注笔数",align:"center",prop:"bbetCounts"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.bbetCounts))])]}}],null,!1,2421753797)}),e._v(" "),a("el-table-column",{attrs:{label:"投注金额",align:"center",prop:"bbetBalance"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balancez")(n.bbetBalance)))])]}}],null,!1,3505597686)}),e._v(" "),a("el-table-column",{attrs:{label:"中奖人数",align:"center",prop:"bbetBingoCount"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.bbetBingoCount))])]}}],null,!1,1971500091)}),e._v(" "),a("el-table-column",{attrs:{label:"中奖金额",align:"center",prop:"bbetBingoBalance"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balance")(n.bbetBingoBalance)))])]}}],null,!1,1163561761)}),e._v(" "),a("el-table-column",{attrs:{label:"手续费",align:"center",prop:"bbetHandMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balance")(n.bbetHandMoney)))])]}}],null,!1,4057601273)}),e._v(" "),a("el-table-column",{attrs:{label:"盈亏金额",align:"center",prop:"bbetWinLose"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balancex")(n.bbetWinLose)))])]}}],null,!1,490863287)}),e._v(" "),a("el-table-column",{attrs:{label:"人均盈亏",align:"center",prop:"bbetWinLosePer"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balancex")(n.bbetWinLosePerPlayer)))])]}}],null,!1,3385956483)})],1):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.detail(n.ymd)}}},[e._v("\n          "+e._s(e.$t("table.info"))+"\n        ")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.list.pageNo,limit:e.list.pageSize},on:{"update:page":function(t){return e.$set(e.list,"pageNo",t)},"update:limit":function(t){return e.$set(e.list,"pageSize",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,visible:e.dialogFormVisible,fullscreen:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-radio",{attrs:{label:0},model:{value:e.detailQuery.time,callback:function(t){e.$set(e.detailQuery,"time",t)},expression:"detailQuery.time"}},[e._v("今天")]),e._v(" "),a("el-radio",{attrs:{label:1},model:{value:e.detailQuery.time,callback:function(t){e.$set(e.detailQuery,"time",t)},expression:"detailQuery.time"}},[e._v("昨天")]),e._v(" "),a("el-radio",{attrs:{label:2},model:{value:e.detailQuery.time,callback:function(t){e.$set(e.detailQuery,"time",t)},expression:"detailQuery.time"}},[e._v("近3天")]),e._v(" "),a("el-radio",{attrs:{label:3},model:{value:e.detailQuery.time,callback:function(t){e.$set(e.detailQuery,"time",t)},expression:"detailQuery.time"}},[e._v("本周")]),e._v(" "),a("el-radio",{attrs:{label:4},model:{value:e.detailQuery.time,callback:function(t){e.$set(e.detailQuery,"time",t)},expression:"detailQuery.time"}},[e._v("上周")]),e._v(" "),a("el-radio",{attrs:{label:5},model:{value:e.detailQuery.time,callback:function(t){e.$set(e.detailQuery,"time",t)},expression:"detailQuery.time"}},[e._v("本月")]),e._v(" "),a("el-radio",{attrs:{label:6},model:{value:e.detailQuery.time,callback:function(t){e.$set(e.detailQuery,"time",t)},expression:"detailQuery.time"}},[e._v("上月")]),e._v(" "),a("el-radio",{attrs:{label:7},model:{value:e.detailQuery.time,callback:function(t){e.$set(e.detailQuery,"time",t)},expression:"detailQuery.time"}},[e._v("自定义")]),e._v(" "),7==e.detailQuery.time?a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"开始时间","value-format":"yyyy-MM-dd",type:"date"},model:{value:e.detailQuery.begin,callback:function(t){e.$set(e.detailQuery,"begin",t)},expression:"detailQuery.begin"}}):e._e(),e._v(" "),7==e.detailQuery.time?a("span",[e._v("至")]):e._e(),e._v(" "),7==e.detailQuery.time?a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"结束时间","value-format":"yyyy-MM-dd",type:"date"},model:{value:e.detailQuery.end,callback:function(t){e.$set(e.detailQuery,"end",t)},expression:"detailQuery.end"}}):e._e(),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.detail(1)}}},[e._v("\n      "+e._s(e.$t("table.search"))+"\n    ")]),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.detailTotal>0,expression:"detailTotal>0"}],attrs:{isTop:!0,total:e.detailTotal,page:e.detailQuery.pageNo,limit:e.detailQuery.pageSize},on:{"update:page":function(t){return e.$set(e.detailQuery,"pageNo",t)},"update:limit":function(t){return e.$set(e.detailQuery,"pageSize",t)},pagination:e.detail}}),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKeyDetail,staticStyle:{width:"100%"},attrs:{data:e.detailList,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"#",align:"center",width:"80",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"统计日期",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.ymd))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"赛事ID",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"赛事",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.info))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"普通下注",align:"center"}},[a("el-table-column",{attrs:{label:"下注人数",align:"center",prop:"betPlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.betPlayerCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"下注笔数",align:"center",prop:"betCounts"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.betCounts))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"投注金额",align:"center",prop:"betBalance"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balancez")(n.betBalance)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"中奖人数",align:"center",prop:"notStart"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.betBingoCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"中奖金额",align:"center",prop:"betBingoBalance"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balance")(n.betBingoBalance)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手续费",align:"center",prop:"betHandMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balance")(n.betHandMoney)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"盈亏金额",align:"center",prop:"betWinLose"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balancex")(n.betWinLose)))])]}}])})],1),e._v(" "),a("el-table-column",{attrs:{label:"保本下注",align:"center"}},[a("el-table-column",{attrs:{label:"下注人数",align:"center",prop:"bbetPlayerCount"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.bbetPlayerCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"下注笔数",align:"center",prop:"bbetCounts"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.bbetCounts))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"投注金额",align:"center",prop:"bbetBalance"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balancez")(n.bbetBalance)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"中奖人数",align:"center",prop:"bbetBingoCount"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.bbetBingoCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"中奖金额",align:"center",prop:"bbetBingoBalance"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balance")(n.bbetBingoBalance)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手续费",align:"center",prop:"bbetHandMoney"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balance")(n.bbetHandMoney)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"盈亏金额",align:"center",prop:"bbetWinLose"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("balancex")(n.bbetWinLose)))])]}}])})],1)],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.detailTotal>0,expression:"detailTotal>0"}],attrs:{total:e.detailTotal,page:e.detailQuery.pageNo,limit:e.detailQuery.pageSize},on:{"update:page":function(t){return e.$set(e.detailQuery,"pageNo",t)},"update:limit":function(t){return e.$set(e.detailQuery,"pageSize",t)},pagination:e.detail}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        "+e._s(e.$t("table.cancel"))+"\n      ")])],1)],1)],1)},l=[],o=(a("c5f6"),a("ac6a"),a("333d")),r=a("b775"),i=(a("5c96"),a("4360")),u={name:"ReportGame",components:{Pagination:o["a"]},data:function(){return{user:i["a"].getters.user,tableKey:0,list:null,listLoading:!0,total:0,query:{time:2,begin:"",end:""},dialogFormVisible:!1,detailList:[],detailQuery:{pageNo:1,pageSize:10,begin:"",end:"",gameId:null,time:""},detailTotal:0,tableKeyDetail:"tableKeyDetail",showColumns:{index:!0,ymd:!0,gameCount:!0,betGameCount:!0,notStart:!0,normal:!0,even:!0}}},created:function(){this.getList(),this.checkShowColumns()},updated:function(){var e=this;this.$nextTick((function(){e.$refs["dataTable"].doLayout()}))},methods:{checkShowColumns:function(){try{var e=JSON.parse(localStorage.getItem("report_game_show"));console.log(e),void 0==e&&null==e||(this.showColumns=e)}catch(t){}},updateChooseColumns:function(){localStorage.setItem("report_game_show",JSON.stringify(this.showColumns))},detail:function(e){var t=this;this.dialogFormVisible=!0,1!=e&&(this.detailQuery.time=7,this.detailQuery.begin=e,this.detailQuery.end=e),Object(r["a"])({url:"ball/report/game",method:"put",data:this.detailQuery}).then((function(e){200===e.code&&(t.detailList=e.data.results,t.detailTotal=e.data.totalCount)})).catch((function(){}))},getSummaries:function(e){var t=e.columns,a=e.data,n=[];return t.forEach((function(e,t){var l=e.property;if("index"!==l)if("ymd"!==l){var o=a.map((function(t){return Number(t[e.property])}));o.every((function(e){return isNaN(e)}))?n[t]="0":(n[t]=o.reduce((function(e,t){var a=Number(t);return isNaN(a)?e:e+t}),0),"betBalance"!=l&&"betBingoBalance"!=l&&"betNotBingoBalance"!=l&&"betHandMoney"!=l&&"betWinLose"!=l&&"betWinLosePerPlayer"!=l&&"bbetBalance"!=l&&"bbetBingoBalance"!=l&&"bbetHandMoney"!=l&&"bbetWinLose"!=l&&"bbetWinLosePer"!=l||(n[t]=Math.abs(n[t]/100)))}else n[t]="合计";else n[t]=""})),n},getList:function(){var e=this;this.listLoading=!0;var t=this;Object(r["a"])({url:"ball/report/game",method:"post",data:t.query}).then((function(t){200===t.code&&(e.list=t.data.results,e.total=t.data.totalCount),e.listLoading=!1})).catch((function(){e.listLoading=!1}))},handleFilter:function(){this.getList()}}},s=u,c=a("2877"),d=Object(c["a"])(s,n,l,!1,null,null,null);t["default"]=d.exports},"94c7":function(e,t,a){"use strict";var n=a("7e75"),l=a.n(n);l.a}}]);