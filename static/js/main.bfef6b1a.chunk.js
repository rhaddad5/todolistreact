(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(5),c=a.n(l),o=(a(19),a(11)),m=a(6),s=a(7),i=a(8),u=a(13),d=a(12),b=a(9),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={element:"",items:[]},e.onChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.setState({element:"",items:[].concat(Object(o.a)(e.state.items),[{element:e.state.element}])})},e.deleteItem=function(t){var a=e.state.items;a.splice(t,1),e.setState({items:a})},e.renderTodo=function(){return e.state.items.map((function(t,a){return r.a.createElement("div",{className:"card mb-3",key:a},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,t.element," ",r.a.createElement(b.a,{icon:["far","times-circle"],style:{cursor:"pointer",float:"right",color:"red"},onClick:function(){return e.deleteItem(a)}}))))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card my-3"},r.a.createElement("div",{className:"card-header"},"To-do list"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"element"},"Chose \xe0 faire"),r.a.createElement("input",{type:"text",className:"form-control form-control-lg",name:"element",onChange:this.onChange,value:this.state.element}),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Ajouter"))))),this.renderTodo())}}]),a}(n.Component),h=a(2),E=a(10);h.b.add(E.a);var p=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(f,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bfef6b1a.chunk.js.map