(this["webpackJsonpmi-pos"]=this["webpackJsonpmi-pos"]||[]).push([[0],{62:function(e,a,t){e.exports=t(90)},67:function(e,a,t){},69:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),s=t.n(l),o=(t(67),t(30)),c=t.n(o),i=t(36),u=t(50),d=t(51),m=t(55),p=t(53),v=t(37),b=t.n(v);t(69);var f=function(){return r.a.createElement("div",{className:"row data"},r.a.createElement("div",{className:"col text-center"},"  Apertura Caja "),r.a.createElement("div",{className:"col text-center"},"  Cierre Caja   "))},g=t(15),_=t(13),h=t(14),E=t(123),F=t(124),j=t(119);function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=new Date,t=a.getDate(),n=a.getMonth()+1,r=a.getFullYear();return"".concat(r).concat(e).concat(n<10?"0".concat(n):"".concat(n)).concat(e).concat(t)}function C(){var e=new Date,a=e.getHours(),t=e.getMinutes();return"".concat(a,":").concat(t)}function y(e){var a=null===e?0:e;return a>0&&(a/=100),a}var x=Object(j.a)((function(e){return{rightIcon:{marginLeft:e.spacing(1)},button:{margin:e.spacing(1)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:300},dense:{marginTop:19},menu:{width:200}}})),O=function(e){var a=e.datos,t=e.guardarApertura,l=e.bloquear,s=x(),o=y(a.value_open),c=y(a.value_previous_close),i=Object(n.useState)({date_open:N("-"),hour_open:C(),value_previous_close:c,value_open:o,observation:a.observation}),u=Object(h.a)(i,2),d=u[0],m=u[1],p=function(e){m(Object(_.a)(Object(_.a)({},d),{},Object(g.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:s.container,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),d.value_previous_close=100*d.value_previous_close,d.value_open=100*d.value_open,t(d)}},r.a.createElement(E.a,{disabled:!0,name:"date_open",id:"standard-disabled",label:"Fecha (yyyy/mm/dd)",defaultValue:d.date_open,className:s.textField,margin:"normal"}),r.a.createElement(E.a,{name:"hour_open",disabled:!0,id:"standard-disabled",label:"Hora (hh:mm)",defaultValue:d.hour_open,className:s.textField,margin:"normal"}),r.a.createElement(E.a,{name:"value_previous_close",id:"standard-disabled",label:"Total Anterior",disabled:l,defaultValue:d.value_previous_close,className:s.textField,margin:"normal",onChange:p}),r.a.createElement(E.a,{name:"value_open",id:"standard-disabled",label:"Total Inicial",disabled:l,defaultValue:d.value_open,className:s.textField,margin:"normal",onChange:p}),r.a.createElement("label",null,"Observaciones"),r.a.createElement("textarea",{className:"form-control rounded-0",id:"observation",name:"observation",disabled:l,rows:"2",defaultValue:d.observation,onChange:p}),r.a.createElement(F.a,{disabled:l,type:"submit",variant:"contained",color:"primary",value:"data",className:s.button},"Enviar")))},w=function(e){var a=e.datos,t=e.guardarApertura,n=e.finData,l=e.bloquear;return!1===n?null:r.a.createElement(O,{datos:a,guardarApertura:t,bloquear:l})},V=t(54),A=function(e){var a=e.a\u00f1adirGasto,t=Object(n.useState)({name:"",value:""}),l=Object(h.a)(t,2),s=l[0],o=l[1],c=function(e){o(Object(_.a)(Object(_.a)({},s),{},Object(g.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("center",null,r.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModal"},"Agregar Gasto")),r.a.createElement("div",{className:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Nuevo Gasto"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(E.a,{name:"name",id:"standard-disabled",label:"Descripci\xf3n",value:s.name,margin:"normal",onChange:c}),"   ",r.a.createElement(E.a,{name:"value",id:"standard-disabled",value:s.value,label:"$ Valor",margin:"normal",onChange:c})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Cerrar"),r.a.createElement("button",{type:"button",onClick:function(){a(s),o({name:"",value:""})},className:"btn btn-primary","data-dismiss":"modal"},"Guardar"))))))},D=Object(j.a)((function(e){return{rightIcon:{marginLeft:e.spacing(1)},button:{margin:e.spacing(1)},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:300},dense:{marginTop:19},menu:{width:200}}})),S=function(e){var a=e.guardarCierre,t=e.json_info,l=D(),s=Object(n.useState)([]),o=Object(h.a)(s,2),c=o[0],i=o[1],u=Object(n.useState)(0),d=Object(h.a)(u,2),m=d[0],p=d[1],v=Object(n.useState)(0),b=Object(h.a)(v,2),f=b[0],F=b[1],j=Object(n.useState)({date_close:N("-"),hour_close:C(),value_card:0,value_cash:0,value_close:0,value_open:t.value,value_sales:0,value_previous_close:0,sales_transfer:0,other_sales:0}),y=Object(h.a)(j,2),x=y[0],O=y[1],w=function(e){O(Object(_.a)(Object(_.a)({},x),{},Object(g.a)({},e.target.name,e.target.value))),"value_cash"===e.target.name&&(F(parseFloat(e.target.value)+parseFloat(x.value_card)+parseFloat(x.sales_transfer)+parseFloat(x.other_sales)),p(parseFloat(e.target.value)+parseFloat(x.value_card)+parseFloat(x.sales_transfer)+parseFloat(x.other_sales))),"value_card"===e.target.name&&(F(parseFloat(e.target.value)+parseFloat(x.value_cash)+parseFloat(x.sales_transfer)+parseFloat(x.other_sales)),p(parseFloat(e.target.value)+parseFloat(x.value_cash)+parseFloat(x.sales_transfer)+parseFloat(x.other_sales))),"sales_transfer"===e.target.name&&(F(parseFloat(e.target.value)+parseFloat(x.value_cash)+parseFloat(x.value_card)+parseFloat(x.other_sales)),p(parseFloat(e.target.value)+parseFloat(x.value_cash)+parseFloat(x.value_card)+parseFloat(x.other_sales))),"other_sales"===e.target.name&&(F(parseFloat(e.target.value)+parseFloat(x.value_cash)+parseFloat(x.value_card)+parseFloat(x.sales_transfer)),p(parseFloat(e.target.value)+parseFloat(x.value_cash)+parseFloat(x.value_card)+parseFloat(x.sales_transfer)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:l.container,noValidate:!0,autoComplete:"off"},r.a.createElement(E.a,{disabled:!0,name:"date_close",id:"standard-disabled",label:"Fecha (yyyy/mm/dd)",defaultValue:N("-"),className:l.textField,margin:"normal"}),r.a.createElement(E.a,{name:"hour_close",disabled:!0,id:"standard-disabled",label:"Hora (hh:mm)",defaultValue:C(),className:l.textField,margin:"normal"}),r.a.createElement(E.a,{name:"value_cash",id:"standard-disabled",label:"Ventas en efectivo",defaultValue:"0",value:x.value_cash,className:l.textField,margin:"normal",onChange:w}),r.a.createElement(E.a,{name:"value_card",id:"standard-disabled",label:"Ventas por tarjeta",defaultValue:"0",value:x.value_card,className:l.textField,margin:"normal",onChange:w}),r.a.createElement(E.a,{name:"sales_transfer",id:"standard-disabled",label:"Ventas por transferencia",defaultValue:"0",value:x.sales_transfer,className:l.textField,margin:"normal",onChange:w}),r.a.createElement(E.a,{name:"other_sales",id:"standard-disabled",label:"Ventas por otros m\xe9todos",defaultValue:"0",value:x.other_sales,className:l.textField,margin:"normal",onChange:w})),r.a.createElement(r.a.Fragment,null,r.a.createElement("center",null,r.a.createElement("strong",null,"Valor para cierre de caja")," "),r.a.createElement("form",{className:l.container,noValidate:!0,autoComplete:"off"},r.a.createElement(E.a,{disabled:!0,name:"value_sales",id:"standard-disabled",label:"Total en ventas",defaultValue:"$ 00.00",value:f,className:l.textField,margin:"normal",onChange:w}),r.a.createElement(E.a,{name:"value_open",disabled:!0,id:"standard-disabled",label:"Total apertura",defaultValue:t.value/100,className:l.textField,margin:"normal",onChange:w}),r.a.createElement(E.a,{name:"value_previous_close",id:"standard-disabled",label:"Propinas en efecto",defaultValue:"$ 00.00",className:l.textField,margin:"normal"}),r.a.createElement(E.a,{name:"value_open",id:"standard-disabled",label:"Propinas en tarjeta",defaultValue:"$ 0",className:l.textField,margin:"normal"})),r.a.createElement("center",null,r.a.createElement(E.a,{name:"value_close",id:"standard-disabled",label:"Total de caja",value:m,defaultValue:"",className:l.textField,margin:"normal",onChange:w})),r.a.createElement(A,{"a\xf1adirGasto":function(e){i([].concat(Object(V.a)(c),[e])),p(parseFloat(m)-parseFloat(e.value))}}),r.a.createElement("center",null,r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Corte en X")),r.a.createElement("center",null,r.a.createElement("button",{onClick:function(e){e.preventDefault(),x.expenses=c,x.value_sales=100*f,x.sales_transfer=100*x.sales_transfer,x.other_sales=100*x.other_sales,x.value_card=100*x.value_card,x.value_cash=100*x.value_cash,x.value_close=100*m,a(x)},type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Cerrar caja con $ ",f))))},k=function(){return r.a.createElement("div",null,r.a.createElement("img",{width:"50",alt:"",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8lXm-7PJD03Ah0i79wb-aAJ-aof4zQHubk2Hy3Kt48iqsar3"}),"No existe informaci\xf3n para mostrar")},M=function(e){var a=e.datos,t=e.guardarCierre,n=e.json_info;return null===a.value_open?r.a.createElement(k,null):r.a.createElement(S,{guardarCierre:t,json_info:n})},T="";T="".concat("https://mi-pos-ec.herokuapp.com/");var q="".concat(T,"/api/v1/"),G=q+"cashier/balance",L=q+"cashier/balance/open/day",$=q+"cashier/balance/close/day",H=q+"has/open/cashier/balance",B=t(26),I=t.n(B),J=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).guardarApertura=function(){var e=Object(i.a)(c.a.mark((function e(a){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post(L,a);case 2:return t=e.sent,e.next=5,I.a.get(H);case 5:r=e.sent,n.setState({json_info:r.data[0]}),n.setState({json_apertura:t.data,mostrarCierre:!0}),b.a.fire({position:"top-end",icon:"success",title:"Apertura de caja creado!",showConfirmButton:!1,timer:1500});case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.guardarCierre=function(){var e=Object(i.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post($,a);case 2:200===e.sent.status&&b.a.fire({position:"top-end",icon:"success",title:"Cierre finalizado correctamente.",showConfirmButton:!1,timer:1500});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.state={openDay:!1,json_apertura:[],mostrarCierre:!1,json_info:[]},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;I.a.get(G).then((function(a){e.setState({json_apertura:a.data.results,openDay:!0}),null!==e.state.json_apertura.value_open&&I.a.get(H).then((function(a){e.setState({json_info:a.data[0]}),e.setState({mostrarCierre:!0})}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(f,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(w,{finData:this.state.openDay,guardarApertura:this.guardarApertura,datos:this.state.json_apertura,bloquear:this.state.mostrarCierre})),r.a.createElement("div",{className:"col"},this.state.mostrarCierre?r.a.createElement(M,{datos:this.state.json_apertura,json_info:this.state.json_info,guardarCierre:this.guardarCierre}):r.a.createElement(k,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.890e340e.chunk.js.map