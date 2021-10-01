(this["webpackJsonpcrud-app-react"]=this["webpackJsonpcrud-app-react"]||[]).push([[0],{10:function(e,t,a){},26:function(e,t,a){},57:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(27),i=a.n(s),r=(a(10),a(2)),d=a(8),l=a(15),j=a.n(l),o=a(28),u=a(32),m=a(29),b=a.n(m),p=(a(57),a(0));var x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("campaignData"));function t(){return(t=Object(o.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e){t.next=4;break}c(e),t.next=9;break;case 4:return t.next=6,b.a.get("http://192.109.240.27:8080/Campaigns/");case 6:a=t.sent,c(a.data),localStorage.setItem("campaignData",JSON.stringify(a.data));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{className:"campaigns-list",children:[Object(p.jsx)("div",{className:"name-header",children:"Campaigns:"}),a.map((function(e){return Object(p.jsxs)("div",{className:"flex-container flex-column campaign-element",children:[Object(p.jsx)("div",{className:"campaign-name",children:e.name}),Object(p.jsxs)("div",{className:"flex-container details-container",children:[Object(p.jsxs)("div",{className:"campaign-details",children:[Object(p.jsxs)("div",{children:["Keywords: ",e.keywords.map((function(e,t){return Object(p.jsx)("span",{className:"keyword",children:e},t)}))]}),Object(p.jsxs)("div",{children:["Status: ",Object(p.jsx)("span",{className:"bold",children:e.status?"on":"off"})]})]}),Object(p.jsxs)("div",{className:"campaign-details",children:[Object(p.jsxs)("div",{children:["Bid amount: ",Object(p.jsxs)("span",{className:"bold",children:[e.bidAmount," z\u0142"]})]}),Object(p.jsxs)("div",{children:["Campaign fund: ",Object(p.jsxs)("span",{className:"bold",children:[e.fund," z\u0142"]})]})]}),Object(p.jsxs)("div",{className:"campaign-details",children:[Object(p.jsxs)("div",{children:["Town: ",Object(p.jsx)("span",{className:"bold",children:e.town})]}),Object(p.jsxs)("div",{children:["Radius: ",Object(p.jsxs)("span",{className:"bold",children:[e.radius," km"]})]})]}),Object(p.jsxs)("div",{className:"campaign-options",children:[Object(p.jsx)("div",{className:"edit-btn flex-container",children:Object(p.jsxs)(d.b,{to:"/EditCampaign",className:"flex-container",style:{alignItems:"center"},children:[Object(p.jsx)("span",{className:"material-icons",children:"edit"}),"Edit"]})}),Object(p.jsxs)("div",{className:"delete-btn flex-container",onClick:function(){window.confirm("Are you sure you want to delete this campaign?")&&function(e){for(var t=JSON.parse(localStorage.getItem("campaignData")),a=0;a<t.length;a++)t[a]._id===e&&t.splice(a,1);localStorage.setItem("campaignData",JSON.stringify(t)),window.location.reload(!1)}(e._id)},children:[Object(p.jsx)("span",{className:"material-icons",children:"delete"}),"Delete"]})]})]})]},e._id)}))]})};a(64);var h=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(d.b,{to:"/AddCampaign",className:"btn-add",children:"+ Add campaign"}),Object(p.jsx)(x,{})]})};a(65);var O=function(){return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"on"===e.target.status.value?e.target.status.value=!0:e.target.status.value=!1;var t=JSON.parse(localStorage.getItem("campaignData")),a=t.length-1,n={_id:t[a]._id.split("").sort((function(e,t){return.5-Math.random()})).join(""),name:e.target.name.value,keywords:e.target.keywords.value.split(" "),bidAmount:e.target.bidAmount.value,fund:e.target.fund.value,status:e.target.status.value,town:e.target.town.value,radius:e.target.radius.value};t[a+1]=n,localStorage.setItem("campaignData",JSON.stringify(t)),alert("Successfully added new campaign"),window.location.reload(!1)},children:[Object(p.jsx)("div",{children:Object(p.jsxs)("label",{children:["Campaign name:",Object(p.jsx)("input",{type:"text",name:"name",placeholder:"Enter campaign name",required:!0})]})}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{children:["Keywords:",Object(p.jsx)("input",{type:"text",name:"keywords",placeholder:"Enter keywords for campaign",required:!0})]}),Object(p.jsxs)("label",{className:"status",children:["Status (on/off):",Object(p.jsx)("input",{type:"checkbox",name:"status"})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{children:["Bid amount:",Object(p.jsx)("input",{type:"number",name:"bidAmount",placeholder:"Enter bid amount",min:"1",required:!0})]}),Object(p.jsxs)("label",{children:["Campaign fund:",Object(p.jsx)("input",{type:"number",name:"fund",placeholder:"Enter campaign fund",min:"1",required:!0})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{children:["Town:",Object(p.jsx)("input",{type:"text",name:"town",placeholder:"Enter town name"})]}),Object(p.jsxs)("label",{children:["Radius [kilometers]:",Object(p.jsx)("input",{type:"number",name:"radius",placeholder:"Enter campaign radius",min:"1",required:!0})]})]}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"reset",children:"Reset"}),Object(p.jsx)("button",{type:"submit",children:"Submit"})]})]})};a(26);var g=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("header",{children:Object(p.jsx)("span",{children:"Add campaign"})}),Object(p.jsx)(O,{})]})};var f=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("header",{children:Object(p.jsx)("span",{children:"Edit campaign"})}),Object(p.jsx)(O,{})]})};var v=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{children:Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{exact:!0,path:"/",component:h}),Object(p.jsx)(r.a,{exact:!0,path:"/AddCampaign",component:g}),Object(p.jsx)(r.a,{exact:!0,path:"/EditCampaign",component:f})]})})})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.439de451.chunk.js.map