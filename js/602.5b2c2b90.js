"use strict";(self["webpackChunkpumpstation"]=self["webpackChunkpumpstation"]||[]).push([[602],{8602:function(t,e,a){a.r(e),a.d(e,{default:function(){return T}});var l=a(6252);const s=(0,l._)("br",null,null,-1),r={class:"container-fluid"},o={class:"card border-primary",style:{"margin-top":"-20px",height:"auto"}},n=(0,l._)("div",{class:"card-header",style:{"font-weight":"bold","font-size":"20px"}},"PT Imbang Tata Alam - EMP",-1),i={class:"card-body"},c={class:"row"},d={class:"col-lg-12"};function m(t,e,a,m,u,h){const p=(0,l.up)("servicelisttabel01");return(0,l.wg)(),(0,l.iD)(l.HY,null,[s,(0,l._)("div",r,[(0,l._)("div",o,[n,(0,l._)("div",i,[(0,l._)("div",c,[(0,l._)("div",d,[(0,l.Wm)(p,{header:u.header10,colom:u.colom10,data:u.data10,update_cmd:u.Update_Cmd},null,8,["header","colom","data","update_cmd"])])])])])])],64)}const u={class:"container-fluid"},h=(0,l.uE)('<div class="table-responsive" style="min-width:auto;"><table id="myTable" class="table table-bordered mt-2"><thead class="text-center" style="font-size:18px;font-weight:bold;text-align:center;"><tr><th style="width:3%;background-color:darkgrey;text-align:center;" rowspan="1" colspan="1">No</th><th style="white-space:nowarp;width:10%;background-color:darkgrey;text-align:center;" rowspan="1" colspan="1">Well ID</th><th style="white-space:nowarp;width:10%;background-color:darkgrey;text-align:center;" rowspan="1" colspan="1">Last Service </th><th style="white-space:nowarp;width:20%;background-color:darkgrey;text-align:center;" rowspan="1" colspan="1">Job Type</th><th style="width:40%;background-color:darkgrey;text-align:center;" rowspan="1" colspan="1">Remark </th><th style="width:20%;background-color:darkgrey;text-align:center;" rowspan="1" colspan="1">Action </th></tr></thead></table></div>',1),p=[h];function g(t,e,a,s,r,o){return(0,l.wg)(),(0,l.iD)("div",u,p)}a(560);var b=a(9755),f=a.n(b),v={name:"Servicelisttabel01",data(){return{data01:[],header01:[],label01:[]}},methods:{async getdata(){var t=f()("#myTable").DataTable({dom:"<'row'<'col-sm-12 col-md-6 d-flex'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",buttons:["colvis","excel","print","csv"],data:this.data,columnDefs:[{targets:0,title:"No",render:function(t,e,a,l){return"display"===e&&(t='<div class="text-center"><a style="">'+t+"</a></div>"),t}},{targets:1,title:"Well ID",render:function(t,e,a,l){return"display"===e&&(t='<div class="text-center"><a href="/wellsettingview01/'+encodeURIComponent(t)+'">'+t+"</a></div>"),t}},{targets:2,title:"Last Service",render:function(t,e,a,l){return"display"===e&&(t='<div class="text-left"><a style="text-align:center;">'+t+"</a></div>"),t}},{targets:3,title:"Job Type",render:function(t,e,a,l){return"display"===e&&(t='<div class="text-left"><a style="text-align:left;height:auto;">'+t+"</a></div>"),t}},{targets:4,title:"Remark",render:function(t,e,a,l){return console.log(t),"display"===e&&(t='<div class="text-left"><a style="text-align:left;">'+t+"</a></div>"),t}},{targets:5,title:"Action",render:function(t,e,a,l){let s=Object.keys(a).length;if(console.log(a),s>0)return parseInt(a.no)>1&&s>0?'<div class="d-flex justify-content-center"><button id="btn_generate" class="btn btn-success">Generate</button><button id="btn_generate" class="btn btn-success ms-1">View</button></div>':'<div class="d-flex justify-content-center"><button id="btn_view" class="btn btn-primary" >View</button></div>'}}],columns:[{data:"no"},{data:"well_id"},{data:"last_service"},{data:"job_type"},{data:"remark"},{data:"action"}],autoWidth:!1,destroy:!0,scrollX:!0,pageLength:25,search:!0,paging:!0,lengthChange:!0});t.cells().nodes().to$().css("vertical-align","middle")},view_well(t,e,a){this.$router.push({name:e,params:{well:t,param01:a}})}},props:{header:{},colom:{},data:{},update_cmd:""},mounted(){this.getdata()},updated(){console.log(this.data);f().fn.dataTable.isDataTable("#myTable")&&(f()("#myTable").empty(),f()("#myTable").DataTable({dom:"<'row'<'col-sm-12 col-md-12 d-flex'B><'mt-2'><'col-sm-12 col-md-6 d-flex'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",buttons:["colvis","excel","print","csv"],data:this.data,autoWidth:!1,destroy:!0,scrollX:!0,pageLength:25,search:!0,paging:!0,lengthChange:!0}))}},w=a(3744);const y=(0,w.Z)(v,[["render",g]]);var x=y,k={name:"WellServiceList01View",data(){return{Update_Cmd:"0",data10:[],colom10:[{}],header10:[{}],tag:""}},props:{wellinfo:""},methods:{simdata(){}},components:{servicelisttabel01:x},created(){this.simdata()},beforeCreate(){this.$store.state.items=[],this.$store.commit("addCustomer",{text:" PT. Imbang Tata Alam",href:"/pumpstation01view",icon:"fa fa-bookmark"}),this.$store.commit("addCustomer",{text:" Well Service",href:"/wellservice01view",icon:"fa fa-list-alt"}),this.$store.commit("addCustomer",{text:" "+this.wellinfo,href:"#",icon:"fa fa-history"})}};const _=(0,w.Z)(k,[["render",m]]);var T=_}}]);
//# sourceMappingURL=602.5b2c2b90.js.map