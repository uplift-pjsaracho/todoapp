(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{132:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),c=n(57),i=n.n(c),r=(n(65),n(17)),o=n(18),j=n(20),d=n(19),l=(n(66),n(0)),u=function(t){return Object(l.jsx)("div",{children:t.item.name})},b=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={items:[{id:1,name:"Burger",price:50,category:"Food",status:"active",image:"https://image.flaticon.com/icons/svg/1046/1046784.svg"},{id:2,name:"Pizza",price:100,category:"Food",status:"active",image:"https://image.flaticon.com/icons/svg/1046/1046771.svg"},{id:3,name:"Fries",price:25,category:"Food",status:"active",image:"https://image.flaticon.com/icons/svg/1046/1046786.svg"},{id:4,name:"Coffee",price:35,category:"Drink",status:"active",image:"https://image.flaticon.com/icons/svg/1046/1046785.svg"},{id:5,name:"Iced Tea",price:45,category:"Drink",status:"active",image:"https://image.flaticon.com/icons/svg/1046/1046782.svg"},{id:6,name:"Hot Tea",price:45,category:"Drink",status:"active",image:"https://image.flaticon.com/icons/svg/1046/1046792.svg"}],category:"All",cart:[{id:1,quantity:1,name:"Burger",price:50,category:"Food",status:"active",image:"https://image.flaticon.com/icons/svg/1046/1046784.svg"},{id:3,quantity:1,name:"Fries",price:25,category:"Food",status:"active",image:"https://image.flaticon.com/icons/svg/1046/1046786.svg"}]},t.categoryChangeHandler=function(e){t.setState({category:e.target.value})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state.items;return"All"!==this.state.category&&(e=this.state.items.filter((function(e){return e.category===t.state.category}))),Object(l.jsxs)("div",{children:[this.state.category,Object(l.jsxs)("select",{value:this.state.category,onChange:this.categoryChangeHandler,children:[Object(l.jsx)("option",{children:"All"}),Object(l.jsx)("option",{children:"Food"}),Object(l.jsx)("option",{children:"Drink"})]}),e.map((function(t){return Object(l.jsx)(u,{item:t})}))]})}}]),n}(s.Component),h=n(21),g=n(60),O=function(t){var e=Object(s.useState)("john"),n=Object(h.a)(e,2),a=n[0],c=n[1],i=Object(s.useState)(""),r=Object(h.a)(i,2),o=r[0],j=r[1];return Object(l.jsxs)("div",{children:["new task:",Object(l.jsx)("input",{type:"text",value:a,onChange:function(t){c(t.target.value)}}),Object(l.jsx)("br",{}),Object(l.jsx)("small",{children:o}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(e){""!==a.trim()?(t.save(a),j("")):j("this field is required"),c("")},children:"+ Add Task"})]})},p=(n(68),function(t){var e=t.task.name;return Object(l.jsx)("tr",{children:e})}),v=function(t){return Object(l.jsx)("div",{children:0!==t.tasks.length?Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:Object(l.jsxs)("td",{children:[t.status," Tasks"]})})}),Object(l.jsx)("tbody",{children:t.tasks.map((function(t){return Object(l.jsx)(p,{task:t})}))})]}):Object(l.jsxs)("h2",{children:["No ",t.status," Tasks"]})})},m=n(10),x=n(2),f=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={tasks:[{name:"eat",status:"done"},{name:"code",status:"done"},{name:"sleep",status:"done"}]},t.save=function(e){var n=[{name:e,status:"pending"}].concat(Object(g.a)(t.state.tasks));t.setState({tasks:n})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.tasks.filter((function(t){return"pending"===t.status})),e=this.state.tasks.filter((function(t){return"done"===t.status}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"To Do App"}),Object(l.jsx)(m.b,{to:"/todo/add",children:"Add Task"})," ",Object(l.jsx)("br",{}),Object(l.jsx)(m.b,{to:"/todo/pending",children:"Pending Tasks"})," ",Object(l.jsx)("br",{}),Object(l.jsx)(m.b,{to:"/todo/done",children:"Done Task"})," ",Object(l.jsx)("br",{}),Object(l.jsx)(x.a,{path:"/todo/add",children:Object(l.jsx)(O,{save:this.save})}),Object(l.jsx)(x.a,{path:"/todo/pending",children:Object(l.jsx)(v,{tasks:t,status:"Pending"})}),Object(l.jsx)(x.a,{exact:!0,path:"/todo/done",children:Object(l.jsx)(v,{tasks:e,status:"Done"})})]})}}]),n}(s.Component),y=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).prefix="mc",t}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("a",{href:"/todo",children:"To do using anchor"})," ",Object(l.jsx)("br",{}),Object(l.jsx)(m.b,{to:"/todo",children:"To Do App"})," ",Object(l.jsx)("br",{}),Object(l.jsx)(m.b,{to:"/resto",children:"Resto App"})," ",Object(l.jsx)("br",{}),Object(l.jsx)(x.a,{path:"/todo",component:f}),Object(l.jsx)(x.a,{path:"/resto",component:b})]})}}]),n}(s.Component),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),s(t),a(t),c(t),i(t)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m.a,{children:Object(l.jsx)(y,{})})}),document.getElementById("root")),k()},65:function(t,e,n){},66:function(t,e,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.3a204adb.chunk.js.map