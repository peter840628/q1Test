(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1161:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),n("router-view",{staticClass:"mx-5 mt-3 px-5"})],1)},i=[],s=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.address))])])},c=[],l=n("59ca"),u=n.n(l),d=(n("66ce"),u.a.initializeApp({databaseURL:"https://smart-q1-9cf94.firebaseio.com"}).database()),p=d,m={name:"Home",data:function(){return{title:null,address:null}},mounted:function(){var t=this;p.collection("q1").doc("item-types").get().then((function(e){t.title=e.data().title,t.address=e.data().address}))}},v=m,f=n("2877"),h=Object(f["a"])(v,o,c,!1,null,null,null),b=h.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.typeName,expression:"typeName"}],attrs:{type:"text",placeholder:"Add new type"},domProps:{value:t.typeName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createType(e)},input:function(e){e.target.composing||(t.typeName=e.target.value)}}}),n("ProductTypeCard",{attrs:{productTypes:t.types}})],1)},g=[],y=(n("96cf"),n("1da1")),S=n("bc3a"),w=n.n(S),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.productTypes,(function(e){return n("div",{key:e.id,staticClass:"card col-3"},[n("router-link",{attrs:{to:"/productList/"+e.id}},[n("img",{staticClass:"card-img-top",attrs:{src:"https://www.blms.io/wp-content/uploads/2017/11/logo%E9%80%8F%E6%98%8E-400x400.png",alt:"..."}})]),n("div",{staticClass:"card-body"},[n("h6",{staticClass:"card-title"},[t._v(t._s(e.title))]),n("button",{on:{click:function(n){return t.deleteType(e)}}},[t._v("Delete")])])],1)})),0)])},x=[],k={name:"ProductTypeCard",props:["productTypes"],methods:{deleteType:function(t){return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("http://localhost:3000/types/"+t.id).catch((function(t){console.log(t)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},C=k,P=Object(f["a"])(C,T,x,!1,null,null,null),$=P.exports,O="http://localhost:3000",E={name:"Menu",data:function(){return{types:[],typeName:""}},components:{ProductTypeCard:$},mounted:function(){var t=this;w.a.get(O+"/types").then((function(e){return t.types=e.data})).catch((function(t){console.log(t)}))},methods:{createType:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.post(O+"/types",{title:t.typeName}).catch((function(t){console.log(t)}));case 2:e.sent,t.typeName="";case 4:case"end":return e.stop()}}),e)})))()}}},R=E,j=Object(f["a"])(R,_,g,!1,null,null,null),I=j.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Billiards Equipments")])])}],B={name:"BilliardsEquipments"},q=B,J=Object(f["a"])(q,N,M,!1,null,null,null),D=J.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-timer"},[n("h1",[t._v("請選擇桌號")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.tables_index,expression:"tables_index"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.tables_index=e.target.multiple?n:n[0]}}},t._l(t.tables,(function(e,a){return n("option",{domProps:{value:a}},[t._v(t._s(e.num))])})),0),n("h1",[t._v("桌號: "+t._s(t.tables[t.tables_index].num))]),n("h1",[t._v("您已經遊玩 : "+t._s(t.newTableTimerStart))]),n("h1",[t._v("桌台費: "+t._s(t.formattedCost(t.tables[t.tables_index].timerSeconds,t.tables[t.tables_index].tableRate))+"$")]),n("h1",[t._v("桌台狀態: "+t._s(t.formattedStatus(t.tables[t.tables_index].tableRunning)))])])},A=[],L=(n("99af"),"http://192.168.1.113:4000"),F={name:"Bill",data:function(){return{data:{},timerInterval:null,tables_index:0,tables:[],tagetTable:[],currentTime:new Date}},methods:{hi:function(t){return"Welcome "+t},timeCalculate:function(t,e){var n=parseInt(Math.abs(t-e)/1e3);return n},startTimer:function(t){var e=this,n=this.testingStatus;this.tables[t].timerSeconds=this.timeCalculate(this.tables[t].tableTimerStart,this.currentTime-1)+this.tables[t].timeSaved,n||(this.tables[t].timerInterval=setInterval((function(){return e.tables[t].timerSeconds+=1}),1e3))},formattedTime:function(t){var e=t,n=Math.floor(e/3600),a=Math.floor(e%3600/60);a<10&&(a="0".concat(a));var r=e%60;return r<10&&(r="0".concat(r)),"".concat(n,":").concat(a,":").concat(r)},formattedStatus:function(t){var e=t;return this.status=1==e?"桌台計時中~":"桌台暫停中~",this.status},formattedCost:function(t,e){var n=t,a=e,r=Math.floor(n/3600*a);return r}},mounted:function(){var t=this;w.a.get(L+"/tables").then((function(e){t.tables=e.data,console.log(t.tables[0].timeSaved);for(var n=0;n<t.tables.length;n++)t.tables[n].tableRunning&&t.startTimer(n)})).catch((function(t){console.log(t)}))},computed:{newTableTimerStart:function(){var t=this;return t.tables[t.tables_index].tableRunning?t.formattedTime(t.tables[t.tables_index].timerSeconds):t.formattedTime(t.tables[t.tables_index].timeSaved)}}},W=F,G=Object(f["a"])(W,z,A,!1,null,null,null),H=G.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("body",[n("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$store.state.playerCount)+" 人模式")]),n("table",[n("button",{on:{click:function(e){t.$store.state.playerCount=2}}},[t._v("2 Players")]),n("button",{on:{click:function(e){t.$store.state.playerCount=3}}},[t._v("3 Players")]),n("button",{on:{click:function(e){t.$store.state.playerCount=4}}},[t._v("4 Players")]),n("tr",[n("th"),n("input",{attrs:{type:"text",id:"n1",value:"P1",size:"5"}}),n("th"),n("button",{on:{click:function(e){t.$store.state.p1Score--}}},[t._v("-")]),n("th"),n("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$store.state.p1Score))]),n("th"),n("button",{on:{click:function(e){t.$store.state.p1Score++}}},[t._v("+")])]),n("tr",[n("th"),n("input",{attrs:{type:"text",id:"T1",value:"P2",size:"5"}}),n("th"),n("button",{on:{click:function(e){t.$store.state.p2Score--}}},[t._v("-")]),n("th"),n("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$store.state.p2Score))]),n("th"),n("button",{on:{click:function(e){t.$store.state.p2Score++}}},[t._v("+")])]),t.$store.state.playerCount>=3?n("tr",{attrs:{id:"n3"}},[n("th"),n("input",{attrs:{type:"text",value:"P3",size:"5"}}),n("th"),n("button",{on:{click:function(e){t.$store.state.p3Score--}}},[t._v("-")]),n("th"),n("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$store.state.p3Score))]),n("th"),n("button",{on:{click:function(e){t.$store.state.p3Score++}}},[t._v("+")])]):t._e(),t.$store.state.playerCount>=4?n("tr",{attrs:{id:"n4"}},[n("th"),n("input",{attrs:{type:"text",value:"P4",size:"5"}}),n("th"),n("button",{on:{click:function(e){t.$store.state.p4Score--}}},[t._v("-")]),n("th"),n("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$store.state.p4Score))]),n("th"),n("button",{on:{click:function(e){t.$store.state.p4Score++}}},[t._v("+")])]):t._e()])])])},Q=[],U={name:"ScoreKeeper",data:function(){return{p1:0,p2:0,p3:0,p4:0}},methods:{}},V=U,X=(n("cff6"),Object(f["a"])(V,K,Q,!1,null,"00dbda22",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-timer"},[n("h1",[t._v("店內對戰平台")]),n("div",[n("table",[n("th",[n("tr",[t._v("桌台號碼")]),t._l(t.tables,(function(e){return n("tr",[t._v(t._s(e.num))])}))],2),n("th",[n("tr",[t._v("對戰狀態")]),t._l(t.tables,(function(e){return n("tr",[t._v(t._s(e.battle))])}))],2)])])])},tt=[],et=n("5530"),nt=n("2f62"),at={name:"Bill",data:function(){return{data:{},timerInterval:null}},methods:{},mounted:function(){},computed:Object(et["a"])({},Object(nt["b"])(["tables"]))},rt=at,it=(n("da64"),Object(f["a"])(rt,Z,tt,!1,null,"c174a232",null)),st=it.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newProductTitle,expression:"newProductTitle"}],attrs:{type:"text",placeholder:"Add new product"},domProps:{value:t.newProductTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createProduct(e)},input:function(e){e.target.composing||(t.newProductTitle=e.target.value)}}}),n("ul",{staticClass:"list-unstyled"},t._l(t.products,(function(e){return n("li",{key:e.id,staticClass:"media mt-4"},[n("img",{staticClass:"mr-3",staticStyle:{width:"100px"},attrs:{src:"https://www.blms.io/wp-content/uploads/2017/11/logo%E9%80%8F%E6%98%8E-400x400.png",alt:"..."}}),n("div",{staticClass:"media-body"},[n("h5",{staticClass:"mt-0 mb-1"},[t._v(t._s(e.title)+" - $"+t._s(e.price))]),t._v("Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")]),n("router-link",{attrs:{to:"/productEdit/"+e.id}},[n("button",[t._v("Edit")])]),n("button",{on:{click:function(n){return t.deleteProduct(e)}}},[t._v("Delete")])],1)})),0)])},ct=[],lt={name:"ProductList",data:function(){return{products:[],index:0,newProductTitle:""}},mounted:function(){var t=this;w.a.get("http://localhost:3000/types/"+this.$route.params.productTypeId+"/drinks").then((function(e){return t.products=e.data})).catch((function(t){console.log(t)}))},methods:{deleteProduct:function(t){return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("http://localhost:3000/drinks/"+t.id).catch((function(t){console.log(t)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()},createProduct:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("http://localhost:3000/types/"+t.$route.params.productTypeId+"/drinks",{title:t.newProductTitle}).catch((function(t){console.log(t)}));case 2:e.sent,t.newProductTitle="";case 4:case"end":return e.stop()}}),e)})))()}}},ut=lt,dt=Object(f["a"])(ut,ot,ct,!1,null,null,null),pt=dt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-timer"},[n("h1",[t._v("服務頁面")]),n("h1",[t._v(t._s(t.hi("Petaaa")))]),n("h2",[t._v("Current Time :"+t._s(t.currentTime))]),n("div",[n("table",[t._m(0),t._l(t.tables,(function(e,a){return n("tr",[n("td",[t._v(t._s(e.num))]),n("td",[t._v(t._s(e.tableTimerStart))]),n("td",[t._v(t._s(t.formattedTime(e.timerSeconds)))]),n("td",[t._v(t._s(e.productPrice)+"$")]),n("td",[t._v(t._s(t.formattedCost(e.timerSeconds,e.tableRate))+"$")]),n("td",[t._v(t._s(t.formattedStatus(e.tableRunning)))]),n("td",[n("button",{on:{click:function(e){t.currentTime=new Date,t.editJSONStartTime(t.currentTime-1,a)}}},[t._v("Start")]),n("button",{on:{click:function(n){t.stopTimer(a),e.tableRunning=!1}}},[t._v("Pause")]),n("button",{on:{click:function(e){return t.resetTimer(a)}}},[t._v("Reset")])])])}))],2)])])},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("桌台號碼")]),n("th",[t._v("開桌時間")]),n("th",[t._v("桌台計時")]),n("th",[t._v("商品費用")]),n("th",[t._v("桌台費用")]),n("th",[t._v("桌台狀態")]),n("th",[t._v("桌台控制")])])}],ft="http://192.168.1.113:4000",ht={name:"Service",data:function(){return{data:{},tables:[],startTime:new Date(1588628805008),currentTime:new Date,timePassed:0,testTI:null,testingStatus:!1,testingSave:0}},computed:{},mounted:function(){var t=this;w.a.get(ft+"/tables").then((function(e){t.tables=e.data,console.log(t.tables[0].timeSaved);for(var n=0;n<t.tables.length;n++)t.tables[n].tableRunning&&t.startTimer(n)})).catch((function(t){console.log(t)}))},methods:{hi:function(t){return"Welcome "+t},timeCalculate:function(t,e){var n=parseInt(Math.abs(t-e)/1e3);return n},getTimePassed:function(){return this.timePassed},editJSONStartTime:function(t,e){w.a.patch(ft+"/tables/"+e,{tableTimerStart:t,tableRunning:!0}).catch((function(t){console.log('editJSONStartTime"'+t)}));console.log("tts:"+t)},editJSONPause:function(t){var e=this.tables[t].timeSaved;0!=e&&(e=0);w.a.patch(ft+"/tables/"+t,{timerSeconds:this.tables[t].timerSeconds,tableTimerStart:this.currentTime-1,tableRunning:!1,timeSaved:e+this.tables[t].timerSeconds}).catch((function(t){console.log(t)}))},editJSONReset:function(t){w.a.patch(ft+"/tables/"+t,{tableTimerStart:0,timerSeconds:0,tableRunning:!1,timeSaved:0}).catch((function(t){console.log(t)}))},startTimer:function(t){var e=this,n=this.testingStatus;this.tables[t].timerSeconds=this.timeCalculate(this.tables[t].tableTimerStart,this.currentTime-1)+this.tables[t].timeSaved,n||(this.tables[t].timerInterval=setInterval((function(){return e.tables[t].timerSeconds+=1}),1e3))},stopTimer:function(t){var e=this.tables[t].tableRunning;e&&(clearInterval(this.tables[t].timerInterval),this.tables[t].timerInterval=null,this.tables[t].tableRunning=!1,this.editJSONPause(t))},resetTimer:function(t){this.tables[t].timerSeconds=0,this.stopTimer(t),this.editJSONReset(t)},formattedTime:function(t){var e=t,n=Math.floor(e/3600),a=Math.floor(e%3600/60);a<10&&(a="0".concat(a));var r=e%60;return r<10&&(r="0".concat(r)),"".concat(n,":").concat(a,":").concat(r)},formattedStatus:function(t){var e=t;return this.status=1==e?"桌台計時中~":"桌台暫停中~",this.status},formattedCost:function(t,e){var n=t,a=e,r=Math.floor(n/3600*a);return r}}},bt=ht,_t=(n("cfe0"),Object(f["a"])(bt,mt,vt,!1,null,"65adfabc",null)),gt=_t.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" "+t._s("product id: "+this.$route.params.productId)+" "),n("br"),t._v(" "+t._s("product title: "+this.product.title)+" "),n("br"),t._v(" "+t._s("type id: "+this.product.typeId)+" "),n("br"),t._v(" "+t._s("price: "+this.product.price)+" "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],attrs:{type:"text",placeholder:"Enter new title"},domProps:{value:t.newTitle},on:{input:function(e){e.target.composing||(t.newTitle=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTypeId,expression:"newTypeId"}],attrs:{type:"number",placeholder:"Enter new type id"},domProps:{value:t.newTypeId},on:{input:function(e){e.target.composing||(t.newTypeId=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newPrice,expression:"newPrice"}],attrs:{type:"number",placeholder:"Enter new price"},domProps:{value:t.newPrice},on:{input:function(e){e.target.composing||(t.newPrice=e.target.value)}}}),n("br"),n("button",{on:{click:t.editProduct}},[t._v("Submit")])])},St=[],wt={name:"ProductEdit",data:function(){return{product:{},newTitle:null,newTypeId:null,newPrice:null}},mounted:function(){var t=this;w.a.get("http://localhost:3000/drinks/"+this.$route.params.productId).then((function(e){return t.product=e.data})).catch((function(t){console.log(t)}))},methods:{editProduct:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.a.patch("http://localhost:3000/drinks/"+t.$route.params.productId,{title:t.newTitle,typeId:t.newTypeId,price:t.newPrice}).catch((function(t){console.log(t)}));case 2:e.sent,t.newTitle="";case 4:case"end":return e.stop()}}),e)})))()}}},Tt=wt,xt=Object(f["a"])(Tt,yt,St,!1,null,null,null),kt=xt.exports;a["a"].use(s["a"]);var Ct=[{path:"/",name:"home",component:b},{path:"/menu",name:"menu",component:I},{path:"/billiardsEquipments",name:"billiardsEquipments",component:D},{path:"/bill",name:"bill",component:H},{path:"/scoreBoard",name:"scoreBoard",component:Y},{path:"/battle",name:"battle",component:st},{path:"/productList/:productTypeId",name:"productList",component:pt},{path:"/ProductEdit/:productId",name:"productEdit",component:kt},{path:"/service",name:"service",component:gt}],Pt=new s["a"]({routes:Ct}),$t=Pt,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Q1 Billiards")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/menu"}},[t._v("Menu")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/billiardsEquipments"}},[t._v("Billiards Equipments")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/ScoreBoard"}},[t._v("Score Board")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/Battle"}},[t._v("Game Match")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/Bill"}},[t._v("Bill")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/Service"}},[t._v("Service")])],1)])])],1)])},Et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],Rt={name:"Navbar"},jt=Rt,It=Object(f["a"])(jt,Ot,Et,!1,null,null,null),Nt=It.exports,Mt={name:"App",components:{Navbar:Nt}},Bt=Mt,qt=Object(f["a"])(Bt,r,i,!1,null,null,null),Jt=qt.exports;a["a"].use(nt["a"]);var Dt=new nt["a"].Store({state:{playerCount:2,p1Score:0,p2Score:0,p3Score:0,p4Score:0,timerSeconds:0,tableRunning:!1,timerInterval:null,tableRate:16,premiumTableRate:18}}),zt=(n("4989"),n("f9e3"),n("0ff2"));a["a"].use(zt["a"]),a["a"].config.productionTip=!1,new a["a"]({store:Dt,router:$t,render:function(t){return t(Jt)}}).$mount("#app")},"9ad0":function(t,e,n){},cfe0:function(t,e,n){"use strict";var a=n("d75a"),r=n.n(a);r.a},cff6:function(t,e,n){"use strict";var a=n("1161"),r=n.n(a);r.a},d75a:function(t,e,n){},da64:function(t,e,n){"use strict";var a=n("9ad0"),r=n.n(a);r.a}});
//# sourceMappingURL=app.2cc24c93.js.map