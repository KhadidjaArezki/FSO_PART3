(this.webpackJsonppart2b=this.webpackJsonppart2b||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(17),r=t.n(c),a=t(8),u=t(3),o=t(2),s=t(4),i=t.n(s),d="/api/persons",l=function(){return i.a.get(d).then((function(e){return e.data}))},b=function(e){return i.a.post(d,e).then((function(e){return e.data}))},j=function(e){return i.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},h=function(e){return i.a.put("".concat(d,"/").concat(e.id),e).then((function(e){return e.data}))},f=t(0),m=function(e){var n=e.message,t=e.messageClass;return null===n?null:Object(f.jsx)("div",{className:t,children:n})},O=(t(41),function(e){var n=e.value,t=e.handler;return Object(f.jsxs)("div",{children:["filter shown with: ",Object(f.jsx)("input",{value:n,onChange:t})]})}),v=function(e){var n=e.submitHandler,t=e.nameValue,c=e.nameChangeHandler,r=e.numberValue,a=e.numberChangeHandler;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:t,onChange:c})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:r,onChange:a})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.person,t=e.handleDelete;return Object(f.jsxs)("li",{children:[n.name,": ",n.number,Object(f.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})]},n.id)},x=function(e){var n=e.personsToShow,t=e.deleteHandler;return n.map((function(e){return Object(f.jsx)(p,{person:e,handleDelete:t})}))},w=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),s=Object(u.a)(r,2),i=s[0],d=s[1],p=Object(o.useState)(""),w=Object(u.a)(p,2),g=w[0],C=w[1],S=Object(o.useState)(""),H=Object(u.a)(S,2),y=H[0],k=H[1],A=Object(o.useState)(null),D=Object(u.a)(A,2),V=D[0],E=D[1],L=Object(o.useState)(""),N=Object(u.a)(L,2),T=N[0],J=N[1];Object(o.useEffect)((function(){l().then((function(e){return c(e)}))}),[]);var P=function(e,n){d(""),C(""),E(e),J(n),setTimeout((function(){E(null)}),5e3)};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(m,{message:V,messageClass:T}),Object(f.jsx)(O,{value:y,handler:function(e){k(e.target.value)}}),Object(f.jsx)("h3",{children:"Add New"}),Object(f.jsx)(v,{submitHandler:function(e){if(e.preventDefault(),t.some((function(e){return e.name===i}))){var n="".concat(i," has ALREADY been added to Phonebook. Do you want to replace the old number with the new one?");if(window.confirm(n)){var r=t.find((function(e){return e.name===i})),u=Object(a.a)(Object(a.a)({},r),{},{number:g});h(u).then((function(e){c(t.map((function(n){return n.id!==e.id?n:e}))),d(""),C("");var n="Updated ".concat(e.name);P(n,"success")})).catch((function(e){console.error(e),l().then((function(e){return c(e)}));var n="".concat(u.name," was already deleted");P(n,"error")}))}}else{var o={id:t.length+1,name:i,number:g};b(o).then((function(e){c(t.concat(e));var n="Added ".concat(e.name);P(n,"success")})).catch((function(e){console.error(e);var n="".concat(o.name," cannot be added!");P(n,"error")}))}},nameValue:i,nameChangeHandler:function(e){d(e.target.value)},numberValue:g,numberChangeHandler:function(e){C(e.target.value)}}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)("ul",{children:Object(f.jsx)(x,{personsToShow:""===y?t:t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})),deleteHandler:function(e){if(window.confirm("Are you sure you want to delete this perosn?")){var n=t.find((function(n){return n.id===e})).name;j(e).then((function(){l().then((function(e){c(e);var t="".concat(n," successfully deleted");P(t,"success")}))})).catch((function(e){console.error(e);var t="".concat(n," does not exist");P(t,"error")}))}}})})]})};r.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.7d4a608a.chunk.js.map