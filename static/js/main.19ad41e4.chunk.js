(this["webpackJsonpcrud-app-react"]=this["webpackJsonpcrud-app-react"]||[]).push([[0],{16:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(17),i=a.n(c),r=(a(9),a(2)),d=a(7),l=a(13),o=a.n(l),j=a(18),u=a(21),m=(a(27),a(0));var b=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("campaignData");function t(){return(t=Object(j.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!=e?s(JSON.parse(e)):(s(a=[{_id:"6155e3d99c855bb61558d2ec",name:"Wiosenna odwil\u017c",keywords:["wiosna","promocja","ceny"],bidAmount:300,fund:5e3,status:!0,town:"Warszawa",radius:40},{_id:"61560bba017d85faace7687c",name:"Zima 2021",keywords:["zima","promocja","obni\u017cka"],bidAmount:500,fund:8e3,status:!1,town:"Krak\xf3w",radius:20},{_id:"61562c995050127a4821732d",name:"Sportowa Polska",keywords:["sport","ruch"],bidAmount:700,fund:9e3,status:!0,town:"Warszawa",radius:400}]),localStorage.setItem("campaignData",JSON.stringify(a)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log(e),function(){t.apply(this,arguments)}()}),[]),Object(m.jsxs)("div",{className:"campaigns-list",children:[Object(m.jsx)("div",{className:"name-header",children:"Campaigns:"}),a.map((function(e){return Object(m.jsxs)("div",{className:"flex-container flex-column campaign-element",children:[Object(m.jsx)("div",{className:"campaign-name",children:e.name}),Object(m.jsxs)("div",{className:"flex-container details-container",children:[Object(m.jsxs)("div",{className:"campaign-details",children:[Object(m.jsxs)("div",{children:["Keywords: ",e.keywords.map((function(e,t){return Object(m.jsx)("span",{className:"keyword",children:e},t)}))]}),Object(m.jsxs)("div",{children:["Status: ",Object(m.jsx)("span",{className:"bold",children:e.status?"on":"off"})]})]}),Object(m.jsxs)("div",{className:"campaign-details",children:[Object(m.jsxs)("div",{children:["Bid amount: ",Object(m.jsxs)("span",{className:"bold",children:[e.bidAmount," z\u0142"]})]}),Object(m.jsxs)("div",{children:["Campaign fund: ",Object(m.jsxs)("span",{className:"bold",children:[e.fund," z\u0142"]})]})]}),Object(m.jsxs)("div",{className:"campaign-details",children:[Object(m.jsxs)("div",{children:["Town: ",Object(m.jsx)("span",{className:"bold",children:e.town})]}),Object(m.jsxs)("div",{children:["Radius: ",Object(m.jsxs)("span",{className:"bold",children:[e.radius," km"]})]})]}),Object(m.jsxs)("div",{className:"campaign-options",children:[Object(m.jsx)("div",{className:"edit-btn flex-container",children:Object(m.jsxs)(d.b,{to:"/EditCampaign",className:"flex-container",style:{alignItems:"center"},children:[Object(m.jsx)("span",{className:"material-icons",children:"edit"}),"Edit"]})}),Object(m.jsxs)("div",{className:"delete-btn flex-container",onClick:function(){window.confirm("Are you sure you want to delete this campaign?")&&function(e){for(var t=JSON.parse(localStorage.getItem("campaignData")),a=0;a<t.length;a++)t[a]._id==e&&t.splice(a,1);localStorage.setItem("campaignData",JSON.stringify(t)),window.location.reload(!1)}(e._id)},children:[Object(m.jsx)("span",{className:"material-icons",children:"delete"}),"Delete"]})]})]})]},e._id)}))]})};a(34);var p=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(d.b,{to:"/AddCampaign",className:"btn-add",children:"+ Add campaign"}),Object(m.jsx)(b,{})]})};a(35);var x=function(){return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"on"===e.target.status.value?e.target.status.value=!0:e.target.status.value=!1;var t=JSON.parse(localStorage.getItem("campaignData")),a=t.length-1,n={_id:t[a]._id.split("").sort((function(e,t){return.5-Math.random()})).join(""),name:e.target.name.value,keywords:e.target.keywords.value.split(" "),bidAmount:e.target.bidAmount.value,fund:e.target.fund.value,status:e.target.status.value,town:e.target.town.value,radius:e.target.radius.value};t[a+1]=n,localStorage.setItem("campaignData",JSON.stringify(t)),alert("Successfully added new campaign"),window.location.reload(!1)},children:[Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:["Campaign name:",Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Enter campaign name",required:!0})]})}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{children:["Keywords:",Object(m.jsx)("input",{type:"text",name:"keywords",placeholder:"Enter keywords for campaign",required:!0})]}),Object(m.jsxs)("label",{className:"status",children:["Status (on/off):",Object(m.jsx)("input",{type:"checkbox",name:"status"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{children:["Bid amount:",Object(m.jsx)("input",{type:"number",name:"bidAmount",placeholder:"Enter bid amount",min:"1",required:!0})]}),Object(m.jsxs)("label",{children:["Campaign fund:",Object(m.jsx)("input",{type:"number",name:"fund",placeholder:"Enter campaign fund",min:"1",required:!0})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{children:["Town:",Object(m.jsx)("input",{type:"text",name:"town",placeholder:"Enter town name"})]}),Object(m.jsxs)("label",{children:["Radius [kilometers]:",Object(m.jsx)("input",{type:"number",name:"radius",placeholder:"Enter campaign radius",min:"1",required:!0})]})]}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"reset",children:"Reset"}),Object(m.jsx)("button",{type:"submit",children:"Submit"})]})]})};a(16);var h=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("header",{children:Object(m.jsx)("span",{children:"Add campaign"})}),Object(m.jsx)(x,{})]})};var O=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("header",{children:Object(m.jsx)("span",{children:"Edit campaign"})}),Object(m.jsx)(x,{})]})};var g=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(d.a,{children:Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{exact:!0,path:"/",component:p}),Object(m.jsx)(r.a,{exact:!0,path:"/AddCampaign",component:h}),Object(m.jsx)(r.a,{exact:!0,path:"/EditCampaign",component:O})]})})})};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[36,1,2]]]);
//# sourceMappingURL=main.19ad41e4.chunk.js.map