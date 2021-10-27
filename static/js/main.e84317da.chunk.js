(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(10),r=n.n(c),o=n(14),s=n(4),i=n(23),l=n(11),u=n(12),d=n(15),b=n(13),j=n(3),h=n.n(j),m=n(0),p=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{className:h.a.form,children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("h3",{children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.props.onChangeInputHandler,className:h.a.input})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("h3",{children:"Tel. number "}),Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.props.onChangeInputHandler,className:h.a.input})]}),Object(m.jsx)("button",{type:"button",className:h.a.button,onClick:this.props.addContactHandler,children:"Add Contact"})]})})}}]),n}(a.Component),f=n(6),O=n.n(f);var C=function(t){var e=t.filteredContacts,n=t.deleteContact;return Object(m.jsx)("ul",{className:O.a.list,children:e.map((function(t){return Object(m.jsxs)("li",{className:O.a.item,children:[t.name," : ",t.number,Object(m.jsx)("button",{onClick:function(){return n(t.id)},className:O.a.button,children:" Delete "})]},t.id)}))})},_=n(7),g=n.n(_);function x(t){var e=t.filter,n=t.handleFilterChange;return Object(m.jsxs)("label",{className:g.a.label,children:[Object(m.jsx)("h3",{className:g.a.heading,children:"Find contacts by name"}),Object(m.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",onChange:n,value:e,className:g.a.input})]})}var N=n(9),v=n.n(N);function A(){var t=Object(a.useState)((function(){var t=localStorage.getItem("contacts");return JSON.parse(t)})),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),l=Object(s.a)(r,2),u=l[0],d=l[1],b=Object(a.useState)(""),j=Object(s.a)(b,2),h=j[0],f=j[1],O=Object(a.useState)(""),_=Object(s.a)(O,2),g=_[0],N=_[1],A=function(t){if(n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("".concat(t," is already in contacts")),!0};Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}));var F=n.filter((function(t){return t.name.toLowerCase().includes(g.toLowerCase())}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:v.a.heading,children:"PhoneBook"}),Object(m.jsx)(p,{onChangeInputHandler:function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":d(a);break;case"number":f(a)}},addContactHandler:function(t){A(u)||c([].concat(Object(o.a)(n),[{name:u,number:h,id:Object(i.a)()}]))}}),Object(m.jsx)("h3",{className:v.a.heading,children:"Contacts"}),Object(m.jsx)(x,{filter:g,handleFilterChange:function(t){N(t.target.value)}}),Object(m.jsx)(C,{filteredContacts:F,deleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})}r.a.render(Object(m.jsx)(A,{}),document.querySelector("#root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__1oZUX",button:"ContactForm_button__3deV2",input:"ContactForm_input__7mGQU"}},6:function(t,e,n){t.exports={list:"ContactList_list__2fW1a",item:"ContactList_item__1ts1C",button:"ContactList_button__3gABi"}},7:function(t,e,n){t.exports={heading:"Filter_heading__2u_MK",input:"Filter_input__2DULL",label:"Filter_label__1FJyd"}},9:function(t,e,n){t.exports={heading:"App_heading__15kTF"}}},[[21,1,2]]]);
//# sourceMappingURL=main.e84317da.chunk.js.map