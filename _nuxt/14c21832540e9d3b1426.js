(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{269:function(t,o,n){var content=n(366);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("0d1fea3e",content,!0,{sourceMap:!1})},365:function(t,o,n){"use strict";var c=n(269);n.n(c).a},366:function(t,o,n){(o=n(27)(!1)).push([t.i,".navbar-offset{margin-top:100px!important}",""]),t.exports=o},372:function(t,o,n){"use strict";n.r(o);n(59),n(157),n(42);var c=n(7),e=n(26),r=n(298),l=n.n(r),d={name:"ListOfValues",components:{mdbContainer:e.mdbContainer,mdbRow:e.mdbRow,mdbCol:e.mdbCol,mdbIcon:e.mdbIcon,mdbInput:e.mdbInput,mdbCard:e.mdbCard,mdbCardText:e.mdbCardText,mdbCardBody:e.mdbCardBody,mdbCardTitle:e.mdbCardTitle,mdbBtn:e.mdbBtn,mdbModal:e.mdbModal,mdbModalBody:e.mdbModalBody,mdbModalFooter:e.mdbModalFooter},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function o(){var data,n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$axios.$get("/articles",{params:{_limit:10,Abstract_contains:t.value,Title_contains:t.value}});case 2:return data=o.sent,o.next=5,t.$axios.$get("/articles/count",{params:{Abstract_contains:t.value,Title_contains:t.value}});case 5:n=o.sent,t.articles_count=n,t.articles=data;case 8:case"end":return o.stop()}}),o)})))()},fetchOnServer:!1,data:function(){return{value:"",modal:!1,citation_content:"",articles:[],articles_count:0}},methods:{citation:function(t){var o=t.match(/href=".*?\?url=(.*?)"/),cite=new l.a(o[1]);this.modal=!0,this.citation_content=cite.format("bibliography",{format:"html",template:"apa",lang:"en-US"})}}},m=(n(365),n(38)),component=Object(m.a)(d,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("mdb-container",{staticClass:"navbar-offset"},[n("mdb-row",[n("mdb-col",{attrs:{col:"10"}},[n("mdb-card",[n("mdb-input",{staticClass:"p-2 m-2",attrs:{label:"Search...",size:"lg"},model:{value:t.value,callback:function(o){t.value=o},expression:"value"}}),t._v(" "),n("mdb-btn",{on:{click:t.$fetch}},[t._v("Search")])],1)],1),t._v(" "),n("mdb-col",{attrs:{col:"2"}},[n("button",{staticClass:"btn btn-primary"},[t._v(t._s(t.articles_count))])])],1),t._v(" "),t._l(t.articles,(function(article){return n("mdb-row",{key:article.Id,staticClass:"item"},[n("mdb-col",{attrs:{col:"12"}},[n("mdb-card",{staticClass:"mt-2"},[n("mdb-card-body",{attrs:{cascade:""}},[n("mdb-row",[n("mdb-col",{attrs:{col:"8"}},[n("mdb-card-title",[n("strong",[t._v(t._s(article.Title))])]),t._v(" "),n("h5",{staticClass:"indigo-text"},[n("strong",[t._v(t._s(article.Authors)+", "+t._s(article.Year)+",\n                  "+t._s(article.Source))])]),t._v(" "),n("mdb-card-text",[t._v(t._s(article.Abstract))])],1),t._v(" "),n("mdb-col",{attrs:{col:"4"}},[n("mdb-row",[n("mdb-col",{attrs:{col:"6"}},[n("strong",[t._v("Subject")])]),t._v(" "),n("mdb-col",{attrs:{col:"6"}},[t._v("\n                  "+t._s(article.Subject)+"\n                ")])],1),t._v(" "),n("mdb-row",{staticClass:"mt-2"},[n("mdb-col",{attrs:{col:"6"}},[n("strong",[t._v("Share")])]),t._v(" "),n("mdb-col",{attrs:{col:"6"}},[n("a",{staticClass:"px-2 fa-lg li-ic"},[n("mdb-icon",{attrs:{fab:"",icon:"linkedin"}})],1),t._v(" "),n("a",{staticClass:"px-2 fa-lg tw-ic"},[n("mdb-icon",{attrs:{fab:"",icon:"twitter"}})],1),t._v(" "),n("a",{staticClass:"px-2 fa-lg fb-ic"},[n("mdb-icon",{attrs:{fab:"",icon:"facebook"}})],1)])],1),t._v(" "),n("mdb-row",{staticClass:"mt-2"},[n("mdb-col",{staticClass:"text-center",attrs:{col:"6"}},[n("button",{staticClass:"btn btn-primary",on:{click:function(o){return t.citation(article.OA)}}},[t._v("\n                    Citation\n                  ")])]),t._v(" "),n("mdb-col",{staticClass:"text-center",attrs:{col:"6"},domProps:{innerHTML:t._s(article.OA)}},[t._v("\n                  "+t._s(article.OA)+"\n                ")])],1)],1)],1)],1)],1)],1)],1)})),t._v(" "),n("mdb-modal",{attrs:{show:t.modal,centered:!0},on:{close:function(o){t.modal=!1}}},[n("mdb-modal-body",{domProps:{innerHTML:t._s(t.citation_content)}},[t._v(t._s(t.citation_content))]),t._v(" "),n("mdb-modal-footer",[n("mdb-btn",{attrs:{color:"secondary"},nativeOn:{click:function(o){t.modal=!1}}},[t._v("Close")])],1)],1)],2)}),[],!1,null,null,null);o.default=component.exports}}]);