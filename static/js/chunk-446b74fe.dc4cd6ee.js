(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-446b74fe"],{"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{hidden:t.hidden,"pagination-container":!t.isTop,"pagination-container-top":t.isTop}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total,isTop:t.isTop},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function l(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,a){var n=o(),i=t-n,r=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=r;var o=Math.easeInOutQuad(c,n,i,e);l(o),c<e?s(t):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&r(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},u=c,p=(a("94c7"),a("2877")),d=Object(p["a"])(u,n,i,!1,null,"7a2f2234",null);e["a"]=d.exports},4843:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[t.hasAuth("/ball/finance/behalf")?a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("\n      "+t._s(t.$t("table.add"))+"\n    ")]):t._e()],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{isTop:!0,total:t.total,page:t.listQuery.pageNo,limit:t.listQuery.pageSize},on:{"update:page":function(e){return t.$set(t.listQuery,"pageNo",e)},"update:limit":function(e){return t.$set(t.listQuery,"pageSize",e)},pagination:t.getList}}),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{label:"id",prop:"id",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"代付名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"代付类型",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t.payTypes[n.payType-1].name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(1==n.status?"启用":"禁用"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"备注",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(n.remark))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center","min-width":"200px","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,i=e.$index;return[t.hasAuth("/ball/finance/behalf/status")?a("el-button",{attrs:{type:1==n.status?"danger":"success",size:"mini"},on:{click:function(e){return t.changeStatus(n)}}},[t._v("\n          "+t._s(1==n.status?"禁用":"启用")+"\n        ")]):t._e(),t._v(" "),t.hasAuth("/ball/finance/behalf/edit")?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(n)}}},[t._v("\n          "+t._s(t.$t("table.edit"))+"\n        ")]):t._e(),t._v(" "),t.hasAuth("/ball/finance/behalf/del")?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(n,i)}}},[t._v("\n          "+t._s(t.$t("table.delete"))+"\n        ")]):t._e()]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.pageNo,limit:t.listQuery.pageSize},on:{"update:page":function(e){return t.$set(t.listQuery,"pageNo",e)},"update:limit":function(e){return t.$set(t.listQuery,"pageSize",e)},pagination:t.getList}}),t._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px"},attrs:{model:t.temp,"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"代付类型",prop:"password"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.temp.payType,callback:function(e){t.$set(t.temp,"payType",e)},expression:"temp.payType"}},t._l(t.payTypes,(function(t){return a("el-option",{key:"paytypes"+t.value,attrs:{label:t.name,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"代付地址"}},[a("el-input",{attrs:{placeholder:"发起代付的地址"},model:{value:t.temp.serverUrl,callback:function(e){t.$set(t.temp,"serverUrl",e)},expression:"temp.serverUrl"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"回调地址"}},[a("el-input",{attrs:{placeholder:"填写本服务器地址"},model:{value:t.temp.localCallback,callback:function(e){t.$set(t.temp,"localCallback",e)},expression:"temp.localCallback"}}),t._v(" "),a("span",[t._v("印度:/player/pay/callback/3,完整地址示例:http://localhost:10100/player/pay/callback/3")])],1),t._v(" "),1==t.temp.payType?a("el-form-item",{attrs:{label:"代付查询地址"}},[a("el-input",{attrs:{placeholder:"代付查询地址"},model:{value:t.temp.queryUrl,callback:function(e){t.$set(t.temp,"queryUrl",e)},expression:"temp.queryUrl"}})],1):t._e(),t._v(" "),1==t.temp.payType?a("el-form-item",{attrs:{label:"商户号"}},[a("el-input",{attrs:{placeholder:"商户后台商户号"},model:{value:t.temp.merchantNo,callback:function(e){t.$set(t.temp,"merchantNo",e)},expression:"temp.merchantNo"}})],1):t._e(),t._v(" "),1==t.temp.payType?a("el-form-item",{attrs:{label:"代付密钥"}},[a("el-input",{attrs:{placeholder:"商户后台代付密钥"},model:{value:t.temp.paymentKey,callback:function(e){t.$set(t.temp,"paymentKey",e)},expression:"temp.paymentKey"}})],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n        "+t._s(t.$t("table.cancel"))+"\n      ")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitData}},[t._v("\n        "+t._s(t.$t("table.confirm"))+"\n      ")])],1)],1)],1)},i=[],s=(a("55dd"),a("20d6"),a("333d")),l=a("b775"),o=a("5c96"),r=a("4360"),c={name:"FinanceBehalf",components:{Pagination:s["a"]},data:function(){return{baseUrl:r["a"].getters.baseUrl,user:r["a"].getters.user,tableKey:0,list:null,total:0,listLoading:!0,listQuery:{pageNo:1,pageSize:20,username:""},temp:{id:0},uploadHeader:{token:r["a"].getters.token},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},payTypes:[{name:"印度代付",value:1}],deposits:[],commissions:[],submitUrl:"ball/finance/behalf/add"}},created:function(){this.getList()},methods:{choosePayType:function(){1==this.temp.payType?this.temp.ustdCallback="/behalf/callback/1":2==this.temp.payType&&(this.temp.ustdCallback="/behalf/callback/2")},changeStatus:function(t){var e=this;o["MessageBox"].confirm("你确定要"+(1==t.status?"禁用":"启用")+"吗？","提醒",{confirmButtonText:this.$t("button.ok"),cancelButtonText:this.$t("button.cancel"),type:"warning"}).then((function(){Object(l["a"])({url:"ball/finance/behalf/status",method:"post",data:{id:t.id,status:2==t.status?1:2}}).then((function(a){200===a.code&&(e.$notify({message:e.$t("messages.successEdit"),type:"success",duration:2e3}),t.status=2==t.status?1:2)}))}))},laji:function(){return document.body.style.overflow="",!1},submitData:function(){"create"===this.dialogStatus?this.createData():this.updateData()},importDataError:function(t){console.log(t)},importContentDataSuccess:function(t){this.$refs.uploadContentFile.clearFiles(),200===t.code?(this.$message({message:"create"===this.dialogStatus?this.$t("messages.successAdd"):this.$t("messages.successEdit"),type:"success",duration:3e3}),this.dialogFormVisible=!1,this.$refs.uploadContentFile.clearFiles(),this.getList()):this.$message({message:t.msg,type:"error",duration:3e3})},getDepositPolicy:function(){var t=this;Object(l["a"])({url:"ball/finance/behalf",method:"get"}).then((function(e){200===e.code&&(t.deposits=e.data)})).catch((function(){}))},getCommissionStrategy:function(){var t=this;Object(l["a"])({url:"ball/finance/behalf",method:"put"}).then((function(e){200===e.code&&(t.commissions=e.data)})).catch((function(){}))},getList:function(){var t=this;this.listLoading=!0;var e=this;Object(l["a"])({url:"ball/finance/behalf",method:"post",params:e.listQuery}).then((function(e){200===e.code&&(t.list=e.data.results,t.total=e.data.totalCount),t.listLoading=!1})).catch((function(){t.listLoading=!1}))},handleFilter:function(){this.listQuery.pageNo=1,this.getList()},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:0}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.submitUrl="ball/finance/behalf/add",this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){t.temp.rate=parseInt(t.temp.rate),t.temp.type=parseInt(t.temp.type),e&&Object(l["a"])({url:"ball/finance/behalf/add",method:"post",params:t.temp}).then((function(e){200===e.code&&(t.dialogFormVisible=!1,t.list.unshift(e.data),t.$message({message:t.$t("messages.successAdd"),type:"success",duration:3e3}))}))}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.submitUrl="ball/finance/behalf/edit",this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=Object.assign({},t.temp);Object(l["a"])({url:"ball/finance/behalf/edit",method:"post",params:a}).then((function(e){if(200===e.code){var a=t.list.findIndex((function(e){return e.id===t.temp.id}));t.dialogFormVisible=!1,t.list.splice(a,1,t.temp),t.$notify({message:t.$t("messages.successEdit"),type:"success",duration:2e3})}}))}}))},handleDelete:function(t,e){var a=this,n=t.id;o["MessageBox"].confirm(this.$t("tips.delContent"),this.$t("tips.delTitle"),{confirmButtonText:this.$t("button.ok"),cancelButtonText:this.$t("button.cancel"),type:"warning"}).then((function(){Object(l["a"])({url:"ball/finance/behalf/del?id="+n,method:"get"}).then((function(t){200===t.code&&(a.$notify({title:a.$t("messages.success"),message:a.$t("messages.successDel"),type:"success",duration:2e3}),a.list.splice(e,1))}))})).catch((function(){}))},getSortClass:function(t){var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":"descending"}}},u=c,p=a("2877"),d=Object(p["a"])(u,n,i,!1,null,null,null);e["default"]=d.exports},"7e75":function(t,e,a){},"94c7":function(t,e,a){"use strict";var n=a("7e75"),i=a.n(n);i.a}}]);